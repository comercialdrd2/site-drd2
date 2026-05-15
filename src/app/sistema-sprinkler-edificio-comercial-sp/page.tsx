import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/sistema-sprinkler-edificio-comercial-sp",
  meta: {
    title: "Sistema de Sprinkler para Edifício Comercial em SP — IT 23/25 e Pré-Ação | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sistemas de sprinkler para edifício comercial em SP. Pré-ação em sala de servidores, layout variável por inquilino e ART para AVCB. IT 23/25 e NBR 10897. Diagnóstico gratuito.",
  },
  eyebrow: "IT 23/25 e NBR 10897 — Edifícios Comerciais e Corporativos em SP",
  h1Line1: "Sistema de Sprinkler para Edifício Comercial",
  h1Line2: "em São Paulo — Layout Variável, Pré-Ação e AVCB",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "Edifícios comerciais em São Paulo têm um desafio único: o layout dos andares muda a cada troca de inquilino — divisórias drywall, forros rebaixados e salas de servidor aparecem e desaparecem. O sistema de sprinkler precisa ser projetado com flexibilidade para cobrir diferentes configurações sem exigir novo projeto a cada reforma. A DRD2 projeta e instala sistemas de sprinkler para edifícios comerciais em SP conforme IT 23/25 e NBR 10897, com ART CREA-SP e laudo para AVCB.",
  introP2:
    "Processo completo: classificação de risco por tipo de uso do andar, projeto com margem para variação de layout, pré-ação para sala de servidores, instalação sem paralisar o prédio e laudo para AVCB. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Sprinkler", href: "/sprinklers" },
    { label: "Sprinkler para Edifício Comercial" },
  ],
  occupationType: "comercial",
  h2_principal: {
    heading: "Como o layout variável de edifícios comerciais afeta o sistema de sprinkler?",
    body: "A IT 23/25 exige que os bicos de sprinkler cubram 100% da área do andar sem zonas mortas. Em um edifício comercial open plan, um bico de teto a cada 12 m² garante cobertura. Mas quando o inquilino instala divisórias drywall que vão do piso ao teto, ele cria salas fechadas com bicos de teto que agora precisam cobrir a sala individualmente — e muitas vezes os bicos existentes ficam acima das divisórias, cobrindo o espaço de forro e não o interior da sala.",
    body2:
      "O projeto correto para edifícios comerciais com múltiplos inquilinos prevê bicos de parede (sidewall) para salas menores, bicos extras de teto para salas maiores e um memorando técnico que define quais reformas de layout exigem atualização do projeto de sprinkler. Salas de servidor (TI) merecem atenção especial: equipamentos de R$ 2 a R$ 10 milhões são destruídos por descarga acidental de água — a solução é pré-ação seco com detecção de fumaça integrada.",
  },
  h2_riscos: {
    heading: "O que reprova o sistema SPK de edifício comercial na vistoria do CBPMESP",
    intro:
      "Esses 6 problemas são os mais frequentes em edifícios comerciais autuados pelo Corpo de Bombeiros em São Paulo.",
    itens: [
      {
        titulo: "Bicos obstruídos por divisórias instaladas acima",
        desc: "Divisórias drywall que chegam até o teto mas não penetram o forro criam bolsões onde o bico de teto cobre o forro mas não o interior da sala. A IT 23/25 exige bico dentro de cada sala com área acima do mínimo.",
      },
      {
        titulo: "Sala de servidor com sistema convencional molhado",
        desc: "Salas de TI com servidores de alto valor e sistema SPK convencional estão expostas a dano hídrico por acionamento acidental. A NBR 10897 recomenda pré-ação seco para ambientes com equipamentos eletrônicos críticos.",
      },
      {
        titulo: "Arquivo morto sem reclassificação de risco",
        desc: "Inquilino que usa parte do andar como arquivo morto eleva a carga de incêndio para Risco Ordinário G2 — acima do Risco Leve calculado para escritórios. Sem reclassificação, o sistema está subdimensionado.",
      },
      {
        titulo: "Bicos de coeficiente k errado para o risco",
        desc: "Projetos que especificam bicos com k=80 (padrão escritório) para um andar com depósito ou arquivo morto têm densidade de descarga insuficiente para a carga de incêndio real. A IT 23/25 é explícita: o k deve ser definido pelo risco, não pelo padrão de mercado.",
      },
      {
        titulo: "Bomba compartilhada com sistema de hidrantes",
        desc: "A IT 23/25 proíbe compartilhamento de bomba entre sistema de sprinkler e sistema de hidrantes. Edifícios que compartilham estão em não-conformidade com ambas as normas simultaneamente.",
      },
      {
        titulo: "Projeto desatualizado após reforma de inquilino",
        desc: "Reforma que altera o layout do andar sem notificar o condomínio pode criar zonas mortas de cobertura. O condomínio é responsável por exigir projeto as-built atualizado para cada reforma que afete o sistema.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o sistema SPK para edifício comercial",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Classificação de risco por uso de andar",
        desc: "Identificamos o uso atual de cada andar: escritório open plan (Risco Leve), escritório compartimentado (Leve/Ordinário), arquivo morto (Ordinário G2), servidor/TI (Ordinário + pré-ação).",
      },
      {
        numero: "ETAPA 02",
        titulo: "Projeto com margem de layout",
        desc: "Posicionamento de bicos que garante cobertura para layouts abertos e fechados. Definição de zonas onde divisórias podem ser instaladas sem necessidade de novo projeto de sprinkler.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Pré-ação para sala de servidores",
        desc: "Projeto de sistema de pré-ação seco integrado a detectores de fumaça para salas de TI. A água só é liberada após confirmação dupla de incêndio — eliminando risco de dano hídrico acidental.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Instalação por andar sem paralisar",
        desc: "Execução por andar, fora do horário de pico dos inquilinos. Nenhum andar fica sem proteção durante a instalação dos demais. Equipe própria sem terceiros.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Testes completos por sistema",
        desc: "Teste hidrostático, vazão mínima no ponto mais desfavorecido, teste de pré-ação das salas de servidor e acionamento automático de bomba. Relatório fotográfico por andar.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo com ART e guia de reformas",
        desc: "ART de projeto e ART de execução CREA-SP. Laudo com memorial de cálculo e guia de reformas permitidas — documentação que protege o condomínio de responsabilidade por reformas de inquilinos.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 23/25 exige para sprinkler em edifício comercial",
    body1:
      "Edifícios comerciais são Grupo C na IT 23/25, com classificação de risco que varia conforme o uso do andar. Escritórios são Risco Leve; arquivos e depósitos são Risco Ordinário G2. O projeto deve refletir o uso real — não apenas o uso previsto na construção.",
    alerta:
      "Reforma de inquilino que altere o layout do andar ou a carga de incêndio exige notificação ao condomínio e atualização do projeto SPK com nova ART antes do início das obras.",
    itens: [
      {
        titulo: "Cobertura total mesmo com layout variável",
        desc: "A IT 23/25 exige cobertura de 100% da área com bicos. Em andares open plan, bicos de teto cobrem. Com divisórias fechadas, pode ser necessário bico dentro de cada sala acima de 9 m².",
      },
      {
        titulo: "Pré-ação para sala de TI",
        desc: "Salas de servidor são ambientes de risco tecnológico, não apenas de incêndio. O pré-ação seco é a solução que protege contra incêndio sem exposição a descarga acidental de água.",
      },
      {
        titulo: "Reclassificação obrigatória para arquivo morto",
        desc: "Arquivo morto com papel acima de 1,2 m de altura é Risco Ordinário G2 — exige bicos com k=115 ou superior. Projeto calculado para Risco Leve é tecnicamente inadequado para esse uso.",
      },
      {
        titulo: "Bomba dedicada independente do hidrante",
        desc: "A IT 23/25 exige bomba dedicada ao sistema de sprinkler. O compartilhamento com o sistema de hidrantes é proibido e resulta em não-conformidade perante as duas normas.",
      },
    ],
    closing:
      "A DRD2 realiza levantamento técnico gratuito do edifício, classifica o risco real de cada andar e apresenta proposta de adequação ou instalação com laudo aceito pelo CBPMESP.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema SPK do edifício comercial?",
    body1:
      "A manutenção semestral é obrigatória. O laudo com ART deve ser emitido anualmente para renovação do AVCB. Revisão imediata é necessária após mudança de inquilino que altere o uso do andar, instalação de sala de servidor ou arquivo morto, ou qualquer reforma que modifique divisórias ou o forro.",
    body2:
      "Situações urgentes: Comunique-se do CBPMESP sobre SPK, reforma de inquilino que instalou forro obstruindo bico, mudança de uso para arquivo ou depósito, ou instalação de nova sala de TI sem projeto de pré-ação.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema SPK do seu edifício comercial?",
    body1:
      "A DRD2 tem experiência em sistemas de sprinkler para edifícios comerciais e corporativos em São Paulo — incluindo retrofit em prédios existentes e instalação de pré-ação para salas de TI. Cada projeto inclui guia de reformas permitidas que protege o condomínio legalmente.",
    body2:
      "Processo completo sem terceiros: classificação de risco, projeto com margem de layout, instalação por andar e laudo com ART — tudo com a DRD2. Execução fora do horário de pico dos inquilinos.",
  },
  h2_cobertura: {
    heading: "Sistemas SPK para edifício comercial em toda a Grande SP",
    body1:
      "A DRD2 atende edifícios comerciais e corporativos em toda a Grande São Paulo: Paulista, Faria Lima, Berrini, Alphaville, ABC, Guarulhos, Campinas e municípios da região metropolitana.",
    body2:
      "Para prédios fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial pode ser feito por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Edifício comercial precisa de sistema de sprinkler em SP?",
      answer:
        "Sim. Edifícios comerciais acima de determinada área ou altura são obrigados a ter sistema de sprinkler conforme IT 23/25 do CBPMESP. A obrigatoriedade depende da área total, altura e classificação de risco do uso. A DRD2 faz o enquadramento correto gratuitamente.",
    },
    {
      question: "A sala de servidor do escritório precisa de sistema especial?",
      answer:
        "Sim. Salas de TI com servidores de alto valor precisam de sistema de pré-ação seco — não de sprinkler convencional molhado. O pré-ação evita descarga acidental de água que destruiria os equipamentos. A NBR 10897 permite e recomenda essa solução.",
    },
    {
      question: "Reforma de inquilino pode comprometer o sistema SPK do edifício?",
      answer:
        "Sim. Divisórias que vão até o teto, forros rebaixados instalados abaixo dos bicos e mudanças de layout podem criar zonas mortas de cobertura. O condomínio deve exigir que cada reforma seja avaliada tecnicamente antes da execução.",
    },
    {
      question: "Um andar com arquivo morto precisa de projeto SPK diferente?",
      answer:
        "Sim. Arquivo morto com papel acima de 1,2 m é Risco Ordinário G2 — exige bicos com maior coeficiente k e densidade de descarga superior ao Risco Leve de escritório. O projeto deve ser atualizado antes da mudança de uso.",
    },
    {
      question: "Com que frequência o sistema SPK do edifício deve ser revisado?",
      answer:
        "Manutenção semestral obrigatória com laudo anual com ART para renovação do AVCB. Para sistemas de pré-ação de sala de TI, recomendamos verificação trimestral da pressão de ar e dos detectores integrados.",
    },
  ],
  linksInternos: [
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
    { href: "/sistema-hidrante-edificio-comercial-sp", label: "Hidrante para Edifício Comercial" },
    { href: "/alarme-de-incendio-comercial-escritorio-sp", label: "Alarme de Incêndio Comercial" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "SPRINKLER COMERCIAL — LAYOUT VARIÁVEL + PRÉ-AÇÃO TI + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. Projeto com margem para reformas de inquilinos. Conforme IT 23/25 e NBR 10897.",
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
