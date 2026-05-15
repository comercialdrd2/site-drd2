import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, ShieldCheck, AlertTriangle, Droplets, Activity, Search, ArrowRight, Factory, FileText } from "lucide-react";
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

const _slug = "/sistema-de-sprinkler-para-industria-sao-paulo";
const _pageTitle = "Sistema de Sprinkler para Indústria em São Paulo | DRD2 Engenharia — IT 23/25";
const _pageDesc = "A DRD2 Engenharia projeta e instala sistemas de sprinkler para indústrias em SP conforme IT 23/25 e NBR 10897. Cálculo hidráulico por setor de risco, ART e laudo para AVCB industrial. Diagnóstico técnico gratuito!";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

const faqs = [
  { q: "Indústria é obrigada a ter sprinklers em São Paulo?", a: "Sim. Indústrias de risco alto (químicas, têxteis, de madeira e plástico) são obrigadas a possuir sistema de chuveiros automáticos conforme a IT 23/25 do CBPMESP, como condição para obtenção do AVCB." },
  { q: "Qual norma regula sprinklers industriais em São Paulo?", a: "A IT 23 do CBPMESP e a ABNT NBR 10897 regulamentam os Sistemas de Chuveiros Automáticos. Para indústrias de alto risco, aplicam-se também os padrões NFPA 13 e FM Global em projetos específicos." },
  { q: "Quais tipos de sprinklers são usados em indústrias?", a: "Utilizam-se principalmente sprinklers de resposta padrão (79°C a 141°C) e de alta temperatura (182°C ou mais) para áreas com calor elevado. Sistemas de pré-ação são usados em áreas com risco de acionamento acidental por dano mecânico." },
  { q: "É possível instalar sprinklers em uma indústria já construída?", a: "Sim. A DRD2 realiza projetos de retrofit para indústrias existentes, integrando o sistema à infraestrutura atual de água e adequando bomba e reservatório sem paralisar as operações produtivas." },
  { q: "Como o sistema de sprinkler industrial é dimensionado?", a: "O dimensionamento considera a classificação de ocupação (leve, ordinário ou extra risco), a densidade de descarga, a área de operação e o coeficiente k dos bicos. Usamos software especializado para garantir que o bico mais desfavorecido atinja a vazão mínima exigida pela IT 23." },
  { q: "O sistema de sprinkler substitui os hidrantes na indústria?", a: "Não. Os sistemas são complementares. O sprinkler atua no combate automático ao incêndio em estágio inicial, enquanto os hidrantes fornecem combate sustentado pelos bombeiros ou brigadistas. A IT 22 e a IT 23 regulamentam cada sistema separadamente." },
];

