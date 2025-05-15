// ==UserScript==
// @name         Workflowy > Focus Mode
// @namespace    http://tampermonkey.net/
// @version      1.1
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
		#app .root > .children > .project > .name,
		#app .root > .children > .project > .notes{
			opacity: 0.25;
		}
		/*LEVEL 2*/
		#app .root > .children > .project > .children > .project > .name,
		#app .root > .children > .project > .children > .project > .notes{
			opacity: 0.2
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
		/*LEVEL 6*/
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .name,
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .notes{
			opacity: 0.05;
		}
		/*LEVEL 7*/
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .name,
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .notes{
			opacity: 0.025;
		}
		/*LEVEL 7 + */
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .children .project > .name,
		#app .root > .children > .project > .children > .project > .children > .project > .children > .project > .children > .project > .children  .project > .notes{
			opacity: 0.025;
		}
		#app .children.childActiveSibling > .project > .name,
		#app .children.childActiveSibling > .project > .notes,
		#app .children.childActive > .project > .name,
		#app .children.childActive > .project > .notes{
			opacity: 1 !important;
		}
		#app .children.childActiveSibling > .project > .children > .project > .name,
		#app .children.childActiveSibling > .project > .children > .project > .notes,
		#app .children.childActive > .project > .children > .project > .name,
		#app .children.childActive > .project > .children > .project > .notes {
			opacity: .35 !important;
		}
		#app .children.childActiveSibling > .project > .children > .project > .children > .project > .name,
		#app .children.childActiveSibling > .project > .children > .project  > .children > .project> .notes,
		#app .children.childActive > .project > .children > .project > .children > .project > .name,
		#app .children.childActive > .project > .children > .project > .children > .project > .notes {
			opacity: .15 !important;
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
		const root = document.querySelector('.project.root');
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
