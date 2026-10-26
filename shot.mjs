import { chromium } from 'playwright-core';
const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1360, height: 850 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
await page.waitForTimeout(4500);
await page.screenshot({ path: 'shots/01-hero.png' });
for (const [sel, name] of [['#build', '02-build'], ['#write', '03-write'], ['#about', '04-about'], ['#contact', '05-contact']]) {
  await page.evaluate((s) => document.querySelector(s).scrollIntoView({ behavior: 'instant', block: 'start' }), sel);
  await page.waitForTimeout(1600);
  await page.screenshot({ path: `shots/${name}.png` });
}
await page.evaluate(() => window.scrollBy(0, window.innerHeight * 1.2));
await page.waitForTimeout(1400);
await page.screenshot({ path: 'shots/06-gallery-mid.png' });
console.log('ERRORS:', JSON.stringify(errors, null, 1));
await browser.close();
