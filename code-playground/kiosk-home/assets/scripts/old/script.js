document.addEventListener("DOMContentLoaded", function () {
  const linkGroups = document.querySelectorAll(".link-group");

  // Function to toggle classes for a specific link-group
  function toggleClasses(event) {
    const linkGroup = event.currentTarget.closest(".link-group");

    const parent = linkGroup.querySelector(".link-group-parent");
    const children = linkGroup.querySelector(".link-group-children");

    // Toggle the class based on its current state
    const isOpen = parent.classList.contains("title-open");

    if (isOpen) {
      parent.classList.remove("title-open");
      children.classList.remove("child-open");
    } else {
      parent.classList.add("title-open");
      children.classList.add("child-open");
    }

    // Save the state in local storage for persistence
    const groupIndex = Array.from(linkGroups).indexOf(linkGroup);
    localStorage.setItem(`linkGroupState-${groupIndex}`, !isOpen);
  }

  // Initialize the state of each link-group based on local storage
  linkGroups.forEach((linkGroup, index) => {
    const parent = linkGroup.querySelector(".link-group-parent");
    const children = linkGroup.querySelector(".link-group-children");

    // Restore the previous state from local storage
    const storedState = localStorage.getItem(`linkGroupState-${index}`);
    if (storedState === "true") {
      parent.classList.add("title-open");
      if (children) {
        children.classList.add("child-open");
      }
    }

    // Add event listeners to .link-group-parent and .toggle-icon within this specific link-group
    parent.addEventListener("click", toggleClasses);
    const toggleIcon = parent.querySelector(".toggle-icon");
    if (toggleIcon) {
      toggleIcon.addEventListener("click", toggleClasses);
    }
  });
});