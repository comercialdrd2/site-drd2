import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/sprinkler-centro-distribuicao-sp",
  meta: {
    title: "Sistema de Sprinkler para Centro de Distribuição em SP — IT 23/25 e ESFR | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sistemas de sprinkler para centro de distribuição em SP. ESFR para rack alto, in-rack, câmara fria e doca. IT 23/25, NBR 10897 e laudo para AVCB. Diagnóstico gratuito.",
  },
  eyebrow: "IT 23/25 e NBR 10897 — Centros de Distribuição e Logística em SP",
  h1Line1: "Sistema de Sprinkler para Centro de Distribuição",
  h1Line2: "em São Paulo — ESFR, In-Rack e Câmara Fria",
  heroBg: "/images/bg-galpao.jpg",
  introP1:
    "Centros de distribuição modernos com rack de 12 a 20 m de altura não podem usar sprinklers convencionais de teto como solução exclusiva — a chama sobe verticalmente pelo corredor do rack, consumindo palete após palete antes que o calor ative o bico no teto. A solução tecnicamente correta depende do tipo de produto, da altura do rack e da configuração do piso: ESFR para rack aberto, in-rack para rack fechado, wet pipe para câmaras frias positivas e dry pipe para câmaras abaixo de 0°C. A DRD2 define e instala o sistema certo para cada CD em SP.",
  introP2:
    "Processo completo: análise de produto e rack, definição de tecnologia por setor, projeto hidráulico com cálculo de densidade para o pior cenário de estoque, instalação sem paralisar operações e laudo para AVCB. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Sprinkler", href: "/sprinklers" },
    { label: "Sprinkler para Centro de Distribuição" },
  ],
  occupationType: "galpão industrial",
  h2_principal: {
    heading: "ESFR vs. in-rack vs. convencional: qual sistema escolher para o seu CD?",
    body: "A escolha da tecnologia de sprinkler para um CD depende de três variáveis: altura do rack, tipo de produto armazenado e configuração do corredor. ESFR (Early Suppression Fast Response, K≥200) suprime o incêndio de cima para baixo sem necessidade de bicos intermediários — mas exige rack aberto, pé-direito mínimo e ausência de obstruções laterais. Quando o rack é fechado (drive-in, push-back ou shuttle) ou o produto é embalado em papel ou plástico encapsulado, os sprinklers in-rack são obrigatórios conforme a IT 23/25.",
    body2:
      "A câmara fria é o setor de maior complexidade técnica em CDs: abaixo de 0°C, o sistema molhado convencional (wet pipe) congela. A solução é dry pipe (tubulação pressurizada com ar) ou sistema de anti-congelamento com solução glicol. Para câmaras de congelados abaixo de -18°C, o dry pipe é o único sistema aceito pela IT 23/25. A transição entre a área a temperatura ambiente e a câmara fria também precisa de análise específica — condensação nos bicos da zona de transição pode causar falsos acionamentos.",
  },
  h2_riscos: {
    heading: "O que reprova o sistema SPK de CD na vistoria do CBPMESP",
    intro:
      "Esses 6 problemas são os mais frequentes em centros de distribuição autuados pelo Corpo de Bombeiros em São Paulo.",
    itens: [
      {
        titulo: "ESFR instalado com obstruções laterais no rack",
        desc: "Bicos ESFR eliminam in-rack mas exigem rack totalmente aberto sem obstruções laterais que desviem o jato. Rack com painéis laterais ou correntes de separação invalida a eficácia do ESFR — o projeto precisa especificar outro sistema.",
      },
      {
        titulo: "Sistema molhado em câmara fria abaixo de 0°C",
        desc: "Wet pipe em câmara frigorífica abaixo de 0°C resulta em congelamento da água nas tubulações e nos bicos — impedindo o acionamento em caso de incêndio. A IT 23/25 exige dry pipe ou sistema anti-congelamento.",
      },
      {
        titulo: "In-rack ausente em rack fechado acima de 3,6 m",
        desc: "Rack drive-in ou push-back acima de 3,6 m de altura de estocagem exige sprinklers in-rack entre os níveis de prateleiras. ESFR não é aplicável para rack fechado — a IT 23/25 é explícita nesse ponto.",
      },
      {
        titulo: "Densidade calculada para produto errado",
        desc: "CDs com portfólio variável frequentemente têm projetos calculados para o produto menos inflamável do estoque. Quando produto de alto risco (plástico, aerossol, papel embalado) entra no CD, o sistema está subdimensionado.",
      },
      {
        titulo: "Bomba sem reserva para operação 24h",
        desc: "CDs que operam 24h precisam de bomba de reserva além da jockey e da principal. Se a bomba principal falhar durante o turno da madrugada, o sistema fica sem proteção ativa. A IT 23/25 exige bomba de reserva para Risco Ordinário e Extra.",
      },
      {
        titulo: "Zona de transição câmara fria / área ambiente sem análise",
        desc: "A transição entre área a temperatura positiva e câmara fria negativa cria zona de condensação onde bicos convencionais podem ter acumulação de gelo na estação fria. Esse setor exige bicos de temperatura de ativação mais alta ou proteção adicional.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o sistema SPK para centro de distribuição",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Análise de produto, rack e temperatura",
        desc: "Análise do portfólio de produtos armazenados (para classificação de risco), configuração do rack (aberto, fechado, drive-in), altura máxima de estocagem e existência de câmaras frias.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Definição de tecnologia por setor",
        desc: "ESFR para rack aberto acima de 6 m, in-rack para rack fechado, dry pipe para câmara fria, wet pipe para câmara positiva e convencional para escritório e doca. Projeto setorizado por tecnologia.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Cálculo hidráulico para pior cenário",
        desc: "Densidade de descarga calculada para o produto de maior risco em operação simultânea nos dois bicos mais desfavorecidos. Dimensionamento de bomba principal, reserva e reservatório.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Instalação sem paralisar operações",
        desc: "Execução por setor, com cronograma acordado com o gerente de operações do CD. Nenhum setor fica sem proteção durante a instalação do adjacente. ESFR instalado com rack vazio para garantir posicionamento correto.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Testes por sistema e temperatura",
        desc: "Teste hidrostático por sistema, teste de dry pipe com pressurização de ar, vazão mínima no ponto mais desfavorecido e acionamento automático de bomba. Relatório fotográfico por setor.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo com ART para AVCB",
        desc: "ART de projeto e ART de execução CREA-SP por sistema. Laudo técnico com memorial de cálculo para pior cenário de estoque e documentação pronta para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 23/25 exige especificamente para sprinkler em CD",
    body1:
      "A IT 23/25 classifica CDs conforme o produto armazenado e a configuração do rack. Cada combinação de produto × altura × configuração resulta em um requisito técnico diferente — não existe solução única para todos os CDs.",
    alerta:
      "Mudança de produto armazenado para categoria mais inflamável, aumento da altura do rack ou instalação de nova câmara fria exige atualização do projeto com nova ART antes da alteração.",
    itens: [
      {
        titulo: "ESFR: requisitos de instalação rígidos",
        desc: "Bicos ESFR exigem: rack aberto sem painéis laterais, pé-direito mínimo de 9 m, teto plano sem vigas, nenhuma obstrução lateral acima de 0,15 m e vedação dos bicos de teto para garantir o jato descendente.",
      },
      {
        titulo: "In-rack: posicionamento por altura de prateleira",
        desc: "Sprinklers in-rack devem ser instalados em cada nível de prateleira conforme a IT 23/25, com proteção mecânica aprovada e posicionamento que evite obstrução pelo produto armazenado.",
      },
      {
        titulo: "Dry pipe para câmara fria abaixo de 0°C",
        desc: "Câmaras frigoríficas abaixo de 0°C exigem dry pipe (tubulação pressurizada com ar comprimido). A câmara de air set deve ser instalada fora da câmara fria, acessível para manutenção sem exigir entrada na câmara.",
      },
      {
        titulo: "Bomba de reserva para Risco Ordinário e Extra",
        desc: "A IT 23/25 e a NBR 10897 exigem bomba principal + bomba de reserva para sistemas de Risco Ordinário e Extra. CDs com apenas bomba jockey + principal estão em não-conformidade.",
      },
    ],
    closing:
      "A DRD2 realiza levantamento técnico gratuito do CD, analisa produto e configuração de rack e apresenta proposta com tecnologia correta e laudo aceito pelo CBPMESP.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema SPK do centro de distribuição?",
    body1:
      "A manutenção semestral é obrigatória. O laudo com ART deve ser emitido anualmente para renovação do AVCB. Revisão imediata após qualquer mudança de produto, aumento de altura de rack, instalação de câmara fria ou troca de bomba.",
    body2:
      "Situações urgentes: Comunique-se do CBPMESP sobre SPK, inclusão de produto inflamável no portfólio, rack fechado instalado em área projetada para ESFR, ou câmara fria que perdeu refrigeração (risco de descongelamento do sistema dry pipe).",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema SPK do seu CD?",
    body1:
      "A DRD2 tem experiência em sistemas de sprinkler para centros de distribuição, operadores logísticos e e-commerce em São Paulo — com projetos de ESFR, in-rack, dry pipe para câmaras frias e sistemas mistos para CDs com múltiplas tipologias de rack.",
    body2:
      "Processo completo sem terceiros: análise, projeto, instalação, testes e laudo — tudo com a DRD2. A instalação é planejada setor a setor para não paralisar as operações do CD.",
  },
  h2_cobertura: {
    heading: "Sistemas SPK para CD em toda a Grande SP",
    body1:
      "A DRD2 atende centros de distribuição em toda a Grande São Paulo: Guarulhos, Cajamar, Barueri, Jandira, ABC, Campinas, Embu e municípios ao longo das rodovias Anhanguera, Bandeirantes, Castelo Branco e Dutra.",
    body2:
      "Para CDs fora da Grande SP, realizamos visita técnica com agenda específica. Diagnóstico inicial por videochamada com análise das plantas e fotos do sistema existente.",
  },
  faqs: [
    {
      question: "Qual é a diferença entre ESFR e in-rack para CD?",
      answer:
        "ESFR são bicos de alto K (≥200) que suprimem o incêndio sem necessidade de bicos intermediários — eliminam o in-rack mas exigem rack totalmente aberto. In-rack são bicos instalados entre as prateleiras do rack, obrigatórios para rack fechado (drive-in, push-back) ou produto embalado em plástico ou papel acima de 3,6 m.",
    },
    {
      question: "A câmara fria do CD precisa de sistema dry pipe?",
      answer:
        "Sim, para câmaras abaixo de 0°C. Wet pipe convencional congela nessas temperaturas, impedindo o acionamento. A IT 23/25 exige dry pipe (tubulação pressurizada com ar) ou sistema anti-congelamento com solução glicol para câmaras frigoríficas.",
    },
    {
      question: "Posso usar ESFR em todo o meu CD?",
      answer:
        "Não necessariamente. ESFR exige rack totalmente aberto sem painéis laterais, pé-direito mínimo de 9 m e teto plano. Para rack fechado, drive-in ou produto embalado em plástico encapsulado, o in-rack é obrigatório conforme IT 23/25. A DRD2 avalia cada configuração de rack gratuitamente.",
    },
    {
      question: "Incluir produto inflamável no portfólio do CD exige novo projeto de SPK?",
      answer:
        "Depende da mudança de classificação de risco. Se o produto inflamável eleva o setor de Risco Ordinário para Extra, o sistema precisa ser reavaliado e provavelmente adequado antes de o produto entrar no estoque. A DRD2 faz a avaliação de impacto gratuitamente.",
    },
    {
      question: "Com que frequência o sistema SPK do CD deve ser revisado?",
      answer:
        "Manutenção semestral obrigatória com laudo anual com ART para renovação do AVCB. Para sistemas dry pipe de câmara fria, verificação trimestral da pressão de ar e do compressor é recomendada para evitar falha de pressurização que invalida o sistema.",
    },
  ],
  linksInternos: [
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
    { href: "/hidrante-centro-distribuicao-sp", label: "Hidrante para Centro de Distribuição" },
    { href: "/alarme-incendio-centro-distribuicao-sp", label: "Alarme de Incêndio para CD" },
    { href: "/sistema-de-sprinkler-para-industria-sao-paulo", label: "Sprinkler para Indústria" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "SPRINKLER PARA CD — ESFR + IN-RACK + DRY PIPE + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. Tecnologia certa por setor: rack, câmara fria e doca. Conforme IT 23/25.",
    cta: "Solicitar Diagnóstico Técnico Gratuito",
  },
};

export const metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: data.slug },
};

export default function Page() {
  return <UniversalSeoPage data={data} />;
}
