document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('.link-group').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    this.x = ((this.x || 0) + 1)%2; 
    if(this.x){ 
      this.querySelectorAll('.link-group-children').forEach(target => target.classList.add('children-open'));
      this.querySelectorAll('.toggle-icon').forEach(target => target.classList.add('open'));
      }
      else{ 
      this.querySelectorAll('.link-group-children').forEach(target => target.classList.remove('children-open'));
      this.querySelectorAll('.toggle-icon').forEach(target => target.classList.remove('open'));
      } 
    });
 });
});