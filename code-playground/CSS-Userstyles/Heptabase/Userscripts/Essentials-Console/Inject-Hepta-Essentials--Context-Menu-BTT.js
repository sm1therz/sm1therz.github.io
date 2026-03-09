//! CONTEXT MENU for BTT
(function() {
  // Easily editable: add/remove URL patterns here
  const URL_PATTERNS = [
    'card',
    '/card/',
    '/card-library',
    '/chat',
    '/journal',
    '/whiteboard',
    '/inbox'
  ];
  


  // Easily editable: add/remove stylesheets here
  const STYLESHEETS = [{
    id: 'context-menu-for-btt',
    href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-popup-0-context-menu-for-BTT.css'
  }];

  function createStylesheetLink(id, href) {
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
  }

  function addStyles() {
    STYLESHEETS.forEach(style => {
      if (!document.getElementById(style.id)) {
        createStylesheetLink(style.id, style.href);
      }
    });
  }

  function removeStyles() {
    STYLESHEETS.forEach(style => {
      const el = document.getElementById(style.id);
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
  }

  function shouldApplyStyles() {
    const href = window.location.href || '';
    return URL_PATTERNS.some(pattern => href.includes(pattern));
  }

  function updateStyleForLocation() {
    if (shouldApplyStyles()) {
      addStyles();
    } else {
      removeStyles();
    }
  }

  // Run once for the current URL
  updateStyleForLocation();

  // Watch for URL changes in this SPA (same pattern as previous scripts)
  let lastHref = window.location.href;
  setInterval(() => {
    const currentHref = window.location.href;
    if (currentHref !== lastHref) {
      lastHref = currentHref;
      updateStyleForLocation();
    }
  }, 500);
})();