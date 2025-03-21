// ==UserScript==
// @name         Start.me - Textarea Height Fix for start.me
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Fix textarea heights on start.me
// @match        *://start.me/*
// @grant        none
// ==/UserScript==

(function() {
		'use strict';
		
		// Adjust textarea height based on content
		const adjustHeight = (textarea) => {
				textarea.style.height = 'auto'; // Reset height
				textarea.style.height = `${textarea.scrollHeight + 1}px`; // Set to content height with 1px buffer
		};

		const textareas = document.querySelectorAll('.todo-item__container textarea');
		textareas.forEach(textarea => {
				adjustHeight(textarea); // Initial adjustment
				textarea.addEventListener('input', () => adjustHeight(textarea)); // Adjust on input
		});

		// Mutation observer to catch dynamically added textareas
		const observer = new MutationObserver(() => {
				const newTextareas = document.querySelectorAll('.todo-item__container textarea');
				newTextareas.forEach(textarea => adjustHeight(textarea));
		});

		observer.observe(document.body, { childList: true, subtree: true });

		// Wait for the DOM to load
		document.addEventListener('DOMContentLoaded', () => {
				const textareasOnLoad = document.querySelectorAll('.todo-item__container textarea');
				textareasOnLoad.forEach(textarea => adjustHeight(textarea));
		});
})();
