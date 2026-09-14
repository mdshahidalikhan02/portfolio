# Md Shahid Ali Khan — Portfolio

A premium, dark, engineering-focused portfolio built with **React + TypeScript + Vite + Tailwind CSS v4**.

All content (experience, projects, metrics, skills, education) is sourced directly from the resume and lives in one file: `src/data/content.ts`. To update anything on the site, edit that file — the whole UI reads from it.

## Sections

1. **Hero** — thesis statement + a live "trace" visual built from the actual latency numbers (10s -> <2s, 2min -> 30s).
2. **Engineering Impact** — every measured outcome from the resume, no invented percentages.
3. **Professional Experience** — Societe Generale roles, with stack tags and full bullet detail.
4. **Projects** — every project from the resume, clearly labeled Personal Project vs. professional work.
5. **Featured Case Study** — the Distributed Workflow & Job Processing Platform, broken down by Problem / Architecture / Decisions / Failure Scenarios / Performance / Trade-offs / Outcome, with a full dedicated page.
6. **Engineering Notes** — long-form technical notes grounded in the resume's own bullets (Caffeine caching, Kafka async processing, ActivePivot/MDX OLAP, Transactional Outbox, Cache-Aside + Lua rate limiting, idempotent job claiming, Redis locking + circuit breakers).
7. **System Design Notes** — request-flow diagrams for the risk reporting platform and the workflow platform.
8. **Skills**, **Education & Achievements**, **Contact**, **Footer**.

## Resume link

The resume is not bundled as a downloadable file. Every "resume" touchpoint — the nav button, the Hero's "View resume" link, and the Contact section's resume card — opens the same Google Drive folder in a new tab:

```
https://drive.google.com/drive/folders/1fP-wDBmdbTlpMhyIVImilji-72obJtlI
```

This is defined once as `RESUME_LINK` in `src/data/content.ts`. To point it at a different link, update that one constant.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

Requires Node 18+.

## Updating content

Everything factual lives in `src/data/content.ts`:

- `profile` — name, role, contact links, summary
- `RESUME_LINK` — the Drive link opened by every resume touchpoint
- `metrics` — the Engineering Impact numbers
- `experience` — work history
- `projects` — project list + the detailed case study for featured projects
- `notes` — Engineering Notes (blog) articles
- `skills`, `education`, `achievements`

Add a new project by adding an object to `projects`; give it a `caseStudy` object to get a full case-study page automatically (route: `/projects/<slug>`). Add a new note the same way in `notes` (route: `/notes/<slug>`).

## Deployment

### Vercel
1. Push this repo to GitHub.
2. Import it in Vercel — framework preset "Vite" is auto-detected.
3. Build command: `npm run build`, output directory: `dist`. Deploy.

### GitHub Pages
The app uses `HashRouter`, so it works on GitHub Pages with no server rewrite config needed.

1. `npm run build`
2. Push the contents of `dist/` to a `gh-pages` branch (or use the `gh-pages` npm package / a GitHub Action).
3. In repo Settings -> Pages, set the source to the `gh-pages` branch.

`vite.config.ts` already sets `base: './'` so asset paths work from any subpath.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (CSS-first `@theme` token config in `src/index.css`)
- react-router-dom (HashRouter, for static-host friendliness)

## Design notes

- Palette: near-black charcoal-blue background, amber signal accent (`#D9A441`) for primary emphasis, teal (`#4FD1C5`) for "healthy" metrics, muted red for failure-scenario callouts.
- Type: Space Grotesk (display), Inter (body), IBM Plex Mono (data, labels, eyebrows) — a deliberately technical/dashboard-flavored combination.
- Signature element: the latency "trace" bar (`src/components/TraceBar.tsx`), reused in the Hero and Impact section, styled after a monitoring-dashboard trace and driven entirely by the resume's real before/after numbers.
- Section-link navigation is router-safe: since the app uses `HashRouter` for static-host portability, nav links call a small `goToSection()` helper (`src/lib/navigation.ts`) instead of raw `#anchor` hrefs, so they don't collide with the router's own hash-based routing.
