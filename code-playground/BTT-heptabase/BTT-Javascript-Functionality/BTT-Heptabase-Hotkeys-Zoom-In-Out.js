// ==UserScript==
// @name         BTT-BetterTouchTool-Zoom
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Adds ability to zoom in and out in a webview via keyboard shortcut
// @author       RSM
// @match        *
// ==/UserScript==

document.addEventListener("keydown", (e) => {
    if (e.metaKey && e.key === "=") { // CMD + "+" (which is actually CMD + "=" on many keyboards)
        document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) + 0.1).toString();
        e.preventDefault();
    }
    if (e.metaKey && e.key === "-") { // CMD + "-"
        document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) - 0.1).toString();
        e.preventDefault();
    }
});