export type NicheFaq = {
  question: string;
  answer: string;
};

export type NicheLink = {
  label: string;
  href: string;
};

export type NicheRequirement = {
  it: string;
  title: string;
  desc: string;
};

export type AvcbNichePage = {
  slug: string;
  label: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  focusTitle: string;
  focus: string;
  heroImage: string;
  imageAlt: string;
  ctaOccupation: string;
  groupLabel: string;
  groupDesc: string;
  contextTitle: string;
  context: string[];
  risksTitle: string;
  risks: string[];
  requirementsTitle: string;
  requirements: NicheRequirement[];
  documents: string[];
  process: string[];
  failures: string[];
  faqs: NicheFaq[];
  related: NicheLink[];
};

export const avcbNichePages: AvcbNichePage[] = [
  {
    slug: "/avcb-clinica-hospital-veterinario-sao-paulo",
    label: "AVCB para clinica e hospital veterinario",
    title: "AVCB para Clinica e Hospital Veterinario em SP | DRD2 Engenharia",
    description:
      "AVCB para clinica veterinaria, hospital veterinario e pet shop em Sao Paulo. Enquadramento H-1, projeto, CLCB ou AVCB, laudos, rotas de fuga e regularizacao completa.",
    eyebrow: "Grupo H-1 - veterinario - regularizacao em SP",
    h1: "AVCB para Clinica e Hospital Veterinario em SP",
    lead:
      "Clinica veterinaria nao deve ficar escondida dentro da pagina de clinica medica. O uso e outro: animais em atendimento, banho e tosa, internacao, equipamentos, produtos, areas tecnicas e fluxo de tutores exigem leitura propria do Corpo de Bombeiros.",
    focusTitle: "Veterinaria nao e copia de clinica medica",
    focus:
      "A regularizacao precisa separar consultorio veterinario simples, clinica com banho e tosa, hospital 24 horas, internacao, centro cirurgico, raio-x, autoclave, lavanderia e eventual uso de cilindros ou gases. A DRD2 enquadra o imovel antes do protocolo para evitar processo errado, Comunique-se e custo desnecessario.",
    heroImage: "/images/bg-hospital.jpg",
    imageAlt: "Clinica veterinaria com atendimento tecnico e regularizacao AVCB",
    ctaOccupation: "clinica ou hospital veterinario",
    groupLabel: "H-1",
    groupDesc:
      "Hospital veterinario e assemelhados, incluindo clinicas, consultorios veterinarios e atividades semelhantes. Pet shop puro pode ter leitura comercial, mas quando existe atendimento veterinario, internacao, cirurgia ou alojamento, o enquadramento precisa ser revisto.",
    contextTitle: "Quando a pagina veterinaria merece ser separada",
    context: [
      "A intencao de busca e diferente de clinica medica: o dono pesquisa clinica veterinaria, hospital veterinario, pet shop com veterinario, banho e tosa ou alojamento animal.",
      "O risco tecnico tambem muda: animais em gaiolas, secadores, lavanderia, produtos de limpeza, centro cirurgico, autoclave e equipamentos de diagnostico pedem uma leitura de layout propria.",
      "Se a pagina ficar dentro de clinica medica, o Google pode entender conteudo generico e o lead pode achar que a empresa nao atende o nicho veterinario.",
    ],
    risksTitle: "Pontos que mais travam clinicas veterinarias",
    risks: [
      "atividade declarada como comercio simples, mas operando atendimento veterinario, internacao ou procedimento",
      "banho e tosa com secadores, tomadas, extensoes e carga eletrica sem conferencia tecnica",
      "canis, gatis, gaiolas ou areas de internacao interferindo em circulacao e rotas de fuga",
      "autoclave, raio-x, centro cirurgico ou cilindros sem documento tecnico compativel",
      "estoque de produtos, limpeza, racao e materiais combustiveis ocupando corredores ou saidas",
      "pet shop em loja de shopping, galeria ou edificio misto sem alinhar AVCB individual e regras do predio",
    ],
    requirementsTitle: "Exigencias comuns no AVCB veterinario",
    requirements: [
      {
        it: "IT-02",
        title: "Classificacao correta",
        desc: "Define se o caso entra como H-1, comercio simples, uso misto ou precisa de avaliacao complementar pelo uso real do imovel.",
      },
      {
        it: "IT-11",
        title: "Saidas de emergencia",
        desc: "Rotas precisam considerar recepcao, consultorios, banho e tosa, internacao, estoque e areas tecnicas sem bloqueio por gaiolas ou mobiliario.",
      },
      {
        it: "IT-16 / IT-20",
        title: "Extintores e sinalizacao",
        desc: "Distribuicao, classe, validade, placas e identificacao das rotas devem bater com o layout real da clinica.",
      },
      {
        it: "IT-18",
        title: "Iluminacao de emergencia",
        desc: "Consultorios, corredores, recepcao, escadas e rotas precisam manter visibilidade em queda de energia.",
      },
      {
        it: "IT-41",
        title: "Instalacoes eletricas",
        desc: "Secadores, autoclaves, raio-x, equipamentos e reformas eletricas precisam ser avaliados antes do protocolo.",
      },
      {
        it: "Projeto",
        title: "CLCB ou AVCB",
        desc: "A definicao depende de area, altura, pavimentos, subsolo, lotacao, uso misto e complexidade dos sistemas existentes.",
      },
    ],
    documents: [
      "CNPJ, contrato social ou dados do responsavel legal",
      "IPTU, area construida, pavimentos, subsolo e uso real do imovel",
      "planta, croqui tecnico ou levantamento atualizado da clinica",
      "layout com recepcao, consultorios, banho e tosa, internacao, cirurgia, estoque e areas tecnicas",
      "comprovantes de extintores, iluminacao, sinalizacao e manutencoes existentes",
      "ART/RRT e laudos especificos quando houver sistemas, reformas ou equipamentos que exigem responsabilidade tecnica",
    ],
    process: [
      "diagnostico presencial ou por documentos para separar H-1, comercio simples ou uso misto",
      "levantamento do layout real, area, rotas, equipamentos e possiveis riscos tecnicos",
      "definicao entre CLCB, Projeto Tecnico Simplificado ou AVCB com vistoria",
      "adequacao de extintores, placas, iluminacao, rotas e documentos antes do protocolo",
      "protocolo no Via Facil Bombeiros, acompanhamento e resposta a Comunique-se quando necessario",
    ],
    failures: [
      "usar a pagina de clinica medica como se o risco veterinario fosse igual",
      "protocolar como loja comum quando existe atendimento veterinario ou internacao",
      "deixar banho e tosa sem analise eletrica e sem rota livre",
      "nao documentar alteracoes de layout, reforma, centro cirurgico ou equipamentos novos",
      "depender apenas do AVCB do shopping ou condominio sem avaliar a unidade individual",
    ],
    faqs: [
      {
        question: "Clinica veterinaria precisa de AVCB?",
        answer:
          "Sim. A clinica precisa de AVCB ou CLCB conforme area, altura, uso, pavimentos e risco. Quando existe atendimento veterinario, internacao ou hospital veterinario, o enquadramento tecnico deve ser avaliado com cuidado.",
      },
      {
        question: "Hospital veterinario e igual a clinica medica no Bombeiro?",
        answer:
          "Nao e a mesma pagina de SEO nem o mesmo contexto operacional. Hospital veterinario costuma ser tratado no universo H-1, enquanto clinica medica e odontologica tem outra intencao de busca e outros detalhes de operacao.",
      },
      {
        question: "Pet shop precisa dessa mesma pagina?",
        answer:
          "Pet shop sem atendimento veterinario pode ter leitura comercial. Mas pet shop com veterinario, banho e tosa, alojamento, internacao ou procedimentos deve ser analisado como caso especifico.",
      },
      {
        question: "Clinica veterinaria dentro de shopping precisa de AVCB proprio?",
        answer:
          "Pode precisar de licenca individual ou de documentacao compativel com o AVCB do empreendimento. A unidade deve seguir as regras do predio e do Corpo de Bombeiros para o uso real.",
      },
    ],
    related: [
      { label: "AVCB para hospitais e clinicas", href: "/avcb-hospital-clinica-sao-paulo" },
      { label: "AVCB consultorios medicos", href: "/avcb-consultorios-medicos-odontologicos-sao-paulo" },
      { label: "AVCB farmacia e drogaria", href: "/avcb-farmacia-drogaria-sao-paulo" },
      { label: "AVCB em Sao Paulo", href: "/avcb-sao-paulo" },
      { label: "Quanto custa AVCB", href: "/quanto-custa-avcb-sao-paulo" },
    ],
  },
  {
    slug: "/avcb-estacionamento-garagem-sao-paulo",
    label: "AVCB para estacionamento e garagem",
    title: "AVCB para Estacionamento e Garagem em SP | DRD2 Engenharia",
    description:
      "AVCB para estacionamento, garagem coletiva, garagem comercial e estacionamento rotativo em Sao Paulo. Grupo G, rotas, ventilacao, sinalizacao, extintores e regularizacao.",
    eyebrow: "Grupo G - garagem e estacionamento - regularizacao em SP",
    h1: "AVCB para Estacionamento e Garagem em SP",
    lead:
      "Estacionamento nao deve ficar perdido dentro de condominio, shopping ou posto. Garagem rotativa, subsolo, edificio-garagem e estacionamento comercial tem risco proprio: veiculos, combustivel, ventilacao, rotas de pedestres, portoes, rampas e sistemas de combate.",
    focusTitle: "Estacionamento e outro nicho, nao so area comum",
    focus:
      "A pagina atende quem procura AVCB para estacionamento rotativo, garagem comercial, garagem coletiva, subsolo, edificio-garagem ou patio coberto. A analise muda quando existe abastecimento, oficina, lava rapido, carregador de veiculo eletrico, uso como deposito ou integracao com shopping, condominio e predio comercial.",
    heroImage: "/images/bg-condominios.jpg",
    imageAlt: "Garagem e estacionamento com rotas de fuga e sinalizacao de emergencia",
    ctaOccupation: "estacionamento ou garagem",
    groupLabel: "G-1 / G-2",
    groupDesc:
      "Garagens e estacionamentos sem abastecimento entram no universo de servico automotivo e assemelhados. Garagem sem acesso de publico e garagem com acesso de publico devem ser diferenciadas. Se houver abastecimento de combustivel, a analise pode migrar para posto ou area de maior risco.",
    contextTitle: "Quando estacionamento precisa de pagina propria",
    context: [
      "A busca por estacionamento e muito diferente da busca por condominio: o lead pode ser operador de estacionamento rotativo, dono de edificio-garagem, administradora de shopping ou gestor de predio comercial.",
      "O risco principal esta no conjunto de veiculos, combustivel, ventilacao, subsolo, circulacao de pedestres, rampas, portoes, sinalizacao e eventual uso irregular das vagas como deposito.",
      "Uma pagina propria permite explicar Grupo G, garagem com ou sem publico, estacionamento coberto, subsolo, ventilacao e sistemas sem diluir o tema em outras ocupacoes.",
    ],
    risksTitle: "Pontos que mais reprovam garagens",
    risks: [
      "estacionamento declarado como apoio do predio, mas operando como atividade comercial independente",
      "subsolo sem leitura adequada de ventilacao, exaustao, sinalizacao e rotas de abandono",
      "vagas usadas como deposito de caixas, pneus, moveis ou materiais combustiveis",
      "portoes, cancelas ou rampas interferindo na fuga de pedestres em emergencia",
      "extintores, iluminacao ou placas fora do caminho real de circulacao",
      "mudanca de uso para lava rapido, oficina, carregamento eletrico ou abastecimento sem atualizar o projeto",
    ],
    requirementsTitle: "Exigencias comuns no AVCB de garagem",
    requirements: [
      {
        it: "IT-02",
        title: "Grupo G",
        desc: "Classifica garagem sem acesso de publico, garagem com acesso de publico e casos que deixam de ser estacionamento simples.",
      },
      {
        it: "IT-11",
        title: "Rotas de fuga",
        desc: "Pedestres precisam ter caminho claro, sinalizado e livre, sem depender da faixa de veiculos em pontos criticos.",
      },
      {
        it: "IT-16 / IT-20",
        title: "Extintores e sinalizacao",
        desc: "Equipamentos e placas devem ser posicionados conforme area, risco, distancia de caminhamento e layout real da garagem.",
      },
      {
        it: "IT-18",
        title: "Iluminacao de emergencia",
        desc: "Subsolos, rampas, escadas, saidas, halls e rotas precisam permanecer visiveis em falta de energia.",
      },
      {
        it: "Sistemas",
        title: "Hidrantes, alarme e sprinkler",
        desc: "Podem ser exigidos conforme area, pavimentos, subsolo, altura, integracao com o predio e sistemas ja existentes.",
      },
      {
        it: "Operacao",
        title: "Uso real da garagem",
        desc: "Lava rapido, oficina, abastecimento, deposito, carregadores e areas tecnicas mudam a analise e podem exigir documentos extras.",
      },
    ],
    documents: [
      "CNPJ, dados do operador ou responsavel pelo imovel",
      "IPTU, area, pavimentos, subsolos, acessos e capacidade de vagas",
      "planta, croqui tecnico ou levantamento da garagem e das rotas de pedestres",
      "informacao sobre tipo de operacao: rotativo, mensalista, manobrista, condominio, shopping ou edificio-garagem",
      "relacao de sistemas existentes: extintores, hidrantes, alarme, sprinkler, iluminacao, sinalizacao e ventilacao",
      "documentos de reformas, portoes, geradores, carregadores eletricos, lava rapido ou oficina quando existirem",
    ],
    process: [
      "diagnostico do tipo de garagem: G-1, G-2 ou caso com risco complementar",
      "levantamento de area, subsolos, acesso de publico, rotas, sistemas e uso real das vagas",
      "definicao entre CLCB, Projeto Tecnico Simplificado ou AVCB com vistoria",
      "adequacao de equipamentos, placas, iluminacao, rotas e documentos antes do protocolo",
      "protocolo e acompanhamento junto ao Corpo de Bombeiros ate emissao ou resposta tecnica",
    ],
    failures: [
      "misturar estacionamento com pagina de condominio e nao falar da operacao comercial",
      "ignorar subsolo, ventilacao e fluxo de pedestres",
      "permitir deposito em vagas e aumentar a carga de incendio real",
      "nao atualizar projeto depois de instalar portao, cancela, carregador eletrico ou lava rapido",
      "tratar estacionamento com abastecimento como se fosse garagem simples",
    ],
    faqs: [
      {
        question: "Estacionamento precisa de AVCB?",
        answer:
          "Sim. Estacionamentos e garagens precisam de AVCB ou CLCB conforme area, pavimentos, subsolo, acesso de publico, sistemas existentes e uso real. A classificacao mais comum fica no Grupo G.",
      },
      {
        question: "Garagem de condominio entra nessa pagina?",
        answer:
          "Garagem de condominio pode ser tratada dentro do AVCB do condominio. Mas quando a busca e por estacionamento rotativo, garagem comercial, edificio-garagem ou subsolo com operacao propria, a pagina separada converte melhor.",
      },
      {
        question: "Estacionamento com abastecimento e a mesma coisa?",
        answer:
          "Nao. Quando existe abastecimento de combustivel, a analise muda e pode se aproximar de posto de combustivel ou area de maior risco. O enquadramento precisa ser feito antes do protocolo.",
      },
      {
        question: "Vagas podem ser usadas como deposito?",
        answer:
          "Nao e recomendado. Guardar caixas, pneus, moveis e materiais combustiveis altera a carga de incendio e pode gerar exigencia ou reprovacao na vistoria.",
      },
    ],
    related: [
      { label: "AVCB para condominio", href: "/avcb-condominio-sao-paulo" },
      { label: "AVCB para shopping", href: "/avcb-para-shopping-sao-paulo" },
      { label: "AVCB posto de combustivel", href: "/avcb-posto-combustivel-sao-paulo" },
      { label: "Hidrantes", href: "/hidrantes" },
      { label: "Sprinklers", href: "/sprinklers" },
      { label: "AVCB em Sao Paulo", href: "/avcb-sao-paulo" },
    ],
  },
];

export const avcbNichePagesBySlug = Object.fromEntries(
  avcbNichePages.map((item) => [item.slug, item])
) as Record<string, AvcbNichePage>;

export const avcbNicheMapLinks = avcbNichePages.map((item) => ({
  label: item.label,
  href: item.slug,
}));
