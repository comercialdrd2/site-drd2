const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'ptotepSeoPages.ts');
let content = fs.readFileSync(filePath, 'utf8');

const theMapBlock = `  ...[
    ["Sao Paulo", "ptotep-sao-paulo", "A capital paulista exige rigor absoluto em projetos temporários devido à alta concentração de público. Nossos engenheiros atendem grandes eventos na Zona Oeste (<a href='/renovacao-clcb-pinheiros-sao-paulo' class='text-red-600 font-bold hover:underline'>Pinheiros</a>, <a href='/renovacao-clcb-vila-madalena-sao-paulo' class='text-red-600 font-bold hover:underline'>Vila Madalena</a>), na Zona Sul (<a href='/renovacao-clcb-moema-sao-paulo' class='text-red-600 font-bold hover:underline'>Moema</a>, <a href='/renovacao-clcb-vila-olimpia-sao-paulo' class='text-red-600 font-bold hover:underline'>Vila Olímpia</a>) e em pólos de feiras na Zona Norte (<a href='/renovacao-clcb-santana-sao-paulo' class='text-red-600 font-bold hover:underline'>Santana</a>) e Zona Leste (<a href='/renovacao-clcb-tatuape-sao-paulo' class='text-red-600 font-bold hover:underline'>Tatuapé</a>)."],
    ["Guarulhos", "ptotep-guarulhos", "Guarulhos combina eventos logisticos, hoteis de aeroporto, galpoes, igrejas, clubes e centros comerciais com grande fluxo regional."],
    ["Santo Andre", "ptotep-santo-andre", "Santo Andre e estrategico para eventos no ABC, com clubes, universidades, centros comerciais, igrejas e operacoes industriais."],
    ["Sao Bernardo do Campo", "ptotep-sao-bernardo-do-campo", "Sao Bernardo do Campo reune eventos empresariais, industriais, universidades, igrejas e centros esportivos com publico intenso."],
    ["Sao Caetano do Sul", "ptotep-sao-caetano-do-sul", "Sao Caetano do Sul tem eventos em clubes, escolas, auditorios, shoppings, igrejas e predios corporativos com espacos compactos."],
    ["Sorocaba", "ptotep-sorocaba", "Sorocaba atende eventos industriais, feiras regionais, universidades, shopping centers, igrejas e centros empresariais."],
  ].map(([city, slug, cityContext]) =>
    page({
      slug: \`/\${slug}\`,
      kind: "cidade",
      label: \`PTOTEP \${city}\`,
      eyebrow: \`Regularizacao de eventos em \${city}\`,
      title: \`PTOTEP em \${city} | Projeto para Evento Temporario\`,
      description: \`PTOTEP em \${city}: projeto tecnico para ocupacao temporaria em edificacao permanente, documentos, ART, protocolo e suporte para eventos.\`,
      h1: \`PTOTEP em \${city}\`,
      lead: \`Regularizacao tecnica para eventos temporarios em edificacoes permanentes em \${city}, com analise de lotacao, rotas, montagem, documentos e protocolo no Corpo de Bombeiros.\`,
      heroImage: eventHero,
      imageAlt: \`Evento temporario em edificacao permanente em \${city}\`,
      focus: \`Em \${city}, o PTOTEP e indicado quando o evento altera o uso normal de shopping, hotel, igreja, universidade, centro empresarial, clube ou galpao regularizado.\`,
      contextTitle: \`Demanda de eventos em \${city}\`,
      context: [
        cityContext,
        "A DRD2 avalia a licenca existente do imovel, o layout temporario e os documentos de montagem antes de orientar o protocolo.",
        "Essa etapa evita que o organizador descubra tarde que palco, stand, food area, fila ou credenciamento comprometeram a seguranca do local.",
      ],
      riskTitle: \`Riscos comuns em \${city}\`,
      risks: [
        "evento aprovado comercialmente pelo local, mas sem leitura tecnica da ocupacao temporaria",
        "alteracao de rota de fuga por palco, stand, grade ou fila",
        "documentos de eletrica, GLP, palco ou estruturas entregues fora do prazo",
        "controle de acesso insuficiente para publico estimado",
        "montagem final diferente do projeto enviado",
      ],
      process: [],
      documents: [],
      faqs: [
        {
          question: \`A DRD2 atende PTOTEP em \${city}?\`,
          answer: \`Sim. A DRD2 atende eventos temporarios em \${city} com diagnostico tecnico, orientacao documental, projeto e acompanhamento do processo.\`,
        },
      ],
      related: baseRelated,
      ctaOccupation: \`PTOTEP em \${city}\`,
    })
  ),`;

