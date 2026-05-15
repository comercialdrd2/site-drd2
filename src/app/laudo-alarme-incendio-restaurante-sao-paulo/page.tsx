import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/laudo-alarme-incendio-restaurante-sao-paulo",
  meta: {
    title: "Laudo de Alarme de Incêndio para Restaurante em SP | DRD2 Engenharia",
    description: "Laudo técnico do sistema de alarme de incêndio para restaurantes em São Paulo. IT 18/2019, detectores compatíveis com cozinha industrial, ART CREA-SP inclusa. DRD2 Engenharia.",
  },
  eyebrow: "IT 18 — Alarme de Incêndio para Restaurante",
  h1Line1: "Laudo de Alarme de Incêndio",
  h1Line2: "para Restaurante em São Paulo",
  heroBg: "/images/blog/blog_hero_avcb_restaurante.webp",
  introP1: "O laudo de alarme de incêndio para restaurantes em São Paulo tem exigências técnicas diferentes das de um escritório ou condomínio. A cozinha industrial — com vapor, gordura e temperaturas elevadas — é o ponto crítico: detectores convencionais instalados próximos à coifa disparam falsos alarmes constantemente ou, pior, param de funcionar por acúmulo de gordura sem que o responsável perceba.",
  introP2: "A DRD2 emite laudo técnico do sistema de alarme com ART CREA-SP, conforme a IT 18/2019 do CBPMESP, com vistoria presencial e checklist completo de conformidade. Para restaurantes, validamos o tipo de detector por ambiente (iônico, óptico ou termovelocimétrico), a cobertura da área de salão e cozinha e a integração com a central de alarme.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Laudo de Alarme — Restaurante SP" },
  ],
  occupationType: "restaurante",
  h2_principal: {
    heading: "Por que o alarme de incêndio em restaurante tem exigências específicas",
    body: "A IT 18/2019 do CBPMESP classifica restaurantes no Grupo B (serviços) com carga de incêndio média a alta. A presença de cozinha industrial obriga o uso de detectores termovelocimétricos ou detectores de chama na área da coifa — detectores de fumaça convencionais são vedados nessa zona pela própria norma, pois o vapor saturado gera alarmes falsos contínuos que levam à desativação do sistema pelos funcionários.",
    body2: "Além da cozinha, o salão e os banheiros têm exigências de cobertura distintas. A central de alarme deve ter bateria de no mínimo 24h de autonomia, sirene audível em toda a área de atendimento e sinalização luminosa nas saídas de emergência integrada ao painel. O laudo técnico documenta cada um desses pontos — e é esse documento que o CBPMESP exige na vistoria do AVCB.",
  },
  h2_riscos: {
    heading: "Problemas mais comuns no alarme de restaurantes em SP",
    intro: "Esses são os não-conformes mais frequentes encontrados pela DRD2 em vistorias de restaurantes:",
    itens: [
      {
        titulo: "Detector de fumaça na área da coifa",
        desc: "Detector óptico ou iônico instalado sobre a coifa entra em alarme constante com o vapor da cozinha. O CBPMESP exige detector termovelocimétrico nessa zona — o erro de tipo gera Comunique-se imediato na vistoria.",
      },
      {
        titulo: "Gordura nos sensores causando falha silenciosa",
        desc: "Detectores sem manutenção anual acumulam gordura nos orifícios de entrada de ar. O sensor passa a não detectar fumaça mas também não acusa falha — é o pior cenário: o sistema parece funcionar e não funciona.",
      },
      {
        titulo: "Central sem bateria reserva testada",
        desc: "A IT 18 exige 24h de autonomia em bateria. Centrais antigas perdem capacidade de bateria sem aviso. Sem teste documentado, o laudo não pode ser emitido.",
      },
      {
        titulo: "Cobertura insuficiente no salão",
        desc: "Restaurantes que fizeram reformas sem atualizar o projeto do alarme frequentemente têm áreas descobertas. A IT 18 define área máxima por detector — áreas descobertas geram exigência de novos pontos.",
      },
      {
        titulo: "Sirene com volume insuficiente para cozinha ruidosa",
        desc: "Em cozinhas industriais com equipamentos barulhentos, a sirene precisa ter nível de pressão sonora acima do ruído ambiente. Sirenes subdimensionadas não atendem a norma.",
      },
      {
        titulo: "Sistema desabilitado por falsos alarmes não resolvidos",
        desc: "Responsável que desabilita zonas do painel para parar os falsos alarmes cria área sem proteção. O CBPMESP considera qualquer zona desabilitada como sistema inoperante.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 emite o laudo de alarme para seu restaurante",
    etapas: [
      {
        numero: "01",
        titulo: "Vistoria técnica presencial",
        desc: "Engenheiro do CREA-SP visita o restaurante, mapeia todos os ambientes (salão, cozinha, banheiros, despensa, área de lixo) e avalia cada ponto do sistema instalado.",
      },
      {
        numero: "02",
        titulo: "Teste funcional de todos os dispositivos",
        desc: "Testamos cada detector, sirene e ponto de acionamento manual. A central é testada em modo de bateria para verificar autonomia. Registramos em laudo fotográfico.",
      },
      {
        numero: "03",
        titulo: "Verificação de compatibilidade com IT 18",
        desc: "Conferimos tipo de detector por zona, área de cobertura, altura de instalação, tempo de resposta da central e autonomia de bateria conforme a IT 18/2019.",
      },
      {
        numero: "04",
        titulo: "Identificação e correção de não-conformes",
        desc: "Listamos o que precisa ser ajustado (troca de tipo de detector, manutenção de sensores, recarga de bateria) e coordenamos a correção antes de emitir o laudo.",
      },
      {
        numero: "05",
        titulo: "Emissão do laudo com ART CREA-SP",
        desc: "Laudo técnico com ART do engenheiro responsável, memorial descritivo, planta com localização dos dispositivos e relatório fotográfico. Documento aceito pelo CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Documentação exigida pelo CBPMESP para alarme em restaurante",
    body1: "Para aprovação do AVCB, o processo do restaurante precisa incluir os seguintes documentos relativos ao sistema de alarme:",
    alerta: "Laudo sem ART de engenheiro registrado no CREA-SP é automaticamente indeferido pelo CBPMESP. Todo laudo emitido pela DRD2 inclui ART recolhida.",
    itens: [
      { titulo: "Laudo técnico do sistema (IT 18/2019)", desc: "Documento principal com descrição do sistema, resultado dos testes, não-conformes encontrados e declaração de conformidade. Assinado por engenheiro com ART." },
      { titulo: "Planta de localização dos detectores", desc: "Planta baixa do restaurante com marcação de cada detector, sirene, acionador manual e central — conforme escala exigida pelo CBPMESP." },
      { titulo: "ART do responsável técnico (CREA-SP)", desc: "Anotação de Responsabilidade Técnica do engenheiro que assina o laudo, com código de recolhimento e declaração de responsabilidade." },
      { titulo: "Relatório de manutenção anual", desc: "Comprovante de manutenção preventiva do sistema dentro dos últimos 12 meses, com registro dos dispositivos testados e resultado." },
      { titulo: "Certificado de conformidade da central", desc: "Ficha técnica da central de alarme com especificação de zonas, autonomia de bateria e número de série — para centrais sem certificação INMETRO, laudo técnico é obrigatório." },
    ],
    closing: "Não sabe se o seu sistema está completo? A DRD2 faz o checklist completo gratuitamente na vistoria inicial — antes de qualquer orçamento.",
  },
  h2_quando: {
    heading: "Quando o laudo de alarme é exigido do restaurante",
    body1: "O laudo de alarme é exigido em toda renovação ou primeira emissão de AVCB. Para restaurantes com AVCB vencido, o laudo precisa estar atualizado na data da nova vistoria. Para restaurantes que nunca tiveram AVCB, o laudo faz parte do conjunto documental do processo de primeira emissão.",
    body2: "Além do AVCB, o laudo de alarme pode ser exigido pela vigilância sanitária, por seguradoras (condição de cobertura do seguro patrimonial) e por redes de franquias como condição de habilitação da unidade. A DRD2 emite laudo compatível com todas essas exigências.",
  },
  h2_escolher: {
    heading: "Frequência de manutenção do alarme em restaurante",
    body1: "A IT 18/2019 exige manutenção anual documentada do sistema de alarme. Para cozinhas industriais, a DRD2 recomenda inspeção semestral dos detectores próximos à coifa — o acúmulo de gordura nesses pontos específicos é mais rápido e pode comprometer o funcionamento antes da manutenção anual.",
    body2: "Restaurantes que trabalham com frituras pesadas ou churrasqueira a carvão devem considerar limpeza trimestral dos detectores da área de cozinha. O custo de uma limpeza preventiva é uma fração do custo de substituição de um detector danificado por saturação de gordura.",
  },
  h2_cobertura: {
    heading: "Atendimento para restaurantes em São Paulo e Grande SP",
    body1: "A DRD2 atende laudos de alarme para restaurantes em toda São Paulo Capital e nas principais cidades da Grande SP. Vistoria técnica em até 48h — laudo emitido em até 5 dias úteis após a vistoria.",
    body2: "Atendemos desde restaurantes de bairro até redes de franquias com múltiplas unidades. Para redes, oferecemos contrato de manutenção periódica com laudo único por unidade.",
  },
  faqs: [
    {
      question: "Que tipo de detector é obrigatório na cozinha do restaurante?",
      answer: "Na área da coifa e próximo a equipamentos de cocção, a IT 18/2019 exige detector termovelocimétrico ou detector de chama — nunca detector de fumaça óptico ou iônico, que entram em falso alarme com vapor. No salão e banheiros, detectores ópticos são aceitos.",
    },
    {
      question: "O laudo de alarme precisa de ART?",
      answer: "Sim. O CBPMESP exige ART do engenheiro responsável em todos os laudos técnicos de sistemas de incêndio. Laudo sem ART não é aceito no processo de AVCB. A DRD2 inclui a ART no valor do laudo.",
    },
    {
      question: "Meu restaurante tem alarme instalado mas nunca foi vistoriado. Serve?",
      answer: "Não necessariamente. Para o CBPMESP, o que vale é o laudo técnico atualizado com teste funcional documentado — não apenas a existência física do equipamento. A DRD2 vistoria o sistema existente e emite o laudo se estiver conforme, ou lista o que precisa ser ajustado.",
    },
    {
      question: "Quanto tempo leva para emitir o laudo de alarme?",
      answer: "Com vistoria realizada e sistema conforme, o laudo é emitido em até 5 dias úteis. Se houver não-conformes que precisam de correção antes da emissão, o prazo depende da natureza do ajuste — em geral, de 3 a 10 dias adicionais.",
    },
    {
      question: "A seguradora exige laudo de alarme separado do AVCB?",
      answer: "Algumas seguradoras exigem laudo técnico específico do sistema de alarme como condição de apólice — independente do AVCB. O laudo emitido pela DRD2 atende tanto o CBPMESP quanto a maioria das seguradoras.",
    },
  ],
  linksInternos: [
    { href: "/avcb-para-restaurante-sao-paulo", label: "AVCB para Restaurante em SP" },
    { href: "/alvara-bombeiro-restaurante-sao-paulo", label: "Alvará Bombeiro — Restaurante" },
    { href: "/laudo-alarme-incendio-sao-paulo", label: "Laudo de Alarme de Incêndio SP" },
    { href: "/laudo-hidrante-restaurante-sao-paulo", label: "Laudo de Hidrante — Restaurante" },
    { href: "/empresa-avcb-sao-paulo", label: "Empresa de AVCB em SP" },
    { href: "/renovacao-avcb-restaurante-sao-paulo", label: "Renovação AVCB Restaurante" },
  ],
  ctaFinal: {
    heading: "Laudo de alarme para o seu restaurante — diagnóstico gratuito",
    body: "Engenheiro especialista em restaurantes vistoria o sistema, emite o laudo com ART e identifica qualquer não-conforme antes da vistoria do CBPMESP.",
    cta: "Solicitar laudo de alarme para meu restaurante",
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
