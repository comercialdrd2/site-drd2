import Image from "next/image";
import Link from "next/link";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { Building2, ShieldCheck, CheckCircle2, Phone, ArrowRight, Briefcase, Globe, Users, PenTool as Tool, Factory } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

const _pageTitle = "Empresa de AVCB em São Paulo | Consultoria Especializada DRD2";
const _pageDesc = "A DRD2 Engenharia é a empresa líder em AVCB em São Paulo. Mais de 2.500 aprovações, projetos técnicos, manutenção de equipamentos e assessoria completa no CBPMESP.";

export const metadata = {
  title: "Empresa de AVCB em São Paulo | Consultoria Especializada DRD2",
  description: "A DRD2 Engenharia é a empresa líder em AVCB em São Paulo. Mais de 2.500 aprovações, projetos técnicos, manutenção de equipamentos e assessoria completa no CBPMESP.",
  alternates: {
    canonical: "/empresa-avcb-sao-paulo",
  },
};

export default function EmpresaAVCBPage() {
  const faqs = [
    {
      question: "Qual a função de uma empresa de AVCB em São Paulo?",
      answer: "Uma empresa de AVCB especializada, como a DRD2 Engenharia, atua na gestão completa da segurança contra incêndio: desde o diagnóstico técnico e elaboração do projeto (PT/PTS) até a instalação de equipamentos, treinamento de brigada e acompanhamento da vistoria final do Corpo de Bombeiros."
    },
    {
      question: "Como escolher a melhor empresa de AVCB?",
      answer: "Priorize empresas com engenheiros próprios (registrados no CREA-SP), vasta experiência em diferentes ocupações (industrial, comercial, residencial), transparência nos orçamentos e suporte total em caso de exigências técnicas do CBPMESP."
    },
    {
      question: "A DRD2 Engenharia atende toda a Grande São Paulo?",
      answer: "Sim, atendemos a capital, toda a região metropolitana (ABC, Guarulhos, Osasco, Barueri), litoral e as principais cidades do interior do Estado de São Paulo."
    },
    {
      question: "Quais os riscos de contratar uma empresa de AVCB não especializada?",
      answer: "O principal risco é o indeferimento do processo por erros técnicos básicos, gerando retrabalho, novas taxas e, principalmente, a manutenção da irregularidade do imóvel, o que impede a renovação do seguro e do alvará."
    }
  ];

  const _schema = generateMasterSchema({
        slug: "/empresa-avcb-sao-paulo",
        title: _pageTitle,
        description: _pageDesc,
        serviceName: "Empresa de AVCB São Paulo",
        faqs: faqs,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "AVCB São Paulo", item: "/avcb-sao-paulo" },
          { name: "Empresa Especializada", item: "/empresa-avcb-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Corporate - High Magnitude */}
      <section className="relative bg-slate-900 text-white pt-32 pb-24 overflow-hidden border-b-8 border-primary">
        <Image src="/images/eng-samuel-oficial.webp" alt="Equipe de engenharia especializada em regularização do Corpo de Bombeiros" fill className="object-cover object-center opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />

        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950/50" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
              <span className="inline-block bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">Consultoria B2B Triple-A</span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
                Empresa Especializada em <span className="text-primary italic">AVCB SP</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-medium">
                Sua parceira estratégica em Segurança Contra Incêndio. Se você precisa de uma <span className="text-white font-bold underline decoration-primary">Empresa AVCB SP</span>, oferecemos gestão integral de projetos e aprovações com **zero burocracia**.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-12">
                <a 
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary hover:bg-[#1EBE5A] hover:text-white hover:text-primary text-white font-black px-10 py-5 rounded-2xl text-xl transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
                >
                  <Building2 className="w-6 h-6" /> Falar com Consultor B2B
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                 <div>
                    <div className="text-3xl font-black text-primary">+2.5k</div>
                    <div className="text-xs text-gray-400 uppercase font-black tracking-widest mt-1">Aprovações</div>
                 </div>
                 <div>
                    <div className="text-3xl font-black text-primary">+15</div>
                    <div className="text-xs text-gray-400 uppercase font-black tracking-widest mt-1">Anos Exp</div>
                 </div>
                 <div>
                    <div className="text-3xl font-black text-primary">100%</div>
                    <div className="text-xs text-gray-400 uppercase font-black tracking-widest mt-1">Suporte</div>
                 </div>
              </div>
            </div>
            
            <div className="lg:w-2/5">
               <div className="bg-white p-8 rounded-[3rem] shadow-3xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12" />
                 <h3 className="text-2xl font-black text-secondary mb-6 flex items-center gap-3">
                    Consultoria Imediata
                 </h3>
           
      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <ServiceClusterLinks currentSlug="/empresa-avcb-sao-paulo" />
      <ServiceBlogLinks currentSlug="/empresa-avcb-sao-paulo" />

      <LeadForm variant="compact" showWrapper={false} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Differentiation Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-secondary leading-none uppercase tracking-tighter mb-6">Por que escolher a <span className="text-primary italic">DRD2 Engenharia</span>?</h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              Diferente de profissionais autônomos, oferecemos uma estrutura completa de engenharia, manutenção e suporte jurídico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Globe, 
                title: "Cobertura Completa", 
                desc: "Atendimento em toda a Grande São Paulo, Litoral e Interior com agilidade logística." 
              },
              { 
                icon: Users, 
                title: "Corpo Técnico Próprio", 
                desc: "Engenheiros e projetistas dedicados, sem terceirização do seu processo." 
              },
              { 
                icon: ShieldCheck, 
                title: "Seguro Profissional", 
                desc: "Garantia técnica e civil em todos os projetos e laudos emitidos pela empresa." 
              }
            ].map((feature, i) => (
              <div key={i} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary transition-colors">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4 italic">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial & Commercial Scale */}
      <section className="py-24 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter uppercase">Capacidade <span className="text-primary">Turn-Key</span></h2>
              <p className="text-xl text-gray-300 font-medium leading-relaxed">
                Nossa empresa entrega o AVCB completo. Não terceirizamos a instalação nem a manutenção. Gerenciamos tudo em um único contrato.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { label: "Projetos de Incêndio", sub: "PT e PTS" },
                   { label: "Manutenção Preventiva", sub: "Mensal e Bimestral" },
                   { label: "Recarga de Extintores", sub: "Logística Própria" },
                   { label: "Testes de Hidrantes", sub: "Pressurização e Laudo" }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                      <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-lg">{item.label}</div>
                        <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{item.sub}</div>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
               <div className="relative p-8 border-2 border-primary/30 rounded-[3rem]">
                 <div className="bg-slate-900/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/5">
                    <Factory className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-2xl font-black mb-4">Setores Atendidos</h3>
                    <div className="flex flex-wrap gap-2 uppercase text-[10px] font-black tracking-widest">
                       {["Indústrias", "Logística", "Hospitais", "Condomínios", "Shopping Centers", "Escolas", "Varejo"].map(tag => (
                         <span key={tag} className="border border-white/20 px-3 py-1.5 rounded-full hover:bg-primary transition-colors cursor-default">
                           {tag}
                         </span>
                       ))}
                    </div>
                    <div className="mt-10 border-t border-white/10 pt-8">
                       <p className="text-sm text-gray-400 font-medium italic">"A DRD2 é a nossa escolha recorrente para auditorias de segurança em nossas plantas industriais de SP." — Diretor de Facilities</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Indexing - E-E-A-T Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-12">
           <ShieldCheck className="w-20 h-20 text-primary mx-auto opacity-20" />
           <h2 className="text-3xl md:text-5xl font-black text-secondary leading-none uppercase tracking-tighter italic">Especialista em Regularização de <span className="text-primary not-italic">Alto Risco</span></h2>
           <p className="text-xl text-gray-500 font-medium leading-[1.6]">
             O mercado de AVCB em São Paulo é saturado de profissionais amadores. A **DRD2 Engenharia** se diferencia pela estabilidade corporativa e pelo compromisso com o resultado final: o certificado emitido e aprovado pelo Comando dos Bombeiros.
           </p>
           <div className="pt-8">
              <Link href="/avcb-sao-paulo" className="inline-flex items-center gap-4 bg-secondary text-white font-black px-12 py-6 rounded-2xl text-xl hover:bg-primary transition shadow-xl">
                 Ver Guia de Autoridade SP <ArrowRight />
              </Link>
           </div>
        </div>
      </section>

      {/* Final Conversion - Corporate CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <div className="bg-white p-12 md:p-24 rounded-[5rem] shadow-3xl border border-slate-100 flex flex-col items-center">
            <Building2 className="w-16 h-16 text-primary mb-8" />
            <h2 className="text-4xl md:text-6xl font-black text-secondary mb-8 leading-[0.9] tracking-tighter uppercase">Sua Empresa está <span className="text-primary italic">Segura</span>?</h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-12">
              Evite interdições e multas. Deixe a burocracia do AVCB com quem é referência em São Paulo. Orçamento empresarial detalhado em até 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary text-white font-black px-12 py-5 rounded-2xl text-xl hover:bg-secondary transition-all shadow-xl shadow-primary/20"
              >
                Solicitar Visita Técnica
              </a>
              <Link 
                href="/avcb-preco"
                className="border-2 border-secondary text-secondary font-black px-12 py-5 rounded-2xl text-xl hover:bg-secondary hover:text-white transition-all"
              >
                Tabela de Investimento
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
