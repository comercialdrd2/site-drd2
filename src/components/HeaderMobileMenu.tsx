"use client";

import MainNavLink, { useIsLicencaSection } from "@/components/MainNavLink";
import { AVCB_SERVICES, LICENCA_SERVICES } from "@/components/HeaderServicesDropdown";
import { LS_ORIGIN } from "@/lib/licencaSanitariaHost";
import { LICENCA_NAV, MAIN_NAV } from "@/components/HeaderNavLinks";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Menu mobile alinhado com o desktop. A lista de serviços vem de HeaderServicesDropdown:
// AVCB no www, vigilância sanitária no site de licença sanitária.

export default function HeaderMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const isLicenca = useIsLicencaSection();
  const services = isLicenca ? LICENCA_SERVICES : AVCB_SERVICES;

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen((value) => !value)}
        className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-8 h-8 text-red-500" /> : <Menu className="w-8 h-8" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-20 z-[90] bg-[#0D121F] p-6 animate-in fade-in slide-in-from-right-full duration-300 overflow-y-auto">
          <div className="space-y-4">
            <MainNavLink
              onClick={close}
              href="/"
              className="block py-4 border-b border-white/5 text-xl font-black text-white uppercase italic tracking-tighter hover:text-red-500 transition-colors"
            >
              Home
            </MainNavLink>

            <div className="py-4 border-b border-white/5">
              <p className="text-[12px] font-black text-red-500 uppercase tracking-widest mb-4">
                {isLicenca ? "Vigilância Sanitária" : "Serviços"}
              </p>
              <div className="grid grid-cols-1 gap-2">
                {services.map(({ href, name }) => (
                  <MainNavLink
                    key={href}
                    onClick={close}
                    href={href}
                    className="block py-2 text-gray-300 font-bold hover:text-white"
                  >
                    <span className="uppercase text-xs tracking-tight">{name}</span>
                  </MainNavLink>
                ))}
                <MainNavLink
                  onClick={close}
                  href={isLicenca ? `${LS_ORIGIN}/quanto-custa-licenca-sanitaria` : "/quanto-custa-avcb-sao-paulo"}
                  className="block py-2 mt-2 text-red-400 font-black hover:text-red-300 border-t border-white/10 pt-3"
                >
                  <span className="uppercase text-xs tracking-tight">{isLicenca ? "💰 Quanto Custa a Licença" : "💰 Quanto Custa o AVCB"}</span>
                </MainNavLink>
                <MainNavLink
                  onClick={close}
                  href={isLicenca ? `${LS_ORIGIN}/por-atividade` : "/servicos"}
                  className="block py-2 text-slate-400 font-bold hover:text-white"
                >
                  <span className="uppercase text-[10px] tracking-widest">{isLicenca ? "→ Licença por atividade" : "→ Ver todos os serviços"}</span>
                </MainNavLink>
              </div>
            </div>

            {(isLicenca ? LICENCA_NAV : MAIN_NAV).map(({ name, href }) => (
              <MainNavLink
                key={href}
                onClick={close}
                href={href}
                className="block py-4 border-b border-white/5 text-xl font-black text-white uppercase italic tracking-tighter hover:text-red-500 transition-colors"
              >
                {name}
              </MainNavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
