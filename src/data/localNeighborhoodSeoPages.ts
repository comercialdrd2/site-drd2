export type LocalNeighborhoodSeoPage = {
  slug: string;
  name: string;
  zone: string;
  localRefs: string[];
  profile: string;
  buildings: string[];
  risks: string[];
  urgency: string;
  nearby: string[];
};

export const localNeighborhoods: LocalNeighborhoodSeoPage[] = [
  {
    slug: "penha",
    name: "Penha",
    zone: "Zona Leste",
    localRefs: ["Avenida Penha de Franca", "Avenida Amador Bueno da Veiga", "Largo do Rosario", "Metro Penha"],
    profile: "bairro tradicional com comércio de rua, galerias, servicos medicos, escolas, prédios residenciais antigos e imóveis adaptados para uso comercial",
    buildings: ["lojas de rua", "clínicas", "condomínios antigos", "escolas e pequenos mercados"],
    risks: ["rotas estreitas em imóveis antigos", "alteracao de layout sem atualizar planta", "sinalização desgastada", "laudos vencidos"],
    urgency: "Na Penha, muitos processos travam porque o imóvel mudou de uso ou ampliou atendimento sem revisar projeto, lotação e sistemas de proteção.",
    nearby: ["Tatuape", "Vila Matilde", "Vila Re", "Carrão"],
  },
  {
    slug: "casa-verde",
    name: "Casa Verde",
    zone: "Zona Norte",
    localRefs: ["Avenida Casa Verde", "Rua Zilda", "Avenida Braz Leme", "Ponte da Casa Verde"],
    profile: "regiao com condomínios, comércio local, oficinas, galpões pequenos, escolas e prédios que misturam uso residencial e servicos",
    buildings: ["condomínios residenciais", "oficinas", "comércios de bairro", "prédios mistos"],
    risks: ["AVCB vencido em prédios antigos", "SPDA sem laudo", "hidrante sem teste", "extintores fora de rota"],
    urgency: "Na Casa Verde, a renovacao costuma exigir conferencia de sistemas antigos e documentação de manutenção antes da vistoria.",
    nearby: ["Santana", "Limão", "Barra Funda", "Freguesia do O"],
  },
  {
    slug: "limao",
    name: "Limão",
    zone: "Zona Norte",
    localRefs: ["Avenida Deputado Emilio Carlos", "Avenida Nossa Senhora do O", "Marginal Tiete", "Rua Carolina Soares"],
    profile: "bairro com galpões, centros de distribuicao menores, comércio, condomínios e imóveis proximos a eixos de transporte",
    buildings: ["galpões", "condomínios", "lojas", "transportadoras e oficinas"],
    risks: ["carga de incêndio elevada", "rotas bloqueadas por estoque", "projeto antigo", "laudo elétrico pendente"],
    urgency: "No Limao, empresas proximas a eixos logisticos precisam resolver AVCB antes de fiscalizacao, seguro ou contrato de locacao.",
    nearby: ["Casa Verde", "Freguesia do O", "Santana", "Barra Funda"],
  },
  {
    slug: "jacana",
    name: "Jaçanã",
    zone: "Zona Norte",
    localRefs: ["Avenida Luis Stamatis", "Avenida Guapira", "Tucuruvi", "Horto Florestal"],
    profile: "regiao com comércio local, escolas, condomínios, pequenas indústrias e servicos que atendem a zona norte",
    buildings: ["escolas", "condomínios", "pequenas indústrias", "lojas e clínicas"],
    risks: ["sistemas sem manutenção", "mudanca de uso sem FAT", "sinalização incompleta", "brigada vencida"],
    urgency: "No Jaçanã, a dificuldade frequente e reunir documentos e adequar sistemas antes do vencimento do AVCB.",
    nearby: ["Tucuruvi", "Santana", "Vila Maria", "Tremembe"],
  },
  {
    slug: "freguesia-do-o",
    name: "Freguesia do O",
    zone: "Zona Norte",
    localRefs: ["Largo da Matriz", "Avenida Itaberaba", "Avenida Joao Paulo I", "Marginal Tiete"],
    profile: "bairro tradicional com comércio de rua, escolas, condomínios, igrejas, mercados e imóveis antigos adaptados",
    buildings: ["igrejas", "condomínios", "mercados", "lojas e escolas"],
    risks: ["imóvel antigo sem planta atual", "lotação divergente", "rotas estreitas", "SPDA e elétrica sem laudo"],
    urgency: "Na Freguesia do O, imóveis antigos precisam de diagnóstico antes do protocolo para evitar exigencias previsiveis.",
    nearby: ["Limão", "Brasilândia", "Casa Verde", "Pirituba"],
  },
  {
    slug: "carrao",
    name: "Carrão",
    zone: "Zona Leste",
    localRefs: ["Avenida Conselheiro Carrao", "Avenida Aricanduva", "Rua Taubate", "Metro Carrao"],
    profile: "bairro com comércio forte, restaurantes, clínicas, prédios residenciais e conexao direta com Tatuape e Aricanduva",
    buildings: ["restaurantes", "clínicas", "prédios comerciais", "condomínios"],
    risks: ["GLP sem memorial", "alarme sem teste", "rotas alteradas por reforma", "documentos vencidos"],
    urgency: "No Carrão, negocios em ruas comerciais precisam manter AVCB regular para alvará, seguro e atendimento ao público.",
    nearby: ["Tatuape", "Aricanduva", "Vila Formosa", "Penha"],
  },
  {
    slug: "vila-re",
    name: "Vila Re",
    zone: "Zona Leste",
    localRefs: ["Avenida Itinguçu", "Metro Patriarca-Vila Re", "Avenida Calim Eid", "Radial Leste"],
    profile: "regiao residencial e comercial com escolas, mercados, pequenas empresas, galpões leves e imóveis adaptados",
    buildings: ["escolas", "mercados", "condomínios", "pequenos galpões"],
    risks: ["projeto desatualizado", "extintores mal posicionados", "rota unica", "laudos ausentes"],
    urgency: "Na Vila Re, a regularização precisa considerar imóveis adaptados e atividades que cresceram sem atualizar o AVCB.",
    nearby: ["Penha", "Patriarca", "Itaquera", "Artur Alvim"],
  },
  {
    slug: "sapopemba",
    name: "Sapopemba",
    zone: "Zona Leste",
    localRefs: ["Avenida Sapopemba", "Monotrilho Sapopemba", "Avenida Vila Ema", "São Mateus"],
    profile: "bairro extenso com comércio popular, escolas, mercados, galpões menores, servicos e condomínios",
    buildings: ["mercados", "escolas", "lojas", "condomínios e galpões"],
    risks: ["área real divergente do cadastro", "sinalização insuficiente", "rotas improvisadas", "brigada sem reciclagem"],
    urgency: "Em Sapopemba, a prioridade e acertar o enquadramento e organizar documentos antes de solicitar vistoria.",
    nearby: ["Vila Prudente", "São Mateus", "Vila Ema", "Aricanduva"],
  },
  {
    slug: "aricanduva",
    name: "Aricanduva",
    zone: "Zona Leste",
    localRefs: ["Avenida Aricanduva", "Shopping Aricanduva", "Avenida Rio das Pedras", "Vila Formosa"],
    profile: "eixo comercial com shopping, centros de compra, galpões, lojas grandes, restaurantes e fluxo intenso de público",
    buildings: ["lojas grandes", "galpões", "restaurantes", "centros comerciais"],
    risks: ["alta lotação", "alarme e hidrante sem teste", "estoque obstruindo rota", "projeto sem atualizacao"],
    urgency: "Em Aricanduva, negocios de maior fluxo precisam de AVCB coerente com lotação, estoque e sistemas em funcionamento.",
    nearby: ["Carrão", "Vila Formosa", "Itaquera", "Sapopemba"],
  },
  {
    slug: "itaquera",
    name: "Itaquera",
    zone: "Zona Leste",
    localRefs: ["Avenida Jacu-Pessego", "Metro Itaquera", "Arena Corinthians", "Avenida Itaquera"],
    profile: "polo regional com shopping, escolas, clínicas, comércio intenso, galpões e grande circulacao de pessoas",
    buildings: ["shoppings e lojas", "clínicas", "escolas", "galpões e mercados"],
    risks: ["lotação alta", "documentação dispersa", "rotas com reforma", "laudos vencidos"],
    urgency: "Em Itaquera, a regularização precisa considerar fluxo de público e pressão comercial por alvará e funcionamento.",
    nearby: ["Vila Re", "Artur Alvim", "Guaianases", "São Miguel"],
  },
  {
    slug: "jabaquara",
    name: "Jabaquara",
    zone: "Zona Sul",
    localRefs: ["Terminal Jabaquara", "Avenida Engenheiro Armando de Arruda Pereira", "Metro Jabaquara", "Imigrantes"],
    profile: "bairro de conexao com grande fluxo, prédios, hotéis, escolas, clínicas, comércios e servicos proximos a corredores viarios",
    buildings: ["hotéis", "prédios comerciais", "clínicas", "escolas e lojas"],
    risks: ["rotas de fuga em prédios antigos", "laudo de SPDA pendente", "alarme sem manutenção", "AVCB vencido"],
    urgency: "No Jabaquara, imóveis com atendimento ao público precisam regularizar antes de fiscalizacao e renovacao de licenças.",
    nearby: ["Saúde", "Vila Mariana", "Campo Belo", "Santo Amaro"],
  },
  {
    slug: "vila-leopoldina",
    name: "Vila Leopoldina",
    zone: "Zona Oeste",
    localRefs: ["CEAGESP", "Avenida Imperatriz Leopoldina", "Rua Schilling", "Marginal Pinheiros"],
    profile: "regiao com condomínios novos, galpões, logistica, escritorios, studios, mercados e restaurantes",
    buildings: ["galpões", "condomínios", "escritorios", "restaurantes"],
    risks: ["mudanca de uso industrial para comercial", "hidrante sem teste", "SPDA sem laudo", "projeto antigo"],
    urgency: "Na Vila Leopoldina, retrofit e mudanca de uso exigem compatibilizacao para evitar AVCB fora da realidade atual.",
    nearby: ["Lapa", "Pinheiros", "Perdizes", "Barra Funda"],
  },
  {
    slug: "vila-prudente",
    name: "Vila Prudente",
    zone: "Zona Leste",
    localRefs: ["Metro Vila Prudente", "Avenida Paes de Barros", "Avenida Anhaia Mello", "Mooca"],
    profile: "bairro em verticalizacao com condomínios, faculdades, comércio, galpões remanescentes e prédios comerciais",
    buildings: ["condomínios", "faculdades", "lojas", "galpões e escritorios"],
    risks: ["AVCB antigo sem refletir reforma", "pressurizacao e escada sem laudo", "alarme vencido", "rotas alteradas"],
    urgency: "Na Vila Prudente, verticalizacao e reforma de imóveis antigos tornam a revisao do AVCB essencial.",
    nearby: ["Mooca", "Ipiranga", "Sapopemba", "Tatuape"],
  },
  {
    slug: "morumbi",
    name: "Morumbi",
    zone: "Zona Sul",
    localRefs: ["Avenida Giovanni Gronchi", "Avenida Morumbi", "Estadio do Morumbi", "Ponte do Morumbi"],
    profile: "bairro com condomínios de alto padrao, escolas, hospitais, clínicas, escritorios e empreendimentos de grande área",
    buildings: ["condomínios verticais", "escolas", "clínicas", "prédios corporativos"],
    risks: ["SPDA e pressurizacao sem laudo", "brigada vencida", "garagens sem sinalização", "sistemas sem teste"],
    urgency: "No Morumbi, administradoras e síndicos precisam controlar prazos de laudos para não perder a renovacao do AVCB.",
    nearby: ["Brooklin", "Vila Andrade", "Campo Belo", "Santo Amaro"],
  },
  {
    slug: "analia-franco",
    name: "Analia Franco",
    zone: "Zona Leste",
    localRefs: ["Shopping Analia Franco", "Avenida Regente Feijo", "Parque Ceret", "Vila Formosa"],
    profile: "regiao de condomínios, shopping, restaurantes, escolas, clínicas e comércio de maior padrao",
    buildings: ["condomínios", "restaurantes", "clínicas", "lojas e escolas"],
    risks: ["GLP sem atualizacao", "sistemas de prédio sem laudo", "rotas em garagens", "AVCB vencido"],
    urgency: "No Analia Franco, a exigencia costuma envolver condomínios e comércios com alto fluxo e documentação técnica vencida.",
    nearby: ["Tatuape", "Vila Formosa", "Carrão", "Mooca"],
  },
  {
    slug: "saude",
    name: "Saúde",
    zone: "Zona Sul",
    localRefs: ["Metro Saude", "Avenida Jabaquara", "Praça da Arvore", "Avenida Ricardo Jafet"],
    profile: "bairro com clínicas, consultorios, condomínios, escolas, comércio e prédios residenciais com áreas comuns",
    buildings: ["clínicas", "condomínios", "escolas", "lojas"],
    risks: ["gases medicinais sem ART", "sinalização incompleta", "SPDA sem medição", "laudos vencidos"],
    urgency: "Na Saúde, clínicas e consultorios precisam alinhar AVCB, laudos e licenças para evitar problemas com fiscalizacao.",
    nearby: ["Jabaquara", "Vila Mariana", "Ipiranga", "Moema"],
  },
  {
    slug: "ipiranga",
    name: "Ipiranga",
    zone: "Zona Sul",
    localRefs: ["Museu do Ipiranga", "Avenida Nazaré", "Rua Silva Bueno", "Avenida do Estado"],
    profile: "bairro tradicional com prédios antigos, escolas, comércio, restaurantes, indústrias remanescentes e imóveis adaptados",
    buildings: ["escolas", "restaurantes", "condomínios antigos", "galpões e lojas"],
    risks: ["imóvel antigo sem planta", "GLP em restaurantes", "rotas estreitas", "laudos elétricos pendentes"],
    urgency: "No Ipiranga, a idade dos imóveis torna essencial conferir projeto, rotas e sistemas antes da renovacao.",
    nearby: ["Vila Prudente", "Saúde", "Mooca", "Cambuci"],
  },
  {
    slug: "santana",
    name: "Santana",
    zone: "Zona Norte",
    localRefs: ["Avenida Braz Leme", "Rua Voluntarios da Patria", "Metro Santana", "Terminal Santana"],
    profile: "polo da zona norte com prédios comerciais, condomínios, escolas, clínicas, lojas e restaurantes",
    buildings: ["prédios comerciais", "condomínios", "clínicas", "escolas"],
    risks: ["pressurizacao sem laudo", "SPDA vencido", "rotas em garagens", "brigada sem reciclagem"],
    urgency: "Em Santana, a renovacao costuma depender de laudos de sistemas prediais e organizacao documental do condomínio.",
    nearby: ["Tucuruvi", "Casa Verde", "Jaçanã", "Vila Maria"],
  },
  {
    slug: "tucuruvi",
    name: "Tucuruvi",
    zone: "Zona Norte",
    localRefs: ["Metro Tucuruvi", "Avenida Tucuruvi", "Shopping Trimais", "Avenida Nova Cantareira"],
    profile: "bairro com prédios residenciais, comércio local, shopping, escolas, servicos e condomínios antigos",
    buildings: ["condomínios", "lojas", "escolas", "clínicas"],
    risks: ["sistemas antigos sem manutenção", "SPDA sem laudo", "rotas de fuga sem sinalização", "AVCB vencido"],
    urgency: "No Tucuruvi, condomínios e comércios precisam atualizar laudos e sistemas antes do vencimento.",
    nearby: ["Santana", "Jaçanã", "Mandaqui", "Parada Inglesa"],
  },
  {
    slug: "vila-madalena",
    name: "Vila Madalena",
    zone: "Zona Oeste",
    localRefs: ["Rua Aspicuelta", "Rua Harmonia", "Beco do Batman", "Metro Vila Madalena"],
    profile: "bairro de bares, restaurantes, casas de evento, hostels, estudios, escritorios criativos e imóveis adaptados",
    buildings: ["bares e restaurantes", "hostels", "casas de evento", "escritorios"],
    risks: ["lotação maior que projeto", "GLP sem memorial", "rotas bloqueadas", "som e evento sem controle documental"],
    urgency: "Na Vila Madalena, AVCB vencido pode impactar alvará, evento, seguro e operacao noturna.",
    nearby: ["Pinheiros", "Perdizes", "Sumarezinho", "Consolação"],
  },
  {
    slug: "consolacao",
    name: "Consolação",
    zone: "Centro Expandido",
    localRefs: ["Rua da Consolacao", "Avenida Paulista", "Avenida Angélica", "Mackenzie"],
    profile: "regiao com prédios comerciais, faculdades, teatros, clínicas, restaurantes, galerias e imóveis antigos",
    buildings: ["faculdades", "teatros", "prédios comerciais", "restaurantes"],
    risks: ["alta lotação", "imóvel antigo adaptado", "rotas complexas", "documentos vencidos"],
    urgency: "Na Consolação, a regularização exige atencao a lotação, rotas e sistemas de prédios antigos de uso misto.",
    nearby: ["Higienópolis", "Bela Vista", "República", "Vila Madalena"],
  },
  {
    slug: "liberdade",
    name: "Liberdade",
    zone: "Centro",
    localRefs: ["Praça da Liberdade", "Rua Galvao Bueno", "Avenida Liberdade", "Metro Liberdade"],
    profile: "bairro com restaurantes, mercados, galerias, escolas, clínicas, templos e prédios antigos com grande fluxo de visitantes",
    buildings: ["restaurantes", "galerias", "mercados", "prédios antigos"],
    risks: ["GLP em restaurantes", "rotas estreitas", "alta lotação em eventos", "sinalização insuficiente"],
    urgency: "Na Liberdade, a concentracao de restaurantes e fluxo turistico exige AVCB coerente com lotação e sistemas ativos.",
    nearby: ["Sé", "Bela Vista", "Cambuci", "Aclimação"],
  },
  {
    slug: "se",
    name: "Sé",
    zone: "Centro",
    localRefs: ["Praça da Sé", "Catedral da Sé", "Rua Direita", "Pateo do Collegio"],
    profile: "regiao central com prédios historicos, galerias, igrejas, comércio popular, escritorios e imóveis de uso misto",
    buildings: ["prédios historicos", "galerias", "igrejas", "comércio popular"],
    risks: ["edificação antiga", "rotas complexas", "instalação elétrica antiga", "projeto inexistente"],
    urgency: "Na Sé, imóveis antigos precisam de diagnóstico técnico cuidadoso para evitar exigencias em serie.",
    nearby: ["Liberdade", "República", "Bela Vista", "Brás"],
  },
  {
    slug: "barra-funda",
    name: "Barra Funda",
    zone: "Zona Oeste",
    localRefs: ["Terminal Barra Funda", "Avenida Marques de Sao Vicente", "Memorial da America Latina", "Avenida Francisco Matarazzo"],
    profile: "regiao com galpões convertidos, escritorios, eventos, universidades, centros logisticos urbanos e prédios residenciais novos",
    buildings: ["galpões retrofitados", "casas de evento", "escritorios", "condomínios"],
    risks: ["mudanca de uso sem projeto", "lotação de eventos", "hidrantes sem teste", "rotas alteradas"],
    urgency: "Na Barra Funda, retrofit e eventos exigem AVCB atualizado para uso real e público previsto.",
    nearby: ["Perdizes", "Casa Verde", "Lapa", "Higienópolis"],
  },
  {
    slug: "higienopolis",
    name: "Higienópolis",
    zone: "Centro Expandido",
    localRefs: ["Avenida Higienopolis", "Shopping Patio Higienopolis", "Praça Buenos Aires", "Santa Cecilia"],
    profile: "bairro com prédios residenciais antigos de alto padrao, escolas, hospitais, clínicas, comércio e edificios mistos",
    buildings: ["condomínios antigos", "escolas", "clínicas", "prédios mistos"],
    risks: ["SPDA sem medição", "pressurizacao sem laudo", "rotas em garagens", "projeto antigo"],
    urgency: "Em Higienópolis, condomínios antigos precisam controlar laudos e atualizar sistemas para renovar AVCB sem retrabalho.",
    nearby: ["Consolação", "Santa Cecilia", "Perdizes", "Barra Funda"],
  },
  {
    slug: "paraiso",
    name: "Paraíso",
    zone: "Centro Expandido",
    localRefs: ["Avenida Paulista", "Avenida Bernardino de Campos", "Metro Paraiso", "Rua Vergueiro"],
    profile: "regiao com hospitais, clínicas, escritorios, escolas, hotéis, prédios comerciais e grande circulacao de pessoas",
    buildings: ["clínicas e hospitais", "prédios comerciais", "hotéis", "escolas"],
    risks: ["gases medicinais", "alta lotação", "sistemas sem laudo", "rotas em prédios antigos"],
    urgency: "No Paraíso, a proximidade com polos de saude e escritorios torna o AVCB critico para licenças e continuidade do atendimento.",
    nearby: ["Vila Mariana", "Bela Vista", "Saúde", "Consolação"],
  },
  {
      "slug": "bela-vista",
      "name": "Bela Vista",
      "zone": "Centro",
      "localRefs": [
          "Av. Brigadeiro Luís Antônio",
          "Nove de Julho",
          "Treze de Maio"
      ],
      "profile": "alta concentração de edifícios antigos, cortiços reformados e condomínios de médio porte",
      "buildings": [
          "prédios residenciais antigos",
          "teatros e casas de espetáculo",
          "restaurantes e cantinas",
          "comércios de rua"
      ],
      "risks": [
          "Puxadinhos na cobertura",
          "Subsolos sem exaustão natural",
          "Armazenamento irregular de gás (P13)"
      ],
      "urgency": "Uma das maiores barreiras na Bela Vista é o acréscimo irregular de pavimentos ou fechamento de garagens ('puxadinhos' na cobertura ou subsolo). O Corpo de Bombeiros exige que a planta do AVCB bata com a realidade física. Se houver áreas não declaradas, o processo trava até a regularização ou demolição.",
      "nearby": [
          "Liberdade",
          "Consolação",
          "República",
          "Cambuci"
      ]
  },
  {
      "slug": "brooklin",
      "name": "Brooklin",
      "zone": "Zona Sul",
      "localRefs": [
          "Berrini",
          "Roberto Marinho",
          "Roque Petroni"
      ],
      "profile": "grande concentração de mega-empreendimentos mistos e lajes corporativas conectadas a flats residenciais",
      "buildings": [
          "torres corporativas",
          "condomínios residenciais",
          "restaurantes",
          "escritórios"
      ],
      "risks": [
          "Falta de compartimentação em pele de vidro",
          "Subsolos compartilhados com comércios",
          "Bombas subdimensionadas"
      ],
      "urgency": "Muitos prédios no Brooklin Novo possuem fachadas envidraçadas (pele de vidro). A norma estadual exige que haja compartimentação vertical entre os andares. Se o prédio não possui 'abas' de concreto entre um andar e outro para impedir que o fogo suba pela fachada de vidro, o AVCB é negado até que se instale uma barreira de fumaça interna.",
      "nearby": [
          "Campo Belo",
          "Itaim Bibi",
          "Santo Amaro",
          "Vila Olímpia"
      ]
  },
  {
      "slug": "campinas-barao-geraldo",
      "name": "Barão Geraldo",
      "zone": "Campinas",
      "localRefs": [
          "Av. Santa Isabel",
          "Av. Albino J. B. de Oliveira"
      ],
      "profile": "distrito universitário (UNICAMP), polos de tecnologia e repúblicas de estudantes",
      "buildings": [
          "faculdades e institutos",
          "repúblicas e condomínios",
          "restaurantes",
          "comércios"
      ],
      "risks": [
          "Gases medicinais e industriais sem laudo",
          "Alta carga de incêndio em bibliotecas",
          "Falta de treinamento de pânico em repúblicas"
      ],
      "urgency": "Laboratórios em Barão Geraldo são classificados como Risco Alto devido ao uso de gases e reagentes. Um AVCB vencido aqui pode travar verbas de pesquisa federais e internacionais que exigem padrões globais de segurança contra incêndio.",
      "nearby": [
          "Taquaral",
          "Cidade Universitária",
          "Guará",
          "Centro"
      ]
  },
  {
      "slug": "campinas-cambui",
      "name": "Cambuí",
      "zone": "Campinas",
      "localRefs": [
          "Av. Júlio de Mesquita",
          "Rua Coronel Quirino"
      ],
      "profile": "bairro mais valorizado de Campinas, com edifícios de alto padrão e gastronomia de elite",
      "buildings": [
          "restaurantes e bares",
          "clínicas e consultórios",
          "prédios residenciais",
          "escritórios"
      ],
      "risks": [
          "Dutos de coifa com gordura",
          "Sinalização decorativa fora de norma",
          "Portas corta-fogo sem manutenção"
      ],
      "urgency": "Em restaurantes do Cambuí, a vistoria do Bombeiro de Campinas foca quase exclusivamente no sistema de exaustão das cozinhas. O acúmulo de gordura em dutos é a causa nº 1 de incêndios em bairros gastronômicos.",
      "nearby": [
          "Centro",
          "Guanabara",
          "Castelo",
          "Nova Campinas"
      ]
  },
  {
      "slug": "campinas-castelo",
      "name": "Castelo",
      "zone": "Campinas",
      "localRefs": [
          "Av. João Erbolato",
          "Av. Andrade Neves"
      ],
      "profile": "bairro residencial consolidado com prédios de médio porte e forte setor de serviços",
      "buildings": [
          "prédios residenciais",
          "comércios de bairro",
          "clínicas",
          "escolas"
      ],
      "risks": [
          "Para-raios fora da norma NBR 5419",
          "Falta de corrimão em escadas antigas",
          "Extintores em altura errada"
      ],
      "urgency": "Em muitos prédios do Castelo, os para-raios instalados há 20 anos estão fora da norma atual (NBR 5419). Na vistoria para o AVCB, o Bombeiro exige o laudo com as novas medições de continuidade, o que frequentemente exige reformas na malha do topo do prédio.",
      "nearby": [
          "Taquaral",
          "Guanabara",
          "Jardim Chapadão",
          "Centro"
      ]
  },
  {
      "slug": "campinas-guanabara",
      "name": "Jardim Guanabara",
      "zone": "Campinas",
      "localRefs": [
          "Av. Barão de Itapura",
          "Av. Brasil"
      ],
      "profile": "polo de clínicas médicas, laboratórios e comércio especializado",
      "buildings": [
          "prédios residenciais",
          "comércios",
          "consultórios",
          "escolas"
      ],
      "risks": [
          "Armazenamento de reagentes irregular",
          "Falta de iluminação tátil",
          "Baterias de alarme vencidas"
      ],
      "urgency": "Em laboratórios e clínicas do Guanabara, a atenção do Bombeiro volta-se para o armazenamento de líquidos inflamáveis e gases. O projeto deve prever compartimentação total dessas áreas para que um pequeno vazamento não se transforme em tragédia.",
      "nearby": [
          "Cambuí",
          "Castelo",
          "Taquaral",
          "Centro"
      ]
  },
  {
      "slug": "campinas-mansoes-santo-antonio",
      "name": "Mansões Santo Antônio",
      "zone": "Campinas",
      "localRefs": [
          "Av. Hermas de Oliveira Penteado",
          "Rua João Vedovello"
      ],
      "profile": "bairro de altíssima densidade de novos edifícios de apartamentos",
      "buildings": [
          "condomínios residenciais",
          "clínicas",
          "comércios",
          "escritórios"
      ],
      "risks": [
          "Sacadas fechadas sem projeto",
          "Sensores de fumaça pintados por decoradores",
          "Falta de manutenção em bombas de pressurização"
      ],
      "urgency": "Em condomínios das Mansões, é recorrente a reprovação do AVCB por 'Comunique-se' devido a fechamentos de sacadas com vidro. Se a planta original não previa esse fechamento, a carga de incêndio muda e o projeto deve ser atualizado.",
      "nearby": [
          "Barão Geraldo",
          "Taquaral",
          "Cidade Universitária",
          "Guará"
      ]
  },
  {
      "slug": "campinas-taquaral",
      "name": "Taquaral",
      "zone": "Campinas",
      "localRefs": [
          "Av. Dr. Heitor Penteado",
          "Av. Nossa Senhora de Fátima"
      ],
      "profile": "bairro residencial familiar com grandes clubes e academias de alto porte",
      "buildings": [
          "condomínios verticais",
          "restaurantes",
          "academias",
          "comércios"
      ],
      "risks": [
          "Sistemas de som sem integração ao alarme",
          "Portas de saída trancadas com cadeado",
          "Falta de brigada para eventos"
      ],
      "urgency": "Clubes no Taquaral que realizam festas e eventos precisam de AVCB específico que contemple a lotação máxima de salões. Usar um salão para 500 pessoas quando a licença é para 200 é infração gravíssima com interdição imediata.",
      "nearby": [
          "Cambuí",
          "Castelo",
          "Barão Geraldo",
          "Centro"
      ]
  },
  {
      "slug": "campo-belo",
      "name": "Campo Belo",
      "zone": "Zona Sul",
      "localRefs": [
          "Rua Vieira de Morais",
          "Av. Vereador José Diniz",
          "Washington Luís"
      ],
      "profile": "bairro de altíssimo padrão, com edifícios de luxo recentes e prédios clássicos",
      "buildings": [
          "condomínios verticais",
          "comércios de bairro",
          "clínicas",
          "escritórios"
      ],
      "risks": [
          "Hall privativo descaracterizado",
          "Pressurização de escada ruidosa/desligada",
          "Falta de manutenção na casa de bombas"
      ],
      "urgency": "É muito comum no Campo Belo que o hall do elevador seja tratado como parte da sala de estar pelo morador (portas abertas, decoração em madeira, tapetes). Isso elimina a função de 'compartimentação de risco' que a porta corta-fogo deveria exercer, reprovando o andar na vistoria.",
      "nearby": [
          "Brooklin",
          "Moema",
          "Santo Amaro",
          "Jabaquara"
      ]
  },
  {
      "slug": "guarulhos-aeroporto",
      "name": "Região do Aeroporto",
      "zone": "Grande São Paulo",
      "localRefs": [
          "Rodovia Hélio Smidt",
          "Av. Jamil João Zarif"
      ],
      "profile": "galpões logísticos, hotéis de trânsito e infraestrutura aeroportuária",
      "buildings": [
          "galpões logísticos",
          "hotéis",
          "transportadoras",
          "centros de distribuição"
      ],
      "risks": [
          "Estocagem acima da altura permitida",
          "Bicos de sprinklers obstruídos",
          "Falta de laudo de estanqueidade de hidrantes"
      ],
      "urgency": "Em galpões logísticos próximos ao aeroporto, o Corpo de Bombeiros fiscaliza severamente a altura de empilhamento. Mercadorias próximas demais aos bicos de sprinklers anulam a eficácia do sistema, levando à reprovação sumária do AVCB.",
      "nearby": [
          "Cumbica",
          "Bonsucesso",
          "Centro",
          "Itapegica"
      ]
  },
  {
      "slug": "guarulhos-bonsucesso",
      "name": "Bonsucesso",
      "zone": "Grande São Paulo",
      "localRefs": [
          "Rodovia Presidente Dutra",
          "Av. Paschoal Thomeu"
      ],
      "profile": "polo industrial pesado e centros de distribuição às margens da Dutra",
      "buildings": [
          "galpões industriais",
          "centros logísticos",
          "comércios",
          "condomínios"
      ],
      "risks": [
          "Falta de bacias de contenção",
          "Brigada de incêndio desatualizada",
          "Hidrantes externos obstruídos"
      ],
      "urgency": "Nas indústrias de Bonsucesso, o maior risco é o 'efeito cascata'. Um incêndio mal combatido em um tanque de óleo ou solvente pode atingir indústrias vizinhas. Por isso, o Bombeiro exige planos de auxílio mútuo e sistemas de contenção de resíduos.",
      "nearby": [
          "Pimentas",
          "Aeroporto",
          "Cumbica",
          "Taboão"
      ]
  },
  {
      "slug": "guarulhos-centro",
      "name": "Centro de Guarulhos",
      "zone": "Grande São Paulo",
      "localRefs": [
          "Av. Paulo Faccini",
          "Av. Tiradentes",
          "Rua Felício Marcondes"
      ],
      "profile": "alta densidade comercial, prédios de escritórios e condomínios residenciais tradicionais",
      "buildings": [
          "prédios comerciais",
          "lojas de rua",
          "clínicas",
          "condomínios residenciais"
      ],
      "risks": [
          "Escadas fora de norma",
          "Centrais de alarme obsoletas",
          "Falta de iluminação de emergência"
      ],
      "urgency": "Em Guarulhos, a prefeitura e o Corpo de Bombeiros integram a fiscalização de forma rígida. Um edifício comercial no Centro sem AVCB válido é impedido de renovar o Alvará de Funcionamento anual, o que pode levar ao lacre de dezenas de escritórios e lojas simultaneamente.",
      "nearby": [
          "Vila Augusta",
          "Macedo",
          "Maia",
          "Gopoúva"
      ]
  },
  {
      "slug": "guarulhos-macedo",
      "name": "Macedo",
      "zone": "Grande São Paulo",
      "localRefs": [
          "Av. Monteiro Lobato",
          "Av. Papa Pio XII"
      ],
      "profile": "bairro misto com condomínios tradicionais e forte presença de serviços e clínicas",
      "buildings": [
          "condomínios residenciais",
          "comércios de bairro",
          "escolas",
          "prédios mistos"
      ],
      "risks": [
          "Planos de abandono inexistentes",
          "Sinalização tátil e visual precária",
          "Central de GLP irregular"
      ],
      "urgency": "Clínicas no Macedo que possuem internação ou procedimentos cirúrgicos são classificadas como Risco Especial. A ausência de AVCB válido aqui não gera apenas multas, mas a suspensão imediata do convênio médico e da vigilância sanitária.",
      "nearby": [
          "Centro",
          "Maia",
          "Vila Augusta",
          "Gopoúva"
      ]
  },
  {
      "slug": "guarulhos-maia",
      "name": "Parque Maia",
      "zone": "Grande São Paulo",
      "localRefs": [
          "Av. Bartholomeu de Carlos",
          "Av. Salgado Filho"
      ],
      "profile": "edifícios residenciais de altíssimo padrão e o shopping local",
      "buildings": [
          "prédios corporativos",
          "condomínios verticais",
          "comércios",
          "clínicas"
      ],
      "risks": [
          "Revestimento combustível em rotas de fuga",
          "Modificações em halls privativos",
          "Falta de laudo de para-raios"
      ],
      "urgency": "Em prédios de luxo no Maia, é frequente encontrarmos portas corta-fogo revestidas de madeira ou espelhos. Isso anula a certificação da porta. A DRD2 utiliza soluções técnicas (verniz retardante ou substituição estética) para manter o padrão e a segurança.",
      "nearby": [
          "Centro",
          "Macedo",
          "Vila Augusta",
          "Aeroporto"
      ]
  },
  {
      "slug": "guarulhos-pimentas",
      "name": "Pimentas",
      "zone": "Grande São Paulo",
      "localRefs": [
          "Estrada Juscelino Kubitschek de Oliveira",
          "Av. Jurema"
      ],
      "profile": "região de forte comércio popular, supermercados e infraestrutura de saúde",
      "buildings": [
          "comércios de rua",
          "galpões",
          "escolas",
          "condomínios residenciais"
      ],
      "risks": [
          "Corredores de saída obstruídos",
          "Lotação acima do permitido",
          "Extintores vencidos ou escondidos"
      ],
      "urgency": "Supermercados no Pimentas frequentemente utilizam áreas de estoque para exposição de produtos, reduzindo a largura dos corredores e obstruindo extintores. Isso gera multas imediatas em vistorias surpresa do Corpo de Bombeiros.",
      "nearby": [
          "Bonsucesso",
          "Cumbica",
          "Aeroporto",
          "Itaquaquecetuba"
      ]
  },
  {
      "slug": "guarulhos-vila-augusta",
      "name": "Vila Augusta",
      "zone": "Grande São Paulo",
      "localRefs": [
          "Av. Guarulhos",
          "Av. Pres. Humberto de Alencar Castelo Branco"
      ],
      "profile": "região de forte verticalização com megacondomínios clube recém-entregues",
      "buildings": [
          "condomínios novos",
          "comércios",
          "centros empresariais",
          "escolas"
      ],
      "risks": [
          "Bombas de incêndio travadas",
          "Detectores de fumaça sujos",
          "Portas corta-fogo desalinhadas"
      ],
      "urgency": "Em condomínios clube da Vila Augusta, é comum o sistema de alarme apresentar falhas por conta de reformas nos apartamentos. Poeira de gesso e pintura costumam 'cegar' os detectores de fumaça nos halls, gerando disparos falsos e a reprovação da central na vistoria.",
      "nearby": [
          "Centro",
          "Macedo",
          "Vila Galvão",
          "Gopoúva"
      ]
  },
  {
      "slug": "itaim-bibi",
      "name": "Itaim Bibi",
      "zone": "Zona Oeste",
      "localRefs": [
          "Faria Lima",
          "Juscelino Kubitschek",
          "João Cachoeira"
      ],
      "profile": "torres hiper-modernas, estúdios compactos de alto padrão e edifícios corporativos",
      "buildings": [
          "torres corporativas",
          "restaurantes e bares",
          "clínicas",
          "condomínios de alto padrão"
      ],
      "risks": [
          "Portas corta-fogo escoradas abertas",
          "Fechaduras biométricas sem destrave",
          "Detectores de fumaça cobertos"
      ],
      "urgency": "As portas corta-fogo em corredores longos de studios no Itaim vivem sendo escoradas com lixeiras por moradores rotativos ou faxineiras. O Corpo de Bombeiros de São Paulo aplica multas na pessoa jurídica (condomínio) caso chegue no local e encontre as portas abertas indevidamente, anulando o AVCB.",
      "nearby": [
          "Vila Olímpia",
          "Jardins",
          "Pinheiros",
          "Brooklin"
      ]
  },
  {
      "slug": "lapa",
      "name": "Lapa",
      "zone": "Zona Oeste",
      "localRefs": [
          "Rua Pio XI",
          "Guaicurus",
          "Cerro Corá",
          "Tito"
      ],
      "profile": "vila de antigas indústrias que deram lugar a modernos condomínios residenciais e comerciais",
      "buildings": [
          "galpões reconvertidos",
          "comércio de rua",
          "condomínios novos",
          "escolas"
      ],
      "risks": [
          "Falta de manutenção em prédios novos",
          "Cilindros de CO2 vazios",
          "Rotas de fuga obstruídas por lixo"
      ],
      "urgency": "Condomínios gigantes recém-entregues na Lapa costumam perder o primeiro AVCB (de 5 anos) por pura falta de manutenção. As construtoras entregam o sistema perfeito, mas a ausência de contratos preventivos faz com que mangueiras apodreçam e baterias de alarmes estourem antes da primeira renovação.",
      "nearby": [
          "Vila Leopoldina",
          "Pompeia",
          "Perdizes",
          "Barra Funda"
      ]
  },
  {
      "slug": "mooca",
      "name": "Mooca",
      "zone": "Zona Leste",
      "localRefs": [
          "Av. Paes de Barros",
          "Rua da Mooca",
          "Radial Leste"
      ],
      "profile": "histórico bairro industrial que hoje abriga grandes condomínios verticais e prédios antigos",
      "buildings": [
          "galpões industriais antigos",
          "condomínios novos",
          "cantinas e restaurantes",
          "comércios tradicionais"
      ],
      "risks": [
          "Modificação de áreas comuns pós-obra",
          "Extintores em locais obstruídos",
          "Automação de bombas em falha"
      ],
      "urgency": "Nos novos megacondomínios da Av. Paes de Barros, as áreas comuns (cinemas, quadras cobertas e academias) frequentemente superam a lotação permitida no projeto original, ou realizaram modificações decorativas pós-entrega das chaves sem aviso ao Corpo de Bombeiros.",
      "nearby": [
          "Brás",
          "Belém",
          "Tatuapé",
          "Cambuci"
      ]
  },
  {
      "slug": "pinheiros",
      "name": "Pinheiros",
      "zone": "Zona Oeste",
      "localRefs": [
          "Rua dos Pinheiros",
          "Harmonia",
          "Cardeal Arcoverde",
          "região"
      ],
      "profile": "restaurantes de alto padrão, bares e operações de delivery",
      "buildings": [
          "escritórios e coworkings",
          "bares e restaurantes",
          "clínicas",
          "edifícios residenciais"
      ],
      "risks": [
          "Mudança de uso sem aprovação",
          "Coifa e exaustão sem laudo técnico",
          "Saída de emergência bloqueada"
      ],
      "urgency": "Em Pinheiros, é comum que restaurantes abram em espaços que eram lojas ou escritórios — e a mudança de atividade sem comunicação ao CBPMESP é a principal causa de autuação. Um estabelecimento gastronômico exige sistemas de exaustão aprovados, detecção de incêndio na cozinha e saídas de emergência que um espaço comercial comum não precisa ter.",
      "nearby": [
          "Vila Madalena",
          "Itaim Bibi",
          "Butantã",
          "Jardins"
      ]
  },
  {
      "slug": "santo-amaro",
      "name": "Santo Amaro",
      "zone": "Zona Sul",
      "localRefs": [
          "Av. Adolfo Pinheiro",
          "João Dias",
          "Vereador José Diniz"
      ],
      "profile": "mix de grandes prédios antigos e forte verticalização comercial e residencial recente",
      "buildings": [
          "galpões e centros logísticos",
          "comércio popular",
          "escolas e faculdades",
          "prédios comerciais"
      ],
      "risks": [
          "Plantas defasadas (sem As-Built)",
          "Divergência de área construída",
          "Extintores em locais obstruídos"
      ],
      "urgency": "Em Santo Amaro, um problema frequente é a sobreposição de plantas. Com as reformas feitas nos anos 90, muitos prédios mudaram garagens e salões sem aprovar no Bombeiro. Hoje, a aprovação esbarra no erro da área construída declarada no IPTU vs. Bombeiros.",
      "nearby": [
          "Chácara Santo Antônio",
          "Campo Belo",
          "Socorro",
          "Brooklin"
      ]
  },
  {
      "slug": "santos-aparecida",
      "name": "Aparecida",
      "zone": "Litoral",
      "localRefs": [
          "Av. Epitácio Pessoa",
          "Av. Bartolomeu de Gusmão"
      ],
      "profile": "bairro residencial de grande porte, abrigando o maior shopping da região",
      "buildings": [
          "prédios residenciais",
          "comércios de bairro",
          "restaurantes",
          "pousadas"
      ],
      "risks": [
          "Sprinklers obstruídos em lojas",
          "Central de incêndio em 'bypass'",
          "Bombas de incêndio com vazamento"
      ],
      "urgency": "Em prédios residenciais da Aparecida, a substituição de portas corta-fogo por modelos 'comuns' em reformas de moradores é um problema crônico que trava a renovação do AVCB de todo o condomínio.",
      "nearby": [
          "Embaré",
          "Ponta da Praia",
          "Boqueirão",
          "Estuário"
      ]
  },
  {
      "slug": "santos-boqueirao",
      "name": "Boqueirão",
      "zone": "Litoral",
      "localRefs": [
          "Av. Conselheiro Nébias",
          "Av. Washington Luiz"
      ],
      "profile": "bairro tradicional, forte polo de universidades, hospitais e comércio de rua",
      "buildings": [
          "prédios residenciais e mistos",
          "comércios",
          "hotéis e pousadas",
          "clínicas"
      ],
      "risks": [
          "Saídas de emergência subdimensionadas",
          "Brigada de incêndio escolar/hospitalar falha",
          "Falta de iluminação tátil"
      ],
      "urgency": "Em faculdades e hospitais do Boqueirão, o Plano de Abandono (IT-17) é o documento mais cobrado. Não basta ter o equipamento; a equipe deve estar treinada para evacuar prédios complexos em menos de 5 minutos.",
      "nearby": [
          "Gonzaga",
          "Embaré",
          "Aparecida",
          "Centro"
      ]
  },
  {
      "slug": "santos-centro",
      "name": "Centro de Santos",
      "zone": "Litoral",
      "localRefs": [
          "Rua XV de Novembro",
          "Av. Visconde de São Leopoldo"
      ],
      "profile": "casarões históricos, sedes de empresas portuárias e órgãos públicos",
      "buildings": [
          "prédios históricos e comerciais",
          "escritórios",
          "armazéns",
          "comércios"
      ],
      "risks": [
          "Instalações elétricas históricas precárias",
          "Falta de reserva técnica de água",
          "Escadarias de madeira combustíveis"
      ],
      "urgency": "Em prédios históricos de Santos, o uso de fiação elétrica antiga (de pano ou sem aterramento) é a causa principal de incêndios. O Bombeiro exige o Laudo Elétrico (Termografia) para garantir que o prédio não vai pegar fogo por sobrecarga.",
      "nearby": [
          "Valongo",
          "Paquetá",
          "Vila Nova",
          "Boqueirão"
      ]
  },
  {
      "slug": "santos-embare",
      "name": "Embaré",
      "zone": "Litoral",
      "localRefs": [
          "Av. Bartolomeu de Gusmão",
          "Av. Epitácio Pessoa"
      ],
      "profile": "bairro residencial tradicional com grandes torres em frente à praia",
      "buildings": [
          "prédios residenciais",
          "restaurantes",
          "comércios",
          "escolas"
      ],
      "risks": [
          "Portas de hidrantes emperradas",
          "Mangueiras com mofo e furos",
          "Falta de luz de emergência em halls"
      ],
      "urgency": "Em prédios do Embaré, a maresia ataca as caixas de hidrantes nos corredores. Se a porta da caixa estiver enferrujada e travar, o Bombeiro reprova a vistoria. A DRD2 recomenda o uso de caixas de fibra de vidro para evitar esse problema crônico.",
      "nearby": [
          "Aparecida",
          "Boqueirão",
          "Ponta da Praia",
          "Gonzaga"
      ]
  },
  {
      "slug": "santos-gonzaga",
      "name": "Gonzaga",
      "zone": "Litoral",
      "localRefs": [
          "Av. Ana Costa",
          "Av. Vicente de Carvalho (Praia)"
      ],
      "profile": "alta densidade de prédios comerciais, shoppings e hotéis de frente para o mar",
      "buildings": [
          "hotéis e pousadas",
          "restaurantes e bares",
          "prédios residenciais",
          "lojas e galerias"
      ],
      "risks": [
          "Oxidação por maresia",
          "Tubulações de hidrante furadas",
          "Painéis elétricos oxidados"
      ],
      "urgency": "Em prédios do Gonzaga, é comum a rede de hidrantes em ferro galvanizado estar totalmente obstruída por oxidação interna. Durante a vistoria do 6º Grupamento de Bombeiros, a água simplesmente não sai no último andar, gerando reprovação imediata e multas.",
      "nearby": [
          "Boqueirão",
          "Pompéia",
          "José Menino",
          "Embaré"
      ]
  },
  {
      "slug": "santos-ponta-da-praia",
      "name": "Ponta da Praia",
      "zone": "Litoral",
      "localRefs": [
          "Av. Rei Alberto I",
          "Av. Almirante Saldanha da Gama"
      ],
      "profile": "bairro de luxo com novos megacondomínios e proximidade com o canal do porto",
      "buildings": [
          "prédios residenciais",
          "restaurantes",
          "clubes e marinas",
          "comércios"
      ],
      "risks": [
          "Pressurização de escada inoperante",
          "Sistemas de sprinklers sem manutenção",
          "Vazamentos em caixas d'água elevadas"
      ],
      "urgency": "Em grandes torres da Ponta da Praia, a pressurização das escadas é o ponto crítico. Se o ventilador no topo do prédio não atingir a pressão correta, a fumaça invade a rota de fuga e o Bombeiro reprova o prédio todo na hora.",
      "nearby": [
          "Aparecida",
          "Estuário",
          "Embaré",
          "Macuco"
      ]
  },
  {
      "slug": "tatuape",
      "name": "Tatuapé",
      "zone": "Zona Leste",
      "localRefs": [
          "Rua Apucarana",
          "Azevedo Soares",
          "Radial Leste"
      ],
      "profile": "grandes torres residenciais de alto padrão (um apartamento por andar) e megacondomínios",
      "buildings": [
          "condomínios verticais novos",
          "shopping centers",
          "comércio de rua",
          "clínicas"
      ],
      "risks": [
          "Halls privativos descaracterizados",
          "Pressurização de escada inoperante",
          "Painel de alarme em 'bypass'"
      ],
      "urgency": "Nos luxuosos prédios de 'um por andar' do Tatuapé, é comum os moradores incorporarem o hall do elevador à decoração do apartamento, retirando ou bloqueando a porta corta-fogo original. Essa prática reprova o AVCB de todo o condomínio imediatamente durante a vistoria.",
      "nearby": [
          "Anália Franco",
          "Carrão",
          "Penha",
          "Mooca"
      ]
  },
  {
      "slug": "vila-clementino",
      "name": "Vila Clementino",
      "zone": "Zona Sul",
      "localRefs": [
          "Rua Sena Madureira",
          "Av. Rubem Berta",
          "Borges Lagoa"
      ],
      "profile": "hospitais de referência, prédios de médicos e torres residenciais densas",
      "buildings": [
          "hospitais e clínicas",
          "prédios residenciais",
          "consultórios",
          "escolas"
      ],
      "risks": [
          "Mudança de uso não aprovada",
          "Falta de selagem corta-fogo em shafts",
          "Gases de clínica sem exaustão"
      ],
      "urgency": "Clínicas médicas dentro de edifícios projetados apenas para residência (sem separação de prumadas e com carga de energia diferente) são sumariamente barradas se tentarem tirar o laudo sozinhas. A aprovação exige um projeto rigoroso de mudança de uso das unidades envolvidas ou do prédio como um todo.",
      "nearby": [
          "Vila Mariana",
          "Saúde",
          "Moema",
          "Paraíso"
      ]
  },
  {
      "slug": "vila-mariana",
      "name": "Vila Mariana",
      "zone": "Zona Sul",
      "localRefs": [
          "Rua Domingos de Morais",
          "Sena Madureira",
          "Vergueiro"
      ],
      "profile": "bairro tradicional com muitos condomínios antigos de médio porte e clínicas",
      "buildings": [
          "prédios residenciais",
          "escolas e faculdades",
          "clínicas",
          "comércios de bairro"
      ],
      "risks": [
          "Quadros de luz obsoletos",
          "Falta de central de alarme",
          "Caixas d'água sem reserva de incêndio"
      ],
      "urgency": "Em prédios mais antigos da Vila Mariana, a renovação do AVCB quase sempre trava na exigência do Laudo das Instalações Elétricas. Quadros de luz de madeira ou chapa enferrujada com disjuntores antigos (NEMA) geram risco crônico de curto-circuito e são sumariamente reprovados.",
      "nearby": [
          "Vila Clementino",
          "Paraíso",
          "Saúde",
          "Chácara Klabin"
      ]
  },
  {
      "slug": "vila-olimpia",
      "name": "Vila Olímpia",
      "zone": "Zona Sul / Centro Expandido",
      "localRefs": [
          "Faria Lima",
          "Av. dos Bandeirantes",
          "Hélio Pellegrino"
      ],
      "profile": "polo corporativo de tecnologia (Big Techs) e apartamentos estúdio (lofts)",
      "buildings": [
          "torres corporativas",
          "casas noturnas e bares",
          "restaurantes",
          "condomínios residenciais"
      ],
      "risks": [
          "Detectores isolados manualmente no painel",
          "Gás instalado em sacadas fechadas sem laudo",
          "Rotas de fuga trancadas eletronicamente"
      ],
      "urgency": "Nos studios da Vila Olímpia, o morador (muitas vezes inquilino rotativo) cozinha, dorme e trabalha no mesmo ambiente. Isso faz com que alarmes falsos de fumaça causados por panelas no fogão sejam diários. Administradoras desativam o sistema de alarme dos corredores por exaustão de reclamações, cometendo um crime que o Bombeiro facilmente flagra na vistoria.",
      "nearby": [
          "Itaim Bibi",
          "Brooklin",
          "Moema",
          "Vila Nova Conceição"
      ]
  },
  {
      "slug": "agua-branca",
      "name": "Água Branca",
      "zone": "Zona Oeste",
      "localRefs": [
          "Av. Marquês de São Vicente",
          "Av. Francisco Matarazzo"
      ],
      "profile": "imensos condomínios-clube construídos onde antes funcionavam indústrias",
      "buildings": [
          "condomínios novos",
          "galpões reconvertidos",
          "centros empresariais",
          "comércios"
      ],
      "risks": [
          "Salão de festas sem barra antipânico",
          "RTI compartilhada com vazamentos",
          "Extintores CO2 sem carga"
      ],
      "urgency": "Em megacondomínios da Água Branca, o salão de festas e teatros internos muitas vezes exigem cálculo de Lotação de Público. O Bombeiro inspeciona rigorosamente se as portas de saída do salão possuem barras antipânico e se a iluminação de emergência atende a áreas de multidão.",
      "nearby": [
          "Barra Funda",
          "Lapa",
          "Perdizes",
          "Pompeia"
      ]
  },
  {
      "slug": "altos-de-santana",
      "name": "Altos de Santana",
      "zone": "Zona Norte",
      "localRefs": [
          "Rua Voluntários da Pátria",
          "Rua Alfredo Pujol"
      ],
      "profile": "região nobre da Zona Norte, com condomínios fechados e torres de luxo",
      "buildings": [
          "prédios residenciais",
          "comércios de bairro",
          "escolas",
          "clínicas"
      ],
      "risks": [
          "SPDA (Para-raios) reprovado",
          "Bombas de hidrante sem pressão",
          "Falta de ART do alarme"
      ],
      "urgency": "Os para-raios (SPDA) são a maior dor de cabeça nos Altos de Santana. Como é uma das regiões mais altas da cidade, a incidência de raios é massiva. Vistorias anuais apontam frequentemente que as hastes de descida estão rompidas ou os níveis de aterramento não atingem a resistência elétrica exigida pelas normas (ABNT NBR 5419).",
      "nearby": [
          "Santana",
          "Jardim São Paulo",
          "Tucuruvi",
          "Mandaqui"
      ]
  },
  {
      "slug": "chacara-klabin",
      "name": "Chácara Klabin",
      "zone": "Zona Sul",
      "localRefs": [
          "Av. Prefeito Passos",
          "Rua Maurício Francisco Klabin"
      ],
      "profile": "bairro exclusivamente residencial, com condomínios de alto padrão de torre única",
      "buildings": [
          "condomínios de alto padrão",
          "clínicas",
          "escritórios",
          "comércios"
      ],
      "risks": [
          "Fechamento de varandas sem projeto",
          "Churrasqueiras gourmet sem exaustão aprovada",
          "Portões de eclusa sem liberação automática"
      ],
      "urgency": "O envidraçamento de sacadas na Chácara Klabin é a principal causa de retenção de AVCB. O Bombeiro exige que, se houver envidraçamento total da fachada, seja comprovada a ventilação mínima da sala ou que o apartamento possua proteção adequada (sprinklers) para evitar o 'efeito estufa' em caso de incêndio.",
      "nearby": [
          "Vila Mariana",
          "Ipiranga",
          "Saúde",
          "Cambuci"
      ]
  },
  {
      "slug": "chacara-santo-antonio",
      "name": "Chácara Santo Antônio",
      "zone": "Zona Sul",
      "localRefs": [
          "Rua Américo Brasiliense",
          "Alexandre Dumas",
          "Verbo Divino"
      ],
      "profile": "condomínios mistos, torres residenciais e polos comerciais",
      "buildings": [
          "edifícios corporativos",
          "condomínios residenciais",
          "escolas",
          "restaurantes"
      ],
      "risks": [
          "Desintegração de alarmes no uso misto",
          "Exaustão comercial vazando para residencial",
          "Rotas de fuga compartilhadas irregularmente"
      ],
      "urgency": "A integração dos laudos é o pesadelo dos síndicos na região. O Corpo de Bombeiros exige que o sistema de alarme da parte residencial converse com a parte comercial, mas frequentemente há duas administrações diferentes (síndico vs. gestão do shopping) que não se falam.",
      "nearby": [
          "Santo Amaro",
          "Brooklin",
          "Granja Julieta",
          "Campo Belo"
      ]
  },
  {
      "slug": "cidade-moncoes",
      "name": "Cidade Monções",
      "zone": "Zona Sul",
      "localRefs": [
          "Av. Eng. Luís Carlos Berrini",
          "Rua Florida",
          "Rua Guararapes"
      ],
      "profile": "edifícios corporativos, torres mistas e hotéis convertidos em condomínios",
      "buildings": [
          "torres corporativas",
          "condomínios residenciais",
          "restaurantes",
          "academias"
      ],
      "risks": [
          "Detectores de fumaça cegos por gesso",
          "Compartimentação de shafts perfurada",
          "Automação BMS em 'bypass' contínuo"
      ],
      "urgency": "O grande risco nas torres da Berrini é o fechamento de varandas em edifícios que não possuem sprinklers e a obstrução dos detectores de fumaça (BMS) por conta do rebaixamento de teto (gesso) nas reformas de escritórios, o que 'cega' a central de alarme principal do prédio.",
      "nearby": [
          "Vila Olímpia",
          "Brooklin",
          "Itaim Bibi",
          "Campo Belo"
      ]
  },
  {
      "slug": "moema-indios",
      "name": "Moema Índios",
      "zone": "Zona Sul",
      "localRefs": [
          "Av. Ibirapuera",
          "Jurema",
          "Maracatins",
          "Nhambiquaras"
      ],
      "profile": "edifícios de alto padrão e condomínios de torre única",
      "buildings": [
          "condomínios verticais",
          "restaurantes",
          "clínicas",
          "comércios de rua"
      ],
      "risks": [
          "Ausência de Laudo do Gerador",
          "Sinalização de solo apagada no subsolo",
          "Carga de incêndio superior na garagem"
      ],
      "urgency": "Os grupos geradores a diesel são mandatórios na maioria das torres novas em Moema Índios. O que muitos síndicos esquecem é que o gerador exige um laudo específico assinado por engenheiro mecânico (Atestado do Grupo Motogerador), além do laudo elétrico. Sem os dois atestados, o AVCB é negado.",
      "nearby": [
          "Moema Pássaros",
          "Vila Nova Conceição",
          "Ibirapuera",
          "Campo Belo"
      ]
  },
  {
      "slug": "moema-passaros",
      "name": "Moema Pássaros",
      "zone": "Zona Sul",
      "localRefs": [
          "Av. Rouxinol",
          "Macuco",
          "Pavão",
          "Bem-te-vi"
      ],
      "profile": "edifícios residenciais tradicionais e apartamentos de alto luxo",
      "buildings": [
          "condomínios verticais de alto padrão",
          "restaurantes e cafés",
          "clínicas e consultórios",
          "lojas"
      ],
      "risks": [
          "Tubulação de gás vazando",
          "Rampa de cadeirante sem corrimão duplo",
          "Ausência de CMAR nas áreas de lazer"
      ],
      "urgency": "As tubulações de gás originais dos anos 80 são o calcanhar de Aquiles em Moema Pássaros. A Comgás realiza varreduras na região, mas a responsabilidade do condomínio é do relógio para dentro. A falta de laudo de estanqueidade (teste de vazamento) bloqueia o AVCB imediatamente.",
      "nearby": [
          "Moema Índios",
          "Campo Belo",
          "Vila Nova Conceição",
          "Ibirapuera"
      ]
  },
  {
      "slug": "vila-andrade",
      "name": "Vila Andrade",
      "zone": "Zona Sul",
      "localRefs": [
          "Av. Giovanni Gronchi",
          "Rua Itapaiúna",
          "Rua José Ramon Urtiza"
      ],
      "profile": "mega-condominios e torres residenciais fechadas",
      "buildings": [
          "condomínios verticais",
          "escolas particulares",
          "comércios",
          "clínicas"
      ],
      "risks": [
          "Quiosques não projetados",
          "Portões que bloqueiam viaturas",
          "Rede de hidrantes com perda de carga"
      ],
      "urgency": "As áreas de lazer estendidas (piscinas, salões de jogos, quiosques) frequentemente são construídas fora do escopo do projeto original. Na primeira renovação, o Corpo de Bombeiros fiscaliza essas adições. Qualquer quiosque ou cobertura com mais de 750m² adicionados ao todo sem aprovação prévia gera autuação imediata.",
      "nearby": [
          "Morumbi",
          "Campo Limpo",
          "Paraisópolis",
          "Vila Sônia"
      ]
  },
  {
      "slug": "vila-ipojuca",
      "name": "Vila Ipojuca",
      "zone": "Zona Oeste",
      "localRefs": [
          "Rua Cerro Corá",
          "Rua Tonelero"
      ],
      "profile": "bairro de forte transição, com pequenas vilas e edifícios torre única subindo",
      "buildings": [
          "prédios residenciais",
          "comércios de bairro",
          "escritórios",
          "escolas"
      ],
      "risks": [
          "Recalque obstruído na calçada",
          "Vagas de visitantes em cima da sinalização",
          "Acúmulo de lixo na escada"
      ],
      "urgency": "Nas ruas íngremes e apertadas da Vila Ipojuca, o Bombeiro é extremamente rigoroso com o acesso externo. Se o recalque (registro de água na calçada) estiver bloqueado por lixeiras, jardineiras ou vagas para visitantes clandestinas, o condomínio é sumariamente reprovado.",
      "nearby": [
          "Lapa",
          "Pompeia",
          "Perdizes",
          "Vila Romana"
      ]
  },
  {
      "slug": "vila-nova-conceicao",
      "name": "Vila Nova Conceição",
      "zone": "Zona Sul",
      "localRefs": [
          "Av. Hélio Pellegrino",
          "República do Líbano",
          "Afonso Braz"
      ],
      "profile": "edifícios residenciais de altíssimo padrão próximos ao Parque Ibirapuera",
      "buildings": [
          "condomínios de altíssimo padrão",
          "restaurantes",
          "galerias e lojas",
          "consultórios"
      ],
      "risks": [
          "Portas corta-fogo descaracterizadas",
          "Sprinklers isolados ou pintados",
          "Falta de ART do gerador"
      ],
      "urgency": "Reformas de altíssimo padrão nos apartamentos costumam alterar portas corta-fogo (para blindadas ou decoradas) e suprimir chuveiros automáticos (sprinklers) por razões estéticas — infrações graves que o Corpo de Bombeiros reprova instantaneamente.",
      "nearby": [
          "Moema",
          "Itaim Bibi",
          "Vila Olímpia",
          "Ibirapuera"
      ]
  },
  {
      "slug": "jardins",
      "name": "Jardins",
      "zone": "Zona Oeste / Sul",
      "localRefs": [
          "Rua Augusta",
          "Oscar Freire",
          "Av. Brasil",
          "Nove de Julho"
      ],
      "profile": "edifícios residenciais clássicos e torres comerciais antigas",
      "buildings": [
          "condomínios de alto padrão",
          "restaurantes e casas de gastronomia",
          "galerias e lojas",
          "clínicas e consultórios"
      ],
      "risks": [
          "Caixa de escada sem ventilação",
          "Hidrantes antigos fora de norma",
          "Gás encanado sem estanqueidade"
      ],
      "urgency": "Muitos prédios nos Jardins têm caixas de escada com ventilação inadequada ou degraus fora da norma (bocel). O Corpo de Bombeiros exige adequações físicas ou a aprovação de uma FAT (Formulário de Atendimento Técnico) com medidas compensatórias de segurança.",
      "nearby": [
          "Consolação",
          "Itaim Bibi",
          "Pinheiros",
          "Bela Vista"
      ]
  },
  {
      "slug": "moema",
      "name": "Moema",
      "zone": "Zona Sul",
      "localRefs": [
          "Av. Ibirapuera",
          "República do Líbano",
          "Indianópolis"
      ],
      "profile": "edifícios residenciais verticais de alto padrão, muitos construídos nas décadas de 80 e 90",
      "buildings": [
          "condomínios verticais de alto padrão",
          "restaurantes",
          "clínicas",
          "lojas e comércios"
      ],
      "risks": [
          "Mangueiras de incêndio ressecadas",
          "Sinalização de emergência defasada",
          "Portas corta-fogo desreguladas"
      ],
      "urgency": "Um problema endêmico em Moema é a reprovação de AVCB devido ao desgaste das redes de hidrantes. Tubulações de ferro galvanizado instaladas nos anos 80 frequentemente não suportam o teste de pressão hidrostática exigido hoje pelo CBPMESP, apresentando microvazamentos invisíveis a olho nu.",
      "nearby": [
          "Vila Nova Conceição",
          "Campo Belo",
          "Ibirapuera",
          "Vila Clementino"
      ]
  },
  {
      "slug": "perdizes",
      "name": "Perdizes",
      "zone": "Zona Oeste",
      "localRefs": [
          "Av. Sumaré",
          "Alfonso Bovero",
          "Rua Cardoso de Almeida"
      ],
      "profile": "condomínios verticais de alto padrão em relevo acentuado",
      "buildings": [
          "prédios residenciais",
          "universidades e escolas",
          "comércios de bairro",
          "clínicas"
      ],
      "risks": [
          "Exaustão de subsolos defeituosa",
          "Baterias de alarme inoperantes",
          "Hidrantes de recalque inacessíveis"
      ],
      "urgency": "Muitos condomínios em Perdizes têm mais de 3 níveis de subsolo. Durante a renovação do AVCB, os fiscais focam agressivamente nos exaustores de fumaça das garagens e nas luzes de emergência dessas áreas críticas, que frequentemente estão queimadas ou sem bateria.",
      "nearby": [
          "Pompeia",
          "Barra Funda",
          "Água Branca",
          "Vila Ipojuca"
      ]
  },
  {
      "slug": "bom-retiro",
      "name": "Bom Retiro",
      "zone": "Centro",
      "localRefs": [
          "Rua José Paulino",
          "Rua Silva Pinto",
          "Rua Três Rios",
          "Estação Luz"
      ],
      "profile": "polo de confecções e comércio atacadista com lojas, oficinas de costura e depósitos em prédios antigos",
      "buildings": [
          "lojas de confecção",
          "depósitos e estoques",
          "oficinas",
          "prédios comerciais antigos"
      ],
      "risks": [
          "carga de incêndio alta (tecidos)",
          "instalações elétricas sobrecarregadas",
          "estoque bloqueando rotas de fuga",
          "prédios antigos sem compartimentação"
      ],
      "urgency": "No Bom Retiro, o volume de tecido estocado eleva a carga de incêndio e a fiscalização é frequente nas ruas de comércio — CLCB ou AVCB vencido costuma virar autuação rápida.",
      "nearby": [
          "Luz",
          "Santa Cecília",
          "Casa Verde",
          "Barra Funda"
      ]
  },
  {
      "slug": "butanta",
      "name": "Butantã",
      "zone": "Zona Oeste",
      "localRefs": [
          "Av. Vital Brasil",
          "Av. Corifeu de Azevedo Marques",
          "Cidade Universitária",
          "Metrô Butantã"
      ],
      "profile": "região universitária com comércio de rua, clínicas, escolas, laboratórios e condomínios residenciais",
      "buildings": [
          "clínicas e laboratórios",
          "escolas e cursinhos",
          "comércios de rua",
          "condomínios residenciais"
      ],
      "risks": [
          "laboratórios com produtos químicos",
          "imóveis adaptados sem novo projeto",
          "laudos vencidos",
          "rotas de fuga estreitas"
      ],
      "urgency": "No Butantã, imóveis residenciais convertidos em clínicas e cursinhos costumam operar com projeto desatualizado — divergência que reprova a vistoria do Corpo de Bombeiros.",
      "nearby": [
          "Pinheiros",
          "Rio Pequeno",
          "Vila Sônia",
          "Morumbi"
      ]
  },
  {
      "slug": "campo-grande",
      "name": "Campo Grande",
      "zone": "Zona Sul",
      "localRefs": [
          "Av. Nossa Senhora do Sabará",
          "Av. Interlagos",
          "Aeroporto de Congonhas (proximidade)",
          "Av. Nações Unidas"
      ],
      "profile": "corredor de comércios, concessionárias, galpões e condomínios residenciais na saída para Interlagos",
      "buildings": [
          "concessionárias",
          "galpões comerciais",
          "condomínios residenciais",
          "comércios de avenida"
      ],
      "risks": [
          "galpões sem hidrante dimensionado",
          "mezaninos construídos sem projeto",
          "extintores e alarmes vencidos"
      ],
      "urgency": "No Campo Grande, galpões e concessionárias com área ampliada sem atualização do projeto técnico são a principal causa de exigência na vistoria.",
      "nearby": [
          "Interlagos",
          "Socorro",
          "Santo Amaro",
          "Cidade Ademar"
      ]
  },
  {
      "slug": "pompeia",
      "name": "Pompeia",
      "zone": "Zona Oeste",
      "localRefs": [
          "Av. Pompeia",
          "Rua Barão do Bananal",
          "Av. Francisco Matarazzo (proximidade)",
          "SESC Pompeia"
      ],
      "profile": "bairro residencial e comercial com prédios novos, casas comerciais, bares, restaurantes e academias",
      "buildings": [
          "prédios residenciais",
          "bares e restaurantes",
          "academias",
          "comércios de rua"
      ],
      "risks": [
          "casas adaptadas para comércio sem projeto",
          "GLP em cozinhas sem central regularizada",
          "iluminação de emergência ausente"
      ],
      "urgency": "Na Pompeia, bares e restaurantes em casas adaptadas frequentemente operam sem enquadramento correto no Corpo de Bombeiros — risco direto de interdição.",
      "nearby": [
          "Perdizes",
          "Lapa",
          "Vila Pompeia",
          "Barra Funda"
      ]
  },
  {
      "slug": "republica",
      "name": "República",
      "zone": "Centro",
      "localRefs": [
          "Praça da República",
          "Av. Ipiranga",
          "Av. São João",
          "Rua Barão de Itapetininga"
      ],
      "profile": "centro histórico com prédios comerciais antigos, hotéis, hostels, teatros e comércio popular",
      "buildings": [
          "prédios comerciais antigos",
          "hotéis e hostels",
          "teatros",
          "lojas populares"
      ],
      "risks": [
          "edifícios antigos sem compartimentação",
          "escadas sem porta corta-fogo",
          "sistemas de hidrante desativados",
          "alta ocupação em hostels"
      ],
      "urgency": "Na República, prédios das décadas de 40 a 70 exigem adequação pesada de rotas de fuga e sistemas — e a fiscalização no centro é a mais ativa da cidade.",
      "nearby": [
          "Sé",
          "Santa Cecília",
          "Consolação",
          "Bela Vista"
      ]
  },
  {
      "slug": "sacoma",
      "name": "Sacomã",
      "zone": "Zona Sul",
      "localRefs": [
          "Av. do Cursino (proximidade)",
          "Estrada das Lágrimas",
          "Terminal Sacomã",
          "Av. Anchieta"
      ],
      "profile": "região de condomínios residenciais, comércio local, transportadoras e galpões próximos à Anchieta",
      "buildings": [
          "condomínios residenciais",
          "transportadoras",
          "galpões",
          "comércios de bairro"
      ],
      "risks": [
          "galpões logísticos sem AVCB atualizado",
          "condomínios com hidrantes sem teste",
          "documentação de brigada ausente"
      ],
      "urgency": "No Sacomã, a proximidade com o eixo Anchieta concentra transportadoras cujo AVCB vencido trava contratos e seguro de carga.",
      "nearby": [
          "Ipiranga",
          "Cursino",
          "Heliópolis",
          "São Caetano do Sul"
      ]
  },
  {
      "slug": "santa-cecilia",
      "name": "Santa Cecília",
      "zone": "Centro",
      "localRefs": [
          "Av. Angélica",
          "Rua das Palmeiras",
          "Largo Santa Cecília",
          "Minhocão"
      ],
      "profile": "bairro central com prédios residenciais antigos, clínicas, escritórios e comércio de rua",
      "buildings": [
          "prédios residenciais antigos",
          "clínicas",
          "escritórios",
          "comércios"
      ],
      "risks": [
          "edifícios antigos sem retrofit de segurança",
          "elétrica antiga sem laudo",
          "AVCB de condomínio vencido"
      ],
      "urgency": "Em Santa Cecília, o parque de edifícios antigos exige laudo elétrico e adequação de rotas — condomínios com AVCB vencido são alvo constante de notificação.",
      "nearby": [
          "Higienópolis",
          "Campos Elíseos",
          "República",
          "Barra Funda"
      ]
  },
  {
      "slug": "aclimacao",
      "name": "Aclimação",
      "zone": "Centro-Sul",
      "localRefs": [
          "Parque da Aclimação",
          "Rua Muniz de Souza",
          "Av. da Aclimação",
          "Rua Pires da Mota"
      ],
      "profile": "bairro residencial arborizado com prédios, clínicas, escolas e comércio de bairro",
      "buildings": [
          "prédios residenciais",
          "clínicas e consultórios",
          "escolas",
          "comércios de bairro"
      ],
      "risks": [
          "condomínios com sistemas antigos",
          "clínicas em casas adaptadas",
          "laudos e ARTs vencidos"
      ],
      "urgency": "Na Aclimação, o perfil de condomínios de médio porte faz da renovação de AVCB uma pauta recorrente de assembleia — atrasar cobra caro do síndico.",
      "nearby": [
          "Cambuci",
          "Vila Mariana",
          "Liberdade",
          "Ipiranga"
      ]
  },
  {
      "slug": "agua-rasa",
      "name": "Água Rasa",
      "zone": "Zona Leste",
      "localRefs": [
          "Av. Sapopemba (trecho inicial)",
          "Rua do Oratório",
          "Av. Vila Ema",
          "Praça Silvio Romero (proximidade)"
      ],
      "profile": "bairro misto com residências, pequenas indústrias, oficinas, comércio de rua e condomínios novos",
      "buildings": [
          "pequenas indústrias",
          "oficinas",
          "condomínios novos",
          "comércios de rua"
      ],
      "risks": [
          "oficinas com solda e inflamáveis",
          "indústrias sem projeto atualizado",
          "extintores fora do prazo"
      ],
      "urgency": "Na Água Rasa, o uso misto industrial-residencial coloca as oficinas e pequenas fábricas na mira da fiscalização — CLCB errado para o risco real é reprovação certa.",
      "nearby": [
          "Mooca",
          "Vila Prudente",
          "Tatuapé",
          "Belém"
      ]
  },
  {
      "slug": "belem",
      "name": "Belém",
      "zone": "Zona Leste",
      "localRefs": [
          "Av. Celso Garcia",
          "Rua Belém",
          "Metrô Belém",
          "Av. Álvaro Ramos"
      ],
      "profile": "antigo polo fabril em reconversão, com galpões, comércios, igrejas e condomínios novos",
      "buildings": [
          "galpões reconvertidos",
          "comércios",
          "templos religiosos",
          "condomínios novos"
      ],
      "risks": [
          "galpões com mudança de uso sem regularização",
          "templos com lotação alta",
          "sistemas de alarme ausentes"
      ],
      "urgency": "No Belém, galpões fabris convertidos em templos, mercados e eventos precisam de novo enquadramento — o uso atual raramente bate com o projeto original.",
      "nearby": [
          "Mooca",
          "Brás",
          "Tatuapé",
          "Água Rasa"
      ]
  },
  {
      "slug": "bras",
      "name": "Brás",
      "zone": "Zona Leste",
      "localRefs": [
          "Rua Oriente",
          "Largo da Concórdia",
          "Rua Maria Marcolina",
          "Estação Brás"
      ],
      "profile": "maior polo de comércio popular têxtil da cidade, com lojas, boxes, depósitos e confecções",
      "buildings": [
          "lojas e boxes",
          "depósitos de tecido",
          "confecções",
          "galerias comerciais"
      ],
      "risks": [
          "carga de incêndio altíssima (tecidos)",
          "corredores obstruídos por mercadoria",
          "instalações elétricas improvisadas",
          "galerias sem saídas dimensionadas"
      ],
      "urgency": "No Brás, histórico de incêndios em depósitos têxteis fez a fiscalização apertar: comércio sem CLCB/AVCB válido corre risco real de lacração.",
      "nearby": [
          "Belém",
          "Mooca",
          "Pari",
          "Sé"
      ]
  },
  {
      "slug": "brasilandia",
      "name": "Brasilândia",
      "zone": "Zona Norte",
      "localRefs": [
          "Av. João Paulo I",
          "Av. Deputado Cantídio Sampaio",
          "Estrada do Sabão",
          "Vila Brasilândia"
      ],
      "profile": "distrito residencial denso com comércio local, escolas, templos e pequenos mercados",
      "buildings": [
          "comércios de bairro",
          "escolas",
          "templos religiosos",
          "mercados de vizinhança"
      ],
      "risks": [
          "comércios sem CLCB",
          "GLP sem central regularizada",
          "extintores e iluminação vencidos"
      ],
      "urgency": "Na Brasilândia, mercados e templos com público crescente precisam regularizar a licença do Corpo de Bombeiros antes que a fiscalização chegue — o custo da adequação preventiva é muito menor.",
      "nearby": [
          "Freguesia do Ó",
          "Cachoeirinha",
          "Limão",
          "Pirituba"
      ]
  },
  {
      "slug": "cambuci",
      "name": "Cambuci",
      "zone": "Centro-Sul",
      "localRefs": [
          "Av. Lacerda Franco",
          "Largo do Cambuci",
          "Rua Lavapés",
          "Av. Dom Pedro I"
      ],
      "profile": "bairro tradicional com galpões, gráficas, comércios, condomínios novos e casas antigas",
      "buildings": [
          "galpões e gráficas",
          "condomínios novos",
          "comércios",
          "casas comerciais"
      ],
      "risks": [
          "gráficas com inflamáveis",
          "galpões antigos sem compartimentação",
          "projetos desatualizados"
      ],
      "urgency": "No Cambuci, gráficas e pequenos galpões acumulam solventes e papel — carga de incêndio que exige sistema e licença compatíveis com o risco real.",
      "nearby": [
          "Aclimação",
          "Liberdade",
          "Ipiranga",
          "Mooca"
      ]
  },
  {
      "slug": "campo-limpo",
      "name": "Campo Limpo",
      "zone": "Zona Sul",
      "localRefs": [
          "Estrada do Campo Limpo",
          "Av. Carlos Lacerda",
          "Terminal Campo Limpo",
          "Praça Samuel Sabatini (região)"
      ],
      "profile": "distrito populoso com comércio intenso de rua, supermercados, escolas e condomínios populares",
      "buildings": [
          "supermercados",
          "comércios de rua",
          "escolas",
          "condomínios populares"
      ],
      "risks": [
          "supermercados sem hidrante testado",
          "escolas com alvará vencido",
          "rotas de fuga obstruídas"
      ],
      "urgency": "No Campo Limpo, supermercados e escolas concentram a atenção da fiscalização — a renovação em dia evita interdição em plena operação.",
      "nearby": [
          "Capão Redondo",
          "Vila Andrade",
          "Taboão da Serra",
          "M'Boi Mirim"
      ]
  },
  {
      "slug": "cangaiba",
      "name": "Cangaíba",
      "zone": "Zona Leste",
      "localRefs": [
          "Av. Cangaíba",
          "Rua Maria Cursi (região)",
          "Parque Ecológico do Tietê",
          "Av. São Miguel (proximidade)"
      ],
      "profile": "bairro residencial com comércio local, escolas, igrejas e pequenos galpões",
      "buildings": [
          "comércios locais",
          "escolas",
          "igrejas",
          "pequenos galpões"
      ],
      "risks": [
          "comércios sem licença do Corpo de Bombeiros",
          "igrejas com lotação acima do projeto",
          "manutenção de extintores vencida"
      ],
      "urgency": "No Cangaíba, o crescimento do comércio local trouxe fiscalização mais frequente — regularizar antes da notificação preserva o caixa do negócio.",
      "nearby": [
          "Penha",
          "Vila Matilde",
          "Ermelino Matarazzo",
          "São Miguel Paulista"
      ]
  },
  {
      "slug": "capao-redondo",
      "name": "Capão Redondo",
      "zone": "Zona Sul",
      "localRefs": [
          "Estrada de Itapecerica",
          "Av. Comendador Sant'Anna",
          "Terminal Capelinha",
          "Metrô Capão Redondo"
      ],
      "profile": "distrito denso com comércio popular, mercados, escolas, templos e condomínios",
      "buildings": [
          "mercados e atacarejos",
          "comércios populares",
          "escolas",
          "templos"
      ],
      "risks": [
          "mercados com estoque bloqueando saídas",
          "templos sem projeto de lotação",
          "alarme e iluminação ausentes"
      ],
      "urgency": "No Capão Redondo, mercados e templos de grande público são prioridade de vistoria — a licença em dia é o que separa operação normal de lacração.",
      "nearby": [
          "Campo Limpo",
          "Jardim São Luís",
          "Jardim Ângela",
          "Vila Andrade"
      ]
  },
  {
      "slug": "cursino",
      "name": "Cursino",
      "zone": "Zona Sul",
      "localRefs": [
          "Av. do Cursino",
          "Rua Bom Pastor (região)",
          "Av. Ricardo Jafet (proximidade)",
          "Jardim da Saúde"
      ],
      "profile": "corredor comercial e residencial com prédios, clínicas, escolas e comércio de avenida",
      "buildings": [
          "prédios residenciais",
          "clínicas",
          "escolas",
          "comércios de avenida"
      ],
      "risks": [
          "condomínios com AVCB vencido",
          "clínicas em imóveis adaptados",
          "laudos elétricos pendentes"
      ],
      "urgency": "No Cursino, o corredor comercial da avenida concentra clínicas e escolas que dependem da licença do Corpo de Bombeiros para manter alvará — renovação atrasada trava tudo.",
      "nearby": [
          "Saúde",
          "Ipiranga",
          "Sacomã",
          "Vila Mariana"
      ]
  },
  {
      "slug": "graja",
      "name": "Grajaú",
      "zone": "Zona Sul",
      "localRefs": [
          "Av. Dona Belmira Marin",
          "Terminal Grajaú",
          "Rua Cabo Estácio da Conceição (região)",
          "Represa Billings"
      ],
      "profile": "distrito mais populoso da capital, com comércio popular intenso, mercados, escolas e templos",
      "buildings": [
          "comércios populares",
          "mercados",
          "escolas",
          "templos"
      ],
      "risks": [
          "comércios operando sem CLCB",
          "GLP irregular em cozinhas",
          "saídas de emergência insuficientes"
      ],
      "urgency": "No Grajaú, o adensamento do comércio elevou o ritmo de fiscalização — regularizar a licença antes da notificação evita multa e fechamento.",
      "nearby": [
          "Cidade Dutra",
          "Parelheiros",
          "Pedreira",
          "Interlagos"
      ]
  },
  {
      "slug": "interlagos",
      "name": "Interlagos",
      "zone": "Zona Sul",
      "localRefs": [
          "Av. Interlagos",
          "Autódromo José Carlos Pace",
          "Av. Rubens Montanaro de Borba (região)",
          "Shopping SP Market (proximidade)"
      ],
      "profile": "região de eventos, concessionárias, galpões, comércios de avenida e condomínios",
      "buildings": [
          "espaços de eventos",
          "concessionárias",
          "galpões",
          "condomínios"
      ],
      "risks": [
          "eventos temporários sem projeto (PTOTEP)",
          "galpões com AVCB vencido",
          "hidrantes sem pressão certificada"
      ],
      "urgency": "Em Interlagos, a agenda de eventos e o comércio de avenida exigem documentação impecável — evento sem projeto aprovado é cancelamento na véspera.",
      "nearby": [
          "Campo Grande",
          "Cidade Dutra",
          "Socorro",
          "Grajaú"
      ]
  },
  {
      "slug": "mandaqui",
      "name": "Mandaqui",
      "zone": "Zona Norte",
      "localRefs": [
          "Av. Engenheiro Caetano Álvares",
          "Rua Voluntários da Pátria (trecho norte)",
          "Serra da Cantareira (proximidade)",
          "Hospital Mandaqui"
      ],
      "profile": "bairro residencial com prédios, clínicas, comércio local e escolas na encosta da Cantareira",
      "buildings": [
          "prédios residenciais",
          "clínicas",
          "comércios locais",
          "escolas"
      ],
      "risks": [
          "condomínios com sistemas antigos",
          "clínicas sem licença atualizada",
          "laudos de SPDA vencidos"
      ],
      "urgency": "No Mandaqui, condomínios das décadas de 80 e 90 chegam à renovação com hidrantes e alarmes defasados — antecipar o diagnóstico evita reprovação.",
      "nearby": [
          "Santana",
          "Tucuruvi",
          "Casa Verde",
          "Tremembé"
      ]
  },
  {
      "slug": "mboi-mirim",
      "name": "M'Boi Mirim",
      "zone": "Zona Sul",
      "localRefs": [
          "Estrada do M'Boi Mirim",
          "Terminal Jardim Ângela",
          "Represa Guarapiranga",
          "Av. Guarapiranga (região)"
      ],
      "profile": "região populosa com comércio de rua, mercados, escolas, templos e serviços locais",
      "buildings": [
          "mercados",
          "comércios de rua",
          "escolas",
          "templos"
      ],
      "risks": [
          "comércios sem licença",
          "lotação alta em templos",
          "instalações de GLP irregulares"
      ],
      "urgency": "No M'Boi Mirim, mercados e templos de grande circulação precisam de licença compatível com a lotação real — a fiscalização tem priorizado a região.",
      "nearby": [
          "Jardim Ângela",
          "Capão Redondo",
          "Jardim São Luís",
          "Grajaú"
      ]
  },
  {
      "slug": "pirituba",
      "name": "Pirituba",
      "zone": "Zona Norte",
      "localRefs": [
          "Av. Raimundo Pereira de Magalhães",
          "Av. Mutinga",
          "Estação Pirituba",
          "Rodoanel (acesso)"
      ],
      "profile": "distrito com galpões logísticos, comércios, condomínios novos e indústrias leves",
      "buildings": [
          "galpões logísticos",
          "indústrias leves",
          "condomínios novos",
          "comércios"
      ],
      "risks": [
          "galpões com AVCB vencido",
          "estoque acima da carga de incêndio projetada",
          "hidrantes sem teste hidrostático"
      ],
      "urgency": "Em Pirituba, o boom logístico do eixo Raimundo/Rodoanel fez do AVCB item de contrato — documento vencido derruba operação e seguro.",
      "nearby": [
          "Freguesia do Ó",
          "Jaraguá",
          "São Domingos",
          "Brasilândia"
      ]
  },
  {
      "slug": "rio-pequeno",
      "name": "Rio Pequeno",
      "zone": "Zona Oeste",
      "localRefs": [
          "Av. Rio Pequeno",
          "Av. Escola Politécnica",
          "Raposo Tavares (acesso)",
          "USP (proximidade)"
      ],
      "profile": "bairro residencial e comercial com escolas, mercados, oficinas e condomínios",
      "buildings": [
          "mercados",
          "escolas",
          "oficinas",
          "condomínios"
      ],
      "risks": [
          "comércios sem CLCB",
          "oficinas com inflamáveis",
          "manutenções sem registro"
      ],
      "urgency": "No Rio Pequeno, o corredor comercial da avenida e a proximidade da Raposo concentram negócios que precisam de licença em dia para não travar alvará.",
      "nearby": [
          "Butantã",
          "Jaguaré",
          "Vila Sônia",
          "Raposo Tavares"
      ]
  },
  {
      "slug": "sao-mateus",
      "name": "São Mateus",
      "zone": "Zona Leste",
      "localRefs": [
          "Av. Mateo Bei",
          "Av. Sapopemba (trecho leste)",
          "Av. Ragueb Chohfi",
          "Terminal São Mateus"
      ],
      "profile": "distrito com comércio de rua forte, mercados, escolas, templos e galpões",
      "buildings": [
          "comércios de rua",
          "mercados",
          "escolas",
          "galpões"
      ],
      "risks": [
          "comércios sem licença do Corpo de Bombeiros",
          "galpões com uso alterado",
          "extintores e alarmes vencidos"
      ],
      "urgency": "Em São Mateus, a Av. Mateo Bei é corredor de fiscalização constante — mercado ou loja sem CLCB válido opera por conta e risco.",
      "nearby": [
          "Sapopemba",
          "Itaquera",
          "Vila Prudente",
          "Santo André"
      ]
  },
  {
      "slug": "sao-miguel-paulista",
      "name": "São Miguel Paulista",
      "zone": "Zona Leste",
      "localRefs": [
          "Av. Marechal Tito",
          "Rua Salvador de Medeiros (centro)",
          "Estação São Miguel",
          "Av. São Miguel"
      ],
      "profile": "polo comercial da zona leste profunda, com lojas, mercados, escolas e igrejas históricas",
      "buildings": [
          "lojas e magazines",
          "mercados",
          "escolas",
          "igrejas"
      ],
      "risks": [
          "lojas com estoque obstruindo saídas",
          "prédios comerciais antigos",
          "licenças vencidas"
      ],
      "urgency": "Em São Miguel Paulista, o centro comercial da Marechal Tito tem fiscalização ativa — a licença em dia protege o ponto e o faturamento.",
      "nearby": [
          "Itaim Paulista",
          "Ermelino Matarazzo",
          "Cangaíba",
          "Guarulhos"
      ]
  },
  {
      "slug": "tremembe",
      "name": "Tremembé",
      "zone": "Zona Norte",
      "localRefs": [
          "Av. Maria Amália Lopes Azevedo",
          "Av. Nova Cantareira (trecho)",
          "Serra da Cantareira",
          "Horto Florestal"
      ],
      "profile": "bairro residencial arborizado com condomínios, escolas, clínicas e comércio local",
      "buildings": [
          "condomínios residenciais",
          "escolas",
          "clínicas",
          "comércios locais"
      ],
      "risks": [
          "condomínios com AVCB vencido",
          "acesso de viatura dificultado em vielas",
          "hidrantes sem manutenção"
      ],
      "urgency": "No Tremembé, condomínios em área de encosta precisam comprovar acesso e sistemas em dia — a renovação antecipada evita exigências em cascata.",
      "nearby": [
          "Tucuruvi",
          "Mandaqui",
          "Jaçanã",
          "Horto Florestal"
      ]
  },
  {
      "slug": "vila-formosa",
      "name": "Vila Formosa",
      "zone": "Zona Leste",
      "localRefs": [
          "Av. Sapopemba (trecho)",
          "Rua Emílio Mallet (região)",
          "Av. Renata",
          "Cemitério Vila Formosa (referência)"
      ],
      "profile": "bairro residencial e comercial com prédios novos, comércio de rua, escolas e clínicas",
      "buildings": [
          "prédios novos",
          "comércios de rua",
          "escolas",
          "clínicas"
      ],
      "risks": [
          "comércios sem CLCB",
          "prédios novos com pendência de vistoria",
          "manutenção sem registro"
      ],
      "urgency": "Na Vila Formosa, o adensamento vertical recente trouxe condomínios novos que já chegam à primeira renovação — perder o prazo custa caro ao síndico.",
      "nearby": [
          "Carrão",
          "Tatuapé",
          "Anália Franco",
          "Sapopemba"
      ]
  },
  {
      "slug": "centro-sao-paulo",
      "name": "Centro de São Paulo",
      "zone": "Centro",
      "localRefs": [
          "Praça da Sé",
          "Vale do Anhangabaú",
          "Av. São João",
          "Rua Boa Vista"
      ],
      "profile": "núcleo histórico e comercial com prédios antigos, escritórios, hotéis, comércio popular e teatros",
      "buildings": [
          "prédios comerciais antigos",
          "hotéis e hostels",
          "lojas populares",
          "escritórios"
      ],
      "risks": [
          "edifícios antigos sem retrofit",
          "escadas e rotas fora de norma",
          "sistemas desativados",
          "alta ocupação"
      ],
      "urgency": "No Centro, o parque de edifícios antigos concentra as maiores exigências de adequação da cidade — e também a fiscalização mais intensa. Regularizar é urgente.",
      "nearby": [
          "Sé",
          "República",
          "Bela Vista",
          "Brás"
      ]
  },
  {
      "slug": "osasco",
      "name": "Osasco",
      "zone": "Grande São Paulo",
      "localRefs": [
          "Av. dos Autonomistas",
          "Calçadão de Osasco",
          "Av. Hilário Pereira de Souza",
          "Estação Osasco"
      ],
      "profile": "cidade-polo com shoppings, torres corporativas, comércio de calçadão, galpões e condomínios",
      "buildings": [
          "torres corporativas",
          "shoppings e magazines",
          "galpões logísticos",
          "condomínios"
      ],
      "risks": [
          "comércios de calçadão sem CLCB",
          "galpões com AVCB vencido",
          "prédios corporativos com laudos pendentes"
      ],
      "urgency": "Em Osasco, sede de grandes empresas e comércio intenso, a licença do Corpo de Bombeiros é exigida em contratos, seguros e alvarás — vencimento é risco imediato.",
      "nearby": [
          "Carapicuíba",
          "Barueri",
          "Lapa (SP)",
          "Taboão da Serra"
      ]
  },
  {
      "slug": "guarulhos",
      "name": "Guarulhos",
      "zone": "Grande São Paulo",
      "localRefs": [
          "Av. Paulo Faccini",
          "Aeroporto Internacional de Cumbica",
          "Via Dutra",
          "Centro de Guarulhos"
      ],
      "profile": "segunda maior cidade do estado, com polo logístico aeroportuário, indústrias, comércios e condomínios",
      "buildings": [
          "galpões e centros logísticos",
          "indústrias",
          "comércios",
          "condomínios"
      ],
      "risks": [
          "logística com AVCB vencido trava contratos",
          "indústrias com risco alto e projeto antigo",
          "comércios sem CLCB"
      ],
      "urgency": "Em Guarulhos, o eixo Dutra-Cumbica concentra operações logísticas onde o AVCB é pré-requisito contratual — documento vencido para a operação.",
      "nearby": [
          "Cumbica",
          "Bonsucesso",
          "São Miguel Paulista (SP)",
          "Arujá"
      ]
  },
  {
      "slug": "maua",
      "name": "Mauá",
      "zone": "Grande ABC",
      "localRefs": [
          "Av. Barão de Mauá",
          "Polo Petroquímico de Capuava",
          "Av. João Ramalho",
          "Centro de Mauá"
      ],
      "profile": "cidade industrial do ABC com polo petroquímico, fábricas, galpões e comércio central",
      "buildings": [
          "indústrias químicas",
          "galpões",
          "comércios",
          "condomínios"
      ],
      "risks": [
          "indústrias com risco elevado e projeto defasado",
          "galpões sem hidrante certificado",
          "comércios sem licença"
      ],
      "urgency": "Em Mauá, a vizinhança do polo petroquímico eleva o rigor das vistorias — indústrias e galpões precisam de projeto e laudos rigorosamente atualizados.",
      "nearby": [
          "Santo André",
          "Ribeirão Pires",
          "São Caetano do Sul",
          "Sapopemba (SP)"
      ]
  },
  {
      "slug": "santo-andre",
      "name": "Santo André",
      "zone": "Grande ABC",
      "localRefs": [
          "Av. Industrial",
          "Rua Oliveira Lima (calçadão)",
          "Av. dos Estados",
          "Paço Municipal"
      ],
      "profile": "polo comercial e industrial do ABC com shoppings, indústrias, comércios de calçadão e condomínios",
      "buildings": [
          "indústrias",
          "shoppings e comércios",
          "condomínios",
          "escolas e faculdades"
      ],
      "risks": [
          "indústrias com AVCB vencido",
          "comércios de calçadão sem CLCB",
          "condomínios com sistemas antigos"
      ],
      "urgency": "Em Santo André, o corredor da Av. Industrial e o centro comercial exigem licenças em dia — a prefeitura cruza alvará com a situação no Corpo de Bombeiros.",
      "nearby": [
          "São Caetano do Sul",
          "São Bernardo do Campo",
          "Mauá",
          "Sacomã (SP)"
      ]
  },
  {
      "slug": "sao-bernardo",
      "name": "São Bernardo do Campo",
      "zone": "Grande ABC",
      "localRefs": [
          "Av. Faria Lima (SBC)",
          "Rodovia Anchieta",
          "Rua Marechal Deodoro (centro)",
          "Distrito Industrial"
      ],
      "profile": "capital do polo automotivo com montadoras, autopeças, galpões logísticos e comércio forte",
      "buildings": [
          "montadoras e autopeças",
          "galpões logísticos",
          "comércios",
          "condomínios"
      ],
      "risks": [
          "plantas industriais com projeto defasado",
          "logística com AVCB vencido",
          "comércios sem CLCB"
      ],
      "urgency": "Em São Bernardo, o padrão industrial automotivo exige conformidade total — auditorias de matriz e seguradora cobram AVCB válido antes de qualquer contrato.",
      "nearby": [
          "Santo André",
          "São Caetano do Sul",
          "Diadema",
          "Sacomã (SP)"
      ]
  },
  {
      "slug": "sao-caetano",
      "name": "São Caetano do Sul",
      "zone": "Grande ABC",
      "localRefs": [
          "Av. Goiás",
          "Rua Baraldi (região central)",
          "Espaço Cerâmica",
          "Av. Guido Aliberti"
      ],
      "profile": "cidade compacta de alto IDH com comércios, escritórios, escolas e condomínios verticais",
      "buildings": [
          "condomínios verticais",
          "comércios",
          "escritórios",
          "escolas"
      ],
      "risks": [
          "condomínios em primeira renovação",
          "comércios sem CLCB",
          "laudos elétricos pendentes"
      ],
      "urgency": "Em São Caetano, a verticalização acelerada gera ondas de renovação de AVCB em condomínios novos — perder o prazo é multa em condomínio de alto padrão.",
      "nearby": [
          "Santo André",
          "São Bernardo do Campo",
          "Sacomã (SP)",
          "Ipiranga (SP)"
      ]
  },
  {
      "slug": "jundiai",
      "name": "Jundiaí",
      "zone": "Interior SP",
      "localRefs": [
          "Av. 9 de Julho (Jundiaí)",
          "Rodovia Anhanguera",
          "Distrito Industrial",
          "Centro de Jundiaí"
      ],
      "profile": "polo logístico e industrial do eixo Anhanguera-Bandeirantes com galpões, fábricas e comércio forte",
      "buildings": [
          "centros logísticos",
          "indústrias",
          "comércios",
          "condomínios"
      ],
      "risks": [
          "galpões novos com pendência de vistoria",
          "operações sem AVCB travando contratos",
          "sistemas sem laudo"
      ],
      "urgency": "Em Jundiaí, o mercado logístico premium exige AVCB como cláusula de contrato — cada dia vencido é risco de rescisão e seguro negado.",
      "nearby": [
          "Louveira",
          "Várzea Paulista",
          "Campo Limpo Paulista",
          "Cajamar"
      ]
  },
  {
      "slug": "carapicuiba",
      "name": "Carapicuíba",
      "zone": "Grande São Paulo",
      "localRefs": [
          "Av. Rui Barbosa",
          "Estação Carapicuíba",
          "Cohab",
          "Av. Inocêncio Seráfico"
      ],
      "profile": "cidade densa da região oeste com comércio popular, mercados, escolas e templos",
      "buildings": [
          "comércios populares",
          "mercados",
          "escolas",
          "templos"
      ],
      "risks": [
          "comércios sem CLCB",
          "templos com lotação alta",
          "GLP irregular"
      ],
      "urgency": "Em Carapicuíba, o comércio da região central é alvo frequente de fiscalização integrada — a licença do Corpo de Bombeiros em dia evita a lacração.",
      "nearby": [
          "Osasco",
          "Barueri",
          "Cotia",
          "Jandira"
      ]
  },
  {
      "slug": "taboao-da-serra",
      "name": "Taboão da Serra",
      "zone": "Grande São Paulo",
      "localRefs": [
          "Rodovia Régis Bittencourt",
          "Av. Felício Barutti",
          "Shopping Taboão",
          "Parque Pinheiros"
      ],
      "profile": "cidade conurbada com comércio de rodovia, galpões, shoppings e condomínios",
      "buildings": [
          "comércios de rodovia",
          "galpões",
          "shopping e magazines",
          "condomínios"
      ],
      "risks": [
          "galpões da Régis com AVCB vencido",
          "comércios sem CLCB",
          "condomínios com sistemas antigos"
      ],
      "urgency": "Em Taboão da Serra, o corredor da Régis Bittencourt concentra galpões e lojas-âncora onde o AVCB vencido interrompe operação e recebimento de mercadoria.",
      "nearby": [
          "Campo Limpo (SP)",
          "Embu das Artes",
          "Osasco",
          "Butantã (SP)"
      ]
  },
  {
      "slug": "diadema",
      "name": "Diadema",
      "zone": "Grande ABC",
      "localRefs": [
          "Av. Piraporinha",
          "Rodovia dos Imigrantes",
          "Centro de Diadema",
          "Polo Industrial"
      ],
      "profile": "cidade industrial compacta com fábricas, galpões, comércio central e condomínios",
      "buildings": [
          "indústrias",
          "galpões",
          "comércios",
          "condomínios"
      ],
      "risks": [
          "indústrias com projeto defasado",
          "galpões sem laudos",
          "comércios sem CLCB"
      ],
      "urgency": "Em Diadema, a densidade industrial exige AVCB atualizado para operação e seguro — vistorias reprovam sistemas sem manutenção registrada.",
      "nearby": [
          "São Bernardo do Campo",
          "Santo Amaro (SP)",
          "Interlagos (SP)",
          "São Caetano do Sul"
      ]
  },
  {
      "slug": "mogi-das-cruzes",
      "name": "Mogi das Cruzes",
      "zone": "Alto Tietê",
      "localRefs": [
          "Av. Vereador Narciso Yague Guimarães",
          "Rodovia Mogi-Dutra",
          "Centro Histórico",
          "Distrito Industrial do Taboão"
      ],
      "profile": "polo regional do Alto Tietê com indústrias, comércio central, hospitais e condomínios",
      "buildings": [
          "indústrias",
          "comércios",
          "hospitais e clínicas",
          "condomínios"
      ],
      "risks": [
          "indústrias com AVCB vencido",
          "comércios do centro sem CLCB",
          "hospitais com exigências específicas"
      ],
      "urgency": "Em Mogi das Cruzes, o distrito industrial e o centro comercial exigem licenças válidas — o Corpo de Bombeiros local mantém calendário ativo de vistorias.",
      "nearby": [
          "Suzano",
          "Itaquaquecetuba",
          "Guararema",
          "Biritiba Mirim"
      ]
  },
  {
      "slug": "poa",
      "name": "Poá",
      "zone": "Alto Tietê",
      "localRefs": [
          "Av. Nove de Julho (Poá)",
          "Estação Poá",
          "Centro de Poá",
          "Vila Perracini"
      ],
      "profile": "cidade compacta do Alto Tietê com comércio central, escolas, clínicas e condomínios",
      "buildings": [
          "comércios centrais",
          "escolas",
          "clínicas",
          "condomínios"
      ],
      "risks": [
          "comércios sem CLCB",
          "escolas com licença vencida",
          "sistemas sem manutenção"
      ],
      "urgency": "Em Poá, comércios e escolas do centro precisam da licença do Corpo de Bombeiros para manter alvará municipal — a renovação em dia evita cascata de pendências.",
      "nearby": [
          "Suzano",
          "Ferraz de Vasconcelos",
          "Itaquaquecetuba",
          "Mogi das Cruzes"
      ]
  },
  {
      "slug": "suzano",
      "name": "Suzano",
      "zone": "Alto Tietê",
      "localRefs": [
          "Av. Mogilar (região)",
          "Rua General Francisco Glicério (centro)",
          "Distrito Industrial",
          "Estação Suzano"
      ],
      "profile": "cidade industrial do Alto Tietê com fábricas de grande porte, galpões, comércio e condomínios",
      "buildings": [
          "indústrias de grande porte",
          "galpões",
          "comércios",
          "condomínios"
      ],
      "risks": [
          "plantas industriais com risco alto",
          "galpões sem AVCB",
          "comércios do centro sem CLCB"
      ],
      "urgency": "Em Suzano, as plantas industriais operam sob exigências rígidas — AVCB e laudos atualizados são cobrados por seguradoras e auditorias corporativas.",
      "nearby": [
          "Poá",
          "Mogi das Cruzes",
          "Itaquaquecetuba",
          "Ferraz de Vasconcelos"
      ]
  },
  {
      "slug": "campinas",
      "name": "Campinas",
      "zone": "Interior SP",
      "localRefs": [
          "Av. Norte-Sul",
          "Rodovia Dom Pedro I",
          "Centro de Campinas",
          "Distrito de Barão Geraldo"
      ],
      "profile": "metrópole do interior com polos de tecnologia, indústrias, shoppings, hospitais e universidades",
      "buildings": [
          "empresas de tecnologia",
          "indústrias",
          "shoppings",
          "hospitais e universidades"
      ],
      "risks": [
          "projetos técnicos defasados",
          "galpões e labs sem laudos",
          "comércios sem CLCB"
      ],
      "urgency": "Em Campinas, o porte dos empreendimentos exige projeto técnico completo e laudos atualizados — o 4º Grupamento de Bombeiros mantém fiscalização ativa.",
      "nearby": [
          "Valinhos",
          "Hortolândia",
          "Sumaré",
          "Paulínia"
      ]
  },
  {
      "slug": "sorocaba",
      "name": "Sorocaba",
      "zone": "Interior SP",
      "localRefs": [
          "Av. Itavuvu",
          "Av. Dom Aguirre",
          "Rodovia Castello Branco",
          "Parque Tecnológico"
      ],
      "profile": "polo industrial e comercial do sudoeste paulista com fábricas, galpões, shoppings e condomínios",
      "buildings": [
          "indústrias",
          "galpões logísticos",
          "shoppings e comércios",
          "condomínios"
      ],
      "risks": [
          "indústrias com projeto antigo",
          "galpões sem hidrante certificado",
          "comércios sem licença"
      ],
      "urgency": "Em Sorocaba, o crescimento industrial do eixo Castello exige AVCB válido em contratos e seguros — a renovação antecipada evita parada de produção.",
      "nearby": [
          "Votorantim",
          "Itu",
          "Salto de Pirapora",
          "Araçoiaba da Serra"
      ]
  },
  {
      "slug": "sao-jose-dos-campos",
      "name": "São José dos Campos",
      "zone": "Vale do Paraíba",
      "localRefs": [
          "Av. Cassiano Ricardo",
          "Rodovia Presidente Dutra",
          "Parque Tecnológico",
          "Centro de SJC"
      ],
      "profile": "polo aeroespacial e tecnológico com indústrias de precisão, laboratórios, comércios e condomínios",
      "buildings": [
          "indústrias aeroespaciais",
          "laboratórios",
          "comércios",
          "condomínios"
      ],
      "risks": [
          "plantas de alta complexidade com exigências específicas",
          "laboratórios com inflamáveis",
          "comércios sem CLCB"
      ],
      "urgency": "Em São José dos Campos, o padrão aeroespacial impõe conformidade documental total — AVCB e laudos são auditados por clientes e seguradoras internacionais.",
      "nearby": [
          "Jacareí",
          "Taubaté",
          "Caçapava",
          "Monteiro Lobato"
      ]
  },
  {
      "slug": "santos",
      "name": "Santos",
      "zone": "Baixada Santista",
      "localRefs": [
          "Av. Ana Costa",
          "Porto de Santos",
          "Av. Conselheiro Nébias",
          "Orla da praia"
      ],
      "profile": "maior cidade do litoral paulista, com porto, armazéns, hotéis, prédios na orla e comércio forte",
      "buildings": [
          "armazéns portuários",
          "hotéis e pousadas",
          "prédios de orla",
          "comércios"
      ],
      "risks": [
          "maresia acelerando corrosão de sistemas",
          "armazéns com carga elevada",
          "prédios antigos na orla",
          "hotéis com alta ocupação"
      ],
      "urgency": "Em Santos, a maresia reduz a vida útil de hidrantes e tubulações — sistemas aprovados há 5 anos podem reprovar hoje. Diagnóstico antecipado é essencial.",
      "nearby": [
          "São Vicente",
          "Guarujá",
          "Cubatão",
          "Praia Grande"
      ]
  },
  {
      "slug": "cubatao",
      "name": "Cubatão",
      "zone": "Baixada Santista",
      "localRefs": [
          "Polo Industrial de Cubatão",
          "Rodovia Anchieta",
          "Av. 9 de Abril (centro)",
          "Vila Parisi"
      ],
      "profile": "polo petroquímico e siderúrgico com indústrias de alto risco, transportadoras e comércio local",
      "buildings": [
          "indústrias petroquímicas",
          "siderúrgicas",
          "transportadoras",
          "comércios"
      ],
      "risks": [
          "risco industrial elevado com exigências máximas",
          "transportadoras de químicos",
          "laudos especializados"
      ],
      "urgency": "Em Cubatão, o polo industrial opera sob o maior rigor do estado — projeto técnico, brigada e laudos precisam estar impecáveis a cada renovação.",
      "nearby": [
          "Santos",
          "São Vicente",
          "Praia Grande",
          "Santo André"
      ]
  },
  {
      "slug": "guaruja",
      "name": "Guarujá",
      "zone": "Baixada Santista",
      "localRefs": [
          "Av. Puglisi",
          "Praia da Enseada",
          "Av. Dom Pedro I",
          "Balsa Santos-Guarujá"
      ],
      "profile": "cidade turística com hotéis, pousadas, restaurantes, prédios de veraneio e comércio de temporada",
      "buildings": [
          "hotéis e pousadas",
          "restaurantes",
          "prédios de veraneio",
          "comércios de temporada"
      ],
      "risks": [
          "hotelaria com alta ocupação sazonal",
          "prédios de veraneio com sistemas parados",
          "maresia corroendo instalações"
      ],
      "urgency": "No Guarujá, a alta temporada multiplica a ocupação — hotéis e restaurantes precisam renovar antes do verão, quando a fiscalização intensifica.",
      "nearby": [
          "Santos",
          "Bertioga",
          "São Vicente",
          "Cubatão"
      ]
  },
  {
      "slug": "itanhaem",
      "name": "Itanhaém",
      "zone": "Litoral Sul",
      "localRefs": [
          "Av. Rui Barbosa (Itanhaém)",
          "Centro histórico",
          "Praia dos Pescadores",
          "Rodovia Padre Manoel da Nóbrega"
      ],
      "profile": "cidade do litoral sul com pousadas, comércio de temporada, escolas e condomínios de veraneio",
      "buildings": [
          "pousadas",
          "comércios de temporada",
          "escolas",
          "condomínios de veraneio"
      ],
      "risks": [
          "pousadas sem licença atualizada",
          "comércios sazonais sem CLCB",
          "sistemas com manutenção irregular"
      ],
      "urgency": "Em Itanhaém, pousadas e comércios precisam da licença válida antes da temporada — a demanda de última hora não cabe no prazo do Corpo de Bombeiros.",
      "nearby": [
          "Mongaguá",
          "Peruíbe",
          "Praia Grande",
          "São Vicente"
      ]
  },
  {
      "slug": "praia-grande",
      "name": "Praia Grande",
      "zone": "Baixada Santista",
      "localRefs": [
          "Av. Presidente Kennedy",
          "Av. Marechal Mallet",
          "Portinho",
          "Orla de Praia Grande"
      ],
      "profile": "cidade em forte verticalização com condomínios de orla, hotéis, comércios e mercados",
      "buildings": [
          "condomínios de orla",
          "hotéis",
          "mercados",
          "comércios"
      ],
      "risks": [
          "condomínios novos chegando à primeira renovação",
          "maresia nos sistemas",
          "comércios sem CLCB"
      ],
      "urgency": "Em Praia Grande, a explosão de condomínios verticais gera ondas de renovação — síndicos que antecipam o processo evitam multa e assembleia de crise.",
      "nearby": [
          "São Vicente",
          "Santos",
          "Mongaguá",
          "Itanhaém"
      ]
  },
  {
      "slug": "sao-vicente",
      "name": "São Vicente",
      "zone": "Baixada Santista",
      "localRefs": [
          "Av. Presidente Wilson",
          "Ponte Pênsil",
          "Centro de São Vicente",
          "Praia do Itararé"
      ],
      "profile": "cidade histórica conurbada com Santos, com prédios de orla, comércios, escolas e pousadas",
      "buildings": [
          "prédios de orla",
          "comércios",
          "escolas",
          "pousadas"
      ],
      "risks": [
          "prédios antigos com sistemas defasados",
          "comércios sem licença",
          "corrosão por maresia"
      ],
      "urgency": "Em São Vicente, o parque de prédios antigos da orla exige atenção redobrada na renovação — tubulações corroídas reprovam o teste de pressão.",
      "nearby": [
          "Santos",
          "Praia Grande",
          "Cubatão",
          "Guarujá"
      ]
  },
  {
      "slug": "bertioga",
      "name": "Bertioga",
      "zone": "Baixada Santista",
      "localRefs": [
          "Av. 19 de Maio",
          "Riviera de São Lourenço",
          "Canal de Bertioga",
          "Rodovia Rio-Santos"
      ],
      "profile": "cidade turística com condomínios de alto padrão, pousadas, restaurantes e comércio de temporada",
      "buildings": [
          "condomínios de alto padrão",
          "pousadas",
          "restaurantes",
          "comércios"
      ],
      "risks": [
          "condomínios de veraneio com sistemas parados fora de temporada",
          "restaurantes com GLP",
          "licenças vencidas"
      ],
      "urgency": "Em Bertioga, condomínios da Riviera e pousadas precisam de sistemas testados mesmo fora de temporada — a vistoria não aceita 'estava fechado' como justificativa.",
      "nearby": [
          "Guarujá",
          "São Sebastião",
          "Santos",
          "Mogi das Cruzes"
      ]
  },
  {
      "slug": "zona-sul",
      "name": "Zona Sul de São Paulo",
      "zone": "São Paulo",
      "localRefs": [
          "Av. Santo Amaro",
          "Av. Interlagos",
          "Marginal Pinheiros (trecho sul)",
          "Av. Cupecê"
      ],
      "profile": "macrorregião que vai de Moema e Brooklin a Interlagos e Grajaú, com corporativo, comércio, indústrias e condomínios",
      "buildings": [
          "torres corporativas",
          "condomínios",
          "galpões e comércios",
          "escolas e hospitais"
      ],
      "risks": [
          "diversidade de risco por sub-região",
          "condomínios em renovação",
          "galpões com AVCB vencido"
      ],
      "urgency": "Na Zona Sul, do corporativo da Berrini ao comércio do Grajaú, a DRD2 atende todos os perfis de imóvel com diagnóstico local e acompanhamento no Corpo de Bombeiros.",
      "nearby": [
          "Santo Amaro",
          "Moema",
          "Interlagos",
          "Campo Limpo"
      ]
  },
  {
      "slug": "zona-leste",
      "name": "Zona Leste de São Paulo",
      "zone": "São Paulo",
      "localRefs": [
          "Av. Radial Leste",
          "Av. Aricanduva",
          "Av. Marechal Tito",
          "Av. Sapopemba"
      ],
      "profile": "macrorregião mais populosa da capital, com polos comerciais, galpões, indústrias e condomínios",
      "buildings": [
          "polos comerciais",
          "galpões e indústrias",
          "condomínios",
          "escolas e templos"
      ],
      "risks": [
          "comércio popular sem CLCB",
          "galpões com uso alterado",
          "templos com alta lotação"
      ],
      "urgency": "Na Zona Leste, dos shoppings da Aricanduva ao comércio de São Miguel, a fiscalização é ativa — a DRD2 cobre toda a região com atendimento presencial.",
      "nearby": [
          "Tatuapé",
          "Itaquera",
          "São Mateus",
          "Penha"
      ]
  },
  {
      "slug": "zona-norte",
      "name": "Zona Norte de São Paulo",
      "zone": "São Paulo",
      "localRefs": [
          "Av. Braz Leme",
          "Av. Engenheiro Caetano Álvares",
          "Marginal Tietê (trecho norte)",
          "Av. Guilherme Cotching"
      ],
      "profile": "macrorregião de Santana a Pirituba com comércios, condomínios, galpões logísticos e escolas",
      "buildings": [
          "condomínios",
          "comércios",
          "galpões logísticos",
          "escolas"
      ],
      "risks": [
          "condomínios antigos em renovação",
          "logística da Marginal com AVCB vencido",
          "comércios sem licença"
      ],
      "urgency": "Na Zona Norte, de Santana à Brasilândia, a DRD2 atende condomínios, comércios e galpões com diagnóstico técnico e protocolo no Via Fácil Bombeiros.",
      "nearby": [
          "Santana",
          "Casa Verde",
          "Tucuruvi",
          "Pirituba"
      ]
  },
  {
      "slug": "zona-oeste",
      "name": "Zona Oeste de São Paulo",
      "zone": "São Paulo",
      "localRefs": [
          "Av. Rebouças",
          "Marginal Pinheiros (trecho oeste)",
          "Av. Corifeu de Azevedo Marques",
          "Rodovia Raposo Tavares"
      ],
      "profile": "macrorregião de Pinheiros a Raposo Tavares com corporativo, comércios, universidades e condomínios",
      "buildings": [
          "escritórios e coworkings",
          "comércios e restaurantes",
          "universidades",
          "condomínios"
      ],
      "risks": [
          "restaurantes e bares sem licença",
          "prédios corporativos com laudos vencidos",
          "imóveis adaptados sem projeto"
      ],
      "urgency": "Na Zona Oeste, de Pinheiros ao Butantã, bares, escritórios e condomínios contam com a DRD2 para renovar a licença sem travar a operação.",
      "nearby": [
          "Pinheiros",
          "Butantã",
          "Lapa",
          "Vila Madalena"
      ]
  },
  {
      "slug": "zona-leste-sao-paulo",
      "name": "Zona Leste de São Paulo",
      "zone": "São Paulo",
      "localRefs": [
          "Av. Radial Leste",
          "Av. Aricanduva",
          "Av. Marechal Tito",
          "Av. Sapopemba"
      ],
      "profile": "macrorregião mais populosa da capital, com polos comerciais, galpões, indústrias e condomínios",
      "buildings": [
          "polos comerciais",
          "galpões e indústrias",
          "condomínios",
          "escolas e templos"
      ],
      "risks": [
          "comércio popular sem CLCB",
          "galpões com uso alterado",
          "templos com alta lotação"
      ],
      "urgency": "Na Zona Leste, dos shoppings da Aricanduva ao comércio de São Miguel, a fiscalização é ativa — a DRD2 cobre toda a região com atendimento presencial.",
      "nearby": [
          "Tatuapé",
          "Itaquera",
          "São Mateus",
          "Penha"
      ]
  },
  {
      "slug": "zona-norte-sao-paulo",
      "name": "Zona Norte de São Paulo",
      "zone": "São Paulo",
      "localRefs": [
          "Av. Braz Leme",
          "Av. Engenheiro Caetano Álvares",
          "Marginal Tietê (trecho norte)",
          "Av. Guilherme Cotching"
      ],
      "profile": "macrorregião de Santana a Pirituba com comércios, condomínios, galpões logísticos e escolas",
      "buildings": [
          "condomínios",
          "comércios",
          "galpões logísticos",
          "escolas"
      ],
      "risks": [
          "condomínios antigos em renovação",
          "logística da Marginal com AVCB vencido",
          "comércios sem licença"
      ],
      "urgency": "Na Zona Norte, de Santana à Brasilândia, a DRD2 atende condomínios, comércios e galpões com diagnóstico técnico e protocolo no Via Fácil Bombeiros.",
      "nearby": [
          "Santana",
          "Casa Verde",
          "Tucuruvi",
          "Pirituba"
      ]
  },
  {
      "slug": "zona-oeste-sao-paulo",
      "name": "Zona Oeste de São Paulo",
      "zone": "São Paulo",
      "localRefs": [
          "Av. Rebouças",
          "Marginal Pinheiros (trecho oeste)",
          "Av. Corifeu de Azevedo Marques",
          "Rodovia Raposo Tavares"
      ],
      "profile": "macrorregião de Pinheiros a Raposo Tavares com corporativo, comércios, universidades e condomínios",
      "buildings": [
          "escritórios e coworkings",
          "comércios e restaurantes",
          "universidades",
          "condomínios"
      ],
      "risks": [
          "restaurantes e bares sem licença",
          "prédios corporativos com laudos vencidos",
          "imóveis adaptados sem projeto"
      ],
      "urgency": "Na Zona Oeste, de Pinheiros ao Butantã, bares, escritórios e condomínios contam com a DRD2 para renovar a licença sem travar a operação.",
      "nearby": [
          "Pinheiros",
          "Butantã",
          "Lapa",
          "Vila Madalena"
      ]
  },
  {
      "slug": "alphaville-barueri",
      "name": "Alphaville (Barueri)",
      "zone": "Grande São Paulo",
      "localRefs": [
          "Alameda Rio Negro",
          "Alameda Araguaia",
          "Centro Comercial Alphaville",
          "Castello Branco (acesso)"
      ],
      "profile": "polo corporativo de alto padrão com torres de escritórios, centros empresariais, hotéis, restaurantes e condomínios",
      "buildings": [
          "torres corporativas",
          "centros empresariais",
          "hotéis",
          "restaurantes e comércios"
      ],
      "risks": [
          "prédios corporativos com laudos vencidos",
          "coworkings e andares reformados sem atualização de projeto",
          "brigada e alarme sem documentação"
      ],
      "urgency": "Em Alphaville, administradoras e locatários corporativos exigem AVCB válido em contrato — a renovação atrasada trava locação e auditorias.",
      "nearby": [
          "Barueri",
          "Tamboré",
          "Santana de Parnaíba",
          "Osasco"
      ]
  },
  {
      "slug": "centro-bela-vista",
      "name": "Centro (região da Bela Vista)",
      "zone": "Centro",
      "localRefs": [
          "Av. Nove de Julho",
          "Rua Santo Amaro",
          "Viaduto Jacareí",
          "Praça da Bandeira"
      ],
      "profile": "faixa de transição entre o centro histórico e a Bela Vista, com prédios comerciais, teatros, bares, hotéis e órgãos públicos",
      "buildings": [
          "prédios comerciais",
          "teatros e casas de show",
          "bares e restaurantes",
          "hotéis"
      ],
      "risks": [
          "edifícios antigos sem retrofit de segurança",
          "casas de show com lotação alta",
          "sistemas desativados em prédios subutilizados"
      ],
      "urgency": "Na região Centro–Bela Vista, a mistura de prédios antigos com casas de espetáculo concentra as maiores exigências de rotas de fuga e lotação da capital.",
      "nearby": [
          "Bela Vista",
          "República",
          "Sé",
          "Liberdade"
      ]
  },
];

export const missingAvcbNeighborhoods = [
  "freguesia-do-o",
  "carrao",
  "vila-re",
  "sapopemba",
  "barra-funda",
  "higienopolis",
  "paraiso",
];

export function getLocalNeighborhood(slug: string) {
  return localNeighborhoods.find((item) => item.slug === slug);
}
