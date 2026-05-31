import SeoContentLanding, { generateSeoMetadata } from "@/components/SeoContentLanding";
import { renovacaoClcbEscolaContent as content } from "@/data/pages/renovacao-clcb-escola-sao-paulo";

export const metadata = generateSeoMetadata(content);

export default function Page() {
  return (
    <SeoContentLanding
      content={content}
      breadcrumbParent={{ label: "Renovação de CLCB", href: "/clcb-sao-paulo" }}
      occupationType={"escola"}
    />
  );
}
