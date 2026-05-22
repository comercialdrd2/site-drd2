import Image from "next/image";
import Link from "next/link";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import {
  Calculator, CheckCircle, ShieldCheck, Phone, ArrowRight,
  Info, Building2, Wallet, Banknote, BadgeCheck,
  FileStack, AlertCircle,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

const _pageTitle = "Quanto Custa o AVCB em São Paulo? Preço Real em 2025";
const _pageDesc = "Descubra o preço do AVCB em São Paulo. Fatores de custo, taxas CBPMESP e honorários técnicos conforme Decreto 69.118/2024. Orçamento gratuito em 2h.";

export const metadata = {
  title: "Quanto Custa o AVCB em São Paulo? Preço Real em 2025",
  description: "Descubra o preço do AVCB em São Paulo. Fatores de custo, taxas CBPMESP e honorários técnicos conforme Decreto 69.118/2024. Orçamento gratuito em 2h.",
  alternates: {
    canonical: "/avcb-preco",
  },
};

export default function AVCBPrecoPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqs = [
    {
      question: "Quanto custa o AVCB em São Paulo em 2025?",
      answer: "O preço do AVCB em SP varia conforme o tipo de ocupação, área total, sistemas já instalados e adequações necessárias. Edificações pequenas (até 750m²) com sistemas conformes têm custo menor. Grandes instalações industriais exigem orçamento personalizado."
    },
    {
      question: "O que está incluso no serviço de AVCB da DRD2 Engenharia?",
      answer: "O serviço completo inclui: diagnóstico técnico, projeto de segurança contra incêndio conforme ITs do CBPMESP, ART registrada no CREA-SP, protocolo do processo, acompanhamento da análise e suporte na vistoria."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-preco",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "Orçamento de AVCB em São Paulo",
        faqs: faqs,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Quanto Custa o AVCB", item: "/avcb-preco" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Pricing - Transparency focused */}
      <section className="relative bg-white pt-32 pb-24 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-2/5 h-full bg-slate-50 -skew-x-12 transform translate-x-1/2 opacity-50" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="inline-block bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">Transparência em 2025</span>
              <h1 className="text-3xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-secondary uppercase">
                Quanto Custa o <span className="text-primary italic">AVCB em SP?</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                O preço do AVCB em São Paulo varia conforme fatores técnicos. O que garantimos é que um projeto mal elaborado custa muito mais caro que um processo conduzido por especialistas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-8">
                <a 
                  href={whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary hover:bg-secondary text-white font-black px-10 py-5 rounded-2xl text-xl transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-3"
                >
                  <Calculator className="w-6 h-6" /> Orçamento Sem Compromisso
                </a>
              </div>
              <p className="text-xs text-gray-400 font-bold flex items-center gap-2">
                 <BadgeCheck className="text-primary w-4 h-4" /> Orçamento entregue em até 2 horas úteis.
              </p>
            </div>
            
            <div className="lg:w-1/2">
               <div className="bg-slate-900 p-8 rounded-[3.5rem] shadow-4xl text-white relative overflow-hidden border border-white/10">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
                 <h3 className="text-2xl font-black mb-6 uppercase italic text-primary">Simular Investimento</h3>
           
      <ServiceClusterLinks currentSlug="/avcb-preco" />
      <ServiceBlogLinks currentSlug="/avcb-preco" />

      <LeadForm variant="compact" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fatores de Custo - Tabelado */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-black text-secondary leading-none uppercase tracking-tighter">O que define o <span className="text-primary italic">Seu Valor?</span></h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Ocupação", desc: "Determina a complexidade das ITs aplicáveis. Indústrias custam mais que comércios.", icon: Building2 },
                { title: "Área Total", desc: "Quanto maior a área, mais sistemas são exigidos e maior o escopo do projeto.", icon: FileStack },
                { title: "Sistemas Existentes", desc: "Edificações com sistemas conformes reduzem drasticamente o custo de adequação.", icon: BadgeCheck }
              ].map((f, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                   <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <f.icon className="text-primary w-8 h-8" />
                   </div>
                   <h4 className="text-lg font-black text-secondary uppercase mb-3">{f.title}</h4>
                   <p className="text-sm text-gray-500 font-medium leading-relaxed">{f.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Fatores de Precisão técnica */}
      <section className="py-24 bg-white relative">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-slate-950 rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden border-8 border-red-600/20">
               <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="relative z-10 text-center mb-16">
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter leading-none">
                    Por que não trabalhamos com <span className="text-primary">Tabelas de Preços?</span>
                  </h3>
                  <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                    Na engenharia de segurança contra incêndio, cada edificação possui um perfil de risco único. Um valor tabelado seria impreciso e irresponsável.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-colors">
                     <h4 className="text-primary font-black uppercase mb-4 tracking-widest text-sm italic">O Risco da Subestimação</h4>
                     <p className="text-slate-300 text-sm leading-relaxed">
                       Orçamentos feitos sem visita técnica costumam ignorar adequações críticas de hidrantes e SPDA, gerando reprovações e custos inesperados durante a vistoria final.
                     </p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-colors">
                     <h4 className="text-primary font-black uppercase mb-4 tracking-widest text-sm italic">Engenharia de Valor</h4>
                     <p className="text-slate-300 text-sm leading-relaxed">
                       Nosso diagnóstico mapeia o que é estritamente necessário segundo o Decreto 69.118/2024, protegendo seu patrimônio sem investimentos desnecessários.
                     </p>
                  </div>
               </div>

               <div className="mt-16 pt-12 border-t border-white/10 flex flex-col items-center">
                  <p className="text-white font-black text-2xl uppercase italic tracking-tighter mb-8">Receba sua Proposta Técnica Personalizada</p>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1EBE5A] hover:text-white hover:text-[#25D366] text-white font-black px-12 py-6 rounded-2xl text-xl transition-all uppercase italic shadow-2xl shadow-red-600/20"
                  >
                    <Calculator className="w-6 h-6 mr-3" /> Solicitar Diagnóstico Agora
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* O que está incluso */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-4xl font-black mb-10 leading-none uppercase tracking-tighter italic">O que está <span className="text-primary not-italic text-5xl">Incluso?</span></h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     {[
                       "Diagnóstico Técnico", "Enquadramento IT 2025", "Projeto SPCI Completo", "ART registrada CREA-SP", "Protocolo Digital", "Acompanhamento Análise", "Suporte na Vistoria", "Monitoramento Vencimento"
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                          <span className="text-gray-300 font-medium text-sm">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 relative">
                  <AlertCircle className="text-primary w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-black mb-6 uppercase">Atenção com orçamentos baixos</h3>
                  <p className="text-gray-400 font-medium leading-relaxed mb-8 text-sm">
                    Projetos significativamente abaixo do mercado indicam ausência de ART ou falta de visita técnica. Um projeto mal elaborado gera reprovação e retrabalho — custo superior a um projeto correto desde o início.
                  </p>
                  <Link href="/avcb-sao-paulo" className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:translate-x-2 transition-transform">
                     Ver Guia de Aprovação <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* FAQs Pricing */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-center text-3xl font-black mb-16 uppercase italic">Dúvidas sobre <span className="text-primary">Custos</span></h2>
             <div className="space-y-6">
               {faqs.map((faq, i) => (
                 <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                    <h4 className="font-black text-secondary uppercase mb-4 tracking-tighter text-xl italic">{faq.question}</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">{faq.answer}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary text-white text-center">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter uppercase leading-none italic">Precisa de um <span className="text-slate-900 not-italic">Valor Exato?</span></h2>
            <p className="text-xl font-medium mb-12">Analiso seu caso em 2 horas e envio a proposta técnica em PDF via WhatsApp.</p>
            <a href={whatsappLink} className="bg-slate-900 border-4 border-slate-900 hover:bg-[#1EBE5A] hover:text-white hover:text-primary hover:border-white transition-all text-white font-black px-12 py-6 rounded-2xl text-xl inline-flex items-center gap-3 shadow-3xl">
               <Banknote className="w-6 h-6" /> Solicitar Orçamento Gratuito
            </a>
         </div>
      </section>
    </>
  );
}

