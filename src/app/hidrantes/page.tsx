import Image from "next/image";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { CheckCircle, FileText, ShieldCheck, Phone, Waves, Beaker } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

const _pageTitle = "Rede de Hidrantes em São Paulo 2026 | DRD2 Engenharia — Projeto e Instalação";
const _pageDesc = "A DRD2 Engenharia projeta, instala e certifica sua rede de hidrantes e mangotinhos em São Paulo conforme IT 22/25. Teste hidrostático com ART inclusa para o AVCB. Diagnóstico técnico gratuito.";

export const metadata = {
  title: "Rede de Hidrantes em São Paulo 2026 | DRD2 Engenharia — Projeto e Instalação",
  description: "A DRD2 Engenharia projeta, instala e certifica sua rede de hidrantes e mangotinhos em São Paulo conforme IT 22/25. Teste hidrostático com ART inclusa para o AVCB. Diagnóstico técnico gratuito.",
  alternates: {
    canonical: "/hidrantes",
  },
};

const faqs = [
  {
    q: "O que é uma rede de hidrantes e para que serve?",
    a: "É um sistema fixo de combate a incêndio composto por reservatório de água, bombas, tubulações e abrigos com mangueiras e esguichos, destinado ao combate direto do fogo por ocupantes treinados ou bombeiros.",
  },
  {
    q: "Qual a diferença entre Hidrante e Mangotinho?",
    a: "O hidrante utiliza mangueiras de maior diâmetro (geralmente 1 1/2\") que precisam ser totalmente esticadas para uso. O mangotinho usa uma mangueira semi-rígida de menor diâmetro que permite o combate imediato mesmo sem desenrolar toda a extensão.",
  },
  {
    q: "Com que frequência devo fazer o teste das mangueiras?",
    a: "A norma exige o teste hidrostático das mangueiras de incêndio anualmente, para garantir que não haja vazamentos ou rupturas sob pressão no momento do uso.",
  },
  {
    q: "Minha edificação é obrigada a ter hidrantes?",
    a: "Geralmente, edificações com área construída superior a 750m² ou altura superior a 12 metros são obrigadas a possuir o sistema, variando conforme a ocupação e carga de incêndio (IT 22/25).",
  },
  {
    q: "A DRD2 realiza a manutenção de bombas de incêndio?",
    a: "Sim. Realizamos a manutenção preventiva e corretiva em conjuntos motobombas, garantindo que o sistema pressurize corretamente em caso de abertura de qualquer ponto de hidrante.",
  },
];

