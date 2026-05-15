export interface Neighborhood {
  name: string;
  slug: string;
  keywords: string[];
}

export interface Region {
  id: string;
  name: string;
  slug: string;
  description: string;
  mainTitle: string;
  metaDescription: string;
  neighborhoods: string[];
  highlights: string[];
}

export const regionsData: Region[] = [
  {
    id: "zona-sul",
    name: "Zona Sul",
    slug: "avcb-zona-sul",
    mainTitle: "AVCB na Zona Sul de São Paulo: Regularização e Renovação",
    metaDescription: "Especialistas em AVCB e CLCB na Zona Sul de SP. Atendemos Moema, Santo Amaro, Brooklin, Itaim Bibi e toda a região com aprovação rápida no CBPMESP.",
    description: "A Zona Sul de São Paulo concentra o maior polo corporativo e residencial de alto padrão da cidade. Da Berrini ao Itaim Bibi, nossa equipe domina as exigências do Corpo de Bombeiros para edifícios complexos, centros comerciais e condomínios de grande porte.",
    neighborhoods: [
      "Moema", "Itaim Bibi", "Brooklin", "Vila Olímpia", "Campo Belo", "Santo Amaro", "Interlagos", 
      "Vila Mariana", "Paraíso", "Saúde", "Jabaquara", "Morumbi", "Ipiranga", "Sacomã", "Grajaú"
    ],
    highlights: [
      "Especialistas em Edifícios Corporativos (Grupo D)",
      "Vistoria técnica em Condomínios de Alto Padrão",
      "Regularização de Centros Comerciais e Shoppings",
      "Projetos de Hidrantes e Sprinklers para grandes áreas"
    ]
  },
  {
    id: "zona-leste",
    name: "Zona Leste",
    slug: "avcb-zona-leste-sao-paulo",
    mainTitle: "AVCB na Zona Leste de São Paulo: Tatuapé, Mooca e Região",
    metaDescription: "Regularização de AVCB e CLCB na Zona Leste de SP. Atendimento especializado no Tatuapé, Mooca, Penha e Itaquera. Entre em contato para orçamento.",
    description: "A Zona Leste é a região que mais cresce em lançamentos residenciais e comerciais. Com um perfil misto de indústrias tradicionais na Mooca e novos empreendimentos no Tatuapé, oferecemos soluções sob medida para cada tipo de ocupação.",
    neighborhoods: [
      "Tatuapé", "Mooca", "Vila Anália Franco", "Belém", "Penha", "Itaquera", "São Mateus", 
      "Vila Prudente", "Sapopemba", "Aricanduva", "Vila Formosa", "Cangaíba", "Guilhermina"
    ],
    highlights: [
      "Foco em Novos Condomínios Residenciais",
      "Regularização de Indústrias e Depósitos (Grupo I)",
      "Projetos de Alarmes para Comércio Local",
      "Atendimento ágil para Renovação de CLCB"
    ]
  },
  {
    id: "zona-norte",
    name: "Zona Norte",
    slug: "avcb-zona-norte-sao-paulo",
    mainTitle: "AVCB na Zona Norte de São Paulo: Santana e Centros Logísticos",
    metaDescription: "Consultoria para AVCB na Zona Norte de SP. Atendemos Santana, Tucuruvi, Vila Maria e centros logísticos. Regularize sua empresa com engenheiros especialistas.",
    description: "A Zona Norte possui um perfil estratégico, abrigando importantes centros logísticos e uma forte zona comercial em Santana. Atuamos com foco na regularização de galpões e edifícios de serviços com alta eficiência.",
    neighborhoods: [
      "Santana", "Tucuruvi", "Mandaqui", "Vila Maria", "Vila Guilherme", "Casa Verde", 
      "Jaçanã", "Tremembé", "Freguesia do Ó", "Pirituba", "Limão", "Parada Inglesa", "Parque Novo Mundo"
    ],
    highlights: [
      "Consultoria para Galpões Logísticos (Grupo I)",
      "Regularização de Comércio de Rua e Academias",
      "Laudos de Estanqueidade de Gás para Restaurantes",
      "Projetos de Brigada de Incêndio para Escolas"
    ]
  },
  {
    id: "zona-oeste",
    name: "Zona Oeste",
    slug: "avcb-zona-oeste-sao-paulo",
    mainTitle: "AVCB na Zona Oeste de São Paulo: Pinheiros, Lapa e Perdizes",
    metaDescription: "AVCB e CLCB na Zona Oeste de SP. Especialistas em Pinheiros, Vila Madalena, Lapa e Perdizes. Regularização para clínicas, escritórios e gastronomia.",
    description: "A Zona Oeste é o coração gastronômico e cultural de SP. De Pinheiros à Vila Madalena, nossa expertise inclui o licenciamento de restaurantes complexos (Grupo F) e clínicas médicas (Grupo H) que exigem rigor técnico máximo.",
    neighborhoods: [
      "Pinheiros", "Vila Madalena", "Lapa", "Perdizes", "Pompéia", "Butantã", "Vila Leopoldina",
      "Jaguaré", "Alto de Pinheiros", "Sumaré", "Itaim (Oeste)", "Rio Pequeno"
    ],
    highlights: [
      "Especialistas em Restaurantes e Cozinhas (Grupo F)",
      "Regularização de Clínicas e Centros Médicos (Grupo H)",
      "Projetos de Segurança para Escritórios de Tecnologia",
      "Renovação de AVCB para Bares e Espaços Culturais"
    ]
  },
  {
    id: "centro",
    name: "Centro",
    slug: "avcb-centro-sao-paulo",
    mainTitle: "AVCB no Centro de São Paulo: Prédios Históricos e Comerciais",
    metaDescription: "Aprovação de AVCB no Centro de SP. Atendimento na República, Sé, Santa Cecília e Higienópolis. Especialistas em regularização de prédios antigos e comerciais.",
    description: "O Centro de São Paulo exige um conhecimento profundo das normas para edificações existentes. Prédios históricos e centros comerciais de alta densidade requerem soluções de engenharia criativas para garantir a segurança sem comprometer a estrutura.",
    neighborhoods: [
      "República", "Sé", "Santa Cecília", "Higienópolis", "Consolação", "Bela Vista", "Liberdade",
      "Bom Retiro", "Brás", "Pari", "Campos Elíseos", "Barra Funda"
    ],
    highlights: [
      "Regularização de Edificações Existentes (IT-43)",
      "Projetos para Prédios Históricos e Tombados",
      "Segurança contra Incêndio em Centros de Comércio Popular",
      "Adaptação de Sistemas para Prédios Comerciais Antigos"
    ]
  }
];
