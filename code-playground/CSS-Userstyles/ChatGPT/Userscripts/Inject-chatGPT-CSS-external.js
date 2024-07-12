// ==UserScript==
// @name         CHATGPT INJECT EXTERNAL
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Injects Chatgpt css hosted on github into chatgpt webpages
// @author       RSM
// @match        https://chatgpt.com/*
// @match        https://chatgpt.com*
// @match        https://chat.openai.com/*
// @match        https://chat.openai.com*
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
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/ChatGPT/css/chatGptV1-CSS.css');
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














