setTimeout(function() {
    'use strict';

    var blockquotes = document.querySelectorAll('blockquote:not([class])');
    blockquotes.forEach(function(blockquote) {
        var div = document.createElement('div');
        div.className = 'img-blockquote';
        while (blockquote.firstChild) {
            div.appendChild(blockquote.firstChild);
        }
        blockquote.parentNode.replaceChild(div, blockquote);
    });

}, 3000);

setTimeout(function() {
    'use strict';

    var quotes = document.getElementsByClassName('quote');
    Array.prototype.forEach.call(quotes, function(quote) {
        var blockquote = document.createElement('blockquote');
        blockquote.className = 'quote';
        while (quote.firstChild) {
            blockquote.appendChild(quote.firstChild);
        }
        quote.parentNode.replaceChild(blockquote, quote);
    });

}, 3000);




(function() {
  let style = `<style>
  :root {
		/*sizes*/
	  --bodyFontSize:16.5px;
		/*colors*/
		--blockquoteBrdClr:hsla(0,0%,50%);
		--blockquoteOpacity:.75

	}
	html,
	body {
		padding:0px;
		margin:0px;
	}
	* {
		box-sizing:border-box;
	}
	body {  
		display: block;  
		padding-left: 20px;  
		padding-right: 20px;  
		margin: 0 auto;  
		width: 800px; 
		max-width: 100%;
	} 
	
	body, 
	blockquote,
	p,
	ul li,
	ol li {
		font-size:var(--bodyFontSize);
		line-height:1.35;
	}
	
	blockquote {
	font-size: calc(var(--bodyFontSize) - 1px)!important;
	margin-left: 0px !important;
	margin-right: 0px !important;
	-webkit-text-stroke-width:.3px;
	border-left:5px solid var(--blockquoteBrdClr);
	opacity:var(--blockquoteOpacity);
	}
	
	blockquote,
	.img-blockquote {
	padding-left:30px;
	padding-right:10px;
	padding-top:6px;
	padding-bottom:6px;
	}
	
	* {
	font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif !important;
	}
	
	
	i,em {
	font-style:italic;
	}
	
	p{
	margin-top: 10px;,
	margin-bottom: 10px;
	}

</style>`;

  document.head.insertAdjacentHTML("beforeend", style);
})();
