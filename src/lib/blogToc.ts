/**
 * Server-side: parseia o HTML do post, atribui IDs aos H2 e devolve
 * o HTML modificado + lista de entradas do sumario.
 *
 * Roda em build/SSR sem dependencias de DOM (regex em string).
 */

export type TocEntry = { id: string; text: string };

// Combining diacritical marks (U+0300..U+036F) — Unicode escape para portabilidade
const DIACRITICS = /[̀-ͯ]/g;

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(DIACRITICS, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

export function processBlogContent(html: string): { html: string; toc: TocEntry[] } {
  const toc: TocEntry[] = [];
  const seen = new Map<string, number>();

  const processed = html.replace(/<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/gi, (_match, attrs, inner) => {
    // se ja tem id, usa
    const existingId = attrs && /\bid=["']([^"']+)["']/.exec(attrs)?.[1];
    const baseId = existingId || slugify(inner);
    if (!baseId) return `<h2${attrs || ""}>${inner}</h2>`;

    // garante unicidade
    const count = seen.get(baseId) ?? 0;
    seen.set(baseId, count + 1);
    const finalId = count === 0 ? baseId : `${baseId}-${count + 1}`;

    toc.push({ id: finalId, text: inner.replace(/<[^>]+>/g, "").trim() });

    const newAttrs = existingId
      ? (attrs || "").replace(/\bid=["'][^"']+["']/, `id="${finalId}"`)
      : `${attrs || ""} id="${finalId}"`;
    return `<h2${newAttrs}>${inner}</h2>`;
  });

  return { html: processed, toc };
}
