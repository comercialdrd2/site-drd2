import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/prazo-avcb-sao-paulo",
  meta: {
    title: "Prazo do AVCB em São Paulo — Quanto Tempo Leva? | DRD2 Engenharia",
    description: "Quanto tempo leva para tirar ou renovar o AVCB em São Paulo? Prazos reais por tipo de ocupação, o que atrasa o processo e como protocolar mais rápido. DRD2 Engenharia.",
  },
  eyebrow: "Prazo do AVCB em SP — Prazos Reais 2026",
  h1Line1: "Quanto Tempo Leva o AVCB",
  h1Line2: "em São Paulo? Prazos por Ocupação",
  heroBg: "/images/blog/fire_safety_equipment_premium.webp",
  introP1: "O prazo para tirar o AVCB em São Paulo varia de 30 a 120 dias dependendo do tipo de ocupação, do porte da edificação e do estado dos sistemas instalados. Para a maioria dos estabelecimentos comerciais de médio porte com sistemas conformes, o processo leva entre 45 e 60 dias do diagnóstico até o certificado na mão.",
  introP2: "O maior inimigo do prazo não é a fila do CBPMESP — é o Comunique-se. Cada exigência técnica não prevista atrasa o processo em 30 a 60 dias por ocorrência. A DRD2 minimiza esse risco com documentação rigorosa e vistoria técnica presencial antes do protocolo: 98% dos nossos processos são aprovados na primeira análise.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Prazo do AVCB em São Paulo" },
  ],
  occupationType: "prazo de AVCB em SP",
  h2_principal: {
    heading: "Prazos reais do AVCB por tipo de edificação em SP",
    body: "Os prazos abaixo consideram edificações com sistemas instalados e em bom estado de conservação. São estimativas baseadas em processos reais no CBPMESP — o prazo exato depende da situação específica de cada edificação.",
    body2: "Condomínio residencial de médio porte: 45–75 dias. Restaurante ou bar: 30–60 dias. Escola ou academia: 45–75 dias. Hotel ou pousada: 60–90 dias. Galpão industrial: 45–90 dias. Hospital ou clínica de grande porte: 90–150 dias. Esses prazos contam a partir do protocolo no CBPMESP — a fase de adequação e documentação antes do protocolo pode acrescentar 15 a 45 dias.",
  },
  h2_riscos: {
    heading: "O que atrasa o AVCB em São Paulo",
    intro: "Esses fatores são os principais responsáveis por estender o prazo além do esperado:",
    itens: [
      {
        titulo: "Comunique-se não respondido no prazo",
        desc: "O CBPMESP dá 30 dias para resposta a cada exigência. Empresa que demora para responder ou responde de forma incompleta recebe novo Comunique-se — e o prazo reinicia.",
      },
      {
        titulo: "Documentação incompleta no protocolo",
        desc: "Protocolo com documentação faltando gera indeferimento imediato e reinício do processo. A DRD2 só protocolou quando a documentação está 100% completa.",
      },
      {
        titulo: "Sistemas que precisam de adequação após o protocolo",
        desc: "Adequações identificadas somente durante a vistoria do CBPMESP são as mais caras e demoradas. A vistoria prévia da DRD2 evita esse cenário.",
      },
      {
        titulo: "Brigada de incêndio sem certificado vigente",
        desc: "Se o certificado de brigada vencer durante o processo, o AVCB fica bloqueado até a renovação do treinamento — acrescentando semanas ao prazo.",
      },
      {
        titulo: "Laudo de estanqueidade de gás vencido",
        desc: "Para estabelecimentos com GLP, o laudo de gás precisa estar dentro do prazo na data da vistoria. Laudo vencido gera Comunique-se automático.",
      },
      {
        titulo: "Fila do CBPMESP em períodos de alta demanda",
        desc: "Janeiro e fevereiro (após virada de ano) e julho (renovações semestrais) têm fila maior no CBPMESP. Protocolar fora desses picos agiliza a análise.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 minimiza o prazo do AVCB",
    etapas: [
      {
        numero: "01",
        titulo: "Vistoria técnica antes do protocolo",
        desc: "Identificamos todas as pendências antes de protocolar — eliminando o risco de Comunique-se por inadequação que poderia ser evitada.",
      },
      {
        numero: "02",
        titulo: "Adequação rápida e coordenada",
        desc: "Coordenamos as adequações necessárias com fornecedores habilitados, minimizando o tempo da fase pré-protocolo.",
      },
      {
        numero: "03",
        titulo: "Protocolo com documentação perfeita",
        desc: "Protocolamos apenas quando a documentação está 100% completa — reduzindo ao máximo a probabilidade de Comunique-se.",
      },
      {
        numero: "04",
        titulo: "Resposta rápida a Comunique-se",
        desc: "Monitoramos diariamente o andamento no CBPMESP. Qualquer Comunique-se é respondido em até 5 dias úteis — bem antes do prazo de 30 dias.",
      },
      {
        numero: "05",
        titulo: "Acompanhamento até o certificado",
        desc: "O processo não termina no protocolo. Acompanhamos cada etapa — análise, vistoria, emissão — até o AVCB estar em mãos.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Prazo de validade do AVCB em São Paulo",
    body1: "O AVCB emitido pelo CBPMESP tem validade variável conforme o tipo de ocupação e os sistemas presentes na edificação. A validade mais comum é de 3 anos para a maioria das ocupações comerciais e residenciais.",
    alerta: "Iniciar a renovação com menos de 30 dias para o vencimento é arriscado. O processo leva tempo e, com o AVCB vencido, o estabelecimento fica em situação irregular perante a Prefeitura e o Corpo de Bombeiros.",
    itens: [
      { titulo: "Condomínios residenciais", desc: "Validade de 3 anos. Renovação indicada com 90 dias de antecedência." },
      { titulo: "Restaurantes e bares", desc: "Validade de 1 a 3 anos dependendo dos sistemas. Verificar na última emissão." },
      { titulo: "Escolas e academias", desc: "Validade de 3 anos. Renovação antes do início do ano letivo é a prática recomendada." },
      { titulo: "Hotéis e pousadas", desc: "Validade de 3 anos. Renovar na baixa temporada para evitar impacto operacional." },
      { titulo: "Hospitais e clínicas", desc: "Validade de 1 a 3 anos dependendo dos sistemas e da classificação de risco." },
      { titulo: "Galpões industriais", desc: "Validade de 3 anos. Qualquer ampliação exige atualização antecipada do processo." },
    ],
    closing: "Dúvida sobre a validade do seu AVCB? A data de vencimento consta no próprio certificado. Em caso de dúvida, a DRD2 verifica gratuitamente na consulta inicial.",
  },
  h2_quando: {
    heading: "Com quanto tempo de antecedência iniciar o processo",
    body1: "O ideal é iniciar com 90 a 120 dias antes do vencimento. Esse prazo cobre: vistoria técnica (1–3 dias), adequações necessárias (7–30 dias dependendo da complexidade), documentação (5–10 dias) e análise do CBPMESP (30–60 dias).",
    body2: "Para quem precisa de AVCB com urgência — venda de imóvel, credenciamento, alvará vencendo — a DRD2 tem protocolo de atendimento prioritário. Com edificação conforme e documentação completa, conseguimos protocolar em até 10 dias úteis após o diagnóstico.",
  },
  h2_escolher: {
    heading: "AVCB novo ou renovação — o prazo é diferente?",
    body1: "Em geral, a renovação é mais rápida que o primeiro AVCB porque os sistemas já estão instalados e o histórico da edificação no CBPMESP facilita a análise. O prazo de renovação costuma ser 20 a 30% menor que o processo inicial para edificações sem grandes pendências.",
    body2: "A exceção ocorre quando há reformas significativas ou sistemas muito degradados — nesses casos, o processo de renovação pode se aproximar em complexidade de um processo inicial.",
  },
  h2_cobertura: {
    heading: "Atendimento com prazo garantido em SP e Grande SP",
    body1: "A DRD2 atende processos de AVCB em São Paulo Capital e nas principais cidades da Grande SP: Guarulhos, Osasco, Santo André, São Bernardo do Campo, São Caetano do Sul, Barueri, Alphaville, Campinas, Sorocaba e Santos.",
    body2: "O prazo de atendimento começa na vistoria técnica gratuita — que agendamos em até 48h em São Paulo Capital e até 72h nas cidades da Grande SP.",
  },
  faqs: [
    {
      question: "Quanto tempo leva o AVCB para um restaurante em SP?",
      answer: "Para restaurantes com sistemas conformes (extintor em dia, laudo de gás válido, sem pendências de layout), o processo leva de 30 a 60 dias. Se houver adequações necessárias (coifa sem laudo, extintor de classe incorreta, porta corta-fogo danificada), acrescente 15 a 30 dias para as correções antes do protocolo.",
    },
    {
      question: "É possível tirar o AVCB em 30 dias em São Paulo?",
      answer: "Para edificações de baixo risco com CLCB (geralmente abaixo de 750m² e sem sistemas complexos), o processo pode ser concluído em 30 dias em casos favoráveis. Para AVCB completo, 30 dias é o tempo mínimo otimista — possível quando os sistemas estão 100% conformes e a documentação está perfeita. A DRD2 informa o prazo real na vistoria técnica gratuita.",
    },
    {
      question: "O Corpo de Bombeiros tem prazo para analisar o processo?",
      answer: "O CBPMESP tem metas de prazo de análise, mas elas variam conforme o volume de processos e a complexidade da edificação. Em média, a análise documental leva de 15 a 30 dias e a vistoria é agendada após aprovação documental. Processos com documentação perfeita avançam mais rápido na fila.",
    },
    {
      question: "O que fazer se o AVCB vencer antes do novo ser aprovado?",
      answer: "O número de protocolo de entrada no CBPMESP pode ser apresentado à Prefeitura como documentação de regularização em andamento — em muitos casos, permite a renovação provisória do alvará. A DRD2 orienta sobre essa possibilidade na consulta inicial.",
    },
    {
      question: "Reforma no estabelecimento afeta o prazo do AVCB?",
      answer: "Sim. Qualquer reforma que altere rotas de fuga, sistemas de incêndio ou planta da edificação exige comunicação ao CBPMESP e atualização do processo. Reforma não comunicada invalida o AVCB existente e pode exigir processo completo.",
    },
  ],
  linksInternos: [
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/renovacao-avcb", label: "Renovação de AVCB" },
    { href: "/quanto-custa-renovacao-avcb-sao-paulo", label: "Quanto Custa Renovar o AVCB" },
    { href: "/avcb-urgente-sao-paulo", label: "AVCB Urgente em SP" },
    { href: "/avcb-vencido-o-que-fazer", label: "AVCB Vencido — O que Fazer" },
    { href: "/empresa-avcb-sao-paulo", label: "Empresa de AVCB em SP" },
  ],
  ctaFinal: {
    heading: "Saiba o prazo real do seu AVCB",
    body: "Diagnóstico técnico gratuito em até 48h. A DRD2 informa o prazo exato para a sua edificação antes de qualquer compromisso.",
    cta: "Agendar diagnóstico técnico gratuito",
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
