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

//! COLORS, NOTES, EMBEDS, CODE BLOCKS, TABLES, HIGHLIGHTS
(function() {
  // Easily editable: add/remove URL patterns here
  const URL_PATTERNS = [
    'card',
    '/card/',
    '/card-library',
    '/chat',
    '/journal',
    '/inbox'
  ];

  // Easily editable: add/remove stylesheets here
  const STYLESHEETS = [{
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
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-tables-essentials.css'
    },
    {
      id: 'note-code-blocks',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-7-codeblock-essentials.css'
    },
    {
      id: 'note-lists-square-to-numbered',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-2-editor-lists-square-to-numbered.css'
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

//! TASK / INBOX
(function() {
  const LINK_ID = 'inbox-style';
  const HREF = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-0-inbox+tasks.css';

  function createStylesheetLink(id, href) {
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
  }

  function addStyle() {
    if (!document.getElementById(LINK_ID)) {
      createStylesheetLink(LINK_ID, HREF);
    }
  }

  function removeStyle() {
    const el = document.getElementById(LINK_ID);
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }

  function shouldApplyStyles() {
    const href = window.location.href || '';
    return href.includes('/inbox');
  }

  function updateStyleForLocation() {
    if (shouldApplyStyles()) {
      addStyle();
    } else {
      removeStyle();
    }
  }

  // Run once for the current URL
  updateStyleForLocation();

  // Watch for URL changes in this SPA
  let lastHref = window.location.href;
  setInterval(() => {
    const currentHref = window.location.href;
    if (currentHref !== lastHref) {
      lastHref = currentHref;
      updateStyleForLocation();
    }
  }, 500);
})();

//! CARD LIBRARY
(function() {
  const LINK_ID_1 = 'card-library-style-1';
  const LINK_ID_2 = 'card-library-style-2';

  const HREF_1 = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-card-library.css';
  const HREF_2 = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-card-library-mac-app-overrides.css';

  let secondLinkTimeoutId = null;

  function createStylesheetLink(id, href) {
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
  }

  function addStyles() {
    // First stylesheet: inject immediately if not present
    if (!document.getElementById(LINK_ID_1)) {
      createStylesheetLink(LINK_ID_1, HREF_1);
    }

    // Second stylesheet: inject after 1 second, if not already present
    if (!document.getElementById(LINK_ID_2) && secondLinkTimeoutId === null) {
      secondLinkTimeoutId = setTimeout(() => {
        // Re-check before creating, in case it was added meanwhile
        if (!document.getElementById(LINK_ID_2)) {
          createStylesheetLink(LINK_ID_2, HREF_2);
        }
        secondLinkTimeoutId = null;
      }, 0000); // 1 second delay
    }
  }

  function removeStyles() {
    [LINK_ID_1, LINK_ID_2].forEach(id => {
      const el = document.getElementById(id);
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });

    // Cancel pending delayed injection, if any
    if (secondLinkTimeoutId !== null) {
      clearTimeout(secondLinkTimeoutId);
      secondLinkTimeoutId = null;
    }
  }

  function updateStyleForLocation() {
    const href = window.location.href || '';
    if (href.includes('/card-library')) {
      addStyles();
    } else {
      removeStyles();
    }
  }

  // Run once for the current URL
  updateStyleForLocation();

  // Watch for URL changes in this SPA (same pattern that worked for you)
  let lastHref = window.location.href;
  setInterval(() => {
    const currentHref = window.location.href;
    if (currentHref !== lastHref) {
      lastHref = currentHref;
      updateStyleForLocation();
    }
  }, 500);
})();
//! CHAT NEW
(function() {
  // Easily editable: add/remove URL patterns here
  const URL_PATTERNS = [
    '/card/',
    '/chat',
    'isOpeningRightSidebar',
    'isOpeningGlobalSidebar'
  ];

  // Easily editable: add/remove stylesheets here
  const STYLESHEETS = [{
      id: 'chat-essentials-style',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-chat-essentials.css'
    },
    {
      id: 'chat-editor-tables',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-tables-essentials.css'
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

//! WHITEBOARD - COMBINED
(function() {
  // Easily editable: add/remove URL patterns here
  const URL_PATTERNS = [
    '/whiteboard'
  ];

  // Easily editable: add/remove stylesheets here
  const STYLESHEETS = [{
      id: 'whiteboard-essentials-style',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-essentials.css'
    },
    {
      id: 'whiteboard-instance-titles',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-2-Whiteboard-Instance-Titles-Essentials.css'
    },
    {
      id: 'whiteboard-sections-3-1-essentials',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-2-Sections-3-1-Essentials.css'
    },
    {
      id: 'whiteboard-sections-3-1-essentials-full-titles',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-2-Sections-3-2-Essentials-Full-Titles.css'
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