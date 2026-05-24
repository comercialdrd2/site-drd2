const fs = require('fs');
const path = require('path');

const bairrosFase3 = [
  {
    slug: "aricanduva",
    nome: "Aricanduva",
    zona: "Zona Leste",
    tag: "Especialistas na Zona Leste",
    avenidas: "Avenida Aricanduva, Avenida Itaquera e Avenida do Contorno",
    perfil: "polo comercial de grande porte, com shopping centers, galerias, lojas de rua, galpões logísticos e condomínios residenciais de médio porte",
    intro: "Aricanduva concentra um dos maiores eixos de comércio e reunião de público da Zona Leste, com edificações de grande área construída e fluxo intenso de pessoas. Esse perfil de alta lotação coloca a renovação do AVCB no centro das atenções, porque o Decreto Estadual 69.118/2024 reforçou as exigências de saídas de emergência, iluminação e sinalização para locais que recebem público.",
    box: "Em Aricanduva, a causa de reprovação mais frequente é a lotação real divergente da prevista no projeto aprovado. Lojas e galerias que ampliaram a área de atendimento, criaram mezaninos ou subdividiram pavimentos sem atualizar a planta acabam com rotas de fuga subdimensionadas para o público que recebem hoje.",
    problemas: [
      "Lotação acima do projeto aprovado",
      "Saídas de emergência subdimensionadas",
      "Manutenção de sistemas vencida",
    ],
    problemasDesc: [
      "Ampliações de área comercial sem revisão do projeto técnico fazem a população real superar a capacidade calculada das rotas de fuga.",
      "Galerias e centros comerciais antigos têm largura de corredor e número de saídas dimensionados para uma lotação menor que a atual.",
      "Em prédios com muitas lojas, a manutenção de extintores, alarme e iluminação de emergência costuma estar sem registro ou com laudo vencido.",
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido em Aricanduva. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "Quanto tempo leva para renovar o AVCB de uma loja ou galeria em Aricanduva?",
    faq1a: "Depende da área, da lotação e das pendências de laudo. Em imóveis comerciais de Aricanduva, o caminho mais rápido é começar com um diagnóstico documental e uma pré-vistoria, evitando exigências previsíveis do CBPMESP que costumam atrasar a liberação.",
    faq2q: "Minha galeria recebe mais público do que diz a planta. Isso reprova a vistoria?",
    faq2a: "Pode reprovar, sim. Quando a lotação real supera a prevista no projeto, as saídas de emergência ficam subdimensionadas. O ideal é revisar o projeto e adequar as rotas antes de protocolar a renovação.",
    faq3q: "Quais documentos preciso reunir para a renovação em Aricanduva?",
    faq3a: "Planta ou croqui atualizado, dados do imóvel e do responsável, ARTs e laudos dos sistemas (extintores, alarme, iluminação, hidrantes, SPDA e elétrica quando houver) e o projeto técnico anterior aprovado.",
    faq4q: "O AVCB vencido pode interditar meu comércio em Aricanduva?",
    faq4a: "Sim. Comércio com AVCB vencido fica exposto a autuação, interdição, recusa de seguro e responsabilidade civil em caso de sinistro. A renovação deve ser iniciada antes do vencimento.",
    guiaLegislacaoLocal: "A renovação do Auto de Vistoria do Corpo de Bombeiros (AVCB) em Aricanduva segue os trâmites do Comando do Corpo de Bombeiros da Polícia Militar do Estado de São Paulo (CBPMESP), hoje regidos pelo Decreto Estadual 69.118/2024 e pelas Instruções Técnicas atualizadas pela Portaria CCB-003/800/2025. Por se tratar de uma região de forte comércio e reunião de público, a fiscalização nos eixos da Avenida Aricanduva e Avenida Itaquera é rigorosa quanto a lotação, saídas de emergência e sinalização.\n\nO processo começa com o diagnóstico do imóvel: confirmar se o enquadramento correto é CLCB, AVCB com vistoria ou projeto técnico, e verificar se a planta aprovada corresponde ao uso atual. Divergências comuns em Aricanduva — fechamento de áreas, mezaninos e subdivisão de lojas — exigem a atualização do projeto ou o protocolo de um Formulário de Atendimento Técnico (FAT) junto ao sistema Via Fácil Bombeiros.\n\nEm seguida, os sistemas de segurança são preparados antes da vistoria: extintores, alarme, iluminação e sinalização de emergência, hidrantes, SPDA e laudo elétrico, todos com as respectivas ARTs. Com a DRD2 Engenharia, acompanhamos a vistoria presencialmente, de modo que qualquer questionamento do vistoriador seja resolvido na hora e o AVCB seja emitido com previsibilidade.",
    custoDetalhe: "O custo da renovação em Aricanduva varia conforme a área construída, a quantidade de sistemas a revisar e a necessidade ou não de novo projeto técnico. Imóveis comerciais com lotação elevada e galerias com várias lojas tendem a exigir mais laudos e ARTs. O orçamento fechado é definido após o diagnóstico inicial, sem surpresas no meio do processo.",
    ctaFinal: "Não deixe o AVCB vencido travar a operação do seu comércio em Aricanduva. Fale agora com um engenheiro e receba um diagnóstico do seu imóvel.",
  },
  {
    slug: "barra-funda",
    nome: "Barra Funda",
    zona: "Zona Oeste",
    tag: "Especialistas na Zona Oeste",
    avenidas: "Avenida Marquês de São Vicente, Avenida Auro Soares de Moura Andrade e Rua Barra Funda",
    perfil: "antigos galpões industriais reconvertidos em condomínios e escritórios, casas de eventos, prédios comerciais e empreendimentos residenciais novos",
    intro: "A Barra Funda vive uma transformação acelerada: galpões e antigas fábricas estão dando lugar a condomínios verticais, escritórios e espaços de eventos. Essa mistura de edificações antigas e novas torna a renovação do AVCB sensível, porque o Decreto Estadual 69.118/2024 trata de forma distinta o uso original e o uso atual de cada imóvel.",
    box: "Na Barra Funda, o ponto crítico é a mudança de uso sem regularização. Galpões licenciados como industriais ou de armazenagem que passaram a abrigar escritórios, coworkings ou eventos precisam de novo enquadramento — caso contrário, a vistoria reprova por incompatibilidade entre o projeto aprovado e a ocupação real.",
    problemas: [
      "Mudança de uso sem novo enquadramento",
      "Compartimentação de galpões antigos",
      "Controle de público em casas de eventos",
    ],
    problemasDesc: [
      "Imóveis que eram industriais e viraram escritórios ou eventos mantêm projeto antigo incompatível com a nova ocupação.",
      "Estruturas amplas de galpão exigem revisão de compartimentação, rotas de fuga e carga de incêndio para o uso atual.",
      "Espaços de eventos precisam comprovar controle de acesso e lotação, item reforçado pelo regulamento atual.",
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido na Barra Funda. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "Comprei um galpão na Barra Funda para virar escritório. Preciso de novo AVCB?",
    faq1a: "Sim. A mudança de uso altera o enquadramento no Corpo de Bombeiros. Um galpão industrial convertido em escritório ou espaço de eventos precisa de projeto técnico compatível com a nova ocupação antes da emissão do AVCB.",
    faq2q: "Tenho uma casa de eventos na Barra Funda. O que o Corpo de Bombeiros mais cobra?",
    faq2a: "Lotação compatível com as saídas, controle de acesso de público, iluminação e sinalização de emergência e sistemas de combate em ordem. O Decreto 69.118/2024 reforçou as exigências para locais de reunião de público.",
    faq3q: "Quanto tempo leva a regularização de um galpão reconvertido na Barra Funda?",
    faq3a: "Quando há mudança de uso, o prazo depende da elaboração do novo projeto e das adequações físicas necessárias. O diagnóstico inicial define o cronograma realista, evitando promessas que não se cumprem.",
    faq4q: "Prédio residencial novo na Barra Funda também precisa renovar o AVCB?",
    faq4a: "Sim. Mesmo edificações novas têm AVCB com prazo de validade e dependem de manutenção contínua dos sistemas. A renovação deve ser iniciada antes do vencimento para não interromper a regularidade do condomínio.",
    guiaLegislacaoLocal: "A regularização junto ao CBPMESP na Barra Funda é regida pelo Decreto Estadual 69.118/2024 e pelas Instruções Técnicas atualizadas pela Portaria CCB-003/800/2025. A região é marcada pela reconversão de galpões e fábricas, o que torna o enquadramento correto a etapa mais importante: o Corpo de Bombeiros avalia o uso real da edificação, não a destinação original do imóvel.\n\nQuando há mudança de uso — de industrial para escritório, coworking ou casa de eventos —, é obrigatório protocolar projeto técnico compatível com a nova ocupação pelo sistema Via Fácil Bombeiros. A compartimentação, as rotas de fuga, a carga de incêndio e a lotação precisam ser recalculadas. Para espaços de eventos, o controle de acesso de público passou a ser item de atenção no regulamento atual.\n\nA DRD2 Engenharia conduz esse processo do diagnóstico à vistoria: avalia a documentação existente, define o enquadramento, organiza laudos e ARTs de elétrica, SPDA, hidrantes e demais sistemas, e acompanha o vistoriador presencialmente na região da Avenida Marquês de São Vicente e do Memorial da América Latina, garantindo a emissão do AVCB com segurança jurídica.",
    custoDetalhe: "Na Barra Funda, o custo é fortemente influenciado pela existência ou não de mudança de uso. Imóveis que mantêm a destinação original e só precisam de revisão de sistemas têm orçamento menor; galpões reconvertidos exigem novo projeto técnico e adequações físicas. O valor final é fechado após o diagnóstico do imóvel.",
    ctaFinal: "Vai reformar ou mudar o uso de um imóvel na Barra Funda? Fale com um engenheiro antes de protocolar e evite retrabalho no Corpo de Bombeiros.",
  },
  {
    slug: "carrao",
    nome: "Carrão",
    zona: "Zona Leste",
    tag: "Atendimento na Zona Leste",
    avenidas: "Avenida Conselheiro Carrão, Avenida Aricanduva e Rua Antônio de Barros",
    perfil: "comércio de rua forte, restaurantes, clínicas, prédios comerciais e condomínios residenciais de médio e alto padrão",
    intro: "O Carrão combina um comércio de rua tradicional com prédios residenciais cada vez mais verticais e uma boa concentração de clínicas e restaurantes. Essa diversidade de ocupações faz com que a renovação do AVCB exija enquadramento preciso, já que o Decreto Estadual 69.118/2024 trata de forma diferente cada tipo de uso e nível de risco.",
    box: "No Carrão, a reprovação costuma vir de imóveis que mudaram de função sem revisar o projeto: lojas que viraram restaurantes, casas que viraram clínicas. Essa troca de uso altera carga de incêndio, lotação e sistemas obrigatórios, e o projeto antigo deixa de representar a realidade.",
    problemas: [
      "Mudança de uso sem revisão de projeto",
      "Restaurantes com gás e cozinha sem laudo",
      "Condomínios com manutenção em atraso",
    ],
    problemasDesc: [
      "Imóveis comerciais que trocaram de atividade mantêm projeto incompatível com a carga de incêndio e a lotação atuais.",
      "Restaurantes precisam de laudo de estanqueidade de gás e adequação da cozinha, itens frequentemente esquecidos na renovação.",
      "Prédios residenciais antigos chegam ao vencimento do AVCB com sistemas e ARTs sem atualização.",
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido no Carrão. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "Transformei uma loja em restaurante no Carrão. Preciso atualizar o AVCB?",
    faq1a: "Sim. Restaurante tem carga de incêndio, lotação e sistemas diferentes de uma loja. É necessário revisar o projeto e incluir itens como o laudo de estanqueidade de gás antes da renovação.",
    faq2q: "Minha clínica no Carrão funciona em um sobrado adaptado. Isso complica a vistoria?",
    faq2a: "Imóveis adaptados costumam ter rotas de fuga e acessibilidade que não acompanharam a nova função. Um diagnóstico técnico identifica o que precisa ser ajustado antes de protocolar a renovação no CBPMESP.",
    faq3q: "Quanto tempo leva para renovar o AVCB no Carrão?",
    faq3a: "O prazo depende da área, do tipo de ocupação e das pendências de laudo. Começar pela conferência documental e por uma pré-vistoria reduz o risco de exigências e mantém o cronograma previsível.",
    faq4q: "Condomínio residencial no Carrão pode ser multado por AVCB vencido?",
    faq4a: "Sim. O síndico responde civil e criminalmente em caso de sinistro, e o AVCB vencido pode gerar autuação e problemas com o seguro predial. A renovação deve começar antes do vencimento.",
    guiaLegislacaoLocal: "A renovação do AVCB no Carrão segue o Decreto Estadual 69.118/2024 e as Instruções Técnicas atualizadas pela Portaria CCB-003/800/2025, sob análise do CBPMESP. A diversidade de ocupações da região — comércio, restaurantes, clínicas e condomínios ao longo da Avenida Conselheiro Carrão — exige atenção redobrada ao enquadramento correto de cada imóvel.\n\nO primeiro passo é confirmar se o caso é de CLCB, AVCB com vistoria ou projeto técnico, e verificar se a planta aprovada corresponde ao uso atual. Mudanças de atividade muito comuns no Carrão, como lojas que viraram restaurantes, alteram a carga de incêndio e a lotação e podem exigir revisão de projeto ou Formulário de Atendimento Técnico (FAT) protocolado pelo Via Fácil Bombeiros.\n\nA preparação dos sistemas vem antes do pedido de vistoria: extintores, alarme, iluminação e sinalização de emergência, hidrantes, SPDA, laudo elétrico e, para restaurantes, o laudo de estanqueidade de gás — todos acompanhados das ARTs. A DRD2 Engenharia organiza essa documentação e acompanha a vistoria presencialmente, garantindo que o AVCB do Carrão seja emitido sem retrabalho.",
    custoDetalhe: "O custo da renovação no Carrão varia conforme o tipo de imóvel. Restaurantes e clínicas adaptados costumam exigir mais laudos do que lojas simples; condomínios dependem do número de sistemas a revisar. O orçamento é fechado após o diagnóstico, sem custos surpresa.",
    ctaFinal: "AVCB perto de vencer no Carrão? Fale com um engenheiro e comece o diagnóstico antes que o documento trave a sua operação.",
  },
  {
    slug: "casa-verde",
    nome: "Casa Verde",
    zona: "Zona Norte",
    tag: "Especialistas na Zona Norte",
    avenidas: "Avenida Casa Verde, Avenida Engenheiro Caetano Álvares e Avenida Braz Leme",
    perfil: "condomínios residenciais, comércio de bairro, oficinas, pequenos galpões e prédios de uso misto",
    intro: "A Casa Verde reúne condomínios residenciais de diferentes idades, comércio de bairro e pequenas estruturas industriais e de serviço. Essa mistura faz da renovação do AVCB um processo que depende de diagnóstico individual, já que o Decreto Estadual 69.118/2024 exige adequação dos sistemas das edificações existentes às Instruções Técnicas atuais.",
    box: "Na Casa Verde, o problema recorrente são prédios residenciais antigos que chegam ao vencimento do AVCB com sistemas que nunca foram modernizados — hidrantes sem teste de pressão, SPDA sem laudo e instalações elétricas sem inspeção. A renovação vira, na prática, uma adequação técnica.",
    problemas: [
      "Sistemas antigos sem modernização",
      "SPDA e elétrica sem laudo atual",
      "Documentação de manutenção incompleta",
    ],
    problemasDesc: [
      "Prédios das décadas anteriores mantêm hidrantes, bombas e alarme sem revisão compatível com as exigências atuais.",
      "O SPDA e as instalações elétricas frequentemente estão sem inspeção e sem ART, item observado de perto na vistoria.",
      "Faltam registros de manutenção de extintores, alarme e iluminação, o que gera exigências no protocolo.",
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido na Casa Verde. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "Meu condomínio na Casa Verde é antigo. A renovação do AVCB exige obras?",
    faq1a: "Pode exigir. Prédios antigos costumam precisar de adequações nos sistemas de segurança para atender às Instruções Técnicas atuais. O diagnóstico mostra com clareza o que é obrigatório antes da renovação.",
    faq2q: "O que o Corpo de Bombeiros mais cobra na Casa Verde?",
    faq2a: "Laudos de SPDA e elétrica, teste dos hidrantes, manutenção de extintores e alarme com registro, e a compatibilidade da planta com o uso atual. São os pontos que mais geram exigência na região.",
    faq3q: "Quais documentos preciso para renovar o AVCB na Casa Verde?",
    faq3a: "Planta aprovada, dados do imóvel e do responsável, laudos e ARTs dos sistemas, comprovantes de manutenção e o AVCB anterior. A organização documental antecipada reduz o tempo de análise.",
    faq4q: "AVCB vencido em condomínio da Casa Verde traz risco para o síndico?",
    faq4a: "Sim. O síndico responde civil e criminalmente, e o documento vencido pode invalidar o seguro predial. Iniciar a renovação antes do vencimento protege a administração e os moradores.",
    guiaLegislacaoLocal: "A renovação do AVCB na Casa Verde é regida pelo Decreto Estadual 69.118/2024 e pelas Instruções Técnicas atualizadas pela Portaria CCB-003/800/2025, sob análise do CBPMESP. O regulamento atual exige que as edificações existentes adaptem seus sistemas às novas Instruções Técnicas, sob pena de exigência ou interdição.\n\nNa região, marcada por condomínios de várias idades ao longo da Avenida Casa Verde e da Avenida Braz Leme, o ponto-chave é verificar se a infraestrutura instalada acompanha a norma vigente. Quando há divergência entre o projeto aprovado e a realidade física — fechamento de áreas, alteração de rotas, ampliações —, é necessário atualizar o projeto ou protocolar um Formulário de Atendimento Técnico (FAT) pelo Via Fácil Bombeiros.\n\nA DRD2 Engenharia faz o levantamento de campo, consolida os laudos e ARTs de elétrica, SPDA, gás e bombas, e submete a documentação eletronicamente. Acompanhamos a vistoria presencialmente na Casa Verde, resolvendo na hora qualquer questionamento técnico e assegurando a emissão do AVCB com previsibilidade.",
    custoDetalhe: "O custo da renovação na Casa Verde depende da idade do imóvel e do estado dos sistemas. Prédios que precisam apenas de revisão e laudos têm orçamento menor; quando há adequação física, o valor sobe. O diagnóstico inicial define o orçamento fechado.",
    ctaFinal: "Condomínio com AVCB vencendo na Casa Verde? Fale com um engenheiro e antecipe o diagnóstico para evitar interdição e problema com o seguro.",
  },
  {
    slug: "freguesia-do-o",
    nome: "Freguesia do Ó",
    zona: "Zona Norte",
    tag: "Especialistas na Zona Norte",
    avenidas: "Largo da Matriz, Avenida Itaberaba e Avenida Elísio Teixeira de Lemos",
    perfil: "bairro tradicional com comércio de rua, igrejas, escolas, mercados, condomínios e imóveis antigos adaptados para uso comercial",
    intro: "A Freguesia do Ó é um dos bairros mais antigos de São Paulo, com forte comércio de rua e muitos imóveis históricos adaptados ao longo dos anos. Essa característica torna a renovação do AVCB delicada, porque o Decreto Estadual 69.118/2024 cobra que edificações antigas sejam adequadas às Instruções Técnicas atuais.",
    box: "Na Freguesia do Ó, o obstáculo mais comum é a falta de planta atualizada. Imóveis antigos passaram por reformas e mudanças de uso sem documentação, e a vistoria reprova quando a edificação física não corresponde ao projeto que consta no Corpo de Bombeiros.",
    problemas: [
      "Imóveis antigos sem planta atual",
      "Rotas de fuga estreitas",
      "Mudança de uso não regularizada",
    ],
    problemasDesc: [
      "Construções tradicionais reformadas ao longo dos anos perderam a correspondência com o projeto aprovado original.",
      "Edificações antigas têm corredores e saídas estreitos, que precisam de avaliação frente à lotação atual.",
      "Casas que viraram comércio ou serviço mantêm enquadramento incompatível com a atividade real.",
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido na Freguesia do Ó. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "Meu imóvel na Freguesia do Ó é antigo e não tenho a planta. E agora?",
    faq1a: "É preciso levantar a edificação e produzir uma planta compatível com a realidade física. Sem esse documento, a vistoria reprova. O diagnóstico inicial define se basta atualizar o projeto ou se há adequações a fazer.",
    faq2q: "Transformei uma casa em comércio na Freguesia do Ó. Preciso de novo AVCB?",
    faq2a: "Sim. A mudança de uso altera o enquadramento no Corpo de Bombeiros. É necessário projeto técnico compatível com a atividade comercial antes da emissão ou renovação do AVCB.",
    faq3q: "Quanto tempo leva a renovação do AVCB na Freguesia do Ó?",
    faq3a: "Em imóveis antigos, o prazo depende do levantamento da planta e das adequações necessárias. Começar pelo diagnóstico evita exigências previsíveis e mantém o cronograma realista.",
    faq4q: "Comércio com AVCB vencido na Freguesia do Ó corre risco de interdição?",
    faq4a: "Sim. AVCB vencido expõe o imóvel a autuação, interdição, recusa de seguro e problemas com o alvará. A renovação deve começar antes do vencimento.",
    guiaLegislacaoLocal: "A renovação do AVCB na Freguesia do Ó segue o Decreto Estadual 69.118/2024 e as Instruções Técnicas atualizadas pela Portaria CCB-003/800/2025, analisadas pelo CBPMESP. Por ser um bairro tradicional, com muitos imóveis antigos adaptados em torno do Largo da Matriz e da Avenida Itaberaba, o desafio central é comprovar a correspondência entre a edificação física e o projeto aprovado.\n\nQuando há divergência — reformas, ampliações, fechamento de áreas ou mudança de uso —, é obrigatório atualizar o projeto ou protocolar um Formulário de Atendimento Técnico (FAT) pelo sistema Via Fácil Bombeiros. Edificações antigas também exigem atenção às rotas de fuga e à lotação, que precisam ser avaliadas frente ao uso atual do imóvel.\n\nA DRD2 Engenharia conduz o diagnóstico documental, faz o levantamento de campo, organiza os laudos e ARTs dos sistemas de segurança e acompanha a vistoria presencialmente na Freguesia do Ó. Esse acompanhamento garante que qualquer exigência do vistoriador seja resolvida na hora, resultando na emissão do AVCB sem retrabalho.",
    custoDetalhe: "Na Freguesia do Ó, o custo da renovação depende muito do estado documental do imóvel. Quando é preciso levantar a planta e regularizar mudança de uso, o orçamento é maior do que em imóveis com documentação em dia. O valor é fechado após o diagnóstico.",
    ctaFinal: "Imóvel antigo na Freguesia do Ó com AVCB vencido? Fale com um engenheiro e organize a regularização sem dor de cabeça.",
  },
  {
    slug: "itaquera",
    nome: "Itaquera",
    zona: "Zona Leste",
    tag: "Especialistas na Zona Leste",
    avenidas: "Avenida Itaquera, Avenida José Pinheiro Borges (Radial Leste) e Avenida Líder",
    perfil: "grandes equipamentos de reunião de público, shopping, comércio, condomínios residenciais e escolas",
    intro: "Itaquera reúne grandes equipamentos de reunião de público, comércio em expansão e muitos condomínios residenciais. Esse perfil de alta circulação de pessoas torna a renovação do AVCB um ponto sensível, porque o Decreto Estadual 69.118/2024 reforçou as exigências de saídas, sinalização e controle de lotação para locais que recebem público.",
    box: "Em Itaquera, a reprovação mais frequente está ligada ao controle de acesso e à lotação em estabelecimentos comerciais e de eventos. Quando o número de pessoas supera o previsto no projeto, as rotas de fuga ficam subdimensionadas e a vistoria não aprova.",
    problemas: [
      "Lotação acima do previsto em projeto",
      "Controle de acesso de público",
      "Sistemas de combate sem manutenção",
    ],
    problemasDesc: [
      "Comércios e espaços de reunião que recebem mais público do que a planta aprovada comprometem a capacidade das saídas.",
      "Estabelecimentos de público precisam comprovar controle de acesso e lotação, item reforçado no regulamento atual.",
      "Hidrantes, alarme e iluminação de emergência costumam estar sem registro de manutenção atualizado.",
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido em Itaquera. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "Quanto tempo leva para renovar o AVCB de um comércio em Itaquera?",
    faq1a: "Depende da área, da lotação e das pendências de laudo. Em imóveis de reunião de público, o caminho mais rápido é começar pelo diagnóstico e pela pré-vistoria, evitando exigências do CBPMESP que atrasam a liberação.",
    faq2q: "Meu estabelecimento em Itaquera recebe muito público. O que preciso comprovar?",
    faq2a: "Lotação compatível com as saídas de emergência, controle de acesso, iluminação e sinalização adequadas e sistemas de combate em ordem. O Decreto 69.118/2024 reforçou esses pontos para locais de reunião de público.",
    faq3q: "Condomínio residencial em Itaquera também precisa renovar o AVCB?",
    faq3a: "Sim. Todo AVCB tem prazo de validade e depende da manutenção contínua dos sistemas. A renovação deve ser iniciada antes do vencimento para manter a regularidade do condomínio.",
    faq4q: "AVCB vencido pode interditar meu negócio em Itaquera?",
    faq4a: "Sim. AVCB vencido expõe o estabelecimento a autuação, interdição, recusa de seguro e responsabilidade civil em caso de sinistro. A renovação deve começar com antecedência.",
    guiaLegislacaoLocal: "A renovação do AVCB em Itaquera segue o Decreto Estadual 69.118/2024 e as Instruções Técnicas atualizadas pela Portaria CCB-003/800/2025, sob análise do CBPMESP. Por concentrar grandes equipamentos de reunião de público e comércio em expansão ao longo da Avenida Itaquera e da Radial Leste, a fiscalização na região é rigorosa quanto a lotação, saídas de emergência e controle de acesso.\n\nO processo começa com o diagnóstico: confirmar o enquadramento correto — CLCB, AVCB com vistoria ou projeto técnico — e verificar se a planta aprovada corresponde ao uso real. Divergências de área e lotação exigem revisão de projeto ou protocolo de Formulário de Atendimento Técnico (FAT) pelo Via Fácil Bombeiros.\n\nAntes da vistoria, os sistemas são preparados: extintores, alarme, iluminação e sinalização de emergência, hidrantes, SPDA e laudo elétrico, todos com ART. A DRD2 Engenharia acompanha a vistoria presencialmente em Itaquera, de modo que qualquer questionamento técnico seja resolvido na hora e o AVCB seja emitido com previsibilidade.",
    custoDetalhe: "O custo da renovação em Itaquera varia conforme a área, a lotação e a quantidade de sistemas a revisar. Estabelecimentos de reunião de público tendem a exigir mais laudos e ARTs do que imóveis menores. O orçamento fechado é definido após o diagnóstico inicial.",
    ctaFinal: "Não deixe o AVCB vencido interromper a operação do seu imóvel em Itaquera. Fale com um engenheiro e receba um diagnóstico completo.",
  },
  {
    slug: "jacana",
    nome: "Jaçanã",
    zona: "Zona Norte",
    tag: "Atendimento na Zona Norte",
    avenidas: "Avenida Guapira, Avenida Jacanã e Avenida Luís Stamatis",
    perfil: "comércio local, escolas, condomínios residenciais, pequenas indústrias e serviços que atendem a Zona Norte",
    intro: "O Jaçanã combina comércio de bairro, escolas, condomínios e pequenas indústrias, formando um conjunto variado de ocupações. Essa diversidade exige enquadramento preciso na renovação do AVCB, já que o Decreto Estadual 69.118/2024 trata de forma distinta cada tipo de uso e nível de risco.",
    box: "No Jaçanã, a dificuldade mais comum é reunir os documentos e adequar os sistemas antes do vencimento do AVCB. Muitos imóveis chegam à renovação com manutenção em atraso e mudança de uso não regularizada, o que gera exigências previsíveis na vistoria.",
    problemas: [
      "Mudança de uso sem FAT protocolado",
      "Sistemas sem manutenção registrada",
      "Brigada de incêndio vencida",
    ],
    problemasDesc: [
      "Imóveis que trocaram de atividade sem regularizar o Formulário de Atendimento Técnico ficam com projeto incompatível.",
      "Extintores, alarme e iluminação de emergência costumam estar sem registro de manutenção atualizado.",
      "Em imóveis que exigem brigada, o treinamento vencido vira exigência no momento da renovação.",
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido no Jaçanã. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "Quanto tempo leva para renovar o AVCB no Jaçanã?",
    faq1a: "O prazo depende da área, do tipo de ocupação e das pendências de laudo. Iniciar pela conferência documental e pela pré-vistoria reduz o risco de exigências do CBPMESP e mantém o cronograma previsível.",
    faq2q: "Minha escola no Jaçanã precisa de brigada de incêndio para renovar o AVCB?",
    faq2a: "Depende do enquadramento da edificação. Quando a brigada é obrigatória, o treinamento precisa estar válido. O diagnóstico identifica o que é exigido para o seu imóvel.",
    faq3q: "Quais documentos preciso para a renovação no Jaçanã?",
    faq3a: "Planta aprovada, dados do imóvel e do responsável, laudos e ARTs dos sistemas, comprovantes de manutenção e o AVCB anterior. Organizar tudo com antecedência acelera a análise.",
    faq4q: "AVCB vencido no Jaçanã pode gerar multa?",
    faq4a: "Sim. AVCB vencido aumenta o risco de autuação, interdição e recusa de seguro, além da responsabilidade civil em caso de sinistro. A renovação deve ser iniciada antes do vencimento.",
    guiaLegislacaoLocal: "A renovação do AVCB no Jaçanã é regida pelo Decreto Estadual 69.118/2024 e pelas Instruções Técnicas atualizadas pela Portaria CCB-003/800/2025, sob análise do CBPMESP. A variedade de ocupações da região — comércio, escolas, condomínios e pequenas indústrias ao longo da Avenida Guapira — torna o enquadramento correto a etapa decisiva do processo.\n\nO primeiro passo é confirmar se o caso é de CLCB, AVCB com vistoria ou projeto técnico, e verificar se a planta aprovada corresponde ao uso atual. Mudanças de atividade exigem revisão de projeto ou protocolo de Formulário de Atendimento Técnico (FAT) pelo Via Fácil Bombeiros. Em imóveis que exigem brigada de incêndio, o treinamento precisa estar válido.\n\nA DRD2 Engenharia organiza a documentação, consolida os laudos e ARTs de elétrica, SPDA, hidrantes e demais sistemas e acompanha a vistoria presencialmente no Jaçanã. Esse acompanhamento garante que exigências sejam resolvidas na hora e o AVCB seja emitido com previsibilidade.",
    custoDetalhe: "O custo da renovação no Jaçanã depende do tipo de imóvel e do estado dos sistemas. Escolas e pequenas indústrias costumam exigir mais laudos e brigada; comércios menores têm orçamento mais enxuto. O valor final é fechado após o diagnóstico.",
    ctaFinal: "AVCB vencendo no Jaçanã? Fale com um engenheiro e organize a documentação antes que o prazo aperte.",
  },
  {
    slug: "liberdade",
    nome: "Liberdade",
    zona: "Região Central",
    tag: "Especialistas na Região Central",
    avenidas: "Rua Galvão Bueno, Avenida da Liberdade e Rua dos Estudantes",
    perfil: "comércio denso, restaurantes, galerias, edifícios antigos de uso misto e prédios comerciais de alta circulação",
    intro: "A Liberdade tem um dos comércios mais densos de São Paulo, com galerias, restaurantes e edifícios antigos de uso misto concentrados em poucas quadras. Essa densidade eleva o risco de incêndio e torna a renovação do AVCB especialmente criteriosa diante das exigências do Decreto Estadual 69.118/2024.",
    box: "Na Liberdade, o ponto crítico é a alta carga de incêndio combinada com rotas de fuga estreitas. Galerias e edifícios antigos acumulam comércio, estoque e cozinhas em estruturas que não foram projetadas para a densidade de público e de material que recebem hoje.",
    problemas: [
      "Carga de incêndio elevada",
      "Rotas de fuga estreitas e obstruídas",
      "Uso misto sem enquadramento atual",
    ],
    problemasDesc: [
      "A concentração de comércio, estoque e restaurantes eleva o risco e exige sistemas de combate compatíveis.",
      "Edifícios antigos têm corredores e escadas estreitos, muitas vezes obstruídos por mercadoria.",
      "Prédios que misturam comércio, serviço e moradia precisam de enquadramento que reflita todos os usos.",
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido na Liberdade. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "Tenho uma loja em galeria na Liberdade. O AVCB é do imóvel todo ou só da minha loja?",
    faq1a: "Em galerias e edifícios de uso misto, o AVCB normalmente abrange a edificação. É preciso avaliar a situação do prédio inteiro e a da sua unidade. O diagnóstico esclarece o enquadramento e o caminho da renovação.",
    faq2q: "Por que a Liberdade é considerada área de risco maior pelo Corpo de Bombeiros?",
    faq2a: "Pela densidade: muito comércio, estoque e restaurantes em estruturas antigas com rotas estreitas. Isso eleva a carga de incêndio e exige sistemas de combate e saídas dimensionados com rigor.",
    faq3q: "Quanto tempo leva a renovação do AVCB na Liberdade?",
    faq3a: "Depende do estado da edificação e das adequações necessárias. Em prédios antigos e densos, o diagnóstico inicial é essencial para definir um cronograma realista e evitar exigências.",
    faq4q: "Comércio com AVCB vencido na Liberdade corre risco de interdição?",
    faq4a: "Sim. Em área de alta circulação, a fiscalização é frequente. AVCB vencido expõe o imóvel a autuação, interdição e recusa de seguro. A renovação deve começar antes do vencimento.",
    guiaLegislacaoLocal: "A renovação do AVCB na Liberdade segue o Decreto Estadual 69.118/2024 e as Instruções Técnicas atualizadas pela Portaria CCB-003/800/2025, sob análise do CBPMESP. A região central, com comércio denso e edifícios antigos em torno da Rua Galvão Bueno e da Avenida da Liberdade, é tratada com rigor pela fiscalização por causa da elevada carga de incêndio e da circulação intensa de público.\n\nO enquadramento correto é a etapa decisiva: confirmar se o caso é CLCB, AVCB com vistoria ou projeto técnico, e verificar se a planta aprovada corresponde ao uso atual. Em edifícios de uso misto, é comum que o projeto antigo não represente a soma de comércio, serviço e moradia que existe hoje, exigindo revisão de projeto ou Formulário de Atendimento Técnico (FAT) pelo Via Fácil Bombeiros.\n\nA preparação dos sistemas — extintores, alarme, hidrantes, iluminação e sinalização de emergência, SPDA e laudo elétrico — precisa anteceder a vistoria, com as respectivas ARTs. A DRD2 Engenharia faz o diagnóstico, organiza a documentação e acompanha a vistoria presencialmente na Liberdade, garantindo a emissão do AVCB com segurança.",
    custoDetalhe: "Na Liberdade, o custo da renovação é influenciado pela idade do prédio e pela densidade de uso. Edifícios antigos de uso misto, com rotas a adequar, têm orçamento maior do que unidades simples. O valor é fechado após o diagnóstico da edificação.",
    ctaFinal: "Imóvel comercial na Liberdade com AVCB vencido? Fale com um engenheiro e regularize antes da próxima fiscalização.",
  },
  {
    slug: "limao",
    nome: "Limão",
    zona: "Zona Norte",
    tag: "Especialistas na Zona Norte",
    avenidas: "Avenida Nossa Senhora do Ó, Avenida Itaberaba e Rua Itinguçu",
    perfil: "galpões, transportadoras, centros de distribuição menores, condomínios e comércio próximos a eixos logísticos",
    intro: "O Limão é marcado por galpões, transportadoras e pequenos centros de distribuição próximos a importantes eixos viários, ao lado de condomínios e comércio de bairro. Esse perfil logístico torna a renovação do AVCB sensível à carga de incêndio, item de atenção no Decreto Estadual 69.118/2024.",
    box: "No Limão, a reprovação mais comum vem de galpões com carga de incêndio elevada e rotas de fuga bloqueadas por estoque. O empilhamento de mercadoria e a mudança de produto armazenado alteram o risco e podem deixar a edificação fora do que foi aprovado em projeto.",
    problemas: [
      "Carga de incêndio acima do projeto",
      "Rotas de fuga bloqueadas por estoque",
      "Laudo elétrico e SPDA pendentes",
    ],
    problemasDesc: [
      "A troca do tipo de material armazenado altera a carga de incêndio e pode exigir sistemas de combate mais robustos.",
      "Empilhamento de mercadoria sobre rotas e saídas é um dos itens que mais geram exigência na vistoria.",
      "Galpões antigos chegam à renovação com instalações elétricas e SPDA sem inspeção e sem ART.",
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido no Limão. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "Mudei o tipo de produto que armazeno no meu galpão do Limão. Preciso revisar o AVCB?",
    faq1a: "Sim. O tipo de material muda a carga de incêndio e pode exigir sistemas de combate diferentes. É necessário revisar o enquadramento antes da renovação para não reprovar na vistoria.",
    faq2q: "O Corpo de Bombeiros cobra muito as rotas de fuga em galpões do Limão?",
    faq2a: "Cobra. Saídas e corredores obstruídos por estoque são item recorrente de exigência. As rotas precisam estar livres e sinalizadas no momento da vistoria.",
    faq3q: "Quanto tempo leva para renovar o AVCB de um galpão no Limão?",
    faq3a: "Depende da área, da carga de incêndio e das pendências de laudo. O diagnóstico inicial avalia os sistemas e define um cronograma realista, evitando exigências previsíveis.",
    faq4q: "AVCB vencido em galpão do Limão atrapalha contrato e seguro?",
    faq4a: "Sim. Galpão com AVCB vencido pode perder contrato de locação, ter o seguro recusado e sofrer interdição. A renovação deve ser iniciada antes do vencimento.",
    guiaLegislacaoLocal: "A renovação do AVCB no Limão segue o Decreto Estadual 69.118/2024 e as Instruções Técnicas atualizadas pela Portaria CCB-003/800/2025, sob análise do CBPMESP. Por concentrar galpões e operações logísticas próximas a eixos viários, a região exige atenção especial à carga de incêndio e à compatibilidade entre o material armazenado e o projeto aprovado.\n\nO diagnóstico inicial confirma o enquadramento — CLCB, AVCB com vistoria ou projeto técnico — e verifica se o uso atual corresponde à planta. Quando o tipo de produto ou o layout mudaram, é necessário revisar o projeto ou protocolar um Formulário de Atendimento Técnico (FAT) pelo Via Fácil Bombeiros, recalculando a carga de incêndio e os sistemas de combate.\n\nAntes da vistoria, a DRD2 Engenharia organiza os laudos e ARTs de instalações elétricas, SPDA, hidrantes e bombas, e confere se as rotas de fuga estão livres e sinalizadas. Acompanhamos a vistoria presencialmente no Limão, resolvendo qualquer questionamento na hora e assegurando a emissão do AVCB.",
    custoDetalhe: "No Limão, o custo da renovação depende da área do galpão, da carga de incêndio e dos sistemas exigidos. Operações com material de maior risco tendem a precisar de sistemas mais robustos. O orçamento fechado é definido após o diagnóstico técnico.",
    ctaFinal: "Galpão com AVCB perto de vencer no Limão? Fale com um engenheiro e evite perder contrato, seguro ou sofrer interdição.",
  },
  {
    slug: "paraiso",
    nome: "Paraíso",
    zona: "Zona Sul",
    tag: "Especialistas na Zona Sul",
    avenidas: "Avenida Paulista, Rua Vergueiro e Avenida Bernardino de Campos",
    perfil: "edifícios comerciais e corporativos, consultórios, clínicas, hospitais, hotéis e prédios residenciais verticais de alto padrão",
    intro: "O Paraíso reúne edifícios corporativos, uma forte concentração de clínicas e hospitais e prédios residenciais verticais de alto padrão, na transição entre a Avenida Paulista e a Vila Mariana. Esse perfil de edificações altas e de uso intenso torna a renovação do AVCB exigente diante do Decreto Estadual 69.118/2024.",
    box: "No Paraíso, o ponto de atenção são os edifícios verticais altos: a renovação cobra de perto sistemas como hidrantes, alarme, iluminação de emergência e, em muitos casos, pressurização de escada. Prédios antigos chegam ao vencimento com esses sistemas defasados em relação à norma atual.",
    problemas: [
      "Sistemas de prédios altos defasados",
      "Uso de saúde com exigências específicas",
      "Documentação corporativa desencontrada",
    ],
    problemasDesc: [
      "Edifícios verticais antigos têm hidrantes, alarme e escadas que precisam de adequação às Instruções Técnicas atuais.",
      "Clínicas e hospitais têm exigências próprias de rota, sinalização e sistemas, que pesam na vistoria.",
      "Em prédios corporativos com vários ocupantes, falta organização de laudos, ARTs e responsabilidades.",
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido no Paraíso. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "Meu edifício comercial no Paraíso é alto e antigo. A renovação exige adequações?",
    faq1a: "Geralmente sim. Prédios verticais antigos costumam precisar de adequação em hidrantes, alarme, iluminação de emergência e, às vezes, na escada. O diagnóstico mostra o que é obrigatório antes da renovação.",
    faq2q: "Tenho uma clínica no Paraíso. O AVCB tem exigências diferentes?",
    faq2a: "Sim. Imóveis de saúde têm exigências específicas de rotas, sinalização e sistemas de segurança. É importante avaliar o enquadramento correto para evitar exigências e atraso na vistoria.",
    faq3q: "Quanto tempo leva a renovação do AVCB de um prédio no Paraíso?",
    faq3a: "Depende da altura, da idade e dos sistemas a adequar. Edifícios altos costumam exigir mais laudos. O diagnóstico inicial define um cronograma realista e evita surpresas.",
    faq4q: "AVCB vencido em edifício do Paraíso traz risco para o condomínio?",
    faq4a: "Sim. O documento vencido expõe a administração à autuação, à interdição e à recusa de seguro, além da responsabilidade civil. A renovação deve começar antes do vencimento.",
    guiaLegislacaoLocal: "A renovação do AVCB no Paraíso é regida pelo Decreto Estadual 69.118/2024 e pelas Instruções Técnicas atualizadas pela Portaria CCB-003/800/2025, sob análise do CBPMESP. A região, com edifícios corporativos altos e forte presença de clínicas e hospitais entre a Avenida Paulista e a Rua Vergueiro, recebe fiscalização atenta a sistemas de combate, rotas de fuga e sinalização.\n\nO processo começa com o diagnóstico do imóvel e a confirmação do enquadramento — CLCB, AVCB com vistoria ou projeto técnico. Em edifícios verticais antigos, é comum identificar a necessidade de adequar hidrantes, alarme e escadas às Instruções Técnicas atuais; quando há divergência de projeto, protocola-se a revisão ou um Formulário de Atendimento Técnico (FAT) pelo Via Fácil Bombeiros.\n\nA DRD2 Engenharia consolida os laudos e ARTs de elétrica, SPDA, hidrantes, bombas e demais sistemas e acompanha a vistoria presencialmente no Paraíso. Para imóveis de saúde, atenção redobrada ao enquadramento específico. O acompanhamento garante que exigências sejam resolvidas na hora e o AVCB seja emitido com previsibilidade.",
    custoDetalhe: "No Paraíso, o custo da renovação cresce com a altura e a idade do edifício e com a complexidade dos sistemas. Imóveis de saúde e prédios altos exigem mais laudos e ARTs. O orçamento é fechado após o diagnóstico da edificação.",
    ctaFinal: "Edifício ou clínica no Paraíso com AVCB vencendo? Fale com um engenheiro e antecipe as adequações para não travar a vistoria.",
  },
  {
    slug: "penha",
    nome: "Penha",
    zona: "Zona Leste",
    tag: "Especialistas na Zona Leste",
    avenidas: "Avenida Penha de França, Avenida Amador Bueno da Veiga e Largo do Rosário",
    perfil: "bairro tradicional com comércio de rua, galerias, clínicas, escolas, prédios residenciais antigos e imóveis adaptados para uso comercial",
    intro: "A Penha é um bairro tradicional da Zona Leste, com forte comércio de rua, galerias e muitos imóveis antigos adaptados ao longo do tempo. Essa característica torna a renovação do AVCB um processo de diagnóstico cuidadoso, já que o Decreto Estadual 69.118/2024 cobra a adequação das edificações existentes às Instruções Técnicas atuais.",
    box: "Na Penha, muitos processos travam porque o imóvel mudou de uso ou ampliou o atendimento sem revisar projeto, lotação e sistemas de proteção. A vistoria reprova quando a edificação física não corresponde ao que está aprovado no Corpo de Bombeiros.",
    problemas: [
      "Mudança de uso sem revisão de projeto",
      "Imóveis antigos com rotas estreitas",
      "Sinalização e laudos desatualizados",
    ],
    problemasDesc: [
      "Lojas e casas que trocaram de atividade mantêm enquadramento incompatível com a lotação e a carga de incêndio atuais.",
      "Construções antigas têm corredores e saídas estreitos, que precisam ser avaliados frente ao uso de hoje.",
      "Sinalização desgastada e laudos vencidos de elétrica, SPDA e hidrantes são exigências recorrentes na região.",
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido na Penha. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "Meu comércio na Penha funciona em imóvel antigo adaptado. Isso dificulta a renovação?",
    faq1a: "Imóveis adaptados costumam ter rotas de fuga que precisam ser avaliadas. Um diagnóstico técnico aponta o que precisa ser ajustado antes de protocolar a renovação no CBPMESP.",
    faq2q: "Ampliei o atendimento da minha loja na Penha. Preciso atualizar o AVCB?",
    faq2a: "Sim. Ampliar área ou aumentar o público altera a lotação máxima e exige que o projeto técnico seja revisado junto ao Corpo de Bombeiros.",
    faq3q: "Quanto tempo leva a renovação do AVCB na Penha?",
    faq3a: "Depende das características do imóvel. Prédios e comércios antigos costumam precisar de mais documentação. Iniciar com antecedência evita que o documento vença durante o trâmite.",
    faq4q: "AVCB vencido na Penha dá multa?",
    faq4a: "Sim. Além do risco de autuação e interdição, o documento vencido pode gerar responsabilidade civil em caso de ocorrência e invalidar o seguro.",
    guiaLegislacaoLocal: "A renovação do AVCB na Penha obedece ao Decreto Estadual 69.118/2024 e às Instruções Técnicas vigentes do CBPMESP. O bairro possui muitos imóveis que mudaram de função comercial ao longo dos anos, o que exige atenção redobrada ao enquadramento na hora da vistoria. Caso a planta original não reflita as modificações estruturais ou de lotação, é imperativo atualizar o projeto ou apresentar um FAT (Formulário de Atendimento Técnico). A vistoria do Corpo de Bombeiros na região costuma ser minuciosa com as rotas de fuga em edifícios mais velhos. A DRD2 atua na preparação de todos os laudos exigidos e no acompanhamento in loco para garantir aprovação rápida.",
    custoDetalhe: "O custo varia bastante de acordo com a área do imóvel e as pendências em laudos (SPDA, elétrica, etc). Imóveis antigos na Penha frequentemente necessitam de revalidação de sistemas que aumentam o custo inicial, mas barateiam no longo prazo.",
    ctaFinal: "Não deixe para a última hora. Fale com nossos engenheiros na Penha e garanta a regularização sem stress."
  },
  {
    slug: "sapopemba",
    nome: "Sapopemba",
    zona: "Zona Leste",
    tag: "Especialistas na Zona Leste",
    avenidas: "Avenida Sapopemba, Avenida Professor Luiz Ignácio Anhaia Mello e Avenida do Oratório",
    perfil: "extensa malha comercial, galpões logísticos, atacados, supermercados e forte densidade residencial",
    intro: "Sapopemba é um dos maiores distritos de São Paulo, cortado por avenidas cruciais para o escoamento de cargas e comércio popular. Galpões, supermercados e redes atacadistas ditam o ritmo da região. A adequação aos rigores do Decreto Estadual 69.118/2024 torna-se vital, especialmente no controle de carga de incêndio em estoques.",
    box: "Em Sapopemba, a maior dificuldade no Corpo de Bombeiros recai sobre as ocupações logísticas e comerciais que não adequaram a altura de estocagem. Muitos galpões empilham mercadorias além do limite aprovado em projeto, inviabilizando a atuação dos sistemas de combate instalados (como hidrantes e sprinklers).",
    problemas: [
      "Armazenamento acima do limite do projeto",
      "Sistemas de hidrantes inoperantes",
      "Documentação de manutenção falha nos condomínios"
    ],
    problemasDesc: [
      "Galpões e atacadistas frequentemente estocam mercadorias em níveis que exigem novos cálculos de carga de incêndio.",
      "Redes de hidrantes em imóveis mais velhos apresentam falhas de estanqueidade e motores sem manutenção.",
      "Condomínios residenciais grandes frequentemente trocam de síndico e perdem o histórico de manutenção dos extintores."
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido no Sapopemba. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "Meu galpão em Sapopemba aumentou o limite de estocagem. Como fica o AVCB?",
    faq1a: "A altura da mercadoria afeta o risco de incêndio. Se ultrapassar o limite da planta aprovada, você precisará atualizar o projeto técnico e os laudos dos sistemas de combate.",
    faq2q: "Supermercados precisam de quais adequações para vistoria em Sapopemba?",
    faq2a: "As rotas de fuga não podem ter carrinhos bloqueando corredores, e a carga de incêndio do depósito deve estar conforme o projeto, além dos laudos em dia.",
    faq3q: "A renovação de AVCB de um condomínio grande em Sapopemba demora?",
    faq3a: "Condomínios maiores exigem inspeção completa de SPDA, hidrantes e brigada de incêndio. O ideal é iniciar 90 dias antes do vencimento.",
    faq4q: "Se a bomba do hidrante falhar, eu reprovo de cara?",
    faq4a: "Sim. A bomba do hidrante precisa ligar automaticamente na vistoria e manter a pressão correta, caso contrário o AVCB não é emitido.",
    guiaLegislacaoLocal: "As tratativas de renovação de AVCB em Sapopemba são norteadas pelo Decreto Estadual 69.118/2024. A região abriga imensos centros atacadistas e galpões onde o CBPMESP fiscaliza de perto a conformidade da compartimentação e do armazenamento. Qualquer divergência entre o projeto de incêndio averbado e a disposição real das mercadorias resulta em exigências formais. Por isso, a DRD2 faz uma pre-vistoria criteriosa no imóvel, garantindo que as rotas de fuga, os níveis de armazenamento e o funcionamento das bombas de incêndio estejam rigorosamente dentro da margem permitida antes mesmo do fiscal aparecer.",
    custoDetalhe: "Imóveis logísticos e atacadistas possuem sistemas complexos, o que exige testes hidrostáticos e revisões minuciosas. O custo é estritamente ligado à complexidade dos equipamentos obrigatórios no local.",
    ctaFinal: "Não corra risco de interdição da sua logística em Sapopemba. Solicite uma avaliação hoje."
  },
  {
    slug: "se",
    nome: "Sé",
    zona: "Centro",
    tag: "Especialistas no Centro de SP",
    avenidas: "Praça da Sé, Rua Direita, Rua XV de Novembro e Avenida Prestes Maia",
    perfil: "edifícios históricos, comércios extremamente antigos, sedes institucionais e prédios de uso misto",
    intro: "O coração de São Paulo, a Sé, concentra edifícios históricos e comércios que existem há décadas. Regularizar edificações tão antigas frente ao Decreto Estadual 69.118/2024 exige expertise avançada, pois é impossível modernizar 100% da estrutura sem soluções compensatórias permitidas pela norma do Corpo de Bombeiros.",
    box: "O grande gargalo na Sé é que a imensa maioria dos prédios foi erguida antes das normas modernas de incêndio. A largura das escadas e a ausência de compartimentação costumam barrar a emissão do AVCB. O segredo é saber aplicar as regras de 'Edificações Existentes' para conseguir adaptações sem obras surreais.",
    problemas: [
      "Escadas sem compartimentação ou ventilação",
      "Fiação elétrica obsoleta sem laudo",
      "Impossibilidade arquitetônica de reformas"
    ],
    problemasDesc: [
      "Edifícios antigos não possuem escadas enclausuradas e o Corpo de Bombeiros exige sistemas paliativos de segurança.",
      "A fiação antiga (às vezes com pano) é risco iminente e requer readequação elétrica antes do laudo técnico.",
      "Tombamento e restrições estruturais impedem que rotas de fuga sejam ampliadas fisicamente."
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido na Sé. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "Prédios tombados na Sé conseguem tirar o AVCB?",
    faq1a: "Sim, através de medidas compensatórias. A legislação atual (Decreto 69.118/2024) permite adequações alternativas (como alarme e detecção robustos) em prédios históricos onde reformas físicas são proibidas.",
    faq2q: "Preciso refazer a escada do meu edifício no centro de São Paulo?",
    faq2a: "Nem sempre. Existem saídas de engenharia utilizando portas corta-fogo em pontos estratégicos e compartimentação vertical, sem necessidade de demolição.",
    faq3q: "A fiação velha do meu comércio no centro impede o AVCB?",
    faq3a: "Sim. Fiação com risco de curto-circuito não receberá a ART de instalações elétricas. É necessário realizar a correção exigida pelo engenheiro eletricista.",
    faq4q: "Por que as vistorias na Sé demoram mais?",
    faq4a: "A idade das construções e a complexidade técnica dos laudos exigidos para 'Edificações Existentes' fazem a análise do CBPMESP ser mais detalhista.",
    guiaLegislacaoLocal: "Tirar ou renovar o AVCB no distrito da Sé envolve profundo conhecimento da IT-43 (Edificações Existentes), reforçada pelo Decreto Estadual 69.118/2024. A maioria absoluta dos imóveis ali não consegue atingir as exigências de escadas enclausuradas e rotas largas das construções modernas. O CBPMESP autoriza a liberação do documento mediante a apresentação de projetos com soluções compensatórias (ex: instalação de detectores de fumaça onde a rota é estreita). A DRD2 Engenharia domina esse trâmite de adaptação de prédios históricos e comerciais da região central, criando defesas técnicas incontestáveis no sistema Via Fácil.",
    custoDetalhe: "A emissão no centro histórico é um serviço de engenharia especializada, pois envolve laudos elétricos minuciosos e elaboração de defesas técnicas de medidas compensatórias. O custo reflete o nível de análise aprofundada.",
    ctaFinal: "Proteja seu patrimônio histórico e seu negócio na Sé com quem entende da lei. Agende uma visita técnica."
  },
  {
    slug: "vila-re",
    nome: "Vila Ré",
    zona: "Zona Leste",
    tag: "Especialistas na Zona Leste",
    avenidas: "Rua Itinguçu, Avenida Calim Eid (Tiquatira) e Avenida Amador Bueno da Veiga",
    perfil: "comércio intenso de bairro, galerias, clínicas locais, condomínios residenciais pequenos e médios",
    intro: "A Vila Ré desponta como um forte polo de comércio local e de serviços na Zona Leste, abrigando diversas lojas, farmácias, pequenas clínicas e condomínios que brotaram recentemente. A regularização pelo Decreto Estadual 69.118/2024 é diária, e o foco do Corpo de Bombeiros recai muito na integração de casas que viraram lojas.",
    box: "Muitos empreendedores na Vila Ré alugam casas antigas para transformar em restaurantes e lojas de roupas sem aprovar a mudança de uso. Na hora de renovar o AVCB ou emitir o CLCB, o bombeiro cruza os dados, enxerga uma residência no projeto, mas encontra um comércio, travando a liberação.",
    problemas: [
      "Casas residenciais transformadas em comércio sem FAT",
      "Lojas com mezaninos não documentados",
      "Condomínios de pequeno porte sem laudos (SPDA)"
    ],
    problemasDesc: [
      "A conversão de uso sem trâmite no Corpo de Bombeiros impede a renovação simples do documento.",
      "A criação de mezaninos para estoque altera a área construída e invalida a planta do projeto anterior.",
      "Prédios menores costumam negligenciar o laudo do para-raios (SPDA) até a hora de renovar o AVCB."
    ],
    testimonial: {
      text: "[Substituir por depoimento real de cliente atendido na Vila Ré. Não publicar texto fictício.]",
      author: "[Nome do cliente]",
      role: "[Tipo de imóvel / cargo]",
    },
    faq1q: "O meu comércio na Rua Itinguçu (Vila Ré) exige AVCB ou CLCB?",
    faq1a: "Geralmente locais de até 750m² e baixo risco se enquadram como CLCB (licenciamento rápido). Se houver restaurante ou mezanino grande, pode subir para AVCB. Nós fazemos essa análise na hora.",
    faq2q: "Preciso de engenheiro para assinar o laudo na Vila Ré?",
    faq2a: "Sim. Todo processo necessita do Recolhimento de Anotação de Responsabilidade Técnica (ART) por parte de um engenheiro cadastrado no CREA.",
    faq3q: "Reformei a fachada e criei um estoque nos fundos. O AVCB antigo serve?",
    faq3a: "Não. A alteração de área construída ou de layout de rota de fuga exige a atualização do projeto perante o Corpo de Bombeiros.",
    faq4q: "Como resolvo a falta de projeto do meu comércio?",
    faq4a: "A DRD2 levanta as plantas do seu imóvel, as built, e dá entrada em um novo projeto de incêndio no sistema Via Fácil, regularizando 100% da sua situação.",
    guiaLegislacaoLocal: "O comércio pujante da Vila Ré, especialmente no entorno da Rua Itinguçu, passa constantemente por fiscalizações que cobram os preceitos do Decreto Estadual 69.118/2024. Imóveis até 750m² normalmente trafegam pelo CLCB (Certificado de Licença do Corpo de Bombeiros), cuja aprovação é sistêmica desde que as ARTs e notas fiscais de extintores estejam perfeitas. O problema da região ocorre nas ampliações irregulares: construções nos fundos ou mezaninos não registrados. Nesses casos, o processo sofre exigência (Comunique-se). A DRD2 antevê essas falhas na vistoria documental e atua para retificar as metragens com FATs ou novas plantas antes de submeter o pedido de vistoria.",
    custoDetalhe: "Por focar em comércios de porte menor, a maioria da Vila Ré se enquadra em projetos Simplificados ou CLCB, mantendo o custo de regularização muito acessível e com aprovação ágil.",
    ctaFinal: "Abriu um negócio na Vila Ré ou o AVCB está vencendo? Entre em contato para uma regularização sem travamentos."
  }
];

const filePath = path.join(__dirname, 'src', 'data', 'bairros-renovacao.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Remover duplicate pinheiros (linhas entre 1330 e 1350)
// Vamos procurar a entrada duplicate de pinheiros. A primeira tá lá pra cima, a segunda perto da linha 1331.
const pinheirosRegex = /\{\s*slug:\s*"pinheiros"[\s\S]*?ctaFinal:\s*"[^"]*"\s*\},/g;
const pinheirosMatches = content.match(pinheirosRegex);

if (pinheirosMatches && pinheirosMatches.length > 1) {
    // Keep the first one, remove the second one.
    content = content.replace(pinheirosMatches[1], '');
    console.log("Removida a duplicata do slug 'pinheiros'.");
}

// Transform the new bairros to string
let objectsString = '';
for(const b of bairrosFase3) {
   objectsString += `  {\n`;
   objectsString += `    slug: "${b.slug}",\n`;
   objectsString += `    nome: "${b.nome}",\n`;
   objectsString += `    zona: "${b.zona}",\n`;
   objectsString += `    tag: "${b.tag}",\n`;
   objectsString += `    avenidas: "${b.avenidas}",\n`;
   objectsString += `    perfil: "${b.perfil}",\n`;
   objectsString += `    intro: "${b.intro}",\n`;
   objectsString += `    box: "${b.box}",\n`;
   objectsString += `    problemas: ${JSON.stringify(b.problemas)},\n`;
   objectsString += `    problemasDesc: ${JSON.stringify(b.problemasDesc)},\n`;
   objectsString += `    testimonial: ${JSON.stringify(b.testimonial)},\n`;
   objectsString += `    faq1q: "${b.faq1q}",\n`;
   objectsString += `    faq1a: "${b.faq1a}",\n`;
   objectsString += `    faq2q: "${b.faq2q}",\n`;
   objectsString += `    faq2a: "${b.faq2a}",\n`;
   objectsString += `    faq3q: "${b.faq3q}",\n`;
   objectsString += `    faq3a: "${b.faq3a}",\n`;
   objectsString += `    faq4q: "${b.faq4q}",\n`;
   objectsString += `    faq4a: "${b.faq4a}",\n`;
   objectsString += `    guiaLegislacaoLocal: ${JSON.stringify(b.guiaLegislacaoLocal)},\n`;
   objectsString += `    custoDetalhe: "${b.custoDetalhe}",\n`;
   objectsString += `    ctaFinal: "${b.ctaFinal}"\n`;
   objectsString += `  },\n`;
}

// Achar onde acaba o array bairrosCondominio
// export const bairrosCondominio: BairroData[] = [ ... ];
// We can replace "];\n\nexport const bairrosComercio" with objectsString + "];\n\nexport const bairrosComercio"
if (content.includes("];\n\nexport const bairrosComercio")) {
    content = content.replace("];\n\nexport const bairrosComercio", objectsString + "];\n\nexport const bairrosComercio");
    console.log("Inseridos os 14 novos bairros no final do array bairrosCondominio!");
} else {
    // try finding the end of array another way
    const match = content.match(/}\s*\];\s*(export const|console\.log|function|$)/);
    if(match) {
        content = content.replace(match[0], "},\n" + objectsString + match[0].replace(/}\s*\];/, "];"));
        console.log("Inseridos os 14 novos bairros usando regex fallback!");
    }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Escrita do bairros-renovacao.ts finalizada.");

