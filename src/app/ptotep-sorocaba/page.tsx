import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-sorocaba"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepSorocabaPage() {
  return <PtotepSeoLanding page={page} />;
}
