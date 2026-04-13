// ==UserScript==
// @name         Heptabase CSS Loader (Enhanced Console Version)
// @namespace    sm1therz-heptabase
// @version      1.1.0
// @description  Injects modular CSS files by URL pattern with regex support (SPA-safe). Based on Console Version, Current Functionality.
// @match        *://*.heptabase.com/*
// @match        *://heptabase.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // ---------- Shared helpers (from Userscript Version) ----------
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

    // polling watcher
    let lastHref = window.location.href;
    setInterval(() => {
      const currentHref = window.location.href;
      if (currentHref !== lastHref) {
        lastHref = currentHref;
        updateFn();
      }
    }, interval);

    // SPA hooks
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

  //! CONTEXT MENU for BTT (from Console Version)
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

  //! COLORS, NOTES, EMBEDS, CODE BLOCKS, TABLES, HIGHLIGHTS (from Console Version - with regex support)
  (function() {
    const URL_PATTERNS = [
      'card',
      '/card/',
      '/card-library',
      '/chat',
      '/journal',
      '/inbox',
      '/whiteboard/.*[?&]card='
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
        id: 'editor-tables-essentials',
        href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-tables-essentials.css'
      },
      {
        id: 'editor-tables-border-radius',
        href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-tables-border-radius.css'
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
      return URL_PATTERNS.some(pattern => {
        // Handle regex patterns (strings containing special regex characters)
        if (pattern.includes('.*') || pattern.includes('[?&]')) {
          const regex = new RegExp(pattern);
          return regex.test(href);
        }
        // Handle simple string patterns
        return href.includes(pattern);
      });
    }

    function updateStyleForLocation() {
      if (shouldApplyStyles()) addStyles();
      else removeStyles();
    }

    startSpaWatcher(updateStyleForLocation);
  })();

  //! TASK / INBOX (from Console Version)
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

  //! CARD LIBRARY (from Console Version - with timeout logic)
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
        }, 0); // 0ms delay (same as console version)
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

  //! CHAT NEW (from Console Version)
  (function() {
    const URL_PATTERNS = [
      '/card/',
      '/chat',
      'isOpeningRightSidebar',
      'isOpeningGlobalSidebar'
    ];

    const STYLESHEETS = [
      {
        id: 'chat-essentials-style',
        href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-chat-essentials.css'
      },
      {
        id: 'chat-editor-tables',
        href: 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-tables-essentials.css'
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

  //! WHITEBOARD - COMBINED (from Console Version - NEW MODULE)
  (function() {
    const URL_PATTERNS = [
      '/whiteboard'
    ];

    const STYLESHEETS = [
      {
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

})();