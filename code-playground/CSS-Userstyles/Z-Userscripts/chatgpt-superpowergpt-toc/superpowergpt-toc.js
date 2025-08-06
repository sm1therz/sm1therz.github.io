// ==UserScript==
// @name         ChatGPT > TOC > SuperpowerGPT
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
	--minimapWidth: 32px;
	--minimapPreviewWidth: 440px;
}
#minimap-wrapper {
	position: fixed;
	top: 0;
	right: 14px;
	width: var(--minimapWidth);
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	z-index: 0;
	background: rgba(0, 0, 0, 0.05);
	padding: 60px 0 170px 0;
	padding: var(--header-height) 0 170px 0;
	max-height: 100vh !important;
	min-height: 100vh !important;
	padding-bottom: 60px !important;
	overflow-y: auto !important;
}
#minimap-wrapper::-webkit-scrollbar {
	width: 0px;
}
.minimap-dot {
	width: calc(var(--minimapWidth) * .5);
	border-radius: 4px;
	background: gray;
	margin: 1px 0;
	cursor: pointer;
	border: none;
	max-height: 200px !important;
	min-height: 5px !important;
	height: calc(var(--dot-height) - 20px) !important;
	transition: .05s;
}
.minimap-dot.user-dot {
		box-shadow:inset 0 0 0 1.5px hsla(0,0%,100%,.5);
		background:hsl(0, 0%, 30.2%,0)
	
}
.minimap-dot.user-dot:hover {
		background:hsl(0, 0%, 15.2%) !important;
		box-shadow:inset 0 0 0 1.5px hsla(0,0%,50%,.25) !important;

}
.minimap-dot.dot-off {
display:none !important;
}
div#minimap-toggle {
		margin: 0px !important;
		position: fixed;
	 top: 5px;
	 right:calc(var(--minimapWidth) + 140px);
	 font-size:10px;
	 line-height:1.1;
	 display:flex;
	 flex-direction:column;
	 align-items:flex-start;
	 justify-content:flex-start;
	 gap:2px;
	 
}
div#minimap-toggle:before {
		content:"Mini Map Filter";
		display:block;
		opacity:.9;
		color:white;
		
}
@media (max-width: 767px) {
div#minimap-toggle {
	 right:calc(var(--minimapWidth) + 10px);

}
}
div#minimap-toggle button {
background:hsla(0,0%,50%,.1);
cursor:pointer;
padding:2px 1px;
border-radius:2px;
box-shadow:inset 0 0 0 1px hsla(0,0%,50%,.1);
width:100%;
}
div#minimap-toggle button:hover {
background:hsla(0,0%,50%,.2);

}

