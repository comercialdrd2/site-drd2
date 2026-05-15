const fs = require('fs');
const path = require('path');

const blogPath = path.join(__dirname, 'src', 'data', 'blog.ts');
let content = fs.readFileSync(blogPath, 'utf8');

const slugToImageMap = {
  // Gas / Estanqueidade
  'o-que-e-teste-de-estanqueidade-de-gas-condominios': '/images/blog/blog_hero_avcb_condominio.webp',
  'teste-de-estanqueidade-de-gas-restaurantes-exigencias-riscos': '/images/blog/blog_hero_avcb_restaurante.webp',
  'central-de-gas-em-condominios-seguranca-manutencao': '/images/blog/blog_hero_avcb_condominio.webp',
  'quanto-custa-teste-de-estanqueidade-de-gas': '/images/blog/blog_hero_avcb_preco.webp',
  'vazamento-de-gas-em-predios-causas-como-evitar': '/images/blog/blog_hero_avcb_vencido.webp',
  
  // Specific Occupations
  'avcb-para-academia-sao-paulo': '/images/blog/blog_hero_pinheiros_avcb.png',
  'avcb-para-farmacia-drogaria-sao-paulo': '/images/blog/blog_hero_saude_clinicas_avcb.png',
  'avcb-para-padaria-sao-paulo': '/images/blog/blog_hero_avcb_restaurante.webp',
  'avcb-para-supermercado-sao-paulo': '/images/blog/blog_hero_aricanduva_avcb.png',
  'avcb-para-posto-combustivel-sao-paulo': '/images/blog/blog_hero_mooca_industrial_avcb.png',
  'avcb-para-igreja-sao-paulo': '/images/blog/blog_hero_penha_avcb.png',
  'avcb-para-hotel-pousada-sao-paulo': '/images/blog/blog_hero_casa_repouso_avcb.webp',
  'avcb-para-casa-noturna-boate-sao-paulo': '/images/blog/blog_hero_vila_prudente_avcb.png',
  'avcb-para-shopping-sao-paulo': '/images/blog/blog_hero_aricanduva_avcb.png',
  'avcb-para-salao-de-festas-sao-paulo': '/images/blog/blog_hero_mooca_avcb.png',
  'avcb-para-escritorio-sala-comercial-sao-paulo': '/images/blog/blog_hero_lapa_avcb.png',
  'avcb-para-consultorio-medico-odontologico-sao-paulo': '/images/blog/blog_hero_saude_clinicas_avcb.png',
  
  // Alarme
  'alarme-incendio-escola-faculdade-obrigatorio-sp': '/images/blog/blog_hero_vila_mariana_escolas_avcb.png',
  'alarme-incendio-comercial-escritorio-obrigatorio-sp': '/images/blog/blog_hero_lapa_avcb.png',
  'alarme-incendio-hospital-clinica-obrigatorio-sp': '/images/blog/blog_hero_avcb_hospital.webp',
  'alarme-incendio-galpao-industrial-obrigatorio-sp': '/images/blog/blog_hero_avcb_galpao.webp',
  'alarme-de-incendio-condominio-it-19-2025-responsabilidade-sindico': '/images/blog/blog_hero_avcb_condominio.webp',
  
  // Misc
  'o-que-e-avcb-e-quando-ele-e-obrigatorio': '/images/blog/blog_hero_avcb_condominio.webp',
  'diferenca-entre-avcb-e-clcb-em-sao-paulo': '/images/blog/fire_safety_equipment_premium.webp',
  'sprinkler-obrigatorio-sp': '/images/page-sprinklers.webp',
};

const updateImageForSlug = (slug, newImagePath) => {
  const regexStr = "(slug:\\s*[\"']" + slug + "[\"'][^}]+?image:\\s*[\"']).+?([\"'])";
  const regex = new RegExp(regexStr, 'gs');
  
  if (regex.test(content)) {
    content = content.replace(regex, "$1" + newImagePath + "$2");
    console.log("Updated " + slug + " -> " + newImagePath);
  } else {
    // try finding excerpt
    const addImgRegexStr = "(slug:\\s*[\"']" + slug + "[\"'][^}]+?excerpt:\\s*[\"'].+?[\"'],)";
    const addImgRegex = new RegExp(addImgRegexStr, 'gs');
    if (addImgRegex.test(content)) {
       content = content.replace(addImgRegex, "$1\n    image: \"" + newImagePath + "\",");
       console.log("Added image to " + slug + " -> " + newImagePath);
    } else {
       console.log("Could not find/update " + slug);
    }
  }
};

for (const [slug, imgPath] of Object.entries(slugToImageMap)) {
  updateImageForSlug(slug, imgPath);
}

fs.writeFileSync(blogPath, content, 'utf8');
