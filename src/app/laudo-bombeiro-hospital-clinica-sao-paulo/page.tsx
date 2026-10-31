import SeoContentLanding, { generateSeoMetadata } from "@/components/SeoContentLanding";
import { laudoBombeiroContent as content } from "@/data/pages/laudo-bombeiro-hospital-clinica-sao-paulo";
import LicencaSanitariaCrossLink from "@/components/LicencaSanitariaCrossLink";

export const metadata = generateSeoMetadata(content);

export default function Page() {
  return (
  <>
    <SeoContentLanding
      content={content}
      breadcrumbParent={{ label: "Laudo do Corpo de Bombeiros", href: "/avcb-sao-paulo" }}
      occupationType={"hospital clinica"}
    />
    <LicencaSanitariaCrossLink route="/laudo-bombeiro-hospital-clinica-sao-paulo" />
  </>
  );
}
