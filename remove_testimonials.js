const fs = require('fs');

let code = fs.readFileSync('src/data/bairros-renovacao.ts', 'utf8');

const match = code.match(/\{\s*\"slug\":\s*\"vila-madalena\"[\s\S]*?faq4a[^\}]+\}/);
if (match) {
  console.log('Vila madalena exists and has content.');
} else {
  console.log('Vila madalena content missing or malformed.');
}

// Remove all testimonial fields
code = code.replace(/\s*\"?testimonial\"?:\s*\{[\s\S]*?\},/g, '');

fs.writeFileSync('src/data/bairros-renovacao.ts', code, 'utf8');
console.log('Testimonials removed.');
