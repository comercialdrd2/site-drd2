/**
 * Lote 3: URLs antigas cujo bairro já tem página individual viva em URL nova.
 * Política (aprovada pelo Samuel): cada bairro mantém página própria; nunca juntar bairros.
 * - avcb-<bairro> com dados → página própria (useRichData=false p/ não duplicar a irmã de renovação)
 * - renovacao-clcb-<bairro>-sao-paulo com dados → página própria (modo clcb não usa richData)
 * - renovacao-avcb-condominio-<bairro> com irmã renovacao-avcb-<bairro> viva → 301 (mesmo bairro, mesma intenção)
 * - sem dados → vai pro Lote 2 (escrever conteúdo)
 */
const fs = require("fs");
const path = require("path");
const ROOT = __dirname;

const lnSrc = fs.readFileSync(path.join(ROOT, "src/data/localNeighborhoodSeoPages.ts"), "utf8");
const ln = new Set([...lnSrc.matchAll(/"?slug"?\s*:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]));

const pairs = fs.readFileSync(path.join(ROOT, "map_found.txt"), "utf8")
  .split(/\r?\n/).filter(Boolean)
  .map((l) => l.split(" -> ").map((s) => s.trim()));

const wrappers = [], redirects = [], defer = [], skip = [];

function mkWrapper(url, base, mode, useRich) {
  const dir = path.join(ROOT, "src/app", url);
  if (fs.existsSync(dir)) { skip.push(url); return; }
  fs.mkdirSync(dir, { recursive: true });
  const extra = useRich === false ? " useRichData={false}" : "";
  const page = `import LocalNeighborhoodSeoLanding, { localNeighborhoodMetadata } from "@/components/LocalNeighborhoodSeoLanding";
import { getLocalNeighborhood } from "@/data/localNeighborhoodSeoPages";
const neighborhood = getLocalNeighborhood("${base}")!;
export const metadata = localNeighborhoodMetadata(neighborhood, "${mode}");
export default function Page() { return <LocalNeighborhoodSeoLanding neighborhood={neighborhood} mode="${mode}"${extra} />; }
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), page);
  wrappers.push(url + "  [" + mode + (useRich === false ? ", sem richData" : "") + "]");
}

for (const [oldUrl, succ] of pairs) {
  if (fs.existsSync(path.join(ROOT, "src/app", oldUrl))) { skip.push(oldUrl); continue; }
  let m;
  if ((m = oldUrl.match(/^renovacao-avcb-condominio-(.+)$/))) {
    const base = m[1];
    if (fs.existsSync(path.join(ROOT, "src/app", "renovacao-avcb-" + base))) {
      redirects.push({ source: "/" + oldUrl, destination: "/renovacao-avcb-" + base });
    } else if (ln.has(base)) {
      mkWrapper(oldUrl, base, "condominio", true);
    } else defer.push(oldUrl);
  } else if ((m = oldUrl.match(/^renovacao-clcb-(.+)-sao-paulo$/))) {
    const base = m[1];
    if (ln.has(base)) mkWrapper(oldUrl, base, "clcb", true);
    else defer.push(oldUrl);
  } else if ((m = oldUrl.match(/^renovacao-clcb-(.+)$/))) {
    defer.push(oldUrl); // cidades sem -sao-paulo → Lote 2
  } else if ((m = oldUrl.match(/^avcb-(.+)$/))) {
    const base = m[1];
    if (ln.has(base)) mkWrapper(oldUrl, base, "avcb", false);
    else defer.push(oldUrl);
  } else defer.push(oldUrl);
}

fs.writeFileSync(path.join(ROOT, "lote3_redirects.txt"),
  redirects.map((r) => `      { source: '${r.source}', destination: '${r.destination}', permanent: true },`).join("\n") + "\n");
fs.writeFileSync(path.join(ROOT, "lote3_defer.txt"), defer.join("\n"));

console.log("páginas próprias criadas:", wrappers.length);
wrappers.forEach((w) => console.log("  +", w));
console.log("redirects mesmo-bairro:", redirects.length, "(lote3_redirects.txt)");
console.log("deferidos p/ Lote 2:", defer.length, "(lote3_defer.txt)");
console.log("pulados (já existiam):", skip.length);
