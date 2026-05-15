const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const replacements = [
  ["Sao Paulo", "São Paulo"],
  ["sao paulo", "São Paulo"],
  ["Incendio", "Incêndio"],
  ["incendio", "incêndio"],
  ["Aprovacao", "Aprovação"],
  ["aprovacao", "aprovação"],
  ["Regularizacao", "Regularização"],
  ["regularizacao", "regularização"],
  ["Orcamento", "Orçamento"],
  ["orcamento", "orçamento"],
  ["Diagnostico", "Diagnóstico"],
  ["diagnostico", "diagnóstico"],
  ["Edificacao", "Edificação"],
  ["edificacao", "edificação"],
  ["Edificacoes", "Edificações"],
  ["edificacoes", "edificações"],
  ["Ocupacao", "Ocupação"],
  ["ocupacao", "ocupação"],
  ["Manutencao", "Manutenção"],
  ["manutencao", "manutenção"],
  ["Instalacao", "Instalação"],
  ["instalacao", "instalação"],
  ["Seguranca", "Segurança"],
  ["seguranca", "segurança"],
  ["Tecnico", "Técnico"],
  ["tecnico", "técnico"],
  ["Tecnica", "Técnica"],
  ["tecnica", "técnica"],
  ["Documentacao", "Documentação"],
  ["documentacao", "documentação"],
  ["Adequacao", "Adequação"],
  ["adequacao", "adequação"],
  ["Analise", "Análise"],
  ["analise", "análise"],
  ["Obrigatorio", "Obrigatório"],
  ["obrigatorio", "obrigatório"],
  ["Obrigatoria", "Obrigatória"],
  ["obrigatoria", "obrigatória"],
  ["Area", "Área"],
  ["area", "área"],
  ["Predio", "Prédio"],
  ["predio", "prédio"],
  ["Predios", "Prédios"],
  ["predios", "prédios"],
  ["Imovel", "Imóvel"],
  ["imovel", "imóvel"],
  ["Imoveis", "Imóveis"],
  ["imoveis", "imóveis"],
  ["Sindico", "Síndico"],
  ["sindico", "síndico"],
  ["Condominios", "Condomínios"],
  ["condominios", "condomínios"],
  ["Galpoes", "Galpões"],
  ["galpoes", "galpões"],
  ["Industria", "Indústria"],
  ["industria", "indústria"],
  ["Industrias", "Indústrias"],
  ["industrias", "indústrias"],
  ["Quimica", "Química"],
  ["quimica", "química"],
  ["Eletrica", "Elétrica"],
  ["eletrica", "elétrica"],
  ["Eletrico", "Elétrico"],
  ["eletrico", "elétrico"],
  ["Hidraulico", "Hidráulico"],
  ["hidraulico", "hidráulico"],
  ["Calculo", "Cálculo"],
  ["calculo", "cálculo"],
  ["Automatico", "Automático"],
  ["automatico", "automático"],
  ["Automaticos", "Automáticos"],
  ["automaticos", "automáticos"],
  ["Deteccao", "Detecção"],
  ["deteccao", "detecção"],
  ["Protecao", "Proteção"],
  ["protecao", "proteção"],
  ["Emergencia", "Emergência"],
  ["emergencia", "emergência"],
  ["Sinalizacao", "Sinalização"],
  ["sinalizacao", "sinalização"],
  ["Iluminacao", "Iluminação"],
  ["iluminacao", "iluminação"],
  ["Pressao", "Pressão"],
  ["pressao", "pressão"],
  ["Vazao", "Vazão"],
  ["vazao", "vazão"],
  ["Valvulas", "Válvulas"],
  ["valvulas", "válvulas"],
  ["Manometros", "Manômetros"],
  ["manometros", "manômetros"],
  ["Tubulacao", "Tubulação"],
  ["tubulacao", "tubulação"],
  ["Reservatorio", "Reservatório"],
  ["reservatorio", "reservatório"],
  ["Recepcao", "Recepção"],
  ["recepcao", "recepção"],
  ["Hoteis", "Hotéis"],
  ["hoteis", "hotéis"],
  ["Hospedes", "Hóspedes"],
  ["hospedes", "hóspedes"],
  ["Publico", "Público"],
  ["publico", "público"],
  ["Lotacao", "Lotação"],
  ["lotacao", "lotação"],
  ["Alvara", "Alvará"],
  ["alvara", "alvará"],
  ["Licenca", "Licença"],
  ["licenca", "licença"],
  ["Licencas", "Licenças"],
  ["licencas", "licenças"],
  ["Orientacao", "Orientação"],
  ["orientacao", "orientação"],
  ["Execucao", "Execução"],
  ["execucao", "execução"],
  ["Emissao", "Emissão"],
  ["emissao", "emissão"],
  ["Inspecao", "Inspeção"],
  ["inspecao", "inspeção"],
  ["Medicao", "Medição"],
  ["medicao", "medição"],
  ["Aterramento", "Aterramento"],
  ["para-raios em Sao Paulo", "para-raios em São Paulo"],
  ["nao", "não"],
  ["Nao", "Não"],
];

function improveText(text) {
  if (!text || text.includes("/") || text.includes("@/") || text.includes("http")) {
    return text;
  }

  let next = text;
  for (const [from, to] of replacements) {
    next = next.split(from).join(to);
  }
  return next;
}

function collectFiles(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) collectFiles(file, files);
    else if (/\.(ts|tsx)$/.test(file)) files.push(file);
  }
  return files;
}

function collectRanges(sourceFile, ranges = []) {
  function visit(node) {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      if (!ts.isImportDeclaration(node.parent) && !ts.isExportDeclaration(node.parent)) {
        const start = node.getStart(sourceFile) + 1;
        const end = node.getEnd() - 1;
        ranges.push({ start, end });
      }
    } else if (node.kind === ts.SyntaxKind.JsxText) {
      ranges.push({ start: node.getStart(sourceFile), end: node.getEnd() });
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return ranges;
}

let changed = 0;
for (const file of collectFiles(path.join(process.cwd(), "src"))) {
  const original = fs.readFileSync(file, "utf8");
  const sourceFile = ts.createSourceFile(file, original, ts.ScriptTarget.Latest, true, file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const ranges = collectRanges(sourceFile).sort((a, b) => b.start - a.start);
  let next = original;

  for (const range of ranges) {
    const before = next.slice(range.start, range.end);
    const after = improveText(before);
    if (after !== before) {
      next = next.slice(0, range.start) + after + next.slice(range.end);
    }
  }

  if (next !== original) {
    fs.writeFileSync(file, next, "utf8");
    changed++;
  }
}

console.log(`arquivos_revisados=${changed}`);
