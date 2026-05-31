import Image from "next/image";
import Link from "next/link";
import {
  Phone, CheckCircle, History, Building, ArrowRight,
  MapPin, Users, ShieldCheck, Flame, CookingPot,
  LayoutGrid, Cake, Sparkles, PartyPopper,
  CheckCircle2,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { servicesData } from "@/data/services";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import LeadForm from "@/components/LeadForm";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";

const _pageTitle = "AVCB para Salão de Festas em São Paulo 2026 | DRD2 Engenharia";
const _pageDesc = "Salão de festas sem AVCB em SP arrisca interdição durante o evento com convidados dentro. Grupo F-4, supressão em coifa, lotação e brigada. DRD2 Engenharia regulariza.";

export const metadata = {
  title: "AVCB para Salão de Festas em São Paulo 2026 | DRD2 Engenharia",
  description:
    "Salão de festas sem AVCB em SP arrisca interdição durante o evento com convidados dentro. Grupo F-4, supressão em coifa, lotação e brigada. DRD2 Engenharia regulariza.",
  alternates: {
    canonical: "/avcb-salao-de-festas-sao-paulo",
  },
};

export default function AVCBSalaoFestasPage() {
  const service = servicesData["avcb-salao-de-festas-sao-paulo"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/avcb-salao-de-festas-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "AVCB Salão de Festas e Eventos SP",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB Salão de Festas SP", item: "/avcb-salao-de-festas-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/hero-salao-festas-oficial.jpg"
          alt="Salão de festas luxuoso em São Paulo com sistemas de segurança contra incêndio"
          fill
          className="object-cover object-center opacity-40 grayscale-[20%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              Grupo F-4 — Salões e Eventos — Regularização 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">AVCB PARA</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                SALÃO DE FESTAS EM SP
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-3 leading-relaxed font-medium max-w-2xl">
              Regularização completa para <strong className="text-red-500">Espaços de Eventos</strong> e Buffets. Segurança normativa para garantir que sua festa não seja interrompida.
            </p>
            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed font-medium max-w-2xl">
              O Corpo de Bombeiros realiza <strong className="text-red-400">fiscalizações surpresa durante eventos</strong>. Sem AVCB válido, seu salão está sujeito a interdição imediata — com os convidados dentro.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href={whatsappLink}
                target="_blank"
                className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366]"
              >
                <Phone className="w-6 h-6" /> Agendar Diagnóstico técnico gratuito
              </a>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "AVCB Salão de Festas SP" },
        ]}
      />

      <TrustBar />

      {/* ── INTRODUÇÃO ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">
                Regularização Completa: <span className="text-red-600 not-italic">Segurança para Grandes Lotações</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Salões de festas e espaços de eventos são locais de reunião de público com características específicas de risco: grande concentração de pessoas em eventos pontuais, decorações inflamáveis e serviço de buffet com GLP.
                </p>
                <p>
                  Esse perfil coloca os salões de festas sob fiscalização rigorosa do Corpo de Bombeiros — especialmente em datas comemorativas quando a lotação máxima é frequentemente ultrapassada. A <strong>DRD2 Engenharia</strong> conhece cada exigência técnica para esse segmento e entrega o AVCB com precisão normativa e agilidade.
                </p>
                <p className="text-slate-900 font-bold border-l-4 border-red-600 pl-6 italic">
                  O AVCB é obrigatório para o funcionamento legal do espaço. Sem ele, o estabelecimento está sujeito a interdição imediata durante o evento.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-red-50 p-8 rounded-[2.5rem] border border-red-100 shadow-xl">
              <h4 className="text-red-600 font-black text-xs uppercase tracking-widest mb-4 italic text-center">Espaços que Atendemos:</h4>
              <ul className="space-y-4">
                {[
                  { t: "Buffets Infantis", i: <Cake className="w-4 h-4 text-red-600" /> },
                  { t: "Casas de Casamento", i: <Sparkles className="w-4 h-4 text-red-600" /> },
                  { t: "Espaços Corporativos", i: <Building className="w-4 h-4 text-red-600" /> },
                  { t: "Salões de Condomínio", i: <LayoutGrid className="w-4 h-4 text-red-600" /> },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-red-100 shadow-sm">
                    {item.i}
                    <span className="text-slate-900 font-black text-[10px] uppercase tracking-tight">{item.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUEM PRECISA ── */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
              Quem <span className="text-red-600 not-italic">Precisa de AVCB?</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Todo espaço de reunião de público em São Paulo está obrigado pelo Decreto Estadual nº 69.118/2024.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { t: "Buffets e Casas de Festas", i: <Cake className="w-8 h-8 text-red-600 mb-3" /> },
              { t: "Casas de Casamento", i: <Sparkles className="w-8 h-8 text-red-600 mb-3" /> },
              { t: "Espaços Corporativos para Eventos", i: <Building className="w-8 h-8 text-red-600 mb-3" /> },
              { t: "Salões de Condomínio com Locação", i: <LayoutGrid className="w-8 h-8 text-red-600 mb-3" /> },
              { t: "Tendas e Estruturas Temporárias", i: <PartyPopper className="w-8 h-8 text-red-600 mb-3" /> },
              { t: "Espaços com Cozinha de Buffet", i: <CookingPot className="w-8 h-8 text-red-600 mb-3" /> },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col items-center text-center hover:bg-white/10 transition-all">
                {item.i}
                <span className="font-black uppercase tracking-tight text-sm">{item.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 ERROS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic text-slate-900">
              Os 3 Erros que <span className="text-red-600 not-italic">Reprovam seu Salão</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Pequenas falhas que geram interdições imediatas e multas pesadas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Decorações Inflamáveis",
                d: "Balões, tecidos e forros sem controle de reação ao fogo (IT-10). Bombeiros exigem certificação para decorações permanentes.",
                i: <Flame className="w-10 h-10 text-red-600 mb-4" />,
              },
              {
                t: "Ausência de Supressão",
                d: "Cozinhas de buffet sem sistema de supressão automática na coifa (NBR 14880). Reprovação imediata na vistoria.",
                i: <CookingPot className="w-10 h-10 text-red-600 mb-4" />,
              },
              {
                t: "Superlotação Ativa",
                d: "Operar acima da capacidade definida no AVCB. Fiscalizações surpresa em eventos resultam em evacuação e interdição.",
                i: <Users className="w-10 h-10 text-red-600 mb-4" />,
              },
            ].map((err, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-10 rounded-[3rem] hover:bg-slate-900 hover:text-white group transition-all duration-500">
                {err.i}
                <h3 className="text-xl font-black mb-4 uppercase italic tracking-tight group-hover:text-white">{err.t}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed group-hover:text-slate-300">{err.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA 1 ── */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter mb-3">
            Seu Salão Está <span className="text-red-600">Regularizado?</span>
          </h3>
          <p className="text-slate-500 font-medium mb-8">Solicite uma análise técnica gratuita e descubra se seu espaço precisa de AVCB ou CLCB.</p>
          <CtaWhatsApp
            label="Diagnóstico Técnico Gratuito"
            occupationType="salão de festas"
            centered
          />
        </div>
      </section>

      {/* ── SISTEMAS OBRIGATÓRIOS ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter uppercase italic leading-[0.9]">
                Sistemas <span className="text-red-600 not-italic">Obrigatórios</span> <br />
                para Salões de Festas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Saídas de Emergência (IT-08)",
                  "Iluminação de Emergência",
                  "Sinalização Fotoluminescente",
                  "Extintores (Inclusive Classe K)",
                  "Supressão em Coifas",
                  "Central de GLP Regularizada",
                  "Brigada de Incêndio (IT-17)",
                  "Controle de Lotação",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle className="text-red-600 w-5 h-5 flex-shrink-0" />
                    <span className="text-slate-700 font-black text-[10px] uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-12 rounded-[4rem] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-3xl" />
              <ShieldCheck className="w-16 h-16 text-red-600 mb-8" />
              <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tighter">Salão em Condomínio?</h3>
              <p className="text-slate-400 mb-8 font-medium leading-relaxed">
                O AVCB do condomínio cobre as áreas comuns, mas o salão de festas com locação externa ou lotação elevada frequentemente exige certificado individual para segurança do síndico.
              </p>
              <a href={whatsappLink} target="_blank" className="text-red-500 font-black uppercase tracking-widest text-xs flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Análise Técnica Gratuita <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUANTO CUSTA ── */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-slate-200 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic leading-[0.9]">
                  Quanto Custa o <span className="text-red-600">AVCB para Salão de Festas?</span>
                </h2>
                <p className="text-xl text-slate-600 mb-8 font-medium leading-relaxed">
                  O investimento depende da capacidade de lotação, presença de cozinha industrial e estado atual das rotas de fuga. Nosso objetivo é a regularização com o melhor custo-benefício.
                </p>
                <div className="space-y-6">
                  {[
                    { t: "Diagnóstico Técnico Gratuito", d: "Visitamos o espaço para identificar pendências reais." },
                    { t: "Enquadramento PTS/PT", d: "Definimos o caminho mais rápido perante o Bombeiro." },
                    { t: "Proposta Executiva", d: "Valores claros, sem surpresas e com garantia de emissão." },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="bg-red-600 text-white rounded-lg p-1 mt-1">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="font-black text-slate-900 uppercase italic text-sm">{item.t}</h5>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-950 p-12 rounded-[3.5rem] text-white text-center shadow-3xl border-8 border-red-600 relative z-10">
                <History className="w-16 h-16 text-red-600 mx-auto mb-8 animate-pulse" />
                <h3 className="text-3xl font-black mb-6 uppercase italic tracking-tighter">Proposta Técnica em até 2h</h3>
                <p className="text-slate-400 mb-10 font-bold leading-relaxed uppercase text-sm">
                  Nossa equipe enviará uma proposta técnica detalhada após análise do seu caso.
                  <span className="block text-red-500 mt-2 italic font-black">Diagnóstico técnico gratuito para toda SP.</span>
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="inline-block bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl hover:bg-[#1EBE5A] transition-all uppercase italic tracking-tighter w-full shadow-lg"
                >
                  <Phone className="w-6 h-6 inline mr-2" /> Falar com Especialista agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA 2 ── */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-3">
            Precisa de AVCB para seu Salão de Festas?
          </h3>
          <p className="text-red-100 font-medium mb-8">Fale agora com um engenheiro especialista em Grupo F-4 e eventos em SP.</p>
          <CtaWhatsApp
            label="Solicitar Diagnóstico técnico gratuito"
            occupationType="salão de festas"
            variant="secondary"
            centered
          />
        </div>
      </section>

      {/* ── METODOLOGIA DRD2 ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 leading-none uppercase italic tracking-tighter">
                O Caminho para seu <span className="text-red-600">Alvará de Eventos</span>
              </h2>
              <div className="space-y-6">
                {[
                  { t: "Diagnóstico Técnico", d: "Verificação de cozinhas, decorações e saídas de emergência." },
                  { t: "Projeto PPCI", d: "Desenvolvimento de plantas e memoriais no padrão CBPMESP." },
                  { t: "Acompanhamento Integral", d: "Respondemos exigências e acompanhamos a vistoria." },
                  { t: "Protocolo Digital", d: "Representação técnica até a emissão do certificado." },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-slate-950 text-red-600 rounded-full flex items-center justify-center font-black group-hover:bg-red-600 group-hover:text-white transition-all shrink-0 italic shadow-xl">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 uppercase italic tracking-tight">{step.t}</h5>
                      <p className="text-sm text-slate-500 font-bold leading-relaxed italic">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-950 p-12 rounded-[4rem] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/20 rounded-full blur-3xl" />
              <MapPin className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tighter">Eng. Lucas Rodrigues</h3>
              <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">
                Engenheiro responsável pela equipe de eventos e reunião de público. Especialista em IT-08, IT-17 e supressão em coifas para buffets e casas de casamento em SP.
              </p>
              <div className="border-t border-white/10 pt-6 mb-8">
                <span className="text-red-500 font-black text-xs uppercase tracking-widest">CREA-SP 5070163570</span>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                className="inline-block bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl hover:bg-[#1EBE5A] transition-all w-full text-center uppercase italic tracking-tighter"
              >
                <Phone className="w-5 h-5 inline mr-2" /> Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso buffet em menos de 60 dias. Processo sem burocracia, acompanhamento constante e AVCB emitido antes do evento de inauguração.",
          author: "Buffet Celebrations",
          role: "Proprietário — Vila Olímpia, SP",
        }}
      />

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Dúvidas Frequentes: <span className="text-red-600 font-black italic">AVCB Salão de Festas</span>
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all">
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight">
                  {faq.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="p-7 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-200 italic font-medium">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS INTERNOS ── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter text-center">
            Outros Segmentos que <span className="text-red-600">Atendemos</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "AVCB para Restaurante e Bar", href: "/avcb-restaurante-sao-paulo" },
              { label: "AVCB para Boate e Casa Noturna", href: "/avcb-casas-noturnas-boates-sao-paulo" },
              { label: "AVCB para Supermercado", href: "/avcb-supermercado-sao-paulo" },
              { label: "AVCB para Padaria", href: "/avcb-para-padaria-sao-paulo" },
              { label: "AVCB para Farmácia", href: "/avcb-farmacia-drogaria-sao-paulo" },
              { label: "AVCB para Academia", href: "/avcb-para-academia-sao-paulo" },
              { label: "AVCB para Condomínio", href: "/avcb-para-condominio-sao-paulo" },
              { label: "AVCB para Escola", href: "/avcb-para-escola-sao-paulo" },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="flex items-center gap-2 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-red-600 hover:bg-red-50 transition-all group"
              >
                <ArrowRight className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-slate-700 font-black text-[10px] uppercase tracking-wide group-hover:text-red-700">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA 3 ── */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter mb-3">
            Não Espere a Fiscalização Chegar no seu Evento
          </h3>
          <p className="text-slate-500 font-medium mb-8">Regularize seu salão de festas antes do próximo evento. Diagnóstico técnico gratuito em toda SP.</p>
          <CtaWhatsApp
            label="Quero Regularizar Meu Salão"
            occupationType="salão de festas"
            centered
          />
        </div>
      </section>

      
      <OccupationAuthorityBlock
        occupation="Salao De Festas"
        currentSlug="/avcb-salao-de-festas-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Salao De Festas"
        currentSlug="/avcb-salao-de-festas-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/avcb-para-condominio-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Salões de Festas em SP"
      />

      <ServiceClusterLinks currentSlug="/avcb-salao-de-festas-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-salao-de-festas-sao-paulo" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-salao-de-festas-sao-paulo" />


      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Salao De Festas São Paulo</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Salao De Festas São Paulo precisa dos seguintes documentos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Planta baixa aprovada pela Prefeitura ou levantamento arquitetonico atualizado",
              "IPTU do exercicio atual com área total averbada e uso declarado",
              "Memorial descritivo da ocupação e destinacao de uso do imóvel",
              "Laudo de instalacoes elétricas com ART registrada no CREA-SP",
              "Laudo de para-raios (SPDA) para edificios acima de 5 pavimentos",
              "ART do engenheiro responsavel pelo projeto de prevencao de incêndio",
              "Matricula atualizada do imóvel no Cartorio de Registro de Imóveis",
              "CNPJ ou CPF do responsavel legal pelo estabelecimento",
            ].map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-2xl text-red-900 font-bold text-sm">
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Salao De Festas São Paulo. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      <LeadForm />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-slate-950 text-center relative overflow-hidden text-white border-t-8 border-red-600">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Não arrisque uma <span className="text-red-600 not-italic font-black italic underline decoration-white">Interdição durante a festa.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium italic">
            Regularize seu salão com eficiência e sem retrabalho. Proteja seus convidados e seu patrimônio com engenharia especializada.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-[#1EBE5A] transition-all border-2 border-[#25D366]"
          >
            <Phone className="w-8 h-8 inline mr-2" /> Solicitar Diagnóstico Agora
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-500 opacity-80">Especialistas em Reunião de Público | São Paulo e Grande SP</p>
        </div>
      </section>
    </>
  );
}
