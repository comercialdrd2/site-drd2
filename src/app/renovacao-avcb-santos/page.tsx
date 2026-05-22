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

const _slug = "/renovacao-avcb-santos";
const _pageTitle = "Renovação de AVCB em Santos SP | Engenheiro Especializado — DRD2";
const _pageDesc = "Renovação de AVCB em Santos com engenheiro especializado. AVCB vencido? Regularize antes de uma exigência, multa ou interdição. Hotéis, condomínios litorâneos e operações portuárias. DRD2 Engenharia.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

export default function RenovacaoAvcbSantosPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Qual o prazo para renovar o AVCB vencido em Santos?",
      answer: "Assim que o AVCB vence, o imóvel já está em situação irregular. A renovação em Santos leva de 30 a 90 dias dependendo da ocupação e dos sistemas instalados. Para hotéis e operações portuárias, o prazo pode ser maior. A DRD2 inicia em até 48h após o diagnóstico.",
    },
    {
      question: "A renovação de AVCB em Santos exige revisão dos sistemas por causa da maresia?",
      answer: "Sim. O ambiente salino da Baixada Santista acelera a corrosão de hidrantes, sprinklers e detectores. Na renovação, fazemos laudo técnico dos sistemas existentes para identificar equipamentos comprometidos pela umidade e salinidade antes do protocolo.",
    },
    {
      question: "Hotel na orla de Santos com AVCB vencido — quais são os riscos?",
      answer: "Interdição imediata, cancelamento de reservas e multas. Hotéis com AVCB vencido também podem perder contratos com OTAs e redes hoteleiras que exigem o certificado válido. A DRD2 conduz a renovação com mínimo impacto operacional.",
    },
    {
      question: "Condomínio de praia em Santos — com que frequência deve renovar o AVCB?",
      answer: "Em geral, a validade do AVCB é de 3 anos, mas em ambientes litorâneos a manutenção periódica dos sistemas é essencial. A DRD2 orienta síndicos sobre o calendário correto de renovação e manutenção preventiva em Santos.",
    },
    {
      question: "A DRD2 atende renovações urgentes em Santos?",
      answer: "Sim. Possuímos protocolo de urgência para AVCB vencido — priorizamos o diagnóstico e protocolo para imóveis com risco de interdição imediata em Santos e toda a Baixada Santista.",
    },
  ];

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Santos",
    serviceName: "Renovação de AVCB em Santos",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Renovação AVCB", item: "/renovacao-avcb" },
      { name: "Santos", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-slate-950 border-b-4 border-red-600">
        <Image src="/images/blog/blog_hero_avcb_condominio.webp" alt="Renovação de AVCB em Santos" fill className="object-cover object-center opacity-20 grayscale-[50%]" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg">
              <AlertTriangle className="w-4 h-4" /> AVCB Vencido em Santos — Ação Imediata
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight text-white">
              Renovação de AVCB em Santos:<br className="hidden md:block" />
              <span className="text-red-500 block mt-2">Hotéis, Condomínios e Porto Regularizados</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Santos concentra hotéis na orla, prédios históricos e operações portuárias — todos exigem AVCB válido. Com o ambiente salino acelerando a degradação dos sistemas, a renovação em Santos exige atenção técnica especializada.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter">
                Renovar AVCB em Santos Agora
              </a>
            </div>
            <ul className="mt-10 space-y-4">
              {[
                "Laudo técnico de sistemas corroídos pela maresia incluso no diagnóstico",
                "Renovação sem interrupção das atividades do hotel ou condomínio",
                "Protocolo de urgência para AVCB com prazo crítico",
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
                Renovação de AVCB em Santos:<br />
                <span className="text-red-600">Processo Completo DRD2</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Diagnóstico técnico gratuito com inspeção dos sistemas existentes.",
                  "Laudo de corrosão e adequação para ambiente marítimo.",
                  "Projeto de atualização com ART CREA-SP, se necessário.",
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
            Consequências do<br /><span className="text-red-500">AVCB Vencido em Santos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: AlertTriangle, title: "Interdição do Hotel", text: "Hotel com AVCB vencido pode ser interditado a qualquer momento — cancelamento de reservas, prejuízo imediato e reputação destruída em avaliações online." },
              { icon: ShieldX, title: "Multas Pesadas", text: "O CBPMESP aplica multas proporcionais ao risco e ao tempo de irregularidade. Para estabelecimentos com alta ocupação como hotéis, os valores são mais elevados." },
              { icon: FileCheck, title: "Perda do Alvará", text: "A Prefeitura de Santos pode bloquear a renovação do alvará de funcionamento de qualquer estabelecimento com AVCB vencido." },
              { icon: Clock, title: "Responsabilidade Civil", text: "Em caso de sinistro sem AVCB válido, o responsável — seja síndico, proprietário ou gestor — responde civil e criminalmente independente de seguro." },
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
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Quando o AVCB Precisa ser Renovado em Santos?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Urgente</div>
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">AVCB Vencido ou Próximo do Vencimento</h3>
              <p className="text-slate-600 font-medium">AVCB expirado em Santos requer renovação imediata. O ambiente litorâneo acelera a degradação dos sistemas — inspecione e renove antes que o CBPMESP fiscalize.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Equipamentos Corroídos pela Maresia</h3>
              <p className="text-slate-600 font-medium">A salinidade de Santos compromete hidrantes, sprinklers e detectores antes do vencimento do AVCB. Renovação com revisão técnica dos equipamentos é essencial.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Renovação de Alvará Municipal</h3>
              <p className="text-slate-600 font-medium">A Prefeitura de Santos exige AVCB válido para renovar o alvará de funcionamento de hotéis, restaurantes e comércios. Sem a renovação, o alvará fica bloqueado.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Exigência de OTAs e Redes Hoteleiras</h3>
              <p className="text-slate-600 font-medium">Booking, Expedia e redes hoteleiras exigem AVCB válido para manter o parceiro ativo na plataforma. Hotel sem renovação pode ser removido das listagens.</p>
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
              { step: "1", title: "Diagnóstico", desc: "Inspeção gratuita dos sistemas." },
              { step: "2", title: "Laudo", desc: "Avaliação do estado dos equipamentos." },
              { step: "3", title: "Adequação", desc: "Substituição pontual, se necessário." },
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
              <h4 className="text-2xl mb-4">Prazos de Renovação em Santos</h4>
              <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                <li>• Hotéis e pousadas com sistemas OK: 45 a 90 dias</li>
                <li>• Condomínios e comércio: 30 a 60 dias</li>
                <li>• Processo urgente (AVCB vencido): início em 48h</li>
              </ul>
              <p className="text-xs uppercase tracking-widest opacity-80">Diagnóstico e orçamento gratuitos — sem compromisso.</p>
            </div>
            <a href={whatsappLink} className="bg-white text-red-600 px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Renovar Agora</a>
          </div>
        </div>
      </section>

      <SocialProof
        testimonial={{
          text: "Nosso hotel em Santos estava com AVCB vencido e risco de interdição. A DRD2 enviou engenheiro no dia seguinte, identificou os equipamentos corroídos pela maresia e conduziu toda a renovação sem fechar o hotel. Serviço excelente.",
          author: "Cliente DRD2 Engenharia",
          role: "Gerente de Hotel — Santos, SP",
        }}
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">
            Perguntas Frequentes: <span className="text-red-600">Renovação AVCB Santos</span>
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
          <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Atendemos Toda a Baixada Santista</h3>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto">Além de Santos, renovamos AVCB em São Vicente, Cubatão, Guarujá, Praia Grande e toda a Baixada Santista.</p>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Renove o AVCB em Santos Hoje</h3>
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
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">AVCB vencido é risco real de interdição em Santos.</p>
          <p className="text-white text-sm font-bold mb-8">Cada dia sem renovação aumenta o risco para você e seus hóspedes.</p>
          <CtaWhatsApp label="Falar com engenheiro e renovar agora" occupationType="renovacao AVCB Santos" variant="primary" size="lg" centered />
        </div>
      </div>

      <InternalLinksBlock currentSlug={_slug} mode="bairro" maxLinks={6} titulo="Renovação de AVCB em Santos e Baixada Santista" />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/renovacao-avcb-santos" />
      <ServiceBlogLinks currentSlug="/renovacao-avcb-santos" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={_slug} />
    </>
  );
}
