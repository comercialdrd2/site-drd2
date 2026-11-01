import Link from "next/link";
import WaLink from "./WaLink";

type Props = {
  /** id do formulário, usado também na medição (ex.: "form-servicos-pintura-predial") */
  formId: string;
  /** opção de "O que você precisa?" que já vem marcada */
  checked?: string;
  /** serviço citado na mensagem do WhatsApp */
  servico?: string;
};

/** Seção "Peça uma avaliação da sua fachada", com o formulário curto de orçamento. */
export default function LeadSection({ formId, checked, servico }: Props) {
  return (
<section className="sec band blueprint lead-sec" id="contato" aria-label="Solicitar orçamento">
<div className="wrap form-shell">
<div style={{"display": "grid", "gap": "18px", "alignContent": "start"}}>
<span className="eyebrow">Solicitar vistoria</span>
<h2>Peça uma avaliação da sua fachada</h2>
<p style={{"color": "var(--band-muted)"}}>Deixe seu contato e retornamos no mesmo dia útil para combinar a vistoria técnica no imóvel. Se quiser, mande fotos pelo WhatsApp.</p>
<p style={{"color": "var(--band-muted)", "fontSize": "var(--t-sm)"}}>WhatsApp e telefone (11) 94223-2969 · comercial@drd2.com.br</p>
<WaLink servico={servico} className="btn btn-outline" data-track="whatsapp_click" data-pos={formId} style={{"justifySelf": "start"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Falar pelo WhatsApp</WaLink>
</div>
<div className="form-card">
<form id={formId} data-lead-form="" data-thanks="/obrigado/" noValidate>
<div className="hp" aria-hidden="true"><label>Não preencha este campo<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
<div className="fgrid">
<fieldset className="field full opt-q"><legend>O que você precisa?</legend><div className="opts"><label className="opt"><input type="radio" name="servico" value="Pintura da fachada" defaultChecked={checked === "Pintura da fachada"} /><span>Pintura da fachada</span></label><label className="opt"><input type="radio" name="servico" value="Recuperação ou restauração (reboco, trincas, pastilhas)" defaultChecked={checked === "Recuperação ou restauração (reboco, trincas, pastilhas)"} /><span>Recuperar ou restaurar{" "}<small>reboco, trincas, pastilhas</small></span></label><label className="opt"><input type="radio" name="servico" value="Lavagem ou impermeabilização" defaultChecked={checked === "Lavagem ou impermeabilização"} /><span>Lavagem ou impermeabilização</span></label><label className="opt"><input type="radio" name="servico" value="Teste de percussão com laudo" defaultChecked={checked === "Teste de percussão com laudo"} /><span>Teste de percussão com laudo</span></label><label className="opt"><input type="radio" name="servico" value="Não sei, quero uma avaliação" defaultChecked={checked === "Não sei, quero uma avaliação"} /><span>Não sei, quero uma avaliação</span></label></div></fieldset>
<div className="field"><label htmlFor="f-nome">Nome</label><input id="f-nome" name="nome" autoComplete="name" required data-msg="Informe seu nome." /><span className="err" data-err-for="f-nome" /></div><div className="field"><label htmlFor="f-tel">WhatsApp</label><input id="f-tel" name="telefone" type="tel" autoComplete="tel" inputMode="tel" placeholder="(11) 90000-0000" required data-msg="Informe um WhatsApp com DDD." /><span className="err" data-err-for="f-tel" /></div><div className="field full"><label htmlFor="f-cidade">Cidade e bairro do imóvel</label><input id="f-cidade" name="cidade" placeholder="Ex.: São Paulo, Moema" required data-msg="Informe a cidade e o bairro." /><span className="err" data-err-for="f-cidade" /></div>
<div className="field full"><label htmlFor="f-msg">Mensagem{" "}<span className="hint">opcional</span></label><textarea id="f-msg" name="mensagem" rows={3} placeholder="Conte o que está acontecendo na fachada, quantos andares tem o prédio ou qualquer outra informação." /></div>
<p className="form-legal full">Ao enviar, você concorda com o uso destes dados para o retorno sobre o orçamento, conforme a{" "}<Link href="/politica-de-privacidade/">Política de privacidade</Link>.</p>
</div>
<div className="form-foot"><button className="btn btn-primary" type="submit">Solicitar avaliação</button><small>Retornamos no mesmo dia útil. Depois de enviar, você pode mandar fotos pelo WhatsApp.</small></div>
</form>
</div>
</div>
</section>
  );
}
