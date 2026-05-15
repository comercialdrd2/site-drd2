import BrigadeSeoLanding from "@/components/BrigadeSeoLanding";
import { brigadeSeoPages } from "@/data/brigadeSeoPages";

const page = brigadeSeoPages["/brigada-incendio-hospital-sp"];

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.slug },
};

export default function Page() {
  return <BrigadeSeoLanding page={page} />;
}
