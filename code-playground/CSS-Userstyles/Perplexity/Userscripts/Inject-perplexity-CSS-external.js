// ==UserScript==
// @name         PERPLEXITY INJECT - INLINE
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Injects Perplexity css
// @author       RSM
// @match        https://perplexity.ai*
// @grant        GM_addElement
// ==/UserScript==

(function() {
	'use strict';
	// Function to inject the CSS stylesheet into the <head> of the page
	function injectCSS(href) {
		// Create a link element for the stylesheet
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = href;
		// Append the link element to the <head>
		document.head.appendChild(link);
	}

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Perplexity/css/Perplexity-CSS.css');
	}, 3500);
})();