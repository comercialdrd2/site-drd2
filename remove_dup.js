const fs = require('fs');
let c = fs.readFileSync('src/data/bairros-renovacao.ts', 'utf8');
const p1 = c.indexOf('"slug": "pinheiros"');
if (p1 !== -1) {
    const p2 = c.indexOf('"slug": "pinheiros"', p1 + 10);
    if (p2 !== -1) {
        const start = c.lastIndexOf('{', p2);
        const end = c.indexOf('ctaFinal:', start) + 50;
        const endBrace = c.indexOf('}', end);
        c = c.substring(0, start) + c.substring(endBrace + 2); // remove from { to },
        fs.writeFileSync('src/data/bairros-renovacao.ts', c, 'utf8');
        console.log('Duplicata removida');
    }
}
