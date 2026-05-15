const fs = require('fs');
const path = require('path');

const imageMap = [
  { keywords: ['academia'], img: '/images/hero-academia-v2.jpg', alt: 'Alvará do Bombeiro para Academia' },
  { keywords: ['bar'], img: '/images/hero-bar-com-show.jpg', alt: 'Alvará do Bombeiro para Bar' },
  { keywords: ['boate', 'casa-noturna'], img: '/images/hero-boate-v2.jpg', alt: 'Alvará do Bombeiro para Casa Noturna' },
  { keywords: ['casa-repouso'], img: '/images/hero-casa-repouso.png', alt: 'Alvará do Bombeiro para Casa de Repouso' },
  { keywords: ['clinica', 'consultorio'], img: '/images/hero-clinica-odontologica.png', alt: 'Alvará do Bombeiro para Clínica' },
  { keywords: ['condominio'], img: '/images/bg-condominios.jpg', alt: 'Alvará do Bombeiro para Condomínio' },
  { keywords: ['creche'], img: '/images/hero-creche.png', alt: 'Alvará do Bombeiro para Creche' },
  { keywords: ['escola', 'faculdade'], img: '/images/hero-escola.png', alt: 'Alvará do Bombeiro para Escola e Faculdade' },
  { keywords: ['escritorio', 'comercial'], img: '/images/hero-escritorio-moderno.png', alt: 'Alvará do Bombeiro para Escritório Comercial' },
  { keywords: ['farmacia', 'drogaria'], img: '/images/hero-farmacia.jpg', alt: 'Alvará do Bombeiro para Farmácia' },
  { keywords: ['galpao', 'deposito'], img: '/images/bg-galpao.jpg', alt: 'Alvará do Bombeiro para Galpão Industrial' },
  { keywords: ['hospital'], img: '/images/bg-hospital.jpg', alt: 'Alvará do Bombeiro para Hospital' },
  { keywords: ['hostel'], img: '/images/hero-hostel.png', alt: 'Alvará do Bombeiro para Hostel' },
  { keywords: ['hotel', 'pousada'], img: '/images/hero-hotel.png', alt: 'Alvará do Bombeiro para Hotel' },
  { keywords: ['igreja'], img: '/images/hero-igreja.png', alt: 'Alvará do Bombeiro para Igreja' },
  { keywords: ['motel'], img: '/images/hero_motel_avcb.png', alt: 'Alvará do Bombeiro para Motel' },
  { keywords: ['padaria'], img: '/images/hero-padaria.png', alt: 'Alvará do Bombeiro para Padaria' },
  { keywords: ['posto-combustivel'], img: '/images/hero-posto-combustivel.png', alt: 'Alvará do Bombeiro para Posto de Combustível' },
  { keywords: ['restaurante'], img: '/images/bg-restaurante.jpg', alt: 'Alvará do Bombeiro para Restaurante' },
  { keywords: ['salao-festas', 'salao-de-festas'], img: '/images/hero-salao-festas-oficial.jpg', alt: 'Alvará do Bombeiro para Salão de Festas' },
  { keywords: ['shopping'], img: '/images/hero-shopping-sao-paulo.png', alt: 'Alvará do Bombeiro para Shopping' },
  { keywords: ['supermercado'], img: '/images/bg-supermercado.jpg', alt: 'Alvará do Bombeiro para Supermercado' },
];

function getOccupationInfo(filePath) {
  const name = path.basename(path.dirname(filePath)).toLowerCase();
  for (const item of imageMap) {
    for (const keyword of item.keywords) {
      if (name.includes(keyword)) {
        return item;
      }
    }
  }
  return { img: '/images/banner-hero.jpg', alt: 'Alvará do Corpo de Bombeiros em São Paulo' };
}

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('page.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const pages = walk('src/app');
let fixedCount = 0;

pages.forEach(page => {
  let content = fs.readFileSync(page, 'utf8');
  
  if (content.includes('<h1')) {
    // Check if the hero section has an Image
    const sectionMatch = content.match(/<section[^>]*?className="relative text-white overflow-hidden[^>]*?>/s);
    
    if (sectionMatch) {
      const sectionTag = sectionMatch[0];
      const sectionStartIndex = content.indexOf(sectionTag);
      const afterSection = content.slice(sectionStartIndex + sectionTag.length, sectionStartIndex + sectionTag.length + 500);
      
      // If no Image tag is right after the section declaration or inside the hero wrapper
      if (!afterSection.includes('<Image') && !afterSection.includes('<img')) {
        const occ = getOccupationInfo(page);
        
        const imageInjection = `
        <Image
          src="${occ.img}"
          alt="${occ.alt}"
          fill
          className="object-cover object-center opacity-40 grayscale-[20%]"
          priority
          sizes="100vw"
        />`;
        
        // Inject image after section tag
        content = content.substring(0, sectionStartIndex + sectionTag.length) + imageInjection + content.substring(sectionStartIndex + sectionTag.length);
        
        // Ensure next/image is imported
        if (!content.includes('import Image from')) {
          content = 'import Image from "next/image";\n' + content;
        }
        
        fs.writeFileSync(page, content, 'utf8');
        console.log("[CORRIGIDA] " + page + " - Inserido: " + occ.img);
        fixedCount++;
      } else {
        // console.log("[OK] " + page + " - Já possui imagem no hero.");
      }
    }
  }
});

console.log("\\nAuditoria concluída. " + fixedCount + " páginas foram corrigidas.");
