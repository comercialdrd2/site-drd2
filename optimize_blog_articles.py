"""
DRD2 Blog Article Optimizer
Adds: BreadcrumbNav (after hero), CtaWhatsApp CTA (after intro content, before FAQ),
and Related Articles section (before Final Action CTA)
"""
import os

blog_dir = r"src\app\blog"

# Article config: slug -> (breadcrumb category, CTA label, related articles)
articles = {
    "avcb-vencido-o-que-fazer": {
        "category": "Regularização Urgente",
        "cta_text": "Seu AVCB está vencido? Fale agora com um engenheiro — diagnóstico gratuito.",
        "cta_label": "Regularizar AVCB Vencido pelo WhatsApp",
        "related": [
            ("Prazo para Emissão de AVCB", "/blog/prazo-para-emissao-de-avcb"),
            ("Quanto Custa o AVCB em SP?", "/blog/quanto-custa-avcb-em-sao-paulo"),
            ("Como Tirar o AVCB em SP", "/blog/como-tirar-avcb-em-sao-paulo"),
            ("Quem Precisa de AVCB?", "/blog/quem-precisa-de-avcb"),
        ]
    },
    "como-funciona-vistoria-do-corpo-de-bombeiros": {
        "category": "Processo Técnico",
        "cta_text": "Quer garantir aprovação na vistoria? Solicite um diagnóstico gratuito.",
        "cta_label": "Falar com engenheiro antes da vistoria",
        "related": [
            ("Prazo para Emissão de AVCB", "/blog/prazo-para-emissao-de-avcb"),
            ("Como Tirar o AVCB em SP", "/blog/como-tirar-avcb-em-sao-paulo"),
            ("Diferença entre AVCB e CLCB", "/blog/diferenca-entre-avcb-e-clcb"),
            ("AVCB Vencido: O Que Fazer?", "/blog/avcb-vencido-o-que-fazer"),
        ]
    },
    "como-tirar-avcb-em-sao-paulo": {
        "category": "Guia Completo",
        "cta_text": "Pronto para iniciar o processo? Nosso time começa hoje — sem burocracia.",
        "cta_label": "Solicitar diagnóstico gratuito pelo WhatsApp",
        "related": [
            ("Prazo para Emissão de AVCB", "/blog/prazo-para-emissao-de-avcb"),
            ("Quanto Custa o AVCB em SP?", "/blog/quanto-custa-avcb-em-sao-paulo"),
            ("Quem Precisa de AVCB?", "/blog/quem-precisa-de-avcb"),
            ("Diferença entre AVCB e CLCB", "/blog/diferenca-entre-avcb-e-clcb"),
        ]
    },
    "diferenca-entre-avcb-e-clcb": {
        "category": "Documentação Técnica",
        "cta_text": "Não sabe se precisa de AVCB ou CLCB? Descubra em minutos — diagnóstico gratuito.",
        "cta_label": "Descobrir meu enquadramento pelo WhatsApp",
        "related": [
            ("Como Tirar o AVCB em SP", "/blog/como-tirar-avcb-em-sao-paulo"),
            ("Quem Precisa de AVCB?", "/blog/quem-precisa-de-avcb"),
            ("Quanto Custa o AVCB em SP?", "/blog/quanto-custa-avcb-em-sao-paulo"),
            ("Prazo para Emissão de AVCB", "/blog/prazo-para-emissao-de-avcb"),
        ]
    },
    "prazo-para-emissao-de-avcb": {
        "category": "Cronograma de Obtenção",
        "cta_text": "Não perca prazos — inicie hoje e receba o AVCB no menor tempo possível.",
        "cta_label": "Iniciar processo pelo WhatsApp agora",
        "related": [
            ("Quanto Custa o AVCB em SP?", "/blog/quanto-custa-avcb-em-sao-paulo"),
            ("Como Tirar o AVCB em SP", "/blog/como-tirar-avcb-em-sao-paulo"),
            ("AVCB Vencido: O Que Fazer?", "/blog/avcb-vencido-o-que-fazer"),
            ("Quem Precisa de AVCB?", "/blog/quem-precisa-de-avcb"),
        ]
    },
    "quanto-custa-avcb-em-sao-paulo": {
        "category": "Guia de Preços 2024",
        "cta_text": "Quer saber o custo exato para o seu imóvel? Diagnóstico gratuito — sem compromisso.",
        "cta_label": "Receber orçamento pelo WhatsApp",
        "related": [
            ("Prazo para Emissão de AVCB", "/blog/prazo-para-emissao-de-avcb"),
            ("Como Tirar o AVCB em SP", "/blog/como-tirar-avcb-em-sao-paulo"),
            ("Quem Precisa de AVCB?", "/blog/quem-precisa-de-avcb"),
            ("AVCB Vencido: O Que Fazer?", "/blog/avcb-vencido-o-que-fazer"),
        ]
    },
    "quem-paga-o-avcb-proprietario-ou-inquilino": {
        "category": "Direito & Responsabilidade",
        "cta_text": "Tem dúvidas sobre responsabilidade? Nossos engenheiros orientam gratuitamente.",
        "cta_label": "Consultar responsabilidade pelo WhatsApp",
        "related": [
            ("Quem Precisa de AVCB?", "/blog/quem-precisa-de-avcb"),
            ("AVCB Vencido: O Que Fazer?", "/blog/avcb-vencido-o-que-fazer"),
            ("Quanto Custa o AVCB em SP?", "/blog/quanto-custa-avcb-em-sao-paulo"),
            ("Diferença entre AVCB e CLCB", "/blog/diferenca-entre-avcb-e-clcb"),
        ]
    },
    "quem-precisa-de-avcb": {
        "category": "Obrigatoriedade Legal",
        "cta_text": "Descubra se o seu imóvel precisa de AVCB — diagnóstico gratuito em minutos.",
        "cta_label": "Verificar obrigatoriedade pelo WhatsApp",
        "related": [
            ("Como Tirar o AVCB em SP", "/blog/como-tirar-avcb-em-sao-paulo"),
            ("Diferença entre AVCB e CLCB", "/blog/diferenca-entre-avcb-e-clcb"),
            ("Quanto Custa o AVCB em SP?", "/blog/quanto-custa-avcb-em-sao-paulo"),
            ("Prazo para Emissão de AVCB", "/blog/prazo-para-emissao-de-avcb"),
        ]
    },
}

