import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/laudo-alarme-incendio-hotel-sao-paulo",
  meta: {
    title: "Laudo de Alarme de Incêndio para Hotel em SP | DRD2 Engenharia",
    description: "Laudo técnico de alarme de incêndio para hotéis e pousadas em São Paulo. IT 18/2019, monitoramento 24h, cobertura por UH e áreas comuns. ART CREA-SP inclusa. DRD2 Engenharia.",
  },
  eyebrow: "IT 18 — Alarme de Incêndio para Hotel",
  h1Line1: "Laudo de Alarme de Incêndio",
  h1Line2: "para Hotel e Pousada em São Paulo",
  heroBg: "/images/blog/blog_hero_casa_repouso_avcb.webp",
  introP1: "Hotéis têm a exigência mais rigorosa de todas as ocupações em relação ao alarme de incêndio: monitoramento 24 horas com operador capacitado para acionar a evacuação. O hóspede que dorme no quarto às 3h da manhã precisa ser alertado e evacuado em tempo hábil — o que exige que o sistema funcione continuamente, que a sinalização luminosa nas UHs esteja ativa e que alguém na recepção seja treinado para operar o painel.",
  introP2: "A DRD2 emite laudo técnico do alarme para hotéis e pousadas conforme a IT 18/2019 (Grupo H-1 e H-3), com vistoria em todas as unidades habitacionais, corredores, recepção, restaurante interno e áreas de serviço. Verificamos o atestado de monitoramento e a capacitação do operador — dois pontos que o CBPMESP verifica na vistoria e que frequentemente causam reprovação.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Laudo de Alarme — Hotel SP" },
  ],
  occupationType: "hotel",
  h2_principal: {
    heading: "Exigências do alarme de incêndio em hotéis pelo CBPMESP",
    body: "Hotéis são classificados no Grupo H pelo Decreto 56.819/2011. A IT 18/2019 exige para esse grupo: detector em cada UH (quarto), nos corredores de acesso às UHs, no lobby, no restaurante interno, nas áreas de serviço e na lavanderia. A central de alarme deve ficar em local de monitoramento permanente — a recepção do hotel é o ponto aceito, desde que haja operador treinado 24h.",
    body2: "Hotéis com mais de 4 andares precisam de sistema com enunciadores de voz (mensagem gravada de evacuação) além da sirene — para que hóspedes estrangeiros ou com deficiência auditiva parcial possam entender a instrução de abandono. Esse requisito é frequentemente ignorado em hotéis mais antigos e gera Comunique-se na renovação.",
  },
  h2_riscos: {
    heading: "Não-conformes mais comuns em hotéis vistoriados pela DRD2",
    intro: "Esses são os problemas que mais causam reprovação no AVCB de hotéis em São Paulo:",
    itens: [
      {
        titulo: "Monitoramento 24h sem documentação",
        desc: "O CBPMESP exige atestado de monitoramento contínuo — não basta o operador da recepção existir. É preciso comprovar que ele foi treinado e que há cobertura nos três turnos, inclusive nos fins de semana e feriados.",
      },
      {
        titulo: "UH sem detector individual",
        desc: "Cada quarto de hotel precisa de detector individual — e a vistoria do CBPMESP verifica quarto por quarto. Hotel que instalou detectores apenas nos corredores sem cobrir os quartos está em não-conformidade.",
      },
      {
        titulo: "Detector no banheiro da UH inoperante",
        desc: "Detectores instalados em banheiros com chuveiro ou banheira acumulam umidade e perdem sensibilidade rapidamente. Detector com umidade na câmara de detecção passa a não funcionar corretamente.",
      },
      {
        titulo: "Ausência de enunciador de voz para hotéis altos",
        desc: "Hotéis com mais de 4 andares precisam de sistema de sonorização com mensagem de evacuação gravada. Sistema apenas com sirene não atende a norma nesse caso.",
      },
      {
        titulo: "Restaurante interno com detector de fumaça na cozinha",
        desc: "O restaurante interno do hotel tem as mesmas exigências de qualquer cozinha industrial: detector termovelocimétrico na área de cocção, não detector de fumaça.",
      },
      {
        titulo: "Central sem autonomia de 24h para hotel",
        desc: "A IT 18 exige 24h de autonomia para ocupações do Grupo H. Hotéis com falta de energia frequente precisam verificar regularmente a capacidade real das baterias da central.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 vistoria e emite o laudo para hotéis",
    etapas: [
      {
        numero: "01",
        titulo: "Vistoria por UH e por corredor",
        desc: "Engenheiro vistoria amostragem das UHs (todos os tipos de quarto) e todos os corredores de acesso — verificando tipo de detector, instalação e sinal de alcance da central.",
      },
      {
        numero: "02",
        titulo: "Verificação do monitoramento 24h",
        desc: "Confirmamos a existência de operador treinado em todos os turnos e solicitamos o atestado de monitoramento. Se não houver, orientamos a regularização antes da emissão do laudo.",
      },
      {
        numero: "03",
        titulo: "Teste funcional da central e enunciadores",
        desc: "Central é testada em modo noturno (com hóspedes simulados): verificamos se o alarme dispara nas UHs, se a mensagem de voz é audível com a porta fechada e se a sinalização luminosa funciona.",
      },
      {
        numero: "04",
        titulo: "Checklist de restaurante e lavanderia",
        desc: "Áreas de serviço recebem verificação específica: restaurante (cozinha industrial), lavanderia (calor elevado) e casa de máquinas têm exigências diferentes das UHs.",
      },
      {
        numero: "05",
        titulo: "Laudo com ART e planta por pavimento",
        desc: "Laudo técnico com ART CREA-SP, planta por pavimento com localização dos dispositivos, resultado dos testes e declaração de conformidade do monitoramento 24h.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Documentação de alarme para o AVCB do hotel",
    body1: "O processo de AVCB ou renovação de hotéis e pousadas exige os seguintes documentos do sistema de alarme:",
    alerta: "Hotel sem AVCB válido não consegue renovar cadastro no Ministério do Turismo nem manter categorização pela SBClass. O laudo de alarme é parte crítica desse processo.",
    itens: [
      { titulo: "Laudo técnico IT 18/2019 com ART", desc: "Laudo por pavimento com declaração de conformidade das UHs, corredores, recepção e áreas de serviço. ART CREA-SP recolhida inclusa." },
      { titulo: "Atestado de monitoramento 24h", desc: "Documento comprovando que há operador treinado nos três turnos com protocolo de acionamento de evacuação. Assinado pelo responsável do hotel e pelo operador de cada turno." },
      { titulo: "Planta por pavimento com localização dos dispositivos", desc: "Planta de cada andar com marcação das UHs visitoriadas, detectores, sirenes, enunciadores e acionadores manuais — incluindo corredores e escadas." },
      { titulo: "Relatório de manutenção anual", desc: "Manutenção preventiva dos últimos 12 meses com teste de todos os detectores, sirenes e da central — incluindo teste de bateria." },
      { titulo: "Certificado de capacitação do operador", desc: "Comprovante de que o funcionário da recepção ou o segurança noturno foi capacitado para operar o painel de alarme e conduzir a evacuação." },
    ],
    closing: "Hotéis que precisam renovar categorização no Ministério do Turismo têm prazo definido. A DRD2 prioriza esses processos com vistoria em até 24h.",
  },
  h2_quando: {
    heading: "Quando o hotel precisa renovar o laudo de alarme",
    body1: "O laudo de alarme é exigido na renovação do AVCB (geralmente a cada 3 anos para hotéis). Também é exigido quando há reforma que adiciona ou remove UHs, quando a central é substituída e quando o hotel muda de categoria (o que pode alterar os sistemas exigidos).",
    body2: "Hotéis que participam de programas de qualidade como ABNT NBR 6023 ou que são credenciados por operadoras de turismo internacionais frequentemente precisam do laudo de alarme como documentação de auditoria anual.",
  },
  h2_escolher: {
    heading: "Baixa temporada: o momento ideal para regularizar",
    body1: "A vistoria de alarme em hotéis é mais fácil durante a baixa temporada, quando há mais UHs disponíveis para inspeção. A DRD2 recomenda programar a renovação do AVCB — e o laudo de alarme — na baixa temporada para evitar impacto operacional.",
    body2: "Hotéis que realizam manutenção anual do alarme raramente têm surpresas na renovação do AVCB. O custo da manutenção preventiva é uma fração do custo de adequação emergencial para aprovação na vistoria.",
  },
  h2_cobertura: {
    heading: "Atendimento para hotéis em SP, Santos e Grande SP",
    body1: "A DRD2 atende hotéis, pousadas, apart-hotéis e hostels em toda São Paulo Capital, Santos e praias do litoral paulista, e nas principais cidades da Grande SP.",
    body2: "Para redes hoteleiras com múltiplas unidades, oferecemos contrato de manutenção e laudo consolidado com relatório por unidade.",
  },
  faqs: [
    {
      question: "O hotel precisa de detector em cada quarto?",
      answer: "Sim. A IT 18/2019 exige detector individual em cada UH (quarto, suíte ou apartamento). Detector apenas no corredor não atende a norma para ocupações do Grupo H.",
    },
    {
      question: "O que é o enunciador de voz e quando é obrigatório?",
      answer: "É um sistema de sonorização com mensagem de evacuação gravada — 'atenção, siga as instruções de evacuação'. É obrigatório para hotéis com mais de 4 andares. Substitui ou complementa a sirene, permitindo instrução verbal durante a evacuação.",
    },
    {
      question: "A pousada pequena (até 10 quartos) tem as mesmas exigências?",
      answer: "Pousadas menores podem se enquadrar no CLCB em vez do AVCB, dependendo da área e do número de pavimentos. Para CLCB, as exigências de alarme são simplificadas. A DRD2 define o enquadramento correto na vistoria gratuita.",
    },
    {
      question: "Como comprovar o monitoramento 24h para o CBPMESP?",
      answer: "O CBPMESP aceita declaração assinada pelo responsável do hotel descrevendo a escala de operadores e o treinamento realizado. Para hotéis com sistema de monitoramento remoto por empresa terceirizada, o contrato de monitoramento também serve.",
    },
    {
      question: "O laudo de alarme serve para o cadastro no Ministério do Turismo?",
      answer: "Sim. O laudo técnico com ART CREA-SP emitido pela DRD2 é aceito tanto pelo CBPMESP quanto pelos órgãos de turismo como documentação de conformidade do sistema de alarme.",
    },
  ],
  linksInternos: [
    { href: "/avcb-hoteis-pousadas-sao-paulo", label: "AVCB para Hotel e Pousada SP" },
    { href: "/alvara-bombeiro-pousada-sao-paulo", label: "Alvará Bombeiro — Pousada" },
    { href: "/laudo-alarme-incendio-sao-paulo", label: "Laudo de Alarme de Incêndio SP" },
    { href: "/laudo-sprinkler-hotel-sao-paulo", label: "Laudo de Sprinkler — Hotel" },
    { href: "/empresa-avcb-sao-paulo", label: "Empresa de AVCB em SP" },
    { href: "/renovacao-avcb", label: "Renovação de AVCB em SP" },
  ],
  ctaFinal: {
    heading: "Laudo de alarme para o seu hotel — vistoria por UH",
    body: "Engenheiro especialista em hotéis vistoria todas as UHs e áreas comuns, verifica o monitoramento 24h e emite laudo com ART inclusa.",
    cta: "Solicitar laudo de alarme para meu hotel",
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
