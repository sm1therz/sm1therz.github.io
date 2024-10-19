// ZOOM IN AND ZOOM OUT
document.addEventListener('keydown', function(event) {
	if (event.metaKey && event.code === 'Equal') {
		event.preventDefault();
		event.stopPropagation();
		document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) + 0.1).toString();
	} else if (event.metaKey && event.code === 'Minus') {
		event.preventDefault();
		event.stopPropagation();
		document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) - 0.1).toString();
	}
}, true);