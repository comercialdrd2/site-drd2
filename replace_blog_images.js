const fs = require('fs');
const path = require('path');

const blogPath = path.join(__dirname, 'src', 'data', 'blog.ts');

if (!fs.existsSync(blogPath)) {
  console.log('blog.ts not found');
  process.exit(1);
}

let content = fs.readFileSync(blogPath, 'utf8');

const slugToImageMap = {
  'o-que-e-teste-de-estanqueidade-de-gas-e-por-que-ele-e-obrigatorio-em-condominios': '/images/blog/blog_hero_avcb_condominio.webp',
  'teste-de-estanqueidade-de-gas-em-restaurantes-exigencias-e-riscos-de-operacao': '/images/blog/blog_hero_avcb_restaurante.webp',
  'central-de-gas-em-condominios-como-funciona-e-como-garantir-seguranca': '/images/blog/blog_hero_avcb_condominio.webp',
  'quanto-custa-um-teste-de-estanqueidade-de-gas-e-quando-deve-ser-feito': '/images/blog/blog_hero_avcb_preco.webp',
  'vazamento-de-gas-em-predios-principais-causas-e-como-evitar-acidentes': '/images/blog/blog_hero_avcb_vencido.webp',
  'avcb-para-academia-em-sao-paulo': '/images/blog/blog_hero_pinheiros_avcb.png',
  'avcb-para-farmacia-e-drogaria-em-sao-paulo': '/images/blog/blog_hero_saude_clinicas_avcb.png',
  'avcb-para-padaria-em-sao-paulo': '/images/blog/blog_hero_avcb_restaurante.webp',
  'avcb-para-supermercado-em-sao-paulo': '/images/blog/blog_hero_aricanduva_avcb.png',
  'avcb-para-posto-de-combustivel-em-sao-paulo': '/images/blog/blog_hero_mooca_industrial_avcb.png',
  'avcb-para-igreja-em-sao-paulo': '/images/blog/blog_hero_penha_avcb.png',
  'avcb-para-hotel-e-pousada-em-sao-paulo': '/images/blog/blog_hero_casa_repouso_avcb.webp',
  'avcb-para-casa-noturna-e-boate-em-sao-paulo': '/images/blog/blog_hero_vila_prudente_avcb.png',
  'avcb-para-shopping-em-sao-paulo': '/images/blog/blog_hero_aricanduva_avcb.png',
  'avcb-para-salao-de-festas-em-sao-paulo': '/images/blog/blog_hero_mooca_avcb.png',
  'avcb-para-escritorio-e-sala-comercial-em-sao-paulo': '/images/blog/blog_hero_lapa_avcb.png',
  'avcb-para-consultorio-medico-e-odontologico-em-sao-paulo': '/images/blog/blog_hero_saude_clinicas_avcb.png',
  'alarme-de-incendio-em-escola-e-faculdade-obrigacao-legal-e-o-que-a-it-19-2025-exige-em-sp': '/images/blog/blog_hero_vila_mariana_escolas_avcb.png',
  'alarme-de-incendio-em-comercio-e-escritorio-quando-e-obrigatorio-e-o-que-a-it-19-2025-exige-em-sp': '/images/blog/blog_hero_lapa_avcb.png',
  'alarme-de-incendio-em-hospital-e-clinica-o-que-a-it-19-2025-exige-em-sp': '/images/blog/blog_hero_avcb_hospital.webp',
  'alarme-de-incendio-em-galpao-industrial-o-que-a-it-19-2025-exige-e-como-regularizar-em-sp': '/images/blog/blog_hero_avcb_galpao.webp',
  'alarme-de-incendio-em-condominio-o-que-a-it-19-2025-exige-e-qual-a-responsabilidade-do-sindico': '/images/blog/blog_hero_avcb_condominio.webp',
  'o-que-e-ptotep-quando-evento-precisa': '/images/blog/blog_hero_mooca_avcb.png',
  'documentos-necessarios-para-ptotep-evento': '/images/blog/fire_safety_equipment_premium.webp',
  'quanto-custa-ptotep-para-evento': '/images/blog/blog_hero_avcb_preco.webp',
  'prazo-aprovacao-bombeiros-evento-ptotep': '/images/blog/blog_hero_avcb_preco.webp',
  'diferenca-entre-avcb-e-ptotep-eventos': '/images/blog/fire_safety_equipment_premium.webp',
  'o-que-e-avcb-e-quando-sua-edificacao-e-obrigada-a-ter': '/images/blog/blog_hero_avcb_condominio.webp',
  'diferenca-entre-avcb-e-clcb-em-sp-qual-o-seu-caso': '/images/blog/fire_safety_equipment_premium.webp',
  'chuveiro-automatico-sprinkler-quem-e-obrigado-a-instalar-em-sp': '/images/page-sprinklers.webp',
};

const updateImageForSlug = (slug, newImagePath) => {
  const regexStr = "(slug:\\s*[\"']" + slug + "[\"'][^}]+?image:\\s*[\"']).+?([\"'])";
  const regex = new RegExp(regexStr, 'gs');
  
  if (regex.test(content)) {
    content = content.replace(regex, "$1" + newImagePath + "$2");
    console.log("Updated " + slug + " -> " + newImagePath);
  } else {
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
console.log('Blog images updated successfully!');
