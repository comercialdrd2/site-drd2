import Link from "next/link";
import Image from "next/image";
import { JsonLD } from "@/components/JsonLD";
import {
  Phone, AlertTriangle, ShieldAlert, Gavel, Ban,
  Activity, Calendar, Bell, StepForward, ArrowRight,
  CheckCircle2, HelpCircle, Clock,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BlogStrategicLinks from "@/components/BlogStrategicLinks";
import BlogAuthorEvidence from "@/components/BlogAuthorEvidence";

export const metadata = {
  title: "AVCB Vencido: O Que Fazer, Quais São as Consequências e Como Regularizar",
  description: "Seu AVCB está vencido? Saiba o que acontece, quais são as multas e riscos, e como regularizar o mais rápido possível. Guia prático e atualizado. DRD2 Engenharia.",
  alternates: {
    canonical: "/blog/avcb-vencido-o-que-fazer",
  },
};

export default function AVCBVencidoPost() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://drd2engenharia.com.br/blog/avcb-vencido-o-que-fazer/#article",
        "headline": "AVCB Vencido: O Que Fazer Agora, Quais os Riscos e Como Se Regularizar",
        "description": "Guia técnico sobre as consequências de operar com AVCB vencido e o passo a passo para a regularização imediata em São Paulo.",
        "author": { "@type": "Person", "@id": "https://drd2engenharia.com.br/#samuel-costa" },
        "publisher": { "@id": "https://drd2engenharia.com.br/#organization" },
        "datePublished": "2026-04-14",
        "dateModified": "2026-05-04",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://drd2engenharia.com.br/blog/avcb-vencido-o-que-fazer"
        }
      }
    ]
  };

  const risks = [
    {
      title: "MULTA E AUTUAÇÃO",
      desc: "A edificação fica exposta a multas progressivas em fiscalizações de rotina ou denúncias. O valor pode chegar a dezenas de milhares de reais, dependendo do porte e do histórico de irregularidades.",
      icon: ShieldAlert
    },
    {
      title: "ALVARÁ BLOQUEADO",
      desc: "A Prefeitura de São Paulo exige o AVCB válido para renovar a licença de funcionamento da empresa. Sem o documento, o estabelecimento opera em situação de dupla irregularidade.",
      icon: Ban
    },
    {
      title: "COBERTURA DE SEGURO CANCELADA",
      desc: "As seguradoras negam cobertura de sinistros quando a documentação de segurança contra incêndio estiver expirada. Em caso de incêndio, todo o prejuízo recai sobre o proprietário.",
      icon: AlertTriangle
    },
    {
      title: "RESPONSABILIDADE CIVIL E CRIMINAL",
      desc: "O síndico, o proprietário ou o gestor responde civil e criminalmente em caso de incêndio com vítimas quando o AVCB está irregular. A pena pode incluir reclusão.",
      icon: Gavel
    }
  ];

  const faqItems = [
    {
      question: "Fui autuado com AVCB vencido. Ainda posso regularizar?",
      answer: "Sim. A autuação não impede a regularização — pelo contrário, reforça a urgência de agir imediatamente. A DRD2 Engenharia inicia o processo no mesmo dia do contato e fornece documentação comprobatória do andamento para apresentar ao órgão fiscalizador, demonstrando que a regularização está em curso."
    },
    {
      question: "O seguro do imóvel cobre sinistro se o AVCB estiver vencido?",
      answer: "Em geral, não. A maioria das apólices contém cláusulas que excluem cobertura quando a edificação está irregular perante o Corpo de Bombeiros. Regularize antes de um sinistro acontecer — depois é tarde."
    },
    {
      question: "Quanto tempo tenho para regularizar?",
      answer: "Não há prazo legal 'de carência'. A edificação está irregular a partir do dia seguinte ao vencimento do AVCB. O risco de autuação é imediato e cresce a cada dia de atraso."
    },
    {
      question: "AVCB vencido impede a venda do imóvel?",
      answer: "Pode complicar significativamente a transação. Bancos exigem AVCB válido para liberar financiamentos imobiliários, e compradores bem assessorados costumam exigir o documento em dia como condição de fechamento do negócio."
    }
  ];

  return (
    <>
      <JsonLD schema={articleSchema} />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white min-h-[75vh] flex items-center overflow-hidden border-b-8 border-primary pt-20">
        <div className="absolute top-0 right-0 w-full h-full">
           <Image
            src="/images/blog/blog_hero_avcb_vencido.webp"
            alt="AVCB Vencido: O Que Fazer?"
            fill
            className="object-cover opacity-20 grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-12">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8 bg-primary/10 w-fit px-4 py-1.5 rounded-full border border-primary/20">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-400">Regularização Urgente</span>
            </nav>

            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic text-white">
              AVCB <span className="text-primary not-italic">VENCIDO:</span> <br />O QUE FAZER?
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-medium max-w-3xl">
              Entenda os riscos legais, as consequências financeiras e o caminho mais rápido para regularizar sua edificação em São Paulo — antes que a fiscalização chegue.
            </p>

            <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Guia de Orientação Técnica
              </div>
              <div className="flex items-center gap-2 text-primary">
                <ShieldAlert className="w-5 h-5" /> Prioridade de Regularização
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogAuthorEvidence published="2026-04-14" updated="2026-05-04" />

      {/* ── BREADCRUMB ── */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Regularização Urgente" },
        ]}
        dark
      />

      {/* Intro Authority */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="prose prose-lg md:prose-xl prose-slate max-w-none font-medium leading-relaxed text-gray-600">
              <p className="text-2xl font-bold text-secondary leading-relaxed mb-12 italic">
                Descobrir que o AVCB está vencido gera preocupação — e com razão. A irregularidade pode ter consequências graves, mas a solução é puramente técnica e pode ser iniciada hoje mesmo. O que não se pode fazer é esperar.
              </p>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic mb-8 border-l-8 border-primary pl-6 leading-none">O que acontece quando o AVCB vence?</h2>

              <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
                 {risks.map((r, i) => (
                   <div key={i} className="p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:border-primary/20 transition-all flex flex-col h-full group border-b-4 border-b-primary/10">
                      <r.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="font-black text-secondary uppercase text-sm mb-3 tracking-tighter">{r.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-bold">{r.desc}</p>
                   </div>
                 ))}
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Vencido É Renovação ou Novo Processo?</h2>
              <p>
                Depende do tempo de vencimento. Se o AVCB expirou há pouco tempo e a edificação não sofreu alterações físicas, o tratamento costuma ser de <strong>Renovação</strong>, com custo e burocracia reduzidos em relação a um processo novo. Se o vencimento é antigo, o CBPMESP pode exigir que o processo seja refeito como <strong>Emissão Nova</strong>, exigindo projeto técnico atualizado com base no Decreto Estadual nº 69.118/2024 e vistoria presencial completa. A DRD2 Engenharia avalia qual caminho se aplica ao seu caso gratuitamente.
              </p>

              <div className="not-prose bg-slate-900 rounded-[3rem] p-10 md:p-16 my-16 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                 <h3 className="text-2xl md:text-4xl font-black uppercase italic mb-6 tracking-tighter leading-none">PASSO A PASSO PARA <span className="text-primary not-italic">REGULARIZAR</span></h3>
                 <div className="space-y-6">
                    {[
                      { step: "01", t: "Não Espere", d: "Cada dia irregular amplia seu risco legal e financeiro. O processo começa com uma ligação." },
                      { step: "02", t: "Diagnóstico Técnico", d: "Visita técnica gratuita para definir a melhor estratégia: renovação ou novo processo." },
                      { step: "03", t: "Adequação Física", d: "Correção de extintores, sinalização, hidrantes ou qualquer sistema que exija atualização." },
                      { step: "04", t: "Protocolo Digital", d: "Submissão do processo no sistema Via Fácil do Corpo de Bombeiros com ART inclusa." },
                      { step: "05", t: "Emissão do Certificado", d: "Acompanhamento da vistoria final e entrega do AVCB válido para uso imediato." }
                    ].map((s, i) => (
                      <div key={i} className="flex gap-6 items-start">
                         <span className="text-primary font-black text-xl leading-none">{s.step}</span>
                         <div>
                            <h5 className="font-bold text-white uppercase text-base tracking-tight">{s.t}</h5>
                            <p className="text-gray-400 text-sm font-medium">{s.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Como evitar o vencimento no futuro?</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span><strong>Alerta com 6 Meses de Antecedência:</strong> Monitore o vencimento e inicie a renovação antes do prazo, evitando qualquer período de irregularidade.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span><strong>Contrato de Gestão de AVCB:</strong> Tenha um parceiro técnico fixo que monitore os prazos e inicie o processo de renovação automaticamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span><strong>Manutenção Preventiva Contínua:</strong> Mantenha os sistemas em dia para não precisar de grandes obras corretivas na hora de renovar o certificado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span><strong>Protocolo Antecipado:</strong> Você pode iniciar a renovação antes mesmo do vencimento — o novo AVCB passa a valer a partir da data de emissão.</span>
                </li>
              </ul>
           </div>
        </div>
      </section>

      {/* ── CTA CONTEXTUAL ── */}
      <div className="py-14 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-white text-xl font-black uppercase italic tracking-tight mb-2">
            Seu AVCB está vencido? Fale agora com um engenheiro — diagnóstico gratuito.
          </p>
          <p className="text-slate-400 text-sm font-bold mb-8">
            Atendimento especializado | Diagnóstico técnico gratuito | Sem compromisso
          </p>
          <CtaWhatsApp
            label="Regularizar AVCB Vencido pelo WhatsApp"
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
             <h2 className="text-4xl md:text-6xl font-black text-secondary leading-none uppercase tracking-tighter italic">DÚVIDAS <span className="text-primary not-italic">FREQUENTES</span></h2>
             <p className="mt-4 text-gray-400 font-bold uppercase tracking-widest text-xs">Informação Técnica contra o Risco Legal</p>
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

      {/* Final Lead Form Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-black text-secondary leading-none uppercase tracking-tighter italic mb-12">Regularização Urgente no seu <span className="text-primary not-italic tracking-normal">Bairro</span></h2>
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

      <BlogStrategicLinks currentSlug="/blog/avcb-vencido-o-que-fazer" />

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
              <a href="/blog/quanto-custa-avcb-em-sao-paulo" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Quanto Custa o AVCB em SP?</span>
              </a>
              <a href="/blog/como-tirar-avcb-em-sao-paulo" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Como Tirar o AVCB em SP</span>
              </a>
              <a href="/blog/quem-precisa-de-avcb" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Quem Precisa de AVCB?</span>
              </a>
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center justify-center">
           <ShieldAlert className="w-[500px] h-[500px] text-white" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-8xl font-black leading-[0.85] uppercase tracking-tighter mb-8 italic">
               NÃO CORRA <br /><span className="text-primary not-italic font-black italic underline decoration-primary/30 underline-offset-8">RISCOS HOJE.</span>
            </h2>
            <p className="text-xl text-gray-400 font-bold mb-12 max-w-2xl mx-auto italic">
              Seu AVCB está vencido? Solicite um diagnóstico gratuito agora e receba a documentação de regularização em andamento em até 24 horas úteis.
            </p>
            <LeadForm variant="compact" />
            <div className="mt-12">
               <a href={whatsappLink} className="inline-flex items-center gap-4 text-white bg-primary px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-[#1EBE5A] hover:text-white transition-all shadow-2xl">
                  <Phone className="w-5 h-5" /> Regularizar Vencimento Agora
               </a>
            </div>

            <div className="mt-20 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-10">
               <Link href="/renovacao-avcb" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ RENOVAÇÃO</Link>
               <Link href="/quanto-custa-avcb-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ PREÇOS</Link>
               <Link href="/engenheiro-avcb-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ ENGENHEIRO SP</Link>
            </div>
        </div>
      </section>
    </>
  );
}
