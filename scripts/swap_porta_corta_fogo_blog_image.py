"""Atualiza os 8 posts de porta corta-fogo no blog.ts para usar a nova imagem."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG = ROOT / "src" / "data" / "blog.ts"

SLUGS = [
    "o-que-reprova-porta-corta-fogo-no-avcb",
    "quando-trocar-porta-corta-fogo",
    "porta-corta-fogo-precisa-de-manutencao",
    "normas-porta-corta-fogo-nbr-it11",
    "como-regularizar-porta-corta-fogo",
    "vistoria-bombeiros-porta-corta-fogo",
    "erros-em-porta-corta-fogo-que-invalidam-avcb",
    "porta-corta-fogo-para-avcb-o-que-exige",
]

NEW_IMAGE = "/images/hero-porta-corta-fogo.webp"

text = BLOG.read_text(encoding="utf-8")
updated = 0

for slug in SLUGS:
    # encontra o bloco do post e troca o campo image dele
    pattern = re.compile(
        r'(slug:\s*"' + re.escape(slug) + r'"[^}]*?image:\s*)"([^"]+)"',
        re.DOTALL
    )
    new_text, n = pattern.subn(r'\1"' + NEW_IMAGE + '"', text)
    if n > 0:
        text = new_text
        updated += 1
        print(f"  OK: {slug}")
    else:
        print(f"  NAO ENCONTRADO: {slug}")

BLOG.write_text(text, encoding="utf-8")
print(f"\nTotal atualizado: {updated}/{len(SLUGS)}")
