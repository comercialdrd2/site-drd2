import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, ShieldCheck, AlertTriangle, FileCheck, MapPin, Gauge, Droplet, Zap, FireExtinguisher } from "lucide-react";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import { servicesData } from "@/data/services";
import LeadForm from "@/components/LeadForm";
import ServiceClusterLinks from "@/components/ServiceClusterLinks";
import ServiceBlogLinks from "@/components/ServiceBlogLinks";

export const metadata = {
  title: servicesData["laudo-estanqueidade-gas-sao-paulo"].metaTitle,
  description: servicesData["laudo-estanqueidade-gas-sao-paulo"].metaDescription,
  alternates: {
    canonical: "/laudo-estanqueidade-gas-sao-paulo",
  },
};

export default function LadoGasPage() {
  const service = servicesData["laudo-estanqueidade-gas-sao-paulo"];
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;

  const _schema = generateMasterSchema({
        slug: "/laudo-estanqueidade-gas-sao-paulo",
        title: metadata.title,
        description: metadata.description,
        serviceName: "Laudo de Estanqueidade de Gás",
        faqs: service.faqs.map(f => ({
          question: f.question,
          answer: f.answer
        })),
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Laudo de Estanqueidade de Gás", item: "/laudo-estanqueidade-gas-sao-paulo" }
        ]
      });

  return (
    <>
            <JsonLD schema={_schema} />

      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[550px] flex items-center bg-gray-900">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Teste de Estanqueidade de Gás em SP"
          fill
          className="object-cover object-center opacity-40 grayscale-[20%]"
          priority
        sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-20">
          <div className="max-w-3xl">
            <span className="inline-block bg-orange-600/30 text-orange-200 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-orange-500/50 text-xs shadow-lg backdrop-blur-sm">
              Instalação e Manutenção Preventiva
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-2xl text-white">
              {service.h1}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium">
              Teste de estanqueidade de gás GLP e GN para condomínios, restaurantes, cozinhas industriais e redes prediais em São Paulo, com laudo técnico e ART.
            </p>
            
            <div className="mb-10">
              <ul className="space-y-4 inline-flex flex-col text-left">
                {[
                  "Inspeção de tubulação de gás GLP e GN",
                  "Laudo de gás para condomínio, restaurante e cozinha industrial",
                  "Apoio técnico para AVCB, regularização e segurança predial"
                ].map((item, id) => (
                  <li key={id} className="flex items-center text-lg text-gray-200 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 mr-3 shrink-0" />
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
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-bold shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:bg-[#1EBE5A] hover:-translate-y-1 transition-all"
              >
                Solicitar teste de gás no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Local & Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">Teste de Estanqueidade de Gás com Laudo Técnico e ART</h2>
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed mb-12 text-left md:text-center">
            {service.content.map((p, index) => <p key={index}>{p}</p>)}
          </div>
          
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-6 py-4 text-gray-700 font-medium shadow-sm w-full md:w-auto">
            <MapPin className="w-6 h-6 text-primary shrink-0" />
            <span className="text-left">
              Atendimento ágil para <strong>teste de estanqueidade de gás em São Paulo</strong>, laudo de gás SP para condomínio, restaurante, cozinha industrial e central de GLP.
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <p className="text-orange-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4">Aplicações críticas</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none">
                Onde o laudo de gás evita risco real
              </h2>
              <p className="mt-5 text-slate-300 font-medium leading-relaxed">
                O serviço não é apenas documental. Ele reduz risco de vazamento invisível, explosão, incêndio, responsabilização jurídica e bloqueio de regularização.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Condomínios residenciais",
                  desc: "Teste de estanqueidade de gás em condomínio, inspeção de rede de gás em prédio, laudo de gás para síndico e verificação de vazamento de gás encanado nas áreas comuns.",
                },
                {
                  title: "Restaurantes e cozinhas industriais",
                  desc: "Inspeção de gás GLP em restaurante comercial, laudo de gás para cozinha industrial, segurança de gás em restaurante e manutenção preventiva da rede que alimenta fogões, fornos e equipamentos.",
                },
                {
                  title: "Central de GLP e gás natural",
                  desc: "Avaliação técnica de central de gás, tubulação, reguladores, válvulas, conexões e pontos de consumo para reduzir risco de vazamento e não conformidade.",
                },
                {
                  title: "AVCB, licenças e segurança predial",
                  desc: "O laudo técnico de rede de gás pode ser decisivo em renovação de AVCB, fiscalização, auditoria de seguradora, regularização predial e continuidade operacional.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problema / Agitação / Solução - Por que Fazer? */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 leading-tight">
                  {service.pas.problem}
                </h2>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-3 rounded-lg border border-red-100 shrink-0">
                      <AlertTriangle className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      {service.pas.agitation}
                    </p>
                  </div>
                </div>
                <div className="bg-secondary p-6 rounded-2xl shadow-lg border border-secondary mb-6 text-white">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg shrink-0">
                      <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-gray-200 font-medium leading-relaxed">
                      {service.pas.solution}
                    </p>
                  </div>
                </div>
             </div>
             <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Renovação AVCB", desc: "A cada vistoria do bombeiro é exigido o laudo de estanqueidade dentro do prazo de 1 ano.", Icon: FireExtinguisher },
                    { title: "Alta Precisão", desc: "Uso de manômetros de última geração aferidos pelo Inmetro e calibração fina.", Icon: Gauge },
                    { title: "Gás Natural e GLP", desc: "Atendemos centrais de abrigo de cilindros ou tubulações de concessionárias (Comgás).", Icon: Droplet },
                    { title: "Riscos Elétricos", desc: "Validação do distanciamento correto das faíscas para evitar arcos de explosão.", Icon: Zap },
                  ].map((feat, id) => (
                     <div key={id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                        <feat.Icon className="w-8 h-8 text-orange-500 mb-4" />
                        <h3 className="font-bold text-secondary mb-2">{feat.title}</h3>
                        <p className="text-sm text-gray-500">{feat.desc}</p>
                     </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>


      <div className="container mx-auto px-4 max-w-4xl text-center py-4 opacity-50"><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Conteúdo Técnico Atualizado em: Maio de 2026</p></div>
      <ServiceClusterLinks currentSlug="/laudo-estanqueidade-gas-sao-paulo" />
      <ServiceBlogLinks currentSlug="/laudo-estanqueidade-gas-sao-paulo" />

      <LeadForm />

      {/* FAQ Com Schema.org */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Principais Dúvidas sobre o Laudo de Gás</h2>
            <p className="text-lg text-gray-600">Esclareça suas dúvidas técnicas sobre o teste antes da vistoria final no local.</p>
          </div>
          
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer open:ring-2 open:ring-primary/20 transition-all hover:bg-white">
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

      {/* Mega CTA */}
      <section className="py-24 bg-secondary text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 transform translate-x-1/2 blur-2xl"></div>
         <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
              Não deixe o AVCB trancar por causa da rede de Gás
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Agende agora o teste hermético e evite dores de cabeça com documentações atrasadas e a responsabilidade civil do seu condomínio.
            </p>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-2xl text-xl shadow-2xl hover:bg-[#1EBE5A] hover:text-white hover:text-primary transition-all duration-300"
            >
              Falar Agora pelo WhatsApp
            </a>
         </div>
      </section>
    </>
  );
}
