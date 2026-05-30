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
  return process.env.NEXT_PUBLIC_SITE_URL || "https://drd2engenharia.com.br";
}

const APP_DIR = path.join(process.cwd(), "src", "app");
const MAIN_LAST_MOD = new Date("2026-05-14").toISOString();

const EXCLUDED_SEGMENTS = new Set([
  "__test__",
  "api",
  "icons_preview.html",
]);

const DYNAMIC_SEGMENTS = /\[[^\]]+\]/;

// Slugs que tem redirect 301 — nao incluir no sitemap
const REDIRECT_SOURCES = new Set([
  "/avcb",
  "/avcb-preco",
  "/avcb-condominio-sao-paulo",
  "/sistema-hidrante-edificio-residencial-avcb-sp",
  "/sistema-hidrante-galpao-industrial-avcb-sp",
  "/sistema-alarme-incendio-galpao-industrial-avcb-sp",
  "/sistema-alarme-incendio-hospital-avcb-sp",
  "/sistema-alarme-incendio-edificio-comercial-sp",
  "/projeto-escada-pressurizada-avcb",
  "/sistema-hidrante-industria-quimica-sp",
  "/sistema-sprinkler-industria-quimica-sp",
  "/avcb-bares-restaurantes-sao-paulo",
  "/avcb-para-bar-sao-paulo",
  "/avcb-bar-sao-paulo",
  "/avcb-pousada-sao-paulo",
  "/avcb-para-pousada-sao-paulo",
  "/avcb-escola-faculdade-sao-paulo",
  "/avcb-para-salao-de-festas-sao-paulo",
  "/avcb-para-farmacia-sao-paulo",
  "/avcb-para-drogaria-sao-paulo",
  "/avcb-para-boate-sao-paulo",
  "/avcb-para-casa-noturna-sao-paulo",
  "/avcb-para-bar-com-show-sao-paulo",
  "/avcb-para-clínica-odontologica-sao-paulo",
  "/avcb-bar-adega-sao-paulo",
  "/avcb-hotel-sao-paulo",
  "/brigada",
  // Blog redirects (canibalizacao consolidada)
  "/blog/quanto-tempo-demora-para-emitir-o-avcb-sp",
  "/blog/avcb-vencido-o-que-fazer-evitar-interdicao",
  "/blog/quanto-custa-avcb-sp-precos-prazos",
  "/blog/diferenca-entre-avcb-e-clcb-em-sao-paulo",
  "/blog/avcb-x-clcb-diferenca-na-pratica",
  "/blog/sprinkler-obrigatorio-sp",
  "/blog/o-que-e-avcb-e-quando-ele-e-obrigatorio",
  "/blog/avcb-restaurante-sao-paulo",
  // Serviços legados com redirect 301 (sincronizar com next.config.mjs)
  "/servicos/chuveiro-automatico-sprinkler-sao-paulo",
  "/servicos/instalacao-hidrante-sao-paulo",
  "/servicos/spda-para-raios-sao-paulo",
  "/servicos/manutencao-sistemas-incendio",
  "/servicos/projetos-seguranca-incendio",
  "/servicos/clcb-sao-paulo",
  "/servicos/avcb-sao-paulo",
  "/servicos/avcb-bares-restaurantes-sao-paulo",
  "/servicos/avcb-pousada-sao-paulo",
  "/servicos/avcb-escola-faculdade-sao-paulo",
  "/servicos/avcb-para-drogaria-sao-paulo",
  "/servicos/avcb-para-casa-noturna-sao-paulo",
  "/servicos/avcb-para-bar-com-show-sao-paulo",
  "/servicos/avcb-hoteis-pousadas-sao-paulo",
  // Blog noindex (posts thin <300 palavras — sincronizar com NOINDEX_BLOG_SLUGS no [slug]/page.tsx)
  // Blog posts canibalizando páginas de serviço
  "/blog/como-regularizar-condominio-corpo-de-bombeiros",
  "/blog/diferenca-entre-avcb-e-ptotep-eventos",
  "/blog/alarme-incendio-galpao-industrial-obrigatorio-sp",
  // Blog noindex (posts thin <300 palavras — sincronizar com NOINDEX_BLOG_SLUGS no [slug]/page.tsx)
  "/blog/avcb-para-casa-de-repouso-sao-paulo",
  "/blog/vistoria-bombeiros-porta-corta-fogo",
  "/blog/avcb-para-pousada-exigencias-e-como-regularizar",
  "/blog/embargo-corpo-de-bombeiros-como-resolver",
  "/blog/seguro-predial-sem-avcb-o-que-acontece-em-sinistro",
]);

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
    if (route === "/blog/quanto-custa-avcb-em-sao-paulo" || route === "/blog/avcb-vencido-o-que-fazer") {
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
