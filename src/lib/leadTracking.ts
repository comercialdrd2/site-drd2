export type LeadTrackingContext = {
  páginaEntrada: string;
  urlAtual: string;
  caminho: string;
  tituloPagina: string;
  referrer: string;
  origem: string;
  midia: string;
  campanha: string;
  termo: string;
  conteudo: string;
  tipoPagina: string;
  segmentoProvavel: string;
};

function inferPageType(pathname: string) {
  if (pathname.startsWith("/blog/")) return "blog/artigo";
  if (pathname.includes("quanto-custa") || pathname.includes("preco")) return "preco/orcamento";
  if (pathname.includes("renovacao")) return "renovacao";
  if (pathname.includes("avcb-")) return "servico-avcb";
  if (pathname.includes("clcb")) return "servico-clcb";
  if (pathname.includes("hidrante")) return "sistema-hidrante";
  if (pathname.includes("sprinkler")) return "sistema-sprinkler";
  if (pathname.includes("alarme")) return "sistema-alarme";
  if (pathname.includes("spda")) return "sistema-spda";
  if (pathname.includes("brigada")) return "brigada";
  return "institucional/servico";
}

function inferSegment(pathname: string) {
  const rules = [
    ["condomínio", "condomínio"],
    ["galpao", "galpao/industria/logistica"],
    ["indústria", "indústria"],
    ["hospital", "hospital/clínica"],
    ["clínica", "hospital/clínica"],
    ["restaurante", "bar/restaurante"],
    ["bares", "bar/restaurante"],
    ["shopping", "shopping/varejo"],
    ["supermercado", "supermercado/varejo"],
    ["hotel", "hotel/hospitalidade"],
    ["pousada", "hotel/hospitalidade"],
    ["escola", "escola/faculdade"],
    ["creche", "creche/escola infantil"],
    ["posto-combustivel", "posto de combustivel"],
    ["escritorio", "escritorio/comercial"],
    ["zona-sul", "regiao zona sul"],
    ["zona-leste", "regiao zona leste"],
    ["zona-oeste", "regiao zona oeste"],
    ["zona-norte", "regiao zona norte"],
  ] as const;

  return rules.find(([token]) => pathname.includes(token))?.[1] || "não identificado";
}

function cleanPageTitle(title: string) {
  return title
    .replace(/\s*\|\s*DRD2.*$/i, "")
    .replace(/\s*-\s*DRD2.*$/i, "")
    .trim();
}

export function getLeadTrackingContext(): LeadTrackingContext {
  if (typeof window === "undefined") {
    return {
      páginaEntrada: "",
      urlAtual: "",
      caminho: "",
      tituloPagina: "",
      referrer: "",
      origem: "",
      midia: "",
      campanha: "",
      termo: "",
      conteudo: "",
      tipoPagina: "",
      segmentoProvavel: "",
    };
  }

  const params = new URLSearchParams(window.location.search);
  const firstLandingPage = window.sessionStorage.getItem("drd2_landing_page") || window.location.href;
  window.sessionStorage.setItem("drd2_landing_page", firstLandingPage);

  return {
    páginaEntrada: firstLandingPage,
    urlAtual: window.location.href,
    caminho: window.location.pathname,
    tituloPagina: document.title || "",
    referrer: document.referrer || "direto",
    origem: params.get("utm_source") || "organico/direto",
    midia: params.get("utm_medium") || "",
    campanha: params.get("utm_campaign") || "",
    termo: params.get("utm_term") || "",
    conteudo: params.get("utm_content") || "",
    tipoPagina: inferPageType(window.location.pathname),
    segmentoProvavel: inferSegment(window.location.pathname),
  };
}

/**
 * Detecta o "assunto" da pagina pra montar mensagem coerente no WhatsApp.
 * Retorna AVCB, CLCB, PTOTEP, etc baseado na URL.
 */
function inferSubject(pathname: string): string {
  const p = pathname.toLowerCase();
  if (p.includes("renovacao-clcb") || (p.includes("clcb") && !p.includes("avcb"))) return "CLCB";
  if (p.includes("ptotep") || p.includes("evento")) return "PTOTEP (projeto para evento)";
  if (p.includes("sprinkler")) return "sistema de sprinklers";
  if (p.includes("hidrante")) return "sistema de hidrantes";
  if (p.includes("alarme")) return "sistema de alarme de incêndio";
  if (p.includes("spda") || p.includes("para-raios")) return "SPDA (para-raios)";
  if (p.includes("escada-pressurizada")) return "escada pressurizada";
  if (p.includes("porta-corta-fogo")) return "porta corta-fogo";
  if (p.includes("brigada")) return "brigada de incêndio";
  if (p.includes("estanqueidade") || p.includes("gas")) return "laudo de estanqueidade de gás";
  return "AVCB";
}

export function buildStrategicWhatsAppIntent(fallbackSubject = "regularização junto ao Corpo de Bombeiros") {
  const tracking = getLeadTrackingContext();
  const pageSubject = cleanPageTitle(tracking.tituloPagina) || fallbackSubject;
  const subject = inferSubject(tracking.caminho);

  return `Olá, vim pela página ${pageSubject}. Preciso verificar custo e prazo de ${subject}.`;
}

