// ==UserScript==
// @name         Workflowy > Line Break Hotkey
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Insert a preserved line break in Workflowy by pressing Command+Option+Return (⌘+⌥+⏎)
// @match        https://workflowy.com/*
// @grant        none
// ==/UserScript==
(function () {
	'use strict';
	document.addEventListener('keydown', function (e) {
		const isMac = navigator.platform.toUpperCase()
			.indexOf('MAC') >= 0;
		const isTrigger = isMac ? (e.metaKey && e.altKey && e.key === 'Enter') : (e.ctrlKey && e.altKey && e.key === 'Enter');
		if (!isTrigger) return;
		const activeEl = document.activeElement;
		if (!activeEl) return;
		const isTextArea = activeEl.tagName === 'TEXTAREA';
		const isContentEditable = activeEl.getAttribute('contenteditable') === 'true';
		if (!isTextArea && !isContentEditable) return;
		e.preventDefault();
		e.stopPropagation();
		if (isTextArea) {
			const cursorPos = activeEl.selectionStart;
			const textBefore = activeEl.value.substring(0, cursorPos);
			const textAfter = activeEl.value.substring(cursorPos);
			activeEl.value = textBefore + '\n' + textAfter;
			activeEl.selectionStart = activeEl.selectionEnd = cursorPos + 1;
		} else {
			const selection = window.getSelection();
			if (!selection.rangeCount) return;
			const range = selection.getRangeAt(0);
			const node = range.startContainer;
			const offset = range.startOffset;
			let fullText = node.textContent;
			if (fullText == null) return;
			const updatedText = fullText.slice(0, offset) + '\n' + fullText.slice(offset);
			node.textContent = updatedText;
			const newRange = document.createRange();
			const sel = window.getSelection();
			newRange.setStart(node, offset + 1);
			newRange.setEnd(node, offset + 1);
			sel.removeAllRanges();
			sel.addRange(newRange);
		}
	});
})();