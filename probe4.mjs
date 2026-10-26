import { chromium } from 'playwright-core';
import fs from 'fs';
const CHROME = '/workspace/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell';
const browser = await chromium.launch({ executablePath: CHROME, args: ['--enable-unsafe-swiftshader', '--use-gl=swiftshader', '--disable-gpu-sandbox'] });
const page = await browser.newPage({ viewport: { width: 933, height: 601 } });
const errors = [];
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
await page.goto('http://localhost:4173/', { waitUntil: 'load' });
await page.waitForTimeout(4200);
fs.mkdirSync('probe4', { recursive: true });
// find gallery offset then scroll so the pin just engaged
const off = await page.evaluate(() => {
  const el = document.querySelector('[data-gallery]');
  return el.getBoundingClientRect().top + window.scrollY;
});
console.log('gallery offset', off);
for (let y = 0; y < off + 200; y += 300) { await page.mouse.wheel(0, 300); await page.waitForTimeout(120); }
await page.waitForTimeout(1500);
await page.screenshot({ path: 'probe4/gallery-start.png' });
// mid-ride
for (let i = 0; i < 4; i++) { await page.mouse.wheel(0, 260); await page.waitForTimeout(420); }
await page.waitForTimeout(900);
await page.screenshot({ path: 'probe4/gallery-mid.png' });
// contact, long wait to check the top band clears
for (let i = 0; i < 10; i++) { await page.mouse.wheel(0, 900); await page.waitForTimeout(150); }
await page.waitForTimeout(5000);
await page.screenshot({ path: 'probe4/contact-settled.png' });
const d = await page.evaluate(() => window.__inkDebug());
console.log('at-contact', JSON.stringify(d));
console.log('ERRORS:', JSON.stringify(errors));
await browser.close();
