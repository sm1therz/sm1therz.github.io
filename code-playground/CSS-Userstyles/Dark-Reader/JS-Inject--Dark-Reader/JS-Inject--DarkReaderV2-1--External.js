(function() {
	'use strict';

	// Function to inject the JavaScript script into the <head> of the page
	function injectScript() {
		// Create a script element
		var script = document.createElement('script');
		script.type = 'text/javascript';
		// Put JavaScript link below
		script.src = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Dark-Reader/JS-Inject--Dark-Reader/JS-Inject--DarkReaderV2-1--External.js';

		// Append the script element to the <head>
		document.head.appendChild(script);
	}

	// Call injectScript() to trigger the script injection
	injectScript();
})();