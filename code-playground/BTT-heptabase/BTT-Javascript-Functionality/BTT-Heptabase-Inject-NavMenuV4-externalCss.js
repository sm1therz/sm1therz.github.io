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