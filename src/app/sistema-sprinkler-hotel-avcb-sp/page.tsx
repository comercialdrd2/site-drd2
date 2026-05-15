import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/sistema-sprinkler-hotel-avcb-sp",
  meta: {
    title: "Sistema de Sprinkler para Hotel em SP — IT 23/25 por Andar e UH | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sistemas de sprinkler para hotel em SP conforme IT 23/25 e NBR 10897. Bicos decorativos em UH, spa, restaurante interno e ART para AVCB hoteleiro. Diagnóstico gratuito.",
  },
  eyebrow: "IT 23/25 e NBR 10897 — Hotéis, Resorts e Flats em SP",
  h1Line1: "Sistema de Sprinkler para Hotel",
  h1Line2: "em São Paulo — IT 23/25, UH e Áreas Especiais",
  heroBg: "/images/blog/blog_hero_casa_repouso_avcb.webp",
  introP1:
    "Hotéis têm ambientes com sprinkler exigidos em contextos radicalmente diferentes: quartos com forro rebaixado e decoração que obstrui o jato, spas e saunas com temperatura que ativa bicos prematuramente, cozinhas de restaurante interno com carga de incêndio alta e lobbies com pé-direito duplo. A DRD2 projeta e instala sistemas de sprinkler para hotel em SP conforme IT 23/25 e NBR 10897, com solução técnica correta para cada área.",
  introP2:
    "Processo completo: projeto hidráulico por setor (UH, corredor, lobby, spa, restaurante, cozinha), seleção de bico correto por ambiente, instalação sem interrupção dos hóspedes e laudo para AVCB hoteleiro. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Sprinkler", href: "/sprinklers" },
    { label: "Sprinkler para Hotel" },
  ],
  occupationType: "hotel",
  h2_principal: {
    heading: "Por que hotéis precisam de sprinkler setorizado com bicos específicos por área?",
    body: "Um hotel não é uma ocupação uniforme. O quarto padrão tem forro rebaixado de gesso que obstrui a área de descarga do bico de teto — exigindo bicos embutidos (concealed) calibrados para atuação pelo lado do espelho decorativo. O spa tem umidade e temperatura que aceleram o envelhecimento dos bicos convencionais — exigindo bicos de temperatura de ativação mais alta. A cozinha do restaurante interno tem gordura e calor que exigem sistema de cozinha separado do SPK geral. Cada setor tem especificação própria na IT 23/25 e na NBR 10897.",
    body2:
      "O problema mais frequente em hotéis é o projeto genérico que ignora as especificidades de cada ambiente. Bicos convencionais instalados em forros rebaixados criam zonas mortas onde a descarga não alcança o incêndio abaixo do forro. Bicos de baixa temperatura em sauna ou área de hidromassagem ativam prematuramente por calor ambiente — causando dano hídrico sem incêndio. A DRD2 especifica o bico correto para cada ambiente do hotel antes de qualquer instalação.",
  },
  h2_riscos: {
    heading: "O que reprova o sistema de sprinkler de hotel na vistoria do CBPMESP",
    intro:
      "Esses 6 problemas são as causas mais frequentes de Comunique-se em hotéis autuados pelo Corpo de Bombeiros em São Paulo.",
    itens: [
      {
        titulo: "Bico de teto obstruído por forro rebaixado",
        desc: "Forros rebaixados de gesso, madeira ou PVC criam barreiras físicas que impedem o jato do bico de alcançar o incêndio no nível do piso. A IT 23/25 é clara: bicos instalados em forro rebaixado precisam ser do tipo embutido (concealed) ou sidewall.",
      },
      {
        titulo: "Temperatura de ativação incorreta em spa e sauna",
        desc: "Bicos com bulbo de 57°C ou 68°C em spas, saunas ou áreas de piscina aquecida ativam prematuramente por temperatura ambiente elevada. A norma exige bicos com temperatura de ativação calibrada para cada ambiente específico.",
      },
      {
        titulo: "Cozinha do restaurante sem supressão de gordura",
        desc: "A IT 23/25 proíbe o uso de sprinklers convencionais sobre coifa de cozinha com fritadeiras e chapas quentes. Esse setor exige sistema de supressão de gordura (wet chemical) — separado e independente do SPK geral do hotel.",
      },
      {
        titulo: "Lobby com pé-direito duplo sem análise de obstrução",
        desc: "Lobbies com mezanino, vigas decorativas ou pé-direito acima de 7,5 m exigem análise específica de obstrução e, em muitos casos, bicos adicionais no nível inferior para cobrir o espaço entre o bico de teto e o piso.",
      },
      {
        titulo: "Bomba sem separação do sistema de hidrante",
        desc: "O sistema de sprinkler e o sistema de hidrantes devem ter bombas dedicadas independentes. Hotéis que compartilham bomba entre os dois sistemas estão em não-conformidade com IT 22 e IT 23 simultaneamente.",
      },
      {
        titulo: "Falta de manutenção documentada dos bicos",
        desc: "Bicos de sprinkler têm vida útil de 50 anos para padrão e 20 anos para sensíveis ao calor. Hotéis antigos que nunca fizeram inspeção individual dos bicos estão expostos a Comunique-se por bico com corrosão ou obstrução.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o sistema SPK para hotel",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Levantamento técnico por setor",
        desc: "Mapeamento de todos os ambientes do hotel: UH por tipo (standard, suíte, cobertura), corredor, lobby, spa, piscina, restaurante, cozinha, lavanderia, garagem e áreas de serviço.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Seleção de bico por ambiente",
        desc: "Definição do bico correto por setor: embutido (concealed) para UH com forro rebaixado, sidewall para corredores estreitos, alta temperatura para spa, EC (extended coverage) para lobby com pé-direito duplo.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Projeto hidráulico setorizado",
        desc: "Cálculo de densidade, pressão e vazão para cada setor independentemente. Dimensionamento de bomba e reservatório para o setor de maior risco em operação simultânea.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Instalação sem interromper hóspedes",
        desc: "Execução por andar ou setor, com cronograma acordado com a gerência hoteleira. Cada UH recebe o bico correto para o tipo de forro instalado, sem necessidade de demolição.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Testes de pressão e descarga",
        desc: "Teste hidrostático em toda a rede, verificação de pressão no ponto mais desfavorecido e teste de acionamento da bomba. Bicos embutidos são verificados individualmente por área.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo técnico com ART para AVCB",
        desc: "ART de projeto e ART de execução CREA-SP. Laudo técnico com memorial de cálculo, relatório fotográfico por setor e documentação pronta para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 23/25 exige especificamente para sprinkler em hotéis",
    body1:
      "Hotéis são Grupo H-1 — uso residencial transitório — e têm mix de ocupação que exige análise setor a setor. A IT 23/25 e a NBR 10897 determinam densidade de descarga, tipo de bico e espaçamento conforme as características físicas e de risco de cada ambiente.",
    alerta:
      "Qualquer reforma de UH, adição de spa, expansão de restaurante ou remodelação de lobby exige atualização do projeto de sprinkler com nova ART antes do início das obras.",
    itens: [
      {
        titulo: "Bicos embutidos (concealed) em UH com forro rebaixado",
        desc: "A IT 23/25 permite bicos embutidos em forros rebaixados desde que o espelho decorativo seja termossensível e a deflexão após abertura garanta a área de cobertura exigida. O projeto deve especificar o modelo e temperatura de cada bico.",
      },
      {
        titulo: "Alta temperatura para áreas aquecidas",
        desc: "Spas, saunas, salas de vapor e áreas de piscina aquecida exigem bicos com temperatura de ativação de 79°C a 141°C conforme a temperatura máxima do ambiente. A norma proíbe bicos de 57°C em ambientes acima de 38°C de temperatura normal.",
      },
      {
        titulo: "Extended Coverage para lobbies com pé-direito duplo",
        desc: "Bicos EC cobrem áreas maiores com menos pontos de instalação — indicados para lobbies abertos com pé-direito acima de 4,9 m onde a instalação de bicos padrão geraria quantidade excessiva de pontos no teto.",
      },
      {
        titulo: "Reservatório com autonomia para setor mais exigente",
        desc: "O reservatório deve ter volume suficiente para 30 minutos de operação no setor de maior risco (geralmente restaurante ou lavanderia). Em hotéis com sistema de sprinkler integrado a outros usos, o cálculo deve considerar cada sistema separadamente.",
      },
    ],
    closing:
      "A DRD2 realiza levantamento técnico gratuito do hotel, identifica todas as não-conformidades setor a setor e apresenta proposta de adequação com bico correto por ambiente, orçamento fechado e prazo definido.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema de sprinkler do hotel?",
    body1:
      "A manutenção preventiva semestral é obrigatória. O laudo técnico com ART deve ser emitido anualmente para renovação do AVCB. Revisão imediata é necessária após qualquer reforma de UH que altere o forro, adição de spa ou área de piscina, reforma do restaurante, mudança de bomba ou reservatório.",
    body2:
      "Situações de revisão urgente: Comunique-se do CBPMESP específico sobre o sistema de sprinkler, acionamento acidental de bico sem incêndio (possível falha de temperatura), corrosão visível em bicos ou tubulação, queda de pressão identificada pela equipe de manutenção, ou qualquer reforma que altere o pé-direito de um ambiente.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema de sprinkler do seu hotel?",
    body1:
      "A DRD2 tem experiência em sistemas de sprinkler para hotéis de todos os portes em São Paulo — de boutique hotels com 20 UHs a redes com mais de 200 quartos. Cada projeto especifica o bico correto por ambiente, eliminando acionamentos acidentais em spa e zonas mortas em UH com forro rebaixado.",
    body2:
      "Processo completo sem terceiros: levantamento, projeto, instalação, teste e laudo — tudo com a DRD2. Planejamos cada intervenção para minimizar impacto na ocupação hoteleira, com cronograma acordado com a gerência de manutenção.",
  },
  h2_cobertura: {
    heading: "Sistema de sprinkler para hotel em toda a Grande SP",
    body1:
      "A DRD2 atende hotéis, resorts, flats e apart-hotéis em toda a Grande São Paulo: capital, Guarulhos, ABC, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para hotéis fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial pode ser feito por videochamada com análise das plantas e fotos do sistema existente.",
  },
  faqs: [
    {
      question: "Hotel é obrigado a ter sistema de sprinkler em SP?",
      answer:
        "Sim. Hotéis com área relevante ou número de andares acima do mínimo normativo são obrigados a possuir sistema de sprinkler conforme IT 23/25 e NBR 10897 do CBPMESP. A obrigatoriedade depende da área total, número de andares e classificação de risco. A DRD2 faz o enquadramento correto gratuitamente.",
    },
    {
      question: "Preciso de bicos especiais nos quartos com forro rebaixado?",
      answer:
        "Sim. Bicos convencionais de teto não funcionam corretamente em UHs com forro rebaixado de gesso, madeira ou PVC — o forro impede que o jato alcance o incêndio. A norma exige bicos embutidos (concealed) ou sidewall com especificação técnica para cada tipo de forro.",
    },
    {
      question: "O spa e a sauna do hotel precisam de bicos de temperatura diferente?",
      answer:
        "Sim. Bicos de 57°C ou 68°C em spas, saunas e áreas de piscina aquecida acionam prematuramente por temperatura ambiente. A IT 23/25 exige bicos com temperatura de ativação adequada para cada ambiente — geralmente 79°C a 141°C para áreas com calor elevado.",
    },
    {
      question: "A cozinha do restaurante interno precisa de sistema separado?",
      answer:
        "Sim. A IT 23/25 determina que coberturas de cozinha com equipamentos de gordura (fritadeiras, chapas, churrasqueiras) precisam de sistema de supressão de gordura (wet chemical) separado e independente do SPK geral. O sprinkler convencional é proibido sobre a coifa.",
    },
    {
      question: "A DRD2 faz instalação de sprinkler em hotel em operação?",
      answer:
        "Sim. A DRD2 planeja toda a instalação por UHs ou andares, com cronograma acordado com a gerência hoteleira para minimizar perda de receita de ocupação. Cada UH fica fora de serviço apenas durante a instalação do bico — geralmente menos de 2 horas por quarto.",
    },
  ],
  linksInternos: [
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
    { href: "/sistema-hidrante-hotel-avcb-sp", label: "Hidrante para Hotel" },
    { href: "/sistema-alarme-incendio-hotel-avcb-sp", label: "Alarme de Incêndio para Hotel" },
    { href: "/avcb-hoteis-pousadas-sao-paulo", label: "AVCB para Hotéis e Pousadas" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "SPRINKLER PARA HOTEL — BICO CERTO POR SETOR + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. Bico correto para UH, spa, lobby e cozinha. Processo completo conforme IT 23/25.",
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
