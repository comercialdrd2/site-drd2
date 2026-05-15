import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blog";

type Props = {
  currentSlug: string;
  currentCategory: string;
  currentTitle: string;
  max?: number;
};

/**
 * Ranking simples por relevancia (server-side, zero JS):
 * - +3 pontos por mesma categoria
 * - +1 ponto por palavra significativa do title atual encontrada no title do candidato
 *   (palavras com 4+ letras, removendo acentos e stopwords)
 *
 * Pega os top N posts (default 3), excluindo o atual.
 * Static folders (sem entrada no blog.ts) nao entram — sao 8 posts "premium" cujo
 * conteudo divulgaremos via outros mecanismos (BlogStrategicLinks, etc).
 */

const STOPWORDS = new Set([
  "como", "qual", "para", "sobre", "entre", "quem", "esta", "este", "essa", "isso",
  "e", "ou", "de", "da", "do", "das", "dos", "no", "na", "nos", "nas", "um", "uma",
  "uns", "umas", "que", "se", "por", "pelo", "pela", "com", "sem", "os", "as",
  "em", "ao", "aos", "tem", "ser", "sao", "voce", "voce",
]);

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 4 && !STOPWORDS.has(w));
}

function scorePost(target: BlogPost, candidate: BlogPost, targetTokens: string[]) {
  let score = 0;
  if (candidate.category === target.category) score += 3;
  const candTokens = tokenize(candidate.title);
  const candSet = new Set(candTokens);
  for (const t of targetTokens) if (candSet.has(t)) score += 1;
  return score;
}

export default function BlogRelatedPosts({
  currentSlug,
  currentCategory,
  currentTitle,
  max = 3,
}: Props) {
  const current: BlogPost = {
    slug: currentSlug,
    title: currentTitle,
    category: currentCategory,
    date: "",
    excerpt: "",
    content: "",
  };
  const targetTokens = tokenize(currentTitle);

  const ranked = blogPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({ post: p, score: scorePost(current, p, targetTokens) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max);

  if (ranked.length === 0) return null;

  return (
    <section
      className="my-16 py-12 border-t border-slate-200"
      aria-label="Posts relacionados"
    >
      <div className="flex items-center gap-2 mb-8">
        <span className="w-12 h-0.5 bg-red-600" aria-hidden="true" />
        <p className="text-xs font-black uppercase tracking-widest text-slate-500">
          Leia também
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ranked.map(({ post }) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-red-600/30 hover:shadow-lg transition-all"
          >
            {post.image && (
              <div className="relative w-full h-40 bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-5">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-2 block">
                {post.category}
              </span>
              <h3 className="font-black text-slate-900 text-base leading-snug mb-3 line-clamp-3 group-hover:text-red-600 transition-colors">
                {post.title}
              </h3>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 group-hover:text-red-600 transition-colors">
                Continuar lendo
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
