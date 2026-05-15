import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/hidrante-centro-distribuicao-sp",
  meta: {
    title: "Sistema de Hidrante para Centro de Distribuição em SP — IT 22/25 | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sistemas de hidrante para centro de distribuição em SP. RTI para doca, área de estocagem e escritório. IT 22/25, bomba com gerador e laudo para AVCB. Diagnóstico gratuito.",
  },
  eyebrow: "IT 22/25 — Centros de Distribuição e Operadores Logísticos em SP",
  h1Line1: "Sistema de Hidrante para Centro de Distribuição",
  h1Line2: "em São Paulo — IT 22/25, Doca e Estocagem",
  heroBg: "/images/bg-galpao.jpg",
  introP1:
    "Centros de distribuição têm um risco específico que galpões de produção não têm: o giro acelerado de estoque cria momentos de carga de incêndio extremamente alta (produto paletizado em rack aguardando expedição) intercalados com momentos de estoque baixo. O sistema de hidrantes precisa ser dimensionado para o pior cenário — não para a média — com cobertura obrigatória da doca de carga/descarga, onde o incêndio em veículo é o evento mais frequente. A DRD2 projeta e instala sistemas de hidrante para CD em SP conforme IT 22/25.",
  introP2:
    "Processo completo: levantamento por setor (doca, estocagem, picking, escritório), cálculo de RTI para o pior cenário de ocupação, bomba com alimentação pelo gerador de emergência e laudo para AVCB. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Hidrantes", href: "/hidrantes" },
    { label: "Hidrante para Centro de Distribuição" },
  ],
  occupationType: "galpão industrial",
  h2_principal: {
    heading: "Por que CDs têm exigências de hidrante diferentes de galpões comuns?",
    body: "A IT 22/25 classifica centros de distribuição conforme o tipo de produto movimentado e a altura da estocagem — não apenas pela área. Um CD de e-commerce com rack de 12 m de altura estocando produtos variados (plástico, papel, eletrônicos, tecido) pode ter setores com Risco Ordinário G2 ao lado de setores com Risco Extra G1, dependendo do que está em estoque naquela semana. O projeto de hidrantes precisa ser dimensionado para o cenário de máximo risco — quando o rack está cheio com os produtos mais inflamáveis do portfólio.",
    body2:
      "As docas de carga e descarga são o setor com maior frequência de incêndio em CDs: veículos com tanques de combustível, cargas acima de 40 toneladas de produto paletizado e acesso aberto que dificulta o confinamento. A IT 22/25 exige hidrantes posicionados para cobertura das docas com raio de alcance das mangueiras calculado considerando os obstáculos dos caminhões. A DRD2 dimensiona a RTI para combate simultâneo na doca e no setor de estocagem — o cenário mais exigente.",
  },
  h2_riscos: {
    heading: "O que reprova o sistema de hidrantes de CD na vistoria do CBPMESP",
    intro:
      "Esses 6 problemas são os mais frequentes em centros de distribuição autuados pelo Corpo de Bombeiros em São Paulo.",
    itens: [
      {
        titulo: "Doca sem cobertura específica de hidrantes",
        desc: "Hidrantes posicionados apenas no interior do galpão não alcançam as docas com caminhões posicionados. A IT 22/25 exige cobertura da doca — o setor de maior frequência de incêndio em CDs.",
      },
      {
        titulo: "RTI calculada sem cenário de rack cheio",
        desc: "RTI calculada com estoque médio subestima o pior caso. Quando o rack está cheio com produtos de alto risco, a RTI real exigida pode ser até 3× maior do que a calculada para estoque médio.",
      },
      {
        titulo: "Bomba sem alimentação pelo gerador",
        desc: "CDs operam 24h com pico noturno de expedição. A bomba de incêndio deve funcionar em falta de energia da concessionária. CDs com gerador de emergência devem conectar a bomba ao circuito de emergência.",
      },
      {
        titulo: "Mangueiras sem comprimento para cobertura do setor de doca",
        desc: "Docas com múltiplas baias de caminhão exigem mangueiras de comprimento suficiente para alcançar a cabine do caminhão na última baia. Mangueiras padrão de 15 m frequentemente não cobrem toda a extensão da doca.",
      },
      {
        titulo: "Siamês sem posicionamento para acesso de caminhão de bombeiro",
        desc: "O siamês de recalque deve estar posicionado para acesso do caminhão dos bombeiros sem precisar entrar no pátio do CD — que frequentemente está bloqueado por caminhões em fila de espera para descarga.",
      },
      {
        titulo: "Sistema sem teste documentado em carga máxima",
        desc: "A manutenção de CDs frequentemente testa o sistema apenas com o estoque normal. O CBPMESP pode exigir demonstração de que o sistema funciona na condição de maior risco — não apenas na condição média.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o sistema de hidrantes para centro de distribuição",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Levantamento por setor de risco",
        desc: "Mapeamento de todos os setores: docas por tipo de produto movimentado, área de estocagem em rack, área de picking/separação, escritório e área de carregamento de empilhadeiras.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Cálculo de RTI pelo pior cenário",
        desc: "RTI calculada para o cenário de máximo risco: rack cheio com produto mais inflamável + combate simultâneo na doca. Esse é o dimensionamento correto para CDs com portfólio variável.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Projeto com bomba e gerador",
        desc: "Dimensionamento de bomba principal, jockey e reserva com alimentação pelo gerador de emergência. Configuração de acionamento automático por pressostato para operação 24h.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Posicionamento de abrigos e siamês",
        desc: "Abrigos de mangueira com comprimento adequado para cobertura das docas. Siamês de recalque posicionado para acesso externo sem necessidade de entrar no pátio do CD.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Testes em condição de máximo risco",
        desc: "Teste de pressão com rack em carga máxima simulada, vazão mínima na doca mais desfavorecida, acionamento automático de bomba e funcionamento com gerador. Relatório fotográfico completo.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo com ART para AVCB",
        desc: "ART de projeto e ART de execução CREA-SP. Laudo técnico com memorial de cálculo para pior cenário e documentação pronta para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 22/25 exige especificamente para hidrantes em CD",
    body1:
      "Centros de distribuição são classificados na IT 22/25 pelo tipo de produto movimentado e pela altura de estocagem. Produtos inflamáveis ou em rack acima de 6 m elevam a classificação de risco e as exigências de RTI.",
    alerta:
      "Mudança no portfólio de produtos armazenados — especialmente inclusão de itens inflamáveis, químicos ou aerossóis — pode alterar a classificação de risco do CD e exigir atualização do projeto.",
    itens: [
      {
        titulo: "Cobertura obrigatória da doca de carga/descarga",
        desc: "A IT 22/25 exige cobertura de hidrantes nas docas de carga e descarga. O raio de alcance das mangueiras deve ser calculado considerando os obstáculos dos caminhões estacionados.",
      },
      {
        titulo: "RTI para combate simultâneo na doca e no interior",
        desc: "O pior cenário de um CD é incêndio simultâneo em veículo na doca e em produto no rack. A RTI deve ser calculada para combate simultâneo nesses dois pontos — não apenas para um.",
      },
      {
        titulo: "Bomba com alimentação de emergência para operação 24h",
        desc: "CDs que operam 24h devem ter bomba conectada ao gerador de emergência. A IT 22/25 não aceita interrupção da proteção durante falta de energia da concessionária.",
      },
      {
        titulo: "Siamês externo sem dependência de acesso ao pátio",
        desc: "O siamês deve ser acessível pelo caminhão dos bombeiros diretamente da via pública. CDs com portões e pátios internos devem instalar o siamês na fachada externa, sem dependência de abertura de portão.",
      },
    ],
    closing:
      "A DRD2 realiza levantamento técnico gratuito do CD, identifica todas as não-conformidades por setor e apresenta proposta de adequação com RTI calculada para o pior cenário de operação.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema de hidrantes do centro de distribuição?",
    body1:
      "A manutenção semestral é obrigatória. O laudo com ART deve ser emitido anualmente para renovação do AVCB. Revisão imediata é necessária após inclusão de produto inflamável no portfólio, aumento da altura de estocagem ou expansão da área de doca.",
    body2:
      "Situações urgentes: Comunique-se do CBPMESP sobre hidrantes, mudança de operador logístico com alteração de portfólio, ampliação do número de docas, instalação de rack mais alto ou troca de bomba.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema de hidrantes do seu CD?",
    body1:
      "A DRD2 tem experiência em sistemas de hidrantes para centros de distribuição, operadores logísticos e galpões de e-commerce em São Paulo. Cada projeto dimensiona para o pior cenário de ocupação — não para a média — garantindo conformidade independente do portfólio armazenado.",
    body2:
      "Processo completo sem terceiros: levantamento, projeto, instalação, testes e laudo. A instalação é planejada para minimizar impacto nas operações do CD, com cronograma acordado com o gerente de operações.",
  },
  h2_cobertura: {
    heading: "Sistemas de hidrante para CD em toda a Grande SP",
    body1:
      "A DRD2 atende centros de distribuição em toda a Grande São Paulo: Guarulhos, Cajamar, Barueri, Jandira, ABC, Campinas, Embu e municípios ao longo das rodovias Anhanguera, Bandeirantes, Castelo Branco e Dutra.",
    body2:
      "Para CDs fora da Grande SP, realizamos visita técnica com agenda específica. O diagnóstico inicial pode ser feito por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Centro de distribuição precisa de sistema de hidrantes diferente de um galpão normal?",
      answer:
        "Sim. CDs têm docas de carga/descarga, giro acelerado de estoque e operação 24h — três fatores que elevam as exigências em relação a galpões de produção. O projeto precisa cobrir as docas, dimensionar para o pior cenário de estoque e garantir operação com gerador.",
    },
    {
      question: "A doca de carga/descarga do CD precisa de hidrante específico?",
      answer:
        "Sim. A IT 22/25 exige cobertura da doca com raio de alcance das mangueiras calculado para a posição de máximo afastamento dos caminhões. Hidrantes apenas no interior do galpão frequentemente não alcançam as docas.",
    },
    {
      question: "Como a mudança de produto no portfólio afeta o sistema de hidrantes?",
      answer:
        "Produtos inflamáveis, químicos, aerossóis ou materiais com alto potencial de propagação de chamas elevam a classificação de risco do setor onde são armazenados. Isso pode exigir aumento da RTI e da capacidade da bomba. A DRD2 avalia o impacto gratuitamente.",
    },
    {
      question: "O sistema de hidrantes do CD precisa funcionar com o gerador de emergência?",
      answer:
        "Sim, se o CD tiver gerador. CDs que operam 24h devem ter bomba de incêndio conectada ao circuito de emergência. A IT 22/25 não aceita que a proteção seja interrompida durante falta de energia da concessionária.",
    },
    {
      question: "Com que frequência o sistema de hidrantes do CD deve ser revisado?",
      answer:
        "Manutenção semestral obrigatória com laudo anual com ART para renovação do AVCB. A DRD2 oferece contrato de manutenção preventiva com visitas semestrais programadas e sem custo de deslocamento extra na Grande SP.",
    },
  ],
  linksInternos: [
    { href: "/hidrantes", label: "Sistema de Hidrantes em SP" },
    { href: "/alarme-incendio-centro-distribuicao-sp", label: "Alarme de Incêndio para CD" },
    { href: "/sprinkler-centro-distribuicao-sp", label: "Sprinkler para Centro de Distribuição" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "HIDRANTE PARA CD — DOCA + PIOR CENÁRIO + GERADOR + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. RTI calculada para o pior cenário de estoque. Conforme IT 22/25.",
    cta: "Solicitar Diagnóstico Técnico Gratuito",
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
