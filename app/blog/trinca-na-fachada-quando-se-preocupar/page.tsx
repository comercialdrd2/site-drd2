// Página gerada a partir do site estático (blog/trinca-na-fachada-quando-se-preocupar.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Trinca na Fachada: Quando É Grave e Quando Chamar Engenheiro",
  "description": "Fissura na pintura, trinca no canto da janela ou rachadura inclinada? Entenda os tipos, os sinais de alerta e quando a avaliação de um engenheiro é necessária.",
  "path": "/blog/trinca-na-fachada-quando-se-preocupar/",
  "image": "/img/blog/trinca-na-fachada-quando-se-preocupar.webp",
  "type": "article"
});

const SERVICO = "Tratamento de trincas e fissuras";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Trinca na fachada: quando é só estética e quando chamar um engenheiro",
    "description": "Fissura na pintura, trinca no canto da janela ou rachadura inclinada? Entenda os tipos, os sinais de alerta e quando a avaliação de um engenheiro é necessária.",
    "image": "https://fachadas.drd2.com.br/img/blog/trinca-na-fachada-quando-se-preocupar.webp",
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
    "mainEntityOfPage": "https://fachadas.drd2.com.br/blog/trinca-na-fachada-quando-se-preocupar/",
    "keywords": "trinca na fachada"
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
        "name": "Trinca na fachada: quando é só estética e quando chamar um engenheiro",
        "item": "https://fachadas.drd2.com.br/blog/trinca-na-fachada-quando-se-preocupar/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Pintar resolve trinca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pintura comum só esconde a trinca por um tempo. O tratamento adequado depende do tipo e da atividade da trinca e vem antes da pintura."
        }
      },
      {
        "@type": "Question",
        "name": "Selante resolve qualquer trinca?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. O selante é indicado para trincas que se movimentam pouco e estão bem diagnosticadas. Trincas com possível origem estrutural precisam de avaliação antes."
        }
      },
      {
        "@type": "Question",
        "name": "Toda rachadura é estrutural?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. Muitas são do revestimento. Mas só a avaliação no local separa uma coisa da outra com segurança."
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
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li><Link href="/blog/">Blog</Link></li><li aria-current="page">Diagnóstico</li></ol></nav>
<span className="eyebrow">Diagnóstico</span>
<h1>Trinca na fachada: quando é só estética e quando chamar um engenheiro</h1>
<div className="post-by"><span className="avatar sm"><img className="photo" src="/img/eng-samuel-avatar.webp" alt="" width="44" height="44" /></span><span><b>Eng. Samuel Silva Costa</b><small>Engenheiro civil e engenheiro de segurança do trabalho · CREA-SP 5070163570</small></span><span className="post-date">Atualizado em 7 de outubro de 2026 · 6 min de leitura</span></div>
</div></div></section>
<div className="wrap doc">
<article className="doc-main post">
<div className="post-answer"><span className="k">Resposta curta</span><p>Fissuras finas na pintura costumam ser superficiais. Trincas inclinadas, horizontais na altura das lajes, que aumentam com o tempo ou vêm acompanhadas de portas e janelas emperrando pedem a avaliação de um engenheiro antes de qualquer pintura.</p></div>
<figure className="post-figure"><img src="/img/blog/trinca-na-fachada-quando-se-preocupar.webp" alt="Ilustração: os quatro tipos de trinca mais comuns em fachadas" width="1200" height="750" fetchPriority="high" /><figcaption>Ilustração: os quatro tipos de trinca mais comuns em fachadas</figcaption></figure>
<section id="s1"><h2>Fissura, trinca e rachadura</h2><p>No dia a dia, fissura é a abertura mais fina, trinca é a intermediária e rachadura é a mais larga. Para decidir o que fazer, porém, o tamanho importa menos do que duas perguntas: o que causou a abertura e se ela continua se movimentando.</p></section><section id="s2"><h2>Sinais de alerta</h2><ul className="ticks"><li><span>Trincas inclinadas em paredes.</span></li><li><span>Trincas horizontais na altura das lajes ou das vigas.</span></li><li><span>Aberturas que atravessam a parede e aparecem dos dois lados.</span></li><li><span>Trincas que aumentam de comprimento ou de abertura.</span></li><li><span>Bordas desniveladas, uma mais alta que a outra.</span></li><li><span>Portas e janelas que passam a emperrar.</span></li></ul><p>Qualquer um desses sinais é motivo para uma avaliação técnica no local antes de tratar ou pintar.</p></section><div className="inline-cta"><p>Está vendo isso no seu prédio? Envie fotos da fachada para uma análise inicial.</p><WaLink servico="Tratamento de trincas e fissuras" className="btn btn-primary btn-sm" data-track="whatsapp_click" data-pos="blog-inline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos</WaLink></div><section id="s3"><h2>As trincas mais comuns em fachadas</h2><ul className="ticks"><li><span>Em mapa, formando uma rede fina: costumam estar ligadas à retração ou ao envelhecimento do revestimento.</span></li><li><span>Nos cantos de janelas e portas: costumam indicar concentração de tensões nesses pontos.</span></li><li><span>Horizontais junto à estrutura: costumam indicar movimentação entre a estrutura e a alvenaria.</span></li><li><span>Verticais em encontros de paredes: podem indicar falta de amarração ou de junta.</span></li></ul><p>"Costumam" é a palavra certa aqui: a causa de cada trinca só é confirmada na vistoria.</p></section><section id="s4"><h2>Como acompanhar uma trinca até a vistoria</h2><ol className="proc"><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Fotografe a trinca com uma régua ou trena ao lado e anote a data.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Marque a lápis as duas pontas da trinca, com a data.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Repita as fotos depois de algumas semanas e compare.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Se a trinca cresceu, informe isso na hora de pedir a vistoria.</span></li></ol></section><section id="s5"><h2>Como é o tratamento</h2><p>Fissuras finas podem ser tratadas com sistemas de pintura elastoméricos. Trincas maiores recebem abertura, limpeza, preenchimento com selante elástico e, quando necessário, tela de reforço antes do acabamento. Trincas com indícios de origem estrutural são encaminhadas para avaliação estrutural antes de qualquer tratamento estético.</p></section>
<section id="quando"><div className="callout"><b>Quando agir</b><p>Trinca que aumenta é sinal para chamar um engenheiro antes de pintar. Pintar por cima só esconde a evolução do problema.</p></div></section>
<section id="faq"><h2>Perguntas frequentes</h2><div className="faq"><details><summary>Pintar resolve trinca?</summary><div className="ans"><p>Pintura comum só esconde a trinca por um tempo. O tratamento adequado depende do tipo e da atividade da trinca e vem antes da pintura.</p></div></details><details><summary>Selante resolve qualquer trinca?</summary><div className="ans"><p>Não. O selante é indicado para trincas que se movimentam pouco e estão bem diagnosticadas. Trincas com possível origem estrutural precisam de avaliação antes.</p></div></details><details><summary>Toda rachadura é estrutural?</summary><div className="ans"><p>Não. Muitas são do revestimento. Mas só a avaliação no local separa uma coisa da outra com segurança.</p></div></details></div></section>
<section id="solucao"><h2>Como resolver no seu prédio</h2>
<Link className="svc-card" href="/servicos/tratamento-de-trincas-e-fissuras/"><span className="sc-media"><img src="/img/blog/trinca-na-fachada-quando-se-preocupar.webp" alt="" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="sc-body"><span className="k">Serviço</span><b>Tratamento de trincas e fissuras</b><span>Fissuras e trincas são portas de entrada para a água e sinais de movimentação da fachada. O tratamento correto depende do tipo, da abertura e da causa de cada uma.</span><span className="link-arrow">Ver como funciona</span></span></Link>
<div className="related"><Link href="/servicos/recuperacao-de-fachada/"><b>Recuperação e restauração de fachada</b><span>Reboco, trincas, concreto e infiltrações tratados a partir de diagnóstico.</span></Link><Link href="/servicos/tratamento-de-trincas-e-fissuras/"><b>Tratamento de trincas e fissuras</b><span>Técnica escolhida pelo tipo, abertura e atividade da trinca.</span></Link><Link href="/servicos/teste-de-percussao-e-arrancamento/"><b>Teste de percussão e arrancamento</b><span>Teste em 100% da fachada e ensaio de aderência, com laudo e ART.</span></Link><Link href="/#etapas"><b>Pintura de fachada</b><span>Pintura com lavagem, teste de percussão e correção da base antes da tinta.</span></Link></div>
<div className="inline-cta" style={{"marginTop": "8px"}}><p>Agende uma vistoria técnica com o engenheiro responsável.</p><a className="btn btn-primary btn-sm" href="#contato" data-track="cta_orcamento" data-pos="blog-end">Solicitar vistoria</a></div>
</section>
<section id="leia-tambem"><h2>Leia também</h2><div className="post-grid two"><Link className="post-card" href="/blog/infiltracao-volta-depois-da-pintura/"><span className="pc-media"><img src="/img/blog/infiltracao-volta-depois-da-pintura.webp" alt="Ilustração: por onde a água da chuva entra na fachada e onde a mancha aparece" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Infiltração</span><b>Infiltração que volta a cada chuva: por que a pintura não resolveu</b><small>A fachada foi pintada e a infiltração voltou? Veja por onde a água realmente entra, por que tinta sozinha não resolve e como tratar a origem do problema.</small><span className="pc-meta">6 min de leitura</span></span></Link><Link className="post-card" href="/blog/reboco-da-fachada-soltando/"><span className="pc-media"><img src="/img/blog/reboco-da-fachada-soltando.webp" alt="Ilustração: reboco descolado da base e o som cavo no teste de percussão" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Riscos e segurança</span><b>Reboco da fachada soltando: sinais, riscos e o que fazer</b><small>Som oco, estufamento e pedaços no chão indicam reboco solto. Veja por que acontece, qual é o risco e como é feita a recuperação correta da fachada.</small><span className="pc-meta">5 min de leitura</span></span></Link></div></section>
</article>
<aside className="aside" aria-label="Navegação do artigo e contato"><div className="aside-inner">
<nav className="toc" aria-label="Neste artigo"><h4>Neste artigo</h4><ol><li><a href="#s1">Fissura, trinca e rachadura</a></li><li><a href="#s2">Sinais de alerta</a></li><li><a href="#s3">As trincas mais comuns em fachadas</a></li><li><a href="#s4">Como acompanhar uma trinca até a vistoria</a></li><li><a href="#s5">Como é o tratamento</a></li><li><a href="#quando">Quando agir</a></li><li><a href="#faq">Perguntas frequentes</a></li><li><a href="#solucao">Como resolver</a></li></ol></nav>
<div className="aside-card"><h4>Fale com um engenheiro</h4><p>Envie fotos da fachada e a localização do prédio. Respondemos com os próximos passos.</p>
<WaLink servico="Tratamento de trincas e fissuras" className="btn btn-primary" data-track="whatsapp_click" data-pos="blog-aside"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink>{" "}
<Link className="btn btn-outline" href="/servicos/tratamento-de-trincas-e-fissuras/" style={{"color": "var(--band-ink)", "borderColor": "var(--band-line)"}}>Ver o serviço</Link></div>
</div></aside>
</div>
</main>
<LeadSection formId="form-blog-trinca-na-fachada-quando-se-preocupar" checked="Recuperação ou restauração (reboco, trincas, pastilhas)" servico={SERVICO} />
    </>
  );
}
