import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/adequacao-vga-avcb-sp",
  meta: {
    title: "Adequação de Válvula de Governo e Alarme (VGA) para AVCB em SP — Regularização de Sprinkler | DRD2 Engenharia",
    description: "A DRD2 regulariza Válvula de Governo e Alarme (VGA) para AVCB em SP. Diagnóstico de não-conformidades, substituição de componentes, trip test e laudo para aprovação do CBPMESP. Diagnóstico gratuito.",
  },
  eyebrow: "Adequação de Válvula de Governo e Alarme (VGA) para AVCB — IT 23/25 e NBR 10897 em São Paulo",
  h1Line1: "Adequação de Válvula de Governo e Alarme (VGA) para AVCB",
  h1Line2: "em SP — Regularização do Sprinkler para AVCB",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "A maioria das VGAs que não aprovam na vistoria do CBPMESP não precisa ser substituída integralmente — precisa ser adequada. Trim incompleto, pressostato sem integração com a central de alarme, campainha sem dreno correto, DN subdimensionado ou ausência de torneira de teste são as não-conformidades mais frequentes — e todas têm solução sem troca da válvula principal. A DRD2 diagnostica, especifica e executa a adequação de VGA para aprovação do AVCB em SP com o menor escopo de intervenção necessário.",
  introP2:
    "Processo completo: diagnóstico técnico das não-conformidades existentes, definição do escopo mínimo de adequação, execução das correções, trip test de verificação e laudo com ART para protocolo no CBPMESP. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Adequação de Válvula de Governo e Alarme (VGA) para AVCB" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "Por que a Válvula de Governo e Alarme (VGA) existente não aprova na vistoria do CBPMESP?",
    body: "Sistemas de sprinkler instalados há mais de 10 anos frequentemente têm VGAs que foram aprovadas pelas normas vigentes na época mas não atendem à IT 23/25 atual. As mudanças mais impactantes são: a exigência explícita de integração do pressostato com a central de alarme (antes implícita, hoje verificada ativamente na vistoria), a exigência de torneira de teste no ponto mais desfavorecido (antes aceito em pontos intermediários) e a documentação formal de manutenção com trip test registrado.",
    body2:
      "Outro cenário frequente é o da VGA que foi instalada corretamente mas nunca mantida: clapet com vedação deteriorada, campainha obstruída por sedimento, pressostato com contato oxidado. Esses sistemas têm a VGA fisicamente presente mas não funcional — o trip test revela as falhas que a inspeção visual não mostra. A adequação inclui substituição dos componentes deteriorados e verificação funcional antes do laudo.",
  },
  h2_riscos: {
    heading: "As 6 não-conformidades de Válvula de Governo e Alarme (VGA) mais frequentes na vistoria do CBPMESP em SP",
    intro:
      "Esses são os problemas identificados com maior frequência em adequações de Válvula de Governo e Alarme (VGA) para AVCB em São Paulo.",
    itens: [
      {
        titulo: "Pressostato instalado mas não integrado à central de alarme",
        desc: "A IT 23/25 exige que o sinal do pressostato chegue à central e seja registrado. Sistemas com pressostato presente mas não cabeado — ou cabeado a uma central substituída sem reconexão — têm essa não-conformidade. A adequação exige apenas o cabeamento e a configuração do ponto na central.",
      },
      {
        titulo: "Trim incompleto — campainha, manômetros ou dreno ausentes",
        desc: "VGAs instaladas sem o conjunto completo de trim: sem campainha hidráulica, sem manômetros nos dois lados ou sem dreno principal de 2\". A adequação é a instalação dos componentes faltantes conforme o detalhe de projeto — sem necessidade de trocar a válvula principal.",
      },
      {
        titulo: "DN da VGA incompatível com a demanda atual do sistema",
        desc: "Sistemas ampliados com novos bicos após a instalação original podem ter VGA subdimensionada para a nova demanda de vazão. O cálculo hidráulico com os dados atuais do sistema define se o DN existente ainda é adequado — e se a substituição é necessária.",
      },
      {
        titulo: "Torneira de teste ausente ou em posição incorreta",
        desc: "A torneira de teste deve estar no ponto mais desfavorecido do sistema. Sistemas sem torneira de teste ou com torneira em posição intermediária não podem ser testados corretamente. A adequação inclui instalação da torneira no ponto correto conforme o projeto.",
      },
      {
        titulo: "VGA sem acessibilidade para inspeção e manutenção",
        desc: "VGA encoberta por forro, prateleiras ou fechamento de shaft. A adequação pode exigir remoção do obstáculo pelo proprietário, instalação de porta de acesso no forro ou relocação do trim para acesso externo ao compartimento.",
      },
      {
        titulo: "Ausência de laudo e ART do sistema de sprinkler",
        desc: "Sistemas instalados sem ART ou com ART vencida não têm documentação técnica válida. A adequação inclui a emissão de ART de conformidade após o diagnóstico e o trip test — documentando o estado atual do sistema e sua conformidade com a IT 23/25.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa a adequação de Válvula de Governo e Alarme (VGA) para AVCB",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Diagnóstico técnico completo",
        desc: "Levantamento da VGA existente: fabricante, modelo, DN, estado de conservação dos componentes de trim, verificação de integração do pressostato com a central de alarme, localização e estado da torneira de teste e acessibilidade do conjunto.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Cálculo de verificação de DN",
        desc: "Verificação do número atual de bicos por zona e cálculo de demanda de vazão. Comparação com a capacidade da VGA existente (coeficiente K do modelo). Se o DN atual ainda é adequado, confirma-se; se subdimensionado, a substituição é especificada com justificativa de cálculo.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Definição do escopo mínimo de adequação",
        desc: "Identificação das intervenções necessárias por ordem de impacto: (1) instalação de componentes de trim faltantes; (2) cabeamento do pressostato; (3) instalação ou relocação da torneira de teste; (4) substituição de componentes deteriorados; (5) substituição de VGA (apenas se o DN for incompatível).",
      },
      {
        numero: "ETAPA 04",
        titulo: "Execução da adequação",
        desc: "Execução das intervenções especificadas com interrupção mínima do sistema de sprinkler. Para substituição de clapet e vedações: drenagem da zona, substituição e preenchimento. Para instalação de componentes de trim: execução sem necessidade de drenar o sistema.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Trip test de verificação após adequação",
        desc: "Trip test completo após a execução de todas as intervenções: verificação de campainha, sinal do pressostato na central, pressão residual e recampiamento do clapet. O laudo só é emitido após o trip test aprovado.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo de adequação com ART para AVCB",
        desc: "Laudo técnico descrevendo as não-conformidades encontradas, as intervenções executadas, os resultados do trip test de verificação e a conformidade atual com a IT 23/25. ART de execução CREA-SP vinculada ao laudo.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que o CBPMESP verifica na Válvula de Governo e Alarme (VGA) na vistoria de AVCB",
    body1:
      "Na vistoria de sprinkler para emissão ou renovação do AVCB, o CBPMESP verifica a VGA em três dimensões: documentação (projeto com ART, laudo de comissionamento, relatórios de manutenção), condição física (componentes de trim completos, sem corrosão, acessível) e funcionalidade (trip test com campainha e pressostato funcionais).",
    alerta:
      "Comunique-se específico sobre a VGA tem prazo de regularização definido. Após o prazo, o CBPMESP pode lavrar auto de infração e iniciar processo de interdição. A DRD2 atua com urgência em casos de Comunique-se com prazo próximo ao vencimento.",
    itens: [
      {
        titulo: "Documentação: projeto, ART e laudo",
        desc: "O CBPMESP verifica se o sistema tem projeto com ART de projeto, laudo de comissionamento com ART de execução e relatórios de manutenção dos últimos 12 a 24 meses. A ausência de qualquer documento resulta em Comunique-se.",
      },
      {
        titulo: "Condição física: trim completo e acessível",
        desc: "O vistoriador verifica presença visual de todos os componentes do trim: campainha, pressostato, manômetros, dreno principal e torneira de teste. Também verifica acessibilidade para inspeção e manutenção. Componentes obstruídos ou faltantes resultam em Comunique-se.",
      },
      {
        titulo: "Funcionalidade: campainha e pressostato",
        desc: "Em vistorias de renovação, o CBPMESP pode solicitar a execução do trip test presencialmente. A campainha deve responder no tempo correto e o pressostato deve enviar sinal à central com identificação correta da zona.",
      },
      {
        titulo: "Conformidade com IT 23/25 vigente",
        desc: "Sistemas instalados antes da IT 23/25 podem ter não-conformidades com a versão atual da norma. A adequação prévia à vistoria evita a emissão de Comunique-se e o prazo de regularização sob pressão.",
      },
    ],
    closing:
      "A DRD2 realiza diagnóstico gratuito da VGA existente, identifica todas as não-conformidades com a IT 23/25 vigente e apresenta o escopo mínimo de adequação para aprovação na primeira vistoria do CBPMESP.",
  },
  h2_quando: {
    heading: "Quando solicitar a adequação da Válvula de Governo e Alarme (VGA)?",
    body1:
      "Antes da renovação do AVCB: com pelo menos 60 dias de antecedência para diagnóstico, execução das correções, trip test e emissão do laudo. Antes de qualquer visita de vistoria do CBPMESP após reformas que alterem a rede de sprinkler.",
    body2:
      "Situações urgentes: Comunique-se do CBPMESP com prazo específico sobre a VGA ou sobre o sistema de sprinkler. A DRD2 prioriza atendimentos com Comunique-se ativo — o diagnóstico e o plano de adequação são apresentados em até 24 horas após a visita técnica.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para adequação de Válvula de Governo e Alarme (VGA) para AVCB em SP?",
    body1:
      "A DRD2 diagnostica a VGA existente com cálculo de verificação de DN e trip test — não apenas inspeção visual. O escopo de adequação é o mínimo necessário para conformidade: não substituímos o que ainda funciona e não acrescentamos intervenções desnecessárias.",
    body2:
      "Processo completo: diagnóstico, projeto de adequação com ART, execução, trip test e laudo para AVCB — tudo com a DRD2. A aprovação na vistoria do CBPMESP é o critério de conclusão do trabalho.",
  },
  h2_cobertura: {
    heading: "Adequação de Válvula de Governo e Alarme (VGA) para AVCB em toda a Grande SP",
    body1:
      "A DRD2 atende edificações de todos os portes em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para edificações fora da Grande SP com Comunique-se ativo, realizamos visita técnica com urgência. O diagnóstico inicial pode ser feito por videochamada com análise do Comunique-se e fotos do sistema existente.",
  },
  faqs: [
    {
      question: "Recebi Comunique-se sobre a VGA — o que fazer?",
      answer:
        "O Comunique-se especifica qual não-conformidade foi identificada e o prazo para regularização. O primeiro passo é solicitar diagnóstico técnico para identificar o escopo completo de adequação — o Comunique-se aponta o problema visível, mas pode haver outras não-conformidades que a vistoria ainda não identificou. A DRD2 atua com urgência em casos de Comunique-se ativo.",
    },
    {
      question: "A adequação de VGA sempre exige substituição da válvula?",
      answer:
        "Não. Na maioria dos casos, a não-conformidade é de trim incompleto, pressostato não integrado ou torneira de teste ausente — tudo corrigível sem trocar a válvula principal. A substituição da válvula é necessária apenas quando o DN estiver subdimensionado para a demanda atual ou quando o corpo da válvula apresentar corrosão estrutural irrecuperável.",
    },
    {
      question: "Quanto tempo leva a adequação de uma VGA?",
      answer:
        "A adequação de trim incompleto (instalação de campainha, pressostato e torneira de teste) pode ser concluída em um único dia de trabalho. A substituição completa da VGA por DN diferente leva de 2 a 4 dias — incluindo drenagem do sistema, instalação da nova válvula, preenchimento e trip test. Casos com Comunique-se ativo são priorizados.",
    },
    {
      question: "O laudo de adequação serve para os próximos 12 meses ou preciso de nova documentação logo?",
      answer:
        "O laudo de adequação demonstra a conformidade no momento do teste. Para renovação do AVCB, o CBPMESP pode exigir também os relatórios de manutenção semestral dos 12 meses anteriores. A DRD2 inclui o planejamento de manutenção no contrato de adequação para garantir que a documentação esteja completa na próxima renovação.",
    },
    {
      question: "Posso adequar a VGA sem interromper o sistema de sprinkler?",
      answer:
        "Depende das intervenções necessárias. Instalação de campainha, cabeamento do pressostato e instalação de manômetros podem ser feitos com o sistema pressurizado. Substituição do clapet, substituição da válvula completa ou instalação de torneira de teste exigem drenagem da zona — com interrupção temporária da proteção por sprinkler naquela área.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/instalacao-vga-sprinkler-sp", label: "Instalação de VGA" },
    { href: "/projeto-vga-sistema-sprinkler-sp", label: "Projeto de VGA" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de VGA" },
    { href: "/teste-comissionamento-vga-sp", label: "Teste e Comissionamento de VGA" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
  ],
  ctaFinal: {
    heading: "ADEQUAÇÃO DE VÁLVULA DE GOVERNO E ALARME (VGA) PARA AVCB EM SP — DIAGNÓSTICO + EXECUÇÃO + LAUDO CBPMESP",
    body: "Diagnóstico técnico gratuito. Escopo mínimo de adequação. Aprovação na primeira vistoria do CBPMESP.",
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
