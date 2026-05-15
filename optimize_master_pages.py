import os
import sys

app_dir = r"src\app"

dirs = [
    "avcb-butanta","avcb-casa-verde","avcb-centro-bela-vista","avcb-centro-sao-paulo",
    "avcb-ipiranga","avcb-jacana","avcb-lapa","avcb-limao","avcb-penha","avcb-perdizes",
    "avcb-pinheiros","avcb-santana","avcb-tucuruvi","avcb-vila-leopoldina",
    "avcb-vila-madalena","avcb-vila-prudente","avcb-zona-oeste-sao-paulo"
]

zone_map = {
    "pinheiros": ("Zona Oeste", "/avcb-zona-oeste-sao-paulo"),
    "lapa": ("Zona Oeste", "/avcb-zona-oeste-sao-paulo"),
    "perdizes": ("Zona Oeste", "/avcb-zona-oeste-sao-paulo"),
    "butanta": ("Zona Oeste", "/avcb-zona-oeste-sao-paulo"),
    "vila-madalena": ("Zona Oeste", "/avcb-zona-oeste-sao-paulo"),
    "vila-leopoldina": ("Zona Oeste", "/avcb-zona-oeste-sao-paulo"),
    "zona-oeste-sao-paulo": ("Zona Oeste", "/avcb-zona-oeste-sao-paulo"),
    "santana": ("Zona Norte", "/avcb-zona-norte-sao-paulo"),
    "tucuruvi": ("Zona Norte", "/avcb-zona-norte-sao-paulo"),
    "casa-verde": ("Zona Norte", "/avcb-zona-norte-sao-paulo"),
    "limao": ("Zona Norte", "/avcb-zona-norte-sao-paulo"),
    "jacana": ("Zona Norte", "/avcb-zona-norte-sao-paulo"),
    "penha": ("Zona Leste", "/avcb-zona-leste-sao-paulo"),
    "ipiranga": ("Zona Leste", "/avcb-zona-leste-sao-paulo"),
    "vila-prudente": ("Zona Leste", "/avcb-zona-leste-sao-paulo"),
    "centro-sao-paulo": ("Centro", "/avcb-centro-sao-paulo"),
    "centro-bela-vista": ("Centro", "/avcb-centro-sao-paulo"),
}

ok = 0
skip = 0

for d in dirs:
    page_file = os.path.join(app_dir, d, "page.tsx")
    if not os.path.exists(page_file):
        print(f"  SKIP (no file): {d}")
        skip += 1
        continue

    with open(page_file, "r", encoding="utf-8") as f:
        content = f.read()

    if "import TrustBar" in content:
        print(f"  SKIP (done): {d}")
        skip += 1
        continue

    # Neighborhood display name
    key = d.replace("avcb-", "")
    nb = " ".join(w.capitalize() for w in key.split("-"))
    zone_label, zone_href = zone_map.get(key, ("São Paulo", "/avcb-sao-paulo"))

    # 1. Add imports
    anchor = 'import NeighborhoodSilo from "@/components/NeighborhoodSilo";'
    if anchor not in content:
        anchor = 'import LeadForm from "@/components/LeadForm";'
    if anchor not in content:
        print(f"  SKIP (no anchor): {d}")
        skip += 1
        continue

    new_imports = f'''{anchor}
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";'''
    content = content.replace(anchor, new_imports)

    # 2. BreadcrumbNav + TrustBar after hero
    a1 = '{/* Authority Section */}'
    b1 = f'''      {{/* ── BREADCRUMB + TRUST BAR ── */}}
      <BreadcrumbNav
        items={{[
          {{ label: "Home", href: "/" }},
          {{ label: "{zone_label}", href: "{zone_href}" }},
          {{ label: "AVCB {nb}" }},
        ]}}
        dark
      />
      <TrustBar dark />

      {{/* Authority Section */}}'''
    if a1 in content:
        content = content.replace(a1, b1)

    # 3. CTA 2 before Local Footprint
    a2 = '{/* Local Footprint */}'
    b2 = f'''      {{/* ── CTA 2 — APÓS SERVIÇOS ── */}}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Precisa de AVCB em {nb}? Fale agora com um engenheiro especialista.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico gratuito pelo WhatsApp"
            occupationType="imóvel em {nb}"
            variant="primary"
            centered
          />
        </div>
      </div>

      {{/* Local Footprint */}}'''
    if a2 in content:
        content = content.replace(a2, b2)

    # 4. SocialProof before FAQ
    a3 = '{/* FAQ */}'
    b3 = f'''      {{/* ── PROVA SOCIAL ── */}}
      <SocialProof
        testimonial={{{{
          text: "A DRD2 regularizou nosso estabelecimento em {nb} com agilidade e sem burocracia. AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresários da região.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresário — {nb}, São Paulo",
        }}}}
      />

      {{/* FAQ */}}'''
    if a3 in content:
        content = content.replace(a3, b3)

    # 5. CTA 4 before Final Conversion
    a4 = '{/* Final Conversion */}'
    b4 = f'''      {{/* ── CTA 4 ── */}}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Não arrisque seu CNPJ em {nb}.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em {nb}"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

      {{/* Final Conversion */}}'''
    if a4 in content:
        content = content.replace(a4, b4)

    with open(page_file, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"  OK: {d}")
    ok += 1

print(f"\n=== DONE: {ok} optimized, {skip} skipped ===")
