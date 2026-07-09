import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Phone, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck,
  Flame, Droplets, Lightbulb, TriangleAlert, Bell, Layers,
  Users, MapPin, ShieldX, Factory, Zap,
  FileText, Clock, Star, Box
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InternalLinksBlock from "@/components/InternalLinksBlock";
import { OccupationAuthorityBlock, NeighborhoodAuthorityBlock } from "@/components/SeoAuthorityBlocks";
import OccupationDepthBlock from "@/components/OccupationDepthBlock";

// 1 & 5. SEO TÉCNICO E MAXIMIZAÇÃO DE CTR: Metadados Magnéticos B2B
export const metadata: Metadata = {
  title: "AVCB para Galpão Industrial em SP: Processo e Prazos | DRD2",
  description: "Engenharia especialista em AVCB para Galpão Industrial e Logístico em São Paulo. Adequação de Sprinklers (IT-23), Hidrantes e Carga de Incêndio. Diagnóstico em 2h.",
  alternates: {
    canonical: "/avcb-galpao-industrial-sao-paulo",
  },
  openGraph: {
    title: "AVCB para Galpão Industrial em SP: Processo e Prazos | DRD2",
    description: "Regularização completa para galpões, armazéns e centros de distribuição. Especialistas em Grupos I e J.",
    url: "https://www.drd2.com.br/avcb-galpao-industrial-sao-paulo",
    type: "website",
    locale: "pt_BR",
  },
};

