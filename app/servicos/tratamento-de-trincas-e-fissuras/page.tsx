// Página gerada a partir do site estático (servicos/tratamento-de-trincas-e-fissuras.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Trincas e Fissuras na Fachada em SP | DRD2 Fachadas",
  "description": "Tratamento de trincas e fissuras em fachadas com avaliação da causa e técnica adequada a cada caso. Quando é estético e quando exige análise. São Paulo e Grande SP.",
  "path": "/servicos/tratamento-de-trincas-e-fissuras/",
  "image": "/img/obras/solar-de-malta-1-durante.webp"
});

const SERVICO = "Tratamento de trincas e fissuras";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tratamento de trincas e fissuras",
    "serviceType": "tratamento de trincas em fachada",
    "description": "Tratamento de trincas e fissuras em fachadas com avaliação da causa e técnica adequada a cada caso. Quando é estético e quando exige análise. São Paulo e Grande SP.",
    "url": "https://fachadas.drd2.com.br/servicos/tratamento-de-trincas-e-fissuras/",
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
        "name": "Tratamento de trincas e fissuras",
        "item": "https://fachadas.drd2.com.br/servicos/tratamento-de-trincas-e-fissuras/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual a diferença entre trinca, fissura e rachadura?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A diferença mais citada é a abertura: fissuras são mais finas, trincas intermediárias e rachaduras mais largas. Para o tratamento, o mais importante é a causa e se a abertura está estável ou em movimento."
        }
      },
      {
        "@type": "Question",
        "name": "Toda trinca na fachada é perigosa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. Muitas são superficiais. Mas trincas inclinadas, com abertura crescente ou acompanhadas de deformações precisam de avaliação técnica no local."
        }
      },
      {
        "@type": "Question",
        "name": "Por que a trinca volta depois da pintura?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Geralmente porque a causa continua ativa e o tratamento usado não acompanha a movimentação. Selantes elásticos e telas de reforço reduzem esse problema."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês fazem avaliação estrutural?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Quando a vistoria encontra indícios de origem estrutural, indicamos a avaliação complementar por profissional habilitado antes do tratamento."
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
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li><Link href="/servicos/">Serviços</Link></li><li aria-current="page">Tratamento de trincas e fissuras</li></ol></nav>
<span className="eyebrow">Proteção e estanqueidade</span>
<h1>Tratamento de trincas e fissuras em fachadas</h1>
<p className="lead">Fissuras e trincas são portas de entrada para a água e sinais de movimentação da fachada. O tratamento correto depende do tipo, da abertura e da causa de cada uma.</p>
<div className="btn-row">
<a className="btn btn-primary" href="#contato" data-track="cta_orcamento" data-pos="service-hero">Solicitar vistoria e orçamento</a>{" "}
<WaLink servico="Tratamento de trincas e fissuras" className="btn btn-outline" data-track="whatsapp_click" data-pos="service-hero"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink>
</div>
</div>
<aside className="spec" aria-label="Resumo técnico"><img src="/img/obras/solar-de-malta-1-durante.webp" alt="Cond. Solar de Malta · Vila Nova Conceição · execução em altura" width="257" height="869" fetchPriority="high" /><div className="spec-cap">Cond. Solar de Malta · Vila Nova Conceição · execução em altura · execução Grupo AWN</div><dl><div><dt>Indicado para</dt><dd>Fachadas com fissuras, trincas ou rachaduras visíveis</dd></div><div><dt>Diagnóstico</dt><dd>Classificação por tipo, abertura, direção e atividade</dd></div><div><dt>Acesso</dt><dd>Cordas ou balancim para tratamento em toda a extensão</dd></div><div><dt>Atendimento</dt><dd>São Paulo capital e Grande SP</dd></div></dl></aside>
</div>
</section>
<div className="wrap doc">
<div className="doc-main">
<section id="problema"><h2>O problema que este serviço resolve</h2><p>Quase toda fachada tem fissuras. Algumas são superficiais e aparecem apenas na pintura. Outras atravessam o reboco e deixam a água entrar. Outras ainda indicam movimentações da estrutura que precisam de atenção técnica.</p><p>Tratar todas do mesmo jeito é o motivo de muitas trincas reaparecerem pouco depois da pintura. Antes de escolher o método, avaliamos o tipo, a abertura, a direção e se a trinca continua se movimentando.</p></section>
<section id="o-que-e"><h2>O que é tratamento de trincas e fissuras</h2><p>É o tratamento de fissuras e trincas em fachadas, com técnicas que variam conforme o caso: aplicação de sistemas elásticos sobre fissuras finas, abertura e preenchimento com selante, reforço com tela, e encaminhamento para avaliação estrutural quando há indícios de problema na estrutura.</p><p>No mercado, costuma-se chamar de fissura a abertura mais fina, de trinca a intermediária e de rachadura a mais larga. Mais importante que o nome, porém, é entender a causa e se a abertura está estável ou ativa.</p></section>
<section id="quando"><h2>Quando é indicado</h2><ul className="ticks "><li><span>Fissuras em mapa espalhadas pela pintura</span></li><li><span>Trincas em cantos de janelas e portas</span></li><li><span>Trincas horizontais entre a estrutura e a alvenaria</span></li><li><span>Trincas que reaparecem depois de cada pintura</span></li><li><span>Fissuras por onde há suspeita de infiltração</span></li></ul></section>
<section id="sinais"><h2>Sinais de deterioração</h2><ul className="ticks "><li><span>Linhas finas formando uma rede na pintura</span></li><li><span>Trincas inclinadas partindo dos cantos das esquadrias</span></li><li><span>Trincas horizontais na altura das lajes</span></li><li><span>Aberturas por onde é possível ver a alvenaria</span></li><li><span>Manchas de umidade acompanhando o traçado da trinca</span></li></ul></section>
<section id="riscos"><h2>Riscos de adiar a manutenção</h2><ul className="ticks warn"><li><span>Entrada de água e degradação do reboco</span></li><li><span>Desprendimento de partes do revestimento junto às trincas</span></li><li><span>Agravamento de problemas estruturais não investigados</span></li><li><span>Retrabalho de pintura sobre trincas que voltam a abrir</span></li></ul>
<div className="inline-cta"><p>Reconheceu algum desses sinais? Envie fotos para uma análise inicial.</p><WaLink servico="Tratamento de trincas e fissuras" className="btn btn-primary btn-sm" data-track="whatsapp_click" data-pos="service-inline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos</WaLink></div></section>
<section id="avaliacao"><h2>Como é feita a avaliação</h2><p>Na vistoria registramos a posição, a direção, a abertura aproximada e a extensão das trincas, e observamos se há sinais de atividade, como bordas desniveladas ou trincas em reparos recentes. Trincas com indícios de origem estrutural são indicadas para avaliação complementar antes do tratamento estético.</p><p className="note">Não fazemos diagnóstico definitivo sem inspeção no local. Fotos e descrições ajudam a preparar a vistoria e a estimar o escopo.</p></section>
<section id="etapas"><h2>Etapas da execução</h2><ol className="proc"><li><b>Mapeamento e classificação</b><span>Registro de cada trinca por tipo, abertura e provável causa.</span></li><li><b>Definição da técnica</b><span>Sistema elástico, abertura com selante, reforço com tela ou avaliação estrutural.</span></li><li><b>Abertura e limpeza</b><span>Abertura em V quando indicado, remoção de partes soltas e limpeza.</span></li><li><b>Preenchimento</b><span>Aplicação de selante ou argamassa compatível com a movimentação.</span></li><li><b>Reforço</b><span>Tela de poliéster ou similar embutida no sistema, quando necessário.</span></li><li><b>Acabamento</b><span>Regularização e pintura integrada ao restante da fachada.</span></li></ol></section>
<section id="materiais"><h2>Materiais e métodos possíveis</h2><div className="mat"><div><b>Selantes elásticos</b><span>Poliuretano ou acrílico elastomérico, conforme a movimentação esperada.</span></div><div><b>Telas de reforço</b><span>Distribuem as tensões e reduzem o reaparecimento da trinca.</span></div><div><b>Massas e argamassas de regularização</b><span>Para nivelar a região tratada.</span></div><div><b>Pinturas elastoméricas</b><span>Acompanham pequenas movimentações das fissuras finas.</span></div></div><p className="note">A especificação final, com produtos, consumos e número de demãos, é definida depois da vistoria e descrita na proposta, seguindo as recomendações dos fabricantes.</p></section>
<section id="beneficios"><h2>Benefícios</h2><ul className="ticks "><li><span>Trincas tratadas com a técnica adequada a cada tipo</span></li><li><span>Menor chance de reaparecimento após a pintura</span></li><li><span>Redução da entrada de água</span></li><li><span>Identificação de casos que exigem avaliação estrutural</span></li></ul></section>
<section id="imoveis"><h2>Tipos de imóveis atendidos</h2><ul className="pills"><li>Prédios residenciais</li><li>Edifícios comerciais</li><li>Casas e sobrados</li><li>Muros e platibandas</li><li>Escolas e hospitais</li><li>Galpões</li></ul></section>
<section id="diferenciais"><h2>Por que contratar a DRD2 Fachadas</h2><ul className="ticks "><li><span>Engenheiro civil e de segurança do trabalho como responsável técnico, da vistoria à entrega, com execução pela equipe do Grupo AWN</span></li><li><span>Teste de percussão e mapeamento antes de fechar o escopo</span></li><li><span>Proposta com itens separados, sistema, método de acesso e cronograma</span></li><li><span>Plano de segurança em altura apresentado antes do início da obra</span></li><li><span>ART (Anotação de Responsabilidade Técnica) emitida em todas as obras</span></li></ul></section>
<section id="atendimento"><h2>Área de atendimento</h2><p>Atendemos tratamento de trincas e fissuras em toda a cidade de São Paulo, nas zonas Leste, Sul, Oeste, Norte e no Centro, e nos municípios da Grande SP, como Guarulhos, Osasco, Barueri, Alphaville, ABC, Taboão da Serra, Cotia, Mogi das Cruzes e Suzano.{" "}<Link href="/areas-atendidas/">Ver todas as áreas atendidas</Link>.</p></section>
<section id="faq"><h2>Perguntas frequentes</h2><div className="faq"><details><summary>Qual a diferença entre trinca, fissura e rachadura?</summary><div className="ans"><p>A diferença mais citada é a abertura: fissuras são mais finas, trincas intermediárias e rachaduras mais largas. Para o tratamento, o mais importante é a causa e se a abertura está estável ou em movimento.</p></div></details><details><summary>Toda trinca na fachada é perigosa?</summary><div className="ans"><p>Não. Muitas são superficiais. Mas trincas inclinadas, com abertura crescente ou acompanhadas de deformações precisam de avaliação técnica no local.</p></div></details><details><summary>Por que a trinca volta depois da pintura?</summary><div className="ans"><p>Geralmente porque a causa continua ativa e o tratamento usado não acompanha a movimentação. Selantes elásticos e telas de reforço reduzem esse problema.</p></div></details><details><summary>Vocês fazem avaliação estrutural?</summary><div className="ans"><p>Quando a vistoria encontra indícios de origem estrutural, indicamos a avaliação complementar por profissional habilitado antes do tratamento.</p></div></details></div></section>
<section id="relacionados"><h2>Serviços relacionados</h2><div className="related"><Link href="/servicos/recuperacao-de-fachada/"><b>Recuperação e restauração de fachada</b><span>Reboco, trincas, concreto e infiltrações tratados a partir de diagnóstico.</span></Link><Link href="/#etapas"><b>Pintura de fachada</b><span>Pintura com lavagem, teste de percussão e correção da base antes da tinta.</span></Link><Link href="/servicos/impermeabilizacao-de-fachada/"><b>Impermeabilização de fachada</b><span>Hidrorrepelentes, pinturas elastoméricas e membranas por superfície.</span></Link><Link href="/servicos/teste-de-percussao-e-arrancamento/"><b>Teste de percussão e arrancamento</b><span>Teste em 100% da fachada e ensaio de aderência, com laudo e ART.</span></Link></div></section>
<section id="blog"><h2>Leia no blog</h2><div className="post-grid two"><Link className="post-card" href="/blog/trinca-na-fachada-quando-se-preocupar/"><span className="pc-media"><img src="/img/blog/trinca-na-fachada-quando-se-preocupar.webp" alt="Ilustração: os quatro tipos de trinca mais comuns em fachadas" width="1200" height="750" loading="lazy" decoding="async" /></span><span className="pc-body"><span className="k">Diagnóstico</span><b>Trinca na fachada: quando é só estética e quando chamar um engenheiro</b><small>Fissura na pintura, trinca no canto da janela ou rachadura inclinada? Entenda os tipos, os sinais de alerta e quando a avaliação de um engenheiro é necessária.</small><span className="pc-meta">6 min de leitura</span></span></Link></div></section>
</div>
<aside className="aside" aria-label="Navegação da página e contato"><div className="aside-inner">
<nav className="toc" aria-label="Nesta página"><h4>Nesta página</h4><ol><li><a href="#problema">O problema</a></li><li><a href="#o-que-e">O que é</a></li><li><a href="#quando">Quando é indicado</a></li><li><a href="#sinais">Sinais de deterioração</a></li><li><a href="#riscos">Riscos de adiar</a></li><li><a href="#avaliacao">Como avaliamos</a></li><li><a href="#etapas">Etapas da execução</a></li><li><a href="#materiais">Materiais e métodos</a></li><li><a href="#beneficios">Benefícios</a></li><li><a href="#imoveis">Imóveis atendidos</a></li><li><a href="#faq">Perguntas frequentes</a></li><li><a href="#relacionados">Serviços relacionados</a></li><li><a href="#blog">Leia no blog</a></li></ol></nav>
<div className="aside-card"><h4>Fale com um especialista em fachadas</h4><p>Envie fotos para uma análise inicial ou agende uma vistoria técnica no imóvel.</p>
<a className="btn btn-primary" href="#contato" data-track="cta_orcamento" data-pos="service-aside">Agendar vistoria técnica</a>{" "}
<WaLink servico="Tratamento de trincas e fissuras" className="btn btn-outline" data-track="whatsapp_click" data-pos="service-aside" style={{"color": "var(--band-ink)", "borderColor": "var(--band-line)"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>WhatsApp</WaLink></div>
</div></aside>
</div>
</main>
<LeadSection formId="form-servicos-tratamento-de-trincas-e-fissuras" checked="Recuperação ou restauração (reboco, trincas, pastilhas)" servico={SERVICO} />
    </>
  );
}
