import type { NextConfig } from "next";

// Endereços antigos com ".html" (antes da migração para Next.js) levam para a página certa.
const htmlRedirects = [
  { source: "/index.html", destination: "/" },
  { source: "/servicos/index.html", destination: "/servicos/" },
  { source: "/blog/index.html", destination: "/blog/" },
  { source: "/404.html", destination: "/" },
  { source: "/servicos/:slug.html", destination: "/servicos/:slug/" },
  { source: "/blog/:slug.html", destination: "/blog/:slug/" },
  { source: "/:slug.html", destination: "/:slug/" },
].map((r) => ({ ...r, permanent: true }));

const nextConfig: NextConfig = {
  // Mantém as URLs exatamente como no site anterior (com barra no final)
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return htmlRedirects;
  },
  async headers() {
    return [
      { source: "/img/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }] },
      { source: "/assets/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=86400" }] },
    ];
  },
};

export default nextConfig;
