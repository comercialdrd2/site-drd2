const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/data/pages');
const files = fs.readdirSync(dir).filter(f => f.startsWith('renovacao-avcb-') && f.endsWith('.ts'));

const keywordsToBold = [
    "AVCB vencido", "renovação preventiva", "diagnóstico técnico", "Corpo de Bombeiros", 
    "DRD2 Engenharia", "Comunique-se", "interdição", "interditado", "interditada",
    "responsabilidade civil e criminal", "alvará de funcionamento", "Vigilância Sanitária",
    "Prefeitura", "Seguro predial", "projeto técnico"
];

function processContent(content) {
    // 1. Add CTA to intro[0]
    const typeMatch = content.match(/Renovação de AVCB para (.*?) em São Paulo/);
    const type = typeMatch ? typeMatch[1].toLowerCase() : 'estabelecimento';
    
    // Find intro[0]
    // The string is usually: intro: [\n    "Supermercado interditado...",\n
    content = content.replace(/intro:\s*\[\s*"([^"]+)",/g, (match, p1) => {
        if (p1.includes('AVCB do(a)')) return match; // already added
        return `intro: [\n    "<strong>${p1.split(' ')[0]} ${p1.split(' ')[1]}</strong> ${p1.substring(p1.split(' ')[0].length + p1.split(' ')[1].length + 2)}<br/><br/>📲 <strong>AVCB do(a) ${type} vencido?</strong> Fale agora com um engenheiro pelo WhatsApp e receba o diagnóstico gratuito.",`;
    });

    // 2. Bold keywords outside of HTML tags
    keywordsToBold.forEach(kw => {
        // Only replace if not already wrapped in <strong>
        const regex = new RegExp(`(?<!<strong>)${kw}(?!<\\/strong>)`, 'gi');
        content = content.replace(regex, match => `<strong>${match}</strong>`);
    });

    // 3. Break long paragraphs. We'll look for strings inside properties and break them.
    // e.g. "blabla. blabla. blabla." -> "blabla.<br/><br/>blabla.<br/><br/>blabla."
    // Let's replace ". " with ".<br/><br/>" but only in strings inside intro, intro, body, etc.
    // Too risky to do globally. Let's do it specifically for intro[1] and h2_*.intro and h2_*.body
    
    // Replace ". " with ".<br/><br/>" in intro[1]
    content = content.replace(/("No [^"]+")/g, (match) => {
        if(match.includes('<br/>')) return match;
        return match.split('. ').join('.<br/><br/>');
    });

    content = content.replace(/intro:\s*"([^"]+)"/g, (match, p1) => {
        if(p1.includes('<br/>')) return match;
        return `intro: "${p1.split('. ').join('.<br/><br/>')}"`;
    });

    content = content.replace(/body:\s*"([^"]+)"/g, (match, p1) => {
        if(p1.includes('<br/>')) return match;
        return `body: "${p1.split('. ').join('.<br/><br/>')}"`;
    });

    return content;
}

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const newContent = processContent(content);
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Processed ${file}`);
});
