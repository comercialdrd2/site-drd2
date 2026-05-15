import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/sistema-alarme-incendio-industria-quimica-sp",
  meta: {
    title: "Alarme de Incêndio para Indústria Química em SP — IT 18/19 e NR-20 | DRD2 Engenharia",
    description: "A DRD2 projeta alarme de incêndio para indústria química em SP. Detectores de chama UV/IR para líquidos inflamáveis, ATEX para áreas classificadas, integração com sistema de shutdown. IT 18/19 e NR-20.",
  },
  eyebrow: "IT 18/19 e NR-20 — Indústrias Químicas e Petroquímicas em SP",
  h1Line1: "Alarme de Incêndio para Indústria Química",
  h1Line2: "em São Paulo — Detectores de Chama, ATEX e NR-20",
  heroBg: "/images/bg-galpao.jpg",
  introP1:
    "Indústrias químicas e petroquímicas são o ambiente mais exigente para projeto de alarme de incêndio em SP. Detectores de fumaça ópticos convencionais são inutilizados pelos vapores de solvente em suspensão antes de qualquer incêndio. A maioria dos incêndios em indústrias químicas é de chama viva sem fumaça visível — líquido inflamável que pega fogo sem produzir a coluna de fumaça que detectores convencionais identificam. O detector correto para esse ambiente é o detector de chama com sensor UV/IR, capaz de identificar a radiação da chama em milissegundos, antes que o incêndio se propague para tanques ou linhas de processo. A DRD2 projeta alarme de incêndio para indústria química em SP conforme IT 18/19 e NR-20.",
  introP2:
    "Processo completo: classificação de áreas conforme NR-20 e ABNT NBR IEC 60079 (ATEX), seleção de detector por tipo de produto e área, projeto com equipamentos certificados para área classificada, integração com sistema de shutdown de emergência e laudo com ART para AVCB. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Alarme de Incêndio", href: "/alarmes" },
    { label: "Alarme para Indústria Química" },
  ],
  occupationType: "industrial",
  h2_principal: {
    heading: "Por que indústrias químicas precisam de detectores completamente diferentes?",
    body: "A IT 18/19 exige que o tipo de detector seja compatível com as características do risco e do ambiente. Em indústrias com solventes, álcoois, hidrocarbonetos e líquidos inflamáveis em geral, o risco primário não é incêndio com fumaça — é chama súbita de líquido derramado, flash fire de vapor acumulado ou explosão de mistura inflamável-ar. Nenhum desses eventos produz fumaça antes da ignição que um detector óptico possa captar. O detector de chama UV/IR responde à radiação emitida pela chama — identificando o incêndio em 2 a 5 segundos após a ignição, antes de qualquer propagação.",
    body2:
      "O segundo desafio exclusivo de indústrias químicas é a classificação de áreas conforme NR-20 e ABNT NBR IEC 60079. Áreas Zona 0, Zona 1 e Zona 2 (ATEX) têm atmosfera potencialmente explosiva — qualquer equipamento elétrico instalado nelas, incluindo detectores de incêndio, deve ser certificado para operação em atmosfera explosiva. Um detector convencional instalado em área classificada é fonte de ignição e constitui risco adicional — além de não-conformidade legal com NR-20 e com as normas de segurança do trabalho.",
  },
  h2_riscos: {
    heading: "O que reprova o alarme de indústria química na vistoria e na fiscalização NR-20",
    intro:
      "Esses 6 problemas são os mais frequentes em indústrias químicas autuadas pelo Corpo de Bombeiros e pela Fiscalização do Trabalho em São Paulo.",
    itens: [
      {
        titulo: "Detector de fumaça em área com vapores de solvente",
        desc: "Detectores ópticos em ambientes com vapores de solvente, tinta ou álcool entram em alarme falso constantemente — e são desligados pela operação para evitar interrupções. O resultado é uma planta sem detecção ativa. A IT 18/19 exige tipo de detector compatível com o ambiente real.",
      },
      {
        titulo: "Equipamento não ATEX em área classificada",
        desc: "Detectores, sirenes e botoeiras sem certificação para área classificada instalados em Zona 0, 1 ou 2 são fonte de ignição em potencial. A NR-20 e a ABNT NBR IEC 60079 exigem equipamentos com certificação Ex — e a fiscalização do trabalho pode interditar a área por risco iminente.",
      },
      {
        titulo: "Ausência de detector de gás integrado ao alarme",
        desc: "Indústrias com GLP, GN, hidrogênio ou vapores de hidrocarboneto devem ter detecção de gás integrada à central de alarme. Sem integração, o sistema de alarme identifica o incêndio mas não o acúmulo de gás que precede a explosão — quando a detecção seria mais útil.",
      },
      {
        titulo: "Central de alarme sem integração com shutdown de emergência",
        desc: "Em indústrias químicas com processo contínuo, o alarme de incêndio deve acionar automaticamente o sistema de shutdown de emergência — fechando válvulas de processo, interrompendo bombas de alimentação e ativando o sistema de ventilação. Central de alarme não integrada ao SDEP é não-conformidade perante NR-20.",
      },
      {
        titulo: "Cobertura inadequada de tanques e bacias de contenção",
        desc: "Tanques de produto inflamável e bacias de contenção são os pontos de maior risco de incêndio rápido. A IT 18/19 exige cobertura de 100% dessas áreas com detector adequado — mas frequentemente o projeto cobre apenas as áreas internas do galpão, deixando tanques descobertos.",
      },
      {
        titulo: "Manutenção sem procedimento de segurança para trabalho em área classificada",
        desc: "A manutenção de detectores em área classificada exige procedimento de Permissão de Trabalho (PT) e, em muitos casos, purga prévia da área. Contratos de manutenção sem esse procedimento formalizados colocam os técnicos em risco e invalidam o registro de manutenção para fins do AVCB.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o alarme de incêndio para indústria química",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Classificação de áreas conforme NR-20 e ATEX",
        desc: "Mapeamento de todas as áreas com presença de líquidos inflamáveis, vapores e gases — classificação em Zona 0, 1 ou 2 (ATEX) e em Categoria de Risco NR-20 (GR-1 a GR-4). Essa classificação define os equipamentos certificados para cada área.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Seleção de detector por tipo de risco",
        desc: "Detector de chama UV/IR para líquidos inflamáveis e tanques, detector de gás para ambientes com vapores em suspensão, detector termovelocimétrico para depósitos fechados com produto embalado, VESDA para áreas de grande volume com produto volátil.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Especificação de equipamentos certificados Ex para área classificada",
        desc: "Detectores, sirenes, botoeiras e módulos de comunicação com certificação ATEX (Ex ia, Ex ib ou Ex d) para instalação em Zona 1 e Zona 2. Equipamentos sem certificação são substituídos antes de qualquer instalação.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Projeto de central com integração ao SDEP",
        desc: "Projeto da central de alarme endereçável com módulos de saída para acionamento do sistema de shutdown de emergência: fechamento de válvulas ESD, parada de bombas de processo, ativação de dilúvio sobre tanques e sinalização do painel de operação.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Instalação com procedimento de segurança",
        desc: "Toda instalação em área classificada é executada com Permissão de Trabalho, análise de risco prévia e, quando necessário, purga da área. Equipe habilitada para trabalho em área com risco de explosão.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Testes, laudo com ART e documentação NR-20",
        desc: "Teste individual de cada detector (incluindo teste de chama com fonte controlada para UV/IR), teste de integração com SDEP, relatório fotográfico e laudo técnico. ART de projeto e execução CREA-SP. Documentação para AVCB e para o Programa de Gerenciamento de Riscos (PGR) NR-20.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 18/19 e a NR-20 exigem para alarme em indústria química",
    body1:
      "Indústrias químicas com produtos inflamáveis ou tóxicos são Grupo G-3 ou G-4 na IT 18/19 com exigências adicionais da NR-20 do MTE. O projeto deve contemplar a classificação de áreas ATEX, os tipos de detector por zona de risco e a integração com os sistemas de segurança de processo.",
    alerta:
      "Qualquer alteração de processo que mude o tipo de produto, a quantidade armazenada ou o layout das áreas classificadas exige revisão do projeto de alarme com nova ART — antes da operação, não após a vistoria ou a fiscalização.",
    itens: [
      {
        titulo: "Detector de chama UV/IR para áreas com líquido inflamável",
        desc: "Áreas com líquido inflamável (ponto de fulgor abaixo de 60°C) devem ter detectores de chama — não detectores de fumaça. O detector UV/IR detecta a radiação da chama em 2 a 5 segundos, antes da propagação. Raio de detecção varia de 10 m a 25 m dependendo do modelo.",
      },
      {
        titulo: "Certificação ATEX para área classificada",
        desc: "Todos os equipamentos elétricos instalados em Zona 0, 1 e 2 (ATEX) devem ter certificação Ex. A NR-20 responsabiliza o empregador pela instalação de equipamentos adequados — e a fiscalização pode interditar área com equipamento não certificado independentemente de AVCB.",
      },
      {
        titulo: "Integração obrigatória com sistema de shutdown",
        desc: "A NR-20 e as normas de segurança de processo exigem que o sistema de detecção de incêndio seja integrado ao sistema de shutdown de emergência (ESD). A central de alarme deve acionar automaticamente o fechamento de válvulas de isolamento ao detectar incêndio em área de processo.",
      },
      {
        titulo: "Manutenção com procedimento de Permissão de Trabalho",
        desc: "A IT 18/19 exige manutenção semestral documentada. Em indústrias químicas, essa manutenção deve ser realizada com PT emitida, análise de risco prévia e procedimento de segurança para trabalho em área com risco de explosão ou intoxicação.",
      },
    ],
    closing:
      "A DRD2 realiza levantamento técnico gratuito da indústria, classifica as áreas conforme NR-20 e ATEX, seleciona os detectores corretos por zona de risco e apresenta proposta com laudo aceito pelo CBPMESP e documentação para o PGR.",
  },
  h2_quando: {
    heading: "Quando revisar o alarme de incêndio da indústria química?",
    body1:
      "A manutenção semestral é obrigatória conforme IT 18/19. Revisão imediata após qualquer alteração de processo que mude o tipo de produto, o volume armazenado ou o layout das áreas classificadas. Revisão após qualquer incidente que acione detectores ou o sistema de shutdown.",
    body2:
      "Situações de revisão imediata: autuação da Fiscalização do Trabalho por equipamento não ATEX em área classificada, Comunique-se do CBPMESP sobre o sistema de alarme, mudança de produto para classe de inflamabilidade superior, ou instalação de novo tanque ou área de processo.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o alarme de incêndio da sua indústria química?",
    body1:
      "A DRD2 tem experiência em sistemas de alarme para indústrias químicas, petroquímicas e farmacêuticas em São Paulo — incluindo projetos com detectores de chama UV/IR, equipamentos ATEX certificados e integração com sistemas ESD de processo.",
    body2:
      "Processo completo: classificação de áreas, projeto com equipamentos certificados, instalação com procedimento de segurança, testes com protocolo ATEX e documentação para AVCB e PGR NR-20 — tudo com a DRD2.",
  },
  h2_cobertura: {
    heading: "Alarme de incêndio para indústria química em toda a Grande SP",
    body1:
      "A DRD2 atende indústrias químicas, petroquímicas, farmacêuticas e de tintas em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Jundiaí, Santo André, São Bernardo e municípios da região metropolitana.",
    body2:
      "Para indústrias fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial inclui análise do PGR existente e das plantas de classificação de áreas quando disponíveis.",
  },
  faqs: [
    {
      question: "Por que detectores de fumaça não funcionam em indústria química?",
      answer:
        "Vapores de solvente, álcool, tinta e produtos químicos em suspensão disparam alarmes falsos constantemente em detectores ópticos — levando a equipe a desligá-los. Além disso, incêndios de líquido inflamável produzem chama viva sem fumaça visível nos primeiros segundos, quando a detecção seria mais útil. O detector correto é o de chama UV/IR, que responde à radiação da chama em 2 a 5 segundos.",
    },
    {
      question: "O que é certificação ATEX e por que é obrigatória?",
      answer:
        "ATEX (Atmosphères EXplosibles) é a certificação europeia para equipamentos seguros em atmosferas com risco de explosão. No Brasil, a norma equivalente é a ABNT NBR IEC 60079. A NR-20 obriga o uso de equipamentos certificados Ex em áreas classificadas (Zona 0, 1 e 2) — detectores sem ATEX instalados nessas áreas são fontes de ignição e podem causar a explosão que deveriam detectar.",
    },
    {
      question: "O alarme de incêndio da indústria química precisa acionar o shutdown automático?",
      answer:
        "Sim, em indústrias com processo contínuo. A NR-20 exige integração do sistema de detecção com o sistema de shutdown de emergência (ESD). Ao detectar incêndio em área de processo, a central de alarme deve acionar automaticamente o fechamento de válvulas de isolamento e a parada das bombas de alimentação — antes que o operador tome qualquer ação manual.",
    },
    {
      question: "Indústria química precisa de AVCB mesmo com NR-20?",
      answer:
        "Sim. O AVCB e a conformidade com NR-20 são obrigações independentes — uma não substitui a outra. O AVCB é emitido pelo CBPMESP com base na IT 18/19 e demais ITs. A conformidade NR-20 é fiscalizada pelo MTE. Uma indústria pode ter AVCB em dia e ser autuada pela NR-20, e vice-versa.",
    },
    {
      question: "Com que frequência o alarme de indústria química deve ser revisado?",
      answer:
        "Manutenção semestral obrigatória pela IT 18/19, com teste individual de cada detector conforme protocolo do fabricante. Para detectores de chama UV/IR, o teste deve ser feito com fonte de chama controlada — não apenas com fumaça ou calor. A documentação da manutenção deve estar disponível para a Fiscalização do Trabalho e para o CBPMESP.",
    },
  ],
  linksInternos: [
    { href: "/alarmes", label: "Alarme de Incêndio em SP" },
    { href: "/alarme-incendio-centro-distribuicao-sp", label: "Alarme para Centro de Distribuição" },
    { href: "/sprinkler-centro-distribuicao-sp", label: "Sprinkler para Centro de Distribuição" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "ALARME PARA INDÚSTRIA QUÍMICA — ATEX + UV/IR + INTEGRAÇÃO SDEP",
    body: "Diagnóstico técnico gratuito. Detectores corretos para área classificada. Laudo para AVCB e documentação NR-20.",
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
