const fs = require("fs");
const c = fs.readFileSync("src/app/avcb-analia-franco/page.tsx", "utf8");
const lines = c.split("\n");
console.log("Total lines:", lines.length);
lines.forEach((line, i) => {
  const hasNonAscii = [...line].some(ch => ch.charCodeAt(0) > 127);
  if (hasNonAscii) {
    console.log((i+1) + " [UNICODE]:", line.substring(0, 100));
    // Show the unicode chars
    const unichars = [...line].filter(ch => ch.charCodeAt(0) > 127).map(ch => 'U+'+ch.charCodeAt(0).toString(16).toUpperCase().padStart(4,'0')+'('+ch+')');
    console.log("  chars:", unichars.join(", "));
  }
});
