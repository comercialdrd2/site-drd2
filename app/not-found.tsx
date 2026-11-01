// Página gerada a partir do site estático (404.html). Pode editar à vontade.
import Link from "next/link";

export default function NotFound() {
  return (
    <>
<title>Página não encontrada | DRD2 Fachadas</title>
<meta name="description" content="A página procurada não existe ou mudou de endereço." />
<main id="conteudo" className="center-page"><div className="wrap">
<span className="eyebrow">Erro 404</span>
<h1>Esta página não foi encontrada</h1>
<p style={{"color": "var(--ink-2)"}}>O endereço pode ter mudado. Estes caminhos levam ao que a maioria das pessoas procura:</p>
<div className="related"><Link href="/servicos/"><b>Serviços de fachada</b><span>Pintura, recuperação, impermeabilização e mais.</span></Link><Link href="/#problemas"><b>Problemas de fachada</b><span>Comece pelo sintoma que você está vendo.</span></Link><Link href="/orcamento/"><b>Solicitar orçamento</b><span>Envie fotos e agende uma vistoria.</span></Link></div>
</div></main>
    </>
  );
}
