import SeoContentLanding, { generateSeoMetadata } from "@/components/SeoContentLanding";
import { renovacaoClcbConsultorioContent as content } from "@/data/pages/renovacao-clcb-consultorio-clinica-sao-paulo";

export const metadata = generateSeoMetadata(content);

export default function Page() {
  return (
    <SeoContentLanding
      content={content}
      breadcrumbParent={{ label: "Renovação de CLCB", href: "/clcb-sao-paulo" }}
      occupationType={"consultorio clinica"}
    />
  );
}
