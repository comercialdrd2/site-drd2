import Image from "next/image";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { CheckCircle, FileText, ShieldCheck, Droplets, Activity, Search } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

const _pageTitle = "Sistema de Sprinklers em São Paulo 2026 | DRD2 Engenharia — IT 23/25";
const _pageDesc = "A DRD2 Engenharia projeta e instala sistemas de sprinklers (chuveiros automáticos) em SP conforme IT 23/25 e NBR 10897. Cálculo hidráulico com ART inclusa para o AVCB. Diagnóstico técnico gratuito.";

export const metadata = {
  title: "Sistema de Sprinklers em São Paulo 2026 | DRD2 Engenharia — IT 23/25",
  description: "A DRD2 Engenharia projeta e instala sistemas de sprinklers (chuveiros automáticos) em SP conforme IT 23/25 e NBR 10897. Cálculo hidráulico com ART inclusa para o AVCB. Diagnóstico técnico gratuito.",
  alternates: {
    canonical: "/sprinklers",
  },
};

const faqs = [
  {
    q: "O que são Sprinklers e como funcionam?",
    a: "Sprinklers são chuveiros automáticos que possuem um componente termossensível (bulbo) que se rompe em uma determinada temperatura, liberando a água para combater o fogo em seu estágio inicial.",
  },
  {
    q: "É verdade que todos os sprinklers abrem ao mesmo tempo?",
    a: "Não. Esse é um mito do cinema. Em sistemas reais, apenas os bicos que atingem a temperatura de acionamento (próximos ao fogo) são abertos, evitando danos excessivos por água em áreas não atingidas.",
  },
  {
    q: "Qual a norma técnica para instalação de sprinklers em SP?",
    a: "Seguimos rigorosamente a Instrução Técnica IT 23 do Corpo de Bombeiros de SP e a norma ABNT NBR 10897, além de padrões internacionais como a NFPA 13 quando solicitado.",
  },
  {
    q: "O sistema de sprinkler precisa de bomba de incêndio?",
    a: "Sim, na maioria das vezes é necessária uma bomba dedicada para garantir a pressão e vazão corretas em todos os bicos do sistema, conforme dimensionado no cálculo hidráulico.",
  },
  {
    q: "Posso pintar os bicos de sprinkler para combinar com o teto?",
    a: "Nunca. A pintura obstrui o acionamento do bico e é motivo de reprovação imediata no AVCB. Se desejar uma cor específica, deve-se adquirir bicos que já venham de fábrica na cor desejada.",
  },
];

