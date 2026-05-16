export function JsonLD({ schema }: { schema: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://drd2.com.br";
const PHONE = process.env.NEXT_PUBLIC_WHATSAPP ? `+${process.env.NEXT_PUBLIC_WHATSAPP}` : "+5511942232969";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "comercial.drd2@gmail.com";
const SAME_AS_URLS = (process.env.NEXT_PUBLIC_SAME_AS_URLS || "")
  .split(",")
  .map((url) => url.trim())
  .filter(Boolean);

const address = {
  "@type": "PostalAddress",
  "streetAddress": "Rua Vergueiro, 3185",
  "addressLocality": "São Paulo",
  "addressRegion": "SP",
  "postalCode": "04101-300",
  "addressCountry": "BR",
};

const geo = {
  "@type": "GeoCoordinates",
  "latitude": -23.5855,
  "longitude": -46.6333,
};

const baseAreaServed = [
  { "@type": "City", "name": "São Paulo" },
  { "@type": "City", "name": "Guarulhos" },
  { "@type": "City", "name": "Osasco" },
  { "@type": "City", "name": "Santo André" },
  { "@type": "City", "name": "São Bernardo do Campo" },
  { "@type": "City", "name": "São Caetano do Sul" },
  { "@type": "City", "name": "Barueri" },
];

const knowsAbout = [
  "AVCB",
  "CLCB",
  "renovação de AVCB",
  "Projeto Técnico do Corpo de Bombeiros",
  "Via Fácil Bombeiros",
  "hidrantes",
  "sprinklers",
  "alarme de incêndio",
  "SPDA",
  "laudo de estanqueidade de gás",
  "brigada de incêndio",
];

function pageUrl(slug: string) {
  return `${BASE_URL}${slug.startsWith("/") ? slug : `/${slug}`}`;
}

function localCityFromSlug(slug?: string) {
  if (!slug) return "São Paulo";

  const normalized = slug.toLowerCase();
  if (normalized.includes("guarulhos")) return "Guarulhos";
  if (normalized.includes("campinas")) return "Campinas";
  if (normalized.includes("santos")) return "Santos";
  if (normalized.includes("barueri") || normalized.includes("alphaville")) return "Barueri";
  if (normalized.includes("santo-andre")) return "Santo André";
  if (normalized.includes("sao-bernardo")) return "São Bernardo do Campo";
  if (normalized.includes("sao-caetano")) return "São Caetano do Sul";
  if (normalized.includes("osasco")) return "Osasco";

  return "São Paulo";
}

function servedArea(neighborhood?: string, slug?: string) {
  if (!neighborhood) return baseAreaServed;

  const city = localCityFromSlug(slug);

  return [
    {
      "@type": "Place",
      "name": neighborhood,
      "containedInPlace": { "@type": "City", "name": city },
    },
    { "@type": "City", "name": city },
    ...baseAreaServed,
  ];
}

function organizationNode() {
  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${BASE_URL}/#organization`,
    "name": "DRD2 Engenharia",
    "legalName": "DRD2 Engenharia LTDA",
    "taxID": "51.774.619/0001-94",
    "description": "Engenharia especializada em AVCB, CLCB, projetos de incêndio, laudos, renovação e regularização junto ao Corpo de Bombeiros em São Paulo.",
    "url": BASE_URL,
    "telephone": PHONE,
    "email": EMAIL,
    "priceRange": "$$",
    "image": `${BASE_URL}/images/banner-avcb.webp`,
    ...(SAME_AS_URLS.length > 0 ? { "sameAs": SAME_AS_URLS } : {}),
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/images/logo-white.png`,
      "width": 600,
      "height": 60,
    },
    "address": address,
    "geo": geo,
    "areaServed": baseAreaServed,
    "founder": { "@id": `${BASE_URL}/#samuel-costa` },
    "employee": { "@id": `${BASE_URL}/#samuel-costa` },
    "knowsAbout": knowsAbout,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PHONE,
      "contactType": "sales",
      "areaServed": "BR",
      "availableLanguage": ["Portuguese"],
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00",
      },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de segurança contra incêndio e AVCB",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AVCB em São Paulo", "url": `${BASE_URL}/avcb-sao-paulo` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Renovação de AVCB", "url": `${BASE_URL}/renovacao-avcb` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CLCB em São Paulo", "url": `${BASE_URL}/clcb-sao-paulo` } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Projeto de incêndio", "url": `${BASE_URL}/projetos-incendio` } },
      ],
    },
  };
}

