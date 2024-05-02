// ==UserScript==
// @name         Navigation Menu V2.2
// @namespace    http://tampermonkey.net/
// @version      1.1
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
    menu.className = isMenuVisible ? 'rsm-nav-opened' : 'rsm-nav-closed';

    // Create the visibility wrapper and button
    const visibilityWrapper = document.createElement('div');
    visibilityWrapper.className = 'rsm-nav-visibility-wrapper';

    const visibilityButton = document.createElement('button');
    visibilityButton.className = 'rsm-nav-visibility-btn ' + (isMenuVisible ? 'rsm-nav-opened' : 'rsm-nav-closed');

    visibilityButton.onclick = function() {
        const isCurrentlyVisible = menu.classList.contains('rsm-nav-opened');
        if (isCurrentlyVisible) {
            menu.classList.remove('rsm-nav-opened');
            menu.classList.add('rsm-nav-closed');
            visibilityButton.classList.remove('rsm-nav-opened');
            visibilityButton.classList.add('rsm-nav-closed');
            localStorage.setItem('rsm-nav-menu-visible', 'false');
        } else {
            menu.classList.remove('rsm-nav-closed');
            menu.classList.add('rsm-nav-opened');
            visibilityButton.classList.remove('rsm-nav-closed');
            visibilityButton.classList.add('rsm-nav-opened');
            localStorage.setItem('rsm-nav-menu-visible', 'true');
        }
    };

    // Add the icon to the visibility button
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'rsm-nav-icon-wrapper';

    const iconSvg = `
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.5805 19.5282C30.9411 19.6717 31.3499 19.4957 31.4935 19.135V19.135C31.637 18.7744 31.461 18.3656 31.1003 18.222L16.1243 12.2612C16.0444 12.2294 15.9554 12.2294 15.8755 12.2612L0.899462 18.222C0.53878 18.3656 0.362768 18.7743 0.506328 19.135C0.649888 19.4957 1.05866 19.6717 1.41934 19.5282L15.9999 13.7247L30.5805 19.5282Z" fill="#808080" fill-opacity="0.5"/>
        </svg>
    `;

    iconWrapper.innerHTML = iconSvg;
    visibilityButton.appendChild(iconWrapper);

    // Append visibility button to the visibility wrapper
    visibilityWrapper.appendChild(visibilityButton);
    menu.appendChild(visibilityWrapper);

    // Create the navigation button wrapper
    const navButtonWrapper = document.createElement('div');
    navButtonWrapper.className = 'rsm-nav-btn-wrapper';
    navButtonWrapper.style.display = 'flex'; // Flexbox for the navigation buttons

    // Create the "Back" and "Forward" buttons
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.className = 'rsm-nav-btn';
    backButton.onclick = function() {
        window.history.back();
    };

    const forwardButton = document.createElement('button');
    forwardButton.textContent = 'Forward';
    forwardButton.className = 'rsm-nav-btn';
    forwardButton.onclick = function() {
        window.history.forward();
    };

    // Append the navigation buttons to the wrapper
    navButtonWrapper.appendChild(backButton);
    navButtonWrapper.appendChild(forwardButton);

    // Add the navigation button wrapper to the menu
    menu.appendChild(navButtonWrapper);

    // Append the menu to the document body
    document.body.appendChild(menu);

    // Add the CSS styling for the menu and its elements
    const style = document.createElement('style');
    style.innerHTML = `
        #rsm-nav-menu {
            position: fixed;
            left: 4px;
            padding: 10px;
            padding-top:0px;
            background-color: hsl(0,0%,50%,.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid hsla(0,0%,50%,.2);
            border-radius: 5px;
            transition: bottom 0.3s; /* Smooth transition for visibility toggle */
            z-index: 99999999!important; /* Ensures the menu appears above other elements */
            width:130px !important;
        }
        .rsm-nav-btn-wrapper{
            justify-content:space-around;
            display:flex;
        }

        .rsm-nav-btn {
            border:1px solid hsl(0,0%,50%,.25)!important;
            color: hsla(0,0%,50%,.5);
            border: none;
            border-radius: 5px;
            padding: 8px 12px;
            cursor: pointer;
        }

        .rsm-nav-btn:hover {
            background-color: hsl(0,0%,50%,.5) /* Darker green on hover */
        }

        .rsm-nav-visibility-wrapper {
            text-align: center;
            width:100%;
        }

        .rsm-nav-visibility-btn {
            border: none;
            background-color: transparent;
            cursor: pointer;
        }

        .rsm-nav-icon-wrapper {
            display: inline-block;
        }

        .rsm-nav-icon {
            width: 20px;
            height: 20px;
        }

        #rsm-nav-menu.rsm-nav-closed {
            bottom: -46px; /* Hides the menu when closed */
        }

        #rsm-nav-menu.rsm-nav-opened {
            bottom: 10px; /* Shows the menu when open */
        }
    `;

    document.head.appendChild(style);
})();