import Link from "next/link";
import { ArrowRight, Building2, ShieldAlert, Wallet } from "lucide-react";

type BlogStrategicLinksProps = {
  currentSlug: string;
  relatedServiceSlug?: string;
};

type LinkKind = "custo" | "dor" | "ocupacao";

type StrategicLink = {
  href: string;
  label: string;
  context: string;
  kind: LinkKind;
};

const recurringCostLink: StrategicLink = {
  href: "/quanto-custa-avcb-sao-paulo",
  label: "Quanto custa o AVCB em São Paulo",
  context: "link recorrente para custo, orçamento, prazos e investimento de regularização",
  kind: "custo",
};

const gasCostLink: StrategicLink = {
  href: "/blog/quanto-custa-teste-de-estanqueidade-de-gas",
  label: "Quanto custa teste de estanqueidade de gás",
  context: "link recorrente para custo de laudo de gás, ART, GLP, GN, condomínio e restaurante",
  kind: "custo",
};

const ptotepCostLink: StrategicLink = {
  href: "/quanto-custa-ptotep",
  label: "Quanto custa PTOTEP",
  context: "link recorrente para custo, prazo, documentos e escopo tecnico de evento temporario",
  kind: "custo",
};

const ptotepDocsLink: StrategicLink = {
  href: "/documentos-necessarios-ptotep",
  label: "Documentos para PTOTEP",
  context: "ocupacao temporaria: checklist de layout, ART, memorial, eletrica, GLP, gerador e fornecedores",
  kind: "ocupacao",
};

const painLinks: Array<{ match: RegExp; link: StrategicLink }> = [
  {
    match: /ptotep|ocupacao-temporaria|evento|feira|show|festival|exposicao/,
    link: {
      href: "/ptotep",
      label: "PTOTEP para eventos temporarios",
      context: "dor principal: regularizar a ocupacao temporaria sem travar montagem, data e operacao do evento",
      kind: "dor",
    },
  },
  {
    match: /estanqueidade|gas|gás|glp|gn|vazamento|central-de-gas|central-de-gás/,
    link: {
      href: "/blog/vazamento-de-gas-em-predios-causas-como-evitar",
      label: "Risco de vazamento de gás",
      context: "dor principal: evitar explosão, acidente, interdição e responsabilidade jurídica",
      kind: "dor",
    },
  },
  {
    match: /vencido|interdicao|interdição|renovacao|renovação/,
    link: {
      href: "/renovacao-avcb",
      label: "AVCB vencido ou perto de vencer",
      context: "dor principal: evitar multa, exigência, bloqueio de licença e interdição",
      kind: "dor",
    },
  },
  {
    match: /clcb|baixo-risco|baixo risco/,
    link: {
      href: "/clcb-sao-paulo",
      label: "CLCB em São Paulo",
      context: "dor principal: enquadrar corretamente o certificado simplificado no Corpo de Bombeiros",
      kind: "dor",
    },
  },
  {
    match: /vistoria|erros|aprovacao|aprovação|comunique/,
    link: {
      href: "/avcb-sao-paulo",
      label: "Aprovação no Corpo de Bombeiros",
      context: "dor principal: reduzir risco de reprovação, comunique-se e retrabalho",
      kind: "dor",
    },
  },
  {
    match: /prazo|tempo|emitir|emissao|emissão/,
    link: {
      href: "/avcb-sao-paulo",
      label: "Emissão de AVCB sem atrasos",
      context: "dor principal: organizar documentação, vistoria e protocolo dentro do prazo",
      kind: "dor",
    },
  },
  {
    match: /alarme/,
    link: {
      href: "/alarme-incendio-sao-paulo",
      label: "Sistema de alarme exigido no AVCB",
      context: "dor principal: corrigir exigência de alarme, detecção e sinalização",
      kind: "dor",
    },
  },
  {
    match: /sprinkler|chuveiro/,
    link: {
      href: "/sprinklers",
      label: "Sprinklers obrigatórios para AVCB",
      context: "dor principal: atender exigência de proteção automática e seguradora",
      kind: "dor",
    },
  },
  {
    match: /hidrante/,
    link: {
      href: "/hidrantes",
      label: "Sistema de hidrantes para AVCB",
      context: "dor principal: corrigir pressão, vazão, RTI e documentação técnica",
      kind: "dor",
    },
  },
];

const defaultPainLink: StrategicLink = {
  href: "/avcb-sao-paulo",
  label: "Regularização de AVCB em São Paulo",
  context: "dor principal: regularizar o imóvel com engenheiro responsável e aprovação técnica",
  kind: "dor",
};

