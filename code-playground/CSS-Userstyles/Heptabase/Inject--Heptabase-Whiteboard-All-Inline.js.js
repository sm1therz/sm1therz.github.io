(function() {
	let style = `<style>






/***********
************
************
************
************
************
! ROOT - WHITEBOARD
************
************
************
************
************
************/
[class*="whiteboardCanvas"] {
	/*whiteboard*/
	--whiteBoardBoardBg: #eeeded;
	--whiteBoardCardBgClr: white;
	--whiteBoardCardBrdClr: hsl(180, 0%, 0%, 0.2);
	--whiteBoardCardBrdClr-Editing: hsl(180, 0%, 0%, .12);
	--whiteBoardToolBarBg: hsl(180, 0%, 70%, 0.11);
	--whiteBoardMapCardBgClr: hsla(0, 0%, 50%, 0.15);
	/*whiteboard - mind map*/
	--mMapBrdClr: hsla(0, 0%, 0%, .16);
	--mMapOutlineClr: hsla(0, 0%, 0%, .07);
	/*whiteboard - bg colors*/
	--whiteboardMapSVGFill: linear-gradient(0deg, #348f50 0%, #56b4d3 140%);

	--whiteBoardCardBg-Red: hsl(0, 90%, 89%);
	--whiteBoardCardBg-Orange: hsl(25, 90%, 84%);
	--whiteBoardCardBg-Yellow: hsl(48, 83%, 76%);
	--whiteBoardCardBg-Green: hsl(135, 40%, 82%);
	--whiteBoardCardBg-Blue: hsl(210, 100%, 89%);
	--whiteBoardCardBg-Purple: hsl(260, 50%, 88%);
	--whiteBoardCardBg-Black: hsl(0, 0%, 90%);
	/*--bg-black-sect: hsla(0, 0%, 90%);*/
	/*whiteboard - border colors*/
	--whiteBoardCardBrd-Red: hsla(0, 50%, 75%);
	--whiteBoardCardBrd-Orange: hsla(33, 70%, 65%);
	--whiteBoardCardBrd-Yellow: hsla(45, 71%, 60%);
	--whiteBoardCardBrd-Green: hsla(135, 40%, 64%);
	--whiteBoardCardBrd-Blue: hsla(210, 70%, 68%);
	--whiteBoardCardBrd-Purple: hsla(250, 81%, 74%, 0.7);
	--whiteBoardCardBrd-Black: hsla(0, 0%, 0%, .2);
	/*whiteboard - Sections*/
	--whiteBoardSectionBgClr: #e9e8e8;
	--whiteBoardSectionBrdClr: hsl(0, 0%, 75.5%);
	/*whiteboard - Text Element*/
	--whiteBoardTextElementBgClr: var(--whiteBoardBoardBg);
	--whiteBoardTextElementBgClr-Black: var(--background-editor-primary);
	--whiteBoardTextElementBrdClr: hsla(0, 0%, 0%, .115);
	--textelementBrdClr-Editing: hsla(0, 0%, 0%, .05);
	--whiteboardtextelementLevelBrdClr: hsla(0, 0%, 0%, .1);
	--whiteBoardTextElementBg-Yellow: hsl(49.8, 100%, 76%, 0.4);

	/*whiteboard - Toolbars*/
	--whiteboardToolbarBgClr: hsla(0, 0%, 100%, 0);
	--whiteboardToolbarBtnBrdClr: hsla(0, 0%, 00%, .1);
	/*whiteboard - card/text - border color*/
	--whiteboardEditingBrdClr: hsla(0, 0%, 0%, 0.15);
	;
}

[data-theme="dark"] [class*="whiteboardCanvas"] {
	/*whiteboard*/
	--whiteBoardBoardBg: #191919;
	--whiteBoardCardBgClr: hsl(214, 8%, 15%);
	--whiteBoardCardBrdClr: hsl(180, 0%, 61%, 0.2);
	--whiteBoardCardBrdClr-Editing: hsl(180, 0%, 61%, 0.1);
	--whiteBoardToolBarBg: hsl(180, 0%, 10%, 0.5);
	--whiteBoardMapCardBgClr: hsla(0, 0%, 50%, .3);
	/*whiteboard - mind map*/
	--mMapBrdClr: hsla(0, 0%, 100%, .1);
	--mMapOutlineClr: hsla(0, 0%, 100%, .15);
	/*whiteboard - bg colors*/
	--whiteboardMapSVGFill: linear-gradient(0deg, #348f50 0%, #56b4d3 140%);
	--map-color-svg: var(--whiteboardMapSVGFill);
	--whiteBoardCardBg-Red: hsl(0, 48%, 24%);
	--whiteBoardCardBg-Orange: hsl(32, 51%, 26%);
	--whiteBoardCardBg-Yellow: hsl(50, 60%, 23%);
	--whiteBoardCardBg-Green: hsl(155, 57%, 20%);
	--whiteBoardCardBg-Blue: hsl(210, 55%, 25%);
	--whiteBoardCardBg-Purple: hsl(269, 41%, 26%);
	--whiteBoardCardBg-Black: #191919;
	/*whiteboard - border colors*/
	--whiteBoardCardBrd-Red: hsl(2, 48%, 32%);
	--whiteBoardCardBrd-Orange: hsl(32, 51%, 35%);
	--whiteBoardCardBrd-Yellow: hsl(50, 60%, 30%);
	--whiteBoardCardBrd-Green: hsla(155, 57%, 30%);
	--whiteBoardCardBrd-Blue: hsl(210, 55%, 36%);
	--whiteBoardCardBrd-Purple: hsl(269, 41%, 36%);
	--whiteBoardCardBrd-Black: hsla(0, 0%, 100%, .15);
	/*--bg-black-sect: hsla(0, 0%, 30%);*/
	/*whiteboard - Sections*/
	--whiteBoardSectionBgClr: hsl(0, 0%, 10.75%);
	--whiteBoardSectionBrdClr: hsl(0, 0%, 25.5%);
	/*whiteboard - Text Element*/
	--whiteBoardTextElementBgClr: var(--whiteBoardBoardBg);
	--whiteBoardTextElementBgClr-Black: var(--background-editor-primary);
	--whiteBoardTextElementBrdClr: hsl(0, 0%, 19%);
	--textelementBrdClr-Editing: hsl(0, 0%, 22%, .4);
	--whiteboardtextelementLevelBrdClr: hsla(0, 0%, 100%, .1);
	--whiteBoardTextElementBg-Yellow: hsl(55.38, 50.23%, 16.86%, 60.2%);
	/*whiteboard - Toolbars*/
	--whiteboardToolbarBgClr: hsla(0, 0%, 100%, .0085);
	--whiteboardToolbarBtnBrdClr: hsla(0, 0%, 100%, .05);
	/*whiteboard - card/text - border color*/
	--whiteboardEditingBrdClr: hsla(0, 0%, 100%, 0.1);
}

/*****************
WHITEBOARD
******************/
:root {
	--whiteboardCardNavHeight: 30px;
	--whiteboardCardPadLeftRight: 22px;
	--whiteboardCardPadTop: 0px;
	--whiteboardCardPadBtm: var(--whiteboardCardNavHeight);
	/*text element*/
	--whiteboardTextPadLR: 6px;
	--whiteboardTextBrdRad: 10px;
	/*section-title*/
	--secTitleBrdW: 1px;
	--secTitleBrdRad: 8px;
	/*section*/
	--secBrdW: 2px;
	--secBrdRad: 20px;
	--secTitleTxtSize: 14px;
	--secTitlePadTopBtm: 1px;
	--secSvgW: 18px;
	--secSvgMarg: 10px;
	--secTitleInputW: 100%;
	--sectionTitleTransform: scale(1);
	--sectionTitleMaxW: 100%;
}

/*****************
WHITEBOARD LINKS IN TEXT ELEMENTS

[class*="_whiteboardObject"] [data-node-type="paragraph"] a[href*="heptabase.com"],
[class*="_whiteboardObject"] [data-node-type*="list"] a[href*="heptabase.com"]{
	color: var(--text-color);
	border-bottom-color: hsla(0, 0%, 50%, .5);
}
******************/
/*****************
WHITEBOARD LINKS IN HEADINGS
******************/
[class*="_whiteboardObject"] [data-node-type="heading"] a[href*="heptabase.com"] {
	color: var(--bldClr);
	border-bottom-color: hsla(0, 0%, 50%, .5);
}

/*****************
******************
******************
WHITEBOARD - CARDS
******************
******************
******************/
/*****************
CARD - EDITING BORDERS
******************/
/*NORMAL*/
[data-object-type="textElement"] > [class*="container"],
[data-object-type="cardInstance"] > [class*="contentContainer"] {
	transition: .2s;
}

/*EDITING*/
[data-object-type="textElement"][data-is-editing="true"] > [class*="container"],
[data-object-type="cardInstance"][data-is-editing="true"] > [class*="contentContainer"],
[data-object-type="highlightElementInstance"][class*="active"] > .border-primary {
	border-color: var(--whiteBoardCardBrdClr-Editing);
}

/*****************
CARD - BACKGROUNDS
******************/
[class*="_whiteboardObject"] [class*="contentContainer"] {
	box-shadow: inset 0 0 0 1px var(--whiteBoardCardBrdClr);
}

[class*="_whiteboardObject"] [data-object-type="mindMapHighlightElementNode"] > [style*="background"]{
	box-shadow: inset 0 0 0 1px var(--whiteBoardCardBrdClr) !important;
}
[class*="_whiteboardObject"] [class*="contentContainer"][style*="--background-secondary"] {
	background: var(--whiteBoardCardBgClr) !important;
}
[class*="_whiteboardObject"] [class*="contentContainer"][style*="--bg-red"] {
	background: var(--whiteBoardCardBg-Red) !important;
	--whiteBoardCardBrdClr: var(--whiteBoardCardBrd-Red) !important;
}
[class*="_whiteboardObject"] [class*="contentContainer"][style*="--bg-yellow"] {
	background: var(--whiteBoardCardBg-Yellow) !important;
	--whiteBoardCardBrdClr: var(--whiteBoardCardBrd-Yellow) !important;
}
[class*="_whiteboardObject"] [class*="contentContainer"][style*="--bg-green"] {
	background: var(--whiteBoardCardBg-Green) !important;
	--whiteBoardCardBrdClr: var(--whiteBoardCardBrd-Green) !important;
}

/*****************
******************
******************
WHITEBOARD - Text Element - MindMap
******************
******************
******************/
[data-object-type="mindMapTextElementNode"] > div {
	border-color: hsla(0, 0%, 50%, .0) !important;
	transition: .15s;
}
/*MINDMAP TEXT ELEMENT - Editing*/
[data-object-type="mindMapTextElementNode"] > div.border-tooltip-bg {
	border-color: var(--whiteboardEditingBrdClr) !important;
}
/*MINDMAP TEXT ELEMENT - Selected*/
[data-object-type="mindMapTextElementNode"] > div.border-active {
	border-color: var(--active-item) !important;
}

/*MINDMAP TEXT ELEMENT - Selected*/
/*****************
******************
******************
WHITEBOARD - MindNode Cards
******************
******************
******************/
/*standard card color*/
[data-object-type="mindMapCardNode"] > [style*="--background-secondary"] {
	box-shadow: inset 0 0 0 1px var(--whiteBoardCardBrdClr)!important
}
[data-object-type="mindMapCardNode"] > [style*="red"] {
	box-shadow: inset 0 0 0 1px var(--border-red-sect) !important
}
[data-object-type="mindMapCardNode"] > [style*="orange"] {
	box-shadow: inset 0 0 0 1px var(--border-orange-sect) !important
}
[data-object-type="mindMapCardNode"] > [style*="yellow"] {
	box-shadow: inset 0 0 0 1px var(--border-yellow-sect) !important
}
[data-object-type="mindMapCardNode"] > [style*="green"] {
	box-shadow: inset 0 0 0 1px var(--border-green-sect) !important
}
[data-object-type="mindMapCardNode"] > [style*="blue"] {
	box-shadow: inset 0 0 0 1px var(--border-blue-sect) !important
}
[data-object-type="mindMapCardNode"] > [style*="purple"] {
	box-shadow: inset 0 0 0 1px var(--border-purple-sect) !important
}
[data-object-type="mindMapCardNode"] > [style*="black"] {
	box-shadow: inset 0 0 0 1px var(--border-black-sect) !important
}






/*MindMap card - editing */
[data-object-type="mindMapCardNode"] > .border-primary {
	border-color: var(--whiteboardEditingBrdClr) !important;
}


/**COLLAPSED CARD*/
[class*="whiteboardObject"][data-is-folded="true"] [class*="firstBlockEditor"] {
	width: 100%;
}





/*****************
******************
******************
WHITEBOARD SECTIONS (MINIMAL)
******************
******************
******************/
[data-is-section-title="true"]{
max-width:unset !important;
}
[data-is-section-title="true"] > input {

		text-overflow: unset;
}


[data-object-type="section"] > div > .relative[style*="--border-white-sect"]{
		background: transparent !important;
		box-shadow: 0 0 0 2px hsla(0,0%,50%,0.25)!important;
}
/*************
WHITEBOARD > SECTION TITLES > BACKGROUNDS
**************/


#root [data-object-type="section"]>div>div[style*="--bg-white"]+[data-is-section-title] {
background: var(--whiteBoardBoardBg) !important;
}

#root [data-object-type="section"]>div>div[style*="--bg-red"]+[data-is-section-title] {
	background: var(--bg-red-sect) !important;
}

#root [data-object-type="section"]>div>div[style*="--bg-orange"]+[data-is-section-title] {
	background: var(--bg-orange-sect) !important;
}

#root [data-object-type="section"]>div>div[style*="--bg-yellow"]+[data-is-section-title] {
	background: var(--bg-yellow-sect) !important;
}

#root [data-object-type="section"]>div>div[style*="--bg-green"]+[data-is-section-title] {
	background: var(--bg-green-sect) !important;
}

#root [data-object-type="section"]>div>div[style*="--bg-blue"]+[data-is-section-title] {
	background: var(--bg-blue-sect) !important;
}

#root [data-object-type="section"]>div>div[style*="--bg-purple"]+[data-is-section-title] {
	background: var(--bg-purple-sect) !important;
}

#root [data-object-type="section"]>div>div[style*="--bg-black"]+[data-is-section-title] {
	background: var(--bg-black-sect) !important;
}


/*****************
******************
******************
WHITEBOARD INSTANCE > TITLES
******************
******************
******************/
:root {
	--whiteboardInstanceTitleIcnW:32px;
	--whiteboardInstanceTitleGap:.25rem;
	--whiteboardInstanceTitlePadTopBtm:13px;
	--whiteboardInstanceTitlePadLR:.625rem;
}


/*****************
******************
******************
WHITEBOARD INSTANCE > TITLE > FLEX
******************
******************
******************/


/*TITLE > CONTAINER */
[data-object-type="whiteboardInstance"] > div > div.flex:first-child {
	align-items: flex-start;
	outline: var(--testBrdW) solid red;
	position: relative;
}

/*TITLE > ICON*/
[data-object-type="whiteboardInstance"] > div > div.flex:first-child > svg{
	/*width: var(--whiteboardInstanceTitleIcnW);
	margin-right: var(--whiteboardInstanceTitleGap);*/
	margin-top: var(--whiteboardInstanceTitlePadTopBtm);
	display: none;

}


/*TITLE > TEXT*/
[data-object-type="whiteboardInstance"] > div > div.flex:first-child > div[class*="min-w"] [class*="rounded"]{
	width: calc(100% + var(--whiteboardInstanceTitlePadLR) * 1);
}
/**/
[data-object-type="whiteboardInstance"] > div > div.flex:first-child > div[class*="min-w"] .truncate{
	white-space: pre-wrap;
	
}


/*TITLE > 3 DOT*/
[data-object-type="whiteboardInstance"] > div > div.flex:first-child > [class*="group"] {
	margin-right: -21px !important;
	margin-top: calc(var(--whiteboardInstanceTitlePadTopBtm) - 4px);
	display: flex;
	opacity: 0;
}

[data-object-type="whiteboardInstance"]:hover > div > div.flex:first-child > [class*="group"] {
	opacity: 1
}

/*TOTAL CARDS*/
[data-object-type="whiteboardInstance"] > div > .mt-2 {
	padding-left: var(--whiteboardInstanceTitlePadLR)
}


/*****************
******************
******************
TEXT ELEMENTS
******************
******************
******************/

:root {
	--textElementBrdClr-Editing:hsla(0, 0%, 50%, .05);
}
[data-theme="dark"] {
	--textElementBrdClr-Editing:hsla(0, 0%, 50%, .075);
}
[data-object-type*="extElement"] > div.border-solid {
	border-radius: 10px;
	transition: .115s ease-in-out;
	outline: 0px solid var(--textElementBrdClr-Editing);
}
[data-object-type*="extElement"] > [style*="--bg-black-sect"] {
	--border-black-sect:var(--textElementBrdClr-Editing);
}


/*TOGGLES*/
[data-object-type*="extElement"] .ProseMirror [data-node-type*="toggle"] > [class*="bulletWrapper"],
[data-object-type*="extElement"] [data-node-type="table_cell"] [data-node-type*="toggle"] > [class*="bulletWrapper"] {
	width: 14px;
	margin-right: 2px;
}
[data-object-type*="extElement"] .ProseMirror [data-node-type*="toggle"] > [class*="bulletWrapper"] svg,
[data-object-type*="extElement"] [data-node-type="table_cell"] [data-node-type*="toggle"] > [class*="bulletWrapper"] svg {
	width: 14px !important;
	height: 14px !important;
}
/*BULLETS*/
[data-object-type*="extElement"] .ProseMirror [data-node-type*="list_item"] > [class*="bulletWrapper"],
[data-object-type*="extElement"] [data-node-type="table_cell"] [data-node-type*="list_item"] > [class*="bulletWrapper"] {
	width: 14px;
	margin-right: 2px;
}
[data-object-type*="extElement"] .ProseMirror [data-node-type*="list_item"] > [class*="bulletWrapper"] svg,
[data-object-type*="extElement"] [data-node-type="table_cell"] [data-node-type*="list_item"] > [class*="bulletWrapper"] svg {
	width: 14px !important;
	height: 14px !important;
}


/*HIDE THREE DOT MENU*/
[data-object-type*="extElement"] > div > .absolute[class*="menu"] {
	display: none !important;
}

/*black*/

[data-object-type*="extElement"] > div.border-solid[style*="border-black-sect"]{
	box-shadow:inset 0 0 0 1px hsla(0,0%,50%,0.3) !important;
}
/*editing*/

[data-object-type*="extElement"] .border-tooltip-bg {
	border-color: var(--textElementBrdClr-Editing);
	outline: 2px solid var(--textElementBrdClr-Editing) !important;
}



/*****************
******************
******************
WHITEBOARD TOGGLES
******************
******************
******************/


:root {
--tblToggleBulletW:1.25rem;
}
[data-object-type="textElement"] .ProseMirror > [data-node-type*="table"],
[data-object-type="mindMapTextElementNode"] .ProseMirror > [data-node-type*="table"]{
	overflow:unset !important;;
}
[data-object-type="textElement"] .ProseMirror > [data-node-type*="table"] [data-node-type="table_cell"] > div > [data-node-type*="toggle"] {

}
[class*="whiteboardCanvas"] .ProseMirror [data-node-type*="toggle"] {
		position: relative;
}
[data-object-type="textElement"] .ProseMirror > [data-node-type*="table"] [data-node-type="table_cell"] > div > [data-node-type*="toggle"] > [class*="bullet"],
[data-object-type="mindMapTextElementNode"] .ProseMirror > [data-node-type*="table"] [data-node-type="table_cell"] > div > [data-node-type*="toggle"] > [class*="bullet"]{
	width:var(--tblToggleBulletW) !important;
	position:absolute !important;
	left:calc(var(--tblToggleBulletW) * -1 + 0px);
	z-index:949494949494;
	border-radius:4px;
	height:30px !important;
	overflow:hidden;
	top:-1px;
	transition:.15s;
}

[data-object-type="textElement"] .ProseMirror > [data-node-type*="table"] [data-node-type="table_cell"] > div > [data-node-type*="toggle"] > [class*="bullet"] [class*="bullet"],
[data-object-type="mindMapTextElementNode"] .ProseMirror > [data-node-type*="table"] [data-node-type="table_cell"] > div > [data-node-type*="toggle"] > [class*="bullet"] [class*="bullet"]{
height:100% !important;
transform:scale(.7);
}

[data-object-type="textElement"] .ProseMirror > [data-node-type*="table"] [data-node-type="table_cell"] > div > [data-node-type*="toggle"] > [class*="nested"],
[data-object-type="mindMapTextElementNode"] .ProseMirror > [data-node-type*="table"] [data-node-type="table_cell"] > div > [data-node-type*="toggle"] > [class*="nested"]{
	background:transparent;
}




/***/
[data-object-type="textElement"] .ProseMirror > [data-node-type*="toggle"] > [class*="nested"] > [data-node-type*="table"] table,
[data-object-type="mindMapTextElementNode"] .ProseMirror > [data-node-type*="toggle"] > [class*="nested"] > [data-node-type*="table"] table{
		width:100%;
}


/***********
************
************
************
************
************
WHITEBOARD - CARD BACKGROUNDS
************
************
************
************
************
************/

[class*="_whiteboardObject"] [class*="contentContainer"][style*="--bg-red"],
[class*="_whiteboardObject"] > div[style*="min-height: 62px"][style*="--bg-red"]{
	background: var(--whiteBoardCardBg-Red) !important;
--whiteBoardCardBrdClr:var(--whiteBoardCardBrd-Red);
}
[class*="_whiteboardObject"] [class*="contentContainer"][style*="--bg-orange"],
[class*="_whiteboardObject"] > div[style*="min-height: 62px"][style*="--bg-orange"]{
	background: var(--whiteBoardCardBg-Orange) !important;
--whiteBoardCardBrdClr:var(--whiteBoardCardBrd-Orange);
}
[class*="_whiteboardObject"] [class*="contentContainer"][style*="--bg-yellow"],
[class*="_whiteboardObject"] > div[style*="min-height: 62px"][style*="--bg-yellow"]{
	background: var(--whiteBoardCardBg-Yellow) !important;
--whiteBoardCardBrdClr:var(--whiteBoardCardBrd-Yellow);
}
[class*="_whiteboardObject"] [class*="contentContainer"][style*="--bg-green"],
[class*="_whiteboardObject"] > div[style*="min-height: 62px"][style*="--bg-green"]{
	background: var(--whiteBoardCardBg-Green) !important;
--whiteBoardCardBrdClr:var(--whiteBoardCardBrd-Green);
}
[class*="_whiteboardObject"] [class*="contentContainer"][style*="--bg-blue"],
[class*="_whiteboardObject"] > div[style*="min-height: 62px"][style*="--bg-blue"]{
	background: var(--whiteBoardCardBg-Blue) !important;
--whiteBoardCardBrdClr:var(--whiteBoardCardBrd-Blue);
}
[class*="_whiteboardObject"] [class*="contentContainer"][style*="--bg-purple"],
[class*="_whiteboardObject"] > div[style*="min-height: 62px"][style*="--bg-purple"]{
	background: var(--whiteBoardCardBg-Purple) !important;
--whiteBoardCardBrdClr:var(--whiteBoardCardBrd-Purple);
}
[class*="_whiteboardObject"] [class*="contentContainer"][style*="--bg-black"]{
	background: var(--whiteBoardCardBg-Black) !important;
--whiteBoardCardBrdClr:var(--whiteBoardCardBrd-Black);
}


/*****************
******************
******************
WHITEBOARD CARD TOGGLES
******************
******************
******************/


:root {
--whiteboardCardToggleBulletW:.85rem;
}


[data-object-type="cardInstance"] .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"],
[data-object-type="mindMapCardNode"] .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"]{
	width:var(--whiteboardCardToggleBulletW) !important;
	position:absolute !important;
	margin-left:calc(var(--whiteboardCardToggleBulletW) * -1 + 1px);
		margin-right: 00px !important;
	z-index:949494949494;
	border-radius:4px;
	height:30px !important;
	overflow:hidden;
	top:-1px;
	transition:.15s;

}


[data-object-type="cardInstance"] .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"] [class*="bullet"],
[data-object-type="mindMapCardNode"] .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"] [class*="bullet"]{
height:100% !important;
transform:scale(0.75);
}
[data-object-type="cardInstance"] .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"] [class*="bullet"] svg,
[data-object-type="mindMapCardNode"] .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"] [class*="bullet"] svg {
		opacity: 0.45
}


[data-object-type="textElement"] .ProseMirror > [data-node-type*="table"] [data-node-type="table_cell"] > div > [data-node-type*="toggle"] > [class*="nested"],
[data-object-type="mindMapTextElementNode"] .ProseMirror > [data-node-type*="table"] [data-node-type="table_cell"] > div > [data-node-type*="toggle"] > [class*="nested"]{
	background:transparent;
}


/***********
************
************
************
************
************
WHITEBOARD - COLLAPSED CARDS
************
************
************
************
************
************/

/*
[class*="whiteboardObject"][data-is-folded="true"] .w-6 + .truncate,
[class*="whiteboardObject"][data-is-folded="true"] h1,
[class*="whiteboardObject"][data-is-folded="true"] h2,
[class*="whiteboardObject"][data-is-folded="true"] h3,
[class*="whiteboardObject"][data-is-folded="true"] h4,
[class*="whiteboardObject"][data-is-folded="true"] h5,
[class*="whiteboardObject"][data-is-folded="true"] h6 {
	font-size: 24px;
		width: 100%;
		text-align: left;
}
*/

[class*="whiteboardObject"] > div [class*="firstBlockEditor"]{
	width: 100%;
}
[class*="whiteboardObject"] > div [class*="firstBlockEditor"] h1,
[class*="whiteboardObject"] > div [class*="firstBlockEditor"] h2,
[class*="whiteboardObject"] > div [class*="firstBlockEditor"] h3,
[class*="whiteboardObject"] > div [class*="firstBlockEditor"] h4,
[class*="whiteboardObject"] > div [class*="firstBlockEditor"] h5,
[class*="whiteboardObject"] > div [class*="firstBlockEditor"] h6{
	font-size: 23px;
	line-height: 1.345;
		width: 100%;
		text-align: left;
}

[class*="whiteboardObject"] > div.py-3 {
	padding-top: 0.6rem;
	padding-bottom: .6rem;
	padding-left: 0px;
	padding-right: 0px !important;
}


[class*="_whiteboardObject"] > div[style*="min-height: 62px"] {
	box-shadow: inset 0 0 0 1px var(--whiteBoardCardBrdClr);
}



/***********
************
************
************
************
************
WHITEBOARD - LEFT TOOLBAR
************
************
************
************
************
************/
/**MINI*/
[class*="_whiteboardToolbarLeft"]{
		transition: .24s;
		max-height: 1.75rem;
		overflow: hidden;
		transition-delay: 1.5s;
		opacity: .25;
		
}
[class*="_whiteboardToolbarLeft"]:is(:hover,:focus-within,:focus){
		max-height: 400px;
		transition-delay: .5s;
		opacity: 1;
}
/**/
/*******
PUT IT AT THE BOTTOM
********/
[class*="whiteboardToolbarLeft"] {
		bottom: 300px!important;
		top: unset !important;
}

@media (max-width:850px) {
		[class*="whiteboardToolbarLeft"] {
				bottom:480px !important;
		}
}


	
</style>`;

	document.head.insertAdjacentHTML("beforeend", style);
})();