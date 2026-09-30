import type { ReactNode } from "react";

// Renderiza textos dos arquivos de conteúdo que trazem marcações simples
// (<strong>, <b>, <em>, <i>, <br>). Qualquer outra tag é removida e os
// atributos são descartados. Valores que não são texto passam sem mudança.
const ALLOWED = new Set(["strong", "b", "em", "i", "br"]);

function sanitize(html: string): string {
  return html.replace(/<\s*(\/?)\s*([a-zA-Z0-9]+)[^>]*>/g, (_m, slash: string, tag: string) => {
    const t = tag.toLowerCase();
    if (!ALLOWED.has(t)) return "";
    if (t === "br") return "<br/>";
    return `<${slash}${t}>`;
  });
}

export default function RichText({ value }: { value: ReactNode }) {
  if (typeof value !== "string" || !value.includes("<")) return <>{value}</>;
  return <span dangerouslySetInnerHTML={{ __html: sanitize(value) }} />;
}
