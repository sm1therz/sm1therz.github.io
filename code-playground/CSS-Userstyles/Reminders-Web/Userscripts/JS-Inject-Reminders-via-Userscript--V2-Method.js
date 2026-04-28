// ==UserScript==
// @name         iCloud Reminders - Outline Everything (Shadow DOM)
// @namespace    https://github.com/yourname
// @version      1.0
// @description  Injects CSS that outlines every element, penetrating shadow DOM and bypassing CSP
// @author       You
// @match        https://www.icloud.com/reminders*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	// ============================================================
	// CONFIG — Put your CSS here
	// ============================================================
	const MY_CSS = `* { border: 1px solid red !important; }`;

	// ============================================================
	// Create ONE shared sheet — parsed once, reused everywhere.
	// This bypasses CSP because CSSStyleSheet objects are NOT
	// subject to style-src 'unsafe-inline' blocking.
	// ============================================================
	const sharedSheet = new CSSStyleSheet();
	sharedSheet.replaceSync(MY_CSS);

	// ============================================================
	// Inject into a single shadow root (or document)
	// ============================================================
	function inject(root) {
		if (root.adoptedStyleSheets) {
			// Modern path — works with strict CSP
			root.adoptedStyleSheets = [...root.adoptedStyleSheets, sharedSheet];
		} else {
			// Fallback for older browsers
			const style = document.createElement('style');
			style.textContent = MY_CSS;
			root.appendChild(style);
		}
	}

	// ============================================================
	// Inject into document (light DOM)
	// ============================================================
	document.adoptedStyleSheets = [...document.adoptedStyleSheets, sharedSheet];

	// ============================================================
	// Patch attachShadow() so every future shadow root gets our CSS
	// automatically — before the page even knows they exist.
	// ============================================================
	const origAttachShadow = Element.prototype.attachShadow;
	if (origAttachShadow) {
		Element.prototype.attachShadow = function(init) {
			const shadow = origAttachShadow.call(this, init);
			inject(shadow);
			return shadow;
		};
	}

	// ============================================================
	// Walk existing DOM for shadow roots already created
	// (in case our script missed any)
	// ============================================================
	function walk(root) {
		const all = root.querySelectorAll('*');
		for (let i = 0; i < all.length; i++) {
			if (all[i].shadowRoot) {
				inject(all[i].shadowRoot);
				walk(all[i].shadowRoot); // recurse into nested shadow roots
			}
		}
	}

	// ============================================================
	// Wait for the document to exist, then walk it
	// ============================================================
	function whenReady() {
		if (!document.documentElement) {
			setTimeout(whenReady, 0);
			return;
		}
		walk(document.documentElement);

		// Also catch late-loading elements via MutationObserver
		const observer = new MutationObserver(() => {
			walk(document.documentElement);
		});
		observer.observe(document.documentElement, {
			childList: true,
			subtree: true
		});
	}

	whenReady();
})();
