const fs = require("fs");
const path = require("path");

const file = path.join(process.cwd(), "src", "data", "blog.ts");
let source = fs.readFileSync(file, "utf8");

const existingSlugs = new Set([...source.matchAll(/slug:\s+"([^"]+)"/g)].map((match) => match[1]));

const posts = [
  {
    slug: "avcb-para-academia-sao-paulo",
    title: "AVCB para Academia em São Paulo: Exigências, Renovação e Aprovação",
    category: "Academias e Centros Esportivos",
    excerpt: "Entenda quando a academia precisa de AVCB ou CLCB, quais sistemas o Corpo de Bombeiros verifica e como regularizar sem travar a licença de funcionamento.",
    relatedServiceSlug: "avcb-para-academia-sao-paulo",
    occupation: "academia",
    audience: "proprietários de academia, studios, boxes de treino funcional, escolas de luta e centros esportivos",
    risks: "alto fluxo de alunos, equipamentos que reduzem áreas livres, lotação em horários de pico, mezaninos, vestiários e rotas de fuga que precisam permanecer desobstruídas",
    systems: "extintores, sinalização, iluminação de emergência, controle de lotação, saídas de emergência, brigada de incêndio e, conforme a área, alarme de incêndio",
    docs: "planta atualizada, ART do responsável técnico, laudos dos sistemas existentes e documentação do imóvel",
  },
  {
    slug: "avcb-para-farmacia-drogaria-sao-paulo",
    title: "AVCB para Farmácia e Drogaria em São Paulo: Como Regularizar",
    category: "Farmácias e Drogarias",
    excerpt: "Guia técnico para regularizar farmácias e drogarias no Corpo de Bombeiros, com foco em licença, estoque, atendimento ao público e renovação do AVCB.",
    relatedServiceSlug: "avcb-farmacia-drogaria-sao-paulo",
    occupation: "farmácia e drogaria",
    audience: "farmacêuticos responsáveis, redes de drogarias, franqueados e proprietários de lojas de saúde",
    risks: "estoque setorizado, atendimento ao público, áreas administrativas, materiais combustíveis em prateleiras e exigência de documentação para licença de funcionamento",
    systems: "extintores dimensionados, sinalização fotoluminescente, iluminação de emergência, rota de fuga, controle de acesso a áreas restritas e adequação documental",
    docs: "contrato ou matrícula do imóvel, planta, CNPJ, ART, documentos de manutenção e enquadramento correto entre AVCB e CLCB",
  },
  {
    slug: "avcb-para-padaria-sao-paulo",
    title: "AVCB para Padaria em São Paulo: Fornos, GLP e Exigências dos Bombeiros",
    category: "Padarias e Alimentação",
    excerpt: "Veja como regularizar padarias, confeitarias e panificadoras com segurança, considerando fornos, GLP, exaustão, extintores e aprovação no Corpo de Bombeiros.",
    relatedServiceSlug: "avcb-para-padaria-sao-paulo",
    occupation: "padaria",
    audience: "donos de padaria, confeitarias, panificadoras e operações com produção própria",
    risks: "uso de fornos, GLP, equipamentos aquecidos, estoque de embalagens, área de atendimento e cozinha funcionando junto ao salão",
    systems: "extintores adequados, sinalização, iluminação de emergência, laudo de estanqueidade de gás, rota de fuga e proteção compatível com a área de produção",
    docs: "laudo de gás, ART, planta, memorial, comprovantes de manutenção e documentos exigidos no Via Fácil Bombeiros",
  },
  {
    slug: "avcb-para-supermercado-sao-paulo",
    title: "AVCB para Supermercado em São Paulo: Estoque, Público e Vistoria",
    category: "Supermercados e Varejo",
    excerpt: "Entenda as exigências de AVCB para supermercados, mercados e lojas de autosserviço, com foco em estoque, câmaras, rotas de fuga e sistemas de proteção.",
    relatedServiceSlug: "avcb-supermercado-sao-paulo",
    occupation: "supermercado",
    audience: "proprietários de supermercados, mercados de bairro, hortifrútis e redes varejistas",
    risks: "grande fluxo de clientes, corredores com gôndolas, estoque elevado, câmaras frias, área de recebimento, padaria interna e carga de incêndio variável",
    systems: "extintores, iluminação de emergência, sinalização, rotas de fuga, alarme, hidrantes ou sprinklers quando exigidos pela área e carga de incêndio",
    docs: "planta de layout, ART, laudos de sistemas, relatórios de manutenção e documentação para protocolo no Corpo de Bombeiros",
  },
  {
    slug: "avcb-para-posto-combustivel-sao-paulo",
    title: "AVCB para Posto de Combustível em São Paulo: Risco, Laudos e Aprovação",
    category: "Postos de Combustível",
    excerpt: "Guia para regularização de postos de combustível no Corpo de Bombeiros, considerando áreas inflamáveis, sinalização, extintores, laudos e responsabilidade técnica.",
    relatedServiceSlug: "avcb-posto-combustivel-sao-paulo",
    occupation: "posto de combustível",
    audience: "operadores de postos, administradoras, redes de combustíveis e proprietários de áreas com inflamáveis",
    risks: "armazenamento e abastecimento de líquidos inflamáveis, áreas classificadas, loja de conveniência, descarga de combustível e risco ampliado em caso de falha operacional",
    systems: "extintores especiais, sinalização de risco, aterramento, controle de fontes de ignição, rotas de fuga, laudos técnicos e medidas compatíveis com inflamáveis",
    docs: "ART, laudos aplicáveis, planta, documentação da operação, relatórios de manutenção e enquadramento técnico específico",
  },
  {
    slug: "avcb-para-igreja-sao-paulo",
    title: "AVCB para Igreja em São Paulo: Lotação, Saídas e Regularização",
    category: "Templos Religiosos",
    excerpt: "Saiba quando igrejas, templos e espaços religiosos precisam de AVCB, quais exigências são verificadas e como evitar problemas com fiscalização.",
    relatedServiceSlug: "avcb-para-igreja-sao-paulo",
    occupation: "igreja",
    audience: "pastores, administradores de templos, associações religiosas e responsáveis por locais de culto",
    risks: "reunião de público, cultos com lotação elevada, cadeiras móveis, palco, equipamentos elétricos, salas de apoio e saídas que precisam suportar abandono rápido",
    systems: "sinalização, iluminação de emergência, extintores, controle de lotação, saídas dimensionadas, brigada e alarme quando exigido",
    docs: "documentação da entidade, planta, ART, laudos de sistemas e protocolo adequado junto ao Corpo de Bombeiros",
  },
  {
    slug: "avcb-para-hotel-pousada-sao-paulo",
    title: "AVCB para Hotel e Pousada em São Paulo: Hospedagem, Rotas e Alarme",
    category: "Hotéis e Pousadas",
    excerpt: "Entenda as exigências de segurança contra incêndio para hotéis, pousadas e hostels, com foco em hóspedes, rotas de fuga, alarme e renovação do AVCB.",
    relatedServiceSlug: "avcb-hoteis-pousadas-sao-paulo",
    occupation: "hotel e pousada",
    audience: "gestores de hotéis, pousadas, hostels, flats e meios de hospedagem",
    risks: "hóspedes dormindo, desconhecimento das rotas de fuga, corredores, escadas, quartos, lavanderia, cozinha e necessidade de orientação visual clara",
    systems: "alarme, iluminação de emergência, sinalização, extintores, portas adequadas, rotas de fuga, brigada e hidrantes conforme área e altura",
    docs: "planta, ART, laudos de manutenção, documentos do imóvel, cadastro da atividade e evidências para vistoria",
  },
  {
    slug: "avcb-para-casa-noturna-boate-sao-paulo",
    title: "AVCB para Casa Noturna e Boate em São Paulo: Lotação e Interdição",
    category: "Casas Noturnas e Eventos",
    excerpt: "Veja as exigências para casas noturnas, boates e espaços de evento, onde lotação, saídas, controle de público e alarme são pontos críticos de aprovação.",
    relatedServiceSlug: "avcb-casas-noturnas-boates-sao-paulo",
    occupation: "casa noturna e boate",
    audience: "proprietários de casas noturnas, boates, bares com pista, casas de show e espaços de evento",
    risks: "alta lotação, baixa iluminação, som alto, consumo de bebidas, controle de acesso, decoração combustível e necessidade de abandono rápido",
    systems: "saídas de emergência, sinalização reforçada, iluminação de emergência, alarme, extintores, controle de lotação, brigada e projeto técnico completo",
    docs: "planta de layout, ART, laudos, memorial de segurança, controle de lotação e documentação para aprovação no Corpo de Bombeiros",
  },
  {
    slug: "avcb-para-shopping-sao-paulo",
    title: "AVCB para Shopping em São Paulo: Áreas Comuns, Lojas e Sistemas Integrados",
    category: "Shoppings e Centros Comerciais",
    excerpt: "Guia técnico sobre AVCB para shoppings e centros comerciais, abordando áreas comuns, lojas, praça de alimentação, sistemas integrados e gestão de risco.",
    relatedServiceSlug: "avcb-para-shopping-sao-paulo",
    occupation: "shopping",
    audience: "administradoras de shopping, centros comerciais, galerias e responsáveis por empreendimentos multiusuários",
    risks: "grande circulação de público, múltiplas lojas, praça de alimentação, cinemas, estacionamentos, sistemas integrados e responsabilidade compartilhada",
    systems: "sprinklers, hidrantes, alarme, detecção, iluminação, sinalização, controle de fumaça, brigada e manutenção permanente",
    docs: "projeto técnico, ARTs, laudos de todos os sistemas, relatórios de manutenção, documentação das áreas comuns e controle das lojas",
  },
  {
    slug: "avcb-para-salao-de-festas-sao-paulo",
    title: "AVCB para Salão de Festas em São Paulo: Eventos, Lotação e Saídas",
    category: "Salões de Festa e Eventos",
    excerpt: "Entenda como regularizar salões de festas e espaços de eventos, com foco em lotação, sinalização, saídas de emergência e renovação do AVCB.",
    relatedServiceSlug: "avcb-salao-de-festas-sao-paulo",
    occupation: "salão de festas",
    audience: "donos de salões de festas, buffets, espaços de evento e administradores de áreas de uso coletivo",
    risks: "eventos com variação de público, mesas, decoração, equipamentos temporários, cozinha de apoio e mudança frequente de layout",
    systems: "extintores, sinalização, iluminação, controle de lotação, saídas de emergência, brigada ou equipe treinada e documentação do layout",
    docs: "planta, ART, laudos dos sistemas, documentos do imóvel e memorial de ocupação para análise técnica",
  },
  {
    slug: "avcb-para-escritorio-sala-comercial-sao-paulo",
    title: "AVCB para Escritório e Sala Comercial em São Paulo: AVCB ou CLCB?",
    category: "Escritórios e Salas Comerciais",
    excerpt: "Saiba quando escritório, sala comercial ou loja precisa de AVCB ou CLCB, como regularizar para licença de funcionamento e quais erros evitar.",
    relatedServiceSlug: "avcb-comercial-escritorio-sao-paulo",
    occupation: "escritório e sala comercial",
    audience: "empresários, locatários, administradores de salas comerciais, coworkings e lojas de pequeno porte",
    risks: "mudança de uso do imóvel, contratos de locação, exigência de licença de funcionamento, reformas internas e documentação desatualizada",
    systems: "extintores, sinalização, iluminação de emergência, rota de fuga, adequação de layout e enquadramento correto entre AVCB e CLCB",
    docs: "contrato de locação, planta, CNPJ, ART, documentos do imóvel e informações da atividade exercida",
  },
  {
    slug: "avcb-para-consultorio-medico-odontologico-sao-paulo",
    title: "AVCB para Consultório Médico e Odontológico em São Paulo",
    category: "Consultórios e Saúde",
    excerpt: "Guia para regularizar consultórios médicos e odontológicos junto ao Corpo de Bombeiros, com foco em licença, pacientes, salas clínicas e documentação.",
    relatedServiceSlug: "avcb-consultorios-medicos-odontologicos-sao-paulo",
    occupation: "consultório médico e odontológico",
    audience: "médicos, dentistas, clínicas pequenas, administradores de consultórios e responsáveis técnicos de saúde",
    risks: "atendimento a pacientes, salas clínicas, equipamentos elétricos, documentação sanitária e necessidade de compatibilizar licença de funcionamento com AVCB ou CLCB",
    systems: "extintores, sinalização, iluminação, rotas de fuga, adequação de layout, documentos técnicos e medidas compatíveis com serviços de saúde",
    docs: "CNPJ, contrato, planta, ART, documentos sanitários quando aplicáveis e laudos de manutenção dos sistemas existentes",
  },
];

function makeContent(post) {
  return `
      <p>O <strong>AVCB para ${post.occupation} em São Paulo</strong> não deve ser tratado como uma etapa burocrática isolada. Ele confirma que o imóvel possui condições mínimas de segurança contra incêndio, abandono e controle de risco para funcionar de forma regular perante o Corpo de Bombeiros, Prefeitura, seguradora e demais órgãos de fiscalização.</p>

      <p>Para ${post.audience}, a regularização é uma forma de proteger a operação, evitar multas e reduzir o risco de interdição. Quando o AVCB está vencido, inexistente ou incompatível com a atividade exercida, qualquer vistoria pode gerar exigências, bloqueio de licença e perda de tempo comercial.</p>

      <h2>Por que ${post.occupation} precisa de atenção técnica no AVCB?</h2>
      <p>Esse tipo de ocupação apresenta pontos críticos como ${post.risks}. Por isso, o enquadramento correto entre AVCB e CLCB precisa considerar área construída, altura, lotação, carga de incêndio, uso real do imóvel e sistemas existentes.</p>

      <p>Um erro comum é tentar usar um certificado antigo ou genérico da edificação, sem verificar se ele cobre a atividade atual. O Corpo de Bombeiros pode exigir adequações quando o uso mudou, quando houve reforma ou quando os sistemas não correspondem ao risco declarado.</p>

      <h2>Sistemas normalmente verificados pelo Corpo de Bombeiros</h2>
      <p>Na vistoria ou análise técnica, os principais pontos avaliados costumam envolver ${post.systems}. A ausência, instalação incorreta ou falta de manutenção desses itens pode gerar reprovação, Comunique-se ou necessidade de nova vistoria.</p>

      <ul>
        <li><strong>Extintores:</strong> quantidade, tipo, validade, sinalização e acesso livre.</li>
        <li><strong>Rotas de fuga:</strong> corredores, portas, escadas e saídas compatíveis com a lotação.</li>
        <li><strong>Iluminação de emergência:</strong> autonomia, posicionamento e funcionamento em caso de falta de energia.</li>
        <li><strong>Sinalização:</strong> placas fotoluminescentes indicando saídas, equipamentos e orientação de abandono.</li>
        <li><strong>Documentação técnica:</strong> ART, laudos, planta e evidências de manutenção quando aplicável.</li>
      </ul>

      <h2>AVCB novo ou renovação: qual é o melhor caminho?</h2>
      <p>Quando o imóvel nunca teve certificado, mudou de atividade ou passou por alteração relevante, pode ser necessário iniciar um processo novo de regularização. Quando já existe AVCB válido ou vencido recentemente, o caminho costuma ser a <a href="/renovacao-avcb" class="text-primary font-bold underline">renovação de AVCB</a>, desde que os sistemas continuem compatíveis e funcionando.</p>

      <p>A renovação deve ser iniciada antes do vencimento. Essa antecedência reduz risco de fiscalização, evita corrida de última hora e permite corrigir pendências com planejamento. Em imóveis comerciais, também evita problemas com contrato de locação, seguro, alvará e licença de funcionamento.</p>

      <h2>Documentos necessários para regularização</h2>
      <p>Em geral, a regularização exige ${post.docs}. A lista final depende do enquadramento técnico, do tipo de processo no Via Fácil Bombeiros e das características da edificação.</p>

      <p>O papel do engenheiro é avaliar o imóvel, definir o enquadramento correto, orientar as adequações, emitir ART quando aplicável e conduzir o processo até a aprovação. Essa etapa evita protocolo errado, gastos desnecessários e retrabalho.</p>

      <h2>Quanto custa regularizar ${post.occupation}?</h2>
      <p>O custo varia conforme área, complexidade, existência de projeto aprovado, necessidade de adequações físicas e quantidade de sistemas a revisar. Para entender os fatores de preço, veja também o guia <a href="/blog/quanto-custa-avcb-em-sao-paulo" class="text-primary font-bold underline">quanto custa o AVCB em São Paulo</a>.</p>

      <h2>Como a DRD2 Engenharia ajuda</h2>
      <p>A <strong>DRD2 Engenharia</strong> realiza diagnóstico técnico, verifica pendências, orienta adequações e conduz o processo de AVCB ou CLCB com engenheiro responsável. O objetivo é regularizar o imóvel com segurança, clareza de prazo e foco na aprovação junto ao Corpo de Bombeiros.</p>
    `;
}

function makeFaqs(post) {
  return [
    {
      question: `${post.occupation} precisa de AVCB em São Paulo?`,
      answer: `Na maioria dos casos, sim. O enquadramento pode ser AVCB ou CLCB conforme área, risco, lotação e características do imóvel. A análise técnica define o processo correto no Corpo de Bombeiros.`,
    },
    {
      question: `Posso renovar o AVCB de ${post.occupation} sem vistoria técnica?`,
      answer: `Não é recomendável. Antes da renovação, é necessário verificar se os sistemas continuam instalados, válidos e compatíveis com a ocupação atual. Essa vistoria preventiva reduz reprovação e retrabalho.`,
    },
    {
      question: `Quanto tempo demora para regularizar ${post.occupation}?`,
      answer: `O prazo depende do estado do imóvel, da documentação disponível e da necessidade de adequações. Casos simples podem andar mais rápido; processos com projeto técnico, obras ou Comunique-se exigem mais prazo.`,
    },
  ];
}

const newPosts = posts
  .filter((post) => !existingSlugs.has(post.slug))
  .map((post) => ({
    slug: post.slug,
    title: post.title,
    date: "2026-05-05",
    category: post.category,
    excerpt: post.excerpt,
    relatedServiceSlug: post.relatedServiceSlug,
    image: "/images/blog/fire_safety_equipment_premium.webp",
    content: makeContent(post),
    faqs: makeFaqs(post),
  }));

if (newPosts.length === 0) {
  console.log("No missing occupation blog posts to add.");
  process.exit(0);
}

const serialized = newPosts
  .map((post) => `  ${JSON.stringify(post, null, 2).replace(/"([^"]+)":/g, "$1:").replace(/\\n/g, "\n")}`)
  .join(",\n");

const insert = `${serialized}\n`;
const marker = "\n];";
const index = source.lastIndexOf(marker);

if (index === -1) {
  throw new Error("Could not find blogPosts closing marker.");
}

source = `${source.slice(0, index)},\n${insert}${source.slice(index)}`;
fs.writeFileSync(file, source, "utf8");
console.log(`Added ${newPosts.length} occupation blog posts.`);
