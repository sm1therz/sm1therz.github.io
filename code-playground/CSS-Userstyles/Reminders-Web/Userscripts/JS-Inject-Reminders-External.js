(function() {
	let style = `<style>
	* {
		border: 10px solid red !important;
	}
	.rm-list .reminder-item .notes {
		max-height: 20rem !important;
	}
	.rm-list .reminder-item .notes .tt-input-field {
		-webkit-line-clamp: 20 !important;
	}
</style>`;
	document.head.insertAdjacentHTML("beforeend", style);
})();


// ==UserScript==
// @name         REMINDERS WEB
// @namespace    http://yournamespace.com
// @version      1.0
// @author       RSM
// @match        https://*
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
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Reminders-Web/reminders-web--inline--user.js');
	}, 05);

})();