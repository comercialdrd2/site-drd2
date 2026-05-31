import SeoContentLanding, { generateSeoMetadata } from "@/components/SeoContentLanding";
import { renovacaoClcbComercioContent as content } from "@/data/pages/renovacao-clcb-comercio-sao-paulo";

export const metadata = generateSeoMetadata(content);

export default function Page() {
  return (
    <SeoContentLanding
      content={content}
      breadcrumbParent={{ label: "Renovação de CLCB", href: "/clcb-sao-paulo" }}
      occupationType={"comercio"}
    />
  );
}
