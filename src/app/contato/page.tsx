// src/app/contato/page.tsx — SERVER Component (metadata now visible to Google)
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contato | DRD2 Engenharia",
  description: "Fale com a DRD2 Engenharia. Diagnóstico técnico gratuito para AVCB, CLCB e projetos de segurança contra incêndio em São Paulo. Resposta rápida por WhatsApp.",
  alternates: {
    canonical: "/contato",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
