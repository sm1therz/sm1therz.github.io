(function() {
		'use strict';

		// Wait for page to load
		window.addEventListener('load', () => {
				// Create the button
				const btn = document.createElement('button');
				btn.id = 'WorkflowyLineBreakBtn';
				btn.textContent = 'line-break';

				// Apply styles
				Object.assign(btn.style, {
						border: 'none',
						height: '18px',
						cursor: 'pointer',
						order: '1',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '0px',
						paddingTop: '0.5px',
						paddingLeft: '9px',
						paddingRight: '9px',
						boxShadow: 'inset 0 0 0 1px hsl(0, 0%, 46%)',
						borderRadius: '3px',
						fontSize: '12px',
						background: 'hsl(0,0%,50%,.8)',
						color: 'white',
						zIndex: '9999',
						position: 'fixed',
						bottom: '10px',
						right: '10px'
				});

				// Append the button
				document.body.appendChild(btn);

				// Load external popup editor script on click
				btn.addEventListener('click', () => {
						const script = document.createElement('script');
						script.src = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Z-Userscripts/xray-line-break-editor-plain-text/function--xray-line-break-editor-plain-text.js';
						script.type = 'text/javascript';
						script.async = false;
						document.body.appendChild(script);
				});
		});
})();
