import Link from "next/link";
import WaLinkAuto from "./WaLinkAuto";

// Partes fixas do site: faixa do topo, rodapé, botão flutuante e barra de ações do celular.

export function Topbar() {
  return (
<div className="topbar"><div className="wrap"><span>Pintura e restauração de fachadas · São Paulo e Grande SP</span><span>WhatsApp e telefone{" "}<WaLinkAuto data-track="whatsapp_click" data-pos="topbar">(11) 94223-2969</WaLinkAuto></span></div></div>
  );
}

export function Footer() {
  return (
<footer className="site-footer">
<div className="wrap">
<ul className="foot-trust" aria-label="Garantias de processo">
<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5" /></svg>São Paulo e Grande SP</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5" /></svg>ART em todas as obras</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5" /></svg>Engenharia própria</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5" /></svg>Equipe NR-35 e acesso por cordas</li>
</ul>
<div className="foot-grid">
<div style={{"display": "grid", "gap": "16px", "alignContent": "start"}}>
<Link className="brand" href="/"><img className="b-mono" src="/assets/drd2-monograma.webp" alt="" width="245" height="176" /><span className="b-div" aria-hidden="true" /><span className="brand-name"><img className="b-word" src="/assets/drd2-wordmark.webp" alt="DRD2" width="337" height="96" /><span className="b-desc">Fachadas</span></span></Link>
<p>Fachadas tratadas com engenharia. Recuperação, impermeabilização e pintura de fachadas para condomínios, empresas e gestores prediais em São Paulo e na Grande SP.</p>
<span className="seal"><span>Engenharia{" "}<b>DRD2</b></span><span>Execução{" "}<b>Grupo AWN</b></span></span>
<p className="foot-sister">Também da DRD2 Engenharia:{" "}<a href="https://www.drd2.com.br/" rel="noopener">AVCB, CLCB e laudos ↗</a></p>
<ul>
<li>WhatsApp e telefone:{" "}<WaLinkAuto data-track="whatsapp_click" data-pos="footer">(11) 94223-2969</WaLinkAuto></li>
<li>E-mail:{" "}<a href="mailto:comercial@drd2.com.br" data-track="email_click" data-pos="footer">comercial@drd2.com.br</a></li>
<li>Endereço: Rua Cel. José Eusébio, 95 – Higienópolis, São Paulo/SP, CEP 01239-030</li>
</ul>
</div>
<div><h4>Pintura e acabamento</h4><ul><li><Link href="/#etapas">Pintura de fachada</Link></li><li><Link href="/servicos/pintura-predial/">Pintura predial</Link></li><li><Link href="/servicos/pintura-de-fachada-de-condominio/">Pintura de fachada de condomínio</Link></li><li><Link href="/servicos/pintura-de-fachada-comercial/">Pintura de fachada comercial</Link></li><li><Link href="/servicos/aplicacao-de-textura-em-fachada/">Aplicação de textura em fachada</Link></li></ul><div style={{"height": "20px"}} /><h4>Proteção e estanqueidade</h4><ul><li><Link href="/servicos/lavagem-de-fachada/">Lavagem e limpeza de fachada</Link></li><li><Link href="/servicos/impermeabilizacao-de-fachada/">Impermeabilização de fachada</Link></li><li><Link href="/servicos/tratamento-de-trincas-e-fissuras/">Tratamento de trincas e fissuras</Link></li></ul></div>
<div><h4>Recuperação e restauração</h4><ul><li><Link href="/servicos/recuperacao-de-fachada/">Recuperação e restauração de fachada</Link></li><li><Link href="/servicos/recuperacao-de-fachada-com-pastilhas/">Recuperação de fachada com pastilhas</Link></li></ul><div style={{"height": "20px"}} /><h4>Diagnóstico antes da obra</h4><ul><li><Link href="/servicos/teste-de-percussao-e-arrancamento/">Teste de percussão e arrancamento</Link></li></ul></div>
<div><h4>Empresa</h4><ul>
<li><Link href="/servicos/">Todos os serviços</Link></li>
<li><Link href="/projetos/">Projetos realizados</Link></li>
<li><Link href="/blog/">Blog</Link></li>
<li><Link href="/#antes-e-depois">Antes e depois</Link></li>
<li><Link href="/#processo">Como trabalhamos</Link></li>
<li><Link href="/#responsavel">Responsabilidade técnica</Link></li>
<li><Link href="/areas-atendidas/">Áreas atendidas</Link></li>
<li><Link href="/#faq">Perguntas frequentes</Link></li>
<li><Link href="/orcamento/">Solicitar orçamento</Link></li>
<li><Link href="/politica-de-privacidade/">Política de privacidade</Link></li>
<li><Link href="/marca/">Manual da marca</Link></li>
</ul></div>
</div>
<div className="foot-legal"><span>©{" "}<span data-year="">{new Date().getFullYear()}</span>{" "}DRD2 Engenharia Ltda. · CREA-SP 2775460 · CNPJ 51.774.619/0001-94 · Responsável técnico: Eng. Samuel Silva Costa, CREA-SP 5070163570</span><span>Execução em parceria com o Grupo AWN (AWN Comércio e Serviços Ltda.)</span></div>
</div>
</footer>
  );
}

export function FloatingActions() {
  return (
    <>
<WaLinkAuto className="wa-float" data-track="whatsapp_click" data-pos="float"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Falar com o engenheiro</WaLinkAuto><nav className="mobile-bar" aria-label="Ações rápidas">
<a href="tel:+5511942232969" data-track="phone_click" data-pos="mobile-bar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>Ligar</a>{" "}
<WaLinkAuto data-track="whatsapp_click" data-pos="mobile-bar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>WhatsApp</WaLinkAuto>{" "}
<Link className="primary" href="/orcamento/" data-track="cta_orcamento" data-pos="mobile-bar">Orçamento</Link>
</nav>
    </>
  );
}
