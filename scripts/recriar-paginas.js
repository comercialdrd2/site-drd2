// Recria as pastas de pagina (src/app/<slug>/page.tsx) que foram deletadas,
// reusando os data files que sobreviveram em src/data/pages/<slug>.ts.
// Cada pagina importa seu conteudo e renderiza via SeoContentLanding.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const APP = path.join(ROOT, "src", "app");
const DATA = path.join(ROOT, "src", "data", "pages");

// Define parent do breadcrumb por grupo
function groupMeta(slug) {
  if (slug.startsWith("alvara-bombeiro-"))
    return { parent: { label: "Alvará do Corpo de Bombeiros", href: "/avcb-sao-paulo" } };
  if (slug.startsWith("laudo-bombeiro-"))
    return { parent: { label: "Laudo do Corpo de Bombeiros", href: "/avcb-sao-paulo" } };
  if (slug.startsWith("renovacao-clcb-"))
    return { parent: { label: "Renovação de CLCB", href: "/clcb-sao-paulo" } };
  return { parent: { label: "AVCB em São Paulo", href: "/avcb-sao-paulo" } };
}

// occupationType legivel a partir do slug
function occupationFromSlug(slug) {
  return slug
    .replace(/^alvara-bombeiro-/, "")
    .replace(/^laudo-bombeiro-/, "")
    .replace(/^renovacao-clcb-/, "")
    .replace(/^avcb-/, "")
    .replace(/-sao-paulo$/, "")
    .replace(/-/g, " ")
    .trim();
}

let created = 0;
let skipped = 0;
const problems = [];

for (const file of fs.readdirSync(DATA)) {
  if (!file.endsWith(".ts")) continue;
  const slug = file.replace(/\.ts$/, "");
  const pageDir = path.join(APP, slug);
  const pagePath = path.join(pageDir, "page.tsx");

  if (fs.existsSync(pagePath)) {
    skipped++;
    continue;
  }

  const src = fs.readFileSync(path.join(DATA, file), "utf8");
  const m = src.match(/export const (\w+)\s*=/);
  if (!m) {
    problems.push(`${file}: nao achei 'export const'`);
    continue;
  }
  const exportName = m[1];

  // So tratamos data files compativeis com SeoContentLanding (tem sections + faq/faqs)
  const hasSections = /\n\s*sections:\s*\[/.test(src);
  const hasFaq = /\n\s*faqs?:\s*\[/.test(src);
  if (!hasSections || !hasFaq) {
    problems.push(`${slug}: estrutura incompativel (sections=${hasSections} faq=${hasFaq}) — pular`);
    continue;
  }

  const { parent } = groupMeta(slug);
  const occupation = occupationFromSlug(slug);

  const content = `import SeoContentLanding, { generateSeoMetadata } from "@/components/SeoContentLanding";
import { ${exportName} as content } from "@/data/pages/${slug}";

export const metadata = generateSeoMetadata(content);

export default function Page() {
  return (
    <SeoContentLanding
      content={content}
      breadcrumbParent={{ label: ${JSON.stringify(parent.label)}, href: ${JSON.stringify(parent.href)} }}
      occupationType={${JSON.stringify(occupation)}}
    />
  );
}
`;

  fs.mkdirSync(pageDir, { recursive: true });
  fs.writeFileSync(pagePath, content, "utf8");
  created++;
  console.log("CRIADA  /" + slug);
}

console.log("\n==== RESUMO ====");
console.log("Criadas:", created);
console.log("Ja existiam:", skipped);
if (problems.length) {
  console.log("\nPULADAS (estrutura diferente — tratar a parte):");
  problems.forEach((p) => console.log("  - " + p));
}
