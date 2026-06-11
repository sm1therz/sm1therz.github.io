// ==UserScript==
// @name         Workflowy Export > All Functions
// @namespace    https://workflowy.com/
// @version      1.0
// @description  Combines note merging, punctuation fixes, hashtag and link stripping, blank line trimming
// @match        https://workflowy.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const observer = new MutationObserver(() => {
	const dialog = document.querySelector('.dialog-backdrop');
	if (dialog && !dialog._hasCombinedCopyListener) {
	  const textarea = dialog.querySelector('textarea._p3dqzq');
	  if (textarea) {
		dialog._hasCombinedCopyListener = true;

		textarea.addEventListener('copy', function(e) {
		  e.preventDefault();
		  let lines = textarea.value.split('\n');
		  const result = [];

		  // Phase 1: merge notes into prior lines
		  for (let i = 0; i < lines.length; i++) {
			let current = lines[i];
			const trimmed = current.trim();

			if (/^\s*-\s*> /.test(current)) {
			  result.push(current); // Leave "- > " lines untouched

			} else if (/^\s*>\s*$/.test(current)) {
			  result.push(''); // preserve blank line

			} else if (/^\s*> /.test(current)) {
			  const content = current.replace(/^\s*>\s?/, '').trim();
			  if (result.length > 0) {
				let last = result[result.length - 1];
				const needsPeriod = !/[.,;:]\s$/.test(last);
				const hasNoSpaceAfterPunct = /[.,;:]\S$/.test(last);
				if (needsPeriod && !/[.,;:]$/.test(last)) last += '.';
				else if (hasNoSpaceAfterPunct) last += ' ';

				const contentNeedsPeriod = !/[.,;:]$/.test(content);
				result[result.length - 1] = last + ' ' + content + (contentNeedsPeriod ? '.' : '');
			  } else {
				const contentNeedsPeriod = !/[.,;:]$/.test(content);
				result.push(content + (contentNeedsPeriod ? '.' : ''));
			  }

			} else {
			  result.push(current);
			}
		  }

		  // Phase 2: strip hashtags and markdown links
		  const cleaned = result.map(line => {
			line = line.replace(/#/g, '');
			while (/\[[^\]]+\]\([^\)]+\)/.test(line)) {
			  line = line.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '$1');
			}
			return line;
		  });

		  // Phase 3: remove duplicate blank lines and trailing blanks
		  const compacted = [];
		  for (let i = 0; i < cleaned.length; i++) {
			if (cleaned[i].trim() === '' && cleaned[i - 1]?.trim() === '') continue;
			compacted.push(cleaned[i]);
		  }
		  while (compacted.length > 0 && compacted[compacted.length - 1].trim() === '') {
			compacted.pop();
		  }

		  e.clipboardData.setData('text/plain', compacted.join('\n'));
		});
	  }
	}
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
