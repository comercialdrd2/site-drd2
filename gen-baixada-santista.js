const fs = require('fs'), path = require('path');

function mp(d) {
  return `import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";
const data: UniversalPageData = ${JSON.stringify(d, null, 2)};
export const metadata = { title: data.meta.title, description: data.meta.description, alternates: { canonical: data.slug } };
export default function Page() { return <UniversalSeoPage data={data} />; }
`;
}

function genCidade(p) {
  const n = p.nome, reg = p.regiao;
  return {
    dir: p.dir, slug: `/${p.dir}`,
    meta: {
      title: `AVCB em ${n} — Regularização Completa | DRD2 Engenharia`,
      description: `AVCB e CLCB em ${n}: ${p.desc}. Engenheiros credenciados CREA-SP, diagnóstico gratuito e processo completo até o certificado do Corpo de Bombeiros.`,
    },
    eyebrow: `${reg} — Especialistas em AVCB em ${n}`,
    h1Line1: `AVCB em ${n}`,
    h1Line2: `Regularização Completa — Baixada Santista SP`,
    heroBg: '/images/banner-hero.webp',
    introP1: `Especialistas em AVCB e CLCB em ${n}: ${p.desc}. A DRD2 Engenharia atua na Baixada Santista com equipe técnica própria, diagnóstico gratuito e processo completo do levantamento ao certificado do Corpo de Bombeiros.`,
    introP2: `Diagnóstico técnico em até 24h, protocolo no CBPMESP sem pendências e acompanhamento da vistoria. Mais de 2.500 regularizações realizadas em São Paulo e Baixada Santista.`,
    breadcrumbs: [{label:'Home',href:'/'},{label:`AVCB ${n}`}],
    occupationType: `imóvel em ${n}`,
    h2_principal: {
      heading: `Quem precisa de AVCB em ${n}?`,
      body: `Em ${n}, a obrigatoriedade de AVCB ou CLCB segue o Decreto Estadual 56.819/2011 do Estado de São Paulo, aplicável a todos os municípios paulistas. Precisam de documentação do Corpo de Bombeiros: condomínios residenciais acima de 3 pavimentos ou 750m², estabelecimentos comerciais e de serviços acima de 750m², pousadas, hotéis, restaurantes com grande capacidade, galpões e depósitos, clínicas, escolas e qualquer ocupação classificada como médio ou alto risco conforme a Tabela A do Decreto. A Baixada Santista tem perfil específico de imóveis: grande volume de condomínios de praia, pousadas e hotéis próximos ao litoral que frequentemente operam com AVCB vencido ou sem certficação.`,
      body2: `Imóveis até 750m² e baixo risco em ${n} geralmente se enquadram no CLCB — processo mais ágil e com custo menor. A DRD2 faz o enquadramento correto gratuitamente: definimos qual documento é necessário para o seu imóvel específico antes de qualquer protocolo, evitando o erro de enquadramento que rejeita o processo logo no início.`,
    },
    h2_riscos: {
      heading: `Riscos de operar sem AVCB em ${n}`,
      intro: `Estabelecimentos em ${n} sem AVCB ou CLCB válido estão expostos aos mesmos riscos de qualquer imóvel irregular em São Paulo — o Corpo de Bombeiros do Estado de SP fiscaliza toda a Baixada Santista.`,
      itens: [
        {titulo:'Interdição pelo CBPMESP',desc:`O Corpo de Bombeiros pode realizar vistoria em ${n} por fiscalização rotineira ou denúncia anônima, interditando imediato o imóvel irregular — especialmente em pousadas e estabelecimentos com grande fluxo de turistas.`},
        {titulo:'Multa de até R$ 50.000',desc:'Cada infração identificada gera multa individual. A reincidência dobra o valor. Estabelecimentos com múltiplas irregularidades podem acumular valores muito acima do teto por item.'},
        {titulo:'Alvará de funcionamento bloqueado',desc:`A Prefeitura de ${n} nega renovação do alvará para estabelecimentos sem AVCB/CLCB válido — tornando a operação totalmente irregular perante dois órgãos ao mesmo tempo.`},
        {titulo:'Seguro patrimonial inválido',desc:'Em sinistro com documentação irregular, a seguradora nega o pagamento integralmente, independente do valor do bem. Muito frequente em pousadas da Baixada Santista que operam sem AVCB.'},
        {titulo:'Responsabilidade penal',desc:'O proprietário ou responsável legal responde civil e criminalmente por omissão em caso de incêndio com vítimas em imóvel sem certificação — independente de ser imóvel de praia ou temporada.'},
        {titulo:'Bloqueio em locação e venda',desc:`Venda, locação e financiamento do imóvel em ${n} ficam bloqueados com AVCB ausente ou vencido. Due diligence de compradores e imobiliárias sempre verifica a regularidade junto ao CBPMESP.`},
      ],
    },
    h2_detalhes: {
      heading: `Tipos de imóvel que a DRD2 regulariza em ${n}`,
      body1: `A DRD2 tem experiência em todos os tipos de ocupação característicos de ${n} e da Baixada Santista. Cada tipo tem especificidades nas Instruções Técnicas do CBPMESP que precisam ser atendidas com precisão para aprovação na vistoria.`,
      alerta: 'Diagnóstico gratuito — definimos o documento correto antes de qualquer protocolo.',
      itens: p.ocup.map(o => ({titulo: o.nome, desc: o.desc})),
      closing: `A DRD2 atua em ${n} com equipe própria para levantamento técnico in loco, elaboração de projeto PPCI, execução de sistemas e acompanhamento junto ao CBPMESP. Diagnóstico gratuito e orçamento fechado antes do início.`,
    },
    h2_processo: {
      heading: `Como funciona o processo de AVCB em ${n}`,
      etapas: [
        {numero:'ETAPA 01',titulo:'Diagnóstico técnico gratuito',desc:`Levantamento in loco em ${n}: estado dos sistemas de combate a incêndio, documentação existente e situação no sistema do CBPMESP — verificamos Comunique-ses em aberto antes de protocolar.`},
        {numero:'ETAPA 02',titulo:'Enquadramento correto',desc:'Definição precisa entre AVCB e CLCB com base na área, uso, risco e sistemas do imóvel. Erro de enquadramento rejeita o processo no protocolo e reinicia o prazo do zero.'},
        {numero:'ETAPA 03',titulo:'Adequação dos sistemas',desc:`Execução das obras necessárias em ${n}: extintores, hidrante, alarme, sprinkler, SPDA e sinalização conforme a IT aplicável ao tipo de ocupação.`},
        {numero:'ETAPA 04',titulo:'Projeto técnico com ART',desc:'Elaboração do PPCI com plantas, memorial descritivo, cálculos específicos e ART CREA-SP recolhida — documentação aceita pelo CBPMESP sem questionamentos.'},
        {numero:'ETAPA 05',titulo:'Protocolo no CBPMESP',desc:`Protocolo completo na Unidade dos Bombeiros responsável por ${n}. Com documentação correta, o processo entra direto na fila de análise sem risco de Comunique-se.`},
        {numero:'ETAPA 06',titulo:'Vistoria e certificado',desc:'Acompanhamento presencial da vistoria com engenheiro. Resposta a qualquer Comunique-se em 24h. Taxa de aprovação na primeira vistoria superior a 95%.'},
      ],
    },
    h2_quando: {
      heading: `Quando iniciar o processo de AVCB em ${n}?`,
      body1: `Para imóveis com AVCB próximo do vencimento: inicie 90 dias antes. Para imóveis sem AVCB ou com certificado já vencido em ${n}: inicie hoje. Cada dia sem regularização é um dia de risco de autuação e interdição — especialmente em imóveis de temporada com alta rotatividade de hóspedes.`,
      body2: `Situações que exigem ação imediata em ${n}: pousada ou hotel com temporada de verão se aproximando, credenciamento em plataformas de hospedagem exigindo regularização, renovação de alvará negada, embargo do Corpo de Bombeiros já emitido, ou venda do imóvel pendente de AVCB.`,
    },
    h2_escolher: {
      heading: `Por que a DRD2 para AVCB em ${n}?`,
      body1: `A DRD2 tem equipe técnica própria que atende ${n} e toda a Baixada Santista com vistoria in loco. Conhecemos as especificidades da Unidade do CBPMESP responsável pela região e calibramos a documentação para evitar exigências adicionais pós-protocolo.`,
      body2: `Mais de 2.500 regularizações em São Paulo e Baixada Santista com taxa de aprovação na primeira vistoria superior a 95%. Diagnóstico gratuito, orçamento fechado antes do início e processo sem terceiros — cada etapa conduzida por engenheiro credenciado CREA-SP.`,
    },
    h2_cobertura: {
      heading: `Atendimento em ${n} e toda a Baixada Santista`,
      body1: `A DRD2 atende ${n} e toda a Baixada Santista: Santos, São Vicente, Praia Grande, Guarujá, Cubatão, Bertioga e Itanhaém, com equipe própria para diagnóstico, projetos, execução e acompanhamento de vistoria.`,
      body2: `Também atendemos toda a Grande São Paulo e interior do Estado com a mesma qualidade técnica e equipe própria — mais de 2.500 regularizações realizadas.`,
    },
    faqs: [
      {question:`Quais estabelecimentos em ${n} precisam de AVCB?`,answer:`Em ${n}, precisam de AVCB: condomínios residenciais acima de 3 pavimentos, pousadas e hotéis independente da área, estabelecimentos comerciais acima de 750m², restaurantes com grande capacidade, galpões industriais e qualquer ocupação de médio ou alto risco conforme Decreto Estadual 56.819/2011.`},
      {question:`Quanto tempo leva para obter o AVCB em ${n}?`,answer:`O prazo médio varia de 60 a 120 dias após o protocolo no Corpo de Bombeiros, dependendo do tipo de imóvel e sistemas exigidos. Com documentação pré-auditada pela DRD2, o processo entra sem pendências e avança sem Comunique-se — o principal fator de atraso.`},
      {question:`Pousada em ${n} precisa de AVCB mesmo sendo pequena?`,answer:`Sim. Pousadas e estabelecimentos de hospedagem são classificados como Grupo H pelo CBPMESP, independente da área, e exigem AVCB com sistemas específicos para proteção de hóspedes durante o período noturno — incluindo alarme, iluminação de emergência e rotas de fuga sinalizadas.`},
      {question:`A DRD2 atende em ${n}?`,answer:`Sim. A DRD2 Engenharia atende ${n} com equipe técnica própria para levantamento in loco, projeto PPCI, execução de sistemas e acompanhamento junto ao CBPMESP até a emissão do certificado.`},
      {question:`AVCB vencido em ${n} pode causar interdição?`,answer:`Sim. O Corpo de Bombeiros do Estado de SP fiscaliza todos os municípios da Baixada Santista, incluindo ${n}. Com AVCB vencido ou ausente, o estabelecimento pode ser interditado a qualquer momento — especialmente em períodos de alta temporada com maior fluxo de fiscalização.`},
    ],
    linksInternos: [
      {href:'/avcb-santos',label:'AVCB em Santos'},
      {href:'/avcb-vencido-o-que-fazer',label:'AVCB Vencido — O Que Fazer?'},
      {href:'/documentos-necessarios-avcb-sao-paulo',label:'Documentos para AVCB'},
      {href:'/prazo-renovacao-avcb-sao-paulo',label:'Prazo de Renovação do AVCB'},
      {href:'/avcb-ou-clcb-qual-preciso',label:'AVCB ou CLCB — Qual Preciso?'},
    ],
    ctaFinal: {
      heading: `AVCB EM ${n.toUpperCase()} — PROCESSO COMPLETO COM A DRD2`,
      body: `Diagnóstico gratuito, protocolo sem pendências e acompanhamento até o certificado em ${n} e Baixada Santista.`,
      cta: 'Falar com Engenheiro Agora',
    },
  };
}

