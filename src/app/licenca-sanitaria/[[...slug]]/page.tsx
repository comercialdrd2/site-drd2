import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LsScript from "../LsScript";
import index from "@/data/licenca-sanitaria/index.json";
import { LS_ORIGIN, lsPublicPath } from "@/lib/licencaSanitariaHost";

type Entry = { path: string; key: string; segments: string[] };
type PageData = {
  path: string;
  title: string;
  description: string;
  html: string;
  schema: object[];
  script: string;
  type: "article" | "website";
};

export const dynamicParams = false;

const ENTRIES = index as Entry[];
const OG_IMAGE = "/images/licenca-sanitaria/og-licenca-sanitaria.png";

function find(slug?: string[]): Entry | undefined {
  const s = (slug ?? []).join("/");
  return ENTRIES.find((e) => e.segments.join("/") === s);
}

function load(entry: Entry): PageData {
  const file = path.join(process.cwd(), "src", "data", "licenca-sanitaria", "pages", `${entry.key}.json`);
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export function generateStaticParams() {
  return ENTRIES.map((e) => ({ slug: e.segments }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }): Metadata {
  const entry = find(params.slug);
  if (!entry) return {};
  const p = load(entry);
  const url = LS_ORIGIN + lsPublicPath(p.path);
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: url },
    openGraph: {
      title: p.title,
      description: p.description,
      url,
      type: p.type,
      locale: "pt_BR",
      siteName: "DRD2 Engenharia",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "DRD2 Licença Sanitária em São Paulo" }],
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: [OG_IMAGE] },
  };
}

export default function Page({ params }: { params: { slug?: string[] } }) {
  const entry = find(params.slug);
  if (!entry) notFound();
  const p = load(entry);
  return (
    <>
      {p.schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div dangerouslySetInnerHTML={{ __html: p.html }} />
      {p.script ? <LsScript code={p.script} /> : null}
    </>
  );
}
