// ==UserScript==
// @name         Workflowy Export 5 > Remove > Links + Hashtags + > + Colors
// @namespace    https://workflowy.com/
// @version      2.0
// @description  Remove Markdown links, strip hashtags (except #numbers), clean note blockquotes with precise contextual indentation, remove == marks, and normalize list indentation to tabs so ordered and unordered items nest at their true depth. Works with current Workflowy export DOM.
// @match        https://workflowy.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // Rule 5: Normalize list indentation to tabs.
  //
  // Workflowy's export dialog indents the two list types with different
  // per-level widths (verified against Workflowy's own rendering):
  //   - ordered items ("1." "2." ...): 4 spaces per depth level
  //   - unordered items ("-"):         2 spaces per depth level
  // So identical-looking indentation can mean different depths. Decode each
  // line's true depth from its own marker type, then re-emit as one tab per
  // level. This is the only rule that changes indentation; text is untouched.
  function normalizeListIndentation(text) {
	const lines = text.split('\n');
	const out = [];
	let lastDepth = 0; // depth of the most recent list item (for note lines)

	for (const line of lines) {
	  const m = line.match(/^( *)(\d+\.|[-*+])(\s+)(.*)$/);

	  if (m) {
		const spaces = m[1].length;
		const isOrdered = /^\d+\.$/.test(m[2]);
		const depth = isOrdered ? Math.floor(spaces / 4) : Math.floor(spaces / 2);
		const marker = isOrdered ? m[2] : '-';
		out.push('\t'.repeat(depth) + marker + ' ' + m[4]);
		lastDepth = depth;
		continue;
	  }

	  if (line.trim() === '') {
		out.push(line);
		continue;
	  }

	  // Indented non-list line (e.g. a note de-blockquoted by Rule 3):
	  // nest it one level under the list item it follows.
	  if (/^ /.test(line)) {
		out.push('\t'.repeat(lastDepth + 1) + line.replace(/^ +/, ''));
		continue;
	  }

	  // Unindented plain line (e.g. a title): pass through, reset context.
	  out.push(line);
	  lastDepth = 0;
	}

	return out.join('\n');
  }

  // process text: apply all transformations to exported markdown
  function processText(text) {
	const lines = text.split('\n');
	const result = [];

	for (let i = 0; i < lines.length; i++) {
	  let line = lines[i];
	  const prevLine = i > 0 ? lines[i - 1] : '';
	  const prevTrimmed = prevLine.trim();

	  // Rule 3.a: Delete line if it's only '> '
	  if (/^\s*>\s*$/.test(line)) continue;

	  // Rule 3: Remove leading '> ' unless exception
	  const isFirstLine = i === 0;
	  const isDashBlockquote = /^\s*-\s*> /.test(line);
	  const blankAbove = prevTrimmed === '';

	  if (!isFirstLine && !blankAbove && !isDashBlockquote && /^\s*> /.test(line)) {
		const prevIndent = (prevLine.match(/^\s*/)[0] || '').length;
		// compute addSpaces based on the previous line's marker
		let addSpaces = 3; // default
		if (/^\s*-\s*> /.test(prevLine)) addSpaces = 6;   // prev is "- >"
		else if (/^\s*- /.test(prevLine)) addSpaces = 3;  // prev is "- "
		else if (/^\s*> /.test(prevLine)) addSpaces = 3;   // prev is "> "

		const totalIndent = ' '.repeat(prevIndent + addSpaces);
		line = line.replace(/^\s*>\s?/, totalIndent);
	  }

	  // Rule 1: Remove markdown links (keep visible text only)
	  while (/\[[^\]]+\]\([^\)]+\)/.test(line)) {
		line = line.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '$1');
	  }

	  // Rule 2: Remove '#' unless followed by a number
	  // replace occurrences like #word or #word123 -> word or word123; keep #1 etc.
	  line = line.replace(/#(?!\d)([A-Za-z0-9_-]+)/g, '$1');

	  // Rule 4: Remove all instances of '=='
	  line = line.replace(/==/g, '');

	  result.push(line);
	}

	// Rule 5: Normalize list indentation to tabs (after all line-level rules)
	return normalizeListIndentation(result.join('\n'));
  }

  // attach listener when an export dialog appears
  const observer = new MutationObserver(() => {
	// prefer the dialog-box element where the textarea lives
	const dialog = document.querySelector('.dialog-box') || document.querySelector('.dialog-backdrop');
	if (!dialog || dialog._hasCombinedCopyListener) return;

	const textarea = dialog.querySelector('textarea') || dialog.querySelector('div[contenteditable]');
	if (!textarea) return;

	dialog._hasCombinedCopyListener = true;

	// copy handler attached to the dialog so it catches copy events regardless of how copy is triggered
	dialog.addEventListener('copy', function (e) {
	  try {
		e.preventDefault();
		const raw = textarea.value ?? textarea.textContent ?? '';
		const out = processText(raw);
		// prefer clipboardData when available
		if (e.clipboardData) {
		  e.clipboardData.setData('text/plain', out);
		} else if (navigator.clipboard && navigator.clipboard.writeText) {
		  // fallback for some browsers: async API (may require permissions)
		  navigator.clipboard.writeText(out).catch(() => {});
		}
	  } catch (err) {
		// fail silently
		console.error('Workflowy export script error', err);
	  }
	}, true);
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();