import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import { JsonLD, generateBreadcrumbSchema, generateAboutPageSchema } from "@/components/JsonLD";
import Image from "next/image";
import Link from "next/link";
import {
  Users, Target, Shield, MapPin, CheckCircle2,
  History, Award, Zap, Search, ShieldCheck,
  Building2, Store, HeartPulse, GraduationCap, Building,
  Factory, FileText, BadgeCheck,
} from "lucide-react";
import StatCounter from "@/components/StatCounter";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const metadata = {
  title: "Sobre a DRD2 Engenharia | Especializada em AVCB e CLCB em São Paulo",
  description: "Conheça a DRD2 Engenharia, empresa especializada em AVCB e segurança contra incêndio em São Paulo. Responsável técnico: Engenheiro Samuel Costa, CREA-SP 5070163570.",
  alternates: {
    canonical: "/sobre",
  },
};

export default function AboutPage() {
  const schemaBreadcrumbs = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Sobre", item: "/sobre" }
  ]);
  const schemaAbout = generateAboutPageSchema();
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;
  
  return (
    <>
      <JsonLD schema={schemaBreadcrumbs} />
      <JsonLD schema={schemaAbout} />

      {/* Hero Section */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
        {/* Usando placeholder premium da engenharia, embora a foto E-E-A-T venha depois */}
        <Image
          src="/images/page-sobre-hero.webp"
          alt="Operação Híbrida DRD2 Engenharia"
          fill
          className="object-cover object-center mix-blend-luminosity opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/90" />
        
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <span className="inline-block bg-primary text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest mb-8 shadow-xl border border-primary/50">
            Especialização em Segurança Contra Incêndio
          </span>
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-8 leading-[1.1] tracking-tighter italic uppercase text-balance">
            Sobre a DRD2 Engenharia: <br/>
            <span className="text-primary not-italic block mt-4">Autoridade em AVCB em SP</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-medium italic border-l-4 border-primary pl-6 text-left">
            A DRD2 Engenharia é uma empresa especializada em projetos de prevenção e proteção contra incêndio, regularização de AVCB e CLCB junto ao Corpo de Bombeiros do Estado de São Paulo (CBPMESP).
          </p>
        </div>
      </section>

      {/* ── QUEM É A DRD2 ── */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl text-lg text-slate-700 leading-relaxed font-medium">
          <h2 className="text-4xl font-black text-secondary mb-10 tracking-tighter uppercase italic border-l-8 border-primary pl-6">Quem é a DRD2 Engenharia</h2>
          
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl mb-10 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
             <div className="space-y-2">
                <div className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-primary"/> <strong className="text-secondary">Razão Social:</strong> DRD2 Engenharia LTDA</div>
                <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-primary"/> <strong className="text-secondary">CNPJ:</strong> 51.774.619/0001-94</div>
                <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary"/> <strong className="text-secondary">Registro no CREA-SP:</strong> 2775460</div>
                <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary"/> <strong className="text-secondary">Área de atuação:</strong> Cidade de São Paulo e Grande SP</div>
             </div>
             <div className="hidden md:block w-32 h-32 relative opacity-20">
               <ShieldCheck className="w-full h-full text-primary" />
             </div>
          </div>

          <div className="space-y-6">
            <p>
              A DRD2 Engenharia foi fundada com o propósito de entregar projetos de segurança contra incêndio com rigor técnico e clareza no processo — dois fatores que, historicamente, faltam no mercado. Processos conduzidos por profissionais sem especialização ou por empresas que tratam o AVCB como serviço secundário resultam em retrabalho, exigências não atendidas e clientes frustrados.
            </p>
            <p>
              Nosso modelo é diferente: <strong>cada processo é conduzido por engenheiro especializado</strong>, com responsabilidade técnica clara e comunicação direta com o cliente em todas as etapas.
            </p>
          </div>
        </div>
      </section>

      {/* ── RESPONSÁVEL TÉCNICO E-E-A-T ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase italic text-center text-balance">
            Responsável Técnico:<br/>
            <span className="text-primary not-italic">Engenheiro Samuel Costa</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative group">
               <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-rose-900 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden border-4 border-slate-800 shadow-2xl">
                 <Image 
                   src="/images/eng-samuel-oficial.webp" 
                   alt="Eng. Samuel Costa, responsável técnico DRD2 Engenharia, CREA-SP 5070163570"
                   fill
                   sizes="(max-width: 768px) 100vw, 500px"
                   className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                   loading="lazy"
                 />
                 <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-8 pt-20">
                   <p className="text-2xl font-black text-white italic tracking-tighter uppercase">Eng. Samuel Costa</p>
                   <p className="text-primary font-bold text-sm tracking-widest uppercase">CREA-SP 5070163570</p>
                 </div>
               </div>
            </div>
            
            <div className="lg:col-span-7 space-y-8 bg-slate-950 p-10 rounded-[3rem] border border-slate-800 shadow-2xl">
               <div className="space-y-4">
                 <div className="flex items-start gap-4">
                    <GraduationCap className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Formação</h4>
                      <p className="font-medium text-lg leading-snug">Engenheiro Civil e Engenheiro de Segurança do Trabalho</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Registro Profissional</h4>
                      <p className="font-medium text-lg leading-snug">CREA-SP 5070163570</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Área de especialização</h4>
                      <p className="font-medium text-slate-300 leading-snug">Projetos de prevenção e proteção contra incêndio, regularização de AVCB e CLCB junto ao CBPMESP, e segurança estrutural.</p>
                    </div>
                 </div>
               </div>
               
               <p className="text-slate-400 leading-relaxed border-t border-slate-800 pt-6 italic font-medium">
                 A combinação das duas formações — Engenharia Civil e Engenharia de Segurança do Trabalho — traz uma visão única para os projetos. Não tratamos apenas da conformidade normativa: pensamos a segurança contra incêndio como parte de um sistema integrado de proteção à vida e ao patrimônio. 
               </p>
               <div className="bg-primary/10 border border-primary/20 p-5 rounded-2xl">
                 <p className="text-white font-bold text-sm text-balance">
                   Todos os projetos da DRD2 são assinados com ART (Anotação de Responsabilidade Técnica) recolhida junto ao CREA-SP — a garantia legal obrigatória para o processo.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUE A DRD2 É A ESCOLHA CERTA ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black text-secondary mb-16 text-center uppercase tracking-tighter italic">
            Por que a DRD2 é a <span className="text-primary not-italic underline decoration-secondary">escolha certa</span><br/> para o seu AVCB
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
               <h3 className="text-2xl font-black text-secondary mb-4 flex items-center gap-3"><Target className="w-6 h-6 text-primary" /> Especialização Exclusiva</h3>
               <p className="text-slate-600 leading-relaxed font-medium">
                 Trabalhamos apenas com projetos de segurança contra incêndio e regularização junto ao CBPMESP. Não somos uma engenharia generalista que faz AVCB como serviço adicional — o AVCB é o nosso <strong>único negócio</strong>. Essa exclusividade garante profundidade técnica.
               </p>
             </div>
             
             <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
               <h3 className="text-2xl font-black text-secondary mb-4 flex items-center gap-3"><History className="w-6 h-6 text-primary" /> Atualização Normativa</h3>
               <p className="text-slate-600 leading-relaxed font-medium">
                 Acompanhamos em tempo real as atualizações das ITs do CBPMESP e aplicamos o mais recente Decreto Estadual nº 69.118/2024 em cada processo, garantindo processos sem risco de rejeição por defasagem.
               </p>
             </div>
             
             <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
               <h3 className="text-2xl font-black text-secondary mb-4 flex items-center gap-3"><Zap className="w-6 h-6 text-primary" /> Processos sem Retrabalho</h3>
               <p className="text-slate-600 leading-relaxed font-medium">
                 A metodologia da DRD2 é desenhada para minimizar "Comunique-se". Fazemos o enquadramento correto desde o diagnóstico, gerando processos mais rápidos e sem custos com refazimento de etapas na vistoria do Bombeiro.
               </p>
             </div>
             
             <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
               <h3 className="text-2xl font-black text-secondary mb-4 flex items-center gap-3"><Search className="w-6 h-6 text-primary" /> Transparência Total</h3>
               <p className="text-slate-600 leading-relaxed font-medium">
                 Escopo, prazo e valor entregues antes da contratação. Não há cobrança surpresa ou "imprevistos técnicos" inventados. O que está na proposta inicial é exatamente o que o cliente paga até a emissão do AVCB.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* ── NOSSOS VALORES ── */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { t: "Rigor Técnico", d: "Aplicamos a norma vigente sem atalhos ou improvisação." },
               { t: "Transparência", d: "Comunicação cristalina em todas as etapas." },
               { t: "Compromisso de Prazo", d: "Prazos combinados são prazos honrados." },
               { t: "Responsabilidade Ativa", d: "Todos os projetos possuem ART no CREA-SP." },
               { t: "Proteção à Vida", d: "O norte absoluto antes de qualquer viés comercial." }
             ].map((v, i) => (
                <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <h4 className="font-bold text-xl mb-2">{v.t}</h4>
                  <p className="text-sm font-medium text-white/80">{v.d}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS DE EDIFICAÇÃO & LOCALIZAÇÕES ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Ocupações */}
              <div>
                <h2 className="text-3xl font-black text-secondary mb-10 tracking-tighter uppercase italic underline decoration-primary">Tipos de Edificações</h2>
                <ul className="space-y-4">
                  {[
                    { l: "Condomínios residenciais (verticais/horizontais)", i: <Building className="w-5 h-5 text-primary" /> },
                    { l: "Edifícios corporativos e comerciais", i: <Building2 className="w-5 h-5 text-primary" /> },
                    { l: "Galpões logísticos e industriais", i: <Factory className="w-5 h-5 text-primary" /> },
                    { l: "Hospitais e Clínicas (Grupo H)", i: <HeartPulse className="w-5 h-5 text-primary" /> },
                    { l: "Restaurantes, Bares e Gastronomia", i: <Store className="w-5 h-5 text-primary" /> },
                    { l: "Escolas e Instituições de Ensino", i: <GraduationCap className="w-5 h-5 text-primary" /> }
                  ].map((it, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-primary transition-colors cursor-default">
                      {it.i} {it.l}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Área Atuação */}
              <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl">
                 <h2 className="text-3xl font-black mb-10 tracking-tighter uppercase italic flex items-center gap-3">
                   <MapPin className="text-primary w-8 h-8"/> Nossa Área SP
                 </h2>
                 <div className="space-y-6 text-sm font-bold text-slate-300">
                    <div>
                      <span className="block text-primary uppercase tracking-widest text-xs mb-1">Zona Sul</span>
                      Moema, Itaim Bibi, Brooklin, Vila Mariana, Morumbi...
                    </div>
                    <div>
                      <span className="block text-primary uppercase tracking-widest text-xs mb-1">Zona Oeste e Centro</span>
                      Pinheiros, Consolação, Paulista, Sé, República, Liberdade...
                    </div>
                    <div>
                      <span className="block text-primary uppercase tracking-widest text-xs mb-1">Zona Leste e Norte</span>
                      Tatuapé, Mooca, Santana...
                    </div>
                    <div>
                      <span className="block text-primary uppercase tracking-widest text-xs mb-1">Grande SP</span>
                      Guarulhos, Osasco, ABC Paulista, Alphaville e Barueri.
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── SEÇÃO CREA DE CONFIANÇA ── */}
      <section className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <ShieldCheck className="w-16 h-16 text-secondary mx-auto mb-6" />
           <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6 tracking-tighter uppercase italic text-balance">
             Por que contratar Engenheiro com <strong className="text-primary not-italic underline decoration-slate-900">CREA-SP Ativo?</strong>
           </h2>
           <div className="text-left bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-200 space-y-6 text-lg text-slate-600 font-medium">
              <p>
                A contratação não é apenas uma recomendação — é uma <strong>exigência legal</strong>. A Lei nº 5.194/1966 estabelece que o AVCB deve possuir ART (Anotação de Responsabilidade Técnica).
              </p>
              <p>
                Projetos protocolados sem ART são recusados automaticamente na primeira triagem pelo portal Via Fácil do Corpo de Bombeiros. Uma ART traz proteção absoluta para o proprietário ou síndico, garantindo a <strong>responsabilidade civil e criminal</strong> do engenheiro assinante e do CREA-SP como agente fiscalizador.
              </p>
              <div className="bg-rose-50 border-l-4 border-primary p-6 rounded-r-xl mt-8">
                <p className="text-slate-900 font-bold">
                  Documentação e Registros Auditáveis:<br/>
                </p>
                <ul className="mt-4 space-y-2 text-sm uppercase tracking-widest font-black text-slate-700">
                  <li>✔ CNPJ: 51.774.619/0001-94</li>
                  <li>✔ Empresa no CREA-SP: 2775460</li>
                  <li>✔ Responsável Técnico: Samuel Costa (CREA 5070163570)</li>
                </ul>
              </div>
           </div>
        </div>
      </section>


      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <ServiceClusterLinks currentSlug="/sobre" />
      <ServiceBlogLinks currentSlug="/sobre" />

      {/* ── CTA FINAL MASTER ── */}
      <section className="py-24 bg-slate-950 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-[5rem] font-black text-white italic uppercase tracking-tighter mb-8 leading-[0.9]">
            Fale com a <span className="text-primary not-italic text-balance drop-shadow-lg block mt-2">Engenharia Agora</span>
          </h2>
          <p className="text-xl text-slate-300 font-bold max-w-2xl mx-auto mb-12">
            Análise técnica gratuita da sua edificação. Apresentamos proposta completa com prazo e valor em até 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={whatsappLink}
              className="bg-primary hover:bg-[#25D366] text-white font-black px-12 py-6 rounded-2xl text-xl transition-transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 uppercase tracking-tighter border-b-4 border-red-900"
            >
              Falar com o Engenheiro Samuel
            </a>
          </div>
          
          <div className="mt-20 pt-10 border-t border-slate-800 flex flex-wrap justify-center gap-8 text-[11px] font-black text-slate-500 uppercase tracking-widest">
             <Link href="/" className="hover:text-primary transition-colors">→ Início</Link>
             <Link href="/avcb-condominio-sao-paulo" className="hover:text-primary transition-colors">→ AVCB Condomínios</Link>
             <Link href="/avcb-galpao-industrial-sao-paulo" className="hover:text-primary transition-colors">→ AVCB Indústrias</Link>
             <Link href="/quanto-custa-avcb-em-sao-paulo" className="hover:text-primary transition-colors">→ Tabela de Preços</Link>
          </div>
        </div>
      </section>
    </>
  );
}
