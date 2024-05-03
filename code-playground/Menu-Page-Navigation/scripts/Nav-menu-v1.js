// ==UserScript==
// @name         Navigation Menu
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add a navigation menu with "Previous" and "Next" buttons to every page
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create the menu div
    const menu = document.createElement('div');
    menu.id = 'rs-nav-menu';
    menu.style.position = 'fixed';
    menu.style.bottom = '10px';
    menu.style.right = '10px';
    menu.style.padding = '10px';
    menu.style.backgroundColor = '#f1f1f1';
    menu.style.border = '1px solid #ccc';
    menu.style.borderRadius = '5px';

    // Create the "Previous" button
    const backButton = document.createElement('button');
    backButton.textContent = 'Previous';
    backButton.className = 'nav-button';
    backButton.onclick = function() {
        window.history.back(); // Navigate to the previous page
    };

    // Create the "Next" button
    const forwardButton = document.createElement('button');
    forwardButton.textContent = 'Next';
    forwardButton.className = 'nav-button';
    forwardButton.onclick = function() {
        window.history.forward(); // Navigate to the next page
    };

    // Append buttons to the menu
    menu.appendChild(backButton);
    menu.appendChild(forwardButton);

    // Add the menu to the document body
    document.body.appendChild(menu);

    // Add CSS styling for the buttons
    const style = document.createElement('style');
    style.innerHTML = `
        .nav-button {
            background-color: #4CAF50; /* Green background */
            color: white; /* White text */
            border: none; /* No border */
            border-radius: 5px; /* Rounded corners */
            padding: 8px 12px; /* Padding for the buttons */
            margin-right: 5px; /* Space between the buttons */
            cursor: pointer; /* Change cursor to pointer on hover */
        }

        .nav-button:hover {
            background-color: #45a049; /* Darker green on hover */
        }
    `;
    document.head.appendChild(style);

})();