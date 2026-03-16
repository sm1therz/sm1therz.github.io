# Tri-Mode HTML · Markdown Studio

A self-contained web workspace that merges the best capabilities of Pretty HTML (dual WYSIWYG + source editing with cleanup tooling) and html-to-markdown.com (high-fidelity HTML ⇄ Markdown conversion). Drop the folder on any static host and you immediately get:

- **Three synchronized editors**: TinyMCE WYSIWYG + CodeMirror HTML + CodeMirror Markdown.
- **Mode switcher**: quickly flip layouts (WYSIWYG|HTML, HTML|Markdown, WYSIWYG|Markdown, or single view).
- **Pretty actions**: inline-style stripping, class/id removal, empty-tag cleanup, NBSP normalization, comment removal.
- **Round-trip conversions**: Turndown (with GFM plugins) for HTML→MD, Markdown-it for MD→HTML.
- **DOCX ⇄ HTML**: Mammoth.js import, html-docx-js export.
- **File I/O**: drag-and-drop or buttons for HTML, MD, DOCX, plain text downloads.
- **Conversion controls**: toggle heading styles, code fence style, hard breaks, auto-linking.
- **Autosave**: entire workspace state persists to `localStorage`.

## Getting started

1. Open `index.html` locally or host the folder on your provider of choice.
2. Paste content into any editor pane. All panes stay in sync.
3. Use the **Pretty** button to batch-run cleanups, then export as HTML, Markdown, DOCX, or text.

Everything runs client-side; no build tooling required.
