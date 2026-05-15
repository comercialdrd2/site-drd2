import SpdaSeoLanding from "@/components/SpdaSeoLanding";
import { spdaSeoPages } from "@/data/spdaSeoPages";

const page = spdaSeoPages["/inspecao-manutencao-spda-sao-paulo"];

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.slug },
};

export default function Page() {
  return <SpdaSeoLanding page={page} />;
}
