const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');

const imageMap = {
  // Regions / Neighborhoods
  'aricanduva': '/images/blog/blog_hero_aricanduva_avcb.png',
  'itaquera': '/images/blog/blog_hero_itaquera_avcb.png',
  'tatuape': '/images/blog/blog_hero_mooca_avcb.png',
  'penha': '/images/blog/blog_hero_penha_avcb.png',
  'mooca': '/images/blog/blog_hero_mooca_avcb.png',
  'vila-prudente': '/images/blog/blog_hero_vila_prudente_avcb.png',
  'lapa': '/images/blog/blog_hero_lapa_avcb.png',
  'perdizes': '/images/blog/blog_hero_perdizes_avcb.png',
  'pinheiros': '/images/blog/blog_hero_pinheiros_avcb.png',
  'butanta': '/images/blog/blog_hero_butanta_avcb.png',
  'vila-mariana': '/images/blog/blog_hero_vila_mariana_neighborhood_avcb.png',
  'saude': '/images/blog/blog_hero_saude_neighborhood_avcb.png',
  'moema': '/images/blog/blog_hero_moema_condominios_avcb.png',
  'santos': '/images/blog/blog_hero_avcb_condominio.webp',
  'campinas': '/images/blog/blog_hero_mooca_industrial_avcb.png',
  'guarulhos': '/images/blog/blog_hero_mooca_industrial_avcb.png',
  'zona-leste': '/images/blog/blog_hero_itaquera_avcb.png',
  'zona-sul': '/images/blog/blog_hero_vila_mariana_neighborhood_avcb.png',
  'zona-norte': '/images/blog/blog_hero_saude_neighborhood_avcb.png',
  'zona-oeste': '/images/blog/blog_hero_lapa_avcb.png',
  'centro': '/images/blog/blog_hero_mooca_avcb.png',
  'diadema': '/images/blog/blog_hero_mooca_industrial_avcb.png',
  'sao-bernardo': '/images/blog/blog_hero_mooca_industrial_avcb.png',
  'sao-caetano': '/images/blog/blog_hero_mooca_industrial_avcb.png',
  'sorocaba': '/images/blog/blog_hero_mooca_industrial_avcb.png',
  'sao-jose-dos-campos': '/images/blog/blog_hero_mooca_industrial_avcb.png',
  'liberdade': '/images/blog/blog_hero_mooca_avcb.png',
  'se': '/images/blog/blog_hero_mooca_avcb.png',
  'santana': '/images/blog/blog_hero_saude_neighborhood_avcb.png',
  'sacoma': '/images/blog/blog_hero_vila_prudente_avcb.png',
  'tucuruvi': '/images/blog/blog_hero_saude_neighborhood_avcb.png',
  'vila-leopoldina': '/images/blog/blog_hero_lapa_avcb.png',
  'vila-olimpia': '/images/blog/blog_hero_moema_condominios_avcb.png',

  // Other specific
  'estanqueidade': '/images/blog/blog_hero_avcb_condominio.webp',
  'prazo': '/images/blog/blog_hero_avcb_preco.webp',
  'custo': '/images/blog/blog_hero_avcb_preco.webp',
  'renovacao': '/images/blog/blog_hero_avcb_vencido.webp',
};

let updatedCount = 0;

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('/images/banner-avcb.webp')) {
        let bestImage = '/images/blog/fire_safety_equipment_premium.webp'; // Fallback for landing pages
        const lowerPath = fullPath.toLowerCase();
        
        // Skip blog/[slug]/page.tsx since it uses it as a hard fallback, maybe we keep it or change to premium
        if (fullPath.includes('blog\\[slug]') || fullPath.includes('blog/[slug]')) {
           bestImage = '/images/blog/fire_safety_equipment_premium.webp';
        } else {
           for (const [keyword, imgPath] of Object.entries(imageMap)) {
             if (lowerPath.includes(keyword)) {
               bestImage = imgPath;
               break; 
             }
           }
        }
        
        content = content.replace(/\/images\/banner-avcb\.webp/g, bestImage);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log("Updated " + fullPath + " -> " + bestImage);
        updatedCount++;
      }
    }
  }
}

processDirectory(srcDir);
console.log("Total files updated for banner-avcb: " + updatedCount);

// Update layout.tsx if it has banner-avcb.webp
const layoutPath = path.join(__dirname, 'src', 'app', 'layout.tsx');
if (fs.existsSync(layoutPath)) {
  let layoutContent = fs.readFileSync(layoutPath, 'utf8');
  if (layoutContent.includes('/images/banner-avcb.webp')) {
    layoutContent = layoutContent.replace(/\/images\/banner-avcb\.webp/g, '/images/blog/fire_safety_equipment_premium.webp');
    fs.writeFileSync(layoutPath, layoutContent, 'utf8');
    console.log("Updated layout.tsx");
  }
}

// Update UniversalSeoPage.tsx just in case
const uniPath = path.join(__dirname, 'src', 'components', 'UniversalSeoPage.tsx');
if (fs.existsSync(uniPath)) {
  let uniContent = fs.readFileSync(uniPath, 'utf8');
  if (uniContent.includes('/images/banner-avcb.webp')) {
    uniContent = uniContent.replace(/\/images\/banner-avcb\.webp/g, '/images/blog/fire_safety_equipment_premium.webp');
    fs.writeFileSync(uniPath, uniContent, 'utf8');
    console.log("Updated UniversalSeoPage.tsx");
  }
}
