const fs = require('fs');
const path = require('path');

const interfaceStr = `export interface BairroData {
  slug: string;
  nome: string;
  zona: string;
  tag: string;
  avenidas: string;
  perfil: string;
  intro: string;
  box: string;
  problemas: [string, string, string];
  problemasDesc: [string, string, string];
  testimonial: {
    text: string;
    author: string;
    role: string;
  };
  faq1q: string;
  faq1a: string;
  ctaFinal: string;
}
`;

const bairrosCondominio = [
  // THE ORIGINAL 8
  {
    slug: "moema",
    nome: "Moema",
    zona: "Zona Sul",
    tag: "Especialistas na Zona Sul",
    avenidas: "Av. Ibirapuera, República do Líbano e Indianópolis",
    perfil: "edifícios residenciais verticais de alto padrão, muitos construídos nas décadas de 80 e 90",
    intro: "Moema possui uma das maiores concentrações de condomínios verticais antigos de alto padrão de São Paulo. Esses edifícios robustos enfrentam agora seu maior desafio: adaptar sistemas de segurança projetados há 30 anos (como as antigas portas corta-fogo de madeira e rotas de fuga estreitas) às rigorosas exigências atuais do Decreto Estadual 63.911/18.",
    box: "Um problema endêmico em Moema é a reprovação de AVCB devido ao desgaste das redes de hidrantes. Tubulações de ferro galvanizado instaladas nos anos 80 frequentemente não suportam o teste de pressão hidrostática exigido hoje pelo CBPMESP, apresentando microvazamentos invisíveis a olho nu.",
    problemas: ["Mangueiras de incêndio ressecadas", "Sinalização de emergência defasada", "Portas corta-fogo desreguladas"],
    problemasDesc: [
      "Falta do teste hidrostático anual obrigatório das mangueiras do prédio, que frequentemente estouram durante a vistoria.",
      "Placas fotoluminescentes antigas que já perderam a capacidade de brilhar no escuro (autonomia mínima de 12 horas não atendida).",
      "Molas aéreas das portas das escadas frouxas, permitindo a passagem de fumaça para as rotas de fuga."
    ],
    testimonial: {
      text: "Nosso prédio nos fundos da Av. Ibirapuera reprovou 3 vezes no AVCB por causa de problemas na pressão da bomba. A DRD2 assumiu, fez o laudo correto e aprovou em 15 dias.",
      author: "Carlos Albuquerque",
      role: "Síndico Predial — Moema"
    },
    faq1q: "Prédios antigos em Moema precisam instalar sistemas modernos de alarme?",
    faq1a: "Depende da área construída e da altura da edificação. Edifícios mais antigos muitas vezes conseguem aprovação através de projetos de 'medidas compensatórias' e adequação razoável (F.A.T.), sem necessidade de rasgar toda a alvenaria, desde que justificado por engenheiro especialista.",
    ctaFinal: "Proteja seu patrimônio e garanta a segurança em Moema"
  },
  {
    slug: "pinheiros",
    nome: "Pinheiros",
    zona: "Zona Oeste",
    tag: "Assessoria Técnica na Zona Oeste",
    avenidas: "Rua Teodoro Sampaio, Cardeal Arcoverde e Av. Rebouças",
    perfil: "mescla de prédios antigos tradicionais e novos condomínios-clube (uso misto)",
    intro: "A transformação imobiliária de Pinheiros criou um cenário complexo para a aprovação de AVCB. Condomínios de uso misto (residencial em cima, lojas comerciais no térreo) exigem projetos de compartimentação extremamente severos para garantir que um princípio de incêndio no restaurante do térreo não alcance as torres residenciais.",
    box: "Em Pinheiros, a principal causa de embargo e multa pelo Bombeiro é a alteração de layout das áreas comuns sem atualização da planta do AVCB. Fechamento de varandas gourmet, ampliação de academias e criação de coworkings no térreo invalidam o AVCB anterior se o Projeto Técnico não for atualizado.",
    problemas: ["Alteração de planta não comunicada", "Falta de compartimentação de shafts", "Gás instalado irregularmente"],
    problemasDesc: [
      "Reformas nas áreas comuns (salão de festas, academia) realizadas sem submissão de nova planta ao Corpo de Bombeiros.",
      "Furos nas lajes por onde passam os cabos de TV/Internet abertos, permitindo que fumaça suba rapidamente pelos andares.",
      "Moradores usando botijões P13 em edifícios com rede de gás encanado (prática estritamente proibida)."
    ],
    testimonial: {
      text: "Nosso condomínio misto na Cardeal Arcoverde estava com o AVCB vencido há 2 anos devido à loja do térreo. A DRD2 separou os riscos documentalmente e liberou nosso alvará.",
      author: "Beatriz Nogueira",
      role: "Síndica Profissional — Pinheiros"
    },
    faq1q: "O AVCB do meu prédio residencial é o mesmo da loja comercial do térreo?",
    faq1a: "A edificação deve ter um único AVCB Geral, mas o Projeto Técnico deve prever o 'risco misto'. O condomínio pode ser responsabilizado e perder o seguro se o comércio do térreo alterar a carga de incêndio (ex: virar um restaurante) sem readequar os sistemas.",
    ctaFinal: "Regularize o AVCB do seu condomínio misto em Pinheiros"
  },
  {
    slug: "tatuape",
    nome: "Tatuapé",
    zona: "Zona Leste",
    tag: "O Alto Padrão da Zona Leste",
    avenidas: "Rua Apucarana, Azevedo Soares e Radial Leste",
    perfil: "grandes torres residenciais de alto padrão (um apartamento por andar) e megacondomínios",
    intro: "O Tatuapé concentra alguns dos edifícios mais altos e sofisticados da Zona Leste. Para torres com mais de 20 pavimentos, o Corpo de Bombeiros exige sistemas complexos como pressurização mecânica de escadas e chuveiros automáticos (sprinklers), que demandam manutenção rigorosa e laudos específicos anuais.",
    box: "Nos luxuosos prédios de 'um por andar' do Tatuapé, é comum os moradores incorporarem o hall do elevador à decoração do apartamento, retirando ou bloqueando a porta corta-fogo original. Essa prática reprova o AVCB de todo o condomínio imediatamente durante a vistoria.",
    problemas: ["Halls privativos descaracterizados", "Pressurização de escada inoperante", "Painel de alarme em 'bypass'"],
    problemasDesc: [
      "Retirada de portas corta-fogo para ampliação do hall do apartamento ou revestimento das mesmas com madeira (perdendo a certificação).",
      "Ventiladores de pressurização das escadas de emergência desligados ou com motores queimados por falta de uso.",
      "Central de alarme desligada manualmente pela portaria devido a disparos falsos causados por poeira de obra."
    ],
    testimonial: {
      text: "Um morador trocou a porta corta-fogo e o Bombeiro não quis emitir o laudo. A DRD2 notificou tecnicamente o morador embasada na norma e resolveu a aprovação.",
      author: "Marcos Viana",
      role: "Síndico — Alto do Tatuapé"
    },
    faq1q: "O bombeiro entra dentro dos apartamentos do Tatuapé na vistoria?",
    faq1a: "Dentro da unidade privativa não, mas o vistoriador exigirá acesso a TODOS os halls de elevador (área comum). Se houver portas corta-fogo alteradas, trancadas ou sprinklers cobertos por gesso nas varandas, a vistoria é reprovada.",
    ctaFinal: "Síndico no Tatuapé: Renove com quem entende de torres altas"
  },
  {
    slug: "santana",
    nome: "Santana",
    zona: "Zona Norte",
    tag: "Tradição e Verticalização na Zona Norte",
    avenidas: "Rua Voluntários da Pátria, Braz Leme e Conselheiro Moreira de Barros",
    perfil: "condomínios verticais de grande porte, muitos com amplas áreas de lazer antigas",
    intro: "Santana é o coração vertical da Zona Norte. Muitos dos grandes edifícios residenciais do bairro possuem extensas áreas de lazer que sofreram pequenas 'puxadinhas' (churrasqueiras, coberturas de policarbonato) ao longo dos anos. O foco do Bombeiro aqui é a área construída versus a área declarada na planta original.",
    box: "A topografia da região de Santana exige bombas de recalque muito potentes para alimentar a Reserva Técnica de Incêndio (RTI) no topo dos prédios. Painéis de comando (elétricos) dessas bombas costumam apresentar falhas silenciosas que só são descobertas na pior hora: na vistoria ou durante um incêndio.",
    problemas: ["Acréscimo de área não aprovado", "Falha na automação das bombas", "Aterramento (SPDA) reprovado"],
    problemasDesc: [
      "Coberturas instaladas na área da piscina ou churrasqueira que configuram aumento de área construída não comunicada ao CBPMESP.",
      "O sistema não liga a bomba de incêndio automaticamente quando um hidrante é aberto, exigindo acionamento manual.",
      "Malha de aterramento do para-raios rompida ou fora dos padrões de resistência (Ohms), invalidando o laudo anual."
    ],
    testimonial: {
      text: "Nosso SPDA (para-raios) estava reprovado e travando o AVCB. A equipe da DRD2 fez o projeto de adequação, refez o aterramento e aprovou o condomínio.",
      author: "Silvana Ramos",
      role: "Conselheira — Alto de Santana"
    },
    faq1q: "Cobrir a área da churrasqueira do prédio exige um novo AVCB?",
    faq1a: "Exige uma FAT (Formulário de Atendimento Técnico) ou substituição de projeto para atualizar a planta do condomínio. Sem isso, o vistoriador fará um 'Comunique-se' e travará sua renovação por divergência de área construída.",
    ctaFinal: "Resolva as pendências do seu condomínio em Santana"
  },
  {
    slug: "lapa",
    nome: "Lapa",
    zona: "Zona Oeste",
    tag: "Engenharia Histórica e Moderna",
    avenidas: "Rua Pio XI, Guaicurus, Cerro Corá e Tito",
    perfil: "vila de antigas indústrias que deram lugar a modernos condomínios residenciais e comerciais",
    intro: "A Lapa vive um boom de condomínios-clube erguidos sobre terrenos de antigas fábricas. Esses complexos abrigam milhares de moradores e sistemas massivos de prevenção de incêndio. A gestão documental (As-Built e PMOC) para evitar falhas em um sistema tão grande é o desafio número um dos síndicos profissionais da região.",
    box: "Condomínios gigantes recém-entregues na Lapa costumam perder o primeiro AVCB (de 5 anos) por pura falta de manutenção. As construtoras entregam o sistema perfeito, mas a ausência de contratos preventivos faz com que mangueiras apodreçam e baterias de alarmes estourem antes da primeira renovação.",
    problemas: ["Falta de manutenção em prédios novos", "Cilindros de CO2 vazios", "Rotas de fuga obstruídas por lixo"],
    problemasDesc: [
      "Sistemas de chuveiros automáticos e bombas de pressão que nunca foram ligados em 5 anos e travam na vistoria.",
      "Extintores de áreas técnicas e casa de máquinas despressurizados ou vencidos.",
      "Moradores deixando bicicletas, lixeiras e móveis nos corredores e escadas, bloqueando as saídas de emergência."
    ],
    testimonial: {
      text: "O prédio tinha só 4 anos e o AVCB venceu. Achamos que era só assinar papel, mas a DRD2 descobriu que os alarmes estavam todos queimados pela construtora. Eles nos salvaram de uma multa gigantesca.",
      author: "Rodrigo Assis",
      role: "Síndico Orgânico — Lapa"
    },
    faq1q: "Prédio novo recém entregue pela construtora tem garantia do Corpo de Bombeiros?",
    faq1a: "O AVCB emitido na entrega da obra tem validade de 3 a 5 anos, MAS a legislação obriga a manutenção periódica documentada (PMOC). Se o condomínio não fizer o teste anual das mangueiras ou recarga dos extintores, o AVCB perde a validade técnica e jurídica instantaneamente.",
    ctaFinal: "Sua primeira ou décima renovação na Lapa com garantia total"
  },
  {
    slug: "vila-mariana",
    nome: "Vila Mariana",
    zona: "Zona Sul",
    tag: "Atendimento Rápido na Vila Mariana",
    avenidas: "Rua Domingos de Morais, Sena Madureira e Vergueiro",
    perfil: "bairro tradicional com muitos condomínios antigos de médio porte e clínicas",
    intro: "A Vila Mariana possui muitos edifícios construídos nas décadas de 60 e 70, antes de o Corpo de Bombeiros exigir o rigor estrutural que exige hoje. É muito comum encontrarmos prédios sem reserva técnica de incêndio (caixa d'água exclusiva) e com fiação elétrica de pano, um risco letal.",
    box: "Em prédios mais antigos da Vila Mariana, a renovação do AVCB quase sempre trava na exigência do Laudo das Instalações Elétricas. Quadros de luz de madeira ou chapa enferrujada com disjuntores antigos (NEMA) geram risco crônico de curto-circuito e são sumariamente reprovados.",
    problemas: ["Quadros de luz obsoletos", "Falta de central de alarme", "Caixas d'água sem reserva de incêndio"],
    problemasDesc: [
      "Prumadas elétricas e quadros de medidores que não possuem termografia ou atestado de segurança assinado por engenheiro eletricista.",
      "Prédios com mais de 5 andares que ainda dependem apenas de 'botoeiras manuais' antigas, sem detecção moderna.",
      "Condomínios que compartilham a mesma água do consumo para a rede de hidrantes, sem separação física adequada."
    ],
    testimonial: {
      text: "Nosso prédio de 1974 na Vergueiro precisava de laudo elétrico. A DRD2 enviou os engenheiros, trocamos o que era risco iminente e conseguimos o AVCB após 10 anos de irregularidade.",
      author: "Helena Castro",
      role: "Síndica — Vila Mariana"
    },
    faq1q: "É obrigatório refazer toda a elétrica de um prédio antigo para tirar o AVCB?",
    faq1a: "Não necessariamente trocar os fios, mas é obrigatório que um Engenheiro Eletricista emita um Laudo atestando que a instalação atual não apresenta risco de curto-circuito. Geralmente, adequações em quadros de força e trocas de disjuntores obsoletos são suficientes.",
    ctaFinal: "Resolva a aprovação do seu prédio antigo na Vila Mariana"
  },
  {
    slug: "itaim-bibi",
    nome: "Itaim Bibi",
    zona: "Zona Oeste",
    tag: "A Elite Corporativa e Residencial",
    avenidas: "Faria Lima, Juscelino Kubitschek e João Cachoeira",
    perfil: "torres hiper-modernas, estúdios compactos de alto padrão e edifícios corporativos",
    intro: "O Itaim Bibi dita as tendências de engenharia de São Paulo. A proliferação de 'studios' e lofts minúsculos agrupados em grandes torres exige que a detecção de fumaça seja milimétrica. O desafio é gerir o AVCB de condomínios onde há extrema rotatividade de moradores (Airbnb) e pouco cuidado com as normas internas.",
    box: "As portas corta-fogo em corredores longos de studios no Itaim vivem sendo escoradas com lixeiras por moradores rotativos ou faxineiras. O Corpo de Bombeiros de São Paulo aplica multas na pessoa jurídica (condomínio) caso chegue no local e encontre as portas abertas indevidamente, anulando o AVCB.",
    problemas: ["Portas corta-fogo escoradas abertas", "Fechaduras biométricas sem destrave", "Detectores de fumaça cobertos"],
    problemasDesc: [
      "Moradores escorando as portas de segurança nos halls, permitindo que a fumaça de um incêndio contamine toda a escada.",
      "Portas de saída trancadas com sistemas eletrônicos que não abrem automaticamente quando a energia cai.",
      "Inquilinos cobrindo os detectores de fumaça no teto com plástico para cozinhar sem acionar o alarme do prédio."
    ],
    testimonial: {
      text: "Gerimos um prédio de studios na Faria Lima que o alarme tocava toda semana por causa de fumaça de cozinha. A DRD2 refez o projeto do alarme com detectores de calor e salvou o sossego dos moradores, aprovando tudo no Bombeiro.",
      author: "Fábio Dantas",
      role: "Asset Manager — Itaim Bibi"
    },
    faq1q: "A fechadura digital do apartamento pode impedir a aprovação do AVCB?",
    faq1a: "A do apartamento particular não. Porém, se o condomínio colocar fechaduras digitais, catracas ou portas automáticas nas rotas de fuga (térreo, saídas), elas devem possuir um sistema de destravamento ('fail-safe') vinculado ao alarme de incêndio, permitindo evacuação livre sem uso de chaves.",
    ctaFinal: "Gestão inteligente de AVCB para torres modernas no Itaim Bibi"
  },
  {
    slug: "brooklin",
    nome: "Brooklin",
    zona: "Zona Sul",
    tag: "Projetos Complexos no Brooklin",
    avenidas: "Berrini, Roberto Marinho e Roque Petroni",
    perfil: "grande concentração de mega-empreendimentos mistos e lajes corporativas conectadas a flats residenciais",
    intro: "A dualidade do Brooklin Novo e Brooklin Velho exige expertise vasta. Enquanto no Brooklin Velho regularizamos condomínios horizontais (villas e townhouses) que exigem hidrantes externos e isolamento de áreas, no Brooklin Novo o foco é o isolamento vertical entre andares comerciais e residenciais.",
    box: "Muitos prédios no Brooklin Novo possuem fachadas envidraçadas (pele de vidro). A norma estadual exige que haja compartimentação vertical entre os andares. Se o prédio não possui 'abas' de concreto entre um andar e outro para impedir que o fogo suba pela fachada de vidro, o AVCB é negado até que se instale uma barreira de fumaça interna.",
    problemas: ["Falta de compartimentação em pele de vidro", "Subsolos compartilhados com comércios", "Bombas subdimensionadas"],
    problemasDesc: [
      "Edifícios modernos cujas fachadas de vidro contínuas permitem que as chaves de incêndio 'pulem' para o andar de cima rapidamente.",
      "Mega-garagens subterrâneas que conectam torres residenciais a prédios comerciais, exigindo portas corta-fogo monumentais ou cortinas d'água.",
      "Pressão da água da rede de hidrantes que não atinge o último andar (cobertura) com o jato exigido pelas instruções técnicas."
    ],
    testimonial: {
      text: "A complexidade da nossa garagem interligada travava nosso AVCB há anos. A DRD2 Engenharia desenvolveu um plano de abandono e adequou os alarmes sem precisar fechar acessos importantes.",
      author: "Sandra Gusmão",
      role: "Gestora Predial — Brooklin"
    },
    faq1q: "O que é compartimentação vertical nas fachadas de vidro?",
    faq1a: "É uma exigência técnica (IT 09) que impede a propagação de fogo de um andar para o superior pelas janelas. Geralmente resolve-se com lajes sacadas (abas) de 90 cm, peitoris ou vidro corta-fogo específico. A DRD2 diagnostica a necessidade no seu projeto.",
    ctaFinal: "Consulte a DRD2 para mega-empreendimentos no Brooklin"
  },
  // INJECTED FROM ADD-BAIRROS 1, 2, 3
  // ... Eu farei os scripts de geracao ler do novosBairros tbm.
];

