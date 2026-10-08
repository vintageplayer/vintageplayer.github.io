# Design

The site's look and the rules that keep it consistent. Agreed on a design canvas, one
question at a time; the built home page is now the reference.

## Principles

- **Content first, no frame.** The home page has no header, menu, buttons or footer: name,
  one opening line, the ledger, links.
- **Space, not boxes.** Group with spacing; no cards, borders or dividers on the home page.
- **One reading edge.** Spans (`3 years`, `Now`) sit in a fixed left column so every line of
  text starts at the same edge. On phones the span moves above its line.
- **Few type sizes.** 19px serif for content, 16px serif for details, 13px mono for spans,
  links and the email.
- **Detail on demand, everywhere.** Extra detail opens in place behind a `+` button, which
  works by tap and keyboard. Never hover-only: phones cannot hover. Without JavaScript the
  details show.
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
