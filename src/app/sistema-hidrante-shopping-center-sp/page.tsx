import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/sistema-hidrante-shopping-center-sp",
  meta: {
    title: "Sistema de Hidrante para Shopping Center em SP — IT 22/25 por Setor | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sistemas de hidrante para shopping center em SP conforme IT 22/25. Cobertura por âncora, estacionamento subterrâneo, bomba com gerador e laudo para AVCB. Diagnóstico gratuito.",
  },
  eyebrow: "IT 22/25 — Shopping Centers e Centros Comerciais em SP",
  h1Line1: "Sistema de Hidrante para Shopping Center",
  h1Line2: "em São Paulo — Setorizado por Âncora e Estacionamento",
  heroBg: "/images/blog/fire_safety_equipment_premium.webp",
  introP1:
    "Shopping centers têm uma particularidade única: o sistema de hidrantes precisa cobrir âncoras com donos distintos, estacionamentos subterrâneos fechados e praça de alimentação com carga de incêndio elevada — tudo sob responsabilidade do condomínio comercial para efeito do AVCB. A DRD2 projeta e instala sistemas de hidrante para shopping em SP conforme IT 22/25, com ART CREA-SP e laudo para AVCB.",
  introP2:
    "Processo completo: levantamento por setor (mall, âncoras, estacionamento, área de serviço), cálculo da reserva técnica para os dois pontos mais desfavorecidos em simultâneo, bomba com alimentação pelo gerador de emergência e laudo para aprovação do AVCB. Diagnóstico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Hidrantes", href: "/hidrantes" },
    { label: "Hidrante para Shopping" },
  ],
  occupationType: "shopping",
  h2_principal: {
    heading: "Por que shoppings exigem sistema de hidrantes setorizado por tipo de ocupação?",
    body: "Um shopping center não é uma única ocupação homogênea. O mall (corredor) é Risco Leve. A praça de alimentação com fritadeiras e churrasqueiras é Risco Ordinário G2. O estacionamento subterrâneo tem carga de incêndio elevada e confinamento que exige análise específica de pressão. Cada âncora pode ter sistema próprio ou compartilhado, dependendo do contrato de locação. Projetar um único sistema sem setorização resulta em subdimensionamento em pelo menos um setor e reprovação na vistoria.",
    body2:
      "A IT 22/25 classifica shopping centers como Grupo C-2 — comércio varejista de grande porte — com exigências específicas de siamês de recalque externo acessível, bomba com acionamento automático e reserva técnica de incêndio (RTI) para os dois hidrantes mais desfavorecidos em operação simultânea por 30 minutos. Para shoppings com gerador próprio, a bomba deve ter circuito elétrico de emergência.",
  },
  h2_riscos: {
    heading: "O que reprova o sistema de hidrantes de shopping na vistoria do CBPMESP",
    intro:
      "Esses 6 problemas são os mais frequentes em shopping centers autuados pelo Corpo de Bombeiros em São Paulo.",
    itens: [
      {
        titulo: "Estacionamento sem cobertura adequada de hidrantes",
        desc: "Estacionamentos subterrâneos têm carga de incêndio elevada e confinamento que dificulta o combate. A IT 22/25 exige hidrantes posicionados para cobertura de cada vaga com raio máximo de 30 m — não apenas nos corredores de circulação.",
      },
      {
        titulo: "RTI calculada apenas para o mall",
        desc: "Shoppings com estacionamento e praça de alimentação precisam de RTI para o pior cenário de dois hidrantes simultâneos em setores distintos. RTI dimensionada somente para o mall ignora o caso mais exigente.",
      },
      {
        titulo: "Bomba sem alimentação pelo gerador de emergência",
        desc: "Shopping centers com gerador devem conectar a bomba de incêndio ao circuito de emergência. A IT 22/25 não aceita dependência exclusiva da rede concessionária para edificações com grande fluxo de público.",
      },
      {
        titulo: "Siamês de recalque obstruído ou sem sinalização",
        desc: "O siamês externo deve estar acessível a 3 m da via pública, sinalizado com placa fotoluminescente e compatível com acoplamentos do CBPMESP. Reformas de fachada frequentemente obstruem o siamês sem perceber.",
      },
      {
        titulo: "Responsabilidade de âncora não definida no laudo",
        desc: "Quando o contrato de locação não define claramente se o sistema da âncora é responsabilidade do shopping ou do lojista, o AVCB do condomínio pode ter pendências que comprometem a renovação.",
      },
      {
        titulo: "Mangueiras vencidas ou sem certificação",
        desc: "Mangueiras em shoppings sofrem uso indevido e desgaste acelerado. A manutenção semestral é obrigatória. Mangueiras sem certificação NBR 11861 são Comunique-se automático na renovação do AVCB.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o sistema de hidrantes para shopping center",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Levantamento setorial completo",
        desc: "Mapeamento de todos os setores: mall, praça de alimentação, cada âncora, estacionamento por subsolo, área de carga/descarga e casa de máquinas. Identificamos responsabilidades por setor.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Cálculo da RTI pelo pior cenário",
        desc: "Cálculo da reserva técnica para os dois hidrantes mais desfavorecidos em setores distintos em operação simultânea. O cenário mais exigente define o reservatório e a potência da bomba.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Projeto com bomba e gerador",
        desc: "Dimensionamento de tubulação, bomba principal, jockey e reserva com alimentação pelo gerador de emergência do shopping e acionamento automático por pressostato.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Instalação da rede e abrigos",
        desc: "Montagem de tubulação de recalque, abrigos de mangueira por setor, siamês de recalque externo e hidrantes do estacionamento. Execução fora do horário de pico do shopping.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Testes em todos os setores",
        desc: "Teste de pressão e vazão em cada setor, ponto mais desfavorecido (geralmente subsolo do estacionamento), acionamento automático da bomba e funcionamento com gerador.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo com ART para AVCB",
        desc: "ART de projeto e ART de execução CREA-SP. Laudo com memorial de cálculo por setor, relatório fotográfico e documentação pronta para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 22/25 exige especificamente para hidrantes de shopping",
    body1:
      "Shopping centers são Grupo C-2 na IT 22/25. As exigências superam as de lojas isoladas, especialmente quanto à cobertura de estacionamento, alimentação de emergência da bomba e siamês de recalque.",
    alerta:
      "Ampliação do shopping — novo subsolo, nova âncora ou expansão da praça — exige atualização do projeto de hidrantes com nova ART antes do início das obras.",
    itens: [
      {
        titulo: "Hidrante em estacionamento subterrâneo",
        desc: "Cobertura obrigatória de cada vaga, com distância máxima de 30 m de qualquer ponto. O estacionamento é o setor mais desfavorecido de pressão e precisa de análise específica.",
      },
      {
        titulo: "Bomba com alimentação de emergência",
        desc: "Shoppings com gerador devem conectar a bomba ao circuito de emergência. A IT 22/25 proíbe dependência exclusiva da rede concessionária para edificações de grande porte.",
      },
      {
        titulo: "Siamês de recalque acessível e compatível",
        desc: "O siamês deve ser acessível na fachada, sinalizado com fotoluminescência e compatível com os acoplamentos do CBPMESP. Manutenção documentada do siamês é exigência formal.",
      },
      {
        titulo: "Registros de manutenção dos últimos 24 meses",
        desc: "O CBPMESP pode solicitar registros de manutenção semestral na renovação do AVCB. Shoppings sem contrato de manutenção formalizado estão expostos a Comunique-se específico.",
      },
    ],
    closing:
      "A DRD2 realiza levantamento técnico gratuito do shopping, identifica todas as não-conformidades por setor e apresenta proposta de adequação com laudo aceito pelo CBPMESP.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema de hidrantes do shopping?",
    body1:
      "A manutenção semestral é obrigatória. O laudo com ART deve ser emitido anualmente para renovação do AVCB. Revisão imediata é necessária após qualquer ampliação, reforma de estacionamento, nova âncora ou troca de bomba.",
    body2:
      "Situações urgentes: Comunique-se do CBPMESP sobre hidrantes, queda de pressão em qualquer setor, reforma que altere o acesso ao siamês, ou expansão de praça de alimentação ou estacionamento.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema de hidrantes do seu shopping?",
    body1:
      "A DRD2 tem experiência em sistemas de hidrantes para shopping centers, centros comerciais e parques de varejo em São Paulo. Cada projeto setoriza corretamente por tipo de ocupação e define claramente a responsabilidade técnica de cada área.",
    body2:
      "Processo completo sem terceiros: levantamento, projeto, instalação, testes e laudo. A execução é planejada fora do horário de pico, com cronograma acordado com a gerência de operações.",
  },
  h2_cobertura: {
    heading: "Sistemas de hidrante para shopping em toda a Grande SP",
    body1:
      "A DRD2 atende shopping centers e centros comerciais em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para shoppings fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial pode ser feito por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Shopping center é obrigado a ter sistema de hidrantes em SP?",
      answer:
        "Sim. Shopping centers são Grupo C-2 pela IT 22/25 — maior exigência para o comércio varejista. O sistema de hidrantes é obrigatório e pré-requisito para o AVCB do condomínio comercial.",
    },
    {
      question: "O estacionamento subterrâneo do shopping precisa de hidrante próprio?",
      answer:
        "Sim. A IT 22/25 exige cobertura de hidrantes em estacionamento subterrâneo para todos os pontos, com distância máxima de 30 m de qualquer vaga. O estacionamento é frequentemente o ponto mais desfavorecido de pressão no projeto.",
    },
    {
      question: "A bomba de incêndio do shopping precisa estar conectada ao gerador?",
      answer:
        "Sim. Shoppings com gerador de emergência devem conectar a bomba de incêndio ao circuito de emergência. A IT 22/25 não aceita dependência exclusiva da rede concessionária para edificações com grande público.",
    },
    {
      question: "Cada âncora do shopping precisa de sistema de hidrantes próprio?",
      answer:
        "Depende do porte da âncora e do contrato de locação. Âncoras acima de 750 m² podem ter sistema próprio desde que integrado ao AVCB do shopping. A DRD2 avalia cada caso e define a solução correta.",
    },
    {
      question: "Com que frequência o sistema de hidrantes do shopping deve ser revisado?",
      answer:
        "Manutenção semestral obrigatória, com teste completo de pressão e vazão anual. O laudo com ART deve ser emitido anualmente para renovação do AVCB. A DRD2 oferece contrato de manutenção preventiva com visitas programadas.",
    },
  ],
  linksInternos: [
    { href: "/hidrantes", label: "Sistema de Hidrantes em SP" },
    { href: "/sistema-alarme-incendio-shopping-center-sp", label: "Alarme de Incêndio para Shopping" },
    { href: "/sistema-sprinkler-shopping-center-sp", label: "Sprinkler para Shopping" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "HIDRANTE PARA SHOPPING — SETORIZADO + GERADOR + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. Cobertura por setor: mall, praça, estacionamento e âncoras. Conforme IT 22/25.",
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
