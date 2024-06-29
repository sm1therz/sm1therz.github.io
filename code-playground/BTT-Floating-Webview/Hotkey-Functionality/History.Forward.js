document.addEventListener('keydown', function(event) {
		if (event.metaKey && event.code === 'BracketRight') {
				event.preventDefault();
				event.stopPropagation();
				window.history.forward();
		}
}, true);
