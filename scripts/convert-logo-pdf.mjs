#!/usr/bin/env node
/**
 * Converts the first page of kjr-logo-source.pdf to kjr-logo.png
 * Run: npm run logo:convert   (after npm install)
 */
import { pdfToPng } from 'pdf-to-png-converter';
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pdfPath = join(__dirname, '../public/assets/img/kjr-logo-source.pdf');
const outPath = join(__dirname, '../public/assets/img/kjr-logo.png');

const pngPages = await pdfToPng(pdfPath, { viewportScale: 2 });
if (pngPages.length && pngPages[0].content) {
  writeFileSync(outPath, Buffer.from(pngPages[0].content));
  console.log('Logo saved to public/assets/img/kjr-logo.png');
} else {
  console.error('No pages in PDF or no content');
  process.exit(1);
}
