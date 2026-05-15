import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/como-funciona-vga-sprinkler",
  meta: {
    title: "Como Funciona a Válvula de Governo e Alarme (VGA) no Sistema de Sprinkler — Clapet, Campainha e Trip Test | DRD2",
    description: "Entenda como funciona a Válvula de Governo e Alarme (VGA) no sistema de sprinkler: como o clapet abre, como a campainha aciona, como o pressostato integra com a central de alarme e o que o trip test verifica.",
  },
  eyebrow: "Como Funciona a Válvula de Governo e Alarme (VGA) — Clapet, Trim e Trip Test em Sistemas de Sprinkler",
  h1Line1: "Como Funciona a Válvula de Governo e Alarme (VGA)",
  h1Line2: "no Sprinkler — Clapet, Campainha e Pressostato",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "A VGA funciona por diferença de pressão. Em condição normal (standby), o clapet — um disco de borracha sobre assento de latão — está assentado pela pressão do sistema, mantendo a câmara de alarme sem fluxo. Quando um bico abre em incêndio, a pressão do sistema cai abaixo da pressão da alimentação. O clapet levanta e duas coisas acontecem simultaneamente: a água flui para a rede de sprinkler pelos bicos abertos, e a água flui pela câmara de alarme para a linha de alarme, acionando a campainha hidráulica e o pressostato.",
  introP2:
    "O trip test simula esse processo sem abrir um bico real: abre-se a torneira de teste (inspector's test connection) no ponto mais desfavorecido do sistema, com orifício equivalente a um único bico. O clapet levanta, a linha de alarme pressuriza, a campainha soa e o pressostato envia sinal à central — tudo verificado e cronometrado. O laudo de trip test é o documento que prova ao CBPMESP que o sistema funciona como projetado.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Como Funciona a Válvula de Governo e Alarme (VGA)" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "O que acontece dentro da Válvula de Governo e Alarme (VGA) quando um bico dispara?",
    body: "A VGA tem duas câmaras separadas pelo clapet: câmara de alimentação (montante) e câmara do sistema (jusante). Em standby, as duas câmaras têm a mesma pressão — o clapet está assento pela pressão igual nos dois lados e pelo próprio peso. Quando um bico abre, a pressão da câmara do sistema começa a cair pelo fluxo que sai pelo bico. A câmara de alimentação mantém a pressão da rede — essa diferença de pressão levanta o clapet.",
    body2:
      "Com o clapet levantado, o orifício de alarme fica exposto. A água da câmara de alimentação passa pelo orifício de alarme e entra na linha de alarme de 3/4\" que vai até a campainha hidráulica. A pressão nessa linha aciona a palheta da campainha, que gira e produz o alarme audível. Ao mesmo tempo, a pressão na linha de alarme fecha o contato do pressostato, que envia o sinal elétrico à central de alarme. Tudo isso acontece sem energia elétrica no acionamento mecânico — apenas por diferença de pressão hidráulica.",
  },
  h2_riscos: {
    heading: "O que impede a Válvula de Governo e Alarme (VGA) de funcionar corretamente",
    intro:
      "Cada componente da Válvula de Governo e Alarme (VGA) tem um mecanismo de falha silencioso — invisível na inspeção visual e revelado apenas pelo trip test.",
    itens: [
      {
        titulo: "Clapet com vedação deteriorada — micro-fluxo constante para a linha de alarme",
        desc: "O disco de borracha do clapet endurece com o tempo. Quando a vedação perde elasticidade, um micro-fluxo constante passa para a linha de alarme — a campainha soa intermitentemente sem incêndio. Esse 'gotejar' constante também indica que a pressão do sistema está caindo gradualmente, acionando a jockey pump repetidamente.",
      },
      {
        titulo: "Orifício de alarme entupido — clapet levanta mas campainha não soa",
        desc: "O orifício de alarme tem diâmetro de 6 a 10 mm — suficiente para entupir com sedimento, calcário e ferrugem. Quando entupido, o clapet levanta normalmente mas a água não chega à linha de alarme. Em incêndio real: a água sai pelo bico mas a campainha e o pressostato não acionam.",
      },
      {
        titulo: "Linha de alarme com contra-declividade — água acumulada que corrói",
        desc: "A linha de alarme deve ter caimento para drenar por gravidade até a campainha e ter retorno com saída livre. Instalação com trecho horizontal ou contra-declividade acumula água parada — que corrói a campainha internamente e cria pressão hidrostática que pode manter o pressostato ativo sem fluxo real.",
      },
      {
        titulo: "Assento do clapet corroído — clapet não veda completamente",
        desc: "O assento de latão do clapet pode corroer por ação da água com alta concentração de cloro ou pH fora da faixa. O clapet não assenta completamente sobre o assento corroído — micro-vazamento crônico que força a jockey pump e sinaliza falso alarme na central.",
      },
      {
        titulo: "Pressostato com faixa de atuação incorreta — não responde na pressão do sistema",
        desc: "O pressostato deve ser calibrado para fechar o contato na faixa de pressão do sistema — geralmente 0,15 a 0,50 bar na linha de alarme. Um pressostato com faixa de atuação errada (muito alta) não fecha o contato no fluxo real. O trip test mostra a campainha soando mas o sinal elétrico não chegando à central.",
      },
      {
        titulo: "Válvula OS&Y parcialmente fechada — pressão reduzida no sistema",
        desc: "A válvula de governo (OS&Y gate valve) deve estar completamente aberta e selada (lacrada) em condição operacional. Uma OS&Y parcialmente fechada cria gargalo e reduz a pressão disponível na VGA — os bicos mais desfavorecidos podem não ter pressão suficiente para atingir a densidade de projeto.",
      },
    ],
  },
  h2_processo: {
    heading: "O trip test passo a passo — como cada etapa verifica o funcionamento",
    etapas: [
      {
        numero: "ANTES",
        titulo: "Verificação prévia das pressões",
        desc: "Leitura dos dois manômetros: alimentação e sistema. Em condição normal, as duas pressões devem ser iguais (sem queda no clapet). Se a pressão do sistema for menor, há micro-vazamento no clapet — isso é registrado antes do teste.",
      },
      {
        numero: "ETAPA 01",
        titulo: "Abertura da torneira de teste no ponto mais desfavorecido",
        desc: "A torneira de teste tem orifício equivalente ao de um único bico. Quando aberta, a pressão do sistema começa a cair exatamente como em incêndio real. O cronômetro começa no momento da abertura.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Medição do tempo de resposta da campainha",
        desc: "O tempo entre a abertura da torneira e o início do soar da campainha deve ser ≤ 60 segundos (NBR 10897). Tempo acima indica obstrução na linha de alarme ou palheta travada. O tempo exato é registrado no laudo.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Verificação do sinal do pressostato na central",
        desc: "A central de alarme deve registrar o evento com identificação correta da zona. O tempo de sinal deve ser ≤ 90 segundos após a abertura. Verificação de que os dispositivos de anúncio (sirenes) foram acionados conforme programação.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Leitura de pressão residual durante o fluxo",
        desc: "Com a torneira aberta, leitura do manômetro do sistema. A pressão residual durante o fluxo deve ser ≥ à pressão mínima do projeto hidráulico no ponto mais desfavorecido. Pressão abaixo indica problema na alimentação ou subdimensionamento.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Fechamento e verificação de recampiamento",
        desc: "Após fechar a torneira, o clapet deve recobrir completamente em ≤ 5 minutos — a campainha para de soar e o pressostato remove o sinal. Manômetros voltam ao valor inicial. Se a campainha continua soando, o clapet não recobriu — vedação danificada.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Pressões de referência — o que os manômetros devem mostrar",
    body1:
      "Os dois manômetros da VGA — um no lado da alimentação e outro no lado do sistema — são a referência de monitoramento em tempo real. Em condição normal, as leituras devem ser iguais. Qualquer diferença indica problema.",
    alerta:
      "Manômetro do sistema com pressão progressivamente menor ao longo do tempo (verificado nos relatórios de manutenção) indica micro-vazamento em algum ponto da rede — clapet, junta ou bico com vedação deteriorada. A queda progressiva é detectada somente com registros históricos de pressão.",
    itens: [
      {
        titulo: "Pressões iguais (alimentação = sistema) — condição normal",
        desc: "O clapet está completamente assentado e não há fluxo para a linha de alarme. A jockey pump mantém a pressão pelo acionamento periódico. Variação de ± 0,5 bar entre leituras é normal.",
      },
      {
        titulo: "Pressão do sistema menor que alimentação — micro-vazamento no clapet",
        desc: "O clapet não veda completamente. A pressão do sistema cai gradualmente enquanto a alimentação mantém pressão. A jockey pump aciona com frequência para compensar. Indica necessidade de inspeção interna e possível substituição do disco.",
      },
      {
        titulo: "Pressão de alimentação abaixo do normal — problema na rede principal",
        desc: "A pressão disponível da concessionária ou da bomba principal caiu. Todos os bicos do sistema terão pressão residual menor. Pode causar falha no trip test por pressão residual abaixo do mínimo do projeto.",
      },
      {
        titulo: "Pressão residual durante o trip test — referência do projeto hidráulico",
        desc: "Durante o trip test, a pressão no manômetro do sistema (com torneira aberta) deve ser ≥ à pressão mínima calculada no projeto. Essa é a verificação mais importante do dimensionamento de DN: se a pressão cair abaixo do mínimo, o DN da VGA pode estar subdimensionado.",
      },
    ],
    closing:
      "A DRD2 registra e compara as leituras de pressão em cada manutenção — o histórico de pressões é o melhor indicador de degradação silenciosa no sistema antes que ela resulte em falha no trip test ou reprovação na vistoria.",
  },
  h2_quando: {
    heading: "Com que frequência a Válvula de Governo e Alarme (VGA) deve ser testada?",
    body1:
      "Trip test completo: ao menos uma vez ao ano, conforme NBR 10897. A IT 23/25 do CBPMESP exige manutenção semestral documentada — o trip test anual faz parte da manutenção de maior escopo. Verificação semestral do pressostato (sem trip test completo): na visita semestral intermediária.",
    body2:
      "Trip test adicional obrigatório: após qualquer substituição de componente da VGA (clapet, campainha, pressostato), após retrofit do sistema de sprinkler, ou quando o CBPMESP emitir Comunique-se sobre o sistema. O trip test pós-intervenção confirma que a adequação foi eficaz antes da emissão do laudo.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para trip test e comissionamento de Válvula de Governo e Alarme (VGA) em SP?",
    body1:
      "A DRD2 realiza trip test com registro fotográfico de cada etapa e cronometragem real da campainha — não apenas check-list. Cada etapa tem critério de aceitação verificado e documentado: tempo de campainha, sinal do pressostato, pressão residual.",
    body2:
      "Laudo técnico com resultados numéricos completos e ART de execução CREA-SP — documentação que o CBPMESP aceita na primeira vistoria e que serve de base de comparação para as manutenções futuras.",
  },
  h2_cobertura: {
    heading: "Trip test e manutenção de Válvula de Governo e Alarme (VGA) em toda a Grande SP",
    body1:
      "A DRD2 realiza trip test e comissionamento de VGA em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para edificações com Comunique-se ativo sobre o sistema de sprinkler, a DRD2 prioriza o agendamento do trip test — diagnóstico e plano apresentados em até 24 horas após a visita técnica.",
  },
  faqs: [
    {
      question: "O trip test prejudica o sistema de sprinkler?",
      answer:
        "Não — o trip test é um procedimento projetado para ser realizado periodicamente. A abertura da torneira de teste simula exatamente o que aconteceria com a abertura de um bico real, mas sem disparar bico e sem inundar o ambiente. O único cuidado é com o dreno: a água que sai pela torneira de teste deve ter escoamento adequado. Após o teste, o sistema é rearmado normalmente.",
    },
    {
      question: "Quanto tempo o sistema fica fora de operação durante o trip test?",
      answer:
        "O trip test não interrompe o sistema — a torneira de teste é aberta com o sistema pressurizado. Durante o teste (geralmente 5 a 10 minutos), a torneira está aberta e simulando fluxo de bico, mas o restante da rede permanece ativo. O único período sem proteção total é o tempo de recampiamento após fechar a torneira (≤ 5 minutos para o clapet recobrir e o sistema retornar à pressão normal).",
    },
    {
      question: "Por que a campainha pode soar depois do trip test mesmo com a torneira fechada?",
      answer:
        "Se a campainha continua soando após fechar a torneira de teste, o clapet não recobriu completamente. A causa mais comum é desgaste do disco de borracha — ele perdeu elasticidade e não assenta mais no assento de latão. Esse é um dos resultados mais importantes do trip test: identifica necessidade de substituição do clapet antes que o micro-vazamento crônico crie problemas maiores.",
    },
    {
      question: "O que acontece se o pressostato não enviar sinal durante o trip test?",
      answer:
        "O trip test prossegue, mas o resultado é de falha — o laudo não pode ser emitido até a correção. A causa mais comum é contato oxidado no pressostato, que deve ser substituído. Outras causas: cabeamento rompido ou desconectado, ponto não configurado na central, ou pressostato com faixa de atuação incorreta para a pressão do sistema.",
    },
    {
      question: "A pressão durante o trip test deve ser igual à pressão estática normal?",
      answer:
        "Não — durante o trip test, com a torneira aberta, a pressão cai (pressão dinâmica/residual). Essa pressão residual durante o fluxo deve ser ≥ à pressão mínima do projeto hidráulico no ponto mais desfavorecido. É diferente da pressão estática normal (sem fluxo). O projeto hidráulico define exatamente qual é esse valor mínimo — por isso o memorial de cálculo deve ser parte do dossiê do sistema.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/o-que-e-valvula-governo-alarme", label: "O que é VGA?" },
    { href: "/teste-comissionamento-vga-sp", label: "Teste e Comissionamento de VGA" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de VGA" },
    { href: "/instalacao-vga-sprinkler-sp", label: "Instalação de VGA" },
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
  ],
  ctaFinal: {
    heading: "TRIP TEST DE VÁLVULA DE GOVERNO E ALARME (VGA) EM SP — RESULTADO NUMÉRICO + LAUDO TÉCNICO + ART CREA-SP",
    body: "Diagnóstico técnico gratuito. Trip test com cronometragem real e registro de pressões. Laudo aceito pelo CBPMESP.",
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
