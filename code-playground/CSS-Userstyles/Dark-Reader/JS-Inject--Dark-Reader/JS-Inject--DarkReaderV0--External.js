(function() {
	'use strict';

	// Function to inject the JavaScript script into the <head> of the page
	function injectScript() {
		// Create a script element
		var script = document.createElement('script');
		script.type = 'text/javascript';
		// Put JavaScript link below
		script.src = 'https://dl.dropboxusercontent.com/scl/fi/y1s91k8w7gnf943glfx4c/DarkReader.js?rlkey=c3ht7hh2hq67djxal8d6owpwe&raw=1';

		// Append the script element to the <head>
		document.head.appendChild(script);
	}

	// Call injectScript() to trigger the script injection
	injectScript();
})();