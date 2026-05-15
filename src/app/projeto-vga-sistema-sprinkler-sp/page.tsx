import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/projeto-vga-sistema-sprinkler-sp",
  meta: {
    title: "Projeto de Válvula de Governo e Alarme (VGA) para Sistema de Sprinkler em SP — Cálculo Hidráulico e ART | DRD2 Engenharia",
    description: "A DRD2 projeta Válvula de Governo e Alarme (VGA) para sprinkler em SP. Cálculo de DN por demanda hidráulica, memorial descritivo, detalhe de trim e ART CREA-SP para AVCB. Diagnóstico gratuito.",
  },
  eyebrow: "Projeto de Válvula de Governo e Alarme (VGA) — NBR 10897 e IT 23/25 em São Paulo",
  h1Line1: "Projeto de Válvula de Governo e Alarme (VGA) para Sistema de Sprinkler",
  h1Line2: "em SP — Cálculo Hidráulico e Dimensionamento",
  heroBg: "/images/page-sprinklers.webp",
  introP1:
    "O projeto da válvula de governo e alarme não é uma peça de documentação burocrática — é o cálculo que define qual DN instalar. Usar DN errado é o erro mais caro em VGA: ele só é descoberto no teste de vazão, quando o sistema já está instalado e o laudo não pode ser emitido. O projeto correto calcula a demanda de vazão dos bicos em operação simultânea, aplica a perda de carga da VGA para cada DN disponível e define o menor DN que mantém pressão residual acima do mínimo no ponto mais desfavorecido. A DRD2 projeta VGA para sistemas de sprinkler em SP com memorial de cálculo completo, detalhe isométrico e ART CREA-SP.",
  introP2:
    "Processo completo: levantamento do sistema existente (ou cálculo de sistema novo), memorial de cálculo hidráulico, detalhe de trim completo com especificação de componentes, ART de projeto e documentação para protocolo no CBPMESP. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "VGA", href: "/vga-sprinkler-sao-paulo" },
    { label: "Projeto de Válvula de Governo e Alarme (VGA)" },
  ],
  occupationType: "sprinkler",
  h2_principal: {
    heading: "O que o projeto de Válvula de Governo e Alarme (VGA) deve calcular e documentar?",
    body: "O projeto de VGA tem dois componentes principais: o cálculo hidráulico de dimensionamento de DN e o detalhe de trim. O cálculo parte da área de operação do sistema (definida pela IT 23/25 conforme a classificação de risco) e da densidade de descarga mínima para essa área. Com esses dados, calcula-se a vazão total (L/min), aplica-se a perda de carga da VGA para DN65, DN80, DN100, DN150 e DN200 e verifica-se qual o menor DN que mantém pressão residual ≥ à pressão mínima do bico mais desfavorecido.",
    body2:
      "O detalhe de trim documenta a posição de cada componente do conjunto: válvula OS&Y ou borboleta, corpo da VGA, linha de alarme com inclinação de dreno, campainha hidráulica, pressostato, manômetros (face de alimentação e sistema), dreno principal (2\"), válvula de dreno (3/4\") e torneira de teste (inspector's test connection). O detalhe deve ser específico o suficiente para que a instalação reproduza exatamente o que foi calculado — não uma interpretação do instalador.",
  },
  h2_riscos: {
    heading: "O que reprova o projeto de Válvula de Governo e Alarme (VGA) na aprovação do CBPMESP",
    intro:
      "Esses 6 problemas são os mais frequentes em projetos de Válvula de Governo e Alarme (VGA) que não são aprovados pelo CBPMESP ou que resultam em retrabalho na instalação.",
    itens: [
      {
        titulo: "Ausência de memorial de cálculo hidráulico",
        desc: "Projeto que especifica DN da VGA sem apresentar o cálculo de demanda de vazão e perda de carga não tem como demonstrar que o DN escolhido é o correto. O CBPMESP pode exigir recálculo — e se o DN instalado estiver errado, a troca é por conta do executor.",
      },
      {
        titulo: "Cálculo com área de operação incorreta para o risco",
        desc: "A área de operação (m²) e a densidade de descarga (mm/min) são definidas pela IT 23/25 conforme a classificação de risco. Usar Risco Leve (4,1 mm/min / 139 m²) para um depósito que é Risco Ordinário G2 (8,1 mm/min / 139 m²) subdimensiona a VGA e toda a rede.",
      },
      {
        titulo: "Projeto sem detalhe de trim completo",
        desc: "Projeto que especifica apenas 'VGA DN100' sem detalhar posição da campainha, declividade da linha de alarme, posição do pressostato e especificação dos manômetros é um documento incompleto. O instalador que não tem o detalhe improvisa — e improviso em trim resulta em reprovação.",
      },
      {
        titulo: "Coeficiente K da VGA não verificado",
        desc: "O coeficiente K (coeficiente de fluxo) é específico por modelo de VGA — dois modelos DN100 de fabricantes diferentes podem ter K=115 e K=135. O cálculo de perda de carga usa o K real do modelo especificado, não um K genérico. Projeto com K assumido pode resultar em erro de pressão residual.",
      },
      {
        titulo: "Torneira de teste não especificada ou mal posicionada",
        desc: "A torneira de teste deve estar no ponto mais desfavorecido do sistema — fim da rede mais longa, no último andar ou na zona mais remota. Projeto que posiciona a torneira de teste em ponto conveniente mas não no mais desfavorecido invalida o trip test como referência do sistema real.",
      },
      {
        titulo: "ART de projeto sem habilitação para sprinkler",
        desc: "A ART deve ser assinada por engenheiro com habilitação para projetos de sistemas de sprinkler conforme o CREA-SP. ART emitida por profissional sem a habilitação específica pode ser questionada pelo CBPMESP na vistoria.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 desenvolve o projeto de Válvula de Governo e Alarme (VGA)",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Levantamento do sistema existente ou do projeto novo",
        desc: "Para retrofit: levantamento do sistema instalado — número de bicos por zona, DN da rede, pressão disponível na alimentação e modelo de VGA existente. Para sistema novo: dados do projeto de sprinkler em desenvolvimento.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Classificação de risco e definição da área de operação",
        desc: "Classificação do risco por setor conforme IT 23/25 (Leve, Ordinário G1/G2, Extra G1/G2). Definição da área de operação e densidade de descarga mínima para cada setor. Cálculo da vazão total para o pior cenário.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Cálculo de DN por perda de carga",
        desc: "Aplicação da perda de carga para cada DN disponível (usando o K real do modelo especificado) e verificação da pressão residual no ponto mais desfavorecido. Seleção do menor DN que mantém pressão residual acima do mínimo da IT 23/25.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Detalhe isométrico do trim completo",
        desc: "Desenho do conjunto completo com: válvula OS&Y, corpo da VGA com orientação, linha de alarme com declividade, campainha hidráulica, pressostato, manômetros, dreno principal, válvula de dreno auxiliar e torneira de teste com localização no sistema.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Especificação de componentes",
        desc: "Especificação de fabricante e modelo de cada componente do trim: VGA (fabricante, modelo, DN, K), campainha hidráulica, pressostato (faixa de pressão de atuação), manômetros (escala, conexão), torneira de teste (orifício equivalente a um bico).",
      },
      {
        numero: "ETAPA 06",
        titulo: "Memorial de cálculo e ART de projeto",
        desc: "Memorial com demonstração completa do cálculo: dados de entrada, classificação de risco, área de operação, vazão total, perda de carga por DN e pressão residual no ponto mais desfavorecido. ART de projeto CREA-SP emitida antes do início da instalação.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que o projeto de Válvula de Governo e Alarme (VGA) deve conter para aprovação do AVCB",
    body1:
      "O CBPMESP não aprova laudo de sprinkler sem projeto de VGA com memorial de cálculo hidráulico. O projeto deve demonstrar que o DN escolhido é o correto para a demanda do sistema — não apenas especificar o equipamento.",
    alerta:
      "Qualquer ampliação do sistema de sprinkler que adicione bicos a uma zona existente pode alterar a demanda de vazão e exigir revisão do projeto de VGA. A revisão deve ser feita antes da ampliação, não após.",
    itens: [
      {
        titulo: "Memorial de cálculo com demonstração de DN",
        desc: "O memorial deve partir da área de operação e densidade de projeto, calcular a vazão total, aplicar a perda de carga para cada DN avaliado e concluir com a seleção justificada do DN. Sem essa cadeia de cálculo, o projeto é apenas uma especificação.",
      },
      {
        titulo: "Detalhe de trim com todos os componentes obrigatórios",
        desc: "O detalhe isométrico deve mostrar cada componente do trim com cotas, inclinações de tubulação de alarme, posição dos manômetros e localização da torneira de teste. O nível de detalhe deve ser suficiente para reprodução exata na instalação.",
      },
      {
        titulo: "Especificação de modelo e fabricante da VGA",
        desc: "O coeficiente K é específico por modelo. O projeto deve especificar fabricante e modelo — não apenas DN — para que o cálculo de perda de carga seja referente ao equipamento real que será instalado.",
      },
      {
        titulo: "ART de projeto com habilitação correta",
        desc: "A ART de projeto deve ser emitida por engenheiro com registro no CREA-SP e habilitação para projetos de sistemas de sprinkler. O número da ART deve constar no memorial de cálculo e no laudo técnico.",
      },
    ],
    closing:
      "A DRD2 desenvolve projeto de VGA com memorial de cálculo completo, detalhe de trim e ART de projeto CREA-SP — documentação pronta para aprovação do CBPMESP na primeira vistoria.",
  },
  h2_quando: {
    heading: "Quando desenvolver ou atualizar o projeto de Válvula de Governo e Alarme (VGA)?",
    body1:
      "Projeto novo: antes de qualquer instalação de sistema de sprinkler — a VGA e seu projeto são parte integrante do projeto geral do sistema. Atualização: quando o sistema for ampliado com novos bicos, quando a VGA for substituída por modelo diferente, ou quando a classificação de risco do setor for alterada.",
    body2:
      "Situações que exigem revisão imediata: o CBPMESP questionar o dimensionamento da VGA na vistoria, o trip test mostrar pressão residual abaixo do projeto, ou o proprietário querer substituir a VGA por modelo diferente do especificado.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para projeto de Válvula de Governo e Alarme (VGA) em SP?",
    body1:
      "A DRD2 desenvolve projetos de VGA com cálculo hidráulico completo — não apenas especificação de equipamento. Cada projeto inclui memorial com cadeia de cálculo demonstrada, detalhe de trim executável e ART de projeto CREA-SP.",
    body2:
      "Processo integrado: o projeto de VGA é desenvolvido como parte do projeto geral de sprinkler — não como documento separado. A integração evita inconsistências entre o cálculo da rede e o dimensionamento da válvula.",
  },
  h2_cobertura: {
    heading: "Projeto de Válvula de Governo e Alarme (VGA) para sprinkler em toda a Grande SP",
    body1:
      "A DRD2 desenvolve projetos de VGA para sistemas de sprinkler em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para edificações fora da Grande SP, o projeto pode ser desenvolvido remotamente com as plantas do sistema de sprinkler existente e as fotos do ponto de instalação da VGA.",
  },
  faqs: [
    {
      question: "O projeto de VGA precisa de ART separada do projeto de sprinkler?",
      answer:
        "Não necessariamente. Quando a VGA é parte do projeto de sprinkler, a ART do projeto de sprinkler cobre o dimensionamento da VGA desde que o memorial de cálculo da válvula esteja incluído no documento. Em projetos de retrofit de VGA isolada (substituição da válvula em sistema existente), é necessária ART específica.",
    },
    {
      question: "Quanto tempo leva o desenvolvimento do projeto de VGA?",
      answer:
        "Para sistemas de até 5 zonas de sprinkler, o projeto de VGA com memorial de cálculo e detalhe de trim leva de 3 a 7 dias úteis após o levantamento do sistema. Projetos mais complexos (múltiplas zonas com diferentes classificações de risco) levam de 10 a 15 dias úteis.",
    },
    {
      question: "Posso usar o projeto de VGA de outra empresa para instalar?",
      answer:
        "Tecnicamente sim, desde que o projeto seja assinado por engenheiro CREA-SP e contenha memorial de cálculo completo. Na prática, a empresa executora deve verificar se as especificações do projeto são compatíveis com os equipamentos que serão fornecidos — coeficiente K e modelo da VGA devem ser os mesmos do cálculo.",
    },
    {
      question: "O projeto de VGA precisa ser aprovado pelo CBPMESP antes da instalação?",
      answer:
        "Para sistemas de sprinkler em edificações acima do porte mínimo que exige aprovação prévia de projeto, sim. Para sistemas menores que seguem o processo simplificado, o projeto com ART é apresentado na vistoria junto com o laudo de execução. A DRD2 orienta o processo correto para cada caso.",
    },
    {
      question: "O que acontece se o DN especificado no projeto estiver errado?",
      answer:
        "Se o DN instalado for menor do que o correto, o teste de vazão no ponto mais desfavorecido mostrará pressão abaixo do mínimo. A solução é substituir a VGA — custo de retrabalho que inclui remoção, fornecimento de nova válvula do DN correto, reinstalação e novo trip test. O cálculo correto antes da instalação evita esse custo.",
    },
  ],
  linksInternos: [
    { href: "/vga-sprinkler-sao-paulo", label: "Válvula de Governo e Alarme SP" },
    { href: "/instalacao-vga-sprinkler-sp", label: "Instalação de VGA" },
    { href: "/manutencao-vga-sprinkler-sp", label: "Manutenção de VGA" },
    { href: "/teste-comissionamento-vga-sp", label: "Teste e Comissionamento de VGA" },
    { href: "/adequacao-vga-avcb-sp", label: "Adequação de VGA para AVCB" },
    { href: "/sprinklers", label: "Sistema de Sprinkler em SP" },
  ],
  ctaFinal: {
    heading: "PROJETO DE VÁLVULA DE GOVERNO E ALARME (VGA) EM SP — CÁLCULO HIDRÁULICO + DETALHE TRIM + ART CREA-SP",
    body: "Diagnóstico técnico gratuito. Memorial de cálculo completo. Dimensionamento correto de DN antes da instalação.",
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
