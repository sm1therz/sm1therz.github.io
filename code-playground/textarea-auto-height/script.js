document.addEventListener('DOMContentLoaded', function() {
	const textareas = document.querySelectorAll('footer textarea'); // Select only textareas inside footer
	
	textareas.forEach(textarea => {
		textarea.style.overflow = 'hidden'; // Prevent scrollbars initially
		textarea.style.resize = 'none'; // Prevent manual resizing if needed

		textarea.addEventListener('input', function() {
			this.style.height = 'auto'; // Reset height to auto
			this.style.height = this.scrollHeight + 'px'; // Set height to scrollHeight
		});

		// Trigger the input event on page load to set the initial height
		textarea.dispatchEvent(new Event('input'));
	});
});
