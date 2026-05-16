import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import WhatsAppAttributionEnhancer from "@/components/WhatsAppAttributionEnhancer";
import TechnicalTrustBlock from "@/components/TechnicalTrustBlock";
import { JsonLD, generateOrganizationSchema, generateWebSiteSchema } from "@/components/JsonLD";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // 'optional' = nao ha "salto" visual de fonte fallback -> Inter.
  // Se Inter nao carregar em ~100ms, mantem fallback ate o proximo carregamento.
  // Resultado: zero FOUT, zero layout shift.
  display: "optional",
  preload: true,
  // Fallback chain com adjustFontFallback compensa metricas para aparencia identica.
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://drd2.com.br"),
  verification: {
    google: "hYaQLsIyW6x65LZONbO9Xi-PffEJp-4-d_AfxvyNVmM",
  },
  title: {
    default: "DRD2 Engenharia | Segurança Contra Incêndio em SP",
    template: "%s | DRD2 Engenharia"
  },
  description: "Especialistas em aprovação de AVCB, CLCB, projetos e manutenção de sistemas de segurança contra incêndio em São Paulo.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "DRD2 Engenharia",
    images: [
      {
        url: "/images/blog/fire_safety_equipment_premium.webp",
        width: 1200,
        height: 630,
        alt: "DRD2 Engenharia — AVCB e Segurança Contra Incêndio em São Paulo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>

      <body className="antialiased min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        <JsonLD schema={generateOrganizationSchema()} />
        <JsonLD schema={generateWebSiteSchema()} />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
        <Header />
        <main className="flex-grow">{children}</main>
        <TechnicalTrustBlock />
        <Footer />
        <WhatsAppAttributionEnhancer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
