export type PtotepPageKind = "principal" | "evento" | "cidade" | "duvida";

export type PtotepFaq = {
  question: string;
  answer: string;
};

export type PtotepRelatedLink = {
  label: string;
  href: string;
};

/**
 * Bloco de profundidade técnica escrito à mão para uma página específica.
 * Quando presente, substitui o texto gerado por `getTechnicalDepth`, que sai
 * praticamente idêntico em todas as páginas do mesmo `kind`.
 */
export type PtotepDeepDive = {
  title: string;
  intro: string;
  details: string[];
};

export type PtotepPage = {
  slug: string;
  kind: PtotepPageKind;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  heroImage: string;
  imageAlt: string;
  focus: string;
  contextTitle: string;
  context: string[];
  riskTitle: string;
  risks: string[];
  process: string[];
  documents: string[];
  faqs: PtotepFaq[];
  related: PtotepRelatedLink[];
  ctaOccupation: string;
  deepDive?: PtotepDeepDive;
};

const baseDocuments = [
  "licença vigente da edificação permanente, quando aplicável ao caso",
  "layout do evento com fluxo de público, acessos, saídas e áreas bloqueadas",
  "ART ou RRT do responsável técnico pelas instalações temporarias",
  "memorial de segurança com lotação, horários, montagem e desmontagem",
  "documentos de estruturas, elétrica, geradores, GLP, stands, palco ou sonorização quando houver",
  "plano de atendimento, brigada, controle de acesso e sinalização temporária",
];

const baseProcess = [
  "analise técnica da edificação permanente, da licença existente e da ocupação temporária pretendida",
  "levantamento de lotação, rotas de fuga, interferencias no AVCB existente e pontos críticos do evento",
  "desenvolvimento do projeto, memoriais, ARTs/RRTs e documentos obrigatórios para protocolo",
  "protocolo e acompanhamento no sistema do Corpo de Bombeiros, com resposta técnica a exigências",
  "vistoria orientada, checklist de montagem e suporte até a liberação do evento",
];

const baseRelated: PtotepRelatedLink[] = [
  { label: "Projeto de incêndio", href: "/projetos-incendio" },
  { label: "AVCB em São Paulo", href: "/avcb-sao-paulo" },
  { label: "Treinamento de brigada", href: "/treinamento-brigada" },
  { label: "Laudo de estanqueidade de gás", href: "/laudo-estanqueidade-gas-sao-paulo" },
  { label: "PTOTEP para evento universitario", href: "/ptotep-para-evento-universitario" },
  { label: "PTOTEP em Sorocaba", href: "/ptotep-sorocaba" },
];

const baseFaqs: PtotepFaq[] = [
  {
    question: "PTOTEP substitui o AVCB da edificação?",
    answer:
      "Não. O AVCB ou a licença da edificação permanente trata o uso normal do imóvel. O PTOTEP trata a ocupação temporária criada pelo evento, feira, show, exposição ou montagem especial.",
  },
  {
    question: "Evento pequeno também pode precisar de regularização?",
    answer:
      "Pode. A necessidade depende da lotação, controle de acesso, tipo de montagem, uso de estruturas temporarias, interferencia nas rotas de fuga e exigências do local. A análise técnica evita enquadramento errado.",
  },
  {
    question: "Quanto tempo antes do evento devo iniciar o processo?",
    answer:
      "O ideal e iniciar antes da montagem e com folga para protocolo, eventuais ajustes e vistoria. Eventos com palco, stands, GLP, shopping ou grande público precisam de planejamento antecipado.",
  },
];

function page(input: PtotepPage): PtotepPage {
  return {
    ...input,
    process: input.process.length ? input.process : baseProcess,
    documents: input.documents.length ? input.documents : baseDocuments,
    // Página com conjunto próprio de FAQs não recebe as genéricas — senão todas
    // as páginas do cluster publicam o mesmo FAQPage e o Google as consolida.
    faqs: input.faqs.length >= 3 ? input.faqs : [...input.faqs, ...baseFaqs],
    related: input.related.length ? input.related : baseRelated,
  };
}

const eventHero = "/images/page-projetos.webp";
const shoppingHero = "/images/hero-shopping-sao-paulo.webp";
const showHero = "/images/hero-bar-com-show.jpg";
const churchHero = "/images/hero-igreja.webp";
const sportsHero = "/images/page-treinamento-brigada.webp";

