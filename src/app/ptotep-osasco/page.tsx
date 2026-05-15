import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-osasco"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepOsascoPage() {
  return <PtotepSeoLanding page={page} />;
}
