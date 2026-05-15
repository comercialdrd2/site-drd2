import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/o-que-e-valvula-governo-alarme",
  meta: {
    title: "O que é Válvula de Governo e Alarme (VGA)? — Componentes e Função | DRD2 Engenharia",
    description: "Entenda o que é a válvula de governo e alarme (VGA): função no sistema de sprinkler, componentes do trim (campainha, pressostato, manômetros), como funciona o trip test e quando é obrigatória.",
  },
  eyebrow: "Válvula de Governo e Alarme — Conceito, Componentes e Função",
  h1Line1: "O que é Válvula de Governo e Alarme",
  h1Line2: "(VGA)? — Componentes, Função e Obrigatoriedade",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "A válvula de governo e alarme (VGA) é o componente central de controle de um sistema de sprinkler wet pipe. Ela faz duas coisas ao mesmo tempo: governa o fluxo de água para a rede de sprinkler (por isso 'governo') e aciona o alarme quando um bico abre em incêndio (por isso 'alarme'). Sem a VGA, o sistema de sprinkler não tem ponto de controle, não tem sinalização de ativação e não pode ser testado ou mantido corretamente. A NBR 10897 exige VGA em todos os sistemas de sprinkler wet pipe — e o CBPMESP a verifica em toda vistoria de AVCB.",
  introP2:
    "A VGA não é apenas uma válvula — é um conjunto de componentes (o 'trim') que inclui campainha hidráulica, pressostato, manômetros, dreno principal e torneira de teste. Cada componente tem função específica e critério de verificação na vistoria. A DRD2 instala, mantém e adequa VGAs para AVCB em SP com diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "O que é Válvula de Governo e Alarme (VGA)?" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "Quais são os componentes da Válvula de Governo e Alarme (VGA) e o que cada um faz?",
    body: "A VGA é composta por dois grandes grupos: a válvula de retenção de alarme (o corpo principal com o clapet) e o trim (o conjunto de componentes acoplados ao corpo). O corpo da VGA tem uma câmara dividida pelo clapet — na posição normal, o clapet mantém a pressão estática do sistema e impede que a água flua para a linha de alarme. Quando um bico abre, a pressão cai do lado do sistema, o clapet levanta e a água passa tanto para a rede de sprinkler quanto para a linha de alarme.",
    body2:
      "O trim inclui: campainha hidráulica (aciona por fluxo de água na linha de alarme — alarme mecânico, sem necessidade de energia elétrica), pressostato (detecta a pressão do fluxo e envia sinal elétrico para a central de alarme), manômetros na alimentação e no sistema (monitoramento de pressão em tempo real), dreno principal de 2\" (escoamento para manutenção e trip test) e torneira de teste ou inspector's test connection (simula a abertura de um único bico para verificação funcional sem abrir bico real).",
  },
  h2_riscos: {
    heading: "Por que a Válvula de Governo e Alarme (VGA) falha — e o que cada falha significa",
    intro:
      "Cada componente da Válvula de Governo e Alarme (VGA) tem um modo de falha específico. Conhecer esses modos é essencial para a manutenção preventiva e para a interpretação dos resultados do trip test.",
    itens: [
      {
        titulo: "Clapet preso na posição aberta — falso alarme permanente",
        desc: "O clapet (disco de borracha sobre assento de latão) pode ficar preso na posição aberta por enrijecimento do material ou corrosão do assento. Com o clapet aberto, a pressão do sistema cai continuamente para a linha de alarme — a campainha soa sem incêndio e o pressostato tem sinal permanente na central.",
      },
      {
        titulo: "Clapet preso na posição fechada — sistema não detecta abertura de bico",
        desc: "O clapet preso na posição fechada não abre quando um bico real dispara. A água chega ao bico pela pressão estática do sistema, mas a linha de alarme não recebe pressão — a campainha não soa e o pressostato não envia sinal. O incêndio começa a ser combatido mas ninguém é avisado.",
      },
      {
        titulo: "Campainha com palheta travada — alarme sem resposta",
        desc: "A palheta da campainha hidráulica gira por ação do fluxo d'água. Sedimento de calcário e ferrugem acumulam na câmara interna ao longo do tempo. A palheta trava e a campainha para de soar — o fluxo passa pela linha de alarme mas nenhum alarme audível é gerado. Só detectado no trip test.",
      },
      {
        titulo: "Pressostato com contato oxidado — central de alarme sem sinal",
        desc: "O pressostato tem um contato elétrico que fecha sob pressão. Em ambientes úmidos, esse contato oxida em 12 a 18 meses. O clapet abre e a campainha soa, mas o sinal elétrico não chega à central — o sistema funciona mecanicamente mas não integra com a central de alarme.",
      },
      {
        titulo: "Manômetros descalibrados — sistema sem referência de pressão",
        desc: "O operador lê o manômetro para verificar se o sistema está pressurizado. Manômetros com ponteiro preso ou descalibrados mostram leitura incorreta — uma queda de pressão real por micro-vazamento pode ser invisível. A NBR 10897 recomenda calibração pelo menos a cada 5 anos.",
      },
      {
        titulo: "Torneira de teste ausente ou mal posicionada — trip test inválido",
        desc: "A torneira de teste deve estar no ponto mais desfavorecido do sistema para simular o pior caso real. Torneira ausente ou em posição intermediária impede o trip test correto — o CBPMESP pode questionar a validade do laudo de manutenção.",
      },
    ],
  },
  h2_processo: {
    heading: "Como funciona a Válvula de Governo e Alarme (VGA) em um incêndio real — passo a passo",
    etapas: [
      {
        numero: "PASSO 01",
        titulo: "Bico abre por temperatura",
        desc: "O bico de sprinkler mais próximo do foco de calor atinge sua temperatura de ativação (geralmente 57°C–79°C) e abre. A pressão do sistema começa a cair pelo fluxo de água no bico.",
      },
      {
        numero: "PASSO 02",
        titulo: "Clapet da VGA levanta",
        desc: "A diferença de pressão entre o lado da alimentação (alta pressão) e o lado do sistema (pressão caindo) faz o clapet levantar. A água passa tanto para a rede de sprinkler quanto para a linha de alarme de 3/4\".",
      },
      {
        numero: "PASSO 03",
        titulo: "Campainha hidráulica aciona",
        desc: "A pressão do fluxo na linha de alarme aciona a palheta da campainha hidráulica. O alarme audível mecânico começa a soar — sem necessidade de energia elétrica. Critério NBR 10897: ≤ 60 segundos após abertura do bico.",
      },
      {
        numero: "PASSO 04",
        titulo: "Pressostato envia sinal à central",
        desc: "A pressão do fluxo fecha o contato elétrico do pressostato. O sinal chega à central de alarme com identificação da zona, que aciona sirenes, notifica a brigada e pode acionar o CBPMESP automaticamente.",
      },
      {
        numero: "PASSO 05",
        titulo: "Sistema combate o foco",
        desc: "A água continua fluindo pelos bicos abertos até que a alimentação seja cortada manualmente pela válvula OS&Y. A bomba de incêndio (jockey + principal) mantém a pressão durante o combate.",
      },
      {
        numero: "PASSO 06",
        titulo: "Clapet recobre após fechamento do fluxo",
        desc: "Quando a válvula OS&Y é fechada, o fluxo cessa e o clapet recobre a câmara de alarme. A campainha para e o pressostato remove o sinal. O sistema pode ser rearmado após substituição dos bicos disparados.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Quando a Válvula de Governo e Alarme (VGA) é obrigatória pelo CBPMESP em SP?",
    body1:
      "A VGA é obrigatória em todos os sistemas de sprinkler wet pipe (tubo molhado) em São Paulo, conforme a IT 23/25 do CBPMESP. Qualquer edificação com sistema de sprinkler — independente do porte, uso ou número de bicos — precisa de VGA para obter ou renovar o AVCB.",
    alerta:
      "Sistema de sprinkler instalado sem VGA ou com VGA sem o trim completo (campainha, pressostato, manômetros, dreno) não pode ser aprovado pelo CBPMESP. A aprovação com ressalvas não existe para ausência de VGA — é reprovação direta.",
    itens: [
      {
        titulo: "Edificações com obrigatoriedade de sprinkler pela IT 23/25",
        desc: "A IT 23/25 define quais edificações precisam de sprinkler conforme altura, área e uso. Toda edificação obrigada a ter sprinkler precisa de VGA — e a VGA precisa ter trip test documentado para o AVCB.",
      },
      {
        titulo: "Uma VGA por zona de sprinkler",
        desc: "Cada zona de sprinkler (area de controle independente) precisa de uma VGA. Edificações com múltiplos pavimentos ou setores diferentes podem ter 2, 4, 8 ou mais VGAs — cada uma com seu trim completo e integração com a central.",
      },
      {
        titulo: "VGA para dry pipe também é obrigatória",
        desc: "Sistemas de tubo seco (dry pipe) — usados em câmaras de congelados abaixo de 0°C — também exigem VGA (ou válvula de dilúvio com acelerador). O funcionamento é diferente do wet pipe mas a obrigatoriedade de controle e alarme é a mesma.",
      },
      {
        titulo: "DN calculado conforme demanda — não existe DN padrão",
        desc: "O DN da VGA (DN65, DN80, DN100, DN150, DN200) é definido por cálculo hidráulico, não por convenção. Um sistema com 200 bicos e outro com 20 bicos podem ter o mesmo DN ou DNs diferentes, dependendo da densidade de projeto e da pressão disponível.",
      },
    ],
    closing:
      "A DRD2 realiza diagnóstico técnico gratuito da VGA existente e orienta sobre a conformidade com a IT 23/25 vigente — incluindo verificação de trim, pressostato e documentação para AVCB.",
  },
  h2_quando: {
    heading: "Válvula de Governo e Alarme (VGA) nova, retrofit ou adequação — qual é o seu caso?",
    body1:
      "Sistema novo: a VGA faz parte do projeto desde a concepção — o DN é calculado junto com a rede de sprinkler e o trim é especificado em projeto com ART. Sistema existente sem VGA: retrofit completo com cálculo de DN, instalação do conjunto e comissionamento. Sistema com VGA sem trim completo ou sem laudo: adequação para conformidade com a IT 23/25 atual.",
    body2:
      "Sistema com Comunique-se do CBPMESP sobre a VGA: atendimento com urgência — diagnóstico e plano de adequação em até 24 horas após a visita técnica. A DRD2 identifica o escopo mínimo de intervenção para regularização no menor prazo possível.",
  },
  h2_escolher: {
    heading: "Como a DRD2 atua com Válvula de Governo e Alarme (VGA) para sprinkler em SP",
    body1:
      "A DRD2 cobre todo o ciclo da VGA: projeto com cálculo hidráulico, instalação com trim completo, comissionamento com trip test documentado, manutenção semestral e anual, adequação para AVCB e atendimento de urgência para Comunique-se.",
    body2:
      "Cada serviço é executado por engenheiro CREA-SP com ART específica para a atividade. O laudo de cada etapa é emitido com resultado numérico do trip test — não apenas inspeção visual — para garantir aprovação na primeira vistoria do CBPMESP.",
  },
  h2_cobertura: {
    heading: "Atendimento de Válvula de Governo e Alarme (VGA) em toda a Grande SP",
    body1:
      "A DRD2 atende edificações de todos os portes em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para diagnóstico inicial de VGA existente, é possível realizar avaliação prévia por videochamada com fotos do conjunto instalado. A visita técnica presencial é necessária para o trip test e emissão do laudo.",
  },
  faqs: [
    {
      question: "VGA e válvula de retenção são a mesma coisa?",
      answer:
        "Não. A válvula de retenção (check valve) impede o refluxo de água — usada em várias aplicações hidráulicas. A VGA (válvula de governo e alarme) é uma válvula de retenção de alarme específica para sistemas de sprinkler: ela tem câmara de alarme integrada, orifício para a linha de alarme e encaixe para o trim completo. Uma válvula de retenção simples não tem esses recursos e não pode substituir a VGA.",
    },
    {
      question: "Qual a diferença entre VGA e válvula dilúvio?",
      answer:
        "A VGA (wet pipe) mantém água em toda a rede de sprinkler e abre somente quando um bico dispara. A válvula de dilúvio (dry pipe ou deluge) mantém a rede sem água — aberta apenas quando o sistema de detecção (detector de fumaça, temperatura ou chama) aciona a válvula, inundando toda a rede simultaneamente. A VGA é para sistemas wet pipe comuns; a válvula dilúvio é para sistemas deluge ou dry pipe em ambientes com risco de congelamento ou exigência de resposta total.",
    },
    {
      question: "Posso usar a VGA existente se ela ainda funciona mecanicamente?",
      answer:
        "Depende do trip test e do cálculo hidráulico. Uma VGA com mais de 15 anos pode funcionar mecanicamente mas ter o trim incompleto pela norma atual (IT 23/25 exige integração do pressostato com a central, por exemplo, o que nem sempre existia nas instalações antigas). O diagnóstico técnico identifica o que precisa de adequação antes de definir se a válvula principal deve ou não ser substituída.",
    },
    {
      question: "O que é o 'trim' da VGA?",
      answer:
        "Trim é o conjunto de componentes acoplados ao corpo da válvula que formam o sistema completo. Inclui: linha de alarme (tubulação de 3/4\" entre o orifício de alarme da VGA e a campainha), campainha hidráulica (water motor gong), pressostato, manômetros (um no lado da alimentação e um no lado do sistema), dreno principal de 2\", válvula de dreno auxiliar de 3/4\" e torneira de teste. Um corpo de VGA sem trim completo não é um sistema funcional.",
    },
    {
      question: "A VGA precisa de energia elétrica para funcionar?",
      answer:
        "O acionamento mecânico da VGA (clapet abre e campainha soa) não precisa de energia elétrica — funciona por diferença de pressão hidráulica. Isso é uma característica de segurança crítica: em incêndio, a energia elétrica pode cair, mas a VGA continua funcionando. O pressostato é o componente elétrico — ele precisa de tensão para enviar o sinal à central. Por isso, a alimentação elétrica do sistema de alarme deve ser ininterrupta (nobreak ou bateria).",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/como-funciona-vga-sprinkler", label: "Como Funciona a VGA" },
    { href: "/quando-vga-obrigatoria-sp", label: "Quando a VGA é Obrigatória" },
    { href: "/instalacao-vga-sprinkler-sp", label: "Instalação de VGA" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de VGA" },
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
  ],
  ctaFinal: {
    heading: "DIAGNÓSTICO TÉCNICO GRATUITO DE VÁLVULA DE GOVERNO E ALARME (VGA) — CONFORMIDADE IT 23/25 E NBR 10897",
    body: "A DRD2 verifica a conformidade da VGA existente e apresenta o escopo mínimo de adequação para aprovação do AVCB.",
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
