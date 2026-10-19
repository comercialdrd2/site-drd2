import bairros3009 from "@/data/paginasLocaisReunidas.json";
import etapa2 from "@/data/paginasReunidasEtapa2.json";

// Páginas que deixaram de existir porque entraram em outra (redirecionamento 308
// em next.config.mjs):
// - 30/09/2026: páginas de bairro reunidas na página da zona ou do serviço;
// - 19/10/2026: etapa 2 da fusão, lote A (páginas por cidade e por tipo de imóvel).
// Links internos não devem apontar para elas; use estas funções para filtrar
// listas geradas a partir dos dados.
const REUNIDAS = new Set<string>([...(bairros3009 as string[]), ...(etapa2 as string[])]);

export function foiReunida(href?: string | null): boolean {
  if (!href) return false;
  return REUNIDAS.has(href.split(/[?#]/)[0]);
}
