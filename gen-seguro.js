const fs = require('fs'), path = require('path');

function mp(d) {
  return `import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";
const data: UniversalPageData = ${JSON.stringify(d, null, 2)};
export const metadata = { title: data.meta.title, description: data.meta.description, alternates: { canonical: data.slug } };
export default function Page() { return <UniversalSeoPage data={data} />; }
`;
}

const d = {
  dir: 'avcb-para-renovacao-de-seguro',
  slug: '/avcb-para-renovacao-de-seguro',
  meta: {
    title: 'AVCB para Renovação de Seguro Predial — Como Regularizar | DRD2',
    description: 'Seguradora exigindo AVCB para renovar o seguro patrimonial? A DRD2 regulariza seu imóvel com urgência. Diagnóstico gratuito, protocolo sem pendências e laudo técnico aceito pelas seguradoras.',
  },
  eyebrow: 'Seguradora Exigindo AVCB — Regularize Agora em SP',
  h1Line1: 'AVCB para Renovação de Seguro',
  h1Line2: 'Seguradora Exigindo Certificação? Resolva em SP',
  heroBg: '/images/banner-hero.webp',
  introP1: 'Sua seguradora exigiu o AVCB válido para renovar o seguro patrimonial ou incêndio? Essa situação é mais comum do que parece — e tem prazo. A DRD2 regulariza seu imóvel com urgência para garantir a continuidade da apólice sem interrupção de cobertura.',
  introP2: 'Seguradoras exigem AVCB válido porque imóvel sem certificação de incêndio representa risco técnico real para o pagamento de sinistros. Sem regularização no prazo exigido pela seguradora, a apólice pode ser cancelada — deixando o patrimônio sem cobertura.',
  breadcrumbs: [{label:'Home',href:'/'},{label:'AVCB para Renovação de Seguro'}],
  occupationType: 'imóvel com seguro patrimonial',
  h2_principal: {
    heading: 'Por que a seguradora exige o AVCB para renovar o seguro?',
    body: 'Seguradoras brasileiras incluem a manutenção de sistemas de segurança contra incêndio como cláusula contratual na maioria das apólices de seguro patrimonial, incêndio e empresarial. Quando o AVCB vence ou o imóvel nunca teve certificação, a seguradora identifica o risco na renovação anual e exige regularização como condição para emissão da nova apólice — ou para manutenção da cobertura existente. A lógica é simples: imóvel sem AVCB não teve vistoria do Corpo de Bombeiros, não tem sistemas de combate a incêndio certificados e representa risco estatisticamente maior de sinistro com maior valor de prejuízo.',
    body2: 'Na prática, isso significa: ou você regulariza o AVCB dentro do prazo que a seguradora estipula, ou a apólice não é renovada. Se estiver no meio da vigência, algumas seguradoras emitem notificação de cancelamento com prazo. A DRD2 Engenharia atua especificamente nesse contexto de urgência — diagnóstico em 24h, protocolo priorizado no CBPMESP e laudos técnicos dos sistemas aceitos pelas principais seguradoras do mercado.',
  },
  h2_riscos: {
    heading: 'O que acontece se não regularizar o AVCB no prazo da seguradora',
    intro: 'Esses 6 cenários acontecem com frequência em imóveis que perdem a cobertura por irregularidade no AVCB — os riscos são reais e imediatos.',
    itens: [
      {titulo:'Apólice cancelada sem comunicação prévia suficiente',desc:'Seguradoras podem cancelar a apólice com 30 dias de aviso. Sem cobertura ativa, o imóvel fica desprotegido contra incêndio, explosão, desabamento e responsabilidade civil — risco integral para o proprietário.'},
      {titulo:'Sinistro negado com AVCB vencido',desc:'Se houver sinistro com a apólice tecnicamente vigente mas AVCB vencido, a seguradora pode negar o pagamento com base na cláusula de manutenção de sistemas — argumento que tem sustentação jurídica quando o AVCB está vencido há mais de 30 dias.'},
      {titulo:'Renovação negada — período sem cobertura',desc:'Sem renovação aprovada pela seguradora, o imóvel fica sem cobertura patrimonial. Nesse período, qualquer incidente representa perda financeira integral — responsabilidade do proprietário.'},
      {titulo:'Aumento de prêmio por risco elevado',desc:'Algumas seguradoras mantêm a cobertura mas elevam o prêmio significativamente enquanto o AVCB está irregular — custo direto mensurável que pode superar o custo da regularização.'},
      {titulo:'Notificação a financiadores e locatários',desc:'Quando o imóvel é financiado, o banco que concedeu o crédito é geralmente beneficiário da apólice e é notificado do cancelamento — podendo acionar cláusulas de rescisão ou exigência de novo seguro mais caro.'},
      {titulo:'Responsabilidade civil ampliada',desc:'Com apólice cancelada, o proprietário assume integralmente qualquer indenização por danos a terceiros em caso de incêndio propagado do imóvel — sem o respaldo da seguradora para defender e pagar eventuais ações.'},
    ],
  },
  h2_detalhes: {
    heading: 'O que a DRD2 entrega para satisfazer a exigência da seguradora',
    body1: 'A seguradora pode exigir diferentes documentos dependendo do tipo de apólice e do imóvel. A DRD2 identifica exatamente o que cada seguradora aceita e entrega o documento correto — sem idas e vindas.',
    alerta: 'Laudo técnico de engenheiro com ART ≠ relatório de manutenção. A seguradora pode rejeitar o documento errado.',
    itens: [
      {titulo:'AVCB válido emitido pelo CBPMESP',desc:'O certificado de conformidade emitido após aprovação na vistoria do Corpo de Bombeiros — documento mais completo e aceito por todas as seguradoras, sem questionamentos adicionais.'},
      {titulo:'CLCB (Certificado de Licença do Corpo de Bombeiros)',desc:'Para imóveis de baixo risco e menor área, o CLCB é equivalente ao AVCB e igualmente aceito pelas seguradoras. Processo mais rápido e com custo menor.'},
      {titulo:'Laudo técnico de sistemas com ART',desc:'Para seguradoras que aceitam laudos intermediários enquanto o processo de AVCB está em andamento — a DRD2 emite laudo técnico de alarme, hidrante ou sprinkler com ART CREA-SP em até 48h.'},
      {titulo:'Protocolo do processo no CBPMESP',desc:'Algumas seguradoras aceitam o número de protocolo do processo em andamento no Corpo de Bombeiros como evidência de regularização em curso — a DRD2 protocola com urgência e entrega o número para o segurado apresentar à seguradora.'},
    ],
    closing: 'A DRD2 acompanha o processo completo: do diagnóstico ao AVCB emitido, com comunicação direta sobre o andamento para que você possa informar a seguradora sobre cada etapa concluída.',
  },
  h2_processo: {
    heading: 'Como regularizar o AVCB para a seguradora com urgência',
    etapas: [
      {numero:'ETAPA 01',titulo:'Diagnóstico em 24h',desc:'Levantamento completo do imóvel: estado dos sistemas, documentação existente, histórico no CBPMESP e verificação de Comunique-ses em aberto. Definição do caminho mais rápido para a regularização.'},
      {numero:'ETAPA 02',titulo:'Enquadramento e estratégia',desc:'Definição entre AVCB e CLCB conforme o imóvel. Para imóveis que se enquadram em CLCB, o processo é mais rápido — estratégia relevante quando a seguradora tem prazo curto.'},
      {numero:'ETAPA 03',titulo:'Adequação dos sistemas',desc:'Execução das obras necessárias: extintores, sinalização, iluminação de emergência, hidrante, alarme ou sprinkler conforme exigido para o tipo de imóvel. A DRD2 executa com equipe própria.'},
      {numero:'ETAPA 04',titulo:'Laudos técnicos intermediários',desc:'Quando a seguradora aceita laudos parciais durante o processo, emitimos laudos de cada sistema com ART CREA-SP para documentar o estado de regularização progressiva.'},
      {numero:'ETAPA 05',titulo:'Protocolo priorizado no CBPMESP',desc:'Protocolo do processo com documentação pré-auditada para entrar sem pendências na fila de análise. Entregamos o número de protocolo para apresentação imediata à seguradora.'},
      {numero:'ETAPA 06',titulo:'AVCB emitido e entregue',desc:'Após a vistoria e aprovação, entregamos o AVCB emitido pelo CBPMESP — documento final que encerra definitivamente a exigência da seguradora e permite renovação sem restrições.'},
    ],
  },
  h2_quando: {
    heading: 'Qual o prazo para regularizar após a exigência da seguradora?',
    body1: 'As seguradoras geralmente concedem 30 a 90 dias para apresentação do AVCB válido após a notificação de exigência. Esse prazo varia conforme a apólice e a política de cada seguradora. O processo de AVCB completo leva de 60 a 120 dias — por isso é fundamental iniciar imediatamente após receber a notificação, sem aguardar o prazo final.',
    body2: 'Para seguradoras com prazo de 30 dias: a DRD2 pode fornecer laudos técnicos intermediários com ART e o número de protocolo do processo em andamento no CBPMESP como evidência de regularização. Comunique a sua seguradora sobre o andamento — a maioria aceita prorrogação mediante comprovação de processo em curso.',
  },
  h2_escolher: {
    heading: 'Por que a DRD2 para regularizar o AVCB exigido pela seguradora?',
    body1: 'A DRD2 tem experiência específica em regularizações com prazo definido pela seguradora. Sabemos quais documentos cada seguradora aceita em cada fase do processo e como comunicar o andamento para evitar o cancelamento da apólice durante o processo de regularização.',
    body2: 'Diagnóstico gratuito em 24h, laudos técnicos intermediários com ART em até 48h, protocolo no CBPMESP sem pendências e acompanhamento presencial da vistoria. Taxa de aprovação na primeira vistoria superior a 95%.',
  },
  h2_cobertura: {
    heading: 'Atendimento em toda a Grande São Paulo e interior',
    body1: 'A DRD2 regulariza imóveis para satisfazer exigências de seguradoras em toda a capital, Grande SP (Guarulhos, ABC, Osasco, Barueri), Baixada Santista (Santos, Guarujá, São Vicente, Praia Grande), Campinas e Sorocaba.',
    body2: 'Para outras cidades do Estado de SP, avaliamos viabilidade de deslocamento conforme a urgência. Contato pelo WhatsApp em até 2h.',
  },
  faqs: [
    {question:'A seguradora pode cancelar o seguro por falta de AVCB?',answer:'Sim. A maioria das apólices de seguro patrimonial e empresarial inclui como cláusula a manutenção de sistemas de segurança contra incêndio certificados. Com AVCB vencido ou ausente, a seguradora pode não renovar a apólice ou, em alguns casos, cancelar a vigência com aviso de 30 dias.'},
    {question:'Seguradora aceitou o protocolo do processo como documento provisório. É seguro?',answer:'Sim, desde que o protocolo seja real, verificável no sistema do CBPMESP e o processo esteja efetivamente em andamento. A DRD2 protocola com documentação completa e entrega o número de protocolo acompanhado de declaração técnica descrevendo o andamento do processo.'},
    {question:'Quanto tempo leva para ter o AVCB para apresentar à seguradora?',answer:'O processo completo leva de 60 a 120 dias. Para seguradoras com prazo menor, a DRD2 emite laudos técnicos intermediários de cada sistema com ART CREA-SP em até 48h — documentos aceitos por muitas seguradoras como evidência de regularização em curso.'},
    {question:'O laudo técnico de engenheiro substitui o AVCB para a seguradora?',answer:'Depende da seguradora e do tipo de apólice. Algumas aceitam laudos técnicos com ART como evidência provisória enquanto o processo de AVCB está em andamento. Outras exigem o certificado final do CBPMESP. A DRD2 verifica com sua seguradora o que é aceito em cada caso antes de definir o documento a emitir.'},
    {question:'Tenho 30 dias para apresentar o AVCB à seguradora. É possível regularizar nesse prazo?',answer:'O processo completo de AVCB raramente é concluído em 30 dias. Para esse prazo, a DRD2 protocola o processo com urgência no CBPMESP e emite laudos técnicos dos sistemas com ART — documentos que a maioria das seguradoras aceita para prorrogação do prazo mediante comprovação de regularização em andamento.'},
  ],
  linksInternos: [
    {href:'/avcb-vencido-o-que-fazer',label:'AVCB Vencido — O Que Fazer?'},
    {href:'/laudo-alarme-incendio-sao-paulo',label:'Laudo de Alarme com ART'},
    {href:'/laudo-sistema-hidrantes-sao-paulo',label:'Laudo de Hidrantes com ART'},
    {href:'/laudo-sprinkler-sao-paulo',label:'Laudo de Sprinkler com ART'},
    {href:'/documentos-necessarios-avcb-sao-paulo',label:'Documentos para AVCB'},
  ],
  ctaFinal: {
    heading: 'SEGURADORA EXIGINDO AVCB? A DRD2 RESOLVE COM URGÊNCIA',
    body: 'Diagnóstico gratuito em 24h, laudos técnicos intermediários em 48h e protocolo sem pendências no CBPMESP.',
    cta: 'Regularizar Agora para a Seguradora',
  },
};

const dir = path.join('src','app',d.dir);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive:true});
fs.writeFileSync(path.join(dir,'page.tsx'), mp(d), 'utf8');
console.log('UPDATED: ' + d.dir);
