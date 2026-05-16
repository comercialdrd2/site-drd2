import Link from "next/link";
import Image from "next/image";
import { JsonLD } from "@/components/JsonLD";
import {
  Phone, ArrowRightLeft, Zap, ShieldCheck, Construction,
  DollarSign, Coins, CheckCircle2, HelpCircle, ArrowRight,
  Info, Scale,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BlogStrategicLinks from "@/components/BlogStrategicLinks";
import BlogAuthorEvidence from "@/components/BlogAuthorEvidence";

export const metadata = {
  title: "Diferença Entre AVCB e CLCB: Qual Certificado Sua Edificação Precisa?",
  description: "Entenda a diferença entre AVCB e CLCB, quando cada um é exigido, como funcionam os processos e como saber qual certificado sua edificação precisa em São Paulo.",
  alternates: {
    canonical: "/blog/diferenca-entre-avcb-e-clcb",
  },
};

export default function DiferencaAVCBCLCBPost() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://drd2.com.br/blog/diferenca-entre-avcb-e-clcb/#article",
        "headline": "Diferença Entre AVCB e CLCB: Qual Certificado Sua Edificação Realmente Precisa?",
        "description": "Comparativo técnico entre AVCB e CLCB, explicando critérios de enquadramento, custos e prazos para regularização de incêndio em São Paulo.",
        "author": { "@type": "Person", "@id": "https://drd2.com.br/#samuel-costa" },
        "publisher": { "@id": "https://drd2.com.br/#organization" },
        "datePublished": "2026-04-16",
        "dateModified": "2026-05-04",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://drd2.com.br/blog/diferenca-entre-avcb-e-clcb"
        }
      }
    ]
  };

  const comparisonData = [
    { aspect: "Porte da Edificação", avcb: "Médio, grande ou alto risco", clcb: "Pequeno porte e baixo risco" },
    { aspect: "Projeto Técnico", avcb: "Obrigatório e completo (PPCI)", clcb: "Simplificado ou dispensado" },
    { aspect: "Vistoria Bombeiros", avcb: "Obrigatória e presencial", clcb: "Pode ser dispensada" },
    { aspect: "Custo de Emissão", avcb: "Maior investimento", clcb: "Investimento reduzido" },
    { aspect: "Prazo Médio", avcb: "60 a 180 dias", clcb: "30 a 60 dias" },
    { aspect: "Engenheiro (ART)", avcb: "Obrigatória", clcb: "Obrigatória" }
  ];

  const faqItems = [
    {
      question: "O CLCB é aceito para renovação de alvará de funcionamento?",
      answer: "Sim. O CLCB é um documento oficial emitido pelo Corpo de Bombeiros e tem a mesma validade legal que o AVCB para fins de renovação de alvará de funcionamento junto à Prefeitura de São Paulo e aos órgãos estaduais competentes. A distinção entre os dois documentos é interna ao processo — para efeito de comprovação de regularidade, ambos têm força equivalente."
    },
    {
      question: "Uma edificação que tem CLCB pode migrar para AVCB?",
      answer: "Sim, e em alguns casos isso é obrigatório — especialmente quando há ampliação da área construída, aumento do nível de risco da atividade, mudança de uso ou quando a edificação passa a receber maior concentração de público. Nesses casos, o engenheiro responsável deve realizar um novo diagnóstico e iniciar o processo de AVCB."
    },
    {
      question: "O CLCB exige vistoria presencial do Corpo de Bombeiros?",
      answer: "Depende do enquadramento. Em muitos processos de CLCB, a certificação é feita com base em declaração técnica do responsável, sem necessidade de vistoria presencial do Bombeiro — o que reduz prazo e custo de forma significativa. Em casos específicos, o CBPMESP pode determinar inspeção presencial mesmo para processos simplificados."
    },
    {
      question: "Condomínio residencial pode ter CLCB ao invés de AVCB?",
      answer: "Sim, para condomínios que se enquadrem nos critérios de área (geralmente pequenos prédios com menos de 750 m²) e baixo risco definidos pelas Instruções Técnicas do CBPMESP. Condomínios maiores, com mais de 4 pavimentos ou sistemas complexos, em geral exigem AVCB completo com vistoria presencial."
    },
    {
      question: "Qual é mais barato: AVCB ou CLCB?",
      answer: "O CLCB tende a ter custo menor, pois o processo é simplificado — sem vistoria presencial obrigatória, com análise técnica reduzida e menores taxas do CBPMESP. Porém, o custo também depende das adequações físicas necessárias nos sistemas de proteção contra incêndio, que podem ser significativas independentemente do tipo de certificado."
    }
  ];

  return (
    <>
      <JsonLD schema={articleSchema} />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white min-h-[75vh] flex items-center overflow-hidden border-b-8 border-primary pt-20">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Diferença Entre AVCB e CLCB"
          fill
          className="object-cover opacity-20 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-12">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8 bg-primary/10 w-fit px-4 py-1.5 rounded-full border border-primary/20">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-400">Enquadramento Normativo</span>
            </nav>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic text-white flex flex-col">
              AVCB OU <span className="text-primary not-italic">CLCB?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-medium max-w-3xl">
              Qual certificado sua edificação realmente precisa? Entenda as diferenças técnicas, de custo e de prazo entre os dois documentos do Corpo de Bombeiros.
            </p>

            <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-300">
              <div className="flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-primary" /> Comparativo Técnico
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-primary" /> Análise de Enquadramento
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* ── BREADCRUMB ── */}
      <BlogAuthorEvidence published="2026-04-16" updated="2026-05-04" />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Documentação Técnica" },
        ]}
        dark
      />

      {/* Intro Context */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="prose prose-lg md:prose-xl prose-slate max-w-none font-medium leading-relaxed text-gray-600">
              <p className="text-2xl font-bold text-secondary leading-relaxed mb-12 italic">
                A confusão entre AVCB e CLCB é comum, mas escolher o caminho errado pode gerar custos extras e meses de atraso. Embora ambos garantam a segurança, seus processos são mundos à parte.
              </p>
              
              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic mb-8 border-l-8 border-primary pl-6 leading-none">Comparativo Direto</h2>
              
              <div className="overflow-x-auto my-12 rounded-[2.5rem] border border-slate-100 shadow-2xl not-prose">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-900 text-white font-black uppercase tracking-widest text-[10px]">
                    <tr>
                      <th className="p-6 text-left border-r border-white/10">Aspecto</th>
                      <th className="p-6 text-center border-r border-white/10 text-primary">AVCB</th>
                      <th className="p-6 text-center">CLCB</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {comparisonData.map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                        <td className="p-6 font-bold text-secondary uppercase text-[10px] tracking-tight border-r border-slate-100 italic">{row.aspect}</td>
                        <td className="p-6 text-center font-bold text-gray-600 text-xs border-r border-slate-100">{row.avcb}</td>
                        <td className="p-6 text-center font-black text-primary text-xs italic">{row.clcb}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">O que define o enquadramento?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 not-prose">
                {[
                  { t: "ÁREA TOTAL", d: "Limites de metragem quadrada variam conforme o uso.", icon: Construction },
                  { t: "NÍVEL DE RISCO", d: "Concentração de público, inflamáveis e altura.", icon: ShieldCheck },
                  { t: "TIPO DE USO", d: "Algumas ocupações (hospitais, indústrias) exigem AVCB por norma.", icon: Info }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center flex flex-col items-center group hover:bg-white hover:border-primary/20 transition-all">
                    <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h5 className="font-black text-secondary uppercase text-[10px] mb-2">{item.t}</h5>
                    <p className="text-[10px] text-gray-500 font-bold leading-tight">{item.d}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Por que o CLCB é vantajoso?</h2>
              <p>
                O CLCB (Certificado de Licença do Corpo de Bombeiros) foi criado para ser um processo ágil. Sua principal vantagem é a <strong>autodeclaração</strong>: o engenheiro declara que os sistemas estão em ordem e o certificado pode ser emitido sem a necessidade de o Bombeiro visitar o local — o que acelera o processo em semanas e reduz significativamente o custo para o proprietário.
              </p>

              <div className="not-prose bg-primary/5 p-10 rounded-[3rem] border-2 border-primary/10 my-16">
                 <h3 className="text-2xl font-black text-secondary uppercase italic mb-4 tracking-tighter">É menos seguro?</h3>
                 <p className="font-bold text-gray-600 leading-relaxed italic">
                    Não. O CLCB é dimensionado para o risco real. Exigir o mesmo processo de uma grande indústria para um pequeno escritório seria desproporcional. O CLCB garante segurança compatível com o porte da sua edificação.
                 </p>
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Enquadramento Gratuito DRD2</h2>
              <p>
                A única forma de ter certeza do certificado necessário é através do enquadramento nas Instruções Técnicas vigentes. A DRD2 Engenharia realiza essa análise de forma gratuita no primeiro contato:
              </p>
              <div className="not-prose space-y-4 my-8">
                {[
                   "Análise da Área Total e Altura.",
                   "Classificação da Carga de Incêndio.",
                   "Verificação de Exclusividades Normativas.",
                   "Definição da Proposta Técnica em 2 Horas."
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-xs font-black text-secondary uppercase tracking-tight">{text}</span>
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
            Não sabe se precisa de AVCB ou CLCB? Descubra em minutos — diagnóstico gratuito.
          </p>
          <p className="text-slate-400 text-sm font-bold mb-8">
            Atendimento especializado | Diagnóstico técnico gratuito | Sem compromisso
          </p>
          <CtaWhatsApp
            label="Descobrir meu enquadramento pelo WhatsApp"
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
             <h2 className="text-4xl md:text-6xl font-black text-secondary leading-none uppercase tracking-tighter italic">FAQ <span className="text-primary not-italic">AVCB vs CLCB</span></h2>
             <p className="mt-4 text-gray-400 font-bold uppercase tracking-widest text-xs">Respostas Diretas do nosso Time de Engenharia</p>
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

      {/* Internal Links */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-black text-secondary leading-none uppercase tracking-tighter italic mb-12">Atendimento no seu <span className="text-primary not-italic tracking-normal">Bairro</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { n: "Itaim Bibi", h: "/avcb-itaim-bibi" },
                { n: "Vila Olímpia", h: "/avcb-vila-olimpia" },
                { n: "Brooklin", h: "/avcb-brooklin" },
                { n: "Moema", h: "/avcb-moema" },
                { n: "Tatuapé", h: "/avcb-tatuape" },
                { n: "Santo Amaro", h: "/avcb-santo-amaro" },
                { n: "Saúde", h: "/avcb-saude" },
                { n: "Campo Belo", h: "/avcb-campo-belo" },
                { n: "Vila Mariana", h: "/avcb-vila-mariana" },
                { n: "Jabaquara", h: "/avcb-jabaquara" }
              ].map((loc, i) => (
                <Link key={i} href={loc.h} className="px-6 py-4 bg-slate-50 rounded-2xl text-[10px] font-black text-secondary border border-slate-200 uppercase tracking-widest hover:border-primary/30 transition-all hover:bg-white text-center">
                   {loc.n}
                </Link>
              ))}
            </div>
        </div>
      </section>

      <BlogStrategicLinks currentSlug="/blog/diferenca-entre-avcb-e-clcb" />

            {/* ── ARTIGOS RELACIONADOS ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic mb-8 border-l-8 border-red-600 pl-6 leading-none">
            Leia Também
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="/blog/como-tirar-avcb-em-sao-paulo" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Como Tirar o AVCB em SP</span>
              </a>
              <a href="/blog/quem-precisa-de-avcb" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Quem Precisa de AVCB?</span>
              </a>
              <a href="/blog/quanto-custa-avcb-em-sao-paulo" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Quanto Custa o AVCB em SP?</span>
              </a>
              <a href="/blog/prazo-para-emissao-de-avcb" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-600/40 hover:bg-white transition-all group">
                <span className="text-red-600 text-lg font-black mt-0.5">→</span>
                <span className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-red-600 transition-colors">Prazo para Emissão de AVCB</span>
              </a>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-[6rem] font-black leading-[0.85] uppercase tracking-tighter mb-8 italic">
               SABEMOS O <br /><span className="text-primary not-italic font-black italic underline decoration-primary/30 underline-offset-8">CAMINHO CERTO.</span>
            </h2>
            <p className="text-xl text-gray-400 font-bold mb-12 max-w-2xl mx-auto italic leading-relaxed">
              Não perca tempo em processos burocráticos desnecessários. Saiba agora se sua edificação pode ser regularizada via CLCB.
            </p>
            <LeadForm variant="compact" />
            <div className="mt-12">
               <a href={whatsappLink} className="inline-flex items-center gap-4 text-white bg-primary px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-[#1EBE5A] hover:text-white hover:text-primary transition-all shadow-2xl">
                  <Phone className="w-5 h-5" /> Enquadramento Gratuito via WhatsApp
               </a>
            </div>
            
            <div className="mt-20 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-10">
               <Link href="/avcb-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ PROCESSO AVCB</Link>
               <Link href="/clcb-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ PROCESSO CLCB</Link>
               <Link href="/quanto-custa-avcb-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ TABELA PREÇOS</Link>
               <Link href="/blog/como-tirar-avcb-em-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ PASSO A PASSO</Link>
            </div>
        </div>
      </section>
    </>
  );
}
