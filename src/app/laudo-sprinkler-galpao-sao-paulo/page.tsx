import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/laudo-sprinkler-galpao-sao-paulo",
  meta: {
    title: "Laudo de Sprinkler para Galpão Industrial em SP | DRD2 Engenharia",
    description: "Laudo técnico do sistema de sprinklers para galpões industriais em São Paulo. IT 23/2025, tipo de cabeça por densidade de estoque, cálculo hidráulico real. ART CREA-SP inclusa.",
  },
  eyebrow: "IT 23 — Sistema de Sprinklers para Galpão Industrial",
  h1Line1: "Laudo de Sprinkler",
  h1Line2: "para Galpão Industrial em São Paulo",
  heroBg: "/images/blog/blog_hero_avcb_galpao.webp",
  introP1: "Em galpão industrial, o tipo de cabeça de sprinkler depende diretamente da altura do estoque. Prateleiras que chegam a 6 ou 8 metros de altura criam bolsões de calor que as cabeças do teto não conseguem alcançar a tempo — nesses casos, a IT 23/2025 exige cabeças intermediárias instaladas dentro das prateleiras (in-rack sprinklers). Galpão que trocou o layout de estoque sem atualizar o sistema está em não-conformidade.",
  introP2: "A DRD2 emite laudo técnico do sistema de sprinklers para galpões conforme a IT 23/2025, com cálculo de densidade de descarga compatível com o material e a altura do estoque atual, teste de fluxo e ART CREA-SP inclusa. Para galpões com mudança de ocupação ou aumento de altura de prateleiras, o laudo precisa ser refeito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Laudo de Sprinkler — Galpão SP" },
  ],
  occupationType: "galpão industrial",
  h2_principal: {
    heading: "Como a altura e o tipo de estoque determinam o sprinkler do galpão",
    body: "A IT 23/2025 classifica o risco do galpão em leve, ordinário ou extraordinário — com base no material armazenado e na densidade de armazenagem. Para cada nível de risco, há uma densidade de descarga mínima em mm/min e uma área de operação definida. Galpões com plásticos, papel, borracha ou tecido têm risco mais alto e exigem densidade maior.",
    body2: "A altura do estoque é o segundo fator crítico: acima de 3,5m de altura de armazenagem, cabeças apenas no teto do galpão podem não ser suficientes. A IT 23 define a necessidade de cabeças in-rack (dentro das prateleiras) por faixas de altura — 3,5m a 5,5m, 5,5m a 8m e acima de 8m têm exigências crescentes.",
  },
  h2_riscos: {
    heading: "Não-conformes mais comuns em sprinklers de galpões",
    intro: "Esses são os problemas mais frequentes identificados pela DRD2 em vistorias de galpões industriais em SP:",
    itens: [
      {
        titulo: "Cabeças do teto sem cobertura para estoque alto",
        desc: "Prateleiras acima de 3,5m criam barreira térmica que impede a ativação das cabeças do teto a tempo. Sem cabeças in-rack, o sistema não é adequado para a altura atual do estoque.",
      },
      {
        titulo: "Sistema dimensionado para produto anterior ao locatário atual",
        desc: "Galpão com novo locatário que armazena produto de risco mais alto (plástico em vez de metal, tecido em vez de papel) tem sistema subdimensionado para a densidade de descarga exigida.",
      },
      {
        titulo: "Cabeças obstruídas por empilhamento acima da altura máxima",
        desc: "Paletes empilhados a menos de 45cm abaixo das cabeças obstruem o espalhamento do jato. A IT 23 exige espaço livre mínimo — violado frequentemente em galpões operados no limite da capacidade.",
      },
      {
        titulo: "Pressão de fluxo abaixo da especificação do projeto",
        desc: "Bomba com desgaste ou tubulação com incrustações pode não entregar a pressão de fluxo necessária para a densidade de descarga exigida. O laudo sem teste real de fluxo não comprova conformidade.",
      },
      {
        titulo: "Válvulas de controle fechadas por locatário anterior",
        desc: "Troca de locatário frequentemente deixa válvulas de controle em posição incorreta — fechadas por manutenção anterior não revertida. Setor inteiro do galpão sem proteção.",
      },
      {
        titulo: "Cabeças com corrosão por ambiente agressivo",
        desc: "Galpões com produtos químicos, umidade elevada ou variação extrema de temperatura têm maior taxa de corrosão nas cabeças. Cabeça corroída pode não funcionar no momento do incêndio.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 emite o laudo de sprinkler para galpões",
    etapas: [
      {
        numero: "01",
        titulo: "Levantamento do estoque e altura de prateleiras",
        desc: "Identificamos o material armazenado, a densidade e a altura máxima de armazenagem — parâmetros que determinam o nível de risco e a necessidade ou não de cabeças in-rack.",
      },
      {
        numero: "02",
        titulo: "Verificação da cobertura e obstruções",
        desc: "Mapeamos cada cabeça no teto e, quando existentes, nas prateleiras. Verificamos distâncias mínimas acima de cada palete ou pilha de estoque.",
      },
      {
        numero: "03",
        titulo: "Teste de fluxo com cálculo hidráulico",
        desc: "Abrimos a válvula de teste da área mais desfavorável e medimos a pressão de fluxo — comparamos com o cálculo hidráulico do projeto para verificar se a densidade de descarga é atingida.",
      },
      {
        numero: "04",
        titulo: "Inspeção visual das cabeças",
        desc: "Cada cabeça é inspecionada para corrosão, deformação, pintura ou obstrução do orifício. Cabeças com qualquer não-conforme visual são registradas para substituição antes da vistoria.",
      },
      {
        numero: "05",
        titulo: "Laudo com cálculo hidráulico e ART CREA-SP",
        desc: "Laudo técnico com cálculo de densidade de descarga para o estoque atual, resultado dos testes de fluxo e ART CREA-SP — documento exigido pelo CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Documentação de sprinkler para o AVCB do galpão",
    body1: "O processo de AVCB de galpões industriais com sistema de sprinkler exige os seguintes documentos:",
    alerta: "Galpão que mudou de atividade ou aumentou a altura de estoque sem recalcular o sistema de sprinkler está em não-conformidade — mesmo que o laudo anterior esteja dentro do prazo.",
    itens: [
      { titulo: "Laudo técnico IT 23/2025 com ART CREA-SP", desc: "Declaração de conformidade com resultado dos testes de fluxo e verificação de cobertura para o uso atual do galpão." },
      { titulo: "Cálculo hidráulico para o nível de risco atual", desc: "Cálculo de densidade de descarga, área de operação e pressão necessária — compatível com o material e a altura de armazenagem atual." },
      { titulo: "Planta com localização das cabeças", desc: "Planta do galpão com localização de todas as cabeças (teto e in-rack quando existentes), válvulas de controle e rota da tubulação principal." },
      { titulo: "Relatório de inspeção visual das cabeças", desc: "Resultado da inspeção visual de cada cabeça — corrosão, pintura, deformação — com fotografia de qualquer não-conforme identificado." },
      { titulo: "Laudo de manutenção anual com teste de válvulas", desc: "Manutenção preventiva dos últimos 12 meses incluindo abertura e fechamento de cada válvula de controle e teste da bomba." },
    ],
    closing: "Mudou a altura das prateleiras ou o tipo de produto? Informe a DRD2 antes de qualquer vistoria — o laudo precisa refletir a situação atual do galpão.",
  },
  h2_quando: {
    heading: "Quando o galpão precisa de novo laudo de sprinkler",
    body1: "Além da renovação trienal do AVCB, um novo laudo é necessário quando: há mudança de locatário com produto de risco diferente, quando a altura de armazenagem aumenta além da especificação do projeto, quando há instalação de mezanino que modifica o espaçamento das cabeças e quando há troca da bomba ou alteração da rede de tubulação.",
    body2: "Galpões logísticos que recebem cargas variáveis ao longo do ano devem verificar anualmente se o produto de maior risco armazenado está dentro da especificação do sistema. A DRD2 oferece revisão anual como parte do contrato de manutenção.",
  },
  h2_escolher: {
    heading: "Galpão com mezanino: quando o sprinkler do teto não é suficiente",
    body1: "Mezaninos em galpões criam um segundo nível de estoque que as cabeças do teto não protegem adequadamente. A IT 23 exige cabeças no nível do mezanino — tanto abaixo da estrutura quanto sobre o piso do mezanino, dependendo da configuração.",
    body2: "A DRD2 projeta e instala as cabeças adicionais necessárias para mezaninos — e emite o laudo para a configuração completa, incluindo o cálculo hidráulico revisado para o sistema com os novos pontos.",
  },
  h2_cobertura: {
    heading: "Atendimento para galpões industriais em SP e Grande SP",
    body1: "A DRD2 atende galpões industriais, logísticos e de distribuição em São Paulo Capital, Guarulhos, Osasco, Santo André, Barueri e municípios do eixo Anhanguera, Dutra e Castello Branco.",
    body2: "Para condomínios logísticos com múltiplos galpões, realizamos o laudo consolidado com relatório por unidade — garantindo consistência técnica e reduzindo custo.",
  },
  faqs: [
    {
      question: "Meu galpão tem prateleiras de 5 metros. Precisa de sprinkler in-rack?",
      answer: "Depende do material armazenado. Para materiais de risco ordinário (caixas de papelão com produtos não inflamáveis), 5m pode ser coberto por cabeças de teto com o projeto correto. Para plástico, borracha, tecido ou papel, a IT 23 exige cabeças in-rack a partir de 3,5m. A DRD2 calcula na vistoria.",
    },
    {
      question: "Posso empilhar paletes até a altura da cabeça de sprinkler?",
      answer: "Não. A IT 23 exige espaço livre mínimo de 45cm abaixo de cada cabeça. Paletes empilhados acima desse limite obstruem o espalhamento do jato e colocam o sistema em não-conformidade.",
    },
    {
      question: "O sprinkler do galpão precisa de bomba exclusiva?",
      answer: "Sim. A bomba de incêndio do sistema de sprinkler não pode ser compartilhada com outros usos. Para galpões com sistema de hidrante e de sprinkler, cada sistema precisa de bomba própria — ou uma bomba com capacidade calculada para os dois sistemas simultaneamente.",
    },
    {
      question: "O laudo de sprinkler substitui o laudo de hidrante?",
      answer: "Não. São sistemas diferentes com laudos separados. Galpões que têm os dois sistemas precisam de laudo de hidrante (IT 22) e laudo de sprinkler (IT 23) — ambos são exigidos pelo CBPMESP no processo de AVCB.",
    },
    {
      question: "Quanto custa o laudo de sprinkler para galpão?",
      answer: "O valor depende da área do galpão, do nível de risco e do número de cabeças. A DRD2 apresenta orçamento após vistoria gratuita — com cálculo hidráulico e ART inclusa no valor do laudo.",
    },
  ],
  linksInternos: [
    { href: "/avcb-galpao-industrial-sao-paulo", label: "AVCB para Galpão Industrial SP" },
    { href: "/sprinklers", label: "Sistema de Sprinklers SP" },
    { href: "/laudo-hidrante-galpao-sao-paulo", label: "Laudo de Hidrante — Galpão" },
    { href: "/empresa-avcb-sao-paulo", label: "Empresa de AVCB em SP" },
    { href: "/quanto-custa-avcb-sao-paulo", label: "Quanto Custa o AVCB em SP" },
    { href: "/renovacao-avcb", label: "Renovação de AVCB em SP" },
  ],
  ctaFinal: {
    heading: "Laudo de sprinkler para o seu galpão — cálculo pelo estoque atual",
    body: "Calculamos a densidade de descarga para o material e altura de armazenagem atual. Laudo compatível com qualquer mudança de locatário.",
    cta: "Solicitar laudo de sprinkler para meu galpão",
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
