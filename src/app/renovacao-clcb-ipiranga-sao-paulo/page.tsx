import Image from "next/image";
import {
  CheckCircle2, AlertTriangle, Map, Clock, ShieldX, RefreshCw, FileCheck,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import InternalLinksBlock from "@/components/InternalLinksBlock";

const _slug = "/renovacao-clcb-ipiranga-sao-paulo";
const _pageTitle = "Renovação de CLCB no Ipiranga SP | Engenheiro Especializado — DRD2";
const _pageDesc = "Renovação de CLCB no Ipiranga com engenheiro especializado. CLCB vencido? Regularize antes de interdição ou bloqueio do alvará. Cobertura Av. Nazaré, Rua Silva Bueno, Cursino, Saúde e todo o bairro. DRD2 Engenharia.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

export default function RenovacaoClcbIpirangaPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Qual o prazo para renovar o CLCB vencido no Ipiranga?",
      answer: "Assim que o CLCB vence, o imóvel já está irregular perante o CBPMESP. No Ipiranga, a renovação para ocupações de baixo risco até 750 m² leva de 15 a 45 dias. A DRD2 inicia o processo em até 48h após o diagnóstico técnico gratuito.",
    },
    {
      question: "A renovação de CLCB no Ipiranga exige obras?",
      answer: "Na maioria dos casos, não. Se os extintores estão no prazo, a sinalização está correta e as saídas estão desobstruídas, a renovação não exige obras. A DRD2 faz o diagnóstico gratuito para identificar qualquer pendência antes de protocolar.",
    },
    {
      question: "Tenho uma clínica ou restaurante na Av. Nazaré com CLCB vencido — quais os riscos?",
      answer: "Interdição imediata pelo CBPMESP, multa e bloqueio do alvará pela Prefeitura de São Paulo. O Ipiranga tem forte atividade comercial ao longo da Av. Nazaré e da Rua Silva Bueno, com fiscalização frequente em estabelecimentos de saúde e alimentação. Regularize sem esperar notificação.",
    },
    {
      question: "CLCB ou AVCB: qual meu imóvel no Ipiranga precisa?",
      answer: "CLCB é para edificações até 750 m² com atividades de baixo risco — comércio, clínicas, escritórios, salões de beleza, pequenos restaurantes. AVCB é exigido para imóveis maiores ou com risco elevado. A DRD2 define qual certificado se aplica no diagnóstico gratuito.",
    },
    {
      question: "A DRD2 atende renovações urgentes de CLCB no Ipiranga?",
      answer: "Sim. Para CLCB vencido com risco de interdição iminente no Ipiranga, a DRD2 aciona protocolo de urgência — diagnóstico prioritário e início do processo em até 48h. Atendemos todo o bairro e a região de Saúde, Cursino, Vila Prudente e Mooca.",
    },
  ];

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Ipiranga",
    serviceName: "Renovação de CLCB no Ipiranga",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Renovação CLCB", item: "/renovacao-clcb-sao-paulo" },
      { name: "Zona Sul", item: "/renovacao-clcb-zona-sul-sao-paulo" },
      { name: "Ipiranga", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-slate-950 border-b-4 border-red-600">
        <Image src="/images/page-clcb.webp" alt="Renovação de CLCB no Ipiranga" fill className="object-cover object-center opacity-20 grayscale-[50%]" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg">
              <AlertTriangle className="w-4 h-4" /> CLCB Vencido no Ipiranga — Ação Imediata
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight text-white">
              Renovação de CLCB no Ipiranga:<br className="hidden md:block" />
              <span className="text-red-500 block mt-2">Regularize Antes da Interdição</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              CLCB vencido no Ipiranga é risco real de interdição e bloqueio do alvará. Da Av. Nazaré à Rua Silva Bueno, clínicas, lojas e restaurantes podem ser autuados pelo CBPMESP a qualquer momento — sem aviso prévio.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter">
                Renovar CLCB no Ipiranga Agora
              </a>
            </div>
            <ul className="mt-10 space-y-4">
              {[
                "Diagnóstico técnico gratuito — saiba exatamente o que precisa ser feito",
                "Renovação sem interrupção das atividades na maioria dos casos",
                "Protocolo de urgência para CLCB com prazo crítico no Ipiranga",
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
                Quem Precisa de Renovação de CLCB no Ipiranga?
              </h2>
              <p className="text-slate-600 font-medium mb-6 leading-relaxed">O Ipiranga tem forte vocação comercial e de serviços, com grande concentração de estabelecimentos ao longo da Av. Nazaré, Rua Silva Bueno e entorno do Parque da Independência. A maioria opera em espaços menores que 750 m² — perfil exato do CLCB.</p>
              <ul className="space-y-4">
                {[
                  "Clínicas médicas e odontológicas na Av. Nazaré e adjacências",
                  "Restaurantes e bares próximos ao Parque da Independência",
                  "Lojas e serviços na Rua Silva Bueno e Rua dos Patriotas",
                  "Salões de beleza e clínicas estéticas no comércio local",
                  "Escritórios e consultórios no miolo residencial do bairro",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "15–45", sub: "Dias para Renovar" },
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
            O que Acontece com<br /><span className="text-red-500">CLCB Vencido no Ipiranga?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: AlertTriangle, title: "Interdição Imediata", text: "O CBPMESP pode interditar o estabelecimento em qualquer fiscalização. No Ipiranga, estabelecimentos próximos a áreas de grande fluxo como o Parque da Independência são visitados com frequência." },
              { icon: ShieldX, title: "Multas e Autuações", text: "Além da interdição, o responsável recebe multa proporcional ao tempo de irregularidade. Cada dia com CLCB vencido amplia o risco financeiro e jurídico." },
              { icon: FileCheck, title: "Alvará Bloqueado", text: "A Prefeitura de São Paulo exige CLCB válido para renovar o alvará de funcionamento. Sem renovação, o estabelecimento opera na ilegalidade." },
              { icon: Clock, title: "Responsabilidade Civil", text: "Em caso de sinistro com CLCB vencido, o proprietário ou responsável responde civil e criminalmente — independente de qualquer seguro contratado." },
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
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Quando o CLCB Precisa ser Renovado no Ipiranga?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Urgente</div>
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">CLCB Vencido ou Próximo do Vencimento</h3>
              <p className="text-slate-600 font-medium">CLCB expirado exige renovação imediata. Não espere notificação — o CBPMESP fiscaliza a qualquer momento. Inicie o processo assim que perceber que o vencimento está se aproximando.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Reforma ou Mudança de Uso</h3>
              <p className="text-slate-600 font-medium">Qualquer reforma ou mudança no uso do espaço exige atualização do CLCB. No Ipiranga, adequações em clínicas e pequenas reformas em restaurantes são causas frequentes de renovação antecipada do certificado.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Renovação do Alvará Municipal</h3>
              <p className="text-slate-600 font-medium">A Prefeitura de São Paulo exige CLCB válido na renovação do alvará de funcionamento. Sem o certificado atualizado, o alvará não é emitido e a atividade fica irregular perante a municipalidade.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Credenciamentos e Contratos</h3>
              <p className="text-slate-600 font-medium">Clínicas com planos de saúde e estabelecimentos com contratos de fornecimento no Ipiranga precisam de CLCB válido para manter credenciamentos e cumprir as exigências contratuais de parceiros e redes.</p>
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
              { step: "1", title: "Diagnóstico", desc: "Visita gratuita e laudo dos sistemas." },
              { step: "2", title: "Adequação", desc: "Correções necessárias, se houver." },
              { step: "3", title: "Documentação", desc: "Organização dos laudos e ARTs." },
              { step: "4", title: "Protocolo", desc: "Submissão no CBPMESP SP." },
              { step: "5", title: "Vistoria", desc: "Aprovação e entrega do CLCB." },
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
              <h4 className="text-2xl mb-4">Prazos de Renovação no Ipiranga</h4>
              <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                <li>• Clínicas e escritórios com sistemas OK: 15 a 30 dias</li>
                <li>• Restaurantes e academias: 20 a 45 dias</li>
                <li>• Processo urgente (CLCB vencido): início em 48h</li>
              </ul>
              <p className="text-xs uppercase tracking-widest opacity-80">Diagnóstico e orçamento gratuitos — sem compromisso.</p>
            </div>
            <a href={whatsappLink} className="bg-white text-red-600 px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Renovar Agora</a>
          </div>
        </div>
      </section>

      <SocialProof
        testimonial={{
          text: "Abri uma clínica de estética no Ipiranga e precisava do CLCB para conseguir o alvará. A DRD2 fez o diagnóstico no dia seguinte ao contato, identificou as pendências e entregou o certificado dentro do prazo que eu precisava para abrir.",
          author: "Cliente DRD2 Engenharia",
          role: "Proprietária de Clínica de Estética — Ipiranga, SP",
        }}
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">
            Perguntas Frequentes: <span className="text-red-600">Renovação CLCB Ipiranga</span>
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
          <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Atendemos Todo o Ipiranga e Região</h3>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto">Renovamos CLCB na Av. Nazaré, Rua Silva Bueno, Rua dos Patriotas, Av. Alcântara Machado e em todo o bairro — além dos bairros vizinhos: Saúde, Cursino, Vila Prudente, Mooca e Belém.</p>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Renove o CLCB no Ipiranga Hoje</h3>
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
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">CLCB vencido é risco real de interdição.</p>
          <p className="text-white text-sm font-bold mb-8">Cada dia sem renovação é um dia a mais de exposição para você e seu negócio no Ipiranga.</p>
          <CtaWhatsApp label="Falar com engenheiro e renovar agora" occupationType="renovacao CLCB Ipiranga" variant="primary" size="lg" centered />
        </div>
      </div>

      <InternalLinksBlock currentSlug={_slug} mode="bairro" maxLinks={6} titulo="Renovação de CLCB no Ipiranga e Zona Sul" />
      <LeadForm />

      <ServiceClusterLinks currentSlug={_slug} />
      <ServiceBlogLinks currentSlug={_slug} />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={_slug} />
    </>
  );
}
