import { chromium } from 'playwright-core';
import fs from 'fs';
const CHROME = '/workspace/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell';
const browser = await chromium.launch({ executablePath: CHROME, args: ['--enable-unsafe-swiftshader', '--use-gl=swiftshader', '--disable-gpu-sandbox'] });
const page = await browser.newPage({ viewport: { width: 933, height: 601 } });
const errors = [];
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
await page.goto('http://localhost:4173/', { waitUntil: 'load' });
await page.waitForTimeout(4200);
fs.mkdirSync('probe5', { recursive: true });
const off = await page.evaluate(() => {
  const el = document.querySelector('[data-essays]');
  return el.getBoundingClientRect().top + window.scrollY;
});
for (let y = 0; y < off - 80; y += 400) { await page.mouse.wheel(0, 400); await page.waitForTimeout(110); }
await page.waitForTimeout(1600);
const rows = await page.$$('.essay');
const box = await rows[1].boundingBox();
if (box) await page.mouse.move(box.x + box.width * 0.4, box.y + box.height / 2);
await page.waitForTimeout(1200);
await page.screenshot({ path: 'probe5/essays-hover.png' });
const check = await page.evaluate(() => ({ preview: !!document.querySelector('.essay-preview'), img: !!document.querySelector('.essay-preview img') }));
console.log('preview elements left:', JSON.stringify(check), 'ERRORS:', JSON.stringify(errors));
await browser.close();
