import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/alarme-incendio-supermercado-avcb-sp",
  meta: {
    title: "Alarme de Incêndio para Supermercado em SP — IT 18/19 por Setor | DRD2 Engenharia",
    description: "A DRD2 projeta e instala alarme de incêndio para supermercado em SP. Detectores específicos por setor: temperatura para padaria, câmara fria, depósito. Central endereçável e ART para AVCB. Diagnóstico gratuito.",
  },
  eyebrow: "IT 18/19 — Supermercados e Hipermercados em SP",
  h1Line1: "Alarme de Incêndio para Supermercado",
  h1Line2: "em São Paulo — Padaria, Câmara Fria e Depósito",
  heroBg: "/images/bg-supermercado.jpg",
  introP1:
    "Supermercados têm o desafio mais complexo na seleção de detectores de incêndio: a padaria com forno e fritadeiras gera fumaça de cozimento que dispara alarmes falsos em detectores ópticos; a câmara de congelados a -18°C inativa detectores iônicos convencionais; o depósito de recebimento com pé-direito alto exige detectores com sensibilidade para grandes volumes; e a área de vendas com público em movimento exige anunciador de voz calibrado para evacuação sem pânico. A DRD2 projeta e instala alarme de incêndio para supermercado em SP conforme IT 18/19.",
  introP2:
    "Processo completo: seleção de detector correto por setor, central endereçável com identificação por ponto, integração com sistema de sprinkler e hidrante, anunciador de voz para evacuação escalonada e laudo com ART para AVCB. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Alarme de Incêndio", href: "/alarmes" },
    { label: "Alarme para Supermercado" },
  ],
  occupationType: "comercial",
  h2_principal: {
    heading: "Por que supermercados precisam de detectores diferentes por setor?",
    body: "A IT 18/19 exige que o tipo de detector seja selecionado conforme as características do ambiente — temperatura, umidade, presença de vapores e pé-direito. A padaria de supermercado tem temperatura de até 45°C próxima aos fornos e gordura em suspensão das fritadeiras: um detector óptico convencional entra em alarme falso a cada ciclo de fritura. O detector correto para padaria é o de temperatura fixa (termostático) com temperatura de ativação calibrada acima da temperatura máxima do ambiente de operação.",
    body2:
      "A câmara de congelados apresenta o desafio oposto: temperatura de -18°C a -25°C inativa detectores com componentes não projetados para baixas temperaturas. O detector para câmara de congelados deve ser do tipo homologado para operação abaixo de zero — com invólucro e eletrônica certificados para essa faixa. O depósito de recebimento com pé-direito acima de 6 m exige detectores de teto posicionados para cobertura máxima conforme IT 18/19, com atenção ao ponto cego criado pela altura elevada e pela circulação de ar de ventilação industrial.",
  },
  h2_riscos: {
    heading: "O que reprova o alarme de incêndio de supermercado na vistoria do CBPMESP",
    intro:
      "Esses 6 problemas são os mais frequentes em supermercados autuados pelo Corpo de Bombeiros em São Paulo.",
    itens: [
      {
        titulo: "Detector óptico na padaria — alarmes falsos garantidos",
        desc: "Detectores ópticos (fumaça) na padaria ativam com fumaça de fritura, farinha em suspensão e vapor do forno. O resultado são alarmes falsos frequentes que levam a equipe a desligar o sistema — deixando o supermercado sem proteção. A IT 18/19 exige seleção de detector compatível com o ambiente.",
      },
      {
        titulo: "Detector convencional em câmara de congelados",
        desc: "Detectores não homologados para baixas temperaturas param de funcionar a -10°C. A câmara de congelados de supermercado opera entre -18°C e -25°C — faixa que inativa a eletrônica de detectores convencionais. A IT 18/19 exige dispositivos certificados para a temperatura real do ambiente.",
      },
      {
        titulo: "Central não endereçável — incêndio sem localização",
        desc: "Supermercados com central convencional (por zona) identificam apenas qual zona disparou — não qual ponto específico. Em um supermercado com 2.000 m² de área de vendas, a equipe leva até 4 minutos para localizar a origem. A central endereçável identifica o detector exato em segundos.",
      },
      {
        titulo: "Depósito sem cobertura de detector no pé-direito alto",
        desc: "Depósitos com pé-direito acima de 6 m têm zona morta de detecção quando os detectores são posicionados apenas no teto sem análise do cone de cobertura. A IT 18/19 exige cálculo de espaçamento máximo para a altura do pé-direito.",
      },
      {
        titulo: "Alarme sem anunciador de voz para o público",
        desc: "Sirenes de alta intensidade em supermercado lotado causam pânico e podem gerar mais vítimas do que o incêndio. A IT 18/19 exige anunciador de voz com mensagem gravada para evacuação ordeira — especialmente em ambientes com crianças e idosos.",
      },
      {
        titulo: "Área de produtos de limpeza sem detector de fumaça especial",
        desc: "O corredor de produtos químicos de limpeza (alvejantes, desinfetantes, solventes) tem vapores que podem causar falso alarme em detectores iônicos. Esse setor exige detector óptico de feixe ou detector fotovoltaico calibrado para o ambiente.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o alarme de incêndio para supermercado",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Seleção de detector por setor",
        desc: "Mapeamento de todos os setores com definição do tipo de detector: termostático para padaria e açougue, baixa temperatura para câmara fria e congelados, óptico para área de vendas e escritório, multissensorial para corredores de produtos químicos.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Projeto de central endereçável",
        desc: "Central endereçável com identificação individual por detector. Cada ponto é registrado no memorial com setor, localização e tipo — permitindo resposta imediata da equipe sem varredura do supermercado.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Integração com sprinkler e hidrante",
        desc: "O sistema de alarme é integrado ao sistema de sprinkler (sinal de disparo registrado na central) e ao sistema de hidrante (acionamento de bomba via pressostato com sinalização na central). Conformidade com IT 18/19 e IT 22/25.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Anunciador de voz e evacuação escalonada",
        desc: "Instalação de anunciador de voz com mensagem gravada de evacuação por setor. Em supermercados com múltiplos andares ou grande área de vendas, a evacuação é escalonada por zona para evitar convergência de público nas saídas.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Teste de todos os detectores por setor",
        desc: "Teste individual de cada detector por setor. Na padaria, teste com gerador de fumaça para confirmar ausência de falso alarme. Na câmara fria, verificação de funcionamento com temperatura real do setor.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo técnico com ART para AVCB",
        desc: "ART de projeto e ART de execução CREA-SP. Laudo com memorial de cálculo, mapa de detectores por setor e documentação pronta para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 18/19 exige para alarme em supermercados",
    body1:
      "Supermercados são Grupo C-2 na IT 18/19. O projeto de alarme deve cobrir 100% da área — incluindo câmaras frigoríficas, depósito de recebimento, padaria e área de serviço — com tipo de detector adequado para cada ambiente.",
    alerta:
      "Reforma que instale nova câmara fria, amplie a padaria ou crie novo setor de produtos químicos exige atualização do projeto de alarme com nova ART antes do início das obras.",
    itens: [
      {
        titulo: "Detector termostático para padaria",
        desc: "A padaria com forno a gás e fritadeiras industriais é o setor de maior risco de incêndio e o de maior risco de falso alarme. O detector termostático responde ao aumento anormal de temperatura — não à fumaça de cozimento — eliminando os falsos alarmes sem comprometer a detecção.",
      },
      {
        titulo: "Detector homologado para câmara de congelados",
        desc: "Câmaras de congelados operam entre -18°C e -25°C. A IT 18/19 exige detector homologado para essa faixa de temperatura, com invólucro e bateria de backup certificados. Detector convencional nessa temperatura é Comunique-se automático na vistoria.",
      },
      {
        titulo: "Anunciador de voz obrigatório para público",
        desc: "Supermercados com ocupação pública devem ter sistema de anunciador de voz — não apenas sirenes. A mensagem de evacuação deve ser gravada em português com instrução clara de saída por rota específica por setor.",
      },
      {
        titulo: "Manutenção semestral documentada por detector",
        desc: "A IT 18/19 exige manutenção semestral com teste individual de cada detector e registro em relatório. Supermercados com grande número de detectores que realizam apenas teste de central sem verificar cada ponto estão em não-conformidade.",
      },
    ],
    closing:
      "A DRD2 realiza levantamento técnico gratuito do supermercado, seleciona o detector correto para cada setor e apresenta proposta de adequação com laudo aceito pelo CBPMESP na primeira vistoria.",
  },
  h2_quando: {
    heading: "Quando revisar o alarme de incêndio do supermercado?",
    body1:
      "A manutenção semestral é obrigatória. O laudo com ART deve ser emitido anualmente para renovação do AVCB. Revisão imediata após instalação de nova câmara fria, ampliação da padaria, reforma do layout do depósito ou troca da central.",
    body2:
      "Situações urgentes: Comunique-se do CBPMESP sobre o sistema de alarme, alarmes falsos frequentes na padaria indicando detector errado para o setor, falha de comunicação entre detector da câmara fria e a central, ou qualquer reforma que altere a distância entre detectores.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o alarme de incêndio do seu supermercado?",
    body1:
      "A DRD2 tem experiência em sistemas de alarme para supermercados, hipermercados e atacarejos em São Paulo. Cada projeto seleciona o detector correto por setor — eliminando alarmes falsos na padaria e garantindo detecção nas câmaras frias.",
    body2:
      "Processo completo sem terceiros: levantamento, projeto, instalação, testes e laudo. A instalação é executada fora do horário de pico — sem interrupção das operações do supermercado.",
  },
  h2_cobertura: {
    heading: "Alarme de incêndio para supermercado em toda a Grande SP",
    body1:
      "A DRD2 atende supermercados, hipermercados e atacarejos em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para supermercados fora da Grande SP, realizamos visita técnica com agenda específica. Diagnóstico inicial por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Por que o alarme da padaria do supermercado dispara com frequência?",
      answer:
        "O alarme falso na padaria é causado pelo uso de detector de fumaça óptico em ambiente com fumaça de cozimento — fritura, vapor de forno e farinha em suspensão. O detector correto para padaria é o termostático (de temperatura), que ignora a fumaça de cozimento e responde apenas ao calor anormal de um incêndio real.",
    },
    {
      question: "Que tipo de detector usar na câmara de congelados do supermercado?",
      answer:
        "Detector homologado para baixas temperaturas, certificado para operar entre -18°C e -25°C. Detectores convencionais param de funcionar abaixo de -10°C — o que significa que a câmara de congelados fica sem proteção sem que ninguém perceba. A IT 18/19 exige o tipo correto de detector para cada temperatura de ambiente.",
    },
    {
      question: "Supermercado precisa de anunciador de voz no sistema de alarme?",
      answer:
        "Sim. A IT 18/19 exige anunciador de voz em edificações com ocupação pública. Em supermercados, a sirene convencional pode causar pânico — especialmente em ambientes com crianças e idosos. O anunciador de voz com mensagem gravada orienta a evacuação de forma ordeira por setor.",
    },
    {
      question: "O sistema de alarme do supermercado precisa ser integrado ao sprinkler?",
      answer:
        "Sim. A IT 18/19 e a IT 23/25 exigem integração entre o sistema de alarme e o sistema de sprinkler — o acionamento de um bico deve ser registrado na central de alarme e pode acionar a bomba de sprinkler. Sistemas independentes sem comunicação são não-conformidade perante as duas normas.",
    },
    {
      question: "Com que frequência o alarme de incêndio do supermercado deve ser revisado?",
      answer:
        "Manutenção semestral obrigatória com teste individual de cada detector. O laudo com ART deve ser emitido anualmente para renovação do AVCB. Na câmara de congelados, recomendamos verificação trimestral da integridade dos detectores de baixa temperatura.",
    },
  ],
  linksInternos: [
    { href: "/alarmes", label: "Alarme de Incêndio em SP" },
    { href: "/hidrante-supermercado-avcb-sp", label: "Hidrante para Supermercado" },
    { href: "/sprinkler-supermercado-avcb-sp", label: "Sprinkler para Supermercado" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "ALARME PARA SUPERMERCADO — PADARIA + CÂMARA FRIA + DEPÓSITO",
    body: "Diagnóstico técnico gratuito. Detector correto por setor. Laudo para AVCB na primeira vistoria.",
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
