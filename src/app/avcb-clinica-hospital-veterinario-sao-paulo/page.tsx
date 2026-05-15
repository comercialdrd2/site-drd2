import AvcbNicheLanding, { generateAvcbNicheMetadata } from "@/components/AvcbNicheLanding";
import { avcbNichePagesBySlug } from "@/data/avcbNichePages";

const page = avcbNichePagesBySlug["/avcb-clinica-hospital-veterinario-sao-paulo"];

export const metadata = generateAvcbNicheMetadata(page);

export default function AvcbClinicaHospitalVeterinarioPage() {
  return <AvcbNicheLanding page={page} />;
}
