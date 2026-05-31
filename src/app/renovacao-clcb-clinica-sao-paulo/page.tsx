import SeoContentLanding, { generateSeoMetadata } from "@/components/SeoContentLanding";
import { renovacaoClcbClinicaContent as content } from "@/data/pages/renovacao-clcb-clinica-sao-paulo";

export const metadata = generateSeoMetadata(content);

export default function Page() {
  return (
    <SeoContentLanding
      content={content}
      breadcrumbParent={{ label: "Renovação de CLCB", href: "/clcb-sao-paulo" }}
      occupationType={"clinica"}
    />
  );
}
