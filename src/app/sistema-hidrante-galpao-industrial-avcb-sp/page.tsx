import HydrantSeoLanding from "@/components/HydrantSeoLanding";
import { hydrantSeoPages } from "@/data/hydrantSeoPages";

const page = hydrantSeoPages["/sistema-hidrante-galpao-industrial-avcb-sp"];

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.slug },
};

export default function Page() {
  return <HydrantSeoLanding page={page} />;
}
