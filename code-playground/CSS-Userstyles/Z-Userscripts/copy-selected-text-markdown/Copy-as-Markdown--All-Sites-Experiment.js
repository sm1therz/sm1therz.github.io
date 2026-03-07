// ==UserScript==
// @name         Copy as Markdown > All Sites > Main
// @namespace    https://example.com/
// @version      0.2.0
// @description  Show an "MD" popup for selected text and copy selection as Markdown
// @match        *://*/*
// @match        file:///*
// @grant        GM_setClipboard
// @tag          markdown
// @tag          all sites
// @tag          main
// @run-at       document-idle
// @require      https://cdn.jsdelivr.net/npm/turndown/dist/turndown.js
// ==/UserScript==

(function () {
  'use strict';

  // ---------- Markdown converter ----------
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '*',
    strongDelimiter: '**',
    hr: '---',
  });

  // Keep underline as inline HTML (Markdown has no native underline)
  turndownService.addRule('underline', {
    filter: ['u'],
    replacement: function (content) {
      return `<u>${content}</u>`;
    },
  });

  // Convert <mark> to ==highlight== (common Markdown extension)
  turndownService.addRule('mark', {
    filter: ['mark'],
    replacement: function (content) {
      return `==${content}==`;
    },
  });

  // ---- Table support ----
  function escapeTableCell(text) {
    return text
      .replace(/\r?\n+/g, ' ')
      .replace(/\|/g, '\\|')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function tableToMarkdown(tableNode) {
    const rows = Array.from(tableNode.querySelectorAll('tr'));
    if (!rows.length) return '';

    const matrix = rows.map((row) => {
      const cells = Array.from(row.children).filter((el) =>
        /^(TH|TD)$/i.test(el.tagName)
      );
      return cells.map((cell) => {
        const cellMd = turndownService.turndown(cell.innerHTML || '').trim();
        return escapeTableCell(cellMd);
      });
    }).filter(r => r.length);

    if (!matrix.length) return '';

    const maxCols = Math.max(...matrix.map(r => r.length));
    matrix.forEach((r) => {
      while (r.length < maxCols) r.push('');
    });

    // Header: first row (or first row with TH)
    const hasThInFirstRow = Array.from(rows[0].children).some(el => /^TH$/i.test(el.tagName));
    const header = matrix[0];
    const body = matrix.slice(1);

    const sep = new Array(maxCols).fill('---');

    const lines = [];
    lines.push(`| ${header.join(' | ')} |`);
    lines.push(`| ${sep.join(' | ')} |`);

    if (hasThInFirstRow) {
      body.forEach((r) => lines.push(`| ${r.join(' | ')} |`));
    } else {
      // If no explicit TH, still keep all rows by treating first row as header
      body.forEach((r) => lines.push(`| ${r.join(' | ')} |`));
    }

    return lines.join('\n');
  }

  turndownService.addRule('table', {
    filter: ['table'],
    replacement: function (_content, node) {
      const mdTable = tableToMarkdown(node);
      return mdTable ? `\n\n${mdTable}\n\n` : '\n\n';
    },
  });

  // ---------- Floating MD button ----------
  const btn = document.createElement('button');
  btn.textContent = 'MD';
  Object.assign(btn.style, {
    position: 'fixed',
    zIndex: '2147483647',
    display: 'none',
    padding: '6px 10px',
    border: '1px solid #888',
    borderRadius: '6px',
    background: '#111',
    color: '#fff',
    font: '12px/1.2 sans-serif',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,.25)',
  });
  document.documentElement.appendChild(btn);

  function getSelectionRange() {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return null;
    return sel.getRangeAt(0);
  }

  function placeButtonNearSelection(range) {
    const rect = range.getBoundingClientRect();
    if (!rect || (rect.width === 0 && rect.height === 0)) return hideButton();

    const top = Math.max(8, rect.top - 36);
    const left = Math.min(window.innerWidth - 50, Math.max(8, rect.left + rect.width - 30));

    btn.style.top = `${top}px`;
    btn.style.left = `${left}px`;
    btn.style.display = 'block';
  }

  function hideButton() {
    btn.style.display = 'none';
  }

  function getSelectedHtml(range) {
    const fragment = range.cloneContents();
    const container = document.createElement('div');
    container.appendChild(fragment);
    return container.innerHTML;
  }

  function normalizeMarkdown(md) {
    // Ensure one space after unordered/ordered list markers
    // Example: "-   item" -> "- item", "1.   item" -> "1. item"
    md = md.replace(/^(\s*(?:[-+*]|\d+\.) )\s+/gm, '$1');
    return md;
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_) {
      try {
        if (typeof GM_setClipboard === 'function') {
          GM_setClipboard(text, { type: 'text', mimetype: 'text/plain' });
          return true;
        }
      } catch (_) {}
    }
    return false;
  }

  btn.addEventListener('mousedown', (e) => e.preventDefault()); // don't clear selection
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const range = getSelectionRange();
    if (!range) return hideButton();

    const html = getSelectedHtml(range);
    if (!html.trim()) return hideButton();

    let md = turndownService.turndown(html).trim();
    md = normalizeMarkdown(md);
    if (!md) return hideButton();

    const ok = await copyText(md);
    btn.textContent = ok ? '✓' : '!';
    setTimeout(() => {
      btn.textContent = 'MD';
      hideButton();
    }, 700);
  });

  function updateButton() {
    const range = getSelectionRange();
    if (!range) return hideButton();
    placeButtonNearSelection(range);
  }

  document.addEventListener('selectionchange', () => {
    setTimeout(updateButton, 0);
  });

  window.addEventListener('scroll', () => {
    if (btn.style.display === 'block') updateButton();
  }, true);

  document.addEventListener('mousedown', (e) => {
    if (e.target !== btn) hideButton();
  });
})();
