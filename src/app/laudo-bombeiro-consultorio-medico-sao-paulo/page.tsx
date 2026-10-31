import SeoContentLanding, { generateSeoMetadata } from "@/components/SeoContentLanding";
import { laudoBombeiroContent as content } from "@/data/pages/laudo-bombeiro-consultorio-medico-sao-paulo";
import LicencaSanitariaCrossLink from "@/components/LicencaSanitariaCrossLink";

export const metadata = generateSeoMetadata(content);

export default function Page() {
  return (
  <>
    <SeoContentLanding
      content={content}
      breadcrumbParent={{ label: "Laudo do Corpo de Bombeiros", href: "/avcb-sao-paulo" }}
      occupationType={"consultorio medico"}
    />
    <LicencaSanitariaCrossLink route="/laudo-bombeiro-consultorio-medico-sao-paulo" />
  </>
  );
}
