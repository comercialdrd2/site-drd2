from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "public" / "images"

TARGETS = [
    "eng-samuel-oficial.webp",
    "hero-padaria.png",
    "hero-shopping-sao-paulo.png",
    "page-pet.png",
    "hero-casa-repouso.png",
    "banner-avcb.png",
    "banner-hero.jpg",
    "page-treinamento-brigada.png",
    "hero-drogaria.png",
    "hero-farmacia.png",
    "hero-casa-noturna.png",
    "page-projetos.png",
    "page-avcb.png",
    "hero-renovacao-condominio.png",
    "hero-escritorio-moderno.png",
    "hero-creche.png",
    "page-sprinklers.png",
    "hero-posto-combustivel.png",
    "hero-escola.png",
    "hero-boate.png",
    "hero-hotel.png",
    "hero-academia.png",
    "hero-hostel.png",
    "page-alarme.png",
    "hero_motel_avcb.png",
    "hero-igreja.png",
    "page-home.png",
    "hero-academia-v2.jpg",
    "hero-clinica-odontologica.png",
    "hero-motel.png",
    "page-clcb.png",
    "page-escada-pressurizada.png",
    "page-servicos.png",
    "page-sobre-hero.png",
    "page-treinamento-brigada-v3.png",
    "blog/blog_hero_avcb_condominio.png",
    "blog/blog_hero_avcb_creche.png",
    "blog/blog_hero_avcb_galpao.png",
    "blog/blog_hero_avcb_hospital.png",
    "blog/blog_hero_avcb_preco.png",
    "blog/blog_hero_avcb_restaurante.png",
    "blog/blog_hero_avcb_vencido.png",
    "blog/blog_hero_casa_repouso_avcb.png",
    "blog/fire_safety_equipment_premium.png",
]


def max_width_for(name: str) -> int:
    if name.startswith("eng-samuel"):
        return 900
    if name.startswith("page-"):
        return 1400
    return 1920


def optimize_image(name: str):
    source = IMAGES / name
    if not source.exists():
        return None

    original_size = source.stat().st_size
    output = source if source.suffix.lower() == ".webp" else source.with_suffix(".webp")
    temp = output.with_suffix(output.suffix + ".tmp")

    with Image.open(source) as image:
        image = image.convert("RGB")
        max_width = max_width_for(name)
        if image.width > max_width:
            ratio = max_width / image.width
            image = image.resize((max_width, round(image.height * ratio)), Image.Resampling.LANCZOS)
        image.save(temp, "WEBP", quality=72, method=6)

    if output == source:
        temp.replace(source)
    else:
        temp.replace(output)

    return {
        "source": source.name,
        "output": output.name,
        "before": original_size,
        "after": output.stat().st_size,
    }


def replace_references(changes):
    text_files = [
        *ROOT.glob("src/**/*.tsx"),
        *ROOT.glob("src/**/*.ts"),
        *ROOT.glob("src/**/*.mdx"),
    ]
    replacements = {
        f"/images/{item['source']}": f"/images/{item['output']}"
        for item in changes
        if item["source"] != item["output"]
    }

    for file in text_files:
        content = file.read_text(encoding="utf-8")
        updated = content
        for old, new in replacements.items():
            updated = updated.replace(old, new)
        if updated != content:
            file.write_text(updated, encoding="utf-8")


def main():
    changes = []
    for name in TARGETS:
        result = optimize_image(name)
        if result:
            changes.append(result)

    replace_references(changes)

    total_before = sum(item["before"] for item in changes)
    total_after = sum(item["after"] for item in changes)
    print(f"Optimized {len(changes)} images")
    print(f"Before: {total_before:,} bytes")
    print(f"After:  {total_after:,} bytes")
    print(f"Saved:  {total_before - total_after:,} bytes")
    for item in changes:
        saved = item["before"] - item["after"]
        print(f"{item['source']} -> {item['output']}: {item['before']:,} -> {item['after']:,} ({saved:,} saved)")


if __name__ == "__main__":
    main()
