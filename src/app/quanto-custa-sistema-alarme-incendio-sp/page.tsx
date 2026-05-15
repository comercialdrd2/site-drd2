import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/quanto-custa-sistema-alarme-incendio-sp",
  meta: {
    title: "Quanto Custa um Sistema de Alarme de Incêndio em SP? — Faixas por Porte | DRD2 Engenharia",
    description: "Saiba quanto custa um alarme de incêndio em SP: diferença entre central convencional e endereçável, o que encarece (detectores especiais, voz, monitoramento) e o que deve constar no orçamento. Diagnóstico gratuito.",
  },
  eyebrow: "Referência de Custo — Sistemas de Alarme de Incêndio em São Paulo",
  h1Line1: "Quanto Custa um Sistema de Alarme",
  h1Line2: "de Incêndio em SP? — Convencional vs. Endereçável",
  heroBg: "/images/banner-hero.webp",
  introP1:
    "O custo de um sistema de alarme de incêndio em SP depende principalmente de um fator que muitos orçamentos omitem: central convencional ou central endereçável. A central convencional — que identifica apenas qual zona disparou — é adequada para edificações simples de até 3 zonas. A central endereçável — que identifica o detector exato — é exigida pela IT 18/19 para edificações complexas, com múltiplos andares, múltiplos inquilinos ou ambientes de risco diferenciado. A diferença de custo entre os dois sistemas pode ser de R$ 5.000 a R$ 30.000 — mas é a diferença entre aprovação e reprovação na vistoria.",
  introP2:
    "Esta página apresenta faixas de referência por porte e tipo de sistema, os principais fatores que encarecem o projeto e o que deve constar em qualquer orçamento completo para aprovação do AVCB. A DRD2 realiza diagnóstico técnico gratuito com escopo detalhado antes de qualquer proposta.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Alarme de Incêndio", href: "/alarmes" },
    { label: "Quanto Custa Alarme SP" },
  ],
  occupationType: "comercial",
  h2_principal: {
    heading: "O que determina o custo de um alarme de incêndio em SP?",
    body: "Três variáveis principais definem o custo: (1) tipo de central — convencional (por zona) ou endereçável (por ponto); (2) número e tipo de detectores — ópticos de fumaça são os mais comuns e baratos, termostáticos para ambientes com calor, detectores de gás para cozinhas, detectores de feixe (beam) para grandes vãos; (3) periféricos — anunciador de voz, módulo de monitoramento remoto, botoeiras manuais, sirenes e integração com outros sistemas de proteção.",
    body2:
      "O componente que mais surpreende em orçamentos é o anunciador de voz. A IT 18/19 exige anunciador de voz em edificações com ocupação pública — e um sistema de voz com amplificador, alto-falantes e mensagens gravadas por setor pode custar de R$ 4.000 a R$ 25.000 dependendo da área e do número de pontos de anúncio. Orçamentos que não incluem anunciador de voz para edificações que o exigem serão reprovados na vistoria.",
  },
  h2_riscos: {
    heading: "O que faz o orçamento de alarme de incêndio encarecer além do esperado",
    intro:
      "Esses são os fatores que transformam um orçamento inicial barato em um projeto com custo final muito acima do previsto.",
    itens: [
      {
        titulo: "Central convencional trocada por endereçável na vistoria",
        desc: "Edificação que recebe central convencional quando a IT 18/19 exige endereçável terá que trocar toda a central e recabear os detectores — custo de retrabalho pode exceder o custo de instalação correta na primeira vez.",
      },
      {
        titulo: "Detectores especiais por setor não incluídos",
        desc: "Cozinhas precisam de detectores de temperatura ou de CO; câmaras frias precisam de detectores certificados para baixas temperaturas; padarias precisam de detectores termostáticos. Orçamentos que especificam apenas detectores ópticos padrão para todos os setores garantem reprovação e retrabalho.",
      },
      {
        titulo: "Anunciador de voz esquecido no orçamento",
        desc: "Edificações com ocupação pública (comércio, serviços, escolas, hotéis) precisam de anunciador de voz. Um orçamento que inclui apenas sirenes para uma dessas edificações está incompleto — o adicional para instalar o sistema de voz depois pode ser de R$ 6.000 a R$ 20.000.",
      },
      {
        titulo: "Monitoramento 24h não incluído",
        desc: "A IT 18/19 exige que a central de alarme seja monitorada por empresa habilitada ou por bombeiro civil treinado em serviço. O contrato de monitoramento é custo recorrente (R$ 250 a R$ 600/mês) que deve ser previsto no planejamento — não é opcional.",
      },
      {
        titulo: "Integração com sistema de sprinkler ou hidrante",
        desc: "Quando a edificação tem sprinkler ou hidrante, a IT 18/19 exige integração do alarme com esses sistemas. Módulos de integração e fiação adicional entre as centrais podem adicionar R$ 2.000 a R$ 8.000 ao custo total.",
      },
      {
        titulo: "Retrofit com fiação embutida",
        desc: "Em prédios existentes, passar fiação de alarme em eletroduto embutido ou em conduíte aparente fixado na estrutura é trabalhoso. Orçamentos que não visitam o imóvel antes de orçar frequentemente subestimam esse custo em 20% a 40%.",
      },
    ],
  },
  h2_processo: {
    heading: "O que um orçamento completo de alarme de incêndio deve incluir",
    etapas: [
      {
        numero: "ITEM 01",
        titulo: "Levantamento técnico e projeto",
        desc: "Memorial descritivo, planta com posicionamento de detectores, botoeiras e sirenes por setor, cálculo de zonas e seleção de tipo de detector por ambiente. Sem projeto, a ART não é emitida.",
      },
      {
        numero: "ITEM 02",
        titulo: "ART de projeto CREA-SP",
        desc: "Assinatura do engenheiro responsável pelo projeto. Custo entre R$ 600 e R$ 2.000 dependendo do porte — deve constar explicitamente no orçamento.",
      },
      {
        numero: "ITEM 03",
        titulo: "Central de alarme (convencional ou endereçável)",
        desc: "Central com capacidade de zonas ou pontos conforme o projeto. Central convencional de 4 a 8 zonas: R$ 1.200 a R$ 3.500. Central endereçável de 1 a 2 laços: R$ 4.500 a R$ 12.000. Equipamento com certificação NBR 17240.",
      },
      {
        numero: "ITEM 04",
        titulo: "Detectores, botoeiras, sirenes e anunciador",
        desc: "Detectores com tipo correto por setor, botoeiras manuais a cada 30 m de percurso, sirenes de alarme e, quando exigido, anunciador de voz com alto-falantes por setor e mensagens gravadas de evacuação.",
      },
      {
        numero: "ITEM 05",
        titulo: "Fiação e eletrodutos",
        desc: "Fiação de alarme resistente ao fogo (FR-LSF), eletrodutos de proteção mecânica e caixas de passagem. Custo varia muito em retrofit conforme dificuldade de roteamento.",
      },
      {
        numero: "ITEM 06",
        titulo: "Testes, laudo e ART de execução",
        desc: "Teste individual de cada detector e botoeira, teste de sirene e anunciador de voz, relatório fotográfico. ART de execução CREA-SP e laudo completo para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Faixas de custo de referência para alarme de incêndio em SP",
    body1:
      "As faixas abaixo são referências para projetos completos (levantamento, projeto, ART, materiais, instalação, testes e laudo). Valores reais dependem das condições específicas de cada edificação e do tipo de central exigida.",
    alerta:
      "Orçamentos sem ART de projeto e execução, sem laudo técnico ou com central de tipo inferior ao exigido pela IT 18/19 não habilitam a aprovação do AVCB — independentemente do preço.",
    itens: [
      {
        titulo: "Pequeno porte — até 500 m² com central convencional",
        desc: "Faixa de referência: R$ 3.500 a R$ 9.000. Central convencional de 4 zonas, 8 a 20 detectores ópticos, botoeiras e sirenes. Adequado para pequenos comércios e depósitos sem ocupação pública e sem ambientes de risco diferenciado.",
      },
      {
        titulo: "Médio porte — 500 m² a 2.000 m² com central endereçável",
        desc: "Faixa de referência: R$ 9.000 a R$ 28.000. Central endereçável de 1 laço, 20 a 60 detectores com endereçamento individual, botoeiras, sirenes e anunciador de voz quando exigido.",
      },
      {
        titulo: "Grande porte — acima de 2.000 m² ou múltiplos andares",
        desc: "Faixa de referência: R$ 28.000 a R$ 90.000+. Central endereçável de múltiplos laços com repetidora, detectores especiais por setor, anunciador de voz com múltiplos canais, integração com sprinkler e monitoramento 24h.",
      },
      {
        titulo: "Adicional por anunciador de voz",
        desc: "Sistema de anunciador de voz com amplificador, alto-falantes e mensagens gravadas: R$ 4.500 a R$ 25.000 dependendo do número de zonas de anúncio e da área coberta. Obrigatório para edificações com ocupação pública.",
      },
    ],
    closing:
      "A DRD2 realiza diagnóstico técnico gratuito com identificação do tipo de central correto para a sua edificação e apresenta orçamento com escopo completo — sem surpresas de custo durante a execução.",
  },
  h2_quando: {
    heading: "Quando solicitar orçamento de alarme de incêndio em SP?",
    body1:
      "Antes de qualquer vencimento do AVCB — a renovação exige laudo técnico com ART atualizado. Imediatamente após Comunique-se do CBPMESP sobre o sistema de alarme, após reforma que altere o layout ou após mudança de ocupação.",
    body2:
      "Em edificações novas, o projeto de alarme deve ser aprovado antes do habite-se. Em prédios sem sistema instalado com ocupação pública em andamento, cada mês representa risco de autuação e interdição pelo CBPMESP.",
  },
  h2_escolher: {
    heading: "Por que solicitar diagnóstico da DRD2 antes de contratar?",
    body1:
      "A DRD2 identifica o tipo de central correto, os detectores adequados por setor e os periféricos obrigatórios antes de apresentar qualquer orçamento. Isso elimina o risco de instalar um sistema incompleto que reprova na vistoria.",
    body2:
      "Processo completo sem terceiros: projeto, ART, materiais, instalação, testes e laudo — tudo com a DRD2. O monitoramento 24h pode ser contratado junto com o projeto para entrada em operação imediata após a aprovação do AVCB.",
  },
  h2_cobertura: {
    heading: "Instalação de alarme de incêndio em toda a Grande SP",
    body1:
      "A DRD2 atende edificações de todos os portes em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para edificações fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial pode ser feito por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Qual a diferença de custo entre alarme convencional e endereçável?",
      answer:
        "A central endereçável custa de R$ 3.000 a R$ 9.000 a mais do que a convencional somente em equipamento. No entanto, a central endereçável identifica o detector exato que disparou — reduzindo o tempo de resposta e sendo exigida pela IT 18/19 para edificações complexas. Para a maioria dos edifícios comerciais e multifamiliares, o endereçável é o tipo correto.",
    },
    {
      question: "Qual o custo médio de alarme para um pequeno comércio em SP?",
      answer:
        "Para pequenos comércios até 500 m² com central convencional, a faixa é R$ 3.500 a R$ 9.000 para projeto completo. Se a edificação tiver ocupação pública e exigir anunciador de voz, adicione R$ 4.500 a R$ 8.000. O diagnóstico técnico define o escopo correto.",
    },
    {
      question: "O monitoramento 24h está incluído no orçamento de alarme?",
      answer:
        "Raramente. O monitoramento é um serviço recorrente (R$ 250 a R$ 600/mês com empresa habilitada) separado do custo de instalação. A IT 18/19 exige monitoramento — verifique se o orçamento inclui ao menos a previsão de integração com operadora de monitoramento.",
    },
    {
      question: "O orçamento precisa incluir ART de engenheiro?",
      answer:
        "Sim. Duas ARTs são obrigatórias: ART de projeto e ART de execução. Sem ART, o laudo técnico não é válido para aprovação do AVCB no CBPMESP. Orçamentos sem ART explícita no escopo terão custo adicional quando solicitado.",
    },
    {
      question: "Posso usar o mesmo orçamento de alarme para renovar o AVCB?",
      answer:
        "Não diretamente. Para renovação do AVCB, é necessário laudo técnico atualizado com ART de manutenção ou de novo projeto — dependendo se o sistema existente ainda está em conformidade com a IT 18/19 vigente. A DRD2 avalia o sistema atual e define o que é necessário gratuitamente.",
    },
  ],
  linksInternos: [
    { href: "/alarmes", label: "Alarme de Incêndio em SP" },
    { href: "/quanto-custa-sistema-hidrante-sp", label: "Quanto Custa Hidrante" },
    { href: "/quanto-custa-sistema-sprinkler-sp", label: "Quanto Custa Sprinkler" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "ORÇAMENTO DE ALARME DE INCÊNDIO EM SP — DIAGNÓSTICO GRATUITO",
    body: "Levantamento técnico sem custo. Orçamento com escopo completo — tipo correto de central, detectores por setor, ART e laudo.",
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
