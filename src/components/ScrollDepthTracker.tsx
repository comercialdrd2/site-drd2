"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth } from "@/lib/analytics";

/**
 * Dispara eventos GA4 de profundidade de leitura (25/50/75/100%).
 * Cada threshold dispara uma unica vez por carregamento de pagina.
 *
 * Uso: <ScrollDepthTracker /> no fim de uma server component (blog post).
 * - Throttled via requestAnimationFrame (60fps cap, baixissimo overhead)
 * - Cleanup automatico no unmount
 */
export default function ScrollDepthTracker() {
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    let ticking = false;

    const check = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        ticking = false;
        return;
      }
      const pct = (scrollTop / docHeight) * 100;

      for (const threshold of [25, 50, 75, 100] as const) {
        if (pct >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold);
          trackScrollDepth(threshold);
        }
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(check);
        ticking = true;
      }
    };

    // primeira leitura imediata (caso a pagina seja curta e ja esteja 100% visivel)
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
