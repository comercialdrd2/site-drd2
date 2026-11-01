"use client";

import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { SERVICO_POR_PAGINA } from "@/lib/servicoPorPagina";
import { waMessage, waUrl } from "@/lib/site";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode };

/** Link do WhatsApp das partes fixas (topo, rodapé, botões flutuantes): cita o serviço da página atual. */
export default function WaLinkAuto({ children, ...rest }: Props) {
  const pathname = usePathname() || "/";
  const servico = SERVICO_POR_PAGINA[pathname];
  return (
    <a href={waUrl(waMessage(servico))} target="_blank" rel="noopener" {...rest}>
      {children}
    </a>
  );
}
