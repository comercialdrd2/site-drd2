"use client";
import { useEffect } from "react";

// Executa o script de uma página da seção (consulta por CNAE, formulário, menu)
// a cada montagem, inclusive em navegação client-side.
export default function LsScript({ code }: { code: string }) {
  useEffect(() => {
    if (!code) return;
    // eslint-disable-next-line no-new-func
    new Function(code)();
  }, [code]);
  return null;
}