const cidades = [
  {
    dir:'avcb-sao-vicente', nome:'São Vicente', regiao:'Baixada Santista',
    desc:'cidade costeira com alto volume de condomínios de praia e comércio local',
    ocup:[
      {nome:'Condomínio residencial de praia',desc:'São Vicente tem alta concentração de condomínios litorâneos que precisam de AVCB com sistemas adequados ao ambiente marinho — maior cuidado com corrosão nos sistemas de hidrante e sprinkler.'},
      {nome:'Pousada e hospedagem',desc:'Pousadas em São Vicente precisam de AVCB independente do tamanho, com atenção especial às rotas de fuga e alarme para proteção de hóspedes durante o período noturno.'},
      {nome:'Restaurante e comércio',desc:'Restaurantes e estabelecimentos comerciais acima de 750m² em São Vicente precisam de AVCB. Menores se enquadram em CLCB com processo simplificado.'},
      {nome:'Clínica e consultório',desc:'Clínicas em São Vicente geralmente se enquadram em CLCB para unidades pequenas. A DRD2 faz o enquadramento correto antes do protocolo.'},
    ],
  },
  {
    dir:'avcb-praia-grande', nome:'Praia Grande', regiao:'Baixada Santista',
    desc:'cidade com um dos maiores volumes de condomínios de praia do litoral paulista',
    ocup:[
      {nome:'Condomínio residencial de praia',desc:'Praia Grande tem um dos maiores estoques de condomínios litorâneos de SP. Muitos precisam de regularização urgente com AVCB vencido — a DRD2 atua nesse perfil especificamente.'},
      {nome:'Hotel e apart-hotel',desc:'Apart-hotéis em Praia Grande são muito comuns e exigem AVCB com múltiplos sistemas: alarme, sprinkler ou hidrante, iluminação de emergência e rotas de fuga por pavimento.'},
      {nome:'Restaurante e alimentação',desc:'Restaurantes na orla de Praia Grande com cozinha industrial precisam de AVCB com atenção ao sistema de exaustão e extintor específico para gordura.'},
      {nome:'Academia e fitness',desc:'Academias em Praia Grande precisam de AVCB considerando a alta densidade de público em horários de pico e os equipamentos elétricos de alto consumo.'},
    ],
  },
  {
    dir:'avcb-guaruja', nome:'Guarujá', regiao:'Baixada Santista',
    desc:'polo turístico com alta concentração de hotéis, pousadas e condomínios de luxo',
    ocup:[
      {nome:'Hotel e resort',desc:'Guarujá concentra hotéis de médio e alto padrão que exigem AVCB com múltiplos sistemas: sprinkler em todos os quartos, alarme com integração, sistema de pressurização de escada e rotas específicas por vulnerabilidade.'},
      {nome:'Pousada boutique',desc:'Pousadas de luxo no Guarujá precisam de AVCB mesmo sendo menores, pois a hospedagem é classificada como Grupo H e exige certificação independente da área.'},
      {nome:'Condomínio residencial de alto padrão',desc:'Guarujá tem condomínios de luxo com sistemas sofisticados — a adequação e certificação exige engenheiro com experiência em sistemas de alta performance.'},
      {nome:'Restaurante e gastronomia',desc:'A cena gastronômica do Guarujá tem restaurantes que precisam de AVCB com projeto específico para cozinha industrial de alto volume e grande público simultâneo.'},
    ],
  },
  {
    dir:'avcb-cubatao', nome:'Cubatão', regiao:'Baixada Santista — Polo Industrial',
    desc:'polo industrial com alta concentração de galpões, indústrias e depósitos logísticos',
    ocup:[
      {nome:'Galpão industrial',desc:'Cubatão tem um dos maiores complexos industriais do Brasil. Galpões exigem AVCB com sistema de hidrantes dimensionado para a carga de incêndio real do processo produtivo ou do estoque armazenado.'},
      {nome:'Indústria química e petroquímica',desc:'Indústrias com produtos inflamáveis em Cubatão exigem AVCB com projetos especiais de supressão — incluindo sistemas de espuma, CO2 ou pó químico conforme o tipo de produto.'},
      {nome:'Depósito e armazém logístico',desc:'Depósitos e centros de distribuição em Cubatão exigem AVCB com sistema de sprinkler dimensionado para a altura de armazenamento e a classificação de risco da mercadoria.'},
      {nome:'Escritório e administração industrial',desc:'Edificações administrativas no complexo industrial de Cubatão precisam de AVCB separado do sistema industrial — processo mais simples mas obrigatório para o funcionamento regular.'},
    ],
  },
  {
    dir:'avcb-bertioga', nome:'Bertioga', regiao:'Baixada Santista',
    desc:'cidade litorânea com alta concentração de pousadas, resorts e condomínios de praia',
    ocup:[
      {nome:'Pousada e resort',desc:'Bertioga tem perfil predominante de hospedagem turística. Pousadas e resorts precisam de AVCB completo com alarme, rotas de fuga e sistemas de combate a incêndio específicos para hospedagem.'},
      {nome:'Condomínio de praia',desc:'Condomínios residenciais de temporada em Bertioga precisam de AVCB com validade regular — muitos são propriedades de verão com manutenção negligenciada durante o período de baixa temporada.'},
      {nome:'Restaurante e quiosque de praia',desc:'Restaurantes em Bertioga com estrutura permanente precisam de AVCB ou CLCB dependendo da área. Quiosques de praia temporários se enquadram em PTOTEP.'},
      {nome:'Clube e área de lazer',desc:'Clubes e áreas de lazer em Bertioga com salão de festas e quadras cobertas precisam de AVCB com atenção especial à capacidade de público simultâneo.'},
    ],
  },
  {
    dir:'avcb-itanhaem', nome:'Itanhaém', regiao:'Baixada Santista',
    desc:'cidade litorânea com perfil residencial e crescimento de condomínios na orla',
    ocup:[
      {nome:'Condomínio residencial',desc:'Itanhaém tem crescimento acelerado de condomínios na orla — muitos precisam regularizar o AVCB que venceu ou nunca foi tirado na fase de entrega da obra.'},
      {nome:'Pousada',desc:'Pousadas em Itanhaém precisam de AVCB independente do tamanho, com sistemas básicos de proteção para hóspedes: alarme, extintor, sinalização e iluminação de emergência.'},
      {nome:'Comércio local',desc:'Estabelecimentos comerciais de Itanhaém acima de 750m² exigem AVCB. Para comércio menor, o CLCB simplificado é suficiente — a DRD2 faz o enquadramento correto.'},
      {nome:'Escola e creche',desc:'Escolas e creches em Itanhaém precisam de AVCB com atenção especial às rotas de fuga dimensionadas para público infantil conforme IT-11/CBPMESP.'},
    ],
  },
];

cidades.forEach(p => {
  const d = genCidade(p);
  const dir = path.join('src','app',p.dir);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive:true});
  fs.writeFileSync(path.join(dir,'page.tsx'), mp(d), 'utf8');
  console.log('UPDATED: ' + p.dir);
});
console.log('\nDone: ' + cidades.length + ' cidades Baixada Santista');
