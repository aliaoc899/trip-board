# Adding a trip event

The board keeps the live trip data in `content/trip.ts` and public photos in `public/trips/`. An inbox is included so you can give a future event to an AI coding assistant without learning the code structure.

## Your workflow

1. Copy `content/event-inbox/EVENT_TEMPLATE.md` into a new folder named for the event, for example:

   ```text
   content/event-inbox/2026-01-10-maribor/
   ├── event.md
   └── photos/
       ├── market.jpg
       ├── vineyard.jpg
       └── dinner.jpg
   ```

2. Fill in `event.md`. Keep the five section headings from the template. Draft notes are fine; the assistant can edit them into a readable journal entry without inventing facts.
3. Put the event’s original JPG, PNG, WebP, or AVIF photos in its `photos` folder. Use descriptive file names when practical.
4. Ask the coding assistant:

   > Process the new trip event in `content/event-inbox`, connect its photos, and verify the board.

5. Review the event in the local board. Once you approve it, the assistant will remove that processed inbox folder; the finished text remains in `content/trip.ts` and the finished photos remain in `public/trips/<event-id>/`.

## What the assistant should do

For each new inbox folder:

1. Read `event.md` and inspect every image.
2. Preserve the writer’s facts and voice. Never invent places, foods, wines, dates, names, or personal details. Flag missing required facts with a clear `[add …]` placeholder.
3. Create a stable lowercase event ID, such as `day-09-maribor`.
4. Copy web-ready images to `public/trips/<event-id>/`. Keep originals in the inbox until the event is approved. Prefer WebP for large photographic files and avoid upscaling.
5. Add a typed event object to `content/trip.ts`, ordered by date. Each image needs useful alt text and a short caption.
6. Run `npm run typecheck` and `npm run build`.
7. Start or reuse `npm run dev`, check the new timeline node, gallery navigation, event copy, mobile layout, and browser console.
8. Ask for approval before deleting the processed inbox folder. Deletion is optional; it is never required for the site to work.

## Photo guidelines

- Landscape photos around 2000–2600 px wide work best in the gallery.
- Include at least one photo; two to six is ideal.
- Avoid placing important faces at the extreme edges because the responsive gallery crops with `object-fit: cover`.
- Put the preferred lead photo first in the event’s `photos` array.
- Only add photos you have permission to publish.

## Editing trip-level details

The trip title, date range, and introduction are at the top of `content/trip.ts`. Replace the sample title and `[your name]` / `[your major]` placeholders before publishing.
