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

  const navBtnGroup1 = document.createElement("div");
  navBtnGroup1.className = "rsm-nav-btn-group";
  const backButton = document.createElement("button");
  backButton.className = "rsm-nav-btn rsm-nav-back";
  const forwardButton = document.createElement("button");
  forwardButton.className = "rsm-nav-btn rsm-nav-forward";
  navBtnGroup1.appendChild(backButton);
  navBtnGroup1.appendChild(forwardButton);

  const navBtnGroup2 = document.createElement("div");
  navBtnGroup2.className = "rsm-nav-btn-group";
  const copyButton = document.createElement("button");
  copyButton.className = "rsm-nav-btn rs-copy";
  copyButton.textContent = "⌘C";
  const pasteButton = document.createElement("button");
  pasteButton.className = "rsm-nav-btn rs-paste";
  pasteButton.textContent = "⌘V";
  navBtnGroup2.appendChild(copyButton);
  navBtnGroup2.appendChild(pasteButton);

  const navBtnGroup3 = document.createElement("div");
  navBtnGroup3.className = "rsm-nav-btn-group";
  const undoButton = document.createElement("button");
  undoButton.className = "rsm-nav-btn rs-undo";
  undoButton.textContent = "Undo";
  const redoButton = document.createElement("button");
  redoButton.className = "rsm-nav-btn rs-redo";
  redoButton.textContent = "Redo";
  navBtnGroup3.appendChild(undoButton);
  navBtnGroup3.appendChild(redoButton);

  btnWrapper.appendChild(navBtnGroup1);
  btnWrapper.appendChild(navBtnGroup2);
  btnWrapper.appendChild(navBtnGroup3);

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

  // Handle navigation actions
  backButton.addEventListener("click", () => {
    window.history.back();
  });

  forwardButton.addEventListener("click", () => {
    window.history.forward();
  });

  // Handle copy/paste actions
  copyButton.addEventListener("click", () => {
    document.execCommand("copy");
  });

  pasteButton.addEventListener("click", () => {
    document.execCommand("paste");
  });

  // Handle undo/redo actions
  undoButton.addEventListener("click", () => {
    document.execCommand("undo");
  });

  redoButton.addEventListener("click", () => {
    document.execCommand("redo");
  });
})();
