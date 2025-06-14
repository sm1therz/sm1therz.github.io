// ==UserScript==
// @name         Workflowy Export > Remove > Links + Hashtags + > + Colors
// @namespace    https://workflowy.com/
// @version      1.7
// @description  Remove Markdown links, strip hashtags (except #numbers), clean note blockquotes with precise contextual indentation, and remove == marks
// @match        https://workflowy.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const observer = new MutationObserver(() => {
	const dialog = document.querySelector('.dialog-backdrop');
	if (dialog && !dialog._hasCombinedCopyListener) {
	  const textarea = dialog.querySelector('textarea._p3dqzq');
	  if (textarea) {
		dialog._hasCombinedCopyListener = true;

		textarea.addEventListener('copy', function (e) {
		  e.preventDefault();

		  let lines = textarea.value.split('\n');
		  const result = [];

		  for (let i = 0; i < lines.length; i++) {
			let line = lines[i];
			const trimmed = line.trim();
			const prevLine = i > 0 ? lines[i - 1] : '';
			const prevTrimmed = prevLine.trim();

			// Rule 3.a: Delete line if it's only '> '
			if (/^\s*>\s*$/.test(line)) continue;

			// Rule 3: Remove leading '> ' unless exception
			const isFirstLine = i === 0;
			const isDashBlockquote = /^\s*-\s*> /.test(line);
			const blankAbove = prevTrimmed === '';

			if (!isFirstLine && !blankAbove && !isDashBlockquote && /^\s*> /.test(line)) {
			  const prevIndent = prevLine.match(/^\s*/)[0].length;
			  let addSpaces = 3;

			  if (/^\s*-\s*> /.test(prevLine)) addSpaces = 6;
			  else if (/^\s*- /.test(prevLine)) addSpaces = 3;
			  else if (/^\s*> /.test(prevLine)) addSpaces = 3;
			  else addSpaces = 3;

			  const totalIndent = ' '.repeat(prevIndent + addSpaces);
			  line = line.replace(/^\s*>\s?/, totalIndent);
			}

			// Rule 1: Remove markdown links (keep visible text only)
			while (/\[[^\]]+\]\([^\)]+\)/.test(line)) {
			  line = line.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '$1');
			}

			// Rule 2: Remove '#' unless followed by a number
			line = line.replace(/#(?!\d)\w+/g, match => match.startsWith('#') && !/^#\d/.test(match) ? match.slice(1) : match);

			// Rule 4: Remove all instances of '=='
			line = line.replace(/==/g, '');

			result.push(line);
		  }

		  e.clipboardData.setData('text/plain', result.join('\n'));
		});
	  }
	}
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
