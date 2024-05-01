// ==UserScript==
// @name            USERSCRIPT--Docs-Dark-Mode
// @version         1
// @author          RSSR
// @description     Injects Dropbox Css File Into DOM
// @namespace       
 
// @grant    				none
// @noframes
// @license         Apache License V2
// @match           https://docs.google.com*
// @match           https://google.com*
// ==/UserScript==
 
(function(){
    let style = `<style>
	
</style>`;

document.head.insertAdjacentHTML("beforeend", style);
})();

var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://dl.dropboxusercontent.com/s/0bd2jtzi9ji2hyq/docs-dark--desktop-1.css?raw=1';
    link.media = 'all';
    head.appendChild(link);
}

