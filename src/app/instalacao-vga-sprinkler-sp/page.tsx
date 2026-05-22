import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/instalacao-vga-sprinkler-sp",
  meta: {
    title: "Instalação de Válvula de Governo e Alarme (VGA) em SP — Conjunto Completo para Sprinkler | DRD2 Engenharia",
    description: "A DRD2 instala Válvula de Governo e Alarme (VGA) para sprinkler em SP. Conjunto completo: campainha hidráulica, pressostato, manômetros, dreno e ART para AVCB. Diagnóstico gratuito.",
  },
  eyebrow: "Instalação de Válvula de Governo e Alarme (VGA) — IT 23/25 e NBR 10897 em São Paulo",
  h1Line1: "Instalação de Válvula de Governo e Alarme",
  h1Line2: "para Sprinkler em SP — Conjunto Completo com ART",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "A instalação de uma VGA vai muito além de fixar a válvula na tubulação. O conjunto exige campainha hidráulica com tubulação inclinada para dreno, pressostato cabeado até a central de alarme, manômetros na alimentação e no sistema, dreno principal de 2 polegadas e torneira de teste no ponto mais desfavorecido. Cada componente tem posição, orientação e especificação técnica definidas pela NBR 10897. Instalar a VGA sem o trim completo resulta em reprovação na vistoria do CBPMESP — mesmo que a válvula principal esteja funcionando.",
  introP2:
    "A DRD2 executa instalação de VGA para sistemas de sprinkler em SP com conjunto de trim completo, dimensionamento correto de DN, integração com a central de alarme e trip test documentado. ART de projeto e execução CREA-SP incluídas. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Instalação de Válvula de Governo e Alarme (VGA)" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "O que diferencia uma instalação de Válvula de Governo e Alarme (VGA) correta de uma instalação incompleta?",
    body: "A maioria das reprovações de VGA na vistoria do CBPMESP não é por falha da válvula principal — é por componentes de trim ausentes ou mal instalados. A campainha hidráulica instalada sem inclinação de dreno acumula água na linha de alarme, corrói internamente e para de responder no teste. O pressostato instalado mas não cabeado até a central é como não ter pressostato. Os manômetros instalados na escala errada (0–4 bar em sistema de 12 bar) não permitem leitura operacional útil. A instalação correta trata o conjunto inteiro como um sistema integrado.",
    body2:
      "O dimensionamento de DN precede qualquer instalação. Uma VGA DN80 instalada onde o cálculo hidráulico exige DN100 cria gargalo na rede: os bicos mais desfavorecidos perdem pressão antes de atingir a área de operação definida no projeto. O resultado é um sistema visualmente completo que falha no teste de vazão do ponto mais desfavorecido — reprovação que exige retirada da VGA e reinstalação com o DN correto.",
  },
  h2_riscos: {
    heading: "Erros mais frequentes na instalação de Válvula de Governo e Alarme (VGA) em SP",
    intro:
      "Esses 6 erros são os que mais frequentemente resultam em reprovação ou retrabalho em instalações de Válvula de Governo e Alarme (VGA) para sprinkler em São Paulo.",
    itens: [
      {
        titulo: "DN errado — Válvula de Governo e Alarme (VGA) subdimensionada",
        desc: "Instalar VGA com DN inferior ao exigido pelo cálculo hidráulico é o erro de maior custo: a válvula precisa ser retirada e substituída. O dimensionamento deve ser feito antes da compra do equipamento, com cálculo de perda de carga para o pior cenário de vazão do sistema.",
      },
      {
        titulo: "Campainha sem inclinação de dreno adequada",
        desc: "A linha entre a VGA e a campainha hidráulica deve ter caimento mínimo para drenagem por gravidade. Instalação horizontal ou com contra-declividade acumula água que congela em câmaras frias, corrói em ambientes úmidos e cria falsos alarmes por pressão hidrostática.",
      },
      {
        titulo: "Pressostato instalado mas não integrado à central",
        desc: "É o erro mais frequente em retrofits: o pressostato está fisicamente instalado na VGA mas o cabeamento nunca chegou à central — ou chegou a uma central que foi substituída sem reconexão. A integração é testada antes do trip test para evitar retrabalho.",
      },
      {
        titulo: "Válvula OS&Y ou borboleta de governo ausente",
        desc: "A válvula de governo (OS&Y gate valve ou butterfly OS&Y) deve ser instalada a montante da VGA para isolar o sistema sem drenar a rede. Instalação sem válvula de governo impede manutenção e testes sem interrupção total do sistema.",
      },
      {
        titulo: "Dreno principal subdimensionado ou ausente",
        desc: "O dreno principal de 2\" é obrigatório e deve ter saída livre visível — não conectado à rede de esgoto sem sifão apropriado. O dreno é necessário para escoamento durante o trip test e para drenagem do sistema em manutenção.",
      },
      {
        titulo: "VGA instalada em local sem acesso permanente",
        desc: "A VGA deve estar em local com acesso permanente para inspeção visual e manutenção — ao menos 0,6 m de espaço livre na frente do conjunto. Instalações em shafts sem porta de acesso adequada ou encoberta por forro são reprovadas na vistoria.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa a instalação de Válvula de Governo e Alarme (VGA)",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Levantamento e cálculo de DN",
        desc: "Verificação da demanda hidráulica do sistema (área de operação × densidade de projeto × número de bicos) e cálculo de perda de carga na VGA para cada DN disponível. Definição do DN mínimo que mantém pressão residual acima do exigido no ponto mais desfavorecido.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Projeto com ART e especificação do trim",
        desc: "Detalhe isométrico do conjunto completo: VGA, válvula OS&Y, campainha hidráulica com declividade de dreno, pressostato, manômetros, dreno principal e torneira de teste. ART de projeto CREA-SP emitida antes da instalação.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Instalação do conjunto na posição correta",
        desc: "Montagem da VGA com orientação conforme especificação do fabricante (geralmente vertical com fluxo ascendente). Instalação de todos os componentes de trim na sequência correta conforme o detalhe de projeto.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Instalação da campainha e cabeamento do pressostato",
        desc: "Linha de alarme com inclinação de dreno. Campainha hidráulica posicionada externamente com dreno visível. Cabeamento do pressostato em eletroduto até a central de alarme com identificação do ponto na central.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Enchimento, pressurização e verificação",
        desc: "Enchimento do sistema com purga de ar, pressurização e verificação de estanqueidade em todos os pontos do trim. Leitura dos manômetros na alimentação e no sistema para confirmar ausência de queda de pressão.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Trip test e ART de execução",
        desc: "Trip test pela torneira de teste: verificação de campainha, sinal do pressostato na central de alarme e pressão diferencial registrada. Relatório fotográfico completo, ART de execução CREA-SP e laudo técnico para AVCB.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a NBR 10897 exige na instalação de Válvula de Governo e Alarme (VGA)",
    body1:
      "A NBR 10897 define os requisitos de instalação da VGA: orientação da válvula, componentes mínimos do trim, especificação de tubulação de alarme e requisitos de acesso. A IT 23/25 do CBPMESP estabelece os critérios de aprovação na vistoria.",
    alerta:
      "Substituição de VGA existente por modelo diferente — mesmo com mesmo DN — pode exigir atualização do projeto e nova ART se o modelo substituto tiver coeficiente K diferente, alterando o cálculo hidráulico.",
    itens: [
      {
        titulo: "Orientação da válvula conforme fabricante",
        desc: "A maioria das VGAs deve ser instalada com fluxo vertical ascendente. Instalação horizontal ou invertida altera o comportamento do clapet e pode causar falsas operações ou falha de funcionamento. Seguir a especificação do fabricante e o detalhe do projeto.",
      },
      {
        titulo: "Tubulação de alarme com inclinação mínima",
        desc: "A linha entre o orifício de alarme da VGA e a campainha deve ter declividade mínima para drenagem por gravidade. A linha de retorno da campainha deve terminar com saída livre — não conectada à rede sem sifão.",
      },
      {
        titulo: "Manômetros com escala adequada",
        desc: "A escala do manômetro deve ser ao menos 2× a pressão máxima de trabalho do sistema. Em sistemas de 10 bar, o manômetro correto é 0–25 bar — não 0–10 bar. Manômetros com escala insuficiente não permitem detecção de sobrepressão.",
      },
      {
        titulo: "Torneira de teste no ponto mais desfavorecido",
        desc: "A torneira de teste (inspector's test connection) deve simular o fluxo de um único bico no ponto mais remoto do sistema. Ela é o ponto de referência para o trip test anual e deve estar acessível e identificada.",
      },
    ],
    closing:
      "A DRD2 realiza diagnóstico gratuito do sistema existente ou da planta nova, calcula o DN correto e apresenta proposta de instalação com conjunto completo de trim, ART e laudo para AVCB.",
  },
  h2_quando: {
    heading: "Quando instalar ou substituir a Válvula de Governo e Alarme (VGA)?",
    body1:
      "Instalação nova: em qualquer sistema de sprinkler wet pipe novo — a VGA é parte obrigatória do projeto desde a concepção. Substituição: quando a VGA existente falhar no trip test, apresentar vazamento crônico no clapet, ou quando o sistema for ampliado com novo número de bicos que altere a demanda de vazão.",
    body2:
      "Urgência imediata: VGA com campainha disparando sem abertura de bico (clapet com vedação danificada), pressostato com sinal constante na central de alarme ou VGA em que o clapet não recobre após o trip test — todos indicam falha de componente que compromete a operação do sistema.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para instalação de Válvula de Governo e Alarme (VGA) em SP?",
    body1:
      "A DRD2 instala VGA com conjunto de trim completo conforme NBR 10897, dimensionamento correto de DN por cálculo hidráulico e integração completa com a central de alarme. Cada instalação é testada com trip test documentado antes da emissão do laudo.",
    body2:
      "Processo completo: dimensionamento, projeto com ART, fornecimento do conjunto, instalação, integração elétrica, trip test e laudo para AVCB — sem terceirizar nenhuma etapa.",
  },
  h2_cobertura: {
    heading: "Instalação de Válvula de Governo e Alarme (VGA) para sprinkler em toda a Grande SP",
    body1:
      "A DRD2 atende edificações de todos os portes em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana. Realizamos a instalação de VGAs para indústrias e galpões da Zona Leste (<a href='/renovacao-avcb-galpao-industrial-tatuape' class='text-red-400 font-bold hover:underline'>Tatuapé</a>, Mooca), Zona Oeste (<a href='/renovacao-avcb-condominio-pinheiros' class='text-red-400 font-bold hover:underline'>Pinheiros</a>), Zona Sul (<a href='/renovacao-avcb-condominio-moema' class='text-red-400 font-bold hover:underline'>Moema</a>) e todo entorno logístico metropolitano.",
    body2:
      "Para edificações fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico da VGA existente pode ser iniciado por videochamada com análise das fotos do conjunto.",
  },
  faqs: [
    {
      question: "Quanto tempo leva a instalação de uma VGA?",
      answer:
        "A instalação física do conjunto de VGA com trim completo leva de 4 a 8 horas para uma única zona, dependendo do DN e do acesso ao local. O processo completo — incluindo enchimento, pressurização, integração com a central de alarme e trip test — pode ser concluído em um único dia de trabalho para sistemas de médio porte.",
    },
    {
      question: "É necessário desligar o sistema de sprinkler para instalar a VGA?",
      answer:
        "Sim. A instalação da VGA requer interrupção do sistema de sprinkler da zona afetada. O planejamento da janela de manutenção deve considerar o risco de deixar a área desprotegida durante a instalação — para edificações críticas (hospitais, hospitais), planejamos a instalação em períodos de menor risco e notificamos o CBPMESP quando necessário.",
    },
    {
      question: "A VGA nova precisa de ART mesmo em substituição da antiga?",
      answer:
        "Sim. Qualquer substituição de VGA que componha o sistema de sprinkler do AVCB exige ART de execução. Se o modelo substituto tiver coeficiente K diferente do original, é necessária também ART de projeto com atualização do cálculo hidráulico.",
    },
    {
      question: "Posso instalar VGA de qualquer fabricante?",
      answer:
        "A VGA deve ser listada e aprovada para uso em sistemas de sprinkler conforme NFPA 13 ou equivalente. No Brasil, equipamentos aprovados pelo INMETRO ou com certificação de laboratório acreditado são referência. O modelo específico deve ser compatível com o DN e o coeficiente K do projeto hidráulico.",
    },
    {
      question: "Qual a vida útil de uma VGA?",
      answer:
        "Não há prazo de substituição obrigatória por tempo, mas a VGA deve ser substituída quando apresentar falha no clapet (vazamento crônico ou não recobre após trip test), corrosão estrutural na carcaça ou componentes do trim irrecuperáveis. O trip test anual é o instrumento de verificação da condição real da válvula.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/projeto-vga-sistema-sprinkler-sp", label: "Projeto de VGA" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de VGA" },
    { href: "/teste-comissionamento-vga-sp", label: "Teste e Comissionamento de VGA" },
    { href: "/adequacao-vga-avcb-sp", label: "Adequação de VGA para AVCB" },
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
  ],
  ctaFinal: {
    heading: "INSTALAÇÃO DE VÁLVULA DE GOVERNO E ALARME (VGA) EM SP — CONJUNTO COMPLETO + TRIP TEST + ART CREA-SP",
    body: "Diagnóstico técnico gratuito. Dimensionamento correto de DN. Instalação com todos os componentes de trim obrigatórios.",
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
