// ==UserScript==
// @name         Heptabase CSS Loader (All Modules)
// @namespace    sm1therz-heptabase
// @version      1.0.0
// @description  Injects modular CSS files by URL pattern (SPA-safe)
// @match        *://*.heptabase.com/*
// @match        *://heptabase.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // ---------- Shared helpers (keeps your existing modules working as-is) ----------
  function appendLinkWhenHeadReady(link) {
    if (document.head) {
      document.head.appendChild(link);
      return;
    }

    const onReady = () => {
      if (document.head && !document.getElementById(link.id)) {
        document.head.appendChild(link);
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', onReady, { once: true });
    } else {
      // fallback
      requestAnimationFrame(onReady);
    }
  }

  function createStylesheetLink(id, href) {
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    appendLinkWhenHeadReady(link);
  }

  function startSpaWatcher(updateFn, interval = 500) {
    // initial run
    updateFn();

    // polling watcher (same behavior as yours)
    let lastHref = window.location.href;
    setInterval(() => {
      const currentHref = window.location.href;
      if (currentHref !== lastHref) {
        lastHref = currentHref;
        updateFn();
      }
    }, interval);

    // extra SPA hooks (helps with pushState-heavy apps)
    const wrapHistory = (method) => {
      const original = history[method];
      history[method] = function () {
        const result = original.apply(this, arguments);
        updateFn();
        return result;
      };
    };
    wrapHistory('pushState');
    wrapHistory('replaceState');
    window.addEventListener('popstate', updateFn);
  }

  //! CONTEXT MENU for BTT
  (function() {
    const URL_PATTERNS = [
      'card',
      '/card/',
      '/card-library',
      '/chat',
      '/journal',
      '/whiteboard',
      '/inbox'
    ];

    const STYLESHEETS = [{
      id: 'context-menu-for-btt',
      href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-popup-0-context-menu-for-BTT.css'
    }];

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
      if (shouldApplyStyles()) addStyles();
      else removeStyles();
    }

    startSpaWatcher(updateStyleForLocation);
  })();

  //! COLORS, NOTES, EMBEDS, CODE BLOCKS, TABLES, HIGHLIGHTS
  (function() {
    const URL_PATTERNS = [
      'card',
      '/card/',
      '/card-library',
      '/chat',
      '/journal',
      '/inbox'
    ];

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
        href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-tables-essentials.css'
      },
      {
        id: 'note-code-blocks',
        href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-7-codeblock-essentials.css'
      }
    ];

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
      if (shouldApplyStyles()) addStyles();
      else removeStyles();
    }

    startSpaWatcher(updateStyleForLocation);
  })();

  //! TASK / INBOX
  (function() {
    const LINK_ID = 'inbox-style';
    const HREF = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-0-inbox+tasks.css';

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
      if (shouldApplyStyles()) addStyle();
      else removeStyle();
    }

    startSpaWatcher(updateStyleForLocation);
  })();

  //! CARD LIBRARY
  (function() {
    const LINK_ID_1 = 'card-library-style-1';
    const LINK_ID_2 = 'card-library-style-2';

    const HREF_1 = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-card-library.css';
    const HREF_2 = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-card-library-mac-app-overrides.css';

    let secondLinkTimeoutId = null;

    function addStyles() {
      if (!document.getElementById(LINK_ID_1)) {
        createStylesheetLink(LINK_ID_1, HREF_1);
      }

      if (!document.getElementById(LINK_ID_2) && secondLinkTimeoutId === null) {
        secondLinkTimeoutId = setTimeout(() => {
          if (!document.getElementById(LINK_ID_2)) {
            createStylesheetLink(LINK_ID_2, HREF_2);
          }
          secondLinkTimeoutId = null;
        }, 0);
      }
    }

    function removeStyles() {
      [LINK_ID_1, LINK_ID_2].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });

      if (secondLinkTimeoutId !== null) {
        clearTimeout(secondLinkTimeoutId);
        secondLinkTimeoutId = null;
      }
    }

    function updateStyleForLocation() {
      const href = window.location.href || '';
      if (href.includes('/card-library')) addStyles();
      else removeStyles();
    }

    startSpaWatcher(updateStyleForLocation);
  })();

  //! CHAT
  (function() {
    const LINK_ID = 'chat-essentials-style';
    const HREF = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-chat-essentials.css';

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
      return (
        href.includes('/card/') ||
        href.includes('/chat') ||
        href.includes('isOpeningRightSidebar') ||
        href.includes('isOpeningGlobalSidebar')
      );
    }

    function updateStyleForLocation() {
      if (shouldApplyStyles()) addStyle();
      else removeStyle();
    }

    startSpaWatcher(updateStyleForLocation);
  })();

})();