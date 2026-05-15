import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/sistema-sprinkler-hospital-avcb-sp",
  meta: {
    title: "Sistema de Sprinkler para Hospital em SP — IT 23/25 + ANVISA | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sistemas de sprinkler para hospital e clínica em SP. Pré-ação em UTI e CC, IT 23/25, NBR 10897 e ANVISA RDC 50. ART e laudo para AVCB hospitalar. Diagnóstico gratuito.",
  },
  eyebrow: "IT 23/25 + ANVISA RDC 50 — Hospitais, Clínicas e UPAs",
  h1Line1: "Sistema de Sprinkler para Hospital",
  h1Line2: "em São Paulo — Pré-Ação, IT 23/25 e AVCB",
  heroBg: "/images/bg-hospital.jpg",
  introP1:
    "Hospitais e clínicas com internação precisam de sistemas de sprinkler dimensionados para setores com riscos radicalmente diferentes: UTIs e centros cirúrgicos exigem pré-ação seco (dano hídrico proibido), farmácias e lavanderias exigem risco ordinário G2 ou extra, e áreas de internação exigem bicos de resposta rápida. A DRD2 projeta e instala sistemas de sprinkler para hospitais em SP conforme IT 23/25 e ANVISA RDC 50, com ART CREA-SP e laudo para AVCB.",
  introP2:
    "Processo completo: classificação de risco por setor hospitalar, projeto hidráulico setorizado, instalação sem interrupção de operações e laudo aceito pelo CBPMESP e pela ANVISA. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Sprinkler", href: "/sprinklers" },
    { label: "Sprinkler para Hospital" },
  ],
  occupationType: "hospital",
  h2_principal: {
    heading: "Por que hospitais exigem sistemas de sprinkler setorizados e pré-ação?",
    body: "Em ambientes hospitalares, o dano causado pela descarga acidental de água de um sistema convencional pode ser tão grave quanto um incêndio — equipamentos de diagnóstico por imagem, ventiladores mecânicos, monitores de UTI e sistemas cirúrgicos robóticos têm custo de R$ 500 mil a R$ 5 milhões e são destruídos por contato com água. Por isso, a IT 23/25 e a ABNT NBR 10897 permitem e recomendam sistemas de pré-ação seco em setores de alta tecnologia hospitalar: UTI, centro cirúrgico, salas de diagnóstico e CME (Central de Material Esterilizado).",
    body2:
      "No sistema de pré-ação seco, a tubulação permanece pressurizada com ar comprimido. A água só é liberada após dois sinais independentes: (1) ativação do detector de incêndio na área e (2) fusão do bico termossensível. Isso elimina falsas descargas por dano mecânico, vibração ou temperatura ambiente elevada — problemas frequentes em hospitais com equipamentos térmicos. Para o Corpo de Bombeiros e para a ANVISA, o sistema de pré-ação é a solução tecnicamente superior para esses setores.",
  },
  h2_riscos: {
    heading: "O que leva sistemas SPK hospitalares a ser reprovados no CBPMESP",
    intro:
      "Esses 6 problemas são causas recorrentes de reprovação e Comunique-se em hospitais autuados pelo CBPMESP em São Paulo.",
    itens: [
      {
        titulo: "Sistema convencional em UTI ou CC",
        desc: "Instalar sprinkler convencional (molhado) em UTI ou centro cirúrgico é tecnicamente inadequado. O CBPMESP e a ANVISA podem exigir substituição por pré-ação em qualquer vistoria futura, mesmo que o sistema tenha sido aprovado anteriormente.",
      },
      {
        titulo: "Classificação de risco igual para toda a edificação",
        desc: "Projeto que classifica lavanderia hospitalar (risco extra G2 por lençóis e tecidos em grande quantidade) com o mesmo risco do corredor de internação (risco leve) resulta em subdimensionamento em pelo menos um dos setores.",
      },
      {
        titulo: "Bomba sem grupo de pressurização dedicado",
        desc: "Hospitais precisam de bomba dedicada ao sistema de sprinkler, separada da bomba de hidrante. Compartilhar bomba entre sistemas é reprovação automática em vistoria de AVCB para Grupo F-1.",
      },
      {
        titulo: "Bicos sem proteção mecânica em corredores",
        desc: "Corredores hospitalares têm movimentação de macas, equipamentos e camas. Bicos sem proteção mecânica aprovada pelo fabricante são vulneráveis a dano físico — causa de Comunique-se específico na vistoria.",
      },
      {
        titulo: "Ausência de supervisão elétrica da VGA",
        desc: "A IT 23/25 exige supervisão elétrica permanente da válvula de governo para hospitais — qualquer fechamento acidental deve acionar alarme na central do hospital. Sistemas sem supervisão são reprovados.",
      },
      {
        titulo: "Laudo sem conformidade com ANVISA",
        desc: "O laudo de sprinkler hospitalar precisa contemplar os requisitos da ANVISA RDC 50 além da IT 23/25. Laudos que referenciam apenas a IT 23 são aceitos pelo CBPMESP mas podem não satisfazer a auditoria sanitária.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o sistema SPK hospitalar",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Mapeamento de setores e riscos",
        desc: "Classificamos cada setor do hospital: UTI (pré-ação), CC (pré-ação), farmácia (ordinário G2), lavanderia (extra G1), internação (leve/ordinário), restaurante interno (ordinário G2).",
      },
      {
        numero: "ETAPA 02",
        titulo: "Projeto hidráulico por sistema",
        desc: "Cada sistema é projetado independentemente: pré-ação seco para setores críticos, molhado para áreas de baixo risco tecnológico. Cálculo de densidade, reservatório e bomba dedicada por sistema.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Instalação por fases sem interrupção",
        desc: "Execução setorizada com cronograma acordado com a gerência hospitalar. Nenhum setor de atendimento fica sem proteção ativa durante a instalação de outro setor.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Instalação do painel de pré-ação",
        desc: "Painel dedicado ao sistema de pré-ação: supervisão elétrica da VGA, interface com o detector de incêndio, pressostato de ar e alarme de fluxo monitorado pela central do hospital.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Testes completos por sistema",
        desc: "Teste hidrostático, teste de pré-ação (simulação de detecção + acionamento), vazão mínima no ponto mais desfavorecido e teste de bomba. Relatório fotográfico completo por setor.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo para CBPMESP e ANVISA",
        desc: "Emissão de ART de projeto e ART de execução CREA-SP. Laudo técnico no formato aceito pelo CBPMESP para AVCB e pela ANVISA para renovação de licença sanitária.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 23/25 e ANVISA RDC 50 exigem para sprinkler hospitalar",
    body1:
      "Hospitais são Grupo F-1 — a classificação de maior exigência da IT 23/25. A norma determina que cada setor seja classificado individualmente e que o sistema seja dimensionado para o setor de maior risco em operação simultânea com pelo menos uma área adjacente.",
    alerta:
      "Reforma ou ampliação de qualquer setor hospitalar exige atualização do projeto de sprinkler com nova ART — independentemente de o setor reformado já possuir o sistema instalado.",
    itens: [
      {
        titulo: "Pré-ação obrigatório em setores de alta tecnologia",
        desc: "UTI, centro cirúrgico, CME, sala de diagnóstico por imagem e salas com equipamentos eletrônicos de alto valor devem ter sistema de pré-ação seco para evitar dano hídrico por acionamento acidental.",
      },
      {
        titulo: "Classificação de risco da lavanderia hospitalar",
        desc: "Lavanderias hospitalares com grande volume de roupas e secadoras são classificadas como Risco Extra G1 — exigem densidade mínima de 12,2 mm/min sobre 260 m² e bomba de reserva dedicada.",
      },
      {
        titulo: "Bicos de resposta rápida (RTI) em internação",
        desc: "Áreas de internação com pacientes acamados exigem bicos de resposta rápida (RTI ≤ 50 ms¹/²) para ativação mais veloz. Bicos convencionais (RTI > 80) não satisfazem a norma para esse tipo de setor.",
      },
      {
        titulo: "Supervisão elétrica e alarme de fluxo integrado",
        desc: "Cada VGA deve ter supervisão elétrica permanente e alarme de fluxo conectado à central hospitalar. A IT 23/25 exige que qualquer fechamento não autorizado da válvula dispare alarme imediato.",
      },
    ],
    closing:
      "A DRD2 realiza o levantamento técnico gratuito do hospital, mapeia cada setor, define a tecnologia correta e apresenta proposta com laudo aceito pelo CBPMESP e pela ANVISA em um único documento.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema de sprinkler do hospital?",
    body1:
      "A manutenção preventiva semestral é obrigatória para sistemas hospitalares — com frequência maior do que o mínimo normativo para outras ocupações. O laudo técnico com ART deve ser emitido anualmente para renovação simultânea do AVCB e da licença sanitária da ANVISA.",
    body2:
      "Situações de revisão urgente: qualquer reforma ou ampliação de setor, inclusão de equipamento de alto valor em setor com sistema convencional, Comunique-se do CBPMESP sobre o SPK, auditoria sanitária da ANVISA, ou incidente que ativou o sistema sem causa confirmada de incêndio.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema de sprinkler do seu hospital?",
    body1:
      "A DRD2 tem experiência em sistemas de sprinkler para hospitais privados, UPAs, clínicas cirúrgicas e centros de diagnóstico em São Paulo. Cada projeto contempla a dupla conformidade CBPMESP + ANVISA e a setorização correta por tecnologia de sistema — convencional, pré-ação ou ESFR para farmácias.",
    body2:
      "Processo completo sem terceiros: levantamento, projeto hidráulico setorizado, instalação, testes e laudo aceito pelos dois órgãos. Responsabilidade técnica unificada com ART CREA-SP em cada etapa.",
  },
  h2_cobertura: {
    heading: "Sistemas de sprinkler para hospital em toda a Grande SP",
    body1:
      "A DRD2 atende hospitais, clínicas com internação, UPAs e centros diagnósticos em toda a Grande São Paulo: capital, ABC, Guarulhos, Osasco, Campinas, Santos e municípios da região metropolitana.",
    body2:
      "Para unidades fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial pode ser feito por videochamada com análise das plantas e fotos dos sistemas instalados.",
  },
  faqs: [
    {
      question: "Centro cirúrgico e UTI precisam de sistema de pré-ação em vez de sprinkler convencional?",
      answer:
        "Sim. O sistema de pré-ação seco é a solução tecnicamente recomendada para UTI, centros cirúrgicos e salas com equipamentos de alto valor. A tubulação fica sem água até a confirmação de incêndio por dois sinais independentes — eliminando o risco de dano hídrico por acionamento acidental.",
    },
    {
      question: "O laudo de sprinkler hospitalar é aceito tanto pelo CBPMESP quanto pela ANVISA?",
      answer:
        "Sim, desde que elaborado por engenheiro com ART CREA-SP e contemple os requisitos técnicos da IT 23/25 e da ANVISA RDC 50. A DRD2 entrega um único laudo no formato aceito pelos dois órgãos, evitando documentação duplicada.",
    },
    {
      question: "Quais setores do hospital precisam de sprinkler obrigatoriamente?",
      answer:
        "Hospitais com área relevante são Grupo F-1 e precisam de proteção total — todas as áreas cobertas. A diferença está no tipo de sistema: pré-ação para setores de alta tecnologia, sistema molhado convencional para corredores e áreas de suporte, e sistema de risco extra para lavanderia e farmácia de grande porte.",
    },
    {
      question: "A instalação do sprinkler hospitalar pode ser feita sem interromper o hospital?",
      answer:
        "Sim. A DRD2 planeja a instalação por setores, com cronograma acordado com a gerência hospitalar. Nenhum setor de atendimento fica sem proteção durante a execução. As intervenções são realizadas nos horários de menor movimento de cada setor.",
    },
    {
      question: "Com que frequência o sistema de sprinkler hospitalar deve ser revisado?",
      answer:
        "A manutenção preventiva semestral é obrigatória. O laudo técnico com ART deve ser emitido anualmente para renovação do AVCB e da licença sanitária. Para sistemas de pré-ação, recomendamos vistorias trimestrais do sistema de ar comprimido e dos detectores integrados.",
    },
  ],
  linksInternos: [
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
    { href: "/sistema-hidrante-hospital-avcb-sp", label: "Hidrante para Hospital" },
    { href: "/alarme-de-incendio-hospital-clinica-sp", label: "Alarme de Incêndio para Hospital" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "SPRINKLER HOSPITALAR — PRÉ-AÇÃO + IT 23 + ANVISA",
    body: "Diagnóstico técnico gratuito. Laudo aceito pelo CBPMESP e pela ANVISA. Processo completo sem interrupção do hospital.",
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
