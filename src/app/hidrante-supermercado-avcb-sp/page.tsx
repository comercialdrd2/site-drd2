import UniversalSeoPage from "@/components/UniversalSeoPage";
import type { UniversalPageData } from "@/components/UniversalSeoPage";

const data: UniversalPageData = {
  slug: "/hidrante-supermercado-avcb-sp",
  meta: {
    title: "Sistema de Hidrante para Supermercado em SP — IT 22/25 e AVCB | DRD2 Engenharia",
    description: "A DRD2 projeta e instala sistemas de hidrante para supermercado em SP. Cobertura de câmara fria, depósito, padaria e área de vendas. IT 22/25, ART e laudo para AVCB. Diagnóstico gratuito.",
  },
  eyebrow: "IT 22/25 — Supermercados e Hipermercados em SP",
  h1Line1: "Sistema de Hidrante para Supermercado",
  h1Line2: "em São Paulo — IT 22/25, Depósito e Câmara Fria",
  heroBg: "/images/bg-supermercado.jpg",
  introP1:
    "Supermercados concentram em um único estabelecimento setores com cargas de incêndio completamente diferentes: a área de vendas com gôndolas de embalagens plásticas e papel, a padaria com forno e fritadeiras, o açougue com câmara de resfriamento, o depósito nos fundos com palete alto e a câmara de congelados. O sistema de hidrantes precisa cobrir todos esses setores com pressão garantida — inclusive o depósito, que é o setor mais desfavorecido. A DRD2 projeta e instala sistemas de hidrante para supermercado em SP conforme IT 22/25.",
  introP2:
    "Processo completo: levantamento por setor (vendas, depósito, câmaras, padaria, açougue), cálculo da RTI para os dois pontos mais desfavorecidos em simultâneo, bomba de recalque e laudo para aprovação do AVCB. Diagnóstico técnico gratuito.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Hidrantes", href: "/hidrantes" },
    { label: "Hidrante para Supermercado" },
  ],
  occupationType: "comercial",
  h2_principal: {
    heading: "Por que supermercados têm setores com exigências diferentes de hidrante?",
    body: "A IT 22/25 classifica supermercados como Grupo C-2 — comércio varejista de grande porte — mas o projeto de hidrantes precisa ir além da classificação geral. O depósito nos fundos com estocagem de produto em palete alto tem carga de incêndio muito maior do que a área de vendas. A padaria com forno a gás e fritadeiras representa risco de incêndio em gordura que exige hidrante de fácil acesso em segundos. O estacionamento coberto, quando existente, tem carga de incêndio de veículos que eleva o risco desse setor.",
    body2:
      "O ponto mais frequentemente negligenciado em supermercados é o depósito de recebimento — onde caminhões descarregam paletes que ficam empilhados aguardando reposição das gôndolas. Esse setor tem temporariamente carga de incêndio igual a um centro de distribuição, mas raramente tem hidrante posicionado para cobertura efetiva. A IT 22/25 exige que qualquer ponto do depósito esteja a no máximo 30 m de um abrigo de mangueira, independentemente de o setor ser considerado 'temporário'.",
  },
  h2_riscos: {
    heading: "O que reprova o sistema de hidrantes de supermercado na vistoria do CBPMESP",
    intro:
      "Esses 6 problemas são os mais frequentes em supermercados autuados pelo Corpo de Bombeiros em São Paulo.",
    itens: [
      {
        titulo: "Depósito sem cobertura de hidrante",
        desc: "Supermercados que projetam hidrantes apenas para a área de vendas deixam o depósito de recebimento descoberto. A IT 22/25 exige cobertura de 100% da área útil — incluindo depósito, câmaras e áreas de serviço.",
      },
      {
        titulo: "Padaria sem hidrante de acesso rápido",
        desc: "A padaria com forno a gás e fritadeiras é o setor de maior risco de incêndio em supermercado. O abrigo de mangueira mais próximo deve estar a no máximo 5 m de distância de acesso desobstruído — não bloqueado por prateleiras ou equipamentos.",
      },
      {
        titulo: "RTI calculada sem o depósito no pior cenário",
        desc: "RTI que considera apenas a área de vendas subestima o pior cenário. Com o depósito cheio de paletes recebidos no dia, a carga de incêndio real pode ser até 4× maior do que a calculada só para as gôndolas.",
      },
      {
        titulo: "Bomba sem acionamento automático em operação noturna",
        desc: "Supermercados que operam 24h (ou que têm pessoal de reposição noturna) precisam de bomba com acionamento automático por pressostato. Sistema com acionamento manual depende de funcionário disponível às 3h da manhã.",
      },
      {
        titulo: "Siamês obstruído por carrinhos ou displays",
        desc: "O siamês de recalque externo deve estar permanentemente acessível. Supermercados frequentemente posicionam racks de carrinho ou displays de promoção na frente do siamês — obstrução que é Comunique-se automático na vistoria.",
      },
      {
        titulo: "Mangueiras sem certificação em setores de umidade alta",
        desc: "Mangueiras próximas à câmara fria e à área de açougue sofrem desgaste acelerado por umidade. A manutenção semestral é obrigatória — mas a inspeção deve ser mais frequente nessas áreas pela exposição contínua à umidade.",
      },
    ],
  },
  h2_processo: {
    heading: "Como a DRD2 executa o sistema de hidrantes para supermercado",
    etapas: [
      {
        numero: "ETAPA 01",
        titulo: "Levantamento por setor",
        desc: "Mapeamento de todos os setores: área de vendas (gôndolas), padaria, açougue, peixaria, câmara de frios, câmara de congelados, depósito de recebimento, área de carga/descarga e estacionamento.",
      },
      {
        numero: "ETAPA 02",
        titulo: "Cálculo da RTI pelo pior cenário",
        desc: "RTI calculada para combate simultâneo no depósito (pior carga de incêndio) e na padaria (maior frequência de incêndio). Esse é o dimensionamento correto para supermercados com operação diversificada.",
      },
      {
        numero: "ETAPA 03",
        titulo: "Projeto com bomba de recalque",
        desc: "Dimensionamento de bomba principal, jockey e reserva para garantir pressão mínima no depósito (ponto mais desfavorecido) com acionamento automático por pressostato.",
      },
      {
        numero: "ETAPA 04",
        titulo: "Posicionamento de abrigos por setor",
        desc: "Abrigos posicionados para cobertura de 30 m em todos os setores, com atenção especial à padaria (máximo 5 m de acesso desobstruído) e ao depósito de recebimento.",
      },
      {
        numero: "ETAPA 05",
        titulo: "Testes de pressão em todos os setores",
        desc: "Teste de pressão e vazão no depósito (ponto mais desfavorecido), padaria, câmaras e área de vendas. Acionamento automático da bomba e verificação do siamês com acoplamento CBPMESP.",
      },
      {
        numero: "ETAPA 06",
        titulo: "Laudo com ART para AVCB",
        desc: "ART de projeto e ART de execução CREA-SP. Laudo técnico com memorial de cálculo por setor e documentação pronta para protocolo no CBPMESP.",
      },
    ],
  },
  h2_detalhes: {
    heading: "O que a IT 22/25 exige para hidrantes em supermercados",
    body1:
      "Supermercados são Grupo C-2 na IT 22/25. O projeto precisa cobrir todos os setores — não apenas a área de vendas — com RTI calculada para o pior cenário de ocupação simultânea.",
    alerta:
      "Reforma que altere o layout do depósito, instalação de nova câmara fria ou ampliação da padaria exige atualização do projeto de hidrantes com nova ART antes do início das obras.",
    itens: [
      {
        titulo: "Cobertura obrigatória do depósito de recebimento",
        desc: "Qualquer ponto do depósito deve estar a no máximo 30 m de um abrigo de mangueira com mangueira de comprimento adequado. O depósito é frequentemente o setor mais crítico e mais negligenciado.",
      },
      {
        titulo: "Abrigo de acesso rápido na padaria",
        desc: "A padaria deve ter abrigo de mangueira a no máximo 5 m de distância de acesso desobstruído — sem necessidade de passar pela área de vendas para alcançar o equipamento de combate.",
      },
      {
        titulo: "Siamês externo permanentemente acessível",
        desc: "O siamês deve estar na fachada externa, acessível ao caminhão do CBPMESP sem dependência de abrir portão ou remover obstáculos. Supermercados devem instruir equipe de loja a manter a área desimpedida.",
      },
      {
        titulo: "Manutenção semestral documentada",
        desc: "Contrato de manutenção com empresa habilitada é exigência formal da IT 22/25. Supermercados que realizam manutenção com equipe própria sem contrato formalizado estão em não-conformidade.",
      },
    ],
    closing:
      "A DRD2 realiza levantamento técnico gratuito do supermercado, mapeia todos os setores e apresenta proposta de adequação com laudo aceito pelo CBPMESP na primeira vistoria.",
  },
  h2_quando: {
    heading: "Quando revisar o sistema de hidrantes do supermercado?",
    body1:
      "A manutenção semestral é obrigatória. O laudo com ART deve ser emitido anualmente para renovação do AVCB. Revisão imediata após qualquer reforma de layout, ampliação de padaria, instalação de nova câmara fria ou troca de bomba.",
    body2:
      "Situações urgentes: Comunique-se do CBPMESP sobre hidrantes, queda de pressão no depósito, incidente na padaria que acionou o sistema, reforma que alterou o acesso ao siamês ou ao abrigo de mangueira da padaria.",
  },
  h2_escolher: {
    heading: "Por que a DRD2 para o sistema de hidrantes do seu supermercado?",
    body1:
      "A DRD2 tem experiência em sistemas de hidrantes para supermercados, hipermercados e atacarejos em São Paulo. Cada projeto cobre todos os setores — não apenas a área de vendas — e dimensiona a RTI para o pior cenário real de operação.",
    body2:
      "Processo completo sem terceiros: levantamento, projeto, instalação, testes e laudo. A execução é planejada fora do horário de maior movimento, com mínimo impacto no atendimento ao cliente.",
  },
  h2_cobertura: {
    heading: "Sistemas de hidrante para supermercado em toda a Grande SP",
    body1:
      "A DRD2 atende supermercados, hipermercados e atacarejos em toda a Grande São Paulo: capital, ABC, Guarulhos, Campinas, Osasco, São José dos Campos e municípios da região metropolitana.",
    body2:
      "Para supermercados fora da Grande SP, realizamos visita técnica com agenda específica. Diagnóstico inicial por videochamada com análise das plantas e fotos do sistema atual.",
  },
  faqs: [
    {
      question: "Supermercado é obrigado a ter sistema de hidrantes em SP?",
      answer:
        "Sim. Supermercados são Grupo C-2 (comércio varejista de grande porte) pela IT 22/25 — obrigados a ter sistema de hidrantes como condição para o AVCB. A obrigatoriedade depende da área total, mas a maioria dos supermercados em SP se enquadra na exigência.",
    },
    {
      question: "O depósito do supermercado precisa de hidrante próprio?",
      answer:
        "Sim. A IT 22/25 exige cobertura de todos os setores — incluindo o depósito de recebimento. Qualquer ponto do depósito deve estar a no máximo 30 m de um abrigo de mangueira com mangueira de comprimento adequado.",
    },
    {
      question: "A padaria do supermercado exige algum cuidado especial com o hidrante?",
      answer:
        "Sim. A padaria com forno a gás e fritadeiras é o setor de maior risco de incêndio em supermercado. O abrigo de mangueira mais próximo deve estar a no máximo 5 m de acesso desobstruído — sem precisar percorrer a área de vendas para alcançá-lo.",
    },
    {
      question: "Supermercado que opera 24h precisa de bomba com acionamento automático?",
      answer:
        "Sim. Supermercados com operação noturna ou reposição noturna precisam de bomba com acionamento automático por pressostato. Bomba com acionamento apenas manual depende de um funcionário presente e treinado a qualquer hora da noite.",
    },
    {
      question: "Com que frequência o sistema de hidrantes do supermercado deve ser revisado?",
      answer:
        "Manutenção semestral obrigatória com laudo anual com ART para renovação do AVCB. Nas áreas de câmara fria, açougue e peixaria — onde a umidade é alta — recomendamos inspeção visual trimestral das mangueiras e abrigos.",
    },
  ],
  linksInternos: [
    { href: "/hidrantes", label: "Sistema de Hidrantes em SP" },
    { href: "/alarme-incendio-supermercado-avcb-sp", label: "Alarme de Incêndio para Supermercado" },
    { href: "/sprinkler-supermercado-avcb-sp", label: "Sprinkler para Supermercado" },
    { href: "/avcb-sao-paulo", label: "AVCB em São Paulo" },
    { href: "/manutencao", label: "Manutenção de Sistemas de Incêndio" },
  ],
  ctaFinal: {
    heading: "HIDRANTE PARA SUPERMERCADO — DEPÓSITO + PADARIA + LAUDO AVCB",
    body: "Diagnóstico técnico gratuito. Cobertura de todos os setores conforme IT 22/25. Laudo para AVCB na primeira vistoria.",
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
