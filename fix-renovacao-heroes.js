const fs = require('fs');
const path = require('path');

const pages = [
  {
    slug: 'renovacao-avcb-condominio-sao-paulo',
    bg: '/images/bg-condominios.jpg',
    btnText: 'QUERO RENOVAR DO MEU CONDOMÍNIO'
  },
  {
    slug: 'renovacao-avcb-restaurante-sao-paulo',
    bg: '/images/bg-restaurante.jpg',
    btnText: 'QUERO RENOVAR DO MEU RESTAURANTE'
  },
  {
    slug: 'renovacao-avcb-hotel-sao-paulo',
    bg: '/images/hero-hotel.png',
    btnText: 'QUERO RENOVAR DO MEU HOTEL'
  },
  {
    slug: 'renovacao-avcb-academia-sao-paulo',
    bg: '/images/hero-academia-v2.jpg',
    btnText: 'QUERO RENOVAR DA MINHA ACADEMIA'
  }
];

pages.forEach(p => {
  const filePath = path.join(__dirname, 'src', 'app', p.slug, 'page.tsx');
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Fix Hero
  const heroRegex = /\{\/\* ── HERO ── \*\/\}([\s\S]*?)\{\/\* ── BREADCRUMB \+ TRUST BAR ── \*\/\}/;
  
  // Extract h1 and intro
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const intro1Match = content.match(/<p className="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed font-medium max-w-2xl">([\s\S]*?)<\/p>/);
  const intro2Match = content.match(/<p className="text-lg text-gray-300 mb-0 leading-relaxed font-medium max-w-2xl">([\s\S]*?)<\/p>/);
  const subtitleMatch = content.match(/<span className="inline-block bg-red-600 text-white[^>]*>([\s\S]*?)<\/span>/);

  if (h1Match && heroRegex.test(content)) {
    const newHero = `{/* ── HERO ── */}
      <section className="relative text-white overflow-hidden min-h-[auto] pt-[100px] pb-[40px] lg:pt-[120px] lg:pb-[60px] flex items-center bg-slate-950 border-b-8 border-red-600">
        <Image
          src="${p.bg}"
          alt="Renovação de AVCB"
          fill
          className="object-cover object-center opacity-30 grayscale-[50%]"
          priority
          sizes="100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 max-w-6xl w-full">
          <div className="lg:w-3/5">
            <span className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 shadow-lg shadow-red-900/20">
              ${subtitleMatch ? subtitleMatch[1].trim() : 'RENOVAÇÃO 2026'}
            </span>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-black mb-4 leading-[0.9] tracking-tighter uppercase italic text-white flex flex-col">
              ${h1Match[1]}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed font-medium max-w-2xl">
              ${intro1Match ? intro1Match[1].trim() : '{c.intro[0]}'}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={whatsappLink} 
                className="bg-[#25D366] hover:bg-[#1EBE5A] hover:text-white text-white font-black px-10 py-5 rounded-2xl text-xl transition-all shadow-2xl flex items-center justify-center gap-3 border-2 border-[#25D366] w-full sm:w-auto"
              >
                <Phone className="w-6 h-6" /> ${p.btnText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB + TRUST BAR ── */}`;

    content = content.replace(heroRegex, newHero);
  }

  // Remove `border-l-4 border-red-600 pl-4` from H2s because globals.css already does it
  content = content.replace(/border-l-4 border-red-600 pl-4/g, '');

  // Add import Image from "next/image" if missing
  if (!content.includes('import Image from "next/image"')) {
    content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport Image from "next/image";');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${p.slug}`);
});
