import UniversalSeoPage, { UniversalPageData } from "@/components/UniversalSeoPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plano de Emergência contra Incêndio em São Paulo | DRD2 Engenharia",
  description: "Elaboração de Plano de Emergência contra Incêndio conforme IT-16 do CBPMESP. Regularização para indústrias, condomínios e galpões. Diagnóstico gratuito.",
  alternates: {
    canonical: "https://www.drd2.com.br/plano-de-emergencia-contra-incendio-sp",
  },
};

const pageData: UniversalPageData = {
  slug: "plano-de-emergencia-contra-incendio-sp",
  meta: {
    title: "Plano de Emergência contra Incêndio em São Paulo | DRD2 Engenharia",
    description: "Elaboração de Plano de Emergência contra Incêndio conforme IT-16 do CBPMESP. Regularização para indústrias, condomínios e galpões. Diagnóstico gratuito.",
  },
  eyebrow: "IT-16 CBPMESP — CONFORMIDADE TOTAL",
  h1Line1: "Plano de Emergência",
  h1Line2: "contra Incêndio SP",
  heroBg: "/images/blog/fire_safety_equipment_premium.webp",
  introP1: "O Plano de Emergência é o documento técnico que define as ações a serem adotadas em caso de sinistro, garantindo a evacuação segura e o combate inicial às chamas conforme a IT-16 do Corpo de Bombeiros.",
  introP2: "Essencial para indústrias, galpões e edificações complexas, o plano é requisito obrigatório para a emissão e renovação do AVCB em São Paulo.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Plano de Emergência" },
  ],
  h2_principal: {
    heading: "Por que sua empresa precisa de um Plano de Emergência?",
    body: "Diferente de um simples laudo, o Plano de Emergência é uma estratégia viva. Ele mapeia as rotas de fuga, define as atribuições da brigada de incêndio e estabelece os procedimentos para o abandono de área em situações críticas. Sem ele, mesmo com hidrantes instalados, a edificação pode ser reprovada na vistoria do Corpo de Bombeiros.",
    body2: "Na DRD2 Engenharia, elaboramos planos personalizados que levam em conta a carga de incêndio específica do seu imóvel, garantindo não apenas o papel para o AVCB, mas a segurança real de todos os ocupantes.",
  },
  h2_riscos: {
    heading: "Os perigos de operar sem um Plano Técnico",
    intro: "A ausência de um plano de emergência estruturado gera riscos que vão além das multas administrativas.",
    itens: [
      { titulo: "Pânico Generalizado", desc: "Sem rotas e pontos de encontro definidos, a evacuação desordenada pode causar acidentes graves." },
      { titulo: "Reprovação no AVCB", desc: "A IT-16 exige o plano protocolado. A falta dele impede a regularização da edificação." },
      { titulo: "Responsabilidade Civil", desc: "O síndico ou dono da empresa responde judicialmente se ocorrer um sinistro sem plano de emergência." },
      { titulo: "Negativa de Seguro", desc: "Seguradoras podem se recusar a pagar indenizações se os planos de emergência estiverem ausentes ou vencidos." },
      { titulo: "Incapacidade da Brigada", desc: "Sem o plano, a brigada de incêndio não sabe exatamente como agir nos primeiros minutos do fogo." },
      { titulo: "Multas Pesadas", desc: "A fiscalização do CBPMESP aplica sanções severas para locais de alto risco sem plano de emergência." },
    ],
  },
  h2_processo: {
    heading: "Como elaboramos seu Plano de Emergência",
    etapas: [
      { numero: "Etapa 01", titulo: "Vistoria Técnica", desc: "Analisamos o layout da edificação, sistemas instalados e carga de incêndio." },
      { numero: "Etapa 02", titulo: "Mapeamento de Riscos", desc: "Identificamos os pontos críticos e as rotas de fuga mais eficientes." },
      { numero: "Etapa 03", titulo: "Definição de Ações", desc: "Estabelecemos o passo a passo para abandono de área e combate inicial." },
      { numero: "Etapa 04", titulo: "Treinamento da Brigada", desc: "Orientamos os responsáveis sobre como aplicar o plano na prática." },
      { numero: "Etapa 05", titulo: "Protocolo e ART", desc: "Emitimos a ART de engenharia e entregamos o plano pronto para o AVCB." },
      { numero: "Etapa 06", titulo: "Revisão Periódica", desc: "Mantemos o plano atualizado conforme mudanças no layout ou na legislação." },
    ],
  },
  h2_detalhes: {
    heading: "O que compõe o Plano de Emergência IT-16",
    body1: "O documento deve seguir rigorosamente as normas técnicas para ser aceito pelo Corpo de Bombeiros e ser realmente útil em uma emergência.",
    alerta: "PLANOS GENÉRICOS SÃO REJEITADOS PELO CORPO DE BOMBEIROS",
    itens: [
      { titulo: "Descrição da Edificação", desc: "Dados técnicos sobre área, altura, ocupação e carga de incêndio." },
      { titulo: "Procedimentos Básicos", desc: "Alerta, análise da situação, apoio externo e abandono de área." },
      { titulo: "Planta de Emergência", desc: "Representação gráfica das rotas, hidrantes, extintores e saída de emergência." },
      { titulo: "Divisão de Brigada", desc: "Organograma com os nomes e funções dos brigadistas e líderes." },
    ],
    closing: "O Plano de Emergência da DRD2 é entregue em formato digital e físico, pronto para auditorias e fiscalizações.",
  },
  h2_quando: {
    heading: "Quando o Plano de Emergência é Obrigatório?",
    body1: "O Plano é obrigatório para edificações com área construída superior a 1.500m² ou que possuam riscos específicos (IT-16). Locais de reunião de público, indústrias e hospitais sempre devem possuir o plano atualizado.",
    body2: "Se sua edificação teve alteração de layout, mudança de atividade ou troca da equipe da brigada, o plano de emergência deve ser revisado imediatamente para manter a validade do AVCB.",
  },
  h2_escolher: {
    heading: "Por que escolher a DRD2 Engenharia?",
    body1: "Somos especialistas em engenharia contra incêndio de alta complexidade. Nossos planos não são apenas 'cópias', mas estudos técnicos reais sobre o seu imóvel.",
    body2: "Garantimos a aprovação técnica e oferecemos suporte total em caso de vistorias do Corpo de Bombeiros.",
  },
  h2_cobertura: {
    heading: "Atendimento em Toda Grande São Paulo",
    body1: "Realizamos vistorias presenciais para elaboração de Plano de Emergência em São Paulo, Guarulhos, ABC, Barueri e região.",
    body2: "Nossa equipe técnica se desloca até sua unidade para garantir o levantamento preciso de todos os riscos e rotas de fuga.",
  },
  faqs: [
    { question: "Qual a validade do Plano de Emergência?", answer: "O plano deve ser revisado sempre que houver alteração física na edificação ou mudança na composição da brigada de incêndio. Recomenda-se a revisão anual." },
    { question: "O Plano de Emergência substitui o AVCB?", answer: "Não. O Plano de Emergência é um dos documentos necessários para obter o AVCB. Ele faz parte do processo de regularização." },
    { question: "Quem pode assinar o Plano de Emergência?", answer: "Deve ser elaborado e assinado por um Engenheiro com registro no CREA e emissão de ART (Anotação de Responsabilidade Técnica)." },
    { question: "O que acontece se eu não tiver o plano na vistoria?", answer: "O vistoriador emitirá um 'Comunique-se', e o AVCB não será emitido ou renovado até que o plano seja apresentado e protocolado conforme a IT-16." },
  ],
  linksInternos: [
    { href: "/avcb-sao-paulo", label: "AVCB São Paulo" },
    { href: "/projeto-incendio-para-avcb-sp", label: "Projeto de Incêndio" },
    { href: "/curso-brigada-incendio-avcb-sp", label: "Treinamento de Brigada" },
  ],
  ctaFinal: {
    heading: "Sua empresa está segura hoje?",
    body: "Não espere o incêndio acontecer ou a fiscalização chegar. Elabore seu Plano de Emergência com quem entende de alta engenharia de incêndio.",
    cta: "PEDIR ORÇAMENTO DE PLANO DE EMERGÊNCIA",
  },
};

export default function Page() {
  return <UniversalSeoPage data={pageData} />;
}
