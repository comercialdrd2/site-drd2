/**
 * Conteúdo técnico exclusivo por página do cluster de escada pressurizada.
 *
 * Motivo: o PressurizedStairsLanding entrega o mesmo corpo para todas as páginas
 * do cluster, o que fez o Google consolidar várias delas como duplicadas
 * ("Cópia, o Google e o usuário selecionaram uma página canônica diferente").
 * Cada slug abaixo precisa carregar conteúdo que só faz sentido naquela ocupação.
 */

export type EscadaDeepDiveItem = {
  title: string;
  desc: string;
};

export type EscadaDeepDive = {
  heading: string;
  paragraphs: string[];
  itemsHeading: string;
  items: EscadaDeepDiveItem[];
  faqs: { question: string; answer: string }[];
};

export const escadaPressurizadaDeepDive: Record<string, EscadaDeepDive> = {
  "/escada-pressurizada-sao-paulo": {
    heading: "Quando o Corpo de Bombeiros exige escada pressurizada",
    paragraphs: [
      "O tipo de escada de segurança de uma edificação não é escolha do projetista: decorre do cruzamento entre a ocupação e a altura da edificação, conforme a IT-11 do Corpo de Bombeiros do Estado de São Paulo. A instrução define quatro tipos — escada não enclausurada (NE), escada enclausurada protegida (EP), escada à prova de fumaça (PF) e escada à prova de fumaça pressurizada (PFP) — e a tabela da IT indica qual deles é admitido para cada combinação de uso e altura.",
      "A pressurização entra quando a edificação precisa de escada à prova de fumaça mas não tem como executar a antecâmara ventilada naturalmente por duto de entrada e saída de ar. É a situação típica de torres com pouca fachada livre, de implantações em terrenos estreitos e de retrofits em prédios existentes, em que a antecâmara natural exigiria demolição de área útil. Nesses casos, o insuflamento mecânico de ar na caixa da escada substitui a ventilação natural como barreira contra a fumaça.",
      "O dimensionamento segue a NBR 14880. Os parâmetros que a vistoria efetivamente cobra são três: velocidade do ar não inferior a 1,0 m/s através da porta aberta no pavimento sinistrado, diferencial de pressão da ordem de 25 Pa com todas as portas fechadas, e força de abertura da porta limitada a 110 N — porque um sistema com pressão em excesso lacra a porta e inviabiliza o abandono, que é exatamente o efeito contrário ao pretendido.",
      "Por isso um sistema de pressurização não se resolve só com a compra de um ventilador de vazão alta. Ele exige dispositivo de alívio ou controle de rotação para manter a pressão dentro da faixa útil, tomada de ar externo em posição que não recircule fumaça, acionamento automático pela detecção de incêndio, comando manual em local acessível à brigada e alimentação elétrica por fonte alternativa — o sistema tem que funcionar justamente quando a energia da concessionária cai.",
    ],
    itemsHeading: "Os quatro tipos de escada da IT-11",
    items: [
      {
        title: "NE — Escada não enclausurada",
        desc: "Admitida apenas em edificações de baixa altura e ocupações de menor risco. Não tem separação em relação ao pavimento, o que a torna inviável assim que a altura sobe.",
      },
      {
        title: "EP — Escada enclausurada protegida",
        desc: "Caixa isolada por paredes corta-fogo e portas resistentes ao fogo, com ventilação permanente por abertura para o exterior. É a solução mais comum em edifícios de altura intermediária.",
      },
      {
        title: "PF — Escada à prova de fumaça",
        desc: "Acrescenta antecâmara ventilada naturalmente, com dutos de entrada e de saída de ar. Exige fachada e área disponíveis, o que nem toda implantação permite.",
      },
      {
        title: "PFP — Escada à prova de fumaça pressurizada",
        desc: "Dispensa a antecâmara natural ao manter a caixa da escada sob pressão positiva por insuflamento mecânico. É a alternativa técnica quando a PF não é executável.",
      },
    ],
    faqs: [
      {
        question: "Qual a diferença entre escada enclausurada e escada pressurizada?",
        answer: "A escada enclausurada protegida (EP) é isolada por paredes e portas corta-fogo e ventilada por abertura natural para o exterior. A escada à prova de fumaça pressurizada (PFP) vai além: mantém ar insuflado mecanicamente dentro da caixa, criando pressão positiva que impede a fumaça de entrar quando a porta é aberta. A PFP é exigida em alturas e ocupações onde a EP não é mais admitida pela IT-11.",
      },
      {
        question: "Meu prédio já tem antecâmara. Ainda preciso pressurizar?",
        answer: "Não necessariamente. Se a antecâmara é ventilada naturalmente por dutos de entrada e saída de ar, com as dimensões exigidas, a edificação atende como escada à prova de fumaça (PF) e a pressurização é dispensável. A pressurização é o caminho alternativo para quando a antecâmara natural não existe ou não tem como ser executada.",
      },
      {
        question: "O sistema de pressurização precisa de gerador?",
        answer: "Precisa de fonte de alimentação alternativa. Um sistema que depende exclusivamente da rede da concessionária deixa de funcionar no cenário em que é mais necessário, já que o incêndio frequentemente derruba a alimentação do prédio. A solução pode ser grupo gerador ou outra fonte autônoma, dimensionada para sustentar o ventilador durante o tempo de abandono.",
      },
      {
        question: "Pressão demais na escada pode reprovar a vistoria?",
        answer: "Pode, e é uma reprovação frequente. Se a pressão diferencial deixa a força de abertura da porta acima de 110 N, criança, idoso e pessoa com mobilidade reduzida não conseguem abrir a porta para entrar na escada. O sistema precisa de damper de alívio, inversor de frequência ou outro dispositivo de controle para manter a pressão dentro da faixa.",
      },
    ],
  },

  "/escada-pressurizada-hotel-sp": {
    heading: "Pressurização de escada em hotel: o que muda em relação a um prédio residencial",
    paragraphs: [
      "Num condomínio residencial, o morador conhece a rota de fuga, sabe onde fica a porta da escada e já a usou em manutenção de elevador. Num hotel, quem precisa abandonar o pavimento chegou naquele andar há poucas horas, dormia quando o alarme soou e não tem referência espacial nenhuma. Isso muda o peso do sistema: a pressurização deixa de ser redundância e passa a ser a garantia isolada de que a escada continuará utilizável no tempo em que o hóspede leva para encontrá-la.",
      "O segundo ponto crítico é o corredor. Em hotel, as portas das unidades habitacionais abrem diretamente para um corredor longo, geralmente sem ventilação natural, que funciona como reservatório de fumaça. A pressurização da escada precisa ser compatibilizada com o comportamento desse corredor: se o corredor tem exaustão mecânica ou dutos de saída, a interação entre os dois sistemas tem de ser verificada em projeto, porque um sistema pode anular o outro.",
      "Há ainda a classificação da ocupação. Flats, apart-hotéis e condomínios com pool de locação frequentemente foram aprovados como residencial (A-2) e operam como meio de hospedagem (B-1). A divergência entre o uso aprovado e o uso real é uma das causas mais comuns de exigência em vistoria de hotel, porque muda a tabela da IT-11 aplicável e, com ela, o tipo de escada exigido.",
      "Por fim, a operação 24 horas impõe uma restrição prática que não existe em prédio residencial: não há janela em que o hotel esteja vazio. O comissionamento e os ensaios de vazão e pressão precisam ser programados em período de baixa ocupação, com bloqueio de andar negociado com a gerência, e o sistema não pode ser desligado para manutenção sem procedimento alternativo definido com a brigada.",
    ],
    itemsHeading: "Pontos de atenção específicos de meios de hospedagem",
    items: [
      {
        title: "Uso aprovado x uso real",
        desc: "Flat aprovado como A-2 operando como B-1 muda a exigência de escada. Regularizar a classificação antes de investir no sistema evita executar a solução errada.",
      },
      {
        title: "Corredor de unidades habitacionais",
        desc: "Corredor longo e cego acumula fumaça. A interação entre o controle de fumaça do corredor e a pressurização da escada precisa ser verificada em conjunto, não isoladamente.",
      },
      {
        title: "Brigada reduzida no turno noturno",
        desc: "À noite o hotel opera com equipe mínima. O acionamento automático pela detecção assume a função que, de dia, a brigada faria manualmente.",
      },
      {
        title: "Ensaio com hotel ocupado",
        desc: "Medição de vazão e pressão exige abrir portas em pavimentos de hóspede. Programação em baixa ocupação e comunicação prévia à recepção evitam interrupção do ensaio pela metade.",
      },
    ],
    faqs: [
      {
        question: "Hotel precisa de escada pressurizada?",
        answer: "Depende da altura da edificação e da classificação da ocupação na IT-11. Meios de hospedagem (grupo B) têm exigência mais restritiva do que residencial, porque o usuário não conhece a rota de fuga. Em torres de hotel acima da altura em que a IT deixa de admitir escada enclausurada protegida, a saída é escada à prova de fumaça — natural ou pressurizada.",
      },
      {
        question: "Meu flat foi aprovado como residencial mas opera como hotel. Isso é problema?",
        answer: "É um dos problemas mais frequentes em vistoria de meio de hospedagem. A divergência entre uso aprovado e uso real muda a tabela aplicável da IT-11 e pode alterar o tipo de escada exigido. Antes de dimensionar qualquer sistema, é preciso definir sob qual ocupação a edificação será regularizada, porque isso determina o investimento.",
      },
      {
        question: "É possível testar o sistema sem fechar o hotel?",
        answer: "Sim. O ensaio é feito por pavimento, em período de baixa ocupação, bloqueando temporariamente o andar em teste junto à governança. Não é necessário interromper a operação do hotel, mas é necessário programar com antecedência, porque a medição exige manter portas abertas em posições específicas.",
      },
      {
        question: "O sistema de ar-condicionado do hotel interfere na pressurização?",
        answer: "Pode interferir. Sistemas centrais que insuflam ou retornam ar nos corredores alteram o equilíbrio de pressão entre corredor, unidade habitacional e escada. Em projeto, o intertravamento do ar-condicionado com o alarme de incêndio precisa estar definido, para que o sistema de climatização não continue empurrando fumaça enquanto a escada é pressurizada.",
      },
    ],
  },

  "/escada-pressurizada-condominio-sp": {
    heading: "Escada pressurizada em condomínio: o sistema existe, mas funciona?",
    paragraphs: [
      "Na maior parte dos condomínios verticais de São Paulo entregues nas últimas duas décadas, o sistema de pressurização foi instalado pela construtora e entregue junto com o empreendimento. O problema quase nunca é ausência do sistema — é ausência de comprovação de que ele ainda atende. Ventilador na cobertura sem partir há anos, quadro de comando desenergizado, damper travado por corrosão e tomada de ar obstruída são achados de rotina em primeira visita técnica.",
      "O segundo grupo de não conformidades vem do uso cotidiano do prédio. Porta corta-fogo escorada aberta durante mudança, grelha de insuflamento fechada por morador que reclamou de corrente de ar ou ruído, patamar da escada usado como depósito de material de obra e batente desalinhado que impede o fechamento completo da folha. Nenhum desses itens aparece no projeto, e todos comprometem o desempenho medido em vistoria.",
      "Para o síndico, a decisão tem componente financeiro e jurídico. O laudo do sistema de pressurização é documento exigido na renovação do AVCB, e a renovação vencida expõe o condomínio a autuação, dificuldade de renovar seguro predial e questionamento de responsabilidade em caso de sinistro. Como a obra de adequação normalmente vai a rateio ou fundo de reserva, o levantamento técnico precedente é o que permite levar número fechado à assembleia em vez de estimativa.",
      "O caminho que reduz custo é diagnosticar antes de contratar obra. Boa parte dos sistemas reprovados em ensaio não precisa de ventilador novo: precisa de regulagem de rotação, recuperação de damper de alívio, vedação de duto com vazamento, ajuste de mola de porta e religamento correto do acionamento automático pela central de alarme.",
    ],
    itemsHeading: "Achados recorrentes em condomínio residencial",
    items: [
      {
        title: "Sistema nunca comissionado",
        desc: "Entregue pela construtora e jamais ensaiado. Sem registro de vazão e pressão, não há como comprovar desempenho na renovação do AVCB.",
      },
      {
        title: "Porta corta-fogo escorada",
        desc: "Prática comum em dia de mudança. Com a porta travada aberta, a caixa da escada não sustenta pressão e o sistema não atinge o diferencial exigido.",
      },
      {
        title: "Grelha fechada por morador",
        desc: "Reclamação de ruído ou corrente de ar leva ao fechamento da grelha de insuflamento no pavimento — anulando a pressurização exatamente onde ela seria necessária.",
      },
      {
        title: "Acionamento desconectado do alarme",
        desc: "Após manutenção da central de incêndio, o comando automático do ventilador às vezes não é religado. O sistema só parte no botão manual, o que a vistoria reprova.",
      },
    ],
    faqs: [
      {
        question: "De quanto em quanto tempo o condomínio precisa ensaiar a escada pressurizada?",
        answer: "O ensaio de desempenho acompanha o ciclo de renovação do AVCB, porque é o laudo que instrui o processo. Independentemente disso, a boa prática é manutenção preventiva anual do conjunto — ventilador, quadro de comando, dampers e portas — já que os componentes mecânicos degradam mesmo sem uso, e o sistema costuma passar o ano inteiro parado.",
      },
      {
        question: "O síndico responde se o sistema não funcionar?",
        answer: "O síndico responde pela conservação das áreas comuns e pela manutenção dos sistemas de segurança do condomínio. Sistema de pressurização inoperante, com laudo vencido ou com não conformidade conhecida e não sanada é elemento que costuma ser levantado em apuração de responsabilidade após sinistro, além de comprometer a cobertura do seguro predial.",
      },
      {
        question: "Dá para adequar sem trocar o ventilador?",
        answer: "Na maioria dos casos, sim. Reprovação em ensaio nem sempre significa equipamento subdimensionado — com frequência decorre de vazamento em duto, damper de alívio travado, porta que não veda, rotação mal ajustada ou acionamento desligado. O diagnóstico é o que separa o ajuste de baixo custo da troca de equipamento.",
      },
      {
        question: "Quanto custa regularizar a escada pressurizada de um condomínio?",
        answer: "O valor depende da altura da torre, do número de pavimentos, do estado do sistema instalado e de haver ou não projeto aprovado anterior. A diferença entre um ajuste de regulagem e a substituição do conjunto de insuflamento é grande, e só o levantamento em campo permite fechar número para apresentar em assembleia.",
      },
    ],
  },

  "/escada-pressurizada-edificio-comercial-sp": {
    heading: "Torre corporativa: rotatividade de locatários contra a rota de fuga",
    paragraphs: [
      "O que caracteriza o edifício comercial não é a altura — é a frequência com que o interior muda. Cada troca de locatário traz obra de layout, e cada obra de layout tem potencial de alterar a rota de fuga: divisória nova estreitando o corredor de acesso à escada, porta de acesso reposicionada, sinalização removida e não recolocada, e antecâmara transformada em área de apoio. A edificação aprovada e a edificação real vão se distanciando andar a andar.",
      "O sistema de climatização é o segundo fator específico dessa tipologia. Torres corporativas operam com ar-condicionado central de grande capacidade, com insuflamento e retorno por pavimento. Esse sistema movimenta volumes de ar muito superiores aos da pressurização da escada e, se não for intertravado com a central de detecção para desligar ou reverter em caso de incêndio, compete diretamente com o controle de fumaça — e vence.",
      "Um terceiro problema aparece na operação predial: a caixa da escada como área de estoque. Como é o único espaço do andar sem locatário definido, patamares acumulam mobiliário desmontado, caixa de mudança e material de obra. Além de obstruir a largura útil, o material adiciona carga de incêndio dentro da própria rota de fuga.",
      "A regularização em prédio comercial ocupado tem restrição de janela: o ensaio precisa acontecer fora do horário comercial ou em fim de semana, com acesso liberado pela administração predial a todos os pavimentos simultaneamente. Levantamento parcial, feito só nos andares que estavam abertos, não sustenta o laudo.",
    ],
    itemsHeading: "O que verificar em edifício comercial multiusuário",
    items: [
      {
        title: "Layout aprovado x layout instalado",
        desc: "Obra de locatário altera corredor, porta e sinalização. A divergência acumulada entre o projeto aprovado e o pavimento real é o achado mais comum.",
      },
      {
        title: "Intertravamento com o ar-condicionado central",
        desc: "O sistema de climatização precisa desligar ou reverter no acionamento do alarme. Sem isso, o HVAC distribui fumaça enquanto a escada tenta se pressurizar.",
      },
      {
        title: "Escada usada como depósito",
        desc: "Patamar com material estocado reduz a largura útil da rota e adiciona carga de incêndio dentro da caixa da escada.",
      },
      {
        title: "Acesso simultâneo a todos os pavimentos",
        desc: "O ensaio exige abrir portas em posições determinadas ao mesmo tempo. Sem liberação de acesso a todos os andares, a medição não fecha.",
      },
    ],
    faqs: [
      {
        question: "Obra de locatário pode invalidar o AVCB da torre?",
        answer: "Pode. O AVCB é emitido para a edificação conforme projeto aprovado. Alteração de layout que modifique rota de fuga, largura de corredor, posição de porta de acesso à escada ou lotação do pavimento afasta a edificação do que foi aprovado, e essa divergência é verificada em vistoria de renovação.",
      },
      {
        question: "Quem responde pela escada: o condomínio ou o locatário?",
        answer: "A caixa da escada, o sistema de pressurização e as portas corta-fogo são área comum, sob responsabilidade do condomínio ou do proprietário do edifício. Já a obra interna que altera a rota de acesso a essa escada é responsabilidade do locatário que a executou. Na prática, a administração predial precisa condicionar a aprovação de obra de locatário à verificação da rota.",
      },
      {
        question: "O ar-condicionado precisa desligar em caso de incêndio?",
        answer: "O sistema de climatização precisa ter comportamento definido em projeto e intertravado com a central de detecção — desligamento, reversão para exaustão ou operação em modo de controle de fumaça, conforme a solução adotada. O que não pode é continuar operando em modo normal, porque aí ele distribui fumaça pelos dutos entre pavimentos.",
      },
      {
        question: "Dá para fazer o ensaio em horário comercial?",
        answer: "Tecnicamente é possível, mas inviável na prática. A medição exige manter portas de escada abertas em pavimentos específicos e provoca variação de pressão perceptível nos andares. O ensaio é normalmente programado para noite ou fim de semana, com liberação prévia de acesso pela administração predial.",
      },
    ],
  },

  "/escada-pressurizada-galpao-industrial-sp": {
    heading: "Galpão e centro de distribuição: onde a escada pressurizada realmente aparece",
    paragraphs: [
      "Galpão de pavimento único não tem escada de segurança — o abandono é horizontal, direto para o exterior. A exigência de escada pressurizada em ocupação industrial e de depósito aparece em três situações específicas: no bloco administrativo verticalizado anexo ao galpão, em centros de distribuição com mezaninos operacionais em múltiplos níveis, e em torres de escada de estruturas altas como silos, casas de máquinas elevadas e edifícios de processo.",
      "Nessas configurações, o fator que muda tudo em relação a um prédio residencial é a carga de incêndio. Depósito de material combustível, embalagem plástica, papelão, aerossol e produto químico produzem volume de fumaça e taxa de liberação de calor em outra ordem de grandeza. A caixa da escada que serve o mezanino recebe essa fumaça por qualquer fresta, e o diferencial de pressão precisa ser mantido contra uma pressão de fumaça bem maior do que a de um incêndio de mobiliário residencial.",
      "A geometria também trabalha contra. Pé-direito grande gera efeito de empuxo térmico acentuado, e a estratificação da fumaça no volume superior do galpão pode alcançar a tomada de ar externo do sistema de pressurização se ela estiver mal posicionada. Um sistema com captação em cota alta na fachada, sem análise da pluma, corre o risco de insuflar fumaça dentro da escada.",
      "Do lado operacional, o achado mais frequente em CD é a obstrução: porta corta-fogo da escada bloqueada por porta-palete, corredor de acesso tomado por posição de estocagem criada fora do layout aprovado e sinalização de rota encoberta por rack. Como a operação logística reorganiza o piso conforme a demanda, o layout de armazenagem precisa entrar na verificação junto com o sistema mecânico.",
    ],
    itemsHeading: "Configurações industriais que exigem análise",
    items: [
      {
        title: "Bloco administrativo verticalizado",
        desc: "O escritório anexo ao galpão é a estrutura que normalmente dispara a exigência, por altura e por ocupação distinta da área de armazenagem.",
      },
      {
        title: "Mezanino operacional em múltiplos níveis",
        desc: "CD com dois ou três níveis de picking cria circulação vertical permanente de pessoas, sujeita a exigência de escada protegida.",
      },
      {
        title: "Carga de incêndio da armazenagem",
        desc: "Material combustível estocado em altura muda a pressão de fumaça contra a qual o sistema tem de trabalhar. O dimensionamento residencial não se transporta para cá.",
      },
      {
        title: "Posição da tomada de ar externo",
        desc: "Em pé-direito alto, a fumaça estratifica na cota superior. Captação mal posicionada pode insuflar fumaça na escada em vez de ar limpo.",
      },
    ],
    faqs: [
      {
        question: "Galpão precisa de escada pressurizada?",
        answer: "O galpão em si, de pavimento único e abandono horizontal, não. A exigência aparece no bloco administrativo verticalizado, em centros de distribuição com mezaninos em múltiplos níveis e em torres de escada de estruturas altas de processo. O que define é a altura e a ocupação da estrutura que contém a escada, não a área do galpão.",
      },
      {
        question: "A carga de incêndio do estoque muda o dimensionamento?",
        answer: "Muda a condição de contorno. Armazenagem de material combustível em altura gera volume de fumaça e pressão térmica muito superiores aos de uma ocupação residencial ou de escritório. O sistema precisa sustentar o diferencial de pressão contra essa condição, o que afeta vazão, vedação de duto e posicionamento da captação de ar.",
      },
      {
        question: "Mudança de layout de armazenagem afeta o AVCB?",
        answer: "Afeta. Posição de estocagem criada fora do layout aprovado que obstrua porta de escada, reduza corredor de circulação ou encubra sinalização de rota é não conformidade direta em vistoria. Em operação logística, que reorganiza o piso conforme a demanda, isso precisa entrar no procedimento interno e não só na inspeção anual.",
      },
      {
        question: "Onde deve ficar a captação de ar do sistema?",
        answer: "Em posição que garanta ar livre de fumaça durante todo o evento. Em edificação de pé-direito alto, isso exige avaliar onde a fumaça vai estratificar e por onde ela sai da edificação, para que a tomada de ar não fique na trajetória da pluma nem próxima a aberturas de exaustão.",
      },
    ],
  },

  "/escada-pressurizada-hospital-sp": {
    heading: "Hospital: abandono horizontal, paciente acamado e sistema que não pode falhar",
    paragraphs: [
      "A estratégia de abandono em estabelecimento de saúde é distinta de qualquer outra ocupação. Paciente em UTI, em centro cirúrgico ou acamado em enfermaria não desce escada. A doutrina de projeto é o abandono horizontal: compartimentar o pavimento em setores, transferir o paciente para o setor adjacente protegido e só então, se necessário, promover a movimentação vertical. A escada de segurança serve à equipe, aos pacientes deambulantes e ao acesso do socorro — e precisa permanecer utilizável por um tempo muito maior do que em um prédio residencial.",
      "Isso impõe duas consequências dimensionais. A primeira é a largura: a porta de acesso à escada e os patamares precisam comportar a passagem de maca e de cadeira de rodas, com espaço de manobra no giro entre lances. A segunda é a duração: como o processo de evacuação assistida leva muito mais tempo do que um abandono convencional, a autonomia da fonte alternativa de alimentação do ventilador tem que ser compatível com esse tempo estendido.",
      "O hospital é também a ocupação em que a pressurização da escada interage com outros sistemas de pressão controlada da edificação. Centro cirúrgico opera em pressão positiva, quarto de isolamento respiratório em pressão negativa, e farmácia de manipulação e CME têm requisitos próprios. A pressurização da escada precisa ser projetada considerando esse conjunto, porque o balanço de pressão entre setores não é indiferente ao insuflamento de um volume grande de ar na circulação vertical.",
      "Do ponto de vista de execução, a obra de adequação em hospital em funcionamento tem restrição severa: não há como interditar circulação vertical de um bloco assistencial sem plano de contingência acordado com a direção clínica, com a CCIH quando houver geração de particulado, e com o setor de engenharia clínica quando o desligamento elétrico afetar equipamento de suporte à vida.",
    ],
    itemsHeading: "Requisitos próprios de estabelecimento assistencial de saúde",
    items: [
      {
        title: "Compartimentação para abandono horizontal",
        desc: "O pavimento precisa estar setorizado com área de refúgio, porque o paciente acamado é transferido lateralmente antes de qualquer movimentação vertical.",
      },
      {
        title: "Largura para maca e cadeira de rodas",
        desc: "Porta de acesso, patamar e giro entre lances precisam comportar a passagem e a manobra de maca — dimensão que a escada residencial não atende.",
      },
      {
        title: "Autonomia estendida da alimentação",
        desc: "Evacuação assistida leva muito mais tempo. A fonte alternativa que sustenta o ventilador precisa ser dimensionada para esse tempo, não para o de um abandono convencional.",
      },
      {
        title: "Balanço com áreas de pressão controlada",
        desc: "Centro cirúrgico, isolamento e CME operam com pressão definida. O insuflamento na escada entra nesse balanço e precisa ser considerado em projeto.",
      },
    ],
    faqs: [
      {
        question: "Por que hospital tem exigência diferente das demais ocupações?",
        answer: "Porque a população não é autônoma. Paciente acamado, sedado, em procedimento cirúrgico ou em suporte ventilatório não realiza abandono por conta própria. Toda a estratégia de segurança contra incêndio em estabelecimento de saúde é construída sobre compartimentação e abandono horizontal assistido, o que estende o tempo em que os sistemas de proteção precisam permanecer operantes.",
      },
      {
        question: "O que é área de refúgio e por que ela importa aqui?",
        answer: "É o setor do pavimento, separado por compartimentação corta-fogo, para onde os pacientes são transferidos quando o setor vizinho é atingido. Ela permite proteger quem não pode ser movimentado verticalmente. Sem compartimentação adequada, a estratégia de abandono horizontal não se sustenta e toda a carga recai sobre a escada.",
      },
      {
        question: "A pressurização da escada interfere no centro cirúrgico?",
        answer: "Pode interferir no balanço de pressão da edificação. Salas cirúrgicas operam em pressão positiva em relação à circulação, e quartos de isolamento respiratório em pressão negativa. Insuflar um volume grande de ar na caixa da escada altera as diferenças de pressão nas circulações adjacentes, e esse efeito precisa ser avaliado em conjunto com o projeto de climatização.",
      },
      {
        question: "Como executar a adequação com o hospital funcionando?",
        answer: "Por etapas, com plano de contingência formalizado. A interdição de uma circulação vertical em bloco assistencial exige rota alternativa definida, alinhamento com a direção clínica, controle de particulado junto à CCIH quando houver demolição, e programação com a engenharia clínica sempre que o desligamento elétrico puder afetar equipamento de suporte à vida.",
      },
    ],
  },

  "/escada-pressurizada-shopping-sp": {
    heading: "Shopping center: público flutuante e controle de fumaça integrado",
    paragraphs: [
      "O shopping reúne a pior combinação possível para abandono: densidade de público alta, permanência curta, e nenhum conhecimento prévio da rota de fuga. O visitante entrou pelo estacionamento, subiu de escada rolante e não sabe onde está a escada de segurança — que, por definição de projeto comercial, fica em posição discreta, fora do fluxo de vitrine. A sinalização e a pressurização carregam, juntas, a função que em outros edifícios é dividida com a familiaridade do usuário.",
      "A segunda particularidade é que a pressurização da escada não é um sistema isolado: ela é uma peça do controle de fumaça do empreendimento. O mall central costuma operar com exaustão mecânica ou com aberturas de alívio na cobertura, dimensionadas para manter a camada de fumaça acima da altura das pessoas. Esse sistema movimenta volumes de ar grandes e altera a pressão do mall — e a escada, que precisa manter pressão positiva em relação a ele, tem de ser dimensionada contra essa referência variável, não contra a pressão atmosférica.",
      "A praça de alimentação acrescenta carga de incêndio concentrada e instalação de gás combustível, com risco distinto do restante da área bruta locável. Já os subsolos de estacionamento invertem a lógica do abandono: nesses pavimentos as pessoas sobem pela escada em vez de descer, e o sentido do fluxo de ar e da fumaça no poço se comporta de forma diferente da que ocorre em uma torre.",
      "Operacionalmente, o obstáculo recorrente é a apropriação da escada pelos lojistas. Patamar usado como estoque avançado, porta corta-fogo escorada para facilitar reposição de mercadoria e corredor de serviço bloqueado por pallet são achados constantes, e cada um deles derruba a capacidade do sistema de sustentar pressão.",
    ],
    itemsHeading: "Frentes que precisam ser avaliadas em conjunto",
    items: [
      {
        title: "Integração com a exaustão do mall",
        desc: "A escada precisa manter pressão positiva em relação ao mall, que por sua vez está sob exaustão. Os dois sistemas se dimensionam juntos, nunca isoladamente.",
      },
      {
        title: "Subsolo de estacionamento",
        desc: "Nos subsolos o abandono é ascendente e o comportamento da fumaça no poço da escada difere do de uma torre. Exige verificação própria.",
      },
      {
        title: "Praça de alimentação",
        desc: "Carga de incêndio concentrada e instalação de gás combustível criam cenário de projeto distinto do restante da área locável.",
      },
      {
        title: "Escada apropriada por lojista",
        desc: "Estoque avançado no patamar e porta escorada para reposição de mercadoria são os achados mais frequentes e anulam a pressurização.",
      },
    ],
    faqs: [
      {
        question: "Como a pressurização da escada se relaciona com a exaustão do mall?",
        answer: "São sistemas acoplados. A exaustão do mall retira fumaça e reduz a pressão do ambiente; a escada precisa permanecer com pressão superior à do mall para que a fumaça não entre quando a porta abre. Se cada sistema for dimensionado isoladamente, o resultado em campo diverge do calculado, porque a referência de pressão da escada é o mall em operação de emergência, não em operação normal.",
      },
      {
        question: "Escada de subsolo de estacionamento tem tratamento diferente?",
        answer: "Tem. No subsolo o abandono é ascendente, e a fumaça também sobe pelo poço, o que muda o comportamento em relação a uma escada de torre onde as pessoas descem contra a corrente térmica. A verificação do trecho enterrado precisa ser feita separadamente do trecho acima do nível da via.",
      },
      {
        question: "O que fazer com estoque de lojista na escada?",
        answer: "Remover e impedir a reincidência por procedimento. Material estocado no patamar reduz a largura útil da rota, adiciona carga de incêndio dentro da caixa da escada e, quando a porta é escorada para facilitar o acesso, elimina a estanqueidade de que o sistema de pressurização depende. É item de fiscalização interna da administração do shopping, não apenas de vistoria anual.",
      },
      {
        question: "A adequação exige fechar o shopping?",
        answer: "Não, mas exige programação. A execução é feita por trecho, em período noturno após o fechamento das lojas, com isolamento da escada em obra e rota alternativa sinalizada. O ensaio final de vazão e pressão também é feito com o empreendimento fechado, porque depende de controlar a posição das portas.",
      },
    ],
  },

  "/instalacao-escada-pressurizada-sp": {
    heading: "Da compra do ventilador ao laudo: o que a instalação precisa entregar",
    paragraphs: [
      "Instalar sistema de pressurização não é montar equipamento — é entregar desempenho medido. O critério de aceitação não é o ventilador ter a vazão de catálogo, e sim o conjunto instalado atingir, em ensaio, velocidade de ar não inferior a 1,0 m/s na porta aberta do pavimento sinistrado e diferencial de pressão da ordem de 25 Pa com as portas fechadas, sem que a força de abertura da porta ultrapasse 110 N. Sistema montado sem essa verificação chega na vistoria sem lastro.",
      "A perda entre o catálogo e o campo se concentra em três pontos. O primeiro é a estanqueidade do duto de insuflamento: emenda mal executada e derivação sem vedação drenam vazão ao longo do prumo, e o pavimento mais distante do ventilador recebe muito menos ar do que o calculado. O segundo é a vedação da própria caixa da escada — passagem de tubulação, shaft não selado e frestas de porta fazem a pressão escapar. O terceiro é o controle: sem damper de alívio, inversor de frequência ou pressostato, o sistema oscila entre pressão insuficiente e pressão que lacra a porta.",
      "A instalação também tem que resolver as interfaces elétricas, que são a causa mais comum de reprovação em sistema recém-instalado. O ventilador precisa partir automaticamente pelo comando da central de detecção e alarme, ter acionamento manual em local acessível à brigada, e estar ligado à fonte alternativa de alimentação. Sistema que só parte no botão, ou que está no quadro geral sem retaguarda de energia, não atende.",
      "O entregável final não é o equipamento instalado: é o conjunto composto por relatório de comissionamento com os valores medidos por pavimento, as-built do que foi executado, manual de operação e manutenção para a equipe do prédio, e ART do responsável técnico. É esse conjunto que instrui o processo no Corpo de Bombeiros.",
    ],
    itemsHeading: "Etapas da execução até a aceitação",
    items: [
      {
        title: "Verificação de premissas antes da compra",
        desc: "Conferir vazão, pressão e ponto de operação contra a geometria real do prumo. Especificação feita só pelo número de pavimentos costuma errar por vazamento não considerado.",
      },
      {
        title: "Montagem com controle de estanqueidade",
        desc: "Duto e caixa da escada precisam ser vedados durante a montagem. Vazamento descoberto só no ensaio final significa reabrir shaft já fechado.",
      },
      {
        title: "Interfaces elétricas e de comando",
        desc: "Partida automática pela central de alarme, comando manual acessível à brigada e alimentação por fonte alternativa. É onde mais se reprova sistema novo.",
      },
      {
        title: "Comissionamento com valores medidos",
        desc: "Ensaio por pavimento, com registro de velocidade na porta, diferencial de pressão e força de abertura. Sem os números medidos não há laudo.",
      },
    ],
    faqs: [
      {
        question: "Qual a diferença entre instalar e comissionar o sistema?",
        answer: "Instalar é montar ventilador, duto, grelha, damper e comando. Comissionar é provar que o conjunto montado atinge os parâmetros de projeto, medindo velocidade de ar na porta aberta, diferencial de pressão com portas fechadas e força de abertura, pavimento a pavimento. Só o comissionamento gera os números que sustentam o laudo apresentado ao Corpo de Bombeiros.",
      },
      {
        question: "Comprar um ventilador com vazão maior resolve?",
        answer: "Normalmente não, e pode piorar. Vazão excedente sem dispositivo de controle eleva a pressão na caixa da escada a ponto de a força de abertura da porta ultrapassar o limite, o que reprova a vistoria e, na prática, impede o abandono. O que resolve é vedar o que está vazando e instalar controle de pressão — damper de alívio, inversor ou pressostato.",
      },
      {
        question: "Quanto tempo leva a instalação em um prédio ocupado?",
        answer: "Depende da altura do prumo, de existir shaft disponível e da necessidade de obra civil para passagem de duto. O que mais alonga o prazo não costuma ser a montagem mecânica, e sim a abertura de passagens, a recuperação das portas corta-fogo e a adequação da alimentação elétrica de emergência.",
      },
      {
        question: "Que documentos eu recebo no fim da obra?",
        answer: "Relatório de comissionamento com os valores medidos por pavimento, projeto as-built do que foi efetivamente executado, manual de operação e manutenção para a equipe do prédio e ART do responsável técnico. Esse conjunto é o que instrui o processo de AVCB — o equipamento instalado, sozinho, não comprova nada.",
      },
    ],
  },
};

export function getEscadaDeepDive(slug: string) {
  return escadaPressurizadaDeepDive[slug];
}
