import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/laudo-sprinkler-clinica-sao-paulo",
  meta: {
    title: "Laudo de Sprinkler para Clínica e Hospital em SP | DRD2 Engenharia",
    description: "Laudo técnico de sprinklers para clínicas, consultórios e hospitais em São Paulo. IT 23/2025, ABNT NBR 12693, proximidade de gases medicinais, salas cirúrgicas. ART CREA-SP inclusa.",
  },
  eyebrow: "IT 23 — Sistema de Sprinklers para Clínica e Hospital",
  h1Line1: "Laudo de Sprinkler",
  h1Line2: "para Clínica e Hospital em São Paulo",
  heroBg: "/images/blog/blog_hero_avcb_hospital.webp",
  introP1: "O sprinkler em clínicas e hospitais tem a particularidade mais delicada de todas as ocupações: a água que extingue o incêndio pode danificar equipamentos médicos de valor elevado e, em salas cirúrgicas, contaminar campo estéril. A IT 23/2025 reconhece essa particularidade e permite sistemas alternativos (como sprinkler de pré-ação) para salas de cirurgia e UTI — mas exige que a escolha seja documentada e justificada no projeto com ART.",
  introP2: "A DRD2 emite laudo técnico do sistema de sprinklers para clínicas e hospitais conforme a IT 23/2025 e a ABNT NBR 12693, com verificação da compatibilidade entre o sistema instalado e a classificação de risco de cada área — sala de espera, consultório, CME, sala cirúrgica e depósito de gases medicinais têm exigências distintas.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Laudo de Sprinkler — Clínica SP" },
  ],
  occupationType: "clínica e hospital",
  h2_principal: {
    heading: "Por que o sprinkler de clínica exige projeto específico",
    body: "Estabelecimentos de saúde são classificados no Grupo I pelo Decreto 56.819/2011 — a classificação de maior exigência do CBPMESP. Além da IT 23, clínicas com mais de certo porte precisam seguir a ABNT NBR 12693 (Sistemas de proteção por extinção de incêndio em estabelecimentos assistenciais de saúde). As duas normas se complementam e às vezes divergem — o engenheiro precisa aplicar a mais restritiva em cada caso.",
    body2: "A presença de gases medicinais (O2, N2O) é o fator crítico: o oxigênio acelera drasticamente a combustão de qualquer material. Salas com ponto de oxigênio têm carga de incêndio efetiva muito maior que salas sem gases. O sistema de sprinkler precisa ser dimensionado para essa realidade — e o armazenamento de cilindros de O2 precisa de proteção específica.",
  },
  h2_riscos: {
    heading: "Não-conformes mais comuns em sprinklers de clínicas",
    intro: "Esses são os problemas mais frequentes identificados pela DRD2 em vistorias de clínicas e consultórios em SP:",
    itens: [
      {
        titulo: "Sistema de pré-ação ausente em sala cirúrgica",
        desc: "Salas de cirurgia não podem ter sprinkler convencional (ativação por bulbo de vidro com descarga imediata de água) — a descarga de água em área estéril contamina o campo cirúrgico. A solução é sprinkler de pré-ação, com válvula controlada eletronicamente. Clínicas com cirurgia e sprinkler convencional estão em não-conformidade.",
      },
      {
        titulo: "Armazenamento de cilindros de O2 sem proteção adequada",
        desc: "Sala de armazenamento de cilindros de oxigênio medicinal tem carga de incêndio extraordinária. Sprinkler subdimensionado para esse ambiente é não-conforme com a ABNT NBR 12693.",
      },
      {
        titulo: "CME com cabeças em temperatura de ativação incorreta",
        desc: "A Central de Material Esterilizado usa autoclaves que geram calor e vapor. Cabeças com temperatura de ativação padrão (57°C) podem acionar com o vapor da autoclave. Temperatura de ativação de 93°C ou mais é necessária nessa área.",
      },
      {
        titulo: "UTI com sprinkler convencional sobre leitos",
        desc: "Pacientes imóveis em UTI não podem ser expostos a descarga de água de sprinkler sem aviso e sem possibilidade de evacuação. Sistemas de pré-ação são recomendados — e algumas RDCs da ANVISA os exigem explicitamente.",
      },
      {
        titulo: "Pressão insuficiente para a densidade de risco alto",
        desc: "Clínicas com salas de alto risco (cirurgia, UTI, depósito de medicamentos) precisam de densidade de descarga maior que escritórios ou consultórios simples. Sistema dimensionado para risco ordinário não atende.",
      },
      {
        titulo: "Documentação sem ART compatível com as duas normas",
        desc: "Laudo que cita apenas a IT 23 sem referência à ABNT NBR 12693 em estabelecimentos de saúde pode ser indeferido pelo CBPMESP, que pode solicitar complementação. A DRD2 emite laudo compatível com ambas.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 emite o laudo de sprinkler para clínicas",
    etapas: [
      {
        numero: "01",
        titulo: "Classificação de risco por área",
        desc: "Mapeamos cada ambiente da clínica e classificamos o risco individualmente: sala de espera (ordinário), consultório (ordinário), sala cirúrgica (especial), CME (especial), depósito de O2 (extraordinário).",
      },
      {
        numero: "02",
        titulo: "Verificação do tipo de sistema por área",
        desc: "Confirmamos se o tipo de sprinkler instalado em cada área é compatível com a classificação de risco — especialmente em salas cirúrgicas, UTI e áreas com gases medicinais.",
      },
      {
        numero: "03",
        titulo: "Verificação de temperatura de ativação por ambiente",
        desc: "CME, áreas de autoclave e salas com equipamentos que geram calor recebem verificação específica de temperatura de ativação — para garantir que as cabeças não acionam por calor do processo normal.",
      },
      {
        numero: "04",
        titulo: "Teste de fluxo e pressão no ponto mais desfavorável",
        desc: "Teste de pressão de fluxo com a bomba em operação — no ponto mais distante e mais alto da edificação. Resultado registrado com manômetro calibrado e data.",
      },
      {
        numero: "05",
        titulo: "Laudo com referência às duas normas e ART CREA-SP",
        desc: "Laudo técnico referenciando IT 23/2025 e ABNT NBR 12693, com justificativa do tipo de sistema por área, resultado dos testes e ART CREA-SP — documento aceito pelo CBPMESP e pela ANVISA.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Documentação de sprinkler para o AVCB da clínica",
    body1: "O processo de AVCB ou alvará sanitário de clínicas e hospitais exige os seguintes documentos relativos ao sistema de sprinklers:",
    alerta: "Clínica ou hospital com licença sanitária da ANVISA precisa de AVCB ativo como condição de renovação. Laudo de sprinkler vencido trava o processo de renovação sanitária.",
    itens: [
      { titulo: "Laudo técnico IT 23/2025 + ABNT NBR 12693 com ART", desc: "Laudo com classificação de risco por área, justificativa do tipo de sistema e resultado dos testes. ART CREA-SP recolhida inclusa." },
      { titulo: "Justificativa técnica para sistemas especiais", desc: "Para salas cirúrgicas com sistema de pré-ação ou supressão alternativa, memorial técnico justificando a escolha e comprovando equivalência de proteção." },
      { titulo: "Planta por andar com tipo de sistema por área", desc: "Planta com legenda diferenciando tipo de sprinkler por área — convencional, pré-ação e áreas dispensadas — aceita pelo CBPMESP e pela ANVISA." },
      { titulo: "Relatório de teste de fluxo por setor", desc: "Resultado de pressão de fluxo por setor crítico (cirúrgico, UTI, CME) — comprovando que a densidade de descarga exigida é atingida em cada área de risco." },
      { titulo: "Relatório de manutenção anual ABNT NBR 12693", desc: "Manutenção preventiva dos últimos 12 meses incluindo teste de sistema de pré-ação (quando existente) e inspeção visual das cabeças por setor." },
    ],
    closing: "Clínica em processo de renovação da licença sanitária: a DRD2 emite laudo aceito tanto pelo CBPMESP quanto pela ANVISA — sem necessidade de dois laudos diferentes.",
  },
  h2_quando: {
    heading: "Quando a clínica precisa renovar o laudo de sprinkler",
    body1: "O laudo é exigido na renovação do AVCB e da licença sanitária (geralmente anual para clínicas com internação e a cada 2 a 3 anos para consultórios). Também é necessário quando há reforma que adiciona ou remove salas, quando novos equipamentos de alto calor são instalados e quando há instalação de novos pontos de gases medicinais.",
    body2: "Clínicas que expandem para novas especialidades — especialmente cirurgia ambulatorial, hemodiálise ou quimioterapia — precisam reclassificar o risco das novas áreas e atualizar o laudo. A DRD2 verifica essa necessidade antes de qualquer protocolo.",
  },
  h2_escolher: {
    heading: "Consultorios odontológicos e veterinários: as exigências são as mesmas?",
    body1: "Consultórios odontológicos e clínicas veterinárias seguem a mesma classificação (Grupo I) com algumas diferenças de risco. Consultórios odontológicos com RX e equipamentos de alto calor têm carga de incêndio maior que consultórios simples. Clínicas veterinárias com sala cirúrgica têm as mesmas exigências de salas cirúrgicas humanas.",
    body2: "A DRD2 tem experiência em laudos para todos os tipos de estabelecimento de saúde — de consultório simples a hospital de grande porte. O enquadramento correto na vistoria gratuita garante que o sistema exigido seja o adequado para cada caso.",
  },
  h2_cobertura: {
    heading: "Atendimento para clínicas e hospitais em SP e Grande SP",
    body1: "A DRD2 atende clínicas, consultórios, hospitais, laboratórios e casas de repouso em toda São Paulo Capital e Grande SP. Para estabelecimentos em processo de licenciamento sanitário pela ANVISA ou CVS, a DRD2 emite laudo compatível com ambos os órgãos.",
    body2: "Clínicas em processo de credenciamento de plano de saúde: o AVCB ativo com laudo de sprinkler válido é condição de credenciamento na maioria das operadoras. A DRD2 emite laudo com prazo compatível com o cronograma do credenciamento.",
  },
  faqs: [
    {
      question: "Sala cirúrgica pode ter sprinkler convencional?",
      answer: "Não é recomendado pela ABNT NBR 12693 e pelo CBPMESP. Salas cirúrgicas precisam de sistema de pré-ação ou supressão alternativa que evite descarga de água não intencional em área estéril. A DRD2 projeta e documenta o sistema adequado para cada tipo de sala.",
    },
    {
      question: "A ANVISA e o CBPMESP exigem laudos diferentes?",
      answer: "O laudo técnico com ART CREA-SP referenciando IT 23 e ABNT NBR 12693 é aceito pelos dois órgãos. A DRD2 emite um único laudo compatível com ambas as exigências — sem necessidade de contratar empresas diferentes.",
    },
    {
      question: "A sala de raio-X do consultório precisa de sprinkler?",
      answer: "A sala de RX por si só não tem exigência especial de sprinkler além do padrão — mas o processador de filme (quando existente) e os equipamentos de geração de calor precisam ser considerados no cálculo de carga de incêndio da sala.",
    },
    {
      question: "Depósito de cilindros de oxigênio precisa de sprinkler especial?",
      answer: "Sim. O depósito de cilindros de O2 tem carga de incêndio extraordinária pela presença de oxidante. A IT 23 e a ABNT NBR 12693 exigem sistema dimensionado para risco alto nessa área — com densidade de descarga maior que a das áreas de consultório.",
    },
    {
      question: "Clínica com internação precisa de laudo de sprinkler anual?",
      answer: "A IT 23 exige manutenção anual do sistema. Para clínicas com internação que renovam a licença sanitária anualmente, o relatório de manutenção anual precisa coincidir com o ciclo de renovação. A DRD2 alinha o calendário de manutenção com o calendário de renovações.",
    },
  ],
  linksInternos: [
    { href: "/avcb-hospital-clinica-sao-paulo", label: "AVCB para Clínica e Hospital SP" },
    { href: "/sprinklers", label: "Sistema de Sprinklers SP" },
    { href: "/laudo-alarme-incendio-sao-paulo", label: "Laudo de Alarme de Incêndio SP" },
    { href: "/empresa-avcb-sao-paulo", label: "Empresa de AVCB em SP" },
    { href: "/engenheiro-avcb-sao-paulo", label: "Engenheiro para AVCB em SP" },
    { href: "/renovacao-avcb", label: "Renovação de AVCB em SP" },
  ],
  ctaFinal: {
    heading: "Laudo de sprinkler para a sua clínica — compatível com CBPMESP e ANVISA",
    body: "Engenheiro especialista em estabelecimentos de saúde classifica o risco por área, define o sistema correto e emite laudo aceito pelos dois órgãos.",
    cta: "Solicitar laudo de sprinkler para minha clínica",
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