const remainingCustomCities = `
  page({
    slug: "/ptotep-sao-paulo",
    kind: "cidade",
    label: "PTOTEP São Paulo",
    eyebrow: "Aprovação na Capital Paulista",
    title: "PTOTEP em São Paulo - Capital | Aprovação Corpo de Bombeiros",
    description: "PTOTEP na cidade de São Paulo. A maior capital da América Latina exige precisão nos cálculos de rota de fuga e lotação. Saiba como aprovar seu evento.",
    h1: "PTOTEP para Eventos na Cidade de São Paulo",
    lead: "São Paulo respira eventos gigantes. De feiras mundiais na Zona Norte (Santana) até ativações de marcas nos shoppings da Zona Sul (Moema e Vila Olímpia), o nível de exigência dos analistas do Corpo de Bombeiros da Capital é o mais alto do estado.",
    heroImage: eventHero,
    imageAlt: "Projeto PTOTEP para grandes feiras e exposições na capital paulista",
    focus: "Tendas, tablados, palcos e ilhas de PDV dentro de edificações em SP precisam provar que a evacuação das pessoas continua segura, respeitando o AVCB mestre do condomínio.",
    contextTitle: "Ambiente de Negócios Paulistano",
    context: [
      "A capital paulista exige rigor absoluto em projetos temporários devido à alta concentração de público, com prazos apertados no Via Fácil.",
      "Nossos engenheiros atendem grandes eventos na Zona Oeste (Pinheiros, Vila Madalena), Zona Sul (Moema, Vila Olímpia) e centros de convenções.",
      "A DRD2 garante as ARTs necessárias, o memorial descritivo e as brigadas extras obrigatórias."
    ],
    riskTitle: "Por que projetos reprovam em SP?",
    risks: [
      "arquitetura do evento incompatível com o número de escadas de emergência do shopping ou galpão",
      "falta de apresentação da liberação prévia do síndico/administradora",
      "tentativa de usar o AVCB do prédio para acobertar uma atividade completamente diferente (shows com palcos e público em pé)"
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Demora para aprovar o PTOTEP na capital paulista?",
        answer: "Depende muito do volume de análises no Comando, mas o protocolo eletrônico e uma planta irretocável garantem que o analista não precisará devolver o processo (comunique-se) antes da aprovação."
      }
    ],
    related: baseRelated,
    ctaOccupation: "eventos em São Paulo (Capital)",
  }),

  page({
    slug: "/ptotep-guarulhos",
    kind: "cidade",
    label: "PTOTEP Guarulhos",
    eyebrow: "Pólo Logístico e Hoteleiro",
    title: "PTOTEP em Guarulhos | Eventos Logísticos e Hoteleiros",
    description: "Serviço especializado de PTOTEP em Guarulhos. Regularizamos feiras em centros logísticos, hotéis de aeroporto e grandes igrejas.",
    h1: "PTOTEP em Guarulhos: Regularização de Feiras e Eventos",
    lead: "Guarulhos é uma potência que concentra imensos condomínios logísticos, hotéis focados em executivos ao redor do aeroporto e mega igrejas. Eventos, simpósios e feiras setoriais nesses locais precisam obrigatoriamente do Projeto Técnico de Ocupação Temporária.",
    heroImage: eventHero,
    imageAlt: "Logística de eventos em Guarulhos exigindo projeto bombeiros",
    focus: "Muitos organizadores cometem o erro de achar que a área externa de um galpão em Bonsucesso (Guarulhos) pode sediar tendas sem autorização. O PTOTEP é justamente para legalizar esse anexo temporário.",
    contextTitle: "Peculiaridades de Guarulhos",
    context: [
      "Eventos logísticos frequentemente envolvem exposição de veículos pesados, máquinas e uso de geradores, o que gera alto risco de incêndio e pânico.",
      "A DRD2 desenvolve a arquitetura de segurança, validando afastamentos, armazenamento de combustível (geradores) e brigadistas adequados ao volume.",
      "Acompanhamos desde a planta até a vistoria presencial da viatura."
    ],
    riskTitle: "Gargalos típicos na região",
    risks: [
      "instalação de palcos em áreas de manobra de carretas bloqueando viaturas",
      "hotéis que estendem congressos para o lobby, inutilizando saídas sinalizadas",
      "ausência de laudos de SPDA para tendas montadas a céu aberto"
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "A DRD2 atende PTOTEP em todos os bairros de Guarulhos?",
        answer: "Sim, atendemos centros comerciais e logísticos de ponta a ponta, de Cumbica a Bonsucesso, com foco total na aprovação ágil."
      }
    ],
    related: baseRelated,
    ctaOccupation: "feiras corporativas em Guarulhos",
  }),

  page({
    slug: "/ptotep-santo-andre",
    kind: "cidade",
    label: "PTOTEP Santo André",
    eyebrow: "Eventos no ABC Paulista",
    title: "PTOTEP em Santo André | Regularização de Eventos no ABC",
    description: "Projetos PTOTEP na região de Santo André e ABC Paulista. Aprovação de eventos corporativos em galpões, parques industriais e clubes.",
    h1: "PTOTEP para Eventos em Santo André e Região",
    lead: "Santo André abriga um pólo misto de grandes indústrias, universidades de prestígio e clubes esportivos tradicionais. Eventos comemorativos, confraternizações gigantes de fim de ano em galpões ou festivais precisam do aval dos Bombeiros (PTOTEP).",
    heroImage: eventHero,
    imageAlt: "Eventos corporativos industriais em Santo André com aprovação técnica",
    focus: "O foco no ABC Paulista é provar que a montagem do evento não entra em choque com operações industriais ou laboratoriais vizinhas, preservando o isolamento de risco.",
    contextTitle: "Eventos no Coração do ABC",
    context: [
      "A DRD2 avalia rigorosamente a planta baixa do local escolhido. Festivais dentro de fábricas inativas ou estacionamentos de supermercados exigem cálculo matemático de fluxo de fuga.",
      "Reduzimos o risco da organização entregando memoriais completos para eletricidade provisória e estruturas tubulares.",
      "Temos experiência de anos em negociação técnica com as exigências dos comandos regionais."
    ],
    riskTitle: "Motivos de dor de cabeça em Santo André",
    risks: [
      "utilização de fogos de artifício ou efeitos pirotécnicos (shows) sem aprovação técnica explícita",
      "layout do palco obstruindo caixas de hidrante preexistentes",
      "lotação da área VIP excedendo a conta segura de 2 pessoas por metro quadrado livre"
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Por que uma festa na fábrica precisa de PTOTEP?",
        answer: "O AVCB original cobre apenas a rotina diária dos funcionários operando máquinas. Um festival traz pessoas leigas, cadeirantes, idosos e altera todo o cenário acústico e visual. O PTOTEP cuida desse novo público."
      }
    ],
    related: baseRelated,
    ctaOccupation: "festivais em Santo André",
  }),

  page({
    slug: "/ptotep-sao-bernardo-do-campo",
    kind: "cidade",
    label: "PTOTEP S. Bernardo",
    eyebrow: "Feiras Industriais e Corporativas",
    title: "PTOTEP em São Bernardo do Campo | Feiras e Eventos",
    description: "Projeto de ocupação temporária (PTOTEP) em São Bernardo do Campo. Especialistas em liberação de feiras empresariais e centros esportivos.",
    h1: "PTOTEP em São Bernardo do Campo",
    lead: "Sede de grandes feiras automobilísticas, industriais e eventos gigantescos em centros empresariais, São Bernardo do Campo (SBC) demanda precisão. O Projeto de Ocupação Temporária (PTOTEP) aqui separa o sucesso da interdição na véspera do seu evento.",
    heroImage: eventHero,
    imageAlt: "Feiras do setor industrial e automotivo em São Bernardo precisando de liberação",
    focus: "Estandes com maquinário pesado, estúdio de solda, test drives e estruturas imensas precisam apresentar laudos (ART) para não sobrecarregar as lajes ou o quadro elétrico do pavilhão.",
    contextTitle: "O peso de eventos industriais",
    context: [
      "São Bernardo tem perfil corporativo duro. Feiras de negócios exigem coordenação milimétrica com a equipe de montagem para não alterar as vias de fuga dos prédios.",
      "Nossos engenheiros traçam as rotas, validam portas corta-fogo, dimensionam brigadas extras para finais de semana de pico.",
      "Entregamos um dossiê pronto para que o analista do Bombeiro aprove sem pestanejar."
    ],
    riskTitle: "Erros cruciais em Feiras de Negócios",
    risks: [
      "painéis de LED puxando carga absurda sem estabilizadores documentados",
      "montadoras de stands bloqueando extintores durante a montagem pesada",
      "ausência total de plantas DWG compatibilizadas com o AVCB original do condomínio"
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Vale a pena contratar engenheiro só para um evento de fim de semana?",
        answer: "Se o evento for alvo de fiscalização (Polícia, Prefeitura ou Bombeiros) e não tiver PTOTEP, a multa e a interdição recaem criminalmente sobre os responsáveis. É o melhor investimento em segurança jurídica."
      }
    ],
    related: baseRelated,
    ctaOccupation: "eventos em São Bernardo",
  }),

  page({
    slug: "/ptotep-sao-caetano-do-sul",
    kind: "cidade",
    label: "PTOTEP S. Caetano",
    eyebrow: "Região com maior IDH do Estado",
    title: "PTOTEP em São Caetano do Sul | Projetos de Segurança",
    description: "Libere seu evento corporativo ou show indoor com o PTOTEP em São Caetano do Sul. Adequação para clubes, escolas e shopping centers.",
    h1: "PTOTEP em São Caetano do Sul",
    lead: "São Caetano do Sul é uma cidade compacta mas de altíssimo poder aquisitivo. Eventos em clubes fechados de elite, teatros lotados, shoppings e escolas demandam PTOTEP para assegurar que aglomerações em espaços enxutos ocorram de forma controlada.",
    heroImage: eventHero,
    imageAlt: "Eventos sociais e feiras compactas precisando de PTOTEP em São Caetano",
    focus: "Como os terrenos são menores, a disputa por cada metro quadrado de stand versus a largura mínima do corredor de fuga é extrema. A matemática do fluxo de pessoas é o nosso diferencial.",
    contextTitle: "Desafios de Espaços Compactos",
    context: [
      "Ao tentar acomodar atrações, buffets e pistas de dança, organizadores tendem a estrangular as saídas do imóvel.",
      "A DRD2 analisa a lotação máxima teórica e desenha o layout do PTOTEP limitando a venda de ingressos exatamente no limite técnico.",
      "Isso evita tragédias e atende as rígidas normas das autoridades municipais locais."
    ],
    riskTitle: "Armadilhas em Espaços Limitados",
    risks: [
      "colocação de catracas ou grades divisórias que dificultam a fuga",
      "superlotação não intencional por falta de planejamento de bilheteria e equipe técnica",
      "decoração suspensa com materiais altamente inflamáveis (sem laudo de retardante CMAR)"
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "O processo de PTOTEP em São Caetano é rápido?",
        answer: "Sim, contanto que o proprietário do local forneça a planta atualizada do AVCB original, a confecção e protocolo do nosso projeto temporário leva poucos dias."
      }
    ],
    related: baseRelated,
    ctaOccupation: "shows e formaturas em São Caetano",
  }),

  page({
    slug: "/ptotep-sorocaba",
    kind: "cidade",
    label: "PTOTEP Sorocaba",
    eyebrow: "Expansão Econômica e Eventos",
    title: "PTOTEP em Sorocaba | Regularização de Feiras Empresariais",
    description: "A DRD2 desenvolve e aprova projetos técnicos de ocupação temporária (PTOTEP) para eventos gigantescos em Sorocaba.",
    h1: "PTOTEP em Sorocaba para Feiras e Exposições",
    lead: "A região de Sorocaba atende um cinturão industrial imenso. Eventos empresariais, feiras agro, grandes shows ao ar livre e congressos médicos necessitam da aprovação via PTOTEP para operar sem risco de interdição pelo Comando local.",
    heroImage: eventHero,
    imageAlt: "Congressos corporativos na próspera região de Sorocaba",
    focus: "Muitos centros de convenções ou clubes na região exigem o documento impresso para sequer permitir a entrada dos caminhões de montagem do seu estande.",
    contextTitle: "Foco Operacional",
    context: [
      "A DRD2 foca na legalidade das estruturas modulares e elétricas da sua montagem.",
      "Conduzimos todo o rito de submissão do Projeto Temporário, juntando os laudos do engenheiro de som, de palco e de tenda.",
      "Acompanhamos a viatura vistoriadora, garantindo que a entrega da documentação corresponda fielmente à estrutura erguida na feira."
    ],
    riskTitle: "Prevenção de Crises",
    risks: [
      "montagem da estrutura em desacordo com as plantas enviadas",
      "ausência de laudos (ARTs) das instalações de botijões de gás das barracas (Food Trucks)",
      "não contratação da quantidade correta de brigadistas de incêndio e socorristas"
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Quando devo contratar o PTOTEP em Sorocaba?",
        answer: "Pelo menos 40 a 60 dias antes da data do evento. O tempo de resposta do poder público deve ser previsto para não haver pânico na véspera da abertura dos portões."
      }
    ],
    related: baseRelated,
    ctaOccupation: "feiras de negócios em Sorocaba",
  }),
`;

if (content.includes(theMapBlock)) {
  content = content.replace(theMapBlock, remainingCustomCities);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('PTOTEP remainder replaced successfully!');
} else {
  console.log('Error: Could not find the generic map block.');
}
