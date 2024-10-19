// RESET ZOOM
document.addEventListener('keydown', function(event) {
	if (event.metaKey && event.code === 'Digit0') {
		event.preventDefault();
		event.stopPropagation();
		document.body.style.zoom = '1';
	}
}, true);