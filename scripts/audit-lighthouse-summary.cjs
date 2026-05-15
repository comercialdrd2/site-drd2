const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(process.cwd()).filter((name) => /^lh-.*\.json$/.test(name));

function metric(audit, field = "numericValue") {
  if (!audit) return null;
  return audit[field] ?? null;
}

const rows = files.map((file) => {
  const json = JSON.parse(fs.readFileSync(path.join(process.cwd(), file), "utf8"));
  const audits = json.audits || {};
  return {
    file,
    url: json.finalDisplayedUrl || json.finalUrl || "",
    formFactor: json.configSettings?.formFactor || "",
    throttlingMethod: json.configSettings?.throttlingMethod || "",
    performance: Math.round((json.categories?.performance?.score ?? 0) * 100),
    lcpMs: metric(audits["largest-contentful-paint"]),
    inpMs: metric(audits["interaction-to-next-paint"]),
    tbtMs: metric(audits["total-blocking-time"]),
    cls: metric(audits["cumulative-layout-shift"]),
    ttfbMs: metric(audits["server-response-time"]),
    fcpMs: metric(audits["first-contentful-paint"]),
    speedIndexMs: metric(audits["speed-index"]),
    unusedJsMs: metric(audits["unused-javascript"]),
    unusedCssMs: metric(audits["unused-css-rules"]),
    imageSavingsMs: metric(audits["uses-optimized-images"]),
  };
});

console.table(rows);
