import { chromium } from 'playwright-core';
import fs from 'fs';

const CHROME = '/workspace/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell';
const browser = await chromium.launch({ executablePath: CHROME, args: ['--enable-unsafe-swiftshader', '--use-gl=swiftshader', '--disable-gpu-sandbox'] });
const page = await browser.newPage({ viewport: { width: 933, height: 601 } });
const errors = [];
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });

await page.goto('http://localhost:4173/', { waitUntil: 'load' });
await page.waitForTimeout(4500);

fs.mkdirSync('probe', { recursive: true });
// ---- INK TEST ----
await page.mouse.move(400, 300);
await page.mouse.down();
for (let i = 0; i < 6; i++) { await page.mouse.move(400 + i * 12, 300 + i * 5); await page.waitForTimeout(180); }
await page.screenshot({ path: 'probe/ink-hold.png' });
await page.mouse.up();
for (const wait of [500, 1500, 3000, 6000]) {
  await page.waitForTimeout(wait === 500 ? 500 : wait - (wait === 1500 ? 500 : wait === 3000 ? 1500 : 3000));
  const d = await page.evaluate(() => window.__inkDebug && window.__inkDebug());
  await page.screenshot({ path: `probe/ink-return-${wait}.png` });
  console.log('t+' + wait, JSON.stringify(d));
}

// ---- GALLERY PIN TEST ----
const tops = [];
for (let step = 0; step < 14; step++) {
  await page.mouse.wheel(0, 300);
  await page.waitForTimeout(350);
  const r = await page.evaluate(() => {
    const g = document.querySelector('[data-gallery]');
    const b = document.getElementById('build');
    return { scrollY: Math.round(window.scrollY), gTop: Math.round(g.getBoundingClientRect().top), bTop: Math.round(b.getBoundingClientRect().top) };
  });
  tops.push(r);
}
console.log('GALLERY STEPS:');
tops.forEach((r, i) => console.log(i, JSON.stringify(r)));
await page.screenshot({ path: 'probe/gallery-end.png' });
console.log('ERRORS:', JSON.stringify(errors));
await browser.close();
