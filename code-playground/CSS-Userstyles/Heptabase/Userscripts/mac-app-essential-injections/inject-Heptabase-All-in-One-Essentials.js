(function() {
  'use strict';
  function injectCSS(href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    // Append the link element to the <head>
    document.head.appendChild(link);
  }
  // CHAT > ????
  setTimeout(function() {
    injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-chat.css');
  }, 1000);
  // CARD LIBRARY > ???
  setTimeout(function() {
    injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-chat.css');
  }, 1000);

})();