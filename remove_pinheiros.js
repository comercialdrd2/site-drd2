const fs = require('fs');
let c = fs.readFileSync('src/data/bairros-renovacao.ts', 'utf8');

const regex = /\{\s*\"slug\":\s*\"pinheiros\"[\s\S]*?\"faq4a\":\s*\"Na Zona Oeste[^\"]+\"\s*\},/;
c = c.replace(regex, '');
fs.writeFileSync('src/data/bairros-renovacao.ts', c, 'utf8');
console.log('Duplicate pinheiros in bairrosRestaurante removed.');
