const fs = require('fs');
const path = require('path');

const appDir = path.join('src', 'app');
let totalFixed = 0;
let totalRemoved = 0;

// Match the entire hashtag div block — typically wrapped in a flex div
// Pattern: <div className="... flex flex-wrap gap-10 ..."><span>#...</span>...</div>
// Also match individual <span>#Word</span> patterns anywhere
const HASHTAG_SPAN_RE = /<span>#[A-Za-zÀ-ú0-9]+<\/span>/g;

// Match the container div that only has hashtag spans inside it
// e.g.: <div className="pt-12 flex flex-wrap gap-10 text-[9px] ...">..hashtags..</div>
const HASHTAG_BLOCK_RE = /\s*<div className="[^"]*flex[^"]*flex-wrap[^"]*gap-\d+[^"]*text-\[9px\][^"]*">\s*(?:<span>#[A-Za-zÀ-ú0-9]+<\/span>\s*)+<\/div>/g;

fs.readdirSync(appDir).forEach(dir => {
  const filePath = path.join(appDir, dir, 'page.tsx');
  if (!fs.existsSync(filePath)) return;

  const original = fs.readFileSync(filePath, 'utf8');
  
  // Only process files that have hashtag spans
  if (!original.match(HASHTAG_SPAN_RE)) return;

  let fixed = original;

  // Step 1: Remove entire hashtag block divs
  fixed = fixed.replace(HASHTAG_BLOCK_RE, '');

  // Step 2: Remove any remaining individual hashtag spans
  fixed = fixed.replace(HASHTAG_SPAN_RE, '');

  // Step 3: Clean up empty lines left behind (max 2 consecutive)
  fixed = fixed.replace(/\n{3,}/g, '\n\n');

  if (fixed !== original) {
    const removedCount = (original.match(HASHTAG_SPAN_RE) || []).length;
    fs.writeFileSync(filePath, fixed, 'utf8');
    totalFixed++;
    totalRemoved += removedCount;
    console.log('FIXED: ' + dir + ' — ' + removedCount + ' hashtag(s) removidas');
  }
});

console.log('\nTotal de arquivos corrigidos: ' + totalFixed);
console.log('Total de hashtags removidas: ' + totalRemoved);
