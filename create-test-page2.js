const fs = require("fs");

// Test with accented characters in schema - same as failing bairro pages
const content = `import Image from "next/image";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import SocialProof from "@/components/SocialProof";

const _pageTitle = "AVCB na Bela Vista SP | Engenheiro para Restaurantes";
const _pageDesc = "AVCB na Bela Vista com engenheiro especializado. DRD2 Engenharia.";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: "/test" },
};

export default function TestPage() {
  const whatsappLink = "https://wa.me/" + process.env.NEXT_PUBLIC_WHATSAPP;

  const faqItems = [
    { question: "Q1 Restaurante?", answer: "A1 regularização." },
    { question: "Q2 Condomínio?", answer: "A2 aprovação." },
  ];

  const _schema = generateMasterSchema({
    slug: "/test",
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Bela Vista",
    serviceName: "AVCB na Bela Vista",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Centro de SP", item: "/avcb-centro" },
      { name: "Bela Vista", item: "/test" },
    ]
  });

  return (
    <>
      <JsonLD schema={_schema} />
      <h1>Test</h1>
    </>
  );
}
`;

fs.writeFileSync("src/app/__test__/page.tsx", content, "utf8");
console.log("Test page with accents created.");
