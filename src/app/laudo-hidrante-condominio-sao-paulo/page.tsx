import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/laudo-hidrante-condominio-sao-paulo",
  meta: {
    title: "Laudo de Hidrante para Condomínio em SP | DRD2 Engenharia",
    description: "Laudo técnico do sistema de hidrantes para condomínios em São Paulo. IT 22/2025, teste de pressão por pavimento, mangueiras e reservatório. ART CREA-SP inclusa. DRD2 Engenharia.",
  },
  eyebrow: "IT 22 — Sistema de Hidrantes para Condomínio",
  h1Line1: "Laudo de Hidrante",
  h1Line2: "para Condomínio em São Paulo",
  heroBg: "/images/blog/blog_hero_avcb_condominio.webp",
  introP1: "O maior problema dos hidrantes em condomínios residenciais não é a pressão — é a mangueira. Mangueiras de lona que ficam guardadas enroladas por anos desenvolvem rachaduras internas invisíveis, e só mostram o problema quando são esticadas na vistoria do CBPMESP: a mangueira estoura ou vaza, o sistema reprova e o processo de AVCB trava. A DRD2 testa cada mangueira antes da vistoria.",
  introP2: "O laudo técnico do sistema de hidrantes para condomínios é emitido pela DRD2 conforme a IT 22/2025 do CBPMESP, com teste de pressão em cada ponto, verificação do reservatório de incêndio e ART CREA-SP inclusa. Para condomínios com AVCB próximo do vencimento, o laudo é parte obrigatória da renovação.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Laudo de Hidrante — Condomínio SP" },
  ],
  occupationType: "condomínio",
  h2_principal: {
    heading: "O que o CBPMESP verifica no sistema de hidrantes do condomínio",
    body: "A IT 22/2025 exige que o sistema de hidrantes em condomínios atenda pressão mínima de 10 mca (metros de coluna de água) no ponto mais desfavorável — geralmente o hidrante do último pavimento. A pressão precisa ser testada com a bomba de incêndio em funcionamento, com as válvulas abertas simulando uso simultâneo conforme o número de hidrantes exigido pelo projeto.",
    body2: "Além da pressão, o CBPMESP verifica: estado das mangueiras (sem rachaduras, comprimento correto, esguicho funcionando), válvulas de gaveta (abertura e fechamento sem emperramento), reservatório de incêndio com volume mínimo e boia funcionando, e bomba de incêndio com painel de comando e partida automática operacional.",
  },
  h2_riscos: {
    heading: "Por que hidrantes de condomínios reprovam na vistoria",
    intro: "Esses são os não-conformes mais frequentes identificados pela DRD2 em condomínios de SP:",
    itens: [
      {
        titulo: "Mangueira deteriorada por falta de uso",
        desc: "Mangueiras que ficam dobradas nos abrigos por anos perdem flexibilidade e desenvolvem rachaduras na borracha interna. Na pressão de teste, rasgam. Substituição obrigatória antes da vistoria.",
      },
      {
        titulo: "Pressão insuficiente no último andar",
        desc: "Condomínios altos com bomba subdimensionada ou com perda de carga na tubulação envelhecida não atingem os 10 mca exigidos nos andares superiores. Problema detectado no teste de pressão.",
      },
      {
        titulo: "Reservatório de incêndio sem volume mínimo",
        desc: "Condomínios que ampliaram sem recalcular o reservatório frequentemente têm volume abaixo do mínimo exigido pela IT 22. O cálculo depende do número de hidrantes e do tempo de operação — 60 minutos é o padrão.",
      },
      {
        titulo: "Bomba de incêndio sem partida automática",
        desc: "A bomba precisa partir automaticamente quando a pressão da rede cai abaixo do set point — sem dependência de acionamento manual. Bombas com boia elétrica ou pressostato defeituoso não atendem.",
      },
      {
        titulo: "Válvulas bloqueadas ou sem identificação",
        desc: "Válvulas de gaveta no registro de recalque ou no ramal de incêndio precisam estar abertas e identificadas. Válvulas fechadas por engano durante obra ou manutenção são descobertas no teste.",
      },
      {
        titulo: "Abrigo de mangueira com chave ou cadeado",
        desc: "Abrigo de hidrante com chave ou cadeado que o bombeiro não consiga abrir inviabiliza o combate a incêndio. O CBPMESP exige abrigo acessível sem ferramenta ou com chave no próprio abrigo.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 emite o laudo de hidrante para condomínios",
    etapas: [
      {
        numero: "01",
        titulo: "Vistoria de todos os abrigos",
        desc: "Percorremos todos os pontos de hidrante do condomínio — garagem, halls dos pavimentos e área externa — verificando estado da mangueira, esguicho, válvula e identificação do abrigo.",
      },
      {
        numero: "02",
        titulo: "Teste de pressão com manômetro calibrado",
        desc: "Abrimos os hidrantes nos pontos mais desfavoráveis com a bomba em operação e medimos a pressão estática e dinâmica. Resultado registrado em laudo fotográfico com data e leitura.",
      },
      {
        numero: "03",
        titulo: "Verificação do reservatório e da bomba",
        desc: "Medimos o volume útil do reservatório de incêndio, testamos a boia, o pressostato e a partida automática da bomba — incluindo o retorno ao regime normal após o teste.",
      },
      {
        numero: "04",
        titulo: "Teste de mangueiras sob pressão",
        desc: "Cada mangueira é testada sob pressão hidrostática para identificar vazamentos e deterioração interna antes da vistoria do CBPMESP — evitando surpresas durante a inspeção oficial.",
      },
      {
        numero: "05",
        titulo: "Laudo com ART e memorial de cálculo",
        desc: "Laudo técnico com ART CREA-SP, memorial de cálculo de pressão, resultado dos testes por ponto, fotos e declaração de conformidade com a IT 22/2025.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Documentação de hidrante exigida no AVCB do condomínio",
    body1: "O processo de AVCB ou renovação do condomínio exige os seguintes documentos relativos ao sistema de hidrantes:",
    alerta: "Laudo de hidrante vencido é a causa mais comum de Comunique-se em renovações de condomínio. O CBPMESP exige laudo com data de vistoria compatível com o período do processo.",
    itens: [
      { titulo: "Laudo técnico IT 22/2025 com ART", desc: "Documento principal com resultado dos testes de pressão por ponto, estado das mangueiras e declaração de conformidade. ART CREA-SP recolhida inclusa." },
      { titulo: "Memorial de cálculo hidráulico", desc: "Cálculo da pressão no ponto mais desfavorável, volume do reservatório e dimensionamento da bomba — conforme IT 22/2025." },
      { titulo: "Relatório fotográfico por abrigo", desc: "Foto de cada abrigo, válvula, mangueira, esguicho e painel da bomba — evidências que o CBPMESP pode solicitar como complemento ao laudo." },
      { titulo: "Laudo de manutenção da bomba de incêndio", desc: "Comprovante de manutenção preventiva da bomba dos últimos 12 meses, incluindo teste de partida automática e manual." },
      { titulo: "Registro de volume do reservatório de incêndio", desc: "Medição do volume útil do reservatório com registro de data — para comprovar que o volume mínimo está mantido, especialmente em condomínios com consumo d'água elevado." },
    ],
    closing: "O síndico que organiza esses documentos com antecedência tem a renovação do AVCB muito mais rápida. A DRD2 pode fazer a gestão periódica.",
  },
  h2_quando: {
    heading: "Quando o condomínio precisa renovar o laudo de hidrante",
    body1: "O laudo de hidrante é exigido em toda renovação do AVCB — geralmente a cada 3 anos. Também é obrigatório quando há reforma que altera a rede hidráulica, quando há troca da bomba de incêndio e quando o laudo anterior está vencido no momento do processo.",
    body2: "Condomínios que trocaram as mangueiras ou reformaram a casa de máquinas precisam de novo laudo mesmo que o anterior ainda esteja dentro do prazo — qualquer alteração no sistema invalida o laudo existente.",
  },
  h2_escolher: {
    heading: "Manutenção preventiva de hidrantes no condomínio",
    body1: "A IT 22 exige manutenção anual do sistema de hidrantes. A DRD2 recomenda teste semestral das mangueiras — especialmente em condomínios com mais de 15 anos, onde a degradação da borracha interna é mais rápida.",
    body2: "O custo de um contrato de manutenção preventiva anual é equivalente ao custo de substituição de duas ou três mangueiras danificadas em emergência. Condomínios com contrato ativo raramente têm surpresas na renovação do AVCB.",
  },
  h2_cobertura: {
    heading: "Atendimento para condomínios em São Paulo e Grande SP",
    body1: "A DRD2 atende laudos de hidrante para condomínios residenciais e comerciais em toda São Paulo Capital e Grande SP. Para condomínios com múltiplas torres, o teste é realizado em todas as torres no mesmo dia para garantir que as condições do sistema são idênticas.",
    body2: "Emitimos laudos com relatório por torre e por pavimento — formato aceito pelo CBPMESP para condomínios com mais de uma edificação no mesmo processo.",
  },
  faqs: [
    {
      question: "Com que frequência o sistema de hidrantes do condomínio precisa ser testado?",
      answer: "A IT 22 exige manutenção anual com teste de pressão documentado. A DRD2 recomenda teste semestral das mangueiras em condomínios com mais de 10 anos de instalação.",
    },
    {
      question: "O condomínio precisa de hidrante de recalque externo?",
      answer: "Depende da área e da altura da edificação. Condomínios acima de certa altura precisam de hidrante de recalque (coluna siamesa) na fachada para que o caminhão do Corpo de Bombeiros possa pressurizar o sistema em caso de incêndio.",
    },
    {
      question: "Quanto custa a troca de mangueiras de hidrante?",
      answer: "O custo de substituição de mangueiras depende do comprimento (15m ou 30m) e do diâmetro. A DRD2 fornece o orçamento de substituição após o teste — e coordena a troca antes da vistoria do CBPMESP.",
    },
    {
      question: "O laudo de hidrante tem validade?",
      answer: "O laudo técnico acompanha o processo de AVCB. O relatório de manutenção preventiva precisa ser renovado anualmente. Para a renovação do AVCB, um novo laudo com data de vistoria atualizada é sempre exigido.",
    },
    {
      question: "A bomba de incêndio do condomínio é diferente da bomba de água potável?",
      answer: "Sim. A bomba de incêndio é exclusiva para o sistema de combate a incêndio e não pode ser a mesma bomba de pressurização da água potável. Condomínios que compartilham as bombas estão em não-conformidade.",
    },
  ],
  linksInternos: [
    { href: "/renovacao-avcb-condominio-sao-paulo", label: "Renovação AVCB Condomínio SP" },
    { href: "/avcb-condominio-sao-paulo", label: "AVCB para Condomínio em SP" },
    { href: "/hidrantes", label: "Sistema de Hidrantes SP" },
    { href: "/laudo-alarme-incendio-condominio-sao-paulo", label: "Laudo de Alarme — Condomínio" },
    { href: "/laudo-sprinkler-condominio-sao-paulo", label: "Laudo de Sprinkler — Condomínio" },
    { href: "/empresa-avcb-sao-paulo", label: "Empresa de AVCB em SP" },
  ],
  ctaFinal: {
    heading: "Laudo de hidrante para o seu condomínio — teste real de pressão",
    body: "Testamos cada ponto do sistema com manômetro calibrado antes da vistoria do CBPMESP. Laudo com ART e sem surpresas.",
    cta: "Solicitar laudo de hidrante para o condomínio",
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