const occupationLinks: Record<string, StrategicLink> = {
  "ptotep": {
    href: "/ptotep",
    label: "PTOTEP para eventos",
    context: "ocupacao temporaria: feira, show, exposicao, evento corporativo, shopping e montagem provisoria",
    kind: "ocupacao",
  },
  "avcb-para-casa-de-repouso-sao-paulo": {
    href: "/avcb-para-casa-de-repouso-sao-paulo",
    label: "AVCB para casa de repouso",
    context: "ocupação específica: ILPI, rotas de fuga, idosos, laudos e exigências de segurança",
    kind: "ocupacao",
  },
  "avcb-restaurante-sao-paulo": {
    href: "/avcb-restaurante-sao-paulo",
    label: "AVCB para restaurante",
    context: "ocupação específica: cozinha, GLP, coifa, exaustão e Vigilância Sanitária",
    kind: "ocupacao",
  },
  "avcb-galpao-industrial-sao-paulo": {
    href: "/avcb-galpao-industrial-sao-paulo",
    label: "AVCB para galpão industrial",
    context: "ocupação específica: carga de incêndio, hidrantes, sinalização e projeto técnico",
    kind: "ocupacao",
  },
  "avcb-hospital-clinica-sao-paulo": {
    href: "/avcb-hospital-clinica-sao-paulo",
    label: "AVCB para clínica e hospital",
    context: "ocupação específica: saúde, pacientes, áreas técnicas e exigências de evacuação",
    kind: "ocupacao",
  },
  "avcb-condominio-sao-paulo": {
    href: "/avcb-condominio-sao-paulo",
    label: "AVCB para condomínio",
    context: "ocupação específica: síndico, assembleia, áreas comuns e responsabilidade civil",
    kind: "ocupacao",
  },
  "avcb-comercial-escritorio-sao-paulo": {
    href: "/avcb-comercial-escritorio-sao-paulo",
    label: "AVCB para comércio e escritório",
    context: "ocupação específica: lojas, salas comerciais, contratos de locação e licença de funcionamento",
    kind: "ocupacao",
  },
  "avcb-para-escola-sao-paulo": {
    href: "/avcb-para-escola-sao-paulo",
    label: "AVCB para escola",
    context: "ocupação específica: alunos, brigada, rotas de fuga e plano de abandono",
    kind: "ocupacao",
  },
  "avcb-para-creche-sao-paulo": {
    href: "/avcb-para-creche-sao-paulo",
    label: "AVCB para creche",
    context: "ocupação específica: crianças, saídas de emergência, sinalização e aprovação dos Bombeiros",
    kind: "ocupacao",
  },
  "clcb-sao-paulo": {
    href: "/clcb-sao-paulo",
    label: "CLCB para baixo risco",
    context: "ocupação específica: imóveis de baixo risco que podem emitir certificado simplificado",
    kind: "ocupacao",
  },
  "renovacao-avcb": {
    href: "/renovacao-avcb",
    label: "Renovação de AVCB",
    context: "ocupação específica: imóveis já regularizados que precisam manter o certificado válido",
    kind: "ocupacao",
  },
  "avcb-sao-paulo": {
    href: "/avcb-condominio-sao-paulo",
    label: "AVCB para condomínio",
    context: "ocupação específica: edifícios com cobrança recorrente de fiscalização e seguro",
    kind: "ocupacao",
  },
  "avcb-preco": {
    href: "/avcb-comercial-escritorio-sao-paulo",
    label: "AVCB para comércio e escritório",
    context: "ocupação específica: imóveis comerciais que precisam estimar custo e regularização",
    kind: "ocupacao",
  },
  "alarme-de-incendio-escola-faculdade-sp": {
    href: "/alarme-de-incendio-escola-faculdade-sp",
    label: "Alarme de incêndio para escola",
    context: "ocupação específica: ensino, evacuação, sinalização sonora e exigências técnicas",
    kind: "ocupacao",
  },
  "alarme-de-incendio-comercial-escritorio-sp": {
    href: "/alarme-de-incendio-comercial-escritorio-sp",
    label: "Alarme para comércio e escritório",
    context: "ocupação específica: lojas, salas, pavimentos e adequação para vistoria",
    kind: "ocupacao",
  },
  "alarme-de-incendio-hospital-clinica-sp": {
    href: "/alarme-de-incendio-hospital-clinica-sp",
    label: "Alarme para clínica e hospital",
    context: "ocupação específica: áreas assistenciais, aviso sonoro e evacuação assistida",
    kind: "ocupacao",
  },
  "alarme-de-incendio-galpao-industrial-sp": {
    href: "/alarme-de-incendio-galpao-industrial-sp",
    label: "Alarme para galpão industrial",
    context: "ocupação específica: indústria, estoque, produção e acionadores manuais",
    kind: "ocupacao",
  },
  "alarme-de-incendio-para-condominio-sao-paulo": {
    href: "/alarme-de-incendio-para-condominio-sao-paulo",
    label: "Alarme para condomínio",
    context: "ocupação específica: síndico, áreas comuns, central de alarme e manutenção preventiva",
    kind: "ocupacao",
  },
  "chuveiro-automatico-sprinkler-sao-paulo": {
    href: "/sprinklers",
    label: "Sprinklers para ocupações exigidas",
    context: "ocupação específica: risco elevado, proteção automática e aprovação técnica",
    kind: "ocupacao",
  },
  "laudo-estanqueidade-gas-sao-paulo": {
    href: "/laudo-estanqueidade-gas-sao-paulo",
    label: "Laudo de estanqueidade de gás",
    context: "tema específico: teste de gás GLP/GN, laudo técnico, ART, condomínios e restaurantes",
    kind: "ocupacao",
  },
};

