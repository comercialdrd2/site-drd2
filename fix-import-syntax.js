const fs = require("fs");

// Fix import issues in the 4 pages manually
const pageFixes = [
  {
    file: "src/app/avcb-comercial-escritorio-sao-paulo/page.tsx",
    oldImport: `import { Phone, CheckCircle2, AlertTriangle, Building, FileCheck, Store, Briefcase, Landmark   MapPin, Lightbulb, Users,\n} from "lucide-react";`,
    newImport: `import {\n  Phone, CheckCircle2, AlertTriangle, Building, FileCheck,\n  Store, Briefcase, Landmark, MapPin, Lightbulb, Users,\n} from "lucide-react";`
  },
  {
    file: "src/app/avcb-farmacia-drogaria-sao-paulo/page.tsx",
    oldImport: `  Coffee, LayoutGrid\n  CheckCircle2,\n} from "lucide-react";`,
    newImport: `  Coffee, LayoutGrid, CheckCircle2,\n} from "lucide-react";`
  },
];

for (const fix of pageFixes) {
  let c = fs.readFileSync(fix.file, "utf8");
  if (c.includes(fix.oldImport)) {
    c = c.replace(fix.oldImport, fix.newImport);
    fs.writeFileSync(fix.file, c, "utf8");
    console.log("Fixed:", fix.file);
  } else {
    console.log("Pattern not found in:", fix.file);
    // Show what the current import looks like
    const m = c.split("\n").slice(0, 10);
    m.forEach((l, i) => console.log(i+1, l));
  }
}
