# Trip Board

A one-page Next.js travel journal with an interactive timeline, event-specific photo gallery, and a structured story for each day.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3001](http://127.0.0.1:3001).

## Validate a change

```bash
npm run typecheck
npm run build
```

The production build is a static export in `out/`. To preview that exact export locally, run:

```bash
npm run start
```

Then open [http://127.0.0.1:3001](http://127.0.0.1:3001).

## Publish with GitHub Pages

The repository includes [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). It builds the static Next.js export and publishes it whenever a commit reaches `main`. The expected project URL is:

<https://aliaoc899.github.io/trip-board/>

One-time GitHub setup:

1. Push this project to `https://github.com/aliaoc899/trip-board` on the `main` branch.
2. Open the repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and watch the “Deploy Trip Board to GitHub Pages” workflow. It also supports manual runs through **Run workflow**.

If the repository is renamed, update `NEXT_PUBLIC_BASE_PATH` in `.github/workflows/deploy-pages.yml` to `/<new-repository-name>`. For a user or organization site named `<owner>.github.io`, set it to an empty string instead.

GitHub Pages only hosts the exported static site. The current board is fully compatible because its timeline, galleries, collage view, and theme toggle all run in the browser. Features that require a server or database would need a different hosting setup later.

## Add an event

Use the drop-folder workflow in [`docs/EVENT_WORKFLOW.md`](docs/EVENT_WORKFLOW.md). The editable trip data is in `content/trip.ts`.
