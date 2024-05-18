// ==UserScript==
// @name         Inject External Script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Injects an external script into the head of every page
// @author       Your Name
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?domain=example.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a script element
    var script = document.createElement('script');
    script.src = 'https://sm1therz.github.io/code-playground/Menu-Page-Navigation/scripts/Nav-menu-v4.js';
    script.type = 'text/javascript';
    script.async = true;

    // Append the script element to the head of the document
    document.head.appendChild(script);
})();
