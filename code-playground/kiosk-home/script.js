document.addEventListener("DOMContentLoaded", function () {
  const toggleTitles = document.querySelectorAll(".toggle-title");

  toggleTitles.forEach((toggleTitle, index) => {
    toggleTitle.addEventListener("click", function () {
      const toggleChild = toggleTitle.nextElementSibling;
      const isOpen = toggleTitle.classList.toggle("title-open");
      
      if (isOpen) {
        toggleChild.classList.add("child-open");
      } else {
        toggleChild.classList.remove("child-open");
      }
      
      // Save state to local storage
      localStorage.setItem(`toggle${index}`, isOpen ? "open" : "closed");
    });
    
    // Load state from local storage
    const state = localStorage.getItem(`toggle${index}`);
    if (state === "open") {
      toggleTitle.classList.add("title-open");
      toggleTitle.nextElementSibling.classList.add("child-open");
    }
  });
});