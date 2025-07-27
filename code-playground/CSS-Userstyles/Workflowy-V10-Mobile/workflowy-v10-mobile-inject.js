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
		injectCSS('https://dl.dropboxusercontent.com/scl/fi/27belqk9ycv8nh4rcvmxi/Workflowy-V10-BASE-STRIPPED.css?rlkey=c9pheq5k5h3p6zl4xrqxi32gv&raw=1');
	}, 1000);

	setTimeout(function() {
		injectCSS('https://dl.dropboxusercontent.com/scl/fi/y378vmvj0zr1nkdzikx25/Workflowy-V10-DARK.css?rlkey=8dpgazm8lr1g2h0f9o3yq2qtk&raw=1');
	}, 1500);

	setTimeout(function() {
		injectCSS('https://dl.dropboxusercontent.com/scl/fi/4hqu5psecgj9slkbn7uul/Workflowy-V10-Mobile-Overrides.css?rlkey=5uhy0uvw9z0koin1bn1mohwyl&raw=1');
	}, 2000);
})();