// ==UserScript==
// @name         INJECT RAINDROP
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Injects Raindrop CSS
// @author       RSM
// @match        https://preview.systems*
// @match        https://api.raindrop.io*
// @match        https://s3.eu-central-1.wasabisys.com*
// @grant        GM_addElement
// ==/UserScript==
(function() {
  let style = `<style>
  
/*IMAGES - HOSTED ON RAINDROP*/
  
  img {
      max-width: 100%;
      margin: 0 auto;
  }
  body > img {
      box-shadow: 0 0 0 400px hsla(0,0%,10%);
  }
  
</style>`;

  document.head.insertAdjacentHTML("beforeend", style);
})();