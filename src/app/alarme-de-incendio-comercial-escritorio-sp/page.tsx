import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, AlertTriangle, Building, FileCheck, Store, Briefcase, Eye, LocateFixed } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { servicesData } from "@/data/services";

export const metadata = {
  title: servicesData["alarme-de-incendio-comercial-escritorio-sp"].metaTitle,
  description: servicesData["alarme-de-incendio-comercial-escritorio-sp"].metaDescription,
  alternates: {
    canonical: "/alarme-de-incendio-comercial-escritorio-sp",
  },
};

export default function AlarmeComercialPage() {
  const service = servicesData["alarme-de-incendio-comercial-escritorio-sp"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/alarme-de-incendio-comercial-escritorio-sp",
        title: metadata.title,
        description: metadata.description,
        serviceName: "Alarme de Incêndio para Comércio e Escritório",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Alarme de Incêndio para Comércio e Escritório", item: "/alarme-de-incendio-comercial-escritorio-sp" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[550px] flex items-center bg-gray-900 border-b-4 border-primary">
        <Image src="/images/hero-escritorio-moderno.webp" alt="Ambiente corporativo de escritório moderno com estações de trabalho" fill className="object-cover object-center opacity-30 grayscale-[30%]" priority sizes="100vw" quality={65} />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary/20 text-red-300 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-primary/50 text-xs shadow-lg backdrop-blur-sm">
              <Briefcase className="w-4 h-4" /> Soluções para Prédios Comerciais SP
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-2xl text-white">
              {service.h1}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed font-medium">
              ⚠️ A Lei Federal nº 13.425 dita restrições letais às atividades que concentram <strong className="text-white bg-primary/50 px-2">mais de 100 pessoas.</strong> Seu Alvará não sobrevive sem o Bombeiro.
            </p>
            
            <div className="mb-10">
              <ul className="space-y-4 inline-flex flex-col text-left">
                {[
                  "Sistemas desenhados para Grupos C e D (Lojas/Corporativo)",
                  "Projetos focados em Evacuação Vertical e Integração Predial",
                  "Monitoramento remoto via Central Aprovada em Portaria"
                ].map((item, id) => (
                  <li key={id} className="flex items-center text-lg text-red-50 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-5 text-lg font-bold shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all text-white border border-red-500"
              >
                Solicitar Engenharia Comercial
              </a>
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Comercial" }]} dark />
      <TrustBar dark />

      {/* Alerta Legal Massivo - Exclusivo para Comercial */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative mt-[-20px] rounded-t-3xl z-20">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="bg-secondary rounded-[2rem] p-1.5 shadow-2xl relative transition-transform hover:scale-[1.01]">
             
             <div className="bg-white rounded-[1.8rem] p-8 md:p-12 relative z-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="shrink-0 bg-red-50 w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center border-4 border-red-100 shadow-inner">
                   <AlertTriangle className="w-16 h-16 md:w-20 md:h-20 text-primary animate-pulse" />
                </div>
                <div>
                   <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4 tracking-tighter">
                     Escritório e Shopping: O "Efeito Boate Kiss" na Fiscalização
                   </h2>
                   <p className="text-xl text-gray-700 font-bold mb-6 leading-relaxed">
                     O Decreto 69.118 cruza as informações com a Lei 13.425/2017. Na prática, escritórios e comércios entram na mira do órgão fiscal de maneira inflexível:
                   </p>
                   <ul className="space-y-4">
                     <li className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                       100 ou mais ocupantes simultâneos = Obrigatoriedade compulsória de Sistemas de Segurança interligados.
                     </li>
                     <li className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                       Shoppings exigem ARTs independentes para laudos de lojas âncoras se houver rebaixamento de teto escondendo detectores primários.
                     </li>
                     <li className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                       <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                       Edifícios Corporativos Verticais entram em exigência máxima (Evacuação C e D) reprovando AVCB nas omissões das salas alugadas.
                     </li>
                   </ul>
                </div>
             </div>
           </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Comercial" }]} dark />
      <TrustBar dark />

      {/* Solução & Por que Fazer */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-secondary leading-tight mb-6">
                SDAI para o Comércio: A Diretriz Oculta na IT-17/2025
             </h2>
             <p className="text-xl text-gray-600">
               O Bombeiro não aceita "gambiarra" no teto rebaixado da sua loja. Exterminamos o risco com adequações absolutas.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Central na Recepção", desc: "Instalada obrigatoriamente na portaria/acesso livre (Lei). Esconder a CAI no depósito resulta em falha de vistoria.", Icon: LocateFixed },
              { title: "Monitoramento Remoto", desc: "A IT-19 exige que escritórios sem vigia final de semana notifiquem imediatamente donos no smartphone via app.", Icon: Eye },
              { title: "Cobertura de Salão NBR", desc: "Sancas decorativas bloqueiam sensores. Nossa planta redistribui perfeitamente para aprovar a mudança de layout.", Icon: Store },
              { title: "Comissionamento Técnico Formal", desc: "Entregamos o atestado final documentado em projeto e ART, validando sua licença comercial frente à prefeitura.", Icon: FileCheck },
            ].map((feat, id) => (
                <div key={id} className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-red-300 transition-all group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                     <feat.Icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-bold text-xl text-secondary mb-4">{feat.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{feat.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Comercial" }]} dark />
      <TrustBar dark />


      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <ServiceClusterLinks currentSlug="/alarme-incendio-sao-paulo" />
      <ServiceBlogLinks currentSlug="/alarme-incendio-sao-paulo" />

      <LeadForm />

      {/* Diferenciais Competitivos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Por que Lojistas e Administradores Prediais escolhem a DRD2?</h2>
            <p className="text-lg text-gray-600 mb-12">Atendemos Prédios Corporativos (Multinacionais), Agências Bancárias, Franquias de Lojas e Centros de Compras em São Paulo.</p>
            
            <div className="text-left bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-12">
               <div className="space-y-6 flex-1">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <p className="text-gray-700"><strong>Sem Quebra-Quebra:</strong> Entendemos a rotina de um escritório. As instalações seguem rigor arquitetônico, utilizando infraestruturas estéticas e respeitando o silêncio diurno.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <p className="text-gray-700"><strong>Equipamentos INMETRO:</strong> Nada de material contrabandeado que surta ou liga falsamente à noite; sua empresa não paralisa por equipamentos não amologados.</p>
                  </div>
               </div>
               <div className="space-y-6 flex-1">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <p className="text-gray-700"><strong>Diagnóstico de Redes Integradas:</strong> Se você alugou uma sala em prédio com AVCB pronto, verificamos a autonomia exclusiva do seu recinto contra o painel mestre.</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <p className="text-gray-700"><strong>Agilidade de Contrato:</strong> Faturamos com Notas Fiscais e prazos que rodam as burocracias do seu setor de Compras Corporativo.</p>
                  </div>
               </div>
            </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Comercial" }]} dark />
      <TrustBar dark />

      {/* FAQ Com Schema.org */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Dúvidas Frequentes - Shopping, Loja e Escritório</h2>
            <p className="text-lg text-gray-600">Esclarecendo as restrições corporativas de SP para os Grupos C e D.</p>
          </div>
          
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer open:ring-2 open:ring-primary/20 transition-all hover:bg-gray-50">
                <summary className="flex items-center justify-between p-6 font-bold text-secondary text-lg select-none">
                  {faq.question}
                  <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-base border-t border-gray-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Serviï¿½os", href: "/servicos" }, { label: "Alarme Comercial" }]} dark />
      <TrustBar dark />

      {/* Mega CTA Final */}
      <section className="py-24 bg-secondary text-center relative overflow-hidden text-white border-t-8 border-primary">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-red-500/10 skew-x-12 transform translate-x-1/4 blur-3xl"></div>
         <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
              Mantenha Seu Negócio Aberto e Faturando.
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Delegue a regularização de AVCB corporativo para a Engenharia. Pare de correr risco contínuo com prefeitura e seguradoras fechando as portas da sua unidade.
            </p>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-2xl text-xl shadow-[0_0_40px_rgba(220,38,38,0.3)] hover:bg-[#1EBE5A] hover:text-white hover:text-secondary transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-6 h-6" /> Agendar Vistoria no Comércio
            </a>
            <p className="text-sm mt-6 text-gray-400 font-bold tracking-widest uppercase">
               Atendimento Consultivo B2B | 100% Norma NBR 17240
            </p>
         </div>
      </section>
    </>
  );
}
