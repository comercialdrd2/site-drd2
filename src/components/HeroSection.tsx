"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin, ShieldAlert, CheckCircle2 } from "lucide-react";

const occupationMap: Record<string, { image: string; alt: string }> = {
  condomínio: {
    image: "/images/bg-condominios.jpg",
    alt: "Fachada de condomínio residencial vertical com sistema de segurança e AVCB em dia",
  },
  restaurante: {
    image: "/images/hero-bar-com-show.webp",
    alt: "Ambiente interno de restaurante e bar com foco em adequação de AVCB e CLCB",
  },
  industria: {
    image: "/images/bg-galpao-industrial.jpg",
    alt: "Galpão industrial com sistema de combate a incêndio e sprinklers",
  },
  comércio: {
    image: "/images/hero-escritorio-moderno.webp",
    alt: "Ambiente comercial e escritórios com regularização do Corpo de Bombeiros",
  },
  default: {
    image: "/images/banner-hero.webp",
    alt: "Engenharia especializada em regularização de AVCB e projetos de incêndio",
  },
};

interface HeroSectionProps {
  occupation?: string;
  tag?: string;
  title: React.ReactNode;
  subtitle: string;
  address?: string;
  showForm?: boolean;
  formTitle?: React.ReactNode;
}

export default function HeroSection({
  occupation = "default",
  tag,
  title,
  subtitle,
  address,
  showForm = false,
  formTitle,
}: HeroSectionProps) {
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`;
  const mapping = occupationMap[occupation.toLowerCase()] || occupationMap.default;

  return (
    <section className="relative text-white overflow-hidden min-h-[auto] pt-[85px] pb-[20px] lg:pt-[95px] lg:pb-[30px] flex items-center bg-slate-950 border-b-8 border-red-600">
      <Image
        src={mapping.image}
        alt={mapping.alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        quality={60}
        className="object-cover object-center opacity-30 grayscale-[30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent" />
      <div className="relative z-10 container mx-auto px-4 max-w-6xl py-8">
        <div className="max-w-4xl">
          {tag && (
            <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/30 text-xs shadow-lg backdrop-blur-sm">
              <ShieldAlert className="w-4 h-4" /> {tag}
            </span>
          )}
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl text-white">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed font-medium">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center rounded-xl bg-[#128C4A] px-10 py-6 text-xl font-black shadow-[0_0_40px_rgba(18,140,74,0.35)] hover:bg-[#0f7a43] hover:-translate-y-1 transition-all text-white border border-green-700 uppercase tracking-tighter"
            >
              <Phone className="w-6 h-6 mr-3" /> Falar com engenheiro especialista Agora
            </a>
          </div>

          <ul className="mt-10 space-y-4">
            {[
              "Atendimento com Engenheiro Especialista (CREA-SP)",
              "Projeto Técnico conforme Decreto Estadual 69.118/2024",
              "Acompanhamento total até a vistoria e aprovação final",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm md:text-lg text-gray-300 font-medium">
                <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
