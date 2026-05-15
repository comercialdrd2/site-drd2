import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/vga-shopping-center-sp",
  meta: {
    title: "Válvula de Governo e Alarme (VGA) para Shopping Center em SP — Múltiplas Zonas e AVCB | DRD2 Engenharia",
    description: "A DRD2 projeta e mantém Válvula de Governo e Alarme (VGA) para shopping centers em SP. Múltiplas zonas por setor (lojas, praça de alimentação, estacionamento), trip test e laudo para AVCB. IT 23/25. Diagnóstico gratuito.",
  },
  eyebrow: "Válvula de Governo e Alarme (VGA) para Shopping Center — IT 23/25, NBR 10897 e AVCB em São Paulo",
  h1Line1: "Válvula de Governo e Alarme",
  h1Line2: "para Shopping em SP — Múltiplas Zonas e AVCB",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "Shopping center tem o sistema de sprinkler mais complexo em número de zonas: lojas âncoras com risco diferente do corredor, praça de alimentação com risco Ordinário G2 (óleos de fritura), estacionamento coberto com sistema específico para veículos e depósito de lojistas com risco Extra. Cada setor é uma zona de sprinkler com sua própria VGA, seu próprio DN calculado e seu próprio trip test. Administrar esse sistema exige rastreabilidade por zona e manutenção programada para garantir que todas as VGAs estejam conformes na renovação do AVCB.",
  introP2:
    "A DRD2 projeta, instala e mantém VGA para shopping centers em SP — desde shoppings de bairro com 3 a 5 zonas até centros comerciais de grande porte com 20 ou mais VGAs. Diagnóstico técnico gratuito com mapeamento de todas as zonas existentes e verificação de conformidade de cada VGA com a IT 23/25 vigente.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Válvula de Governo e Alarme (VGA) para Shopping Center" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "Por que shopping center tem múltiplas Válvulas de Governo e Alarme (VGAs) com DNs diferentes?",
    body: "A setorização de um shopping center em zonas de sprinkler não é arbitrária — ela reflete a diferença de risco entre os setores e o limite técnico de bicos por zona. A IT 23/25 limita o número de bicos por zona e define densidades de projeto diferentes por classificação de risco. Um corredor de shopping (risco Leve) tem densidade de 4,1 mm/min; a praça de alimentação (risco Ordinário G2) tem 8,1 mm/min; o depósito de lojistas (risco Ordinário G2 ou Extra G1) tem 8,1 a 12,2 mm/min. Cada densidade gera uma demanda de vazão diferente — e, portanto, um DN diferente para a VGA.",
    body2:
      "Shoppings com loja âncora de grandes dimensões frequentemente têm VGA exclusiva para essa loja — a loja âncora tem área de operação que pode demandar VGA DN100 ou DN150 independente do resto do shopping. O storeroom e o depósito das âncoras (supermercado, atacado) têm classificação de risco extra que eleva ainda mais a demanda de DN.",
  },
  h2_riscos: {
    heading: "6 problemas mais frequentes em Válvula de Governo e Alarme (VGA) de shopping center",
    intro:
      "Esses problemas são específicos para shopping centers — onde a complexidade do sistema e a quantidade de zonas elevam o risco de não-conformidade acumulada.",
    itens: [
      {
        titulo: "Praça de alimentação com VGA dimensionada como risco Leve",
        desc: "Praça de alimentação com fritadeiras, grelhadores e fogões industriais tem risco Ordinário G2 — não Leve. VGA dimensionada com densidade de 4,1 mm/min em vez de 8,1 mm/min estará com demanda de vazão 2x menor do que o necessário. O trip test mostrará pressão residual abaixo do mínimo — reprovação direta.",
      },
      {
        titulo: "Estacionamento sem sistema correto — VGA wet pipe em garagem aberta",
        desc: "Estacionamentos cobertos têm requisitos específicos na IT 23/25. Garagens fechadas (semi-subterrâneas ou cobertas) geralmente exigem sprinkler com bicos de orientação específica para cobrir veículos. VGA de wet pipe padrão pode ser inadequada se a garagem tiver risco de temperaturas negativas em regiões mais frias ou configuração que exija sistema especial.",
      },
      {
        titulo: "Pressostatos de múltiplas VGAs sem identificação por zona na central",
        desc: "Central de alarme do shopping com sinal único de 'sprinkler ativo' para 15 VGAs diferentes não permite identificar onde o sistema ativou. O mapeamento de pontos na central deve identificar cada VGA com o setor que ela cobre. Shoppings com reformas de central de alarme frequentemente perdem essa identificação.",
      },
      {
        titulo: "Ausência de trip test em zonas de depósito de lojistas",
        desc: "O relatório de manutenção do shopping frequentemente cobre as zonas do corredor e das lojas âncoras — mas deixa os depósitos de lojistas sem trip test documentado. O CBPMESP pode solicitar evidência de manutenção de cada zona na vistoria.",
      },
      {
        titulo: "VGAs instaladas em shafts sem acesso após reformas de lojistas",
        desc: "Lojistas realizam reformas que podem bloquear o acesso a VGAs instaladas nos shafts do corredor ou da área de serviço. A administradora do shopping é responsável por garantir que o acesso às VGAs seja mantido independente de reformas de locatários.",
      },
      {
        titulo: "Expansão do shopping sem revisão do dimensionamento das VGAs das zonas adjacentes",
        desc: "Expansão de área que conecta uma nova nave a uma zona existente pode aumentar o número de bicos da zona acima do limite — ou pode adicionar setores de risco mais alto que alteram a densidade de projeto. A VGA existente pode estar subdimensionada para a nova configuração.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 mantém o sistema de Válvula de Governo e Alarme (VGA) de shopping center",
    etapas: [
      {
        numero: "DIAGNÓSTICO",
        titulo: "Mapeamento completo de todas as zonas e VGAs",
        desc: "Levantamento de todas as VGAs do shopping: localização, DN, fabricante/modelo, classificação de risco da zona coberta, estado do trim e situação da integração com a central de alarme. Geração de mapa de zonas com identificação de cada VGA.",
      },
      {
        numero: "VERIFICAÇÃO",
        titulo: "Análise de conformidade por zona",
        desc: "Para cada zona: verificação se o DN da VGA é compatível com a classificação de risco e o número de bicos atual. Verificação da integração do pressostato na central com identificação correta. Identificação de zonas com não-conformidades ou sem documentação.",
      },
      {
        numero: "SEMESTRAL",
        titulo: "Inspeção visual e teste de pressostato",
        desc: "Inspeção visual de todas as VGAs: estado dos componentes de trim, ausência de micro-vazamento (gota na saída da campainha), leitura dos manômetros. Teste de cada pressostato na central para verificação de sinal e identificação de zona.",
      },
      {
        numero: "ANUAL",
        titulo: "Trip test por zona — programado por setor",
        desc: "Trip test de cada zona com programação que minimize o impacto na operação do shopping: zonas de corredor nos horários de menor fluxo, zonas de lojas âncoras em horário acordado com a loja. Cada zona tem seu próprio relatório de trip test.",
      },
      {
        numero: "QUANDO NECESSÁRIO",
        titulo: "Adequação de VGAs com não-conformidade",
        desc: "Para zonas com VGA subdimensionada, trim incompleto ou pressostato não integrado: especificação do escopo mínimo de adequação, execução e trip test de confirmação. Priorização por gravidade: zonas de maior risco (praça de alimentação, depósito) têm prioridade.",
      },
      {
        numero: "DOCUMENTAÇÃO",
        titulo: "Dossiê consolidado para AVCB do shopping",
        desc: "Dossiê de manutenção consolidado com relatório por zona: resultado de cada trip test, estado de cada VGA e situação de conformidade. Formato aceito pelo CBPMESP para renovação do AVCB de edificações com múltiplos sistemas.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que o CBPMESP verifica na vistoria de AVCB de shopping center",
    body1:
      "A vistoria de shopping center para AVCB é uma das mais abrangentes do CBPMESP — cobre todos os sistemas de proteção contra incêndio de todas as zonas. O sistema de sprinkler e as VGAs são verificados por setor, não como um sistema único.",
    alerta:
      "Shopping com AVCB vencido tem obrigação de manter o sistema de sprinkler operacional mesmo sem AVCB. A Prefeitura de São Paulo pode autuar shoppings com sistemas de proteção inoperantes independente do AVCB — especialmente após incidentes em outros shoppings do país.",
    itens: [
      {
        titulo: "Documentação por zona — separada por setor",
        desc: "O CBPMESP pode solicitar documentação específica de cada zona: projeto de sprinkler com memorial de cálculo de DN, ART de projeto, laudo de comissionamento e manutenção. Para shoppings com 15 zonas, são 15 conjuntos de documentação.",
      },
      {
        titulo: "Trip test de cada zona documentado",
        desc: "Relatório de trip test de cada zona com resultado numérico: pressão de alimentação e sistema, tempo de campainha, sinal de pressostato e pressão residual. Relatório único sem resultado por zona não é aceito.",
      },
      {
        titulo: "Identificação de zona na central de alarme",
        desc: "O vistoriador verifica que cada pressostato está mapeado na central com identificação do setor. Central sem mapeamento por zona ou com identificação genérica é não-conformidade.",
      },
      {
        titulo: "Acessibilidade de todas as VGAs",
        desc: "O vistoriador percorre o shopping verificando o acesso a cada VGA. VGAs bloqueadas por reformas de lojistas ou por fechamentos de shaft são responsabilidade da administradora — não do lojista.",
      },
    ],
    closing:
      "A DRD2 prepara o dossiê completo de manutenção de VGA por zona para shoppings — mapeamento, relatórios de trip test e laudo de conformidade para a renovação do AVCB.",
  },
  h2_quando: {
    heading: "Quando realizar o trip test no shopping center?",
    body1:
      "O trip test anual de shopping center deve ser planejado com pelo menos 30 dias de antecedência: acordado com as lojas âncoras, comunicado à administradora e agendado nos horários de menor fluxo de visitantes. Para shoppings com mais de 10 zonas, o trip test completo pode ser dividido em 2 a 3 visitas.",
    body2:
      "Trip test imediato: quando qualquer VGA apresentar micro-vazamento (campainha soando sem incêndio), quando o pressostato de uma zona gerar alarme falso na central, ou quando o CBPMESP emitir Comunique-se sobre o sistema de sprinkler. A DRD2 prioriza atendimento de Comunique-se ativo.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para Válvula de Governo e Alarme (VGA) de shopping center em SP?",
    body1:
      "A DRD2 gerencia sistemas com múltiplas VGAs com mapeamento completo por zona e programação de trip test coordenada com a operação do shopping. Cada zona tem seu relatório individual — rastreabilidade completa para o AVCB.",
    body2:
      "Contrato de manutenção anual com trip test programado: a DRD2 agenda todas as zonas no início do contrato e entrega o dossiê consolidado antes da renovação do AVCB — sem correria de última hora.",
  },
  h2_cobertura: {
    heading: "Válvula de Governo e Alarme (VGA) para shopping center em toda a Grande SP",
    body1:
      "A DRD2 atende shoppings, galerias e centros comerciais em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para shoppings com vistoria de AVCB próxima e documentação incompleta, a DRD2 atua com urgência no levantamento de zonas, trip test e preparação do dossiê para protocolo.",
  },
  faqs: [
    {
      question: "Quem é responsável pela VGA da loja âncora — a âncora ou a administradora?",
      answer:
        "Depende do contrato de locação. Em shoppings onde a loja âncora tem área própria com sistema de sprinkler independente, a responsabilidade pela manutenção da VGA pode ser da loja. Nos corredores e áreas comuns, a responsabilidade é sempre da administradora. Para o CBPMESP, o responsável pelo AVCB geral do shopping responde por todo o sistema — independente de acordos contratuais internos.",
    },
    {
      question: "Shopping com ampliação recente — precisa refazer o cálculo hidráulico das VGAs das zonas adjacentes?",
      answer:
        "Sim, se a ampliação adicionou bicos à zona existente ou conectou setores de risco diferente. A DRD2 verifica se a nova configuração altera a demanda de vazão além da capacidade da VGA existente. Se o DN atual ainda é adequado, apenas a ART de projeto atualizado é necessária. Se for insuficiente, o projeto de substituição da VGA é emitido com justificativa de cálculo.",
    },
    {
      question: "Praça de alimentação de shopping precisa de bicos de temperatura específica?",
      answer:
        "Sim. Bicos convencionais com temperatura de ativação de 57°C (padrão) podem disparar por calor de equipamentos de cozinha antes de um incêndio real. Para praças de alimentação com equipamentos que geram calor acima de 40°C no teto, bicos de 79°C ou 100°C são especificados para evitar falsas ativações. A DRD2 verifica a temperatura de ativação dos bicos existentes na vistoria.",
    },
    {
      question: "O estacionamento coberto do shopping precisa de VGA separada?",
      answer:
        "Geralmente sim — garagens cobertas têm zona de sprinkler separada das áreas comerciais, com VGA própria. O dimensionamento considera o tipo de garagem (aberta ou fechada, aérea ou subterrânea) e o risco específico (veículos). A DRD2 verifica a configuração do sistema de estacionamento e confirma a conformidade com os requisitos específicos da IT 23/25 para garagens.",
    },
    {
      question: "Lojista pode fazer reforma que altera o número de bicos da zona sem comunicar?",
      answer:
        "Tecnicamente não — qualquer alteração no sistema de sprinkler exige autorização da administradora e atualização do projeto. Na prática, lojistas frequentemente realocam bicos em reformas sem comunicação. O risco para a administradora é ter zonas com mais bicos do que o limite original do projeto — o que altera a demanda de vazão e pode subdimensionar a VGA. A DRD2 verifica o número atual de bicos por zona em cada manutenção.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/projeto-vga-sistema-sprinkler-sp", label: "Projeto de VGA" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de VGA" },
    { href: "/teste-comissionamento-vga-sp", label: "Trip Test de VGA" },
    { href: "/adequacao-vga-avcb-sp", label: "Adequação de VGA para AVCB" },
    { href: "/sprinkler-shopping-center-avcb-sp", label: "Sprinkler para Shopping" },
  ],
  ctaFinal: {
    heading: "VÁLVULA DE GOVERNO E ALARME (VGA) PARA SHOPPING CENTER EM SP — MAPEAMENTO DE ZONAS + TRIP TEST + DOSSIÊ AVCB",
    body: "Diagnóstico técnico gratuito. Trip test de todas as zonas com relatório por setor. Dossiê consolidado para renovação do AVCB.",
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
