(function() {
	let toggleState = false;

	// Easily configurable styles to toggle
	const stylesToToggle = `
				#appID .notes-widget-wrapper .widget__header:not(.widget-header_collapsed) { 
					display: none !important; 
				}
				#appID .notes-widget-wrapper .widget__description { 
					display: none !important; 
					}
				#appID .notes-widget-wrapper .notes-widget-wrapper__tabs-list { 
					display: none !important;
					}
		`; 

	const styleId = 'customToggleStyle';

	// Create and append style tag for button styling
	const buttonStyle = document.createElement('style');
	buttonStyle.textContent = `
				#customToggleButton {
						position: fixed;
						height:24px;
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
												bottom:10px;
												right:10px;
						z-index: 90000;
				}
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
				#customFindContainer ~ #customToggleButton {
				bottom: 37px;
				}
		`;
	document.head.appendChild(buttonStyle);

	// Create toggle button
	const toggleButton = document.createElement('button');
	toggleButton.id = 'customToggleButton';
	toggleButton.textContent = 'Toggle Classes';
	toggleButton.setAttribute('aria-hidden', 'false');
	document.body.appendChild(toggleButton);

	function toggleClasses() {
		const existingStyle = document.getElementById(styleId);
		if (toggleState) {
			// Remove the previously created style element
			if (existingStyle) existingStyle.remove();
		} else {
			// Create and inject style element to hide specified classes
			const style = document.createElement('style');
			style.id = styleId;
			style.textContent = stylesToToggle;
			document.head.appendChild(style);
		}
		toggleState = !toggleState;
	}

	toggleButton.addEventListener('click', toggleClasses);
})();