import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, ShieldCheck, AlertTriangle, Waves, Beaker, Factory, ArrowRight, FileText, Hammer } from "lucide-react";
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

const _slug = "/sistema-de-hidrantes-para-industria-sao-paulo";
const _pageTitle = "Sistema de Hidrantes para Indústria em São Paulo | DRD2 Engenharia — IT 22/25";
const _pageDesc = "A DRD2 Engenharia projeta e instala sistemas de hidrantes para indústrias em SP conforme IT 22/25. Cálculo de carga de incêndio por setor, ART e laudo para AVCB industrial. Diagnóstico técnico gratuito!";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: _slug },
};

const faqs = [
  { q: "Indústria é obrigada a ter sistema de hidrantes em SP?", a: "Sim. Indústrias com área superior a 750 m² ou classificadas como risco médio/alto pela IT 22/25 do CBPMESP são obrigadas a possuir rede de hidrantes para obtenção e renovação do AVCB." },
  { q: "Qual IT regula hidrantes industriais em São Paulo?", a: "A IT 22 do CBPMESP regulamenta Sistemas de Hidrantes e Mangotinhos. Para indústrias, o dimensionamento é mais rigoroso pois considera a carga de incêndio real das matérias-primas e processos produtivos." },
  { q: "Como a carga de incêndio afeta o projeto de hidrantes da indústria?", a: "A carga de incêndio específica de cada indústria define a classificação de risco (leve, médio ou alto), o que determina o número de hidrantes em operação simultânea, a pressão mínima, a vazão e o volume da Reserva Técnica de Incêndio (RTI)." },
  { q: "A indústria precisa de bomba de incêndio dedicada?", a: "Sim. A norma exige que o conjunto motobomba de incêndio seja exclusivo para o sistema de combate a incêndio, não podendo ser compartilhado com abastecimento normal. A DRD2 projeta e instala a casa de bombas completa." },
  { q: "O sistema de hidrantes pode ser integrado com sprinklers na indústria?", a: "Sim, quando o projeto é bem executado. A DRD2 dimensiona sistemas combinados com reservatório único e bombas dedicadas, garantindo que a ativação de um sistema não comprometa a pressão do outro, conforme IT 22 e IT 23." },
  { q: "Quanto tempo demora o projeto e instalação para indústria?", a: "Em média: 5 a 10 dias úteis para o projeto hidráulico completo e 15 a 45 dias para execução, testes e entrega de ART, variando conforme o porte da indústria." },
];

