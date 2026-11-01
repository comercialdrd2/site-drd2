import localFont from "next/font/local";

// Fontes hospedadas no próprio site (antes vinham do Google Fonts e bloqueavam a renderização).

export const archivo = localFont({
  src: "./fonts/archivo-latin-standard-normal.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
  fallback: ["Arial Narrow", "Helvetica Neue", "Arial", "sans-serif"],
});

export const plexSans = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
  fallback: ["Segoe UI", "system-ui", "-apple-system", "sans-serif"],
});

export const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "Menlo", "Consolas", "monospace"],
});

export const arimo = localFont({
  src: [
    { path: "./fonts/arimo-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/arimo-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-arimo",
  display: "swap",
  preload: false,
  fallback: ["Arial", "Helvetica Neue", "sans-serif"],
});
