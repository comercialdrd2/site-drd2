/**
 * inject-internal-links.js
 * Injeta o InternalLinksBlock em todas as páginas de ocupação do projeto.
 * Executa apenas uma vez por arquivo (idempotente — não duplica).
 * 
 * Uso: node inject-internal-links.js
 */

const fs = require("fs");
const path = require("path");

// Mapa: pasta da rota → slug usado no InternalLinksBlock (do JSON gerado)
const OCUPACAO_PAGES = [
  {
    dir: "avcb-para-condominio-sao-paulo",
    linkSlug: "/avcb-para-condominio-sao-paulo",
    titulo: "Regularizamos Condomínios em Toda São Paulo",
  },
  {
    dir: "avcb-condominio-sao-paulo",
    linkSlug: "/avcb-para-condominio-sao-paulo",
    titulo: "Regularizamos Condomínios em Toda São Paulo",
  },
  {
    dir: "alvara-bombeiro-condominio-sao-paulo",
    linkSlug: "/avcb-para-condominio-sao-paulo",
    titulo: "Regularizamos Condomínios em Toda São Paulo",
  },
  {
    dir: "renovacao-avcb-condominio-sao-paulo",
    linkSlug: "/renovacao-avcb-condominio-sao-paulo",
    titulo: "Renovação de AVCB para Condomínios em SP",
  },
  {
    dir: "alvara-bombeiro-galpao-industrial-sao-paulo",
    linkSlug: "/alvara-bombeiro-galpao-industrial-sao-paulo",
    titulo: "Regularizamos Galpões Industriais em Toda São Paulo",
  },
  {
    dir: "avcb-galpao-industrial-sao-paulo",
    linkSlug: "/alvara-bombeiro-galpao-industrial-sao-paulo",
    titulo: "AVCB para Galpões e Depósitos em SP",
  },
  {
    dir: "renovacao-avcb-galpao-industrial-sao-paulo",
    linkSlug: "/alvara-bombeiro-galpao-industrial-sao-paulo",
    titulo: "Renovação de AVCB para Galpões Industriais",
  },
  {
    dir: "alvara-bombeiro-restaurante-sao-paulo",
    linkSlug: "/alvara-bombeiro-restaurante-sao-paulo",
    titulo: "Regularizamos Restaurantes em Toda São Paulo",
  },
  {
    dir: "alvara-bombeiro-bar-restaurante-sao-paulo",
    linkSlug: "/alvara-bombeiro-restaurante-sao-paulo",
    titulo: "Alvará Bombeiro para Bares e Restaurantes em SP",
  },
  {
    dir: "renovacao-avcb-bares-restaurantes-sao-paulo",
    linkSlug: "/alvara-bombeiro-restaurante-sao-paulo",
    titulo: "Renovação de AVCB para Bares e Restaurantes",
  },
  {
    dir: "avcb-bares-restaurantes-sao-paulo",
    linkSlug: "/alvara-bombeiro-restaurante-sao-paulo",
    titulo: "AVCB para Bares e Restaurantes em SP",
  },
  {
    dir: "alvara-bombeiro-escritorio-sao-paulo",
    linkSlug: "/alvara-bombeiro-escritorio-sao-paulo",
    titulo: "Regularizamos Escritórios Comerciais em SP",
  },
  {
    dir: "avcb-comercial-escritorio-sao-paulo",
    linkSlug: "/alvara-bombeiro-escritorio-sao-paulo",
    titulo: "AVCB para Escritórios Comerciais em SP",
  },
  {
    dir: "renovacao-avcb-escritorio-sao-paulo",
    linkSlug: "/alvara-bombeiro-escritorio-sao-paulo",
    titulo: "Renovação de AVCB para Escritórios em SP",
  },
  {
    dir: "avcb-para-escritorio-sao-paulo",
    linkSlug: "/alvara-bombeiro-escritorio-sao-paulo",
    titulo: "AVCB para Escritório Comercial em SP",
  },
  {
    dir: "alvara-bombeiro-farmacia-drogaria-sao-paulo",
    linkSlug: "/alvara-bombeiro-farmacia-drogaria-sao-paulo",
    titulo: "Regularizamos Farmácias e Drogarias em SP",
  },
  {
    dir: "avcb-farmacia-drogaria-sao-paulo",
    linkSlug: "/alvara-bombeiro-farmacia-drogaria-sao-paulo",
    titulo: "AVCB para Farmácias e Drogarias em SP",
  },
  {
    dir: "renovacao-avcb-farmacia-drogaria-sao-paulo",
    linkSlug: "/alvara-bombeiro-farmacia-drogaria-sao-paulo",
    titulo: "Renovação de AVCB para Farmácias em SP",
  },
  {
    dir: "alvara-bombeiro-hospital-clinica-sao-paulo",
    linkSlug: "/alvara-bombeiro-hospital-clinica-sao-paulo",
    titulo: "Regularizamos Clínicas e Hospitais em SP",
  },
  {
    dir: "avcb-hospital-clinica-sao-paulo",
    linkSlug: "/alvara-bombeiro-hospital-clinica-sao-paulo",
    titulo: "AVCB para Hospitais e Clínicas em SP",
  },
  {
    dir: "renovacao-avcb-hospital-clinica-sao-paulo",
    linkSlug: "/alvara-bombeiro-hospital-clinica-sao-paulo",
    titulo: "Renovação de AVCB para Hospitais e Clínicas",
  },
  {
    dir: "avcb-para-escola-sao-paulo",
    linkSlug: "/avcb-para-escola-sao-paulo",
    titulo: "Regularizamos Escolas e Faculdades em SP",
  },
  {
    dir: "avcb-escola-faculdade-sao-paulo",
    linkSlug: "/avcb-para-escola-sao-paulo",
    titulo: "AVCB para Escolas e Faculdades em SP",
  },
  {
    dir: "alvara-bombeiro-escola-faculdade-sao-paulo",
    linkSlug: "/avcb-para-escola-sao-paulo",
    titulo: "Alvará Bombeiro para Escolas e Faculdades",
  },
  {
    dir: "alvara-bombeiro-escola-sao-paulo",
    linkSlug: "/avcb-para-escola-sao-paulo",
    titulo: "Alvará Bombeiro para Escola em SP",
  },
  {
    dir: "renovacao-avcb-escola-sao-paulo",
    linkSlug: "/avcb-para-escola-sao-paulo",
    titulo: "Renovação de AVCB para Escolas em SP",
  },
  {
    dir: "alvara-bombeiro-hotel-pousada-sao-paulo",
    linkSlug: "/alvara-bombeiro-hotel-pousada-sao-paulo",
    titulo: "Regularizamos Hotéis e Pousadas em SP",
  },
  {
    dir: "avcb-hoteis-pousadas-sao-paulo",
    linkSlug: "/alvara-bombeiro-hotel-pousada-sao-paulo",
    titulo: "AVCB para Hotéis e Pousadas em SP",
  },
  {
    dir: "avcb-hostel-sao-paulo",
    linkSlug: "/alvara-bombeiro-hotel-pousada-sao-paulo",
    titulo: "AVCB para Hostels em SP",
  },
  {
    dir: "alvara-bombeiro-hostel-sao-paulo",
    linkSlug: "/alvara-bombeiro-hotel-pousada-sao-paulo",
    titulo: "Alvará Bombeiro para Hostel em SP",
  },
  {
    dir: "renovacao-avcb-hotel-sao-paulo",
    linkSlug: "/alvara-bombeiro-hotel-pousada-sao-paulo",
    titulo: "Renovação de AVCB para Hotéis em SP",
  },
  {
    dir: "renovacao-avcb-hostel-sao-paulo",
    linkSlug: "/alvara-bombeiro-hotel-pousada-sao-paulo",
    titulo: "Renovação de AVCB para Hostels em SP",
  },
  {
    dir: "alvara-bombeiro-supermercado-sao-paulo",
    linkSlug: "/alvara-bombeiro-supermercado-sao-paulo",
    titulo: "Regularizamos Supermercados em SP",
  },
  {
    dir: "avcb-supermercado-sao-paulo",
    linkSlug: "/alvara-bombeiro-supermercado-sao-paulo",
    titulo: "AVCB para Supermercados em SP",
  },
  {
    dir: "renovacao-avcb-supermercado-sao-paulo",
    linkSlug: "/alvara-bombeiro-supermercado-sao-paulo",
    titulo: "Renovação de AVCB para Supermercados",
  },
  // Demais ocupações — usam linkSlug mais próximo disponível
  { dir: "alvara-bombeiro-academia-sao-paulo",       linkSlug: "/avcb-para-escola-sao-paulo",               titulo: "Regularizamos Academias em São Paulo" },
  { dir: "avcb-para-academia-sao-paulo",             linkSlug: "/avcb-para-escola-sao-paulo",               titulo: "AVCB para Academias em SP" },
  { dir: "renovacao-avcb-academia-sao-paulo",        linkSlug: "/avcb-para-escola-sao-paulo",               titulo: "Renovação de AVCB para Academias" },
  { dir: "alvara-bombeiro-creche-sao-paulo",         linkSlug: "/avcb-para-escola-sao-paulo",               titulo: "Alvará Bombeiro para Creches em SP" },
  { dir: "avcb-para-creche-sao-paulo",               linkSlug: "/avcb-para-escola-sao-paulo",               titulo: "AVCB para Creches em SP" },
  { dir: "renovacao-avcb-creche-sao-paulo",          linkSlug: "/avcb-para-escola-sao-paulo",               titulo: "Renovação de AVCB para Creches" },
  { dir: "alvara-bombeiro-consultorio-medico-sao-paulo", linkSlug: "/alvara-bombeiro-hospital-clinica-sao-paulo", titulo: "Alvará Bombeiro para Consultórios em SP" },
  { dir: "avcb-consultorios-medicos-odontologicos-sao-paulo", linkSlug: "/alvara-bombeiro-hospital-clinica-sao-paulo", titulo: "AVCB para Consultórios Médicos e Odontológicos" },
  { dir: "renovacao-avcb-consultorio-medico-sao-paulo", linkSlug: "/alvara-bombeiro-hospital-clinica-sao-paulo", titulo: "Renovação de AVCB para Consultórios" },
  { dir: "alvara-bombeiro-motel-sao-paulo",          linkSlug: "/alvara-bombeiro-hotel-pousada-sao-paulo",   titulo: "Alvará Bombeiro para Motéis em SP" },
  { dir: "avcb-motel-sao-paulo",                     linkSlug: "/alvara-bombeiro-hotel-pousada-sao-paulo",   titulo: "AVCB para Motéis em SP" },
  { dir: "renovacao-avcb-motel-sao-paulo",           linkSlug: "/alvara-bombeiro-hotel-pousada-sao-paulo",   titulo: "Renovação de AVCB para Motéis" },
  { dir: "alvara-bombeiro-pousada-sao-paulo",        linkSlug: "/alvara-bombeiro-hotel-pousada-sao-paulo",   titulo: "Alvará Bombeiro para Pousadas em SP" },
  { dir: "avcb-pousada-sao-paulo",                   linkSlug: "/alvara-bombeiro-hotel-pousada-sao-paulo",   titulo: "AVCB para Pousadas em SP" },
  { dir: "renovacao-avcb-pousada-sao-paulo",         linkSlug: "/alvara-bombeiro-hotel-pousada-sao-paulo",   titulo: "Renovação de AVCB para Pousadas" },
  { dir: "alvara-bombeiro-padaria-sao-paulo",        linkSlug: "/alvara-bombeiro-restaurante-sao-paulo",     titulo: "Alvará Bombeiro para Padarias em SP" },
  { dir: "avcb-para-padaria-sao-paulo",              linkSlug: "/alvara-bombeiro-restaurante-sao-paulo",     titulo: "AVCB para Padarias em SP" },
  { dir: "renovacao-avcb-padaria-sao-paulo",         linkSlug: "/alvara-bombeiro-restaurante-sao-paulo",     titulo: "Renovação de AVCB para Padarias" },
  { dir: "alvara-bombeiro-salao-de-festas-sao-paulo",linkSlug: "/avcb-para-condominio-sao-paulo",            titulo: "Alvará Bombeiro para Salões de Festas em SP" },
  { dir: "avcb-para-salao-de-festas-sao-paulo",      linkSlug: "/avcb-para-condominio-sao-paulo",            titulo: "AVCB para Salões de Festas em SP" },
  { dir: "avcb-salao-de-festas-sao-paulo",           linkSlug: "/avcb-para-condominio-sao-paulo",            titulo: "AVCB para Salões de Festas em SP" },
  { dir: "renovacao-avcb-salao-de-festas-sao-paulo", linkSlug: "/avcb-para-condominio-sao-paulo",            titulo: "Renovação de AVCB para Salões de Festas" },
  { dir: "alvara-bombeiro-shopping-sao-paulo",       linkSlug: "/alvara-bombeiro-supermercado-sao-paulo",    titulo: "Alvará Bombeiro para Shoppings em SP" },
  { dir: "avcb-para-shopping-sao-paulo",             linkSlug: "/alvara-bombeiro-supermercado-sao-paulo",    titulo: "AVCB para Shoppings em SP" },
  { dir: "renovacao-avcb-shopping-sao-paulo",        linkSlug: "/alvara-bombeiro-supermercado-sao-paulo",    titulo: "Renovação de AVCB para Shoppings" },
  { dir: "alvara-bombeiro-casa-de-repouso-sao-paulo",linkSlug: "/alvara-bombeiro-hospital-clinica-sao-paulo",titulo: "Alvará Bombeiro para Casas de Repouso em SP" },
  { dir: "avcb-para-casa-de-repouso-sao-paulo",      linkSlug: "/alvara-bombeiro-hospital-clinica-sao-paulo",titulo: "AVCB para Casas de Repouso em SP" },
  { dir: "renovacao-avcb-casa-de-repouso-sao-paulo", linkSlug: "/alvara-bombeiro-hospital-clinica-sao-paulo",titulo: "Renovação de AVCB para Casas de Repouso" },
  { dir: "alvara-bombeiro-casa-noturna-boate-sao-paulo", linkSlug: "/alvara-bombeiro-restaurante-sao-paulo", titulo: "Alvará Bombeiro para Casas Noturnas em SP" },
  { dir: "avcb-casas-noturnas-boates-sao-paulo",     linkSlug: "/alvara-bombeiro-restaurante-sao-paulo",    titulo: "AVCB para Casas Noturnas e Boates em SP" },
  { dir: "renovacao-avcb-casa-noturna-boate-sao-paulo", linkSlug: "/alvara-bombeiro-restaurante-sao-paulo", titulo: "Renovação de AVCB para Casas Noturnas" },
  { dir: "alvara-bombeiro-posto-combustivel-sao-paulo", linkSlug: "/alvara-bombeiro-galpao-industrial-sao-paulo", titulo: "Alvará Bombeiro para Postos de Combustível em SP" },
  { dir: "avcb-posto-combustivel-sao-paulo",          linkSlug: "/alvara-bombeiro-galpao-industrial-sao-paulo", titulo: "AVCB para Postos de Combustível em SP" },
  { dir: "renovacao-avcb-posto-combustivel-sao-paulo",linkSlug: "/alvara-bombeiro-galpao-industrial-sao-paulo", titulo: "Renovação de AVCB para Postos de Combustível" },
  { dir: "alvara-bombeiro-igreja-sao-paulo",          linkSlug: "/avcb-para-condominio-sao-paulo",           titulo: "Alvará Bombeiro para Igrejas em SP" },
  { dir: "avcb-para-igreja-sao-paulo",               linkSlug: "/avcb-para-condominio-sao-paulo",            titulo: "AVCB para Igrejas em SP" },
  { dir: "renovacao-avcb-igreja-sao-paulo",           linkSlug: "/avcb-para-condominio-sao-paulo",           titulo: "Renovação de AVCB para Igrejas" },
  { dir: "avcb-restaurante-sao-paulo",               linkSlug: "/alvara-bombeiro-restaurante-sao-paulo",     titulo: "AVCB para Restaurantes em SP" },
  { dir: "renovacao-avcb-restaurante-sao-paulo",     linkSlug: "/alvara-bombeiro-restaurante-sao-paulo",     titulo: "Renovação de AVCB para Restaurantes" },
];

