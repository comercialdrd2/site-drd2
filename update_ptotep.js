const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'ptotepSeoPages.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove the priority cities from the \`.map\` array.
content = content.replace(/\s*\["Barueri",.*\],?/g, '');
content = content.replace(/\s*\["Osasco",.*\],?/g, '');
content = content.replace(/\s*\["Campinas",.*\],?/g, '');
content = content.replace(/\s*\["Ribeirao Preto",.*\],?/g, '');

const customCities = `
  page({
    slug: "/ptotep-campinas",
    kind: "cidade",
    label: "PTOTEP Campinas",
    eyebrow: "Regularização de eventos na RMC",
    title: "PTOTEP em Campinas | Projeto para Eventos e Feiras",
    description: "PTOTEP em Campinas: projeto técnico para feiras, shows e eventos corporativos na região de Campinas. Acompanhamento junto ao Corpo de Bombeiros local.",
    h1: "PTOTEP para Eventos em Campinas e Região",
    lead: "Campinas é um pólo gigante de tecnologia e agronegócio que sedia anualmente grandes feiras no Expo D. Pedro, Royal Palm Hall e outros espaços. A regularização do evento (PTOTEP) precisa seguir o padrão de exigência do 7º Grupamento de Bombeiros.",
    heroImage: eventHero,
    imageAlt: "Engenheiro avaliando planta de PTOTEP para feira em Campinas",
    focus: "Seja para montar stands temporários em um shopping na Rodovia D. Pedro ou fazer um evento universitário em Barão Geraldo, a prefeitura e os Bombeiros exigem o Projeto Técnico de Ocupação Temporária para não caçar o alvará do local.",
    contextTitle: "Ambiente de Eventos em Campinas",
    context: [
      "A cidade concentra eventos médicos, leilões, feiras de agronegócio e congressos de tecnologia em espaços que já possuem AVCB permanente.",
      "A DRD2 analisa a planta original do galpão ou centro de convenções em Campinas, validando rotas de fuga e o impacto da montagem temporária.",
      "Atuamos com a documentação de stands, emissão de ARTs e acompanhamento do processo no sistema Via Fácil dos Bombeiros de SP, agilizando a vistoria."
    ],
    riskTitle: "Riscos na montagem de Feiras",
    risks: [
      "bloqueio dos corredores principais do pavilhão por culpa do layout dos stands",
      "falta de atestado de elétrica dos pavilhões e stands menores",
      "demora na aprovação do PTOTEP por desconhecimento das exigências regionais do comando",
      "reprovação de tendas e geradores na vistoria de última hora"
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "A DRD2 aprova PTOTEP no Corpo de Bombeiros de Campinas?",
        answer: "Sim. A DRD2 realiza o mapeamento técnico, monta a documentação e faz o protocolo do Projeto de Ocupação Temporária em toda a Região Metropolitana de Campinas (RMC)."
      }
    ],
    related: baseRelated,
    ctaOccupation: "PTOTEP para feira em Campinas",
  }),

  page({
    slug: "/ptotep-barueri",
    kind: "cidade",
    label: "PTOTEP Barueri (Alphaville)",
    eyebrow: "Eventos em Alphaville e Barueri",
    title: "PTOTEP em Barueri | Eventos Corporativos em Alphaville",
    description: "Emissão de PTOTEP para eventos corporativos e shows em Barueri e Alphaville. Regularização rápida para não travar a sua montagem comercial.",
    h1: "PTOTEP para Eventos em Barueri e Alphaville",
    lead: "Barueri (e especialmente a região de Alphaville) possui uma densidade absurda de prédios corporativos, galpões logísticos e shoppings. Qualquer evento nesses espaços, por menor que seja, requer o projeto temporário do Bombeiro para evitar interdição do condomínio inteiro.",
    heroImage: eventHero,
    imageAlt: "Prédios comerciais em Alphaville precisando de PTOTEP",
    focus: "O PTOTEP é a garantia que o síndico de Alphaville precisa para liberar o seu evento. Nós cuidamos do projeto, ARTs de palco e tendas, e documentação de rotas de fuga.",
    contextTitle: "O Desafio dos Condomínios Comerciais",
    context: [
      "Muitas vezes, a administração do condomínio em Alphaville tem regras de segurança até mais rígidas que as dos bombeiros para proteger o AVCB do complexo.",
      "Um evento no estacionamento ou lobby pode alterar significativamente a evacuação. Nós provamos tecnicamente que sua montagem é segura.",
      "Fazemos a ponte técnica entre o organizador, o síndico e o Corpo de Bombeiros de Barueri."
    ],
    riskTitle: "Problemas com Administração Predial",
    risks: [
      "barramento da equipe de montagem pelo condomínio por falta do protocolo PTOTEP",
      "uso irregular de gás e geradores sem validação técnica",
      "projetos devolvidos pelo Corpo de Bombeiros às vésperas do congresso"
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Por que o condomínio em Alphaville exige meu PTOTEP?",
        answer: "Porque o evento altera a rotina de segurança do prédio. O PTOTEP blinda legalmente o condomínio, provando que a sua atividade não anula o AVCB existente."
      }
    ],
    related: baseRelated,
    ctaOccupation: "PTOTEP para evento em Barueri",
  }),

  page({
    slug: "/ptotep-osasco",
    kind: "cidade",
    label: "PTOTEP Osasco",
    eyebrow: "Aprovação de Eventos em Osasco",
    title: "PTOTEP em Osasco | Alvará para Festivais e Lojas",
    description: "Serviço de engenharia para PTOTEP em Osasco. Aprovação de eventos temporários em shoppings, hipermercados e arenas.",
    h1: "PTOTEP para Eventos e Ações em Osasco",
    lead: "Osasco tem um dos maiores PIBs do Brasil e um comércio agressivo. Ações promocionais em hipermercados, queimas de estoque e eventos universitários em ginásios exigem um Projeto de Ocupação Temporária muito bem alinhado.",
    heroImage: eventHero,
    imageAlt: "Multidão em Osasco e a necessidade de PTOTEP de evento",
    focus: "Seja uma ação de vendas gigante em um calçadão, evento em galpões na região industrial ou um show na região central, a segurança do fluxo de pessoas é a principal exigência do grupamento militar local.",
    contextTitle: "Eventos Comerciais de Grande Fluxo",
    context: [
      "Cuidado com o bloqueio de corredores! Em shoppings e grandes varejistas de Osasco, stands promocionais costumam ser reprovados por estrangular o trânsito das pessoas.",
      "A DRD2 compatibiliza o layout de marketing com as normas rígidas da Instrução Técnica do Corpo de Bombeiros.",
      "Garantimos que o projeto temporário reflita 100% da montagem real, blindando o organizador contra multas de fiscalização."
    ],
    riskTitle: "Gargalos em Eventos de Varejo",
    risks: [
      "diminuição da largura de corredores abaixo do exigido na legislação",
      "interferência direta em hidrantes e alarmes originais do galpão/loja",
      "falta de planejamento de abandono para picos de clientes"
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Fazemos PTOTEP para feiras dentro de shoppings em Osasco?",
        answer: "Sim, somos especialistas em adequar estandes e quiosques promocionais gigantes dentro de shopping centers sem afetar as rotas de escape do local."
      }
    ],
    related: baseRelated,
    ctaOccupation: "evento promocional em Osasco",
  }),

  page({
    slug: "/ptotep-ribeirao-preto",
    kind: "cidade",
    label: "PTOTEP Ribeirão Preto",
    eyebrow: "Agronegócio e Feiras no Interior",
    title: "PTOTEP em Ribeirão Preto | Agrishow e Grandes Feiras",
    description: "Aprovação técnica de PTOTEP em Ribeirão Preto para eventos do agronegócio, shows universitários e feiras de negócios.",
    h1: "PTOTEP para Feiras e Shows em Ribeirão Preto",
    lead: "Capital do agronegócio, Ribeirão Preto é sinônimo de feiras monstruosas, estandes complexos e shows sertanejos grandiosos. O Projeto de Ocupação Temporária (PTOTEP) aqui requer lidar com tendas massivas, geradores potentes e praças de alimentação com botijões.",
    heroImage: eventHero,
    imageAlt: "Grande evento do agronegócio precisando de aprovação do Bombeiro",
    focus: "Para eventos rurais, rodeios e feiras de negócios, a legislação estadual exige validação de estabilidade estrutural (ARTs) e laudos elétricos impecáveis antes de liberar o alvará temporário.",
    contextTitle: "Eventos Agro e Universidades",
    context: [
      "Estruturas tubulares e tendas piramidais precisam de projetos que certifiquem que não vão ceder sob chuva ou ventania severa típica do interior.",
      "Áreas abertas também precisam de cálculo de lotação e dimensionamento de saídas, além de hidrantes temporários ou extintores móveis.",
      "A DRD2 prepara todo o memorial técnico para garantir tranquilidade aos organizadores."
    ],
    riskTitle: "Os piores erros em Mega Feiras",
    risks: [
      "negligenciar o aterramento adequado (SPDA) para estruturas metálicas gigantescas em épocas de raios",
      "ausência de laudo de instalação do gás e atestado elétrico das praças de alimentação",
      "superlotação de arenas sem dimensionamento correto das saídas de emergência"
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "O processo de Ribeirão Preto é igual ao de São Paulo?",
        answer: "A legislação base é estadual (Bombeiros de SP), porém a fiscalização para megaeventos abertos e shows sertanejos costuma ter um checklist prático rigoroso sobre estruturas metálicas e SPDA."
      }
    ],
    related: baseRelated,
    ctaOccupation: "feiras de agronegócio",
  }),
`;

content = content.replace(/\\s*\\.\\.\\.\\[/, '\\n' + customCities + '\\n  ...[');

// Fix trailing commas in map array if any
content = content.replace(/,\s*,/g, ',');

fs.writeFileSync(filePath, content, 'utf8');
console.log('ptotepSeoPages.ts updated successfully with custom cities!');
