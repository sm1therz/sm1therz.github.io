// ==UserScript==
// @name         Page Navigation Menu V4
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Creates a custom navigation menu that loads on every page with following functionality: Buttons: Go Back, Go Forward, Copy, Paste
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Create the <style> element
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    
  :root {
    /*menu*/
    --rsNavMenuPosition: var(--rsNavMenuPadding);
    --rsNavMenuPadding:10px;
    /*button - open close menu*/
    --rsNavMenuVisBtnHeight:20px;
    --rsNavMenuVisBtnIcnWidth: 30px;
    /*buttons - row 2 - all*/
    --rsButtonWidth:40px;
    /*buttons > row 2*/
    --rsNavMenuBtnBrdRad: 6px;
    --rsNavMenuBtnBrdClr: hsla(0, 0%, 50%, .15);
    --rsNavMenuBtnHeight: 30px;
    --rsNavMenuBtnWidth: 36px;
  }
  #rsm-nav-menu {
    position: fixed !important;
    display: flex;
    flex-direction: column;
    z-index: 9292929292;
    bottom: var(--rsNavMenuPosition);
    left: var(--rsNavMenuPosition);
    padding: 10px;
    padding-top: 5px !important;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px) saturate(2);
    -webkit-backdrop-filter: blur(10px) saturate(2) ;
    box-shadow:0 0 0 .5px  hsla(0, 0%, 50%, .12);
    border-radius: calc(var(--rsNavMenuBtnBrdRad) + 2px);
    transition: bottom 0.3s;
    gap: calc(var(--rsNavMenuPadding) * .5)
      /* Smooth transition for visibility toggle */
  }
  
  /********
  OPEN / CLOSE BUTTON
  ********/
  .rsm-nav-vis-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    height: var(--rsNavMenuVisBtnHeight);
    padding: 0px;
    overflow:hidden !important;
  }
  .rsm-nav-vis-icon {
    display: flex;
    height: var(--rsNavMenuVisBtnIcnWidth);
    width: var(--rsNavMenuVisBtnIcnWidth);
    background-image: url(https://sm1therz.github.io/code-playground/Menu-Page-Navigation/icons/rsm-nav-open-close.svg);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    transition: .25s;
    position: absolute;
  }
  .rsm-nav-menu-closed .rsm-nav-vis-icon{
    transform: scaleY(-1);
  
  }
  
  /********
  MENU OPEN / MENU CLOSE
  ********/
  .rsm-nav-menu-closed{
    bottom: -70px !important;
  }
  
  /********
  BOTTOM BUTTONS
  ********/
  .rsm-nav-btn-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border-radius: var(--rsNavMenuBtnBrdRad);
    box-shadow: 0 0 0 1px var(--rsNavMenuBtnBrdClr);
    overflow: hidden;
  }
  .rsm-nav-btn-group {
    display: flex !important;
  }
  
  .rsm-nav-btn-group:first-of-type > button{
    border-top: none;
  }
  .rsm-nav-btn-group > button{
    border-top: 1px solid var(--rsNavMenuBtnBrdClr);
  }
  .rsm-nav-btn-group > button:first-child{
    border-right: 1px solid var(--rsNavMenuBtnBrdClr);
  }
  
  /********
  BUTTONS > ALL
  ********/
  .rsm-nav-btn {
    background: hsla(0, 0%, 50%, .12);
    border: none;
    padding: 2px;
    cursor: pointer;
    width: var(--rsButtonWidth);
    height: var(--rsButtonWidth);
    transition: .2s;
    text-align: center;
    font-size: .8rem;
    line-height: 1;
    font-family: SF Mono, monospace;
  }
  .rsm-nav-btn:hover {
    background-color: hsla(0, 0%, 50%, .35);
    /* Darker green on hover */
  }
  /********
  BUTTONS > PAGE FORWARD AND PAGE BACK
  ********/
  .rsm-nav-back {
    background-image: url(https://sm1therz.github.io/code-playground/Menu-Page-Navigation/icons/rsm-navigate-back.svg);
    background-size: 20px;
    background-position: center;
    background-repeat: no-repeat;
  }
  .rsm-nav-forward {
    background-image: url(https://sm1therz.github.io/code-playground/Menu-Page-Navigation/icons/rsm-navigate-forward.svg);
    background-size: 20px;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  /********
  BUTTONS > COPY / PASTE
  ********/
  /*Copy / Paste Buttons*/
  .rs-copy,
  .rs-paste {
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue, Arial, sans-serif !important;
    font-size:
  }

`;

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
  copyButton.textContent = "⌘ C";
  const pasteButton = document.createElement("button");
  pasteButton.className = "rsm-nav-btn rs-paste";
  pasteButton.textContent = "⌘ V";
  navBtnGroup2.appendChild(copyButton);
  navBtnGroup2.appendChild(pasteButton);

  btnWrapper.appendChild(navBtnGroup1);
  btnWrapper.appendChild(navBtnGroup2);

  menu.appendChild(visButton);
  menu.appendChild(btnWrapper);

  // Add elements to the document
  document.head.appendChild(styleElement);
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
})();