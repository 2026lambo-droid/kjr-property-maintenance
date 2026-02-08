#!/usr/bin/env node
/**
 * Isolate logo exactly as-is: remove background (true transparent alpha), no redesign.
 * Preserves original shapes, proportions, spacing, details. Razor-sharp, no blur/halos.
 *
 * Input: First page of PDF exported as PNG (high-res), OR a PNG path.
 * Output: public/assets/img/kjr-icon.png (PNG, transparent background, production-ready).
 *
 * Usage:
 *   Option A - You have the PDF open in Cursor/Preview:
 *     1. Export the first page as PNG (e.g. File > Export > PNG, scale 2x or 3x for high res).
 *     2. Save it as public/assets/img/kjr-logo-source-from-pdf.png
 *     3. Run: node scripts/logo-from-pdf.mjs public/assets/img/kjr-logo-source-from-pdf.png
 *
 *   Option B - Pass any PNG path (exported from the PDF):
 *     node scripts/logo-from-pdf.mjs /path/to/exported-logo-page.png
 *
 * Default: reads public/assets/img/kjr-logo-source-from-pdf.png if it exists.
 */
import sharp from "sharp";
import { readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const imgDir = join(__dirname, "../public/assets/img");
const defaultInputPath = join(imgDir, "kjr-logo-source-from-pdf.png");
const outPath = join(imgDir, "kjr-icon.png");

const inputPath = process.argv[2] || defaultInputPath;

if (!existsSync(inputPath)) {
  console.error(
    "Input not found:",
    inputPath,
    "\nExport the first page of the PDF as PNG and pass the path, or save as",
    defaultInputPath
  );
  process.exit(1);
}

console.log("Source:", inputPath);

let pngBuffer;
try {
  pngBuffer = readFileSync(inputPath);
} catch (e) {
  console.error("Read failed:", e.message);
  process.exit(1);
}

const { data, info } = await sharp(pngBuffer)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width: w, height: h, channels } = info;
if (!w || !h) {
  console.error("Could not read image dimensions.");
  process.exit(1);
}

const out = Buffer.alloc(w * h * 4);
const WHITE_THRESHOLD = 252;

for (let i = 0; i < w * h; i++) {
  const si = i * channels;
  const r = data[si];
  const g = data[si + 1];
  const b = data[si + 2];
  const isBackground =
    r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD;
  out[i * 4] = r;
  out[i * 4 + 1] = g;
  out[i * 4 + 2] = b;
  out[i * 4 + 3] = isBackground ? 0 : 255;
}

const img = sharp(out, {
  raw: { width: w, height: h, channels: 4 },
});

const trimmed = await img
  .trim({ threshold: 1 })
  .png({ compressionLevel: 6 })
  .toFile(outPath);

console.log(
  "Saved:",
  outPath,
  `(${trimmed.width}x${trimmed.height}, transparent background)`
);
