(function () {
  'use strict';

  // ---------- Helpers ----------

  // Fetch a CSS file and inject it as an inline <style> tag.
  // This bypasses CSP style-src restrictions that block external <link> stylesheets,
  // because fetch() is governed by connect-src and inline <style> needs only
  // style-src 'unsafe-inline' (which every SPA requires).
  function injectStyleFromURL(id, url) {
    if (document.getElementById(id)) return;
    fetch(url)
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.text();
      })
      .then(function (css) {
        // Avoid re-creating if the element appeared during the async fetch
        if (document.getElementById(id)) return;
        var style = document.createElement('style');
        style.id = id;
        style.type = 'text/css';
        style.textContent = css;
        (document.head || document.documentElement).appendChild(style);
      })
      .catch(function (err) {
        console.warn('[Workflowy Inject] Failed to load ' + url, err);
      });
  }

  // ---------- Inject all stylesheets ----------

  var STYLES = [
    ['wf-dark-theme',               'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/2--Workflowyy12--Dark-theme.css'],
    ['wf-base',                     'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/1--Workflowyy12--Base.css'],
    ['wf-ibm',                      'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/3--Workflowyy12--IBM.css'],
    // Board components
    ['wf-board-root-colors',        'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-4-Board-Root-Colors'],
    ['wf-board-header-columns',     'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-4-Board-Root-Header-Columns.css'],
    ['wf-boards-in-comments',       'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-6-Boards-In-Comments.css'],
    ['wf-comment-colors',           'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-7-Comment-Colors.css'],
    // Dashboard components
    ['wf-dashboard-width',          'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-5-Dashboard-Width.css'],
    ['wf-dashboard-colors',         'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-9-Dashboard-Colors.css'],
    ['wf-dashboard-paragraph-hide', 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-8-Dashboard-Paragraph-Hide-Expand.css'],
    // Misc
    ['wf-note-line-clamp',          'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-12-Note-Line-Clamp.css'],
    ['wf-floatbrowser-overrides',   'https://sm1therz.github.io/code-playground/CSS-Userstyles/Workflowy-V12-Desktop/Individual-Components/workflowy-15-Floatbrowser-overrides.css']
  ];

  function injectAllStyles() {
    STYLES.forEach(function (pair) {
      injectStyleFromURL(pair[0], pair[1]);
    });
  }

  // ---------- SPA watcher (re-inject on navigation) ----------

  function startSpaWatcher() {
    injectAllStyles();

    var lastHref = window.location.href;
    setInterval(function () {
      var currentHref = window.location.href;
      if (currentHref !== lastHref) {
        lastHref = currentHref;
        injectAllStyles();
      }
    }, 500);

    function wrapHistory(method) {
      var original = history[method];
      history[method] = function () {
        var result = original.apply(this, arguments);
        injectAllStyles();
        return result;
      };
    }
    wrapHistory('pushState');
    wrapHistory('replaceState');
    window.addEventListener('popstate', injectAllStyles);
  }

  // ---------- Start ----------
  startSpaWatcher();
})();
