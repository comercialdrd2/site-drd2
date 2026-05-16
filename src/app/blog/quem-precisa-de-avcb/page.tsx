import Link from "next/link";
import Image from "next/image";
import { JsonLD } from "@/components/JsonLD";
import {
  Phone, Building, Factory, School, Hotel,
  Hospital, Utensils, Church, ShoppingBag, Dumbbell,
  Store, CheckCircle2, HelpCircle, ArrowRight, Gavel,
  AlertCircle, Info, Home,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import BlogStrategicLinks from "@/components/BlogStrategicLinks";
import BlogAuthorEvidence from "@/components/BlogAuthorEvidence";

export const metadata = {
  title: "Quem Precisa de AVCB? Lista Completa de Edificações Obrigadas em SP",
  description: "Descubra quem é obrigado a ter AVCB em São Paulo. Lista completa por tipo de edificação, base legal e o que acontece quem não regulariza. Guia técnico DRD2.",
  alternates: {
    canonical: "/blog/quem-precisa-de-avcb",
  },
};

export default function QuemPrecisaAVCBPost() {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://drd2.com.br/blog/quem-precisa-de-avcb/#article",
        "headline": "Quem Precisa de AVCB em São Paulo? Guia Completo por Tipo de Edificação",
        "description": "Guia detalhado sobre a obrigatoriedade do AVCB em São Paulo, cobrindo condomínios, comércios, indústrias e outros setores.",
        "author": { "@type": "Person", "@id": "https://drd2.com.br/#samuel-costa" },
        "publisher": { "@id": "https://drd2.com.br/#organization" },
        "datePublished": "2026-04-17",
        "dateModified": "2026-05-04",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://drd2.com.br/blog/quem-precisa-de-avcb"
        }
      }
    ]
  };

  const sectors = [
    { title: "Condomínios", desc: "Residenciais e comerciais com mais de uma unidade são obrigados por lei, independentemente do porte ou número de andares.", icon: Building },
    { title: "Comércio", desc: "Lojas, farmácias, mercados, supermercados e varejo em geral — independentemente do tamanho, a regularização é exigida para renovação do alvará.", icon: Store },
    { title: "Escritórios", desc: "Torres corporativas, lajes comerciais e conjuntos de salas comerciais acima dos limites de área estabelecidos pelas ITs.", icon: ShoppingBag },
    { title: "Indústrias", desc: "Fábricas, galpões logísticos, armazéns e centros de distribuição exigem AVCB completo com análise de risco e sistemas robustos.", icon: Factory },
    { title: "Saúde", desc: "Hospitais, clínicas, laboratórios e consultórios com internação (Grupo H) têm exigências técnicas específicas e mais rigorosas.", icon: Hospital },
    { title: "Educação", desc: "Escolas, faculdades, creches, cursos e centros de formação com recepção de alunos e público precisam de certificação regular.", icon: School },
    { title: "Hospedagem", desc: "Hotéis, flats, pousadas e albergues registrados na Secretaria de Turismo são fiscalizados regularmente pelo Corpo de Bombeiros.", icon: Hotel },
    { title: "Alimentação", desc: "Restaurantes, bares, lanchonetes e casas noturnas (Grupo F-5) têm alta carga de incêndio e exigem sistemas específicos.", icon: Utensils },
    { title: "Religioso", desc: "Igrejas, templos, sinagogas e centros de eventos que recebem público com frequência precisam da certificação em vigor.", icon: Church },
    { title: "Esportivo", desc: "Academias de ginástica, estúdios, centros de treinamento físico e quadras cobertas com uso coletivo regular.", icon: Dumbbell }
  ];

  const faqItems = [
    {
      question: "Escritório em casa (home office) precisa de AVCB?",
      answer: "Não, desde que seja uma residência unifamiliar usada exclusivamente como moradia. Se houver recepção constante de público, funcionários ou atendimento comercial regular, a atividade pode ser enquadrada como uso misto e exigir regularização junto ao Corpo de Bombeiros."
    },
    {
      question: "Loja em shopping precisa de AVCB próprio?",
      answer: "Depende da área e da atividade. O shopping possui AVCB geral do empreendimento, mas unidades locatárias maiores, de alto risco (como restaurantes com cozinha industrial) ou que façam uso diferenciado do espaço podem precisar de certificação individual vinculada ao processo do condomínio comercial."
    },
    {
      question: "Quem paga pelo AVCB: proprietário ou inquilino?",
      answer: "A responsabilidade legal pelo AVCB do imóvel é do proprietário ou do condomínio. O inquilino pode ser responsável pela regularização da atividade comercial específica que exerce no espaço. Na prática, o que prevalece é o que está definido no contrato de locação — consulte seu advogado e seu engenheiro para entender o escopo de cada parte."
    },
    {
      question: "Igreja e templo religioso precisam de AVCB?",
      answer: "Sim. Igrejas, templos e centros de eventos religiosos são classificados como locais de reunião de público e a regularização é obrigatória para garantir a segurança dos fiéis e evitar interdições. A exigência se aplica independentemente do tamanho da congregação ou da frequência dos cultos."
    },
    {
      question: "Condomínio residencial pequeno (2-4 andares) precisa de AVCB?",
      answer: "Sim. Todo condomínio com mais de uma unidade é obrigado a manter o AVCB ou CLCB válido. O enquadramento no processo simplificado (CLCB) é possível para prédios de pequeno porte e baixo risco — o que reduz o custo e o prazo da regularização."
    }
  ];

  return (
    <>
      <JsonLD schema={articleSchema} />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white min-h-[75vh] flex items-center overflow-hidden border-b-8 border-primary pt-20">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Quem Precisa de AVCB em São Paulo?"
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
              <span className="text-gray-400">Obrigatoriedade Legal</span>
            </nav>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic text-white">
              QUEM PRECISA <br /><span className="text-primary not-italic">DE AVCB?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-medium max-w-3xl">
              Lista Completa: Entenda quais edificações são obrigadas por lei a manter a certificação do Corpo de Bombeiros em dia.
            </p>

            <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-300">
              <div className="flex items-center gap-2">
                <Gavel className="w-5 h-5 text-primary" /> Baseado no Decreto 69.118/2024
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> Guia Técnico Especializado
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogAuthorEvidence published="2026-04-17" updated="2026-05-04" />

      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Obrigatoriedade Legal" },
        ]}
        dark
      />

      {/* Main Content */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="prose prose-lg md:prose-xl prose-slate max-w-none font-medium leading-relaxed text-gray-600">
              <p className="text-2xl font-bold text-secondary leading-relaxed mb-12 italic">
                A resposta curta é: quase toda edificação de uso coletivo em São Paulo. Operar sem o certificado não é apenas um risco à segurança, mas um passivo jurídico e financeiro para o responsável.
              </p>
              
              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic mb-8 border-l-8 border-primary pl-6 leading-none">Quem é obrigado por lei?</h2>
              
              <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-12">
                 {sectors.map((s, i) => (
                   <div key={i} className="flex gap-4 items-center p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:border-primary/20 transition-all group">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors shrink-0">
                        <s.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-black text-secondary uppercase text-sm mb-0.5 tracking-tighter leading-none">{s.title}</h4>
                        <p className="text-[10px] text-gray-400 font-bold leading-tight">{s.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Quem NÃO precisa de AVCB?</h2>
              <div className="bg-slate-900 rounded-[2.5rem] p-10 my-10 relative overflow-hidden not-prose">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px]" />
                 <div className="flex items-start gap-6">
                    <Home className="w-12 h-12 text-primary shrink-0" />
                    <div>
                       <h4 className="text-white font-black uppercase text-xl mb-4 italic tracking-tighter">Residências Unifamiliares</h4>
                       <p className="text-gray-400 font-bold leading-relaxed text-sm">
                          Casas térreas ou sobrados destinados exclusivamente à moradia de uma única família são a única exceção generalizada. Todo outro uso (comercial, multifamiliar ou reuniões) exige certificação.
                       </p>
                    </div>
                 </div>
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Riscos da Negligência</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 not-prose">
                {[
                  { t: "Cessão de Seguro", d: "Seguradoras negam indenização se o AVCB estiver vencido ou inexistente." },
                  { t: "Alvará de Funcionamento", d: "A prefeitura bloqueia licenças de estabelecimentos sem o documento." },
                  { t: "Responsabilidade Civil", d: "Síndicos e gestores respondem criminalmente em sinistros irregulares." },
                  { t: "Multas Diárias", d: "Fiscalizações podem gerar multas pesadas até a regularização total." }
                ].map((err, i) => (
                  <div key={i} className="bg-white border-l-4 border-primary p-6 shadow-sm rounded-r-3xl">
                    <h5 className="font-black text-secondary uppercase text-xs mb-2 tracking-tight">{err.t}</h5>
                    <p className="text-[11px] text-gray-500 font-bold leading-relaxed">{err.d}</p>
                  </div>
                ))}
              </div>

              <div className="not-prose bg-primary/5 p-10 rounded-[3rem] border-2 border-primary/10 my-16 text-center">
                 <h3 className="text-2xl font-black text-secondary uppercase italic mb-4 tracking-tighter leading-none">Tenho um <span className="text-primary not-italic">pequeno negócio...</span></h3>
                 <p className="font-bold text-gray-600 leading-relaxed italic max-w-2xl mx-auto">
                    Mesmo comércios pequenos precisam de regularização, mas o processo costuma ser o <strong>CLCB (Certificado de Licença)</strong> — muito mais rápido, barato e muitas vezes sem vistoria presencial do Bombeiro.
                 </p>
              </div>

              <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter italic my-12 border-l-8 border-primary pl-6 leading-none">Diagnóstico técnico gratuito DRD2</h2>
              <p>
                Ainda em dúvida se sua atividade exige AVCB? Não corra riscos jurídicos. A DRD2 Engenharia realiza o enquadramento técnico gratuito para qualquer edificação em São Paulo.
              </p>
           </div>
        </div>
      </section>

            {/* ── CTA CONTEXTUAL ── */}
      <div className="py-14 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-white text-xl font-black uppercase italic tracking-tight mb-2">
            Descubra se o seu imóvel precisa de AVCB — diagnóstico gratuito em minutos.
          </p>
          <p className="text-slate-400 text-sm font-bold mb-8">
            Atendimento especializado | Diagnóstico técnico gratuito | Sem compromisso
          </p>
          <CtaWhatsApp
            label="Verificar obrigatoriedade pelo WhatsApp"
            occupationType="seu imóvel"
            variant="primary"
            size="lg"
            centered
          />
        </div>
      </div>

      <BlogStrategicLinks currentSlug="/blog/quem-precisa-de-avcb" />

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-black text-secondary leading-none uppercase tracking-tighter italic underline decoration-primary/20 decoration-8 underline-offset-8">PERGUNTAS <span className="text-primary not-italic">FREQUENTES</span></h2>
             <p className="mt-8 text-gray-400 font-bold uppercase tracking-widest text-xs">Informação Técnica para sua Operação Legal</p>
           </div>
           
           <div className="space-y-6">
             {faqItems.map((item, i) => (
               <div key={i} className="bg-white p-10 rounded-[4rem] border border-slate-200 hover:border-primary/20 transition-all group shadow-sm">
                 <h4 className="text-xl font-black text-secondary mb-4 flex items-center gap-4 italic tracking-tighter">
                   <AlertCircle className="w-7 h-7 text-primary shrink-0" />
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

      {/* Bairros Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-black text-secondary leading-none uppercase tracking-tighter italic mb-12">Atendemos seu <span className="text-primary not-italic tracking-normal">Estabelecimento</span> por Bairro</h2>
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

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-8xl font-black leading-[0.85] uppercase tracking-tighter mb-8 italic">
               REGULARIZE SUA <br /><span className="text-primary not-italic font-black italic underline decoration-primary/30 underline-offset-8">HISTÓRIA AGORA.</span>
            </h2>
            <p className="text-xl text-gray-400 font-bold mb-12 max-w-2xl mx-auto italic leading-relaxed">
               Consulte nosso time técnico e saiba exatamente o que sua edificação precisa para estar 100% legalizada perante os Bombeiros.
            </p>
            <LeadForm variant="compact" />
            <div className="mt-12">
               <a href={whatsappLink} className="inline-flex items-center gap-4 text-white bg-primary px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-[#1EBE5A] hover:text-white hover:text-primary transition-all shadow-2xl">
                  <Phone className="w-5 h-5" /> Enquadramento Gratuito via WhatsApp
               </a>
            </div>
            
            <div className="mt-20 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-10">
               <Link href="/blog/diferenca-entre-avcb-e-clcb" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ AVCB vs CLCB</Link>
               <Link href="/avcb-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ PROCESSO SP</Link>
               <Link href="/quanto-custa-avcb-sao-paulo" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ TABELA PREÇOS</Link>
               <Link href="/avcb-comércio" className="text-[10px] font-black uppercase text-gray-500 hover:text-primary transition-colors tracking-widest">→ AVCB COMÉRCIO</Link>
            </div>
        </div>
      </section>
    </>
  );
}
