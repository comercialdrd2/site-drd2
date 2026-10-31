import { NextResponse, type NextRequest } from "next/server";
import index from "@/data/licenca-sanitaria/index.json";
import moved from "@/data/licenca-sanitaria/moved.json";
import { LS_HOST, LS_ORIGIN, LS_PREFIX } from "@/lib/licencaSanitariaHost";

// Seção DRD2 Licença Sanitária no subdomínio licencasanitaria.drd2.com.br.
// - No subdomínio: as páginas da seção são servidas a partir de /licenca-sanitaria (rewrite);
//   qualquer outra página vai para o www.drd2.com.br.
// - No www.drd2.com.br: /licenca-sanitaria/* redireciona (308) para o subdomínio.

const MAIN_HOSTS = new Set(["www.drd2.com.br", "drd2.com.br"]);
const SECTION_FIRST = new Set(
  (index as { segments: string[] }[]).map((e) => e.segments[0]).filter(Boolean) as string[],
);
const MOVED = moved as Record<string, string>;

function stripPrefix(pathname: string): string {
  if (pathname === LS_PREFIX) return "/";
  return pathname.slice(LS_PREFIX.length) || "/";
}

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").split(":")[0].toLowerCase();
  const { pathname, search } = req.nextUrl;
  const isPrefixed = pathname === LS_PREFIX || pathname.startsWith(LS_PREFIX + "/");

  if (host === LS_HOST) {
    if (isPrefixed) {
      return NextResponse.redirect(new URL(stripPrefix(pathname) + search, LS_ORIGIN), 308);
    }
    if (pathname === "/sitemap.xml" || pathname === "/robots.txt") {
      return NextResponse.rewrite(new URL(LS_PREFIX + pathname, req.url));
    }
    if (MOVED[pathname]) {
      return NextResponse.redirect(new URL(MOVED[pathname], LS_ORIGIN), 308);
    }
    const first = pathname.split("/")[1] || "";
    if (pathname === "/" || SECTION_FIRST.has(first)) {
      return NextResponse.rewrite(new URL(LS_PREFIX + (pathname === "/" ? "" : pathname) + search, req.url));
    }
    return NextResponse.redirect(new URL(pathname + search, "https://www.drd2.com.br"), 308);
  }

  if (MAIN_HOSTS.has(host) && isPrefixed) {
    const rest = stripPrefix(pathname);
    return NextResponse.redirect(new URL((MOVED[rest] || rest) + search, LS_ORIGIN), 308);
  }

  return NextResponse.next();
}

export const config = {
  // Ignora arquivos estáticos, imagens e a API (o formulário posta em /api/lead nos dois domínios).
  matcher: ["/((?!_next/|api/|images/|favicon|.*\\.(?:png|jpg|jpeg|webp|avif|gif|svg|ico|css|js|map|woff2?|pdf)$).*)"],
};
