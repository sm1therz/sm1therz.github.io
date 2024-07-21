// ==UserScript==
// @name         WORKFLOWYY-V12-Dark-Desktop
// @namespace    http://yournamespace.com
// @version      1.0
// @description  USES OLD DROPBOX FILES
// @author       RSM
// @match        https://workflowy.com*
// @grant        GM_addElement
// ==/UserScript==


// NOTE! - BELOW USES OLD DROPBOX FILES
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
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/mobile/1--Workflowyy12--Base-Stripped.css');
	}, 2000);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/mobile/2--Workflowyy12--Dark.css');
	}, 3000);
	
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/mobile/3--Workflowyy12--Mobile-Overrides.css');
	}, 4000);

})();

