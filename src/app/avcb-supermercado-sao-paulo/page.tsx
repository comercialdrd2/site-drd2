import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, Building, FileCheck, ShieldAlert,
  BadgeInfo, ArrowRight, Scale, AlertTriangle, Lightbulb,
  MapPin, ClipboardCheck, Users, ShieldCheck, ZapOff,
  Flame, ShoppingCart, Store, ShoppingBag, Truck,
  FireExtinguisher, LayoutGrid, Zap,
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

const _pageTitle = "AVCB para Supermercado em São Paulo | DRD2 Engenharia";
const _pageDesc = "A DRD2 Engenharia é especialista em AVCB para supermercados em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com agilidade e segurança normativa. Diagnóstico técnico gratuito.";

export const metadata = {
  title: "AVCB para Supermercado em São Paulo | DRD2 Engenharia",
  description: "A DRD2 Engenharia é especialista em AVCB para supermercados em São Paulo. Projeto, adequação e aprovação no Corpo de Bombeiros com agilidade e segurança normativa. Diagnóstico técnico gratuito.",
  alternates: {
    canonical: "/avcb-supermercado-sao-paulo",
  },
};

export default function AVCBSupermercadoMasterPage() {
  const service = servicesData["avcb-supermercado-sao-paulo"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/avcb-supermercado-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "AVCB Supermercado SP",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "AVCB Supermercado SP", item: "/avcb-supermercado-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* ── HERO — VERSÃO 10/10 MASTER ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:flex items-center bg-slate-950 border-b-8 border-red-600 ">
        <Image
          src="/images/bg-supermercado.jpg"
          alt="Interior de um supermercado moderno com sistemas de segurança contra incêndio em São Paulo"
          fill
          className="object-cover object-center opacity-50 grayscale-0"
          priority
          sizes="100vw"
          quality={65}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-2 lg:mb-3 shadow-lg shadow-red-900/20">
              Grupo C/F — Supermercados e Varejo — Regularização 2026
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-2 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              <span className="text-white">AVCB PARA</span>
              <span className="text-red-600 not-italic text-3xl md:text-3xl lg:text-4xl mt-1 lg:mt-2 block drop-shadow-2xl">
                SUPERMERCADO EM SÃO PAULO
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl">
              Regularização para <strong className="text-red-600">Supermercados, Mercados e Minimercados</strong> com precisão normativa e agilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink} 
                className="bg-[#25D366] hover:bg-[#1EBE5A] hover:text-white text-white font-black px-8 py-3 rounded-2xl text-lg transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366]"
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
          { label: "AVCB para Supermercado em SP" },
        ]}
        dark
      />
      <TrustBar dark />

      {/* ── INTRODUÇÃO — RISCO REAL ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">
                Risco Elevado: <span className="text-red-600 not-italic">O Desafio da Segurança em Supermercados</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Supermercados, mercados e minimercados estão entre os estabelecimentos com maior fluxo de público em São Paulo — e consequentemente entre os que recebem maior atenção do Corpo de Bombeiros.
                </p>
                <p>
                  Alto volume de pessoas circulando simultaneamente, grande carga de produtos inflamáveis, área de frios com sistemas elétricos intensivos e setor de padaria com equipamentos de alta temperatura fazem do supermercado uma ocupação de risco elevado que exige regularização técnica rigorosa.
                </p>
                <p className="text-slate-900 font-bold border-l-4 border-red-600 pl-6 italic">
                  O AVCB é requisito obrigatório para obtenção e renovação do alvará de funcionamento — sem ele, o estabelecimento está irregular e sujeito a interdição imediata.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-red-50 p-8 rounded-[2.5rem] border border-blue-100 shadow-xl">
              <h4 className="text-red-600 font-black text-xs uppercase tracking-widest mb-4 italic text-center">Fatores de Risco Crítico:</h4>
              <ul className="space-y-6">
                {[
                  { t: "Alto Fluxo de Clientes", d: "Exige rotas de fuga perfeitamente dimensionadas." },
                  { t: "Carga Combustível Elevada", d: "Estoque massivo de produtos inflamáveis." },
                  { t: "Sistemas Elétricos Críticos", d: "Câmaras frias e iluminação de alta potência." }
                ].map((item, i) => (
                  <li key={i} className="text-center">
                    <span className="block text-slate-900 font-black text-sm uppercase tracking-tight">{item.t}</span>
                    <span className="block text-slate-500 text-xs font-bold leading-relaxed italic">{item.d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUEM PRECISA ── */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
               Estão Obrigados ao <span className="text-red-600 not-italic">AVCB ou CLCB:</span>
             </h2>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto">Conforme a IT-02 do CBPMESP e o Decreto Estadual nº 69.118/2024.</p>
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "Supermercados e Hipermercados", i: <ShoppingCart className="w-5 h-5"/> },
                { t: "Mercados e Mercearias Médias", i: <Store className="w-5 h-5"/> },
                { t: "Minimercados e Mercadinhos", i: <ShoppingBag className="w-5 h-5"/> },
                { t: "Atacadistas e Atacarejos", i: <Truck className="w-5 h-5"/> },
                { t: "Lojas de Conveniência", i: <Zap className="w-5 h-5"/> },
                { t: "Supermercados com Padaria/Açougue", i: <LayoutGrid className="w-5 h-5"/> }
              ].map((loc, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-center gap-4 group hover:bg-red-600/20 transition-all border-l-4 border-l-transparent hover:border-l-red-600">
                  <span className="text-red-600 group-hover:scale-125 transition-transform">{loc.i}</span>
                  <span className="font-bold text-xs uppercase tracking-tight leading-tight">{loc.t}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── OS 3 ERROS ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tighter uppercase italic">
            Os 3 Erros que Mais <span className="text-red-600 not-italic font-black italic">Reprovam Supermercados</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { t: "Rotas de Fuga Obstruídas", d: "Corredores bloqueados por paletes ou caixas. O Bombeiro exige largura mínima garantida para evacuação simultânea.", i: <ShieldAlert className="w-8 h-8"/> },
              { t: "GLP Irregular na Padaria", d: "Central de gás interna ou sem laudo de estanqueidade. Risco gravíssimo de explosão em áreas de produção.", i: <AlertTriangle className="w-8 h-8"/> },
              { t: "Manutenção de Extintores", d: "Extintores vencidos ou da classe errada para o risco (como falta de Classe K na padaria).", i: <FireExtinguisher className="w-8 h-8"/> }
            ].map((sys, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl transition-all group hover:bg-white text-center">
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform flex justify-center">{sys.i}</div>
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight underline decoration-red-600 decoration-4 underline-offset-8">{sys.t}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{sys.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SISTEMAS OBRIGATÓRIOS ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tighter uppercase italic">
            Sistemas de Segurança <span className="text-red-600 not-italic">Obrigatórios em Supermercados</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { t: "Saídas de Emergência", d: "Dimensionadas pela lotação máxima conforme IT-08.", i: <MapPin className="w-6 h-6"/> },
              { t: "Iluminação de Emergência", d: "Autonomia de 1h em todas as áreas de circulação.", i: <Lightbulb className="w-6 h-6"/> },
              { t: "Sinalização Fotoluminescente", d: "Indicação visível de rotas e equipamentos.", i: <BadgeInfo className="w-6 h-6"/> },
              { t: "Sistema de Hidrantes", d: "Obrigatório acima de determinada área construída.", i: <Building className="w-6 h-6"/> },
              { t: "Detecção e Alarme", d: "Monitoramento automático de fumaça e calor.", i: <ShieldAlert className="w-6 h-6"/> },
              { t: "Sprinklers (Chuveiros)", d: "Exigidos em grandes áreas ou depósitos verticais.", i: <ZapOff className="w-6 h-6"/> },
              { t: "Brigada de Incêndio", d: "Treinamento de funcionários para evacuação rápida.", i: <Users className="w-6 h-6"/> },
              { t: "Sistema de SPDA", d: "Para-raios obrigatório conforme a IT-19.", i: <Zap className="w-6 h-6"/> }
            ].map((sys, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
                <div className="text-red-600 mb-4">{sys.i}</div>
                <h4 className="font-black text-slate-900 uppercase text-xs mb-2 italic">{sys.t}</h4>
                <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase">{sys.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA 2 — APÓS SISTEMAS ── */}
      <div className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Seu supermercado tem todos esses sistemas aprovados pelo CBPMESP?
          </p>
          <CtaWhatsApp
            label="Fale com um engenheiro agora — sem compromisso"
            occupationType="supermercado ou mercado"
            variant="primary"
            centered
          />
        </div>
      </div>

      {/* ── FISCALIZAÇÃO VISA ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="bg-red-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-950/10 skew-x-12 transform translate-x-1/4"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic leading-none">
                       Alerta 2026: <br/><span className="text-slate-950">VISA + Bombeiros</span>
                    </h2>
                    <p className="text-lg mb-8 font-medium">A Vigilância Sanitária está bloqueando renovações de CMVS para supermercados sem protocolo ativo de AVCB. Sem CMVS, o supermercado não pode operar legalmente.</p>
                    <ul className="space-y-4">
                      {[
                        "Cruzamento de dados CMVS x AVCB",
                        "Bloqueio imediato de licenças",
                        "Interdição pela Vigilância Sanitária",
                        "Impedimento de operação legal"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-lg font-black italic uppercase tracking-tight">
                          <CheckCircle2 className="w-6 h-6 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                 </div>
                 <div className="bg-slate-950 p-10 rounded-[2.5rem] shadow-inner text-center">
                    <p className="text-xl font-black italic mb-6">A DRD2 resolve as duas frentes: Bombeiros e Orientação Sanitária.</p>
                    <a href={whatsappLink} className="inline-block bg-[#25D366] text-white font-black px-8 py-4 rounded-xl hover:bg-[#1EBE5A] hover:text-white transition-all border-2 border-[#25D366]">
                      Regularizar Agora com Prioridade
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── METODOLOGIA DRD2 ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-black text-slate-900 leading-none uppercase italic tracking-tighter">Como a DRD2 Regulariza seu <span className="text-red-600">Supermercado?</span></h2>
                <div className="space-y-6">
                   {[
                     { t: "Diagnóstico Técnico Gratuito", d: "Visitamos o local e identificamos o enquadramento sem custo inicial." },
                     { t: "Projeto Técnico (PPCI)", d: "Plantas e memoriais no padrão exigido pelo CBPMESP com ART." },
                     { t: "Protocolo e Acompanhamento", d: "Respondemos exigências da análise técnica com agilidade." },
                     { t: "Vistoria e Emissão Final", d: "Garantimos as condições para aprovação já na primeira visita." }
                   ].map((step, i) => (
                     <div key={i} className="flex gap-6 items-start group">
                        <div className="w-12 h-12 bg-slate-950 text-red-600 rounded-full flex items-center justify-center font-black group-hover:bg-red-600 group-hover:text-white transition-all shrink-0 italic">{i+1}</div>
                        <div>
                           <h5 className="font-black text-slate-900 uppercase italic tracking-tight">{step.t}</h5>
                           <p className="text-sm text-slate-500 font-bold leading-relaxed italic">{step.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
              <div className="bg-white p-12 rounded-[4rem] border border-blue-100 shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/50 rounded-full blur-3xl" />
                 <h3 className="text-2xl font-black mb-6 italic uppercase tracking-tighter">Cidades e Regiões atendidas:</h3>
                 <div className="grid grid-cols-2 gap-4 text-[10px] font-black uppercase tracking-widest text-slate-600 italic">
                    <span className="p-3 bg-slate-50 rounded-xl border border-blue-100">São Paulo Capital</span>
                    <span className="p-3 bg-slate-50 rounded-xl border border-blue-100">Guarulhos</span>
                    <span className="p-3 bg-slate-50 rounded-xl border border-blue-100">Osasco</span>
                    <span className="p-3 bg-slate-50 rounded-xl border border-blue-100">Santo André</span>
                    <span className="p-3 bg-slate-50 rounded-xl border border-blue-100">São Bernardo</span>
                    <span className="p-3 bg-slate-50 rounded-xl border border-blue-100">São Caetano</span>
                    <span className="p-3 bg-slate-50 rounded-xl border border-blue-100">Barueri</span>
                    <span className="p-3 bg-slate-50 rounded-xl border border-blue-100">Grande São Paulo</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── CTA 3 — APÓS METODOLOGIA ── */}
      <div className="py-12 bg-red-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-white text-lg font-black uppercase italic tracking-tight mb-6">
            Pronto para regularizar seu supermercado e destravar o CMVS?
          </p>
          <CtaWhatsApp
            label="Quero regularizar meu supermercado em SP"
            occupationType="supermercado ou mercado"
            variant="secondary"
            centered
          />
        </div>
      </div>

      {/* ── FAQ ── */}
      {/* ── PROVA SOCIAL ── */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nossa rede de 3 supermercados em tempo récord. Cada unidade foi aprovada sem nenhuma pendência. Essencial para manter o CMVS em dia e operar com segurança.",
          author: "Paulo Henrique Salaveá",
          role: "Sócio — Rede Mercado Unido SP",
        }}
      />

      {/* ── FAQ ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
               Dúvidas Frequentes: <span className="text-red-600 font-black italic">AVCB para Supermercado</span>
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
               <details key={i} className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer open:ring-4 open:ring-red-600/10 transition-all">
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

      {/* ── LINKS INTERNOS ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">Acessos Rápidos por <span className="text-red-600 italic">Especialidade</span></h2>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Links internos recomendados para regularização técnica em São Paulo.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "AVCB para Restaurante", u: "/avcb-restaurante-sao-paulo", i: <ShoppingCart className="w-4 h-4"/> },
              { t: "AVCB para Galpão", u: "/avcb-galpao-industrial-sao-paulo", i: <Building className="w-4 h-4"/> },
              { t: "Quanto Custa o AVCB?", u: "/avcb-preco", i: <Scale className="w-4 h-4"/> },
              { t: "Renovação de AVCB", u: "/renovacao-avcb", i: <ClipboardCheck className="w-4 h-4"/> },
              { t: "CLCB em São Paulo", u: "/clcb-sao-paulo", i: <FileCheck className="w-4 h-4"/> },
              { t: "Sistemas de Hidrantes", u: "/hidrantes", i: <Building className="w-4 h-4"/> },
              { t: "Projetos de Incêndio", u: "/projetos-incendio", i: <LayoutGrid className="w-4 h-4"/> },
              { t: "Empresa de AVCB SP", u: "/empresa-avcb-sao-paulo", i: <Building className="w-4 h-4"/> }
            ].map((link, i) => (
              <Link 
                key={i} 
                href={link.u}
                className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center justify-between group hover:border-red-600 hover:bg-red-50 transition-all font-black text-[10px] uppercase italic"
              >
                <div className="flex items-center gap-3">
                  <span className="text-red-600 group-hover:scale-110 transition-transform">{link.i}</span>
                  <span>{link.t}</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA 4 — PRÉ-SILO ── */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Supermercado sem AVCB não consegue renovar o CMVS.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            A Vigilância Sanitária está bloqueando licenças para estabelecimentos sem protocolo ativo.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="supermercado ou mercado"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

{/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Supermercado</span></h2>
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
        occupation="Supermercado"
        currentSlug="/avcb-supermercado-sao-paulo"
      />



      <OccupationDepthBlock
        occupation="Supermercado"
        currentSlug="/avcb-supermercado-sao-paulo"
      />

      <InternalLinksBlock
        currentSlug="/alvara-bombeiro-supermercado-sao-paulo"
        mode="ocupação"
        maxLinks={8}
        titulo="AVCB para Supermercados em SP"
      />

      <ServiceClusterLinks currentSlug="/avcb-supermercado-sao-paulo" />
      <ServiceBlogLinks currentSlug="/avcb-supermercado-sao-paulo" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-supermercado-sao-paulo" />

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-slate-950 text-center relative overflow-hidden text-white border-t-8 border-red-600 mt-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 transform translate-x-1/4 blur-3xl"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Opere seu supermercado com <span className="text-red-600 not-italic font-black italic underline decoration-white">Segurança Técnica.</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium lead-relaxed italic">
            Não arrisque multas pesadas ou o fechamento pela Vigilância Sanitária. Proteja seu patrimônio e seus clientes hoje mesmo.
          </p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            className="animate-alert-pulse bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-2xl hover:bg-[#1EBE5A] hover:text-white transition-all border-2 border-[#25D366] inline-block"
          >
            <Phone className="w-8 h-8 inline mr-2" /> Solicitar Diagnóstico técnico gratuito
          </a>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-red-600 opacity-80">Especialista em Regularização Comercial | Grande São Paulo</p>
        </div>
      </section>
    </>
  );
}

