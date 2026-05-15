const path = require('path');
const fs = require('fs');

const DATA = {
  // === ZONA SUL ===
  "/avcb-zona-sul": {
    name: "Zona Sul SP",
    regionSlug: "/avcb-zona-sul",
    shortName: "Zona Sul",
    subName: "Polo Comercial e Residencial de Alto Padrão",
    focus: "Condomínios, Comércio e Serviços",
    streets: ["Avenida Santo Amaro", "Avenida Washington Luís", "Av. Eng. Luís Carlos Berrini", "Avenida Ibirapuera", "Rua Vergueiro"],
    services: [
      { name: "Condomínios Residenciais", desc: "Renovação e aprovação de condomínios clube e torres na região sul." },
      { name: "Espaços Comerciais", desc: "Lojas e galerias de rua com alta circulação." },
      { name: "Centros Médicos", desc: "Clínicas especializadas integradas à rede hospitalar regional." }
    ],
    faqs: [
      { question: "Qual a importância do AVCB na Zona Sul?", answer: "Garante a segurança de edificações de médio e alto padrão, sendo determinante para seguro e operações empresariais." },
      { question: "A renovação predial afeta o comércio local?", answer: "Sim, no caso de uso misto, condomínios com AVCB vencido travam a regularização das lojas no térreo." }
    ]
  },
  "/avcb-brooklin": {
    name: "Brooklin",
    regionSlug: "/avcb-zona-sul",
    shortName: "Brooklin",
    subName: "Hub de Negócios e Desenvolvimento",
    focus: "Prédios Comerciais, Bares e Condomínios",
    streets: ["Avenida Engenheiro Luís Carlos Berrini", "Avenida Roberto Marinho", "Rua Padre Antônio José dos Santos", "Rua Barão do Triunfo"],
    services: [
      { name: "Torres Comerciais (Berrini)", desc: "Aprovação contínua e laudos para adequação de infraestrutura corporativa (Triple A)." },
      { name: "Gastronomia", desc: "Restaurantes integrados em andares térreos de edifícios multifamiliares e comerciais." }
    ],
    faqs: [
      { question: "Coworkings no Brooklin exigem laudo próprio?", answer: "Sim, mudanças profundas de área podem exigir projetos individuais mesmo se a torre já tiver AVCB vigente." }
    ]
  },
  "/avcb-campo-belo": {
    name: "Campo Belo",
    regionSlug: "/avcb-zona-sul",
    shortName: "Campo Belo",
    subName: "Residencial Arborizado e Dinâmico",
    focus: "Condomínios Residenciais e Clínicas",
    streets: ["Rua Vieira de Morais", "Rua Jesuíno Maciel", "Avenida Vereador José Diniz", "Rua Barão do Triunfo"],
    services: [
      { name: "Condomínios Residenciais", desc: "Sistemas de hidrantes e alarmes para edifícios multifamiliares." },
      { name: "Clínicas de Estética", desc: "Suporte completo para certificações perante Anvisa e Bombeiros." }
    ],
    faqs: [
      { question: "Como renovar o AVCB do meu prédio no Campo Belo?", answer: "Realizamos testes em equipamentos e validação da ART, simplificando as exigências para síndicos locais." }
    ]
  },
  "/avcb-jabaquara": {
    name: "Jabaquara",
    regionSlug: "/avcb-zona-sul",
    shortName: "Jabaquara",
    subName: "Polo Logístico de Mobilidade Sul",
    focus: "Hospitais, Logística e Prédios Comerciais",
    streets: ["Avenida Jabaquara", "Avenida Engenheiro Armando de Arruda Pereira", "Av. Eng. George Corbisier"],
    services: [
      { name: "Estacionamentos Privativos", desc: "Segurança de frota e isolamento de rotas de evacuação em prédios anexos a hospitais." },
      { name: "Clínicas Médicas", desc: "Instalação de detectores de fumaça e sinalização normativa (IT-11 e IT-20)." }
    ],
    faqs: [
      { question: "Consultórios médicos perto do Hospital exigem aprovação?", answer: "Sim. Licenças estaduais para área de saúde demandam regularização atualizada contra incêndios." }
    ]
  },
  "/avcb-moema": {
    name: "Moema",
    regionSlug: "/avcb-zona-sul",
    shortName: "Moema",
    subName: "Alto Padrão e Rota Aeroviária",
    focus: "Condomínios Verticais, Bares e Clínicas",
    streets: ["Avenida Ibirapuera", "Rua Normandia", "Alameda dos Arapanés", "Avenida Macuco"],
    services: [
      { name: "Ocupações Mistas (Lojas + APB)", desc: "Tratamento de isenção de ruído aeronáutico aliado a restrições e sistemas contraincêndio." },
      { name: "Gastronomia Premium", desc: "Licenças para operações que usam gás (GLP/GN) de maneira extensiva e contínua." }
    ],
    faqs: [
      { question: "A construção vizinha parou a regularização do meu comércio em Moema?", answer: "Frequentemente, mudanças estruturais ao redor exigem revisões nos sistemas integrados de escape e tubulação de gás." }
    ]
  },
  "/avcb-morumbi": {
    name: "Morumbi",
    regionSlug: "/avcb-zona-sul",
    shortName: "Morumbi",
    subName: "Complexos Residenciais e Comerciais de Elite",
    focus: "Condomínios Clube, Colégios e Hospitais",
    streets: ["Avenida Giovanni Gronchi", "Avenida Morumbi", "Rua Deputado João Sussumu Hirata", "Av. Dr. Alberto Penteado"],
    services: [
      { name: "Condomínios de Grande Porte", desc: "Gerenciamento do risco de incêndio envolvendo múltiplos blocos e instalações de gás complexas." },
      { name: "Colégios", desc: "Certificação educacional e controle de materiais (E-1 a E-6)." }
    ],
    faqs: [
      { question: "Hospitais na região demandam vistorias especiais?", answer: "Totalmente. Projetos de setorização (compartimentação) precisam estar rigorosamente aprovados pelo Comando do CBPMESP." }
    ]
  },
  "/avcb-sacoma": {
    name: "Sacomã",
    regionSlug: "/avcb-zona-sul",
    shortName: "Sacomã",
    subName: "Comércio Varejista e Complexos Logísticos",
    focus: "Depósitos, Galerias Comerciais e Galpões",
    streets: ["Rua das Juntas Provisórias", "Avenida Almirante Delamare", "Rua Silva Bueno", "Rodovia Anchieta"],
    services: [
      { name: "Frente Logística Anchieta", desc: "Certificação de condomínios empresariais (Grupo J)." },
      { name: "Grandes Galerias", desc: "Otimização do treinamento de brigadistas para o comércio de alto volume de estoque." }
    ],
    faqs: [
      { question: "Proximidade da Anchieta afeta os projetos?", answer: "No Sacomã, as edificações com perfil atacadista ou armazenagem de sólidos inflamáveis exigem reservas técnicas de água (RTI) maiores." }
    ]
  },
  "/avcb-santo-amaro": {
    name: "Santo Amaro",
    regionSlug: "/avcb-zona-sul",
    shortName: "Santo Amaro",
    subName: "Eixo Econômico Histórico da Zona Sul",
    focus: "Shoppings, Indústrias e Centros de Ensino",
    streets: ["Largo Treze de Maio", "Avenida Santo Amaro", "Avenida Adolfo Pinheiro", "Rua Américo Brasiliense"],
    services: [
      { name: "Centros Comerciais (Largo 13)", desc: "Regularização pontual e emissão de CLCBs para pequenos comércios associados e shoppings de box." },
      { name: "Escritórios Regionais", desc: "Projeto de alarmes e sinalização com emissão e aprovação rápida." }
    ],
    faqs: [
      { question: "Meu estabelecimento comercial perto do Largo Treze está isento?", answer: "Nenhum ponto comercial regular está isento. A modalidade de simplificação (CLCB) pode incidir devido ao tamanho da área locada, mas o certificado é sempre obrigatório." }
    ]
  },
  "/avcb-saude": {
    name: "Saúde",
    regionSlug: "/avcb-zona-sul",
    shortName: "Saúde",
    subName: "Densidade Habitacional e Serviços Médicos",
    focus: "Condomínios Verticais, Comércio e Saúde",
    streets: ["Avenida Jabaquara", "Rua Domingos de Morais", "Rua Carneiro da Cunha", "Rua Afonso Celso"],
    services: [
      { name: "Edifícios Residenciais", desc: "Sincronização com o CBPMESP para processos de renovação de edificações erguidas entre as décadas de 80 e 90." },
      { name: "Serviços Médicos Integrados", desc: "Gerenciamento de risco estrutural e certificações exigidas pela COVISA." }
    ],
    faqs: [
      { question: "A proximidade do metrô afeta meu AVCB?", answer: "Para estabelecimentos comerciais na Av. Jabaquara, as densidades de lotação podem subir conforme as Instruções Técnicas, exigindo portas e saídas antipânico ajustadas." }
    ]
  },
  "/avcb-vila-mariana": {
    name: "Vila Mariana",
    regionSlug: "/avcb-zona-sul",
    shortName: "Vila Mariana",
    subName: "Tradicional, Acadêmico e Comercial",
    focus: "Escolas, Hospitais e Prédios Mistos",
    streets: ["Rua Domingos de Morais", "Rua Vergueiro", "Rua Sena Madureira", "Avenida Lins de Vasconcelos"],
    services: [
      { name: "Centros de Ensino e Faculdades", desc: "Laudos técnicos que evitam embargos de MEC e secretarias com documentação de proteção e escape." },
      { name: "Hospitais e Clínicas", desc: "Regularização contínua atrelada ao licenciamento predial constante e auditorias hospitalares." }
    ],
    faqs: [
      { question: "Como ficam as adaptações de AVCB em casarões antigos adaptados a comércio?", answer: "Construções tombadas ou antigas (Fachadas históricas) têm ritos diferenciados na análise contraincêndio para compensação do risco elétrico." }
    ]
  },
  "/avcb-vila-olimpia": {
    name: "Vila Olímpia",
    regionSlug: "/avcb-zona-sul",
    shortName: "Vila Olímpia",
    subName: "Centro Executivo e Entretenimento Noturno",
    focus: "Prédios Corporativos (Triple A) e Nightlife",
    streets: ["Rua Funchal", "Avenida Doutor Cardoso de Melo", "Rua Gomes de Carvalho", "Rua Olimpíadas"],
    services: [
      { name: "Lajes Corporativas", desc: "Testes automatizados e certificações modulares de infraestrutura predial comercial (sprinklers/detectores)." },
      { name: "Casas Noturnas (Grupo F)", desc: "Consultoria implacável para casas de show e baladas que precisam garantir o Alvará na Prefeitura." }
    ],
    faqs: [
      { question: "Vou abrir uma balada na Vila Olímpia, qual o prazo de aprovação?", answer: "Aprovação do Projeto Técnico (PPCI) para reunião de público (Nightclubs) não prescinde de vistorias rigorosas; em média estima-se 90 a 120 dias." }
    ]
  },

  // === ZONA LESTE ===
  "/avcb-zona-leste-sao-paulo": {
    name: "Zona Leste SP",
    regionSlug: "/avcb-zona-leste",
    shortName: "Zona Leste",
    subName: "Indústria, Atacado e Desenvolvimento Acelerado",
    focus: "Galpões, Indústrias e Condomínios Residenciais",
    streets: ["Avenida Radial Leste", "Avenida Aricanduva", "Avenida Celso Garcia", "Avenida Salim Farah Maluf"],
    services: [
      { name: "Mega Galpões Industriais", desc: "Extenso mapeamento de hidrantes e sistemas de reserva de incêndio." },
      { name: "Novos Empreendimentos Residenciais", desc: "Aprovação de incorporações verticalizadas." }
    ],
    faqs: [
      { question: "Empresas na Radial Leste sofrem qual tipo de fiscalização?", answer: "Geralmente fiscalizações industriais (CETESB e CBPMESP) cobram laudos ambientais." }
    ]
  },
  "/avcb-analia-franco": {
    name: "Anália Franco",
    regionSlug: "/avcb-zona-leste",
    shortName: "Anália Franco",
    subName: "Alto Padrão e Varejo Premium da ZL",
    focus: "Condomínios Residenciais de Luxo e Gastronomia",
    streets: ["Avenida Regente Feijó", "Avenida Vereador Abel Ferreira", "Rua Emília Marengo", "Rua Itapura"],
    services: [
      { name: "Incorporações de Alto Padrão", desc: "Sistemas complexos de CFTV e alarmes de incêndio digitais." },
      { name: "Restaurantes Premium", desc: "Licenças especiais com dimensionamento de sistemas coifa e classe K." }
    ],
    faqs: [
      { question: "Quais são as auditorias exigidas em edifícios de luxo?", answer: "Condomínios de alto padrão com heliponto demandam laudos e brigadas treinadas." }
    ]
  },
  "/avcb-aricanduva": {
    name: "Aricanduva",
    regionSlug: "/avcb-zona-leste",
    shortName: "Aricanduva",
    subName: "Logística e Comércio Varejista",
    focus: "Comércio, Shoppings e Galpões Logísticos",
    streets: ["Avenida Aricanduva", "Avenida Rio das Pedras", "Avenida Dos Latinos", "Avenida Waldemar Carlos Pereira"],
    services: [
      { name: "Varejo e Shoppings", desc: "Acompanhamento normativo da emissão de CLCBs para galerias e lojas." },
      { name: "Centro de Peças", desc: "Regulamentação das lojas de partes automotivas envolvendo líquidos inflamáveis." }
    ],
    faqs: [
      { question: "Lojas no Shopping Aricanduva podem fazer CLCB?", answer: "Sim, renovações de pequenas lojas anexas são autorizadas via sistema simplificado." }
    ]
  },
  "/avcb-itaquera": {
    name: "Itaquera",
    regionSlug: "/avcb-zona-leste",
    shortName: "Itaquera",
    subName: "Polo Habitacional Popular e Comercial",
    focus: "Centros Comerciais, Conjuntos Habitacionais",
    streets: ["Avenida Itaquera", "Avenida Radial Leste", "Avenida Líder", "Rua Victório Santim"],
    services: [
      { name: "Habitação de Interesse Social", desc: "Reforma e atualização de extintores e projeto em grandes massas residenciais." },
      { name: "Arenas e Polos Culturais", desc: "Dimensionamento de grandes fluxos, focando na regularização preventiva." }
    ],
    faqs: [
      { question: "Como legalizo blocos residenciais na ZL?", answer: "É preciso reemitir projetos originais para adaptar rotas de fuga e sistemas atuais." }
    ]
  },
  "/avcb-mooca": {
    name: "Mooca",
    regionSlug: "/avcb-zona-leste",
    shortName: "Mooca",
    subName: "Tradição, Lazer e Indústria",
    focus: "Galpões Logísticos, Gastronomia e Condomínios",
    streets: ["Rua da Mooca", "Avenida Paes de Barros", "Rua dos Trilhos", "Rua Juventus"],
    services: [
      { name: "Indústria Logística", desc: "Renovação e readequação de galpões antigos para o padrão moderno." },
      { name: "Cantinas e Restaurantes", desc: "Fiscalização em rede de gás GLP intensiva em fornos de pizza." }
    ],
    faqs: [
      { question: "Renovar o AVCB na Mooca exige mudanças visuais?", answer: "Não necessariamente, compensamos sistemas para preservar fachadas históricas." }
    ]
  },
  "/avcb-tatuape": {
    name: "Tatuapé",
    regionSlug: "/avcb-zona-leste",
    shortName: "Tatuapé",
    subName: "Eixo Executivo e Verticalizado da ZL",
    focus: "Prédios Comerciais Corporativos e Alto Padrão",
    streets: ["Rua Tuiuti", "Rua Serra de Japi", "Rua Itapura", "Avenida Celso Garcia"],
    services: [
      { name: "Renovação Corporativa Tatuapé", desc: "Prédios de escritórios que precisam de validação de alarmes e SPDA." },
      { name: "Lajes Comerciais", desc: "Regularização de plantas e emissão de ART de estabilidade." }
    ],
    faqs: [
      { question: "Os limites para Isenção e CLCB no Tatuapé variam?", answer: "Seguem o decreto federal de 750m², independentemente da valorização do bairro." }
    ]
  },

  // === ZONA NORTE ===
  "/avcb-zona-norte-sao-paulo": {
    name: "Zona Norte SP",
    regionSlug: "/avcb-zona-norte",
    shortName: "Zona Norte",
    subName: "Tradicional, Industrial e Acesso a Estradas",
    focus: "Condomínios Verticais, Galpões e Comércio",
    streets: ["Avenida Cruzeiro do Sul", "Avenida Engenheiro Caetano Álvares", "Avenida Braz Leme"],
    services: [
      { name: "Serviços Logísticos Via Dutra", desc: "Gerenciamento de galpões nas marginais e acessos rodoviários." },
      { name: "Setor Empresarial Norte", desc: "Adequação dos pólos prediais com exigências corporativas." }
    ],
    faqs: [
      { question: "A emissão de projetos na ZN é mais rápida?", answer: "Atuamos com protocolos ágeis no pelotão local da Região Norte." }
    ]
  },
  "/avcb-guarulhos": {
    name: "Guarulhos",
    regionSlug: "/avcb-grande-sp",
    shortName: "Guarulhos",
    subName: "Logística Aérea e Indústria Pesada",
    focus: "Mega Galpões (Grupos J e M), Transportadoras e Shoppings Verticais",
    streets: ["Rodovia Presidente Dutra (BR-116)", "Avenida Tiradentes", "Avenida Paulo Faccini", "Avenida Monteiro Lobato", "Rodovia Ayrton Senna"],
    services: [
      { name: "Renovação Master de Galpões Logísticos", desc: "Especialística em aprovação célere para o polo aeroportuário." }
    ],
    faqs: [
      { question: "Guarulhos segue as regras de SP Capital?", answer: "Sim, o decreto é estadual, mas as taxas são administradas pelo município." }
    ]
  },
  "/avcb-osasco": {
    name: "Osasco",
    regionSlug: "/avcb-grande-sp",
    shortName: "Osasco",
    subName: "Portal do Comércio e Tecnologia E-commerce",
    focus: "Centros de Distribuição e Câmpus Corporativos",
    streets: ["Avenida dos Autonomistas", "Avenida Hirant Sanazar", "Avenida Maria Campos", "Rua Antônio Agú"],
    services: [
      { name: "Laudos Corporativos Complexos", desc: "Validação contínua do sistema do polo financeiro local." }
    ],
    faqs: [
      { question: "Vistoria em Osasco difere de SP?", answer: "O rito técnico é similar, mas os prazos municipais de alvará variam." }
    ]
  },
  "/avcb-barueri-alphaville": {
    name: "Barueri (Alphaville)",
    regionSlug: "/avcb-grande-sp",
    shortName: "Alphaville",
    subName: "Residencial de Alto Padrão e Polo Comercial Executivo",
    focus: "Condomínios Alphaville e Torres de Escritórios",
    streets: ["Alameda Rio Negro", "Avenida Tamboré", "Alameda Araguaia", "Avenida Yojiro Takaoka"],
    services: [
      { name: "Segurança Condomínio Clube", desc: "Auditorias impecáveis (Grupo A-2) para síndicos profissionais." }
    ],
    faqs: [
      { question: "Sistemas em Alphaville têm prioridade?", answer: "A exigência de precisão é alta devido ao perfil das construções." }
    ]
  }
};

