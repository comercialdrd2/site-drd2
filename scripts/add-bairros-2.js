const fs = require('fs');
const path = require('path');

const novosBairros = [
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

const dataFile = path.join(__dirname, '../src/data/bairros-renovacao.ts');
let oldContent = fs.readFileSync(dataFile, 'utf-8');

const strNovos = novosBairros.map(b => JSON.stringify(b, null, 2)).join(',\n');

// Vamos usar replace na primeira ocorrência de "];" que fecha bairrosCondominio
const arrayCondominioRegex = /\];/; 
oldContent = oldContent.replace(arrayCondominioRegex, ',\n' + strNovos + '\n];');

fs.writeFileSync(dataFile, oldContent, 'utf-8');
console.log('Adicionado +8 bairros, total 26 bairros no sistema.');
