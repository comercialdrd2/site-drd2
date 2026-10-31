import SeoContentLanding, { generateSeoMetadata } from "@/components/SeoContentLanding";
import { alvaraBombeiroContent as content } from "@/data/pages/alvara-bombeiro-padaria-sao-paulo";
import LicencaSanitariaCrossLink from "@/components/LicencaSanitariaCrossLink";

export const metadata = generateSeoMetadata(content);

export default function Page() {
  return (
  <>
    <SeoContentLanding
      content={content}
      breadcrumbParent={{ label: "Alvará do Corpo de Bombeiros", href: "/avcb-sao-paulo" }}
      occupationType={"padaria"}
    />
    <LicencaSanitariaCrossLink route="/alvara-bombeiro-padaria-sao-paulo" />
  </>
  );
}
