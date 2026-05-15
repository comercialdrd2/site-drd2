import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-para-festival"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepParaFestivalPage() {
  return <PtotepSeoLanding page={page} />;
}
