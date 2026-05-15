const fs = require('fs');

const pages = [
  { file: 'src/app/projeto-pet/page.tsx', slug: '/projeto-pet' },
  { file: 'src/app/projeto-escada-pressurizada-avcb-sao-paulo/page.tsx', slug: '/projeto-escada-pressurizada-avcb-sao-paulo' }
];

pages.forEach(p => {
  let c = fs.readFileSync(p.file, 'utf8');
  // Only add if not already present
  if (!c.includes('canonical')) {
    // Find the closing }; of the metadata object and insert before it
    c = c.replace(
      /^(export const metadata = \{[\s\S]+?)(^};)/m,
      '$1  alternates: {\n    canonical: "' + p.slug + '",\n  },\n$2'
    );
    fs.writeFileSync(p.file, c, 'utf8');
    console.log('Fixed canonical:', p.file);
  } else {
    console.log('Already has canonical:', p.file);
  }
});
