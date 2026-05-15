const fs = require('fs');
const path = require('path');

const map = {
  'renovacao-avcb-condominio-sao-paulo.ts': "<strong>AVCB do condomínio vencido?</strong> A ausência do certificado trava o seguro predial e transfere a responsabilidade criminal de qualquer sinistro direto para o síndico.<br/><br/>A DRD2 assume toda a burocracia técnica para aprovar seu documento com agilidade e respaldo jurídico completo.",
  'renovacao-avcb-restaurante-sao-paulo.ts': "<strong>AVCB do restaurante vencido?</strong> Uma <strong>interdição</strong> no horário de pico fecha a casa, destrói o faturamento da noite e arranha a reputação de forma irreversível.<br/><br/>Nossa equipe conduz a regularização sem interromper sua operação e gerencia eventuais Comunique-ses sem taxas ocultas.",
  'renovacao-avcb-hotel-sao-paulo.ts': "<strong>AVCB do hotel vencido?</strong> Perder o alvará obriga a evacuação imediata de hóspedes e desencadeia um prejuízo devastador com <strong>cancelamentos</strong> em massa.<br/><br/>Atuamos com máxima discrição para renovar sua licença de forma direta, garantindo que o seu cliente nem perceba o processo.",
  'renovacao-avcb-academia-sao-paulo.ts': "<strong>AVCB da academia vencido?</strong> Ter o prédio <strong>embargado</strong> significa catracas travadas, equipamentos ociosos e alunos migrando para o concorrente.<br/><br/>Entregamos seu projeto aprovado de ponta a ponta sem interferir na rotina de treinos, garantindo total previsibilidade nos custos.",
  'renovacao-avcb-igreja-sao-paulo.ts': "<strong>AVCB da igreja vencido?</strong> A <strong>interdição</strong> do templo durante uma reunião expõe a liderança e impede o acolhimento seguro da congregação.<br/><br/>A DRD2 elabora soluções viáveis que respeitam a arquitetura do espaço, cuidando das adequações até a liberação definitiva.",
  'renovacao-avcb-casa-de-repouso-sao-paulo.ts': "<strong>AVCB da casa de repouso vencido?</strong> A pressão cruzada com a Vigilância Sanitária pode forçar a <strong>transferência</strong> dramática de idosos acamados.<br/><br/>Tratamos o seu processo de saúde como prioridade máxima, coordenando as aprovações nos bombeiros com zero estresse para a administração.",
  'renovacao-avcb-hostel-sao-paulo.ts': "<strong>AVCB do hostel vencido?</strong> Um bloqueio surpresa em plena alta temporada zera seu fluxo de caixa e compromete a lucratividade do ano inteiro.<br/><br/>Nossa engenharia resolve exigências técnicas de forma definitiva, blindando sua hospedagem contra <strong>interdições</strong> inesperadas.",
  'renovacao-avcb-motel-sao-paulo.ts': "<strong>AVCB do motel vencido?</strong> O <strong>lacre</strong> da operação na madrugada com clientes nas suítes gera um desastre de imagem inaceitável.<br/><br/>Renove seu certificado sob rigoroso sigilo corporativo, com intervenções programadas que protegem a privacidade e não travam a sua receita.",
  'renovacao-avcb-hospital-clinica-sao-paulo.ts': "<strong>AVCB do hospital ou clínica vencido?</strong> O <strong>cancelamento</strong> do alvará sanitário e a remoção de pacientes internados são riscos operacionais extremos.<br/><br/>Gerenciamos renovações de alta complexidade em saúde com a segurança de resolver qualquer exigência normativa incluída no processo.",
  'renovacao-avcb-escola-sao-paulo.ts': "<strong>AVCB da escola vencido?</strong> Suspender as aulas por <strong>embargo</strong> destrói a confiança das famílias e causa a perda instantânea de matrículas.<br/><br/>Realizamos as vistorias em horários de contraturno para emitir seu certificado de forma segura, silenciosa e com total amparo legal.",
  'renovacao-avcb-supermercado-sao-paulo.ts': "<strong>AVCB do supermercado vencido?</strong> A <strong>interdição</strong> das lojas representa perdas gigantescas de perecíveis e o abandono imediato pelo consumidor local.<br/><br/>Cuidamos de todo o trâmite da renovação fora do horário de movimento, mantendo suas vendas intactas e sem custos inesperados."
};

const dir = path.join(__dirname, 'src/data/pages');

Object.keys(map).forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the first element of intro array
    // Regex matches intro: [\n  "old text",
    content = content.replace(/(intro:\s*\[\s*)(".*?")/, (match, p1, p2) => {
      return `${p1}"${map[file]}"`;
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
