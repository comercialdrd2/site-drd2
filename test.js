const fs = require('fs');
const content = fs.readFileSync('src/data/bairros-renovacao.ts', 'utf8');

const matchCondominio = content.match(/export const bairrosCondominio: BairroData\[\] = \[([\s\S]*?)\];\s*export const/);
if (matchCondominio) {
  const slugs = [...matchCondominio[1].matchAll(/\"?slug\"?:\s*\"([^\"]+)\"/g)].map(m => m[1]);
  console.log('Slugs in bairrosCondominio:', slugs.length);
  console.log(slugs);
}

const matchRestaurante = content.match(/export const bairrosRestaurante: BairroData\[\] = \[([\s\S]*?)\n\];/);
if (matchRestaurante) {
  const slugs = [...matchRestaurante[1].matchAll(/\"?slug\"?:\s*\"([^\"]+)\"/g)].map(m => m[1]);
  console.log('Slugs in bairrosRestaurante:', slugs.length);
  console.log(slugs);
}
