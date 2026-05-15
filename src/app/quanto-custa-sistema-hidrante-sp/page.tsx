import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/quanto-custa-sistema-hidrante-sp",
  meta: {
    title: "Quanto Custa um Sistema de Hidrante em SP? — Faixas por Porte e Tipo | DRD2 Engenharia",
    description: "Saiba quanto custa um sistema de hidrante em SP: faixas por porte de edificação, o que encarece o projeto (retrofit, bomba, gerador) e o que deve constar em qualquer orçamento. Diagnóstico gratuito.",
  },
  eyebrow: "Referência de Custo — Sistemas de Hidrante em São Paulo",
  h1Line1: "Quanto Custa um Sistema de Hidrante",
  h1Line2: "em São Paulo? — Faixas por Porte e Ocupação",
  heroBg: "/images/banner-hero.webp",
  introP1:
    "O custo de um sistema de hidrante em SP varia conforme o porte da edificação, o número de pavimentos, o tipo de bomba e reservatório exigidos e a complexidade do projeto. Uma pequena loja de 300 m² em pavimento único pode ser atendida com sistema mais simples. Um galpão industrial com 5.000 m² e dois pontos simultâneos de combate exige bomba de 30 CV, reservatório de 15 m³ e tubulação em toda a extensão do piso. Comparar orçamentos sem entender o que está incluído é o principal erro de quem compra pelo menor preço.",
  introP2:
    "Esta página apresenta faixas de referência por porte de edificação, os principais fatores que encarecem o projeto e o que deve constar em qualquer orçamento completo para aprovação do AVCB. A DRD2 realiza diagnóstico técnico gratuito com escopo detalhado antes de qualquer proposta.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Hidrantes", href: "/hidrantes" },
    { label: "Quanto Custa Hidrante SP" },
  ],
  occupationType: "comercial",
  h2_principal: {
    heading: "O que determina o custo de um sistema de hidrante em SP?",
    body: "Quatro variáveis definem o custo: (1) área total e número de pavimentos — mais área significa mais tubulação, mais abrigos de mangueira e maior bomba; (2) ponto mais desfavorecido — quanto maior a distância vertical entre a casa de máquinas e o hidrante mais alto, maior a pressão necessária e mais potente a bomba; (3) reservatório de incêndio (RTI) — determinado pela IT 22/25 para operação simultânea dos dois pontos mais desfavorecidos por 30 minutos; (4) retrofit versus construção nova — em prédios existentes, a instalação exige roteamento alternativo de tubulação, fixação em shafts já ocupados e, muitas vezes, abertura e fechamento de forros.",
    body2:
      "O componente de maior peso no custo total é a bomba de recalque com painel elétrico e jockey. Uma bomba trifásica de 15 CV com painel e pressostato custa entre R$ 12.000 e R$ 22.000 somente em equipamento — antes de instalação, tubulação e ART. Projetos que apresentam orçamentos muito abaixo dessa faixa frequentemente omitem a bomba correta, usam equipamento sem certificação ou subdimensionam o reservatório. Esses projetos falham na vistoria do CBPMESP.",
  },
  h2_riscos: {
    heading: "O que faz o orçamento de hidrante encarecer além do esperado",
    intro:
      "Esses são os fatores que transformam um orçamento inicial barato em um projeto com custo final muito acima do previsto.",
    itens: [
      {
        titulo: "Retrofit em prédio existente",
        desc: "Instalar tubulação em prédio já construído custa 30% a 60% mais do que em obra nova. Quebra de laje, roteamento em shaft existente, fixação em estrutura de concreto e fechamento de passagens de tubulação são custos que orçamentos rápidos omitem.",
      },
      {
        titulo: "Bomba com alimentação pelo gerador",
        desc: "Edificações com gerador de emergência devem conectar a bomba de incêndio ao circuito prioritário. O quadro de transferência automática (QTA) para a bomba custa entre R$ 4.000 e R$ 9.000 e é frequentemente esquecido no orçamento inicial.",
      },
      {
        titulo: "Reservatório de incêndio separado",
        desc: "A IT 22/25 exige que a RTI seja exclusiva — não compartilhada com reservatório de abastecimento predial. Se o prédio não tem reservatório separado, o custo de construção ou adaptação pode variar de R$ 5.000 a R$ 35.000 dependendo do volume exigido.",
      },
      {
        titulo: "Tubulação de incêndio em vermelho com conexões certificadas",
        desc: "Tubulação de aço galvanizado ou aço carbono com pintura vermelha e conexões com certificação NBR é mais cara do que tubulação de PVC. Orçamentos que especificam PVC ou tubulação sem certificação para incêndio são reprovados na vistoria.",
      },
      {
        titulo: "ART de projeto e ART de execução CREA-SP",
        desc: "Duas ARTs são obrigatórias: uma de projeto e uma de execução, emitidas por engenheiro habilitado. Orçamentos que não incluem ART ou que mencionam 'responsável técnico' sem registro CREA-SP não habilitam o laudo para aprovação no CBPMESP.",
      },
      {
        titulo: "Siamês de recalque compatível com CBPMESP",
        desc: "O siamês deve ter acoplamento compatível com as mangueiras do Corpo de Bombeiros de SP — não basta qualquer siamês no mercado. Siamês incompatível é Comunique-se automático e exige retrabalho com custo extra.",
      },
    ],
  },
  h2_processo: {
    heading: "O que um orçamento completo de hidrante deve incluir",
    etapas: [
      {
        numero: "ITEM 01",
        titulo: "Levantamento técnico e projeto",
        desc: "Memorial descritivo, planta de implantação dos hidrantes, cálculo da RTI para os dois pontos mais desfavorecidos, dimensionamento da bomba e do reservatório. Sem projeto, o laudo não é emitido.",
      },
      {
        numero: "ITEM 02",
        titulo: "ART de projeto CREA-SP",
        desc: "Assinatura do engenheiro responsável pelo projeto. Custo varia entre R$ 800 e R$ 2.500 dependendo do porte — deve constar explicitamente no orçamento.",
      },
      {
        numero: "ITEM 03",
        titulo: "Tubulação, conexões e suportes",
        desc: "Tubulação de aço galvanizado ou carbono com pintura vermelha, conexões flangeadas ou roscadas certificadas, suportes e abraçadeiras. Inclui o siamês de recalque com acoplamento CBPMESP.",
      },
      {
        numero: "ITEM 04",
        titulo: "Abrigos de mangueira e mangueiras certificadas",
        desc: "Abrigos metálicos ou embutidos com mangueira semi-rígida ou flexível certificada NBR 11861, esguicho regulável e válvula de abertura rápida. Um abrigo completo equipado custa entre R$ 1.200 e R$ 3.500.",
      },
      {
        numero: "ITEM 05",
        titulo: "Bomba de recalque com painel e jockey",
        desc: "Bomba principal dimensionada para pressão e vazão do ponto mais desfavorecido, jockey para manutenção de pressão em standby e painel elétrico com pressostato e botoeira. Componente de maior peso no custo total.",
      },
      {
        numero: "ITEM 06",
        titulo: "Testes, laudo e ART de execução",
        desc: "Teste de pressão estática e dinâmica, teste de acionamento automático da bomba e relatório fotográfico. ART de execução CREA-SP e laudo técnico completo para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Faixas de custo de referência para sistemas de hidrante em SP",
    body1:
      "As faixas abaixo são referências para projetos completos (levantamento, projeto, ART, materiais, instalação, testes e laudo). Valores reais dependem das condições específicas de cada edificação.",
    alerta:
      "Orçamentos que não incluem ART de projeto, ART de execução e laudo técnico não habilitam a aprovação do AVCB no CBPMESP — independentemente do preço.",
    itens: [
      {
        titulo: "Pequeno porte — até 750 m² em pavimento único",
        desc: "Faixa de referência: R$ 8.000 a R$ 22.000. Inclui sistema simples com bomba de 5 a 10 CV, reservatório de 5 m³ a 8 m³, 3 a 6 abrigos de mangueira e tubulação em aço galvanizado. ART e laudo inclusos.",
      },
      {
        titulo: "Médio porte — 750 m² a 3.000 m² ou até 5 pavimentos",
        desc: "Faixa de referência: R$ 22.000 a R$ 75.000. Bomba de 10 a 20 CV, reservatório de 10 m³ a 20 m³, 6 a 16 abrigos, tubulação com coluna de recalque por pavimento e siamês externo.",
      },
      {
        titulo: "Grande porte — acima de 3.000 m² ou mais de 5 pavimentos",
        desc: "Faixa de referência: R$ 75.000 a R$ 250.000+. Bomba de 20 a 60 CV com painel elétrico dedicado, reservatório acima de 20 m³, tubulação em aço carbono, siamês com múltiplas entradas e conexão ao gerador de emergência.",
      },
      {
        titulo: "Retrofit em prédio existente (qualquer porte)",
        desc: "Adicional de 30% a 60% sobre o custo de instalação nova, dependendo da dificuldade de roteamento da tubulação, necessidade de abertura de forros e paredes e condições de acesso à casa de máquinas.",
      },
    ],
    closing:
      "A DRD2 realiza diagnóstico técnico gratuito com levantamento das condições reais da edificação e apresenta orçamento detalhado com escopo completo — sem surpresas de custo durante a execução.",
  },
  h2_quando: {
    heading: "Quando solicitar orçamento de sistema de hidrante em SP?",
    body1:
      "Antes de qualquer vencimento do AVCB — a renovação do auto exige laudo técnico atualizado com ART. Imediatamente após Comunique-se do CBPMESP específico sobre hidrantes ou após reforma que altere o layout da edificação.",
    body2:
      "Em construções novas, o projeto de hidrante deve ser aprovado antes do início das obras. Em prédios sem sistema instalado, cada mês sem o AVCB é risco de autuação, multa e interdição — especialmente em edificações com ocupação pública.",
  },
  h2_escolher: {
    heading: "Por que solicitar diagnóstico da DRD2 antes de contratar?",
    body1:
      "A DRD2 realiza levantamento técnico completo antes de apresentar qualquer orçamento. O diagnóstico identifica o porte real do sistema necessário, os itens que elevam o custo em retrofit e o que pode ser aproveitado do sistema existente — se houver.",
    body2:
      "Processo completo sem terceiros: projeto, ART, materiais, instalação, testes e laudo com a DRD2. Nenhuma etapa é subcontratada — garantindo responsabilidade técnica única e prazo previsível.",
  },
  h2_cobertura: {
    heading: "Instalação de sistema de hidrante em toda a Grande SP",
    body1:
      "A DRD2 atende edificações de todos os portes em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para edificações fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial pode ser feito por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Qual o custo médio de um sistema de hidrante para um pequeno comércio em SP?",
      answer:
        "Para pequenos comércios até 750 m² em pavimento único, a faixa de referência é R$ 8.000 a R$ 22.000 para um projeto completo — incluindo levantamento, projeto, ART, materiais, instalação, testes e laudo. O custo real depende das condições específicas da edificação e se é instalação nova ou retrofit.",
    },
    {
      question: "O orçamento de hidrante precisa incluir ART?",
      answer:
        "Sim. Dois ARTs são obrigatórios: ART de projeto (emitida antes da instalação) e ART de execução (emitida após os testes). Orçamentos sem ART não habilitam o laudo para aprovação do AVCB no CBPMESP — o custo final será maior quando a ART for adicionada depois.",
    },
    {
      question: "Quanto custa instalar hidrante em prédio existente (retrofit)?",
      answer:
        "Retrofit custa 30% a 60% mais do que instalação em obra nova, pelas dificuldades de roteamento de tubulação, abertura de forros e fixação em estrutura já acabada. Um projeto que custaria R$ 30.000 em obra nova pode custar R$ 40.000 a R$ 48.000 em retrofit no mesmo porte de edificação.",
    },
    {
      question: "A bomba de incêndio está incluída no orçamento?",
      answer:
        "Deve estar. A bomba de recalque com jockey e painel elétrico é o componente de maior peso no custo — verifique se o orçamento especifica a potência da bomba, o fabricante e se inclui o painel com pressostato. Orçamentos que omitem a bomba ou listam 'fornecimento por conta do cliente' precisam de atenção.",
    },
    {
      question: "O custo do hidrante é por m² ou por projeto?",
      answer:
        "Por projeto. O custo não é linear por m² porque os componentes de maior custo (bomba, reservatório, ART) têm custo fixo independente da área. Um projeto de 300 m² e um de 500 m² podem ter custo similar se o reservatório e a bomba exigidos forem os mesmos. O diagnóstico técnico é necessário para definir o escopo real.",
    },
  ],
  linksInternos: [
    { href: "/hidrantes", label: "Sistema de Hidrantes em SP" },
    { href: "/quanto-custa-sistema-alarme-incendio-sp", label: "Quanto Custa Alarme de Incêndio" },
    { href: "/quanto-custa-sistema-sprinkler-sp", label: "Quanto Custa Sprinkler" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "ORÇAMENTO DE HIDRANTE EM SP — DIAGNÓSTICO GRATUITO",
    body: "Levantamento técnico sem custo. Orçamento com escopo completo — projeto, ART, materiais, instalação e laudo. Sem surpresas de custo.",
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
