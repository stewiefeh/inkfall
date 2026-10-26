import { chromium } from 'playwright-core';
import fs from 'fs';
const CHROME = '/workspace/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell';
const browser = await chromium.launch({ executablePath: CHROME, args: ['--enable-unsafe-swiftshader', '--use-gl=swiftshader', '--disable-gpu-sandbox'] });
fs.mkdirSync('p14', { recursive: true });
for (const [name, vw, vh] of [['phone', 390, 844], ['tablet', 768, 1024]]) {
  const ctx = await browser.newContext({ viewport: { width: vw, height: vh }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message.slice(0, 100)));
  await page.goto('http://localhost:4173/', { waitUntil: 'load' });
  await page.waitForTimeout(6000);
  await page.screenshot({ path: `p14/${name}-hero.png` });
  const info = await page.evaluate(() => {
    const nav = document.querySelector('.site-nav').getBoundingClientRect();
    const dbg = window.__inkDebug ? window.__inkDebug() : null;
    const canvas = document.getElementById('ink');
    // find visible overflowing elements
    let ov = 0;
    document.querySelectorAll('body *').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.right > window.innerWidth + 2 && getComputedStyle(el).position !== 'fixed') ov = Math.max(ov, Math.round(r.right - window.innerWidth));
    });
    return { navX: Math.round(nav.x), navRight: Math.round(nav.right), overflow: ov, canvasW: canvas.clientWidth, dbg: { assemble: dbg && +dbg.assemble.toFixed(2), morph: dbg && +dbg.morph.toFixed(2), rms: dbg && Math.round(dbg.rms) } };
  });
  console.log(name, JSON.stringify(info), 'errors:', errors.length);
  // scroll through to bottom
  const H = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < H; y += 500) { await page.mouse.wheel(0, 500); await page.waitForTimeout(80); }
  await page.waitForTimeout(1500);
  if (name === 'phone') {
    await page.screenshot({ path: `p14/phone-mid.png` });
    // gallery area
    const goff = await page.evaluate(() => document.querySelector('#build').getBoundingClientRect().top + window.scrollY);
    for (let y = 0; y < goff - 40; y += 400) { await page.mouse.wheel(0, 400); await page.waitForTimeout(70); }
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `p14/phone-gallery.png` });
  }
  console.log(name, 'scrolled to:', await page.evaluate(() => Math.round(window.scrollY)), 'of', Math.round(H));
  await ctx.close();
}
await browser.close();
