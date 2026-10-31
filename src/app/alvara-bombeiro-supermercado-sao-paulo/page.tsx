import SeoContentLanding, { generateSeoMetadata } from "@/components/SeoContentLanding";
import { alvaraBombeiroContent as content } from "@/data/pages/alvara-bombeiro-supermercado-sao-paulo";
import LicencaSanitariaCrossLink from "@/components/LicencaSanitariaCrossLink";

export const metadata = generateSeoMetadata(content);

export default function Page() {
  return (
  <>
    <SeoContentLanding
      content={content}
      breadcrumbParent={{ label: "Alvará do Corpo de Bombeiros", href: "/avcb-sao-paulo" }}
      occupationType={"supermercado"}
    />
    <LicencaSanitariaCrossLink route="/alvara-bombeiro-supermercado-sao-paulo" />
  </>
  );
}
