// Página gerada a partir do site estático (blog/como-aprovar-obra-de-fachada-em-assembleia.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Como Aprovar Obra de Fachada na Assembleia do Condomínio",
  "description": "Moradores cobram, o orçamento é alto e a assembleia precisa decidir. Veja como preparar a proposta, o que apresentar e como evitar que a obra trave.",
  "path": "/blog/como-aprovar-obra-de-fachada-em-assembleia/",
  "image": "/img/blog/como-aprovar-obra-de-fachada-em-assembleia.webp",
  "type": "article"
});

const SERVICO = "Pintura de fachada de condomínio";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Moradores reclamando da fachada: como levar a obra para a assembleia",
    "description": "Moradores cobram, o orçamento é alto e a assembleia precisa decidir. Veja como preparar a proposta, o que apresentar e como evitar que a obra trave.",
    "image": "https://fachadas.drd2.com.br/img/blog/como-aprovar-obra-de-fachada-em-assembleia.webp",
    "datePublished": "2026-10-07",
    "dateModified": "2026-10-07",
    "inLanguage": "pt-BR",
    "author": {
      "@type": "Person",
      "name": "Samuel Silva Costa",
      "jobTitle": "Engenheiro civil e engenheiro de segurança do trabalho",
      "image": "https://fachadas.drd2.com.br/img/eng-samuel.webp",
      "url": "https://fachadas.drd2.com.br/#responsavel"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DRD2 Fachadas",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fachadas.drd2.com.br/assets/drd2-monograma-g.webp"
      }
    },
    "mainEntityOfPage": "https://fachadas.drd2.com.br/blog/como-aprovar-obra-de-fachada-em-assembleia/",
    "keywords": "aprovar obra de fachada em assembleia"
  },
  {
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
        "name": "Blog",
        "item": "https://fachadas.drd2.com.br/blog/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Moradores reclamando da fachada: como levar a obra para a assembleia",
        "item": "https://fachadas.drd2.com.br/blog/como-aprovar-obra-de-fachada-em-assembleia/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "É obrigatório ter três orçamentos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não existe uma regra única. Muitos condomínios exigem um número mínimo de propostas por política interna ou pela convenção. O mais importante é que elas sejam comparáveis."
        }
      },
      {
        "@type": "Question",
        "name": "Dá para começar pelas torres em pior estado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. A proposta pode ser dividida em fases, com prioridade para as torres ou faces que oferecem mais risco."
        }
      },
      {
        "@type": "Question",
        "name": "O engenheiro pode explicar a obra aos moradores?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Uma explicação técnica feita por quem fez a vistoria costuma responder às dúvidas mais comuns e acelerar a decisão."
        }
      }
    ]
  }
];

