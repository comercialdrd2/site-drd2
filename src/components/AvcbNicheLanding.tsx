import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Car,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import TrustBar from "@/components/TrustBar";
import type { AvcbNichePage } from "@/data/avcbNichePages";

type Props = {
  page: AvcbNichePage;
};

export function generateAvcbNicheMetadata(page: AvcbNichePage) {
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.slug,
    },
  };
}

function PageIcon({ slug }: { slug: string }) {
  if (slug.includes("estacionamento") || slug.includes("garagem")) {
    return <Car className="h-6 w-6" />;
  }
  return <Stethoscope className="h-6 w-6" />;
}

export default function AvcbNicheLanding({ page }: Props) {
  const schema = generateMasterSchema({
    slug: page.slug,
    title: page.title,
    description: page.description,
    serviceName: page.label,
    faqs: page.faqs,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Servicos", item: "/servicos" },
      { name: page.label, item: page.slug },
    ],
  });

  return (
    <>
      <JsonLD schema={schema} />

      <section className="relative overflow-hidden bg-slate-950 text-white border-b-8 border-red-600 pt-[64px] pb-10 lg:pt-[80px] lg:pb-12">
        <Image
          src={page.heroImage}
          alt={page.imageAlt}
          fill
          className="object-cover object-center opacity-42 grayscale-[20%]"
          priority
          sizes="100vw"
          quality={68}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-slate-950/88 to-slate-950/42" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-widest">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-1.5 text-white shadow-lg shadow-red-950/20">
                <PageIcon slug={page.slug} />
                {page.eyebrow}
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-slate-100">
                pagina por nicho
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tight leading-[1.0] mb-4">
              {page.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg font-medium leading-relaxed text-slate-200">
              {page.lead}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <CtaWhatsApp
                label="Analisar meu caso no WhatsApp"
                occupationType={page.ctaOccupation}
                size="md"
              />
              <Link
                href="#checklist"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border-2 border-white/80 px-7 py-4 text-sm font-black uppercase tracking-tight text-white transition-all hover:bg-white hover:text-slate-950"
              >
                Ver checklist <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        dark
        items={[
          { label: "Home", href: "/" },
          { label: "Servicos", href: "/servicos" },
          { label: page.label },
        ]}
      />
      <TrustBar dark />

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4">
                Decisao SEO e tecnica
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tight leading-none mb-7">
                {page.focusTitle}
              </h2>
              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                {page.focus}
              </p>
              <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Building2, title: "Uso real", text: "atividade declarada, operacao, publico, area e risco" },
                  { icon: FileText, title: "Documentos", text: "planta, ART, laudos, manutencoes e dados do imovel" },
                  { icon: ShieldCheck, title: "Aprovacao", text: "CLCB, PTS ou AVCB conforme o enquadramento correto" },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <item.icon className="h-7 w-7 text-red-600 mb-4" />
                    <h3 className="text-sm font-black uppercase text-slate-950 tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white">
                  <PageIcon slug={page.slug} />
                </div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-red-400 mb-3">
                  Enquadramento mais comum
                </p>
                <h3 className="text-4xl font-black uppercase italic tracking-tight mb-4">
                  {page.groupLabel}
                </h3>
                <p className="text-slate-300 font-medium leading-relaxed">
                  {page.groupDesc}
                </p>
                <div className="mt-6">
                  <CtaWhatsApp
                    label="Validar enquadramento"
                    occupationType={page.ctaOccupation}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4">
              Contexto do nicho
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tight leading-none">
              {page.contextTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {page.context.map((item, index) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-5xl font-black text-red-600/10 leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-slate-700 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-500 mb-4">
                Risco de reprovacao
              </p>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight leading-none">
                {page.risksTitle}
              </h2>
              <p className="mt-6 text-slate-300 font-medium leading-relaxed">
                A vistoria nao olha apenas o nome da empresa. Ela confere uso real, area, rotas, sistemas instalados,
                documentacao e coerencia entre planta e operacao.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {page.risks.map((risk) => (
                  <div key={risk} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <ShieldAlert className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                    <p className="text-sm font-bold leading-relaxed text-slate-200">{risk}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4">
              Normas e sistemas
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tight leading-none">
              {page.requirementsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.requirements.map((item) => (
              <div key={`${item.it}-${item.title}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="inline-flex rounded-full bg-red-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                  {item.it}
                </span>
                <h3 className="mt-4 text-lg font-black uppercase italic tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="checklist" className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4">
                Checklist documental
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tight leading-none mb-8">
                O que conferimos antes do protocolo
              </h2>
              <div className="space-y-4">
                {page.documents.map((doc) => (
                  <div key={doc} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                    <FileText className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                    <p className="text-slate-700 font-medium leading-relaxed">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4">
                Processo DRD2
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase italic tracking-tight leading-none mb-8">
                Como regularizamos
              </h2>
              <div className="space-y-4">
                {page.process.map((step, index) => (
                  <div key={step} className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-slate-200">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-600 text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <p className="text-slate-700 font-medium leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-900 py-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <AlertTriangle className="mb-5 h-11 w-11 text-red-200" />
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight leading-none">
                Erros que vale evitar
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 gap-3">
              {page.failures.map((failure) => (
                <div key={failure} className="flex gap-3 rounded-2xl border border-red-700 bg-white/10 p-4">
                  <AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-red-100" />
                  <p className="text-sm font-bold leading-relaxed text-red-50">{failure}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase italic tracking-tight text-center mb-10">
            Perguntas frequentes
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
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

      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <MapPin className="h-6 w-6 text-red-600" />
            <h2 className="text-xl font-black uppercase italic tracking-tight text-slate-950">
              Links relacionados
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {page.related.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                <CheckCircle2 className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ClipboardCheck className="mx-auto mb-5 h-12 w-12 text-red-400" />
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight leading-none">
            Valide o enquadramento antes de protocolar
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300 font-medium leading-relaxed">
            Um diagnostico simples evita processo errado, Comunique-se, custo duplicado e atraso na emissao do AVCB ou CLCB.
          </p>
          <div className="mt-8">
            <CtaWhatsApp
              label="Falar com engenheiro especialista"
              occupationType={page.ctaOccupation}
              centered
            />
          </div>
        </div>
      </section>

      <ServiceClusterLinks currentSlug={page.slug} />
      <ServiceBlogLinks currentSlug={page.slug} />
      <NeighborhoodSilo currentSlug={page.slug} />
      <LeadForm />
    </>
  );
}
