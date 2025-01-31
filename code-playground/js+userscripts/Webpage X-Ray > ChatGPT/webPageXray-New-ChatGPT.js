javascript: (function() {
	if (window.__htmlEditorActive) {
		document.body.removeEventListener('mouseover', hoverHandler);
		document.body.removeEventListener('click', clickHandler);
		document.querySelectorAll('.bookmarklet-highlight').forEach(el => el.style.outline = '');
		if (document.getElementById('htmlEditorContainer')) {
			document.getElementById('htmlEditorContainer').remove();
		}
		window.__htmlEditorActive = false;
		return;
	}

	window.__htmlEditorActive = true;

	// Create and style the info box
	var infoBox = document.createElement('div');
	infoBox.id = 'htmlEditorInfoBox';
	infoBox.style.position = 'fixed';
	infoBox.style.bottom = '50px';
	infoBox.style.right = '10px';
	infoBox.style.padding = '5px 10px';
	infoBox.style.backgroundColor = 'rgba(0,0,0,0.7)';
	infoBox.style.color = '#fff';
	infoBox.style.fontFamily = 'Arial, sans-serif';
	infoBox.style.fontSize = '12px';
	infoBox.style.zIndex = '10000';
	infoBox.style.pointerEvents = 'none';
	document.body.appendChild(infoBox);

	// Create a textarea editor
	var editorContainer = document.createElement('div');
	editorContainer.id = 'htmlEditorContainer';
	editorContainer.style.position = 'fixed';
	editorContainer.style.top = '50%';
	editorContainer.style.left = '50%';
	editorContainer.style.transform = 'translate(-50%, -50%)';
	editorContainer.style.width = '50%';
	editorContainer.style.maxWidth = '90vw';
	editorContainer.style.maxHeight = '80vh';
	editorContainer.style.height = '600px'; // 15% taller than before
	editorContainer.style.padding = '10px';
	editorContainer.style.backgroundColor = '#fff';
	editorContainer.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
	editorContainer.style.border = '1px solid #ccc';
	editorContainer.style.borderRadius = '5px';
	editorContainer.style.zIndex = '10002';
	editorContainer.style.display = 'none'; // Initially hidden
	editorContainer.style.overflow = 'hidden';
	editorContainer.style.display = 'flex';
	editorContainer.style.flexDirection = 'column';
	document.body.appendChild(editorContainer);

	var textarea = document.createElement('textarea');
	textarea.id = 'htmlEditorTextarea';
	textarea.style.flex = '1';
	textarea.style.width = '100%';
	textarea.style.height = 'calc(100% - 40px)';
	textarea.style.fontSize = '14px';
	textarea.style.fontFamily = 'monospace';
	textarea.style.border = 'none';
	textarea.style.resize = 'none';
	textarea.style.outline = 'none';
	editorContainer.appendChild(textarea);

	var buttonContainer = document.createElement('div');
	buttonContainer.style.display = 'flex';
	buttonContainer.style.justifyContent = 'flex-end';
	buttonContainer.style.gap = '10px';
	buttonContainer.style.padding = '5px';
	buttonContainer.style.borderTop = '1px solid #ccc';
	editorContainer.appendChild(buttonContainer);

	var submitButton = document.createElement('button');
	submitButton.id = 'htmlEditorSubmitButton';
	submitButton.textContent = 'Submit';
	submitButton.style.padding = '5px 10px';
	submitButton.style.backgroundColor = '#4CAF50';
	submitButton.style.color = '#fff';
	submitButton.style.border = 'none';
	submitButton.style.borderRadius = '5px';
	submitButton.style.cursor = 'pointer';
	buttonContainer.appendChild(submitButton);

	var closeButton = document.createElement('button');
	closeButton.id = 'htmlEditorCloseButton';
	closeButton.textContent = 'Disable';
	closeButton.style.padding = '5px 10px';
	closeButton.style.backgroundColor = '#333';
	closeButton.style.color = '#fff';
	closeButton.style.border = 'none';
	closeButton.style.borderRadius = '5px';
	closeButton.style.cursor = 'pointer';
	buttonContainer.appendChild(closeButton);

	function removeHighlight() {
		document.querySelectorAll('.bookmarklet-highlight').forEach(el => {
			el.style.outline = '';
			el.classList.remove('bookmarklet-highlight');
		});
	}

	function hoverHandler(e) {
		removeHighlight();
		var target = e.target;
		target.classList.add('bookmarklet-highlight');
		target.style.outline = '2px solid red';
		var classNames = target.className ? target.className : 'No class';
		infoBox.textContent = 'Class Names: ' + classNames;
	}

	let currentTarget = null;
	let highlightingEnabled = true;

	function clickHandler(e) {
		e.preventDefault();
		e.stopPropagation();
		currentTarget = e.target;

		// Disable highlighting when the editor is open
		highlightingEnabled = false;
		document.body.removeEventListener('mouseover', hoverHandler);

		// Show the editor
		editorContainer.style.display = 'flex';
		textarea.value = currentTarget.textContent; // Load the current textContent
		textarea.focus();
	}

	submitButton.addEventListener('click', function() {
		if (currentTarget) {
			currentTarget.textContent = textarea.value; // Apply textContent changes
			textarea.value = ''; // Clear the textarea
			editorContainer.style.display = 'none';
			currentTarget = null;

			// Re-enable highlighting
			highlightingEnabled = true;
			document.body.addEventListener('mouseover', hoverHandler);
		}
	});

	closeButton.addEventListener('click', function() {
		document.body.removeEventListener('mouseover', hoverHandler);
		document.body.removeEventListener('click', clickHandler);
		removeHighlight();
		if (infoBox) infoBox.remove();
		if (editorContainer) editorContainer.remove();
		window.__htmlEditorActive = false;
	});

	textarea.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' && e.shiftKey) {
			e.preventDefault();
			var cursorPos = textarea.selectionStart;
			var textBefore = textarea.value.substring(0, cursorPos);
			var textAfter = textarea.value.substring(cursorPos);
			textarea.value = textBefore + '\n' + textAfter;
			textarea.selectionStart = textarea.selectionEnd = cursorPos + 1; // Move cursor after the new line
		}
	});

	textarea.addEventListener('click', function(e) {
		e.stopPropagation(); // Prevent the click event from bubbling up
	});

	document.body.addEventListener('mouseover', function(e) {
		if (highlightingEnabled) hoverHandler(e);
	});
	document.body.addEventListener('click', clickHandler);

	// Ensure the editor does not open on script injection
	editorContainer.style.display = 'none';

	// Style for highlighted elements
	var style = document.createElement('style');
	style.innerHTML = '.bookmarklet-highlight { outline: 2px solid red; }';
	document.head.appendChild(style);
})();