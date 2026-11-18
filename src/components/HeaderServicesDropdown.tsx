"use client";

import {
  AlertTriangle,
  Award,
  Bell,
  DollarSign,
  Droplets,
  FileCheck,
  FileText,
  Flame,
  MapPin,
  PartyPopper,
  Pill,
  RefreshCw,
  ShieldCheck,
  Users,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import MainNavLink, { useIsLicencaSection } from "@/components/MainNavLink";
import { LS_ORIGIN } from "@/lib/licencaSanitariaHost";

// Conteúdo do menu "Serviços" do cabeçalho.
// - No www.drd2.com.br: serviços de AVCB e segurança contra incêndio.
// - No site de licença sanitária (licencasanitaria.drd2.com.br): só serviços de vigilância sanitária.

export const AVCB_SERVICES = [
  { name: "AVCB em São Paulo", href: "/avcb-sao-paulo", icon: FileCheck },
  { name: "CLCB em São Paulo", href: "/clcb-sao-paulo", icon: Award },
  { name: "Renovação de AVCB", href: "/renovacao-avcb", icon: FileCheck },
  { name: "Renovação de CLCB", href: "/renovacao-clcb-sao-paulo", icon: Award },
  { name: "PTOTEP (Eventos)", href: "/ptotep", icon: PartyPopper },
  { name: "Licença Sanitária", href: LS_ORIGIN, icon: FileCheck },
  { name: "Projeto de Incêndio", href: "/projetos-incendio", icon: Flame },
  { name: "Sprinklers", href: "/sprinklers", icon: Droplets },
  { name: "Alarme de Incêndio", href: "/alarme-incendio-sao-paulo", icon: Bell },
  { name: "Rede de Hidrantes", href: "/hidrantes", icon: Wind },
  { name: "SPDA (Para-raios)", href: "/spda", icon: Zap },
  { name: "Manutenção de Sistemas", href: "/manutencao", icon: Wrench },
  { name: "Treinamento de Brigada", href: "/treinamento-brigada", icon: Users },
];

export const LICENCA_SERVICES = [
  { name: "Licença Sanitária", href: `${LS_ORIGIN}/`, icon: ShieldCheck },
  { name: "DCFF com ART", href: `${LS_ORIGIN}/dcff-declaracao-conformidade-fisico-funcional`, icon: FileCheck },
  { name: "DCA (risco alto)", href: `${LS_ORIGIN}/dca-declaracao-conformidade-atividade`, icon: FileText },
  { name: "CLI (risco médio)", href: `${LS_ORIGIN}/cli-licenca-sanitaria-risco-medio`, icon: FileText },
  { name: "Renovação da Licença", href: `${LS_ORIGIN}/renovacao-licenca-sanitaria`, icon: RefreshCw },
  { name: "Alteração e Mudança de Endereço", href: `${LS_ORIGIN}/alteracao-licenca-sanitaria`, icon: MapPin },
  { name: "Licença Vencida ou Notificação", href: `${LS_ORIGIN}/regularizacao-vigilancia-sanitaria`, icon: AlertTriangle },
  { name: "Adequação Física", href: `${LS_ORIGIN}/adequacao-fisica-inspecao-sanitaria`, icon: Wrench },
  { name: "AFE Anvisa", href: `${LS_ORIGIN}/afe-anvisa-medicamentos-insumos`, icon: Pill },
];

export default function HeaderServicesDropdown() {
  const isLicenca = useIsLicencaSection();
  const services = isLicenca ? LICENCA_SERVICES : AVCB_SERVICES;

  return (
    <>
      <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-4 border-b border-white/5 pb-2">
        {isLicenca ? "Vigilância Sanitária" : "Serviços Técnicos"}
      </p>
      <div className="flex flex-col gap-2">
        {services.map(({ href, name, icon: Icon }) => (
          <MainNavLink
            key={href}
            href={href}
            className="flex items-center gap-3 p-3 text-[12px] font-bold text-gray-300 hover:text-white hover:bg-red-600/20 rounded-xl transition-all border border-transparent hover:border-white/5"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
              <Icon className="w-4 h-4 text-red-500" />
            </div>
            <span className="uppercase tracking-tight">{name}</span>
          </MainNavLink>
        ))}
      </div>
      <div className="border-t border-white/10 mt-3 pt-3 flex flex-col gap-2">
        <MainNavLink
          href={isLicenca ? `${LS_ORIGIN}/quanto-custa-licenca-sanitaria` : "/quanto-custa-avcb-sao-paulo"}
          className="flex items-center gap-3 p-3 text-[12px] font-black text-red-400 hover:text-white bg-red-600/10 hover:bg-red-600 rounded-xl transition-all border border-red-600/30 hover:border-red-600"
        >
          <div className="w-8 h-8 rounded-lg bg-red-600/20 flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-red-400" />
          </div>
          <span className="uppercase tracking-tight">{isLicenca ? "Quanto Custa a Licença" : "Quanto Custa o AVCB"}</span>
        </MainNavLink>
        <MainNavLink
          href={isLicenca ? `${LS_ORIGIN}/por-atividade` : "/servicos"}
          className="text-center text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-white py-2 transition-colors"
        >
          {isLicenca ? "Licença por atividade →" : "Ver todos os serviços →"}
        </MainNavLink>
      </div>
    </>
  );
}
