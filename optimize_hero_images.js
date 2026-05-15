const fs = require('fs');
const path = require('path');

const srcDir = './src/app';

function getFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  files.forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      if (file === 'page.tsx') {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });
  return arrayOfFiles;
}

const allPages = getFiles(srcDir, []);
let count = 0;

for (const pageFile of allPages) {
  let content = fs.readFileSync(pageFile, 'utf8');

  // Look for the generic Next.js Image component inside the Hero section
  // It usually looks like this:
  // <Image
  //   src="/images/banner-avcb.png"
  //   alt="..."
  //   fill
  //   className="object-cover opacity-20 grayscale brightness-50"
  //   priority
  // />
  
  if (content.includes('priority') && content.includes('<Image') && content.includes('/images/banner-avcb.png')) {
      if (!content.includes('quality={')) {
          content = content.replace(/( priority(\n\s*))(\/>)/g, "$1sizes=\"100vw\"\n          quality={60}\n        $3");
      }
      fs.writeFileSync(pageFile, content);
      count++;
  }
}

console.log(`Core Web Vitals Img LCP atualizado em ${count} páginas.`);
