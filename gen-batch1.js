const fs = require('fs'), path = require('path');

// Template function — gera conteúdo 1200+ palavras por page
function gen(p) {
  const n = p.nome, t = p.tipo, it = p.it||'IT aplicável do CBPMESP', slug = p.slug;
  return {
    dir: p.dir, slug,
    meta: { title: p.title, description: p.desc },
    eyebrow: p.eyebrow || `Especialistas em ${n} — São Paulo 2026`,
    h1Line1: p.h1l1, h1Line2: p.h1l2,
    heroBg: '/images/banner-hero.webp',
    introP1: p.i1,
    introP2: p.i2,
    breadcrumbs: p.bc,
    occupationType: p.occ || t,
    h2_principal: {
      heading: p.h2p_h,
      body: p.h2p_b,
      body2: p.h2p_b2 || null,
    },
    h2_riscos: {
      heading: p.h2r_h || `Consequências de irregularidade em ${n}`,
      intro: p.h2r_i || `Veja os 6 riscos concretos para ${t} em São Paulo que operam sem a documentação regular do Corpo de Bombeiros.`,
      itens: p.h2r_itens || [
        { titulo: 'Interdição imediata', desc: `O Corpo de Bombeiros pode interditar ${t === 'estabelecimento' ? 'o estabelecimento' : 'o imóvel'} a qualquer momento mediante denúncia ou fiscalização rotineira, sem aviso prévio.` },
        { titulo: 'Multa de até R$ 50.000', desc: 'O Auto de Infração gera multa de R$ 500 a R$ 50.000 conforme a gravidade e tipo de ocupação. Reincidência dobra o valor. Multa não paga vira dívida ativa.' },
        { titulo: 'Alvará de funcionamento bloqueado', desc: 'A Prefeitura de São Paulo nega renovação do alvará sem documentação do Corpo de Bombeiros válida, tornando a operação totalmente irregular.' },
        { titulo: 'Seguro patrimonial invalidado', desc: 'Em sinistro com documentação irregular, a seguradora nega integralmente o pagamento — independente do valor do bem segurado e da causa do incêndio.' },
        { titulo: 'Responsabilidade penal do responsável', desc: 'Proprietário, síndico ou responsável legal responde civil e criminalmente por omissão em caso de incêndio com vítimas em imóvel irregular.' },
        { titulo: 'Bloqueio de negociações imobiliárias', desc: 'Venda, locação, financiamento e due diligence de M&A ficam impossibilitados com documentação irregular do Corpo de Bombeiros.' },
      ],
    },
    h2_detalhes: {
      heading: p.h2d_h,
      body1: p.h2d_b1,
      alerta: p.h2d_al || 'Não espere a fiscalização. Regularize agora.',
      itens: p.h2d_itens,
      closing: p.h2d_cl,
    },
    h2_processo: {
      heading: `Como funciona o processo completo de ${n}`,
      etapas: p.etapas || [
        { numero: 'ETAPA 01', titulo: 'Diagnóstico técnico gratuito', desc: `Levantamento in loco do estado atual dos sistemas de combate a incêndio e documentação. Identificamos todas as não-conformidades antes de protocolar.` },
        { numero: 'ETAPA 02', titulo: 'Auditoria documental', desc: 'Verificação completa de planta, IPTU, laudos e documentação anterior. Eliminamos o risco de Comunique-se antes do protocolo — cada pendência atrasa 30–60 dias.' },
        { numero: 'ETAPA 03', titulo: 'Adequação dos sistemas', desc: `Execução das obras necessárias: extintores, hidrante, alarme, sprinkler, SPDA e sinalização conforme ${it}. Equipe própria, sem terceiros.` },
        { numero: 'ETAPA 04', titulo: 'Projeto técnico com ART', desc: `Elaboração do PPCI conforme ${it}, com memorial descritivo, cálculo específico e ART CREA-SP recolhida. Documentação aceita sem questionamentos pelo CBPMESP.` },
        { numero: 'ETAPA 05', titulo: 'Protocolo no CBPMESP', desc: 'Entrega do processo completo na Unidade dos Bombeiros responsável pela região. Com documentação perfeita, o processo entra direto na análise.' },
        { numero: 'ETAPA 06', titulo: 'Vistoria e emissão do certificado', desc: 'Acompanhamento presencial da vistoria. Respondemos qualquer Comunique-se em 24h. Taxa de aprovação na primeira vistoria superior a 95%.' },
      ],
    },
    h2_quando: {
      heading: `Quando iniciar o processo de ${n}?`,
      body1: p.h2q_b1 || `A resposta ideal é: 90 dias antes do vencimento. Na prática, se a documentação já está irregular, a resposta é: agora. Cada dia sem regularização é um dia de risco real de autuação, interdição e responsabilidade civil.`,
      body2: p.h2q_b2 || `Situações que exigem ação imediata: fiscalização já realizada com prazo para regularização, Comunique-se em aberto com prazo vencendo, venda ou locação do imóvel pendente, auditoria de seguradora com prazo definido, ou renovação do alvará negada pela Prefeitura.`,
    },
    h2_escolher: {
      heading: 'Por que escolher a DRD2 Engenharia?',
      body1: `A DRD2 tem mais de 2.500 regularizações realizadas em São Paulo com equipe técnica própria para cada etapa. Nossa taxa de aprovação na primeira vistoria do Corpo de Bombeiros é superior a 95%, resultado da auditoria documental rigorosa que realizamos antes de qualquer protocolo.`,
      body2: `Não trabalhamos com despachantes: cada processo é conduzido por engenheiro credenciado no CREA-SP com ART específica. Isso garante responsabilidade técnica clara, prazo controlado e documentação aceita pelo CBPMESP. Diagnóstico gratuito e orçamento fechado antes do início.`,
    },
    h2_cobertura: {
      heading: 'Atendimento em toda a Grande São Paulo',
      body1: `A DRD2 atende toda a capital e Grande São Paulo: Zona Norte, Sul, Leste, Oeste, Centro e municípios como Guarulhos, Santo André, Osasco, São Bernardo, Campinas e Santos.`,
      body2: `Para imóveis fora da Grande SP, realizamos levantamento técnico com agenda específica. O diagnóstico inicial pode ser feito por videochamada com documentação digital para estimativa de prazo e custo sem deslocamento prévio.`,
    },
    faqs: p.faqs,
    linksInternos: p.links,
    ctaFinal: { heading: p.cta_h, body: p.cta_b, cta: p.cta_c || 'Falar com Engenheiro Agora' },
  };
}

