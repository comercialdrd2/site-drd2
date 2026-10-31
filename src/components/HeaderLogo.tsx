"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Logo do cabeçalho. Nas páginas de /licenca-sanitaria mostra a marca
// "DRD2 Licença Sanitária"; no resto do site, a marca DRD2 Engenharia e Serviços.
export default function HeaderLogo() {
  const pathname = usePathname() || "";
  const isLicenca = pathname === "/licenca-sanitaria" || pathname.startsWith("/licenca-sanitaria/");

  if (isLicenca) {
    return (
      <Link
        prefetch={false}
        href="/licenca-sanitaria"
        className="flex items-center gap-3 shrink-0"
        aria-label="DRD2 Licença Sanitária – início"
      >
        <Image
          src="/images/licenca-sanitaria/logo-mono.png"
          alt=""
          width={61}
          height={44}
          priority
          className="h-9 md:h-11 w-auto object-contain"
        />
        <span aria-hidden="true" className="h-9 md:h-11 w-px bg-white/30" />
        <span className="flex flex-col items-start gap-1">
          <Image
            src="/images/licenca-sanitaria/logo-word.png"
            alt="DRD2"
            width={84}
            height={24}
            priority
            className="h-5 md:h-6 w-auto object-contain"
          />
          <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.18em] text-white/85 uppercase whitespace-nowrap">
            Licença Sanitária
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link prefetch={false} href="/" className="flex items-center shrink-0">
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
  );
}
