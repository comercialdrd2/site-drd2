import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/sprinkler-obrigatorio-avcb-sp",
  meta: {
    title: "Sprinkler é Obrigatório em SP? — Quando Exigido pela IT 23/25 e AVCB | DRD2 Engenharia",
    description: "Descubra quando o sistema de sprinkler é obrigatório em SP pela IT 23/25: ocupação, área, altura e risco que determinam a exigência. O que acontece sem o sistema e como regularizar. Diagnóstico gratuito.",
  },
  eyebrow: "IT 23/25 — Obrigatoriedade de Sprinkler em São Paulo",
  h1Line1: "Sprinkler é Obrigatório em SP?",
  h1Line2: "Quando a IT 23/25 Exige o Sistema para o AVCB",
  heroBg: "/images/banner-hero.webp",
  introP1:
    "A obrigatoriedade do sistema de sprinkler em São Paulo é definida pela IT 23/25 do CBPMESP e tem os maiores limites de área e altura entre os três sistemas principais de proteção contra incêndio — o que não significa que seja raro: grandes centros de distribuição, shoppings, hospitais, hotéis acima de determinado porte e edifícios residenciais altos estão incluídos. O sprinkler é o sistema de maior custo de instalação — e também o que mais frequentemente é descoberto como obrigatório apenas no momento da vistoria do AVCB, quando o prazo de regularização é curto e o custo de retrofit é elevado.",
  introP2:
    "A DRD2 realiza diagnóstico técnico gratuito que inclui o enquadramento correto da edificação na IT 23/25, a verificação de obrigatoriedade, o tipo de sistema necessário por setor e a apresentação de escopo e prazo realista para regularização com AVCB.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Sprinkler", href: "/sprinklers" },
    { label: "Sprinkler Obrigatório SP" },
  ],
  occupationType: "comercial",
  h2_principal: {
    heading: "Quais edificações são obrigadas a ter sistema de sprinkler em SP?",
    body: "A IT 23/25 estabelece obrigatoriedade de sprinkler para edificações que atendam a critérios de área, altura ou risco específico. Os grupos mais frequentemente obrigados incluem: edificações residenciais de grande altura (acima de 23 m em SP pelo Decreto 63.911/18); hospitais, clínicas e casas de repouso (Grupo H) acima do limite mínimo; shoppings e centros comerciais de grande porte (Grupo C-2); galpões industriais e centros de distribuição (Grupo G) com área acima do limite; e hotéis e flats (Grupo B) de determinado porte e altura.",
    body2:
      "Dois critérios tornam o sprinkler obrigatório independentemente da área total: (1) edificações com risco extra de incêndio — como centros de distribuição com produto em rack acima de 3,6 m, indústrias com produtos inflamáveis em quantidade acima do limite e edificações com grande concentração de carga combustível; (2) edificações de uso hospitalar com internação — onde a capacidade de evacuação dos pacientes é limitada e o sistema de supressão automática é condição indispensável para segurança.",
  },
  h2_riscos: {
    heading: "O que acontece quando o sprinkler obrigatório não está instalado",
    intro:
      "Além das consequências comuns à ausência de qualquer sistema obrigatório, o sprinkler tem particularidades que elevam o risco jurídico da omissão.",
    itens: [
      {
        titulo: "AVCB bloqueado para edificações de grande porte",
        desc: "Edificações acima dos limites da IT 23/25 não recebem AVCB sem o sistema de sprinkler instalado e aprovado. Para galpões industriais, shoppings e hospitais, o AVCB é condição do alvará de funcionamento — sem ele, a atividade não pode ser exercida legalmente.",
      },
      {
        titulo: "Custo de retrofit elevado versus instalação em obra",
        desc: "O sprinkler é o sistema mais difícil de instalar em retrofit — tubulação de maior diâmetro do que sistemas elétricos e hidráulicos convencionais, bomba dedicada de grande potência e reservatório exclusivo. Descobrir a obrigatoriedade após a conclusão da obra pode multiplicar o custo do sistema em 40% a 70%.",
      },
      {
        titulo: "Seguro de incêndio invalidado para edificações de risco",
        desc: "Seguros de grandes riscos — incluindo galpões industriais, centros de distribuição e shoppings — frequentemente exigem sprinkler em operação como condição da apólice. Sem o sistema, a cobertura pode ser recusada em caso de sinistro.",
      },
      {
        titulo: "Responsabilidade civil agravada em hospitais sem sprinkler",
        desc: "Em hospitais com pacientes internados, a ausência de sprinkler quando obrigatório é agravante de responsabilidade civil em casos de sinistro — os pacientes internados têm capacidade de fuga limitada, e o sistema automático de supressão é a principal linha de defesa.",
      },
      {
        titulo: "Locatários industriais exigindo compliance antes da ocupação",
        desc: "Grandes operadores logísticos e indústrias multinacionais exigem, no processo de locação de galpão, a apresentação do AVCB com o sistema de sprinkler instalado e aprovado. Proprietários de galpões sem o sistema perdem contratos de locação para operadores exigentes.",
      },
      {
        titulo: "Atualização exigida após mudança de produto ou layout de rack",
        desc: "Em centros de distribuição, a mudança do produto armazenado ou a elevação da altura de rack pode alterar a classificação de risco — exigindo adequação do sistema de sprinkler existente. Operar com sistema subdimensionado para o risco atual é não-conformidade mesmo que o sistema tenha sido aprovado anteriormente.",
      },
    ],
  },
  h2_processo: {
    heading: "Como verificar se o sprinkler é obrigatório e regularizar em SP",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Enquadramento na IT 23/25",
        desc: "Identificação do grupo de ocupação, área total, altura e classificação de risco de cada setor. Para galpões e CDs, o layout de rack e o tipo de produto são determinantes para a classificação de risco (Leve, Ordinário ou Extra).",
      },
      {
        numero: "ETAPA 02",
        titulo: "Definição do tipo de sistema por setor",
        desc: "Cada setor da edificação pode exigir um tipo diferente: wet pipe para escritório e área de vendas, dry pipe para câmara de congelados, pré-ação para sala de servidores, ESFR para rack alto. Essa definição precede qualquer orçamento.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Diagnóstico técnico gratuito",
        desc: "A DRD2 verifica obrigatoriedade, define o tipo de sistema correto por setor, avalia sistema existente (se houver) e apresenta escopo e prazo realista para regularização — incluindo viabilidade de instalação em paralelo com a operação.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Projeto hidráulico com ART de projeto",
        desc: "Projeto com memorial de cálculo, dimensionamento de bomba e reservatório, posicionamento de bicos e definição de tipo por ambiente. ART de projeto assinada por engenheiro CREA-SP. Para edificações acima de determinado porte, o projeto pode ser submetido ao CBPMESP antes da instalação.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Instalação por setor sem paralisar operação",
        desc: "Execução por setor, com cronograma acordado com a operação da edificação. Nenhum setor fica sem proteção enquanto outro está em instalação. Equipe própria sem terceirização de etapas críticas.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Testes completos, laudo e ART de execução",
        desc: "Teste hidrostático, vazão no ponto mais desfavorecido, acionamento de bomba e relatório fotográfico. ART de execução CREA-SP e laudo técnico completo para protocolo no CBPMESP e vistoria do AVCB.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Grupos de ocupação com maior frequência de obrigatoriedade de sprinkler em SP",
    body1:
      "Os grupos abaixo são os que mais frequentemente atingem os critérios de obrigatoriedade de sprinkler conforme a IT 23/25. O enquadramento correto depende da área, altura, risco e características específicas de cada edificação.",
    alerta:
      "Qualquer mudança de uso, ampliação de área ou alteração da altura de armazenagem que eleve a classificação de risco exige reavaliação da obrigatoriedade e adequação do sistema existente — mesmo que ele tenha sido aprovado para o uso anterior.",
    itens: [
      {
        titulo: "Grupo G — Industrial e centros de distribuição",
        desc: "Galpões industriais e centros de distribuição acima de determinada área com produto em rack são obrigados conforme a IT 23/25. A classificação de risco (Ordinário ou Extra) depende do tipo de produto, da altura do rack e da presença de câmaras frigoríficas.",
      },
      {
        titulo: "Grupo H — Saúde e internação",
        desc: "Hospitais com internação, clínicas cirúrgicas e casas de repouso são obrigados a ter sprinkler acima do limite de área da IT 23/25. O tipo de sistema varia por setor: wet pipe para corredores, pré-ação seco para UTI e salas cirúrgicas.",
      },
      {
        titulo: "Grupos A e B — Residencial alto e hotéis",
        desc: "Edifícios residenciais de grande altura e hotéis de determinado porte são obrigados a ter sprinkler. O decreto estadual de SP (63.911/18) define os limites específicos para edificações residenciais — incluindo critérios de altura e área que são mais restritivos do que os federais.",
      },
      {
        titulo: "Grupos C e D — Shoppings e serviços de grande porte",
        desc: "Shoppings centers, centros comerciais e edificações de serviços de grande porte atingem os critérios de obrigatoriedade de sprinkler. A praça de alimentação, o cinema e o estacionamento subterrâneo exigem sistemas específicos por setor conforme a IT 23/25.",
      },
    ],
    closing:
      "A DRD2 realiza o enquadramento correto da sua edificação na IT 23/25 gratuitamente, define o tipo de sistema correto por setor e apresenta um plano de regularização com AVCB viável para o calendário da operação.",
  },
  h2_quando: {
    heading: "Quando a obrigatoriedade de sprinkler deve ser verificada?",
    body1:
      "A verificação deve ser feita antes do início de qualquer projeto de construção nova ou retrofit, antes da contratação de qualquer locatário industrial, e antes de qualquer mudança de produto armazenado ou aumento de altura de rack em centros de distribuição e galpões.",
    body2:
      "Para renovação do AVCB, o laudo de manutenção anual com ART deve atestar conformidade com a IT 23/25 vigente. Mudanças na norma — como a atualização de 2025 — podem exigir adequação de sistemas aprovados pela edição anterior. A DRD2 verifica o status de conformidade do sistema existente gratuitamente.",
  },
  h2_escolher: {
    heading: "Por que escolher a DRD2 para regularização de sprinkler em SP?",
    body1:
      "A DRD2 tem experiência em instalação e regularização de sprinkler para todos os grupos de ocupação em SP — incluindo retrofit em galpões em operação, adequação de sistema subdimensionado e instalação de dry pipe em câmaras de congelados. O diagnóstico gratuito define o caminho mais rápido para o AVCB.",
    body2:
      "Processo completo sem terceiros: enquadramento, projeto hidráulico, ART, materiais, instalação por setor, testes e laudo — tudo com a DRD2. Execução planejada para minimizar impacto na operação da edificação.",
  },
  h2_cobertura: {
    heading: "Regularização de sprinkler em toda a Grande SP",
    body1:
      "A DRD2 atende edificações de todos os grupos de ocupação em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para edificações fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial com verificação de obrigatoriedade e classificação de risco pode ser feito por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Como saber se o meu galpão precisa de sprinkler?",
      answer:
        "A obrigatoriedade depende da área total, do tipo de produto armazenado, da altura do rack e do grupo de ocupação conforme a IT 23/25. Galpões com produto em rack acima de 3,6 m e acima da área mínima da norma são obrigados — e o tipo de produto define se o sistema é ESFR, in-rack ou wet pipe convencional. O diagnóstico gratuito da DRD2 faz esse enquadramento.",
    },
    {
      question: "Edifício residencial precisa de sprinkler em SP?",
      answer:
        "Sim, acima de determinada altura. O decreto estadual de SP 63.911/18 define os limites para edificações residenciais multifamiliares. Edificações acima de 23 m em SP têm obrigatoriedade avaliada conforme IT 23/25. A DRD2 faz o enquadramento correto gratuitamente.",
    },
    {
      question: "Hospital é obrigado a ter sprinkler mesmo sendo pequeno?",
      answer:
        "Depende da área e do tipo de serviço. Hospitais com internação acima do limite de área da IT 23/25 são obrigados. Clínicas ambulatoriais menores podem não atingir o limite. O enquadramento correto considera área, tipo de serviço e classificação de risco do Grupo H específico.",
    },
    {
      question: "O sprinkler já instalado precisa ser substituído com a nova IT 23/25?",
      answer:
        "Não necessariamente. Sistemas instalados conforme IT anterior e em pleno funcionamento podem ser mantidos com laudo de conformidade. A necessidade de adequação depende de mudanças de uso, ampliação de área ou alteração do produto armazenado que elevem o risco além do projeto original. A DRD2 avalia o sistema existente gratuitamente.",
    },
    {
      question: "Quanto tempo leva a regularização de sprinkler para o AVCB?",
      answer:
        "O prazo depende do porte e da complexidade do projeto. Para edificações de médio porte (até 2.000 m²) sem intercorrências, o processo completo — projeto, ART, instalação, testes e protocolo no CBPMESP — leva de 45 a 90 dias. Galpões industriais de grande porte com sistema ESFR podem levar de 90 a 180 dias. A DRD2 apresenta cronograma realista no diagnóstico gratuito.",
    },
  ],
  linksInternos: [
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/quanto-custa-sistema-sprinkler-sp", label: "Quanto Custa Sistema de Sprinkler" },
    { href: "/hidrante-obrigatorio-avcb-sp", label: "Hidrante Obrigatório SP" },
    { href: "/alarme-incendio-obrigatorio-avcb-sp", label: "Alarme Obrigatório SP" },
  ],
  ctaFinal: {
    heading: "VERIFICAR SE SPRINKLER É OBRIGATÓRIO — DIAGNÓSTICO GRATUITO",
    body: "Enquadramento correto na IT 23/25 sem custo. Tipo de sistema por setor. Escopo e prazo realista para regularização com AVCB.",
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
