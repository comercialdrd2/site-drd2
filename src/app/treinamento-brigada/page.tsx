import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import Link from "next/link";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { CheckCircle, Clock, FileText, ShieldCheck, Phone, Users, GraduationCap } from "lucide-react";
import StatCounter from "@/components/StatCounter";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";

const _pageTitle = "Treinamento de Brigada de Incêndio em SP conforme IT 17 | DRD2 Engenharia";
const _pageDesc = "Formação e reciclagem de Brigada de Incêndio em São Paulo conforme IT 17/25. Treinamento prático, teórico e certificação para AVCB. Solicite orçamento.";

export const metadata = {
  title: "Treinamento de Brigada de Incêndio em SP conforme IT 17 | DRD2 Engenharia",
  description: "Formação e reciclagem de Brigada de Incêndio em São Paulo conforme IT 17/25. Treinamento prático, teórico e certificação para AVCB. Solicite orçamento.",
  alternates: {
    canonical: "/treinamento-brigada",
  },
};

const faqs = [
  {
    q: "Qual a validade do treinamento de brigada de incêndio?",
    a: "O treinamento tem validade de 12 meses (1 ano). Após esse período, é necessário realizar a reciclagem conforme determina a Instrução Técnica 17 do Corpo de Bombeiros.",
  },
  {
    q: "Quantas pessoas precisam fazer parte da brigada no meu prédio?",
    a: "O número de brigadistas é calculado com base na população fixa de cada setor, tipo de ocupação e grau de risco da edificação, seguindo as tabelas da IT 17.",
  },
  {
    q: "O treinamento da DRD2 é aceito pelo Corpo de Bombeiros?",
    a: "Sim. Nossos treinamentos seguem integralmente a IT 17/25 e emitimos o Atestado de Brigada com ART, necessário para o upload no sistema Via Fácil e obtenção do AVCB.",
  },
  {
    q: "O treinamento pode ser realizado no local da minha empresa?",
    a: "Sim, realizamos treinamentos in loco para maior comodidade da sua equipe, além de podermos utilizar os próprios equipamentos de combate da edificação para familiarização dos brigadistas.",
  },
  {
    q: "O que acontece se eu não tiver a brigada treinada?",
    a: "Além de não conseguir emitir ou renovar o AVCB, o responsável pela edificação (síndico ou proprietário) pode ser responsabilizado civil e criminalmente em caso de sinistro com vítimas.",
  },
];

