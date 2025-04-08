// Inject the button into the page
const container = document.createElement('div');
container.id = 'customLineBreakContainer';
container.innerHTML = `<button id="customFindButton">Line Break</button>`;
document.body.appendChild(container);

// Inject style tag into <head>
const style = document.createElement('style');
style.textContent = `
	/* your css here */
`;
document.head.appendChild(style);

// Add the script injection behavior
document.getElementById('customFindButton').addEventListener('click', () => {
	const script = document.createElement('script');
	script.src = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Z-Userscripts/script--workflowy-line-break.js';
	document.body.appendChild(script);
});
