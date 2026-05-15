import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/ptotep-para-food-park"];

export const metadata = generatePtotepMetadata(page);

export default function PtotepParaFoodParkPage() {
  return <PtotepSeoLanding page={page} />;
}
