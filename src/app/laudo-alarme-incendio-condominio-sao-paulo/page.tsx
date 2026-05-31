import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/laudo-alarme-incendio-condominio-sao-paulo",
  meta: {
    title: "Laudo de Alarme de Incêndio para Condomínio em SP | DRD2 Engenharia",
    description: "Laudo técnico de alarme de incêndio para condomínios em São Paulo. IT 18/2019, cobertura por pavimento, detectores de garagem, ART CREA-SP inclusa. DRD2 Engenharia.",
  },
  eyebrow: "IT 18 — Alarme de Incêndio para Condomínio",
  h1Line1: "Laudo de Alarme de Incêndio",
  h1Line2: "para Condomínio em São Paulo",
  heroBg: "/images/blog/blog_hero_avcb_condominio.webp",
  introP1: "O alarme de incêndio em condomínios residenciais tem uma particularidade que a maioria dos síndicos desconhece: a garagem exige detector de monóxido de carbono (CO), não detector de fumaça. Condomínios que instalaram detectores de fumaça na garagem estão em não-conformidade com a IT 18/2019 e terão o AVCB reprovado na vistoria.",
  introP2: "A DRD2 emite laudo técnico do sistema de alarme de condomínios com ART CREA-SP, vistoria presencial em todos os pavimentos e checklist detalhado por zona — hall, garagem, casa de máquinas, salão de festas e áreas comuns. Para condomínios com AVCB vencendo, o laudo é parte obrigatória do processo de renovação.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Laudo de Alarme — Condomínio SP" },
  ],
  occupationType: "condomínio",
  h2_principal: {
    heading: "Exigências específicas do alarme em condomínios residenciais",
    body: "A IT 18/2019 classifica condomínios residenciais no Grupo A. O sistema de alarme precisa cobrir todas as áreas comuns: halls de pavimento, corredores, garagem subterrânea, casa de máquinas, casa de gás, salão de festas, academia e guarita. As unidades privativas (apartamentos) não são obrigadas a ter detector individual, mas o sistema de alarme coletivo deve ser audível em toda a edificação.",
    body2: "Condomínios com mais de 10 andares precisam de sistema zonado — cada pavimento ou grupo de pavimentos em zona separada na central, permitindo identificar o andar de origem do alarme sem evacuar o prédio inteiro. A central deve ficar na portaria ou em local de acesso 24h, com sirene e painel indicador de zona.",
  },
  h2_riscos: {
    heading: "Não-conformes mais comuns em condomínios de SP",
    intro: "Esses são os problemas encontrados com mais frequência pela DRD2 em vistorias de condomínios:",
    itens: [
      {
        titulo: "Detector de fumaça na garagem",
        desc: "Garagens ventiladas com veículos a combustão produzem CO, não fumaça visível. Detector de fumaça na garagem não detecta o perigo real e gera falso alarme com poeira. IT 18 exige detector de CO nesse ambiente.",
      },
      {
        titulo: "Central sem capacidade para todos os pavimentos",
        desc: "Condomínios que cresceram — ampliações, novos andares — frequentemente têm central subdimensionada. Central sem zonas suficientes para cobrir todos os pavimentos é não-conforme.",
      },
      {
        titulo: "Bateria sem teste documentado",
        desc: "A IT 18 exige 24h de autonomia. Baterias de centrais com mais de 3 anos perdem capacidade. Sem teste de descarga documentado, o laudo não pode atestar a conformidade.",
      },
      {
        titulo: "Sistema não audível em todos os apartamentos",
        desc: "Síndicos que reduziram o volume da sirene para evitar reclamações de moradores criaram sistema sub-dimensionado. A norma exige nível sonoro mínimo de 15 dB acima do ruído ambiente.",
      },
      {
        titulo: "Salão de festas e academia sem cobertura",
        desc: "Áreas comuns construídas após o sistema original frequentemente ficam descobertas. Cada área comum é obrigada a ter cobertura — adições posteriores precisam ser integradas ao sistema.",
      },
      {
        titulo: "Detectores sem manutenção há mais de 12 meses",
        desc: "A IT 18 exige manutenção anual. Detectores fotoeléctricos acumulam poeira nos orifícios e passam a não detectar corretamente. Sem manutenção documentada, o laudo técnico não pode ser emitido.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 vistoria e emite o laudo para condomínios",
    etapas: [
      {
        numero: "01",
        titulo: "Vistoria por pavimento",
        desc: "Engenheiro percorre todos os andares — de garagem ao cobertura — registrando cada ponto de detector, sirene e acionador manual com localização e número de série.",
      },
      {
        numero: "02",
        titulo: "Teste funcional da central",
        desc: "A central é testada em modo de bateria para verificar autonomia de 24h. Cada zona é ativada individualmente para confirmar que o sinal chega na central corretamente.",
      },
      {
        numero: "03",
        titulo: "Verificação do tipo de detector por ambiente",
        desc: "Confirmamos que cada ambiente tem o tipo correto: CO na garagem, óptico ou termovelocimétrico nos halls, fotoelétrico nas áreas comuns. Tipos incorretos são registrados como não-conformes.",
      },
      {
        numero: "04",
        titulo: "Levantamento de não-conformes e orçamento de ajuste",
        desc: "Listamos cada não-conforme com custo estimado de correção. O síndico decide o que ajustar antes de emitir o laudo definitivo.",
      },
      {
        numero: "05",
        titulo: "Emissão do laudo com ART e planta atualizada",
        desc: "Laudo técnico com memorial descritivo, planta baixa atualizada com localização de todos os dispositivos, ART CREA-SP recolhida e relatório fotográfico por zona.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Documentação do alarme para o processo de AVCB do condomínio",
    body1: "O processo de AVCB ou renovação do condomínio exige os seguintes documentos relativos ao sistema de alarme de incêndio:",
    alerta: "A falta do laudo de alarme é uma das causas mais comuns de Comunique-se em processos de condomínio. Sem o laudo com ART, o CBPMESP não avança para a vistoria.",
    itens: [
      { titulo: "Laudo técnico IT 18/2019 com ART", desc: "Documento que atesta que o sistema está instalado e funcionando conforme a norma. Assinado por engenheiro com ART CREA-SP recolhida." },
      { titulo: "Planta por pavimento com marcação dos dispositivos", desc: "Planta baixa de cada pavimento com localização de detectores, sirenes, acionadores manuais e fiação — indispensável para análise documental no CBPMESP." },
      { titulo: "Relatório de manutenção anual", desc: "Comprovante de manutenção preventiva dos últimos 12 meses, com lista de dispositivos testados e resultado de cada teste. Emitido pela empresa de manutenção com ART ou RRT." },
      { titulo: "Ficha técnica da central de alarme", desc: "Especificação da central: número de zonas, autonomia de bateria, modelo e número de série — para verificação de compatibilidade com o tamanho da edificação." },
      { titulo: "Teste de autonomia de bateria documentado", desc: "Resultado do teste de descarga da bateria da central, comprovando 24h de autonomia. Necessário quando a central tem mais de 3 anos sem troca de bateria." },
    ],
    closing: "O síndico que mantém esses documentos organizados tem o processo de renovação do AVCB muito mais ágil. A DRD2 pode fazer a gestão periódica desses documentos por contrato.",
  },
  h2_quando: {
    heading: "Quando o condomínio precisa do laudo de alarme",
    body1: "O laudo de alarme é exigido em toda renovação do AVCB do condomínio — geralmente a cada 3 anos. Também é exigido quando há reforma que altera a planta do condomínio, quando há substituição da central ou de parte significativa do sistema, e quando o laudo anterior venceu (validade de 12 meses para o relatório de manutenção).",
    body2: "O síndico que deixa para solicitar o laudo próximo da vistoria do CBPMESP frequentemente descobre não-conformes que precisam de correção — o que atrasa o processo inteiro. A DRD2 recomenda vistoria do sistema de alarme com 90 dias de antecedência em relação à renovação do AVCB.",
  },
  h2_escolher: {
    heading: "Manutenção preventiva do alarme no condomínio",
    body1: "Condomínios que mantêm contrato de manutenção anual do alarme raramente têm surpresas na renovação do AVCB. A manutenção preventiva inclui limpeza dos detectores, teste funcional de todas as zonas, verificação da bateria e relatório técnico — exatamente o que o CBPMESP exige.",
    body2: "A DRD2 oferece contrato de manutenção preventiva anual com laudo incluso para condomínios. O valor é significativamente menor que o custo de uma correção emergencial para aprovação do AVCB.",
  },
  h2_cobertura: {
    heading: "Atendimento para condomínios em SP e Grande SP",
    body1: "A DRD2 atende condomínios residenciais e comerciais em toda São Paulo Capital e Grande SP. Para condomínios com múltiplas torres, a vistoria é agendada em blocos para minimizar a interferência na rotina dos moradores.",
    body2: "Emitimos laudos de alarme compatíveis com o processo de AVCB do CBPMESP, com seguradoras e com administradoras de condomínio que exigem documentação técnica específica.",
  },
  faqs: [
    {
      question: "Por que meu condomínio tem detector de fumaça na garagem se isso é errado?",
      answer: "Porque muitos projetos antigos não seguiam a versão atual da IT 18/2019. Projetos aprovados antes de 2012 frequentemente têm detectores de fumaça na garagem. Na renovação atual do AVCB, o CBPMESP exige adequação para detector de CO — o que gera custo de substituição.",
    },
    {
      question: "Quantos detectores o condomínio precisa por andar?",
      answer: "A IT 18 define área máxima de cobertura por detector — em geral 30m² para detector pontual em pé-direito até 3m. A quantidade por andar depende da área e da geometria do corredor. A DRD2 calcula isso na vistoria gratuita.",
    },
    {
      question: "O laudo de alarme tem validade?",
      answer: "O laudo técnico acompanha a validade do AVCB. O relatório de manutenção preventiva, porém, precisa ser renovado anualmente. Na renovação do AVCB, um novo laudo técnico precisa ser emitido com data de vistoria atualizada.",
    },
    {
      question: "O condomínio precisa de monitoramento 24h do alarme?",
      answer: "A IT 18 não exige monitoramento remoto 24h para condomínios residenciais — exige que a central fique em local de acesso permanente (portaria ou zelador 24h). Para condomínios comerciais de grande porte, monitoramento remoto pode ser exigido dependendo da classificação.",
    },
    {
      question: "Quanto custa o laudo de alarme para condomínio?",
      answer: "O valor depende do número de pavimentos, torres e quantidade de dispositivos. A DRD2 apresenta orçamento após vistoria gratuita. O laudo inclui ART recolhida — sem custo adicional por esse item.",
    },
  ],
  linksInternos: [
    { href: "/renovacao-avcb-condominio-sao-paulo", label: "Renovação AVCB Condomínio SP" },
    { href: "/avcb-para-condominio-sao-paulo", label: "AVCB para Condomínio em SP" },
    { href: "/laudo-alarme-incendio-sao-paulo", label: "Laudo de Alarme de Incêndio SP" },
    { href: "/laudo-hidrante-condominio-sao-paulo", label: "Laudo de Hidrante — Condomínio" },
    { href: "/laudo-sprinkler-condominio-sao-paulo", label: "Laudo de Sprinkler — Condomínio" },
    { href: "/empresa-avcb-sao-paulo", label: "Empresa de AVCB em SP" },
  ],
  ctaFinal: {
    heading: "Laudo de alarme para o seu condomínio — vistoria por pavimento",
    body: "Engenheiro do CREA-SP vistoria todos os andares, identifica não-conformes antes da vistoria do CBPMESP e emite laudo com ART inclusa.",
    cta: "Solicitar laudo de alarme para o condomínio",
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
