document.addEventListener('keydown', function(event) {
		if (event.metaKey && event.code === 'BracketLeft') {
				event.preventDefault();
				event.stopPropagation();
				window.history.back();
		}
}, true);
