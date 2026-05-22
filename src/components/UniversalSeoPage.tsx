import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck,
  ShieldX, AlertTriangle, MapPin, Clock, Zap, ClipboardCheck,
  Building2,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export interface UniversalPageData {
  dir?: string;
  slug: string;
  meta: { title: string; description: string };
  eyebrow: string;
  h1Line1: string;
  h1Line2: string;
  heroBg?: string;
  introP1: string;
  introP2: string;
  breadcrumbs: { label: string; href?: string }[];
  h2_principal: {
    heading: string;
    body: string;
    body2?: string;
  };
  h2_riscos: {
    heading: string;
    intro: string;
    itens: { titulo: string; desc: string }[];
  };
  h2_processo: {
    heading: string;
    etapas: { numero: string; titulo: string; desc: string }[];
  };
  h2_detalhes: {
    heading: string;
    body1: string;
    alerta: string;
    itens: { titulo: string; desc: string }[];
    closing: string;
  };
  h2_quando: {
    heading: string;
    body1: string;
    body2: string;
  };
  h2_escolher: {
    heading: string;
    body1: string;
    body2: string;
  };
  h2_cobertura: {
    heading: string;
    body1: string;
    body2: string;
  };
  faqs: { question: string; answer: string }[];
  linksInternos: { href: string; label: string }[];
  ctaFinal: { heading: string; body: string; cta: string };
  occupationType?: string;
}

interface Props {
  data: UniversalPageData;
  /** Conteudo extra renderizado antes do CTA final (ex: calculadora interativa) */
  beforeCta?: React.ReactNode;
}

