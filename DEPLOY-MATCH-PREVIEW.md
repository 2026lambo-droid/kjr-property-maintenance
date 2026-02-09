# Make the live site match your preview (127.0.0.1:5175)

Your **dev server** (http://127.0.0.1:5175) runs the source code with hot reload.  
The **live site** serves the **built** output from the `dist/` folder. If they don’t match, the host is either serving an old build or the wrong folder.

## Steps to make live match your preview

### 1. Build from the same code you’re previewing
```bash
npm run build
```
This updates `dist/` from your current source (the same code the dev server uses).

### 2. (Optional) Confirm the build matches the preview
```bash
npm run preview:build
```
This builds and then serves `dist/` locally (e.g. http://localhost:4173).  
Check that this looks the same as http://127.0.0.1:5175. If it does, the build is correct.

### 3. Deploy that build to Cloudflare
In **your** Cursor terminal (so Wrangler can use your login):
```bash
npm run deploy:live
```
This runs `npm run build` again and uploads `dist/` to Cloudflare Pages.  
The live site will then serve the same content as your preview.

### 4. Confirm on the live site
- Open `https://yoursite.com/build-info.txt` — it should show today’s date/time.
- Check a few pages; they should match what you see at 127.0.0.1:5175.

---

**If live still doesn’t match after this**

- **Purge cache:** In Cloudflare Dashboard → Caching → Purge Everything.
- **Hard refresh:** Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows).
- **Host builds from Git:** In the dashboard, set Build command to `npm run build`, Build output directory to `dist`, then push your code and trigger a new deployment so the host builds from the same source you have locally.
