const fs = require('fs');
const path = require('path');

const headerPath = path.join(__dirname, 'src', 'components', 'Header.tsx');
let content = fs.readFileSync(headerPath, 'utf8');

// Remove Renovação from specialties
content = content.replace(/\s*\{\s*name:\s*"Renovação de AVCB".*?\},/, '');

// Add renovations array
if (!content.includes('const renovations = [')) {
  content = content.replace(
    'const specialties = [',
    `const renovations = [
    { name: "Renovação Geral em SP", short: "Visão Geral", href: "/renovacao-avcb", icon: FileCheck },
    { name: "Renovação para Condomínios", short: "Condomínios", href: "/renovacao-avcb-condominio-sao-paulo", icon: Building2 },
    { name: "Renovação para Hotéis", short: "Hotéis", href: "/renovacao-avcb-hotel-sao-paulo", icon: Hotel },
    { name: "Renovação para Restaurantes", short: "Restaurantes", href: "/renovacao-avcb-restaurante-sao-paulo", icon: Utensils },
    { name: "Renovação para Academias", short: "Academias", href: "/renovacao-avcb-academia-sao-paulo", icon: Dumbbell },
  ];\n\n  const specialties = [`
  );
}

// Add Desktop Dropdown
if (!content.includes('Dropdown de Renovações')) {
  content = content.replace(
    '{/* Mega Dropdown de Especialidades */}',
    `{/* Dropdown de Renovações */}
            <div className="relative group py-4">
              <button className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-red-500 transition-colors tracking-wide uppercase">
                Renovações
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-red-500" />
              </button>
              
              <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-[350px] bg-[#1A1F2E] border border-white/10 rounded-[2rem] shadow-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-4 border-b border-white/5 pb-2">Serviços de Renovação</p>
                <div className="grid grid-cols-1 gap-2">
                  {renovations.map((item) => (
                    <Link 
                      key={item.href} 
                      href={item.href} 
                      className="flex items-center gap-3 p-3 text-[12px] font-bold text-gray-300 hover:text-white hover:bg-red-600/20 rounded-xl transition-all group/item border border-transparent hover:border-white/5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-red-600 transition-colors">
                        <item.icon className="w-4 h-4 text-red-500 group-hover/item:text-white" />
                      </div>
                      <span className="uppercase tracking-tight">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mega Dropdown de Especialidades */}`
  );
}

// Add Mobile Menu
if (!content.includes('Renovações de AVCB')) {
  content = content.replace(
    '<p className="text-xl font-black text-white uppercase italic tracking-tighter mb-4 text-red-500">Especialidades</p>',
    `<div className="py-4 border-b border-white/5">
                <p className="text-xl font-black text-white uppercase italic tracking-tighter mb-4 text-red-500">Renovações de AVCB</p>
                <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-red-600/30">
                  {renovations.map((item) => (
                    <Link 
                      key={item.href} 
                      href={item.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-sm font-bold text-gray-300 hover:text-white uppercase"
                    >
                      {item.short}
                    </Link>
                  ))}
                </div>
              </div>

              <p className="text-xl font-black text-white uppercase italic tracking-tighter mb-4 text-red-500 pt-4">Especialidades</p>`
  );
}

fs.writeFileSync(headerPath, content, 'utf8');
console.log('Header updated!');
