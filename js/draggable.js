(function(){

  var v = '1.8';

  if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement('script');
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/' + v + '/jquery.min.js';
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
        done = true;
        loadDraggable();
      }
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    loadDraggable();
  }
  
  function loadDraggable() {
    var done = false;
    var script = document.createElement('script');
    script.src = 'http://code.jquery.com/ui/1.10.3/jquery-ui.js';
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
        done = true;
        initMyBookmarklet(); 
      }
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  function draggThis(eve){
    var selectorString = $('#selectorInput').val();
    if(!selectorString)return;
    $(selectorString).draggable();
  }

  function initMyBookmarklet() {
    (window.draggableBookmarklet = function() {
      $('<div id=dndrQueryForm style="font-family:sans-serif;width:425px;padding:5px 10px;border-bottom-right-radius: 5px;border-bottom-left-radius: 5px;background:#f0f0f0;position:fixed;top:0px;left:50%;border:1px solid #999;border-top:none;-webkit-box-shadow:2px 2px 4px rgba(0, 0, 0, 0.3);-moz-box-shadow:2px 2px 4px rgba(0, 0, 0, 0.3);box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);z-index:990;"><label>selector: <strong>$(&apos;</strong><input type=text id=selectorInput><strong>&apos;).</strong></label> <button id=makeElementsDnDble style="float: right;">make Draggable!</button></div>').appendTo('body').on('click','#makeElementsDnDble',draggThis);
      $('#dndrQueryForm').draggable({ axis: 'x', addClasses: false });
      $('#selectorInput').keyup(function(eve){
        if(eve.which != 13)return;
        draggThis(eve);
      }).focus();
    })();
  }

})();
