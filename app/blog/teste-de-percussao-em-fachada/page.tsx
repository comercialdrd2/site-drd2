// Página gerada a partir do site estático (blog/teste-de-percussao-em-fachada.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Teste de Percussão em Fachada: O Que É e Quando Fazer",
  "description": "Entenda o que é o teste de percussão em fachada, quando o condomínio precisa, por que testar 100% da área e o que vem no laudo para a assembleia.",
  "path": "/blog/teste-de-percussao-em-fachada/",
  "image": "/img/obras/the-fields-4-durante.webp",
  "type": "article"
});

const SERVICO = "Teste de percussão e arrancamento";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Teste de percussão em fachada: o que é e quando o condomínio precisa",
    "description": "Entenda o que é o teste de percussão em fachada, quando o condomínio precisa, por que testar 100% da área e o que vem no laudo para a assembleia.",
    "image": "https://fachadas.drd2.com.br/img/obras/the-fields-4-durante.webp",
    "datePublished": "2026-10-17",
    "dateModified": "2026-10-17",
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
    "mainEntityOfPage": "https://fachadas.drd2.com.br/blog/teste-de-percussao-em-fachada/",
    "keywords": "teste de percussão em fachada"
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
        "name": "Teste de percussão em fachada: o que é e quando o condomínio precisa",
        "item": "https://fachadas.drd2.com.br/blog/teste-de-percussao-em-fachada/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O teste de percussão estraga a fachada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. São batidas leves com um martelo próprio, que não quebram o revestimento. O ensaio de arrancamento, quando é feito, retira pequenos pontos escolhidos, que são recompostos depois."
        }
      },
      {
        "@type": "Question",
        "name": "Os moradores são incomodados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O barulho é baixo e a equipe passa por cada prumada com acesso por cordas ou balancim. Os moradores são avisados antes, para fecharem as janelas quando a equipe estiver na frente do apartamento."
        }
      },
      {
        "@type": "Question",
        "name": "Dá para fazer o teste só com drone ou câmera térmica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. O drone e a termografia ajudam a apontar áreas suspeitas em prédios altos, mas não substituem o teste de percussão, que confirma ponto a ponto onde o revestimento está solto."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto custa o teste de percussão?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende da área de fachada, da altura do prédio e do método de acesso. O valor sai depois da vistoria do engenheiro, junto com o plano de acesso e segurança."
        }
      },
      {
        "@type": "Question",
        "name": "Precisa de engenheiro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. O teste é a base do laudo e da decisão do condomínio. Na DRD2, o laudo é assinado pelo Eng. Samuel Silva Costa, com ART."
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
<h1>Teste de percussão em fachada: o que é e quando o condomínio precisa</h1>
<div className="post-by"><span className="avatar sm"><img className="photo" src="/img/eng-samuel-avatar.webp" alt="" width="44" height="44" /></span><span><b>Eng. Samuel Silva Costa</b><small>Engenheiro civil e engenheiro de segurança do trabalho · CREA-SP 5070163570</small></span><span className="post-date">Publicado em 17 de outubro de 2026 · 6 min de leitura</span></div>
</div></div></section>
<div className="wrap doc">
<article className="doc-main post">
<div className="post-answer"><span className="k">Resposta curta</span><p>O teste de percussão é feito com batidas leves em toda a fachada para achar onde o reboco ou as pastilhas perderam a aderência: nesses pontos, o som fica oco. Ele é indicado depois de qualquer queda de peça, antes de pintar ou recuperar a fachada e antes de levar a obra para a assembleia.</p></div>
<figure className="post-figure"><img src="/img/obras/the-fields-4-durante.webp" alt="Fachada de pastilhas com áreas marcadas durante a obra no Edifício The Fields, Campo Belo" width="476" height="708" fetchPriority="high" style={{"maxWidth": "420px"}} /><figcaption>Fachada de pastilhas durante a recuperação · Ed. The Fields, Campo Belo · execução Grupo AWN</figcaption></figure>
<section id="s1"><h2>O que é o teste de percussão</h2><p>É um teste simples e muito eficiente. O técnico bate de leve na superfície com um martelo próprio, ponto a ponto. Onde o revestimento está bem preso, o som é firme. Onde há um vazio por trás, o som fica oco, como uma batida em algo solto.</p><p>Cada área com som oco é marcada e anotada no mapa da face. No fim, o condomínio sabe exatamente onde estão as áreas soltas e quantos metros quadrados precisam de recuperação.</p></section>
<section id="s2"><h2>Quando o condomínio precisa</h2><ul className="ticks"><li><span>Depois da queda de uma pastilha, de um pedaço de reboco ou de qualquer fragmento</span></li><li><span>Antes de pintar a fachada, para não pintar por cima de áreas soltas</span></li><li><span>Antes de pedir orçamentos, para que todas as empresas orcem a mesma área</span></li><li><span>Antes da assembleia, para mostrar aos condôminos o estado real da fachada</span></li><li><span>Quando o prédio tem mais de 10 anos e nunca passou por inspeção de fachada</span></li></ul></section>
<div className="inline-cta"><p>Caiu alguma peça da fachada? Envie fotos para o engenheiro avaliar.</p><WaLink servico="Teste de percussão e arrancamento" className="btn btn-primary btn-sm" data-track="whatsapp_click" data-pos="blog-inline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos</WaLink></div>
<section id="s3"><h2>Por amostragem ou em 100% da fachada?</h2><p>Muitas empresas testam só os pontos que alcançam do chão ou da cobertura e estimam o restante. É mais rápido, mas a área solta real pode ser bem maior que a estimada. Esse erro aparece no meio da obra, como aditivo de preço e atraso.</p><p>No teste em 100% da fachada, toda a superfície é percorrida com acesso por cordas ou balancim. A área solta passa a ser medida, e não estimada. É assim que a DRD2 faz.</p></section>
<section id="s4"><h2>Como o teste é feito</h2><ol className="proc"><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Vistoria inicial do engenheiro para definir o método de acesso.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Plano de segurança e isolamento da área abaixo da fachada.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Percurso de toda a superfície, face por face, com batidas leves.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Marcação de cada área com som oco e registro fotográfico.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Ensaios de arrancamento em pontos escolhidos, quando indicados.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Laudo com o mapa das áreas soltas e as recomendações.</span></li></ol></section>
<section id="s5"><h2>Percussão e arrancamento: qual a diferença</h2><p>O teste de percussão mostra{" "}<b>onde</b>{" "}o revestimento está solto. O ensaio de arrancamento mostra{" "}<b>quanto</b>{" "}o revestimento que ainda parece preso está realmente aderido. Um aparelho puxa uma pequena área colada à superfície e mede a força até ela soltar.</p><p>Os dois juntos respondem às duas perguntas do síndico: o que precisa ser refeito agora e o que ainda aguenta.</p></section>
<section id="s6"><h2>O que vem no laudo e como usar na assembleia</h2><ul className="ticks"><li><span>Mapa de cada face com as áreas soltas marcadas</span></li><li><span>Área solta em m² por face e no total</span></li><li><span>Resultado dos ensaios de arrancamento, quando feitos</span></li><li><span>Fotos com a localização de cada problema</span></li><li><span>O que é urgente e o que pode ser programado</span></li><li><span>ART do engenheiro responsável</span></li></ul><p>Com o laudo, o síndico apresenta números e fotos em vez de opinião. As empresas passam a orçar a mesma área, e a assembleia compara propostas equivalentes. Veja também{" "}<Link href="/blog/como-aprovar-obra-de-fachada-em-assembleia/">como levar a obra de fachada para a assembleia</Link>.</p></section>
<section id="quando"><div className="callout"><b>Quando agir</b><p>Se caiu alguma peça, isole a área abaixo no mesmo dia e peça o teste com prioridade. Peças soltas costumam estar perto de outras que também perderam aderência.</p></div></section>
<section id="faq"><h2>Perguntas frequentes</h2><div className="faq"><details><summary>O teste de percussão estraga a fachada?</summary><div className="ans"><p>Não. São batidas leves com um martelo próprio, que não quebram o revestimento. O ensaio de arrancamento, quando é feito, retira pequenos pontos escolhidos, que são recompostos depois.</p></div></details><details><summary>Os moradores são incomodados?</summary><div className="ans"><p>O barulho é baixo e a equipe passa por cada prumada com acesso por cordas ou balancim. Os moradores são avisados antes, para fecharem as janelas quando a equipe estiver na frente do apartamento.</p></div></details><details><summary>Dá para fazer o teste só com drone ou câmera térmica?</summary><div className="ans"><p>Não. O drone e a termografia ajudam a apontar áreas suspeitas em prédios altos, mas não substituem o teste de percussão, que confirma ponto a ponto onde o revestimento está solto.</p></div></details><details><summary>Quanto custa o teste de percussão?</summary><div className="ans"><p>Depende da área de fachada, da altura do prédio e do método de acesso. O valor sai depois da vistoria do engenheiro, junto com o plano de acesso e segurança.</p></div></details><details><summary>Precisa de engenheiro?</summary><div className="ans"><p>Sim. O teste é a base do laudo e da decisão do condomínio. Na DRD2, o laudo é assinado pelo Eng. Samuel Silva Costa, com ART.</p></div></details></div></section>
<section id="solucao"><h2>Como fazer no seu prédio</h2>
<Link className="svc-card" href="/servicos/teste-de-percussao-e-arrancamento/"><span className="sc-media"><img src="/img/obras/the-fields-2-durante.webp" alt="" width="350" height="468" loading="lazy" decoding="async" /></span><span className="sc-body"><span className="k">Serviço</span><b>Teste de percussão e arrancamento</b><span>Teste em 100% da fachada, ensaio de aderência e laudo com ART do engenheiro responsável.</span><span className="link-arrow">Ver como funciona</span></span></Link>
<div className="related"><Link href="/servicos/recuperacao-de-fachada-com-pastilhas/"><b>Recuperação de fachada com pastilhas</b><span>Mapeamento, reassentamento, reposição de peças e rejunte.</span></Link><Link href="/servicos/recuperacao-de-fachada/"><b>Recuperação e restauração de fachada</b><span>Reboco, trincas, concreto e infiltrações tratados a partir de diagnóstico.</span></Link><Link href="/#etapas"><b>Pintura de fachada</b><span>Pintura com lavagem, teste de percussão e correção da base antes da tinta.</span></Link><Link href="/servicos/pintura-de-fachada-de-condominio/"><b>Pintura de fachada de condomínio</b><span>Proposta para assembleia, cronograma por torre e comunicação com moradores.</span></Link></div>
<div className="inline-cta" style={{"marginTop": "8px"}}><p>Agende uma vistoria técnica com o engenheiro responsável.</p><a className="btn btn-primary btn-sm" href="#contato" data-track="cta_orcamento" data-pos="blog-end">Solicitar vistoria</a></div>
</section>
<section id="leia-tambem"><h2>Leia também</h2><div className="post-grid two"><Link className="post-card" href="/blog/pastilhas-caindo-da-fachada-o-que-fazer/"><span className="pc-media"><img src="/img/blog/pastilhas-caindo-da-fachada-o-que-fazer.webp" alt="Ilustração: área de pastilhas sem aderência, peças em queda e área isolada no térreo" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Riscos e segurança</span><b>Pastilhas caindo da fachada: o que o síndico deve fazer agora</b><small>Uma pastilha caiu do prédio? Veja o que fazer nas primeiras horas, por que outras peças podem estar soltas, quem responde por danos e como resolver de vez.</small><span className="pc-meta">6 min de leitura</span></span></Link><Link className="post-card" href="/blog/reboco-da-fachada-soltando/"><span className="pc-media"><img src="/img/blog/reboco-da-fachada-soltando.webp" alt="Ilustração: reboco descolado da base e o som cavo no teste de percussão" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Riscos e segurança</span><b>Reboco da fachada soltando: sinais, riscos e o que fazer</b><small>Som oco, estufamento e pedaços no chão indicam reboco solto. Veja por que acontece, qual é o risco e como é feita a recuperação correta da fachada.</small><span className="pc-meta">5 min de leitura</span></span></Link></div></section>
</article>
<aside className="aside" aria-label="Navegação do artigo e contato"><div className="aside-inner">
<nav className="toc" aria-label="Neste artigo"><h4>Neste artigo</h4><ol><li><a href="#s1">O que é</a></li><li><a href="#s2">Quando precisa</a></li><li><a href="#s3">Amostragem ou 100%</a></li><li><a href="#s4">Como é feito</a></li><li><a href="#s5">Percussão e arrancamento</a></li><li><a href="#s6">O laudo</a></li><li><a href="#faq">Perguntas frequentes</a></li><li><a href="#solucao">Como fazer</a></li></ol></nav>
<div className="aside-card"><h4>Fale com um engenheiro</h4><p>Envie fotos da fachada e a localização do prédio. Respondemos com os próximos passos.</p>
<WaLink servico="Teste de percussão e arrancamento" className="btn btn-primary" data-track="whatsapp_click" data-pos="blog-aside"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink>{" "}
<Link className="btn btn-outline" href="/servicos/teste-de-percussao-e-arrancamento/" style={{"color": "var(--band-ink)", "borderColor": "var(--band-line)"}}>Ver o serviço</Link></div>
</div></aside>
</div>
</main>
<LeadSection formId="form-blog-teste-de-percussao-em-fachada" checked="Teste de percussão com laudo" servico={SERVICO} />
    </>
  );
}
