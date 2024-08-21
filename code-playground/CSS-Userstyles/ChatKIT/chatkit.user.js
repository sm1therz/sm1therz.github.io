// ==UserScript==
// @name         CHATKIT INJECT EXTERNAL
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Injects CSS
// @author       RSM
// @match        https://chatkit.app/*
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
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/ChatKIT/chatkit.css');
	}, 1000);
})();