import Link from "next/link";
import { CheckCircle2, Clock, FileCheck, MapPin, ShieldCheck } from "lucide-react";

type OccupationAuthorityBlockProps = {
  occupation: string;
  currentSlug: string;
};

type NeighborhoodAuthorityBlockProps = {
  neighborhood: string;
  zone?: string;
  profile?: string;
  avenues?: string;
  currentSlug: string;
};

const occupationProfiles: Record<string, {
  group: string;
  risk: string;
  systems: string[];
  prazo: string;
  links: { label: string; href: string }[];
}> = {
  condomínio: {
    group: "A-2 / A-3, com areas comuns e possivel uso misto",
    risk: "escadas, garagens, casas de bombas, saloes de festas e medidores de gas",
    systems: ["IT-11: saidas de emergência", "IT-17: hidrantes e mangotinhos", "IT-18: iluminação de emergência", "IT-20: sinalização", "IT-41: inspeccao elétrica"],
    prazo: "30 a 60 dias quando os sistemas estao mantidos; 60 a 120 dias com retrofit de bombas, portas corta-fogo ou SPDA",
    links: [
      { label: "sistema de hidrantes", href: "/sistema-de-hidrantes-para-condominio-sao-paulo" },
      { label: "SPDA", href: "/spda" },
      { label: "renovacao de AVCB", href: "/renovacao-avcb-condominio-sao-paulo" },
    ],
  },
  galpao: {
    group: "I-1, I-2 ou I-3, conforme carga de incêndio e armazenamento",
    risk: "altura de estocagem, porta-paletes, docas, empilhadeiras, área técnica e carga combustivel",
    systems: ["IT-14: carga de incêndio", "IT-17: hidrantes", "IT-22: alarme e detecção", "IT-23: chuveiros automáticos", "IT-25: liquidos combustiveis quando aplicavel"],
    prazo: "60 a 120 dias em galpões com projeto existente; 90 a 180 dias quando ha cálculo hidráulico, sprinkler ou ampliacao de área",
    links: [
      { label: "hidrantes para galpao", href: "/sistema-de-hidrantes-para-galpao-sao-paulo" },
      { label: "sprinklers para indústria", href: "/sistema-de-sprinkler-para-industria-sao-paulo" },
      { label: "projetos de incêndio", href: "/projetos-incendio" },
    ],
  },
  restaurante: {
    group: "F-8 / F-2, com cozinha, publico sentado e uso de GLP",
    risk: "coifa, fritadeiras, central de GLP, lotação, materiais de acabamento e rotas de fuga",
    systems: ["IT-10: controle de materiais", "IT-11: saidas de emergência", "IT-16: extintores classe K", "IT-20: sinalização", "IT-28: GLP"],
    prazo: "20 a 45 dias para CLCB simples; 45 a 90 dias quando ha cozinha industrial, exaustao, GLP ou alta lotação",
    links: [
      { label: "laudo de estanqueidade de gas", href: "/laudo-estanqueidade-gas-sao-paulo" },
      { label: "alarme de incêndio", href: "/alarme-incendio-sao-paulo" },
      { label: "renovacao para restaurante", href: "/renovacao-avcb-restaurante-sao-paulo" },
    ],
  },
  // CLCB: base para edificações até 750 m² de baixo risco — processo simplificado, sem vistoria física obrigatória
  clcbDefault: {
    group: "edificação até 750 m² com baixo risco de incêndio (carga até 300 MJ/m²) enquadrada na IT-01 e IT-02 do CBPMESP",
    risk: "extintores no prazo, sinalização visível, iluminação de emergência e rotas de fuga desobstruídas — itens auto-declarados na vertente CLCB",
    systems: ["IT-01: procedimentos para CLCB", "IT-02: classificação da ocupação", "IT-11: saídas de emergência", "IT-16: extintores", "IT-18: iluminação de emergência", "IT-20: sinalização"],
    prazo: "15 a 45 dias para CLCB sem pendências; 45 a 90 dias quando ha adequação física antes do protocolo (extintores vencidos, sinalização, iluminação)",
    links: [
      { label: "renovação de CLCB", href: "/renovacao-clcb-sao-paulo" },
      { label: "AVCB ou CLCB — qual preciso?", href: "/avcb-ou-clcb-qual-preciso" },
      { label: "CLCB em São Paulo", href: "/clcb-sao-paulo" },
    ],
  },
  // CLCB Alimentação — restaurante, bar, padaria de pequeno porte
  clcbAlimentacao: {
    group: "F-8/F-2 (alimentação) com até 750 m² e capacidade média — atende CLCB se a carga de incêndio for compatível",
    risk: "central de GLP, coifa de cozinha, extintor classe K, rota de fuga até a calçada e lotação real verificada",
    systems: ["IT-11: saídas e lotação", "IT-16: extintor classe K para cozinha", "IT-20: sinalização", "IT-28: GLP com ART", "IT-21: combustíveis líquidos quando houver"],
    prazo: "20 a 45 dias para CLCB sem pendências; 45 a 90 dias com adequação de gás, coifa ou extintor",
    links: [
      { label: "renovação CLCB para restaurante", href: "/renovacao-clcb-restaurante-sao-paulo" },
      { label: "laudo de estanqueidade de gás", href: "/laudo-estanqueidade-gas-sao-paulo" },
      { label: "AVCB ou CLCB — qual preciso?", href: "/avcb-ou-clcb-qual-preciso" },
    ],
  },
  // CLCB Saúde — clínicas, consultórios, fisioterapia, odontologia
  clcbSaude: {
    group: "H-2 (atendimento à saúde) até 750 m² — clínica, consultório, fisioterapia, odontologia",
    risk: "acessibilidade nas rotas (cadeirantes, macas), oxigênio medicinal, equipamentos elétricos sensíveis e exigências de planos de saúde",
    systems: ["IT-11: rotas com largura para macas/cadeira de rodas", "IT-16: extintor CO₂ para sala de raio-X/equipamentos", "IT-20: sinalização visível", "IT-18: iluminação de emergência em áreas críticas"],
    prazo: "15 a 45 dias para CLCB sem pendências; 30 a 60 dias com adequação de extintor por tipo de sala ou sinalização",
    links: [
      { label: "renovação CLCB para clínica médica", href: "/renovacao-clcb-clinica-sao-paulo" },
      { label: "renovação CLCB para odontológica", href: "/renovacao-clcb-odontologica-sao-paulo" },
      { label: "renovação CLCB para fisioterapia", href: "/renovacao-clcb-fisioterapia-sao-paulo" },
    ],
  },
  // AVCB Hotel/Pousada/Motel/Hostel — grupo B
  hotel: {
    group: "B-1 (hotel), B-2 (pousada, motel, hostel) — hospedagem com publico dormindo",
    risk: "evacuação noturna de hospedes desconhecidos do prédio, alarme audível em apartamentos, brigada em todos os turnos, cozinha industrial com GLP, lavanderia e geração de energia",
    systems: ["IT-11: saidas e escadas dimensionadas para evacuação noturna", "IT-17: hidrantes em todos os andares", "IT-19: alarme com central + detectores em apartamentos", "IT-23: sprinkler acima de determinada altura", "IT-13: brigada 24h"],
    prazo: "60 a 120 dias em hotéis com projeto existente; 120 a 240 dias quando ha retrofit de alarme, sprinkler ou brigada",
    links: [
      { label: "renovação AVCB para hotel", href: "/renovacao-avcb-hotel-sao-paulo" },
      { label: "sistema de alarme para hotel", href: "/sistema-alarme-incendio-hotel-avcb-sp" },
      { label: "sprinkler para hotel", href: "/sistema-de-sprinkler-para-hotel-sao-paulo" },
    ],
  },
  // AVCB Hospital/Clinica grande — grupo H-3
  hospital: {
    group: "H-3 (hospital, casa de repouso, pronto-socorro) — pacientes acamados ou com mobilidade reduzida",
    risk: "evacuação assistida (paciente em maca, idoso, cadeirante), gases medicinais com risco de explosão, equipamentos elétricos em CTI/UTI, brigada com treinamento hospitalar especifico, compartimentação entre alas",
    systems: ["IT-11: rotas com largura compatível com macas", "IT-17: hidrantes em todos os andares", "IT-19: alarme com detecção precoce em quartos", "IT-23: sprinkler obrigatório", "IT-13: brigada 24h treinada", "IT-29: gases medicinais com ART"],
    prazo: "90 a 180 dias para hospitais com projeto atualizado; 180 a 365 dias quando há ampliação ou compartimentação nova",
    links: [
      { label: "renovação AVCB para hospital", href: "/renovacao-avcb-hospital-clinica-sao-paulo" },
      { label: "sistema de alarme para hospital", href: "/sistema-alarme-incendio-hospital-avcb-sp" },
      { label: "sprinkler para hospital", href: "/sistema-de-sprinkler-para-hospital-sao-paulo" },
    ],
  },
  // AVCB Escola/Faculdade/Creche — grupo E
  escola: {
    group: "E-1 (escola), E-2 (creche), E-4 (faculdade) — concentração de crianças ou jovens com necessidade de evacuação rápida",
    risk: "alta concentração em horário de aula, rotas de fuga sinalizadas para crianças, simulados periódicos, brigada de incêndio com professores treinados, laboratorios e cozinhas em escolas com refeitório",
    systems: ["IT-11: saidas dimensionadas para evacuação rápida", "IT-17: hidrantes em escolas acima de determinada area", "IT-19: alarme com sirene em todos os ambientes", "IT-20: sinalização visivel para crianças", "IT-13: brigada com treinamento de evacuação"],
    prazo: "60 a 120 dias em escolas com projeto existente; 90 a 180 dias com instalação de alarme novo ou adequação de laboratório",
    links: [
      { label: "renovação AVCB para escola", href: "/renovacao-avcb-escola-sao-paulo" },
      { label: "alarme para escola", href: "/sistema-alarme-incendio-edificio-comercial-sp" },
      { label: "AVCB para creche", href: "/avcb-para-creche-sao-paulo" },
    ],
  },
  // AVCB Posto de Combustivel — grupo M-2
  posto: {
    group: "M-2 (posto de combustivel) — atmosfera potencialmente inflamável e armazenagem de combustivel",
    risk: "tanques subterrâneos de combustivel, bombas, central de GLP para conveniência, vapores inflamáveis, descarga de caminhão-tanque, aterramento e SPDA obrigatorio, brigada com treinamento especifico",
    systems: ["IT-25: armazenagem de combustivel", "IT-22: SPDA reforçado", "IT-17: hidrantes com vazão majorada", "IT-16: extintores em todas as bombas + conveniência", "IT-13: brigada treinada para combustivel"],
    prazo: "90 a 180 dias para postos com projeto recente; 180 a 365 dias quando há substituição de tanque ou ampliação",
    links: [
      { label: "renovação AVCB para posto", href: "/renovacao-avcb-posto-combustivel-sao-paulo" },
      { label: "SPDA", href: "/spda" },
      { label: "AVCB para posto de combustivel", href: "/avcb-posto-combustivel-sao-paulo" },
    ],
  },
  // AVCB Supermercado/Varejo grande — grupo C-1, C-3
  supermercado: {
    group: "C-1 (supermercado), C-3 (shopping center) — varejo com alta circulação e produtos inflamáveis em prateleira",
    risk: "câmaras frigorificas com gas refrigerante, área de açougue com chama, produtos inflamáveis (álcool, aerossol, gás de cozinha em prateleira), corredores estreitos, padaria interna com forno",
    systems: ["IT-11: saidas com largura para evacuação rápida", "IT-17: hidrantes na area de vendas e estoque", "IT-19: alarme com cobertura total", "IT-23: sprinkler em estoques verticais", "IT-16: extintores classe K na padaria/açougue"],
    prazo: "60 a 120 dias em supermercados com projeto existente; 120 a 240 dias quando ha sprinkler novo ou compartimentação",
    links: [
      { label: "renovação AVCB para supermercado", href: "/renovacao-avcb-supermercado-sao-paulo" },
      { label: "sprinkler supermercado", href: "/sprinkler-supermercado-avcb-sp" },
      { label: "alarme supermercado", href: "/alarme-incendio-supermercado-avcb-sp" },
    ],
  },
  // AVCB Escritorio/Comercial — grupos D-1, D-2
  escritorio: {
    group: "D-1 (locais de prestação de serviços), D-2 (agência bancária, escritório alto padrão) — uso comercial sem dormida",
    risk: "alta densidade de equipamentos elétricos, cabeamento estruturado, data centers internos, copa com forno e microondas, rotas de fuga em prédios verticais, evacuação coordenada de múltiplas empresas",
    systems: ["IT-11: saidas dimensionadas para lotação", "IT-17: hidrantes em prédios acima de determinada altura", "IT-19: alarme com cobertura por andar", "IT-16: extintores distribuidos por sala", "IT-18: iluminação de emergência em corredores"],
    prazo: "45 a 90 dias para escritórios com projeto existente; 90 a 180 dias com reforma interna ou troca de cabeamento",
    links: [
      { label: "renovação AVCB para escritório", href: "/renovacao-avcb-escritorio-sao-paulo" },
      { label: "alarme para comercial/escritório", href: "/alarme-de-incendio-comercial-escritorio-sp" },
      { label: "AVCB para escritório", href: "/avcb-comercial-escritorio-sao-paulo" },
    ],
  },
  default: {
    group: "classificacao definida pela IT-02 conforme uso, área e altura da edificação",
    risk: "lotação, carga de incêndio, rotas de fuga, sistemas existentes e documentação técnica",
    systems: ["IT-01: procedimentos administrativos", "IT-02: classificacao da ocupação", "IT-11: saidas de emergência", "IT-16: extintores", "IT-20: sinalização"],
    prazo: "30 a 60 dias para processos simples; 60 a 120 dias quando ha projeto técnico, vistoria fisica ou Comunique-se",
    links: [
      { label: "projeto de incêndio", href: "/projetos-incendio" },
      { label: "sistema de hidrantes", href: "/hidrantes" },
      { label: "renovacao de AVCB", href: "/renovacao-avcb" },
    ],
  },
};

