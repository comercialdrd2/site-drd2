/**
 * Fix SWC compilation error in bairro pages.
 *
 * Root cause: SWC in Next.js 14.2.4 fails to parse multi-line
 * generateMasterSchema({...}) calls that contain nested arrays
 * when placed directly inside JSX attributes.
 *
 * Fix: Move the generateMasterSchema call OUTSIDE the return statement
 * as a const variable, then use {schema} in the JSX.
 */

const fs = require("fs");
const path = require("path");

function walk(d) {
  let r = [];
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) r = r.concat(walk(p));
    else if (f === "page.tsx") r.push(p);
  }
  return r;
}

const appDir = path.join(__dirname, "src", "app");
const pages = walk(appDir);
let fixed = 0;
let skipped = 0;

for (const file of pages) {
  try {
    let content = fs.readFileSync(file, "utf8");

    // Skip if already fixed or doesn't have the pattern
    if (content.includes("const _schema = generateMasterSchema(")) {
      skipped++;
      continue;
    }

    // Must contain the problematic JSX pattern
    if (!content.includes("<JsonLD schema={generateMasterSchema({")) {
      skipped++;
      continue;
    }

    // Find the start of the generateMasterSchema call inside JSX
    // Pattern: <JsonLD schema={generateMasterSchema({...})} />
    // We need to find the full call and move it before return

    // Find the return statement
    const returnIdx = content.lastIndexOf("  return (");
    if (returnIdx === -1) {
      console.log(`SKIP (no return): ${path.relative(__dirname, file)}`);
      skipped++;
      continue;
    }

    // Find <JsonLD schema={generateMasterSchema({ inside the return
    const jsonLdStart = content.indexOf("<JsonLD schema={generateMasterSchema({", returnIdx);
    if (jsonLdStart === -1) {
      skipped++;
      continue;
    }

    // Find the matching closing })} />
    // Count braces to find the end
    let braceCount = 0;
    let parenCount = 0;
    let i = jsonLdStart + "<JsonLD schema={generateMasterSchema({".length - 1;
    let schemaContentStart = i; // position of the first { in generateMasterSchema({

    // We're at the second { (the object literal). Count from here.
    braceCount = 1;
    i++;
    let schemaEnd = -1;
    while (i < content.length && braceCount > 0) {
      if (content[i] === "{") braceCount++;
      else if (content[i] === "}") {
        braceCount--;
        if (braceCount === 0) {
          schemaEnd = i;
          break;
        }
      }
      i++;
    }

    if (schemaEnd === -1) {
      console.log(`SKIP (no schema end): ${path.relative(__dirname, file)}`);
      skipped++;
      continue;
    }

    // The full generateMasterSchema call is from "generateMasterSchema({"  to "})"
    // which is at schemaContentStart-1 ... schemaEnd+1
    // The full JSX line is: <JsonLD schema={generateMasterSchema({...})} />
    // After schemaEnd we should have "})" and then " />"

    // Extract the schema object content (between the outer braces)
    const schemaObjStart = jsonLdStart + "<JsonLD schema={generateMasterSchema(".length;
    const schemaCallEnd = schemaEnd + 1; // includes the closing }

    // Find the closing }) and />
    // After schemaEnd we have })} />
    let afterSchema = content.indexOf("})} />", schemaEnd);
    if (afterSchema === -1) {
      // Try with newline
      afterSchema = content.indexOf("})} /\u003e", schemaEnd);
    }
    
    // Find end of the JsonLD line (after />)
    const jsonLdLineEnd = content.indexOf("\n", schemaEnd + 5);
    if (jsonLdLineEnd === -1) {
      console.log(`SKIP (no line end): ${path.relative(__dirname, file)}`);
      skipped++;
      continue;
    }

    // Extract the full generateMasterSchema({...}) call text
    const schemaCallText = content.slice(
      jsonLdStart + "<JsonLD schema={".length,
      schemaEnd + 2 // includes "}" + ")"
    );

    // Get indentation of the JsonLD line
    const lineStart = content.lastIndexOf("\n", jsonLdStart) + 1;
    const indent = content.slice(lineStart, jsonLdStart).match(/^(\s*)/)?.[1] || "      ";

    // Create the const variable before return
    const schemaConst = `  const _schema = ${schemaCallText.trim()};\n\n`;

    // Replace <JsonLD schema={generateMasterSchema({...})} /> with <JsonLD schema={_schema} />
    const jsonLdOriginal = content.slice(jsonLdStart, jsonLdLineEnd + 1);
    const jsonLdFixed = `${indent}<JsonLD schema={_schema} />\n`;

    // Build new content
    let newContent = content.slice(0, returnIdx) + 
                     schemaConst +
                     content.slice(returnIdx, jsonLdStart) +
                     jsonLdFixed +
                     content.slice(jsonLdLineEnd + 1);

    if (newContent !== content) {
      fs.writeFileSync(file, newContent, "utf8");
      fixed++;
      console.log(`Fixed: ${path.relative(__dirname, file)}`);
    }

  } catch (e) {
    console.error(`Error: ${file} - ${e.message}`);
  }
}

console.log(`\nFixed: ${fixed} files`);
console.log(`Skipped: ${skipped} files`);
