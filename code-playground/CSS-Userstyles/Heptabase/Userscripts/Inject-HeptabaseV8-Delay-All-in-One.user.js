// ==UserScript==
// @name         HEPTABASE V8 - ALL IN ONE - DELAY
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Injects V8 Individual Stylesheets into heptabase.com.
// @author       RSM
// @match        https://app.heptabase.com/*
// @grant        GM_addElement
// ==/UserScript==
(function() {
	'use strict';
	// Function to inject the CSS stylesheet into the <head> of the page
	function injectCSS(href) {
		// Create a link element for the stylesheet
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = href;
		// Append the link element to the <head>
		document.head.appendChild(link);
	}
	// Call injectCSS() to trigger the CSS injection with a one-second delay for the last script
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-1-editor-main.css');
	}, 1000);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-2-editor-colors.css');
	}, 1200);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-headings.css');
	}, 1600);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-headings-h5.css');
	}, 1700);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-tables.css');
	}, 1800);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-4-references.css');
	}, 2000);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-5-wrapper+padding.css');
	}, 2200);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-6-toggles.css');
	}, 2400);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-7-codeblock-markdown-syntax-highlighting.css');
	}, 2500);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-popup-1-context-menus.css');
	}, 2600);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-popup-2-quick-switcher.css');
	}, 2800);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/right-sidebar-1-thin.css');
	}, 3000);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/right-sidebar-2-toc.css');
	}, 3100);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-card-library.css');
	}, 3200);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-tags.css');
	}, 3400);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-1-Main.css');
	}, 3600);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-2-Sections-2.css');
	}, 3800);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-3-Text-Elements.css');
	}, 4000);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-3-Text-Tables-1.css');
	}, 4200);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-3-Text-Toggles.css');
	}, 4400);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-4-Card-Backgrounds.css');
	}, 4600);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-5-Left-Toolbar-Mini.css');
	}, 4700);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-4-Collapsed-Cards.css');
	}, 4800);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-4-Card-Toggles.css');
	}, 5200);
	
	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-5-Context-Menu.css');
	}, 5300);

	setTimeout(function() {
		injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-4-Card-Tables.css');
	}, 5400);

})();