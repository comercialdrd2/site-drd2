import fs from "fs";
import path from "path";
import { blogPosts } from "@/data/blog";
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
  return process.env.NEXT_PUBLIC_SITE_URL || "https://drd2.com.br";
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
  // Blog noindex (posts thin <300 palavras — sincronizar com NOINDEX_BLOG_SLUGS no [slug]/page.tsx)
  "/blog/avcb-para-casa-de-repouso-sao-paulo",
  "/blog/vistoria-bombeiros-porta-corta-fogo",
  "/blog/avcb-para-pousada-exigencias-e-como-regularizar",
  "/blog/embargo-corpo-de-bombeiros-como-resolver",
  "/blog/seguro-predial-sem-avcb-o-que-acontece-em-sinistro",
  // === Consolidacao SEO - paginas de bairro (Fase 1) ===
  "/avcb-alphaville-barueri",
  "/avcb-analia-franco",
  "/avcb-aricanduva",
  "/avcb-barueri-alphaville",
  "/avcb-bela-vista",
  "/avcb-bom-retiro",
  "/avcb-brooklin",
  "/avcb-butanta",
  "/avcb-campinas-barao-geraldo",
  "/avcb-campinas-cambui",
  "/avcb-campinas-castelo",
  "/avcb-campinas-centro",
  "/avcb-campinas-guanabara",
  "/avcb-campinas-mansoes-santo-antonio",
  "/avcb-campinas-taquaral",
  "/avcb-campo-belo",
  "/avcb-campo-grande",
  "/avcb-carrao",
  "/avcb-casa-verde",
  "/avcb-centro-bela-vista",
  "/avcb-centro-sao-paulo",
  "/avcb-consolacao",
  "/avcb-freguesia-do-o",
  "/avcb-guarulhos-aeroporto",
  "/avcb-guarulhos-bonsucesso",
  "/avcb-guarulhos-centro",
  "/avcb-guarulhos-macedo",
  "/avcb-guarulhos-maia",
  "/avcb-guarulhos-pimentas",
  "/avcb-guarulhos-vila-augusta",
  "/avcb-higienopolis",
  "/avcb-ipiranga",
  "/avcb-itaim-bibi",
  "/avcb-itaquera",
  "/avcb-jabaquara",
  "/avcb-jacana",
  "/avcb-jardins",
  "/avcb-lapa",
  "/avcb-liberdade",
  "/avcb-limao",
  "/avcb-moema",
  "/avcb-mooca",
  "/avcb-morumbi",
  "/avcb-penha",
  "/avcb-perdizes",
  "/avcb-pinheiros",
  "/avcb-pompeia",
  "/avcb-republica",
  "/avcb-sacoma",
  "/avcb-santa-cecilia",
  "/avcb-santana",
  "/avcb-santo-amaro",
  "/avcb-santos-aparecida",
  "/avcb-santos-boqueirao",
  "/avcb-santos-centro",
  "/avcb-santos-embare",
  "/avcb-santos-gonzaga",
  "/avcb-santos-ponta-da-praia",
  "/avcb-sapopemba",
  "/avcb-saude",
  "/avcb-se",
  "/avcb-tatuape",
  "/avcb-tucuruvi",
  "/avcb-vila-clementino",
  "/avcb-vila-leopoldina",
  "/avcb-vila-madalena",
  "/avcb-vila-mariana",
  "/avcb-vila-olimpia",
  "/avcb-vila-prudente",
  "/avcb-vila-re",
  "/renovacao-avcb-analia-franco",
  "/renovacao-avcb-aricanduva",
  "/renovacao-avcb-carrao",
  "/renovacao-avcb-casa-verde",
  "/renovacao-avcb-condominio-agua-branca",
  "/renovacao-avcb-condominio-altos-de-santana",
  "/renovacao-avcb-condominio-analia-franco",
  "/renovacao-avcb-condominio-bela-vista",
  "/renovacao-avcb-condominio-brooklin",
  "/renovacao-avcb-condominio-campo-belo",
  "/renovacao-avcb-condominio-chacara-klabin",
  "/renovacao-avcb-condominio-chacara-santo-antonio",
  "/renovacao-avcb-condominio-cidade-moncoes",
  "/renovacao-avcb-condominio-consolacao",
  "/renovacao-avcb-condominio-higienopolis",
  "/renovacao-avcb-condominio-ipiranga",
  "/renovacao-avcb-condominio-itaim-bibi",
  "/renovacao-avcb-condominio-jabaquara",
  "/renovacao-avcb-condominio-jardins",
  "/renovacao-avcb-condominio-lapa",
  "/renovacao-avcb-condominio-moema",
  "/renovacao-avcb-condominio-moema-indios",
  "/renovacao-avcb-condominio-moema-passaros",
  "/renovacao-avcb-condominio-mooca",
  "/renovacao-avcb-condominio-morumbi",
  "/renovacao-avcb-condominio-perdizes",
  "/renovacao-avcb-condominio-pinheiros",
  "/renovacao-avcb-condominio-santana",
  "/renovacao-avcb-condominio-santo-amaro",
  "/renovacao-avcb-condominio-saude",
  "/renovacao-avcb-condominio-tatuape",
  "/renovacao-avcb-condominio-tucuruvi",
  "/renovacao-avcb-condominio-vila-andrade",
  "/renovacao-avcb-condominio-vila-clementino",
  "/renovacao-avcb-condominio-vila-ipojuca",
  "/renovacao-avcb-condominio-vila-leopoldina",
  "/renovacao-avcb-condominio-vila-mariana",
  "/renovacao-avcb-condominio-vila-nova-conceicao",
  "/renovacao-avcb-condominio-vila-olimpia",
  "/renovacao-avcb-condominio-vila-prudente",
  "/renovacao-avcb-consolacao",
  "/renovacao-avcb-freguesia-do-o",
  "/renovacao-avcb-higienopolis",
  "/renovacao-avcb-ipiranga",
  "/renovacao-avcb-itaquera",
  "/renovacao-avcb-jabaquara",
  "/renovacao-avcb-jacana",
  "/renovacao-avcb-liberdade",
  "/renovacao-avcb-limao",
  "/renovacao-avcb-morumbi",
  "/renovacao-avcb-paraiso",
  "/renovacao-avcb-penha",
  "/renovacao-avcb-santana",
  "/renovacao-avcb-sapopemba",
  "/renovacao-avcb-saude",
  "/renovacao-avcb-se",
  "/renovacao-avcb-tucuruvi",
  "/renovacao-avcb-vila-leopoldina",
  "/renovacao-avcb-vila-madalena",
  "/renovacao-avcb-vila-prudente",
  "/renovacao-avcb-vila-re",
  "/renovacao-clcb-aclimacao-sao-paulo",
  "/renovacao-clcb-agua-rasa-sao-paulo",
  "/renovacao-clcb-aricanduva-sao-paulo",
  "/renovacao-clcb-bela-vista-sao-paulo",
  "/renovacao-clcb-belem-sao-paulo",
  "/renovacao-clcb-bras-sao-paulo",
  "/renovacao-clcb-brasilandia-sao-paulo",
  "/renovacao-clcb-brooklin-sao-paulo",
  "/renovacao-clcb-butanta-sao-paulo",
  "/renovacao-clcb-cambuci-sao-paulo",
  "/renovacao-clcb-campo-belo-sao-paulo",
  "/renovacao-clcb-campo-limpo-sao-paulo",
  "/renovacao-clcb-cangaiba-sao-paulo",
  "/renovacao-clcb-capao-redondo-sao-paulo",
  "/renovacao-clcb-carrao-sao-paulo",
  "/renovacao-clcb-casa-verde-sao-paulo",
  "/renovacao-clcb-consolacao-sao-paulo",
  "/renovacao-clcb-cursino-sao-paulo",
  "/renovacao-clcb-freguesia-do-o-sao-paulo",
  "/renovacao-clcb-graja-sao-paulo",
  "/renovacao-clcb-higienopolis-sao-paulo",
  "/renovacao-clcb-interlagos-sao-paulo",
  "/renovacao-clcb-ipiranga-sao-paulo",
  "/renovacao-clcb-itaim-bibi-sao-paulo",
  "/renovacao-clcb-itaquera-sao-paulo",
  "/renovacao-clcb-jabaquara-sao-paulo",
  "/renovacao-clcb-jacana-sao-paulo",
  "/renovacao-clcb-jardins-sao-paulo",
  "/renovacao-clcb-lapa-sao-paulo",
  "/renovacao-clcb-liberdade-sao-paulo",
  "/renovacao-clcb-mandaqui-sao-paulo",
  "/renovacao-clcb-mboi-mirim-sao-paulo",
  "/renovacao-clcb-moema-sao-paulo",
  "/renovacao-clcb-mooca-sao-paulo",
  "/renovacao-clcb-morumbi-sao-paulo",
  "/renovacao-clcb-paraiso-sao-paulo",
  "/renovacao-clcb-penha-sao-paulo",
  "/renovacao-clcb-perdizes-sao-paulo",
  "/renovacao-clcb-pinheiros-sao-paulo",
  "/renovacao-clcb-pirituba-sao-paulo",
  "/renovacao-clcb-pompeia-sao-paulo",
  "/renovacao-clcb-rio-pequeno-sao-paulo",
  "/renovacao-clcb-sacoma-sao-paulo",
  "/renovacao-clcb-santana-sao-paulo",
  "/renovacao-clcb-santo-amaro-sao-paulo",
  "/renovacao-clcb-sao-mateus-sao-paulo",
  "/renovacao-clcb-sao-miguel-paulista-sao-paulo",
  "/renovacao-clcb-sapopemba-sao-paulo",
  "/renovacao-clcb-saude-sao-paulo",
  "/renovacao-clcb-tatuape-sao-paulo",
  "/renovacao-clcb-tremembe-sao-paulo",
  "/renovacao-clcb-tucuruvi-sao-paulo",
  "/renovacao-clcb-vila-andrade-sao-paulo",
  "/renovacao-clcb-vila-formosa-sao-paulo",
  "/renovacao-clcb-vila-madalena-sao-paulo",
  "/renovacao-clcb-vila-mariana-sao-paulo",
  "/renovacao-clcb-vila-olimpia-sao-paulo",
  "/renovacao-clcb-vila-prudente-sao-paulo",
  // === Consolidacao SEO - ocupacao duplicada (Fase 1b) ===
  "/alvara-bombeiro-academia-sao-paulo",
  "/alvara-bombeiro-casa-de-repouso-sao-paulo",
  "/alvara-bombeiro-casa-noturna-boate-sao-paulo",
  "/alvara-bombeiro-condominio-sao-paulo",
  "/alvara-bombeiro-consultorio-medico-sao-paulo",
  "/alvara-bombeiro-creche-sao-paulo",
  "/alvara-bombeiro-escritorio-sao-paulo",
  "/alvara-bombeiro-farmacia-drogaria-sao-paulo",
  "/alvara-bombeiro-galpao-industrial-sao-paulo",
  "/alvara-bombeiro-hospital-clinica-sao-paulo",
  "/alvara-bombeiro-hostel-sao-paulo",
  "/alvara-bombeiro-igreja-sao-paulo",
  "/alvara-bombeiro-motel-sao-paulo",
  "/alvara-bombeiro-padaria-sao-paulo",
  "/alvara-bombeiro-posto-combustivel-sao-paulo",
  "/alvara-bombeiro-salao-de-festas-sao-paulo",
  "/alvara-bombeiro-shopping-sao-paulo",
  "/alvara-bombeiro-supermercado-sao-paulo",
  "/avcb-para-academia-sao-paulo",
  "/avcb-para-casa-de-repouso-sao-paulo",
  "/avcb-para-creche-sao-paulo",
  "/avcb-para-escritorio-sao-paulo",
  "/avcb-para-evento-corporativo",
  "/avcb-para-evento-em-shopping",
  "/avcb-para-exposicao",
  "/avcb-para-feira",
  "/avcb-para-igreja-sao-paulo",
  "/avcb-para-padaria-sao-paulo",
  "/avcb-para-renovacao-de-seguro",
  "/avcb-para-shopping-sao-paulo",
  "/avcb-para-show",
  "/avcb-paraiso",
  // === Consolidacao SEO - servico x ocupacao (Fase 1c) ===
  "/alarme-de-incendio-comercial-escritorio-sp",
  "/alarme-de-incendio-escola-faculdade-sp",
  "/alarme-de-incendio-galpao-industrial-sp",
  "/alarme-de-incendio-hospital-clinica-sp",
  "/alarme-de-incendio-para-condominio-sao-paulo",
  "/alarme-incendio-centro-distribuicao-sp",
  "/alarme-incendio-obrigatorio-avcb-sp",
  "/alarme-incendio-supermercado-avcb-sp",
  "/brigada-incendio-centro-distribuicao-sp",
  "/brigada-incendio-galpao-industrial-sp",
  "/brigada-incendio-hospital-sp",
  "/brigada-incendio-hotel-sp",
  "/brigada-incendio-obrigatoria-avcb-sp",
  "/brigada-incendio-predio-comercial-sp",
  "/brigada-incendio-shopping-sp",
  "/brigada-incendio-supermercado-sp",
  "/escada-pressurizada-condominio-sp",
  "/escada-pressurizada-edificio-comercial-sp",
  "/escada-pressurizada-galpao-industrial-sp",
  "/escada-pressurizada-hospital-sp",
  "/escada-pressurizada-hotel-sp",
  "/escada-pressurizada-obrigatoria-avcb-sp",
  "/escada-pressurizada-shopping-sp",
  "/hidrante-centro-distribuicao-sp",
  "/hidrante-obrigatorio-avcb-sp",
  "/hidrante-supermercado-avcb-sp",
  "/projeto-combate-incendio-corpo-bombeiros-sp",
  "/projeto-escada-pressurizada-avcb-sao-paulo",
  "/projeto-incendio-centro-distribuicao-sp",
  "/projeto-incendio-edificio-comercial-sp",
  "/projeto-incendio-galpao-industrial-avcb-sp",
  "/projeto-incendio-hospital-sp",
  "/projeto-incendio-hotel-sp",
  "/projeto-incendio-industria-quimica-sp",
  "/projeto-incendio-obrigatorio-sp",
  "/projeto-incendio-para-avcb-sp",
  "/projeto-incendio-shopping-center-sp",
  "/projeto-incendio-supermercado-sp",
  "/projeto-spda-para-raios-sao-paulo",
  "/projeto-vga-sistema-sprinkler-sp",
  "/sistema-alarme-incendio-hotel-avcb-sp",
  "/sistema-alarme-incendio-industria-quimica-sp",
  "/sistema-alarme-incendio-shopping-center-sp",
  "/sistema-de-hidrantes-para-academia-sao-paulo",
  "/sistema-de-hidrantes-para-condominio-sao-paulo",
  "/sistema-de-hidrantes-para-escola-sao-paulo",
  "/sistema-de-hidrantes-para-galpao-sao-paulo",
  "/sistema-de-hidrantes-para-hospital-sao-paulo",
  "/sistema-de-hidrantes-para-hotel-sao-paulo",
  "/sistema-de-hidrantes-para-industria-sao-paulo",
  "/sistema-de-hidrantes-para-pousada-sao-paulo",
  "/sistema-de-hidrantes-para-restaurante-sao-paulo",
  "/sistema-de-sprinkler-para-academia-sao-paulo",
  "/sistema-de-sprinkler-para-condominio-sao-paulo",
  "/sistema-de-sprinkler-para-escola-sao-paulo",
  "/sistema-de-sprinkler-para-hospital-sao-paulo",
  "/sistema-de-sprinkler-para-hotel-sao-paulo",
  "/sistema-de-sprinkler-para-industria-sao-paulo",
  "/sistema-de-sprinkler-para-pousada-sao-paulo",
  "/sistema-de-sprinkler-para-restaurante-sao-paulo",
  "/sistema-hidrante-edificio-comercial-sp",
  "/sistema-hidrante-hospital-avcb-sp",
  "/sistema-hidrante-hotel-avcb-sp",
  "/sistema-hidrante-shopping-center-sp",
  "/sistema-sprinkler-edificio-comercial-sp",
  "/sistema-sprinkler-galpao-industrial-avcb-sp",
  "/sistema-sprinkler-hospital-avcb-sp",
  "/sistema-sprinkler-hotel-avcb-sp",
  "/sistema-sprinkler-shopping-center-sp",
  "/spda-para-raios-sao-paulo",
  "/sprinkler-centro-distribuicao-sp",
  "/sprinkler-obrigatorio-avcb-sp",
  "/sprinkler-supermercado-avcb-sp",
  "/treinamento-brigada-incendio-sp",
  "/valvula-alarme-incendio-sp",
  "/valvula-retencao-sprinkler-sp",
  "/vga-centro-distribuicao-sp",
  "/vga-galpao-industrial-sp",
  "/vga-hospital-sp",
  "/vga-hotel-sp",
  "/vga-shopping-center-sp",
  "/vga-supermercado-sp",
  // === Consolidacao SEO - laudos (Fase 1d) ===
  "/laudo-alarme-incendio-condominio-sao-paulo",
  "/laudo-alarme-incendio-escola-sao-paulo",
  "/laudo-alarme-incendio-hotel-sao-paulo",
  "/laudo-alarme-incendio-restaurante-sao-paulo",
  "/laudo-alarme-incendio-sao-paulo",
  "/laudo-bombeiro-academia-sao-paulo",
  "/laudo-bombeiro-bar-restaurante-sao-paulo",
  "/laudo-bombeiro-casa-de-repouso-sao-paulo",
  "/laudo-bombeiro-casa-noturna-boate-sao-paulo",
  "/laudo-bombeiro-condominio-sao-paulo",
  "/laudo-bombeiro-consultorio-medico-sao-paulo",
  "/laudo-bombeiro-creche-sao-paulo",
  "/laudo-bombeiro-escola-faculdade-sao-paulo",
  "/laudo-bombeiro-escritorio-sao-paulo",
  "/laudo-bombeiro-farmacia-drogaria-sao-paulo",
  "/laudo-bombeiro-galpao-industrial-sao-paulo",
  "/laudo-bombeiro-hospital-clinica-sao-paulo",
  "/laudo-bombeiro-hostel-sao-paulo",
  "/laudo-bombeiro-hotel-pousada-sao-paulo",
  "/laudo-bombeiro-igreja-sao-paulo",
  "/laudo-bombeiro-motel-sao-paulo",
  "/laudo-bombeiro-padaria-sao-paulo",
  "/laudo-bombeiro-posto-combustivel-sao-paulo",
  "/laudo-bombeiro-salao-de-festas-sao-paulo",
  "/laudo-bombeiro-shopping-sao-paulo",
  "/laudo-bombeiro-supermercado-sao-paulo",
  "/laudo-escada-pressurizada-sp",
  "/laudo-hidrante-condominio-sao-paulo",
  "/laudo-hidrante-escola-sao-paulo",
  "/laudo-hidrante-galpao-sao-paulo",
  "/laudo-hidrante-restaurante-sao-paulo",
  "/laudo-sistema-hidrantes-sao-paulo",
  "/laudo-spda-para-raios-sao-paulo",
  "/laudo-sprinkler-clinica-sao-paulo",
  "/laudo-sprinkler-condominio-sao-paulo",
  "/laudo-sprinkler-galpao-sao-paulo",
  "/laudo-sprinkler-hotel-sao-paulo",
  "/laudo-sprinkler-sao-paulo",
  // === Consolidacao SEO - porta corta-fogo (Fase 1e) ===
  "/adequacao-porta-corta-fogo-avcb-sp",
  "/empresa-manutencao-porta-corta-fogo-sp",
  "/manutencao-porta-corta-fogo-abc-paulista",
  "/manutencao-porta-corta-fogo-campinas",
  "/manutencao-porta-corta-fogo-guarulhos",
  "/manutencao-porta-corta-fogo-santo-amaro-sp",
  "/manutencao-porta-corta-fogo-zona-sul-sp",
  "/orcamento-porta-corta-fogo-sp",
  "/porta-corta-fogo-condenada-sp",
  "/porta-corta-fogo-condominio-sp",
  "/porta-corta-fogo-galpao-industrial-sp",
  "/porta-corta-fogo-hospital-sp",
  "/porta-corta-fogo-hotel-sp",
  "/porta-corta-fogo-nao-fecha-sp",
  "/troca-mola-hidraulica-porta-corta-fogo-sp",
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
