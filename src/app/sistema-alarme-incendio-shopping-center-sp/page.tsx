import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/sistema-alarme-incendio-shopping-center-sp",
  meta: {
    title: "Sistema de Alarme de Incêndio para Shopping Center em SP — IT 18/19 | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sistemas de alarme de incêndio para shopping center em SP conforme IT 18/19. Central endereçável, controle de fumaça, evacuação escalonada e laudo para AVCB. Diagnóstico gratuito.",
  },
  eyebrow: "IT 18/19 — Shopping Centers e Centros Comerciais em SP",
  h1Line1: "Sistema de Alarme de Incêndio para Shopping Center",
  h1Line2: "em São Paulo — Endereçável, Controle de Fumaça e AVCB",
  heroBg: "/images/blog/fire_safety_equipment_premium.webp",
  introP1:
    "Shopping centers reúnem milhares de pessoas simultâneas em um único ambiente fechado. O sistema de alarme de incêndio precisa identificar o setor exato do incêndio em segundos, acionar o controle de fumaça automaticamente e permitir evacuação escalonada por ala — sem disparar alarme geral que cause pânico de massa. A DRD2 projeta e instala sistemas de alarme endereçável para shopping em SP conforme IT 18/19, com ART CREA-SP e laudo para AVCB.",
  introP2:
    "Processo completo: projeto de loop endereçável por ala e andar, integração com controle de fumaça e sprinklers, anunciador de voz para evacuação ordenada e laudo para aprovação do AVCB. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Alarme para Shopping" },
  ],
  occupationType: "shopping",
  h2_principal: {
    heading: "Por que shoppings precisam de alarme endereçável e evacuação escalonada?",
    body: "Um shopping com 5.000 pessoas simultâneas não pode disparar um alarme geral sem coordenação — o pânico de massa causa mais vítimas do que o incêndio em muitos cenários. A IT 18/19 exige que shoppings de grande porte tenham sistema endereçável que identifica o exato local do alarme (por exemplo, 'detector fumaça praça alimentação setor A') e anunciador de voz que permite a evacuação ordenada somente da ala afetada, enquanto o restante do shopping mantém operação normal.",
    body2:
      "A integração do alarme com o sistema de controle de fumaça é outro diferencial crítico para shoppings. Quando um detector é ativado, os dampers de fumaça da ala afetada fecham automaticamente, os exaustores de fumaça ativam e as portas corta-fogo fecham — tudo em menos de 30 segundos, antes que a fumaça se espalhe pelo mall. Shoppings sem essa integração estão em não-conformidade formal com a IT 18/19 e com a IT 15 (controle de fumaça).",
  },
  h2_riscos: {
    heading: "O que reprova o sistema de alarme de shopping na vistoria do CBPMESP",
    intro:
      "Esses 6 problemas são os mais frequentes em shoppings autuados pelo Corpo de Bombeiros em São Paulo.",
    itens: [
      {
        titulo: "Central convencional sem endereçamento por loja",
        desc: "Sistema convencional indica apenas a zona em alarme — não a loja ou detector específico. Para shoppings com dezenas de lojas por ala, isso torna a localização do incêndio extremamente lenta. A IT 18/19 exige sistema endereçável para shoppings acima do porte mínimo.",
      },
      {
        titulo: "Ausência de integração com controle de fumaça",
        desc: "O alarme de incêndio deve acionar automaticamente os dampers, exaustores e portas corta-fogo da ala afetada. Shoppings sem essa integração têm sistema de alarme parcialmente inoperante — o incêndio é detectado mas o controle de fumaça não é ativado.",
      },
      {
        titulo: "Sem anunciador de voz para evacuação escalonada",
        desc: "A IT 18/19 exige anunciador de voz em shoppings de grande porte — sem ele, o único recurso é o alarme sonoro geral, que provoca evacuação simultânea de todo o shopping e risco de pânico.",
      },
      {
        titulo: "Detecção insuficiente em praça de alimentação",
        desc: "A praça de alimentação tem alta produção de fumaça e vapor durante operação normal. Detectores de fumaça convencionais disparam alarmes falsos com frequência. A norma permite detectores de temperatura linear ou multissensoriais para esse setor.",
      },
      {
        titulo: "Baterias sem autonomia para grande porte",
        desc: "A IT 18/19 exige autonomia de 24 horas em standby e 30 minutos em alarme. Shoppings de grande porte têm consumo elevado de dispositivos — baterias subdimensionadas perdem a autonomia mínima em meses.",
      },
      {
        titulo: "Manutenção sem teste individual de detectores",
        desc: "A IT 18/19 exige teste individual de cada detector durante a manutenção preventiva. Shoppings que realizam apenas teste de painel sem verificar cada detector individualmente estão em não-conformidade no registro de manutenção.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o sistema de alarme para shopping center",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Projeto de loop endereçável por ala",
        desc: "Projeto de loop endereçável com identificação individual de cada detector, acionador manual e módulo de saída por ala, andar e setor. Dimensionamento da central com capacidade para toda a expansão futura.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Detecção por tipo de ambiente",
        desc: "Detectores de fumaça ótica para lojas e corredores, detectores de temperatura para praça de alimentação e cozinhas, detectores multissensoriais para áreas com vapor e calor elevados.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Integração com controle de fumaça",
        desc: "Integração da central de alarme com os dampers de fumaça, exaustores e portas corta-fogo por ala. Configuração de sequência de acionamento conforme IT 15 (controle de fumaça).",
      },
      {
        numero: "ETAPA 04",
        titulo: "Instalação de anunciador de voz",
        desc: "Anunciador de voz com cobertura de todos os setores do shopping. Mensagens gravadas em PT-BR para evacuação por ala específica, com protocolo de aviso progressivo antes do alarme geral.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Testes completos e integração",
        desc: "Teste individual de cada detector, sirenes por setor, anunciador de voz, integração com controle de fumaça e sprinklers. Simulação de evacuação escalonada com equipe de segurança.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo com ART para AVCB",
        desc: "ART de projeto e ART de execução CREA-SP. Laudo técnico com documentação de testes e integração — pronto para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 18/19 exige especificamente para alarme de shopping center",
    body1:
      "Shopping centers são Grupo C-2 na IT 18/19 — com exigências de sistema endereçável, anunciador de voz, integração com controle de fumaça e plano de evacuação documentado como condições para o AVCB.",
    alerta:
      "Qualquer reforma de ala, expansão de praça ou mudança de layout exige atualização do projeto de alarme com nova ART — mesmo que o sistema já esteja aprovado.",
    itens: [
      {
        titulo: "Central endereçável com identificação por loja",
        desc: "Cada detector, acionador e módulo deve ter endereço individual na central. O operador de segurança deve saber exatamente qual loja e qual ponto disparou o alarme sem precisar inspecionar fisicamente a ala.",
      },
      {
        titulo: "Integração obrigatória com controle de fumaça",
        desc: "A IT 18/19 e a IT 15 exigem que o alarme acione automaticamente o sistema de controle de fumaça da ala afetada. A integração deve ser testada na manutenção semestral e documentada.",
      },
      {
        titulo: "Anunciador de voz para evacuação escalonada",
        desc: "Shoppings acima do porte mínimo precisam de anunciador de voz capaz de transmitir mensagens por ala específica, permitindo evacuação ordenada sem pânico. Mensagens devem ser em PT-BR e audíveis em 100% da área.",
      },
      {
        titulo: "Plano de emergência integrado ao sistema",
        desc: "A IT 18/19 exige que o plano de emergência do shopping esteja documentado e que o operador de segurança seja treinado para responder aos alertas da central endereçável. O treinamento é registrado e auditável.",
      },
    ],
    closing:
      "A DRD2 realiza levantamento técnico gratuito do sistema de alarme do shopping, identifica todas as não-conformidades e apresenta proposta de adequação com integração completa ao controle de fumaça.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema de alarme do shopping?",
    body1:
      "A manutenção semestral com teste individual de detectores é obrigatória. O laudo com ART deve ser emitido anualmente para renovação do AVCB. Revisão imediata é necessária após qualquer reforma de ala, expansão de praça ou mudança de layout que afete a cobertura dos detectores.",
    body2:
      "Situações urgentes: Comunique-se do CBPMESP sobre alarme, alarme falso frequente na praça de alimentação, falha de integração com o controle de fumaça, troca de central ou expansão do shopping com novas lojas.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema de alarme do seu shopping?",
    body1:
      "A DRD2 tem experiência em sistemas de alarme endereçável para shopping centers, centros comerciais e outlets em São Paulo. Cada projeto inclui integração completa com controle de fumaça, anunciador de voz e treinamento da equipe de segurança.",
    body2:
      "Processo completo sem terceiros: projeto, instalação, comissionamento, integração e laudo — tudo com a DRD2. Execução planejada para minimizar impacto nas operações do shopping.",
  },
  h2_cobertura: {
    heading: "Sistemas de alarme para shopping em toda a Grande SP",
    body1:
      "A DRD2 atende shopping centers, centros comerciais e outlets em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco e municípios da região metropolitana.",
    body2:
      "Para shoppings fora da Grande SP, realizamos visita técnica com agenda específica. Diagnóstico inicial por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Shopping center precisa de central de alarme endereçável?",
      answer:
        "Sim. Shoppings acima do porte mínimo da IT 18/19 são obrigados a ter sistema de alarme endereçável — não convencional. O sistema endereçável identifica o exato detector ou loja em alarme, permitindo localização e resposta rápida sem evacuação desnecessária do shopping inteiro.",
    },
    {
      question: "O sistema de alarme do shopping precisa estar integrado ao controle de fumaça?",
      answer:
        "Sim. A IT 18/19 e a IT 15 exigem que o alarme acione automaticamente os dampers de fumaça, exaustores e portas corta-fogo da ala afetada. A integração deve ser testada semestralmente e documentada no registro de manutenção.",
    },
    {
      question: "Como funciona a evacuação escalonada em shopping center?",
      answer:
        "O anunciador de voz transmite mensagem de emergência para a ala afetada primeiro, enquanto o restante do shopping é notificado gradualmente. Isso evita pânico de massa e permite que a brigada avalie e confirme o incêndio antes de disparar a evacuação geral.",
    },
    {
      question: "Por que detectores comuns disparam alarme falso na praça de alimentação?",
      answer:
        "A praça de alimentação tem alta produção de vapor, fumaça de cozinha e calor durante o funcionamento normal. Detectores de fumaça ótica convencionais interpretam isso como incêndio. A solução é usar detectores multissensoriais ou de temperatura linear, que a IT 18/19 permite para esse ambiente específico.",
    },
    {
      question: "Com que frequência o sistema de alarme do shopping deve ser revisado?",
      answer:
        "Manutenção semestral com teste individual de cada detector é obrigatória. O laudo com ART deve ser emitido anualmente. A DRD2 oferece contrato de manutenção preventiva com visitas semestrais programadas.",
    },
  ],
  linksInternos: [
    { href: "/sistema-hidrante-shopping-center-sp", label: "Hidrante para Shopping" },
    { href: "/sistema-sprinkler-shopping-center-sp", label: "Sprinkler para Shopping" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/treinamento-brigada", label: "Brigada de Incêndio" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "ALARME PARA SHOPPING — ENDEREÇÁVEL + CONTROLE DE FUMAÇA + AVCB",
    body: "Diagnóstico técnico gratuito. Integração completa com controle de fumaça e evacuação escalonada. Conforme IT 18/19.",
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
