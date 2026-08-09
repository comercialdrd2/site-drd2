/**
 * Conteúdo técnico exclusivo por ROTA das páginas de bairro/cidade.
 *
 * A chave é o slug da página final (não o slug do bairro), porque uma mesma
 * entrada de bairro alimenta páginas diferentes conforme o `mode`.
 * Ex.: a entrada "campinas" gera /avcb-campinas e /renovacao-clcb-campinas —
 * indexar por bairro faria as duas receberem o mesmo texto, que é exatamente
 * o que levou o Google a consolidá-las como duplicadas.
 */

export type NeighborhoodDeepDive = {
  heading: string;
  paragraphs: string[];
  itemsHeading: string;
  items: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
};

export const localNeighborhoodDeepDive: Record<string, NeighborhoodDeepDive> = {
  "/renovacao-clcb-campinas": {
    heading: "CLCB em Campinas: por que o regime é diferente do AVCB",
    paragraphs: [
      "O CLCB não é uma versão simplificada do AVCB — é outro regime jurídico. Enquanto o AVCB decorre de análise de projeto técnico e vistoria presencial do Corpo de Bombeiros, o Certificado de Licença do Corpo de Bombeiros é emitido eletronicamente pelo Via Fácil Bombeiros a partir de declaração do responsável pela edificação. Ninguém vai ao imóvel antes de emitir. A conferência acontece depois, em fiscalização, e é aí que o problema aparece.",
      "O enquadramento segue os limites da IT-01 do CBPMESP: edificação de baixo risco, dentro dos tetos de área construída e de altura previstos na instrução. Ocupações específicas ficam de fora independentemente do tamanho — local de reunião de público, estabelecimento de saúde com internação, escola, e ocupações com risco especial exigem AVCB mesmo em imóvel pequeno. Enquadrar como CLCB algo que era AVCB gera um certificado válido na aparência e nulo na fiscalização.",
      "Em Campinas isso tem peso próprio porque o certificado é documento vinculado ao alvará municipal. Uma fiscalização que desqualifica o enquadramento não devolve o processo para correção: ela derruba a licença de funcionamento junto, e o estabelecimento para. O 4º Grupamento de Bombeiros mantém fiscalização ativa na região, com foco no comércio adensado do Cambuí, no Centro e nos corredores da Norte-Sul.",
      "Os distritos têm perfis distintos e problemas distintos. Barão Geraldo concentra comércio de apoio universitário — bares, repúblicas convertidas em serviço, food service com gás — onde a alteração de uso do imóvel raramente foi acompanhada de atualização documental. O Centro tem imóveis antigos com layout modificado várias vezes. Já a região de Sousas e Joaquim Egídio impõe restrições de ocupação por conta da área de proteção ambiental, que interferem no que pode ser executado como adequação.",
    ],
    itemsHeading: "O que trava a renovação de CLCB na região",
    items: [
      {
        title: "Enquadramento incorreto na origem",
        desc: "Imóvel que deveria ser AVCB emitido como CLCB. O certificado existe, mas não resiste a fiscalização — e derruba o alvará municipal junto.",
      },
      {
        title: "Área construída acima do declarado",
        desc: "Mezanino, cobertura de área externa e anexo executados depois da emissão empurram a área para fora do limite de CLCB sem que o responsável perceba.",
      },
      {
        title: "Mudança de ocupação não declarada",
        desc: "Loja que virou bar, escritório que virou clínica. A nova ocupação pode exigir AVCB mesmo mantendo a mesma área.",
      },
      {
        title: "Instalação de GLP em food service",
        desc: "Comércio de alimentação do Cambuí e de Barão Geraldo com central de gás sem memorial e sem teste de estanqueidade é autuação recorrente.",
      },
    ],
    faqs: [
      {
        question: "Qual a diferença entre CLCB e AVCB em Campinas?",
        answer: "A diferença não é local — é de regime. O CLCB é emitido eletronicamente pelo Via Fácil Bombeiros com base em declaração do responsável, para edificações de baixo risco dentro dos limites da IT-01. O AVCB exige análise de projeto técnico e vistoria presencial. A regra é estadual e vale igual em Campinas e na capital; o que muda é o grupamento que fiscaliza e a integração com o alvará municipal.",
      },
      {
        question: "Meu imóvel tem CLCB mas fui autuado. Como isso é possível?",
        answer: "Porque o CLCB é declaratório. Ele é emitido sem que ninguém tenha ido ao imóvel, com base no que o responsável informou. Se a fiscalização encontra área maior, ocupação diversa ou risco que não admitia CLCB, o certificado não protege — ao contrário, a declaração incorreta é o próprio fundamento da autuação.",
      },
      {
        question: "Perder o CLCB derruba o alvará de funcionamento?",
        answer: "Na prática, sim. O certificado do Corpo de Bombeiros é documento vinculado à licença municipal de funcionamento. Sem ele regular, o alvará fica insubsistente, e o estabelecimento é notificado a interromper a atividade até regularizar. Por isso o custo de um enquadramento errado não é a taxa de reemissão, e sim o tempo de operação parada.",
      },
      {
        question: "Quanto tempo leva para renovar o CLCB?",
        answer: "A emissão em si é rápida, porque é eletrônica. O prazo real é o da adequação anterior: conferir enquadramento, medir a área construída atual, verificar se a ocupação declarada corresponde à atividade exercida, regularizar extintores, sinalização, iluminação de emergência e instalação de gás, e emitir as ARTs. É esse levantamento, e não o sistema, que define o prazo.",
      },
    ],
  },

  "/avcb-guarulhos-maia": {
    heading: "Parque Maia: o padrão de acabamento contra a certificação da porta",
    paragraphs: [
      "O Parque Maia concentra a verticalização de alto padrão de Guarulhos, e é justamente o acabamento que gera a não conformidade mais recorrente da região. A porta corta-fogo é um conjunto certificado: folha, marco, dobradiça, fechadura, mola e barra antipânico foram ensaiados juntos, e o desempenho vale para aquela composição. Revestir a folha com madeira, laminado ou espelho para harmonizar com o hall descaracteriza o conjunto e anula a certificação — a porta continua parecendo uma porta corta-fogo, mas não responde mais como tal.",
      "O segundo item típico do Maia é o hall privativo. Empreendimentos de um ou dois apartamentos por andar entregam o hall como área comum, e o morador o incorpora ao apartamento: fecha com porta, coloca mobiliário, transforma em jardim de inverno. A rota de fuga muda de configuração, a distância a percorrer até a escada é alterada e a área comum que constava do projeto aprovado deixa de existir. Em vistoria, isso aparece como divergência entre o projeto e a edificação.",
      "Há ainda o conjunto de instalações de lazer que caracteriza o padrão da região: churrasqueira a gás em terraço coletivo, aquecimento de piscina por caldeira, adega climatizada e espaços gourmet nas coberturas. Cada ponto de gás combustível exige memorial e teste de estanqueidade, e a central de GLP precisa de distanciamento e ventilação conforme a norma — item que costuma ser resolvido na entrega e nunca mais revisado.",
      "Do lado documental, Guarulhos é município próprio: o AVCB é estadual e tramita no Corpo de Bombeiros, mas a licença de funcionamento e a regularização edilícia correm na Prefeitura de Guarulhos, com exigências próprias. Condomínio que ampliou área de lazer ou fechou terraço sem regularizar na Prefeitura chega ao processo de AVCB com divergência entre a planta aprovada e a edificação real.",
    ],
    itemsHeading: "Não conformidades típicas dos condomínios do Maia",
    items: [
      {
        title: "Porta corta-fogo revestida",
        desc: "Madeira, laminado ou espelho aplicados sobre a folha descaracterizam o conjunto certificado. Há solução estética compatível, mas ela precisa ser especificada.",
      },
      {
        title: "Hall privativo incorporado à unidade",
        desc: "Fechamento do hall altera a rota de fuga e suprime área comum prevista no projeto aprovado. É divergência direta em vistoria.",
      },
      {
        title: "Gás combustível nas áreas de lazer",
        desc: "Churrasqueira, caldeira de piscina e espaço gourmet exigem memorial de gás, teste de estanqueidade e central de GLP conforme norma.",
      },
      {
        title: "Divergência com a planta da Prefeitura",
        desc: "Terraço fechado ou lazer ampliado sem regularização municipal cria descompasso entre o aprovado e o construído que aparece no processo de AVCB.",
      },
    ],
    faqs: [
      {
        question: "Posso revestir a porta corta-fogo para combinar com o hall?",
        answer: "Não da forma convencional. A porta corta-fogo é certificada como conjunto — folha, marco, ferragens e acessórios ensaiados juntos. Aplicar revestimento sobre a folha altera o conjunto e invalida a certificação. Existem alternativas compatíveis, como porta certificada já com acabamento de fábrica ou tratamento retardante especificado por responsável técnico, mas a escolha precisa ser feita antes da execução, não depois.",
      },
      {
        question: "O morador pode fechar o hall privativo do andar?",
        answer: "Depende do que o projeto aprovado prevê. Quando o hall consta como área comum e faz parte da rota de fuga, o fechamento altera a configuração aprovada e é apontado em vistoria. Mesmo quando há previsão de uso privativo, a alteração precisa preservar a largura de circulação, a distância máxima a percorrer até a escada e o acesso à porta corta-fogo.",
      },
      {
        question: "AVCB em Guarulhos é diferente do AVCB da capital?",
        answer: "O AVCB é estadual e segue as mesmas instruções técnicas do CBPMESP em todo o estado. O que muda é o comando que atende a região e, principalmente, a interface municipal: em Guarulhos, a licença de funcionamento e a regularização edilícia tramitam na Prefeitura de Guarulhos, com exigências próprias que precisam estar resolvidas para o conjunto documental fechar.",
      },
      {
        question: "Condomínio de alto padrão tem exigência diferente?",
        answer: "A norma é a mesma; o que muda é o tipo de não conformidade. Em empreendimento de padrão elevado, os problemas raramente são falta de sistema — são alterações feitas por questão estética ou de conforto: porta revestida, grelha fechada, hall incorporado, sinalização substituída por peça de design que não atende à norma de fotoluminescência.",
      },
    ],
  },

  "/renovacao-avcb-condominio-agua-branca": {
    heading: "Condomínio-clube na Água Branca: renovar AVCB de um empreendimento multiuso",
    paragraphs: [
      "Os empreendimentos da Água Branca nasceram de reconversão de glebas industriais, e isso produziu uma tipologia específica: várias torres residenciais sobre um embasamento comum, com área de lazer do porte de um clube. Do ponto de vista de segurança contra incêndio, o condomínio deixa de ser uma edificação residencial e passa a ser um conjunto multiuso — residencial nas torres, reunião de público no salão de festas e no teatro, e estacionamento coletivo no subsolo, cada um com exigência própria.",
      "A consequência prática aparece na renovação. O salão de festas e o espaço multiuso são áreas de reunião de público, e como tal têm cálculo de lotação, exigência de portas com barra antipânico abrindo no sentido do fluxo, iluminação de emergência dimensionada para multidão e sinalização compatível. É o ponto mais reprovado nesses condomínios, porque o salão foi entregue como área de lazer e é tratado pela administração como área de lazer — não como local de reunião de público.",
      "O subsolo de estacionamento é o segundo foco. Nesses empreendimentos ele costuma ser extenso e contínuo sob todas as torres, o que exige controle de fumaça, sinalização de rota em piso e paredes, e hidrantes distribuídos com pressão verificada em todos os pontos. Como a reserva técnica de incêndio é compartilhada entre as torres, um vazamento em qualquer trecho da rede reduz a pressão do conjunto — e o ensaio no ponto mais desfavorável é o que reprova.",
      "Para o síndico e a administradora, a renovação de um empreendimento assim é um processo de coordenação, não um documento. Envolve levantamento em torres com padrões construtivos ligeiramente diferentes, laudos independentes de SPDA, elétrica e gás, verificação de extintores por classe correta em cada ambiente — incluindo os de CO2 das casas de máquinas e da subestação, que costumam estar sem carga — e programação de adequações que não pode inviabilizar a operação do condomínio.",
    ],
    itemsHeading: "Frentes da renovação em condomínio-clube",
    items: [
      {
        title: "Salão de festas como reunião de público",
        desc: "Cálculo de lotação, barra antipânico com abertura no sentido do fluxo e iluminação dimensionada para multidão. É onde mais se reprova.",
      },
      {
        title: "Reserva técnica compartilhada",
        desc: "RTI única para várias torres: vazamento em um trecho derruba a pressão do conjunto. O ensaio precisa ser feito no ponto mais desfavorável.",
      },
      {
        title: "Subsolo contínuo sob as torres",
        desc: "Estacionamento extenso exige controle de fumaça, sinalização de rota no piso e distribuição de hidrantes com pressão verificada em toda a extensão.",
      },
      {
        title: "Extintores de CO2 sem carga",
        desc: "Os das casas de máquinas, subestação e sala de bombas raramente entram na rotina de recarga porque ficam fora da circulação dos moradores.",
      },
    ],
    faqs: [
      {
        question: "O salão de festas do condomínio precisa de cálculo de lotação?",
        answer: "Precisa. Salão de festas, espaço multiuso e teatro interno são locais de reunião de público, com exigências próprias mesmo dentro de um condomínio residencial: lotação calculada, número e largura de saídas compatíveis, portas com barra antipânico abrindo no sentido do fluxo de saída e iluminação de emergência dimensionada para a densidade de ocupação.",
      },
      {
        question: "Várias torres precisam de AVCB separado?",
        answer: "Depende de como a edificação foi aprovada. Empreendimentos com embasamento e áreas comuns integradas costumam ser tratados como um conjunto único, com um processo. O que não muda é o escopo do levantamento: cada torre precisa ser verificada individualmente, porque prumadas, sistemas e histórico de manutenção podem divergir entre elas.",
      },
      {
        question: "Como testar hidrantes com a reserva compartilhada entre torres?",
        answer: "O ensaio é feito no ponto hidraulicamente mais desfavorável do sistema — normalmente o hidrante mais distante e mais alto em relação à casa de bombas. Se ele atende vazão e pressão, os demais tendem a atender. Se não atende, o diagnóstico precisa separar o que é subdimensionamento de bomba do que é perda por vazamento na rede compartilhada.",
      },
      {
        question: "Quanto tempo antes do vencimento devo iniciar a renovação?",
        answer: "Em condomínio-clube, com antecedência bem maior do que em um prédio isolado. O levantamento envolve várias torres, áreas comuns de tipologias diferentes e laudos independentes de SPDA, elétrica e gás. Se a verificação apontar adequação física — porta, barra antipânico, trecho de rede de hidrante — ainda há a etapa de aprovação em assembleia e de contratação da obra antes de pedir a vistoria.",
      },
    ],
  },
};

export function getLocalNeighborhoodDeepDive(slug: string) {
  return localNeighborhoodDeepDive[slug];
}
