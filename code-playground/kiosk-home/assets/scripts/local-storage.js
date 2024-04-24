// Function to save the class states of child elements within .link-group to local storage
function saveClassStates() {
    const classStates = [];

    // Find all .link-group elements on the page
    const linkGroups = document.querySelectorAll('.link-group');

    linkGroups.forEach((group, groupIndex) => {
        // Get all child elements within this .link-group
        const children = group.querySelectorAll('*');

        children.forEach((child, childIndex) => {
            // Check if the child has .open or .children-open class
            const hasOpenClass = child.classList.contains('open');
            const hasChildrenOpenClass = child.classList.contains('children-open');

            // If the child has relevant classes, save its state
            if (hasOpenClass || hasChildrenOpenClass) {
                classStates.push({
                    groupIndex,
                    childIndex,
                    open: hasOpenClass,
                    childrenOpen: hasChildrenOpenClass,
                });
            }
        });
    });

    // Store the collected class states in local storage
    localStorage.setItem('linkGroupChildClassStates', JSON.stringify(classStates));
}

// Function to restore class states from local storage to child elements within .link-group
function loadClassStates() {
    const classStates = JSON.parse(localStorage.getItem('linkGroupChildClassStates'));

    if (classStates) {
        const linkGroups = document.querySelectorAll('.link-group');

        classStates.forEach((state) => {
            const group = linkGroups[state.groupIndex];
            if (group) {
                const children = group.querySelectorAll('*');
                if (children.length > state.childIndex) {
                    const child = children[state.childIndex];

                    // Restore the class states to the child element
                    if (state.open) {
                        child.classList.add('open');
                    } else {
                        child.classList.remove('open');
                    }

                    if (state.childrenOpen) {
                        child.classList.add('children-open');
                    } else {
                        child.classList.remove('children-open');
                    }
                }
            }
        });
    }
}

// Add event listeners to save class states when necessary
document.addEventListener('DOMContentLoaded', () => {
    // Load the saved class states when the page is loaded
    loadClassStates();

    // Optionally, use specific events to trigger the saveClassStates function
    const linkGroups = document.querySelectorAll('.link-group');
    linkGroups.forEach((group) => {
        group.addEventListener('change', saveClassStates); // E.g., on class change
        group.addEventListener('click', saveClassStates); // E.g., on user interaction
    });

    // Save class states before the page unloads
    window.addEventListener('beforeunload', saveClassStates);
});