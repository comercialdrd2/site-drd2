const fs = require("fs");
const path = require("path");

const root = path.join(process.cwd(), "src");

const replacements = [
  // Mojibake visivel em textos e titulos administrativos.
  ["â€¢", "•"],
  ["ðŸ”´", "Atenção:"],
  ["ðŸ‘‰", "Ponto técnico:"],
  ["ðŸ”¥", "Risco crítico:"],
  ["ðŸš¨", "Alerta técnico:"],
  ["ðŸ§±", "CMAR:"],
  ["ðŸ“„", "Documentação:"],
  ["ðŸ—ºï¸ ", ""],
  ["ðŸ“ ", ""],
  ["ðŸ™ï¸ ", ""],
  ["ðŸ”§ ", ""],
  ["ðŸ”„ ", ""],
  ["ðŸ¢ ", ""],
  ["ðŸš’ ", ""],
  ["ðŸ“‹ ", ""],
  ["ðŸ’¦ ", ""],
  ["ðŸš¿ ", ""],
  ["ðŸ½ï¸ ", ""],
  ["ðŸš€ ", ""],
  ["ðŸ“‚ ", ""],

  // Ortografia, acentuacao e padronizacao tecnica.
  ["indústriais", "industriais"],
  ["Indústriais", "Industriais"],
  ["emergêncial", "emergencial"],
  ["grudo", "preso"],
  ["contraincêndio", "contra incêndio"],
  ["Contraincêndio", "Contra incêndio"],
  ["auto evacuar", "evacuar sem assistência"],
  ["autoevacuar", "evacuar sem assistência"],
  ["Janeiro/Fevereiro", "janeiro/fevereiro"],
  ["Batalhões fiscalizadores dos bombeiros", "equipes fiscalizadoras do Corpo de Bombeiros"],
  ["batalhões fiscalizadores dos bombeiros", "equipes fiscalizadoras do Corpo de Bombeiros"],
  ["Bombeiros SP", "Corpo de Bombeiros de São Paulo"],
  ["bombeiros SP", "Corpo de Bombeiros de São Paulo"],
  ["VISA Municipal", "Vigilância Sanitária Municipal"],
  ["VISA Estadual", "Vigilância Sanitária Estadual"],
  ["VISA SP", "Vigilância Sanitária de São Paulo"],
  ["Via Facil", "Via Fácil"],
  ["Via facil", "Via Fácil"],
  ["Via fácil", "Via Fácil"],
  ["e-Projeto", "e-Projeto"],

  // Copywriting e confianca, sem reduzir conteudo.
  ["Solicitar diagnóstico gratuito pelo WhatsApp", "Solicitar diagnóstico técnico gratuito pelo WhatsApp"],
  ["Falar com Engenheiro", "Falar com engenheiro especialista"],
  ["Falar com Engenheiro Agora", "Falar com engenheiro especialista agora"],
  ["Fale com um Engenheiro Especialista", "Fale com um engenheiro especialista em AVCB, CLCB e regularização junto ao Corpo de Bombeiros"],
  ["Orçamento sem compromisso", "Orçamento técnico sem compromisso"],
  ["Diagnóstico Gratuito", "Diagnóstico técnico gratuito"],
  ["Diagnóstico gratuito", "Diagnóstico técnico gratuito"],
  ["Aprovação Garantida", "Aprovação conduzida por engenharia"],
  ["Processo 100% direto", "Processo técnico conduzido de ponta a ponta"],
  ["Avaliação sem custo", "Avaliação inicial sem custo"],
  ["Toda São Paulo", "Atendimento em São Paulo"],
  ["Capital e Grande SP", "Capital, Grande São Paulo e regiões estratégicas"],
  ["Regularize antes da interdição", "Regularize antes de uma exigência, multa ou interdição"],
  ["Evite embargo", "Evite embargo, multa, interdição e bloqueio de licenças"],
  ["Regularização ágil", "Regularização técnica ágil"],
  ["A segurança não pode esperar.", "A segurança, a regularização e a continuidade da operação não podem esperar."],
  ["A segurança dos seus moradores.", "A segurança dos moradores, a validade do AVCB e a proteção jurídica do síndico."],
];

function collectFiles(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) {
      collectFiles(file, files);
    } else if (/\.(ts|tsx|js|jsx|json|md)$/.test(file)) {
      files.push(file);
    }
  }
  return files;
}

let changed = 0;
const touched = [];

for (const file of collectFiles(root)) {
  const original = fs.readFileSync(file, "utf8");
  let next = original;

  for (const [from, to] of replacements) {
    next = next.split(from).join(to);
  }

  // Ajustes contextuais seguros.
  next = next.replace(
    /Sem AVCB válido, sua ([^.]+?) não conseguirá renovar alvará, licença sanitária ou seguro\./g,
    "Sem AVCB válido, sua $1 pode ter dificuldades para renovar alvará, licença sanitária ou seguro, além de ficar exposta a exigências do Corpo de Bombeiros."
  );
  next = next.replace(
    /O AVCB é mais que um documento, é o certificado real de segurança/g,
    "O AVCB é mais do que um documento: é o certificado oficial que comprova a segurança contra incêndio"
  );
  next = next.replace(
    /Quem ainda trata o AVCB como burocracia secundária está correndo um risco real/g,
    "Quem ainda trata o AVCB como uma burocracia secundária assume um risco técnico, jurídico e operacional real"
  );
  next = next.replace(
    /Regularizamos seu estabelecimento com diagnóstico técnico gratuito e garantia de conformidade plena/g,
    "Regularizamos seu estabelecimento com diagnóstico técnico gratuito, orientação de engenharia e condução completa do processo até a conformidade documental"
  );

  if (next !== original) {
    fs.writeFileSync(file, next, "utf8");
    changed++;
    touched.push(path.relative(process.cwd(), file));
  }
}

console.log(`arquivos_revisados=${changed}`);
for (const file of touched) {
  console.log(file);
}