export default function Page() {
  return (
    <>
<JsonLd data={schema} />
<main id="conteudo">
<section className="page-hero"><div className="wrap" style={{"gridTemplateColumns": "1fr"}}>
<div className="page-hero-copy" style={{"maxWidth": "860px"}}>
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li><Link href="/blog/">Blog</Link></li><li aria-current="page">Gestão do condomínio</li></ol></nav>
<span className="eyebrow">Gestão do condomínio</span>
<h1>Moradores reclamando da fachada: como levar a obra para a assembleia</h1>
<div className="post-by"><span className="avatar sm"><img className="photo" src="/img/eng-samuel-avatar.webp" alt="" width="44" height="44" /></span><span><b>Eng. Samuel Silva Costa</b><small>Engenheiro civil e engenheiro de segurança do trabalho · CREA-SP 5070163570</small></span><span className="post-date">Atualizado em 7 de outubro de 2026 · 6 min de leitura</span></div>
</div></div></section>
<div className="wrap doc">
<article className="doc-main post">
<div className="post-answer"><span className="k">Resposta curta</span><p>Leve um diagnóstico, e não só um preço. A obra trava quando os condôminos não entendem por que ela é necessária, o que está incluído e como comparar as propostas. Um relatório com fotos e prioridades muda a conversa na assembleia.</p></div>
<figure className="post-figure"><img src="/img/blog/como-aprovar-obra-de-fachada-em-assembleia.webp" alt="Ilustração: obra dividida em fases e a pauta da assembleia" width="1200" height="750" fetchPriority="high" /><figcaption>Ilustração: obra dividida em fases e a pauta da assembleia</figcaption></figure>
<section id="s1"><h2>Por que a obra de fachada trava</h2><ul className="ticks"><li><span>As propostas descrevem serviços diferentes e ninguém consegue compará-las.</span></li><li><span>Ninguém sabe o estado real da fachada, só o que se vê da rua.</span></li><li><span>Há medo de custos extras aparecerem no meio da obra.</span></li><li><span>Faltam informações sobre prazo, segurança e incômodo para os moradores.</span></li></ul></section><section id="s2"><h2>O que levar para a assembleia</h2><ol className="proc"><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Relatório de vistoria com fotos e mapeamento das áreas a tratar.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Escopo dividido entre urgente (risco de queda), necessário (infiltração, trincas) e opcional (mudança de cor, por exemplo).</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Propostas comparáveis, com os mesmos itens descritos.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Cronograma por torre ou por face.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Plano de segurança e de comunicação com os moradores.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Identificação do responsável técnico pela obra.</span></li></ol></section><div className="inline-cta"><p>Está vendo isso no seu prédio? Envie fotos da fachada para uma análise inicial.</p><WaLink servico="Pintura de fachada de condomínio" className="btn btn-primary btn-sm" data-track="whatsapp_click" data-pos="blog-inline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos</WaLink></div><section id="s3"><h2>Como deixar as propostas comparáveis</h2><p>Peça a todas as empresas os mesmos itens: lavagem, teste de percussão, tratamento de trincas, recomposição de reboco e revestimentos, sistema de pintura e número de demãos, método de acesso, responsável técnico, garantia e a forma como as quantidades de reparo serão medidas e aprovadas durante a obra.</p><p>O jeito mais simples de conseguir isso é ter um diagnóstico independente antes da cotação, para que todas as empresas orcem sobre a mesma base.</p></section><section id="s4"><h2>Quórum e forma de aprovação</h2><p>O quórum e a forma de aprovação dependem do tipo de obra e da convenção do condomínio. Confirme com a administradora ou com a assessoria jurídica antes de convocar a assembleia, para que a decisão não seja questionada depois.</p></section><section id="s5"><h2>Quando o caixa não comporta tudo</h2><p>Divida em fases. A primeira trata o que oferece risco, como reboco e pastilhas soltas, e as infiltrações que geram reclamações. As etapas seguintes podem ser programadas para o próximo orçamento anual, já com o cronograma aprovado.</p></section>
<section id="quando"><div className="callout"><b>Quando agir</b><p>Preparamos um resumo técnico da obra para apresentação em assembleia, com escopo, cronograma e cuidados de segurança, e podemos participar da apresentação quando o condomínio solicitar.</p></div></section>
<section id="faq"><h2>Perguntas frequentes</h2><div className="faq"><details><summary>É obrigatório ter três orçamentos?</summary><div className="ans"><p>Não existe uma regra única. Muitos condomínios exigem um número mínimo de propostas por política interna ou pela convenção. O mais importante é que elas sejam comparáveis.</p></div></details><details><summary>Dá para começar pelas torres em pior estado?</summary><div className="ans"><p>Sim. A proposta pode ser dividida em fases, com prioridade para as torres ou faces que oferecem mais risco.</p></div></details><details><summary>O engenheiro pode explicar a obra aos moradores?</summary><div className="ans"><p>Sim. Uma explicação técnica feita por quem fez a vistoria costuma responder às dúvidas mais comuns e acelerar a decisão.</p></div></details></div></section>
<section id="solucao"><h2>Como resolver no seu prédio</h2>
<Link className="svc-card" href="/servicos/pintura-de-fachada-de-condominio/"><span className="sc-media"><img src="/img/blog/como-aprovar-obra-de-fachada-em-assembleia.webp" alt="" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="sc-body"><span className="k">Serviço</span><b>Pintura de fachada de condomínio</b><span>Uma obra de fachada em condomínio envolve aprovação, rateio, comunicação com moradores e segurança em altura. Organizamos tudo isso para que o síndico tenha informação clara em cada decisão.</span><span className="link-arrow">Ver como funciona</span></span></Link>
<div className="related"><Link href="/servicos/pintura-predial/"><b>Pintura predial</b><span>Fachadas, muros, guaritas e áreas comuns externas em um único cronograma.</span></Link><Link href="/servicos/pintura-de-fachada-de-condominio/"><b>Pintura de fachada de condomínio</b><span>Proposta para assembleia, cronograma por torre e comunicação com moradores.</span></Link><Link href="/servicos/teste-de-percussao-e-arrancamento/"><b>Teste de percussão e arrancamento</b><span>Teste em 100% da fachada e ensaio de aderência, com laudo e ART.</span></Link><Link href="/#etapas"><b>Pintura de fachada</b><span>Pintura com lavagem, teste de percussão e correção da base antes da tinta.</span></Link></div>
<div className="inline-cta" style={{"marginTop": "8px"}}><p>Agende uma vistoria técnica com o engenheiro responsável.</p><a className="btn btn-primary btn-sm" href="#contato" data-track="cta_orcamento" data-pos="blog-end">Solicitar vistoria</a></div>
</section>
<section id="leia-tambem"><h2>Leia também</h2><div className="post-grid two"><Link className="post-card" href="/blog/como-comparar-orcamentos-de-fachada/"><span className="pc-media"><img src="/img/blog/como-comparar-orcamentos-de-fachada.webp" alt="Ilustração: duas propostas com escopos diferentes" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Orçamento</span><b>Orçamentos de fachada muito diferentes: como comparar sem cair em armadilhas</b><small>Uma proposta custa o dobro da outra? Veja o que costuma explicar a diferença, os itens que não podem faltar e as perguntas que evitam surpresas na obra.</small><span className="pc-meta">6 min de leitura</span></span></Link><Link className="post-card" href="/blog/pastilhas-caindo-da-fachada-o-que-fazer/"><span className="pc-media"><img src="/img/blog/pastilhas-caindo-da-fachada-o-que-fazer.webp" alt="Ilustração: área de pastilhas sem aderência, peças em queda e área isolada no térreo" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Riscos e segurança</span><b>Pastilhas caindo da fachada: o que o síndico deve fazer agora</b><small>Uma pastilha caiu do prédio? Veja o que fazer nas primeiras horas, por que outras peças podem estar soltas, quem responde por danos e como resolver de vez.</small><span className="pc-meta">6 min de leitura</span></span></Link></div></section>
</article>
<aside className="aside" aria-label="Navegação do artigo e contato"><div className="aside-inner">
<nav className="toc" aria-label="Neste artigo"><h4>Neste artigo</h4><ol><li><a href="#s1">Por que a obra de fachada trava</a></li><li><a href="#s2">O que levar para a assembleia</a></li><li><a href="#s3">Como deixar as propostas comparáveis</a></li><li><a href="#s4">Quórum e forma de aprovação</a></li><li><a href="#s5">Quando o caixa não comporta tudo</a></li><li><a href="#quando">Quando agir</a></li><li><a href="#faq">Perguntas frequentes</a></li><li><a href="#solucao">Como resolver</a></li></ol></nav>
<div className="aside-card"><h4>Fale com um engenheiro</h4><p>Envie fotos da fachada e a localização do prédio. Respondemos com os próximos passos.</p>
<WaLink servico="Pintura de fachada de condomínio" className="btn btn-primary" data-track="whatsapp_click" data-pos="blog-aside"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink>{" "}
<Link className="btn btn-outline" href="/servicos/pintura-de-fachada-de-condominio/" style={{"color": "var(--band-ink)", "borderColor": "var(--band-line)"}}>Ver o serviço</Link></div>
</div></aside>
</div>
</main>
<LeadSection formId="form-blog-como-aprovar-obra-de-fachada-em-assembleia" checked="Pintura da fachada" servico={SERVICO} />
    </>
  );
}
