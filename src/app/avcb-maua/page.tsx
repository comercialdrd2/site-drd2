import Image from "next/image";
import {
  CheckCircle2, ShieldAlert, BadgeInfo,
  MapPin, Map, Building2, Factory, Truck, Zap,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import InternalLinksBlock from "@/components/InternalLinksBlock";

const _slug = "/avcb-maua";
const _pageTitle = "AVCB em Mauá SP | Engenheiro para Indústrias, Galpões e Condomínios no ABC";
const _pageDesc = "AVCB em Mauá com engenheiro especializado. Regularização para indústrias metalúrgicas, químicas, galpões e condomínios no ABC Paulista. Cobertura Centro, Jardim Zaíra e Vila Noemia. DRD2 Engenharia.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

export default function AvcbMauaPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "AVCB em Mauá segue as mesmas regras do CBPMESP?",
      answer: "Sim. Mauá faz parte do ABC Paulista e é atendida pelo CBPMESP, com as mesmas Instruções Técnicas aplicadas em toda o estado. O processo e as exigências são idênticos à capital. A DRD2 tem ampla experiência com o CBPMESP no ABC.",
    },
    {
      question: "Indústria metalúrgica ou química em Mauá — o AVCB exige mais?",
      answer: "Sim. Processos com metais quentes, óleos industriais e produtos químicos têm classificação de risco elevada. O CBPMESP exige sistemas de supressão e detecção proporcionais ao tipo de operação. A DRD2 já executou projetos nesse segmento no ABC Paulista.",
    },
    {
      question: "Galpão logístico em Mauá sem AVCB — quais são os riscos?",
      answer: "Interdição imediata, multas e responsabilização civil e criminal em caso de sinistro. Além disso, muitos contratos com grandes clientes exigem AVCB como cláusula obrigatória. A DRD2 regulariza galpões em Mauá com prazo definido e sem surpresas no orçamento.",
    },
    {
      question: "Condomínio em Mauá com AVCB vencido — o síndico pode ser multado?",
      answer: "Sim. Síndico com AVCB vencido responde civil e criminalmente em caso de sinistro. O CBPMESP pode exigir renovação a qualquer momento. A DRD2 conduz a renovação com urgência, priorizando prazos críticos.",
    },
    {
      question: "A DRD2 atende Mauá com a mesma qualidade que São Paulo?",
      answer: "Sim. Nossa equipe técnica atende Mauá com o mesmo padrão de qualidade da capital. Visitas técnicas, projetos e acompanhamento do processo seguem o mesmo rigor, com resposta em até 24h.",
    },
  ];

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Mauá",
    serviceName: "AVCB em Mauá",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Regiões", item: "/avcb-sao-paulo" },
      { name: "Mauá", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image src="/images/blog/fire_safety_equipment_premium.webp" alt="Regularização de AVCB em Mauá" fill className="object-cover object-center opacity-30 grayscale-[50%]" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> ABC Paulista — Polo Metal-Mecânico e Químico
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB em Mauá:<br className="hidden md:block" />
              <span className="text-red-500 block mt-2">Regularização para Indústrias, Galpões e Condomínios no ABC</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Mauá é um polo industrial do ABC com tradição em metalurgia, química e um crescente setor logístico. Com o CBPMESP atuante, empresas sem AVCB válido enfrentam interdição imediata, multas e perda de contratos.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter">
                Falar com engenheiro especialista (Mauá)
              </a>
            </div>
            <ul className="mt-10 space-y-4">
              {[
                "Especialistas em indústrias metalúrgicas, químicas e logística no ABC",
                "Experiência consolidada com CBPMESP no Grande ABC",
                "Diagnóstico técnico gratuito com engenheiro credenciado CREA-SP",
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
                Engenheiro de AVCB em Mauá:<br />
                <span className="text-red-600">Serviço Completo DRD2</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Diagnóstico técnico gratuito com classificação de risco.",
                  "Projeto PPCI completo com ART junto ao CREA-SP.",
                  "Protocolo e acompanhamento junto ao Corpo de Bombeiros.",
                  "Resposta técnica a Comunique-se sem custo adicional.",
                  "Renovação de AVCB vencido com urgência e CLCB para baixo risco.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "ABC", sub: "Industrial Estratégico" },
                { label: "+110", sub: "Empresas Regularizadas" },
                { label: "24h", sub: "Resposta Técnica" },
                { label: "100%", sub: "Padrão IT CBPMESP" },
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
          <BadgeInfo className="w-16 h-16 text-red-600 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">
            Por que Mauá tem<br /><span className="text-red-500">Alta Demanda de AVCB?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: Factory, title: "Metal-Mecânico", text: "Mauá tem tradição em metalurgia, estamparia e usinagem — processos com óleo de corte, solda e materiais inflamáveis com exigências rigorosas do CBPMESP." },
              { icon: Zap, title: "Indústria Química", text: "Operações com produtos químicos e petroquímicos demandam AVCB com classificação de risco específica e sistemas de supressão proporcionais ao volume armazenado." },
              { icon: Truck, title: "Logística em Expansão", text: "Galpões logísticos no corredor do ABC exigem AVCB para contratos com grandes varejistas e operadores logísticos — sem o certificado, o contrato não fecha." },
              { icon: Building2, title: "Comércio e Residencial", text: "Expansão comercial e novos condomínios no Centro e Jardim Zaíra com demanda crescente de AVCB e CLCB para licenciamento municipal." },
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
            <MapPin className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Principais Regiões Atendidas em Mauá</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Alta Complexidade</div>
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Parque São Vicente / Área Industrial</h3>
              <p className="text-slate-600 font-medium">Maior concentração de indústrias metalúrgicas e químicas de Mauá — projetos de AVCB de alta complexidade com sistemas específicos para cada tipo de processo industrial.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Jardim Zaíra / Vila Noemia</h3>
              <p className="text-slate-600 font-medium">Bairros residenciais e comerciais com demanda de AVCB e CLCB para licenciamento municipal. Condomínios que precisam de renovação dentro do prazo para não gerar risco para o síndico.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Centro / Matriz</h3>
              <p className="text-slate-600 font-medium">Comércio consolidado e restaurantes com alta rotatividade de licenciamento — CLCB e AVCB com prazos agressivos para não perder o alvará da Prefeitura.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Conjunto Sônia Maria / Itapark</h3>
              <p className="text-slate-600 font-medium">Galpões logísticos e depósitos no corredor entre Mauá e São Bernardo — exigência de AVCB para contratos com clientes do setor automotivo e de varejo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter">
            Tipos de AVCB Comuns em <span className="text-red-600">Mauá</span>
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-50 border-l-8 border-red-600 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">⚙️ AVCB para Indústrias Metalúrgicas e Metal-Mecânicas</h3>
              <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">A tradição metal-mecânica de Mauá exige AVCB com projeto específico para processos de solda, corte, estamparia e usinagem. Óleos industriais e calor intenso têm classificação de risco elevada — sistemas de supressão e detecção proporcionais são obrigatórios.</p>
            </div>
            <div className="bg-slate-50 border-l-8 border-red-900 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏗️ AVCB para Galpões e Depósitos Logísticos</h3>
              <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Galpões de distribuição no corredor do ABC precisam de AVCB com sprinklers e detecção dimensionados conforme a área e tipo de carga armazenada. Sem o certificado, grandes contratos logísticos simplesmente não acontecem.</p>
            </div>
            <div className="bg-slate-50 border-l-8 border-slate-800 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏢 CLCB para Comércio e Pequenas Empresas</h3>
              <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Comércios, restaurantes e escritórios em Mauá utilizam o CLCB simplificado para obtenção rápida da licença municipal. A DRD2 verifica a elegibilidade gratuitamente e conduz o processo com agilidade.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              O Processo Exato<br /><span className="text-red-600 italic">Sem Comunique-se</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Diagnóstico", desc: "Visita e Análise de Risco." },
              { step: "2", title: "Proposta", desc: "Escopo e valores finais." },
              { step: "3", title: "Projeto", desc: "Desenho Técnico com ART." },
              { step: "4", title: "Protocolo", desc: "Submissão no CBPMESP." },
              { step: "5", title: "Vistoria", desc: "Acompanhamento c/ Bombeiro." },
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
              <h4 className="text-2xl mb-4">Prazos e Custos Claros</h4>
              <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                <li>• Indústrias metalúrgicas e químicas: 90 a 180 dias</li>
                <li>• Galpões com sistemas vigentes: 60 a 90 dias</li>
                <li>• CLCB simplificado para comércio: 30 a 60 dias</li>
              </ul>
              <p className="text-xs uppercase tracking-widest opacity-80">Orçamento real após visita gratuita e engenharia garantida.</p>
            </div>
            <a href={whatsappLink} className="bg-white text-red-600 px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Solicitar Visita</a>
          </div>
        </div>
      </section>

      <SocialProof
        testimonial={{
          text: "A DRD2 resolveu o AVCB da nossa metalúrgica em Mauá com total eficiência. Projeto técnico aprovado sem exigências, prazo cumprido e custo dentro do combinado. Empresa séria e confiável para o ABC Paulista.",
          author: "Cliente DRD2 Engenharia",
          role: "Proprietário de Metalúrgica — Mauá, SP",
        }}
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">
            Perguntas Frequentes: <span className="text-red-600">AVCB Mauá</span>
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
          <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-8">Além de Mauá, a DRD2 atende Santo André, São Bernardo, São Caetano, Diadema e toda a região do ABC Paulista com o mesmo padrão técnico aplicado na capital.</p>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Regularização em Mauá</h3>
              <p className="text-slate-400 font-medium italic text-sm">Escritório especializado. Análise e proposta em até 24h.</p>
            </div>
            <a href={whatsappLink} target="_blank" className="bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-[#1EBE5A] transition-all uppercase tracking-widest text-xs whitespace-nowrap">
              Diagnóstico Grátis Agora
            </a>
          </div>
        </div>
      </section>

      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">Não arrisque sua indústria em Mauá.</p>
          <p className="text-white text-sm font-bold mb-8">Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.</p>
          <CtaWhatsApp label="Fale agora com a DRD2 e resolva hoje" occupationType="indústria em Maua" variant="primary" size="lg" centered />
        </div>
      </div>

      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">
            Documentação Necessária para <span className="text-red-600">AVCB em Mauá</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Planta baixa aprovada pela Prefeitura ou levantamento arquitetônico atualizado",
              "IPTU do exercício atual com área total averbada e uso declarado",
              "Memorial descritivo da ocupação e destinação de uso do imóvel",
              "Laudo de instalações elétricas com ART registrada no CREA-SP",
              "Laudo de para-raios (SPDA) para edifícios acima de 5 pavimentos",
              "ART do engenheiro responsável pelo projeto de prevenção de incêndio",
              "Matrícula atualizada do imóvel no Cartório de Registro de Imóveis",
              "CNPJ ou CPF do responsável legal pelo estabelecimento",
            ].map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-2xl text-red-900 font-bold text-sm">
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Para indústrias em Mauá, verificamos compatibilidade dos sistemas existentes com as exigências do CBPMESP antes de qualquer submissão.
          </div>
        </div>
      </section>

      <InternalLinksBlock currentSlug={_slug} mode="bairro" maxLinks={6} titulo="Serviços de AVCB em Mauá e ABC Paulista" />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/avcb-maua" />
      <ServiceBlogLinks currentSlug="/avcb-maua" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={_slug} />
    </>
  );
}
