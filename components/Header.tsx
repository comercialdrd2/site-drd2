"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SERVICOS = [
  {
    grupo: "Pintura e acabamento",
    itens: [
      ["/#etapas", "Pintura de fachada"],
      ["/servicos/pintura-predial/", "Pintura predial"],
      ["/servicos/pintura-de-fachada-de-condominio/", "Pintura de fachada de condomínio"],
      ["/servicos/pintura-de-fachada-comercial/", "Pintura de fachada comercial"],
      ["/servicos/aplicacao-de-textura-em-fachada/", "Aplicação de textura em fachada"],
    ],
  },
  {
    grupo: "Recuperação e restauração",
    itens: [
      ["/servicos/recuperacao-de-fachada/", "Recuperação e restauração de fachada"],
      ["/servicos/recuperacao-de-fachada-com-pastilhas/", "Recuperação de fachada com pastilhas"],
    ],
  },
  {
    grupo: "Proteção e estanqueidade",
    itens: [
      ["/servicos/lavagem-de-fachada/", "Lavagem e limpeza de fachada"],
      ["/servicos/impermeabilizacao-de-fachada/", "Impermeabilização de fachada"],
      ["/servicos/tratamento-de-trincas-e-fissuras/", "Tratamento de trincas e fissuras"],
    ],
  },
  {
    grupo: "Diagnóstico antes da obra",
    itens: [["/servicos/teste-de-percussao-e-arrancamento/", "Teste de percussão e arrancamento"]],
  },
] as const;

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fecha o menu do celular ao trocar de página
  useEffect(() => setOpen(false), [pathname]);

  // Sombra no cabeçalho ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = (prefix: string) => (pathname.startsWith(prefix) ? ("page" as const) : undefined);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="wrap">
        <Link className="brand" href="/" aria-label="DRD2 Fachadas, página inicial">
          <img className="b-mono" src="/assets/drd2-monograma.webp" alt="" width="245" height="176" />
          <span className="b-div" aria-hidden="true" />
          <span className="brand-name">
            <img className="b-word" src="/assets/drd2-wordmark.webp" alt="DRD2" width="337" height="96" />
            <span className="b-desc">Fachadas</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Principal">
          <div className="nav-drop">
            <Link href="/servicos/" aria-current={current("/servicos")}>Serviços</Link>
            <div className="mega">
              {SERVICOS.map((g) => (
                <div key={g.grupo}>
                  <h4>{g.grupo}</h4>
                  {g.itens.map(([href, label]) => (
                    <Link key={href} href={href}>{label}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {" "}
          <Link href="/#problemas">Problemas</Link>{" "}
          <Link href="/projetos/" aria-current={current("/projetos")}>Projetos</Link>{" "}
          <Link href="/blog/" aria-current={current("/blog")}>Blog</Link>{" "}
          <Link href="/#processo">Como trabalhamos</Link>{" "}
          <Link href="/areas-atendidas/">Áreas atendidas</Link>{" "}
          <Link href="/#faq">Dúvidas</Link>
        </nav>
        <Link className="btn btn-primary btn-sm header-cta" href="/orcamento/" data-track="cta_orcamento" data-pos="header">
          Solicitar vistoria e orçamento
        </Link>{" "}
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
      <div className="mobile-nav" id="mobile-nav" hidden={!open}>
        {/* Fecha o menu ao tocar em qualquer link (inclusive âncoras na mesma página) */}
        <div className="wrap" onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}>
          <Link href="/servicos/">Serviços</Link>{" "}
          <Link href="/#problemas">Problemas de fachada</Link>{" "}
          <Link href="/projetos/">Projetos</Link>{" "}
          <Link href="/blog/">Blog</Link>{" "}
          <Link href="/#processo">Como trabalhamos</Link>{" "}
          <Link href="/areas-atendidas/">Áreas atendidas</Link>{" "}
          <Link href="/#faq">Dúvidas frequentes</Link>{" "}
          <Link className="btn btn-primary" href="/orcamento/" data-track="cta_orcamento" data-pos="mobile-menu">
            Solicitar vistoria e orçamento
          </Link>
        </div>
      </div>
    </header>
  );
}