const neighborhoodContext: Record<string, { station: string; buildings: string; references: string; prazo: string }> = {
  brooklin: {
    station: "setor operacional do CBPMESP que atende o eixo Berrini, com apoio das estacoes da regiao Sul/Oeste",
    buildings: "torres corporativas, lajes comerciais, coworkings, restaurantes no terreo e condomínios de uso misto",
    references: "Avenida Engenheiro Luis Carlos Berrini, Roberto Marinho, Chucri Zaidan e corredores proximos a Cidade Moncoes",
    prazo: "45 a 90 dias quando ha alteracao de layout corporativo; 90 a 120 dias em torres com projeto de substituicao",
  },
  tatuape: {
    station: "atendimento regional da Zona Leste, com fiscalizacao concentrada nos eixos Radial Leste e Celso Garcia",
    buildings: "torres residenciais altas, condomínios-clube, comércio de rua e galerias proximas ao metro",
    references: "Radial Leste, Rua Apucarana, Azevedo Soares e entorno do Shopping Metro Tatuape",
    prazo: "30 a 75 dias em renovacoes prediais; ate 120 dias quando ha pressurizacao de escada ou alarme setorizado",
  },
  santana: {
    station: "Estacao de Bombeiros Santana, referencia operacional na Avenida Braz Leme",
    buildings: "condomínios verticais, escolas, clínicas, comércio de rua e prédios antigos com áreas comuns ampliadas",
    references: "Braz Leme, Voluntarios da Patria, Conselheiro Moreira de Barros e eixo do metro Santana",
    prazo: "30 a 60 dias em renovacoes sem obra; 60 a 120 dias com SPDA, bombas ou adequação de área construida",
  },
  pinheiros: {
    station: "setor operacional da Zona Oeste, com apoio das estacoes que cobrem Pinheiros, Lapa e Butanta",
    buildings: "edificios mistos, restaurantes, bares, clínicas, estudios, coworkings e prédios residenciais antigos",
    references: "Teodoro Sampaio, Cardeal Arcoverde, Reboucas, Faria Lima e Largo da Batata",
    prazo: "30 a 75 dias para CLCB e renovacoes; 75 a 120 dias quando ha risco misto ou cozinha com GLP",
  },
};

