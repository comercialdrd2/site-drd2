const fs = require("fs");
const path = require("path");

const appDir = path.join(__dirname, "..", "src", "app");
const importLine = 'import ServiceClusterLinks from "@/components/ServiceClusterLinks";';

const excludedDirs = new Set([
  "__test__",
  "blog",
  "contato",
  "mapa-paginas",
  "obrigado",
  "politica-de-privacidade",
]);

const excludedFiles = new Set(["src/app/page.tsx"]);

function toPosix(filePath) {
  return filePath.replace(/\\/g, "/");
}

function addImport(content) {
  if (content.includes(importLine)) return content;

  const anchors = [
    'import NeighborhoodSilo from "@/components/NeighborhoodSilo";',
    'import InternalLinksBlock from "@/components/InternalLinksBlock";',
    'import LeadForm from "@/components/LeadForm";',
    'import CtaWhatsApp from "@/components/CtaWhatsApp";',
    'import { JsonLD, generateMasterSchema } from "@/components/JsonLD";',
  ];

  for (const anchor of anchors) {
    if (content.includes(anchor)) {
      return content.replace(anchor, `${anchor}\n${importLine}`);
    }
  }

  return `${importLine}\n${content}`;
}

function canonicalFor(dirName) {
  const map = {
    avcb: "/avcb",
    "avcb-sao-paulo": "/avcb-sao-paulo",
    "alarme-incendio-sao-paulo": "/alarme-incendio-sao-paulo",
    "alarme-de-incendio-para-condominio-sao-paulo": "/alarme-incendio-sao-paulo",
    "alarme-de-incendio-comercial-escritorio-sp": "/alarme-incendio-sao-paulo",
    "alarme-de-incendio-escola-faculdade-sp": "/alarme-incendio-sao-paulo",
    "alarme-de-incendio-galpao-industrial-sp": "/alarme-incendio-sao-paulo",
    "alarme-de-incendio-hospital-clinica-sp": "/alarme-incendio-sao-paulo",
    sprinklers: "/sprinklers",
    "sistema-de-sprinkler-para-industria-sao-paulo": "/sprinklers",
    "sistema-de-sprinkler-para-condominio-sao-paulo": "/sprinklers",
    hidrantes: "/hidrantes",
    "sistema-de-hidrantes-para-industria-sao-paulo": "/hidrantes",
    "sistema-de-hidrantes-para-galpao-sao-paulo": "/hidrantes",
    "sistema-de-hidrantes-para-condominio-sao-paulo": "/hidrantes",
    spda: "/spda",
    "laudo-estanqueidade-gas-sao-paulo": "/laudo-estanqueidade-gas-sao-paulo",
    "treinamento-brigada": "/treinamento-brigada",
    manutencao: "/manutencao",
  };

  return map[dirName] ?? `/${dirName}`;
}

function insertCluster(content, dirName) {
  if (content.includes("<ServiceClusterLinks")) return content;
  const block = `\n      <ServiceClusterLinks currentSlug="${canonicalFor(dirName)}" />\n`;

  const anchors = [
    "      <NeighborhoodSilo",
    "      <InternalLinksBlock",
    "      <LeadForm",
    "      {/* Documentacao Necessaria */}",
    "      {/* ── CTA FINAL",
    "      {/* â”€â”€ CTA FINAL",
    "    </>",
  ];

  for (const anchor of anchors) {
    const index = content.indexOf(anchor);
    if (index >= 0) return `${content.slice(0, index)}${block}\n${content.slice(index)}`;
  }

  return content;
}

let changed = 0;

for (const entry of fs.readdirSync(appDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  if (excludedDirs.has(entry.name)) continue;

  const file = path.join(appDir, entry.name, "page.tsx");
  if (!fs.existsSync(file)) continue;

  if (excludedFiles.has(toPosix(path.relative(path.join(__dirname, ".."), file)))) continue;

  const original = fs.readFileSync(file, "utf8");
  let next = addImport(original);
  next = insertCluster(next, entry.name);

  if (next !== original) {
    fs.writeFileSync(file, next, "utf8");
    changed += 1;
  }
}

console.log(`Service cluster expanded to ${changed} additional static SEO pages.`);
