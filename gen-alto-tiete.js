const fs = require('fs');
const path = require('path');

const cidades = [
  { slug: 'avcb-mogi-das-cruzes', nome: 'Mogi das Cruzes', action: 'Regularização' },
  { slug: 'renovacao-avcb-mogi-das-cruzes', nome: 'Mogi das Cruzes', action: 'Renovação' },
  { slug: 'avcb-suzano', nome: 'Suzano', action: 'Regularização' },
  { slug: 'renovacao-avcb-suzano', nome: 'Suzano', action: 'Renovação' },
  { slug: 'avcb-poa', nome: 'Poá', action: 'Regularização' },
  { slug: 'renovacao-avcb-poa', nome: 'Poá', action: 'Renovação' }
];

const template = (cidade, slug, action) => `import UniversalSeoPage, { UniversalPageData } from "@/components/UniversalSeoPage";

const pageData: UniversalPageData = {
  slug: "/${slug}",
  meta: {
    title: "${action} de AVCB em ${cidade} SP | DRD2 Engenharia",
    description: "${action} e projeto de AVCB e CLCB em ${cidade}. Adequação para indústrias, galpões, condomínios e comércio no Alto Tietê. Sem burocracia e com aprovação garantida.",
  },
  eyebrow: "${action} AVCB - ${cidade}",
  h1Line1: "${action} de AVCB",
  h1Line2: "em ${cidade}",
  heroBg: "/images/blog/blog_hero_mooca_industrial_avcb.png",
  introP1: "A DRD2 Engenharia oferece serviços especializados de ${action.toLowerCase()} de AVCB (Auto de Vistoria do Corpo de Bombeiros) para indústrias, condomínios, centros logísticos e comércio em ${cidade} e região do Alto Tietê.",
  introP2: "Garantimos um processo ágil, sem retrabalho, alinhado às exigências do CBPMESP. Nossa engenharia foca na viabilidade técnica para evitar multas, embargos e problemas com seguradoras.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "AVCB ${cidade}" },
  ],
  h2_principal: {
    heading: "Sua Edificação em ${cidade} Está Regularizada?",
    body: "Muitos galpões industriais e condomínios na região de ${cidade} operam com AVCB vencido ou sequer possuem o documento, expondo-se a riscos graves. O Corpo de Bombeiros fiscaliza intensamente o Alto Tietê devido à alta concentração industrial e logística.",
    body2: "Nós diagnosticamos e resolvemos pendências do seu imóvel, desde o pré-projeto até a obtenção ou renovação do seu certificado de segurança.",
  },
  h2_riscos: {
    heading: "Riscos da Falta do AVCB em ${cidade}",
    intro: "Empresas sem AVCB sofrem penalidades severas que travam os negócios na região do Alto Tietê.",
    itens: [
      {
        titulo: "Interdição",
        desc: "O Corpo de Bombeiros e a Prefeitura de ${cidade} podem interditar totalmente a operação do estabelecimento.",
      },
      {
        titulo: "Negativa de Seguros",
        desc: "Em caso de sinistro, a seguradora negará a indenização caso o AVCB não esteja em vigor e validado.",
      },
      {
        titulo: "Perda de Contratos",
        desc: "Grandes fornecedores e locatários não fecham negócios com galpões irregulares.",
      },
    ],
  },
  h2_processo: {
    heading: "Processo de ${action} em ${cidade}",
    etapas: [
      { numero: "01", titulo: "Vistoria Técnica", desc: "Analisamos sua planta em ${cidade} e os sistemas de incêndio." },
      { numero: "02", titulo: "Engenharia", desc: "Elaboramos ou atualizamos o PPCI (Projeto de Prevenção)." },
      { numero: "03", titulo: "Aprovação", desc: "Acompanhamos a vistoria do CBPMESP até a emissão do documento." },
    ],
  },
  h2_detalhes: {
    heading: "Por que a Especialização Importa?",
    body1: "Regularizar imóveis de alta carga de incêndio ou prédios antigos exige conhecimento prático das Instruções Técnicas do estado de SP.",
    alerta: "Evite curiosos e aventureiros.",
    itens: [
      { titulo: "Cálculo Hidráulico", desc: "Dimensionamos hidrantes e sprinklers para o risco exato do seu negócio em ${cidade}." },
      { titulo: "Desembaraço Rápido", desc: "Eliminamos pendências técnicas que geram 'Comunique-se'." },
    ],
    closing: "Temos vasta experiência no Alto Tietê. A DRD2 é sua parceira de segurança contra incêndio.",
  },
  h2_quando: {
    heading: "Qual o Prazo para o AVCB em ${cidade}?",
    body1: "O prazo varia conforme a área e o risco do imóvel. O CLCB (baixo risco) costuma ser mais rápido, emitido em até 30 dias. Para edificações maiores ou de risco elevado (AVCB), o processo exige análise de projeto e adequações físicas, podendo levar de 60 a 120 dias no total.",
    body2: "Recomendamos que síndicos e gestores de manutenção iniciem o processo de renovação pelo menos 90 dias antes do vencimento do AVCB atual.",
  },
  h2_escolher: {
    heading: "Por que escolher a DRD2 em ${cidade}?",
    body1: "Nosso foco é resolver o problema sem criar novas complicações. Entregamos a aprovação de AVCB com engenharia inteligente e foco no cliente.",
    body2: "Se o seu imóvel precisa de adequação de alarmes, brigada, extintores ou rotas de fuga, nós garantimos a correta execução.",
  },
  h2_cobertura: {
    heading: "Atendimento no Alto Tietê e Grande SP",
    body1: "Atendemos ${cidade}, Itaquaquecetuba, Arujá, Ferraz de Vasconcelos, Biritiba Mirim, Guararema e região.",
    body2: "Nossa equipe realiza visitas técnicas para mapeamento de riscos e orçamentação precisa de sistemas de combate a incêndio.",
  },
  faqs: [
    {
      question: "O Corpo de Bombeiros de ${cidade} tem regras diferentes da capital?",
      answer: "Não. A legislação é estadual (Decreto 63.911/18 e Instruções Técnicas), portanto o Corpo de Bombeiros de ${cidade} cobra os mesmos padrões da capital.",
    },
    {
      question: "Qual a diferença entre AVCB e CLCB em ${cidade}?",
      answer: "O CLCB (Certificado de Licença) é emitido para edificações de menor risco, geralmente até 750m² sem necessidades especiais (como subsolo com grande ocupação). O AVCB (Auto de Vistoria) aplica-se a imóveis maiores ou com maior carga de incêndio (galpões, indústrias, prédios residenciais).",
    },
    {
      question: "Meu galpão em ${cidade} já está pronto, mas o bombeiro pediu adequações. Vocês fazem?",
      answer: "Sim. A DRD2 avalia as solicitações (Comunique-se), elabora a resposta técnica e executa as adequações físicas necessárias (instalação de alarme, rotas de fuga, hidrantes, etc.).",
    },
  ],
  linksInternos: [
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/alarme-incendio-sao-paulo", label: "Sistema de Alarme" },
    { href: "/projetos-incendio", label: "Projetos de Incêndio (PPCI)" },
  ],
  ctaFinal: {
    heading: "Resolvemos seu AVCB em ${cidade}",
    body: "Tire sua empresa ou condomínio da irregularidade. Fale agora com a DRD2 e evite multas.",
    cta: "SOLICITAR ORÇAMENTO",
  },
  occupationType: "imóvel em ${cidade}",
};

export const metadata = {
  title: pageData.meta.title,
  description: pageData.meta.description,
  alternates: { canonical: pageData.slug },
};

export default function Page() {
  return <UniversalSeoPage data={pageData} />;
}
`;

for (const c of cidades) {
  const dirPath = path.join(__dirname, 'src', 'app', c.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), template(c.nome, c.slug, c.action), 'utf8');
  console.log('Created: ' + c.slug);
}
