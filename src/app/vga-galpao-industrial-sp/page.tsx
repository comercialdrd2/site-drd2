import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/vga-galpao-industrial-sp",
  meta: {
    title: "Válvula de Governo e Alarme (VGA) para Galpão Industrial em SP — Projeto e AVCB | DRD2 Engenharia",
    description: "A DRD2 instala e mantém Válvula de Governo e Alarme (VGA) para galpões industriais em SP. Cálculo de DN para Risco Ordinário e Extra, bicos ESFR, câmara fria e AVCB. Diagnóstico gratuito.",
  },
  eyebrow: "Válvula de Governo e Alarme (VGA) para Galpão Industrial — IT 23/25, NBR 10897 e AVCB em São Paulo",
  h1Line1: "Válvula de Governo e Alarme",
  h1Line2: "para Galpão Industrial em SP — Projeto e AVCB",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "Galpão industrial não é risco Leve. A maioria dos galpões industriais e logísticos em São Paulo tem classificação Ordinário G2 ou Extra G1 pela IT 23/25 — dependendo do que é armazenado e da altura de empilhamento. Isso significa densidades de projeto mais altas (8,1 a 16,3 mm/min), áreas de operação maiores (139 m² a 260 m²) e demandas de vazão que frequentemente exigem VGA DN100 ou DN150. Instalar VGA DN80 em galpão com risco Extra não é uma economia — é subdimensionamento que reprovará no trip test e na vistoria do CBPMESP.",
  introP2:
    "A DRD2 projeta e instala VGA para galpões industriais em SP com cálculo hidráulico específico para a classificação de risco real do galpão: tipo de material armazenado, altura de empilhamento, tipo de prateleira (aberta ou fechada) e presença de câmara fria. Diagnóstico técnico gratuito — incluindo verificação da classificação de risco e dimensionamento de DN correto.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Válvula de Governo e Alarme (VGA) para Galpão Industrial" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "Por que a Válvula de Governo e Alarme (VGA) de galpão industrial é diferente das demais?",
    body: "A VGA de galpão industrial é dimensionada para demandas de vazão muito maiores do que a de uma loja ou escritório. Um sistema de sprinkler para depósito Extra G2 com área de operação de 260 m² e densidade de 16,3 mm/min precisa de ~4.000 L/min de vazão no pico de demanda. Uma VGA DN80 tem Kv típico de 250 — a perda de carga nessa vazão seria proibitiva. A VGA DN150 ou DN200 é a solução correta para esses casos. O cálculo hidráulico define o DN — não o senso comum.",
    body2:
      "Outro diferencial dos galpões industriais é a frequência de mudança de uso: o armazém de produtos eletrônicos (Ordinário G1) que vira depósito de plásticos (Extra G1) ou que adiciona câmara de congelados altera completamente o dimensionamento da VGA. A VGA original pode ter sido corretamente dimensionada para o uso inicial — e estar subdimensionada para o uso atual. O diagnóstico periódico e a revisão do projeto quando o uso muda são obrigação do proprietário.",
  },
  h2_riscos: {
    heading: "Os 6 erros mais críticos em Válvula de Governo e Alarme (VGA) para galpões industriais",
    intro:
      "Esses erros são específicos para galpões industriais — e todos têm impacto direto na aprovação do AVCB e na segurança real do sistema.",
    itens: [
      {
        titulo: "VGA dimensionada para risco menor do que o real",
        desc: "Galpão com armazenamento de plásticos em caixas de papelão acima de 3m tem classificação Extra G1 ou G2 — não Ordinário. VGA dimensionada como Ordinário G1 (4,1 mm/min) para um risco Extra (12,2 mm/min) está com demanda de vazão 3x menor do que o necessário. O trip test mostrará pressão residual muito abaixo do projeto — reprovação imediata.",
      },
      {
        titulo: "Bicos ESFR com VGA subdimensionada",
        desc: "Bicos ESFR têm vazão unitária muito maior que bicos convencionais — um bico ESFR K=200 a 1 bar descarrega ~200 L/min. Um sistema com 12 bicos ESFR K=200 em operação simultânea precisa de ~2.400 L/min de vazão total. A VGA para esse sistema precisa ser dimensionada para essa demanda real — não para a demanda de um sistema convencional com mesmo número de bicos.",
      },
      {
        titulo: "Câmara fria sem sistema dry pipe — gelo na rede wet pipe",
        desc: "Galpões com câmara de congelados (abaixo de 0°C) que instalaram sprinkler wet pipe dentro da câmara têm rede de sprinkler que congela em período de operação. O congelamento cria pressão que rompe as conexões — o sistema perde toda a pressão e o galpão fica sem proteção. A câmara de congelados exige sistema dry pipe com válvula dilúvio separada.",
      },
      {
        titulo: "VGA sem pressostato integrado com central de alarme industrial",
        desc: "Galpões industriais frequentemente têm sistema de alarme próprio (central de alarme, detectores, sirenes) separado do sistema de sprinkler. O pressostato da VGA deve ser integrado especificamente a essa central — não instalado e deixado sem conexão. A IT 23/25 exige integração, e o CBPMESP verifica o sinal na central na vistoria.",
      },
      {
        titulo: "Torneira de teste não no ponto mais desfavorecido do armazém",
        desc: "Em galpões com múltiplas naves ou corredores longos, o ponto mais desfavorecido pode estar a 100 ou 200 metros da VGA. A torneira de teste deve estar nesse ponto extremo — não na nave mais próxima da VGA por conveniência de instalação. Trip test em ponto incorreto invalida o laudo para o CBPMESP.",
      },
      {
        titulo: "Manutenção anual sem trip test — relatório de inspeção visual apenas",
        desc: "Galpões industriais frequentemente têm contratos de manutenção preventiva de equipamentos que incluem 'verificação do sistema de sprinkler' — mas que na prática realizam apenas inspeção visual sem trip test. O CBPMESP exige trip test anual documentado com resultado numérico. Relatório de inspeção visual sem trip test não é aceito como manutenção do sistema de sprinkler.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 projeta e instala Válvula de Governo e Alarme (VGA) para galpão industrial",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Classificação de risco real do galpão",
        desc: "Levantamento dos materiais armazenados (ou previstos para armazenamento), altura de empilhamento, tipo de prateleira (aberta, fechada, drive-in), presença de câmara fria e identificação de setores com risco diferente. A classificação de risco real determina a densidade de projeto — e a densidade determina a demanda de vazão.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Definição do tipo de bico e da área de operação",
        desc: "Seleção do tipo de bico conforme a classificação: bico convencional para risco Ordinário, ESFR para depósitos com prateleiras altas (Extra G1/G2), bico in-rack para sistemas com proteção embutida em prateleiras. Definição da área de operação conforme a IT 23/25 para o risco identificado.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Cálculo hidráulico e dimensionamento de DN",
        desc: "Cálculo da vazão total: número de bicos na área de operação × K × √P mínimo de cada bico. Aplicação da perda de carga na VGA para DN80, DN100, DN150 e DN200 (usando K real do modelo especificado). Seleção do menor DN que mantém pressão residual acima do mínimo no ponto mais desfavorecido do galpão.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Projeto com ART e detalhe de trim completo",
        desc: "Memorial de cálculo com demonstração da classificação de risco, área de operação, demanda de vazão e seleção de DN. Detalhe isométrico do trim completo. ART de projeto CREA-SP. Para galpões com câmara fria: projeto separado para o sistema dry pipe com válvula dilúvio.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Instalação com conjunto de trim completo",
        desc: "Instalação da VGA com orientação correta conforme fabricante. Instalação de campainha hidráulica com linha de alarme inclinada, pressostato cabeado até a central industrial de alarme, manômetros, dreno principal de 2\" e torneira de teste no ponto mais desfavorecido do galpão.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Trip test e laudo para AVCB industrial",
        desc: "Trip test pela torneira de teste no ponto mais desfavorecido: cronometragem da campainha, verificação do sinal do pressostato na central industrial, leitura de pressão residual comparada com o projeto e verificação de recampiamento. Laudo com ART de execução CREA-SP para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "Classificação de risco em galpões — o que a IT 23/25 considera",
    body1:
      "A IT 23/25 classifica o risco do sistema de sprinkler para galpões considerando: tipo de produto (inflamabilidade, embalagem, forma de armazenamento), altura de empilhamento (acima de 3m muda a classificação), tipo de prateleira (fechada retém o calor e dificulta a ação dos bicos), e presença de câmara fria ou área de processamento.",
    alerta:
      "Galpões logísticos multicliente têm risco variável: o locatário pode mudar o tipo de mercadoria armazenada sem comunicar ao proprietário. O proprietário é responsável pela conformidade do sistema de sprinkler com o risco real — não com o risco do projeto original. Revisão do dimensionamento a cada mudança de locatário ou produto é obrigatória.",
    itens: [
      {
        titulo: "Risco Leve (Classe I) — papel, livros, tecidos leves",
        desc: "Densidades de 4,1 mm/min em área de 139 m². VGA geralmente DN65 ou DN80. Raros em galpões industriais reais — maioria dos produtos industriais tem classificação mais alta.",
      },
      {
        titulo: "Risco Ordinário G1 e G2 — eletrônicos, alimentos, metais",
        desc: "Densidades de 6,1 a 8,1 mm/min em área de 139 m². VGA geralmente DN80 ou DN100. Inclui a maioria dos produtos industrializados e eletrônicos embalados.",
      },
      {
        titulo: "Risco Extra G1 — plásticos em embalagem fechada, papel em rolo, líquidos combustíveis",
        desc: "Densidades de 12,2 mm/min em área de 260 m². VGA geralmente DN100 ou DN150. Inclui a maioria dos depósitos de matéria-prima plástica e de papel para indústria.",
      },
      {
        titulo: "Risco Extra G2 — espuma de poliuretano, líquidos inflamáveis embalados",
        desc: "Densidades de 16,3 mm/min em área de 260 m². VGA geralmente DN150 ou DN200. Exige bicos de alto K ou sistema ESFR para garantir pressão residual suficiente nos bicos mais desfavorecidos.",
      },
    ],
    closing:
      "A DRD2 realiza classificação de risco detalhada para cada setor do galpão e dimensiona a VGA com o cálculo hidráulico correto — garantindo que o sistema aprovará no trip test e na vistoria do CBPMESP para o AVCB industrial.",
  },
  h2_quando: {
    heading: "Quando revisar o dimensionamento da Válvula de Governo e Alarme (VGA) no galpão?",
    body1:
      "Revisão obrigatória: quando o tipo de produto armazenado mudar (especialmente se aumentar a classificação de risco), quando a altura de empilhamento for aumentada acima de 3m, quando o número de bicos da zona for alterado por expansão da rede, ou quando o galpão for subdividido em setores com riscos diferentes.",
    body2:
      "Revisão preventiva: antes da renovação do AVCB, para verificar se o dimensionamento original ainda é adequado para o uso atual. A DRD2 realiza essa verificação como parte do diagnóstico técnico gratuito — incluindo trip test de verificação de pressão residual comparado com o projeto.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para Válvula de Governo e Alarme (VGA) de galpão industrial em SP?",
    body1:
      "A DRD2 classifica o risco real do galpão antes de dimensionar a VGA — não assume risco Ordinário por padrão. Cada projeto inclui memorial de cálculo com demonstração do DN mínimo adequado para a demanda real do sistema.",
    body2:
      "Atendimento a galpões de todos os portes: desde galpões de 1.000 m² com uma única VGA até centros de distribuição com 50.000 m² e múltiplas VGAs em zonas com riscos diferentes. ART de projeto e execução CREA-SP para todas as fases.",
  },
  h2_cobertura: {
    heading: "Válvula de Governo e Alarme (VGA) para galpão industrial em toda a Grande SP",
    body1:
      "A DRD2 projeta e instala VGA para galpões industriais em toda a Grande São Paulo: capital, ABC (Santo André, São Bernardo, São Caetano), Guarulhos, Campinas, Osasco, São José dos Campos, Sorocaba e municípios da região metropolitana.",
    body2:
      "Para galpões em fase de projeto ou em processo de renovação de AVCB, realizamos diagnóstico remoto com as plantas do sistema de sprinkler existente e a descrição dos materiais armazenados. A visita técnica presencial é necessária para o trip test e emissão do laudo.",
  },
  faqs: [
    {
      question: "Galpão com pé-direito de 12m e armazenamento até 8m precisa de bico ESFR?",
      answer:
        "Depende do material armazenado. Para materiais de risco Ordinário G2 (como eletrônicos e alimentos embalados), bicos convencionais com sistema in-rack (proteção embutida nas prateleiras) podem ser adequados. Para materiais de risco Extra G1/G2 (plásticos, papel em rolo) com armazenamento acima de 6m, bicos ESFR são geralmente a solução mais econômica — menos bicos com maior K, sem necessidade de proteção in-rack. O cálculo hidráulico determina qual configuração é viável com a pressão disponível.",
    },
    {
      question: "Posso ter uma única VGA para todo o galpão ou preciso de uma por setor?",
      answer:
        "Depende da área e do layout. A IT 23/25 limita o número de bicos por zona de sprinkler (geralmente 1.000 bicos por zona em sistemas com bicos convencionais). Galpões grandes com múltiplas naves frequentemente precisam de VGAs separadas por nave ou por setor de risco diferente. A setorização também facilita a manutenção — é possível testar ou manter uma zona sem desligar todo o sistema.",
    },
    {
      question: "O galpão tem câmara de resfriamento a +4°C — precisa de dry pipe?",
      answer:
        "Para câmaras acima de 0°C, o wet pipe com anticongelante (glicol) é uma opção além do dry pipe. A escolha depende do volume da câmara e da infraestrutura disponível: sistemas com glicol exigem monitoramento da concentração da solução; sistemas dry pipe exigem compressor de ar e têm trip test mais complexo. A DRD2 avalia as duas opções e apresenta a mais adequada para cada caso.",
    },
    {
      question: "Galpão logístico multicliente — quem é responsável pela manutenção da VGA?",
      answer:
        "A responsabilidade pela manutenção do sistema de sprinkler (incluindo a VGA) é do proprietário do imóvel, independente de locação. O contrato de locação pode prever responsabilidade do locatário pela manutenção, mas perante o CBPMESP o responsável é quem consta como titular do AVCB. Em caso de Comunique-se por falta de manutenção, o CBPMESP notifica o titular do AVCB.",
    },
    {
      question: "Quanto tempo demora o trip test em galpão com múltiplas VGAs?",
      answer:
        "O trip test de cada VGA leva de 30 a 60 minutos (incluindo verificações pré-teste, trip test, recampiamento e registros). Para um galpão com 4 VGAs em zonas diferentes, o processo completo leva cerca de 4 a 6 horas — considerando o deslocamento entre as torneiras de teste e o tempo de redação do relatório no local. A DRD2 programa o trip test com equipe suficiente para minimizar a interrupção da operação do galpão.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/projeto-vga-sistema-sprinkler-sp", label: "Projeto de VGA" },
    { href: "/instalacao-vga-sprinkler-sp", label: "Instalação de VGA" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de VGA" },
    { href: "/teste-comissionamento-vga-sp", label: "Trip Test de VGA" },
    { href: "/sprinkler-galpao-avcb-sp", label: "Sprinkler para Galpão Industrial" },
  ],
  ctaFinal: {
    heading: "VÁLVULA DE GOVERNO E ALARME (VGA) PARA GALPÃO INDUSTRIAL EM SP — PROJETO + INSTALAÇÃO + TRIP TEST + AVCB",
    body: "Diagnóstico técnico gratuito. Classificação de risco real. Dimensionamento de DN correto para o uso atual do galpão.",
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
