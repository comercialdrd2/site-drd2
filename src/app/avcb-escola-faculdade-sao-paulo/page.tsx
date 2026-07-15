import AvcbNicheLanding, { generateAvcbNicheMetadata } from "@/components/AvcbNicheLanding";
import { avcbNichePagesBySlug } from "@/data/avcbNichePages";

const page = avcbNichePagesBySlug["/avcb-escola-faculdade-sao-paulo"];

export const metadata = generateAvcbNicheMetadata(page);

export default function Page() {
  return <AvcbNicheLanding page={page} />;
}
