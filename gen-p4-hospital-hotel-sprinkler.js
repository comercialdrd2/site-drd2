const fs=require('fs'),path=require('path');
function mp(d){return `import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";
const data: UniversalPageData = ${JSON.stringify(d,null,2)};
export const metadata={title:data.meta.title,description:data.meta.description,alternates:{canonical:data.slug}};
export default function Page(){return <UniversalSeoPage data={data}/>;}
`;}
const pages=[
{dir:'sistema-de-sprinkler-para-hospital-sao-paulo',slug:'/sistema-de-sprinkler-para-hospital-sao-paulo',
meta:{title:'Sistema de Sprinkler para Hospital em SP — Projeto e Instalação | DRD2',description:'Projeto, instalação e laudo de sprinkler para hospitais e clínicas em São Paulo. IT-23 e NBR 10897 para Grupo I. ART CREA-SP. Diagnóstico gratuito em 24h.'},
eyebrow:'IT-23/CBPMESP + NBR 10897 — Hospitais e Clínicas SP (Grupo I)',
h1Line1:'Sistema de Sprinkler para Hospital',h1Line2:'em São Paulo — Projeto, Instalação e Laudo com ART',
heroBg:'/images/banner-hero.webp',
introP1:'Hospitais, clínicas com internação e unidades de saúde de grande porte em São Paulo exigem sistema de sprinkler automático dimensionado para Grupo I conforme a IT-23/CBPMESP e NBR 10897. O ambiente hospitalar impõe requisitos específicos de supressão automática que diferem significativamente de imóveis comerciais convencionais.',
introP2:'A DRD2 projeta, instala e emite laudo técnico com ART CREA-SP de sistemas de sprinkler para hospitais em SP — com experiência em todos os tipos de ocupação hospitalar e nos requisitos do CBPMESP para Grupo I.',
breadcrumbs:[{label:'Home',href:'/'},{label:'Sprinklers',href:'/sprinklers'},{label:'Sprinkler para Hospital SP'}],
occupationType:'hospital e clínica',
h2_principal:{
  heading:'Quando o sprinkler é obrigatório em hospitais em SP?',
  body:'Em São Paulo, o sistema de sprinkler automático é obrigatório para hospitais e clínicas com internação acima de determinadas áreas e para edificações hospitalares de múltiplos pavimentos, conforme a IT-23/CBPMESP combinada com o Decreto Estadual 56.819/2011. O dimensionamento para Grupo I (saúde) exige densidade de descarga específica para ambientes hospitalares, seleção de bicos compatíveis com o ambiente clínico — evitando acionamentos acidentais por vapor de autoclave ou calor de equipamentos —, e integração com o sistema de alarme para evacuação seletiva por setor sem interrupção do atendimento a pacientes críticos.',
  body2:'A instalação de sprinkler em hospital exige planejamento técnico avançado: bicos em áreas cirúrgicas, UTIs e salas de equipamentos têm especificações diferentes dos bicos em corredores e áreas administrativas. Projetos genéricos que não consideram essas diferenciações geram Comunique-se do CBPMESP e obrigam a refazer partes do sistema com custo e prazo adicionais.',
},
h2_riscos:{
  heading:'Riscos do sistema de sprinkler incorreto em hospital',
  intro:'Esses 6 problemas são frequentes em hospitais com sprinkler instalado sem projeto específico para Grupo I.',
  itens:[
    {titulo:'Bicos inadequados em áreas críticas',desc:'Bicos de resposta padrão em salas cirúrgicas ou UTIs podem acionar acidentalmente por vapor de esterilização ou calor de equipamentos. Bicos de resposta especial (ESFR ou alta temperatura) são exigidos nessas áreas.'},
    {titulo:'Densidade de descarga insuficiente para Grupo I',desc:'O dimensionamento para hospital exige densidade mínima maior que para imóveis comerciais. Projeto subdimensionado não atinge a cobertura exigida pela NBR 10897 para Grupo I e gera Comunique-se.'},
    {titulo:'Sistema sem integração com alarme hospitalar',desc:'Em hospital, a evacuação é seletiva — setores adjacentes são evacuados sem interromper cirurgias em andamento. O sprinkler deve integrar ao alarme para acionar o protocolo correto por zona.'},
    {titulo:'Tubulação incompatível com ambiente clínico',desc:'Tubulação sem revestimento adequado em ambientes com produtos químicos de limpeza e esterilização se deteriora rapidamente, comprometendo a integridade do sistema e gerando manutenção constante.'},
    {titulo:'Bicos obstruídos por equipamentos hospitalares',desc:'Equipamentos médicos posicionados próximos aos bicos reduzem o raio de cobertura efetivo. O vistoriador verifica o raio de ação de cada bico — obstrução gera Comunique-se por zona afetada.'},
    {titulo:'Reservatório subdimensionado para nova ala',desc:'Hospital que ampliou sem atualizar o projeto de sprinkler tem RTI insuficiente para a nova área. O CBPMESP exige recálculo completo antes de aprovar a ampliação no processo de AVCB.'},
  ],
},
h2_detalhes:{
  heading:'O que inclui o projeto de sprinkler para hospital da DRD2',
  body1:'O projeto da DRD2 para sprinkler hospitalar inclui dimensionamento específico por tipo de área — cirúrgica, UTI, internação, administrativo —, seleção do bico correto para cada ambiente e integração com o alarme hospitalar.',
  alerta:'Sprinkler hospitalar exige bicos com temperatura de ativação e sensibilidade específicas para cada área — não é o mesmo bico usado em imóveis comerciais.',
  itens:[
    {titulo:'Dimensionamento por tipo de área hospitalar',desc:'Cálculo de densidade de descarga e área de operação conforme NBR 10897 para Grupo I, diferenciando áreas cirúrgicas, UTIs, internação, corredores e áreas administrativas.'},
    {titulo:'Seleção de bicos por ambiente',desc:'Bicos de resposta rápida para quartos de internação, bicos de alta temperatura para áreas com vapor e calor, e bicos especiais para salas cirúrgicas e de equipamentos de alto valor.'},
    {titulo:'Projeto aprovado no CBPMESP',desc:'Memorial descritivo, plantas hidráulicas, cálculos e especificação de materiais no formato exigido para Grupo I, com ART CREA-SP antes do protocolo.'},
    {titulo:'Laudo técnico com valores medidos',desc:'Teste hidráulico com pitometria nos bicos mais desfavoráveis, registro de pressão e vazão por setor, emitido com ART CREA-SP em até 48h após o teste.'},
  ],
  closing:'Projeto, execução e laudo com equipe técnica própria. Planejamos a instalação por fases para não interromper o funcionamento do hospital durante a obra.',
},
h2_processo:{
  heading:'Como a DRD2 implanta sprinkler em hospital',
  etapas:[
    {numero:'ETAPA 01',titulo:'Diagnóstico técnico gratuito',desc:'Levantamento in loco: tipo de atendimento, pavimentos, área por setor e sistema existente. Definição do dimensionamento e do plano de instalação por fases.'},
    {numero:'ETAPA 02',titulo:'Projeto por tipo de área',desc:'Projeto hidráulico diferenciado por setor hospitalar, com seleção de bico específico para cada ambiente. ART CREA-SP recolhida antes do protocolo.'},
    {numero:'ETAPA 03',titulo:'Aprovação no CBPMESP',desc:'Protocolo com documentação completa para Grupo I. Com projeto correto, o processo entra sem pendências na análise do CBPMESP.'},
    {numero:'ETAPA 04',titulo:'Execução por fases',desc:'Instalação setorial sem paralisar o atendimento hospitalar. Cronograma acordado com a gerência para minimizar impacto nas operações.'},
    {numero:'ETAPA 05',titulo:'Teste e laudo em 48h',desc:'Teste hidráulico por setor com valores registrados. Laudo técnico com ART CREA-SP emitido em até 48h após o teste final.'},
    {numero:'ETAPA 06',titulo:'Vistoria e AVCB',desc:'Acompanhamento presencial da vistoria. Resposta a Comunique-se em 24h. Taxa de aprovação superior a 95%.'},
  ],
},
h2_quando:{heading:'Quando instalar sprinkler em hospital em SP?',body1:'O sprinkler é obrigatório para hospitais acima de determinada área e para edificações de múltiplos pavimentos com internação em SP. Para hospitais em regularização de AVCB, o sistema deve estar instalado, testado e com laudo técnico antes da vistoria do CBPMESP.',body2:'Para hospitais com AVCB próximo do vencimento: verifique com antecedência de 90 dias se o sistema está em conformidade e se o laudo técnico está dentro da validade de 12 meses.'},
h2_escolher:{heading:'Por que a DRD2 para sprinkler em hospital?',body1:'A DRD2 tem experiência específica em sistemas de supressão automática para Grupo I, com projetos aprovados em hospitais, clínicas com internação e prontos-socorros em toda a Grande SP.',body2:'Diagnóstico gratuito, projeto com ART CREA-SP, execução própria por fases e laudo técnico em 48h. Sem terceiros no processo.'},
h2_cobertura:{heading:'Sprinkler para hospital em toda a Grande São Paulo',body1:'A DRD2 projeta e instala sprinkler em hospitais em toda a Grande SP: capital, Guarulhos, ABC, Osasco, Barueri, Campinas e Santos.',body2:'Para hospitais no interior do Estado, avaliamos viabilidade de deslocamento. WhatsApp com retorno em até 2h.'},
faqs:[
  {question:'Sprinkler em hospital precisa de bico especial?',answer:'Sim. Diferentes áreas do hospital exigem diferentes tipos de bicos: resposta rápida para quartos de internação, alta temperatura para áreas com vapor ou calor de equipamentos, e especificações especiais para salas cirúrgicas. Projeto com bico padrão em todas as áreas gera Comunique-se do CBPMESP.'},
  {question:'A instalação pode ser feita sem interromper o hospital?',answer:'Sim. A DRD2 planeja a instalação em fases setoriais, trabalhando em áreas fora de operação ativa e em horários de menor fluxo. O cronograma é acordado com a gerência antes do início.'},
  {question:'Com que frequência o laudo de sprinkler de hospital deve ser renovado?',answer:'Anualmente, conforme IT-23/CBPMESP. O laudo deve estar emitido nos últimos 12 meses para renovação do AVCB. A DRD2 emite o laudo em até 48h após o teste hidráulico.'},
  {question:'Hospital pequeno (clínica ambulatorial) precisa de sprinkler?',answer:'Depende da área e do tipo de atendimento. Clínicas ambulatoriais sem internação abaixo de determinada área podem não precisar de sprinkler. A DRD2 faz o enquadramento correto gratuitamente.'},
],
linksInternos:[{href:'/sistema-de-sprinkler-para-hotel-sao-paulo',label:'Sprinkler para Hotel SP'},{href:'/laudo-sprinkler-sao-paulo',label:'Laudo de Sprinkler com ART'},{href:'/sprinklers',label:'Sistema de Sprinkler SP'},{href:'/avcb-hospital-clinica-sao-paulo',label:'AVCB para Hospital SP'}],
ctaFinal:{heading:'SPRINKLER PARA HOSPITAL COM PROJETO E ART',body:'Especialistas em Grupo I. Execução por fases sem paralisar o hospital. Laudo em 48h.',cta:'Solicitar Diagnóstico Gratuito'}},

{dir:'sistema-de-sprinkler-para-hotel-sao-paulo',slug:'/sistema-de-sprinkler-para-hotel-sao-paulo',
meta:{title:'Sistema de Sprinkler para Hotel em SP — Projeto e Instalação | DRD2',description:'Projeto, instalação e laudo de sprinkler para hotéis e pousadas em São Paulo. IT-23 e NBR 10897 para Grupo H. ART CREA-SP. Diagnóstico gratuito em 24h.'},
eyebrow:'IT-23/CBPMESP + NBR 10897 — Hotéis e Pousadas SP (Grupo H)',
h1Line1:'Sistema de Sprinkler para Hotel',h1Line2:'em São Paulo — Projeto, Instalação e Laudo',
heroBg:'/images/banner-hero.webp',
introP1:'Hotéis, apart-hotéis e pousadas de médio e grande porte em São Paulo são classificados como Grupo H (hospedagem) e exigem sistema de sprinkler automático conforme a IT-23/CBPMESP, com atenção especial à proteção de hóspedes durante o período noturno — quando a detecção precoce e a supressão automática são críticas para a sobrevivência.',
introP2:'A DRD2 projeta, instala e emite laudo técnico com ART CREA-SP de sistemas de sprinkler para hotéis em SP — com experiência em todas as categorias de hospedagem e nos requisitos específicos do CBPMESP para Grupo H.',
breadcrumbs:[{label:'Home',href:'/'},{label:'Sprinklers',href:'/sprinklers'},{label:'Sprinkler para Hotel SP'}],
occupationType:'hotel e pousada',
h2_principal:{
  heading:'Exigências de sprinkler para hotéis e pousadas em SP',
  body:'Hotéis classificados como Grupo H pelo Decreto Estadual 56.819/2011 precisam de sistema de sprinkler automático quando superam determinadas áreas e alturas em São Paulo. O dimensionamento para hospedagem exige bicos de resposta rápida nos quartos — fundamentais para acionamento antes que o incêndio se propague enquanto os hóspedes estão dormindo —, pressão e densidade de descarga adequadas para o tipo de ocupação e integração com o sistema de alarme para evacuação ordenada dos hóspedes.',
  body2:'Hotéis que nunca tiveram sprinkler e precisam instalar para regularizar o AVCB enfrentam o desafio de instalar o sistema sem paralisar completamente a operação. A DRD2 planeja a instalação por pavimento e turno, minimizando o número de quartos fora de operação em cada etapa da obra.',
},
h2_riscos:{
  heading:'Riscos do sistema de sprinkler inadequado em hotel',
  intro:'Esses 6 problemas são frequentes em hotéis com sprinkler instalado sem projeto específico para Grupo H.',
  itens:[
    {titulo:'Bicos de resposta lenta em quartos de hóspedes',desc:'Bicos padrão em quartos onde hóspedes dormem podem demorar a acionar — tempo crítico em incêndio noturno. Bicos de resposta rápida (RTI ≤ 50) são a especificação correta para dormitórios.'},
    {titulo:'Pressão insuficiente nos andares superiores',desc:'Hotel de múltiplos pavimentos com bomba subdimensionada não atinge a pressão mínima nos bicos dos andares mais altos. Causa reprovação na vistoria e Comunique-se do CBPMESP.'},
    {titulo:'Sistema sem integração com alarme do hotel',desc:'Hotéis precisam de protocolo de evacuação acionado pelo sistema de alarme integrado ao sprinkler. Sem integração, o CBPMESP emite Comunique-se específico para Grupo H.'},
    {titulo:'Bicos obstruídos por decoração ou luminárias',desc:'Hotéis reformados sem atualização do projeto de sprinkler frequentemente têm bicos com o raio de ação obstruído por luminárias decorativas, forros ou elementos de design instalados pós-obra.'},
    {titulo:'RTI subdimensionada após ampliação de quartos',desc:'Hotel que converteu áreas comuns em novos quartos sem atualizar o projeto de sprinkler tem cobertura insuficiente nas novas áreas — causa automática de Comunique-se na vistoria.'},
    {titulo:'Mangueiras de teste sem validade nos andares',desc:'Cada andar do hotel deve ter o ponto de teste do sprinkler verificado anualmente. Pontos sem verificação registrada geram questionamentos do vistoriador sobre a confiabilidade do sistema.'},
  ],
},
h2_detalhes:{
  heading:'O que inclui o projeto de sprinkler para hotel da DRD2',
  body1:'O projeto da DRD2 para sprinkler em hotel é dimensionado especificamente para Grupo H, com bicos de resposta rápida nos quartos, cobertura total das áreas habitáveis e integração com o alarme de evacuação.',
  alerta:'Bicos de resposta rápida (RTI ≤ 50) são obrigatórios em quartos de hotel — bicos padrão não atendem a IT-23 para Grupo H.',
  itens:[
    {titulo:'Bicos de resposta rápida em quartos',desc:'Especificação de bicos RTI ≤ 50 para todos os quartos e suítes, garantindo acionamento precoce em incêndio noturno conforme IT-23 para Grupo H.'},
    {titulo:'Cobertura total das áreas habitáveis',desc:'Projeto com cobertura de 100% da área habitável do hotel: quartos, corredores, hall de entrada e áreas comuns — sem pontos cegos que gerariam Comunique-se.'},
    {titulo:'Integração com sistema de alarme',desc:'Projeto contempla integração com o alarme do hotel para acionamento automático do protocolo de evacuação conforme os setores afetados pelo incêndio.'},
    {titulo:'Laudo técnico com ART por andar',desc:'Teste hidráulico por andar com valores registrados de pressão e vazão. Laudo com ART CREA-SP em até 48h, no formato aceito pelo CBPMESP e pelas seguradoras de hotelaria.'},
  ],
  closing:'Projeto, execução por pavimento e laudo final com equipe técnica própria. Cronograma planejado para manter o máximo de quartos em operação durante a instalação.',
},
h2_processo:{
  heading:'Como a DRD2 instala sprinkler em hotel',
  etapas:[
    {numero:'ETAPA 01',titulo:'Diagnóstico gratuito',desc:'Levantamento in loco: número de quartos, pavimentos, sistema existente e situação no CBPMESP. Definição do plano de instalação por pavimento.'},
    {numero:'ETAPA 02',titulo:'Projeto para Grupo H',desc:'Projeto hidráulico com bicos RTI ≤ 50 em quartos, cálculo de RTI e bomba, e integração com alarme. ART CREA-SP recolhida antes do protocolo.'},
    {numero:'ETAPA 03',titulo:'Aprovação no CBPMESP',desc:'Protocolo com documentação completa para Grupo H. Com projeto correto, o processo entra sem pendências.'},
    {numero:'ETAPA 04',titulo:'Execução por pavimento',desc:'Instalação andar por andar para manter o máximo de quartos disponíveis. Cronograma acordado com a gerência.'},
    {numero:'ETAPA 05',titulo:'Teste e laudo em 48h',desc:'Teste hidráulico por andar com registro de valores. Laudo técnico com ART em até 48h após o teste final.'},
    {numero:'ETAPA 06',titulo:'Vistoria e AVCB',desc:'Acompanhamento presencial da vistoria com engenheiro. Resposta a Comunique-se em 24h. 95%+ de aprovação na primeira vistoria.'},
  ],
},
h2_quando:{heading:'Quando o sprinkler é obrigatório para hotel em SP?',body1:'Em São Paulo, o sprinkler é obrigatório para hotéis acima de determinada área e número de pavimentos conforme IT-23/CBPMESP. Pousadas menores podem não estar sujeitas a essa exigência — a DRD2 faz o enquadramento correto gratuitamente.',body2:'Para hotéis com AVCB em renovação: o laudo técnico do sistema de sprinkler deve estar atualizado nos últimos 12 meses. A DRD2 emite o laudo em até 48h após o teste hidráulico.'},
h2_escolher:{heading:'Por que a DRD2 para sprinkler em hotel?',body1:'A DRD2 tem experiência em sistemas de supressão automática para Grupo H (hospedagem), com projetos aprovados em hotéis, apart-hotéis e pousadas boutique em toda a Grande SP e Baixada Santista.',body2:'Diagnóstico gratuito, projeto com ART, execução por pavimento sem paralisar o hotel e laudo em 48h. Atendemos desde pousadas até hotéis de múltiplos pavimentos.'},
h2_cobertura:{heading:'Sprinkler para hotel em toda a Grande São Paulo',body1:'A DRD2 atende hotéis em toda a Grande SP, Baixada Santista (Santos, Guarujá, São Vicente, Praia Grande) e Campinas.',body2:'Para hotéis no interior do Estado, avaliamos deslocamento conforme a urgência. WhatsApp com retorno em 2h.'},
faqs:[
  {question:'Hotel precisa de bico especial de sprinkler?',answer:'Sim. Quartos de hotel exigem bicos de resposta rápida (RTI ≤ 50) conforme IT-23 para Grupo H. Esses bicos acionam mais rapidamente que bicos padrão — fundamental para a proteção de hóspedes que estão dormindo. Projeto com bico padrão em quartos de hotel é rejeitado pelo CBPMESP.'},
  {question:'A instalação pode ser feita sem fechar o hotel?',answer:'Sim. A DRD2 planeja a instalação por pavimento, trabalhando andar por andar para manter o máximo de quartos disponíveis. O cronograma é acordado com a gerência antes do início, respeitando a taxa de ocupação do hotel.'},
  {question:'Pousada pequena precisa de sprinkler em SP?',answer:'Depende da área e do número de quartos. Pousadas menores podem não estar sujeitas à obrigatoriedade de sprinkler conforme IT-23. A DRD2 faz o enquadramento correto gratuitamente — sem vender sistema que não é obrigatório para o seu imóvel.'},
  {question:'Com que frequência o sprinkler do hotel deve ser testado?',answer:'Manutenção semestral e laudo técnico com ART anualmente, conforme IT-23/CBPMESP. O laudo deve estar emitido nos últimos 12 meses para renovação do AVCB. Para hotéis, a DRD2 emite o laudo em até 48h após o teste.'},
],
linksInternos:[{href:'/sistema-de-sprinkler-para-hospital-sao-paulo',label:'Sprinkler para Hospital SP'},{href:'/laudo-sprinkler-sao-paulo',label:'Laudo de Sprinkler com ART'},{href:'/avcb-hoteis-pousadas-sao-paulo',label:'AVCB para Hotel SP'},{href:'/sprinklers',label:'Sistema de Sprinkler SP'}],
ctaFinal:{heading:'SPRINKLER PARA HOTEL COM PROJETO E ART',body:'Especialistas em Grupo H. Execução por pavimento sem paralisar o hotel. Laudo em 48h.',cta:'Solicitar Diagnóstico Gratuito'}},
];
pages.forEach(d=>{const dir=path.join('src','app',d.dir);if(!fs.existsSync(dir))fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'page.tsx'),mp(d),'utf8');console.log('UPDATED: '+d.dir);});
console.log('Done: '+pages.length);
