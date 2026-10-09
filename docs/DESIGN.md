# Design

The site's look and the rules that keep it consistent. Agreed on a design canvas, one
question at a time; the built home page is now the reference.

## Principles

- **Content first, minimal frame.** Every page shares one thin header (name left, Projects ·
  Ideas · Domain names right, current page in the accent colour) and the same contact footer
  (GitHub, X, LinkedIn, written-out email). Nothing else frames the content.
- **Catalog pages** (Projects, Ideas, Domain names) open with one plain sentence, then quiet mono
  group labels. Statuses are honest (`live`, `parked`, `not maintained`); a row with no
  confirmed line shows just its name. Link only what has something to see.
  On Domain names, a project being built gets a small accent `building` label and a retired
  name is struck through (with a screen-reader "Retired:" prefix).
- **Ideas filter.** Tag links with counts sit above a numbered list. An idea can carry
  several tags: its first tag places it in the list and appears in the left margin on the
  first idea of each group; any of its tags matches the filter. With JavaScript the links
  filter (selected: bold, accent underline); without it they jump to the group.
- **Space, not boxes.** Group with spacing; no cards, borders or dividers on the home page.
- **One reading edge.** Spans (`3 years`, `Now`) sit in a fixed left column so every line of
  text starts at the same edge. On phones the span moves above its line.
- **Newest first.** The ledger opens with `Now`, so what is current is read first; the
  earlier years follow in reverse order.
- **Few type sizes.** 19px serif for content, 16px serif for details, 13px mono for spans,
  links and the email.
- **Detail on demand, everywhere.** Extra detail opens in place behind a `+` button, which
  works by tap and keyboard. Never hover-only: phones cannot hover. Without JavaScript the
  details show.
- **External links open in a new tab** (`target="_blank" rel="noopener"`); links within the
  site stay in the same tab.
- **Facts only.** No placeholder copy or links. The email is written out
  (`aditya at artsofbaniya dot com`), not linked, so simple scrapers skip it.

## Tokens

Defined in `src/styles/global.css` (`:root`, with a dark-mode set).

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--page` | `#fbfbfa` | `#202020` | background |
| `--text` | `#1d1d1f` | `#ededed` | content, links |
| `--body` | `#4f4d49` | `#c2bfba` | opening line, details |
| `--muted` | `#6b6761` | `#aaa6a1` | spans, email, toggles |
| `--home-link-line` | `#c9c4bd` | `#6a655f` | link underline |
| `--home-link-hover` | `#b0283e` | `#f06a7f` | hover, `Now` span |

Type: Newsreader (serif) and IBM Plex Mono, from Google Fonts. Layout: 600px column,
88px span column, 44px toggle targets.

## Not yet redesigned

The About and 404 pages still use the earlier look.
