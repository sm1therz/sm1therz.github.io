// ==UserScript==
// @name         Navigation Menu
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Add a navigation menu with visibility control to every page
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Load state from local storage
    const isMenuVisible = localStorage.getItem('rsm-nav-menu-visible') !== 'false';

    // Create the menu div
    const menu = document.createElement('div');
    menu.id = 'rsm-nav-menu';
    menu.className = isMenuVisible ? '' : 'rsm-nav-hidden'; // Default hidden state
    menu.style.position = 'fixed';
    menu.style.bottom = isMenuVisible ? '10px' : '-45px'; // Initial position based on visibility
    menu.style.left = '10px';
    menu.style.padding = '10px';
    menu.style.zIndex = '959595934';
    menu.style.paddingTop = '0px';
    menu.style.border = '1px solid hsla(0,0%,50%,.15)';
    menu.style.background = 'hsla(0,0%,50%,.0)';
    menu.style.backdropFilter = 'blur(10px)';
    menu.style.borderRadius = '7px';
    menu.style.transition = 'bottom 0.3s'; // Smooth transition for visibility toggle

    // Create the visibility wrapper and button
    const visibilityWrapper = document.createElement('div');
    visibilityWrapper.className = 'rsm-nav-visibility-wrapper';

    const visibilityButton = document.createElement('button');
    visibilityButton.className = 'rsm-nav-visibility-btn ' + (isMenuVisible ? 'rsm-nav-opened' : 'rsm-nav-closed');
    visibilityButton.onclick = function() {
        const isCurrentlyVisible = menu.style.bottom === '10px';
        menu.style.bottom = isCurrentlyVisible ? '-44px' : '10px';
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
    iconImg.src = 'https://sm1therz.github.io/code-playground/Menu-Page-Navigation/assets/rsm-nav-open-close.svg';
    iconImg.className = 'rsm-nav-icon';

    iconWrapper.appendChild(iconImg);
    visibilityButton.appendChild(iconWrapper);

    // Append visibility button to the visibility wrapper
    visibilityWrapper.appendChild(visibilityButton);
    menu.appendChild(visibilityWrapper);

    // Create the navigation button wrapper
    const navButtonWrapper = document.createElement('div');
    navButtonWrapper.className = 'rsm-nav-btn-wrapper';

    // Create the "Back" button
    const backButton = document.createElement('button');
    backButton.textContent = '';
    backButton.className = 'rsm-nav-btn rsm-nav-back';
    backButton.onclick = function() {
        window.history.back(); // Navigate to the previous page
    };

    // Create the "Forward" button
    const forwardButton = document.createElement('button');
    forwardButton.textContent = '';
    forwardButton.className = 'rsm-nav-btn rsm-nav-forward';
    forwardButton.onclick = function() {
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
        :root{
            --rsNavMenuBtnBrdRad:4px;
            --rsNavMenuBtnBrdClr:hsla(0,0%,50%,.15);
        }
        .rsm-nav-menu {
            position: fixed !important;
            z-index:9292929292;
            bottom: ${isMenuVisible ? '10px' : '-44px'}; /* Initial position based on visibility */
            left: 10px;
            padding: 10px;
            padding-top:0px !important;
            background-color: #f1f1f1;
            backdrop-filter:blur(10px);
            -webkit-backdrop-filter:blur(10px);
            border: 1px solid hsla(0,0%,50%,.12);
            border-radius: 5px;
            transition: bottom 0.3s; /* Smooth transition for visibility toggle */
        }
        .rsm-nav-btn {
            background: hsla(0,0%,50%,.12);
            color: hsla(0,0%,50%,1);
            border: none;
            padding: 8px 8px;
            cursor: pointer;
            width:36px;
            height:30px;
        }
        .rsm-nav-back {
            background-image:url(https://sm1therz.github.io/code-playground/Menu-Page-Navigation/assets/rsm-navigate-back.svg);
            background-size:20px;
            background-position:center;
            background-repeat:no-repeat;
            border-right:1px solid var(--rsNavMenuBtnBrdClr);
            transition:.2s;
        }
        .rsm-nav-forward {
            background-image:url(https://sm1therz.github.io/code-playground/Menu-Page-Navigation/assets/rsm-navigate-forward.svg);
            background-size:20px;
            background-position:center;
            background-repeat:no-repeat;
        }

        .rsm-nav-btn:hover {
            background-color: hsla(0,0%,50%,.35); /* Darker green on hover */
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
        .rsm-nav-btn-wrapper{
            display:flex !important;
            border-radius:var(--rsNavMenuBtnBrdRad);
            border:1px solid var(--rsNavMenuBtnBrdClr);
            overflow:hidden;
        }
        .rsm-nav-icon {
            width: 20px; /* Size of the icon */
            height: 20px; /* Size of the icon */
        }
    `;
    document.head.appendChild(style);
})();