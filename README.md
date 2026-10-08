# Aditya Agarwal — Personal Site

The Astro source for Aditya Agarwal's personal site. The home page is a short ledger of the
last eight years in data platforms and developer tools; each row opens to the detail behind
it. It deploys to GitHub Pages from `master`.

## Commands

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
```

## Content

Home page copy lives in `src/pages/index.astro`; links and the written-out email in
`src/site.config.ts`. Publish only confirmed facts: the site carries no placeholder content.
The look and its rules are in `docs/DESIGN.md`.
