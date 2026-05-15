import json

with open("seo_audit_raw.json", encoding="utf-8") as f:
    data = json.load(f)

print("=== MISSING TITLE ===")
for p in data:
    if p.get("title") == "MISSING":
        print(" ", p["slug"])

print("\n=== TITLES > 60 CHARS ===")
for p in sorted(data, key=lambda x: x.get("title_len", 0), reverse=True):
    tl = p.get("title_len", 0)
    if tl > 60:
        slug = p["slug"]
        title = p["title"][:72]
        print(f"  [{tl}] {slug} => {title}")

print("\n=== MISSING CANONICAL ===")
for p in data:
    if p.get("canonical") == "MISSING":
        print(" ", p["slug"])

print("\n=== USE CLIENT PAGES ===")
for p in data:
    if p.get("use_client"):
        print(" ", p["slug"])

print("\n=== FAQ SCHEMA (ONLY 3?) ===")
for p in data:
    if p.get("faq_schema"):
        print(" ", p["slug"])

print("\n=== RAW IMG TAG ===")
for p in data:
    if p.get("img_raw", 0) > 0:
        slug = p["slug"]
        count = p["img_raw"]
        print(f"  {slug} => {count} raw img tags")

print("\n=== LOW WORD COUNT OCCUPATION PAGES ===")
occ = [p for p in data if "avcb-" in p.get("slug", "") and p.get("words", 9999) < 600]
for p in sorted(occ, key=lambda x: x.get("words", 0)):
    slug = p["slug"]
    words = p.get("words", 0)
    print(f"  [{words} words] {slug}")

print("\n=== DUPLICATE / VERY SHORT TITLES (<40 chars) ===")
for p in data:
    tl = p.get("title_len", 999)
    if 0 < tl < 40:
        slug = p["slug"]
        title = p["title"]
        print(f"  [{tl}] {slug} => {title}")

print("\n=== TITLE DUPLICATION CHECK ===")
seen_titles = {}
for p in data:
    t = p.get("title", "")
    if t and t != "MISSING":
        key = t[:40].lower()
        if key in seen_titles:
            print(f"  POSSIBLE DUPLICATE:")
            print(f"    {seen_titles[key]}")
            print(f"    {p['slug']} => {t[:60]}")
        else:
            seen_titles[key] = p["slug"] + " => " + t[:60]

print("\n=== CTA COUNT ON OCCUPATION PAGES ===")
occ2 = [p for p in data if "avcb-" in p.get("slug", "") and "/blog/" not in p.get("slug", "")]
for p in sorted(occ2, key=lambda x: x.get("cta_count", 0)):
    cta = p.get("cta_count", 0)
    slug = p["slug"]
    if cta < 4:
        print(f"  [CTAs: {cta}] {slug}")

print("\n=== SITEMAP MISSING PAGES (spot check) ===")
sitemap_pages = [
    "/avcb-hostel-sao-paulo", "/avcb-motel-sao-paulo",
    "/avcb-hotel-sao-paulo", "/avcb-para-igreja-sao-paulo",
    "/avcb-para-academia-sao-paulo", "/avcb-para-escola-sao-paulo",
    "/avcb-hospital-clinica-sao-paulo", "/avcb-para-casa-de-repouso-sao-paulo",
    "/avcb-pinheiros", "/avcb-lapa", "/avcb-moema",
    "/blog/avcb-vencido-o-que-fazer",
]
# These need to be compared with the actual sitemap.ts content shown above
sitemap_in_code = [
    "/avcb-sao-paulo", "/clcb-sao-paulo", "/avcb-condominio-sao-paulo",
    "/avcb-galpao-industrial-sao-paulo", "/avcb-hospital-clinica-sao-paulo",
    "/avcb-comercial-escritorio-sao-paulo", "/avcb-escola-faculdade-sao-paulo",
    "/avcb-restaurante-sao-paulo", "/avcb-supermercado-sao-paulo",
    "/avcb-jabaquara", "/avcb-moema", "/avcb-itaim-bibi",
    "/avcb-pinheiros", "/avcb-bela-vista",
]
for page in sitemap_pages:
    if page not in sitemap_in_code:
        print(f"  MISSING FROM SITEMAP: {page}")