const defs = [
{
  dir:'embargo-corpo-de-bombeiros-sao-paulo', slug:'/embargo-corpo-de-bombeiros-sao-paulo',
  title:'Embargo do Corpo de Bombeiros SP — Como Resolver | DRD2 Engenharia',
  desc:'Estabelecimento embargado pelo Corpo de Bombeiros em São Paulo? Saiba como contestar, regularizar e reabrir. Orientação técnica urgente com engenheiro especialista em até 2h.',
  nome:'Resolução de Embargo do Corpo de Bombeiros', tipo:'estabelecimento', it:'IT aplicável do CBPMESP',
  eyebrow:'Situação Crítica — Orientação Técnica Urgente',
  h1l1:'Embargo do Corpo de Bombeiros', h1l2:'Como Resolver em São Paulo',
  i1:'Estabelecimento interditado pelo CBPMESP? O embargo impede o funcionamento imediato e cada hora conta. A DRD2 analisa o Auto de Infração, identifica as não-conformidades e apresenta laudo técnico de contestação ou adequação em até 48h.',
  i2:'Entenda os seus direitos, o prazo para recurso administrativo, o que o laudo técnico precisa conter e o caminho mais rápido para reabrir com segurança jurídica e sem risco de novo embargo.',
  bc:[{label:'Home',href:'/'},{label:'Embargo Corpo de Bombeiros SP'}], occ:'estabelecimento embargado',
  h2p_h:'O que é o embargo do Corpo de Bombeiros e como ele funciona?',
  h2p_b:'O embargo é a interdição formal mais grave que o Corpo de Bombeiros pode aplicar a uma edificação. Diferente de uma simples autuação — que gera multa mas permite funcionamento durante o prazo recursal — o embargo impede imediatamente qualquer atividade no local. O proprietário ou responsável legal que descumprir o embargo pode responder por crime de desobediência, com pena de prisão de 15 dias a 6 meses além da multa.',
  h2p_b2:'O embargo pode ocorrer por risco iminente identificado na vistoria (saída de emergência bloqueada, sistema de combate a incêndio inoperante, superlotação sem AVCB), por ausência total de documentação ou por descumprimento de Comunique-se anterior com prazo vencido. Cada causa exige uma resposta técnica diferente, e o prazo para recurso é de apenas 10 dias úteis após a ciência do Auto.',
  h2r_h:'Consequências do embargo ativo em São Paulo',
  h2r_i:'O embargo ativo tem impactos que se acumulam a cada dia sem resolução. Conheça os 6 principais.',
  h2r_itens:[
    {titulo:'Funcionamento proibido',desc:'O embargo veda qualquer atividade no local. Operar com embargo ativo é crime de desobediência, com possibilidade de prisão do responsável legal além de nova multa.'},
    {titulo:'Comunicação à Prefeitura',desc:'O CBPMESP comunica o embargo à Prefeitura, que pode cancelar o alvará de funcionamento — exigindo nova habilitação completa após a regularização.'},
    {titulo:'Inscrição em dívida ativa',desc:'A multa do embargo não paga é inscrita em dívida ativa estadual com juros e correção. O CNPJ fica negativado na Sefaz-SP, bloqueando certidões e alvarás.'},
    {titulo:'Responsabilidade civil ampliada',desc:'Com embargo ativo, a responsabilidade civil do proprietário em caso de acidente é presumida. Seguro pode ser negado por má-fé regulatória.'},
    {titulo:'Prejuízo operacional diário',desc:'Cada dia com embargo significa receita zero para o estabelecimento. Contratos com clientes e fornecedores podem ser rescindidos por força maior.'},
    {titulo:'Risco de novo embargo',desc:'Reabrir sem resolver todas as não-conformidades do Auto de Infração gera novo embargo imediato na próxima fiscalização, com multa dobrada por reincidência.'},
  ],
  h2d_h:'Como contestar o embargo em 10 dias úteis',
  h2d_b1:'O prazo recursal é curto e improrrogável. Em 10 dias úteis após a ciência do Auto de Infração, o responsável deve apresentar recurso administrativo ao Comandante da Unidade do CBPMESP com laudo técnico fundamentando a contestação. Após esse prazo, a multa é inscrita em dívida ativa sem possibilidade de redução.',
  h2d_al:'10 dias úteis. Não perca o prazo recursal.',
  h2d_itens:[
    {titulo:'Leia o Auto de Infração com atenção',desc:'Cada item do Auto exige resposta técnica específica. Identifique se o embargo é por risco iminente, ausência de AVCB ou Comunique-se vencido — cada causa tem uma estratégia diferente.'},
    {titulo:'Contrate engenheiro para o laudo',desc:'Apenas engenheiro com CREA-SP ativo pode assinar o laudo de defesa ou adequação. A DRD2 emite ART em até 48h após a vistoria técnica.'},
    {titulo:'Corrija as não-conformidades imediatas',desc:'Para embargos por risco técnico pontual (saída bloqueada, extintor vencido), a correção imediata seguida de laudo pode gerar liberação em dias. Documente tudo com fotos datadas.'},
    {titulo:'Protocole o recurso formalmente',desc:'O recurso com laudo técnico deve ser protocolado na Unidade dos Bombeiros responsável. Guarde o comprovante — ele é prova de boa-fé durante o processo.'},
  ],
  h2d_cl:'A DRD2 analisa o Auto de Infração gratuitamente, identifica a estratégia de contestação mais eficaz e emite o laudo técnico com ART em até 48h para protocolo no CBPMESP.',
  h2q_b1:'A regra é simples: cada dia com embargo ativo é um dia de prejuízo acumulado. O prazo recursal de 10 dias úteis para contestação com desconto de multa começa a contar na data de ciência do Auto — não na data do embargo.',
  h2q_b2:'Após o prazo recursal, a única opção é pagar a multa integral, regularizar completamente o imóvel e solicitar nova vistoria para liberação. O processo de regularização completa pode levar 60 a 120 dias dependendo das obras necessárias.',
  faqs:[
    {question:'Posso funcionar em outro endereço com o embargo ativo?',answer:'Sim, desde que o outro local tenha AVCB/CLCB válido e seja um endereço regularizado para a atividade. O embargo é vinculado ao imóvel e ao CNPJ naquele endereço específico. Atividades no mesmo segmento em endereço diferente com documentação própria não são afetadas pelo embargo.'},
    {question:'Quanto tempo leva para reabrir após embargo?',answer:'Depende da causa. Para embargos por risco técnico pontual (extintor vencido, saída bloqueada), a correção e nova vistoria podem ocorrer em dias. Para embargos por ausência de AVCB, o processo de regularização leva 60 a 120 dias. A DRD2 avalia o caso específico e define o prazo real após análise do Auto.'},
    {question:'O laudo técnico garante a liberação do embargo?',answer:'O laudo técnico é o documento necessário para o recurso e para a solicitação de nova vistoria de reanálise. A liberação depende da aprovação na vistoria pelo CBPMESP. Com sistemas conformes e laudo correto, a aprovação na reanálise tem taxa superior a 90%.'},
    {question:'A DRD2 acompanha a vistoria de reanálise?',answer:'Sim. O engenheiro da DRD2 está presente na vistoria de reanálise com toda a documentação técnica em mãos. Esse acompanhamento é fundamental para responder imediatamente qualquer questionamento do vistoriador e garantir que todas as não-conformidades foram efetivamente corrigidas.'},
    {question:'O embargo afeta todos os CNPJs no mesmo endereço?',answer:'Sim. O embargo é do imóvel — todos os estabelecimentos com atividade naquele endereço são afetados. Se há mais de uma empresa no local, todas precisam suspender as atividades até a liberação, independente de qual CNPJ gerou o embargo.'},
  ],
  links:[
    {href:'/avcb-vencido-o-que-fazer',label:'AVCB Vencido — O Que Fazer?'},
    {href:'/multa-corpo-de-bombeiros-como-resolver',label:'Multa do Corpo de Bombeiros'},
    {href:'/como-regularizar-avcb-vencido',label:'Como Regularizar AVCB Vencido'},
    {href:'/avcb-urgente-sao-paulo',label:'AVCB Urgente em SP'},
    {href:'/vistoria-corpo-de-bombeiros-o-que-esperar',label:'Vistoria dos Bombeiros — O Que Esperar'},
  ],
  cta_h:'EMBARGO ATIVO? A DRD2 ATUA EM URGÊNCIA',
  cta_b:'Laudo técnico, ART e acompanhamento da vistoria de reanálise. Resolva hoje.',
},
{
  dir:'avcb-ou-clcb-qual-preciso', slug:'/avcb-ou-clcb-qual-preciso',
  title:'AVCB ou CLCB — Qual Preciso para Meu Estabelecimento? | DRD2',
  desc:'Entenda a diferença real entre AVCB e CLCB e descubra qual o Corpo de Bombeiros exige para o seu imóvel em SP. Diagnóstico gratuito com engenheiro em até 2h.',
  nome:'Definição de AVCB ou CLCB', tipo:'imóvel', it:'Decreto 56.819/2011 e ITs do CBPMESP',
  eyebrow:'Guia Técnico 2026 — CBPMESP São Paulo',
  h1l1:'AVCB ou CLCB', h1l2:'Qual Preciso para Meu Imóvel?',
  i1:'Empresários e síndicos frequentemente confundem AVCB e CLCB — dois documentos distintos com processos, prazos e custos muito diferentes. Escolher o documento errado pode invalidar todo o processo e gerar Comunique-se logo no início.',
  i2:'Este guia técnico explica a diferença entre AVCB e CLCB, qual se aplica a cada tipo de imóvel conforme o Decreto 56.819/2011, os critérios exatos de enquadramento e como a DRD2 faz o diagnóstico correto gratuitamente.',
  bc:[{label:'Home',href:'/'},{label:'AVCB ou CLCB — Qual Preciso'}], occ:'imóvel',
  h2p_h:'AVCB e CLCB: o que são e quando cada um se aplica?',
  h2p_b:'O AVCB — Auto de Vistoria do Corpo de Bombeiros — é o certificado completo, emitido após vistoria presencial do CBPMESP com análise de todos os sistemas de prevenção e combate a incêndio instalados. É exigido para edificações acima de 750m², ocupações de alto risco e qualquer imóvel com sistema de sprinkler, hidrante pressurizado ou alarme de detecção instalado, independente da área.',
  h2p_b2:'O CLCB — Certificado de Licença do Corpo de Bombeiros — é a versão simplificada para imóveis de até 750m² e baixo risco de incêndio conforme o Decreto 56.819/2011. O processo é mais ágil, pode ser concedido com análise documental sem vistoria presencial em muitos casos, e tem custo significativamente menor. Escolher CLCB quando o imóvel exige AVCB gera rejeição imediata do processo no protocolo.',
  h2r_h:'Por que o enquadramento incorreto é um problema grave',
  h2r_i:'Errar o tipo de documento gera rejeição do processo, perda de tempo e dinheiro. Veja os 6 cenários de erro mais comuns.',
  h2r_itens:[
    {titulo:'Processo rejeitado no protocolo',desc:'Se o enquadramento CLCB for indevido, o processo é rejeitado antes de entrar na fila de análise. Todo o investimento em documentação é perdido.'},
    {titulo:'AVCB desnecessário aumenta custo',desc:'Protocolar AVCB para imóvel que se enquadra em CLCB significa pagar mais e esperar mais. O CLCB pode ser concedido em 30–45 dias vs. 60–90 para AVCB.'},
    {titulo:'Sistemas instalados incorretos',desc:'Imóvel enquadrado errado pode ter sistemas instalados acima ou abaixo do exigido, gerando reprovação na vistoria ou gasto desnecessário em obras.'},
    {titulo:'Comunique-se por enquadramento',desc:'O CBPMESP emite Comunique-se quando identifica enquadramento incorreto, suspendendo a análise por 30–60 dias até o processo ser corrigido.'},
    {titulo:'Alvará incompatível com documento',desc:'A Prefeitura de SP valida o tipo de documento contra o uso declarado no alvará. Divergência gera notificação e exigência de adequação.'},
    {titulo:'Problemas na renovação',desc:'Mudar de CLCB para AVCB na renovação (por ampliação ou mudança de uso) sem planejamento prévio gera atrasos significativos e pode deixar o imóvel irregular.'},
  ],
  h2d_h:'Critérios exatos de enquadramento conforme Decreto 56.819/2011',
  h2d_b1:'O enquadramento entre AVCB e CLCB depende de três variáveis principais: área construída total, grupo e divisão de ocupação conforme a Tabela A do Decreto 56.819/2011, e características específicas que podem elevar o risco independente da área (sistemas instalados, capacidade de público, altura da edificação).',
  h2d_al:'Área isolada não define o enquadramento. O uso e o risco também contam.',
  h2d_itens:[
    {titulo:'CLCB: imóveis até 750m² e baixo risco',desc:'Escritórios, consultórios sem internação, lojas de varejo, salões de beleza, academias pequenas, padarias e atividades similares de baixo risco de incêndio. Processo simplificado, análise documental, prazo de 30–45 dias.'},
    {titulo:'AVCB: obrigatório acima de 750m²',desc:'Qualquer edificação com área total acima de 750m² exige AVCB, independente do tipo de ocupação. Condomínios, galpões, supermercados e escritórios corporativos entram nessa categoria.'},
    {titulo:'AVCB por risco: independe da área',desc:'Casas noturnas, hospitais, hotéis, locais de reunião de público acima de 50 pessoas, postos de combustível e imóveis com armazenamento de inflamáveis exigem AVCB independente da área.'},
    {titulo:'AVCB por sistemas instalados',desc:'Imóvel com sistema de sprinkler, hidrante pressurizado ou alarme de detecção instalado exige AVCB mesmo que a área seja inferior a 750m². O sistema define o enquadramento.'},
  ],
  h2d_cl:'A DRD2 realiza o enquadramento correto gratuitamente: análise da área, uso, sistemas e ocupação conforme a Tabela A do Decreto 56.819/2011. Erro de enquadramento não acontece.',
  faqs:[
    {question:'Qual a diferença de custo entre AVCB e CLCB?',answer:'O CLCB é significativamente mais barato: custos típicos de R$ 3.000 a R$ 8.000 incluindo projeto e taxas. O AVCB completo varia de R$ 8.000 a R$ 80.000+ dependendo da área, complexidade dos sistemas e obras de adequação necessárias. A diferença de prazo também é relevante: CLCB em 30–45 dias vs. AVCB em 60–150 dias.'},
    {question:'Meu imóvel mudou de uso — preciso mudar de CLCB para AVCB?',answer:'Depende. Se o novo uso eleva o risco ou a área foi ampliada acima de 750m², a migração para AVCB é obrigatória. Operar com CLCB quando o imóvel exige AVCB é irregularidade que pode gerar embargo. A DRD2 avalia a necessidade de migração gratuitamente.'},
    {question:'CLCB e AVCB têm o mesmo prazo de validade?',answer:'Sim. Ambos têm prazo de validade definido pelo CBPMESP, geralmente de 1 a 5 anos conforme o tipo de ocupação. A renovação deve ser iniciada com pelo menos 90 dias de antecedência do vencimento.'},
    {question:'Posso ter CLCB para parte do imóvel e AVCB para outra?',answer:'Não. O documento é por edificação/endereço. Se o imóvel como um todo se enquadra em AVCB — seja por área, uso ou sistema instalado — toda a edificação precisa de AVCB. Não é possível ter documentos diferentes para setores do mesmo imóvel.'},
    {question:'O CLCB é aceito para renovar alvará de funcionamento?',answer:'Sim, para as ocupações que se enquadram em CLCB. A Prefeitura de SP aceita CLCB para as atividades compatíveis com o documento. O sistema da Prefeitura já identifica automaticamente qual tipo de documento o Corpo de Bombeiros deve emitir para cada CNAE declarado.'},
  ],
  links:[
    {href:'/documentos-necessarios-avcb-sao-paulo',label:'Documentos para AVCB em SP'},
    {href:'/prazo-renovacao-avcb-sao-paulo',label:'Prazo de Renovação do AVCB'},
    {href:'/avcb-vencido-o-que-fazer',label:'AVCB Vencido — O Que Fazer?'},
    {href:'/avcb-sao-paulo',label:'AVCB em São Paulo — Guia Completo'},
    {href:'/vistoria-corpo-de-bombeiros-o-que-esperar',label:'Vistoria dos Bombeiros — Checklist'},
  ],
  cta_h:'AVCB OU CLCB? DIAGNÓSTICO GRATUITO COM A DRD2',
  cta_b:'Enquadramento correto, processo sem rejeição e custo fechado antes do início.',
},
];

function makePage(data) {
  const d = gen(data);
  return `import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = ${JSON.stringify(d, null, 2)};

export const metadata = {
  title: data.meta.title,
  description: data.meta.description,
  alternates: { canonical: data.slug },
};

export default function Page() {
  return <UniversalSeoPage data={data} />;
}
`;
}

defs.forEach(d => {
  const file = path.join('src','app',d.dir,'page.tsx');
  fs.writeFileSync(file, makePage(d), 'utf8');
  console.log('UPDATED: ' + d.dir);
});
console.log('\nDone: ' + defs.length + ' pages');
