const fs = require("fs");
const path = require("path");

const file = path.join(process.cwd(), "src", "app", "blog", "[slug]", "page.tsx");
let source = fs.readFileSync(file, "utf8");

const metadataStart = source.indexOf("export function generateMetadata");
const pageStart = source.indexOf("\nexport default function BlogPostPage");
if (metadataStart === -1 || pageStart === -1) {
  throw new Error("Could not locate generateMetadata block.");
}

const metadataBlock = `export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return { title: "Post não encontrado | DRD2 Engenharia" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drd2engenharia.com.br";
  const canonical = \`/blog/\${post.slug}\`;
  const image = post.image || "/images/banner-avcb.webp";

  return {
    title: \`\${post.title} | DRD2 Engenharia\`,
    description: post.excerpt,
    alternates: {
      canonical,
    },
    keywords: [
      "AVCB",
      "CLCB",
      "renovação de AVCB",
      "Corpo de Bombeiros",
      "regularização",
      "São Paulo",
      post.category,
    ],
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: \`\${siteUrl}\${canonical}\`,
      title: post.title,
      description: post.excerpt,
      siteName: "DRD2 Engenharia",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["Samuel Costa"],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}
`;

source = `${source.slice(0, metadataStart)}${metadataBlock}${source.slice(pageStart)}`;

source = source
  .replace('"@type": "Article"', '"@type": "BlogPosting"')
  .replace('"dateModified": post.date,\n    "inLanguage": "pt-BR",', '"dateModified": post.date,\n    "articleSection": post.category,\n    "inLanguage": "pt-BR",\n    "keywords": ["AVCB", "CLCB", "renovação de AVCB", "Corpo de Bombeiros", "regularização em São Paulo", post.category].join(", "),')
  .replace('/#samuelsilvacosta`', '/#samuel-costa`')
  .replace('    "mainEntityOfPage": {\n', '    "about": [\n      { "@type": "Thing", "name": "AVCB" },\n      { "@type": "Thing", "name": "CLCB" },\n      { "@type": "Thing", "name": "Corpo de Bombeiros de São Paulo" },\n      { "@type": "Thing", "name": "Segurança contra incêndio" }\n    ],\n    "mainEntityOfPage": {\n');

fs.writeFileSync(file, source, "utf8");
console.log("Improved dynamic blog metadata and schema.");
