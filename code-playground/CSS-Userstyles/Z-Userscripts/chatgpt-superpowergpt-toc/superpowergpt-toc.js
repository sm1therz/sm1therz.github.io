(() => {
	const oldMinimap = document.querySelector('#minimap-wrapper');
	if (oldMinimap) oldMinimap.remove();
	// Inject style tag for all CSS used
	const styleTag = document.createElement('style');
	styleTag.textContent = `
		#minimap-wrapper {
	position: fixed;
	top: 0;
	right: 0;
	width: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 9999;
	background: rgba(0, 0, 0, 0.05);
	padding: 60px 0 170px 0;
}
		.minimap-dot {
			width: 100%;
			border-radius: 4px;
			background: gray;
			margin: 1px 0;
			cursor: pointer;
			border: none;
		}
		.minimap-dot.pinned {
			background: gold;
			border: 1px solid orange;
		}
		.minimap-dot.hovered:not(.pinned) {
			background: hsla(0,0%,50%,.5);
		}
		/*Floating Preview*/
		#minimap-preview {
			position: fixed;
			right: 30px;
			z-index: 10000;
			background: #2f2f2f;
			color: white;
			border: 1px solid #ffffff26;
			border-radius: 4px;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
			padding: 10px;
			max-width: 400px;
			max-height: 400px;
			overflow-y: auto;
			--font-size: 0.75rem;
			--line-height: 1.65;
		}
		#minimap-preview [data-message-author-role="user"] pre {
		overflow: hidden;
			font-size: var(--font-size);
			line-height: var(--line-height);
			--font-size: 0.75rem;
			--line-height: 1.05rem;
		}
		/*OVERRIDES*/
		#minimap-preview > article {
			overflow-y:auto !important;
		}
		#minimap-preview > article > div {
			padding: 0px !important;
		}
		#minimap-preview [data-message-author-role="user"] div[class*="max-w-"] {
			max-width: 100%;
		}
	`;
	document.head.appendChild(styleTag);
	const minimap = document.createElement('div');
	minimap.id = 'minimap-wrapper';
	const articles = document.querySelectorAll('main article');
	const main = document.querySelector('main');
	const totalHeight = main ? main.offsetHeight - 240 : 1000;
	const pinnedFromStorage = new Set(JSON.parse(localStorage.getItem('minimapPinned') || '[]'));
	const pinnedMessages = new Set(pinnedFromStorage);
	articles.forEach((article, index) => {
		const dot = document.createElement('div');
		const messageHeight = article.offsetHeight;
		const scaledHeight = Math.max(5, (messageHeight / totalHeight) * 100 * 5);
		dot.className = 'minimap-dot';
		dot.style.height = `${scaledHeight}px`;
		dot.title = `Message ${index + 1}`;
		let previewBox;
		let isPinned = pinnedMessages.has(index);
		const updateStyle = () => {
			dot.classList.toggle('pinned', isPinned);
		};
		dot.addEventListener('mouseenter', () => {
			dot.classList.add('hovered');
			const preview = article.cloneNode(true);
			preview.style.maxHeight = '300px';
			preview.style.overflow = 'hidden';
			preview.style.fontSize = '12px';
			previewBox = document.createElement('div');
			previewBox.id = 'minimap-preview';
			const top = dot.getBoundingClientRect()
				.top;
			previewBox.style.top = `${top}px`;
			previewBox.appendChild(preview);
			document.body.appendChild(previewBox);
		});
		dot.addEventListener('mouseleave', () => {
			dot.classList.remove('hovered');
			if (previewBox) {
				previewBox.remove();
				previewBox = null;
			}
		});
		dot.addEventListener('click', (e) => {
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
			article.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
})();