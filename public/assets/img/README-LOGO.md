# KJR Logo

Your logo PDF is saved here as **kjr-logo-source.pdf** (Bay Area Cleaning Services KJR Logo Design v3 BW).

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
