document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-button').forEach(trigger => {
    trigger.addEventListener('click', function() {
      this.x = ((this.x || 0) + 1) % 2;

      const linkGroup = this.closest('.link-group'); // Get the closest link-group
      const children = linkGroup.querySelector('.link-group-children'); // Find the link-group-children in this link-group
      const icons = this.querySelectorAll('.toggle-icon'); // Find toggle-icons within the toggle-button

      if (this.x) {
        // Add classes to link-group-children and toggle-icons
        if (children) {
          children.classList.add('children-open');
        }
        icons.forEach(target => target.classList.add('open'));
      } else {
        // Remove classes from link-group-children and toggle-icons
        if (children) {
          children.classList.remove('children-open');
        }
        icons.forEach(target => target.classList.remove('open'));
      }
    });
  });
});