export default function UniversalSeoPage({ data: d, beforeCta }: Props) {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const schema = generateMasterSchema({
    slug: d.slug,
    title: d.meta.title,
    description: d.meta.description,
    serviceName: d.h1Line1 + " " + d.h1Line2,
    faqs: d.faqs,
    breadcrumbs: d.breadcrumbs.map((b, i) => ({
      name: b.label,
      item: b.href ?? d.slug,
    })),
  });

  return (
    <>
      <JsonLD schema={schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden pt-[85px] pb-[28px] lg:pt-[95px] lg:pb-[36px] flex items-center bg-slate-950 border-b-8 border-red-600">
        {d.heroBg && (
          <Image
            src={d.heroBg}
            alt={d.h1Line1}
            fill
            className="object-cover object-center opacity-30 grayscale-[50%]"
            priority
            sizes="100vw"
            quality={60}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            {/* BADGE */}
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              {d.eyebrow}
            </span>

            {/* H1 */}
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-5 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">{d.h1Line1}</span>
              <span className="text-red-600 not-italic text-3xl md:text-4xl lg:text-5xl mt-2 block drop-shadow-2xl leading-tight">
                {d.h1Line2}
              </span>
            </h1>

            {/* CTA PRINCIPAL */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#25D366] hover:bg-[#1aad54] text-white font-black px-8 py-4 rounded-2xl text-lg transition-all duration-200 shadow-2xl shadow-green-900/50 flex items-center justify-center gap-3 w-full sm:w-auto sm:inline-flex hover:scale-[1.03] active:scale-95 border-2 border-[#25D366] hover:border-[#1aad54] mb-7"
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              FALAR COM ENGENHEIRO ESPECIALISTA
            </a>

            {/* TEXTO COMPLEMENTAR */}
            <p className="text-base md:text-lg text-gray-300 mb-3 leading-relaxed font-medium max-w-2xl">
              {d.introP1}
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium max-w-2xl">
              {d.introP2}
            </p>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={d.breadcrumbs} dark />
      <TrustBar dark />

      {/* ── H2 #1: PRINCIPAL ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                {d.h2_principal.heading}
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                <p>{d.h2_principal.body}</p>
                {d.h2_principal.body2 && <p>{d.h2_principal.body2}</p>}
              </div>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F8F8F8] p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-2xl sticky top-32 w-full">
                <h3 className="text-2xl font-black text-slate-900 mb-6 italic">
                  Diagnóstico <span className="text-red-600">Gratuito</span>
                </h3>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #2: RISCOS ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter uppercase italic">
              {d.h2_riscos.heading}
            </h2>
            <p className="text-xl text-slate-400 font-medium max-w-3xl mx-auto">{d.h2_riscos.intro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.h2_riscos.itens.map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-red-600/30 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ShieldX className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-lg mb-2">{item.titulo}</p>
                    <p className="text-slate-400 font-medium leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO ── */}
      <div className="py-16 bg-[#7F1D1D] border-y border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Precisa regularizar? Fale agora com um engenheiro pelo WhatsApp e receba diagnóstico gratuito.
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico técnico gratuito pelo WhatsApp"
            occupationType={d.occupationType ?? "geral"}
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #3: DETALHES ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic text-balance">
              {d.h2_detalhes.heading}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-medium mb-6">{d.h2_detalhes.body1}</p>
            <p className="text-xl text-red-600 font-black uppercase tracking-tight italic">{d.h2_detalhes.alerta}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {d.h2_detalhes.itens.map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 hover:shadow-xl hover:border-red-600/20 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                    <ShieldAlert className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-base mb-2 uppercase italic">{item.titulo}</p>
                    <p className="text-slate-600 font-medium leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-red-600/10 p-8 rounded-3xl border-l-8 border-red-600">
            <p className="text-slate-900 font-bold italic text-lg leading-relaxed">{d.h2_detalhes.closing}</p>
          </div>
        </div>
      </section>

      {/* ── H2 #4: PROCESSO ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter uppercase italic">
              {d.h2_processo.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {d.h2_processo.etapas.map((e, i) => (
              <div key={i} className="group p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all relative overflow-hidden">
                <span className="text-7xl font-black text-red-600/10 absolute bottom-[-10px] right-[-10px] group-hover:text-red-600/20 transition-colors leading-none select-none pointer-events-none z-0 opacity-[0.12]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="relative z-10 text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">{e.numero}</p>
                <h3 className="relative z-10 text-xl font-black mb-4 uppercase italic tracking-tight">{e.titulo}</h3>
                <p className="relative z-10 text-gray-400 leading-relaxed font-medium text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2 #5: QUANDO INICIAR ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">
                {d.h2_quando.heading}
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed font-medium">{d.h2_quando.body1}</p>
                <div className="bg-amber-50 p-8 rounded-3xl border border-amber-200">
                  <div className="flex items-center gap-4 mb-4">
                    <AlertTriangle className="text-amber-600 w-8 h-8" />
                    <span className="text-amber-900 font-black uppercase italic text-lg leading-tight">Urgência na Regularização</span>
                  </div>
                  <p className="text-amber-900 font-medium leading-relaxed italic">{d.h2_quando.body2}</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
              <Clock className="absolute -bottom-10 -right-10 w-64 h-64 text-red-600 opacity-10" />
              <h3 className="font-black text-2xl uppercase italic mb-6 relative z-10">Resumo Cronológico</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  { t: "90 dias antes", d: "Início recomendado do diagnóstico técnico" },
                  { t: "60 dias antes", d: "Execução de adequações e sistemas" },
                  { t: "30 dias antes", d: "Protocolo no Corpo de Bombeiros" },
                  { t: "Vencimento", d: "Risco imediato de interdição e multa" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2.5 flex-shrink-0" />
                    <div>
                      <span className="text-white font-black block text-base mb-1 uppercase italic tracking-tight">{item.t}</span>
                      <span className="text-slate-400 font-medium text-sm">{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #6: POR QUE DRD2 ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic leading-none">
                {d.h2_escolher.heading}
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium italic">
                <p>{d.h2_escolher.body1}</p>
                <p>{d.h2_escolher.body2}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { l: "Aprovação por engenharia", i: ShieldCheck },
                { l: "Sem Comunique-se", i: Zap },
                { l: "Diagnóstico Grátis", i: CheckCircle2 },
                { l: "Processo Completo", i: ClipboardCheck },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
                  <item.i className="w-10 h-10 text-red-600 mb-4" />
                  <span className="text-slate-900 font-black uppercase italic tracking-tight text-xs leading-tight">{item.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #7: COBERTURA ── */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase italic leading-none">
                {d.h2_cobertura.heading}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <MapPin className="text-red-600 w-8 h-8 flex-shrink-0" />
                  <p className="text-gray-300 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: d.h2_cobertura.body1 }} />
                </div>
                <div className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <MapPin className="text-red-600 w-8 h-8 flex-shrink-0" />
                  <p className="text-gray-300 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: d.h2_cobertura.body2 }} />
                </div>
              </div>
            </div>
            <div className="bg-red-600 p-10 rounded-[3rem] shadow-2xl">
              <h3 className="font-black text-2xl uppercase italic mb-6">Unidade São Paulo</h3>
              <p className="text-red-100 font-bold mb-8 leading-relaxed italic">Atendimento emergencial para regularização em todas as regiões metropolitanas de SP.</p>
              <CtaWhatsApp label="Falar com Unidade SP" occupationType={d.occupationType ?? "geral"} variant="primary" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Dúvidas Frequentes
            </h2>
          </div>
          <div className="space-y-4">
            {d.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all hover:bg-slate-50">
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight leading-tight">
                  {faq.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="p-7 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-200 italic font-medium">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS INTERNOS ── */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Leituras Relacionadas</p>
          <div className="flex flex-wrap justify-center gap-4">
            {d.linksInternos.map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-2 bg-slate-50 hover:bg-red-600 hover:text-white text-slate-700 font-bold px-6 py-3 rounded-2xl border border-slate-200 hover:border-red-600 transition-all text-sm">
                <ArrowRight className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceClusterLinks currentSlug={d.slug} />
      <ServiceBlogLinks currentSlug={d.slug} />
      <NeighborhoodSilo currentSlug={d.slug} />

      {beforeCta}

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            {d.ctaFinal.heading}
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            {d.ctaFinal.body}
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-12 py-6 rounded-2xl text-2xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white min-h-[48px] inline-flex items-center justify-center gap-4 w-full sm:w-auto">
            <Phone className="w-8 h-8 inline" /> {d.ctaFinal.cta}
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">
            DRD2 Engenharia — CREA-SP 5070163570 — São Paulo 2026
          </p>
        </div>
      </section>

      <LeadForm />
    </>
  );
}
