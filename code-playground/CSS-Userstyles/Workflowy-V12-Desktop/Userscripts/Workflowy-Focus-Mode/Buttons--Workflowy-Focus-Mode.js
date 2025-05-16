// ==UserScript==
// @name         Workflowy > Focus Mode Toggle Buttons
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Adds button to toggle Focus Mode in Workflowy
// @match        https://workflowy.com/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// Define the CSS for button and container
	const buttonCSS = `
		#WfFocusWrapper {
			z-index: 9999;
			position: fixed;
			bottom: 38px;
			right: 10px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 3px;
		}
		#WfFocusOn {
			height: 18px;
			cursor: pointer;
			order: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0.5px 9px 0px;
			box-shadow: rgb(117, 117, 117) 0px 0px 0px 1px inset;
			border-radius: 3px;
			font-size: 12px;
			background: rgba(128, 128, 128, 0.8);
			color: white;
		}
	`;

	// Inject the button CSS into the head
	function injectButtonStyles() {
		const style = document.createElement('style');
		style.textContent = buttonCSS;
		document.head.appendChild(style);
	}

	// Create button for focus mode injection
	function createFocusButton() {
		const wrapper = document.createElement('div');
		wrapper.id = 'WfFocusWrapper';

		const onButton = document.createElement('button');
		onButton.id = 'WfFocusOn';
		onButton.textContent = 'Focus mode on';

		wrapper.appendChild(onButton);
		document.body.appendChild(wrapper);

		let injectedScript = null;

		// Add event listener for button
		onButton.addEventListener('click', () => {
			if (injectedScript) return;
			injectedScript = document.createElement('script');
			injectedScript.src = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Userscripts/Workflowy-Focus-Mode/Workflowy-Focus-Mode.js';
			injectedScript.setAttribute('id', 'WfFocusScript');
			document.head.appendChild(injectedScript);
			onButton.disabled = true;
		});
	}

	// Initialize functionality
	injectButtonStyles();
	createFocusButton();
})();
