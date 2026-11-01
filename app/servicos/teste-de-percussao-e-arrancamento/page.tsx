// Página gerada a partir do site estático (servicos/teste-de-percussao-e-arrancamento.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Teste de Percussão e Arrancamento em Fachada | Laudo SP",
  "description": "Teste de percussão em 100% da fachada e ensaio de arrancamento, com laudo e ART do engenheiro. Para síndicos em São Paulo e Grande SP. Peça sua vistoria.",
  "path": "/servicos/teste-de-percussao-e-arrancamento/",
  "image": "/img/obras/the-fields-2-durante.webp"
});

const SERVICO = "Teste de percussão e arrancamento";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Teste de percussão e arrancamento",
    "serviceType": "teste de percussão em fachada",
    "description": "Teste de percussão em 100% da fachada e ensaio de arrancamento, com laudo e ART do engenheiro. Para síndicos em São Paulo e Grande SP. Peça sua vistoria.",
    "url": "https://fachadas.drd2.com.br/servicos/teste-de-percussao-e-arrancamento/",
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
        "name": "Teste de percussão e arrancamento",
        "item": "https://fachadas.drd2.com.br/servicos/teste-de-percussao-e-arrancamento/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual a diferença entre teste de percussão e teste de arrancamento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O teste de percussão é feito com um martelo de impacto leve: onde o reboco ou o revestimento está solto, o som fica oco. Ele mostra onde está o problema. O teste de arrancamento usa um aparelho que puxa uma pequena área do revestimento e mede a força necessária para soltá-la. Ele mostra quanto o revestimento ainda está preso."
        }
      },
      {
        "@type": "Question",
        "name": "O teste é feito na fachada inteira?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. O teste de percussão é feito em 100% da área de fachada, com acesso por cordas ou balancim. Isso evita estimar a área solta por amostragem e dá quantidades reais para orçar a obra."
        }
      },
      {
        "@type": "Question",
        "name": "O laudo tem ART?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. O laudo é assinado pelo Eng. Samuel Silva Costa, engenheiro civil e de segurança do trabalho (CREA-SP 5070163570), com ART emitida."
        }
      },
      {
        "@type": "Question",
        "name": "O teste de arrancamento danifica a fachada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ele é feito em poucos pontos escolhidos, e cada ponto é recomposto depois do ensaio. Em fachadas com pastilha, as peças retiradas são recolocadas ou repostas."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso contratar a obra com quem fez o laudo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. O laudo é do condomínio e pode ser usado para pedir propostas a qualquer empresa."
        }
      },
      {
        "@type": "Question",
        "name": "Quando vale fazer termografia ou inspeção com drone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em prédios altos ou com acesso difícil, a termografia e as imagens de drone ajudam a localizar áreas suspeitas antes do teste de percussão. Elas complementam o teste, não o substituem."
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
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li><Link href="/servicos/">Serviços</Link></li><li aria-current="page">Teste de percussão e arrancamento</li></ol></nav>
<span className="eyebrow">Diagnóstico antes da obra</span>
<h1>Teste de percussão e arrancamento em fachada, com laudo e ART</h1>
<p className="lead">Testamos 100% da fachada para saber exatamente onde o reboco e as pastilhas estão soltos, e medimos com aparelho quanto o revestimento ainda está preso. O condomínio recebe um laudo assinado por engenheiro.</p>
<div className="btn-row">
<a className="btn btn-primary" href="#contato" data-track="cta_orcamento" data-pos="service-hero">Solicitar laudo de fachada</a>{" "}
<WaLink servico="Teste de percussão e arrancamento" className="btn btn-outline" data-track="whatsapp_click" data-pos="service-hero"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink>
</div>
</div>
<aside className="spec" aria-label="Resumo técnico"><img src="/img/obras/the-fields-2-durante.webp" alt="Profissional em acesso por cordas na fachada do Edifício The Fields" width="350" height="468" fetchPriority="high" /><div className="spec-cap">Ed. The Fields · Campo Belo · acesso por cordas · execução Grupo AWN</div><dl><div><dt>Cobertura</dt><dd>Teste de percussão em 100% da área de fachada</dd></div><div><dt>Ensaios</dt><dd>Percussão, arrancamento (aderência à tração), termografia e drone quando indicados</dd></div><div><dt>Entrega</dt><dd>Laudo com mapa por face, fotos, resultados e recomendações, com ART</dd></div><div><dt>Responsável</dt><dd>Eng. Samuel Silva Costa, CREA-SP 5070163570</dd></div></dl></aside>
</div>
</section>
<div className="wrap doc">
<div className="doc-main">
<section id="problema"><h2>Por que testar antes de pintar ou orçar</h2><p>Reboco e pastilha soltos não aparecem a olho nu. Muitas vezes a fachada parece boa, mas uma parte grande já perdeu a aderência e pode cair com chuva, vento ou calor.</p><p>Sem teste, o orçamento estima a área solta "por experiência". Com o teste em 100% da fachada, o síndico sabe quantos metros quadrados precisam de recuperação em cada face, e as propostas das empresas passam a ser comparáveis.</p><p>Quer entender o teste antes de pedir? Leia{" "}<Link href="/blog/teste-de-percussao-em-fachada/">o que é o teste de percussão e quando o condomínio precisa</Link>.</p></section>
<section id="o-que-e"><h2>O que é cada teste</h2><div className="mat"><div><b>Teste de percussão</b><span>Batidas leves com martelo próprio em toda a superfície. Onde o som fica oco, o reboco ou a peça está descolado. Cada área é marcada no mapa da face.</span></div><div><b>Teste de arrancamento</b><span>Ensaio de resistência de aderência à tração: um aparelho (aderímetro) puxa uma pequena área colada ao revestimento e mede a força até ela soltar. Mostra se o que ainda está preso tem aderência suficiente.</span></div><div><b>Termografia</b><span>Câmera térmica que mostra diferenças de temperatura na fachada e ajuda a localizar áreas descoladas em prédios altos.</span></div><div><b>Inspeção com drone</b><span>Imagens de perto das faces e do topo do prédio, para mapear trincas e falhas em locais de acesso difícil.</span></div></div><p className="note">Os ensaios seguem as normas da ABNT para revestimentos de fachada, como a NBR 13749, a NBR 13528 e a NBR 13755. O laudo indica as normas aplicadas em cada caso.</p></section>
<section id="quando"><h2>Quando o condomínio precisa do laudo</h2><ul className="ticks "><li><span>Depois da queda de pastilha, reboco ou qualquer fragmento</span></li><li><span>Antes de contratar pintura ou recuperação, para definir a área real de serviço</span></li><li><span>Para apresentar na assembleia e aprovar a obra com base técnica</span></li><li><span>Quando a seguradora ou a administradora pede um documento técnico</span></li><li><span>Para registrar o estado da fachada no histórico de manutenção do prédio</span></li></ul></section>
<section id="sinais"><h2>Sinais de que a fachada precisa ser testada</h2><ul className="ticks "><li><span>Pastilhas ou pedaços de reboco encontrados no chão</span></li><li><span>Placas de pastilha estufadas ou com rejunte faltando</span></li><li><span>Trincas em volta de janelas e na altura das lajes</span></li><li><span>Manchas de umidade nas paredes externas</span></li><li><span>Prédio com mais de 10 anos sem nenhuma inspeção de fachada</span></li></ul></section>
<section id="riscos"><h2>Riscos de não testar</h2><ul className="ticks warn"><li><span>Queda de peças sobre pessoas, carros e vizinhos, com responsabilidade do condomínio (Código Civil, art. 938)</span></li><li><span>Pintar por cima de áreas soltas, que voltam a cair depois da obra</span></li><li><span>Aditivos e mudança de preço no meio da obra, porque a área solta foi subestimada</span></li><li><span>Propostas impossíveis de comparar entre empresas</span></li></ul>
<div className="inline-cta"><p>Caiu alguma peça da fachada? Isole a área abaixo e fale com o engenheiro.</p><WaLink servico="Teste de percussão e arrancamento" className="btn btn-primary btn-sm" data-track="whatsapp_click" data-pos="service-inline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Falar com o engenheiro</WaLink></div></section>
<section id="etapas"><h2>Como funciona</h2><ol className="proc"><li><b>Vistoria inicial</b><span>O engenheiro visita o prédio, avalia as faces e define o método de acesso.</span></li><li><b>Plano de acesso e segurança</b><span>Acesso por cordas ou balancim, com equipe NR-35 e isolamento da área abaixo.</span></li><li><b>Teste de percussão em 100% da fachada</b><span>Toda a superfície é testada, e as áreas com som oco são marcadas por face.</span></li><li><b>Ensaios de arrancamento</b><span>Pontos escolhidos são ensaiados com aderímetro e depois recompostos.</span></li><li><b>Termografia e drone, quando indicados</b><span>Complementam o mapeamento em prédios altos ou com acesso difícil.</span></li><li><b>Laudo com ART</b><span>Mapa por face, fotos, resultados dos ensaios, área solta em m² e recomendações.</span></li></ol></section>
<section id="laudo"><h2>O que vem no laudo</h2><ul className="ticks "><li><span>Mapa de cada face com as áreas descoladas marcadas</span></li><li><span>Área solta em m² por face e no total</span></li><li><span>Resultados dos ensaios de arrancamento, ponto a ponto</span></li><li><span>Fotos com a localização de cada problema</span></li><li><span>Classificação do que é urgente e do que pode ser programado</span></li><li><span>Recomendação de serviço para cada área</span></li><li><span>ART do Eng. Samuel Silva Costa</span></li></ul></section>
<section id="diferenciais"><h2>Por que contratar a DRD2 Fachadas</h2><ul className="ticks "><li><span>Teste em 100% da fachada, não por amostragem</span></li><li><span>Engenheiro civil e de segurança do trabalho como responsável técnico, com ART</span></li><li><span>Equipe com treinamento NR-35 e acesso por cordas</span></li><li><span>Laudo que serve de base para qualquer empresa orçar a obra</span></li></ul></section>
<section id="atendimento"><h2>Área de atendimento</h2><p>Fazemos teste de percussão e arrancamento em toda a cidade de São Paulo e na Grande SP, incluindo ABC, Guarulhos, Osasco, Barueri, Alphaville, Cotia, Taboão da Serra, Mogi das Cruzes e Suzano.{" "}<Link href="/areas-atendidas/">Ver todas as áreas atendidas</Link>.</p></section>
<section id="faq"><h2>Perguntas frequentes</h2><div className="faq"><details><summary>Qual a diferença entre teste de percussão e teste de arrancamento?</summary><div className="ans"><p>O teste de percussão é feito com um martelo de impacto leve: onde o reboco ou o revestimento está solto, o som fica oco. Ele mostra onde está o problema. O teste de arrancamento usa um aparelho que puxa uma pequena área do revestimento e mede a força necessária para soltá-la. Ele mostra quanto o revestimento ainda está preso.</p></div></details><details><summary>O teste é feito na fachada inteira?</summary><div className="ans"><p>Sim. O teste de percussão é feito em 100% da área de fachada, com acesso por cordas ou balancim. Isso evita estimar a área solta por amostragem e dá quantidades reais para orçar a obra.</p></div></details><details><summary>O laudo tem ART?</summary><div className="ans"><p>Sim. O laudo é assinado pelo Eng. Samuel Silva Costa, engenheiro civil e de segurança do trabalho (CREA-SP 5070163570), com ART emitida.</p></div></details><details><summary>O teste de arrancamento danifica a fachada?</summary><div className="ans"><p>Ele é feito em poucos pontos escolhidos, e cada ponto é recomposto depois do ensaio. Em fachadas com pastilha, as peças retiradas são recolocadas ou repostas.</p></div></details><details><summary>Preciso contratar a obra com quem fez o laudo?</summary><div className="ans"><p>Não. O laudo é do condomínio e pode ser usado para pedir propostas a qualquer empresa.</p></div></details><details><summary>Quando vale fazer termografia ou inspeção com drone?</summary><div className="ans"><p>Em prédios altos ou com acesso difícil, a termografia e as imagens de drone ajudam a localizar áreas suspeitas antes do teste de percussão. Elas complementam o teste, não o substituem.</p></div></details></div></section>
<section id="relacionados"><h2>Serviços relacionados</h2><div className="related"><Link href="/servicos/recuperacao-de-fachada-com-pastilhas/"><b>Recuperação de fachada com pastilhas</b><span>Mapeamento, reassentamento, reposição de peças e rejunte.</span></Link><Link href="/blog/pastilhas-caindo-da-fachada-o-que-fazer/"><b>Pastilhas caindo: o que fazer agora</b><span>O que o síndico deve fazer nas primeiras horas.</span></Link><Link href="/servicos/recuperacao-de-fachada/"><b>Recuperação e restauração de fachada</b><span>Reboco, trincas, concreto e infiltrações tratados a partir de diagnóstico.</span></Link><Link href="/#etapas"><b>Pintura de fachada</b><span>Pintura com lavagem, teste de percussão e correção da base antes da tinta.</span></Link></div></section>
</div>
<aside className="aside" aria-label="Navegação da página e contato"><div className="aside-inner">
<nav className="toc" aria-label="Nesta página"><h4>Nesta página</h4><ol><li><a href="#problema">Por que testar</a></li><li><a href="#o-que-e">O que é cada teste</a></li><li><a href="#quando">Quando precisa</a></li><li><a href="#sinais">Sinais</a></li><li><a href="#riscos">Riscos</a></li><li><a href="#etapas">Como funciona</a></li><li><a href="#laudo">O que vem no laudo</a></li><li><a href="#faq">Perguntas frequentes</a></li><li><a href="#relacionados">Serviços relacionados</a></li></ol></nav>
<div className="aside-card"><h4>Precisa de um laudo de fachada?</h4><p>Envie fotos para uma análise inicial ou agende a vistoria do engenheiro.</p>
<a className="btn btn-primary" href="#contato" data-track="cta_orcamento" data-pos="service-aside">Agendar vistoria técnica</a>{" "}
<WaLink servico="Teste de percussão e arrancamento" className="btn btn-outline" data-track="whatsapp_click" data-pos="service-aside" style={{"color": "var(--band-ink)", "borderColor": "var(--band-line)"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>WhatsApp</WaLink></div>
</div></aside>
</div>
</main>
<LeadSection formId="form-servicos-teste-de-percussao-e-arrancamento" checked="Teste de percussão com laudo" servico={SERVICO} />
    </>
  );
}
