import MainNavLink from "@/components/MainNavLink";
import { ChevronDown } from "lucide-react";
import HeaderMobileMenu from "@/components/HeaderMobileMenu";
import HeaderLogo from "@/components/HeaderLogo";
import HeaderServicesDropdown from "@/components/HeaderServicesDropdown";
import HeaderNavLinks from "@/components/HeaderNavLinks";

// A lista de serviços do menu fica em HeaderServicesDropdown (AVCB no www, vigilância sanitária no subdomínio).

const navLinkClass =
  "text-sm font-bold tracking-wide text-white hover:text-red-500 transition-colors uppercase";

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/5 bg-[#0D121F] shadow-xl">
      <div className="container mx-auto px-4 h-20 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <HeaderLogo />

        <nav className="hidden lg:flex items-center justify-center gap-8" aria-label="Menu principal">
          <MainNavLink href="/" className={navLinkClass}>
            Home
          </MainNavLink>

          {/* Dropdown único: Servicos (engloba AVCB, CLCB, Renovacao e demais) */}
          <div className="relative group py-4">
            <button className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-red-500 transition-colors tracking-wide uppercase">
              Serviços
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-red-500" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-[320px] bg-[#1A1F2E] border border-white/10 rounded-[2rem] shadow-2xl p-6">
              <HeaderServicesDropdown />
            </div>
          </div>

          <HeaderNavLinks className={navLinkClass} />
        </nav>

        <HeaderMobileMenu />
      </div>
    </header>
  );
}
