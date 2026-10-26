import { chromium } from 'playwright-core';
import fs from 'fs';
const CHROME = '/workspace/.cache/ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell';
const browser = await chromium.launch({ executablePath: CHROME, args: ['--enable-unsafe-swiftshader', '--use-gl=swiftshader', '--disable-gpu-sandbox'] });
fs.mkdirSync('p19', { recursive: true });

// wide desktop-ish (matches his iPad landscape proportions)
const c1 = await browser.newContext({ viewport: { width: 1460, height: 1000 } });
const p1 = await c1.newPage();
const errs = [];
p1.on('pageerror', e => errs.push(e.message.slice(0, 120)));
await p1.goto('http://localhost:4173/', { waitUntil: 'load' });
await p1.waitForTimeout(6000);
await p1.screenshot({ path: 'p19/hero.png' });
// scroll to build / write / contact
const go = async (id) => { await p1.evaluate((i) => { const el = document.getElementById(i); window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + 300); }, id); await p1.waitForTimeout(2600); };
await go('build'); await p1.screenshot({ path: 'p19/build.png' });
await go('write'); await p1.screenshot({ path: 'p19/write.png' });
await go('contact'); await p1.screenshot({ path: 'p19/contact.png' });
console.log('wide errors:', JSON.stringify(errs));
await c1.close();

const c2 = await browser.newContext({ viewport: { width: 768, height: 1024 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 });
const p2 = await c2.newPage();
await p2.goto('http://localhost:4173/', { waitUntil: 'load' });
await p2.waitForTimeout(6000);
await p2.screenshot({ path: 'p19/ipad-hero.png' });
await c2.close();
await browser.close();
