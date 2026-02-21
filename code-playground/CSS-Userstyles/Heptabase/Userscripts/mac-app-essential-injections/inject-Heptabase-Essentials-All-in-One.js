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
  // CARD LIBRARY > ESSENTIALS
  setTimeout(function() {
    injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-card-library.css');
  }, 1000);
  // CARD LIBRARY > MAC APP OVERRIDES
  setTimeout(function() {
    injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-card-library-mac-app-overrides');
  }, 1500);
  // CHAT > ESSENTIALS
  setTimeout(function() {
    injectCSS('https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-chat-essentials.css');
  }, 1500);

})();