const novosBairros1 = [
  {
    slug: "vila-nova-conceicao",
    nome: "Vila Nova Conceição",
    zona: "Zona Sul",
    tag: "Condomínios de Luxo — Zona Sul",
    avenidas: "Av. Hélio Pellegrino, República do Líbano e Afonso Braz",
    perfil: "edifícios residenciais de altíssimo padrão próximos ao Parque Ibirapuera",
    intro: "A Vila Nova Conceição concentra o metro quadrado mais caro de São Paulo. Os condomínios da região frequentemente possuem sistemas arquitetônicos complexos, como halls privativos com elevadores biométricos e automação predial integrada, que exigem análise minuciosa na hora da renovação do AVCB.",
    box: "Reformas de altíssimo padrão nos apartamentos costumam alterar portas corta-fogo (para blindadas ou decoradas) e suprimir chuveiros automáticos (sprinklers) por razões estéticas — infrações graves que o Corpo de Bombeiros reprova instantaneamente.",
    problemas: ["Portas corta-fogo descaracterizadas", "Sprinklers isolados ou pintados", "Falta de ART do gerador"],
    problemasDesc: [
      "Substituição de portas corta-fogo aprovadas por portas blindadas ou de madeira não certificadas.",
      "Reformas internas que obstruem, pintam ou isolam a rede de sprinklers do apartamento.",
      "Geradores de energia essenciais sem a respectiva ART de manutenção atualizada."
    ],
    testimonial: {
      text: "Nossa renovação foi travada porque os moradores trocaram as portas corta-fogo nos halls. A DRD2 assumiu a engenharia e conseguimos aprovar a adequação sem conflito com os proprietários.",
      author: "Helena Ferraz",
      role: "Síndica — Vila Nova Conceição"
    },
    faq1q: "Posso trocar a porta corta-fogo do hall por uma decorada?",
    faq1a: "Não, a menos que a nova porta possua certificação (selo ABNT) com o mesmo tempo de resistência ao fogo exigido no projeto aprovado pelo CBPMESP. A DRD2 avalia as certificações antes da vistoria.",
    ctaFinal: "Renove o AVCB do seu condomínio na Vila Nova Conceição com excelência"
  },
  {
    slug: "jardins",
    nome: "Jardins",
    zona: "Zona Oeste / Sul",
    tag: "Tradição e Exigência — Região dos Jardins",
    avenidas: "Rua Augusta, Oscar Freire, Av. Brasil e Nove de Julho",
    perfil: "edifícios residenciais clássicos e torres comerciais antigas",
    intro: "A região dos Jardins (Jardim Paulista, América, Europa) é marcada por condomínios clássicos das décadas de 60 e 70. O principal desafio da renovação de AVCB aqui é a adequação das rotas de fuga e sistemas de combate a normas que sequer existiam quando os prédios foram construídos.",
    box: "Muitos prédios nos Jardins têm caixas de escada com ventilação inadequada ou degraus fora da norma (bocel). O Corpo de Bombeiros exige adequações físicas ou a aprovação de uma FAT (Formulário de Atendimento Técnico) com medidas compensatórias de segurança.",
    problemas: ["Caixa de escada sem ventilação", "Hidrantes antigos fora de norma", "Gás encanado sem estanqueidade"],
    problemasDesc: [
      "Escadas enclausuradas antigas que não atendem às exigências de exaustão de fumaça vigentes.",
      "Tubulações de ferro galvanizado muito antigas que reprovam nos testes de pressão e vazão das mangueiras.",
      "Ausência de laudo de estanqueidade das prumadas de gás (GN) originais da edificação."
    ],
    testimonial: {
      text: "Nosso prédio de 1972 nunca tinha conseguido um AVCB. A DRD2 fez o As-Built, aprovou medidas compensatórias para nossa escada e nos regularizou de vez.",
      author: "Paulo Cintra",
      role: "Síndico — Jardim Paulista"
    },
    faq1q: "Prédios antigos nos Jardins são isentos das normas atuais?",
    faq1a: "Não existe isenção total. Edificações antigas precisam se adequar na medida do possível, ou apresentar 'medidas compensatórias' (como alarme de incêndio endereçável) aceitas pelo CBPMESP através de FAT.",
    ctaFinal: "Regularize seu condomínio nos Jardins com engenharia especializada"
  },
  {
    slug: "higienopolis",
    nome: "Higienópolis",
    zona: "Região Central",
    tag: "Arquitetura Histórica e Segurança",
    avenidas: "Av. Angélica, Higienópolis, Pacaembu",
    perfil: "prédios de alto padrão de arquitetura brutalista e modernista",
    intro: "Higienópolis é famoso pelos seus condomínios de arquitetura icônica. Porém, a preservação estética costuma entrar em conflito direto com as exigências de segurança do Corpo de Bombeiros, exigindo laudos rigorosos de instalações elétricas antigas e adequações que não descaracterizem as fachadas tombadas.",
    box: "Sistemas elétricos defasados são a maior causa de incêndios em Higienópolis. O CBPMESP tem reprovado inúmeras renovações por falta do Laudo Elétrico completo, com termografia, atestando que os quadros de força (frequentemente de fusíveis ou disjuntores obsoletos) suportam a carga atual dos apartamentos.",
    problemas: ["Instalações elétricas obsoletas", "Rotas de fuga bloqueadas por obras", "Falta de corrimão normatizado"],
    problemasDesc: [
      "Quadros de força sem Laudo Elétrico (com termografia) atestando capacidade para ar-condicionado e novos equipamentos.",
      "Halls e corredores revestidos com madeiras e carpetes que não possuem o laudo de controle de material de acabamento (CMAR).",
      "Escadarias de design antigo sem corrimãos ou com espaçamentos proibidos pela IT 11."
    ],
    testimonial: {
      text: "Renovar o AVCB sem quebrar a estética do nosso prédio modernista era o desafio. A DRD2 resolveu a parte elétrica documental e evitou obras desnecessárias.",
      author: "Clara Gouveia",
      role: "Membro do Conselho — Higienópolis"
    },
    faq1q: "O Corpo de Bombeiros exige a troca do carpete dos corredores?",
    faq1a: "Depende. É obrigatório apresentar a CMAR (Controle de Materiais de Acabamento e Revestimento). Se o carpete não tiver tratamento antichamas certificado, deverá ser tratado com líquido retardante (com ART) ou substituído.",
    ctaFinal: "Renovação de AVCB para condomínios clássicos em Higienópolis"
  },
  {
    slug: "perdizes",
    nome: "Perdizes",
    zona: "Zona Oeste",
    tag: "Atendimento Rápido na Zona Oeste",
    avenidas: "Av. Sumaré, Alfonso Bovero, Rua Cardoso de Almeida",
    perfil: "condomínios verticais de alto padrão em relevo acentuado",
    intro: "As ladeiras de Perdizes criam condomínios com múltiplos subsolos e entradas em níveis diferentes. Essa topografia obriga o Corpo de Bombeiros a olhar com extrema atenção para os sistemas de extração de fumaça de garagens e o acesso das viaturas de resgate à edificação.",
    box: "Muitos condomínios em Perdizes têm mais de 3 níveis de subsolo. Durante a renovação do AVCB, os fiscais focam agressivamente nos exaustores de fumaça das garagens e nas luzes de emergência dessas áreas críticas, que frequentemente estão queimadas ou sem bateria.",
    problemas: ["Exaustão de subsolos defeituosa", "Baterias de alarme inoperantes", "Hidrantes de recalque inacessíveis"],
    problemasDesc: [
      "Subsolos profundos onde os sistemas mecânicos de extração de fumaça não têm manutenção registrada.",
      "Centrais de alarme que apontam falhas sistêmicas por conta de detectores sujos nas garagens.",
      "Registro de recalque (acesso da viatura dos bombeiros à água do prédio) bloqueado por portões ou lixeiras."
    ],
    testimonial: {
      text: "Nosso alarme vivia tocando no subsolo e o bombeiro reprovou a vistoria. A DRD2 não só renovou o AVCB como ajustou a manutenção de todo o sistema.",
      author: "Marcelo Diniz",
      role: "Síndico — Perdizes"
    },
    faq1q: "Por que o registro de recalque da calçada reprova o AVCB?",
    faq1a: "O recalque (hidrante de passeio) deve estar desobstruído, sinalizado e com conexão engate-rápido intacta, pois é por ele que a viatura pressuriza o sistema do prédio em caso de falta de água ou falha na bomba.",
    ctaFinal: "Condomínio em Perdizes? Peça um diagnóstico de AVCB agora"
  },
  {
    slug: "saude",
    nome: "Saúde",
    zona: "Zona Sul",
    tag: "Engenharia de Incêndio na Zona Sul",
    avenidas: "Av. Jabaquara, Domingos de Morais, Bosque da Saúde",
    perfil: "prédios residenciais médios, tradicionais e condomínios-clube recentes",
    intro: "A região da Saúde (incluindo Bosque da Saúde, Praça da Árvore e Mirandópolis) mescla antigos edifícios de tijolo aparente e novos grandes condomínios-clube. A gestão documental para renovação é mista: requer laudos complexos para os novos com automação e As-Built para os velhos sem planta aprovada.",
    box: "A substituição de zeladores por portarias virtuais na região da Saúde aumentou as autuações. A portaria virtual deve garantir que os alarmes de incêndio do prédio sejam retransmitidos imediatamente à central de monitoramento ou abram as portas remotamente em caso de pânico — sem isso, não há AVCB.",
    problemas: ["Portaria virtual não integrada ao alarme", "Sistemas de GLP envelhecidos", "Luzes de emergência residenciais"],
    problemasDesc: [
      "Prédios sem porteiro físico onde a central de alarme de incêndio não tem comunicação remota de emergência.",
      "Condomínios dos anos 80 cujas tubulações enterradas de gás estão oxidadas e não passam na prova de estanqueidade.",
      "Uso de luminárias de emergência compradas em home centers, sem autonomia mínima aprovada pelo CBPMESP."
    ],
    testimonial: {
      text: "Contratamos a portaria virtual e perdemos o AVCB. A DRD2 interveio junto com a empresa de segurança, fez o laudo técnico e os Bombeiros aprovaram a integração.",
      author: "Tatiana Correia",
      role: "Administradora — Bosque da Saúde"
    },
    faq1q: "Instalei portaria virtual na Saúde, meu AVCB perdeu a validade?",
    faq1a: "A validade não cai automaticamente, mas na próxima vistoria o CBPMESP exigirá que a portaria possua liberação remota instantânea de catracas/portas atrelada ao acionamento do alarme geral de incêndio. A DRD2 documenta essa integração.",
    ctaFinal: "Garanta a conformidade do seu condomínio na Saúde"
  },
  {
    slug: "mooca",
    nome: "Mooca",
    zona: "Zona Leste",
    tag: "Assessoria Técnica Completa na Zona Leste",
    avenidas: "Av. Paes de Barros, Rua da Mooca, Radial Leste",
    perfil: "histórico bairro industrial que hoje abriga grandes condomínios verticais e prédios antigos",
    intro: "A Mooca carrega o peso do seu passado fabril. Grandes terrenos industriais deram lugar a imensos condomínios verticais (condomínios-clube). Por outro lado, o bairro histórico retém prédios baixos muito antigos. Essa dualidade exige abordagens de engenharia de incêndio completamente diferentes.",
    box: "Nos novos megacondomínios da Av. Paes de Barros, as áreas comuns (cinemas, quadras cobertas e academias) frequentemente superam a lotação permitida no projeto original, ou realizaram modificações decorativas pós-entrega das chaves sem aviso ao Corpo de Bombeiros.",
    problemas: ["Modificação de áreas comuns pós-obra", "Extintores em locais obstruídos", "Automação de bombas em falha"],
    problemasDesc: [
      "Salões de festas que receberam teto rebaixado de madeira, exigindo nova aprovação técnica e laudo CMAR.",
      "Quadros de comando de bombas de incêndio mantidos em modo 'manual' por vazamentos no sistema, falha gravíssima.",
      "Ausência de sinalização fotoluminescente nas garagens amplas de múltiplos blocos."
    ],
    testimonial: {
      text: "Nosso condomínio clube na Mooca não aprovava o AVCB de jeito nenhum por conta do mezanino. A DRD2 Engenharia assumiu, elaborou a FAT e aprovou em 1 mês.",
      author: "Vittorio Mangiagalli",
      role: "Síndico — Megacondomínio Mooca"
    },
    faq1q: "Cobrir a churrasqueira do condomínio exige atualização do AVCB?",
    faq1a: "Sim. A cobertura de áreas ao ar livre (aumento de área construída) ou fechamento lateral com vidro requerem a atualização do Projeto Técnico de Segurança (PTS/FAT) junto aos Bombeiros. Renovação sem essa atualização resulta em reprovação.",
    ctaFinal: "Regularize seu condomínio na Mooca sem complicação"
  },
  {
    slug: "vila-prudente",
    nome: "Vila Prudente",
    zona: "Zona Leste",
    tag: "Especialistas em AVCB para a Zona Leste",
    avenidas: "Av. Prof. Luiz Ignácio Anhaia Mello, Av. Vila Ema, Rua do Orfanato",
    perfil: "vertiginoso crescimento vertical com edifícios modernos e condomínios clube",
    intro: "A Vila Prudente é o bairro que mais cresce verticalmente na Zona Leste, impulsionada pela linha Verde do Metrô. Essa explosão de novos prédios trouxe um problema oculto: a falta de manutenção adequada nos primeiros 5 anos (garantia da construtora) torna a primeira renovação de AVCB um pesadelo para o síndico.",
    box: "Muitos síndicos da Vila Prudente confiam que, por o prédio ser novo, a primeira renovação do AVCB será apenas burocrática. A realidade é que mangueiras apodrecem, painéis de alarme dão curto-circuito e baterias estouram em 5 anos sem manutenção mensal (PMOC).",
    problemas: ["Negligência de manutenção nos primeiros 5 anos", "Mangueiras reprovadas no teste hidrostático", "Detectores de fumaça sujos pós-obras"],
    problemasDesc: [
      "Falta de relatórios de manutenção mensal preventiva desde a entrega do prédio.",
      "Poeira das obras e reformas dos apartamentos que invadiram os corredores e cegaram os detectores de fumaça.",
      "Mangueiras de incêndio nunca abertas que furam imediatamente sob os 120 PSI do teste hidrostático."
    ],
    testimonial: {
      text: "Nosso prédio tem apenas 4 anos. Achamos que a renovação ia ser só pegar o papel, mas fomos alertados pela DRD2 de que as mangueiras da construtora já não aguentavam pressão. Evitamos uma multa certa.",
      author: "Eduardo Lima",
      role: "Síndico Orgânico — Vila Prudente"
    },
    faq1q: "Prédio recém-entregue não precisa revisar as mangueiras para a renovação?",
    faq1a: "Errado. O teste hidrostático das mangueiras é OBRIGATÓRIO anualmente a partir do momento em que foram fabricadas/instaladas, não apenas quando o AVCB vence. A maioria reprova por ressecamento ou furos após 5 anos.",
    ctaFinal: "Evite multas na primeira renovação. Chame a DRD2 na Vila Prudente"
  },
  {
    slug: "morumbi",
    nome: "Morumbi",
    zona: "Zona Sul / Oeste",
    tag: "Condomínios de Luxo e Grandes Áreas",
    avenidas: "Av. Giovanni Gronchi, Morumbi, Jorge João Saad",
    perfil: "condomínios horizontais, torres isoladas de altíssimo padrão e grandes áreas arborizadas",
    intro: "O Morumbi apresenta um desafio ímpar de engenharia de incêndio: o gigantismo. Condomínios com imensas áreas verdes e múltiplas torres espaçadas exigem sistemas de hidrantes com redes subterrâneas quilométricas e bombas de altíssima potência, que frequentemente apresentam vazamentos invisíveis.",
    box: "Vazamentos na rede de hidrantes subterrânea no Morumbi são comuns. Como as tubulações passam sob os jardins, o síndico só percebe o problema quando a bomba de incêndio (jockey) começa a ligar sozinha para manter a pressão, ou pior: quando o sistema é testado para o AVCB e a pressão cai a zero.",
    problemas: ["Vazamentos ocultos na rede de hidrantes", "Interferência de árvores nos para-raios (SPDA)", "Sistemas isolados por torre"],
    problemasDesc: [
      "Tubulações de ferro galvanizado enterradas sob o asfalto ou jardins que se romperam com raízes ou movimentação de solo.",
      "Laudos de SPDA reprovados porque grandes árvores ou novas coberturas alteraram o grau de proteção dos captores.",
      "Administrações que perderam o controle dos laudos integrados e tentam renovar partes de um condomínio que tem aprovação única."
    ],
    testimonial: {
      text: "Tínhamos um vazamento oculto na tubulação do hidrante que a antiga empresa não detectou. A DRD2 fez o teste de pressão, localizou o problema, consertou e obteve nosso AVCB para os 6 blocos.",
      author: "Carlos von Schmidt",
      role: "Síndico Geral — Morumbi"
    },
    faq1q: "A bomba do hidrante no meu condomínio fica ligando sozinha. Isso afeta o AVCB?",
    faq1a: "Sim, isso indica uma falha crítica de perda de pressão (geralmente um vazamento na tubulação ou defeito na válvula de retenção). O Corpo de Bombeiros reprova o sistema na hora da vistoria. A DRD2 faz o diagnóstico exato.",
    ctaFinal: "Síndico no Morumbi, tenha a melhor engenharia trabalhando para você"
  }
];

