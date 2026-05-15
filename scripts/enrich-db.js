const fs = require('fs');
const path = require('path');

// Ler o arquivo atual (apenas para extrair os arrays com regex, já que é TS)
const dbPath = path.join(__dirname, '../src/data/bairros-renovacao.ts');
const content = fs.readFileSync(dbPath, 'utf-8');

// Extrair os arrays
const extractArray = (name) => {
  const regex = new RegExp(`export const ${name}: BairroData\\[\\] = (\\[[\\s\\S]*?\\]);`, 'm');
  const match = content.match(regex);
  if (!match) return [];
  // Evaluate the matched array text
  let data = [];
  try {
    eval(`data = ${match[1]}`);
  } catch(e) {
    console.error("Erro avaliando", name, e);
  }
  return data;
};

const condominios = extractArray('bairrosCondominio');
const restaurantes = extractArray('bairrosRestaurante');

// Função para gerar Guia de Legislação Local
function generateGuia(b) {
  return `A aprovação de projetos técnicos e a emissão do Auto de Vistoria do Corpo de Bombeiros (AVCB) no bairro de ${b.nome} obedecem rigorosamente aos trâmites do Comando do Corpo de Bombeiros da Polícia Militar do Estado de São Paulo (CBPMESP), em conjunto com as diretrizes da Subprefeitura responsável pela ${b.zona}. Devido ao perfil local, marcado por ${b.perfil}, a fiscalização na região da ${b.avenidas} tem se intensificado, especialmente após as recentes atualizações do Decreto Estadual 63.911/18. O decreto exige que edificações existentes se adaptem às novas Instruções Técnicas (ITs), sob pena de interdição.

Muitos gestores e síndicos em ${b.nome} desconhecem que a responsabilidade civil e criminal em caso de sinistro recai integralmente sobre eles. Se uma edificação não possui o AVCB válido ou se as medidas de segurança contra incêndio (como extintores, mangueiras e detectores) estiverem inoperantes, a apólice de seguro predial pode ser sumariamente anulada. Em uma região com ${b.perfil}, a ausência de compartimentação adequada ou falhas no sistema elétrico potencializam o risco estrutural. É por isso que a engenharia preventiva se torna não apenas uma exigência legal, mas um escudo jurídico para a administração.

O processo de renovação em ${b.nome} começa com a fase de diagnóstico e emissão de laudos técnicos especializados. Nossos engenheiros realizam o levantamento de campo minucioso para avaliar se a infraestrutura existente atende à IT-16 (Sistemas de proteção por extintores), IT-17 (Sistemas de hidrantes), e IT-41 (Inspeção visual em instalações elétricas). Caso haja divergências entre o Projeto Técnico aprovado anteriormente e a realidade física da edificação — como o fechamento irregular de varandas ou alteração de rotas de fuga —, é obrigatório protocolar um Formulário de Atendimento Técnico (FAT) ou um Projeto Técnico de Substituição (PTS) junto ao Via Fácil Bombeiros.

Após a adequação física e documental, todos os laudos (ARTs de elétrica, SPDA, gás e bombas) são consolidados e submetidos eletronicamente. A vistoria do CBPMESP na região de ${b.nome} é rigorosa e os tenentes vistoriadores testam na prática o funcionamento das bombas de recalque e o acionamento do alarme geral. Com a DRD2 Engenharia, acompanhamos o vistoriador presencialmente em seu endereço próximo à ${b.avenidas}, garantindo que qualquer questionamento técnico seja sanado imediatamente, resultando na emissão rápida e segura do seu AVCB.`;
}

// Função para gerar Custo Detalhe
function generateCusto(b) {
  return `Em ${b.nome}, os custos de renovação do AVCB variam drasticamente dependendo do grau de manutenção preventiva que a edificação recebeu nos últimos anos. Para condomínios ou estabelecimentos que estão com todos os sistemas operantes, o investimento foca apenas na responsabilidade técnica (ARTs) e nas taxas estaduais, girando em torno de emissões de laudos básicos. No entanto, se o seu prédio apresentar problemas comuns da região, como ${b.problemas[0].toLowerCase()} ou ${b.problemas[1].toLowerCase()}, será necessário um orçamento para adequação física antes da vistoria. Por exemplo, a emissão de um laudo de estanqueidade de gás ou termografia elétrica pode custar uma fração mínima se comparada à multa aplicada pelo CBPMESP por operação irregular. A DRD2 fornece um diagnóstico claro e modular, separando o custo documental do custo de obras (se necessárias).`;
}

// Função para gerar FAQs extras
function generateFaqs(b) {
  return {
    faq2q: `Qual é o prazo médio para o Corpo de Bombeiros vistoriar um prédio em ${b.nome}?`,
    faq2a: `O prazo regulamentar do CBPMESP após o protocolo no sistema Via Fácil é de até 30 dias para a realização da vistoria física na ${b.zona}. No entanto, a DRD2 prepara toda a documentação antecipadamente para que, assim que a taxa for compensada, a vistoria seja agendada o mais rápido possível para o seu endereço na região da ${b.avenidas}.`,
    faq3q: `O meu prédio em ${b.nome} reprovou na vistoria por causa de ${b.problemas[2].toLowerCase()}. O que fazer?`,
    faq3a: `Neste caso, o vistoriador emitiu um 'Comunique-se'. O condomínio tem um prazo legal para sanar a irregularidade (corrigir ${b.problemas[2].toLowerCase()}) e solicitar o retorno do vistoriador sem pagar nova taxa. Nossa engenharia assume essa readequação técnica e protocola a resposta oficial aos Bombeiros, garantindo a aprovação no retorno.`,
    faq4q: `Como a fiscalização da Prefeitura atua junto com os Bombeiros em ${b.nome}?`,
    faq4a: `Na ${b.zona}, a fiscalização da Subprefeitura exige o AVCB válido para a emissão e manutenção do Alvará de Funcionamento e do Certificado de Acessibilidade. A ausência do AVCB não só gera multas do Corpo de Bombeiros, mas também pode levar à interdição administrativa do imóvel pela prefeitura municipal.`
  };
}

// Enriquecer os arrays
const enrichArray = (arr) => {
  return arr.map(b => {
    return {
      ...b,
      guiaLegislacaoLocal: generateGuia(b),
      custoDetalhe: generateCusto(b),
      ...generateFaqs(b)
    };
  });
};

const enrichedCondominios = enrichArray(condominios);
const enrichedRestaurantes = enrichArray(restaurantes);

// Atualizar a Interface
const interfaceStr = `export interface BairroData {
  slug: string;
  nome: string;
  zona: string;
  tag: string;
  avenidas: string;
  perfil: string;
  intro: string;
  box: string;
  problemas: [string, string, string];
  problemasDesc: [string, string, string];
  testimonial: {
    text: string;
    author: string;
    role: string;
  };
  faq1q: string;
  faq1a: string;
  faq2q: string;
  faq2a: string;
  faq3q: string;
  faq3a: string;
  faq4q: string;
  faq4a: string;
  guiaLegislacaoLocal: string;
  custoDetalhe: string;
  ctaFinal: string;
}
`;

// Reescrever o arquivo
const fullFile = interfaceStr + 
  '\nexport const bairrosCondominio: BairroData[] = ' + JSON.stringify(enrichedCondominios, null, 2) + ';\n\n' +
  'export const bairrosRestaurante: BairroData[] = ' + JSON.stringify(enrichedRestaurantes, null, 2) + ';\n';

fs.writeFileSync(dbPath, fullFile, 'utf-8');
console.log('Database enriquecido com textos longos (Guia, Custos e 4 FAQs) para 38 bairros!');
