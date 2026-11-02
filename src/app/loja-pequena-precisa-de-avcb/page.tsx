import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

// Regras da IT 42/2025 (Portaria CCB 002/800/25), itens 4.2, 6.3, 6.4 e 6.5, conferidas no texto da IT em 02/11/2026.
const data: UniversalPageData = {
  slug: "/loja-pequena-precisa-de-avcb",
  meta: {
    title: "Loja pequena precisa de AVCB? Quando a licença é dispensada em SP",
    description: "Imóvel de até 100 m², térreo e com saída direta para a rua pode não precisar de licença dos Bombeiros (IT 42/2025). Veja as condições e quando vira CLCB ou AVCB.",
  },
  eyebrow: "IT 42/2025 — Dispensa de licença do Corpo de Bombeiros",
  h1Line1: "Loja Pequena Precisa de AVCB?",
  h1Line2: "Quando a Licença dos Bombeiros é Dispensada em SP",
  heroCta: "Ver se o meu imóvel é dispensado",
  whatsappText: "Olá! Quero saber se o meu imóvel precisa de AVCB ou CLCB. Atividade, área e número de andares:",
  heroBg: "/images/banner-hero.webp",
  introP1:
    "Pode não precisar. Pela IT 42/2025 do Corpo de Bombeiros de SP (item 6.3.3), a atividade em imóvel de até 100 m², com um pavimento só, térreo, com saída direta para a rua e sem portas ou janelas para os imóveis vizinhos, é de risco baixo e não precisa de licença do Corpo de Bombeiros. Basta registrar as informações no portal Facilita SP, da Junta Comercial (item 6.4).",
  introP2:
    "A dispensa tem exceções. Ela não vale para locais de reunião de público, como bares, restaurantes, igrejas e academias, nem para quem guarda gás ou líquidos inflamáveis acima dos limites da norma. Se o seu imóvel não se encaixar, o caminho é o CLCB ou o AVCB. Mande a atividade, a área e o número de andares pelo WhatsApp que a DRD2 confere sem custo.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "CLCB", href: "/clcb-sao-paulo" },
    { label: "Loja pequena precisa de AVCB?" },
  ],
  occupationType: "comercial",
  h2_principal: {
    heading: "Quem não precisa de licença do Corpo de Bombeiros em SP",
    body: "A IT 42/2025 (item 6.3) lista três situações de risco baixo, em que a atividade não precisa de licença do Corpo de Bombeiros: (1) atividade em residência unifamiliar, sem receber clientes e sem fabricar, guardar ou manusear produtos; (2) empresa que só usa o endereço para correspondência e trabalha na casa do cliente ou em estrutura itinerante, como trailer ou barraca; e (3) atividade em imóvel de até 100 m², com um pavimento só, térreo, com saída direta dos ocupantes para a via pública e sem nenhuma abertura, como porta ou janela, para os imóveis vizinhos.",
    body2:
      "A terceira situação é a que vale para a maioria das lojas, salas e pequenos escritórios de rua. Todas as condições precisam ser atendidas ao mesmo tempo. Se faltar uma, como um mezanino, uma porta para o imóvel ao lado ou área acima de 100 m², a dispensa não vale.",
  },
  h2_riscos: {
    heading: "Quando a dispensa não vale, mesmo em imóvel pequeno",
    intro:
      "Mesmo com até 100 m², térreo e saída para a rua, a IT 42/2025 (item 6.3.5) não permite a dispensa nestes casos:",
    itens: [
      {
        titulo: "Locais de reunião de público (Grupo F)",
        desc: "Bares, restaurantes, lanchonetes com mesas, igrejas, salões de festas, academias de dança e outros locais que recebem público reunido precisam de licença, qualquer que seja o tamanho.",
      },
      {
        titulo: "Mais de 1 botijão de gás",
        desc: "Usar ou guardar mais do que 1 botijão de 13 kg de GLP, para fins não comerciais, já tira o imóvel da dispensa.",
      },
      {
        titulo: "Mais de 50 litros de líquidos inflamáveis",
        desc: "Guardar ou manusear mais do que 50 L de líquidos combustíveis ou inflamáveis, como solventes, tintas ou combustível, também tira o imóvel da dispensa.",
      },
      {
        titulo: "Outros gases combustíveis",
        desc: "Guardar qualquer outro tipo de gás combustível, em recipiente transportável ou fixo, impede a dispensa.",
      },
      {
        titulo: "Produtos perigosos",
        desc: "Explosivos, substâncias tóxicas, corrosivas, oxidantes, radioativas ou outros produtos perigosos à saúde, ao meio ambiente ou ao patrimônio.",
      },
      {
        titulo: "Fiscalização continua possível",
        desc: "Mesmo dispensado, o imóvel pode receber vistoria de fiscalização do Corpo de Bombeiros (item 6.8). Se houver desconformidade, a Junta Comercial é avisada e pode haver processo de infração (item 6.9).",
      },
    ],
  },
  h2_processo: {
    heading: "Como saber se o seu imóvel é dispensado, passo a passo",
    etapas: [
      {
        numero: "PASSO 01",
        titulo: "Confira a área construída",
        desc: "Até 100 m² de área construída. Use o IPTU ou a planta. Alguns elementos não entram na conta, conforme o artigo 18 do Decreto Estadual nº 69.118/2024 (IT 42/2025, item 6.3.4).",
      },
      {
        numero: "PASSO 02",
        titulo: "Confira o pavimento e a saída",
        desc: "Um pavimento só, térreo, com saída direta dos ocupantes para a rua. Mezanino ou andar de cima tiram o imóvel da dispensa.",
      },
      {
        numero: "PASSO 03",
        titulo: "Confira as aberturas para os vizinhos",
        desc: "Nenhuma porta, janela ou outra abertura para os imóveis vizinhos. Lojas de galeria com acesso interno, por exemplo, não se encaixam.",
      },
      {
        numero: "PASSO 04",
        titulo: "Confira a atividade e o que você guarda",
        desc: "A atividade não pode ser de reunião de público (Grupo F) e não pode ter gás, líquidos inflamáveis ou produtos perigosos acima dos limites da norma.",
      },
      {
        numero: "PASSO 05",
        titulo: "Registre no Facilita SP",
        desc: "Se tudo se encaixar, a licença do Corpo de Bombeiros não é necessária: basta informar os dados no portal Facilita SP, da Junta Comercial (IT 42/2025, item 6.4).",
      },
      {
        numero: "PASSO 06",
        titulo: "Se não se encaixar: CLCB ou AVCB",
        desc: "Se faltar qualquer condição, a licença é obrigatória e é pedida no Via Fácil Bombeiros (item 6.5). A DRD2 confere se o seu caso é CLCB ou AVCB e cuida do processo.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Se não for dispensado: CLCB ou AVCB?",
    body1:
      "Quando o imóvel precisa de licença, a IT 42/2025 define se ela pode ser o CLCB, o certificado simplificado, ou se precisa ser o AVCB. Para ter CLCB, o imóvel precisa cumprir todos estes critérios:",
    alerta:
      "Algumas ocupações nunca podem ter CLCB, qualquer que seja o tamanho: salões de festas, casas noturnas, creches e escolas infantis, teatros e auditórios, asilos, hospitais e clínicas com internação, hotéis com mais de 40 leitos e revenda de GLP (IT 42/2025, item 4.2.3).",
    itens: [
      {
        titulo: "Até 750 m² de área construída",
        desc: "IT 42/2025, item 4.2.1. Acima disso, a licença é o AVCB.",
      },
      {
        titulo: "Até 3 pavimentos",
        desc: "Sem contar subsolos e pavimentos inferiores de estacionamento (item 4.2.2).",
      },
      {
        titulo: "Até 250 pessoas em locais de reunião de público",
        desc: "Vale para o Grupo F, como restaurantes e igrejas (itens 4.1.4 e 4.2.3).",
      },
      {
        titulo: "Sem sistemas que exigem projeto técnico",
        desc: "Se o imóvel precisa de chuveiros automáticos, detecção de incêndio, controle de fumaça, espuma ou escada de segurança, o projeto técnico é obrigatório (item 5.2.1.3).",
      },
    ],
    closing:
      "A DRD2 confere o enquadramento sem custo e diz qual é o caminho do seu imóvel: dispensa, CLCB ou AVCB.",
  },
  h2_quando: {
    heading: "Quando conferir de novo",
    body1:
      "Confira antes de abrir a empresa, de alugar um ponto ou de mudar de atividade. Uma reforma que crie um mezanino, uma porta para o vizinho ou uma área maior pode tirar o imóvel da dispensa e passar a exigir licença.",
    body2:
      "Também confira se você passar a guardar mais gás ou produtos inflamáveis, ou se o espaço começar a receber público reunido, como em eventos ou aulas.",
  },
  h2_escolher: {
    heading: "Por que pedir a conferência para a DRD2",
    body1:
      "Um enquadramento errado custa caro: quem se acha dispensado sem estar fica irregular, e quem pede uma licença que não precisa gasta à toa. A DRD2 confere o caso com a área, a planta e a atividade, com base na IT 42/2025 e no Decreto Estadual nº 69.118/2024.",
    body2:
      "Se a licença for necessária, a DRD2 cuida do processo inteiro, do enquadramento ao certificado, com engenheiro responsável e ART.",
  },
  h2_cobertura: {
    heading: "Atendimento em São Paulo e Grande SP",
    body1:
      "A DRD2 atende a capital e a Grande São Paulo, incluindo ABC, Guarulhos, Osasco e Barueri.",
    body2:
      "A conferência inicial pode ser feita à distância, com fotos, a planta ou o IPTU do imóvel.",
  },
  faqs: [
    {
      question: "Minha loja tem 80 m² e fica no térreo. Preciso de AVCB?",
      answer:
        "Talvez não precise de nenhuma licença do Corpo de Bombeiros. Se a loja tiver um pavimento só, saída direta para a rua, nenhuma abertura para os vizinhos e não for local de reunião de público nem guardar gás ou inflamáveis acima dos limites, ela se enquadra no risco baixo da IT 42/2025 (item 6.3.3) e basta registrar as informações no Facilita SP.",
    },
    {
      question: "Restaurante pequeno é dispensado da licença dos Bombeiros?",
      answer:
        "Não. Restaurantes, bares e lanchonetes com mesas são locais de reunião de público (Grupo F), e a IT 42/2025 (item 6.3.5) não permite a dispensa para esse grupo. Um restaurante pequeno pode ter CLCB, se tiver até 750 m², até 3 pavimentos e até 250 pessoas, e não usar mais de 190 kg de GLP.",
    },
    {
      question: "Loja com mezanino de 90 m² é dispensada?",
      answer:
        "Não. A dispensa exige um pavimento só, exclusivamente térreo (IT 42/2025, item 6.3.3). Com mezanino, a loja precisa de licença. Se cumprir os outros critérios, pode ser o CLCB.",
    },
    {
      question: "Quem trabalha em casa precisa de AVCB?",
      answer:
        "Não, se for residência unifamiliar e não houver atendimento de clientes nem fabricação, armazenamento ou manuseio de produtos no local (IT 42/2025, item 6.3.1).",
    },
    {
      question: "Se eu for dispensado, o Corpo de Bombeiros pode fiscalizar?",
      answer:
        "Pode. A IT 42/2025 (item 6.8) permite vistoria de fiscalização a qualquer momento, e uma desconformidade é comunicada à Junta Comercial (item 6.9).",
    },
  ],
  linksInternos: [
    { href: "/clcb-sao-paulo", label: "CLCB em São Paulo" },
    { href: "/blog/como-emitir-clcb-em-sao-paulo-passo-a-passo", label: "Como emitir o CLCB, passo a passo" },
    { href: "/blog/diferenca-entre-avcb-e-clcb", label: "Diferença entre AVCB e CLCB" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/documentos-necessarios-avcb-sao-paulo", label: "Documentos para o AVCB" },
  ],
  ctaFinal: {
    heading: "PRECISO DE LICENÇA DOS BOMBEIROS? CONFERÊNCIA SEM CUSTO",
    body: "Mande a atividade, a área e o número de andares. A DRD2 diz se o seu imóvel é dispensado, se cabe no CLCB ou se precisa de AVCB.",
    cta: "Conferir o meu imóvel",
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
