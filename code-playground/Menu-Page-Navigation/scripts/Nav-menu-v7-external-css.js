// ==UserScript==
// @name         Navigation Menu V5 (External CSS) -- No Copy/Paste + Reload
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  Custom bottom menu: Reload (top row), Back/Forward, Undo/Redo. Copy/Paste removed.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Create the <link> element to load external stylesheet
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = "https://sm1therz.github.io/code-playground/Menu-Page-Navigation/styles/Nav-menu-v6-styles.css";

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

  // NEW TOP ROW: single Reload button (icon styled via CSS like back/forward)
  const navBtnGroup0 = document.createElement("div");
  navBtnGroup0.className = "rsm-nav-btn-group";
  const reloadButton = document.createElement("button");
  reloadButton.className = "rsm-nav-btn rsm-nav-reload"; // add icon in CSS similar to back/forward
  // Optional text fallback if CSS icon fails:
  // reloadButton.textContent = "↻";
  navBtnGroup0.appendChild(reloadButton);

  // Row: Back / Forward
  const navBtnGroup1 = document.createElement("div");
  navBtnGroup1.className = "rsm-nav-btn-group";
  const backButton = document.createElement("button");
  backButton.className = "rsm-nav-btn rsm-nav-back";
  const forwardButton = document.createElement("button");
  forwardButton.className = "rsm-nav-btn rsm-nav-forward";
  navBtnGroup1.appendChild(backButton);
  navBtnGroup1.appendChild(forwardButton);

  // Row: Undo / Redo
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

  // Append groups in order: TOP row first
  btnWrapper.appendChild(navBtnGroup0);
  btnWrapper.appendChild(navBtnGroup1);
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

  // Actions
  reloadButton.addEventListener("click", () => {
    window.location.reload();
  });

  backButton.addEventListener("click", () => {
    window.history.back();
  });

  forwardButton.addEventListener("click", () => {
    window.history.forward();
  });

  undoButton.addEventListener("click", () => {
    document.execCommand("undo");
  });

  redoButton.addEventListener("click", () => {
    document.execCommand("redo");
  });
})();
