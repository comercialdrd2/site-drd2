/**
 * Montagem dos e-mails de lead.
 *
 * Os dois formularios do site (LeadForm e ContactForm) coletam de onde o
 * visitante veio. Este modulo transforma esse dado em algo que o comercial
 * consiga ler sem interpretar endereco tecnico, e e usado pelas duas rotas
 * de e-mail para que a correcao nao precise ser feita em dois lugares.
 */

export type OriginFields = {
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  landingPage?: string;
  page?: string;
};

/** Impede que texto vindo do visitante quebre o HTML do e-mail. */
export function esc(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const labelCell = "padding:8px;border:1px solid #eee;font-weight:bold";
const valueCell = "padding:8px;border:1px solid #eee";

export function row(label: string, value: string) {
  return `<tr><td style="${labelCell}">${esc(label)}</td><td style="${valueCell}">${esc(value)}</td></tr>`;
}

/**
 * Traduz referrer + UTM numa frase direta: "Google — busca organica",
 * "Instagram", "Direto". E o unico campo que responde a pergunta
 * "de onde vem meu cliente".
 */
export function describeOrigin(referrer = "", utmSource = "", utmMedium = "") {
  const s = utmSource.toLowerCase();

  // Campanha marcada com UTM tem prioridade: foi definida por nos.
  if (s && s !== "organico/direto") {
    return utmMedium ? `${utmSource} (${utmMedium})` : utmSource;
  }

  const raw = referrer.trim();
  if (!raw || raw.toLowerCase() === "direto") {
    return "Direto — digitou o endereço, favoritos ou app de mensagem";
  }

  let host: string;
  try {
    host = new URL(raw).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return `Outro site: ${raw}`;
  }

  // Compara rotulo inteiro do dominio. Busca por trecho solto faria
  // "sindiconet.com.br" casar com "t.co" e virar Twitter.
  const from = (...domains: string[]) =>
    domains.some((d) =>
      new RegExp(`(^|\\.)${d.replace(/\./g, "\\.")}(\\.|$)`).test(host)
    );

  if (from("drd2.com.br")) return "Navegação dentro do próprio site";
  if (from("google")) return "Google — busca orgânica";
  if (from("bing")) return "Bing — busca";
  if (from("duckduckgo")) return "DuckDuckGo — busca";
  if (from("yahoo")) return "Yahoo — busca";
  if (from("instagram")) return "Instagram";
  if (from("facebook", "fb.com", "fb.me")) return "Facebook";
  if (from("linkedin", "lnkd.in")) return "LinkedIn";
  if (from("youtube", "youtu.be")) return "YouTube";
  if (from("whatsapp", "wa.me")) return "WhatsApp — link compartilhado";
  if (from("twitter", "x.com", "t.co")) return "X / Twitter";

  return `Outro site: ${host}`;
}

/** Versao curta para o assunto do e-mail: "Google", "Instagram", "Direto". */
export function originShort(referrer = "", utmSource = "", utmMedium = "") {
  return describeOrigin(referrer, utmSource, utmMedium).split(" — ")[0];
}

/** Faixa destacada no topo do e-mail com a origem do lead. */
export function originBanner(origin: string) {
  return `<p style="margin:0 0 18px;padding:12px 14px;background:#f2f6ff;border-left:4px solid #2f5bd7;font-size:15px">
      <strong>Veio de:</strong> ${esc(origin)}
    </p>`;
}

/** Tabela de apoio com o caminho completo que o visitante percorreu. */
export function originTable(fields: OriginFields) {
  const {
    referrer = "",
    utmSource = "",
    utmMedium = "",
    utmCampaign = "",
    utmTerm = "",
    landingPage = "",
    page = "",
  } = fields;

  const origin = describeOrigin(referrer, utmSource, utmMedium);

  return `<h3 style="margin:24px 0 8px;font-size:14px;color:#555">De onde veio este lead</h3>
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-size:13px;color:#444">
      ${row("Canal", origin)}
      ${page ? row("Página do formulário", page) : ""}
      ${landingPage ? row("Primeira página que abriu", landingPage) : ""}
      ${row("Site anterior (referrer)", referrer || "direto")}
      ${utmSource && utmSource !== "organico/direto" ? row("utm_source", utmSource) : ""}
      ${utmMedium ? row("utm_medium", utmMedium) : ""}
      ${utmCampaign ? row("utm_campaign", utmCampaign) : ""}
      ${utmTerm ? row("utm_term", utmTerm) : ""}
    </table>`;
}
