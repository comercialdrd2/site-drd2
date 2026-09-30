import type { PtotepPage } from "./ptotepSeoPages";

// ============================================================================
// Textos revisados das páginas de eventos (PTOTEP / PTOT) — 29/09/2026.
// Regras confirmadas pela DRD2:
// - 1º pagamento só após a aprovação do projeto pelo Corpo de Bombeiros
// - correções pedidas pelo Corpo de Bombeiros sem custo adicional
// - protocolo com antecedência mínima de 7 dias úteis; licença de até 30 dias,
//   prorrogável uma vez (IT 01/2025)
// - a DRD2 cuida também da autorização da Prefeitura
// - atendimento: capital, municípios vizinhos e Baixada Santista
// ============================================================================

const eventHero = "/images/page-projetos.webp";
const salaoHero = "/images/hero-salao-festas-oficial.jpg";
const hotelHero = "/images/hero-hotel.webp";
const showHero = "/images/hero-bar-com-show.webp";

const processoDrd2 = [
  "Análise do evento: local, público, layout e estruturas montadas.",
  "Projeto técnico: layout, lotação, rotas de saída, sinalização, extintores e demais medidas exigidas.",
  "Documentação: memorial do evento, formulários e responsabilidade técnica do engenheiro.",
  "Protocolo no Corpo de Bombeiros e acompanhamento da análise, com correções sem custo adicional.",
  "Apoio na vistoria até a emissão da licença.",
];

const documentosPadrao = [
  "Local, endereço, datas e horários do evento (incluindo montagem e desmontagem).",
  "Planta ou croqui do layout: palco, mesas, estandes, entradas e saídas.",
  "Público estimado.",
  "AVCB ou CLCB válido do local (peça ao dono do espaço).",
  "Contrato de locação ou autorização do proprietário.",
  "A DRD2 prepara o formulário de segurança contra incêndio, o memorial do evento, a responsabilidade técnica e orienta a brigada.",
];

const faqPrefeitura = {
  question: "Vocês cuidam também da Prefeitura?",
  answer:
    "Sim. A licença do Corpo de Bombeiros e a autorização da Prefeitura são processos diferentes, e a DRD2 cuida dos dois.",
};

const faqCorrecao = {
  question: "Se o Corpo de Bombeiros pedir correção, eu pago de novo?",
  answer: "Não. Se o Corpo de Bombeiros pedir correções no projeto, a DRD2 faz os ajustes sem custo adicional.",
};

const linksEventos = [
  { label: "PTOTEP para eventos", href: "/ptotep" },
  { label: "PTOTEP urgente", href: "/ptotep-urgente" },
  { label: "Quanto custa PTOTEP", href: "/quanto-custa-ptotep" },
  { label: "Prazo de aprovação para evento", href: "/prazo-aprovacao-bombeiros-evento" },
  { label: "Regularização de eventos em SP", href: "/regularizacao-de-eventos-sao-paulo" },
  { label: "PTOT para eventos ao ar livre", href: "/ptot-ptiot-evento-ao-ar-livre" },
  { label: "PTOTEP para formatura", href: "/ptotep-para-formatura" },
  { label: "PTOTEP para evento corporativo", href: "/avcb-para-evento-corporativo" },
  { label: "PTOTEP em Santos e Baixada", href: "/ptotep-santos-baixada" },
];

const semAtual = (slug: string) => linksEventos.filter((l) => l.href !== slug);

