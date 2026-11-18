<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Imported website
- Keep imported page markup and interactions in each TanStack route, with source styles separate, to preserve captured structure and fidelity.
- Use importedDocument staticData for source html/body attributes so every imported page retains its original document layout.

## Investor suite
- Keep new suite features in src/features/suite and the index route as its URL coordinator; imported secondary pages remain untouched.
- Render all deck slides through one 1920×1080 SlideLayout with center-origin scaling so presentation, overview, and fullscreen share geometry.
- Keep mode and slide in validated URL search for reloadable and shareable presentation state.
- Derive navigation limits and counters from the central slide registry so deck revisions cannot leave stale slide counts.
- Compute demonstration hashes in browser effects using Web Crypto and label sample evidence explicitly; never present illustrative digests as production seals.
- Scope suite surface and motion tokens to the suite stylesheet rules; preserve imported secondary pages and fixed slide geometry during visual refreshes.
