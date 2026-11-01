// Página gerada a partir do site estático (orcamento.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Orçamento de Pintura e Recuperação de Fachada | DRD2 Fachadas",
  "description": "Solicite orçamento de pintura predial, recuperação ou impermeabilização de fachada. Conte o que precisa em 1 minuto, envie fotos pelo WhatsApp e agende a vistoria.",
  "path": "/orcamento/",
  "image": "/img/obras/the-fields-1-depois.webp"
});

const schema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "https://fachadas.drd2.com.br/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Orçamento",
      "item": "https://fachadas.drd2.com.br/orcamento/"
    }
  ]
};

export default function Page() {
  return (
    <>
<JsonLd data={schema} />
<main id="conteudo">
<section className="page-hero"><div className="wrap" style={{"gridTemplateColumns": "1fr"}}>
<div className="page-hero-copy">
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li aria-current="page">Orçamento</li></ol></nav>
<span className="eyebrow">Solicitar vistoria e orçamento</span>
<h1>Orçamento para a fachada do seu imóvel</h1>
<p className="lead">Toque nas opções, deixe seu contato e, na tela seguinte, mande fotos pelo WhatsApp. A análise inicial não tem custo.</p>
</div></div></section>
<section className="sec-tight"><div className="wrap form-shell form-wide">
<div className="form-card">
<form id="form-orcamento" data-lead-form="" data-thanks="/obrigado/" noValidate>
<div className="hp" aria-hidden="true"><label>Não preencha este campo<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
<div className="fgrid">
<fieldset className="field full opt-q"><legend>O que você precisa?</legend><div className="opts"><label className="opt"><input type="radio" name="servico" value="Pintura da fachada" /><span>Pintura da fachada</span></label><label className="opt"><input type="radio" name="servico" value="Recuperação ou restauração (reboco, trincas, pastilhas)" /><span>Recuperar ou restaurar{" "}<small>reboco, trincas, pastilhas</small></span></label><label className="opt"><input type="radio" name="servico" value="Lavagem ou impermeabilização" /><span>Lavagem ou impermeabilização</span></label><label className="opt"><input type="radio" name="servico" value="Teste de percussão com laudo" /><span>Teste de percussão com laudo</span></label><label className="opt"><input type="radio" name="servico" value="Não sei, quero uma avaliação" /><span>Não sei, quero uma avaliação</span></label></div></fieldset>
<div className="field"><label htmlFor="o-nome">Nome</label><input id="o-nome" name="nome" autoComplete="name" required data-msg="Informe seu nome." /><span className="err" data-err-for="o-nome" /></div><div className="field"><label htmlFor="o-tel">WhatsApp</label><input id="o-tel" name="telefone" type="tel" autoComplete="tel" inputMode="tel" placeholder="(11) 90000-0000" required data-msg="Informe um WhatsApp com DDD." /><span className="err" data-err-for="o-tel" /></div><div className="field full"><label htmlFor="o-cidade">Cidade e bairro do imóvel</label><input id="o-cidade" name="cidade" placeholder="Ex.: São Paulo, Moema" required data-msg="Informe a cidade e o bairro." /><span className="err" data-err-for="o-cidade" /></div>
<div className="field full"><label htmlFor="o-msg">Mensagem{" "}<span className="hint">opcional</span></label><textarea id="o-msg" name="mensagem" rows={3} placeholder="Conte o que está acontecendo na fachada, quantos andares tem o prédio ou qualquer outra informação." /></div>
<p className="form-legal full">Ao enviar, você concorda com o uso destes dados para o retorno sobre o orçamento, conforme a{" "}<Link href="/politica-de-privacidade/">Política de privacidade</Link>.</p>
</div>
<div className="form-foot"><button className="btn btn-primary" type="submit">Enviar pedido de orçamento</button><small>Retornamos no mesmo dia útil. Depois de enviar, você pode mandar fotos pelo WhatsApp.</small></div>
</form>
</div>
<aside style={{"display": "grid", "gap": "24px", "alignContent": "start"}}>
<div><h2 style={{"fontSize": "var(--t-xl)", "marginBottom": "14px"}}>O que acontece depois</h2>
<ol className="next-steps"><li><span>Analisamos o pedido e as fotos que você mandar pelo WhatsApp.</span></li><li><span>Retornamos para tirar dúvidas e agendar a vistoria técnica.</span></li><li><span>O responsável técnico visita o imóvel e faz o diagnóstico.</span></li><li><span>Você recebe a proposta com escopo por item, cronograma e condições.</span></li></ol></div>
<div className="aside-card"><h4>Prefere conversar agora?</h4><p>Envie fotos e a localização do imóvel pelo WhatsApp.</p><WaLink className="btn btn-primary" data-track="whatsapp_click" data-pos="orcamento-aside"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Falar no WhatsApp</WaLink><p>WhatsApp e telefone: (11) 94223-2969<br />E-mail: comercial@drd2.com.br</p></div>
<div className="note">Fotos úteis: uma vista geral de cada face, detalhes de trincas, manchas e peças soltas, e a área do térreo onde ficaria o isolamento da obra.</div>
</aside>
</div></section>
</main>
    </>
  );
}
