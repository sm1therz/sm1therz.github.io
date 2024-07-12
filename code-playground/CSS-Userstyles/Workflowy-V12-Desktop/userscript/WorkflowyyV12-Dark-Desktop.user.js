// ==UserScript==
// @name         WORKFLOWYY-V12-Dark-Desktop
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Injects V12 into workflowy.
// @author       RSM
// @match        https://workflowy.com/*
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
		injectCSS('https://dl.dropboxusercontent.com/scl/fi/5xz8dtaf495nzlnfn6kv6/1-Workflowyy12-Base.css?rlkey=e77abbm6z9csuaulayc6itlfv&raw=1');
	}, 2000);
	
	setTimeout(function() {
		injectCSS('https://dl.dropboxusercontent.com/scl/fi/d2fotdf6hjygsws68esbc/2-Workflowyy12-Dark-theme.css?rlkey=emxlwul5sg8abrimrm8puwx49&raw=1');
	}, 2500);
	setTimeout(function() {
		injectCSS('https://dl.dropboxusercontent.com/scl/fi/n6i9uustotvkjs83utqm5/3-Workflowyy12-IBM.css?rlkey=qyeazxt9rkpgnd1xd34qrxrmw&raw=1');
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