"use client";

import React from "react";
import { trackWhatsAppClick } from "@/lib/analytics";

type Source = "floating_button" | "hero_cta" | "post_cta" | "service_cta" | "footer_cta";

type Props = {
  href: string;
  source: Source;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

/**
 * <a> que dispara evento GA4 'whatsapp_click' antes de abrir o link.
 * Wrapper minimo para usar dentro de server components sem precisar
 * convertelos inteiros para client.
 */
export default function TrackedWhatsAppLink({ href, source, className, children, ariaLabel }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick({ source })}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
