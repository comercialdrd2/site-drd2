import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import { JsonLD, generateBreadcrumbSchema } from "@/components/JsonLD";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone, Clock, List } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import BlogStrategicLinks from "@/components/BlogStrategicLinks";
import BlogRelatedPosts from "@/components/BlogRelatedPosts";
import ScrollDepthTracker from "@/components/ScrollDepthTracker";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import BlogAuthorEvidence from "@/components/BlogAuthorEvidence";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import { processBlogContent } from "@/lib/blogToc";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Posts thin (<300 palavras) marcados como noindex enquanto nao sao expandidos.
// Listagem aqui para fácil revisão — remover slug daqui = volta a indexar.
// Reavaliar a cada expansão de conteúdo.
const NOINDEX_BLOG_SLUGS = new Set<string>([
  "avcb-para-casa-de-repouso-sao-paulo", // 168 palavras — duplicate de pagina de servico
  "vistoria-bombeiros-porta-corta-fogo", // 270 palavras — expandir antes de indexar
  "avcb-para-pousada-exigencias-e-como-regularizar", // 290 — duplicate de servico
  "embargo-corpo-de-bombeiros-como-resolver", // 295 — expandir
  "seguro-predial-sem-avcb-o-que-acontece-em-sinistro", // 297 — expandir
]);

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return { title: "Post não encontrado | DRD2 Engenharia" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.drd2.com.br";
  const canonical = `/blog/${post.slug}`;
  const image = post.image || "/images/blog/fire_safety_equipment_premium.webp";
  const isThin = NOINDEX_BLOG_SLUGS.has(post.slug);

  return {
    title: `${post.title} | DRD2 Engenharia`,
    description: post.excerpt,
    alternates: {
      canonical,
    },
    // Posts thin: noindex evita penalizar o dominio inteiro
    robots: isThin ? { index: false, follow: true } : undefined,
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
      url: `${siteUrl}${canonical}`,
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) notFound();

  // Tempo de leitura — 200 palavras/min como média confortável em PT-BR
  const wordCount = post.content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  // Sumário automático a partir dos H2 (ids injetados no HTML)
  const { html: processedContent, toc } = processBlogContent(post.content);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: post.title, item: `/blog/${post.slug}` }
  ]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drd2.com.br'}/blog/${post.slug}/#article`,
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "articleSection": post.category,
    "inLanguage": "pt-BR",
    "wordCount": wordCount,
    "timeRequired": `PT${readingTime}M`,
    "keywords": ["AVCB", "CLCB", "renovação de AVCB", "Corpo de Bombeiros", "regularização em São Paulo", post.category].join(", "),
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drd2.com.br'}/blog/${post.slug}`,
    "image": post.image
      ? `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drd2.com.br'}${post.image}`
      : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drd2.com.br'}/images/blog/fire_safety_equipment_premium.webp`,
    "author": {
      "@type": "Person",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drd2.com.br'}/#samuel-costa`,
      "name": "Samuel Costa",
      "jobTitle": "Engenheiro Civil e Segurança do Trabalho",
      "description": "CREA-SP 5070163570 — Responsável Técnico da DRD2 Engenharia"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DRD2 Engenharia",
      "url": process.env.NEXT_PUBLIC_SITE_URL || "https://www.drd2.com.br",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drd2.com.br'}/logo.png`,
        "width": 600,
        "height": 60
      }
    },
    "about": [
      { "@type": "Thing", "name": "AVCB" },
      { "@type": "Thing", "name": "CLCB" },
      { "@type": "Thing", "name": "Corpo de Bombeiros de São Paulo" },
      { "@type": "Thing", "name": "Segurança contra incêndio" }
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drd2.com.br'}/blog/${post.slug}`
    }
  };

  const faqSchema = post.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  } : null;

  return (
    <>
      <ReadingProgressBar />
      <JsonLD schema={breadcrumbSchema} />
      <JsonLD schema={blogSchema} />
      {faqSchema && <JsonLD schema={faqSchema} />}

      <article className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o Blog
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
              <span className="bg-red-50 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-gray-400 text-sm">
                {new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="inline-flex items-center gap-1.5 text-gray-400 text-sm">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                {readingTime} min de leitura
              </span>
            </div>
            <h1 className="text-3xl md:text-3xl font-bold text-secondary leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-500 italic pb-8 border-b border-gray-100">
              {post.excerpt}
            </p>
            <BlogAuthorEvidence variant="byline" published={post.date} updated={post.date} />
          </header>

          {post.image ? (
            <div className="relative w-full h-[400px] mb-12 rounded-[2rem] overflow-hidden shadow-lg border border-gray-100">
               <Image src={post.image} alt={post.title} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
            </div>
          ) : (
            <div className="relative w-full min-h-[300px] mb-12 rounded-[2rem] overflow-hidden bg-slate-950 border border-slate-900 flex items-center justify-center p-8 md:p-12 shadow-2xl">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/10 skew-x-12 transform translate-x-1/4 blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-1/3 h-full bg-slate-900/50 -skew-x-12 transform -translate-x-1/4 blur-xl"></div>
               <div className="relative z-10 w-full text-center flex flex-col items-center">
                  <div className="w-12 h-1.5 bg-red-600 mb-8 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                  <h2 className="text-white font-black text-2xl md:text-4xl tracking-tighter uppercase italic drop-shadow-lg max-w-3xl leading-[1.1] text-balance">
                    {post.title}
                  </h2>
                  <div className="mt-8 flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-slate-300 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Conteúdo Técnico DRD2 Engenharia</span>
                  </div>
               </div>
            </div>
          )}

          {/* Pulse CTA - Fast Track for interested leads */}
          <div className="mb-12 bg-red-600 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_0_20px_rgba(220,38,38,0.3)] animate-pulse-subtle">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-ping">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <p className="font-bold text-lg md:text-xl">Precisa de auxílio técnico urgente?</p>
            </div>
            <TrackedWhatsAppLink
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              source="hero_cta"
              className="bg-white text-red-600 font-extrabold px-6 py-3 rounded-xl hover:bg-gray-100 transition-all text-sm uppercase tracking-widest whitespace-nowrap"
            >
              Falar com engenheiro especialista Agora
            </TrackedWhatsAppLink>
          </div>

          {toc.length >= 3 && (
            <nav
              aria-label="Sumário do artigo"
              className="my-10 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-7"
            >
              <div className="flex items-center gap-2 mb-4">
                <List className="w-4 h-4 text-red-600" aria-hidden="true" />
                <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                  Neste artigo
                </p>
              </div>
              <ol className="space-y-2 list-decimal list-inside marker:text-red-600 marker:font-black">
                {toc.map((entry) => (
                  <li key={entry.id} className="text-sm text-slate-700 leading-relaxed">
                    <a
                      href={`#${entry.id}`}
                      className="hover:text-red-600 hover:underline font-medium transition-colors"
                    >
                      {entry.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div
            className="prose prose-lg prose-red max-w-none text-gray-700
                       prose-h2:text-2xl prose-h2:font-bold prose-h2:text-secondary prose-h2:mt-10 prose-h2:scroll-mt-24
                       prose-h3:text-xl prose-h3:font-bold prose-h3:text-secondary prose-h3:mt-8
                       prose-p:leading-relaxed prose-p:mb-6"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          <BlogStrategicLinks
            currentSlug={`/blog/${post.slug}`}
            relatedServiceSlug={post.relatedServiceSlug}
          />

          {/* Sobre o Autor - E-E-A-T */}
          <div className="my-12 bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
             <div className="relative w-28 h-28 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image 
                   src="/images/eng-samuel-oficial.webp" 
                   alt="Eng. Samuel Costa, responsável técnico DRD2 Engenharia, CREA-SP 5070163570" 
                   fill 
                   className="object-cover" 
                   sizes="112px"
                   loading="lazy"
                />
             </div>
             <div>
                <h4 className="text-xl font-black text-secondary mb-2 italic tracking-tight">Sobre o Autor</h4>
                <p className="text-slate-600 font-medium leading-relaxed">
                   <strong>Eng. Samuel Costa</strong> é Engenheiro Civil e Engenheiro de Segurança do Trabalho (CREA-SP 5070163570), responsável técnico da DRD2 Engenharia e especialista em projetos de AVCB em São Paulo.
                </p>
             </div>
          </div>

          {/* Banner de CTA no Meio do Artigo / Final do Texto */}
          <div className="my-16 bg-gray-900 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center md:text-left border-b-4 border-red-600 shadow-2xl">
             <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 transform translate-x-1/4 blur-3xl"></div>
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-md">
                   <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                      Regularização de AVCB com Respaldo de Engenharia
                   </h3>
                   <p className="text-red-200 text-lg font-medium">
                      Evite exigências desnecessárias e multas do Corpo de Bombeiros. Conduzimos todo o processo para você ter 100% de tranquilidade.
                   </p>
                </div>
                <TrackedWhatsAppLink
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                  source="post_cta"
                  className="bg-red-600 hover:bg-red-700 text-white font-black px-10 py-5 rounded-2xl text-lg shadow-lg hover:-translate-y-1 transition-all whitespace-nowrap"
                >
                   Falar com engenheiro especialista Agora
                </TrackedWhatsAppLink>
             </div>
          </div>

          {post.faqs && (
            <div className="mt-8 space-y-4">
              {post.faqs.map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer open:ring-2 open:ring-primary/20 transition-all hover:bg-gray-50">
                  <summary className="flex items-center justify-between p-6 font-bold text-secondary text-lg select-none">
                    {faq.question}
                    <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed text-base border-t border-gray-100">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          )}

          <BlogRelatedPosts
            currentSlug={post.slug}
            currentCategory={post.category}
            currentTitle={post.title}
          />

        </div>
      </article>

      {/* LeadForm em largura total — fora do container estreito */}
      <LeadForm />

      <ScrollDepthTracker />
    </>
  );
}
