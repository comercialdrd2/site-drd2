export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  category: "Aprovação" | "Projetos" | "Instalação";
  shortDescription: string;
  pas: {
    problem: string;
    agitation: string;
    solution: string;
  };
  content: string[]; // Parágrafos principais
  faqs: FAQ[];
  hasLeadMagnet?: boolean;
  icon: string;
}

export const servicesData: Record<string, ServiceData> = {
  "avcb-sao-paulo": {
    slug: "avcb-sao-paulo",
    title: "AVCB",
    category: "Aprovação",
    shortDescription: "Emissão e renovação do Auto de Vistoria do Corpo de Bombeiros (AVCB) para edificações em SP.",
    h1: "Aprovação de AVCB em São Paulo",
    metaTitle: "Aprovação de AVCB em São Paulo | DRD2 Engenharia",
    metaDescription: "Aprovação de AVCB em São Paulo com segurança técnica e agilidade. A DRD2 Engenharia gerencia todo o processo junto ao Corpo de Corpo de Bombeiros de São Paulo. Solicite orçamento.",
    pas: {
      problem: "Sua edificação está sem o AVCB válido?",
      agitation: "A falta do documento pode acarretar em autuações, multas pesadas, interdição do imóvel, perda de cobertura de seguros e até responsabilização civil e criminal do proprietário ou síndico em caso de sinistro.",
      solution: "A DRD2 conduz todo o processo técnico e administrativo, desde o levantamento inicial até a vistoria do Corpo de Bombeiros, garantindo a aprovação do seu AVCB com segurança e agilidade."
    },
    content: [
      "O Auto de Vistoria do Corpo de Bombeiros (AVCB) é o documento oficial emitido pelo CBPMESP certificando que a edificação possui as condições de segurança contra incêndio previstas pela legislação.",
      "Sua obrigatoriedade se aplica à maioria das edificações comerciais, industriais, e condomínios multifamiliares, sendo essencial para a obtenção de alvarás de funcionamento.",
      "Baseamos nosso trabalho estritamente no Decreto Estadual nº 69.118/2024 e nas Instruções Técnicas vigentes. Conduzimos etapas essenciais como vistoria prévia, identificação de não conformidades, emissão de ARTs e acompanhamento do processo no sistema Via Fácil."
    ],
    faqs: [
      { question: "Quanto tempo demora a aprovação do AVCB em SP?", answer: "O tempo pode variar de acordo com o tamanho da edificação e adequações necessárias. Em média, se o local já possuir o sistema instalado e funcionando, leva de 15 a 30 dias." },
      { question: "Quais documentos são necessários para dar entrada no AVCB?", answer: "Normalmente exigem-se projeto de incêndio aprovado, ARTs dos sistemas (hidrante, alarme, etc.), notas fiscais de equipamentos, brigada de incêndio, e atestados de conformidade elétrica e SPDA." },
      { question: "Meu imóvel pode ser autuado ou interditado sem AVCB?", answer: "Sim. A fiscalização pode gerar desde notificações para regularização, até multas e a interdição imediata em casos de risco iminente ou descumprimento de prazos." },
      { question: "O que acontece quando o AVCB vence?", answer: "A edificação fica irregular perante os bombeiros e a prefeitura, podendo ter alvarás cassados e perda de cobertura de apólices de seguro." },
      { question: "Condomínio residencial é obrigado a ter AVCB?", answer: "Sim. Condomínios multifamiliares necessitam do AVCB e manutenção constante de seus itens (extintores, mangueiras, bombas) para garantir a validade do documento." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-condominio-sao-paulo": {
    slug: "avcb-condominio-sao-paulo",
    title: "AVCB (Condomínios)",
    category: "Aprovação",
    shortDescription: "AVCB para condomínios residenciais em São Paulo. Regularização das áreas comuns, renovação de certificado vencido e projeto técnico com ART.",
    h1: "AVCB para Condomínio em São Paulo: Tudo que o Síndico Precisa Saber",
    metaTitle: "AVCB para Condomínio em São Paulo | Engenheiro Especializado — DRD2 Engenharia",
    metaDescription: "AVCB para condomínios residenciais em São Paulo. Regularização das áreas comuns, renovação de certificado vencido e projeto técnico com ART. DRD2 Engenharia — do diagnóstico ao certificado.",
    pas: {
      problem: "O AVCB do condomínio está vencido ou irregular, gerando risco jurídico direto ao síndico.",
      agitation: "Sem o documento válido, o síndico responde pessoalmente (CPF) por qualquer sinistro e a seguradora pode recusar a cobertura total de danos em caso de incêndio.",
      solution: "A DRD2 Engenharia conduz todo o processo — do diagnóstico inicial ao certificado em mãos — garantindo a segurança técnica e jurídica do síndico."
    },
    content: [
      "O AVCB para condomínios residenciais em São Paulo é uma obrigação legal que recai diretamente sobre o síndico — o responsável legal pela edificação.",
      "Não ter o AVCB válido não é apenas uma irregularidade administrativa: é uma exposição real à responsabilidade civil e criminal em caso de incêndio."
    ],
    faqs: [
      { question: "O condomínio nunca teve AVCB. É possível regularizar agora?", answer: "Sim. A DRD2 conduz processos de primeira regularização em condomínios sem histórico de AVCB — do levantamento inicial ao certificado. O processo começa com o diagnóstico gratuito, que identifica tudo o que precisa ser feito." },
      { question: "Quem paga o AVCB do condomínio — o síndico ou os moradores?", answer: "O custo do AVCB é uma despesa condominial ordinária — rateada entre todas as unidades. O síndico é o responsável por contratar o serviço e aprovar o gasto em assembleia, mas o custo é distribuído entre os condôminos." },
      { question: "O AVCB cobre os apartamentos ou só as áreas comuns?", answer: "Apenas as áreas comuns. Apartamentos com uso exclusivamente residencial não precisam de AVCB próprio. Unidades com uso comercial ou profissional podem ter obrigações próprias dependendo da atividade." },
      { question: "A academia e o salão de festas do condomínio precisam estar cobertos pelo AVCB?", answer: "Sim. Todos os espaços de uso coletivo do condomínio — academia, salão de festas, espaço gourmet, brinquedoteca — precisam estar contemplados no projeto técnico do AVCB." },
      { question: "Qual o prazo de validade do AVCB para condomínio em São Paulo?", answer: "A validade varia conforme o tipo de ocupação e o nível de risco — geralmente de 3 a 5 anos para condomínios residenciais. O prazo exato está definido no próprio certificado emitido pelo CBPMESP." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-galpao-industrial-sao-paulo": {
    slug: "avcb-galpao-industrial-sao-paulo",
    title: "AVCB (Galpões/Indústrias)",
    category: "Aprovação",
    shortDescription: "AVCB para galpões industriais e logísticos em São Paulo. Classificação de risco, projeto PPCI, sprinkler e aprovação junto ao Corpo de Bombeiros.",
    h1: "AVCB para Galpão Industrial em São Paulo: Do Diagnóstico de Risco ao Certificado",
    metaTitle: "AVCB para Galpão Industrial em São Paulo | Engenheiro Especializado — DRD2",
    metaDescription: "AVCB para galpões industriais e logísticos em São Paulo. Classificação de risco, projeto PPCI, sprinkler e aprovação junto ao Corpo de Bombeiros. DRD2 Engenharia — do diagnóstico ao certificado.",
    pas: {
      problem: "O AVCB para galpões industriais e logísticos é o processo mais complexo e de maior valor técnico dentro da regularização de segurança contra incêndio em São Paulo.",
      agitation: "Um projeto técnico incorreto nesse tipo de edificação não é apenas rejeitado pelo Corpo de Bombeiros — ele pode resultar em sistemas instalados de forma errada, com custo de refazimento altíssimo.",
      solution: "A DRD2 Engenharia é especializada em AVCB para galpões industriais e logísticos em São Paulo, com experiência em todas as classes de risco definidas pelas ITs do CBPMESP."
    },
    content: [
      "Ao contrário de condomínios residenciais ou estabelecimentos comerciais onde as exigências são padronizadas, o AVCB para galpões depende diretamente do tipo de atividade, materiais armazenados e volume de estocagem.",
      "Conduzimos processos em galpões de 500 m² a 50.000 m², garantindo que cada sistema de sprinkler e hidrante seja dimensionado com cálculo hidráulico específico para a densidade de aplicação exigida."
    ],
    faqs: [
      { question: "Meu galpão de 5.000 m² armazena produtos de e-commerce variados. Qual o risco?", answer: "A classe de risco é definida pelo produto de maior risco armazenado. Para uma operação de e-commerce com mix de produtos, a classificação costuma ser risco médio — o que exige sprinkler dimensionado para essa classe e hidrante. A DRD2 faz a classificação correta no diagnóstico gratuito." },
      { question: "Posso instalar os sistemas de incêndio do galpão antes do projeto técnico?", answer: "Não é recomendável. Instalar sistemas sem projeto aprovado pode resultar em sistemas incorretos que não passam na vistoria — gerando custo de refazimento. O correto é elaborar o projeto primeiro e instalar os sistemas conforme o projeto aprovado." },
      { question: "Galpão alugado em São Paulo — o AVCB é responsabilidade do proprietário ou do inquilino?", answer: "O AVCB da estrutura do galpão é responsabilidade do proprietário. O AVCB da atividade logística ou industrial desenvolvida pelo inquilino pode ser de responsabilidade do locatário, dependendo do contrato. A DRD2 analisa a situação e orienta as partes gratuitamente." },
      { question: "Galpão com AVCB vencido — posso regularizar sem paralisar a operação?", answer: "Sim. O processo de renovação não exige paralisação da operação — exceto durante a vistoria, quando o engenheiro precisa acessar todas as áreas para verificar os sistemas. A DRD2 coordena a vistoria para minimizar o impacto na operação." },
      { question: "Quanto custa instalar sprinkler em um galpão de 3.000 m²?", answer: "O custo de instalação do sprinkler varia conforme a classe de risco, a configuração do armazenamento e o sistema de bombeamento. A DRD2 indica empresas especializadas em instalação de sistemas de incêndio e pode coordenar o processo de forma integrada ao AVCB." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-hospital-clinica-sao-paulo": {
    slug: "avcb-hospital-clinica-sao-paulo",
    title: "AVCB (Hospitais/Clínicas)",
    category: "Aprovação",
    shortDescription: "Sistemas Críticos (Grupo H). Cumpra exigências inter-órgãos (Vigilância e Bombeiro).",
    h1: "AVCB para Hospital e Clínica em São Paulo: Regularize com Quem Conhece o Grupo H",
    metaTitle: "AVCB para Hospital e Clínica em SP | DRD2 Engenharia",
    metaDescription: "AVCB para hospital e clínica em São Paulo: processo completo, sistemas obrigatórios e ART. Engenheiro especialista em Grupo H. Solicite análise gratuita.",
    pas: {
      problem: "Sua unidade de saúde passaria numa vistoria mista da Vigilância/Bombeiro hoje?",
      agitation: "A Vigilância Sanitária embarga clínicas irregulars. No Grupo H (Saúde), pacientes acamados não conseguem evacuar a pé - e a lei não perdoa brechas nos aparelhos de proteção.",
      solution: "Engenheiros elaboram todo o projeto Grupo H evitando caótico fechamento de alas. Garantimos o seu balizamento no hospital sem fechar agenda médica."
    },
    content: [
      "Avaliamos o Grupo H em São Paulo: desde as exigências pesadíssimas de SDAI setorizado ao escoamento em rampa. Tudo isso enquanto a clínica opera sem sobressaltos.",
      "O laudo exige ART exclusiva; realizamos toda regularização do painel ao projeto perante a junta técnica de Saúde."
    ],
    faqs: [
      { question: "Clínica médica e hospital são obrigados a ter AVCB em São Paulo?", answer: "Sim. A obrigatoriedade está estabelecida no Decreto Estadual nº 69.118/2024 e regulamentada pelas Instruções Técnicas do CBPMESP. Todos os estabelecimentos de saúde enquadrados no Grupo H da IT-02/CBPMESP — de consultórios simples (H-5) a hospitais gerais com internação (H-1) — estão sujeitos ao processo de AVCB ou CLCB, conforme o subgrupo e o porte da edificação. A fiscalização pode ocorrer de forma integrada entre CBPMESP e Vigilância Sanitária." },
      { question: "O que é o Grupo H do CBPMESP e como isso afeta o projeto?", answer: "O Grupo H é a classificação do CBPMESP para edificações destinadas a serviços de saúde, conforme a IT-02/CBPMESP. É dividido em subgrupos: H-1 (hospitais com internação), H-2 (unidades de longa permanência), H-3 (laboratórios e diagnóstico), H-4 (clínicas e prontos-socorros sem internação) e H-5 (consultórios ambulatoriais). O subgrupo determina os sistemas obrigatórios: compartimentação (IT-17), detecção automática (IT-19/NBR 17240), plano de emergência (IT-43) e dimensionamento de saídas para evacuação assistida (IT-08). Protocolar com enquadramento errado gera Comunique-se e atraso." },
      { question: "Qual a diferença entre o AVCB de uma clínica e o de um hospital?", answer: "A principal diferença está na complexidade dos sistemas exigidos e na necessidade de plano de abandono formal. Hospitais com internação (H-1) exigem sistema de detecção automática conforme NBR 17240, compartimentação rigorosa (IT-17), dimensionamento de saídas para evacuação de pacientes não ambulatoriais e plano de emergência (IT-43/CBPMESP). Clínicas ambulatoriais sem internação (H-4 ou H-5) têm exigências progressivamente menores, mas ainda requerem projeto técnico completo com ART." },
      { question: "O AVCB está relacionado ao licenciamento da Vigilância Sanitária?", answer: "São documentos distintos emitidos por órgãos diferentes, mas relacionados operacionalmente. A Vigilância Sanitária de muitos municípios paulistas condiciona a renovação da licença de funcionamento à apresentação do AVCB válido. Operadoras de planos de saúde exigem AVCB atualizado em auditorias de credenciamento. O AVCB vencido pode impactar a renovação de múltiplas licenças e resultar em descredenciamento temporário, com impacto direto no faturamento." },
      { question: "O que acontece se o estabelecimento de saúde for fiscalizado sem AVCB?", answer: "A fiscalização pode resultar em auto de infração, notificação com prazo para regularização, interdição parcial ou total do estabelecimento e comunicação à Vigilância Sanitária. Em caso de sinistro envolvendo pacientes internados, a ausência de AVCB e de sistemas de segurança adequados agrava gravemente a responsabilidade civil e criminal dos responsáveis legais. A vulnerabilidade dos pacientes coloca o Grupo H entre as ocupações com maior exposição a consequências jurídicas em situações de irregularidade." },
      { question: "Quanto tempo leva para tirar o AVCB de uma clínica ou hospital em SP?", answer: "O prazo depende do subgrupo H, da área construída, do estado atual dos sistemas instalados e da completude da instrução processual. Para clínicas ambulatoriais (H-4 ou H-5) com sistemas adequados, processos bem instruídos costumam ser aprovados entre 60 e 90 dias. Para hospitais (H-1), com maior volume documental e complexidade de sistemas, o prazo varia entre 90 e 180 dias. Processos mal instruídos, com Comunique-se mal respondidos, podem facilmente ultrapassar 12 meses." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-comercial-escritorio-sao-paulo": {
    slug: "avcb-comercial-escritorio-sao-paulo",
    title: "AVCB (Lojas/Escritórios)",
    category: "Aprovação",
    shortDescription: "Aprovações e reformulações arquitetônicas em Prédios Comerciais e Shoppings.",
    h1: "AVCB para Comércio e Escritório em SP: Evite Falhas com a Lei Comercial",
    metaTitle: "AVCB para Comércio e Escritório em São Paulo | DRD2 Engenharia",
    metaDescription: "Estabelecimento comercial ou escritório sem AVCB em SP? Multas severas e risco de interdição. A DRD2 regulariza do projeto à emissão. Fale agora.",
    pas: {
      problem: "O seu prédio exige laudo avulso de Alvará AVCB da sua sala corporativa?",
      agitation: "Sua operação é barrada sem um Alvará do comércio. Reformas bobas (como esconder luz de fumaça por gesso de teto da Arquiteta) geram caos imediato na prefeitura local de São Paulo.",
      solution: "Lojistas aguentam suas metas, enquanto projetistas elaboram os documentos finais nos balcões do corpo bombeiro e Prefeitura agilizando os despachos."
    },
    content: [
      "Shoppings e torres demandam revisões próprias pontuais caso seu negócio atropele paredes recém fechadas. Readequamos hidrantes extintores mantendo a conformidade C/D de áreas sem vigia ativo.",
      "Mapeamento primário de saídas bloqueadas com comissionamentos em SP garantindo sucesso irretocável perante órgãos fiscais."
    ],
    faqs: [
      { question: "De quanto em quanto tempo o AVCB de comércio precisa ser renovado em SP?", answer: "Geralmente a cada 3 anos a depender do grupamento ocupacional na Capital." },
      { question: "Escritório em prédio comercial precisa de laudo particular?", answer: "Depende. Condomínio matriz abrange blocos, mas divisórias internas pesadas (se alterando ilhas elétricas ou escondendo a placa detectora) causam o chumbo ao lado no e-Projeto Bombeiros Paulista." },
      { question: "Vocês atendem alvarás provisórios comerciais?", answer: "Validamos análises preliminares dando suporte na licença da empresa nas emissões da Junta." },
      { question: "Qual o preço para tirar o AVCB de um comércio ou escritório em São Paulo?", answer: "O custo do AVCB para estabelecimentos comerciais em SP varia conforme a metragem, tipo de atividade (loja, restaurante, escritório), sistemas existentes e grau de adequação necessário. Lojas em shopping podem ter exigências diferentes de prédios corporativos independentes. A DRD2 faz análise gratuita para apresentar um orçamento preciso sem surpresas." },
      { question: "Como escolher uma empresa de AVCB para comércio e escritório em São Paulo?", answer: "Para estabelecimentos comerciais, o primeiro critério é verificar se a empresa de engenharia tem cadastro ativo no CREA como pessoa jurídica — sem esse registro, a empresa está atuando ilegalmente e seu Alvará de Funcionamento pode ser invalidado junto à Prefeitura. Além disso, a empresa deve conhecer as normas específicas do CBPMESP para comércio e ter experiência com alvarás provisórios e definitivos. A DRD2 Engenharia é registrada no CREA-SP e atende lojas, restaurantes, prédios corporativos e shoppings em São Paulo com 98% de aprovação na primeira análise." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-escola-faculdade-sao-paulo": {
    slug: "avcb-escola-faculdade-sao-paulo",
    title: "AVCB (Escolas/Faculdades)",
    category: "Aprovação",
    shortDescription: "Aval obrigatório do MEC (Grupo E). Segurança escolar plena sob o seu CPF.",
    h1: "AVCB para Escola e Faculdade em São Paulo: Blinde a Proteção Estudantil",
    metaTitle: "AVCB para Escolas e Faculdades em São Paulo | Regularização Completa",
    metaDescription: "AVCB e CLCB para escolas, faculdades e creches em São Paulo com a DRD2 Engenharia. Regularização técnica, renovação e treinamento de brigada. Do diagnóstico à emissão.",
    pas: {
      problem: "Sem esse aval seu campus vai parar pelas canetas do MEC?",
      agitation: "É um fato gravíssimo atrelarmos crianças e a Lei de mais de 100 usuários flutuantes em corredores desprotegidos. A infração bate direto no CPF Diretor, e MEC recolhe validações letivas em blocos irregulares.",
      solution: "Proteção Grupo E: Fazemos adequações educacionais de verão minimizando problemas nas classes mantendo a universidade habilitada a abrir e matricular."
    },
    content: [
      "Avaliamos Colégios (E). Não só os alarmes embutidos mas bombas interligadas hidrantes no perímetro recreativo; uma instituição perde credencial se operando clandestina perante o Fisco ou Corpo Técnico de Bombeiros em fiscalização de Denúncias da vizinhança.",
      "Evite paralisações estourando na metade letiva de seu negócio com Engenharia DRD2 nas aprovações de vistorias técnicas finais e despachos em SP."
    ],
    faqs: [
      { question: "Toda escola precisa de AVCB em São Paulo?", answer: "Sim. Toda edificação de uso educacional no Estado de São Paulo está obrigada a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP. O tipo de certificado depende da área e das características da edificação." },
      { question: "Qual a diferença entre AVCB e CLCB para escolas?", answer: "O AVCB é exigido para edificações de maior porte ou risco elevado, enquanto o CLCB é uma modalidade simplificada destinada a edificações menores e de baixo risco. A DRD2 faz o enquadramento correto sem custo adicional." },
      { question: "Quanto tempo leva para tirar o AVCB de uma escola?", answer: "O prazo varia conforme o estágio de adequação da edificação e a demanda do CBPMESP. Em média, o processo leva de 60 a 180 dias a partir do protocolo. Escolas com pendências de adequação podem levar mais tempo — por isso o diagnóstico prévio é fundamental." },
      { question: "O que acontece se a escola for vistoriada sem AVCB?", answer: "A escola pode ser autuada, multada e interditada pelo Corpo de Bombeiros ou pela Vigilância Sanitária. Além disso, a falta do AVCB pode invalidar o alvará de funcionamento e gerar responsabilidade civil e criminal ao proprietário em caso de sinistro." },
      { question: "A DRD2 atende escolas particulares e públicas?", answer: "Sim. Atendemos escolas privadas, públicas, creches, universidades e cursos livres em toda a Grande São Paulo, com soluções técnicas e orçamento adequados ao perfil de cada cliente." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "clcb-sao-paulo": {
    slug: "clcb-sao-paulo",
    title: "CLCB",
    category: "Aprovação",
    shortDescription: "Processo simplificado de regularização para edificações de baixo risco de incêndio em SP.",
    h1: "Aprovação de CLCB em São Paulo",
    metaTitle: "Aprovação de CLCB em São Paulo | DRD2 Engenharia",
    metaDescription: "CLCB para edificações de baixo risco em SP. Processo simplificado e aprovação ágil. DRD2 Engenharia cuida de tudo junto ao Corpo de Bombeiros. Fale conosco.",
    pas: {
      problem: "Precisa regularizar seu comércio ou negócio de baixo risco?",
      agitation: "Mesmo espaços menores sem CLCB (Certificado de Licença do Corpo de Bombeiros) enfrentam bloqueios para abertura de MEI/CNPJ, recusa na emissão de Alvará pela prefeitura e multas de fiscalização.",
      solution: "A DRD2 enquadra corretamente o seu imóvel e realiza o processo simplificado do CLCB, assegurando a documentação regular de forma rápida e sem burocracias desnecessárias."
    },
    content: [
      "O CLCB (Certificado de Licença do Corpo de Bombeiros) é o licenciamento rápido para imóveis até 750m² e com até 3 pavimentos, que possuem baixo risco de incêndio e não demandam sistemas complexos (como hidrantes ou sprinklers).",
      "É importante frisar que o CLCB tem a mesma força legal do AVCB em termos de comprovação de regularidade. Porém, um enquadramento equivocado por profissionais inexperientes pode fazer seu imóvel cair em exigências desnecessárias.",
      "A DRD2 coleta os atestados exigidos (ARTs, recibos de extintores), preenche as declarações no sistema Via Fácil Bombeiros e agiliza a liberação da licença com precisão técnica."
    ],
    faqs: [
      { question: "Qual a diferença prática entre AVCB e CLCB?", answer: "O CLCB é para locais de menor porte e baixo risco, muitas vezes aprovado de forma documental e amostral. O AVCB requer projeto técnico prévio e vistoria in loco obrigatória por um Bombeiro." },
      { question: "Como saber se meu imóvel precisa de CLCB ou AVCB?", answer: "O enquadramento depende da área construída, altura, carga de incêndio e atividade. Nossa equipe avalia gratuitamente essas características." },
      { question: "CLCB tem validade? Precisa renovar?", answer: "Sim. O CLCB possui validade que varia de 1 a 5 anos dependendo do uso da edificação, precisando ser renovado sucessivamente." },
      { question: "O que acontece se abrir empresa sem CLCB em SP?", answer: "Além do risco à vida, sua empresa ficará irregular e terá o alvará de funcionamento barrado pela prefeitura do município." }
    ],
    icon: "/images/services/clcb.svg"
  },
  "projetos-seguranca-incendio": {
    slug: "projetos-seguranca-incendio",
    title: "Projetos de Incêndio",
    category: "Projetos",
    shortDescription: "Elaboração de Projetos Técnicos de incêndio dentro das normas do CBPMESP.",
    h1: "Projetos de Segurança Contra Incêndio em São Paulo",
    metaTitle: "Projetos de Segurança Contra Incêndio em SP | DRD2 Engenharia",
    metaDescription: "Elaboração de projetos de segurança contra incêndio em SP conforme Instruções Técnicas do CBPMESP. ART, aprovação e suporte completo. DRD2 Engenharia.",
    pas: {
      problem: "Edificação sem projeto aprovado ou com layout desatualizado?",
      agitation: "Obras construídas fora do escopo ou falta do Projeto Técnico bloqueiam o AVCB, podendo gerar embargos de obra, exigências intermináveis do CBPMESP e custos altíssimos de retrabalho na infraestrutura.",
      solution: "A DRD2 elabora plantas detalhadas, dimensiona os sistemas, emite a ART correspondente e acompanha toda a aprovação online (e-Projeto) até o deferimento final pelos Bombeiros."
    },
    content: [
      "A elaboração de um Projeto Técnico de Segurança Contra Incêndio e Pânico (PT) é o esqueleto da regularização. Seguimos as Instruções Técnicas do CBPMESP (como a IT 19/25 para Alarme e IT 22/25 para Hidrantes).",
      "Um projeto bem dimensionado não apenas facilita a aprovação, mas economiza recursos na compra correta das tubulações, bombas e elementos de detecção."
    ],
    faqs: [
      { question: "O que precisa ter em um projeto de incêndio em SP?", answer: "Plantas de localização, dimensionamento de rotas de fuga, hidrantes, sinalização, extintores, sprinklers e memória de cálculo." },
      { question: "Quem pode assinar projeto de segurança contra incêndio?", answer: "Apenas engenheiros ou arquitetos legalmente habilitados e com registro em seu respectivo conselho (CREA ou CAU), mediante emissão de ART/RRT." },
      { question: "Reforma ou ampliação exige novo projeto de incêndio?", answer: "Sim. Para manter a autenticidade, toda mudança na área, tipo de ocupação ou divisão interna obriga a revisão e revalidação do projeto nos Bombeiros." }
    ],
    icon: "/images/services/projetos.svg"
  },
  "alarme-de-incendio-escola-faculdade-sp": {
    slug: "alarme-de-incendio-escola-faculdade-sp",
    title: "Alarme de Incêndio (Escolas/Faculdades)",
    category: "Instalação",
    shortDescription: "SDAI obrigatório (Grupo E) para Escolas e Universidades conforme CBPMESP.",
    h1: "Alarme de Incêndio para Escola e Faculdade em São Paulo",
    metaTitle: "Alarme de Incêndio para Escola e Faculdade em SP | DRD2 Engenharia",
    metaDescription: "Escola ou faculdade sem alarme aprovado? Instalamos SDAI conforme IT-19/2025 e NBR 17240, com projeto e AVCB garantido em SP. Solicite análise técnica gratuita.",
    pas: {
      problem: "Sua instituição de ensino sem AVCB e sem sistema legal aprovado?",
      agitation: "Instituição de ensino sem AVCB válido pode ser interditada pelo Corpo de Bombeiros — e o diretor ou mantenedor responde pessoalmente (civil e criminalmente) por qualquer sinistro em uma edificação irregular.",
      solution: "A DRD2 Engenharia garante que crianças, jovens e universitários tenham tempo hábil de evacuação com painéis certificados (INMETRO) e detectores blindados anti-vandalismo nos corredores."
    },
    content: [
      "Escolas e faculdades concentram crianças e adolescentes em ambientes com rotinas fixas e corredores com pico de fluxo simultâneo nos intervalos. O alarme precisa se sobrepor ao ruído recreativo sem gerar pânico na zona errada.",
      "O Decreto Estadual classifica essas edificações no Grupo E — (Educação e Cultura). Nossa engenharia mapeia laboratórios de química ou cozinhas (onde detectores de fumaça comuns dariam falsos alarmes o tempo todo) trocando-os por térmicos especificados na NBR."
    ],
    faqs: [
      { question: "O alarme de incêndio é obrigatório para escolas em São Paulo?", answer: "Sim. A grande maioria das instituições atinge o Grupo E no decreto. Além da lei paulista, a Lei Federal (13.425/2017) estipula que acima de 100 alunos simultâneos o sistema se torna legalmente compulsório sem negociação." },
      { question: "Detectores de incêndio numa escola sofrem muito vandalismo?", answer: "Avaliamos a instalação do sensor ou da botoeira (acionador manual de quebra de vidro) protegendo em caixas anti-vandalizaço ou redimensionando a altura nos corredores das turmas ativas." },
      { question: "O Laboratório de Química precisa do mesmo botão/alarme?", answer: "Não. Ambientes de Química/Física emitem vapores naturalmente que ativam falsos alarmes com sirenes massivas interrompendo a aula. Inserimos detectores baseados em curva térmica ou especificidade do reagente isolando o erro." }
    ],
    icon: "/images/services/alarme.svg"
  },
  "alarme-de-incendio-comercial-escritorio-sp": {
    slug: "alarme-de-incendio-comercial-escritorio-sp",
    title: "Alarme de Incêndio (Lojas/Escritórios)",
    category: "Instalação",
    shortDescription: "SDAI obrigatório (Grupos C e D) para Comércios e Escritórios conforme Lei 13.425 e IT-19.",
    h1: "Alarme de Incêndio para Comércio e Escritório em São Paulo",
    metaTitle: "Alarme de Incêndio para Comercial e Escritório em SP | DRD2 Engenharia",
    metaDescription: "Prédio comercial ou loja sem alarme aprovado? Instalamos SDAI conforme IT-19/2025 e NBR 17240. Projeto, execução e AVCB garantido em SP. Análise gratuita.",
    pas: {
      problem: "Prédio comercial ou shopping sem aprovação do Bombeiro?",
      agitation: "A Lei Federal nº 13.425/2017 determina que edificações com mais de 100 pessoas são obrigadas a manter sistemas complexos em funcionamento. A ausência disso paralisa o alvará municipal e trava negócios no local.",
      solution: "A DRD2 Engenharia assegura AVCBs para lojistas e síndicos corporativos com instalação de centrais INMETRO adequadas para automação remota rápida e aprovação imediata no Batalhão."
    },
    content: [
      "Estabelecimentos comerciais (Grupo C) e Serviços Profissionais (Grupo D) atingem o gatilho de obrigatoriedade pela lotação flutuante do público e não apenas pelo tamanho físico do escritório.",
      "Entregamos as Centrais instaladas no local correto de recepção, com detectores mapeando lajes rebaixadas, garantindo que o Bombeiro encontre rigor técnico na prancheta de auditoria e libere o alvará corporativo."
    ],
    faqs: [
      { question: "O alarme de incêndio é obrigatório para lojas em São Paulo?", answer: "Sim. A Lei Federal exige sistemas de segurança em edificações com mais de 100 ocupantes simultâneos, abrangendo grandes lojas, concessionárias e escritórios de múltiplos andares." },
      { question: "O que a IT-19 exige de diferente para escritórios?", answer: "Ela exige que a Central fique na portaria (acesso livre) e recomenda monitoramento remoto se o prédio fechar aos fins de semana, atrelando certificação total de funcionamento no Laudo INMETRO." },
      { question: "Loja de Shopping precisa de SDAI individual?", answer: "Apesar do shopping ter o AVCB global, reformas isoladas que alterem paredes ou carga elétrica acionam a necessidade de revisão do laudo autônomo perante os bombeiros." }
    ],
    icon: "/images/services/alarme.svg"
  },
  "alarme-de-incendio-hospital-clinica-sp": {
    slug: "alarme-de-incendio-hospital-clinica-sp",
    title: "Alarme de Incêndio (Hospitais/Clínicas)",
    category: "Instalação",
    shortDescription: "SDAI obrigatório (Grupo H) para Hospitais e Clínicas conforme IT-19/2025.",
    h1: "Alarme de Incêndio para Hospital e Clínica em São Paulo",
    metaTitle: "Alarme de Incêndio para Hospitais e Clínicas em SP | DRD2 Engenharia",
    metaDescription: "Estabelecimento de saúde sem SDAI aprovado? Instalamos sistema conforme IT-19/2025 e Grupo H. Projeto, execução e AVCB garantido em SP. Solicite análise gratuita.",
    pas: {
      problem: "EAS sem SDAI aprovado no Bombeiro?",
      agitation: "Estabelecimento de saúde sem SDAI aprovado pelo CBPMESP está sujeito a interdição imediata. Em uma emergência, pacientes em leitos e em recuperação não conseguem se evacuar sem assistência.",
      solution: "A DRD2 Engenharia entrega projetos e instalações com painel repetidor setorizado (Grupo H) e tempo máximo de 30s de reconhecimento, atendendo perfeitamente as exigências do Comando em SP."
    },
    content: [
      "Estabelecimentos de saúde são classificados no Grupo H e recebem tratamento normativo duro e especial pelo CBPMESP por uma razão primária: os ocupantes em risco não conseguem se evacuar sem assistência.",
      "Qualquer falha técnica no SDAI de um Estabelecimento Assistencial de Saúde (EAS) tem consequências diretas sobre vidas. Instalamos centrais que respeitam o tempo de supervisão e alarme irrestrito (24h/15min)."
    ],
    faqs: [
      { question: "O alarme de incêndio é obrigatório para hospitais em São Paulo?", answer: "Sim. Estabelecimentos de saúde são classificados no Grupo H e estão entre as ocupações com maior rigor normativo. O SDAI é condição obrigatória para operação e AVCB." },
      { question: "O que é o painel repetidor e por que é exigido em hospitais?", answer: "A IT-19 e NBR 17240 exigem que a sinalização seja simultânea na central e no painel repetidor do setor atingido, permitindo que a equipe foque apenas naquela ala médica sem evacuar desnecessariamente todo o hospital." },
      { question: "Qual é o tempo máximo de resposta da central nestes casos?", answer: "Conforme NBR 17240, o reconhecimento num EAS deve ocorrer em até 30 segundos. Caso contrário, aciona-se o disparo da evacuação geral." }
    ],
    icon: "/images/services/alarme.svg"
  },
  "alarme-de-incendio-galpao-industrial-sp": {
    slug: "alarme-de-incendio-galpao-industrial-sp",
    title: "Alarme de Incêndio (Indústria)",
    category: "Instalação",
    shortDescription: "SDAI obrigatório para Galpões e Indústrias conforme IT-19/2025 CBPMESP.",
    h1: "Alarme de Incêndio para Galpão e Indústria em São Paulo",
    metaTitle: "Alarme de Incêndio para Galpão Industrial em SP | DRD2 Engenharia",
    metaDescription: "Galpão sem alarme de incêndio aprovado? Instalamos SDAI conforme IT-19/2025 e NBR 17240. Projeto, execução e AVCB garantido em SP. Solicite análise gratuita.",
    pas: {
      problem: "Galpão sem SDAI aprovado no Bombeiro?",
      agitation: "Galpão sem sistema de alarme de incêndio aprovado é infração direta ao Decreto Estadual nº 69.118/2024. Seu AVCB pode ser indeferido — e a operação do seu negócio, interditada imediatamente por órgãos fiscais.",
      solution: "A DRD2 Engenharia entrega conformidade técnica integral (IT-19/2025) e a documentação completa. Projeto com ART, instalação INMETRO e acompanhamento até a emissão limpa do seu AVCB."
    },
    content: [
      "Edificações do Grupo I (indústrias e depósitos) são classificadas pelo CBPMESP conforme sua carga de incêndio. Quanto maior a carga, maiores e mais rígidas são as especificações do Sistema de Detecção e Alarme de Incêndio (SDAI).",
      "Evitamos o erro comum de centrais velhas ou detectores mal posicionados que reprovam a vistoria. Exigimos Central com dupla alimentação, Strobes (Alertas visuais) para ambientes acima de 105 dBA e emissão completa do Laudo de Comissionamento antes da chegada do Bombeiro."
    ],
    faqs: [
      { question: "O alarme de incêndio é obrigatório para galpões industriais em São Paulo?", answer: "Sim. Para galpões classificados como Grupo I pelo Decreto Estadual nº 69.118/2024, o SDAI é exigido conforme a área e a carga de incêndio da edificação. Sua aprovação é condição obrigatória para a emissão do AVCB." },
      { question: "O que é a IT-19/2025 e como ela afeta galpões logísticos?", answer: "Atualizada em março de 2025, ela reforça a exigência legal de certificação INMETRO da central de alarme, e obrigatoriedade vital do laudo de comissionamento emitido por ART técnica antes da vistoria final." },
      { question: "Galpão com operação barulhenta precisa de dispositivo especial?", answer: "Obrigatóriamente sim. A nova diretriz estabelece que ruidos acima de 105 dBA requeiram sinalização visual intermitente (Strobes vermelhos ou brancos) associada aos alertas sonoros comuns para não mascarar o aviso operário." }
    ],
    icon: "/images/services/alarme.svg"
  },
  "alarme-de-incendio-para-condominio-sao-paulo": {
    slug: "alarme-de-incendio-para-condominio-sao-paulo",
    title: "Alarme de Incêndio (Condomínios)",
    category: "Instalação",
    shortDescription: "Sistemas de detecção e alarme de incêndio SDAI conforme IT-19/2025.",
    h1: "Alarme de Incêndio para Condomínios em São Paulo",
    metaTitle: "Alarme de Incêndio para Condomínios em SP | DRD2 Engenharia",
    metaDescription: "AVCB do seu condomínio em risco? Instalamos sistema de alarme de incêndio conforme IT-19/2025. Projeto aprovado no CBPMESP. Síndico, solicite análise gratuita.",
    pas: {
      problem: "Síndico, o alarme de incêndio do seu condomínio atende a IT-19/2025?",
      agitation: "A ausência ou irregularidade no sistema de alarme de incêndio pode resultar em multas severas aplicadas pelo Corpo de Bombeiros — e em responsabilidade civil pessoal direta por qualquer sinistro ocorrido.",
      solution: "A DRD2 é especialista em regularização e aprovação de SDAI (Sistemas de Detecção e Alarme de Incêndio) para condomínios em São Paulo. Entregamos desde o comissionamento técnico à aprovação do AVCB."
    },
    content: [
      "Não é alarmismo. É o que estabelece a legislação com base no Decreto Estadual nº 69.118/2024. Condomínios que renovarão o AVCB precisam estar rigorosamente enquadrados na IT-19/2025 (não basta ter o sistema antigo 'funcionando').",
      "Executamos a instalação da Central de alarme (CAI) certificada pelo INMETRO, detectores fotoelétricos, botoeiras e sirenes em todas as áreas comuns, entregando o Relatório de comissionamento obrigatório."
    ],
    faqs: [
      { question: "O que a IT-19/2025 exige para o alarme de incêndio do condomínio?", answer: "Ela torna mandatório o uso de centrais certificadas, com dupla fonte de alimentação (rede + bateria), além de espaçamentos corretos de detectores NBR 17240 e registro funcional no relatório de comissionamento." },
      { question: "O que acontece se o AVCB do condomínio vencer por falta de alarme?", answer: "O síndico pode ser responsabilizado civil e criminalmente. O condomínio fica sujeito a multas pesadas, além de perder cobertura total do seguro predial." },
      { question: "A central de alarme antiga do meu condomínio ainda serve?", answer: "Depende. Em vistorias do CBPMESP será avaliado se ela atende a norma atual de certificação e se o comissionamento está funcional. A DRD2 realiza diagnóstico técnico preventivo para apontar isso." },
      { question: "A DRD2 entrega a ART junto com o Alarme de Incêndio?", answer: "Sim. Nossas execuções incluem a Anotação de Responsabilidade Técnica (ART) do engenheiro instalador e o laudo de viabilidade necessários." }
    ],
    icon: "/images/services/alarme.svg"
  },
  "chuveiro-automatico-sprinkler-sao-paulo": {
    slug: "chuveiro-automatico-sprinkler-sao-paulo",
    title: "Sistema Sprinkler",
    category: "Instalação",
    shortDescription: "Instalação de rede de chuveiros automáticos em conformidade com NBR 10897.",
    h1: "Chuveiro Automático Sprinkler em São Paulo",
    metaTitle: "Chuveiro Automático Sprinkler em SP | DRD2 Engenharia",
    metaDescription: "Projeto, fornecimento e instalação de sprinkler em SP conforme IT 23/25 CBPMESP e ABNT NBR 10897. DRD2 Engenharia. Solicite orçamento.",
    pas: {
      problem: "Estão exigindo a complexa instalação de Sprinklers no seu prédio ou galpão?",
      agitation: "A ausência ou o mau funcionamento dessa rede acarreta o imediato embargo/paralisação da obra/operação. O risco em grandes estoques com fogo descontrolado é drástico, destruindo milhões em poucos minutos.",
      solution: "Nossa engenharia domina o dimensionamento hidráulico e a instalação da rede completa de bicos de sprinkler."
    },
    content: [
      "Os Chuveiros Automáticos (SPK) atuam combatendo a chama em seu estágio inicial. Sua execução deve ser perfeita para impedir falhas térmicas ou pressão insuficiente das bombas.",
      "Baseamos nossos cálculos nos parâmetros rigorosos da IT 23/25 e NBR 10897, realizando vistorias com laudo hidrostático em tubulações para emitir o aceite total da operação."
    ],
    faqs: [
      { question: "Quais edificações precisam de sprinkler em São Paulo?", answer: "São primordiais para galpões logísticos de alto risco (fábricas de plásticos, papelão), subsolos complexos, shoppings e edifícios comerciais de grande altura." },
      { question: "Sprinkler é obrigatório em condomínio residencial?", answer: "Na atual norma, edifícios residenciais acima de determinada altura demandam, mas depende inteiramente do ano do projeto aprovado primariamente." },
      { question: "Qual norma regula o chuveiro automático no Brasil?", answer: "A normativa base é a ABNT NBR 10897 alinhada com as rígidas regulamentações da FM Global e do Corpo de Bombeiros de SP." },
      { question: "Sprinkler precisa de manutenção? Com que frequência?", answer: "Testes da bomba, inspeção se existem bicos obstruídos por pintura ou corrosão são anuais, recomendando-se testes de vazão." }
    ],
    icon: "/images/services/sprinkler.svg"
  },
  "instalacao-hidrante-sao-paulo": {
    slug: "instalacao-hidrante-sao-paulo",
    title: "Hidrantes",
    category: "Instalação",
    shortDescription: "Fornecimento de Rede de Hidrantes, Reservatórios e Mangotinhos.",
    h1: "Instalação de Hidrante em São Paulo",
    metaTitle: "Instalação de Hidrante em São Paulo | DRD2 Engenharia",
    metaDescription: "Projeto, fornecimento e instalação de hidrante e mangotinho em SP conforme IT 22/25 CBPMESP. Exigido para AVCB. DRD2 Engenharia. Solicite orçamento.",
    pas: {
      problem: "O seu prédio precisa adequar ou instalar um sistema de Hidrantes e Mangotinhos?",
      agitation: "Sem o sistema montado, bombas conectadas e teste de pressão validado, nenhum vistoriador aprova o AVCB. Tubulações antigas furadas ou com baixa pressão representam insegurança fatal no combate humano direto da chama.",
      solution: "A DRD2 dimensiona volumes do reservatório, potências das bombas e instala cavaletes, registros de recalque e as mangueiras corretas, 100% balizado na IT 22/25."
    },
    content: [
      "Contamos com expertise em soldas de redes ranhuradas, galvanizadas ou aço carbono. Também realizamos modernização dos abrigos e registro de recalque da calçada frontal.",
      "Oferecemos vistoria preventiva, como re-empatação, secagem natural e teste hidrostático individual das mangueiras existentes (validade de 12 meses)."
    ],
    faqs: [
      { question: "Quais prédios precisam de hidrante em São Paulo?", answer: "Maioria das edificações com área ampliada (geralmente superior a 750 m²) ou altura expressiva, independentemente de ser comercial ou residencial." },
      { question: "Qual a diferença entre hidrante e mangotinho?", answer: "Mangotinhos usam tubos semi-rígidos que permitem avanço de água pela tubulação já esticando-a (menor vazão e mais fáceis param leigos), os hidrantes pedem mangueiras lay flat que precisam ser abertas e operadas por grupo (brigada)." },
      { question: "Hidrante precisa de manutenção obrigatória?", answer: "Totalmente obrigatório: manutenção em bombas (pressão) e o reteste hidrostático nas mangueiras dos abrigos anualmente." },
      { question: "Hidrante é exigido para aprovação do AVCB?", answer: "Sim. Se o projeto da sua área demanda, ele deve ser demonstrado em uso no momento de aprovação presencial." }
    ],
    icon: "/images/services/hidrante.svg"
  },
  "spda-para-raios-sao-paulo": {
    slug: "spda-para-raios-sao-paulo",
    title: "SPDA",
    category: "Instalação",
    shortDescription: "Projeto e Instalação do Sistema de Proteção contra Descargas Atmosféricas (Para-raios).",
    h1: "SPDA — Sistema de Proteção contra Descargas Atmosféricas em São Paulo",
    metaTitle: "SPDA Para-Raios em São Paulo | DRD2 Engenharia",
    metaDescription: "Projeto, fornecimento e instalação de SPDA em SP conforme Decreto Estadual nº 69.118/2024 e ABNT NBR 5419. Exigido para AVCB. DRD2 Engenharia. Solicite orçamento.",
    pas: {
      problem: "Seu estabelecimento foi exigido de apresentar o Laudo do SPDA (para-raios)?",
      agitation: "Sem as medições ôhmicas em ordem, laudo recusado no AVCB. O pior: caso um raio atinja a região, a malha defeituosa fará uma indução letal para equipamentos e até princípio de incêndio em fiações expostas, invalidando completamente a apólice da seguradora local.",
      solution: "A DRD2 faz as rotinas de Medição, projeto de malha Faraday ou interceptores Franklin, condutores de descida e Emissão total do laudo técnico com a devida ART para Bombeiros."
    },
    content: [
      "O laudo e averiguação das peças como caixas de inspeção e DPS tem por objetivo o balizamento total pela normatizadora ABNT NBR 5419 vigente.",
      "As descargas elétricas no Brasil atingem volumes consideráveis mundialmente e por conta da segurança direta no Decreto do estado, instalamos infraestrutura que blinda os residentes."
    ],
    faqs: [
      { question: "Quais edificações precisam de SPDA em São Paulo?", answer: "Edificações onde o fator gerencial de risco (área de exposição e região) calculada no memorial indicar risco e necessidade conforme a NR10 e as regulamentações Corpo Bombeiro." },
      { question: "SPDA é obrigatório para condomínio?", answer: "A ampla maioria predial é demandante (especialmente verticais) afim de guarnecer o espaço interno e as partes estruturais." },
      { question: "Qual norma regula o SPDA no Brasil?", answer: "A Norma que determina as inspeções anuais visuais ou medições é a ABNT NBR 5419:2015 em suas 4 partes rigorosas associada ao Decreto 69.118/2024." },
      { question: "SPDA precisa de manutenção e laudo periódico?", answer: "Sim, medições de resistência da rede ôhmica na terra de 1 a 3 anos (dependendo do risco do galpão/edifício) e inspeções visíveis todos os anos obrigando o laudo conclusivo de eficiência com ART." }
    ],
    icon: "/images/services/spda.svg"
  },
  "manutencao-sistemas-incendio": {
    slug: "manutencao-sistemas-incendio",
    title: "Manutenção de Sistemas",
    category: "Aprovação",
    shortDescription: "Gestão, Laudos Técnicos e Contratos Mensais em Redes de Incêndio.",
    h1: "Manutenção de Sistemas de Incêndio em São Paulo",
    metaTitle: "Manutenção de Sistemas de Incêndio em SP | DRD2 Engenharia",
    metaDescription: "Manutenção periódica de alarme, sprinkler, hidrante e SPDA em São Paulo. Laudo técnico, ART e suporte para renovação do AVCB. DRD2 Engenharia. Solicite orçamento.",
    pas: {
      problem: "Seus sistemas de combate a incêndio foram instalados, mas não sofrem inspeção documentada?",
      agitation: "Quando precisar da renovação do AVCB, o Bombeiro notará bombas enferrujadas ou centrais em pane, exigindo reformas emergênciais caríssimas. Na hora do laudo e ART, se houver fogo, o proprietário assume inteira culpa por dolo eventual de falta de preparo recorrente.",
      solution: "Nosso corpo técnico assegura preventivas em todos sistemas: Alarmes, redes pressurizadas, esguichos, chuveiros e iluminação por Contratos (Trimestral/Semestral/Anual) e Emissão de Laudos de Manutenibilidade."
    },
    content: [
      "Oferecemos suporte recorrente nas inspeções. Com a DRD2 ao seu lado, geramos confiança para síndicos e administradoras repassando tranquilidade da emissão contínua da ART e das conformidades em pastas técnicas do prédio.",
      "Saneamento de manômetros de recalque, troca de painéis quebrados, testes sonoros periódicos no alarme minimizando desgaste mecânico natural e avarias em vistorias do poder público."
    ],
    faqs: [
      { question: "Com que frequência sistemas de incêndio precisam de manutenção?", answer: "Sistemas complexos preferencialmente mensal ou trimestral. Bombas em testes e validação com os laudos ART anualmente nas épocas propensas para emissão oficial do documento." },
      { question: "Manutenção de incêndio é obrigatória para renovação do AVCB?", answer: "Fundamental. Sem atestar que o laudo técnico do conjunto da obra da estrutura do ano anterior tem ARTs vigentes, é reprovação massiva contínua." },
      { question: "Quem pode assinar o laudo de manutenção de incêndio?", answer: "Engenheiros do campo elétrico, civil/mecânico habilitado do CREA portador do rigor normativo para o que assevera atestar." },
      { question: "Qual a diferença entre manutenção preventiva e corretiva em sistemas de incêndio?", answer: "Preventiva é a validação antecedente antes do componente se fragilizar. Corretiva é do conserto obrigatório por defeito, paralisação, estourou um cano ou queima geral pós raio, cujo processo precisa de prioridade e celeridade máxima." }
    ],
    icon: "/images/services/manutencao.svg"
  },
  "treinamento-brigada-incendio": {
    slug: "treinamento-brigada-incendio",
    title: "Treinamento de Brigada",
    category: "Aprovação",
    shortDescription: "Formação e reciclagem conforme IT 17/25 para certificação e conformidade de segurança.",
    h1: "Treinamento de Brigada de Incêndio em São Paulo",
    metaTitle: "Treinamento de Brigada de Incêndio em SP conforme IT 17 | DRD2 Engenharia",
    metaDescription: "Treinamento de Brigada de Incêndio em SP conforme Instrução Técnica 17/25. Formação, reciclagem e certificado para AVCB. DRD2 Engenharia. Solicite orçamento.",
    pas: {
      problem: "Sua equipe está preparada para agir em uma emergência real de fogo?",
      agitation: "Sem uma brigada treinada e o atestado vigente, o AVCB não é emitido. Mas o risco real é humano: o despreparo no uso de extintores ou na evacuação custa vidas e pode gerar pesadas responsabilidades para o síndico ou empresário.",
      solution: "A DRD2 realiza o treinamento teórico e prático completo (Formação ou Reciclagem) seguindo rigorosamente a IT 17/25, emitindo o certificado necessário para sua regularização total."
    },
    content: [
      "O treinamento de Brigada de Incêndio é compulsório para todas as edificações que necessitam de AVCB (exceto as isentas por norma). Ele capacita os ocupantes a operarem os primeiros equipamentos de combate e a coordenarem a saída segura de todos.",
      "Nossos instrutores são especialistas que trazem experiências reais de campo. Abordamos desde os fundamentos do fogo, uso de diferentes tipos de extintores e hidrantes, até técnicas de primeiros socorros e plano de abandono."
    ],
    faqs: [
      { question: "Qual a validade do treinamento de brigada de incêndio?", answer: "O treinamento tem validade de 12 meses (1 ano). Após esse período, é necessário realizar a reciclagem conforme determina a Instrução Técnica 17." },
      { question: "Quantas pessoas precisam fazer parte da brigada no meu prédio?", answer: "O número de brigadistas é calculado com base na população fixa de cada setor, tipo de ocupação e grau de risco da edificação." },
      { question: "O treinamento da DRD2 é aceito pelo Corpo de Bombeiros?", answer: "Sim. Nossos treinamentos seguem integralmente a IT 17/25 e emitimos o Atestado de Brigada com ART, necessário para o upload no sistema Via Fácil e emissão do AVCB." },
      { question: "O treinamento pode ser realizado no local da minha empresa?", answer: "Sim, realizamos treinamentos in loco para maior comodidade da sua equipe, além de podermos utilizar os próprios equipamentos de combate da edificação para familiarização dos brigadistas." }
    ],
    icon: "/images/services/brigada.svg"
  },
  "projeto-escada-pressurizada-avcb-sao-paulo": {
    slug: "projeto-escada-pressurizada-avcb-sao-paulo",
    title: "Escada Pressurizada",
    category: "Projetos",
    shortDescription: "Projeto e dimensionamento de pressurização de escadas para segurança contra incêndio.",
    h1: "Projeto de Escada Pressurizada em São Paulo",
    metaTitle: "Projeto de Escada Pressurizada em SP | DRD2 Engenharia",
    metaDescription: "Projeto e dimensionamento de pressurização de escadas em SP conforme IT 13/25. Segurança e conformidade técnica para seu edifício. DRD2 Engenharia.",
    pas: {
      problem: "Sua escada de emergência está sem a pressurização correta exigida pelos Bombeiros?",
      agitation: "Em caso de incêndio, a fumaça é a maior causa de óbitos. Escadas sem pressurização tornam-se armadilhas letais. Além disso, a falta do sistema aprovado bloqueia o AVCB e expõe o síndico a graves riscos jurídicos.",
      solution: "A DRD2 projeta e dimensiona todo o sistema de pressurização: ventiladores, dutos e grelhas, garantindo que a fumaça nunca entre na rota de fuga e assegurando sua aprovação total."
    },
    content: [
      "A pressurização de escadas é um sistema vital para a segurança em edifícios de grande altura ou com rotas de fuga complexas. Ele consiste em manter a pressão interna da escada superior à do resto da edificação, impedindo a entrada de fumaça.",
      "Seguimos rigorosamente a Instrução Técnica IT 13/25 do Corpo de Bombeiros de SP, realizando cálculos precisos de vazão, pressão e potência dos motoventiladores.",
      "Nossos projetos incluem o dimensionamento da casa de máquinas, dutos de ar, grelhas de insuflamento e a integração com o sistema de alarme de incêndio do prédio."
    ],
    faqs: [
      { question: "O que é pressurização de escada de incêndio?", answer: "É um sistema que utiliza ventiladores industriais para injetar ar na caixa da escada, criando uma zona de pressão positiva que barra a entrada de fumaça e calor durante um incêndio." },
      { question: "Quais prédios precisam de escada pressurizada em SP?", answer: "Geralmente exigido em edifícios acima de 12 metros de altura ou com certas características de ocupação que impedem a ventilação natural, conforme as tabelas do Decreto Estadual." },
      {
        question: "Com que frequência devo realizar a manutenção dos sistemas de incêndio?",
        answer: "A recomendação normativa e do Corpo de Bombeiros é que os sistemas preventivos passem por inspeções e manutenções periódicas a cada 6 a 12 meses, variando conforme a tecnologia e criticidade da edificação.",
      },
      { question: "Qual a norma que regula o projeto de pressurização?", answer: "A principal norma técnica do Corpo de Bombeiros em São Paulo é a IT 13, que estabelece os parâmetros de velocidade do ar e níveis de pressão mínima." },
      { question: "Escada pressurizada exige manutenção periódica?", answer: "Sim. O sistema deve ser testado mensalmente e ter manutenções preventivas semestrais em ventiladores, filtros e geradores para garantir o funcionamento na hora da emergência." }
    ],
    icon: "/images/services/escada.svg"
  },
  "laudo-estanqueidade-gas-sao-paulo": {
    slug: "laudo-estanqueidade-gas-sao-paulo",
    title: "Laudo de Estanqueidade de Gás",
    category: "Instalação",
    shortDescription: "Teste de estanqueidade de gás GLP e GN para condomínios, restaurantes, cozinhas industriais e redes prediais em São Paulo.",
    h1: "Teste de Estanqueidade de Gás GLP e GN em São Paulo",
    metaTitle: "Teste de Estanqueidade de Gás GLP e GN em SP | Laudo com ART",
    metaDescription: "Teste de estanqueidade de gás em São Paulo para condomínios, restaurantes e cozinhas industriais. Laudo técnico de gás GLP/GN com ART para segurança, AVCB e regularização.",
    pas: {
      problem: "A rede de gás do condomínio, restaurante ou cozinha industrial está sem laudo de estanqueidade atualizado?",
      agitation: "Vazamentos de GLP ou GN podem ser invisíveis, acumulam risco de explosão e expõem síndicos, administradoras e empresários a responsabilidade civil, interdição, perda de licença e bloqueio de regularização junto ao Corpo de Bombeiros.",
      solution: "A DRD2 realiza inspeção técnica da tubulação de gás GLP/GN, teste de pressão, verificação de vazamentos, emissão de laudo técnico e ART, orientando as correções necessárias para segurança predial, AVCB e operação regular."
    },
    content: [
      "O teste de estanqueidade de gás é a inspeção técnica que verifica se a rede de tubulação de gás combustível, seja GLP ou GN, está vedada e livre de vazamentos ocultos. O procedimento é essencial para condomínios residenciais, prédios comerciais, restaurantes, bares, padarias, cozinhas industriais e imóveis que dependem de central de gás ou gás encanado.",
      "A inspeção de tubulação de gás GLP e GN é realizada com equipamentos adequados, controle de pressão e análise técnica da instalação. Quando a rede apresenta queda de pressão, conexões comprometidas, válvulas inadequadas ou sinais de vazamento, o laudo aponta a não conformidade e orienta a correção antes que o risco evolua para acidente grave.",
      "Em condomínios, o laudo de gás protege moradores, síndico e administradora, reduz risco jurídico e ajuda no processo de AVCB, renovação e regularização predial. Em restaurantes e cozinhas industriais, o teste é ainda mais estratégico porque o uso constante de gás, calor, gordura e operação diária aumenta a criticidade da instalação.",
      "A DRD2 Engenharia atende São Paulo, Grande SP e região metropolitana com laudo técnico de rede de gás, teste de vazamento de gás encanado, inspeção de central de GLP, avaliação de gás natural e emissão de ART por engenheiro responsável."
    ],
    faqs: [
      {
        question: "O que é teste de estanqueidade de gás?",
        answer: "É o ensaio técnico que verifica se a tubulação de gás GLP ou GN está vedada e sem vazamentos. O teste avalia a rede, conexões, válvulas e estabilidade de pressão, permitindo emitir laudo técnico quando a instalação está em condição segura.",
      },
      {
        question: "Condomínio precisa fazer teste de estanqueidade de gás?",
        answer: "Sim, condomínios com rede de gás encanado, central de GLP ou gás natural devem manter inspeções preventivas e laudo técnico atualizado. O documento reduz risco aos moradores, protege o síndico e pode ser exigido em processos de AVCB, renovação e segurança predial.",
      },
      {
        question: "Restaurante precisa de laudo de gás?",
        answer: "Restaurantes, bares, padarias e cozinhas industriais que utilizam GLP ou GN devem tratar o laudo de gás como item crítico de segurança. A instalação de gás é avaliada em fiscalizações, no processo de AVCB e em situações de risco operacional.",
      },
      {
        question: "Quanto custa o teste de estanqueidade de gás?",
        answer: "O custo depende do tipo de instalação, quantidade de pontos, extensão da tubulação, acesso à central de gás, necessidade de setorização e complexidade do imóvel. Condomínios e cozinhas industriais costumam exigir avaliação técnica antes do orçamento final.",
      },
      {
        question: "Quem pode fazer teste de estanqueidade de gás GLP e GN?",
        answer: "O teste deve ser realizado por profissional ou empresa habilitada, com conhecimento técnico da instalação e emissão de documentação adequada. Quando há laudo técnico com ART, existe responsabilidade técnica formal pelo serviço executado."
      }
    ],
    icon: "/images/services/avcb.svg"
  },
  "projeto-pet-sp": {
    slug: "projeto-pet-sp",
    title: "Projeto PET (Eventos)",
    category: "Projetos",
    shortDescription: "Projeto técnico e licenciamento para eventos temporários em todo o estado de SP.",
    h1: "Projeto de Segurança para Eventos Temporários (PET) em SP",
    metaTitle: "Projeto PET Corpo de Bombeiros de São Paulo | Licença para Eventos | DRD2 Engenharia",
    metaDescription: "Obtenha seu Projeto PET (Eventos Temporários) em SP com agilidade. Licenciamento total para feiras, congressos e shows. ART inclusa. DRD2 Engenharia.",
    pas: {
      problem: "Seu evento corre o risco de ser interditado na véspera por falta de licença dos Bombeiros?",
      agitation: "Organizar um evento sem o Projeto PET aprovado é uma aposta perigosa. Além da multa pesada, a interdição pela Polícia ou Bombeiros na hora da abertura causa prejuízo financeiro e um desastre reputacional para sua marca.",
      solution: "A DRD2 é especialista em aprovações rápidas. Elaboramos todo o layout de segurança, dimensionamos extintores e saídas de emergência e emitimos a ART necessária para garantir que seu evento ocorra sem sobressaltos."
    },
    content: [
      "O Projeto Técnico para Evento Temporário (PET) é obrigatório para qualquer evento que utilize estruturas temporárias (palcos, tendas, arquibancadas) ou que ocorra em locais que não possuam AVCB vigente compatível com o público esperado.",
      "Nosso trabalho envolve desde o croqui de localização até o cálculo de lotação máxima, brigada de incêndio necessária e as condições de acessibilidade exigidas pela IT 30 e IT 43 do CBPMESP.",
      "Cuidamos de todo o processo junto ao Via Fácil Bombeiros, garantindo que a vistoria técnica ocorra em tempo hábil para a realização do evento."
    ],
    faqs: [
      { question: "O que é o Projeto PET?", answer: "PET significa Projeto Técnico para Evento Temporário. É o conjunto de medidas de segurança (extintores, sinalização, rotas de fuga) exigido pelo Corpo de Bombeiros para eventos em locais abertos ou fechados com estruturas temporárias." },
      { question: "Qual o prazo para aprovar um PET?", answer: "Depende da complexidade e do público, mas o ideal é iniciarmos o processo pelo menos 30 dias antes do evento. Para eventos menores, conseguimos processos mais ágeis." },
      { question: "Preciso de PET para eventos em locais que já têm AVCB?", answer: "Sim, se o evento for utilizar estruturas temporárias (como palcos em cima do estacionamento) ou se for alterar as rotas e saídas de emergência originais do prédio." },
      { question: "A DRD2 emite a ART do evento?", answer: "Sim. Como empresa de engenharia registrada no CREA, emitimos a ART de responsabilidade técnica por todo o projeto e layout de segurança do evento." }
    ],
    icon: "/images/services/pet.svg"
  },
  "avcb-restaurante-sao-paulo": {
    slug: "avcb-restaurante-sao-paulo",
    title: "AVCB (Restaurantes e Bares)",
    category: "Aprovação",
    shortDescription: "AVCB para restaurantes, bares e estabelecimentos gastronômicos em São Paulo. Supressão em coifa, detecção de gás e aprovação junto ao Corpo de Bombeiros.",
    h1: "AVCB para Restaurante em São Paulo: Regularização para Cozinha Industrial, Bares e Estabelecimentos Gastronômicos",
    metaTitle: "AVCB para Restaurante em São Paulo | Engenheiro Especializado — DRD2 Engenharia",
    metaDescription: "AVCB para restaurantes, bares e estabelecimentos gastronômicos em São Paulo. Supressão em coifa, detecção de gás e aprovação junto ao Corpo de Bombeiros. DRD2 Engenharia.",
    pas: {
      problem: "Seu restaurante ou bar está operando com AVCB vencido ou sem sistema de supressão em coifa exigido?",
      agitation: "O setor gastronômico é o mais visado pela fiscalização. Sem AVCB, o alvará é cassado e o risco de incêndio em óleos e gorduras (Classe K) é uma ameaça real ao seu patrimônio.",
      solution: "Engenharia especializada em cozinhas industriais e casas noturnas. Regularizamos desde o sistema de supressão até o cálculo de lotação máxima."
    },
    content: [
      "Restaurantes têm exigências específicas como sistemas de supressão automática em coifas, extintores de Classe K e detecção de gás GLP/GN.",
      "Cuidamos de todo o processo técnico para que você foque no seu negócio enquanto nós garantimos seu alvará."
    ],
    faqs: [
      { question: "Vou abrir um restaurante em São Paulo. Quando preciso ter o AVCB?", answer: "O AVCB precisa estar válido antes da abertura — é condição para a concessão do alvará de funcionamento. O processo precisa ser iniciado com antecedência de pelo menos 90 dias da data prevista de abertura." },
      { question: "Meu restaurante tem fogão industrial mas não tem fritadeira. Preciso de supressão em coifa?", answer: "Depende do tipo e porte do equipamento. A DRD2 avalia no diagnóstico se o sistema de supressão em coifa é obrigatório para a sua configuração específica." },
      { question: "Bar pequeno sem cozinha industrial em São Paulo precisa de AVCB ou CLCB?", answer: "Para bares de menor porte sem cozinha industrial, o CLCB simplificado pode ser suficiente — com processo mais rápido e custo menor. A DRD2 faz o enquadramento correto gratuitamente." },
      { question: "Dark kitchen (cozinha de delivery) precisa de AVCB mesmo sem atendimento ao público?", answer: "Sim. A ausência de atendimento presencial não elimina as obrigações de segurança contra incêndio. A atividade de cozinha industrial, independentemente do modelo de negócio, gera risco que precisa ser coberto pelo AVCB." },
      { question: "Pode me embargar se o AVCB do restaurante estiver vencido há apenas 1 mês?", answer: "Sim. Qualquer período de irregularidade é suficiente para embargo em uma fiscalização. Não existe 'carência' depois do vencimento." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-para-creche-sao-paulo": {
    slug: "avcb-para-creche-sao-paulo",
    title: "AVCB (Creches/Escolas Infantis)",
    category: "Aprovação",
    shortDescription: "Regularize sua creche antes da fiscalização. Enquadramento E-5 sem retrabalho.",
    h1: "AVCB para Creche em São Paulo",
    metaTitle: "AVCB para Creche em São Paulo | DRD2 Engenharia — Diagnóstico técnico gratuito",
    metaDescription: "Mais de 500 creches regularizadas em SP. Saiba se seu processo é PTS ou PT, o impacto da área de 750 m² e como evitar Comunique-se. Diagnóstico técnico gratuito em até 24h.",
    pas: {
      problem: "O Corpo de Bombeiros pode interditar a sua creche sem prévio aviso?",
      agitation: "Sim! Interdição significa que as crianças precisam ser retiradas imediatamente, pais avisados no meio da jornada e seu CPF respondendo criminalmente por operar sem AVCB.",
      solution: "Regularize com a DRD2 Engenharia. Já tratamos o AVCB de mais de 500 creches em SP com laudos precisos para Ocupação E-5, evitando surpresas indesejadas e prejuízos operacionais."
    },
    content: [
      "No Estado de São Paulo, creches são classificadas como Ocupação E-5 — Educacional e Cultura Física. Isso determina as exigências técnicas, o tipo de processo e o nível da documentação perante o CBPMESP.",
      "Identificamos divergências da área real vs IPTU que causam indeferimentos massivos. Enquadramos corretamente seu caso, orientando sobre PTS ou PT de forma transparente para evitar longos \"Comunique-se\"."
    ],
    faqs: [
      { question: "Creche em casa precisa de AVCB?", answer: "Sim. Qualquer edificação com atividade de creche, independentemente do porte ou do tipo de imóvel, é classificada como Ocupação E-5 e está sujeita às exigências do CBPMESP." },
      { question: "Creche com menos de 750 m² precisa de Projeto Técnico completo?", answer: "Não necessariamente. Creches com área real de até 750 m² e sem fatores agravantes podem ser enquadradas em PTS — processo simplificado, sem exigência de cortes e fachadas. Acima de 750 m², o Projeto Técnico completo é obrigatório. A área considerada é a área real da edificação, não a do IPTU." },
      { question: "A área da minha creche no IPTU é menor do que a real. Isso é problema?", answer: "Sim, é um ponto crítico. Essa divergência precisa ser identificada e tratada antes do protocolo. Dependendo do impacto, pode alterar o tipo de processo exigido e gerar Comunique-se ou indeferimento. A DRD2 identifica esse problema no diagnóstico inicial — sem custo para o cliente." },
      { question: "O que é Comunique-se no processo do Corpo de Bombeiros?", answer: "É uma exigência formal emitida pelo CBPMESP durante a análise do processo, solicitando complementação de documentação ou adequação técnica. Precisa ser respondida dentro do prazo. A DRD2 Engenharia analisa e responde Comunique-se para creches." },
      { question: "Creche pequena pode fazer CLCB em vez de AVCB?", answer: "Depende da análise técnica do caso concreto. O enquadramento correto é uma conclusão técnica baseada nas características da edificação — não uma escolha do proprietário. A DRD2 faz essa avaliação gratuitamente no diagnóstico inicial." },
      { question: "AVCB de creche tem prazo de validade?", answer: "Sim. O prazo varia conforme as medidas de proteção instaladas, podendo ser de 1 a 5 anos. A renovação deve ser iniciada antes do vencimento." },
      { question: "O Corpo de Bombeiros pode interditar minha creche sem aviso?", answer: "Sim. O CBPMESP e as prefeituras têm poder de polícia para interditar edificações em situação irregular, sem necessidade de notificação prévia." },
      { question: "A DRD2 atende minha creche fora de São Paulo capital?", answer: "Sim. Atendemos todo o Estado de São Paulo, incluindo Grande SP, ABC Paulista, Campinas, Sorocaba, Santos, São José dos Campos, Ribeirão Preto e demais municípios." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-para-casa-de-repouso-sao-paulo": {
    slug: "avcb-para-casa-de-repouso-sao-paulo",
    title: "AVCB (Casa de Repouso / Lar de Idosos)",
    category: "Aprovação",
    shortDescription: "Regularização de ocupação H-3 (Saúde). Proteção total para residentes com mobilidade reduzida.",
    h1: "AVCB para Casa de Repouso em São Paulo",
    metaTitle: "AVCB para Casa de Repouso em São Paulo | DRD2 Engenharia — Diagnóstico técnico gratuito",
    metaDescription: "Casa de repouso exige AVCB, brigada de incêndio e gerenciamento de risco — independentemente do tamanho. DRD2 Engenharia regulariza seu estabelecimento com segurança técnica. Diagnóstico técnico gratuito em até 24h.",
    pas: {
      problem: "Um incêndio em uma casa de repouso pode ser uma tragédia irreversível.",
      agitation: "Ocupantes com mobilidade reduzida ou acamados dependem integralmente da sua regularização. Sem AVCB, o risco é de interdição, perda de alvará e responsabilização criminal dos proprietários.",
      solution: "A DRD2 Engenharia é especialista em ocupação H-3. Gerenciamos seu AVCB, treinamos sua brigada e elaboramos seu plano de gerenciamento de risco com 15 anos de expertise técnica."
    },
    content: [
      "No Estado de São Paulo, casas de repouso são classificadas como Ocupação H-3 — Serviços de Saúde e Institucional. Essa classificação exige Projeto Técnico completo independentemente da área construída.",
      "A vulnerabilidade dos ocupantes é o fator determinante. A DRD2 identifica divergências de área e adequa sua brigada conforme a IT-17 para garantir a aprovação sem atrasos."
    ],
    faqs: [
      { question: "Casa de repouso pequena precisa de AVCB?", answer: "Sim. Casas de repouso são classificadas como Ocupação H-3 e exigem AVCB independentemente do tamanho da edificação. A vulnerabilidade dos residentes é fator de agravamento de risco que torna o AVCB obrigatório em qualquer situação." },
      { question: "O treinamento de brigada é realmente obrigatório?", answer: "Sim. A brigada de incêndio é exigência da IT nº 17 do CBPMESP para casas de repouso. Sem brigada formada e documentada, o estabelecimento é reprovado na vistoria do Corpo de Bombeiros, independentemente de todas as outras medidas estarem corretas." },
      { question: "O que é gerenciamento de risco e quando é exigido?", answer: "Gerenciamento de risco é o conjunto de procedimentos que identifica, mapeia e estabelece planos de ação para os riscos de incêndio presentes na edificação. Para casas de repouso, é uma exigência que varia conforme o porte e as características do estabelecimento. A DRD2 avalia a necessidade no diagnóstico inicial." },
      { question: "Minha casa de repouso funciona em uma casa adaptada. Isso é problema?", answer: "Pode ser. Edificações adaptadas frequentemente apresentam divergências de área, ausência de projeto aprovado para uso institucional e inadequações nas saídas de emergência. Essas situações precisam ser identificadas e tratadas antes do protocolo no CBPMESP." },
      { question: "O que é Comunique-se e como evitar?", answer: "Comunique-se é uma exigência formal do CBPMESP solicitando complementação de documentação ou adequação técnica durante a análise do processo. A melhor forma de evitar é com diagnóstico técnico completo antes do protocolo — que é exatamente o que a DRD2 Engenharia realiza gratuitamente." },
      { question: "AVCB de casa de repouso tem prazo de validade?", answer: "Sim. O prazo varia conforme as medidas de proteção instaladas, podendo ser de 1 a 5 anos. A renovação deve ser iniciada antes do vencimento para evitar irregularidade." },
      { question: "O Corpo de Bombeiros pode interditar minha casa de repouso sem aviso?", answer: "Sim. O CBPMESP e os órgãos de vigilância sanitária têm poder de polícia para interditar estabelecimentos em situação irregular, sem necessidade de notificação prévia." },
      { question: "A DRD2 atende fora de São Paulo capital?", answer: "Sim. Atendemos todo o Estado de São Paulo, incluindo Grande SP, ABC Paulista, Campinas, Sorocaba, Santos, São José dos Campos, Ribeirão Preto e demais municípios." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-para-academia-sao-paulo": {
    slug: "avcb-para-academia-sao-paulo",
    title: "AVCB (Academias)",
    category: "Aprovação",
    shortDescription: "Regularização de centros fitness, musculação, crossfit e artes marciais em SP. (Grupo E-6).",
    h1: "AVCB para Academia em São Paulo: Regularização Completa",
    metaTitle: "AVCB para Academia em São Paulo | DRD2 Engenharia",
    metaDescription: "A DRD2 Engenharia é especialista em AVCB para academias em São Paulo e Grande SP. Projeto, adequação e aprovação no Corpo de Bombeiros com agilidade. Diagnóstico técnico gratuito — fale agora.",
    pas: {
      problem: "Sua academia corre o risco de ser interditada hoje?",
      agitation: "Academias concentram grande volume de alunos em espaços com equipamentos pesados e música alta, o que dificulta a percepção de incêndios e rotas de fuga. Operar sem AVCB é perigoso para os alunos e gera risco de interdição imediata.",
      solution: "A DRD2 Engenharia conhece as exigências específicas para o Grupo E-6. Regularizamos sua academia do projeto à vistoria final, garantindo sua licença sem dor de cabeça."
    },
    content: [
      "Academias de ginástica, musculação, crossfit e lutas são classificados pela IT-02 como Grupo E — Educacional e Cultura Física (E-6).",
      "Focamos no dimensionamento de saídas para horários de pico e no treinamento da equipe de instrutores (brigada) para garantir a aprovação célere no CBPMESP."
    ],
    faqs: [
      {
        question: "Toda academia precisa de AVCB em São Paulo?",
        answer: "Sim. Toda academia de ginástica, musculação, artes marciais ou atividade física no Estado de São Paulo está obrigada a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP."
      },
      {
        question: "Academia pequena pode usar CLCB em vez de AVCB?",
        answer: "Sim. Academias de menor porte e baixo risco podem se enquadrar no CLCB, modalidade simplificada mais rápida e econômica. A DRD2 faz o enquadramento correto gratuitamente antes de iniciar qualquer processo."
      },
      {
        question: "Academia em shopping precisa de AVCB próprio?",
        answer: "Sim. Mesmo que o shopping tenha AVCB do condomínio, cada lojista precisa do seu próprio certificado individual junto ao Corpo de Bombeiros. A DRD2 tem experiência com regularização de academias em ambientes de uso misto."
      },
      {
        question: "O que acontece se a academia for fiscalizada sem AVCB?",
        answer: "A academia pode ser autuada, multada e interditada imediatamente pelo Corpo de Bombeiros. Além disso, a falta do AVCB invalida o alvará de funcionamento e gera responsabilidade civil ao proprietário em caso de acidente envolvendo alunos ou funcionários."
      },
      {
        question: "Quanto custa o AVCB para academia?",
        answer: "O custo varia conforme a área da academia, os sistemas a adequar e se o caso é AVCB ou CLCB. A DRD2 oferece diagnóstico técnico gratuito com orçamento detalhado e sem compromisso para cada caso."
      }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-hoteis-pousadas-sao-paulo": {
    slug: "avcb-hoteis-pousadas-sao-paulo",
    title: "AVCB (Hotéis e Pousadas)",
    category: "Aprovação",
    shortDescription: "Regularização de hotéis, motéis e pousadas (Grupo B). Segurança para hóspedes 24h.",
    h1: "AVCB para Hotéis e Pousadas em São Paulo — Regularização Completa",
    metaTitle: "AVCB para Hotéis e Pousadas em São Paulo",
    metaDescription: "A DRD2 Engenharia é especialista em AVCB para hotéis e pousadas em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com segurança normativa e agilidade. Diagnóstico técnico gratuito.",
    pas: {
      problem: "Seu hotel ou pousada está operando sem AVCB válido?",
      agitation: "Hotéis são ocupações de uso noturno com público que desconhece as rotas de fuga. A falta do AVCB expõe hóspedes a riscos letais e o hotel a interdição imediata e perda de seguro.",
      solution: "A DRD2 Engenharia domina as Instruções Técnicas para o Grupo B. Regularizamos seu estabelecimento do projeto à vistoria, garantindo segurança jurídica e proteção aos hóspedes."
    },
    content: [
      "Hotéis, motéis e pousadas são classificados como Grupo B (Serviço de Hospedagem) pela IT-02 do CBPMESP.",
      "Exigimos atenção redobrada em iluminação de emergência, sinalização de rotas e compartimentação de fumaça, pontos críticos em vistorias de ocupação noturna."
    ],
    faqs: [
      { question: "Todo hotel precisa de AVCB em São Paulo?", answer: "Sim. Todo estabelecimento de hospedagem no Estado de São Paulo está obrigado a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP." },
      { question: "Pousada pequena também precisa de AVCB?", answer: "Sim. Pousadas menores podem se enquadrar no CLCB, modalidade simplificada para edificações de menor porte e risco. A DRD2 identifica o enquadramento correto sem custo adicional." },
      { question: "O AVCB é exigido para renovar o alvará do hotel?", answer: "Sim. O AVCB é documento obrigatório para obtenção e renovação do alvará de funcionamento de estabelecimentos hoteleiros em São Paulo." },
      { question: "Plataformas como Booking e Airbnb exigem AVCB?", answer: "Sim. Operadoras de turismo, agências e plataformas de reserva frequentemente exigem o AVCB como documento comprobatório de segurança. Seguradoras também podem negar cobertura sem o certificado válido." },
      { question: "Quanto tempo leva para regularizar o AVCB de um hotel?", answer: "Em média, o processo leva de 90 a 180 dias a partir do protocolo. Hotéis com múltiplos sistemas a adequar podem demandar prazo adicional — por isso o diagnóstico prévio é essencial para planejamento." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-motel-sao-paulo": {
    slug: "avcb-motel-sao-paulo",
    title: "AVCB (Motéis)",
    category: "Aprovação",
    shortDescription: "Regularização de motéis em São Paulo. Foco em privacidade e segurança noturna (Grupo B).",
    h1: "AVCB para Motel em São Paulo — Regularização Completa",
    metaTitle: "AVCB para Motel em São Paulo | DRD2 Engenharia",
    metaDescription: "A DRD2 Engenharia é especialista em AVCB para motéis em São Paulo. Regularização completa com projeto, adequação e aprovação no Corpo de Bombeiros. Diagnóstico técnico gratuito — fale agora.",
    pas: {
      problem: "Seu motel possui AVCB válido para operar com segurança?",
      agitation: "Motéis possuem público anônimo e rotativo em ambiente de repouso, o que aumenta drasticamente o risco em caso de sinistro. A falta de AVCB expõe o proprietário a interdições e graves responsabilidades civis.",
      solution: "A DRD2 Engenharia domina as exigências da Divisão H-2 (Hotéis e Assemelhados). Regularizamos seu estabelecimento com total discrição, do diagnóstico gratuito à emissão do certificado."
    },
    content: [
      "Motéis são classificados como Divisão H-2 pela IT-02 do CBPMESP.",
      "Foco em sinalização de suítes, alarme de incêndio precoce e rotas de fuga desobstruídas para garantir a segurança no uso noturno."
    ],
    faqs: [
      { question: "Motel precisa de AVCB em São Paulo?", answer: "Sim. Todo estabelecimento de hospedagem, incluindo motéis, está obrigado a obter AVCB ou CLCB junto ao Corpo de Bombeiros do Estado de São Paulo, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP." },
      { question: "Qual o enquadramento do motel nas normas do Corpo de Bombeiros?", answer: "Motéis são enquadrados na Divisão H-2 da IT-02 do CBPMESP — Hotéis e Assemelhados. Os sistemas obrigatórios são definidos conforme a área total construída, altura da edificação e número de unidades habitacionais." },
      { question: "Motel pequeno pode usar CLCB em vez de AVCB?", answer: "Sim. Motéis de menor porte e baixo risco podem se enquadrar no CLCB, modalidade simplificada do Corpo de Bombeiros. A DRD2 realiza o enquadramento correto sem custo adicional." },
      { question: "O Corpo de Bombeiros faz fiscalização surpresa em motéis?", answer: "Sim. O CBPMESP realiza vistorias periódicas e fiscalizações não programadas em estabelecimentos de hospedagem, com poder de autuar e interditar imediatamente em caso de irregularidade." },
      { question: "Quanto tempo leva para regularizar o AVCB de um motel?", answer: "Em média, o processo leva de 60 a 150 dias a partir do protocolo, dependendo do estágio de adequação do estabelecimento e da demanda do CBPMESP." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-pousada-sao-paulo": {
    slug: "avcb-pousada-sao-paulo",
    title: "AVCB (Pousadas)",
    category: "Aprovação",
    shortDescription: "Regularização de pousadas e hostels em SP. Apoio técnico para o CLCB (Grupo B).",
    h1: "AVCB para Pousada em São Paulo: Regularização Completa",
    metaTitle: "AVCB para Pousada em São Paulo | DRD2 Engenharia",
    metaDescription: "Precisa de AVCB ou CLCB para sua pousada em SP? A DRD2 Engenharia oferece diagnóstico gratuito e regularização rápida para o setor de turismo (Grupo B).",
    pas: {
      problem: "Sua pousada está perdendo reservas por falta de segurança legal?",
      agitation: "Plataformas como Booking exigem o AVCB, e a falta dele bloqueia seu alvará. Além disso, pousadas familiares sem prevenção são armadilhas letais em caso de sinistro.",
      solution: "Encontramos o caminho mais econômico para sua pousada, priorizando o CLCB quando possível e garantindo total conformidade com a IT-02 (Grupo B)."
    },
    content: [
      "Pousadas menores frequentemente se enquadram no licenciamento simplificado (CLCB).",
      "Garantimos que a sinalização fotoluminescente e os extintores estejam corretos, protegendo seus hóspedes com o menor investimento possível."
    ],
    faqs: [
      { question: "Pousada pequena precisa de AVCB em São Paulo?", answer: "Sim. Toda pousada no Estado de São Paulo está obrigada a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024. Pousadas menores geralmente se enquadram no CLCB, que é um processo mais simples e econômico." },
      { question: "Qual a diferença entre AVCB e CLCB para pousada?", answer: "O AVCB é exigido para edificações de maior porte ou risco elevado. O CLCB é a modalidade simplificada para edificações menores e de baixo risco — processo mais rápido e mais barato." },
      { question: "Airbnb e Booking exigem AVCB de pousada?", answer: "Sim. Plataformas de hospedagem e operadoras de turismo frequentemente exigem comprovação de regularidade junto ao Corpo de Bombeiros." },
      { question: "Pousada pode ser interditada sem AVCB?", answer: "Sim. O Corpo de Bombeiros e a Vigilância Sanitária têm poder de interditar estabelecimentos de hospedagem sem AVCB ou CLCB válido." },
      { question: "Quanto custa regularizar o AVCB de uma pousada?", answer: "O custo varia conforme o tamanho da pousada e se o caso é AVCB ou CLCB. A DRD2 oferece diagnóstico gratuito com orçamento detalhado." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-para-igreja-sao-paulo": {
    slug: "avcb-para-igreja-sao-paulo",
    title: "AVCB (Igrejas)",
    category: "Aprovação",
    shortDescription: "Regularização de igrejas, templos e casas de culto em SP. Foco na segurança de fiéis (Grupo F-6).",
    h1: "AVCB para Igreja em São Paulo: Como Regularizar em 2026",
    metaTitle: "AVCB para Igreja em SP: Como Regularizar em 2026 | DRD2 Engenharia",
    metaDescription: "Guia técnico completo sobre AVCB para igrejas e templos em São Paulo em 2026. Exigências do CBPMESP, sistemas obrigatórios, os 3 erros que reprovam na vistoria e como regularizar sem interdição.",
    pas: {
      problem: "Sua igreja corre o risco de interdição durante o culto?",
      agitation: "Igrejas têm grande concentração de público diverso. Sem AVCB, você arrisca a segurança dos fiéis, o alvará de funcionamento e responde criminalmente por qualquer incidente.",
      solution: "A DRD2 Engenharia é especialista na IT-02 (Grupo F-6). Regularizamos seu templo com agilidade, do diagnóstico gratuito à vistoria final, sem interrupções nos seus serviços."
    },
    content: [
      "Igrejas são enquadrados pelo CBPMESP no Grupo F - Locais de Reunião de Público (Divisão F-6).",
      "Trabalhamos com foco total no dimensionamento de saídas e treinamento de brigada para grandes públicos atendendo ao Decreto 69.118/2024."
    ],
    faqs: [
      { question: "Toda igreja precisa de AVCB em São Paulo?", answer: "Sim. Toda edificação religiosa com uso coletivo no Estado de São Paulo está obrigada a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP. Templos de menor porte podem se enquadrar no CLCB — processo mais simples e econômico." },
      { question: "Igreja pequena pode usar CLCB em vez de AVCB?", answer: "Sim. Igrejas de menor porte e com baixa capacidade de lotação geralmente se enquadram no CLCB. A DRD2 faz o enquadramento correto gratuitamente antes de iniciar qualquer trabalho, garantindo o caminho mais rápido e econômico para cada caso." },
      { question: "Igreja em imóvel alugado precisa de AVCB?", answer: "Sim. A responsabilidade pela regularização recai sobre o uso da edificação — não sobre a propriedade do imóvel. Igrejas em imóveis alugados precisam de AVCB ou CLCB, e a liderança religiosa responde civil e criminalmente em caso de sinistro com fiéis, independentemente de quem é o proprietário." },
      { question: "O Corpo de Bombeiros pode interditar uma igreja durante o culto?", answer: "Sim. O CBPMESP tem poder de interditar edificações sem certificado válido a qualquer momento, inclusive durante eventos com grande público. A fiscalização não é agendada — e uma interdição durante um culto gera impacto jurídico, financeiro e reputacional grave para a liderança." },
      { question: "Igreja com escola ou salão de festas precisa de projeto diferente?", answer: "Sim. Edificações com usos múltiplos têm enquadramento que considera todas as ocupações presentes, o que pode elevar o processo de CLCB para AVCB e exigir sistemas adicionais. A DRD2 analisa o caso completo no diagnóstico gratuito, sem custo adicional." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-para-escola-sao-paulo": {
    slug: "avcb-para-escola-sao-paulo",
    title: "AVCB (Escolas e Faculdades)",
    category: "Aprovação",
    shortDescription: "Regularização de escolas, faculdades e creches em SP. Segurança máxima para alunos (Grupo E).",
    h1: "AVCB para Escolas e Faculdades em São Paulo: Regularização Completa",
    metaTitle: "AVCB para Escolas e Faculdades em São Paulo | DRD2 Engenharia",
    metaDescription: "Especialistas em AVCB para escolas e faculdades em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com agilidade e segurança normativa. Diagnóstico técnico gratuito — fale com a DRD2.",
    pas: {
      problem: "Sua escola está operando com o AVCB vencido ou inexistente?",
      agitation: "Escolas têm público vulnerável e grande concentração de pessoas. Sem AVCB, você arrisca a segurança de alunos e funcionários, o alvará de funcionamento e responde juridicamente por qualquer sinistro.",
      solution: "A DRD2 Engenharia domina a IT-02 (Grupo E). Regularizamos sua unidade de ensino com diagnóstico gratuito, projeto técnico completo e garantia de aprovação sem travar suas aulas."
    },
    content: [
      "Escolas são classificadas pelo CBPMESP no Grupo E - Educacional e Cultura Física.",
      "Atendemos desde educação infantil até universidades, garantindo conformidade com o Decreto 69.118/2024 e foco em rotas de fuga."
    ],
    faqs: [
      { question: "Toda escola precisa de AVCB em São Paulo?", answer: "Sim. Toda edificação de uso educacional no Estado de São Paulo está obrigada a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP. O tipo de certificado depende da área e das características da edificação." },
      { question: "Qual a diferença entre AVCB e CLCB para escolas?", answer: "O AVCB é exigido para edificações de maior porte ou risco elevado, enquanto o CLCB é uma modalidade simplificada destinada a edificações menores e de baixo risco. A DRD2 faz o enquadramento correto sem custo adicional." },
      { question: "Quanto tempo leva para tirar o AVCB de uma escola?", answer: "O prazo varia conforme o estágio de adequação da edificação e a demanda do CBPMESP. Em média, o processo leva de 60 a 180 dias a partir do protocolo. Escolas com pendências de adequação podem levar mais tempo — por isso o diagnóstico prévio é fundamental." },
      { question: "O que acontece se a escola for vistoriada sem AVCB?", answer: "A escola pode ser autuada, multada e interditada pelo Corpo de Bombeiros ou pela Vigilância Sanitária. Além disso, a falta do AVCB pode invalidar o alvará de funcionamento e gerar responsabilidade civil e criminal ao proprietário em caso de sinistro." },
      { question: "A DRD2 atende escolas particulares e públicas?", answer: "Sim. Atendemos escolas privadas, públicas, creches, universidades e cursos livres em toda a Grande São Paulo, com soluções técnicas e orçamento adequados ao perfil de cada cliente." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-hostel-sao-paulo": {
    slug: "avcb-hostel-sao-paulo",
    title: "AVCB (Hostels)",
    category: "Aprovação",
    shortDescription: "Regularização de hostels e albergues em SP. Segurança para hospedagem coletiva (Grupo B).",
    h1: "AVCB para Hostel em São Paulo — Regularização Completa",
    metaTitle: "AVCB para Hostel em São Paulo | DRD2 Engenharia",
    metaDescription: "A DRD2 Engenharia é especialista em AVCB para hostels em São Paulo. Regularização completa com projeto, adequação e aprovação no Corpo de Bombeiros. Diagnóstico técnico gratuito — fale agora.",
    pas: {
      problem: "Seu hostel corre o risco de interdição e suspensão em plataformas como Booking?",
      agitation: "Hostels possuem dormitórios coletivos com beliches e público internacional rotativo. Sem AVCB, além da interdição, seu estabelecimento é banido de plataformas de reserva e você assume riscos jurídicos imensos.",
      solution: "A DRD2 Engenharia conhece as ITs para hostels e albergues. Regularizamos seu estabelecimento com diagnóstico gratuito e garantia de conformidade plena para você crescer com segurança."
    },
    content: [
      "Hostels são enquadrados como Divisão H-2 (Hotéis e Assemelhados) pela IT-02 do CBPMESP.",
      "Focamos em sinalização visual acessível, detecção automática em dormitórios e rotas de fuga para beliches, garantindo proteção total."
    ],
    faqs: [
      { question: "Hostel precisa de AVCB em São Paulo?", answer: "Sim. Todo estabelecimento de hospedagem, incluindo hostels e albergues, está obrigado a obter AVCB ou CLCB junto ao Corpo de Bombeiros do Estado de São Paulo, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP." },
      { question: "Hostel pequeno pode usar CLCB em vez de AVCB?", answer: "Sim. Hostels de menor porte e baixo risco podem se enquadrar no CLCB — processo mais simples, rápido e econômico. A DRD2 realiza o enquadramento correto gratuitamente." },
      { question: "Booking e Hostelworld exigem AVCB do hostel?", answer: "Sim. Plataformas internacionais de reserva frequentemente exigem comprovação de regularidade. Hostels sem AVCB válido correm risco de suspensão de conta e perda imediata de receita." },
      { question: "Hostel em imóvel histórico ou tombado pode tirar AVCB?", answer: "Sim, mas exige projeto técnico especializado que considere as restrições patrimoniais. A DRD2 tem experiência em regularizar edificações com características especiais sem descaracterizá-las." },
      { question: "Quanto tempo leva para regularizar o AVCB de um hostel?", answer: "Em média de 60 a 150 dias a partir do protocolo, dependendo do estágio de adequação e da demanda do CBPMESP. O diagnóstico técnico gratuito permite estimar o prazo real." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-supermercado-sao-paulo": {
    slug: "avcb-supermercado-sao-paulo",
    title: "AVCB (Supermercados)",
    category: "Aprovação",
    shortDescription: "Regularização de supermercados, mercados e minimercados em SP. Segurança para grandes fluxos (Grupo C/D).",
    h1: "AVCB para Supermercado em São Paulo: Regularização Completa",
    metaTitle: "AVCB para Supermercado em São Paulo | DRD2 Engenharia",
    metaDescription: "A DRD2 Engenharia é especialista em AVCB para supermercados em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com agilidade e segurança normativa. Diagnóstico técnico gratuito.",
    pas: {
      problem: "Seu supermercado está operando sem o AVCB válido?",
      agitation: "Supermercados têm alto fluxo de público, carga combustível elevada e sistemas complexos. Sem AVCB, o estabelecimento está sujeito a interdição imediata, multas pesadas e perda de licença de funcionamento.",
      solution: "A DRD2 Engenharia domina as exigências da IT-02 para supermercados. Regularizamos sua unidade com precisão normativa, do diagnóstico gratuito à vistoria final."
    },
    content: [
      "Supermercados, mercados e minimercados são enquadrados pelo CBPMESP nos Grupos C (Comercial Varejista) ou D (Serviços Profissionais).",
      "Conhecemos cada detalhe das exigências para áreas de vendas, depósitos, padarias e sistemas elétricos intensivos, garantindo a aprovação ágil."
    ],
    faqs: [
      { question: "Todo supermercado precisa de AVCB em São Paulo?", answer: "Sim. Todo supermercado, mercado ou minimercado no Estado de São Paulo está obrigado a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP. O tipo de certificado depende da área total e das características da edificação." },
      { question: "Minimercado de bairro precisa de AVCB ou CLCB?", answer: "Depende da área total do estabelecimento. Minimercados menores geralmente se enquadram no CLCB — processo mais simples, rápido e econômico. Acima de determinada metragem ou com uso de GLP, o AVCB com projeto técnico completo é obrigatório. A DRD2 faz o enquadramento correto gratuitamente." },
      { question: "Supermercado com padaria precisa de extintor Classe K?", answer: "Sim. A área de padaria com fritadeiras e fornos industriais exige obrigatóriamente extintor Classe K com agente saponificante úmido, conforme IT-21 e ABNT NBR 12693. O uso de extintor PQS ou água em fogo de óleo provoca explosão do líquido quente — risco gravíssimo para funcionários e clientes." },
      { question: "A VISA pode interditar supermercado por falta de AVCB?", answer: "Sim. Em 2026 a Vigilância Sanitária passou a cruzar dados com o CBPMESP e está bloqueando a renovação do CMVS de supermercados sem protocolo ativo de AVCB ou CLCB. Sem o CMVS, o supermercado não pode operar legalmente." },
      { question: "Quanto tempo leva para regularizar o AVCB de um supermercado?", answer: "Em média de 60 a 150 dias a partir do protocolo, dependendo da área, dos sistemas a adequar e da demanda do CBPMESP. Supermercados com padaria ou depósito de grande volume podem demandar prazo adicional. O diagnóstico técnico gratuito da DRD2 permite estimar o prazo real antes de iniciar o processo." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-bares-restaurantes-sao-paulo": {
    slug: "avcb-bares-restaurantes-sao-paulo",
    title: "AVCB (Bares & Adegas)",
    category: "Aprovação",
    shortDescription: "Regularização de bares, pubs e adegas em SP. Segurança para locais de reunião de público (Grupo B/F).",
    h1: "AVCB para Bar e Adega em São Paulo: Regularização Completa",
    metaTitle: "AVCB para Bares e Restaurantes em São Paulo",
    metaDescription: "A DRD2 Engenharia é especialista em AVCB para bares e adegas em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com agilidade e segurança normativa. Diagnóstico técnico gratuito.",
    pas: {
      problem: "Seu bar ou adega corre o risco de interdição imediata?",
      agitation: "Bebidas alcoólicas são líquidos inflamáveis. Ambientes com grande estoque de álcool, público concentrado e música alta representam risco elevado. Sem AVCB, você arrisca a segurança dos clientes e a continuidade do negócio.",
      solution: "A DRD2 Engenharia domina cada detalhe normativo para bares e adegas. Entregamos seu AVCB com precisão e agilidade, do diagnóstico gratuito à aprovação final."
    },
    content: [
      "Bares e adegas são enquadrados pelo CBPMESP nos Grupos B (Hospedagem e Alimentação) ou F (Reunião de Público).",
      "Focamos em compartimentação de estoque de inflamáveis, dimensionamento de saídas para lotação máxima e controle de materiais de acabamento conforme IT-10."
    ],
    faqs: [
      { question: "Todo bar precisa de AVCB em São Paulo?", answer: "Sim. Todo bar, pub ou adega com público presente no Estado de São Paulo está obrigado a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP. A ausência do certificado sujeita o estabelecimento a multa e interdição imediata." },
      { question: "Bar pequeno pode usar CLCB em vez de AVCB?", answer: "Sim. Bares de menor porte e baixa lotação podem se enquadrar no CLCB — processo mais simples, rápido e econômico. Bares com música ao vivo ou capacidade acima do limite simplificado exigem AVCB. A DRD2 faz o enquadramento correto gratuitamente." },
      { question: "Adega sem espaço para clientes precisa de AVCB?", answer: "Depende da área e do tipo de operação. Adegas que funcionam exclusivamente como loja podem se enquadrar no CLCB. Adegas com espaço de degustação ou eventos periódicos têm enquadramento diferente. A DRD2 analisa o caso completo no diagnóstico gratuito." },
      { question: "Bar com música ao vivo tem exigências diferentes?", answer: "Sim. Bares com música ao vivo, shows ou DJ sets são enquadrados como Locais de Reunião de Público — Grupo F da IT-02 — com exigências mais rigorosas de saídas de emergência, controle de lotação e brigada treinada. A DRD2 identifica esse enquadramento antes de iniciar o processo." },
      { question: "O Corpo de Bombeiros pode interditar bar durante evento com público?", answer: "Sim. O CBPMESP tem poder de interditar estabelecimentos sem AVCB válido a qualquer momento — inclusive durante eventos com público presente. Uma interdição em noite de show gera prejuízo financeiro imediato, dano à reputação e responsabilidade civil do proprietário perante os clientes presentes." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-para-padaria-sao-paulo": {
    slug: "avcb-para-padaria-sao-paulo",
    title: "AVCB (Padarias)",
    category: "Aprovação",
    shortDescription: "Regularização de padarias e panificadoras em SP. Grupo C-2 — supressão em coifa, GLP e Extintor Classe K.",
    h1: "AVCB para Padaria em São Paulo",
    metaTitle: "AVCB para Padaria em São Paulo | DRD2 Engenharia",
    metaDescription: "AVCB para padaria em SP — Grupo C-2, supressão em coifa, GLP regularizado, Extintor Classe K e resposta a Comunique-se incluída. Diagnóstico técnico gratuito.",
    pas: {
      problem: "Sua padaria opera com forno, coifa e GLP sem AVCB válido? O risco de embargo, interdição e lacre é real e imediato.",
      agitation: "A Vigilância Sanitária cruzou dados com o CBPMESP em 2026. Padaria sem protocolo ativo de AVCB tem o CMVS bloqueado — e não pode operar legalmente.",
      solution: "A DRD2 Engenharia atua do projeto à instalação, com resposta a Comunique-se incluída sem custo adicional. Regularize sua padaria com quem executa, não apenas documenta."
    },
    content: [
      "Padarias são enquadradas pelo CBPMESP como Grupo C-2 — Comércio Varejista de Produtos Alimentícios — com exigências técnicas específicas para área de produção, coifas e sistemas de GLP.",
      "O AVCB tem validade de 3 anos conforme o Decreto Estadual nº 69.118/2024. Estabelecimentos com AVCB vencido estão sujeitos a interdição pelo Corpo de Bombeiros e bloqueio do CMVS pela Vigilância Sanitária.",
      "A DRD2 Engenharia executa do projeto à instalação dos sistemas, acompanha o protocolo no CBPMESP e responde a Comunique-se sem cobrar adicional."
    ],
    faqs: [
      { question: "Padaria pequena de bairro precisa de AVCB em São Paulo?", answer: "Toda padaria ou panificadora no Estado de São Paulo está obrigada a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP. Estabelecimentos menores geralmente se enquadram no CLCB — processo mais simples e econômico. A DRD2 identifica o enquadramento correto gratuitamente na vistoria inicial." },
      { question: "A supressão na coifa é obrigatória em toda padaria?", answer: "É obrigatória em padarias com fritadeiras industriais, fornos e equipamentos que geram risco de fogo em gordura, conforme a ABNT NBR 14.880. Padarias que utilizam apenas fornos elétricos sem produção de gordura têm análise diferenciada. A DRD2 verifica a obrigatoriedade na vistoria presencial antes de qualquer investimento." },
      { question: "Qual extintor é obrigatório na área de produção da padaria?", answer: "O Extintor Classe K — com agente saponificante úmido — é obrigatório na área de cocção com fritadeiras industriais, conforme IT-21 e ABNT NBR 12693. O uso de PQS ou água em fogo de óleo quente provoca explosão do líquido, colocando em risco funcionários e clientes." },
      { question: "Quanto tempo leva para regularizar o AVCB de uma padaria em São Paulo?", answer: "Em média entre 45 e 120 dias a partir do protocolo no CBPMESP, dependendo do estágio de adequação dos sistemas e da demanda do Corpo de Bombeiros. Padarias que precisam instalar supressão na coifa ou regularizar a central de GLP devem considerar prazo adicional para as obras. O diagnóstico gratuito da DRD2 estima o prazo real antes de iniciar o processo." },
      { question: "A VISA pode interditar padaria por falta de AVCB?", answer: "Sim. Em 2026 a Vigilância Sanitária passou a cruzar dados com o CBPMESP e está bloqueando a renovação do CMVS de padarias sem protocolo ativo de AVCB ou CLCB. Sem o CMVS, sua padaria não pode operar legalmente — e a interdição pode vir pela VISA antes mesmo de uma vistoria do Bombeiro." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-farmacia-drogaria-sao-paulo": {
    slug: "avcb-farmacia-drogaria-sao-paulo",
    title: "AVCB (Farmácias e Drogarias)",
    category: "Aprovação",
    shortDescription: "Regularização de farmácias e drogarias em SP. Foco em inflamáveis e Vigilância Sanitária.",
    h1: "AVCB para Farmácia e Drogaria em São Paulo — Regularização Completa",
    metaTitle: "AVCB para Farmácia e Drogaria em São Paulo | DRD2 Engenharia",
    metaDescription: "AVCB para farmácia e drogaria em SP — Grupo C-2, aerossóis, farmácia de manipulação e CMVS. Resposta a Comunique-se incluída. Diagnóstico técnico gratuito.",
    pas: {
      problem: "Sua farmácia corre o risco de interdição pela Vigilância Sanitária por falta de AVCB?",
      agitation: "Produtos inflamáveis, aerossóis e químicos exigem cuidados rigorosos. Sem AVCB válido, sua renovação do CMVS é bloqueada, impedindo o funcionamento legal do estabelecimento.",
      solution: "A DRD2 Engenharia regulariza sua farmácia com foco total na segurança química e nas exigências cruzadas entre CBPMESP e VISA."
    },
    content: [
      "Farmácias e drogarias são estabelecimentos com grande volume de produtos químicos, medicamentos inflamáveis e aerossóis pressurizados em áreas compactas.",
      "O Auto de Vistoria do Corpo de Bombeiros (AVCB) é requisito obrigatório para a renovação do alvará e da licença sanitária (CMVS) em 2026.",
      "Trabalhamos com o enquadramento IT-02 (Grupo C ou D), garantindo o caminho mais rápido para a aprovação."
    ],
    faqs: [
      { question: "Toda farmácia precisa de AVCB em São Paulo?", answer: "Sim. Toda farmácia e drogaria no Estado de São Paulo está obrigada a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP. A ausência do certificado sujeita o estabelecimento a multa, interdição e bloqueio do CMVS pela Vigilância Sanitária." },
      { question: "Farmácia pequena pode usar CLCB em vez de AVCB?", answer: "Sim. Farmácias de menor porte e baixo volume de produtos inflamáveis podem se enquadrar no CLCB. Farmácias de manipulação geralmente exigem AVCB em razão do uso de solventes e equipamentos de produção. A DRD2 faz o enquadramento correto gratuitamente." },
      { question: "Farmácia de manipulação tem exigências especiais?", answer: "Sim. O uso de solventes orgânicos, álcool em grande volume e equipamentos de aquecimento eleva o enquadramento de risco e exige sistemas adicionais específicos como compartimentação e ventilação forçada." },
      { question: "A VISA pode bloquear a farmácia por falta de AVCB?", answer: "Sim. Em 2026 a Vigilância Sanitária passou a cruzar dados com o CBPMESP e está bloqueando a renovação do CMVS de farmácias sem protocolo ativo de AVCB ou CLCB." },
      { question: "Quanto tempo leva para regularizar o AVCB de uma farmácia?", answer: "Em média de 45 a 90 dias a partir do protocolo para farmácias comuns, e de 60 a 150 dias para farmácias de manipulação. O diagnóstico técnico gratuito estimará o prazo real." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-para-drogaria-sao-paulo": {
    slug: "avcb-para-drogaria-sao-paulo",
    title: "AVCB (Drogarias)",
    category: "Aprovação",
    shortDescription: "Regularização de drogarias e perfumarias em SP. Foco em aerossóis e gôndolas.",
    h1: "AVCB para Drogaria em São Paulo — Regularização Completa",
    metaTitle: "AVCB para Drogaria em São Paulo | DRD2 Engenharia",
    metaDescription: "A DRD2 Engenharia é especialista em AVCB para drogarias em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com agilidade e segurança normativa. Diagnóstico técnico gratuito — fale agora.",
    pas: {
      problem: "Sua drogaria corre o risco de interdição pela Vigilância Sanitária por falta de AVCB?",
      agitation: "Aerossóis pressurizados e embalagens inflamáveis criam um risco de incêndio específico. Sem AVCB ativo, a renovação do seu CMVS é bloqueada em 2026.",
      solution: "A DRD2 Engenharia resolve a regularização da sua drogaria com precisão normativa, focando no controle de aerossóis e rotas de fuga."
    },
    content: [
      "Drogarias são estabelecimentos com grande volume de produtos cosméticos, aerossóis pressurizados e embalagens inflamáveis em prateleiras abertas.",
      "Em 2026, com o cruzamento de dados entre CBPMESP e Vigilância Sanitária, drogarias sem AVCB estão sendo bloqueadas na renovação do CMVS.",
      "Trabalhamos com o enquadramento IT-02 (Grupo C), garantindo conformidade plena para redes e unidades individuais."
    ],
    faqs: [
      { question: "Toda drogaria precisa de AVCB em São Paulo?", answer: "Sim. Toda drogaria no Estado de São Paulo está obrigada a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP. A ausência do certificado sujeita o estabelecimento a multa, interdição e bloqueio do CMVS pela Vigilância Sanitária." },
      { question: "Drogaria pequena pode usar CLCB em vez de AVCB?", answer: "Sim. Drogarias de menor porte e baixo volume de produtos inflamáveis geralmente se enquadram no CLCB — processo mais simples, rápido e econômico. A DRD2 faz o enquadramento correto gratuitamente antes de iniciar qualquer trabalho." },
      { question: "Qual a diferença entre AVCB para farmácia e AVCB para drogaria?", answer: "Farmácias — especialmente as de manipulação — têm risco elevado por usar solventes e equipamentos de produção. Drogarias têm risco específico pelo volume de aerossóis pressurizados e produtos cosméticos inflamáveis. O enquadramento é definido conforme o uso real." },
      { question: "A VISA pode bloquear a drogaria por falta de AVCB?", answer: "Sim. Em 2026 a Vigilância Sanitária passou a cruzar dados com o CBPMESP e está bloqueando a renovação do CMVS de drogarias sem protocolo ativo de AVCB ou CLCB." },
      { question: "Quanto tempo leva para regularizar o AVCB de uma drogaria?", answer: "Em média de 30 a 90 dias a partir do protocolo, dependendo do estágio de adequação e da demanda do CBPMESP. O diagnóstico técnico gratuito estima o prazo real." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-casas-noturnas-boates-sao-paulo": {
    slug: "avcb-casas-noturnas-boates-sao-paulo",
    title: "AVCB (Boates e Casas Noturnas)",
    category: "Aprovação",
    shortDescription: "Regularização de boates e casas noturnas em SP. Rigor máximo em saídas e acústica.",
    h1: "AVCB para Boate e Casa Noturna em São Paulo — Regularização Completa",
    metaTitle: "AVCB para Boate e Casa Noturna em São Paulo | DRD2 Engenharia",
    metaDescription: "AVCB para boate e casa noturna em SP — Grupo F-6, saídas de emergência, acústica certificada e operações surpresa do Bombeiro. Diagnóstico técnico gratuito.",
    pas: {
      problem: "Sua boate está operando com riscos de tragédias e interdição imediata?",
      agitation: "Lotação máxima, ambientes fechados e materiais inflamáveis fazem das boates locais de altíssimo risco. Sem AVCB válido, você arrisca vidas, seu patrimônio e sua liberdade.",
      solution: "A DRD2 Engenharia domina as ITs rigorosas para o Grupo F-6. Regularizamos sua casa com precisão normativa, focando em saídas de emergência e revestimentos seguros."
    },
    content: [
      "Boates são estabelecimentos de reunião noturna com as características de maior risco para o Corpo de Bombeiros, exigindo o enquadramento F-6.",
      "Após a tragédia da Boate Kiss, o rigor técnico em saídas de emergência e materiais de acabamento tornou-se o padrão absoluto.",
      "Entregamos o Projeto Técnico Completo, obrigatório para praticamente todos os estabelecimentos desse tipo."
    ],
    faqs: [
      { question: "Toda boate precisa de AVCB em São Paulo?", answer: "Sim. Toda boate e casa noturna no Estado de São Paulo está obrigada a obter AVCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP. Boates não se enquadram no CLCB — o AVCB com Projeto Técnico Completo é obrigatório." },
      { question: "O Corpo de Bombeiros pode interditar uma boate durante o funcionamento?", answer: "Sim. O CBPMESP realiza operações surpresa em boates — inclusive durante o funcionamento com público presente. Uma interdição em noite de operação gera prejuízo imediato e dano à reputação." },
      { question: "Espuma acústica em boate é permitida?", answer: "Somente se tiver certificação de reação ao fogo conforme IT-10. Espumas sem certificação são reprovação imediata e precisam ser substituídas." },
      { question: "Boate precisa de sprinklers?", answer: "Sim, em boates acima de determinada área conforme IT-23. O sistema de sprinklers é um dos principais itens exigidos e verificados com rigor." },
      { question: "Quanto tempo leva para regularizar o AVCB de uma boate?", answer: "Em média de 90 a 180 dias a partir do protocolo, dependendo do estágio de adequação e das obras necessárias. O diagnóstico técnico gratuito estimará o prazo real." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-para-casa-noturna-sao-paulo": {
    slug: "avcb-para-casa-noturna-sao-paulo",
    title: "AVCB (Casas Noturnas)",
    category: "Aprovação",
    shortDescription: "Regularização de casas noturnas, clubes e complexos de entretenimento em SP. Foco em compartimentação e lotação.",
    h1: "AVCB para Casa Noturna em São Paulo — Regularização Completa",
    metaTitle: "AVCB para Casa Noturna em São Paulo | DRD2 Engenharia",
    metaDescription: "A DRD2 Engenharia é especialista em AVCB para casas noturnas em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com segurança normativa e agilidade. Diagnóstico técnico gratuito.",
    pas: {
      problem: "Sua casa noturna está operando com riscos de tragédias e interdição imediata?",
      agitation: "Múltiplos ambientes, iluminação reduzida e materiais inflamáveis fazem das casas noturnas locais de altíssimo risco. Sem AVCB válido, você arrisca vidas, seu patrimônio e sua liberdade.",
      solution: "A DRD2 Engenharia domina as ITs rigorosas para o Grupo F-6. Regularizamos seu complexo com precisão normativa, focando em saídas de emergência e compartimentação segura."
    },
    content: [
      "Casas noturnas são ambientes de entretenimento com características únicas de risco: múltiplos ambientes interligados, público denso em espaço fechado e iluminação cenográfica que reduz a visibilidade.",
      "Após a tragédia da Boate Kiss, o rigor técnico em saídas de emergência, sinalização especial e materiais de acabamento tornou-se o padrão absoluto.",
      "Entregamos o Projeto Técnico Completo, obrigatório para praticamente todos os estabelecimentos do Grupo F-6 em razão da lotação e do nível de risco."
    ],
    faqs: [
      { question: "Toda casa noturna precisa de AVCB em São Paulo?", answer: "Sim. Toda casa noturna no Estado de São Paulo está obrigada a obter AVCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP. O nível de risco dessas ocupações impede o enquadramento no CLCB — o AVCB com Projeto Técnico Completo é obrigatório." },
      { question: "O Corpo de Bombeiros pode interditar casa noturna durante o funcionamento?", answer: "Sim. O CBPMESP realiza operações surpresa em casas noturnas durante o funcionamento — inclusive na madrugada. Uma interdição com público presente gera prejuízo imediato, dano à reputação e responsabilidade civil do proprietário." },
      { question: "Casa noturna com múltiplos ambientes precisa de projeto específico para cada área?", answer: "Sim. O projeto técnico precisa contemplar todos os ambientes do complexo — pista, VIP, camarotes, bar, banheiros e depósitos. Cada ambiente tem exigências específicas de saídas, sinalização e compartimentação." },
      { question: "Qual a lotação máxima permitida para uma casa noturna?", answer: "A lotação máxima é definida pelo dimensionamento das saídas de emergência conforme IT-08 e consta expressamente no AVCB emitido pelo CBPMESP. Operar acima dessa lotação é infração grave sujeita a interdição imediata." },
      { question: "Quanto tempo leva para regularizar o AVCB de uma casa noturna?", answer: "Em média de 90 a 180 dias a partir do protocolo, dependendo do estágio de adequação e das obras necessárias. O diagnóstico técnico gratuito da DRD2 estima o prazo real." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-para-bar-com-show-sao-paulo": {
    slug: "avcb-para-bar-com-show-sao-paulo",
    title: "AVCB (Bares com Show)",
    category: "Aprovação",
    shortDescription: "Regularização de bares com show ao vivo, pubs e espaços com música. Foco em enquadramento Grupo F e rotas de fuga.",
    h1: "AVCB para Bar com Show em São Paulo — Regularização Completa",
    metaTitle: "AVCB para Bar com Show em São Paulo | DRD2 Engenharia",
    metaDescription: "A DRD2 Engenharia é especialista em AVCB para bares com show em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com segurança normativa e agilidade. Diagnóstico técnico gratuito.",
    pas: {
      problem: "Seu bar com show corre risco de interdição imediata por enquadramento incorreto?",
      agitation: "Bares com show são locais de reunião de público (Grupo F) e exigem normas muito mais rigorosas que bares comuns. Uma fiscalização na noite do show pode fechar suas portas e gerar multas pesadas.",
      solution: "A DRD2 Engenharia enquadra corretamente seu estabelecimento, projeta sistemas de detecção compatíveis com sua operação e garante o AVCB sem retrabalho."
    },
    content: [
      "Bares com show ao vivo combinam o risco de armazenamento de inflamáveis (bebidas) com a alta densidade de público em locais fechados.",
      "O enquadramento como Grupo F (Reunião de Público) exige saídas de emergência exclusivas para palco, sistemas de alarme de alta potência e brigada treinada.",
      "Regularizamos bares culturais, pubs e casas de show com foco em segurança normativa e continuidade da operação."
    ],
    faqs: [
      { question: "Bar com show ao vivo tem exigências diferentes de um bar comum?", answer: "Sim. Bares com apresentações regulares são enquadrados no Grupo F — Locais de Reunião de Público pela IT-02 do CBPMESP, com exigências mais rigorosas de saídas de emergência, sistema de alarme, controle de lotação e brigada treinada." },
      { question: "Bar que faz show apenas nos fins de semana também precisa de AVCB diferente?", answer: "Sim. O enquadramento é definido pelo uso máximo possível do espaço — não pela frequência dos eventos. Mesmo bares que realizam shows eventualmente são enquadrados como locais de reunião de público e precisam atender às exigências do Grupo F da IT-02." },
      { question: "Máquina de fumaça pode ser usada em bar com show?", answer: "Sim, mas precisa de aprovação específica no projeto de segurança contra incêndio. Máquinas de fumaça ativam detectores de incêndio convencionais — o projeto precisa prever detectores compatíveis ou zonas de exclusão específicas para evitar falsos alarmes." },
      { question: "O Corpo de Bombeiros pode interditar o bar durante um show?", answer: "Sim. O CBPMESP realiza operações surpresa em bares com show — inclusive durante apresentações com público presente. Uma interdição durante show gera prejuízo imediato e responsabilidade civil." },
      { question: "Quanto tempo leva para regularizar o AVCB de um bar com show?", answer: "Em média de 60 a 150 dias a partir do protocolo, dependendo do estágio de adequação e das obras necessárias. O diagnóstico técnico gratuito da DRD2 estima o prazo real." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "renovacao-avcb-condominio-sao-paulo": {
    slug: "renovacao-avcb-condominio-sao-paulo",
    title: "Renovação AVCB (Condomínios)",
    category: "Aprovação",
    shortDescription: "Renovação e regularização de AVCB para condomínios residenciais e comerciais em SP. Foco em responsabilidade do síndico e conformidade 2026.",
    h1: "Renovação de AVCB para Condomínio em São Paulo — Regularize Antes da Multa",
    metaTitle: "Renovação de AVCB para Condomínio em São Paulo 2026 | DRD2 Engenharia",
    metaDescription: "AVCB vencido no seu condomínio? A DRD2 Engenharia faz a renovação e regularização do AVCB para condomínios em SP com agilidade, sem multa e sem Comunique-se. Fale agora.",
    pas: {
      problem: "O AVCB do seu condomínio venceu ou está prestes a vencer?",
      agitation: "A cada dia com o certificado irregular, o síndico assume responsabilidade pessoal e intransferível por qualquer acidente nas áreas comuns.",
      solution: "A DRD2 Engenharia é especializada em renovação e regularização de AVCB para condomínios em São Paulo. Atuamos com vistoria prévia e diagnóstico técnico completo."
    },
    content: [
      "O AVCB para condomínio em São Paulo tem validade de 3 anos, conforme enquadramento na IT-02 do CBPMESP. Após esse prazo, o condomínio fica irregular.",
      "Atuamos com vistoria prévia, diagnóstico técnico completo e aprovação junto ao CBPMESP — sem burocracia, sem Comunique-se e com acompanhamento integral.",
      "Nosso foco é garantir que o síndico tenha segurança jurídica total, eliminando riscos civis e criminais por negligência na segurança contra incêndio."
    ],
    faqs: [
      { question: "O AVCB do condomínio pode ser renovado com o certificado já vencido?", answer: "Sim. O processo é chamado de regularização e exige levantamento técnico antes do protocolo. Não há impedimento legal para protocolar com AVCB vencido, mas o risco de autuação durante o processo existe. A DRD2 orienta como minimizar esse risco durante a tramitação." },
      { question: "Qual é o prazo para renovar o AVCB de um condomínio em SP?", answer: "O processo padrão leva entre 30 e 90 dias após o protocolo no CBPMESP, dependendo da fila do Corpo de Bombeiros e das adequações necessárias. Condomínios sem necessidade de adequação física costumam ser aprovados em 30 a 45 dias." },
      { question: "O síndico pode ser multado antes mesmo de ter o AVCB aprovado?", answer: "Sim. Se o Corpo de Bombeiros visitar o condomínio com o certificado vencido, pode lavrar auto de infração independentemente de o processo estar em tramitação. Por isso, é fundamental protocolar o quanto antes e manter o comprovante de protocolo em mãos." },
      { question: "O que acontece se o condomínio for interditado por falta de AVCB?", answer: "A interdição pode ser parcial (áreas comuns, salão de festas, academia) ou total. Em caso de interdição, os moradores podem exigir desconto proporcional na taxa condominial e o síndico pode ser destituído por negligência em assembleia." },
      { question: "A DRD2 atende condomínios em toda São Paulo?", answer: "Sim. Atendemos condomínios residenciais, comerciais e mistos em toda a cidade de São Paulo e na Grande SP. A visita técnica inicial é gratuita e sem compromisso." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-salao-de-festas-sao-paulo": {
    slug: "avcb-salao-de-festas-sao-paulo",
    title: "AVCB (Salão de Festas)",
    category: "Aprovação",
    shortDescription: "Regularização de salões de festas, casas de eventos e buffets em SP. Foco em lotação máxima e segurança (Grupo F-4).",
    h1: "AVCB para Salão de Festas em São Paulo — Regularização Completa",
    metaTitle: "AVCB para Salão de Festas em São Paulo | DRD2 Engenharia",
    metaDescription: "AVCB para salão de festas e buffet em SP — Grupo F-4, lotação, supressão em coifa e eventos. Regularização completa. Diagnóstico técnico gratuito.",
    pas: {
      problem: "Seu salão de festas corre o risco de interdição durante um evento?",
      agitation: "Salões de festas reúnem grande público em espaços com decorações inflamáveis e cozinhas industriais. Operar sem AVCB é um risco fatal para convidados e uma ameaça jurídica imediata para o proprietário.",
      solution: "A DRD2 Engenharia domina as exigências do Grupo F-4. Regularizamos seu espaço do diagnóstico técnico à aprovação final, garantindo que seus eventos ocorram com segurança total."
    },
    content: [
      "Salões de festas e espaços de eventos são locais de reunião de público (Grupo F-4) com características específicas de risco.",
      "A IT-02 do CBPMESP e o Decreto Estadual nº 69.118/2024 tornam o AVCB obrigatório para funcionamento legal e locação do espaço.",
      "Focamos em controle de materiais de acabamento (IT-10), dimensionamento de saídas para lotação máxima e sistemas de supressão em coifas de buffet."
    ],
    faqs: [
      { question: "Todo salão de festas precisa de AVCB em São Paulo?", answer: "Sim. Todo salão de festas e espaço de eventos no Estado de São Paulo está obrigado a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP." },
      { question: "Salão de festas pequeno pode usar CLCB?", answer: "Sim. Salões de menor porte e lotação reduzida podem se enquadrar no CLCB — processo mais simples e econômico. A DRD2 faz o enquadramento correto gratuitamente antes de iniciar qualquer trabalho." },
      { question: "Salão de festas em condomínio precisa de AVCB próprio?", answer: "Sim, especialmente quando disponibilizado para locação externa. O AVCB do condomínio cobre as áreas comuns — o salão de festas com uso intenso e lotação elevada frequentemente exige certificado individual. A DRD2 analisa o caso completo no diagnóstico gratuito." },
      { question: "O Corpo de Bombeiros pode interditar um evento durante a festa?", answer: "Sim. O CBPMESP realiza fiscalização surpresa em eventos de grande porte — inclusive durante casamentos e formaturas. Uma interdição durante o evento gera prejuízo imediato e responsabilidade civil do proprietário do salão." },
      { question: "Quanto tempo leva para regularizar o AVCB de um salão de festas?", answer: "Em média de 45 a 120 dias a partir do protocolo, dependendo do estágio de adequação e da demanda do CBPMESP. O diagnóstico técnico gratuito da DRD2 estima o prazo real antes de iniciar o processo." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-consultorios-medicos-odontologicos-sao-paulo": {
    slug: "avcb-consultorios-medicos-odontologicos-sao-paulo",
    title: "AVCB (Clínica Odontológica)",
    category: "Aprovação",
    shortDescription: "Regularização de clínicas odontológicas e consultórios dentários em SP. Foco em gases medicinais, autoclaves e CMVS (Vigilância Sanitária).",
    h1: "AVCB para Clínica Odontológica em São Paulo — Regularização Completa",
    metaTitle: "AVCB para Consultórios Médicos e Odontológicos em São Paulo",
    metaDescription: "A DRD2 Engenharia é especialista em AVCB para clínicas odontológicas em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com agilidade e segurança normativa. Diagnóstico técnico gratuito.",
    pas: {
      problem: "Sua clínica odontológica corre o risco de interdição pela Vigilância Sanitária por falta de AVCB?",
      agitation: "Em 2026, o cruzamento de dados entre a VISA e o Bombeiro está bloqueando renovações de CMVS. Sem AVCB, sua clínica opera na ilegalidade, sujeita a multas pesadas e fechamento imediato.",
      solution: "A DRD2 Engenharia resolve sua regularização com precisão. Adequamos seu armazenamento de gases, autoclaves e rotas de fuga para garantir o certificado sem surpresas."
    },
    content: [
      "Clínicas odontológicas possuem riscos específicos: gases medicinais (Oxigênio/Óxido Nitroso), autoclaves de pressão e materiais inflamáveis.",
      "O AVCB ou CLCB é condição obrigatória para a obtenção e renovação do CMVS junto à Vigilância Sanitária em São Paulo.",
      "Focamos em adequação de cilindros (NBR 12188), laudos de autoclaves e dimensionamento de rotas de fuga para pacientes em atendimento."
    ],
    faqs: [
      { question: "Toda clínica odontológica precisa de AVCB em São Paulo?", answer: "Sim. Toda clínica odontológica e consultório dentário no Estado de São Paulo está obrigado a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP." },
      { question: "Consultório odontológico pequeno pode usar CLCB?", answer: "Sim. Consultórios de menor porte sem rede de gases medicinais complexa podem se enquadrar no CLCB — processo mais simples e econômico. A DRD2 faz o enquadramento correto gratuitamente." },
      { question: "A Vigilância Sanitária (VISA) exige o AVCB?", answer: "Sim. Em 2026, a Vigilância Sanitária passou a cruzar dados com o Bombeiro e está bloqueando a renovação do CMVS de clínicas sem protocolo ativo de AVCB ou CLCB." },
      { question: "Quais os principais itens verificados em clínicas dentárias?", answer: "Os fiscais focam no armazenamento externo de cilindros de gases, sinalização de emergência, extintores específicos para eletrônicos e validade dos laudos de vasos de pressão (autoclaves)." },
      { question: "Quanto tempo leva para regularizar uma clínica odontológica?", answer: "Em média de 30 a 90 dias a partir do protocolo, dependendo das adequações físicas necessárias. O diagnóstico técnico gratuito da DRD2 estima o prazo real antes de iniciar." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-para-escritorio-sao-paulo": {
    slug: "avcb-para-escritorio-sao-paulo",
    title: "AVCB (Escritório)",
    category: "Aprovação",
    shortDescription: "Regularização de escritórios corporativos, coworkings e lajes comerciais em SP. Foco em carga elétrica de TI e rotas de fuga (Grupo D).",
    h1: "AVCB para Escritório em São Paulo — Regularização Completa",
    metaTitle: "AVCB para Escritório em São Paulo | DRD2 Engenharia",
    metaDescription: "A DRD2 Engenharia é especialista em AVCB para escritórios em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com agilidade e segurança normativa. Diagnóstico técnico gratuito.",
    pas: {
      problem: "Seu escritório corre o risco de interdição por falta de AVCB?",
      agitation: "Escritórios concentram alta carga elétrica em servidores e grande volume de materiais inflamáveis. Em 2026, a falta de AVCB está bloqueando a renovação de alvarás de funcionamento na prefeitura de SP.",
      solution: "A DRD2 Engenharia regulariza seu ambiente corporativo com eficiência. Analisamos sua infraestrutura de TI e rotas de fuga para garantir o certificado sem burocracia."
    },
    content: [
      "Escritórios são classificados no Grupo D — Serviços Profissionais. Exigem atenção especial à carga elétrica e desobstrução de saídas.",
      "O AVCB ou CLCB é obrigatório para o funcionamento legal do estabelecimento e exigido contratualmente em edifícios comerciais.",
      "Focamos em laudos elétricos para salas de servidores, dimensionamento de rotas de fuga e treinamento de brigada corporativa."
    ],
    faqs: [
      { question: "Todo escritório precisa de AVCB em São Paulo?", answer: "Sim. Todo escritório comercial no Estado de São Paulo está obrigado a obter AVCB ou CLCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP." },
      { question: "Escritório em edifício comercial precisa de AVCB próprio?", answer: "Sim. O AVCB do condomínio cobre apenas as áreas comuns. Cada empresa que ocupa uma sala ou laje precisa do seu próprio certificado individual." },
      { question: "Coworking precisa de AVCB?", answer: "Sim. Espaços de coworking são ocupações com público rotativo e exigem regularização completa, incluindo brigada de incêndio treinada." },
      { question: "Quais os principais erros que reprovam escritórios?", answer: "Os principais erros são sobrecarga em réguas elétricas de TI, obstrução de corredores por mobiliário extra e extintores com manutenção vencida." },
      { question: "Quanto tempo leva para regularizar um escritório?", answer: "Em média de 30 a 90 dias a partir do protocolo. O diagnóstico técnico gratuito da DRD2 estima o prazo real antes de iniciar o processo." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-para-shopping-sao-paulo": {
    slug: "avcb-para-shopping-sao-paulo",
    title: "AVCB (Shopping Center)",
    category: "Aprovação",
    shortDescription: "Regularização de shoppings, galerias e grandes centros comerciais em SP. Foco em sprinklers, controle de fumaça e compartimentação (Grupo C/F).",
    h1: "AVCB para Shopping em São Paulo — Regularização Completa",
    metaTitle: "AVCB para Shopping em São Paulo | DRD2 Engenharia",
    metaDescription: "A DRD2 Engenharia é especialista em AVCB para shoppings e centros comerciais em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com segurança normativa. Diagnóstico técnico gratuito.",
    pas: {
      problem: "A irregularidade do AVCB no shopping coloca em risco dezenas de lojistas simultaneamente?",
      agitation: "Shoppings reúnem o maior volume de variáveis de risco. Uma falha em um sistema interligado ou a falta de renovação do AVCB geral pode interditar toda a edificação, suspendendo o faturamento de todos os lojistas e gerando responsabilidade civil gravíssima para a administração.",
      solution: "A DRD2 Engenharia domina a complexidade técnica de grandes centros. Gerenciamos desde os chuveiros automáticos (sprinklers) até o controle de materiais de acabamento e brigada, garantindo a emissão e manutenção do AVCB geral e individual."
    },
    content: [
      "Shoppings centers são edificações de alta complexidade (Grupo C/F). Exigem sistemas automáticos pesados e exaustão de fumaça.",
      "O AVCB do shopping cobre as áreas comuns, mas cada loja precisa do seu certificado individual para operar legalmente.",
      "Focamos em chuveiros automáticos (sprinklers), detecção centralizada, sinalização de grande porte e fluxos de abandono de pânico."
    ],
    faqs: [
      { question: "Shopping Center precisa de AVCB em São Paulo?", answer: "Sim. Todo shopping center, galeria comercial e centro de compras no Estado de São Paulo está obrigado a obter AVCB conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP." },
      { question: "O AVCB do shopping cobre as lojas individuais?", answer: "Não. O AVCB do condomínio cobre as áreas comuns. Cada lojista precisa obter seu próprio AVCB ou CLCB individual junto ao Corpo de Bombeiros." },
      { question: "Quais os sistemas mais exigidos em shoppings?", answer: "Os pontos de maior atenção são Sprinklers, detecção automática, controle de fumaça, compartimentação corta-fogo entre lojas e brigada de incêndio treinada." },
      { question: "A DRD2 atende lojistas individuais dentro do shopping?", answer: "Sim. Atendemos tanto a administração do shopping para o AVCB geral quanto lojistas que precisam regularizar sua unidade específica para abertura ou renovação de alvará." },
      { question: "Quanto tempo leva para regularizar o AVCB de um shopping?", answer: "A regularização geral de shoppings é complexa e pode levar de 90 a 180 dias. O diagnóstico técnico gratuito da DRD2 mapeia todas as pendências antes de iniciar." }
    ],
    icon: "/images/services/avcb.svg"
  },
  "avcb-posto-combustivel-sao-paulo": {
    slug: "avcb-posto-combustivel-sao-paulo",
    title: "AVCB (Posto de Combustível)",
    category: "Aprovação",
    shortDescription: "Regularização de postos de gasolina, GNV e lojas de conveniência em SP. Foco em instalações elétricas ATEX, aterramento e estanqueidade (Grupo M).",
    h1: "AVCB para Posto de Combustível em São Paulo — Regularização Completa",
    metaTitle: "AVCB para Posto de Combustível em São Paulo | DRD2 Engenharia",
    metaDescription: "A DRD2 Engenharia é especialista em AVCB para postos de combustível em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com segurança normativa e agilidade. Diagnóstico técnico gratuito.",
    pas: {
      problem: "O risco de interdição e explosão em postos sem AVCB é crítico?",
      agitation: "Postos de combustível são classificados como Grupo M — Especiais. Armazenamento subterrâneo e vapores inflamáveis exigem aterramento ATEX e laudos de estanqueidade rigorosos. A ausência do AVCB gera multas pesadas e o risco de fechamento imediato pela ANP ou Bombeiros.",
      solution: "A DRD2 Engenharia domina as normas ABNT NBR 17505 e 13786. Entregamos a regularização completa, incluindo SPDA específico, instalações elétricas blindadas e treinamento de brigada para frentistas."
    },
    content: [
      "Postos de combustível exigem AVCB com Projeto Técnico Completo; não se enquadram no CLCB devido ao alto risco de explosão.",
      "A proteção elétrica à prova de explosão (ATEX) na área de pista e bombas é o ponto principal de reprovação nas vistorias.",
      "Tanques subterrâneos devem possuir laudo de estanqueidade atualizado para aprovação do licenciamento ambiental e do AVCB."
    ],
    faqs: [
      { question: "Todo posto de combustível precisa de AVCB em São Paulo?", answer: "Sim. Todo posto de combustível no Estado de São Paulo está obrigado a obter AVCB junto ao Corpo de Bombeiros, conforme o Decreto Estadual nº 69.118/2024 e a IT-02 do CBPMESP. Postos de combustível não se enquadram no CLCB — o AVCB com Projeto Técnico Completo é obrigatório para todos os estabelecimentos desse tipo." },
      { question: "Posto de combustível pode ser interditado sem AVCB?", answer: "Sim. O CBPMESP tem poder de interditar postos de combustível sem AVCB válido a qualquer momento — e a ANP pode cassar a autorização de funcionamento. Uma interdição em posto de alto movimento gera prejuízo financeiro imediato e dano à reputação irreversível." },
      { question: "Laudo de estanqueidade dos tanques é obrigatório para o AVCB?", answer: "Sim. O laudo de estanqueidade dos tanques subterrâneos é documento obrigatório no processo de AVCB de postos de combustível. O laudo precisa estar dentro do prazo de validade no dia da vistoria — laudos vencidos resultam em reprovação imediata." },
      { question: "Posto com GNV tem exigências adicionais além do AVCB comum?", answer: "Sim. Postos com GNV precisam de projeto específico para a área de gás comprimido, com válvulas de segurança, sistema de detecção de gás e distâncias de segurança específicas. A DRD2 projeta e regulariza postos com GNV considerando todas as exigências complementares." },
      { question: "Quanto tempo leva para regularizar o AVCB de um posto de combustível?", answer: "Em média de 90 a 180 dias a partir do protocolo, dependendo do estágio de adequação e da demanda do CBPMESP. Postos com instalações elétricas a adequar ou tanques sem laudo atualizado devem considerar prazo adicional. O diagnóstico técnico gratuito da DRD2 estima o prazo e custo reais antes de iniciar o processo." }
    ],
    icon: "/images/services/avcb.svg"
  }
};
