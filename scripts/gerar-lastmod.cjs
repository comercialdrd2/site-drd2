#!/usr/bin/env node
/**
 * Gera src/data/lastmod.json: data da ÚLTIMA alteração real de cada página,
 * para o <lastmod> do sitemap.
 *
 * Por que existe: o sitemap usava a data de modificação do arquivo page.tsx.
 * Na Vercel o repositório é clonado do zero a cada deploy, então todas as
 * páginas saíam com a data do deploy ("agora"). O Google percebe que a data
 * muda sem o conteúdo mudar e passa a ignorar o lastmod do site inteiro.
 *
 * Como calcula: para cada page.tsx, pega a data do último commit que mexeu
 * na pasta da página OU nos componentes/dados que ela importa diretamente
 * (ex.: páginas de bairro mudam quando o modelo LocalNeighborhoodSeoLanding muda).
 *
 * Quando rodar: localmente, ANTES de commitar alterações de conteúdo:
 *   node scripts/gerar-lastmod.cjs
 * Não roda no build da Vercel porque lá o histórico do git é raso.
 */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const APP_DIR = path.join(ROOT, "src", "app");
const OUT = path.join(ROOT, "src", "data", "lastmod.json");

function git(args) {
  return execFileSync("git", args, { cwd: ROOT, encoding: "utf8" }).trim();
}

if (git(["rev-parse", "--is-shallow-repository"]) === "true") {
  console.error("Histórico do git incompleto (clone raso). Rode em um clone completo.");
  process.exit(1);
}

const cache = new Map();
function lastCommitDate(relPaths) {
  const key = relPaths.join("|");
  if (cache.has(key)) return cache.get(key);
  // Considera também alterações ainda não commitadas: nesse caso vale a data de hoje.
  const dirty = git(["status", "--porcelain", "--", ...relPaths]);
  const date = dirty ? new Date().toISOString() : git(["log", "-1", "--format=%cI", "--", ...relPaths]);
  cache.set(key, date);
  return date;
}

function resolveImport(spec) {
  if (!spec.startsWith("@/")) return null;
  const base = path.join(ROOT, "src", spec.slice(2));
  for (const ext of [".tsx", ".ts", ".json", "/index.tsx", "/index.ts"]) {
    if (fs.existsSync(base + ext)) return path.relative(ROOT, base + ext).replace(/\\/g, "/");
  }
  return null;
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (e.name === "page.tsx") out.push(full);
  }
  return out;
}

const result = {};
for (const file of walk(APP_DIR)) {
  const dir = path.dirname(file);
  let route = "/" + path.relative(APP_DIR, dir).replace(/\\/g, "/");
  if (route === "/.") route = "/";
  if (route === "/") route = "/";
  if (/\[[^\]]+\]/.test(route)) continue;

  const src = fs.readFileSync(file, "utf8");
  // Só os arquivos da própria pasta (não as subpastas, que são outras páginas).
  const deps = new Set(
    fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isFile())
      // Na raiz (src/app) ficam arquivos do site todo (layout, sitemap, robots): usa só o page.tsx.
      .filter((e) => dir !== APP_DIR || e.name === "page.tsx")
      .map((e) => path.relative(ROOT, path.join(dir, e.name)).replace(/\\/g, "/"))
  );
  for (const m of src.matchAll(/from\s+["'](@\/(?:components|data)\/[^"']+)["']/g)) {
    const resolved = resolveImport(m[1]);
    if (resolved) deps.add(resolved);
  }
  const date = lastCommitDate([...deps].sort());
  if (date) result[route] = date;
}

const sorted = Object.fromEntries(Object.entries(result).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(OUT, JSON.stringify(sorted, null, 2) + "\n");
console.log(`lastmod.json: ${Object.keys(sorted).length} páginas`);
