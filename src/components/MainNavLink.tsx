"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { isLsHostClient, LS_ORIGIN, LS_PREFIX } from "@/lib/licencaSanitariaHost";

// Link do menu principal do drd2.com.br.
// Nas páginas da licença sanitária (subdomínio licencasanitaria.drd2.com.br):
// - Home, Blog e Contato ficam no próprio site de licença sanitária, que tem páginas próprias;
// - os demais links (Sobre, serviços de AVCB etc.) levam ao site principal, www.drd2.com.br.
// No www.drd2.com.br nada muda.
const MAIN_ORIGIN = "https://www.drd2.com.br";
const SECTION_PAGES = new Set(["/", "/blog", "/contato"]);

export function useIsLicencaSection(): boolean {
  const pathname = usePathname() || "";
  return isLsHostClient() || pathname === LS_PREFIX || pathname.startsWith(LS_PREFIX + "/");
}

type Props = {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export default function MainNavLink({ href, className, onClick, children }: Props) {
  const isLicenca = useIsLicencaSection();
  let target = href;
  if (isLicenca && href.startsWith("/")) {
    target = SECTION_PAGES.has(href) ? LS_ORIGIN + href : MAIN_ORIGIN + href;
  }
  return (
    <Link prefetch={false} href={target} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
