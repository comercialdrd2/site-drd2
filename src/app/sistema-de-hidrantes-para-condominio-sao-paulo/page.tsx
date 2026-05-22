import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, ShieldCheck, AlertTriangle, Waves, Beaker, Building, ArrowRight, FileText } from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import SocialProof from "@/components/SocialProof";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import InternalLinksBlock from "@/components/InternalLinksBlock";

const _slug = "/sistema-de-hidrantes-para-condominio-sao-paulo";
const _pageTitle = "Sistema de Hidrantes para Condomínio em São Paulo | DRD2 Engenharia — IT 22/25";
const _pageDesc = "A DRD2 Engenharia projeta, instala e mantém sistemas de hidrantes para condomínios em SP conforme IT 22/25. Teste de mangueiras, ART e laudo para AVCB condominial. Diagnóstico técnico gratuito!";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

const faqs = [
  { q: "Condomínio é obrigado a ter sistema de hidrantes em SP?", a: "Sim. Condomínios com mais de 2 pavimentos e área superior a 750 m², ou edifícios com mais de 12 metros de altura, são obrigados a possuir sistema de hidrantes conforme a IT 22/25 do CBPMESP." },
  { q: "Qual a frequência de manutenção do sistema de hidrantes do condomínio?", a: "A norma exige manutenção preventiva semestral do sistema e teste hidrostático anual em 100% das mangueiras de incêndio, com emissão de laudo técnico para arquivo e apresentação ao Corpo de Bombeiros na renovação do AVCB." },
  { q: "O que acontece se o condomínio não mantiver o sistema?", a: "O AVCB não é renovado, o condomínio fica irregular, a taxa de seguro sobe, o síndico fica exposto a responsabilidade civil e criminal em caso de sinistro, e o Corpo de Bombeiros pode embargar o uso do edifício." },
  { q: "As mangueiras de incêndio do condomínio têm prazo de validade?", a: "Sim. Mangueiras de incêndio devem ser submetidas ao teste hidrostático anual. A vida útil média é de 5 a 10 anos, dependendo das condições de armazenamento. Mangueiras fora do prazo devem ser substituídas imediatamente." },
  { q: "Como é feita a manutenção da bomba de incêndio do condomínio?", a: "A bomba de incêndio deve ser testada mensalmente com acionamento automático e manual. A DRD2 realiza a manutenção preventiva completa: verificação de pressão, estado da mola da válvula, nível de óleo do motor e calibração do pressostato." },
  { q: "A DRD2 atende condomínios de qualquer porte?", a: "Sim. Atendemos desde pequenos edifícios residenciais até grandes condomínios comerciais e mistos em toda a Grande São Paulo, realizando projetos novos, adequações e manutenção preventiva e corretiva." },
];

