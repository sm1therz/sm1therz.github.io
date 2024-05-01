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

(function(d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function(){
        // remote script has loaded
    };
    script.src = 'https://dl.dropboxusercontent.com/s/k5y9j808mixoxll/Userscript--DarkReader.js?raw=1';
    d.getElementsByTagName('head')[0].appendChild(script);
}(document));
}

