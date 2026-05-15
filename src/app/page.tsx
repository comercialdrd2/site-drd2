import Link from "next/link";
import Image from "next/image";
import OccupancyAccordion from "@/components/OccupancyAccordion";
import { JsonLD, generateOrganizationSchema, generateBreadcrumbSchema } from "@/components/JsonLD";
import { ShieldCheck, FileCheck, BookOpen, ArrowRight, MapPin, Bell, Droplets, Zap, Wrench, Users, Flame, Wind } from "lucide-react";
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

      {/* Hero com Banner Real */}
      <section className="relative text-white overflow-hidden min-h-[480px] lg:min-h-[600px] flex items-center bg-slate-950 pt-[100px] pb-[40px] lg:pt-[120px]">
        {/* Imagem de fundo */}
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Renovação e Obtenção do AVCB - DRD2 Engenharia"
          fill
          className="object-cover object-center opacity-30 mix-blend-luminosity"
          priority
          sizes="100vw"
          quality={60}
        />
        {/* Overlay escuro para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D121F]/95 via-[#0D121F]/90 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
             <div className="lg:w-3/5 text-left">
               <h1 className="text-3xl md:text-3xl lg:text-4xl font-black mb-6 leading-tight tracking-tighter italic uppercase">
                 AVCB, CLCB e Projetos de Segurança<br/>
                 <span className="text-primary not-italic">Contra Incêndio em SP</span>
               </h1>
               <p className="text-lg md:text-xl text-gray-200 mb-4 font-medium italic border-l-4 border-primary pl-6">
                 Regularização completa junto ao Corpo de Bombeiros — do projeto técnico à aprovação final, com total suporte até o certificado.
               </p>
               <div className="flex flex-col items-start justify-start">
                 <CtaWhatsApp
                   variant="primary"
                   occupationType="meu imóvel"
                   size="lg"
                   className="w-full sm:w-auto justify-center"
                 />
                 <p className="mt-4 text-sm text-gray-300 italic font-medium tracking-wide">
                   Avaliação técnica gratuita via WhatsApp
                 </p>
               </div>
             </div>

             <div className="w-full max-w-xs mx-auto lg:max-w-none lg:w-2/5 flex justify-center group mt-6 lg:mt-0">
                <div className="relative w-full max-w-sm">
                   <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-orange-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                   <div className="relative rounded-[2rem] overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900 group-hover:-translate-y-2 transition-transform duration-500">
                     <Image
                        src="/images/eng-samuel-oficial.webp"
                        alt="Eng. Samuel Costa, responsável técnico DRD2 Engenharia, CREA-SP 5070163570"
                        width={400}
                        height={400}
                        className="object-cover object-top w-full h-full aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
                        priority
                     />
                     <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 pt-12">
                       <p className="text-white font-black italic uppercase tracking-tighter text-lg leading-none">Eng. Samuel Costa</p>
                       <p className="text-primary font-bold text-[10px] tracking-widest uppercase mt-1">Responsável Técnico DRD2 | CREA-SP 5070163570</p>
                       <div className="mt-3 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-1.5">
                         <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                         <span className="text-[10px] font-black text-white uppercase tracking-widest">Registro CREA-SP · 5070163570</span>
                       </div>
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Números impactantes */}
      <section className="py-0 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="text-center py-8 px-6 border-r border-gray-100">
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                <StatCounter end={2500} prefix="+" />
              </div>
              <div className="text-xs md:text-sm font-semibold text-secondary uppercase tracking-wider mt-1">AVCBs e CLCBs aprovados</div>
            </div>
            <div className="text-center py-8 px-6 border-r border-gray-100">
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                <StatCounter end={98} suffix="%" />
              </div>
              <div className="text-xs md:text-sm font-semibold text-secondary uppercase tracking-wider mt-1">Taxa de aprovação na 1ª análise</div>
            </div>
            <div className="text-center py-8 px-6 border-r border-gray-100">
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                <StatCounter end={10} suffix=" dias" />
              </div>
              <div className="text-xs md:text-sm font-semibold text-secondary uppercase tracking-wider mt-1">Prazo médio para protocolo</div>
            </div>
            <div className="text-center py-8 px-6">
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                <StatCounter end={15} suffix=" anos" />
              </div>
              <div className="text-xs md:text-sm font-semibold text-secondary uppercase tracking-wider mt-1">Anos de experiência técnica</div>
            </div>
          </div>
        </div>
      </section>

      {/* -- SERVIÇOS TÉCNICOS -- */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tight mb-3">
              Soluções Completas em Engenharia de Incêndio
            </h2>
            <p className="text-slate-500 font-medium">Regularização e engenharia de segurança contra incêndio em São Paulo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: ShieldCheck, name: "AVCB",                  desc: "Auto de Vistoria do Corpo de Bombeiros",         href: "/avcb-sao-paulo" },
              { icon: FileCheck,   name: "CLCB",                  desc: "Certificado de Licença do Corpo de Bombeiros",   href: "/clcb-sao-paulo" },
              { icon: Flame,       name: "Projeto de Incêndio",   desc: "PPCI / AVCB conforme IT do CBPMESP",             href: "/projetos-incendio" },
              { icon: Droplets,    name: "Sprinklers (SPK)",       desc: "Chuveiros automáticos — IT 23/25",               href: "/sprinklers" },
              { icon: Bell,        name: "Alarme de Incêndio",    desc: "Detecção e alarme — IT 18/2019",                 href: "/alarme-incendio-sao-paulo" },
              { icon: Wind,        name: "Rede de Hidrantes",     desc: "Hidrantes e mangotinhos — IT 22/25",             href: "/hidrantes" },
              { icon: Zap,         name: "SPDA (Para-raios)",     desc: "Proteção atmosférica — NBR 5419",                href: "/spda" },
              { icon: Wrench,      name: "Manutenção",            desc: "Gestão periódica com laudos e ART inclusa",      href: "/manutencao" },
              { icon: Users,       name: "Brigada de Incêndio",   desc: "Treinamento e formação de brigadas — IT 17",     href: "/brigada" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-slate-900 text-sm uppercase tracking-tight">{item.name}</h3>
                  <p className="text-slate-500 text-xs font-medium mt-0.5 truncate">{item.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary shrink-0 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regiões Atendidas (Local SEO Hub) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Capilaridade em São Paulo</span>
              <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight mb-6 uppercase tracking-tighter">
                Especialistas Locais em <br/><span className="text-primary italic">Todas as Zonas de SP</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                Nossa estrutura de engenharia permite atendimento ágil em todas as subprefeituras da capital e Grande São Paulo, com foco no conhecimento das caraterísticas locais.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Zona Sul", "Zona Leste", "Zona Norte", "Zona Oeste", "Centro", "ABC Paulista", "Guarulhos", "Osasco"].map((zona) => (
                <div key={zona} className="bg-slate-50 border border-slate-200 px-6 py-3 rounded-2xl text-secondary font-black text-sm uppercase tracking-widest shadow-sm">
                  {zona}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { 
                name: "Centro Histórico", 
                slug: "/avcb-centro-sao-paulo", 
                bairros: [
                  { name: "Sé (Tombados)", href: "/avcb-se" },
                  { name: "República (Hotéis)", href: "/avcb-republica" },
                  { name: "Liberdade (Asiático)", href: "/avcb-liberdade" },
                  { name: "Bela Vista", href: "/avcb-bela-vista" }
                ]
              },
              { 
                name: "Eixo Paulista", 
                slug: "/avcb-centro-sao-paulo", 
                bairros: [
                  { name: "Consolação (Hospitais)", href: "/avcb-consolacao" },
                  { name: "Paraíso", href: "/avcb-zona-sul" },
                  { name: "Jardins", href: "/avcb-zona-oeste-sao-paulo" }
                ]
              },
              { 
                name: "Polo Corporativo", 
                slug: "/avcb-zona-sul", 
                bairros: [
                  { name: "Itaim Bibi (Triple A)", href: "/avcb-itaim-bibi" },
                  { name: "Pinheiros (Comércio)", href: "/avcb-pinheiros" },
                  { name: "Vila Olímpia", href: "/avcb-zona-sul" },
                  { name: "Moema", href: "/avcb-zona-sul" }
                ]
              },
              { 
                name: "Polo Logístico", 
                slug: "/avcb-alphaville-barueri", 
                bairros: [
                  { name: "Alphaville (Galpões)", href: "/avcb-alphaville-barueri" },
                  { name: "Barueri", href: "/avcb-alphaville-barueri" },
                  { name: "Osasco", href: "/avcb-zona-oeste-sao-paulo" },
                  { name: "Castello Branco", href: "/avcb-alphaville-barueri" }
                ]
              },
              { 
                name: "Zona Leste", 
                slug: "/avcb-zona-leste-sao-paulo", 
                bairros: [
                  { name: "Tatuapé", href: "/avcb-zona-leste-sao-paulo" },
                  { name: "Mooca", href: "/avcb-zona-leste-sao-paulo" },
                  { name: "Brás (Têxtil)", href: "/avcb-centro-sao-paulo" }
                ]
              }
            ].map((reg) => (
              <div 
                key={reg.name} 
                className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary p-6 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-white group-hover:bg-primary transition-colors rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-slate-100">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-black text-secondary uppercase tracking-tighter mb-2">{reg.name}</h3>
                <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[10px] text-gray-400 font-medium leading-relaxed mb-4">
                  {reg.bairros.map((b, idx) => (
                    <Link key={b.name} href={b.href} className="hover:text-primary transition-colors">
                      {b.name}{idx < reg.bairros.length - 1 ? "," : ""}
                    </Link>
                  ))}
                </div>
                <Link href={reg.slug} className="text-primary font-bold text-xs uppercase tracking-widest mt-auto group-hover:translate-x-1 transition-transform">Ver Região &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div id="especialidades">
        <OccupancyAccordion />
      </div>

      {/* Diferencial / Autoridade */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative border-y border-slate-800">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/3 -skew-x-12 transform translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-red-500 font-black text-xs uppercase tracking-[0.3em] mb-3 block">98% de aprovação na 1ª análise</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
              Por que a DRD2 é a <span className="text-red-600 not-italic">escolha certa?</span>
            </h2>
            <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">Engenharia própria, execução completa e zero terceirização de responsabilidade técnica.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {[
              { num: "01", title: "Engenharia Própria", desc: "Não terceirizamos responsabilidade técnica. Nossos próprios engenheiros assinam e acompanham cada projeto do início ao certificado." },
              { num: "02", title: "Foco em Aprovação", desc: "Taxa de 98% de aprovação na 1ª análise no CBPMESP. Sem Comunique-se desnecessário, sem retrabalho, sem taxas extras para você." },
              { num: "03", title: "Chave na Mão", desc: "Entregamos a solução completa: do levantamento técnico à obra física e ao certificado final, sem subcontratados." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 hover:border-red-600/30 transition-all group">
                <p className="text-red-500 font-black text-xs tracking-widest mb-4">{item.num}</p>
                <h3 className="text-xl font-black uppercase italic tracking-tight mb-4 leading-tight">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-900/30 border border-red-600/20 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2">AVCB vencido gera risco imediato de interdição.</h3>
              <p className="text-slate-400 font-medium">Solicite análise técnica gratuita agora — sem compromisso, resposta em até 2h.</p>
            </div>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-black px-10 py-5 rounded-2xl text-lg shadow-2xl hover:bg-[#1EBE5A] transition-all uppercase tracking-tight whitespace-nowrap"
            >
              Diagnóstico técnico gratuito no WhatsApp →
            </a>
          </div>
        </div>
      </section>
      {/* Início Seção Blog */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight mb-4">
                Nosso <span className="text-primary italic">Blog</span> Técnico
              </h2>
              <p className="text-xl text-gray-500 font-medium">
                Guias, normas e atualizações sobre segurança contra incêndio em São Paulo, explicados por engenheiros.
              </p>
            </div>
            <Link 
              href="/blog" 
              className="group flex items-center gap-3 text-secondary font-black text-lg hover:text-primary transition-all pb-2 border-b-2 border-slate-200 hover:border-primary"
            >
              Ver todos os artigos <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={post.image || "/images/blog/fire_safety_equipment_premium.webp"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                    loading="lazy"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-secondary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-slate-400 text-xs font-bold mb-4 uppercase tracking-tighter flex items-center gap-2">
                    <BookOpen className="w-3 h-3 text-primary" /> {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-all leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Ler artigo completo <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Fim Seção Blog */}

      {/* Trust bar final */}
      <section className="py-10 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">
            {["✓ Atendimento em Atendimento em São Paulo", "✓ ART Inclusa em Todos os Projetos", "✓ 98% Aprovação na 1ª Análise", "✓ Suporte Pós-Entrega Garantido", "✓ Engenheiro Responsável Próprio"].map((item, i) => (
              <span key={i} className="hover:text-red-500 transition-colors cursor-default">{item}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

