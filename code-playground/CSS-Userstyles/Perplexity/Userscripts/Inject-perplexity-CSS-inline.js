// ==UserScript==
// @name         PERPLEXITY INJECT - INLINE
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Injects Perplexity css
// @author       RSM
// @match        https://perplexity.ai*
// @grant        GM_addElement
// ==/UserScript==

(function() {
	let style = `<style>
	

	/*sidebar*/
	[class*="100dvh"] > [class*="ring-borderMain"],
	.w-sideBarWidth{
			width: 300px !important
	}
	
	/*sidebar - items*/
	
	[class*="group"] a[href] [class*="group"] span.line-clamp-1{
			-webkit-line-clamp:3
	}
	
</style>`;

	document.head.insertAdjacentHTML("beforeend", style);
})();