import AvcbNicheLanding, { generateAvcbNicheMetadata } from "@/components/AvcbNicheLanding";
import { avcbNichePagesBySlug } from "@/data/avcbNichePages";
import LicencaSanitariaCrossLink from "@/components/LicencaSanitariaCrossLink";

const page = avcbNichePagesBySlug["/avcb-clinica-hospital-veterinario-sao-paulo"];

export const metadata = generateAvcbNicheMetadata(page);

export default function AvcbClinicaHospitalVeterinarioPage() {
  return (
    <>
      <AvcbNicheLanding page={page} />
      <LicencaSanitariaCrossLink route="/avcb-clinica-hospital-veterinario-sao-paulo" />
    </>
  );
}
