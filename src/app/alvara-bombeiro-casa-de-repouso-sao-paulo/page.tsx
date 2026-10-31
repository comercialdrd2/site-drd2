import SeoContentLanding, { generateSeoMetadata } from "@/components/SeoContentLanding";
import { alvaraBombeiroContent as content } from "@/data/pages/alvara-bombeiro-casa-de-repouso-sao-paulo";
import LicencaSanitariaCrossLink from "@/components/LicencaSanitariaCrossLink";

export const metadata = generateSeoMetadata(content);

export default function Page() {
  return (
  <>
    <SeoContentLanding
      content={content}
      breadcrumbParent={{ label: "Alvará do Corpo de Bombeiros", href: "/avcb-sao-paulo" }}
      occupationType={"casa de repouso"}
    />
    <LicencaSanitariaCrossLink route="/alvara-bombeiro-casa-de-repouso-sao-paulo" />
  </>
  );
}
