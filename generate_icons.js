const fs = require('fs');
const path = require('path');

// Generate clean SVG icons as PNG-named files for each service type
// Using canvas-less approach: write SVG files with .png extension won't work
// Instead, create proper SVG files and reference them, OR use inline SVG data URIs
// Best approach: create SVGs in the services folder

const icons = {
  'avcb': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <rect width="80" height="80" rx="16" fill="#FEF2F2"/>
  <path d="M40 12 L52 20 L52 44 C52 52 40 60 40 60 C40 60 28 52 28 44 L28 20 Z" fill="#DC2626" opacity="0.15"/>
  <path d="M40 16 L50 23 L50 44 C50 51 40 58 40 58 C40 58 30 51 30 44 L30 23 Z" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <path d="M35 38 L38 41 L45 34" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  'clcb': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <rect width="80" height="80" rx="16" fill="#FEF2F2"/>
  <rect x="22" y="20" width="36" height="44" rx="4" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <path d="M30 32 L50 32" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
  <path d="M30 40 L50 40" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
  <path d="M30 48 L44 48" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
  <circle cx="40" cy="20" r="5" fill="#DC2626"/>
</svg>`,

  'projetos': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <rect width="80" height="80" rx="16" fill="#FEF2F2"/>
  <path d="M20 56 L20 30 L32 18 L60 18 L60 56 Z" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <path d="M20 30 L32 30 L32 18" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <path d="M30 40 L50 40" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
  <path d="M30 47 L50 47" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
</svg>`,

  'alarme': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <rect width="80" height="80" rx="16" fill="#FEF2F2"/>
  <path d="M40 16 C40 16 25 28 25 44 L55 44 C55 28 40 16 40 16 Z" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <path d="M25 44 L20 50 L60 50 L55 44" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <path d="M36 50 C36 53 44 53 44 50" fill="none" stroke="#DC2626" stroke-width="2.5"/>
</svg>`,

  'sprinkler': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <rect width="80" height="80" rx="16" fill="#FEF2F2"/>
  <circle cx="40" cy="34" r="8" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <path d="M40 26 L40 18" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M26 34 L18 34" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M28 22 L22 16" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
  <path d="M52 22 L58 16" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
  <path d="M30 46 L26 54" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round"/>
  <path d="M40 46 L40 56" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round"/>
  <path d="M50 46 L54 54" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round"/>
</svg>`,

  'hidrante': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <rect width="80" height="80" rx="16" fill="#FEF2F2"/>
  <rect x="30" y="20" width="20" height="8" rx="2" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <rect x="26" y="28" width="28" height="22" rx="4" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <rect x="30" y="50" width="8" height="10" rx="1" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <rect x="42" y="50" width="8" height="10" rx="1" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <line x1="20" y1="36" x2="26" y2="36" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="54" y1="36" x2="60" y2="36" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,

  'spda': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <rect width="80" height="80" rx="16" fill="#FEF2F2"/>
  <path d="M40 12 L46 30 L60 30 L49 40 L53 58 L40 48 L27 58 L31 40 L20 30 L34 30 Z" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linejoin="round"/>
</svg>`,

  'manutencao': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <rect width="80" height="80" rx="16" fill="#FEF2F2"/>
  <path d="M52 20 C46 20 42 26 44 32 L24 52 C22 54 22 57 24 59 C26 61 29 61 31 59 L51 39 C57 41 63 37 63 31 C63 28 61 25 58 23 L53 28 L49 24 Z" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linejoin="round"/>
</svg>`,

  'brigada': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <rect width="80" height="80" rx="16" fill="#FEF2F2"/>
  <circle cx="33" cy="28" r="8" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <path d="M18 60 C18 50 26 44 33 44 C40 44 48 50 48 60" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M50 32 L62 32" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M50 38 L62 38" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M54 44 L62 44" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,

  'escada': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <rect width="80" height="80" rx="16" fill="#FEF2F2"/>
  <path d="M20 60 L20 46 L34 46 L34 34 L48 34 L48 22 L62 22 L62 60 Z" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linejoin="round"/>
</svg>`,

  'pet': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
  <rect width="80" height="80" rx="16" fill="#FEF2F2"/>
  <rect x="18" y="28" width="44" height="30" rx="4" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <path d="M28 28 L28 22 L52 22 L52 28" fill="none" stroke="#DC2626" stroke-width="2.5"/>
  <path d="M30 40 L50 40" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
  <path d="M30 47 L44 47" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
</svg>`,
};

const outDir = 'public/images/services';

Object.entries(icons).forEach(([name, svg]) => {
  const filePath = path.join(outDir, `${name}.png`);
  // Write as SVG but with .png extension — Next.js Image doesn't validate extension
  // Better: write actual SVG files and update services.ts to use .svg
  const svgPath = path.join(outDir, `${name}.svg`);
  fs.writeFileSync(svgPath, svg, 'utf8');
  console.log('Created:', svgPath);
});

console.log('\nNow updating services.ts to use .svg extensions...');
let servicesContent = fs.readFileSync('src/data/services.ts', 'utf8');
// Replace all /images/services/X.png with /images/services/X.svg
servicesContent = servicesContent.replace(/\/images\/services\/([a-z]+)\.png/g, '/images/services/$1.svg');
fs.writeFileSync('src/data/services.ts', servicesContent, 'utf8');
console.log('services.ts updated to use SVG icons.');
