// Página gerada a partir do site estático (areas-atendidas.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Pintura de Fachadas em SP e Grande SP | Áreas Atendidas",
  "description": "A DRD2 Fachadas atende todas as regiões da capital paulista e os municípios da Grande São Paulo. Veja zonas, bairros, cidades e obras realizadas em cada região.",
  "path": "/areas-atendidas/",
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
      "name": "Áreas atendidas",
      "item": "https://fachadas.drd2.com.br/areas-atendidas/"
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
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li aria-current="page">Áreas atendidas</li></ol></nav>
<span className="eyebrow">Áreas atendidas</span>
<h1>Pintura e restauração de fachadas em São Paulo e na Grande SP</h1>
<p className="lead">Atendemos todas as regiões da capital e os municípios da Grande SP, com vistoria técnica no imóvel. Outras localidades, como o litoral, sob consulta.</p>
<div className="btn-row"><a className="btn btn-primary" href="#contato" data-track="cta_orcamento" data-pos="areas-hero">Solicitar vistoria e orçamento</a><WaLink className="btn btn-outline" data-track="whatsapp_click" data-pos="areas-hero"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink></div>
</div></div></section>
<section className="sec"><div className="wrap">
<div className="sec-head"><span className="eyebrow">Capital</span><h2>Zonas e bairros da cidade de São Paulo</h2></div>
<div className="areas"><div className="zones"><div className="zone"><h3>Zona Leste</h3><p>Tatuapé, Mooca, Anália Franco, Vila Prudente, Penha, Itaquera e região.</p></div><div className="zone"><h3>Zona Sul</h3><p>Santo Amaro, Moema, Brooklin, Campo Belo, Vila Mariana, Saúde, Jabaquara e região.</p></div><div className="zone"><h3>Zona Oeste</h3><p>Pinheiros, Perdizes, Lapa, Butantã, Vila Leopoldina e região.</p></div><div className="zone"><h3>Zona Norte</h3><p>Santana, Tucuruvi, Casa Verde, Vila Maria e região.</p></div><div className="zone"><h3>Centro</h3><p>Bela Vista, Consolação, Liberdade e região central.</p></div></div>
<div><h3 style={{"fontSize": "var(--t-md)", "marginBottom": "10px"}}>Grande São Paulo</h3><ul className="cities"><li>Guarulhos</li><li>Osasco</li><li>Barueri</li><li>Alphaville</li><li>Santo André</li><li>São Bernardo do Campo</li><li>São Caetano do Sul</li><li>Diadema</li><li>Taboão da Serra</li><li>Cotia</li><li>Mogi das Cruzes</li><li>Suzano</li><li>Poá</li></ul></div></div>
</div></section>
<section className="sec sec-alt"><div className="wrap">
<div className="sec-head"><span className="eyebrow">Obras por região</span><h2>Onde a equipe já trabalhou</h2><p>Obras executadas pelo Grupo AWN, parceiro de execução da DRD2 Fachadas.</p></div>
<div className="diff-grid">
<div className="diff"><h3>São Paulo capital · 9 obras</h3><ul className="seg-list" style={{"gridTemplateColumns": "1fr"}}><li><b>Edifício The Fields</b><span>Campo Belo, São Paulo/SP · 2024</span></li><li><b>Edifício Chamonix</b><span>Jardim Paulista, São Paulo/SP · 2021</span></li><li><b>Edifício Fine Morumbi</b><span>Vila Andrade, São Paulo/SP · 2023</span></li><li><b>Condomínio Montes Claros</b><span>Vila Sylvia, São Paulo/SP · 2026/2027</span></li><li><b>Edifício Stephanie Residencial</b><span>Indianópolis, São Paulo/SP · 2023</span></li><li><b>Edifício Santorini</b><span>Indianópolis, São Paulo/SP · 2022</span></li><li><b>Edifício Cedro do Líbano</b><span>Jardim São Paulo, São Paulo/SP · 2021</span></li><li><b>Cond. Edifício Solar de Malta</b><span>Vila Nova Conceição, São Paulo/SP · 2021</span></li><li><b>Edifício Paulistania Flat</b><span>Jardim Paulista, São Paulo/SP · 2021</span></li></ul></div>
<div className="diff"><h3>Grande SP · 7 obras</h3><ul className="seg-list" style={{"gridTemplateColumns": "1fr"}}><li><b>Edifício Suzano</b><span>Centro, Suzano/SP · 2025/2026</span></li><li><b>Cond. Residencial Club Gaudí Life</b><span>Cidade Parque Brasília, Guarulhos/SP · 2022</span></li><li><b>Condomínio Spazio Supere</b><span>Guaio, Suzano/SP, 08675-460 · 2026/2027</span></li><li><b>Edifício Portinari</b><span>Suzano/SP · 2025</span></li><li><b>Edifício Mont Blanc</b><span>Centro, Suzano/SP · 2024</span></li><li><b>Edifício Elisa Spaolonzi</b><span>Vila Costa, Suzano/SP · 2024</span></li><li><b>Edifício Essenza</b><span>Centro, Suzano/SP · 2022</span></li></ul></div>
<div className="diff"><h3>Litoral · 2 obras</h3><ul className="seg-list" style={{"gridTemplateColumns": "1fr"}}><li><b>Edifício Helbor Resorts Reserva do Mar</b><span>Vila Clais, Bertioga/SP · 2020 e 2025/2026</span></li><li><b>Edifício Orla da Riviera</b><span>São Lourenço, Bertioga/SP · 2025/2026</span></li></ul></div>
</div>
<div className="btn-row" style={{"marginTop": "28px"}}><Link className="link-arrow" href="/projetos/">Ver fotos e serviços de cada obra</Link></div>
</div></section>
</main>
<LeadSection formId="form-areas-atendidas" />
    </>
  );
}
