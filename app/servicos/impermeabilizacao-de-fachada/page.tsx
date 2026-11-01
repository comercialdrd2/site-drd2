// Página gerada a partir do site estático (servicos/impermeabilizacao-de-fachada.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Impermeabilização de Fachada em São Paulo | DRD2 Fachadas",
  "description": "Impermeabilização de fachada com sistema definido por material: hidrorrepelentes, pinturas elastoméricas e membranas em platibandas e peitoris. São Paulo e Grande SP.",
  "path": "/servicos/impermeabilizacao-de-fachada/",
  "image": "/img/obras/gaudi-life-2-depois.webp"
});

const SERVICO = "Impermeabilização de fachada";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Impermeabilização de fachada",
    "serviceType": "impermeabilização de fachada",
    "description": "Impermeabilização de fachada com sistema definido por material: hidrorrepelentes, pinturas elastoméricas e membranas em platibandas e peitoris. São Paulo e Grande SP.",
    "url": "https://fachadas.drd2.com.br/servicos/impermeabilizacao-de-fachada/",
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
        "name": "Impermeabilização de fachada",
        "item": "https://fachadas.drd2.com.br/servicos/impermeabilizacao-de-fachada/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Impermeabilizante de fachada resolve qualquer infiltração?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. A infiltração precisa ser investigada, porque pode vir de trincas, juntas, esquadrias, coberturas ou instalações. A impermeabilização é parte da solução quando a água entra pela fachada."
        }
      },
      {
        "@type": "Question",
        "name": "O hidrorrepelente muda a cor do tijolo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Os hidrorrepelentes indicados para materiais aparentes são incolores e não formam película. Ainda assim, aplicamos uma amostra antes para aprovação."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a diferença entre impermeabilização e pintura?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A pintura comum protege, mas tem limite de elasticidade e permeabilidade. Os sistemas de impermeabilização são escolhidos para reduzir a entrada de água e acompanhar pequenas movimentações."
        }
      },
      {
        "@type": "Question",
        "name": "Precisa refazer a impermeabilização depois de um tempo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim. Todo sistema tem vida útil e deve ser inspecionado periodicamente. Os intervalos dependem do produto e da exposição."
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
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li><Link href="/servicos/">Serviços</Link></li><li aria-current="page">Impermeabilização de fachada</li></ol></nav>
<span className="eyebrow">Proteção e estanqueidade</span>
<h1>Impermeabilização de fachada</h1>
<p className="lead">Impermeabilizar uma fachada é reduzir a entrada de água pelos materiais e pelos pontos vulneráveis, como platibandas, peitoris e juntas. O sistema certo depende do acabamento de cada superfície.</p>
<div className="btn-row">
<a className="btn btn-primary" href="#contato" data-track="cta_orcamento" data-pos="service-hero">Solicitar vistoria e orçamento</a>{" "}
<WaLink servico="Impermeabilização de fachada" className="btn btn-outline" data-track="whatsapp_click" data-pos="service-hero"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink>
</div>
</div>
<aside className="spec" aria-label="Resumo técnico"><img src="/img/obras/gaudi-life-2-depois.webp" alt="Cond. Club Gaudí Life · Guarulhos · impermeabilização e pintura" width="864" height="1076" fetchPriority="high" /><div className="spec-cap">Cond. Club Gaudí Life · Guarulhos · impermeabilização e pintura · execução Grupo AWN</div><dl><div><dt>Indicado para</dt><dd>Fachadas pintadas, tijolo aparente, concreto aparente, pedras e elementos horizontais</dd></div><div><dt>Diagnóstico</dt><dd>Identificação dos pontos de entrada de água e do tipo de superfície</dd></div><div><dt>Acesso</dt><dd>Cordas, balancim ou andaime, conforme a fachada</dd></div><div><dt>Atendimento</dt><dd>São Paulo capital e Grande SP</dd></div></dl></aside>
</div>
</section>
<div className="wrap doc">
<div className="doc-main">
<section id="problema"><h2>O problema que este serviço resolve</h2><p>A água da chuva, empurrada pelo vento, encontra caminho por qualquer falha da fachada: microfissuras, rejuntes porosos, topos de platibanda sem proteção, peitoris sem caimento. Com o tempo, ela chega à alvenaria, ao reboco e às unidades.</p><p>A impermeabilização de fachada não é um produto único. É a combinação do tratamento dos pontos vulneráveis com uma proteção adequada a cada material, sem alterar além do necessário a aparência do edifício.</p></section>
<section id="o-que-e"><h2>O que é impermeabilização de fachada</h2><p>É a aplicação de sistemas que reduzem a absorção e a penetração de água na fachada. Em superfícies pintadas, usamos sistemas de pintura com maior proteção, como os elastoméricos. Em tijolo aparente, concreto aparente e pedras, usamos hidrorrepelentes, que reduzem a absorção sem formar película visível.</p><p>Elementos horizontais e de topo, como platibandas, muretas e peitoris, recebem tratamento próprio, com membranas ou detalhes que garantem o escoamento da água.</p></section>
<section id="quando"><h2>Quando é indicado</h2><ul className="ticks "><li><span>Fachadas com manchas de umidade após chuvas</span></li><li><span>Tijolo aparente ou concreto aparente que escurece quando molha</span></li><li><span>Platibandas e muretas com infiltração para as unidades de cobertura</span></li><li><span>Peitoris sem caimento ou pingadeira</span></li><li><span>Fachadas que serão pintadas e precisam de proteção reforçada</span></li></ul></section>
<section id="sinais"><h2>Sinais de deterioração</h2><ul className="ticks "><li><span>Paredes internas úmidas junto à fachada</span></li><li><span>Manchas que aparecem depois da chuva e somem no tempo seco</span></li><li><span>Eflorescência (manchas brancas) em tijolos e rejuntes</span></li><li><span>Escorrimentos abaixo de peitoris</span></li><li><span>Fungos em faces sombreadas</span></li></ul></section>
<section id="riscos"><h2>Riscos de adiar a manutenção</h2><ul className="ticks warn"><li><span>Umidade constante que degrada reboco e pintura</span></li><li><span>Infiltração nas unidades, com danos em acabamentos internos</span></li><li><span>Corrosão de armaduras em concreto exposto à água</span></li><li><span>Retrabalho de pintura em intervalos cada vez menores</span></li></ul>
<div className="inline-cta"><p>Reconheceu algum desses sinais? Envie fotos para uma análise inicial.</p><WaLink servico="Impermeabilização de fachada" className="btn btn-primary btn-sm" data-track="whatsapp_click" data-pos="service-inline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos</WaLink></div></section>
<section id="avaliacao"><h2>Como é feita a avaliação</h2><p>Na vistoria identificamos o tipo de cada superfície, os pontos de entrada de água prováveis e o histórico de infiltrações relatado pelos ocupantes. A impermeabilização só é especificada depois da correção de trincas, juntas e falhas de reboco, porque nenhum produto compensa uma base com falhas abertas.</p><p className="note">Não fazemos diagnóstico definitivo sem inspeção no local. Fotos e descrições ajudam a preparar a vistoria e a estimar o escopo.</p></section>
<section id="etapas"><h2>Etapas da execução</h2><ol className="proc"><li><b>Mapeamento dos pontos de entrada</b><span>Platibandas, peitoris, juntas, encontros com esquadrias e trincas.</span></li><li><b>Lavagem</b><span>Limpeza para garantir aderência e penetração dos produtos.</span></li><li><b>Correções</b><span>Tratamento de trincas, juntas e falhas de reboco ou rejunte.</span></li><li><b>Detalhes horizontais</b><span>Membranas, caimentos e pingadeiras em topos e peitoris.</span></li><li><b>Aplicação do sistema</b><span>Hidrorrepelente ou sistema de pintura impermeabilizante, conforme a superfície.</span></li><li><b>Inspeção e entrega</b><span>Verificação dos detalhes e orientações de manutenção.</span></li></ol></section>
<section id="materiais"><h2>Materiais e métodos possíveis</h2><div className="mat"><div><b>Hidrorrepelentes</b><span>Para tijolo, concreto aparente e pedras. Reduzem a absorção sem formar filme visível.</span></div><div><b>Pinturas elastoméricas</b><span>Formam filme elástico e contínuo sobre fachadas pintadas.</span></div><div><b>Membranas para topos e peitoris</b><span>Membranas acrílicas ou cimentícias em elementos horizontais.</span></div><div><b>Selantes</b><span>Para juntas e encontros entre materiais diferentes.</span></div></div><p className="note">A especificação final, com produtos, consumos e número de demãos, é definida depois da vistoria e descrita na proposta, seguindo as recomendações dos fabricantes.</p></section>
<section id="beneficios"><h2>Benefícios</h2><ul className="ticks "><li><span>Redução da entrada de água pela fachada</span></li><li><span>Proteção sem alterar a aparência de materiais aparentes</span></li><li><span>Maior durabilidade da pintura e dos revestimentos</span></li><li><span>Menos infiltrações nas unidades</span></li></ul></section>
<section id="imoveis"><h2>Tipos de imóveis atendidos</h2><ul className="pills"><li>Prédios residenciais</li><li>Edifícios em tijolo ou concreto aparente</li><li>Edifícios comerciais</li><li>Escolas</li><li>Hospitais</li><li>Casas e sobrados</li></ul></section>
<section id="diferenciais"><h2>Por que contratar a DRD2 Fachadas</h2><ul className="ticks "><li><span>Engenheiro civil e de segurança do trabalho como responsável técnico, da vistoria à entrega, com execução pela equipe do Grupo AWN</span></li><li><span>Teste de percussão e mapeamento antes de fechar o escopo</span></li><li><span>Proposta com itens separados, sistema, método de acesso e cronograma</span></li><li><span>Plano de segurança em altura apresentado antes do início da obra</span></li><li><span>ART (Anotação de Responsabilidade Técnica) emitida em todas as obras</span></li></ul></section>
<section id="atendimento"><h2>Área de atendimento</h2><p>Atendemos impermeabilização de fachada em toda a cidade de São Paulo, nas zonas Leste, Sul, Oeste, Norte e no Centro, e nos municípios da Grande SP, como Guarulhos, Osasco, Barueri, Alphaville, ABC, Taboão da Serra, Cotia, Mogi das Cruzes e Suzano.{" "}<Link href="/areas-atendidas/">Ver todas as áreas atendidas</Link>.</p></section>
<section id="faq"><h2>Perguntas frequentes</h2><div className="faq"><details><summary>Impermeabilizante de fachada resolve qualquer infiltração?</summary><div className="ans"><p>Não. A infiltração precisa ser investigada, porque pode vir de trincas, juntas, esquadrias, coberturas ou instalações. A impermeabilização é parte da solução quando a água entra pela fachada.</p></div></details><details><summary>O hidrorrepelente muda a cor do tijolo?</summary><div className="ans"><p>Os hidrorrepelentes indicados para materiais aparentes são incolores e não formam película. Ainda assim, aplicamos uma amostra antes para aprovação.</p></div></details><details><summary>Qual a diferença entre impermeabilização e pintura?</summary><div className="ans"><p>A pintura comum protege, mas tem limite de elasticidade e permeabilidade. Os sistemas de impermeabilização são escolhidos para reduzir a entrada de água e acompanhar pequenas movimentações.</p></div></details><details><summary>Precisa refazer a impermeabilização depois de um tempo?</summary><div className="ans"><p>Sim. Todo sistema tem vida útil e deve ser inspecionado periodicamente. Os intervalos dependem do produto e da exposição.</p></div></details></div></section>
<section id="relacionados"><h2>Serviços relacionados</h2><div className="related"><Link href="/servicos/tratamento-de-trincas-e-fissuras/"><b>Tratamento de trincas e fissuras</b><span>Técnica escolhida pelo tipo, abertura e atividade da trinca.</span></Link><Link href="/servicos/lavagem-de-fachada/"><b>Lavagem e limpeza de fachada</b><span>Hidrojateamento com pressão ajustada a cada material.</span></Link><Link href="/servicos/recuperacao-de-fachada/"><b>Recuperação e restauração de fachada</b><span>Reboco, trincas, concreto e infiltrações tratados a partir de diagnóstico.</span></Link><Link href="/#etapas"><b>Pintura de fachada</b><span>Pintura com lavagem, teste de percussão e correção da base antes da tinta.</span></Link></div></section>
</div>
<aside className="aside" aria-label="Navegação da página e contato"><div className="aside-inner">
<nav className="toc" aria-label="Nesta página"><h4>Nesta página</h4><ol><li><a href="#problema">O problema</a></li><li><a href="#o-que-e">O que é</a></li><li><a href="#quando">Quando é indicado</a></li><li><a href="#sinais">Sinais de deterioração</a></li><li><a href="#riscos">Riscos de adiar</a></li><li><a href="#avaliacao">Como avaliamos</a></li><li><a href="#etapas">Etapas da execução</a></li><li><a href="#materiais">Materiais e métodos</a></li><li><a href="#beneficios">Benefícios</a></li><li><a href="#imoveis">Imóveis atendidos</a></li><li><a href="#faq">Perguntas frequentes</a></li><li><a href="#relacionados">Serviços relacionados</a></li></ol></nav>
<div className="aside-card"><h4>Fale com um especialista em fachadas</h4><p>Envie fotos para uma análise inicial ou agende uma vistoria técnica no imóvel.</p>
<a className="btn btn-primary" href="#contato" data-track="cta_orcamento" data-pos="service-aside">Agendar vistoria técnica</a>{" "}
<WaLink servico="Impermeabilização de fachada" className="btn btn-outline" data-track="whatsapp_click" data-pos="service-aside" style={{"color": "var(--band-ink)", "borderColor": "var(--band-line)"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>WhatsApp</WaLink></div>
</div></aside>
</div>
</main>
<LeadSection formId="form-servicos-impermeabilizacao-de-fachada" checked="Lavagem ou impermeabilização" servico={SERVICO} />
    </>
  );
}
