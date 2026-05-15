const fs = require("fs");
const path = require("path");

fs.mkdirSync("src/app/__test__", { recursive: true });

const content = `import Image from "next/image";
import { JsonLD, generateMasterSchema } from "@/components/JsonLD";
import LeadForm from "@/components/LeadForm";
import NeighborhoodSilo from "@/components/NeighborhoodSilo";
import SocialProof from "@/components/SocialProof";

const _pageTitle = "Test Title";
const _pageDesc = "Test Description";

export const metadata = {
  title: _pageTitle,
  description: _pageDesc,
  alternates: { canonical: "/test" },
};

export default function TestPage() {
  const whatsappLink = "https://wa.me/" + process.env.NEXT_PUBLIC_WHATSAPP;

  const faqItems = [
    { question: "Q1?", answer: "A1." },
    { question: "Q2?", answer: "A2." },
  ];

  const _schema = generateMasterSchema({
    slug: "/test",
    title: _pageTitle,
    description: _pageDesc,
    neighborhood: "Test",
    serviceName: "Test Service",
    faqs: faqItems,
    breadcrumbs: [
      { name: "Home", item: "/" },
      { name: "Test", item: "/test" },
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
console.log("Test page created.");
