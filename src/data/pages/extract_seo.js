
const fs = require('fs');
const logPath = 'C:\\Users\\Administrador\\.gemini\\antigravity\\brain\\d92f03b6-0f74-487e-ad9d-6c5424746c1c\\.system_generated\\logs\\overview.txt';
const outputPath = 'c:\\Users\\Administrador\\OneDrive\\Área de Trabalho\\site SEO\\src\\data\\pages\\temp_seo_copy.txt';

const content = fs.readFileSync(logPath, 'utf8');
const lines = content.split('\n');

for (const line of lines) {
    if (line.includes('"step_index":303')) {
        try {
            const json = JSON.parse(line);
            fs.writeFileSync(outputPath, json.content, 'utf8');
            console.log('Success!');
            process.exit(0);
        } catch (e) {
            console.error('Failed to parse line:', e.message);
        }
    }
}
console.log('Line not found');
