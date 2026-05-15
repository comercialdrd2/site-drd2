import AlarmSeoLanding from "@/components/AlarmSeoLanding";
import { alarmSeoPages } from "@/data/alarmSeoPages";

const page = alarmSeoPages["/sistema-alarme-incendio-edificio-comercial-sp"];

export const metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.slug },
};

export default function Page() {
  return <AlarmSeoLanding page={page} />;
}
