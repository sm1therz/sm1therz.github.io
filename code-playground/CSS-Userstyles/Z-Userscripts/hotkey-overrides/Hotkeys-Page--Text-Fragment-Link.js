// CREATE AND COPY TEXT FRAGMENT LINK
document.addEventListener('keydown', function(event) {
	if (event.metaKey && event.shiftKey && event.code === 'KeyC') {
		event.preventDefault();
		event.stopPropagation();

		const selection = window.getSelection().toString();
		if (selection) {
			const encodedText = encodeURIComponent(selection);
			const url = `${window.location.href}#:~:text=${encodedText}`;

			navigator.clipboard.writeText(url).then(function() {
				console.log('Text fragment link copied to clipboard');
			}).catch(function(err) {
				console.error('Failed to copy text fragment link', err);
			});
		}
	}
}, true);