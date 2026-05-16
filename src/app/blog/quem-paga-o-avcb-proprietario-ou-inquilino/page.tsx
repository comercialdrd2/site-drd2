import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, ShieldAlert, BadgeInfo, MapPin,
  Building2, Landmark, Factory, GraduationCap, ArrowRight,
  ShieldCheck, Clock, Scale, HelpCircle, Gavel,
  FileText, Zap,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BlogStrategicLinks from "@/components/BlogStrategicLinks";
import BlogAuthorEvidence from "@/components/BlogAuthorEvidence";

const _pageTitle = "Quem Paga o AVCB: Proprietário ou Inquilino? Entenda a Lei";
const _pageDesc = "Descubra quem é responsável pelo AVCB em imóveis alugados — proprietário ou inquilino. Entenda o que diz a lei, o contrato de locação e as ITs do Bombeiro. DRD2 Engenharia.";

export const metadata = {
  title: "Quem Paga o AVCB: Proprietário ou Inquilino? Entenda a Lei",
  description: "Descubra quem é responsável pelo AVCB em imóveis alugados — proprietário ou inquilino. Entenda o que diz a lei, o contrato de locação e as ITs do Bombeiro. DRD2 Engenharia.",
  alternates: {
    canonical: "/blog/quem-paga-o-avcb-proprietario-ou-inquilino",
  },
};

