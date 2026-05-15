import Image from "next/image";
import Link from "next/link";
import {
  Phone, CheckCircle2, AlertCircle, DollarSign, Building2, MapPin,
  Flame, Droplets, Lightbulb, TriangleAlert, ArrowRight, Bell, Wind,
  Layers, Users, Zap, ClipboardList, ShieldCheck, FileCheck,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { quantoCustaAvcbContent as c } from "@/data/pages/quanto-custa-avcb-sao-paulo";

export const metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: {
    canonical: c.meta.canonical,
  },
};

export default function QuantoCustaAvcbPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/quanto-custa-avcb-sao-paulo",
        title: c.meta.title,
        description: c.meta.description,
        serviceName: "Custo do AVCB em São Paulo",
        faqs: c.h2_faq.faqs.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Quanto Custa o AVCB em São Paulo", item: "/quanto-custa-avcb-sao-paulo" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[20px] flex items-center bg-slate-950 border-b-8 border-red-600  ">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Alvará do Corpo de Bombeiros em São Paulo"
          fill
          className="object-cover object-center opacity-40 grayscale-[20%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(220,38,38,0.4) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              Diagnóstico técnico gratuito — Orçamento Detalhado
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-4 leading-[1] tracking-tighter uppercase italic text-white">
              Quanto Custa o AVCB{" "}
              <span className="text-red-600 not-italic block mt-2">em São Paulo?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl">
              {c.intro[0]}
            </p>
            <p className="text-lg text-gray-300 mb-0 leading-relaxed font-medium max-w-2xl">
              {c.intro[1]}
            </p>
            <div className="mt-4 block">
              <a
                href={whatsappLink}
                className="cta-whatsapp flex sm:inline-flex items-center justify-center gap-3 w-full sm:w-auto transition-opacity"
              >
                <Phone className="w-6 h-6 flex-shrink-0" />
                <span className="sm:whitespace-nowrap">FALAR COM ENGENHEIRO AGORA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB + TRUST BAR ── */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Quanto Custa o AVCB em São Paulo" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── H2 #1: POR QUE VARIA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                Por que o Custo do AVCB{" "}
                <span className="text-red-600 not-italic font-black italic">Varia de Caso para Caso?</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                {c.h2_porQueVaria.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="bg-amber-50 border-l-8 border-amber-500 p-8 rounded-2xl mt-10">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-7 h-7 text-amber-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-800 font-bold leading-relaxed italic text-lg">
                    Desconfie de orçamentos de AVCB passados por telefone ou WhatsApp sem visita técnica. Um preço sem visita é uma estimativa sem responsabilidade técnica.
                  </p>
                </div>
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

      {/* ── H2 #2: FATORES ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
              Fatores que Determinam o{" "}
              <span className="text-red-600 not-italic">Custo do AVCB em São Paulo</span>
            </h2>
          </div>

          <div className="space-y-12">
            {c.h2_fatores.fatores.map((fator, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase italic tracking-tight flex items-center gap-4">
                  <span className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0">
                    {i + 1}
                  </span>
                  {fator.h3.replace(/^\d+\.\s*/, "")}
                </h3>

                {fator.body && (
                  <div className="space-y-4 text-lg text-slate-700 leading-relaxed font-medium">
                    {fator.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                )}

                {fator.intro && (
                  <>
                    <p className="text-lg text-slate-700 leading-relaxed font-medium mb-4">{fator.intro}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {fator.lista!.map((item, k) => (
                        <li key={k} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200">
                          <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                          <span className="text-slate-800 font-medium text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed font-bold italic">{fator.closing}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO 1 ── */}
      <div className="py-16 border-y bg-[#7F1D1D] border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Quer saber exatamente o que seu estabelecimento precisa?
          </p>
          <CtaWhatsApp
            label="Solicitar visita técnica gratuita agora"
            occupationType="estabelecimento"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #3: O QUE ESTÁ INCLUÍDO ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">
              O que Está <span className="text-red-600 not-italic">Incluído no Serviço da DRD2</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">{c.h2_incluido.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.h2_incluido.itens.map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 hover:shadow-xl hover:border-red-600/20 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-lg mb-1">{item.label}</p>
                    <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2 #4: COMO FUNCIONA O ORÇAMENTO ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
              Como Funciona o{" "}
              <span className="text-red-600 not-italic">Orçamento da DRD2</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {c.h2_orcamento.body.map((p, i) => (
                <p key={i} className="text-xl text-gray-300 font-medium leading-relaxed">{p}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {c.h2_orcamento.etapas.map((e, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 rounded-[3rem] p-8 hover:bg-white/10 transition-all relative overflow-hidden">
                <span className="text-7xl font-black text-red-600/10 absolute bottom-[-10px] right-[-10px] leading-none select-none pointer-events-none z-0 opacity-[0.12]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="relative z-10 text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">{e.num} Etapa</p>
                <h3 className="relative z-10 text-lg font-black mb-3 uppercase italic tracking-tight">{e.label}</h3>
                <p className="relative z-10 text-gray-400 leading-relaxed font-medium text-sm">{e.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-300 font-bold text-lg mb-6 italic">{c.h2_orcamento.cta.replace("📲 ", "")}</p>
            <CtaWhatsApp
              label="Solicitar visita técnica gratuita — sem compromisso"
              occupationType="estabelecimento"
              variant="primary"
              size="lg"
              centered
            />
          </div>
        </div>
      </section>

      {/* ── H2 #5: COBERTURA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">
                Atendemos Toda{" "}
                <span className="text-red-600 not-italic">São Paulo e Grande SP</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                {c.h2_cobertura.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="bg-slate-950 rounded-[3rem] p-10 text-white">
              <div className="flex items-center gap-4 mb-8">
                <MapPin className="w-10 h-10 text-red-600 flex-shrink-0" />
                <p className="font-black text-xl uppercase italic">Cidades Atendidas</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["São Paulo (Capital)", "Guarulhos", "Osasco", "Santo André", "São Bernardo", "São Caetano do Sul", "Barueri", "Alphaville"].map((cidade, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-200 font-medium text-sm">{cidade}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-400 text-sm font-medium italic">+ toda a Grande São Paulo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #6: FAQ ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Perguntas Frequentes —{" "}
              <span className="text-red-600 not-italic font-black italic uppercase">Custo do AVCB em São Paulo</span>
            </h2>
          </div>
          <div className="space-y-4">
            {c.h2_faq.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all hover:bg-slate-50"
              >
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
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-center text-sm font-black uppercase tracking-widest text-slate-400 mb-8">
            Saiba mais sobre nossos serviços
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {c.linksInternos.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="flex items-center gap-2 bg-slate-50 hover:bg-red-600 hover:text-white text-slate-700 font-bold px-6 py-3 rounded-2xl border border-slate-200 hover:border-red-600 transition-all text-sm"
              >
                <ArrowRight className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTADOS ── */}
      <section className="py-24 bg-slate-900 text-center border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-white">
          <p className="text-2xl md:text-4xl font-black uppercase italic tracking-tight mb-6 text-white">
            Regularizamos mais de 2.500 estabelecimentos em São Paulo.
          </p>
          <p className="text-xl text-slate-300 font-medium mb-10 italic">
            Fale com um engenheiro e receba seu diagnóstico gratuito.
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro especialista no WhatsApp"
            occupationType="estabelecimento"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </section>


      <ServiceClusterLinks currentSlug="/quanto-custa-avcb-sao-paulo" />
      <ServiceBlogLinks currentSlug="/quanto-custa-avcb-sao-paulo" />

      <NeighborhoodSilo currentSlug="/quanto-custa-avcb-sao-paulo" />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            {c.ctaFinal.heading}
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            {c.ctaFinal.body}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white min-h-[48px] inline-flex items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Phone className="w-8 h-8 inline" /> {c.ctaFinal.cta.replace("📲 ", "")}
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">
            DRD2 Engenharia — AVCB e CLCB em São Paulo — Decreto 69.118/2024
          </p>
        </div>
      </section>

      <LeadForm />
    </>
  );
}
