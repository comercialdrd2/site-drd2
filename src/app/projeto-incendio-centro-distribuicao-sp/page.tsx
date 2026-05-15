import FireProjectSeoLanding from "@/components/FireProjectSeoLanding";
import { fireProjectSeoPages } from "@/data/fireProjectSeoPages";

const page = fireProjectSeoPages["/projeto-incendio-centro-distribuicao-sp"];

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.slug },
};

export default function Page() {
  return <FireProjectSeoLanding page={page} />;
}