const novosBairros2 = [
  {
    slug: "vila-leopoldina",
    nome: "Vila Leopoldina",
    zona: "Zona Oeste",
    tag: "Novos Condomínios e Galpões Convertidos",
    avenidas: "Av. Imperatriz Leopoldina, Gastão Vidigal e Carlos Weber",
    perfil: "condomínios de alto padrão recentes construídos em antigas áreas industriais",
    intro: "A Vila Leopoldina passou por uma explosão imobiliária na última década. A principal peculiaridade para a engenharia de incêndio local é que muitos desses novos condomínios-clube dividem muros ou infraestrutura com antigos galpões industriais ainda operantes, exigindo isolamento de risco severo.",
    box: "Quando a construtora entrega o prédio, o AVCB costuma estar em ordem. O problema surge na primeira renovação (após 5 anos), quando o condomínio descobre que as bombas de incêndio importadas ou os sistemas de alarme digitais nunca receberam a manutenção obrigatória do fabricante.",
    problemas: ["Bombas de incêndio desativadas por vazamento", "Isolamento de risco rompido", "Alarmes importados sem PMOC"],
    problemasDesc: [
      "Administradoras que desligam o painel de bombas para não 'incomodar' com pequenos vazamentos, inativando o sistema.",
      "Abertura de portões não previstos na planta entre o condomínio e edificações vizinhas de risco.",
      "Centrais de alarme que piscam erro ('fault') há anos sem que a empresa de manutenção consiga peças de reposição."
    ],
    testimonial: {
      text: "Nosso painel de alarme ficou apitando erro por 2 anos. O Corpo de Bombeiros reprovou na hora da renovação. A DRD2 atualizou nossa central inteira e aprovou o AVCB.",
      author: "Rodrigo Sanches",
      role: "Síndico — Vila Leopoldina"
    },
    faq1q: "O alarme de incêndio do meu condomínio tem uma luz amarela de falha. Aprova o AVCB?",
    faq1a: "Não. Qualquer falha apontada no painel principal (luz amarela/fault) indica que algum laço ou detector está inoperante. O vistoriador do CBPMESP reprovará o sistema e exigirá o reparo imediato antes de emitir a licença.",
    ctaFinal: "Renove o AVCB do seu condomínio na Vila Leopoldina com segurança"
  },
  {
    slug: "chacara-santo-antonio",
    nome: "Chácara Santo Antônio",
    zona: "Zona Sul",
    tag: "O Polo de Uso Misto da Zona Sul",
    avenidas: "Rua Américo Brasiliense, Alexandre Dumas e Verbo Divino",
    perfil: "condomínios mistos, torres residenciais e polos comerciais",
    intro: "A Chácara Santo Antônio é o retrato do uso misto em São Paulo. Condomínios residenciais construídos literalmente em cima de shopping centers ou lajes corporativas. O principal desafio documental aqui é a independência das rotas de fuga e a comprovação de que o incêndio da área comercial não atingirá a torre residencial.",
    box: "A integração dos laudos é o pesadelo dos síndicos na região. O Corpo de Bombeiros exige que o sistema de alarme da parte residencial converse com a parte comercial, mas frequentemente há duas administrações diferentes (síndico vs. gestão do shopping) que não se falam.",
    problemas: ["Desintegração de alarmes no uso misto", "Exaustão comercial vazando para residencial", "Rotas de fuga compartilhadas irregularmente"],
    problemasDesc: [
      "Prédios residenciais cujo alarme não aciona a evacuação do térreo comercial em caso de sinistro grave.",
      "Lojas ou restaurantes no térreo cujos dutos de exaustão não possuem proteção contra fogo (shaft isolado) até o topo do prédio.",
      "Portas de saída que cruzam áreas comerciais bloqueadas após o horário comercial, trancando os moradores."
    ],
    testimonial: {
      text: "Nosso prédio fica em cima de um centro comercial e a renovação era uma briga de laudos. A DRD2 unificou a gestão técnica com o comercial e resolveu.",
      author: "Julio Nogueira",
      role: "Síndico Predial — Chácara Sto. Antônio"
    },
    faq1q: "Condomínio residencial em cima de área comercial tem AVCB separado?",
    faq1a: "A edificação inteira pode ter um único AVCB, mas exige projetos técnicos que contemplem o uso misto e garantam o compartimentamento e rotas de fuga independentes. Se o comércio mudar a ocupação (ex: abrir um restaurante), o AVCB do prédio pode ser suspenso.",
    ctaFinal: "Síndico na Chácara Santo Antônio, tenha paz na renovação"
  },
  {
    slug: "ipiranga",
    nome: "Ipiranga",
    zona: "Zona Sul / Sudeste",
    tag: "Tradição e Preservação no Ipiranga",
    avenidas: "Av. Nazaré, Silva Bueno, Rua Bom Pastor",
    perfil: "bairro histórico com alto crescimento de condomínios clube",
    intro: "O Ipiranga vive uma colisão arquitetônica: casarões históricos e antigas indústrias demolidas que dão lugar a condomínios gigantescos. Edificações muito antigas precisam lidar com a regularização das centrais de gás de rua (Comgás), enquanto as novas precisam manter seus sofisticados sistemas de extração de fumaça operantes.",
    box: "A rede de Gás Natural (GN) é muito antiga em algumas ruas do Ipiranga. Condomínios das décadas de 70 e 80 estão sendo autuados porque as prumadas de gás (tubulações que sobem pelos andares) passam por dentro de poços de elevador ou escadas enclausuradas — o que hoje é estritamente proibido.",
    problemas: ["Prumada de gás em área proibida", "Escada sem portas corta-fogo (PCF)", "Geradores portáteis sem abrigo"],
    problemasDesc: [
      "Tubulação de gás antiga cruzando rotas de fuga. O Bombeiro exige o re-encaminhamento ou envelopamento ventilado.",
      "Prédios muito velhos cujas escadas são abertas para os corredores, exigindo fechamento e instalação de PCF.",
      "Síndicos que instalaram pequenos geradores a gasolina nos recuos do prédio sem ventilação ou projeto aprovado."
    ],
    testimonial: {
      text: "O vistoriador embargou nosso AVCB por conta de um gerador instalado de forma improvisada. A DRD2 fez o projeto de adequação do abrigo e resolvemos.",
      author: "Simone Guedes",
      role: "Síndica — Ipiranga"
    },
    faq1q: "A tubulação de gás natural (Comgás) pode passar pela escada do prédio?",
    faq1a: "Não. A IT 28 proíbe terminantemente que tubulações de gás passem por rotas de fuga ou poços de ventilação, por risco de explosão e confinamento de gases. Se o prédio é antigo e possui essa falha, é necessário readequar a tubulação com projeto de engenharia.",
    ctaFinal: "Regularize seu prédio no Ipiranga sem dores de cabeça"
  },
  {
    slug: "vila-andrade",
    nome: "Vila Andrade",
    zona: "Zona Sul",
    tag: "Condomínios Isolados e Grandes Áreas",
    avenidas: "Av. Giovanni Gronchi, Rua Itapaiúna, Rua José Ramon Urtiza",
    perfil: "mega-condomínios e torres residenciais fechadas",
    intro: "Na Vila Andrade, o padrão são enormes condomínios fechados, conhecidos como 'condomínios-clube', com várias torres e densas áreas de preservação ambiental no entorno. O dimensionamento correto da Reserva Técnica de Incêndio (RTI) e o acesso de viaturas pesadas nas ruas sinuosas internas são cruciais.",
    box: "As áreas de lazer estendidas (piscinas, salões de jogos, quiosques) frequentemente são construídas fora do escopo do projeto original. Na primeira renovação, o Corpo de Bombeiros fiscaliza essas adições. Qualquer quiosque ou cobertura com mais de 750m² adicionados ao todo sem aprovação prévia gera autuação imediata.",
    problemas: ["Quiosques não projetados", "Portões que bloqueiam viaturas", "Rede de hidrantes com perda de carga"],
    problemasDesc: [
      "Áreas de convivência cobertas instaladas após a entrega do condomínio sem a respectiva planta aprovada (FAT).",
      "Pórticos de entrada modificados (arcos de decoração, cancelas reforçadas) que diminuem a altura mínima para passagem de caminhão de bombeiro.",
      "Redes longas de hidrantes subterrâneos vazando ou com bombas subdimensionadas para alcançar a última torre."
    ],
    testimonial: {
      text: "Nosso condomínio fechado tem 8 torres e os Bombeiros reprovaram a portaria. A DRD2 ajustou o acesso de viaturas e conseguiu a aprovação total.",
      author: "Miguel Arcanjo",
      role: "Síndico Profissional — Vila Andrade"
    },
    faq1q: "Qual a altura mínima que o portão do condomínio deve ter para o AVCB?",
    faq1a: "O pórtico de acesso das viaturas de emergência deve ter, no mínimo, 4,50 metros de altura livre e suportar 45 toneladas, para que os caminhões auto-bomba e escadas magirus possam entrar e manobrar dentro do condomínio (IT 06).",
    ctaFinal: "Morumbi e Vila Andrade: Renove com quem entende de mega-condomínios"
  },
  {
    slug: "jabaquara",
    nome: "Jabaquara",
    zona: "Zona Sul",
    tag: "Engenharia Técnica no Jabaquara",
    avenidas: "Av. Jabaquara, Eng. Armando de Arruda Pereira",
    perfil: "edifícios residenciais tradicionais e novos condomínios mistos",
    intro: "O Jabaquara possui um histórico residencial muito forte. Prédios da década de 80 agora enfrentam seu maior desafio: a obsolescência das tubulações de incêndio. A corrosão galvânica em tubos de ferro e painéis de bomba queimados são a rotina das reprovações na região.",
    box: "Um problema endêmico no Jabaquara são os prédios que compartilham muros de arrimo ou estão colados nas divisas laterais. Se o prédio vizinho for de risco (galpão, fábrica), o seu condomínio precisa de paredes corta-fogo (parede cega) para evitar que o incêndio do vizinho se propague para os apartamentos.",
    problemas: ["Isolamento de risco na divisa", "Quadros de bombas oxidados", "Vazamentos na caixa d'água (RTI)"],
    problemasDesc: [
      "Janelas de apartamentos muito próximas à divisa de galpões, sem respeito à distância de separação contra radiação térmica.",
      "Quadros elétricos das motobombas localizados em subsolos úmidos, totalmente oxidados e inoperantes no modo automático.",
      "A reserva de incêndio no topo do prédio vazando água, forçando a administração a reduzir o volume do tanque para não alagar apartamentos."
    ],
    testimonial: {
      text: "Nossa caixa d'água estava vazando e esvaziamos a reserva de incêndio. Fomos autuados. A DRD2 regularizou o problema e conseguiu o AVCB sem multas adicionais.",
      author: "Márcia Leite",
      role: "Síndica Orgânica — Jabaquara"
    },
    faq1q: "Posso usar a água da Reserva de Incêndio (RTI) quando falta água no bairro?",
    faq1a: "Absolutamente não. A água reservada para incêndio (geralmente os últimos 20% do tanque ou um tanque exclusivo) não pode ser acessada pelo sistema de consumo diário. Mexer no registro (bypass) da reserva de incêndio é infração gravíssima e crime contra a segurança.",
    ctaFinal: "Proteja seu condomínio no Jabaquara com a DRD2 Engenharia"
  },
  {
    slug: "consolacao",
    nome: "Consolação",
    zona: "Centro / Zona Oeste",
    tag: "Engenharia no Centro Expandido",
    avenidas: "Rua da Consolação, Frei Caneca, Augusta",
    perfil: "edifícios antigos densamente povoados e novos studios",
    intro: "A Consolação apresenta um tecido urbano denso e de difícil acesso. A concentração de prédios das décadas de 50 a 70 que nunca possuíram projeto contra incêndio é muito alta. O Corpo de Bombeiros trata esses casos com extremo rigor devido ao alto risco de propagação rápida de chamas.",
    box: "No Baixo Augusta e Consolação, muitos edifícios habitacionais não possuem sequer hidrantes ou portas corta-fogo (construídos antes das normas rigorosas). Hoje, para emitir o AVCB, é impossível aprovar sem a construção ou adaptação drástica dessas rotas, frequentemente exigindo sistemas de chuveiros automáticos compensatórios e portas T-90.",
    problemas: ["Prédios antigos sem hidrantes", "Fiação elétrica exposta", "Uso irregular do térreo"],
    problemasDesc: [
      "Edifícios de 10+ andares sem qualquer rede de água para combate a incêndio, reprovando fatalmente qualquer tentativa de AVCB sem As-Built e adequação.",
      "Corredores com fiação exposta e 'gatos' de internet ou TV a cabo bloqueando o teto e favorecendo curtos-circuitos.",
      "Lojas do térreo alugadas para depósitos de materiais inflamáveis (tecidos, eletrônicos) ameaçando a torre residencial."
    ],
    testimonial: {
      text: "Nosso prédio na Augusta é antigo e não tinha espaço pra colocar caixa de água de incêndio. A DRD2 conseguiu aprovação técnica com adequações que couberam no orçamento e no espaço.",
      author: "Renato Tavares",
      role: "Membro do Conselho Fiscal — Consolação"
    },
    faq1q: "Prédios velhos do Centro são obrigados a ter alarme e extintores?",
    faq1a: "Sim. Nenhuma edificação multifamiliar em SP (exceto as muito pequenas classificadas como PTS) está isenta de ter sinalização, extintores, iluminação de emergência e, quase sempre, alarme de incêndio. O projeto As-Built é o caminho para adequar o possível.",
    ctaFinal: "Regularize o AVCB do seu prédio na Consolação e Baixo Augusta"
  },
  {
    slug: "bela-vista",
    nome: "Bela Vista",
    zona: "Centro",
    tag: "Tradição e Segurança na Bela Vista",
    avenidas: "Av. Brigadeiro Luís Antônio, Nove de Julho, Treze de Maio",
    perfil: "alta concentração de edifícios antigos, cortiços reformados e condomínios de médio porte",
    intro: "A Bela Vista (Bixiga) é rica em história, mas carece de infraestrutura predial moderna. Muitos edifícios residenciais enfrentam problemas com o confinamento de áreas comuns, garagens subterrâneas sem saída independente e ocupação mista desordenada.",
    box: "Uma das maiores barreiras na Bela Vista é o acréscimo irregular de pavimentos ou fechamento de garagens ('puxadinhos' na cobertura ou subsolo). O Corpo de Bombeiros exige que a planta do AVCB bata com a realidade física. Se houver áreas não declaradas, o processo trava até a regularização ou demolição.",
    problemas: ["Puxadinhos na cobertura", "Subsolos sem exaustão natural", "Armazenamento irregular de gás (P13)"],
    problemasDesc: [
      "Apartamentos de cobertura que ampliaram a laje sem alvará e sem comunicação no projeto de segurança (FAT).",
      "Garagens antigas totalmente enterradas que não possuem grelhas de ventilação ou exaustão forçada.",
      "Moradores usando botijões de gás (P13) soltos dentro dos apartamentos em prédios com mais de 5 andares (prática ilegal em SP)."
    ],
    testimonial: {
      text: "Descobrimos que nosso condomínio nunca teve planta aprovada e tínhamos gás P13 nos andares. A DRD2 mapeou tudo, centralizou o gás e conseguimos nosso AVCB.",
      author: "Tereza Bianchi",
      role: "Síndica — Bela Vista (Bixiga)"
    },
    faq1q: "Meu prédio pode usar botijão de gás (P13) dentro dos apartamentos?",
    faq1a: "Em São Paulo (Decreto 63.911/18), edificações residenciais com mais de 5 pavimentos ou mais de 12 metros de altura NÃO podem usar botijão P13 dentro do apartamento. É obrigatório instalar uma central de gás (GLP ou GN) externa com tubulação (prumada) até as unidades.",
    ctaFinal: "Adequação rápida para condomínios antigos na Bela Vista"
  },
  {
    slug: "campo-belo",
    nome: "Campo Belo",
    zona: "Zona Sul",
    tag: "Engenharia Especializada no Campo Belo",
    avenidas: "Rua Vieira de Morais, Av. Vereador José Diniz, Washington Luís",
    perfil: "bairro de altíssimo padrão, com edifícios de luxo recentes e prédios clássicos",
    intro: "O Campo Belo experimentou uma forte verticalização de luxo nos últimos 20 anos. Condomínios com plantas amplas e um apartamento por andar dominam a paisagem. Aqui, as vistorias do Corpo de Bombeiros focam muito nos subsolos profundos (que requerem pressurização rigorosa) e na compartimentação dos halls de elevador privativos.",
    box: "É muito comum no Campo Belo que o hall do elevador seja tratado como parte da sala de estar pelo morador (portas abertas, decoração em madeira, tapetes). Isso elimina a função de 'compartimentação de risco' que a porta corta-fogo deveria exercer, reprovando o andar na vistoria.",
    problemas: ["Hall privativo descaracterizado", "Pressurização de escada ruidosa/desligada", "Falta de manutenção na casa de bombas"],
    problemasDesc: [
      "Moradores que deixam a porta corta-fogo do hall escorada permanentemente aberta, inutilizando a escada enclausurada.",
      "Ventiladores de pressurização de escada desligados pelo síndico para evitar o 'barulho' nos andares baixos.",
      "Sistemas de recalque esquecidos nos subsolos sem o teste hidrostático anual."
    ],
    testimonial: {
      text: "Nosso prédio no Campo Belo tinha problemas de vazamento na pressurização. A DRD2 organizou toda a casa de máquinas e emitiu o AVCB em 30 dias.",
      author: "Gustavo Nogueira",
      role: "Membro do Conselho Fiscal — Campo Belo"
    },
    faq1q: "Posso trancar a porta da escada no hall do apartamento (um por andar)?",
    faq1a: "Não. As rotas de fuga (escadas de incêndio) devem permitir a evacuação de qualquer andar e o acesso dos Bombeiros. Trancar as portas corta-fogo pelo lado do hall com chaves ou trancas é estritamente proibido, mesmo em apartamentos um-por-andar.",
    ctaFinal: "Proteja seu condomínio de luxo no Campo Belo. Solicite a DRD2"
  }
];

