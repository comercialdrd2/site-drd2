const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');

const imageMap = {
  'hospital': '/images/blog/blog_hero_avcb_hospital.webp',
  'clinica': '/images/blog/blog_hero_saude_clinicas_avcb.png',
  'hotel': '/images/blog/blog_hero_casa_repouso_avcb.webp',
  'pousada': '/images/blog/blog_hero_casa_repouso_avcb.webp',
  'condominio': '/images/blog/blog_hero_avcb_condominio.webp',
  'galpao': '/images/blog/blog_hero_avcb_galpao.webp',
  'restaurante': '/images/blog/blog_hero_avcb_restaurante.webp',
  'escola': '/images/blog/blog_hero_vila_mariana_escolas_avcb.png',
  'creche': '/images/blog/blog_hero_avcb_creche.webp',
  'seguro': '/images/blog/blog_hero_avcb_vencido.webp',
  'embargo': '/images/blog/blog_hero_avcb_vencido.webp',
  'urgente': '/images/blog/blog_hero_avcb_vencido.webp',
  'vencido': '/images/blog/blog_hero_avcb_vencido.webp',
  'multa': '/images/blog/blog_hero_avcb_vencido.webp',
  'sprinkler': '/images/page-sprinklers.webp',
  'alarme': '/images/blog/fire_safety_equipment_premium.webp',
  'hidrante': '/images/blog/fire_safety_equipment_premium.webp',
  'shopping': '/images/blog/blog_hero_aricanduva_avcb.png',
  'industria': '/images/blog/blog_hero_mooca_industrial_avcb.png',
  'santos': '/images/blog/blog_hero_avcb_condominio.webp',
  'praia-grande': '/images/blog/blog_hero_avcb_condominio.webp',
  'guaruja': '/images/blog/blog_hero_avcb_condominio.webp',
  'sao-vicente': '/images/blog/blog_hero_avcb_condominio.webp',
  'cubatao': '/images/blog/blog_hero_mooca_industrial_avcb.png',
  'bertioga': '/images/blog/blog_hero_casa_repouso_avcb.webp',
  'itanhaem': '/images/blog/blog_hero_casa_repouso_avcb.webp',
};

let updatedPagesCount = 0;

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('/images/banner-hero.webp')) {
        let bestImage = '/images/blog/fire_safety_equipment_premium.webp'; // Default fallback
        const lowerPath = fullPath.toLowerCase();
        
        for (const [keyword, imgPath] of Object.entries(imageMap)) {
          if (lowerPath.includes(keyword)) {
            bestImage = imgPath;
            break; // Stop at first match
          }
        }
        
        content = content.replace(/\/images\/banner-hero\.webp/g, bestImage);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log("Updated " + fullPath + " -> " + bestImage);
        updatedPagesCount++;
      }
    }
  }
}

processDirectory(srcDir);
console.log("Total app pages updated: " + updatedPagesCount);

// Now process blog.ts
const blogPath = path.join(__dirname, 'src', 'data', 'blog.ts');
if (fs.existsSync(blogPath)) {
  let blogContent = fs.readFileSync(blogPath, 'utf8');
  let blogUpdated = false;

  const replaceBlogImage = (slug, newImage) => {
    // Regex to match the slug and replace the image nearby
    const regex = new RegExp("(slug:\\s*\"" + slug + "\".*?image:\\s*\")/images/banner-hero\\.webp\"", 's');
    if (regex.test(blogContent)) {
      blogContent = blogContent.replace(regex, "$1" + newImage + "\"");
      blogUpdated = true;
      console.log("Updated blog post: " + slug + " -> " + newImage);
    }
  };

  replaceBlogImage('o-que-e-comunique-se-corpo-de-bombeiros', '/images/blog/fire_safety_equipment_premium.webp');
  replaceBlogImage('embargo-corpo-de-bombeiros-como-resolver', '/images/blog/blog_hero_avcb_vencido.webp');
  replaceBlogImage('checklist-sindico-renovar-avcb-condominio', '/images/blog/blog_hero_avcb_condominio.webp');
  replaceBlogImage('sprinkler-obrigatorio-para-quem-e-quando', '/images/page-sprinklers.webp');
  replaceBlogImage('seguro-predial-sem-avcb-o-que-acontece-em-sinistro', '/images/blog/blog_hero_avcb_vencido.webp');
  replaceBlogImage('avcb-para-pousada-exigencias-e-como-regularizar', '/images/blog/blog_hero_casa_repouso_avcb.webp');
  replaceBlogImage('it-22-cbpmesp-quando-hidrante-e-obrigatorio', '/images/blog/fire_safety_equipment_premium.webp');
  replaceBlogImage('qual-diferenca-ppci-e-avcb', '/images/blog/fire_safety_equipment_premium.webp');
  replaceBlogImage('laudo-tecnico-x-relatorio-manutencao-qual-cbpmesp-aceita', '/images/blog/fire_safety_equipment_premium.webp');
  replaceBlogImage('avcb-x-clcb-diferenca-na-pratica', '/images/blog/fire_safety_equipment_premium.webp');

  if (blogUpdated) {
    fs.writeFileSync(blogPath, blogContent, 'utf8');
    console.log('Blog data updated successfully.');
  }
}
