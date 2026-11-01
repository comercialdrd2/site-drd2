// Página gerada a partir do site estático (blog/infiltracao-volta-depois-da-pintura.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Infiltração Volta Depois da Pintura? Entenda o Porquê",
  "description": "A fachada foi pintada e a infiltração voltou? Veja por onde a água realmente entra, por que tinta sozinha não resolve e como tratar a origem do problema.",
  "path": "/blog/infiltracao-volta-depois-da-pintura/",
  "image": "/img/blog/infiltracao-volta-depois-da-pintura.webp",
  "type": "article"
});

const SERVICO = "Tratamento de infiltrações em fachada";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Infiltração que volta a cada chuva: por que a pintura não resolveu",
    "description": "A fachada foi pintada e a infiltração voltou? Veja por onde a água realmente entra, por que tinta sozinha não resolve e como tratar a origem do problema.",
    "image": "https://fachadas.drd2.com.br/img/blog/infiltracao-volta-depois-da-pintura.webp",
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
    "mainEntityOfPage": "https://fachadas.drd2.com.br/blog/infiltracao-volta-depois-da-pintura/",
    "keywords": "pintura resolve infiltração na fachada"
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
        "name": "Infiltração que volta a cada chuva: por que a pintura não resolveu",
        "item": "https://fachadas.drd2.com.br/blog/infiltracao-volta-depois-da-pintura/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Tinta impermeabilizante resolve infiltração?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ajuda a proteger a superfície, mas não fecha trincas ativas, juntas abertas ou falhas nas janelas. Esses pontos precisam ser tratados antes."
        }
      },
      {
        "@type": "Question",
        "name": "A infiltração pode vir da janela?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. A vedação entre o caixilho e a parede é um dos pontos mais comuns de entrada de água, principalmente em chuva com vento."
        }
      },
      {
        "@type": "Question",
        "name": "Quem paga o reparo, o condomínio ou o morador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende da origem do problema e das regras do condomínio. A investigação técnica ajuda a identificar se a origem está em área comum ou privativa; a responsabilidade deve ser confirmada com a administradora ou a assessoria jurídica."
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
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li><Link href="/blog/">Blog</Link></li><li aria-current="page">Infiltração</li></ol></nav>
<span className="eyebrow">Infiltração</span>
<h1>Infiltração que volta a cada chuva: por que a pintura não resolveu</h1>
<div className="post-by"><span className="avatar sm"><img className="photo" src="/img/eng-samuel-avatar.webp" alt="" width="44" height="44" /></span><span><b>Eng. Samuel Silva Costa</b><small>Engenheiro civil e engenheiro de segurança do trabalho · CREA-SP 5070163570</small></span><span className="post-date">Atualizado em 7 de outubro de 2026 · 6 min de leitura</span></div>
</div></div></section>
<div className="wrap doc">
<article className="doc-main post">
<div className="post-answer"><span className="k">Resposta curta</span><p>Porque a água quase nunca entra pela tinta. Ela entra por trincas, juntas, encontros com as janelas, topos de platibanda e peitoris. Se esses pontos não forem tratados antes, a pintura nova esconde a mancha por um tempo e a infiltração volta na primeira chuva forte com vento.</p></div>
<figure className="post-figure"><img src="/img/blog/infiltracao-volta-depois-da-pintura.webp" alt="Ilustração: por onde a água da chuva entra na fachada e onde a mancha aparece" width="1200" height="750" fetchPriority="high" /><figcaption>Ilustração: por onde a água da chuva entra na fachada e onde a mancha aparece</figcaption></figure>
<section id="s1"><h2>Por onde a água entra</h2><ul className="ticks"><li><span>Trincas e fissuras que atravessam o reboco.</span></li><li><span>Juntas com selante ressecado, rachado ou descolado.</span></li><li><span>Vedação entre a janela e a parede.</span></li><li><span>Peitoris sem caimento ou sem pingadeira, que jogam água na parede.</span></li><li><span>Topo de platibandas e muretas sem proteção.</span></li><li><span>Rejuntes de pastilhas e cerâmicas deteriorados.</span></li><li><span>Reboco poroso, que absorve água como uma esponja.</span></li></ul></section><section id="s2"><h2>Por que a tinta sozinha não basta</h2><p>A tinta comum tem um limite de elasticidade. Quando uma trinca continua se movimentando, ela rompe a película nova em poucos meses. Além disso, a pintura aplicada sobre reboco úmido perde aderência, e a água que já está dentro da parede continua aparecendo do lado de dentro.</p><p>Há ainda um detalhe que engana muita gente: a mancha interna costuma aparecer longe do ponto de entrada. A água corre dentro da alvenaria e surge no rodapé, no canto ou embaixo da janela do andar de baixo.</p></section><div className="inline-cta"><p>Está vendo isso no seu prédio? Envie fotos da fachada para uma análise inicial.</p><WaLink servico="Tratamento de infiltrações em fachada" className="btn btn-primary btn-sm" data-track="whatsapp_click" data-pos="blog-inline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos</WaLink></div><section id="s3"><h2>Sinais de que a origem é a fachada</h2><ul className="ticks"><li><span>A mancha aumenta depois de chuva com vento.</span></li><li><span>Aparece em paredes que dão para fora, perto de janelas ou nos últimos andares.</span></li><li><span>Há trincas ou falhas de selante na mesma região, do lado de fora.</span></li><li><span>O problema se repete em várias unidades da mesma prumada.</span></li></ul><p>Nem toda infiltração vem da fachada. Tubulações, coberturas e áreas molhadas também causam manchas. A investigação existe justamente para separar uma coisa da outra antes de gastar com a obra errada.</p></section><section id="s4"><h2>Como investigamos</h2><ol className="proc"><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Conversa com os moradores: onde a mancha aparece, quando e com que tipo de chuva.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Vistoria interna das unidades afetadas.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Vistoria externa da região correspondente da fachada: trincas, juntas, janelas, peitoris e topos.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Testes localizados com água, quando necessários para confirmar o caminho.</span></li></ol></section><section id="s5"><h2>O que resolve de verdade</h2><p>Primeiro, corrigir a origem: tratar as trincas com selante e tela de reforço, refazer juntas, revisar a vedação das janelas, criar caimentos e pingadeiras. Depois, proteger a superfície com o sistema adequado: hidrorrepelente em tijolo e concreto aparente, ou pintura elastomérica em fachadas pintadas.</p></section>
<section id="quando"><div className="callout"><b>Quando agir</b><p>Repintar sem tratar a origem significa pagar duas vezes pela mesma mancha. Antes de contratar pintura por causa de infiltração, peça uma investigação.</p></div></section>
<section id="faq"><h2>Perguntas frequentes</h2><div className="faq"><details><summary>Tinta impermeabilizante resolve infiltração?</summary><div className="ans"><p>Ajuda a proteger a superfície, mas não fecha trincas ativas, juntas abertas ou falhas nas janelas. Esses pontos precisam ser tratados antes.</p></div></details><details><summary>A infiltração pode vir da janela?</summary><div className="ans"><p>Sim. A vedação entre o caixilho e a parede é um dos pontos mais comuns de entrada de água, principalmente em chuva com vento.</p></div></details><details><summary>Quem paga o reparo, o condomínio ou o morador?</summary><div className="ans"><p>Depende da origem do problema e das regras do condomínio. A investigação técnica ajuda a identificar se a origem está em área comum ou privativa; a responsabilidade deve ser confirmada com a administradora ou a assessoria jurídica.</p></div></details></div></section>
<section id="solucao"><h2>Como resolver no seu prédio</h2>
<Link className="svc-card" href="/servicos/impermeabilizacao-de-fachada/"><span className="sc-media"><img src="/img/blog/infiltracao-volta-depois-da-pintura.webp" alt="" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="sc-body"><span className="k">Serviço</span><b>Impermeabilização de fachada</b><span>A mancha aparece dentro do apartamento, mas a água quase sempre entrou por outro ponto. Tratar infiltração exige encontrar o caminho da água antes de escolher a solução.</span><span className="link-arrow">Ver como funciona</span></span></Link>
<div className="related"><Link href="/servicos/impermeabilizacao-de-fachada/"><b>Impermeabilização de fachada</b><span>Hidrorrepelentes, pinturas elastoméricas e membranas por superfície.</span></Link><Link href="/servicos/tratamento-de-trincas-e-fissuras/"><b>Tratamento de trincas e fissuras</b><span>Técnica escolhida pelo tipo, abertura e atividade da trinca.</span></Link><Link href="/#etapas"><b>Pintura de fachada</b><span>Pintura com lavagem, teste de percussão e correção da base antes da tinta.</span></Link><Link href="/servicos/recuperacao-de-fachada/"><b>Recuperação e restauração de fachada</b><span>Reboco, trincas, concreto e infiltrações tratados a partir de diagnóstico.</span></Link></div>
<div className="inline-cta" style={{"marginTop": "8px"}}><p>Agende uma vistoria técnica com o engenheiro responsável.</p><a className="btn btn-primary btn-sm" href="#contato" data-track="cta_orcamento" data-pos="blog-end">Solicitar vistoria</a></div>
</section>
<section id="leia-tambem"><h2>Leia também</h2><div className="post-grid two"><Link className="post-card" href="/blog/trinca-na-fachada-quando-se-preocupar/"><span className="pc-media"><img src="/img/blog/trinca-na-fachada-quando-se-preocupar.webp" alt="Ilustração: os quatro tipos de trinca mais comuns em fachadas" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Diagnóstico</span><b>Trinca na fachada: quando é só estética e quando chamar um engenheiro</b><small>Fissura na pintura, trinca no canto da janela ou rachadura inclinada? Entenda os tipos, os sinais de alerta e quando a avaliação de um engenheiro é necessária.</small><span className="pc-meta">6 min de leitura</span></span></Link><Link className="post-card" href="/blog/como-comparar-orcamentos-de-fachada/"><span className="pc-media"><img src="/img/blog/como-comparar-orcamentos-de-fachada.webp" alt="Ilustração: duas propostas com escopos diferentes" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Orçamento</span><b>Orçamentos de fachada muito diferentes: como comparar sem cair em armadilhas</b><small>Uma proposta custa o dobro da outra? Veja o que costuma explicar a diferença, os itens que não podem faltar e as perguntas que evitam surpresas na obra.</small><span className="pc-meta">6 min de leitura</span></span></Link></div></section>
</article>
<aside className="aside" aria-label="Navegação do artigo e contato"><div className="aside-inner">
<nav className="toc" aria-label="Neste artigo"><h4>Neste artigo</h4><ol><li><a href="#s1">Por onde a água entra</a></li><li><a href="#s2">Por que a tinta sozinha não basta</a></li><li><a href="#s3">Sinais de que a origem é a fachada</a></li><li><a href="#s4">Como investigamos</a></li><li><a href="#s5">O que resolve de verdade</a></li><li><a href="#quando">Quando agir</a></li><li><a href="#faq">Perguntas frequentes</a></li><li><a href="#solucao">Como resolver</a></li></ol></nav>
<div className="aside-card"><h4>Fale com um engenheiro</h4><p>Envie fotos da fachada e a localização do prédio. Respondemos com os próximos passos.</p>
<WaLink servico="Tratamento de infiltrações em fachada" className="btn btn-primary" data-track="whatsapp_click" data-pos="blog-aside"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink>{" "}
<Link className="btn btn-outline" href="/servicos/impermeabilizacao-de-fachada/" style={{"color": "var(--band-ink)", "borderColor": "var(--band-line)"}}>Ver o serviço</Link></div>
</div></aside>
</div>
</main>
<LeadSection formId="form-blog-infiltracao-volta-depois-da-pintura" checked="Lavagem ou impermeabilização" servico={SERVICO} />
    </>
  );
}
