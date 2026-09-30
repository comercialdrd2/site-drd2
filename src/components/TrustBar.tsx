import React from "react";

interface TrustBarProps {
  className?: string;
  dark?: boolean;
  /** Regra de pagamento a exibir: "avcb" = após o AVCB aprovado; "projeto" = após a aprovação do projeto. */
  pagamento?: "avcb" | "projeto";
}

const pagamentoItem = {
  avcb: {
    icon: "💳",
    label: "1º pagamento após o AVCB aprovado",
    sub: "Correções pedidas pelo Corpo de Bombeiros incluídas",
  },
  projeto: {
    icon: "💳",
    label: "1º pagamento após a aprovação do projeto",
    sub: "Correções pedidas pelo Corpo de Bombeiros incluídas",
  },
};

const items = [
  {
    icon: "✅",
    label: "Correções incluídas",
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

export default function TrustBar({ className = "", dark = false, pagamento }: TrustBarProps) {
  const shown = pagamento ? [pagamentoItem[pagamento], ...items.slice(1)] : items;
  const bg = dark
    ? "bg-slate-950 border-b border-slate-800"
    : "bg-white border-b border-slate-100 shadow-sm";
  // Os cartões são sempre brancos; o título precisa ser escuro também na versão "dark".
  const textMain = "text-slate-900";
  const textSub = "text-slate-600";

  return (
    <div className={`py-8 ${bg} ${className}`} role="list" aria-label="Diferenciais DRD2 Engenharia">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {shown.map((item) => (
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
