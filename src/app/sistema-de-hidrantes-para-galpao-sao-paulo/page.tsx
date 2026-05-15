import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, ShieldCheck, AlertTriangle, Waves, Beaker, Building2, Factory, ArrowRight, FileText, Hammer, ClipboardList } from "lucide-react";
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

const _slug = "/sistema-de-hidrantes-para-galpao-sao-paulo";
const _pageTitle = "Sistema de Hidrantes para Galpão em São Paulo | DRD2 Engenharia — IT 22/25";
const _pageDesc = "A DRD2 Engenharia projeta e instala sistemas de hidrantes para galpões em SP conforme IT 22/25. Cálculo hidráulico, ART e laudo para AVCB. Diagnóstico técnico gratuito!";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

const faqs = [
  { q: "Galpão é obrigado a ter sistema de hidrantes em SP?", a: "Sim. Galpões com área superior a 750 m² ou risco médio/alto pela IT 22/25 do CBPMESP exigem rede de hidrantes para obtenção do AVCB." },
  { q: "Qual a IT que regula hidrantes em galpões?", a: "A IT 22 do Corpo de Bombeiros de SP regulamenta Sistemas de Hidrantes e Mangotinhos. Para galpões, o dimensionamento considera carga de incêndio e risco da atividade." },
  { q: "Qual a diferença entre hidrante e mangotinho no galpão?", a: "O hidrante usa mangueira de 63 mm ou 40 mm para maior vazão, ideal para alto risco. O mangotinho usa mangueira semi-rígida de 25 mm para primeiro combate em risco leve ou médio." },
  { q: "Como é calculada a Reserva Técnica de Incêndio (RTI) do galpão?", a: "O volume da RTI é calculado pela classificação de risco, área do galpão e número de hidrantes simultâneos exigidos pela IT 22. A DRD2 usa software hidráulico especializado nesse cálculo." },
  { q: "É possível instalar hidrantes em galpão já construído?", a: "Sim. Realizamos projetos de retrofit para galpões existentes, adequando rede, casa de bombas e reservatório às exigências da IT 22/25 sem comprometer as operações." },
  { q: "O que a DRD2 entrega ao final do projeto?", a: "Entregamos projeto executivo assinado, laudo técnico com relatório de testes (pressão e vazão), relatório fotográfico e ART para aprovação do AVCB." },
];

