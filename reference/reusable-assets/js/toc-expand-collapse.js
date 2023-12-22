document.addEventListener('DOMContentLoaded', function () {
	// Select all the ul elements that are immediate siblings of li elements within any ul under .toc-wrap
	var childLists = document.querySelectorAll('.toc-wrap ul li + ul');

	childLists.forEach(function (childList) {
		// Get the preceding sibling li (the parent list item)
		var parentLi = childList.previousElementSibling;

		// Create a button element
		var button = document.createElement('button');
		button.classList.add('toc-toggle');

		// Initially set the state of the child list and button text
		if (childList.classList.contains('toc-child-open')) {
			button.textContent = '-'; // Open state
		} else {
			childList.classList.add('toc-child-closed');
			button.textContent = '+'; // Closed state
		}

		// Place button as the first element inside the parent li
		parentLi.insertBefore(button, parentLi.firstChild);

		// Add click event to each button
		button.addEventListener('click', function (event) {
			// Prevent default link behavior
			event.preventDefault();
			// Toggle the classes for child ul
			if (childList.classList.contains('toc-child-closed')) {
				childList.classList.remove('toc-child-closed');
				childList.classList.add('toc-child-open');
				button.textContent = '-'; // Change button text to '-'
			} else {
				childList.classList.remove('toc-child-open');
				childList.classList.add('toc-child-closed');
				button.textContent = '+'; // Change button text to '+'
			}
		});
	});
});

// CSS for the button and classes
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
	.toc-child-open {
		display: block; /* Show when open */
	}
	.toc-child-closed {
		display: none; /* Hide when closed */
	}
`;
document.getElementsByTagName('head')[0].appendChild(style);
