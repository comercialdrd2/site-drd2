export type PtotepPageKind = "principal" | "evento" | "cidade" | "duvida";

export type PtotepFaq = {
  question: string;
  answer: string;
};

export type PtotepRelatedLink = {
  label: string;
  href: string;
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
};

const baseDocuments = [
  "licenca vigente da edificacao permanente, quando aplicavel ao caso",
  "layout do evento com fluxo de publico, acessos, saidas e areas bloqueadas",
  "ART ou RRT do responsavel tecnico pelas instalacoes temporarias",
  "memorial de seguranca com lotacao, horarios, montagem e desmontagem",
  "documentos de estruturas, eletrica, geradores, GLP, stands, palco ou sonorizacao quando houver",
  "plano de atendimento, brigada, controle de acesso e sinalizacao temporaria",
];

const baseProcess = [
  "analise tecnica da edificacao permanente, da licenca existente e da ocupacao temporaria pretendida",
  "levantamento de lotacao, rotas de fuga, interferencias no AVCB existente e pontos criticos do evento",
  "desenvolvimento do projeto, memoriais, ARTs/RRTs e documentos obrigatorios para protocolo",
  "protocolo e acompanhamento no sistema do Corpo de Bombeiros, com resposta tecnica a exigencias",
  "vistoria orientada, checklist de montagem e suporte ate a liberacao do evento",
];

const baseRelated: PtotepRelatedLink[] = [
  { label: "Projeto de incendio", href: "/projetos-incendio" },
  { label: "AVCB em Sao Paulo", href: "/avcb-sao-paulo" },
  { label: "Treinamento de brigada", href: "/treinamento-brigada" },
  { label: "Laudo de estanqueidade de gas", href: "/laudo-estanqueidade-gas-sao-paulo" },
  { label: "PTOTEP para evento universitario", href: "/ptotep-para-evento-universitario" },
  { label: "PTOTEP em Sorocaba", href: "/ptotep-sorocaba" },
];

const baseFaqs: PtotepFaq[] = [
  {
    question: "PTOTEP substitui o AVCB da edificacao?",
    answer:
      "Nao. O AVCB ou a licenca da edificacao permanente trata o uso normal do imovel. O PTOTEP trata a ocupacao temporaria criada pelo evento, feira, show, exposicao ou montagem especial.",
  },
  {
    question: "Evento pequeno tambem pode precisar de regularizacao?",
    answer:
      "Pode. A necessidade depende da lotacao, controle de acesso, tipo de montagem, uso de estruturas temporarias, interferencia nas rotas de fuga e exigencias do local. A analise tecnica evita enquadramento errado.",
  },
  {
    question: "Quanto tempo antes do evento devo iniciar o processo?",
    answer:
      "O ideal e iniciar antes da montagem e com folga para protocolo, eventuais ajustes e vistoria. Eventos com palco, stands, GLP, shopping ou grande publico precisam de planejamento antecipado.",
  },
];

