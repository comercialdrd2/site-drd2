import Link from "next/link";
import Image from "next/image";
import {
  Phone, CheckCircle2, AlertTriangle, ShieldAlert, BadgeInfo,
  Scale, Library, FileCheck, Shield, BookOpen,
  Lightbulb, MapPin, Map, Bell, ArrowRight,
  Users, Building2, Building, Activity, Store,
  Zap, Truck, Warehouse, Utensils, GlassWater,
  Music, HelpCircle, HeartPulse, ClipboardCheck, Siren,
  Target, Briefcase, Factory, Hexagon, Car,
  Settings, Cross, Stethoscope, GraduationCap, Server,
  Trees, Landmark, StethoscopeIcon, Bed, Moon,
  Map as MapIcon, Key, FileWarning, EyeOff,
} from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrustBar from "@/components/TrustBar";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import SocialProof from "@/components/SocialProof";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import InternalLinksBlock from "@/components/InternalLinksBlock";

const _pageTitle = "AVCB na República SP | Engenheiro para Hotéis, Hostels e Comércio";
const _pageDesc = "AVCB na República com engenheiro especializado. Regularização para hotéis, hostels, edifícios comerciais e condomínios na Praça da República e região central. DRD2 Engenharia.";

export const metadata = {
  title: "AVCB na República SP | Engenheiro para Hotéis, Hostels e Comércio",
  description: "AVCB na República com engenheiro especializado. Regularização para hotéis, hostels, edifícios comerciais e condomínios na Praça da República e região central. DRD2 Engenharia.",
  alternates: {
    canonical: "/avcb-republica",
  },
};

