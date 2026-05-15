import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/sistema-sprinkler-galpao-industrial-avcb-sp",
  meta: {
    title: "Sistema de Sprinkler para Galpão Industrial em SP — IT 23/25 e NBR 10897 | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sistemas de sprinkler para galpão industrial em SP conforme IT 23/25 e NBR 10897. Cálculo para estocagem em rack, ESFR, pré-ação e ART para AVCB. Diagnóstico gratuito.",
  },
  eyebrow: "IT 23/25 e NBR 10897 — Galpões Industriais e CD",
  h1Line1: "Sistema de Sprinkler para Galpão Industrial",
  h1Line2: "em São Paulo — Projeto, ESFR e AVCB",
  heroBg: "/images/bg-galpao.jpg",
  introP1:
    "Galpões industriais com estocagem em rack, mezaninos e carga de incêndio elevada exigem sistemas de sprinkler dimensionados além das densidades padrão. A DRD2 projeta sistemas ESFR, em-rack e pré-ação para galpões em SP conforme IT 23/25 e NBR 10897, com ART CREA-SP e laudo para AVCB industrial.",
  introP2:
    "Processo completo: classificação de risco por setor, cálculo hidráulico com software, instalação por equipe própria, teste hidrostático e laudo para aprovação do AVCB na primeira vistoria. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Sprinkler", href: "/sprinklers" },
    { label: "Sprinkler para Galpão Industrial" },
  ],
  occupationType: "galpão industrial",
  h2_principal: {
    heading: "Sprinkler para galpão industrial: por que dimensionamento padrão reprova?",
    body: "A IT 23/25 do CBPMESP classifica galpões industriais em Risco Ordinário G2 ou Risco Extra G1/G2 dependendo dos materiais armazenados. Galpões com armazenagem de plásticos, tintas, produtos químicos ou estocagem em rack acima de 3,6 m são automaticamente Risco Extra — exigindo densidade de descarga mínima de 12,2 a 16,3 mm/min sobre área de 260 m², muito acima do Risco Ordinário. Um projeto subdimensionado representa reprovação garantida na vistoria do Corpo de Bombeiros.",
    body2:
      "Para estocagem em rack com mais de 5,4 m de altura, a IT 23 exige sprinklers em-rack instalados entre as prateleiras — não apenas no teto. Sem esse detalhamento, a chama se propaga pelos corredores verticais do rack antes que o calor ative os bicos de teto. A DRD2 projeta corretamente cada tipologia de armazenagem: palete sólido, caixa de papelão, plástico encapsulado e rack fechado.",
  },
  h2_riscos: {
    heading: "Riscos que reprovam sistemas SPK de galpão na vistoria do CBPMESP",
    intro:
      "Esses são os 6 erros mais frequentes em galpões autuados pelo Corpo de Bombeiros em São Paulo — todos evitáveis com projeto correto.",
    itens: [
      {
        titulo: "Risco subdimensionado para todo o galpão",
        desc: "Classificar o galpão inteiro como Risco Ordinário G1 ignora setores de almoxarifado de matéria-prima inflamável, estocagem de tintas ou produtos plásticos — que exigem Risco Extra G2 e densidades até quatro vezes maiores.",
      },
      {
        titulo: "Ausência de sprinkler em-rack",
        desc: "Galpões com rack acima de 3,6 m de altura de estocagem exigem bicos intermediários nas prateleiras conforme IT 23/25. Apenas bicos de teto não cobrem a propagação vertical da chama.",
      },
      {
        titulo: "ESFR usado onde não é permitido",
        desc: "Bicos ESFR (K=200+) eliminam a necessidade de sprinkler em-rack, mas exigem pé-direito mínimo, vedação dos sprinklers de teto e ausência de obstruções laterais. Instalação incorreta leva a reprovação técnica.",
      },
      {
        titulo: "Bomba sem reserva dedicada",
        desc: "IT 23 e NBR 10897 exigem bomba de reserva (jockey + reserva principal) para sistemas de Risco Ordinário e Extra. Galpões com apenas uma bomba são automaticamente reprovados.",
      },
      {
        titulo: "Reservatório sem autonomia mínima",
        desc: "O reservatório deve garantir 60 minutos de operação na área de maior risco calculada. Galpões com reservatório subdimensionado para a densidadee área de operação exigidas pela norma são reprovados.",
      },
      {
        titulo: "Projeto sem ART de execução",
        desc: "Além da ART de projeto, o CBPMESP exige ART de execução do sistema instalado. Galpões que protocolam apenas a ART de projeto sofrem Comunique-se específico nesse item.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o projeto SPK de galpão industrial",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Classificação de risco por setor",
        desc: "Mapeamos cada área do galpão: linha de produção, almoxarifado de matéria-prima, estocagem de produto acabado e escritório interno. Cada setor recebe sua classificação de risco conforme IT 23/25.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Definição de tecnologia SPK",
        desc: "Com base na altura do rack, tipo de armazenagem e pé-direito disponível, definimos: bicos convencionais de teto, sistema em-rack, ESFR ou pré-ação para setores especiais.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Cálculo hidráulico completo",
        desc: "Dimensionamento via software de todos os bicos, ramais, subramais, bomba e reservatório para garantir densidade mínima no ponto mais desfavorecido de cada setor de risco.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Instalação da rede",
        desc: "Montagem de tubulações galvanizadas, bicos calibrados, VGA (Válvula de Governo e Alarme), painel de alarme de fluxo e bombas dedicadas. Equipe própria, sem terceiros.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Teste hidrostático e de funcionamento",
        desc: "Teste hidrostático a 1,5× a pressão de trabalho por 2 horas. Verificação individual de cada bico, VGA, bomba principal e jockey. Relatório fotográfico completo.",
      },
      {
        numero: "ETAPA 06",
        titulo: "ART de projeto + execução e laudo AVCB",
        desc: "Emissão de ART de projeto e ART de execução CREA-SP, laudo técnico com memorial de cálculo e relatório fotográfico — pacote completo para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 23/25 exige especificamente para galpões industriais",
    body1:
      "A norma diferencia galpões de simples armazenagem, centros de distribuição com rack drive-in e plantas industriais com processos produtivos. Cada tipologia tem exigências específicas de densidade, área de operação e tipo de bico.",
    alerta:
      "Galpões com pé-direito acima de 9 m e armazenagem paletizada exigem análise individual — as tabelas padrão da IT 23 não se aplicam diretamente.",
    itens: [
      {
        titulo: "Densidade mínima por categoria de risco",
        desc: "Risco Ordinário G2: 8,1–12,2 mm/min sobre 139–210 m². Risco Extra G1: 12,2 mm/min sobre 260 m². Risco Extra G2: 16,3 mm/min sobre 260 m². O projeto deve demonstrar que o bico mais desfavorecido atinge esses valores.",
      },
      {
        titulo: "Sprinklers em-rack obrigatórios acima de 3,6 m",
        desc: "IT 23/25: estocagem acima de 3,6 m de altura exige bicos entre prateleiras do rack, além dos bicos de teto. A posição vertical, espaçamento e proteção mecânica dos bicos em-rack são especificados na norma.",
      },
      {
        titulo: "ESFR: requisitos de instalação",
        desc: "Bicos ESFR eliminam sprinkler em-rack mas exigem: pé-direito mínimo de 9 m, teto plano sem vigas obstruindo a área de descarga, nenhum obstáculo lateral e vedação dos bicos de teto.",
      },
      {
        titulo: "VGA com alarme de fluxo e supervisão",
        desc: "Todo sistema de galpão industrial deve ter VGA com alarme de fluxo, supervisão elétrica da abertura da válvula de seccionamento e campainha externa — conforme item específico da IT 23/25.",
      },
    ],
    closing:
      "A DRD2 realiza o levantamento técnico gratuito do galpão, classifica cada setor, define a tecnologia correta e apresenta proposta fechada com ART, laudo e aprovação garantida no CBPMESP.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema SPK do galpão industrial?",
    body1:
      "A manutenção semestral é obrigatória conforme IT 23/25. O laudo anual com ART é exigido para renovação do AVCB industrial. Além da manutenção programada, revisão imediata é necessária após qualquer alteração no layout de armazenagem, mudança de produto estocado, ampliação do galpão ou modificação do rack.",
    body2:
      "Situações que exigem revisão urgente: aumento da altura de estocagem acima de 3,6 m, inclusão de produto inflamável no estoque, modificação do sistema de bombeamento, Comunique-se do CBPMESP específico sobre o SPK, ou auditoria de seguradora exigindo laudo atualizado.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema SPK do seu galpão?",
    body1:
      "A DRD2 tem experiência em sistemas de sprinkler para galpões logísticos, centros de distribuição, indústrias químicas e plantas de manufatura em São Paulo. Cada projeto é elaborado por engenheiro especialista com ART CREA-SP ativa e domínio das exigências específicas da IT 23/25 para armazenagem em rack.",
    body2:
      "Processo completo sem terceiros: classificação de risco, projeto hidráulico, instalação, teste e laudo — tudo com a DRD2. Isso garante responsabilidade técnica unificada, prazo controlado e aprovação do AVCB industrial na primeira vistoria.",
  },
  h2_cobertura: {
    heading: "Sistemas SPK para galpão industrial em toda a Grande São Paulo",
    body1:
      "A DRD2 atende galpões industriais em toda a Grande SP: ABC (Santo André, São Bernardo, São Caetano), Guarulhos, Campinas, Osasco, Cajamar, Jandira, Barueri, Cotia, Embu e toda a faixa logística da Anhanguera, Bandeirantes e Dutra.",
    body2:
      "Para galpões fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial de classificação de risco pode ser feito por videochamada com envio de plantas e fotos do sistema existente.",
  },
  faqs: [
    {
      question: "Galpão industrial é obrigado a ter sistema de sprinkler em SP?",
      answer:
        "Sim. Galpões com área superior a 750 m² e ocupação de risco ordinário ou extra — o que inclui a maioria dos centros de distribuição e indústrias em SP — são obrigados a possuir sistema de sprinkler conforme IT 23/25 do CBPMESP e NBR 10897.",
    },
    {
      question: "Qual a diferença entre bico de teto e sprinkler em-rack?",
      answer:
        "Bicos de teto protegem a área sob o teto do galpão. Sprinklers em-rack são instalados entre as prateleiras do rack e protegem a armazenagem de dentro para fora, impedindo a propagação vertical da chama. A IT 23/25 exige bicos em-rack quando a estocagem ultrapassa 3,6 m de altura.",
    },
    {
      question: "O que é um sistema ESFR e quando é indicado para galpões?",
      answer:
        "ESFR (Early Suppression Fast Response) são bicos de resposta rápida e alto K (≥200) que suprimem o incêndio antes que ele se propague verticalmente no rack, eliminando a necessidade de bicos em-rack. São indicados para galpões com pé-direito acima de 9 m, teto plano e armazenagem paletizada em rack convencional.",
    },
    {
      question: "É possível instalar sprinkler em galpão já em operação?",
      answer:
        "Sim. A DRD2 realiza projetos de retrofit para galpões em operação, planejando a instalação fora do horário de atividade ou por setores para minimizar a interrupção. O projeto inclui análise da infraestrutura de água existente e adequação da bomba e reservatório sem paralisar as operações.",
    },
    {
      question: "O SPK substitui o sistema de hidrantes no galpão industrial?",
      answer:
        "Não. Os sistemas são complementares. O sprinkler atua automaticamente no estágio inicial do incêndio, enquanto os hidrantes fornecem combate sustentado pelos bombeiros e brigadistas. A IT 22/25 (hidrantes) e a IT 23/25 (sprinklers) regulamentam cada sistema de forma independente, e galpões acima de certo porte precisam dos dois.",
    },
    {
      question: "Quanto tempo leva para aprovar o AVCB de galpão com sprinkler?",
      answer:
        "O processo completo — levantamento, projeto, instalação e protocolo — leva de 60 a 120 dias dependendo do porte do galpão e da fila do CBPMESP. Para renovação de AVCB com sistema já existente que necessita apenas de adequação e laudo, o prazo é de 30 a 60 dias.",
    },
  ],
  linksInternos: [
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
    { href: "/sistema-de-sprinkler-para-industria-sao-paulo", label: "Sprinkler para Indústria" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/hidrantes", label: "Sistema de Hidrantes" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "SPRINKLER PARA GALPÃO — PROJETO + ESFR + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. Classificação de risco por setor. Processo completo conforme IT 23/25 e NBR 10897.",
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
