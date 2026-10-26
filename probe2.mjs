import { chromium } from 'playwright-core';
import fs from 'fs';
const CHROME = '/workspace/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell';
const browser = await chromium.launch({ executablePath: CHROME, args: ['--enable-unsafe-swiftshader', '--use-gl=swiftshader', '--disable-gpu-sandbox'] });
const page = await browser.newPage({ viewport: { width: 933, height: 601 } });
const errors = [];
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
await page.goto('http://localhost:4173/', { waitUntil: 'load' });
await page.waitForTimeout(4500);
fs.mkdirSync('probe', { recursive: true });
// long hold with big drags like the video, then scroll away and back
await page.mouse.move(380, 290);
await page.mouse.down();
for (let i = 0; i < 16; i++) {
  await page.mouse.move(380 + Math.sin(i) * 260, 290 + Math.cos(i) * 160, { steps: 3 });
  await page.waitForTimeout(190);
}
await page.screenshot({ path: 'probe2/hold.png' });
const dHold = await page.evaluate(() => window.__inkDebug());
await page.mouse.up();
console.log('after-hold', JSON.stringify(dHold));
// scroll down through build while ink scattered
for (let i = 0; i < 6; i++) { await page.mouse.wheel(0, 400); await page.waitForTimeout(250); }
await page.waitForTimeout(2500);
const dBuild = await page.evaluate(() => window.__inkDebug());
await page.screenshot({ path: 'probe2/build.png' });
console.log('at-build', JSON.stringify(dBuild));
// scroll back to top
for (let i = 0; i < 8; i++) { await page.mouse.wheel(0, -600); await page.waitForTimeout(220); }
await page.waitForTimeout(4000);
const dBack = await page.evaluate(() => window.__inkDebug());
await page.screenshot({ path: 'probe2/back-top.png' });
console.log('back-top', JSON.stringify(dBack));
console.log('ERRORS:', JSON.stringify(errors));
await browser.close();
