import PtotepSeoLanding, { generatePtotepMetadata } from "@/components/PtotepSeoLanding";
import { ptotepPagesBySlug } from "@/data/ptotepSeoPages";

const page = ptotepPagesBySlug["/regularizacao-de-eventos-sao-paulo"];

export const metadata = generatePtotepMetadata(page);

export default function RegularizacaoDeEventosSaoPauloPage() {
  return <PtotepSeoLanding page={page} />;
}
