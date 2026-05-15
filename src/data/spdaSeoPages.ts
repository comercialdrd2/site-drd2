export type SpdaSeoPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  segment: string;
  cityContext: string;
  riskProfile: string;
  localDemand: string;
  technicalFocus: string;
  approvalFocus: string;
  costDrivers: string;
  urgency: string;
  buildingTypes: string[];
  failures: string[];
  requirements: string[];
  related: { label: string; href: string }[];
};

const baseRelated = [
  { label: "SPDA página pilar", href: "/spda" },
  { label: "AVCB São Paulo", href: "/avcb-sao-paulo" },
  { label: "Projetos de incêndio", href: "/projetos-incendio" },
  { label: "Laudo Bombeiro", href: "/laudo-bombeiro-escritorio-sao-paulo" },
];

export const spdaSeoPages: Record<string, SpdaSeoPage> = {
  "/spda-para-raios-sao-paulo": {
    slug: "/spda-para-raios-sao-paulo",
    title: "SPDA Para-raios em São Paulo | Projeto, Instalação e Laudo",
    description: "SPDA para-raios em São Paulo. Projeto, instalação, laudo técnico, inspeção, aterramento, NBR 5419, ART e documentação para AVCB.",
    h1: "SPDA Para-raios: Projeto, Instalação e Laudo em São Paulo",
    eyebrow: "SPDA - para-raios - AVCB",
    segment: "edificações que precisam de SPDA",
    cityContext: "Em São Paulo, prédios comerciais, condomínios, indústrias, hospitais, escolas, galpões e estruturas altas precisam tratar o SPDA como parte da segurança contra incêndio e da continuidade operacional.",
    riskProfile: "O risco não esta apenas no raio direto. Descargas atmosfericas podem gerar surtos elétricos, queima de equipamentos, incêndio por falha elétrica, danos estruturais e questionamento de seguradora quando não ha laudo técnico valido.",
    localDemand: "A busca geralmente vem de síndicos, administradoras, facilities, indústrias e empresas em renovacao de AVCB, auditoria, obra, retrofit ou regularização de sistemas antigos.",
    technicalFocus: "O sistema deve considerar análise de risco, captores, descidas, equipotencializacao, aterramento, DPS, continuidade elétrica, corrosao, fixacao, medição e documentação conforme NBR 5419.",
    approvalFocus: "Para AVCB, o SPDA precisa estar documentado com laudo, ART quando aplicavel, evidencias de inspeção, medição e coerencia com a edificação real.",
    costDrivers: "O custo varia por altura, área de cobertura, metodo de proteção, quantidade de descidas, aterramento existente, necessidade de DPS, acesso ao telhado e exigencia de laudo.",
    urgency: "SPDA sem laudo ou com aterramento irregular pode travar renovacao de AVCB, seguro e auditorias técnicas.",
    buildingTypes: ["Prédio comercial", "Condominio", "Galpao industrial", "Hospital ou escola"],
    failures: ["Laudo vencido", "Descida rompida", "Aterramento sem medição", "DPS inexistente"],
    requirements: ["Análise NBR 5419", "Inspeção visual", "Medição de aterramento", "Laudo e ART"],
    related: baseRelated,
  },
  "/projeto-spda-para-raios-sao-paulo": {
    slug: "/projeto-spda-para-raios-sao-paulo",
    title: "Projeto SPDA Para-raios São Paulo | NBR 5419",
    description: "Projeto SPDA para-raios em São Paulo conforme NBR 5419. Análise de risco, captores, descidas, aterramento, DPS, ART e AVCB.",
    h1: "Projeto SPDA Para-raios conforme NBR 5419 em São Paulo",
    eyebrow: "Projeto SPDA - NBR 5419 - ART",
    segment: "obras e edificações que precisam projetar SPDA",
    cityContext: "Projetos de SPDA em São Paulo aparecem em obras novas, retrofit de prédios, regularização de galpões, adequação de condomínios e processos de AVCB com pendencia elétrica.",
    riskProfile: "Projeto sem análise de risco pode subdimensionar captores, descidas, aterramento, equipotencializacao e DPS, criando sistema que parece instalado mas não protege de forma adequada.",
    localDemand: "A busca vem de construtoras, engenheiros, administradoras e empresas que precisam de projeto assinado para obra, seguro, AVCB ou adequação normativa.",
    technicalFocus: "O projeto deve definir nivel de proteção, metodo de captacao, descidas, malha de aterramento, equalizacao, DPS, detalhes construtivos, materiais e memorial técnico.",
    approvalFocus: "A documentação precisa ser compatível com NBR 5419, arquitetura, projeto elétrico, sistemas de incêndio e exigencias do Corpo de Bombeiros quando vinculada ao AVCB.",
    costDrivers: "O valor depende de área, altura, complexidade da cobertura, existencia de estrutura metalica, acesso, qualidade das plantas e necessidade de visita técnica.",
    urgency: "Projeto tardio em obra gera retrabalho em cobertura, fachadas, aterramento e quadros elétricos.",
    buildingTypes: ["Obra nova", "Prédio existente", "Indústria", "Condominio"],
    failures: ["Sem análise de risco", "Planta desatualizada", "DPS não previsto", "Descidas insuficientes"],
    requirements: ["Análise de risco", "Detalhamento de captores", "Aterramento", "Memorial e ART"],
    related: [
      { label: "SPDA pilar", href: "/spda" },
      { label: "Projeto de incêndio", href: "/projetos-incendio" },
      { label: "Instalação SPDA", href: "/instalacao-spda-para-raios-sao-paulo" },
      { label: "Laudo SPDA", href: "/laudo-spda-para-raios-sao-paulo" },
    ],
  },
  "/instalacao-spda-para-raios-sao-paulo": {
    slug: "/instalacao-spda-para-raios-sao-paulo",
    title: "Instalação de SPDA Para-raios em São Paulo",
    description: "Instalação de SPDA para-raios em São Paulo. Execução predial, captores, descidas, aterramento, DPS, adequação NBR 5419 e AVCB.",
    h1: "Instalação de SPDA Para-raios em São Paulo",
    eyebrow: "Instalação - para-raios - predial",
    segment: "edificações que precisam instalar SPDA",
    cityContext: "A instalação de SPDA em São Paulo e comum em prédios antigos, condomínios verticais, galpões, indústrias, escolas e retrofit de edificios que precisam regularizar AVCB.",
    riskProfile: "O risco esta em executar cabos, hastes e captores sem projeto, sem continuidade, sem aterramento adequado ou sem proteção interna contra surtos.",
    localDemand: "Clientes procuram instalacao quando o laudo reprovou, o projeto exige obra, houve reforma no telhado ou o AVCB/seguradora pediu adequacao.",
    technicalFocus: "A execução deve seguir projeto, materiais corretos, fixacao, trajetos de descida, interligacao ao aterramento, equipotencializacao, DPS e proteção contra corrosao.",
    approvalFocus: "Para validacao, a instalação precisa permitir inspeção, medição e emissão de laudo técnico com evidencias.",
    costDrivers: "O custo depende de altura, acesso, cobertura, quantidade de descidas, aterramento, materiais, necessidade de plataforma e trabalho em prédio ocupado.",
    urgency: "Instalação mal feita pode reprovar laudo, exigir retrabalho e manter o AVCB pendente.",
    buildingTypes: ["Prédio residencial", "Prédio comercial", "Galpao", "Escola ou hospital"],
    failures: ["Instalação sem projeto", "Conexao frouxa", "Aterramento isolado", "Sem DPS"],
    requirements: ["Execução conforme projeto", "Materiais adequados", "Continuidade elétrica", "Teste e laudo"],
    related: [
      { label: "Projeto SPDA", href: "/projeto-spda-para-raios-sao-paulo" },
      { label: "Laudo SPDA", href: "/laudo-spda-para-raios-sao-paulo" },
      { label: "AVCB São Paulo", href: "/avcb-sao-paulo" },
      { label: "Manutenção", href: "/manutencao" },
    ],
  },
  "/laudo-spda-para-raios-sao-paulo": {
    slug: "/laudo-spda-para-raios-sao-paulo",
    title: "Laudo SPDA Para-raios São Paulo | Inspeção e ART",
    description: "Laudo SPDA para-raios em São Paulo. Inspeção, medição de aterramento, conformidade NBR 5419, ART e documentação para AVCB.",
    h1: "Laudo SPDA Para-raios com Inspeção e ART em São Paulo",
    eyebrow: "Laudo SPDA - inspeção - AVCB",
    segment: "imóveis que precisam de laudo SPDA",
    cityContext: "Laudo SPDA em São Paulo e buscado principalmente em renovacao de AVCB, auditorias de seguradora, condomínios, indústrias e prédios com sistemas antigos.",
    riskProfile: "O risco esta em apresentar laudo sem inspeção real, sem medição, sem verificar continuidade, conexoes, corrosao, aterramento e DPS.",
    localDemand: "A procura aumenta quando o AVCB venceu, a vistoria se aproxima, a seguradora pede comprovacao ou houve reforma que pode ter alterado o sistema.",
    technicalFocus: "O laudo deve avaliar captores, descidas, conexoes, aterramento, equipotencializacao, DPS, continuidade, corrosao, integridade fisica, fotos e resultados de medição.",
    approvalFocus: "Para AVCB, o laudo precisa ser coerente com o sistema existente, ter responsavel técnico, ART quando aplicavel e apontar adequacoes se houver não conformidades.",
    costDrivers: "O valor depende de tamanho da edificação, quantidade de descidas, pontos de medição, acesso ao telhado, necessidade de relatorio fotografico e urgencia.",
    urgency: "Laudo vencido ou reprovado costuma ser uma das pendencias mais comuns em renovacao de AVCB.",
    buildingTypes: ["Condominio", "Prédio comercial", "Indústria", "Hospital ou escola"],
    failures: ["Laudo sem medição", "Fotos insuficientes", "DPS não avaliado", "Descida oxidada"],
    requirements: ["Inspeção visual", "Medição de aterramento", "Relatorio técnico", "ART"],
    related: [
      { label: "SPDA pilar", href: "/spda" },
      { label: "Renovação AVCB", href: "/renovacao-avcb" },
      { label: "Projeto SPDA", href: "/projeto-spda-para-raios-sao-paulo" },
      { label: "Instalação SPDA", href: "/instalacao-spda-para-raios-sao-paulo" },
    ],
  },
  "/inspecao-manutencao-spda-sao-paulo": {
    slug: "/inspecao-manutencao-spda-sao-paulo",
    title: "Inspeção e Manutenção de SPDA São Paulo | NBR 5419",
    description: "Inspeção e manutenção de SPDA em São Paulo. Verificacao predial, aterramento, descidas, DPS, periodicidade, laudo e adequação NBR 5419.",
    h1: "Inspeção e Manutenção de SPDA em São Paulo",
    eyebrow: "Inspeção - manutenção - SPDA",
    segment: "imóveis com SPDA existente",
    cityContext: "Prédios, condomínios e empresas em São Paulo geralmente ja possuem algum sistema de para-raios, mas muitos estao sem verificacao periodica ou sofreram reformas que alteraram o desempenho.",
    riskProfile: "O risco aparece quando descidas foram rompidas, conexoes oxidaram, o aterramento perdeu desempenho, o telhado mudou ou o DPS não acompanha os quadros elétricos atuais.",
    localDemand: "A busca costuma surgir antes da renovacao do AVCB, apos reforma, depois de queima de equipamentos ou por exigencia de auditoria técnica.",
    technicalFocus: "A inspeção deve verificar continuidade, conexoes, integridade, captores, descidas, aterramento, DPS, corrosao, interferencias e necessidade de adequação.",
    approvalFocus: "Quando ha não conformidade, a manutenção precisa gerar evidencias para posterior laudo e regularização documental.",
    costDrivers: "O custo depende de acesso, quantidade de descidas, necessidade de troca de componentes, medição, relatorio e urgencia.",
    urgency: "A manutenção preventiva reduz risco de reprovar laudo SPDA perto do vencimento do AVCB.",
    buildingTypes: ["Prédio antigo", "Condominio", "Indústria", "Shopping ou escola"],
    failures: ["Conexoes oxidadas", "Captor danificado", "DPS ausente", "Aterramento alterado"],
    requirements: ["Inspeção periodica", "Correcoes fisicas", "Medição", "Registro técnico"],
    related: [
      { label: "Laudo SPDA", href: "/laudo-spda-para-raios-sao-paulo" },
      { label: "Instalação SPDA", href: "/instalacao-spda-para-raios-sao-paulo" },
      { label: "Manutenção", href: "/manutencao" },
      { label: "AVCB São Paulo", href: "/avcb-sao-paulo" },
    ],
  },
  "/quanto-custa-spda-para-raios-sao-paulo": {
    slug: "/quanto-custa-spda-para-raios-sao-paulo",
    title: "Quanto Custa SPDA Para-raios em São Paulo",
    description: "Veja quanto custa SPDA para-raios em São Paulo. Preco de projeto, instalação, laudo, medição de aterramento, manutenção e ART.",
    h1: "Quanto Custa SPDA Para-raios em São Paulo?",
    eyebrow: "Preco - orçamento - SPDA",
    segment: "orçamentos de SPDA",
    cityContext: "O custo de SPDA em São Paulo varia muito entre laudo simples, projeto, instalação completa, adequação de sistema antigo e manutenção predial.",
    riskProfile: "O erro comum e comparar apenas preco do laudo, sem considerar acesso ao telhado, medição, descidas, aterramento, DPS, ART e necessidade de adequação.",
    localDemand: "Quem pesquisa preco normalmente precisa renovar AVCB, resolver exigencia, instalar para-raios em prédio, regularizar seguro ou avaliar risco de um sistema antigo.",
    technicalFocus: "O orçamento deve separar vistoria, projeto, materiais, instalação, medição de aterramento, laudo, ART e eventuais adequacoes conforme NBR 5419.",
    approvalFocus: "Preco baixo sem escopo técnico pode gerar laudo fraco, falta de medição e retrabalho na renovacao do AVCB.",
    costDrivers: "Os maiores fatores sao altura, área, acesso, quantidade de descidas, tipo de captacao, aterramento, DPS, urgencia e se o sistema existe ou precisa ser implantado.",
    urgency: "Quando o AVCB esta vencendo, deixar o SPDA para o fim pode atrasar todo o processo.",
    buildingTypes: ["Condominio", "Prédio comercial", "Galpao", "Indústria"],
    failures: ["Orçamento sem vistoria", "Sem medição", "Sem ART", "Não inclui adequação"],
    requirements: ["Escopo definido", "Vistoria técnica", "Medição", "Laudo ou projeto"],
    related: baseRelated,
  },
};

export const spdaSeoSlugs = Object.keys(spdaSeoPages);
