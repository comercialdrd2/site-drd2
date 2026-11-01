// Página gerada a partir do site estático (obrigado.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Solicitação recebida | DRD2 Fachadas",
  "description": "Recebemos sua solicitação de orçamento de fachada.",
  "path": "/obrigado/",
  "image": "/img/obras/the-fields-1-depois.webp",
  "robots": "noindex,follow"
});

export default function Page() {
  return (
    <>
<main id="conteudo" className="center-page"><div className="wrap">
<span className="eyebrow">Solicitação recebida</span>
<h1>Obrigado. Recebemos seus dados.</h1>
<p className="lead" style={{"fontSize": "var(--t-md)", "color": "var(--ink-2)"}}>Vamos analisar as informações e retornar para combinar a vistoria técnica.</p>
<div className="summary" id="lead-summary" hidden><h3 style={{"fontSize": "var(--t-base)", "marginBottom": "10px"}}>Resumo do que você enviou</h3></div>
<ol className="next-steps"><li><span>Para agilizar, envie agora as fotos da fachada pelo WhatsApp com a mensagem já preenchida.</span></li><li><span>Um especialista confirma o escopo e agenda a vistoria.</span></li><li><span>Depois da vistoria, você recebe a proposta detalhada.</span></li></ol>
<div className="btn-row"><WaLink className="btn btn-primary" id="wa-thanks" data-track="whatsapp_click" data-pos="obrigado"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink><Link className="btn btn-outline" href="/projetos/">Ver projetos realizados</Link></div>
</div></main>
    </>
  );
}
