const fs = require('fs');
const path = require('path');

const fixes = [
  { dir: 'avcb-butanta',           wrong: 'Pinheiros', correct: 'Butantã' },
  { dir: 'avcb-casa-verde',        wrong: 'Pinheiros', correct: 'Casa Verde' },
  { dir: 'avcb-centro-bela-vista', wrong: 'Pinheiros', correct: 'Bela Vista' },
  { dir: 'avcb-consolacao',        wrong: 'Saúde',     correct: 'Consolação' },
  { dir: 'avcb-ipiranga',          wrong: 'Pinheiros', correct: 'Ipiranga' },
  { dir: 'avcb-jacana',            wrong: 'Pinheiros', correct: 'Jaçanã' },
  { dir: 'avcb-lapa',              wrong: 'Pinheiros', correct: 'Lapa' },
  { dir: 'avcb-penha',             wrong: 'Pinheiros', correct: 'Penha' },
  { dir: 'avcb-perdizes',          wrong: 'Pinheiros', correct: 'Perdizes' },
  { dir: 'avcb-republica',         wrong: 'Ipiranga',  correct: 'República' },
  { dir: 'avcb-santana',           wrong: 'Saúde',     correct: 'Santana' },
  { dir: 'avcb-saude',             wrong: 'Jabaquara', correct: 'Saúde' },
  { dir: 'avcb-tucuruvi',          wrong: 'Pinheiros', correct: 'Tucuruvi' },
  { dir: 'avcb-vila-leopoldina',   wrong: 'Pinheiros', correct: 'Vila Leopoldina' },
  { dir: 'avcb-vila-madalena',     wrong: 'Pinheiros', correct: 'Vila Madalena' },
  { dir: 'avcb-vila-prudente',     wrong: 'Pinheiros', correct: 'Vila Prudente' },
];

const appDir = path.join('src', 'app');
let totalFixed = 0;

fixes.forEach(({ dir, wrong, correct }) => {
  const filePath = path.join(appDir, dir, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.log('SKIP (not found): ' + dir);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Protect URLs/hrefs/slugs from replacement
  const urlMatches = [];
  content = content.replace(/href="[^"]*"|canonical:\s*"[^"]*"|item:\s*"[^"]*"|src="[^"]*"/g, (match) => {
    const id = 'URLPROTECT' + urlMatches.length + 'END';
    urlMatches.push(match);
    return id;
  });

  // Replace wrong bairro name
  const escaped = wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escaped, 'g');
  const count = (content.match(regex) || []).length;
  let fixed = content.replace(regex, correct);

  // Restore protected URLs
  urlMatches.forEach((orig, i) => {
    fixed = fixed.replace('URLPROTECT' + i + 'END', orig);
  });

  if (fixed !== original) {
    fs.writeFileSync(filePath, fixed, 'utf8');
    totalFixed++;
    console.log('FIXED: ' + dir + ' (' + count + 'x "' + wrong + '" -> "' + correct + '")');
  } else {
    console.log('NO CHANGE: ' + dir);
  }
});

console.log('\nTotal de arquivos corrigidos: ' + totalFixed + '/16');
