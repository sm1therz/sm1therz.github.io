// ==UserScript==
// @name         Workflowy Custom CSS
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Injects custom CSS into Workflowy.com
// @author       Your Name
// @match        https://workflowy.com/*
// @grant        none
// ==/UserScript==

(function() {
		'use strict';

		// Function to inject the CSS stylesheet into the <head> of the page
		function injectCSS() {
				// Create a link element for the stylesheet
				var link = document.createElement('link');
				link.rel = 'stylesheet';
				link.type = 'text/css';
				link.href = 'https://dl.dropboxusercontent.com/scl/fi/bqt5xbscdn8t1qcgwmrhp/Workflowy-V10-BASE-COMBINED-LIGHT.css?rlkey=jswm4p5aula1e1ovh9y829pfv&raw=1';

				// Append the link element to the <head>
				document.head.appendChild(link);
		}

		// Call injectCSS() to trigger the CSS injection
		injectCSS();
})();
