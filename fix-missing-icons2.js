const fs = require("fs");

// Fix all 4 failing pages by adding missing icons
const pageFixes = {
  "avcb-alphaville-barueri": ["Zap"],
  "avcb-comercial-escritorio-sao-paulo": ["MapPin", "Lightbulb", "Users"],
  "avcb-farmacia-drogaria-sao-paulo": ["CheckCircle2"],
  "avcb-salao-de-festas-sao-paulo": ["CheckCircle2"]
};

for (const [page, icons] of Object.entries(pageFixes)) {
  const file = `src/app/${page}/page.tsx`;
  let c = fs.readFileSync(file, "utf8");

  // Find the lucide-react import block
  const match = c.match(/import\s*\{([^}]+)\}\s*from\s*"lucide-react"/s);
  if (!match) { console.log("No lucide import in " + page); continue; }
  
  const imported = match[1].match(/\b[A-Z][a-zA-Z0-9]+\b/g) || [];
  const toAdd = icons.filter(icon => !imported.includes(icon));
  
  if (toAdd.length === 0) {
    console.log(`${page}: all icons already imported`);
    continue;
  }
  
  // Add missing icons before closing } of lucide import
  const newImport = match[0].replace(
    /\}\s*from\s*"lucide-react"/,
    `  ${toAdd.join(", ")},\n} from "lucide-react"`
  );
  c = c.replace(match[0], newImport);
  fs.writeFileSync(file, c, "utf8");
  console.log(`Fixed ${page}: added ${toAdd.join(", ")}`);
}
