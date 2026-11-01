// Página gerada a partir do site estático (servicos/lavagem-de-fachada.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Lavagem de Fachada em SP | Hidrojateamento Predial",
  "description": "Lavagem e limpeza de fachada com hidrojateamento e pressão ajustada a cada material. Remove fungos e sujeira e revela falhas. São Paulo e Grande SP.",
  "path": "/servicos/lavagem-de-fachada/",
  "image": "/img/obras/fine-morumbi-2-durante.webp"
});

const SERVICO = "Lavagem e limpeza de fachada";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lavagem e limpeza de fachada",
    "serviceType": "lavagem de fachada",
    "description": "Lavagem e limpeza de fachada com hidrojateamento e pressão ajustada a cada material. Remove fungos e sujeira e revela falhas. São Paulo e Grande SP.",
    "url": "https://fachadas.drd2.com.br/servicos/lavagem-de-fachada/",
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
        "name": "Lavagem e limpeza de fachada",
        "item": "https://fachadas.drd2.com.br/servicos/lavagem-de-fachada/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "De quanto em quanto tempo lavar a fachada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende da exposição à poluição, da face do prédio e do tipo de acabamento. O ideal é incluir a lavagem no plano de manutenção do edifício e ajustar o intervalo conforme o resultado das inspeções."
        }
      },
      {
        "@type": "Question",
        "name": "A lavagem pode danificar a fachada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pressão excessiva pode arrancar pintura frágil, rejuntes ou peças soltas. Por isso ajustamos o método a cada material e protegemos as áreas mais sensíveis."
        }
      },
      {
        "@type": "Question",
        "name": "Entra água nas unidades durante a lavagem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As esquadrias são protegidas e os moradores recebem aviso prévio para manter janelas fechadas durante a execução."
        }
      },
      {
        "@type": "Question",
        "name": "Vale a pena lavar se a fachada vai ser pintada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. A lavagem é a primeira etapa da pintura e revela as falhas que precisam ser corrigidas antes da tinta."
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
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li><Link href="/servicos/">Serviços</Link></li><li aria-current="page">Lavagem e limpeza de fachada</li></ol></nav>
<span className="eyebrow">Proteção e estanqueidade</span>
<h1>Lavagem e limpeza de fachada</h1>
<p className="lead">A lavagem remove fungos, poluição e sujeira impregnada, devolve a aparência da fachada e mostra o estado real dos materiais. Pode ser um serviço de manutenção isolado ou a primeira etapa da pintura e da recuperação.</p>
<div className="btn-row">
<a className="btn btn-primary" href="#contato" data-track="cta_orcamento" data-pos="service-hero">Solicitar vistoria e orçamento</a>{" "}
<WaLink servico="Lavagem e limpeza de fachada" className="btn btn-outline" data-track="whatsapp_click" data-pos="service-hero"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink>
</div>
</div>
<aside className="spec" aria-label="Resumo técnico"><img src="/img/obras/fine-morumbi-2-durante.webp" alt="Ed. Fine Morumbi · Vila Andrade · execução em altura" width="399" height="607" fetchPriority="high" /><div className="spec-cap">Ed. Fine Morumbi · Vila Andrade · execução em altura · execução Grupo AWN</div><dl><div><dt>Indicado para</dt><dd>Fachadas pintadas, com pastilhas, cerâmicas, pedras ou concreto aparente</dd></div><div><dt>Diagnóstico</dt><dd>Identificação dos materiais e de áreas frágeis antes da lavagem</dd></div><div><dt>Acesso</dt><dd>Cordas ou balancim, com proteção de esquadrias e áreas abaixo</dd></div><div><dt>Atendimento</dt><dd>São Paulo capital e Grande SP</dd></div></dl></aside>
</div>
</section>
<div className="wrap doc">
<div className="doc-main">
<section id="problema"><h2>O problema que este serviço resolve</h2><p>Em São Paulo, poluição, chuva e umidade deixam as fachadas escuras e manchadas em pouco tempo, principalmente nas faces com menos sol. Fungos e sujeira acumulada não são apenas um problema estético: eles retêm umidade e aceleram a degradação da pintura e dos rejuntes.</p><p>Uma lavagem bem feita devolve a aparência do prédio e permite enxergar o que estava escondido sob a sujeira, como fissuras, pastilhas soltas e falhas nos selantes.</p></section>
<section id="o-que-e"><h2>O que é lavagem e limpeza de fachada</h2><p>Lavagem de fachada é a limpeza da superfície externa do edifício com água pressurizada (hidrojateamento) e, quando necessário, produtos de limpeza compatíveis com cada material. A pressão e o método são ajustados para não danificar pintura, rejuntes ou revestimentos frágeis.</p><p>Pode ser contratada como manutenção periódica ou como etapa de preparo para pintura, impermeabilização e recuperação.</p></section>
<section id="quando"><h2>Quando é indicado</h2><ul className="ticks "><li><span>Fachadas escurecidas por poluição e fuligem</span></li><li><span>Fungos e limo nas faces mais úmidas</span></li><li><span>Revestimentos cerâmicos e pastilhas que perderam o brilho</span></li><li><span>Preparação obrigatória antes de pintar ou impermeabilizar</span></li><li><span>Manutenção periódica prevista no plano do prédio</span></li></ul></section>
<section id="sinais"><h2>Sinais de deterioração</h2><ul className="ticks "><li><span>Manchas escuras escorrendo abaixo de peitoris e janelas</span></li><li><span>Áreas esverdeadas ou pretas nas faces sombreadas</span></li><li><span>Rejuntes escurecidos</span></li><li><span>Diferença de tonalidade entre partes da fachada</span></li><li><span>Aparência envelhecida mesmo com pintura recente</span></li></ul></section>
<section id="riscos"><h2>Riscos de adiar a manutenção</h2><ul className="ticks warn"><li><span>Fungos retêm umidade e degradam a pintura mais rápido</span></li><li><span>Sujeira impede a avaliação real do estado da fachada</span></li><li><span>Pintura sobre superfície suja tem aderência comprometida</span></li><li><span>Imóvel com aparência de manutenção atrasada</span></li></ul>
<div className="inline-cta"><p>Reconheceu algum desses sinais? Envie fotos para uma análise inicial.</p><WaLink servico="Lavagem e limpeza de fachada" className="btn btn-primary btn-sm" data-track="whatsapp_click" data-pos="service-inline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos</WaLink></div></section>
<section id="avaliacao"><h2>Como é feita a avaliação</h2><p>Antes de lavar, identificamos os materiais de cada face, o estado da pintura e a existência de peças soltas, para definir a pressão, o bico e os produtos adequados. Áreas frágeis recebem tratamento diferenciado e as esquadrias são protegidas contra a entrada de água.</p><p className="note">Não fazemos diagnóstico definitivo sem inspeção no local. Fotos e descrições ajudam a preparar a vistoria e a estimar o escopo.</p></section>
<section id="etapas"><h2>Etapas da execução</h2><ol className="proc"><li><b>Identificação dos materiais</b><span>Definição de pressão e produtos por tipo de superfície.</span></li><li><b>Proteção</b><span>Vedação de esquadrias, proteção de jardins, veículos e áreas comuns.</span></li><li><b>Aplicação de produtos</b><span>Quando indicado, aplicação de produto para fungos ou limpeza específica.</span></li><li><b>Hidrojateamento</b><span>Lavagem de cima para baixo, por faixas, com pressão controlada.</span></li><li><b>Enxágue e inspeção</b><span>Remoção de resíduos e registro de falhas reveladas pela lavagem.</span></li><li><b>Relatório</b><span>Indicação das áreas que precisam de reparo ou proteção.</span></li></ol></section>
<section id="materiais"><h2>Materiais e métodos possíveis</h2><div className="mat"><div><b>Lavadoras de alta pressão</b><span>Com regulagem de pressão e bicos adequados a cada material.</span></div><div><b>Produtos para fungos e limo</b><span>Aplicados quando há contaminação biológica.</span></div><div><b>Detergentes compatíveis</b><span>Escolhidos para não manchar pedras, pastilhas ou pintura.</span></div><div><b>Proteção de esquadrias</b><span>Fitas e lonas para evitar entrada de água nas unidades.</span></div></div><p className="note">A especificação final, com produtos, consumos e número de demãos, é definida depois da vistoria e descrita na proposta, seguindo as recomendações dos fabricantes.</p></section>
<section id="beneficios"><h2>Benefícios</h2><ul className="ticks "><li><span>Fachada com aparência renovada sem necessidade imediata de pintura</span></li><li><span>Identificação de falhas escondidas pela sujeira</span></li><li><span>Base limpa para pintura e impermeabilização</span></li><li><span>Menos fungos e menor retenção de umidade</span></li></ul></section>
<section id="imoveis"><h2>Tipos de imóveis atendidos</h2><ul className="pills"><li>Condomínios residenciais</li><li>Edifícios corporativos</li><li>Hotéis</li><li>Hospitais e clínicas</li><li>Escolas</li><li>Lojas e centros comerciais</li></ul></section>
<section id="diferenciais"><h2>Por que contratar a DRD2 Fachadas</h2><ul className="ticks "><li><span>Engenheiro civil e de segurança do trabalho como responsável técnico, da vistoria à entrega, com execução pela equipe do Grupo AWN</span></li><li><span>Teste de percussão e mapeamento antes de fechar o escopo</span></li><li><span>Proposta com itens separados, sistema, método de acesso e cronograma</span></li><li><span>Plano de segurança em altura apresentado antes do início da obra</span></li><li><span>ART (Anotação de Responsabilidade Técnica) emitida em todas as obras</span></li></ul></section>
<section id="atendimento"><h2>Área de atendimento</h2><p>Atendemos lavagem e limpeza de fachada em toda a cidade de São Paulo, nas zonas Leste, Sul, Oeste, Norte e no Centro, e nos municípios da Grande SP, como Guarulhos, Osasco, Barueri, Alphaville, ABC, Taboão da Serra, Cotia, Mogi das Cruzes e Suzano.{" "}<Link href="/areas-atendidas/">Ver todas as áreas atendidas</Link>.</p></section>
<section id="faq"><h2>Perguntas frequentes</h2><div className="faq"><details><summary>De quanto em quanto tempo lavar a fachada?</summary><div className="ans"><p>Depende da exposição à poluição, da face do prédio e do tipo de acabamento. O ideal é incluir a lavagem no plano de manutenção do edifício e ajustar o intervalo conforme o resultado das inspeções.</p></div></details><details><summary>A lavagem pode danificar a fachada?</summary><div className="ans"><p>Pressão excessiva pode arrancar pintura frágil, rejuntes ou peças soltas. Por isso ajustamos o método a cada material e protegemos as áreas mais sensíveis.</p></div></details><details><summary>Entra água nas unidades durante a lavagem?</summary><div className="ans"><p>As esquadrias são protegidas e os moradores recebem aviso prévio para manter janelas fechadas durante a execução.</p></div></details><details><summary>Vale a pena lavar se a fachada vai ser pintada?</summary><div className="ans"><p>Sim. A lavagem é a primeira etapa da pintura e revela as falhas que precisam ser corrigidas antes da tinta.</p></div></details></div></section>
<section id="relacionados"><h2>Serviços relacionados</h2><div className="related"><Link href="/#etapas"><b>Pintura de fachada</b><span>Pintura com lavagem, teste de percussão e correção da base antes da tinta.</span></Link><Link href="/servicos/impermeabilizacao-de-fachada/"><b>Impermeabilização de fachada</b><span>Hidrorrepelentes, pinturas elastoméricas e membranas por superfície.</span></Link><Link href="/servicos/recuperacao-de-fachada-com-pastilhas/"><b>Recuperação de fachada com pastilhas</b><span>Mapeamento, reassentamento, reposição de peças e rejunte.</span></Link><Link href="/servicos/aplicacao-de-textura-em-fachada/"><b>Aplicação de textura em fachada</b><span>Texturas acrílicas, grafiato e projetadas sobre base corrigida.</span></Link></div></section>
</div>
<aside className="aside" aria-label="Navegação da página e contato"><div className="aside-inner">
<nav className="toc" aria-label="Nesta página"><h4>Nesta página</h4><ol><li><a href="#problema">O problema</a></li><li><a href="#o-que-e">O que é</a></li><li><a href="#quando">Quando é indicado</a></li><li><a href="#sinais">Sinais de deterioração</a></li><li><a href="#riscos">Riscos de adiar</a></li><li><a href="#avaliacao">Como avaliamos</a></li><li><a href="#etapas">Etapas da execução</a></li><li><a href="#materiais">Materiais e métodos</a></li><li><a href="#beneficios">Benefícios</a></li><li><a href="#imoveis">Imóveis atendidos</a></li><li><a href="#faq">Perguntas frequentes</a></li><li><a href="#relacionados">Serviços relacionados</a></li></ol></nav>
<div className="aside-card"><h4>Fale com um especialista em fachadas</h4><p>Envie fotos para uma análise inicial ou agende uma vistoria técnica no imóvel.</p>
<a className="btn btn-primary" href="#contato" data-track="cta_orcamento" data-pos="service-aside">Agendar vistoria técnica</a>{" "}
<WaLink servico="Lavagem e limpeza de fachada" className="btn btn-outline" data-track="whatsapp_click" data-pos="service-aside" style={{"color": "var(--band-ink)", "borderColor": "var(--band-line)"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>WhatsApp</WaLink></div>
</div></aside>
</div>
</main>
<LeadSection formId="form-servicos-lavagem-de-fachada" checked="Lavagem ou impermeabilização" servico={SERVICO} />
    </>
  );
}
