import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/sistema-hidrante-hospital-avcb-sp",
  meta: {
    title: "Sistema de Hidrante para Hospital em SP — IT 22/25 e ANVISA | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sistemas de hidrante para hospital e clínica em SP conforme IT 22/25 e ANVISA RDC 50. Operação 24h, setores críticos (UTI, CC), ART e laudo para AVCB hospitalar. Diagnóstico gratuito.",
  },
  eyebrow: "IT 22/25 e ANVISA RDC 50 — Hospitais e Clínicas em SP",
  h1Line1: "Sistema de Hidrante para Hospital",
  h1Line2: "em São Paulo — IT 22/25, ANVISA e AVCB",
  heroBg: "/images/bg-hospital.jpg",
  introP1:
    "Hospitais e clínicas com internação exigem sistema de hidrante dimensionado para operação ininterrupta 24 horas, pressão garantida em todos os setores críticos e conformidade simultânea com IT 22/25 do CBPMESP e ANVISA RDC 50. A DRD2 projeta, instala e certifica sistemas de hidrante para hospitais em São Paulo com ART CREA-SP e laudo para AVCB hospitalar.",
  introP2:
    "Processo completo: levantamento de pressão por setor (UTI, centro cirúrgico, pronto-socorro), projeto com cálculo de reserva técnica de incêndio, instalação sem interrupção de operações e laudo para aprovação simultânea no CBPMESP e ANVISA. Diagnóstico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Hidrantes", href: "/hidrantes" },
    { label: "Hidrante para Hospital" },
  ],
  occupationType: "hospital",
  h2_principal: {
    heading: "Por que hospitais têm exigências específicas para o sistema de hidrantes?",
    body: "Diferente de edificações comerciais, hospitais têm pacientes que não podem ser evacuados rapidamente — em UTIs, centros cirúrgicos e unidades de internação, o combate ao incêndio precisa ser iniciado pelos brigadistas no local antes que qualquer evacuação ocorra. Isso exige que o sistema de hidrantes funcione com pressão mínima garantida em todos os andares e setores críticos, 24 horas por dia, sem depender exclusivamente da rede pública.",
    body2:
      "A IT 22/25 classifica hospitais como ocupação de risco alto (Grupo F-1), exigindo reserva técnica de incêndio (RTI) dimensionada para 30 a 60 minutos de combate simultâneo nos dois hidrantes mais desfavorecidos. Além da IT 22, a ANVISA RDC 50 determina que os sistemas de proteção contra incêndio são pré-requisito para licença sanitária — tornando qualquer não-conformidade uma dupla irregularidade: junto ao CBPMESP e à ANVISA.",
  },
  h2_riscos: {
    heading: "Consequências da não-conformidade do sistema de hidrantes em hospital",
    intro:
      "Hospitais com sistema de hidrante irregular enfrentam dupla autuação: CBPMESP e ANVISA. Esses são os 6 problemas mais frequentes.",
    itens: [
      {
        titulo: "Interdição dupla: CBPMESP + ANVISA",
        desc: "Hospital sem AVCB ativo está em irregularidade perante o CBPMESP. Sem laudo de conformidade dos sistemas de incêndio, a ANVISA pode suspender ou cancelar a licença sanitária — interdição que impede o funcionamento legal.",
      },
      {
        titulo: "Pressão insuficiente nos andares superiores",
        desc: "Sistema de hidrante sem bomba de recalque adequada não garante pressão mínima de 100 kPa no ponto mais desfavorecido. Em hospitais de múltiplos andares, o pavimento mais alto frequentemente fica fora da pressão exigida pela IT 22/25.",
      },
      {
        titulo: "RTI subdimensionada para setores críticos",
        desc: "A reserva técnica de incêndio calculada apenas para um ponto de combate reprova em hospitais com múltiplos focos de risco simultâneo — como PS + internação ou UTI + farmácia no mesmo andar.",
      },
      {
        titulo: "Mangueiras sem certificação ou vencidas",
        desc: "Mangueiras de incêndio em hospitais exigem certificação NBR 11861. Mangueiras sem certificado de conformidade ou com data de validade vencida são causa automática de Comunique-se na vistoria do CBPMESP.",
      },
      {
        titulo: "Bomba sem sistema de acionamento automático",
        desc: "Em hospitais, a bomba de incêndio deve acionar automaticamente quando a pressão cai abaixo do setpoint. Sistemas que exigem acionamento manual são inadequados para ambientes onde o pessoal pode estar em atendimento de emergência médica.",
      },
      {
        titulo: "Seguro hospitalar invalidado em sinistro",
        desc: "Seguradora pode negar pagamento se o laudo de conformidade do sistema de hidrantes não estiver vigente na data do sinistro. Hospitais sem laudo anual com ART estão expostos a esse risco de forma permanente.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa a certificação do sistema de hidrantes hospitalar",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Levantamento de pressão por setor",
        desc: "Medição de pressão estática e dinâmica em cada andar e setor crítico do hospital (UTI, CC, PS, internação). Identificamos queda de pressão entre setores e pontos desfavorecidos.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Projeto hidráulico com RTI",
        desc: "Cálculo da reserva técnica de incêndio para os dois hidrantes mais desfavorecidos em operação simultânea por 30 minutos — mínimo exigido pela IT 22/25 para Grupo F-1.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Adequação sem interromper operações",
        desc: "Execução das adequações por setores, com cronograma acordado com a equipe de manutenção hospitalar. Nenhum setor de atendimento fica sem proteção durante a intervenção.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Instalação de bombas e reservatório",
        desc: "Instalação ou substituição de bomba principal, jockey e reserva. Configuração de acionamento automático por pressostato e alarme de fluxo monitorado pela central do hospital.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Testes de pressão e vazão",
        desc: "Teste completo: pressão estática e dinâmica em todos os hidrantes, vazão mínima no ponto mais desfavorecido, acionamento automático da bomba e funcionamento de toda a sinalização.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo para CBPMESP e ANVISA",
        desc: "Emissão de laudo técnico com ART CREA-SP no formato aceito simultaneamente pelo Corpo de Bombeiros e pela ANVISA — eliminando a necessidade de laudos separados para cada órgão.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 22/25 e ANVISA RDC 50 exigem para hidrantes hospitalares",
    body1:
      "A combinação das exigências da IT 22/25 (CBPMESP) com a RDC 50 (ANVISA) cria um padrão de conformidade mais rigoroso para hospitais do que para qualquer outro tipo de edificação em São Paulo.",
    alerta:
      "Qualquer alteração na planta do hospital — ampliação de andar, reforma de setor ou mudança de ocupação de sala — exige atualização do projeto de hidrantes com nova ART.",
    itens: [
      {
        titulo: "Grupo F-1: máxima exigência da IT 22",
        desc: "Hospitais são Grupo F-1 (saúde com internação), a classificação de maior risco da IT 22/25. Exige hidrantes de 65 mm com esguicho regulável, mangueiras de 30 m certificadas NBR 11861, RTI para 30 min e bomba com reserva.",
      },
      {
        titulo: "Pressão mínima garantida 24h",
        desc: "O sistema deve garantir pressão mínima de 100 kPa e máxima de 1.000 kPa no esguicho. A bomba jockey (pressurização) deve manter o sistema permanentemente pressurizado, com acionamento automático da bomba principal quando a pressão cair.",
      },
      {
        titulo: "Setores críticos com prioridade de combate",
        desc: "UTI, centro cirúrgico, berçário e farmácia são setores de prioridade no projeto — os hidrantes mais próximos devem ter acesso desobstruído e pressão garantida independentemente da operação simultânea de outros pontos.",
      },
      {
        titulo: "Sinalização e iluminação de emergência integradas",
        desc: "A ANVISA RDC 50 exige que os abrigos de mangueira em hospitais tenham sinalização fotoluminescente e sejam incluídos no plano de manutenção semestral documentado — requisito adicional ao do CBPMESP.",
      },
    ],
    closing:
      "A DRD2 realiza o levantamento técnico gratuito do sistema instalado no hospital, identifica todas as não-conformidades com IT 22/25 e ANVISA RDC 50 e apresenta proposta de adequação com laudo aceito pelos dois órgãos.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema de hidrantes do hospital?",
    body1:
      "A manutenção preventiva semestral é obrigatória. O laudo técnico com ART deve ser emitido anualmente para renovação do AVCB e da licença sanitária. Revisão imediata é necessária após qualquer ampliação, reforma de setor, mudança no sistema de bombeamento ou falha de pressão identificada pela equipe de manutenção.",
    body2:
      "Situações de revisão urgente: Comunique-se do CBPMESP específico sobre hidrantes, auditoria da ANVISA para renovação de licença sanitária, reprovação em vistoria por pressão insuficiente, substituição de qualquer bomba ou reservatório, ou incidente que ativou o sistema sem registro técnico.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema de hidrantes do seu hospital?",
    body1:
      "A DRD2 tem experiência em sistemas de hidrantes para hospitais, clínicas com internação, unidades de pronto-socorro e centros cirúrgicos ambulatoriais em São Paulo. Cada projeto contempla a dupla conformidade CBPMESP + ANVISA, eliminando a necessidade de revisões separadas para cada órgão.",
    body2:
      "Processo completo sem terceiros: levantamento, projeto, execução, teste e laudo — com responsabilidade técnica unificada. O laudo entregue pela DRD2 é aceito simultaneamente pelo CBPMESP para o AVCB e pela ANVISA para renovação da licença sanitária.",
  },
  h2_cobertura: {
    heading: "Sistemas de hidrante para hospital em toda a Grande SP",
    body1:
      "A DRD2 atende hospitais, clínicas e unidades de saúde em toda a Grande São Paulo: capital, ABC, Guarulhos, Osasco, Campinas, Santos e municípios da região metropolitana.",
    body2:
      "Para unidades de saúde fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial pode ser feito por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Hospital é obrigado a ter sistema de hidrante em SP?",
      answer:
        "Sim. Hospitais com internação são classificados como Grupo F-1 pela IT 22/25 — a categoria de maior exigência. O sistema de hidrantes é obrigatório e é pré-requisito simultâneo para o AVCB (CBPMESP) e para a licença sanitária (ANVISA RDC 50).",
    },
    {
      question: "O laudo de hidrantes serve tanto para o CBPMESP quanto para a ANVISA?",
      answer:
        "Sim, desde que o laudo seja elaborado por engenheiro com ART CREA-SP e contemple os requisitos técnicos de ambos os órgãos. A DRD2 elabora o laudo técnico no formato aceito simultaneamente pelo Corpo de Bombeiros e pela ANVISA, evitando documentação duplicada.",
    },
    {
      question: "Com que frequência o sistema de hidrantes de hospital deve ser revisado?",
      answer:
        "A manutenção preventiva deve ser semestral, com teste completo de pressão e vazão anual. O laudo técnico com ART CREA-SP é obrigatório anualmente para renovação do AVCB e da licença sanitária. A DRD2 oferece contrato de manutenção preventiva com visitas programadas.",
    },
    {
      question: "É possível fazer a adequação do sistema sem interromper o funcionamento do hospital?",
      answer:
        "Sim. A DRD2 planeja todas as intervenções em fases, setor por setor, com cronograma acordado previamente com a gerência de manutenção hospitalar. Nenhum setor de atendimento fica sem proteção ativa durante a execução dos serviços.",
    },
    {
      question: "A bomba de incêndio do hospital precisa de acionamento automático?",
      answer:
        "Sim. Em hospitais, o acionamento manual da bomba é inaceitável — a IT 22/25 exige acionamento automático por pressostato quando a pressão cai abaixo do setpoint. A bomba jockey deve manter o sistema permanentemente pressurizado, e a bomba principal deve acionar automaticamente em caso de falha da jockey ou abertura de hidrante.",
    },
  ],
  linksInternos: [
    { href: "/hidrantes", label: "Sistema de Hidrantes em SP" },
    { href: "/alarme-de-incendio-hospital-clinica-sp", label: "Alarme de Incêndio para Hospital" },
    { href: "/sistema-sprinkler-hospital-avcb-sp", label: "Sprinkler para Hospital" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "HIDRANTE PARA HOSPITAL — CBPMESP + ANVISA + LAUDO ART",
    body: "Diagnóstico técnico gratuito. Laudo aceito pelo CBPMESP e pela ANVISA. Processo completo conforme IT 22/25 e RDC 50.",
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
