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

const _slug = "/renovacao-avcb-sorocaba";
const _pageTitle = "Renovação de AVCB em Sorocaba SP | Engenheiro Especializado — DRD2";
const _pageDesc = "Renovação de AVCB em Sorocaba com engenheiro especializado. AVCB vencido? Regularize antes de uma exigência, multa ou interdição. Indústrias, shoppings, condomínios e comércio. DRD2 Engenharia.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

export default function RenovacaoAvcbSorocabaPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Qual o prazo para renovar o AVCB vencido em Sorocaba?",
      answer: "A renovação em Sorocaba leva de 30 a 60 dias para comércio e condomínios, e de 60 a 120 dias para indústrias. A DRD2 inicia em até 48h após o diagnóstico. Não aguarde notificação — o CBPMESP pode fiscalizar a qualquer momento.",
    },
    {
      question: "Indústria têxtil em Sorocaba com AVCB vencido — quais são os riscos?",
      answer: "Indústrias têxteis têm alta carga de material combustível — um sinistro sem AVCB válido implica interdição imediata, multas pesadas e responsabilização criminal do responsável. Regularize com urgência.",
    },
    {
      question: "Shopping em Sorocaba com AVCB vencido — o que acontece?",
      answer: "Shoppings sem AVCB válido estão sujeitos à interdição imediata pelo CBPMESP. Além disso, lojistas podem acionar juridicamente a administração por descumprimento de obrigação de segurança. A DRD2 conduz renovações de shoppings sem interrupção do funcionamento.",
    },
    {
      question: "A renovação de AVCB exige que a empresa feche em Sorocaba?",
      answer: "Na maioria dos casos, não. A DRD2 planeja o processo de renovação com mínimo impacto operacional — coordenamos inspeções e visitas técnicas fora do horário de pico, quando possível.",
    },
    {
      question: "A DRD2 atende renovações urgentes em Sorocaba?",
      answer: "Sim. Temos protocolo de urgência para AVCB vencido — priorizamos o diagnóstico e o protocolo para imóveis com risco de interdição imediata em Sorocaba e toda a Região Metropolitana.",
    },
  ];

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Sorocaba",
    serviceName: "Renovação de AVCB em Sorocaba",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Renovação AVCB", item: "/renovacao-avcb" },
      { name: "Sorocaba", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-slate-950 border-b-4 border-red-600">
        <Image src="/images/blog/blog_hero_avcb_galpao.webp" alt="Renovação de AVCB em Sorocaba" fill className="object-cover object-center opacity-20 grayscale-[50%]" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg">
              <AlertTriangle className="w-4 h-4" /> AVCB Vencido em Sorocaba — Ação Imediata
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight text-white">
              Renovação de AVCB em Sorocaba:<br className="hidden md:block" />
              <span className="text-red-500 block mt-2">Indústrias, Shoppings e Condomínios Regularizados</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Sorocaba tem um dos maiores parques industriais do interior de SP e 3 shoppings em operação. Com o CBPMESP fiscalizando, AVCB vencido significa risco real de interdição para indústrias e fechamento de lojas.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter">
                Renovar AVCB em Sorocaba Agora
              </a>
            </div>
            <ul className="mt-10 space-y-4">
              {[
                "Especialistas em renovação para indústrias e shoppings",
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
                Renovação de AVCB em Sorocaba:<br />
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
            Consequências do<br /><span className="text-red-500">AVCB Vencido em Sorocaba</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: AlertTriangle, title: "Interdição da Indústria", text: "Indústrias têxteis e metalúrgicas em Sorocaba podem ser interditadas a qualquer momento — paralisação da produção com prejuízo direto e imediato." },
              { icon: ShieldX, title: "Shopping Fechado", text: "CBPMESP pode fechar o shopping inteiro por AVCB vencido — todas as lojas são afetadas, com impacto financeiro devastador para administração e lojistas." },
              { icon: FileCheck, title: "Bloqueio do Alvará", text: "A Prefeitura de Sorocaba bloqueia a renovação do alvará de funcionamento de estabelecimentos com AVCB vencido." },
              { icon: Clock, title: "Responsabilidade Civil", text: "Em caso de sinistro sem AVCB válido, o responsável responde civil e criminalmente — independente de seguro ou porte do estabelecimento." },
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
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Quando Renovar o AVCB em Sorocaba?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Urgente</div>
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">AVCB Vencido ou a Vencer</h3>
              <p className="text-slate-600 font-medium">AVCB expirado em Sorocaba coloca a empresa em risco imediato. Inicie o processo de renovação com 60 a 90 dias de antecedência para evitar correria de última hora.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Expansão ou Mudança de Linha</h3>
              <p className="text-slate-600 font-medium">Novas máquinas, ampliação de área ou mudança de produto fabricado exige atualização do AVCB. Em Sorocaba, isso é comum em indústrias que diversificam a produção.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Renovação do Alvará da Prefeitura</h3>
              <p className="text-slate-600 font-medium">A Prefeitura de Sorocaba exige AVCB válido para renovar o alvará. Planeje a renovação do AVCB antes do vencimento para não ter operação bloqueada.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Contrato de Locação</h3>
              <p className="text-slate-600 font-medium">Locadores de galpões industriais em Sorocaba exigem AVCB válido do locatário. Sem a renovação, o contrato pode ser rescindido por inadimplência regulatória.</p>
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
              <h4 className="text-2xl mb-4">Prazos de Renovação em Sorocaba</h4>
              <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                <li>• Indústrias e shoppings: 60 a 120 dias</li>
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
          text: "Nossa indústria têxtil em Sorocaba estava com AVCB vencido e correndo risco de interdição. A DRD2 agiu rápido — diagnóstico no dia seguinte, processo iniciado em 48h. AVCB renovado sem parar a produção.",
          author: "Cliente DRD2 Engenharia",
          role: "Diretor Industrial — Sorocaba, SP",
        }}
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">
            Perguntas Frequentes: <span className="text-red-600">Renovação AVCB Sorocaba</span>
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
          <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Atendemos Toda a Região de Sorocaba</h3>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto">Além de Sorocaba, renovamos AVCB em Votorantim, Itu, Salto, Boituva e toda a Região Metropolitana de Sorocaba.</p>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Renove o AVCB em Sorocaba Hoje</h3>
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
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">AVCB vencido é risco real de interdição em Sorocaba.</p>
          <p className="text-white text-sm font-bold mb-8">Cada dia sem renovação aumenta o risco para sua empresa e seus funcionários.</p>
          <CtaWhatsApp label="Falar com engenheiro e renovar agora" occupationType="renovacao AVCB Sorocaba" variant="primary" size="lg" centered />
        </div>
      </div>

      <InternalLinksBlock currentSlug={_slug} mode="bairro" maxLinks={6} titulo="Renovação de AVCB em Sorocaba e Região" />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/renovacao-avcb-sorocaba" />
      <ServiceBlogLinks currentSlug="/renovacao-avcb-sorocaba" />

      <NeighborhoodSilo currentSlug={_slug} />
    </>
  );
}
