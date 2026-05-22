import Image from "next/image";
import {
  CheckCircle2, AlertTriangle,
  Map, Clock, ShieldX, RefreshCw, FileCheck,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import InternalLinksBlock from "@/components/InternalLinksBlock";

const _slug = "/renovacao-avcb-diadema";
const _pageTitle = "Renovação de AVCB em Diadema SP | Engenheiro Especializado — DRD2";
const _pageDesc = "Renovação de AVCB em Diadema com engenheiro especializado. AVCB vencido? Regularize antes de uma exigência, multa ou interdição. Indústrias químicas, farmacêuticas e galpões no ABC. DRD2 Engenharia.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

export default function RenovacaoAvcbDiademaPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Qual o prazo para renovar o AVCB vencido em Diadema?",
      answer: "A renovação em Diadema leva de 30 a 60 dias para comércio e de 60 a 120 dias para indústrias químicas e farmacêuticas. A DRD2 inicia em até 48h após o diagnóstico. O CBPMESP no ABC Paulista fiscaliza com intensidade — não espere a notificação.",
    },
    {
      question: "Indústria química em Diadema com AVCB vencido — quais são os riscos específicos?",
      answer: "Indústrias com produtos inflamáveis têm risco elevado. Sem AVCB válido, além da interdição e multas, a empresa pode ter operação suspensa por outros órgãos como CETESB e ANVISA. Regularize imediatamente.",
    },
    {
      question: "A renovação exige revisão de todos os sistemas de incêndio?",
      answer: "Sim. Na renovação, fazemos laudo técnico completo de todos os sistemas — extintores, hidrantes, sprinklers, alarme e sinalização. Se os equipamentos estiverem em bom estado, a renovação é rápida. Se houver itens fora da norma, indicamos as adequações necessárias antes do protocolo.",
    },
    {
      question: "Empresa de cosméticos em Diadema com AVCB vencido pode perder contratos?",
      answer: "Sim. Grandes redes varejistas e distribuidores de cosméticos exigem AVCB válido como condição de continuidade do contrato de fornecimento. Em Diadema, onde estão muitas indústrias de cosméticos, isso é uma exigência frequente de auditoria.",
    },
    {
      question: "A DRD2 atende renovações urgentes em Diadema?",
      answer: "Sim. Temos protocolo de urgência para AVCB vencido — priorizamos o diagnóstico e protocolo para imóveis com risco de interdição imediata em Diadema e todo o ABC Paulista.",
    },
  ];

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Diadema",
    serviceName: "Renovação de AVCB em Diadema",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Renovação AVCB", item: "/renovacao-avcb" },
      { name: "Diadema", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-slate-950 border-b-4 border-red-600">
        <Image src="/images/blog/blog_hero_avcb_galpao.webp" alt="Renovação de AVCB em Diadema" fill className="object-cover object-center opacity-20 grayscale-[50%]" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg">
              <AlertTriangle className="w-4 h-4" /> AVCB Vencido em Diadema — Ação Imediata
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight text-white">
              Renovação de AVCB em Diadema:<br className="hidden md:block" />
              <span className="text-red-500 block mt-2">Indústrias Químicas, Farmacêuticas e Galpões Regularizados</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Diadema é um dos maiores polos químicos e farmacêuticos do Brasil. Com indústrias de alto risco e o CBPMESP atuante no ABC, AVCB vencido significa interdição imediata, multas pesadas e perda de contratos.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter">
                Renovar AVCB em Diadema Agora
              </a>
            </div>
            <ul className="mt-10 space-y-4">
              {[
                "Especialistas em renovação para indústrias químicas e farmacêuticas",
                "Laudo técnico completo de todos os sistemas incluso",
                "Protocolo de urgência para AVCB com prazo crítico no ABC",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-lg text-gray-300 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 leading-tight mb-8">
                Renovação de AVCB em Diadema:<br />
                <span className="text-red-600">Processo Completo DRD2</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Diagnóstico técnico gratuito com inspeção completa dos sistemas.",
                  "Laudo de adequação — extintores, hidrantes, sprinklers, alarme.",
                  "Verificação de compatibilidade com produtos manuseados.",
                  "Protocolo de renovação junto ao CBPMESP.",
                  "Acompanhamento da vistoria e entrega do AVCB renovado.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "30–90", sub: "Dias para Renovar" },
                { label: "48h", sub: "Início do Processo" },
                { label: "0", sub: "Surpresas no Orçamento" },
                { label: "100%", sub: "Padrão CBPMESP" },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-4xl font-black text-red-900 mb-2">{stat.label}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <ShieldX className="w-16 h-16 text-red-600 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">
            Consequências do<br /><span className="text-red-500">AVCB Vencido em Diadema</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: AlertTriangle, title: "Interdição da Planta", text: "Indústrias químicas e farmacêuticas em Diadema podem ser interditadas com autuação conjunta do CBPMESP e CETESB — impacto duplo na operação." },
              { icon: ShieldX, title: "Perda de Contratos", text: "Redes varejistas e distribuidores exigem AVCB válido como condição de fornecimento. Sem a renovação, a empresa perde o contrato automaticamente." },
              { icon: FileCheck, title: "Autuação ANVISA", text: "Para farmacêuticas e cosméticos em Diadema, AVCB vencido pode gerar autuação adicional da ANVISA durante inspeções de rotina da unidade produtiva." },
              { icon: Clock, title: "Responsabilidade Civil", text: "Em caso de sinistro sem AVCB válido, o responsável responde civil e criminalmente — especialmente grave em indústrias com produtos de alto risco." },
            ].map((item, i) => (
              <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all">
                <item.icon className="w-10 h-10 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-white">{item.title}</h3>
                <p className="text-sm font-medium text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <RefreshCw className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Quando Renovar o AVCB em Diadema?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Urgente</div>
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">AVCB Vencido ou a Vencer</h3>
              <p className="text-slate-600 font-medium">AVCB expirado em Diadema é risco duplo: CBPMESP e CETESB podem fiscalizar simultaneamente. Inicie o processo de renovação com 60 a 90 dias de antecedência.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Mudança de Produto ou Processo</h3>
              <p className="text-slate-600 font-medium">Qualquer alteração no tipo ou volume de produto manuseado exige atualização do AVCB. Em Diadema, onde produtos químicos mudam frequentemente, isso é essencial.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Auditorias de Clientes</h3>
              <p className="text-slate-600 font-medium">Grandes clientes do setor químico e cosmético em Diadema realizam auditorias de fornecedores que incluem verificação obrigatória do AVCB válido.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Renovação do Alvará Municipal</h3>
              <p className="text-slate-600 font-medium">A Prefeitura de Diadema exige AVCB válido para renovar o alvará de funcionamento. Sem a renovação, a operação fica juridicamente irregular.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              O Processo de Renovação<br /><span className="text-red-600 italic">Passo a Passo</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Diagnóstico", desc: "Inspeção gratuita de todos os sistemas." },
              { step: "2", title: "Laudo", desc: "Adequação às ITs vigentes." },
              { step: "3", title: "Adequação", desc: "Correções pontuais, se houver." },
              { step: "4", title: "Protocolo", desc: "Submissão no CBPMESP." },
              { step: "5", title: "Vistoria", desc: "Aprovação e entrega do AVCB." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
                <div className="w-12 h-12 bg-red-600 text-white font-black text-xl flex items-center justify-center rounded-full mx-auto mb-6">{item.step}</div>
                <h3 className="text-white font-black uppercase text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-red-600 text-white rounded-[2rem] p-10 max-w-3xl mx-auto shadow-2xl font-black uppercase flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h4 className="text-2xl mb-4">Prazos de Renovação em Diadema</h4>
              <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                <li>• Indústrias químicas e farmacêuticas: 60 a 120 dias</li>
                <li>• Galpões e comércio: 30 a 60 dias</li>
                <li>• Urgente (AVCB vencido): início em 48h</li>
              </ul>
              <p className="text-xs uppercase tracking-widest opacity-80">Diagnóstico e orçamento gratuitos — sem compromisso.</p>
            </div>
            <a href={whatsappLink} className="bg-white text-red-600 px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Renovar Agora</a>
          </div>
        </div>
      </section>

      <SocialProof
        testimonial={{
          text: "Nossa planta de cosméticos em Diadema estava com AVCB vencido — risco de perder auditoria do cliente principal. A DRD2 agiu com urgência, conduziu tudo com competência técnica e entregou o AVCB renovado antes do prazo da auditoria.",
          author: "Cliente DRD2 Engenharia",
          role: "Gerente de Qualidade — Diadema, SP",
        }}
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">
            Perguntas Frequentes: <span className="text-red-600">Renovação AVCB Diadema</span>
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <details key={i} className="group bg-white rounded-[2rem] p-8 border border-slate-100 open:shadow-2xl transition-all cursor-pointer">
                <summary className="text-xl font-extrabold text-slate-900 list-none flex justify-between items-center pr-4 leading-tight">
                  {faq.question}
                  <span className="text-red-600 text-3xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-6 text-slate-600 leading-relaxed font-bold border-t border-slate-100 pt-6">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Map className="w-12 h-12 text-red-900 mx-auto mb-6" />
          <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Atendemos Todo o ABC Paulista</h3>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto">Além de Diadema, renovamos AVCB em Santo André, São Bernardo, São Caetano, Mauá e todo o ABC Paulista.</p>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Renove o AVCB em Diadema Hoje</h3>
              <p className="text-slate-400 font-medium italic text-sm">Diagnóstico técnico gratuito. Processo iniciado em 48h.</p>
            </div>
            <a href={whatsappLink} target="_blank" className="bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-[#1EBE5A] transition-all uppercase tracking-widest text-xs whitespace-nowrap">
              Diagnóstico Grátis Agora
            </a>
          </div>
        </div>
      </section>

      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">AVCB vencido em Diadema é risco duplo: CBPMESP e CETESB.</p>
          <p className="text-white text-sm font-bold mb-8">Não deixe para depois — regularize sua indústria antes da próxima fiscalização.</p>
          <CtaWhatsApp label="Falar com engenheiro e renovar agora" occupationType="renovacao AVCB Diadema" variant="primary" size="lg" centered />
        </div>
      </div>

      <InternalLinksBlock currentSlug={_slug} mode="bairro" maxLinks={6} titulo="Renovação de AVCB em Diadema e ABC Paulista" />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/renovacao-avcb-diadema" />
      <ServiceBlogLinks currentSlug="/renovacao-avcb-diadema" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={_slug} />
    </>
  );
}
