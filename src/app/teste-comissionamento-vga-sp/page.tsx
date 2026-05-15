import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/teste-comissionamento-vga-sp",
  meta: {
    title: "Teste e Comissionamento de Válvula de Governo e Alarme (VGA) em SP — Trip Test e Laudo para AVCB | DRD2 Engenharia",
    description: "A DRD2 realiza teste e comissionamento de Válvula de Governo e Alarme (VGA) em SP. Trip test da Válvula de Governo e Alarme (VGA) com registro de pressões, campainha, pressostato e laudo técnico para AVCB. IT 23/25. Diagnóstico gratuito.",
  },
  eyebrow: "TESTE E COMISSIONAMENTO DE VÁLVULA DE GOVERNO E ALARME (VGA) — IT 23/25 E NBR 10897 EM SÃO PAULO",
  h1Line1: "Teste e Comissionamento de Válvula de Governo e Alarme (VGA)",
  h1Line2: "em São Paulo — Trip Test com Laudo para AVCB",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "O comissionamento da Válvula de Governo e Alarme (VGA) é o momento em que o sistema deixa de ser um conjunto de peças instaladas e se torna um sistema de proteção operacional. O trip test da Válvula de Governo e Alarme (VGA) — o procedimento central do comissionamento — verifica que o clapet abre, a água chega à linha de alarme no tempo correto, a campainha hidráulica responde, o pressostato envia sinal à central de alarme e o clapet recobre completamente após o fechamento do fluxo. Cada uma dessas etapas tem critério de aceitação definido pela NBR 10897. A DRD2 realiza teste e comissionamento de Válvula de Governo e Alarme (VGA) em SP com protocolo completo, registro de pressões e laudo técnico para aprovação do AVCB.",
  introP2:
    "Serviço completo: trip test da Válvula de Governo e Alarme (VGA) pela torneira de teste no ponto mais desfavorecido, verificação de campainha e pressostato, registro fotográfico de pressões antes e durante o teste, laudo técnico com resultado de cada verificação e ART de execução CREA-SP. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Válvula de Governo e Alarme (VGA)", href: "/vga-sprinkler-sao-paulo" },
    { label: "Teste e Comissionamento de Válvula de Governo e Alarme (VGA)" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "O que o trip test da Válvula de Governo e Alarme (VGA) verifica e por que cada etapa importa?",
    body: "O trip test da Válvula de Governo e Alarme (VGA) é executado pela abertura da torneira de teste (inspector's test connection) no ponto mais desfavorecido do sistema — o fim da rede mais longa. A torneira tem um orifício equivalente ao de um único bico sprinkler, simulando a descarga mínima real. Quando a torneira abre, a pressão do sistema cai, o clapet da Válvula de Governo e Alarme (VGA) abre, a água flui para a linha de alarme e aciona a campainha hidráulica. O pressostato responde à pressão do fluxo e fecha o contato elétrico para a central de alarme. Após fechar a torneira, o clapet deve recobrir completamente — sem fluxo residual para a linha de alarme.",
    body2:
      "Cada etapa tem um critério de aceitação: a campainha deve responder em até 60 segundos após a abertura da torneira (NBR 10897 — tempo pode variar conforme comprimento da linha de alarme); o pressostato deve enviar sinal à central antes de 90 segundos; a pressão residual no ponto mais desfavorecido durante o fluxo deve ser igual ou superior à pressão mínima do projeto hidráulico; e o clapet deve recobrir em até 5 minutos após o fechamento da torneira. Se qualquer critério falhar, o sistema de Válvula de Governo e Alarme (VGA) não está em conformidade.",
  },
  h2_riscos: {
    heading: "O que o trip test da Válvula de Governo e Alarme (VGA) revela que a inspeção visual não mostra",
    intro:
      "O trip test da Válvula de Governo e Alarme (VGA) é o único procedimento que verifica o funcionamento real do sistema — esses 6 problemas só são detectados durante o teste.",
    itens: [
      {
        titulo: "Clapet preso — Válvula de Governo e Alarme (VGA) aberta ou fechada permanentemente",
        desc: "Clapet preso na posição aberta: a linha de alarme tem pressão constante, a campainha soa continuamente e o pressostato tem sinal permanente na central — falso alarme. Clapet preso na posição fechada: o trip test da Válvula de Governo e Alarme (VGA) mostra pressão sem queda e a campainha não responde — o sistema não detectaria abertura de bico em incêndio real.",
      },
      {
        titulo: "Campainha com tempo de resposta acima do permitido",
        desc: "Linha de alarme parcialmente entupida ou com declividade incorreta: a campainha responde mas com mais de 60 segundos de atraso. Em incêndio real, esse atraso prejudica a evacuação e a notificação do CBPMESP. A norma define tempo máximo — atraso é reprovação no comissionamento da Válvula de Governo e Alarme (VGA).",
      },
      {
        titulo: "Pressostato sem sinal na central após o trip test da Válvula de Governo e Alarme (VGA)",
        desc: "O pressostato está instalado e cabeado mas o contato elétrico está oxidado — não fecha o circuito durante o fluxo. O trip test da Válvula de Governo e Alarme (VGA) mostra a campainha ativando mas a central de alarme sem registro — o sinal elétrico não chegou. Só identificado no trip test real.",
      },
      {
        titulo: "Pressão residual abaixo do mínimo do projeto",
        desc: "O fluxo pela torneira de teste mostra pressão residual abaixo da prevista no projeto hidráulico — indica que a pressão de alimentação caiu desde o projeto, que há vazamento na rede ou que a Válvula de Governo e Alarme (VGA) tem perda de carga maior do que calculado. Qualquer dessas causas exige investigação antes da emissão do laudo da Válvula de Governo e Alarme (VGA).",
      },
      {
        titulo: "Clapet que não recobre após o fechamento do fluxo",
        desc: "Após fechar a torneira de teste, a campainha deve parar em até 5 minutos. Se continuar soando, o clapet da Válvula de Governo e Alarme (VGA) não recobriu — indica desgaste do disco de vedação ou do assento. O sistema está em estado de 'viagem permanente' — jockey pump acionada continuamente.",
      },
      {
        titulo: "Torneira de teste não no ponto mais desfavorecido",
        desc: "Trip test da Válvula de Governo e Alarme (VGA) realizado pela torneira de dreno auxiliar ou por ponto intermediário da rede — não no mais desfavorecido — não verifica a pressão real no pior caso. O CBPMESP pode questionar o resultado se o ponto de teste não for o correto conforme o projeto.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 realiza o teste e comissionamento de Válvula de Governo e Alarme (VGA)",
    etapas: [
      {
        numero: "ANTES DO TESTE",
        titulo: "Verificação prévia do sistema de Válvula de Governo e Alarme (VGA)",
        desc: "Leitura de pressão nos manômetros de alimentação e sistema com registro fotográfico. Verificação de que a válvula OS&Y está completamente aberta e selada. Confirmação de que a central de alarme está em modo de monitoramento e que o ponto do pressostato da Válvula de Governo e Alarme (VGA) está identificado.",
      },
      {
        numero: "ETAPA 01",
        titulo: "Abertura da torneira de teste no ponto mais desfavorecido",
        desc: "Localização e abertura da torneira de teste (inspector's test connection) no ponto mais remoto do sistema. A torneira é aberta completamente para simular fluxo de um único bico. Início da cronometragem para resposta da campainha da Válvula de Governo e Alarme (VGA).",
      },
      {
        numero: "ETAPA 02",
        titulo: "Verificação da campainha com cronômetro",
        desc: "Medição do tempo de resposta da campainha hidráulica da Válvula de Governo e Alarme (VGA) após a abertura da torneira de teste. Verificação de que a campainha gira de forma contínua (não intermitente). Registro do tempo em segundos no relatório — critério de aprovação: ≤ 60 segundos.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Verificação do sinal do pressostato na central",
        desc: "Confirmação de que o evento do trip test da Válvula de Governo e Alarme (VGA) foi registrado na central de alarme com identificação correta do ponto (zona de sprinkler). Verificação de que os dispositivos de anúncio configurados para esse ponto foram acionados. Registro do tempo de sinal após a abertura da torneira.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Leitura de pressão durante o fluxo",
        desc: "Leitura dos manômetros de alimentação e sistema durante o fluxo pela torneira de teste da Válvula de Governo e Alarme (VGA). Comparação com os valores do projeto hidráulico. Pressão residual abaixo do mínimo indica problema na rede ou na alimentação que deve ser investigado antes da emissão do laudo da Válvula de Governo e Alarme (VGA).",
      },
      {
        numero: "ETAPA 05",
        titulo: "Fechamento da torneira e verificação de recampiamento",
        desc: "Fechamento da torneira de teste e cronometragem do tempo até a campainha da Válvula de Governo e Alarme (VGA) parar. Verificação de que o clapet recobriu completamente (leitura de pressão voltou ao valor inicial). Registro fotográfico dos manômetros antes e após o teste.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que o laudo de comissionamento de Válvula de Governo e Alarme (VGA) deve conter",
    body1:
      "O laudo de comissionamento da Válvula de Governo e Alarme (VGA) é o documento que demonstra ao CBPMESP que a Válvula de Governo e Alarme (VGA) foi testada e que o resultado atende aos critérios da NBR 10897 e da IT 23/25. Sem laudo, o sistema de sprinkler não pode ser aprovado para o AVCB.",
    alerta:
      "Laudo de comissionamento de Válvula de Governo e Alarme (VGA) emitido sem a realização do trip test real — baseado apenas em inspeção visual ou declaração — não é aceito pelo CBPMESP e expõe o emissor a responsabilidade civil e criminal em caso de falha do sistema.",
    itens: [
      {
        titulo: "Identificação do sistema e da Válvula de Governo e Alarme (VGA)",
        desc: "Endereço, número de zonas de sprinkler, fabricante e modelo da Válvula de Governo e Alarme (VGA), DN, data de instalação e data do teste. Identificação do ponto de torneira de teste utilizado no trip test da Válvula de Governo e Alarme (VGA).",
      },
      {
        titulo: "Resultados numéricos do trip test da Válvula de Governo e Alarme (VGA)",
        desc: "Pressão de alimentação antes do teste (bar), pressão do sistema antes do teste (bar), tempo de resposta da campainha (segundos), tempo de sinal do pressostato na central (segundos), pressão residual durante o fluxo (bar) e pressão de recuperação após fechamento (bar).",
      },
      {
        titulo: "Resultado da verificação de cada componente do trim da Válvula de Governo e Alarme (VGA)",
        desc: "Estado do clapet (vedação, sem micro-vazamento), campainha (resposta dentro do tempo), pressostato (sinal na central identificado), manômetros (leitura operacional), dreno principal (livre) e válvula OS&Y (aberta e selada).",
      },
      {
        titulo: "ART de execução CREA-SP",
        desc: "O laudo de comissionamento da Válvula de Governo e Alarme (VGA) deve ser assinado por engenheiro com ART de execução CREA-SP. A ART vincula o profissional ao resultado declarado no laudo — responsabilidade técnica sobre a conformidade do sistema de Válvula de Governo e Alarme (VGA).",
      },
    ],
    closing:
      "A DRD2 realiza o trip test da Válvula de Governo e Alarme (VGA) com protocolo completo da NBR 10897 e emite laudo técnico com todos os resultados numéricos e fotográficos — documentação aceita pelo CBPMESP na primeira vistoria.",
  },
  h2_quando: {
    heading: "Quando realizar o comissionamento da Válvula de Governo e Alarme (VGA)?",
    body1:
      "Comissionamento inicial: após qualquer instalação nova de Válvula de Governo e Alarme (VGA), antes da solicitação de vistoria do CBPMESP para emissão do AVCB. O laudo de comissionamento da Válvula de Governo e Alarme (VGA) deve anteceder a vistoria com tempo suficiente para corrigir eventuais não-conformidades.",
    body2:
      "Recomissionamento da Válvula de Governo e Alarme (VGA): após substituição de qualquer componente da Válvula de Governo e Alarme (VGA) (clapet, campainha, pressostato), após retrofit do sistema de sprinkler que altere a rede, ou quando o CBPMESP emitir Comunique-se específico sobre o sistema de sprinkler.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para teste e comissionamento de Válvula de Governo e Alarme (VGA) em SP?",
    body1:
      "A DRD2 realiza trip test da Válvula de Governo e Alarme (VGA) com registro fotográfico de cada etapa — não apenas checklist. Cada comissionamento de Válvula de Governo e Alarme (VGA) inclui leitura de pressões comparada com o projeto hidráulico, cronometragem real da campainha e verificação do sinal do pressostato na central.",
    body2:
      "Laudo técnico da Válvula de Governo e Alarme (VGA) com resultados numéricos completos e ART de execução CREA-SP — documentação que o CBPMESP aceita na primeira vistoria e que protege o proprietário em caso de questionamento futuro.",
  },
  h2_cobertura: {
    heading: "Teste e comissionamento de Válvula de Governo e Alarme (VGA) em toda a Grande SP",
    body1:
      "A DRD2 realiza comissionamento de Válvula de Governo e Alarme (VGA) em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para edificações fora da Grande SP, realizamos visita técnica com agenda específica. Para comissionamento de Válvula de Governo e Alarme (VGA) instalada por outra empresa, podemos realizar o trip test e emitir laudo independente com base nos resultados obtidos.",
  },
  faqs: [
    {
      question: "O trip test da Válvula de Governo e Alarme (VGA) pode ser realizado pelo próprio instalador ou precisa de empresa independente?",
      answer:
        "A NBR 10897 não exige que o comissionamento da Válvula de Governo e Alarme (VGA) seja realizado por empresa independente da instalação. O trip test da Válvula de Governo e Alarme (VGA) pode ser realizado pela mesma empresa que instalou, desde que o laudo seja assinado por engenheiro com ART de execução. Para maior credibilidade no CBPMESP, algumas edificações optam por comissionamento independente da Válvula de Governo e Alarme (VGA).",
    },
    {
      question: "O que acontece se o trip test da Válvula de Governo e Alarme (VGA) falhar?",
      answer:
        "Se o trip test da Válvula de Governo e Alarme (VGA) identificar não-conformidade (campainha acima do tempo, pressostato sem sinal, pressão residual abaixo do mínimo), o componente responsável deve ser corrigido ou substituído e o trip test repetido. O laudo da Válvula de Governo e Alarme (VGA) só é emitido após o teste aprovado. A DRD2 identifica a causa da falha e executa a correção na mesma mobilização quando possível.",
    },
    {
      question: "Qual a frequência obrigatória do trip test da Válvula de Governo e Alarme (VGA) após o comissionamento inicial?",
      answer:
        "A NBR 10897 recomenda trip test da Válvula de Governo e Alarme (VGA) pelo menos anualmente para sistemas wet pipe. A IT 23/25 do CBPMESP exige manutenção semestral do sistema de sprinkler, com o trip test da Válvula de Governo e Alarme (VGA) como parte da manutenção anual. O resultado de cada trip test deve ser registrado no relatório de manutenção.",
    },
    {
      question: "O comissionamento da Válvula de Governo e Alarme (VGA) serve para o AVCB inteiro ou apenas para o sprinkler?",
      answer:
        "O laudo de comissionamento da Válvula de Governo e Alarme (VGA) faz parte da documentação do sistema de sprinkler para o AVCB. O AVCB exige documentação de todos os sistemas instalados — sprinkler, hidrante, alarme, etc. O laudo da Válvula de Governo e Alarme (VGA) é parte do conjunto de laudos do sistema de sprinkler.",
    },
    {
      question: "Preciso de comissionamento se a Válvula de Governo e Alarme (VGA) foi instalada há mais de 5 anos sem laudo?",
      answer:
        "Sim. Se a Válvula de Governo e Alarme (VGA) foi instalada sem laudo de comissionamento e o sistema nunca passou por trip test documentado, o CBPMESP pode exigir o comissionamento na renovação do AVCB. A DRD2 realiza o trip test da Válvula de Governo e Alarme (VGA) e emite laudo retroativo para o estado atual do sistema — identificando qualquer componente que precise de substituição.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme (VGA) em SP" },
    { href: "/instalacao-vga-sprinkler-sp", label: "Instalação de Válvula de Governo e Alarme (VGA)" },
    { href: "/projeto-vga-sistema-sprinkler-sp", label: "Projeto de Válvula de Governo e Alarme (VGA)" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de Válvula de Governo e Alarme (VGA)" },
    { href: "/adequacao-vga-avcb-sp", label: "Adequação de Válvula de Governo e Alarme (VGA) para AVCB" },
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
  ],
  ctaFinal: {
    heading: "COMISSIONAMENTO DE VÁLVULA DE GOVERNO E ALARME (VGA) EM SP — TRIP TEST REAL + LAUDO TÉCNICO + ART CREA-SP",
    body: "Diagnóstico técnico gratuito. Trip test da Válvula de Governo e Alarme (VGA) com registro de pressões e cronometragem. Laudo aceito pelo CBPMESP.",
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
