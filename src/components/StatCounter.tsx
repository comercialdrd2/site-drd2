'use client';

import { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function StatCounter({ end, duration = 2000, prefix = '', suffix = '' }: StatCounterProps) {
  // SSR renders `end` (real value) — sem flash de zero, sem CLS, sem hydration mismatch.
  const [count, setCount] = useState(end);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Se o elemento já está visível no momento do mount (telas grandes / hero próximo),
    // não animamos — mantemos o valor SSR e evitamos o flash de "0 → end".
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (alreadyVisible) {
      hasAnimated.current = true;
      return;
    }

    // Não está visível ainda: prepara para animar quando entrar no viewport.
    setCount(0);

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (startTimestamp === null) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const easeOut = 1 - Math.pow(2, -10 * progress);
          setCount(Math.round(easeOut * end));
          if (progress < 1) {
            animationRef.current = window.requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };

        animationRef.current = window.requestAnimationFrame(step);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [end, duration]);

  return (
    <div ref={elementRef} className="inline-block tabular-nums">
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </div>
  );
}
