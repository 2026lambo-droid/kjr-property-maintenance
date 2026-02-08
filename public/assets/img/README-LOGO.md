# KJR Logo

**Exact source PDF:** **KJR-Logo-Design-v3-BW.pdf** (Bay Area Cleaning Services KJR Logo Design v3 BW). Do not redesign or modify the logo; use as-is.

## Production icon from PDF (exact source, transparent background)

Use the PDF as the **exact** source. No redesign, no stylize, no simplification.

1. Open **KJR-Logo-Design-v3-BW.pdf** in Preview (or Acrobat).
2. Export **only the first page** as PNG:
   - **Preview:** File → Export → PNG. Use a high resolution (e.g. 2× or 3× scale) for razor-sharp result.
   - Save as: **kjr-logo-source-from-pdf.png** in this folder (`public/assets/img/`).
3. From project root run:
   ```bash
   npm run logo:from-pdf
   ```
   Or with explicit path:
   ```bash
   node scripts/logo-from-pdf.mjs public/assets/img/kjr-logo-source-from-pdf.png
   ```

This script:

- Leaves the logo **exactly as-is** (shapes, proportions, spacing, details).
- Makes the **background fully transparent** (alpha).
- Trims transparent edges so the file is production-ready.
- Outputs **kjr-icon.png** (high-res PNG, transparent background) for header, footer, and sidebar.

No enhancements, smoothing, or creative changes. Color values unchanged; sharp edges only.

---

## Full logo (PNG)

From the project root:

```bash
npm install
npm run logo:convert
```

This creates **kjr-logo.png** from the first page of the PDF.

**Manual option:** Open the PDF in Preview (or Adobe Acrobat), export the first page as PNG, and save as **kjr-logo.png** in this folder.

---

## Logo icon only (no text)

The header and footer use **only the graphic mark** (circular building/wave symbol). No “KJR” or “Property Maintenance” text.

### Generate icon only (no text)

From the project root:

```bash
npm install
npm run logo:icon
```

This script uses **kjr-logo.png** (full logo with icon + text), crops to the upper portion (icon only), makes the white background transparent, and saves:

- **kjr-icon.png** (icon only, transparent background)
- **kjr-icon.svg** (same icon in an SVG wrapper)

The site header and footer use **kjr-icon.png** when it exists; otherwise a fallback circle is shown.

Original aspect ratio is preserved. No stretch, effects, shadows, or extra colors—black/white only.

### Manual export

1. Open `kjr-logo-source.pdf` in Illustrator or Acrobat.
2. Select/crop **only** the circular building/wave symbol. Do not include any lettering.
3. Export as **kjr-icon.svg** (preferred) and/or **kjr-icon.png** (transparent).
4. Save into this folder (`public/assets/img/`).

The site uses **kjr-icon.svg** for header and footer branding. If you use only PNG, change the `logoIcon` path in `Header.jsx` and `Footer.jsx` to `kjr-icon.png`.
