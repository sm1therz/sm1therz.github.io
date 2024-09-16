(function() {
		'use strict';
		
		// Check if the current domain is "workflowy.com"
		if (window.location.hostname === 'workflowy.com') {

				// Function to inject the CSS stylesheet into the <head> of the page
				function injectCSS(href) {
						var link = document.createElement('link');
						link.rel = 'stylesheet';
						link.type = 'text/css';
						link.href = href;
						document.head.appendChild(link);
				}

				// Call injectCSS() to trigger the CSS injection with a delay
				setTimeout(function() {
						injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/1--Workflowyy12--Base.css');
				}, 2000);
				
				setTimeout(function() {
						injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/2--Workflowyy12--Dark-theme.css');
				}, 2500);
				
				setTimeout(function() {
						injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/3--Workflowyy12--IBM.css');
				}, 3500);

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
		}
})();
