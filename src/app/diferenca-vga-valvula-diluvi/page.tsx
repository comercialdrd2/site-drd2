import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/diferenca-vga-valvula-diluvi",
  meta: {
    title: "Diferença entre Válvula de Governo e Alarme (VGA) e Válvula Dilúvio — Wet Pipe vs. Deluge em SP | DRD2 Engenharia",
    description: "Entenda a diferença entre Válvula de Governo e Alarme (VGA) e válvula dilúvio em sistemas de sprinkler. Quando usar cada uma, como funcionam e o que o CBPMESP exige para o AVCB.",
  },
  eyebrow: "Válvula de Governo e Alarme (VGA) vs. Válvula Dilúvio — Diferenças Técnicas em Sistemas de Sprinkler",
  h1Line1: "Diferença entre Válvula de Governo e Alarme (VGA) e Válvula Dilúvio",
  h1Line2: "em Sprinkler — Wet Pipe vs. Deluge em SP",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "A VGA (válvula de governo e alarme) e a válvula dilúvio são os dois principais tipos de válvula de controle em sistemas de sprinkler — mas funcionam por princípios opostos. A VGA mantém água na rede o tempo todo e abre somente quando um bico individual dispara por temperatura: só o bico mais próximo do foco de calor abre, descarregando água apenas onde é necessário. A válvula dilúvio mantém a rede seca (sem água) e, quando acionada pelo sistema de detecção, abre todos os bicos da zona simultaneamente — inundação total e imediata.",
  introP2:
    "A escolha entre VGA e válvula dilúvio depende do risco, do ambiente e do tipo de proteção exigida pela IT 23/25. A maioria das edificações comerciais e residenciais usa VGA (wet pipe). Câmaras de congelados, hangares de aeronaves, transformadores de alta tensão e áreas com risco de explosão de líquidos inflamáveis usam válvula dilúvio (deluge). A DRD2 projeta e instala ambos os tipos com diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Válvula de Governo e Alarme (VGA) vs. Válvula Dilúvio" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "Como Válvula de Governo e Alarme (VGA) e válvula dilúvio diferem no princípio de operação?",
    body: "A VGA (wet pipe) opera por ação individual do bico: o bico mais próximo do calor funde o elemento termossensível e abre individualmente. A queda de pressão provocada por esse único bico faz o clapet da VGA levantar — ativando a campainha e o pressostato. Somente os bicos que atingirem temperatura de ativação abrem. Em um incêndio pequeno e bem localizado, pode ser que apenas 1 ou 2 bicos abram, concentrando toda a vazão no foco.",
    body2:
      "A válvula dilúvio opera por ação do sistema de detecção (detector de fumaça, temperatura, chama ou pressão): quando o detector aciona, a válvula dilúvio abre e toda a rede, que estava sem água e pressurizada com ar ou nitrogênio, é inundada. Todos os bicos abertos (bicos abertos — sem elemento termossensível) descarregam água simultaneamente. O resultado é cobertura total e imediata da área, mas com consumo de água muito maior e sem discriminação de onde o fogo está.",
  },
  h2_riscos: {
    heading: "Quando usar cada tipo — 6 cenários de decisão técnica",
    intro:
      "A escolha entre Válvula de Governo e Alarme (VGA) e válvula dilúvio não é arbitrária — a IT 23/25 define o tipo para cada risco e ambiente.",
    itens: [
      {
        titulo: "Escritórios, hotéis, residências — VGA (wet pipe)",
        desc: "Risco Leve ou Ordinário G1, sem risco de congelamento, sem materiais que exijam aplicação total imediata. A VGA é o sistema adequado: protege com o mínimo de água necessária, não inunda equipamentos desnecessariamente e é mais simples de manter.",
      },
      {
        titulo: "Câmaras de congelados (abaixo de 0°C) — válvula dilúvio ou dry pipe",
        desc: "Temperaturas abaixo de 0°C congelariam a água nos tubos de um sistema wet pipe. A solução é dry pipe (tubulação pressurizada com ar — válvula dilúvio mantida fechada) ou pré-ação. A válvula dilúvio abre quando o detector aciona, inundando a rede com água somente no momento do incêndio.",
      },
      {
        titulo: "Hangares de aeronaves e áreas com líquidos inflamáveis — válvula dilúvio",
        desc: "Líquidos inflamáveis se espalham rapidamente. Um bico individual não é suficiente — é necessário cobrir toda a área de risco imediatamente para evitar que o fogo se espalhe pelo líquido. A válvula dilúvio, acionada pelo detector de chama, inunda toda a área em segundos.",
      },
      {
        titulo: "Depósitos com armazenamento em estantes altas — VGA com bicos ESFR",
        desc: "Em depósitos com armazenamento em estantes até 12m, bicos ESFR (Early Suppression Fast Response) em sistema wet pipe (VGA) são mais eficazes do que dilúvio: o bico ESFR tem alta taxa de descarga e penetra a chama diretamente, sem precisar inundar toda a área.",
      },
      {
        titulo: "Transformadores de alta tensão — válvula dilúvio com espuma",
        desc: "Transformadores com óleo isolante têm risco de incêndio grave. O sistema deluge com espuma (dilúvio + AFFF) cobre o transformador imediatamente quando o detector de temperatura ativa. Água pura não é suficiente — a espuma sufoca o fogo de óleo.",
      },
      {
        titulo: "Áreas com risco de congelamento parcial — pré-ação",
        desc: "Para áreas que ficam frias mas não chegam a 0°C (como algumas câmaras de resfriamento a +2°C a +8°C), o sistema pré-ação é uma solução intermediária: a rede fica seca até que dois eventos ocorram — detector aciona e bico individual funde. Combina a discriminação do wet pipe com a proteção contra congelamento do dry pipe.",
      },
    ],
  },
  h2_processo: {
    heading: "Diferenças técnicas entre Válvula de Governo e Alarme (VGA) e válvula dilúvio — comparação detalhada",
    etapas: [
      {
        numero: "ITEM 01",
        titulo: "Estado da rede em condição normal",
        desc: "VGA (wet pipe): rede sempre cheia de água pressurizada. Válvula dilúvio (deluge/dry pipe): rede vazia, pressurizada com ar ou nitrogênio. A pressão do gás mantém a válvula dilúvio fechada — diferencial de pressão ar/água.",
      },
      {
        numero: "ITEM 02",
        titulo: "Tipo de bico",
        desc: "VGA: bicos fechados com elemento termossensível (ampola de vidro ou fusível). Cada bico abre individualmente quando a temperatura ambiente atinge o valor de ativação. Válvula dilúvio: bicos abertos (sem elemento termossensível) — a água só chega quando a válvula dilúvio abre.",
      },
      {
        numero: "ITEM 03",
        titulo: "Acionamento",
        desc: "VGA: acionamento pelo próprio bico (temperatura). Sem necessidade de sistema de detecção separado para acionar a descarga. Válvula dilúvio: acionamento pelo sistema de detecção (detector de fumaça, temperatura ou chama) — o bico não é o acionador, é apenas o ponto de descarga.",
      },
      {
        numero: "ITEM 04",
        titulo: "Área de descarga",
        desc: "VGA: somente os bicos que atingirem temperatura de ativação abrem. Em incêndio pequeno: 1 a 4 bicos. Válvula dilúvio: todos os bicos da zona abrem simultaneamente. Em uma zona com 50 bicos DN15 e pressão de 1 bar: ~750 L/min — contra ~50 L/min de um único bico.",
      },
      {
        numero: "ITEM 05",
        titulo: "Manutenção e trip test",
        desc: "VGA: trip test pela torneira de teste — simples e sem drenagem da rede. Válvula dilúvio: trip test mais complexo — envolve drenagem completa da zona após o teste (pois a rede é inundada), verificação do acelerador de abertura e recarga do gás. Custo e complexidade de manutenção maiores.",
      },
      {
        numero: "ITEM 06",
        titulo: "Custo de instalação e operação",
        desc: "VGA: menor custo de instalação (bicos fechados mais baratos, sem sistema de detecção dedicado para acionamento). Custo de manutenção mais baixo. Válvula dilúvio: maior custo de instalação (bicos abertos, sistema de detecção dedicado, compressor de ar ou nitrogênio). Custo de operação e manutenção maiores.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que o CBPMESP aceita — Válvula de Governo e Alarme (VGA) ou válvula dilúvio — para cada uso?",
    body1:
      "O CBPMESP verifica o tipo de sistema instalado conforme a classificação de risco e o uso da edificação definidos na IT 23/25. Instalar um sistema wet pipe (VGA) onde a norma exige dry pipe (válvula dilúvio) é reprovação direta — e vice-versa.",
    alerta:
      "A substituição de VGA por válvula dilúvio (ou o inverso) exige novo projeto com ART, nova instalação e novo trip test. A decisão sobre qual tipo instalar deve ser feita no projeto — não depois da instalação.",
    itens: [
      {
        titulo: "Uso comercial padrão — VGA aceita",
        desc: "Escritórios, lojas, hotéis, residências, hospitais sem câmara fria: sistema wet pipe com VGA é o sistema padrão e aceito pelo CBPMESP. O dimensionamento de DN e o tipo de bico variam conforme o risco, mas a VGA é o componente de controle.",
      },
      {
        titulo: "Câmaras de congelados e áreas com risco de congelamento — dry pipe ou pré-ação",
        desc: "Para câmaras abaixo de 0°C, o CBPMESP exige sistema dry pipe ou pré-ação — sistema wet pipe não é aceito pelo risco de congelamento da rede. A válvula dilúvio (dry pipe valve) é o componente de controle nesse caso.",
      },
      {
        titulo: "Áreas com líquidos inflamáveis e risco de incêndio de rápida propagação — deluge",
        desc: "Para áreas com classificação Extra por presença de líquidos inflamáveis em grande volume, a IT 23/25 pode exigir sistema deluge com cobertura total. A VGA wet pipe não é aceita por não garantir cobertura suficientemente rápida.",
      },
      {
        titulo: "Sistemas mistos — cada zona com o tipo adequado",
        desc: "Edificações com múltiplos usos (como supermercado com câmara de congelados) podem ter sistemas diferentes por zona: VGA wet pipe para as áreas comerciais e dry pipe ou pré-ação para a câmara fria. Cada sistema tem sua válvula de controle, trip test e laudo separados.",
      },
    ],
    closing:
      "A DRD2 projeta e instala VGA e válvulas dilúvio conforme a IT 23/25 e a classificação de risco de cada zona — com memorial de cálculo, ART e laudo de comissionamento para aprovação do AVCB.",
  },
  h2_quando: {
    heading: "Quando revisar a escolha entre Válvula de Governo e Alarme (VGA) e válvula dilúvio?",
    body1:
      "Se o uso da edificação mudou (depósito que virou câmara fria, escritório que virou laboratório com produtos inflamáveis) ou se houve ampliação que alterou a área de risco, a escolha do tipo de sistema deve ser reavaliada. O CBPMESP pode questionar a conformidade do sistema na vistoria de renovação do AVCB se o uso atual não corresponder ao risco previsto no projeto original.",
    body2:
      "Para edificações com sistema existente e mudança de uso: diagnóstico técnico para avaliar se o tipo de sistema ainda é adequado. A DRD2 faz o diagnóstico e, se necessário, o projeto de adequação para o tipo correto.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para Válvula de Governo e Alarme (VGA) e sistemas de sprinkler em SP?",
    body1:
      "A DRD2 projeta e instala VGA e válvulas dilúvio com cálculo hidráulico específico para cada tipo de sistema. A escolha do tipo de sistema é feita no projeto, com justificativa técnica documentada e ART de projeto CREA-SP.",
    body2:
      "Processo integrado: projeto, instalação, comissionamento, manutenção e adequação — sem terceirizar nenhuma etapa. O laudo de cada fase é emitido com resultado numérico do trip test para aprovação do CBPMESP.",
  },
  h2_cobertura: {
    heading: "Projeto e instalação de Válvula de Governo e Alarme (VGA) e válvula dilúvio em toda a Grande SP",
    body1:
      "A DRD2 atende edificações de todos os portes e usos em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para diagnóstico técnico de qual tipo de sistema é adequado para cada uso, o projeto pode ser iniciado remotamente com as plantas da edificação e a descrição dos materiais armazenados ou das atividades realizadas.",
  },
  faqs: [
    {
      question: "Posso converter um sistema wet pipe (VGA) em dry pipe sem refazer a instalação?",
      answer:
        "Não completamente. Para converter de wet pipe para dry pipe, é necessário: substituir os bicos fechados por bicos abertos (ou deixar os abertos em sistema dry pipe com bicos fechados para pré-ação), instalar compressor de ar e controle de pressão diferencial, substituir a VGA por uma válvula dry pipe ou pré-ação, e refazer o projeto com ART. A tubulação pode ser reaproveitada se o dimensionamento for compatível, mas o sistema de controle é completamente diferente.",
    },
    {
      question: "Câmara de resfriamento a +4°C precisa de dry pipe ou pode usar wet pipe?",
      answer:
        "Câmaras de resfriamento acima de 0°C (como câmaras a +2°C a +8°C) podem usar wet pipe com anticongelante (glicol misturado à água da rede) ou sistema pré-ação. Dry pipe é obrigatório somente abaixo de 0°C. O wet pipe com glicol é mais simples de manter mas exige monitoramento da concentração da solução anticongelante — a concentração certa varia conforme a temperatura mínima da câmara.",
    },
    {
      question: "A válvula dilúvio tem trip test?",
      answer:
        "Sim, mas o procedimento é mais complexo do que o trip test da VGA. O trip test da válvula dilúvio envolve: simulação do sinal do detector (ou abertura manual da válvula piloto), verificação de que a válvula abre, medição do tempo de inundação da rede, verificação da pressão em bico aberto e, ao final, drenagem completa da rede (pois todos os bicos abertos inundaram a zona). O trip test de dry pipe pode levar várias horas, contra 30 a 60 minutos de um trip test de VGA wet pipe.",
    },
    {
      question: "Bicos ESFR podem ser usados com válvula dilúvio?",
      answer:
        "Não — bicos ESFR são bicos fechados (com elemento termossensível) projetados para sistemas wet pipe. Bicos abertos (usados em válvulas dilúvio) são de outro tipo. O ESFR é projetado para abrir individualmente e suprimir incêndios em estantes altas com alta taxa de descarga. Em sistema dilúvio, todos os bicos abertos de uma zona descarregam simultaneamente — comportamento incompatível com a lógica de supressão do ESFR.",
    },
    {
      question: "VGA e válvula dilúvio podem estar no mesmo sistema, na mesma edificação?",
      answer:
        "Sim — e é comum em edificações mistas. Um supermercado pode ter VGA wet pipe para as áreas de vendas e dry pipe valve para a câmara de congelados. Cada zona tem sua válvula de controle, seu trip test e seu laudo independentes. O projeto deve especificar claramente cada zona, o tipo de sistema e os critérios de acionamento.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/o-que-e-valvula-governo-alarme", label: "O que é VGA?" },
    { href: "/quando-vga-obrigatoria-sp", label: "Quando a VGA é Obrigatória" },
    { href: "/projeto-vga-sistema-sprinkler-sp", label: "Projeto de VGA" },
    { href: "/sprinkler-supermercado-avcb-sp", label: "Sprinkler para Supermercado" },
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
  ],
  ctaFinal: {
    heading: "VÁLVULA DE GOVERNO E ALARME (VGA) OU VÁLVULA DILÚVIO — DIAGNÓSTICO DO TIPO DE SISTEMA CORRETO PARA SEU USO",
    body: "A DRD2 avalia o risco, define o tipo de sistema e projeta com cálculo hidráulico e ART CREA-SP para aprovação do AVCB.",
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
