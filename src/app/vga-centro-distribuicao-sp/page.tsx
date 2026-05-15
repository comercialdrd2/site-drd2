import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/vga-centro-distribuicao-sp",
  meta: {
    title: "Válvula de Governo e Alarme (VGA) para Centro de Distribuição em SP — Projeto e AVCB | DRD2 Engenharia",
    description: "A DRD2 projeta Válvula de Governo e Alarme (VGA) para centros de distribuição em SP. DN correto para risco Extra, bicos ESFR, câmara fria, múltiplas zonas e laudo para AVCB. IT 23/25. Diagnóstico gratuito.",
  },
  eyebrow: "Válvula de Governo e Alarme (VGA) para Centro de Distribuição — IT 23/25, NBR 10897 e AVCB em São Paulo",
  h1Line1: "Válvula de Governo e Alarme",
  h1Line2: "para Centro de Distribuição em SP — AVCB",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "Centro de distribuição tem as maiores demandas de vazão de sprinkler entre todos os usos comerciais. CD com armazenamento de plásticos ou papel acima de 6m em prateleiras drive-in tem classificação Extra G1 ou G2 — demanda de vazão de 3.000 a 5.000 L/min por zona. A VGA para esse sistema não é DN80 — é DN150 ou DN200, com pressão de alimentação calculada para garantir pressão residual mínima nos bicos mais desfavorecidos no fundo das prateleiras. Subdimensionar a VGA de um CD não é uma economia — é uma falha de projeto que o trip test irá revelar.",
  introP2:
    "A DRD2 projeta e instala VGA para centros de distribuição em SP com cálculo hidráulico específico para: tipo de mercadoria, altura de empilhamento, tipo de prateleira, presença de câmara fria ou câmara de congelados. Diagnóstico técnico gratuito — incluindo verificação do DN correto para o risco real do CD e planejamento de trip test com menor impacto na operação logística.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Válvula de Governo e Alarme (VGA) para Centro de Distribuição" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "O que determina o DN da Válvula de Governo e Alarme (VGA) de um centro de distribuição?",
    body: "Em um CD, o DN da VGA é determinado pelo pior cenário de descarga: qual zona tem o maior número de bicos em operação simultânea, qual é a pressão mínima exigida no bico mais desfavorecido e qual é a perda de carga na VGA para aquela vazão. Para um CD com risco Extra G1, área de operação de 260 m² e densidade de 12,2 mm/min: a vazão total é de ~3.170 L/min. Uma VGA DN100 com K=500 tem perda de carga de ~(3170/500)² = ~40 bar² — inviável. A VGA DN150 com K=1.000 tem perda de carga de ~(3170/1000)² = ~10 bar² — verificando se a pressão residual ainda é suficiente.",
    body2:
      "CDs com bicos ESFR têm cálculo diferente: os bicos ESFR operam com K alto (K=200, K=242, K=360) e precisam de pressão alta (1,7 a 3,4 bar no bico). Com 12 bicos ESFR K=360 a 2 bar em operação: vazão total de ~12 × 360 × √2 = ~6.110 L/min. Uma VGA DN200 pode ser necessária. O cálculo começa no bico — não na válvula.",
  },
  h2_riscos: {
    heading: "6 erros de Válvula de Governo e Alarme (VGA) específicos para centros de distribuição",
    intro:
      "CDs têm as demandas de sprinkler mais exigentes — e os erros de VGA têm impacto proporcional à criticidade da operação.",
    itens: [
      {
        titulo: "DN calculado para mercadoria original — não para a mercadoria atual",
        desc: "CD projeta VGA para eletrônicos (Ordinário G1) e muda para armazenamento de plásticos (Extra G1) sem revisar o dimensionamento. A VGA está 50% abaixo da demanda necessária. O trip test mostrará pressão residual completamente fora do projeto — e a bomba principal não conseguirá suprir a vazão necessária.",
      },
      {
        titulo: "Câmara de congelados sem dry pipe — wet pipe congelado",
        desc: "CDs de alimentos frequentemente têm câmara de congelados (-18°C a -25°C) e câmara de resfriamento (+2°C a +8°C) integradas ao galpão principal. O sistema wet pipe que funciona no galpão não pode ser usado dentro das câmaras — a rede congelaria. Sistema dry pipe com válvula dilúvio é obrigatório nas câmaras.",
      },
      {
        titulo: "Bicos in-rack sem VGA dedicada — mistura com sistema de teto",
        desc: "CDs com prateleiras muito altas frequentemente têm sistema misto: bicos de teto e bicos in-rack (dentro das prateleiras). Cada nível de in-rack pode ser uma zona separada — com sua própria VGA. Conectar todos os in-rack e os bicos de teto em uma única VGA cria zona com número de bicos acima do limite e demanda impossível de atender.",
      },
      {
        titulo: "Torneira de teste não no fundo do galpão — ponto mais desfavorecido ignorado",
        desc: "Em CDs com 200 ou 300 metros de comprimento, o ponto mais desfavorecido está na extremidade mais distante da VGA. A torneira de teste deve estar nesse ponto — não a 30 metros da VGA por conveniência de instalação. Trip test em ponto incorreto não verifica a pressão real do sistema.",
      },
      {
        titulo: "VGA sem acesso após instalação de prateleiras adicionais",
        desc: "Prateleiras de CD frequentemente são instaladas perto das VGAs para maximizar área de armazenamento. VGA bloqueada por prateleiras com mercadoria — sem espaço para inspeção e manutenção — é não-conformidade imediata na vistoria do CBPMESP.",
      },
      {
        titulo: "Manutenção anual sem trip test — apenas teste de pressostato",
        desc: "Contratos de manutenção de CD que testam apenas o pressostato (abrindo a torneira de dreno auxiliar) sem realizar o trip test completo pela torneira no ponto mais desfavorecido não atendem à exigência da IT 23/25. O CBPMESP pode solicitar o relatório com resultado do trip test completo.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 dimensiona e instala Válvula de Governo e Alarme (VGA) para centro de distribuição",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Levantamento de risco por setor",
        desc: "Levantamento detalhado: tipo de mercadoria por setor, altura máxima de empilhamento, tipo de prateleira (aberta, fechada, drive-in, double-deep), presença de câmara fria ou de congelados, e área de docas/expedição. Cada setor pode ter classificação de risco diferente.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Definição do tipo de sistema por setor",
        desc: "Setor de armazenamento principal: wet pipe com bicos ESFR ou convencional (conforme altura). Câmara de congelados: dry pipe com válvula dilúvio. Câmara de resfriamento: wet pipe com glicol ou pré-ação. Docas e área de expedição: wet pipe padrão. Cada setor com sua VGA ou válvula de controle.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Cálculo hidráulico por zona",
        desc: "Para cada zona: demanda de vazão total (número de bicos em operação × K × √P mínimo). Cálculo de perda de carga na VGA para DN100, DN150 e DN200. Verificação de que a bomba principal tem capacidade suficiente para atender a zona mais demandante.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Projeto com ART e detalhe de trim por zona",
        desc: "Memorial de cálculo com demonstração completa de DN por zona. Detalhe isométrico do trim de cada VGA. ART de projeto CREA-SP cobrindo todos os sistemas do CD.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Instalação com trim completo e acesso preservado",
        desc: "Instalação de cada VGA com localização que preserva acesso permanente — fora da área de prateleiras, com sinalização de área de exclusão. Campainha, pressostato, manômetros e dreno principal instalados conforme projeto.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Trip test de cada zona e laudo consolidado",
        desc: "Trip test de cada zona pela torneira no ponto mais desfavorecido. Relatório individual por zona com resultado numérico. Laudo consolidado para o AVCB do CD com ART de execução CREA-SP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Câmara fria e câmara de congelados no CD — sistemas separados",
    body1:
      "CDs de alimentos com câmara de resfriamento (+2°C a +8°C) e câmara de congelados (-18°C a -25°C) precisam de sistemas de sprinkler separados para cada ambiente — e cada sistema tem sua VGA ou válvula de controle específica.",
    alerta:
      "Câmara de congelados com sistema wet pipe instalado incorretamente (sem dry pipe): a rede congela em operação normal, criando pressão hidrostática que rompe conexões. Em incêndio, o sistema está inoperante — e o proprietário responde pela ausência de proteção.",
    itens: [
      {
        titulo: "Câmara de resfriamento (+2°C a +8°C) — wet pipe com anticongelante",
        desc: "Solução mais comum para câmaras entre 0°C e +10°C: sistema wet pipe com adição de glicol propilênico à água, em concentração adequada para a temperatura mínima da câmara. A VGA é a mesma do sistema principal, mas a rede interna usa solução anticongelante. O trip test desta zona drena a solução — que deve ser reposta e reconcentrada após o teste.",
      },
      {
        titulo: "Câmara de congelados (abaixo de 0°C) — dry pipe com válvula dilúvio",
        desc: "Sistema dry pipe: rede pressurizada com ar comprimido dentro da câmara; a válvula dilúvio (dry pipe valve) mantém a água fora da câmara até o acionamento. Quando um bico abre, a pressão de ar cai, a válvula dilúvio abre e a água entra na rede — já chegando ao bico aberto. O trip test do dry pipe é mais complexo: envolve abertura da válvula e inundação da rede, seguida de drenagem completa.",
      },
      {
        titulo: "Docas de expedição — temperatura ambiente, wet pipe padrão",
        desc: "Docas de expedição com portões frequentemente abertos têm temperatura ambiente — wet pipe convencional com VGA é o sistema adequado. O risco pode ser Ordinário G1 ou G2 dependendo do tipo de mercadoria que transita pela doca.",
      },
      {
        titulo: "Área de carregamento de baterias (forklifts elétricos) — atenção ao risco",
        desc: "Área de carregamento de empilhadeiras elétricas tem risco específico: bateria de chumbo-ácido sob carga gera hidrogênio — risco de explosão. O sistema de sprinkler para essa área deve ser dimensionado corretamente, e o espaço precisa de ventilação adequada separada do sistema de detecção.",
      },
    ],
    closing:
      "A DRD2 projeta e instala VGA e válvula dilúvio para cada setor do CD — wet pipe, dry pipe e pré-ação — com cálculo hidráulico específico e laudo por zona para o AVCB.",
  },
  h2_quando: {
    heading: "Quando revisar a Válvula de Governo e Alarme (VGA) do centro de distribuição?",
    body1:
      "Revisão imediata: quando o tipo de mercadoria armazenada mudar para risco mais alto (eletrônicos → plásticos, alimentos → produtos químicos), quando a altura de empilhamento for aumentada, ou quando o número de bicos da zona for alterado por expansão da rede.",
    body2:
      "Revisão preventiva: antes da renovação do AVCB, com verificação de que o DN de cada VGA ainda é adequado para o uso atual do CD. CDs multicliente têm risco variável por locatário — a revisão deve ocorrer a cada mudança de locatário ou de tipo de produto.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para Válvula de Governo e Alarme (VGA) de centro de distribuição em SP?",
    body1:
      "A DRD2 dimensiona VGA para CDs com cálculo hidráulico para o pior cenário de cada zona — não usando DN padrão sem cálculo. Cada projeto inclui memorial com demonstração da demanda de vazão e da perda de carga por DN.",
    body2:
      "Atendimento a CDs de todos os portes: desde galpões logísticos de 5.000 m² com duas zonas até CDs de 100.000 m² com 30 zonas e múltiplos sistemas. Contrato de manutenção com trip test anual programado para mínimo impacto na operação logística.",
  },
  h2_cobertura: {
    heading: "Válvula de Governo e Alarme (VGA) para centro de distribuição em toda a Grande SP",
    body1:
      "A DRD2 atende centros de distribuição e galpões logísticos em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos, Sorocaba e municípios da região metropolitana.",
    body2:
      "Para CDs em fase de projeto ou em processo de renovação de AVCB com documentação incompleta, o diagnóstico inicial pode ser feito com as plantas do sistema de sprinkler existente e a descrição da mercadoria armazenada.",
  },
  faqs: [
    {
      question: "CD com risco Extra precisa de bomba de incêndio maior do que o projeto original?",
      answer:
        "Depende da demanda real. Se o CD original foi projetado para Ordinário G1 e a mercadoria mudou para Extra G1, a demanda de vazão pode ter dobrado. Se a bomba original não tem capacidade para a nova demanda, a VGA correta e a rede certa não resolvem — a bomba também precisa ser adequada. O cálculo hidráulico verifica a capacidade da bomba como parte do dimensionamento.",
    },
    {
      question: "Bicos ESFR eliminam a necessidade de in-rack no CD?",
      answer:
        "Para muitos tipos de armazenamento, sim — é o objetivo dos bicos ESFR. Bicos ESFR K=200 ou K=360, instalados no teto com pressão adequada, conseguem suprimir incêndios em prateleiras de até 12m de altura com mercadorias de risco Extra G1, sem necessidade de bicos in-rack. Isso simplifica o sistema e reduz custo de instalação e manutenção. O projeto hidráulico determina se os bicos ESFR têm desempenho suficiente para o risco específico.",
    },
    {
      question: "Qual a frequência do trip test do dry pipe na câmara de congelados?",
      answer:
        "A NBR 10897 recomenda trip test do dry pipe pelo menos uma vez ao ano — igual ao wet pipe. O complicador é que o trip test do dry pipe inunda a câmara com água, que precisa ser completamente drenada (a água restante congelaria durante a operação normal). O planejamento do trip test do dry pipe de câmara de congelados exige drenagem completa e recarregamento de ar antes de retornar a operação normal da câmara.",
    },
    {
      question: "Drone e câmeras de monitoramento podem substituir a inspeção presencial da VGA?",
      answer:
        "Não — a IT 23/25 exige inspeção presencial por técnico habilitado com registro de resultado de cada componente. Câmeras de monitoramento podem auxiliar na verificação visual de acesso e estado externo, mas não substituem a verificação de pressões (leitura de manômetros), o teste de pressostato e o trip test. A DRD2 combina monitoramento remoto com visitas presenciais programadas.",
    },
    {
      question: "O CD pode operar durante o trip test ou precisa ser interrompido?",
      answer:
        "O CD pode operar durante o trip test — com precauções. O trip test envolve abertura da torneira de teste no ponto mais desfavorecido: a água escoa pela torneira (com mangueira direcionada para o dreno ou área externa). A área ao redor da torneira deve estar livre. Operadores de empilhadeiras devem ser avisados. O sistema de sprinkler da zona permanece ativo durante o teste — a proteção não é interrompida. O único impacto operacional é o breve sinal de alarme na central.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/projeto-vga-sistema-sprinkler-sp", label: "Projeto de VGA" },
    { href: "/instalacao-vga-sprinkler-sp", label: "Instalação de VGA" },
    { href: "/vga-galpao-industrial-sp", label: "VGA para Galpão Industrial" },
    { href: "/diferenca-vga-valvula-diluvi", label: "VGA vs. Válvula Dilúvio" },
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
  ],
  ctaFinal: {
    heading: "VÁLVULA DE GOVERNO E ALARME (VGA) PARA CENTRO DE DISTRIBUIÇÃO EM SP — PROJETO + TRIP TEST + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. Cálculo de DN para risco real. Trip test com menor impacto na operação logística.",
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
