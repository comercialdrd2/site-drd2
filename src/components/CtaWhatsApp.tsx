"use client";

import React, { useEffect, useState } from "react";
import { buildStrategicWhatsAppIntent, buildWhatsAppMessage, getIntentCtaLabel } from "@/lib/leadTracking";
import { trackWhatsAppClick } from "@/lib/analytics";

interface CtaWhatsAppProps {
  label?: string;
  occupationType?: string;
  variant?: "primary" | "secondary" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  centered?: boolean;
}

const WhatsAppSVG = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export default function CtaWhatsApp({
  label,
  occupationType = "meu imóvel",
  variant = "primary",
  size = "lg",
  className = "",
  centered = false,
}: CtaWhatsAppProps) {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP || "5511915131652";
  const [href, setHref] = useState(() => {
    const message = encodeURIComponent(`Olá, vim pelo site da DRD2 Engenharia e preciso verificar custo, renovação ou regularização do AVCB para ${occupationType}.`);
    return `https://wa.me/${waNumber}?text=${message}`;
  });
  const [intentLabel, setIntentLabel] = useState("Falar com engenheiro especialista");

  useEffect(() => {
    const message = buildWhatsAppMessage(buildStrategicWhatsAppIntent(`AVCB para ${occupationType}`));

    setIntentLabel(getIntentCtaLabel());
    setHref(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`);
  }, [occupationType, waNumber]);

  const genericLabels = [
    "Solicitar diagnóstico técnico gratuito pelo WhatsApp",
    "Solicitar diagnóstico técnico gratuito",
    "Falar com engenheiro especialista no WhatsApp",
    "Falar com engenheiro especialista",
    "Falar com engenheiro especialista Agora",
  ];
  const displayLabel = !label || genericLabels.includes(label) ? intentLabel : label;

  const sizeClasses = {
    sm: "px-6 py-3 text-sm min-h-[44px]",
    md: "px-8 py-4 text-base min-h-[48px]",
    lg: "px-10 py-5 text-lg min-h-[56px]",
  };

  const variantClasses = {
    primary:
      "bg-[#128C4A] hover:bg-[#0f7a43] text-white shadow-xl shadow-green-700/25 hover:shadow-green-700/40 border-2 border-[#128C4A]",
    secondary:
      "bg-white hover:bg-[#128C4A] text-[#1a3a2a] hover:text-white shadow-xl border-2 border-[#128C4A]",
    dark: "bg-slate-950 hover:bg-[#128C4A] text-white shadow-xl border-2 border-[#128C4A]",
    outline:
      "bg-transparent hover:bg-[#128C4A] text-white hover:text-white border-2 border-white hover:border-[#128C4A] shadow-lg",
  };

  return (
    <div className={centered ? "flex justify-center" : ""}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick({ source: "service_cta" })}
        className={`
          inline-flex items-center gap-3 font-black uppercase tracking-tight rounded-2xl
          transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${className}
        `}
        aria-label={`${displayLabel} - WhatsApp DRD2 Engenharia`}
      >
        <WhatsAppSVG className="w-5 h-5 shrink-0" />
        <span>{displayLabel}</span>
      </a>
    </div>
  );
}
