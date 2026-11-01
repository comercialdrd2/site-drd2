// Página gerada a partir do site estático (servicos/index.html). Pode editar à vontade.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadSection from "@/components/LeadSection";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  "title": "Serviços de Fachada | Pintura, Recuperação e Impermeabilização",
  "description": "Todos os serviços de fachada da DRD2: pintura, restauração, recuperação, impermeabilização, trincas, pastilhas, inspeção e trabalho em altura em São Paulo e Grande SP.",
  "path": "/servicos/",
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
        "name": "Serviços",
        "item": "https://fachadas.drd2.com.br/servicos/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://fachadas.drd2.com.br/servicos/pintura-predial/",
        "name": "Pintura predial"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://fachadas.drd2.com.br/servicos/pintura-de-fachada-de-condominio/",
        "name": "Pintura de fachada de condomínio"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "url": "https://fachadas.drd2.com.br/servicos/pintura-de-fachada-comercial/",
        "name": "Pintura de fachada comercial"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "url": "https://fachadas.drd2.com.br/servicos/aplicacao-de-textura-em-fachada/",
        "name": "Aplicação de textura em fachada"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "url": "https://fachadas.drd2.com.br/servicos/recuperacao-de-fachada/",
        "name": "Recuperação e restauração de fachada"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "url": "https://fachadas.drd2.com.br/servicos/recuperacao-de-fachada-com-pastilhas/",
        "name": "Recuperação de fachada com pastilhas"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "url": "https://fachadas.drd2.com.br/servicos/lavagem-de-fachada/",
        "name": "Lavagem e limpeza de fachada"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "url": "https://fachadas.drd2.com.br/servicos/impermeabilizacao-de-fachada/",
        "name": "Impermeabilização de fachada"
      },
      {
        "@type": "ListItem",
        "position": 9,
        "url": "https://fachadas.drd2.com.br/servicos/tratamento-de-trincas-e-fissuras/",
        "name": "Tratamento de trincas e fissuras"
      },
      {
        "@type": "ListItem",
        "position": 10,
        "name": "Teste de percussão e arrancamento",
        "url": "https://fachadas.drd2.com.br/servicos/teste-de-percussao-e-arrancamento/"
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
<nav className="crumbs" aria-label="Você está em"><ol><li><Link href="/">Início</Link></li><li aria-current="page">Serviços</li></ol></nav>
<span className="eyebrow">Serviços</span>
<h1>Serviços de fachada para condomínios, empresas e indústrias</h1>
<p className="lead">Da inspeção técnica à pintura final. Escolha pelo serviço ou, se ainda não sabe o que contratar,{" "}<Link href="/#problemas">comece pelo sintoma que você está vendo</Link>.</p>
</div></div></section>
<section className="sec-tight"><div className="wrap"><div className="hub-group"><div><h2 style={{"fontSize": "var(--t-xl)"}}>Pintura e acabamento</h2><p>Renovação do acabamento com preparo técnico da base.</p></div><ul className="hub-list"><li><Link href="/#etapas"><b>Pintura de fachada</b><span>Pintura com lavagem, teste de percussão e correção da base antes da tinta.</span></Link></li><li><Link href="/servicos/pintura-predial/"><b>Pintura predial</b><span>Fachadas, muros, guaritas e áreas comuns externas em um único cronograma.</span></Link></li><li><Link href="/servicos/pintura-de-fachada-de-condominio/"><b>Pintura de fachada de condomínio</b><span>Proposta para assembleia, cronograma por torre e comunicação com moradores.</span></Link></li><li><Link href="/servicos/pintura-de-fachada-comercial/"><b>Pintura de fachada comercial</b><span>Obra planejada para não interromper o atendimento de lojas e escritórios.</span></Link></li><li><Link href="/servicos/aplicacao-de-textura-em-fachada/"><b>Aplicação de textura em fachada</b><span>Texturas acrílicas, grafiato e projetadas sobre base corrigida.</span></Link></li></ul></div><div className="hub-group"><div><h2 style={{"fontSize": "var(--t-xl)"}}>Recuperação e restauração</h2><p>Reboco, revestimentos e pastilhas corrigidos, e aparência original recuperada.</p></div><ul className="hub-list"><li><Link href="/servicos/recuperacao-de-fachada/"><b>Recuperação e restauração de fachada</b><span>Reboco, trincas, concreto e infiltrações tratados a partir de diagnóstico.</span></Link></li><li><Link href="/servicos/recuperacao-de-fachada-com-pastilhas/"><b>Recuperação de fachada com pastilhas</b><span>Mapeamento, reassentamento, reposição de peças e rejunte.</span></Link></li></ul></div><div className="hub-group"><div><h2 style={{"fontSize": "var(--t-xl)"}}>Proteção e estanqueidade</h2><p>Limpeza, impermeabilização e tratamento dos pontos de entrada de água.</p></div><ul className="hub-list"><li><Link href="/servicos/lavagem-de-fachada/"><b>Lavagem e limpeza de fachada</b><span>Hidrojateamento com pressão ajustada a cada material.</span></Link></li><li><Link href="/servicos/impermeabilizacao-de-fachada/"><b>Impermeabilização de fachada</b><span>Hidrorrepelentes, pinturas elastoméricas e membranas por superfície.</span></Link></li><li><Link href="/servicos/tratamento-de-trincas-e-fissuras/"><b>Tratamento de trincas e fissuras</b><span>Técnica escolhida pelo tipo, abertura e atividade da trinca.</span></Link></li></ul></div><div className="hub-group"><div><h2 style={{"fontSize": "var(--t-xl)"}}>Diagnóstico antes da obra</h2><p>Inspeção técnica, planos de manutenção e execução em altura.</p></div><ul className="hub-list"><li><Link href="/servicos/teste-de-percussao-e-arrancamento/"><b>Teste de percussão e arrancamento</b><span>Teste em 100% da fachada e ensaio de aderência, com laudo e ART.</span></Link></li></ul></div></div></section>
</main>
<LeadSection formId="form-servicos-index" />
    </>
  );
}
