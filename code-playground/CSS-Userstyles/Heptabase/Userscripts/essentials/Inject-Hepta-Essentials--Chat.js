//! CHAT
(function() {
  const LINK_ID = 'chat-essentials-style';
  const HREF = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Heptabase/css/individual-css/view-chat-essentials.css';

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
    return (
      href.includes('/card/') ||
      href.includes('/chat') ||
      href.includes('isOpeningRightSidebar') ||
      href.includes('isOpeningGlobalSidebar')
    );
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
