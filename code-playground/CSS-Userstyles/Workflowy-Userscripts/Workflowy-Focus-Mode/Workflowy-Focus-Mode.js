// ==UserScript==
// @name         Workflowy > Focus Mode
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Highlight the active and sibling children blocks based on cursor focus in Workflowy
// @match        https://workflowy.com/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// Inject custom styles
	function injectStyles(cssText) {
		const style = document.createElement('style');
		style.setAttribute('id', 'workflowy-focus-style');
		style.textContent = cssText;
		document.head.appendChild(style);
	}

	// Sample default style content - replace or extend this as needed
	injectStyles(`
	/*
		.childActive {
			background-color: rgba(255, 255, 0, 0.2);
		}
		.childActiveSibling {
			background-color: rgba(0, 255, 255, 0.1);
		}
		*/

		#app  .children > .project > .name,
		#app  .children > .project > .notes{
			transition:.15s !important
		}
		/*LEVEL 1*/
		#app .root > .name > .content,
		#app .root > .notes > .content,
		#app .root > .children > .project > .name,
		#app .root > .children > .project > .notes{
			opacity: 0.15;
		}
		/*LEVEL 2*/
		#app .root > .children > .project > .children > .project > .name,
		#app .root > .children > .project > .children > .project > .notes{
			opacity: 0.125
		}
		/*LEVEL 3*/
		#app .root > .children > .project > .children > .project > .children > .project > .name,
		#app .root > .children > .project > .children > .project > .children > .project > .notes{
			opacity: 0.1;
		}
		/*LEVEL 4*/
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .name,
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .notes{
			opacity: 0.075;
		}
		/*LEVEL 5*/
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .name,
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .notes{
			opacity: 0.029;
		}
		/*LEVEL 6*/
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .name,
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .notes{
			opacity: 0.02;
		}
		/*LEVEL 6 + */
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project .children .project .name,
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project .children .project .notes{
			opacity: 0.014;
		}

		/********
		ACTIVE
		*********/
		#app .root > .name:focus-within > .content,
		#app .root > .name:focus-within ~ .notes > .content,
		#app .root > .notes:focus-within > .content,
		#app .children.childActiveSibling > .project > .name,
		#app .children.childActiveSibling > .project > .notes,
		#app .children.childActive > .project > .name,
		#app .children.childActive > .project > .notes{
			opacity: 1 !important;
		}
		/********
		1 LEVEL > BELOW > ACTIVE
		*********/
		#app .children.childActiveSibling > .project > .children > .project > .name,
		#app .children.childActiveSibling > .project > .children > .project > .notes,
		#app .children.childActive > .project > .children > .project > .name,
		#app .children.childActive > .project > .children > .project > .notes {
			opacity: .15 !important;
		}
		/********
		2 LEVEL > BELOW > ACTIVE
		*********/
		#app .root .children.childActiveSibling > .project > .children > .project > .children > .project > .name,
		#app .root .children.childActiveSibling > .project > .children > .project  > .children > .project> .notes,
		#app .root .children.childActive > .project > .children > .project > .children > .project > .name,
		#app .root .children.childActive > .project > .children > .project > .children > .project > .notes {
			opacity: .05 !important;
		}
		/********
		3 LEVEL > BELOW > ACTIVE
		*********/
		#app .root .children.childActiveSibling > .project > .children > .project > .children > .project > .children > .project > .name,
		#app .root .children.childActiveSibling > .project > .children > .project  > .children > .project > .children > .project > .notes,
		#app .root .children.childActive > .project > .children > .project > .children > .project > .children > .project > .name,
		#app .root .children.childActive > .project > .children > .project > .children > .project > .children > .project > .notes {
			opacity: .015;
		}
		
		/********
		BOARD OVERRIDE
		*********/
		#app .root .project.board > .children > .project.boardColumn > .name,
		#app .root .project.board > .children > .project.boardColumn > .notes,
		#app .page .root .project.board  .children > .project .children .project > .name,
		#app .page .root .project.board  .children > .project .children .project > .notes,
		#app .page .root .project.board > .children .project .children .project > .name,
		#app .page .root .project.board > .children .project .children .project > .notes,
		/*root*/
		#app .page .root.board > .name > .content,
		#app .page .root.board > .notes > .content,
		#app .root.board > .children > .project > .name,
		#app .root.board > .children > .project > .notes,
		#app .page .root.project.board  .children > .project .children .project > .name,
		#app .page .root.project.board  .children > .project .children .project > .notes,
		#app .page .root.project.board > .children .project .children .project > .name,
		#app .page .root.project.board > .children .project .children .project > .notes,
		#app .page .root.project.board  * .children * .name,
		#app .page .project.board > .children * .name {
		opacity:1 !important;
		}
		#app .root .board .children.childActiveSibling > .project > .children > .project > .children > .project > .children > .project > .name,
		#app .root .board .children.childActiveSibling > .project > .children > .project > .children > .project > .children > .project > .notes,
		app .root .children.childActive > .project.board > .children > .project > .children > .project > .children > .project > .name,
		app .root .children.childActive > .project.board > .children > .project > .children > .project > .children > .project > .name,
		#app .root > .children.childActive > .project.board > .children > .project > .children > .project > .children > .project > .name,
		#app .root > .children.childActive > .project.board > .children > .project > .children > .project > .children > .project > .notes,
		#app .root > .children.childActive > .project.board > .children > .project > .children > .project > .children > .project > .children > .project > .name,
		#app .root > .children.childActive > .project.board > .children > .project > .children > .project > .children > .project > .children > .project > .notes,
		#app .page .root > .children.childActive > .project.board  .children > .project > .name,
		#app .page .root > .children.childActive > .project.board  .children > .project > .notes{
		opacity:1 !important;
		border:3px silid red;
		}
		/********
		FLOATING COMMENTS OVERRIDE
		*********/
		html #app .pageContainer ~ .floating-comments-container .root .children > .project > .name,
		html #app .pageContainer ~ .floating-comments-container .root .children > .project > .notes,
		html #app .pageContainer ~ .floating-comments-container .root .children.childActive > .project > .name,
		html #app .pageContainer ~ .floating-comments-container .root .children.childActive > .project > .notes,
		html #app .pageContainer ~ .floating-comments-container .root .children.childActiveSibling > .project > .name,
		html #app .pageContainer ~ .floating-comments-container .root .children.childActiveSibling > .project > .notes,
		/***/
		html #app .pageContainer ~ .floating-comments-container .root .children.childActive > .project > .children > .project > .name,
		html #app .pageContainer ~ .floating-comments-container .root .children.childActive > .project > .children > .project > .notes,
		html #app .pageContainer ~ .floating-comments-container .root .children.childActiveSibling > .project > .children > .project > .name,
		html #app .pageContainer ~ .floating-comments-container .root .children.childActiveSibling > .project > .children > .project > .notes,
		/***/
		html #app .pageContainer ~ .floating-comments-container .root .children.childActive > .project > .children > .project > .children > .project > .name,
		html #app .pageContainer ~ .floating-comments-container .root .children.childActive > .project > .children > .project > .children > .project > .notes,
		html #app .pageContainer ~ .floating-comments-container .root .children.childActiveSibling > .project > .children > .project > .children > .project > .name,
		html #app .pageContainer ~ .floating-comments-container .root .children.childActiveSibling > .project > .children > .project > .children > .project > .notes,
		/***/
		html #app .pageContainer ~ .floating-comments-container .root .children.childActive > .project > .children > .project > .children > .project > .children > .project > .name,
		html #app .pageContainer ~ .floating-comments-container .root .children.childActive > .project > .children > .project > .children > .project > .children > .project > .notes,
		html #app .pageContainer ~ .floating-comments-container .root .children.childActiveSibling > .project > .children > .project > .children > .project > .children > .project > .name,
		html #app .pageContainer ~ .floating-comments-container .root .children.childActiveSibling > .project > .children > .project > .children > .project > .children > .project > .notes {
		opacity:1 !important;
		}
		/********
		FLOATING COMMENTS > IN EDITOR > OVERRIDE
		*********/
		html.floating-comments-blurred #app .page .root > .children .project.floating-conversations > .name,
		html:not(.floating-comments-blurred) #app .page .root > .children .project.floating-conversations > .notes,
		html:not(.floating-comments-blurred) #app .page .root > .children > .project > .children > .project > .children > .project.floating-conversations > .name,
		html:not(.floating-comments-blurred) #app .page .root > .children > .project > .children > .project > .children > .project.floating-conversations > .notes {
		opacity:1 !important;
		}
		/********
		FLAT SEARCH OVERRIDE
		*********/
		#app > .pageContainer > .searching * .name,
		#app > .pageContainer > .searching * .name,
		#app .page.searching .root.project > .name > .content,
		#app .page.searching .root.project > .notes > .content,
		/****/
		#app .page.searching .root > .children > .project > .name,
		#app .page.searching .root > .children > .project > .notes,
		#app .page.searching .root.project > .children .project .children .project > .name,
		#app .page.searching .root.project > .children .project .children .project > .notes,
		/****/
		#app .page.searching .children.childActive > .project > .children > .project > .name,
		#app .page.searching .children.childActive > .project > .children > .project > .notes,
		#app .page.searching .root .children.childActive > .project > .children > .project > .children > .project > .name,
		#app .page.searching .root .children.childActive > .project > .children > .project > .children > .project > .notes{
		opacity: 1 !important;
		}
		

	`);

	function clearAllHighlights() {
		document.querySelectorAll('.childActive, .childActiveSibling').forEach((el) => {
			el.classList.remove('childActive', 'childActiveSibling');
		});
	}

	function getNearestChildrenElement(el) {
		while (el && el !== document.body) {
			if (el.classList.contains('children')) return el;
			el = el.parentElement;
		}
		return null;
	}

	function getIndentationLevel(el) {
		let level = 0;
		while (el && el !== document.body) {
			if (el.classList.contains('children')) level++;
			el = el.parentElement;
		}
		return level;
	}

	function getSiblingsAtSameLevel(targetChildrenEl) {
		const root = targetChildrenEl.closest('.page')?.querySelector('.project.root');
		if (!root) return [];

		const targetLevel = getIndentationLevel(targetChildrenEl);

		return Array.from(root.querySelectorAll('.children')).filter((el) => {
			return el !== targetChildrenEl && getIndentationLevel(el) === targetLevel;
		});
	}

	document.addEventListener('focusin', (e) => {
		const activeElement = e.target.closest('.project');
		if (!activeElement) return;

		const childrenEl = getNearestChildrenElement(activeElement);
		if (!childrenEl) return;

		clearAllHighlights();
		childrenEl.classList.add('childActive');

		const siblings = getSiblingsAtSameLevel(childrenEl);
		siblings.forEach((sib) => sib.classList.add('childActiveSibling'));
	});

	document.addEventListener('focusout', (e) => {
		// Delay to allow focusin to fire for next element first
		setTimeout(() => {
			if (!document.activeElement.closest('.project')) {
				clearAllHighlights();
			}
		}, 100);
	});
})();
