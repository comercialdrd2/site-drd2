import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/quando-vga-obrigatoria-sp",
  meta: {
    title: "Quando a Válvula de Governo e Alarme (VGA) é Obrigatória em SP? — IT 23/25 e AVCB | DRD2 Engenharia",
    description: "Saiba quando a Válvula de Governo e Alarme (VGA) é obrigatória em SP pela IT 23/25. Quais edificações precisam de VGA, quantas VGAs por sistema, DN mínimo e o que o CBPMESP verifica na vistoria.",
  },
  eyebrow: "Quando a Válvula de Governo e Alarme (VGA) é Obrigatória — IT 23/25 e Critérios do CBPMESP em São Paulo",
  h1Line1: "Quando a Válvula de Governo e Alarme (VGA) é Obrigatória",
  h1Line2: "em SP — IT 23/25, AVCB e Critérios CBPMESP",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "A VGA (válvula de governo e alarme) é obrigatória em toda edificação que tenha sistema de sprinkler wet pipe em São Paulo, conforme a IT 23/25 do CBPMESP. A obrigatoriedade da VGA não depende do número de bicos, da área coberta ou do porte da edificação — qualquer sistema de sprinkler wet pipe precisa de pelo menos uma VGA. A pergunta correta não é 'quando a VGA é obrigatória', mas 'quando o sistema de sprinkler é obrigatório' — porque onde há sprinkler, há VGA.",
  introP2:
    "A IT 23/25 define quais edificações precisam de sprinkler — e, portanto, de VGA — com base em altura, área total, uso e classificação de risco. Para cada zona de sprinkler independente, é necessária uma VGA. Edificações maiores ou com múltiplos setores podem ter 4, 8 ou mais VGAs. A DRD2 verifica a obrigatoriedade e o número de VGAs necessárias em cada edificação com diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Quando a Válvula de Governo e Alarme (VGA) é Obrigatória" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "O que define a obrigatoriedade do sprinkler — e da Válvula de Governo e Alarme (VGA) — em SP?",
    body: "A IT 23/25 define a obrigatoriedade de sprinkler por uma combinação de fatores: altura da edificação (edificações com mais de 30m de altura são as mais frequentemente obrigadas), área total (acima de 1.500 m² em muitos usos), e classificação de uso e risco (armazenamento de líquidos inflamáveis, hospitais, hotéis acima de determinado porte). Para cada combinação, a IT 23/25 define se sprinkler é obrigatório — e se é, qual a densidade de projeto (mm/min) e a área de operação (m²) conforme o risco.",
    body2:
      "Uma vez definida a obrigatoriedade do sprinkler, a VGA é parte integrante do sistema — não um opcional. A NBR 10897 item 13 estabelece os requisitos da VGA para sistemas wet pipe: localização, componentes mínimos do trim, acesso para manutenção e frequência de testes. O CBPMESP verifica todos esses requisitos na vistoria de emissão e renovação do AVCB.",
  },
  h2_riscos: {
    heading: "Os 6 cenários mais comuns de obrigatoriedade de Válvula de Governo e Alarme (VGA) em SP",
    intro:
      "Esses são os casos mais frequentes de edificações que precisam de Válvula de Governo e Alarme (VGA) em São Paulo — com o critério específico da IT 23/25 em cada um.",
    itens: [
      {
        titulo: "Edificações de uso misto com altura acima de 30m",
        desc: "Edifícios comerciais, residenciais e de uso misto com mais de 10 andares (acima de 30m de altura) frequentemente estão sujeitos à obrigatoriedade de sprinkler por altura. Cada zona de sprinkler — geralmente por pavimento ou agrupamento de pavimentos — precisa de uma VGA.",
      },
      {
        titulo: "Centros de distribuição e galpões logísticos com armazenamento acima de 3m",
        desc: "Galpões com armazenamento empilhado acima de 3m têm classificação de risco Extra G1 ou G2 pela IT 23/25, com densidades de projeto mais altas. A VGA é dimensionada para essa demanda de vazão maior — geralmente DN100 ou DN150.",
      },
      {
        titulo: "Hospitais, clínicas e edificações de saúde acima de 200m²",
        desc: "Edificações de saúde com internação têm obrigatoriedade de sprinkler independente de altura, pelo uso crítico. A VGA deve integrar com o sistema de alarme hospitalar — o pressostato deve identificar a zona corretamente para notificação imediata da equipe.",
      },
      {
        titulo: "Hotéis e edificações de uso coletivo noturno",
        desc: "Hotéis, motéis e edificações com uso coletivo noturno têm obrigatoriedade de sprinkler em função de área e da presença de pessoas dormindo sem conhecimento do ambiente. A VGA deve integrar com anunciador sonoro que cubra quartos e corredores.",
      },
      {
        titulo: "Shoppings, centros comerciais e supermercados",
        desc: "Edificações de uso comercial varejista acima de determinada área têm sprinkler obrigatório. Shoppings têm frequentemente sistemas setorizados por loja âncora, corredor, estacionamento — cada setor com sua VGA independente.",
      },
      {
        titulo: "Indústrias com armazenamento de líquidos inflamáveis ou materiais Extra",
        desc: "Indústrias com classificação Extra G1 ou G2 pela natureza dos materiais armazenados têm densidades de projeto mais exigentes. A VGA para esses sistemas é geralmente de DN maior e o trip test precisa verificar pressão residual mais alta.",
      },
    ],
  },
  h2_processo: {
    heading: "Como determinar quantas Válvulas de Governo e Alarme (VGAs) e qual DN para cada edificação",
    etapas: [
      {
        numero: "PASSO 01",
        titulo: "Classificação de uso e risco pela IT 23/25",
        desc: "Identificação do uso principal e de todos os usos secundários da edificação. Cada uso tem classificação de risco (Leve, Ordinário G1/G2, Extra G1/G2) que define a densidade de projeto e a área de operação.",
      },
      {
        numero: "PASSO 02",
        titulo: "Definição das zonas de sprinkler",
        desc: "Setorização do sistema por zonas independentes — cada zona controlada por uma VGA. A setorização considera: pavimentos, usos diferentes, áreas acima do limite de bicos por zona (geralmente 1.000 bicos por zona), e compartimentação para manutenção.",
      },
      {
        numero: "PASSO 03",
        titulo: "Cálculo da demanda hidráulica por zona",
        desc: "Para cada zona: área de operação × densidade de projeto = demanda de descarga (L/min/m²). Soma dos bicos na área de operação × pressão mínima = demanda total de vazão (L/min) para a zona.",
      },
      {
        numero: "PASSO 04",
        titulo: "Dimensionamento de DN por perda de carga",
        desc: "Cálculo da perda de carga na VGA para cada DN (DN65, DN80, DN100, DN150, DN200) usando o coeficiente K específico do modelo. Seleção do menor DN que mantém pressão residual acima do mínimo no ponto mais desfavorecido.",
      },
      {
        numero: "PASSO 05",
        titulo: "Especificação do trim para cada VGA",
        desc: "Cada VGA tem seu trim completo: campainha, pressostato, manômetros, dreno de 2\", torneira de teste na posição mais desfavorecida da zona. O pressostato de cada VGA deve identificar a zona correta na central de alarme.",
      },
      {
        numero: "PASSO 06",
        titulo: "Projeto com ART e planejamento de manutenção",
        desc: "Projeto de cada VGA com memorial de cálculo, detalhe de trim e ART de projeto CREA-SP. Planejamento do calendário de manutenção semestral e trip test anual para cada VGA — com documentação para renovação do AVCB.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que o CBPMESP verifica na Válvula de Governo e Alarme (VGA) na vistoria de AVCB",
    body1:
      "O vistoriador do CBPMESP verifica a VGA em três dimensões: documentação (projeto com ART, laudo de comissionamento, relatórios de manutenção), condição física (trim completo, sem corrosão, acessível) e funcionalidade (trip test com campainha e pressostato funcionais).",
    alerta:
      "Em vistorias de renovação de AVCB, o CBPMESP pode solicitar os relatórios de manutenção dos últimos 2 anos. Edificação sem manutenção documentada pode receber Comunique-se específico sobre documentação — mesmo que a VGA esteja fisicamente presente e funcional.",
    itens: [
      {
        titulo: "Documentação: projeto, ART e laudos",
        desc: "O projeto da VGA com memorial de cálculo de DN e ART de projeto CREA-SP. O laudo de comissionamento com resultado do trip test inicial. Os relatórios de manutenção semestral com resultado do trip test anual.",
      },
      {
        titulo: "Condição física: trim completo e acessível",
        desc: "Todos os componentes do trim presentes: campainha, pressostato, manômetros, dreno de 2\", torneira de teste. VGA acessível — ao menos 0,6 m de espaço livre para inspeção e manutenção sem necessidade de remoção de estrutura.",
      },
      {
        titulo: "Funcionalidade: campainha e pressostato",
        desc: "Em vistorias mais detalhadas, o CBPMESP pode solicitar trip test presencial. A campainha deve responder em até 60 segundos e o pressostato deve identificar a zona corretamente na central de alarme.",
      },
      {
        titulo: "Conformidade com a IT 23/25 vigente",
        desc: "A IT 23/25 foi atualizada em 2025. Sistemas instalados antes da versão atual podem ter não-conformidades — especialmente a integração do pressostato com a central de alarme e a torneira de teste no ponto mais desfavorecido, exigências que foram reforçadas na versão atual.",
      },
    ],
    closing:
      "A DRD2 verifica a conformidade da VGA com a IT 23/25 vigente e prepara a documentação completa para a renovação do AVCB — incluindo projeto, laudo de comissionamento e relatórios de manutenção.",
  },
  h2_quando: {
    heading: "O sistema existe mas nunca teve Válvula de Governo e Alarme (VGA) — o que fazer?",
    body1:
      "Sistemas de sprinkler instalados sem VGA — ou com VGA sem trim completo — não estão em conformidade com a NBR 10897 e não podem ser aprovados pelo CBPMESP. A regularização exige retrofit de VGA com projeto, instalação do conjunto completo, comissionamento e emissão de laudo.",
    body2:
      "Se o sistema tem VGA mas ela nunca passou por trip test documentado: o CBPMESP pode exigir comissionamento retroativo. A DRD2 realiza o trip test e emite laudo com os resultados atuais — identificando qualquer componente que precise de substituição antes da emissão do laudo de conformidade.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para Válvula de Governo e Alarme (VGA) em SP?",
    body1:
      "A DRD2 cobre todo o ciclo da VGA: diagnóstico, projeto com cálculo hidráulico, instalação com trim completo, comissionamento com trip test real, manutenção semestral e anual, e adequação para regularização de Comunique-se.",
    body2:
      "Processo integrado com engenheiro CREA-SP em todas as etapas. ART de projeto e ART de execução para cada fase — documentação que o CBPMESP aceita na primeira vistoria e que protege o proprietário em caso de questionamento.",
  },
  h2_cobertura: {
    heading: "Verificação de obrigatoriedade de Válvula de Governo e Alarme (VGA) em toda a Grande SP",
    body1:
      "A DRD2 realiza diagnóstico de obrigatoriedade e verificação de conformidade de VGA em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para edificações com dúvida sobre obrigatoriedade de sprinkler ou conformidade da VGA existente, o diagnóstico inicial pode ser feito remotamente com as plantas da edificação. A visita técnica presencial é necessária para o trip test e emissão do laudo.",
  },
  faqs: [
    {
      question: "Galpão industrial com 800 m² e pé-direito de 6m precisa de VGA?",
      answer:
        "Depende do que é armazenado e da classificação de risco. Galpões com materiais de risco Extra G1 ou G2 (líquidos inflamáveis, plásticos em grandes quantidades, papel em rolos) precisam de sprinkler — e, portanto, de VGA — independente da área. Galpões com armazenamento de risco Leve ou Ordinário são avaliados pela IT 23/25 conforme área e configuração de armazenamento. A DRD2 faz a classificação de risco como parte do diagnóstico.",
    },
    {
      question: "Uma edificação pode ter múltiplas VGAs de DNs diferentes?",
      answer:
        "Sim — e isso é comum em edificações grandes. Um shopping center pode ter VGAs DN80 para as lojas do corredor (risco Ordinário, menor demanda), DN100 para a praça de alimentação e DN150 para o estacionamento com depósito. Cada zona tem seu próprio cálculo hidráulico e seu próprio DN.",
    },
    {
      question: "A VGA precisa estar na casa de máquinas ou pode estar em qualquer local?",
      answer:
        "A NBR 10897 exige que a VGA esteja em local protegido contra intempéries e com acesso permanente para inspeção e manutenção. A casa de máquinas é o local mais comum — mas a VGA pode estar em shaft técnico, corredor de serviço ou qualquer local que atenda aos requisitos de acesso e proteção. A restrição é que ela não pode estar em local que exija demolição ou remoção de equipamento para ser acessada.",
    },
    {
      question: "Se a edificação é antiga e nunca teve sprinkler, pode ser obrigada a instalar agora?",
      answer:
        "A obrigatoriedade de adequação de edificações existentes à IT 23/25 depende de quando a edificação foi construída e se houve mudança de uso ou reforma relevante. Edificações com AVCB vencido que solicitam renovação podem ser avaliadas pela IT vigente. A DRD2 orienta sobre a legislação aplicável ao caso específico — o histórico de AVCB e a data do projeto original são determinantes.",
    },
    {
      question: "A VGA de sistema de câmara de congelados é diferente da VGA padrão?",
      answer:
        "Sim. Câmaras de congelados com temperatura abaixo de 0°C usam sistemas dry pipe (tubo seco) — a rede fica pressurizada com ar comprimido, e a água só entra quando um bico abre. A 'VGA' desse sistema é uma válvula dry pipe ou dilúvio — tecnicamente diferente da VGA wet pipe padrão, mas com a mesma função de controle e alarme. O trip test é mais complexo no dry pipe, pois envolve o acelerador de abertura e o diferencial de pressão ar/água.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/o-que-e-valvula-governo-alarme", label: "O que é VGA?" },
    { href: "/projeto-vga-sistema-sprinkler-sp", label: "Projeto de VGA" },
    { href: "/instalacao-vga-sprinkler-sp", label: "Instalação de VGA" },
    { href: "/adequacao-vga-avcb-sp", label: "Adequação de VGA para AVCB" },
    { href: "/sprinkler-obrigatorio-avcb-sp", label: "Sprinkler Obrigatório SP" },
  ],
  ctaFinal: {
    heading: "VÁLVULA DE GOVERNO E ALARME (VGA) OBRIGATÓRIA EM SP — DIAGNÓSTICO DE CONFORMIDADE COM A IT 23/25",
    body: "A DRD2 verifica a obrigatoriedade, diagnostica a conformidade da VGA existente e apresenta o escopo de regularização para o AVCB.",
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
