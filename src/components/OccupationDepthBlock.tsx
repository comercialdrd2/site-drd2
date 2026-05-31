import Link from "next/link";
import { AlertTriangle, CheckCircle2, ClipboardCheck, Clock, FileText, ShieldCheck } from "lucide-react";

type OccupationDepthBlockProps = {
  occupation: string;
  currentSlug: string;
};

type DepthProfile = {
  title: string;
  risk: string;
  documents: string[];
  failures: string[];
  process: string[];
  cost: string;
  urgency: string;
  links: { label: string; href: string }[];
};

const profiles: Record<string, DepthProfile> = {
  condomínio: {
    title: "análise predial, áreas comuns e responsabilidade do síndico",
    risk: "garagens, escadas, casas de bombas, saloes de festas, medidores de gas, subsolos e rotas de fuga usadas por moradores e visitantes.",
    documents: [
      "planta ou levantamento arquitetonico com áreas comuns atualizadas",
      "ART/RRT do responsavel tecnico pelo projeto ou vistoria",
      "laudo elétrico, SPDA quando aplicavel e comprovantes de manutenção",
      "teste de hidrantes, bombas, mangueiras, extintores, iluminação e sinalização",
    ],
    failures: [
      "área de IPTU diferente da área vistoriada",
      "bomba de incêndio sem teste recente ou sem pressão suficiente",
      "porta corta-fogo travada, removida ou sem fechamento automático",
      "sinalização e iluminação de emergência fora da rota real de fuga",
    ],
    process: [
      "vistoria técnica nas áreas comuns e casa de bombas",
      "levantamento documental antes do protocolo",
      "correcao das falhas fisicas com prioridade por risco",
      "protocolo, acompanhamento e resposta a Comunique-se",
    ],
    cost: "O valor varia conforme quantidade de torres, subsolos, bombas, hidrantes, necessidade de SPDA e existencia de projeto anterior. Condomínios com manutenção em dia tendem a ter custo menor porque exigem menos adequacoes antes da vistoria.",
    urgency: "Para síndicos, AVCB vencido aumenta risco civil, problema com seguradora e dificuldade em assembleias, locacoes e venda de unidades.",
    links: [
      { label: "hidrantes para condomínio", href: "/sistema-de-hidrantes-para-condominio-sao-paulo" },
      { label: "SPDA", href: "/spda" },
      { label: "renovacao de AVCB para condomínio", href: "/renovacao-avcb-condominio-sao-paulo" },
    ],
  },
  restaurante: {
    title: "cozinha, GLP, lotação e rotas de fuga",
    risk: "cozinha quente, coifa, fritadeiras, botijoes ou central de GLP, público sentado, estoque, fachada comercial e saidas com grande fluxo em horarios de pico.",
    documents: [
      "planta ou croqui técnico com layout de cozinha e salao",
      "laudo de estanqueidade de gas com ART quando houver GLP ou GN",
      "comprovantes de extintores, sinalização, iluminação e treinamento",
      "memorial de lotação e avaliacao das saidas de emergência",
    ],
    failures: [
      "central de gas sem ventilacao, abrigo correto ou estanqueidade",
      "extintor inadequado para cozinha ou ausencia de classe K quando necessario",
      "rota de fuga bloqueada por mesas, estoque ou equipamentos",
      "alteracao de layout sem atualizar documentação técnica",
    ],
    process: [
      "diagnóstico da cozinha, gas, salao e rotas de fuga",
      "definicao entre CLCB, AVCB ou projeto técnico",
      "regularização de gas, alarme, extintores e sinalização",
      "protocolo no Via Fácil Bombeiros e acompanhamento ate aprovação",
    ],
    cost: "O custo muda conforme área, tipo de gas, lotação, coifa, horario de funcionamento e necessidade de projeto. Restaurantes pequenos podem ter processo mais simples; casas com cozinha industrial e público elevado exigem mais documentação.",
    urgency: "Restaurante irregular fica mais exposto a fiscalizacao, interdiçao, problema com alvará de funcionamento e negativa de seguro em sinistro com gas ou incêndio.",
    links: [
      { label: "laudo de estanqueidade de gas", href: "/laudo-estanqueidade-gas-sao-paulo" },
      { label: "alarme de incêndio", href: "/alarme-incendio-sao-paulo" },
      { label: "renovacao de AVCB para restaurante", href: "/renovacao-avcb-restaurante-sao-paulo" },
    ],
  },
  galpao: {
    title: "carga de incêndio, armazenamento e sistemas hidráulicos",
    risk: "porta-paletes, docas, empilhadeiras, embalagens combustiveis, mezaninos, áreas de expedicao, altura de estocagem e mudanca frequente de layout operacional.",
    documents: [
      "planta com layout de armazenagem e áreas de risco",
      "memorial de carga de incêndio conforme IT-14",
      "ART de hidrantes, alarme, sprinkler ou adequacoes instaladas",
      "testes de bombas, mangueiras, reserva técnica e sinalização",
    ],
    failures: [
      "carga de incêndio subestimada no projeto",
      "hidrante sem vazao/pressao compativel com a area protegida",
      "armazenamento encostado em luminarias, sprinklers ou rotas de fuga",
      "ampliacao de mezanino ou doca sem atualizacao do projeto",
    ],
    process: [
      "levantamento de área, altura, estocagem e ocupação real",
      "análise de IT-14, IT-17, IT-22 e IT-23 quando aplicavel",
      "adequação de hidrantes, alarme, sprinklers e sinalização",
      "protocolo de projeto, vistoria e resposta técnica a exigencias",
    ],
    cost: "O valor depende da área, altura de armazenagem, existencia de hidrantes, sprinkler, alarme, reservatório e distancia das bombas. Galpões com retrofit hidráulico ou sprinkler tendem a ter maior investimento.",
    urgency: "Galpao sem AVCB pode travar contrato de locacao, operacao logistica, licença municipal, seguradora e auditoria de clientes corporativos.",
    links: [
      { label: "hidrantes para galpao", href: "/sistema-de-hidrantes-para-galpao-sao-paulo" },
      { label: "sprinklers para indústria", href: "/sistema-de-sprinkler-para-industria-sao-paulo" },
      { label: "projeto de incêndio", href: "/projetos-incendio" },
    ],
  },
  // CLCB Default — edificação até 750 m² baixo risco
  clcbDefault: {
    title: "processo simplificado, documentação enxuta e prazo curto",
    risk: "extintores no prazo, sinalização visível, iluminação de emergência funcional e rotas de fuga desobstruídas — itens auto-declarados sem vistoria física obrigatória do CBPMESP.",
    documents: [
      "IPTU e CNPJ/CPF do responsável",
      "planta ou croqui simples da edificação (até 750 m²)",
      "ART do engenheiro responsável pela vistoria CLCB",
      "fotos dos extintores, sinalização, iluminação de emergência e saídas de emergência",
    ],
    failures: [
      "extintor com carga ou prazo de recarga vencido na hora do protocolo",
      "sinalização de emergência ausente, desbotada ou em local sem visibilidade",
      "iluminação de emergência com bateria descarregada ou bloco com defeito",
      "saída obstruída por mercadoria, mesa ou equipamento — comum em comércio e restaurante",
    ],
    process: [
      "visita técnica gratuita e diagnóstico do imóvel",
      "lista de adequações com custo e prazo (sem surpresas)",
      "execução das adequações: extintores, sinalização, iluminação",
      "protocolo CLCB no Via Fácil Bombeiros e acompanhamento até emissão",
    ],
    cost: "CLCB tem custo significativamente menor que AVCB porque dispensa vistoria física obrigatória e exige menos documentação. O valor varia conforme adequações necessárias — quanto mais itens em ordem antes do protocolo, menor o custo final.",
    urgency: "CLCB vencido sujeita a interdição em fiscalização do CBPMESP, perda do alvará municipal e bloqueio de credenciamentos. Renovação com 60 dias de antecedência evita período irregular.",
    links: [
      { label: "renovação de CLCB", href: "/renovacao-clcb-sao-paulo" },
      { label: "AVCB ou CLCB — qual preciso?", href: "/avcb-ou-clcb-qual-preciso" },
      { label: "CLCB em São Paulo", href: "/clcb-sao-paulo" },
    ],
  },
  // CLCB Alimentação
  clcbAlimentacao: {
    title: "central de gás, coifa, extintor classe K e lotação real",
    risk: "central de GLP regularizada com ART, coifa com limpeza periódica documentada, extintor classe K na cozinha (não pó comum), rota de fuga até a calçada e lotação compatível com o número de mesas.",
    documents: [
      "ART de instalação da central de GLP",
      "laudo recente de estanqueidade do sistema de gás",
      "comprovante de limpeza da coifa nos últimos 12 meses",
      "extintor classe K na área da cozinha + extintores convencionais distribuídos",
    ],
    failures: [
      "extintor pó ABC na cozinha — não combate gordura em chamas (precisa classe K)",
      "central de GLP sem ART, ventilação ou distância correta de fontes de calor",
      "coifa com gordura acumulada — risco real de incêndio em duto",
      "mesas no corredor de evacuação reduzindo a largura da rota de fuga",
    ],
    process: [
      "diagnóstico da cozinha, GLP, coifa e salão",
      "regularização do sistema de gás com laudo + ART",
      "troca de extintor pó ABC por classe K na cozinha",
      "protocolo CLCB e acompanhamento de eventual exigência",
    ],
    cost: "Restaurante/bar/padaria CLCB costuma ter custo entre baixo e médio — o GLP é o item mais caro quando precisa adequação. Coifa, extintores e sinalização são adequações mais baratas. Diagnóstico gratuito antecipa o orçamento real.",
    urgency: "CLCB vencido em estabelecimento de alimentação é interdição quase certa em vistoria — o CBPMESP fiscaliza com rigor maior por causa do GLP e da chama aberta na cozinha.",
    links: [
      { label: "renovação CLCB para restaurante", href: "/renovacao-clcb-restaurante-sao-paulo" },
      { label: "renovação CLCB para padaria", href: "/renovacao-clcb-padaria-sao-paulo" },
      { label: "laudo de estanqueidade de gás", href: "/laudo-estanqueidade-gas-sao-paulo" },
    ],
  },
  // CLCB Saúde
  clcbSaude: {
    title: "acessibilidade nas rotas, gases medicinais e exigências de planos de saúde",
    risk: "saídas com largura para cadeira de rodas e maca, oxigênio medicinal sinalizado, equipamentos elétricos sensíveis (raio-X, eletroterapia) com extintor adequado, e regularidade documental para credenciamento com convênios.",
    documents: [
      "comprovante de credenciamento ou ANS (quando aplicável)",
      "ART de instalação de oxigênio medicinal ou gases comprimidos",
      "extintor CO₂ na sala de raio-X / equipamentos digitais",
      "fotos da rota de evacuação com largura medida",
    ],
    failures: [
      "extintor pó ABC em sala de raio-X — danifica permanentemente o equipamento",
      "saída de emergência estreita ou com degraus — bloqueia evacuação de paciente em maca",
      "área de oxigênio sem sinalização de risco/comburente",
      "iluminação de emergência sem grau IP em ambiente úmido (hidroterapia)",
    ],
    process: [
      "diagnóstico técnico das salas e rotas de evacuação",
      "troca de extintores por sala (CO₂ para equipamentos, pó para áreas comuns)",
      "regularização de gases medicinais com ART quando houver",
      "protocolo CLCB e entrega de documentação para convênios",
    ],
    cost: "Clínicas pequenas (até 750 m²) têm custo menor com CLCB do que AVCB. O extintor CO₂ é o item de maior custo unitário, mas é exigência específica para salas com raio-X. Diagnóstico mostra o orçamento exato.",
    urgency: "CLCB vencido pode resultar em suspensão do credenciamento por planos de saúde — perda de repasse imediata. Regularização preventiva preserva fluxo financeiro da clínica.",
    links: [
      { label: "renovação CLCB para clínica médica", href: "/renovacao-clcb-clinica-sao-paulo" },
      { label: "renovação CLCB para odontológica", href: "/renovacao-clcb-odontologica-sao-paulo" },
      { label: "renovação CLCB para fisioterapia", href: "/renovacao-clcb-fisioterapia-sao-paulo" },
    ],
  },
  // AVCB Hotel
  hotel: {
    title: "evacuação noturna, brigada 24h e sistemas redundantes",
    risk: "hóspedes desconhecidos do prédio precisam evacuar à noite com pouca visibilidade, central de GLP da cozinha, geração de energia, lavanderia industrial e edificação tipicamente vertical com escada de emergência única.",
    documents: [
      "planta de cada andar com layout de apartamentos e rotas de fuga",
      "memorial técnico do sistema de alarme com detecção por apartamento",
      "ART de hidrantes, sprinkler (quando obrigatório) e iluminação de emergência",
      "comprovante de brigada 24h treinada e simulado de evacuação anual",
    ],
    failures: [
      "alarme com cobertura parcial — apartamento sem detector é reprovação",
      "escada de emergência com acúmulo de itens (estoque de roupa, materiais de limpeza)",
      "brigada documentada mas não escalada em todos os turnos (auditoria pode pegar)",
      "GLP da cozinha sem ART recente ou central fora da norma",
    ],
    process: [
      "vistoria andar por andar nos horarios de menor ocupação",
      "regularização de pendências em alarme, hidrante e sprinkler",
      "atualização da documentação de brigada e simulados",
      "protocolo no Via Fácil + acompanhamento de exigências",
    ],
    cost: "Hotéis têm custo maior pela complexidade de sistemas (alarme em apartamentos, hidrante em todos os andares, eventualmente sprinkler) e pelo dimensionamento de brigada 24h. Diagnóstico antecipa o orçamento — quanto mais sistemas em manutenção em dia, menor o custo final.",
    urgency: "Hotel com AVCB vencido sofre interdição com hóspedes hospedados — situação de maior impacto operacional e reputacional do setor. Plataformas (Booking, Expedia) também suspendem cadastro mediante denúncia de irregularidade.",
    links: [
      { label: "renovação AVCB para hotel", href: "/renovacao-avcb-hotel-sao-paulo" },
      { label: "alarme para hotel", href: "/sistema-alarme-incendio-hotel-avcb-sp" },
      { label: "sprinkler para hotel", href: "/sistema-de-sprinkler-para-hotel-sao-paulo" },
    ],
  },
  // AVCB Hospital
  hospital: {
    title: "evacuação assistida, gases medicinais e brigada hospitalar",
    risk: "pacientes acamados, idosos com mobilidade reduzida, gases medicinais (O₂, óxido nitroso, ar comprimido), equipamentos de suporte à vida que não podem ser desligados, alas isoladas por compartimentação corta-fogo.",
    documents: [
      "planta com alas, blocos cirúrgicos, UTI e demarcação de compartimentação",
      "ART de gases medicinais (oxigênio, óxido nitroso, ar comprimido)",
      "comprovante de brigada hospitalar com treinamento de evacuação de paciente",
      "laudo de portas corta-fogo e dampers entre alas",
    ],
    failures: [
      "compartimentação corta-fogo com porta travada aberta — anula o sistema",
      "central de gases medicinais sem ART ou com sinalização de risco ausente",
      "brigada documentada mas equipe sem treinamento hospitalar especifico",
      "extintor inadequado em sala de raio-X ou CTI (precisa CO₂)",
    ],
    process: [
      "vistoria por ala com a administração",
      "regularização de gases medicinais + compartimentação",
      "atualização da documentação de brigada hospitalar",
      "protocolo com Anvisa quando aplicável (alta complexidade)",
    ],
    cost: "Hospitais têm o custo mais elevado entre estabelecimentos de saúde pela combinação de sistemas redundantes obrigatórios, brigada 24h hospitalar e exigências específicas de gases medicinais. O retrofit de compartimentação é o item de maior impacto.",
    urgency: "AVCB vencido em hospital é interdição com pacientes internados — situação que precisa de plano de transferência emergencial. Risco civil e criminal direto da direção técnica em caso de sinistro.",
    links: [
      { label: "renovação AVCB para hospital", href: "/renovacao-avcb-hospital-clinica-sao-paulo" },
      { label: "alarme para hospital", href: "/alarme-de-incendio-hospital-clinica-sp" },
      { label: "sprinkler para hospital", href: "/sistema-de-sprinkler-para-hospital-sao-paulo" },
    ],
  },
  // AVCB Escola
  escola: {
    title: "evacuação rápida de crianças e simulados periódicos",
    risk: "concentração de alunos em horário de aula, crianças que precisam ser conduzidas pela equipe, laboratórios de ciências, cozinha industrial em escolas com refeitório, quadras cobertas com pouca ventilação.",
    documents: [
      "planta com salas, refeitório, laboratórios e quadras",
      "ART do projeto técnico + memorial de evacuação dimensionado para a lotação",
      "documentação de simulado de evacuação anual com participação dos alunos",
      "comprovante de brigada com professores treinados",
    ],
    failures: [
      "saída de emergência trancada durante o horário de aula (item gravíssimo)",
      "sinalização de emergência ausente nos corredores entre salas",
      "extintor distante demais de cozinha do refeitório (>15m)",
      "simulado de evacuação não documentado nos últimos 12 meses",
    ],
    process: [
      "vistoria nos horários sem aula (final de semana, recesso)",
      "adequação de sinalização e iluminação visíveis para crianças",
      "documentação de brigada + simulado anual",
      "protocolo + acompanhamento até emissão",
    ],
    cost: "Escolas têm custo intermediário. O ponto que mais impacta é o dimensionamento de saídas para evacuação rápida e a documentação de brigada com simulados. Reformas para criar segunda rota de fuga elevam significativamente o orçamento.",
    urgency: "AVCB vencido em escola pode resultar em fechamento administrativo pela Secretaria de Educação e Conselho Tutelar — situação especialmente crítica por envolver menores. Pais e responsáveis podem acionar a justiça.",
    links: [
      { label: "renovação AVCB para escola", href: "/renovacao-avcb-escola-sao-paulo" },
      { label: "AVCB para creche", href: "/avcb-para-creche-sao-paulo" },
      { label: "alarme para escola", href: "/alarme-de-incendio-escola-faculdade-sp" },
    ],
  },
  // AVCB Posto de Combustível
  posto: {
    title: "atmosfera inflamável, SPDA reforçado e brigada especializada",
    risk: "tanques subterrâneos de gasolina/etanol/diesel, bombas com vapores inflamáveis, descarga de caminhão-tanque diária, central de GLP para conveniência, aterramento elétrico crítico e atendimento 24h em muitos casos.",
    documents: [
      "ART de instalação dos tanques de combustível + laudo de estanqueidade",
      "projeto de SPDA conforme NBR 5419 atualizada",
      "memorial de descarga de combustível com procedimento operacional",
      "comprovante de brigada com treinamento NR-20 para combustível",
    ],
    failures: [
      "SPDA sem inspeção anual ou com cabos rompidos",
      "bomba de combustível sem aterramento testado nos últimos 12 meses",
      "extintor classe B/C em quantidade insuficiente nas bombas",
      "tanque com mais de 20 anos sem teste de estanqueidade recente",
    ],
    process: [
      "diagnóstico técnico do posto e da operação",
      "regularização de SPDA, aterramento e tanques",
      "atualização de brigada com curso NR-20",
      "protocolo com acompanhamento técnico até aprovação",
    ],
    cost: "Postos de combustível têm o custo entre os mais altos do AVCB pela combinação de SPDA reforçado, inspeção de tanques, brigada NR-20 e exigências da Anvisa/IBAMA quando aplicável. Substituição de tanque é o item de maior impacto.",
    urgency: "AVCB vencido em posto é interdição imediata pelo risco de explosão. Além disso, a ANP (Agência Nacional do Petróleo) também pode aplicar sanções por irregularidade documental.",
    links: [
      { label: "renovação AVCB para posto", href: "/renovacao-avcb-posto-combustivel-sao-paulo" },
      { label: "SPDA", href: "/spda" },
      { label: "AVCB para posto", href: "/avcb-posto-combustivel-sao-paulo" },
    ],
  },
  // AVCB Supermercado
  supermercado: {
    title: "produtos inflamáveis em prateleira, padaria e câmaras frias",
    risk: "álcool, aerossol, GLP em prateleira de varejo, padaria interna com forno e GLP, açougue com câmaras frigorificas usando gas refrigerante, alta circulação de carrinhos nas rotas de fuga e estoque vertical em prateleiras altas.",
    documents: [
      "planta com area de vendas, estoque, padaria, açougue e câmaras",
      "ART de instalação de GLP da padaria e de câmaras frigorificas",
      "memorial de carga de incêndio considerando produtos inflamáveis",
      "comprovante de brigada com treinamento de produto químico",
    ],
    failures: [
      "extintor pó ABC na padaria — não combate gordura em chamas",
      "rota de fuga bloqueada por exposição de produto em corredor",
      "GLP da padaria sem ART ou central fora da norma",
      "câmara fria com gás refrigerante R-22 (descontinuado) sem plano de substituição",
    ],
    process: [
      "diagnóstico por setor (padaria, açougue, depósito, área de venda)",
      "adequação de extintores por setor (classe K na padaria, CO₂ em equipamentos)",
      "regularização da central de GLP e câmaras frigorificas",
      "protocolo e acompanhamento",
    ],
    cost: "Supermercados têm custo intermediário a alto. O sprinkler em estoque vertical é o item de maior impacto quando obrigatório. Adequação de gas (GLP padaria, refrigerantes câmara) também pesa no orçamento.",
    urgency: "Supermercado com AVCB vencido sofre interdição com perda imediata de mercadoria perecível (câmaras desligadas após interdição = prejuízo de milhares).",
    links: [
      { label: "renovação AVCB para supermercado", href: "/renovacao-avcb-supermercado-sao-paulo" },
      { label: "sprinkler supermercado", href: "/sprinkler-supermercado-avcb-sp" },
      { label: "alarme supermercado", href: "/alarme-incendio-supermercado-avcb-sp" },
    ],
  },
  // AVCB Escritório/Comercial
  escritorio: {
    title: "alta densidade de equipamentos, cabeamento e prédios verticais",
    risk: "data centers internos com refrigeração crítica, racks de cabeamento, copa com forno/microondas, múltiplas empresas dividindo o andar, evacuação coordenada via escada única em prédios verticais, geração de calor por densidade de eletrônica.",
    documents: [
      "planta do andar/conjunto com layout das estações e copas",
      "memorial elétrico com carga instalada e dimensionamento de quadros",
      "ART de hidrantes em prédios acima de determinada altura",
      "documentação de brigada de andar treinada",
    ],
    failures: [
      "extintor inadequado em data center interno (precisa CO₂ ou agente limpo, não pó)",
      "rota de fuga obstruída por equipamento ou móvel",
      "cabeamento exposto que impede compartimentação do andar",
      "iluminação de emergência sem cobertura no corredor de saída",
    ],
    process: [
      "vistoria fora do horário comercial (final de semana, noite)",
      "adequação de extintores por área (CO₂ em TI, pó em comum)",
      "regularização de cabeamento e compartimentação",
      "documentação de brigada e simulado",
    ],
    cost: "Escritórios têm custo intermediário, com forte variação por tamanho. Coworkings e andares corporativos com múltiplas empresas têm orçamento maior pela complexidade de coordenação de brigada.",
    urgency: "AVCB vencido em prédio comercial pode resultar em embargo pela administração predial ou pela síndica, e auditoria de inquilinos corporativos pode quebrar contratos.",
    links: [
      { label: "renovação AVCB para escritório", href: "/renovacao-avcb-escritorio-sao-paulo" },
      { label: "alarme para comercial/escritório", href: "/alarme-de-incendio-comercial-escritorio-sp" },
      { label: "AVCB para escritório", href: "/avcb-comercial-escritorio-sao-paulo" },
    ],
  },
  default: {
    title: "documentos, vistoria e aprovação no Corpo de Bombeiros",
    risk: "área construida, altura, lotação, carga de incêndio, uso real do imóvel, sistemas existentes e historico de reformas ou mudancas de atividade.",
    documents: [
      "IPTU, CNPJ/CPF e dados do responsavel legal",
      "planta, croqui ou levantamento arquitetonico atualizado",
      "ART/RRT do responsavel tecnico e memoriais quando exigidos",
      "comprovantes de manutenção de extintores, iluminação, sinalização e sistemas instalados",
    ],
    failures: [
      "atividade declarada diferente do uso real do imóvel",
      "área, altura ou subsolo divergente da documentação",
      "sistemas de segurança instalados sem laudo, ART ou manutenção",
      "protocolo feito antes de corrigir falhas que seriam visiveis na vistoria",
    ],
    process: [
      "diagnóstico técnico e classificacao da ocupação",
      "levantamento de documentos, áreas e sistemas existentes",
      "adequacoes prioritarias antes do protocolo",
      "acompanhamento no Via Fácil Bombeiros ate emissão ou renovacao",
    ],
    cost: "O custo depende de área, ocupação, complexidade, necessidade de projeto, vistoria, laudos e adequacoes fisicas. A estimativa correta so aparece depois do diagnóstico, porque duas empresas com o mesmo CNAE podem ter riscos completamente diferentes.",
    urgency: "Regularizar antes da fiscalizacao reduz risco de multa, interdiçao, retrabalho técnico e perda de prazo comercial.",
    links: [
      { label: "AVCB em São Paulo", href: "/avcb-sao-paulo" },
      { label: "alarme de incêndio", href: "/alarme-incendio-sao-paulo" },
      { label: "hidrantes", href: "/hidrantes" },
    ],
  },
};

