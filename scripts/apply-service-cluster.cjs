const fs = require("fs");
const path = require("path");

const appDir = path.join(__dirname, "..", "src", "app");
const importLine = 'import ServiceClusterLinks from "@/components/ServiceClusterLinks";';

const pages = [
  "avcb-sao-paulo",
  "avcb",
  "alarme-incendio-sao-paulo",
  "alarme-de-incendio-para-condominio-sao-paulo",
  "alarme-de-incendio-comercial-escritorio-sp",
  "alarme-de-incendio-escola-faculdade-sp",
  "alarme-de-incendio-galpao-industrial-sp",
  "alarme-de-incendio-hospital-clinica-sp",
  "sprinklers",
  "sistema-de-sprinkler-para-industria-sao-paulo",
  "sistema-de-sprinkler-para-condominio-sao-paulo",
  "hidrantes",
  "sistema-de-hidrantes-para-industria-sao-paulo",
  "sistema-de-hidrantes-para-galpao-sao-paulo",
  "sistema-de-hidrantes-para-condominio-sao-paulo",
  "spda",
  "laudo-estanqueidade-gas-sao-paulo",
  "treinamento-brigada",
  "manutencao",
];

const canonicalMap = {
  "avcb": "/avcb",
  "avcb-sao-paulo": "/avcb-sao-paulo",
  "alarme-incendio-sao-paulo": "/alarme-incendio-sao-paulo",
  "alarme-de-incendio-para-condominio-sao-paulo": "/alarme-incendio-sao-paulo",
  "alarme-de-incendio-comercial-escritorio-sp": "/alarme-incendio-sao-paulo",
  "alarme-de-incendio-escola-faculdade-sp": "/alarme-incendio-sao-paulo",
  "alarme-de-incendio-galpao-industrial-sp": "/alarme-incendio-sao-paulo",
  "alarme-de-incendio-hospital-clinica-sp": "/alarme-incendio-sao-paulo",
  "sprinklers": "/sprinklers",
  "sistema-de-sprinkler-para-industria-sao-paulo": "/sprinklers",
  "sistema-de-sprinkler-para-condominio-sao-paulo": "/sprinklers",
  "hidrantes": "/hidrantes",
  "sistema-de-hidrantes-para-industria-sao-paulo": "/hidrantes",
  "sistema-de-hidrantes-para-galpao-sao-paulo": "/hidrantes",
  "sistema-de-hidrantes-para-condominio-sao-paulo": "/hidrantes",
  "spda": "/spda",
  "laudo-estanqueidade-gas-sao-paulo": "/laudo-estanqueidade-gas-sao-paulo",
  "treinamento-brigada": "/treinamento-brigada",
  "manutencao": "/manutencao",
};

function addImport(content) {
  if (content.includes(importLine)) return content;
  const anchors = [
    'import NeighborhoodSilo from "@/components/NeighborhoodSilo";',
    'import LeadForm from "@/components/LeadForm";',
    'import CtaWhatsApp from "@/components/CtaWhatsApp";',
  ];
  for (const anchor of anchors) {
    if (content.includes(anchor)) return content.replace(anchor, `${anchor}\n${importLine}`);
  }
  return `${importLine}\n${content}`;
}

function insertCluster(content, slug) {
  if (content.includes("<ServiceClusterLinks")) return content;
  const block = `\n      <ServiceClusterLinks currentSlug="${canonicalMap[slug]}" />\n`;
  const anchors = [
    "      <NeighborhoodSilo",
    "      <LeadForm",
    "      {/* ── CTA FINAL",
    "      {/* â”€â”€ CTA FINAL",
    "    </>",
  ];
  for (const anchor of anchors) {
    const idx = content.indexOf(anchor);
    if (idx >= 0) return `${content.slice(0, idx)}${block}\n${content.slice(idx)}`;
  }
  return content;
}

let changed = 0;
for (const slug of pages) {
  const file = path.join(appDir, slug, "page.tsx");
  if (!fs.existsSync(file)) continue;
  const original = fs.readFileSync(file, "utf8");
  let next = addImport(original);
  next = insertCluster(next, slug);
  if (next !== original) {
    fs.writeFileSync(file, next, "utf8");
    changed += 1;
  }
}

console.log(`Service cluster inserted in ${changed} pages.`);
