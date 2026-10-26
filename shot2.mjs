import { chromium } from 'playwright-core';
const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1360, height: 850 } });
const errors = [];
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
await page.waitForTimeout(6500);
await page.screenshot({ path: 'shots/01-hero.png' });
// scroll into gallery, mid-track
await page.evaluate(() => { const g = document.querySelector('#build'); window.scrollTo(0, g.offsetTop + window.innerHeight); });
await page.waitForTimeout(1800);
await page.screenshot({ path: 'shots/06-gallery-mid.png' });
console.log('ERRORS:', JSON.stringify(errors));
await browser.close();
