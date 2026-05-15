import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/hidrante-obrigatorio-avcb-sp",
  meta: {
    title: "Hidrante é Obrigatório em SP? — Quando Exigido pela IT 22/25 e AVCB | DRD2 Engenharia",
    description: "Descubra quando o sistema de hidrante é obrigatório em SP pela IT 22/25: ocupação, área e altura que determinam a exigência. O que acontece sem o sistema e como regularizar. Diagnóstico gratuito.",
  },
  eyebrow: "IT 22/25 — Obrigatoriedade de Hidrante em São Paulo",
  h1Line1: "Hidrante é Obrigatório em SP?",
  h1Line2: "Quando a IT 22/25 Exige o Sistema para o AVCB",
  heroBg: "/images/banner-hero.webp",
  introP1:
    "A obrigatoriedade do sistema de hidrante em São Paulo é definida pela IT 22/25 do CBPMESP com base em três critérios combinados: o grupo de ocupação da edificação (tipo de uso), a área total construída e a altura da edificação. A maioria dos proprietários e responsáveis técnicos descobre que o hidrante é obrigatório somente quando recebe um Comunique-se do Corpo de Bombeiros — quando o custo de regularização é maior do que o de instalação preventiva. Esta página explica os critérios que determinam a obrigatoriedade para os grupos de ocupação mais comuns em SP.",
  introP2:
    "A DRD2 realiza diagnóstico técnico gratuito que inclui o enquadramento correto da edificação na IT 22/25, a verificação de obrigatoriedade e a apresentação de escopo e prazo para regularização com AVCB.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Hidrantes", href: "/hidrantes" },
    { label: "Hidrante Obrigatório SP" },
  ],
  occupationType: "comercial",
  h2_principal: {
    heading: "Quais edificações são obrigadas a ter sistema de hidrante em SP?",
    body: "A IT 22/25 classifica as edificações em grupos de ocupação (A a M) e define, para cada grupo, os limites de área e altura que tornam o sistema de hidrante obrigatório. Como regra geral: edificações comerciais (Grupo C), industriais (Grupo G), de serviços (Grupo D), de saúde (Grupo H) e garagens (Grupo I) são as que mais frequentemente atingem os limites que tornam o hidrante obrigatório. Edificações residenciais multifamiliares (Grupo A-2) também atingem esses limites a partir de determinado número de pavimentos.",
    body2:
      "Duas situações tornam o hidrante obrigatório independentemente da área: (1) edificações com risco especial de incêndio — como postos de combustível (Grupo J), indústrias com produtos inflamáveis (Grupo G-3/G-4) e depósitos de gás (Grupo M); (2) edificações de uso público com grande concentração de pessoas — como shoppings, teatros, estádios e hospitais, que são obrigados independentemente de atingirem o limite mínimo de área. Para esses grupos, o sistema de hidrante é condição sine qua non para o AVCB.",
  },
  h2_riscos: {
    heading: "O que acontece quando o sistema de hidrante obrigatório não está instalado",
    intro:
      "As consequências da ausência de sistema de hidrante obrigatório em SP são progressivas e podem incluir responsabilidade civil e criminal.",
    itens: [
      {
        titulo: "Impossibilidade de emitir ou renovar o AVCB",
        desc: "O AVCB (Auto de Vistoria do Corpo de Bombeiros) não é emitido nem renovado sem a instalação dos sistemas obrigatórios. Sem AVCB, o alvará de funcionamento não é liberado ou renovado — resultando em irregularidade legal do estabelecimento.",
      },
      {
        titulo: "Autuação e multa pelo CBPMESP",
        desc: "Edificações em operação sem os sistemas obrigatórios instalados podem ser autuadas pelo CBPMESP com Comunique-se ou auto de infração. O valor das multas varia conforme o porte da edificação e o tempo de inadimplência.",
      },
      {
        titulo: "Interdição do estabelecimento",
        desc: "O CBPMESP tem poder para interditar estabelecimentos que representem risco iminente — situação que inclui edificações com grande ocupação pública sem sistema de hidrante instalado. A interdição é imediata e publicada.",
      },
      {
        titulo: "Responsabilidade civil do proprietário em caso de sinistro",
        desc: "Se ocorrer incêndio em edificação sem o sistema obrigatório instalado, o proprietário pode ser responsabilizado civilmente pelos danos — mesmo que o incêndio não tenha sido causado por negligência direta. A ausência do sistema é evidência de negligência com a segurança dos ocupantes.",
      },
      {
        titulo: "Responsabilidade criminal por omissão",
        desc: "Em casos de vítimas em incêndio com omissão documentada de sistema obrigatório, o responsável legal pode responder criminalmente por homicídio culposo ou lesão corporal culposa — especialmente em edificações de uso público.",
      },
      {
        titulo: "Impossibilidade de venda ou locação do imóvel",
        desc: "Imóveis comerciais e industriais sem AVCB têm dificuldade de ser vendidos ou locados a empresas que dependem de licenças de funcionamento. Algumas atividades exigem AVCB como condição do alvará de licença de uso.",
      },
    ],
  },
  h2_processo: {
    heading: "Como verificar se o hidrante é obrigatório e regularizar em SP",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Identificação do grupo de ocupação",
        desc: "O grupo de ocupação é definido pelo uso principal da edificação: comércio varejista (C), indústria (G), serviços (D), saúde (H), residencial (A), etc. Edificações com usos mistos têm o grupo definido pelo uso predominante ou pelo mais restritivo.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Verificação de área e altura",
        desc: "A área total construída e a altura da edificação determinam se os limites da IT 22/25 para o grupo de ocupação são atingidos. A área é calculada pela soma de todos os pavimentos — não apenas o pavimento maior.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Diagnóstico técnico gratuito",
        desc: "A DRD2 realiza o enquadramento correto na IT 22/25, verifica a obrigatoriedade do sistema de hidrante e identifica se há sistema existente e se ele ainda está em conformidade.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Projeto e ART",
        desc: "Projeto técnico de sistema de hidrante conforme IT 22/25, com ART de projeto assinada por engenheiro CREA-SP. O projeto é protocolado junto ao CBPMESP antes da instalação quando exigido.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Instalação e testes",
        desc: "Instalação do sistema conforme projeto aprovado, com testes de pressão, vazão e acionamento de bomba. Relatório fotográfico de cada etapa para compor o laudo técnico.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo com ART e vistoria do CBPMESP",
        desc: "Laudo técnico com ART de execução CREA-SP, protocolado junto ao CBPMESP para vistoria e emissão do AVCB. A DRD2 acompanha todo o processo de aprovação.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Grupos de ocupação com maior frequência de obrigatoriedade de hidrante em SP",
    body1:
      "Os grupos de ocupação listados abaixo são os que mais frequentemente atingem os critérios de obrigatoriedade de sistema de hidrante conforme a IT 22/25. O enquadramento correto depende da área, altura e características específicas de cada edificação.",
    alerta:
      "Reforma, ampliação ou mudança de uso que altere o grupo de ocupação ou a área total da edificação pode tornar o sistema de hidrante obrigatório mesmo que não fosse antes — ou exigir adequação do sistema existente ao novo porte.",
    itens: [
      {
        titulo: "Grupo C — Comércio varejista e atacadista",
        desc: "Supermercados, lojas de departamento, shoppings, atacadistas e hipermercados. Grupo C-2 (grande porte) é obrigado a ter sistema de hidrante independentemente de outros critérios. Grupo C-1 (pequeno porte) atinge a obrigatoriedade a partir de determinada área total.",
      },
      {
        titulo: "Grupo G — Industrial",
        desc: "Indústrias, galpões de produção e centros de distribuição. Grupos G-3 e G-4 (com produtos inflamáveis e explosivos) são obrigados independentemente de área. G-1 e G-2 atingem a obrigatoriedade a partir dos limites de área da IT 22/25.",
      },
      {
        titulo: "Grupo H — Saúde e internação",
        desc: "Hospitais, clínicas com internação, casas de repouso e estabelecimentos similares. O Grupo H exige sistema de hidrante para praticamente todas as edificações do grupo em SP — com requisitos adicionais pela ANVISA RDC 50.",
      },
      {
        titulo: "Grupo I — Garagens e estacionamentos",
        desc: "Estacionamentos cobertos, garagens comerciais e subsolos de qualquer edificação com veículos. Garagens cobertas acima da área mínima da IT 22/25 são obrigadas independentemente do uso das demais áreas da edificação.",
      },
    ],
    closing:
      "A DRD2 realiza o enquadramento correto da sua edificação na IT 22/25 gratuitamente, verifica a obrigatoriedade e apresenta o caminho mais eficiente para regularização com AVCB.",
  },
  h2_quando: {
    heading: "Quando a obrigatoriedade de hidrante deve ser verificada?",
    body1:
      "A obrigatoriedade deve ser verificada antes do início de qualquer atividade em edificação nova ou em processo de reforma. Também deve ser verificada após qualquer ampliação de área que possa ultrapassar os limites da IT 22/25 ou após mudança de uso que altere o grupo de ocupação.",
    body2:
      "Ao receber qualquer Comunique-se do CBPMESP sobre sistemas de incêndio, a edificação tem prazo determinado para regularização. Depois do prazo, a autuação pode resultar em interdição imediata. A DRD2 atua com urgência em casos de Comunique-se com prazo próximo ao vencimento.",
  },
  h2_escolher: {
    heading: "Por que escolher a DRD2 para regularização de hidrante em SP?",
    body1:
      "A DRD2 tem experiência em processos de regularização de sistemas de hidrante junto ao CBPMESP — incluindo edificações com Comunique-se ativo, AVCB vencido e sistemas existentes em não-conformidade. O diagnóstico gratuito define o caminho mais rápido para aprovação.",
    body2:
      "Processo completo sem terceiros: enquadramento, projeto, ART, instalação, testes e laudo para o CBPMESP. A DRD2 acompanha todo o processo de aprovação do AVCB — do protocolo inicial à vistoria.",
  },
  h2_cobertura: {
    heading: "Regularização de hidrante em toda a Grande SP",
    body1:
      "A DRD2 atende edificações em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para edificações fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial com verificação de obrigatoriedade pode ser feito por videochamada com análise da planta e do uso da edificação.",
  },
  faqs: [
    {
      question: "Como saber se o meu estabelecimento é obrigado a ter sistema de hidrante?",
      answer:
        "A obrigatoriedade é definida pela IT 22/25 com base no grupo de ocupação (tipo de uso), na área total construída e na altura da edificação. A forma mais rápida de saber é solicitar o diagnóstico técnico gratuito da DRD2 — o enquadramento correto é feito com base na planta e no uso da edificação.",
    },
    {
      question: "Posso abrir o estabelecimento sem o sistema de hidrante instalado?",
      answer:
        "Não, se o sistema for obrigatório. Sem o AVCB — que exige os sistemas obrigatórios instalados e aprovados — o alvará de funcionamento não é liberado para as atividades que o exigem. Operar sem AVCB quando este é obrigatório expõe o proprietário a autuação, multa e interdição.",
    },
    {
      question: "O sistema de hidrante precisa de aprovação do CBPMESP antes da instalação?",
      answer:
        "Para novas edificações ou reformas que alterem o sistema, o projeto deve ser aprovado pelo CBPMESP antes da instalação. Para edificações existentes em processo de regularização, o projeto é protocolado e a instalação pode ocorrer em paralelo — dependendo da situação específica. A DRD2 orienta o processo correto para cada caso.",
    },
    {
      question: "O sistema de hidrante existente pode ser aproveitado se a edificação for ampliada?",
      answer:
        "Depende. A ampliação pode alterar o ponto mais desfavorecido, aumentar o percurso de tubulação e exigir bomba mais potente. O sistema existente é avaliado tecnicamente para verificar se ainda atende ao porte ampliado — ou se precisa de adequação.",
    },
    {
      question: "Com que frequência o sistema de hidrante precisa ser renovado para o AVCB?",
      answer:
        "O AVCB é renovado anualmente. Para a renovação, é necessário laudo técnico com ART de manutenção atestando que o sistema está em conformidade com a IT 22/25. A manutenção semestral do sistema é obrigatória e deve ser documentada para compor o laudo de renovação.",
    },
  ],
  linksInternos: [
    { href: "/hidrantes", label: "Sistema de Hidrantes em SP" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/quanto-custa-sistema-hidrante-sp", label: "Quanto Custa Sistema de Hidrante" },
    { href: "/alarme-incendio-obrigatorio-avcb-sp", label: "Alarme de Incêndio Obrigatório SP" },
    { href: "/sprinkler-obrigatorio-avcb-sp", label: "Sprinkler Obrigatório SP" },
  ],
  ctaFinal: {
    heading: "VERIFICAR SE HIDRANTE É OBRIGATÓRIO — DIAGNÓSTICO GRATUITO",
    body: "Enquadramento correto na IT 22/25 sem custo. Escopo, prazo e orçamento para regularização com AVCB.",
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
