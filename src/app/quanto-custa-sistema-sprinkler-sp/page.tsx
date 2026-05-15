import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/quanto-custa-sistema-sprinkler-sp",
  meta: {
    title: "Quanto Custa um Sistema de Sprinkler em SP? — Wet Pipe, Dry Pipe e Pré-Ação | DRD2 Engenharia",
    description: "Saiba quanto custa um sistema de sprinkler em SP: diferença entre wet pipe, dry pipe e pré-ação, o que encarece (bicos concealed, ESFR, bomba dedicada) e o que deve constar no orçamento. Diagnóstico gratuito.",
  },
  eyebrow: "Referência de Custo — Sistemas de Sprinkler em São Paulo",
  h1Line1: "Quanto Custa um Sistema de Sprinkler",
  h1Line2: "em SP? — Wet Pipe, Dry Pipe e Pré-Ação",
  heroBg: "/images/banner-hero.webp",
  introP1:
    "O sistema de sprinkler é o mais custoso dos três sistemas de proteção contra incêndio — e o que mais varia em custo conforme o tipo: um sistema wet pipe (tubulação sempre com água) para escritório de Risco Leve é radicalmente diferente em custo de um sistema dry pipe para câmara de congelados ou de um sistema de pré-ação para sala de servidores. A diferença entre um projeto wet pipe básico e um projeto com pré-ação para ambiente crítico pode ser de R$ 40.000 a R$ 200.000 no mesmo porte de edificação. Entender o tipo correto antes de orçar é o passo mais importante.",
  introP2:
    "Esta página apresenta faixas de referência por tipo de sistema e porte de edificação, os principais fatores que encarecem o projeto e o que deve constar em qualquer orçamento completo para aprovação do AVCB. A DRD2 realiza diagnóstico técnico gratuito com identificação do sistema correto antes de qualquer proposta.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Sprinkler", href: "/sprinklers" },
    { label: "Quanto Custa Sprinkler SP" },
  ],
  occupationType: "comercial",
  h2_principal: {
    heading: "O que determina o custo de um sistema de sprinkler em SP?",
    body: "Cinco variáveis principais definem o custo: (1) tipo de sistema — wet pipe (molhado), dry pipe (seco), pré-ação, dilúvio ou ESFR; (2) classificação de risco — Leve, Ordinário G1/G2 ou Extra G1/G2 determinam a densidade de descarga e o tamanho da bomba; (3) tipo de bico — bico padrão de teto é o mais barato; bico embutido (concealed) para forro rebaixado é o mais caro; bico ESFR (K≥200) para racks altos tem custo unitário elevado; (4) bomba dedicada com reservatório exclusivo; (5) retrofit versus construção nova.",
    body2:
      "O custo por bico instalado — que inclui bico, tubulação, conexões e suportes rateados por ponto — varia de R$ 180 a R$ 350 para bico padrão wet pipe, de R$ 350 a R$ 650 para bico concealed em forro rebaixado, e de R$ 800 a R$ 1.500 para bico ESFR em instalação industrial. A bomba dedicada com painel e reservatório exclusivo adiciona R$ 18.000 a R$ 60.000 ao custo total — e é obrigatória pela IT 23/25 para qualquer sistema de sprinkler.",
  },
  h2_riscos: {
    heading: "O que faz o orçamento de sprinkler encarecer além do esperado",
    intro:
      "Esses são os fatores que transformam um orçamento inicial barato em um projeto com custo final muito acima do previsto.",
    itens: [
      {
        titulo: "Tipo de sistema errado — troca obrigatória na vistoria",
        desc: "Câmara de congelados que recebe wet pipe terá a tubulação bloqueada por gelo. Sala de servidor que recebe wet pipe expõe equipamentos de R$ 2 milhões a descarga acidental. Identificar o tipo correto antes de instalar evita troca completa do sistema — custo de retrabalho maior do que o de instalação.",
      },
      {
        titulo: "Classificação de risco subestimada",
        desc: "Depósito com rack acima de 1,5 m classificado como Risco Leve tem bomba subdimensionada e bicos com k insuficiente. Reclassificação após instalação exige troca de bomba, bicos e cálculo hidráulico — custo de retrabalho de R$ 20.000 a R$ 80.000 dependendo do porte.",
      },
      {
        titulo: "Bomba compartilhada com sistema de hidrante",
        desc: "A IT 23/25 exige bomba dedicada ao sprinkler, independente da bomba do hidrante. Se o orçamento prevê bomba compartilhada, o projeto será reprovado e a separação de sistemas exigirá nova bomba, novo painel e nova ART.",
      },
      {
        titulo: "Bicos concealed em forro rebaixado não orçados",
        desc: "Ambientes com forro rebaixado de gesso exigem bicos embutidos (concealed) — custo unitário 80% a 120% maior do que bico padrão. Orçamentos que listam bico padrão para ambientes com forro serão reprovados na vistoria por obstrução de jato.",
      },
      {
        titulo: "Reservatório de incêndio exclusivo não previsto",
        desc: "A IT 23/25 exige reservatório exclusivo para sprinkler — não compartilhado com abastecimento predial. Se a edificação não tem reservatório separado, a construção ou adaptação pode adicionar R$ 8.000 a R$ 45.000 ao custo total.",
      },
      {
        titulo: "Retrofit com tubulação em área já ocupada",
        desc: "Em prédios existentes, instalar tubulação de sprinkler (diâmetros maiores do que tubulação de água fria) em forro já acabado ou em shaft já ocupado é a operação mais trabalhosa — e a mais frequentemente subestimada em orçamentos sem visita técnica prévia.",
      },
    ],
  },
  h2_processo: {
    heading: "O que um orçamento completo de sprinkler deve incluir",
    etapas: [
      {
        numero: "ITEM 01",
        titulo: "Classificação de risco e definição do sistema",
        desc: "Levantamento técnico com classificação de risco por setor, definição do tipo de sistema (wet pipe, dry pipe, pré-ação) e seleção do tipo de bico por ambiente. Etapa de maior impacto no custo final.",
      },
      {
        numero: "ITEM 02",
        titulo: "Projeto hidráulico com memorial de cálculo",
        desc: "Cálculo de densidade, pressão e vazão para o pior setor em operação simultânea. Dimensionamento de bomba, jockey e reservatório exclusivo. Posicionamento de bicos conforme IT 23/25.",
      },
      {
        numero: "ITEM 03",
        titulo: "ART de projeto CREA-SP",
        desc: "Assinatura do engenheiro responsável. Custo entre R$ 1.200 e R$ 4.000 dependendo do porte e da complexidade — deve constar explicitamente no orçamento.",
      },
      {
        numero: "ITEM 04",
        titulo: "Tubulação, bicos, conexões e suportes",
        desc: "Tubulação de aço carbono com pintura vermelha ou galvanizada conforme sistema, bicos certificados por tipo e temperatura, conexões flangeadas e suportes espaçados conforme NFPA 13. Tipo de bico define custo unitário.",
      },
      {
        numero: "ITEM 05",
        titulo: "Bomba dedicada com painel, jockey e reservatório",
        desc: "Bomba principal dimensionada para o setor de maior risco, jockey de pressurização, painel elétrico com pressostato e reservatório exclusivo de incêndio. Componente de maior peso no custo total do projeto.",
      },
      {
        numero: "ITEM 06",
        titulo: "Testes completos, laudo e ART de execução",
        desc: "Teste hidrostático, teste de vazão no ponto mais desfavorecido, teste de acionamento de bomba e relatório fotográfico. ART de execução CREA-SP e laudo técnico para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Faixas de custo de referência para sprinkler em SP",
    body1:
      "As faixas abaixo são referências para projetos completos (levantamento, projeto, ART, materiais, instalação, testes e laudo). Valores reais dependem do tipo de sistema, da classificação de risco e das condições da edificação.",
    alerta:
      "Orçamentos sem bomba dedicada, sem reservatório exclusivo ou com tipo de sistema incorreto para o ambiente serão reprovados na vistoria — gerando custo de retrabalho maior do que a instalação correta desde o início.",
    itens: [
      {
        titulo: "Wet pipe — Risco Leve, até 1.000 m²",
        desc: "Faixa de referência: R$ 18.000 a R$ 45.000. Bicos padrão de teto, bomba de 5 a 10 CV, reservatório de 6 m³ a 10 m³. Adequado para escritórios e pequeno comércio sem ambientes especiais.",
      },
      {
        titulo: "Wet pipe — Risco Ordinário, 1.000 m² a 3.000 m²",
        desc: "Faixa de referência: R$ 45.000 a R$ 130.000. Bicos com k maior, bomba de 15 a 30 CV, reservatório de 15 m³ a 30 m³. Para comércio médio, depósitos e indústria leve.",
      },
      {
        titulo: "Dry pipe ou pré-ação — qualquer porte",
        desc: "Adicional de 40% a 80% sobre wet pipe equivalente pelo custo do painel de válvula aceleradora, compressor de ar, sistema de detecção integrado (pré-ação) e maior complexidade de teste e manutenção.",
      },
      {
        titulo: "ESFR para rack alto — galpão industrial ou CD",
        desc: "Faixa de referência: R$ 80.000 a R$ 300.000+ dependendo da área e altura do rack. Bicos K≥200 com espaçamento reduzido, bomba de 30 a 75 CV, reservatório acima de 30 m³. Sistema mais caro, mas elimina a necessidade de in-rack sprinklers em racks abertos.",
      },
    ],
    closing:
      "A DRD2 realiza diagnóstico técnico gratuito, classifica o risco real de cada setor, define o tipo de sistema correto e apresenta orçamento com escopo completo — sem surpresas de custo durante a execução.",
  },
  h2_quando: {
    heading: "Quando solicitar orçamento de sprinkler em SP?",
    body1:
      "Antes de qualquer vencimento do AVCB que exija sprinkler. Imediatamente após Comunique-se do CBPMESP sobre o sistema de sprinkler, após mudança de uso que altere a classificação de risco, ou após instalação de rack de armazenagem que eleve a altura de estocagem.",
    body2:
      "Em construções novas, o projeto de sprinkler deve ser aprovado antes do início das obras. Em galpões e centros de distribuição que alterem o layout de racks, qualquer mudança na altura de estocagem acima do limite do projeto original exige atualização de ART.",
  },
  h2_escolher: {
    heading: "Por que solicitar diagnóstico da DRD2 antes de contratar?",
    body1:
      "A DRD2 identifica o tipo correto de sistema para cada setor, classifica o risco real, dimensiona a bomba e o reservatório necessários e apresenta orçamento com todos os itens que compõem o projeto completo — antes que qualquer retrabalho seja necessário.",
    body2:
      "Processo completo sem terceiros: classificação de risco, projeto hidráulico, ART, materiais, instalação, testes e laudo — tudo com a DRD2. Nenhuma etapa subcontratada. Responsabilidade técnica única do projeto à aprovação.",
  },
  h2_cobertura: {
    heading: "Instalação de sprinkler em toda a Grande SP",
    body1:
      "A DRD2 atende edificações de todos os portes em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para edificações fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial pode ser feito por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Qual o custo médio de um sistema de sprinkler para escritório em SP?",
      answer:
        "Para escritórios até 1.000 m² com Risco Leve e wet pipe convencional, a faixa de referência é R$ 18.000 a R$ 45.000 para projeto completo com ART e laudo. Se o escritório tiver forro rebaixado de gesso exigindo bicos concealed, adicione 30% a 50% ao custo dos bicos.",
    },
    {
      question: "Quanto custa sistema de sprinkler dry pipe para câmara de congelados?",
      answer:
        "O dry pipe custa 40% a 80% a mais do que wet pipe equivalente pelo custo da válvula aceleradora, compressor de ar, painel de controle e complexidade do teste. Para câmara de congelados de 200 m², a faixa é R$ 25.000 a R$ 55.000 dependendo da altura do pé-direito e do produto armazenado.",
    },
    {
      question: "A bomba de sprinkler precisa ser separada da bomba de hidrante?",
      answer:
        "Sim, obrigatoriamente. A IT 23/25 exige bomba dedicada ao sistema de sprinkler, independente da bomba do sistema de hidrante. Compartilhar bomba resulta em dupla não-conformidade — com IT 22/25 e IT 23/25 simultaneamente. Esse é um dos erros mais frequentes em projetos de baixo custo.",
    },
    {
      question: "O orçamento precisa incluir ART de engenheiro?",
      answer:
        "Sim. Duas ARTs são obrigatórias: ART de projeto e ART de execução CREA-SP. Sem ARTs, o laudo não é aceito pelo CBPMESP para aprovação do AVCB. Orçamentos sem ART no escopo têm custo adicional quando solicitadas — e podem atrasar a aprovação.",
    },
    {
      question: "Quanto custa instalar sprinkler em prédio existente (retrofit)?",
      answer:
        "Retrofit custa 35% a 65% mais do que instalação em obra nova pelo desafio de instalar tubulação de maior diâmetro em forros já acabados, shafts ocupados e estrutura de concreto. O diagnóstico técnico com visita ao imóvel é indispensável para qualquer orçamento de retrofit.",
    },
  ],
  linksInternos: [
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
    { href: "/quanto-custa-sistema-hidrante-sp", label: "Quanto Custa Hidrante" },
    { href: "/quanto-custa-sistema-alarme-incendio-sp", label: "Quanto Custa Alarme de Incêndio" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "ORÇAMENTO DE SPRINKLER EM SP — DIAGNÓSTICO GRATUITO",
    body: "Levantamento técnico sem custo. Tipo correto de sistema por setor. Orçamento com escopo completo — ART, bomba, reservatório e laudo.",
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
