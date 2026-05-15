"""Auditoria do blog: canibalizacao, duplicacao, schema completeness."""
import re
from pathlib import Path
from collections import Counter

ROOT = Path(__file__).resolve().parent.parent
BLOG_DIR = ROOT / "src" / "app" / "blog"
DATA_FILE = ROOT / "src" / "data" / "blog.ts"

# 1) Slugs de pastas estaticas
static_folders = [p.name for p in BLOG_DIR.iterdir() if p.is_dir() and not p.name.startswith("[")]
print(f"Pastas estaticas: {len(static_folders)}")
for s in static_folders:
    print(f"  /{s}")

# 2) Slugs no blog.ts
data_content = DATA_FILE.read_text(encoding="utf-8")
slug_matches = re.findall(r'^\s+slug:\s*"([^"]+)"', data_content, re.MULTILINE)
print(f"\nSlugs em blog.ts: {len(slug_matches)}")

# Duplicatas internas no blog.ts
slug_counts = Counter(slug_matches)
internal_dups = [s for s, c in slug_counts.items() if c > 1]
if internal_dups:
    print(f"\n*** DUPLICATAS NO blog.ts ***")
    for d in internal_dups:
        print(f"  {d} aparece {slug_counts[d]}x")

# 3) Slugs que coexistem (pasta + blog.ts) -> roteamento ambiguo
overlap = set(static_folders) & set(slug_matches)
print(f"\nSlugs em PASTA + blog.ts (rotas duplicadas): {len(overlap)}")
for s in sorted(overlap):
    print(f"  /blog/{s}")

# 4) Extrair titles para canibalizacao
title_matches = re.findall(r'^\s+title:\s*"([^"]+)"', data_content, re.MULTILINE)
print(f"\nTitles em blog.ts: {len(title_matches)}")

# Tambem extrai categories
cat_matches = re.findall(r'^\s+category:\s*"([^"]+)"', data_content, re.MULTILINE)
print(f"Categorias: {len(set(cat_matches))} unicas")
for c, n in Counter(cat_matches).most_common(10):
    print(f"  {c}: {n}")

# 5) Detectar canibalizacao por keywords no slug
print("\n=== Possiveis CANIBALIZACOES (slugs com mesmo tema/intencao) ===")
intent_groups = {
    "prazo/tempo emissao AVCB": ["prazo-para-emissao", "quanto-tempo-demora", "tempo-para-emitir"],
    "AVCB vencido": ["avcb-vencido"],
    "quanto custa AVCB": ["quanto-custa-avcb"],
    "diferenca AVCB CLCB": ["diferenca-entre-avcb-e-clcb", "avcb-x-clcb", "qual-diferenca"],
    "quem precisa AVCB": ["quem-precisa-de-avcb", "o-que-e-avcb-e-quando", "quem-paga-o-avcb"],
    "casa repouso": ["casa-de-repouso"],
    "restaurante AVCB": ["avcb-para-restaurante", "avcb-restaurante"],
    "como tirar AVCB": ["como-tirar-avcb", "como-funciona-vistoria"],
    "condominio AVCB": ["condominio-corpo-de-bombeiros", "condominio-it-19", "renovar-avcb-condominio"],
    "alarme incendio": ["alarme-de-incendio", "alarme-incendio"],
    "porta corta-fogo": ["porta-corta-fogo"],
    "sprinkler obrigatorio": ["sprinkler-obrigatorio"],
}

all_slugs = list(set(slug_matches) | set(static_folders))
for intent, keywords in intent_groups.items():
    matches = [s for s in all_slugs if any(kw in s for kw in keywords)]
    if len(matches) > 1:
        print(f"\n[{len(matches)}] {intent}:")
        for m in sorted(matches):
            tag = " [PASTA+DATA]" if m in overlap else (" [pasta]" if m in static_folders else " [data]")
            print(f"    /{m}{tag}")
