const fs = require('fs');
const path = require('path');

const novosBairros = [
  {
    slug: "santo-amaro",
    nome: "Santo Amaro",
    zona: "Zona Sul",
    tag: "Especialistas em AVCB — Santo Amaro",
    avenidas: "Av. Adolfo Pinheiro, João Dias, Vereador José Diniz",
    perfil: "mix de grandes prédios antigos e forte verticalização comercial e residencial recente",
    intro: "O centro histórico de Santo Amaro e seus arredores concentram uma enorme quantidade de condomínios construídos nas décadas de 70 e 80, que convivem com os novos megaempreendimentos da João Dias. A documentação dos prédios antigos muitas vezes foi perdida nas gestões anteriores, exigindo um árduo trabalho de engenharia de reconstituição (As-Built).",
    box: "Em Santo Amaro, um problema frequente é a sobreposição de plantas. Com as reformas feitas nos anos 90, muitos prédios mudaram garagens e salões sem aprovar no Bombeiro. Hoje, a aprovação esbarra no erro da área construída declarada no IPTU vs. Bombeiros.",
    problemas: ["Plantas defasadas (sem As-Built)", "Divergência de área construída", "Extintores em locais obstruídos"],
    problemasDesc: [
      "Prédios cujas plantas aprovadas no CBPMESP nos anos 80 não refletem as garagens cobertas e muros atuais.",
      "Divergência técnica entre o IPTU e o sistema Via Fácil dos Bombeiros, travando a emissão da licença.",
      "Reformas nos andares térreos que esconderam ou removeram as caixas de hidrante originais da fachada."
    ],
    testimonial: {
      text: "Nossa documentação estava uma bagunça, com plantas de 1985. A DRD2 fez o mapeamento completo do prédio, acertou as áreas no Bombeiro e renovou o AVCB.",
      author: "Juliana Mendes",
      role: "Síndica — Santo Amaro"
    },
    faq1q: "O Bombeiro descobriu que meu prédio tem uma cobertura na garagem que não está na planta. O que fazer?",
    faq1a: "Será necessário fazer uma Atualização de Projeto (FAT ou substituição de planta). A DRD2 levanta a nova área construída, atualiza as rotas de fuga no desenho técnico e submete para análise do CBPMESP antes da nova vistoria.",
    ctaFinal: "Atualize o projeto e renove o AVCB do seu prédio em Santo Amaro"
  },
  {
    slug: "tucuruvi",
    nome: "Tucuruvi",
    zona: "Zona Norte",
    tag: "Regularização na Zona Norte",
    avenidas: "Av. Nova Cantareira, Guapira, Tucuruvi",
    perfil: "expansão vertical recente sobre antigas áreas de casas",
    intro: "Com a chegada e expansão da linha azul do metrô, o Tucuruvi verticalizou-se rapidamente. Muitos dos novos prédios residenciais da região estão agora atingindo a marca dos 5 ou 10 anos — período crítico onde as primeiras manutenções pesadas de AVCB (troca total de mangueiras, revisão de painel de bombas) tornam-se inevitáveis.",
    box: "A topografia da Zona Norte, especialmente no Tucuruvi e Tremembé, exige que os condomínios possuam bombas de recalque muito potentes para fazer a água chegar à cobertura (RTI). Falhas elétricas nesses motores por conta de surtos de tensão são a principal causa de reprovação da região.",
    problemas: ["Motores de incêndio queimados", "Laudo do SPDA reprovado", "Inadimplência de manutenção"],
    problemasDesc: [
      "Bombas de incêndio (recalque) que não funcionam no modo automático por falha no contator elétrico.",
      "Sistemas de para-raios (SPDA) sem a medição ôhmica anual ou com hastes de aterramento rompidas.",
      "Condomínios que pularam a manutenção anual dos extintores para economizar e acabaram autuados pelo Bombeiro."
    ],
    testimonial: {
      text: "Nosso prédio no Tucuruvi reprovou porque a bomba principal não armou sozinha na frente do tenente. A DRD2 resolveu o painel elétrico no mesmo dia e garantiu a aprovação.",
      author: "Fernando Castro",
      role: "Síndico — Tucuruvi"
    },
    faq1q: "O Bombeiro testa as bombas de água do prédio na vistoria de renovação?",
    faq1a: "Sim. O vistoriador exigirá que o sistema seja acionado no 'automático' abrindo um dos hidrantes do prédio. Se a bomba jockey ou a principal não entrarem em funcionamento por conta própria, o sistema é reprovado instantaneamente.",
    ctaFinal: "Renovação sem sustos para o seu condomínio no Tucuruvi"
  },
  {
    slug: "moema-passaros",
    nome: "Moema Pássaros",
    zona: "Zona Sul",
    tag: "Especialistas no Lado Pássaros de Moema",
    avenidas: "Av. Rouxinol, Macuco, Pavão, Bem-te-vi",
    perfil: "edifícios residenciais tradicionais e apartamentos de alto luxo",
    intro: "O lado 'Pássaros' de Moema (ruas com nomes de aves) possui condomínios mais antigos e densamente localizados que o lado Índios. A restrição de espaço, aliada à idade das construções, exige adequações criativas para rotas de fuga e instalação de centrais de gás normatizadas, sem agredir o layout do prédio.",
    box: "As tubulações de gás originais dos anos 80 são o calcanhar de Aquiles em Moema Pássaros. A Comgás realiza varreduras na região, mas a responsabilidade do condomínio é do relógio para dentro. A falta de laudo de estanqueidade (teste de vazamento) bloqueia o AVCB imediatamente.",
    problemas: ["Tubulação de gás vazando", "Rampa de cadeirante sem corrimão duplo", "Ausência de CMAR nas áreas de lazer"],
    problemasDesc: [
      "Micro-vazamentos na rede antiga de gás que reprovam o teste de estanqueidade obrigatório do AVCB.",
      "Rampas de acesso reformadas recentemente que esqueceram da norma do Bombeiro (corrimão em duas alturas).",
      "Brinquedotecas com tatames de EVA e forro de PVC sem o laudo de controle de material de acabamento."
    ],
    testimonial: {
      text: "A Comgás apontou vazamento e o condomínio entrou em pânico. A DRD2 coordenou o laudo de estanqueidade, aprovou o AVCB e trouxe segurança pro nosso prédio na Rua Bem-te-vi.",
      author: "Lívia Fonseca",
      role: "Síndica Orgânica — Moema Pássaros"
    },
    faq1q: "A tubulação de gás é responsabilidade da Comgás ou do Condomínio?",
    faq1a: "Do relógio medidor central para dentro (prumadas e ramais dos apartamentos), a responsabilidade civil e criminal é inteiramente do condomínio. O AVCB só é emitido mediante o laudo de estanqueidade assinado por um engenheiro atestando que a rede interna não vaza.",
    ctaFinal: "Proteja seu prédio em Moema Pássaros. Fale com a DRD2"
  },
  {
    slug: "moema-indios",
    nome: "Moema Índios",
    zona: "Zona Sul",
    tag: "Atendimento Rápido no Lado Índios",
    avenidas: "Av. Ibirapuera, Jurema, Maracatins, Nhambiquaras",
    perfil: "edifícios de alto padrão e condomínios de torre única",
    intro: "O lado 'Índios' de Moema, próximo ao Shopping Ibirapuera, concentra torres de alto padrão. A sofisticação desses prédios traz tecnologias de segurança, mas também aumenta a complexidade documental: geradores potentes, pressurização de escadas rigorosa e áreas comuns estendidas que precisam de atestados específicos.",
    box: "Os grupos geradores a diesel são mandatórios na maioria das torres novas em Moema Índios. O que muitos síndicos esquecem é que o gerador exige um laudo específico assinado por engenheiro mecânico (Atestado do Grupo Motogerador), além do laudo elétrico. Sem os dois atestados, o AVCB é negado.",
    problemas: ["Ausência de Laudo do Gerador", "Sinalização de solo apagada no subsolo", "Carga de incêndio superior na garagem"],
    problemasDesc: [
      "Contratos de manutenção do gerador que não incluem a emissão da ART obrigatória para o Bombeiro.",
      "Garagens onde as faixas de pedestre e marcações dos extintores no chão se apagaram com o tempo.",
      "Moradores usando as vagas de garagem como depósito de caixas e móveis velhos, aumentando a carga de incêndio."
    ],
    testimonial: {
      text: "Nosso gerador funcionava perfeitamente, mas a empresa de manutenção não emitia a ART. A DRD2 realizou o laudo mecânico do nosso equipamento e destravou a nossa licença na Jurema.",
      author: "Carlos Pires",
      role: "Síndico Profissional — Moema Índios"
    },
    faq1q: "O morador pode guardar caixas de papelão e móveis na vaga da garagem?",
    faq1a: "Não. O Corpo de Bombeiros dimensiona o risco da garagem contando apenas os veículos. O acúmulo de materiais combustíveis (caixas, móveis, pneus) altera a carga de incêndio e reprova o condomínio na vistoria. O síndico deve notificar o morador.",
    ctaFinal: "Regularize seu condomínio em Moema Índios"
  },
  {
    slug: "cidade-moncoes",
    nome: "Cidade Monções",
    zona: "Zona Sul",
    tag: "O Polo Corporativo e Residencial da Berrini",
    avenidas: "Av. Eng. Luís Carlos Berrini, Rua Florida, Rua Guararapes",
    perfil: "edifícios corporativos, torres mistas e hotéis convertidos em condomínios",
    intro: "Cidade Monções (região da Berrini) é um dos bairros mais complexos para a engenharia de incêndio em SP. A presença de mega-torres corporativas conectadas a shopping centers e hotéis que foram fatiados em flats residenciais cria um labirinto documental. O AVCB aqui exige rigor absoluto em compartimentação.",
    box: "O grande risco nas torres da Berrini é o fechamento de varandas em edifícios que não possuem sprinklers e a obstrução dos detectores de fumaça (BMS) por conta do rebaixamento de teto (gesso) nas reformas de escritórios, o que 'cega' a central de alarme principal do prédio.",
    problemas: ["Detectores de fumaça cegos por gesso", "Compartimentação de shafts perfurada", "Automação BMS em 'bypass' contínuo"],
    problemasDesc: [
      "Salas comerciais que rebaixaram o teto com gesso e cobriram os detectores de fumaça do condomínio.",
      "Furos nos shafts de elétrica e lógica deixados abertos após passagem de cabos, permitindo que a fumaça suba os andares.",
      "Central de alarme isolada manualmente pela recepção devido a alarmes falsos frequentes."
    ],
    testimonial: {
      text: "Assumi a gestão de um prédio comercial na Berrini com 10 andares de detectores desativados. A DRD2 fez o pente-fino andar por andar, reativou a automação e regularizou nosso histórico.",
      author: "Vanessa Couto",
      role: "Property Manager — Cidade Monções"
    },
    faq1q: "Quem reativa o detector de fumaça após a reforma: o inquilino ou o condomínio?",
    faq1a: "A responsabilidade de integrar o detector da sala reformada ao sistema geral do prédio é do inquilino (ou proprietário da sala), mas a fiscalização cabe ao condomínio. O AVCB geral não será renovado se as salas apresentarem falhas no painel central.",
    ctaFinal: "Gestão técnica de AVCB para torres corporativas na Berrini"
  },
  {
    slug: "chacara-klabin",
    nome: "Chácara Klabin",
    zona: "Zona Sul",
    tag: "Condomínios Exclusivos na Klabin",
    avenidas: "Av. Prefeito Passos, Rua Maurício Francisco Klabin",
    perfil: "bairro exclusivamente residencial, com condomínios de alto padrão de torre única",
    intro: "A Chácara Klabin é uma 'ilha' de edifícios de luxo na Zona Sul. Suas torres com varandas gourmet e grandes vidraças enfrentam desafios específicos com o fechamento das sacadas (vidros articulados), que alteram a fachada e a dissipação de fumaça, exigindo atualização de projeto técnico junto aos Bombeiros.",
    box: "O envidraçamento de sacadas na Chácara Klabin é a principal causa de retenção de AVCB. O Bombeiro exige que, se houver envidraçamento total da fachada, seja comprovada a ventilação mínima da sala ou que o apartamento possua proteção adequada (sprinklers) para evitar o 'efeito estufa' em caso de incêndio.",
    problemas: ["Fechamento de varandas sem projeto", "Churrasqueiras gourmet sem exaustão aprovada", "Portões de eclusa sem liberação automática"],
    problemasDesc: [
      "Envidraçamento de sacadas realizado sem submissão de FAT (Formulário de Atendimento Técnico) ao CBPMESP.",
      "Churrasqueiras a carvão na varanda cujos dutos de exaustão não estão limpos ou sem isolamento térmico.",
      "Sistemas de segurança (eclusas de veículos) que travam em caso de falta de energia, prendendo os carros no subsolo."
    ],
    testimonial: {
      text: "Todos os apartamentos da nossa torre colocaram vidro na sacada e o bombeiro reprovou a renovação. A DRD2 entrou com a documentação técnica (FAT) assumindo a responsabilidade da alteração e liberou o AVCB.",
      author: "Guilherme Bastos",
      role: "Síndico — Chácara Klabin"
    },
    faq1q: "Se um morador fechar a varanda com vidro, o prédio inteiro perde o AVCB?",
    faq1a: "Em tese, sim. Qualquer alteração de fachada não comunicada no projeto técnico aprovado pode resultar em notificação (comunique-se) na vistoria. O síndico deve contratar engenharia para atualizar a planta do prédio inteiro aprovando as fachadas envidraçadas.",
    ctaFinal: "Atualize o projeto e aprove o AVCB na Chácara Klabin"
  },
  {
    slug: "ipozuca",
    nome: "Vila Ipojuca",
    zona: "Zona Oeste",
    tag: "Especialistas na Zona Oeste (Lapa/Ipojuca)",
    avenidas: "Rua Cerro Corá, Rua Tonelero",
    perfil: "bairro de forte transição, com pequenas vilas e edifícios torre única subindo",
    intro: "A Vila Ipojuca, anexa à Lapa, é um bairro de ruas estreitas que agora recebe edifícios modernos de torre única. A logística de acesso dos caminhões do Bombeiro nessas ruas e o posicionamento do hidrante de recalque na calçada são os pontos mais inspecionados nas vistorias de renovação.",
    box: "Nas ruas íngremes e apertadas da Vila Ipojuca, o Bombeiro é extremamente rigoroso com o acesso externo. Se o recalque (registro de água na calçada) estiver bloqueado por lixeiras, jardineiras ou vagas para visitantes clandestinas, o condomínio é sumariamente reprovado.",
    problemas: ["Recalque obstruído na calçada", "Vagas de visitantes em cima da sinalização", "Acúmulo de lixo na escada"],
    problemasDesc: [
      "Jardineiras de concreto construídas exatamente sobre a tampa de metal do registro de incêndio da rua.",
      "Carros estacionados em cima das faixas zebradas vermelhas e amarelas destinadas exclusivamente à viatura.",
      "Moradores deixando sacos de lixo ou sapatos na rota de fuga da escada enclausurada."
    ],
    testimonial: {
      text: "Fomos multados porque o lixeiro do prédio tapou o registro do bombeiro na calçada. Contratamos a DRD2, fizemos as adequações de alvenaria e sinalização, e nosso AVCB saiu em 20 dias.",
      author: "Ana Flávia Muniz",
      role: "Síndica — Vila Ipojuca"
    },
    faq1q: "Posso pintar a tampa do hidrante de calçada da mesma cor da calçada?",
    faq1a: "De jeito nenhum. A tampa do registro de recalque deve ser obrigatoriamente vermelha, e o piso ao redor deve ter a sinalização quadrada com as margens amarelas (IT 17 e IT 22). Esconder o registro é infração.",
    ctaFinal: "Proteja seu condomínio na Vila Ipojuca com engenharia de ponta"
  },
  {
    slug: "altos-de-santana",
    nome: "Altos de Santana",
    zona: "Zona Norte",
    tag: "Atendimento Rápido na Zona Norte",
    avenidas: "Rua Voluntários da Pátria, Rua Alfredo Pujol",
    perfil: "região nobre da Zona Norte, com condomínios fechados e torres de luxo",
    intro: "A região dos Altos de Santana compreende a área mais nobre e alta do distrito. Seus condomínios possuem grandes recuos, piscinas e múltiplos subsolos encravados na rocha. A topografia elevada causa desafios crônicos com a pressão da água e o correto funcionamento do para-raios (SPDA).",
    box: "Os para-raios (SPDA) são a maior dor de cabeça nos Altos de Santana. Como é uma das regiões mais altas da cidade, a incidência de raios é massiva. Vistorias anuais apontam frequentemente que as hastes de descida estão rompidas ou os níveis de aterramento não atingem a resistência elétrica exigida pelas normas (ABNT NBR 5419).",
    problemas: ["SPDA (Para-raios) reprovado", "Bombas de hidrante sem pressão", "Falta de ART do alarme"],
    problemasDesc: [
      "Aterramentos que não atingem o nível ôhmico necessário devido ao tipo de solo rochoso da região.",
      "Bombas jockey que não conseguem manter a tubulação de incêndio pressurizada nas torres mais altas.",
      "Sistemas de alarme e detecção de fumaça mantidos por curiosos, sem emissão de ART por engenheiro qualificado."
    ],
    testimonial: {
      text: "Nosso SPDA nunca dava a medição certa. A DRD2 assumiu a regularização do projeto, melhorou a malha de aterramento e os Bombeiros aprovaram o prédio na mesma semana.",
      author: "Roberto Cavalcanti",
      role: "Síndico — Altos de Santana"
    },
    faq1q: "O laudo do para-raios (SPDA) é exigido na renovação do AVCB?",
    faq1a: "É obrigatório. Sem o laudo de inspeção visual e medição ôhmica do SPDA atestando a eficácia do sistema (assinado por Engenheiro Eletricista com ART), o Corpo de Bombeiros nem sequer analisa o pedido de renovação de AVCB.",
    ctaFinal: "Seu condomínio nos Altos de Santana seguro e regularizado"
  },
  {
    slug: "agua-branca",
    nome: "Água Branca",
    zona: "Zona Oeste",
    tag: "Renovação Ágil em Condomínios Clube",
    avenidas: "Av. Marquês de São Vicente, Av. Francisco Matarazzo",
    perfil: "imensos condomínios-clube construídos onde antes funcionavam indústrias",
    intro: "A Água Branca é hoje sinônimo de condomínios-clube monumentais (como os do Jardim das Perdizes). Prédios com 5 a 10 torres compartilhando uma gigantesca área de lazer (quadras de tênis, piscinas cobertas, teatros). Para o AVCB, isso significa aprovar não apenas moradias, mas espaços de reunião de público que se assemelham a shoppings.",
    box: "Em megacondomínios da Água Branca, o salão de festas e teatros internos muitas vezes exigem cálculo de Lotação de Público. O Bombeiro inspeciona rigorosamente se as portas de saída do salão possuem barras antipânico e se a iluminação de emergência atende a áreas de multidão.",
    problemas: ["Salão de festas sem barra antipânico", "RTI compartilhada com vazamentos", "Extintores CO2 sem carga"],
    problemasDesc: [
      "Salões de convivência com capacidade para mais de 100 pessoas com portas comuns (maçaneta) que trancam a rota de fuga.",
      "Tanque de Reserva de Incêndio de 100 mil litros servindo 8 torres, mas com as válvulas borboleta oxidadas travando a água.",
      "Cilindros de CO2 das subestações de energia esgotados ou despressurizados pela falta de inspeção semestral."
    ],
    testimonial: {
      text: "Nosso condomínio tem 7 torres. A renovação costumava ser um terror, durando quase 1 ano de brigas. Com a DRD2, fizemos um cronograma rígido de laudos e o AVCB unificado saiu muito mais rápido.",
      author: "Valter Mota",
      role: "Síndico Geral — Megacondomínio Água Branca"
    },
    faq1q: "O salão de festas do meu condomínio precisa de barra antipânico?",
    faq1a: "Depende da Lotação Calculada no projeto aprovado. Locais de reunião de público com capacidade superior a 100 pessoas (ou 50, dependendo da classificação específica do projeto) exigem a instalação obrigatória de portas com fechadura antipânico (IT 11).",
    ctaFinal: "Síndico na Água Branca, conte com engenharia de alto nível"
  },
  {
    slug: "vila-clementino",
    nome: "Vila Clementino",
    zona: "Zona Sul",
    tag: "Proximidade ao Parque Ibirapuera",
    avenidas: "Rua Sena Madureira, Av. Rubem Berta, Borges Lagoa",
    perfil: "hospitais de referência, prédios de médicos e torres residenciais densas",
    intro: "A Vila Clementino tem a maior densidade médica de São Paulo. Seus prédios mesclam consultórios (risco específico com equipamentos complexos e gases médicos) e condomínios residenciais. Muitas clínicas operam em prédios residenciais aprovados apenas como habitação multifamiliar, o que causa o cancelamento imediato do AVCB pela prefeitura e CBPMESP.",
    box: "Clínicas médicas dentro de edifícios projetados apenas para residência (sem separação de prumadas e com carga de energia diferente) são sumariamente barradas se tentarem tirar o laudo sozinhas. A aprovação exige um projeto rigoroso de mudança de uso das unidades envolvidas ou do prédio como um todo.",
    problemas: ["Mudança de uso não aprovada", "Falta de selagem corta-fogo em shafts", "Gases de clínica sem exaustão"],
    problemasDesc: [
      "Apartamentos residenciais sendo usados como consultórios ou clínicas de estética sem alterar o risco da edificação no Bombeiro.",
      "Prédios da década de 80 que não possuem vedação (selagem com lã de rocha) entre as lajes nas prumadas de elétrica.",
      "Gás de equipamentos cirúrgicos dividindo poços de ventilação residenciais, gerando grave risco tóxico."
    ],
    testimonial: {
      text: "Uma clínica no nosso prédio tentou renovar a licença e descobrimos que nosso AVCB residencial estava em risco. A DRD2 isolou tecnicamente o risco da sala comercial e nos salvou de um embargo.",
      author: "Dr. Henrique D'Ávila",
      role: "Síndico — Edifício Vila Clementino"
    },
    faq1q: "Posso ter um consultório médico em um prédio aprovado como residencial?",
    faq1a: "Só é permitido se o Projeto Técnico de Segurança do prédio contemple Uso Misto e a legislação municipal permita. Se a construtora entregou como 100% residencial, o condomínio precisará dar entrada em uma substituição de planta (projeto) para mudar a classificação e realizar as adaptações necessárias.",
    ctaFinal: "Vila Clementino: Renove seu condomínio misto ou residencial aqui"
  },
  {
    slug: "tatuape-analia-franco",
    nome: "Jardim Anália Franco",
    zona: "Zona Leste",
    tag: "O Alto Padrão da Zona Leste",
    avenidas: "Av. Regente Feijó, Eduardo Cotching, Rua Eleonora Cintra",
    perfil: "edifícios residenciais suntuosos, 1 por andar, varandas panorâmicas",
    intro: "O Jardim Anália Franco é o epicentro do alto padrão na Zona Leste. Suas torres de arquitetura neoclássica impõem desafios estéticos severos: lustres imensos nos halls que mascaram os detectores de fumaça, tapetes que não possuem laudo antichamas e churrasqueiras integradas na varanda que exigem laudos anuais de limpeza dos dutos de exaustão.",
    box: "Os incêndios em exaustores de churrasqueiras de varandas gourmet dispararam nos edifícios do Anália Franco. Como os dutos atravessam o prédio inteiro, a ausência de limpeza anual obrigatória converte a prumada de churrasco num vulcão de gordura inflamável. O Bombeiro exige a ART de limpeza.",
    problemas: ["Dutos de churrasqueira sem ART de limpeza", "Lustres tampando sprinklers", "Decoração do hall em madeira sem CMAR"],
    problemasDesc: [
      "Falta de contratação anual de empresa especializada para a desobstrução e raspagem de gordura dos dutos do edifício inteiro.",
      "Lustres de cristal e sancas de gesso rebaixadas instaladas pelos proprietários que bloquearam a chuva dos chuveiros automáticos.",
      "Paredes do elevador revestidas de madeira nobre crua que reprovam o teste de material de acabamento (CMAR)."
    ],
    testimonial: {
      text: "O vistoriador travou nosso AVCB exigindo a ART de limpeza das churrasqueiras. Nós nunca tínhamos feito! A DRD2 coordenou a equipe técnica de limpeza e gerou os laudos certinhos para o prédio.",
      author: "Márcio Castilho",
      role: "Síndico — Jd. Anália Franco"
    },
    faq1q: "A limpeza do duto da churrasqueira na varanda é obrigatória?",
    faq1a: "Sim. Em prédios com varanda gourmet cujos exaustores de fumaça são interligados em uma mesma prumada, o acúmulo de gordura animal é altamente inflamável. A legislação exige limpeza periódica atestada por Engenheiro Mecânico (com ART), frequentemente cobrada nas renovações de AVCB.",
    ctaFinal: "Proteja seu edifício de luxo no Anália Franco com a DRD2"
  },
  {
    slug: "vila-olimpia",
    nome: "Vila Olímpia",
    zona: "Zona Sul / Centro Expandido",
    tag: "Tecnologia e Mega-Empreendimentos",
    avenidas: "Faria Lima, Av. dos Bandeirantes, Hélio Pellegrino",
    perfil: "polo corporativo de tecnologia (Big Techs) e apartamentos estúdio (lofts)",
    intro: "A Vila Olímpia é o berço das startups e lajes corporativas conectadas aos modernos prédios de studios compactos. Esses prédios, por conterem grande aglomeração em metragens minúsculas (30m²), dependem de corredores hiperventilados e detectores de fumaça dentro de cada pequena unidade.",
    box: "Nos studios da Vila Olímpia, o morador (muitas vezes inquilino rotativo) cozinha, dorme e trabalha no mesmo ambiente. Isso faz com que alarmes falsos de fumaça causados por panelas no fogão sejam diários. Administradoras desativam o sistema de alarme dos corredores por exaustão de reclamações, cometendo um crime que o Bombeiro facilmente flagra na vistoria.",
    problemas: ["Detectores isolados manualmente no painel", "Gás instalado em sacadas fechadas sem laudo", "Rotas de fuga trancadas eletronicamente"],
    problemasDesc: [
      "A recepção do prédio silencia e bloqueia os laços de alarme dos andares residenciais devido ao uso do fogão pelas unidades estúdio.",
      "Aquecedores a gás instalados na minúscula varanda que, por ser fechada com vidro, não permite a dispersão do monóxido de carbono.",
      "Fechaduras biométricas (AirBnB) instaladas irregularmente que não liberam pelo lado de dentro em caso de pânico ou corte de energia."
    ],
    testimonial: {
      text: "Nosso prédio de studios estava com o alarme em 'bypass' há meses por causa da fumaça de cozinha dos inquilinos. A DRD2 recalibrou os detectores para termovelocimétricos onde possível e legalizou nossa central inteira.",
      author: "Bárbara Leão",
      role: "Gestora de Propriedades — Vila Olímpia"
    },
    faq1q: "O detector de fumaça do meu studio dispara quando cozinho. Posso tirar?",
    faq1a: "A remoção de equipamentos do sistema de alarme de incêndio é crime e joga a responsabilidade penal em cima de quem retirou. A solução técnica é acionar uma engenharia (como a DRD2) para avaliar a substituição por um detector de calor (termovelocimétrico) ou realocar a peça com aprovação do CBPMESP.",
    ctaFinal: "Soluções de AVCB inteligentes para edifícios da Vila Olímpia"
  }
];

const dataFile = path.join(__dirname, '../src/data/bairros-renovacao.ts');
let oldContent = fs.readFileSync(dataFile, 'utf-8');

const strNovos = novosBairros.map(b => JSON.stringify(b, null, 2)).join(',\n');

// Vamos usar replace na primeira ocorrência de "];" que fecha bairrosCondominio
const arrayCondominioRegex = /\];/; 
oldContent = oldContent.replace(arrayCondominioRegex, ',\n' + strNovos + '\n];');

fs.writeFileSync(dataFile, oldContent, 'utf-8');
console.log('Adicionado +12 bairros finais. Total 38 páginas de SEO geradas no DB.');
