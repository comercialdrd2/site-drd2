import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck,
  ShieldX, AlertTriangle, MapPin, Building2, Stethoscope, Pills, ShoppingBag,
  ClipboardList, Hammer, LayoutGrid, Clock, Users, Zap
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { renovacaoAvcbContent as c } from "@/data/pages/renovacao-avcb-padaria-sao-paulo";

export const metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: {
    canonical: c.meta.canonical,
  },
};

export default function RenovacaoAVCBPage() {
  const whatsappLink = "https://wa.me/" + process.env.NEXT_PUBLIC_WHATSAPP;

  return (
    <>
      <JsonLD schema={generateMasterSchema({
        slug: "/renovacao-avcb-padaria-sao-paulo",
        title: c.meta.title,
        description: c.meta.description,
        serviceName: "Renovação de AVCB para Padarias em São Paulo",
        faqs: c.faq.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Renovação de AVCB para Padarias", item: "/renovacao-avcb-padaria-sao-paulo" },
        ],
      })} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-900 border-b-8 border-red-600">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              {c.badge}
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">RENOVAÇÃO DE AVCB</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                PARA PADARIAS EM SP
              </span>
            </h1>
            <div className="mb-4">
                <p className="text-base md:text-lg text-gray-200 leading-relaxed font-medium max-w-2xl text-balance border-l-4 border-red-600 pl-6 py-1" dangerouslySetInnerHTML={{ __html: c.intro[0] }} />
            </div>
            <div className="block mt-4">
              <a 
                href={whatsappLink} 
                className="cta-whatsapp flex sm:inline-flex items-center justify-center gap-3 w-full sm:w-auto transition-opacity"
              >
                <Phone className="w-5 h-5 flex-shrink-0" /> 
                <span className="sm:whitespace-nowrap font-black">FALAR COM ENGENHEIRO AGORA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Renovação de AVCB para Padarias" },
        ]}
        dark
      />
      <TrustBar dark />

      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center text-balance">
            <div className="space-y-6 text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: c.intro[1] }} />
            </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-balance">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                {c.sections[0].title}
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                {c.sections[0].content.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F8F8F8] p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-2xl sticky top-32 w-full text-balance">
                <h3 className="text-2xl font-black text-slate-900 mb-6 italic leading-tight">
                  Regularize hoje mesmo
                </h3>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic leading-none" dangerouslySetInnerHTML={{ __html: c.sections[1].title }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.sections[1].content.map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:border-red-600/30 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ShieldAlert className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-lg mb-2 italic uppercase tracking-tight leading-tight" dangerouslySetInnerHTML={{ __html: item.includes(': ') ? item.split(': ')[0] : item }} />
                    {item.includes(': ') && (
                        <p className="text-slate-400 font-medium leading-relaxed text-sm italic" dangerouslySetInnerHTML={{ __html: item.split(': ')[1] }} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-16 bg-[#7F1D1D] border-y border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Não arrisque a interdição do seu negócio. Fale agora com a DRD2 Engenharia.
          </p>
          <CtaWhatsApp
            label="Solicitar vistoria diagnóstica gratuita"
            occupationType="padaria"
            variant="primary"
            centered
          />
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-none" dangerouslySetInnerHTML={{ __html: c.sections[2].title }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.sections[2].content.map((p, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 hover:shadow-xl hover:border-red-600/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-base mb-1 italic uppercase tracking-tight leading-tight" dangerouslySetInnerHTML={{ __html: p.includes(': ') ? p.split(': ')[0] : p }} />
                    {p.includes(': ') && (
                        <p className="text-slate-600 font-medium leading-relaxed text-sm italic" dangerouslySetInnerHTML={{ __html: p.split(': ')[1] }} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
