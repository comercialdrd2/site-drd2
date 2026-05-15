import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/vga-sprinkler-sao-paulo",
  meta: {
    title: "Válvula de Governo e Alarme para Sprinkler em SP — DN65 a DN200 | DRD2 Engenharia",
    description: "A DRD2 instala e mantém válvula de governo e alarme (VGA) para sprinkler em SP. Campainha hidráulica, pressostato, manômetros e ART para AVCB. Instalação, projeto, manutenção e teste. Diagnóstico gratuito.",
  },
  eyebrow: "IT 23/25 e NBR 10897 — Válvula de Governo e Alarme em São Paulo",
  h1Line1: "Válvula de Governo e Alarme",
  h1Line2: "para Sprinkler em São Paulo — VGA DN65 a DN200",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "A válvula de governo e alarme (VGA) é o componente central de controle do sistema de sprinkler em regime molhado: ela separa a alimentação de água do sistema de distribuição, detecta o primeiro fluxo causado pela abertura de um bico sprinkler e aciona o alarme — mecânico via campainha hidráulica e elétrico via pressostato conectado ao painel de alarme. Sem VGA corretamente dimensionada, instalada e testada, o sistema de sprinkler não pode ser aprovado no CBPMESP para emissão do AVCB. A DRD2 projeta, instala, mantém e testa VGA para sistemas de sprinkler em SP conforme IT 23/25 e NBR 10897.",
  introP2:
    "Serviços completos: instalação com todos os componentes do conjunto (campainha, pressostato, manômetros, dreno principal, torneira de teste), projeto com memorial de cálculo para dimensionamento de DN, testes de trip completos e laudo com ART para aprovação do AVCB. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Sprinkler", href: "/sprinklers" },
    { label: "Válvula de Governo e Alarme" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "O que compõe uma Válvula de Governo e Alarme (VGA) e por que cada componente é obrigatório?",
    body: "A VGA não é apenas uma válvula — é um conjunto integrado de componentes que a NBR 10897 e a IT 23/25 exigem instalados e funcionais. A válvula de retenção de alarme (o corpo da VGA) retém a água no sistema e, quando um bico abre e a pressão cai, libera fluxo para o ramal de alarme. A campainha hidráulica (gongo) é acionada mecanicamente pela pressão da água — funciona sem energia elétrica, fundamental para alarme em falha de energia. O pressostato envia sinal elétrico à central de alarme para registro do evento e acionamento de sirenes endereçáveis. Os manômetros nas faces de alimentação e sistema permitem verificar integridade da rede em qualquer inspeção.",
    body2:
      "O dimensionamento do DN da VGA é calculado para a demanda hidráulica do sistema: um sistema com 12 bicos em operação simultânea a 100 L/min cada precisa de VGA com K suficiente para não gerar queda de pressão acima do permitido pela NBR 10897. Usar DN80 onde o cálculo exige DN100 causa subpressão na rede — os bicos mais desfavorecidos não atingem a densidade mínima e o sistema falha no controle do incêndio mesmo estando fisicamente completo.",
  },
  h2_riscos: {
    heading: "O que reprova a Válvula de Governo e Alarme (VGA) na vistoria do CBPMESP",
    intro:
      "Esses 6 problemas são os mais frequentes em sistemas de sprinkler reprovados na vistoria por não-conformidade da Válvula de Governo e Alarme (VGA).",
    itens: [
      {
        titulo: "Válvula de Governo e Alarme (VGA) subdimensionada — DN errado para a demanda do sistema",
        desc: "VGA com DN abaixo do exigido pelo cálculo hidráulico gera queda de pressão excessiva. O resultado é subpressão nos bicos mais desfavorecidos — o sistema não atinge a densidade mínima de descarga exigida pela IT 23/25 e reprova no teste de vazão.",
      },
      {
        titulo: "Campainha hidráulica sem inclinação de dreno",
        desc: "A tubulação de retorno da campainha deve ter inclinação adequada para dreno por gravidade — água estagnada na linha causa corrosão, entupimento e falha da campainha no teste de trip. A NBR 10897 especifica inclinação mínima e ponto de dreno externo visível.",
      },
      {
        titulo: "Pressostato não conectado à central de alarme",
        desc: "O pressostato da VGA deve ser cabeado e integrado à central de alarme do prédio. VGA com pressostato instalado mas não conectado — situação frequente em sistemas antigos com troca de central — é não-conformidade que impede aprovação do AVCB.",
      },
      {
        titulo: "Ausência de dreno principal e torneira de teste",
        desc: "O dreno principal (2 polegadas) e a torneira de teste no ponto mais desfavorecido do sistema são componentes obrigatórios da IT 23/25. Sem dreno principal, o teste de trip não pode ser executado conforme o protocolo da norma.",
      },
      {
        titulo: "Manômetros ausentes ou com leitura fora da faixa",
        desc: "A NBR 10897 exige manômetro na face de alimentação e na face do sistema. Manômetros com escala inadequada para a pressão do sistema (ex: 0–10 bar em sistema de 14 bar) ou com ponteiro travado são Comunique-se automático na vistoria.",
      },
      {
        titulo: "Válvula de Governo e Alarme (VGA) instalada em local inacessível ou sem proteção contra impacto",
        desc: "A VGA deve estar em local permanentemente acessível para inspeção, manutenção e teste de trip. Sistemas em que a VGA foi encoberta por forro, prateleiras ou fechamento de shaft são reprovados — desmontagem do obstáculo é responsabilidade do proprietário antes da vistoria.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 instala e comissiona a Válvula de Governo e Alarme (VGA)",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Dimensionamento de DN por cálculo hidráulico",
        desc: "Verificação da demanda de vazão do sistema (bicos em operação simultânea × vazão mínima por bico) e cálculo da perda de carga na VGA para o DN em avaliação. O DN final é o menor que mantém pressão residual acima do mínimo no ponto mais desfavorecido.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Projeto com ART de projeto",
        desc: "Projeto com memorial de cálculo, detalhe isométrico do conjunto de trim (campainha, pressostato, manômetros, dreno, torneira de teste), especificação de fabricante e laudo de adequação ao existente quando for retrofit.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Instalação completa do conjunto",
        desc: "Instalação da VGA com todos os componentes de trim: válvula OS&Y ou borboleta de governo, válvula de retenção de alarme, campainha hidráulica com tubulação inclinada para dreno, pressostato com cabo até o painel de alarme, manômetros nos dois lados, dreno principal de 2\" e torneira de teste.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Integração com central de alarme",
        desc: "Cabeamento do pressostato até a central de alarme endereçável ou convencional. Configuração do ponto na central com identificação da zona de sprinkler. Teste de sinal de fluxo na central antes do teste de trip.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Teste de trip completo",
        desc: "Trip test pela torneira de teste no ponto mais desfavorecido: verificação de acionamento da campainha, sinal do pressostato na central de alarme, pressão diferencial entre alimentação e sistema, tempo de resposta e recolocação do clapet após fechamento do fluxo.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo técnico com ART de execução",
        desc: "Relatório fotográfico de todos os componentes, resultado do trip test com pressões registradas, ART de execução CREA-SP e laudo técnico completo para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 23/25 e a NBR 10897 exigem da Válvula de Governo e Alarme (VGA)",
    body1:
      "A NBR 10897 define os requisitos técnicos da VGA — componentes obrigatórios, dimensionamento, instalação e testes. A IT 23/25 do CBPMESP determina quando o sistema de sprinkler é obrigatório e, por consequência, quando a VGA é exigida. Toda instalação ou adequação de VGA em SP deve ter ART de projeto e ART de execução assinadas por engenheiro CREA-SP.",
    alerta:
      "Reforma que altere o número de bicos em qualquer zona do sistema pode alterar o DN necessário da VGA. A troca de uso de um andar que eleve a classificação de risco (ex: escritório → arquivo morto) também pode exigir adequação da VGA para o novo nível de demanda.",
    itens: [
      {
        titulo: "Conjunto de trim completo obrigatório",
        desc: "NBR 10897 lista os componentes mínimos do trim: campainha hidráulica, pressostato, manômetros (alimentação e sistema), válvula de dreno principal (2\"), torneira de teste no ponto mais desfavorecido e válvula de governo. A ausência de qualquer componente é não-conformidade.",
      },
      {
        titulo: "Pressostato integrado à central de alarme",
        desc: "O sinal do pressostato da VGA deve ser recebido, registrado e anunciado pela central de alarme de incêndio do prédio. Pressostato instalado mas não cabeado — ou cabeado mas não configurado na central — é reprovação na vistoria.",
      },
      {
        titulo: "Manutenção semestral com trip test anual",
        desc: "A IT 23/25 exige manutenção semestral documentada. O trip test completo (flow test pela torneira de teste) deve ser realizado pelo menos anualmente com registro de pressões, tempo de resposta da campainha e sinal de alarme.",
      },
      {
        titulo: "ART de projeto e execução obrigatórias",
        desc: "Qualquer instalação ou substituição de VGA em sistema de sprinkler que compõe o AVCB deve ter ART de projeto (antes) e ART de execução (após os testes). Instalação sem ART não é aceita pelo CBPMESP.",
      },
    ],
    closing:
      "A DRD2 realiza diagnóstico técnico gratuito do sistema existente, verifica DN adequado, identifica componentes faltantes e apresenta proposta de instalação ou adequação com laudo aceito pelo CBPMESP na primeira vistoria.",
  },
  h2_quando: {
    heading: "Quando instalar, trocar ou adequar a Válvula de Governo e Alarme (VGA)?",
    body1:
      "Instalação nova: quando o sistema de sprinkler for implantado pela primeira vez — a VGA é parte do escopo de projeto e deve ser dimensionada junto com o cálculo hidráulico da rede. Substituição: quando a VGA existente apresenta falha no trip test, vazamento no clapet, campainha sem resposta ou pressostato sem sinal. Adequação: quando o CBPMESP emitir Comunique-se específico sobre a VGA ou quando uma reforma alterar o número de bicos ou a classificação de risco da zona.",
    body2:
      "Situações urgentes: VGA com vazamento contínuo (clapet defeituoso que causa pressurização permanente da linha de alarme), campainha disparando sem abertura de bico (falso alarme por clapet com vedação ruim) ou pressostato com sinal constante na central de alarme — todas indicam necessidade de substituição imediata da válvula de retenção.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para Válvula de Governo e Alarme (VGA) em SP?",
    body1:
      "A DRD2 tem experiência em instalação, retrofit e manutenção de VGA para sistemas de sprinkler de todos os portes em SP — de escritórios com DN65 a galpões industriais com DN150 e DN200. Cada projeto inclui dimensionamento hidráulico correto e instalação completa com todos os componentes de trim.",
    body2:
      "Processo completo sem terceiros: projeto com ART, instalação de conjunto completo, cabeamento do pressostato até a central, trip test documentado e laudo para AVCB — tudo com a DRD2.",
  },
  h2_cobertura: {
    heading: "Instalação e manutenção de Válvula de Governo e Alarme (VGA) em toda a Grande SP",
    body1:
      "A DRD2 atende edificações de todos os portes em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para edificações fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial do sistema existente pode ser feito por videochamada com análise das fotos do conjunto de VGA.",
  },
  faqs: [
    {
      question: "O que é a válvula de governo e alarme (VGA)?",
      answer:
        "A VGA é o conjunto de controle e alarme do sistema de sprinkler em regime molhado. É composta por válvula de retenção de alarme (detecta fluxo de água), campainha hidráulica (alarme mecânico sem energia elétrica), pressostato (sinal elétrico para a central de alarme), manômetros e válvulas de dreno e teste. É obrigatória em todos os sistemas de sprinkler wet pipe conforme NBR 10897 e IT 23/25.",
    },
    {
      question: "Qual o tamanho (DN) correto de VGA para meu sistema?",
      answer:
        "O DN é definido pelo cálculo hidráulico: vazão total dos bicos em operação simultânea (conforme área de operação da IT 23/25) dividida pelo coeficiente K da VGA deve resultar em pressão diferencial dentro do limite da NBR 10897. Para sistemas até 1.200 m² de Risco Leve, DN65 ou DN80 costuma ser suficiente. Para sistemas maiores ou com Risco Ordinário e Extra, DN100 a DN200. O dimensionamento correto exige cálculo — não estimativa.",
    },
    {
      question: "A VGA precisa estar conectada ao alarme de incêndio do prédio?",
      answer:
        "Sim. A IT 23/25 e a NBR 10897 exigem que o pressostato da VGA seja integrado à central de alarme de incêndio — o fluxo de água que indica abertura de um bico deve ser registrado e anunciado pela central. VGA com pressostato instalado mas não cabeado é não-conformidade que impede aprovação do AVCB.",
    },
    {
      question: "Com que frequência a VGA precisa de manutenção?",
      answer:
        "Manutenção semestral obrigatória com inspeção visual de todos os componentes e verificação de pressões. Trip test completo (pela torneira de teste no ponto mais desfavorecido) pelo menos uma vez ao ano, com registro de pressões e tempo de resposta da campainha. O relatório de manutenção deve ser mantido disponível para o CBPMESP.",
    },
    {
      question: "Posso instalar a VGA sem ART de engenheiro?",
      answer:
        "Não para fins de AVCB. A IT 23/25 exige ART de projeto (antes da instalação) e ART de execução (após os testes e o trip test). Instalação de VGA sem ART assinada por engenheiro CREA-SP não é aceita pelo CBPMESP para emissão ou renovação do AVCB.",
    },
  ],
  linksInternos: [
    { href: "/instalacao-vga-sprinkler-sp", label: "Instalação de Válvula de Governo e Alarme (VGA)" },
    { href: "/projeto-vga-sistema-sprinkler-sp", label: "Projeto de Válvula de Governo e Alarme (VGA)" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de Válvula de Governo e Alarme (VGA)" },
    { href: "/teste-comissionamento-vga-sp", label: "Teste e Comissionamento de Válvula de Governo e Alarme (VGA)" },
    { href: "/adequacao-vga-avcb-sp", label: "Adequação de Válvula de Governo e Alarme (VGA) para AVCB" },
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
  ],
  ctaFinal: {
    heading: "VÁLVULA DE GOVERNO E ALARME (VGA) PARA SPRINKLER EM SP — PROJETO + INSTALAÇÃO + TRIP TEST + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. Dimensionamento correto de DN. Conjunto completo com campainha, pressostato e manômetros.",
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