export const ptotepPages: PtotepPage[] = [
  page({
    slug: "/ptotep",
    kind: "principal",
    label: "Projeto Técnico de Ocupação Temporária",
    eyebrow: "Evento Temporário em Edificação Permanente",
    title: "PTOTEP | Projeto Técnico de Ocupação Temporária em Edificação Permanente",
    description:
      "PTOTEP para eventos temporários em edificação permanente. Projeto, documentos, ART, protocolo no Corpo de Bombeiros e suporte técnico para liberar eventos com segurança.",
    h1: "Projeto Técnico de Ocupação Temporária em Edificação Permanente",
    lead:
      "Regularize eventos temporários dentro de shopping, igreja, escola, centro de convenções, hotel, galpão, teatro ou edifício já existente sem colocar o AVCB do local em risco.",
    heroImage: eventHero,
    imageAlt: "Engenheiro avaliando planta de PTOTEP para evento temporário",
    focus:
      "O PTOTEP (Projeto Técnico de Ocupação Temporária em Edificação Permanente) é a aprovação exigida pelo Corpo de Bombeiros quando você realiza um evento dentro de um imóvel que já possui uso e AVCB aprovados para outra finalidade.",
    contextTitle: "Quando o PTOTEP entra no jogo",
    context: [
      "A ocupação temporária muda a logica de uso do imóvel: aumenta público, cria stands, fecha corredores, instala palco, usa gerador, muda rota de fuga ou concentra pessoas em áreas que não foram pensadas para aquele evento.",
      "O ponto crítico e cruzar a licença existente da edificação com a atividade temporária. Um evento dentro de local regularizado ainda pode exigir projeto próprio se alterar lotação, layout ou medidas de segurança.",
      "A DRD2 conduz a leitura técnica, organiza documentos, emite ART quando aplicável e acompanha o protocolo para reduzir risco de exigência na vespera do evento.",
    ],
    riskTitle: "Riscos de deixar para a semana do evento",
    risks: [
      "montagem aprovada pelo shopping ou contratante, mas recusada na leitura técnica de segurança",
      "bloqueio de rota de fuga por stand, palco, fila, gradil ou área VIP",
      "lotação sem controle de acesso próprio",
      "uso de elétrica, GLP ou gerador sem documentos técnicos",
      "interdição, atraso de abertura ou cancelamento por falta de regularização",
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "O que significa PTOTEP?",
        answer:
          "PTOTEP significa Projeto Técnico de Ocupação Temporária em Edificação Permanente. E usado para eventos temporários realizados dentro ou vinculados a uma edificação existente.",
      },
    ],
    related: [
      { label: "AVCB para feira", href: "/avcb-para-feira" },
      { label: "AVCB para show", href: "/avcb-para-show" },
      { label: "Quanto custa PTOTEP", href: "/quanto-custa-ptotep" },
      { label: "Documentos necessários PTOTEP", href: "/documentos-necessarios-ptotep" },
    ],
    ctaOccupation: "PTOTEP para evento temporário",
  }),
  page({
    slug: "/avcb-para-feira",
    kind: "evento",
    label: "AVCB para feira",
    eyebrow: "Feiras, stands e exposições comerciais",
    title: "AVCB para Feira | PTOTEP para Stands e Eventos Temporários",
    description:
      "AVCB para feira: entenda quando o correto e PTOTEP. Projeto para stands, rotas de fuga, elétrica, lotação e protocolo junto ao Corpo de Bombeiros.",
    h1: "AVCB para Feira: quando o correto e PTOTEP",
    lead:
      "Feiras criam corredores temporários, stands, depósito, carga elétrica, público flutuante e pontos de atendimento. O projeto precisa provar que essa montagem não compromete a segurança do local.",
    heroImage: eventHero,
    imageAlt: "Feira com stands temporários para regularização PTOTEP",
    focus:
      "A busca por AVCB para feira normalmente esconde a necessidade de um projeto temporário. O foco e layout, acesso de público, materiais, elétrica dos stands e compatibilidade com a licença do pavilhao ou shopping.",
    contextTitle: "O que costuma travar feira",
    context: [
      "Stands que invadem rota de fuga ou reduzem largura de corredores criam risco direto de exigência.",
      "Pontos de energia, decoração, tecidos, paineis, cozinha demonstrativa e material promocional precisam ser avaliados antes da montagem.",
      "A organizadora precisa alinhar o projeto com regras do local, bombeiros, seguradora e contrato com expositores.",
    ],
    riskTitle: "Pontos de atenção em feiras",
    risks: [
      "corredor de circulação menor que o necessário para a lotação",
      "stands com carga elétrica sem ART ou documento técnico",
      "depósito improvisado em área de escape",
      "controle de acesso incompatavel com a capacidade do local",
      "montagem diferente do layout protocolado",
    ],
    process: [],
    documents: [],
    faqs: [],
    related: baseRelated,
    ctaOccupation: "feira temporária",
  }),
  page({
    slug: "/avcb-para-show",
    kind: "evento",
    label: "AVCB para show",
    eyebrow: "Shows, palcos e público em pe",
    title: "AVCB para Show | PTOTEP para Evento Musical",
    description:
      "AVCB para show e evento musical: projeto PTOTEP para palco, público, saídas, brigada, elétrica, gerador e aprovação junto aos Bombeiros.",
    h1: "AVCB para Show: regularização técnica do evento",
    lead:
      "Show temporário muda lotação, fluxo de entrada, rotas de fuga, potencia elétrica, som, palco e isolamento de público. A regularização precisa nascer junto com o mapa do evento.",
    heroImage: showHero,
    imageAlt: "Ambiente de show com público e estrutura temporária",
    focus:
      "Para show em edificação permanente, o PTOTEP organiza palco, house mix, bares, camarins, filas, saídas, brigada e equipamentos temporários sem comprometer a licença original do local.",
    contextTitle: "Por que show e sensível",
    context: [
      "A maior parte dos problemas aparece na relação entre público em pe, pouca iluminação, sinalização temporária e rotas obstruidas.",
      "Geradores, cabos, grids, cenografia, efeitos especiais e áreas VIP precisam conversar com o projeto de segurança.",
      "Quando a casa já tem AVCB, o evento não pode reduzir as condições de abandono previstas para o uso aprovado.",
    ],
    riskTitle: "Falhas comuns em shows",
    risks: [
      "lotação superior ao dimensionamento das saídas",
      "palco ou house mix bloqueando rota de fuga",
      "cabos e equipamentos atravessando áreas de circulação",
      "sinalização de emergência escondida por cenografia",
      "brigada insuficiente para horário e perfil do público",
    ],
    process: [],
    documents: [],
    faqs: [],
    related: baseRelated,
    ctaOccupation: "show ou evento musical",
  }),
  page({
    slug: "/avcb-para-exposicao",
    kind: "evento",
    label: "AVCB para exposição",
    eyebrow: "Exposições, galerias e mostras",
    title: "AVCB para Exposição | PTOTEP para Mostras e Galerias",
    description:
      "Regularização de exposição temporária com PTOTEP. Analise de fluxo, stands, cenografia, iluminação, rotas de fuga e documentos para Bombeiros.",
    h1: "AVCB para Exposição Temporária",
    lead:
      "Exposições parecem simples, mas paineis, divisorias, fluxo em salas, obras, iluminação cenografica e filas podem alterar a segurança prevista para o local.",
    heroImage: eventHero,
    imageAlt: "Exposição temporária com paineis e circulação de público",
    focus:
      "O projeto de exposição precisa proteger circulação, saídas, materiais de acabamento, iluminação, instalações temporarias e compatibilidade com a ocupação permanente.",
    contextTitle: "O que avaliar em exposições",
    context: [
      "Paineis e divisorias podem criar labirintos ou esconder placas e luminarias de emergência.",
      "Eventos de abertura concentram público acima da rotina normal do local.",
      "Instalações elétricas temporarias para luz e audiovisual precisam de documentação e execução segura.",
    ],
    riskTitle: "Riscos frequentes",
    risks: [
      "rota de fuga transformada em área expositiva",
      "controle de acesso inexistente em vernissage ou abertura",
      "carga elétrica temporária sem responsabilidade técnica",
      "material cenografico sem avaliação de reação ao fogo",
      "sinalização do local encoberta pela comunicação visual",
    ],
    process: [],
    documents: [],
    faqs: [],
    related: baseRelated,
    ctaOccupation: "exposição temporária",
  }),
  page({
    slug: "/avcb-para-evento-corporativo",
    kind: "evento",
    label: "AVCB para evento corporativo",
    eyebrow: "Congressos, convenções e treinamentos",
    title: "AVCB para Evento Corporativo | PTOTEP para Convenções",
    description:
      "PTOTEP para evento corporativo em hotel, centro de convenções, auditório ou empresa. Regularização de público, palco, stands, elétrica e rotas.",
    h1: "AVCB para Evento Corporativo e Convenção",
    lead:
      "Evento corporativo em hotel, prédio comercial ou centro de convenções costuma juntar palco, credenciamento, coffee break, stands, audiovisual e grande fluxo em horários concentrados.",
    heroImage: "/images/page-servicos.webp",
    imageAlt: "Evento corporativo com montagem temporária",
    focus:
      "A regularização deve proteger entrada, credenciamento, auditorios, salas paralelas, áreas de coffee, expositores e uso temporário de equipamentos.",
    contextTitle: "Onde o corporativo reprova",
    context: [
      "O contratante costuma assumir que o AVCB do hotel ou centro de eventos cobre tudo, mas a montagem pode alterar a condição aprovada.",
      "Credenciamento, filas e buffet podem bloquear portas e corredores se não forem posicionados com criterio técnico.",
      "Audiovisual, paineis de LED e cenografia elevam a demanda elétrica e exigem responsabilidade técnica.",
    ],
    riskTitle: "Itens críticos",
    risks: [
      "fila de credenciamento em frente a saída",
      "sala com lotação acima do permitido",
      "palco temporário sem ART ou memorial",
      "coffee break em corredor de abandono",
      "layout final diferente do enviado ao local",
    ],
    process: [],
    documents: [],
    faqs: [],
    related: baseRelated,
    ctaOccupation: "evento corporativo",
  }),
  page({
    slug: "/avcb-para-evento-em-shopping",
    kind: "evento",
    label: "AVCB para evento em shopping",
    eyebrow: "Atrios, malls e ativações de marca",
    title: "AVCB para Evento em Shopping | PTOTEP para Ativação e Feira",
    description:
      "Regularização de evento em shopping com PTOTEP. Analise de mall, atrio, stands, filas, elétrica, rotas de fuga e compatibilidade com AVCB do shopping.",
    h1: "AVCB para Evento em Shopping",
    lead:
      "Ativação em shopping parece simples, mas qualquer stand, fila, palco, exposição de produto ou área promocional interfere no mall, nas rotas e na operação do empreendimento.",
    heroImage: shoppingHero,
    imageAlt: "Shopping com evento temporário em área comum",
    focus:
      "O PTOTEP em shopping precisa preservar o AVCB do empreendimento, as rotas principais, as lojas vizinhas, o controle de público e a segurança da montagem.",
    contextTitle: "O que o shopping costuma exigir",
    context: [
      "Layout aprovado pela administração, ARTs, memorial de montagem, documentos de elétrica e indicação clara de área ocupada.",
      "Não basta caber no mall: a montagem precisa preservar fluxo, hidrantes, extintores, botoeiras, placas e acesso da brigada.",
      "Eventos em atrio ou praça central podem exigir controle de acesso próprio quando atraem público acima da rotina do shopping.",
    ],
    riskTitle: "Riscos em shopping",
    risks: [
      "stand bloqueando hidrante, extintor ou rota de fuga",
      "fila ocupando circulação do mall",
      "carga elétrica temporária sem compatibilização",
      "cenografia escondendo sinalização de emergência",
      "evento com público maior que a área comporta",
    ],
    deepDive: {
      title: "O mall é rota de fuga, não área de evento",
      intro:
        "Essa é a diferença que define todo o processo. O AVCB do shopping foi emitido considerando o mall, os átrios e as praças como circulação — área livre que serve de rota de fuga para a população das lojas. Quando um stand, palco ou área promocional ocupa esse espaço, duas coisas acontecem ao mesmo tempo: a largura útil da rota diminui e a população a ser evacuada aumenta. O PTOTEP existe para demonstrar que, mesmo com essa ocupação temporária, o conjunto continua atendendo.",
      details: [
        "Largura remanescente da circulação. Não basta o stand caber no átrio: o que precisa ser verificado é quanto de faixa livre sobra para o fluxo de abandono depois da montagem, incluindo a projeção de toldos, banners, totens e a área que a fila do evento vai ocupar. Fila é ocupação de circulação como qualquer outra, e é o item que a administração do shopping mais subestima ao aprovar o layout comercial.",
        "Obstrução de equipamentos de segurança. Hidrante, extintor, acionador manual de alarme, sinalização de saída e iluminação de emergência precisam permanecer visíveis e acessíveis. A cenografia de ativação de marca é montada para atrair o olhar, e é justamente por isso que encobre placa de rota e botoeira. Esse é o achado mais frequente em vistoria de evento em shopping, e é o mais fácil de resolver — desde que apareça no projeto e não na véspera.",
        "Energia temporária e montagem em operação. A carga do evento entra nos quadros do empreendimento ou em gerador próprio, e em ambos os casos precisa de responsável técnico, proteção adequada e passagem de cabo que não crie obstáculo nem risco na circulação. Quando a montagem invade o horário de funcionamento do shopping, some a separação entre canteiro e público, e o plano de montagem passa a ser item de segurança, não de logística.",
        "Manual da administração não substitui o processo. O shopping tem regras próprias de montagem e um layout aprovado internamente pelo departamento de operações. Isso organiza a relação comercial, mas não regulariza a ocupação temporária perante o Corpo de Bombeiros. São dois trâmites distintos, com prazos distintos, e o organizador que só cumpriu o primeiro chega na data do evento sem o segundo.",
      ],
    },
    process: [
      "leitura do AVCB vigente do shopping e da área comum onde o evento será montado, com identificação da rota de fuga afetada",
      "análise do layout comercial do evento contra a largura útil de circulação, a projeção de estruturas e o espaço de fila",
      "verificação de hidrantes, extintores, acionadores, sinalização e iluminação de emergência no perímetro da montagem",
      "compatibilização da carga elétrica temporária, gerador e passagem de cabos com a instalação do empreendimento",
      "elaboração de projeto, memoriais e ARTs, protocolo no Corpo de Bombeiros e resposta a exigências",
      "checklist de montagem no local, conferência antes da abertura ao público e suporte durante o evento",
    ],
    documents: [
      "AVCB vigente do shopping e planta da área comum onde o evento ocupará espaço",
      "layout do evento cotado, com projeção de estruturas, posição de fila e faixa livre de circulação remanescente",
      "carta de anuência ou aprovação da administração do shopping para a área e o período",
      "ART do responsável técnico pelas estruturas temporárias, com memorial de montagem",
      "ART da instalação elétrica temporária, com indicação de ponto de alimentação, carga e proteções",
      "certificado de tratamento antichama dos materiais de cenografia, tecidos e revestimentos",
      "memorial com público estimado, horários de montagem, operação e desmontagem, e plano de controle de acesso",
      "relação da equipe de brigada dedicada ao evento, quando o público exceder a rotina do empreendimento",
    ],
    faqs: [
      {
        question: "Se o shopping já tem AVCB, por que o evento precisa de PTOTEP?",
        answer:
          "Porque o AVCB do shopping foi emitido considerando o mall como área de circulação livre. O evento converte parte dessa circulação em área ocupada e, ao mesmo tempo, atrai público adicional. O PTOTEP é o processo que demonstra que a rota de fuga remanescente e as saídas continuam atendendo a população presente durante o evento.",
      },
      {
        question: "A aprovação do layout pela administração do shopping já resolve?",
        answer:
          "Não. A aprovação interna do shopping organiza a relação comercial: área contratada, período, regras de montagem e responsabilidades entre as partes. A regularização perante o Corpo de Bombeiros é um trâmite separado, com documentação e prazo próprios. Cumprir só o primeiro deixa o evento sem cobertura legal na data.",
      },
      {
        question: "A fila do evento conta como obstrução da rota de fuga?",
        answer:
          "Conta, e costuma ser o ponto ignorado no layout. A fila ocupa faixa de circulação de forma contínua durante toda a operação do evento e, em ativação de sucesso, cresce além do previsto. O projeto precisa reservar e delimitar fisicamente o espaço da fila, para que ela não avance sobre a largura que serve ao abandono.",
      },
      {
        question: "Ativação pequena, de poucos metros quadrados, também precisa?",
        answer:
          "Depende de onde ela é montada e do que ela atrai. Um quiosque de poucos metros no meio de um átrio largo pode ser irrelevante para o fluxo; o mesmo quiosque em uma circulação estreita, ou uma ativação pequena que gera fila de dezenas de pessoas, altera as condições de abandono. O que define é o efeito sobre a rota e sobre a população, não a área do stand.",
      },
      {
        question: "Quanto tempo antes preciso iniciar o processo?",
        answer:
          "Com folga suficiente para protocolar, responder a eventual exigência e ainda ajustar layout antes de contratar a montagem. O erro caro é congelar cenografia e fechar contrato com o fornecedor de estrutura antes da análise técnica: se o projeto exigir recuo de stand ou realocação de fila, a alteração passa a ter custo de retrabalho.",
      },
    ],
    related: baseRelated,
    ctaOccupation: "evento em shopping",
  }),
  page({
    slug: "/ptotep-para-evento-em-igreja",
    kind: "evento",
    label: "PTOTEP para igreja",
    eyebrow: "Congressos, shows gospel e encontros religiosos",
    title: "PTOTEP para Evento em Igreja | Regularização de Evento Religioso",
    description:
      "PTOTEP para evento temporário em igreja, templo ou auditorio religioso. Analise de lotação, palco, fluxo, brigada, elétrica e saídas de emergência.",
    h1: "PTOTEP para Evento em Igreja",
    lead:
      "Conferencias, shows, encontros e congressos religiosos podem aumentar lotação e transformar o uso normal do templo. A segurança precisa acompanhar essa mudança.",
    heroImage: churchHero,
    imageAlt: "Igreja preparada para evento religioso temporário",
    focus:
      "O projeto avalia se o evento mantem as condições de abandono, controle de público, palco, equipamentos de som e áreas de apoio sem reduzir a segurança do templo.",
    contextTitle: "Cuidados em eventos religiosos",
    context: [
      "Eventos especiais recebem público visitante que não conhece as saídas e circulações da igreja.",
      "Palco, som, iluminação, transmissão e cenografia podem ocupar áreas críticas.",
      "Quando há alimentação, barracas, cozinha ou GLP, o risco muda e precisa ser tratado no projeto.",
    ],
    riskTitle: "Pontos sensíveis",
    risks: [
      "lotação sem controle em culto especial ou congresso",
      "palco temporário reduzindo corredor ou saída",
      "cabos, som e iluminação sem documento técnico",
      "crianças, idosos e público vulneravel sem planejamento de abandono",
      "cozinha temporária sem laudo ou responsabilidade técnica",
    ],
    process: [
      "Leitura técnica do local: verificamos o AVCB ou CLCB da igreja, a lotação aprovada, as saídas existentes e o uso atual do templo.",
      "Analise do evento: avaliamos público estimado, layout do palco, montagem de cadeiras, áreas de apoio, uso de alimentação, GLP, gerador e equipamentos de som e luz.",
      "Identificação de interferencias: cruzamos a montagem temporária com as rotas de fuga, sinalização, extintores e hidrantes existentes para identificar ajustes necessários.",
      "Elaboração do projeto técnico: desenhamos planta com layout do evento, indicação de saídas, rotas de abandono, áreas de concentração de público e posicionamento de estruturas temporarias.",
      "Organização da documentação: reunimos ART do engenheiro responsável, memorial descritivo, plantas do evento, laudos de fornecedores e documentos da edificação permanente.",
      "Protocolo e acompanhamento: entregamos o processo ao órgão competente e acompanhamos eventuais exigências até a liberação final do evento.",
    ],
    documents: [
      "AVCB ou CLCB vigente da igreja ou templo",
      "Planta baixa do local com indicação de saídas e circulações",
      "Layout do evento com posicionamento de palco, cadeiras, áreas de apoio e acessos",
      "ART ou RRT do engenheiro ou arquiteto responsável pelo projeto",
      "Memorial descritivo da ocupação temporária",
      "Laudo técnico de estruturas temporarias (palco, tendas, arquibancadas) com ART",
      "Documentação de instalação elétrica temporária com ART do eletricista",
      "Laudo de GLP ou gerador, quando aplicável",
      "Plano de brigada e controle de acesso para o evento",
    ],
    faqs: [
      {
        question: "Igreja com AVCB vigente precisa de PTOTEP para eventos especiais?",
        answer:
          "Depende do que o evento altera na condição aprovada. Se o congresso, show ou encontro aumenta significativamente a lotação habitual, instala palco temporário, usa gerador ou GLP, ou modifica as rotas de fuga com novos elementos, o PTOTEP pode ser exigido. A melhor forma de saber e solicitar uma análise técnica antes de definir layout e fornecedores.",
      },
      {
        question: "Qual o prazo para regularizar um evento em igreja?",
        answer:
          "O prazo varia conforme a complexidade do evento e a documentação disponível. Eventos simples com documentação completa podem ser encaminhados em poucos dias. Congressos com palco, gerador, GLP e grande público exigem mais tempo para organizar ARTs, plantas e memoriais. O ideal e iniciar a análise técnica com pelo menos 30 dias de antecedencia em relação a data do evento.",
      },
      {
        question: "Quem e responsável pela segurança do evento na igreja?",
        answer:
          "A responsabilidade e compartilhada entre a organização do evento, a diretoria ou lideranca da igreja e o engenheiro que assina o projeto técnico. O PTOTEP formaliza essa responsabilidade e documenta as medidas de segurança adotadas para a ocupação temporária.",
      },
      {
        question: "Show gospel ou congresso de multiplos dias exige PTOTEP diferente?",
        answer:
          "Cada data ou configuração diferente do evento deve ser avaliada. Se o congresso ocorre em vários dias com montagens distintas, o projeto técnico precisa cobrir todas as variações de layout, lotação e uso. Eventos recorrentes com a mesma configuração podem ser tratados com um projeto único, desde que nada mude entre as datas.",
      },
      {
        question: "O que acontece se realizar um evento em igreja sem PTOTEP?",
        answer:
          "Evento sem regularização adequada pode ser interditado pelo Corpo de Bombeiros ou órgão municipal competente. Além do risco de cancelamento, a lideranca da igreja pode responder civilmente em caso de acidente envolvendo o público. O PTOTEP protege o evento, o local e os responsáveis técnicos e administrativos.",
      },
    ],
    related: baseRelated,
    ctaOccupation: "evento em igreja",
  }),
  page({
    slug: "/ptotep-para-festival",
    kind: "evento",
    label: "PTOTEP para festival",
    eyebrow: "Festival indoor, gastronomico ou cultural",
    title: "PTOTEP para Festival | Regularização junto aos Bombeiros",
    description:
      "PTOTEP para festival em edificação permanente. Projeto para público, palco, food trucks, stands, elétrica, GLP, saídas e brigada.",
    h1: "PTOTEP para Festival Temporário",
    lead:
      "Festival concentra público, alimentação, musica, marcas, filas e estruturas temporarias. O projeto precisa amarrar todas essas camadas antes da montagem.",
    heroImage: showHero,
    imageAlt: "Festival com estrutura temporária e público",
    focus:
      "A regularização de festival cruza lotação, controle de acesso, áreas de alimentação, estruturas, palcos, elétrica, atendimento de emergência e rotas.",
    contextTitle: "Por que festival exige projeto robusto",
    context: [
      "Festivais costumam mudar durante a produção: novos patrocinadores, stands e áreas VIP surgem perto da data.",
      "Cada mudança de layout pode afetar rotas de fuga, largura de circulação e acesso da brigada.",
      "O controle de acesso e essencial quando a ocupação temporária fica delimitada por grades, bilheteria ou barreiras.",
    ],
    riskTitle: "Riscos que precisam ser resolvidos",
    risks: [
      "food área com GLP sem setorização e laudos",
      "palco e estruturas sem ART/RRT",
      "público sem rota clara para saída",
      "barreiras de patrocinador bloqueando fluxo",
      "gerador e cabos em área de circulação",
    ],
    process: [],
    documents: [],
    faqs: [],
    related: baseRelated,
    ctaOccupation: "festival temporário",
  }),
  page({
    slug: "/ptotep-para-food-park",
    kind: "evento",
    label: "PTOTEP para food park",
    eyebrow: "Food park, gastronomia e operação temporária",
    title: "PTOTEP para Food Park | AVCB para Evento Gastronomico",
    description:
      "PTOTEP para food park e evento gastronomico. Analise de GLP, elétrica, barracas, food trucks, fluxo, extintores, rotas e documentação.",
    h1: "PTOTEP para Food Park e Evento Gastronomico",
    lead:
      "Food park temporário combina público, cocção, GLP, energia, tendas, mesas, filas e food trucks. A regularização precisa tratar risco de incêndio e fluxo ao mesmo tempo.",
    heroImage: "/images/bg-restaurante.jpg",
    imageAlt: "Evento gastronomico temporário com público e operação de alimentos",
    focus:
      "A página atende quem procura AVCB para food park, feira gastronomica ou evento de alimentação, explicando quando o processo correto e PTOTEP.",
    contextTitle: "O que mais pesa em food park",
    context: [
      "Cilindros de GLP, fritadeiras, chapas, geradores e tendas alteram o risco da ocupação temporária.",
      "Mesas, filas e ilhas de atendimento podem ocupar área de escape se o layout nascer sem criterio.",
      "Food trucks e barracas precisam entrar no projeto com afastamentos, extintores e documentação técnica.",
    ],
    riskTitle: "Falhas comuns",
    risks: [
      "GLP sem laudo, afastamento ou setorização",
      "fritadeira sem extintor adequado",
      "tendas e lonas sem avaliação de material",
      "filas cruzando rota de fuga",
      "gerador sem isolamento e ART",
    ],
    process: [],
    documents: [],
    faqs: [],
    related: [
      { label: "Laudo de estanqueidade de gás", href: "/laudo-estanqueidade-gas-sao-paulo" },
      { label: "AVCB para restaurante", href: "/avcb-restaurante-sao-paulo" },
      { label: "PTOTEP", href: "/ptotep" },
      { label: "Projeto de incêndio", href: "/projetos-incendio" },
    ],
    ctaOccupation: "food park temporário",
  }),
  page({
    slug: "/ptotep-para-evento-esportivo",
    kind: "evento",
    label: "PTOTEP para evento esportivo",
    eyebrow: "Torneios, arenas e estruturas temporarias",
    title: "PTOTEP para Evento Esportivo | Regularização Bombeiros",
    description:
      "PTOTEP para evento esportivo em ginásio, clube, arena ou escola. Projeto para público, arquibancada, rotas, estruturas e atendimento de emergência.",
    h1: "PTOTEP para Evento Esportivo",
    lead:
      "Eventos esportivos mudam fluxo, criam arquibancadas temporarias, áreas de atleta, bilheteria, patrocinadores e concentração de público em horários de pico.",
    heroImage: sportsHero,
    imageAlt: "Evento esportivo com público e estrutura temporária",
    focus:
      "O projeto precisa dimensionar rotas, controlar público, proteger áreas de competição e garantir que estruturas temporarias tenham responsabilidade técnica.",
    contextTitle: "Onde o evento esportivo aperta",
    context: [
      "Arquibancadas, grades, tendas, pórticos e ativações de patrocinador mudam a circulação.",
      "Entrada e saída em massa exigem controle de acesso, orientação de público e rotas claras.",
      "A área de ambulancia, equipe medica e brigada precisa permanecer acessível durante todo o evento.",
    ],
    riskTitle: "Riscos recorrentes",
    risks: [
      "arquibancada temporária sem ART/RRT",
      "gradeamento bloqueando saída",
      "público em área não prevista",
      "ponto médico sem acesso livre",
      "instalações elétricas de placar, som ou transmissão sem documentação",
    ],
    process: [],
    documents: [],
    faqs: [],
    related: baseRelated,
    ctaOccupation: "evento esportivo",
  }),
  page({
    slug: "/ptotep-para-evento-universitario",
    kind: "evento",
    label: "PTOTEP para evento universitario",
    eyebrow: "Semanas academicas, shows e feiras em campus",
    title: "PTOTEP para Evento Universitario | Bombeiros e Segurança",
    description:
      "PTOTEP para evento universitario em campus, escola ou faculdade. Projeto para público, stands, palco, alimentação, rotas, brigada e documentação.",
    h1: "PTOTEP para Evento Universitario",
    lead:
      "Evento universitario mistura auditório, feira, show, praça de alimentação e público jovem em campus que normalmente tem uso educacional. Essa mudança precisa ser formalizada.",
    heroImage: "/images/hero-escola.webp",
    imageAlt: "Campus educacional preparado para evento temporário",
    focus:
      "O PTOTEP para universidade protege o uso temporário sem travar aulas, laboratórios e rotas de fuga do campus.",
    contextTitle: "Cuidados em campus e faculdades",
    context: [
      "O evento pode ocupar patio, quadra, auditorio, biblioteca, laboratórios ou estacionamento.",
      "A rotina academica continua, então o projeto precisa separar fluxo de alunos, visitantes, fornecedores e equipes.",
      "Quando há barracas, palco, som ou food trucks, documentos técnicos entram no processo.",
    ],
    riskTitle: "Pontos de risco",
    risks: [
      "mistura de público do evento com alunos em horário letivo",
      "uso de quadra ou patio sem dimensionar saídas",
      "food trucks e barracas sem documentos de GLP",
      "palco e som temporários sem responsabilidade técnica",
      "rotas do campus bloqueadas por fila ou patrocinador",
    ],
    process: [],
    documents: [],
    faqs: [],
    related: baseRelated,
    ctaOccupation: "evento universitario",
  }),
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

  page({
    slug: "/quanto-custa-ptotep",
    kind: "duvida",
    label: "Quanto custa PTOTEP",
    eyebrow: "Preço, escopo e variáveis",
    title: "Quanto Custa PTOTEP | Preço para Regularizar Evento",
    description:
      "Quanto custa PTOTEP? Entenda os fatores que alteram o preço: tipo de evento, cidade, público, montagem, ART, documentos e prazo.",
    h1: "Quanto custa PTOTEP?",
    lead:
      "O custo do PTOTEP depende menos do nome do evento e mais do risco criado pela ocupação temporária: público, layout, estruturas, elétrica, GLP, prazos e exigências do local.",
    heroImage: eventHero,
    imageAlt: "Orçamento técnico para PTOTEP de evento temporário",
    focus:
      "Uma feira simples em shopping tem custo diferente de festival com palco, food área, gerador e grande público. O diagnóstico técnico separa o que e projeto, laudo, ART, adequação e protocolo.",
    contextTitle: "Variáveis que mudam o valor",
    context: [
      "Quanto maior a interferencia no uso normal do imóvel, maior tende a ser o trabalho técnico.",
      "Eventos com GLP, geradores, palco, estruturas, arquibancadas, stands ou alta lotação exigem mais documentos.",
      "Prazos curtos aumentam risco de retrabalho e exigem decisão rápida sobre layout, fornecedores e responsabilidade técnica.",
    ],
    riskTitle: "O barato que costuma sair caro",
    risks: [
      "orcar sem ver o layout final do evento",
      "ignorar documentos de fornecedores",
      "protocolo incompleto perto da data",
      "ausencia de ART para estrutura ou elétrica",
      "mudar a montagem depois da análise técnica",
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Existe preço fixo para PTOTEP?",
        answer:
          "Não e recomendavel trabalhar com preço fixo sem diagnóstico. O escopo muda conforme risco, tamanho, público, documentos, cidade e tipo de montagem.",
      },
    ],
    related: baseRelated,
    ctaOccupation: "orçamento de PTOTEP",
  }),
  page({
    slug: "/prazo-aprovacao-bombeiros-evento",
    kind: "duvida",
    label: "Prazo aprovação bombeiros evento",
    eyebrow: "Cronograma e protocolo",
    title: "Prazo de Aprovação dos Bombeiros para Evento | PTOTEP",
    description:
      "Prazo de aprovação dos Bombeiros para evento temporário: entenda planejamento, documentos, protocolo PTOTEP, montagem e vistoria.",
    h1: "Prazo de aprovação dos Bombeiros para evento",
    lead:
      "O prazo depende da qualidade do projeto, antecedencia, documentos de fornecedores, tipo de evento e disponibilidade para corrigir exigências antes da montagem.",
    heroImage: eventHero,
    imageAlt: "Cronograma de aprovação dos Bombeiros para evento",
    focus:
      "Evento com documentação organizada anda melhor. Evento que muda layout, fornecedor ou lotação perto da data cria risco de exigência e atraso.",
    contextTitle: "Como pensar o cronograma",
    context: [
      "A primeira etapa e travar o layout: entradas, saídas, palco, stands, área de alimentação, filas, banheiros e apoio.",
      "Depois entram documentos de cada fornecedor, como elétrica, estruturas, gerador, GLP e montagem.",
      "Com isso, o projeto pode ser protocolado com muito menos risco de volta por informação incompleta.",
    ],
    riskTitle: "O que atrasa a aprovação",
    risks: [
      "layout mudando a cada revisão comercial",
      "fornecedor sem ART/RRT ou memorial",
      "licença do imóvel permanente irregular ou desatualizada",
      "informação de lotação sem criterio técnico",
      "protocolo feito perto demais da data do evento",
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Da para aprovar PTOTEP de última hora?",
        answer:
          "Depende do risco e da documentação disponível, mas última hora aumenta muito a chance de exigência, retrabalho e atraso de montagem.",
      },
    ],
    related: baseRelated,
    ctaOccupation: "prazo de aprovação para evento",
  }),
  page({
    slug: "/documentos-necessarios-ptotep",
    kind: "duvida",
    label: "Documentos necessários PTOTEP",
    eyebrow: "Checklist documental",
    title: "Documentos Necessários para PTOTEP | Checklist do Evento",
    description:
      "Documentos necessários para PTOTEP: licença da edificação, layout, ART/RRT, memorial, documentos de palco, elétrica, GLP, gerador e brigada.",
    h1: "Documentos necessários para PTOTEP",
    lead:
      "Documento faltando costuma ser a maior causa de atraso em evento temporário. O checklist precisa nascer do layout e dos fornecedores reais da montagem.",
    heroImage: eventHero,
    imageAlt: "Checklist de documentos para PTOTEP",
    focus:
      "A lista muda conforme evento, mas sempre precisa conectar ocupação permanente, montagem temporária, responsabilidade técnica e controle de público.",
    contextTitle: "Como organizar os documentos",
    context: [
      "Primeiro vem o imóvel: licença existente, área, uso aprovado e condições de segurança.",
      "Depois vem o evento: layout, lotação, período, horários, montagem, desmontagem e controle de acesso.",
      "Por fim entram fornecedores: palco, som, luz, elétrica, gerador, tendas, stands, GLP, food trucks e estruturas.",
    ],
    riskTitle: "Documentos que mais geram pendencia",
    risks: [
      "ART generica sem escopo claro",
      "layout sem cotas ou sem saídas de emergência",
      "memorial sem lotação e controle de acesso",
      "fornecedor de estrutura sem documento técnico",
      "GLP ou gerador sem laudo aplicável",
    ],
    deepDive: {
      title: "A lista sai do layout, não de um modelo pronto",
      intro:
        "Não existe um checklist único de PTOTEP que sirva para qualquer evento, e é por isso que listas genéricas baixadas na internet costumam faltar exatamente o documento que trava o processo. A relação correta se monta em três camadas encaixadas: o que comprova a edificação permanente, o que descreve a ocupação temporária que o evento cria, e o que responsabiliza tecnicamente cada fornecedor que montar alguma coisa no local. Faltando qualquer uma das três, o protocolo entra incompleto.",
      details: [
        "Camada 1 — a edificação permanente. AVCB ou CLCB vigente do local, planta do imóvel com as saídas de emergência e a área efetivamente cedida ao evento. É a base de comparação: sem saber o que já foi aprovado, não há como demonstrar que a montagem temporária preserva as condições existentes. Evento em espaço sem licença própria vigente é um problema anterior ao PTOTEP e precisa ser resolvido primeiro.",
        "Camada 2 — a ocupação temporária. Layout cotado com posição de cada estrutura, sentido de fluxo, acessos, saídas mantidas e áreas bloqueadas; memorial com público estimado, método de controle de acesso, horários de montagem, operação e desmontagem. O layout sem cotas é a pendência número um: sem dimensão, não se verifica largura de rota nem distância máxima a percorrer, e o processo volta antes mesmo da análise de mérito.",
        "Camada 3 — os fornecedores. Cada empresa que monta estrutura, energiza um circuito ou instala gás precisa entregar sua própria responsabilidade técnica, com escopo delimitado. ART de palco, tenda ou arquibancada acompanhada de memorial de cálculo; ART da instalação elétrica temporária; laudo de aterramento do gerador; documentação de instalação de GLP e teste de estanqueidade quando houver cocção. ART genérica de 'montagem de evento', sem escopo, é recusada.",
        "O que fecha o conjunto. Certificado de tratamento antichama de tecidos, carpetes e materiais de cenografia; relação nominal da equipe de brigada com os respectivos certificados de formação; e plano de emergência do evento com procedimento de abandono e ponto de encontro. São itens de baixo custo e prazo curto, mas que dependem de terceiros — e por isso são os que mais atrasam quem começa a reunir documentação em cima da data.",
      ],
    },
    process: [
      "levantar a licença vigente da edificação permanente e a planta com as saídas de emergência da área cedida",
      "fechar o layout cotado do evento antes de contratar estrutura, para que a lista de documentos nasça do desenho real",
      "identificar cada fornecedor que executará montagem, instalação elétrica, gás ou estrutura e solicitar a ART correspondente",
      "reunir memorial de segurança com lotação, controle de acesso, horários e plano de abandono",
      "conferir validade e escopo de cada documento antes do protocolo, em vez de descobrir a lacuna na análise",
      "protocolar, acompanhar e responder a exigências com folga em relação à data da montagem",
    ],
    documents: [
      "AVCB ou CLCB vigente da edificação permanente, com planta das saídas de emergência",
      "layout do evento cotado, com estruturas, fluxo de público, acessos, saídas mantidas e áreas bloqueadas",
      "memorial de segurança com lotação, controle de acesso e horários de montagem, operação e desmontagem",
      "ART de estrutura temporária (palco, tenda, arquibancada, stand) com memorial de cálculo do responsável",
      "ART da instalação elétrica temporária, com carga, ponto de alimentação e proteções",
      "laudo de aterramento e documentação do gerador, quando houver",
      "documentação da instalação de GLP e teste de estanqueidade, quando houver cocção ou aquecimento a gás",
      "certificado de tratamento antichama de tecidos, carpetes e materiais de cenografia",
      "relação nominal da brigada do evento, com certificados de formação",
      "plano de emergência com procedimento de abandono, sinalização temporária e ponto de encontro",
    ],
    faqs: [
      {
        question: "Existe uma lista fixa de documentos para PTOTEP?",
        answer:
          "Não. O núcleo é sempre o mesmo — licença da edificação, layout, memorial e responsabilidade técnica —, mas o restante depende do que será montado. Evento sem estrutura, sem gás e sem gerador tem lista curta; o mesmo evento com palco, cozinha e energia própria acrescenta uma ART e um laudo para cada frente. Por isso a lista se define depois do layout, não antes.",
      },
      {
        question: "Por que uma ART pode ser recusada?",
        answer:
          "O motivo mais comum é escopo genérico. Uma ART de 'montagem de evento', sem discriminar o que o profissional está assumindo, não permite verificar se a estrutura, a instalação elétrica e o sistema de gás têm responsável definido. Cada frente precisa de ART com objeto delimitado, e a estrutura temporária precisa vir acompanhada do memorial de cálculo correspondente.",
      },
      {
        question: "O que é o layout cotado e por que ele é tão cobrado?",
        answer:
          "É a planta do evento com as dimensões reais: posição e tamanho de cada estrutura, largura livre de circulação remanescente, posição das saídas mantidas e das áreas bloqueadas. Sem cotas não se verifica largura de rota de fuga nem distância máxima a percorrer até a saída, que são os dois parâmetros centrais da análise. Layout sem cota volta antes da análise técnica de mérito.",
      },
      {
        question: "Preciso de documento de tratamento antichama da cenografia?",
        answer:
          "Quando houver tecido, carpete, forração ou material de acabamento na montagem, sim. Esses materiais adicionam carga de incêndio em área ocupada por público, e o certificado de tratamento do fornecedor é o que comprova o desempenho. É documento barato e rápido, mas depende de terceiro — motivo pelo qual costuma ser o último a chegar.",
      },
      {
        question: "O que fazer se o espaço do evento não tem AVCB vigente?",
        answer:
          "Isso precisa ser tratado antes do PTOTEP. A ocupação temporária se apoia na regularidade da edificação permanente; se o imóvel está com licença vencida ou nunca teve, não há base sobre a qual demonstrar que o evento preserva as condições de segurança. Nesse cenário, a regularização do imóvel entra no cronograma antes da data do evento, e não em paralelo.",
      },
    ],
    related: baseRelated,
    ctaOccupation: "documentação de PTOTEP",
  }),
  page({
    slug: "/diferenca-avcb-ptotep",
    kind: "duvida",
    label: "Diferença AVCB e PTOTEP",
    eyebrow: "AVCB, CLCB e evento temporário",
    title: "Diferença entre AVCB e PTOTEP | Evento Temporário",
    description:
      "Entenda a diferença entre AVCB e PTOTEP. O AVCB licencia a edificação permanente; o PTOTEP trata a ocupação temporária do evento.",
    h1: "Diferença entre AVCB e PTOTEP",
    lead:
      "AVCB e PTOTEP não são a mesma coisa. O AVCB comprova a segurança da edificação no uso aprovado. O PTOTEP avalia o evento temporário que altera esse uso.",
    heroImage: "/images/page-avcb.webp",
    imageAlt: "Comparativo entre AVCB e PTOTEP para evento",
    focus:
      "Essa diferença e essencial para shopping, hotel, igreja, universidade, centro de convenções e qualquer local que já tenha AVCB, mas receba montagem temporária.",
    contextTitle: "Como explicar para o organizador",
    context: [
      "O AVCB da edificação e a base. Sem ele, o evento já comeca com risco documental.",
      "O PTOTEP olha o que o evento muda: público, layout, estrutura, rota, energia, GLP, palco, stands e acesso.",
      "Um evento pode acontecer em local regularizado e ainda assim precisar de regularização própria.",
    ],
    riskTitle: "Erros de entendimento",
    risks: [
      "achar que o AVCB do local cobre qualquer evento",
      "montar palco ou stand sem avaliar rota de fuga",
      "usar uma declaração generica no lugar de projeto",
      "não separar responsabilidade do local e do organizador",
      "ignorar aumento de lotação temporária",
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Se o local tem AVCB vigente, preciso de PTOTEP?",
        answer:
          "Pode precisar. Se o evento altera lotação, layout, uso, rotas, estruturas ou medidas de segurança, a ocupação temporária deve ser avaliada separadamente.",
      },
    ],
    related: baseRelated,
    ctaOccupation: "diferença entre AVCB e PTOTEP",
  }),
  page({
    slug: "/quando-precisa-ocupacao-temporaria",
    kind: "duvida",
    label: "Quando precisa ocupação temporária",
    eyebrow: "Enquadramento do evento",
    title: "Quando Precisa de Ocupação Temporária | PTOTEP",
    description:
      "Quando precisa de ocupação temporária no Corpo de Bombeiros? Veja sinais de que feira, show, evento corporativo ou ativação precisa de PTOTEP.",
    h1: "Quando precisa de ocupação temporária?",
    lead:
      "A ocupação temporária precisa ser analisada quando o evento muda a forma de uso do local, cria público adicional, monta estruturas ou interfere nas medidas de segurança existentes.",
    heroImage: eventHero,
    imageAlt: "Analise de quando evento precisa de ocupação temporária",
    focus:
      "O enquadramento correto evita dois extremos: protocolar algo desnecessario ou abrir evento sem a regularização exigida.",
    contextTitle: "Sinais de que o evento precisa de análise",
    context: [
      "Existe controle de acesso, ingresso, lista, credenciamento ou barreira física para público.",
      "Há stand, palco, tenda, arquibancada, food área, gerador, GLP, cenografia ou alteração de layout.",
      "O evento usa áreas que normalmente não recebem público ou muda a ocupação original do imóvel.",
    ],
    riskTitle: "Quando acender o alerta",
    risks: [
      "evento maior que a rotina normal da edificação",
      "fechamento de corredor, porta ou rota de fuga",
      "público em área externa conectada ao imóvel permanente",
      "uso de equipamentos temporários de energia, cozinha ou palco",
      "exigência de shopping, seguradora, prefeitura, contratante ou Bombeiros",
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Evento em área aberta também entra nessa logica?",
        answer:
          "Pode entrar, mas o enquadramento muda conforme isolamento, acesso a edificação permanente, estruturas e controle de público. A análise técnica define se e PTOTEP, outro procedimento temporário ou orientação documental.",
      },
    ],
    related: baseRelated,
    ctaOccupation: "ocupação temporária para evento",
  }),
];

export const ptotepPagesBySlug: Record<string, PtotepPage> = Object.fromEntries(
  ptotepPages.map((item) => [item.slug, item])
);

export const ptotepMapLinks = ptotepPages.map((item) => ({
  label: item.label,
  href: item.slug,
}));
