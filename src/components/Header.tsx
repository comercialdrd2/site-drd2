import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Bell,
  ChevronDown,
  DollarSign,
  Droplets,
  FileCheck,
  Flame,
  PartyPopper,
  Users,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import HeaderMobileMenu from "@/components/HeaderMobileMenu";

// Serviços principais — mostrados no dropdown único do menu.
// Lista enxuta dos serviços de maior tráfego/conversão.
const services = [
  { name: "AVCB em São Paulo", href: "/avcb-sao-paulo", icon: FileCheck },
  { name: "CLCB em São Paulo", href: "/clcb-sao-paulo", icon: Award },
  { name: "Renovação de AVCB", href: "/renovacao-avcb", icon: FileCheck },
  { name: "Renovação de CLCB", href: "/renovacao-clcb-sao-paulo", icon: Award },
  { name: "PTOTEP (Eventos)", href: "/ptotep", icon: PartyPopper },
  { name: "Projeto de Incêndio", href: "/projetos-incendio", icon: Flame },
  { name: "Sprinklers", href: "/sprinklers", icon: Droplets },
  { name: "Alarme de Incêndio", href: "/alarme-incendio-sao-paulo", icon: Bell },
  { name: "Rede de Hidrantes", href: "/hidrantes", icon: Wind },
  { name: "SPDA (Para-raios)", href: "/spda", icon: Zap },
  { name: "Manutenção de Sistemas", href: "/manutencao", icon: Wrench },
  { name: "Treinamento de Brigada", href: "/treinamento-brigada", icon: Users },
];

const navLinkClass =
  "text-sm font-bold tracking-wide text-white hover:text-red-500 transition-colors uppercase";

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/5 bg-[#0D121F] shadow-xl">
      <div className="container mx-auto px-4 h-20 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo-white.png"
            alt="DRD2 Engenharia e Serviços"
            width={180}
            height={60}
            priority
            sizes="180px"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-8" aria-label="Menu principal">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>

          {/* Dropdown único: Servicos (engloba AVCB, CLCB, Renovacao e demais) */}
          <div className="relative group py-4">
            <button className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-red-500 transition-colors tracking-wide uppercase">
              Serviços
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-red-500" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-[320px] bg-[#1A1F2E] border border-white/10 rounded-[2rem] shadow-2xl p-6">
              <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-4 border-b border-white/5 pb-2">
                Serviços Técnicos
              </p>
              <div className="flex flex-col gap-2">
                {services.map(({ href, name, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-3 p-3 text-[12px] font-bold text-gray-300 hover:text-white hover:bg-red-600/20 rounded-xl transition-all border border-transparent hover:border-white/5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="uppercase tracking-tight">{name}</span>
                  </Link>
                ))}
              </div>
              <div className="border-t border-white/10 mt-3 pt-3 flex flex-col gap-2">
                <Link
                  href="/quanto-custa-avcb-sao-paulo"
                  className="flex items-center gap-3 p-3 text-[12px] font-black text-red-400 hover:text-white bg-red-600/10 hover:bg-red-600 rounded-xl transition-all border border-red-600/30 hover:border-red-600"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="uppercase tracking-tight">Quanto Custa o AVCB</span>
                </Link>
                <Link
                  href="/servicos"
                  className="text-center text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-white py-2 transition-colors"
                >
                  Ver todos os serviços →
                </Link>
              </div>
            </div>
          </div>

          <Link href="/blog" className={navLinkClass}>Blog</Link>
          <Link href="/sobre" className={navLinkClass}>Sobre</Link>
          <Link href="/contato" className={navLinkClass}>Contato</Link>
        </nav>

        <HeaderMobileMenu />
      </div>
    </header>
  );
}