# Anchor patterns common across all blog articles
HERO_END_ANCHORS = [
    '{/* Intro Authority */}',
    '{/* Intro Context */}',
    '{/* Introduction */}',
    '{/* Intro */}',
]
FAQ_ANCHORS = [
    '{/* FAQ Section */}',
    '{/* FAQ */}',
]
FINAL_CTA_ANCHORS = [
    '{/* Action CTA */}',
    '{/* Final Action CTA */}',
    '{/* Convince Section */}',
    '{/* Final Lead Form Section */}',
]

ok = 0
skip = 0

for slug, cfg in articles.items():
    page_file = os.path.join(blog_dir, slug, "page.tsx")
    if not os.path.exists(page_file):
        print(f"  SKIP (no file): {slug}")
        skip += 1
        continue

    with open(page_file, "r", encoding="utf-8") as f:
        content = f.read()

    if "import BreadcrumbNav" in content:
        print(f"  SKIP (done): {slug}")
        skip += 1
        continue

    # --- 1. Add imports ---
    old_import = 'import LeadForm from "@/components/LeadForm";'
    if old_import not in content:
        print(f"  SKIP (no import anchor): {slug}")
        skip += 1
        continue

    new_import = f'''{old_import}
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CtaWhatsApp from "@/components/CtaWhatsApp";'''
    content = content.replace(old_import, new_import)

    # --- 2. Add BreadcrumbNav after hero, before intro section ---
    hero_end = None
    for anchor in HERO_END_ANCHORS:
        if anchor in content:
            hero_end = anchor
            break

    if hero_end:
        breadcrumb_block = f'''      {{/* ── BREADCRUMB ── */}}
      <BreadcrumbNav
        items={{[
          {{ label: "Home", href: "/" }},
          {{ label: "Blog", href: "/blog" }},
          {{ label: "{cfg["category"]}" }},
        ]}}
        dark
      />

      {hero_end}'''
        content = content.replace(hero_end, breadcrumb_block)

    # --- 3. Add CtaWhatsApp CTA before FAQ section ---
    faq_anchor = None
    for anchor in FAQ_ANCHORS:
        if anchor in content:
            faq_anchor = anchor
            break

    if faq_anchor:
        cta_block = f'''      {{/* ── CTA CONTEXTUAL ── */}}
      <div className="py-14 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-white text-xl font-black uppercase italic tracking-tight mb-2">
            {cfg["cta_text"]}
          </p>
          <p className="text-slate-400 text-sm font-bold mb-8">
            Atendimento especializado | Diagnóstico gratuito | Sem compromisso
          </p>
          <CtaWhatsApp
            label="{cfg["cta_label"]}"
            occupationType="seu imóvel"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

      {faq_anchor}'''
        content = content.replace(faq_anchor, cta_block)

    # --- 4. Add Related Articles before Final CTA ---
    final_anchor = None
    for anchor in FINAL_CTA_ANCHORS:
        if anchor in content:
            final_anchor = anchor
            break

    if final_anchor:
        # Build related articles JSX
        rel_links = "\n".join([
            f'              <a href="{href}" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">\n'
            f'                <span className="text-red-600 text-lg font-black mt-0.5">→</span>\n'
            f'                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">{title}</span>\n'
            f'              </a>'
            for title, href in cfg["related"]
        ])
        related_block = f'''      {{/* ── ARTIGOS RELACIONADOS ── */}}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic mb-8 border-l-8 border-red-600 pl-6 leading-none">
            Leia Também
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
{rel_links}
          </div>
        </div>
      </section>

      {final_anchor}'''
        content = content.replace(final_anchor, related_block)

    with open(page_file, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"  OK: {slug}")
    ok += 1

print(f"\n=== DONE: {ok} articles optimized, {skip} skipped ===")
