import fs from "fs";
import path from "path";
import { blogPosts } from "@/data/blog";
import { servicesData } from "@/data/services";
import type { MetadataRoute } from "next";

// ============================================================================
// SITEMAP SEGMENTADO — Next 14 generateSitemaps
// ----------------------------------------------------------------------------
// Gera 3 sitemaps separados:
//   /sitemap/pages.xml         — paginas de servico, ocupacao, institucionais
//   /sitemap/neighborhoods.xml — todas as paginas com nome de bairro
//   /sitemap/blog.xml          — posts do blog
//
// O Google descobre tudo via /sitemap.xml index ou via /robots.txt.
// Segmentacao facilita auditar indexacao por categoria no Search Console.
// ============================================================================

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://www.drd2.com.br";
}

const APP_DIR = path.join(process.cwd(), "src", "app");
const MAIN_LAST_MOD = new Date("2026-05-14").toISOString();

const EXCLUDED_SEGMENTS = new Set([
  "__test__",
  "api",
  "icons_preview.html",
  // Páginas noindex (internas/pós-conversão) — fora do sitemap por coerência
  "mapa-paginas",
  "obrigado",
  "controle-paginas-site",
]);

const DYNAMIC_SEGMENTS = /\[[^\]]+\]/;

// Slugs que tem redirect 301 — nao incluir no sitemap
// ----------------------------------------------------------------------------
// Fontes de redirect 301 — nao entram no sitemap.
//
// Esta lista ERA escrita a mao e tinha saido de sincronia nos dois sentidos:
// continha 82 rotas que nunca foram redirect (e por isso sumiam do sitemap sem
// motivo, incluindo /avcb-sao-paulo, /clcb-sao-paulo, /hidrantes, /sprinklers)
// e nao continha as 13 que sao redirect de verdade.
//
// Agora e derivada do proprio next.config.mjs em tempo de build, entao nao tem
// como divergir de novo: mudou o redirect, mudou o sitemap junto.
// ----------------------------------------------------------------------------

// Usada so se a leitura do next.config.mjs falhar (ex.: arquivo fora do bundle).
// Sao as 13 fontes de redirect que tambem tem page.tsx — as unicas que podem
// aparecer no sitemap por engano.
const REDIRECT_SOURCES_FALLBACK = [
  "/avcb",
  "/avcb-bares-restaurantes-sao-paulo",
  "/avcb-condominio-sao-paulo",
  "/avcb-para-salao-de-festas-sao-paulo",
  "/avcb-preco",
  "/blog/avcb-vencido-o-que-fazer",
  "/projeto-escada-pressurizada-avcb",
  "/sistema-alarme-incendio-edificio-comercial-sp",
  "/sistema-alarme-incendio-galpao-industrial-avcb-sp",
  "/sistema-alarme-incendio-hospital-avcb-sp",
  "/sistema-hidrante-galpao-industrial-avcb-sp",
  "/sistema-hidrante-industria-quimica-sp",
  "/sistema-sprinkler-industria-quimica-sp",
];

