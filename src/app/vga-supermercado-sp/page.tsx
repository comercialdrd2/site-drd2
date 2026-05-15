import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/vga-supermercado-sp",
  meta: {
    title: "Válvula de Governo e Alarme (VGA) para Supermercado em SP — Projeto por Setor e AVCB | DRD2 Engenharia",
    description: "A DRD2 projeta Válvula de Governo e Alarme (VGA) para supermercados em SP. DN correto por setor (vendas, depósito, câmara fria, câmara de congelados), bicos de temperatura específica e AVCB. Diagnóstico gratuito.",
  },
  eyebrow: "Válvula de Governo e Alarme (VGA) para Supermercado — IT 23/25, NBR 10897 e AVCB em São Paulo",
  h1Line1: "Válvula de Governo e Alarme",
  h1Line2: "para Supermercado em SP — Projeto e AVCB",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "Supermercado não é um único risco — é pelo menos quatro riscos diferentes em uma mesma edificação: área de vendas (Ordinário G1), padaria e açougue (Ordinário G2 por presença de gordura e calor), depósito de não-perecíveis (Ordinário G2 ou Extra G1 conforme altura de empilhamento) e câmara de congelados (exige sistema dry pipe — não wet pipe). Cada setor pode precisar de uma VGA com DN diferente, e a câmara de congelados precisa de válvula dilúvio separada. Instalar uma única VGA para todo o supermercado é erro de projeto que o CBPMESP irá identificar.",
  introP2:
    "A DRD2 projeta e instala VGA para supermercados em SP com setorização correta por risco: área de vendas, padaria, depósito e câmara fria — cada setor com o tipo de sistema e DN adequado. Diagnóstico técnico gratuito incluindo verificação da setorização existente e do dimensionamento de cada VGA.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Válvula de Governo e Alarme (VGA) para Supermercado" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "Por que supermercado precisa de múltiplas Válvulas de Governo e Alarme (VGAs) com DNs diferentes?",
    body: "O supermercado tem setores com temperaturas de ambiente completamente diferentes (área de vendas a 20°C vs. câmara de congelados a -20°C) e com riscos completamente diferentes (corredor de cereais vs. corredor de produtos de limpeza). A norma não permite usar o mesmo sistema de sprinkler para ambientes com temperaturas abaixo de 0°C — o wet pipe congelaria. E não permite usar a mesma densidade de projeto para um corredor de cereal (Ordinário G1) e um depósito de papel (Extra G1) — o subdimensionamento deixa o setor de maior risco desprotegido adequadamente.",
    body2:
      "A padaria é o setor mais crítico de projeto em supermercado: o calor dos fornos pode atingir o teto próximo — bicos de 57°C (padrão) podem disparar por calor de operação normal, sem incêndio. A solução é bicos de temperatura mais alta (79°C ou 93°C) na padaria, combinados com bicos padrão na área de vendas adjacente. Isso exige projeto específico por setor — não uma especificação única para o supermercado inteiro.",
  },
  h2_riscos: {
    heading: "6 erros de Válvula de Governo e Alarme (VGA) específicos para supermercados",
    intro:
      "Esses problemas são frequentes em supermercados — especialmente em lojas com reformas e ampliações que alteraram a setorização original.",
    itens: [
      {
        titulo: "Câmara de congelados com wet pipe — congelamento da rede",
        desc: "Sistema wet pipe instalado dentro de câmara de congelados (-18°C a -25°C) tem a rede congelada em operação normal. O congelamento cria pressão que rompe conexões — o sistema perde pressão e o supermercado fica sem proteção. A câmara de congelados exige sistema dry pipe com válvula dilúvio própria, separada da VGA do sistema principal.",
      },
      {
        titulo: "Padaria com bicos de 57°C — ativação por calor de forno",
        desc: "O calor gerado pelos fornos da padaria pode atingir o teto próximo durante operação normal. Bicos de 57°C instalam no teto a menos de 1 metro acima do forno podem ativar por calor de operação — sem incêndio. Bicos de 79°C ou 93°C são especificados para padaria a fim de evitar falsas ativações que inundam produtos e equipamentos.",
      },
      {
        titulo: "Depósito de produtos de limpeza classificado como Ordinário G1",
        desc: "Depósito de produtos de limpeza embalados (sabão em pó, detergente, alvejante) tem classificação de risco que pode ser Extra G1 — não Ordinário G1. Produtos com substâncias combustíveis embaladas em plástico acima de 1,5m de altura elevam o risco. VGA dimensionada para Ordinário G1 em depósito Extra G1 está com demanda de vazão 2x menor do que o necessário.",
      },
      {
        titulo: "VGA única para área de vendas e depósito — DN insuficiente para o depósito",
        desc: "VGA dimensionada pela média de risco entre área de vendas e depósito — usando DN adequado para Ordinário G1 — não tem capacidade para atender o depósito se este for Ordinário G2 ou Extra. A setorização em zonas separadas garante que cada VGA seja dimensionada para o risco específico do setor.",
      },
      {
        titulo: "Câmara de resfriamento (+2°C a +8°C) sem anticongelante — risco em temperatura próxima a 0°C",
        desc: "Câmara de resfriamento com temperatura próxima a 0°C e variação de temperatura frequente pode ter micro-congelamentos nos pontos mais frios da rede. Sistema wet pipe sem anticongelante em câmara que chega próximo a 0°C tem risco de dano à rede em falhas de refrigeração. Anticongelante (glicol) ou sistema pré-ação são as soluções.",
      },
      {
        titulo: "Ausência de VGA no setor de FLV (frutas, legumes e verduras) refrigerado",
        desc: "Setor de FLV refrigerado em supermercados modernos tem gôndolas com sistema de refrigeração integrada — temperatura entre +4°C e +8°C. Bicos convencionais nesse setor precisam de verificação de temperatura de ativação e de proteção contra congelamento. Sistema sem verificação desse setor pode ter VGA mal dimensionada ou ausente.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 projeta Válvula de Governo e Alarme (VGA) para supermercado",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Levantamento por setor",
        desc: "Mapeamento de todos os setores do supermercado: área de vendas, padaria, açougue, peixaria, setor de FLV, depósito de não-perecíveis, depósito de limpeza e higiene, câmara de resfriamento e câmara de congelados. Temperatura de operação e classificação de risco de cada setor.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Definição do tipo de sistema por setor",
        desc: "Área de vendas e depósito: wet pipe com VGA. Padaria: wet pipe com VGA, bicos de 79°C ou 93°C. Câmara de resfriamento: wet pipe com anticongelante ou pré-ação. Câmara de congelados: dry pipe com válvula dilúvio. Cada setor com sua válvula de controle e seu trip test específico.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Cálculo hidráulico por zona",
        desc: "Para cada zona wet pipe: demanda de vazão conforme classificação de risco e área de operação. Dimensionamento de DN para cada VGA. Para a zona dry pipe: dimensionamento do acelerador de abertura e do compressor de ar.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Especificação dos bicos por setor",
        desc: "Área de vendas: bico convencional 57°C. Padaria: bico 79°C ou 93°C (conforme temperatura de teto próxima aos fornos). Câmara de resfriamento: bico com temperatura compatível com a temperatura de câmara. Câmara de congelados: bico aberto (sem elemento termossensível — sistema dry pipe).",
      },
      {
        numero: "ETAPA 05",
        titulo: "Instalação das VGAs por setor",
        desc: "Instalação de cada VGA com trim completo: campainha, pressostato integrado com a central do supermercado, manômetros, dreno e torneira de teste no ponto mais desfavorecido de cada zona. Válvula dilúvio para a câmara de congelados com compressor de ar e painel de controle.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Trip test por zona e laudo para AVCB",
        desc: "Trip test de cada zona wet pipe pela torneira de teste. Trip test da válvula dilúvio com procedimento específico (abertura e drenagem completa da zona). Laudo por zona com resultado numérico. ART de execução CREA-SP para todas as zonas.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Padaria e açougue — setores que exigem atenção especial no projeto",
    body1:
      "Padaria e açougue são os dois setores com maior complexidade de projeto de sprinkler em supermercados. A padaria tem risco de falsa ativação por calor de forno (bico 57°C dispara em calor de operação). O açougue tem acúmulo de gordura nas superfícies — risco Ordinário G2 com risco de propagação rápida por gordura inflamável.",
    alerta:
      "Bico de sprinkler na padaria que dispara por calor do forno (falsa ativação) gera prejuízo triplo: inunda produtos e equipamentos com água, interrompe o fornecimento de pães para a loja e pode gerar danos nos fornos por choque térmico da água. Bicos de temperatura correta (79°C ou 93°C) eliminam esse risco.",
    itens: [
      {
        titulo: "Padaria — bico de 79°C ou 93°C, não 57°C",
        desc: "A temperatura de teto próxima aos fornos em padaria industrial pode atingir 60°C a 70°C durante operação normal. Bico de 57°C instalado nessa posição ativa sem incêndio — falsa ativação. Bico de 79°C (máximo da norma para a maioria dos riscos) garante margem suficiente para não ativar no calor normal do forno.",
      },
      {
        titulo: "Açougue — risco Ordinário G2, limpeza frequente afeta os bicos",
        desc: "Açougue com limpeza a vapor frequente tem risco de dano à ampola de vidro dos bicos por variação de temperatura e pressão. Verificar periodicamente se os bicos estão com a ampola íntegra — ampola rachada por choque térmico é bico inoperante que parece funcionando.",
      },
      {
        titulo: "Área de FLV refrigerada — temperatura de ativação dos bicos",
        desc: "Gôndolas de FLV com sistema de refrigeração integrada criam microclima de +4°C a +8°C próximo às gôndolas. Bicos convencionais de 57°C instalados nessa posição têm margem de 50°C até a ativação — adequado. Verificar que não há bicos em posição de possível congelamento em caso de falha do sistema de refrigeração.",
      },
      {
        titulo: "Corredor de produtos de limpeza — classificação de risco a verificar",
        desc: "Produtos de limpeza em embalagem plástica fechada (detergente, sabão em pó, alvejante) podem ter classificação Ordinário G2 ou Extra G1 dependendo do produto específico e do volume armazenado. A verificação da classificação de risco do corredor de limpeza é parte do diagnóstico — e pode revelar subdimensionamento da VGA.",
      },
    ],
    closing:
      "A DRD2 projeta VGA para supermercados com setorização correta por risco e tipo de sistema — garantindo que cada setor tenha o tipo de proteção adequado e que o laudo por zona seja aceito pelo CBPMESP na primeira vistoria.",
  },
  h2_quando: {
    heading: "Quando revisar a Válvula de Governo e Alarme (VGA) do supermercado?",
    body1:
      "Revisão imediata: se a câmara de congelados tiver sistema wet pipe (urgente — risco de dano à rede por congelamento), se a padaria tiver bicos de 57°C próximos aos fornos (risco de falsa ativação), ou se o depósito tiver sido ampliado com armazenamento acima de 3m sem revisão do projeto.",
    body2:
      "Revisão preventiva antes da renovação do AVCB: verificação do dimensionamento de DN de cada VGA para o uso atual de cada setor. Supermercados que passaram por reformas ou mudanças de layout sem revisão do projeto de sprinkler frequentemente têm não-conformidades acumuladas.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para Válvula de Governo e Alarme (VGA) de supermercado em SP?",
    body1:
      "A DRD2 classifica o risco de cada setor do supermercado — incluindo padaria, açougue, câmara fria e depósito — e dimensiona a VGA correta para cada um. Não assumimos risco único para o supermercado inteiro.",
    body2:
      "Especialização em sistemas mistos: wet pipe (área de vendas e depósito), dry pipe (câmara de congelados) e wet pipe com anticongelante (câmara de resfriamento) — em uma única edificação, com laudo por zona para o AVCB.",
  },
  h2_cobertura: {
    heading: "Válvula de Governo e Alarme (VGA) para supermercado em toda a Grande SP",
    body1:
      "A DRD2 atende supermercados, hipermercados e minimercados em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para supermercados com Comunique-se ativo do CBPMESP sobre o sistema de sprinkler, a DRD2 atua com urgência — diagnóstico e plano de adequação em até 24h após a visita técnica.",
  },
  faqs: [
    {
      question: "O supermercado pode usar a mesma bomba de incêndio para todas as zonas?",
      answer:
        "Pode, desde que a bomba tenha capacidade para atender a zona mais demandante (geralmente o depósito Extra G1 ou a câmara de congelados com dry pipe). O projeto hidráulico verifica a curva da bomba versus a demanda de cada zona — garantindo que a bomba consiga suprir a pressão mínima no ponto mais desfavorecido da zona mais crítica.",
    },
    {
      question: "Câmara de congelados com -25°C precisa de sprinkler?",
      answer:
        "Depende da área da câmara e dos requisitos da IT 23/25. Câmaras de congelados pequenas (menos de determinada área) podem não ter obrigatoriedade de sprinkler. Câmaras maiores geralmente exigem sistema de proteção. Quando exigido, o sistema é dry pipe — não wet pipe. A DRD2 verifica a obrigatoriedade específica para o tamanho e o uso de cada câmara.",
    },
    {
      question: "Bico de sprinkler da padaria disparou com calor do forno — o que fazer?",
      answer:
        "Imediatamente: fechar a OS&Y da zona afetada para parar o fluxo de água. Drenar o setor. Registrar o horário e as condições do disparo. Solicitar visita técnica para verificar a temperatura de ativação do bico e avaliar se é necessária troca por bico de temperatura mais alta. A DRD2 fornece bico de temperatura correta e faz o trip test pós-substituição para confirmar que o novo bico não terá falsa ativação.",
    },
    {
      question: "O supermercado precisa de trip test da câmara de congelados com -20°C?",
      answer:
        "Sim — a câmara de congelados tem seu próprio sistema dry pipe com válvula dilúvio, e esse sistema precisa de trip test anual. O procedimento é mais complexo: o trip test do dry pipe abre a válvula dilúvio e inunda a rede da câmara com água, que precisa ser completamente drenada antes de retornar a temperatura de operação da câmara. O planejamento do trip test deve prever o tempo de drenagem e recarregamento do ar antes de retornar a temperatura.",
    },
    {
      question: "Qual a solução para a câmara de resfriamento (+4°C) que não tem dry pipe instalado?",
      answer:
        "Para câmaras acima de 0°C com sistema wet pipe sem anticongelante: adição de glicol propilênico à solução da rede em concentração calculada para a temperatura mínima da câmara. Para câmara a +4°C, concentração de ~20% de glicol é suficiente (protege até -8°C com margem de segurança). A solução anticongelante precisa de monitoramento semestral da concentração — a diluição ao longo do tempo pela adição de água pura reduz a proteção.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/projeto-vga-sistema-sprinkler-sp", label: "Projeto de VGA" },
    { href: "/diferenca-vga-valvula-diluvi", label: "VGA vs. Válvula Dilúvio" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de VGA" },
    { href: "/adequacao-vga-avcb-sp", label: "Adequação de VGA para AVCB" },
    { href: "/sprinkler-supermercado-avcb-sp", label: "Sprinkler para Supermercado" },
  ],
  ctaFinal: {
    heading: "VÁLVULA DE GOVERNO E ALARME (VGA) PARA SUPERMERCADO EM SP — PROJETO POR SETOR + TRIP TEST + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. Setorização correta por risco. Sistemas wet pipe, dry pipe e anticongelante — tudo com laudo para AVCB.",
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
