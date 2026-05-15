/**
 * inject-internal-links-bairros.js
 * Injeta InternalLinksBlock (mode="bairro") em todas as páginas de bairro.
 * Idempotente — não duplica se já estiver presente.
 * 
 * Uso: node inject-internal-links-bairros.js
 */

const fs = require("fs");
const path = require("path");

// Mapa completo: pasta da rota → slug usado no InternalLinksBlock (do JSON)
const BAIRRO_PAGES = [
  { dir: "avcb-moema",              slug: "/avcb-moema",              label: "Moema" },
  { dir: "avcb-itaim-bibi",         slug: "/avcb-itaim-bibi",         label: "Itaim Bibi" },
  { dir: "avcb-brooklin",           slug: "/avcb-brooklin",           label: "Brooklin" },
  { dir: "avcb-campo-belo",         slug: "/avcb-campo-belo",         label: "Campo Belo" },
  { dir: "avcb-sacoma",             slug: "/avcb-sacoma",             label: "Sacomã" },
  { dir: "avcb-jabaquara",          slug: "/avcb-jabaquara",          label: "Jabaquara" },
  { dir: "avcb-saude",              slug: "/avcb-saude",              label: "Saúde" },
  { dir: "avcb-santo-amaro",        slug: "/avcb-santo-amaro",        label: "Santo Amaro" },
  { dir: "avcb-morumbi",            slug: "/avcb-morumbi",            label: "Morumbi" },
  { dir: "avcb-vila-olimpia",       slug: "/avcb-vila-olimpia",       label: "Vila Olímpia" },
  { dir: "avcb-pinheiros",          slug: "/avcb-pinheiros",          label: "Pinheiros" },
  { dir: "avcb-vila-madalena",      slug: "/avcb-vila-madalena",      label: "Vila Madalena" },
  { dir: "avcb-perdizes",           slug: "/avcb-perdizes",           label: "Perdizes" },
  { dir: "avcb-lapa",               slug: "/avcb-lapa",               label: "Lapa" },
  { dir: "avcb-butanta",            slug: "/avcb-butanta",            label: "Butantã" },
  { dir: "avcb-vila-leopoldina",    slug: "/avcb-vila-leopoldina",    label: "Vila Leopoldina" },
  { dir: "avcb-santana",            slug: "/avcb-santana",            label: "Santana" },
  { dir: "avcb-casa-verde",         slug: "/avcb-casa-verde",         label: "Casa Verde" },
  { dir: "avcb-tucuruvi",           slug: "/avcb-tucuruvi",           label: "Tucuruvi" },
  { dir: "avcb-limao",              slug: "/avcb-limao",              label: "Limão" },
  { dir: "avcb-jacana",             slug: "/avcb-jacana",             label: "Jaçanã" },
  { dir: "avcb-tatuape",            slug: "/avcb-tatuape",            label: "Tatuapé" },
  { dir: "avcb-mooca",              slug: "/avcb-mooca",              label: "Mooca" },
  { dir: "avcb-analia-franco",      slug: "/avcb-analia-franco",      label: "Anália Franco" },
  { dir: "avcb-penha",              slug: "/avcb-penha",              label: "Penha" },
  { dir: "avcb-itaquera",           slug: "/avcb-itaquera",           label: "Itaquera" },
  { dir: "avcb-aricanduva",         slug: "/avcb-aricanduva",         label: "Aricanduva" },
  { dir: "avcb-vila-prudente",      slug: "/avcb-vila-prudente",      label: "Vila Prudente" },
  { dir: "avcb-ipiranga",           slug: "/avcb-ipiranga",           label: "Ipiranga" },
  { dir: "avcb-centro-sao-paulo",   slug: "/avcb-centro-sao-paulo",   label: "Centro" },
  { dir: "avcb-republica",          slug: "/avcb-republica",          label: "República" },
  { dir: "avcb-bela-vista",         slug: "/avcb-bela-vista",         label: "Bela Vista" },
  { dir: "avcb-liberdade",          slug: "/avcb-liberdade",          label: "Liberdade" },
  { dir: "avcb-consolacao",         slug: "/avcb-consolacao",         label: "Consolação" },
  { dir: "avcb-se",                 slug: "/avcb-se",                 label: "Sé" },
  { dir: "avcb-vila-mariana",       slug: "/avcb-vila-mariana",       label: "Vila Mariana" },
  { dir: "avcb-guarulhos",          slug: "/avcb-guarulhos",          label: "Guarulhos" },
  { dir: "avcb-osasco",             slug: "/avcb-osasco",             label: "Osasco" },
  { dir: "avcb-santo-andre",        slug: "/avcb-santo-andre",        label: "Santo André" },
  { dir: "avcb-sao-bernardo",       slug: "/avcb-sao-bernardo",       label: "São Bernardo" },
  { dir: "avcb-sao-caetano",        slug: "/avcb-sao-caetano",        label: "São Caetano" },
  { dir: "avcb-barueri-alphaville", slug: "/avcb-barueri-alphaville", label: "Barueri/Alphaville" },
  // Slugs alternativos presentes no projeto
  { dir: "avcb-alphaville-barueri", slug: "/avcb-barueri-alphaville", label: "Alphaville/Barueri" },
  { dir: "avcb-centro-bela-vista",  slug: "/avcb-bela-vista",         label: "Centro/Bela Vista" },
  // Zonas
  { dir: "avcb-zona-sul",           slug: "/avcb-moema",              label: "Zona Sul" },
  { dir: "avcb-zona-norte-sao-paulo", slug: "/avcb-santana",          label: "Zona Norte" },
  { dir: "avcb-zona-leste-sao-paulo", slug: "/avcb-tatuape",          label: "Zona Leste" },
  { dir: "avcb-zona-oeste-sao-paulo", slug: "/avcb-pinheiros",        label: "Zona Oeste" },
];

