import Link from "next/link";
import Image from "next/image";
import { JsonLD } from "@/components/JsonLD";
import {
  Phone, CheckCircle, Calculator, Info, ArrowRight,
  ShieldCheck, DollarSign, Wallet, FileText, BadgeCheck,
  Clock, CheckCircle2, HelpCircle, HardHat, Construction,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BlogStrategicLinks from "@/components/BlogStrategicLinks";
import BlogAuthorEvidence from "@/components/BlogAuthorEvidence";

export const metadata = {
  title: "Quanto Custa o AVCB em São Paulo? Guia Completo de Preços e Fatores",
  description: "Saiba quanto custa o AVCB em São Paulo em 2026. Valores por tipo de edificação, fatores que influenciam o preço e como evitar gastos desnecessários. Guia técnico completo. DRD2 Engenharia.",
  alternates: {
    canonical: "/blog/quanto-custa-avcb-em-sao-paulo",
  },
};

export default function QuantocustaAVCBPost() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://drd2engenharia.com.br/blog/quanto-custa-avcb-em-sao-paulo/#article",
        "headline": "Quanto Custa o AVCB em São Paulo? Guia Completo de Preços, Fatores e Como Economizar",
        "description": "Guia completo sobre os custos de emissão e renovação de AVCB em São Paulo, incluindo taxas do Bombeiro, honorários de engenharia e adequações de sistemas.",
        "author": { "@type": "Person", "@id": "https://drd2engenharia.com.br/#samuel-costa" },
        "publisher": { "@id": "https://drd2engenharia.com.br/#organization" },
        "datePublished": "2026-04-12",
        "dateModified": "2026-05-04",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://drd2engenharia.com.br/blog/quanto-custa-avcb-em-sao-paulo"
        }
      }
    ]
  };

  const pricingFactors = [
    {
      title: "Honorários de Engenharia",
      desc: "Diagnóstico técnico, elaboração do PPCI, ART, protocolo, acompanhamento da análise e presença na vistoria. É o componente que garante a aprovação.",
      icon: HardHat
    },
    {
      title: "Taxa de ART (CREA-SP)",
      desc: "Taxa obrigatória por lei, paga ao Conselho Regional de Engenharia para validar a responsabilidade técnica do engenheiro responsável pelo processo.",
      icon: BadgeCheck
    },
    {
      title: "Taxas do CBPMESP",
      desc: "Calculadas pelo Corpo de Bombeiros com base na área total construída e no tipo de risco da ocupação. Variam conforme a Instrução Técnica aplicável.",
      icon: Calculator
    },
    {
      title: "Adequação de Sistemas",
      desc: "Investimento em equipamentos e instalações: hidrantes, sprinklers, alarme de incêndio, iluminação de emergência, sinalização e extintores.",
      icon: Construction
    }
  ];

  const faqItems = [
    {
      question: "Existe um preço médio para o AVCB em São Paulo?",
      answer: "Não existe um valor fixo. O custo do AVCB varia conforme o tipo de edificação (condomínio, comércio, indústria), a área total, o nível de risco da atividade e a situação dos sistemas de proteção já instalados. A única forma de saber o custo real é com o diagnóstico técnico da edificação — que a DRD2 Engenharia realiza gratuitamente e sem compromisso."
    },
    {
      question: "O AVCB mais barato é sempre o melhor negócio?",
      answer: "Não. Propostas muito abaixo do mercado costumam esconder escopo incompleto, ausência de ART (o que torna o processo tecnicamente inválido) ou profissional sem capacidade técnica para enfrentar exigências do Bombeiro. O AVCB que não sai é, na prática, o mais caro — porque você paga duas vezes: a tentativa frustrada e o retrabalho."
    },
    {
      question: "O custo do AVCB pode ser parcelado?",
      answer: "Isso depende de cada empresa. A DRD2 Engenharia apresenta a proposta completa com escopo detalhado e as condições de pagamento no momento do orçamento, com flexibilidade para condomínios e empresas que precisam adequar o investimento ao orçamento disponível."
    },
    {
      question: "Qual é o custo de manutenção depois de ter o AVCB?",
      answer: "O AVCB tem validade de 1 a 5 anos conforme o tipo de ocupação. Após o vencimento, a renovação tem um custo de consultoria menor do que a primeira emissão, desde que os sistemas estejam em conformidade. Manter os equipamentos em dia ao longo da vigência é fundamental para evitar exigências surpresa na renovação."
    },
    {
      question: "Quanto custa a renovação do AVCB?",
      answer: "A renovação do AVCB em geral custa menos do que a primeira emissão, pois parte do trabalho técnico já foi feita. Os principais custos envolvem a atualização do projeto, nova ART, taxa do Corpo de Bombeiros e eventuais adequações nos sistemas caso tenham surgido novas exigências normativas desde a última aprovação."
    }
  ];

  return (
    <>
      <JsonLD schema={articleSchema} />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white min-h-[75vh] flex items-center overflow-hidden border-b-8 border-primary pt-20">
        <Image
          src="/images/blog/blog_hero_avcb_preco.webp"
          alt="Quanto Custa o AVCB em São Paulo?"
          fill
          className="object-cover opacity-20 grayscale brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-12">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8 bg-primary/10 w-fit px-4 py-1.5 rounded-full border border-primary/20">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-400">Guia de Preços 2026</span>
            </nav>

            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic text-white">
              QUANTO CUSTA O <span className="text-primary not-italic">AVCB EM SP?</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-medium max-w-3xl">
              Entenda os fatores que compõem o investimento na regularização do seu imóvel e como economizar sem comprometer a aprovação junto ao Corpo de Bombeiros.
            </p>

            <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Atualizado em 2026
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Conteúdo Técnico Especializado
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogAuthorEvidence published="2026-04-12" updated="2026-05-04" />

      {/* ── BREADCRUMB ── */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Guia de Preços 2026" },
        ]}
        dark
      />

      {/* Intro Authority */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="prose prose-lg md:prose-xl prose-slate max-w-none font-medium leading-relaxed text-gray-600">
              <p className="text-2xl font-bold text-secondary leading-relaxed mb-12 italic">
                Essa é a pergunta que todo síndico, empresário e proprietário faz antes de iniciar o processo de regularização. E a resposta honesta é: depende. Mas "depende" não precisa ser sinônimo de incerteza — com o diagnóstico técnico correto, o custo real se torna previsível.
              </p>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic mb-8 border-l-8 border-primary pl-6 leading-none">Por que o AVCB não tem um preço único?</h2>
              <p>
                O AVCB (Auto de Vistoria do Corpo de Bombeiros) é emitido pelo CBPMESP após um processo técnico que envolve elaboração de projeto, adequação de sistemas, protocolo e vistoria. Cada edificação tem características únicas que determinam o grau de complexidade desse processo — e, consequentemente, o custo total.
              </p>
              <p>
                Uma padaria de 200 m² no térreo de um edifício comercial tem um processo muito diferente de um condomínio residencial de 20 andares com 200 unidades. O que unifica todos esses casos é a obrigação legal de ter o AVCB válido — o que os diferencia é o custo de chegar até ele.
              </p>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">O que compõe o custo do AVCB?</h2>

              <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-6 my-12">
                 {pricingFactors.map((f, i) => (
                   <div key={i} className="p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:border-primary/20 transition-all flex flex-col h-full group">
                      <f.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="font-black text-secondary uppercase text-sm mb-3 tracking-tighter">{f.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-bold">{f.desc}</p>
                   </div>
                 ))}
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">O que influencia o enquadramento (e o custo)?</h2>
              <div className="space-y-6 my-10 font-bold italic text-slate-700">
                <p>O enquadramento normativo é o que define o esforço de engenharia necessário. Veja os dois perfis principais de processo:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-primary">
                    <h4 className="text-secondary uppercase text-sm mb-2">PTS (Processo Técnico Simplificado)</h4>
                    <p className="text-xs text-gray-500 font-medium">Edificações de baixo risco, geralmente até 750 m². Processo mais ágil, com análise técnica simplificada e menor custo de adequação.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-secondary">
                    <h4 className="text-secondary uppercase text-sm mb-2">Projeto Técnico (PT)</h4>
                    <p className="text-xs text-gray-500 font-medium">Hospitais, indústrias, grandes condomínios e edificações de uso misto. Exige análise rigorosa do Bombeiro, memorial descritivo detalhado e sistemas completos.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Fatores que aumentam o custo</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span><strong>Edificações muito antigas:</strong> Ausência de projetos originais e sistemas defasados exigindo retrofit completo dos equipamentos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span><strong>Sistemas inexistentes:</strong> Quando a edificação precisa de instalação completa de hidrante, sprinkler ou alarme do zero.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span><strong>Comunique-se parado:</strong> Processos paralisados por falta de resposta às exigências do Bombeiro podem gerar honorários adicionais para reabertura.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span><strong>Edificações tombadas:</strong> Exigem soluções técnicas diferenciadas e materiais específicos para não comprometer o patrimônio histórico.</span>
                </li>
              </ul>

              <div className="not-prose bg-primary/5 p-10 rounded-[3rem] border-2 border-primary/10 my-16 text-center">
                 <h3 className="text-2xl font-black text-secondary uppercase italic mb-4 tracking-tighter leading-none">Cuidado com <span className="text-primary not-italic">AVCB "Barato"</span></h3>
                 <p className="font-bold text-gray-600 leading-relaxed italic">
                   Propostas muito abaixo do mercado escondem a ausência de ART (tecnicamente inválido), escopo incompleto ou falta de capacidade técnica para enfrentar as exigências do Bombeiro. O AVCB que não sai é, na prática, o mais caro.
                 </p>
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Como a DRD2 Engenharia precifica?</h2>
              <div className="not-prose space-y-6">
                {[
                  { step: "01", title: "Enquadramento Gratuito", desc: "Analisamos as informações básicas da edificação e definimos a IT correta para não gastar mais do que o necessário." },
                  { step: "02", title: "Proposta Total", desc: "Você recebe o valor final com escopo detalhado, prazo estimado e condições. Sem taxas ocultas ou surpresas no meio do processo." },
                  { step: "03", title: "Execução Técnica", desc: "Processo transparente, com acompanhamento sistemático — do protocolo até a emissão do certificado. Você é atualizado a cada etapa." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-center p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <span className="text-4xl font-black text-primary/20 italic tracking-tighter">{s.step}</span>
                    <div>
                       <h5 className="font-black text-secondary uppercase text-sm tracking-tighter">{s.title}</h5>
                       <p className="text-gray-500 font-medium text-xs tracking-tight">{s.desc}</p>
                    </div>
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
            Quer saber o custo exato para o seu imóvel? Diagnóstico técnico gratuito — sem compromisso.
          </p>
          <p className="text-slate-400 text-sm font-bold mb-8">
            Atendimento especializado | Diagnóstico técnico gratuito | Sem compromisso
          </p>
          <CtaWhatsApp
            label="Receber orçamento pelo WhatsApp"
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
             <h2 className="text-4xl md:text-6xl font-black text-secondary leading-none uppercase tracking-tighter italic">Dúvidas <span className="text-primary not-italic">Frequentes</span></h2>
             <p className="mt-4 text-gray-400 font-bold uppercase tracking-widest text-xs">Transparência em Cada Centavo do seu Investimento</p>
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

      {/* Regional Links Section - Deep Authority */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-black text-secondary leading-none uppercase tracking-tighter italic mb-12">Quanto custa o AVCB no seu <span className="text-primary not-italic tracking-normal">Bairro?</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { n: "Mooca", h: "/avcb-zona-leste" },
                { n: "Tatuapé", h: "/avcb-tatuape" },
                { n: "Itaim Bibi", h: "/avcb-itaim-bibi" },
                { n: "Vila Olímpia", h: "/avcb-vila-olimpia" },
                { n: "Brooklin", h: "/avcb-brooklin" },
                { n: "Santo Amaro", h: "/avcb-santo-amaro" },
                { n: "Saúde", h: "/avcb-saude" },
                { n: "Moema", h: "/avcb-moema" },
                { n: "Campo Belo", h: "/avcb-campo-belo" },
                { n: "Vila Mariana", h: "/avcb-vila-mariana" }
              ].map((loc, i) => (
                <Link key={i} href={loc.h} className="px-6 py-4 bg-slate-50 rounded-2xl text-[10px] font-black text-secondary border border-slate-200 uppercase tracking-widest hover:border-primary/30 transition-all hover:bg-white">
                   {loc.n}
                </Link>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8">
               <Link href="/avcb-zona-sul" className="text-[10px] font-black uppercase text-primary tracking-widest hover:underline">ZONA SUL</Link>
               <Link href="/avcb-zona-leste" className="text-[10px] font-black uppercase text-primary tracking-widest hover:underline">ZONA LESTE</Link>
               <Link href="/avcb-zona-oeste" className="text-[10px] font-black uppercase text-primary tracking-widest hover:underline">ZONA OESTE</Link>
               <Link href="/avcb-zona-norte" className="text-[10px] font-black uppercase text-primary tracking-widest hover:underline">ZONA NORTE</Link>
               <Link href="/avcb-centro-sao-paulo" className="text-[10px] font-black uppercase text-primary tracking-widest hover:underline">CENTRO SP</Link>
            </div>
        </div>
      </section>

      <BlogStrategicLinks currentSlug="/blog/quanto-custa-avcb-em-sao-paulo" />

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
              <a href="/blog/quem-precisa-de-avcb" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Quem Precisa de AVCB?</span>
              </a>
              <a href="/blog/avcb-vencido-o-que-fazer" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">AVCB Vencido: O Que Fazer?</span>
              </a>
          </div>
        </div>
      </section>

      {/* Convince Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-black leading-[0.9] uppercase tracking-tighter mb-8 italic">
               DÊ O PRIMEIRO PASSO <br /><span className="text-primary not-italic font-black italic underline decoration-primary/30 underline-offset-8">COM SEGURANÇA.</span>
            </h2>
            <p className="text-xl text-gray-400 font-bold mb-12 max-w-2xl mx-auto italic">
              Solicite seu diagnóstico técnico sem custo e receba uma proposta completa em até 2 horas úteis.
            </p>
            <LeadForm variant="compact" />
            <div className="mt-12 flex justify-center items-center gap-8">
               <a href={whatsappLink} className="flex items-center gap-3 text-secondary bg-primary px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#1EBE5A] hover:text-white transition-all shadow-2xl">
                  <Phone className="w-4 h-4" /> Atendimento via WhatsApp
               </a>
            </div>
        </div>
      </section>
    </>
  );
}
