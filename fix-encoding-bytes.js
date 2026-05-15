// Fix invalid UTF-8 bytes in all TSX/TS files
// Reads as binary, replaces invalid byte sequences with proper UTF-8
const fs = require("fs");
const path = require("path");

function fixEncoding(filePath) {
  const buf = fs.readFileSync(filePath);
  const out = [];
  let i = 0;
  let modified = false;

  while (i < buf.length) {
    const byte = buf[i];

    if (byte <= 0x7F) {
      // ASCII - valid single byte
      out.push(byte);
      i++;
    } else if ((byte & 0xE0) === 0xC0) {
      // 2-byte UTF-8 sequence (0xC0-0xDF)
      if (i + 1 < buf.length && (buf[i + 1] & 0xC0) === 0x80) {
        out.push(byte, buf[i + 1]);
        i += 2;
      } else {
        // Invalid - skip
        modified = true;
        i++;
      }
    } else if ((byte & 0xF0) === 0xE0) {
      // 3-byte UTF-8 sequence (0xE0-0xEF)
      if (i + 2 < buf.length && (buf[i + 1] & 0xC0) === 0x80 && (buf[i + 2] & 0xC0) === 0x80) {
        out.push(byte, buf[i + 1], buf[i + 2]);
        i += 3;
      } else {
        // Invalid - skip
        modified = true;
        i++;
      }
    } else if ((byte & 0xF8) === 0xF0) {
      // 4-byte UTF-8 sequence
      if (i + 3 < buf.length && (buf[i + 1] & 0xC0) === 0x80 && (buf[i + 2] & 0xC0) === 0x80 && (buf[i + 3] & 0xC0) === 0x80) {
        out.push(byte, buf[i + 1], buf[i + 2], buf[i + 3]);
        i += 4;
      } else {
        modified = true;
        i++;
      }
    } else {
      // Invalid byte (0x80-0xBF as standalone, or 0xF8-0xFF)
      // Try to interpret as Windows-1252 and encode as UTF-8
      const cp1252 = byte;
      // Windows-1252 characters 0xA0-0xFF map to Unicode Latin-1 Supplement
      if (cp1252 >= 0xA0) {
        // Encode as UTF-8 (U+00A0 to U+00FF = 2-byte sequences)
        out.push(0xC2 | (cp1252 >> 6), 0x80 | (cp1252 & 0x3F));
      }
      // Skip 0x80-0x9F (control characters) - just drop them
      modified = true;
      i++;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, Buffer.from(out));
    return true;
  }
  return false;
}

function walk(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) results = results.concat(walk(full));
    else if (f.endsWith(".tsx") || f.endsWith(".ts")) results.push(full);
  }
  return results;
}

const files = walk(path.join(__dirname, "src", "app"));
let fixed = 0;
for (const f of files) {
  try {
    if (fixEncoding(f)) {
      fixed++;
      console.log("Fixed encoding: " + path.relative(__dirname, f));
    }
  } catch (e) {
    console.error("Error: " + f + " - " + e.message);
  }
}
console.log("\nTotal files fixed: " + fixed);
