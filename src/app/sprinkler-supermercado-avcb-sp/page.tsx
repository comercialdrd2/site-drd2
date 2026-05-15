import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/sprinkler-supermercado-avcb-sp",
  meta: {
    title: "Sistema de Sprinkler para Supermercado em SP — IT 23/25 por Setor | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sprinkler para supermercado em SP. Dry pipe para câmara de congelados, temperatura calibrada para padaria e Risco Ordinário G2 para depósito. IT 23/25. Diagnóstico gratuito.",
  },
  eyebrow: "IT 23/25 e NBR 10897 — Supermercados e Hipermercados em SP",
  h1Line1: "Sistema de Sprinkler para Supermercado",
  h1Line2: "em São Paulo — Câmara Fria, Padaria e Depósito",
  heroBg: "/images/bg-supermercado.jpg",
  introP1:
    "Supermercados têm o conjunto de ambientes mais heterogêneo para projeto de sprinkler: a câmara de congelados a -18°C exige sistema dry pipe (tubulação seca) porque a água congela na rede antes de chegar ao bico; a câmara de frios positiva (+2°C a +8°C) exige sistema wet pipe com anticongelante ou laço de glicol; a padaria com forno a 280°C exige bicos de temperatura de ativação calibrada para não disparar com o calor normal do forno; e o depósito de recebimento com paletes empilhados exige Risco Ordinário G2 — bem acima do Risco Leve da área de vendas. A DRD2 projeta e instala sprinkler para supermercado em SP conforme IT 23/25 e NBR 10897.",
  introP2:
    "Processo completo: classificação de risco por setor, sistema correto para cada temperatura de ambiente, bico com ativação calibrada para padaria, instalação setorizada sem interrupção das operações e laudo com ART para AVCB. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Sprinkler", href: "/sprinklers" },
    { label: "Sprinkler para Supermercado" },
  ],
  occupationType: "comercial",
  h2_principal: {
    heading: "Por que supermercados precisam de sistemas de sprinkler diferentes por setor?",
    body: "A IT 23/25 é explícita: o tipo de sistema e a temperatura de ativação do bico devem ser compatíveis com as condições físicas e o risco de cada ambiente. Um único sistema wet pipe convencional com bicos de 57°C é inadequado para o supermercado inteiro. Na câmara de congelados, a água na tubulação congela antes de chegar ao bico — inativando o sistema no momento em que é necessário. Na padaria, um bico de 57°C ativa com o calor do forno durante a operação normal — causando descarga de água sobre os equipamentos de produção sem incêndio.",
    body2:
      "O depósito de recebimento é o setor mais frequentemente subestimado. Quando está cheio de paletes recebidos no dia — produto empilhado acima de 2 m com embalagens plásticas — a carga de incêndio é equivalente à de um centro de distribuição Risco Ordinário G2, exigindo densidade mínima de 8,1 mm/min sobre 139 m². Um projeto que classifica o depósito como Risco Leve (4,1 mm/min) subdimensiona o sistema para esse setor em até 50%, resultando em falha de controle do incêndio e reprovação na vistoria.",
  },
  h2_riscos: {
    heading: "O que reprova o sistema de sprinkler de supermercado na vistoria do CBPMESP",
    intro:
      "Esses 6 problemas são os mais frequentes em supermercados autuados pelo Corpo de Bombeiros em São Paulo.",
    itens: [
      {
        titulo: "Câmara de congelados com sistema wet pipe",
        desc: "Sistema com tubulação permanentemente com água na câmara de congelados (-18°C a -25°C) congela na rede, bloqueando o fluxo. O correto é dry pipe (tubulação seca com ar pressurizado) ou sistema pré-ação. A IT 23/25 proíbe wet pipe em ambientes abaixo de 0°C.",
      },
      {
        titulo: "Bico de 57°C na padaria — descarga acidental por calor do forno",
        desc: "Fornos industriais de padaria atingem 250°C a 280°C de temperatura de câmara — com temperatura do ar ambiente próxima ao forno de 45°C a 55°C durante operação. Bicos de 57°C próximos ao forno disparam por calor ambiente, causando dano hídrico sem incêndio. O bico correto tem temperatura de ativação de 79°C a 121°C para essa área.",
      },
      {
        titulo: "Depósito classificado como Risco Leve",
        desc: "Depósito de recebimento com produto em palete acima de 1,5 m é Risco Ordinário G2, não Risco Leve. Um projeto com densidade de 4,1 mm/min (Leve) para o depósito tem metade da capacidade necessária para controlar o incêndio nesse setor.",
      },
      {
        titulo: "Câmara de frios positiva sem anticongelante na rede",
        desc: "Câmaras de frios entre 0°C e +4°C têm risco de congelamento na rede durante falhas de temperatura ou paradas de manutenção. Sistema wet pipe sem proteção anticongelante ou laço de glicol está exposto a bloqueio da rede — inativando o sprinkler exatamente quando o risco é maior.",
      },
      {
        titulo: "Gôndolas de embalagem plástica sem análise de carga de incêndio",
        desc: "Corredor de descartáveis, embalagens plásticas e produtos de higiene tem carga de incêndio maior do que o corredor de secos. Sem análise específica, o projeto aplica Risco Leve uniforme — subestimando os corredores de maior risco da área de vendas.",
      },
      {
        titulo: "Bomba sem separação do sistema de hidrante",
        desc: "A IT 23/25 proíbe compartilhamento de bomba entre sistema de sprinkler e sistema de hidrantes. Supermercados com bomba compartilhada estão em não-conformidade com IT 22/25 e IT 23/25 simultaneamente — duplo Comunique-se na vistoria.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o sistema de sprinkler para supermercado",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Classificação de risco por setor",
        desc: "Mapeamento de todos os setores com classificação de risco: área de vendas (Risco Leve, com análise de corredores de maior carga), padaria (Risco Ordinário G1 com temperatura de ativação especial), depósito (Ordinário G2 com produto em palete), câmara de congelados (dry pipe), câmara de frios (wet pipe com proteção anticongelante).",
      },
      {
        numero: "ETAPA 02",
        titulo: "Definição de sistema por temperatura de ambiente",
        desc: "Câmara de congelados: dry pipe com ar pressurizado. Câmara de frios positiva: wet pipe com solução de glicol propilênico na rede. Área de vendas e depósito: wet pipe convencional. Padaria: wet pipe com bicos de temperatura de ativação calibrada.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Seleção de bico por ambiente",
        desc: "Bico de 57°C para área de vendas e escritório. Bico de 79°C a 121°C para padaria conforme temperatura real próxima aos fornos. Bico de resposta rápida (quick response) para câmaras de frios. Bico de alta sensibilidade para corredores de embalagem plástica.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Instalação setorizada sem interromper operação",
        desc: "Execução por setor — câmaras durante janelas de manutenção programadas, padaria fora do horário de produção, área de vendas de madrugada. Nenhum setor fica sem proteção enquanto o outro está em execução.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Testes por sistema e temperatura",
        desc: "Teste hidrostático em toda a rede. Teste de descarga do dry pipe na câmara de congelados (verificação do tempo de descarga até o bico mais desfavorecido). Verificação de pressão no depósito (ponto mais desfavorecido). Teste de acionamento de bomba dedicada.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo técnico com ART para AVCB",
        desc: "ART de projeto e ART de execução CREA-SP. Laudo técnico com memorial de cálculo por setor, tipo de sistema, temperatura de ativação dos bicos e documentação pronta para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 23/25 exige para sprinkler em supermercados",
    body1:
      "Supermercados são Grupo C-2 na IT 23/25. Cada setor deve ser classificado individualmente — câmara de congelados, câmara de frios, padaria, depósito e área de vendas têm exigências distintas de sistema, densidade e tipo de bico.",
    alerta:
      "Instalação de nova câmara de congelados, ampliação da padaria, mudança de layout do depósito ou instalação de rack de armazenagem acima de 1,5 m exige atualização do projeto de sprinkler com nova ART antes do início das obras.",
    itens: [
      {
        titulo: "Câmara de congelados: dry pipe obrigatório",
        desc: "A IT 23/25 proíbe sistema wet pipe em ambientes com temperatura inferior a 0°C. O dry pipe mantém a tubulação pressurizada com ar — a água só entra na rede quando o bico termossensível abre. Tempo máximo de descarga até o bico mais desfavorecido: 60 segundos.",
      },
      {
        titulo: "Padaria: temperatura de ativação calibrada",
        desc: "A IT 23/25 e a NBR 10897 exigem que a temperatura de ativação do bico seja ao menos 30°C acima da temperatura máxima normal do ambiente. Para padaria com forno a 280°C e temperatura de ar próximo ao forno de 45°C a 55°C, a temperatura mínima de ativação é 79°C.",
      },
      {
        titulo: "Depósito: Risco Ordinário G2 com produto em palete",
        desc: "O depósito com produto em palete acima de 1,5 m e embalagens mistas (papelão, plástico) é Risco Ordinário G2. Densidade mínima de 8,1 mm/min sobre 139 m². Bico de resposta padrão (Standard Response) com k=80 mínimo.",
      },
      {
        titulo: "Bomba dedicada separada do sistema de hidrante",
        desc: "A IT 23/25 proíbe compartilhamento de bomba entre sistemas de proteção distintos. Supermercado com bomba única para hidrante e sprinkler está em dupla não-conformidade — Comunique-se para IT 22/25 e IT 23/25 simultaneamente.",
      },
    ],
    closing:
      "A DRD2 realiza levantamento técnico gratuito do supermercado, classifica cada setor corretamente, define o sistema e os bicos adequados por ambiente e apresenta proposta com laudo aceito pelo CBPMESP na primeira vistoria.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema de sprinkler do supermercado?",
    body1:
      "A manutenção semestral é obrigatória. O laudo com ART deve ser emitido anualmente para renovação do AVCB. Revisão imediata após instalação de nova câmara fria ou de congelados, ampliação da padaria, mudança de layout do depósito ou troca de bomba.",
    body2:
      "Situações urgentes: Comunique-se do CBPMESP sobre sprinkler, acionamento acidental de bico na padaria sem incêndio (temperatura de ativação incorreta), queda de pressão no dry pipe da câmara de congelados, ou reforma que altere o layout do depósito de recebimento.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema de sprinkler do seu supermercado?",
    body1:
      "A DRD2 tem experiência em sistemas de sprinkler para supermercados, hipermercados e atacarejos em São Paulo — incluindo câmaras de congelados com dry pipe, padaria com temperatura de ativação calibrada e depósito com classificação Ordinário G2. Cada setor recebe o sistema correto.",
    body2:
      "Processo completo sem terceiros: classificação, projeto, instalação, testes e laudo. A execução é planejada por setor, com janelas de manutenção acordadas com a operação do supermercado para minimizar impacto nas vendas.",
  },
  h2_cobertura: {
    heading: "Sistema de sprinkler para supermercado em toda a Grande SP",
    body1:
      "A DRD2 atende supermercados, hipermercados e atacarejos em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para supermercados fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial pode ser feito por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "A câmara de congelados do supermercado precisa de sistema de sprinkler diferente?",
      answer:
        "Sim. A câmara de congelados (-18°C a -25°C) precisa de sistema dry pipe — tubulação seca pressurizada com ar. A água congela na rede de um sistema wet pipe convencional antes de chegar ao bico, inativando a proteção. A IT 23/25 e a NBR 10897 exigem dry pipe em ambientes abaixo de 0°C.",
    },
    {
      question: "Por que o sprinkler da padaria do supermercado dispara sem incêndio?",
      answer:
        "Bicos com temperatura de ativação de 57°C próximos aos fornos industriais da padaria disparam com o calor normal de operação do forno — temperatura do ar próxima ao forno pode atingir 45°C a 55°C. O bico correto para padaria tem temperatura de ativação de 79°C a 121°C, calibrada para o ambiente específico.",
    },
    {
      question: "O depósito do supermercado precisa de sprinkler mais potente?",
      answer:
        "Sim. Depósito com produto em palete acima de 1,5 m é Risco Ordinário G2 pela IT 23/25 — exige densidade mínima de 8,1 mm/min sobre 139 m². Um projeto com Risco Leve (4,1 mm/min) tem metade da capacidade para controlar o incêndio no depósito cheio de produto recebido.",
    },
    {
      question: "Supermercado precisa de bomba separada para sprinkler e hidrante?",
      answer:
        "Sim. A IT 23/25 exige bomba dedicada para o sistema de sprinkler — independente da bomba do sistema de hidrante. Compartilhar bomba entre os dois sistemas resulta em não-conformidade com IT 22/25 e IT 23/25 simultaneamente.",
    },
    {
      question: "Com que frequência o sistema de sprinkler do supermercado deve ser revisado?",
      answer:
        "Manutenção semestral obrigatória com laudo anual com ART para renovação do AVCB. Para o sistema dry pipe da câmara de congelados, recomendamos verificação trimestral da pressão de ar na rede e do tempo de descarga — componentes críticos para o funcionamento correto em temperatura negativa.",
    },
  ],
  linksInternos: [
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
    { href: "/hidrante-supermercado-avcb-sp", label: "Hidrante para Supermercado" },
    { href: "/alarme-incendio-supermercado-avcb-sp", label: "Alarme de Incêndio para Supermercado" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "SPRINKLER PARA SUPERMERCADO — CÂMARA FRIA + PADARIA + DEPÓSITO",
    body: "Diagnóstico técnico gratuito. Sistema correto por setor. Processo completo conforme IT 23/25 e NBR 10897.",
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
