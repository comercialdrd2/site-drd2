import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/valvula-retencao-sprinkler-sp",
  meta: {
    title: "Válvula de Retenção para Sprinkler em SP — Clapet e Verificação | DRD2 Engenharia",
    description: "Entenda a função da válvula de retenção (clapet) no sistema de sprinkler. Como funciona, quando substituir, diferença entre válvula de retenção simples e Válvula de Governo e Alarme (VGA), e o que o CBPMESP verifica.",
  },
  eyebrow: "Válvula de Retenção em Sistemas de Sprinkler — Clapet, Válvula de Governo e Alarme (VGA) e Verificação",
  h1Line1: "Válvula de Retenção para Sprinkler",
  h1Line2: "em SP — Clapet, Função e Verificação pelo CBPMESP",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "A válvula de retenção (também chamada de clapet ou check valve) é o componente interno da VGA que impede o refluxo de água do sistema de sprinkler para a rede de alimentação. Em sistemas wet pipe, essa função é exercida pelo clapet interno da VGA — não por uma válvula de retenção separada. O clapet é o coração da VGA: ele impede que a água do sistema retorne para a rede pública, detecta a queda de pressão causada pela abertura de um bico e aciona automaticamente a linha de alarme.",
  introP2:
    "Em sistemas de sprinkler, o termo 'válvula de retenção' frequentemente causa confusão porque existem dois usos distintos: o clapet interno da VGA (que faz a função de retenção e alarme) e válvulas de retenção simples instaladas em pontos específicos da rede (para evitar refluxo em sistemas de múltiplas zonas). A DRD2 especifica, instala e substitui válvulas de retenção em sistemas de sprinkler em SP com diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Válvula de Retenção para Sprinkler" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "Clapet da Válvula de Governo e Alarme (VGA) vs. válvula de retenção simples — quando usar cada um?",
    body: "O clapet da VGA é uma válvula de retenção de alarme: além de impedir o refluxo, ele tem câmara de alarme com orifício para a linha de alarme. Quando a pressão do sistema cai (abertura de bico), o clapet levanta e permite que a pressão passe para a linha de alarme, acionando a campainha e o pressostato. Uma válvula de retenção simples impede apenas o refluxo — sem câmara de alarme, sem linha de alarme, sem acionamento de campainha.",
    body2:
      "Válvulas de retenção simples (swing check ou lift check) são usadas em pontos específicos da rede de sprinkler que não são pontos de controle principal: na saída de cada zona quando múltiplas zonas compartilham a mesma alimentação (para evitar que uma zona pressurizada alimente outra que esteja em manutenção), na linha de alimentação da bomba jockey e na conexão do barrilete de incêndio. Esses pontos não precisam de alarme — apenas de retenção de fluxo.",
  },
  h2_riscos: {
    heading: "Quando o clapet da Válvula de Governo e Alarme (VGA) precisa ser substituído",
    intro:
      "O clapet é o componente da Válvula de Governo e Alarme (VGA) com maior probabilidade de falha — e a maioria das falhas é detectável somente pelo trip test regular.",
    itens: [
      {
        titulo: "Micro-vazamento crônico — gota contínua na saída da campainha",
        desc: "O sinal mais comum de clapet deteriorado é a gota constante de água na saída da campainha hidráulica. Isso indica que o clapet não assenta completamente — um micro-fluxo passa continuamente pelo orifício de alarme e percola pela linha de alarme até a campainha. A jockey pump aciona repetidamente para compensar a queda de pressão.",
      },
      {
        titulo: "Clapet que não recobre após o trip test",
        desc: "Após fechar a torneira de teste, o clapet deve recobrir completamente em até 5 minutos. Se a campainha continua soando depois desse tempo, o clapet não retornou à posição de vedação. Causa mais comum: disco de borracha deformado permanentemente, sem elasticidade para retornar ao assento.",
      },
      {
        titulo: "Clapet preso na posição aberta — falso alarme permanente",
        desc: "O clapet preso aberto mantém a linha de alarme pressurizada constantemente — a campainha soa sem incêndio e o pressostato tem sinal permanente na central. Isso pode ocorrer por enrijecimento do disco de borracha, por depósito de calcário no assento ou por deformação do eixo de rotação do clapet.",
      },
      {
        titulo: "Clapet preso na posição fechada — sistema não detecta abertura de bico",
        desc: "O clapet preso fechado cria a falha mais perigosa: em incêndio real, um bico abre e a água flui pelo sistema, mas a linha de alarme não recebe pressão — a campainha e o pressostato não acionam. O fogo é combatido pela água, mas sem alarme de aviso. Somente detectado pelo trip test.",
      },
      {
        titulo: "Assento corroído — vedação impossível mesmo com disco novo",
        desc: "O disco de borracha do clapet veda sobre o assento de latão. Se o assento estiver corroído por pitting ou por incrustação mineral, a substituição do disco sozinha não resolve — o conjunto clapet+assento precisa ser substituído, ou toda a VGA se o assento for parte integral do corpo.",
      },
      {
        titulo: "Desgaste por ciclos excessivos — clapet que operou muitas vezes",
        desc: "Em sistemas com micro-vazamentos frequentes ou com pressão instável, o clapet cicla repetidamente — abre e fecha muitas vezes ao dia por variações de pressão. O desgaste por ciclos excessivos deteriora o disco muito mais rápido do que em sistemas estáveis. O histórico de acionamento da jockey pump é o indicador mais confiável de ciclos excessivos.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 substitui o clapet da Válvula de Governo e Alarme (VGA)",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Diagnóstico do modo de falha",
        desc: "Verificação da gota na saída da campainha (micro-vazamento), leitura dos manômetros (diferença de pressão entre alimentação e sistema), e trip test de diagnóstico para avaliar o comportamento do clapet durante o fluxo e o recampiamento.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Verificação do assento",
        desc: "Antes de substituir apenas o disco, verifica-se o estado do assento de latão. Se o assento tiver corrosão por pitting ou incrustação que impeça vedação adequada, a substituição do disco não resolve — o conjunto deve ser avaliado para substituição total.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Drenagem da zona",
        desc: "A substituição do clapet exige drenagem completa da zona de sprinkler. Fechamento da válvula OS&Y, drenagem pelo dreno principal de 2\", verificação de escoamento do dreno até eliminação do fluxo residual.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Abertura da tampa e substituição do clapet",
        desc: "Remoção da tampa da VGA conforme especificação do fabricante (parafusos radiais ou tampa flangeada). Substituição do conjunto clapet: disco de borracha, retentor e, se necessário, o assento. Instalação do novo conjunto com as juntas novas.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Preenchimento e pressurização",
        desc: "Fechamento da tampa com torque especificado. Abertura gradual da OS&Y, preenchimento da zona com purga de ar, pressurização e verificação de estanqueidade na tampa e em todos os pontos do trim.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Trip test de verificação e laudo",
        desc: "Trip test completo após a substituição: verificação de que o clapet abre no fluxo correto, campainha responde no tempo, pressostato envia sinal e clapet recobre completamente após fechar a torneira. Laudo com resultado do trip test e ART de execução.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Especificação correta do clapet — disco, material e compatibilidade",
    body1:
      "O clapet de substituição deve ser especificado conforme o fabricante e o modelo da VGA existente. DNs iguais de fabricantes diferentes podem ter geometrias de disco e assento incompatíveis — instalar disco de outro fabricante pode resultar em vedação inadequada ou em falha de funcionamento.",
    alerta:
      "Discos de borracha de baixa qualidade deterioram em 2 a 3 anos em sistemas com água com alta concentração de cloro (cloração residual acima de 0,5 mg/L). O material correto é EPDM ou borracha nitrílica conforme a composição da água. Instalar disco genérico sem verificar a composição da água encurta drasticamente a vida útil.",
    itens: [
      {
        titulo: "EPDM vs. borracha nitrílica — quando usar cada material",
        desc: "EPDM (etileno propileno dieno) resiste melhor ao ozônio, UV e cloro residual — adequado para água de abastecimento público com tratamento padrão. Borracha nitrílica (NBR) resiste melhor a óleos e solventes — para sistemas com água misturada com anticongelante (glicol) em câmaras de resfriamento.",
      },
      {
        titulo: "Compatibilidade de assento — latão vs. aço inox",
        desc: "Assentos de latão são padrão em VGAs comuns. Em ambientes corrosivos (cloretos altos, pH baixo), assentos de aço inox AISI 316 têm vida útil muito maior. A substituição do assento exige verificação de compatibilidade com o corpo da VGA.",
      },
      {
        titulo: "Torque de fechamento da tampa — especificação do fabricante",
        desc: "A tampa da VGA deve ser fechada com o torque especificado pelo fabricante. Torque insuficiente causa micro-vazamento na junta da tampa. Torque excessivo pode travar o mecanismo de abertura do clapet. Sempre usar torquímetro na substituição.",
      },
      {
        titulo: "Kit completo vs. disco isolado — quando usar cada opção",
        desc: "Para VGAs com menos de 10 anos, a substituição do disco isolado é geralmente suficiente se o assento estiver em bom estado. Para VGAs com mais de 15 anos ou com assento corroído, o kit completo (disco + assento + juntas) garante vida útil adequada sem necessidade de nova intervenção em curto prazo.",
      },
    ],
    closing:
      "A DRD2 especifica e substitui clapet de VGA com verificação de compatibilidade de material e trip test de confirmação — garantindo vedação adequada e aprovação na próxima vistoria do CBPMESP.",
  },
  h2_quando: {
    heading: "Quando substituir preventivamente vs. corretivamente",
    body1:
      "Substituição preventiva: clapet com mais de 15 a 20 anos em bom estado pode ser substituído preventivamente na próxima manutenção programada — evita falha não planejada e a interrupção emergencial do sistema. O trip test anual é o indicador: se o resultado está dentro dos critérios mas com tendência de piora (tempo de recampiamento crescente, micro-vazamento intermitente), a substituição preventiva é mais econômica.",
    body2:
      "Substituição corretiva imediata: micro-vazamento crônico (jockey pump acionando mais de 4 vezes por hora), campainha soando sem incêndio, ou clapet que não recobriu no trip test. Esses casos exigem intervenção imediata — o sistema não está em condição operacional completa.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para substituição de clapet em SP?",
    body1:
      "A DRD2 substitui clapet com especificação correta de material conforme a composição da água local e o fabricante da VGA existente — não apenas fornece o componente, mas garante compatibilidade e vedação adequada.",
    body2:
      "Processo completo: diagnóstico do modo de falha, especificação do kit correto, substituição com drenagem controlada, trip test de verificação e laudo de execução com ART CREA-SP — tudo em uma única mobilização quando possível.",
  },
  h2_cobertura: {
    heading: "Substituição de clapet e manutenção de Válvula de Governo e Alarme (VGA) em toda a Grande SP",
    body1:
      "A DRD2 realiza substituição de clapet e manutenção de VGA em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para diagnóstico de micro-vazamento em VGA existente, o diagnóstico inicial pode ser feito com o relatório de acionamento da jockey pump e fotos do conjunto. A visita técnica presencial para o trip test de diagnóstico confirma o modo de falha antes da especificação da intervenção.",
  },
  faqs: [
    {
      question: "A gota na saída da campainha é sempre sinal de clapet deteriorado?",
      answer:
        "Não necessariamente. A gota pode vir do micro-vazamento do clapet, mas também pode ser condensação na linha de alarme (em sistemas instalados em ambientes frios) ou gotejamento da purga de ar do sistema. Para distinguir: se a gota é contínua e a jockey pump está acionando frequentemente, é micro-vazamento do clapet. Se é intermitente e aparece só em dias frios, pode ser condensação. O trip test de diagnóstico distingue os dois casos.",
    },
    {
      question: "Com que frequência o disco do clapet deve ser substituído?",
      answer:
        "Não há prazo de substituição obrigatória por tempo — a substituição é indicada quando o clapet apresenta falha no trip test (micro-vazamento crônico, não recobre, preso aberto ou fechado). Com água de boa qualidade e pH controlado, discos de EPDM de boa procedência duram de 10 a 20 anos. Com água agressiva (pH baixo, alto cloro), o desgaste pode ocorrer em 3 a 5 anos.",
    },
    {
      question: "Posso substituir apenas o disco sem abrir a VGA?",
      answer:
        "Não — o disco (clapet) está dentro do corpo da válvula. Para substituir, é necessário drenar a zona, abrir a tampa da VGA (pela cobertura superior ou pela flangeada lateral, conforme o modelo) e ter acesso ao mecanismo interno. Não existe substituição de clapet sem abertura da VGA.",
    },
    {
      question: "Qual a diferença entre clapet e disco?",
      answer:
        "No contexto da VGA, clapet e disco são frequentemente usados como sinônimos — ambos se referem ao elemento de vedação que impede o refluxo e controla o acesso à câmara de alarme. Tecnicamente, o clapet é o conjunto completo (disco + eixo + retentor), enquanto o disco é apenas o elemento de borracha que veda sobre o assento. Na prática, quando se fala em 'substituição de clapet', frequentemente se refere à substituição do conjunto.",
    },
    {
      question: "A válvula de retenção na entrada do reservatório de incêndio é a mesma que o clapet da VGA?",
      answer:
        "Não — são componentes diferentes com funções diferentes. A válvula de retenção na entrada do reservatório (ou na sucção da bomba) é uma check valve simples, sem câmara de alarme, que apenas impede o refluxo de água do sistema para o reservatório quando a bomba para. O clapet da VGA tem câmara de alarme integrada e é o ponto de controle e sinalização do sistema de sprinkler.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/o-que-e-valvula-governo-alarme", label: "O que é VGA?" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de VGA" },
    { href: "/teste-comissionamento-vga-sp", label: "Trip Test de VGA" },
    { href: "/adequacao-vga-avcb-sp", label: "Adequação de VGA para AVCB" },
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
  ],
  ctaFinal: {
    heading: "DIAGNÓSTICO DE CLAPET E MANUTENÇÃO DE VÁLVULA DE GOVERNO E ALARME (VGA) EM SP — TRIP TEST + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito do micro-vazamento. Substituição de clapet com trip test de verificação e laudo CREA-SP.",
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
