import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * Bloco de conteúdo usado nas páginas principais de serviço para receber o
 * texto útil das páginas que foram unidas a elas (etapa 1 da fusão, 18/10/2026).
 *
 * Cada bloco tem um id próprio, para que links internos e redirecionamentos
 * possam levar o visitante direto ao trecho (ex.: /avcb-sao-paulo#urgencia).
 */

type Item = { titulo: string; desc: string };
type LinkItem = { label: string; href: string };

type Props = {
  id: string;
  eyebrow?: string;
  heading: string;
  paragraphs?: string[];
  itemsTitle?: string;
  items?: Item[];
  bulletsTitle?: string;
  bullets?: string[];
  note?: string;
  links?: LinkItem[];
  tone?: "white" | "slate";
};

export default function MergedTopicSection({
  id,
  eyebrow,
  heading,
  paragraphs = [],
  itemsTitle,
  items = [],
  bulletsTitle,
  bullets = [],
  note,
  links = [],
  tone = "white",
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 py-20 border-b border-slate-100 ${tone === "slate" ? "bg-slate-50" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {eyebrow && (
          <p className="text-red-600 font-black uppercase tracking-widest text-xs mb-3">{eyebrow}</p>
        )}
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          {heading}
        </h2>

        {paragraphs.map((p, i) => (
          <p key={i} className="text-lg text-slate-700 leading-relaxed mb-4 max-w-3xl">
            {p}
          </p>
        ))}

        {items.length > 0 && (
          <div className="mt-8">
            {itemsTitle && (
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4">{itemsTitle}</h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {items.map((it) => (
                <div key={it.titulo} className="bg-white border border-slate-200 rounded-2xl p-6">
                  <h4 className="font-black text-slate-900 mb-2">{it.titulo}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {bullets.length > 0 && (
          <div className="mt-8 max-w-3xl">
            {bulletsTitle && (
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4">{bulletsTitle}</h3>
            )}
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {note && (
          <p className="mt-8 max-w-3xl text-slate-800 font-semibold leading-relaxed border-l-4 border-red-600 pl-4">
            {note}
          </p>
        )}

        {links.length > 0 && (
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-4">
            {links.map((l) => (
              <Link
                prefetch={false}
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-2 font-bold text-red-700 hover:text-red-800 border-b-2 border-red-200 hover:border-red-600 pb-1 transition-colors"
              >
                {l.label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
