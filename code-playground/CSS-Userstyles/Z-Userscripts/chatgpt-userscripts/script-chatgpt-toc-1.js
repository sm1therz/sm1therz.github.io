javascript:(function () {
	"use strict";

	if (document.getElementById("toc-panel") || document.getElementById("toc-handle")) {
		return;
	}

	const css = document.createElement("style");
	css.textContent = `
	#toc-panel {
		position: fixed;
		top: 0px;
		right: 0px;
		bottom: unset;
		max-height:calc(100vh - 0px);
		overflow: hidden;
		border-radius: 0px;
		width: 280px;
		height: unset;
		background: transparent !important;
		border-left:1px solid hsla(0,0%,100%,.1)!important;
		backdrop-filter:blur(60px) saturate(1.4);
		box-shadow: -4px 0 8px rgba(0,0,0,0.1);
		font-family: sans-serif;
		font-size: 0.8rem;
		display: flex;
		flex-direction: column;
		z-index: 9998;
		transform: translateX(0);
		transition: transform 0.3s ease;
	}
	#toc-panel.collapsed {
		transform: translateX(340px);
	}
	#toc-header {
		padding: 6px 10px;
		background: #ddd;
		border-bottom: 1px solid #ccc;
		font-weight: bold;
		flex-shrink: 0;
		display:none !important;
	}
	#toc-list {
		list-style: none;
		flex: 1;
		overflow-y: auto;
		margin: 0;
		padding: 6px;
		padding-right:2px !important;
	}
	#toc-list li {
		padding: 4px;
		padding-left:6px;
		cursor: pointer;
		border-radius: 3px;
		transition: .25s !important;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	#toc-list li.h3 {
		padding-left:12px;
	}
	#toc-list ul > .h2 ~ .h3,
	#toc-list ul > .h2 ~ .h3 ~ .h4,
	#toc-list li.h4 {
		padding-left:26px;
	}
	#toc-list ul > .h2 ~ .h3 ~ .h4 {
		padding-left:40px !important;
	}
	#toc-list li:hover {
		background: #f0f0f0;
	}
	#toc-list ul > .h2 ~ .h3 {
		-webkit-line-clamp: 1 !important;
	}
	#toc-list ul > .h3 ~ .h4 {
		-webkit-line-clamp: 1 !important;
	}
	#toc-list ul {
		margin-left: 6px;
		padding: 0;
	}
	#toc-list ul li::before {
		content: "";
	}
	#toc-list li.user-entry{
		max-height:48px;
	}
	#toc-list li.user-entry.expanded{
		max-height:300px;
		-webkit-line-clamp: 15;
	}
	#toc-handle {
		position: fixed;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		width: 20px;
		height: 80px;
		background: #ccc;
		display: flex;
		align-items: center;
		justify-content: center;
		writing-mode: vertical-rl;
		text-orientation: mixed;
		cursor: pointer;
		font-weight: bold;
		user-select: none;
		z-index: 9999;
		transition: background 0.2s;
		border-bottom-left-radius: 4px;
		border-top-left-radius: 4px;
		transition:.25s;
	}
	.turn-indicator {
		font-weight:600 !important;
	}
	#toc-panel.collapsed + #toc-handle {
		width: 30px;
		transition-delay: .5s;
	}
	#toc-handle:hover {
		background: #bbb;
	}
	@keyframes highlightFade {
		0% { background-color: #fffa99; }
		100% { background-color: transparent; }
	}
	.toc-highlight {
		animation: highlightFade 1.5s forwards;
	}
	@media (prefers-color-scheme: dark) {
		#toc-panel {
			background: hsla(190,3%,24%,0.25) !important;
			border-left: 1px solid #555;
			box-shadow: -4px 0 8px rgba(0,0,0,0.7);
		}
		#toc-header {
			background: #555;
			border-bottom: 1px solid #666;
			color: #eee;
		}
		#toc-list li:hover {
			background: unset !important;
		}
		#toc-list li.h2:hover,
		#toc-list li.h3:hover,
		#toc-list li.h4:hover,
		#toc-list li.user-entry:hover{
			background: hsla(0,0%,100%,.1) !important;
		}
		#toc-list > li:hover {
			background:hsla(0,0%,100%,.075)!important;
		}
		#toc-list {
			color: #eee;
		}
		#toc-panel + #toc-handle {
			background: hsl(0, 0%, 33.33%, 0.55) !important;
		}
		#toc-panel.collapsed + #toc-handle {
			background: hsl(0, 0%, 33.33%, 0.9) !important;
			color: #ddd;
			width:30px;
		}
		#toc-handle:hover {
			background: #666;
		}
	}
	`;
	document.head.appendChild(css);

	const panel = document.createElement("div");
	panel.id = "toc-panel";
	panel.innerHTML = `<div id="toc-header">Conversation TOC</div><ul id="toc-list"></ul>`;
	document.body.appendChild(panel);

	const handle = document.createElement("div");
	handle.id = "toc-handle";
	handle.textContent = "TOC";
	document.body.appendChild(handle);

	if (localStorage.getItem("toc-panel-collapsed") === "true") {
		panel.classList.add("collapsed");
	}

	handle.onclick = () => {
		panel.classList.toggle("collapsed");
		localStorage.setItem("toc-panel-collapsed", panel.classList.contains("collapsed"));
	};

	let chatContainer = null;
	let observer = null;
	let isScheduled = false;

	function debounceBuildTOC() {
		if (isScheduled) return;
		isScheduled = true;
		setTimeout(() => {
			buildTOC();
			isScheduled = false;
		}, 300);
	}

	function buildTOC() {
		const list = document.getElementById("toc-list");
		if (!list) return;
		list.innerHTML = "";

		const articles = (chatContainer || document).querySelectorAll("article[data-testid^='conversation-turn-']");
		if (!articles.length) {
			list.innerHTML = '<li style="opacity:0.7;font-style:italic;">Empty chat</li>';
			return;
		}

		articles.forEach(art => {
			const isAI = art.querySelector("[data-message-author-role='assistant']");
			const isUser = art.querySelector("[data-message-author-role='user']");

			const subUl = document.createElement("ul");
			const heads = [];

			if (isAI) {
				const aiContent = art.querySelector("div.markdown");
				const firstChild = aiContent ? aiContent.firstElementChild : null;
				if (firstChild && /^H[2-4|6]$/.test(firstChild.tagName)) {
					heads.push(firstChild);
					heads.push(...aiContent.querySelectorAll("h2, h3, h4, h6:not(:first-child)"));
				} else if (firstChild && firstChild.tagName === "P") {
					heads.push(firstChild);
				} else {
					heads.push(...aiContent.querySelectorAll("h2, h3, h4, h6"));
				}
			}

			if (isUser) {
				const userDivs = art.querySelectorAll("div.whitespace-pre-wrap");
				userDivs.forEach(div => {
					const text = div.textContent.trim();
					if (text.length >= 8) heads.push(div);
				});
			}

			heads.forEach(hd => {
				let skip = false;
				let p = hd;
				while (p && !skip) {
					if (["PRE", "CODE"].includes(p.tagName)) skip = true;
					p = p.parentElement;
				}
				if (skip || hd.textContent.trim() === "ChatGPT said:") return;

				const subLi = document.createElement("li");
				subLi.textContent = hd.textContent.trim() || "(Untitled)";

				if (isUser && hd.classList.contains("whitespace-pre-wrap")) {
					subLi.classList.add("user-entry");
					subLi.onclick = e => { e.stopPropagation(); subLi.classList.toggle("expanded"); };
				} else if (/^H[2-4|6]$/.test(hd.tagName)) {
					subLi.classList.add(hd.tagName.toLowerCase());
				} else if (hd.tagName === "P") {
					subLi.classList.add("p-1");
				}

				subLi.onclick = ev => {
					ev.stopPropagation();
					hd.classList.remove("toc-highlight");
					hd.offsetWidth;
					hd.classList.add("toc-highlight");
					hd.scrollIntoView({ behavior: "smooth", block: "start" });
				};

				subUl.appendChild(subLi);
			});

			if (subUl.children.length) {
				const li = document.createElement("li");
				const label = document.createElement("div");
				label.className = "turn-indicator";
				label.textContent = isAI ? "ChatGPT" : isUser ? "User" : "";
				label.onclick = () => art.scrollIntoView({ behavior: "smooth", block: "start" });

				li.appendChild(label);
				li.appendChild(subUl);
				list.appendChild(li);
			}
		});
	}

	function attachObserver() {
		const c = document.querySelector("main#main") || document.querySelector(".chat-container") || null;
		if (c !== chatContainer) {
			if (observer) observer.disconnect();
			chatContainer = c;
			if (chatContainer) {
				observer = new MutationObserver(debounceBuildTOC);
				observer.observe(chatContainer, { childList: true, subtree: true });
				buildTOC();
			}
		}
	}

	attachObserver();
	setInterval(attachObserver, 2000);
})();
