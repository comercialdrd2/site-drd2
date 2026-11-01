import index from "@/data/licenca-sanitaria/index.json";
import { LS_ORIGIN, lsPublicPath } from "@/lib/licencaSanitariaHost";

export const dynamic = "force-static";

export function GET() {
  const urls = (index as { path: string }[])
    .map((e) => `<url><loc>${LS_ORIGIN}${lsPublicPath(e.path)}</loc><lastmod>2026-10-31</lastmod></url>`)
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
