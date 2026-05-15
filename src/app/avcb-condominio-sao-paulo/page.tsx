import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, Building, FileCheck,
  ArrowRight, Scale, AlertTriangle, Lightbulb,
  MapPin, ClipboardCheck, ShieldCheck, ZapOff,
  DoorClosed, Flame, FileText,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { servicesData } from "@/data/services";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";

const _pageTitle = "AVCB para Condomínio em São Paulo | DRD2 Engenharia";
const _pageDesc = "AVCB para condomínios em São Paulo. Regularização das áreas comuns, renovação de certificado vencido e projeto técnico com ART. Diagnóstico técnico gratuito. DRD2 Engenharia.";

export const metadata = {
  title: "AVCB para Condomínio em São Paulo | DRD2 Engenharia",
  description: "AVCB para condomínios em São Paulo. Regularização das áreas comuns, renovação de certificado vencido e projeto técnico com ART. Diagnóstico técnico gratuito. DRD2 Engenharia.",
  alternates: {
    canonical: "/avcb-para-condominio-sao-paulo",
  },
};

export default function AVCBCondominioMasterPage() {
  const service = servicesData["avcb-condominio-sao-paulo"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/avcb-condominio-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "AVCB Condomínio SP",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB para Condomínio em SP", item: "/avcb-condominio-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO — VERSÃO 10/10 MASTER ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:flex items-center bg-slate-950 border-b-8 border-red-600 ">
        <Image
          src="/images/bg-condominios.jpg"
          alt="Segurança contra incêndio em condomínio de alto padrão em São Paulo"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              Grupo A/B — Condomínios Residenciais — Regularização 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">AVCB PARA</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                CONDOMÍNIO EM SÃO PAULO
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl">
              Tudo que o Síndico precisa saber para regularizar o prédio com segurança jurídica e zero burocracia.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink} 
                className="bg-[#25D366] hover:bg-[#1EBE5A] hover:text-white hover:text-[#25D366] text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366]"
              >
                <Phone className="w-6 h-6" /> SOLICITAR ORÇAMENTO TÉCNICO GRATUITO
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
          { label: "AVCB para Condomínio em SP" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── INTRODUÇÃO TÉCNICA — VERBATIM RESTORATION ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">
                O que é o AVCB para <span className="text-red-600 not-italic font-black italic">Condomínios?</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  O Auto de Vistoria do Corpo de Bombeiros (AVCB) é o documento oficial que comprova que o condomínio atende a todas as condições de segurança contra incêndio e pânico previstas na legislação do Estado de São Paulo (<a href="https://www.al.sp.gov.br/repositorio/legislacao/decreto/2024/decreto-69118-28.06.2024.html" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-bold">Decreto nº 69.118/2024</a>).
                </p>
                <p>
                  Diferente de casas individuais, os condomínios residenciais verticais ou horizontais com áreas comuns são obrigados a manter o AVCB sempre válido. Esse documento é essencial não apenas para evitar multas, mas para garantir que o seguro predial cubra possíveis sinistros e para resguardar a segurança de todos os moradores.
                </p>

                <h3 className="text-2xl font-black text-slate-900 mt-12 mb-4 uppercase italic tracking-tighter">A Responsabilidade Legal do Síndico</h3>
                <p>
                  Muitos síndicos não sabem, mas a responsabilidade pela manutenção do AVCB é direta e pessoal. De acordo com o Código Civil Brasileiro e a legislação estadual, o síndico responde civil e criminalmente pela segurança do condomínio.
                </p>
                <ul className="space-y-4 ml-6 italic font-medium">
                  <li className="flex gap-2 items-start">
                    <span className="text-red-600 font-black">•</span>
                    <span><strong>Responsabilidade Civil:</strong> Caso ocorra um incêndio e o AVCB esteja vencido, os moradores e terceiros podem processar o síndico pessoalmente por danos materiais e morais.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-red-600 font-black">•</span>
                    <span><strong>Responsabilidade Criminal:</strong> Se houver vítimas feridas ou fatais em um incêndio num prédio sem AVCB, o síndico pode ser indiciado por negligência ou imprudência.</span>
                  </li>
                </ul>
                <p className="mt-6 font-bold text-red-600">
                  ⚠️ Importante: As seguradoras podem se recusar a pagar a indenização do condomínio se o AVCB não estiver em dia, o que geraria um prejuízo milionário a ser rateado entre os condôminos.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-slate-950 p-8 rounded-[2.5rem] text-white shadow-xl sticky top-24">
              <h4 className="text-red-600 font-black text-xs uppercase tracking-widest mb-6 italic">Validade do AVCB:</h4>
              <p className="text-sm font-bold leading-relaxed uppercase italic mb-8">
                Para condomínios residenciais em São Paulo, o AVCB tem validade de <span className="text-red-500">5 anos</span>.
              </p>
              <div className="space-y-4">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] font-black text-red-500 uppercase mb-2 italic tracking-widest">Risco Seguro:</p>
                    <p className="text-xs font-bold leading-tight uppercase italic">Sem AVCB, o seguro do condomínio perde 100% da eficácia jurídica.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── O QUE COBRE ── */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
               O que o AVCB do condomínio <span className="text-red-600 not-italic">cobre?</span>
             </h2>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto">O documento foca exclusivamente na segurança das áreas de uso comum.</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Hall e Recepção", "Escadas e Corredores", "Garagens e Subsolos", "Salão de Festas", "Academia e Lazer", "Casa de Máquinas", "Guarita e Portaria", "Barrilete e Telhado"
              ].map((loc, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-3 group hover:bg-white/10 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-bold text-sm uppercase tracking-tight">{loc}</span>
                </div>
              ))}
           </div>
           <p className="mt-12 text-center text-slate-500 text-sm font-bold uppercase italic tracking-widest">
             * Unidades privativas (apartamentos) não são cobertas pelo AVCB do condomínio.
           </p>
        </div>
      </section>

      {/* ── QUEM PRECISA ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h2 className="text-4xl font-black text-slate-900 leading-none uppercase tracking-tighter italic">Quais condomínios precisam de <span className="text-red-600 not-italic">AVCB em SP?</span></h2>
                <div className="space-y-6 text-lg text-slate-600 font-medium">
                  <p>De acordo com as Instruções Técnicas do <a href="http://www.ccb.policiamilitar.sp.gov.br/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-bold">CBPMESP</a> e o <a href="https://www.al.sp.gov.br/repositorio/legislacao/decreto/2024/decreto-69118-28.06.2024.html" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-bold">Decreto Estadual nº 69.118/2024</a>, todos os condomínios residenciais verticais em São Paulo são obrigados a ter AVCB ou CLCB.</p>
                  <ul className="space-y-4">
                    {[
                      "Edifícios com 2 ou mais pavimentos.",
                      "Condomínios com múltiplas torres.",
                      "Condomínios horizontais com áreas comuns.",
                      "Edifícios de uso misto em São Paulo."
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-800 font-bold uppercase italic text-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
             </div>
             <div className="bg-slate-900 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-3xl group-hover:bg-red-600/40 transition-all" />
                <h3 className="text-2xl font-black mb-8 italic uppercase tracking-tighter">AVCB ou CLCB?</h3>
                <div className="space-y-8">
                  <div className="border-l-2 border-red-600 pl-6">
                    <h4 className="font-black text-red-500 uppercase text-sm mb-2 italic">CLCB (Simplificado)</h4>
                    <p className="text-slate-400 text-sm font-medium">Aplicável a condomínios de menor porte. Processo mais rápido e custo reduzido.</p>
                  </div>
                  <div className="border-l-2 border-slate-700 pl-6">
                    <h4 className="font-black text-white uppercase text-sm mb-2 italic">AVCB (Completo)</h4>
                    <p className="text-slate-400 text-sm font-medium">Obrigatório para edifícios de maior altura, múltiplas torres ou grandes áreas de lazer.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── SISTEMAS DE PROTEÇÃO EXIGIDOS ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tighter uppercase italic">
            Sistemas Exigidos nas <span className="text-red-600 not-italic font-black italic">ITs do CBPMESP</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { t: "Extintores de Incêndio", d: "Tipo ABC ou CO2, com recarga em dia e sinalização correta conforme a área.", i: <Flame className="w-8 h-8"/> },
              { t: "Sistema de Hidrante", d: "Rede hidráulica com pressão mínima e mangueiras aferidas (IT-22).", i: <Building className="w-8 h-8"/> },
              { t: "Iluminação de Emergência", d: "Funcionamento automático com autonomia mínima de 1 hora garantida.", i: <Lightbulb className="w-8 h-8"/> },
              { t: "Sinalização Fotoluminescente", d: "Placas NBR 13434 indicando rotas, saídas e equipamentos de combate.", i: <MapPin className="w-8 h-8"/> },
              { t: "Portas Corta-Fogo", d: "Compartimentação obrigatória em escadas com fechamento automático (IT-09).", i: <DoorClosed className="w-8 h-8"/> },
              { t: "SPDA (Para-raios)", d: "Sistema de proteção contra descargas atmosféricas conforme NBR 5419.", i: <ShieldCheck className="w-8 h-8"/> }
            ].map((sys, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-xl transition-all group">
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform">{sys.i}</div>
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">{sys.t}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{sys.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA 2 — APÓS SISTEMAS ── */}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Seu condomínio tem todos esses sistemas em conformidade?
          </p>
          <CtaWhatsApp
            label="Solicitar orçamento técnico para condomínio"
            occupationType="condomínio"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── CUSTO E RISCO ── */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-200">
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter">Quanto custa o AVCB para condomínio?</h3>
                <div className="space-y-6">
                  <p className="text-slate-600 font-medium leading-relaxed">O custo varia conforme o número de torres, pavimentos e a situação atual dos sistemas. Condomínios organizados com manutenção em dia possuem custo de consultoria reduzido.</p>
                  <div className="space-y-4">
                    {[
                      "Rateio por unidade é acessível.",
                      "Sistemas em ordem = Valor reduzido.",
                      "Obras de retrofit elevam o investimento.",
                      "Diagnóstico DRD2 quantifica tudo antes."
                    ].map((p, i) => (
                      <div key={i} className="flex gap-3 items-center text-sm font-bold text-slate-700 uppercase italic">
                        <CheckCircle2 className="w-4 h-4 text-red-600" /> {p}
                      </div>
                    ))}
                  </div>
                </div>
             </div>
             <div className="bg-red-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                <h3 className="text-2xl font-black mb-8 uppercase italic tracking-tighter">AVCB Vencido: Riscos para o Síndico</h3>
                <div className="space-y-6 font-bold italic">
                   <div className="flex gap-4 items-start">
                      <AlertTriangle className="w-6 h-6 text-red-400 shrink-0" />
                      <p className="text-sm leading-relaxed">Seguradoras podem recusar 100% da indenização em caso de incêndio se o AVCB estiver vencido.</p>
                   </div>
                   <div className="flex gap-4 items-start">
                      <Scale className="w-6 h-6 text-red-400 shrink-0" />
                      <p className="text-sm leading-relaxed">Responsabilidade civil e criminal direta do síndico (CPF) em caso de acidentes com moradores.</p>
                   </div>
                   <div className="flex gap-4 items-start">
                      <ZapOff className="w-6 h-6 text-red-400 shrink-0" />
                      <p className="text-sm leading-relaxed">Desvalorização imediata das unidades e dificuldade em financiamentos bancários (ITAU, CEF).</p>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* ── METODOLOGIA DRD2 ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
            <span className="text-red-600 font-black text-xs uppercase tracking-widest mb-4 block underline decoration-red-600 underline-offset-4">Foco na Paz do Síndico</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter uppercase italic">
              Metodologia <span className="text-red-600 not-italic">Sem Comunique-se</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">O síndico não precisa ir ao Corpo de Bombeiros nem se preocupar com burocracia. Nós resolvemos tudo.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { t: "Diagnóstico técnico gratuito", d: "Identificação antecipada de cada pendência física antes do protocolo.", i: <ClipboardCheck className="w-8 h-8"/> },
                { t: "Relatório de Síndico", d: "Transparência total sobre o que precisa ser contratado e orçamentos reais.", i: <FileCheck className="w-8 h-8"/> },
                { t: "Projeto e ART", d: "Elaboração técnica completa junto ao CREA-SP sem erros de enquadramento.", i: <Scale className="w-8 h-8"/> },
                { t: "Vistoria e Selo", d: "Acompanhamento presencial no dia da vistoria até o certificado em mãos.", i: <ShieldCheck className="w-8 h-8"/> }
              ].map((step, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all shadow-inner group">
                  <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform">{step.i}</div>
                  <h4 className="font-black text-slate-900 uppercase italic mb-3 tracking-tight">{step.t}</h4>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed">{step.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── CTA 3 — APÓS METODOLOGIA ── */}
      <div className="py-12 bg-red-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Pronto para regularizar seu condomínio com quem entende do assunto?
          </p>
          <CtaWhatsApp
            label="Quero regularizar meu condomínio em SP"
            occupationType="condomínio residencial"
            variant="secondary"
            centered
          />
        </div>
      </div>

      {/* ── ATENDIMENTO EM TODA SP ── */}
      <section className="py-24 bg-slate-950 text-white border-t-8 border-red-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
             <div>
                <h2 className="text-4xl font-black mb-8 uppercase italic tracking-tighter">Atendemos condomínios em <span className="text-red-600 not-italic">Atendimento em São Paulo</span></h2>
                <div className="grid grid-cols-2 gap-8 text-sm font-bold text-slate-400 uppercase italic tracking-widest leading-loose">
                   <div>
                      <p className="text-white mb-2 underline bg-red-600/20 px-2 inline-block italic">Zona Sul</p>
                      <p className="text-[11px]">Moema, Itaim, Vila Olímpia, Brooklin, Santo Amaro, Morumbi, Ipiranga, Sacomã</p>
                   </div>
                   <div>
                      <p className="text-white mb-2 underline bg-red-600/20 px-2 inline-block italic">Zona Oeste</p>
                      <p className="text-[11px]">Pinheiros, Perdizes, Lapa, Butantã, Vila Madalena, Leopoldina</p>
                   </div>
                   <div>
                      <p className="text-white mb-2 underline bg-red-600/20 px-2 inline-block italic">Zona Norte</p>
                      <p className="text-[11px]">Santana, Tucuruvi, Casa Verde, Limão, Jaçanã, Mandaqui</p>
                   </div>
                   <div>
                      <p className="text-white mb-2 underline bg-red-600/20 px-2 inline-block italic">Zona Leste</p>
                      <p className="text-[11px]">Tatuapé, Mooca, Anália Franco, Carrão, Belém, Itaquera, Penha</p>
                   </div>
                </div>
             </div>
             <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 text-center relative shadow-3xl">
                <p className="text-lg font-black italic mb-6">Também atendemos Centro, ABC Paulista, Osasco, Guarulhos e Toda a Grande São Paulo.</p>
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-500 font-black px-5 py-3 rounded-full text-xs uppercase italic tracking-widest shadow-lg">
                    <MapPin className="w-4 h-4" /> Unidade Móvel Síndico Profissional
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── PROVA SOCIAL ── */}
      <SocialProof
        testimonial={{
          text: "A DRD2 resolveu a regularização do nosso condomínio em tempo recorde. O Eng. Samuel esteve pessoalmente na vistoria e o AVCB saiu sem pendências. Recomendo a todos os síndicos.",
          author: "Ricardo Oliveira",
          role: "Síndico Profissional — Edifício Jardins SP",
        }}
      />

      {/* ── FAQ CONDOMÍNIO — SCHEMA SYNC ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Dúvidas Frequentes: <span className="text-red-600 not-italic font-black italic">AVCB do Prédio</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Qual a validade do AVCB para condomínio residencial?",
                answer: "Em São Paulo, o AVCB para condomínios residenciais costuma ter validade de 5 anos. No entanto, se o condomínio possuir áreas comerciais integradas (uso misto), esse prazo pode ser reduzido para 3 anos."
              },
              {
                question: "O seguro cobre incêndio se o AVCB estiver vencido?",
                answer: "Dificilmente. A maioria das apólices de seguro predial possui uma cláusula que exclui a cobertura em caso de negligência com a manutenção e falta de documentos obrigatórios como o AVCB."
              },
              {
                question: "Quem paga as adequações para o AVCB?",
                answer: "As adequações nas áreas comuns são consideradas despesas extraordinárias e devem ser pagas pelo proprietário (fundo de reserva ou rateio extra), conforme a Lei do Inquilinato."
              },
              {
                question: "O que é necessário para renovar o AVCB?",
                answer: "É necessário uma vistoria técnica, emissão de ARTs (Anotação de Responsabilidade Técnica) dos sistemas (elétrica, gás, para-raios, hidrantes) e o protocolo junto ao Corpo de Bombeiros."
              },
              {
                question: "O síndico pode ser preso por falta de AVCB?",
                answer: "Em caso de sinistro com morte onde fique comprovada a negligência na manutenção dos sistemas de incêndio, o síndico pode sim ser responsabilizado criminalmente."
              },
              {
                question: "A DRD2 Engenharia faz as obras de adequação?",
                answer: "Nossa especialidade é a engenharia diagnóstica, projetos e licenciamento. Orientamos e fiscalizamos as obras para garantir que tudo seja feito conforme a norma, evitando gastos desnecessários."
              }
            ].map((faq, i) => (
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
            Não espere o prazo vencer.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Síndicos que agem com antecedência evitam multas e garantem cobertura do seguro.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="condomínio"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

      {/* ── LINKS INTERNOS ESTRATÉGICOS ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">Páginas <span className="text-red-600">Recomendadas</span></h2>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Aprofunde seu conhecimento sobre regularização predial em SP.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Quanto Custa o AVCB?", u: "/avcb-preco", i: <Scale className="w-4 h-4"/> },
              { t: "Renovação de Certificado", u: "/renovacao-avcb", i: <ClipboardCheck className="w-4 h-4"/> },
              { t: "AVCB na Zona Sul", u: "/avcb-zona-sul", i: <MapPin className="w-4 h-4"/> },
              { t: "AVCB na Zona Oeste", u: "/avcb-zona-oeste-sao-paulo", i: <MapPin className="w-4 h-4"/> },
              { t: "AVCB na Zona Leste", u: "/avcb-zona-leste-sao-paulo", i: <MapPin className="w-4 h-4"/> },
              { t: "AVCB na Zona Norte", u: "/avcb-zona-norte-sao-paulo", i: <MapPin className="w-4 h-4"/> },
              { t: "Guia Geral São Paulo", u: "/avcb-sao-paulo", i: <Building className="w-4 h-4"/> },
              { t: "Quem Paga o AVCB?", u: "/blog/quem-paga-o-avcb-proprietario-ou-inquilino", i: <FileText className="w-4 h-4"/> }
            ].map((link, i) => (
              <Link 
                key={i} 
                href={link.u}
                className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center justify-between group hover:border-red-600 hover:bg-red-50 transition-all transition-shadow shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="text-red-600 group-hover:scale-110 transition-transform">{link.i}</span>
                  <span className="text-slate-900 font-bold text-xs uppercase italic">{link.t}</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

{/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Condominio</span></h2>
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
        occupation="Condominio"
        currentSlug="/avcb-condominio-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Condominio"
        currentSlug="/avcb-condominio-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/avcb-para-condominio-sao-paulo"
        mode="ocupação"
        maxLinks={12}
        titulo="Regularizamos Condomínios em Atendimento em São Paulo"
      />


      <ServiceClusterLinks currentSlug="/avcb-condominio-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-condominio-sao-paulo" />

      <NeighborhoodSilo currentSlug="/avcb-condominio-sao-paulo" />

      {/* ── RESPONSÁVEL TÉCNICO BLOCK ── */}
      <section className="py-24 bg-white italic">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="bg-slate-900 rounded-[4rem] p-12 md:p-16 text-white shadow-3xl flex flex-col md:flex-row items-center gap-12 border-8 border-slate-50">
              <div className="shrink-0 relative">
                 <Image 
                    src="/images/eng-samuel-oficial.webp" 
                    alt="Eng. Samuel Costa - Responsável Técnico em AVCB para Condomínios"
                    width={180}
                    height={180}
                    className="rounded-[3rem] border-4 border-slate-800 shadow-2xl object-cover object-top aspect-square"
                 />
                 <div className="absolute -bottom-4 -right-4 bg-red-600 p-3 rounded-2xl shadow-xl">
                    <ShieldCheck className="w-6 h-6 text-white" />
                 </div>
              </div>
              <div>
                 <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter leading-none">
                    Engenheiro <span className="text-red-500 not-italic">Samuel Costa</span>
                 </h3>
                 <p className="text-red-500 font-bold text-[10px] uppercase tracking-widest leading-none mb-6">Responsável Técnico DRD2 Engenharia</p>
                 <p className="font-bold text-slate-400 uppercase tracking-widest text-xs leading-relaxed mb-8 italic">
                    "Regularizar o AVCB de um condomínio é, acima de tudo, garantir a segurança jurídica do síndico e a vida dos moradores. Minha equipe audita cada detalhe para que você tenha aprovação direta, sem multas e sem dores de cabeça."
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <div className="px-5 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest">CREA-SP 5070163570</div>
                    <div className="px-5 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest italic">Pós-Graduado em Seg. Trabalho</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── CTA FINAL — MEGA SÍNDICO ── */}
      <section className="py-24 bg-red-950 text-center relative overflow-hidden text-white border-t-8 border-red-600 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 transform translate-x-1/4 blur-3xl"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            AVCB Vencendo nos próximos <span className="text-red-600 not-italic font-black italic">12 meses?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium lead-relaxed italic">
            Não corra riscos legais na sua gestão. Peça um diagnóstico técnico gratuito agora e receba sua proposta completa em 24 horas.
          </p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            className="animate-alert-pulse bg-white text-red-950 font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white"
          >
            <Phone className="w-8 h-8 inline mr-2" /> SOLICITAR DIAGNÓSTICO TÉCNICO GRATUITO
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-500 opacity-80">Atendimento Síndico Profissional | São Paulo Capital</p>
        </div>
      </section>
    </>
  );
}