export default function QuemPagaAVCBPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "O proprietário pode me obrigar a tirar o AVCB sendo que ele nunca teve?",
      answer: "Se a edificação nunca foi regularizada, a obrigação primária é do proprietário entregar o imóvel em condições de uso (Lei do Inquilinato). Contudo, o contrato pode transferir custos de adequação ao inquilino. A DRD2 avalia seu contrato sem custo."
    },
    {
      question: "Posso ser autuado pelo Corpo de Bombeiros mesmo sendo apenas inquilino?",
      answer: "Sim. A fiscalização autua o 'responsável pelo uso' no momento da vistoria. Mesmo que a culpa seja do proprietário, a multa recai sobre quem opera no local. Por isso a regularização preventiva é vital."
    },
    {
      question: "Quem paga a renovação do AVCB após 2 ou 3 anos de locação?",
      answer: "Geralmente, as renovações periódicas (manutenção e taxas) ficam a cargo do inquilino como despesa ordinária, a menos que o contrato de locação especifique o contrário."
    }
  ];

  const responsibilityCards = [
    {
      title: "PROPRIETÁRIO",
      role: "Responsabilidade Estrutural",
      desc: "Sistemas fixos (hidrantes, alarmes, sinalização básica) e a entrega do imóvel com projeto aprovado.",
      icon: Building2
    },
    {
      title: "INQUILINO",
      role: "Responsabilidade de Uso",
      desc: "Adequações específicas da atividade (ex: cozinha industrial, estoques químicos) e manutenção de extintores.",
      icon: Gavel
    }
  ];

  return (
    <>
      <JsonLD schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            "@id": "https://drd2.com.br/blog/quem-paga-o-avcb-proprietario-ou-inquilino/#article",
            "headline": "Quem Paga o AVCB: Proprietário ou Inquilino? Guia Definitivo",
            "description": _pageDesc,
            "image": "https://drd2.com.br/images/blog/fire_safety_equipment_premium.webp",
            "author": { "@type": "Person", "@id": "https://drd2.com.br/#samuel-costa" },
            "publisher": { "@id": "https://drd2.com.br/#organization" },
            "datePublished": "2026-04-15",
            "dateModified": "2026-05-04",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://drd2.com.br/blog/quem-paga-o-avcb-proprietario-ou-inquilino"
            }
          }
        ]
      }} />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white min-h-[85vh] flex items-center overflow-hidden border-b-8 border-primary pt-20 italic">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Conflito de responsabilidade AVCB - DRD2 Engenharia"
          fill
          className="object-cover opacity-20 grayscale brightness-50"
          priority
        sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-12">
          <div className="max-w-4xl">
            <span className="inline-block bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 border border-white/10 leading-none shadow-xl">Guia Especializado 2026</span>
            <h1 className="text-3xl md:text-[6rem] font-black mb-8 leading-[0.8] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">QUEM PAGA O</span>
              <span className="text-primary not-italic tracking-tighter uppercase">AVCB?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-bold uppercase tracking-tight text-balance">
              Proprietário ou Inquilino? Entenda o que diz a <strong>Lei do Inquilinato</strong> e as normas vigentes do Corpo de Bombeiros sobre a responsabilidade técnica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary hover:bg-[#1EBE5A] hover:text-white hover:text-primary text-white font-black px-12 py-6 rounded-2xl text-2xl transition-all shadow-2xl flex items-center justify-center gap-4 border-b-8 border-white/20 uppercase tracking-tighter"
              >
                <Phone className="w-8 h-8" /> Consultar Especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      <BlogAuthorEvidence published="2026-04-15" updated="2026-05-04" />

      {/* Main Content Sections */}
      <section className="py-24 bg-white border-t border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest leading-none">
                <Scale className="w-4 h-4" /> Análise Jurídica e Técnica
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-secondary leading-[0.85] tracking-tighter uppercase italic underline decoration-primary/20 decoration-8 underline-offset-16">
                O CONFLITO <br /> DE POSSE <br /> <span className="text-primary not-italic tracking-tighter uppercase">AVCB</span>
              </h2>
              <p className="text-xl text-gray-500 font-bold leading-relaxed uppercase tracking-tight text-balance border-l-8 border-primary/20 pl-8">
                A dúvida é clássica: de quem é o custo da regularização? Em regra, o proprietário deve entregar o imóvel com os sistemas fixos aprovados, enquanto o inquilino assume adequações ligadas ao seu uso específico.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                {responsibilityCards.map((card, i) => (
                   <div key={i} className="bg-slate-50 p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-4xl transition-all group border-b-8 border-primary/10">
                      <card.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="font-black text-secondary uppercase text-xl mb-4 italic tracking-tighter">{card.title}</h4>
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest block mb-4 leading-none italic text-primary">{card.role}</p>
                      <p className="text-[11px] text-gray-500 font-bold leading-relaxed transition-all italic">{card.desc}</p>
                   </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-[4rem] shadow-4xl relative overflow-hidden border-t-8 border-primary sticky top-24">
               <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12" />
               <h3 className="text-2xl font-black text-secondary mb-10 flex items-center gap-3 italic uppercase text-center justify-center underline decoration-primary/10">
                  Parecer <span className="text-primary not-italic uppercase tracking-tighter">Técnico Grátis</span>
               </h3>
               <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] mb-10 text-center italic">Envie os detalhes do seu caso comercial</p>
               <LeadForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Grid Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20 underline decoration-primary decoration-4 underline-offset-16">
            <h2 className="text-4xl md:text-7xl font-black text-secondary uppercase italic tracking-tighter mb-4 leading-none">O Que Diz <span className="text-primary not-italic tracking-tighter font-serif">A Lei</span></h2>
            <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-[10px] italic">Contexto da Lei do Inquilinato (Nº 8.245/91)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="bg-white p-12 rounded-[4rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all group border-b-8 border-primary/20">
              <FileText className="w-16 h-16 text-primary mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-secondary uppercase mb-6 italic tracking-tighter leading-none underline decoration-primary/10 transition-all group-hover:decoration-primary/40">Adequações Necessárias</h3>
              <p className="text-gray-500 font-bold leading-relaxed mb-10 uppercase tracking-tight text-[11px] italic">
                O proprietário é obrigado a entregar o imóvel em estado de servir ao uso a que se destina. Se o imóvel não tem AVCB original, a regularização inicial é dele.
              </p>
            </div>

            <div className="bg-white p-12 rounded-[4rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all group border-b-8 border-primary/20">
              <Zap className="w-16 h-16 text-primary mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-secondary uppercase mb-6 italic tracking-tighter leading-none underline decoration-primary/10 transition-all group-hover:decoration-primary/40">Atividade Específica</h3>
              <p className="text-gray-500 font-bold leading-relaxed mb-10 uppercase tracking-tight text-[11px] italic">
                Se o inquilino instala uma cozinha industrial ou um estoque de inflamáveis que exige proteções extras, o custo dessa adequação específica é do inquilino.
              </p>
            </div>

            <div className="bg-white p-12 rounded-[4rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all group border-b-8 border-primary/20">
              <ShieldAlert className="w-16 h-16 text-primary mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-secondary uppercase mb-6 italic tracking-tighter leading-none underline decoration-primary/10 transition-all group-hover:decoration-primary/40">Risco de Multa</h3>
              <p className="text-gray-500 font-bold leading-relaxed mb-10 uppercase tracking-tight text-[11px] italic">
                A fiscalização autua quem está ocupando o imóvel. Multas e embargos prejudicam a operação do inquilino imediatamente, por isso a cooperação é fundamental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logic Table */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden italic shadow-2xl">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-[6rem] font-black uppercase italic tracking-tighter mb-10 leading-[0.8] underline decoration-primary decoration-8 underline-offset-16 text-center">
               GUIA RÁPIDO <br /><span className="text-primary not-italic tracking-[0.1em]">QUEM PAGA?</span>
            </h2>
            <div className="bg-white rounded-[4rem] p-16 text-slate-900 shadow-2xl border-t-12 border-primary min-h-[400px] flex flex-col justify-center">
                 <div className="space-y-12">
                    <div className="flex justify-between items-end border-b border-slate-100 pb-10 hover:border-primary/20 transition-all">
                       <div className="max-w-[70%] text-balance">
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2 leading-none italic">Sistemas Estruturais</span>
                          <h4 className="font-black text-xl text-secondary uppercase italic tracking-tighter leading-none">PRIMEIRO AVCB DO PRÉDIO</h4>
                       </div>
                       <span className="text-primary font-black italic text-2xl tracking-tighter leading-none">PROPRIETÁRIO</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-slate-100 pb-10 hover:border-primary/20 transition-all">
                        <div className="max-w-[70%] text-balance">
                           <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2 leading-none italic">Alteração de Layout</span>
                           <h4 className="font-black text-xl text-secondary uppercase italic tracking-tighter leading-none">ADAPTAÇÃO DO NEGÓCIO</h4>
                        </div>
                        <span className="text-primary font-black italic text-2xl tracking-tighter leading-none">INQUILINO</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-slate-100 pb-10 hover:border-primary/20 transition-all">
                        <div className="max-w-[70%] text-balance">
                           <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2 leading-none italic">Despesa Ordinária</span>
                           <h4 className="font-black text-xl text-secondary uppercase italic tracking-tighter leading-none">RENOVAÇÃO E MANUTENÇÃO</h4>
                        </div>
                        <span className="text-primary font-black italic text-2xl tracking-tighter leading-none">INQUILINO*</span>
                    </div>
                 </div>
                 <p className="mt-12 text-[9px] text-gray-400 font-black uppercase text-center italic tracking-[0.4em] leading-relaxed">
                   *Salvo cláusula contratual específica que preveja o contrário.
                 </p>
            </div>
        </div>
      </section>

            {/* ── CTA CONTEXTUAL ── */}
      <div className="py-14 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-white text-xl font-black uppercase italic tracking-tight mb-2">
            Tem dúvidas sobre responsabilidade? Nossos engenheiros orientam gratuitamente.
          </p>
          <p className="text-slate-400 text-sm font-bold mb-8">
            Atendimento especializado | Diagnóstico técnico gratuito | Sem compromisso
          </p>
          <CtaWhatsApp
            label="Consultar responsabilidade pelo WhatsApp"
            occupationType="seu imóvel"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

      <BlogStrategicLinks currentSlug="/blog/quem-paga-o-avcb-proprietario-ou-inquilino" />

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-slate-100 italic">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16 underline decoration-primary decoration-4 underline-offset-16">
             <h2 className="text-4xl font-black text-secondary uppercase italic tracking-tighter">Perguntas <span className="text-primary not-italic text-sm">FREQUENTES</span></h2>
             <p className="mt-2 text-gray-400 font-black uppercase tracking-widest text-xs italic">Dúvidas sobre locação e segurança contra incêndio</p>
           </div>
           
           <div className="space-y-6">
             {faqItems.map((item, i) => (
               <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 group hover:border-primary/20 transition-all shadow-sm">
                 <h4 className="text-xl font-black text-secondary mb-4 flex items-center gap-4 italic italic leading-none">
                   <HelpCircle className="w-8 h-8 text-primary shrink-0 opacity-20 group-hover:opacity-100 transition-all" />
                   {item.question}
                 </h4>
                 <p className="text-gray-500 font-bold leading-relaxed pl-12 border-l-4 border-primary/10 text-sm uppercase tracking-tight italic">
                   {item.answer}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Final Conversion */}
      <section className="py-32 bg-slate-50 border-t border-slate-200 text-center relative overflow-hidden italic shadow-inner">
        <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-[8rem] font-black text-secondary leading-[0.75] uppercase tracking-tighter mb-12 italic underline decoration-primary decoration-8 underline-offset-[2rem]">
              Conflito Resolvido <br /><span className="text-primary not-italic tracking-[0.1em]">CONFORMIDADE GARANTIDA</span>
            </h2>
            <p className="text-2xl text-gray-500 font-black mb-20 max-w-3xl mx-auto uppercase italic leading-none tracking-[0.4em]">Proprietário ou Inquilino: Fazemos o diagnóstico e regularizamos seu imóvel comercial.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-10">
               <a 
                 href={whatsappLink} 
                 className="bg-primary text-white font-black px-20 py-8 rounded-[2rem] shadow-4xl hover:bg-slate-900 transition-all flex items-center justify-center gap-8 text-2xl tracking-tighter uppercase border-b-8 border-white/20 select-none italic"
               >
                 <Phone className="w-10 h-10" /> Consultar Engenheiro Agora
               </a>
            </div>
            <div className="mt-24 pt-24 border-t border-slate-200 flex flex-wrap justify-center gap-12 text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] italic leading-none">
               <Link href="/avcb-sao-paulo" className="hover:text-primary transition-colors underline decoration-primary/10 tracking-[0.5em]">→ AVCB SÃO PAULO</Link>
               <Link href="/avcb-preco" className="hover:text-primary transition-colors underline decoration-primary/10 tracking-[0.5em]">→ QUANTO CUSTA</Link>
               <Link href="/blog/avcb-vencido-o-que-fazer" className="hover:text-primary transition-colors underline decoration-primary/10 tracking-[0.5em]">→ AVCB VENCIDO</Link>
               <Link href="/renovacao-avcb" className="hover:text-primary transition-colors underline decoration-primary/10 tracking-[0.5em]">→ RENOVAÇÃO</Link>
            </div>
        </div>
      </section>

      {/* SEO Body Context */}
      <section className="py-24 bg-white border-t border-slate-100 text-slate-700 italic border-b-4 border-primary">
        <div className="container mx-auto px-4 max-w-4xl prose prose-slate font-black uppercase text-[11px] tracking-tight leading-relaxed">
          <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic mb-10 border-l-12 border-primary pl-10 leading-none underline decoration-primary/5">A Responsabilidade Legal pelo AVCB em Imóveis Alugados</h2>
          <p>A dúvida sobre quem deve arcar com os custos do AVCB (Auto de Vistoria do Corpo de Bombeiros) é um dos maiores pontos de atrito em contratos de locação comercial. Técnicamente, a regularização de incêndio é uma exigência para que a edificação possa ser ocupada com segurança, vinculando-se diretamente ao dever do proprietário de entregar o imóvel em condições adequadas de uso.</p>
          <p>No entanto, a complexidade surge na distinção entre o AVCB estrutural e a regularização por atividade específica. A DRD2 Engenharia atua mediando tecnicamente esses casos, realizando o diagnóstico do que é considerado sistema fixo (responsabilidade predial) e o que é adequação de layout do inquilino. Com nossa consultoria, proprietários e locatários encontram um denominador comum técnico que garante a conformidade do imóvel com o Decreto Estadual nº 69.118/2024 e as normas do CREA-SP.</p>
          <div className="pt-12 flex flex-wrap gap-10 text-[9px] font-black text-slate-300 uppercase italic tracking-[0.4em]">
            <span>#ResponsabilidadeAVCB</span>
            <span>#LeiDoInquilinato</span>
            <span>#EngenhariaComercial</span>
            <span>#BombeirosSP</span>
          </div>
        </div>
      </section>
    </>
  );
}
