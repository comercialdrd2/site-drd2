import Image from "next/image";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { CheckCircle, FileText, ShieldCheck, Phone, Zap, Ruler } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

const _pageTitle = "SPDA (Para-raios) em São Paulo 2026 | DRD2 Engenharia — Projeto e Laudo";
const _pageDesc = "A DRD2 Engenharia projeta, instala e laudia SPDA (Para-raios) em São Paulo conforme NBR 5419. Medição ôhmica com ART inclusa para aprovação no AVCB. Diagnóstico técnico gratuito.";

export const metadata = {
  title: "SPDA (Para-raios) em São Paulo 2026 | DRD2 Engenharia — Projeto e Laudo",
  description: "A DRD2 Engenharia projeta, instala e laudia SPDA (Para-raios) em São Paulo conforme NBR 5419. Medição ôhmica com ART inclusa para aprovação no AVCB. Diagnóstico técnico gratuito.",
  alternates: {
    canonical: "/spda",
  },
};

const faqs = [
  {
    q: "O que é o SPDA e qual sua função?",
    a: "SPDA significa Sistema de Proteção contra Descargas Atmosféricas. Sua função é encaminhar a energia de um raio com segurança para a terra, protegendo a estrutura da edificação e a vida das pessoas em seu interior.",
  },
  {
    q: "O laudo de SPDA é obrigatório para o AVCB?",
    a: "Sim. O Corpo de Bombeiros exige o laudo técnico do SPDA acompanhado da ART para comprovar que o sistema está em conformidade com a norma NBR 5419 e funcionando corretamente.",
  },
  {
    q: "Com que frequência devo fazer a medição e o laudo?",
    a: "A norma exige uma inspeção visual anual e uma medição completa da resistência de aterramento (medição ôhmica) a cada 1 ou 3 anos, dependendo do tipo de ocupação e risco da edificação.",
  },
  {
    q: "Quais são os principais componentes do para-raios?",
    a: "O sistema é composto por captores (Franklin ou Faraday), condutores de descida, malha de aterramento e dispositivos de proteção contra surtos (DPS) para proteger equipamentos eletrônicos.",
  },
  {
    q: "A DRD2 realiza a instalação ou apenas o laudo?",
    a: "Realizamos o serviço completo: projeto técnico, instalação de toda a infraestrutura física, manutenção corretiva e a emissão do laudo técnico com medição ôhmica.",
  },
];

