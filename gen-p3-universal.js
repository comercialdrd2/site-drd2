const fs = require('fs'), path = require('path');

function mp(d) {
  return `import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";
const data: UniversalPageData = ${JSON.stringify(d, null, 2)};
export const metadata = { title: data.meta.title, description: data.meta.description, alternates: { canonical: data.slug } };
export default function Page() { return <UniversalSeoPage data={data} />; }
`;
}

function genLocal(p) {
  const n = p.nome, z = p.zona, tipo = p.tipo;
  const local = tipo === 'cidade' ? `${n} — ${p.estado||'SP'}` : `${n}, São Paulo`;
  return {
    dir: p.dir,
    slug: `/${p.dir}`,
    meta: {
      title: `AVCB em ${local} — Regularização Completa | DRD2 Engenharia`,
      description: `AVCB e CLCB em ${n}: ${p.desc}. Engenheiros credenciados CREA-SP, diagnóstico gratuito e processo completo até o certificado.`,
    },
    eyebrow: `${z} — Especialistas em AVCB em ${n}`,
    h1Line1: `AVCB em ${n}`,
    h1Line2: `Regularização Completa — ${tipo === 'cidade' ? p.estado||'SP' : 'São Paulo'}`,
    heroBg: '/images/banner-hero.webp',
    introP1: `Especialistas em AVCB e CLCB em ${n}: ${p.desc}. A DRD2 Engenharia atua na região com equipe técnica própria, diagnóstico gratuito e processo completo do levantamento ao certificado.`,
    introP2: `Diagnóstico técnico em até 24h, protocolo no CBPMESP sem pendências e acompanhamento da vistoria. Mais de 2.500 regularizações realizadas em toda a Grande São Paulo.`,
    breadcrumbs: [{label:'Home',href:'/'},{label:`AVCB ${n}`}],
    occupationType: `imóvel em ${n}`,
    h2_principal: {
      heading: `Quem precisa de AVCB em ${n}?`,
      body: `Em ${n}, a obrigatoriedade de AVCB ou CLCB segue o Decreto Estadual 56.819/2011 do Estado de São Paulo, que se aplica a todos os municípios e bairros do Estado. Precisam de documentação do Corpo de Bombeiros: condomínios residenciais acima de 3 pavimentos ou 750m², estabelecimentos comerciais e de serviços acima de 750m², hospitais, clínicas, hotéis, restaurantes com grande capacidade, galpões industriais, escolas e qualquer ocupação classificada como médio ou alto risco conforme a Tabela A do Decreto.`,
      body2: `Imóveis até 750m² e baixo risco em ${n} geralmente se enquadram no CLCB — Certificado de Licença do Corpo de Bombeiros, processo mais ágil e com custo menor. A DRD2 faz o enquadramento correto gratuitamente: definimos qual documento é necessário para o seu imóvel específico antes de qualquer protocolo, evitando o erro de enquadramento que rejeita o processo no início.`,
    },
    h2_riscos: {
      heading: `Riscos de operar sem AVCB em ${n}`,
      intro: `Estabelecimentos em ${n} sem AVCB ou CLCB válido estão expostos aos mesmos riscos de qualquer imóvel irregular em São Paulo — sem exceção por bairro ou cidade.`,
      itens: [
        {titulo:'Interdição pelo CBPMESP',desc:`O Corpo de Bombeiros pode realizar vistoria em ${n} a qualquer momento por fiscalização rotineira ou denúncia anônima, interditando o imóvel irregular imediatamente.`},
        {titulo:'Multa de até R$ 50.000',desc:'Cada infração identificada gera multa individual. Estabelecimentos com múltiplas irregularidades podem acumular valores muito acima do teto por item.'},
        {titulo:'Alvará de funcionamento bloqueado',desc:`A Prefeitura nega renovação do alvará para estabelecimentos em ${n} sem AVCB/CLCB válido — tornando a operação totalmente irregular perante dois órgãos simultaneamente.`},
        {titulo:'Seguro patrimonial inválido',desc:'Em sinistro com documentação irregular, a seguradora nega o pagamento integralmente, independente do valor do bem e da causa do incêndio.'},
        {titulo:'Responsabilidade penal',desc:'O proprietário ou responsável legal responde civil e criminalmente por omissão em caso de incêndio com vítimas em imóvel sem certificação.'},
        {titulo:'Bloqueio de negócios imobiliários',desc:`Venda, locação e financiamento do imóvel em ${n} ficam bloqueados com AVCB ausente ou vencido. Due diligence de compradores sempre verifica a regularidade.`},
      ],
    },
    h2_detalhes: {
      heading: `Tipos de imóvel que a DRD2 regulariza em ${n}`,
      body1: `A DRD2 tem experiência em todos os tipos de ocupação em ${n} e região. Cada tipo tem especificidades nas Instruções Técnicas do CBPMESP que precisam ser atendidas com precisão para aprovação na vistoria.`,
      alerta: 'Diagnóstico gratuito — definimos o documento correto antes do protocolo.',
      itens: p.ocup.map(o => ({titulo: o.nome, desc: o.desc})),
      closing: `A DRD2 atua em ${n} com equipe própria para levantamento técnico in loco, elaboração de projeto, execução de sistemas e acompanhamento junto ao CBPMESP. Diagnóstico gratuito e orçamento fechado antes do início.`,
    },
    h2_processo: {
      heading: `Como funciona o processo de AVCB em ${n}`,
      etapas: [
        {numero:'ETAPA 01',titulo:'Diagnóstico técnico gratuito',desc:`Levantamento in loco em ${n}: estado dos sistemas de combate a incêndio, documentação existente e situação no sistema do CBPMESP.`},
        {numero:'ETAPA 02',titulo:'Enquadramento correto',desc:'Definição precisa entre AVCB e CLCB com base na área, uso, risco e sistemas do imóvel. Erro de enquadramento rejeita o processo no protocolo.'},
        {numero:'ETAPA 03',titulo:'Adequação dos sistemas',desc:`Execução das obras necessárias em ${n}: extintores, hidrante, alarme, sprinkler, SPDA e sinalização conforme a IT aplicável ao tipo de ocupação.`},
        {numero:'ETAPA 04',titulo:'Projeto técnico com ART',desc:'Elaboração do PPCI com plantas, memorial descritivo, cálculos específicos e ART CREA-SP recolhida — documentação aceita pelo CBPMESP sem questionamentos.'},
        {numero:'ETAPA 05',titulo:'Protocolo no CBPMESP',desc:`Protocolo completo na Unidade dos Bombeiros responsável por ${n}. Com documentação correta, o processo entra direto na fila de análise.`},
        {numero:'ETAPA 06',titulo:'Vistoria e certificado',desc:'Acompanhamento presencial da vistoria com engenheiro. Resposta a qualquer Comunique-se em 24h. Taxa de aprovação na primeira vistoria superior a 95%.'},
      ],
    },
    h2_quando: {
      heading: `Quando iniciar o processo de AVCB em ${n}?`,
      body1: `Para imóveis com AVCB próximo do vencimento: inicie 90 dias antes. Para imóveis sem AVCB ou com certificado já vencido em ${n}: inicie hoje. Cada dia sem regularização é um dia de risco de autuação e interdição.`,
      body2: `Situações que exigem ação imediata em ${n}: venda ou locação do imóvel pendente de AVCB, credenciamento em plano de saúde ou órgão público exigindo certificação, renovação de alvará negada, Comunique-se com prazo vencendo ou embargo do Corpo de Bombeiros já emitido.`,
    },
    h2_escolher: {
      heading: `Por que a DRD2 para AVCB em ${n}?`,
      body1: `A DRD2 tem equipe técnica própria que atende ${n} com vistoria in loco em até 48h. Conhecemos as especificidades da Unidade do CBPMESP responsável pela região e calibramos a documentação para evitar exigências adicionais pós-protocolo.`,
      body2: `Mais de 2.500 regularizações realizadas em São Paulo com taxa de aprovação na primeira vistoria superior a 95%. Diagnóstico gratuito, orçamento fechado antes do início e processo sem terceiros — cada etapa conduzida por engenheiro credenciado CREA-SP.`,
    },
    h2_cobertura: {
      heading: `Atendimento em ${n} e região`,
      body1: `A DRD2 atende ${n} e toda a ${z} com equipe própria para diagnóstico, projetos, execução de sistemas e acompanhamento de vistoria. Prazo de resposta de até 2h e vistoria in loco em até 48h.`,
      body2: `Também atendemos toda a Grande São Paulo: capital, Guarulhos, ABC, Osasco, Campinas, Santos e municípios da região metropolitana com a mesma qualidade técnica e equipe própria.`,
    },
    faqs: [
      {question:`Quais estabelecimentos em ${n} precisam de AVCB?`,answer:`Em ${n}, precisam de AVCB: condomínios residenciais acima de 3 pavimentos, estabelecimentos comerciais acima de 750m², hospitais, hotéis, restaurantes com capacidade acima do limiar da IT, galpões industriais, escolas e qualquer ocupação de médio ou alto risco conforme Decreto 56.819/2011.`},
      {question:`Quanto tempo leva para obter o AVCB em ${n}?`,answer:`O prazo médio varia de 60 a 120 dias após o protocolo no Corpo de Bombeiros, dependendo do tipo de imóvel e sistemas exigidos. Com documentação pré-auditada pela DRD2, o processo entra sem pendências e avança sem Comunique-se — o principal fator de atraso.`},
      {question:`A DRD2 atende em ${n}?`,answer:`Sim. A DRD2 Engenharia atende ${n} com equipe técnica própria para levantamento técnico in loco, elaboração do projeto PPCI, execução de sistemas e acompanhamento junto ao CBPMESP até a emissão do certificado.`},
      {question:`AVCB vencido em ${n} pode causar interdição?`,answer:`Sim. O Corpo de Bombeiros pode realizar vistoria em qualquer imóvel em ${n} a qualquer momento. Com AVCB vencido ou ausente, o estabelecimento pode ser interditado imediatamente. Além disso, o proprietário pode ser autuado com multa de R$ 500 a R$ 50.000.`},
      {question:`Qual a documentação básica para AVCB em ${n}?`,answer:`Planta baixa aprovada ou levantamento com ART, IPTU com área e uso declarados, matrícula do imóvel, laudo elétrico com ART CREA-SP e CNPJ do responsável. A DRD2 faz auditoria documental gratuita antes do protocolo em ${n}.`},
    ],
    linksInternos: [
      {href:'/avcb-vencido-o-que-fazer',label:'AVCB Vencido — O Que Fazer?'},
      {href:'/documentos-necessarios-avcb-sao-paulo',label:'Documentos para AVCB em SP'},
      {href:'/prazo-renovacao-avcb-sao-paulo',label:'Prazo de Renovação do AVCB'},
      {href:'/avcb-ou-clcb-qual-preciso',label:'AVCB ou CLCB — Qual Preciso?'},
      {href:'/vistoria-corpo-de-bombeiros-o-que-esperar',label:'Vistoria dos Bombeiros'},
    ],
    ctaFinal: {
      heading: `AVCB EM ${n.toUpperCase()} — PROCESSO COMPLETO COM A DRD2`,
      body: `Diagnóstico gratuito, protocolo sem pendências e acompanhamento até o certificado em ${n}.`,
      cta: 'Falar com Engenheiro Agora',
    },
  };
}

