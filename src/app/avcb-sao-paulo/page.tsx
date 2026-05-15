import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, Building2, FileCheck, ShieldAlert, BadgeInfo,
  MapPin, ArrowRight, AlertCircle, ClipboardList, ShieldCheck, Clock,
  Flame, Bell, Droplets, Lightbulb, TriangleAlert, Wind, Layers,
  Users, Zap, RadioTower
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import AvcbOuClcbCalculator from "@/components/AvcbOuClcbCalculator";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { avcbSaoPauloContent as c } from "@/data/pages/avcb-sao-paulo";

export const metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: {
    canonical: c.meta.canonical,
  },
};

const sistemaIcons: Record<string, React.ReactNode> = {
  "Extintores de incêndio":          <Flame className="w-7 h-7" />,
  "Sistema de hidrantes":             <Droplets className="w-7 h-7" />,
  "Iluminação de emergência":         <Lightbulb className="w-7 h-7" />,
  "Sinalização de emergência":        <TriangleAlert className="w-7 h-7" />,
  "Saídas de emergência":             <ArrowRight className="w-7 h-7" />,
  "Alarme e detecção automática":     <Bell className="w-7 h-7" />,
  "Chuveiros automáticos (Sprinklers)": <Droplets className="w-7 h-7" />,
  "Controle de fumaça":               <Wind className="w-7 h-7" />,
  "Compartimentação":                 <Layers className="w-7 h-7" />,
  "Brigada de incêndio":              <Users className="w-7 h-7" />,
  "SPDA (Para-raios)":                <Zap className="w-7 h-7" />,
};

