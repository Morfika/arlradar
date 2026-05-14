/**
 * export-pdf.mjs
 * Exports all presentation slides to a PDF file preserving exact web styles.
 *
 * Usage:
 *   1. Start the dev server in another terminal: npm run dev
 *   2. Run this script: node scripts/export-pdf.mjs
 *   3. Find the output at: slides-export.pdf
 *
 * Or provide a custom URL/port:
 *   node scripts/export-pdf.mjs --url http://localhost:3001
 */

import { chromium } from "playwright";
import { createWriteStream, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ── Config ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const urlArg = args.find((a) => a.startsWith("--url="))?.split("=")[1];
const BASE_URL = urlArg ?? "http://localhost:5173";

const SLIDE_COUNT = 10;
const SLIDE_W = 1920;
const SLIDE_H = 1080;
const OUTPUT_PATH = join(ROOT, "slides-export.pdf");
const SCREENSHOTS_DIR = join(ROOT, "scripts", ".tmp-screenshots");

// ── Helpers ──────────────────────────────────────────────────────────────────
function log(msg) {
  process.stdout.write(`  ${msg}\n`);
}

/** Wait ms */
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log("\n🎨  ARL Radar — PDF Export\n");
  log(`Target: ${BASE_URL}`);
  log(`Slides: ${SLIDE_COUNT}`);
  log(`Size:   ${SLIDE_W} × ${SLIDE_H}px`);
  console.log("");

  mkdirSync(SCREENSHOTS_DIR, { recursive: true });

  // ── 1. Launch browser ──
  log("Launching Chromium…");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: SLIDE_W, height: SLIDE_H },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  // ── 2. Check dev server ──
  log(`Connecting to ${BASE_URL}…`);
  try {
    await page.goto(BASE_URL, { waitUntil: "networkidle", timeout: 15_000 });
  } catch {
    console.error(
      `\n❌  Could not reach ${BASE_URL}.\n   Make sure the dev server is running: npm run dev\n`
    );
    await browser.close();
    process.exit(1);
  }

  // Wait for fonts & animations to settle
  await wait(2000);

  const screenshotPaths = [];

  // ── 3. Screenshot each slide ──
  for (let i = 0; i < SLIDE_COUNT; i++) {
    // Navigate to slide by simulating keyboard presses from slide 0
    if (i === 0) {
      // Already on slide 0 after initial load
      await page.goto(BASE_URL, { waitUntil: "networkidle" });
      await wait(1500);
    } else {
      // Press ArrowRight to go to next slide
      await page.keyboard.press("ArrowRight");
      // Wait for framer-motion transition (250ms) + render buffer
      await wait(800);
    }

    const screenshotPath = join(SCREENSHOTS_DIR, `slide-${String(i + 1).padStart(2, "0")}.png`);
    await page.screenshot({
      path: screenshotPath,
      clip: { x: 0, y: 0, width: SLIDE_W, height: SLIDE_H },
    });
    screenshotPaths.push(screenshotPath);
    log(`  ✓ Slide ${i + 1}/${SLIDE_COUNT} captured`);
  }

  await browser.close();
  log("Browser closed.");
  console.log("");

  // ── 4. Assemble PDF ──
  log("Assembling PDF…");
  await buildPdf(screenshotPaths, OUTPUT_PATH);

  console.log(`\n✅  Done! PDF saved to:\n   ${OUTPUT_PATH}\n`);
}

/** Build a PDF from a list of PNG paths using raw PDF spec (no extra deps) */
async function buildPdf(pngPaths, outputPath) {
  // We use Playwright's built-in PDF generation via a helper page
  // that loads each image full-screen, then prints to PDF.
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: SLIDE_W, height: SLIDE_H },
  });
  const page = await context.newPage();

  // Build an HTML page with all slides as pages using CSS @page
  const imagesHtml = pngPaths
    .map((p, i) => {
      // Convert Windows path to file:// URL
      const fileUrl = "file:///" + p.replace(/\\/g, "/");
      return `
        <div class="slide-page" ${i > 0 ? 'style="page-break-before: always;"' : ""}>
          <img src="${fileUrl}" width="${SLIDE_W}" height="${SLIDE_H}" />
        </div>`;
    })
    .join("\n");

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @page {
    size: ${SLIDE_W}px ${SLIDE_H}px;
    margin: 0;
  }
  body {
    width: ${SLIDE_W}px;
    background: #000;
  }
  .slide-page {
    width: ${SLIDE_W}px;
    height: ${SLIDE_H}px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slide-page img {
    display: block;
    width: ${SLIDE_W}px;
    height: ${SLIDE_H}px;
    object-fit: cover;
  }
</style>
</head>
<body>
${imagesHtml}
</body>
</html>`;

  await page.setContent(html, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  await page.pdf({
    path: outputPath,
    width: `${SLIDE_W}px`,
    height: `${SLIDE_H}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
}

main().catch((err) => {
  console.error("\n❌  Unexpected error:", err.message);
  process.exit(1);
});
