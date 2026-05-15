import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/manutencao-vga-sprinkler-sp",
  meta: {
    title: "Manutenção de Válvula de Governo e Alarme (VGA) para Sprinkler em SP — Semestral e Trip Test Anual | DRD2 Engenharia",
    description: "A DRD2 realiza manutenção de Válvula de Governo e Alarme (VGA) em SP. Inspeção semestral, trip test anual, verificação de campainha e pressostato e laudo para AVCB. IT 23/25. Diagnóstico gratuito.",
  },
  eyebrow: "Manutenção de Válvula de Governo e Alarme (VGA) — IT 23/25 e NBR 10897 em São Paulo",
  h1Line1: "Manutenção de Válvula de Governo e Alarme",
  h1Line2: "para Sprinkler em SP — Semestral e Trip Test Anual",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "A VGA é o componente mais crítico e menos inspecionado do sistema de sprinkler. Em sistemas que nunca foram testados, o clapet pode estar preso na posição aberta — deixando o sistema sem retenção de água. A campainha pode estar obstruída por sedimento ou corroída internamente. O pressostato pode ter o contato oxidado e não emitir sinal para a central de alarme. Nenhum desses defeitos é visível externamente — só o trip test regular revela o estado real da VGA. A DRD2 realiza manutenção de VGA com inspeção semestral documentada e trip test anual conforme IT 23/25 e NBR 10897.",
  introP2:
    "Manutenção completa: inspeção visual semestral de todos os componentes do trim, verificação de pressões e funcionamento do pressostato, trip test anual com registro de pressões e tempo de resposta da campainha, relatório fotográfico e laudo para renovação do AVCB. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Manutenção de Válvula de Governo e Alarme (VGA)" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "O que deteriora a Válvula de Governo e Alarme (VGA) sem que ninguém perceba?",
    body: "A VGA fica em standby durante toda a vida útil do sistema — ela só é solicitada quando um bico abre. Esse longo período de inatividade é o principal fator de deterioração: o clapet de borracha endurece e perde flexibilidade, podendo ficar preso na posição aberta (fluxo contínuo para a linha de alarme — falso alarme) ou na posição fechada demais (falha de abertura em incêndio real). O assento de latão corroe com a água parada, comprometendo a vedação e causando micro-vazamentos que aparecem como gota constante na saída da campainha.",
    body2:
      "A campainha hidráulica acumula sedimento de calcário e ferrugem na palheta de giro — em sistemas de água com dureza alta, a palheta pode travar completamente em 3 a 5 anos sem manutenção. O pressostato tem contato elétrico que oxida com a umidade do ambiente — em casas de máquinas sem ventilação adequada, o contato pode oxidar em 12 a 18 meses. O trip test semestral ou anual é o único meio de verificar que todos esses componentes ainda funcionam como projetado.",
  },
  h2_riscos: {
    heading: "O que a falta de manutenção da Válvula de Governo e Alarme (VGA) causa na prática",
    intro:
      "Esses 6 problemas são causados ou agravados pela ausência de manutenção regular da Válvula de Governo e Alarme (VGA) — e todos impactam diretamente na aprovação do AVCB.",
    itens: [
      {
        titulo: "Campainha sem resposta no trip test — reprovação na vistoria",
        desc: "Campainha com palheta travada por sedimento não gira quando o fluxo de água passa pela linha de alarme. No trip test da vistoria do CBPMESP, a ausência de campainha é Comunique-se imediato — e a desobstrução exige desmontagem, limpeza e reteste.",
      },
      {
        titulo: "Pressostato sem sinal — central de alarme não registra o evento",
        desc: "Pressostato com contato oxidado não envia sinal para a central de alarme quando o fluxo ocorre. Em incêndio real, o sistema descarrega água mas a central não registra o evento e não aciona sirenes. Na manutenção semestral, o teste do pressostato é obrigatório.",
      },
      {
        titulo: "Clapet com micro-vazamento — falso alarme e pressão reduzida",
        desc: "Clapet com vedação deteriorada permite fluxo contínuo para a linha de alarme — campainha soa intermitentemente sem incêndio. Além do falso alarme, a pressão do sistema cai gradualmente, podendo acionar o pressostato e a jockey pump continuamente.",
      },
      {
        titulo: "Manômetros fora da calibração — sistema sem referência de pressão",
        desc: "Manômetros com ponteiro travado ou danificado não mostram a pressão real. Uma queda de pressão na rede — por micro-vazamento ou abertura parcial de válvula — não é detectada. A NBR 10897 recomenda calibração dos manômetros pelo menos a cada 5 anos.",
      },
      {
        titulo: "Linha de alarme entupida — campainha não aciona mesmo com fluxo",
        desc: "Sedimento de calcário, ferrugem e biofilme acumulam na linha de alarme de 3/4\" ao longo dos anos. A linha entupida impede que a pressão chegue à campainha — que permanece silenciosa mesmo quando o clapet está aberto e há fluxo no sistema.",
      },
      {
        titulo: "Ausência de relatório de manutenção — não renovação do AVCB",
        desc: "A IT 23/25 exige manutenção semestral documentada com relatório assinado por técnico habilitado. O CBPMESP pode solicitar os relatórios dos últimos 2 anos na renovação do AVCB. Ausência de relatórios é Comunique-se específico sobre manutenção.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 realiza a manutenção da Válvula de Governo e Alarme (VGA)",
    etapas: [
      {
        numero: "SEMESTRAL",
        titulo: "Inspeção visual completa do conjunto",
        desc: "Verificação visual de todos os componentes: estado externo da carcaça, ausência de corrosão em flanges e conexões, integridade da tubulação de alarme, ausência de micro-vazamento no clapet (gota na saída da campainha), estado das válvulas OS&Y e borboleta de governo.",
      },
      {
        numero: "SEMESTRAL",
        titulo: "Verificação de pressões e funcionamento do pressostato",
        desc: "Leitura dos manômetros de alimentação e sistema com registro dos valores. Teste do pressostato com acionamento manual (quando disponível) ou pela torneira de teste auxiliar — verificação de sinal na central de alarme sem realizar trip test completo.",
      },
      {
        numero: "ANUAL",
        titulo: "Trip test completo com registro de pressões",
        desc: "Abertura da torneira de teste no ponto mais desfavorecido: verificação de acionamento da campainha hidráulica (tempo de resposta), sinal do pressostato na central de alarme, pressão diferencial entre alimentação e sistema durante o fluxo, e recampiamento do clapet após fechamento da torneira.",
      },
      {
        numero: "QUANDO NECESSÁRIO",
        titulo: "Limpeza da linha de alarme e da campainha",
        desc: "Desmontagem da linha de alarme para limpeza de sedimento e calcário. Desmontagem da campainha para limpeza e lubrificação da palheta. Necessária quando a campainha demora mais do que 60 segundos para responder após abertura da torneira de teste.",
      },
      {
        numero: "QUANDO NECESSÁRIO",
        titulo: "Substituição de clapet, junta e vedações",
        desc: "Clapet com micro-vazamento crônico ou que não recobre completamente após o trip test deve ser substituído. A operação inclui drenagem da zona, substituição do clapet e rejuntas, preenchimento e novo trip test para confirmação.",
      },
      {
        numero: "AO FINAL",
        titulo: "Relatório técnico com laudo para AVCB",
        desc: "Relatório fotográfico com registro de pressões antes e após manutenção, resultado do trip test (tempo de resposta da campainha, sinal de alarme), componentes substituídos e recomendações. Laudo técnico para compor dossiê de renovação do AVCB.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 23/25 exige na manutenção da Válvula de Governo e Alarme (VGA)",
    body1:
      "A IT 23/25 estabelece manutenção semestral obrigatória para sistemas de sprinkler — incluindo a VGA e todos os seus componentes de trim. O trip test anual é o mínimo exigido para verificação funcional completa do conjunto.",
    alerta:
      "O relatório de manutenção deve conter: data, técnico responsável, resultado de cada verificação, pressões registradas, resultado do teste do pressostato e conclusão sobre o estado do sistema. Relatório sem esses itens não é aceito pelo CBPMESP como evidência de manutenção.",
    itens: [
      {
        titulo: "Manutenção semestral documentada obrigatória",
        desc: "A IT 23/25 exige inspeção semestral do sistema de sprinkler com relatório técnico. A VGA é item específico de verificação — componentes do trim, pressões, ausência de vazamentos e funcionamento dos dispositivos de alarme.",
      },
      {
        titulo: "Trip test anual com registro de resultados",
        desc: "O trip test completo deve ser realizado pelo menos uma vez ao ano, com registro de: pressão de alimentação no início do teste, tempo de resposta da campainha, sinal do pressostato na central, pressão residual durante o fluxo e pressão de recuperação após fechamento.",
      },
      {
        titulo: "Verificação do pressostato na central de alarme",
        desc: "O teste do pressostato não termina na verificação de que o relé fechou — deve ser verificado que o sinal chegou corretamente à central de alarme, foi registrado no log da central e acionou os dispositivos de anúncio configurados.",
      },
      {
        titulo: "Registro de pressões para comparação histórica",
        desc: "Os relatórios de manutenção devem registrar as pressões de alimentação e sistema em cada inspeção. A queda progressiva de pressão ao longo dos relatórios indica micro-vazamento em algum ponto da rede — mais fácil de identificar com dados históricos do que na inspeção isolada.",
      },
    ],
    closing:
      "A DRD2 realiza manutenção de VGA com trip test documentado, relatório técnico completo e laudo para renovação do AVCB — incluindo identificação de componentes que precisam de substituição antes da próxima vistoria.",
  },
  h2_quando: {
    heading: "Quando realizar a manutenção da Válvula de Governo e Alarme (VGA)?",
    body1:
      "Manutenção semestral obrigatória — o calendário deve ser acordado entre a contratação e o vencimento do AVCB para garantir que os dois relatórios semestrais estejam disponíveis para a renovação. O trip test anual deve ser realizado com antecedência suficiente para correção de qualquer problema identificado antes da vistoria.",
    body2:
      "Manutenção imediata: campainha disparando sem abertura de bico (clapet com vedação danificada), gota constante na saída da campainha, pressostato com sinal permanente na central de alarme ou queda de pressão identificada nos manômetros sem causa aparente.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para manutenção de Válvula de Governo e Alarme (VGA) em SP?",
    body1:
      "A DRD2 realiza manutenção de VGA com trip test real — não apenas inspeção visual com check-list. Cada manutenção inclui registro fotográfico de pressões, resultado do trip test e identificação antecipada de componentes que precisam de substituição.",
    body2:
      "Contrato de manutenção com visitas semestrais programadas: a DRD2 agenda as visitas no início do contrato com antecedência suficiente para resolver qualquer não-conformidade antes da renovação do AVCB.",
  },
  h2_cobertura: {
    heading: "Manutenção de Válvula de Governo e Alarme (VGA) para sprinkler em toda a Grande SP",
    body1:
      "A DRD2 realiza manutenção de VGA em edificações de todos os portes em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para contratos de manutenção fora da Grande SP, avaliamos roteiro e frequência conforme o número de edificações na mesma região. O diagnóstico inicial pode ser feito por videochamada com fotos do conjunto de VGA.",
  },
  faqs: [
    {
      question: "O trip test precisa ser feito com todo o sistema desligado?",
      answer:
        "Não — o trip test é feito com o sistema pressurizando. Abre-se a torneira de teste (inspector's test connection) no ponto mais desfavorecido, simulando o fluxo de um único bico. O clapet da VGA abre, a água passa pela linha de alarme, aciona a campainha e o pressostato. Após o teste, a torneira é fechada e o clapet recobre. O sistema permanece pressurizado durante todo o procedimento.",
    },
    {
      question: "A manutenção semestral da VGA pode ser feita por qualquer empresa?",
      answer:
        "A IT 23/25 exige manutenção por empresa ou profissional habilitado, com emissão de relatório técnico. Para que o relatório seja aceito pelo CBPMESP na renovação do AVCB, deve ser assinado por técnico responsável identificado. A DRD2 emite relatório técnico formal com resultado de cada verificação.",
    },
    {
      question: "O que fazer se a campainha não responder no trip test?",
      answer:
        "A campainha sem resposta indica obstrução na linha de alarme ou palheta travada. O procedimento é: (1) verificar se há fluxo na linha com manômetro auxiliar; (2) se houver fluxo mas a campainha não gira, limpar ou substituir a palheta; (3) se não houver fluxo, limpar a linha de alarme de 3/4\". Após a correção, repetir o trip test para confirmação.",
    },
    {
      question: "Com que frequência o clapet da VGA precisa ser substituído?",
      answer:
        "Não há prazo definido por norma — a substituição é indicada quando o clapet apresenta micro-vazamento crônico (gota constante na saída da campainha), não recobre completamente após o trip test, ou quando a inspeção visual identificar deterioração do disco de borracha. Com manutenção regular, clapets de boa qualidade duram de 10 a 20 anos.",
    },
    {
      question: "O relatório de manutenção da VGA serve para renovar o AVCB?",
      answer:
        "Sim, desde que o relatório contenha: identificação do sistema e do endereço, data da manutenção, nome e registro do técnico responsável, resultado de cada item verificado (incluindo pressões registradas e resultado do trip test), e conclusão sobre o estado do sistema. O CBPMESP pode solicitar os relatórios dos últimos 2 anos na renovação.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/instalacao-vga-sprinkler-sp", label: "Instalação de VGA" },
    { href: "/projeto-vga-sistema-sprinkler-sp", label: "Projeto de VGA" },
    { href: "/teste-comissionamento-vga-sp", label: "Teste e Comissionamento de VGA" },
    { href: "/adequacao-vga-avcb-sp", label: "Adequação de VGA para AVCB" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "MANUTENÇÃO DE VÁLVULA DE GOVERNO E ALARME (VGA) EM SP — TRIP TEST DOCUMENTADO + LAUDO AVCB",
    body: "Manutenção semestral obrigatória com trip test anual. Relatório técnico aceito pelo CBPMESP para renovação do AVCB.",
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
