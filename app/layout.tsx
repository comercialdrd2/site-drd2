import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import SiteScripts from "@/components/SiteScripts";
import { FloatingActions, Footer, Topbar } from "@/components/SiteChrome";
import { SITE } from "@/lib/site";
import { archivo, arimo, plexMono, plexSans } from "./fonts";
import "./site.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  icons: {
    icon: [{ url: "/assets/favicon.png", type: "image/png" }],
    apple: "/assets/apple-touch-icon.png",
  },
  verification: { google: SITE.googleVerification },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: SITE.themeColor,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} ${arimo.variable}`}>
      <body>
        <a className="skip" href="#conteudo">Pular para o conteúdo</a>
        <Topbar />
        <Header />
        {children}
        <Footer />
        <FloatingActions />
        <SiteScripts />
        <Analytics />
      </body>
    </html>
  );
}
