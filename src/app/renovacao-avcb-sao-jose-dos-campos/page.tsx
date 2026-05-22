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

const _slug = "/renovacao-avcb-sao-jose-dos-campos";
const _pageTitle = "Renovação de AVCB em São José dos Campos SP | Engenheiro Especializado — DRD2";
const _pageDesc = "Renovação de AVCB em São José dos Campos com engenheiro especializado. AVCB vencido? Regularize antes de uma exigência, multa ou interdição. Plantas aeroespaciais, indústrias e condomínios. DRD2 Engenharia.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

export default function RenovacaoAvcbSaoJoseDosCamposPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Qual o prazo para renovar o AVCB vencido em São José dos Campos?",
      answer: "A renovação em SJC leva de 30 a 90 dias para condomínios e comércio, e de 60 a 180 dias para indústrias e plantas aeroespaciais. A DRD2 inicia o processo em até 48h após o diagnóstico — não espere a notificação do CBPMESP.",
    },
    {
      question: "Planta industrial da Embraer ou fornecedora em SJC — a renovação é mais complexa?",
      answer: "Sim. Instalações aeroespaciais têm sistemas de proteção de alta complexidade. A renovação exige laudo técnico detalhado de cada sistema, verificação de adequação às ITs vigentes e, quando necessário, projeto de atualização com ART. A DRD2 tem expertise nesse segmento.",
    },
    {
      question: "A renovação de AVCB em SJC exige que a empresa pare as atividades?",
      answer: "Na maioria dos casos, não. A DRD2 planeja o processo de renovação minimizando o impacto operacional. Para indústrias em operação contínua, coordenamos visitas e inspeções nos períodos de menor produção.",
    },
    {
      question: "Condomínio em SJC com AVCB vencido — o síndico tem prazo para regularizar?",
      answer: "O AVCB vencido já coloca o imóvel em situação irregular. Não há prazo de carência — o síndico é responsável imediato. A DRD2 conduz a renovação com urgência para condomínios com prazo crítico em toda a região de SJC.",
    },
    {
      question: "A DRD2 atende renovações urgentes em São José dos Campos?",
      answer: "Sim. Temos protocolo de urgência para AVCB vencido — priorizamos o diagnóstico e protocolo para imóveis com risco de interdição imediata em SJC e todo o Vale do Paraíba.",
    },
  ];

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "São José dos Campos",
    serviceName: "Renovação de AVCB em São José dos Campos",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Renovação AVCB", item: "/renovacao-avcb" },
      { name: "São José dos Campos", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-slate-950 border-b-4 border-red-600">
        <Image src="/images/blog/blog_hero_avcb_galpao.webp" alt="Renovação de AVCB em São José dos Campos" fill className="object-cover object-center opacity-20 grayscale-[50%]" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg">
              <AlertTriangle className="w-4 h-4" /> AVCB Vencido em SJC — Ação Imediata
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight text-white">
              Renovação de AVCB em São José dos Campos:<br className="hidden md:block" />
              <span className="text-red-500 block mt-2">Aeroespacial, Indústrias e Condomínios Regularizados</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              SJC é o maior polo aeroespacial e tecnológico do hemisfério sul. Com o CBPMESP fiscalizando ativamente, empresas sem AVCB renovado correm risco de interdição, multas e perda de contratos em contratos de alto valor.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter">
                Renovar AVCB em SJC Agora
              </a>
            </div>
            <ul className="mt-10 space-y-4">
              {[
                "Expertise em plantas aeroespaciais e industriais de alta complexidade",
                "Renovação sem interrupção das atividades na maioria dos casos",
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
                Renovação de AVCB em SJC:<br />
                <span className="text-red-600">Processo Completo DRD2</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Diagnóstico técnico gratuito com inspeção dos sistemas existentes.",
                  "Laudo de adequação às ITs vigentes do CBPMESP.",
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
            Consequências do<br /><span className="text-red-500">AVCB Vencido em SJC</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: AlertTriangle, title: "Interdição da Planta", text: "Instalações industriais ou aeroespaciais podem ser interditadas a qualquer momento — paralisação da produção e prejuízo milionário para toda a cadeia de fornecimento." },
              { icon: ShieldX, title: "Perda de Contratos", text: "Contratos com a Embraer e clientes do setor aeroespacial exigem AVCB válido. Sem a renovação, o fornecedor é descredenciado imediatamente." },
              { icon: FileCheck, title: "Bloqueio do Alvará", text: "A Prefeitura de SJC bloqueia a renovação do alvará de funcionamento de qualquer estabelecimento com AVCB vencido." },
              { icon: Clock, title: "Responsabilidade Civil", text: "Em caso de sinistro sem AVCB válido, o responsável — gestor, síndico ou proprietário — responde civil e criminalmente sem exceção." },
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
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Quando Renovar o AVCB em São José dos Campos?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Urgente</div>
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">AVCB Vencido ou a Vencer</h3>
              <p className="text-slate-600 font-medium">AVCB expirado em SJC coloca a empresa em risco imediato. Não espere a notificação — inicie o processo de renovação com 60 a 90 dias de antecedência.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Expansão ou Mudança de Uso</h3>
              <p className="text-slate-600 font-medium">Ampliação de planta, mudança de processo ou novo produto fabricado exige atualização do AVCB. Em SJC, isso é frequente em empresas que diversificam a produção aeroespacial.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Renovação de Alvará Municipal</h3>
              <p className="text-slate-600 font-medium">A Prefeitura de SJC exige AVCB válido para renovar o alvará. Planeje a renovação do AVCB antes do vencimento do alvará para não ter operação bloqueada.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Exigência de Auditorias de Clientes</h3>
              <p className="text-slate-600 font-medium">Auditorias de qualidade da Embraer e outros clientes aeroespaciais verificam a validade do AVCB. Fornecedores com AVCB vencido são automaticamente reprovados.</p>
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
              { step: "2", title: "Laudo", desc: "Adequação às ITs vigentes." },
              { step: "3", title: "Adequação", desc: "Correções necessárias." },
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
              <h4 className="text-2xl mb-4">Prazos de Renovação em SJC</h4>
              <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                <li>• Indústrias e plantas aeroespaciais: 60 a 120 dias</li>
                <li>• Condomínios e comércio: 30 a 60 dias</li>
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
          text: "Nossa planta fornecedora da Embraer em SJC estava com AVCB prestes a vencer. A DRD2 conduziu a renovação antes do prazo, sem interromper a produção. Auditoria do cliente aprovada sem ressalvas. Recomendo.",
          author: "Cliente DRD2 Engenharia",
          role: "Coordenador de Qualidade — São José dos Campos, SP",
        }}
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">
            Perguntas Frequentes: <span className="text-red-600">Renovação AVCB SJC</span>
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
          <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Atendemos Todo o Vale do Paraíba</h3>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto">Além de São José dos Campos, renovamos AVCB em Taubaté, Jacareí, Caçapava, Pindamonhangaba e toda a região.</p>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Renove o AVCB em SJC Hoje</h3>
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
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">AVCB vencido pode custar contratos milionários em SJC.</p>
          <p className="text-white text-sm font-bold mb-8">Não arrisque sua certificação de fornecedor por falta de um documento.</p>
          <CtaWhatsApp label="Falar com engenheiro e renovar agora" occupationType="renovacao AVCB Sao Jose dos Campos" variant="primary" size="lg" centered />
        </div>
      </div>

      <InternalLinksBlock currentSlug={_slug} mode="bairro" maxLinks={6} titulo="Renovação de AVCB em São José dos Campos e Vale do Paraíba" />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/renovacao-avcb-sao-jose-dos-campos" />
      <ServiceBlogLinks currentSlug="/renovacao-avcb-sao-jose-dos-campos" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={_slug} />
    </>
  );
}
