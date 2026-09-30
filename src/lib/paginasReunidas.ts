import lista from "@/data/paginasLocaisReunidas.json";

// Páginas de bairro reunidas em 30/09/2026 na página da zona ou do serviço
// (redirecionamento 308 em next.config.mjs). Links internos não devem apontar
// para elas; use estas funções para filtrar listas geradas a partir dos dados.
const REUNIDAS = new Set<string>(lista as string[]);

export function foiReunida(href?: string | null): boolean {
  if (!href) return false;
  return REUNIDAS.has(href.split(/[?#]/)[0]);
}
