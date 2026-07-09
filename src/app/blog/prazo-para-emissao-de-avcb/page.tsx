import Link from "next/link";
import Image from "next/image";
import { JsonLD } from "@/components/JsonLD";
import { Phone, Clock, Timer, History, Zap, Hourglass, Activity, Calendar, FileCheck, CheckCircle2, HelpCircle, ArrowRight } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BlogStrategicLinks from "@/components/BlogStrategicLinks";
import BlogAuthorEvidence from "@/components/BlogAuthorEvidence";

export const metadata = {
  title: "Prazo para Emissão do AVCB em São Paulo: Quanto Tempo Leva? Guia Atualizado",
  description: "Saiba quanto tempo leva para emitir o AVCB em São Paulo. Entenda cada etapa do processo, o que influencia o prazo e como evitar atrasos desnecessários. Guia técnico DRD2.",
  alternates: {
    canonical: "/blog/prazo-para-emissao-de-avcb",
  },
};

export default function PrazoAVCBPost() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.drd2.com.br/blog/prazo-para-emissao-de-avcb/#article",
        "headline": "Prazo para Emissão do AVCB em São Paulo: Quanto Tempo Realmente Leva?",
        "description": "Guia completo sobre os prazos de emissão de AVCB em São Paulo, detalhando cada etapa desde o diagnóstico até o certificado final.",
        "author": { "@type": "Person", "@id": "https://www.drd2.com.br/#samuel-costa" },
        "publisher": { "@id": "https://www.drd2.com.br/#organization" },
        "datePublished": "2026-04-15",
        "dateModified": "2026-05-04",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.drd2.com.br/blog/prazo-para-emissao-de-avcb"
        }
      }
    ]
  };

  const timelineSteps = [
    { title: "Diagnóstico e Obras", time: "2 Semanas a 4 Meses", desc: "A adequação física é o maior fator de variação no prazo total. Edificações com sistemas inexistentes ou muito defasados exigem obras mais longas antes de entrar na fila dos Bombeiros.", icon: History },
    { title: "Elaboração do Projeto", time: "1 a 6 Semanas", desc: "Desenvolvimento técnico do PPCI com memorial descritivo, plantas cotadas e emissão da ART no CREA-SP. Um projeto completo e preciso evita o Comunique-se e economiza semanas.", icon: FileCheck },
    { title: "Análise dos Bombeiros", time: "15 a 60 Dias", desc: "Fila interna de análise técnica do CBPMESP. O tempo varia conforme o volume de processos no batalhão responsável e a complexidade da edificação.", icon: Activity },
    { title: "Vistoria Final", time: "2 a 6 Semanas", desc: "Agendamento e realização da inspeção oficial por representante do Corpo de Bombeiros. Sistemas funcionando corretamente no dia são decisivos para aprovação na primeira visita.", icon: Timer },
    { title: "Certificado", time: "5 a 15 Dias", desc: "Após aprovação da vistoria, o AVCB é emitido digitalmente no portal do CBPMESP e disponibilizado para o responsável técnico e o proprietário.", icon: Zap }
  ];

  const estimatedPrazos = [
    { label: "CLCB (Simplificado)", value: "30 a 60 Dias" },
    { label: "Condomínio Residencial", value: "60 a 90 Dias" },
    { label: "Comércio Médio Porte", value: "60 a 120 Dias" },
    { label: "Galpão Industrial", value: "90 a 180 Dias" },
    { label: "Grande Porte / Alto Risco", value: "120 a 240+ Dias" }
  ];

  const faqItems = [
    {
      question: "O Corpo de Bombeiros tem prazo legal para analisar?",
      answer: "O CBPMESP estabelece prazos internos de análise técnica, mas o tempo real varia conforme o volume de processos no batalhão e a complexidade da edificação. Um projeto bem elaborado — sem inconsistências técnicas — reduz drasticamente a chance de Comunique-se e acelera o processo de forma significativa. Processos com documentação completa tendem a ser priorizados na triagem."
    },
    {
      question: "O prazo do AVCB conta do protocolo ou do diagnóstico?",
      answer: "O prazo oficial conta a partir do protocolo no sistema do CBPMESP. O tempo de diagnóstico, adequação física e elaboração do projeto ocorre antes e não entra na fila dos Bombeiros. Por isso, quanto mais rápido as obras e o projeto forem concluídos, mais cedo o processo entra na fila oficial de análise — e mais cedo o AVCB é emitido."
    },
    {
      question: "Posso acelerar o processo pagando taxa de urgência?",
      answer: "Não existe taxa oficial de urgência no CBPMESP. O que realmente agiliza o processo é a precisão técnica do engenheiro na elaboração do projeto, evitando erros que geram Comunique-se (exigências formais). Cada Comunique-se pode adicionar de 15 a 45 dias ao prazo total do processo."
    },
    {
      question: "O que acontece se o prazo do Bombeiro vencer?",
      answer: "O processo pode ser arquivado ou devolvido sem análise. É fundamental ter um engenheiro acompanhando ativamente o status no portal do CBPMESP para evitar paralisações. A DRD2 Engenharia monitora todos os processos em andamento e responde a notificações dentro dos prazos regulamentares."
    },
    {
      question: "O prazo muda se o imóvel for em bairro diferente de SP?",
      answer: "O prazo pode variar conforme o batalhão do Corpo de Bombeiros responsável pela área. Municípios da Grande São Paulo e do interior do estado têm batalhões com volumes de processos distintos, o que impacta o tempo de análise. O processo de protocolo digital unificou parte dos fluxos, mas diferenças regionais ainda existem."
    }
  ];

  return (
    <>
      <JsonLD schema={articleSchema} />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white min-h-[75vh] flex items-center overflow-hidden border-b-8 border-primary pt-20">
        <Image
          src="/images/blog/blog_hero_avcb_vencido.webp"
          alt="Prazo para Emissão do AVCB em São Paulo"
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
              <span className="text-gray-400">Cronograma de Obtenção</span>
            </nav>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic text-white">
               PRAZO PARA O <br /><span className="text-primary not-italic">AVCB EM SP?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-medium max-w-3xl">
              "Quanto tempo realmente leva?" — Saiba as estimativas realistas para cada etapa do processo e como evitar os gargalos burocráticos.
            </p>

            <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Guia de Prazos Realistas
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" /> Monitoramento em Tempo Real
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* ── BREADCRUMB ── */}
      <BlogAuthorEvidence published="2026-04-15" updated="2026-05-04" />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Cronograma de Obtenção" },
        ]}
        dark
      />

      {/* Intro Context */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="prose prose-lg md:prose-xl prose-slate max-w-none font-medium leading-relaxed text-gray-600">
              <p className="text-2xl font-bold text-secondary leading-relaxed mb-12 italic">
                A resposta honesta sobre o prazo do AVCB é: depende. Mas "depende" não significa incerteza quando existe um planejamento técnico rigoroso por trás do processo.
              </p>
              
              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic mb-8 border-l-8 border-primary pl-6 leading-none">Cronograma Detalhado do Processo</h2>
              
              <div className="not-prose space-y-4 my-12">
                 {timelineSteps.map((s, i) => (
                   <div key={i} className="flex gap-6 items-center p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:border-primary/20 transition-all group">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors shrink-0">
                        <s.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-1">
                           <h4 className="font-black text-secondary uppercase text-lg tracking-tighter">{s.title}</h4>
                           <span className="text-xs font-black text-primary bg-primary/5 px-3 py-1 rounded-full uppercase italic">{s.time}</span>
                        </div>
                        <p className="text-sm text-gray-500 font-bold leading-tight">{s.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Prazos por Tipo de Edificação</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
                {estimatedPrazos.map((p, i) => (
                  <div key={i} className="p-6 bg-white border-l-8 border-primary shadow-sm rounded-r-3xl flex justify-between items-center">
                    <span className="font-black text-secondary uppercase text-xs tracking-tight">{p.label}</span>
                    <span className="font-extrabold text-primary italic text-xs underline decoration-primary/20">{p.value}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">O que pode atrasar o processo?</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-lg">
                {[
                  "Obras iniciadas sem projeto técnico aprovado.",
                  "Respostas incompletas a 'Comunique-se' do Bombeiro.",
                  "Sistemas de proteção com defeito no dia da vistoria.",
                  "Documentação do imóvel desatualizada ou incompleta.",
                  "Ausência de ART para sistemas específicos (Gás, Elétrica).",
                  "Vistorias reprovadas por falta de acompanhamento."
                ].map((err, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <History className="w-6 h-6 text-primary shrink-0 mt-1 opacity-40 rotate-180" />
                    <span className="text-base font-bold text-gray-500 italic">{err}</span>
                  </li>
                ))}
              </ul>

              <div className="not-prose bg-primary/5 p-10 rounded-[3rem] border-2 border-primary/10 my-16 text-center">
                 <h3 className="text-2xl font-black text-secondary uppercase italic mb-4 tracking-tighter leading-none">Como <span className="text-primary not-italic">agilizar</span> o processo?</h3>
                 <p className="font-bold text-gray-600 leading-relaxed italic max-w-2xl mx-auto">
                    A forma mais rápida de obter o AVCB é garantir que o projeto chegue ao Bombeiro <strong>100% correto na primeira submissão</strong>. Evitar o Comunique-se economiza até 45 dias de espera e reduz o risco de indeferimento.
                 </p>
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Gestão de Prazos DRD2</h2>
              <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
                {[
                  { t: "Foco Técnico", d: "Projetos elaborados rigorosamente sob as ITs vigentes." },
                  { t: "Time Prioritário", d: "Regime de urgência interna para protocolo em até 48h." },
                  { t: "Monitoramento", d: "Acesso direto ao status do processo via sistema digital." }
                ].map((f, i) => (
                  <div key={i} className="p-8 bg-slate-900 rounded-3xl text-center">
                     <h5 className="font-black text-primary uppercase text-xs mb-3">{f.t}</h5>
                     <p className="text-[10px] text-gray-400 font-bold leading-relaxed">{f.d}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

            {/* ── CTA CONTEXTUAL ── */}
      <div className="py-14 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-white text-xl font-black uppercase italic tracking-tight mb-2">
            Não perca prazos — inicie hoje e receba o AVCB no menor tempo possível.
          </p>
          <p className="text-slate-400 text-sm font-bold mb-8">
            Atendimento especializado | Diagnóstico técnico gratuito | Sem compromisso
          </p>
          <CtaWhatsApp
            label="Iniciar processo pelo WhatsApp agora"
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
             <h2 className="text-4xl md:text-6xl font-black text-secondary leading-none uppercase tracking-tighter italic">DÚVIDAS SOBRE <span className="text-primary not-italic">PRAZOS</span></h2>
             <p className="mt-4 text-gray-400 font-bold uppercase tracking-widest text-xs">Prazos Oficiais e Realidade de Mercado</p>
           </div>
           
           <div className="space-y-6">
             {faqItems.map((item, i) => (
               <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-200 hover:border-primary/20 transition-all group shadow-sm">
                 <h4 className="text-xl font-black text-secondary mb-4 flex items-center gap-4 italic tracking-tighter">
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

      {/* Bairros Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-black text-secondary leading-none uppercase tracking-tighter italic mb-12">Prazos de AVCB no seu <span className="text-primary not-italic tracking-normal">Bairro</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
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
              ].map((loc, i) => (
                <Link key={i} href={loc.h} className="px-6 py-4 bg-slate-50 rounded-2xl text-[10px] font-black text-secondary border border-slate-200 uppercase tracking-widest hover:border-primary/30 transition-all hover:bg-white">
                   {loc.n}
                </Link>
              ))}
            </div>
        </div>
      </section>

      <BlogStrategicLinks currentSlug="/blog/prazo-para-emissao-de-avcb" />

            {/* ── ARTIGOS RELACIONADOS ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic mb-8 border-l-8 border-red-600 pl-6 leading-none">
            Leia Também
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="/blog/quanto-custa-avcb-em-sao-paulo" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Quanto Custa o AVCB em SP?</span>
              </a>
              <a href="/blog/como-tirar-avcb-em-sao-paulo" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Como Tirar o AVCB em SP</span>
              </a>
              <a href="/blog/avcb-vencido-o-que-fazer" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">AVCB Vencido: O Que Fazer?</span>
              </a>
              <a href="/blog/quem-precisa-de-avcb" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Quem Precisa de AVCB?</span>
              </a>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-8xl font-black leading-[0.85] uppercase tracking-tighter mb-8 italic">
               PRECISA DO AVCB  <br /><span className="text-primary not-italic font-black italic underline decoration-primary/30 underline-offset-8">COM URGÊNCIA?</span>
            </h2>
            <p className="text-xl text-gray-400 font-bold mb-12 max-w-2xl mx-auto italic leading-relaxed">
              Iniciamos seu diagnóstico técnico hoje. Não perca prazos de fiscalização por falta de planejamento. 
            </p>
            <LeadForm variant="compact" />
            <div className="mt-12 flex justify-center flex-wrap gap-8">
               <a href={whatsappLink} className="inline-flex items-center gap-4 text-white bg-primary px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-[#1EBE5A] hover:text-white hover:text-primary transition-all shadow-2xl">
                  <Phone className="w-5 h-5" /> Consultar Prazos via WhatsApp
               </a>
            </div>
            
            <div className="mt-20 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-10">
               <Link href="/avcb-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ PROCESSO SP</Link>
               <Link href="/renovacao-avcb" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ RENOVAÇÃO</Link>
               <Link href="/quanto-custa-avcb-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ CUSTO AVCB</Link>
               <Link href="/blog/como-tirar-avcb-em-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ PASSO A PASSO</Link>
            </div>
        </div>
      </section>
    </>
  );
}
