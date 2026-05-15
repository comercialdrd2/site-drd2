import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-barueri"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepBarueriPage() {
  return <PtotepSeoLanding page={page} />;
}
