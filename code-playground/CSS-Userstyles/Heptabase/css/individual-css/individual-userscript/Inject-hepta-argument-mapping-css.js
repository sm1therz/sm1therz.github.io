// ==UserScript==
// @name         Heptabase - Argument Mapping Css
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Injects Heptabase Argument Mapping CSS
// @author       RSM
// @match        https://app.heptabase.com/*
// @match        https://app.heptabase.com*
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
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/argument-mapping.css');
	}, 3500);

})();
