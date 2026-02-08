# KJR Property Maintenance
KJR Property Maintenance marketing website — San Jose & Bay Area commercial property maintenance.

## Build & deploy

- **`npm run build`** – Builds the site into the `dist/` folder. It does **not** deploy; it only creates the files to deploy.
- **`npm run deploy`** – Runs the build and then reminds you to deploy the `dist/` folder.

**To go live:** deploy the contents of `dist/` to your host (e.g. Cloudflare Pages, Netlify):

1. **Cloudflare Pages:** Connect your Git repo and set **Build command** to `npm run build` and **Build output directory** to `dist`. Or drag-and-drop the `dist/` folder in the dashboard.
2. **Direct upload:** Upload everything inside `dist/` (including `index.html`, `assets/`, and `_redirects`) to your web root.

The `public/_redirects` file is copied into `dist/` so that direct links and refreshes (e.g. `/services/pressure-washing`) work on the live site instead of returning 404.

### Deploying the correct version

1. **If using Cloudflare Pages with Git:** In the dashboard go to your project → **Settings** → **Builds & deployments**. Set **Build command** to `npm run build` and **Build output directory** to `dist` (not `build` or blank). Save, then trigger a new deployment (e.g. push a commit or “Retry deployment”).
2. **If uploading manually:** Run `npm run build` locally, then upload the **entire contents** of the `dist/` folder (drag the contents, not the project root). Old deployments often happen when the wrong folder is uploaded.
3. **Verify:** After deploy, open `https://yoursite.com/build-info.txt`. It should show the date/time of the last build. If it’s old or 404, the wrong build is being deployed or the output directory is wrong.
