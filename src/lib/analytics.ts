/**
 * Helper unificado de tracking GA4.
 *
 * - Roda apenas no client (checa typeof window).
 * - No-op silencioso se o GA4 nao estiver instalado (sem env NEXT_PUBLIC_GA_ID
 *   ou se o script ainda nao terminou de carregar).
 * - Tipagem segura: aceita params dinamicos sem precisar declarar global window.gtag.
 */

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Envia um evento ao GA4. Se o gtag nao existir (env nao setada ou script
 * ainda nao carregou), empurra no dataLayer mesmo assim — o GA4 processa
 * a fila quando o script terminar de carregar.
 */
export function trackEvent(eventName: string, params: GtagParams = {}) {
  if (typeof window === "undefined") return;

  // dataLayer e idempotente — se nao existir, cria
  window.dataLayer = window.dataLayer || [];

  // sempre empurra no dataLayer (GA4 processa quando carregar)
  window.dataLayer.push({
    event: eventName,
    ...params,
  });

  // se gtag ja existe, chama tambem (envio imediato)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

// Helpers nomeados pros eventos principais — assim e mais facil padronizar.

export function trackLeadSubmit(context: {
  source?: string; // de onde veio o lead (slug da pagina)
  intent?: string; // intencao detectada (avcb, clcb, renovacao, etc)
  occupation?: string; // tipo de ocupacao
}) {
  trackEvent("lead_form_submit", {
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
    source: context.source,
    intent: context.intent,
    occupation: context.occupation,
  });
}

export function trackWhatsAppClick(context: {
  source: "floating_button" | "hero_cta" | "post_cta" | "service_cta" | "footer_cta";
  page_path?: string;
}) {
  trackEvent("whatsapp_click", {
    page_path: context.page_path || (typeof window !== "undefined" ? window.location.pathname : undefined),
    source: context.source,
  });
}

export function trackScrollDepth(percent: 25 | 50 | 75 | 100) {
  trackEvent("scroll_depth", {
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
    percent,
  });
}
