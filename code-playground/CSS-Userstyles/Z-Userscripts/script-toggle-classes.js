(function() {
		let searchActive = false;
		let currentIndex = -1;
		let matches = [];

		// Create search container
		const container = document.createElement('div');
		container.id = 'customFindContainer';
		container.innerHTML = `
				<button id='customFindButton'>Find in Page</button>
				<span id='customFindCounter'>0 / 0</span>
				<input id='customFindInput' type='text' placeholder='Find in page...'/>
				<button id='customFindNext'>Next</button>
		`;
		document.body.appendChild(container);

		const searchButton = document.getElementById('customFindButton');
		const input = document.getElementById('customFindInput');
		const nextButton = document.getElementById('customFindNext');
		const counter = document.getElementById('customFindCounter');

		function updateCounter() {
				counter.textContent = matches.length ? `${currentIndex + 1} / ${matches.length}` : '0 / 0';
		}

		function resetSearch() {
				matches.forEach(el => {
						const parent = el.parentNode;
						parent.replaceChild(document.createTextNode(el.textContent), el);
				});
				matches = [];
				currentIndex = -1;
				updateCounter();
		}

		function highlightMatches(text) {
				resetSearch();
				if (!text) return;

				const allTextNodes = [];
				const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
						acceptNode(node) {
								return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
						}
				});

				let node;
				while ((node = walker.nextNode())) {
						allTextNodes.push(node);
				}

				allTextNodes.forEach(node => {
						const parent = node.parentNode;
						const regex = new RegExp(`(${text})`, 'gi');
						const fragments = node.nodeValue.split(regex);

						fragments.forEach(fragment => {
								if (regex.test(fragment)) {
										const mark = document.createElement('mark');
										mark.className = 'customFindMatch';
										mark.textContent = fragment;
										parent.insertBefore(mark, node);
										matches.push(mark);
								} else {
										parent.insertBefore(document.createTextNode(fragment), node);
								}
						});

						parent.removeChild(node);
				});

				if (matches.length) {
						currentIndex = 0;
						matches[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
				}
				updateCounter();
		}

		function navigateResults() {
				if (!matches.length) return;
				currentIndex = (currentIndex + 1) % matches.length;
				matches[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
				updateCounter();
		}

		input.addEventListener('keydown', function(e) {
				if (e.key === 'Enter') {
						if (currentIndex === -1) {
								highlightMatches(input.value);
						} else {
								navigateResults();
						}
				}
		});

		nextButton.addEventListener('click', function() {
				navigateResults();
		});

		searchButton.addEventListener('click', function() {
				searchActive = !searchActive;
				input.style.display = searchActive ? 'flex' : 'none';
				nextButton.style.display = searchActive ? 'flex' : 'none';
				counter.style.display = searchActive ? 'flex' : 'none';
				if (!searchActive) {
						resetSearch();
						input.value = '';
				}
		});

		// Style the search box
		const style = document.createElement('style');
		style.id = 'customFindStyle';
		style.textContent = `
				:root {
						--customFindFontSize:12px;
						--customFindHeight:24px;
						--customFindBrdRad:3px;
						--customFindInputWidth:250px;
						--customFindInputPadLR:6px;
						--customFindCounterWidth:40px;
						/*color*/
						--customFindBtnClr:white;
						--customFindBtnBgClr:hsl(0,0%,50%,.8);
						--customFindBtnBgClr-Hover:hsl(0,0%,40%,.8);
						--customFindBtnBrdClr:hsl(0, 0%, 46%);
				}
				#customFindContainer {
						position: fixed;
						bottom: 10px;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction:row-reverse;
						right: 10px;
						font-size: 12px;
						z-index: 10000;
						gap: 5px;
						height:var(--customFindHeight);
				}
				#customFindButton {
						height:100%;
						border: none;
						cursor: pointer;
						order:1;
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 0px;
						padding-top: 0.5px;
						padding-left: calc(var(--customFindInputPadLR) * 1.5);
						padding-right: calc(var(--customFindInputPadLR) * 1.5);
						box-shadow: inset 0 0 0 1px var(--customFindBtnBrdClr) !important;
						border-radius: var(--customFindBrdRad);
						font-size: var(--customFindFontSize);
						background: var(--customFindBtnBgClr);
						color: var(--customFindBtnClr) !important;
				}
				#customFindInput, #customFindNext, #customFindCounter {
						display: none;
				}
				#customFindInput {
						width: var(--customFindInputWidth);
						order:3;
						color: black;
						border: none !important;
						height:100% !important;
						padding: 0px;
						padding-left: var(--customFindInputPadLR);
						padding-right: var(--customFindInputPadLR);
						border-radius: var(--customFindBrdRad);
						font-size: var(--customFindFontSize) !important;
						box-shadow: inset 0 0 0 1px var(--customFindBtnBrdClr)!important;
						background: white !important;
				}
				#customFindNext {
						order:2;
						height:100%;
						border: unset !important;
						outline: unset !important;
						align-items: center;
						justify-content: center;
						padding: 0px;
						padding-top: 0.5px;
						padding-left: var(--customFindInputPadLR);
						padding-right: var(--customFindInputPadLR);
						border-radius: var(--customFindBrdRad);
						box-shadow: inset 0 0 0 1px var(--customFindBtnBrdClr) !important;
						font-size: var(--customFindFontSize);
						background: var(--customFindBtnBgClr);
						color: var(--customFindBtnClr) !important;
				}
				#customFindCounter {
						order:10;
						align-items: center;
						justify-content: flex-end;
						padding:1px;
						padding-right: 2px;
						width:var(--customFindCounterWidth);
						color:var(--customFindBtnBrdClr);
						border-radius: calc(var(--customFindBrdRad) - 1px);
						font-size: var(--customFindFontSize);
						/**/
						position:absolute;
						left:calc(var(--customFindInputWidth) + var(--customFindInputPadLR) * 1 - var(--customFindCounterWidth) - 1px);
				}
				.customFindMatch {
						background: yellow;
				}
				#customFindCounter,
				#customFindButton,
				#customFindNext {
				backdrop-filter:blur(10px) !important;
				-webkit-backdrop-filter:blur(10px) !important;
				}
				#customFindCounter:hover,
				#customFindButton:hover {
				--customFindBtnBgClr:var(--customFindBtnBgClr-Hover);
				}
				
		`;
		document.head.appendChild(style);
})();