export default function HidrantesGalpaoPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    serviceName: "Sistema de Hidrantes para Galpão em São Paulo",
    faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Serviços", item: "/servicos" },
      { name: "Hidrantes", item: "/hidrantes" },
      { name: "Hidrantes para Galpão", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image src="/images/bg-galpao.jpg" alt="Estrutura interna de galpão industrial e logístico com pé-direito alto" fill className="object-cover object-center opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">IT 22/25 — Galpões Industriais e Logísticos</span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60">SISTEMA DE HIDRANTES PARA GALPÃO</span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">EM SÃO PAULO — PROJETO E INSTALAÇÃO</span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Galpões com área superior a 750 m² exigem sistema de hidrantes conforme IT 22/25. Projetamos, instalamos e certificamos com ART e laudo para aprovação do AVCB.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto">
              <Phone className="w-5 h-5 flex-shrink-0" /><span>SOLICITAR DIAGNÓSTICO GRATUITO</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "Hidrantes", href: "/hidrantes" }, { label: "Galpão" }]} dark />
      <TrustBar dark />

      {/* ── INTRODUÇÃO TÉCNICA 2 COLUNAS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                Hidrantes para Galpão: o que a <span className="text-red-600 not-italic font-black italic">IT 22/25 exige?</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  O <strong>sistema de hidrantes para galpão</strong> é uma exigência inegociável do Corpo de Bombeiros de São Paulo para edificações com área superior a 750 m² ou classificadas como risco médio ou alto. A <strong>IT 22 do CBPMESP</strong> regulamenta com precisão o dimensionamento hidráulico, o número de pontos de combate, a pressão mínima de operação e o volume da Reserva Técnica de Incêndio (RTI).
                </p>
                <p>
                  Em galpões industriais e logísticos, a carga de incêndio varia drasticamente conforme a atividade. Um galpão de armazenagem de plástico possui carga de incêndio muito superior à de um galpão de peças metálicas — e esse fator define diretamente quantos hidrantes devem operar simultaneamente e qual a pressão mínima no ponto mais desfavorecido da rede.
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Como funciona a classificação de risco do galpão?</h3>
                <p>
                  A IT 22 classifica as edificações em três categorias de risco: <strong>Risco Leve</strong> (almoxarifados simples, galpões de produtos não inflamáveis), <strong>Risco Médio</strong> (manufatura, distribuição, papelaria) e <strong>Risco Alto</strong> (madeireira, tintas, inflamáveis, plásticos). Cada categoria define exigências distintas de simultaneidade, pressão e vazão mínima nos hidrantes.
                </p>

                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white my-10 shadow-2xl border-l-8 border-red-600">
                  <h4 className="text-xl font-black mb-4 uppercase italic tracking-tight">Atenção: Risco de Embargo</h4>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed font-medium">Galpões em situação irregular são vistoriados pelo CBPMESP e podem receber interdição imediata das atividades, com reflexo direto no seguro patrimonial e na responsabilidade civil do gestor.</p>
                  <p className="text-slate-200 text-sm font-bold uppercase italic leading-relaxed">⚠️ O galpão alugado também exige que o locatário mantenha o AVCB compatível com a sua atividade.</p>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Reserva Técnica de Incêndio (RTI): como calcular?</h3>
                <p>
                  A RTI é o volume mínimo de água que deve estar disponível exclusivamente para o combate a incêndio, armazenado em reservatório independente. Para galpões, o cálculo considera o número de hidrantes em operação simultânea, a vazão mínima de cada ponto e o tempo de funcionamento mínimo exigido pela norma (geralmente 30 ou 60 minutos). A DRD2 Engenharia realiza esse cálculo com software especializado, garantindo que o reservatório seja dimensionado corretamente sem superdimensionamento ou subdimensionamento.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-8 rounded-[3rem] border-2 border-slate-100 shadow-2xl relative overflow-hidden sticky top-24">
                <h3 className="text-2xl font-black text-slate-900 mb-6 italic">Diagnóstico técnico gratuito para o seu Galpão</h3>
                <LeadForm variant="compact" showWrapper={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OS 3 ERROS QUE REPROVAM GALPÕES ── */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase italic">
            Os 3 Erros que <span className="text-red-500 not-italic">Reprovam Galpões</span> na Vistoria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { e: "Erro 1", t: "Bomba Subdimensionada", d: "A bomba de incêndio instalada não entrega pressão mínima de 10 mH₂O no ponto mais desfavorável da rede — causa mais comum de reprovação.", c: "bg-slate-900" },
              { e: "Erro 2", t: "RTI Insuficiente", d: "Reservatório de incêndio compartilhado com abastecimento normal ou com volume menor do que o exigido pela IT 22 para a classificação de risco do galpão.", c: "bg-red-900" },
              { e: "Erro 3", t: "Mangueiras Vencidas", d: "Mangueiras sem laudo de teste hidrostático anual ou armazenadas incorrectamente, deterioradas e sem capacidade real de operação em emergência.", c: "bg-slate-900" },
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
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">Seu galpão está livre desses erros?</p>
          <CtaWhatsApp label="Fale com um engenheiro agora — diagnóstico gratuito" occupationType="galpão industrial" variant="primary" centered />
        </div>
      </div>

      {/* ── SOLUÇÕES ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tighter">
            Sistemas de <span className="text-red-600 not-italic">Combate Obrigatórios</span> no Galpão
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: Waves, t: "Rede de Hidrantes", d: "Sistema de tubulações, bombas e abrigos para combate sustentado ao fogo com mangueiras de 40mm ou 63mm conforme IT 22." },
              { icon: Building2, t: "Mangotinhos", d: "Mangueira semi-rígida de 25mm para primeiro combate imediato em galpões de risco leve ou médio, de fácil manuseio." },
              { icon: Beaker, t: "Reservatório RTI", d: "Volume de água exclusivo para incêndio, calculado pelo número de hidrantes simultâneos e tempo de operação mínimo." },
              { icon: ShieldCheck, t: "Casa de Bombas", d: "Conjunto motobomba dedicado com acionamento automático por pressostato e painel de comando supervisionado." },
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

      {/* ── PROCESSO PASSO A PASSO ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase italic tracking-tighter">
            Como funciona a <span className="text-red-500 not-italic">Implantação no Galpão</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", t: "Vistoria Técnica", d: "Levantamento em campo: área, pé-direito, atividade, carga de incêndio e infraestrutura existente (reservatório, bombas, rede de água)." },
              { id: "02", t: "Classificação de Risco", d: "Enquadramos o galpão nas tabelas da IT 22 para definir exigências: número de hidrantes simultâneos, vazão e pressão mínima." },
              { id: "03", t: "Cálculo Hidráulico", d: "Dimensionamento via software de bombas, RTI, diâmetro de tubulações e posicionamento dos abrigos de mangueiras." },
              { id: "04", t: "Execução da Rede", d: "Instalação de tubulações ranhuradas (Grooved), abrigos, mangotinhos, hidrante de recalque e conjunto motobomba." },
              { id: "05", t: "Testes e Validação", d: "Teste hidrostático de mangueiras e teste de vazão/pressão em 100% dos pontos da rede para validação completa." },
              { id: "06", t: "ART e Laudo Final", d: "ART CREA-SP, projeto as-built, laudo técnico e relatório fotográfico para aprovação do AVCB." },
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

      {/* ── SOCIAL PROOF ── */}
      <SocialProof
        testimonial={{
          text: "A DRD2 instalou toda a rede de hidrantes do nosso galpão logístico de 4.000 m² em tempo recorde. O AVCB foi aprovado na primeira vistoria sem nenhum comunique-se. Equipe técnica impecável.",
          author: "Marcos Albuquerque",
          role: "Gerente de Operações — Galpão Logístico, Guarulhos SP",
        }}
      />

      {/* ── DOCUMENTAÇÃO NECESSÁRIA ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessária para <span className="text-red-600">AVCB do Galpão</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">Para protocolar o AVCB junto ao Corpo de Bombeiros, o galpão precisa apresentar:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Planta baixa atualizada ou levantamento arquitetônico do galpão com área total",
              "Memorial descritivo da atividade desenvolvida e classificação de risco",
              "Projeto de rede de hidrantes conforme IT 22/25 com ART registrada no CREA-SP",
              "Laudo de teste hidrostático de todas as mangueiras de incêndio",
              "Laudo de instalações elétricas com ART (para acionamento das bombas)",
              "Relatório de testes de vazão e pressão nos pontos de hidrantes",
              "Projeto hidráulico com cálculo de RTI, bombas e reservatório",
              "CNPJ e documentação do responsável legal pelo estabelecimento",
            ].map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-2xl text-red-900 font-bold text-sm">
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergências de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros — evitando exigências e atrasos.
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic text-center">
              Dúvidas: <span className="text-red-600 not-italic font-black italic uppercase">Hidrantes para Galpão</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all hover:bg-slate-50">
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
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">Não arrisque o embargo do seu galpão.</p>
          <p className="text-white text-sm font-bold mb-8">Regularize com quem já aprovou centenas de galpões e indústrias em SP.</p>
          <CtaWhatsApp label="Fale agora com a DRD2 e resolva hoje" occupationType="galpão industrial" variant="primary" size="lg" centered />
        </div>
      </div>

      <InternalLinksBlock currentSlug={_slug} mode="servico" maxLinks={8} titulo="Hidrantes para Galpão em SP" />

      <ServiceClusterLinks currentSlug="/hidrantes" />
      <ServiceBlogLinks currentSlug="/hidrantes" />

      <NeighborhoodSilo currentSlug={_slug} />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Seu galpão está <span className="text-black not-italic font-black italic underline decoration-white">em conformidade com a IT 22?</span>
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Evite embargo, multa, interdição e bloqueio de licenças e garanta o AVCB. A DRD2 Engenharia realiza o diagnóstico completo e entrega o projeto aprovado.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white">
            <Phone className="w-8 h-8 inline mr-2" /> Solicitar Projeto de Hidrantes para Galpão
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">Especialistas em Galpões e Armazéns | IT 22/25 — São Paulo 2026</p>
        </div>
      </section>
    </>
  );
}
