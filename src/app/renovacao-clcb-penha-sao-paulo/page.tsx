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

const _slug = "/renovacao-clcb-penha-sao-paulo";
const _pageTitle = "Renovação de CLCB na Penha SP | Engenheiro Especializado — DRD2";
const _pageDesc = "Renovação de CLCB na Penha com engenheiro especializado. CLCB vencido? Regularize antes de interdição ou bloqueio do alvará. Cobertura Av. Gabriela Mistral, Penha de França, Vila Matilde e todo o bairro. DRD2 Engenharia.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

export default function RenovacaoClcbPenhaPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Qual o prazo para renovar o CLCB vencido na Penha?",
      answer: "Assim que o CLCB vence, o imóvel já está irregular perante o CBPMESP. Na Penha, a renovação para ocupações de baixo risco até 750 m² leva de 15 a 45 dias. A DRD2 inicia o processo em até 48h após o diagnóstico técnico gratuito.",
    },
    {
      question: "A renovação de CLCB na Penha exige obras?",
      answer: "Na maioria dos casos, não. Se os extintores estão no prazo, a sinalização está correta e as saídas estão desobstruídas, a renovação não exige obras. A DRD2 faz o diagnóstico gratuito para identificar qualquer pendência antes de protocolar.",
    },
    {
      question: "Tenho um comércio ou clínica na Av. Gabriela Mistral com CLCB vencido — quais os riscos?",
      answer: "Interdição imediata pelo CBPMESP, multa e bloqueio do alvará pela Prefeitura de São Paulo. A Penha é um dos polos comerciais mais tradicionais da Zona Leste, com fiscalização frequente em lojas, clínicas e serviços do entorno do terminal e das igrejas. Regularize sem esperar notificação.",
    },
    {
      question: "CLCB ou AVCB: qual meu imóvel na Penha precisa?",
      answer: "CLCB é para edificações até 750 m² com atividades de baixo risco — comércio, clínicas, escritórios, salões de beleza, pequenos restaurantes. AVCB é exigido para imóveis maiores ou com risco elevado. A DRD2 define qual certificado se aplica no diagnóstico gratuito.",
    },
    {
      question: "A DRD2 atende renovações urgentes de CLCB na Penha?",
      answer: "Sim. Para CLCB vencido com risco de interdição iminente na Penha, a DRD2 aciona protocolo de urgência — diagnóstico prioritário e início do processo em até 48h. Atendemos todo o bairro e a região de Vila Matilde, Carrão, São Miguel Paulista e Brás.",
    },
  ];

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Penha",
    serviceName: "Renovação de CLCB na Penha",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Renovação CLCB", item: "/renovacao-clcb-sao-paulo" },
      { name: "Zona Leste", item: "/renovacao-clcb-zona-leste-sao-paulo" },
      { name: "Penha", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-slate-950 border-b-4 border-red-600">
        <Image src="/images/page-clcb.webp" alt="Renovação de CLCB na Penha" fill className="object-cover object-center opacity-20 grayscale-[50%]" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg">
              <AlertTriangle className="w-4 h-4" /> CLCB Vencido na Penha — Ação Imediata
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight text-white">
              Renovação de CLCB na Penha:<br className="hidden md:block" />
              <span className="text-red-500 block mt-2">Regularize Antes da Interdição</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              CLCB vencido na Penha é risco real de interdição e bloqueio do alvará. Um dos polos comerciais mais tradicionais da Zona Leste, o bairro concentra lojas, clínicas e restaurantes que podem ser autuados pelo CBPMESP a qualquer momento.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter">
                Renovar CLCB na Penha Agora
              </a>
            </div>
            <ul className="mt-10 space-y-4">
              {[
                "Diagnóstico técnico gratuito — saiba exatamente o que precisa ser feito",
                "Renovação sem interrupção das atividades na maioria dos casos",
                "Protocolo de urgência para CLCB com prazo crítico na Penha",
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
                Quem Precisa de Renovação de CLCB na Penha?
              </h2>
              <p className="text-slate-600 font-medium mb-6 leading-relaxed">A Penha tem um dos mais tradicionais e movimentados centros comerciais da Zona Leste, com grande concentração de serviços de saúde, beleza e alimentação ao longo da Av. Gabriela Mistral e entorno do metrô. A maioria opera em espaços menores que 750 m² — perfil exato do CLCB.</p>
              <ul className="space-y-4">
                {[
                  "Lojas e serviços na Av. Gabriela Mistral e Rua do Oriente",
                  "Clínicas médicas, odontológicas e de fisioterapia no bairro",
                  "Restaurantes e lanchonetes próximos ao Terminal Penha",
                  "Salões de beleza e barbearias espalhados pelo comércio local",
                  "Farmácias e drogarias com exigência de regularidade documental",
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
            O que Acontece com<br /><span className="text-red-500">CLCB Vencido na Penha?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: AlertTriangle, title: "Interdição Imediata", text: "O CBPMESP pode interditar o estabelecimento em qualquer fiscalização. Na Penha, a concentração de comércio tradicional e o movimento intenso do terminal atraem fiscalizações frequentes." },
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
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Quando o CLCB Precisa ser Renovado na Penha?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Urgente</div>
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">CLCB Vencido ou Próximo do Vencimento</h3>
              <p className="text-slate-600 font-medium">CLCB expirado exige renovação imediata. Não espere notificação — o CBPMESP fiscaliza a qualquer momento. Inicie o processo assim que perceber que o vencimento está se aproximando.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Reforma ou Mudança de Uso</h3>
              <p className="text-slate-600 font-medium">Qualquer reforma ou mudança no uso do espaço exige atualização do CLCB. Na Penha, a renovação de fachadas e adequações de lojas tradicionais para novos formatos de serviço são causas frequentes de renovação antecipada.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Renovação do Alvará Municipal</h3>
              <p className="text-slate-600 font-medium">A Prefeitura de São Paulo exige CLCB válido na renovação do alvará de funcionamento. Sem o certificado atualizado, o alvará não é emitido e a atividade fica irregular perante a municipalidade.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Credenciamentos e Franquias</h3>
              <p className="text-slate-600 font-medium">Farmácias de rede, franquias e clínicas com planos de saúde na Penha precisam de CLCB válido para manter credenciamentos e cumprir as exigências de auditoria das redes a que pertencem.</p>
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
              <h4 className="text-2xl mb-4">Prazos de Renovação na Penha</h4>
              <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                <li>• Lojas e clínicas com sistemas OK: 15 a 30 dias</li>
                <li>• Restaurantes e farmácias: 20 a 45 dias</li>
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
          text: "Minha farmácia na Penha estava com CLCB vencido e a rede exigiu regularização para renovar o contrato de franquia. A DRD2 resolveu tudo rapidamente e dentro do prazo que a rede exigiu. Serviço excelente.",
          author: "Cliente DRD2 Engenharia",
          role: "Franqueado de Farmácia — Penha, SP",
        }}
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">
            Perguntas Frequentes: <span className="text-red-600">Renovação CLCB Penha</span>
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
          <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Atendemos Toda a Penha e a Zona Leste</h3>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto">Renovamos CLCB na Av. Gabriela Mistral, Rua do Oriente, Av. Penha de França, Rua Conselheiro Cotegipe e em todo o bairro — além dos bairros vizinhos: Vila Matilde, Carrão, São Miguel Paulista, Brás e Belém.</p>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Renove o CLCB na Penha Hoje</h3>
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
          <p className="text-white text-sm font-bold mb-8">Cada dia sem renovação é um dia a mais de exposição para você e seu negócio na Penha.</p>
          <CtaWhatsApp label="Falar com engenheiro e renovar agora" occupationType="renovacao CLCB Penha" variant="primary" size="lg" centered />
        </div>
      </div>

      <InternalLinksBlock currentSlug={_slug} mode="bairro" maxLinks={6} titulo="Renovação de CLCB na Penha e Zona Leste" />
      <LeadForm />

      <ServiceClusterLinks currentSlug={_slug} />
      <ServiceBlogLinks currentSlug={_slug} />

      <NeighborhoodSilo currentSlug={_slug} />
    </>
  );
}