export default function HidrantesIndustriaPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
    slug: _slug,
    title: _pageTitle,
    description: _pageDesc,
    serviceName: "Sistema de Hidrantes para Indústria em São Paulo",
    faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Serviços", item: "/servicos" },
      { name: "Hidrantes", item: "/hidrantes" },
      { name: "Hidrantes para Indústria", item: _slug },
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
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">IT 22/25 — Indústrias e Parques Fabris</span>
            <h1 className="font-extrabold mb-4 leading-tight tracking-tight uppercase text-white flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.18em] opacity-60">SISTEMA DE HIDRANTES PARA INDÚSTRIA</span>
              <span className="text-2xl md:text-3xl lg:text-4xl italic text-red-500 mt-1 block leading-none">EM SÃO PAULO — PROJETO E INSTALAÇÃO</span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl border-l-4 border-red-600 pl-6 py-1">
              Indústrias exigem dimensionamento especializado da carga de incêndio por setor produtivo. Projetamos, instalamos e certificamos com ART e laudo para AVCB industrial.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1EBE5A] text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all flex sm:inline-flex items-center justify-center gap-3 uppercase tracking-tighter text-base w-full sm:w-auto">
              <Phone className="w-5 h-5 flex-shrink-0" /><span>SOLICITAR DIAGNÓSTICO GRATUITO</span>
            </a>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviços", href: "/servicos" }, { label: "Hidrantes", href: "/hidrantes" }, { label: "Indústria" }]} dark />
      <TrustBar dark />

      {/* ── INTRODUÇÃO TÉCNICA 2 COLUNAS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                Hidrantes Industriais: o que a <span className="text-red-600 not-italic font-black italic">IT 22/25 exige?</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  O <strong>sistema de hidrantes para indústria</strong> em São Paulo é regulamentado pela <strong>IT 22 do CBPMESP</strong> e exige dimensionamento rigoroso baseado na carga de incêndio real de cada setor da planta. Diferente de edificações comerciais ou residenciais, indústrias apresentam variações enormes de risco: uma linha de montagem metálica possui carga de incêndio muito inferior a um setor de pintura ou de armazenagem de solventes.
                </p>
                <p>
                  Esse fato torna o projeto de hidrantes industrial um trabalho de engenharia especializada — não um produto de prateleira. Cada setor da planta deve ser avaliado individualmente para determinar a classificação de risco (Leve, Médio ou Alto), o que define diretamente o número de hidrantes em operação simultânea, a pressão mínima em cada ponto e o volume da Reserva Técnica de Incêndio (RTI).
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Tabelas da IT 22: o que cada categoria exige?</h3>
                <p>
                  <strong>Risco Leve (Grupo 1):</strong> pressão mínima de 10 mH₂O, 1 hidrante em operação simultânea, RTI calculada para 30 minutos. <strong>Risco Médio (Grupo 2):</strong> pressão mínima de 15 mH₂O, 2 hidrantes simultâneos, RTI para 60 minutos. <strong>Risco Alto (Grupo 3):</strong> pressão mínima de 20 mH₂O, 3 ou mais hidrantes simultâneos, RTI para 60 minutos ou mais. Para indústrias de risco extra-alto (inflamáveis, explosivos), aplicam-se exigências ainda mais rígidas com revisão caso a caso.
                </p>

                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white my-10 shadow-2xl border-l-8 border-red-600">
                  <h4 className="text-xl font-black mb-4 uppercase italic tracking-tight">Atenção: Responsabilidade do Responsável Técnico</h4>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed font-medium">Em caso de sinistro em indústria sem AVCB válido ou com sistema de hidrantes reprovado, o diretor de segurança e o representante legal respondem civil e penalmente pelo ocorrido, além da invalidação total do seguro patrimonial.</p>
                  <p className="text-slate-200 text-sm font-bold uppercase italic leading-relaxed">⚠️ Instalações alugadas: o locatário industrial é responsável por manter o AVCB adequado à sua atividade e carga de incêndio real.</p>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-4 uppercase italic tracking-tighter">Casa de Bombas Industrial: exigências específicas</h3>
                <p>
                  A IT 22 exige que o sistema de bombas de incêndio da indústria seja composto por uma <strong>bomba principal</strong> (elétrica) e uma <strong>bomba reserva</strong> (motor a diesel ou elétrica de circuito independente), além de uma <strong>bomba de pressurização (jockey)</strong> para manter a rede pressurizada em regime de espera. Cada bomba deve ser testada mensalmente com acionamento automático e manual documentado.
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
            Os 3 Erros que <span className="text-red-500 not-italic">Reprovam Indústrias</span> na Vistoria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { e: "Erro 1", t: "Carga de Incêndio Ignorada", d: "Projeto genérico que não considera a carga de incêndio real de cada setor produtivo, gerando subpressão nos pontos de alto risco.", c: "bg-slate-900" },
              { e: "Erro 2", t: "Bomba Reserva Ausente", d: "Ausência da bomba reserva (diesel) exigida pela IT 22 para indústrias de risco médio e alto, ou bomba jockey com pressostato descalibrado.", c: "bg-red-900" },
              { e: "Erro 3", t: "RTI Compartilhada", d: "Reservatório de incêndio compartilhado com abastecimento do processo produtivo, reduzindo o volume disponível em emergência abaixo do mínimo normativo.", c: "bg-slate-900" },
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
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">Sua planta industrial está livre desses erros?</p>
          <CtaWhatsApp label="Fale com um engenheiro agora — diagnóstico gratuito" occupationType="indústria" variant="primary" centered />
        </div>
      </div>

      {/* ── SOLUÇÕES ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center mb-16 uppercase italic tracking-tighter">
            Soluções Completas para <span className="text-red-600 not-italic">Indústrias</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: Factory, t: "Levantamento de Carga", d: "Cálculo da carga de incêndio real de cada setor da indústria para dimensionamento correto e classificação de risco." },
              { icon: Waves, t: "Projeto Hidráulico", d: "Dimensionamento de bombas (principal, reserva e jockey), RTI e rede de tubulações para simultaneidade exigida pela IT 22." },
              { icon: Beaker, t: "Instalação e Testes", d: "Execução da rede, casa de bombas completa, abrigos e teste hidrostático com laudo técnico assinado por engenheiro." },
              { icon: ShieldCheck, t: "ART e AVCB Industrial", d: "Documentação técnica completa — ART CREA-SP, projeto executivo e relatório fotográfico — para aprovação do AVCB." },
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
            Como funciona o <span className="text-red-500 not-italic">Projeto Industrial</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "01", t: "Vistoria e Levantamento", d: "Mapeamos área, setores produtivos, estoque e matérias-primas para calcular a carga de incêndio real de cada departamento." },
              { id: "02", t: "Classificação IT 22", d: "Classificamos cada setor da indústria (leve, médio ou alto risco) e definimos os parâmetros do projeto hidráulico." },
              { id: "03", t: "Cálculo Hidráulico", d: "Dimensionamento de bombas (principal, reserva e jockey), RTI, tubulações e abrigos para a simultaneidade exigida." },
              { id: "04", t: "Execução e Instalação", d: "Montagem da rede de hidrantes, casa de bombas com painel elétrico de comando supervisionado e registro de recalque." },
              { id: "05", t: "Testes e Validação", d: "Teste hidrostático de mangueiras e teste de vazão/pressão nos pontos mais desfavoráveis da rede." },
              { id: "06", t: "ART e AVCB", d: "ART CREA-SP, projeto as-built, laudo técnico e relatório fotográfico para aprovação do AVCB industrial." },
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
          text: "A DRD2 fez o levantamento completo da nossa planta industrial e dimensionou o sistema de hidrantes para cada setor. O AVCB industrial foi aprovado na primeira vistoria. Trabalho técnico de altíssimo nível.",
          author: "Ricardo Fernandes",
          role: "Diretor de Segurança — Indústria Metalúrgica, São Bernardo do Campo SP",
        }}
      />

      {/* ── DOCUMENTAÇÃO ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação para <span className="text-red-600">AVCB Industrial</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">Para protocolar o AVCB industrial junto ao Corpo de Bombeiros, a indústria precisa apresentar:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Planta baixa atualizada de toda a planta industrial com área e uso de cada setor",
              "Memorial descritivo das atividades e matérias-primas com classificação de risco",
              "Projeto de rede de hidrantes conforme IT 22/25 com ART registrada no CREA-SP",
              "Laudo de teste hidrostático de todas as mangueiras de incêndio",
              "Laudo de instalações elétricas e do painel de comando das bombas",
              "Relatório de testes de vazão e pressão em todos os pontos de hidrante",
              "Cálculo de RTI e dimensionamento das bombas (principal, reserva e jockey)",
              "Laudo de SPDA se houver estrutura acima de 15 metros ou tanques de combustível",
            ].map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-2xl text-red-900 font-bold text-sm">
            A DRD2 realiza auditoria documental gratuita antes do protocolo, identificando laudos vencidos, divergências de área e irregularidades antes da submissão ao Corpo de Bombeiros.
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic text-center">
              Dúvidas: <span className="text-red-600 not-italic font-black italic uppercase">Hidrantes para Indústria</span>
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
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">Não arrisque a paralisação da sua planta.</p>
          <p className="text-white text-sm font-bold mb-8">Regularize com quem já aprovou centenas de indústrias em SP.</p>
          <CtaWhatsApp label="Fale agora com a DRD2 e resolva hoje" occupationType="indústria" variant="primary" size="lg" centered />
        </div>
      </div>

      <InternalLinksBlock currentSlug={_slug} mode="servico" maxLinks={8} titulo="Hidrantes para Indústria em SP" />

      <ServiceClusterLinks currentSlug="/hidrantes" />
      <ServiceBlogLinks currentSlug="/hidrantes" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug={_slug} />

      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Sua indústria está <span className="text-black not-italic font-black italic underline decoration-white">protegida e em conformidade?</span>
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Evite embargo, multa, interdição e bloqueio de licenças da planta e garanta o AVCB industrial. A DRD2 faz o diagnóstico completo e entrega o projeto aprovado.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white">
            <Phone className="w-8 h-8 inline mr-2" /> Solicitar Projeto de Hidrantes Industrial
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">Especialistas em Indústrias | IT 22/25 — São Paulo 2026</p>
        </div>
      </section>
    </>
  );
}
