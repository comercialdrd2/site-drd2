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
  dir:'multa-corpo-de-bombeiros-como-resolver', slug:'/multa-corpo-de-bombeiros-como-resolver',
  meta:{title:'Multa do Corpo de Bombeiros SP — Como Resolver e Recorrer | DRD2',description:'Recebeu multa do Corpo de Bombeiros em SP? Saiba como recorrer, reduzir ou anular o Auto de Infração. Laudo técnico com ART para defesa administrativa em até 48h.'},
  eyebrow:'Auto de Infração CBPMESP — Orientação Técnica Urgente',
  h1Line1:'Multa do Corpo de Bombeiros', h1Line2:'Como Resolver e Recorrer em São Paulo',
  heroBg:'/images/banner-hero.webp',
  introP1:'Recebeu Auto de Infração do Corpo de Bombeiros? O prazo para recurso com possibilidade de redução ou anulação da multa é de apenas 10 dias úteis após a ciência. Agir rápido é fundamental para não perder o desconto recursal e evitar a inscrição em dívida ativa.',
  introP2:'A DRD2 analisa o Auto de Infração, identifica a estratégia de defesa técnica mais eficaz e emite laudo com ART CREA-SP para protocolo na fase recursal. Diagnóstico do caso gratuito.',
  breadcrumbs:[{label:'Home',href:'/'},{label:'Multa Corpo de Bombeiros — Como Resolver'}],
  occupationType:'estabelecimento autuado',
  h2_principal:{
    heading:'Como funciona a multa do Corpo de Bombeiros em São Paulo?',
    body:'O Auto de Infração do CBPMESP é lavrado quando o vistoriador identifica irregularidades durante fiscalização programada, vistoria por denúncia ou ocorrência de incêndio. O documento descreve cada infração encontrada, o artigo do Decreto 56.819/2011 infringido e o valor da multa por item. Múltiplas infrações geram múltiplas multas — é comum ver Autos com 3 a 8 itens separados, cada um com valor individual.',
    body2:'O valor das multas vai de R$ 500 a R$ 50.000 por infração conforme a Tabela do CBPMESP, majorado por fatores como tipo de ocupação, histórico de reincidência, risco efetivo e número de pessoas expostas. Multas não pagas e não recorridas no prazo são inscritas em dívida ativa estadual com acréscimo de juros SELIC e correção monetária, além de negativar o CNPJ na Sefaz-SP.',
  },
  h2_riscos:{
    heading:'O que acontece se não resolver a multa no prazo',
    intro:'Ignorar o Auto de Infração ou deixar o prazo recursal vencer sem ação tem consequências que se acumulam e são progressivamente mais caras de resolver.',
    itens:[
      {titulo:'Perda do desconto recursal',desc:'Na fase administrativa, a multa pode ser reduzida em até 50% com a apresentação de laudo técnico e prova de regularização. Após o prazo, nenhum desconto é possível.'},
      {titulo:'Inscrição em dívida ativa',desc:'Multa não paga e não recorrida é inscrita em dívida ativa estadual. O CNPJ fica negativado na Sefaz-SP, bloqueando certidões, participação em licitações e emissão de novas licenças.'},
      {titulo:'Protesto em cartório',desc:'Dívidas ativas do Estado de São Paulo podem ser protestadas em cartório, negativando o CPF do sócio ou responsável legal, não apenas o CNPJ da empresa.'},
      {titulo:'Novo embargo por reincidência',desc:'Reincidência detectada em nova fiscalização gera multa dobrada conforme o Decreto 56.819/2011, além de risco elevado de embargo imediato sem possibilidade de recurso preliminar.'},
      {titulo:'Bloqueio de renovação de alvará',desc:'A Prefeitura de SP consulta a situação junto ao CBPMESP no momento da renovação do alvará. Dívida ativa ativa bloqueia a renovação independente da situação atual do imóvel.'},
      {titulo:'Responsabilidade pessoal do sócio',desc:'Em casos de negligência grave com vítimas, a responsabilidade pode ultrapassar o CNPJ e atingir pessoalmente o sócio-administrador, inclusive com restrições a bens pessoais.'},
    ],
  },
  h2_detalhes:{
    heading:'As 4 estratégias de defesa contra multa do Corpo de Bombeiros',
    body1:'Cada Auto de Infração tem características específicas que determinam qual estratégia de defesa é mais eficaz. A DRD2 analisa o Auto integralmente antes de definir o caminho — não existe "receita única" para recurso administrativo de multa do Corpo de Bombeiros.',
    alerta:'10 dias úteis para recurso com desconto. Não perca esse prazo.',
    itens:[
      {titulo:'1. Nulidade formal do Auto',desc:'Autos com vícios formais — identificação incorreta do responsável, infração descrita de forma genérica sem artigo específico, ausência de data ou assinatura do vistoriador — podem ser anulados por nulidade formal, independente do mérito da infração.'},
      {titulo:'2. Contestação técnica da infração',desc:'Quando a infração descrita no Auto não corresponde à realidade do imóvel, o laudo técnico com ART demonstra a conformidade e contesta o fundamento técnico da autuação. Requer vistoria in loco e documentação fotográfica.'},
      {titulo:'3. Regularização + redução recursal',desc:'Para infrações procedentes, a regularização comprovada com laudo de engenheiro durante o prazo recursal pode reduzir a multa em até 50%. Essa é a estratégia mais comum e eficaz quando a infração é real.'},
      {titulo:'4. Parcelamento administrativo',desc:'Para multas altas com mérito procedente, o parcelamento administrativo junto à Sefaz-SP pode diluir o pagamento em até 60 vezes, evitando a inscrição em dívida ativa durante o período de pagamento.'},
    ],
    closing:'A DRD2 realiza análise gratuita do Auto de Infração, define a estratégia mais eficaz e emite o laudo técnico com ART em até 48h para protocolo no CBPMESP dentro do prazo recursal.',
  },
  h2_processo:{
    heading:'Como funciona o processo de recurso contra multa do Corpo de Bombeiros',
    etapas:[
      {numero:'ETAPA 01',titulo:'Análise do Auto de Infração',desc:'A DRD2 analisa cada item autuado: artigo infringido, valor da multa, data de ciência e prazo recursal. Identificamos vícios formais e definimos a estratégia.'},
      {numero:'ETAPA 02',titulo:'Vistoria técnica in loco',desc:'Levantamento do estado atual do imóvel com documentação fotográfica. Comparamos com o descrito no Auto para identificar contestações técnicas procedentes.'},
      {numero:'ETAPA 03',titulo:'Adequação das irregularidades',desc:'Quando a infração é procedente, executamos a regularização das pendências identificadas no Auto antes de protocolar o recurso, garantindo a redução máxima da multa.'},
      {numero:'ETAPA 04',titulo:'Laudo técnico com ART',desc:'Elaboração de laudo fundamentado, com registro fotográfico antes/depois, medições técnicas e ART CREA-SP recolhida — documentação exigida pelo CBPMESP na fase recursal.'},
      {numero:'ETAPA 05',titulo:'Protocolo do recurso',desc:'O recurso completo é protocolado na Unidade dos Bombeiros responsável dentro do prazo de 10 dias úteis. Guarda-se comprovante para toda a fase recursal.'},
      {numero:'ETAPA 06',titulo:'Acompanhamento da análise',desc:'Monitoramos o andamento do recurso e respondemos qualquer exigência adicional da comissão julgadora dentro do prazo. Taxa de êxito parcial ou total superior a 80%.'},
    ],
  },
  h2_quando:{
    heading:'Quando agir após receber o Auto de Infração?',
    body1:'Imediatamente. O prazo de 10 dias úteis começa a contar na data em que o responsável toma ciência do Auto — seja na vistoria presencial (assinando o documento), seja por notificação postal com aviso de recebimento. Sábados, domingos e feriados não contam, mas os dias úteis passam rápido quando a documentação técnica precisa ser elaborada.',
    body2:'A DRD2 precisa de pelo menos 2 dias úteis para vistoria + elaboração do laudo + emissão da ART. Quanto mais cedo o contato for feito após a ciência do Auto, mais tempo existe para uma defesa técnica bem fundamentada.',
  },
  h2_escolher:{
    heading:'Por que escolher a DRD2 para recurso de multa do Corpo de Bombeiros?',
    body1:'A DRD2 tem experiência em recursos administrativos junto ao CBPMESP em todas as categorias de Auto de Infração — desde irregularidades simples de extintor vencido até embargos por ausência total de AVCB. Conhecemos os vícios formais mais comuns nos Autos emitidos em São Paulo e sabemos exatamente qual fundamento técnico o CBPMESP aceita como suficiente para cada tipo de infração.',
    body2:'Nossos laudos são elaborados por engenheiro especialista com ART CREA-SP ativa, no formato exato exigido pelo CBPMESP. Diagnóstico do caso gratuito — avaliamos o Auto antes de qualquer compromisso de honorários.',
  },
  h2_cobertura:{heading:'Atendimento urgente em toda São Paulo',body1:'A DRD2 atende toda a Grande SP com equipe para vistoria in loco em até 48h para casos urgentes de Auto de Infração. Capital, ABC, Osasco, Guarulhos e região metropolitana.',body2:'Para cidades mais distantes, realizamos análise prévia do Auto por video com documentação digital para definir estratégia e prazo antes do deslocamento.'},
  faqs:[
    {question:'É possível anular totalmente a multa do Corpo de Bombeiros?',answer:'Sim, em casos de nulidade formal do Auto (vícios procedimentais) ou contestação técnica procedente (a infração descrita não existia no momento da vistoria). A taxa de anulação total é menor — mais comum é a redução de 30% a 50% com regularização comprovada dentro do prazo recursal.'},
    {question:'Quanto tempo dura o processo de recurso administrativo?',answer:'A análise do recurso pelo CBPMESP leva em média 30 a 90 dias após o protocolo. Durante esse período, a multa fica suspensa — não é inscrita em dívida ativa. O estabelecimento pode funcionar normalmente se não houver embargo associado.'},
    {question:'E se o recurso for negado? Ainda posso recorrer?',answer:'Sim. Após a decisão da primeira instância, existe recurso para a segunda instância administrativa do CBPMESP. Em casos extremos, é possível questionar judicialmente. A DRD2 orienta em todas as fases do processo recursal.'},
    {question:'Posso pagar a multa e depois pedir restituição?',answer:'Não é recomendado. Pagar a multa implica reconhecimento da infração e elimina a possibilidade de recurso. Sempre analise o prazo recursal antes de qualquer pagamento — a redução recursal é mais vantajosa do que qualquer parcelamento pós-pagamento.'},
    {question:'A DRD2 garante a anulação ou redução da multa?',answer:'Não garantimos resultado, pois a decisão é da autoridade julgadora do CBPMESP. Garantimos que o laudo técnico será elaborado corretamente, protocolado no prazo e fundamentado nos argumentos mais sólidos disponíveis para o caso específico. Nossa taxa de êxito parcial ou total é superior a 80%.'},
  ],
  linksInternos:[
    {href:'/embargo-corpo-de-bombeiros-sao-paulo',label:'Embargo do Corpo de Bombeiros'},
    {href:'/avcb-vencido-o-que-fazer',label:'AVCB Vencido — O Que Fazer?'},
    {href:'/avcb-urgente-sao-paulo',label:'AVCB Urgente em SP'},
    {href:'/vistoria-corpo-de-bombeiros-o-que-esperar',label:'Vistoria dos Bombeiros — Checklist'},
  ],
  ctaFinal:{heading:'MULTA DO CBPMESP? RECORRA COM A DRD2',body:'Laudo técnico + ART em até 48h. Análise gratuita do Auto de Infração.',cta:'Analisar Meu Auto de Infração Agora'},
},
{
  dir:'avcb-urgente-sao-paulo', slug:'/avcb-urgente-sao-paulo',
  meta:{title:'AVCB Urgente em São Paulo — Prazo Apertado? | DRD2 Engenharia',description:'Precisa de AVCB urgente em SP? Venda de imóvel, credenciamento ou prazo vencendo. A DRD2 protocola em até 10 dias úteis com diagnóstico gratuito e documentação completa.'},
  eyebrow:'AVCB Express — Protocolo em até 10 Dias Úteis',
  h1Line1:'AVCB Urgente', h1Line2:'em São Paulo — Prazo Apertado? Resolvemos',
  heroBg:'/images/banner-hero.webp',
  introP1:'Venda do imóvel travada, processo de credenciamento exigindo AVCB, alvará bloqueado ou prazo de 30 dias para regularizar. A DRD2 Engenharia tem protocolo de atendimento urgente para AVCB em São Paulo — diagnóstico técnico em 24h e protocolo no Corpo de Bombeiros em até 10 dias úteis.',
  introP2:'Não existe "AVCB em 24h" — o processo exige análise técnica, documentação e vistoria pelo CBPMESP. Mas existe um caminho mais rápido quando a documentação está correta e os sistemas estão conformes. A DRD2 domina esse caminho.',
  breadcrumbs:[{label:'Home',href:'/'},{label:'AVCB Urgente São Paulo'}],
  occupationType:'imóvel com prazo urgente',
  h2_principal:{
    heading:'Quando o AVCB é realmente urgente e o que fazer?',
    body:'O AVCB urgente não é uma modalidade oficial do CBPMESP — não existe processo "expresso" perante os Bombeiros. O que existe é a possibilidade de chegar ao protocolo com documentação 100% completa e sistemas 100% conformes, eliminando o risco de Comunique-se (que atrasa o processo em 30–60 dias por ocorrência). A DRD2 é especialista exatamente nessa fase pré-protocolo: auditoria, adequação e documentação impecável.',
    body2:'As situações mais comuns que geram necessidade de AVCB urgente em São Paulo: venda de imóvel comercial com due diligence de comprador exigindo AVCB válido, processo de credenciamento em plano de saúde ou órgão público com prazo definido, renovação de contrato de locação exigindo regularização, ou alvará de funcionamento com prazo final determinado pela Prefeitura.',
  },
  h2_riscos:{
    heading:'O que atrasa o AVCB e como evitar cada obstáculo',
    intro:'Cada item abaixo pode adicionar semanas ao processo. A DRD2 identifica e elimina todos antes do protocolo.',
    itens:[
      {titulo:'Comunique-se em aberto',desc:'Pendência anterior não respondida bloqueia qualquer novo processo do mesmo endereço. Identificamos e respondemos antes de protocolar o novo processo.'},
      {titulo:'Documentação incompleta',desc:'Planta desatualizada, IPTU divergente da área real, laudo elétrico sem ART ou ART vencida geram rejeição imediata. Auditamos tudo antes do protocolo.'},
      {titulo:'Sistemas não conformes',desc:'Extintor com pressão baixa, mangueira sem teste anual, detector de fumaça inoperante ou hidrante sem pressão mínima são reprovados na vistoria e geram Comunique-se.'},
      {titulo:'Projeto desatualizado',desc:'Reforma não comunicada ao CBPMESP deixa o projeto aprovado incompatível com o imóvel real — causa frequente de reprovação na vistoria e novo Comunique-se.'},
      {titulo:'ART vencida ou incorreta',desc:'ART com dados incorretos ou escopo insuficiente é rejeitada na análise. A DRD2 elabora a ART com escopo completo na primeira vez.'},
      {titulo:'Unidade dos Bombeiros errada',desc:'Protocolar na Unidade incorreta significa rejeição e reinício do processo. Cada endereço tem uma unidade responsável específica — identificamos corretamente.'},
    ],
  },
  h2_detalhes:{
    heading:'O cronograma real do AVCB urgente em São Paulo',
    body1:'Com documentação completa e sistemas conformes, este é o cronograma mínimo realista para AVCB em São Paulo. Não existe forma de acelerar a análise interna do CBPMESP — mas é possível chegar ao protocolo perfeito e sem riscos em até 10 dias úteis.',
    alerta:'Protocolo correto = sem Comunique-se = processo mais rápido.',
    itens:[
      {titulo:'Dias 1–2: Diagnóstico técnico',desc:'Levantamento in loco completo. Identificamos todas as não-conformidades, pendências documentais e Comunique-ses em aberto no sistema do CBPMESP.'},
      {titulo:'Dias 3–5: Adequação dos sistemas',desc:'Execução das obras e ajustes necessários: extintores, sinalização, iluminação de emergência, teste de mangueiras, calibração de bombas. Paralelamente, elaboração do projeto técnico.'},
      {titulo:'Dias 6–8: Documentação e ART',desc:'Finalização do projeto PPCI com memorial descritivo, cálculo específico e ART CREA-SP recolhida. Reunião de toda a documentação complementar exigida pela Unidade dos Bombeiros.'},
      {titulo:'Dias 9–10: Protocolo no CBPMESP',desc:'Entrega do processo completo na Unidade responsável. Com documentação impecável, o processo entra direto na fila de análise e vistoria — sem risco de Comunique-se.'},
    ],
    closing:'Após o protocolo, a vistoria é agendada pelo CBPMESP em prazo que varia de 15 a 45 dias conforme a demanda da Unidade. Acompanhamos a vistoria e respondemos qualquer exigência adicional em 24h.',
  },
  h2_processo:{
    heading:'Protocolo de AVCB urgente da DRD2',
    etapas:[
      {numero:'DIA 1',titulo:'Contato e triagem urgente',desc:'Análise do caso, verificação de Comunique-ses em aberto e situação atual no sistema do CBPMESP. Resposta em até 2h.'},
      {numero:'DIA 2',titulo:'Vistoria técnica prioritária',desc:'Levantamento completo in loco com equipe técnica própria. Mapeamento de todas as adequações necessárias.'},
      {numero:'DIAS 3–5',titulo:'Adequação e sistemas',desc:'Execução de todas as obras e ajustes necessários para conformidade total com as ITs aplicáveis.'},
      {numero:'DIAS 6–8',titulo:'Projeto e documentação',desc:'Elaboração do PPCI, memorial, cálculos e reunião de toda a documentação para protocolo.'},
      {numero:'DIAS 9–10',titulo:'ART e protocolo',desc:'Recolhimento da ART CREA-SP e protocolo completo na Unidade dos Bombeiros responsável.'},
      {numero:'PÓS-PROTOCOLO',titulo:'Acompanhamento da vistoria',desc:'Monitoramento do processo, agendamento da vistoria e presença do engenheiro na visita dos Bombeiros.'},
    ],
  },
  h2_quando:{
    heading:'Quanto tempo realmente leva o AVCB urgente?',
    body1:'Do diagnóstico ao protocolo: 10 dias úteis com a DRD2. Da vistoria à emissão do AVCB: 15 a 45 dias adicionais conforme a demanda da Unidade do CBPMESP. Prazo total mínimo realista: 25 a 55 dias úteis do início ao certificado.',
    body2:'Para processos que envolvem obras complexas de adequação (instalação de sistema de sprinkler, pressurização de escada, sistema de alarme completo), o prazo de protocolo pode ser de 20 a 30 dias. Nesse caso, orientamos sobre alternativas legais para o período de regularização.',
  },
  h2_escolher:{
    heading:'Por que a DRD2 é a escolha certa para AVCB urgente?',
    body1:'A DRD2 tem equipe técnica própria para todas as etapas: engenheiro de projetos, equipe de execução de sistemas e responsável pelo protocolo. Não terceirizamos nenhuma etapa — isso elimina o risco de falha de comunicação que atrasa processos urgentes.',
    body2:'Em 10 anos de atuação em São Paulo, desenvolvemos relacionamento técnico com as Unidades do CBPMESP e conhecemos o perfil de exigência de cada uma. Isso nos permite calibrar a documentação especificamente para cada Unidade e reduzir o risco de exigências adicionais pós-protocolo.',
  },
  h2_cobertura:{heading:'AVCB urgente em toda a Grande São Paulo',body1:'Atendemos toda a capital e municípios da Grande SP com equipe para vistoria prioritária. Guarulhos, ABC, Osasco, Campinas e Santos com agenda em até 48h.',body2:'Para outras regiões do Estado de SP, realizamos triagem por videochamada em até 24h para avaliar viabilidade e prazo do processo urgente.'},
  faqs:[
    {question:'Existe alguma forma de "pular a fila" no Corpo de Bombeiros?',answer:'Não. O CBPMESP não tem modalidade de processo expresso ou prioritário para particulares. O que é possível é chegar ao protocolo com documentação 100% correta, eliminando o Comunique-se que atrasaria o processo. A DRD2 domina essa fase pré-protocolo.'},
    {question:'Posso vender o imóvel enquanto o AVCB está sendo processado?',answer:'A venda em si não é juridicamente impedida, mas a maioria dos compradores exige AVCB válido como condição da escritura. É possível negociar com o comprador uma cláusula de regularização com prazo e garantia, mas isso exige anuência da parte compradora.'},
    {question:'E se o prazo do comprador ou do credenciamento for menor que 30 dias?',answer:'Nesse caso, orientamos sobre as alternativas legais: carta de protocolo com número de processo, declaração técnica de conformidade emitida por engenheiro, ou negociação de prazo com a parte interessada. A DRD2 emite documentação técnica de suporte que muitas partes aceitam como comprovante de regularização em andamento.'},
    {question:'Posso começar o processo de AVCB urgente sem a documentação completa?',answer:'A DRD2 pode iniciar o levantamento técnico e as adequações antes de reunir toda a documentação. Trabalhamos em paralelo: equipe técnica no imóvel enquanto reunimos a documentação. Isso reduz o prazo total sem comprometer a qualidade do processo.'},
    {question:'Qual o custo de um AVCB urgente?',answer:'O custo de urgência inclui a mobilização prioritária da equipe técnica e pode ter um adicional sobre o processo normal. O diagnóstico e a estimativa de custo total são gratuitos. Fazemos orçamento fechado antes de qualquer início de trabalho.'},
  ],
  linksInternos:[
    {href:'/avcb-vencido-o-que-fazer',label:'AVCB Vencido — O Que Fazer?'},
    {href:'/como-regularizar-avcb-vencido',label:'Como Regularizar AVCB Vencido'},
    {href:'/prazo-renovacao-avcb-sao-paulo',label:'Prazo de Renovação do AVCB'},
    {href:'/documentos-necessarios-avcb-sao-paulo',label:'Documentos para AVCB em SP'},
  ],
  ctaFinal:{heading:'AVCB URGENTE EM SP? A DRD2 PROTOCOLA EM 10 DIAS',body:'Diagnóstico técnico em 24h. Protocolo no CBPMESP em até 10 dias úteis com documentação completa.',cta:'Solicitar AVCB Urgente Agora'},
},
];

pages.forEach(d => {
  const file = path.join('src','app',d.dir,'page.tsx');
  fs.writeFileSync(file, makePage(d), 'utf8');
  console.log('UPDATED: ' + d.dir);
});
console.log('Done: ' + pages.length);
