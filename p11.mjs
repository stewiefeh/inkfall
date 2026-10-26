import { chromium, devices } from 'playwright-core';
import fs from 'fs';
const CHROME = '/workspace/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell';
const browser = await chromium.launch({ executablePath: CHROME, args: ['--enable-unsafe-swiftshader', '--use-gl=swiftshader', '--disable-gpu-sandbox'] });
fs.mkdirSync('p11', { recursive: true });
for (const [name, vw, vh, mob] of [['phone', 390, 844, true], ['tablet', 768, 1024, true]]) {
  const ctx = await browser.newContext({ viewport: { width: vw, height: vh }, hasTouch: true, isMobile: mob, deviceScaleFactor: mob ? 2 : 2 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message.slice(0, 120)));
  await page.goto('http://localhost:4173/', { waitUntil: 'load' });
  await page.waitForTimeout(4200);
  await page.screenshot({ path: `p11/${name}-hero.png` });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  // fps sample during scroll
  const fps = await page.evaluate(() => new Promise(res => {
    let n = 0; const t0 = performance.now();
    function f() { n++; if (performance.now() - t0 < 2000) requestAnimationFrame(f); else res(Math.round(n / 2)); }
    requestAnimationFrame(f);
  }));
  // scroll through sections
  const H = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < H; y += 500) { await page.mouse.wheel(0, 500); await page.waitForTimeout(90); }
  await page.waitForTimeout(1200);
  const at = await page.evaluate(() => window.scrollY);
  await page.screenshot({ path: `p11/${name}-bottom.png` });
  console.log(name, '| overflowX:', overflow, '| fps:', fps, '| pageH:', H, '| scrollY after wheel:', at, '| errors:', JSON.stringify(errors));
  await ctx.close();
}
await browser.close();