function readRedirectSources(): Set<string> {
  try {
    const cfg = fs.readFileSync(path.join(process.cwd(), "next.config.mjs"), "utf8");
    const re = /source:\s*["'`]([^"'`]+)["'`]/g;
    const fontes: string[] = [];
    let m: RegExpExecArray | null;
    while ((m = re.exec(cfg)) !== null) fontes.push(m[1]);
    if (fontes.length > 0) return new Set(fontes);
  } catch {
    // arquivo indisponivel: cai no fallback abaixo
  }
  return new Set(REDIRECT_SOURCES_FALLBACK);
}

const REDIRECT_SOURCES = readRedirectSources();


// Heuristica: paginas cuja rota contem nome de bairro/cidade -> sitemap-neighborhoods
const NEIGHBORHOOD_KEYWORDS = [
  // SP capital
  "moema", "itaim-bibi", "brooklin", "campo-belo", "sacoma", "jabaquara", "saude",
  "santo-amaro", "morumbi", "vila-olimpia", "pinheiros", "vila-madalena", "perdizes",
  "lapa", "butanta", "barra-funda", "bela-vista", "centro", "consolacao", "jardins",
  "republica", "bom-retiro", "santa-cecilia", "higienopolis", "liberdade", "se",
  "cambuci", "ipiranga", "vila-mariana", "vila-clementino", "paraiso", "carrao",
  "santana", "tucuruvi", "casa-verde", "freguesia-do-o", "jacana", "limao", "tremembe",
  "mandaqui", "brasilandia", "pirituba", "tatuape", "mooca", "vila-prudente", "penha",
  "itaquera", "sapopemba", "vila-formosa", "vila-matilde", "agua-rasa", "bras", "belem",
  "ermelino-matarazzo", "cangaiba", "sao-mateus", "sao-miguel-paulista", "aricanduva",
  "vila-andrade", "interlagos", "campo-limpo", "capao-redondo", "rio-pequeno",
  "graja", "mboi-mirim", "cursino", "aclimacao", "pompeia", "comercio",
  "analia-franco", "agua-branca", "altos-de-santana", "chacara-klabin",
  "chacara-santo-antonio", "cidade-moncoes", "moema-indios", "moema-passaros",
  "vila-ipojuca", "vila-leopoldina", "vila-nova-conceicao", "vila-re",
  // ABC + entorno
  "santo-andre", "sao-bernardo", "sao-caetano", "diadema", "maua", "guarulhos",
  "osasco", "barueri", "alphaville", "carapicuiba", "taboao-da-serra",
  // Litoral
  "santos", "praia-grande", "guaruja", "sao-vicente", "bertioga", "itanhaem",
  "cubatao", "santos-aparecida", "santos-boqueirao", "santos-centro",
  "santos-embare", "santos-gonzaga", "santos-ponta-da-praia",
  // Interior
  "campinas", "sorocaba", "jundiai", "mogi-das-cruzes", "suzano", "poa",
  "sao-jose-dos-campos", "ribeirao-preto", "campo-grande",
  // Zonas SP
  "zona-sul", "zona-norte", "zona-leste", "zona-oeste", "zona-centro",
];

type PageEntry = { route: string; mtime: string };

function walkPages(dir: string, pages: PageEntry[] = []): PageEntry[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith("_")) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!EXCLUDED_SEGMENTS.has(entry.name)) walkPages(fullPath, pages);
      continue;
    }
    if (entry.isFile() && entry.name === "page.tsx") {
      const mtime = fs.statSync(fullPath).mtime.toISOString();
      pages.push({ route: routeFromPath(fullPath), mtime });
    }
  }
  return pages;
}

function routeFromPath(filePath: string) {
  const route = path.relative(APP_DIR, path.dirname(filePath)).replace(/\\/g, "/");
  if (!route || route === ".") return "/";
  return `/${route}`;
}

function isNeighborhood(route: string): boolean {
  return NEIGHBORHOOD_KEYWORDS.some((kw) => route.includes(kw));
}

function priorityFor(route: string) {
  if (route === "/") return 1;
  if (route.startsWith("/blog/")) {
    if (route === "/blog/quanto-custa-avcb-em-sao-paulo" || route === "/avcb-vencido-o-que-fazer") {
      return 0.75;
    }
    return 0.6;
  }
  if (
    route === "/avcb-sao-paulo" || route === "/renovacao-avcb" ||
    route === "/clcb-sao-paulo" || route === "/servicos" || route === "/sobre" ||
    route === "/empresa-avcb-sao-paulo" || route === "/engenheiro-avcb-sao-paulo" ||
    route === "/escada-pressurizada-sao-paulo"
  ) return 0.9;
  if (
    route.startsWith("/avcb-") || route.startsWith("/alvara-bombeiro-") ||
    route.startsWith("/renovacao-avcb-") || route.startsWith("/renovacao-clcb-") ||
    route.startsWith("/laudo-bombeiro-") || route.startsWith("/sistema-de-") ||
    route.includes("porta-corta-fogo") ||
    ["/hidrantes", "/sprinklers", "/spda", "/manutencao", "/projetos-incendio", "/treinamento-brigada"].includes(route)
  ) return 0.8;
  return 0.5;
}

function toEntry(baseUrl: string, route: string, lastModified: string): MetadataRoute.Sitemap[number] {
  const priority = priorityFor(route);
  return {
    url: route === "/" ? baseUrl : `${baseUrl}${route}`,
    lastModified,
    changeFrequency: priority >= 0.9 ? "weekly" : "monthly",
    priority,
  };
}

function getAllRoutesWithMtime(): Map<string, string> {
  const discovered = walkPages(APP_DIR)
    .filter((e) => !DYNAMIC_SEGMENTS.test(e.route))
    .filter((e) => !REDIRECT_SOURCES.has(e.route));

  const map = new Map<string, string>();
  for (const e of discovered) map.set(e.route, e.mtime);

  // Adiciona blog posts da data file (cobre os que nao tem pasta estatica)
  for (const post of blogPosts) {
    const route = `/blog/${post.slug}`;
    if (REDIRECT_SOURCES.has(route)) continue;
    if (!map.has(route)) {
      map.set(route, new Date(post.date).toISOString());
    }
  }

  // Adiciona páginas de serviços dinâmicas (que estavam ocultadas pelo filtro de DYNAMIC_SEGMENTS)
  for (const slug of Object.keys(servicesData)) {
    const route = `/servicos/${slug}`;
    if (REDIRECT_SOURCES.has(route)) continue;
    if (!map.has(route)) {
      map.set(route, MAIN_LAST_MOD);
    }
  }

  return map;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const allRoutes = getAllRoutesWithMtime();

  const all = Array.from(allRoutes.entries());

  all.sort(([a], [b]) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  return all.map(([route, mtime]) => toEntry(baseUrl, route, mtime || MAIN_LAST_MOD));
}