.minimap-dot.active {
	width: calc(var(--minimapWidth) * 1);
}
.minimap-dot.pinned {
	background: gold !important;
}
.minimap-dot.hovered:not(.pinned) {
	background: hsla(0, 0%, 50%, .5);
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
	width: var(--minimapPreviewWidth);
	max-width: var(--minimapPreviewWidth);
	max-height: 500px;
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
#minimap-preview article {
	box-shadow: none !important;
}
#minimap-preview .markdown.prose > *:first-child {
	margin-top: 0px !important;
}
#minimap-preview .markdown.prose > *:last-child {
	margin-bottom: 0px !important;
}
#minimap-preview > article {
	overflow-y: auto !important;
	max-height: unset !important;
}
#minimap-preview > article > div {
	padding: 0px !important;
}
#minimap-preview [data-message-author-role="user"] div[class*="max-w-"] {
	max-width: 100%;
}
#minimap-preview [data-message-author-role="user"] .bg-token-message-surface {
	background: hsla(0, 0%, 80%, .1) !important;
	max-width: calc(var(--minimapPreviewWidth) * .8) !important;
	border-radius: 14px;
}
#minimap-wrapper:not([style*="overflow-y: auto"]) {
}
.minimap-dot[style*="--dot-height: 1."],
.minimap-dot[style*="--dot-height: 2."],
.minimap-dot[style*="--dot-height: 3."],
.minimap-dot[style*="--dot-height: 4."] {
	min-height: 5px !important;
	border-radius: 3px;

}
.minimap-dot[style*="--dot-height: 5."],
.minimap-dot[style*="--dot-height: 6."],
.minimap-dot[style*="--dot-height: 7."],
.minimap-dot[style*="--dot-height: 8."] {
	min-height: 8px !important;
	border-radius: 3px;
}
.minimap-dot[style*="--dot-height: 9."],
.minimap-dot[style*="--dot-height: 10."],
.minimap-dot[style*="--dot-height: 11."],
.minimap-dot[style*="--dot-height: 12."],
.minimap-dot[style*="--dot-height: 13."],
.minimap-dot[style*="--dot-height: 14."] {
	min-height: 11px !important;
	border-radius: 3px;
}
.minimap-dot[style*="--dot-height: 15."],
.minimap-dot[style*="--dot-height: 16."],
.minimap-dot[style*="--dot-height: 17."],
.minimap-dot[style*="--dot-height: 18."],
.minimap-dot[style*="--dot-height: 19."],
.minimap-dot[style*="--dot-height: 20."],
.minimap-dot[style*="--dot-height: 21."],
.minimap-dot[style*="--dot-height: 22."] {
	min-height: 14px !important;
	border-radius: 3px;
}
.minimap-dot[style*="--dot-height: 23."],
.minimap-dot[style*="--dot-height: 24."],
.minimap-dot[style*="--dot-height: 25."],
.minimap-dot[style*="--dot-height: 26."],
.minimap-dot[style*="--dot-height: 27."] {
	min-height: 18px !important;
	border-radius: 3px;
}
.minimap-dot[style*="--dot-height: 28."],
.minimap-dot[style*="--dot-height: 29."],
.minimap-dot[style*="--dot-height: 30."],
.minimap-dot[style*="--dot-height: 31."],
.minimap-dot[style*="--dot-height: 32."] {
	min-height: 22px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 33."],
.minimap-dot[style*="--dot-height: 34."],
.minimap-dot[style*="--dot-height: 35."],
.minimap-dot[style*="--dot-height: 36."],
.minimap-dot[style*="--dot-height: 37."],
.minimap-dot[style*="--dot-height: 38."],
.minimap-dot[style*="--dot-height: 39."] {
	min-height: 24px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 40."],
.minimap-dot[style*="--dot-height: 41."],
.minimap-dot[style*="--dot-height: 42."],
.minimap-dot[style*="--dot-height: 43."],
.minimap-dot[style*="--dot-height: 44."],
.minimap-dot[style*="--dot-height: 45."],
.minimap-dot[style*="--dot-height: 46."],
.minimap-dot[style*="--dot-height: 47."],
.minimap-dot[style*="--dot-height: 48."],
.minimap-dot[style*="--dot-height: 49."]{
	min-height: 30px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 50."],
.minimap-dot[style*="--dot-height: 51."],
.minimap-dot[style*="--dot-height: 52."],
.minimap-dot[style*="--dot-height: 53."],
.minimap-dot[style*="--dot-height: 54."],
.minimap-dot[style*="--dot-height: 55."],
.minimap-dot[style*="--dot-height: 56."],
.minimap-dot[style*="--dot-height: 57."],
.minimap-dot[style*="--dot-height: 58."],
.minimap-dot[style*="--dot-height: 59."]{
	min-height: 32px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 60."],
.minimap-dot[style*="--dot-height: 61."],
.minimap-dot[style*="--dot-height: 62."],
.minimap-dot[style*="--dot-height: 63."],
.minimap-dot[style*="--dot-height: 64."],
.minimap-dot[style*="--dot-height: 65."],
.minimap-dot[style*="--dot-height: 66."],
.minimap-dot[style*="--dot-height: 67."],
.minimap-dot[style*="--dot-height: 68."],
.minimap-dot[style*="--dot-height: 69."]{
	min-height: 34px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 70."],
.minimap-dot[style*="--dot-height: 71."],
.minimap-dot[style*="--dot-height: 72."],
.minimap-dot[style*="--dot-height: 73."],
.minimap-dot[style*="--dot-height: 74."],
.minimap-dot[style*="--dot-height: 75."],
.minimap-dot[style*="--dot-height: 76."],
.minimap-dot[style*="--dot-height: 77."],
.minimap-dot[style*="--dot-height: 78."],
.minimap-dot[style*="--dot-height: 79."]{
	min-height: 36px !important;
	border-radius: 3px;
}
.minimap-dot[style*="--dot-height: 80."],
.minimap-dot[style*="--dot-height: 81."],
.minimap-dot[style*="--dot-height: 82."],
.minimap-dot[style*="--dot-height: 83."],
.minimap-dot[style*="--dot-height: 84."],
.minimap-dot[style*="--dot-height: 85."],
.minimap-dot[style*="--dot-height: 86."],
.minimap-dot[style*="--dot-height: 87."],
.minimap-dot[style*="--dot-height: 88."],
.minimap-dot[style*="--dot-height: 89."] {
	min-height: 38px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 90."],
.minimap-dot[style*="--dot-height: 91."],
.minimap-dot[style*="--dot-height: 92."],
.minimap-dot[style*="--dot-height: 93."],
.minimap-dot[style*="--dot-height: 94."],
.minimap-dot[style*="--dot-height: 95."],
.minimap-dot[style*="--dot-height: 96."],
.minimap-dot[style*="--dot-height: 97."],
.minimap-dot[style*="--dot-height: 98."],
.minimap-dot[style*="--dot-height: 99."] {
	min-height: 40px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 100."],
.minimap-dot[style*="--dot-height: 101."],
.minimap-dot[style*="--dot-height: 102."],
.minimap-dot[style*="--dot-height: 103."],
.minimap-dot[style*="--dot-height: 104."],
.minimap-dot[style*="--dot-height: 105."],
.minimap-dot[style*="--dot-height: 106."],
.minimap-dot[style*="--dot-height: 107."],
.minimap-dot[style*="--dot-height: 108."],
.minimap-dot[style*="--dot-height: 109."] {
	min-height: 42px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 110."],
.minimap-dot[style*="--dot-height: 111."],
.minimap-dot[style*="--dot-height: 112."],
.minimap-dot[style*="--dot-height: 113."],
.minimap-dot[style*="--dot-height: 114."],
.minimap-dot[style*="--dot-height: 115."],
.minimap-dot[style*="--dot-height: 116."],
.minimap-dot[style*="--dot-height: 117."],
.minimap-dot[style*="--dot-height: 118."],
.minimap-dot[style*="--dot-height: 119."] {
	min-height: 44px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 120."],
.minimap-dot[style*="--dot-height: 121."],
.minimap-dot[style*="--dot-height: 122."],
.minimap-dot[style*="--dot-height: 123."],
.minimap-dot[style*="--dot-height: 124."],
.minimap-dot[style*="--dot-height: 125."],
.minimap-dot[style*="--dot-height: 126."],
.minimap-dot[style*="--dot-height: 127."],
.minimap-dot[style*="--dot-height: 128."],
.minimap-dot[style*="--dot-height: 129."] {
	min-height: 46px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 130."],
.minimap-dot[style*="--dot-height: 131."],
.minimap-dot[style*="--dot-height: 132."],
.minimap-dot[style*="--dot-height: 133."],
.minimap-dot[style*="--dot-height: 134."],
.minimap-dot[style*="--dot-height: 135."],
.minimap-dot[style*="--dot-height: 136."],
.minimap-dot[style*="--dot-height: 137."],
.minimap-dot[style*="--dot-height: 138."],
.minimap-dot[style*="--dot-height: 139."] {
	min-height: 48px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 140."],
.minimap-dot[style*="--dot-height: 141."],
.minimap-dot[style*="--dot-height: 142."],
.minimap-dot[style*="--dot-height: 143."],
.minimap-dot[style*="--dot-height: 144."],
.minimap-dot[style*="--dot-height: 145."],
.minimap-dot[style*="--dot-height: 146."],
.minimap-dot[style*="--dot-height: 147."],
.minimap-dot[style*="--dot-height: 148."],
.minimap-dot[style*="--dot-height: 149."] {
	min-height: 50px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 150."],
.minimap-dot[style*="--dot-height: 151."],
.minimap-dot[style*="--dot-height: 152."],
.minimap-dot[style*="--dot-height: 153."],
.minimap-dot[style*="--dot-height: 154."],
.minimap-dot[style*="--dot-height: 155."],
.minimap-dot[style*="--dot-height: 156."],
.minimap-dot[style*="--dot-height: 157."],
.minimap-dot[style*="--dot-height: 158."],
.minimap-dot[style*="--dot-height: 159."] {
	min-height: 52px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 160."],
.minimap-dot[style*="--dot-height: 161."],
.minimap-dot[style*="--dot-height: 162."],
.minimap-dot[style*="--dot-height: 163."],
.minimap-dot[style*="--dot-height: 164."],
.minimap-dot[style*="--dot-height: 165."],
.minimap-dot[style*="--dot-height: 166."],
.minimap-dot[style*="--dot-height: 167."],
.minimap-dot[style*="--dot-height: 168."],
.minimap-dot[style*="--dot-height: 169."] {
	min-height: 54px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 170."],
.minimap-dot[style*="--dot-height: 171."],
.minimap-dot[style*="--dot-height: 172."],
.minimap-dot[style*="--dot-height: 173."],
.minimap-dot[style*="--dot-height: 174."],
.minimap-dot[style*="--dot-height: 175."],
.minimap-dot[style*="--dot-height: 176."],
.minimap-dot[style*="--dot-height: 177."],
.minimap-dot[style*="--dot-height: 178."],
.minimap-dot[style*="--dot-height: 179."] {
	min-height: 56px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 180."],
.minimap-dot[style*="--dot-height: 181."],
.minimap-dot[style*="--dot-height: 182."],
.minimap-dot[style*="--dot-height: 183."],
.minimap-dot[style*="--dot-height: 184."],
.minimap-dot[style*="--dot-height: 185."],
.minimap-dot[style*="--dot-height: 186."],
.minimap-dot[style*="--dot-height: 187."],
.minimap-dot[style*="--dot-height: 188."],
.minimap-dot[style*="--dot-height: 189."] {
	min-height: 58px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 190."],
.minimap-dot[style*="--dot-height: 191."],
.minimap-dot[style*="--dot-height: 192."],
.minimap-dot[style*="--dot-height: 193."],
.minimap-dot[style*="--dot-height: 194."],
.minimap-dot[style*="--dot-height: 195."],
.minimap-dot[style*="--dot-height: 196."],
.minimap-dot[style*="--dot-height: 197."],
.minimap-dot[style*="--dot-height: 198."],
.minimap-dot[style*="--dot-height: 199."] {
	min-height: 60px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 200."],
.minimap-dot[style*="--dot-height: 201."],
.minimap-dot[style*="--dot-height: 202."],
.minimap-dot[style*="--dot-height: 203."],
.minimap-dot[style*="--dot-height: 204."],
.minimap-dot[style*="--dot-height: 205."],
.minimap-dot[style*="--dot-height: 206."],
.minimap-dot[style*="--dot-height: 207."],
.minimap-dot[style*="--dot-height: 208."],
.minimap-dot[style*="--dot-height: 209."] {
	min-height: 62px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 210."],
.minimap-dot[style*="--dot-height: 211."],
.minimap-dot[style*="--dot-height: 212."],
.minimap-dot[style*="--dot-height: 213."],
.minimap-dot[style*="--dot-height: 214."],
.minimap-dot[style*="--dot-height: 215."],
.minimap-dot[style*="--dot-height: 216."],
.minimap-dot[style*="--dot-height: 217."],
.minimap-dot[style*="--dot-height: 218."],
.minimap-dot[style*="--dot-height: 219."] {
	min-height: 64px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 220."],
.minimap-dot[style*="--dot-height: 221."],
.minimap-dot[style*="--dot-height: 222."],
.minimap-dot[style*="--dot-height: 223."],
.minimap-dot[style*="--dot-height: 224."],
.minimap-dot[style*="--dot-height: 225."],
.minimap-dot[style*="--dot-height: 226."],
.minimap-dot[style*="--dot-height: 227."],
.minimap-dot[style*="--dot-height: 228."],
.minimap-dot[style*="--dot-height: 229."] {
	min-height: 66px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 230."],
.minimap-dot[style*="--dot-height: 231."],
.minimap-dot[style*="--dot-height: 232."],
.minimap-dot[style*="--dot-height: 233."],
.minimap-dot[style*="--dot-height: 234."],
.minimap-dot[style*="--dot-height: 235."],
.minimap-dot[style*="--dot-height: 236."],
.minimap-dot[style*="--dot-height: 237."],
.minimap-dot[style*="--dot-height: 238."],
.minimap-dot[style*="--dot-height: 239."] {
	min-height: 68px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 240."],
.minimap-dot[style*="--dot-height: 241."],
.minimap-dot[style*="--dot-height: 242."],
.minimap-dot[style*="--dot-height: 243."],
.minimap-dot[style*="--dot-height: 244."],
.minimap-dot[style*="--dot-height: 245."],
.minimap-dot[style*="--dot-height: 246."],
.minimap-dot[style*="--dot-height: 247."],
.minimap-dot[style*="--dot-height: 248."],
.minimap-dot[style*="--dot-height: 249."] {
	min-height: 70px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 250."],
.minimap-dot[style*="--dot-height: 251."],
.minimap-dot[style*="--dot-height: 252."],
.minimap-dot[style*="--dot-height: 253."],
.minimap-dot[style*="--dot-height: 254."],
.minimap-dot[style*="--dot-height: 255."],
.minimap-dot[style*="--dot-height: 256."],
.minimap-dot[style*="--dot-height: 257."],
.minimap-dot[style*="--dot-height: 258."],
.minimap-dot[style*="--dot-height: 259."] {
	min-height: 72px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 260."],
.minimap-dot[style*="--dot-height: 261."],
.minimap-dot[style*="--dot-height: 262."],
.minimap-dot[style*="--dot-height: 263."],
.minimap-dot[style*="--dot-height: 264."],
.minimap-dot[style*="--dot-height: 265."],
.minimap-dot[style*="--dot-height: 266."],
.minimap-dot[style*="--dot-height: 267."],
.minimap-dot[style*="--dot-height: 268."],
.minimap-dot[style*="--dot-height: 269."] {
	min-height: 74px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 270."],
.minimap-dot[style*="--dot-height: 271."],
.minimap-dot[style*="--dot-height: 272."],
.minimap-dot[style*="--dot-height: 273."],
.minimap-dot[style*="--dot-height: 274."],
.minimap-dot[style*="--dot-height: 275."],
.minimap-dot[style*="--dot-height: 276."],
.minimap-dot[style*="--dot-height: 277."],
.minimap-dot[style*="--dot-height: 278."],
.minimap-dot[style*="--dot-height: 279."] {
	min-height: 76px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 280."],
.minimap-dot[style*="--dot-height: 281."],
.minimap-dot[style*="--dot-height: 282."],
.minimap-dot[style*="--dot-height: 283."],
.minimap-dot[style*="--dot-height: 284."],
.minimap-dot[style*="--dot-height: 285."],
.minimap-dot[style*="--dot-height: 286."],
.minimap-dot[style*="--dot-height: 287."],
.minimap-dot[style*="--dot-height: 288."],
.minimap-dot[style*="--dot-height: 289."] {
	min-height: 78px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 290."],
.minimap-dot[style*="--dot-height: 291."],
.minimap-dot[style*="--dot-height: 292."],
.minimap-dot[style*="--dot-height: 293."],
.minimap-dot[style*="--dot-height: 294."],
.minimap-dot[style*="--dot-height: 295."],
.minimap-dot[style*="--dot-height: 296."],
.minimap-dot[style*="--dot-height: 297."],
.minimap-dot[style*="--dot-height: 298."],
.minimap-dot[style*="--dot-height: 299."] {
	min-height: 80px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 300."],
.minimap-dot[style*="--dot-height: 301."],
.minimap-dot[style*="--dot-height: 302."],
.minimap-dot[style*="--dot-height: 303."],
.minimap-dot[style*="--dot-height: 304."],
.minimap-dot[style*="--dot-height: 305."],
.minimap-dot[style*="--dot-height: 306."],
.minimap-dot[style*="--dot-height: 307."],
.minimap-dot[style*="--dot-height: 308."],
.minimap-dot[style*="--dot-height: 309."] {
	min-height: 82px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 310."],
.minimap-dot[style*="--dot-height: 311."],
.minimap-dot[style*="--dot-height: 312."],
.minimap-dot[style*="--dot-height: 313."],
.minimap-dot[style*="--dot-height: 314."],
.minimap-dot[style*="--dot-height: 315."],
.minimap-dot[style*="--dot-height: 316."],
.minimap-dot[style*="--dot-height: 317."],
.minimap-dot[style*="--dot-height: 318."],
.minimap-dot[style*="--dot-height: 319."] {
	min-height: 84px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 320."],
.minimap-dot[style*="--dot-height: 321."],
.minimap-dot[style*="--dot-height: 322."],
.minimap-dot[style*="--dot-height: 323."],
.minimap-dot[style*="--dot-height: 324."],
.minimap-dot[style*="--dot-height: 325."],
.minimap-dot[style*="--dot-height: 326."],
.minimap-dot[style*="--dot-height: 327."],
.minimap-dot[style*="--dot-height: 328."],
.minimap-dot[style*="--dot-height: 329."] {
	min-height: 86px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 330."],
.minimap-dot[style*="--dot-height: 331."],
.minimap-dot[style*="--dot-height: 332."],
.minimap-dot[style*="--dot-height: 333."],
.minimap-dot[style*="--dot-height: 334."],
.minimap-dot[style*="--dot-height: 335."],
.minimap-dot[style*="--dot-height: 336."],
.minimap-dot[style*="--dot-height: 337."],
.minimap-dot[style*="--dot-height: 338."],
.minimap-dot[style*="--dot-height: 339."] {
	min-height: 88px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 340."],
.minimap-dot[style*="--dot-height: 341."],
.minimap-dot[style*="--dot-height: 342."],
.minimap-dot[style*="--dot-height: 343."],
.minimap-dot[style*="--dot-height: 344."],
.minimap-dot[style*="--dot-height: 345."],
.minimap-dot[style*="--dot-height: 346."],
.minimap-dot[style*="--dot-height: 347."],
.minimap-dot[style*="--dot-height: 348."],
.minimap-dot[style*="--dot-height: 349."] {
	min-height: 90px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 350."],
.minimap-dot[style*="--dot-height: 351."],
.minimap-dot[style*="--dot-height: 352."],
.minimap-dot[style*="--dot-height: 353."],
.minimap-dot[style*="--dot-height: 354."],
.minimap-dot[style*="--dot-height: 355."],
.minimap-dot[style*="--dot-height: 356."],
.minimap-dot[style*="--dot-height: 357."],
.minimap-dot[style*="--dot-height: 358."],
.minimap-dot[style*="--dot-height: 359."] {
	min-height: 92px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 360."],
.minimap-dot[style*="--dot-height: 361."],
.minimap-dot[style*="--dot-height: 362."],
.minimap-dot[style*="--dot-height: 363."],
.minimap-dot[style*="--dot-height: 364."],
.minimap-dot[style*="--dot-height: 365."],
.minimap-dot[style*="--dot-height: 366."],
.minimap-dot[style*="--dot-height: 367."],
.minimap-dot[style*="--dot-height: 368."],
.minimap-dot[style*="--dot-height: 369."] {
	min-height: 94px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 370."],
.minimap-dot[style*="--dot-height: 371."],
.minimap-dot[style*="--dot-height: 372."],
.minimap-dot[style*="--dot-height: 373."],
.minimap-dot[style*="--dot-height: 374."],
.minimap-dot[style*="--dot-height: 375."],
.minimap-dot[style*="--dot-height: 376."],
.minimap-dot[style*="--dot-height: 377."],
.minimap-dot[style*="--dot-height: 378."],
.minimap-dot[style*="--dot-height: 379."] {
	min-height: 96px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 380."],
.minimap-dot[style*="--dot-height: 381."],
.minimap-dot[style*="--dot-height: 382."],
.minimap-dot[style*="--dot-height: 383."],
.minimap-dot[style*="--dot-height: 384."],
.minimap-dot[style*="--dot-height: 385."],
.minimap-dot[style*="--dot-height: 386."],
.minimap-dot[style*="--dot-height: 387."],
.minimap-dot[style*="--dot-height: 388."],
.minimap-dot[style*="--dot-height: 389."] {
	min-height: 98px !important;
	border-radius: 3px;
}

.minimap-dot[style*="--dot-height: 390."],
.minimap-dot[style*="--dot-height: 391."],
.minimap-dot[style*="--dot-height: 392."],
.minimap-dot[style*="--dot-height: 393."],
.minimap-dot[style*="--dot-height: 394."],
.minimap-dot[style*="--dot-height: 395."],
.minimap-dot[style*="--dot-height: 396."],
.minimap-dot[style*="--dot-height: 397."],
.minimap-dot[style*="--dot-height: 398."],
.minimap-dot[style*="--dot-height: 399."] {
	min-height: 100px !important;
	border-radius: 3px;
}








		`;
		document.head.appendChild(styleTag);

		const minimap = document.createElement('div');
		minimap.id = 'minimap-wrapper';

		// -- Toggle UI --
		const toggleContainer = document.createElement('div');
		toggleContainer.id = 'minimap-toggle';
		toggleContainer.style.margin = '4px';
		const userBtn = document.createElement('button');
		userBtn.textContent = 'User';
		userBtn.addEventListener('click', () => {
			minimap.querySelectorAll('.minimap-dot.assistant-dot').forEach(d => d.classList.add('dot-off'));
			minimap.querySelectorAll('.minimap-dot.user-dot').forEach(d => d.classList.remove('dot-off'));
		});
		const assistantBtn = document.createElement('button');
		assistantBtn.textContent = 'Assistant';
		assistantBtn.addEventListener('click', () => {
			minimap.querySelectorAll('.minimap-dot.user-dot').forEach(d => d.classList.add('dot-off'));
			minimap.querySelectorAll('.minimap-dot.assistant-dot').forEach(d => d.classList.remove('dot-off'));
		});
		toggleContainer.appendChild(userBtn);
		toggleContainer.appendChild(assistantBtn);
		minimap.appendChild(toggleContainer);
		// -- End Toggle UI --

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
		}, { root: null, threshold: [0.25, 0.5, 0.75] });

		articles.forEach((article, index) => {
			const dot = document.createElement('div');
			const scaledHeight = Math.max(4, article.offsetHeight * 0.05);
			dotArticleMap.push({ dot, article });
			visibilityObserver.observe(article);

			dot.className = 'minimap-dot';
			dot.style.setProperty('--dot-height', `${scaledHeight}px`);
			dot.title = `Message ${index + 1}`;

			// Classification
			const authorRole = article.getAttribute('data-message-author-role')
				|| article.querySelector('[data-message-author-role]')?.getAttribute('data-message-author-role');
			if (authorRole === 'user') {
				dot.classList.add('user-dot');
			} else if (authorRole === 'assistant') {
				dot.classList.add('assistant-dot');
			}

			let isPinned = pinnedMessages.has(index) === true;

			const updateStyle = () => {
				dot.classList.toggle('pinned', isPinned);
			};

			dot.addEventListener('mouseenter', () => {
				dot.classList.add('hovered');
				const existingZone = document.querySelector('.minimap-hover-zone'); 
				if (existingZone) existingZone.remove();

				const preview = article.cloneNode(true);
				preview.style.maxHeight = 'unset';
				preview.style.overflow = 'hidden';
				preview.style.fontSize = '12px';

				const previewBox = document.createElement('div');
				previewBox.id = 'minimap-preview';
				previewBox.appendChild(preview);

				const hoverZone = document.createElement('div');
				hoverZone.className = 'minimap-hover-zone';
				hoverZone.style.pointerEvents = 'none';
				previewBox.style.pointerEvents = 'auto';
				hoverZone.appendChild(previewBox);
				document.body.appendChild(hoverZone);

				const dotRect = dot.getBoundingClientRect();
				const viewportHeight = window.innerHeight;
				const maxPreviewHeight = 500;
				const margin = 10;

				let previewTop = dotRect.top - maxPreviewHeight / 2;
				if (previewTop < margin) previewTop = margin;
				if (previewTop + maxPreviewHeight > viewportHeight - margin) previewTop = viewportHeight - margin - maxPreviewHeight;

				previewBox.style.top = `${previewTop}px`;
				previewBox.style.maxHeight = `${maxPreviewHeight}px`;

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

				dot.addEventListener('mouseleave', () => { hoveringDot = false; scheduleCleanup(); });
				dot.addEventListener('mouseenter', () => { hoveringDot = true; });
				previewBox.addEventListener('mouseleave', () => { hoveringPreview = false; scheduleCleanup(); });
				previewBox.addEventListener('mouseenter', () => { hoveringPreview = true; });
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
				if (isPinned) pinnedMessages.add(index);
				else pinnedMessages.delete(index);
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
		trackActiveArticle();
	}

	function renderMinimapIfChatLoaded() {
		if (!shouldRenderMinimap()) {
			destroyMinimap();
			return;
		}
		const newId = getConversationIdFromUrl();
		const articles = document.querySelectorAll('main article');
		if (newId !== currentConversationId ||
				!document.querySelector('#minimap-wrapper') ||
				articles.length !== document.querySelectorAll('#minimap-wrapper .minimap-dot').length) {
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