const IMPORT_LINE = 'import InternalLinksBlock from "@/components/InternalLinksBlock";';

// Padrões de inserção — antes do LeadForm ou NeighborhoodSilo
const INSERT_PATTERNS = [
  { pattern: /(<LeadForm\s*\/>)/ },
  { pattern: /(<NeighborhoodSilo\s+currentSlug=)/ },
  { pattern: /(<NeighborhoodSilo\s*\/>)/ },
];

const APP_DIR = path.join("src", "app");
let totalFixed = 0;
let totalSkipped = 0;
let totalNotFound = 0;

for (const bairro of BAIRRO_PAGES) {
  const filePath = path.join(APP_DIR, bairro.dir, "page.tsx");

  if (!fs.existsSync(filePath)) {
    console.log("[NAO ENCONTRADO] " + bairro.dir);
    totalNotFound++;
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");

  // Idempotência — pula se já tem o componente
  if (content.includes("InternalLinksBlock")) {
    console.log("[JA TEM]     " + bairro.dir);
    totalSkipped++;
    continue;
  }

  // 1. Adicionar import se não existir
  if (!content.includes(IMPORT_LINE)) {
    const lastImportIdx = content.lastIndexOf('\nimport ');
    const endOfLastImport = content.indexOf('\n', lastImportIdx + 1);
    content =
      content.substring(0, endOfLastImport + 1) +
      IMPORT_LINE + "\n" +
      content.substring(endOfLastImport + 1);
  }

  // 2. Construir o JSX
  const tituloSafe = ("Servi\u00e7os de AVCB em " + bairro.label).replace(/"/g, '\\"');
  const componentJSX =
    '\n      <InternalLinksBlock\n' +
    '        currentSlug="' + bairro.slug + '"\n' +
    '        mode="bairro"\n' +
    '        maxLinks={6}\n' +
    '        titulo="' + tituloSafe + '"\n' +
    '      />\n';

  // 3. Inserir antes do primeiro padrão encontrado
  let inserted = false;
  for (const { pattern } of INSERT_PATTERNS) {
    if (pattern.test(content)) {
      content = content.replace(pattern, (match) => componentJSX + '      ' + match);
      inserted = true;
      break;
    }
  }

  // Fallback: antes do </> final
  if (!inserted) {
    const closingIdx = content.lastIndexOf('</>');
    if (closingIdx !== -1) {
      content = content.substring(0, closingIdx) + componentJSX + content.substring(closingIdx);
      inserted = true;
    }
  }

  if (inserted) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("[CORRIGIDO]  " + bairro.dir + "  (" + bairro.label + ")");
    totalFixed++;
  } else {
    console.log("[SEM ANCORA] " + bairro.dir);
  }
}

console.log("\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500");
console.log(" Injeção em Bairros concluída!");
console.log(" Corrigidos:     " + totalFixed);
console.log(" Já tinham:      " + totalSkipped);
console.log(" Não encontrado: " + totalNotFound);
console.log("\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500");
