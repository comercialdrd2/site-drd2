const fs = require('fs');
const path = require('path');

const map = {
  'avcb-galpao-industrial-sao-paulo.ts': "<strong>AVCB para galpão industrial</strong> com acompanhamento técnico completo e resposta a Comunique-se sem custo adicional.<br/><br/>Regularize sua operação com total segurança jurídica e reduza a zero o risco de <strong>interdição</strong>.",
  'avcb-condominio-sao-paulo.ts': "<strong>AVCB para condomínio</strong> com vistoria detalhada e gestão completa de todas as etapas junto aos Bombeiros.<br/><br/>Proteja o seu edifício com responsabilidade técnica e elimine os riscos jurídicos em caso de sinistro.",
  'avcb-restaurante-sao-paulo.ts': "<strong>AVCB para restaurante</strong> com liberação ágil e acompanhamento de ponta a ponta sem taxas ocultas.<br/><br/>Regularize seu estabelecimento com segurança e evite o <strong>embargo</strong> da sua cozinha no horário de pico.",
  'avcb-academia-sao-paulo.ts': "<strong>AVCB para academia</strong> conduzido de forma estratégica para não impactar a rotina de treinos dos alunos.<br/><br/>Aprove seu projeto contra incêndio e blinde o seu espaço contra <strong>embargos</strong> e paralisações repentinas.",
  'avcb-hotel-sao-paulo.ts': "<strong>AVCB para hotel</strong> com tramitação prioritária e gestão de eventuais Comunique-ses sem custo adicional.<br/><br/>Mantenha seu alvará municipal em dia e evite a evacuação forçada e o <strong>cancelamento</strong> de reservas.",
  'avcb-motel-sao-paulo.ts': "<strong>AVCB para motel</strong> aprovado com discrição absoluta e adequações que não travam o giro de ocupação.<br/><br/>Garanta a segurança das suas suítes e proteja seu negócio da exposição pública de um <strong>lacre</strong>.",
  'avcb-hostel-sao-paulo.ts': "<strong>AVCB para hostel</strong> com emissão pontual e assessoria de engenharia especializada no setor de hospedagem.<br/><br/>Regularize seu espaço de forma definitiva e evite multas ou <strong>embargos</strong> surpresa na alta temporada.",
  'avcb-casa-repouso-sao-paulo.ts': "<strong>AVCB para casa de repouso</strong> com máxima urgência na aprovação técnica e foco na segurança dos residentes.<br/><br/>Evite a <strong>transferência</strong> forçada de idosos e notificações da Vigilância Sanitária entregando uma adequação certificada."
};

const dir = path.join(__dirname, 'src/data/pages');

Object.keys(map).forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the first element of intro array
    content = content.replace(/(intro:\s*\[\s*)(".*?")/, (match, p1, p2) => {
      return `${p1}"${map[file]}"`;
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
