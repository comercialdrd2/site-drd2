import type { Metadata } from "next";
import { SITE } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Caminho da página, com barra no final. Ex.: "/servicos/pintura-predial/" */
  path?: string;
  image?: string;
  robots?: string;
  type?: "website" | "article";
};

/** Monta título, descrição, canonical, robots e Open Graph de uma página. */
export function pageMeta({ title, description, path, image, robots = "index,follow", type = "website" }: PageMetaInput): Metadata {
  const [index, follow] = robots.split(",").map((s) => s.trim());
  return {
    title: { absolute: title },
    description,
    alternates: path ? { canonical: path } : undefined,
    robots: { index: index === "index", follow: follow === "follow" },
    openGraph: {
      locale: "pt_BR",
      type,
      siteName: SITE.name,
      title,
      description,
      url: path,
      images: image ? [{ url: image }] : undefined,
    },
  };
}
