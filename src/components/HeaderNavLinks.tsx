"use client";

import MainNavLink, { useIsLicencaSection } from "@/components/MainNavLink";
import { LS_ORIGIN } from "@/lib/licencaSanitariaHost";

// Links do menu depois de "Serviços".
// - www.drd2.com.br: Blog, Sobre, Contato.
// - Site de licença sanitária: Blog, Consultar CNAE, Contato (sem páginas do site de AVCB).
export const MAIN_NAV = [
  { name: "Blog", href: "/blog" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];
export const LICENCA_NAV = [
  { name: "Blog", href: `${LS_ORIGIN}/blog` },
  { name: "Consultar CNAE", href: `${LS_ORIGIN}/minha-atividade-precisa-licenca-sanitaria` },
  { name: "Contato", href: `${LS_ORIGIN}/contato` },
];

export default function HeaderNavLinks({ className }: { className: string }) {
  const items = useIsLicencaSection() ? LICENCA_NAV : MAIN_NAV;
  return (
    <>
      {items.map(({ name, href }) => (
        <MainNavLink key={href} href={href} className={className}>
          {name}
        </MainNavLink>
      ))}
    </>
  );
}
