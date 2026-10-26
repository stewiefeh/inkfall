import { chromium } from 'playwright-core';
const CHROME = '/workspace/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell';
const browser = await chromium.launch({ executablePath: CHROME, args: ['--enable-unsafe-swiftshader', '--use-gl=swiftshader', '--disable-gpu-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const sites = {
  skiff: 'https://stewiefeh.github.io/skiff/',
  tangent: 'https://stewiefeh.github.io/tangent/',
  ardane: 'https://stewiefeh.github.io/ardane/',
  rustic: 'https://stewiefeh.github.io/rustic-earth-co-redesign/',
  lysne: 'https://stewiefeh.github.io/lysne-demo/',
};
for (const [name, url] of Object.entries(sites)) {
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 45000 });
    await page.waitForTimeout(4500);
    await page.screenshot({ path: `shots/cand/${name}.png` });
    const title = await page.title();
    console.log(name, '|', title);
  } catch (e) { console.log(name, '| FAILED:', e.message.slice(0, 120)); }
}
await browser.close();