// ----------------------------------------------------------------------------
// URLs existentes: os campos abaixo substituem os da página atual.
// ----------------------------------------------------------------------------
export const ptotepOverrides: Record<string, Partial<PtotepPage>> = {
  "/ptotep": {
    eyebrow: "Evento temporário em edificação permanente",
    title: "PTOTEP em SP: Aprovação de Eventos nos Bombeiros | DRD2",
    description:
      "Vai fazer um evento em salão, ginásio, igreja ou pavilhão? A DRD2 faz o PTOTEP, protocola no Corpo de Bombeiros e acompanha até a liberação.",
    h1: "PTOTEP para eventos em São Paulo: projeto e aprovação no Corpo de Bombeiros",
    lead:
      "Formatura, congresso, feira, show ou festa dentro de um espaço fixo precisa de licença própria do Corpo de Bombeiros. A DRD2 cuida do projeto, do protocolo e do acompanhamento até a liberação, com engenheiro responsável do começo ao fim.",
    ctaLabel: "Falar com o engenheiro sobre meu evento",
    focusTitle: "O que é o PTOTEP",
    focus:
      "PTOTEP é o Projeto Técnico para Ocupação Temporária em Edificação Permanente. É o documento que o Corpo de Bombeiros de São Paulo exige quando um evento acontece dentro de um local fixo, como salão de festas, ginásio, igreja, hotel, shopping ou pavilhão. O AVCB do local aprova o uso normal do espaço; quando o evento muda esse uso — mais público, palco, estrutura montada, outra disposição de mesas —, é preciso uma licença específica para aquele evento e aquelas datas.",
    contextTitle: "Quando seu evento precisa de PTOTEP",
    context: [
      "<strong>Público ou atividade fora do normal:</strong> mais pessoas do que o uso habitual do espaço, ou uma atividade diferente, como ginásio recebendo show ou galpão recebendo feira.",
      "<strong>Montagem temporária:</strong> palco, estandes, arquibancada ou outra estrutura montada dentro do local.",
      "<strong>Exigência de terceiros:</strong> o dono do espaço, a Prefeitura ou o contratante pedem a licença. Não sabe se é o seu caso? Envie a data, o local e o público no WhatsApp: o engenheiro responde se precisa de PTOTEP ou se o AVCB do local já basta.",
    ],
    process: processoDrd2,
    documents: documentosPadrao,
    extraSections: [
      {
        title: "Prazos",
        intro:
          'O protocolo deve ser feito com antecedência mínima de 7 dias úteis antes do evento, e a licença vale por até 30 dias, com uma prorrogação por igual período. Na prática, recomendamos contratar o quanto antes, para haver tempo de ajustar o projeto se o Corpo de Bombeiros pedir correções. Evento em menos de 10 dias? Veja o <a href="/ptotep-urgente">atendimento urgente</a> e a <a href="/prazo-aprovacao-bombeiros-evento">linha do tempo completa</a>.',
      },
      {
        title: "Por que a DRD2",
        intro:
          "<strong>O primeiro pagamento só acontece depois que o projeto for aprovado pelo Corpo de Bombeiros.</strong> E se os Bombeiros pedirem correções, os ajustes são por nossa conta, sem custo adicional.",
        items: [
          "Engenheiro responsável: Eng. Samuel Costa, CREA-SP 5070163570, acompanha o seu evento do projeto à vistoria.",
          "Atendimento pelo WhatsApp direto com o engenheiro, sem intermediários.",
          "Orçamento fechado, com o que está e o que não está incluso (taxas do Corpo de Bombeiros à parte).",
          "Experiência também em AVCB e CLCB: sabemos o que o local precisa ter antes do evento.",
        ],
      },
      {
        title: "Cidades atendidas",
        intro:
          'São Paulo e todos os municípios vizinhos da capital, como Guarulhos, Osasco, Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema, Taboão da Serra e Cotia, além da <a href="/ptotep-santos-baixada">Baixada Santista</a>, com atendimento presencial.',
      },
    ],
    faqs: [
      {
        question: "O local já tem AVCB. Preciso de PTOTEP?",
        answer:
          "Depende do evento. Se ele mantém o uso e a lotação normais do espaço, o AVCB pode bastar. Se muda o público, a montagem ou a atividade, o PTOTEP é exigido. O engenheiro avalia pelo WhatsApp.",
      },
      {
        question: "E se o local não tiver AVCB válido?",
        answer:
          "O local precisa estar regularizado no Corpo de Bombeiros. Se não estiver, avise logo: a DRD2 avalia se dá tempo de regularizar antes do evento.",
      },
      {
        question: "Quanto custa?",
        answer:
          "Depende do tamanho do evento, da estrutura e do prazo. O orçamento é fechado e o 1º pagamento só acontece após a aprovação do projeto.",
      },
      {
        question: "Quanto tempo antes devo contratar?",
        answer:
          "O protocolo exige antecedência mínima de 7 dias úteis. Quanto antes, mais tempo para ajustes.",
      },
      {
        question: "Preciso de brigada de incêndio?",
        answer:
          "A brigada faz parte da documentação do PTOTEP. A DRD2 orienta a quantidade e pode indicar ou fornecer a equipe.",
      },
      faqPrefeitura,
      {
        question: "Faço vários eventos por ano. Tem condição especial?",
        answer: "Sim. Produtoras, agências e empresas de formatura podem ter pacote anual com preço por evento.",
      },
    ],
  },

  "/quanto-custa-ptotep": {
    title: "Quanto Custa PTOTEP em SP? Valores e o que Influencia",
    description:
      "O preço do PTOTEP depende do público, da estrutura e do prazo do evento. Veja o que entra no valor, o que é taxa à parte e peça orçamento fechado.",
    h1: "Quanto custa um PTOTEP e o que muda o preço",
    lead:
      "O preço de um PTOTEP depende de 4 coisas: tamanho do público, tipo de estrutura montada, situação do local e prazo até o evento. Um evento pequeno em espaço já regularizado custa bem menos do que uma feira com estandes e palco.",
    ctaLabel: "Receber orçamento do meu evento",
    focusTitle: "O que está incluso no orçamento da DRD2",
    focus:
      "Visita ou análise remota do local, projeto técnico do evento (layout, lotação, rotas de saída e medidas de segurança), memorial descritivo e formulários, responsabilidade técnica do engenheiro, protocolo, acompanhamento da análise e apoio na vistoria. O orçamento é fechado: o que for cobrado à parte vem descrito por escrito.",
    contextTitle: "O que é pago à parte",
    context: [
      "<strong>Taxas do Corpo de Bombeiros</strong>, pagas diretamente ao Estado.",
      "<strong>Brigada de incêndio</strong> para o dia do evento, quando não estiver no pacote.",
      "<strong>Adequações no local</strong>, como extintores, sinalização ou iluminação de emergência que faltem.",
      "<strong>Autorização da Prefeitura</strong>, quando exigida. A DRD2 também cuida desse processo, e o valor vem descrito no orçamento.",
    ],
    riskTitle: "O que encarece ou atrasa",
    riskIntro:
      "Um projeto mal feito ou protocolado em cima da hora pode gerar exigências do Corpo de Bombeiros, retrabalho e risco de o evento não ser liberado a tempo. Compare o que está incluso, não só o valor final.",
    risks: [
      "urgência, com poucos dias até o evento",
      "local sem planta ou com pendências no AVCB",
      "palco, estandes, arquibancada ou tendas internas",
      "layout que muda depois do protocolo",
    ],
    hideTechnicalDepth: true,
    process: processoDrd2,
    documents: [
      "Data, local e público estimado.",
      "Fotos ou croqui do espaço.",
      "AVCB ou CLCB do local.",
      "Estruturas previstas: palco, estandes, tendas, arquibancada.",
    ],
    extraSections: [
      {
        title: "O que forma o preço",
        table: {
          head: ["Fator", "Custo menor", "Custo maior"],
          rows: [
            ["Público estimado", "Até algumas centenas de pessoas", "Milhares de pessoas"],
            ["Estrutura", "Só mesas e cadeiras", "Palco, estandes, arquibancada, tendas internas"],
            ["Situação do local", "AVCB válido e planta disponível", "Sem planta ou com pendências no AVCB"],
            ["Prazo", "Contratação com antecedência", "Urgência, com poucos dias até o evento"],
            ["Recorrência", "Vários eventos no mesmo local", "Evento único, local novo"],
          ],
        },
      },
      {
        title: "Como pagar",
        intro: "O primeiro pagamento só acontece depois que o projeto for aprovado pelo Corpo de Bombeiros.",
      },
    ],
    faqs: [
      {
        question: "Vocês passam preço pelo WhatsApp?",
        answer:
          "Sim. Com a data, o local, o público e fotos ou croqui do espaço, o orçamento sai no mesmo dia.",
      },
      {
        question: "O orçamento é fechado?",
        answer:
          "Sim. O orçamento é fechado, e o que for cobrado à parte, como taxas do Corpo de Bombeiros ou adequações no local, vem descrito por escrito.",
      },
      {
        question: "Faço vários eventos por ano. Tem desconto?",
        answer: "Sim. Produtoras, agências e empresas de formatura podem ter pacote anual com preço por evento.",
      },
      faqCorrecao,
    ],
    related: semAtual("/quanto-custa-ptotep"),
  },

  "/prazo-aprovacao-bombeiros-evento": {
    title: "Prazo do PTOTEP: Quando Protocolar Antes do Evento",
    description:
      "O PTOTEP deve ser protocolado pelo menos 7 dias úteis antes do evento, e a licença vale por até 30 dias. Veja a linha do tempo e quando contratar.",
    h1: "Com quanto tempo de antecedência protocolar o PTOTEP",
    lead:
      "Pela regra do Corpo de Bombeiros de São Paulo, o PTOTEP deve ser protocolado com pelo menos 7 dias úteis de antecedência do evento. A licença vale por até 30 dias e pode ser prorrogada uma vez, pelo mesmo período. Para ter margem para correções, o ideal é contratar bem antes desse limite.",
    ctaLabel: "Ver se ainda dá tempo",
    focusTitle: "Linha do tempo de um PTOTEP",
    focus:
      "Da contratação à licença, o processo passa por seis etapas. A que não pode atrasar é o protocolo: no mínimo 7 dias úteis antes do evento. Fins de semana e feriados não entram na contagem.",
    process: [
      "Contratação e envio dos documentos: local, datas, layout, público e AVCB do local.",
      "Projeto técnico, elaborado pelo engenheiro responsável.",
      "Protocolo no Corpo de Bombeiros, no mínimo 7 dias úteis antes do evento.",
      "Análise: se houver exigências, a DRD2 corrige e reapresenta, sem custo adicional.",
      "Vistoria: conferência das medidas de segurança no local.",
      "Licença emitida, válida para o evento e o período informados.",
    ],
    contextTitle: "Eventos de temporada: não deixe para depois",
    context: [
      "<strong>Formaturas e confraternizações de fim de ano</strong> disputam o mesmo período de análise em novembro e dezembro.",
      "<strong>Réveillon e carnaval</strong> concentram eventos no litoral e na capital na mesma janela.",
      "<strong>Festas juninas e quermesses</strong> acontecem quase todas entre junho e julho. Nessas épocas, contrate o quanto antes para ter margem caso o Corpo de Bombeiros peça correções.",
    ],
    riskTitle: "O que faz perder o prazo",
    riskIntro:
      'Sem protocolo dentro do prazo, o evento corre o risco de não ser liberado a tempo. Em alguns casos de interesse da administração pública, a regra admite prazo menor, com autorização formal. Se o seu evento está perto, veja o <a href="/ptotep-urgente">atendimento urgente</a>.',
    risks: [
      "layout fechado só depois do protocolo",
      "AVCB do local vencido ou sem planta",
      "documentos de fornecedores atrasados",
      "correções pedidas pelo Corpo de Bombeiros perto da data",
    ],
    hideTechnicalDepth: true,
    documents: documentosPadrao,
    faqs: [
      {
        question: "Os 7 dias são corridos ou úteis?",
        answer: "São 7 dias úteis antes da data do evento. Fins de semana e feriados não entram na contagem.",
      },
      {
        question: "Meu evento dura 3 dias. Preciso de 3 licenças?",
        answer:
          "Não necessariamente. A licença cobre o período do evento informado no projeto, dentro da vigência de até 30 dias.",
      },
      {
        question: "Faço o mesmo evento todo mês no mesmo local. Como fica?",
        answer:
          "A vigência é limitada, então cada período precisa de licença. Um pacote recorrente com a DRD2 reaproveita o projeto e reduz custo e prazo.",
      },
      {
        question: "Posso protocolar antes de fechar o layout?",
        answer:
          "Não é recomendado. Mudanças no layout depois do protocolo podem exigir correções. Feche o layout primeiro, com a ajuda do engenheiro.",
      },
    ],
    related: semAtual("/prazo-aprovacao-bombeiros-evento"),
  },

  "/avcb-para-evento-corporativo": {
    label: "PTOTEP para evento corporativo",
    eyebrow: "Convenções, lançamentos e confraternizações",
    title: "PTOTEP para Evento Corporativo e Convenção | DRD2",
    description:
      "Convenção, lançamento ou confraternização em hotel, centro de eventos ou galpão? A DRD2 faz o PTOTEP e cuida da Prefeitura, com engenheiro responsável.",
    h1: "PTOTEP para convenções e eventos corporativos",
    lead:
      "Convenção de vendas, lançamento de produto, feira interna ou confraternização de fim de ano. Se o evento muda o uso normal do espaço, ele precisa de licença própria do Corpo de Bombeiros. A DRD2 cuida do projeto, do protocolo e da Prefeitura, com um único responsável técnico.",
    heroImage: hotelHero,
    ctaLabel: "Falar com o engenheiro sobre o evento",
    focusTitle: "Quando o evento corporativo precisa de PTOTEP",
    focus:
      "Nem todo evento da empresa precisa de licença própria. O que decide é se o evento muda o uso normal do espaço: público, montagem e atividade. Na dúvida, envie o local, a data e o público: o engenheiro responde se precisa ou não, sem compromisso.",
    contextTitle: "Para quem é",
    context: [
      "<strong>RH e eventos internos:</strong> confraternização, SIPAT, convenção de vendas.",
      "<strong>Agências de eventos e live marketing:</strong> vários eventos por ano para clientes diferentes, com pacote de preço por evento.",
      "<strong>Hotéis e centros de convenção:</strong> apoio para os eventos dos clientes que alteram o layout do salão.",
    ],
    hideTechnicalDepth: true,
    process: processoDrd2,
    documents: documentosPadrao,
    extraSections: [
      {
        title: "Precisa ou não precisa?",
        table: {
          head: ["Situação", "Exemplo", "Precisa avaliar?"],
          rows: [
            ["Evento no uso normal do espaço", "Jantar em restaurante dentro da lotação habitual", "Normalmente o AVCB do local basta"],
            ["Público acima do habitual", "Convenção com mais pessoas do que o salão costuma receber", "Sim"],
            ["Montagem de palco, estandes ou cenografia", "Lançamento de produto com palco e telão", "Sim"],
            ["Espaço usado para outra atividade", "Galpão ou área de produção virando salão de festa", "Sim"],
            ["Confraternização de fim de ano", "Festa da empresa em casa de eventos, com banda e pista", "Depende da montagem e do público"],
          ],
        },
      },
      {
        title: "O que a empresa ganha contratando a DRD2",
        items: [
          "Um engenheiro responsável do projeto à vistoria, falando direto pelo WhatsApp.",
          "Bombeiros e Prefeitura resolvidos no mesmo atendimento.",
          "Orçamento fechado, com nota fiscal e o que é cobrado à parte descrito por escrito.",
          "1º pagamento só depois da aprovação do projeto, o que facilita a aprovação interna da compra.",
          "Atendimento também aos fins de semana.",
        ],
      },
    ],
    faqs: [
      {
        question: "A confraternização da empresa precisa de PTOTEP?",
        answer:
          "Nem sempre. Se o evento acontece dentro do uso e da lotação normais do local, o AVCB pode bastar. Com banda, palco, pista ou público maior, o engenheiro avalia.",
      },
      {
        question: "O hotel já tem AVCB. Por que eu precisaria de outro documento?",
        answer:
          "O AVCB aprova o uso normal do espaço. Se o seu evento muda o layout, o público ou monta estruturas, é preciso uma licença para aquele evento.",
      },
      { question: "Vocês emitem nota fiscal?", answer: "Sim, emitimos nota fiscal de serviço." },
      {
        question: "Minha agência faz eventos o ano todo. Tem contrato recorrente?",
        answer: "Sim. Pacote anual com preço por evento e um engenheiro dedicado.",
      },
      {
        question: "Quanto custa?",
        answer:
          "Depende do público, da estrutura e do prazo. Orçamento fechado e 1º pagamento só após a aprovação do projeto.",
      },
    ],
    related: [
      ...semAtual("/avcb-para-evento-corporativo"),
      { label: "PTOTEP para evento em shopping", href: "/avcb-para-evento-em-shopping" },
      { label: "PTOTEP para feira", href: "/avcb-para-feira" },
    ],
    ctaOccupation: "PTOTEP para evento corporativo",
  },
};

