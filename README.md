# Hussein Bouik — Portfolio

Personal portfolio of **Hussein Bouik**, Software Engineer building enterprise .NET microservices, immersive 3D web experiences (React Three Fiber), and AI-powered systems. Currently at NTT DATA, working on the Unified Volunteers Platform for the United Nations Volunteers.

**Tech stack:** Next.js 14, React 18, TypeScript, SCSS, Framer Motion.

**Deployed on Vercel:** https://husseinbouik-github-io.vercel.app

## Updating content

All site content lives in JSON files under `src/content/`:

- `src/content/index/hero.json` — hero name, tagline, intro, and buttons
- `src/content/projects/featured.json` — featured projects (also shown on `/projects`)
- `src/content/index/qna.json` — Q&A entries
- `src/content/section/footer.json` — footer links and social profiles
- `src/content/navbar.json` — top navigation links
- `src/content/_settings.json` — site settings (name, splash screen, update checks)

Edit the JSON, commit to `main`, and Vercel redeploys automatically.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
