import os
import re
import json

app_dir = r"src\app"
results = []

for root, dirs, files in os.walk(app_dir):
    for f in files:
        if f == "page.tsx":
            path = os.path.join(root, f)
            slug = root.replace(app_dir, "").replace("\\", "/")
            if not slug:
                slug = "/"
            try:
                with open(path, "r", encoding="utf-8") as fp:
                    content = fp.read()

                # Meta title
                title_m = re.search(r'title:\s*["\']([^"\']+)["\']', content)
                title = title_m.group(1) if title_m else "MISSING"

                # Meta description
                desc_m = re.search(r'description:\s*["\']([^"\']+)["\']', content)
                desc = desc_m.group(1) if desc_m else "MISSING"

                # Canonical
                canonical_m = re.search(r'canonical:\s*["\']([^"\']+)["\']', content)
                canonical = canonical_m.group(1) if canonical_m else "MISSING"

                # H1 count
                h1_matches = re.findall(r"<h1[^>]*>", content)
                h1_count = len(h1_matches)

                # use client
                use_client = ("'use client'" in content or '"use client"' in content)

                # FAQ schema
                faq_schema = "FAQPage" in content

                # Raw img tags
                img_raw = len(re.findall(r"<img ", content))

                # Image components without alt
                img_no_alt = len(re.findall(r"<Image[^/]*/?>", content)) - len(re.findall(r'alt=', content))

                # Word count (rough)
                text = re.sub(r"<[^>]+>", " ", content)
                text = re.sub(r"\{[^}]+\}", " ", text)
                words = len([w for w in text.split() if len(w) > 3])

                # Internal links
                internal_links = len(re.findall(r'href=["\']/', content))

                # WhatsApp CTA count
                cta_count = content.count("whatsappLink") + content.count("CtaWhatsApp")

                results.append({
                    "slug": slug,
                    "title": title,
                    "title_len": len(title),
                    "desc_short": desc[:90] + "..." if len(desc) > 90 else desc,
                    "desc_len": len(desc),
                    "canonical": canonical,
                    "h1_count": h1_count,
                    "use_client": use_client,
                    "faq_schema": faq_schema,
                    "img_raw": img_raw,
                    "words": words,
                    "internal_links": internal_links,
                    "cta_count": cta_count,
                })
            except Exception as e:
                results.append({"slug": slug, "error": str(e)})

with open("seo_audit_raw.json", "w", encoding="utf-8") as fp:
    json.dump(results, fp, ensure_ascii=False, indent=2)

print(f"Scanned {len(results)} pages")

# Quick summary stats
titles = [r["title"] for r in results if "title" in r and r["title"] != "MISSING"]
print(f"Pages with title: {len(titles)}")
print(f"Pages missing title: {sum(1 for r in results if r.get('title') == 'MISSING')}")
print(f"Titles > 60 chars: {sum(1 for r in results if r.get('title_len', 0) > 60)}")
print(f"Titles < 40 chars: {sum(1 for r in results if 0 < r.get('title_len', 0) < 40)}")
print(f"Missing canonical: {sum(1 for r in results if r.get('canonical') == 'MISSING')}")
print(f"H1 missing: {sum(1 for r in results if r.get('h1_count', 0) == 0)}")
print(f"H1 multiple: {sum(1 for r in results if r.get('h1_count', 0) > 1)}")
print(f"use client pages: {sum(1 for r in results if r.get('use_client'))}")
print(f"Pages with FAQ schema: {sum(1 for r in results if r.get('faq_schema'))}")
print(f"Pages with raw img tag: {sum(1 for r in results if r.get('img_raw', 0) > 0)}")
print(f"Pages < 400 words: {sum(1 for r in results if r.get('words', 9999) < 400)}")
print(f"Pages < 800 words: {sum(1 for r in results if r.get('words', 9999) < 800)}")
