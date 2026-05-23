import Link from "next/link";
import Image from "next/image";
import OccupancyAccordion from "@/components/OccupancyAccordion";
import { JsonLD, generateOrganizationSchema, generateBreadcrumbSchema } from "@/components/JsonLD";
import { ShieldCheck, FileCheck, BookOpen, ArrowRight, MapPin, Bell, Droplets, Zap, Wrench, Users, Flame, Wind, Activity } from "lucide-react";
import StatCounter from "@/components/StatCounter";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import { blogPosts } from "@/data/blog";


export const metadata = {
  title: "DRD2 Engenharia | Empresa de Segurança Contra Incêndio em São Paulo",
  description: "Empresa especializada em AVCB, CLCB, projetos técnicos, alarme, sprinkler, hidrante e SPDA em São Paulo. Regularização completa junto ao Corpo de Bombeiros.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const orgSchema = generateOrganizationSchema();
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Por que preciso aprovar o AVCB ou CLCB em São Paulo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O AVCB/CLCB é o documento máximo de regularização da sua construção perante o Corpo de Bombeiros, exigido para alvarás empresariais e resguardo jurídico do responsável pela área do condomínio/empresa."
        }
      },
      {
        "@type": "Question",
        "name": "A DRD2 Engenharia atende quais regiões?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Focamos nossa operação prioritariamente na região metropolitana englobando: São Paulo capital, Zona Sul, Centro, ABC Paulista, Guarulhos, Osasco e toda a Grande SP."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês realizam a instalação de quais sistemas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dominamos de ponta a ponta a instalação pesada do sistema hidráulico (Hidrantes e Sprinklers), as malhas civis elétricas de Para-raios e a precisão técnica no Sistema de Detecção e Alarme."
        }
      }
    ]
  };


  return (
    <>
      <JsonLD schema={orgSchema} />
      <JsonLD schema={faqSchema} />
      <JsonLD schema={generateBreadcrumbSchema([{ name: "Home", item: "/" }])} />

      {/* Hero com Banner Real - ESTÉTICA PREMIUM NEON/GLASSMORPHISM */}
      <section className="relative text-white overflow-hidden min-h-[100vh] flex items-center bg-[#0a0a0e] pt-[120px] pb-[80px]">
        {/* Background Video/Image Substituto */}
        <div className="absolute inset-0">
          <Image
            src="/images/blog/fire_safety_equipment_premium.webp"
            alt="Renovação e Obtenção do AVCB - DRD2 Engenharia"
            fill
            className="object-cover object-center opacity-40 mix-blend-luminosity scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
            priority
            sizes="100vw"
            quality={80}
          />
          {/* Gradient Overlays Multiplos para profundidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0e]/90 via-[#0a0a0e]/70 to-[#0a0a0e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Texto Esquerda */}
            <div className="lg:w-[55%] text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 backdrop-blur-md mb-8 animate-fade-in-up">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </span>
                <span className="text-red-400 text-xs font-black uppercase tracking-widest">Engenheiros Especialistas de Prontidão</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tighter drop-shadow-2xl">
                Segurança Contra Incêndio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 animate-gradient-x">Alto Padrão.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-10 font-medium leading-relaxed max-w-2xl border-l-4 border-red-600 pl-6 bg-gradient-to-r from-slate-900/50 to-transparent py-4 rounded-r-2xl backdrop-blur-sm">
                Aprovação ágil do <strong className="text-white">AVCB e CLCB</strong> para condomínios verticais e complexos corporativos em São Paulo. Sem terceirizações, sem surpresas na vistoria.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
                <a 
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#25D366] to-[#1EBE5A] px-10 py-5 text-xl font-black shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:shadow-[0_0_60px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all text-white border border-[#25D366]/50 uppercase tracking-tight overflow-hidden w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Obter Diagnóstico Técnico Agora <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
              </div>
            </div>

            {/* Imagem Direita (Glassmorphism Card) */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end perspective-1000">
              <div className="relative w-full max-w-md group transform-gpu transition-all duration-700 hover:rotate-y-[-5deg] hover:rotate-x-[5deg]">
                {/* Glow de Fundo */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-red-600 via-orange-500 to-transparent rounded-[2.5rem] blur-[40px] opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
                
                {/* O Card em si */}
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl p-2">
                  <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5]">
                    <Image
                      src="/images/eng-samuel-oficial.webp"
                      alt="Eng. Samuel Costa - DRD2 Engenharia"
                      fill
                      className="object-cover object-top filter contrast-125 saturate-110 group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    {/* Dark gradient overlay bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-[#0a0a0e]/40 to-transparent" />
                  </div>

                  {/* Informações flutuantes dentro do card */}
                  <div className="absolute bottom-6 inset-x-6">
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl shadow-xl transform translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center gap-3 mb-2">
                        <ShieldCheck className="w-6 h-6 text-red-500" />
                        <div>
                          <h3 className="text-white font-black uppercase tracking-tight text-lg leading-none">Eng. Samuel Costa</h3>
                          <p className="text-slate-400 font-bold text-[10px] tracking-widest uppercase mt-1">Diretor Técnico DRD2</p>
                        </div>
                      </div>
                      <div className="bg-black/50 rounded-lg px-3 py-2 border border-white/5 flex justify-between items-center mt-3">
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Registro Ativo</span>
                        <span className="text-[11px] font-black text-red-400 tracking-wider">CREA-SP 5070163570</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Números impactantes - REDESIGN PREMIUM */}
      <section className="py-12 bg-[#0a0a0e] border-b border-white/5 relative z-20 -mt-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5 overflow-hidden">
            {[
              { num: 2500, prefix: "+", suffix: "", label: "AVCBs e CLCBs aprovados" },
              { num: 98, prefix: "", suffix: "%", label: "Aprovação na 1ª Análise" },
              { num: 10, prefix: "", suffix: " dias", label: "Média para protocolo" },
              { num: 15, prefix: "+", suffix: " anos", label: "Experiência Técnica" },
            ].map((stat, idx) => (
              <div key={idx} className="p-8 md:p-10 text-center group hover:bg-white/5 transition-colors duration-500">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-2 transform group-hover:scale-110 transition-transform duration-500">
                  <StatCounter end={stat.num} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- SERVIÇOS TÉCNICOS - REDESIGN GRID DINÂMICO -- */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Nossa Expertise</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                Engenharia de Incêndio <br/><span className="text-red-600 italic">Ponta a Ponta</span>
              </h2>
            </div>
            <p className="text-lg text-slate-600 font-medium max-w-md border-l-4 border-slate-300 pl-4">
              Do projeto arquitetônico à instalação hidráulica pesada. Não terceirizamos sua segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, name: "Emissão de AVCB",           desc: "Auto de Vistoria para condomínios e shoppings",    href: "/avcb-sao-paulo", highlight: true },
              { icon: FileCheck,   name: "Renovação CLCB",          desc: "Processo rápido para negócios até 750m²",          href: "/clcb-sao-paulo" },
              { icon: Flame,       name: "Projeto Técnico (PT)",    desc: "Plantas DWG conforme ITs do Corpo de Bombeiros",   href: "/projetos-incendio" },
              { icon: Droplets,    name: "Rede de Sprinklers",      desc: "Instalação e laudo de chuveiros automáticos",      href: "/sprinklers" },
              { icon: Wind,        name: "Casa de Bombas",          desc: "Dimensionamento e teste de rede de hidrantes",     href: "/hidrantes" },
              { icon: Bell,        name: "Alarme e Detecção",       desc: "Centrais endereçáveis e painéis repetidores",      href: "/alarme-incendio-sao-paulo" },
              { icon: Zap,         name: "Para-raios (SPDA)",       desc: "Adequação à NBR 5419 e laudos ôhmicos",            href: "/spda" },
              { icon: Activity,    name: "Laudos e ARTs",           desc: "Estanqueidade de Gás, CMAR e Elétrica",            href: "/manutencao" },
              { icon: Users,       name: "Treinamento de Brigada",  desc: "Formação em pista com atestado válido",            href: "/brigada" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`group relative bg-white p-8 rounded-[2rem] border ${item.highlight ? 'border-red-500/50 shadow-red-500/10' : 'border-slate-200 shadow-slate-200/50'} shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
              >
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${item.highlight ? 'bg-gradient-to-br from-red-600 to-orange-500 text-white shadow-[0_10px_20px_rgba(220,38,38,0.3)]' : 'bg-slate-50 group-hover:bg-red-50'}`}>
                    <item.icon className={`w-8 h-8 ${item.highlight ? 'text-white' : 'text-slate-700 group-hover:text-red-600'} transition-colors`} />
                  </div>
                  <h3 className="font-black text-slate-900 text-xl uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors">{item.name}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
                
                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-500">
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regiões Atendidas - REDESIGN CLEAN & CORPORATE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-slate-950 rounded-[3rem] p-10 md:p-16 lg:p-20 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent opacity-50" />
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 text-left">
                <span className="text-red-500 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Capilaridade Logística</span>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 uppercase tracking-tighter">
                  Engenharia local em <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Toda a Grande SP</span>
                </h2>
                <p className="text-lg text-slate-400 font-medium leading-relaxed mb-8">
                  Nossas equipes de vistoria não perdem tempo em trânsito. Temos engenheiros setorializados para aprovação rápida na Capital, no ABC, em Guarulhos e na Região Oeste.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Jardins", "Alphaville", "Moema", "Tatuapé", "Guarulhos", "SBC"].map((zona) => (
                    <div key={zona} className="bg-white/5 border border-white/10 px-5 py-2 rounded-xl text-white font-bold text-xs uppercase tracking-widest backdrop-blur-sm">
                      {zona}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                 {[
                  { name: "Zona Sul & Jardins", slug: "/avcb-zona-sul", color: "from-blue-500 to-cyan-500" },
                  { name: "Pólo Logístico (Osasco/Barueri)", slug: "/avcb-alphaville-barueri", color: "from-purple-500 to-pink-500" },
                  { name: "Centro & Zona Leste", slug: "/avcb-centro-sao-paulo", color: "from-emerald-500 to-teal-500" },
                  { name: "ABC Paulista", slug: "/projetos-incendio", color: "from-orange-500 to-yellow-500" } // Fallback link
                ].map((reg, idx) => (
                  <Link 
                    key={idx}
                    href={reg.slug} 
                    className="group bg-slate-900/50 backdrop-blur-md border border-white/5 hover:border-red-500/50 p-6 rounded-3xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                      <MapPin className="w-5 h-5 text-slate-400 group-hover:text-red-500" />
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight mb-2">{reg.name}</h3>
                    <span className="text-red-400 font-black text-[10px] uppercase tracking-widest mt-auto opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">Explorar Região &rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div id="especialidades" className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
            <OccupancyAccordion />
        </div>
      </div>

      {/* Diferencial / Autoridade - ULTRA PREMIUM */}
      <section className="py-32 bg-[#0a0a0e] text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              A Diferença da <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Excelência</span>
            </h2>
            <p className="text-slate-400 font-medium text-xl max-w-3xl mx-auto leading-relaxed">
              Diferente de despachantes e consultorias genéricas, a DRD2 é uma empresa de engenharia. Assinamos as ARTs, executamos a obra bruta e entregamos o documento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { num: "01", title: "Responsabilidade Técnica", desc: "Seu CNPJ protegido. Nossos engenheiros civis e eletricistas assinam os laudos. Zero terceirização de responsabilidade." },
              { num: "02", title: "Obra Chave-na-Mão", desc: "Do desenho da planta no AutoCAD até o corte do asfalto para passar a tubulação do hidrante. Nós resolvemos o problema inteiro." },
              { num: "03", title: "Aprovação em 1ª Vistoria", desc: "Nossos projetos são aprovados sem retrabalho, pois conhecemos os critérios subjetivos de cada grupamento regional." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:bg-slate-800/50 hover:border-red-500/30 transition-all duration-500 hover:-translate-y-2">
                <div className="text-6xl font-black text-white/5 mb-6">{item.num}</div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-900 to-red-600 rounded-[3rem] p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_20px_50px_rgba(220,38,38,0.2)] relative overflow-hidden">
             {/* Efeitos brilhantes dentro do banner */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[60px]" />
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500/40 rounded-full blur-[40px]" />

            <div className="relative z-10 lg:w-2/3 text-center lg:text-left">
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white leading-tight">
                Um erro no AVCB custa caro.
              </h3>
              <p className="text-white/80 font-medium text-lg md:text-xl">
                Não arrisque a interdição do seu patrimônio. Fale diretamente com o Diretor Técnico da DRD2 agora mesmo.
              </p>
            </div>
            <div className="relative z-10 lg:w-1/3 flex justify-center lg:justify-end w-full">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center inline-block bg-white text-red-900 font-black px-10 py-6 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-transform uppercase tracking-tighter"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Início Seção Blog - CLEAN & ELEGANT */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-slate-400 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Educação Técnica</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                Últimas do <span className="text-red-600 italic">Blog DRD2</span>
              </h2>
            </div>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-black text-sm uppercase tracking-widest px-6 py-3 rounded-xl transition-colors"
            >
              Ver todos os artigos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden rounded-3xl bg-slate-100 mb-6">
                  <Image
                    src={post.image || "/images/blog/fire_safety_equipment_premium.webp"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                    loading="lazy"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-grow px-2">
                  <div className="text-slate-400 text-xs font-bold mb-3 uppercase tracking-widest flex items-center gap-2">
                     {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace(' de ', ' ')}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-red-600 transition-colors leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-red-600 font-black text-xs uppercase tracking-widest mt-auto group-hover:gap-4 transition-all">
                    Ler artigo <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar final */}
      <section className="py-8 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-slate-600 font-black uppercase tracking-[0.2em] text-[9px]">
            {["✓ Atendimento em São Paulo", "✓ ART Inclusa", "✓ 98% Aprovação na 1ª Análise", "✓ Engenharia Própria"].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
