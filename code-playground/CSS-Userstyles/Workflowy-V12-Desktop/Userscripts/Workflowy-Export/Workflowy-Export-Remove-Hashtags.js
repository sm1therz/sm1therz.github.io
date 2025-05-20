// ==UserScript==
// @name         Workflowy > Export > Remove Hashtags
// @namespace    https://workflowy.com/
// @version      0.2
// @description  Strip all '#' characters from exported Markdown when copying from Workflowy export dialog
// @match        https://workflowy.com/*
// @grant        none
// ==/UserScript==
(function () {
	'use strict';
	// Observe for the export dialog box to appear
	const observer = new MutationObserver(() => {
		const dialog = document.querySelector('.dialog-backdrop');
		if (dialog && !dialog._hasCopyListener) {
			const textarea = dialog.querySelector('textarea._p3dqzq');
			if (textarea) {
				dialog._hasCopyListener = true;
				textarea.addEventListener('copy', function (e) {
					e.preventDefault();
					const filtered = textarea.value.replace(/#/g, '');
					e.clipboardData.setData('text/plain', filtered);
				});
			}
		}
	});
	observer.observe(document.body, { childList: true, subtree: true });
})();