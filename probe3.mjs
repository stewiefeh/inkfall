import { chromium } from 'playwright-core';
import fs from 'fs';
const CHROME = '/workspace/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell';
const browser = await chromium.launch({ executablePath: CHROME, args: ['--enable-unsafe-swiftshader', '--use-gl=swiftshader', '--disable-gpu-sandbox'] });
const page = await browser.newPage({ viewport: { width: 933, height: 601 } });
const errors = [];
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
await page.goto('http://localhost:4173/', { waitUntil: 'load' });
await page.waitForTimeout(4200);
fs.mkdirSync('probe3', { recursive: true });
// 3.2s hold with vigorous movement, like the video
await page.mouse.move(380, 290);
await page.mouse.down();
let peak = 0;
for (let i = 0; i < 16; i++) {
  await page.mouse.move(380 + Math.sin(i * 0.9) * 300, 290 + Math.cos(i * 1.1) * 180, { steps: 3 });
  await page.waitForTimeout(190);
  const d = await page.evaluate(() => window.__inkDebug());
  peak = Math.max(peak, d.zout);
}
const dHold = await page.evaluate(() => window.__inkDebug());
await page.screenshot({ path: 'probe3/hold.png' });
// text selection check: drag across the hero sub-line while holding
await page.mouse.up();
const sel = await page.evaluate(() => window.getSelection().toString());
console.log('held', JSON.stringify(dHold), 'zoutPeak', peak, 'selectedText', JSON.stringify(sel.slice(0, 40)));
// mid-return (spiral) and settled shots
await page.waitForTimeout(550);
await page.screenshot({ path: 'probe3/return-mid.png' });
await page.waitForTimeout(3600);
const dSettled = await page.evaluate(() => window.__inkDebug());
await page.screenshot({ path: 'probe3/return-settled.png' });
console.log('settled', JSON.stringify(dSettled));
// gallery ride: check top clearance under the header
for (let i = 0; i < 8; i++) { await page.mouse.wheel(0, 500); await page.waitForTimeout(160); }
await page.waitForTimeout(1400);
for (let i = 0; i < 4; i++) { await page.mouse.wheel(0, 320); await page.waitForTimeout(300); }
await page.waitForTimeout(1200);
await page.screenshot({ path: 'probe3/gallery-mid.png' });
const gTop = await page.evaluate(() => {
  const el = document.querySelector('[data-gallery]');
  return { top: el.getBoundingClientRect().top, sy: window.scrollY };
});
console.log('gallery', JSON.stringify(gTop));
console.log('ERRORS:', JSON.stringify(errors));
await browser.close();
