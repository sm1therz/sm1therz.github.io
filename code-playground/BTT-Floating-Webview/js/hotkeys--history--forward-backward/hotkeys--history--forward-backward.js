// HISTORY > BACKWARD
document.addEventListener('keydown', function(event) {
		if (event.metaKey && event.code === 'BracketLeft') {
				event.preventDefault();
				event.stopPropagation();
				window.history.back();
		}
}, true);


// HISTORY > FORWARD
(async () => {
		// Add event listener to handle CMD + ]
		document.addEventListener('keydown', function(event) {
				// Check for CMD + ] (MetaKey is the Command key on macOS)
				if (event.metaKey && event.code === 'BracketRight') {
						// Prevent the default action and stop propagation to avoid the beep
						event.preventDefault();
						event.stopPropagation();

						// Execute window.history.forward()
						window.history.forward();
						
						// Log to the console for debugging
						console.log('CMD + ] detected, executed window.history.forward()');
				}
		}, true); // Use capture phase to ensure it catches all keydown events

		// Optional: Log to the console for debugging
		console.log('Script to intercept CMD + ] and navigate forward injected successfully');
})();