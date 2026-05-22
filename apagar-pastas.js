const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, 'src', 'app');

const pastas = [
  "avcb-bares-restaurantes-sao-paulo","avcb","avcb-para-salao-de-festas-sao-paulo","avcb-pousada-sao-paulo","avcb-escola-faculdade-sao-paulo","avcb-preco",
  "sistema-hidrante-edificio-residencial-avcb-sp","sistema-hidrante-galpao-industrial-avcb-sp","sistema-alarme-incendio-galpao-industrial-avcb-sp","sistema-alarme-incendio-hospital-avcb-sp","sistema-alarme-incendio-edificio-comercial-sp","projeto-escada-pressurizada-avcb","sistema-hidrante-industria-quimica-sp","sistema-sprinkler-industria-quimica-sp",
  "alvara-bombeiro-escola-sao-paulo","alvara-bombeiro-restaurante-sao-paulo","alvara-bombeiro-pousada-sao-paulo",
  "laudo-bombeiro-escola-sao-paulo","laudo-bombeiro-restaurante-sao-paulo","laudo-bombeiro-pousada-sao-paulo",
  "avcb-condominio-sao-paulo","avcb-alphaville-barueri","avcb-analia-franco","avcb-aricanduva","avcb-barueri-alphaville","avcb-bela-vista","avcb-bom-retiro","avcb-brooklin","avcb-butanta",
  "avcb-campinas-barao-geraldo","avcb-campinas-cambui","avcb-campinas-castelo","avcb-campinas-centro","avcb-campinas-guanabara","avcb-campinas-mansoes-santo-antonio","avcb-campinas-taquaral",
  "avcb-campo-belo","avcb-campo-grande","avcb-carrao","avcb-casa-verde","avcb-centro-bela-vista","avcb-centro-sao-paulo","avcb-consolacao","avcb-freguesia-do-o",
  "avcb-guarulhos-aeroporto","avcb-guarulhos-bonsucesso","avcb-guarulhos-centro","avcb-guarulhos-macedo","avcb-guarulhos-maia","avcb-guarulhos-pimentas","avcb-guarulhos-vila-augusta",
  "avcb-higienopolis","avcb-ipiranga","avcb-itaim-bibi","avcb-itaquera","avcb-jabaquara","avcb-jacana","avcb-jardins","avcb-lapa","avcb-liberdade","avcb-limao",
  "avcb-moema","avcb-mooca","avcb-morumbi","avcb-penha","avcb-perdizes","avcb-pinheiros","avcb-pompeia","avcb-republica","avcb-sacoma","avcb-santa-cecilia",
  "avcb-santana","avcb-santo-amaro","avcb-santos-aparecida","avcb-santos-boqueirao","avcb-santos-centro","avcb-santos-embare","avcb-santos-gonzaga","avcb-santos-ponta-da-praia",
  "avcb-sapopemba","avcb-saude","avcb-se","avcb-tatuape","avcb-tucuruvi","avcb-vila-clementino","avcb-vila-leopoldina","avcb-vila-madalena","avcb-vila-mariana","avcb-vila-olimpia","avcb-vila-prudente","avcb-vila-re",
  "renovacao-avcb-analia-franco","renovacao-avcb-aricanduva","renovacao-avcb-carrao","renovacao-avcb-casa-verde",
  "renovacao-avcb-condominio-agua-branca","renovacao-avcb-condominio-altos-de-santana","renovacao-avcb-condominio-analia-franco","renovacao-avcb-condominio-bela-vista","renovacao-avcb-condominio-brooklin","renovacao-avcb-condominio-campo-belo","renovacao-avcb-condominio-chacara-klabin","renovacao-avcb-condominio-chacara-santo-antonio","renovacao-avcb-condominio-cidade-moncoes","renovacao-avcb-condominio-consolacao","renovacao-avcb-condominio-higienopolis","renovacao-avcb-condominio-ipiranga","renovacao-avcb-condominio-itaim-bibi","renovacao-avcb-condominio-jabaquara","renovacao-avcb-condominio-jardins","renovacao-avcb-condominio-lapa","renovacao-avcb-condominio-moema","renovacao-avcb-condominio-moema-indios","renovacao-avcb-condominio-moema-passaros","renovacao-avcb-condominio-mooca","renovacao-avcb-condominio-morumbi","renovacao-avcb-condominio-perdizes","renovacao-avcb-condominio-pinheiros","renovacao-avcb-condominio-santana","renovacao-avcb-condominio-santo-amaro","renovacao-avcb-condominio-saude","renovacao-avcb-condominio-tatuape","renovacao-avcb-condominio-tucuruvi","renovacao-avcb-condominio-vila-andrade","renovacao-avcb-condominio-vila-clementino","renovacao-avcb-condominio-vila-ipojuca","renovacao-avcb-condominio-vila-leopoldina","renovacao-avcb-condominio-vila-mariana","renovacao-avcb-condominio-vila-nova-conceicao","renovacao-avcb-condominio-vila-olimpia","renovacao-avcb-condominio-vila-prudente",
  "renovacao-avcb-consolacao","renovacao-avcb-freguesia-do-o","renovacao-avcb-higienopolis","renovacao-avcb-ipiranga","renovacao-avcb-itaquera","renovacao-avcb-jabaquara","renovacao-avcb-jacana","renovacao-avcb-liberdade","renovacao-avcb-limao","renovacao-avcb-morumbi","renovacao-avcb-paraiso","renovacao-avcb-penha","renovacao-avcb-santana","renovacao-avcb-sapopemba","renovacao-avcb-saude","renovacao-avcb-se","renovacao-avcb-tucuruvi","renovacao-avcb-vila-leopoldina","renovacao-avcb-vila-madalena","renovacao-avcb-vila-prudente","renovacao-avcb-vila-re",
  "renovacao-clcb-aclimacao-sao-paulo","renovacao-clcb-agua-rasa-sao-paulo","renovacao-clcb-aricanduva-sao-paulo","renovacao-clcb-bela-vista-sao-paulo","renovacao-clcb-belem-sao-paulo","renovacao-clcb-bras-sao-paulo","renovacao-clcb-brasilandia-sao-paulo","renovacao-clcb-brooklin-sao-paulo","renovacao-clcb-butanta-sao-paulo","renovacao-clcb-cambuci-sao-paulo","renovacao-clcb-campo-belo-sao-paulo","renovacao-clcb-campo-limpo-sao-paulo","renovacao-clcb-cangaiba-sao-paulo","renovacao-clcb-capao-redondo-sao-paulo","renovacao-clcb-carrao-sao-paulo","renovacao-clcb-casa-verde-sao-paulo","renovacao-clcb-consolacao-sao-paulo","renovacao-clcb-cursino-sao-paulo","renovacao-clcb-freguesia-do-o-sao-paulo","renovacao-clcb-graja-sao-paulo","renovacao-clcb-higienopolis-sao-paulo","renovacao-clcb-interlagos-sao-paulo","renovacao-clcb-ipiranga-sao-paulo","renovacao-clcb-itaim-bibi-sao-paulo","renovacao-clcb-itaquera-sao-paulo","renovacao-clcb-jabaquara-sao-paulo","renovacao-clcb-jacana-sao-paulo","renovacao-clcb-jardins-sao-paulo","renovacao-clcb-lapa-sao-paulo","renovacao-clcb-liberdade-sao-paulo","renovacao-clcb-mandaqui-sao-paulo","renovacao-clcb-mboi-mirim-sao-paulo","renovacao-clcb-moema-sao-paulo","renovacao-clcb-mooca-sao-paulo","renovacao-clcb-morumbi-sao-paulo","renovacao-clcb-paraiso-sao-paulo","renovacao-clcb-penha-sao-paulo","renovacao-clcb-perdizes-sao-paulo","renovacao-clcb-pinheiros-sao-paulo","renovacao-clcb-pirituba-sao-paulo","renovacao-clcb-pompeia-sao-paulo","renovacao-clcb-rio-pequeno-sao-paulo","renovacao-clcb-sacoma-sao-paulo","renovacao-clcb-santana-sao-paulo","renovacao-clcb-santo-amaro-sao-paulo","renovacao-clcb-sao-mateus-sao-paulo","renovacao-clcb-sao-miguel-paulista-sao-paulo","renovacao-clcb-sapopemba-sao-paulo","renovacao-clcb-saude-sao-paulo","renovacao-clcb-tatuape-sao-paulo","renovacao-clcb-tremembe-sao-paulo","renovacao-clcb-tucuruvi-sao-paulo","renovacao-clcb-vila-andrade-sao-paulo","renovacao-clcb-vila-formosa-sao-paulo","renovacao-clcb-vila-madalena-sao-paulo","renovacao-clcb-vila-mariana-sao-paulo","renovacao-clcb-vila-olimpia-sao-paulo","renovacao-clcb-vila-prudente-sao-paulo",
  "alvara-bombeiro-academia-sao-paulo","alvara-bombeiro-casa-de-repouso-sao-paulo","alvara-bombeiro-casa-noturna-boate-sao-paulo","alvara-bombeiro-condominio-sao-paulo","alvara-bombeiro-consultorio-medico-sao-paulo","alvara-bombeiro-creche-sao-paulo","alvara-bombeiro-escritorio-sao-paulo","alvara-bombeiro-farmacia-drogaria-sao-paulo","alvara-bombeiro-galpao-industrial-sao-paulo","alvara-bombeiro-hospital-clinica-sao-paulo","alvara-bombeiro-hostel-sao-paulo","alvara-bombeiro-igreja-sao-paulo","alvara-bombeiro-motel-sao-paulo","alvara-bombeiro-padaria-sao-paulo","alvara-bombeiro-posto-combustivel-sao-paulo","alvara-bombeiro-salao-de-festas-sao-paulo","alvara-bombeiro-shopping-sao-paulo","alvara-bombeiro-supermercado-sao-paulo",
  "avcb-para-academia-sao-paulo","avcb-para-casa-de-repouso-sao-paulo","avcb-para-creche-sao-paulo","avcb-para-escritorio-sao-paulo","avcb-para-evento-corporativo","avcb-para-evento-em-shopping","avcb-para-exposicao","avcb-para-feira","avcb-para-igreja-sao-paulo","avcb-para-padaria-sao-paulo","avcb-para-renovacao-de-seguro","avcb-para-shopping-sao-paulo","avcb-para-show","avcb-paraiso",
  "alarme-de-incendio-comercial-escritorio-sp","alarme-de-incendio-escola-faculdade-sp","alarme-de-incendio-galpao-industrial-sp","alarme-de-incendio-hospital-clinica-sp","alarme-de-incendio-para-condominio-sao-paulo","alarme-incendio-centro-distribuicao-sp","alarme-incendio-obrigatorio-avcb-sp","alarme-incendio-supermercado-avcb-sp",
  "brigada-incendio-centro-distribuicao-sp","brigada-incendio-galpao-industrial-sp","brigada-incendio-hospital-sp","brigada-incendio-hotel-sp","brigada-incendio-obrigatoria-avcb-sp","brigada-incendio-predio-comercial-sp","brigada-incendio-shopping-sp","brigada-incendio-supermercado-sp",
  "escada-pressurizada-condominio-sp","escada-pressurizada-edificio-comercial-sp","escada-pressurizada-galpao-industrial-sp","escada-pressurizada-hospital-sp","escada-pressurizada-hotel-sp","escada-pressurizada-obrigatoria-avcb-sp","escada-pressurizada-shopping-sp",
  "hidrante-centro-distribuicao-sp","hidrante-obrigatorio-avcb-sp","hidrante-supermercado-avcb-sp",
  "projeto-combate-incendio-corpo-bombeiros-sp","projeto-escada-pressurizada-avcb-sao-paulo","projeto-incendio-centro-distribuicao-sp","projeto-incendio-edificio-comercial-sp","projeto-incendio-galpao-industrial-avcb-sp","projeto-incendio-hospital-sp","projeto-incendio-hotel-sp","projeto-incendio-industria-quimica-sp","projeto-incendio-obrigatorio-sp","projeto-incendio-para-avcb-sp","projeto-incendio-shopping-center-sp","projeto-incendio-supermercado-sp","projeto-spda-para-raios-sao-paulo","projeto-vga-sistema-sprinkler-sp",
  "sistema-alarme-incendio-hotel-avcb-sp","sistema-alarme-incendio-industria-quimica-sp","sistema-alarme-incendio-shopping-center-sp",
  "sistema-de-hidrantes-para-academia-sao-paulo","sistema-de-hidrantes-para-condominio-sao-paulo","sistema-de-hidrantes-para-escola-sao-paulo","sistema-de-hidrantes-para-galpao-sao-paulo","sistema-de-hidrantes-para-hospital-sao-paulo","sistema-de-hidrantes-para-hotel-sao-paulo","sistema-de-hidrantes-para-industria-sao-paulo","sistema-de-hidrantes-para-pousada-sao-paulo","sistema-de-hidrantes-para-restaurante-sao-paulo",
  "sistema-de-sprinkler-para-academia-sao-paulo","sistema-de-sprinkler-para-condominio-sao-paulo","sistema-de-sprinkler-para-escola-sao-paulo","sistema-de-sprinkler-para-hospital-sao-paulo","sistema-de-sprinkler-para-hotel-sao-paulo","sistema-de-sprinkler-para-industria-sao-paulo","sistema-de-sprinkler-para-pousada-sao-paulo","sistema-de-sprinkler-para-restaurante-sao-paulo",
  "sistema-hidrante-edificio-comercial-sp","sistema-hidrante-hospital-avcb-sp","sistema-hidrante-hotel-avcb-sp","sistema-hidrante-shopping-center-sp",
  "sistema-sprinkler-edificio-comercial-sp","sistema-sprinkler-galpao-industrial-avcb-sp","sistema-sprinkler-hospital-avcb-sp","sistema-sprinkler-hotel-avcb-sp","sistema-sprinkler-shopping-center-sp",
  "spda-para-raios-sao-paulo","sprinkler-centro-distribuicao-sp","sprinkler-obrigatorio-avcb-sp","sprinkler-supermercado-avcb-sp",
  "treinamento-brigada-incendio-sp","valvula-alarme-incendio-sp","valvula-retencao-sprinkler-sp",
  "vga-centro-distribuicao-sp","vga-galpao-industrial-sp","vga-hospital-sp","vga-hotel-sp","vga-shopping-center-sp","vga-supermercado-sp",
  "laudo-alarme-incendio-condominio-sao-paulo","laudo-alarme-incendio-escola-sao-paulo","laudo-alarme-incendio-hotel-sao-paulo","laudo-alarme-incendio-restaurante-sao-paulo","laudo-alarme-incendio-sao-paulo",
  "laudo-bombeiro-academia-sao-paulo","laudo-bombeiro-bar-restaurante-sao-paulo","laudo-bombeiro-casa-de-repouso-sao-paulo","laudo-bombeiro-casa-noturna-boate-sao-paulo","laudo-bombeiro-condominio-sao-paulo","laudo-bombeiro-consultorio-medico-sao-paulo","laudo-bombeiro-creche-sao-paulo","laudo-bombeiro-escola-faculdade-sao-paulo","laudo-bombeiro-escritorio-sao-paulo","laudo-bombeiro-farmacia-drogaria-sao-paulo","laudo-bombeiro-galpao-industrial-sao-paulo","laudo-bombeiro-hospital-clinica-sao-paulo","laudo-bombeiro-hostel-sao-paulo","laudo-bombeiro-hotel-pousada-sao-paulo","laudo-bombeiro-igreja-sao-paulo","laudo-bombeiro-motel-sao-paulo","laudo-bombeiro-padaria-sao-paulo","laudo-bombeiro-posto-combustivel-sao-paulo","laudo-bombeiro-salao-de-festas-sao-paulo","laudo-bombeiro-shopping-sao-paulo","laudo-bombeiro-supermercado-sao-paulo",
  "laudo-escada-pressurizada-sp","laudo-hidrante-condominio-sao-paulo","laudo-hidrante-escola-sao-paulo","laudo-hidrante-galpao-sao-paulo","laudo-hidrante-restaurante-sao-paulo","laudo-sistema-hidrantes-sao-paulo","laudo-spda-para-raios-sao-paulo","laudo-sprinkler-clinica-sao-paulo","laudo-sprinkler-condominio-sao-paulo","laudo-sprinkler-galpao-sao-paulo","laudo-sprinkler-hotel-sao-paulo","laudo-sprinkler-sao-paulo",
  "adequacao-porta-corta-fogo-avcb-sp","empresa-manutencao-porta-corta-fogo-sp","manutencao-porta-corta-fogo-abc-paulista","manutencao-porta-corta-fogo-campinas","manutencao-porta-corta-fogo-guarulhos","manutencao-porta-corta-fogo-santo-amaro-sp","manutencao-porta-corta-fogo-zona-sul-sp","orcamento-porta-corta-fogo-sp","porta-corta-fogo-condenada-sp","porta-corta-fogo-condominio-sp","porta-corta-fogo-galpao-industrial-sp","porta-corta-fogo-hospital-sp","porta-corta-fogo-hotel-sp","porta-corta-fogo-nao-fecha-sp","troca-mola-hidraulica-porta-corta-fogo-sp"
];

let apagadas = 0, naoEncontradas = 0, erros = 0;

for (const pasta of pastas) {
  const caminho = path.join(base, pasta);
  if (fs.existsSync(caminho)) {
    try {
      fs.rmSync(caminho, { recursive: true, force: true });
      console.log(`✅ ${pasta}`);
      apagadas++;
    } catch (e) {
      console.log(`❌ ERRO: ${pasta} — ${e.message}`);
      erros++;
    }
  } else {
    naoEncontradas++;
  }
}

console.log(`\n========================================`);
console.log(`✅ Apagadas: ${apagadas}`);
console.log(`⚠️  Já não existiam: ${naoEncontradas}`);
console.log(`❌ Erros: ${erros}`);

// Contar o que sobrou
const restantes = fs.readdirSync(base).length;
console.log(`📁 Pastas restantes em src/app: ${restantes}`);
console.log(`\nAgora rode: npm run build`);
