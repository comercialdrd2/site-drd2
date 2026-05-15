import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/vga-hotel-sp",
  meta: {
    title: "Válvula de Governo e Alarme (VGA) para Hotel em SP — Sprinkler em Quartos e AVCB | DRD2 Engenharia",
    description: "A DRD2 projeta e mantém Válvula de Governo e Alarme (VGA) para hotéis em SP. Integração com PABX hoteleiro, bicos de temperatura 57°C em quartos, trip test e laudo para AVCB. IT 23/25. Diagnóstico gratuito.",
  },
  eyebrow: "Válvula de Governo e Alarme (VGA) para Hotel — IT 23/25, NBR 10897 e AVCB em São Paulo",
  h1Line1: "Válvula de Governo e Alarme",
  h1Line2: "para Hotel em SP — Sprinkler e AVCB",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "Em hotel, o sistema de sprinkler precisa estar funcionando 24 horas por dia, 365 dias por ano — porque os hóspedes dormem sem conhecimento do ambiente e sem capacidade de se orientar sozinhos em uma evacuação. A VGA de hotel tem dois requisitos específicos que não existem em outros usos: bicos de 57°C nos quartos (ativação mais rápida por menor temperatura — porque o ocupante pode estar dormindo quando o fogo começa) e integração do pressostato com o sistema de comunicação hoteleiro (PABX ou sistema de alerta de quartos) para notificação imediata dos hóspedes.",
  introP2:
    "A DRD2 projeta, instala e mantém VGA para hotéis em SP — de pousadas a hotéis de grande porte com múltiplos pavimentos e zonas. Diagnóstico técnico gratuito incluindo verificação da integração do pressostato com o sistema de alerta hoteleiro e planejamento de trip test com mínimo impacto na ocupação.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Válvula de Governo e Alarme (VGA) para Hotel" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "Por que a Válvula de Governo e Alarme (VGA) de hotel tem requisitos específicos?",
    body: "Hotel é uso de ocupação noturna coletiva — hóspedes dormem em quartos sem conhecimento da edificação, sem acesso às rotas de fuga e sem capacidade de resposta imediata a uma emergência. A IT 23/25 reconhece esse risco exigindo sistema de alarme sonoro que cubra todos os quartos e notificação imediata à recepção quando qualquer zona de sprinkler ativar. O pressostato da VGA é o gatilho desse processo — o sinal do pressostato aciona o sistema de alerta de quartos antes mesmo que a fumaça seja detectada por um detector automático.",
    body2:
      "A temperatura de ativação dos bicos é outro diferencial: nos corredores e áreas comuns, bicos de 57°C (padrão) são adequados. Nos quartos, a IT 23/25 especifica bicos de ativação mais rápida (tipo Quick Response) que respondem mais rapidamente ao desenvolvimento do fogo — crítico porque o hóspede dormindo pode não ter sido evacuado ainda quando o incêndio começa.",
  },
  h2_riscos: {
    heading: "6 falhas críticas de Válvula de Governo e Alarme (VGA) em hotéis",
    intro:
      "Esses problemas são específicos para hotéis — onde a ocupação noturna torna cada falha mais grave.",
    itens: [
      {
        titulo: "Pressostato sem integração com sistema de alerta de quartos",
        desc: "Hotel com pressostato instalado na VGA mas conectado apenas à central de alarme da recepção — sem integração com o sistema de PABX ou de alerta de quartos — não notifica hóspedes automaticamente quando o sprinkler ativa. Em incêndio noturno, a evacuação de hóspedes dormindo depende dessa integração.",
      },
      {
        titulo: "Bicos de 68°C ou 79°C nos quartos — ativação atrasada",
        desc: "Bicos com temperatura de ativação mais alta do que a especificada para uso hoteleiro demoram mais para abrir em incêndio. Em quarto com hóspede dormindo, o atraso na ativação do sprinkler pode ser a diferença entre suprimir o fogo e ter um incêndio já em desenvolvimento quando o sistema finalmente atua.",
      },
      {
        titulo: "VGA com DN subdimensionado para número de quartos da zona",
        desc: "Hotel com 10 andares pode ter um único pavimento como zona de sprinkler — 20 a 30 quartos por andar com 2 a 3 bicos por quarto = 40 a 90 bicos por zona. A demanda de vazão para essa zona pode exigir DN100 ou DN150. VGA DN80 instalada por padrão pode estar subdimensionada.",
      },
      {
        titulo: "Campainha soando intermitentemente — micro-vazamento em zona de quarto",
        desc: "Campainha que soa ocasionalmente sem incêndio em zona de quarto cria dois problemas: falso alarme que acorda hóspedes (reclamação) e indica micro-vazamento no clapet que está causando queda de pressão — a jockey pump está acionando para compensar. O problema deve ser corrigido urgentemente para não gerar falso acionamento de evacuação.",
      },
      {
        titulo: "Trip test realizado sem comunicação à recepção e aos hóspedes",
        desc: "Trip test não anunciado em hotel faz o alarme soar nos quartos durante a ocupação — hóspedes que acordam com o alarme às 7h da manhã durante o trip test são um problema operacional e reputacional. O planejamento do trip test em hotel exige comunicação prévia à recepção, horário adequado e aviso nos quartos ocupados.",
      },
      {
        titulo: "VGA sem acesso — instalada em shaft de quarto ou de andar",
        desc: "Em hotéis com reformas de quartos, VGAs instaladas em shafts acessados pelo interior dos quartos podem ficar bloqueadas quando o quarto está ocupado — inviabilizando manutenção e inspeção. O projeto deve garantir acesso à VGA por corredor de serviço, independente da ocupação dos quartos adjacentes.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa Válvula de Governo e Alarme (VGA) para hotel",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Mapeamento de zonas por pavimento",
        desc: "Levantamento de todas as VGAs do hotel por pavimento ou grupo de pavimentos. Verificação do DN de cada VGA, tipo de bico nos quartos (temperatura e tipo de resposta), estado do trim e situação da integração do pressostato com o sistema hoteleiro.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Verificação da integração com o sistema de alerta hoteleiro",
        desc: "Verificação de que o sinal do pressostato de cada VGA chega ao sistema de PABX ou alerta de quartos — não apenas à central de alarme da recepção. Identificação da zona pelo sistema hoteleiro (andar ou setor). Teste de integração sem trip test completo.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Verificação do tipo de bico nos quartos",
        desc: "Inspeção dos bicos instalados nos quartos: temperatura de ativação (deve ser 57°C ou Quick Response equivalente), tipo (recessed para estética de quarto) e estado de conservação. Bicos que tenham sido pintados durante reformas são não-conformidades imediatas — a tinta impede a ativação.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Planejamento do trip test por andar",
        desc: "Agendamento do trip test de cada zona com a gerência do hotel: horário de menor ocupação (geralmente manhã de segunda-feira), comunicação prévia à recepção e aviso nos quartos que possam ser afetados pelo alarme. Definição do técnico que ficará na recepção para confirmar o sinal do sistema hoteleiro.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Execução do trip test com verificação na recepção",
        desc: "Trip test pela torneira de teste no ponto mais desfavorecido do andar: técnico na torneira e técnico na recepção verificando o sinal no sistema hoteleiro. Cronometragem da campainha, verificação de sinal do pressostato e leitura de pressão residual.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo por zona e relatório para AVCB hoteleiro",
        desc: "Laudo técnico por zona com resultado do trip test. Relatório consolidado para o AVCB com documentação de manutenção de cada zona. ART de execução CREA-SP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que o CBPMESP verifica na vistoria de AVCB de hotel",
    body1:
      "A vistoria de hotel para AVCB verifica o sistema de sprinkler com atenção especial à cobertura dos quartos, ao tipo de bico instalado e à integração do alarme com o sistema de comunicação do hotel.",
    alerta:
      "Bicos de sprinkler pintados durante reforma de quarto é uma das não-conformidades mais frequentes em hotéis. Pintura sobre o bico — especialmente sobre o elemento termossensível (ampola de vidro ou fusível) — impede a ativação em incêndio. O CBPMESP verifica bicos pintados na vistoria e emite Comunique-se para substituição imediata.",
    itens: [
      {
        titulo: "Cobertura dos quartos — bicos presentes e sem pintura",
        desc: "O vistoriador verifica se há bico de sprinkler em cada quarto e se os bicos não estão pintados ou bloqueados por luminárias, decoração de teto ou reforma. Bico pintado ou bloqueado = Comunique-se imediato.",
      },
      {
        titulo: "Integração do alarme de sprinkler com o sistema hoteleiro",
        desc: "O CBPMESP verifica se o acionamento do sprinkler gera alerta nos quartos — não apenas na recepção. Hotel sem integração do alarme nos quartos está em não-conformidade com os requisitos de uso coletivo noturno.",
      },
      {
        titulo: "Documentação de manutenção por zona",
        desc: "Relatórios de manutenção semestral e trip test anual por zona. Hotel com 12 andares e 12 VGAs precisa de 12 relatórios de trip test — não um único relatório para todo o sistema.",
      },
      {
        titulo: "Acessibilidade das VGAs",
        desc: "Todas as VGAs devem ser acessíveis sem entrar em quartos ocupados. VGAs em shafts acessados apenas pelo interior dos quartos são não-conformidade de projeto.",
      },
    ],
    closing:
      "A DRD2 prepara o dossiê de manutenção de VGA por zona para hotéis — incluindo verificação de bicos nos quartos, integração com o sistema hoteleiro e laudo para renovação do AVCB.",
  },
  h2_quando: {
    heading: "Quando fazer o trip test em hotel?",
    body1:
      "Trip test anual obrigatório. Em hotel, o horário ideal é segunda-feira pela manhã (menor ocupação semanal), comunicado com antecedência à gerência e com aviso nos quartos afetados. Para hotéis com alta taxa de ocupação, o trip test pode ser dividido em zonas ao longo de várias semanas.",
    body2:
      "Trip test imediato após: reforma de quartos que possa ter afetado bicos ou a VGA do andar, substituição da central de alarme hoteleira (verificar integração), ou Comunique-se do CBPMESP sobre o sistema de sprinkler.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para Válvula de Governo e Alarme (VGA) de hotel em SP?",
    body1:
      "A DRD2 executa trip test em hotel com comunicação prévia e com técnico dedicado à verificação do sistema hoteleiro — não apenas ao sistema de sprinkler. A integração do pressostato com o PABX ou sistema de alerta é verificada em cada manutenção.",
    body2:
      "Contrato de manutenção anual com visitas semestrais programadas: a DRD2 agenda todas as zonas no início do contrato e entrega o dossiê de manutenção antes da renovação do AVCB — sem correria de última hora.",
  },
  h2_cobertura: {
    heading: "Válvula de Governo e Alarme (VGA) para hotel em toda a Grande SP",
    body1:
      "A DRD2 atende hotéis, pousadas, apart-hotéis e flats em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para hotéis com AVCB vencido ou Comunique-se ativo sobre o sistema de sprinkler, a DRD2 atua com urgência — diagnóstico e plano de regularização em até 24h após a visita técnica.",
  },
  faqs: [
    {
      question: "Bico de sprinkler no banheiro do quarto é obrigatório?",
      answer:
        "Depende do tamanho do banheiro e dos requisitos da IT 23/25 para o projeto. Banheiros de hotel com área acima de determinado limite podem exigir bico. Em banheiros menores, a cobertura dos bicos do quarto pode ser suficiente para atingir a área do banheiro — o projeto hidráulico define a cobertura. O vistoriador verifica se a cobertura total do quarto (incluindo banheiro) está garantida.",
    },
    {
      question: "Bico embutido no forro do quarto (recessed) pode ser substituído por bico comum?",
      answer:
        "Não sem ajuste estético e verificação técnica. Bico recessed tem tampa de acabamento que cobre a instalação no forro — substituto comum ficará visível. Além da questão estética, o bico substituto deve ter o mesmo K e temperatura de ativação do original — e ser compatível com o projeto hidráulico da zona. A DRD2 especifica o substituto correto antes da instalação.",
    },
    {
      question: "Hotel com reforma parcial — precisa de novo projeto de sprinkler?",
      answer:
        "Depende do escopo da reforma. Reformas que não alteram o sistema de sprinkler (pintura, mobiliário) não exigem novo projeto. Reformas que movem paredes (alterando a cobertura dos bicos), que adicionam quartos, ou que afetam o forro onde os bicos estão instalados exigem verificação técnica e, se necessário, atualização do projeto com nova ART.",
    },
    {
      question: "Hotel pode usar o mesmo sistema de sprinkler para o restaurante interno?",
      answer:
        "Pode, mas o restaurante pode ter classificação de risco diferente dos quartos. Restaurante com cozinha industrial tem risco Ordinário G2 (óleos de fritura, superfícies quentes) — diferente dos quartos (Leve ou Ordinário G1). Se estiverem na mesma zona de sprinkler, a VGA deve ser dimensionada para o risco mais alto. O ideal é setorizar restaurante e quartos em zonas separadas.",
    },
    {
      question: "Flat residencial de longa permanência tem os mesmos requisitos de sprinkler que hotel?",
      answer:
        "Para fins de CBPMESP, a classificação de uso determina os requisitos. Flat com uso hoteleiro (ocupação temporária, recepção, serviços) é tratado como hotel. Flat com uso residencial permanente é tratado como residência. A distinção afeta os requisitos de sistema de alarme (anunciador nos quartos) e o tipo de bico exigido. A DRD2 orienta sobre a classificação correta para cada caso.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/instalacao-vga-sprinkler-sp", label: "Instalação de VGA" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de VGA" },
    { href: "/teste-comissionamento-vga-sp", label: "Trip Test de VGA" },
    { href: "/adequacao-vga-avcb-sp", label: "Adequação de VGA para AVCB" },
    { href: "/sprinkler-hotel-avcb-sp", label: "Sprinkler para Hotel" },
  ],
  ctaFinal: {
    heading: "VÁLVULA DE GOVERNO E ALARME (VGA) PARA HOTEL EM SP — TRIP TEST + INTEGRAÇÃO HOTELEIRA + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. Verificação de integração com sistema de alerta de quartos. Laudo por zona para renovação do AVCB.",
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
