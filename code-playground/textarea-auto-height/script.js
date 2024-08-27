// ==UserScript==
// @name         Chatkit - Textarea Auto height
// @namespace    http://yournamespace.com
// @version      1.0
// @author       RSM
// @match        https://chatkit.app/*
// @grant        none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function() {
	const textareas = document.querySelectorAll('footer textarea'); // Select only textareas inside footer

	textareas.forEach(textarea => {
		textarea.style.height = '44px'; // Set the initial height to 44px
		textarea.style.border = '10px solid blue';
		textarea.style.overflow = 'hidden'; // Prevent scrollbars initially
		textarea.style.resize = 'none'; // Prevent manual resizing if needed

		textarea.addEventListener('input', function() {
			this.style.height = 'auto'; // Reset height to auto
			this.style.height = this.scrollHeight + 'px'; // Set height to scrollHeight
		});

		// Trigger the input event on page load to adjust height if content overflows
		textarea.dispatchEvent(new Event('input'));
	});
});