export default function RepublicaLandingPage() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const faqItems = [
    {
      question: "Hotel na República sem AVCB há anos — quais são os riscos imediatos?",
      answer: "Risco de embargo imediato em fiscalização, impossibilidade de manter o registro no Ministério do Turismo e responsabilidade civil integral em caso de incêndio com hóspedes. Para meios de hospedagem, o risco é especialmente grave pela presença de pessoas dormindo. Regularize com urgência."
    },
    {
      question: "Hostel na República em imóvel histórico — o Corpo de Bombeiros aceita soluções alternativas?",
      answer: "Sim. As ITs do CBPMESP preveem medidas compensatórias para situações onde a instalação convencional não é viável. A DRD2 tem expertise em aplicar essas alternativas normativas em imóveis históricos da República."
    },
    {
      question: "Edifício comercial antigo na República sem projeto original — como fazer o AVCB?",
      answer: "O processo começa com um levantamento técnico completo — medição e documentação do imóvel existente, produzindo as plantas necessárias para o projeto PPCI. A DRD2 conduz essa etapa de forma integrada ao processo de AVCB."
    },
    {
      question: "Pensão na República que funciona há décadas sem AVCB — pode ser fechada?",
      answer: "Sim. Pensões são enquadradas como meios de hospedagem e estão sujeitas a embargo pelo Corpo de Bombeiros. A fiscalização do Centro é ativa. Regularize antes de receber a autuação."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/avcb-republica",
        title: _pageTitle,
        description: _pageDesc,
        neighborhood: "República",
        serviceName: "AVCB na República",
        faqs: faqItems,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Centro Expandido", item: "/avcb-centro" },
          { name: "República", item: "/avcb-republica" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section - Estilo Premium H-3 */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Regularização de AVCB de Hotéis e Edifícios Antigos na República Centro"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> Risco Crítico em Hospedagem (Dormitórios)
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
              AVCB na República: <br className="hidden md:block" />
              <span className="text-red-500 text-3xl md:text-3xl lg:text-5xl block mt-2">Hotéis, Hostels, Pensões e Centros Comerciais Centenários</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed font-medium">
              O coração pulsante e histórico do Centro esconde a maior taxa de edificações sem planta original e alvarás irregulares de São Paulo. A fiscalização de hospedagem atua sob embargos massivos do Corpo de Bombeiros na região.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500 uppercase tracking-tighter"
              >
                Auditoria de Irregularidade no Centro
              </a>
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Regularização ativa de Plantas e Edifícios Comerciais Antigos In Loco.",
                "Estratégia Defensiva Especializada para Hostels, Pensões e Hotéis Red." ,
                "Engenharia Inteligente p/ evitar danos construtivos a sobrados do século XX."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-lg text-gray-300 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Intro (SEO TEXT) + Numbers Style */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="prose prose-lg text-slate-700">
               <h2 className="text-4xl font-black text-slate-900 leading-tight mb-8">
                Engenharia de Plantas no Centro:<br />
                <span className="text-red-600">Alta Especificidade DRD2</span>
              </h2>
              <ul className="space-y-4 mb-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Diagnóstico e redesenho de plantas "In Loco" para edifícios perdidos (sem doc).</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Projeto PPCI focado em soluções compensatórias em imóveis antigos do centro.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Alinhamento completo focando na isenção de sinistralidade de Hóspedes Ativos.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Defesas Técnicas perante autuações ativas já lançadas à Hostels/Pensões.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Retrofits de adequação híbrida interligada (Prédios mistos comércio/moradia).</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />Renovações de Laudos para bares noturnos e comércios populares.</li>
              </ul>
              <p className="font-bold text-slate-900 mt-6">* Atendimento pericial na Praça da República e Entorno da República.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Hostels", sub: "Polo Hospedagem SP" },
                { label: "Irregular", sub: "Taxa Crítica no Bairro" },
                { label: "Retro", sub: "Recriação de Projetos" },
                { label: "100%", sub: "Proteção Risco Noturno" }
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

      {/* Demanda Expressiva (Dark Section cards) - "O perfil da República" */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <FileWarning className="w-16 h-16 text-red-600 mx-auto mb-8 opacity-50" />
           <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">O Risco Inviável de Operar Sem Alvará <br/><span className="text-red-500">e os Desafios de Documentação Antiga</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { icon: Moon, title: "Risco em Hóspedes", text: "As ITs punem com mais força as edificações como Pensões e Hostels em que a lotação corre risco enquanto DORME, cobrando autonomia luminosa e alarmes máximos." },
                { icon: MapIcon, title: "Sem Planta e Sem Base", text: "Você possui as plantas de 1930 ddo seu Galpão? Não. Nós refazemos o seu prédio in loco usando inteligência criativa para ser absorvida e tolerada pelo Estado." },
                { icon: EyeOff, title: "Uso Irregular Massivo", text: "A República concentra os maiores bolões da cidade em edifícios trabalhando há décadas à escura de documentação oficial, arriscando prisões civis severas a cada dia." },
                { icon: Building2, title: "Uso Misto Fatal", text: "Edifícios fatiados. Hostel no 1º, Restaurante no térreo e República Estudantil acima. Precisamos fatiar cirurgicamente sem que uma classe contamine a liberação da outra." }
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

      {/* Regiões Atendidas na República */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <Key className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Artérias Críticas Atendidas</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-600 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Alta Concentração Hospedagem</div>
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Praça Central & Rua do Arouche</h3>
               <p className="text-slate-600 font-medium">As malhas centrais. Quarteirões amontados em torno da Praça da República e largos turísticos cimentados por centenas de Hostels e Meios de Hospedagens operando sem CLCB ou AVCB Noturno.</p>
            </div>
            
            <div className="bg-white p-10 rounded-[2.5rem] border border-red-900 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 bg-red-900 text-white font-black text-[10px] tracking-widest uppercase rounded-bl-xl">Edifícios do Século XX</div>
               <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Av. República & São Luís</h3>
               <p className="text-slate-600 font-medium">Torres e Corredores Comerciais clássicos. Gigantes de uso absolutamente misto onde as avaliações in-loco encontram escadarias que não suportam redes padrão sem retrofit criativo.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Ruas Basílio da Gama e Araújo</h3>
              <p className="text-slate-600 font-medium">Densidade máxima. Picos absurdos entre botecos e estabelecimentos gastronômicos com galões aglomerados no térreo enquanto redes de dormir superlotam sobradões em cima.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-black text-red-900 mb-4 border-b-2 border-red-600/20 pb-4">Martins Fontes e Vieira de Carvalho</h3>
              <p className="text-slate-600 font-medium">Zonas ferventes focadas no tráfego perene comercial e varejista do centro que muitas vezes desconhecem os alertas iniciais de renovações rotineiras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de AVCB - Tipografia Elegante e Focada */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter">Soluções Adaptáveis no <span className="text-red-600">Centro Histórico</span></h2>
           
           <div className="space-y-8">
             <div className="bg-slate-50 border-l-8 border-red-600 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🛏️ Hotéis, Hostels Internacionais e Pensões</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Quartos precisam de sprinklers precisos e não existe negociação quando hóspedes podem ficar inertes a fumaça durante o sono. Nós removemos o erro de interpretação no enquadramento, protegendo você de punições do Ministério do Turismo.</p>
             </div>

             <div className="bg-slate-50 border-l-8 border-red-900 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏛️ Edifícios Comerciais de Imensas Galerias (Antigos)</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Faltam Plantas? Os edifícios das décadas de 1930 a 1960 não tem bases sólidas de aprovação. A DRD2 lidera os diagnósticos técnicos pesados para mapear o prédio inteiro a pé antes mesmo da concepção tática a fim de aprovar seu projeto.</p>
             </div>
             
             <div className="bg-slate-50 border-l-8 border-slate-800 p-8 md:p-12 rounded-r-[3rem] shadow-sm">
               <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">🏢 Condomínios Residenciais Mistos e Gastronomia</h3>
               <p className="text-slate-700 font-medium leading-relaxed max-w-4xl">Com o crescimento retro dos centros de bares antigos o CLCB se faz indispensável. Separamos adequadamente a licença do lojista no térreo sem afetar o síndico dos edifícios acima.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Metodologia de Caminho (Estilo Processo DRD2) */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Alvará Garantido com <br/><span className="text-red-600 italic">Estrutura In-Loco Base</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Diagnóstico In-Loco", desc: "Laudo Físico Exame Predial." },
              { step: "2", title: "Recriação Técnica", desc: "Medição de Imóveis sem Documentação Antiga." },
              { step: "3", title: "Projeto Oficial", desc: "Assinatura do Engenheiro via CREA-SP." },
              { step: "4", title: "Protocolo Híbrido", desc: "Enquadramento misto de Risco." },
              { step: "5", title: "Fim do Embargo", desc: "Certificação Legalizada das Portas." },
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
               <h4 className="text-2xl mb-4">Investimento Compatível à Complexidade</h4>
               <ul className="text-sm font-medium space-y-2 opacity-90 normal-case mb-4">
                 <li>• Hotéis e Pensões de Alta Rota de Embargo: Mapeado Imediatamente</li>
                 <li>• Edifícios Históricos Sem Planta: Prazo baseado no Levantamento Civil Físico</li>
                 <li>• Comércios e Bares menores (CLCB express): Rapidez e Valor Diluído</li>
               </ul>
               <p className="text-xs uppercase tracking-widest opacity-80">A DRD2 desenvolve a solução compensatória antes do Bombeiro dizer 'Não'.</p>
             </div>
             <a href={whatsappLink} className="bg-white text-red-600 px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform shrink-0 whitespace-nowrap">Solicite Inspeção Agora</a>
          </div>
        </div>
      </section>

            {/* â"€â"€ PROVA SOCIAL â"€â"€ */}
      <SocialProof
        testimonial={{
          text: "A DRD2 regularizou nosso estabelecimento em Republica com agilidade e sem burocracia. Processo impecavel, AVCB aprovado sem nenhuma pendência. Recomendo a todos os empresarios da regiao.",
          author: "Cliente DRD2 Engenharia",
          role: "Empresario — Republica, São Paulo",
        }}
      />

      {/* FAQ Estilo Casa de Repouso */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-16 uppercase tracking-tighter">Perguntas Frequentes: <span className="text-red-600">República (Irregularidades)</span></h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <details key={i} className="group bg-white rounded-[2rem] p-8 border border-slate-100 open:shadow-2xl transition-all cursor-pointer">
                <summary className="text-xl font-extrabold text-slate-900 list-none flex justify-between items-center pr-4 leading-tight">
                  {faq.question}
                  <span className="text-red-600 text-3xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-6 text-slate-600 leading-relaxed font-bold border-t border-slate-100 pt-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
           <Map className="w-12 h-12 text-red-900 mx-auto mb-6" />
           <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Atendemos as Artérias Centrais</h3>
           <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-8">Da República atuamos em raio implacável por Consolação, Liberdade, Marco Zero da Sé, Santa Cecília e Campos Elíseos cortando irregularidades operacionais do Centro de São Paulo.</p>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-900 border-b-8 border-red-600 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase italic tracking-tighter">Evite Embargos em seu Hostel!</h3>
              <p className="text-slate-400 font-medium italic text-sm">Escritório DRD2 atua diariamente perante Edificações Históricas e Mistas Irregulares e Sem Plantas Construtivas. Salvamos negócios.</p>
            </div>
            <a href={whatsappLink} target="_blank" className="bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl shadow-xl hover:bg-[#1EBE5A] transition-all uppercase tracking-widest text-xs whitespace-nowrap">
              Orçamento Confidencial
            </a>
          </div>
        </div>
      </section>

      {/* â"€â"€ CTA 4 â"€â"€ */}
      <div className="py-14 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-slate-300 text-xl font-black uppercase italic tracking-tight mb-2">
            Não arrisque seu CNPJ em Republica.
          </p>
          <p className="text-white text-sm font-bold mb-8">
            Sem AVCB, seu estabelecimento pode ser interditado a qualquer momento.
          </p>
          <CtaWhatsApp
            label="Fale agora com a DRD2 e resolva hoje"
            occupationType="imóvel em Republica"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>


      {/* Documentacao Necessaria */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter text-center">Documentação Necessaria para <span className="text-red-600">AVCB em Republica</span></h2>
          <p className="text-slate-600 font-medium mb-8 text-center">
            Para protocolar o pedido de AVCB junto ao Corpo de Bombeiros, seu imóvel em Republica precisa dos seguintes documentos:
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
            A DRD2 realiza auditoria documental gratuita antes do protocolo. Identificamos divergencias de área, laudos vencidos e irregularidades antes de submeter o processo ao Corpo de Bombeiros de Republica. Evite exigencias e atrasos.
          </div>
        </div>
      </section>

      
      <InternalLinksBlock
        currentSlug="/avcb-republica"
        mode="bairro"
        maxLinks={6}
        titulo="Serviços de AVCB em República"
      />
      <LeadForm />

      <ServiceClusterLinks currentSlug="/avcb-republica" />
      <ServiceBlogLinks currentSlug="/avcb-republica" />

      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <NeighborhoodSilo currentSlug="/avcb-republica" />
    </>
  );
}

