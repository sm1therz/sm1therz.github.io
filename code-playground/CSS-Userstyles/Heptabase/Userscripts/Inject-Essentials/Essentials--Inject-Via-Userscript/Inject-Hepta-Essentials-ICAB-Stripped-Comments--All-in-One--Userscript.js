(function () {
  'use strict';

  // ---------- Global registry and helpers ----------
  const styleGroups = [];

  function registerStyleGroup(shouldApply, addStyles, removeStyles) {
    styleGroups.push({ shouldApply, addStyles, removeStyles });
  }

  function createStylesheetLink(id, href) {
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    (document.head || document.documentElement).appendChild(link);
  }

  function startGlobalSpaWatcher() {
    function updateAllGroups() {
      styleGroups.forEach(group => {
        if (group.shouldApply()) group.addStyles();
        else group.removeStyles();
      });
    }

    updateAllGroups();

    let lastHref = window.location.href;
    setInterval(() => {
      const currentHref = window.location.href;
      if (currentHref !== lastHref) {
        lastHref = currentHref;
        updateAllGroups();
      }
    }, 500);

    const wrapHistory = (method) => {
      const original = history[method];
      history[method] = function () {
        const result = original.apply(this, arguments);
        updateAllGroups();
        return result;
      };
    };
    wrapHistory('pushState');
    wrapHistory('replaceState');
    window.addEventListener('popstate', updateAllGroups);
  }

  // ---------- Section registrations ----------

  //! CONTEXT MENU for BTT (from Console Version)
  registerStyleGroup(
    () => {
      const href = window.location.href || '';
      return ['card', '/card/', 
      '/card-library', '/chat', '/journal', '/whiteboard', '/inbox'].some(pattern => href.includes(pattern));
    },
    () => {
      createStylesheetLink('context-menu-for-btt', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-popup-0-context-menu-for-BTT.css');
    },
    () => {
      const el = document.getElementById('context-menu-for-btt');
      if (el && el.parentNode) el.parentNode.removeChild(el);
    }
  );

  //! COLORS, NOTES, EMBEDS, CODE BLOCKS, TABLES, HIGHLIGHTS (from Console Version - with regex support)
  registerStyleGroup(
    () => {
      const href = window.location.href || '';
      const patterns = ['card', '/card/', '/card-library', '/chat', '/journal', '/inbox', '/whiteboard/.*[?&]card='];
      return patterns.some(pattern => {
        if (pattern.includes('.*') || pattern.includes('[?&]')) {
          try {
            const regex = new RegExp(pattern);
            return regex.test(href);
          } catch (e) {
            return href.includes(pattern);
          }
        }
        return href.includes(pattern);
      });
    },
    () => {
      createStylesheetLink('editor-colors', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-2-editor-colors-essentials.css');
      createStylesheetLink('editor-embeds', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-embeds.css');
      createStylesheetLink('editor-highlights', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-6-highlights-essentials.css');
      createStylesheetLink('editor-tables-essentials', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-tables-essentials.css');
      createStylesheetLink('editor-tables-border-radius', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-tables-border-radius.css');
      createStylesheetLink('editor-tables-backgrounds', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-tables-background.css');
      createStylesheetLink('note-code-blocks', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-7-codeblock-essentials.css');
    },
    () => {
      ['editor-colors', 'editor-embeds', 'editor-highlights', 'editor-tables-essentials', 'editor-tables-backgrounds', 'editor-tables-border-radius', 'note-code-blocks'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.parentNode) el.parentNode.removeChild(el);
      });
    }
  );

  //! TASK / INBOX (from Console Version)
  registerStyleGroup(
    () => {
      const href = window.location.href || '';
      return href.includes('/inbox');
    },
    () => {
      createStylesheetLink('inbox-style', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-0-inbox+tasks.css');
    },
    () => {
      const el = document.getElementById('inbox-style');
      if (el && el.parentNode) el.parentNode.removeChild(el);
    }
  );

  //! CARD LIBRARY (from Console Version - with timeout logic)
  let cardLibrarySecondLinkTimeoutId = null;
  registerStyleGroup(
    () => {
      const href = window.location.href || '';
      return href.includes('/card-library');
    },
    () => {
      createStylesheetLink('card-library-style-1', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-card-library.css');
      if (!document.getElementById('card-library-style-2') && cardLibrarySecondLinkTimeoutId === null) {
        cardLibrarySecondLinkTimeoutId = setTimeout(() => {
          createStylesheetLink('card-library-style-2', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-card-library-mac-app-overrides.css');
          cardLibrarySecondLinkTimeoutId = null;
        }, 0);
      }
    },
    () => {
      ['card-library-style-1', 'card-library-style-2'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.parentNode) el.parentNode.removeChild(el);
      });
      if (cardLibrarySecondLinkTimeoutId !== null) {
        clearTimeout(cardLibrarySecondLinkTimeoutId);
        cardLibrarySecondLinkTimeoutId = null;
      }
    }
  );

  //! CHAT NEW (from Console Version)
  registerStyleGroup(
    () => {
      const href = window.location.href || '';
      return ['/card/', '/chat', 'isOpeningRightSidebar', 'isOpeningGlobalSidebar'].some(pattern => href.includes(pattern));
    },
    () => {
      createStylesheetLink('chat-essentials-style', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-chat-essentials.css');
      createStylesheetLink('chat-editor-tables', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/note-3-editor-tables-essentials.css');
    },
    () => {
      ['chat-essentials-style', 'chat-editor-tables'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.parentNode) el.parentNode.removeChild(el);
      });
    }
  );

  //! WHITEBOARD - COMBINED (from Console Version - NEW MODULE)
  registerStyleGroup(
    () => {
      const href = window.location.href || '';
      return href.includes('/whiteboard');
    },
    () => {
      createStylesheetLink('whiteboard-essentials-style', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-essentials.css');
      createStylesheetLink('whiteboard-instance-titles', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-2-Whiteboard-Instance-Titles-Essentials.css');
      createStylesheetLink('whiteboard-sections-3-1-essentials', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-2-Sections-3-1-Essentials.css');
      createStylesheetLink('whiteboard-sections-3-1-essentials-full-titles', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-2-Sections-3-2-Essentials-Full-Titles.css');
      createStylesheetLink('whiteboard-tables-background', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-whiteboard-min-2-Sections-3-2-Essentials-Full-Titles.css');
    },
    () => {
      ['whiteboard-essentials-style', 'whiteboard-instance-titles', 'whiteboard-sections-3-1-essentials', 'whiteboard-sections-3-1-essentials-full-titles', 'whiteboard-tables-background'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.parentNode) el.parentNode.removeChild(el);
      });
    }
  );

  // ---------- Start the single SPA watcher ----------
  startGlobalSpaWatcher();
})();