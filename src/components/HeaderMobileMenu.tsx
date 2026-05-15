"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Menu mobile alinhado com o desktop — apenas Servicos como dropdown.
// Renovacoes e Solucoes por Segmento ficam acessiveis via cluster interno e /mapa-paginas.
const services = [
  { name: "AVCB em São Paulo", href: "/avcb-sao-paulo" },
  { name: "CLCB em São Paulo", href: "/clcb-sao-paulo" },
  { name: "Renovação de AVCB", href: "/renovacao-avcb" },
  { name: "Renovação de CLCB", href: "/renovacao-clcb-sao-paulo" },
  { name: "PTOTEP (Eventos)", href: "/ptotep" },
  { name: "Projeto de Incêndio", href: "/projetos-incendio" },
  { name: "Sprinklers", href: "/sprinklers" },
  { name: "Alarme de Incêndio", href: "/alarme-incendio-sao-paulo" },
  { name: "Rede de Hidrantes", href: "/hidrantes" },
  { name: "SPDA (Para-raios)", href: "/spda" },
  { name: "Manutenção", href: "/manutencao" },
  { name: "Treinamento de Brigada", href: "/treinamento-brigada" },
];

export default function HeaderMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

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
            <Link
              onClick={close}
              href="/"
              className="block py-4 border-b border-white/5 text-xl font-black text-white uppercase italic tracking-tighter hover:text-red-500 transition-colors"
            >
              Home
            </Link>

            <div className="py-4 border-b border-white/5">
              <p className="text-[12px] font-black text-red-500 uppercase tracking-widest mb-4">
                Serviços
              </p>
              <div className="grid grid-cols-1 gap-2">
                {services.map(({ href, name }) => (
                  <Link
                    key={href}
                    onClick={close}
                    href={href}
                    className="block py-2 text-gray-300 font-bold hover:text-white"
                  >
                    <span className="uppercase text-xs tracking-tight">{name}</span>
                  </Link>
                ))}
                <Link
                  onClick={close}
                  href="/quanto-custa-avcb-sao-paulo"
                  className="block py-2 mt-2 text-red-400 font-black hover:text-red-300 border-t border-white/10 pt-3"
                >
                  <span className="uppercase text-xs tracking-tight">💰 Quanto Custa o AVCB</span>
                </Link>
                <Link
                  onClick={close}
                  href="/servicos"
                  className="block py-2 text-slate-400 font-bold hover:text-white"
                >
                  <span className="uppercase text-[10px] tracking-widest">→ Ver todos os serviços</span>
                </Link>
              </div>
            </div>

            <Link
              onClick={close}
              href="/blog"
              className="block py-4 border-b border-white/5 text-xl font-black text-white uppercase italic tracking-tighter hover:text-red-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              onClick={close}
              href="/sobre"
              className="block py-4 border-b border-white/5 text-xl font-black text-white uppercase italic tracking-tighter hover:text-red-500 transition-colors"
            >
              Sobre
            </Link>
            <Link
              onClick={close}
              href="/contato"
              className="block py-4 border-b border-white/5 text-xl font-black text-white uppercase italic tracking-tighter hover:text-red-500 transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
