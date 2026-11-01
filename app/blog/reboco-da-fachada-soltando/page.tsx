// Página gerada a partir do site estático (blog/reboco-da-fachada-soltando.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Reboco da Fachada Soltando: Sinais, Riscos e Solução",
  "description": "Som oco, estufamento e pedaços no chão indicam reboco solto. Veja por que acontece, qual é o risco e como é feita a recuperação correta da fachada.",
  "path": "/blog/reboco-da-fachada-soltando/",
  "image": "/img/blog/reboco-da-fachada-soltando.webp",
  "type": "article"
});

const SERVICO = "Recuperação de reboco";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Reboco da fachada soltando: sinais, riscos e o que fazer",
    "description": "Som oco, estufamento e pedaços no chão indicam reboco solto. Veja por que acontece, qual é o risco e como é feita a recuperação correta da fachada.",
    "image": "https://fachadas.drd2.com.br/img/blog/reboco-da-fachada-soltando.webp",
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
    "mainEntityOfPage": "https://fachadas.drd2.com.br/blog/reboco-da-fachada-soltando/",
    "keywords": "reboco soltando na fachada"
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
        "name": "Reboco da fachada soltando: sinais, riscos e o que fazer",
        "item": "https://fachadas.drd2.com.br/blog/reboco-da-fachada-soltando/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Dá para recuperar só onde está caindo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A recuperação é feita onde há perda de aderência, e isso inclui áreas que ainda não caíram. Só o teste de percussão mostra até onde o problema vai."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo a argamassa precisa curar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende do tipo de argamassa, da espessura e do clima. A especificação da obra define esse tempo, que deve ser respeitado antes da pintura."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso de um engenheiro para isso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É recomendável. O mapeamento das áreas soltas, a identificação da causa e a definição do método são etapas de diagnóstico que evitam retrabalho."
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
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li><Link href="/blog/">Blog</Link></li><li aria-current="page">Riscos e segurança</li></ol></nav>
<span className="eyebrow">Riscos e segurança</span>
<h1>Reboco da fachada soltando: sinais, riscos e o que fazer</h1>
<div className="post-by"><span className="avatar sm"><img className="photo" src="/img/eng-samuel-avatar.webp" alt="" width="44" height="44" /></span><span><b>Eng. Samuel Silva Costa</b><small>Engenheiro civil e engenheiro de segurança do trabalho · CREA-SP 5070163570</small></span><span className="post-date">Atualizado em 7 de outubro de 2026 · 5 min de leitura</span></div>
</div></div></section>
<div className="wrap doc">
<article className="doc-main post">
<div className="post-answer"><span className="k">Resposta curta</span><p>Reboco que soa oco ao toque perdeu aderência com a parede. Com água e variação de temperatura, essa área estufa, trinca e se solta. A solução é remover o que está solto e refazer o reboco com a base preparada, e não pintar por cima.</p></div>
<figure className="post-figure"><img src="/img/blog/reboco-da-fachada-soltando.webp" alt="Ilustração: reboco descolado da base e o som cavo no teste de percussão" width="1200" height="750" fetchPriority="high" /><figcaption>Ilustração: reboco descolado da base e o som cavo no teste de percussão</figcaption></figure>
<section id="s1"><h2>Como reconhecer</h2><ul className="ticks"><li><span>Som oco quando se bate levemente na parede.</span></li><li><span>Barrigas ou ondulações na superfície.</span></li><li><span>Fissuras formando pequenos polígonos, como um mapa.</span></li><li><span>Manchas brancas de eflorescência.</span></li><li><span>Pedaços de reboco ou pó de argamassa no chão.</span></li></ul></section><section id="s2"><h2>Por que o reboco solta</h2><ul className="ticks"><li><span>Umidade constante, vinda de infiltrações antigas ou de falhas na proteção da fachada.</span></li><li><span>Base mal preparada na construção, sem chapisco ou com superfície lisa demais.</span></li><li><span>Argamassa de baixa resistência.</span></li><li><span>Movimentação térmica em faces muito expostas ao sol.</span></li></ul></section><div className="inline-cta"><p>Está vendo isso no seu prédio? Envie fotos da fachada para uma análise inicial.</p><WaLink servico="Recuperação de reboco" className="btn btn-primary btn-sm" data-track="whatsapp_click" data-pos="blog-inline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos</WaLink></div><section id="s3"><h2>Qual é o risco</h2><p>Placas de reboco podem cair de grandes alturas. Além disso, a área solta deixa a água chegar à alvenaria e cresce com o tempo. Quem pinta por cima de reboco solto paga a pintura e, pouco depois, vê a tinta nova descascar junto com a argamassa.</p></section><section id="s4"><h2>Como é a recuperação correta</h2><ol className="proc"><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Teste de percussão e marcação de cada área solta.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Remoção do reboco comprometido até chegar à base firme.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Limpeza da base e aplicação de chapisco para criar aderência.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Recomposição da argamassa em camadas, com tela de reforço quando necessário.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Respeito ao tempo de cura antes de fundo e pintura.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Acabamento nivelado com o restante da fachada.</span></li></ol></section><section id="s5"><h2>Erros que fazem o problema voltar</h2><ul className="ticks"><li><span>Pintar por cima da área solta.</span></li><li><span>Tentar colar o reboco de volta.</span></li><li><span>Remendar sem tratar a umidade que causou o descolamento.</span></li><li><span>Pintar antes da cura completa da argamassa nova.</span></li></ul></section>
<section id="quando"><div className="callout"><b>Quando agir</b><p>Se há pedaços de reboco no chão, isole a área abaixo antes de qualquer outra providência e peça uma vistoria com teste de percussão.</p></div></section>
<section id="faq"><h2>Perguntas frequentes</h2><div className="faq"><details><summary>Dá para recuperar só onde está caindo?</summary><div className="ans"><p>A recuperação é feita onde há perda de aderência, e isso inclui áreas que ainda não caíram. Só o teste de percussão mostra até onde o problema vai.</p></div></details><details><summary>Quanto tempo a argamassa precisa curar?</summary><div className="ans"><p>Depende do tipo de argamassa, da espessura e do clima. A especificação da obra define esse tempo, que deve ser respeitado antes da pintura.</p></div></details><details><summary>Preciso de um engenheiro para isso?</summary><div className="ans"><p>É recomendável. O mapeamento das áreas soltas, a identificação da causa e a definição do método são etapas de diagnóstico que evitam retrabalho.</p></div></details></div></section>
<section id="solucao"><h2>Como resolver no seu prédio</h2>
<Link className="svc-card" href="/servicos/recuperacao-de-fachada/"><span className="sc-media"><img src="/img/blog/reboco-da-fachada-soltando.webp" alt="" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="sc-body"><span className="k">Serviço</span><b>Recuperação e restauração de fachada</b><span>Reboco que soa oco, estufa ou se desprende é um dos problemas mais comuns e mais perigosos em fachadas. A correção exige remover o que perdeu aderência e refazer a camada com técnica.</span><span className="link-arrow">Ver como funciona</span></span></Link>
<div className="related"><Link href="/servicos/recuperacao-de-fachada/"><b>Recuperação e restauração de fachada</b><span>Reboco, trincas, concreto e infiltrações tratados a partir de diagnóstico.</span></Link><Link href="/servicos/teste-de-percussao-e-arrancamento/"><b>Teste de percussão e arrancamento</b><span>Teste em 100% da fachada e ensaio de aderência, com laudo e ART.</span></Link><Link href="/servicos/tratamento-de-trincas-e-fissuras/"><b>Tratamento de trincas e fissuras</b><span>Técnica escolhida pelo tipo, abertura e atividade da trinca.</span></Link><Link href="/#etapas"><b>Pintura de fachada</b><span>Pintura com lavagem, teste de percussão e correção da base antes da tinta.</span></Link></div>
<div className="inline-cta" style={{"marginTop": "8px"}}><p>Agende uma vistoria técnica com o engenheiro responsável.</p><a className="btn btn-primary btn-sm" href="#contato" data-track="cta_orcamento" data-pos="blog-end">Solicitar vistoria</a></div>
</section>
<section id="leia-tambem"><h2>Leia também</h2><div className="post-grid two"><Link className="post-card" href="/blog/pastilhas-caindo-da-fachada-o-que-fazer/"><span className="pc-media"><img src="/img/blog/pastilhas-caindo-da-fachada-o-que-fazer.webp" alt="Ilustração: área de pastilhas sem aderência, peças em queda e área isolada no térreo" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Riscos e segurança</span><b>Pastilhas caindo da fachada: o que o síndico deve fazer agora</b><small>Uma pastilha caiu do prédio? Veja o que fazer nas primeiras horas, por que outras peças podem estar soltas, quem responde por danos e como resolver de vez.</small><span className="pc-meta">6 min de leitura</span></span></Link><Link className="post-card" href="/blog/infiltracao-volta-depois-da-pintura/"><span className="pc-media"><img src="/img/blog/infiltracao-volta-depois-da-pintura.webp" alt="Ilustração: por onde a água da chuva entra na fachada e onde a mancha aparece" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Infiltração</span><b>Infiltração que volta a cada chuva: por que a pintura não resolveu</b><small>A fachada foi pintada e a infiltração voltou? Veja por onde a água realmente entra, por que tinta sozinha não resolve e como tratar a origem do problema.</small><span className="pc-meta">6 min de leitura</span></span></Link></div></section>
</article>
<aside className="aside" aria-label="Navegação do artigo e contato"><div className="aside-inner">
<nav className="toc" aria-label="Neste artigo"><h4>Neste artigo</h4><ol><li><a href="#s1">Como reconhecer</a></li><li><a href="#s2">Por que o reboco solta</a></li><li><a href="#s3">Qual é o risco</a></li><li><a href="#s4">Como é a recuperação correta</a></li><li><a href="#s5">Erros que fazem o problema voltar</a></li><li><a href="#quando">Quando agir</a></li><li><a href="#faq">Perguntas frequentes</a></li><li><a href="#solucao">Como resolver</a></li></ol></nav>
<div className="aside-card"><h4>Fale com um engenheiro</h4><p>Envie fotos da fachada e a localização do prédio. Respondemos com os próximos passos.</p>
<WaLink servico="Recuperação de reboco" className="btn btn-primary" data-track="whatsapp_click" data-pos="blog-aside"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink>{" "}
<Link className="btn btn-outline" href="/servicos/recuperacao-de-fachada/" style={{"color": "var(--band-ink)", "borderColor": "var(--band-line)"}}>Ver o serviço</Link></div>
</div></aside>
</div>
</main>
<LeadSection formId="form-blog-reboco-da-fachada-soltando" checked="Recuperação ou restauração (reboco, trincas, pastilhas)" servico={SERVICO} />
    </>
  );
}