// ----------------------------------------------------------------------------
// URLs novas.
// ----------------------------------------------------------------------------
export const ptotepNewPages: PtotepPage[] = [
  {
    slug: "/ptotep-urgente",
    kind: "duvida",
    label: "PTOTEP urgente",
    eyebrow: "Evento em poucos dias",
    title: "PTOTEP Urgente em SP | Atendimento Rápido | DRD2",
    description:
      "Evento em poucos dias e ainda sem liberação do Corpo de Bombeiros? Mande a data e o local no WhatsApp. O engenheiro diz hoje se ainda dá tempo.",
    h1: "PTOTEP urgente: meu evento é em poucos dias, e agora?",
    lead:
      "Mande a data, o local e o público estimado. O engenheiro da DRD2 responde no mesmo dia se ainda dá tempo de protocolar e o que precisa ser feito.",
    heroImage: eventHero,
    imageAlt: "Engenheiro revisando planta de evento com prazo curto",
    ctaLabel: "Meu evento é em poucos dias — falar agora",
    focusTitle: "Ainda dá tempo?",
    focus:
      "A regra do Corpo de Bombeiros prevê protocolo com antecedência mínima de 7 dias úteis antes do evento. Veja na tabela onde você está e fale com o engenheiro hoje.",
    contextTitle: "O que já adianta o processo",
    context: [
      "<strong>Mande tudo de uma vez:</strong> data, endereço do local, público estimado e fotos ou croqui do espaço.",
      "<strong>Peça agora o AVCB ou CLCB do local</strong> ao dono do espaço.",
      "<strong>Feche o layout antes do protocolo:</strong> mudanças depois podem gerar correções.",
    ],
    riskTitle: "O que atrasa um PTOTEP (e como evitamos)",
    riskIntro:
      "Quase todo atraso vem de documento que falta ou de layout que muda. Por isso checamos esses pontos logo no primeiro contato.",
    risks: [
      "Local sem AVCB válido: verificamos isso no primeiro contato.",
      "Layout que muda depois do protocolo: fechamos o layout com você antes de protocolar.",
      "Correções pedidas pelo Corpo de Bombeiros: respondemos no mesmo dia.",
      "Brigada não definida: orientamos a quantidade e ajudamos a contratar.",
    ],
    process: [
      "Você manda no WhatsApp a data, o endereço do local, o público estimado e fotos ou croqui do espaço.",
      "Resposta no mesmo dia: o engenheiro diz se o evento precisa de PTOTEP, se o prazo permite e o preço.",
      "Protocolo imediato e acompanhamento diário até a licença.",
    ],
    documents: [
      "AVCB ou CLCB do local (peça ao dono do espaço agora).",
      "Planta ou croqui com palco, mesas, estandes e saídas. Sem planta? Fotos e medidas aproximadas já permitem começar.",
      "Público estimado e horário do evento.",
      "Contrato de locação ou autorização do proprietário.",
    ],
    hideTechnicalDepth: true,
    extraSections: [
      {
        title: "Onde você está",
        table: {
          head: ["Faltam para o evento", "Situação", "O que fazer"],
          rows: [
            ["Mais de 15 dias", "Prazo confortável", "Contratar agora e enviar os documentos"],
            ["Entre 8 e 15 dias", "Prazo apertado, mas possível", "Falar hoje com o engenheiro e enviar tudo em até 24 h"],
            ["7 dias úteis ou menos", "Abaixo do prazo mínimo", "Falar agora: avaliamos as alternativas do seu caso"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Meu evento é amanhã. Vocês conseguem?",
        answer:
          "Fale agora pelo WhatsApp. Vamos ser diretos sobre o que é possível no seu caso, sem prometer o que depende da análise do Corpo de Bombeiros.",
      },
      {
        question: "Atendimento urgente custa mais?",
        answer:
          "Pode haver um acréscimo para priorizar o seu projeto. O valor já vem no orçamento fechado, antes de você decidir, sem surpresa depois.",
      },
      { question: "Vocês atendem fim de semana?", answer: "Sim, atendemos também aos fins de semana." },
      {
        question: "O que acontece se o evento acontecer sem licença?",
        answer:
          "O evento pode ser interditado na fiscalização, e o organizador e o responsável pelo local podem responder pelos riscos.",
      },
    ],
    related: semAtual("/ptotep-urgente"),
    ctaOccupation: "PTOTEP urgente",
  },

  {
    slug: "/ptotep-para-formatura",
    kind: "evento",
    label: "PTOTEP para formatura",
    eyebrow: "Colação e baile de formatura",
    title: "PTOTEP para Formatura: Aprovação nos Bombeiros | DRD2",
    description:
      "Baile ou colação de grau em casa de festas, clube ou ginásio? A DRD2 faz o PTOTEP da formatura e o 1º pagamento é só após a aprovação do projeto.",
    h1: "PTOTEP para formatura e baile de formatura",
    lead:
      "Formatura reúne centenas de pessoas, palco, pista e estrutura de som e luz em um só lugar. A DRD2 faz o projeto de segurança contra incêndio, protocola no Corpo de Bombeiros e acompanha até a liberação.",
    heroImage: salaoHero,
    imageAlt: "Salão de festas preparado para baile de formatura",
    ctaLabel: "Falar com o engenheiro sobre a formatura",
    focusTitle: "Por que a formatura precisa de atenção especial",
    focus:
      "Mesmo em uma casa de festas com AVCB, o baile de formatura costuma mudar o uso normal do espaço. Quando isso acontece, o Corpo de Bombeiros exige uma licença própria para o evento, o PTOTEP.",
    contextTitle: "O que muda no baile",
    context: [
      "<strong>Lotação alta:</strong> formandos, familiares e convidados podem passar do público habitual do salão.",
      "<strong>Palco, pista e estruturas:</strong> cenário, som, luz e telões ocupam áreas e podem bloquear rotas de saída.",
      "<strong>Layout diferente e evento longo:</strong> mesas em nova disposição mudam a circulação, e a festa noturna exige atenção à iluminação de emergência, à sinalização e à brigada durante toda a noite.",
    ],
    riskTitle: "Riscos de deixar para dezembro",
    risks: [
      "cenografia fechada só depois do protocolo",
      "lotação acima do que o salão comporta",
      "palco ou pista bloqueando rota de saída",
      "brigada não definida para a noite toda",
    ],
    hideTechnicalDepth: true,
    process: processoDrd2,
    documents: [
      "Local, data e horário do baile.",
      "Layout com palco, pista, mesas, bar e saídas (pode ser um croqui da cenografia).",
      "Público estimado: formandos, convidados e equipe.",
      "AVCB ou CLCB válido da casa de festas.",
      "Contrato com o local.",
    ],
    extraSections: [
      {
        title: "Colação, baile ou os dois",
        table: {
          head: ["Evento", "Onde costuma acontecer", "O que avaliar"],
          rows: [
            ["Colação de grau", "Teatro, auditório, ginásio da faculdade", "Lotação e se a cerimônia foge do uso normal do local"],
            ["Baile de formatura", "Casa de festas, clube, pavilhão", "Palco, pista, cenografia e lotação"],
            ["Culto ecumênico", "Igreja ou auditório", "Público acima do habitual"],
          ],
        },
        note: "O engenheiro avalia cada evento e diz quais precisam de PTOTEP.",
      },
      {
        title: "Para empresas de formatura e comissões",
        items: [
          "<strong>Empresa de formatura:</strong> vários bailes por temporada, em locais diferentes. Pacote com preço por evento e um só engenheiro acompanhando todos.",
          "<strong>Comissão de formatura:</strong> se a empresa contratada não cuida da licença, a comissão pode contratar direto. Peça o orçamento com a data e o local.",
          "<strong>Casa de festas:</strong> se você recebe muitas formaturas, um projeto base agiliza cada evento.",
        ],
      },
      {
        title: "Prazos da temporada",
        intro:
          'O protocolo deve ser feito com antecedência mínima de 7 dias úteis antes do evento. Em novembro e dezembro, muitas formaturas disputam o mesmo período de análise: contrate o quanto antes. Evento em menos de 10 dias? Veja o <a href="/ptotep-urgente">atendimento urgente</a>.',
      },
    ],
    faqs: [
      {
        question: "A casa de festas já tem AVCB. Mesmo assim preciso de PTOTEP?",
        answer:
          "Depende do baile. Se a formatura muda a lotação, a montagem ou o layout do salão, o PTOTEP é exigido. O engenheiro avalia pelo WhatsApp com o croqui da cenografia.",
      },
      {
        question: "Quem deve contratar: a empresa de formatura, a comissão ou o local?",
        answer:
          "Qualquer um deles pode. O importante é combinar no contrato quem é o responsável pela licença.",
      },
      {
        question: "A cenografia muda perto do evento. Tem problema?",
        answer:
          "Mudanças depois do protocolo podem exigir correções. Feche o layout com o engenheiro antes; se houver ajustes pedidos pelos Bombeiros, não há custo adicional.",
      },
      {
        question: "Vocês cuidam também da brigada?",
        answer: "A brigada faz parte da documentação. A DRD2 orienta a quantidade e ajuda a contratar.",
      },
      {
        question: "Quanto custa?",
        answer:
          "Depende do público, da estrutura e do prazo. O orçamento é fechado e o 1º pagamento é só após a aprovação do projeto.",
      },
    ],
    related: [
      ...semAtual("/ptotep-para-formatura"),
      { label: "PTOTEP para evento universitário", href: "/ptotep-para-evento-universitario" },
    ],
    ctaOccupation: "PTOTEP para formatura",
  },

  {
    slug: "/ptotep-santos-baixada",
    kind: "cidade",
    label: "PTOTEP em Santos e Baixada",
    eyebrow: "Santos e Baixada Santista",
    title: "PTOTEP em Santos e Baixada | Aprovação de Eventos",
    description:
      "Réveillon, show ou festa de verão em Santos, Guarujá ou Praia Grande? A DRD2 faz o PTOTEP ou o PTOT e cuida da Prefeitura, com atendimento presencial.",
    h1: "PTOTEP em Santos e na Baixada Santista",
    lead:
      "A temporada de verão concentra réveillon, shows, festas e eventos corporativos no litoral. A DRD2 regulariza seu evento no Corpo de Bombeiros e na Prefeitura, com engenheiro responsável e atendimento na região.",
    heroImage: showHero,
    imageAlt: "Evento com palco e iluminação no litoral",
    ctaLabel: "Falar com o engenheiro sobre meu evento no litoral",
    focusTitle: "Cidades atendidas na Baixada",
    focus:
      "Atendimento presencial em Santos, São Vicente, Guarujá, Praia Grande, Cubatão, Bertioga, Mongaguá, Itanhaém e Peruíbe.",
    contextTitle: "Eventos típicos da temporada",
    context: [
      "<strong>Réveillon</strong> em hotéis, clubes e casas de festa.",
      "<strong>Shows e festas de verão</strong> em casas noturnas e espaços de eventos.",
      '<strong>Eventos com tenda ou palco</strong> em áreas abertas (veja <a href="/ptot-ptiot-evento-ao-ar-livre">PTOT / PTIOT</a>) e <strong>eventos corporativos</strong> em hotéis da orla.',
    ],
    riskTitle: "Riscos na temporada",
    risks: [
      "protocolo em cima do réveillon, o período mais disputado",
      "festa na praia sem autorização da Prefeitura",
      "palco ou tenda sem ART da montadora",
      "lotação acima do habitual em hotel ou clube",
    ],
    hideTechnicalDepth: true,
    process: processoDrd2,
    documents: documentosPadrao,
    extraSections: [
      {
        title: "Qual documento o seu evento precisa",
        table: {
          head: ["Onde é o evento", "Documento", "Exemplo"],
          rows: [
            ["Dentro de um local fixo", "PTOTEP", "Réveillon em hotel, clube, casa de show ou salão"],
            ["Área externa com estrutura montada", "PTOT (PTIOT)", "Festa na praia, palco em área aberta, tenda"],
            ["No uso normal do local", "AVCB do local pode bastar", "Jantar em restaurante dentro da lotação habitual"],
          ],
        },
      },
      {
        title: "Por que contratar cedo no litoral",
        intro:
          "A temporada concentra muitos eventos entre dezembro e fevereiro. O protocolo exige antecedência mínima de 7 dias úteis, e o fim de ano é o período mais disputado. Réveillon ou carnaval no litoral? Contrate o quanto antes.",
      },
      {
        title: "Bombeiros e Prefeitura no mesmo atendimento",
        intro:
          "Evento no litoral costuma exigir também autorização da Prefeitura, principalmente em área pública ou na praia. A DRD2 cuida dos dois processos, e o valor vem descrito no orçamento.",
      },
    ],
    faqs: [
      {
        question: "Vocês vão até Santos para a vistoria?",
        answer: "Sim, atendemos presencialmente em toda a Baixada Santista.",
      },
      {
        question: "Festa na praia precisa de licença dos Bombeiros?",
        answer:
          "Se há estrutura montada, como palco, tenda ou arquibancada, o evento em área externa é regularizado pelo PTOT. A Prefeitura também costuma exigir autorização.",
      },
      {
        question: "Meu réveillon é em um hotel com AVCB. Preciso de algo mais?",
        answer:
          "Depende do público e da montagem. Se o réveillon muda o uso normal do salão, é preciso PTOTEP.",
      },
      {
        question: "Quanto custa?",
        answer:
          "Depende do evento, da estrutura e do prazo. Orçamento fechado e 1º pagamento só depois da aprovação do projeto.",
      },
    ],
    related: semAtual("/ptotep-santos-baixada"),
    ctaOccupation: "PTOTEP em Santos e Baixada",
  },

  {
    slug: "/regularizacao-de-eventos-sao-paulo",
    kind: "duvida",
    label: "Regularização de eventos",
    eyebrow: "Bombeiros e Prefeitura",
    title: "Liberação de Evento nos Bombeiros e Prefeitura SP | DRD2",
    description:
      "Vai fazer um evento e não sabe qual licença precisa? A DRD2 regulariza seu evento no Corpo de Bombeiros e na Prefeitura, com engenheiro responsável.",
    h1: "Regularização de eventos em SP: Bombeiros e Prefeitura em um só atendimento",
    lead:
      "Você não precisa saber o nome do documento. Conte o que é o evento, onde e quando. O engenheiro da DRD2 diz o que é exigido e cuida de tudo, do projeto à liberação.",
    heroImage: eventHero,
    imageAlt: "Engenheiro analisando a planta de um evento",
    ctaLabel: "Contar meu evento ao engenheiro",
    focusTitle: "Qual licença o seu evento precisa",
    focus:
      "Cada tipo de evento pede uma licença diferente. A tabela abaixo mostra os casos mais comuns. Na dúvida, mande a descrição do evento no WhatsApp: o engenheiro responde qual é o seu caso.",
    contextTitle: "Tipos de evento que atendemos",
    context: [
      '<strong>Em locais fixos:</strong> <a href="/ptotep-para-formatura">formaturas</a>, <a href="/avcb-para-show">shows e festas</a>, <a href="/avcb-para-feira">feiras</a> e <a href="/avcb-para-exposicao">exposições</a>, <a href="/avcb-para-evento-corporativo">convenções e eventos corporativos</a>, <a href="/avcb-para-evento-em-shopping">eventos em shopping</a>.',
      '<strong>Públicos específicos:</strong> <a href="/ptotep-para-evento-esportivo">eventos esportivos</a>, <a href="/ptotep-para-evento-universitario">eventos universitários</a>, <a href="/ptotep-para-evento-em-igreja">eventos em igreja</a>, festas juninas.',
      '<strong>Ao ar livre:</strong> <a href="/ptotep-para-festival">festivais</a>, eventos com tenda, palco e arquibancada e rodeios, pelo <a href="/ptot-ptiot-evento-ao-ar-livre">PTOT</a>.',
    ],
    riskTitle: "Por que regularizar",
    riskIntro:
      "A licença mostra que o evento foi planejado com rotas de saída, lotação e medidas de segurança adequadas.",
    risks: [
      "interdição na fiscalização, inclusive no dia do evento",
      "organizador e responsável pelo local podem responder pelos riscos",
      "atraso de abertura ou cancelamento",
    ],
    hideTechnicalDepth: true,
    process: [
      "Diagnóstico: você conta o evento, o local, a data e o público. O engenheiro define o que é exigido.",
      "Orçamento fechado, com tudo o que está incluso e o que é cobrado à parte.",
      "Projeto e documentação: projeto técnico, memorial e responsabilidade técnica.",
      "Protocolo no Corpo de Bombeiros e na Prefeitura, quando exigido.",
      "Acompanhamento até a liberação, com correções sem custo adicional.",
      "1º pagamento só depois da aprovação do projeto.",
    ],
    documents: documentosPadrao,
    extraSections: [
      {
        title: "Qual licença para cada caso",
        table: {
          head: ["Seu evento", "O que costuma ser exigido", "Saiba mais"],
          rows: [
            [
              "Dentro de um local fixo, mudando o uso normal (salão, ginásio, igreja, hotel, pavilhão)",
              "PTOTEP no Corpo de Bombeiros",
              '<a href="/ptotep">PTOTEP</a>',
            ],
            ["Em área aberta, com palco, tenda ou arquibancada", "PTOT (PTIOT) no Corpo de Bombeiros", '<a href="/ptot-ptiot-evento-ao-ar-livre">PTOT / PTIOT</a>'],
            ["Em local fixo, no uso e lotação normais", "AVCB ou CLCB válido do local", '<a href="/avcb-sao-paulo">AVCB</a>'],
            ["Em área pública ou com impacto na vizinhança", "Autorização da Prefeitura, além dos Bombeiros", "A DRD2 cuida dos dois"],
          ],
        },
      },
      {
        title: "Prazos",
        intro:
          'Para PTOTEP e PTOT, o protocolo deve ser feito com antecedência mínima de 7 dias úteis antes do evento. A autorização da Prefeitura tem prazos próprios. Veja os <a href="/prazo-aprovacao-bombeiros-evento">prazos do PTOTEP</a> e, se o evento está perto, o <a href="/ptotep-urgente">atendimento urgente</a>.',
      },
    ],
    faqs: [
      {
        question: "Qual a diferença entre AVCB e a licença do evento?",
        answer:
          "O AVCB aprova o uso normal do local. A licença do evento (PTOTEP ou PTOT) aprova aquele evento, naquelas datas.",
      },
      {
        question: "Preciso tirar licença na Prefeitura também?",
        answer: "Depende do local e do tipo de evento. A DRD2 avalia e cuida dos dois processos.",
      },
      {
        question: "Vocês atendem fora da capital?",
        answer:
          "Sim, em todos os municípios vizinhos da capital, como Guarulhos, Osasco, o ABC, Diadema, Taboão da Serra e Cotia, e também na Baixada Santista.",
      },
      {
        question: "Quanto custa regularizar um evento?",
        answer:
          "Depende do evento, da estrutura e do prazo. Orçamento fechado e 1º pagamento só depois da aprovação do projeto.",
      },
    ],
    related: semAtual("/regularizacao-de-eventos-sao-paulo"),
    ctaOccupation: "regularização de evento",
  },

  {
    slug: "/ptot-ptiot-evento-ao-ar-livre",
    kind: "evento",
    label: "PTOT para eventos ao ar livre",
    eyebrow: "Estrutura temporária em área aberta",
    title: "PTOT / PTIOT para Eventos ao Ar Livre em SP | DRD2",
    description:
      "Show, festival, feira ou festa com palco, tenda ou arquibancada em área aberta? A DRD2 faz o PTOT (antigo PTIOT) e cuida da Prefeitura.",
    h1: "PTOT (PTIOT) para eventos com estrutura temporária",
    lead:
      "Evento em área aberta com estrutura montada precisa de licença própria do Corpo de Bombeiros. A DRD2 faz o projeto, protocola, acompanha a vistoria e cuida também da autorização da Prefeitura.",
    heroImage: showHero,
    imageAlt: "Palco montado para evento ao ar livre",
    ctaLabel: "Falar com o engenheiro sobre o evento",
    focusTitle: "O que é o PTOT (antigo PTIOT)",
    focus:
      "PTOT é o Projeto Técnico para Ocupação Temporária: o documento exigido para eventos em estruturas não permanentes, montadas para aquele evento, como palcos, tendas, arquibancadas e circos. Muita gente ainda conhece como PTIOT (Projeto Técnico para Instalação e Ocupação Temporária); a Instrução Técnica 01/2025 do Corpo de Bombeiros de São Paulo passou a usar o nome PTOT.",
    contextTitle: "Eventos que precisam de PTOT",
    context: [
      "<strong>Shows e festivais ao ar livre</strong>, com palco, tendas e coberturas temporárias.",
      "<strong>Feiras em área aberta</strong>, estacionamentos ou praças, com palcos e arquibancadas montados.",
      "<strong>Rodeios, festas de peão e festas populares</strong>, além de circos e parques itinerantes.",
    ],
    riskTitle: "Riscos frequentes em área aberta",
    risks: [
      "estrutura montada sem ART da montadora",
      "evento em área pública sem autorização da Prefeitura",
      "rotas de fuga bloqueadas por palco, gradil ou tenda",
      "lotação sem controle de acesso",
    ],
    hideTechnicalDepth: true,
    process: [
      "Análise do local e das estruturas: área, acessos, público e montagem.",
      "Projeto técnico: layout, lotação, rotas de fuga, sinalização, extintores e demais medidas exigidas.",
      "Documentação: memorial do evento, formulários e responsabilidade técnica.",
      "Protocolo no Corpo de Bombeiros e, quando exigido, na Prefeitura.",
      "Acompanhamento até a vistoria e a liberação, com correções sem custo adicional.",
    ],
    documents: [
      "Local, datas e horários (incluindo montagem e desmontagem).",
      "Croqui do espaço com palco, tendas, arquibancadas, entradas e saídas.",
      "Público estimado.",
      "ART da empresa que montou as estruturas (palco, tenda, arquibancada).",
      "Autorização de uso do espaço (proprietário ou Prefeitura).",
    ],
    extraSections: [
      {
        title: "PTOT ou PTOTEP?",
        table: {
          head: ["O evento acontece", "Documento"],
          rows: [
            ["Em área aberta, com estrutura montada só para o evento", "PTOT (PTIOT)"],
            ["Dentro de uma edificação permanente (salão, ginásio, pavilhão)", '<a href="/ptotep">PTOTEP</a>'],
            ["Os dois (ex.: evento em pavilhão com área externa montada)", "O engenheiro avalia o enquadramento de cada área"],
          ],
        },
      },
      {
        title: "Prazos",
        intro:
          "O PTOT deve ser protocolado com antecedência mínima de 7 dias úteis antes do evento, conforme a IT 01/2025. Como evento externo envolve estruturas e, muitas vezes, a Prefeitura, contrate com mais antecedência.",
      },
      {
        title: "Para produtoras de eventos",
        intro: "Produtoras com vários eventos por ano têm pacote com preço por evento.",
      },
    ],
    faqs: [
      {
        question: "PTOT e PTIOT são a mesma coisa?",
        answer: "Na prática, sim: PTIOT é o nome antigo, e a IT 01/2025 usa PTOT.",
      },
      {
        question: "Evento em área pública precisa de Prefeitura também?",
        answer: "Normalmente sim. A DRD2 cuida dos dois processos no mesmo atendimento.",
      },
      {
        question: "A locadora da tenda já tem responsável técnico. Ainda preciso do PTOT?",
        answer:
          "Sim. A responsabilidade pela estrutura é da montadora; o PTOT trata da segurança contra incêndio do evento como um todo.",
      },
      {
        question: "Quanto custa?",
        answer:
          "Depende da área, das estruturas, do público e do prazo. Orçamento fechado e 1º pagamento só após a aprovação do projeto.",
      },
    ],
    related: [
      ...semAtual("/ptot-ptiot-evento-ao-ar-livre"),
      { label: "PTOTEP para festival", href: "/ptotep-para-festival" },
    ],
    ctaOccupation: "PTOT para evento ao ar livre",
  },
];