/**
 * Retorna o texto do CTA do WhatsApp baseado na intencao da pagina.
 * Cada tipo de pagina retorna um CTA especifico — nao usa "Renovar AVCB"
 * generico em paginas de CLCB, sprinkler, hidrante, etc.
 */
export function getIntentCtaLabel(pathname?: string) {
  const path = (pathname || (typeof window !== "undefined" ? window.location.pathname : "")).toLowerCase();

  // 1) URGENCIA — situacoes de risco imediato
  if (path.includes("vencido") || path.includes("multa") || path.includes("interdicao") || path.includes("interdição") || path.includes("embargo") || path.includes("urgente")) {
    return "Evitar multa/interdição";
  }

  // 2) PRECO — distingue AVCB vs CLCB vs PTOTEP
  if (path.includes("quanto-custa") || path.includes("preco") || path.includes("preço")) {
    if (path.includes("clcb")) return "Ver custo do CLCB";
    if (path.includes("ptotep")) return "Ver custo do PTOTEP";
    if (path.includes("gas") || path.includes("estanqueidade")) return "Ver custo do laudo de gás";
    if (path.includes("sprinkler")) return "Ver custo do sprinkler";
    if (path.includes("hidrante")) return "Ver custo do hidrante";
    if (path.includes("escada-pressurizada")) return "Ver custo da escada pressurizada";
    if (path.includes("brigada")) return "Ver custo da brigada";
    return "Ver custo do AVCB";
  }

  // 3) RENOVACAO — distingue AVCB vs CLCB
  if (path.includes("renovacao") || path.includes("renovação")) {
    if (path.includes("clcb")) return "Renovar CLCB agora";
    return "Renovar AVCB agora";
  }

  // 4) PAGINAS PILLAR CLCB (sem renovacao)
  if (path.includes("clcb") && !path.includes("avcb")) {
    return "Solicitar CLCB";
  }

  // 5) PTOTEP / EVENTOS
  if (path.includes("ptotep") || path.includes("evento")) {
    return "Regularizar meu evento";
  }

  // 6) SISTEMAS TECNICOS — cada um com CTA proprio
  if (path.includes("sprinkler")) return "Instalar sprinkler";
  if (path.includes("hidrante") || path === "/hidrantes") return "Instalar hidrante";
  if (path.includes("alarme")) return "Instalar alarme de incêndio";
  if (path.includes("spda") || path.includes("para-raios")) return "Instalar SPDA";
  if (path.includes("escada-pressurizada")) return "Instalar escada pressurizada";
  if (path.includes("porta-corta-fogo")) return "Adequar porta corta-fogo";
  if (path.includes("brigada") || path.includes("treinamento")) return "Solicitar treinamento";
  if (path.includes("estanqueidade") || (path.includes("gas") && !path.includes("galpao"))) return "Solicitar laudo de gás";

  // 7) OCUPACOES — paginas por tipo de imovel (AVCB ou variantes)
  if (
    path.includes("avcb-para") ||
    path.includes("alvara-bombeiro") ||
    path.includes("laudo-bombeiro") ||
    path.includes("condominio") ||
    path.includes("restaurante") ||
    path.includes("galpao") ||
    path.includes("clinica") ||
    path.includes("hospital") ||
    path.includes("escola") ||
    path.includes("farmacia") ||
    path.includes("shopping") ||
    path.includes("supermercado") ||
    path.includes("padaria") ||
    path.includes("posto-combustivel") ||
    path.includes("igreja") ||
    path.includes("hotel") ||
    path.includes("pousada") ||
    path.includes("escritorio") ||
    path.includes("salao-de-festas")
  ) {
    return "Regularizar meu imóvel";
  }

  // 8) PAGINAS INSTITUCIONAIS
  if (path === "/sobre" || path.startsWith("/sobre/")) return "Falar com engenheiro";
  if (path === "/contato" || path.startsWith("/contato/")) return "Falar agora pelo WhatsApp";
  if (path.startsWith("/blog/") || path === "/blog") return "Tirar dúvida com engenheiro";

  // 9) FALLBACK
  return "Falar com engenheiro especialista";
}

export function buildWhatsAppMessage(intent: string) {
  const tracking = getLeadTrackingContext();

  return [
    intent,
    "",
    `[Rastreamento do lead]`,
    `Pagina atual: ${tracking.caminho}`,
    `Titulo: ${tracking.tituloPagina}`,
    `URL atual: ${tracking.urlAtual}`,
    `Pagina de entrada: ${tracking.páginaEntrada}`,
    `Origem: ${tracking.origem}`,
    tracking.midia ? `Midia: ${tracking.midia}` : "",
    tracking.campanha ? `Campanha: ${tracking.campanha}` : "",
    tracking.termo ? `Palavra-chave/termo: ${tracking.termo}` : "",
    tracking.conteudo ? `Conteudo: ${tracking.conteudo}` : "",
    `Referrer: ${tracking.referrer}`,
    `Tipo de página: ${tracking.tipoPagina}`,
    `Segmento provavel: ${tracking.segmentoProvavel}`,
  ].filter(Boolean).join("\n");
}
