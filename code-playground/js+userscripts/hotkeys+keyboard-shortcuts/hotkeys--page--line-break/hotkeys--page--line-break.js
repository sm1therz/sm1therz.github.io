// CREATE LINE BREAK
document.addEventListener('keydown', function(event) {
	if (event.metaKey && event.shiftKey && event.code === 'Enter') {
		event.preventDefault();
		event.stopPropagation();
		const selection = window.getSelection();
		if (selection.rangeCount > 0) {
			const range = selection.getRangeAt(0);
			const br = document.createElement('br');
			range.deleteContents();
			range.insertNode(br);
			range.setStartAfter(br);
			range.setEndAfter(br);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}
}, true);
