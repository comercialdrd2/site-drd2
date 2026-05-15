import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/alarme-incendio-centro-distribuicao-sp",
  meta: {
    title: "Sistema de Alarme de Incêndio para Centro de Distribuição em SP — IT 18/19 | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sistemas de alarme de incêndio para centro de distribuição em SP. Detecção em rack, doca e escritório. IT 18/19, VESDA e laudo para AVCB. Diagnóstico gratuito.",
  },
  eyebrow: "IT 18/19 — Centros de Distribuição e Operadores Logísticos em SP",
  h1Line1: "Sistema de Alarme de Incêndio para Centro de Distribuição",
  h1Line2: "em São Paulo — IT 18/19, VESDA e Doca",
  heroBg: "/images/bg-galpao.jpg",
  introP1:
    "Centros de distribuição têm um desafio de detecção que escritórios não enfrentam: pé-direito de 12 a 18 m com rack de múltiplos andares — onde o calor e a fumaça sobem lentamente até o detector de teto enquanto o incêndio já destruiu toda uma coluna do rack. Detectores convencionais de teto respondem tarde demais para essa tipologia. A DRD2 projeta e instala sistemas de alarme de incêndio para CD em SP com tecnologia adequada para o pé-direito alto, conforme IT 18/19, com ART CREA-SP e laudo para AVCB.",
  introP2:
    "Processo completo: análise de pé-direito e tipologia do rack, projeto com detecção no nível correto (teto, em-rack ou VESDA), integração com sprinkler e controle de fumaça e laudo para AVCB. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Alarme para Centro de Distribuição" },
  ],
  occupationType: "galpão industrial",
  h2_principal: {
    heading: "Por que detectores convencionais de teto falham em CDs com pé-direito alto?",
    body: "A física do incêndio em rack alto é diferente de um escritório. A fumaça quente sobe em pluma e, ao chegar ao teto de 15 m de altura, já está diluída pelo ar frio dos corredores do rack — às vezes abaixo da concentração necessária para ativar detectores ópticos convencionais. Enquanto isso, o incêndio já consumiu 2 a 3 paletes de produto inflamável. A IT 18/19 reconhece esse problema e permite sistemas de detecção por amostragem de ar (VESDA — Very Early Smoke Detection Apparatus) para ambientes com pé-direito acima de 10 m.",
    body2:
      "O VESDA captura amostras de ar através de uma rede de tubos ao longo do rack e analisa a concentração de partículas de fumaça no laboratório central — detectando o incêndio em fase pré-combustão, muito antes que a fumaça alcance o detector de teto. Para CDs com produtos de alto valor ou logística de frio (câmaras frias), o VESDA é a solução que reduz o tempo de resposta de minutos para segundos. A DRD2 avalia o pé-direito e o portfólio do CD para recomendar a tecnologia correta.",
  },
  h2_riscos: {
    heading: "O que reprova o sistema de alarme de CD na vistoria do CBPMESP",
    intro:
      "Esses 6 problemas são os mais frequentes em centros de distribuição autuados pelo Corpo de Bombeiros em São Paulo.",
    itens: [
      {
        titulo: "Detectores de teto em pé-direito acima de 10 m",
        desc: "A IT 18/19 limita a altura de instalação de detectores convencionais. Em CDs com pé-direito acima de 10 m, detectores de teto sem compensação de altura ou VESDA resultam em tempo de resposta inadequado.",
      },
      {
        titulo: "Ausência de detecção na área de doca",
        desc: "Docas de carga/descarga têm abertura frequente para o exterior — o que dispersa fumaça e pode criar condições de falta de detecção. A norma exige cobertura da doca com detectores adequados para o ambiente semiaberto.",
      },
      {
        titulo: "Câmara fria sem detector específico",
        desc: "Câmaras frias abaixo de 0°C requerem detectores de fumaça aprovados para baixa temperatura. Detectores padrão em câmaras frias perdem sensibilidade e podem gerar alarmes falsos por condensação.",
      },
      {
        titulo: "Central sem supervisão 24h em CD com operação noturna",
        desc: "CDs com operação noturna precisam de operador treinado monitorando a central 24h — não apenas câmeras de segurança. A IT 18/19 é explícita nesse requisito para edificações com risco elevado e operação contínua.",
      },
      {
        titulo: "Integração inexistente com o sistema de sprinkler",
        desc: "A IT 18/19 exige que o alarme de incêndio seja integrado ao sinal de fluxo do sprinkler. Quando um bico aciona, a central deve indicar o setor. CDs sem essa integração têm sistema de alarme parcialmente inoperante.",
      },
      {
        titulo: "Baterias sem autonomia para CDs de grande porte",
        desc: "A IT 18/19 exige 24h em standby e 30 min em alarme. CDs grandes têm alta quantidade de dispositivos — baterias subdimensionadas perdem a autonomia mínima exigida antes do vencimento programado.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o sistema de alarme para centro de distribuição",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Análise de pé-direito e portfólio",
        desc: "Medição do pé-direito por setor e análise do portfólio armazenado. Definimos a tecnologia de detecção correta: detectores convencionais, detectores de feixe (beam) ou VESDA para cada área.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Projeto de detecção por camada",
        desc: "Em racks altos, projeto com detectores em múltiplas alturas (nível do corredor e nível do teto) ou VESDA com rede de tubos ao longo do rack para captura de amostra de ar próxima à origem do incêndio.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Detecção específica para doca e câmara fria",
        desc: "Detectores de temperatura para docas semiabertas, detectores de baixa temperatura aprovados para câmaras frias e detectores de feixe para áreas com obstruções físicas que inviabilizam detector pontual.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Integração com sprinkler e controle de fumaça",
        desc: "Integração da central com o sinal de fluxo do sprinkler, com os dampers de fumaça e com o sistema de supervisão do CD. O operador de segurança recebe alertas unificados em um único painel.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Testes completos por setor",
        desc: "Teste individual de cada detector, teste de feixe com filtro de atenuação, simulação de VESDA com gerador de fumaça e teste de integração com sprinkler e controle de fumaça.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo com ART para AVCB",
        desc: "ART de projeto e ART de execução CREA-SP. Laudo técnico com documentação por setor e treinamento do operador de segurança para monitoramento 24h.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 18/19 exige para alarme de incêndio em CD",
    body1:
      "Centros de distribuição são classificados pela IT 18/19 conforme a área e o tipo de produto armazenado. CDs com produtos inflamáveis ou operação contínua têm exigências específicas de tecnologia de detecção e monitoramento.",
    alerta:
      "Ampliação do CD, instalação de câmara fria, nova doca ou mudança de portfólio para produtos inflamáveis exige atualização do projeto de alarme com nova ART.",
    itens: [
      {
        titulo: "VESDA para pé-direito acima de 10 m",
        desc: "A IT 18/19 permite sistemas de detecção por amostragem de ar (VESDA) para edificações com pé-direito acima do limite de detectores pontuais. O VESDA detecta fumaça em fase pré-combustão.",
      },
      {
        titulo: "Detector de feixe (beam) para grandes vãos",
        desc: "Detectores de feixe são aprovados pela IT 18/19 para galpões com grandes vãos onde a instalação de detectores pontuais no espaçamento correto seria impraticável. O feixe cobre até 100 m linear.",
      },
      {
        titulo: "Monitoramento 24h com operador treinado",
        desc: "CDs com operação noturna e risco elevado devem ter operador treinado monitorando a central 24h. O treinamento deve ser documentado e os registros mantidos para auditoria do CBPMESP.",
      },
      {
        titulo: "Integração obrigatória com sprinkler",
        desc: "A IT 18/19 exige integração do sinal de fluxo do sprinkler à central de alarme. Qualquer acionamento de bico deve gerar alerta imediato na central com identificação do setor.",
      },
    ],
    closing:
      "A DRD2 realiza levantamento técnico gratuito do CD, avalia o pé-direito e o portfólio, define a tecnologia correta e apresenta proposta com laudo aceito pelo CBPMESP.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema de alarme do centro de distribuição?",
    body1:
      "A manutenção semestral com teste individual de detectores é obrigatória. O laudo com ART deve ser emitido anualmente para renovação do AVCB. Revisão imediata é necessária após ampliação do CD, instalação de câmara fria, nova doca ou mudança de portfólio.",
    body2:
      "Situações urgentes: Comunique-se do CBPMESP sobre o sistema de alarme, alarme falso frequente na doca, falha de integração com o sprinkler, troca de central ou aumento de pé-direito por reforma.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema de alarme do seu CD?",
    body1:
      "A DRD2 tem experiência em sistemas de alarme para centros de distribuição, operadores logísticos e galpões de e-commerce em São Paulo. Cada projeto analisa o pé-direito e o portfólio antes de especificar a tecnologia de detecção.",
    body2:
      "Processo completo sem terceiros: projeto, instalação, comissionamento, integração com sprinkler e laudo — tudo com a DRD2. Execução planejada para minimizar impacto nas operações do CD.",
  },
  h2_cobertura: {
    heading: "Sistemas de alarme para CD em toda a Grande SP",
    body1:
      "A DRD2 atende centros de distribuição em toda a Grande São Paulo: Guarulhos, Cajamar, Barueri, Jandira, ABC, Campinas, Embu e municípios ao longo das rodovias Anhanguera, Bandeirantes, Castelo Branco e Dutra.",
    body2:
      "Para CDs fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial pode ser feito por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Detectores de teto convencionais funcionam em CDs com pé-direito alto?",
      answer:
        "Para pé-direito acima de 10 m, detectores pontuais convencionais de teto têm desempenho reduzido — a fumaça diluída pelo ar frio pode não atingir a concentração necessária para ativação. A IT 18/19 permite VESDA e detectores de feixe para esses ambientes.",
    },
    {
      question: "O que é o sistema VESDA e quando é indicado para CDs?",
      answer:
        "VESDA (Very Early Smoke Detection Apparatus) é um sistema de detecção por amostragem de ar que captura amostras através de tubos ao longo do rack e detecta partículas de fumaça antes da combustão visível. É indicado para CDs com pé-direito acima de 10 m, câmaras frias e produtos de alto valor.",
    },
    {
      question: "A câmara fria do CD precisa de detector especial?",
      answer:
        "Sim. Câmaras frias abaixo de 0°C requerem detectores aprovados para baixa temperatura. Detectores convencionais em câmaras frias podem gerar alarmes falsos por condensação ou perder sensibilidade pela temperatura, comprometendo a detecção real.",
    },
    {
      question: "O sistema de alarme do CD deve ser integrado ao sprinkler?",
      answer:
        "Sim. A IT 18/19 exige que o sinal de fluxo do sistema de sprinkler seja integrado à central de alarme de incêndio. Qualquer acionamento de bico gera alerta imediato na central com identificação do setor — permitindo resposta rápida antes que a água cause dano patrimonial.",
    },
    {
      question: "CD que opera 24h precisa de monitoramento noturno da central de alarme?",
      answer:
        "Sim. CDs com operação noturna e risco elevado devem ter operador treinado monitorando a central 24h. A IT 18/19 é explícita nesse requisito. O treinamento deve ser documentado com registros disponíveis para o CBPMESP.",
    },
  ],
  linksInternos: [
    { href: "/hidrante-centro-distribuicao-sp", label: "Hidrante para Centro de Distribuição" },
    { href: "/sprinkler-centro-distribuicao-sp", label: "Sprinkler para Centro de Distribuição" },
    { href: "/sistema-de-sprinkler-para-industria-sao-paulo", label: "Sprinkler para Indústria" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "ALARME PARA CD — VESDA + DETECÇÃO EM RACK + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. Tecnologia correta para o pé-direito do seu CD. Conforme IT 18/19.",
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
