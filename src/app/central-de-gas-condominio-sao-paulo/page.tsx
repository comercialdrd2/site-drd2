import {
  Phone, CheckCircle2, ShieldAlert, Clock
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { centralGasContent as c } from "@/data/pages/central-de-gas-condominio-sao-paulo";
import InternalLinksBlock from "@/components/InternalLinksBlock";

export const metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: { canonical: c.meta.canonical },
};

export default function CentralGasCondominioPage() {
  const whatsappLink = "https://wa.me/" + process.env.NEXT_PUBLIC_WHATSAPP;

  const schema = generateMasterSchema({
    slug: c.meta.canonical,
    title: c.meta.title,
    description: c.meta.description,
    serviceName: "Central de Gás para Condomínio em São Paulo",
    faqs: c.faq.map((f) => ({ question: f.question, answer: f.answer })),
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Serviços", item: "/servicos" },
      { name: "Central de Gás para Condomínio SP", item: c.meta.canonical },
    ],
  });

  return (
    <>
      <JsonLD schema={schema} />

      {/* HERO */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[40px] flex items-center bg-slate-950 border-b-8 border-orange-500">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950/30" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-orange-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-lg">
              {c.badge}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-[1.0] tracking-tighter uppercase italic text-white">
              Central de Gás<br />
              <span className="text-orange-400 not-italic">para Condomínio em SP</span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-orange-500 pl-5"
              dangerouslySetInnerHTML={{ __html: c.intro[0] }} />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="cta-whatsapp inline-flex items-center gap-3 transition-opacity">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="font-black uppercase tracking-tight">Diagnóstico técnico gratuito Agora</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Central de Gás para Condomínio SP" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* INTRO */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed"
            dangerouslySetInnerHTML={{ __html: c.intro[1] }} />
        </div>
      </section>

      {/* SEÇÃO 1 + FORM */}
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
                <h3 className="text-xl font-black text-slate-900 mb-2 italic uppercase">Diagnóstico gratuito — Resposta em 2h</h3>
                <p className="text-slate-500 text-sm mb-3 font-medium">Engenheiro especialista em gás e AVCB responde em até 2h.</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="text-xs font-black text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded-full">✓ Projeto com ART incluído</span>
                  <span className="text-xs font-black text-slate-600 bg-slate-100 border border-slate-200 px-2 py-1 rounded-full">✓ Laudo de estanqueidade</span>
                </div>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: O QUE REPROVA */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter uppercase italic leading-none text-center"
            dangerouslySetInnerHTML={{ __html: c.sections[1].title }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.sections[1].content.map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-orange-500/40 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 bg-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
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

      {/* CTA MEIO */}
      <div className="py-14 bg-orange-900 border-y border-orange-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-xl font-black uppercase italic tracking-tight mb-2">
            Central de gás bloqueando o AVCB do condomínio? Regularize agora.
          </p>
          <p className="text-orange-200 text-sm font-bold mb-6">
            A DRD2 regulariza com projeto, ART e laudo de estanqueidade integrados.
          </p>
          <CtaWhatsApp label="Solicitar diagnóstico gratuito da central de gás" occupationType="condominio" variant="primary" centered />
        </div>
      </div>

      {/* SEÇÕES 3, 4, 5 */}
      {[2, 3, 4].map((idx) => c.sections[idx] && (
        <section key={idx} className={`py-24 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50 border-y border-slate-200"}`}>
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 uppercase tracking-tighter italic"
              dangerouslySetInnerHTML={{ __html: c.sections[idx].title }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {c.sections[idx].content.map((p, i) => (
                <div key={i} className="flex items-start gap-5 bg-slate-50 p-7 rounded-3xl border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
      ))}

      {/* PERIODICIDADE */}
      {c.sections[5] && (
        <section className="py-20 bg-orange-950 text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Clock className="w-10 h-10 text-orange-400 flex-shrink-0" />
              <h2 className="text-3xl font-black uppercase tracking-tighter italic leading-none"
                dangerouslySetInnerHTML={{ __html: c.sections[5].title }} />
            </div>
            <div className="space-y-5">
              {c.sections[5].content.map((p, i) => (
                <p key={i} className="text-orange-100 text-lg leading-relaxed font-medium"
                  dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center uppercase tracking-tighter italic">
            Perguntas Frequentes — <span className="text-orange-600">Central de Gás para Condomínio</span>
          </h2>
          <div className="space-y-4">
            {c.faq.map((item, i) => (
              <details key={i} className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 cursor-pointer open:ring-2 open:ring-orange-500/20 transition-all open:bg-white">
                <summary className="flex items-center justify-between font-black text-slate-900 text-lg select-none uppercase italic tracking-tight leading-tight list-none">
                  {item.question}
                  <span className="text-orange-600 text-2xl group-open:rotate-45 transition-transform duration-300 ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="mt-5 pt-5 border-t border-slate-200 text-slate-600 font-medium leading-relaxed text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-slate-950 text-center text-white border-t-8 border-orange-500">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic leading-none">
            Regularize a Central<br />
            <span className="text-orange-400 not-italic">de Gás do Condomínio</span>
          </h2>
          <p className="text-slate-300 text-xl font-medium mb-10 leading-relaxed">
            Projeto técnico, ART, laudo de estanqueidade e aprovação no AVCB. Solução completa para o síndico.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl text-xl shadow-2xl hover:bg-[#1EBE5A] transition-all inline-flex items-center gap-3">
            <Phone className="w-7 h-7" /> Falar com engenheiro especialista Agora
          </a>
        </div>
      </section>

      <InternalLinksBlock currentSlug={c.meta.canonical} mode="servico" maxLinks={8} titulo="Serviços de Gás e AVCB para Condomínio em SP" />
      <ServiceClusterLinks currentSlug={c.meta.canonical} />
      <ServiceBlogLinks currentSlug={c.meta.canonical} />
      <NeighborhoodSilo currentSlug={c.meta.canonical} />
    </>
  );
}
