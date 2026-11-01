"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { isLsHostClient, LS_PREFIX } from "@/lib/licencaSanitariaHost";

// Link do menu principal do drd2.com.br.
// Nas páginas da licença sanitária (subdomínio licencasanitaria.drd2.com.br) um link relativo
// como "/blog" ou "/contato" abriria a página da própria seção. Lá, o menu principal precisa
// levar ao site principal, então os links relativos ganham o endereço completo do www.
// No www.drd2.com.br nada muda.
const MAIN_ORIGIN = "https://www.drd2.com.br";

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
  const target = isLicenca && href.startsWith("/") ? MAIN_ORIGIN + href : href;
  return (
    <Link prefetch={false} href={target} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
