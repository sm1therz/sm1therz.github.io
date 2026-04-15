// ==UserScript==
// @name         iCab Mobile - Inject CSS - External - Works
// @namespace    http://tampermonkey.net/
// @version      2025-04-05
// @description  try to take over the world!
// @author       You
// @match        https://chatgpt.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @grant        none
// ==/UserScript==

javascript: (function() {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://sm1therz.github.io/code-playground/CSS-Userstyles/Z-Userscripts/Inject-CSS-Methods/css/inject-dummy-styles.css';
  (document.head || document.documentElement).appendChild(link);
})();