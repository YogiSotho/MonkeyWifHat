# MonkeyWifHat Documentation Site

This repository contains:

- a wiki-style markdown article series in `wiki/`
- a static landing page in `index.html`
- supporting assets in `styles.css` and `app.js`

## What Goes Live On GitHub Pages

If GitHub Pages is enabled for this repository, GitHub serves the static site starting from `index.html` at the repository root.

That means:

- `index.html` becomes the homepage
- `styles.css` and `app.js` are loaded by that page
- the site fetches markdown files from `wiki/`

So the wiki content is still part of the site, but it is being displayed by the landing page rather than by GitHub's separate Wiki tab.

## Hosting Options

### GitHub Pages

This is the easiest way to host the landing page.

This repository now includes an automatic deployment workflow at `.github/workflows/deploy-pages.yml`.

1. Create a GitHub repository.
2. Upload all files in this folder to the repository root.
3. Push the repository to the `main` branch.
4. In the repository, open `Settings` -> `Pages`.
5. Under `Build and deployment`, set `Source` to `GitHub Actions`.
6. GitHub Actions will deploy the site automatically on pushes to `main`.
7. GitHub will publish the site at a `github.io` URL.

The landing page will work as a static site and fetch the markdown files from `wiki/`.

This repository also includes a `.nojekyll` file so GitHub Pages serves the project as plain static files without Jekyll processing.

It also includes:

- a favicon at `assets/favicon.svg`
- a social preview graphic at `assets/social-preview.svg`
- a web app manifest at `site.webmanifest`

### Manual Branch Deployment

If you do not want to use GitHub Actions, you can still deploy manually:

1. Open `Settings` -> `Pages`.
2. Under `Build and deployment`, choose `Deploy from a branch`.
3. Select your main branch and the `/ (root)` folder.
4. Save.

### GitHub Repository Only

If you only upload the files to GitHub without enabling Pages, the markdown files will still render on GitHub when opened individually, but that does not create a real GitHub wiki automatically.

### GitHub Wiki Feature

GitHub's built-in wiki is separate from normal repository folders. A `wiki/` folder inside the repo does not become the GitHub Wiki tab by itself.

If you want the actual GitHub Wiki feature, you would need to:

1. Enable `Wiki` in the repository settings.
2. Either create pages manually in the GitHub wiki UI or clone the separate `.wiki.git` repo and push markdown files there.

For most projects like this, GitHub Pages plus the markdown folder is the simpler option.

## Recommended Approach

Use both:

- GitHub Pages for the public landing page
- the `wiki/` folder as the source documentation in the main repo

That gives you a clean public site without relying on GitHub's separate wiki system.

## Later Todo

- add custom domain and `CNAME` setup once the final repository name or domain is chosen
