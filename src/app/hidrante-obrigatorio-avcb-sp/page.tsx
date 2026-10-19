import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/hidrante-obrigatorio-avcb-sp",
  meta: {
    title: "Hidrante é obrigatório no meu imóvel? Como saber em SP",
    description: "Hidrante é obrigatório no seu imóvel? Em SP depende do uso, da área e da altura (Decreto 69.118/2024). Veja como saber e envie a planta para conferirmos.",
  },
  eyebrow: "IT 22/25 — Obrigatoriedade de Hidrante em São Paulo",
  h1Line1: "Hidrante é Obrigatório em SP?",
  h1Line2: "Como Saber se o Seu Imóvel Precisa para o AVCB",
  heroCta: "Ver se o hidrante é obrigatório",
  whatsappText: "Olá! Quero saber se o hidrante é obrigatório no meu imóvel. Uso, área e altura (ou a planta):",
  heroBg: "/images/banner-hero.webp",
  introP1:
    "Depende de três coisas: o uso do imóvel (grupo de ocupação), a área construída e a altura. Em SP, quem define é o Decreto Estadual nº 69.118/2024: ele tem uma tabela de exigências para edificações com até 750 m² e até 12 m de altura e outras tabelas para as maiores ou mais altas. Quando o hidrante entra na lista, a IT 22/2025 diz como o sistema deve ser projetado e instalado.",
  introP2:
    "Envie a planta, ou a área, a altura e o uso do imóvel, pelo WhatsApp: a DRD2 faz o enquadramento sem custo e diz se o hidrante é obrigatório no seu caso, com escopo e prazo para regularizar.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Hidrantes", href: "/hidrantes" },
    { label: "Hidrante Obrigatório SP" },
  ],
  occupationType: "comercial",
  h2_principal: {
    heading: "Quais edificações são obrigadas a ter sistema de hidrante em SP?",
    body: "O Decreto Estadual nº 69.118/2024 classifica as edificações em grupos de ocupação, de A (residencial) a M (especial), e as tabelas do decreto dizem quais medidas de segurança cada uma precisa, conforme a área e a altura. A IT 22/2025 (Sistemas de hidrantes e de mangotinhos para combate a incêndio) traz as regras técnicas do sistema.",
    body2:
      "Não dá para responder só pelo tipo de negócio: dois imóveis com o mesmo uso podem ter exigências diferentes por causa da área, da altura e da carga de incêndio. Por isso o enquadramento é feito com a planta e os dados do imóvel.",
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
        desc: "O CBPMESP tem poder para interditar estabelecimentos que representem risco iminente — situação que inclui edificações com grande ocupação pública sem sistema de hidrante instalado.",
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
        desc: "O grupo de ocupação é definido pelo uso principal da edificação: comércio (C), indústria (I), serviço profissional (D), saúde (H), residencial (A), etc. Edificações com usos mistos têm o grupo definido pelo uso predominante ou pelo mais restritivo.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Verificação de área e altura",
        desc: "A área total construída e a altura da edificação dizem qual tabela do decreto vale e se o hidrante é exigido para o grupo de ocupação. A área é calculada pela soma de todos os pavimentos — não apenas o pavimento maior.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Diagnóstico técnico gratuito",
        desc: "A DRD2 faz o enquadramento pelo Decreto 69.118/2024, verifica se o hidrante é obrigatório e confere se o sistema existente ainda está em conformidade com a IT 22/2025.",
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
    heading: "Como o decreto classifica os imóveis mais comuns",
    body1:
      "Veja como o Decreto Estadual nº 69.118/2024 classifica alguns dos imóveis mais comuns. O enquadramento é o primeiro passo para saber se o hidrante é exigido: depois entram a área, a altura e as características de cada edificação.",
    alerta:
      "Reforma, ampliação ou mudança de uso que altere o grupo de ocupação ou a área total da edificação pode tornar o sistema de hidrante obrigatório mesmo que não fosse antes — ou exigir adequação do sistema existente ao novo porte.",
    itens: [
      {
        titulo: "Grupo A — Residencial",
        desc: "A-2 (habitação multifamiliar): edifícios de apartamento em geral, como os condomínios verticais. A área e a altura do prédio definem se o hidrante entra.",
      },
      {
        titulo: "Grupo C — Comercial",
        desc: "C-1 (comércio com baixa carga de incêndio), C-2 (média e alta carga, como supermercados, lojas de departamento e galerias) e C-3 (shopping center).",
      },
      {
        titulo: "Grupo I — Indústria",
        desc: "I-1, I-2 e I-3, conforme a carga de incêndio: até 300 MJ/m², de 300 a 1.200 MJ/m² e acima de 1.200 MJ/m².",
      },
      {
        titulo: "Grupo G — Serviço automotivo",
        desc: "G-1 e G-2 (garagens sem e com acesso de público, sem abastecimento) e G-3 (locais com abastecimento de combustível, como postos).",
      },
      {
        titulo: "Grupo H — Saúde e institucional",
        desc: "H-3 (hospitais e clínicas com internação) e H-6 (clínicas e consultórios), entre outras divisões.",
      },
      {
        titulo: "Grupo J — Depósito",
        desc: "J-1 a J-4, do depósito de material incombustível ao depósito com alta carga de incêndio.",
      },
    ],
    closing:
      "A DRD2 faz o enquadramento correto da sua edificação sem custo, verifica a obrigatoriedade e apresenta o caminho mais eficiente para regularização com AVCB.",
  },
  h2_quando: {
    heading: "Quando a obrigatoriedade de hidrante deve ser verificada?",
    body1:
      "A obrigatoriedade deve ser verificada antes do início de qualquer atividade em edificação nova ou em processo de reforma. Também deve ser verificada após qualquer ampliação de área ou de altura que mude a tabela do decreto aplicável ou após mudança de uso que altere o grupo de ocupação.",
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
        "A obrigatoriedade sai das tabelas do Decreto Estadual nº 69.118/2024, com base no grupo de ocupação (tipo de uso), na área total construída e na altura da edificação. A forma mais rápida de saber é solicitar o diagnóstico técnico gratuito da DRD2 — o enquadramento correto é feito com base na planta e no uso da edificação.",
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
        "O AVCB tem validade de 3 anos. Para a renovação, é necessário laudo técnico com ART de manutenção atestando que o sistema está em conformidade com a IT 22/25. A manutenção do sistema deve estar em dia e documentada para compor o laudo de renovação.",
    },
  ],
  linksInternos: [
    { href: "/hidrantes", label: "Sistema de Hidrantes em SP" },
    { href: "/blog/it-22-cbpmesp-quando-hidrante-e-obrigatorio", label: "IT-22: o que diz a norma de hidrantes em SP" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/quanto-custa-sistema-hidrante-sp", label: "Quanto Custa Sistema de Hidrante" },
    { href: "/alarme-incendio-obrigatorio-avcb-sp", label: "Alarme de Incêndio Obrigatório SP" },
    { href: "/sprinkler-obrigatorio-avcb-sp", label: "Sprinkler Obrigatório SP" },
  ],
  ctaFinal: {
    heading: "VERIFICAR SE HIDRANTE É OBRIGATÓRIO — DIAGNÓSTICO GRATUITO",
    body: "Enquadramento correto sem custo. Escopo, prazo e orçamento para regularização com AVCB.",
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
