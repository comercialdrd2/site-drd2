import Image from "next/image";
import Link from "next/link";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { HardHat, ShieldCheck, CheckCircle, Phone, ArrowRight, Award, FileText, Scale } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

const _pageTitle = "Engenheiro de AVCB em São Paulo | ART e Responsabilidade Técnica";
const _pageDesc = "Precisa de um engenheiro civil ou de segurança para seu AVCB em SP? Emissão de ART, projetos técnicos e acompanhamento direto. Evite multas com assessoria especializada.";

export const metadata = {
  title: "Engenheiro de AVCB em São Paulo | ART e Responsabilidade Técnica",
  description: "Precisa de um engenheiro civil ou de segurança para seu AVCB em SP? Emissão de ART, projetos técnicos e acompanhamento direto. Evite multas com assessoria especializada.",
  alternates: {
    canonical: "/engenheiro-avcb-sao-paulo",
  },
};

export default function EngenheiroAVCBPage() {
  const faqs = [
    {
      question: "Qual engenheiro pode assinar o AVCB em São Paulo?",
      answer: "Engenheiros civis, mecânicos e de segurança do trabalho legalmente habilitados no CREA-SP podem emitir a ART (Anotação de Responsabilidade Técnica) para projetos de incêndio e renovação de AVCB, conforme suas atribuições profissionais."
    },
    {
      question: "O que é a ART emitida pelo engenheiro no processo de AVCB?",
      answer: "A ART é o documento legal que vincula o engenheiro ao projeto ou serviço prestado, garantindo que o profissional assume a responsabilidade técnica pela segurança dos sistemas de combate a incêndio instalados e verificados."
    },
    {
      question: "O engenheiro acompanha a vistoria do Corpo de Bombeiros?",
      answer: "Sim, a presença ou o acompanhamento técnico do engenheiro é fundamental no dia da vistoria oficial para responder a questionamentos técnicos do Oficial e garantir que os sistemas sejam testados corretamente."
    },
    {
      question: "Como verificar se o engenheiro de AVCB é habilitado?",
      answer: "Você pode solicitar o número do registro profissional e realizar uma consulta pública no site do CREA-SP. Todos os engenheiros da DRD2 são devidamente registrados e ativos."
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
        <Image src="/images/eng-samuel-oficial.webp" alt="Engenheiro especialista em projetos de AVCB e segurança contra incêndio" fill className="object-cover object-top opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />

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
                Se você busca por um <span className="text-white font-bold underline decoration-primary">Engenheiro AVCB SP</span>, sua busca termina aqui. Oferecemos assessoria técnica direta com emissão de **ART (CREA-SP)** e acompanhamento integral até a aprovação final.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-12">
                <a 
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary hover:bg-[#1EBE5A] hover:text-white hover:text-primary text-white font-black px-10 py-5 rounded-2xl text-xl transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
                >
                  <HardHat className="w-6 h-6" /> Falar com o Engenheiro
                </a>
              </div>

              <div className="flex items-center gap-8 border-t border-white/10 pt-8">
                 <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center font-bold text-xs">RT</div>
                    ))}
                 </div>
                 <p className="text-sm text-gray-400 font-medium">Equipe de engenheiros com +15 anos de atuação no CBPMESP.</p>
              </div>
            </div>
            
            <div className="lg:w-2/5">
               <div className="bg-white p-8 rounded-[3rem] shadow-3xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12" />
                 <h3 className="text-2xl font-black text-secondary mb-6 flex items-center gap-3">
                    Avaliação Técnica Hoje
                 </h3>
           
      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <ServiceClusterLinks currentSlug="/engenheiro-avcb-sao-paulo" />
      <ServiceBlogLinks currentSlug="/engenheiro-avcb-sao-paulo" />

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
              <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight tracking-tight uppercase">Por que a assinatura do <span className="text-primary">Engenheiro</span> é obrigatória?</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                O Corpo de Bombeiros de São Paulo não aprova processos sem a **ART (Análise de Responsabilidade Técnica)**. Esse documento garante que um profissional legalmente habilitado validou os cálculos de hidrantes, a carga de incêndio e a segurança estrutural do seu imóvel.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Segurança Jurídica", desc: "O engenheiro assume a responsabilidade civil e criminal pelo projeto, protegendo o síndico ou proprietário." },
                  { title: "Conformidade Normativa", desc: "Domínio total das ITs vigentes e atualizações frequentes do CBPMESP." },
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
                <Link href="/avcb-preco" className="mt-12 inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest text-sm hover:text-white transition-colors">
                  Consultar Tabela de Preços <ArrowRight className="w-5 h-5" />
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
               <h2 className="text-3xl md:text-5xl font-black text-secondary leading-none uppercase tracking-tighter">O Risco de contratar sem Engenheiro</h2>
               <p className="text-xl text-gray-500 font-medium leading-relaxed italic">
                 "Despachantes ou instaladores podem 'tentar' o protocolo, mas apenas o engenheiro garante a legalidade técnica que as Seguradoras e a Prefeitura exigem."
               </p>
               <div className="pt-8">
                  <a 
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-3 bg-secondary text-white font-black px-12 py-6 rounded-2xl text-xl hover:bg-primary transition shadow-xl"
                  >
                    Confirmar Responsável Técnico no WhatsApp
                  </a>
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
              { title: "Vistoria Prévia", desc: "Mapeamos falhas técnicas antes da auditoria oficial." },
              { title: "Cálculo e Projeto", desc: "Dimensionamos os sistemas conforme a IT CBPMESP." },
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

      {/* Final Conversion - Professional Hub */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">Sua empresa em <span className="text-secondary italic">Boas Mãos</span></h2>
          <p className="text-xl font-medium mb-12 text-white/90">
            Fale diretamente com um engenheiro especialista e receba um diagnóstico técnico do seu imóvel em SP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-primary font-black px-12 py-5 rounded-2xl text-xl hover:bg-secondary hover:text-white transition shadow-2xl flex items-center justify-center gap-3"
            >
              <FileText className="w-6 h-6" /> Solicitar ART / Orçamento
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
