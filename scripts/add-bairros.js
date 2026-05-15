const fs = require('fs');
const path = require('path');

const novosBairros = [
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

const dataFile = path.join(__dirname, '../src/data/bairros-renovacao.ts');
const oldContent = fs.readFileSync(dataFile, 'utf-8');

// Vamos injetar esses novos objetos no array de condomínio.
// Procuramos pelo final do array bairrosCondominio, que termina com `];`
// Substituímos a última linha `];` por uma string concatenada com os novos itens.
const strNovos = novosBairros.map(b => JSON.stringify(b, null, 2)).join(',\n') + '\n];';

const arrayCondominioRegex = /\];/; // o primeiro ]; é do fim de bairrosCondominio
const newContent = oldContent.replace(arrayCondominioRegex, ',\n' + strNovos);

fs.writeFileSync(dataFile, newContent, 'utf-8');
console.log('Adicionado mais 8 bairros, total agora é 16 condomínios + 2 restaurantes = 18 bairros.');
