import { blogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";
import { JsonLD } from "@/components/JsonLD";
import { BookOpen, ArrowRight } from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.drd2.com.br";

export const metadata = {
  title: "Blog DRD2 Engenharia | Segurança Contra Incêndio em SP",
  description: "Artigos técnicos sobre AVCB, CLCB, alarme, sprinkler, hidrante e regularização junto ao Corpo de Corpo de Bombeiros de São Paulo. Conteúdo da DRD2 Engenharia.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${BASE_URL}/blog/#blog`,
        "name": "Blog DRD2 Engenharia",
        "description": "Artigos técnicos sobre AVCB, CLCB, alarme, sprinkler, hidrante e regularização junto ao Corpo de Corpo de Bombeiros de São Paulo.",
        "url": `${BASE_URL}/blog`,
        "publisher": { "@id": `${BASE_URL}/#organization` },
        "inLanguage": "pt-BR",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${BASE_URL}/blog` },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLD schema={schema} />

      {/* Hero Section B2B */}
      <section className="relative text-white overflow-hidden min-h-[450px] flex items-center bg-gray-900 border-b-4 border-red-600">
        <Image
          src="/images/blog/fire_safety_equipment_premium.webp"
          alt="Blog B2B Engenharia"
          fill
          className="object-cover object-center opacity-30 grayscale-[70%] mix-blend-overlay"
          priority
        sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-5xl py-16 text-center">
          <span className="inline-flex items-center gap-2 bg-red-800/50 text-red-100 font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6 border border-red-500/50 text-xs shadow-lg">
            <BookOpen className="w-4 h-4" /> Inteligência Regulatória
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Blog da DRD2 Engenharia
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Estratégias de aprovação no Corpo de Bombeiros e proteção patrimonial para administradores.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50 flex-grow relative z-20 mt-[-30px] rounded-t-3xl">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col group">
                
                {/* Image Placeholder Dinâmico PREMIUM */}
                <Link href={`/blog/${post.slug}`} className="relative h-60 w-full bg-gray-900 overflow-hidden block">
                   {post.image ? (
                     <Image
                       src={post.image}
                       alt={post.title}
                       fill
                       sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                       quality={75}
                       loading="lazy"
                       className="object-cover group-hover:scale-105 transition-transform duration-700"
                     />
                   ) : (
                     <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
                        <div className="w-16 h-16 rounded-full bg-red-900/50 flex items-center justify-center mb-4 border border-red-800/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                          <BookOpen className="w-8 h-8 text-red-500" />
                        </div>
                        <h3 className="text-white font-bold opacity-30 text-sm tracking-widest uppercase">Artigo B2B</h3>
                     </div>
                   )}
                   <div className="absolute top-4 left-4 z-20">
                     <span className="bg-red-600/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md shadow-lg border border-red-500">
                       {post.category}
                     </span>
                   </div>
                </Link>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-sm font-bold tracking-widest text-gray-400 mb-4 uppercase">
                    {new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-red-700 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{post.excerpt}</p>
                  
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center justify-between w-full font-bold text-red-700 uppercase tracking-widest text-sm pt-6 border-t border-gray-100 group-hover:text-gray-900 transition-colors">
                    <span>Ler Artigo Técnico</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
