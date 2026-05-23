import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/laudo-hidrante-escola-sao-paulo",
  meta: {
    title: "Laudo de Hidrante para Escola em SP | DRD2 Engenharia",
    description: "Laudo técnico do sistema de hidrantes para escolas, creches e faculdades em São Paulo. IT 22/2025, cobertura de ginásio e campus, pressão real testada. ART CREA-SP inclusa.",
  },
  eyebrow: "IT 22 — Sistema de Hidrantes para Escola",
  h1Line1: "Laudo de Hidrante",
  h1Line2: "para Escola e Creche em São Paulo",
  heroBg: "/images/blog/blog_hero_avcb_creche.webp",
  introP1: "Escolas com campus espalhado por vários blocos têm um problema específico no sistema de hidrantes: a pressão que é suficiente no bloco principal frequentemente não chega com força no ginásio ou no bloco mais afastado. O CBPMESP testa a pressão no ponto mais desfavorável — e se o ginásio estiver descoberto ou com pressão insuficiente, o processo de AVCB é reprovado.",
  introP2: "A DRD2 emite laudo técnico do sistema de hidrantes para escolas conforme a IT 22/2025, com mapeamento de todos os blocos do campus, teste de pressão no ponto mais desfavorável e ART CREA-SP inclusa. Para escolas com AVCB em processo de renovação, identificamos as pendências antes do protocolo.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Laudo de Hidrante — Escola SP" },
  ],
  occupationType: "escola",
  h2_principal: {
    heading: "Como o sistema de hidrantes é dimensionado em escolas",
    body: "Escolas são classificadas no Grupo E pelo Decreto 69.118/2024. O sistema de hidrantes precisa cobrir todos os blocos com cobertura permanente — não apenas o prédio principal. Para campuses com múltiplos blocos, a rede hidráulica precisa alcançar cada bloco com pressão mínima de 10 mca no hidrante mais distante da bomba.",
    body2: "Ginásios cobertos com estrutura metálica têm carga de incêndio diferente das salas de aula de alvenaria — o dimensionamento leva isso em conta. Escolas com cantina industrial têm exigência adicional de cobertura da área de cocção. A DRD2 calcula o sistema para o campus como um todo, não edificação por edificação.",
  },
  h2_riscos: {
    heading: "Não-conformes mais comuns em hidrantes de escolas",
    intro: "Esses são os problemas encontrados com mais frequência pela DRD2 em vistorias de escolas em SP:",
    itens: [
      {
        titulo: "Ginásio ou quadra coberta sem hidrante",
        desc: "Ginásios construídos depois do sistema original frequentemente ficam sem cobertura de hidrante. A IT 22 exige que toda edificação coberta tenha cobertura — independente do uso ser esportivo.",
      },
      {
        titulo: "Pressão insuficiente no bloco mais afastado",
        desc: "Campuses extensos com rede hidráulica subdimensionada não atingem 10 mca no hidrante mais distante. O problema é detectado no teste com a bomba em operação — e a solução pode ser uma bomba de reforço ou tubulação nova.",
      },
      {
        titulo: "Reservatório dimensionado apenas para o prédio principal",
        desc: "Escola que construiu novos blocos sem recalcular o reservatório pode ter volume insuficiente para operação simultânea dos hidrantes de todo o campus.",
      },
      {
        titulo: "Abrigo de hidrante vandalizado ou com peças faltando",
        desc: "Escolas têm maior risco de vandalismo nos abrigos de hidrante — especialmente os localizados em áreas externas ou de recreio. Mangueira faltando ou esguicho removido são não-conformes imediatos.",
      },
      {
        titulo: "Cantina com hidrante de acesso bloqueado por equipamento",
        desc: "O abrigo próximo à cantina é frequentemente usado como suporte para equipamentos ou armazenagem temporária de insumos — bloqueando o acesso em emergência.",
      },
      {
        titulo: "Rede hidráulica antiga com perda de carga por corrosão",
        desc: "Escolas com mais de 20 anos de instalação frequentemente têm tubulação com corrosão interna que reduz o diâmetro útil e aumenta a perda de carga — resultando em pressão insuficiente nos pontos distantes.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 vistoria e emite o laudo para escolas",
    etapas: [
      {
        numero: "01",
        titulo: "Mapeamento do campus completo",
        desc: "Identificamos todos os blocos, coberturas e edificações acessórias — incluindo ginásio, cantina, quadra coberta, secretaria e portaria — para garantir cobertura total.",
      },
      {
        numero: "02",
        titulo: "Teste de pressão no bloco mais distante",
        desc: "O teste é realizado com a bomba em operação no hidrante mais distante da casa de bombas — o ponto mais desfavorável do campus. Resultado registrado com leitura de manômetro calibrado.",
      },
      {
        numero: "03",
        titulo: "Verificação de abrigos e estado das mangueiras",
        desc: "Cada abrigo é vistoriado: estado da mangueira, esguicho, válvula, identificação e acesso livre. Abrigos vandalizados ou com peças faltando são registrados como não-conformes.",
      },
      {
        numero: "04",
        titulo: "Verificação do reservatório e da bomba",
        desc: "Volume do reservatório calculado para operação simultânea de todos os hidrantes exigidos pelo projeto — especialmente importante em campuses com múltiplos blocos.",
      },
      {
        numero: "05",
        titulo: "Laudo por bloco com ART CREA-SP",
        desc: "Laudo técnico com resultado por edificação, planta do campus com cobertura da rede hidráulica e ART CREA-SP recolhida — documento aceito pelo CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Documentação de hidrante para o AVCB da escola",
    body1: "O processo de AVCB ou renovação de escolas exige os seguintes documentos do sistema de hidrantes:",
    alerta: "Escola com Autorização de Funcionamento junto à Secretaria de Educação precisa de AVCB ativo. Laudo de hidrante vencido trava o processo de renovação.",
    itens: [
      { titulo: "Laudo técnico IT 22/2025 com ART CREA-SP", desc: "Laudo por bloco ou edificação com resultado dos testes de pressão e declaração de conformidade. ART recolhida inclusa." },
      { titulo: "Planta do campus com rede hidráulica", desc: "Planta de todo o campus com traçado da rede hidráulica, localização dos hidrantes por bloco e identificação do ponto mais desfavorável testado." },
      { titulo: "Memorial de cálculo hidráulico", desc: "Cálculo da pressão por trecho da rede e do volume do reservatório para o campus completo." },
      { titulo: "Relatório de manutenção anual", desc: "Manutenção preventiva dos últimos 12 meses incluindo teste de mangueiras por abrigo, estado dos esguichos e teste da bomba." },
    ],
    closing: "Escola com novos blocos construídos após o AVCB original: o laudo de hidrante precisa ser refeito para cobrir as novas edificações. A DRD2 identifica essa necessidade na vistoria.",
  },
  h2_quando: {
    heading: "Quando a escola precisa renovar o laudo de hidrante",
    body1: "O laudo é exigido na renovação do AVCB e quando há novas edificações no campus. Também é necessário quando há reforma que altera o traçado da rede hidráulica ou quando há troca da bomba de incêndio.",
    body2: "Escolas que recebem verba do governo para reforma precisam atualizar o AVCB após a obra — incluindo o laudo de hidrante para as áreas reformadas. A DRD2 pode acompanhar o processo durante a obra para antecipar pendências.",
  },
  h2_escolher: {
    heading: "Manutenção preventiva de hidrantes na escola",
    body1: "A manutenção dos abrigos de hidrante em escola tem um componente adicional ao da maioria das ocupações: vandalismo. A DRD2 recomenda inspeção trimestral dos abrigos em áreas de recreio e quadra — para verificar se mangueiras e esguichos estão completos.",
    body2: "Escolas com contrato de manutenção preventiva anual raramente têm surpresas na renovação do AVCB — e têm mais facilidade na renovação da Autorização de Funcionamento junto à Secretaria de Educação.",
  },
  h2_cobertura: {
    heading: "Atendimento para escolas em SP e Grande SP",
    body1: "A DRD2 atende escolas de educação básica, creches, faculdades e centros de treinamento em toda São Paulo Capital e Grande SP. Vistoria agendada no contraturno ou nas férias para não interromper as aulas.",
    body2: "Para redes de escola com múltiplas unidades, emitimos laudos consolidados com relatório por unidade — com consistência técnica e custo otimizado.",
  },
  faqs: [
    {
      question: "A quadra esportiva coberta da escola precisa de hidrante?",
      answer: "Sim, se a cobertura for permanente (estrutura metálica, lona, telha). Quadras completamente abertas não precisam. O critério é se há cobertura que concentre calor e retarde a dispersão de fumaça.",
    },
    {
      question: "A creche tem as mesmas exigências de hidrante que a escola?",
      answer: "Creches seguem as mesmas normas (IT 22, Grupo E), com exigências adicionais por atender crianças menores. O dimensionamento do sistema de combate a incêndio é similar, mas a brigada de evacuação tem requisitos específicos para crianças não ambulantes.",
    },
    {
      question: "A escola precisa de bomba de incêndio exclusiva?",
      answer: "Sim. A bomba de incêndio não pode ser a mesma bomba de pressurização da água potável. Escolas que usam a mesma bomba para os dois sistemas estão em não-conformidade com a IT 22.",
    },
    {
      question: "Quanto custa o laudo de hidrante para escola?",
      answer: "O valor depende do número de blocos, área total e quantidade de hidrantes. A DRD2 apresenta orçamento após vistoria gratuita — com ART inclusa no valor do laudo.",
    },
    {
      question: "O laudo serve para a Secretaria de Educação e para o CBPMESP?",
      answer: "O laudo técnico com ART CREA-SP serve para o processo de AVCB no CBPMESP. A Autorização de Funcionamento da Secretaria de Educação exige o AVCB ativo — que inclui o laudo de hidrante como parte do processo.",
    },
  ],
  linksInternos: [
    { href: "/avcb-para-escola-sao-paulo", label: "AVCB para Escola em SP" },
    { href: "/alvara-bombeiro-escola-sao-paulo", label: "Alvará Bombeiro — Escola" },
    { href: "/laudo-alarme-incendio-escola-sao-paulo", label: "Laudo de Alarme — Escola" },
    { href: "/hidrantes", label: "Sistema de Hidrantes SP" },
    { href: "/treinamento-brigada", label: "Treinamento de Brigada" },
    { href: "/empresa-avcb-sao-paulo", label: "Empresa de AVCB em SP" },
  ],
  ctaFinal: {
    heading: "Laudo de hidrante para a sua escola — campus completo",
    body: "Testamos todos os blocos do campus, incluindo ginásio e cantina. Laudo com ART e sem surpresas na vistoria do CBPMESP.",
    cta: "Solicitar laudo de hidrante para minha escola",
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
