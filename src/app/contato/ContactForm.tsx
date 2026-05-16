"use client";

import { useState } from "react";
import Image from "next/image";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/components/JsonLD";

type FormState = {
  name: string;
  whatsapp: string;
  email: string;
  city: string;
  type: string;
  service: string;
  message: string;
};

const empty: FormState = { name: "", whatsapp: "", email: "", city: "", type: "", service: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [waCopySent, setWaCopySent] = useState(false);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "5511915131652";

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erro");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá, acabo de enviar uma solicitação pelo site da DRD2 Engenharia. Segue o resumo:\n\n` +
      `Nome: ${form.name}\n` +
      `WhatsApp: ${form.whatsapp}\n` +
      `Cidade: ${form.city}\n` +
      `Edificação: ${form.type}\n` +
      `Serviço: ${form.service}\n` +
      (form.message ? `Mensagem: ${form.message}\n` : "") +
      `\nAguardo o contato. Obrigado!`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
    setWaCopySent(true);
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
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-primary hover:underline">
                  +55 11 9999-9999
                </a>
              </div>
              <div className="mb-6">
                <p className="text-sm font-bold text-gray-500 uppercase">E-mail Comercial</p>
                <a href="mailto:comercial@drd2.com.br" className="text-lg font-bold text-secondary hover:text-primary transition-colors">
                  comercial@drd2.com.br
                </a>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase">Localização Base</p>
                <p className="text-gray-700">São Paulo, SP</p>
                <p className="text-sm text-gray-500">Atendimento presencial focado na Grande SP.</p>
              </div>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="mt-8 w-full flex items-center justify-center rounded-md bg-green-600 px-4 py-3 text-sm font-bold text-white shadow hover:bg-green-700 transition-colors">
                Falar com engenheiro especialista
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
                <h2 className="text-2xl font-bold text-secondary mb-2">Solicitação Enviada!</h2>
                <p className="text-gray-600 mb-8">Nossa equipe receberá sua solicitação e entrará em contato em breve.</p>

                {!waCopySent ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <p className="text-lg font-bold text-slate-800 mb-2">Quer receber uma cópia no WhatsApp?</p>
                    <p className="text-sm text-gray-500 mb-5">Enviamos um resumo da sua solicitação direto para o WhatsApp da DRD2, agilizando o atendimento.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={handleSendWhatsApp}
                        className="flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-5 h-5" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                        Sim, enviar cópia no WhatsApp
                      </button>
                      <button
                        onClick={() => setWaCopySent(true)}
                        className="text-gray-500 hover:text-gray-700 font-medium py-3 px-4 transition"
                      >
                        Não, obrigado
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4">
                    <button onClick={() => { setStatus("idle"); setForm(empty); setWaCopySent(false); }} className="text-primary hover:underline font-medium">
                      Enviar nova mensagem
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm font-medium">
                    Erro ao enviar. Tente novamente ou fale pelo WhatsApp.
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo *</label>
                    <input required type="text" id="name" value={form.name} onChange={set("name")} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="João da Silva" />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp *</label>
                    <input required type="text" id="whatsapp" value={form.whatsapp} onChange={set("whatsapp")} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail (opcional)</label>
                    <input type="email" id="email" value={form.email} onChange={set("email")} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="joao@empresa.com" />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Cidade / Bairro *</label>
                    <input required type="text" id="city" value={form.city} onChange={set("city")} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="Interlagos, SP" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Edificação *</label>
                    <select required id="type" value={form.type} onChange={set("type")} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
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
                    <select required id="service" value={form.service} onChange={set("service")} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
                      <option value="">Selecione...</option>
                      <option value="AVCB">AVCB</option>
                      <option value="CLCB">CLCB</option>
                      <option value="Projeto de incêndio">Projeto de incêndio</option>
                      <option value="Alarme de incêndio">Alarme de incêndio</option>
                      <option value="Sprinkler / Chuveiro automático">Sprinkler / Chuveiro automático</option>
                      <option value="Hidrante">Hidrante</option>
                      <option value="SPDA">SPDA</option>
                      <option value="Manutenção">Manutenção</option>
                      <option value="Não sei ainda">Não sei ainda</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (opcional)</label>
                  <textarea id="message" rows={4} value={form.message} onChange={set("message")} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="Nos conte um pouco mais sobre sua demanda..." />
                </div>

                <button
                  disabled={status === "sending"}
                  className="w-full bg-primary text-white font-bold py-4 rounded hover:bg-red-700 transition disabled:opacity-70 disabled:cursor-wait"
                >
                  {status === "sending" ? "Enviando..." : "Receber Orçamento Técnico"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
