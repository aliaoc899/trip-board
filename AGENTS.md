# Trip Board contributor notes

When asked to add or process a trip event, read `docs/EVENT_WORKFLOW.md` first. New writer-provided event materials will normally be in `content/event-inbox/<event-folder>/`. Preserve facts, use placeholders for missing personal details, connect approved photos under `public/trips/<event-id>/`, update `content/trip.ts`, and verify the result with typecheck and build. Do not delete intake files without user approval.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