function pickProfile(slug: string) {
  // CLCB tem perfis dedicados — testa antes pra nao cair no default genérico
  if (slug.includes("clcb")) {
    if (slug.includes("restaurante") || slug.includes("bar") || slug.includes("padaria")) {
      return profiles.clcbAlimentacao;
    }
    if (slug.includes("clinica") || slug.includes("odontologica") || slug.includes("fisioterapia") || slug.includes("consultorio") || slug.includes("salao-beleza")) {
      return profiles.clcbSaude;
    }
    return profiles.clcbDefault;
  }
  // AVCB — perfis especificos
  if (slug.includes("condomínio") || slug.includes("condominio")) return profiles.condomínio;
  if (slug.includes("hotel") || slug.includes("pousada") || slug.includes("motel") || slug.includes("hostel")) return profiles.hotel;
  if (slug.includes("hospital") || slug.includes("casa-de-repouso")) return profiles.hospital;
  if (slug.includes("escola") || slug.includes("creche") || slug.includes("faculdade")) return profiles.escola;
  if (slug.includes("posto-combustivel") || slug.includes("posto-de-combustivel")) return profiles.posto;
  if (slug.includes("supermercado") || slug.includes("shopping")) return profiles.supermercado;
  if (slug.includes("escritorio") || slug.includes("comercial-escritorio")) return profiles.escritorio;
  if (slug.includes("restaurante") || slug.includes("bar")) return profiles.restaurante;
  if (slug.includes("galpao") || slug.includes("industr")) return profiles.galpao;
  return profiles.default;
}