const occupationFallbacks: Array<{ match: RegExp; link: StrategicLink }> = [
  { match: /ptotep|ocupacao-temporaria|evento|feira|show|festival|exposicao/, link: occupationLinks["ptotep"] },
  { match: /estanqueidade|gas|gás|glp|gn|central-de-gas|central-de-gás/, link: occupationLinks["laudo-estanqueidade-gas-sao-paulo"] },
  { match: /restaurante|cozinha|glp/, link: occupationLinks["avcb-restaurante-sao-paulo"] },
  { match: /galpao|galpão|industrial|industria|indústria/, link: occupationLinks["avcb-galpao-industrial-sao-paulo"] },
  { match: /clinica|clínica|hospital|saude|saúde/, link: occupationLinks["avcb-hospital-clinica-sao-paulo"] },
  { match: /escola|faculdade/, link: occupationLinks["avcb-para-escola-sao-paulo"] },
  { match: /creche/, link: occupationLinks["avcb-para-creche-sao-paulo"] },
  { match: /condominio|condomínio|sindico|síndico/, link: occupationLinks["avcb-condominio-sao-paulo"] },
  { match: /comercio|comércio|escritorio|escritório|inquilino|proprietario|proprietário/, link: occupationLinks["avcb-comercial-escritorio-sao-paulo"] },
  { match: /casa-de-repouso|repouso|ilpi/, link: occupationLinks["avcb-para-casa-de-repouso-sao-paulo"] },
  { match: /clcb/, link: occupationLinks["clcb-sao-paulo"] },
];

const defaultOccupationLink = occupationLinks["avcb-condominio-sao-paulo"];

const iconByKind = {
  custo: Wallet,
  dor: ShieldAlert,
  ocupacao: Building2,
};

function normalizeSlug(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function getPainLink(currentSlug: string) {
  const normalizedSlug = normalizeSlug(currentSlug);
  return painLinks.find(({ match }) => match.test(normalizedSlug))?.link ?? defaultPainLink;
}

function getOccupationLink(currentSlug: string, relatedServiceSlug?: string) {
  if (relatedServiceSlug && occupationLinks[relatedServiceSlug]) {
    return occupationLinks[relatedServiceSlug];
  }

  const normalizedSlug = normalizeSlug(currentSlug);
  return occupationFallbacks.find(({ match }) => match.test(normalizedSlug))?.link ?? defaultOccupationLink;
}

function buildStrategicLinks(currentSlug: string, relatedServiceSlug?: string) {
  const normalizedSlug = normalizeSlug(currentSlug);
  const cost = /estanqueidade|gas|gás|glp|gn|central-de-gas|central-de-gás/.test(normalizedSlug) || relatedServiceSlug === "laudo-estanqueidade-gas-sao-paulo"
    ? gasCostLink
    : recurringCostLink;
  const contextualCost =
    /ptotep|ocupacao-temporaria|evento|feira|show|festival|exposicao/.test(normalizedSlug) || relatedServiceSlug === "ptotep"
      ? ptotepCostLink
      : cost;
  const isPtotepContext =
    /ptotep|ocupacao-temporaria|evento|feira|show|festival|exposicao/.test(normalizedSlug) || relatedServiceSlug === "ptotep";
  const selected = [
    contextualCost,
    getPainLink(currentSlug),
    isPtotepContext ? ptotepDocsLink : getOccupationLink(currentSlug, relatedServiceSlug),
  ];
  const seen = new Set<string>([currentSlug]);
  const alternates = [
    defaultPainLink,
    occupationLinks["avcb-comercial-escritorio-sao-paulo"],
    defaultOccupationLink,
  ];

  return [...selected, ...alternates].filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  }).slice(0, 3);
}

export default function BlogStrategicLinks({ currentSlug, relatedServiceSlug }: BlogStrategicLinksProps) {
  const links = buildStrategicLinks(currentSlug, relatedServiceSlug);

  return (
    <section className="py-16 bg-slate-950 text-white border-y border-slate-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <p className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em] mb-3">
            Próximo passo técnico
          </p>
          <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-none">
            Links internos que levam para orçamento
          </h2>
          <p className="mt-3 text-slate-400 text-sm font-medium leading-relaxed max-w-2xl">
            Cada artigo direciona autoridade para uma página de custo, uma dor de regularização e uma ocupação específica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {links.map((link) => {
            const Icon = iconByKind[link.kind];
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/60 rounded-2xl p-5 flex flex-col gap-3 transition-all"
              >
                <span className="w-10 h-10 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <div className="flex-1">
                  <span className="block text-white font-black uppercase italic tracking-tight leading-snug text-sm">
                    {link.label}
                  </span>
                  <span className="block mt-2 text-xs text-slate-400 font-medium leading-relaxed">
                    {link.context}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-red-500 text-xs font-bold uppercase tracking-wide group-hover:gap-2 transition-all">
                  Ver mais <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
