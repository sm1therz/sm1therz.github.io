(function () {
  // Easily editable: add/remove URL patterns here
  const URL_PATTERNS = [
    'card',
    '/card/',
    '/card-library',
    '/chat'
  ];

  // Easily editable: add/remove stylesheets here
  const STYLESHEETS = [
    {
      id: 'editor-colors',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-2-editor-colors-essentials.css' 
    },
    {
      id: 'editor-embeds',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-embeds.css' 
    },
    {
      id: 'editor-highlights',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-6-highlights-essentials.css' 
    },
    {
      id: 'editor-tables',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-tables-essentials' 
    },
    {
      id: 'note-code-blocks',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-7-codeblock-essentials.css'
    }
  ];

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