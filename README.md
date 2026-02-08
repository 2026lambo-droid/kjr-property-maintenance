# KJR Property Maintenance
KJR Property Maintenance marketing website — San Jose & Bay Area commercial property maintenance.

## Build & deploy

- **`npm run build`** – Builds the site into the `dist/` folder. It does **not** deploy; it only creates the files to deploy.
- **`npm run deploy`** – Runs the build and then reminds you to deploy the `dist/` folder.

**To go live:** deploy the contents of `dist/` to your host (e.g. Cloudflare Pages, Netlify):

1. **Cloudflare Pages:** Connect your Git repo and set **Build command** to `npm run build` and **Build output directory** to `dist`. Or drag-and-drop the `dist/` folder in the dashboard.
2. **Direct upload:** Upload everything inside `dist/` (including `index.html`, `assets/`, and `_redirects`) to your web root.

The `public/_redirects` file is copied into `dist/` so that direct links and refreshes (e.g. `/services/pressure-washing`) work on the live site instead of returning 404.
