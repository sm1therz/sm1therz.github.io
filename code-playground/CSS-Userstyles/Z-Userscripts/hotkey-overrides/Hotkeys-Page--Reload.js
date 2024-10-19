// REFRESH PAGE
document.addEventListener('keydown', function(event) {
	if (event.metaKey && event.code === 'KeyR') {
		event.preventDefault();
		event.stopPropagation();
		location.reload();
	}
}, true);