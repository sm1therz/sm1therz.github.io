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
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/2--Workflowyy12--Dark-theme.css');
	}, 1000);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/1--Workflowyy12--Base.css');
	}, 1500);
	
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/3--Workflowyy12--IBM.css');
	}, 2000);
	

	//INJECT INDIVIDUAL - 6-BOARDS
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-4-Board-Root-Colors');
	}, 2500);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-4-Board-Root-Header-Columns.css');
	}, 2500);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-6-Boards-In-Comments.css');
	}, 2500);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-7-Comment-Colors.css');
	}, 3100);
	//INJECT INDIVIDUAL - DASHBOARD
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-5-Dashboard-Width.css');
	}, 3200);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-9-Dashboard-Colors.css');
	}, 3300);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-8-Dashboard-Paragraph-Hide-Expand.css');
	}, 3400);
	//INJECT INDIVIDUAL - Misc
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-12-Note-Line-Clamp.css');
	}, 3800);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-15-Floatbrowser-overrides.css');
	}, 3900);
})();

