// ==UserScript==
// @name         Textarea Style Fix for start.me
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Fix textarea heights and increase font size on start.me
// @match        *://start.me/*
// @grant        none
// ==/UserScript==

(function() {
		'use strict';

		// Function to apply styles
		function applyStyles() {
				const style = document.createElement('style');
				style.textContent = `
						.todo-widget textarea {
								font-size: 14.5px !important; /* Adjust font size as needed */
								line-height:100px !important; /* Prevent manual resizing */
								resize: none; /* Prevent manual resizing */
								overflow: hidden; /* Prevent scrollbar */
						}
				`;
				document.head.appendChild(style);
				
				// Adjust textarea height based on content
				const adjustHeight = (textarea) => {
						textarea.style.height = 'auto'; // Reset height
						textarea.style.height = `${textarea.scrollHeight}px`; // Set to content height
				};

				const textareas = document.querySelectorAll('.todo-widget textarea');
				textareas.forEach(textarea => {
						adjustHeight(textarea); // Initial adjustment
						textarea.addEventListener('input', () => adjustHeight(textarea)); // Adjust on input
				});
		}

		// Mutation observer to catch dynamically added textareas
		const observer = new MutationObserver(applyStyles);
		observer.observe(document.body, { childList: true, subtree: true });

		// Wait for the DOM to load
		document.addEventListener('DOMContentLoaded', applyStyles);
})();
