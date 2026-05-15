const fs = require('fs'), path = require('path');

function mp(d) {
  return `import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";
const data: UniversalPageData = ${JSON.stringify(d, null, 2)};
export const metadata = { title: data.meta.title, description: data.meta.description, alternates: { canonical: data.slug } };
export default function Page() { return <UniversalSeoPage data={data} />; }
`;
}

function genP4(tipo, ocu) {
  const isH = tipo === 'hidrante';
  const s = isH ? 'Hidrantes' : 'Sprinkler';
  const sm = isH ? 'hidrantes' : 'sprinkler';
  const it = isH ? 'IT-22/CBPMESP e NBR 13714' : 'IT-23/CBPMESP e NBR 10897';
  const dir = `sistema-de-${sm}-para-${ocu.key}-sao-paulo`;
  const slug = `/${dir}`;
  const n = ocu.nome;

  return {
    dir, slug,
    meta: {
      title: `Sistema de ${s} para ${n} em SP — ${it} | DRD2 Engenharia`,
      description: `A DRD2 projeta, instala e certifica sistemas de ${sm} para ${n.toLowerCase()} em SP conforme ${it}. Projeto com ART, laudo para AVCB e manutenção preventiva. Diagnóstico gratuito.`,
    },
    eyebrow: `${it} — ${n}s em São Paulo`,
    h1Line1: `Sistema de ${s} para ${n}`,
    h1Line2: `em São Paulo — Projeto, Instalação e Laudo`,
    heroBg: '/images/banner-hero.webp',
    introP1: `${n}s exigem sistema de ${sm} pelo risco de ${ocu.risco}. A DRD2 projeta, instala e certifica sistemas de ${sm} para ${n.toLowerCase()} em São Paulo conforme ${it}, com ART CREA-SP e laudo completo para AVCB.`,
    introP2: `Processo completo: levantamento técnico, projeto hidráulico com cálculo de densidade por setor de risco, instalação por equipe própria, teste de pressão e emissão de laudo com ART. Diagnóstico técnico gratuito.`,
    breadcrumbs: [{label:'Home',href:'/'},{label:s,href:`/${sm === 'hidrantes' ? 'hidrantes' : 'sprinklers'}`},{label:`${s} para ${n}`}],
    occupationType: n.toLowerCase(),
    h2_principal: {
      heading: `Por que ${n}s são obrigados a ter sistema de ${sm} em SP?`,
      body: `${n}s possuem ${ocu.risco}, o que os classifica como ocupação que exige sistema de ${sm} conforme ${it} do CBPMESP. A obrigatoriedade depende da área construída, capacidade de público e classificação de risco da atividade. A ausência ou mau funcionamento do sistema pode causar reprovação na vistoria, impossibilidade de renovação do AVCB e, em caso de sinistro, responsabilidade civil e criminal do proprietário ou responsável legal pelo estabelecimento.`,
      body2: `Na prática, muitos ${n.toLowerCase()}s em São Paulo possuem o sistema instalado desde a construção ou adaptação do imóvel, mas negligenciam a manutenção obrigatória. Bicos obstruídos, pressão insuficiente, mangueiras vencidas e bombas sem calibração são as causas mais comuns de reprovação na vistoria do Corpo de Bombeiros — e essas falhas são totalmente evitáveis com manutenção preventiva semestral e laudo anual com ART.`,
    },
    h2_riscos: {
      heading: `Consequências da não-conformidade do sistema de ${sm} em ${n}`,
      intro: `Esses 6 problemas são os mais frequentes em ${n.toLowerCase()}s autuados pelo Corpo de Bombeiros em São Paulo. Todos são evitáveis.`,
      itens: [
        {titulo:'Reprovação na vistoria do CBPMESP',desc:`Sistema de ${sm} não conforme é causa direta de reprovação na vistoria. O CBPMESP emite Comunique-se e suspende o processo de AVCB até que todas as não-conformidades sejam corrigidas.`},
        {titulo:'Comunique-se que atrasa o AVCB em 60 dias',desc:`Cada Comunique-se relacionado ao ${sm} suspende o processo por 30 a 60 dias. ${n}s com processos urgentes sofrem o maior impacto desse atraso.`},
        {titulo:'Interdição por risco técnico',desc:`Sistema de ${sm} inoperante pode ser caracterizado como risco iminente pelo vistoriador, gerando embargo imediato do ${n.toLowerCase()} sem aviso prévio.`},
        {titulo:'Seguro predial invalidado',desc:'Em sinistro com sistema inoperante ou fora da conformidade, a seguradora nega o pagamento com base na cláusula de manutenção de sistemas de segurança.'},
        {titulo:'Responsabilidade do responsável legal',desc:`O responsável legal pelo ${n.toLowerCase()} responde civil e criminalmente por omissão na manutenção dos sistemas de segurança em caso de sinistro com vítimas.`},
        {titulo:'Multa por sistema não mantido',desc:`A ausência de laudo anual com ART para o sistema de ${sm} pode gerar autuação específica com multa de R$ 500 a R$ 50.000 conforme a Tabela do CBPMESP.`},
      ],
    },
    h2_detalhes: {
      heading: `O que a ${it} exige para o sistema de ${sm} em ${n}s`,
      body1: `A norma estabelece requisitos técnicos específicos para cada tipo de ocupação. Para ${n.toLowerCase()}s, os parâmetros de pressão, densidade de descarga e cobertura de bicos são definidos conforme a classificação de risco da atividade e a área de cada setor.`,
      alerta: `Qualquer alteração no sistema sem atualização do projeto aprovado gera Comunique-se na próxima vistoria.`,
      itens: ocu.itens,
      closing: `A DRD2 realiza levantamento técnico gratuito do sistema instalado, identifica todas as não-conformidades com ${it} e apresenta proposta de adequação ou instalação com orçamento fechado antes do início.`,
    },
    h2_processo: {
      heading: `Como funciona o processo de certificação do sistema de ${sm} para ${n}`,
      etapas: [
        {numero:'ETAPA 01',titulo:'Levantamento técnico gratuito',desc:`Vistoria do sistema de ${sm} instalado: pressão, bicos, válvulas, bomba e tubulação. Comparamos com ${it} e identificamos todas as não-conformidades.`},
        {numero:'ETAPA 02',titulo:'Projeto hidráulico com ART',desc:`Elaboração do projeto de ${sm} com cálculo de densidade de descarga por setor de risco, memorial descritivo e ART CREA-SP recolhida.`},
        {numero:'ETAPA 03',titulo:'Adequação ou instalação',desc:`Execução das obras necessárias: substituição de bicos, ajuste de pressão, instalação de bomba jockey, correção de tubulação. Equipe própria, sem terceiros.`},
        {numero:'ETAPA 04',titulo:'Teste de pressão e vazão',desc:`Teste completo do sistema: pressão estática e dinâmica nos pontos mais desfavoráveis, vazão por setor e funcionamento do acionamento automático da bomba.`},
        {numero:'ETAPA 05',titulo:'Laudo técnico com ART',desc:`Emissão de laudo técnico com relatório fotográfico, resultados dos testes e ART CREA-SP recolhida — pronto para protocolo no CBPMESP.`},
        {numero:'ETAPA 06',titulo:'Manutenção preventiva semestral',desc:`Contrato de manutenção preventiva semestral para manter o sistema sempre em conformidade com ${it} e o AVCB renovável sem surpresas.`},
      ],
    },
    h2_quando: {
      heading: `Quando revisar o sistema de ${sm} do ${n.toLowerCase()}?`,
      body1: `A manutenção preventiva semestral é obrigatória conforme ${it}. O laudo técnico com ART deve ser emitido anualmente para renovação do AVCB. Além da manutenção programada, revisão imediata é necessária após qualquer sinistro, reforma, mudança de layout ou substituição de bicos.`,
      body2: `Situações que exigem revisão urgente: Comunique-se do CBPMESP específico sobre o sistema de ${sm}, reprovação na vistoria por pressão insuficiente, auditoria de seguradora exigindo laudo, ou qualquer alteração no layout do ${n.toLowerCase()} que afete a cobertura dos bicos.`,
    },
    h2_escolher: {
      heading: `Por que a DRD2 para o sistema de ${sm} do seu ${n.toLowerCase()}?`,
      body1: `A DRD2 tem experiência em sistemas de ${sm} para todos os tipos de ocupação em São Paulo — de restaurantes a hospitais, de academias a galpões industriais. Cada projeto é elaborado por engenheiro especialista com ART CREA-SP ativa e conhecimento das especificidades de cada tipo de ${n.toLowerCase()}.`,
      body2: `Processo completo sem terceiros: levantamento, projeto, execução, teste e laudo — tudo com a DRD2. Isso garante responsabilidade técnica unificada, prazo controlado e documentação aceita pelo CBPMESP sem questionamentos.`,
    },
    h2_cobertura: {
      heading: `Sistemas de ${sm} para ${n} em toda a Grande São Paulo`,
      body1: `A DRD2 atende ${n.toLowerCase()}s em toda a capital e Grande SP: Guarulhos, ABC, Osasco, Campinas, Santos e municípios da região metropolitana.`,
      body2: `Para ${n.toLowerCase()}s fora da Grande SP, realizamos levantamento técnico com agenda específica. O diagnóstico inicial pode ser feito por videochamada para estimativa de prazo e custo.`,
    },
    faqs: [
      {question:`${n} é obrigado a ter sistema de ${sm} em SP?`,answer:`Sim. ${n}s com área relevante ou ocupação de risco são obrigados a possuir sistema de ${sm} conforme ${it} do CBPMESP. A obrigatoriedade depende da área construída, capacidade de público e classificação de risco. A DRD2 faz o enquadramento correto gratuitamente.`},
      {question:`Com que frequência o sistema de ${sm} do ${n.toLowerCase()} deve ser revisado?`,answer:`A manutenção preventiva deve ser semestral, com teste completo de pressão e vazão anual. O laudo técnico assinado por engenheiro com ART CREA-SP é obrigatório para renovação do AVCB. A DRD2 oferece contrato de manutenção preventiva com visitas programadas.`},
      {question:`O laudo de ${sm} responde ao Comunique-se do Corpo de Bombeiros?`,answer:`Sim. Quando o Comunique-se é específico sobre o sistema de ${sm}, o laudo técnico com ART e os resultados dos testes é o documento para resposta. A DRD2 prepara o laudo já no formato correto para protocolo no CBPMESP.`},
      {question:`Posso substituir bicos de ${sm} sem atualizar o projeto?`,answer:`Não. Cada substituição de bico deve utilizar modelo com o mesmo coeficiente k e temperatura especificados no projeto aprovado. Qualquer alteração exige projeto as-built atualizado com ART. Bicos substituídos incorretamente são causa frequente de Comunique-se.`},
      {question:`A DRD2 faz projeto e instalação de ${sm} para ${n.toLowerCase()} em toda SP?`,answer:`Sim. A DRD2 atende toda a Grande São Paulo com equipe técnica própria para projetos, instalações novas, adequações de sistemas existentes e manutenção preventiva de ${sm} para ${n.toLowerCase()}s de qualquer porte.`},
    ],
    linksInternos: [
      {href:'/avcb-sao-paulo',label:'AVCB em São Paulo'},
      {href:`/${sm === 'hidrantes' ? 'hidrantes' : 'sprinklers'}`,label:`Sistema de ${s} em SP`},
      {href:'/vistoria-corpo-de-bombeiros-o-que-esperar',label:'Vistoria dos Bombeiros — Checklist'},
      {href:'/laudo-sistema-hidrantes-sao-paulo',label:'Laudo de Hidrantes com ART'},
      {href:'/documentos-necessarios-avcb-sao-paulo',label:'Documentos para AVCB'},
    ],
    ctaFinal: {
      heading: `${s.toUpperCase()} PARA ${n.toUpperCase()} — PROJETO + INSTALAÇÃO + LAUDO`,
      body: `Diagnóstico técnico gratuito. Orçamento fechado. Processo completo conforme ${it}.`,
      cta: 'Solicitar Diagnóstico Gratuito Agora',
    },
  };
}