export default function SpdaPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/spda",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "Projeto, Instalação e Laudo de SPDA em São Paulo",
        faqs: faqs.map(f => ({ question: f.q, answer: f.a })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "SPDA Para-raios", item: "/spda" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-spda.jpg"
          alt="SPDA Para-raios em São Paulo — DRD2 Engenharia"
          fill
          className="object-cover object-center opacity-30 grayscale-[30%]"
          priority
          sizes="100vw"
          quality={65}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              Proteção Atmosférica — São Paulo 2026
            </span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60 not-italic">
                SPDA — PROTEÇÃO CONTRA DESCARGAS ATMOSFÉRICAS
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">
                EM SÃO PAULO — PROJETO, INSTALAÇÃO E LAUDO
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Projetamos e certificamos seu SPDA conforme a NBR 5419 para total conformidade com o AVCB. Medição ôhmica com laudo técnico e ART inclusa.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>SOLICITAR ORÇAMENTO GRATUITO</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "SPDA Para-raios" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── POR QUE O SPDA É INDISPENSÁVEL ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-4 border-primary pl-6 uppercase italic tracking-tight">
            Por que um SPDA profissional é indispensável em SP?
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
            <p>
              São Paulo está em uma das regiões com maior incidência de raios do mundo. O <strong>SPDA (Para-raios)</strong> não é apenas uma exigência do <strong>AVCB</strong>, mas um seguro para a estrutura da sua edificação e para os equipamentos eletrônicos de alto valor.
            </p>
            <p>
              Um sistema com malha de aterramento ineficiente ou descidas rompidas pode causar incêndios elétricos e morte por choque em caso de descarga. Na DRD2, utilizamos terrômetros calibrados para garantir que sua proteção seja real e não apenas no papel.
            </p>
            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-primary text-red-900 font-medium italic">
              Garantimos conformidade total com a <strong>NBR 5419:2015</strong> em todas as suas vertentes: proteção externa, proteção interna (DPS) e análise de risco.
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUÇÕES ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tight">
            Nossas Soluções em Proteção Atmosférica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "Projeto de SPDA", desc: "Projetos completos com cálculo de análise de risco e dimensionamento de malhas e captores." },
              { icon: Zap, title: "Instalação e Manutenção", desc: "Malhas de aterramento, para-raios tipo Franklin ou Gaiola de Faraday e instalação de DPS." },
              { icon: Ruler, title: "Medição Ôhmica e Laudo", desc: "Testes de continuidade e medição de resistência de aterramento com laudo e ART." },
              { icon: ShieldCheck, title: "Adequação Normativa", desc: "Reforma de sistemas antigos para enquadramento na NBR 5419:2015 exigida pelos Bombeiros." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2 uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSO DRD2 ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic tracking-tighter">
            Como funciona o <span className="text-primary not-italic">Laudo e Instalação de SPDA</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", t: "Inspeção Visual e Física", d: "Avaliamos captores, condutores de descida e a integridade da malha de aterramento no topo da edificação." },
              { id: "02", t: "Medição Ôhmica", d: "Terrômetros calibrados medem a resistência de aterramento para garantir dissipação segura da descarga." },
              { id: "03", t: "Proteção Interna (DPS)", d: "Verificamos e projetamos Dispositivos de Proteção contra Surtos nos painéis elétricos." },
              { id: "04", t: "Saneamento de Pendências", d: "Realizamos correções físicas para enquadramento na NBR 5419:2015 em sua totalidade." },
              { id: "05", t: "Emissão de Laudo e ART", d: "Laudo técnico completo com fotos e resultados das medições, acompanhado da ART para o AVCB." },
            ].map((step, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 group hover:bg-primary transition-all text-left">
                <div className="text-primary font-black text-xs mb-4 group-hover:text-white">{step.id}</div>
                <h4 className="font-black italic uppercase mb-4 leading-tight">{step.t}</h4>
                <p className="text-sm text-slate-400 group-hover:text-white leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tight">
            Por que contratar a DRD2 para o seu SPDA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "NBR 5419:2015 Completa", desc: "Cobrimos todas as vertentes da norma: proteção externa, interna (DPS) e análise de risco." },
              { title: "Medição com Terrômetro Calibrado", desc: "Garantimos que a proteção seja real — não apenas documental — com medições rastreáveis." },
              { title: "Laudo e ART para o AVCB", desc: "Entregamos toda a documentação exigida pelo Corpo de Bombeiros para aprovação imediata." },
            ].map((item, i) => (
              <div key={i} className="text-center p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter italic">
            Perguntas Frequentes — <span className="text-primary italic">SPDA Para-raios SP</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 cursor-pointer open:bg-white open:ring-4 open:ring-primary/10 transition-all">
                <summary className="flex items-center justify-between font-black text-slate-900 text-lg select-none uppercase italic tracking-tight">
                  {faq.q}
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4">+</span>
                </summary>
                <p className="mt-6 text-slate-600 font-medium leading-relaxed border-t border-slate-200 pt-6 italic">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter mb-2">
              Diagnóstico <span className="text-primary">Gratuito</span>
            </h2>
            <p className="text-slate-500 font-medium">Preencha e um engenheiro entra em contato em até 24h.</p>
          </div>
          <LeadForm variant="compact" showWrapper={false} />
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight italic">
            Seu Para-raios está <span className="text-slate-950 not-italic">em conformidade?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-bold opacity-95 max-w-4xl mx-auto border-b border-white/20 pb-10 italic leading-relaxed">
            Nossa engenharia certifica sua segurança contra descargas atmosféricas com precisão técnica e ART para o AVCB.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-slate-950 text-white text-xl font-black px-10 py-6 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-tighter gap-4 items-center"
          >
            <Phone className="w-7 h-7" /> Solicitar Laudo de SPDA
          </a>
          <p className="mt-12 text-sm font-black uppercase tracking-[0.3em] opacity-80 italic">Atendemos toda a Grande São Paulo e Interior</p>
        </div>
      </section>


      <ServiceClusterLinks currentSlug="/spda" />
      <ServiceBlogLinks currentSlug="/spda" />

      <NeighborhoodSilo currentSlug="/spda" />
    </>
  );
}