export default function AVCBGalpaoPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  // 7. DADOS ESTRUTURADOS AVANÇADOS
  const schema = generateMasterSchema({
    slug: "/avcb-galpao-industrial-sao-paulo",
    title: "AVCB para Galpão Industrial em SP",
    description: "Serviço especializado de regularização e emissão de AVCB para Galpões Industriais, Armazéns Logísticos e Centros de Distribuição em São Paulo.",
    serviceName: "AVCB para Galpão Industrial e Logístico",
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Serviços", item: "/servicos" },
      { name: "AVCB para Galpão Industrial SP", item: "/avcb-galpao-industrial-sao-paulo" },
    ],
  });

  return (
    <>
      <JsonLD schema={schema} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[20px] flex items-center bg-slate-950 border-b-8 border-red-600  ">
        <Image
          src="/images/bg-galpao.jpg"
          alt="Alvará do Bombeiro para Galpão Industrial"
          fill
          className="object-cover object-center opacity-40 grayscale-[20%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 25% 55%, rgba(220,38,38,0.4) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              Grupo G — Serviços Industriais — Exigências 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">AVCB PARA</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                GALPÃO INDUSTRIAL EM SP
              </span>
            </h1>

            {/* Injeção TÉCNICA - Intro Forte */}
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl">
              Operar um galpão industrial em São Paulo sem AVCB é operar com risco real de <strong>embargo, multa severa e responsabilidade civil</strong>.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed font-medium max-w-2xl">
              Galpões concentram cargas de incêndio elevadas, produtos inflamáveis e processos com alto risco de propagação. Regularize sua operação logística ou fabril de forma definitiva com a engenharia da DRD2.
            </p>
            <div className="mt-4 block">
              <a
                href={whatsappLink}
                className="cta-whatsapp flex sm:inline-flex items-center justify-center gap-3 w-full sm:w-auto transition-opacity"
              >
                <Phone className="w-6 h-6 flex-shrink-0" />
                <span className="sm:whitespace-nowrap">FALAR COM ENGENHEIRO AGORA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB + TRUST BAR ── */}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "AVCB para Galpão Industrial em São Paulo" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── H2 #1: PRECISA DE AVCB? ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                O que é o AVCB e por que é obrigatório para{" "}
                <span className="text-red-600 not-italic font-black italic">AVCB em São Paulo?</span>
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                <p>O Auto de Vistoria do Corpo de Bombeiros (AVCB) é o documento emitido pelo CBPMESP atestando que a edificação cumpre as condições de segurança contra incêndio exigidas pela legislação estadual.</p>
                <p>Para galpões, armazéns e depósitos, a obrigatoriedade está estabelecida no <strong>Decreto Estadual nº 69.118/2024</strong> e nas ITs do CBPMESP. O que determina a exigência é a área construída, a classe de ocupação e a carga de incêndio, não o porte do CNPJ que ocupa o local.</p>
                <p>
                  A DRD2 Engenharia atende todo o estado de São Paulo, incluindo pólos industriais da Grande SP como Barueri, Guarulhos, São Bernardo do Campo, além da própria capital, com forte presença na Zona Leste (<a href="/renovacao-avcb-condominio-mooca" className="text-red-700 font-bold hover:underline">Mooca</a>), Zona Oeste (<a href="/renovacao-avcb-condominio-lapa" className="text-red-700 font-bold hover:underline">Lapa</a>) e Zona Norte (<a href="/renovacao-avcb-condominio-santana" className="text-red-700 font-bold hover:underline">Santana</a>).
                </p>
                <p>Galpões <strong>Grupo I (Depósitos)</strong> e <strong>Grupo J (Industrial)</strong> estão sob fiscalização ativa do Estado de São Paulo. Operar sem AVCB não é apenas irregularidade administrativa, é um passivo que gera:</p>

                <ul className="space-y-3 mt-6">
                  <li className="flex items-start gap-3">
                    <ShieldX className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span><strong>Embargo de atividade:</strong> Interdição imediata da operação e suspensão de licenças municipais (Alvará).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldX className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span><strong>Negativa de Seguradora:</strong> Em caso de sinistro, a ausência de AVCB leva à recusa do pagamento do prêmio pela seguradora patrimonial.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldX className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span><strong>Quebra de Contratos:</strong> Clientes B2B e grandes varejistas exigem conformidade (compliance) em auditorias logísticas anuais.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldX className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span><strong>Responsabilidade Criminal:</strong> Do proprietário e gestor em acidentes com vítimas na planta.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F8F8F8] p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-2xl sticky top-32 w-full">
                <h3 className="text-2xl font-black text-slate-900 mb-6 italic">
                  Diagnóstico <span className="text-red-600">Gratuito</span>
                </h3>
                {/* 6. REDUÇÃO DE FRICÇÃO: Formulário com pre-filling */}
                <LeadForm variant="compact" predefinedPropertyType="Galpão / Indústria" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. EXPANSÃO: AVCB VS CLCB ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
              AVCB ou CLCB: Qual se aplica ao{" "}
              <span className="text-red-600 not-italic">Seu Galpão?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Antes de iniciar o protocolo, o engenheiro especialista precisa definir a categoria da sua edificação. Contratar o processo errado resulta em perda total das taxas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-200 hover:shadow-xl hover:border-red-600/20 transition-all">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-black text-xl mb-2">CLCB (Processo Simplificado)</p>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Aplicável a galpões de menor risco, geralmente com <strong>área construída de até 750 m²</strong> (ou até 1.500 m² sob condições específicas da IT-42). É um licenciamento ágil, muitas vezes emitido por amostragem sem necessidade de vistoria prévia presencial do Bombeiro, se os laudos ART forem bem elaborados.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-red-100 hover:shadow-xl hover:border-red-600/40 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                Aplica-se a 80% das indústrias
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-black text-xl mb-2">AVCB (Projeto Técnico Completo)</p>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Exigido para galpões <strong>acima de 750 m²</strong> ou operações com carga de incêndio elevada. Exige aprovação de plantas arquitetônicas, memoriais de cálculo hidráulico, instalação de sistemas complexos (hidrantes/sprinklers) e a obrigatoriedade da vistoria física do Oficial do CBPMESP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OTIMIZAÇÃO DE PROVA SOCIAL (CRO): Depoimento do Nicho ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex justify-center mb-6 text-amber-500">
            <Star className="w-8 h-8 fill-current" />
            <Star className="w-8 h-8 fill-current" />
            <Star className="w-8 h-8 fill-current" />
            <Star className="w-8 h-8 fill-current" />
            <Star className="w-8 h-8 fill-current" />
          </div>
          <p className="text-2xl text-slate-800 italic font-medium leading-relaxed mb-8">
            "Nosso Centro de Distribuição em Barueri foi autuado e quase perdeu o seguro devido à alteração no layout de estocagem que invalidou o projeto anterior. O Eng. Samuel refez o memorial de carga de incêndio (IT-14), adequou os bicos do sprinkler na IT-23 e aprovaram o novo AVCB na primeira vistoria. Uma assessoria impecável para logística."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white font-black text-xl">R</div>
            <div className="text-left">
              <p className="font-black text-slate-900 uppercase">Ricardo M.</p>
              <p className="text-sm text-slate-500 font-medium">Diretor de Logística (Supply Chain) • Barueri, SP</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. EXPANSÃO TÉCNICA: PASSO A PASSO (TEXTO INJETADO) ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-red-500 font-black uppercase tracking-widest text-xs">Processo Real e Técnico</span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter leading-none uppercase italic mt-4">
              O Processo Real do AVCB para{" "}
              <span className="text-red-600 not-italic">Indústrias em SP</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto font-medium">A maioria das reprovações ocorre porque empresas despachantes tentam pular etapas. Veja como a engenharia da DRD2 garante o deferimento do processo:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all relative overflow-hidden">
              <span className="text-7xl font-black text-red-600/10 absolute bottom-[-10px] right-[-10px] leading-none select-none">01</span>
              <p className="relative z-10 text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">IT-14 / CBPMESP</p>
              <h3 className="relative z-10 text-xl font-black mb-4 uppercase italic">Carga de Incêndio</h3>
              <p className="relative z-10 text-gray-400 font-medium text-sm">O 1º passo é a vistoria técnica. Mapeamos os materiais armazenados para classificar a Carga de Incêndio Específica. Sem esse cálculo exato, todo o dimensionamento futuro será invalidado pelos analistas do bombeiro.</p>
            </div>

            <div className="group p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all relative overflow-hidden">
              <span className="text-7xl font-black text-red-600/10 absolute bottom-[-10px] right-[-10px] leading-none select-none">02</span>
              <p className="relative z-10 text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">Projeto Técnico</p>
              <h3 className="relative z-10 text-xl font-black mb-4 uppercase italic">Elaboração e ART</h3>
              <p className="relative z-10 text-gray-400 font-medium text-sm">Desenhamos a planta com memoriais de cálculo (Hidrantes via IT-22, Sprinklers via IT-23 e Alarme via IT-17). Todo o projeto recebe a Anotação de Responsabilidade Técnica (ART) do CREA-SP emitida pela DRD2.</p>
            </div>

            <div className="group p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all relative overflow-hidden">
              <span className="text-7xl font-black text-red-600/10 absolute bottom-[-10px] right-[-10px] leading-none select-none">03</span>
              <p className="relative z-10 text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">Execução Normativa</p>
              <h3 className="relative z-10 text-xl font-black mb-4 uppercase italic">Adequações Físicas</h3>
              <p className="relative z-10 text-gray-400 font-medium text-sm">Caso seu armazém não tenha as proteções operantes, documentamos e orientamos a instalação (ABNT NBR 13714 para hidrantes, iluminação de emergência e rotas de fuga).</p>
            </div>

            <div className="group p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all relative overflow-hidden">
              <span className="text-7xl font-black text-red-600/10 absolute bottom-[-10px] right-[-10px] leading-none select-none">04</span>
              <p className="relative z-10 text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">Sistema Via Fácil</p>
              <h3 className="relative z-10 text-xl font-black mb-4 uppercase italic">Protocolo Oficial</h3>
              <p className="relative z-10 text-gray-400 font-medium text-sm">O dossiê é submetido digitalmente ao Corpo de Bombeiros. Se houver <em>Comunique-se</em> (exigências de correção do analista militar), a nossa engenharia redige o recurso de resposta técnica e reenquadra o processo.</p>
            </div>

            <div className="group p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all relative overflow-hidden">
              <span className="text-7xl font-black text-red-600/10 absolute bottom-[-10px] right-[-10px] leading-none select-none">05</span>
              <p className="relative z-10 text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">Auditoria Final</p>
              <h3 className="relative z-10 text-xl font-black mb-4 uppercase italic">Vistoria e Emissão</h3>
              <p className="relative z-10 text-gray-400 font-medium text-sm">Acompanhamos a visita presencial do Oficial Bombeiro na sua fábrica. Com a conformidade confirmada, o AVCB é emitido com a validade (de 1 a 3 anos, dependendo do risco), legalizando seu CNPJ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO 2 ── */}
      <div className="py-16 border-y bg-[#7F1D1D] border-red-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            A sua seguradora está exigindo a Renovação do AVCB?
          </p>
          <CtaWhatsApp
            label="Solicitar Orçamento Urgente ao Engenheiro"
            occupationType="galpão industrial"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── 1. EXPANSÃO: PRAZOS MÉDIOS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
                Quanto tempo leva para tirar o{" "}
                <span className="text-red-600 not-italic">AVCB de um Galpão em SP?</span>
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed font-medium">
                <p>O prazo depende de três variáveis fundamentais: as adequações físicas que sua empresa precisará fazer, a complexidade do projeto e a velocidade de análise do batalhão local.</p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-4">
                  <p className="font-black text-slate-900 flex items-center gap-2 mb-2"><Clock className="w-5 h-5 text-red-600" /> 60 a 120 Dias (AVCB Novo)</p>
                  <p className="text-sm">Para processos bem instruídos, sem pendências complexas, englobando a aprovação das plantas e a vistoria presencial.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-4">
                  <p className="font-black text-slate-900 flex items-center gap-2 mb-2"><Clock className="w-5 h-5 text-red-600" /> 15 a 45 Dias (Renovação / CLCB)</p>
                  <p className="text-sm">Se os laudos (SPDA, Brigada, Hidrantes) estiverem em dia e o imóvel não sofreu ampliações, a renovação tramita de forma ágil no Via Fácil.</p>
                </div>
                <p className="text-sm text-red-600 font-bold mt-6">A preparação técnica antes do protocolo é o principal fator de compressão de prazo. Não existe atalho burocrático — existe engenharia bem feita.</p>
              </div>
            </div>

            <div className="bg-slate-950 rounded-[3rem] border border-slate-800 p-10 text-white">
              <div className="flex items-center gap-4 mb-8">
                <ShieldCheck className="w-10 h-10 text-red-600 flex-shrink-0" />
                <p className="font-black text-xl uppercase italic text-white">Sistemas Críticos Vistoriados</p>
              </div>
              {[
                "Sprinklers in-rack (Estocagem acima de 3,5m)",
                "Hidrantes e Bombas de Recalque (IT-22)",
                "Alarme de Incêndio Visual e Sonoro (IT-17/2025)",
                "Armazenamento de Gases Comprimidos e Inflamáveis",
                "Compartimentação da Subestação Elétrica",
                "Treinamento de Brigada de Incêndio Industrial",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-slate-800 last:border-0">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-slate-300 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 #7: FAQ ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
              Perguntas Frequentes —{" "}
              <span className="text-red-600 not-italic font-black italic uppercase">AVCB Industrial</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Galpão industrial é obrigado a ter AVCB em São Paulo?",
                answer: "Sim. A obrigatoriedade é estabelecida no Decreto Estadual nº 69.118/2024 e pelas ITs do CBPMESP. Galpões Grupos I (Depósitos) e J (Industrial) sujeitam-se à vistoria devido às altas cargas de incêndio geradas."
              },
              {
                question: "Quem pode assinar o projeto de segurança contra incêndio?",
                answer: "O projeto deve ser elaborado e assinado exclusivamente por Engenheiro registrado no CREA-SP, com emissão de ART (Anotação de Responsabilidade Técnica). O Bombeiro não aceita laudos assinados por técnicos não credenciados ou despachantes."
              },
              {
                question: "Qual a diferença entre AVCB e CLCB para galpões logísticos?",
                answer: "O CLCB é modalidade simplificada, aplicada a depósitos de baixo risco e área de até 750 m² (em regras da IT-42, até 1.500m²). Para a maioria dos galpões acima dessa metragem, ou com pé-direito elevado e uso de inflamáveis, o AVCB Completo é exigido."
              },
              {
                question: "Galpão alugado: quem paga o AVCB, o dono do imóvel ou a indústria?",
                answer: "O CBPMESP cobra a regularidade do operador do risco (o CNPJ de quem está instalado). No entanto, o custo de adequações estruturais pesadas (bomba, reservatório) deve ser alinhado na Lei do Inquilinato entre Locador e Locatário."
              }
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all hover:bg-slate-50"
              >
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight leading-tight">
                  {faq.question}
                  <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform duration-300 ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="p-7 pt-0 text-slate-600 leading-relaxed text-base border-t border-slate-200 italic font-medium">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS INTERNOS (SILOS DE SEO) ── */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-center text-sm font-black uppercase tracking-widest text-slate-400 mb-8">
            Complemente a Proteção do Seu Parque Fabril
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "/sistema-de-sprinkler-para-industria-sao-paulo", label: "Sprinklers Industriais" },
              { href: "/alarme-de-incendio-galpao-industrial-sp", label: "SDAI de Incêndio Industrial" },
              { href: "/treinamento-brigada", label: "Brigada de Incêndio Avançada" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="flex items-center gap-2 bg-slate-50 hover:bg-red-600 hover:text-white text-slate-700 font-bold px-6 py-3 rounded-2xl border border-slate-200 hover:border-red-600 transition-all text-sm"
              >
                <ArrowRight className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <OccupationAuthorityBlock
        occupation="Galpao Industrial"
        currentSlug="/avcb-galpao-industrial-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Galpao Industrial"
        currentSlug="/avcb-galpao-industrial-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/alvara-bombeiro-galpao-industrial-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Galpões e Depósitos em SP"
      />

      <ServiceClusterLinks currentSlug="/avcb-galpao-industrial-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-galpao-industrial-sao-paulo" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-galpao-industrial-sao-paulo" />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            A Indústria não pode parar. Proteja seu galpão agora.
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Fale com a DRD2 Engenharia e obtenha o melhor caminho normativo para proteger o patrimônio da sua empresa sem desperdiçar recursos. Resposta técnica em até 24 horas.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white min-h-[48px] inline-flex items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Phone className="w-8 h-8 inline" /> Falar com um Engenheiro (CREA-SP)
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">
            DRD2 Engenharia — AVCB para Galpões Industriais em São Paulo — Decreto Estadual 69.118/2024
          </p>
        </div>
      </section>

      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">
            Documentação Necessária para Protocolo de <span className="text-red-600">Galpões no CBPMESP</span>
          </h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para legalizar sua planta industrial em São Paulo, o Corpo de Bombeiros auditará as seguintes responsabilidades (A DRD2 gerencia 100% da parte técnica e emissão das ARTs):
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "Projeto Técnico de Prevenção e Combate (Plantas DWG em conformidade com as ITs)",
              "Memorial de Cálculo Hidráulico (para Bombas, Hidrantes e Sprinklers)",
              "Laudo de SPDA (Para-Raios) com Medições de Aterramento (NBR 5419)",
              "Laudos Especiais para Subestações Elétricas e Centrais de Gás/Inflamáveis",
              "Atestado de Brigada de Incêndio Industrial e Plano de Abandono (IT-17)",
              "ART do Engenheiro Civil/Mecânico assinalada no CREA-SP responsável pela Planta",
            ].map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-slate-200">
                <Box className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">{doc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-2xl text-red-900 font-bold text-sm">
            Toda a documentação deve refletir com exatidão o momento atual do seu layout industrial. Um estoque não mapeado durante o protocolo anulará a vistoria no final do processo, forçando a empresa a pagar as taxas novamente.
          </div>
        </div>
      </section>

      {/* Formulário pré-preenchido para o nicho de Galpão */}
      <LeadForm predefinedPropertyType="Galpão / Indústria" />
    </>
  );
}
