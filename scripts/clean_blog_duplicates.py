"""Remove posts duplicados/canibalizando do blog.ts preservando estrutura."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data" / "blog.ts"

# Slugs a remover do blog.ts
TO_REMOVE = [
    # Duplicados de pastas estaticas (a pasta tem o conteudo bom)
    "avcb-vencido-o-que-fazer",
    "como-funciona-vistoria-do-corpo-de-bombeiros",
    "como-tirar-avcb-em-sao-paulo",
    "diferenca-entre-avcb-e-clcb",
    "prazo-para-emissao-de-avcb",
    "quanto-custa-avcb-em-sao-paulo",
    "quem-paga-o-avcb-proprietario-ou-inquilino",
    "quem-precisa-de-avcb",
    # Canibalizando -> redirecionados via next.config
    "quanto-tempo-demora-para-emitir-o-avcb-sp",
    "avcb-vencido-o-que-fazer-evitar-interdicao",
    "quanto-custa-avcb-sp-precos-prazos",
    "diferenca-entre-avcb-e-clcb-em-sao-paulo",
    "avcb-x-clcb-diferenca-na-pratica",
    "sprinkler-obrigatorio-sp",
    "o-que-e-avcb-e-quando-ele-e-obrigatorio",
    "avcb-restaurante-sao-paulo",
]

text = DATA.read_text(encoding="utf-8")
print(f"Tamanho original: {len(text)} chars")

# Funcao: encontra cada bloco "{ slug: \"X\", ... }" e remove se slug estiver em TO_REMOVE
# Estrategia: localiza "slug: \"X\"" depois acha as chaves balanceadas ao redor

def find_post_block(text, slug):
    """Retorna (start, end) do bloco { ... slug: "X" ... }, ou None."""
    needle = f'slug: "{slug}"'
    idx = text.find(needle)
    while idx != -1:
        # volta encontrando o { que abre o bloco
        depth = 0
        start = idx
        while start > 0:
            c = text[start]
            if c == "}":
                depth += 1
            elif c == "{":
                if depth == 0:
                    break
                depth -= 1
            start -= 1
        # avanca encontrando o } que fecha
        depth = 0
        end = idx
        while end < len(text):
            c = text[end]
            if c == "{":
                depth += 1
            elif c == "}":
                if depth == 0:
                    break
                depth -= 1
            end += 1
        # inclui virgula e quebra de linha posteriores
        rest = end + 1
        while rest < len(text) and text[rest] in ",\n\r \t":
            rest += 1
            if rest - end > 5:  # limite
                break
        return (start, rest, idx)
    return None

removed_count = 0
for slug in TO_REMOVE:
    # remove ate todas as ocorrencias (caso de duplicatas internas)
    while True:
        res = find_post_block(text, slug)
        if not res:
            break
        start, end, _ = res
        text = text[:start] + text[end:]
        removed_count += 1
        print(f"  removido: {slug}")

# Remove tambem a segunda ocorrencia de avcb-para-casa-de-repouso (duplicata interna)
needle = 'slug: "avcb-para-casa-de-repouso-sao-paulo"'
first = text.find(needle)
second = text.find(needle, first + 1) if first != -1 else -1
if second != -1:
    res = find_post_block(text[second-1:], "avcb-para-casa-de-repouso-sao-paulo")
    # mais facil: vamos refazer find_post_block para a segunda ocorrencia
    # encontra inicio do bloco
    depth = 0
    start = second
    while start > 0:
        c = text[start]
        if c == "}":
            depth += 1
        elif c == "{":
            if depth == 0:
                break
            depth -= 1
        start -= 1
    depth = 0
    end = second
    while end < len(text):
        c = text[end]
        if c == "{":
            depth += 1
        elif c == "}":
            if depth == 0:
                break
            depth -= 1
        end += 1
    rest = end + 1
    while rest < len(text) and text[rest] in ",\n\r \t":
        rest += 1
        if rest - end > 5:
            break
    text = text[:start] + text[rest:]
    removed_count += 1
    print(f"  removida 2a ocorrencia: avcb-para-casa-de-repouso-sao-paulo")

print(f"\nTotal removido: {removed_count}")
print(f"Tamanho final: {len(text)} chars")

DATA.write_text(text, encoding="utf-8")
print("Arquivo salvo.")

# verifica integridade basica
slugs_after = re.findall(r'^\s+slug:\s*"([^"]+)"', text, re.MULTILINE)
print(f"Posts restantes no blog.ts: {len(slugs_after)}")
