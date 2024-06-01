// ==UserScript==
// @name         BTT-BetterTouchTool-HEPTABASE V6 - DELAY
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Injects V6 into heptabase.com for BTT/Better Touch Tool Floating Webviews.
// @author       RSM
// @match        https://app.heptabase.com/*
// @grant        GM_addElement
// ==/UserScript==
(function() {
    'use strict';
    // Function to inject the CSS stylesheet into the <head> of the page
    function injectCSS(href) {
        // Create a link element for the stylesheet
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = href;
        // Append the link element to the <head>
        document.head.appendChild(link);
    }
    // Call injectCSS() to trigger the CSS injection with a one-second delay for the last script
    setTimeout(function() {
        injectCSS('https://sm1therz.github.io/code-playground/BTT-heptabase-scripts/BTT-HeptabaseV6.css');
    }, 3000);

    setTimeout(function() {
        injectCSS('https://sm1therz.github.io/code-playground/BTT-heptabase-scripts/BTT-Hepta-Right-Sidebar-2.css');
    }, 3500);

})();


// ==UserScript==
// @name         Inject: Navigation Menu V4 (external Css) - Via Src
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  A script to inject the Nav Menu V4 script - Via src
// @author       Your Name
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?domain=example.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a script element
    var script = document.createElement('script');
    script.src = 'https://sm1therz.github.io/code-playground/Menu-Page-Navigation/scripts/Nav-menu-v4-external-css.js';
    script.type = 'text/javascript';
    script.async = true;

    // Append the script element to the head of the document
    document.head.appendChild(script);
})();








// ==UserScript==
// @name         BTT-BetterTouchTool-HOTKEYS > Page Forward + Page Back
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Adds ability to go forward and backward in webview via keyboard shortcut
// @author       RSM
// @match        *
// ==/UserScript==

document.addEventListener("keydown", (e) => {
  if (e.metaKey && e.key === "]") {
    window.history.forward();
  }
  if (e.metaKey && e.key === "[") {
    window.history.back();
  }
});

// ==UserScript==
// @name         BTT-BetterTouchTool-Zoom
// @namespace    http://yournamespace.com
// @version      1.1
// @description  Adds ability to zoom in, zoom out, and reset zoom in a webview via keyboard shortcuts
// @author       RSM
// @match        *
// ==/UserScript==

document.addEventListener("keydown", (e) => {
  if (e.metaKey && e.key === "=" && !e.shiftKey) { // CMD + "+" (which is actually CMD + "=" on many keyboards)
    document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) + 0.1).toString();
    e.preventDefault();
  }
  if (e.metaKey && e.key === "-") { // CMD + "-"
    document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) - 0.1).toString();
    e.preventDefault();
  }
  if (e.metaKey && e.shiftKey && e.key === "0") { // SHIFT + CMD + "0"
    document.body.style.zoom = "1";
    e.preventDefault();
  }
});





