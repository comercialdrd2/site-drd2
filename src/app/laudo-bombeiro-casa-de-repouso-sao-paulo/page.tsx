import SeoContentLanding, { generateSeoMetadata } from "@/components/SeoContentLanding";
import { laudoBombeiroContent as content } from "@/data/pages/laudo-bombeiro-casa-de-repouso-sao-paulo";
import LicencaSanitariaCrossLink from "@/components/LicencaSanitariaCrossLink";

export const metadata = generateSeoMetadata(content);

export default function Page() {
  return (
  <>
    <SeoContentLanding
      content={content}
      breadcrumbParent={{ label: "Laudo do Corpo de Bombeiros", href: "/avcb-sao-paulo" }}
      occupationType={"casa de repouso"}
    />
    <LicencaSanitariaCrossLink route="/laudo-bombeiro-casa-de-repouso-sao-paulo" />
  </>
  );
}
