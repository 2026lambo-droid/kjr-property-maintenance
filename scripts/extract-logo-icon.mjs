#!/usr/bin/env node
/**
 * Extracts ONLY the logo icon (no text) from kjr-logo.png.
 * Outputs: kjr-icon.png (transparent), kjr-icon.svg (wrapper).
 * Run: npm install && npm run logo:icon
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imgDir = join(__dirname, '../public/assets/img');
const fullLogoPath = join(imgDir, 'kjr-logo.png');
const iconPngPath = join(imgDir, 'kjr-icon.png');
const iconSvgPath = join(imgDir, 'kjr-icon.svg');

const fullLogo = readFileSync(fullLogoPath);
const meta = await sharp(fullLogo).metadata();
const W = meta.width || 0;
const H = meta.height || 0;
if (!W || !H) {
  console.error('Could not read image dimensions from', fullLogoPath);
  process.exit(1);
}

const iconHeight = Math.max(1, Math.min(H, Math.round(H * 0.72)));
const cropped = await sharp(fullLogo)
  .extract({ left: 0, top: 0, width: W, height: iconHeight })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { data, info } = cropped;
const { width: w, height: h, channels } = info;
if (!w || !h) {
  console.error('Cropped image has no area.');
  process.exit(1);
}

const out = Buffer.alloc(w * h * 4);
for (let i = 0; i < w * h; i++) {
  const si = i * channels;
  const r = data[si], g = data[si + 1], b = data[si + 2];
  const isWhite = r > 250 && g > 250 && b > 250;
  out[i * 4] = r;
  out[i * 4 + 1] = g;
  out[i * 4 + 2] = b;
  out[i * 4 + 3] = isWhite ? 0 : 255;
}

await sharp(out, { raw: { width: w, height: h, channels: 4 } })
  .png()
  .toFile(iconPngPath);
console.log('Saved:', iconPngPath);

const pngBuffer = readFileSync(iconPngPath);
const base64 = pngBuffer.toString('base64');
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${w} ${h}" fill="none" aria-hidden="true" role="img">
  <image width="${w}" height="${h}" href="data:image/png;base64,${base64}" xlink:href="data:image/png;base64,${base64}"/>
</svg>`;
writeFileSync(iconSvgPath, svg);
console.log('Saved:', iconSvgPath);
