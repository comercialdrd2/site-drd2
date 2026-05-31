import SeoContentLanding, { generateSeoMetadata } from "@/components/SeoContentLanding";
import { laudoBombeiroContent as content } from "@/data/pages/laudo-bombeiro-shopping-sao-paulo";

export const metadata = generateSeoMetadata(content);

export default function Page() {
  return (
    <SeoContentLanding
      content={content}
      breadcrumbParent={{ label: "Laudo do Corpo de Bombeiros", href: "/avcb-sao-paulo" }}
      occupationType={"shopping"}
    />
  );
}
