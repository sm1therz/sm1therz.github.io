// ==UserScript==
// @name         HEPTABASE V8 - DELAY
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Injects V8 into heptabase.com.
// @author       RSM
// @match        https://app.heptabase.com/*
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
	// Call injectCSS() to trigger the CSS injection with a one-second delay for the last script
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/HeptabaseV8.css');
	}, 3000);

})();
