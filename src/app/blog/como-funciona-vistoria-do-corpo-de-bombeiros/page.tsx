import Link from "next/link";
import Image from "next/image";
import { JsonLD } from "@/components/JsonLD";
import {
  Phone, Search, Flame, Droplets, Lightbulb,
  Navigation, Bell, DoorOpen, ShieldCheck, CheckCircle2,
  HelpCircle, ArrowRight, Info, AlertTriangle, Eye,
  HardHat, Zap,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BlogStrategicLinks from "@/components/BlogStrategicLinks";
import BlogAuthorEvidence from "@/components/BlogAuthorEvidence";

export const metadata = {
  title: "Como Funciona a Vistoria do Corpo de Bombeiros em São Paulo? Guia Completo",
  description: "Entenda como funciona a vistoria do Corpo de Bombeiros para o AVCB em São Paulo: o que é verificado, como se preparar e como evitar reprovações. Guia técnico DRD2.",
  alternates: {
    canonical: "/blog/como-funciona-vistoria-do-corpo-de-bombeiros",
  },
};

export default function VistoriaBombeirosPost() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.drd2.com.br/blog/como-funciona-vistoria-do-corpo-de-bombeiros/#article",
        "headline": "Como Funciona a Vistoria do Corpo de Bombeiros para o AVCB em São Paulo?",
        "description": "Guia técnico sobre as inspeções presenciais do Corpo de Bombeiros, detalhando os itens verificados e as melhores práticas para aprovação.",
        "author": { "@type": "Person", "@id": "https://www.drd2.com.br/#samuel-costa" },
        "publisher": { "@id": "https://www.drd2.com.br/#organization" },
        "datePublished": "2026-04-18",
        "dateModified": "2026-05-04",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.drd2.com.br/blog/como-funciona-vistoria-do-corpo-de-bombeiros"
        }
      }
    ]
  };

  const checklistItems = [
    { title: "Extintores", desc: "Carga, validade, tipo e sinalização correta.", icon: Flame },
    { title: "Hidrantes", desc: "Pressão de rede, mangueiras e reservatório.", icon: Droplets },
    { title: "Iluminação", desc: "Funcionamento automático sob queda de energia.", icon: Lightbulb },
    { title: "Sinalização", desc: "Placas fotoluminescentes e rotas fugas.", icon: Navigation },
    { title: "Saídas de Emergência", desc: "Desobstrução total e largura de portas.", icon: DoorOpen },
    { title: "Alarme e Detecção", desc: "Central operacional e sirenes audíveis.", icon: Bell },
    { title: "Portas Corta-Fogo", desc: "Fechamento automático e vedação íntegra.", icon: ShieldCheck },
    { title: "SPDA", desc: "Para-raios revisados e documentação em dia.", icon: Zap }
  ];

  const faqItems = [
    {
      question: "O que acontece se reprovar na vistoria?",
      answer: "O vistoriador emite um relatório de não conformidades. O engenheiro deve conduzir as correções e solicitar uma nova vistoria. Isso pode atrasar o processo em 30 a 60 dias."
    },
    {
      question: "O engenheiro precisa estar presente na vistoria?",
      answer: "Sim, é altamente recomendável. O engenheiro pode esclarecer dúvidas técnicas e evitar reprovações por interpretações equivocadas do vistoriador."
    },
    {
      question: "Quanto tempo dura a vistoria?",
      answer: "Varia conforme o porte. Pequenos comércios levam de 30 a 60 minutos. Grandes indústrias ou edifícios complexos podem levar o dia inteiro."
    },
    {
      question: "Posso ser reprovado por extintores vencidos?",
      answer: "Sim. Itens simples como validade de extintores e obstrução de saídas são as causas mais comuns de reprovação em vistorias do Corpo de Bombeiros."
    }
  ];

  const subSectors = [
    { n: "Itaim Bibi", h: "/avcb-itaim-bibi" },
    { n: "Vila Olímpia", h: "/avcb-vila-olimpia" },
    { n: "Brooklin", h: "/avcb-brooklin" },
    { n: "Moema", h: "/avcb-moema" },
    { n: "Tatuapé", h: "/avcb-tatuape" },
    { n: "Santo Amaro", h: "/avcb-santo-amaro" },
    { n: "Saúde", h: "/avcb-saude" },
    { n: "Campo Belo", h: "/avcb-campo-belo" },
    { n: "Vila Mariana", h: "/avcb-vila-mariana" },
    { n: "Jabaquara", h: "/avcb-jabaquara" }
  ];

  return (
    <>
      <JsonLD schema={articleSchema} />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white min-h-[75vh] flex items-center overflow-hidden border-b-8 border-primary pt-20">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Como Funciona a Vistoria do Corpo de Bombeiros em SP"
          fill
          className="object-cover opacity-20 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-12">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8 bg-primary/10 w-fit px-4 py-1.5 rounded-full border border-primary/20">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-400">Inspeção Técnica Oficial</span>
            </nav>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic text-white">
              VISTORIA DOS <br /><span className="text-primary not-italic">BOMBEIROS SP</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-medium max-w-3xl">
              Entenda o que o vistoriador verifica, como se preparar e quais são os segredos para garantir a aprovação do AVCB na primeira visita.
            </p>

            <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-300">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" /> Checklist Técnico Detalhado
              </div>
              <div className="flex items-center gap-2">
                <HardHat className="w-5 h-5 text-primary" /> Acompanhamento do Engenheiro
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* ── BREADCRUMB ── */}
      <BlogAuthorEvidence published="2026-04-18" updated="2026-05-04" />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Processo Técnico" },
        ]}
        dark
      />

      {/* Intro Authority */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="prose prose-lg md:prose-xl prose-slate max-w-none font-medium leading-relaxed text-gray-600">
              <p className="text-2xl font-bold text-secondary leading-relaxed mb-12 italic">
                 A vistoria é o momento da verdade. É quando a teoria do projeto encontra a prática da instalação física. Estar preparado é a diferença entre a certificação imediata e meses de atraso.
              </p>
              
              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic mb-8 border-l-8 border-primary pl-6 leading-none tracking-tight">O que é a vistoria técnica?</h2>
              <p>
                 A vistoria do Corpo de Bombeiros (CBPMESP) é a inspeção presencial que valida toda a proteção contra incêndio da edificação. O vistoriador confronta o **Projeto Técnico Aprovado** com a realidade do local.
              </p>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Checklist de Verificação</h2>
              <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                 {checklistItems.map((item, i) => (
                   <div key={i} className="flex gap-4 items-center p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:border-primary/20 transition-all group">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors shrink-0">
                        <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-black text-secondary uppercase text-[10px] mb-0.5 tracking-tighter">{item.title}</h4>
                        <p className="text-[10px] text-gray-400 font-bold leading-tight">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Como garantir a aprovação?</h2>
              <div className="not-prose space-y-4 my-8">
                {[
                   { t: "PRÉ-VISTORIA TÉCNICA", d: "Realizamos uma simulação rigorosa dias antes da visita oficial." },
                   { t: "SAÍDAS DESOBSTRUÍDAS", d: "Certificamos que as rotas de fuga estão 100% livres de caixas ou móveis." },
                   { t: "VALIDADE TOTAL", d: "Verificação minuciosa de selos do INMETRO e recargas de extintores." },
                   { t: "PRESENÇA DO ENGENHEIRO", d: "Damos suporte técnico presencial durante toda a inspeção do bombeiro." }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-6 p-8 bg-slate-900 rounded-[2.5rem] border border-white/5 shadow-2xl">
                     <span className="text-primary font-black text-2xl leading-none italic italic">0{i+1}</span>
                     <div>
                        <h5 className="text-white font-black uppercase text-sm mb-2 italic tracking-widest">{step.t}</h5>
                        <p className="text-gray-400 font-bold text-[11px] leading-relaxed">{step.d}</p>
                     </div>
                  </div>
                ))}
              </div>

              {/* ── INJEÇÃO CRO IN-TEXT ── */}
              <div className="not-prose my-16 bg-slate-50 p-10 rounded-[3rem] border-2 border-primary border-dashed relative text-center">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                    DIAGNÓSTICO GRATUITO
                 </div>
                 <h3 className="text-2xl font-black text-secondary uppercase italic mt-4 mb-4 tracking-tighter leading-tight">Sua Vistoria está Próxima?</h3>
                 <p className="text-sm font-bold text-gray-500 mb-8 max-w-xl mx-auto italic">Solicite uma auditoria pré-vistoria e garanta que sua edificação seja aprovada de primeira pelo 5º GB.</p>
                 <LeadForm variant="compact" />
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Exigências por Tipo de Imóvel</h2>
              <p>A vistoria é moldada de acordo com o grupo de ocupação do imóvel. A cobrança sobre uma loja pequena difere brutalmente de uma indústria logística. Escolha o perfil da sua edificação para ver as exigências exclusivas:</p>
              
              <ul className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 font-black text-xs uppercase tracking-widest italic">
                <li><Link href="/avcb-galpao-industrial-sao-paulo" className="flex items-center gap-2 p-4 bg-white border border-slate-200 rounded-xl hover:border-primary text-secondary hover:text-primary transition-all"><ArrowRight className="w-4 h-4"/> Galpões Industriais & Logística</Link></li>
                <li><Link href="/avcb-restaurante-sao-paulo" className="flex items-center gap-2 p-4 bg-white border border-slate-200 rounded-xl hover:border-primary text-secondary hover:text-primary transition-all"><ArrowRight className="w-4 h-4"/> Restaurantes e Bares</Link></li>
                <li><Link href="/avcb-para-condominio-sao-paulo" className="flex items-center gap-2 p-4 bg-white border border-slate-200 rounded-xl hover:border-primary text-secondary hover:text-primary transition-all"><ArrowRight className="w-4 h-4"/> Condomínios Residenciais</Link></li>
                <li><Link href="/avcb-hospital-clinica-sao-paulo" className="flex items-center gap-2 p-4 bg-white border border-slate-200 rounded-xl hover:border-primary text-secondary hover:text-primary transition-all"><ArrowRight className="w-4 h-4"/> Clínicas e Hospitais (VISA)</Link></li>
                <li><Link href="/avcb-itaim-bibi" className="flex items-center gap-2 p-4 bg-white border border-slate-200 rounded-xl hover:border-primary text-secondary hover:text-primary transition-all"><ArrowRight className="w-4 h-4"/> Lajes Corporativas (Triple A)</Link></li>
              </ul>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Reprovação: O que acontece?</h2>
              <p>
                 A reprovação gera um **Relatório de Não Conformidades**. O engenheiro deve responder legalmente ao relatório, comprovando as correções físicas. Uma nova taxa de vistoria pode ser exigida dependendo do número de visitas já realizadas.
              </p>

              <div className="not-prose bg-primary/5 p-12 rounded-[4rem] border-2 border-primary/10 my-16 text-center italic relative">
                 <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white p-4 rounded-3xl">
                    <AlertTriangle className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-black text-secondary uppercase italic mb-6 tracking-tighter">O ERRO MAIS COMUM</h3>
                 <p className="font-bold text-gray-700 leading-relaxed text-lg max-w-2xl mx-auto">
                    "Acreditar que tudo está funcionando porque parece novo." <br />
                    Luminárias que não ligam no teste de queda e portas corta-fogo que não fecham sozinhas são os vilões da vistoria.
                 </p>
              </div>

              {/* Sobre o Autor - E-E-A-T */}
              <div className="not-prose my-12 bg-slate-50 border border-slate-200 rounded-[2rem] p-8 flex flex-col sm:flex-row items-center gap-8 shadow-sm max-w-4xl mx-auto">
                 <div className="relative w-28 h-28 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image 
                       src="/images/eng-samuel-oficial.webp" 
                       alt="Eng. Samuel Costa, responsável técnico DRD2 Engenharia, CREA-SP 5070163570" 
                       fill 
                       className="object-cover" 
                       sizes="112px"
                       loading="lazy"
                    />
                 </div>
                 <div>
                    <h4 className="text-xl font-black text-secondary mb-2 italic tracking-tight gap-2">Sobre o Autor do Guia Central</h4>
                    <p className="text-slate-600 font-medium leading-relaxed">
                       <strong>Eng. Samuel Costa</strong> é Engenheiro Civil e Engenheiro de Segurança do Trabalho (CREA-SP 5070163570), responsável técnico da DRD2 Engenharia e especialista em projetos de AVCB em São Paulo.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

            {/* ── CTA CONTEXTUAL ── */}
      <div className="py-14 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-white text-xl font-black uppercase italic tracking-tight mb-2">
            Quer garantir aprovação na vistoria? Solicite um diagnóstico gratuito.
          </p>
          <p className="text-slate-400 text-sm font-bold mb-8">
            Atendimento especializado | Diagnóstico técnico gratuito | Sem compromisso
          </p>
          <CtaWhatsApp
            label="Falar com engenheiro antes da vistoria"
            occupationType="seu imóvel"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-black text-secondary leading-none uppercase tracking-tighter italic">DÚVIDAS SOBRE <span className="text-primary not-italic">VISTORIA</span></h2>
             <p className="mt-4 text-gray-400 font-bold uppercase tracking-widest text-xs tracking-widest">Protocolos de Vistoria do CBPMESP</p>
           </div>
           
           <div className="space-y-6">
             {faqItems.map((item, i) => (
               <div key={i} className="bg-white p-10 rounded-[4rem] border border-slate-200 hover:border-primary/20 transition-all group shadow-sm">
                 <h4 className="text-xl font-black text-secondary mb-4 flex items-center gap-4 italic tracking-tighter underline underline-offset-8 decoration-primary/10">
                   <HelpCircle className="w-7 h-7 text-primary shrink-0" />
                   {item.question}
                 </h4>
                 <div className="text-gray-600 font-medium leading-relaxed pl-11 border-l-4 border-primary/10 italic">
                   {item.answer}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      <BlogStrategicLinks currentSlug="/blog/como-funciona-vistoria-do-corpo-de-bombeiros" />

            {/* ── ARTIGOS RELACIONADOS ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic mb-8 border-l-8 border-red-600 pl-6 leading-none">
            Leia Também
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="/blog/prazo-para-emissao-de-avcb" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Prazo para Emissão de AVCB</span>
              </a>
              <a href="/blog/como-tirar-avcb-em-sao-paulo" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Como Tirar o AVCB em SP</span>
              </a>
              <a href="/blog/diferenca-entre-avcb-e-clcb" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Diferença entre AVCB e CLCB</span>
              </a>
              <a href="/blog/avcb-vencido-o-que-fazer" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">AVCB Vencido: O Que Fazer?</span>
              </a>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-[6rem] font-black leading-[0.85] uppercase tracking-tighter mb-8 italic">
               APROVAÇÃO NA <br /><span className="text-primary not-italic font-black italic underline decoration-primary/30 underline-offset-8">PRIMEIRA VISITA.</span>
            </h2>
            <p className="text-xl text-gray-400 font-bold mb-12 max-w-2xl mx-auto italic leading-relaxed">
               Não deixe o azar decidir o futuro do seu AVCB. Prepare sua edificação com quem acompanha do diagnóstico à vistoria final.
            </p>
            <LeadForm variant="compact" />
            <div className="mt-12 flex justify-center gap-8">
               <a href={whatsappLink} className="inline-flex items-center gap-4 text-white bg-primary px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-[#1EBE5A] hover:text-white hover:text-primary transition-all shadow-2xl">
                  <Phone className="w-5 h-5" /> Acompanhamento de Vistoria Agora
               </a>
            </div>
            
            <div className="mt-20 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-10">
               {subSectors.map((loc, i) => (
                 <Link key={i} href={loc.h} className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ {loc.n}</Link>
               ))}
            </div>
        </div>
      </section>
    </>
  );
}