const locais = [
  {dir:'avcb-jundiai',nome:'Jundiaí',tipo:'cidade',estado:'SP',zona:'Grande SP',desc:'polo industrial e logístico com galpões, condomínios e comércio',
   ocup:[{nome:'Galpão industrial e logístico',desc:'Jundiaí tem um dos maiores complexos logísticos do interior de SP. Galpões acima de 750m² exigem AVCB com sistema de hidrantes e alarme conforme IT-22 e IT-18.'},{nome:'Condomínio residencial',desc:'Condomínios verticais e horizontais de Jundiaí exigem AVCB com validade de 5 anos incluindo manutenção de sistemas de combate a incêndio e saídas de emergência.'},{nome:'Restaurante e alimentação',desc:'Estabelecimentos de alimentação com cozinha industrial em Jundiaí precisam de AVCB com atenção especial ao sistema de exaustão e compartimentação da cozinha.'},{nome:'Escritório corporativo',desc:'Escritórios em Jundiaí acima de 750m² exigem AVCB. Abaixo desse limite, o CLCB simplificado é suficiente — processo mais rápido e barato.'}]},
  {dir:'avcb-carapicuiba',nome:'Carapicuíba',tipo:'cidade',estado:'SP',zona:'Grande SP — Zona Oeste Metropolitana',desc:'município da Grande SP com alto volume de imóveis residenciais e comércio local',
   ocup:[{nome:'Condomínio residencial',desc:'Carapicuíba tem grande quantidade de condomínios populares e médio padrão que precisam de AVCB renovado a cada 5 anos com sistemas de combate a incêndio funcionais.'},{nome:'Loja de varejo e comércio',desc:'Estabelecimentos comerciais de Carapicuíba acima de 750m² exigem AVCB. Lojas menores geralmente se enquadram em CLCB com processo simplificado.'},{nome:'Academia e fitness',desc:'Academias em Carapicuíba precisam de AVCB considerando a alta densidade de público simultâneo e os equipamentos elétricos de alto consumo.'},{nome:'Padaria e alimentação',desc:'Padarias e estabelecimentos de alimentação precisam de CLCB ou AVCB dependendo da área, com atenção ao sistema de exaustão e extintor de cozinha.'}]},
  {dir:'avcb-taboao-da-serra',nome:'Taboão da Serra',tipo:'cidade',estado:'SP',zona:'Grande SP — Zona Sul Metropolitana',desc:'cidade limítrofe à capital com forte crescimento imobiliário e comercial',
   ocup:[{nome:'Condomínio residencial',desc:'Taboão da Serra tem crescimento acelerado de condomínios verticais que precisam de AVCB com sistemas completos conforme as ITs do CBPMESP.'},{nome:'Supermercado e varejo alimentar',desc:'Supermercados acima de 750m² em Taboão da Serra exigem AVCB com sistema de hidrantes, alarme e extintor específico para cada área de risco.'},{nome:'Galpão logístico',desc:'Galpões de distribuição em Taboão da Serra exigem AVCB com sistema de hidrantes dimensionado para a carga de incêndio do estoque armazenado.'},{nome:'Escritório e serviços',desc:'Escritórios acima de 750m² precisam de AVCB. Para imóveis menores, o CLCB é o documento adequado com processo mais ágil e custo menor.'}]},
  {dir:'avcb-pompeia',nome:'Pompeia',tipo:'bairro',zona:'Zona Oeste SP',desc:'bairro residencial e gastronômico com mix de condomínios e restaurantes',
   ocup:[{nome:'Condomínio residencial',desc:'Pompeia tem grande concentração de condomínios de médio e alto padrão que precisam de AVCB com sistemas em manutenção e documentação atualizada.'},{nome:'Restaurante e bar',desc:'A Pompeia é conhecida pelo cenário gastronômico. Restaurantes e bares com cozinha industrial precisam de AVCB com atenção ao sistema de exaustão e supressão.'},{nome:'Academia e studio',desc:'Academias e estúdios de fitness na Pompeia precisam de AVCB considerando a alta densidade de público e os equipamentos elétricos.'},{nome:'Clínica e consultório',desc:'Clínicas médicas e consultórios na Pompeia geralmente se enquadram em CLCB para unidades pequenas, com processo mais rápido e custo menor.'}]},
  {dir:'avcb-jardins',nome:'Jardins',tipo:'bairro',zona:'Zona Centro-Sul SP',desc:'bairro nobre com alta concentração de clínicas, escritórios e estabelecimentos premium',
   ocup:[{nome:'Escritório corporativo premium',desc:'Os Jardins concentram escritórios de alto padrão que precisam de AVCB ou CLCB dependendo da área, com processos conduzidos com discrição e agilidade.'},{nome:'Clínica médica e estética',desc:'Clínicas nos Jardins precisam de documentação do Corpo de Bombeiros adequada ao tipo de procedimento realizado — algumas atividades elevam o risco e exigem AVCB.'},{nome:'Restaurante e gastronomia',desc:'Restaurantes premium nos Jardins precisam de AVCB com sistema de exaustão e supressão de gordura em conformidade com as exigências do CBPMESP.'},{nome:'Hotel boutique',desc:'Hotéis e pousadas nos Jardins exigem AVCB com múltiplos sistemas: alarme, sprinkler, iluminação de emergência e rotas de fuga dimensionadas por capacidade.'}]},
  {dir:'avcb-campo-grande',nome:'Campo Grande',tipo:'bairro',zona:'Zona Sul SP',desc:'bairro da Zona Sul com perfil residencial e comércio de bairro',
   ocup:[{nome:'Condomínio residencial',desc:'Campo Grande tem grande volume de condomínios de médio padrão na Zona Sul que precisam de AVCB renovado periodicamente com sistemas em conformidade.'},{nome:'Clínica e laboratório',desc:'Clínicas e laboratórios no Campo Grande precisam de AVCB com atenção às exigências específicas para estabelecimentos de saúde do CBPMESP.'},{nome:'Supermercado e varejo',desc:'Supermercados e lojas acima de 750m² no Campo Grande precisam de AVCB com sistema de hidrantes, alarme e sinalização completa de emergência.'},{nome:'Escola e creche',desc:'Escolas e creches no Campo Grande precisam de AVCB com atenção especial às rotas de fuga dimensionadas para público infantil e às exigências da IT-11.'}]},
  {dir:'avcb-bom-retiro',nome:'Bom Retiro',tipo:'bairro',zona:'Centro SP',desc:'polo têxtil e comercial do centro com alta concentração de lojas e galpões de estoque',
   ocup:[{nome:'Loja de confecção têxtil',desc:'O Bom Retiro concentra o maior polo de confecções de SP. Lojas acima de 750m² exigem AVCB — muitas com galpões de estoque que elevam a carga de incêndio.'},{nome:'Galpão de estoque',desc:'Galpões de armazenamento de confecção no Bom Retiro exigem AVCB com sistema de hidrantes dimensionado para a carga de incêndio do tecido armazenado.'},{nome:'Restaurante no centro',desc:'Restaurantes e lanchonetes no Bom Retiro precisam de AVCB ou CLCB dependendo da área, com foco no sistema de exaustão da cozinha industrial.'},{nome:'Escritório e showroom',desc:'Showrooms e escritórios acima de 750m² no Bom Retiro exigem AVCB. Para espaços menores, o CLCB simplificado é suficiente.'}]},
  {dir:'avcb-santa-cecilia',nome:'Santa Cecília',tipo:'bairro',zona:'Centro-Oeste SP',desc:'bairro boêmio e residencial com bares, restaurantes e edifícios históricos',
   ocup:[{nome:'Restaurante e bar noturno',desc:'Santa Cecília tem concentração de bares e restaurantes que precisam de AVCB, com atenção especial à capacidade de público e saídas de emergência.'},{nome:'Clínica médica',desc:'Clínicas médicas na Santa Cecília precisam de AVCB ou CLCB dependendo da área e tipo de procedimento realizado no estabelecimento.'},{nome:'Condomínio residencial antigo',desc:'Muitos edifícios históricos da Santa Cecília precisam de adequação dos sistemas de combate a incêndio para renovação do AVCB — especialidade da DRD2.'},{nome:'Escritório e coworking',desc:'Escritórios e coworkings acima de 750m² na Santa Cecília exigem AVCB. Para espaços menores, o CLCB é o documento adequado.'}]},
  {dir:'avcb-vila-clementino',nome:'Vila Clementino',tipo:'bairro',zona:'Zona Sul SP',desc:'bairro com alta concentração de hospitais, clínicas e imóveis residenciais',
   ocup:[{nome:'Hospital e clínica especializada',desc:'A Vila Clementino concentra hospitais e clínicas de alta complexidade que exigem AVCB com múltiplos sistemas: sprinkler, alarme, oxigênio, rotas específicas por vulnerabilidade.'},{nome:'Condomínio residencial',desc:'Condomínios da Vila Clementino precisam de AVCB com sistemas adequados e documentação atualizada, sendo a renovação periódica gerenciada pela DRD2.'},{nome:'Laboratório e diagnóstico',desc:'Laboratórios de análises clínicas e centros de diagnóstico por imagem precisam de AVCB com atenção aos gases medicinais e equipamentos de alto consumo elétrico.'},{nome:'Consultório médico',desc:'Consultórios menores geralmente se enquadram em CLCB. A DRD2 faz o enquadramento correto gratuitamente para evitar protocolo com documento errado.'}]},
];

locais.forEach(p => {
  const d = genLocal(p);
  const file = path.join('src','app',p.dir,'page.tsx');
  fs.writeFileSync(file, mp(d), 'utf8');
  console.log('UPDATED: ' + p.dir);
});
console.log('\nDone: ' + locais.length + ' P3 pages');
