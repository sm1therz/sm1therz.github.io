// when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
 // on .toc-wrap click
 document.querySelectorAll('.toc-wrap').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    this.x = ((this.x || 0) + 1)%2; 
    if(this.x){ // 1st click
      document.querySelectorAll('#toc').forEach(target => target.classList.add('toc-mobile-open'));
      }
      else{ // 2nd click (toggle)
      document.querySelectorAll('#toc').forEach(target => target.classList.remove('toc-mobile-open'));
      } 
    });
 });
});