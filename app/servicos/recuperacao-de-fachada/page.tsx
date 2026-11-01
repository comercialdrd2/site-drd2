// Página gerada a partir do site estático (servicos/recuperacao-de-fachada.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import WaLink from "@/components/WaLink";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Recuperação e Restauração de Fachada em SP | DRD2 Fachadas",
  "description": "Recuperação de fachada com diagnóstico técnico: reboco solto, trincas, concreto deteriorado e infiltrações tratados na origem. São Paulo e Grande SP.",
  "path": "/servicos/recuperacao-de-fachada/",
  "image": "/img/obras/paulistania-1-antes.webp"
});

const SERVICO = "Recuperação e restauração de fachada";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Recuperação e restauração de fachada",
    "serviceType": "recuperação de fachada",
    "description": "Recuperação de fachada com diagnóstico técnico: reboco solto, trincas, concreto deteriorado e infiltrações tratados na origem. São Paulo e Grande SP.",
    "url": "https://fachadas.drd2.com.br/servicos/recuperacao-de-fachada/",
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
        "name": "Recuperação e restauração de fachada",
        "item": "https://fachadas.drd2.com.br/servicos/recuperacao-de-fachada/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Recuperação de fachada é a mesma coisa que reforma de fachada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No uso comum, sim. Tecnicamente, recuperação é o termo usado quando a obra corrige manifestações patológicas para devolver o desempenho da fachada."
        }
      },
      {
        "@type": "Question",
        "name": "Como saber se a trinca é estrutural?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Só uma avaliação no local pode indicar. Trincas inclinadas, com abertura crescente ou acompanhadas de deformações merecem análise do responsável técnico, que pode recomendar avaliação estrutural complementar."
        }
      },
      {
        "@type": "Question",
        "name": "O orçamento pode mudar durante a obra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As quantidades de reparo são estimadas na vistoria. Como parte da fachada só é acessível com equipamento, a proposta explica como as quantidades serão confirmadas e aprovadas antes de qualquer serviço adicional."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo dura uma obra de recuperação?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende da área, da quantidade de reparos, do número de torres e do método de acesso. O cronograma é apresentado na proposta."
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
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li><Link href="/servicos/">Serviços</Link></li><li aria-current="page">Recuperação e restauração de fachada</li></ol></nav>
<span className="eyebrow">Recuperação e restauração</span>
<h1>Recuperação e restauração de fachada a partir de diagnóstico técnico</h1>
<p className="lead">Quando a fachada apresenta reboco solto, trincas, concreto danificado ou infiltração, pintar não basta. A recuperação trata cada manifestação na origem e devolve à fachada a função de proteger o edifício.</p>
<div className="btn-row">
<a className="btn btn-primary" href="#contato" data-track="cta_orcamento" data-pos="service-hero">Solicitar vistoria e orçamento</a>{" "}
<WaLink servico="Recuperação e restauração de fachada" className="btn btn-outline" data-track="whatsapp_click" data-pos="service-hero"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos pelo WhatsApp</WaLink>
</div>
</div>
<aside className="spec" aria-label="Resumo técnico"><img src="/img/obras/paulistania-1-antes.webp" alt="Ed. Paulistania Flat · Jardim Paulista · danos em balanços antes da recuperação" width="317" height="394" fetchPriority="high" /><div className="spec-cap">Ed. Paulistania Flat · Jardim Paulista · danos em balanços antes da recuperação · execução Grupo AWN</div><dl><div><dt>Indicado para</dt><dd>Fachadas com manifestações patológicas que vão além do desgaste da pintura</dd></div><div><dt>Diagnóstico</dt><dd>Vistoria, teste de percussão, mapeamento e registro fotográfico</dd></div><div><dt>Acesso</dt><dd>Cordas ou balancim, com isolamento das áreas abaixo</dd></div><div><dt>Atendimento</dt><dd>São Paulo capital e Grande SP</dd></div></dl></aside>
</div>
</section>
<div className="wrap doc">
<div className="doc-main">
<section id="problema"><h2>O problema que este serviço resolve</h2><p>A fachada é a pele do edifício. Ela protege a estrutura, as alvenarias e as unidades da chuva, do sol e da variação de temperatura. Quando aparecem trincas, reboco com som cavo, concreto lascado ou ferragem exposta, essa proteção já está falhando.</p><p>A recuperação de fachada começa pelo diagnóstico: entender o que está acontecendo, onde e por quê. Só depois definimos o método de correção de cada problema e o acabamento final.</p></section>
<section id="o-que-e"><h2>O que é recuperação de fachada</h2><p>Recuperação de fachada é o conjunto de serviços que corrige as manifestações patológicas da fachada e devolve seu desempenho: remoção de partes soltas, recomposição de reboco, tratamento de trincas, reparo de concreto deteriorado, revisão de juntas e selantes e aplicação de um sistema de proteção e acabamento.</p><p>Quando o diagnóstico encontra concreto com armadura exposta ou indícios de problema estrutural, o reparo segue procedimento específico e pode exigir avaliação estrutural complementar.</p></section>
<section id="restauracao"><h2>Recuperação ou restauração?</h2><p>Na recuperação, o objetivo é tratar trincas, reboco solto, concreto danificado e infiltrações e devolver à fachada a função de proteger o prédio. Quando o edifício tem pastilhas, pedras, frisos ou cores originais que valem ser mantidos, a obra também preserva esses elementos: recolocamos as peças, buscamos reposição compatível e recompomos os detalhes do projeto original.</p></section><section id="quando"><h2>Quando é indicado</h2><ul className="ticks "><li><span>Fachadas com reboco solto ou som cavo no teste de percussão</span></li><li><span>Trincas que se repetem depois de pinturas anteriores</span></li><li><span>Concreto lascado em vigas, lajes de sacada e balanços</span></li><li><span>Infiltrações recorrentes nas unidades</span></li><li><span>Prédios que nunca passaram por uma recuperação completa</span></li></ul></section>
<section id="sinais"><h2>Sinais de deterioração</h2><ul className="ticks "><li><span>Fragmentos de reboco ou concreto encontrados no chão</span></li><li><span>Ferragem aparente ou manchas de ferrugem no concreto</span></li><li><span>Trincas inclinadas, horizontais ou em cantos de janelas</span></li><li><span>Estufamentos e bolhas grandes no reboco</span></li><li><span>Manchas de umidade que acompanham a mesma região há anos</span></li></ul></section>
<section id="riscos"><h2>Riscos de adiar a manutenção</h2><ul className="ticks warn"><li><span>Queda de fragmentos sobre pessoas, veículos e áreas comuns</span></li><li><span>Corrosão progressiva das armaduras em concreto exposto</span></li><li><span>Infiltrações que danificam acabamentos internos e geram conflitos</span></li><li><span>Custo maior a cada ano de adiamento, porque o dano se espalha</span></li></ul>
<div className="inline-cta"><p>Reconheceu algum desses sinais? Envie fotos para uma análise inicial.</p><WaLink servico="Recuperação e restauração de fachada" className="btn btn-primary btn-sm" data-track="whatsapp_click" data-pos="service-inline"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>Enviar fotos</WaLink></div></section>
<section id="avaliacao"><h2>Como é feita a avaliação</h2><p>A recuperação depende de um bom diagnóstico. Na vistoria, o responsável técnico percorre a fachada, registra as manifestações e realiza o teste de percussão. Quando o acesso a toda a fachada só é possível com equipamento, o mapeamento completo é feito no início da obra e as quantidades são confirmadas com o cliente.</p><p className="note">Não fazemos diagnóstico definitivo sem inspeção no local. Fotos e descrições ajudam a preparar a vistoria e a estimar o escopo.</p></section>
<section id="etapas"><h2>Etapas da execução</h2><ol className="proc"><li><b>Diagnóstico e mapeamento</b><span>Registro das manifestações por face, com fotos e marcação das áreas a tratar.</span></li><li><b>Definição dos métodos</b><span>Escolha da técnica para cada tipo de problema: reboco, trincas, concreto, juntas.</span></li><li><b>Proteção e acesso</b><span>Isolamento das áreas abaixo e instalação do método de acesso.</span></li><li><b>Remoção de partes comprometidas</b><span>Retirada de reboco solto, concreto deteriorado e materiais sem aderência.</span></li><li><b>Reparos</b><span>Recomposição de reboco, tratamento de armaduras e argamassas de reparo, tratamento de trincas e juntas.</span></li><li><b>Proteção e acabamento</b><span>Aplicação do sistema de pintura, textura ou proteção definido.</span></li><li><b>Relatório e entrega</b><span>Registro fotográfico das etapas e orientações de manutenção.</span></li></ol></section>
<section id="materiais"><h2>Materiais e métodos possíveis</h2><div className="mat"><div><b>Argamassas de recomposição</b><span>Para refazer o reboco com aderência e espessura adequadas.</span></div><div><b>Argamassas de reparo e proteção de armaduras</b><span>Para concreto deteriorado, com limpeza e proteção da ferragem antes do reparo.</span></div><div><b>Selantes e telas</b><span>Para trincas e juntas, de acordo com a movimentação esperada.</span></div><div><b>Sistemas de acabamento</b><span>Pintura elastomérica, textura ou hidrorrepelente, conforme a fachada.</span></div></div><p className="note">A especificação final, com produtos, consumos e número de demãos, é definida depois da vistoria e descrita na proposta, seguindo as recomendações dos fabricantes.</p></section>
<section id="beneficios"><h2>Benefícios</h2><ul className="ticks "><li><span>Problemas tratados na origem, não apenas cobertos</span></li><li><span>Redução do risco de queda de fragmentos</span></li><li><span>Fachada volta a proteger a estrutura e as unidades</span></li><li><span>Registro técnico da obra para o histórico do prédio</span></li></ul></section>
<section id="imoveis"><h2>Tipos de imóveis atendidos</h2><ul className="pills"><li>Condomínios residenciais</li><li>Edifícios comerciais e corporativos</li><li>Hotéis e flats</li><li>Hospitais e escolas</li><li>Galpões com fachadas de concreto</li><li>Prédios antigos</li></ul></section>
<section id="diferenciais"><h2>Por que contratar a DRD2 Fachadas</h2><ul className="ticks "><li><span>Engenheiro civil e de segurança do trabalho como responsável técnico, da vistoria à entrega, com execução pela equipe do Grupo AWN</span></li><li><span>Teste de percussão e mapeamento antes de fechar o escopo</span></li><li><span>Proposta com itens separados, sistema, método de acesso e cronograma</span></li><li><span>Plano de segurança em altura apresentado antes do início da obra</span></li><li><span>ART (Anotação de Responsabilidade Técnica) emitida em todas as obras</span></li></ul></section>
<section id="atendimento"><h2>Área de atendimento</h2><p>Atendemos recuperação de fachada em toda a cidade de São Paulo, nas zonas Leste, Sul, Oeste, Norte e no Centro, e nos municípios da Grande SP, como Guarulhos, Osasco, Barueri, Alphaville, ABC, Taboão da Serra, Cotia, Mogi das Cruzes e Suzano.{" "}<Link href="/areas-atendidas/">Ver todas as áreas atendidas</Link>.</p></section>
<section id="faq"><h2>Perguntas frequentes</h2><div className="faq"><details><summary>Recuperação de fachada é a mesma coisa que reforma de fachada?</summary><div className="ans"><p>No uso comum, sim. Tecnicamente, recuperação é o termo usado quando a obra corrige manifestações patológicas para devolver o desempenho da fachada.</p></div></details><details><summary>Como saber se a trinca é estrutural?</summary><div className="ans"><p>Só uma avaliação no local pode indicar. Trincas inclinadas, com abertura crescente ou acompanhadas de deformações merecem análise do responsável técnico, que pode recomendar avaliação estrutural complementar.</p></div></details><details><summary>O orçamento pode mudar durante a obra?</summary><div className="ans"><p>As quantidades de reparo são estimadas na vistoria. Como parte da fachada só é acessível com equipamento, a proposta explica como as quantidades serão confirmadas e aprovadas antes de qualquer serviço adicional.</p></div></details><details><summary>Quanto tempo dura uma obra de recuperação?</summary><div className="ans"><p>Depende da área, da quantidade de reparos, do número de torres e do método de acesso. O cronograma é apresentado na proposta.</p></div></details></div></section>
<section id="relacionados"><h2>Serviços relacionados</h2><div className="related"><Link href="/servicos/tratamento-de-trincas-e-fissuras/"><b>Tratamento de trincas e fissuras</b><span>Técnica escolhida pelo tipo, abertura e atividade da trinca.</span></Link><Link href="/servicos/recuperacao-de-fachada-com-pastilhas/"><b>Recuperação de fachada com pastilhas</b><span>Mapeamento, reassentamento, reposição de peças e rejunte.</span></Link><Link href="/servicos/teste-de-percussao-e-arrancamento/"><b>Teste de percussão e arrancamento</b><span>Teste em 100% da fachada e ensaio de aderência, com laudo e ART.</span></Link><Link href="/#etapas"><b>Pintura de fachada</b><span>Pintura com lavagem, teste de percussão e correção da base antes da tinta.</span></Link></div></section>
</div>
<aside className="aside" aria-label="Navegação da página e contato"><div className="aside-inner">
<nav className="toc" aria-label="Nesta página"><h4>Nesta página</h4><ol><li><a href="#problema">O problema</a></li><li><a href="#o-que-e">O que é</a></li><li><a href="#restauracao">Recuperação ou restauração</a></li><li><a href="#quando">Quando é indicado</a></li><li><a href="#sinais">Sinais de deterioração</a></li><li><a href="#riscos">Riscos de adiar</a></li><li><a href="#avaliacao">Como avaliamos</a></li><li><a href="#etapas">Etapas da execução</a></li><li><a href="#materiais">Materiais e métodos</a></li><li><a href="#beneficios">Benefícios</a></li><li><a href="#imoveis">Imóveis atendidos</a></li><li><a href="#faq">Perguntas frequentes</a></li><li><a href="#relacionados">Serviços relacionados</a></li></ol></nav>
<div className="aside-card"><h4>Fale com um especialista em fachadas</h4><p>Envie fotos para uma análise inicial ou agende uma vistoria técnica no imóvel.</p>
<a className="btn btn-primary" href="#contato" data-track="cta_orcamento" data-pos="service-aside">Agendar vistoria técnica</a>{" "}
<WaLink servico="Recuperação e restauração de fachada" className="btn btn-outline" data-track="whatsapp_click" data-pos="service-aside" style={{"color": "var(--band-ink)", "borderColor": "var(--band-line)"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6L4.5 19.5z" /><path d="M9 9.2c.2 2.6 2.8 5.2 5.6 5.6l1.1-1.3-1.9-1-0.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-1.9L9 9.2z" fill="currentColor" stroke="none" /></svg>WhatsApp</WaLink></div>
</div></aside>
</div>
</main>
<LeadSection formId="form-servicos-recuperacao-de-fachada" checked="Recuperação ou restauração (reboco, trincas, pastilhas)" servico={SERVICO} />
    </>
  );
}
