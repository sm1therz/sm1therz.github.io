(function() {
	let style = `<style>

/************
*************
TOC
*************
*************/
:root {
		--tocTextSize:14px;
		--tocLineHeight:20px;
}
.left-sidebar-container-content{
		
}
#docs-editor .navigation-widget-content,
.navigation-item-list.goog-container,
.navigation-item{
		padding-right: 0px !important;
}
.navigation-item[aria-label] .navigation-item-content:before{
		content: "#";
		display: block;
		position: absolute;
		opacity: .5;
		font-size: .8em;
		left: 5px;
}
.left-sidebar-container .navigation-item-content-container {
			display:flex !important;
	align-items:center !important;
}
.outlines-widget .navigation-item{
		height: auto !important;
		position: relative;

}
.outlines-widget .navigation-item-content{
	font-size: var(--tocTextSize) !important;
		line-height: var(--tocLineHeight) !important;
		height:unset !important;
		min-height:unset !important;
}
.outlines-widget-chaptered .navigation-item-content{
	padding-top:5px !important;
	padding-bottom:5px !important;

}

.outlines-widget .navigation-item-content {
		white-space:unset !important;
		text-overflow:unset !important;
}
.navigation-item-content-container,
.navigation-item-content-container * {
	font-size: unset !important;
		line-height: unset !important;
}
.navigation-item-content-container[aria-label*="level 1"] .navigation-item-content{
		--tocTextSize:15px;
		font-weight: 500 !important;
}
.navigation-item-content-container[aria-label*="level 2"] .navigation-item-content{
		--tocTextSize:14.5px;
		font-weight: 500 !important;
}



/*selected*/
.navigation-item .navigation-item-vertical-line-middle{
		height: 20px
}

.navigation-item{
		border-top-right-radius: 30px;
		border-bottom-right-radius: 30px;
		transition: .12s;
}
/*
.navigation-item:hover{
		background: hsl(215, 0%, 50%,.05) !important;
}*/
.location-indicator-highlight.navigation-item{
		background: hsl(215, 100%, 50%,.1) !important;

}
/*PADDING*/
.outlines-widget .outlines-widget-chaptered .chapter-container .navigation-item .navigation-item-level-1{
		padding-left: 40px;
}
.outlines-widget .outlines-widget-chaptered .chapter-container .navigation-item .navigation-item-level-2 {
		padding-left: 60px;
}

.outlines-widget .outlines-widget-chaptered .chapter-container .navigation-item .navigation-item-level-3 {
		padding-left: 80px;
}
.outlines-widget .outlines-widget-chaptered .chapter-container .navigation-item .navigation-item-level-4 {
		padding-left: 100px;
}
	
</style>`;

	document.head.insertAdjacentHTML("beforeend", style);
})();
