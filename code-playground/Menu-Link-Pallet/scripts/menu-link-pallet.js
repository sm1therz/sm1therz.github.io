// ==UserScript==
// @name         Menu Link Pallet
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Creates a menu that loads on every page with following functionality: a link <a href=""> that you can put any url for bookmarklets
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Create the <link> element to load external stylesheet
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = "https://sm1therz.github.io/code-playground/Menu-Link-Pallet/styles/menu-link-pallet-styles.css";

  // Add the link element to the document
  document.head.appendChild(linkElement);

  // Create the menu structure
  const menu = document.createElement("div");
  menu.id = "rsm-nav-menu";
  const visButton = document.createElement("button");
  visButton.className = "rsm-nav-vis-btn";
  const visIcon = document.createElement("div");
  visIcon.className = "rsm-nav-vis-icon";
  visButton.appendChild(visIcon);

  const btnWrapper = document.createElement("div");
  btnWrapper.className = "rsm-nav-btn-wrapper";

  const navBtnGroup = document.createElement("div");
  navBtnGroup.className = "rsm-nav-btn-group";
  const exampleLink = document.createElement("a");
  exampleLink.href = "https://example.com";
  exampleLink.textContent = "⌘";
  navBtnGroup.appendChild(exampleLink);

  btnWrapper.appendChild(navBtnGroup);

  menu.appendChild(visButton);
  menu.appendChild(btnWrapper);

  // Add elements to the document
  document.body.appendChild(menu);

  // Load the initial state from local storage
  const initialState = localStorage.getItem("rsm-nav-menu-state");
  if (initialState === "open") {
    menu.classList.add("rsm-nav-menu-open");
  } else {
    menu.classList.add("rsm-nav-menu-closed");
  }

  // Handle the visibility toggle
  visButton.addEventListener("click", () => {
    if (menu.classList.contains("rsm-nav-menu-open")) {
      menu.classList.remove("rsm-nav-menu-open");
      menu.classList.add("rsm-nav-menu-closed");
      localStorage.setItem("rsm-nav-menu-state", "closed");
    } else {
      menu.classList.remove("rsm-nav-menu-closed");
      menu.classList.add("rsm-nav-menu-open");
      localStorage.setItem("rsm-nav-menu-state", "open");
    }
  });
})();