function pickOccupationProfile(slug: string) {
  // CLCB tem perfis dedicados — testa antes do AVCB pra nao cair no default
  if (slug.includes("clcb")) {
    if (slug.includes("restaurante") || slug.includes("bar") || slug.includes("padaria")) {
      return occupationProfiles.clcbAlimentacao;
    }
    if (slug.includes("clinica") || slug.includes("odontologica") || slug.includes("fisioterapia") || slug.includes("consultorio") || slug.includes("salao-beleza")) {
      return occupationProfiles.clcbSaude;
    }
    return occupationProfiles.clcbDefault;
  }
  // AVCB — perfis especificos
  if (slug.includes("condomínio") || slug.includes("condominio")) return occupationProfiles.condomínio;
  if (slug.includes("galpao") || slug.includes("industr")) return occupationProfiles.galpao;
  if (slug.includes("hotel") || slug.includes("pousada") || slug.includes("motel") || slug.includes("hostel")) return occupationProfiles.hotel;
  if (slug.includes("hospital") || slug.includes("casa-de-repouso")) return occupationProfiles.hospital;
  if (slug.includes("escola") || slug.includes("creche") || slug.includes("faculdade")) return occupationProfiles.escola;
  if (slug.includes("posto-combustivel") || slug.includes("posto-de-combustivel")) return occupationProfiles.posto;
  if (slug.includes("supermercado") || slug.includes("shopping")) return occupationProfiles.supermercado;
  if (slug.includes("escritorio") || slug.includes("comercial-escritorio")) return occupationProfiles.escritorio;
  if (slug.includes("restaurante") || slug.includes("bar")) return occupationProfiles.restaurante;
  return occupationProfiles.default;
}

