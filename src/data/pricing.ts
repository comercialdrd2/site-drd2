export interface PricingFactor {
  title: string;
  description: string;
}

export const pricingFactors: PricingFactor[] = [
  {
    title: "Área Construída (m²)",
    description: "O principal fator. Quanto maior a área, maior a complexidade do projeto e o valor das taxas do Corpo de Bombeiros (DARE)."
  },
  {
    title: "Carga de Incêndio (Risco)",
    description: "Galpões industriais com materiais inflamáveis têm risco maior que escritórios, exigindo sistemas mais caros como Sprinklers."
  },
  {
    title: "Sistemas Existentes",
    description: "Se o imóvel já possui hidrantes e alarmes operantes, o custo é menor. Se precisar instalar do zero, o investimento aumenta."
  },
  {
    title: "Altura da Edificação",
    description: "Prédios altos exigem sistemas de pressurização de escadas e bombas de incêndio de alta performance, o que impacta no orçamento."
  }
];

export const pricingSteps = [
  {
    title: "Taxas do CBPMESP",
    price: "Calculado por m²",
    detail: "Taxa oficial (DARE) paga diretamente ao Estado para análise e vistoria."
  },
  {
    title: "Honorários de Engenharia",
    price: "Sob Consulta",
    detail: "Elaboração do Projeto Técnico (PT) ou Simplificado (PTS) com emissão de ART."
  },
  {
    title: "Laudos e Testes",
    price: "Incluso no Pacote",
    detail: "Testes de mangueiras, hidrantes, para-raios (SPDA) e treinamento de brigada."
  }
];
