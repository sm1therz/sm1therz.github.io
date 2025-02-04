

(function() {
	let style = `<style>





/************
ROOT
*************/

:root {
		/*small font*/
		--smallFontSize:13px;
		--smallLineHeight:17px;
		/*font sizes*/
		--bodyFontSize:14px;
		--bodyLineHeight:19px;
		/*Large font*/
		--largeFontSize:14.5px;
		--largeLineHeight:19.5px;
		/*Header 3*/
		--h3FontSize:15px;
		--h3LineHeight:20px;
		/*Header 2*/
		--h2FontSize:16.5px;
		--h2LineHeight:21px;
		/*Header 1*/
		--h1FontSize:17.5px;
		--h1LineHeight:22px;
		/*font-weights*/
		--bldWeight:600;
		/*margins and padding*/
		--itemMargTopBtm:6px;
		--brickPadTopBtm: 0px;
		--brickNavHeight:40px;
		--brickTopHandleHeight:24px;
		/*buttons*/
		--brickBtnW:24px;
		--brickCollapseBtnW:27px;
		--brickCollapseBtnSize:60%;
		--brickBtnBrdRad:4px;
		/*item pad*/
		--brickItemPadLeft:16px;
		--brickItemPadRight:24px;
		/*tags*/
		--bricktagFontSize:13px;
		--bricktagGap:2px;
		--bricktagHeight:20px;
		--bricktagPadTop:2px;
		--bricktagPadBtm:1px;
		--bricktagPadLeftRight:9px;
		--bricktagBrdW:0.8px;
		/*lists*/
		--listbulletWidth:19px;
		--listbulletMargRight:4px;
		--listbulletBgClr:hsla(0,0%,50%,.3);
		/*checkbox*/
		--checkboxMargTop:-1px;
		--checkboxTransformScale:.9;
		--checkboxTransformOrigin:60% 90%;
		--checkboxBrdRad:6px;
		/*unordered list*/
		--unorderedlistMargTop:0px;
		/*blockquote*/
		--blockquoteBrdW:4px;
		/*popup*/
		--popupW:800px;
		--popupH:790px;
		--popupPadLR:20px;
		--popupMargTopBtm:10vh
}

/************
COLORS
*************/

.brick {
		/*text*/
		--bodyClr:#222;
		--bldClr:black;
		--greyedOutClr:hsla(0, 0%, 0%,0.60);
		--greyedOutBldClr:hsla(0, 0%, 0%,0.7);
		/*link*/
		--linkClr:hsl(198, 100%, 50%);
		/*todo*/
		--todoCheckBoxBgClr:hsla(0,0%,0%,0.1);
		--todoCheckBoxBgClr-Checked:hsla(0,0%,0%,0.1);
		--todoCheckBoxBrdClr:hsla(0,0%,10%,0.6);
		/*tag*/
		--tagBrdClr-Colorless:hsla(0,0%,0%,0.2);
		--tagBrdClr:hsla(0,0%,0%,0.2);
		--tagBgClr:hsla(0,0%,0%,0.05);
		/*bullets*/
		--listorderedbulletBrdClr:hsla(0,0%,50%,0.1);
		--listbulletcollapsedClr:hsla(0,0%,0%,0.1);

}
.brick.darkBrick,
.brick.noBackground{
		/*text*/
		--bodyClr:hsla(0, 100%, 100%,0.86);
		--bldClr:hsla(0, 0%, 97%);
		--greyedOutClr:hsla(0, 0%, 100%,0.6);
		--greyedOutBldClr:hsla(0, 0%, 100%,0.70);
		/*link*/
		--linkClr:hsl(198, 100%, 50%);
		/*todo*/
		--todoCheckBoxBgClr:hsl(122, 0%, 0%,.15);
		--todoCheckBoxBgClr-Checked:hsl(122, 0%, 11%);
		--todoCheckBoxBrdClr:hsl(122, 0%, 31%);
		/*tag*/
		--tagBrdClr-Colorless:hsl(122, 0%, 0%,0.4);
		--tagBrdClr:hsl(122, 0%, 0%,.4);
		--tagBgClr:hsl(122, 0%, 0%,0.15);;
		/*bullets*/
		--listorderedbulletBrdClr:hsla(0,0%,50%,.3);
		--listbulletcollapsedClr:hsla(0,0%,50%,.3);


}

.darkmode .topHeader,
.darkmode .main{
		background:hsl(240, 6%, 7%) !important;
}

:root {
		--darkmode-black:hsl(240, 6%, 7%);
}


/************
TESTING
*************/
.objects,
.objects > li,
.objects > li > div,
.objects li img,
li.listitem,
.brick-list .text,
.brick .brick-list li .listitem-container:before,
.brick .object > .paragraph.large,
#app .brick > .brick-tags.noTags,
.brick-top-buttons,
.brick-top-buttons,
.editor-menu-bubble,
.editor-menu-bubble button,
.brick > .brick-settings,
#app .brick > .brick-tags,
.brick-tag{

		box-shadow: 0 0 0 .2px hsl(100, 80%, 30%,0) !important;
}
/*
#app .grid-component,
#app .grid-component .grid-title,
.grid-component > .new-section{
border:1px solid red !important;
}
*/

/************
SECTIONS
*************/



/*SECTIONS - COLUMNS - MAX WIDTH*/


.grid-component[class*="cols"] .grid-container, 
.grid-component[class*="cols"] .visual-grid{
		max-width: 100%;
}



/*OVERRIDES*/
.brick-settings.brick-handle.brickDraggableArea {
		
}


/*new file button*/
#app div.newbrick.preventSelectDrag.preventHideViewOptions {
		right: 0px !important;

}
#app div.newbrick.preventSelectDrag.preventHideViewOptions:hover button {
		transform: scale(1)
}
#app div.newbrick.preventSelectDrag.preventHideViewOptions button{
		right: 10px !important;
		transition:190ms cubic-bezier(.2, 1.5, 0, .95);
		transform: scale(.7);
}

:root {
--sectionGap:10px;
--sectionTitleMinH:30px;
}


#app .grid-component {
		margin-bottom:0px !important;	
		padding-top:var(--sectionGap) !important;
}

/*SECTION > GRID TITLE */
#app .grid-component .grid-title {
		padding-bottom:var(--sectionGap) !important;
		margin-bottom:0px !important;
}
div.visual-grid-offset{
	display:none;
}
div.grid-component,div.grid-content,div.grid-container, div.grid-container > div, div.grid-container > div > div{
padding-bottom:0px !important;
margin-bottom:0px !important;
}

/*SECTION > GRID TITLE > TITLE*/
#app .grid-component .grid-title > h2 {
	min-height:var(--sectionTitleMinH);
}
/*SECTION > GRID TITLE > BUTTONS*/
#app .grid-component .grid-title > button, 
#app .grid-component .grid-title > div.section-settings,
#app .grid-component .grid-title > div.section-settings button,
#app .grid-component .grid-title > div.grid-title-separator,
#app .grid-component .grid-title > button.section-new-brick {
	display:flex;
	align-items:center;
	justify-content:center;
	height:calc(var(--sectionTitleMinH) - 1px) !important;
	margin-top:0px !important;
	
}
#app .grid-component .grid-title > div.grid-title-separator + button{
background-image:unset !important;
}
#app .grid-component .grid-title > button, 
#app .grid-component .grid-title > div.section-settings,
#app .grid-component .grid-title > div.grid-title-separator {
	opacity:0 !important;
	transition:.12s !important;
}
#app .grid-component .grid-title:hover > button, 
#app .grid-component .grid-title:hover > div.section-settings,
#app .grid-component .grid-title:hover > div.grid-title-separator {
	opacity:1 !important;
}


/*SECTION > GRID TITLE > DESCRIPTION*/
#app .grid-component.hiddenSection .descriptionDiv {
	display:block !important;
	
}
#app .grid-component .descriptionDiv,
#app .grid-component .descriptionDiv * {
	font-size:16.5px !important;
	line-height:23.5px !important;
}
.showSectionNumbers .grid-title .descriptionDiv{
margin-left:40px !important;
}
/*SECTION > NEW SECTION BUTTON*/
.grid-component > .new-section {
	margin:unset !important;
	padding:0px !Important;
	display:flex !important;
	align-items:center;
	opacity:0 !important;
	transition:.12s !important;
	height: 26px;
	font-size:12px !important;
	display: flex;
	align-items:center;
	background-image:unset !important;
}
.grid-component > .new-section:hover {
	opacity:1 !important;
}
.grid-component > .new-section > div,
.grid-component > .new-section > button{
	margin:unset !important;
}
/*SECTION > New Section Button > Re-Order*/

#app .grid-component > .new-section > button.new-section-btn{
	order:1;
	padding-top:5px  !important;
	padding-bottom:5px  !important;
	background-image:unset !important;
}
.grid-component > .new-section > .moreNewSectionOptions{
	order:2;
	display:none !Important;
}
.grid-component > .new-section > .line{
	order:9;
}
/*SECTION >  CONTENT > OVERRIDES*/
.grid-container > .section-list-view, 
.grid-container > .section-list-view > .table-container{
	padding-bottom:0px !important;
	padding-bottom:0px !important;
		
}


/************
KANBAN
*************/
.section-kanban-view,
.kanbanColumn {
	margin-top:0px !important;
	margin-bottom:0px !important;
	padding-bottom: 0px !important;
}

.kanbanColumn .column-header {
padding-left:4px;
padding-right:4px;
}
#app .kanbanColumn .column-header img.options-icon{
	opacity:0 !important;
	transition:.1s;
}
#app .kanbanColumn .column-header:hover img.options-icon{
	opacity:1 !important;
}
.section-kanban-view button.addColumnBtn{
	opacity:.25 !important;
	transition:.1s;
}
.section-kanban-view button.addColumnBtn:hover{
opacity:1 !important;
}

.kanbanColumn .column-header .columnTitle {
	font-size: 16px !important;
	line-height: 20px !important;
	font-weight: 400 !important;
	color:hsla(0,0%,50%,.5)!important;
}
#app .kanbanColumn .column-header .descriptionDiv{
	font-size: 14px !important;
	line-height: 18px !important;
	color:hsla(0,0%,50%,.35)!important;
}
.kanbanColumn .column-header .border{
	position:relative;
}
.kanbanColumn .column-header .border{
	position:absolute;
	bottom:-2px;
	left:-2px;
	right:-2px;
	height:2px !important;
	opacity:.5;	
	margin:unset;
	z-index:-1;
	border-radius:7px;
}

.kanbanColumn .column-header .border.colorless{
display:none;
}
.kanbanColumn > div.visual-grid {
	margin-top:0px !important;
	margin-bottom:0px !important;
	padding-bottom:20px !important;
}

.kanbanColumn > div.visual-grid button.column-addBrickBtn,
.kanbanColumn .column-header .columnBricksCount {
	opacity:.25 !important;
	display:none;
	
}

.kanbanColumn > div.visual-grid button.column-addBrickBtn:hover {
	opacity:.25 !important;
}
/************
BRICKS
*************/
:root {
		--brickBrdRad: 8px;
}

.brick,
.brick .brick-background {
		border-radius: var(--brickBrdRad) !important;
}
/*BRICK*/
.brick {
		padding-top: var(--brickPadTopBtm) !important;
		padding-bottom: var(--brickPadTopBtm) !important;

}
.brick .brick-content {

		border-radius: var(--brickBrdRad);

}
.brick .brick-content .uncollapse {
		display: none;
}
.brick.collapsed {
		overflow: hidden;
}

/************
BRICK - HEADERS
*************/
.brick > .brick-top-buttons,
.brick > .brick-tags {}


/*EXPAND COLLAPSE CONTAINER*/
.brick > .brick-top-buttons {
		top: 4px;
		right: 4px;
		height: var(--brickCollapseBtnW) !important;
		width: unset !important;
		z-index: 9949494949494949494949494944949494 !important
}


.brick > .brick-top-buttons .collapseBrickBtn {
		padding: 0px !important;
		width: var(--brickCollapseBtnW) !important;
		height: var(--brickCollapseBtnW) !important;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0px;
		z-index: 9494949494 !important;
		opacity: 0 !important;
}
#app .brick > .brick-top-buttons .collapseBrickBtn {}
/*EXPAND / COLLAPSE - DUMMY CHEVRON*/
/*dummy icon*/
.brick > .brick-top-buttons:before,
.brick > .brick-top-buttons:after {
		content: "";
		position: absolute;
		width: var(--brickCollapseBtnW);
		height: var(--brickCollapseBtnW);
		background-image: var(--iconChevron);
		background-color: transparent !important;
		background-size: 50%;
		background-position: center;
		background-repeat: no-repeat;
		position: absolute;
		top: 0;
		right: 0;
		transition: .2s;
		transform: rotate(180deg);
		border-radius: 5px !important;
		z-index: 2;
}
.brick.collapsed > .brick-top-buttons:before {
		transform: rotate(0deg);
}
/*dummy background*/
.brick > .brick-top-buttons:after {
		background-image: none !important;
		background-color: hsla(0, 0%, 50%, 0.0) !important;
		backdrop-filter: blur(10px);
		z-index: 1
}

.brick.collapsed > .brick-top-buttons:after {
		background-color: hsla(0, 0%, 50%, 0.15) !important;
}
.brick > .brick-top-buttons:hover:after {
		background-color: hsla(0, 0%, 50%, 0.3) !important;
}

/*BRICK CONTENT*/

/*TAG CONTAINER*/
#app #gridsContainer .brick > .brick-tags {
		padding: unset !important;
		padding-left: var(--brickItemPadLeft) !important;
		padding-right: var(--brickItemPadLeft) !important;
		width: 100% !important;
		display: flex !important;
		align-items: flex-start;
		flex-wrap: wrap;
		float: unset;
		max-width: 100% !important;
		z-index: 949494949494949494 !important;
		gap: var(--bricktagGap) !important;
		margin-top: 18px !important;
		padding-top: 3px !important;
}
.brick.collapsed .brick-tags {
		display: none !important;
}
.brick > .brick-tags li.brick-tag{
		/*outline: var(--bricktagBrdW) solid var(--tagBrdClr) !important;
		outline-offset: calc(var(--bricktagBrdW) * -1)*/
		box-shadow: inset 0 0 0 var(--bricktagBrdW) var(--tagBrdClr) !important;
}
#gridsContainer .brick > .brick-tags li.brick-tag,
#gridsContainer .brick .setting-button {
		margin: 0px !important;
		height: unset !important;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-left: var(--bricktagPadLeftRight) !important;
		padding-right: var(--bricktagPadLeftRight) !important;
		padding-top: var(--bricktagPadTop) !important;
		padding-bottom: var(--bricktagPadBtm) !important;
		border-radius: 100px !important;
		height: unset !important;
		border: unset !important;
		float: unset !important;
		font-size: var(--bricktagFontSize) !important;
		line-height: 1.2 !important
}
.brick > .brick-tags li.brick-tag.colorless {
		--tagBrdClr:var(--tagBrdClr-Colorless);
		background: var(--tagBgClr);
}
.brick > .brick-tags li.brick-tag span {
		float: unset;
		margin-top: 0px;
}
.brick > .brick-tags li.brick-tag input {
		padding: 0px !important;
		font-size: unset !important;
}
#app .brick > .brick-tags li.brick-tag .remove-tag {
		opacity: 0;
		background: hsla(0, 0%, 0%, 1) !important;
		z-index: 949494 !important;
		top: 0;
		bottom: 0;
		right:  0;
		height: auto;
		max-height: calc(100%) !important;
		width: auto !important;
		padding: 3px;
		transform: unset !important;
		border-radius: 100%;
		--brickBtnBrdRad: 100px;
		aspect-ratio: 1 !important;
		transform: scale(0.8) !important;
		transition: .1s !important;
}
#app .brick > .brick-tags li.brick-tag.colorless .remove-tag{
		filter: invert(0)brightness(2.4)contrast(2.5) !important;
}
#app .brick > .brick-tags li.brick-tag:hover .remove-tag {
		opacity: 1;
		transform: scale(0.9)!important;
}
#app .brick > .brick-tags li.brick-tag:hover .remove-tag:hover {
		background: hsla(0, 0%, 0%, 1.0) !important;
		opacity: 1.0;
		transform: scale(1.0)!important;
}

/*NEW TAG BTN*/

#app .brick > .brick-tags.noTags > button img{
		opacity: 0.3 !important;
		filter: unset;
}
#app .brick.darkBrick > .brick-tags.noTags > button img{
		filter: brightness(500%)
}
#app .brick > .brick-tags.noTags > button:hover img{
opacity: 1 !important
}

.brick > .brick-tags .brick-tag.addtag-btn {
		width: var(--brickBtnW) !important;
		opacity: 1 !important;
}
.brick > .brick-tags .brick-tag.brick-tag-new{
		box-shadow: none !important;
}

.brick > .brick-tags .addtag-btn img {
		padding: 0px;
		margin: 0px;
		background: transparent !important;
		display: flex;
		align-items: center;
		justify-content: center;
}


/************
*************
/*BOTTOM BUTTON CONTAINER
*************
*************/
#gridsContainer .brick > .brick-settings {
		padding: 8px var(--brickItemPadLeft) !important;
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: unset;
		height: unset;
		position: absolute;
		right: 0;
		height: unset;
		width: unset;
		opacity: 1 !important;
		left: 0;
		padding-left: var(--brickItemPadLeft) !important
}
/*on tag page*/
.tagPage .brick > .brick-settings{
position:relative !important;
height:34px !important;
}

#gridsContainer .brick > .brick-settings * {
		float: unset;
}
#gridsContainer .brick > .brick-settings > .left,
#gridsContainer .brick > .brick-settings > .right {
		display: flex;
		gap: 4px;
		float: unset;
		flex: 1;
}
#gridsContainer .brick > .brick-settings > .right{
		justify-content: flex-end
}
/*Hide Buttons*/
#gridsContainer .brick > .brick-settings > .left .setting-text,
#gridsContainer .brick > .brick-settings > .left .setting.setting-checklist,
#gridsContainer .brick > .brick-settings > .left .setting-bullet,
#gridsContainer .brick > .brick-settings > .left .setting-embed {
		display: none;
}
#gridsContainer .brick .setting-button {
		box-shadow: unset;
		border-radius: var(--brickBtnBrdRad) !important;
		width: var(--brickBtnW) !important;
		height: var(--brickBtnW) !important;
}
#gridsContainer .brick > .brick-settings .setting-button {
		opacity: .2;
}
#gridsContainer .brick > .brick-settings .setting-button:hover {
		opacity: 1;
}

/************
BRICK ITEM CONTENT
*************/
#app #gridsContainer .objects > li {
		padding-left: var(--brickItemPadLeft) !important;
		padding-right: var(--brickItemPadRight) !important;
		padding-top: 0px !important;
		padding-bottom: 0px !important;
		position: relative;
}

.brick .brick-top-handle {
		z-index: 9494;
		/*height: var(--brickTopHandleHeight) !important;*/
		/*top: calc(var(--brickTopHandleHeight) * -0.6) !important;*/
		/*transition: .15s;*/
		/*background: hsla(0, 0%, 50%, .0);*/
		z-index: 9494 !important;
}

/************
*************
*************
*************
BRICK ITEM - INLINE ELEMENTS
*************
*************
*************
*************/
/************
BRICK ITEM - ITEM MARGINS
*************/
#app #gridsContainer .objects > li {}
/************
BRICK ITEM FONTS
*************/
/*NORMAL TEXT*/
.brick-list .text,
.brick .brick-list .note,
.brickParagraph .brick-placeholder,
.paragraphTextDiv,
.paragraphTextDiv p,
.ProseMirror p {
		line-height: var(--bodyLineHeight) !important;
}

/*SMALL TEXT*/
.brickParagraph.small .brick-placeholder,
.brickParagraph.small .paragraphTextDiv,
.paragraph.small .ProseMirror p {}
/*HEADINGS*/
.brick .brickHeading .brick-placeholder,
.brickHeading .text {
		line-height: 1.2 !important;
		font-weight: 500 !important
}

#app .brick .object .brickHeading {
		margin: 0px !important;
		padding-top: 0px !important;
		padding-bottom: 0px !important;
}


.backgrounded .brick-content .object:hover, .darkmode .backgrounded .brick-content .object:hover{
		background: transparent;
}
/**
UNIVERSAL OVERRIDES
**/
#app .brick .text,
#app .brick .brick-content .objects {
		min-height: unset !important;
}
/*
.brick-content .object{
		background: transparent !important;
}
*/
/************
PARAGRAPHS
*************/
.brick-placeholder {
		display: none !important;
}


/************
TEXT - SMALL
*************/
#app .brick .object > .paragraph.small {
		font-size: unset !important;
		line-height: unset !important;
}
#app .brick .object > .paragraph.small > .text {
		font-size: var(--smallFontSize) !important;
		line-height: var(--smallLineHeight)!important;
		font-weight: 500;
		color: var(--greyedOutClr);
		font-family: sans-serif !important;
		-webkit-font-smoothing: subpixel-antialiased !important;
		--smallFontBldWeight: 600
}
#app .brick .object > .paragraph.small > .text b,
#app .brick .object > .paragraph.small > .text strong {
		color: var(--greyedOutBldClr);
		line-height: calc(var(--smallLineHeight) - 1px);
}
.brick .object > .paragraph.small {
		--itemMargTopBtm: 4px;
}
/************
TEXT - NORMAL > PARAGRAPHS AND LISTS
*************/
.brick .object.type-paragraph > .paragraph.normal,
.brick .object .listitem > .listitem-container {
		font-size: unset !important;
		line-height: unset !important;
}
.brick .object.type-paragraph > .paragraph.normal > .text,
.brick .object .listitem > .listitem-container > .text,
.brick .object .listitem > .listitem-container > .note {
		--smallFontBldWeight: 600;
		font-size: var(--bodyFontSize) !important;
		line-height: var(--bodyLineHeight) !important;
}

/************
TEXT - LARGE
*************/
#app .brick .object > .paragraph.large {
		font-size: unset !important;
		line-height: unset !important;
}
#app .brick .object > .paragraph.large > .text {
		font-size: var(--largeFontSize) !important;
		line-height: var(--largeLineHeight)!important;
		font-weight: 400;
		color: var(--greyedOutClr);
		font-family: sans-serif !important;
		-webkit-font-smoothing: subpixel-antialiased !important;
		--smallFontBldWeight: 600
}
#app .brick .object > .paragraph.large > .text b,
#app .brick .object > .paragraph.large > .text strong {
		color: var(--greyedOutBldClr) !important;
		line-height: calc(var(--smallLineHeight) - .5px);
}
/************
ALL HEADINGS
*************/

#app .brick .object.type-heading > .brickHeading .text, 
#app .brick .object.type-heading > .brickHeading .text div, 
#app .brick .object.type-heading > .brickHeading .text  * {
		font-weight: 500 !important;
		-webkit-font-smoothing: subpixel-antialiased !important;
}

/*HEADINGS > BOLD*/
#app .brick .object.type-heading > .brickHeading .text b {
		font-weight: 600 !important;
		-webkit-font-smoothing: subpixel-antialiased !important;
}
#app .brick .object.type-heading > .brickHeading .text {
		color: var(--bldClr) !important;
		padding-top: 0px !important
}

/************
TABLE / LISTS > FIRST CELL
*************/
#app .listBrick .table-item-columns > .main-cell .mainTextDiv{
white-space:pre-wrap;
}
/************
FIRST LINE BREAK IN HEADING / LIST CELL > MARGIN-TOP
*************/
#app .brick .object.type-heading > .brickHeading .text div:first-child,
#app .listBrick .table-item-columns > .main-cell .mainTextDiv > div:first-child {
margin-top:1px;
}



/************
COLORED TEXT AFTER LINE BREAK
*************/

#app .brick .object > .headingOne > .text div span[data-text-color]{
		font-size: calc(var(--h2FontSize) - .5px) !important;
		line-height: calc(var(--h2LineHeight) - .5px) !important;
		display:block;
}
#app .brick .object > .headingTwo > .text div span[data-text-color]{
		font-size: calc(var(--h3FontSize) - .5px) !important;
		line-height: calc(var(--h3LineHeight) - .5px) !important;
		display:block;
}



/************
HEADING - 1
*************/
#app .brick .object > .headingZero {
		font-size: unset !important;
		line-height: unset !important;
}
#app .brick .object > .headingZero > .text {
		font-size: var(--h1FontSize) !important;
		line-height: var(--h1LineHeight)!important;
}
/************
HEADING - 2
*************/
#app .brick .object > .headingOne {
		font-size: unset !important;
		line-height: unset !important;
}
#app .brick .object > .headingOne > .text {
		font-size: var(--h2FontSize) !important;
		line-height: var(--h2LineHeight)!important;
}

/************
HEADING - 3
*************/
#app .brick .object > .headingTwo {
		font-size: unset !important;
		line-height: unset !important;
}
#app .brick .object > .headingTwo > .text {
		font-size: var(--h3FontSize) !important;
		line-height: var(--h3LineHeight)!important;
}


/************
BOLD
*************/
#app .object strong {
		color: var(--bldClr) !important;
}
#app .object b,
#app .object b *,
#app .object strong,
#app .object strong * {
		font-weight: var(--bldWeight) !important;
		-webkit-font-smoothing: subpixel-antialiased !important;
}
#app .object > .paragraph.small .text > b,
#app .object > .paragraph.small .text > strong {
		--bldClr: var(--greyedOutBldClr)
}
/************
LIST ITEMS
*************/
/*FLOATS*/
.brick .brick-list {
		float: unset !important;
}
/*LIST ITEMS*/
ul.brick-list,
li.listitem {
		margin-top: 0px !important;
		margin-bottom: 0px !important
}

ul.brick-list.child-list {
		margin-left: calc(var(--listbulletWidth) + var(--listbulletMargRight));
}

/*LIST ITEM BULLETS*/
#app .brick .brick-list li .listitem-container:before,
#app .brick .brick-list li .listitem-container > .todo-checkbox {
		min-width: 10px !important;
		font-size: calc(var(--bodyFontSize) - 1px) !important;
		line-height: 18px !important;
		margin-top: 0px !important;
		margin-bottom: 0px !important;
		width: var(--listbulletWidth) !important;
		margin-right: var(--listbulletMargRight) !important;
		text-align: right;
		filter: unset !important;
		color: var(--bodyClr);
		z-index: 2;
		vertical-align: top;
		display: inline-block;
		padding-bottom: 0px !important;
		/* top: -1px; */
}
/*ORDERED LIST*/
#app .brick .brick-list li.ordered-list .listitem-container:before {
		color: var(--bodyClr);
		content: counter(item) "." !important;
		right: 2px;
		position: relative;
		margin-right: 20px;
		line-height: var(--bodyLineHeight) !important;
		font-size: var(--bodyFontSize) !important;
		font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "SF Pro Display", "SF Pro Icons", "Noto Sans", Helvetica, "Nimbus Sans L", Arial, sans-serif !important;
}
#app .brick .brick-list li.ordered-list ul .listitem-container:before {
		content: counter(item, lower-alpha) "." !important;
}
#app .brick .brick-list li.ordered-list ul li ul .listitem-container:before {
		content: counter(item, lower-roman) "." !important;
}

/*UNORDERED*/
#app .brick .brick-list li.unordered-list .listitem-container:before {
		content: "" !important;
		height: calc(var(--listbulletWidth) * 1) !important;
		border-radius: unset;
		background: transparent !important;
		background-image: var(--iconbulletCircle) !important;
		background-repeat: no-repeat !important;
		background-size: 6px !important;
		background-position: 52% 50% !important;
		opacity: 1.0;
		font-weight: 900 !important;
		top: var(--unorderedlistMargTop) !important;
		position: relative;
}
/*TODOS LIST*/
#app .brick .brick-list li .listitem-container > .todo-checkbox {
		width: calc(var(--listbulletWidth) * 1) !important;
		height: calc(var(--listbulletWidth) * 1) !important;
		min-width: unset !important;
		z-index: 5 !important;
		padding: 0px !important;
		border: 1px solid var(--todoCheckBoxBrdClr);
		background: var(--todoCheckBoxBgClr);
		background-image: unset !important;
		position: relative;
		transition: .12s !important;
		transform: scale(var(--checkboxTransformScale)) !important;
		transform-origin: var(--checkboxTransformOrigin);
		border-radius: var(--checkboxBrdRad) !important;
		top: var(--checkboxMargTop);
}
.checklist {
		--listbulletMargRight: 8px;
}

.todo-checkbox:hover {
		background: var(--todoCheckBoxBgClr) !important;
}
.todo-checkbox:after {
		content: "";
		position: absolute;
		padding: 0px !important;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: var(--iconCheckMark);
		background-repeat: no-repeat;
		background-size: 14px;
		background-position: center;
		transition: 350ms cubic-bezier(.25, 2.9, .11, .4);
		transform: scale(0);
		opacity: 0.5
}

/*TODOS LIST - CHECKED - ITEM*/
.brick .brick-list li.checked {
		opacity: 1 !important;
}
/*TODOS LIST - CHECKED - CHECKBOX*/
.checked > div .todo-checkbox {
		background: var(--todoCheckBoxBgClr-Checked)!important;
		opacity: 1 !important
}
/*TODOS LIST - CHECKED - CHECKMARK*/
.checked > div .todo-checkbox:after {
		transform: scale(.85);
}
/*CHECKED ITEMS*/
#app .brick-list .checkeditems {
		position: relative;
		display: flex;
		flex-direction: column;
		margin-top: calc(var(--itemMargTopBtm) * 1) !important;
		padding-top: 0px !important;
		border-top: 1px solid hsla(0, 0%, 50%, 0.3) !important
}

/*TODOS LIST - CHECKED - TEXT*/
.brick .brick-list li.checked .listitem-container > .note,
.brick .brick-list li.checked .listitem-container > .text {
		opacity: .5
}

.checkeditems .progress {
		margin: 0px !important;
		padding-top: calc(var(--itemMargTopBtm) * 1) !important;
		padding-bottom: calc(var(--itemMargTopBtm) * 1.0) !important;
		display: flex !important;
}
.checkeditems .progress .arrow {
		margin-top: 0px !important;
		width: calc(var(--listbulletWidth) * 1) !important;
		height: calc(var(--listbulletWidth) * 1) !important;
		padding: 4px;
		border-radius: var(--brickBtnBrdRad);
		transform-origin: 50% 50%;
		transform: scale(0.9) !important;
		border: none;
		filter: unset !important;
		transition: .1s;
}
.checkeditems .progress .arrow:hover {
		background: hsla(0, 0%, 50%, 0.45)!important
}
.checkeditems .progress .arrow.closed {
		transform: scale(0.9)rotate(-90deg) !important;
}
.checkeditems .progress span {
		padding-left: var(--listbulletMargRight) !important;
		font-size: calc(var(--bodyFontSize) - 1px) !important;
		--checkedDropDownFontSize: calc(var(--bodyFontSize) - 1px)
}
.checkeditems .items{
		overflow: unset !important;
}
#app .brick .brick-list .newListItem {
		font-size: var(--bodyFontSize) !important;
		padding-left: calc(var(--listbulletMargRight) + var(--listbulletWidth)) !important;
}
.items.expanded > div > li:first-child {
		margin-top: 0px !important;
}
.brick .brick-list .note {
		opacity: 1;
		color: var(--greyedOutClr) !important
}
button.newListItem ~ .dropdown-bubble + div {
		display: none;
}
.brick .object .listitem > .listitem-container > .note {
		padding-left: calc(var(--listbulletWidth) * 1 + var(--listbulletMargRight));
}


/************
LIST ITEM - EXPAND COLLAPSE
*************/
/*HIDDEN BUTTON -  MAKE NORMAL EXPAND/COLLAPSE BUTTON TRANSPARENT - PUT IN SAME PLACE AS BULLET*/
.brick-list .listitem.unordered-list .listitem-container > .arrow {
		border-radius: 100px;
}
#app .brick-list .listitem .listitem-container > .arrow {
		opacity: 1 !important; 
}
.brick-list .listitem .listitem-container > .arrow,
.arrow + .text.itemTextDiv:before {
		position: absolute;
		left: 0;
		width: calc(var(--listbulletWidth) * 1) !important;
		height: calc(var(--listbulletWidth) * 1) !important;
		padding: calc(var(--listbulletWidth) * 0.5);
		margin: 0px !important;
		opacity: 1;
		background: transparent !important;
		filter: unset !important;
		z-index: 3 !important;
		transform: unset !important;
		transition: .1s;
		content: "";
		border-radius: 5px;
}
/*VISIBLE BULLET*/
.listitem .arrow + .text.itemTextDiv:before {
		opacity: 0 !important; 
		padding: 0px;
		background: var(--listbulletcollapsedClr) !important;
		z-index: 0 !important;
		transition: .1s;
		transform: scale(.2) !important;
}
.listitem .arrow.closed + .text.itemTextDiv:before {
		transform: scale(0.85) !important;
		opacity: 1 !important;
}

/*VISIBLE - UNORDERED*/
.listitem.unordered-list .arrow + .text.itemTextDiv:before {
		border-radius: 100px;
		top: var(--unorderedlistMargTop)
}
/*VISIBLE - ORDERED*/
.listitem.ordered-list .arrow + .text.itemTextDiv:before {
		transform: scale(0) !important;
		transition: 0.2s cubic-bezier(.55, 1.67, 0.11, 0.8);
		background: hsla(0, 0%, 100%, 0.3) !important;
		box-shadow: 0 0 0 2px var(--listorderedbulletBrdClr);
}
.listitem.ordered-list .arrow.closed + .text.itemTextDiv:before {
		transform: scale(.8) !important;
		background: hsla(0, 0%, 50%, 0.3) !important;
		box-shadow: 0 0 0 2px var(--listorderedbulletBrdClr)
}
.listitem.ordered-list .arrow + .text.itemTextDiv:before {
		border-radius: 4px !important;
		width: calc(var(--listbulletWidth) * 1) !important;
		height: calc(var(--listbulletWidth) * 1) !important;
		background: transparent !important;
		box-shadow: 0 0 0 0px var(--listorderedbulletBrdClr);
}

.checklist .listitem .arrow + .text.itemTextDiv:before,
.listitem.ordered-list .arrow + .text.itemTextDiv:before{
		opacity: 1 !important;
		transform: scale(calc(var(--checkboxTransformScale) + 0)) !important;
		background: transparent !important;
		box-shadow: 0 0 0 0px  hsla(0,0%,50%,.25) !important;
		outline-offset: -1px;
		top: var(--checkboxMargTop) !important;
		margin: 0px !important;
		transform-origin: var(--checkboxTransformOrigin) !important;
		border-radius: calc(var(--checkboxBrdRad) + 0px) !important
}
.checklist .listitem .arrow.closed + .text.itemTextDiv:before,
#app .listitem.ordered-list .arrow.closed + .text.itemTextDiv:before{
		box-shadow: 0 0 0 4px  var(--listbulletcollapsedClr) !important;
		background: transparent !important;
		transform-origin: var(--checkboxTransformOrigin) !important;
}
#app .checklist .brick-list .listitem .listitem-container > .arrow{
		transform: scale(1.3) !important;
		transform-origin: center !important;
		top: var(--checkboxMargTop) !important;
		width: calc(var(--listbulletWidth) * 1) !important;
		height: calc(var(--listbulletWidth) * 1) !important;
		left: 5px

		
}
/*EXPANDING INDICATOR
#app .listitem .arrow + .text.itemTextDiv:before {
		opacity: 1 !important;
		top: unset !important;
		width: 19px !important;
		height: 19px !important;
		max-width: 100% !important;
		border: 1px solid red !important;
		position: relative;
		z-index: 949494;
		left: calc(var(--listbulletWidth) * -1 + var(--listbulletMargRight) * -1) !important;
		right: 10px !important;
}*/

/************
BLOCKQUOTES
*************/
#app .brick .brick-content .quote {
		padding-left: calc(var(--listbulletWidth));
		border-left: var(--blockquoteBrdW) solid hsla(0, 0%, 50%, 0.5);
		
}
#app .brick .brick-content .quote .editor-content,
#app .brick .brick-content .quote .paragraphTextDiv {
		background: transparent;
		border: none !important;
		padding-top: 1px;
		padding-bottom: 1px;
		padding-left: 0px !important;
}


/************
CODEBLOCKS
*************/
#app pre {
		background: rgba(128, 128, 128, 0.15);
		border-radius: 5px;
		padding: 4px 10px;
		white-space: pre-wrap;
		display: block;
		line-height: calc(var(--bodyLineHeight) + -1px) !important;
		margin-top: calc(var(--itemMargTopBtm) * 0.5) !important
}
button.copyCodeBtn.has-info-bubble {
		top: 3px;
		right: 3px;
		transform-origin: top right;
		transform: scale(0.6);
		transition: 0.2s cubic-bezier(.55, 2.2, 0.31, 0.8);
}

#app pre code {
		white-space: pre-line;
		overflow: unset;
		text-overflow: unset;
		font-size: calc(var(--bodyFontSize) - 3px);
		line-height: calc(var(--bodyLineHeight) + -3px) !important;
		display: block;
}
#app pre,
#app pre * {
				-webkit-font-smoothing:antialiased !important;

}
#app pre code span{
		white-space: unset;
}
/************
MARGINS - ALL ELEMENTS
*************/
.brick .checklist,
.brick .list,
.brick .brick-list li,
.brick .object > .paragraph,
.brick .object .brick-button {
		margin-top: var(--itemMargTopBtm) !important;
		position: relative !important;
}

#app .brick .brick-content .object .divider.line {
		height: unset !important;
		padding: calc(var(--itemMargTopBtm)) 0px !important;
		margin-top: calc(var(--itemMargTopBtm) * .5) !important;
		margin-bottom: calc(var(--itemMargTopBtm) * -.5) !important;
}
#app .divider-asterisk,
#app .divider.line {
		padding: 0px !important;
		margin: unset !important;
		height: unset !important;
}
.line .divider-asterisk {
		border-color: hsla(0, 0%, 50%, .5)
}
/************
MARGINS - HEADINGS
*************/
#app .brick .object.type-heading > div {
		margin-top: var(--itemMargTopBtm) !important;
		
}
#app .brick .objects > .object:first-child > div {
		margin-top: 10px !important;
		margin-bottom: 0px !important;
}
#app .brick .objects > .object:first-child > div .text {
		padding: 0px !important;
}

#app .brick .objects > .object.type-heading:first-child > div {
		margin-bottom: calc(var(--itemMargTopBtm) * .5) !important;
}
#app .brick.collapsed .objects > .object.type-heading:first-child > div {
		margin-bottom: calc(var(--itemMargTopBtm) * 0) !important;
}



/************
MARGINS - BUTTON
*************/
.brick .object .brick-button {
		--itemMargTopBtm: 14px;
}
/************
MARGINS - BLOCKQUOTE
*************/
.brick .object .brick-button {
		--itemMargTopBtm: 14px;
}
/**/
.brick .checklist > ul > div > li:first-child,
.brick .list > ul > div > li:first-child {
		margin-top: 0px !important;
}

/************
MENU - HOVER MENUS
*************/
/*BRICK -  HOVER - DOT MENU*/
#gridsContainer .object img.object-handle,
#gridsContainer .object img.list-handle,
#gridsContainer .object img.item-options,
#gridsContainer .object img.object-options {
		height: calc(var(--brickItemPadRight));
		max-height: 100% !important;
		margin: unset !important;
		padding: 5px !important;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9 !important;
		border-radius: calc(var(--brickBtnBrdRad) - 1px)!important;
}
.object:hover .object-handle,
.brick-list .hiddenItem:hover .item-options,
.brick-list .hiddenItem:hover .list-handle,
.brick-list .text:hover ~ .item-options,
.brick-list .text:hover ~ .list-handle,
.brick .brick-list .item-options:hover,
.brick .brick-list .list-handle:hover,
.brick .brick-list .note:hover ~ .item-options,
.brick .brick-list .note:hover ~ .list-handle {
		opacity: .2 !important;
}

/*BRICK > HOVER > DOT MENU > HOVER*/
#gridsContainer .object:hover img.object-handle:hover,
#gridsContainer .object:hover img.list-handle:hover,
#gridsContainer .object:hover img.item-options:hover,
#gridsContainer .object:hover img.object-options:hover {
		opacity: .9 !important;
		background: hsla(0, 0%, 50%, 0.2) !important
}



/*MENU: LEFT > OBJECT DRAGGER*/
#gridsContainer .object img.object-handle {
		width: var(--brickItemPadLeft) !important;
		height: calc(var(--listbulletWidth) * 1) !important;
		left: calc(var(--brickItemPadLeft) * -1) !important;
		padding: 0px 3px !important;
		top:0 !important;
}
/*MENU: RIGHT > UL/LI LIST DRAGGER*/
#app #gridsContainer .object img.list-handle {
		width: calc(var(--brickItemPadRight) * 0.65) !important;
		height: calc(var(--listbulletWidth)* 1) !important;
		padding: 2px 3px !important;
		margin: 0px !important;
		top: 0;
}

/*MENU: LEFT > 3 DOT ITEM OPTIONS*/
#app #gridsContainer .object img.item-options,
#app #gridsContainer .object img.object-options {
		width: var(--brickItemPadRight) !important;
		min-height: calc(var(--listbulletWidth)* 1) !important;
		max-height: 100% !important;
		right: calc(var(--brickItemPadRight)* -1) !important;
		padding: 2px 3px !important;
		top: 0 !important;
}
#app #gridsContainer .object img.object-options{
		padding: 5px 3px !important;
}
/*RIGHT MENU BTN CONTAINER*/


/************
RELATIVE OVERRIDES

#app .brick .brick-list li,
#app .brick .brick-list li .listitem-container,
#app .brick .checklist {
		position: unset !important;
}
*************/


#app .ui-resizable-handle,
#app .visual-grid > .visual-grid-item.ui-resizable-autohide > .ui-resizable-handle, .visual-grid > .visual-grid-item.ui-resizable-disabled > .ui-resizable-handle{
display:block !important;
}
/************
MENU - POPUP FORMATTING
*************/
:root {
		--formattingBtnW: 27px;
		--formattingBtnBrdRad: 4px;
		--formatMenuW:268px;
}
.editor-menu-bubble {
		padding: 4px 4px !important;
		gap: 2px !important;
		box-shadow: 0 0 0 1px hsla(0, 0%, 50%, .1),
		0 6px 20px -4px hsla(0, 0%, 0%, 0.4);
}
.editor-menu-bubble.hasConvertOptions {
		flex-wrap: wrap;
		max-width: var(--formatMenuW);
		min-width: var(--formatMenuW);
		z-index: 94949494;
		opacity: 1;
		margin-top: -50px !important;
}
.editor-menu-bubble .dropdown-bubble {
		overflow: auto;
		padding-top: 0px;
		padding-bottom: 0px;
		border-radius: 14px;
		background: hsla(0,0%,12%);
box-shadow: 0 0 0 1px hsla(0, 0%, 50%, .1),
		0 6px 20px -4px hsla(0, 0%, 0%, 0.4);
}
.editor-menu-bubble .dropdown-bubble.open > li {
		border: 1px solid hsla(0, 0%, 50%, 0.1);
		border-left: 0px;
		border-right: 0px;
		margin-top: -1px
}
.editor-menu-bubble .dropdown-bubble.open > li:first-child {
		border-top: none;
		margin-top: unset
}
.editor-menu-bubble .dropdown-bubble.open > li:last-child {
		border-bottom: none;
}
/*buttons*/
.editor-menu-bubble button {
		border-radius: 0px;
		margin: unset !important;
		transition: .15s !important;
		width: var(--formattingBtnW);
		height: var(--formattingBtnW);
		border-radius: var(--formattingBtnBrdRad)
}
.editor-menu-bubble .textTypeButton {
		min-width: calc(var(--formattingBtnW) * 3) !important;
		flex: 1;
		text-align: left;
		padding: 5px 7px;
}
.editor-menu-bubble .separator:nth-of-type(3) {
		display: none;
}


/************
COLORS
*************/


#app .brick .text, 
#app .brick .text i, 
#app .brick .text b, 
#app .brick .text u, 
#app .brick .text strike,
#app .brick .text span, 
#app .brick .text div{
		color: var(--bodyClr);
}

/*
#app .brick .text b,
#app .brick .brickHeading .text,
#app .brick .brickHeading .text div,
#app .brick .brickHeading .text span  {
color: var(--bldClr) !important;
}
*/

#app .brick .text b,
#app .brick .brickHeading .text  {
--bodyClr: var(--bldClr);
}



/************
BACKGROUND COLORS
*************/
/*START.ME > YELLOW*/
.brick-background[style*="background: rgb(255, 245, 213);"],
.dropdown-bubble .colors button[style*="rgb(255, 245, 213)"]{
		background: hsl(60, 56%, 91%) !important;
		
}

/*START.ME > GRAY*/
.brick-background[style*="background: rgb(255, 255, 255)"]{
		--darkmode-darkgrey:rgb(34, 34, 34) !important;
}



/************
TEXT COLORS
*************/
.visual-grid .walling-text-color[data-text-color="#9e9e9e"] {
		color: var(--greyedOutClr) !important;
}

/************
OVERRIDE FILTERS
*************/
.darkmode,
.darkmode .brick-background{
		filter: unset !important
}



/************
FONTS
*************/
.headingFontInter .brickHeading .text,
.headingFontInter .brickHeading .text *,
.headingFontInter .section-list-view .listBrick .textDiv,
.headingFontInter .textAppliedFont,
.InterFont,
.sectionTitleFontInter .grid-title .titleDiv,
.sectionTitleFontInter .grid-title .titleDiv *,
.sectionTitleFontInter .section-kanban-view .column-header .columnTitle,
.textFontInter .brick-button .button span,
.textFontInter .brick-list .text,
.textFontInter .brick-list .text *,
.textFontInter .embed-text *,
.textFontInter .grid-title .descriptionDiv,
.textFontInter .grid-title .descriptionDiv *,
.textFontInter .type-paragraph .paragraphTextDiv,
.textFontInter .type-paragraph .paragraphTextDiv *,
.textFontInter .wall-header .title .wallDescription,
.textFontInter .wall-header .title .wallDescription *,
.wallTitleFontInter .wall-header .title .wallNameDiv {
		font-family: -apple-system, BlinkMacSystemFont, Inter, Helvetica Neue, SF Pro Display, SF Pro Icons, Noto Sans, Helvetica, Nimbus Sans L, Arial, sans-serif !important
}

li.object > div > .text,
li.object * {
		-webkit-font-smoothing: subpixel-antialiased !important;
}

.brick .brick-list .note[contenteditable=true]:empty:before{
}

/************
GRID ADJUST
*************/



/************
POPUP
*************/

#app #gridsContainer .brick-popup-expanded{
		--brickItemPadLeft:30px !important;
		/*small font*/
		--smallFontSize:calc(var(--bodyFontSize) + -2px);;
		--smallLineHeight:calc(var(--bodyLineHeight) + -4px);;
		/*font sizes*/
		--bodyFontSize:16px;
		--bodyLineHeight:21px;
		/*Large font*/
		--largeFontSize:calc(var(--bodyFontSize) + 2px);
		--largeLineHeight:calc(var(--bodyLineHeight) + 2px);
		/*Header 3*/
		--h3FontSize:calc(var(--bodyFontSize) + 3px);
		--h3LineHeight:calc(var(--bodyLineHeight) + 3px);;
		/*Header 2*/
		--h2FontSize:calc(var(--bodyFontSize) + 5px);
		--h2LineHeight:calc(var(--bodyLineHeight) + 4px);;
		/*Header 1*/
		--h1FontSize:calc(var(--bodyFontSize) + 5px);
		--h1LineHeight:calc(var(--bodyLineHeight) + 5px);;
		/*font-weights*/
		--bldWeight:600;
		/*margins and padding*/
		--itemMargTopBtm:8px;
		/***/
		--unorderedlistMargTop:2px;
		--checkboxMargTop:1px;
}




#app .brick-popup-expanded .brick-nav-arrows,
#app .brick-popup-expanded .brick-settings{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 4px;
}

#app .brick-popup-expanded .brick-nav-arrows > .setting-button,
#app .brick-popup-expanded .brick-sidebar-topbar  .setting-button {
		width: 28px !important; 
		height: 28px !important; 
		display: flex !important;
		margin: 0px !important;
}
#app .brick-popup-expanded .brick-sidebar-topbar  .setting-button {
		margin-right: 5px !important;
}

#app .brick-popup-expanded .brick-settings {
		height: 70px;
		z-index: 9494949494;

}
#app .brick-popup-expanded .brick-settings .setting-button,
#app .brick-popup-expanded .brick-settings .setting-button button{
		width: 30px !important;
		height: 30px !important;
		display: flex !important;
		align-items: center !important;
		justify-content: center !important;
		padding: 0px !important;
		opacity: .7
}
#app .brick-popup-expanded .brick-content{
		margin-bottom: 70px !important;
}

#app .brick-popup-expanded .brick-content .objects{
		display: flex;
		flex-direction: column;
		align-items: flex-end
}

#app #wallContainer #gridsContainer .brick-popup-expanded .objects > li{
		max-width: 800px;
		padding-right: calc(var(--brickItemPadLeft) * 1) !important;
		position:relative !important;
}
#app #wallContainer #gridsContainer .brick-popup-expanded .objects > li > div {
		position:unset !important;
}


/****
HANDLES*/

#app #gridsContainer .brick-popup-expanded .object img.list-handle,
#app #gridsContainer .brick-popup-expanded .object img.item-options,
#app #gridsContainer .brick-popup-expanded .object img.object-handle,
#app #gridsContainer .brick-popup-expanded .object img.object-options{
	min-width: var(--brickItemPadLeft) !important;
	min-height: 23px !important;
	max-height: unset !important;
	padding: 3px !important;
	top:var(--listMargTop) !important;
}
#app #gridsContainer .brick-popup-expanded .object img.object-handle {
left:0 !important
}



#app #gridsContainer .brick-popup-expanded .object img.object-options{
		right: 0 !important;
}
#app #gridsContainer .brick-popup-expanded .object img.inline-add-comment {
	right: calc(var(--brickItemPadLeft) * 1) !important;
}


#app #gridsContainer .objects > li:hover {
	background:transparent !important;
}
/************
ICONS
*************/


:root{
		--iconbulletCircle:var(--iconbulletCircle-Black);
		--iconCheckMark:var(--iconCheckMark-Black);
}
.darkmode .darkBrick,
.brick.noBackground {
		--iconbulletCircle:var(--iconbulletCircle-White);
		--iconCheckMark:var(--iconCheckMark-White);

}

:root {
		--iconChevron: url('data:image/svg+xml;utf8,<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.3323 11.1026C31.2226 10.1836 31.2226 8.69376 30.3323 7.77483C29.4421 6.85591 27.9988 6.8559 27.1086 7.77483L16.0086 19.2329L4.90405 7.77021C4.01136 6.84873 2.56404 6.84873 1.67135 7.77021C0.778668 8.69169 0.778668 10.1857 1.67135 11.1072L14.3791 24.2248C14.3819 24.2278 14.3848 24.2308 14.3877 24.2338C15.2761 25.1508 16.7152 25.1527 17.6059 24.2396C17.6092 24.2361 17.6126 24.2327 17.616 24.2292C17.6188 24.2263 17.6216 24.2233 17.6245 24.2204L30.3323 11.1026Z" fill="%23808080"/></svg>');
		--iconbulletCircle-Black: url('data:image/svg+xml;utf8,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="24" height="24" rx="12" fill="black" stroke="black" stroke-width="2"/></svg>');
		--iconbulletCircle-White: url('data:image/svg+xml;utf8,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="24" height="24" rx="12" fill="white" stroke="white" stroke-width="2"/></svg>');
		/*check*/
		--iconCheckMark-Black:url('data:image/svg+xml;utf8,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.5788 7.81965C26.7178 6.95869 25.3219 6.95869 24.461 7.81965L12.7773 19.5034L7.54045 14.2666C6.67921 13.4053 5.28284 13.4053 4.4216 14.2666C3.56035 15.1278 3.56035 16.5242 4.4216 17.3854L11.2161 24.1799C11.5315 24.4953 11.9191 24.6954 12.3259 24.7797C13.0287 24.926 13.7898 24.7264 14.3358 24.1804L27.5788 10.9375C28.4397 10.0765 28.4397 8.68062 27.5788 7.81965Z" fill="black" stroke="black" stroke-width="0.3"/></svg>');
		--iconCheckMark-White:url('data:image/svg+xml;utf8,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.5788 7.81965C26.7178 6.95869 25.3219 6.95869 24.461 7.81965L12.7773 19.5034L7.54045 14.2666C6.67921 13.4053 5.28284 13.4053 4.4216 14.2666C3.56035 15.1278 3.56035 16.5242 4.4216 17.3854L11.2161 24.1799C11.5315 24.4953 11.9191 24.6954 12.3259 24.7797C13.0287 24.926 13.7898 24.7264 14.3358 24.1804L27.5788 10.9375C28.4397 10.0765 28.4397 8.68062 27.5788 7.81965Z" fill="white" stroke="black" stroke-width="0.3"/></svg>');
}




/***********
! COLLAPSED CARDS - show first line
************/
.brick.collapsed .objects > li:nth-child(1){
max-height:unset !important;
}
/*
.brick.collapsed .objects > li.type-paragraph:nth-child(2){
display:block !important;
}

.brick.collapsed .objects > li.type-paragraph:nth-child(2) > div {
display:none !important;
}
.brick.collapsed .objects > li.type-paragraph:nth-child(2) > div.large {
display:block !important;
}


*/






	
</style>`;

	document.head.insertAdjacentHTML("beforeend", style);
})();
