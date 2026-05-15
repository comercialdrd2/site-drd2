import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/quanto-custa-vga-sprinkler-sp",
  meta: {
    title: "Quanto Custa Válvula de Governo e Alarme (VGA) para Sprinkler em SP? — Preço e Escopo | DRD2 Engenharia",
    description: "Entenda o custo de Válvula de Governo e Alarme (VGA) em SP: instalação completa, projeto, manutenção e adequação. O que impacta o preço e por que o diagnóstico é gratuito.",
  },
  eyebrow: "Custo de Válvula de Governo e Alarme (VGA) para Sprinkler — O que Impacta o Preço em São Paulo",
  h1Line1: "Quanto Custa a Válvula de Governo e Alarme (VGA)",
  h1Line2: "para Sprinkler em SP? — Instalação, Projeto e Manutenção",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "O custo de uma VGA para sprinkler não é um número único — ele depende do DN (DN65 custa significativamente menos que DN200), do escopo do serviço (instalação completa vs. adequação de trim), da distância entre a VGA e a torneira de teste (que determina o comprimento da linha de alarme), e se há integração com central de alarme existente ou nova. O diagnóstico técnico gratuito é o primeiro passo — ele define o escopo mínimo de intervenção necessário e permite orçamento preciso sem surpresas na execução.",
  introP2:
    "A DRD2 realiza diagnóstico técnico gratuito da VGA existente ou do sistema novo, define o escopo de instalação, projeto ou adequação e apresenta proposta com custo detalhado por item. Não trabalhamos com orçamento de balcão para VGA — o custo real só pode ser definido com o diagnóstico do sistema específico.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Quanto Custa a Válvula de Governo e Alarme (VGA)" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "O que determina o custo de uma Válvula de Governo e Alarme (VGA) para sprinkler?",
    body: "Cinco fatores principais determinam o custo total de uma VGA: (1) DN da válvula — VGA DN65 e DN80 têm preços unitários significativamente menores que DN150 e DN200; (2) Conjunto de trim — campainha, pressostato, manômetros, dreno e torneira de teste somam 40% a 60% do custo total da instalação; (3) Cabeamento do pressostato — o comprimento do cabo da VGA até a central de alarme varia de 5 a 200 metros dependendo da edificação; (4) Posição da torneira de teste — instalar a torneira no ponto mais desfavorecido pode exigir instalação em andar superior ou extremidade oposta da edificação; (5) ART de projeto e execução CREA-SP — custo fixo por serviço, independente do DN.",
    body2:
      "O custo de adequação de VGA existente — que é o serviço mais frequente — é menor que o de instalação nova porque a válvula principal é reaproveitada. A adequação foca nos componentes de trim ausentes ou inoperantes: cabeamento do pressostato (custo de mão de obra e material de eletroduto), instalação de campainha faltante, instalação de torneira de teste no ponto correto. Em muitos casos, a adequação completa custa menos de 30% do custo de substituição da VGA inteira.",
  },
  h2_riscos: {
    heading: "O que encarece a Válvula de Governo e Alarme (VGA) — e o que reduz o custo",
    intro:
      "Esses 6 fatores são os que mais impactam o custo total de instalação ou adequação de Válvula de Governo e Alarme (VGA) — alguns para cima, alguns que permitem redução de escopo.",
    itens: [
      {
        titulo: "DN maior — custo progressivo, não linear",
        desc: "Uma VGA DN65 custa cerca de 30% a 40% do preço de uma VGA DN150 do mesmo fabricante. O custo não é linear com o DN — um DN duplo não significa custo duplo. Por isso, o cálculo hidráulico que define o DN mínimo adequado é diretamente econômico: instalar DN maior do que o necessário é desperdício.",
      },
      {
        titulo: "Cabeamento longo do pressostato — custo de eletroduto e mão de obra",
        desc: "Em edificações grandes, a VGA pode estar no subsolo e a central de alarme no pavimento superior — 50 a 100 metros de cabeamento em eletroduto. O custo de mão de obra e material para esse cabeamento pode ser maior que o custo do pressostato em si. Verificar o trajeto antes do orçamento é essencial.",
      },
      {
        titulo: "Torneira de teste em andar superior — instalação e ramal",
        desc: "A torneira de teste deve estar no ponto mais desfavorecido do sistema — frequentemente no último andar ou no extremo mais distante da rede. Instalar a torneira nesse ponto exige ramal de tubulação adicional e ponto de escoamento no andar mais alto. O custo de instalação da torneira de teste no ponto correto pode ser maior que a torneira em si.",
      },
      {
        titulo: "Necessidade de ART de projeto — custo adicional para retrofit",
        desc: "Para substituição de VGA com DN diferente do original, ou para qualquer adequação que altere o sistema, é necessária ART de projeto além da ART de execução. Sistemas com documentação existente (projeto aprovado, memorial de cálculo) têm custo de ART de projeto menor do que sistemas sem documentação — que exigem levantamento e cálculo completos.",
      },
      {
        titulo: "Trim apenas (sem troca de válvula) — redução de custo significativa",
        desc: "Muitas não-conformidades de VGA são de trim incompleto — a válvula principal funciona mas faltam campainha, pressostato integrado ou torneira de teste. Nesses casos, a adequação custa de 20% a 40% do custo de substituição da VGA inteira. O diagnóstico define se a válvula principal precisa ser trocada — ou se o trim resolve.",
      },
      {
        titulo: "Acesso difícil — shaft, espaço confinado, necessidade de andaime",
        desc: "VGAs instaladas em locais de difícil acesso (shafts estreitos, tetos altos, áreas com necessidade de andaime) têm custo de mão de obra maior — independente do DN. O diagnóstico identifica as condições de acesso antes do orçamento para evitar revisões de proposta.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 chega ao orçamento — do diagnóstico à proposta",
    etapas: [
      {
        numero: "PASSO 01",
        titulo: "Diagnóstico técnico gratuito",
        desc: "Visita técnica ou análise por videochamada com fotos do sistema existente. Identificação das não-conformidades, do escopo mínimo de adequação e do tipo de serviço necessário (instalação nova, adequação de trim, substituição de VGA).",
      },
      {
        numero: "PASSO 02",
        titulo: "Definição do escopo mínimo de intervenção",
        desc: "Baseado no diagnóstico: quais componentes precisam ser instalados ou substituídos, qual o trajeto do cabeamento do pressostato, onde instalar a torneira de teste, se é necessária ART de projeto ou apenas de execução.",
      },
      {
        numero: "PASSO 03",
        titulo: "Verificação de necessidade de cálculo hidráulico",
        desc: "Se houver dúvida sobre o DN correto (sistema ampliado, mudança de uso) ou se a VGA existente não tem projeto com memorial de cálculo: cálculo hidráulico para confirmar o DN antes de especificar o equipamento. Evita comprar VGA de DN errado.",
      },
      {
        numero: "PASSO 04",
        titulo: "Proposta com custo detalhado por item",
        desc: "Proposta com discriminação por item: VGA (fabricante, modelo, DN), campainha, pressostato, manômetros, torneira de teste, eletroduto e cabeamento, mão de obra de instalação, ART de projeto (se necessário), ART de execução, trip test e laudo. Sem valores globais opacos.",
      },
      {
        numero: "PASSO 05",
        titulo: "Execução com escopo fechado",
        desc: "Execução exatamente do que foi proposto — sem surpresas de escopo. Se durante a execução for identificado problema adicional (assento corroído, por exemplo), comunicação prévia ao cliente antes de qualquer intervenção adicional.",
      },
      {
        numero: "PASSO 06",
        titulo: "Trip test e laudo com resultado numérico",
        desc: "Trip test após a execução com resultado registrado. Laudo técnico com ART de execução CREA-SP — documentação que o CBPMESP aceita na primeira vistoria.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Faixas de custo por tipo de serviço de Válvula de Governo e Alarme (VGA)",
    body1:
      "Apresentamos faixas de referência por tipo de serviço — não preços fixos, porque o custo real depende do DN, do acesso e do escopo específico de cada edificação. O diagnóstico gratuito permite definir o custo exato antes da proposta.",
    alerta:
      "Orçamento de VGA baseado apenas em DN sem visita técnica tem alta probabilidade de revisão — o custo de cabeamento, acesso e localização da torneira de teste pode ser maior que o custo da válvula em si. A DRD2 não orça VGA sem diagnóstico presencial ou por videochamada.",
    itens: [
      {
        titulo: "Adequação de trim (sem troca de válvula)",
        desc: "Instalação de campainha, pressostato cabeado e torneira de teste em VGA existente que já tem corpo da válvula em bom estado. Escopo mais frequente e mais econômico. Inclui ART de execução e trip test de confirmação. Prazo: geralmente 1 dia de trabalho.",
      },
      {
        titulo: "Substituição de clapet (sem troca da VGA)",
        desc: "Substituição do disco de borracha e juntas em VGA existente com micro-vazamento crônico. Inclui drenagem da zona, substituição, preenchimento e trip test. Prazo: 4 a 6 horas. Custo menor que substituição da VGA inteira.",
      },
      {
        titulo: "Instalação de VGA nova (DN65 a DN100)",
        desc: "Instalação completa de VGA com conjunto de trim: válvula, campainha, pressostato cabeado, manômetros, dreno e torneira de teste. Inclui projeto com ART, instalação, integração com central de alarme e trip test. Prazo: 1 a 2 dias.",
      },
      {
        titulo: "Instalação de VGA nova (DN150 a DN200)",
        desc: "Para centros de distribuição, galpões Extra G1/G2 e sistemas com alta demanda de vazão. Inclui projeto hidráulico com memorial de cálculo, ART de projeto, instalação com flangeamento, trim completo, integração e trip test. Prazo: 2 a 4 dias.",
      },
    ],
    closing:
      "A DRD2 realiza diagnóstico técnico gratuito que define o escopo mínimo de intervenção — sem indicar substituição completa quando a adequação de trim resolve. O orçamento é apresentado com custo detalhado por item antes da aprovação.",
  },
  h2_quando: {
    heading: "Quando o investimento em Válvula de Governo e Alarme (VGA) é mais urgente?",
    body1:
      "Urgência máxima: Comunique-se do CBPMESP com prazo específico sobre a VGA ou o sistema de sprinkler. Após o prazo, o CBPMESP pode lavrar auto de infração e iniciar processo de interdição. A DRD2 prioriza casos com Comunique-se ativo — diagnóstico em até 24h após a visita técnica.",
    body2:
      "Urgência moderada: renovação de AVCB próxima (menos de 60 dias) com VGA sem laudo de manutenção recente, VGA com micro-vazamento (campainha soando ou jockey pump acionando frequentemente) ou VGA sem integração do pressostato com a central. Cada um desses casos é identificado no diagnóstico gratuito.",
  },
  h2_escolher: {
    heading: "Por que o diagnóstico gratuito da DRD2 é o ponto de partida certo?",
    body1:
      "O diagnóstico técnico gratuito não é uma visita comercial — é uma avaliação técnica que define exatamente o que precisa ser feito e o que pode ser mantido. A DRD2 não indica substituição de VGA quando o trim resolve. O escopo mínimo de adequação protege o cliente de intervenções desnecessárias.",
    body2:
      "Proposta detalhada por item antes da execução: o cliente sabe exatamente o que está comprando, qual o prazo e qual o resultado esperado (aprovação na vistoria do CBPMESP). ART de projeto e execução CREA-SP incluídas em todos os serviços.",
  },
  h2_cobertura: {
    heading: "Orçamento de Válvula de Governo e Alarme (VGA) em toda a Grande SP",
    body1:
      "A DRD2 realiza diagnóstico e orçamento de VGA em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para edificações fora da Grande SP com Comunique-se ativo, realizamos avaliação inicial por videochamada com fotos do sistema existente para definir o escopo antes da visita técnica presencial.",
  },
  faqs: [
    {
      question: "O diagnóstico técnico é realmente gratuito?",
      answer:
        "Sim — a visita técnica de diagnóstico é gratuita e sem compromisso de contratação. O diagnóstico inclui: avaliação visual da VGA e do trim, leitura dos manômetros, verificação do estado do pressostato (com teste de sinal na central quando possível) e definição do escopo mínimo de adequação. O laudo e o trip test fazem parte do serviço contratado, não do diagnóstico gratuito.",
    },
    {
      question: "Posso só comprar a VGA e contratar mão de obra separada?",
      answer:
        "Tecnicamente sim — você pode comprar a VGA diretamente do fabricante ou distribuidor e contratar instalação separada. O risco é a incompatibilidade: a VGA instalada precisa ter DN correto pelo cálculo hidráulico, trim completo conforme NBR 10897 e ART de execução CREA-SP. Se a mão de obra contratada não tiver engenheiro CREA-SP habilitado, a ART de execução não pode ser emitida e o laudo não será aceito pelo CBPMESP.",
    },
    {
      question: "O projeto de VGA tem custo separado da instalação?",
      answer:
        "O projeto com ART de projeto é parte do escopo quando é necessário: instalação nova, substituição por DN diferente, ou retrofit de VGA em sistema sem projeto existente. Para adequação de trim em VGA existente com projeto aprovado, é necessária apenas ART de execução — sem novo projeto. O diagnóstico define se o projeto é necessário ou não.",
    },
    {
      question: "Manutenção semestral de VGA — quanto custa?",
      answer:
        "O custo do contrato de manutenção semestral depende do número de VGAs, da localização da edificação e do escopo de cada visita (inspeção visual vs. trip test anual). A DRD2 apresenta proposta de contrato de manutenção após o diagnóstico gratuito — com visitas semestrais programadas e trip test anual incluído no contrato.",
    },
    {
      question: "Adequação de urgência (Comunique-se ativo) tem custo adicional?",
      answer:
        "A DRD2 não cobra adicional de urgência sobre o custo do serviço — o escopo e o preço são os mesmos. O que muda é a prioridade de agendamento: casos com Comunique-se ativo têm diagnóstico em até 24h e execução iniciada no menor prazo possível. A urgência não eleva o custo do serviço, mas a antecipação de agenda pode exigir ajuste no planejamento da DRD2.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/instalacao-vga-sprinkler-sp", label: "Instalação de VGA" },
    { href: "/adequacao-vga-avcb-sp", label: "Adequação de VGA para AVCB" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de VGA" },
    { href: "/quanto-custa-sistema-sprinkler-sp", label: "Quanto Custa Sprinkler em SP" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
  ],
  ctaFinal: {
    heading: "ORÇAMENTO DE VÁLVULA DE GOVERNO E ALARME (VGA) EM SP — DIAGNÓSTICO GRATUITO + PROPOSTA POR ITEM",
    body: "Diagnóstico técnico gratuito. Escopo mínimo de intervenção. Proposta detalhada por item antes da execução.",
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
