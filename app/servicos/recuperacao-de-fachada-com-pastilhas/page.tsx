// Página gerada a partir do site estático (servicos/recuperacao-de-fachada-com-pastilhas.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Pastilhas Soltando na Fachada? Recuperação em SP | DRD2",
  "description": "Pastilhas soltando na fachada? Recuperação com teste de percussão, reassentamento, reposição de peças e rejuntamento. Atendimento em São Paulo e Grande SP.",
  "path": "/servicos/recuperacao-de-fachada-com-pastilhas/",
  "image": "/img/obras/cedro-do-libano-3-depois.webp"
});

const SERVICO = "Recuperação de fachada com pastilhas";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Recuperação de fachada com pastilhas",
    "serviceType": "recuperação de pastilhas",
    "description": "Pastilhas soltando na fachada? Recuperação com teste de percussão, reassentamento, reposição de peças e rejuntamento. Atendimento em São Paulo e Grande SP.",
    "url": "https://fachadas.drd2.com.br/servicos/recuperacao-de-fachada-com-pastilhas/",
    "provider": {
      "@type": "GeneralContractor",
      "@id": "https://fachadas.drd2.com.br/#empresa",
      "name": "DRD2 Fachadas"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "São Paulo"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Região Metropolitana de São Paulo"
      }
    ]
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
        "name": "Serviços",
        "item": "https://fachadas.drd2.com.br/servicos/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Recuperação de fachada com pastilhas",
        "item": "https://fachadas.drd2.com.br/servicos/recuperacao-de-fachada-com-pastilhas/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Uma pastilha caiu. Preciso me preocupar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Isole a área abaixo e solicite uma vistoria. Uma peça caída costuma indicar outras com perda de aderência na mesma região."
        }
      },
      {
        "@type": "Question",
        "name": "Dá para pintar por cima das pastilhas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É possível com sistemas específicos, mas antes as pastilhas soltas precisam ser removidas ou fixadas. A pintura não resolve falta de aderência."
        }
      },
      {
        "@type": "Question",
        "name": "E se não existir mais a pastilha original?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Buscamos peças compatíveis. Quando não há reposição adequada, podemos redistribuir peças originais de áreas menos visíveis ou propor outra solução para a face."
        }
      },
      {
        "@type": "Question",
        "name": "A obra de pastilhas exige muito tempo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende da porcentagem de áreas soltas. O mapeamento inicial permite estimar o prazo, que é confirmado no cronograma da proposta."
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
<section className="page-hero">
<div className="wrap">
<div className="page-hero-copy">
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li><Link href="/servicos/">Serviços</Link></li><li aria-current="page">Recuperação de fachada com pastilhas</li></ol></nav>
<span className="eyebrow">Recuperação e restauração</span>
<h1>Recuperação de fachada com pastilhas</h1>
<p className="lead">Pastilhas são um revestimento durável e característico de muitos prédios de São Paulo. Quando começam a se soltar, é sinal de que a aderência da camada está falhando em mais pontos do que aparece.</p>
<div className="btn-row">
<a className="btn btn-primary" href="#contato" data-track="cta_orcamento" data-pos="service-hero">Solicitar vistoria e orçamento</a>{" "}
<WaLink servico="Recuperação de fachada com pastilhas" className="btn btn-outline" data-track="whatsapp_click" data-pos="service-hero"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink>
</div>
</div>
<aside className="spec" aria-label="Resumo técnico"><img src="/img/obras/cedro-do-libano-3-depois.webp" alt="Ed. Cedro do Líbano · Jardim São Paulo · tratamento de pastilhas e pintura" width="468" height="607" fetchPriority="high" /><div className="spec-cap">Ed. Cedro do Líbano · Jardim São Paulo · tratamento de pastilhas e pintura · execução Grupo AWN</div><dl><div><dt>Indicado para</dt><dd>Fachadas revestidas com pastilhas cerâmicas, de porcelana ou de vidro</dd></div><div><dt>Diagnóstico</dt><dd>Percussão, mapeamento das áreas soltas e avaliação de reposição</dd></div><div><dt>Acesso</dt><dd>Cordas ou balancim, com isolamento das áreas abaixo</dd></div><div><dt>Atendimento</dt><dd>São Paulo capital e Grande SP</dd></div></dl></aside>
</div>
</section>
<div className="wrap doc">
<div className="doc-main">
<section id="problema"><h2>O problema que este serviço resolve</h2><p>Uma pastilha caída no chão do condomínio quase nunca é um caso isolado. Normalmente, as peças vizinhas também perderam aderência, e a água que entra pelo rejunte continua enfraquecendo a camada de assentamento.</p><p>Como as pastilhas são pequenas e numerosas, a recuperação exige método: mapear as áreas com som cavo, remover o que está solto, preparar a base e reassentar com material adequado, buscando o melhor resultado visual possível na reposição.</p></section>
<section id="o-que-e"><h2>O que é recuperação de fachada com pastilhas</h2><p>É a recuperação de fachadas revestidas com pastilhas: lavagem, teste de percussão, remoção das áreas soltas, reassentamento com argamassa para uso externo, reposição de peças, rejuntamento e limpeza final.</p><p>Quando a reposição com peças idênticas não é possível, apresentamos alternativas, como redistribuir peças originais ou, em casos específicos, aplicar um sistema de pintura próprio para pastilhas.</p></section>
<section id="outros-revestimentos"><h2>Cerâmicas, porcelanatos e pedras</h2><p>O mesmo método vale para fachadas revestidas com cerâmica, porcelanato, pedra ou granito: teste de percussão para localizar as peças sem aderência, remoção das áreas soltas, reassentamento com argamassa própria para fachada e revisão das juntas. Em pedras e granitos, a fixação é avaliada peça a peça, porque o peso de cada placa aumenta o risco de queda.</p></section><section id="quando"><h2>Quando é indicado</h2><ul className="ticks "><li><span>Pastilhas caindo ou encontradas no chão</span></li><li><span>Placas de pastilhas com som cavo ou estufadas</span></li><li><span>Rejuntes escuros, falhando ou ausentes</span></li><li><span>Falhas aparentes no revestimento que comprometem a estética</span></li><li><span>Fachadas com infiltração atribuída às juntas das pastilhas</span></li></ul></section>
<section id="sinais"><h2>Sinais de deterioração</h2><ul className="ticks "><li><span>Pastilhas soltas em sacadas, jardins e calçadas</span></li><li><span>Placas inteiras de pastilhas formando barriga</span></li><li><span>Rejunte com fungos ou esfarelando</span></li><li><span>Manchas escuras e eflorescências entre as peças</span></li><li><span>Remendos com pastilhas de cor diferente</span></li></ul></section>
<section id="riscos"><h2>Riscos de adiar a manutenção</h2><ul className="ticks warn"><li><span>Queda de placas de pastilhas, com risco para pessoas</span></li><li><span>Água entrando pela camada e ampliando a área solta</span></li><li><span>Necessidade de interdição de áreas comuns</span></li><li><span>Aumento do custo e da área de reposição com o tempo</span></li></ul>
<div className="inline-cta"><p>Reconheceu algum desses sinais? Envie fotos para uma análise inicial.</p><WaLink servico="Recuperação de fachada com pastilhas" className="btn btn-primary btn-sm" data-track="whatsapp_click" data-pos="service-inline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos</WaLink></div></section>
<section id="avaliacao"><h2>Como é feita a avaliação</h2><p>Fazemos o teste de percussão em todas as áreas acessíveis e estimamos a porcentagem de pastilhas com perda de aderência por face. Avaliamos também o estado do rejunte e a disponibilidade de peças compatíveis. Com isso, a proposta apresenta as quantidades estimadas e a forma de confirmação durante a obra.</p><p className="note">Não fazemos diagnóstico definitivo sem inspeção no local. Fotos e descrições ajudam a preparar a vistoria e a estimar o escopo.</p></section>
<section id="etapas"><h2>Etapas da execução</h2><ol className="proc"><li><b>Lavagem</b><span>Limpeza com pressão controlada para não arrancar peças firmes e revelar o estado real.</span></li><li><b>Percussão e mapeamento</b><span>Marcação de todas as áreas com som cavo.</span></li><li><b>Remoção</b><span>Retirada das placas soltas e da argamassa antiga sem aderência.</span></li><li><b>Preparo da base</b><span>Limpeza e regularização para receber o novo assentamento.</span></li><li><b>Reassentamento e reposição</b><span>Colagem com argamassa adequada e reposição com peças compatíveis.</span></li><li><b>Rejuntamento</b><span>Rejunte flexível em toda a área recuperada e onde o rejunte existente falhou.</span></li><li><b>Limpeza e proteção</b><span>Limpeza final e, quando indicado, proteção hidrorrepelente.</span></li></ol></section>
<section id="materiais"><h2>Materiais e métodos possíveis</h2><div className="mat"><div><b>Argamassa colante para fachada</b><span>Indicada para uso externo e para o tipo de pastilha.</span></div><div><b>Rejunte flexível</b><span>Resistente à água e à variação de temperatura.</span></div><div><b>Pastilhas de reposição</b><span>Peças compatíveis em cor, formato e espessura.</span></div><div><b>Sistemas para pintura sobre pastilhas</b><span>Alternativa em casos específicos, com fundo de aderência próprio.</span></div></div><p className="note">A especificação final, com produtos, consumos e número de demãos, é definida depois da vistoria e descrita na proposta, seguindo as recomendações dos fabricantes.</p></section>
<section id="beneficios"><h2>Benefícios</h2><ul className="ticks "><li><span>Eliminação das áreas com risco de queda</span></li><li><span>Fachada original preservada</span></li><li><span>Rejuntes refeitos que reduzem a entrada de água</span></li><li><span>Aparência uniforme após a reposição</span></li></ul></section>
<section id="imoveis"><h2>Tipos de imóveis atendidos</h2><ul className="pills"><li>Condomínios residenciais</li><li>Edifícios antigos</li><li>Prédios comerciais</li><li>Hotéis e flats</li><li>Escolas</li><li>Clínicas</li></ul></section>
<section id="diferenciais"><h2>Por que contratar a DRD2 Fachadas</h2><ul className="ticks "><li><span>Engenheiro civil e de segurança do trabalho como responsável técnico, da vistoria à entrega, com execução pela equipe do Grupo AWN</span></li><li><span>Teste de percussão e mapeamento antes de fechar o escopo</span></li><li><span>Proposta com itens separados, sistema, método de acesso e cronograma</span></li><li><span>Plano de segurança em altura apresentado antes do início da obra</span></li><li><span>ART (Anotação de Responsabilidade Técnica) emitida em todas as obras</span></li></ul></section>
<section id="atendimento"><h2>Área de atendimento</h2><p>Atendemos recuperação de fachada com pastilhas em toda a cidade de São Paulo, nas zonas Leste, Sul, Oeste, Norte e no Centro, e nos municípios da Grande SP, como Guarulhos, Osasco, Barueri, Alphaville, ABC, Taboão da Serra, Cotia, Mogi das Cruzes e Suzano.{" "}<Link href="/areas-atendidas/">Ver todas as áreas atendidas</Link>.</p></section>
<section id="faq"><h2>Perguntas frequentes</h2><div className="faq"><details><summary>Uma pastilha caiu. Preciso me preocupar?</summary><div className="ans"><p>Sim. Isole a área abaixo e solicite uma vistoria. Uma peça caída costuma indicar outras com perda de aderência na mesma região.</p></div></details><details><summary>Dá para pintar por cima das pastilhas?</summary><div className="ans"><p>É possível com sistemas específicos, mas antes as pastilhas soltas precisam ser removidas ou fixadas. A pintura não resolve falta de aderência.</p></div></details><details><summary>E se não existir mais a pastilha original?</summary><div className="ans"><p>Buscamos peças compatíveis. Quando não há reposição adequada, podemos redistribuir peças originais de áreas menos visíveis ou propor outra solução para a face.</p></div></details><details><summary>A obra de pastilhas exige muito tempo?</summary><div className="ans"><p>Depende da porcentagem de áreas soltas. O mapeamento inicial permite estimar o prazo, que é confirmado no cronograma da proposta.</p></div></details></div></section>
<section id="relacionados"><h2>Serviços relacionados</h2><div className="related"><Link href="/servicos/lavagem-de-fachada/"><b>Lavagem e limpeza de fachada</b><span>Hidrojateamento com pressão ajustada a cada material.</span></Link><Link href="/servicos/teste-de-percussao-e-arrancamento/"><b>Teste de percussão e arrancamento</b><span>Teste em 100% da fachada e ensaio de aderência, com laudo e ART.</span></Link><Link href="/servicos/recuperacao-de-fachada/"><b>Recuperação e restauração de fachada</b><span>Reboco, trincas, concreto e infiltrações tratados a partir de diagnóstico.</span></Link><Link href="/servicos/impermeabilizacao-de-fachada/"><b>Impermeabilização de fachada</b><span>Hidrorrepelentes, pinturas elastoméricas e membranas por superfície.</span></Link></div></section>
<section id="blog"><h2>Leia no blog</h2><div className="post-grid two"><Link className="post-card" href="/blog/pastilhas-caindo-da-fachada-o-que-fazer/"><span className="pc-media"><img src="/img/blog/pastilhas-caindo-da-fachada-o-que-fazer.webp" alt="Ilustração: área de pastilhas sem aderência, peças em queda e área isolada no térreo" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Riscos e segurança</span><b>Pastilhas caindo da fachada: o que o síndico deve fazer agora</b><small>Uma pastilha caiu do prédio? Veja o que fazer nas primeiras horas, por que outras peças podem estar soltas, quem responde por danos e como resolver de vez.</small><span className="pc-meta">6 min de leitura</span></span></Link></div></section>
</div>
<aside className="aside" aria-label="Navegação da página e contato"><div className="aside-inner">
<nav className="toc" aria-label="Nesta página"><h4>Nesta página</h4><ol><li><a href="#problema">O problema</a></li><li><a href="#o-que-e">O que é</a></li><li><a href="#outros-revestimentos">Cerâmicas e pedras</a></li><li><a href="#quando">Quando é indicado</a></li><li><a href="#sinais">Sinais de deterioração</a></li><li><a href="#riscos">Riscos de adiar</a></li><li><a href="#avaliacao">Como avaliamos</a></li><li><a href="#etapas">Etapas da execução</a></li><li><a href="#materiais">Materiais e métodos</a></li><li><a href="#beneficios">Benefícios</a></li><li><a href="#imoveis">Imóveis atendidos</a></li><li><a href="#faq">Perguntas frequentes</a></li><li><a href="#relacionados">Serviços relacionados</a></li><li><a href="#blog">Leia no blog</a></li></ol></nav>
<div className="aside-card"><h4>Fale com um especialista em fachadas</h4><p>Envie fotos para uma análise inicial ou agende uma vistoria técnica no imóvel.</p>
<a className="btn btn-primary" href="#contato" data-track="cta_orcamento" data-pos="service-aside">Agendar vistoria técnica</a>{" "}
<WaLink servico="Recuperação de fachada com pastilhas" className="btn btn-outline" data-track="whatsapp_click" data-pos="service-aside" style={{"color": "var(--band-ink)", "borderColor": "var(--band-line)"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>WhatsApp</WaLink></div>
</div></aside>
</div>
</main>
<LeadSection formId="form-servicos-recuperacao-de-fachada-com-pastilhas" checked="Recuperação ou restauração (reboco, trincas, pastilhas)" servico={SERVICO} />
    </>
  );
}
