(function () {
  'use strict';

  // ---------- Helpers ----------

  function createStylesheetLink(id, href) {
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    (document.head || document.documentElement).appendChild(link);
  }

  // ---------- Inject all stylesheets ----------

  function injectAllStyles() {
    createStylesheetLink('wf-dark-theme',        'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/2--Workflowyy12--Dark-theme.css');
    createStylesheetLink('wf-base',              'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/1--Workflowyy12--Base.css');
    createStylesheetLink('wf-ibm',               'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/3--Workflowyy12--IBM.css');

    // Board components
    createStylesheetLink('wf-board-root-colors',        'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-4-Board-Root-Colors');
    createStylesheetLink('wf-board-header-columns',     'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-4-Board-Root-Header-Columns.css');
    createStylesheetLink('wf-boards-in-comments',       'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-6-Boards-In-Comments.css');
    createStylesheetLink('wf-comment-colors',           'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-7-Comment-Colors.css');

    // Dashboard components
    createStylesheetLink('wf-dashboard-width',               'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-5-Dashboard-Width.css');
    createStylesheetLink('wf-dashboard-colors',              'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-9-Dashboard-Colors.css');
    createStylesheetLink('wf-dashboard-paragraph-hide',      'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-8-Dashboard-Paragraph-Hide-Expand.css');

    // Misc
    createStylesheetLink('wf-note-line-clamp',         'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-12-Note-Line-Clamp.css');
    createStylesheetLink('wf-floatbrowser-overrides',  'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-15-Floatbrowser-overrides.css');
  }

  // ---------- SPA watcher (re-inject on navigation) ----------

  function startSpaWatcher() {
    injectAllStyles();

    let lastHref = window.location.href;
    setInterval(() => {
      const currentHref = window.location.href;
      if (currentHref !== lastHref) {
        lastHref = currentHref;
        injectAllStyles();
      }
    }, 500);

    const wrapHistory = (method) => {
      const original = history[method];
      history[method] = function () {
        const result = original.apply(this, arguments);
        injectAllStyles();
        return result;
      };
    };
    wrapHistory('pushState');
    wrapHistory('replaceState');
    window.addEventListener('popstate', injectAllStyles);
  }

  // ---------- Start ----------
  startSpaWatcher();
})();
