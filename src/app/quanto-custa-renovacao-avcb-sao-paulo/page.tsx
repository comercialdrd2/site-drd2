import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/quanto-custa-renovacao-avcb-sao-paulo",
  meta: {
    title: "Quanto Custa a Renovação do AVCB em São Paulo? | DRD2 Engenharia",
    description: "Saiba quanto custa renovar o AVCB em São Paulo. Preços, fatores que influenciam o valor, o que está incluso e por que renovar é mais barato que tirar pela primeira vez.",
  },
  eyebrow: "Renovação de AVCB — Custo e Prazo em SP 2026",
  h1Line1: "Quanto Custa Renovar o AVCB",
  h1Line2: "em São Paulo? Preços e Prazos",
  heroBg: "/images/blog/fire_safety_equipment_premium.webp",
  introP1: "A renovação do AVCB em São Paulo custa entre R$ 1.800 e R$ 12.000 dependendo da área da edificação, dos sistemas instalados e do estado de conservação dos equipamentos. Para a maioria dos condomínios e estabelecimentos comerciais de médio porte, o valor fica entre R$ 3.000 e R$ 6.000 — significativamente menos que o processo inicial, porque os sistemas já estão instalados.",
  introP2: "Mas o custo real da renovação não é só o preço do serviço: é o custo de não renovar. AVCB vencido bloqueia renovação de alvará, trava credenciamento, impede venda do imóvel e expõe o responsável a multa e responsabilidade civil. A DRD2 faz o diagnóstico gratuito e informa o custo exato antes de qualquer compromisso.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Quanto Custa Renovar o AVCB em SP" },
  ],
  occupationType: "renovação de AVCB",
  h2_principal: {
    heading: "O que determina o preço da renovação do AVCB em SP",
    body: "A renovação do AVCB não tem preço fixo — o valor depende diretamente da complexidade técnica da edificação. Os principais fatores são: área total construída (quanto maior, mais sistemas e mais trabalho de documentação), tipo de ocupação (Grupo C, F, H têm exigências distintas), quantidade e estado dos sistemas instalados (alarme, sprinkler, hidrantes, escada pressurizada), e quantidade de Comunique-se históricos — processos que tramitaram com exigências anteriores costumam ter mais pendências.",
    body2: "O fator que mais impacta o custo além do serviço em si é a necessidade de adequação dos sistemas. Se o alarme precisa de manutenção, se os extintores estão vencidos ou se há porta corta-fogo danificada, esses ajustes são cobrados à parte. A DRD2 identifica tudo isso na vistoria gratuita antes de fechar o orçamento.",
  },
  h2_riscos: {
    heading: "O que encarece a renovação do AVCB — e como evitar",
    intro: "Alguns fatores aumentam o custo significativamente. Conhecê-los com antecedência permite planejar melhor:",
    itens: [
      {
        titulo: "Sistemas com manutenção vencida",
        desc: "Alarme sem laudo anual, extintores com carga vencida ou hidrante sem teste de pressão geram Comunique-se. Cada exigência adiciona 30–60 dias ao prazo e custo de adequação.",
      },
      {
        titulo: "Projetos desatualizados após reformas",
        desc: "Reforma que alterou planta sem atualizar o projeto junto ao CBPMESP invalida a documentação existente. O custo de reelaborar o projeto é maior que mantê-lo atualizado.",
      },
      {
        titulo: "Brigada de incêndio sem certificado vigente",
        desc: "O certificado de brigada tem validade de 1 ano. Se venceu, é preciso refazer o treinamento antes da vistoria — custo adicional evitável com planejamento.",
      },
      {
        titulo: "Laudo de estanqueidade de gás vencido",
        desc: "Para estabelecimentos com cozinha a GLP, o laudo de gás é exigido na renovação. Se estiver vencido, o AVCB não avança até o laudo ser renovado.",
      },
      {
        titulo: "Processo iniciado muito próximo do vencimento",
        desc: "Processos iniciados com menos de 30 dias para o vencimento às vezes exigem atendimento prioritário — o que pode ter custo adicional para mobilização rápida.",
      },
      {
        titulo: "Edificação com histórico de Comunique-se não respondido",
        desc: "Processos com exigências antigas não respondidas ficam suspensos no CBPMESP. Reativá-los exige análise adicional e, muitas vezes, reapresentação completa da documentação.",
      },
    ],
  },
  h2_processo: {
    heading: "Como funciona a renovação do AVCB com a DRD2",
    etapas: [
      {
        numero: "01",
        titulo: "Vistoria técnica gratuita",
        desc: "Nosso engenheiro percorre a edificação e levanta todas as conformidades e pendências técnicas — antes de qualquer orçamento.",
      },
      {
        numero: "02",
        titulo: "Orçamento detalhado",
        desc: "Com base na vistoria, apresentamos orçamento discriminando serviço de regularização, adequações necessárias e prazo estimado.",
      },
      {
        numero: "03",
        titulo: "Adequação dos sistemas",
        desc: "Coordenamos ou executamos as adequações identificadas: manutenção de alarme, recarga de extintores, laudo de gás, certificado de brigada.",
      },
      {
        numero: "04",
        titulo: "Protocolo no CBPMESP",
        desc: "Protocolamos o processo completo com toda a documentação — minimizando risco de Comunique-se e acelerando a análise.",
      },
      {
        numero: "05",
        titulo: "Acompanhamento até o certificado",
        desc: "Monitoramos o andamento e respondemos qualquer exigência técnica (Comunique-se) sem custo adicional até a emissão do AVCB.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Faixa de preço por tipo de edificação em São Paulo",
    body1: "Os valores abaixo são referências médias do mercado para renovação completa (serviço + documentação, excluindo adequações físicas). São estimativas — o valor real é definido após vistoria gratuita.",
    alerta: "Cotações muito abaixo da média indicam serviço incompleto: sem ART, sem resposta a Comunique-se inclusa ou sem visita técnica presencial. Esses processos têm taxa de reprovação muito maior.",
    itens: [
      { titulo: "Condomínio residencial até 5.000m²", desc: "R$ 2.500 – R$ 4.500 (dependendo de torres, subsolos e sistemas)" },
      { titulo: "Restaurante ou bar até 500m²", desc: "R$ 1.800 – R$ 3.500 (GLP, coifa e sistemas básicos)" },
      { titulo: "Escola ou academia até 2.000m²", desc: "R$ 2.800 – R$ 5.000 (brigada, alarme, rotas de saída)" },
      { titulo: "Hotel ou pousada de médio porte", desc: "R$ 3.500 – R$ 7.000 (múltiplos pavimentos e UHs)" },
      { titulo: "Galpão industrial até 5.000m²", desc: "R$ 3.000 – R$ 6.500 (hidrantes, sprinkler, SPDA)" },
      { titulo: "Hospital ou clínica acima de 750m²", desc: "R$ 5.000 – R$ 12.000 (Grupo I, exigências específicas de gases medicinais)" },
    ],
    closing: "Para edificações fora dessas faixas, agende a vistoria gratuita. O engenheiro da DRD2 informa o custo exato após avaliar os sistemas e a documentação existente.",
  },
  h2_quando: {
    heading: "Quando iniciar o processo de renovação do AVCB",
    body1: "O momento ideal é com 90 a 120 dias de antecedência em relação ao vencimento. Esse prazo permite: identificar e corrigir pendências sem pressão, agendar manutenções, treinar brigada e protocolar o processo com folga suficiente para o CBPMESP analisar.",
    body2: "Se o AVCB já está vencido ou vence em menos de 30 dias, o processo ainda é possível — mas exige mobilização prioritária. A DRD2 tem protocolo de atendimento urgente para esses casos, com vistoria em 24h e protocolo no CBPMESP em até 10 dias úteis quando a edificação está conforme.",
  },
  h2_escolher: {
    heading: "Por que renovar é mais barato que o primeiro AVCB",
    body1: "Na primeira emissão do AVCB, todos os sistemas precisam ser instalados, o projeto elaborado do zero e toda a documentação gerada. Na renovação, os sistemas já existem — a DRD2 faz a manutenção, atualiza a documentação e reapresenta ao CBPMESP. O trabalho de projeto é menor e as adequações geralmente são pontuais.",
    body2: "A exceção ocorre quando há reformas significativas ou quando os sistemas foram negligenciados por muitos anos — nesse caso, o custo de adequação pode se aproximar do processo inicial. Por isso a vistoria técnica gratuita é o primeiro passo: ela define exatamente o que precisa ser feito e qual será o custo real.",
  },
  h2_cobertura: {
    heading: "Atendimento para renovação de AVCB em SP e Grande SP",
    body1: "A DRD2 atende renovações de AVCB em toda São Paulo Capital (Zona Sul, Norte, Leste, Oeste e Centro) e nas principais cidades da Grande SP: Guarulhos, Osasco, Santo André, São Bernardo do Campo, São Caetano do Sul, Barueri e Alphaville.",
    body2: "Para cidades mais distantes como Campinas, Sorocaba, Santos e São José dos Campos, atendemos mediante análise do escopo. Entre em contato para verificar cobertura.",
  },
  faqs: [
    {
      question: "Quanto custa a renovação do AVCB para um condomínio em SP?",
      answer: "Para condomínios residenciais de médio porte (até 5.000m²), o custo de renovação fica entre R$ 2.500 e R$ 4.500. Condomínios maiores, com múltiplas torres ou sistemas mais complexos (escada pressurizada, sprinkler), podem chegar a R$ 8.000 ou mais. O valor exato é definido após vistoria técnica gratuita.",
    },
    {
      question: "A resposta a Comunique-se está inclusa no preço?",
      answer: "Sim. Na DRD2, a resposta a qualquer Comunique-se (exigência técnica do CBPMESP durante a análise) está inclusa no serviço de renovação. Não cobramos por exigência respondida — o preço fechado é o preço final.",
    },
    {
      question: "Quanto tempo leva a renovação do AVCB em São Paulo?",
      answer: "Para edificações com sistemas conformes e documentação organizada: 45 a 60 dias. Quando há adequações necessárias (manutenção de alarme, laudo de gás, certificado de brigada): 60 a 90 dias. A DRD2 informa o prazo real na vistoria técnica gratuita.",
    },
    {
      question: "Preciso de ART para renovar o AVCB?",
      answer: "Para edificações acima de 750m², a ART do engenheiro responsável é obrigatória. A DRD2 inclui a ART no serviço de renovação — não é custo adicional.",
    },
    {
      question: "O AVCB vencido impede a renovação do alvará municipal?",
      answer: "Sim. A Prefeitura de São Paulo exige AVCB válido para renovação do alvará de funcionamento. Com AVCB vencido, o alvará não é renovado — e o estabelecimento fica em situação irregular perante a Prefeitura também.",
    },
  ],
  linksInternos: [
    { href: "/renovacao-avcb", label: "Renovação de AVCB em SP" },
    { href: "/quanto-custa-avcb-sao-paulo", label: "Quanto Custa o AVCB" },
    { href: "/avcb-vencido-o-que-fazer", label: "AVCB Vencido — O que Fazer" },
    { href: "/avcb-urgente-sao-paulo", label: "AVCB Urgente em SP" },
    { href: "/renovacao-avcb-condominio-sao-paulo", label: "Renovação AVCB Condomínio" },
    { href: "/renovacao-avcb-restaurante-sao-paulo", label: "Renovação AVCB Restaurante" },
  ],
  ctaFinal: {
    heading: "Saiba o custo exato da sua renovação",
    body: "Vistoria técnica gratuita. Orçamento detalhado sem compromisso. Resposta a Comunique-se inclusa. A DRD2 informa o preço real antes de fechar qualquer contrato.",
    cta: "Solicitar orçamento de renovação gratuito",
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
