import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/valvula-alarme-incendio-sp",
  meta: {
    title: "Válvula de Alarme de Incêndio em SP — Campainha Hidráulica e Pressostato | DRD2",
    description: "Entenda a válvula de alarme de incêndio — Válvula de Governo e Alarme (VGA) — em SP: como a campainha hidráulica aciona, o papel do pressostato, o que o CBPMESP verifica e quando é necessária manutenção ou substituição.",
  },
  eyebrow: "Válvula de Alarme de Incêndio — Válvula de Governo e Alarme (VGA), Campainha Hidráulica e Pressostato em SP",
  h1Line1: "Válvula de Alarme de Incêndio",
  h1Line2: "em SP — Campainha Hidráulica e Pressostato",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "A 'válvula de alarme de incêndio' é o nome pelo qual a VGA (válvula de governo e alarme) é frequentemente referenciada em documentos e conversas técnicas — especificamente pela sua função de sinalização de ativação do sistema de sprinkler. Quando um bico abre em incêndio, a VGA detecta a queda de pressão e ativa dois tipos de alarme: mecânico (campainha hidráulica — sem necessidade de energia elétrica) e elétrico (pressostato — sinal para a central de alarme). Essa dupla sinalização é exigida pela IT 23/25 do CBPMESP para aprovação do AVCB.",
  introP2:
    "A campainha hidráulica e o pressostato são os componentes de alarme da VGA — e os que mais frequentemente apresentam falha silenciosa: a campainha acumula sedimento e para de girar; o pressostato tem o contato oxidado e não envia sinal. Nenhuma dessas falhas é visível externamente — só o trip test revela. A DRD2 verifica, mantém e substitui esses componentes em toda a Grande SP com diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Válvula de Alarme de Incêndio" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "Como a Válvula de Governo e Alarme (VGA) aciona os dois tipos de alarme — mecânico e elétrico?",
    body: "Quando o clapet da VGA levanta (queda de pressão por abertura de bico), a água entra na câmara de alarme e flui pela linha de alarme de 3/4\" em direção à campainha hidráulica. A pressão do fluxo faz a palheta da campainha girar — o alarme mecânico audível começa a soar. Esse alarme funciona sem energia elétrica: é puramente hidráulico, acionado pela pressão da água. Em incêndio com queda de energia, a campainha continua soando.",
    body2:
      "Simultaneamente, a pressão na linha de alarme pressuriza o diafragma do pressostato. Quando a pressão atinge o valor de setpoint do pressostato (geralmente 0,15 a 0,30 bar), o contato elétrico fecha. O sinal elétrico chega à central de alarme, que identifica a zona (pelo ponto onde o pressostato está conectado), aciona sirenes, notifica a brigada e pode registrar o evento com data e hora. A central de alarme normalmente está em modo supervisório — o pressostato muda o estado do ponto de 'normal' para 'alarme'.",
  },
  h2_riscos: {
    heading: "6 falhas da campainha e do pressostato detectáveis somente no trip test",
    intro:
      "Esses são os modos de falha mais frequentes nos componentes de alarme da Válvula de Governo e Alarme (VGA) — todos invisíveis na inspeção visual.",
    itens: [
      {
        titulo: "Palheta da campainha travada por calcário",
        desc: "Em sistemas de água com alta dureza (acima de 200 mg/L CaCO3), o calcário se deposita na câmara interna da campainha ao longo dos anos. A palheta trava e não gira mais. No trip test: o fluxo passa pela linha de alarme, a pressão está correta, mas a campainha permanece silenciosa. Solução: desmontagem, limpeza com solução ácida diluída e verificação de giro livre antes da reinstalação.",
      },
      {
        titulo: "Campainha soando mas com atraso acima de 60 segundos",
        desc: "A linha de alarme parcialmente obstruída (por sedimento ou biofilme) permite que a pressão chegue à campainha, mas com atraso. A norma permite ≤ 60 segundos entre a abertura da torneira de teste e o início do soar da campainha. Atraso acima desse limite é reprovação — mesmo que a campainha finalmente responda.",
      },
      {
        titulo: "Pressostato com contato oxidado — sinal não chega à central",
        desc: "O contato elétrico interno do pressostato oxida em ambientes úmidos ou com variações de temperatura frequentes. O clapet abre, a campainha soa, mas o contato do pressostato não fecha — a central de alarme não registra o evento. Em incêndio real: combate com água, mas sem notificação elétrica da central.",
      },
      {
        titulo: "Pressostato com setpoint incorreto — não responde na pressão do sistema",
        desc: "O pressostato deve fechar o contato na pressão de trabalho da linha de alarme durante o fluxo. Um pressostato configurado para pressões mais altas do que a pressão real na linha de alarme nunca fecha o contato — mesmo com fluxo normal. Identificado apenas pela simulação de fluxo real no trip test.",
      },
      {
        titulo: "Cabeamento do pressostato desconectado ou rompido",
        desc: "O cabeamento do pressostato até a central é frequentemente o elo mais fraco: passa por shafts, zonas de calor e é sujeito a danos em reformas. Um cabeamento rompido ou desconectado — inclusive em remodelações do quadro de alarme — deixa o pressostato fisicamente instalado mas eletricamente inoperante.",
      },
      {
        titulo: "Linha de alarme com micro-vazamento — pressão insuficiente para a campainha",
        desc: "Um micro-vazamento na linha de alarme de 3/4\" (na junta de rosca da campainha, no pressostato ou em uma conexão intermediária) faz a pressão do fluxo cair antes de chegar à câmara da campaninha. A palheta gira devagar ou não gira — a campainha responde mas com giro lento e som fraco.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 verifica e mantém os componentes de alarme da Válvula de Governo e Alarme (VGA)",
    etapas: [
      {
        numero: "INSPEÇÃO SEMESTRAL",
        titulo: "Verificação visual e funcional do pressostato",
        desc: "Verificação de que o cabeamento do pressostato está íntegro e conectado à central. Teste de pressão no pressostato (abrindo levemente a torneira de dreno auxiliar) para confirmar que o sinal chega à central no tempo correto. Verificação do estado externo da campainha (sem corrosão, dreno livre).",
      },
      {
        numero: "TRIP TEST ANUAL",
        titulo: "Cronometragem da campainha e verificação do sinal na central",
        desc: "Trip test completo pela torneira de teste no ponto mais desfavorecido: cronometragem do tempo de resposta da campainha (critério: ≤ 60 segundos), verificação de que o evento aparece na central com identificação correta da zona, e verificação de que os dispositivos de anúncio foram acionados.",
      },
      {
        numero: "QUANDO NECESSÁRIO",
        titulo: "Limpeza da campainha e da linha de alarme",
        desc: "Desmontagem da campainha para limpeza da palheta e da câmara interna. Lavagem da linha de alarme de 3/4\" com purga de água para remoção de sedimento e biofilme. Necessária quando o tempo de resposta da campainha estiver próximo ou acima do limite, ou quando o giro da palheta for visivelmente lento.",
      },
      {
        numero: "QUANDO NECESSÁRIO",
        titulo: "Substituição do pressostato",
        desc: "Pressostato com contato oxidado ou com setpoint fora da faixa de trabalho deve ser substituído. A substituição é realizada com o sistema pressurizado (sem drenagem) — o pressostato é rosqueado na linha de alarme com válvula de isolamento. O novo pressostato é calibrado na faixa correta antes da instalação.",
      },
      {
        numero: "QUANDO NECESSÁRIO",
        titulo: "Substituição da campainha hidráulica",
        desc: "Campainha com câmara interna com corrosão estrutural ou com palheta irrecuperável deve ser substituída. A substituição inclui verificação da linha de alarme, instalação da nova campainha com junta nova e trip test de confirmação.",
      },
      {
        numero: "AO FINAL",
        titulo: "Relatório técnico com todos os resultados",
        desc: "Registro de: tempo de resposta da campainha no trip test, sinal do pressostato na central, componentes substituídos ou limpos e recomendações para a próxima manutenção. Laudo para composição do dossiê de renovação do AVCB.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 23/25 exige sobre os componentes de alarme da Válvula de Governo e Alarme (VGA)",
    body1:
      "A IT 23/25 do CBPMESP exige que a VGA tenha campainha hidráulica e pressostato integrado com a central de alarme. A integração do pressostato não é opcional — o CBPMESP verifica ativamente na vistoria se o sinal do pressostato chega à central e identifica a zona corretamente.",
    alerta:
      "Sistemas instalados antes de 2020 frequentemente têm pressostato fisicamente presente na VGA mas não conectado à central — instalado como 'enfeite'. Na vistoria atual do CBPMESP, a ausência de sinal elétrico do pressostato na central é Comunique-se imediato, mesmo que a campainha funcione.",
    itens: [
      {
        titulo: "Campainha hidráulica obrigatória — alarme mecânico independente de energia",
        desc: "A IT 23/25 exige alarme sonoro mecânico (campainha hidráulica) no sistema de sprinkler. Esse alarme é independente de energia elétrica — funciona mesmo em blackout. A ausência da campainha, ou campainha presente mas inoperante no trip test, resulta em Comunique-se.",
      },
      {
        titulo: "Pressostato integrado com a central de alarme — sinal identificado",
        desc: "O sinal do pressostato deve chegar à central de alarme e identificar a zona de sprinkler específica (não apenas um sinal genérico de 'sprinkler ativo'). O laudo de comissionamento deve registrar o nome do ponto na central e o resultado do teste de integração.",
      },
      {
        titulo: "Tempo de resposta da campainha — critério de aprovação",
        desc: "A NBR 10897 estabelece tempo máximo de resposta da campainha após a abertura da torneira de teste. O valor de referência é ≤ 60 segundos, mas pode variar conforme o comprimento da linha de alarme. O trip test deve registrar o tempo exato — não apenas 'funcionou'.",
      },
      {
        titulo: "Manutenção semestral documentada dos componentes de alarme",
        desc: "A IT 23/25 exige que a verificação do pressostato e da campainha esteja documentada nos relatórios de manutenção semestral. Relatório que liste apenas 'VGA inspecionada' sem registrar o resultado do teste de cada componente não é aceito pelo CBPMESP como evidência de manutenção adequada.",
      },
    ],
    closing:
      "A DRD2 verifica campainha e pressostato com cronometragem e registro fotográfico em cada manutenção — documentação que demonstra ao CBPMESP que os componentes de alarme estão funcionando conforme os critérios da IT 23/25.",
  },
  h2_quando: {
    heading: "Quando substituir campainha ou pressostato?",
    body1:
      "Substituição da campainha: quando o trip test mostrar tempo de resposta acima de 60 segundos e a limpeza não resolver, quando a câmara interna tiver corrosão estrutural visível na desmontagem, ou quando a palheta estiver partida. A campainha tem vida útil típica de 15 a 25 anos com manutenção regular.",
    body2:
      "Substituição do pressostato: quando o contato elétrico estiver oxidado e o sinal não chegar à central no trip test, quando o setpoint estiver fora da faixa ajustável, ou quando o pressostato tiver sinal permanente na central sem fluxo real. A substituição do pressostato é um serviço simples — realizado em menos de uma hora sem drenagem do sistema.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para manutenção e substituição de componentes de alarme de Válvula de Governo e Alarme (VGA)?",
    body1:
      "A DRD2 substitui campainha e pressostato com especificação correta de setpoint e compatibilidade com a VGA existente — não apenas fornece o componente. Cada substituição é seguida de trip test de verificação para confirmar que o novo componente opera dentro dos critérios da IT 23/25.",
    body2:
      "Processo com laudo e ART: a substituição de componente de alarme é registrada no laudo técnico com o resultado do trip test pós-substituição — documentação para a renovação do AVCB e para o histórico de manutenção do sistema.",
  },
  h2_cobertura: {
    heading: "Manutenção de campainha e pressostato de Válvula de Governo e Alarme (VGA) em toda a Grande SP",
    body1:
      "A DRD2 verifica e substitui componentes de alarme de VGA em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para diagnóstico de pressostato sem sinal na central ou campainha sem resposta, o diagnóstico pode ser feito na mesma visita do trip test — identificação da causa e execução da correção em uma única mobilização quando possível.",
  },
  faqs: [
    {
      question: "A campainha hidráulica pode ser substituída sem drenar o sistema de sprinkler?",
      answer:
        "Sim — a campainha hidráulica está na linha de alarme (não na rede de sprinkler diretamente). A substituição é feita fechando a válvula de isolamento da linha de alarme (quando disponível) ou usando a válvula de dreno auxiliar para isolar o trecho. O sistema principal de sprinkler permanece pressurizado durante a substituição. Se não houver válvula de isolamento na linha de alarme, a drenagem da zona pode ser necessária.",
    },
    {
      question: "O pressostato pode ser ajustado sem ser substituído?",
      answer:
        "Pressostatos com setpoint ajustável podem ser recalibrados se o setpoint atual estiver fora da faixa de trabalho mas o contato elétrico estiver em bom estado. Pressostatos com contato oxidado devem ser substituídos — não há como recuperar o contato elétrico oxidado de forma confiável. A DRD2 verifica o tipo de pressostato e avalia se o ajuste resolve antes de indicar substituição.",
    },
    {
      question: "Campainha soando intermitentemente sem incêndio — o que pode ser?",
      answer:
        "Três causas mais comuns: (1) micro-vazamento no clapet da VGA — a pressão do sistema cai e o clapet abre periodicamente, enviando fluxo para a linha de alarme; (2) pressão instável na rede de alimentação — variação de pressão que faz o clapet oscilar; (3) micro-vazamento na linha de alarme (na rosca da campainha ou no pressostato) que cria pressão hidrostática suficiente para girar lentamente a palheta. O trip test de diagnóstico identifica a causa.",
    },
    {
      question: "Qual a diferença entre campainha hidráulica e campainha elétrica de incêndio?",
      answer:
        "A campainha hidráulica (water motor gong) é acionada pelo fluxo de água na linha de alarme da VGA — funciona sem energia elétrica, por pressão hidráulica. A campainha elétrica (ou sirene eletrônica) de incêndio é acionada pela central de alarme via sinal elétrico do pressostato ou detector. A VGA tem as duas: a campainha hidráulica para o alarme mecânico imediato e o pressostato para acionar a central que, por sua vez, aciona as sirenes elétricas do sistema de alarme.",
    },
    {
      question: "O CBPMESP pode testar a campainha presencialmente na vistoria?",
      answer:
        "Sim — em vistorias de renovação de AVCB, o CBPMESP pode solicitar que o trip test seja executado presencialmente. A campainha deve soar em até 60 segundos e o pressostato deve identificar a zona na central de alarme. A DRD2 recomenda realizar o trip test preventivo com laudo antes da vistoria — para corrigir qualquer falha identificada antes que o vistoriador solicite o teste.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/o-que-e-valvula-governo-alarme", label: "O que é VGA?" },
    { href: "/como-funciona-vga-sprinkler", label: "Como Funciona a VGA" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de VGA" },
    { href: "/teste-comissionamento-vga-sp", label: "Trip Test de VGA" },
    { href: "/alarmes", label: "Sistema de Alarme de Incêndio" },
  ],
  ctaFinal: {
    heading: "CAMPAINHA E PRESSOSTATO DE VÁLVULA DE GOVERNO E ALARME (VGA) EM SP — VERIFICAÇÃO + SUBSTITUIÇÃO + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. Trip test com cronometragem real. Componentes substituídos com laudo e ART CREA-SP.",
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
