// Interactive a11y scan: drives the running dev/prod server with Playwright and
// runs axe-core against states a static page scan can't reach (open modal,
// terminal output, mobile viewport).
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

async function scan(page, name, { exclude } = {}) {
    let builder = new AxeBuilder({ page }).withTags(TAGS);
    // Calendly renders a cross-origin iframe axe cannot analyze; exclude it.
    if (exclude) for (const sel of exclude) builder = builder.exclude(sel);
    const results = await builder.analyze();
    return report(name, results);
}

const browser = await chromium.launch();
let total = 0;

// axe-core/playwright requires a page created from a browser context.
async function newPage(width, height) {
    // reducedMotion: the site renders scroll reveals fully opaque under
    // prefers-reduced-motion, so axe scans the settled UI (real colors) instead
    // of catching a mid-transition frame where blended opacity trips contrast.
    const context = await browser.newContext({
        viewport: { width, height },
        reducedMotion: 'reduce',
    });
    const page = await context.newPage();
    return { context, page };
}

try {
    // 1. Landing — desktop
    {
        const { context, page } = await newPage(1280, 900);
        await page.goto(BASE_URL, { waitUntil: 'networkidle' });
        total += await scan(page, 'landing (desktop)');
        await context.close();
    }

    // 2. Calendly modal open
    {
        const { context, page } = await newPage(1280, 900);
        await page.goto(BASE_URL, { waitUntil: 'networkidle' });
        // Navbar "Book a Call" button is the first such trigger.
        await page.getByRole('button', { name: /book a call/i }).first().click();
        // react-calendly mounts an overlay div; wait for it before scanning.
        await page.waitForSelector('.calendly-overlay', { timeout: 10000 });
        total += await scan(page, 'calendly modal open', { exclude: ['iframe'] });
        await context.close();
    }

    // 3. Terminal after running a command
    {
        const { context, page } = await newPage(1280, 900);
        await page.goto(BASE_URL, { waitUntil: 'networkidle' });
        const input = page.getByRole('textbox', { name: /terminal command/i });
        await input.click();
        await input.fill('help');
        await input.press('Enter');
        await page.waitForTimeout(300); // let live region update
        total += await scan(page, 'terminal after `help`');
        await context.close();
    }

    // 4. Mobile viewport (icon-only link labels engage below sm)
    {
        const { context, page } = await newPage(375, 812);
        await page.goto(BASE_URL, { waitUntil: 'networkidle' });
        total += await scan(page, 'landing (mobile 375px)');
        await context.close();
    }
} finally {
    await browser.close();
}

console.log(`\n${total === 0 ? '✓ ALL CLEAN' : `✗ ${total} total violation type(s)`}`);
process.exit(total === 0 ? 0 : 1);
