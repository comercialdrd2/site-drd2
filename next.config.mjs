/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    // Headers de seguranca aplicados a todas as rotas — protegem contra XSS,
    // clickjacking, sniffing e fortalecem a postura de seguranca do site.
    const securityHeaders = [
      // Forca HTTPS (HSTS) — 2 anos + subdomains. Inclui preload para a HSTS list do Chrome.
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      // Bloqueia o site em iframes externos — previne clickjacking
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      // Impede browsers de adivinhar MIME type — previne ataques de MIME sniffing
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      // Controla qual referrer enviamos (privacidade do usuario)
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      // Bloqueia features sensiveis que nao usamos
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
      // CSP — permite GA4, GTM, WhatsApp, fontes Google, imagens externas usadas
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' data: https://fonts.gstatic.com",
          "img-src 'self' data: https: blob:",
          "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://formsubmit.co",
          "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
          "frame-ancestors 'self'",
          "base-uri 'self'",
          "form-action 'self' https://formsubmit.co",
          "object-src 'none'",
          "upgrade-insecure-requests",
        ].join('; '),
      },
    ];

    return [
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // Aplica headers de seguranca em TODAS as rotas (HTML, API, etc)
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/avcb-restaurante',
        destination: '/avcb-restaurante-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-restaurantes',
        destination: '/avcb-restaurante-sao-paulo',
        permanent: true,
      },
      {
        source: '/projeto-tecnico-ocupacao-temporaria-edificacao-permanente',
        destination: '/ptotep',
        permanent: true,
      },
      {
        source: '/projeto-tecnico-para-evento',
        destination: '/ptotep',
        permanent: true,
      },
      {
        source: '/avcb-para-evento',
        destination: '/ptotep',
        permanent: true,
      },
      {
        source: '/avcb-bares-restaurantes-sao-paulo',
        destination: '/avcb-restaurante-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-para-bar-sao-paulo',
        destination: '/avcb-restaurante-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-bar-sao-paulo',
        destination: '/avcb-restaurante-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb',
        destination: '/avcb-sao-paulo',
        permanent: true,
      },
      {
        source: '/mapa-páginas',
        destination: '/mapa-paginas',
        permanent: true,
      },
      {
        source: '/mapa-p%C3%A1ginas',
        destination: '/mapa-paginas',
        permanent: true,
      },
      {
        source: '/avcb-para-farmacia-sao-paulo',
        destination: '/avcb-farmacia-drogaria-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-para-drogaria-sao-paulo',
        destination: '/avcb-farmacia-drogaria-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-para-boate-sao-paulo',
        destination: '/avcb-casas-noturnas-boates-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-para-casa-noturna-sao-paulo',
        destination: '/avcb-casas-noturnas-boates-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-para-bar-com-show-sao-paulo',
        destination: '/avcb-casas-noturnas-boates-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-para-clinica-odontologica-sao-paulo',
        destination: '/avcb-consultorios-medicos-odontologicos-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-clinica-veterinaria-sao-paulo',
        destination: '/avcb-clinica-hospital-veterinario-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-para-clinica-veterinaria-sao-paulo',
        destination: '/avcb-clinica-hospital-veterinario-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-hospital-veterinario-sao-paulo',
        destination: '/avcb-clinica-hospital-veterinario-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-hospital-veterinaria-sao-paulo',
        destination: '/avcb-clinica-hospital-veterinario-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-pet-shop-sao-paulo',
        destination: '/avcb-clinica-hospital-veterinario-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-estacionamento-sao-paulo',
        destination: '/avcb-estacionamento-garagem-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-para-estacionamento-sao-paulo',
        destination: '/avcb-estacionamento-garagem-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-garagem-sao-paulo',
        destination: '/avcb-estacionamento-garagem-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-para-garagem-sao-paulo',
        destination: '/avcb-estacionamento-garagem-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-estacionamento-rotativo-sao-paulo',
        destination: '/avcb-estacionamento-garagem-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-bar-adega-sao-paulo',
        destination: '/avcb-restaurante-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-para-salao-de-festas-sao-paulo',
        destination: '/avcb-salao-de-festas-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-hotel-sao-paulo',
        destination: '/avcb-hoteis-pousadas-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-pousada-sao-paulo',
        destination: '/avcb-hoteis-pousadas-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-para-pousada-sao-paulo',
        destination: '/avcb-hoteis-pousadas-sao-paulo',
        permanent: true,
      },
      {
        source: '/avcb-escola-faculdade-sao-paulo',
        destination: '/avcb-para-escola-sao-paulo',
        permanent: true,
      },
      // Serviços legados → páginas dedicadas
      { source: '/servicos/chuveiro-automatico-sprinkler-sao-paulo', destination: '/sprinklers', permanent: true },
      { source: '/servicos/instalacao-hidrante-sao-paulo', destination: '/hidrantes', permanent: true },
      { source: '/servicos/spda-para-raios-sao-paulo', destination: '/spda', permanent: true },
      { source: '/servicos/manutencao-sistemas-incendio', destination: '/manutencao', permanent: true },
      { source: '/servicos/projetos-seguranca-incendio', destination: '/projetos-incendio', permanent: true },
      { source: '/servicos/clcb-sao-paulo', destination: '/clcb-sao-paulo', permanent: true },
      { source: '/servicos/avcb-sao-paulo', destination: '/avcb-sao-paulo', permanent: true },
      { source: '/servicos/avcb-bares-restaurantes-sao-paulo', destination: '/avcb-restaurante-sao-paulo', permanent: true },
      { source: '/servicos/avcb-pousada-sao-paulo', destination: '/avcb-hoteis-pousadas-sao-paulo', permanent: true },
      { source: '/servicos/avcb-escola-faculdade-sao-paulo', destination: '/avcb-para-escola-sao-paulo', permanent: true },
      { source: '/servicos/avcb-para-drogaria-sao-paulo', destination: '/avcb-farmacia-drogaria-sao-paulo', permanent: true },
      { source: '/servicos/avcb-para-casa-noturna-sao-paulo', destination: '/avcb-casas-noturnas-boates-sao-paulo', permanent: true },
      { source: '/servicos/avcb-para-bar-com-show-sao-paulo', destination: '/avcb-casas-noturnas-boates-sao-paulo', permanent: true },
      // Brigada e preço
      { source: '/brigada', destination: '/treinamento-brigada', permanent: true },
      { source: '/avcb-preco', destination: '/quanto-custa-avcb-sao-paulo', permanent: true },
      // Edifício residencial → condomínio (mesma intenção, página customizada mais rica existe)
      { source: '/sistema-hidrante-edificio-residencial-avcb-sp', destination: '/sistema-de-hidrantes-para-condominio-sao-paulo', permanent: true },
      // Doorway pairs — consolidação de intenção duplicada
      { source: '/sistema-hidrante-galpao-industrial-avcb-sp', destination: '/sistema-de-hidrantes-para-galpao-sao-paulo', permanent: true },
      { source: '/sistema-alarme-incendio-galpao-industrial-avcb-sp', destination: '/alarme-de-incendio-galpao-industrial-sp', permanent: true },
      { source: '/sistema-alarme-incendio-hospital-avcb-sp', destination: '/alarme-de-incendio-hospital-clinica-sp', permanent: true },
      { source: '/sistema-alarme-incendio-edificio-comercial-sp', destination: '/alarme-de-incendio-comercial-escritorio-sp', permanent: true },
      { source: '/projeto-escada-pressurizada-avcb', destination: '/projeto-escada-pressurizada-avcb-sao-paulo', permanent: true },
      { source: '/sistema-hidrante-industria-quimica-sp', destination: '/sistema-de-hidrantes-para-industria-sao-paulo', permanent: true },
      { source: '/sistema-sprinkler-industria-quimica-sp', destination: '/sistema-de-sprinkler-para-industria-sao-paulo', permanent: true },
      // Páginas canibalizantes — consolidação de autoridade
      { source: '/alvara-bombeiro-escola-sao-paulo', destination: '/alvara-bombeiro-escola-faculdade-sao-paulo', permanent: true },
      { source: '/alvara-bombeiro-restaurante-sao-paulo', destination: '/alvara-bombeiro-bar-restaurante-sao-paulo', permanent: true },
      { source: '/alvara-bombeiro-pousada-sao-paulo', destination: '/alvara-bombeiro-hotel-pousada-sao-paulo', permanent: true },
      { source: '/laudo-bombeiro-escola-sao-paulo', destination: '/laudo-bombeiro-escola-faculdade-sao-paulo', permanent: true },
      { source: '/laudo-bombeiro-restaurante-sao-paulo', destination: '/laudo-bombeiro-bar-restaurante-sao-paulo', permanent: true },
      { source: '/laudo-bombeiro-pousada-sao-paulo', destination: '/laudo-bombeiro-hotel-pousada-sao-paulo', permanent: true },
      { source: '/avcb-condominio-sao-paulo', destination: '/avcb-para-condominio-sao-paulo', permanent: true },
      // Blog — consolidação de posts canibalizando (mesma intenção de busca)
      { source: '/blog/quanto-tempo-demora-para-emitir-o-avcb-sp', destination: '/blog/prazo-para-emissao-de-avcb', permanent: true },
      { source: '/blog/avcb-vencido-o-que-fazer-evitar-interdicao', destination: '/blog/avcb-vencido-o-que-fazer', permanent: true },
      { source: '/blog/quanto-custa-avcb-sp-precos-prazos', destination: '/blog/quanto-custa-avcb-em-sao-paulo', permanent: true },
      { source: '/blog/diferenca-entre-avcb-e-clcb-em-sao-paulo', destination: '/blog/diferenca-entre-avcb-e-clcb', permanent: true },
      { source: '/blog/avcb-x-clcb-diferenca-na-pratica', destination: '/blog/diferenca-entre-avcb-e-clcb', permanent: true },
      { source: '/blog/sprinkler-obrigatorio-sp', destination: '/blog/sprinkler-obrigatorio-para-quem-e-quando', permanent: true },
      { source: '/blog/o-que-e-avcb-e-quando-ele-e-obrigatorio', destination: '/blog/quem-precisa-de-avcb', permanent: true },
      { source: '/blog/avcb-restaurante-sao-paulo', destination: '/blog/avcb-para-restaurante-em-sp-como-regularizar-em-2026', permanent: true },
    ];
  },
};

export default nextConfig;
