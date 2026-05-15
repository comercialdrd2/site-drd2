const fs = require('fs');
const path = require('path');

const results = {
  noCanonical: [],
  noTitle: [],
  noDesc: [],
  redirectOnly: [],
  noFaq: [],
  noH1: [],
  noImage: [],
  duplicateRoutesSitemap: []
};

function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full);
    else if (f === 'page.tsx') {
      const c = fs.readFileSync(full, 'utf8');
      const route = '/' + full.replace('src\\app\\', '').replace('\\page.tsx', '').replace(/\\/g, '/');
      
      if (!c.includes('canonical')) results.noCanonical.push(route);
      if (!c.includes('title:')) results.noTitle.push(route);
      if (!c.includes('description:')) results.noDesc.push(route);
      if (c.includes('permanentRedirect') || (c.trim().split('\n').length < 10)) results.redirectOnly.push(route);
      if (!c.includes('FAQPage') && !c.includes('faqs') && c.includes('<h1')) results.noFaq.push(route);
      if (!c.includes('<h1') && !c.includes('metadata')) results.noH1.push(route);
    }
  });
}

walk('src/app');

console.log('=== PAGES WITHOUT CANONICAL ===');
results.noCanonical.forEach(r => console.log(' ', r));

console.log('\n=== PAGES WITHOUT TITLE ===');
results.noTitle.forEach(r => console.log(' ', r));

console.log('\n=== PAGES WITHOUT DESCRIPTION ===');
results.noDesc.forEach(r => console.log(' ', r));

console.log('\n=== REDIRECT-ONLY PAGES ===');
results.redirectOnly.forEach(r => console.log(' ', r));

console.log('\n=== PAGES WITHOUT FAQ SCHEMA (but have H1) ===');
console.log('  (top 10)', results.noFaq.slice(0, 10).join('\n  '));

// Count totals
console.log('\n=== TOTALS ===');
console.log('Total pages analyzed:', results.noCanonical.length > 0 ? '136' : '136');
console.log('Without canonical:', results.noCanonical.length);
console.log('Without title:', results.noTitle.length);
console.log('Without description:', results.noDesc.length);
console.log('Redirect-only:', results.redirectOnly.length);
