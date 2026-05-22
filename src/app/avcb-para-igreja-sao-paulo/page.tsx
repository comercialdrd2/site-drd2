import Link from "next/link";
import Image from "next/image";
import { 
  Phone, CheckCircle2, Building, FileCheck, ShieldAlert, BadgeInfo, 
  MapPin, Users, Bell, ArrowRight, AlertCircle, 
  Hammer, ClipboardList, GraduationCap, Music, Accessibility, Zap, Church,
  BookOpen, Scale, Lightbulb
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

const _pageTitle = "AVCB para Igreja em SP: Aprovação Rápida em 2026 | DRD2 Engenharia";
const _pageDesc = "Obtenha o AVCB para sua Igreja em SP com 100% de segurança jurídica. Especialistas no Grupo F-6, IT-11 e IT-17. Evite interdições e multas. Diagnóstico técnico gratuito em 24h.";

export const metadata = {
  title: "AVCB para Igreja em SP: Aprovação Rápida em 2026 | DRD2 Engenharia",
  description: "Obtenha o AVCB para sua Igreja em SP com 100% de segurança jurídica. Especialistas no Grupo F-6, IT-11 e IT-17. Evite interdições e multas. Diagnóstico técnico gratuito em 24h.",
  alternates: {
    canonical: "/avcb-para-igreja-sao-paulo",
  },
};

export default function AVCBIgrejaMasterPage() {
  const service = servicesData["avcb-para-igreja-sao-paulo"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/avcb-para-igreja-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "AVCB para Igrejas e Templos SP",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB para Igrejas SP", item: "/avcb-para-igreja-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO — VERSÃO 10/10 MASTER ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:flex items-center bg-slate-950 border-b-8 border-red-600 ">
        <Image
          src="/images/hero-igreja.webp"
          alt="Segurança contra incêndio em igreja moderna com grande público em São Paulo"
          fill
          className="object-cover object-center opacity-55 grayscale-[20%]"
          priority
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow-lg shadow-red-900/20">
              Grupo F-6 — Templos e Igrejas — Regularização 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">AVCB PARA</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-2 block drop-shadow-2xl">
                IGREJA EM SP 2026
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl">
              Cumpra o Decreto <strong className="text-red-500">69.118/2024</strong> e proteja seus fiéis. Regularização completa sem interrupção dos cultos.
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
          { label: "AVCB para Igreja em SP" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── INTRODUÇÃO TÉCNICA — VERBATIM RESTORATION ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter mb-8 italic">
                O AVCB para Igrejas e a <span className="text-red-600 not-italic font-black italic">Reunião de Público</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  O Auto de Vistoria do Corpo de Bombeiros (AVCB) é o documento que comprova que sua igreja ou templo atende aos requisitos mínimos de segurança contra incêndio e pânico exigidos pela legislação estadual (Decreto nº 69.118/2024). Para templos religiosos, o CBPMESP aplica rigor técnico elevado devido à alta densidade de ocupação em horários de culto e à presença de públicos vulneráveis.
                </p>
                
                <h3 className="text-2xl font-black text-slate-900 mt-12 mb-4 uppercase italic tracking-tighter">Ocupação Grupo F: Reunião de Público</h3>
                <p>
                  Igrejas são classificadas como <strong>Ocupação F-2</strong> (Locais de reunião de público). Um dos critérios mais críticos é o cálculo de população: o Bombeiro considera a lotação baseada na área útil, frequentemente adotando o índice de <strong>1,5 m² por pessoa</strong> para áreas com cadeiras ou bancos, o que determina diretamente o dimensionamento das saídas de emergência.
                </p>

                <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white my-12 shadow-2xl border-l-8 border-red-600">
                  <h4 className="text-xl font-black mb-6 uppercase italic tracking-tight">Responsabilidade da Liderança</h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed font-medium">Operar sem AVCB válido expõe os líderes religiosos a responsabilidade civil e criminal direta em caso de sinistro, além da interdição pela Prefeitura.</p>
                  <p className="text-slate-200 text-sm font-bold uppercase italic leading-relaxed">
                    ⚠️ Atenção: Imóveis alugados para igrejas exigem que o locatário (a igreja) mantenha o AVCB compatível com a sua atividade de reunião de público.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-8 rounded-[3rem] border-2 border-slate-100 shadow-2xl relative overflow-hidden sticky top-24 text-balance">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full -mr-12 -mt-12" />
                <h3 className="text-2xl font-black text-slate-900 mb-6 italic">Agendar Auditoria no Templo</h3>
                <LeadForm variant="compact" showWrapper={false} />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── ENQUADRAMENTO F-6 ── */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
               Enquadramento Normativo <span className="text-red-600 not-italic">Grupo F-6</span>
             </h2>
             <p className="text-xl text-slate-400 max-w-3xl mx-auto">Igrejas são classificadas como "Locais de Reunião de Público". Definir o enquadramento correto é o primeiro passo para não desperdiçar investimento.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-black text-red-500 mb-4 uppercase italic tracking-tight">CLCB (Simplificado)</h3>
                <p className="text-slate-300 font-medium leading-relaxed">Destinado a templos de menor porte com baixa capacidade de lotação e área reduzida. Processo mais rápido e econômico.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-black text-red-500 mb-4 uppercase italic tracking-tight">AVCB (Projeto Completo)</h3>
                <p className="text-slate-300 font-medium leading-relaxed">Obrigatório para igrejas com salão principal de grande capacidade, múltiplos pavimentos ou usos complementares (escolas/creches).</p>
              </div>
           </div>

           {/* Profundidade Técnica Adicionada */}
           <div className="mt-16 p-12 bg-white/5 border-2 border-red-600/30 rounded-[3rem] text-left">
              <h3 className="text-2xl font-black mb-8 text-white uppercase italic tracking-tighter flex items-center gap-4">
                <Scale className="w-8 h-8 text-red-500" /> Profundidade Técnica: IT-11, IT-17 e IT-10
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="space-y-4">
                  <h4 className="text-red-500 font-black uppercase text-sm tracking-widest">IT-11: Saídas de Emergência</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">O dimensionamento de portas, rampas e escadas em igrejas não é opcional. Calculamos a Unidade de Passagem (UP) considerando o tempo de escoamento seguro de fiéis, garantindo que o palco e a nave central possuam rotas desobstruídas.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-red-500 font-black uppercase text-sm tracking-widest">IT-17: Brigada de Incêndio</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Diferente de prédios residenciais, igrejas exigem uma brigada voluntária treinada especificamente para lidar com pânico coletivo e auxílio a idosos. Emitimos o certificado conforme a norma 2026.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-red-500 font-black uppercase text-sm tracking-widest">IT-10: Controle de Chamas</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Revestimentos acústicos, carpetes e cortinas de palco devem possuir o CMAR (Controle de Materiais de Acabamento e Revestimento). Sem o laudo de ignitabilidade, o AVCB é indeferido sumariamente.</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── CTA 2 — APÓS SISTEMAS ── */}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Sua igreja atende a todas essas exigências?
          </p>
          <CtaWhatsApp
            label="Fale com um engenheiro agora — sem compromisso"
            occupationType="igreja ou templo"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── OS 3 ERROS QUE REPROVAM ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tighter uppercase italic">
            Os 3 Erros que <span className="text-red-600 not-italic">Reprovam Igrejas</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-white">
            {[
              { 
                t: "Saídas de Emergência", 
                d: "Portas obstruídas por instrumentos ou insuficientes para a lotação máxima de feriados e festividades.", 
                c: "bg-slate-900",
                e: "Erro 1" 
              },
              { 
                t: "Materiais Inflamáveis", 
                d: "Cortinas pesadas de palco, carpetes e revestimentos de madeira sem tratamento retardante de chama.", 
                c: "bg-red-900",
                e: "Erro 2" 
              },
              { 
                t: "Ausência de Brigada", 
                d: "Líderes e voluntários sem treinamento para conduzir idosos e crianças em caso de emergência ou pânico.", 
                c: "bg-slate-900",
                e: "Erro 3" 
              }
            ].map((item, i) => (
              <div key={i} className={`${item.c} p-10 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-transform relative`}>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 block text-red-500">{item.e}</span>
                <h3 className="text-xl font-black mb-4 uppercase italic tracking-tight">{item.t}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed italic">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXIGÊNCIAS TÉCNICAS — GRUPO F-2 ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center text-balance">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 tracking-tighter uppercase italic text-center">
            Sistemas de <span className="text-red-600 not-italic font-black italic">Segurança Obrigatórios</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { t: "Saídas de Emergência", d: "Dimensionamento rigoroso (IT-11) para evacuação rápida em horários de pico.", i: <Accessibility className="w-8 h-8"/> },
              { t: "Iluminação Auxiliar", d: "Blocos autônomos (IT-18) em todas as áreas de circulação e palco.", i: <Zap className="w-8 h-8"/> },
              { t: "Controle de Materiais", d: "CMAR (IT-10) para cortinas, carpetes e revestimentos de palco.", i: <ShieldAlert className="w-8 h-8"/> },
              { t: "Brigada de Incêndio", d: "Treinamento (IT-17) de voluntários e líderes para gestão de pânico.", i: <Users className="w-8 h-8"/> }
            ].map((sys, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 hover:shadow-xl transition-all group">
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform">{sys.i}</div>
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">{sys.t}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{sys.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROVA SOCIAL ── */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso templo sem interromper nenhum culto. A equipe foi extremamente respeitosa com nossa dinâmica e o AVCB foi aprovado de primeira. Deus abençoe!",
          author: "Pastor Roberto Alves",
          role: "Igreja Renovação da Fé — Santo André SP",
        }}
      />

      {/* ── FAQ IGREJA — VERBATIM RESTORATION ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic text-center">
              Dúvidas Frequentes: <span className="text-red-600 not-italic font-black italic uppercase">AVCB de Igrejas</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Igreja pequena com 50 membros precisa de AVCB?",
                answer: "Sim. Toda igreja ou templo religioso é classificado como Local de Reunião de Público (Grupo F) e exige regularização técnica. O que varia é a complexidade do processo (CLCB ou AVCB)."
              },
              {
                question: "O que é o CMAR e por que é exigido em igrejas?",
                answer: "O Controle de Materiais de Acabamento e Revestimento (IT-10) garante que cortinas, carpetes e forros não propaguem chamas nem emitam fumaça tóxica."
              },
              {
                question: "O AVCB do salão alugado é de responsabilidade de quem?",
                answer: "A responsabilidade pela obtenção e renovação do AVCB compatível com a atividade religiosa é da igreja (locatário), embora o proprietário deva entregar o imóvel com os sistemas básicos funcionando."
              },
              {
                question: "Voluntários podem ser os brigadistas da igreja?",
                answer: "Sim. Os membros e voluntários podem ser treinados conforme a IT-17 para compor a brigada de incêndio, desde que o treinamento seja certificado por empresa de engenharia."
              },
              {
                question: "Qual o risco de operar o templo sem o AVCB?",
                answer: "Além de multas e interdição pela Prefeitura, a liderança responde civil e criminalmente em caso de sinistro. Além disso, o seguro do imóvel é anulado sem o documento."
              }
            ].map((faq, i) => (
               <details key={i} className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all hover:bg-slate-50">
                <summary className="flex items-center justify-between p-7 font-black text-slate-900 text-lg select-none uppercase italic tracking-tight leading-tight">
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


      {/* ── LEITURA RECOMENDADA ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="text-left">
              <span className="text-red-600 font-black uppercase tracking-widest text-[10px] bg-red-600/10 px-4 py-1.5 rounded-full italic">Conhecimento que Protege</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mt-6 tracking-tighter uppercase italic leading-none">
                Leitura <br /><span className="text-red-600 not-italic italic">Recomendada</span>
              </h2>
            </div>
            <Link href="/blog" className="group flex items-center gap-3 text-slate-950 font-black uppercase text-xs tracking-[0.2em] border-b-2 border-red-600 pb-1 hover:text-red-600 transition-all italic">
              Ver todos os artigos <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "O que mudou na vistoria do Corpo de Bombeiros em 2026?",
                slug: "como-funciona-vistoria-do-corpo-de-bombeiros",
                image: "/images/blog/fire_safety_equipment_premium.webp",
                desc: "Tudo o que você precisa saber sobre as novas exigências de fiscalização em locais de culto."
              },
              {
                title: "Diferença entre AVCB e CLCB: Qual o certo para você?",
                slug: "diferenca-entre-avcb-e-clcb",
                image: "/images/blog/blog_hero_diferenca.png",
                desc: "Descubra o caminho mais rápido e barato para regularizar seu templo religioso."
              },
              {
                title: "Quem Paga o AVCB: Proprietário ou Inquilino?",
                slug: "quem-paga-o-avcb-proprietario-ou-inquilino",
                image: "/images/blog/blog_hero_quem_paga.png",
                desc: "Esclareça as responsabilidades legais em imóveis alugados para fins religiosos."
              }
            ].map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} className="group bg-white rounded-[3rem] overflow-hidden border border-slate-200 hover:shadow-2xl hover:border-red-600/20 transition-all flex flex-col h-full font-black italic">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 hover:grayscale-0 grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-slate-950 mb-4 group-hover:text-red-600 transition-colors leading-tight uppercase italic tracking-tighter">{post.title}</h3>
                  <p className="text-slate-500 text-sm font-semibold mb-8 leading-relaxed italic not-italic font-bold">{post.desc}</p>
                  <div className="mt-auto flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-red-600 italic">
                    Ler artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA 3 — APÓS ARTIGOS / PRÉ-SILO ── */}
      <div className="py-12 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Não arrisque a segurança dos seus fiéis.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Regularize com quem já aprovou centenas de igrejas e templos em SP.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="igreja ou templo"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

{/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Igreja</span></h2>
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
        occupation="Igreja"
        currentSlug="/avcb-para-igreja-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Igreja"
        currentSlug="/avcb-para-igreja-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/avcb-para-igreja-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Igrejas em SP"
      />

      <ServiceClusterLinks currentSlug="/avcb-para-igreja-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-para-igreja-sao-paulo" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-para-igreja-sao-paulo" />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-red-900 text-center relative overflow-hidden text-white border-t-8 border-slate-900 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4 blur-3xl"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Sua Igreja está <span className="text-black not-italic font-black italic underline decoration-white font-black">protegida em 2026?</span>
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium lead-relaxed italic">
            Evite a exposição da sua liderança e garanta a integridade física dos seus fiéis. Atuamos com discrição e agilidade técnica.
          </p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all border-2 border-white"
          >
            <Phone className="w-8 h-8 inline mr-2" /> Regularizar Templo Agora
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-100 opacity-50">Especialistas em Reunião de Público | Grupo F-6 — 2026</p>
        </div>
      </section>
      <LeadForm predefinedPropertyType="Igreja / Templo" />
    </>
  );
}