export default function SprinklersPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/sprinklers",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "Projeto e Instalação de Sistema de Sprinklers em São Paulo",
        faqs: faqs.map(f => ({ question: f.q, answer: f.a })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Sistema de Sprinklers", item: "/sprinklers" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-sprinklers.webp"
          alt="Sistema de Sprinklers em São Paulo — DRD2 Engenharia"
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
              Proteção Ativa 24/7 — São Paulo 2026
            </span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60 not-italic">
                SISTEMA DE SPRINKLERS (CHUVEIRO AUTOMÁTICO)
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">
                EM SÃO PAULO — PROJETO E INSTALAÇÃO
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Projetamos e instalamos sua rede de chuveiros automáticos conforme IT 23/25 e NBR 10897 para total conformidade com o AVCB. Cálculo hidráulico com laudo técnico e ART inclusa.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-5 h-5 flex-shrink-0" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              <span>SOLICITAR ORÇAMENTO GRATUITO</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Sistema de Sprinklers" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── POR QUE OS SPRINKLERS SÃO INDISPENSÁVEIS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-4 border-primary pl-6 uppercase italic tracking-tight">
            Por que o sistema de sprinklers exige engenharia especializada?
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
            <p>
              O <strong>sistema de sprinklers</strong> é obrigatório em edificações de grande porte ou alto risco em São Paulo. Uma falha no cálculo hidráulico ou um bico mal posicionado invalida todo o seu AVCB e, pior, coloca o patrimônio em risco total durante um incêndio.
            </p>
            <p>
              Diferente de instaladores comuns, a DRD2 Engenharia dimensiona cada bico com software especializado, garantindo vazão e pressão em 100% da rede. Verificamos a pressão da rede pública, o estado das bombas e a integridade das válvulas antes de qualquer intervenção.
            </p>
            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-primary text-red-900 font-medium italic">
              Garantimos conformidade total com a <strong>IT 23/25 do CBPMESP</strong> e a <strong>NBR 10897</strong>: desde o diagnóstico de fluxo até a emissão da ART para aprovação no AVCB.
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUÇÕES ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tight">
            Nossas Soluções em Chuveiros Automáticos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, title: "Diagnóstico de Fluxo", desc: "Analisamos a pressão da rede pública e o estado das bombas antes de qualquer projeto ou instalação." },
              { icon: Activity, title: "Cálculo Hidráulico", desc: "Dimensionamento rigoroso via software para garantir vazão em 100% dos bicos da rede durante o sinistro." },
              { icon: FileText, title: "Instalação e Retrofits", desc: "Instalação de redes novas, retrofit de VGA (Válvula de Governo e Alarme) e substituição de bicos vencidos." },
              { icon: ShieldCheck, title: "Manutenção e ART", desc: "Teste semestral de fluxo e estanqueidade, manutenção de bombas dedicadas e emissão de ART para o AVCB." },
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
            Como funciona o <span className="text-primary not-italic">Projeto de Sprinklers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", t: "Diagnóstico de Pressão", d: "Medimos a pressão disponível na rede pública e avaliamos o estado das bombas e reservatório existentes." },
              { id: "02", t: "Cálculo Hidráulico", d: "Dimensionamos bicos, ramais e tubulações via software para garantir acionamento correto no foco do incêndio." },
              { id: "03", t: "Instalação da Rede", d: "Montagem de tubulações, bicos pendentes ou ocultos, Válvula de Governo e Alarme (VGA) e bomba dedicada." },
              { id: "04", t: "Teste de Estanqueidade", d: "Realizamos teste hidrostático em toda a rede e verificação de todos os bicos para garantir prontidão 24/7." },
              { id: "05", t: "Emissão de Laudo e ART", d: "Laudo técnico completo com fotos e resultados dos testes, acompanhado da ART para o AVCB." },
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

      {/* ── O QUE ENTREGAMOS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-4 border-primary pl-6 uppercase italic tracking-tight">
            O que a DRD2 entrega em sua rede SPK
          </h2>
          <div className="space-y-3">
            {[
              "Manutenção de Bombas de Incêndio Dedicadas",
              "Retrofit de VGA (Válvula de Governo e Alarme)",
              "Substituição de Bicos Vencidos ou Obstruídos",
              "Teste Semestral de Fluxo e Estanqueidade",
              "Emissão de ART para Renovação de AVCB",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-primary/20 transition-all">
                <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tight">
            Por que contratar a DRD2 para o seu SPK?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "IT 23/25 e NBR 10897", desc: "Projetos que seguem rigorosamente as normas do CBPMESP para garantir aprovação sem 'comunique-se'." },
              { title: "Cálculo Hidráulico por Software", desc: "Dimensionamento preciso de cada bico para garantir vazão e pressão em 100% da rede durante um sinistro." },
              { title: "Laudo e ART para o AVCB", desc: "Documentação técnica completa assinada por engenheiro para aprovação imediata na vistoria do Corpo de Bombeiros." },
            ].map((item, i) => (
              <div key={i} className="text-center p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all">
                <Droplets className="w-16 h-16 text-primary mx-auto mb-6" />
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
            Perguntas Frequentes — <span className="text-primary italic">Sprinklers SP</span>
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
            Sua rede SPK está <span className="text-slate-950 not-italic">em conformidade?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-bold opacity-95 max-w-4xl mx-auto border-b border-white/20 pb-10 italic leading-relaxed">
            Nossa engenharia garante que cada bico funcione no momento crítico, com cálculo hidráulico e ART para o AVCB.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-slate-950 text-white text-xl font-black px-10 py-6 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-tighter gap-4 items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-7 h-7" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg> Solicitar Projeto de Sprinklers
          </a>
          <p className="mt-12 text-sm font-black uppercase tracking-[0.3em] opacity-80 italic">Atendemos toda a Grande São Paulo e Interior</p>
        </div>
      </section>


      <ServiceClusterLinks currentSlug="/sprinklers" />
      <ServiceBlogLinks currentSlug="/sprinklers" />

      <NeighborhoodSilo currentSlug="/sprinklers" />
    </>
  );
}
