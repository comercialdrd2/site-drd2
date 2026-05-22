import { servicesData } from "@/data/services";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, Calendar, ShieldCheck, Clock, Ticket } from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

const _pageTitle = "Projeto PET (Evento Temporário) em São Paulo | DRD2 Engenharia";
const _pageDesc = "Obtenha seu Projeto PET (Eventos Temporários) em SP com agilidade. Licenciamento total para feiras, congressos e shows. ART inclusa. DRD2 Engenharia.";

export const metadata = {
  title: "Projeto PET (Evento Temporário) em São Paulo | DRD2 Engenharia",
  description: "Obtenha seu Projeto PET (Eventos Temporários) em SP com agilidade. Licenciamento total para feiras, congressos e shows. ART inclusa. DRD2 Engenharia.",
  alternates: {
    canonical: "/projeto-pet",
  },
};

export default function ProjetoPetPage() {
  const srv = servicesData["projeto-pet-sp"];

  const steps = [
    { title: "Layout Técnico", description: "Elaboração da planta com saídas de emergência e equipamentos." },
    { title: "Cálculo de Lotação", description: "Dimensionamento do público máximo seguro conforme ITs." },
    { title: "Protocolo Ágil", description: "Inserção no sistema Via Fácil para aprovação antes do evento." },
  ];

  const _schema = generateMasterSchema({
        slug: "/projeto-pet",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "Projeto PET (Evento Temporário)",
        faqs: srv.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Projeto PET", item: "/projeto-pet" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[480px] flex items-center">
        <Image
          src="/images/page-pet.webp"
          alt="Projeto PET para Eventos Temporários em São Paulo - DRD2 Engenharia"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0D121F]/85" />
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl py-20">
          <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Licenciamento de Eventos
          </span>
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight drop-shadow-lg text-white">
            {srv.h1}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            {srv.pas.solution}
          </p>
          <div className="flex flex-col items-center justify-center">
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-bold shadow-lg hover:bg-[#1EBE5A] transition"
            >
              Falar com engenheiro especialista no WhatsApp
            </a>
            <p className="mt-4 text-sm text-gray-300 italic font-medium tracking-wide">
              Atendimento rápido pelo WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais PET */}
      <section className="bg-white py-10 border-b border-gray-100 shadow-sm relative z-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Clock className="w-10 h-10 text-primary" />
              <span className="font-bold text-secondary text-lg md:text-xl">Aprovação em<br className="hidden md:block" /> Tempo Recorde</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-primary" />
              <span className="font-bold text-secondary text-lg md:text-xl">Conformidade com<br className="hidden md:block" /> IT 30 e IT 43</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Calendar className="w-10 h-10 text-primary" />
              <span className="font-bold text-secondary text-lg md:text-xl">Eventos de Qualquer<br className="hidden md:block" /> Porte ou Tipo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problema / Agitação */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-secondary p-10 rounded-3xl text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">{srv.pas.problem}</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {srv.pas.agitation}
              </p>
              <div className="flex items-center gap-4 text-primary">
                <ShieldCheck className="w-8 h-8" />
                <span className="font-bold text-xl uppercase tracking-tighter italic">Evite a interdição do seu evento</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">O que o PET contempla?</h2>
              <ul className="space-y-4">
                {[
                  "Layout de brigada de incêndio",
                  "Dimensionamento de saídas de pânico",
                  "Cálculo de extintores temporários",
                  "Sinalização de emergência em tendas/palcos",
                  "Instalações elétricas temporárias (ART)",
                  "Controle de materiais de acabamento (CMAR)"
                ].map((item, id) => (
                  <li key={id} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Azul PET */}
      <section className="py-24 bg-[#0D121F] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Planejamento Ágil para Eventos</h2>
            <p className="text-gray-400 text-lg">Sabemos que seu cronograma é apertado. Nosso processo é otimizado para a velocidade.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 -translate-y-1/2 z-0" />
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 bg-secondary/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-red-500/20">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meio da Página - Foto Real de Evento ou Ícones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8 text-primary">
            <Ticket className="w-12 h-12" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 leading-tight">Vai organizar uma feira, congresso ou show?</h2>
          <p className="text-xl text-gray-600 mb-10">Não corra riscos desnecessários. Cuidamos de toda a parte técnica enquanto você foca na experiência do seu público.</p>
          <a 
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-3 bg-primary text-white font-bold px-10 py-5 rounded-xl text-xl shadow-xl hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all"
          >
            Falar com engenheiro especialista agora no WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ PET */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Tire suas dúvidas sobre o Projeto PET</h2>
          <div className="space-y-6">
            {srv.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-[#0D121F] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Segurança jurídica e técnica para seu evento.</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Emita seu Projeto PET com a DRD2 Engenharia e garanta que seu evento ocorra sem contratempos.</p>
          <div className="flex flex-col items-center justify-center">
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-bold shadow-lg hover:bg-[#1EBE5A] transition"
            >
              Falar com engenheiro especialista no WhatsApp
            </a>
            <p className="mt-4 text-sm text-gray-300 italic font-medium tracking-wide">
              Atendimento rápido pelo WhatsApp
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <ServiceClusterLinks currentSlug="/projeto-pet" />
      <ServiceBlogLinks currentSlug="/projeto-pet" />

    </>
  );
}