export default function BrigadaPage() {
        const _schema = generateMasterSchema({
        slug: "/treinamento-brigada",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "Treinamento de Brigada de Incêndio",
        faqs: faqs.map(f => ({
          question: f.q,
          answer: f.a
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Treinamento de Brigada", item: "/treinamento-brigada" }
        ]
      });

  return (
          <>
                        <JsonLD schema={_schema} />

      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[480px] flex items-center">
        <Image
          src="/images/page-treinamento-brigada-v3.webp"
          alt="Treinamento de Brigada de Incêndio em São Paulo - DRD2 Engenharia"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0D121F]/85" />
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl py-20">
          <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Capacitação e Segurança
          </span>
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight drop-shadow-lg text-white">
            Treinamento de Brigada de Incêndio em São Paulo
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            Formação teórica e prática conforme a IT 17/25. Prepare sua equipe para agir com rapidez e garanta a regularidade do seu AVCB.
          </p>
          <div className="flex flex-col items-center justify-center">
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-bold shadow-lg hover:bg-[#1EBE5A] transition"
            >
              Falar com engenheiro especialista no WhatsApp
            </a>
            <p className="mt-4 text-sm text-gray-300 italic font-medium tracking-wide">
              Atendimento rápido pelo WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-10 border-b border-gray-100 shadow-sm relative z-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Users className="w-10 h-10 text-primary" />
              <span className="font-bold text-secondary text-lg md:text-xl">Treinamento<br className="hidden md:block" /> Teórico e Prático</span>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-200"></div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <GraduationCap className="w-10 h-10 text-primary" />
              <span className="font-bold text-secondary text-lg md:text-xl">Conforme<br className="hidden md:block" /> IT 17/25 CBPMESP</span>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-200"></div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <FileText className="w-10 h-10 text-primary" />
              <span className="font-bold text-secondary text-lg md:text-xl">Certificado com<br className="hidden md:block" /> ART de Engenharia</span>
            </div>
          </div>
        </div>
      </section>
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "Treinamento Brigada" }]} dark />
      <TrustBar dark />


      {/* Stats */}
      <section className="py-0 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { end: 2500, prefix: "+", label: "AVCBs e CLCBs aprovados" },
              { end: 98, suffix: "%", label: "Taxa de aprovação na 1ª análise" },
              { end: 10, suffix: " dias", label: "Prazo médio para protocolo" },
              { end: 15, suffix: " anos", label: "Anos de experiência técnica" },
            ].map((s, i) => (
              <div key={i} className={`text-center py-8 px-6 ${i < 3 ? "border-r border-gray-100" : ""}`}>
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                  <StatCounter end={s.end} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="text-xs md:text-sm font-semibold text-secondary uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detalhes do Treinamento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 border-l-4 border-primary pl-6">O que é a Brigada de Incêndio?</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A <strong>Brigada de Incêndio</strong> é um grupo organizado de pessoas, voluntárias ou não, treinadas e capacitadas para atuar na prevenção e no combate a princípios de incêndio, abandono de área e primeiros socorros dentro de uma edificação.
            </p>
            <p>
              Ter uma brigada treinada não é apenas uma exigência legal para obter o <strong>AVCB em São Paulo</strong>, mas uma medida fundamental para salvar vidas. O tempo de resposta nos primeiros minutos de um incêndio é crucial para evitar grandes tragédias.
            </p>
            <p>
              A DRD2 Engenharia oferece um treinamento dinâmico, focado na realidade do seu imóvel, garantindo que sua equipe saiba exatamente o que fazer em situações de emergência.
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona - Timeline Azul */}
      <section className="py-24 bg-[#F8FAFC] border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-16 text-center">Nosso Processo de Treinamento</h2>
          
          <div className="relative">
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-8">
              {[
                { title: "Avaliação do Risco", desc: "Analisamos o tipo de ocupação e o grau de risco da sua edificação para dimensionar a quantidade correta de brigadistas." },
                { title: "Módulo Teórico", desc: "Aulas sobre teoria do fogo, classes de incêndio, métodos de extinção, proteção passiva e ativa, e primeiros socorros básicos." },
                { title: "Prática com Extintores", desc: "Treinamento prático de manuseio de extintores (PQS, CO2, Água) e reconhecimento dos sistemas de hidrantes." },
                { title: "Plano de Abandono", desc: "Simulação e orientação sobre as rotas de fuga, pontos de encontro e coordenação da saída segura das pessoas." },
                { title: "Certificação e ART", desc: "Emissão do Atestado de Treinamento assinado por engenheiro e a respectiva ART para validade perante os Corpo de Bombeiros de São Paulo." },
              ].map((step, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 relative z-10">
                  <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-xl shadow-red-900/10 relative z-20 mx-auto md:mx-0">
                    <span className="text-3xl md:text-4xl font-black text-secondary">{i + 1}</span>
                  </div>
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 flex-1 w-full hover:shadow-lg transition-all duration-300 border-l-4 hover:border-l-secondary">
                    <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-secondary mb-6">Sua equipe está preparada?</h3>
            <p className="text-xl text-gray-600 mb-8">Agende agora a formação ou reciclagem da sua brigada e garanta a segurança técnica do seu imóvel.</p>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-10 py-5 text-xl font-bold text-white shadow-xl shadow-red-500/30 hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all duration-300"
            >
              <Phone className="w-6 h-6" /> Agendar Treinamento no WhatsApp
            </a>
          </div>
        </div>
      </section>


      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <ServiceClusterLinks currentSlug="/treinamento-brigada" />
      <ServiceBlogLinks currentSlug="/treinamento-brigada" />

      <LeadForm />

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">Dúvidas sobre Brigada de Incêndio</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-2xl p-6 cursor-pointer bg-gray-50 hover:bg-white transition-all duration-300">
                <summary className="font-bold text-secondary text-lg list-none flex justify-between items-center decoration-none">
                  {faq.q}
                  <span className="text-primary group-open:rotate-45 transition-transform text-2xl ml-4">+</span>
                </summary>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
