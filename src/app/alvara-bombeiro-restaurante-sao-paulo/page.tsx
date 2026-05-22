import {
  Phone, CheckCircle2, ShieldAlert, Clock, FileText
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { alvaraBombeiroContent as c } from "@/data/pages/alvara-bombeiro-restaurante-sao-paulo";

export const metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: { canonical: c.meta.canonical },
};

export default function AlvaraBombeiroRestaurantePage() {
  const whatsappLink = "https://wa.me/" + process.env.NEXT_PUBLIC_WHATSAPP;

  return (
    <>
      <JsonLD schema={generateMasterSchema({
        slug: c.meta.canonical,
        title: c.meta.title,
        description: c.meta.description,
        serviceName: "Alvará do Corpo de Bombeiros para Restaurantes em São Paulo",
        faqs: c.faq.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Alvará Bombeiro Restaurantes SP", item: c.meta.canonical },
        ],
      })} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[40px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950/30" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-lg">
              {c.badge}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-[1.0] tracking-tighter uppercase italic text-white">
              Alvará do Bombeiro<br/>
              <span className="text-red-500 not-italic">para Restaurantes em SP</span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-5"
              dangerouslySetInnerHTML={{ __html: c.intro[0] }} />
            <a href={whatsappLink} className="cta-whatsapp inline-flex items-center gap-3 transition-opacity">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="font-black uppercase tracking-tight">Diagnóstico Gratuito Agora</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Alvará do Bombeiro para Restaurantes" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── INTRO ── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed"
            dangerouslySetInnerHTML={{ __html: c.intro[1] }} />
        </div>
      </section>

      {/* ── SEÇÃO 1: ENQUADRAMENTO + FORM ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tighter mb-8 italic">
                {c.sections[0].title}
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                {c.sections[0].content.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xl sticky top-32">
                <h3 className="text-xl font-black text-slate-900 mb-2 italic uppercase">Diagnóstico Gratuito — Resposta em 2h</h3>
                <p className="text-slate-500 text-sm mb-3 font-medium">Engenheiro especialista em AVCB responde em até 2h.</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs font-black text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded-full">✓ 98% aprovação na 1ª análise</span>
                  <span className="text-xs font-black text-slate-600 bg-slate-100 border border-slate-200 px-2 py-1 rounded-full">✓ Comunique-se sem custo extra</span>
                  <span className="text-xs font-black text-slate-600 bg-slate-100 border border-slate-200 px-2 py-1 rounded-full">✓ Sem compromisso</span>
                </div>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2: EXIGÊNCIAS DO CB ── */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase italic leading-none"
              dangerouslySetInnerHTML={{ __html: c.sections[1].title }} />
            <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
              Itens verificados pelo Corpo de Bombeiros na vistoria de restaurantes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.sections[1].content.map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-red-500/40 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ShieldAlert className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-base mb-2 italic uppercase tracking-tight leading-tight"
                      dangerouslySetInnerHTML={{ __html: item.includes(': ') ? item.split(': ')[0] : item }} />
                    {item.includes(': ') && (
                      <p className="text-slate-400 font-medium leading-relaxed text-sm"
                        dangerouslySetInnerHTML={{ __html: item.split(': ')[1] }} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA MEIO ── */}
      <div className="py-14 bg-red-900 border-y border-red-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-xl font-black uppercase italic tracking-tight mb-2">
            Restaurante sem alvará do bombeiro? Não arrisque a interdição.
          </p>
          <p className="text-red-200 text-sm font-bold mb-6">
            A DRD2 Engenharia regulariza com 98% de aprovação na 1ª análise.
          </p>
          <CtaWhatsApp
            label="Solicitar vistoria diagnóstica gratuita"
            occupationType="restaurante"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── SEÇÃO 3: INSTRUÇÕES TÉCNICAS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 uppercase tracking-tighter italic text-center"
            dangerouslySetInnerHTML={{ __html: c.sections[2].title }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.sections[2].content.map((p, i) => (
              <div key={i} className="bg-slate-50 p-7 rounded-3xl border border-slate-200 hover:shadow-lg hover:border-red-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-sm mb-1 italic uppercase tracking-tight leading-tight"
                      dangerouslySetInnerHTML={{ __html: p.includes(': ') ? p.split(': ')[0] : p }} />
                    {p.includes(': ') && (
                      <p className="text-slate-600 font-medium leading-relaxed text-xs"
                        dangerouslySetInnerHTML={{ __html: p.split(': ')[1] }} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4: CUSTO E PRAZO ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 uppercase tracking-tighter italic"
            dangerouslySetInnerHTML={{ __html: c.sections[3].title }} />
          <div className="space-y-6">
            {c.sections[3].content.map((p, i) => (
              <p key={i} className="text-lg text-slate-700 leading-relaxed font-medium"
                dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 5: O QUE A DRD2 ENTREGA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 uppercase tracking-tighter italic text-center"
            dangerouslySetInnerHTML={{ __html: c.sections[4].title }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.sections[4].content.map((p, i) => (
              <div key={i} className="flex items-start gap-5 bg-slate-50 p-7 rounded-3xl border border-slate-200 hover:border-red-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-black text-sm mb-1 italic uppercase tracking-tight"
                    dangerouslySetInnerHTML={{ __html: p.includes(': ') ? p.split(': ')[0] : p }} />
                  {p.includes(': ') && (
                    <p className="text-slate-600 text-sm font-medium leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: p.split(': ')[1] }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 6: RENOVAÇÃO / VALIDADE ── */}
      <section className="py-20 bg-red-950 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Clock className="w-10 h-10 text-red-400 flex-shrink-0" />
            <h2 className="text-3xl font-black uppercase tracking-tighter italic leading-none"
              dangerouslySetInnerHTML={{ __html: c.sections[5].title }} />
          </div>
          <div className="space-y-5">
            {c.sections[5].content.map((p, i) => (
              <p key={i} className="text-red-100 text-lg leading-relaxed font-medium"
                dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center uppercase tracking-tighter italic">
            Perguntas Frequentes — <span className="text-red-600">Alvará do Bombeiro para Restaurantes</span>
          </h2>
          <div className="space-y-4">
            {c.faq.map((item, i) => (
              <details key={i} className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 cursor-pointer open:ring-2 open:ring-red-600/20 transition-all open:bg-white">
                <summary className="flex items-center justify-between font-black text-slate-900 text-lg select-none uppercase italic tracking-tight leading-tight list-none">
                  {item.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="mt-5 pt-5 border-t border-slate-200 text-slate-600 font-medium leading-relaxed text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-slate-950 text-center text-white border-t-8 border-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950/20" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic leading-none">
            Regularize o Alvará<br/>
            <span className="text-red-500 not-italic">do Bombeiro Agora</span>
          </h2>
          <p className="text-slate-300 text-xl font-medium mb-10 leading-relaxed">
            Diagnóstico gratuito presencial. Resposta a Comunique-se sem custo adicional. 98% de aprovação na 1ª análise.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl text-xl shadow-2xl hover:bg-[#1EBE5A] transition-all border-2 border-[#25D366] inline-flex items-center gap-3">
            <Phone className="w-7 h-7" /> Falar com Engenheiro Agora
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-500 opacity-60">
            DRD2 Engenharia — Alvará do Bombeiro para Restaurantes em São Paulo
          </p>
        </div>
      </section>

      <NeighborhoodSilo currentSlug={c.meta.canonical} />
    </>
  );
}
