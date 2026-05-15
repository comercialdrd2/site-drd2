import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/laudo-sprinkler-condominio-sao-paulo",
  meta: {
    title: "Laudo de Sprinkler para Condomínio em SP | DRD2 Engenharia",
    description: "Laudo técnico do sistema de sprinklers para condomínios em São Paulo. IT 23/2025, teste de fluxo, obstrução de cabeças e pressão por pavimento. ART CREA-SP inclusa. DRD2 Engenharia.",
  },
  eyebrow: "IT 23 — Sistema de Sprinklers para Condomínio",
  h1Line1: "Laudo de Sprinkler",
  h1Line2: "para Condomínio em São Paulo",
  heroBg: "/images/blog/blog_hero_avcb_condominio.webp",
  introP1: "O principal problema dos sprinklers em condomínios é a obstrução que o próprio morador cria sem saber: forro de gesso instalado sobre a cabeça de sprinkler, armário posicionado a menos de 45cm da cabeça, ou lâmpada aquecida presa próxima do bulbo de vidro. Qualquer obstáculo que impeça a abertura ou o espalhamento do jato é não-conforme — e o CBPMESP verifica isso em cada pavimento na vistoria.",
  introP2: "A DRD2 emite laudo técnico do sistema de sprinklers para condomínios conforme a IT 23/2025 do CBPMESP, com teste de fluxo no ponto mais desfavorável, verificação de obstruções por pavimento e ART CREA-SP inclusa. Para condomínios com AVCB próximo do vencimento, o laudo é parte obrigatória da renovação.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Laudo de Sprinkler — Condomínio SP" },
  ],
  occupationType: "condomínio",
  h2_principal: {
    heading: "O que o CBPMESP verifica no sistema de sprinkler do condomínio",
    body: "A IT 23/2025 exige que o sistema de sprinklers seja testado com pressão de fluxo mínima de 7 mca (metros de coluna de água) na cabeça mais desfavorável — com a válvula de fluxo aberta simulando acionamento real. O teste precisa ser documentado com leitura de manômetro calibrado e data do teste.",
    body2: "Além do teste de pressão, o CBPMESP verifica: ausência de obstruções acima e abaixo das cabeças (distância mínima de 45cm abaixo e 100cm acima), bulbos íntegros (sem corrosão ou pintura sobre o bulbo), válvula de controle sinalizada e desbloqueada, e reservatório com volume mínimo para operação de 60 minutos.",
  },
  h2_riscos: {
    heading: "Problemas mais comuns em sprinklers de condomínios",
    intro: "Esses são os não-conformes mais frequentes encontrados pela DRD2 em vistorias de condomínios em SP:",
    itens: [
      {
        titulo: "Forro de gesso instalado sobre a cabeça",
        desc: "Morador que instalou forro rebaixado tapou a cabeça de sprinkler — o sistema não funciona com forro bloqueando. O CBPMESP reprova a unidade e pode reprovar o processo inteiro.",
      },
      {
        titulo: "Armário ou prateleira a menos de 45cm da cabeça",
        desc: "A IT 23 exige 45cm livres abaixo de cada cabeça para garantir o espalhamento do jato. Armário alto instalado pelos moradores viola essa distância mínima.",
      },
      {
        titulo: "Bulbo de vidro com pintura ou corrosão",
        desc: "Pintura aplicada sobre o bulbo (em reformas do apartamento) muda a temperatura de acionamento ou impede o rompimento. Bulbo com corrosão pode não romper quando necessário.",
      },
      {
        titulo: "Pressão insuficiente nos últimos andares",
        desc: "Condomínios altos com perda de carga na tubulação envelhecida não atingem 7 mca nos andares superiores. A bomba pode estar correta, mas a tubulação com incrustações reduz a pressão útil.",
      },
      {
        titulo: "Válvula de controle fechada ou sem identificação",
        desc: "Válvulas de controle por pavimento ou por setor fechadas por engano durante manutenção de encanamento deixam o andar sem proteção. Válvulas sem identificação são não-conformes.",
      },
      {
        titulo: "Teste de fluxo desatualizado",
        desc: "Laudo com teste de fluxo realizado há mais de 12 meses não é aceito na renovação do AVCB. O teste precisa ser feito no período próximo ao protocolo.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 emite o laudo de sprinkler para condomínios",
    etapas: [
      {
        numero: "01",
        titulo: "Vistoria por pavimento com amostragem de UHs",
        desc: "Verificamos as áreas comuns de todos os pavimentos e uma amostragem das unidades privativas — especialmente as que passaram por reforma recente.",
      },
      {
        numero: "02",
        titulo: "Verificação de obstruções e distâncias",
        desc: "Em cada cabeça vistoriada, medimos a distância livre abaixo, verificamos obstruções laterais e inspecionamos o bulbo visualmente — pintura, corrosão ou deformação.",
      },
      {
        numero: "03",
        titulo: "Teste de fluxo no ponto mais desfavorável",
        desc: "Abrimos a válvula de teste do pavimento mais alto com a bomba em operação e medimos a pressão de fluxo — resultado registrado com manômetro calibrado e data.",
      },
      {
        numero: "04",
        titulo: "Verificação da válvula de controle e do reservatório",
        desc: "Cada válvula de controle é verificada em posição aberta e com identificação correta. O reservatório é medido para confirmar volume mínimo de 60 minutos de operação.",
      },
      {
        numero: "05",
        titulo: "Laudo com ART e planta por pavimento",
        desc: "Laudo técnico com ART CREA-SP, resultado dos testes, lista de não-conformes identificados e planta por pavimento com localização das cabeças — documento exigido pelo CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Documentação do sprinkler para o AVCB do condomínio",
    body1: "O processo de AVCB ou renovação do condomínio exige os seguintes documentos do sistema de sprinklers:",
    alerta: "Cabeça de sprinkler obstruída por forro ou armário é não-conforme individual da unidade — mas pode travar o processo de AVCB de todo o condomínio. O síndico precisa regularizar antes da vistoria.",
    itens: [
      { titulo: "Laudo técnico IT 23/2025 com ART CREA-SP", desc: "Declaração de conformidade do sistema com resultado dos testes de fluxo e lista de verificação por pavimento. ART recolhida inclusa." },
      { titulo: "Relatório de teste de fluxo por ponto", desc: "Leitura de pressão de fluxo no ponto mais desfavorável com identificação do equipamento de medição e data do teste." },
      { titulo: "Planta por pavimento com localização das cabeças", desc: "Planta de cada andar com marcação das cabeças, válvulas de controle e rota da tubulação principal." },
      { titulo: "Relatório de manutenção anual", desc: "Manutenção preventiva dos últimos 12 meses incluindo inspeção visual das cabeças, teste de válvulas e verificação do reservatório." },
    ],
    closing: "Condomínio com moradores que fizeram reformas sem comunicar o síndico: a DRD2 identifica as unidades com não-conformes antes da vistoria e orienta a regularização.",
  },
  h2_quando: {
    heading: "Quando o condomínio precisa renovar o laudo de sprinkler",
    body1: "O laudo é exigido na renovação do AVCB (a cada 3 anos para a maioria dos condomínios) e quando há troca de cabeças de sprinkler, quando há reforma em área comum que altere o espaçamento das cabeças e quando a válvula de controle principal é substituída.",
    body2: "Condomínios que trocaram o forro de alguma área comum sem verificar a posição das cabeças precisam de nova vistoria — o forro pode ter obstruído cabeças que antes estavam livres.",
  },
  h2_escolher: {
    heading: "Comunicado aos moradores: o papel do síndico",
    body1: "O síndico é responsável por comunicar aos moradores as restrições de reforma que afetam o sistema de sprinkler: nenhum forro rebaixado pode ser instalado sem verificação prévia da posição das cabeças, e nenhum armário pode ser posicionado a menos de 45cm de uma cabeça.",
    body2: "A DRD2 pode elaborar um comunicado técnico para distribuição aos moradores, explicando as restrições e o procedimento para solicitar vistoria antes de reformas que possam afetar o sistema.",
  },
  h2_cobertura: {
    heading: "Atendimento para condomínios em SP e Grande SP",
    body1: "A DRD2 atende laudos de sprinkler para condomínios residenciais e comerciais em toda São Paulo Capital e Grande SP. Para condomínios com múltiplas torres, a vistoria é coordenada em blocos.",
    body2: "Emitimos laudo por torre e por setor — formato aceito pelo CBPMESP para condomínios com mais de uma edificação no mesmo processo de AVCB.",
  },
  faqs: [
    {
      question: "O morador pode instalar forro de gesso se houver sprinkler no apartamento?",
      answer: "Pode, desde que o forro seja instalado com abertura ou roseta ao redor de cada cabeça de sprinkler — permitindo que a cabeça atue normalmente. Forro completamente fechado sobre a cabeça é proibido e compromete o AVCB do condomínio inteiro.",
    },
    {
      question: "O que acontece se uma cabeça de sprinkler abrir por acidente?",
      answer: "A cabeça que abre libera água até que a válvula de controle do ramal seja fechada manualmente. O dano hídrico pode ser significativo. Para fechar, o zelador ou a portaria precisam saber a localização da válvula de controle de cada pavimento — por isso a sinalização das válvulas é obrigatória.",
    },
    {
      question: "Com que frequência as cabeças de sprinkler precisam ser trocadas?",
      answer: "Cabeças de sprinkler não têm prazo de validade fixo, mas precisam ser substituídas quando há corrosão visível, pintura sobre o bulbo, deformação mecânica ou quando o fabricante especifica vida útil máxima. A inspeção anual identifica cabeças que precisam de troca.",
    },
    {
      question: "O condomínio precisa de sprinkler nos apartamentos ou só nas áreas comuns?",
      answer: "Depende da data de aprovação do projeto e da altura do edifício. Projetos aprovados após certa data para edifícios acima de determinada altura exigem sprinkler nas unidades privativas também. Projetos anteriores podem ter apenas áreas comuns. A DRD2 verifica o projeto original na vistoria.",
    },
    {
      question: "O laudo de sprinkler é diferente do laudo de hidrante?",
      answer: "Sim. São sistemas diferentes com normas diferentes (IT 23 para sprinkler, IT 22 para hidrante) e laudos separados. O CBPMESP exige ambos nos processos de condomínios que têm os dois sistemas instalados.",
    },
  ],
  linksInternos: [
    { href: "/renovacao-avcb-condominio-sao-paulo", label: "Renovação AVCB Condomínio SP" },
    { href: "/sprinklers", label: "Sistema de Sprinklers SP" },
    { href: "/laudo-hidrante-condominio-sao-paulo", label: "Laudo de Hidrante — Condomínio" },
    { href: "/laudo-alarme-incendio-condominio-sao-paulo", label: "Laudo de Alarme — Condomínio" },
    { href: "/avcb-condominio-sao-paulo", label: "AVCB para Condomínio em SP" },
    { href: "/empresa-avcb-sao-paulo", label: "Empresa de AVCB em SP" },
  ],
  ctaFinal: {
    heading: "Laudo de sprinkler para o seu condomínio — vistoria por pavimento",
    body: "Identificamos obstruções, testamos o fluxo real e emitimos laudo com ART antes da vistoria do CBPMESP.",
    cta: "Solicitar laudo de sprinkler para o condomínio",
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
