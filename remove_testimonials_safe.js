const fs = require('fs');

let code = fs.readFileSync('src/data/bairros-renovacao.ts', 'utf8');

// The interface ends with "export const bairrosCondominio".
// Let's split the code into interface and data.
const splitIndex = code.indexOf('export const bairrosCondominio');
let interfacePart = code.substring(0, splitIndex);
let dataPart = code.substring(splitIndex);

// In dataPart, remove all testimonial blocks
dataPart = dataPart.replace(/\s*\"?testimonial\"?:\s*\{[\s\S]*?\},/g, '');

// Rejoin
code = interfacePart + dataPart;

fs.writeFileSync('src/data/bairros-renovacao.ts', code, 'utf8');
console.log('Testimonials safely removed from data objects.');
