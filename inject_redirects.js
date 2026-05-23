const fs = require('fs');
const configPath = 'next.config.mjs';
let content = fs.readFileSync(configPath, 'utf8');

const redirects = fs.readFileSync('generated_redirects.txt', 'utf8');

content = content.replace(
  'async redirects() {\n    return [',
  `async redirects() {\n    return [\n      // REDIRECTS DA LIMPEZA DE SEO (BALDE 1)\n      ${redirects.split('\\n').join('\\n      ')}`
);

fs.writeFileSync(configPath, content);
console.log('Redirects injetados com sucesso no next.config.mjs');
