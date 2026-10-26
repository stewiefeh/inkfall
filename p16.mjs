import { chromium } from 'playwright-core';
import fs from 'fs';
const CHROME = '/workspace/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell';
const browser = await chromium.launch({ executablePath: CHROME, args: ['--enable-unsafe-swiftshader', '--use-gl=swiftshader', '--disable-gpu-sandbox'] });
fs.mkdirSync('p16', { recursive: true });

// iPad-like context
const ctx = await browser.newContext({ viewport: { width: 768, height: 1024 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 });
const page = await ctx.newPage();
const cdp = await ctx.newCDPSession(page);
const errors = [];
page.on('pageerror', e => errors.push(e.message.slice(0, 100)));
await page.goto('http://localhost:4173/', { waitUntil: 'load' });
await page.waitForTimeout(5500);
await page.screenshot({ path: 'p16/ipad-hero.png' });

async function touch(x, y, moves, holdMs) {
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
  if (holdMs) await page.waitForTimeout(holdMs);
  for (let i = 1; i <= moves; i++) {
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y + i * 18 }] });
    await page.waitForTimeout(40);
  }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await page.waitForTimeout(400);
}

// A: play with ink in the stage: hold then drag down
const stageBox = await page.evaluate(() => { const r = document.querySelector('.ink-stage').getBoundingClientRect(); return { y: Math.round(r.top + r.height / 2), h: Math.round(r.height) }; });
await touch(384, stageBox.y, 6, 900);
const a = await page.evaluate(() => ({ scrollY: Math.round(window.scrollY), sel: window.getSelection().toString(), holding: document.body.classList.contains('ink-holding'), rms: Math.round(window.__inkDebug().rms) }));
console.log('stage drag:', JSON.stringify(a));

// B: swipe on the bottom content area: must scroll
await touch(384, 940, 5, 120);
const b = await page.evaluate(() => ({ scrollY: Math.round(window.scrollY) }));
console.log('bottom swipe scrollY:', JSON.stringify(b));

// C: tap a nav link still works
await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(600);
await page.touchscreen.tap(700, 60); await page.waitForTimeout(1800);
const c = await page.evaluate(() => Math.round(window.scrollY));
console.log('nav tap scrollY:', c, '| errors:', errors.length);
await ctx.close();

// desktop sanity
const dctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const dp = await dctx.newPage();
await dp.goto('http://localhost:4173/', { waitUntil: 'load' });
await dp.waitForTimeout(4500);
await dp.mouse.move(720, 400);
await dp.mouse.down(); await dp.waitForTimeout(900);
const d1 = await dp.evaluate(() => ({ holding: document.body.classList.contains('ink-holding'), rms: Math.round(window.__inkDebug().rms) }));
await dp.mouse.up(); await dp.waitForTimeout(400);
const heroOk = await dp.evaluate(() => !!document.querySelector('.ink-stage'));
console.log('desktop hold:', JSON.stringify(d1), 'stage present:', heroOk);
await dctx.close();
await browser.close();