export default function OccupationDepthBlock({ occupation, currentSlug }: OccupationDepthBlockProps) {
  const profile = pickProfile(currentSlug);

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="text-red-600 font-black text-xs uppercase tracking-widest">Análise para contratar</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 uppercase tracking-tighter">
              AVCB para {occupation}: {profile.title}
            </h2>
            <div className="space-y-5 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Quem pesquisa AVCB para {occupation} normalmente não quer apenas entender a lei. Quer saber se o imóvel
                passa na vistoria, quanto precisa corrigir e qual caminho reduz risco de Comunique-se. A análise técnica
                deve olhar {profile.risk}
              </p>
              <p>
                Antes de protocolar, a DRD2 cruza dados da edificação, documentos, sistemas instalados e exigencias das
                Instrucoes Técnicas do Corpo de Bombeiros. Quando o caso exige complemento, os servicos conectados mais
                comuns sao{" "}
                <Link href={profile.links[0].href} className="text-red-600 font-black underline">{profile.links[0].label}</Link>,{" "}
                <Link href={profile.links[1].href} className="text-red-600 font-black underline">{profile.links[1].label}</Link>{" "}
                e <Link href={profile.links[2].href} className="text-red-600 font-black underline">{profile.links[2].label}</Link>.
              </p>
              <p>{profile.cost}</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <FileText className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-black text-slate-900 uppercase italic">Documentos conferidos</h3>
              </div>
              <ul className="space-y-3">
                {profile.documents.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-700 font-bold leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-black text-slate-900 uppercase italic">Falhas que atrasam</h3>
              </div>
              <ul className="space-y-3">
                {profile.failures.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-700 font-bold leading-relaxed">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950 text-white border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <ClipboardCheck className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-black uppercase italic">Processo recomendado</h3>
              </div>
              <ol className="space-y-3">
                {profile.process.map((item, index) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300 font-bold leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-red-900 text-white border border-red-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5 text-red-100" />
                <h3 className="text-lg font-black uppercase italic">Por que agir agora</h3>
              </div>
              <p className="text-red-50 text-sm font-bold leading-relaxed mb-5">{profile.urgency}</p>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-700 hover:bg-slate-100 px-5 py-3 rounded-xl text-sm font-black uppercase transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Solicitar diagnóstico técnico
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
