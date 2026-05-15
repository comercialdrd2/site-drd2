import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/sistema-sprinkler-shopping-center-sp",
  meta: {
    title: "Sistema de Sprinkler para Shopping Center em SP — IT 23/25 por Setor | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sistemas de sprinkler para shopping center em SP. Praça de alimentação (risco extra), cinema (pré-ação), estacionamento e âncoras. IT 23/25 e NBR 10897. Diagnóstico gratuito.",
  },
  eyebrow: "IT 23/25 e NBR 10897 — Shopping Centers e Centros Comerciais em SP",
  h1Line1: "Sistema de Sprinkler para Shopping Center",
  h1Line2: "em São Paulo — Praça, Cinema, Estacionamento e Âncoras",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "Um shopping center reúne ocupações com riscos radicalmente diferentes sob o mesmo teto: a praça de alimentação com fritadeiras é Risco Extra pela carga de gordura; o cinema tem equipamentos eletrônicos que exigem pré-ação; o estacionamento subterrâneo tem carga de incêndio de veículos; e o mall tem Risco Leve. Tratar tudo com um sistema único e genérico é reprovação garantida. A DRD2 projeta sistemas de sprinkler para shopping em SP conforme IT 23/25 e NBR 10897.",
  introP2:
    "Processo completo: classificação de risco por setor, projeto hidráulico setorizado, definição de tecnologia correta (convencional, pré-ação, ESFR), instalação sem interrupção do shopping e laudo para AVCB. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Sprinkler", href: "/sprinklers" },
    { label: "Sprinkler para Shopping" },
  ],
  occupationType: "shopping",
  h2_principal: {
    heading: "Por que shoppings precisam de sprinkler setorizado por tipo de risco?",
    body: "A IT 23/25 é clara: cada setor do shopping tem sua classificação de risco e as densidades de descarga são radicalmente diferentes. O mall (corredor) é Risco Leve — 4,1 mm/min sobre 139 m². A praça de alimentação com fritadeiras industriais é Risco Extra G1 — 12,2 mm/min sobre 260 m². O estacionamento subterrâneo com veículos é Risco Ordinário G2 a Extra G1 dependendo do número de andares. Um projeto que aplica a mesma densidade para todos os setores subdimensiona os mais críticos e superdimensiona os mais leves.",
    body2:
      "O cinema é o setor com maior complexidade técnica: equipamentos de projeção digital de alta precisão valem R$ 500 mil a R$ 2 milhões e são destruídos por contato com água. A solução correta é o sistema de pré-ação seco, onde a tubulação permanece sem água até a confirmação de incêndio por dois sinais independentes — detector e bico termossensível. Shoppings que instalam sistema convencional molhado em salas de cinema estão em não-conformidade com a NBR 10897.",
  },
  h2_riscos: {
    heading: "O que reprova o sistema SPK de shopping na vistoria do CBPMESP",
    intro:
      "Esses 6 problemas são os mais frequentes em shoppings autuados pelo Corpo de Bombeiros em São Paulo.",
    itens: [
      {
        titulo: "Praça de alimentação com risco subdimensionado",
        desc: "Praças com fritadeiras, churrasqueiras e chapa quente têm carga de gordura classificada como Risco Extra G1 pela IT 23/25. Projetos que classificam a praça como Risco Leve ou Ordinário têm densidade de descarga insuficiente para controlar o incêndio.",
      },
      {
        titulo: "Sistema convencional em sala de cinema",
        desc: "Cinema com sistema SPK molhado convencional arrisca destruição dos projetores por descarga acidental. A NBR 10897 e a IT 23/25 permitem e recomendam pré-ação seco para ambientes com equipamentos eletrônicos de alto valor.",
      },
      {
        titulo: "Estacionamento sem análise de risco específico",
        desc: "Estacionamentos subterrâneos com mais de 2 subsolos e veículos de carga são classificados como Risco Extra. Projetos que aplicam Risco Ordinário para todos os estacionamentos subdimensionam os mais críticos.",
      },
      {
        titulo: "Bomba sem separação entre sistemas",
        desc: "O sistema SPK e o sistema de hidrantes devem ter bombas dedicadas independentes. Shoppings que compartilham bomba entre os dois sistemas estão em não-conformidade com IT 22 e IT 23 simultaneamente.",
      },
      {
        titulo: "Cozinha de restaurante âncora sem supressão de gordura",
        desc: "Cozinhas de restaurantes âncora com fritadeiras e chapas quentes sobre coifa precisam de sistema de supressão de gordura (wet chemical) — separado e independente do SPK geral do shopping.",
      },
      {
        titulo: "Bicos obstruídos por decoração ou forros de lojas",
        desc: "Lojas que reformam com forros rebaixados bloqueiam a descarga dos bicos do shopping. O condomínio é responsável por verificar que reformas de lojistas não obstruam o sistema. A IT 23/25 atribui essa responsabilidade ao síndico do condomínio.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o sistema SPK para shopping center",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Classificação de risco por setor",
        desc: "Mapeamento e classificação: mall (leve), praça de alimentação (extra G1), cinema (pré-ação), estacionamento (ordinário G2/extra G1), lojas âncora, área de serviço e depósitos.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Definição de tecnologia por setor",
        desc: "Convencional molhado para mall e lojas, pré-ação seco para cinema, sistema de supressão de gordura para cozinhas de âncora, ESFR ou convencional para estacionamento conforme porte.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Projeto hidráulico setorizado",
        desc: "Cálculo de densidade, pressão e reservatório para cada setor independentemente. Dimensionamento de bomba dedicada para o setor de maior risco em operação simultânea.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Instalação por setor e fase",
        desc: "Execução por setor, fora do horário de maior fluxo do shopping. Cinema instalado durante período de menor programação. Praça de alimentação executada setorizada para manter operação.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Testes completos por sistema",
        desc: "Teste hidrostático, teste de pré-ação do cinema, vazão mínima em cada setor e acionamento automático de bomba. Relatório fotográfico por setor com resultados de pressão.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo com ART por setor para AVCB",
        desc: "ART de projeto e ART de execução CREA-SP por sistema. Laudo técnico com memorial de cálculo setorizado e documentação pronta para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 23/25 exige para sprinkler em shopping center",
    body1:
      "Shopping centers são Grupo C-2 na IT 23/25. Cada setor deve ser classificado e projetado individualmente. A norma proíbe um único projeto com densidade uniforme para toda a edificação.",
    alerta:
      "Reforma de ala, nova âncora ou expansão de praça exige atualização do projeto SPK com nova ART — antes do início das obras, não após a vistoria.",
    itens: [
      {
        titulo: "Praça de alimentação: Risco Extra G1",
        desc: "IT 23/25: praças com fritadeiras industriais, chapas quentes e churrasqueiras são Risco Extra G1. Densidade mínima de 12,2 mm/min sobre 260 m². Bicos de resposta padrão (Standard Response) são exigidos.",
      },
      {
        titulo: "Cinema: pré-ação seco recomendado",
        desc: "NBR 10897 e IT 23/25 permitem pré-ação seco em ambientes com equipamentos eletrônicos de alto valor. No cinema, a tubulação fica sem água até a confirmação dupla de incêndio — elimina dano hídrico acidental.",
      },
      {
        titulo: "Estacionamento subterrâneo: análise por número de subsolos",
        desc: "Até 2 subsolos com veículos leves: Risco Ordinário G2. Acima de 2 subsolos ou com veículos de carga: Risco Extra G1. A classificação determina densidade e bomba adequada.",
      },
      {
        titulo: "Responsabilidade de lojistas por reformas",
        desc: "A IT 23/25 atribui ao condomínio a responsabilidade por verificar que reformas de lojistas não obstruam bicos ou alterem a área de cobertura. O AVCB do shopping pode ser comprometido por reforma não autorizada de lojista.",
      },
    ],
    closing:
      "A DRD2 realiza levantamento técnico gratuito do shopping, classifica cada setor, define a tecnologia correta e apresenta proposta com laudo aceito pelo CBPMESP na primeira vistoria.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema de sprinkler do shopping?",
    body1:
      "A manutenção semestral é obrigatória. O laudo com ART deve ser emitido anualmente para renovação do AVCB. Revisão imediata é necessária após qualquer reforma de ala, nova âncora, expansão de praça ou mudança de layout que altere cobertura de bicos.",
    body2:
      "Situações urgentes: Comunique-se do CBPMESP sobre SPK, reforma de loja que instalou forro obstruindo bico, expansão do estacionamento, instalação de nova cozinha de âncora ou troca de bomba.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema de sprinkler do seu shopping?",
    body1:
      "A DRD2 tem experiência em sistemas de sprinkler para shopping centers, outlets e centros comerciais em São Paulo. Cada projeto setoriza corretamente, define a tecnologia adequada por ambiente e garante que a responsabilidade de cada setor esteja clara no laudo.",
    body2:
      "Processo completo sem terceiros: classificação, projeto, instalação, testes e laudo. Execução planejada para minimizar impacto nas operações, com cronograma acordado com a gerência do shopping.",
  },
  h2_cobertura: {
    heading: "Sistemas de sprinkler para shopping em toda a Grande SP",
    body1:
      "A DRD2 atende shopping centers, centros comerciais e outlets em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco e municípios da região metropolitana.",
    body2:
      "Para shoppings fora da Grande SP, realizamos visita técnica com agenda específica. Diagnóstico inicial por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Qual o risco de incêndio da praça de alimentação do shopping?",
      answer:
        "A praça de alimentação com fritadeiras industriais, chapas quentes e churrasqueiras é classificada como Risco Extra G1 pela IT 23/25. Isso exige densidade mínima de 12,2 mm/min sobre 260 m² — muito acima do Risco Leve do mall. Um projeto que classifica a praça como Risco Leve é reprovado na vistoria.",
    },
    {
      question: "A sala de cinema do shopping precisa de sistema de pré-ação?",
      answer:
        "É a solução mais adequada. A NBR 10897 e a IT 23/25 permitem pré-ação seco em ambientes com equipamentos eletrônicos de alto valor, como projetores de cinema. O sistema evita dano hídrico por acionamento acidental — um projetor digital pode custar R$ 500 mil a R$ 2 milhões.",
    },
    {
      question: "O condomínio do shopping é responsável por manter o SPK das lojas?",
      answer:
        "Sim, nas áreas comuns. Para lojas com sistema próprio integrado ao AVCB do shopping, a responsabilidade é compartilhada conforme o contrato de locação. A IT 23/25 atribui ao condomínio a responsabilidade de verificar que reformas de lojistas não obstruam bicos.",
    },
    {
      question: "O estacionamento subterrâneo do shopping precisa de sprinkler?",
      answer:
        "Sim. Estacionamentos subterrâneos com mais de 750 m² são obrigados a ter sistema de sprinkler conforme IT 23/25. A classificação de risco (Ordinário G2 ou Extra G1) depende do número de subsolos e tipo de veículos.",
    },
    {
      question: "Com que frequência o sistema de sprinkler do shopping deve ser revisado?",
      answer:
        "Manutenção semestral obrigatória com laudo anual com ART para renovação do AVCB. Para o sistema de pré-ação do cinema, recomendamos verificação trimestral da pressão de ar e dos detectores integrados.",
    },
  ],
  linksInternos: [
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
    { href: "/sistema-hidrante-shopping-center-sp", label: "Hidrante para Shopping" },
    { href: "/sistema-alarme-incendio-shopping-center-sp", label: "Alarme de Incêndio para Shopping" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "SPRINKLER PARA SHOPPING — PRAÇA, CINEMA, ESTACIONAMENTO E ÂNCORAS",
    body: "Diagnóstico técnico gratuito. Tecnologia certa por setor. Processo completo conforme IT 23/25 e NBR 10897.",
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