export default function AVCBSaoPauloPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  return (
    <>
      <JsonLD schema={generateMasterSchema({
        slug: c.meta.canonical,
        title: c.meta.title,
        description: c.meta.description,
        serviceName: "AVCB e CLCB em São Paulo",
        faqs: c.h2_faq.faqs.map((f) => ({ question: f.question, answer: f.answer })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB em São Paulo", item: "/avcb-sao-paulo" },
        ],
      })} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[20px] flex items-center bg-slate-950 border-b-8 border-red-600  ">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="AVCB em São Paulo — DRD2 Engenharia especialista em regularização"
          fill
          className="object-cover object-center opacity-40 grayscale-[20%]"
          priority
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              REGULARIZAÇÃO 2026 — Resposta a Comunique-se Incluída
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">AVCB EM</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                SÃO PAULO 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl" dangerouslySetInnerHTML={{ __html: c.intro[0] }} />
            <p className="text-lg text-gray-300 mb-0 leading-relaxed font-medium max-w-2xl" dangerouslySetInnerHTML={{ __html: c.intro[1] }} />
            <div className="mt-4 block">
              <a
                href={whatsappLink}
                className="cta-whatsapp flex sm:inline-flex items-center justify-center gap-3 w-full sm:w-auto transition-opacity"
              >
                <Phone className="w-6 h-6 flex-shrink-0" />
                <span className="text-center sm:whitespace-nowrap">FALAR COM ENGENHEIRO AGORA</span>
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
          { label: "AVCB em São Paulo" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── H2 #1: O QUE É O AVCB ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                {c.h2_oQueEAvcb.heading.split(" e")[0]} e{" "}
                <span className="text-red-600 not-italic font-black italic">
                  Para que Serve?
                </span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p dangerouslySetInnerHTML={{ __html: c.h2_oQueEAvcb.body[0] }} />

                <p className="font-bold text-slate-900 mt-8">Na prática, o AVCB é exigido para:</p>
                <ul className="space-y-3 mt-4">
                  {c.h2_oQueEAvcb.usos.map((uso, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>{uso}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white mt-10 shadow-2xl border-l-8 border-red-600">
                  <p className="text-slate-200 font-bold leading-relaxed italic" dangerouslySetInnerHTML={{ __html: c.h2_oQueEAvcb.closing }} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F8F8F8] p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-2xl sticky top-32 w-full">
                <h3 className="text-2xl font-black text-slate-900 mb-6 italic">Diagnóstico <span className="text-red-600">Gratuito</span></h3>
                <LeadForm variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #2: QUEM PRECISA ── */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
              Quem Precisa de AVCB{" "}
              <span className="text-red-600 not-italic">em São Paulo?</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: c.h2_quemPrecisa.intro[0] }} />
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mt-4" dangerouslySetInnerHTML={{ __html: c.h2_quemPrecisa.intro[1] }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.h2_quemPrecisa.grupos.map((g, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                <h3 className="text-lg font-black text-red-500 mb-3 uppercase italic tracking-tight">{g.grupo}</h3>
                <p className="text-slate-300 font-medium leading-relaxed text-sm">{g.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 mt-12 text-base font-bold italic" dangerouslySetInnerHTML={{ __html: c.h2_quemPrecisa.cta }} />
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO ── */}
      <div className="py-16 border-y bg-[#7F1D1D] border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Seu estabelecimento precisa de AVCB ou CLCB?
          </p>
          <CtaWhatsApp
            label="Fale com um engenheiro agora — diagnóstico gratuito"
            occupationType="estabelecimento"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #3: AVCB OU CLCB ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">
              AVCB ou CLCB —{" "}
              <span className="text-red-600 not-italic">Qual o Seu Estabelecimento Precisa?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium" dangerouslySetInnerHTML={{ __html: c.h2_avcbOuClcb.intro }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 border-2 border-slate-200 p-10 rounded-3xl hover:shadow-xl transition-all">
              <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tight" dangerouslySetInnerHTML={{ __html: c.h2_avcbOuClcb.clcb.titulo }} />
              <p className="text-slate-600 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: c.h2_avcbOuClcb.clcb.desc }} />
            </div>
            <div className="bg-slate-950 border-2 border-red-600/30 p-10 rounded-3xl hover:shadow-xl transition-all">
              <h3 className="text-2xl font-black text-red-500 mb-4 uppercase italic tracking-tight" dangerouslySetInnerHTML={{ __html: c.h2_avcbOuClcb.avcb.titulo }} />
              <p className="text-slate-300 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: c.h2_avcbOuClcb.avcb.desc }} />
            </div>
          </div>
          <div className="bg-red-600/5 border border-red-600/20 rounded-3xl p-8 mt-12 text-center">
            <p className="text-slate-700 font-bold text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: c.h2_avcbOuClcb.closing }} />
          </div>
        </div>
      </section>

      {/* ── H2 #4: SISTEMAS DE SEGURANÇA ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
              Sistemas de Segurança Exigidos{" "}
              <span className="text-red-600 not-italic">pelo Corpo de Bombeiros em SP</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium" dangerouslySetInnerHTML={{ __html: c.h2_sistemas.intro }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {c.h2_sistemas.sistemas.map((s, i) => {
              const sistemaLinks: Record<string, string> = {
                "Sistema de hidrantes": "/hidrantes",
                "Chuveiros automáticos (Sprinklers)": "/sprinklers",
                "Alarme e detecção automática": "/alarme-incendio-sao-paulo",
                "SPDA (Para-raios)": "/spda",
              };
              const href = sistemaLinks[s.nome];
              return (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:shadow-xl hover:border-red-600/20 transition-all group">
                  <div className="text-red-600 mb-5 group-hover:scale-110 transition-transform">
                    {sistemaIcons[s.nome] ?? <ShieldAlert className="w-7 h-7" />}
                  </div>
                  {href ? (
                    <Link href={href} className="text-base font-black text-slate-900 mb-3 uppercase italic tracking-tight hover:text-red-600 transition-colors block">
                      {s.nome} →
                    </Link>
                  ) : (
                    <h3 className="text-base font-black text-slate-900 mb-3 uppercase italic tracking-tight">{s.nome}</h3>
                  )}
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-slate-700 mt-12 text-base font-bold italic" dangerouslySetInnerHTML={{ __html: c.h2_sistemas.closing }} />
        </div>
      </section>

      {/* ── H2 #5: PROCESSO DRD2 ── */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-red-500 font-black uppercase tracking-widest text-xs">Sem Comunique-se — Sem Retrabalho</span>
            <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter leading-none uppercase italic mt-4">
              Como Funciona o Processo de{" "}
              <span className="text-red-600 not-italic">AVCB com a DRD2</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: c.h2_processo.intro }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.h2_processo.etapas.map((e, i) => (
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

      {/* ── CTA 2 ── */}
      <div className="py-16 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Pronto para regularizar seu estabelecimento?
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro — sem compromisso"
            occupationType="estabelecimento"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── H2 #6: POR QUE A DRD2 ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-none uppercase tracking-tighter italic">
                Por que Escolher a{" "}
                <span className="text-red-600 not-italic">DRD2 Engenharia</span>{" "}
                para o seu AVCB em SP?
              </h2>
              <p className="text-slate-600 font-medium text-lg leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: c.h2_porqueDrd2.intro }} />
              <ul className="space-y-8">
                {c.h2_porqueDrd2.diferenciais.map((d, i) => (
                  <li key={i} className="flex gap-5">
                    <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm mb-2 italic tracking-tight">{d.titulo}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{d.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-slate-950 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
              <BadgeInfo className="w-20 h-20 text-red-600 opacity-20 mb-6" />
              <h3 className="text-2xl font-black mb-4 uppercase italic">Atendimento Completo — Da Visita ao Certificado</h3>
              <p className="text-gray-400 mb-8 font-medium leading-relaxed">
                Capital, Grande São Paulo e regiões estratégicas: Guarulhos, Osasco, Santo André, São Bernardo do Campo, Barueri e Alphaville. Qualquer bairro, qualquer ocupação.
              </p>
              <a
                href={whatsappLink}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-sm uppercase tracking-widest hover:bg-[#1EBE5A] hover:text-white hover:text-[#25D366] transition-all shadow-xl min-h-[48px] w-full"
              >
                <Phone className="w-4 h-4" /> Falar com engenheiro especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #7: AVCB POR TIPO DE ESTABELECIMENTO ── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
              AVCB por Tipo de{" "}
              <span className="text-red-600 not-italic">Estabelecimento em São Paulo</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium" dangerouslySetInnerHTML={{ __html: c.h2_porTipo.intro }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.h2_porTipo.links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group bg-white border border-slate-200 hover:border-red-600/30 hover:shadow-xl p-7 rounded-3xl transition-all flex items-center justify-between"
              >
                <span className="font-black text-slate-800 text-sm uppercase italic tracking-tight group-hover:text-red-600 transition-colors leading-tight">
                  {link.label}
                </span>
                <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS INTERNOS RECOMENDADOS ── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-lg font-black text-slate-700 uppercase tracking-widest mb-8 italic">
            Leitura Recomendada
          </h3>
          <div className="flex flex-col sm:flex-row gap-5">
            {c.linksInternos.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group flex items-center gap-3 text-slate-700 hover:text-red-600 font-bold text-sm transition-all border-b-2 border-slate-200 hover:border-red-600 pb-1"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* ── RESULTADOS (Substitui Depoimento) ── */}
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

      {/* ── H2 #8: FAQ ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic text-center">
              {c.h2_faq.heading.split("—")[0]}—{" "}
              <span className="text-red-600 not-italic font-black italic uppercase">
                AVCB em São Paulo
              </span>
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

      {/* ── CTA 3 ── */}
      <div className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Não arrisque multa, interdição ou responsabilidade criminal.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Regularize com quem domina o processo no CBPMESP em 2026.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="estabelecimento"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>


      <AvcbOuClcbCalculator />

      <ServiceClusterLinks currentSlug="/avcb-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-sao-paulo" />

      <NeighborhoodSilo currentSlug="/avcb-sao-paulo" />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            {c.ctaFinal.heading.split("?")[0]}?
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic" dangerouslySetInnerHTML={{ __html: c.ctaFinal.body }} />
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white min-h-[48px] inline-flex items-center justify-center w-full sm:w-auto"
          >
            <Phone className="w-8 h-8 inline mr-2" /> Solicitar Diagnóstico técnico gratuito
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

