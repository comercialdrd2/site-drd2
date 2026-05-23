import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/laudo-sprinkler-hotel-sao-paulo",
  meta: {
    title: "Laudo de Sprinkler para Hotel em SP | DRD2 Engenharia",
    description: "Laudo técnico do sistema de sprinklers para hotéis e pousadas em São Paulo. IT 23/2025, cobertura por UH, decoração obstruindo cabeças, temperatura de banheiro de spa. ART CREA-SP.",
  },
  eyebrow: "IT 23 — Sistema de Sprinklers para Hotel",
  h1Line1: "Laudo de Sprinkler",
  h1Line2: "para Hotel e Pousada em São Paulo",
  heroBg: "/images/blog/blog_hero_casa_repouso_avcb.webp",
  introP1: "O sprinkler em hotéis tem um problema que não existe em outros tipos de edificação: o próprio decorador do hotel frequentemente obstrui as cabeças. Luminária fixada diretamente abaixo da cabeça, cabeceira de cama a menos de 45cm, dossel ou cortinado de teto — todos esses elementos de decoração criam obstáculos que impedem o funcionamento do sprinkler. O CBPMESP vistoria cada UH na renovação do AVCB.",
  introP2: "A DRD2 emite laudo técnico do sistema de sprinklers para hotéis conforme a IT 23/2025, com vistoria por UH, verificação de obstruções por decoração e teste de fluxo no ponto mais desfavorável. Para hotéis com reforma de quartos recente, o laudo precisa ser refeito para documentar a situação atual.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Laudo de Sprinkler — Hotel SP" },
  ],
  occupationType: "hotel",
  h2_principal: {
    heading: "Por que o sprinkler de hotel tem exigências específicas",
    body: "Hotéis são classificados no Grupo H pelo Decreto 69.118/2024 — uma das classificações de maior exigência do CBPMESP. O sistema de sprinkler precisa cobrir cada UH individualmente, os corredores de acesso, a recepção, o restaurante interno e as áreas de serviço. Não há unidade habitacional sem cobertura — cada quarto, suíte e apartamento precisa de ao menos uma cabeça de sprinkler.",
    body2: "A temperatura de ativação das cabeças precisa ser compatível com o uso de cada ambiente. Banheiros com banheira de hidromassagem, sauna ou espaços de spa têm temperatura ambiente mais alta — cabeças com temperatura de ativação padrão (57°C ou 68°C) podem ativar sem incêndio nesses ambientes. A solução é cabeça com temperatura de ativação mais alta ou afastamento adequado da fonte de calor.",
  },
  h2_riscos: {
    heading: "Não-conformes mais comuns em sprinklers de hotéis",
    intro: "Esses são os problemas mais frequentes identificados pela DRD2 em vistorias de hotéis em SP:",
    itens: [
      {
        titulo: "Luminária instalada diretamente abaixo da cabeça",
        desc: "Reformas decorativas que colocam luminárias suspensas logo abaixo das cabeças criam obstáculo para o espalhamento do jato. A IT 23 exige 45cm livres abaixo — a luminária não pode estar nessa área.",
      },
      {
        titulo: "Cabeceira de cama ou armário a menos de 45cm da cabeça",
        desc: "Cabeças instaladas entre duas áreas funcionais do quarto (cama e mesa de trabalho) frequentemente têm cabeceira ou armário dentro da distância mínima permitida.",
      },
      {
        titulo: "Cabeça em banheiro de spa com temperatura incorreta",
        desc: "Banheiros com banheira de hidromassagem, sauna integrada ou aquecimento radiante podem atingir temperaturas que ativam cabeças de resposta padrão. Cabeça de resposta rápida ou temperatura de ativação maior é necessária.",
      },
      {
        titulo: "UH reformada sem verificação do sprinkler",
        desc: "Reforma de quarto que mudou o layout — cama em posição diferente, banheiro ampliado — pode ter deslocado a cabeça para posição que não cobre mais adequadamente a área de maior risco.",
      },
      {
        titulo: "Cobertura insuficiente em UHs de planta diferente",
        desc: "Hotéis com diferentes tipos de UH (standard, superior, suite) frequentemente têm apenas um projeto de sprinkler que não se adapta adequadamente a todas as plantas. Suítes grandes com layout em L ou U têm pontos descobertos.",
      },
      {
        titulo: "Pressão insuficiente em andares altos",
        desc: "Hotéis de grande altura com perda de carga na tubulação dos andares superiores podem não atingir a pressão de fluxo mínima nas UHs do último pavimento.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 vistoria e emite o laudo de sprinkler para hotéis",
    etapas: [
      {
        numero: "01",
        titulo: "Vistoria por tipo de UH",
        desc: "Visitoriamos todos os tipos de UH existentes (standard, superior, suíte) em amostras de cada andar — verificando obstruções por decoração, distâncias mínimas e posição da cabeça em relação ao layout atual.",
      },
      {
        numero: "02",
        titulo: "Verificação de ambientes com temperatura elevada",
        desc: "Banheiros, saunas, spas e áreas com aquecimento especial recebem verificação específica de temperatura de ativação das cabeças instaladas — para garantir ausência de falsas ativações e cobertura real.",
      },
      {
        numero: "03",
        titulo: "Teste de fluxo no ponto mais desfavorável",
        desc: "Teste de pressão de fluxo na UH do andar mais alto e mais distante da bomba — com registro de leitura de manômetro calibrado e data.",
      },
      {
        numero: "04",
        titulo: "Verificação de corredores e áreas comuns",
        desc: "Corredores, recepção, restaurante e lavanderia recebem verificação de cobertura — áreas comuns têm espaçamento de cabeças diferente das UHs.",
      },
      {
        numero: "05",
        titulo: "Laudo por tipo de UH com ART CREA-SP",
        desc: "Laudo técnico com resultado por tipo de UH, planta de amostragem por pavimento, relatório de não-conformes e ART CREA-SP recolhida.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Documentação do sprinkler para o AVCB do hotel",
    body1: "O processo de AVCB ou renovação de hotéis exige os seguintes documentos relativos ao sistema de sprinklers:",
    alerta: "Hotel com UH reprovada por obstrução de decoração tem o AVCB travado. O proprietário precisa regularizar a UH antes da re-vistoria — o que pode significar remover ou deslocar móveis e luminárias.",
    itens: [
      { titulo: "Laudo técnico IT 23/2025 com ART CREA-SP", desc: "Laudo com declaração de conformidade por tipo de UH e por área comum. ART recolhida inclusa." },
      { titulo: "Planta de amostragem por tipo de UH", desc: "Planta de cada tipo de quarto com posição da cabeça, distâncias mínimas verificadas e resultado da vistoria." },
      { titulo: "Relatório de teste de fluxo", desc: "Leitura de pressão no ponto mais desfavorável com identificação do equipamento de medição e data." },
      { titulo: "Relatório de manutenção anual", desc: "Manutenção preventiva dos últimos 12 meses com inspeção visual de cabeças por pavimento e teste de válvulas de controle." },
      { titulo: "Registro de temperatura nos ambientes especiais", desc: "Para hotéis com spa ou sauna, registro da temperatura máxima nesses ambientes — para validar a temperatura de ativação das cabeças instaladas." },
    ],
    closing: "Hotel com reforma de quartos recente: informe a DRD2 antes da vistoria. Mudança de layout pode ter criado obstruções que invalidam o laudo anterior.",
  },
  h2_quando: {
    heading: "Quando o hotel precisa renovar o laudo de sprinkler",
    body1: "O laudo é exigido na renovação do AVCB (geralmente a cada 3 anos para hotéis). Também é necessário após reforma de quartos que alterou o layout ou a decoração, após instalação de spa ou sauna em UHs existentes e quando há troca da bomba ou alteração da rede de tubulação.",
    body2: "Hotéis que adicionam UHs (ampliação) ou que convertem andares de uso misto para uso habitacional precisam de novo laudo para as novas unidades — não apenas atualização do laudo existente.",
  },
  h2_escolher: {
    heading: "Briefing para reformas: o que o decorador precisa saber",
    body1: "A DRD2 disponibiliza para hotéis um briefing técnico para decoradores e arquitetos: quais elementos não podem ser posicionados perto das cabeças de sprinkler, quais tipos de forro são compatíveis com o sistema e como solicitar verificação antes de instalar qualquer elemento próximo às cabeças.",
    body2: "Essa prática preventiva evita que a reforma gere não-conformes descobertos apenas na vistoria do CBPMESP — quando a solução é muito mais cara e demorada.",
  },
  h2_cobertura: {
    heading: "Atendimento para hotéis em SP, litoral e Grande SP",
    body1: "A DRD2 atende hotéis, pousadas, apart-hotéis e hostels em São Paulo Capital, Santos e litoral paulista, e nas principais cidades da Grande SP.",
    body2: "Para redes hoteleiras, emitimos laudo consolidado com relatório por unidade — com consistência técnica e custo otimizado para múltiplas propriedades.",
  },
  faqs: [
    {
      question: "A luminária acima da cama pode ficar próxima da cabeça de sprinkler?",
      answer: "Não. A IT 23 exige 45cm livres abaixo de cada cabeça. Qualquer elemento de decoração — luminária, armação de cama, dossel — dentro dessa distância é não-conforme e precisa ser reposicionado.",
    },
    {
      question: "O banheiro da UH precisa de sprinkler?",
      answer: "Depende da área do banheiro. Banheiros com área acima de certo limiar precisam de cobertura. Banheiros pequenos em UHs standard frequentemente são dispensados — a DRD2 verifica o enquadramento na vistoria.",
    },
    {
      question: "A sauna do hotel pode ter sprinkler?",
      answer: "Sauna a seco com temperatura acima de 100°C é dispensada de sprinkler pela IT 23 — a temperatura destruiria as cabeças. Áreas de spa e ofurô com temperatura mais moderada precisam de cabeças com temperatura de ativação adequada ao ambiente.",
    },
    {
      question: "O laudo de sprinkler substitui o laudo de alarme para o AVCB do hotel?",
      answer: "Não. São sistemas independentes com laudos separados. O CBPMESP exige laudo de alarme (IT 18) e laudo de sprinkler (IT 23) separadamente para hotéis que têm os dois sistemas instalados.",
    },
    {
      question: "Com que frequência as cabeças de sprinkler do hotel precisam ser inspecionadas?",
      answer: "A IT 23 exige inspeção anual. Para hotéis com alto padrão de reforma frequente, a DRD2 recomenda inspeção semestral — reformas de quartos frequentemente criam obstruções inadvertidas.",
    },
  ],
  linksInternos: [
    { href: "/avcb-hoteis-pousadas-sao-paulo", label: "AVCB para Hotel e Pousada SP" },
    { href: "/sprinklers", label: "Sistema de Sprinklers SP" },
    { href: "/laudo-alarme-incendio-hotel-sao-paulo", label: "Laudo de Alarme — Hotel" },
    { href: "/laudo-sprinkler-condominio-sao-paulo", label: "Laudo de Sprinkler — Condomínio" },
    { href: "/empresa-avcb-sao-paulo", label: "Empresa de AVCB em SP" },
    { href: "/renovacao-avcb", label: "Renovação de AVCB em SP" },
  ],
  ctaFinal: {
    heading: "Laudo de sprinkler para o seu hotel — vistoria por UH",
    body: "Verificamos decoração, temperatura e cobertura em cada tipo de quarto. Laudo com ART antes da vistoria do CBPMESP.",
    cta: "Solicitar laudo de sprinkler para meu hotel",
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
