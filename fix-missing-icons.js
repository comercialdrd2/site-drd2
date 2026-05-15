// Fix missing CheckCircle2 import in failing pages
const fs = require("fs");

const fixes = {
  "src/app/avcb-farmacia-drogaria-sao-paulo/page.tsx": ["CheckCircle2"],
  "src/app/avcb-salao-de-festas-sao-paulo/page.tsx": ["CheckCircle2"],
};

for (const [file, icons] of Object.entries(fixes)) {
  let c = fs.readFileSync(file, "utf8");
  
  for (const icon of icons) {
    if (!c.includes(icon)) {
      // Add to lucide-react import
      c = c.replace(
        /} from "lucide-react";/,
        `  ${icon},\n} from "lucide-react";`
      );
      console.log(`Added ${icon} to ${file}`);
    } else {
      console.log(`${icon} already in ${file}`);
    }
  }
  
  fs.writeFileSync(file, c, "utf8");
}

// For avcb-alphaville-barueri and avcb-comercial-escritorio, check what icons are actually missing
const toCheck = [
  "src/app/avcb-alphaville-barueri/page.tsx",
  "src/app/avcb-comercial-escritorio-sao-paulo/page.tsx"
];

for (const file of toCheck) {
  const c = fs.readFileSync(file, "utf8");
  // Get lucide import block
  const lucideMatch = c.match(/import\s*\{([^}]+)\}\s*from\s*"lucide-react"/s);
  if (lucideMatch) {
    const imported = lucideMatch[1].match(/\b[A-Z][a-zA-Z0-9]+\b/g) || [];
    // Find icons used in JSX (components used as <IconName)
    const jsxIcons = [...new Set((c.match(/<([A-Z][a-zA-Z0-9]+)\s/g) || []).map(m => m.slice(1).trim()))];
    const knownComponents = ["JsonLD", "Image", "Link", "LeadForm", "NeighborhoodSilo", "TrustBar", "CtaWhatsApp", "SocialProof", "BreadcrumbNav"];
    const missingIcons = jsxIcons.filter(i => !imported.includes(i) && !knownComponents.includes(i));
    console.log(`\n${file}:`);
    console.log(`  Missing: ${missingIcons.join(", ") || "none"}`);
  }
}
