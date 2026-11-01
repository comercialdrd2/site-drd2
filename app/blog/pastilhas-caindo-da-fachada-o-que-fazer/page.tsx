// Página gerada a partir do site estático (blog/pastilhas-caindo-da-fachada-o-que-fazer.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Pastilhas Caindo da Fachada: O Que o Síndico Deve Fazer",
  "description": "Uma pastilha caiu do prédio? Veja o que fazer nas primeiras horas, por que outras peças podem estar soltas, quem responde por danos e como resolver de vez.",
  "path": "/blog/pastilhas-caindo-da-fachada-o-que-fazer/",
  "image": "/img/blog/pastilhas-caindo-da-fachada-o-que-fazer.webp",
  "type": "article"
});

const SERVICO = "Recuperação de fachada com pastilhas";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Pastilhas caindo da fachada: o que o síndico deve fazer agora",
    "description": "Uma pastilha caiu do prédio? Veja o que fazer nas primeiras horas, por que outras peças podem estar soltas, quem responde por danos e como resolver de vez.",
    "image": "https://fachadas.drd2.com.br/img/blog/pastilhas-caindo-da-fachada-o-que-fazer.webp",
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
    "mainEntityOfPage": "https://fachadas.drd2.com.br/blog/pastilhas-caindo-da-fachada-o-que-fazer/",
    "keywords": "pastilhas caindo da fachada"
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
        "name": "Pastilhas caindo da fachada: o que o síndico deve fazer agora",
        "item": "https://fachadas.drd2.com.br/blog/pastilhas-caindo-da-fachada-o-que-fazer/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Posso só colar de volta as pastilhas que caíram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não resolve. As peças vizinhas costumam estar com a mesma falta de aderência. O correto é mapear a área com teste de percussão e recuperar toda a região comprometida."
        }
      },
      {
        "@type": "Question",
        "name": "A recuperação precisa ir para a assembleia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medidas imediatas de segurança, como isolar a área, não dependem de obra. A recuperação em si normalmente é aprovada conforme a convenção do condomínio. Confirme o procedimento com a administradora."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo leva a obra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende da área com pastilhas soltas, do número de faces e do método de acesso. O mapeamento inicial permite estimar o prazo, que entra no cronograma da proposta."
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
<h1>Pastilhas caindo da fachada: o que o síndico deve fazer agora</h1>
<div className="post-by"><span className="avatar sm"><img className="photo" src="/img/eng-samuel-avatar.webp" alt="" width="44" height="44" /></span><span><b>Eng. Samuel Silva Costa</b><small>Engenheiro civil e engenheiro de segurança do trabalho · CREA-SP 5070163570</small></span><span className="post-date">Atualizado em 7 de outubro de 2026 · 6 min de leitura</span></div>
</div></div></section>
<div className="wrap doc">
<article className="doc-main post">
<div className="post-answer"><span className="k">Resposta curta</span><p>Isole a área abaixo, registre o que caiu e peça uma vistoria técnica. Uma pastilha no chão quase nunca é um caso isolado: normalmente indica que outras peças da mesma região também perderam aderência e podem cair nas próximas chuvas ou nos próximos dias de calor.</p></div>
<figure className="post-figure"><img src="/img/blog/pastilhas-caindo-da-fachada-o-que-fazer.webp" alt="Ilustração: área de pastilhas sem aderência, peças em queda e área isolada no térreo" width="1200" height="750" fetchPriority="high" /><figcaption>Ilustração: área de pastilhas sem aderência, peças em queda e área isolada no térreo</figcaption></figure>
<section id="s1"><h2>Nas primeiras horas</h2><ol className="proc"><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Isole a área abaixo do ponto de queda com fita, cones ou tapume, incluindo calçada, garagem e área de lazer, se for o caso.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Fotografe as peças no chão, o local de onde caíram e a fachada inteira, anotando data e hora.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Avise os moradores com um comunicado curto: qual área está isolada e por quê.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Não peça a ninguém para subir e arrancar peças soltas sem plano de acesso e equipamento de segurança.</span></li><li><span style={{"fontSize": "var(--t-base)", "color": "var(--ink-2)"}}>Solicite uma vistoria técnica com teste de percussão para saber o tamanho real do problema.</span></li></ol></section><section id="s2"><h2>Por que as pastilhas se soltam</h2><p>Pastilhas ficam presas à parede por uma camada de argamassa. Quando essa camada perde aderência, as peças continuam no lugar por um tempo, mas já estão soltas. As causas mais comuns são:</p><ul className="ticks"><li><span>Rejunte deteriorado, que deixa a água da chuva entrar por trás das peças.</span></li><li><span>Falta ou falha das juntas de movimentação, que deveriam absorver a dilatação da fachada.</span></li><li><span>Variação de temperatura nas faces que recebem sol forte à tarde.</span></li><li><span>Argamassa inadequada para área externa ou base mal preparada na construção.</span></li><li><span>Anos sem manutenção, inspeção ou revisão de rejuntes.</span></li></ul><p>Cada fachada tem sua combinação de causas. Só a vistoria indica o que está acontecendo no seu prédio.</p></section><div className="inline-cta"><p>Está vendo isso no seu prédio? Envie fotos da fachada para uma análise inicial.</p><WaLink servico="Recuperação de fachada com pastilhas" className="btn btn-primary btn-sm" data-track="whatsapp_click" data-pos="blog-inline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos</WaLink></div><section id="s3"><h2>O risco não é só estético</h2><p>Uma placa de pastilhas caindo de vários andares pode ferir alguém ou danificar veículos. Por isso a recuperação deve ser tratada como prioridade, e não como embelezamento.</p><p>O Código Civil estabelece, no art. 938, que quem habita o prédio responde pelo dano causado por coisas que dele caírem, e o art. 1.348 inclui entre as funções do síndico diligenciar a conservação das partes comuns. Para avaliar responsabilidades em um caso concreto, consulte a assessoria jurídica do condomínio.</p></section><section id="s4"><h2>Como é feita a vistoria</h2><ul className="ticks"><li><span>Percurso de todas as faces do prédio, com registro fotográfico.</span></li><li><span>Teste de percussão nas áreas acessíveis: peças soltas produzem som oco.</span></li><li><span>Estimativa da porcentagem de área solta em cada face.</span></li><li><span>Avaliação do rejunte e das juntas de movimentação.</span></li><li><span>Quando a fachada só pode ser verificada em altura, plano de acesso por cordas ou balancim para completar o mapeamento.</span></li></ul><p>Para ter a área solta exata, fazemos o{" "}<Link href="/servicos/teste-de-percussao-e-arrancamento/">teste de percussão em 100% da fachada e o ensaio de arrancamento, com laudo e ART</Link>.</p></section><section id="s5"><h2>Quais são as soluções</h2><ul className="ticks"><li><span>Remoção das áreas soltas e reassentamento com argamassa própria para fachada.</span></li><li><span>Reposição com pastilhas compatíveis em cor e formato.</span></li><li><span>Rejuntamento das áreas recuperadas e de onde o rejunte falhou.</span></li><li><span>Criação ou revisão das juntas de movimentação.</span></li><li><span>Quando não existe peça de reposição, alternativas como redistribuir pastilhas originais ou, em casos específicos, aplicar um sistema de pintura próprio para pastilhas.</span></li></ul></section>
<section id="quando"><div className="callout"><b>Quando agir</b><p>É urgente quando há peças caindo sobre áreas de circulação, placas estufadas visíveis ou várias quedas em pouco tempo. Nesses casos, isole a área no mesmo dia e peça a vistoria com prioridade.</p></div></section>
<section id="faq"><h2>Perguntas frequentes</h2><div className="faq"><details><summary>Posso só colar de volta as pastilhas que caíram?</summary><div className="ans"><p>Não resolve. As peças vizinhas costumam estar com a mesma falta de aderência. O correto é mapear a área com teste de percussão e recuperar toda a região comprometida.</p></div></details><details><summary>A recuperação precisa ir para a assembleia?</summary><div className="ans"><p>Medidas imediatas de segurança, como isolar a área, não dependem de obra. A recuperação em si normalmente é aprovada conforme a convenção do condomínio. Confirme o procedimento com a administradora.</p></div></details><details><summary>Quanto tempo leva a obra?</summary><div className="ans"><p>Depende da área com pastilhas soltas, do número de faces e do método de acesso. O mapeamento inicial permite estimar o prazo, que entra no cronograma da proposta.</p></div></details></div></section>
<section id="solucao"><h2>Como resolver no seu prédio</h2>
<Link className="svc-card" href="/servicos/recuperacao-de-fachada-com-pastilhas/"><span className="sc-media"><img src="/img/blog/pastilhas-caindo-da-fachada-o-que-fazer.webp" alt="" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="sc-body"><span className="k">Serviço</span><b>Recuperação de fachada com pastilhas</b><span>Pastilhas são um revestimento durável e característico de muitos prédios de São Paulo. Quando começam a se soltar, é sinal de que a aderência da camada está falhando em mais pontos do que aparece.</span><span className="link-arrow">Ver como funciona</span></span></Link>
<div className="related"><Link href="/servicos/recuperacao-de-fachada-com-pastilhas/"><b>Recuperação de fachada com pastilhas</b><span>Mapeamento, reassentamento, reposição de peças e rejunte.</span></Link><Link href="/servicos/teste-de-percussao-e-arrancamento/"><b>Teste de percussão e arrancamento</b><span>Teste em 100% da fachada e ensaio de aderência, com laudo e ART.</span></Link><Link href="/servicos/recuperacao-de-fachada/"><b>Recuperação e restauração de fachada</b><span>Reboco, trincas, concreto e infiltrações tratados a partir de diagnóstico.</span></Link><Link href="/#etapas"><b>Pintura de fachada</b><span>Pintura com lavagem, teste de percussão e correção da base antes da tinta.</span></Link></div>
<div className="inline-cta" style={{"marginTop": "8px"}}><p>Agende uma vistoria técnica com o engenheiro responsável.</p><a className="btn btn-primary btn-sm" href="#contato" data-track="cta_orcamento" data-pos="blog-end">Solicitar vistoria</a></div>
</section>
<section id="leia-tambem"><h2>Leia também</h2><div className="post-grid two"><Link className="post-card" href="/blog/reboco-da-fachada-soltando/"><span className="pc-media"><img src="/img/blog/reboco-da-fachada-soltando.webp" alt="Ilustração: reboco descolado da base e o som cavo no teste de percussão" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Riscos e segurança</span><b>Reboco da fachada soltando: sinais, riscos e o que fazer</b><small>Som oco, estufamento e pedaços no chão indicam reboco solto. Veja por que acontece, qual é o risco e como é feita a recuperação correta da fachada.</small><span className="pc-meta">5 min de leitura</span></span></Link><Link className="post-card" href="/blog/trinca-na-fachada-quando-se-preocupar/"><span className="pc-media"><img src="/img/blog/trinca-na-fachada-quando-se-preocupar.webp" alt="Ilustração: os quatro tipos de trinca mais comuns em fachadas" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Diagnóstico</span><b>Trinca na fachada: quando é só estética e quando chamar um engenheiro</b><small>Fissura na pintura, trinca no canto da janela ou rachadura inclinada? Entenda os tipos, os sinais de alerta e quando a avaliação de um engenheiro é necessária.</small><span className="pc-meta">6 min de leitura</span></span></Link></div></section>
</article>
<aside className="aside" aria-label="Navegação do artigo e contato"><div className="aside-inner">
<nav className="toc" aria-label="Neste artigo"><h4>Neste artigo</h4><ol><li><a href="#s1">Nas primeiras horas</a></li><li><a href="#s2">Por que as pastilhas se soltam</a></li><li><a href="#s3">O risco não é só estético</a></li><li><a href="#s4">Como é feita a vistoria</a></li><li><a href="#s5">Quais são as soluções</a></li><li><a href="#quando">Quando agir</a></li><li><a href="#faq">Perguntas frequentes</a></li><li><a href="#solucao">Como resolver</a></li></ol></nav>
<div className="aside-card"><h4>Fale com um engenheiro</h4><p>Envie fotos da fachada e a localização do prédio. Respondemos com os próximos passos.</p>
<WaLink servico="Recuperação de fachada com pastilhas" className="btn btn-primary" data-track="whatsapp_click" data-pos="blog-aside"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink>{" "}
<Link className="btn btn-outline" href="/servicos/recuperacao-de-fachada-com-pastilhas/" style={{"color": "var(--band-ink)", "borderColor": "var(--band-line)"}}>Ver o serviço</Link></div>
</div></aside>
</div>
</main>
<LeadSection formId="form-blog-pastilhas-caindo-da-fachada-o-que-fazer" checked="Recuperação ou restauração (reboco, trincas, pastilhas)" servico={SERVICO} />
    </>
  );
}
