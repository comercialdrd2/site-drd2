import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/vga-hospital-sp",
  meta: {
    title: "Válvula de Governo e Alarme (VGA) para Hospital em SP — Sprinkler Hospitalar e AVCB | DRD2 Engenharia",
    description: "A DRD2 projeta e mantém Válvula de Governo e Alarme (VGA) para hospitais em SP. Integração com sistema de alarme hospitalar, trip test sem interrupção de UTI e laudo para AVCB. IT 23/25. Diagnóstico gratuito.",
  },
  eyebrow: "Válvula de Governo e Alarme (VGA) para Hospital — IT 23/25, NBR 10897 e AVCB em São Paulo",
  h1Line1: "Válvula de Governo e Alarme",
  h1Line2: "para Hospital em SP — Sprinkler e AVCB",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "Em hospital, o sistema de sprinkler não pode falhar e não pode disparar falsamente. A VGA de hospital precisa ser precisa: o clapet bem vedado (micro-vazamento causa falso alarme que desencadeia evacuação de UTI), a integração do pressostato com a central hospitalar corretamente configurada (o sinal deve identificar a zona específica — não um alarme genérico) e o trip test executado em horário de menor risco operacional. O subdimensionamento de DN é ainda mais crítico aqui — em incêndio real, a pressão insuficiente pode significar bicos que não suprimem o fogo.",
  introP2:
    "A DRD2 projeta, instala e mantém VGA para hospitais, clínicas e edificações de saúde em SP. Diagnóstico técnico gratuito — incluindo verificação da integração com a central de alarme hospitalar, classificação de risco por setor (UTI, farmácia, arquivo, depósito de gases medicinais) e planejamento de trip test com menor impacto na operação.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Válvula de Governo e Alarme (VGA) para Hospital" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "Por que a Válvula de Governo e Alarme (VGA) de hospital tem requisitos além da NBR 10897?",
    body: "A NBR 10897 define os requisitos técnicos da VGA. A IT 23/25 define os requisitos para aprovação pelo CBPMESP. Mas em hospital, há uma camada adicional: a integração com o sistema de gerenciamento predial hospitalar (BMS) e com a central de alarme de incêndio hospitalar. O pressostato da VGA deve ser programado para gerar alarme diferenciado — não o mesmo alarme de detector de fumaça, por exemplo — para que a equipe saiba imediatamente que se trata de ativação de sprinkler em uma zona específica.",
    body2:
      "Outro requisito específico de hospital é a identificação de zona por setor crítico: a VGA que cobre a UTI deve gerar sinal diferente da VGA que cobre o arquivo ou a farmácia. Em uma evacuação real, a equipe precisa saber em qual setor o sprinkler ativou para tomar a decisão correta — evacuar pacientes do setor afetado sem mover pacientes críticos de outras áreas desnecessariamente.",
  },
  h2_riscos: {
    heading: "6 falhas críticas de Válvula de Governo e Alarme (VGA) em hospitais",
    intro:
      "Esses problemas são específicos para ambientes hospitalares — onde falha do sistema tem consequências mais graves do que em outros usos.",
    itens: [
      {
        titulo: "Micro-vazamento no clapet — falso alarme com evacuação de UTI",
        desc: "Um clapet com vedação deteriorada que cause micro-vazamento constante na linha de alarme pode fazer o pressostato enviar sinal periódico à central hospitalar — gerando falso alarme. Em hospital, falso alarme de sprinkler pode desencadear protocolo de evacuação parcial, com risco para pacientes em estado crítico. A manutenção preventiva do clapet é mais urgente em hospital do que em outros usos.",
      },
      {
        titulo: "Pressostato sem identificação de zona na central hospitalar",
        desc: "Central de alarme hospitalar com sinal de 'sprinkler ativo' sem identificação do setor obriga a equipe a percorrer o hospital inteiro para localizar o setor em alarme. Em incêndio real, esse tempo de identificação é crítico. O mapa de pontos da central deve identificar cada VGA com o setor que ela cobre.",
      },
      {
        titulo: "Trip test em horário de pico operacional — risco de falso alarme",
        desc: "O trip test, se não comunicado, pode ser interpretado como incêndio real pelo pessoal do hospital. O planejamento do trip test deve incluir comunicação prévia à administração, desativação temporária dos protocolos de evacuação automática durante o teste e retomada imediata após o término.",
      },
      {
        titulo: "VGA sem acesso — instalada em shaft sem porta de serviço",
        desc: "Em hospitais com reformas contínuas, VGAs que estavam acessíveis podem ficar bloqueadas por novos fechamentos de shaft, forro ou parede. O CBPMESP reprovar VGA inacessível — e em hospital, abrir o shaft pode requerer obras que impactam a operação do setor.",
      },
      {
        titulo: "DN subdimensionado em setores com armazenamento de material de risco",
        desc: "Almoxarifado hospitalar, farmácia com estoque e arquivo de documentos têm classificação de risco que pode ser Ordinário G2 — não Leve como os leitos. A VGA dimensionada como risco Leve para um armazém Ordinário G2 estará subdimensionada. O trip test de pressão residual revelará o problema.",
      },
      {
        titulo: "Manutenção semestral sem registros por setor — ausência de rastreabilidade",
        desc: "Hospitais com múltiplas VGAs (geralmente 4 a 12 em edificações de médio porte) precisam de relatório por zona, não um relatório único para todo o sistema. O CBPMESP pode solicitar rastreabilidade de qual zona foi testada em cada manutenção — relatório único sem identificação de zona não serve.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa Válvula de Governo e Alarme (VGA) para hospital",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Mapeamento de zonas por setor crítico",
        desc: "Identificação de cada zona de sprinkler e do setor hospitalar que ela cobre: leitos, UTI, CC, farmácia, almoxarifado, arquivo, geladeira de medicamentos. Verificação da classificação de risco de cada setor e confirmação de que o DN de cada VGA está correto para o risco.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Verificação da integração com a central hospitalar",
        desc: "Verificação de que cada pressostato de VGA está identificado corretamente na central de alarme hospitalar com o nome do setor. Teste de sinal sem trip test completo (abrindo levemente a torneira de dreno auxiliar) para confirmar identificação na central.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Planejamento do trip test por zona",
        desc: "Agendamento do trip test de cada zona com a administração do hospital. Para zonas que cobrem UTI ou CC: trip test no menor horário de ocupação, com comunicação prévia à equipe de enfermagem e desativação temporária do protocolo de evacuação automática.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Execução do trip test com equipe dedicada",
        desc: "Trip test com equipe de dois técnicos: um na torneira de teste e um na central de alarme para verificação do sinal em tempo real. Registro fotográfico de pressões antes e durante o teste. Cronometragem da campainha e registro do tempo de sinal do pressostato.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Inspeção de acessibilidade e condição física",
        desc: "Verificação de que todas as VGAs estão acessíveis sem necessidade de obras. Identificação de VGAs bloqueadas por reformas ou fechamentos de shaft. Documentação fotográfica de cada VGA para o relatório.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo por zona e dossiê para AVCB hospitalar",
        desc: "Laudo técnico individual por zona: resultado do trip test, estado dos componentes e recomendações. Dossiê consolidado para o AVCB com todos os laudos de zonas e relatórios de manutenção semestral — formato aceito pelo CBPMESP para edificações de saúde.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que o CBPMESP verifica na Válvula de Governo e Alarme (VGA) de hospital",
    body1:
      "Em hospitais, a vistoria do CBPMESP para AVCB é mais detalhada do que em edificações comerciais padrão. O vistoriador verifica documentação de cada zona, resultado do trip test de cada zona e integração do pressostato com a central de alarme hospitalar.",
    alerta:
      "Hospitais com AVCB vencido estão sujeitos a notificação da Vigilância Sanitária, além do CBPMESP. A regularização do AVCB de hospital tem urgência regulatória dupla — o processo de Comunique-se pode envolver notificação da ANVISA para unidades com leitos de internação.",
    itens: [
      {
        titulo: "Documentação por zona — projeto, ART e laudo de cada VGA",
        desc: "O CBPMESP pode solicitar documentação específica de cada zona de sprinkler: projeto com memorial de cálculo de DN, ART de projeto, laudo de comissionamento com trip test e relatórios de manutenção. Para hospital com 8 VGAs, são 8 conjuntos de documentação.",
      },
      {
        titulo: "Integração com central hospitalar verificada com log",
        desc: "O vistoriador pode solicitar o log da central de alarme para verificar que os eventos de pressostato estão sendo registrados com identificação correta. Central sem log de eventos ou com eventos sem identificação de zona é não-conformidade.",
      },
      {
        titulo: "Manutenção semestral com relatório por setor",
        desc: "Os relatórios de manutenção semestral devem identificar cada zona verificada, o resultado do teste de cada componente (campainha, pressostato, manômetros) e o resultado do trip test anual. Relatório único sem detalhe por zona não é aceito.",
      },
      {
        titulo: "Acessibilidade de todas as VGAs",
        desc: "Todas as VGAs devem estar acessíveis para inspeção e manutenção sem necessidade de obras ou remoção de equipamentos. O vistoriador verifica fisicamente o acesso a cada VGA — não apenas no projeto.",
      },
    ],
    closing:
      "A DRD2 prepara o dossiê completo de VGA por zona para hospitais — documentação aceita pelo CBPMESP na primeira vistoria e pela Vigilância Sanitária em inspeções regulatórias.",
  },
  h2_quando: {
    heading: "Quando realizar o trip test em hospital?",
    body1:
      "Trip test anual obrigatório conforme NBR 10897 e IT 23/25. Em hospital, o planejamento é crítico: zonas de UTI e CC devem ter trip test agendado com pelo menos 48h de antecedência à administração, em horário de menor ocupação e com comunicação à equipe de enfermagem.",
    body2:
      "Trip test emergencial: quando o CBPMESP emite Comunique-se sobre o sistema de sprinkler hospitalar, a DRD2 prioriza o atendimento — diagnóstico e plano de adequação em até 24h após a visita técnica, com planejamento de trip test que minimize o impacto na operação hospitalar.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para Válvula de Governo e Alarme (VGA) de hospital em SP?",
    body1:
      "A DRD2 executa trip test em hospital com comunicação prévia e equipe dedicada — sem surpresas para a equipe hospitalar. Cada zona é testada individualmente com relatório específico para o dossiê de AVCB.",
    body2:
      "Experiência com central de alarme hospitalar: verificação da integração do pressostato com o sistema de alarme, identificação de zona e configuração de protocolo — não apenas a instalação física do componente.",
  },
  h2_cobertura: {
    heading: "Válvula de Governo e Alarme (VGA) para hospital em toda a Grande SP",
    body1:
      "A DRD2 atende hospitais, clínicas, UPAs e edificações de saúde em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para hospitais com AVCB vencido ou Comunique-se ativo, a DRD2 atua com urgência — o diagnóstico inicial pode ser feito com as plantas do sistema de sprinkler e o relatório da última vistoria do CBPMESP.",
  },
  faqs: [
    {
      question: "É possível fazer o trip test sem interromper a operação da UTI?",
      answer:
        "Sim — com planejamento adequado. O trip test da VGA que cobre a UTI abre a torneira de teste no ponto mais desfavorecido (que pode estar em outro setor, dependendo do layout). O sistema da UTI permanece ativo durante o teste. O que precisa ser comunicado é que o alarme soará brevemente — a equipe deve ser instruída a não iniciar protocolo de evacuação durante o período do teste.",
    },
    {
      question: "O hospital precisa de uma VGA por pavimento?",
      answer:
        "Não necessariamente. A setorização por zona depende do número de bicos e da área de cada zona — não do número de pavimentos. Em hospitais de menor porte (2 a 4 pavimentos), uma única VGA pode cobrir toda a edificação se o número de bicos estiver dentro do limite por zona. Em hospitais maiores, múltiplas VGAs por pavimento ou por setor são comuns.",
    },
    {
      question: "A farmácia hospitalar tem classificação de risco diferente dos leitos?",
      answer:
        "Pode ter. Farmácia com estoque de álcool e outros produtos inflamáveis tem classificação de risco diferente de uma área de leitos. Almoxarifado hospitalar com armazenamento em prateleiras acima de 3m pode ter classificação Ordinário G2. A DRD2 faz a classificação de risco setor por setor — o laudo de conformidade especifica a classificação de cada área e confirma que a VGA está corretamente dimensionada para cada risco.",
    },
    {
      question: "Hospital pode ter AVCB parcial — aprovado em alguns setores e reprovado em outros?",
      answer:
        "O CBPMESP emite Comunique-se por setor ou sistema — não por pavimento ou setor. Uma não-conformidade no sistema de sprinkler afeta o AVCB de toda a edificação, não de um setor específico. A regularização deve ser de todo o sistema de sprinkler antes da renovação do AVCB.",
    },
    {
      question: "Clínica com 200 m² e sem internação precisa de sprinkler e VGA?",
      answer:
        "Depende da altura da edificação e de outros parâmetros da IT 23/25. Clínicas menores em edificações de baixa altura (menos de 4 pavimentos) frequentemente não são obrigadas a ter sprinkler pela IT 23/25. O diagnóstico de obrigatoriedade considera a altura total da edificação, não apenas o pavimento da clínica. A DRD2 verifica a obrigatoriedade específica para cada caso.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/instalacao-vga-sprinkler-sp", label: "Instalação de VGA" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de VGA" },
    { href: "/teste-comissionamento-vga-sp", label: "Trip Test de VGA" },
    { href: "/adequacao-vga-avcb-sp", label: "Adequação de VGA para AVCB" },
    { href: "/sprinkler-hospital-avcb-sp", label: "Sprinkler para Hospital" },
  ],
  ctaFinal: {
    heading: "VÁLVULA DE GOVERNO E ALARME (VGA) PARA HOSPITAL EM SP — TRIP TEST POR ZONA + LAUDO + INTEGRAÇÃO COM CENTRAL",
    body: "Diagnóstico técnico gratuito. Trip test planejado para menor impacto operacional. Laudo por zona para AVCB hospitalar.",
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
