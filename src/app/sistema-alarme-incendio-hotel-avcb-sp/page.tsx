import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/sistema-alarme-incendio-hotel-avcb-sp",
  meta: {
    title: "Sistema de Alarme de Incêndio para Hotel em SP — IT 18/19 e Monitoramento 24h | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sistemas de alarme de incêndio para hotel em SP conforme IT 18/19. Detecção por UH, central endereçável, monitoramento 24h e laudo para AVCB hoteleiro. Diagnóstico gratuito.",
  },
  eyebrow: "IT 18/19 — Hotéis, Resorts e Flats em SP",
  h1Line1: "Sistema de Alarme de Incêndio para Hotel",
  h1Line2: "em São Paulo — IT 18/19, Central Endereçável e AVCB",
  heroBg: "/images/blog/blog_hero_casa_repouso_avcb.webp",
  introP1:
    "Hóspedes dormindo não respondem a fumaça sem alarme sonoro no quarto. Hotéis precisam de detecção de incêndio em cada unidade habitacional, central endereçável que identifica o andar e quarto em chamas em segundos, e monitoramento 24 horas por operador treinado. A DRD2 projeta e instala sistemas de alarme de incêndio para hotel em SP conforme IT 18/19, com ART CREA-SP e laudo para AVCB hoteleiro.",
  introP2:
    "Processo completo: projeto de sistema endereçável com loop por andar, detecção em UH e áreas comuns, anunciador de voz, monitoramento 24h e laudo para aprovação do AVCB. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Alarme para Hotel" },
  ],
  occupationType: "hotel",
  h2_principal: {
    heading: "Por que hotéis precisam de alarme endereçável e monitoramento 24 horas?",
    body: "A IT 18/19 do CBPMESP classifica hotéis como ocupação de Grupo H-1 com exigência de sistema de alarme de incêndio endereçável — não convencional. A diferença é crítica: um sistema convencional indica apenas qual zona está em alarme (por exemplo, 'andar 7'); um sistema endereçável indica exatamente o dispositivo ativado ('detector fumaça quarto 712'). Em um hotel com 200 quartos, isso pode ser a diferença entre localizar o incêndio em 20 segundos ou em 5 minutos.",
    body2:
      "Para hotéis com mais de 100 unidades habitacionais, a IT 18/19 também exige monitoramento 24 horas por operador treinado na recepção — não apenas uma central de alarme desatendida. O operador deve saber como responder ao alarme, acionar a brigada e coordenar a evacuação parcial do andar afetado sem criar pânico nos demais hóspedes. Hotéis que operam sem essa estrutura estão em irregularidade formal perante o CBPMESP.",
  },
  h2_riscos: {
    heading: "O que reprova o sistema de alarme de hotel na vistoria do CBPMESP",
    intro:
      "Esses 6 problemas são as causas mais frequentes de Comunique-se em hotéis autuados pelo Corpo de Bombeiros em São Paulo.",
    itens: [
      {
        titulo: "Central convencional onde é exigida endereçável",
        desc: "Hotéis acima do porte mínimo da IT 18/19 exigem central endereçável. Manter central convencional após a norma entrar em vigor é Comunique-se automático na primeira renovação de AVCB.",
      },
      {
        titulo: "Ausência de detector em unidade habitacional",
        desc: "A IT 18/19 exige detector de fumaça em cada UH — não apenas em corredores. Hotéis que só possuem detectores nos corredores estão com cobertura insuficiente e serão autuados.",
      },
      {
        titulo: "Sem anunciador de voz para hotéis acima de porte",
        desc: "Hotéis com mais de um certo número de UHs ou andares precisam de anunciador de voz (voice enunciator) além das sirenes convencionais. O anunciador permite comunicação ao vivo com hóspedes durante a evacuação.",
      },
      {
        titulo: "Monitoramento 24h sem documentação formal",
        desc: "A IT 18/19 exige que o monitoramento noturno seja feito por funcionário com treinamento documentado. Hotéis que alegam ter 'o porteiro monitorando' sem registro de treinamento formal são autuados.",
      },
      {
        titulo: "Baterias sem teste periódico documentado",
        desc: "As baterias do no-break da central de alarme devem ser testadas semestralmente com resultado registrado. Baterias sem teste ou com carga insuficiente para 24h de standby são causa de Comunique-se.",
      },
      {
        titulo: "Integração incorreta com sistema de sprinkler",
        desc: "O alarme de incêndio deve ser integrado ao sinal de fluxo do sistema de sprinkler. Quando um sprinkler aciona, a central de alarme deve indicar o setor afetado. Falta de integração é não-conformidade formal.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 instala o sistema de alarme de incêndio para hotel",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Projeto de sistema endereçável",
        desc: "Projeto de loop endereçável por andar com identificação individual de cada detector, acionador manual e módulo de saída. Dimensionamento da central com capacidade para todos os dispositivos do hotel.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Posicionamento de detectores",
        desc: "Detecção em cada UH (detector de fumaça), em corredores (detector de fumaça combinado com temperatura), em cozinha do restaurante (detector de temperatura) e em áreas de serviço.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Instalação dos cabos e dispositivos",
        desc: "Passagem de cabos resistentes ao fogo (CPCI), instalação de detectores, acionadores manuais, sirenes e anunciadores de voz. Execução por equipe própria sem terceiros.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Configuração da central e anunciador",
        desc: "Programação da central endereçável com identificação de cada ponto por andar e número de quarto. Configuração do anunciador de voz com mensagens em português para evacuação ordeira.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Testes completos e comissionamento",
        desc: "Teste de cada detector individualmente, sirenes por andar, acionadores manuais, anunciador de voz e integração com sprinkler e controle de fumaça. Relatório fotográfico completo.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo técnico com ART para AVCB",
        desc: "Emissão de laudo técnico com ART CREA-SP e treinamento do operador da recepção para monitoramento 24h. Documentação pronta para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 18/19 exige especificamente para alarme de hotel",
    body1:
      "Hotéis são Grupo H-1 na IT 18/19 — ocupação residencial transitória com exigências reforçadas de detecção precoce, comunicação de emergência e monitoramento. A norma diferencia o porte do hotel para definir o tipo de sistema e os recursos obrigatórios.",
    alerta:
      "Reforma de UHs, expansão de andares ou adição de restaurante e salão de eventos exige atualização do projeto de alarme com nova ART.",
    itens: [
      {
        titulo: "Central endereçável com identificação por quarto",
        desc: "A central deve identificar individualmente cada dispositivo — detector por número de quarto, acionador por corredor e módulo de saída por andar. Sistemas em zona (convencional) não são aceitos para hotéis de maior porte.",
      },
      {
        titulo: "Detecção em cada UH",
        desc: "Pelo menos um detector de fumaça em cada unidade habitacional, com endereço individual na central. Detectores de corredor não cobrem o interior dos quartos — a norma é explícita nesse requisito.",
      },
      {
        titulo: "Anunciador de voz para evacuação ordenada",
        desc: "Hotéis acima do porte mínimo precisam de anunciador de voz capaz de transmitir mensagens gravadas ou ao vivo para andares específicos — permitindo evacuação parcial sem alarme geral que cause pânico.",
      },
      {
        titulo: "No-break com autonomia de 24 horas",
        desc: "A central de alarme deve ter bateria com autonomia mínima de 24 horas em modo de standby e 30 minutos em modo de alarme. As baterias devem ser testadas semestralmente com resultado registrado em livro de manutenção.",
      },
    ],
    closing:
      "A DRD2 realiza levantamento técnico gratuito do sistema instalado no hotel, identifica todas as não-conformidades com IT 18/19 e apresenta proposta de adequação ou instalação com orçamento fechado.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema de alarme de incêndio do hotel?",
    body1:
      "A manutenção preventiva semestral é obrigatória. O laudo técnico com ART deve ser emitido anualmente para renovação do AVCB. Revisão imediata é necessária após qualquer reforma de andar, adição de novas UHs, mudança de layout de corredor, troca de central ou adição de detector.",
    body2:
      "Situações de revisão urgente: Comunique-se do CBPMESP específico sobre o sistema de alarme, falha de bateria ou central relatada pela recepção, reforma de restaurante ou salão de eventos, adição de novos andares, ou alarme falso frequente que não foi investigado e corrigido.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema de alarme do seu hotel?",
    body1:
      "A DRD2 tem experiência em sistemas de alarme endereçável para hotéis de todos os portes em São Paulo — de boutique hotels com 20 UHs a redes com mais de 200 quartos. Cada projeto inclui treinamento da equipe da recepção para monitoramento 24h e documentação do treinamento para a vistoria.",
    body2:
      "Processo completo sem terceiros: projeto, instalação, comissionamento, laudo e treinamento — tudo com a DRD2. Planejamos a instalação para minimizar impacto na ocupação hoteleira, com cronograma definido com a gerência de manutenção.",
  },
  h2_cobertura: {
    heading: "Sistema de alarme para hotel em toda a Grande SP",
    body1:
      "A DRD2 atende hotéis, resorts, flats e apart-hotéis em toda a Grande São Paulo: capital, Guarulhos, ABC, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para hotéis fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial pode ser feito por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Hotel é obrigado a ter sistema de alarme de incêndio endereçável em SP?",
      answer:
        "Sim. Hotéis acima de determinado porte são obrigados a ter sistema de alarme endereçável conforme IT 18/19 do CBPMESP. A obrigatoriedade de sistema endereçável — versus convencional — depende do número de UHs e andares. A DRD2 faz o enquadramento correto gratuitamente.",
    },
    {
      question: "O sistema de alarme do hotel precisa monitorar os quartos individualmente?",
      answer:
        "Sim. A IT 18/19 exige detector de fumaça em cada unidade habitacional com endereço individual na central endereçável. Detectores apenas nos corredores não satisfazem a norma — o interior do quarto precisa de detecção própria.",
    },
    {
      question: "O hotel precisa de funcionário monitorando o alarme 24 horas?",
      answer:
        "Sim. Hotéis acima de determinado porte precisam de operador treinado na recepção monitorando o sistema 24 horas. O treinamento deve ser documentado e os registros precisam estar disponíveis para a vistoria do CBPMESP.",
    },
    {
      question: "O que é o anunciador de voz e quando o hotel precisa dele?",
      answer:
        "O anunciador de voz é um equipamento integrado à central de alarme que transmite mensagens de emergência por alto-falantes nos corredores e áreas comuns. Permite evacuação ordenada de andares específicos sem disparar alarme geral — reduzindo pânico. É exigido para hotéis acima de determinado porte pela IT 18/19.",
    },
    {
      question: "A DRD2 faz projeto e instalação de alarme para hotéis em reforma?",
      answer:
        "Sim. A DRD2 atende hotéis em retrofit — instalação de sistema endereçável em edifício existente, atualização de central convencional para endereçável, adição de detectores por quarto e expansão do sistema para novos andares. Planejamos a intervenção para minimizar impacto nos hóspedes.",
    },
  ],
  linksInternos: [
    { href: "/sistema-hidrante-hotel-avcb-sp", label: "Hidrante para Hotel" },
    { href: "/sistema-sprinkler-hotel-avcb-sp", label: "Sprinkler para Hotel" },
    { href: "/avcb-hoteis-pousadas-sao-paulo", label: "AVCB para Hotéis e Pousadas" },
    { href: "/treinamento-brigada", label: "Treinamento de Brigada de Incêndio" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "ALARME PARA HOTEL — ENDEREÇÁVEL + 24H + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. Sistema endereçável com detecção por quarto. Processo completo conforme IT 18/19.",
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
