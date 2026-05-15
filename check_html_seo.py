import os
import re
from bs4 import BeautifulSoup
import json

app_dir = r".next\server\app"
results = []

if not os.path.exists(app_dir):
    print("No build dir found.")
    exit()

for root, dirs, files in os.walk(app_dir):
    for f in files:
        if f.endswith(".html") and not f.endswith("404.html") and not f.endswith("500.html"):
            path = os.path.join(root, f)
            slug = path.replace(app_dir, "").replace("\\", "/").replace(".html", "")
            if slug == "/index":
                slug = "/"
            if slug.endswith("/index"):
                slug = slug.replace("/index", "")
            
            with open(path, "r", encoding="utf-8") as fp:
                content = fp.read()
            
            soup = BeautifulSoup(content, "html.parser")
            
            # Text word count
            # Remove scripts and styles
            for script in soup(["script", "style"]):
                script.extract()
            text = soup.get_text(separator=' ')
            words = [w for w in text.split() if w.strip()]
            word_count = len(words)
            
            title_tag = soup.find("title")
            title = title_tag.text.strip() if title_tag else "MISSING"
            
            desc_tag = soup.find("meta", attrs={"name": "description"})
            desc = desc_tag["content"].strip() if desc_tag and desc_tag.has_attr("content") else "MISSING"
            
            h1_tags = soup.find_all("h1")
            h1_count = len(h1_tags)
            
            canonical_tag = soup.find("link", rel="canonical")
            canonical = canonical_tag["href"].strip() if canonical_tag and canonical_tag.has_attr("href") else "MISSING"
            
            results.append({
                "slug": slug,
                "word_count": word_count,
                "title": title,
                "desc": desc,
                "h1_count": h1_count,
                "canonical": canonical
            })

short_pages = [r for r in results if r["word_count"] < 800]
missing_titles = [r for r in results if r["title"] == "MISSING" or r["title"] == ""]
missing_desc = [r for r in results if r["desc"] == "MISSING" or r["desc"] == ""]
missing_h1 = [r for r in results if r["h1_count"] == 0]
multiple_h1 = [r for r in results if r["h1_count"] > 1]
missing_canonical = [r for r in results if r["canonical"] == "MISSING"]

print(f"Total pages parsed: {len(results)}")
print(f"Short pages (<800 words): {len(short_pages)}")

with open("seo_html_audit.json", "w", encoding="utf-8") as f:
    json.dump({
        "short_pages": short_pages,
        "missing_titles": missing_titles,
        "missing_desc": missing_desc,
        "missing_h1": missing_h1,
        "multiple_h1": multiple_h1,
        "missing_canonical": missing_canonical
    }, f, indent=2, ensure_ascii=False)
