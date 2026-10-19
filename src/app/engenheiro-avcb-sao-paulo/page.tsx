import Image from "next/image";
import Link from "next/link";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { HardHat, ShieldCheck, ArrowRight, Award, FileText, Scale } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";

const _pageTitle = "Engenheiro para AVCB em São Paulo: ART, projeto e vistoria";
const _pageDesc = "Engenheiro responsável técnico para o AVCB em São Paulo: ART no CREA-SP, projeto, adequações e acompanhamento da vistoria do Corpo de Bombeiros. Fale pelo WhatsApp.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: {
    canonical: "/engenheiro-avcb-sao-paulo",
  },
};

// Mensagem já escrita no WhatsApp: o engenheiro recebe o pedido com o que precisa para responder.
const whatsappEngenheiro = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=${encodeURIComponent(
  "Olá! Preciso de engenheiro responsável técnico (ART) para o AVCB. Tipo e endereço do imóvel:"
)}`;

export default function EngenheiroAVCBPage() {
  const faqs = [
    {
      question: "Quem pode ser o responsável técnico do AVCB: engenheiro ou arquiteto?",
      answer: "O Decreto Estadual nº 69.118/2024 exige profissional habilitado pelo respectivo conselho de classe, com anotação ou registro de responsabilidade técnica. Na prática: engenheiro com ART no CREA-SP ou arquiteto com RRT no CAU, dentro das atribuições de cada um. Na DRD2, o responsável técnico é o Eng. Samuel Costa, CREA-SP 5070163570."
    },
    {
      question: "O que é a ART emitida pelo engenheiro no processo de AVCB?",
      answer: "A ART (Anotação de Responsabilidade Técnica) é o documento que vincula o engenheiro ao projeto ou serviço prestado. Com ela, o profissional assume a responsabilidade técnica pelos sistemas de segurança contra incêndio que projetou, instalou ou verificou."
    },
    {
      question: "O engenheiro acompanha a vistoria do Corpo de Bombeiros?",
      answer: "Sim. O acompanhamento técnico no dia da vistoria ajuda a responder às perguntas do vistoriador e a garantir que os sistemas sejam testados corretamente."
    },
    {
      question: "Como verificar se o engenheiro de AVCB é habilitado?",
      answer: "Peça o número do registro profissional e faça a consulta pública no site do CREA-SP. O registro do Eng. Samuel Costa, responsável técnico da DRD2, é o CREA-SP 5070163570."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/engenheiro-avcb-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "Engenheiro de AVCB São Paulo",
        faqs: faqs,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "AVCB São Paulo", item: "/avcb-sao-paulo" },
          { name: "Engenheiro Especialista", item: "/engenheiro-avcb-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Authority - Professional Focus */}
      <section className="relative bg-slate-950 text-white pt-32 pb-24 overflow-hidden border-b-8 border-primary">
        <Image src="/images/eng-samuel-oficial-v3.webp" alt="Eng. Samuel Costa, responsável técnico da DRD2 Engenharia" fill className="object-cover object-top opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />

        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
              <span className="inline-block bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">Responsabilidade Técnica Direta</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.0] tracking-tighter text-white">
                Engenheiro de AVCB em <span className="text-primary italic text-5xl md:text-7xl">São Paulo</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                Engenheiro responsável técnico para o seu AVCB: emitimos a <strong className="text-white">ART no CREA-SP</strong>, fazemos o projeto e as adequações e acompanhamos o processo no Corpo de Bombeiros até o certificado.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-12">
                <TrackedWhatsAppLink
                  href={whatsappEngenheiro}
                  source="hero_cta"
                  className="bg-primary hover:bg-[#1EBE5A] hover:text-white text-white font-black px-10 py-5 rounded-2xl text-xl transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
                >
                  <HardHat className="w-6 h-6" /> Falar com o Engenheiro
                </TrackedWhatsAppLink>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                 <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
                 <p className="text-sm text-gray-300 font-medium">
                   Responsável técnico: <strong className="text-white">Eng. Samuel Costa</strong>, CREA-SP 5070163570.
                 </p>
              </div>
            </div>

            <div className="lg:w-2/5">
               <div className="bg-white p-8 rounded-[3rem] shadow-3xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12" />
                 <h3 className="text-2xl font-black text-secondary mb-6 flex items-center gap-3">
                    Peça uma avaliação técnica
                 </h3>
                 <LeadForm variant="compact" showWrapper={false} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why the Engineer matters - E-E-A-T Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight tracking-tight uppercase">Por que o <span className="text-primary">responsável técnico</span> é obrigatório?</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                O processo no Corpo de Bombeiros pede um profissional habilitado, com anotação ou registro de responsabilidade técnica: no caso do engenheiro, a <strong>ART (Anotação de Responsabilidade Técnica)</strong>. É ela que mostra quem responde pelo projeto e pelos sistemas de segurança do imóvel.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Responsabilidade definida", desc: "O responsável técnico responde pelo projeto e pelos serviços que assina, e o proprietário ou síndico fica com a documentação em ordem." },
                  { title: "Conformidade Normativa", desc: "Projeto feito pelas Instruções Técnicas vigentes do CBPMESP e pelo Decreto Estadual nº 69.118/2024." },
                  { title: "Precisão de Cálculos", desc: "Dimensionamento correto de bombas, mangueiras e reservatórios para evitar reprovações." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl group hover:bg-white hover:shadow-xl transition-all">
                    <ShieldCheck className="text-primary w-8 h-8 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-secondary text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-secondary p-12 rounded-[4rem] text-white shadow-[0_50px_100px_-20px_rgba(13,18,31,0.5)]">
                <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
                   <Award className="text-primary w-10 h-10" /> Atuação Técnica
                </h3>
                <ul className="space-y-6">
                  {[
                    "Elaboração de Projetos Técnicos (PT)",
                    "Projetos Técnicos Simplificados (PTS)",
                    "Emissão de ART para Renovação",
                    "Teste de Estanqueidade de Gás",
                    "Atestado de Brigada de Incêndio",
                    "Laudo de Compartimentação e CMAR"
                  ].map((task, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg font-bold group">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" /> {task}
                    </li>
                  ))}
                </ul>
                <Link prefetch={false} href="/quanto-custa-avcb-sao-paulo" className="mt-12 inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                  Ver o que pesa no preço <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags - Urgent Context */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-32 -mt-32" />

             <div className="text-center max-w-3xl mx-auto space-y-8 relative z-10">
               <Scale className="w-16 h-16 text-primary mx-auto mb-6" />
               <h2 className="text-3xl md:text-5xl font-black text-secondary leading-none uppercase tracking-tighter">O risco de fazer sem responsável técnico</h2>
               <p className="text-xl text-gray-500 font-medium leading-relaxed italic">
                 Sem um profissional habilitado assinando, o processo não anda: o Corpo de Bombeiros pede a ART do engenheiro (ou o RRT do arquiteto) que responde pelo projeto e pelos sistemas.
               </p>
               <div className="pt-8">
                  <TrackedWhatsAppLink
                    href={whatsappEngenheiro}
                    source="service_cta"
                    className="inline-flex items-center gap-3 bg-secondary text-white font-black px-12 py-6 rounded-2xl text-xl hover:bg-primary transition shadow-xl"
                  >
                    Confirmar Responsável Técnico no WhatsApp
                  </TrackedWhatsAppLink>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Process Hub */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-secondary mb-6 tracking-tighter uppercase">Assessoria <span className="text-primary italic">Ponta a Ponta</span></h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              Como conduzimos o seu processo do diagnóstico ao certificado na mão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: "Vistoria Prévia", desc: "Mapeamos falhas técnicas antes da vistoria oficial." },
              { title: "Cálculo e Projeto", desc: "Dimensionamos os sistemas conforme as ITs do CBPMESP." },
              { title: "Emissão de ART", desc: "Formalizamos a responsabilidade no CREA-SP." },
              { title: "Protocolo e Acompanhamento", desc: "Assistência integral até a emissão do AVCB." }
            ].map((s, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/30 transition-all text-center">
                <div className="text-4xl font-black text-primary/20 mb-4">0{i+1}</div>
                <h4 className="font-bold text-secondary text-lg mb-3">{s.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perguntas frequentes (as mesmas do schema FAQPage) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-secondary mb-10 tracking-tighter uppercase text-center">Perguntas frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-black text-secondary text-lg cursor-pointer select-none">
                  {faq.question}
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ServiceClusterLinks currentSlug="/engenheiro-avcb-sao-paulo" />
      <ServiceBlogLinks currentSlug="/engenheiro-avcb-sao-paulo" />

      {/* Final Conversion - Professional Hub */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">Sua empresa em <span className="text-secondary italic">Boas Mãos</span></h2>
          <p className="text-xl font-medium mb-12 text-white/90">
            Fale diretamente com um engenheiro e receba um diagnóstico técnico do seu imóvel em SP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedWhatsAppLink
              href={whatsappEngenheiro}
              source="service_cta"
              className="bg-white text-primary font-black px-12 py-5 rounded-2xl text-xl hover:bg-secondary hover:text-white transition shadow-2xl flex items-center justify-center gap-3"
            >
              <FileText className="w-6 h-6" /> Solicitar ART / Orçamento
            </TrackedWhatsAppLink>
          </div>
        </div>
      </section>
    </>
  );
}