function responsibleEngineerNode() {
  return {
    "@type": "Person",
    "@id": `${BASE_URL}/#samuel-costa`,
    "name": "Samuel Costa",
    "jobTitle": "Engenheiro Civil e Engenheiro de Segurança do Trabalho",
    "description": "Responsável técnico da DRD2 Engenharia, CREA-SP 5070163570, com atuação em AVCB, CLCB, laudos e projetos de segurança contra incêndio.",
    "image": `${BASE_URL}/images/eng-samuel-oficial.webp`,
    "worksFor": { "@id": `${BASE_URL}/#organization` },
    "knowsAbout": knowsAbout,
    // Credencial profissional verificavel — Google usa para E-E-A-T em conteudo YMYL
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Registro profissional",
        "name": "CREA-SP 5070163570",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Conselho Regional de Engenharia e Agronomia de São Paulo",
          "url": "https://www.creasp.org.br",
        },
        "url": "https://www.creasp.org.br",
        "about": [
          { "@type": "Thing", "name": "Engenharia Civil" },
          { "@type": "Thing", "name": "Engenharia de Segurança do Trabalho" },
        ],
      },
    ],
  };
}

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [organizationNode(), responsibleEngineerNode()],
});

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.item.startsWith("http") ? item.item : `${BASE_URL}${item.item.startsWith("/") ? item.item : `/${item.item}`}`,
  })),
});

interface MasterSchemaProps {
  slug: string;
  title: string;
  description: string;
  faqs?: { question: string; answer: string }[];
  breadcrumbs: { name: string; item: string }[];
  neighborhood?: string;
  serviceName?: string;
}

export const generateMasterSchema = ({
  slug,
  title,
  description,
  faqs = [],
  breadcrumbs,
  neighborhood,
  serviceName,
}: MasterSchemaProps) => {
  const url = pageUrl(slug);
  const serviceId = `${url}/#service`;
  const breadcrumbId = `${url}/#breadcrumb`;
  const faqId = `${url}/#faq`;

  const graph: any[] = [
    organizationNode(),
    responsibleEngineerNode(),
    {
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      "url": url,
      "name": title,
      "description": description,
      "breadcrumb": { "@id": breadcrumbId },
      "mainEntity": faqs.length > 0
        ? { "@id": faqId }
        : serviceName
        ? { "@id": serviceId }
        : { "@id": `${BASE_URL}/#organization` },
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": serviceName ? { "@id": serviceId } : { "@id": `${BASE_URL}/#organization` },
      "publisher": { "@id": `${BASE_URL}/#organization` },
      "inLanguage": "pt-BR",
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.item.startsWith("http") ? item.item : `${BASE_URL}${item.item.startsWith("/") ? item.item : `/${item.item}`}`,
      })),
    },
  ];

  if (serviceName) {
    graph.push({
      "@type": "Service",
      "@id": serviceId,
      "name": serviceName,
      "serviceType": "Segurança Contra Incêndio",
      "url": url,
      "provider": { "@id": `${BASE_URL}/#organization` },
      "areaServed": servedArea(neighborhood, slug),
      "description": description,
      "audience": {
        "@type": "BusinessAudience",
        "name": "Síndicos, gestores prediais, proprietários, administradoras e empresas que precisam de regularização junto ao Corpo de Bombeiros",
      },
    });
  }

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": faqId,
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};

export const generateAboutPageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [organizationNode(), responsibleEngineerNode()],
});

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "url": BASE_URL,
  "name": "DRD2 Engenharia",
  "description": "Especialistas em AVCB, CLCB e projetos de segurança contra incêndio em São Paulo.",
  "publisher": { "@id": `${BASE_URL}/#organization` },
  "inLanguage": "pt-BR",
});
