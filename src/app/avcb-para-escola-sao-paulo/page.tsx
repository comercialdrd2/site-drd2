import Link from "next/link";
import Image from "next/image";
import { 
  Phone, CheckCircle2, ShieldAlert, FileCheck, ArrowRight, ShieldCheck, 
  GraduationCap, Activity, Search, Award, Zap, Bell, Lightbulb, MapPin, 
  Scale, Clock, Building, ClipboardList, Users, BookOpen, Hammer, AlertCircle
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { servicesData } from "@/data/services";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";

const _pageTitle = "AVCB para Escola em São Paulo | DRD2 Engenharia";
const _pageDesc = "Escola sem AVCB em São Paulo arrisca embargo, multa e bloqueio do credenciamento no MEC. Grupo E, evacuação de crianças, brigada e saídas dimensionadas. DRD2 Engenharia regulariza.";

export const metadata = {
  title: "AVCB para Escola em São Paulo | DRD2 Engenharia",
  description: "Escola sem AVCB em São Paulo arrisca embargo, multa e bloqueio do credenciamento no MEC. Grupo E, evacuação de crianças, brigada e saídas dimensionadas. DRD2 Engenharia regulariza.",
  alternates: {
    canonical: "/avcb-para-escola-sao-paulo",
  },
};

export default function AVCBEscolaMasterPage() {
  const service = servicesData["avcb-para-escola-sao-paulo"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/avcb-para-escola-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "AVCB para Escolas e Faculdades SP",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB para Escolas SP", item: "/avcb-para-escola-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO — VERSÃO 10/10 MASTER ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:flex items-center bg-slate-950 border-b-8 border-red-600 ">
        <Image
          src="/images/hero-escola.webp"
          alt="Segurança contra incêndio em escola moderna com alunos e professora em São Paulo"
          fill
          className="object-cover object-center opacity-70"
          priority
          sizes="100vw"
          quality={70}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20 italic">
              GRUPO E — INSTITUIÇÕES DE ENSINO — REGULARIZAÇÃO 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">AVCB PARA</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                ESCOLA EM SP
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl">
              Escola sem AVCB em São Paulo arrisca interdição, multa e — o mais grave para diretores — <strong className="text-red-400">bloqueio do credenciamento no MEC e no INEP</strong>. O Corpo de Bombeiros aplica critérios mais rígidos em escolas pela vulnerabilidade das crianças: evacuação guiada, brigada formada e saídas dimensionadas por densidade de alunos. A DRD2 regulariza do Grupo E ao protocolo final sem interromper as aulas.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink} 
                className="bg-[#25D366] hover:bg-[#1EBE5A] hover:text-white hover:text-[#25D366] text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366]"
              >
                <Phone className="w-6 h-6" /> Falar com engenheiro especialista Especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB + TRUST BAR ── */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "AVCB por Ocupação", href: "/servicos" },
          { label: "AVCB para Escola em SP" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── O QUE É E POR QUE PRECISA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">
            O que é o AVCB e por que <span className="text-red-600 not-italic">sua escola precisa dele</span>
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
            <p>
              O Auto de Vistoria do Corpo de Bombeiros (AVCB) é o documento que comprova que o imóvel atende a todas as exigências de segurança contra incêndio e pânico do Estado de São Paulo.
            </p>
            <p>
              Sem ele, escolas ficam sujeitas a multas, interdição e, principalmente, <strong>exposição a riscos reais para alunos, professores e funcionários.</strong>
            </p>
            <p>
              Para escolas particulares e faculdades, o AVCB é também condição para o credenciamento e recredenciamento no MEC e no INEP. A ausência ou vencimento do documento pode bloquear o processo de autorização de cursos e a renovação do reconhecimento institucional — uma consequência muito mais grave do que a multa do Corpo de Bombeiros.
            </p>
            <div className="bg-red-50 p-8 rounded-[2rem] border-l-8 border-red-600 italic font-bold text-red-900 text-base">
              Escolas de menor porte podem se enquadrar no CLCB (Certificado de Licença do Corpo de Bombeiros), modalidade simplificada para edificações com área e risco compatíveis. A DRD2 identifica o enquadramento correto para cada caso antes de iniciar qualquer processo.
            </div>
          </div>
        </div>
      </section>

      {/* ── ENQUADRAMENTO TÉCNICO ── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">
            Enquadramento técnico de escolas no CBPMESP — Grupo E
          </h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-medium">
            <p>
              Escolas, faculdades, creches, cursos livres e centros de treinamento são classificados no <strong>Grupo E — Educacional</strong>, conforme a IT-02/2019 do CBPMESP. O enquadramento é mais exigente do que o comércio varejista justamente porque o público é majoritariamente vulnerável — crianças e jovens que precisam ser guiados em situações de emergência.
            </p>
            <p>
              A <strong>IT-08 do CBPMESP</strong> é a instrução técnica específica para edificações educacionais e define critérios exclusivos: largura mínima de corredores calculada por densidade de alunos, distância máxima percorrida até a saída de emergência reduzida em relação a outros grupos, e exigência de rota de fuga sinalizada com contraste visual adequado para crianças.
            </p>
            <p>
              Escolas com área total abaixo do limite definido pela IT-02 podem obter o CLCB — processo simplificado com menos exigências e prazo mais curto. A DRD2 define na vistoria inicial qual dos dois processos se aplica, evitando que sua escola protocole como AVCB o que poderia ser aprovado como CLCB — pagando mais caro e esperando mais tempo sem necessidade.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUAIS ESCOLAS PRECISAM ── */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
              Quais escolas precisam de <span className="text-red-600 not-italic">AVCB em São Paulo</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">De acordo com a IT-02 do CBPMESP e o Decreto nº 69.118/2024, são obrigadas a obter AVCB ou CLCB:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Educação Básica", d: "Educação infantil, fundamental e médio.", i: <GraduationCap className="w-10 h-10" /> },
              { t: "Cursos Livres", d: "Idiomas, preparatórios e treinamentos.", i: <BookOpen className="w-10 h-10" /> },
              { t: "Ensino Superior", d: "Faculdades, universidades e centros técnicos.", i: <Building className="w-10 h-10" /> },
              { t: "Artes e Lazer", d: "Escolas de dança, música e artes.", i: <Activity className="w-10 h-10" /> },
              { t: "Cuidado Infantil", d: "Creches e berçários com alta vulnerabilidade.", i: <Users className="w-10 h-10" /> },
              { t: "Enquadramento Grupo E", d: "Conforme área total, altura e pavimentos.", i: <Scale className="w-10 h-10" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform">{item.i}</div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tight">{item.t}</h3>
                <p className="text-slate-400 font-medium leading-relaxed italic text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SISTEMAS OBRIGATÓRIOS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center text-4xl md:text-5xl font-black text-slate-900 mb-16 tracking-tighter uppercase italic">
            Sistemas de <span className="text-red-600 not-italic">Segurança Obrigatórios para Escolas no CBPMESP</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Rotas de Fuga (IT-11)", d: "Dimensionamento correto de corredores, escadas e portas conforme lotação.", i: <ArrowRight className="w-8 h-8"/> },
              { t: "Iluminação (IT-18)", i: <Zap className="w-8 h-8"/>, d: "Blocos autônomos com 1h de duração em todas as rotas de saída." },
              { t: "Sinalização (IT-20)", i: <Bell className="w-8 h-8"/>, d: "Placas fotoluminescentes indicando saídas, extintores e hidrantes." },
              { t: "Extintores (IT-21)", i: <ShieldAlert className="w-8 h-8"/>, d: "Distribuição estratégica por classe de fogo com manutenção em dia." },
              { t: "Hidrantes (IT-22)", i: <MapPin className="w-8 h-8"/>, d: "Projeto hidráulico completo exigido em edificações de maior porte." },
              { t: "Alarme e Detecção", i: <AlertCircle className="w-8 h-8"/>, d: "Obrigatório acima de determinada área para garantir evacuação segura." },
              { t: "Brigada (IT-16/17)", i: <Users className="w-8 h-8"/>, d: "Treinamento de funcionários e elaboração do Plano de Emergência." },
              { t: "SPDA (Para-raios)", i: <Zap className="w-8 h-8"/>, d: "Proteção obrigatória conforme altura ou características do risco (ABNT NBR 5419)." }
            ].map((sys, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 shadow-lg group hover:bg-slate-950 transition-all">
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform">{sys.i}</div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-white mb-4 uppercase italic tracking-tight">{sys.t}</h3>
                <p className="text-slate-600 group-hover:text-slate-400 font-medium text-sm leading-relaxed">{sys.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OS 4 RISCOS ── */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic text-center">
            Os 4 riscos que mais geram embargo em escolas e faculdades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                t: "1. Corredores e saídas subdimensionados para a lotação real",
                d: "Escolas que cresceram — novas turmas, salas adaptadas — sem adequar as rotas de fuga são reprovadas na vistoria. A lotação real costuma ser maior do que a dimensionada no projeto original, tornando as saídas insuficientes pela IT-11.",
              },
              {
                t: "2. Brigada de incêndio escolar sem treinamento atualizado",
                d: "O CBPMESP exige brigada formalmente constituída, com treinamento documentado e válido. Escolas com alta rotatividade de funcionários têm a certificação vencida com frequência — causa direta de exigência em vistoria.",
              },
              {
                t: "3. AVCB vencido com credenciamento MEC em andamento",
                d: "Diretores que não renovam o AVCB antes de protocolar o recredenciamento no MEC descobrem tardiamente que o MEC/INEP consulta a regularidade do Corpo de Bombeiros. A irregularidade paralisa o processo de autorização de cursos.",
              },
              {
                t: "4. Sinalização fora da altura adequada para crianças",
                d: "A sinalização fotoluminescente precisa estar posicionada em altura visível para crianças. Placas instaladas a 2,20m do piso — padrão para adultos — são consideradas não conformes em ambientes de educação infantil pela IT-20.",
              },
            ].map((risk, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight underline decoration-red-600 decoration-4 underline-offset-4">
                  {risk.t}
                </h3>
                <p className="text-slate-600 font-medium text-base leading-relaxed">{risk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA 2 — APÓS SISTEMAS ── */}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Sua escola tem todos esses sistemas aprovados pelo CBPMESP?
          </p>
          <CtaWhatsApp
            label="Fale com um engenheiro agora — sem compromisso"
            occupationType="escola ou instituição de ensino"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── METODOLOGIA DRD2 ── */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
            <span className="text-red-600 font-black text-xs uppercase tracking-widest mb-4 block underline decoration-red-600 underline-offset-4">Metodologia Educacional</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
              Como a DRD2 <span className="text-red-600 not-italic">Conduz o Processo</span>
            </h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center uppercase tracking-tight font-black italic">
              {[
                { t: "Diagnóstico Técnico", d: "Visitamos a unidade e levantamos o enquadramento sem compromisso.", i: <ClipboardList className="w-12 h-12 mx-auto mb-6 text-red-600"/> },
                { t: "Projeto PPCI", d: "Desenvolvimento técnico completo com ART padrão CBPMESP.", i: <FileCheck className="w-12 h-12 mx-auto mb-6 text-red-600"/> },
                { t: "Acompanhamento", d: "Protocolo digital agilizado e gestão de exigências Comunique-se.", i: <Clock className="w-12 h-12 mx-auto mb-6 text-red-600"/> },
                { t: "Vistoria e Emissão", d: "Coordenação da inspeção final garantindo aprovação absoluta.", i: <CheckCircle2 className="w-12 h-12 mx-auto mb-6 text-red-600"/> }
              ].map((step, i) => (
                <div key={i} className="p-10 group hover:bg-white/5 rounded-[3rem] transition-colors border border-transparent hover:border-white/10 relative">
                   <div className="absolute top-4 right-8 text-4xl text-white/10 font-black not-italic group-hover:text-red-600/20 transition-colors">{i+1}</div>
                   {step.i}
                   <h4 className="text-white mb-4 text-lg leading-tight">{step.t}</h4>
                   <p className="text-[10px] text-slate-400 not-italic font-bold tracking-widest leading-relaxed uppercase">{step.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── CTA 3 — APÓS METODOLOGIA ── */}
      <div className="py-12 bg-red-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Pronto para regularizar sua escola sem interromper as aulas?
          </p>
          <CtaWhatsApp
            label="Quero regularizar minha escola em SP"
            occupationType="escola ou instituição de ensino"
            variant="secondary"
            centered
          />
        </div>
      </div>

      {/* ── POR QUE ATENÇÃO ESPECIAL ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">
                Por que o AVCB de escola tem <span className="text-red-600 not-italic">atenção especial do CBPMESP</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                Escolas concentram um público altamente vulnerável — crianças pequenas que dependem integralmente dos adultos em situações de emergência. Por isso, o Corpo de Bombeiros aplica critérios rigorosos com atenção especial a:
              </p>
              <div className="space-y-4">
                {[
                  "Largura e desobstrução das saídas de emergência",
                  "Funcionamento total do alarme de incêndio",
                  "Capacitação da brigada de emergência escolar",
                  "Condições de manutenção de extintores e hidrantes",
                  "Sinalização visível para crianças e adultos"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border-l-4 border-red-600">
                    <ShieldAlert className="text-red-600 w-6 h-6 flex-shrink-0" />
                    <span className="font-bold text-slate-800 text-sm uppercase italic tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-[4rem] overflow-hidden shadow-3xl border-8 border-slate-100 group">
                <Image 
                  src="/images/hero-creche.webp" 
                  alt="Segurança infantil em escolas de São Paulo" 
                  width={600} 
                  height={800} 
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-10 text-white">
                  <p className="font-black italic text-lg leading-tight uppercase tracking-tighter">Uma vistoria mal preparada gera exigências e atrasos. A DRD2 aprova na primeira inspeção.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REGIONS ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-8 uppercase italic tracking-tighter">Atendemos Escolas em Toda a <span className="text-red-600 not-italic font-black">Grande São Paulo</span></h2>
              <div className="flex flex-wrap justify-center gap-3">
                 {["SÃO PAULO CAPITAL", "GUARULHOS", "OSASCO", "SANTO ANDRÉ", "SÃO BERNARDO", "SÃO CAETANO", "BARUERI"].map(city => (
                   <span key={city} className="bg-white border border-slate-300 text-slate-500 font-black text-xs px-6 py-3 rounded-full uppercase italic tracking-widest hover:border-red-600 hover:text-red-600 transition-colors cursor-default">
                     {city}
                   </span>
                 ))}
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-xs font-black uppercase tracking-[0.3em] text-slate-400 italic">
              <Link href="/avcb-para-academia-sao-paulo" className="hover:text-red-600 transition-colors">AVCB para Academias &rarr;</Link>
              <Link href="/avcb-hoteis-pousadas-sao-paulo" className="hover:text-red-600 transition-colors">AVCB para Hotéis &rarr;</Link>
              <Link href="/avcb-para-igreja-sao-paulo" className="hover:text-red-600 transition-colors">AVCB para Igrejas &rarr;</Link>
           </div>
        </div>
      </section>

      {/* ── PROVA SOCIAL ── */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nossa escola particular sem interromper nenhuma aula. Profissionalismo total. O AVCB foi aprovado na primeira vistoria do Corpo de Bombeiros.",
          author: "Elaine Cardoso",
          role: "Diretora — Escola São Francisco de Assis SP",
        }}
      />

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Dúvidas Frequentes: <span className="text-red-600 not-italic font-black italic uppercase">AVCB de Escolas</span>
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
               <details key={i} className="group bg-slate-50 rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all hover:bg-white">
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight">
                  {faq.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="p-7 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-200 italic font-medium">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA 4 — APÓS FAQ ── */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Proteja-se e proteja seus alunos.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Regularize sua escola antes da próxima fiscalização do CBPMESP.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="escola ou instituição de ensino"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

{/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Escola</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel precisa dos seguintes documentos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Planta baixa aprovada pela Prefeitura ou levantamento arquitetonico atualizado",
              "IPTU do exercicio atual com área total averbada e uso declarado",
              "Memorial descritivo da ocupação e destinacao de uso do imóvel",
              "Laudo de instalacoes elétricas com ART registrada no CREA-SP",
              "Laudo de para-raios (SPDA) para edificios acima de 5 pavimentos",
              "ART do engenheiro responsavel pelo projeto de prevencao de incêndio",
              "Matricula atualizada do imóvel no Cartorio de Registro de Imóveis",
              "CNPJ ou CPF do responsavel legal pelo estabelecimento",
            ].map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-2xl text-red-900 font-bold text-sm">
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <OccupationAuthorityBlock
        occupation="Escola"
        currentSlug="/avcb-para-escola-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Escola"
        currentSlug="/avcb-para-escola-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/avcb-para-escola-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="Regularizamos Escolas e Faculdades em SP"
      />

      <ServiceClusterLinks currentSlug="/avcb-para-escola-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-para-escola-sao-paulo" />

      <NeighborhoodSilo currentSlug="/avcb-para-escola-sao-paulo" />

      <LeadForm />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.8]">
            Sua Escola está <br/> <span className="text-black not-italic font-black italic underline decoration-white underline-offset-8">protegida em 2026?</span>
          </h2>
          <p className="text-xl md:text-2xl text-red-100 mb-12 max-w-2xl mx-auto font-medium lead-relaxed italic mt-12">
            Não deixe sua unidade exposta a riscos jurídicos, financeiros e humanos. Atuamos com segurança e eficiência técnica.
          </p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white"
          >
            <Phone className="w-8 h-8 inline mr-2" /> Regularizar Escola Agora
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">Especialistas em Ocupação Educacional | Grupo E — 2026</p>
        </div>
      </section>
    </>
  );
}

