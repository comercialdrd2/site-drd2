"use client";

import { useEffect } from "react";
import { buildStrategicWhatsAppIntent, buildWhatsAppMessage } from "@/lib/leadTracking";

export default function WhatsAppAttributionEnhancer() {
  useEffect(() => {
    function enhanceLink(link: HTMLAnchorElement) {
      if (!link) return;

      try {
        const url = new URL(link.href);
        const existingText = url.searchParams.get("text");
        if (existingText?.includes("[Rastreamento do lead]")) return;

        const intent = existingText
          ? decodeURIComponent(existingText)
          : buildStrategicWhatsAppIntent();

        url.searchParams.set("text", buildWhatsAppMessage(intent));
        link.href = url.toString();
      } catch {
        // Mantem o link original se o navegador nao conseguir interpretar a URL.
      }
    }

    function enhanceAllLinks() {
      document
        .querySelectorAll<HTMLAnchorElement>("a[href*='wa.me']")
        .forEach(enhanceLink);
    }

    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.("a[href*='wa.me']") as HTMLAnchorElement | null;
      if (link) enhanceLink(link);
    }

    enhanceAllLinks();
    const timer = window.setTimeout(enhanceAllLinks, 1200);
    document.addEventListener("click", onClick, true);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
