import AvcbNicheLanding, { generateAvcbNicheMetadata } from "@/components/AvcbNicheLanding";
import { avcbNichePagesBySlug } from "@/data/avcbNichePages";

const page = avcbNichePagesBySlug["/avcb-estacionamento-garagem-sao-paulo"];

export const metadata = generateAvcbNicheMetadata(page);

export default function AvcbEstacionamentoGaragemPage() {
  return <AvcbNicheLanding page={page} />;
}
