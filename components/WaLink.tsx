import type { AnchorHTMLAttributes, ReactNode } from "react";
import { waMessage, waUrl } from "@/lib/site";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Serviço citado na mensagem pronta do WhatsApp */
  servico?: string;
  children: ReactNode;
};

/** Link do WhatsApp com a mensagem pronta. O endereço já sai no HTML (funciona sem JavaScript e é rastreável). */
export default function WaLink({ servico, children, ...rest }: Props) {
  return (
    <a href={waUrl(waMessage(servico))} target="_blank" rel="noopener" {...rest}>
      {children}
    </a>
  );
}