export default function HidrantesPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/hidrantes",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "Projeto e Instalação de Rede de Hidrantes e Mangotinhos em São Paulo",
        faqs: faqs.map(f => ({ question: f.q, answer: f.a })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Rede de Hidrantes", item: "/hidrantes" },
        ],
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="/images/page-hidrantes.jpg"
          alt="Rede de Hidrantes e Mangotinhos em São Paulo — DRD2 Engenharia"
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
              Combate Direto — São Paulo 2026
            </span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60 not-italic">
                REDE DE HIDRANTES E MANGOTINHOS
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">
                EM SÃO PAULO — PROJETO E INSTALAÇÃO
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Projetamos e certificamos sua rede de hidrantes conforme a IT 22/25 para total conformidade com o AVCB. Teste hidrostático com laudo técnico e ART inclusa.
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
          { label: "Rede de Hidrantes" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── POR QUE É INDISPENSÁVEL ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-l-4 border-primary pl-6 uppercase italic tracking-tight">
            A importância de uma rede de hidrantes confiável em SP
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
            <p>
              A <strong>Rede de Hidrantes</strong> é o braço forte do combate ao fogo em qualquer edificação de médio e grande porte. Diferente dos extintores, ela oferece uma reserva de água contínua e pressurizada para conter incêndios antes da chegada do corpo de bombeiros.
            </p>
            <p>
              Um sistema negligenciado — com mangueiras vencidas, bombas travadas ou tubulações corroídas — é uma falha crítica que impede a obtenção do <strong>AVCB</strong> e coloca vidas em risco real. Na DRD2 Engenharia, cuidamos de cada detalhe: do cálculo de perda de carga nas tubulações até o teste de ponta (vazão e pressão) no bico mais desfavorecido da rede.
            </p>
            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-primary text-red-900 font-medium italic">
              Garantimos conformidade total com a <strong>IT 22/25 do CBPMESP</strong>: dimensionamento hidráulico, instalação, teste hidrostático e emissão de ART para aprovação no AVCB.
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUÇÕES ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tight">
            Nossas Soluções em Hidrantes e Mangotinhos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Waves, title: "Projeto e Dimensionamento", desc: "Cálculo hidráulico de bombas e reservatórios conforme IT 22/25 para garantir pressão em todos os andares." },
              { icon: FileText, title: "Instalação de Redes", desc: "Montagem de tubulações ranhuradas ou soldadas, abrigos de mangueiras, hidrantes de recalque e mangotinhos." },
              { icon: Beaker, title: "Teste Hidrostático", desc: "Teste obrigatório anual em 100% das mangueiras da edificação com emissão de laudo técnico e ART." },
              { icon: ShieldCheck, title: "Manutenção de Bombas", desc: "Inspeção e teste de acionamento automático de motobombas de incêndio para pronta resposta ao sinistro." },
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
            Como funciona a <span className="text-primary not-italic">Instalação de Hidrantes</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", t: "Cálculo Hidráulico", d: "Dimensionamos as bombas e o diâmetro das tubulações para garantir que a água chegue com vazão e pressão em cada hidrante da edificação." },
              { id: "02", t: "Execução da Rede", d: "Instalamos tubulações ranhuradas (Grooved) ou soldadas, abrigos de mangueiras, mangotinhos e o registro de recalque na calçada." },
              { id: "03", t: "Casa de Bombas", d: "Montagem do conjunto motobomba de incêndio e do painel de comando elétrico para acionamento automático de emergência." },
              { id: "04", t: "Teste de Estanqueidade", d: "Realizamos testes de pressão em toda a rede e o teste hidrostático individual em cada mangueira da edificação." },
              { id: "05", t: "Emissão de ART e Laudo", d: "Entregamos a documentação técnica assinada por engenheiro para que o vistoriador do AVCB aprove o sistema na primeira análise." },
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
            Por que contratar a DRD2 para sua Rede de Hidrantes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "IT 22/25 Completa", desc: "Projetos dimensionados conforme a Instrução Técnica do CBPMESP, garantindo aprovação na primeira vistoria." },
              { title: "Cálculo Hidráulico Preciso", desc: "Dimensionamos bombas, reservatórios e tubulações para garantir vazão e pressão em cada ponto de hidrante." },
              { title: "Laudo e ART para o AVCB", desc: "Entregamos toda a documentação técnica exigida pelo Corpo de Bombeiros para aprovação imediata no AVCB." },
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
            Perguntas Frequentes — <span className="text-primary italic">Hidrantes SP</span>
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
            Sua rede de hidrantes está <span className="text-slate-950 not-italic">em conformidade?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-bold opacity-95 max-w-4xl mx-auto border-b border-white/20 pb-10 italic leading-relaxed">
            Nossa engenharia garante que seu sistema funcione perfeitamente no momento crítico, com ART e laudo para o AVCB.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-slate-950 text-white text-xl font-black px-10 py-6 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-tighter gap-4 items-center"
          >
            <Phone className="w-7 h-7" /> Solicitar Projeto de Hidrantes
          </a>
          <p className="mt-12 text-sm font-black uppercase tracking-[0.3em] opacity-80 italic">Atendemos toda a Grande São Paulo e Interior</p>
        </div>
      </section>


      <ServiceClusterLinks currentSlug="/hidrantes" />
      <ServiceBlogLinks currentSlug="/hidrantes" />

      <NeighborhoodSilo currentSlug="/hidrantes" />
    </>
  );
}
