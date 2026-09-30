// A11y scan: drives the running dev/prod server with Playwright and runs
// axe-core on the single-screen landing at desktop and mobile sizes, and checks
// that the page never scrolls and that its links are real and reachable.
//
// Usage: server must be up at BASE_URL (default http://localhost:3000), then:
//   node scripts/a11y.mjs
// Exits non-zero if any scenario reports violations.

import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000';
const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

function report(name, results) {
    const v = results.violations;
    if (v.length === 0) {
        console.log(`✓ ${name}: 0 violations`);
        return 0;
    }
    console.log(`✗ ${name}: ${v.length} violation type(s)`);
    for (const issue of v) {
        console.log(`   [${issue.impact}] ${issue.id} — ${issue.help}`);
        for (const node of issue.nodes.slice(0, 5)) {
            console.log(`      ${node.target.join(' ')}`);
        }
        console.log(`      ${issue.helpUrl}`);
    }
    return v.length;
}

async function scan(page, name) {
    const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
    return report(name, results);
}

// axe reports text over gradients as "incomplete" rather than failing it, so
// contrast on this page is checked here instead: hide the text, screenshot the
// real background behind each text element, and compare the text colour with
// the lightest and darkest background pixels (WCAG AA: 4.5, or 3 for large text).
async function checkContrast(page, name) {
    const items = await page.evaluate(() => {
        const out = [];
        document.querySelectorAll('body *').forEach((el) => {
            const texts = [...el.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim());
            if (!texts.length) return;
            // measure the glyph boxes, not the element: a button's box includes rounded corners and padding
            const range = document.createRange();
            range.setStartBefore(texts[0]); range.setEndAfter(texts[texts.length - 1]);
            const r = range.getBoundingClientRect();
            const cs = getComputedStyle(el);
            if (r.width === 0 || cs.visibility === 'hidden' || r.bottom < 0 || r.top > innerHeight) return;
            out.push({
                text: el.textContent.trim().slice(0, 40), color: cs.color,
                size: parseFloat(cs.fontSize), weight: parseInt(cs.fontWeight, 10),
                rect: [Math.max(0, r.left), Math.max(0, r.top), Math.min(innerWidth, r.right), Math.min(innerHeight, r.bottom)],
            });
        });
        return out;
    });
    const hide = await page.addStyleTag({ content: '* { color: transparent !important; text-shadow: none !important; }' });
    const shot = (await page.screenshot()).toString('base64');
    await hide.evaluate((el) => el.remove());
    const fails = await page.evaluate(async ({ items, shot }) => {
        const img = new Image(); img.src = `data:image/png;base64,${shot}`; await img.decode();
        const cv = document.createElement('canvas'); cv.width = img.width; cv.height = img.height;
        const ctx = cv.getContext('2d'); ctx.drawImage(img, 0, 0);
        const lum = ([r, g, b]) => { const f = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
        const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
        const out = [];
        for (const it of items) {
            const fg = it.color.match(/[\d.]+/g).slice(0, 3).map(Number);
            const [x0, y0, x1, y1] = it.rect.map(Math.round);
            if (x1 <= x0 || y1 <= y0) continue;
            const d = ctx.getImageData(x0, y0, x1 - x0, y1 - y0).data;
            let worst = Infinity;
            for (let i = 0; i < d.length; i += 4) worst = Math.min(worst, ratio(fg, [d[i], d[i + 1], d[i + 2]]));
            const need = it.size >= 24 || (it.size >= 18.66 && it.weight >= 700) ? 3 : 4.5;
            if (worst < need) out.push(`"${it.text}" ${worst.toFixed(2)}:1 (needs ${need}:1)`);
        }
        return out;
    }, { items, shot });
    if (fails.length === 0) { console.log(`✓ ${name}: text contrast over the rendered background`); return 0; }
    console.log(`✗ ${name}: low contrast`); for (const f of fails) console.log(`   ${f}`);
    return fails.length;
}

// The landing is one screen by design: the document must not scroll, and the
// headline, both actions and the address must be visible without scrolling.
async function checkFits(page, name) {
    const problems = await page.evaluate(() => {
        const out = [];
        const doc = document.documentElement;
        if (doc.scrollHeight > window.innerHeight + 1) out.push(`page scrolls (${doc.scrollHeight}px > ${window.innerHeight}px)`);
        if (doc.scrollWidth > window.innerWidth + 1) out.push(`page scrolls sideways (${doc.scrollWidth}px)`);
        const targets = [
            ['h1', document.querySelector('h1')],
            ['Email me', [...document.querySelectorAll('a')].find(a => a.textContent.trim() === 'Email me')],
            ['LinkedIn', [...document.querySelectorAll('a')].find(a => a.textContent.trim() === 'LinkedIn')],
        ];
        for (const [label, el] of targets) {
            if (!el) { out.push(`${label} missing`); continue; }
            const r = el.getBoundingClientRect();
            if (r.top < 0 || r.bottom > window.innerHeight || r.left < 0 || r.right > window.innerWidth) out.push(`${label} outside the viewport`);
        }
        const mail = document.querySelector('a[href^="mailto:"]');
        if (!mail || !/^mailto:[^@\s]+@[^@\s]+$/.test(mail.getAttribute('href'))) out.push('mailto link missing or malformed');
        return out;
    });
    if (problems.length === 0) { console.log(`✓ ${name}: fits one screen`); return 0; }
    console.log(`✗ ${name}:`); for (const p of problems) console.log(`   ${p}`);
    return problems.length;
}

const browser = await chromium.launch();
let total = 0;

// axe-core/playwright requires a page created from a browser context.
async function newPage(width, height) {
    // reducedMotion: the entrance fade is skipped under prefers-reduced-motion,
    // so axe scans the settled UI (real colors) instead of a mid-fade frame.
    const context = await browser.newContext({
        viewport: { width, height },
        reducedMotion: 'reduce',
    });
    const page = await context.newPage();
    return { context, page };
}

try {
    // Phone heights are the *visible* area once the browser toolbars are shown
    // (iPhone SE and 15 in Safari, an in-app browser), plus landscape.
    const SIZES = [['desktop', 1280, 900], ['laptop', 1366, 640], ['mobile 375px', 375, 812], ['small mobile', 320, 568],
        ['iPhone SE Safari', 375, 553], ['iPhone 15 Safari', 393, 659], ['in-app browser', 390, 600], ['phone landscape', 844, 340]];
    for (const [label, w, h] of SIZES) {
        const { context, page } = await newPage(w, h);
        await page.goto(BASE_URL, { waitUntil: 'networkidle' });
        total += await scan(page, `landing (${label})`);
        total += await checkFits(page, `landing (${label})`);
        total += await checkContrast(page, `landing (${label})`);
        await context.close();
    }
} finally {
    await browser.close();
}

console.log(`\n${total === 0 ? '✓ ALL CLEAN' : `✗ ${total} total violation type(s)`}`);
process.exit(total === 0 ? 0 : 1);
