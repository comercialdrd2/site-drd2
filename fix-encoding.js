/**
 * fix-encoding.js  
 * Corrige encoding corrompido pelo PowerShell Set-Content nos arquivos de bairro.
 * Os scripts PowerShell corromperam acentos: ã→ǜ, ç→ǜ, etc.
 */
const fs = require("fs");
const path = require("path");

// Mapa de substituição: encoding corrompido → correto
const REPLACEMENTS = [
  ["Butantǜ",     "Butantã"],
  ["Regulariza\uFFD0\uFF9C\u00E3o",  "Regularização"],
  ["regulariza\uFFD0\uFF9C\u00E3o",  "regularização"],
  ["Regularizaǜo","Regularização"],
  ["regularizaǜo","regularização"],
  ["Butantǜ",    "Butantã"],
  ["butantǜ",    "butantã"],
  ["Jaçanǜ",     "Jaçanã"],
  ["jacenǜ",     "jaçanã"],
  ["Jaçaǜ",      "Jaçanã"],
  ["Limǜo",      "Limão"],
  ["limǜo",      "limão"],
  ["Casa Verdeǜ","Casa Verde"],
  ["Lapǜ",       "Lapa"],
  ["regisǜo",    "região"],
  ["Regiǜo",     "Região"],
  ["regiǜo",     "região"],
  ["emissǜo",    "emissão"],
  ["Emissǜo",    "Emissão"],
  ["laborat\u00F3rios","laboratórios"],
  ["laborat\uFFFDrios","laboratórios"],
  ["laborat\uFFFD\uFF9Cios","laboratórios"],
  ["c\u00EDvicos","cívicos"],
  ["c\uFFFDvicos","cívicos"],
  ["institui\u00E7\u00F5es","instituições"],
  ["institui\uFFFD\uFF9Ces","instituições"],
  ["galp\u00F5es", "galpões"],
  ["galp\uFFFDes", "galpões"],
  ["galp\uFFFD\uFF9Ces","galpões"],
  ["log\u00EDsticas","logísticas"],
  ["log\uFFFDsticas","logísticas"],
  ["Substitui\u00E7\u00E3o","Substituição"],
  ["Substitui\uFFFD\uFF9C\u00E3o","Substituição"],
  ["seguran\u00E7a","segurança"],
  ["Seguran\u00E7a","Segurança"],
  ["seguran\uFFFDa","segurança"],
  ["Seguran\uFFFDa","Segurança"],
  ["laborat\u00F3rio","laboratório"],
  ["laborat\uFFFDrio","laboratório"],
  ["qu\u00EDmica","química"],
  ["qu\uFFFDmica","química"],
  ["contraincǦndio","contraincêndio"],
  ["incǦndio","incêndio"],
  ["manipula\u00E7\u00E3o","manipulação"],
  ["manipula\uFFFD\uFF9C\u00E3o","manipulação"],
  ["Institui\u00E7\u00F5es","Instituições"],
  ["Universit\u00E1rios","Universitários"],
  ["Universit\uFFFDrios","Universitários"],
  ["distribuidoras","distribuidoras"],
  ["l\u00F3gicas","lógicas"],
  ["\u00F3rg\u00E3o","órgão"],
  ["\uFFFDrg\uFF9C\u00E3o","órgão"],
  ["regulador","regulador"],
];

// Função de limpeza mais agressiva: decodifica de Windows-1252 para UTF-8
function fixEncoding(content) {
  let result = content;
  
  // Substituições diretas baseadas nos padrões vistos
  const fixes = [
    [/Butant[ǜǛ]/g,         "Butantã"],
    [/Regulariza[çǜ][ãǜ]o/g, "Regularização"],
    [/regulariza[çǜ][ãǜ]o/g, "regularização"],
    [/Regi[ãǜ]o/g,           "Região"],
    [/regi[ãǜ]o/g,           "região"],
    [/emiss[ãǜ]o/g,          "emissão"],
    [/Emiss[ãǜ]o/g,          "Emissão"],
    [/laborat[ó\uFFFD]rios/g, "laboratórios"],
    [/laborat[ó\uFFFD]rio/g,  "laboratório"],
    [/c[í\uFFFD]vicos/g,      "cívicos"],
    [/galp[õ\uFFFD]es/g,      "galpões"],
    [/log[í\uFFFD]sticas/g,   "logísticas"],
    [/Substitui[çǜ][ãǜ]o/g,  "Substituição"],
    [/[Ss]eguran[çǜ]a/g,     (m) => m[0] === 'S' ? "Segurança" : "segurança"],
    [/qu[í\uFFFD]mica/g,      "química"],
    [/contraincǦndio/g,       "contraincêndio"],
    [/incǦndio/g,             "incêndio"],
    [/manipula[çǜ][ãǜ]o/g,   "manipulação"],
    [/Universit[á\uFFFD]rios/g,"Universitários"],
    [/[ó\uFFFD]rg[ãǜ]o/g,    "órgão"],
    [/Limǜo/g,               "Limão"],
    [/limǜo/g,               "limão"],
    [/Jaçan[ãǜ]/g,           "Jaçanã"],
  ];

  for (const [pattern, replacement] of fixes) {
    result = result.replace(pattern, replacement);
  }

  return result;
}

const PAGES = [
  "avcb-butanta",
  "avcb-casa-verde", 
  "avcb-jacana",
  "avcb-lapa",
  "avcb-limao",
];

for (const dir of PAGES) {
  const filePath = path.join("src", "app", dir, "page.tsx");
  if (!fs.existsSync(filePath)) { console.log("[NAO EXISTE] " + dir); continue; }

  const original = fs.readFileSync(filePath, "utf8");
  const fixed = fixEncoding(original);

  if (fixed !== original) {
    fs.writeFileSync(filePath, fixed, "utf8");
    console.log("[ENCODING CORRIGIDO] " + dir);
  } else {
    console.log("[SEM MUDANÇAS]       " + dir);
  }
}

console.log("\nConcluído! Execute npm run build para validar.");
