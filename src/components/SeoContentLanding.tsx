import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert, Phone } from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

// ============================================================================
// SeoContentLanding — renderizador compartilhado para paginas de conteudo SEO
// cujo data file segue a estrutura { meta, badge, intro[], sections[], faq[] }.
// Usado por alvara-bombeiro-*, laudo-bombeiro-* e renovacao-clcb-* (recriadas
// a partir dos data files que sobreviveram a exclusao das pastas).
// ============================================================================

type FaqItem = { question: string; answer: string };
type Section = { title: string; content: string[] };

export type SeoContent = {
  meta: { title: string; description: string; canonical: string };
  badge?: string;
  intro: string[];
  sections: Section[];
  faq?: FaqItem[];
  faqs?: FaqItem[];
};

type Props = {
  content: SeoContent;
  breadcrumbParent?: { label: string; href: string };
  occupationType?: string;
};

function deriveH1(title: string) {
  // meta.title costuma ser "Assunto | DRD2 ..." — usamos a parte antes do "|"
  return title.split("|")[0].trim();
}

export function generateSeoMetadata(content: SeoContent) {
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: { canonical: content.meta.canonical },
  };
}

export default function SeoContentLanding({ content, breadcrumbParent, occupationType }: Props) {
  const h1 = deriveH1(content.meta.title);
  const faqList = content.faq ?? content.faqs ?? [];
  const cta = occupationType ?? h1;

  const schema = generateMasterSchema({
    slug: content.meta.canonical,
    title: content.meta.title,
    description: content.meta.description,
    serviceName: h1,
    faqs: faqList,
    breadcrumbs: [
      { name: "Home", item: "/" },
      ...(breadcrumbParent ? [{ name: breadcrumbParent.label, item: breadcrumbParent.href }] : []),
      { name: h1, item: content.meta.canonical },
    ],
  });

  return (
    <>
      <JsonLD schema={schema} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b-8 border-red-600 pt-[72px] pb-12 lg:pt-[88px] lg:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(220,38,38,0.25),_transparent_60%)]" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            {content.badge && (
              <span className="mb-4 inline-block rounded-full bg-red-600 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-red-950/20">
                {content.badge}
              </span>
            )}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tight leading-[1.05] mb-5">
              {h1}
            </h1>
            {content.intro[0] && (
              <p
                className="max-w-2xl text-base md:text-lg font-medium leading-relaxed text-slate-200"
                dangerouslySetInnerHTML={{ __html: content.intro[0] }}
              />
            )}
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <CtaWhatsApp label="Falar com engenheiro no WhatsApp" occupationType={cta} size="md" />
              <Link
                href="#faq"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border-2 border-white/80 px-7 py-4 text-sm font-black uppercase tracking-tight text-white transition-all hover:bg-white hover:text-slate-950"
              >
                Perguntas frequentes <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        dark
        items={[
          { label: "Home", href: "/" },
          ...(breadcrumbParent ? [{ label: breadcrumbParent.label, href: breadcrumbParent.href }] : []),
          { label: h1 },
        ]}
      />
      <TrustBar dark />

      {/* INTRO restante */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl space-y-5">
          {content.intro.slice(1).map((p, i) => (
            <p
              key={i}
              className="text-lg text-slate-700 font-medium leading-relaxed"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
          {content.intro.length <= 1 && (
            <p className="text-lg text-slate-700 font-medium leading-relaxed">
              A DRD2 Engenharia regulariza seu imóvel junto ao Corpo de Bombeiros de São Paulo
              com diagnóstico técnico gratuito, ART inclusa e acompanhamento até o certificado.
            </p>
          )}
        </div>
      </section>

      {/* LEAD FORM — largura total */}
      <section className="bg-slate-100 py-12 lg:py-16 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <LeadForm predefinedPropertyType={cta} />
        </div>
      </section>

      {/* SECTIONS */}
      <section className="bg-slate-50 py-16 lg:py-20 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl space-y-14">
          {content.sections.map((section, idx) => (
            <div key={idx}>
              <div className="mb-6 flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 text-sm font-black text-white">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-950 uppercase italic tracking-tight leading-tight">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 pl-0 md:pl-14">
                {section.content.map((c, i) => (
                  <p
                    key={i}
                    className="flex items-start gap-3 text-slate-700 font-medium leading-relaxed"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                    <span dangerouslySetInnerHTML={{ __html: c }} />
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA intermediario */}
      <section className="bg-red-900 py-14 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ShieldAlert className="mx-auto mb-5 h-12 w-12 text-red-200" />
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tight leading-none">
            Não arrisque interdição por documento vencido
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-red-100 font-medium leading-relaxed">
            Fale agora com o engenheiro responsável da DRD2 e receba um diagnóstico gratuito do seu imóvel.
          </p>
          <div className="mt-8">
            <CtaWhatsApp label="Solicitar diagnóstico gratuito" occupationType={cta} centered />
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqList.length > 0 && (
        <section id="faq" className="bg-slate-50 py-16 lg:py-20 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase italic tracking-tight text-center mb-10">
              Perguntas frequentes
            </h2>
            <div className="space-y-4">
              {faqList.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:ring-4 open:ring-red-600/10"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black uppercase italic tracking-tight text-slate-950">
                    {faq.question}
                    <span className="text-2xl text-red-600 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-5 border-t border-slate-200 pt-5 text-slate-600 font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-black text-slate-950 uppercase italic tracking-tight mb-6">
            Fale com a DRD2 Engenharia
          </h2>
          <a
            href="https://wa.me/5511942232969"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-red-600 px-8 py-5 text-lg font-black uppercase tracking-tight text-white shadow-xl transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" /> (11) 94223-2969
          </a>
        </div>
      </section>

      <ServiceClusterLinks currentSlug={content.meta.canonical} />
      <ServiceBlogLinks currentSlug={content.meta.canonical} />
    </>
  );
}
