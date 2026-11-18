"use client";

import type { ReactNode } from "react";
import { useIsLicencaSection } from "@/components/MainNavLink";

// Mostra o conteúdo só no site principal (www.drd2.com.br).
// No site de licença sanitária (licencasanitaria.drd2.com.br) os blocos de AVCB
// (bloco de confiança e rodapé grande) não aparecem: a seção tem rodapé próprio.
export default function MainSiteOnly({ children }: { children: ReactNode }) {
  const isLicenca = useIsLicencaSection();
  if (isLicenca) return null;
  return <>{children}</>;
}
