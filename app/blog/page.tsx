// Página gerada a partir do site estático (blog/index.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Blog DRD2 Fachadas | Problemas de Fachada Explicados",
  "description": "Pastilhas caindo, infiltração que volta, reboco solto, trincas e orçamentos difíceis de comparar: os problemas de fachada explicados por engenheiro, com o que fazer.",
  "path": "/blog/",
  "image": "/img/obras/the-fields-1-depois.webp"
});

const schema = [
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
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog DRD2 Fachadas",
    "url": "https://fachadas.drd2.com.br/blog/",
    "inLanguage": "pt-BR",
    "blogPost": [
      {
        "@type": "BlogPosting",
        "headline": "Teste de percussão em fachada: o que é e quando o condomínio precisa",
        "url": "https://fachadas.drd2.com.br/blog/teste-de-percussao-em-fachada/"
      },
      {
        "@type": "BlogPosting",
        "headline": "Pastilhas caindo da fachada: o que o síndico deve fazer agora",
        "url": "https://fachadas.drd2.com.br/blog/pastilhas-caindo-da-fachada-o-que-fazer/"
      },
      {
        "@type": "BlogPosting",
        "headline": "Infiltração que volta a cada chuva: por que a pintura não resolveu",
        "url": "https://fachadas.drd2.com.br/blog/infiltracao-volta-depois-da-pintura/"
      },
      {
        "@type": "BlogPosting",
        "headline": "Reboco da fachada soltando: sinais, riscos e o que fazer",
        "url": "https://fachadas.drd2.com.br/blog/reboco-da-fachada-soltando/"
      },
      {
        "@type": "BlogPosting",
        "headline": "Moradores reclamando da fachada: como levar a obra para a assembleia",
        "url": "https://fachadas.drd2.com.br/blog/como-aprovar-obra-de-fachada-em-assembleia/"
      },
      {
        "@type": "BlogPosting",
        "headline": "Orçamentos de fachada muito diferentes: como comparar sem cair em armadilhas",
        "url": "https://fachadas.drd2.com.br/blog/como-comparar-orcamentos-de-fachada/"
      },
      {
        "@type": "BlogPosting",
        "headline": "Trinca na fachada: quando é só estética e quando chamar um engenheiro",
        "url": "https://fachadas.drd2.com.br/blog/trinca-na-fachada-quando-se-preocupar/"
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
<div className="page-hero-copy">
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li aria-current="page">Blog</li></ol></nav>
<span className="eyebrow">Blog</span>
<h1>Problemas de fachada, explicados por engenheiro</h1>
<p className="lead">O que fazer quando uma pastilha cai, por que a infiltração volta depois da pintura, como levar a obra para a assembleia. Respostas diretas, sem jargão, escritas por quem faz a vistoria.</p>
<p className="pc-tags"><span>Riscos e segurança</span><span>Infiltração</span><span>Gestão do condomínio</span><span>Orçamento</span><span>Diagnóstico</span></p>
</div></div></section>
<section className="sec"><div className="wrap" style={{"display": "grid", "gap": "clamp(28px,4vw,44px)"}}>
<Link className="post-feature" href="/blog/pastilhas-caindo-da-fachada-o-que-fazer/">{" "}<span className="pf-media"><img src="/img/blog/pastilhas-caindo-da-fachada-o-que-fazer.webp" alt="Ilustração: área de pastilhas sem aderência, peças em queda e área isolada no térreo" width="1200" height="750" fetchPriority="high" /></span>{" "}
<span className="pf-body"><span className="k">Riscos e segurança · 6 min</span><b>Pastilhas caindo da fachada: o que o síndico deve fazer agora</b><span className="pf-lead">Isole a área abaixo, registre o que caiu e peça uma vistoria técnica. Uma pastilha no chão quase nunca é um caso isolado: normalmente indica que outras peças da mesma região também perderam aderência e podem cair nas próximas chuvas ou nos próximos dias de calor.</span><span className="link-arrow">Ler o artigo</span></span>{" "}</Link>
<div className="post-grid"><Link className="post-card" href="/blog/teste-de-percussao-em-fachada/"><span className="pc-media"><img src="/img/obras/the-fields-4-durante.webp" alt="Fachada de pastilhas com áreas marcadas durante a obra" width="476" height="708" loading="lazy" decoding="async" style={{"objectFit": "cover"}} /></span><span className="pc-body"><span className="k">Diagnóstico</span><b>Teste de percussão em fachada: o que é e quando o condomínio precisa</b><small>Entenda o que é o teste de percussão em fachada, quando o condomínio precisa, por que testar 100% da área e o que vem no laudo para a assembleia.</small><span className="pc-meta">6 min de leitura</span></span></Link><Link className="post-card" href="/blog/infiltracao-volta-depois-da-pintura/"><span className="pc-media"><img src="/img/blog/infiltracao-volta-depois-da-pintura.webp" alt="Ilustração: por onde a água da chuva entra na fachada e onde a mancha aparece" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Infiltração</span><b>Infiltração que volta a cada chuva: por que a pintura não resolveu</b><small>A fachada foi pintada e a infiltração voltou? Veja por onde a água realmente entra, por que tinta sozinha não resolve e como tratar a origem do problema.</small><span className="pc-meta">6 min de leitura</span></span></Link><Link className="post-card" href="/blog/reboco-da-fachada-soltando/"><span className="pc-media"><img src="/img/blog/reboco-da-fachada-soltando.webp" alt="Ilustração: reboco descolado da base e o som cavo no teste de percussão" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Riscos e segurança</span><b>Reboco da fachada soltando: sinais, riscos e o que fazer</b><small>Som oco, estufamento e pedaços no chão indicam reboco solto. Veja por que acontece, qual é o risco e como é feita a recuperação correta da fachada.</small><span className="pc-meta">5 min de leitura</span></span></Link><Link className="post-card" href="/blog/como-aprovar-obra-de-fachada-em-assembleia/"><span className="pc-media"><img src="/img/blog/como-aprovar-obra-de-fachada-em-assembleia.webp" alt="Ilustração: obra dividida em fases e a pauta da assembleia" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Gestão do condomínio</span><b>Moradores reclamando da fachada: como levar a obra para a assembleia</b><small>Moradores cobram, o orçamento é alto e a assembleia precisa decidir. Veja como preparar a proposta, o que apresentar e como evitar que a obra trave.</small><span className="pc-meta">6 min de leitura</span></span></Link><Link className="post-card" href="/blog/como-comparar-orcamentos-de-fachada/"><span className="pc-media"><img src="/img/blog/como-comparar-orcamentos-de-fachada.webp" alt="Ilustração: duas propostas com escopos diferentes" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Orçamento</span><b>Orçamentos de fachada muito diferentes: como comparar sem cair em armadilhas</b><small>Uma proposta custa o dobro da outra? Veja o que costuma explicar a diferença, os itens que não podem faltar e as perguntas que evitam surpresas na obra.</small><span className="pc-meta">6 min de leitura</span></span></Link><Link className="post-card" href="/blog/trinca-na-fachada-quando-se-preocupar/"><span className="pc-media"><img src="/img/blog/trinca-na-fachada-quando-se-preocupar.webp" alt="Ilustração: os quatro tipos de trinca mais comuns em fachadas" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Diagnóstico</span><b>Trinca na fachada: quando é só estética e quando chamar um engenheiro</b><small>Fissura na pintura, trinca no canto da janela ou rachadura inclinada? Entenda os tipos, os sinais de alerta e quando a avaliação de um engenheiro é necessária.</small><span className="pc-meta">6 min de leitura</span></span></Link></div>
</div></section>
</main>
<LeadSection formId="form-blog-index" />
    </>
  );
}