const IMPORT_LINE = 'import InternalLinksBlock from "@/components/InternalLinksBlock";';

// Padrões de inserção — procura onde inserir o componente (antes do NeighborhoodSilo ou do CTA final)
const INSERT_PATTERNS = [
  // Antes do NeighborhoodSilo com currentSlug
  { pattern: /(<NeighborhoodSilo\s+currentSlug=)/,       before: true },
  // Antes do NeighborhoodSilo sem props
  { pattern: /(<NeighborhoodSilo\s*\/>)/,                 before: true },
  // Antes do LeadForm final
  { pattern: /(<LeadForm\s*\/>)/,                         before: true },
];

const APP_DIR = path.join("src", "app");
let totalFixed = 0;
let totalSkipped = 0;
let totalNotFound = 0;

for (const page of OCUPACAO_PAGES) {
  const filePath = path.join(APP_DIR, page.dir, "page.tsx");

  if (!fs.existsSync(filePath)) {
    console.log("[NAO ENCONTRADO] " + filePath);
    totalNotFound++;
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");

  // Idempotência — pula se InternalLinksBlock já foi inserido
  if (content.includes("InternalLinksBlock")) {
    console.log("[JA TEM]     " + page.dir);
    totalSkipped++;
    continue;
  }

  // 1. Adicionar import se não existir
  if (!content.includes(IMPORT_LINE)) {
    // Insere após o último import existente
    const lastImportIdx = content.lastIndexOf('\nimport ');
    const endOfLastImport = content.indexOf('\n', lastImportIdx + 1);
    content =
      content.substring(0, endOfLastImport + 1) +
      IMPORT_LINE + "\n" +
      content.substring(endOfLastImport + 1);
  }

  // 2. Construir o JSX do componente
  const tituloSafe = page.titulo.replace(/"/g, '\\"');
  const componentJSX =
    '\n      <InternalLinksBlock\n' +
    '        currentSlug="' + page.linkSlug + '"\n' +
    '        mode="ocupacao"\n' +
    '        maxLinks={8}\n' +
    '        titulo="' + tituloSafe + '"\n' +
    '      />\n';

  // 3. Tentar inserir antes de um dos padrões conhecidos
  let inserted = false;
  for (const { pattern, before } of INSERT_PATTERNS) {
    if (pattern.test(content)) {
      content = content.replace(pattern, (match) =>
        before ? componentJSX + '      ' + match : match + componentJSX
      );
      inserted = true;
      break;
    }
  }

  if (!inserted) {
    // Fallback: inserir antes do </> de fechamento do return
    const closingIdx = content.lastIndexOf('</>');
    if (closingIdx !== -1) {
      content =
        content.substring(0, closingIdx) +
        componentJSX +
        content.substring(closingIdx);
      inserted = true;
    }
  }

  if (inserted) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("[CORRIGIDO]  " + page.dir + "  →  " + page.linkSlug);
    totalFixed++;
  } else {
    console.log("[SEM ANCORA] " + page.dir + "  (ponto de inserção não encontrado)");
  }
}

console.log("\n─────────────────────────────────────────────");
console.log(" Injeção concluída!");
console.log(" Corrigidos:     " + totalFixed);
console.log(" Já tinham:      " + totalSkipped);
console.log(" Não encontrado: " + totalNotFound);
console.log("─────────────────────────────────────────────");