function generatePageContent(slug, data) {
  const safeCompName = data.name.replace(/[^A-Za-z]/g, '') + "LandingPage";

  return `import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, AlertTriangle, ShieldAlert, BadgeInfo, Scale, Library, FileCheck, Shield, BookOpen, Lightbulb, MapPin, Map, Bell, ArrowRight, Users, Building2, Building, Activity, Store, Zap, Truck, Warehouse, Utensils, GlassWater, Music, HelpCircle, HeartPulse, ClipboardCheck } from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const metadata = {
  title: "AVCB e CLCB no(a) ${data.name} | DRD2 Engenharia",
  description: "Regularização de AVCB e CLCB no(a) ${data.name}. Foco em ${data.focus.toLowerCase()}. Aprovação e renovação no Corpo de Bombeiros com projeto especializado.",
  alternates: {
    canonical: "${slug}",
  },
};

export default function ${safeCompName}() {
  const whatsappLink = \`https://wa.me/\${process.env.NEXT_PUBLIC_WHATSAPP}\`;

  const faqItems = [
    ${data.faqs.map(f => `{
      question: "${f.question}",
      answer: "${f.answer}"
    }`).join(',\n    ')}
  ];

  const mainStreets = [
    ${data.streets.map(s => `"${s}"`).join(',\n    ')}
  ];

  return (
    <>
      <JsonLD schema={generateMasterSchema({
        slug: "${slug}",
        title: metadata.title,
        description: metadata.description,
        neighborhood: "${data.name}",
        serviceName: "AVCB e Regularização no(a) ${data.name}",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Regiões", item: "${data.regionSlug || '/avcb-sao-paulo'}" },
          { name: "${data.name}", item: "${slug}" }
        ]
      })} />

      {/* Hero Section - ESTILO CASA DE REPOUSO (H-3) mas com TEXTOS DO BAIRRO */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/banner-avcb.png"
          alt="Regularização de AVCB no(a) ${data.name}"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-12">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> ${data.subName}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB no(a) ${data.name}: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-5xl lg:text-6xl block mt-2">Foco em ${data.focus}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium">
              Sem AVCB válido no(a) ${data.shortName}, sua empresa pode ser <strong className="text-white bg-red-600/30 px-2">interditada</strong> e seu <strong className="text-white bg-red-600/30 px-2">CPF pode responder criminalmente</strong> em caso de fiscalização ou sinistro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-red-700 hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Falar com Engenheiro no(a) ${data.shortName}
              </a>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Atendimento com Engenheiro Especialista (CREA-SP)",
                "Projeto Técnico conforme Decreto Estadual 69.118/2024",
                "Acompanhamento total até a vistoria e aprovação final",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-lg text-gray-300 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Introdução + Cards de Números - ESTILO CASA DE REPOUSO */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="prose prose-lg text-slate-700">
               <h2 className="text-4xl font-black text-slate-900 leading-tight mb-8">
                Excelência em Segurança no(a) <br />
                <span className="text-red-600">${data.shortName}</span>
              </h2>
              <p>
                Regularizar uma edificação no(a) ${data.name} exige conhecimento profundo das Instruções Técnicas do Corpo de Bombeiros. O polo d${data.shortName == 'Centro' ? 'o ' : 'a '} ${data.streets[0]} é um dos mais dinâmicos de SP, exigindo agilidade e precisão técnica.
              </p>
              <p>
                O AVCB comprova que sua edificação atende a todos os requisitos de segurança contra incêndio. Com ele, você opera com segurança jurídica e protege seu patrimônio.
              </p>
              <p>
                A DRD2 Engenharia tem 15 anos de atuação com foco exclusivo em segurança contra incêndio, reunindo vasta experiência na aprovação de ${data.focus.toLowerCase()} no(a) ${data.name}.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "+4000", sub: "Empresas Regularizadas" },
                { label: "+400", sub: "Projetos Aprovados no(a) ${data.shortName}" },
                { label: "+50", sub: "Municípios Atendidos" },
                { label: "15 Anos", sub: "De Experiência Técnica" }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-4xl font-black text-blue-900 mb-2">{stat.label}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades do Bairro - RESGATANDO OS TEXTOS ORIGINAIS DO SEO NO NOVO LAYOUT! */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <span className="text-red-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Especialidades</span>
           <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-tighter">O Que Regularizamos no(a) ${data.shortName}</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {[
                ${(data.services || []).map((item) => `{ title: "${item.name}", text: "${item.desc}" }`).join(',\n                ')}
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all text-left group">
                   <Building2 className="w-12 h-12 text-red-500 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                   <h3 className="text-xl font-black mb-4 uppercase tracking-tighter group-hover:text-red-400 transition-colors">{item.title}</h3>
                   <p className="text-sm text-slate-400 leading-relaxed font-medium group-hover:text-slate-200">{item.text}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* PTS vs PT - ESTILO CASA DE REPOUSO */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <BadgeInfo className="w-16 h-16 text-red-600 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter">
            PTS OU PROJETO TÉCNICO COMPLETO: <br />
            <span className="text-red-600 italic">Qual o seu caso no(a) ${data.shortName}?</span>
          </h2>
          
          <div className="text-lg text-slate-700 space-y-6 text-left mb-10">
            <p className="font-medium">
              A definição do tipo de licenciamento depende da área total construída e do nível de risco. No(a) ${data.name}, identificamos muitos locais que acreditavam ser CLCB (simplificado) mas exigiam AVCB completo.
            </p>
            <div className="bg-red-50 border-l-8 border-red-600 p-8 rounded-r-2xl font-bold text-red-900 mb-10 text-sm md:text-base">
              ⚠️ Divergência de área entre IPTU e realidade é um grande motivo de bloqueio em processos na região de ${data.name}. Nossa equipe audita sua área antes do protocolo.
            </div>

            <div className="flex justify-center mt-10">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-8 py-5 text-xl font-black shadow-[0_10px_40px_rgba(220,38,38,0.4)] hover:bg-red-700 hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tight animate-alert-pulse"
              >
                <Phone className="w-6 h-6" /> Falar com Engenheiro Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Geolocalização Contexto */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl text-center font-black">
           <MapPin className="w-12 h-12 text-red-600 mx-auto mb-6" />
           <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter underline decoration-red-600 decoration-4 underline-offset-8">Atendimento no(a) ${data.name} SP</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {mainStreets.map((street, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center text-red-600 font-bold">{i+1}</div>
                  <span className="text-slate-700 font-bold uppercase text-xs tracking-widest">{street}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ Estilo Casa de Repouso */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">Perguntas <span className="text-red-600">Frequentes</span></h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <details key={i} className="group bg-white rounded-[2rem] p-8 border border-slate-100 open:shadow-2xl transition-all cursor-pointer">
                <summary className="text-xl font-extrabold text-slate-900 list-none flex justify-between items-center pr-4 leading-tight uppercase tracking-tighter">
                  {faq.question}
                  <span className="text-red-600 text-3xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-6 text-slate-600 leading-relaxed font-bold border-t border-slate-100 pt-6 uppercase text-[11px] tracking-tight">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl animate-pulse-subtle text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Regularização no(a) ${data.shortName}</h3>
              <p className="text-slate-400 font-medium italic text-sm">Obtenha seu AVCB sem interdições. Atendimento direto com engenheiro.</p>
            </div>
            <a href={whatsappLink} target="_blank" className="bg-red-600 text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-red-700 transition-all uppercase tracking-widest text-xs whitespace-nowrap">
              Falar com Engenheiro
            </a>
          </div>
        </div>
      </section>

      <LeadForm />
      <WhatsAppFloatingButton />
      <NeighborhoodSilo currentSlug="${slug}" />
    </>
  );
}
`;
}

function run() {
  console.log('Iniciando expansão automática de Silos (RESTAURANDO TEXTOS DE SEO + NOVO LAYOUT)...');
  
  for (const slug in DATA) {
    const destDir = path.join(__dirname, '..', 'src', 'app', slug.replace('/', ''));
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    const payload = generatePageContent(slug, DATA[slug]);
    const pagePath = path.join(destDir, 'page.tsx');
    fs.writeFileSync(pagePath, payload, 'utf8');
    console.log(`SUCESSO: Escrito Master File em ${slug}`);
  }

  console.log(`\nOperação concluída. ${Object.keys(DATA).length} novas landing pages criadas preservando o texto original.`);
}

run();
