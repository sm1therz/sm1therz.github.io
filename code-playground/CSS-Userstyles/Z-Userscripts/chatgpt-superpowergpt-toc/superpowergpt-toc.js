// ==UserScript==
// @name         ChatGPT TOC - SuperpowerGPT
// @namespace    http://tampermonkey.net/
// @version      2025-04-05
// @description  try to take over the world!
// @author       You
// @match        https://chatgpt.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com 
// @grant        none 
// ==/UserScript==
(() => {
	let currentConversationId = null;
	let minimapObserver = null;
	let debounceTimer = null;
	let dotArticleMap = [];
	let visibilityObserver = null;

	function getConversationIdFromUrl() {
		const match = location.pathname.match(/\/c\/([a-z0-9\-]+)/);
		return match ? match[1] : null;
	}

	function debounce(callback, delay) {
		return function () {
			clearTimeout(debounceTimer);
			debounceTimer = setTimeout(callback, delay);
		};
	}

	function destroyMinimap() {
		const oldMinimap = document.querySelector('#minimap-wrapper');
		if (oldMinimap) oldMinimap.remove();
		const oldStyle = document.querySelector('#minimap-style');
		if (oldStyle) oldStyle.remove();
		const oldPreviewZone = document.querySelector('.minimap-hover-zone');
		if (oldPreviewZone) oldPreviewZone.remove();
		if (visibilityObserver) {
			visibilityObserver.disconnect();
			visibilityObserver = null;
		}
		dotArticleMap = [];
	}

	function shouldRenderMinimap() {
		return getConversationIdFromUrl() !== null;
	}

	function initializeMinimap() {
		destroyMinimap();
		const styleTag = document.createElement('style');
		styleTag.id = 'minimap-style';
		styleTag.textContent = `
		:root {
			--minimapWidth:40px;
			--minimapPreviewWidth:440px;
		}
		#minimap-wrapper {
			position: fixed;
			top: 0;
			right: 0;
			width: var(--minimapWidth);
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			z-index: 9999;
			background: rgba(0, 0, 0, 0.05);
			padding: 60px 0 170px 0;
			max-height:100vh !important;
			min-height:100vh !important;
			padding-bottom:60px !important;
			overflow-y:auto !important;
		}
		#minimap-wrapper::-webkit-scrollbar{
			width:0px;
		}
		.minimap-dot {
			/*flex: 0 0 auto;*/
			width: calc(var(--minimapWidth) * .5);
			border-radius: 4px;
			background: gray;
			margin: 1px 0;
			cursor: pointer;
			border: none;
			max-height:200px !important;
			min-height:3px;
			height: calc(var(--dot-height) - 20px) !important;
						transition:.05s;
		}
				/***ACTIVE MESSAGE*/
				.minimap-dot.active{
					width:calc(var(--minimapWidth) * 1);
					back
				}
		.minimap-dot.pinned {
			background: gold !important;

		}
		.minimap-dot.hovered:not(.pinned) {
			background: hsla(0,0%,50%,.5);
		}
		#minimap-preview {
				position: fixed;
				right: 30px;
				background: #2f2f2f;
				color: white;
				border: 1px solid #ffffff26;
				border-radius: 10px;
				box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
				padding: 10px;
				width:var(--minimapPreviewWidth);
				max-width: var(--minimapPreviewWidth);
				max-height: 500px ;
				overflow-y: auto;
				--font-size: 0.75rem;
				--line-height: 1.65;
				pointer-events: hidden;
		}
		#minimap-preview [data-message-author-role="user"] pre {
			overflow: hidden;
			font-size: var(--font-size);
			line-height: var(--line-height);
			--font-size: 0.75rem;
			--line-height: 1.05rem;
		}
		/**OVERRIDES**/
		#minimap-preview article {
			box-shadow:none !important;
		}
		#minimap-preview .markdown.prose > *:first-child {
			margin-top:0px !important;
		}
		#minimap-preview .markdown.prose > *:last-child {
			margin-bottom:0px !important;
		}
		#minimap-preview > article {
			overflow-y: auto !important;
						max-height:unset !important;
		}
		#minimap-preview > article > div {
			padding: 0px !important;
		}
		#minimap-preview [data-message-author-role="user"] div[class*="max-w-"] {
			max-width: 100%;
		}
		#minimap-preview [data-message-author-role="user"] .bg-token-message-surface{
			background:hsla(0,0%,80%,.1) !important;
			max-width:calc(var(--minimapPreviewWidth) * .8) !important;
			border-radius:14px;
		}

		/**MORE THAN 30 MESSAGES*/
		#minimap-wrapper:not([style*="overflow-y: auto"]){
		}
		/**MINI DOT - SIZE 1*/
		.minimap-dot[style*="--dot-height: 1."],
		.minimap-dot[style*="--dot-height: 2."],
		.minimap-dot[style*="--dot-height: 3."],
		.minimap-dot[style*="--dot-height: 4."]{
			min-height:3px !important;
		}
		 /**MINI DOT - SIZE 2*/
		.minimap-dot[style*="--dot-height: 5."],
		.minimap-dot[style*="--dot-height: 6."],
		.minimap-dot[style*="--dot-height: 7."],
		.minimap-dot[style*="--dot-height: 8."]{
			min-height:6px !important;
			border-radius:2px;
		}
		 /**MINI DOT - SIZE 3*/
		.minimap-dot[style*="--dot-height: 9."],
		.minimap-dot[style*="--dot-height: 10."],
		.minimap-dot[style*="--dot-height: 11."],
		.minimap-dot[style*="--dot-height: 12."],
		.minimap-dot[style*="--dot-height: 13."],
		.minimap-dot[style*="--dot-height: 14."]{
			min-height:9px !important;
		}
		 /**MINI DOT - SIZE 4*/
		.minimap-dot[style*="--dot-height: 15."],
		.minimap-dot[style*="--dot-height: 16."],
		.minimap-dot[style*="--dot-height: 17."],
		.minimap-dot[style*="--dot-height: 18."],
		.minimap-dot[style*="--dot-height: 19."],
		.minimap-dot[style*="--dot-height: 20."],
		.minimap-dot[style*="--dot-height: 21."],
		.minimap-dot[style*="--dot-height: 22."]{
			min-height:12px !important;
		}
		 /**MINI DOT - SIZE 5*/
		.minimap-dot[style*="--dot-height: 26."],
		.minimap-dot[style*="--dot-height: 27."],
		.minimap-dot[style*="--dot-height: 28."],
		.minimap-dot[style*="--dot-height: 29."],
		.minimap-dot[style*="--dot-height: 30."],
		.minimap-dot[style*="--dot-height: 31."],
		.minimap-dot[style*="--dot-height: 32."],
		.minimap-dot[style*="--dot-height: 33."]{
			min-height:15px !important;
			border-radius:3px;
		}
		 /**MINI DOT - SIZE 6*/
		.minimap-dot[style*="--dot-height: 34."],
		.minimap-dot[style*="--dot-height: 35."],
		.minimap-dot[style*="--dot-height: 36."],
		.minimap-dot[style*="--dot-height: 37."],
		.minimap-dot[style*="--dot-height: 38."]{
			min-height:18px !important;
						}
		`;
		document.head.appendChild(styleTag);

		const minimap = document.createElement('div');
		minimap.id = 'minimap-wrapper';

		const main = document.querySelector('main');
		const articles = Array.from(main?.querySelectorAll('article') || []).filter(article => article.offsetHeight > 0);

		const pinnedFromStorage = new Set(JSON.parse(localStorage.getItem('minimapPinned') || '[]'));
		const pinnedMessages = new Set(pinnedFromStorage);

		visibilityObserver = new IntersectionObserver((entries) => {
			let visibleArticle = null;
			let maxRatio = 0;

			for (const entry of entries) {
				if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
					visibleArticle = entry.target;
					maxRatio = entry.intersectionRatio;
				}
			}

			if (visibleArticle) {
				dotArticleMap.forEach(({ dot, article }) => {
					dot.classList.toggle('active', article === visibleArticle);
				});
			}
		}, {
			root: null,
			threshold: [0.25, 0.5, 0.75]
		});

		articles.forEach((article, index) => {
			const dot = document.createElement('div');
			const scaledHeight = Math.max(4, article.offsetHeight * 0.05);
			dotArticleMap.push({ dot, article });

			visibilityObserver.observe(article);

			dot.className = 'minimap-dot';
			dot.style.setProperty('--dot-height', `${scaledHeight}px`);
			dot.title = `Message ${index + 1}`;

			let isPinned = pinnedMessages.has(index) === true;

			const updateStyle = () => {
				dot.classList.toggle('pinned', isPinned);
			};

			dot.addEventListener('mouseenter', () => {
				dot.classList.add('hovered');

				const existingZone = document.querySelector('.minimap-hover-zone');
				if (existingZone) existingZone.remove();

				const preview = article.cloneNode(true);
				preview.style.maxHeight = '300px';
				preview.style.overflow = 'hidden';
				preview.style.fontSize = '12px';

				const previewBox = document.createElement('div');
				previewBox.id = 'minimap-preview';
				previewBox.appendChild(preview);

				const top = dot.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;
				const availableSpaceBelow = windowHeight - top;
				const availableSpaceAbove = top;
				const maxPreviewHeight = 900;

				previewBox.style.top = `${top}px`;
				previewBox.style.maxHeight = `${Math.min(maxPreviewHeight, availableSpaceBelow, availableSpaceAbove)}px`;

				const hoverZone = document.createElement('div');
				hoverZone.className = 'minimap-hover-zone';
				hoverZone.style.pointerEvents = 'none';
				previewBox.style.pointerEvents = 'auto';
				hoverZone.appendChild(previewBox);
				document.body.appendChild(hoverZone);

				let hoveringDot = true;
				let hoveringPreview = false;

				const cleanup = () => {
					dot.classList.remove('hovered');
					hoverZone.remove();
				};

				const scheduleCleanup = () => {
					setTimeout(() => {
						if (!hoveringDot && !hoveringPreview) {
							cleanup();
						}
					}, 100);
				};

				dot.addEventListener('mouseleave', () => {
					hoveringDot = false;
					scheduleCleanup();
				});

				dot.addEventListener('mouseenter', () => {
					hoveringDot = true;
				});

				previewBox.addEventListener('mouseleave', () => {
					hoveringPreview = false;
					scheduleCleanup();
				});

				previewBox.addEventListener('mouseenter', () => {
					hoveringPreview = true;
				});
			});

			dot.addEventListener('click', (e) => {
				e.preventDefault();
				e.stopPropagation();
				article.scrollIntoView({ behavior: 'smooth', block: 'start' });
			});

			dot.addEventListener('dblclick', (e) => {
				e.preventDefault();
				e.stopPropagation();
				isPinned = !isPinned;
				if (isPinned) {
					pinnedMessages.add(index);
				} else {
					pinnedMessages.delete(index);
				}
				localStorage.setItem('minimapPinned', JSON.stringify([...pinnedMessages]));
				updateStyle();
			});

			updateStyle();
			minimap.appendChild(dot);
		});

		if (articles.length > 30) {
			minimap.style.overflowY = 'auto';
			minimap.style.maxHeight = '100vh';
			minimap.style.minHeight = '100vh';
			minimap.style.justifyContent = 'flex-start';
		}

		document.body.appendChild(minimap);
	}

	function renderMinimapIfChatLoaded() {
		if (!shouldRenderMinimap()) {
			destroyMinimap();
			return;
		}
		const newId = getConversationIdFromUrl();
		const articles = document.querySelectorAll('main article');
		if (newId !== currentConversationId || !document.querySelector('#minimap-wrapper') || articles.length !== document.querySelectorAll('#minimap-wrapper .minimap-dot').length) {
			currentConversationId = newId;
			setTimeout(() => initializeMinimap(), 50);
		}
	}

	const debouncedRender = debounce(() => {
		requestAnimationFrame(() => requestAnimationFrame(() => renderMinimapIfChatLoaded()));
	}, 500);

	const routePoller = () => {
		let lastPath = location.pathname;
		setInterval(() => {
			if (location.pathname !== lastPath) {
				lastPath = location.pathname;
				debouncedRender();
			}
		}, 800);
	};

	const mutationWatcher = () => {
		const observer = new MutationObserver(debouncedRender);
		const watch = () => {
			const main = document.querySelector('main');
			if (main) {
				observer.observe(main, { childList: true, subtree: true });
				debouncedRender();
			} else {
				setTimeout(watch, 300);
			}
		};
		watch();
	};

	routePoller();
	mutationWatcher();
})();
