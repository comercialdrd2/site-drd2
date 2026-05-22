const fs = require('fs'), path = require('path');

function makePage(d) {
  return `import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";
const data: UniversalPageData = ${JSON.stringify(d, null, 2)};
export const metadata = { title: data.meta.title, description: data.meta.description, alternates: { canonical: data.slug } };
export default function Page() { return <UniversalSeoPage data={data} />; }
`;
}

const pages = [
{
  dir:'como-regularizar-avcb-vencido', slug:'/como-regularizar-avcb-vencido',
  meta:{title:'Como Regularizar AVCB Vencido — Guia Completo 2026 | DRD2',description:'Guia passo a passo para regularizar AVCB vencido em São Paulo. Documentos necessários, prazo, custo estimado e como evitar Comunique-se. Diagnóstico gratuito.'},
  eyebrow:'Guia Completo — Regularização de AVCB em São Paulo 2026',
  h1Line1:'Como Regularizar AVCB Vencido', h1Line2:'Guia Passo a Passo para São Paulo',
  heroBg:'/images/banner-hero.webp',
  introP1:'Regularizar o AVCB vencido exige sequência correta de ações: diagnóstico técnico, auditoria documental, adequação dos sistemas, projeto com ART e protocolo no CBPMESP sem pendências. Cada etapa na ordem errada pode atrasar o processo em 30 a 60 dias.',
  introP2:'Este guia detalha cada etapa do processo de regularização, os documentos exigidos por tipo de imóvel, o prazo realista por categoria e as armadilhas que mais atrasam a emissão do AVCB em São Paulo.',
  breadcrumbs:[{label:'Home',href:'/'},{label:'Como Regularizar AVCB Vencido'}],
  occupationType:'imóvel com AVCB vencido',
  h2_principal:{
    heading:'Por que o AVCB vencido não se renova sozinho?',
    body:'O AVCB não tem renovação automática. Quando vence, o imóvel retorna à condição de irregular perante o Corpo de Bombeiros e precisa passar por todo o processo de regularização novamente — diagnóstico técnico, adequação de sistemas, elaboração de projeto atualizado e nova vistoria presencial do CBPMESP. O processo de "renovação" é na prática um novo processo de emissão, com a diferença de que imóveis que já tiveram AVCB têm histórico no sistema, o que pode facilitar a identificação do enquadramento correto.',
    body2:'A boa notícia: para imóveis onde os sistemas estavam conformes na última vistoria e foram mantidos adequadamente, a regularização é mais rápida porque as adequações são menores. O problema mais comum é a acumulação de pequenas não-conformidades ao longo do tempo — extintores com recarga atrasada, mangueiras sem teste anual, iluminação de emergência com bateria descarregada — que somadas geram Comunique-se e atrasos.',
  },
  h2_riscos:{
    heading:'Os 6 erros que mais atrasam a regularização do AVCB',
    intro:'Evite esses erros na sequência certa. Cada um pode adicionar semanas ao processo.',
    itens:[
      {titulo:'Protocolar com documentação incompleta',desc:'A causa mais comum de Comunique-se. Planta desatualizada, laudo elétrico sem ART ou IPTU com área divergente geram exigência imediata e suspendem o processo por 30–60 dias.'},
      {titulo:'Não verificar Comunique-ses anteriores',desc:'Pendências não respondidas de processos anteriores bloqueiam qualquer novo protocolo no mesmo endereço. Precisam ser respondidas antes de iniciar o novo processo.'},
      {titulo:'Executar adequações sem projeto aprovado',desc:'Obras nos sistemas de combate a incêndio sem projeto técnico aprovado podem gerar não-conformidade com o projeto que será apresentado, causando reprovação na vistoria.'},
      {titulo:'ART com escopo incorreto',desc:'ART com escopo genérico ou insuficiente é rejeitada na análise do CBPMESP. O escopo deve contemplar especificamente cada sistema e atividade declarada no projeto.'},
      {titulo:'Vistoria sem preparo',desc:'Sistemas conformes no dia do protocolo podem ter deteriorado até a vistoria (30–90 dias depois). É fundamental fazer checagem de conformidade no dia anterior à vistoria.'},
      {titulo:'Escolher enquadramento incorreto',desc:'Protocolar CLCB para imóvel que exige AVCB (ou vice-versa) gera rejeição imediata. O enquadramento depende de área, uso, altura e sistemas — não apenas da área.'},
    ],
  },
  h2_detalhes:{
    heading:'Documentos necessários para regularizar AVCB em São Paulo',
    body1:'A lista de documentos varia conforme o tipo de ocupação e os sistemas exigidos, mas existe um conjunto base que todo processo precisa. A DRD2 faz a auditoria documental completa antes do protocolo — identificando exatamente o que falta para cada imóvel específico.',
    alerta:'Documentação incompleta = Comunique-se = 30–60 dias a mais no processo.',
    itens:[
      {titulo:'Documentação do imóvel',desc:'Planta baixa aprovada pela Prefeitura ou levantamento arquitetônico com ART (para imóveis sem aprovação regular), IPTU com área e uso declarados e matrícula do imóvel atualizada.'},
      {titulo:'Documentação da empresa',desc:'CNPJ do responsável, contrato social ou procuração para o engenheiro responsável técnico pelo processo junto ao CBPMESP.'},
      {titulo:'Laudos técnicos dos sistemas',desc:'Laudo de instalações elétricas com ART (obrigatório para todos), laudo de SPDA quando aplicável, laudo de gás quando há instalação, laudo de sprinkler e hidrante quando instalados.'},
      {titulo:'ART do engenheiro responsável',desc:'ART CREA-SP específica para o serviço de elaboração do projeto de prevenção de incêndio e proteção contra pânico (PPCI), recolhida antes do protocolo.'},
    ],
    closing:'A DRD2 realiza a auditoria documental gratuitamente antes do protocolo. Identificamos cada documento faltante e orientamos sobre como obtê-lo. Processo entra correto na primeira tentativa.',
  },
  h2_processo:{
    heading:'Passo a passo completo para regularizar AVCB vencido',
    etapas:[
      {numero:'PASSO 01',titulo:'Diagnóstico técnico do imóvel',desc:'Levantamento completo: área real, tipo de uso, sistemas instalados, estado de conservação de extintores, hidrantes, sprinkler, alarme, SPDA, iluminação e saídas.'},
      {numero:'PASSO 02',titulo:'Verificação de pendências no CBPMESP',desc:'Consulta ao sistema do Corpo de Bombeiros para identificar Comunique-ses em aberto, processos anteriores e situação atual do endereço. Respondemos pendências antes de protocolar.'},
      {numero:'PASSO 03',titulo:'Adequação dos sistemas',desc:'Execução de todas as obras necessárias: recarga de extintores, teste hidrostático de mangueiras, ajuste de pressão do hidrante, substituição de bicos de sprinkler, manutenção do alarme.'},
      {numero:'PASSO 04',titulo:'Elaboração do projeto PPCI',desc:'Projeto de Prevenção e Proteção Contra Incêndio conforme IT aplicável, com plantas, cortes, memorial descritivo, cálculo hidráulico e especificações técnicas.'},
      {numero:'PASSO 05',titulo:'Recolhimento da ART e protocolo',desc:'ART CREA-SP recolhida com escopo correto e protocolo do processo completo na Unidade dos Bombeiros responsável pelo endereço.'},
      {numero:'PASSO 06',titulo:'Vistoria e emissão do AVCB',desc:'Acompanhamento da vistoria, resposta a eventuais Comunique-ses em 24h e recebimento do AVCB após aprovação. Processo completo documentado.'},
    ],
  },
  h2_quando:{
    heading:'Qual o prazo para regularizar AVCB vencido em São Paulo?',
    body1:'O prazo varia de 60 a 150 dias dependendo do tipo de imóvel e das adequações necessárias. Imóveis de baixo risco com sistemas em bom estado chegam ao protocolo em 15–20 dias úteis. Imóveis que precisam de obras maiores (instalação de sprinkler, pressurização de escada) levam mais tempo.',
    body2:'O fator que mais impacta o prazo é a existência de Comunique-ses em aberto de processos anteriores. Cada Comunique-se precisa ser respondido e analisado antes de qualquer novo processo — e isso pode levar de 30 a 60 dias por ocorrência.',
  },
  h2_escolher:{
    heading:'Por que regularizar com a DRD2?',
    body1:'A DRD2 tem mais de 2.500 regularizações em São Paulo com taxa de aprovação na primeira vistoria superior a 95%. Nossa auditoria documental prévia elimina o risco de Comunique-se — a principal causa de atraso na regularização. Processo conduzido por engenheiro credenciado CREA-SP do início ao fim.',
    body2:'Orçamento fechado antes do início, sem surpresas no meio do processo. Equipe própria para todas as etapas — sem terceiros que criam gargalos de comunicação. Diagnóstico e estimativa de prazo e custo gratuitos.',
  },
  h2_cobertura:{heading:'Regularização de AVCB em toda a Grande São Paulo',body1:'A DRD2 atende capital e Grande SP: Guarulhos, ABC, Osasco, São Bernardo, Campinas, Santos e toda a região metropolitana.',body2:'Para cidades do interior, realizamos levantamento por videoconferência com documentação digital para estimativa prévia de prazo e custo.'},
  faqs:[
    {question:'Quanto custa regularizar um AVCB vencido?',answer:'O custo varia muito conforme o tipo de imóvel, área e sistemas exigidos. Para CLCB em imóveis pequenos, o custo pode ser de R$ 3.000 a R$ 8.000. Para AVCB completo com múltiplos sistemas, pode chegar a R$ 50.000 ou mais. A DRD2 faz diagnóstico gratuito e orçamento fechado antes de qualquer compromisso.'},
    {question:'Posso regularizar o AVCB sem paralisar o funcionamento?',answer:'Na maioria dos casos sim. O levantamento técnico e a documentação são feitos sem interromper as atividades. Obras de adequação menores (extintores, sinalização, iluminação) são executadas sem paralisação. Obras maiores (hidrante, sprinkler) podem exigir paralisação parcial de áreas específicas.'},
    {question:'O processo de regularização é diferente para condomínio e comércio?',answer:'Sim. Para condomínios residenciais, o síndico é o responsável legal e o processo segue as ITs específicas para habitação coletiva. Para comércio e serviços, o responsável é o proprietário ou locatário declarado no alvará. A documentação exigida tem variações importantes entre os dois tipos.'},
    {question:'E se o imóvel foi reformado desde o último AVCB?',answer:'Qualquer reforma que alterou área, uso, compartimentação ou sistemas precisa ser comunicada ao CBPMESP. O processo de regularização incluirá um projeto as-built que reflete o estado atual do imóvel. Reformas não comunicadas são causa frequente de Comunique-se na análise.'},
    {question:'Consigo parcelar o custo da regularização?',answer:'A DRD2 trabalha com proposta de parcelamento para projetos de maior valor. As taxas do Corpo de Bombeiros não são parceláveis — são pagas no protocolo. Materiais e serviços de adequação podem ter condições de pagamento negociadas conforme o volume do projeto.'},
  ],
  linksInternos:[
    {href:'/avcb-vencido-o-que-fazer',label:'AVCB Vencido — O Que Fazer?'},
    {href:'/documentos-necessarios-avcb-sao-paulo',label:'Documentos para AVCB'},
    {href:'/prazo-renovacao-avcb-sao-paulo',label:'Prazo de Renovação do AVCB'},
    {href:'/avcb-ou-clcb-qual-preciso',label:'AVCB ou CLCB — Qual Preciso?'},
    {href:'/vistoria-corpo-de-bombeiros-o-que-esperar',label:'Vistoria dos Bombeiros'},
  ],
  ctaFinal:{heading:'REGULARIZE SEU AVCB COM A DRD2',body:'2.500+ regularizações. 95% de aprovação na primeira vistoria. Diagnóstico gratuito.',cta:'Iniciar Regularização Agora'},
},
{
  dir:'documentos-necessarios-avcb-sao-paulo', slug:'/documentos-necessarios-avcb-sao-paulo',
  meta:{title:'Documentos para AVCB em São Paulo — Lista Completa 2026 | DRD2',description:'Saiba quais documentos são necessários para tirar AVCB em SP em 2026. Lista completa por tipo de imóvel, sistemas exigidos e checklist para evitar Comunique-se.'},
  eyebrow:'Lista Técnica 2026 — Documentação para AVCB no CBPMESP',
  h1Line1:'Documentos Necessários para AVCB', h1Line2:'em São Paulo — Lista Completa 2026',
  heroBg:'/images/banner-hero.webp',
  introP1:'A documentação incompleta é a causa número 1 de Comunique-se — a pendência que suspende o processo de AVCB por 30 a 60 dias por ocorrência. Saber exatamente quais documentos o Corpo de Bombeiros exige para o seu tipo de imóvel é o primeiro passo para um processo sem atrasos.',
  introP2:'Este guia lista todos os documentos exigidos pelo CBPMESP em São Paulo em 2026, organizados por categoria, com observações técnicas sobre o que cada um precisa conter para ser aceito sem questionamentos.',
  breadcrumbs:[{label:'Home',href:'/'},{label:'Documentos para AVCB em SP'}],
  occupationType:'imóvel',
  h2_principal:{
    heading:'Por que a documentação completa define o sucesso do processo de AVCB?',
    body:'O processo de AVCB no CBPMESP tem duas fases de análise: a análise documental (feita antes da vistoria) e a vistoria presencial. Um processo que entra com documentação incompleta recebe Comunique-se já na análise documental — antes mesmo de ser agendada a vistoria. Cada Comunique-se suspende a análise por 30 a 60 dias, período em que o imóvel continua irregular e exposto a todos os riscos associados ao AVCB ausente.',
    body2:'A experiência da DRD2 em mais de 2.500 processos em São Paulo mostra que os documentos com maior taxa de rejeição são o laudo elétrico (frequentemente sem ART ou com ART vencida), a planta baixa (frequentemente desatualizada após reformas) e a ART do engenheiro do PPCI (frequentemente com escopo insuficiente). Corrigir esses três documentos antes do protocolo elimina mais de 70% dos Comunique-ses documentais.',
  },
  h2_riscos:{
    heading:'Documentos mais rejeitados e por que',
    intro:'Veja os 6 documentos com maior taxa de rejeição no CBPMESP São Paulo e o motivo específico de cada falha.',
    itens:[
      {titulo:'Planta baixa desatualizada',desc:'Qualquer reforma que alterou área, uso ou compartimentação torna a planta arquivada desatualizada. O CBPMESP rejeita plantas que não refletem o imóvel real visitado na vistoria.'},
      {titulo:'Laudo elétrico sem ART',desc:'O laudo de instalações elétricas deve ser assinado por engenheiro elétrico com ART CREA-SP recolhida. Laudos assinados por técnicos ou sem ART são rejeitados sistematicamente.'},
      {titulo:'ART do PPCI com escopo genérico',desc:'A ART do projeto de prevenção de incêndio deve especificar cada sistema contemplado (hidrante, sprinkler, alarme, SPDA). ART com descrição genérica como "projeto de PPCI" pode ser exigida com detalhamento adicional.'},
      {titulo:'IPTU com área divergente',desc:'A área total declarada no IPTU deve corresponder à área do projeto. Divergências geram exigência de documentação complementar de regularização imobiliária.'},
      {titulo:'Laudos de sistemas vencidos',desc:'Laudos de hidrante, sprinkler e alarme com data anterior a 12 meses são considerados vencidos pelo CBPMESP. Devem ser emitidos próximo ao protocolo.'},
      {titulo:'Matrícula com restrições',desc:'Matrícula com penhora, ação judicial pendente ou averbação de demolição pode bloquear a emissão do AVCB até resolução da restrição cartorária.'},
    ],
  },
  h2_detalhes:{
    heading:'Lista completa de documentos por categoria',
    body1:'A documentação para AVCB é dividida em quatro grupos. Todos os processos precisam do Grupo 1. Os demais grupos são exigidos conforme as características específicas do imóvel.',
    alerta:'Cada documento deve estar dentro da validade e no formato aceito pelo CBPMESP.',
    itens:[
      {titulo:'Grupo 1 — Documentação obrigatória para todos',desc:'Planta baixa com ART ou memorial descritivo; IPTU com área e uso; matrícula do imóvel; CNPJ do responsável legal; ART do engenheiro do PPCI; laudo de instalações elétricas com ART; memorial descritivo do projeto.'},
      {titulo:'Grupo 2 — Sistemas de combate a incêndio instalados',desc:'Laudo de teste de pressão e vazão do sistema de hidrantes; laudo hidrostático das mangueiras (anual); laudo do sistema de sprinkler com pressões e densidades; ART do instalador de cada sistema.'},
      {titulo:'Grupo 3 — Sistemas de detecção e alarme',desc:'Projeto do sistema de alarme aprovado; laudo de teste funcional da central e detectores; certificado de homologação da central de alarme; ART do instalador do sistema elétrico de alarme.'},
      {titulo:'Grupo 4 — Ocupações especiais',desc:'Para hospitais: licença sanitária VISA e laudo de gases medicinais. Para postos: licença CETESB. Para galpões acima de 5.000m²: laudo de carga de incêndio por compartimento. Para locais de reunião: laudo de capacidade de lotação.'},
    ],
    closing:'A DRD2 realiza auditoria documental completa antes do protocolo — identificamos exatamente o que está faltando ou incorreto para cada imóvel específico. Processo entra correto na primeira tentativa, sem Comunique-se documental.',
  },
  h2_processo:{
    heading:'Como a DRD2 garante documentação completa para AVCB',
    etapas:[
      {numero:'ETAPA 01',titulo:'Checklist personalizado',desc:'Com base no tipo de imóvel, área, uso e sistemas, criamos um checklist específico de documentação para o processo. Nada é esquecido.'},
      {numero:'ETAPA 02',titulo:'Auditoria de cada documento',desc:'Verificamos validade, conteúdo, assinaturas e ART de cada documento. Identificamos especificamente o que precisa ser corrigido ou complementado.'},
      {numero:'ETAPA 03',titulo:'Obtenção de documentos faltantes',desc:'A DRD2 tem rede de profissionais para emitir laudos elétricos, de SPDA, de gás, de capacidade e demais documentos técnicos necessários com ART.'},
      {numero:'ETAPA 04',titulo:'Elaboração do PPCI',desc:'Projeto técnico de prevenção de incêndio com todos os elementos exigidos pelo CBPMESP: plantas, cortes, memorial, cálculos e legendas completas.'},
      {numero:'ETAPA 05',titulo:'Revisão final pré-protocolo',desc:'Checagem final de toda a documentação antes do protocolo. Verificamos a consistência entre todos os documentos e o imóvel real.'},
      {numero:'ETAPA 06',titulo:'Protocolo e acompanhamento',desc:'Protocolo na Unidade correta com comprovante. Monitoramento da análise e resposta imediata a qualquer exigência adicional do CBPMESP.'},
    ],
  },
  h2_quando:{
    heading:'Quando reunir a documentação para AVCB?',
    body1:'Idealmente, 90 dias antes do vencimento do AVCB atual. Na prática, a DRD2 pode reunir toda a documentação em 10 a 20 dias úteis para a maioria dos imóveis. O ponto crítico é o laudo elétrico — que pode levar de 5 a 15 dias para ser emitido dependendo do engenheiro contratado.',
    body2:'Para imóveis com sistemas complexos (sprinkler, alarme, SPDA), os laudos específicos precisam de vistoria presencial do sistema e podem levar até 10 dias úteis para emissão. Planejar com antecedência elimina o risco de atraso por documento específico.',
  },
  h2_escolher:{
    heading:'Por que a DRD2 para reunir a documentação do AVCB?',
    body1:'A DRD2 tem experiência em todos os tipos de documento exigidos pelo CBPMESP e rede de profissionais habilitados para emitir cada laudo técnico necessário. Não precisamos de terceiros não confiáveis — gerenciamos todo o processo de documentação internamente.',
    body2:'Auditoria documental gratuita antes do início: avaliamos sua documentação existente e identificamos exatamente o que falta. Sem surpresas de última hora que atrasm o protocolo.',
  },
  h2_cobertura:{heading:'Atendimento documental para AVCB em toda SP',body1:'Atendemos toda a Grande São Paulo para levantamento técnico e auditoria documental. Equipe disponível em até 48h.',body2:'Para imóveis em outras cidades do Estado, a auditoria inicial pode ser realizada por videochamada com envio digital dos documentos existentes.'},
  faqs:[
    {question:'A planta do imóvel pode ser desenhada à mão?',answer:'Não. O CBPMESP exige planta técnica elaborada por profissional habilitado (arquiteto ou engenheiro) com ART ou RRT recolhida. Levantamentos arquitetônicos feitos após reformas precisam ser formalizados com ART pelo profissional responsável.'},
    {question:'O laudo elétrico tem prazo de validade?',answer:'O CBPMESP não define prazo de validade específico para o laudo elétrico, mas exige que reflita o estado atual das instalações. Na prática, laudos com mais de 3 anos são frequentemente questionados e pode ser exigido laudo atualizado. A DRD2 recomenda laudo emitido nos últimos 12 meses.'},
    {question:'Posso usar o laudo elétrico do bombeiro anterior para o novo AVCB?',answer:'Somente se o laudo ainda refletir fielmente as instalações elétricas atuais e tiver ART válida. Se houve qualquer alteração na instalação elétrica desde a emissão do laudo anterior, um novo laudo é obrigatório.'},
    {question:'O IPTU digital é aceito pelo CBPMESP?',answer:'Sim. O extrato do IPTU obtido pelo portal da Prefeitura de SP é aceito. O documento precisa conter claramente a área total do imóvel, o uso declarado (residencial, comercial, misto) e o endereço completo compatível com o imóvel do processo.'},
    {question:'Preciso de documentos diferentes para AVCB de condomínio e de comércio?',answer:'Sim. Para condomínios, são necessários adicionalmente: convenção de condomínio, ata da última assembleia com eleição do síndico e CNPJ do condomínio. Para comércio, o contrato social da empresa e o alvará de funcionamento atual. A lista base de documentos é a mesma para ambos.'},
  ],
  linksInternos:[
    {href:'/avcb-vencido-o-que-fazer',label:'AVCB Vencido — O Que Fazer?'},
    {href:'/prazo-renovacao-avcb-sao-paulo',label:'Prazo de Renovação do AVCB'},
    {href:'/avcb-ou-clcb-qual-preciso',label:'AVCB ou CLCB — Qual Preciso?'},
    {href:'/vistoria-corpo-de-bombeiros-o-que-esperar',label:'Checklist da Vistoria'},
    {href:'/como-regularizar-avcb-vencido',label:'Como Regularizar AVCB Vencido'},
  ],
  ctaFinal:{heading:'DOCUMENTAÇÃO COMPLETA PARA AVCB SEM COMUNIQUE-SE',body:'Auditoria documental gratuita. Processo correto na primeira tentativa.',cta:'Solicitar Auditoria Documental Gratuita'},
},
];

pages.forEach(d => {
  const file = path.join('src','app',d.dir,'page.tsx');
  fs.writeFileSync(file, makePage(d), 'utf8');
  console.log('UPDATED: ' + d.dir);
});
console.log('Done: ' + pages.length);
