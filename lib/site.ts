// Configuração central do site DRD2 Fachadas.
// Mudou o WhatsApp, o e-mail ou um código de medição? Altere só aqui.

export const SITE = {
  url: "https://fachadas.drd2.com.br",
  name: "DRD2 Fachadas",
  /** WhatsApp comercial, só dígitos com DDI e DDD */
  whatsapp: "5511942232969",
  telefoneExibicao: "(11) 94223-2969",
  email: "comercial@drd2.com.br",
  /** Quem recebe os pedidos do formulário (envio pelo Resend, mesma conta do www.drd2.com.br) */
  leadTo: ["comercial@drd2.com.br", "comercial.drd2@gmail.com"],
  leadFrom: "DRD2 Fachadas <noreply@drd2.com.br>",
  /** FormSubmit: reserva usada só se o envio pelo Resend falhar */
  formEndpoint: "https://formsubmit.co/ajax/26d351966dc6ca222149d3185598d261",
  /** Google Tag Manager (vazio = desligado) */
  gtmId: "",
  /** Google Analytics 4 (mesma propriedade do www.drd2.com.br) */
  ga4Id: "G-1E6SS63B7L",
  /** Microsoft Clarity (mesmo projeto do avcb.drd2.com.br) */
  clarityId: "yt7y99irfw",
  /** Verificação do Google Search Console. Não apague. */
  googleVerification: "hYaQLsIyW6x65LZONbO9Xi-PffEJp-4-d_AfxvyNVmM",
  themeColor: "#1B2733",
  maxFotos: 10,
  maxMb: 10,
} as const;

/**
 * Mensagem pronta do WhatsApp. Sem a cidade, termina em "O prédio fica em: " para o visitante completar.
 * Ex.: "Olá! Vim pelo site e quero uma avaliação de fachada. Serviço: Pintura predial. O prédio fica em: "
 */
export function waMessage(servico?: string, local?: string): string {
  return (
    "Olá! Vim pelo site e quero uma avaliação de fachada." +
    (servico ? ` Serviço: ${servico}.` : "") +
    (local ? ` O prédio fica em ${local}.` : " O prédio fica em: ")
  );
}

export function waUrl(text: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
