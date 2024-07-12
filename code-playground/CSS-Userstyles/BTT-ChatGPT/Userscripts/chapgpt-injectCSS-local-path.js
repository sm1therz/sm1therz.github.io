
(async () => {
	// Path to your local CSS file
	const cssUrl = 'file:///Users/adman/Documents/GitHub/sm1therz.github.io/code-playground/BTT-ChatGPT/CSS/chatgpt-CSS.css';

	// Function to load the CSS file
	function loadExternalCSS(url) {
		return new Promise((resolve, reject) => {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = url;
			link.onload = resolve;
			link.onerror = reject;
			document.head.appendChild(link);
		});
	}

	// Load the external CSS
	try {
		await loadExternalCSS(cssUrl);
		console.log('Local CSS loaded successfully');
	} catch (error) {
		console.error('Failed to load local CSS', error);
	}
})();
