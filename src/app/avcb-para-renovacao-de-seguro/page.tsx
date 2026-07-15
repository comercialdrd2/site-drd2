import AvcbNicheLanding, { generateAvcbNicheMetadata } from "@/components/AvcbNicheLanding";
import { avcbNichePagesBySlug } from "@/data/avcbNichePages";

const page = avcbNichePagesBySlug["/avcb-para-renovacao-de-seguro"];

export const metadata = generateAvcbNicheMetadata(page);

export default function AvcbRenovacaoSeguroPage() {
  return <AvcbNicheLanding page={page} />;
}
