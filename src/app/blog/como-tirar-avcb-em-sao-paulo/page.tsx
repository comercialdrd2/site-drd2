import Link from "next/link";
import Image from "next/image";
import { JsonLD } from "@/components/JsonLD";
import {
  Phone, CheckCircle, Calculator, Info, ArrowRight,
  ShieldCheck, ListChecks, HardHat, ClipboardCheck, DraftingCompass,
  Send, Search, Scroll, Clock, HelpCircle,
  CheckCircle2,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BlogStrategicLinks from "@/components/BlogStrategicLinks";
import BlogAuthorEvidence from "@/components/BlogAuthorEvidence";

export const metadata = {
  title: "Como Tirar o AVCB em São Paulo: Passo a Passo Completo e Atualizado",
  description: "Aprenda como tirar o AVCB em São Paulo com este guia técnico e atualizado. Passo a passo do processo, documentos necessários, prazos e dicas para aprovação garantida.",
  alternates: {
    canonical: "/blog/como-tirar-avcb-em-sao-paulo",
  },
};

export default function ComoTirarAVCBPost() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://drd2.com.br/blog/como-tirar-avcb-em-sao-paulo/#article",
        "headline": "Como Tirar o AVCB em São Paulo: Passo a Passo Completo e Atualizado",
        "description": "Guia técnico sobre o processo de obtenção do AVCB em São Paulo, cobrindo desde a contratação do engenheiro até a vistoria final.",
        "author": { "@type": "Person", "@id": "https://drd2.com.br/#samuel-costa" },
        "publisher": { "@id": "https://drd2.com.br/#organization" },
        "datePublished": "2026-04-13",
        "dateModified": "2026-05-04",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://drd2.com.br/blog/como-tirar-avcb-em-sao-paulo"
        }
      }
    ]
  };

  const steps = [
    { title: "Engenheiro", desc: "Contratação de engenheiro civil ou de segurança do trabalho habilitado com registro ativo no CREA-SP. Sem responsável técnico, o processo não pode ser iniciado.", icon: HardHat },
    { title: "Diagnóstico", desc: "Visita técnica à edificação para levantar a situação atual dos sistemas de proteção e enquadrar a obra nas Instruções Técnicas (ITs) do CBPMESP vigentes.", icon: ClipboardCheck },
    { title: "Adequação", desc: "Execução das obras e ajustes nos sistemas de proteção contra incêndio — hidrantes, sprinklers, alarme, iluminação de emergência, sinalização e demais exigências identificadas.", icon: ListChecks },
    { title: "Projeto", desc: "Elaboração do PPCI (Plano de Prevenção e Proteção Contra Incêndio) com memorial descritivo, plantas técnicas e emissão obrigatória da ART no CREA-SP.", icon: DraftingCompass },
    { title: "Protocolo", desc: "Submissão digital do processo completo no portal do CBPMESP com pagamento das taxas estaduais. O número de protocolo permite acompanhar a análise online.", icon: Send },
    { title: "Vistoria", desc: "Agendamento e acompanhamento da inspeção oficial por representante do Corpo de Bombeiros, que verifica in loco se os sistemas implantados atendem ao projeto aprovado.", icon: Search },
    { title: "Certificado", desc: "Após aprovação da vistoria, o AVCB é emitido com prazo de validade de 1 a 5 anos conforme o tipo de ocupação e porte da edificação, habilitando o imóvel para funcionamento regular.", icon: Scroll }
  ];

  const faqItems = [
    {
      question: "Posso dar entrada no AVCB sem engenheiro?",
      answer: "Não. O processo de AVCB exige obrigatóriamente a responsabilidade técnica de engenheiro habilitado com ART recolhida no CREA-SP. Protocolos sem ART são recusados na triagem do CBPMESP antes mesmo de entrar em análise técnica. Tentativas de protocolar sem responsável técnico registrado resultam em devolução imediata do processo."
    },
    {
      question: "O AVCB vale para o imóvel ou para o inquilino?",
      answer: "O AVCB é vinculado à edificação e ao tipo de uso declarado — não ao inquilino ou ao CNPJ. Quando há troca de inquilino com mudança de atividade (por exemplo, de escritório para academia), é necessário verificar se a nova ocupação exige adequação do processo junto ao Corpo de Bombeiros, pois as exigências técnicas variam conforme o uso."
    },
    {
      question: "Preciso ir pessoalmente ao Corpo de Bombeiros?",
      answer: "Não. A DRD2 Engenharia cuida de todo o processo de forma integral — protocolo digital, acompanhamento da análise, resposta a Comunique-se e presença na vistoria. O cliente não precisa comparecer ao CBPMESP em nenhum momento. Todo o acompanhamento é feito remotamente com atualizações diretas pelo WhatsApp."
    },
    {
      question: "O que é o Comunique-se no processo de AVCB?",
      answer: "O Comunique-se é uma notificação formal emitida pelo analista técnico do Corpo de Bombeiros durante a análise do projeto, solicitando correções, complementações ou esclarecimentos. A resposta deve ser elaborada pelo engenheiro responsável dentro do prazo estipulado na notificação. Não responder no prazo leva ao indeferimento automático do processo, que precisará ser reprotocolado do zero."
    },
    {
      question: "Qual é a validade do AVCB após a aprovação?",
      answer: "A validade do AVCB varia conforme o tipo de ocupação e o porte da edificação — geralmente de 1 a 5 anos. Ocupações de maior risco, como postos de combustível e indústrias químicas, têm validades mais curtas. O proprietário é responsável por iniciar o processo de renovação antes do vencimento para evitar multas e irregularidades."
    }
  ];

  return (
    <>
      <JsonLD schema={articleSchema} />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white min-h-[75vh] flex items-center overflow-hidden border-b-8 border-primary pt-20">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Como Tirar o AVCB em São Paulo?"
          fill
          className="object-cover opacity-20 grayscale brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-12">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8 bg-primary/10 w-fit px-4 py-1.5 rounded-full border border-primary/20">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-400">Processo Passo a Passo</span>
            </nav>
            
            <h1 className="text-5xl md:text-[6rem] font-black mb-8 leading-[0.85] tracking-tighter uppercase italic text-white flex flex-col">
              COMO TIRAR O <span className="text-primary not-italic">AVCB EM SP?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-medium max-w-3xl">
              Guia Completo 2026: Do diagnóstico técnico à vistoria final. Regularize sua edificação sem burocracia e com aprovação garantida pelo Corpo de Bombeiros de São Paulo.
            </p>

            <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Atualizado: 2026
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Engenharia Registrada CREA-SP
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* ── BREADCRUMB ── */}
      <BlogAuthorEvidence published="2026-04-13" updated="2026-05-04" />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Guia Completo" },
        ]}
        dark
      />

      {/* Intro Authority */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="prose prose-lg md:prose-xl prose-slate max-w-none font-medium leading-relaxed text-gray-600">
              <p className="text-2xl font-bold text-secondary leading-relaxed mb-12 italic">
                O processo de AVCB em São Paulo é conduzido pelo Corpo de Bombeiros da Polícia Militar do Estado de São Paulo (CBPMESP) com base no Decreto Estadual nº 69.118/2024. Entender como ele funciona — etapa por etapa — é fundamental para evitar retrabalho, exigências e atrasos que podem custar meses de espera.
              </p>
              
              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic mb-8 border-l-8 border-primary pl-6 leading-none">Passo a Passo: Como Tirar o AVCB</h2>
              
              <div className="not-prose space-y-4 my-12">
                 {steps.map((s, i) => (
                   <div key={i} className="flex gap-6 items-center p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:border-primary/20 transition-all group">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors">
                        <s.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest block mb-1 underline decoration-primary/20 underline-offset-4">Passo 0{i+1}</span>
                        <h4 className="font-black text-secondary uppercase text-lg mb-1 tracking-tighter">{s.title}</h4>
                        <p className="text-sm text-gray-500 font-bold leading-tight">{s.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Documentos Necessários</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-lg">
                {[
                  "Planta Baixa atualizada (DWG/PDF)",
                  "IPTU do imóvel (espelho)",
                  "CNPJ da empresa/condomínio",
                  "Contrato de Locação ou Matrícula",
                  "Último AVCB (se for renovação)",
                  "Habite-se ou Alvará Original"
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Prazos Médios de Aprovação</h2>
              <div className="overflow-x-auto my-10 rounded-[2rem] border border-slate-200 shadow-sm not-prose">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead className="bg-slate-900 text-white font-black uppercase tracking-widest text-[10px]">
                    <tr>
                      <th className="p-6 text-left">Tipo de Processo</th>
                      <th className="p-6 text-left">Porte do Imóvel</th>
                      <th className="p-6 text-left">Prazo Estimado</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-slate-700">
                    <tr className="border-b border-slate-100 italic">
                      <td className="p-6 font-bold uppercase text-xs">CLCB (Simplificado)</td>
                      <td className="p-6 font-bold">Até 750m²</td>
                      <td className="p-6 text-xs font-black text-primary">30 a 60 Dias</td>
                    </tr>
                    <tr className="border-b border-slate-100 italic">
                      <td className="p-6 font-bold uppercase text-xs">AVCB Médio</td>
                      <td className="p-6 font-bold">750m² a 1.500m²</td>
                      <td className="p-6 text-xs font-black text-primary">60 a 120 Dias</td>
                    </tr>
                    <tr className="italic">
                      <td className="p-6 font-bold uppercase text-xs">AVCB Complexo</td>
                      <td className="p-6 font-bold">Acima de 1.500m²</td>
                      <td className="p-6 text-xs font-black text-primary">120 a 180+ Dias</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="not-prose bg-primary/5 p-10 rounded-[3rem] border-2 border-primary/10 my-16 text-center">
                 <h3 className="text-2xl font-black text-secondary uppercase italic mb-4 tracking-tighter leading-none">Posso tirar o AVCB <span className="text-primary not-italic">sem engenheiro?</span></h3>
                 <p className="font-bold text-gray-600 leading-relaxed italic">
                   Não. O processo exige obrigatóriamente a assinatura de um engenheiro habilitado com ART. Qualquer tentativa de protocolo sem esse respaldo técnico é bloqueada na triagem inicial do CBPMESP.
                 </p>
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Erros que atrasam o processo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 not-prose">
                {[
                  { t: "Obras sem Projeto", d: "Instalar hidrantes, sprinklers ou alarmes sem projeto aprovado previamente gera exigências de adequação pós-vistoria, obrigando a refazer partes da obra com custo adicional." },
                  { t: "ITs Desatualizadas", d: "As Instruções Técnicas do CBPMESP são atualizadas periodicamente. Projetos elaborados com base em versões antigas são reprovados na análise técnica e devolvidos para correção." },
                  { t: "Comunique-se Parado", d: "O analista do Corpo de Bombeiros emite notificações formais solicitando correções (Comunique-se). Não responder dentro do prazo regulamentar leva ao indeferimento automático do processo." },
                  { t: "Falta de ART", d: "Todo protocolo exige a Anotação de Responsabilidade Técnica recolhida no CREA-SP. Processos submetidos sem ART são recusados sumariamente na triagem inicial, antes mesmo de entrar em análise." }
                ].map((err, i) => (
                  <div key={i} className="bg-white border-l-4 border-primary p-6 shadow-sm rounded-r-3xl">
                    <h5 className="font-black text-secondary uppercase text-sm mb-2">{err.t}</h5>
                    <p className="text-xs text-gray-500 font-bold">{err.d}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

            {/* ── CTA CONTEXTUAL ── */}
      <div className="py-14 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-white text-xl font-black uppercase italic tracking-tight mb-2">
            Pronto para iniciar o processo? Nosso time começa hoje — sem burocracia.
          </p>
          <p className="text-slate-400 text-sm font-bold mb-8">
            Atendimento especializado | Diagnóstico técnico gratuito | Sem compromisso
          </p>
          <CtaWhatsApp
            label="Solicitar diagnóstico técnico gratuito pelo WhatsApp"
            occupationType="seu imóvel"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-black text-secondary leading-none uppercase tracking-tighter italic">FAQ <span className="text-primary not-italic">Processo AVCB</span></h2>
             <p className="mt-4 text-gray-400 font-bold uppercase tracking-widest text-xs">Respostas Técnicas para sua Tranquilidade</p>
           </div>
           
           <div className="space-y-6">
             {faqItems.map((item, i) => (
               <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-200 hover:border-primary/20 transition-all group shadow-sm">
                 <h4 className="text-xl font-black text-secondary mb-4 flex items-center gap-4 italic tracking-tighter">
                   <HelpCircle className="w-7 h-7 text-primary shrink-0" />
                   {item.question}
                 </h4>
                 <div className="text-gray-600 font-medium leading-relaxed pl-11 border-l-4 border-primary/10 italic">
                   {item.answer}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Regional Links Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-black text-secondary leading-none uppercase tracking-tighter italic mb-12">Atendimento Especializado por <span className="text-primary not-italic tracking-normal">Bairro</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { n: "Tatuapé", h: "/avcb-tatuape" },
                { n: "Moema", h: "/avcb-moema" },
                { n: "Itaim Bibi", h: "/avcb-itaim-bibi" },
                { n: "Vila Olímpia", h: "/avcb-vila-olimpia" },
                { n: "Brooklin", h: "/avcb-brooklin" },
                { n: "Santo Amaro", h: "/avcb-santo-amaro" },
                { n: "Jabaquara", h: "/avcb-jabaquara" },
                { n: "Saúde", h: "/avcb-saude" },
                { n: "Campo Belo", h: "/avcb-campo-belo" },
                { n: "Vila Mariana", h: "/avcb-vila-mariana" }
              ].map((loc, i) => (
                <Link key={i} href={loc.h} className="px-6 py-4 bg-slate-50 rounded-2xl text-[10px] font-black text-secondary border border-slate-200 uppercase tracking-widest hover:border-primary/30 transition-all hover:bg-white">
                   {loc.n}
                </Link>
              ))}
            </div>
        </div>
      </section>

      <BlogStrategicLinks currentSlug="/blog/como-tirar-avcb-em-sao-paulo" />

            {/* ── ARTIGOS RELACIONADOS ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic mb-8 border-l-8 border-red-600 pl-6 leading-none">
            Leia Também
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="/blog/prazo-para-emissao-de-avcb" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Prazo para Emissão de AVCB</span>
              </a>
              <a href="/blog/quanto-custa-avcb-em-sao-paulo" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Quanto Custa o AVCB em SP?</span>
              </a>
              <a href="/blog/quem-precisa-de-avcb" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Quem Precisa de AVCB?</span>
              </a>
              <a href="/blog/diferenca-entre-avcb-e-clcb" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Diferença entre AVCB e CLCB</span>
              </a>
          </div>
        </div>
      </section>

      {/* Convince Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
            <h2 className="text-4xl md:text-8xl font-black leading-[0.8] uppercase tracking-tighter mb-8 italic">
               TIRE SEU AVCB <br /><span className="text-primary not-italic font-black italic underline decoration-primary/30 underline-offset-[20px]">HOJE MESMO.</span>
            </h2>
            <p className="text-xl text-gray-400 font-bold mb-12 max-w-2xl mx-auto italic leading-relaxed">
              Diagnóstico técnico inicial gratuito. Nossa equipe cuida de toda a burocracia para você.
            </p>
            <LeadForm variant="compact" />
            <div className="mt-12">
               <a href={whatsappLink} className="inline-flex items-center gap-4 text-white bg-primary px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-[#1EBE5A] hover:text-white hover:text-primary transition-all shadow-2xl">
                  <Phone className="w-5 h-5" /> Falar com engenheiro especialista Agora
               </a>
            </div>
            
            <div className="mt-20 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-10">
               <Link href="/avcb-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ PROCESSO SP</Link>
               <Link href="/quanto-custa-avcb-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ TABELA PREÇOS</Link>
               <Link href="/renovacao-avcb" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ RENOVAÇÃO</Link>
               <Link href="/clcb-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ CLCB SP</Link>
            </div>
        </div>
      </section>
    </>
  );
}
