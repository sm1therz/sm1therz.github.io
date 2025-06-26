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
	}, 3000);
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/1--Workflowyy12--Base.css');
	}, 4000);
	
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/3--Workflowyy12--IBM.css');
	}, 5000);
})();

