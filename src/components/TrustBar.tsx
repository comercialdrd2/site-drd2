import React from "react";

interface TrustBarProps {
  className?: string;
  dark?: boolean;
}

const items = [
  {
    icon: "✅",
    label: "Sem Comunique-se",
    sub: "Processo técnico conduzido de ponta a ponta",
  },
  {
    icon: "🏆",
    label: "Aprovação conduzida por engenharia",
    sub: "98% na 1ª análise",
  },
  {
    icon: "🎯",
    label: "Diagnóstico técnico gratuito",
    sub: "Avaliação inicial sem custo",
  },
  {
    icon: "📍",
    label: "Atendimento em São Paulo",
    sub: "Capital, Grande São Paulo e regiões estratégicas",
  },
];

export default function TrustBar({ className = "", dark = false }: TrustBarProps) {
  const bg = dark
    ? "bg-slate-950 border-b border-slate-800"
    : "bg-white border-b border-slate-100 shadow-sm";
  const textMain = dark ? "text-white" : "text-slate-900";
  const textSub = "text-slate-600";

  return (
    <div className={`py-8 ${bg} ${className}`} role="list" aria-label="Diferenciais DRD2 Engenharia">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all"
              role="listitem"
            >
              <span className="text-3xl shrink-0" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className={`text-sm font-black uppercase tracking-tight leading-none ${textMain}`}>
                  {item.label}
                </p>
                <p className={`text-xs font-bold mt-1 ${textSub}`}>
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
