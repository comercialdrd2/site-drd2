import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-para-formatura"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepParaFormaturaPage() {
  return <PtotepSeoLanding page={page} />;
}
