// ==UserScript==
// @name         Navigation Menu
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Add a navigation menu with visibility control to every page
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict'; 

    // Load state from local storage
    const isMenuVisible = localStorage.getItem('rsm-nav-menu-visible') !== 'false';

    // Create the menu div
    const menu = document.createElement('div');
    menu.id = 'rsm-nav-menu';
    menu.className = isMenuVisible ? '' : 'rsm-nav-hidden'; // Default hidden state
    menu.style.position = 'fixed';
    menu.style.bottom = isMenuVisible ? '10px' : '-50px'; // Initial position based on visibility
    menu.style.left = '10px';
    menu.style.padding = '10px';
    menu.style.backgroundColor = '#f1f1f1';
    menu.style.border = '1px solid #ccc';
    menu.style.borderRadius = '5px';
    menu.style.transition = 'bottom 0.3s'; // Smooth transition for visibility toggle

    // Create the visibility wrapper and button
    const visibilityWrapper = document.createElement('div');
    visibilityWrapper.className = 'rsm-nav-visibility-wrapper';

    const visibilityButton = document.createElement('button');
    visibilityButton.className = 'rsm-nav-visibility-btn ' + (isMenuVisible ? 'rsm-nav-opened' : 'rsm-nav-closed');
    visibilityButton.onclick = function () {
        const isCurrentlyVisible = menu.style.bottom === '10px';
        menu.style.bottom = isCurrentlyVisible ? '-50px' : '10px';
        if (isCurrentlyVisible) {
            visibilityButton.classList.remove('rsm-nav-opened');
            visibilityButton.classList.add('rsm-nav-closed');
        } else {
            visibilityButton.classList.remove('rsm-nav-closed');
            visibilityButton.classList.add('rsm-nav-opened');
        }
        // Save state to local storage
        localStorage.setItem('rsm-nav-menu-visible', isCurrentlyVisible ? 'false' : 'true');
    };

    // Add the icon to the visibility button
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'rsm-nav-icon-wrapper';

    const iconImg = document.createElement('img');
    iconImg.src = 'https://dl.dropboxusercontent.com/scl/fi/th6anp40q35pwfvkniwvs/rsm-nav-icon.svg?rlkey=ffzusa21qoeh1vlwu21bl5xuq&raw=1';
    iconImg.className = 'rsm-nav-icon';

    iconWrapper.appendChild(iconImg);
    visibilityButton.appendChild(iconWrapper);

    // Append visibility button to the visibility wrapper
    visibilityWrapper.appendChild(visibilityButton);
    menu.appendChild(visibilityWrapper);

    // Create the navigation button wrapper
    const navButtonWrapper = document.createElement('div');
    navButtonWrapper.className = 'rsm-nav-btn-wrapper';
    navButtonWrapper.style.display = 'flex'; // Flexbox for 2-column structure

    // Create the "Back" button
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.className = 'rsm-nav-btn';
    backButton.onclick = function () {
        window.history.back(); // Navigate to the previous page
    };

    // Create the "Forward" button
    const forwardButton = document.createElement('button');
    forwardButton.textContent = 'Forward';
    forwardButton.className = 'rsm-nav-btn';
    forwardButton.onclick = function () {
        window.history.forward(); // Navigate to the next page
    };

    // Append the navigation buttons to the wrapper
    navButtonWrapper.appendChild(backButton);
    navButtonWrapper.appendChild(forwardButton);

    // Add the navigation button wrapper to the menu
    menu.appendChild(navButtonWrapper);

    // Append the menu to the document body
    document.body.appendChild(menu);

    // Add CSS styling for the menu, navigation buttons, and visibility controls
    const style = document.createElement('style');
    style.innerHTML = `
        .rsm-nav-menu {
            position: fixed !important;
            z-index:9292929292;
            bottom: ${isMenuVisible ? '10px' : '-50px'}; /* Initial position based on visibility */
            left: 10px;
            padding: 10px;
            background-color: #f1f1f1;
            backdrop-filter:blur(10px);
            -webkit-backdrop-filter:blur(10px);
            border: 1px solid hsla(0,0%,50%,.2);
            border-radius: 5px;
            transition: bottom 0.3s; /* Smooth transition for visibility toggle */
        }
        .rsm-nav-btn {
            background-color: #4CAF50; /* Green background */
            color: white; /* White text */
            border: none; /* No border */
            border-radius: 5px; /* Rounded corners */
            padding: 8px 12px; /* Padding for the buttons */
            margin-right: 5px; /* Space between the buttons */
            cursor: pointer; /* Change cursor to pointer on hover */
        }

        .rsm-nav-btn:hover {
            background-color: #45a049; /* Darker green on hover */
        }

        .rsm-nav-visibility-wrapper {
            text-align: center; /* Center the visibility button */
        }

        .rsm-nav-visibility-btn {
            border: none; /* No border */
            background-color: transparent; /* Transparent background */
            cursor: pointer; /* Pointer cursor on hover */
        }

        .rsm-nav-icon-wrapper {
            display: inline-block; /* Wrap icon image */
        }

        .rsm-nav-icon {
            width: 20px; /* Size of the icon */
            height: 20px; /* Size of the icon */
        }
    `;
    document.head.appendChild(style);
})();