function page(input: PtotepPage): PtotepPage {
  return {
    ...input,
    process: input.process.length ? input.process : baseProcess,
    documents: input.documents.length ? input.documents : baseDocuments,
    faqs: [...input.faqs, ...baseFaqs],
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
      "A ocupacao temporaria muda a logica de uso do imovel: aumenta publico, cria stands, fecha corredores, instala palco, usa gerador, muda rota de fuga ou concentra pessoas em areas que nao foram pensadas para aquele evento.",
      "O ponto critico e cruzar a licenca existente da edificacao com a atividade temporaria. Um evento dentro de local regularizado ainda pode exigir projeto proprio se alterar lotacao, layout ou medidas de seguranca.",
      "A DRD2 conduz a leitura tecnica, organiza documentos, emite ART quando aplicavel e acompanha o protocolo para reduzir risco de exigencia na vespera do evento.",
    ],
    riskTitle: "Riscos de deixar para a semana do evento",
    risks: [
      "montagem aprovada pelo shopping ou contratante, mas recusada na leitura tecnica de seguranca",
      "bloqueio de rota de fuga por stand, palco, fila, gradil ou area VIP",
      "lotacao sem controle de acesso proprio",
      "uso de eletrica, GLP ou gerador sem documentos tecnicos",
      "interdicao, atraso de abertura ou cancelamento por falta de regularizacao",
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "O que significa PTOTEP?",
        answer:
          "PTOTEP significa Projeto Tecnico de Ocupacao Temporaria em Edificacao Permanente. E usado para eventos temporarios realizados dentro ou vinculados a uma edificacao existente.",
      },
    ],
    related: [
      { label: "AVCB para feira", href: "/avcb-para-feira" },
      { label: "AVCB para show", href: "/avcb-para-show" },
      { label: "Quanto custa PTOTEP", href: "/quanto-custa-ptotep" },
      { label: "Documentos necessarios PTOTEP", href: "/documentos-necessarios-ptotep" },
    ],
    ctaOccupation: "PTOTEP para evento temporario",
  }),
  page({
    slug: "/avcb-para-feira",
    kind: "evento",
    label: "AVCB para feira",
    eyebrow: "Feiras, stands e exposicoes comerciais",
    title: "AVCB para Feira | PTOTEP para Stands e Eventos Temporarios",
    description:
      "AVCB para feira: entenda quando o correto e PTOTEP. Projeto para stands, rotas de fuga, eletrica, lotacao e protocolo junto ao Corpo de Bombeiros.",
    h1: "AVCB para Feira: quando o correto e PTOTEP",
    lead:
      "Feiras criam corredores temporarios, stands, deposito, carga eletrica, publico flutuante e pontos de atendimento. O projeto precisa provar que essa montagem nao compromete a seguranca do local.",
    heroImage: eventHero,
    imageAlt: "Feira com stands temporarios para regularizacao PTOTEP",
    focus:
      "A busca por AVCB para feira normalmente esconde a necessidade de um projeto temporario. O foco e layout, acesso de publico, materiais, eletrica dos stands e compatibilidade com a licenca do pavilhao ou shopping.",
    contextTitle: "O que costuma travar feira",
    context: [
      "Stands que invadem rota de fuga ou reduzem largura de corredores criam risco direto de exigencia.",
      "Pontos de energia, decoracao, tecidos, paineis, cozinha demonstrativa e material promocional precisam ser avaliados antes da montagem.",
      "A organizadora precisa alinhar o projeto com regras do local, bombeiros, seguradora e contrato com expositores.",
    ],
    riskTitle: "Pontos de atencao em feiras",
    risks: [
      "corredor de circulacao menor que o necessario para a lotacao",
      "stands com carga eletrica sem ART ou documento tecnico",
      "deposito improvisado em area de escape",
      "controle de acesso incompatavel com a capacidade do local",
      "montagem diferente do layout protocolado",
    ],
    process: [],
    documents: [],
    faqs: [],
    related: baseRelated,
    ctaOccupation: "feira temporaria",
  }),
  page({
    slug: "/avcb-para-show",
    kind: "evento",
    label: "AVCB para show",
    eyebrow: "Shows, palcos e publico em pe",
    title: "AVCB para Show | PTOTEP para Evento Musical",
    description:
      "AVCB para show e evento musical: projeto PTOTEP para palco, publico, saídas, brigada, eletrica, gerador e aprovacao junto aos Bombeiros.",
    h1: "AVCB para Show: regularizacao tecnica do evento",
    lead:
      "Show temporario muda lotacao, fluxo de entrada, rotas de fuga, potencia eletrica, som, palco e isolamento de publico. A regularizacao precisa nascer junto com o mapa do evento.",
    heroImage: showHero,
    imageAlt: "Ambiente de show com publico e estrutura temporaria",
    focus:
      "Para show em edificacao permanente, o PTOTEP organiza palco, house mix, bares, camarins, filas, saidas, brigada e equipamentos temporarios sem comprometer a licenca original do local.",
    contextTitle: "Por que show e sensivel",
    context: [
      "A maior parte dos problemas aparece na relacao entre publico em pe, pouca iluminacao, sinalizacao temporaria e rotas obstruidas.",
      "Geradores, cabos, grids, cenografia, efeitos especiais e areas VIP precisam conversar com o projeto de seguranca.",
      "Quando a casa ja tem AVCB, o evento nao pode reduzir as condicoes de abandono previstas para o uso aprovado.",
    ],
    riskTitle: "Falhas comuns em shows",
    risks: [
      "lotacao superior ao dimensionamento das saidas",
      "palco ou house mix bloqueando rota de fuga",
      "cabos e equipamentos atravessando areas de circulacao",
      "sinalizacao de emergencia escondida por cenografia",
      "brigada insuficiente para horario e perfil do publico",
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
    label: "AVCB para exposicao",
    eyebrow: "Exposicoes, galerias e mostras",
    title: "AVCB para Exposicao | PTOTEP para Mostras e Galerias",
    description:
      "Regularizacao de exposicao temporaria com PTOTEP. Analise de fluxo, stands, cenografia, iluminacao, rotas de fuga e documentos para Bombeiros.",
    h1: "AVCB para Exposicao Temporaria",
    lead:
      "Exposicoes parecem simples, mas paineis, divisorias, fluxo em salas, obras, iluminacao cenografica e filas podem alterar a seguranca prevista para o local.",
    heroImage: eventHero,
    imageAlt: "Exposicao temporaria com paineis e circulacao de publico",
    focus:
      "O projeto de exposicao precisa proteger circulacao, saidas, materiais de acabamento, iluminacao, instalacoes temporarias e compatibilidade com a ocupacao permanente.",
    contextTitle: "O que avaliar em exposicoes",
    context: [
      "Paineis e divisorias podem criar labirintos ou esconder placas e luminarias de emergencia.",
      "Eventos de abertura concentram publico acima da rotina normal do local.",
      "Instalacoes eletricas temporarias para luz e audiovisual precisam de documentacao e execucao segura.",
    ],
    riskTitle: "Riscos frequentes",
    risks: [
      "rota de fuga transformada em area expositiva",
      "controle de acesso inexistente em vernissage ou abertura",
      "carga eletrica temporaria sem responsabilidade tecnica",
      "material cenografico sem avaliacao de reacao ao fogo",
      "sinalizacao do local encoberta pela comunicacao visual",
    ],
    process: [],
    documents: [],
    faqs: [],
    related: baseRelated,
    ctaOccupation: "exposicao temporaria",
  }),
  page({
    slug: "/avcb-para-evento-corporativo",
    kind: "evento",
    label: "AVCB para evento corporativo",
    eyebrow: "Congressos, convencoes e treinamentos",
    title: "AVCB para Evento Corporativo | PTOTEP para Convencoes",
    description:
      "PTOTEP para evento corporativo em hotel, centro de convencoes, auditório ou empresa. Regularizacao de publico, palco, stands, eletrica e rotas.",
    h1: "AVCB para Evento Corporativo e Convencao",
    lead:
      "Evento corporativo em hotel, predio comercial ou centro de convencoes costuma juntar palco, credenciamento, coffee break, stands, audiovisual e grande fluxo em horarios concentrados.",
    heroImage: "/images/page-servicos.webp",
    imageAlt: "Evento corporativo com montagem temporaria",
    focus:
      "A regularizacao deve proteger entrada, credenciamento, auditorios, salas paralelas, areas de coffee, expositores e uso temporario de equipamentos.",
    contextTitle: "Onde o corporativo reprova",
    context: [
      "O contratante costuma assumir que o AVCB do hotel ou centro de eventos cobre tudo, mas a montagem pode alterar a condicao aprovada.",
      "Credenciamento, filas e buffet podem bloquear portas e corredores se nao forem posicionados com criterio tecnico.",
      "Audiovisual, paineis de LED e cenografia elevam a demanda eletrica e exigem responsabilidade tecnica.",
    ],
    riskTitle: "Itens criticos",
    risks: [
      "fila de credenciamento em frente a saida",
      "sala com lotacao acima do permitido",
      "palco temporario sem ART ou memorial",
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
    eyebrow: "Atrios, malls e ativacoes de marca",
    title: "AVCB para Evento em Shopping | PTOTEP para Ativacao e Feira",
    description:
      "Regularizacao de evento em shopping com PTOTEP. Analise de mall, atrio, stands, filas, eletrica, rotas de fuga e compatibilidade com AVCB do shopping.",
    h1: "AVCB para Evento em Shopping",
    lead:
      "Ativacao em shopping parece simples, mas qualquer stand, fila, palco, exposicao de produto ou area promocional interfere no mall, nas rotas e na operacao do empreendimento.",
    heroImage: shoppingHero,
    imageAlt: "Shopping com evento temporario em area comum",
    focus:
      "O PTOTEP em shopping precisa preservar o AVCB do empreendimento, as rotas principais, as lojas vizinhas, o controle de publico e a seguranca da montagem.",
    contextTitle: "O que o shopping costuma exigir",
    context: [
      "Layout aprovado pela administracao, ARTs, memorial de montagem, documentos de eletrica e indicacao clara de area ocupada.",
      "Nao basta caber no mall: a montagem precisa preservar fluxo, hidrantes, extintores, botoeiras, placas e acesso da brigada.",
      "Eventos em atrio ou praca central podem exigir controle de acesso proprio quando atraem publico acima da rotina do shopping.",
    ],
    riskTitle: "Riscos em shopping",
    risks: [
      "stand bloqueando hidrante, extintor ou rota de fuga",
      "fila ocupando circulacao do mall",
      "carga eletrica temporaria sem compatibilizacao",
      "cenografia escondendo sinalizacao de emergencia",
      "evento com publico maior que a area comporta",
    ],
    process: [],
    documents: [],
    faqs: [],
    related: baseRelated,
    ctaOccupation: "evento em shopping",
  }),
  page({
    slug: "/ptotep-para-evento-em-igreja",
    kind: "evento",
    label: "PTOTEP para igreja",
    eyebrow: "Congressos, shows gospel e encontros religiosos",
    title: "PTOTEP para Evento em Igreja | Regularizacao de Evento Religioso",
    description:
      "PTOTEP para evento temporario em igreja, templo ou auditorio religioso. Analise de lotacao, palco, fluxo, brigada, eletrica e saídas de emergencia.",
    h1: "PTOTEP para Evento em Igreja",
    lead:
      "Conferencias, shows, encontros e congressos religiosos podem aumentar lotacao e transformar o uso normal do templo. A seguranca precisa acompanhar essa mudanca.",
    heroImage: churchHero,
    imageAlt: "Igreja preparada para evento religioso temporario",
    focus:
      "O projeto avalia se o evento mantem as condicoes de abandono, controle de publico, palco, equipamentos de som e areas de apoio sem reduzir a seguranca do templo.",
    contextTitle: "Cuidados em eventos religiosos",
    context: [
      "Eventos especiais recebem publico visitante que nao conhece as saidas e circulacoes da igreja.",
      "Palco, som, iluminacao, transmissao e cenografia podem ocupar areas criticas.",
      "Quando ha alimentacao, barracas, cozinha ou GLP, o risco muda e precisa ser tratado no projeto.",
    ],
    riskTitle: "Pontos sensiveis",
    risks: [
      "lotacao sem controle em culto especial ou congresso",
      "palco temporario reduzindo corredor ou saida",
      "cabos, som e iluminacao sem documento tecnico",
      "criancas, idosos e publico vulneravel sem planejamento de abandono",
      "cozinha temporaria sem laudo ou responsabilidade tecnica",
    ],
    process: [
      "Leitura tecnica do local: verificamos o AVCB ou CLCB da igreja, a lotacao aprovada, as saidas existentes e o uso atual do templo.",
      "Analise do evento: avaliamos publico estimado, layout do palco, montagem de cadeiras, areas de apoio, uso de alimentacao, GLP, gerador e equipamentos de som e luz.",
      "Identificacao de interferencias: cruzamos a montagem temporaria com as rotas de fuga, sinalizacao, extintores e hidrantes existentes para identificar ajustes necessarios.",
      "Elaboracao do projeto tecnico: desenhamos planta com layout do evento, indicacao de saidas, rotas de abandono, areas de concentracao de publico e posicionamento de estruturas temporarias.",
      "Organizacao da documentacao: reunimos ART do engenheiro responsavel, memorial descritivo, plantas do evento, laudos de fornecedores e documentos da edificacao permanente.",
      "Protocolo e acompanhamento: entregamos o processo ao orgao competente e acompanhamos eventuais exigencias ate a liberacao final do evento.",
    ],
    documents: [
      "AVCB ou CLCB vigente da igreja ou templo",
      "Planta baixa do local com indicacao de saidas e circulacoes",
      "Layout do evento com posicionamento de palco, cadeiras, areas de apoio e acessos",
      "ART ou RRT do engenheiro ou arquiteto responsavel pelo projeto",
      "Memorial descritivo da ocupacao temporaria",
      "Laudo tecnico de estruturas temporarias (palco, tendas, arquibancadas) com ART",
      "Documentacao de instalacao eletrica temporaria com ART do eletricista",
      "Laudo de GLP ou gerador, quando aplicavel",
      "Plano de brigada e controle de acesso para o evento",
    ],
    faqs: [
      {
        question: "Igreja com AVCB vigente precisa de PTOTEP para eventos especiais?",
        answer:
          "Depende do que o evento altera na condicao aprovada. Se o congresso, show ou encontro aumenta significativamente a lotacao habitual, instala palco temporario, usa gerador ou GLP, ou modifica as rotas de fuga com novos elementos, o PTOTEP pode ser exigido. A melhor forma de saber e solicitar uma analise tecnica antes de definir layout e fornecedores.",
      },
      {
        question: "Qual o prazo para regularizar um evento em igreja?",
        answer:
          "O prazo varia conforme a complexidade do evento e a documentacao disponivel. Eventos simples com documentacao completa podem ser encaminhados em poucos dias. Congressos com palco, gerador, GLP e grande publico exigem mais tempo para organizar ARTs, plantas e memoriais. O ideal e iniciar a analise tecnica com pelo menos 30 dias de antecedencia em relacao a data do evento.",
      },
      {
        question: "Quem e responsavel pela seguranca do evento na igreja?",
        answer:
          "A responsabilidade e compartilhada entre a organizacao do evento, a diretoria ou lideranca da igreja e o engenheiro que assina o projeto tecnico. O PTOTEP formaliza essa responsabilidade e documenta as medidas de seguranca adotadas para a ocupacao temporaria.",
      },
      {
        question: "Show gospel ou congresso de multiplos dias exige PTOTEP diferente?",
        answer:
          "Cada data ou configuracao diferente do evento deve ser avaliada. Se o congresso ocorre em varios dias com montagens distintas, o projeto tecnico precisa cobrir todas as variacoes de layout, lotacao e uso. Eventos recorrentes com a mesma configuracao podem ser tratados com um projeto unico, desde que nada mude entre as datas.",
      },
      {
        question: "O que acontece se realizar um evento em igreja sem PTOTEP?",
        answer:
          "Evento sem regularizacao adequada pode ser interditado pelo Corpo de Bombeiros ou orgao municipal competente. Alem do risco de cancelamento, a lideranca da igreja pode responder civilmente em caso de acidente envolvendo o publico. O PTOTEP protege o evento, o local e os responsaveis tecnicos e administrativos.",
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
    title: "PTOTEP para Festival | Regularizacao junto aos Bombeiros",
    description:
      "PTOTEP para festival em edificacao permanente. Projeto para publico, palco, food trucks, stands, eletrica, GLP, saídas e brigada.",
    h1: "PTOTEP para Festival Temporario",
    lead:
      "Festival concentra publico, alimentacao, musica, marcas, filas e estruturas temporarias. O projeto precisa amarrar todas essas camadas antes da montagem.",
    heroImage: showHero,
    imageAlt: "Festival com estrutura temporaria e publico",
    focus:
      "A regularizacao de festival cruza lotacao, controle de acesso, areas de alimentacao, estruturas, palcos, eletrica, atendimento de emergencia e rotas.",
    contextTitle: "Por que festival exige projeto robusto",
    context: [
      "Festivais costumam mudar durante a producao: novos patrocinadores, stands e areas VIP surgem perto da data.",
      "Cada mudanca de layout pode afetar rotas de fuga, largura de circulacao e acesso da brigada.",
      "O controle de acesso e essencial quando a ocupacao temporaria fica delimitada por grades, bilheteria ou barreiras.",
    ],
    riskTitle: "Riscos que precisam ser resolvidos",
    risks: [
      "food area com GLP sem setorizacao e laudos",
      "palco e estruturas sem ART/RRT",
      "publico sem rota clara para saida",
      "barreiras de patrocinador bloqueando fluxo",
      "gerador e cabos em area de circulacao",
    ],
    process: [],
    documents: [],
    faqs: [],
    related: baseRelated,
    ctaOccupation: "festival temporario",
  }),
  page({
    slug: "/ptotep-para-food-park",
    kind: "evento",
    label: "PTOTEP para food park",
    eyebrow: "Food park, gastronomia e operacao temporaria",
    title: "PTOTEP para Food Park | AVCB para Evento Gastronomico",
    description:
      "PTOTEP para food park e evento gastronomico. Analise de GLP, eletrica, barracas, food trucks, fluxo, extintores, rotas e documentacao.",
    h1: "PTOTEP para Food Park e Evento Gastronomico",
    lead:
      "Food park temporario combina publico, cocção, GLP, energia, tendas, mesas, filas e food trucks. A regularizacao precisa tratar risco de incendio e fluxo ao mesmo tempo.",
    heroImage: "/images/bg-restaurante.jpg",
    imageAlt: "Evento gastronomico temporario com publico e operacao de alimentos",
    focus:
      "A pagina atende quem procura AVCB para food park, feira gastronomica ou evento de alimentacao, explicando quando o processo correto e PTOTEP.",
    contextTitle: "O que mais pesa em food park",
    context: [
      "Cilindros de GLP, fritadeiras, chapas, geradores e tendas alteram o risco da ocupacao temporaria.",
      "Mesas, filas e ilhas de atendimento podem ocupar area de escape se o layout nascer sem criterio.",
      "Food trucks e barracas precisam entrar no projeto com afastamentos, extintores e documentacao tecnica.",
    ],
    riskTitle: "Falhas comuns",
    risks: [
      "GLP sem laudo, afastamento ou setorizacao",
      "fritadeira sem extintor adequado",
      "tendas e lonas sem avaliacao de material",
      "filas cruzando rota de fuga",
      "gerador sem isolamento e ART",
    ],
    process: [],
    documents: [],
    faqs: [],
    related: [
      { label: "Laudo de estanqueidade de gas", href: "/laudo-estanqueidade-gas-sao-paulo" },
      { label: "AVCB para restaurante", href: "/avcb-restaurante-sao-paulo" },
      { label: "PTOTEP", href: "/ptotep" },
      { label: "Projeto de incendio", href: "/projetos-incendio" },
    ],
    ctaOccupation: "food park temporario",
  }),
  page({
    slug: "/ptotep-para-evento-esportivo",
    kind: "evento",
    label: "PTOTEP para evento esportivo",
    eyebrow: "Torneios, arenas e estruturas temporarias",
    title: "PTOTEP para Evento Esportivo | Regularizacao Bombeiros",
    description:
      "PTOTEP para evento esportivo em ginasio, clube, arena ou escola. Projeto para publico, arquibancada, rotas, estruturas e atendimento de emergencia.",
    h1: "PTOTEP para Evento Esportivo",
    lead:
      "Eventos esportivos mudam fluxo, criam arquibancadas temporarias, areas de atleta, bilheteria, patrocinadores e concentracao de publico em horarios de pico.",
    heroImage: sportsHero,
    imageAlt: "Evento esportivo com publico e estrutura temporaria",
    focus:
      "O projeto precisa dimensionar rotas, controlar publico, proteger areas de competicao e garantir que estruturas temporarias tenham responsabilidade tecnica.",
    contextTitle: "Onde o evento esportivo aperta",
    context: [
      "Arquibancadas, grades, tendas, pórticos e ativações de patrocinador mudam a circulacao.",
      "Entrada e saida em massa exigem controle de acesso, orientacao de publico e rotas claras.",
      "A area de ambulancia, equipe medica e brigada precisa permanecer acessivel durante todo o evento.",
    ],
    riskTitle: "Riscos recorrentes",
    risks: [
      "arquibancada temporaria sem ART/RRT",
      "gradeamento bloqueando saida",
      "publico em area nao prevista",
      "ponto medico sem acesso livre",
      "instalacoes eletricas de placar, som ou transmissao sem documentacao",
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
    title: "PTOTEP para Evento Universitario | Bombeiros e Seguranca",
    description:
      "PTOTEP para evento universitario em campus, escola ou faculdade. Projeto para publico, stands, palco, alimentacao, rotas, brigada e documentacao.",
    h1: "PTOTEP para Evento Universitario",
    lead:
      "Evento universitario mistura auditório, feira, show, praça de alimentacao e publico jovem em campus que normalmente tem uso educacional. Essa mudanca precisa ser formalizada.",
    heroImage: "/images/hero-escola.webp",
    imageAlt: "Campus educacional preparado para evento temporario",
    focus:
      "O PTOTEP para universidade protege o uso temporario sem travar aulas, laboratorios e rotas de fuga do campus.",
    contextTitle: "Cuidados em campus e faculdades",
    context: [
      "O evento pode ocupar patio, quadra, auditorio, biblioteca, laboratorios ou estacionamento.",
      "A rotina academica continua, entao o projeto precisa separar fluxo de alunos, visitantes, fornecedores e equipes.",
      "Quando ha barracas, palco, som ou food trucks, documentos tecnicos entram no processo.",
    ],
    riskTitle: "Pontos de risco",
    risks: [
      "mistura de publico do evento com alunos em horario letivo",
      "uso de quadra ou patio sem dimensionar saidas",
      "food trucks e barracas sem documentos de GLP",
      "palco e som temporarios sem responsabilidade tecnica",
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
    eyebrow: "Preco, escopo e variaveis",
    title: "Quanto Custa PTOTEP | Preco para Regularizar Evento",
    description:
      "Quanto custa PTOTEP? Entenda os fatores que alteram o preco: tipo de evento, cidade, publico, montagem, ART, documentos e prazo.",
    h1: "Quanto custa PTOTEP?",
    lead:
      "O custo do PTOTEP depende menos do nome do evento e mais do risco criado pela ocupacao temporaria: publico, layout, estruturas, eletrica, GLP, prazos e exigencias do local.",
    heroImage: eventHero,
    imageAlt: "Orcamento tecnico para PTOTEP de evento temporario",
    focus:
      "Uma feira simples em shopping tem custo diferente de festival com palco, food area, gerador e grande publico. O diagnostico tecnico separa o que e projeto, laudo, ART, adequacao e protocolo.",
    contextTitle: "Variaveis que mudam o valor",
    context: [
      "Quanto maior a interferencia no uso normal do imovel, maior tende a ser o trabalho tecnico.",
      "Eventos com GLP, geradores, palco, estruturas, arquibancadas, stands ou alta lotacao exigem mais documentos.",
      "Prazos curtos aumentam risco de retrabalho e exigem decisao rapida sobre layout, fornecedores e responsabilidade tecnica.",
    ],
    riskTitle: "O barato que costuma sair caro",
    risks: [
      "orcar sem ver o layout final do evento",
      "ignorar documentos de fornecedores",
      "protocolo incompleto perto da data",
      "ausencia de ART para estrutura ou eletrica",
      "mudar a montagem depois da analise tecnica",
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Existe preco fixo para PTOTEP?",
        answer:
          "Nao e recomendavel trabalhar com preco fixo sem diagnostico. O escopo muda conforme risco, tamanho, publico, documentos, cidade e tipo de montagem.",
      },
    ],
    related: baseRelated,
    ctaOccupation: "orcamento de PTOTEP",
  }),
  page({
    slug: "/prazo-aprovacao-bombeiros-evento",
    kind: "duvida",
    label: "Prazo aprovacao bombeiros evento",
    eyebrow: "Cronograma e protocolo",
    title: "Prazo de Aprovacao dos Bombeiros para Evento | PTOTEP",
    description:
      "Prazo de aprovacao dos Bombeiros para evento temporario: entenda planejamento, documentos, protocolo PTOTEP, montagem e vistoria.",
    h1: "Prazo de aprovacao dos Bombeiros para evento",
    lead:
      "O prazo depende da qualidade do projeto, antecedencia, documentos de fornecedores, tipo de evento e disponibilidade para corrigir exigencias antes da montagem.",
    heroImage: eventHero,
    imageAlt: "Cronograma de aprovacao dos Bombeiros para evento",
    focus:
      "Evento com documentacao organizada anda melhor. Evento que muda layout, fornecedor ou lotacao perto da data cria risco de exigencia e atraso.",
    contextTitle: "Como pensar o cronograma",
    context: [
      "A primeira etapa e travar o layout: entradas, saidas, palco, stands, area de alimentacao, filas, banheiros e apoio.",
      "Depois entram documentos de cada fornecedor, como eletrica, estruturas, gerador, GLP e montagem.",
      "Com isso, o projeto pode ser protocolado com muito menos risco de volta por informacao incompleta.",
    ],
    riskTitle: "O que atrasa a aprovacao",
    risks: [
      "layout mudando a cada revisao comercial",
      "fornecedor sem ART/RRT ou memorial",
      "licenca do imovel permanente irregular ou desatualizada",
      "informacao de lotacao sem criterio tecnico",
      "protocolo feito perto demais da data do evento",
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Da para aprovar PTOTEP de ultima hora?",
        answer:
          "Depende do risco e da documentacao disponivel, mas ultima hora aumenta muito a chance de exigencia, retrabalho e atraso de montagem.",
      },
    ],
    related: baseRelated,
    ctaOccupation: "prazo de aprovacao para evento",
  }),
  page({
    slug: "/documentos-necessarios-ptotep",
    kind: "duvida",
    label: "Documentos necessarios PTOTEP",
    eyebrow: "Checklist documental",
    title: "Documentos Necessarios para PTOTEP | Checklist do Evento",
    description:
      "Documentos necessarios para PTOTEP: licenca da edificacao, layout, ART/RRT, memorial, documentos de palco, eletrica, GLP, gerador e brigada.",
    h1: "Documentos necessarios para PTOTEP",
    lead:
      "Documento faltando costuma ser a maior causa de atraso em evento temporario. O checklist precisa nascer do layout e dos fornecedores reais da montagem.",
    heroImage: eventHero,
    imageAlt: "Checklist de documentos para PTOTEP",
    focus:
      "A lista muda conforme evento, mas sempre precisa conectar ocupacao permanente, montagem temporaria, responsabilidade tecnica e controle de publico.",
    contextTitle: "Como organizar os documentos",
    context: [
      "Primeiro vem o imovel: licenca existente, area, uso aprovado e condicoes de seguranca.",
      "Depois vem o evento: layout, lotacao, periodo, horarios, montagem, desmontagem e controle de acesso.",
      "Por fim entram fornecedores: palco, som, luz, eletrica, gerador, tendas, stands, GLP, food trucks e estruturas.",
    ],
    riskTitle: "Documentos que mais geram pendencia",
    risks: [
      "ART generica sem escopo claro",
      "layout sem cotas ou sem saidas de emergencia",
      "memorial sem lotacao e controle de acesso",
      "fornecedor de estrutura sem documento tecnico",
      "GLP ou gerador sem laudo aplicavel",
    ],
    process: [],
    documents: baseDocuments,
    faqs: [
      {
        question: "Preciso de ART para todo evento?",
        answer:
          "A necessidade depende das instalacoes e responsabilidades tecnicas envolvidas. Palco, estrutura, eletrica, gerador, GLP e montagens temporarias normalmente exigem documentos tecnicos especificos.",
      },
    ],
    related: baseRelated,
    ctaOccupation: "documentacao de PTOTEP",
  }),
  page({
    slug: "/diferenca-avcb-ptotep",
    kind: "duvida",
    label: "Diferenca AVCB e PTOTEP",
    eyebrow: "AVCB, CLCB e evento temporario",
    title: "Diferenca entre AVCB e PTOTEP | Evento Temporario",
    description:
      "Entenda a diferenca entre AVCB e PTOTEP. O AVCB licencia a edificacao permanente; o PTOTEP trata a ocupacao temporaria do evento.",
    h1: "Diferenca entre AVCB e PTOTEP",
    lead:
      "AVCB e PTOTEP nao sao a mesma coisa. O AVCB comprova a seguranca da edificacao no uso aprovado. O PTOTEP avalia o evento temporario que altera esse uso.",
    heroImage: "/images/page-avcb.webp",
    imageAlt: "Comparativo entre AVCB e PTOTEP para evento",
    focus:
      "Essa diferenca e essencial para shopping, hotel, igreja, universidade, centro de convencoes e qualquer local que ja tenha AVCB, mas receba montagem temporaria.",
    contextTitle: "Como explicar para o organizador",
    context: [
      "O AVCB da edificacao e a base. Sem ele, o evento ja comeca com risco documental.",
      "O PTOTEP olha o que o evento muda: publico, layout, estrutura, rota, energia, GLP, palco, stands e acesso.",
      "Um evento pode acontecer em local regularizado e ainda assim precisar de regularizacao propria.",
    ],
    riskTitle: "Erros de entendimento",
    risks: [
      "achar que o AVCB do local cobre qualquer evento",
      "montar palco ou stand sem avaliar rota de fuga",
      "usar uma declaracao generica no lugar de projeto",
      "nao separar responsabilidade do local e do organizador",
      "ignorar aumento de lotacao temporaria",
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Se o local tem AVCB vigente, preciso de PTOTEP?",
        answer:
          "Pode precisar. Se o evento altera lotacao, layout, uso, rotas, estruturas ou medidas de seguranca, a ocupacao temporaria deve ser avaliada separadamente.",
      },
    ],
    related: baseRelated,
    ctaOccupation: "diferenca entre AVCB e PTOTEP",
  }),
  page({
    slug: "/quando-precisa-ocupacao-temporaria",
    kind: "duvida",
    label: "Quando precisa ocupacao temporaria",
    eyebrow: "Enquadramento do evento",
    title: "Quando Precisa de Ocupacao Temporaria | PTOTEP",
    description:
      "Quando precisa de ocupacao temporaria no Corpo de Bombeiros? Veja sinais de que feira, show, evento corporativo ou ativacao precisa de PTOTEP.",
    h1: "Quando precisa de ocupacao temporaria?",
    lead:
      "A ocupacao temporaria precisa ser analisada quando o evento muda a forma de uso do local, cria publico adicional, monta estruturas ou interfere nas medidas de seguranca existentes.",
    heroImage: eventHero,
    imageAlt: "Analise de quando evento precisa de ocupacao temporaria",
    focus:
      "O enquadramento correto evita dois extremos: protocolar algo desnecessario ou abrir evento sem a regularizacao exigida.",
    contextTitle: "Sinais de que o evento precisa de analise",
    context: [
      "Existe controle de acesso, ingresso, lista, credenciamento ou barreira fisica para publico.",
      "Ha stand, palco, tenda, arquibancada, food area, gerador, GLP, cenografia ou alteracao de layout.",
      "O evento usa areas que normalmente nao recebem publico ou muda a ocupacao original do imovel.",
    ],
    riskTitle: "Quando acender o alerta",
    risks: [
      "evento maior que a rotina normal da edificacao",
      "fechamento de corredor, porta ou rota de fuga",
      "publico em area externa conectada ao imovel permanente",
      "uso de equipamentos temporarios de energia, cozinha ou palco",
      "exigencia de shopping, seguradora, prefeitura, contratante ou Bombeiros",
    ],
    process: [],
    documents: [],
    faqs: [
      {
        question: "Evento em area aberta tambem entra nessa logica?",
        answer:
          "Pode entrar, mas o enquadramento muda conforme isolamento, acesso a edificacao permanente, estruturas e controle de publico. A analise tecnica define se e PTOTEP, outro procedimento temporario ou orientacao documental.",
      },
    ],
    related: baseRelated,
    ctaOccupation: "ocupacao temporaria para evento",
  }),
];

export const ptotepPagesBySlug: Record<string, PtotepPage> = Object.fromEntries(
  ptotepPages.map((item) => [item.slug, item])
);

export const ptotepMapLinks = ptotepPages.map((item) => ({
  label: item.label,
  href: item.slug,
}));