const novosBairros3 = [
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
    slug: "vila-ipojuca",
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
    slug: "analia-franco",
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

const bairrosRestaurante = [
  {
    slug: "pinheiros",
    nome: "Pinheiros",
    zona: "Zona Oeste",
    tag: "Polo Gastronômico — Rua dos Pinheiros e Harmonia",
    avenidas: "Rua dos Pinheiros, Harmonia, Cardeal Arcoverde e região",
    perfil: "restaurantes de alto padrão, bares e operações de delivery",
    intro: "Pinheiros é o epicentro gastronômico de São Paulo — um bairro onde restaurantes de fine dining, bares artesanais e dark kitchens convivem em palmos quadrados. A alta rotatividade de estabelecimentos e a frequente troca de uso das edificações (de comercial para gastronômico) fazem do AVCB um documento crítico que a Vigilância Sanitária e o próprio Corpo de Bombeiros monitoram ativamente.",
    box: "Em Pinheiros, é comum que restaurantes abram em espaços que eram lojas ou escritórios — e a mudança de atividade sem comunicação ao CBPMESP é a principal causa de autuação. Um estabelecimento gastronômico exige sistemas de exaustão aprovados, detecção de incêndio na cozinha e saídas de emergência que um espaço comercial comum não precisa ter.",
    problemas: ["Mudança de uso sem aprovação", "Coifa e exaustão sem laudo técnico", "Saída de emergência bloqueada"],
    problemasDesc: [
      "Espaços que mudaram de uso comercial para gastronômico sem comunicar o CBPMESP — infração direta do Decreto 63.911/18.",
      "Sistemas de exaustão de cozinha instalados sem projeto e laudo de engenharia mecânica — risco de incêndio e causa de reprovação.",
      "Saídas de emergência bloqueadas por equipamentos ou divididas com áreas de armazenamento — reprovação automática na vistoria."
    ],
    testimonial: {
      text: "Abri meu restaurante na Rua Harmonia e o CLCB foi negado por falta de projeto de exaustão aprovado. A DRD2 resolveu tudo em 3 semanas.",
      author: "Giovanna Meletti",
      role: "Proprietária — Restaurante, Pinheiros SP"
    },
    faq1q: "Meu restaurante em Pinheiros fica em espaço que era loja. Preciso de AVCB novo?",
    faq1a: "Sim. A mudança de uso de comercial para gastronômico exige novo processo junto ao CBPMESP, com projeto específico para a nova atividade. O AVCB ou CLCB anterior (se existir) não cobre a operação de restaurante.",
    ctaFinal: "Regularize o AVCB do seu restaurante em Pinheiros"
  },
  {
    slug: "vila-madalena",
    nome: "Vila Madalena",
    zona: "Zona Oeste",
    tag: "Bairro Boêmio e Gastronômico de SP",
    avenidas: "Rua Aspicuelta, Fradique Coutinho, Mourato Coelho e região",
    perfil: "bares, restaurantes informais, food trucks e espaços culturais",
    intro: "A Vila Madalena é o bairro mais criativo de São Paulo — e também um dos mais desafiadores para a regularização de AVCB. A mistura de casas convertidas em bares, garagens transformadas em restaurantes e espaços culturais que funcionam como estabelecimentos gastronômicos gera uma complexidade regulatória que exige engenharia com experiência local.",
    box: "Na Vila Madalena, o maior problema é a informalidade construtiva: casas tombadas ou de interesse histórico que foram convertidas em bares sem projeto aprovado. O Corpo de Bombeiros não aceita a justificativa de 'edificação histórica' para dispensar os sistemas de segurança — apenas adapta as exigências à realidade da estrutura existente.",
    problemas: ["Casas convertidas em bares sem projeto", "Lotação irregular em eventos", "Saída de emergência única"],
    problemasDesc: [
      "Residências adaptadas para uso comercial/gastronômico sem aprovação de mudança de uso no CBPMESP.",
      "Bares que excedem a lotação aprovada em eventos — risco de embargo imediato e cassação do CLCB.",
      "Muitos espaços na Vila Madalena têm apenas uma saída — o Corpo de Bombeiros pode exigir segunda saída ou redução de lotação."
    ],
    testimonial: {
      text: "Meu bar na Aspicuelta funcionou por 2 anos sem CLCB. Quando o Bombeiro apareceu, a DRD2 regularizou em tempo recorde e evitou o fechamento.",
      author: "Diego Antunes",
      role: "Proprietário — Bar Cultural, Vila Madalena SP"
    },
    faq1q: "Meu bar fica em uma casa tombada na Vila Madalena. Consigo CLCB?",
    faq1a: "Sim, mas requer parecer técnico específico. O CBPMESP avalia edificações históricas caso a caso, adaptando as exigências à estrutura existente. A DRD2 tem experiência com esse tipo de processo e elabora o projeto de adequação respeitando as restrições do imóvel.",
    ctaFinal: "Regularize o CLCB do seu bar ou restaurante na Vila Madalena"
  }
];

const allCondo = [...bairrosCondominio, ...novosBairros1, ...novosBairros2, ...novosBairros3];

const fullFile = interfaceStr + 
  '\\nexport const bairrosCondominio: BairroData[] = ' + JSON.stringify(allCondo, null, 2) + ';\\n\\n' +
  'export const bairrosRestaurante: BairroData[] = ' + JSON.stringify(bairrosRestaurante, null, 2) + ';\\n';

fs.writeFileSync(path.join(__dirname, '../src/data/bairros-renovacao.ts'), fullFile, 'utf-8');
console.log('Database reconstructed. Condominios: ' + allCondo.length);
