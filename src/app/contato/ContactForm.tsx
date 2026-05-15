// src/app/contato/ContactForm.tsx — CLIENT component (moved from page.tsx)
"use client";

import { useState } from "react";
import Image from "next/image";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/components/JsonLD";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Contato", item: "/contato" }
      ])) }} />

      <section className="bg-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-3xl font-bold mb-4">Fale com a DRD2 Engenharia</h1>
          <p className="text-xl text-gray-300">
            Nossa equipe técnica está pronta para avaliar a conformidade da sua edificação e orçamentar suas aprovações ou instalações em São Paulo.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-12">
          
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
               <div className="relative w-32 h-40 mb-4 rounded-xl overflow-hidden border-2 border-slate-200 shadow-sm">
                 <Image 
                    src="/images/eng-samuel-oficial.webp" 
                    alt="Eng. Samuel Costa, responsável técnico DRD2 Engenharia, CREA-SP 5070163570" 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 768px) 150px, 150px"
                 />
               </div>
               <p className="text-secondary font-black uppercase tracking-tighter leading-tight">Eng. Samuel Costa</p>
               <p className="text-primary font-bold text-[10px] tracking-widest uppercase mt-1">CREA-SP 5070163570</p>
               <p className="text-gray-500 text-xs italic mt-3 font-medium">Responsável Técnico pela avaliação da sua edificação e aprovação dos laudos.</p>
            </div>
          
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-secondary mb-6">Canais de Atendimento</h2>
              
              <div className="mb-6">
                <p className="text-sm font-bold text-gray-500 uppercase">WhatsApp / Telefone</p>
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-primary hover:underline">
                  +55 11 9999-9999
                </a>
              </div>

              <div className="mb-6">
                <p className="text-sm font-bold text-gray-500 uppercase">E-mail Comercial</p>
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-lg font-bold text-secondary hover:text-primary transition-colors">
                  {process.env.NEXT_PUBLIC_EMAIL || "comercial.drd2@gmail.com"}
                </a>
              </div>

              <div>
                <p className="text-sm font-bold text-gray-500 uppercase">Localização Base</p>
                <p className="text-gray-700">São Paulo, SP</p>
                <p className="text-sm text-gray-500">Atendimento presencial focado na Grande SP.</p>
              </div>

              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="mt-8 w-full flex items-center justify-center rounded-md bg-green-600 px-4 py-3 text-sm font-bold text-white shadow hover:bg-green-700 transition-colors">
                Falar com engenheiro especialista Especialista
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            {status === "success" ? (
               <div className="text-center py-12">
                 <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
                 <h2 className="text-2xl font-bold text-secondary mb-2">Solicitação Enviada!</h2>
                 <p className="text-gray-600">Um de nossos engenheiros entrará em contato comercialmente muito em breve.</p>
                 <button onClick={() => setStatus("idle")} className="mt-6 text-primary hover:underline">Enviar nova mensagem</button>
               </div>
            ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo *</label>
                     <input required type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="João da Silva" />
                   </div>
                   <div>
                     <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp *</label>
                     <input required type="text" id="whatsapp" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="(11) 99999-9999" />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail (opcional)</label>
                     <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="joao@empresa.com" />
                   </div>
                   <div>
                     <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Cidade / Bairro *</label>
                     <input required type="text" id="city" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="Interlagos, SP" />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div>
                     <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Edificação *</label>
                     <select required id="type" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
                       <option value="">Selecione...</option>
                       <option value="Condomínio residencial">Condomínio residencial</option>
                       <option value="Condomínio comercial">Condomínio comercial</option>
                       <option value="Comércio">Comércio</option>
                       <option value="Indústria">Indústria</option>
                       <option value="Escola">Escola</option>
                       <option value="Hospital">Hospital</option>
                       <option value="Hotel">Hotel</option>
                       <option value="Galpão">Galpão</option>
                       <option value="Outro">Outro</option>
                     </select>
                   </div>
                   <div>
                     <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Serviço de interesse *</label>
                     <select required id="service" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
                        <option value="">Selecione...</option>
                        <option value="AVCB">AVCB</option>
                        <option value="CLCB">CLCB</option>
                        <option value="Projeto de incêndio">Projeto de incêndio</option>
                        <option value="Alarme de incêndio">Alarme de incêndio</option>
                        <option value="Sprinkler / Chuveiro">Sprinkler / Chuveiro automático</option>
                        <option value="Hidrante">Hidrante</option>
                        <option value="SPDA">SPDA</option>
                        <option value="Manutenção">Manutenção</option>
                        <option value="Não sei ainda">Não sei ainda</option>
                     </select>
                   </div>
                 </div>

                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (opcional)</label>
                   <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="Nos conte um pouco mais sobre sua demanda..." />
                 </div>

                 <button 
                  disabled={status === "sending"}
                  className="w-full bg-primary text-white font-bold py-4 rounded hover:bg-red-700 transition disabled:opacity-70 disabled:cursor-wait"
                 >
                   {status === "sending" ? "Processando..." : "Receber Orçamento Técnico"}
                 </button>
               </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
