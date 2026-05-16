"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Send, User, Mail, Phone, CheckCircle, MessageSquare } from "lucide-react";
import { buildWhatsAppMessage, getIntentCtaLabel, getLeadTrackingContext } from "@/lib/leadTracking";
import { trackLeadSubmit } from "@/lib/analytics";

interface LeadFormProps {
  showWrapper?: boolean;
  className?: string;
  predefinedPropertyType?: string;
  variant?: "default" | "compact";
}

export default function LeadForm({
  showWrapper = true,
  className = "",
  predefinedPropertyType = "",
  variant = "default"
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [waLink, setWaLink] = useState("");
  const [urlTipo, setUrlTipo] = useState<string | null>(null);
  const [ctaLabel, setCtaLabel] = useState("Falar com engenheiro especialista");

  // Leitura da URL (ex: ?tipo=Galpão) com fallback seguro caso useSearchParams não esteja pronto
  useEffect(() => {
    setUrlTipo(new URLSearchParams(window.location.search).get("tipo"));
    setCtaLabel(getIntentCtaLabel());
  }, []);

  const finalPropertyType = predefinedPropertyType || urlTipo || "";

  function formatPhone(value: string) {
    const d = value.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 2) return `(${d}`;
    if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Converte os dados do formulário para JSON
    const tracking = getLeadTrackingContext();
    const data = {
      Nome: formData.get("name"),
      Email: formData.get("email"),
      WhatsApp: formData.get("phone"),
      Tipo_Edificacao: formData.get("buildingType"),
      Endereco_Bairro: formData.get("endereco_bairro") as string || "",
      Mensagem: formData.get("message"),
      Pagina_Entrada: tracking.páginaEntrada,
      URL_Atual: tracking.urlAtual,
      Caminho: tracking.caminho,
      Titulo_Pagina: tracking.tituloPagina,
      Referrer: tracking.referrer,
      UTM_Source: tracking.origem,
      UTM_Medium: tracking.midia,
      UTM_Campaign: tracking.campanha,
      UTM_Term: tracking.termo,
      UTM_Content: tracking.conteudo,
      Tipo_Pagina: tracking.tipoPagina,
      Segmento_Provavel: tracking.segmentoProvavel,
      _subject: `Novo Lead DRD2 — ${formData.get("buildingType") || "Imóvel"}`,
      _next: `${typeof window !== "undefined" ? window.location.origin : ""}/obrigado`,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      setSubmitError("");
      if (response.ok) {
        // GA4 — evento de conversao com contexto da pagina
        trackLeadSubmit({
          source: tracking.caminho,
          intent: tracking.segmentoProvavel,
          occupation: String(data.Tipo_Edificacao || ""),
        });

        // Prepara o link do Whatsapp, mas não abre na força
        const waNumber = process.env.NEXT_PUBLIC_WHATSAPP || "5511999999999";
        const waText = buildWhatsAppMessage(`*[ORÇAMENTO PELO SITE]*\nOlá, acabei de enviar meus dados pelo site e gostaria de agilizar meu atendimento.\n\n*Nome:* ${data.Nome}\n*WhatsApp:* ${data.WhatsApp}\n*E-mail:* ${data.Email}\n*Tipo:* ${data.Tipo_Edificacao}\n*Mensagem:* ${data.Mensagem || "Não informado"}\n*Página:* ${data.URL_Atual}`);
        setWaLink(`https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`);

        setSubmitted(true);
        form.reset();

        // O redirecionamento automático foi removido para dar tempo do usuário
        // decidir se quer clicar no botão do WhatsApp.
      } else {
        setSubmitError("Ocorreu um erro ao enviar. Por favor, tente novamente ou nos chame no WhatsApp.");
      }
    } catch {
      setSubmitError("Erro de conexão. Por favor, tente novamente ou nos chame no WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const isCompact = variant === "compact";

  const FormContent = (
    <div className={`bg-white rounded-[2rem] ${isCompact ? "" : "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border-2 border-slate-100 ring-1 ring-black/5 transform transition-all hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25)]"} overflow-hidden ${className}`}>
      <div className={`grid grid-cols-1 ${isCompact ? "" : "xl:grid-cols-5"}`}>
        {/* Bloco de Chamada (Esquerda) - Oculto no modo compact */}
        {!isCompact && (
          <div className="xl:col-span-2 bg-[#1E293B] bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-10 xl:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="text-3xl xl:text-4xl font-black mb-6 relative z-10 leading-tight">Diagnóstico Técnico Gratuito</h3>
            <p className="text-base xl:text-lg text-slate-300 mb-8 xl:mb-10 relative z-10 leading-relaxed font-normal">
              Fale com um <strong>Engenheiro Especialista</strong>. Analisamos sua ocupação e enviamos uma proposta técnica detalhada para aprovação do seu AVCB.
            </p>
            <ul className="space-y-4 xl:space-y-5 relative z-10">
              <li className="flex items-center gap-4 text-slate-200 group">
                <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(192,57,43,0.8)]"></span>
                <span className="text-sm xl:text-[15px] font-medium">Retorno em até 24h úteis</span>
              </li>
              <li className="flex items-center gap-4 text-slate-200 group">
                <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(192,57,43,0.8)]"></span>
                <span className="text-sm xl:text-[15px] font-medium">Orçamento técnico sem compromisso</span>
              </li>
              <li className="flex items-center gap-4 text-slate-200 group">
                <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(192,57,43,0.8)]"></span>
                <span className="text-sm xl:text-[15px] font-medium">Sigilo de dados assegurado</span>
              </li>
            </ul>
          </div>
        )}

        {/* Formulário (Direita) */}
        <div className={`${isCompact ? "p-0 min-h-[340px]" : "xl:col-span-3 p-8 xl:p-12 min-h-[480px]"} bg-white flex flex-col justify-center`}>
          {submitted ? (
            <div className={`h-full flex flex-col items-center justify-center text-center ${isCompact ? "py-6" : "py-10"} animate-in fade-in duration-500`}>
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-black text-slate-800 mb-2">Tudo certo!</h3>
              <p className="text-base text-slate-600 mb-6 font-medium">
                Seus dados foram enviados para nossa engenharia com sucesso.
              </p>

              <div className="bg-green-50 border border-green-100 p-5 rounded-2xl w-full">
                <p className="text-sm text-green-800 font-bold mb-4">
                  Quer agilizar seu atendimento agora mesmo? Envie uma cópia direto no WhatsApp do engenheiro responsável:
                </p>
                {waLink && (
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#128C4A] text-white font-black px-6 py-4 rounded-xl shadow-lg hover:bg-[#0f7a43] transition-all text-sm uppercase tracking-tight"
                  >
                    <Phone className="w-5 h-5" /> Enviar Cópia no WhatsApp
                  </a>
                )}
              </div>
            </div>
          ) : (
            <form className={`${isCompact ? "space-y-4" : "space-y-6"}`} onSubmit={handleSubmit}>
              {/* buildingType sempre como hidden — captura tipo de imovel via URL/contexto.
                  Pagina indica o tipo, nao precisa perguntar ao usuario. Reduz friccao. */}
              <input type="hidden" name="buildingType" value={finalPropertyType} />

              {/* Nome */}
              <div>
                <label className="text-[#1a1a1a] font-bold text-[13px] tracking-[0.5px] flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-[#CC0000]" /> Nome Completo / Razão Social
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome completo ou nome da empresa"
                  className="w-full px-[16px] py-[14px] rounded-[6px] border-2 border-[#cccccc] bg-[#ffffff] text-[15px] text-[#1a1a1a] placeholder:text-[#999999] placeholder:text-[14px] focus:outline-none focus:border-[#CC0000] focus:ring-[3px] focus:ring-[rgba(204,0,0,0.1)] transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* E-mail */}
                  <div>
                    <label className="text-[#1a1a1a] font-bold text-[13px] tracking-[0.5px] flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4 text-[#CC0000]" /> E-mail Corporativo
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="contato@empresa.com.br"
                      className="w-full px-[16px] py-[14px] rounded-[6px] border-2 border-[#cccccc] bg-[#ffffff] text-[15px] text-[#1a1a1a] placeholder:text-[#999999] placeholder:text-[14px] focus:outline-none focus:border-[#CC0000] focus:ring-[3px] focus:ring-[rgba(204,0,0,0.1)] transition-all"
                      required
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="text-[#1a1a1a] font-bold text-[13px] tracking-[0.5px] flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-[#CC0000]" /> WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(11) 99999-9999"
                      className="w-full px-[16px] py-[14px] rounded-[6px] border-2 border-[#cccccc] bg-[#ffffff] text-[15px] text-[#1a1a1a] placeholder:text-[#999999] placeholder:text-[14px] focus:outline-none focus:border-[#CC0000] focus:ring-[3px] focus:ring-[rgba(204,0,0,0.1)] transition-all"
                      required
                      onInput={(e) => {
                        const input = e.currentTarget;
                        input.value = formatPhone(input.value);
                      }}
                    />
                  </div>
                </div>

                {/* Endereço/Bairro removido — sera coletado no primeiro contato pelo WhatsApp.
                    Reduz friccao e aumenta taxa de conversao. */}

                {/* Mensagem — opcional, placeholder curto */}
                <div>
                  <label className="text-[#1a1a1a] font-bold text-[13px] tracking-[0.5px] flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-[#CC0000]" /> Como podemos ajudar?
                    <span className="text-[11px] text-slate-400 font-medium normal-case tracking-normal ml-1">(opcional)</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Ex: AVCB vencido, preciso renovar urgente..."
                    rows={2}
                    className="w-full px-[16px] py-[14px] rounded-[6px] border-2 border-[#cccccc] bg-[#ffffff] text-[15px] text-[#1a1a1a] placeholder:text-[#999999] placeholder:text-[14px] focus:outline-none focus:border-[#CC0000] focus:ring-[3px] focus:ring-[rgba(204,0,0,0.1)] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-3 bg-[#CC0000] text-[#ffffff] font-bold text-[16px] p-[16px] rounded-[6px] tracking-[0.5px] transition-all hover:bg-[#A30000] ${isSubmitting ? "opacity-50 cursor-not-allowed" : "shadow-lg"
                      }`}
                  >
                    {isSubmitting ? "Enviando..." : <><Send className="w-5 h-5" /> {ctaLabel}</>}
                  </button>
                  {submitError && (
                    <p className="text-red-600 text-sm font-semibold text-center bg-red-50 border border-red-200 rounded-lg px-4 py-3 mt-2">
                      {submitError}
                    </p>
                  )}
                  <div className="text-center mt-3 text-xs font-bold text-slate-500 flex justify-center items-center gap-4">
                    <span className="flex items-center gap-1 text-green-700"><span className="w-2 h-2 rounded-full bg-green-700 animate-pulse"></span> Resposta rápida</span>
                    <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-slate-400" /> Sem compromisso</span>
                  </div>
                  <p className="text-center mt-4 text-[11px] leading-relaxed text-slate-500 font-medium">
                    Ao enviar, você concorda com o tratamento dos seus dados pela DRD2 Engenharia para retorno do contato técnico, conforme nossa{" "}
                    <Link href="/politica-de-privacidade" className="text-red-600 font-bold underline hover:text-red-700">
                      Política de Privacidade
                    </Link>
                    {" "}e a Lei 13.709/2018 (LGPD).
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  if (!showWrapper) return FormContent;

  return (
    <section id="orçamento" className="py-24 bg-gray-100 border-y border-gray-300 shadow-inner relative z-10">
      <div className="container mx-auto px-4 max-w-5xl">
        {FormContent}
      </div>
    </section>
  );
}
