const fs = require('fs');
const content = fs.readFileSync('src/data/services.ts', 'utf8');
// Find all icon: "..." patterns
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('icon:')) {
    console.log(`Line ${i+1}: ${line.trim()}`);
  }
});
