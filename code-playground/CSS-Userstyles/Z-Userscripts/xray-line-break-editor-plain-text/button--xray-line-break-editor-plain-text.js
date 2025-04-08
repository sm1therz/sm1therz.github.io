

// Inject the button into the page
const container = document.createElement('div');
container.id = 'customLineBreakContainer';
container.innerHTML = `<button id="customLineBreakButton">Line Break</button>`;
document.body.appendChild(container);

// Inject style tag into <head>
const style = document.createElement('style');
style.textContent = `
	:root {
			--customLineBreakFontSize:12px;
			--customLineBreakHeight:24px;
			--customLineBreakBrdRad:3px;
			--customLineBreakInputWidth:250px;
			--customLineBreakInputPadLR:6px;
			--customLineBreakCounterWidth:40px;
			/*color*/
			--customLineBreakBtnClr:white;
			--customLineBreakBtnBgClr:hsl(0,0%,50%,.8);
			--customLineBreakBtnBgClr-Hover:hsl(0,0%,40%,.8);
			--customLineBreakBtnBrdClr:hsl(0, 0%, 46%);
	}
	#customLineBreakContainer {
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
			height:var(--customLineBreakHeight);
	}
	#customLineBreakButton {
			height:100%;
			border: none;
			cursor: pointer;
			order:1;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0px;
			padding-top: 0.5px;
			padding-left: calc(var(--customLineBreakInputPadLR) * 1.5);
			padding-right: calc(var(--customLineBreakInputPadLR) * 1.5);
			box-shadow: inset 0 0 0 1px var(--customLineBreakBtnBrdClr) !important;
			border-radius: var(--customLineBreakBrdRad);
			font-size: var(--customLineBreakFontSize);
			background: var(--customLineBreakBtnBgClr);
			color: var(--customLineBreakBtnClr) !important;
	}
`;
document.head.appendChild(style);

// Add the script injection behavior
document.getElementById('customFindButton').addEventListener('click', () => {
	const script = document.createElement('script');
	script.src = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Z-Userscripts/xray-line-break-editor-plain-text/function--xray-line-break-editor-plain-text.js';
	document.body.appendChild(script);
});