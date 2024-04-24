
// when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
 // on .toggle-icon click
 document.querySelectorAll('.toggle-icon').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    this.x = ((this.x || 0) + 1)%2; 
    if(this.x){ // 1st click
      this.closest('.link-group-parent').classList.add('toggle-open');
      document.querySelectorAll('.link-group-children')
      .forEach(target => [...target.parentElement.children].filter(c => c === target)
      .forEach(sibling => sibling.classList.add('child-open')));
      }
      else{ // 2nd click (toggle)
      this.closest('.link-group-parent').classList.remove('toggle-open');
      document.querySelectorAll('.link-group-children')
      .forEach(target => [...target.parentElement.children].filter(c => c === target)
      .forEach(sibling => sibling.classList.remove('child-open')));
      } 
    });
 });
});