export default function SprinklerIndustriaPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    serviceName: "Sistema de Sprinkler para Indústria em São Paulo",
    faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Serviços", item: "/servicos" },
      { name: "Sprinklers", item: "/sprinklers" },
      { name: "Sprinkler para Indústria", item: _slug },
    ],
  });

  return (
    <>
      <JsonLD schema={_schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image src="/images/bg-galpao.jpg" alt="Área industrial fabril com equipamentos e linha de produção" fill className="object-cover object-center opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">IT 23/25 e NBR 10897 — Indústrias e Plantas Fabris</span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60">SISTEMA DE SPRINKLER PARA INDÚSTRIA</span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">EM SÃO PAULO — PROJETO E INSTALAÇÃO</span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Indústrias de alto risco exigem chuveiros automáticos dimensionados por setor produtivo. Projetamos, instalamos e certificamos com ART e laudo para AVCB industrial.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto">
              <Phone className="w-5 h-5 flex-shrink-0" /><span>SOLICITAR DIAGNÓSTICO GRATUITO</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "Sprinklers", href: "/sprinklers" }, { label: "Indústria" }]} dark />
      <TrustBar dark />

      {/* ── INTRODUÇÃO TÉCNICA 2 COLUNAS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                Sprinklers Industriais: <span className="text-red-600 not-italic font-black italic">classificação por setor de risco</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  O <strong>sistema de sprinkler para indústria</strong> em São Paulo é regulamentado pela <strong>IT 23 do CBPMESP</strong> e pela <strong>ABNT NBR 10897</strong>. Diferente de edificações comerciais, indústrias possuem setores com riscos completamente distintos — e um projeto genérico para toda a planta é tecnicamente incorreto e leva à reprovação na vistoria do Corpo de Bombeiros.
                </p>
                <p>
                  A norma classifica as áreas em três categorias: <strong>Risco Leve</strong> (escritórios internos da fábrica, área de descanso), <strong>Risco Ordinário Grupo 1 e 2</strong> (manufatura de produtos não inflamáveis, montagem mecânica) e <strong>Risco Extra</strong> (madeireiras, plásticos, tintas, solventes, armazenagem de alto risco). Para cada categoria, há uma densidade de descarga mínima em mm/min sobre uma área de operação específica.
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Densidades de descarga: o que a IT 23 exige?</h3>
                <p>
                  Para <strong>Risco Leve</strong>: densidade mínima de 4,1 mm/min sobre área de 139 m². Para <strong>Risco Ordinário G1</strong>: 8,1 mm/min sobre 139 m². Para <strong>Risco Ordinário G2</strong>: 8,1 a 12,2 mm/min sobre 139 a 210 m². Para <strong>Risco Extra G1</strong>: 12,2 mm/min sobre 260 m². Para <strong>Risco Extra G2</strong>: 16,3 mm/min sobre 260 m². Esses valores determinam a escolha dos bicos (coeficiente k), o diâmetro das tubulações e a potência da bomba dedicada.
                </p>

                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white my-10 shadow-2xl border-l-8 border-red-600">
                  <h4 className="text-xl font-black mb-4 uppercase italic tracking-tight">Atenção: Perda Total em Sinistro sem SPK</h4>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed font-medium">Indústrias têm cargas de incêndio extremamente elevadas. Sem sprinkler automático, um incêndio pode consumir o estoque e os equipamentos em menos de 10 minutos — antes de qualquer intervenção dos bombeiros ou da brigada.</p>
                  <p className="text-slate-200 text-sm font-bold uppercase italic leading-relaxed">⚠️ Seguro patrimonial de indústrias sem AVCB é automaticamente invalidado em caso de sinistro.</p>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Sistemas de Pré-Ação: quando são indicados?</h3>
                <p>
                  Em setores industriais onde o acionamento acidental de sprinklers causaria danos maiores do que o incêndio — como salas de controle com equipamentos eletrônicos sensíveis, câmaras frias ou áreas de processos especiais — recomenda-se o sistema de <strong>pré-ação seco (dry pre-action)</strong>. Nesse sistema, a tubulação permanece pressurizada com ar e a água só é liberada após a confirmação de dois sinais: detecção do incêndio e acionamento do bico termossensível.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-8 rounded-[3rem] border-2 border-slate-100 shadow-2xl relative overflow-hidden sticky top-24">
                <h3 className="text-2xl font-black text-slate-900 mb-6 italic">Diagnóstico técnico gratuito para sua Indústria</h3>
                <LeadForm variant="compact" showWrapper={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OS 3 ERROS QUE REPROVAM INDÚSTRIAS ── */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase italic">
            Os 3 Erros que <span className="text-red-500 not-italic">Reprovam Projetos SPK</span> Industriais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { e: "Erro 1", t: "Risco Único para Toda a Planta", d: "Projeto que classifica todos os setores da indústria com o mesmo risco, ignorando diferenças entre almoxarifado de plástico e área administrativa.", c: "bg-slate-900" },
              { e: "Erro 2", t: "Bicos com K Errado", d: "Bicos com coeficiente k inadequado para a densidade de descarga exigida no setor — subpressão no bico mais desfavorecido resulta em reprovação imediata.", c: "bg-red-900" },
              { e: "Erro 3", t: "Bomba sem Reserva", d: "Ausência de bomba reserva dedicada ao sistema de sprinkler — exigência para indústrias de risco ordinário e extra conforme IT 23 e NBR 10897.", c: "bg-slate-900" },
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
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">O seu sistema SPK industrial está dimensionado corretamente?</p>
          <CtaWhatsApp label="Fale com um engenheiro agora — diagnóstico gratuito" occupationType="indústria" variant="primary" centered />
        </div>
      </div>

      {/* ── SOLUÇÕES ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tighter">
            Soluções SPK Completas para <span className="text-red-600 not-italic">Indústrias</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: Search, t: "Classificação por Setor", d: "Mapeamos e classificamos cada setor produtivo (leve, ordinário, extra risco) para dimensionamento correto por área." },
              { icon: Activity, t: "Cálculo Hidráulico SPK", d: "Dimensionamento via software de bicos, ramais, subramais e bomba para atender densidade mínima em 100% da planta." },
              { icon: Factory, t: "Instalação e Retrofit", d: "Instalação de redes novas ou retrofit integrado à infraestrutura existente sem paralisar a produção industrial." },
              { icon: ShieldCheck, t: "ART e Laudo AVCB", d: "Teste hidrostático, laudo técnico e ART CREA-SP completos para aprovação do AVCB industrial na primeira vistoria." },
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
            Como executamos o <span className="text-red-500 not-italic">Projeto SPK Industrial</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", t: "Diagnóstico de Pressão", d: "Medimos pressão da rede pública e avaliamos bombas e reservatório existentes da planta industrial." },
              { id: "02", t: "Mapeamento de Risco", d: "Classificamos cada setor produtivo: almoxarifados, linhas de produção, câmaras e áreas de expedição." },
              { id: "03", t: "Cálculo Hidráulico", d: "Dimensionamos bicos (coeficiente k), ramais e bomba via software para garantir densidade mínima em toda a planta." },
              { id: "04", t: "Instalação da Rede", d: "Montagem de tubulações, bicos, VGA (Válvula de Governo e Alarme), bomba dedicada e painel de alarme." },
              { id: "05", t: "Teste de Estanqueidade", d: "Teste hidrostático em toda a rede e verificação individual de cada bico para garantia de prontidão." },
              { id: "06", t: "ART e AVCB Industrial", d: "Laudo técnico completo com relatório fotográfico e ART CREA-SP para aprovação do AVCB." },
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
          text: "A DRD2 fez o levantamento completo da nossa planta, classificou cada setor e dimensionou o SPK com precisão. AVCB industrial aprovado na primeira vistoria, sem comunique-se. Recomendo sem hesitar.",
          author: "Juliana Cardoso",
          role: "Gerente HSE — Indústria Química, Santo André SP",
        }}
      />

      {/* ── DOCUMENTAÇÃO ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação para <span className="text-red-600">AVCB com SPK Industrial</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">Para aprovação do AVCB industrial com sistema de sprinklers, o Corpo de Bombeiros exige:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Projeto de sistema de sprinklers conforme IT 23/25 e NBR 10897 com ART CREA-SP",
              "Memorial de cálculo hidráulico com classificação de risco por setor da planta",
              "Laudo de teste hidrostático em toda a rede de tubulações do sistema",
              "Certificado de conformidade dos bicos (coeficiente k, temperatura de ativação)",
              "Laudo de instalação e testes da VGA (Válvula de Governo e Alarme)",
              "Relatório de acionamento e pressão das bombas dedicadas ao sistema",
              "Laudo de instalações elétricas do painel de alarme e bombas com ART",
              "Planta de localização dos bicos e setores de risco com legenda técnica",
            ].map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-2xl text-red-900 font-bold text-sm">
            A DRD2 entrega o pacote completo de documentação para o AVCB industrial — da ART ao laudo final — eliminando o risco de exigências e segunda vistoria.
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic text-center">
              Dúvidas: <span className="text-red-600 not-italic font-black italic uppercase">Sprinkler para Indústria</span>
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
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">Não arrisque a paralisação da sua planta industrial.</p>
          <p className="text-white text-sm font-bold mb-8">Regularize com quem já aprovou centenas de indústrias em SP.</p>
          <CtaWhatsApp label="Fale agora com a DRD2 e resolva hoje" occupationType="indústria" variant="primary" size="lg" centered />
        </div>
      </div>

      <InternalLinksBlock currentSlug={_slug} mode="servico" maxLinks={8} titulo="Sprinkler para Indústria em SP" />

      <ServiceClusterLinks currentSlug="/sprinklers" />
      <ServiceBlogLinks currentSlug="/sprinklers" />

      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Sua indústria tem <span className="text-black not-italic font-black italic underline decoration-white">sprinkler aprovado pelo CBPMESP?</span>
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Garanta o AVCB industrial e proteja o patrimônio. A DRD2 dimensiona o SPK correto para cada setor da sua planta.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white">
            <Phone className="w-8 h-8 inline mr-2" /> Solicitar Projeto de Sprinkler Industrial
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">Especialistas em Indústrias | IT 23/25 — São Paulo 2026</p>
        </div>
      </section>
    </>
  );
}
