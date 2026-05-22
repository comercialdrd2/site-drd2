import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/laudo-hidrante-restaurante-sao-paulo",
  meta: {
    title: "Laudo de Hidrante para Restaurante em SP | DRD2 Engenharia",
    description: "Laudo técnico do sistema de hidrantes para restaurantes e bares em São Paulo. IT 22/2025, cobertura da cozinha industrial, mangueira e pressão testadas. ART CREA-SP inclusa.",
  },
  eyebrow: "IT 22 — Sistema de Hidrantes para Restaurante",
  h1Line1: "Laudo de Hidrante",
  h1Line2: "para Restaurante e Bar em São Paulo",
  heroBg: "/images/blog/blog_hero_avcb_restaurante.webp",
  introP1: "No restaurante, o hidrante mais crítico é o que fica próximo à cozinha industrial — e é exatamente esse que mais frequentemente está inacessível. Botijão de gás mal posicionado, prateleira de estoque ou freezer bloqueando o abrigo: o CBPMESP reprova o sistema se o acesso ao hidrante demorar mais de 3 segundos para ser liberado. A DRD2 vistoria o acesso físico antes de emitir o laudo.",
  introP2: "O laudo técnico do sistema de hidrantes para restaurantes é emitido conforme a IT 22/2025, com teste de pressão na mangueira mais distante da cozinha, verificação do reservatório e ART CREA-SP inclusa. Para restaurantes com AVCB vencendo ou em processo de primeira emissão, o laudo é parte obrigatória da documentação.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Laudo de Hidrante — Restaurante SP" },
  ],
  occupationType: "restaurante",
  h2_principal: {
    heading: "Exigências do sistema de hidrantes em restaurantes pelo CBPMESP",
    body: "Restaurantes são classificados no Grupo B pelo Decreto 56.819/2011. A necessidade de sistema de hidrantes depende da área e da carga de incêndio. Restaurantes acima de 750m² ou com cozinha industrial acima de certa potência calorífica precisam de sistema de hidrante interno. Restaurantes menores podem se enquadrar apenas com extintor e mangotinho — a DRD2 faz esse enquadramento na vistoria gratuita.",
    body2: "Para restaurantes com sistema de hidrante obrigatório, a IT 22 exige cobertura de todo o salão e da cozinha, com pressão mínima de 10 mca no ponto mais desfavorável. A cozinha industrial tem carga de incêndio mais alta que o salão — o dimensionamento precisa considerar esse diferencial.",
  },
  h2_riscos: {
    heading: "Problemas mais comuns em hidrantes de restaurantes",
    intro: "Esses são os não-conformes mais frequentes identificados pela DRD2 em vistorias de restaurantes em SP:",
    itens: [
      {
        titulo: "Hidrante da cozinha bloqueado por equipamento ou estoque",
        desc: "Freezer, prateleira de insumos ou botijão de GLP posicionado na frente do abrigo de hidrante impede o acesso rápido. O CBPMESP reprova o sistema independente da pressão estar correta.",
      },
      {
        titulo: "Mangueira com comprimento insuficiente para a cozinha",
        desc: "Cozinhas industriais longas precisam de mangueira de 30m — não de 15m. Mangueira curta que não alcança o fundo da cozinha com folga para manuseio é não-conforme.",
      },
      {
        titulo: "Pressão insuficiente no hidrante mais distante",
        desc: "Restaurantes com hidrante único cobrindo salão e cozinha frequentemente têm pressão insuficiente na extremidade mais distante. A bomba ou a tubulação precisam ser verificadas.",
      },
      {
        titulo: "Ausência de reservatório de incêndio",
        desc: "Alguns restaurantes conectam o sistema de hidrante diretamente à rede pública, sem reservatório. Queda de pressão da rede deixa o sistema sem funcionamento. IT 22 exige reservatório próprio.",
      },
      {
        titulo: "Esguicho sem regulagem ou com vazamento",
        desc: "Esguicho regulável com mecanismo emperrado ou com vedação deteriorada não entrega o jato conforme especificação. Em emergência, o esguicho que não regula inviabiliza o combate próximo.",
      },
      {
        titulo: "Abrigo sem identificação ou com porta travada",
        desc: "Abrigo de hidrante sem identificação padrão CBPMESP ou com fechamento por cadeado — mesmo que a chave esteja disponível — é não-conforme. O abrigo precisa abrir sem ferramenta.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 emite o laudo de hidrante para restaurantes",
    etapas: [
      {
        numero: "01",
        titulo: "Vistoria com mapeamento de acessos",
        desc: "Verificamos o acesso físico a cada abrigo de hidrante — incluindo a medição do tempo de abertura e a verificação de obstáculos na área de operação da mangueira.",
      },
      {
        numero: "02",
        titulo: "Teste de pressão no ponto mais desfavorável",
        desc: "Abrimos o hidrante mais distante da bomba com a mangueira estendida até o ponto de uso na cozinha e medimos a pressão dinâmica — resultado registrado em laudo fotográfico.",
      },
      {
        numero: "03",
        titulo: "Teste da mangueira sob pressão",
        desc: "A mangueira é pressurizada e percorrida ao longo de todo o comprimento para identificar vazamentos ou deterioração interna — especialmente importante em restaurantes com umidade alta.",
      },
      {
        numero: "04",
        titulo: "Verificação do reservatório e da bomba",
        desc: "Volume do reservatório conferido, boia testada e bomba verificada em partida automática — incluindo o tempo de resposta após a queda de pressão.",
      },
      {
        numero: "05",
        titulo: "Laudo com ART e relatório fotográfico",
        desc: "Laudo técnico com ART CREA-SP, resultado dos testes por ponto, fotos de cada abrigo e declaração de conformidade com a IT 22/2025.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Documentação de hidrante para o AVCB do restaurante",
    body1: "Para o processo de AVCB ou renovação do restaurante, os documentos do sistema de hidrante são:",
    alerta: "Restaurante com hidrante não testado não tem laudo válido. O CBPMESP exige comprovação de funcionamento — não apenas a existência do equipamento.",
    itens: [
      { titulo: "Laudo técnico IT 22/2025 com ART", desc: "Declaração de conformidade do sistema com resultado dos testes reais. Assinado por engenheiro CREA-SP com ART recolhida." },
      { titulo: "Relatório de teste de pressão por ponto", desc: "Leitura de pressão estática e dinâmica em cada hidrante, com identificação do equipamento de medição e data do teste." },
      { titulo: "Planta com localização dos hidrantes", desc: "Planta baixa do restaurante com marcação dos abrigos, rota da mangueira até o ponto mais distante de uso e localização da bomba e reservatório." },
      { titulo: "Laudo de manutenção anual", desc: "Comprovante de manutenção preventiva dos últimos 12 meses incluindo teste de mangueiras, esguicho e bomba." },
    ],
    closing: "Não sabe se o seu restaurante precisa de hidrante ou só de extintor? A DRD2 faz o enquadramento correto gratuitamente na vistoria inicial.",
  },
  h2_quando: {
    heading: "Quando o restaurante precisa do laudo de hidrante",
    body1: "O laudo é exigido na renovação do AVCB e em processos de primeira emissão para restaurantes com sistema de hidrante obrigatório. Também é exigido quando há reforma que altera o layout do salão ou da cozinha, quando o restaurante amplia a área e quando há troca ou instalação de novo equipamento de combate a incêndio.",
    body2: "Restaurantes que fizeram ampliação sem comunicar o CBPMESP precisam atualizar o projeto de incêndio inteiro — incluindo o dimensionamento do hidrante para a nova área. A DRD2 identifica essa necessidade na vistoria gratuita.",
  },
  h2_escolher: {
    heading: "Quando o restaurante não precisa de hidrante",
    body1: "Restaurantes com área abaixo de 750m² e sem cozinha industrial de grande porte frequentemente se enquadram no sistema simplificado da IT 22 — apenas extintores e mangotinho, sem hidrante de coluna. A DRD2 define o enquadramento correto na vistoria — e não instala sistema mais caro do que o necessário.",
    body2: "Restaurantes que investiram em sistema de hidrante sem necessidade real têm mais custo de manutenção e laudo sem retorno proporcional. O dimensionamento correto desde o início é mais eficiente.",
  },
  h2_cobertura: {
    heading: "Atendimento para restaurantes em SP e Grande SP",
    body1: "A DRD2 atende restaurantes, bares, pizzarias e redes de fast food em toda São Paulo Capital e Grande SP. Vistoria técnica em até 48h — laudo emitido em até 5 dias úteis.",
    body2: "Para redes de restaurante com múltiplas unidades, realizamos laudos consolidados com relatório por unidade — reduzindo custo e prazo em relação a contratar empresa diferente por unidade.",
  },
  faqs: [
    {
      question: "Todo restaurante precisa de sistema de hidrante?",
      answer: "Não. Restaurantes com área abaixo de certo limiar e sem cozinha de grande porte podem se enquadrar apenas com extintores e mangotinho. A necessidade de hidrante depende da área, do número de pavimentos e da carga de incêndio da cozinha. A DRD2 define isso na vistoria gratuita.",
    },
    {
      question: "A mangueira do hidrante precisa alcançar toda a cozinha?",
      answer: "Sim. Todo ponto da edificação — incluindo o fundo da cozinha — precisa ser alcançado pela mangueira com folga para manuseio. Para cozinhas longas, mangueira de 30m é geralmente necessária.",
    },
    {
      question: "O botijão de GLP pode ficar próximo do hidrante?",
      answer: "O botijão não pode bloquear o acesso ao abrigo de hidrante. Além disso, a IT do GLP exige distância mínima entre o botijão e fontes de calor e entre o botijão e saídas de emergência. A DRD2 verifica ambas as conformidades na mesma vistoria.",
    },
    {
      question: "Com que frequência o sistema de hidrante do restaurante precisa de manutenção?",
      answer: "A IT 22 exige manutenção anual. Para restaurantes com cozinha industrial, a DRD2 recomenda inspeção semestral da mangueira mais próxima da cozinha — a umidade e o calor aceleram a degradação.",
    },
    {
      question: "O laudo de hidrante vale para o processo de alvará da Prefeitura também?",
      answer: "O processo de AVCB no CBPMESP é um requisito para o alvará de funcionamento da Prefeitura. O laudo de hidrante faz parte do processo de AVCB — indiretamente, portanto, é parte da documentação necessária para o alvará.",
    },
  ],
  linksInternos: [
    { href: "/avcb-para-restaurante-sao-paulo", label: "AVCB para Restaurante em SP" },
    { href: "/alvara-bombeiro-restaurante-sao-paulo", label: "Alvará Bombeiro — Restaurante" },
    { href: "/laudo-alarme-incendio-restaurante-sao-paulo", label: "Laudo de Alarme — Restaurante" },
    { href: "/hidrantes", label: "Sistema de Hidrantes SP" },
    { href: "/renovacao-avcb-restaurante-sao-paulo", label: "Renovação AVCB Restaurante" },
    { href: "/empresa-avcb-sao-paulo", label: "Empresa de AVCB em SP" },
  ],
  ctaFinal: {
    heading: "Laudo de hidrante para o seu restaurante — teste real antes da vistoria",
    body: "Testamos pressão e acesso aos abrigos antes do CBPMESP chegar. Laudo com ART, sem surpresas na vistoria.",
    cta: "Solicitar laudo de hidrante para meu restaurante",
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