export default function HidrantesCondominioPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    serviceName: "Sistema de Hidrantes para Condomínio em São Paulo",
    faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Serviços", item: "/servicos" },
      { name: "Hidrantes", item: "/hidrantes" },
      { name: "Hidrantes para Condomínio", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image src="/images/bg-condominios.jpg" alt="Fachada e estrutura de condomínio residencial vertical" fill className="object-cover object-center opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">IT 22/25 — Condomínios Residenciais e Comerciais</span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60">SISTEMA DE HIDRANTES PARA CONDOMÍNIO</span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">EM SÃO PAULO — PROJETO, INSTALAÇÃO E MANUTENÇÃO</span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Condomínios com mais de 2 pavimentos ou 750 m² exigem sistema de hidrantes conforme IT 22/25. Garantimos AVCB em dia com projeto, instalação, manutenção e teste anual de mangueiras.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto">
              <Phone className="w-5 h-5 flex-shrink-0" /><span>SOLICITAR DIAGNÓSTICO GRATUITO</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "Hidrantes", href: "/hidrantes" }, { label: "Condomínio" }]} dark />
      <TrustBar dark />

      {/* ── INTRODUÇÃO TÉCNICA 2 COLUNAS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                Hidrantes em Condomínio: <span className="text-red-600 not-italic font-black italic">Responsabilidade do Síndico</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  O <strong>sistema de hidrantes para condomínio</strong> é uma obrigação legal regulamentada pela <strong>IT 22 do CBPMESP</strong> para edifícios com mais de 2 pavimentos, altura superior a 12 metros ou área construída acima de 750 m². Mais do que uma exigência do Corpo de Bombeiros, é uma proteção direta aos moradores e ao próprio síndico, que responde civil e criminalmente pelo estado das instalações prediais de segurança.
                </p>
                <p>
                  Na prática, a maioria dos condomínios de São Paulo possui o sistema instalado desde a construção do edifício, mas negligencia a manutenção obrigatória. Mangueiras vencidas, bombas sem calibração, abrigos danificados e registros de recalque oxidados são a realidade em muitos edifícios que tentam renovar o AVCB — e são as causas mais comuns de reprovação na vistoria do Corpo de Bombeiros.
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">O que a IT 22 exige do sistema de hidrantes do condomínio?</h3>
                <p>
                  A norma exige: <strong>manutenção preventiva semestral</strong> do sistema completo (bombas, válvulas, abrigos e registros), <strong>teste hidrostático anual obrigatório</strong> em 100% das mangueiras de incêndio (laudo assinado por engenheiro), <strong>vistoria mensal do acionamento automático</strong> das motobombas e <strong>inspeção dos abrigos</strong> (mangueiras enroladas, esguichos e chaves presentes em todos os pontos).
                </p>

                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white my-10 shadow-2xl border-l-8 border-red-600">
                  <h4 className="text-xl font-black mb-4 uppercase italic tracking-tight">Síndico: sua responsabilidade é direta</h4>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed font-medium">O Código Civil (art. 1.348) e a lei de condomínios determinam que o síndico é o responsável legal pela manutenção das instalações de segurança do edifício. Em caso de sinistro com vítimas por falha no sistema de hidrantes, o síndico responde pessoalmente — inclusive com seu CPF.</p>
                  <p className="text-slate-200 text-sm font-bold uppercase italic leading-relaxed">⚠️ AVCB vencido invalida o seguro predial do condomínio automaticamente.</p>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Teste hidrostático de mangueiras: o que é e por que é obrigatório?</h3>
                <p>
                  O teste hidrostático consiste em submeter cada mangueira de incêndio a uma pressão de teste superior à pressão de trabalho (geralmente 150% da pressão máxima), por um período mínimo de 5 minutos, verificando rupturas, vazamentos e integridade do revestimento. Mangueiras aprovadas recebem etiqueta de identificação com a data e o número do laudo. O teste deve ser realizado anualmente por empresa especializada com engenheiro responsável e ART.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-8 rounded-[3rem] border-2 border-slate-100 shadow-2xl relative overflow-hidden sticky top-24">
                <h3 className="text-2xl font-black text-slate-900 mb-6 italic">Diagnóstico técnico gratuito para o seu Condomínio</h3>
                <LeadForm variant="compact" showWrapper={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OS 3 ERROS QUE REPROVAM CONDOMÍNIOS ── */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase italic">
            Os 3 Erros que <span className="text-red-500 not-italic">Reprovam Condomínios</span> na Vistoria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { e: "Erro 1", t: "Mangueiras Vencidas", d: "Mangueiras sem laudo de teste hidrostático anual ou com etiqueta vencida — causa mais comum de reprovação na renovação do AVCB condominial.", c: "bg-slate-900" },
              { e: "Erro 2", t: "Bomba sem Manutenção", d: "Motobomba de incêndio travada por falta de uso ou com pressostato descalibrado — não aciona automaticamente quando necessário.", c: "bg-red-900" },
              { e: "Erro 3", t: "Abrigos Danificados", d: "Abrigos com vidro quebrado, mangueiras mal enroladas, esguichos ou chaves faltando — reprovação imediata na inspeção visual do vistoriador.", c: "bg-slate-900" },
            ].map((item, i) => (
              <div key={i} className={`${item.c} p-10 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-transform`}>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 block text-red-500">{item.e}</span>
                <h3 className="text-xl font-black mb-4 uppercase italic tracking-tight">{item.t}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed italic">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">O seu condomínio está pronto para a vistoria?</p>
          <CtaWhatsApp label="Fale com um engenheiro agora — diagnóstico gratuito" occupationType="condomínio" variant="primary" centered />
        </div>
      </div>

      {/* ── SOLUÇÕES ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tighter">
            Soluções Completas para <span className="text-red-600 not-italic">Condomínios</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: Building, t: "Projeto e Instalação", d: "Projeto hidráulico completo e instalação de rede de hidrantes, mangotinhos e casa de bombas conforme IT 22/25." },
              { icon: Waves, t: "Adequação e Retrofit", d: "Adequação de sistemas existentes: substituição de tubulações, modernização de bombas e abrigos de mangueiras." },
              { icon: Beaker, t: "Teste Anual de Mangueiras", d: "Teste hidrostático obrigatório em 100% das mangueiras com emissão de laudo técnico para renovação do AVCB." },
              { icon: ShieldCheck, t: "Manutenção Preventiva", d: "Contrato de manutenção semestral incluindo verificação de bombas, válvulas, abrigos e registros de recalque." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 hover:shadow-xl transition-all group">
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform"><item.icon className="w-8 h-8" /></div>
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">{item.t}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSO ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic tracking-tighter">
            Como mantemos o <span className="text-red-500 not-italic">AVCB do Condomínio em dia</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", t: "Vistoria Diagnóstica", d: "Avaliamos o estado atual de todo o sistema: tubulações, bombas, abrigos, mangueiras e válvulas." },
              { id: "02", t: "Laudo de Conformidade", d: "Emitimos laudo técnico identificando todas as não conformidades com a IT 22/25 e as ações necessárias." },
              { id: "03", t: "Execução das Adequações", d: "Realizamos todos os reparos, substituições e instalações necessárias para conformidade total." },
              { id: "04", t: "Teste de Mangueiras", d: "Teste hidrostático obrigatório anual em 100% das mangueiras com relatório técnico assinado." },
              { id: "05", t: "ART e Documentação", d: "Emissão de ART CREA-SP e entrega de toda a documentação técnica para renovação do AVCB." },
              { id: "06", t: "Contrato de Manutenção", d: "Programa de manutenção preventiva semestral para manter o sistema sempre em conformidade." },
            ].map((step, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 group hover:bg-red-600 transition-all text-left">
                <div className="text-red-500 font-black text-xs mb-4 group-hover:text-white">{step.id}</div>
                <h4 className="font-black italic uppercase mb-4 leading-tight">{step.t}</h4>
                <p className="text-sm text-slate-400 group-hover:text-white leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialProof
        testimonial={{
          text: "Contratamos a DRD2 para manutenção anual dos hidrantes do condomínio. Eles fazem o teste de mangueiras, verificam a bomba e entregam toda a documentação para renovar o AVCB. Trabalho rápido e extremamente profissional.",
          author: "Adriana Moraes",
          role: "Síndica — Condomínio Residencial, Moema SP",
        }}
      />

      {/* ── DOCUMENTAÇÃO ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação para <span className="text-red-600">Renovação do AVCB Condominial</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">Para renovar o AVCB do condomínio junto ao Corpo de Bombeiros, o síndico deve apresentar:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Laudo de teste hidrostático anual de todas as mangueiras de incêndio com ART",
              "Relatório de manutenção preventiva semestral do sistema de bombas",
              "Laudo de instalações elétricas atualizado (para painel de comando das bombas)",
              "Projeto original da rede de hidrantes ou projeto as-built atualizado",
              "Relatório de teste de vazão e pressão nos pontos mais desfavoráveis da rede",
              "Certidão de inspeção dos abrigos de mangueiras (todos os andares)",
              "AVCB ou CLCB anterior e documentação da última vistoria aprovada",
              "CNPJ do condomínio e procuração do síndico para protocolo junto ao CBPMESP",
            ].map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-2xl text-red-900 font-bold text-sm">
            A DRD2 realiza a auditoria documental e de campo antes do protocolo, identificando laudos vencidos, não conformidades e irregularidades — evitando que o condomínio leve "comunique-se" e precise de nova vistoria.
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic text-center">
              Dúvidas: <span className="text-red-600 not-italic font-black italic uppercase">Hidrantes para Condomínio</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all">
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight leading-tight">
                  {faq.q}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4">+</span>
                </summary>
                <div className="p-7 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-200 italic font-medium">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">Não arrisque a segurança dos seus moradores.</p>
          <p className="text-white text-sm font-bold mb-8">Regularize com quem já aprovou centenas de condomínios em SP.</p>
          <CtaWhatsApp label="Fale agora com a DRD2 e resolva hoje" occupationType="condomínio" variant="primary" size="lg" centered />
        </div>
      </div>

      <InternalLinksBlock currentSlug={_slug} mode="servico" maxLinks={8} titulo="Hidrantes para Condomínio em SP" />

      <ServiceClusterLinks currentSlug="/hidrantes" />
      <ServiceBlogLinks currentSlug="/hidrantes" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            O AVCB do seu condomínio <span className="text-black not-italic font-black italic underline decoration-white">está em dia?</span>
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Proteja os moradores e proteja o síndico. A DRD2 garante o sistema de hidrantes em conformidade e o AVCB renovado.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white">
            <Phone className="w-8 h-8 inline mr-2" /> Solicitar Manutenção e Laudo para Condomínio
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">Especialistas em Condomínios | IT 22/25 — São Paulo 2026</p>
        </div>
      </section>
    </>
  );
}
