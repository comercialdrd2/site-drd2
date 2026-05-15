import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/laudo-hidrante-galpao-sao-paulo",
  meta: {
    title: "Laudo de Hidrante para Galpão Industrial em SP | DRD2 Engenharia",
    description: "Laudo técnico do sistema de hidrantes para galpões industriais em São Paulo. IT 22/2025, cálculo por carga de incêndio do estoque, vazão e pressão reais. ART CREA-SP inclusa.",
  },
  eyebrow: "IT 22 — Sistema de Hidrantes para Galpão Industrial",
  h1Line1: "Laudo de Hidrante",
  h1Line2: "para Galpão Industrial em São Paulo",
  heroBg: "/images/blog/blog_hero_avcb_galpao.webp",
  introP1: "O sistema de hidrantes de galpão industrial é dimensionado com base na carga de incêndio do que está armazenado — não apenas pela área do galpão. Um galpão que armazenava peças metálicas e passou a armazenar plástico ou papel teve sua carga de incêndio multiplicada sem que o sistema fosse recalculado. O CBPMESP verifica essa compatibilidade na vistoria, e sistema subdimensionado para o estoque atual é reprovação certa.",
  introP2: "A DRD2 emite laudo técnico do sistema de hidrantes para galpões industriais conforme a IT 22/2025, com cálculo de carga de incêndio compatível com o uso atual do galpão, teste de pressão e vazão reais e ART CREA-SP inclusa. Para galpões com AVCB vencendo ou com mudança de ocupação, o laudo precisa ser atualizado antes do protocolo.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Laudo de Hidrante — Galpão SP" },
  ],
  occupationType: "galpão industrial",
  h2_principal: {
    heading: "Como a carga de incêndio determina o sistema de hidrantes do galpão",
    body: "A IT 22/2025 classifica galpões industriais por carga de incêndio específica (MJ/m²), calculada com base no material armazenado ou processado. Galpões com carga leve (peças metálicas, granitos) têm exigências menores. Galpões com carga alta (papel, plástico, tecido, borracha) precisam de sistema com maior vazão, maior número de hidrantes simultâneos e reservatório de incêndio maior.",
    body2: "O problema é que a atividade do galpão muda — o locatário troca, o produto armazenado muda, a área de armazenagem aumenta com prateleiras mais altas. Cada uma dessas mudanças altera a carga de incêndio e pode tornar o sistema existente subdimensionado. O laudo técnico documenta essa compatibilidade — e a DRD2 recalcula quando necessário.",
  },
  h2_riscos: {
    heading: "Não-conformes mais comuns em hidrantes de galpões industriais",
    intro: "Esses são os problemas mais frequentes encontrados pela DRD2 em vistorias de galpões em SP:",
    itens: [
      {
        titulo: "Sistema subdimensionado para o estoque atual",
        desc: "Galpão que mudou de atividade ou aumentou o estoque sem recalcular o sistema. Um galpão de logística que recebe carga de plástico ou papel precisa de sistema significativamente mais robusto que o original.",
      },
      {
        titulo: "Distância entre hidrantes acima do permitido",
        desc: "A IT 22 define distância máxima entre hidrantes para que todo ponto do galpão seja alcançado com a mangueira. Galpões ampliados sem instalação de novos pontos têm áreas descobertas.",
      },
      {
        titulo: "Reservatório de incêndio compartilhado com uso industrial",
        desc: "Galpões que usam o reservatório de incêndio também para uso industrial (resfriamento de máquinas, lavagem) podem não ter o volume mínimo disponível em caso de incêndio.",
      },
      {
        titulo: "Bomba com tempo de partida acima do limite",
        desc: "A IT 22 exige que a bomba de incêndio entre em operação em até 10 segundos após a queda de pressão. Bombas com desgaste no motor ou pressostato descalibrado demoram mais.",
      },
      {
        titulo: "Mangueiras de alta pressão deterioradas",
        desc: "Galpões industriais têm condições mais agressivas para as mangueiras: poeira, variações de temperatura e pressão de trabalho mais alta. Mangueiras degradam mais rápido que em uso residencial.",
      },
      {
        titulo: "Saída de incêndio bloqueada por estoque",
        desc: "Abrigo de hidrante com estoque empilhado na frente impede o acesso em emergência. O CBPMESP reprova o sistema se o acesso ao hidrante mais próximo for bloqueado por 3 segundos.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 emite o laudo de hidrante para galpões",
    etapas: [
      {
        numero: "01",
        titulo: "Levantamento da carga de incêndio atual",
        desc: "Identificamos o material armazenado ou processado, a densidade de armazenagem e a altura das prateleiras — parâmetros que determinam a carga de incêndio e, consequentemente, o dimensionamento necessário.",
      },
      {
        numero: "02",
        titulo: "Verificação de cobertura e distância entre pontos",
        desc: "Mapeamos todos os hidrantes e verificamos se todo ponto do galpão é alcançado pela mangueira — considerando obstáculos, prateleiras e divisórias internas.",
      },
      {
        numero: "03",
        titulo: "Teste de pressão e vazão simultâneos",
        desc: "Testamos os hidrantes no ponto mais desfavorável com a bomba em operação, medindo pressão e vazão simultaneamente — conforme exigência da IT 22 para o número de hidrantes em operação simultânea do projeto.",
      },
      {
        numero: "04",
        titulo: "Verificação do reservatório e da bomba",
        desc: "Volume do reservatório conferido para o tempo mínimo de operação exigido, bomba testada em partida automática e verificação do painel de comando.",
      },
      {
        numero: "05",
        titulo: "Laudo com cálculo hidráulico e ART",
        desc: "Laudo técnico completo com cálculo de carga de incêndio, cálculo hidráulico do sistema, resultado dos testes e ART CREA-SP — documento exigido pelo CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Documentação de hidrante para o AVCB do galpão",
    body1: "O processo de AVCB de galpões industriais exige os seguintes documentos relativos ao sistema de hidrantes:",
    alerta: "Galpão com sistema de hidrantes subdimensionado para a carga de incêndio atual não consegue renovar o AVCB sem adequação. A DRD2 identifica esse risco antes do protocolo.",
    itens: [
      { titulo: "Laudo técnico IT 22/2025 com ART CREA-SP", desc: "Laudo com declaração de conformidade do sistema para a atividade atual do galpão — não apenas para o projeto original." },
      { titulo: "Cálculo de carga de incêndio específica", desc: "Memorial de cálculo da carga de incêndio por m², considerando o material atual e a densidade de armazenagem — base para dimensionamento do sistema." },
      { titulo: "Cálculo hidráulico do sistema", desc: "Cálculo de pressão, vazão e número de hidrantes simultâneos — conforme IT 22 e o nível de risco do galpão." },
      { titulo: "Relatório de teste de pressão e vazão", desc: "Resultado dos testes reais no ponto mais desfavorável, com leituras de manômetro e hidrômetro, data e número do equipamento de medição." },
      { titulo: "Laudo de manutenção da bomba de incêndio", desc: "Manutenção preventiva da bomba dos últimos 12 meses com teste de partida automática e verificação do painel de comando." },
    ],
    closing: "Mudou de atividade ou ampliou o galpão? O laudo precisa ser refeito. A DRD2 verifica a compatibilidade antes de qualquer protocolo.",
  },
  h2_quando: {
    heading: "Quando o galpão precisa de novo laudo de hidrante",
    body1: "Além da renovação trienal do AVCB, o laudo de hidrante precisa ser refeito quando: a atividade do galpão muda (locatário diferente com estoque diferente), quando há ampliação da área construída, quando há instalação de mezanino ou entrepiso que altera a distribuição dos hidrantes, e quando há troca da bomba ou do reservatório de incêndio.",
    body2: "Galpões logísticos que recebem diferentes tipos de carga ao longo do tempo devem revisar o laudo sempre que o perfil do estoque mudar significativamente. A DRD2 pode fazer essa revisão anualmente como parte do contrato de manutenção.",
  },
  h2_escolher: {
    heading: "Contrato de manutenção para galpões com alta rotatividade de estoque",
    body1: "Galpões logísticos e de distribuição com alta rotatividade de produto têm maior risco de incompatibilidade entre o sistema instalado e a carga de incêndio atual. A DRD2 oferece contrato de revisão anual com laudo atualizado — especialmente recomendado para galpões que mudam de locatário ou de tipo de produto.",
    body2: "O custo de uma adequação emergencial para aprovação de AVCB é muito maior que o custo de uma revisão preventiva anual. Galpões com AVCB em dia têm mais valor locatício e fecham contratos com locatários corporativos mais facilmente.",
  },
  h2_cobertura: {
    heading: "Atendimento para galpões industriais em SP e Grande SP",
    body1: "A DRD2 atende galpões industriais e logísticos em São Paulo Capital, Guarulhos, Osasco, Santo André, São Bernardo do Campo, Barueri e municípios do eixo Anhanguera e Dutra.",
    body2: "Para condomínios logísticos com múltiplos galpões, realizamos a vistoria consolidada com laudo por unidade — reduzindo o custo por galpão e garantindo consistência técnica em todo o complexo.",
  },
  faqs: [
    {
      question: "O sistema de hidrantes precisa ser recalculado quando o locatário do galpão muda?",
      answer: "Depende. Se o novo locatário tem carga de incêndio similar ou menor que o anterior, o sistema pode ser mantido com atualização do laudo. Se a carga aumentou (novo produto mais inflamável ou estoque mais alto), o sistema precisa ser adequado. A DRD2 faz essa avaliação gratuitamente.",
    },
    {
      question: "Galpão com mezanino precisa de hidrante no piso superior?",
      answer: "Sim. Mezaninos e entrepisos com área significativa precisam de cobertura de hidrante no piso superior — a mangueira do piso térreo não alcança com pressão suficiente. A necessidade depende da área do mezanino e da sua ocupação.",
    },
    {
      question: "O reservatório de incêndio do galpão pode ser o mesmo da água potável?",
      answer: "Pode existir no mesmo reservatório, desde que haja divisória ou volume reservado exclusivamente para incêndio — com dispositivo que garanta que o volume de incêndio não seja consumido no uso normal. A IT 22 especifica como fazer essa separação.",
    },
    {
      question: "Qual a pressão mínima exigida no hidrante mais distante do galpão?",
      answer: "A IT 22/2025 exige pressão mínima de 10 mca (metros de coluna de água) no ponto mais desfavorável. Para galpões com risco elevado, pode ser exigida pressão maior dependendo do projeto hidráulico.",
    },
    {
      question: "Quanto tempo leva para emitir o laudo de hidrante de galpão?",
      answer: "Com vistoria realizada e sistema conforme, o laudo é emitido em até 5 dias úteis. Se houver necessidade de recálculo de carga de incêndio ou de cálculo hidráulico, o prazo pode ser de 7 a 10 dias úteis.",
    },
  ],
  linksInternos: [
    { href: "/avcb-galpao-industrial-sao-paulo", label: "AVCB para Galpão Industrial SP" },
    { href: "/hidrantes", label: "Sistema de Hidrantes SP" },
    { href: "/laudo-sprinkler-galpao-sao-paulo", label: "Laudo de Sprinkler — Galpão" },
    { href: "/empresa-avcb-sao-paulo", label: "Empresa de AVCB em SP" },
    { href: "/quanto-custa-avcb-sao-paulo", label: "Quanto Custa o AVCB em SP" },
    { href: "/renovacao-avcb", label: "Renovação de AVCB em SP" },
  ],
  ctaFinal: {
    heading: "Laudo de hidrante para o seu galpão — cálculo pela carga real",
    body: "Calculamos a carga de incêndio do seu estoque atual, testamos pressão e vazão reais e emitimos laudo compatível com o uso atual do galpão.",
    cta: "Solicitar laudo de hidrante para meu galpão",
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
