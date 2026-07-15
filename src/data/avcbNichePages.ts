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
        it: "IT-08",
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
    heroImage: "/images/hero-estacionamento.jpg",
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
        it: "IT-08",
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
      { label: "AVCB para condominio", href: "/avcb-para-condominio-sao-paulo" },
      { label: "AVCB para shopping", href: "/avcb-para-shopping-sao-paulo" },
      { label: "AVCB posto de combustivel", href: "/avcb-posto-combustivel-sao-paulo" },
      { label: "Hidrantes", href: "/hidrantes" },
      { label: "Sprinklers", href: "/sprinklers" },
      { label: "AVCB em Sao Paulo", href: "/avcb-sao-paulo" },
    ],
  },
  {
    slug: "/avcb-pousada-sao-paulo",
    label: "AVCB para pousada",
    title: "AVCB para Pousada em SP | Regularizacao no Corpo de Bombeiros | DRD2",
    description:
      "AVCB e CLCB para pousada em Sao Paulo. Casas adaptadas para hospedagem, deteccao, rotas de fuga, GLP de cozinha e regularizacao completa no Corpo de Bombeiros.",
    eyebrow: "Grupo B - hospedagem - regularizacao em SP",
    h1: "AVCB para Pousada em Sao Paulo",
    lead:
      "Pousada nao e hotel pequeno: quase sempre e uma casa ou sobrado adaptado para hospedagem, com quartos criados em reforma, cozinha com GLP e hospedes dormindo no imovel. Esse conjunto muda o risco e o Corpo de Bombeiros trata o caso com leitura propria.",
    focusTitle: "Casa adaptada e o ponto critico",
    focus:
      "A maioria das pousadas nasce de imovel residencial reformado. Corredores estreitos, escadas unicas, quartos em mezanino e cozinha com botijao exigem avaliacao de rota de fuga, deteccao e enquadramento antes do protocolo. A DRD2 define se o caso fecha em CLCB, Projeto Tecnico Simplificado ou AVCB com vistoria.",
    heroImage: "/images/banner-hero.jpg",
    imageAlt: "Fachada de pousada urbana regularizada no Corpo de Bombeiros",
    ctaOccupation: "pousada",
    groupLabel: "B-1",
    groupDesc:
      "Hotel e assemelhado — inclui pousadas, hospedarias e pensoes. Com hospedes pernoitando, as exigencias de deteccao, alarme, iluminacao e saidas sobem em relacao a uma residencia comum, mesmo em imovel pequeno.",
    contextTitle: "Por que pousada tem leitura propria",
    context: [
      "Hospede dormindo e o cenario de maior risco em incendio: a deteccao precoce e as rotas iluminadas pesam mais que em comercio diurno.",
      "Reformas para criar quartos costumam alterar rotas, ventilacao e carga eletrica sem atualizacao de projeto.",
      "Plataformas de reserva e a fiscalizacao municipal cobram a regularidade — pousada sem licenca perde anuncio e pode ser interditada.",
    ],
    risksTitle: "O que mais trava pousadas",
    risks: [
      "imovel residencial operando hospedagem sem novo enquadramento",
      "escada unica e corredores estreitos sem compensacao tecnica",
      "cozinha com GLP sem central ou sem ventilacao adequada",
      "quartos em mezanino ou edicula fora da planta",
      "deteccao de fumaca e iluminacao de emergencia ausentes nos quartos e rotas",
      "documentacao de manutencao inexistente",
    ],
    requirementsTitle: "Exigencias comuns no AVCB de pousada",
    requirements: [
      { it: "IT-02", title: "Enquadramento B-1", desc: "Confirma se o caso e CLCB, Projeto Simplificado ou AVCB com vistoria conforme area, altura e numero de quartos." },
      { it: "IT-08", title: "Saidas de emergencia", desc: "Rotas dos quartos ate a rua, largura de corredores e escadas, e abertura das portas no sentido de fuga." },
      { it: "IT-16 / IT-20", title: "Extintores e sinalizacao", desc: "Distribuicao por pavimento, classes corretas e placas fotoluminescentes nas rotas." },
      { it: "IT-18", title: "Iluminacao de emergencia", desc: "Autonomia minima nas rotas, escadas e areas comuns — critica para fuga noturna." },
      { it: "IT-28", title: "GLP", desc: "Central de gas, abrigo ventilado e teste de estanqueidade da linha da cozinha." },
      { it: "IT-19", title: "Deteccao e alarme", desc: "Conforme porte, deteccao de fumaca nos quartos e acionadores nas rotas." },
    ],
    documents: [
      "CNPJ ou dados do responsavel e do imovel",
      "IPTU, area construida, pavimentos e numero de quartos",
      "planta ou croqui atualizado com a configuracao real",
      "comprovantes de extintores, iluminacao e manutencoes",
      "teste de estanqueidade e documentos do GLP quando houver",
      "ARTs de sistemas e reformas quando aplicavel",
    ],
    process: [
      "diagnostico do imovel e do uso real (quartos, lotacao, cozinha, areas comuns)",
      "definicao do enquadramento correto no Corpo de Bombeiros",
      "adequacao de deteccao, iluminacao, extintores, sinalizacao e GLP",
      "emissao de laudos e ARTs necessarios",
      "protocolo no Via Facil Bombeiros e acompanhamento ate a emissao",
    ],
    failures: [
      "operar como residencia no papel e pousada na pratica",
      "criar quartos em reforma sem revisar rota de fuga",
      "manter botijoes dentro da cozinha sem central",
      "esquecer deteccao nos quartos — item que reprova direto",
      "deixar a regularizacao para depois da alta temporada",
    ],
    faqs: [
      { question: "Pousada pequena precisa de AVCB?", answer: "Precisa de licenca do Corpo de Bombeiros — CLCB ou AVCB conforme area, altura e risco. O fato de ser pequena nao dispensa; hospedagem tem exigencias proprias por ter pessoas dormindo." },
      { question: "Casa adaptada consegue AVCB?", answer: "Consegue, desde que rotas, deteccao, iluminacao, extintores e GLP sejam adequados. O diagnostico tecnico define as menores intervencoes possiveis para aprovar." },
      { question: "Booking e Airbnb pedem AVCB?", answer: "As plataformas e a prefeitura cobram regularidade do estabelecimento. Alem da exigencia legal, a licenca protege o negocio em caso de sinistro e fiscalizacao." },
      { question: "Quanto tempo leva?", answer: "Casos simples de CLCB saem em semanas; AVCB com vistoria e adequacoes pede mais prazo. Comecar antes da temporada evita operar irregular no pico." },
    ],
    related: [
      { label: "AVCB para hoteis e pousadas", href: "/avcb-hoteis-pousadas-sao-paulo" },
      { label: "Alvara bombeiro hotel e pousada", href: "/alvara-bombeiro-hotel-pousada-sao-paulo" },
      { label: "AVCB em Sao Paulo", href: "/avcb-sao-paulo" },
    ],
  },
  {
    slug: "/avcb-escola-faculdade-sao-paulo",
    label: "AVCB para escola e faculdade",
    title: "AVCB para Escola e Faculdade em SP | Corpo de Bombeiros | DRD2",
    description:
      "AVCB e CLCB para escolas, faculdades e cursos em Sao Paulo. Grupo E, evacuacao de alunos, laboratorios, auditorios e regularizacao completa no Corpo de Bombeiros.",
    eyebrow: "Grupo E - educacional - regularizacao em SP",
    h1: "AVCB para Escola e Faculdade em Sao Paulo",
    lead:
      "Escola e faculdade concentram muita gente jovem em salas, corredores e auditorios — e parte do publico precisa de ajuda para evacuar. Por isso o grupo educacional tem exigencias proprias de saidas, sinalizacao, brigada e plano de emergencia.",
    focusTitle: "Evacuacao e o coracao do processo",
    focus:
      "O Corpo de Bombeiros olha a lotacao real por sala, a largura de corredores e escadas, o sentido das portas e o tempo de evacuacao. Laboratorios, cozinhas, quadras cobertas e auditorios entram com leituras adicionais. A DRD2 organiza o enquadramento e prepara a escola para aprovar sem refacao.",
    heroImage: "/images/banner-hero.jpg",
    imageAlt: "Corredor de escola com sinalizacao de emergencia regularizada",
    ctaOccupation: "escola ou faculdade",
    groupLabel: "E-1 a E-6",
    groupDesc:
      "Ocupacoes educacionais: escolas em geral, creches, pre-escolas, ensino fundamental e medio, faculdades, universidades, cursos livres, tecnicos e preparatorios.",
    contextTitle: "Quando a escola precisa regularizar",
    context: [
      "Alvara de funcionamento, autorizacoes da rede de ensino e ate convenios exigem a licenca do Corpo de Bombeiros vigente.",
      "Ampliacoes tipicas — salas novas, quadra coberta, laboratorio, cantina — alteram lotacao e rotas e pedem atualizacao do projeto.",
      "Pais e mantenedoras cobram seguranca documentada; sinistro em escola tem repercussao e responsabilizacao imediatas.",
    ],
    risksTitle: "O que mais trava escolas e faculdades",
    risks: [
      "lotacao real das salas acima da prevista no projeto",
      "portas abrindo contra o fluxo de fuga ou corredores estreitados por armarios",
      "laboratorios com produtos quimicos sem leitura especifica",
      "cantina com GLP sem central regularizada",
      "brigada e plano de emergencia sem treinamento documentado",
      "predios ampliados sem atualizacao da planta aprovada",
    ],
    requirementsTitle: "Exigencias comuns no AVCB educacional",
    requirements: [
      { it: "IT-02", title: "Enquadramento Grupo E", desc: "Define o processo pela area, altura, lotacao e riscos especificos (labs, cozinha, auditorio)." },
      { it: "IT-08", title: "Saidas de emergencia", desc: "Largura de corredores e escadas pela lotacao, portas no sentido de fuga e rotas ate area segura." },
      { it: "IT-16 / IT-20", title: "Extintores e sinalizacao", desc: "Cobertura por pavimento e sinalizacao fotoluminescente completa das rotas." },
      { it: "IT-18", title: "Iluminacao de emergencia", desc: "Corredores, escadas, salas de grande lotacao e auditorios com autonomia garantida." },
      { it: "IT-19", title: "Alarme de incendio", desc: "Acionadores e avisadores audiveis em todo o predio conforme o porte." },
      { it: "IT-17", title: "Brigada e plano", desc: "Brigada dimensionada, treinada e com exercicios de abandono documentados." },
    ],
    documents: [
      "CNPJ da mantenedora e dados do imovel",
      "IPTU, area construida, pavimentos e lotacao por ambiente",
      "planta ou croqui atualizado com todas as ampliacoes",
      "comprovantes de extintores, alarme, iluminacao e manutencoes",
      "atestado de brigada e plano de emergencia quando exigidos",
      "ARTs de sistemas e do laudo eletrico",
    ],
    process: [
      "diagnostico com levantamento de lotacao real e rotas",
      "definicao do enquadramento e do caminho de menor intervencao",
      "adequacoes de saidas, sinalizacao, alarme e iluminacao",
      "treinamento e documentacao de brigada quando exigido",
      "protocolo no Via Facil Bombeiros e acompanhamento da vistoria",
    ],
    failures: [
      "matricular alem da lotacao aprovada no projeto",
      "ampliar salas e quadras sem atualizar a planta",
      "tratar laboratorio como sala comum",
      "deixar o abandono de predio sem treino documentado",
      "renovar em cima do prazo do ano letivo",
    ],
    faqs: [
      { question: "Escola precisa de AVCB ou CLCB?", answer: "Depende de area, altura e lotacao. Escolas menores podem fechar em CLCB; predios maiores, com auditorios e laboratorios, normalmente exigem AVCB com projeto e vistoria." },
      { question: "A vistoria olha a lotacao das salas?", answer: "Sim. A lotacao real por ambiente define largura de saidas e rotas. Divergencia entre matricula e projeto e causa classica de exigencia." },
      { question: "Faculdade com varios predios regulariza junto?", answer: "Cada edificacao e avaliada, mas o processo pode ser organizado em conjunto. O diagnostico define a estrategia com menos vistorias e custo." },
      { question: "Qual o melhor momento para renovar?", answer: "Nas ferias ou no inicio do semestre, com folga antes de fiscalizacoes e do vencimento — adequacoes fisicas em escola cheia sao mais caras e lentas." },
    ],
    related: [
      { label: "AVCB para escola", href: "/avcb-para-escola-sao-paulo" },
      { label: "Alvara bombeiro escola e faculdade", href: "/alvara-bombeiro-escola-faculdade-sao-paulo" },
      { label: "AVCB em Sao Paulo", href: "/avcb-sao-paulo" },
    ],
  },
  {
    slug: "/avcb-para-renovacao-de-seguro",
    label: "AVCB para renovacao de seguro",
    title: "AVCB para Renovacao de Seguro Empresarial em SP | DRD2 Engenharia",
    description:
      "Seguradora pediu AVCB valido para renovar a apolice? Regularizamos AVCB e CLCB de empresas e condominios em Sao Paulo com projeto, laudos, ARTs e prazo compativel com a renovacao do seguro.",
    eyebrow: "Exigencia da seguradora - regularizacao em SP",
    h1: "AVCB para Renovacao de Seguro Empresarial e Condominial",
    lead:
      "Na renovacao da apolice, a seguradora ou a corretora pede o AVCB valido. Sem o documento, o premio sobe, a cobertura encolhe ou a proposta e recusada — e, em caso de sinistro com AVCB vencido, a indenizacao pode ser questionada por agravamento de risco.",
    focusTitle: "Seguro e AVCB andam juntos",
    focus:
      "A analise de risco da seguradora usa o AVCB como prova de que os sistemas de seguranca existem e funcionam. A DRD2 organiza o processo de tras pra frente: prazo da renovacao da apolice, diagnostico do imovel, adequacoes minimas necessarias e protocolo no Corpo de Bombeiros com acompanhamento ate a emissao.",
    heroImage: "/images/banner-hero.jpg",
    imageAlt: "Engenheiro conferindo documentacao de seguranca contra incendio para seguro empresarial",
    ctaOccupation: "empresa ou condominio com seguro a renovar",
    groupLabel: "Todos",
    groupDesc:
      "Qualquer ocupacao pode ter o AVCB exigido pela seguradora: industria, galpao logistico, comercio, escritorio, condominio residencial ou corporativo. O enquadramento (CLCB, AVCB com vistoria ou Projeto Tecnico) depende de area, altura, uso e risco do imovel.",
    contextTitle: "Quando a seguradora cobra o AVCB",
    context: [
      "Na contratacao ou renovacao de seguro empresarial, patrimonial ou condominial, a analise de risco pede o AVCB ou CLCB vigente do imovel.",
      "Apos sinistros na regiao ou mudanca de perfil de risco, a seguradora pode exigir o documento mesmo no meio da vigencia.",
      "Em caso de incendio com AVCB vencido, a seguradora pode alegar agravamento de risco e reduzir ou negar a indenizacao — o documento em dia protege o patrimonio duas vezes.",
    ],
    risksTitle: "O que mais trava a renovacao quando o seguro cobra prazo",
    risks: [
      "AVCB vencido ha anos, exigindo novo processo completo em vez de renovacao simples",
      "planta aprovada divergente do layout atual apos reformas e ampliacoes",
      "hidrantes sem teste, alarme desativado ou iluminacao de emergencia queimada",
      "laudos e ARTs de sistemas vencidos ou inexistentes",
      "prazo da apolice incompativel com o tempo de adequacao — comecar tarde e o erro mais caro",
      "condominio com areas comuns regulares, mas unidades alteradas sem comunicacao",
    ],
    requirementsTitle: "O que o processo exige",
    requirements: [
      {
        it: "IT-02",
        title: "Enquadramento correto",
        desc: "Define se o imovel renova por CLCB, AVCB com vistoria ou precisa de novo Projeto Tecnico — errar aqui consome o prazo da apolice.",
      },
      {
        it: "IT-08",
        title: "Saidas de emergencia",
        desc: "Rotas, portas corta-fogo e escadas precisam corresponder a lotacao e ao layout real do imovel.",
      },
      {
        it: "IT-16 / IT-20",
        title: "Extintores e sinalizacao",
        desc: "Cargas, validades, alturas e placas conferidas antes da vistoria — item classico de reprovacao.",
      },
      {
        it: "IT-18",
        title: "Iluminacao de emergencia",
        desc: "Autonomia e cobertura das luminarias testadas e documentadas.",
      },
      {
        it: "IT-41",
        title: "Instalacoes eletricas",
        desc: "Laudo eletrico com ART — tambem pedido por muitas seguradoras junto com o AVCB.",
      },
      {
        it: "Laudos",
        title: "ARTs e manutencoes",
        desc: "Hidrantes, alarme, SPDA e gas com laudos validos e registro de manutencao — a seguradora confere datas.",
      },
    ],
    documents: [
      "apolice atual ou proposta de renovacao com a exigencia da seguradora",
      "AVCB ou CLCB anterior, mesmo vencido",
      "IPTU, area construida, pavimentos e uso real do imovel",
      "planta ou croqui atualizado do layout",
      "comprovantes de manutencao de extintores, alarme, hidrantes e iluminacao",
      "ARTs e laudos existentes dos sistemas de seguranca",
    ],
    process: [
      "levantamento do prazo da apolice e do que a seguradora exige exatamente",
      "diagnostico do imovel e do historico no Corpo de Bombeiros",
      "definicao do caminho mais rapido: renovacao simples, adequacao pontual ou novo projeto",
      "execucao das adequacoes e emissao de laudos e ARTs",
      "protocolo no Via Facil Bombeiros com acompanhamento ate a emissao e envio do documento a corretora",
    ],
    failures: [
      "deixar para regularizar na semana da renovacao da apolice",
      "enviar a seguradora um AVCB vencido achando que basta o protocolo",
      "renovar o seguro sem AVCB e descobrir a exclusao de cobertura so no sinistro",
      "tratar exigencia da seguradora e exigencia do Corpo de Bombeiros como processos separados",
      "esquecer laudos eletricos e de sistemas que a analise de risco tambem pede",
    ],
    faqs: [
      {
        question: "A seguradora pode negar a renovacao sem AVCB?",
        answer:
          "Pode. O AVCB valido e um dos documentos da analise de risco. Sem ele, a seguradora pode recusar a proposta, aumentar o premio ou incluir exclusoes de cobertura para incendio.",
      },
      {
        question: "Seguro paga se o AVCB estiver vencido no sinistro?",
        answer:
          "Ha risco real de reducao ou negativa por agravamento de risco, dependendo da apolice e do nexo do sinistro. Manter o AVCB em dia e protecao juridica alem da obrigacao legal.",
      },
      {
        question: "Quanto tempo antes da renovacao devo comecar?",
        answer:
          "O ideal e 60 a 120 dias antes, dependendo do porte do imovel e das adequacoes necessarias. Processos simples de CLCB saem mais rapido; AVCB com vistoria e adequacoes pede folga.",
      },
      {
        question: "A DRD2 fala direto com a corretora?",
        answer:
          "Sim. Alinhamos com a corretora o que a seguradora exige, emitimos os documentos tecnicos e enviamos o AVCB assim que publicado, com laudos e ARTs de apoio.",
      },
    ],
    related: [
      { label: "Renovacao de AVCB", href: "/renovacao-avcb" },
      { label: "AVCB para condominio", href: "/avcb-para-condominio-sao-paulo" },
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
