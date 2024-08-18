// ==UserScript==
// @name         WorkflowyyV12-Dark-Desktop
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Injects V12 into workflowy.
// @author       RSM
// @match        https://workflowy.com*
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
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/1--Workflowyy12--Base.css');
	}, 2000);
	
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/2--Workflowyy12--Dark-theme.css');
	}, 2500);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/3--Workflowyy12--IBM.css');
	}, 3500);

})();


(function() {
	'use strict';
	// FUNCTION INJECTS FONTS into head OF PAGE
	function addLinkElement(href, rel, type, crossorigin) {
		var link = document.createElement('link');
		link.href = href;
		link.rel = rel;
		if (type) {
			link.type = type;
		}
		if (crossorigin) {
			link.crossOrigin = crossorigin;
		}
		document.head.appendChild(link);
	}
	// Add preconnect links
	addLinkElement('https://fonts.googleapis.com', 'preconnect');
	addLinkElement('https://fonts.gstatic.com', 'preconnect', null, 'anonymous');
	// Add stylesheet link
	addLinkElement('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap', 'stylesheet');
})();

