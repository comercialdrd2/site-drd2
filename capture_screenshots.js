const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const urls = [
    { url: 'http://localhost:3002/avcb-santana', name: 'santana_premium.png' },
    { url: 'http://localhost:3002/avcb-tucuruvi', name: 'tucuruvi_premium.png' },
    { url: 'http://localhost:3002/avcb-vila-madalena', name: 'vila_madalena_premium.png' }
  ];

  for (const item of urls) {
    console.log('Navegando para', item.url);
    try {
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Take a full page screenshot
      const savePath = 'C:\\Users\\Administrador\\.gemini\\antigravity\\brain\\c902a0a3-0612-423d-8321-bbff0580618f\\' + item.name;
      await page.screenshot({ path: savePath, fullPage: true });
      console.log('Screenshot salvo em:', savePath);
    } catch (e) {
      console.error('Erro ao acessar', item.url, e.message);
    }
  }

  await browser.close();
})();
