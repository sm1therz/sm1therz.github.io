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
