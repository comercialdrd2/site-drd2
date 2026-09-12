import SprinklerSeoLanding from "@/components/SprinklerSeoLanding";
import { sprinklerSeoPages } from "@/data/sprinklerSeoPages";

const page = sprinklerSeoPages["/sistema-de-sprinkler-para-industria-sao-paulo"];

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.slug },
};

export default function Page() {
  return <SprinklerSeoLanding page={page} />;
}
