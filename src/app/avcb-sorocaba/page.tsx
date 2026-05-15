import Image from "next/image";
import {
  CheckCircle2, ShieldAlert, BadgeInfo,
  MapPin, Map, Building2, Building, Factory, Store, Warehouse,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import InternalLinksBlock from "@/components/InternalLinksBlock";

const _slug = "/avcb-sorocaba";
const _pageTitle = "AVCB em Sorocaba SP | Engenheiro para Indústrias, Shoppings e Condomínios";
const _pageDesc = "AVCB em Sorocaba com engenheiro especializado. Regularização para indústrias, shoppings, condomínios e comércio. Cobertura Campolim, Centro e Éden. DRD2 Engenharia.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

export default function AvcbSorocabaPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "AVCB em Sorocaba segue as mesmas regras do CBPMESP?",
      answer: "Sim. Sorocaba é atendida pelo CBPMESP, com as mesmas Instruções Técnicas do estado. O processo e as exigências são idênticos à capital. A DRD2 tem experiência consolidada com esse órgão.",
    },
    {
      question: "Indústria têxtil ou metalúrgica em Sorocaba — o AVCB tem exigências específicas?",
      answer: "Sim. Indústrias têxteis trabalham com materiais de alta combustibilidade e indústrias metalúrgicas com inflamáveis e altas temperaturas. O CBPMESP classifica o risco de cada operação e define os sistemas proporcionais. A DRD2 já executou projetos nesse segmento.",
    },
    {
      question: "Shopping em Sorocaba — o AVCB pode ser feito com o shopping em operação?",
      answer: "Sim. A DRD2 conduz o processo de AVCB e renovação em shoppings em plena operação, com planejamento de vistoria que minimiza impacto ao funcionamento. Shoppings de Sorocaba têm exigências específicas de rotas de fuga e sistemas de alarme.",
    },
    {
      question: "Condomínio em Campolim sem AVCB — o síndico responde?",
      answer: "Sim. O síndico responde civil e criminalmente em caso de sinistro sem AVCB válido. A DRD2 regulariza condomínios residenciais e comerciais em toda a região de Sorocaba com prazo e custo definidos previamente.",
    },
    {
      question: "A DRD2 atende Sorocaba com a mesma qualidade que São Paulo?",
      answer: "Sim. Nossa equipe técnica atende Sorocaba com o mesmo padrão de qualidade aplicado na capital. Visitas técnicas, projetos e acompanhamento do processo seguem o mesmo nível, com resposta em até 24h.",
    },
  ];

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Sorocaba",
    serviceName: "AVCB em Sorocaba",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Regiões", item: "/avcb-sao-paulo" },
      { name: "Sorocaba", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image src="/images/blog/blog_hero_avcb_galpao.webp" alt="Regularização de AVCB em Sorocaba" fill className="object-cover object-center opacity-30 grayscale-[50%]" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> 7ª Maior Cidade de SP
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB em Sorocaba:<br className="hidden md:block" />
              <span className="text-red-500 block mt-2">Regularização para Indústrias, Shoppings e Condomínios</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              Sorocaba é um dos maiores polos industriais do interior de São Paulo, com tradição em têxteis, metalurgia e um comércio em expansão. Com o CBPMESP fiscalizando ativamente, sem AVCB, sua empresa está vulnerável a interdições e multas.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter">
                Falar com engenheiro especialista (Sorocaba)
              </a>
            </div>
            <ul className="mt-10 space-y-4">
              {[
                "Especialistas em indústrias têxteis, metalúrgicas e químicas",
                "Mesmas ITs do CBPMESP — rigor técnico aplicado na capital",
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
                Engenheiro de AVCB em Sorocaba:<br />
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
                { label: "Polo", sub: "Industrial do Interior" },
                { label: "+160", sub: "Empresas Regularizadas" },
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
            Por que Sorocaba tem<br /><span className="text-red-500">Alta Demanda de AVCB?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: Factory, title: "Polo Industrial", text: "Sorocaba tem tradição em têxteis, metalurgia e indústria química — cada setor com exigências específicas do CBPMESP para proteção contra incêndio." },
              { icon: Store, title: "Comércio Crescente", text: "3 shoppings em operação e um comércio de rua consolidado no Centro e Campolim — alta demanda de AVCB e CLCB para licenciamento municipal." },
              { icon: Warehouse, title: "Logística e CD", text: "Posição estratégica na rodovia Castelo Branco concentra centros de distribuição com exigência de AVCB para contratos com grandes clientes." },
              { icon: Building2, title: "Expansão Residencial", text: "Novos condomínios em Campolim, Éden e Santa Rosália com crescimento acelerado e necessidade de regularização desde a entrega." },
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
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Principais Regiões Atendidas em Sorocaba</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Alta Demanda</div>
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Parque Campolim / Jardim Emília</h3>
              <p className="text-slate-600 font-medium">Área de maior crescimento imobiliário de Sorocaba — condomínios de alto padrão com demanda crescente de AVCB e renovação dentro do prazo.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Centro / Santa Rosália</h3>
              <p className="text-slate-600 font-medium">Comércio tradicional e shoppings com alta rotatividade de licenciamento — CLCB e AVCB com prazos agressivos para não perder o alvará municipal.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Além Paraíba / Distrito Industrial</h3>
              <p className="text-slate-600 font-medium">Concentração de indústrias têxteis e metalúrgicas com processos de alto risco — projetos de AVCB de média e alta complexidade.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Éden / Wanel Ville</h3>
              <p className="text-slate-600 font-medium">Bairros em expansão com demanda de AVCB para novos empreendimentos comerciais e residenciais de médio porte.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter">
            Tipos de AVCB Comuns em <span className="text-red-600">Sorocaba</span>
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-50 border-l-8 border-red-600 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏭 AVCB para Indústrias Têxteis e Metalúrgicas</h3>
              <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">A tradição industrial de Sorocaba exige AVCB específico para cada tipo de processo. Indústrias têxteis com alta carga de material combustível e metalúrgicas com processos inflamáveis têm classificação de risco elevada no CBPMESP.</p>
            </div>
            <div className="bg-slate-50 border-l-8 border-red-900 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🛍️ AVCB para Shoppings e Centros Comerciais</h3>
              <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Sorocaba tem 3 shoppings em operação — todos exigem AVCB válido para funcionar. O CBPMESP fiscaliza rotas de fuga, sistemas de alarme e brigada de incêndio com rigor proporcional ao fluxo de pessoas.</p>
            </div>
            <div className="bg-slate-50 border-l-8 border-slate-800 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏢 AVCB para Condomínios e Comércio</h3>
              <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Novos empreendimentos em Campolim e Éden precisam do AVCB na entrega. Comércios de rua em Santa Rosália e Centro utilizam o CLCB simplificado para agilizar a licença municipal.</p>
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
                <li>• Indústrias e shoppings: 90 a 180 dias</li>
                <li>• Condomínios com sistemas vigentes: 60 a 90 dias</li>
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
          text: "A DRD2 regularizou nossa indústria em Sorocaba com agilidade e total transparência. Projeto aprovado sem pendências, prazo cumprido e custo dentro do orçamento. Com certeza vou indicar para outros empresários da região.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresário Industrial — Sorocaba, SP",
        }}
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">
            Perguntas Frequentes: <span className="text-red-600">AVCB Sorocaba</span>
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
          <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-8">Além de Sorocaba, a DRD2 atende Votorantim, Itu, Salto, Boituva e toda a Região Metropolitana de Sorocaba com o mesmo padrão técnico da capital.</p>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Regularização em Sorocaba</h3>
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
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">Não arrisque seu negócio em Sorocaba.</p>
          <p className="text-white text-sm font-bold mb-8">Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.</p>
          <CtaWhatsApp label="Fale agora com a DRD2 e resolva hoje" occupationType="imóvel em Sorocaba" variant="primary" size="lg" centered />
        </div>
      </div>

      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">
            Documentação Necessária para <span className="text-red-600">AVCB em Sorocaba</span>
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergências de área, laudos vencidos e irregularidades antes de submeter o processo ao CBPMESP de Sorocaba.
          </div>
        </div>
      </section>

      <InternalLinksBlock currentSlug={_slug} mode="bairro" maxLinks={6} titulo="Serviços de AVCB em Sorocaba e Região" />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/avcb-sorocaba" />
      <ServiceBlogLinks currentSlug="/avcb-sorocaba" />

      <NeighborhoodSilo currentSlug={_slug} />
    </>
  );
}