const ocups = [
  {
    key:'restaurante', nome:'Restaurante',
    risco:'alta carga de incêndio em cozinha industrial e grande público simultâneo',
    itens:[
      {titulo:'Densidade de descarga por setor',desc:'Cozinha industrial e salão têm classificações de risco diferentes — a densidade de descarga do sprinkler deve ser calculada por setor conforme a IT-23.'},
      {titulo:'Bicos específicos para cozinha',desc:'A cozinha industrial exige bicos de supressão de gordura com coeficiente k e temperatura de acionamento específicos, diferentes dos bicos do salão.'},
      {titulo:'Compatibilidade com sistema de exaustão',desc:'O sistema de sprinkler da cozinha deve ser projetado em compatibilidade com o sistema de exaustão, evitando acionamento indevido por vapor.'},
      {titulo:'Reservatório e bomba dimensionados',desc:'O reservatório deve ser calculado para a área de operação mais desfavorável do restaurante, com bomba principal e reserva dimensionadas conforme NBR 10897.'},
    ],
  },
  {
    key:'escola', nome:'Escola',
    risco:'alta densidade de ocupantes em áreas fechadas e público vulnerável',
    itens:[
      {titulo:'Cobertura total por setor',desc:'Salas de aula, corredores, biblioteca, laboratórios e refeitório têm densidades de descarga específicas — o projeto deve cobrir cada setor conforme sua classificação.'},
      {titulo:'Bicos em salas com teto alto',desc:'Salas com pé-direito acima de 3,6m exigem bicos com coeficiente k maior para garantir a densidade mínima de descarga na área coberta.'},
      {titulo:'Integração com sistema de alarme',desc:'O sprinkler da escola deve ser integrado ao sistema de alarme — o acionamento de um bico deve acionar automaticamente o alarme de evacuação do edificio.'},
      {titulo:'Válvulas de controle acessíveis',desc:'Todas as válvulas de bloqueio devem estar acessíveis e sinalizadas, com travas de segurança para evitar fechamento acidental por alunos.'},
    ],
  },
  {
    key:'academia', nome:'Academia',
    risco:'alta densidade de público simultâneo e equipamentos elétricos de alto consumo',
    itens:[
      {titulo:'Cálculo por área de equipamentos',desc:'Áreas com equipamentos de musculação, spinning e cardio têm cargas de incêndio diferentes — o projeto deve sectorizar e calcular cada área separadamente.'},
      {titulo:'Bicos em áreas de vestiário',desc:'Vestiários com armários de plástico ou madeira elevam a carga de incêndio — exigem densidade de descarga maior e espaçamento de bicos reduzido.'},
      {titulo:'Proteção de depósito de materiais',desc:'Depósitos de materiais esportivos (colchões, bolas, cordas) são áreas de alto risco dentro da academia — exigem sprinkler com densidade específica.'},
      {titulo:'Bomba com acionamento automático',desc:'A bomba de incêndio deve ter acionamento automático por pressostato calibrado e reserva com partida manual, testadas mensalmente conforme a norma.'},
    ],
  },
  {
    key:'pousada', nome:'Pousada',
    risco:'hóspedes dormindo sem ciência de risco de incêndio e evacuação noturna',
    itens:[
      {titulo:'Sprinkler em todos os quartos',desc:'Pousadas com mais de 10 unidades habitacionais exigem sprinkler em todos os quartos — não apenas nas áreas comuns. Cada quarto precisa de pelo menos um bico.'},
      {titulo:'Temperatura de acionamento',desc:'Bicos em quartos climatizados devem ter temperatura de acionamento calibrada para não disparar por calor ambiente excessivo em dias quentes.'},
      {titulo:'Integração com alarme noturno',desc:'O acionamento do sprinkler deve acionar automaticamente o alarme sonoro em todo o estabelecimento, garantindo evacuação mesmo com hóspedes dormindo.'},
      {titulo:'Reservatório com autonomia',desc:'O reservatório deve garantir autonomia mínima de 30 minutos de operação do sistema na área de maior risco — calculado conforme NBR 10897.'},
    ],
  },
];

let n = 0;
['hidrante','sprinkler'].forEach(tipo => {
  ocups.forEach(ocu => {
    const d = genP4(tipo, ocu);
    const file = path.join('src','app',d.dir,'page.tsx');
    fs.writeFileSync(file, mp(d), 'utf8');
    console.log('UPDATED: ' + d.dir);
    n++;
  });
});
console.log('\nDone: ' + n + ' P4 pages');
