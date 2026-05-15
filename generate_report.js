const fs = require('fs');

const data = JSON.parse(fs.readFileSync('audit_raw.json', 'utf8'));

let md = '# Relatório de Auditoria SEO Técnico, CRO e Engenharia\n\n';

md += '## Falhas Críticas de Engenharia de Incêndio (Normas Desatualizadas)\n';
let cntNormas = 0;
data.forEach(item => {
  if (item.hasOutdatedDecree && !item.hasNewDecree) {
    md += `- **[FALHA] Decreto Obsoleto**: A página \`${item.file}\` menciona ou se baseia no Decreto Estadual antigo (ex: 63.911 ou 56.819) mas não menciona o novo Decreto 69.118/2024. Isso fere a credibilidade técnica e SEO.\n`;
    cntNormas++;
  }
});
if (cntNormas === 0) md += '> Nenhuma falha crítica de menção a decreto antigo encontrada.\n';

md += '\n## Falhas de CRO (Conversão)\n';
let cntCRO = 0;
data.forEach(item => {
  if (!item.hasLeadForm) {
    md += `- **[RISCO] Lead Form Ausente**: \`${item.file}\` não possui formulário de captação direto.\n`;
    cntCRO++;
  }
  if (!item.hasWhatsapp) {
    md += `- **[FALHA] WhatsApp Ausente**: \`${item.file}\` não possui call-to-action direto para o WhatsApp, quebrando o funil de contato.\n`;
    cntCRO++;
  }
});
if (cntCRO === 0) md += '> Botões de conversão e formulários estão presentes em todas as páginas mapeadas.\n';

md += '\n## Falhas Técnicas de SEO (On-Page)\n';
let cntSEO = 0;

// Duplicidade de Title
const titles = {};
data.forEach(item => {
  if(!titles[item.title]) titles[item.title] = [];
  titles[item.title].push(item.file);
});

for (let title in titles) {
  if (titles[title].length > 1) {
    cntSEO++;
    md += `- **[DUPLICIDADE] Title Tag Repetida**: O título \`${title}\` está duplicado nas páginas: \n`;
    titles[title].forEach(f => md += `  - \`${f}\`\n`);
  }
}

data.forEach(item => {
  if (item.multipleH1) {
    md += `- **[SEO] Múltiplos H1**: A página \`${item.file}\` possui mais de uma tag H1, diluindo o foco semântico.\n`;
    cntSEO++;
  }
});

if (cntSEO === 0) md += '> Sem erros de H1 ou titles duplicados detectados.\n';

fs.writeFileSync('C:/Users/Administrador/.gemini/antigravity/brain/a3c16a5e-c2e0-4f63-af4d-d79480763adc/relatorio_auditoria_tecnica_seo.md', md);
console.log('Report generated.');
