import SeoContentLanding, { generateSeoMetadata } from "@/components/SeoContentLanding";
import { alvaraBombeiroContent as content } from "@/data/pages/alvara-bombeiro-salao-de-festas-sao-paulo";

export const metadata = generateSeoMetadata(content);

export default function Page() {
  return (
    <SeoContentLanding
      content={content}
      breadcrumbParent={{ label: "Alvará do Corpo de Bombeiros", href: "/avcb-sao-paulo" }}
      occupationType={"salao de festas"}
    />
  );
}