function pickNeighborhoodContext(slug: string, zone?: string, profile?: string, avenues?: string) {
  const normalized = slug.replace(/^\/?avcb-/, "").replace(/^\/?renovacao-avcb-condominio-/, "").replace(/\/$/, "");
  return neighborhoodContext[normalized] ?? {
    station: `setor operacional do CBPMESP responsavel por ${zone || "São Paulo"}, com triagem pelo Via Fácil Bombeiros`,
    buildings: profile || "condomínios, comércio local, clínicas, escritorios e edificações de uso misto",
    references: avenues || "avenidas principais, polos comerciais e corredores de acesso do bairro",
    prazo: "30 a 60 dias em renovacoes simples; 60 a 120 dias quando ha adequação fisica, FAT ou Projeto Técnico de Substituicao",
  };
}

export function OccupationAuthorityBlock({ occupation, currentSlug }: OccupationAuthorityBlockProps) {
  const profile = pickOccupationProfile(currentSlug);

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <span className="text-red-600 font-black text-xs uppercase tracking-widest">Guia técnico de consulta</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 uppercase tracking-tighter">
              Exigencias do Bombeiro para {occupation}
            </h2>
            <div className="space-y-5 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
              <p>
                O enquadramento técnico não depende apenas do nome da atividade. O CBPMESP cruza área construida,
                altura, lotação, carga de incêndio e uso real da edificação para definir se o processo sera CLCB,
                Projeto Técnico Simplificado ou AVCB com vistoria. Para {occupation}, o grupo mais comum e {profile.group}.
              </p>
              <p>
                Na vistoria, os pontos mais sensiveis costumam ser {profile.risk}. Quando o levantamento identifica
                falha em rede hidraulica, alarme ou documentação, a regularização deve ser planejada antes do protocolo.
                Isso evita Comunique-se e reduz retrabalho em servicos como{" "}
                <Link href={profile.links[0].href} className="text-red-600 font-black underline">{profile.links[0].label}</Link>,{" "}
                <Link href={profile.links[1].href} className="text-red-600 font-black underline">{profile.links[1].label}</Link>{" "}
                e <Link href={profile.links[2].href} className="text-red-600 font-black underline">{profile.links[2].label}</Link>.
              </p>
              <p>
                Prazo medio real: {profile.prazo}. O prazo curto so acontece quando plantas, ARTs, notas de manutenção,
                laudos e sistemas fisicos batem entre si.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 text-white rounded-[2rem] p-8 shadow-xl">
            <h3 className="text-xl font-black uppercase italic mb-6">Tabela rapida por metragem</h3>
            <div className="space-y-4">
              {[
                ["Ate 750 m2", "Pode enquadrar como CLCB se não houver alto risco, subsolo complexo ou público elevado."],
                ["750 a 1.500 m2", "Exige análise de sistemas, lotação e saídas; muitos casos migram para Projeto Técnico."],
                ["Acima de 1.500 m2", "Normalmente exige projeto completo, ARTs, memoriais, vistoria e acompanhamento técnico."],
                ["Acima de 2.500 m2", "Avaliar hidrantes, alarme setorizado, controle de fumaca, sprinklers e brigada."],
              ].map(([area, desc]) => (
                <div key={area} className="flex gap-4 border border-white/10 rounded-2xl p-4 bg-white/5">
                  <FileCheck className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-sm uppercase">{area}</p>
                    <p className="text-xs text-slate-300 font-bold leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NeighborhoodAuthorityBlock({
  neighborhood,
  zone,
  profile,
  avenues,
  currentSlug,
}: NeighborhoodAuthorityBlockProps) {
  const context = pickNeighborhoodContext(currentSlug, zone, profile, avenues);

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <span className="text-red-600 font-black text-xs uppercase tracking-widest">Contexto local real</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-6 uppercase tracking-tighter">
              AVCB em {neighborhood}: pelotao, perfil urbano e prazo medio
            </h2>
            <div className="space-y-5 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
              <p>
                A página de {neighborhood} foi tratada como uma consulta local, não como troca automatica de nome.
                O atendimento operacional considera o {context.station}. No licenciamento, o protocolo passa pelo
                Via Fácil Bombeiros, mas a leitura técnica da vistoria muda conforme o tipo de edificação do entorno.
              </p>
              <p>
                Em {neighborhood}, os casos mais frequentes envolvem {context.buildings}. As referencias usadas para
                diagnóstico e deslocamento incluem {context.references}. Esse recorte importa porque uma torre na Berrini,
                um galpao na Radial Leste e um prédio antigo em rua residencial possuem riscos e documentos diferentes.
              </p>
              <p>
                Prazo medio observado: {context.prazo}. Antes do protocolo, a DRD2 confere área de IPTU, planta,
                uso real, carga de incêndio, ARTs, validade de manutencoes e pendencias de sistemas como{" "}
                <Link href="/hidrantes" className="text-red-600 font-black underline">hidrantes</Link>,{" "}
                <Link href="/alarme-incendio-sao-paulo" className="text-red-600 font-black underline">alarme de incêndio</Link>{" "}
                e <Link href="/spda" className="text-red-600 font-black underline">SPDA</Link>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
            {[
              { icon: MapPin, label: "Referencia regional", value: zone || "São Paulo" },
              { icon: ShieldCheck, label: "Análise técnica", value: "IT-02, IT-11, IT-16, IT-17, IT-20 e IT-41" },
              { icon: Clock, label: "Ponto critico", value: "Comunique-se por divergencia entre planta, área e sistemas instalados" },
              { icon: CheckCircle2, label: "Resultado esperado", value: "protocolo com documentos consistentes e menor risco de retrabalho" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex gap-4">
                <Icon className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
                  <p className="text-sm font-bold text-slate-700 leading-relaxed">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
