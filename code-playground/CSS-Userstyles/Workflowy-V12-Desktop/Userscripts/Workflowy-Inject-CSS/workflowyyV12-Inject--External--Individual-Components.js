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
	
	//Inject - 4-BOARD-ROOT-HEADER-COLUMNS.CSS
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-4-Board-Root-Colors');
	}, 2500);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-4-Board-Root-Header-Columns.css');
	}, 2500);
	//Inject - 6-BOARDS-IN-COMMENTS.CSS
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-6-Boards-In-Comments.css');
	}, 2500);
	//Inject - 7-COMMENT-BRD-CLR.CSS
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-7-Comment-Colors.css');
	}, 3100);
	//Inject - 5-DASHBOARD-WIDTH.CSS
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-5-Dashboard-Width.css');
	}, 3200);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-9-Dashboard-Colors.css');
	}, 3300);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-8-Dashboard-Paragraph-Hide-Expand.css');
	}, 3400);
	//Inject - Misc
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-12-Note-Line-Clamp.css');
	}, 3800);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-15-Floatbrowser-overrides.css');
	}, 3900);
})();




