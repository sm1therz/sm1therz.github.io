// ==UserScript==
// @name         Copy Selected Text As Markdown > V1.3
// @namespace    https://example.com
// @version      1.3.0
// @description  Copies selected text as Markdown via fixed popup

// @match        *://*/*
// @match        *://*/*
// @grant        GM_setClipboard
// @require      https://unpkg.com/turndown@7.1.2/dist/turndown.js
// ==/UserScript==

(function () {
	'use strict';

	/* ---------- Editable CSS ---------- */
	const style = `
		#mdCopyPopup {
			position: fixed;
			bottom: 50vh;
			right: 20px;
			z-index: 999999;
			background: #333;
			color: #fff;
			font-size: 12px;
			padding: 6px 10px;
			border-radius: 4px;
			cursor: pointer;
			user-select: none;
			box-shadow: 0 2px 6px rgba(0,0,0,.3);
			display: none;
		}
		#mdCopyPopup:hover {
			background:#000;
		}
	`;
	/* ---------------------------------- */

	const td = new TurndownService({
		headingStyle: 'atx',
		codeBlockStyle: 'fenced',
		bulletListMarker: '-'          // use "-" for unordered lists
	});

	/** Remove blank lines *between* list items and ensure bullet spacing */
	function tidyLists(markdown) {
		const lines = markdown.split('\n');
		const out   = [];
		let inList  = false;

		for (let i = 0; i < lines.length; i++) {
			let l = lines[i];

			// normalise bullet marker spacing: "- **item" (exactly one space)
			l = l.replace(/^(\s*-\s)\s+/, '$1')            // unordered
					 .replace(/^(\s*\d+\.\s)\s+/, '$1');       // ordered

			const isListItem = /^(\s*(- |\d+\.)).+/.test(l);

			if (isListItem) {
				if (!inList && out.length && out[out.length - 1].trim() !== '') {
					out.push(''); // blank line before a new list
				}
				inList = true;
				// swap stray "* " with "- "
				l = l.replace(/^(\s*)\*\s/, '$1- ');
				out.push(l);
			} else if (l.trim() === '') {
				if (inList) {
					const next = lines[i + 1];
					if (next && !/^(\s*(- |\d+\.)).+/.test(next)) {
						out.push(''); // blank line after list end
						inList = false;
					}
				} else {
					out.push('');
				}
			} else {
				inList = false;
				out.push(l);
			}
		}
		return out.join('\n');
	}

	const popup = document.createElement('div');
	popup.id = 'mdCopyPopup';
	popup.textContent = 'Copy MD';
	document.body.appendChild(popup);

	const styleTag = document.createElement('style');
	styleTag.textContent = style;
	document.head.appendChild(styleTag);

	function copySelection() {
		const sel = window.getSelection();
		if (!sel || sel.isCollapsed) return;

		const holder = document.createElement('div');
		for (let i = 0; i < sel.rangeCount; i++) {
			holder.appendChild(sel.getRangeAt(i).cloneContents());
		}

		// Remove sticky elements inside <pre>
		holder.querySelectorAll('pre .sticky').forEach(el => el.remove());

		let md = td.turndown(holder.innerHTML);
		md = tidyLists(md);

		if (typeof GM_setClipboard === 'function') {
			GM_setClipboard(md, { type: 'text', mimetype: 'text/plain' });
		} else if (navigator.clipboard?.writeText) {
			navigator.clipboard.writeText(md);
		}
		hidePopup();
	}

	function showPopup() {
		popup.style.display = 'block';
	}

	function hidePopup() {
		popup.style.display = 'none';
	}

	document.addEventListener('selectionchange', () => {
		const sel = window.getSelection();
		if (sel && !sel.isCollapsed) {
			showPopup();
		} else {
			hidePopup();
		}
	});

	popup.addEventListener('click', copySelection);
})();
