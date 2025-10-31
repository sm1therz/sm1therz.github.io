(function() {
	let style = `<style>


/*root*/

:root {
		--inboxBrdTstW:0px;
}

/***********
************
! INBOX - V2
************
************/
:root {
	--outerPadLR:1.5rem;
	--outerPadTopBtm:.5rem;
	/***/
	--inboxItemContentMaxW:1000px;
	--inboxItemMaxW: 750px;
	--inboxWrapW:1050px;
	--inboxItemPadTopBtm: 7px;
	--inboxItemBrdAlpha: 1;
	--inboxContainerPadLR:45px;
	--inboxInnerPadLR:12vw;

}

/***********
TOP BAR > OUTER
************/
.isolate > .bg-background-secondary.relative > .app-region-drag {
	border: var(--inboxBrdTstW) solid green;
	padding-left: var(--outerPadLR) !important;
	padding-right: var(--outerPadLR) !important;
	gap: 0px
}

.bg-background-secondary > .app-region-drag > .flex:last-child {
	width: var(--inboxItemContentMaxW) !important;
	margin: 0 auto;
	padding-right: 40px;
}
.isolate  .bg-background-secondary > .app-region-drag > div.flex .app-region-no-drag{
		border: var(--inboxBrdTstW) solid Purple;

}

/***********
MIDDLE  BAR > OUTER
************/

.isolate > .bg-background-secondary.relative > .app-region-drag + div.flex {
	border: var(--inboxBrdTstW) solid green;
	padding-left: var(--outerPadLR) !important;
	padding-right: var(--outerPadLR) !important;
	padding-top: var(--outerPadTopBtm)!important;
	padding-bottom: var(--outerPadTopBtm)!important;
	max-width: 100% !important;
}

/*MIDDLE  BAR > OUTER > RIGHT PREVIEW OPEN*/
.isolate > .bg-background-secondary.relative > .app-region-drag + div.flex[style*="max-width"]{
	
}
/***********
! MIDDLE BAR > INNER
************/
.isolate > .bg-background-secondary.relative > .app-region-drag + div.flex > div {
	border: var(--inboxBrdTstW) solid Purple;
	width: var(--inboxItemContentMaxW);
	margin: 0 auto !important;
	max-width: 100% !important;

}

/***********
************
! INBOX ITEMS - WRAPPER > OUTER
************
************/

.isolate .bg-background-secondary.relative > .scrollbar-gutter-stable{
	border: var(--inboxBrdTstW) solid green;
	padding-left: var(--outerPadLR) !important;
	padding-right: var(--outerPadLR) !important;
	padding-top: var(--outerPadTopBtm)!important;
	padding-bottom: var(--outerPadTopBtm)!important;
	max-width: 100% !important;

}
.isolate .bg-background-secondary > .scrollbar-gutter-stable::-webkit-scrollbar{
	width: 0px !important;
}

/***********
! INBOX ITEMS - WRAPPER > INNER
************/
.isolate .bg-background-secondary > .scrollbar-gutter-stable > .mx-6.mt-2 {
	border: var(--inboxBrdTstW) solid Purple;
	margin: unset !important;
}
/***********
! INBOX ITEMS - ITEM CONTAINER > OUTER
************/
.bg-background-secondary [data-action-item-id] {
	border: calc(var(--inboxBrdTstW) * .5) solid #00909a;

	height: unset;
	padding-top: var(--inboxItemPadTopBtm);
	padding-bottom: var(--inboxItemPadTopBtm) !important;
	width: var(--inboxItemContentMaxW) !important;
	max-width: 100% !important;
	position: relative !important;
	margin: 0 auto !important;
	
}
[class*="sidebar"] + .relative.bg-background-secondary > .scrollbar-gutter-stable [data-action-item-id],
[class*="sidebar"] + .relative.bg-background-secondary > .app-region-drag + div.flex > div{
	margin:unset !important;
	
}

/*HOVERING - RIGHT SIDEBAR > NOT OPEN*/
.bg-background-secondary [data-action-item-id].bg-light-grey {
	position: unset !important;
}

.bg-background-secondary > .app-region-drag + div:not(flex[style*="max-width"]) + .scrollbar-gutter-stable [data-action-item-id].bg-light-grey {
	position: relative !important;
}
.bg-background-secondary > .app-region-drag + div.flex[style*="max-width"] + .scrollbar-gutter-stable [data-action-item-id].bg-light-grey {
	position: unset !important;

}
/***********
! INBOX ITEM - CONTENT WRAPPER
************/

.bg-background-secondary [data-action-item-id] > .flex.grow {
	border: calc(var(--inboxBrdTstW) * .5) solid #07f;
	padding: 5px !important;
	gap: 12px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
}

.bg-background-secondary [data-action-item-id] > .flex.grow > .flex.grow .truncate.text-label.font-medium.text-primary {
		white-space: pre-wrap;
		overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 7;
	-webkit-box-orient: vertical;
}

/***********
! INBOX ITEM - CONTENT WRAP > LEFT SIDE
************/
.bg-background-secondary [data-action-item-id] > .flex.grow > .flex{

}
.bg-background-secondary [data-action-item-id] > .flex.grow > .flex.grow{
	border: calc(var(--inboxBrdTstW) * .5) solid green;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	height: 100% !important;
	flex: 1;
	order: 0;
}
.bg-background-secondary [data-action-item-id] > .flex.grow > .flex.grow > div {
	align-items: flex-start;
}




/**
! INBOX ITEM - CONTENT WRAP - REMINDER/CHAT MESSAGE
***/
.bg-background-secondary [data-action-item-id] > .flex.grow > .flex.grow.items-center {
	align-items: flex-start;
	flex-wrap: wrap;
}
.bg-background-secondary [data-action-item-id] > .flex.grow > .flex.grow.items-center .truncate {
	white-space: pre-wrap;
		overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
.bg-background-secondary [data-action-item-id] > .flex.grow > .flex.grow.items-center .invisible {
	visibility: visible;
}

.bg-background-secondary [data-action-item-id] > .flex.grow > .flex.shrink-0.w-40 {
	min-height: 100% !important;
	border: var(--inboxBrdTstW) solid yellow;
	display: flex;
	flex: 0;
}


/***********
! INBOX ITEM - CONTENT WRAP > RIGHT (Metadata)
************/
.bg-background-secondary [data-action-item-id] > .flex.grow > .grow + .flex.shrink-0[class*="gap"] {
	min-height: 100% !important;
	border: calc(var(--inboxBrdTstW) * .5) solid green;
	display: flex;
	max-width: 29vw;
	width: 25%;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: var(--inboxRightGap);

}



/*RIGHT SIDE > OVERRIDES*/
.bg-background-secondary [data-action-item-id] > .flex.grow > .grow + .flex.shrink-0[class*="gap"] * {
	padding-left: 0px;
	padding-right: 0px;
}
.bg-background-secondary [data-action-item-id] > .flex.grow > .flex.shrink-0 .text-label-mini {
	font-size: 13px;
	line-height: 1.3
}
.bg-background-secondary [data-action-item-id] > .flex.grow > .flex.shrink-0 .flex > .text-label-mini:first-child{
	padding-left: calc(var(--inboxRightIcnW) + var(--inboxRightIcnMargR));
}

/*RIGHT SIDE > LOCATION*/
.bg-background-secondary [data-action-item-id] > .flex.grow > .grow + .flex.shrink-0[class*="gap"] > .w-40 {
	width: 100%;
}

.bg-background-secondary [data-action-item-id] > .flex.grow > .grow + .flex.shrink-0[class*="gap"] > .w-40 .truncate {
	white-space: pre-wrap;
}
.bg-background-secondary [data-action-item-id] > .flex.grow > .grow + .flex.shrink-0[class*="gap"] > .w-40 > .flex {
	gap: var(--inboxRightIcnMargR) !important;
	align-items: flex-start;
}
.bg-background-secondary [data-action-item-id] > .flex.grow > .grow + .flex.shrink-0[class*="gap"] .flex[class*="gap"] {
	gap: var(--inboxRightIcnMargR) !important;
	align-items: flex-start;
}
/*RIGHT SIDE > DATE + TIME*/
.bg-background-secondary [data-action-item-id] > .flex.grow > .grow + .flex.shrink-0[class*="gap"] > .flex {
	width: 100%;
	gap: var(--inboxRightIcnMargR) !important;
	align-items: flex-start;
	justify-content: flex-start;
	padding-left: calc(var(--inboxRightIcnW) + var(--inboxRightIcnMargR));
	padding-left: 0px;
}

.bg-background-secondary [data-action-item-id] > .flex.grow > .grow + .flex.shrink-0[class*="gap"] .flex svg{
}
/*right side - no icon*/
.bg-background-secondary [data-action-item-id] > .flex.grow > .grow + .flex.shrink-0[class*="gap"] .flex[class*="gap"] > *:first-child {
	padding-left: calc(var(--inboxRightIcnMargR) + var(--inboxRightIcnW));
}
.bg-background-secondary [data-action-item-id] > .flex.grow > .grow + .flex.shrink-0[class*="gap"] .flex[class*="gap"] > svg:first-child {
	padding-left: 0px;
}
/*RIGHHT SIDE SVG*/
:root {
	--inboxRightIcnW:16px;
	--inboxRightIcnMargR:9px;
	--inboxRightGap:6px;
}
.bg-background-secondary [data-action-item-id] > .flex.grow > .grow + .flex.shrink-0 svg{
	transform: scale(1.0);
	width: var(--inboxRightIcnW);
	height: var(----inboxRightIcnW);
}
.bg-background-secondary [data-action-item-id] > .flex.grow > .grow + .flex.shrink-0 svg path[d*="m20.6101"] {
	fill: hsl(300, 100%, 75%,.7);
}



/***********
************
************
************
! HOVER MENU
************
************
************
************/

.isolate > .bg-background-secondary.relative [data-action-item-id] > .transition-opacity .absolute{
	transform-origin: center right;
	transform: scale(1.2);
}
.isolate > .bg-background-secondary.relative [data-action-item-id] > .transition-opacity {
}

.isolate > .bg-background-secondary.relative [data-action-item-id] > .transition-opacity{
	height: 10px !important;
	width: unset;
	position: absolute !important;
	right: 0 !important;
}


/*RIGHT PANEL CLOSED*/
.transition-opacity.opacity-100 > .absolute[style*="right: 6px"] {
margin-right: 0px !important;
}
.transition-opacity.opacity-100 > .absolute{
	margin-right: 30px
}
.isolate > .bg-background-secondary.relative > .app-region-drag + div.flex[style*="max-width"] + .scrollbar-gutter-stable [data-action-item-id].bg-light-grey .transition-opacity.opacity-100{
	
}

/*****
SIDE PANEL
******/
[data-is-inbox-app-panel] {
	background: hsla(0, 0%, 23%, 50%);
	box-shadow: 0 0 0px 0.5px black,
	0 4px 8px rgb(0, 0, 0, 25%),
	0 28px 50px rgb(0, 0, 0, 28%);
	backdrop-filter: blur(20px)saturate(5) brightness(0.5);
	border-left: 1px solid hsla(0, 0%, 100%, .1);
}



/*****
! INBOX - INNER STUFF
******/

/*Text*/
[data-action-item-id] > .flex > .grow .truncate {
	white-space: normal;
	font-size: .925rem;
	line-height: 1.6;
	white-space: pre-wrap
}

/*ICON*/
[data-action-item-id] > .flex > .grow > div svg {
	width: 1.2rem;
	height: 1.2rem;
	top:0px;
	position: relative;
}

/*borders*/
[data-action-item-id] > [class*="gap"]:before,
[data-action-item-id] > [class*="gap"]:after {
	content: "";
	display: block;
	height: 1px;
	background: hsla(214, 5%, 25%, 1.0);
	right: 7px;
	left: 37px;
	position: absolute;
	z-index: 0 !important;
	top: -1px;
	transition-timing-function: cubic-bezier(.4, 0, .2, 1);
	transition-duration: .15s;
	opacity: var(--inboxItemBrdAlpha);
}
[data-action-item-id]:first-of-type > [class*="gap"]:before {
	left: 0;
	top: 0;
}



[data-action-item-id] > [class*="gap"]:after {
	top: unset;
	bottom: 0;
}

/*****
! TODOS
******/
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .py-2 + .overflow-y-auto.px-6{
		width: calc(var(--cardlibToolbarMaxW) - 3rem);
	max-width: calc(100% - 3rem);
	margin: 0 auto;
}
[data-todo-item-id] {
	padding-top: var(--inboxItemPadTopBtm);
	padding-bottom: var(--inboxItemPadTopBtm);
	--inboxItemPadTopBtm:5px;
	display: flex;
	align-items: center;
}

[data-todo-item-id]:before, [data-todo-item-id]:after {
	content: "";
	display: block;
	height: 1px;
	background: hsla(214, 5%, 25%, 1.0);
	right: 7px;
	left: 37px;
	position: absolute;
	z-index: 0 !important;
	top: -1px;
	transition-timing-function: cubic-bezier(.4, 0, .2, 1);
	transition-duration: .15s;
	opacity: var(--inboxItemBrdAlpha);
}
[data-todo-item-id]:first-of-type:before {
	left: 0;
	top: 0;
}



[data-todo-item-id]:first-of-type:after {
	top: unset;
	bottom: 0;
}

[data-todo-item-id] > div.flex {
	display: flex;
	justify-content: flex-start;
	min-height: 10px;
}
[data-todo-item-id] .flex.min-w-0.flex-1 {
	height: 100% !important;
	width: 60%;
	flex: 1;
}
[data-todo-item-id] .flex.shrink-0.items-center.gap-x-2{
	width: 35%;
}


[data-todo-item-id] .flex.min-w-0.flex-1 > div:first-child span {
border-color: hsla(0, 0%, 50%, .8);
	border-radius: 5px
}

/*text*/

[data-todo-item-id] [data-node-type="paragraph"]{
	white-space: normal;
	font-size: .95rem;
	line-height: 1.6;
	white-space: pre-wrap
}
[data-todo-item-id] .flex.min-w-0.flex-1 > [class*="truncatedInlinePreviewer"] {
		min-height: 100% !important;
	align-self: anchor-center;
}
[data-todo-item-id] [class*="truncatedInlinePreviewer"],
[data-todo-item-id] [class*="truncatedInlinePreviewer"] *{
	overflow: visible;
	white-space: pre-wrap;
}

/*metadata*/
[data-todo-item-id] .w-40 {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	
}
[data-todo-item-id] .w-40 > div:first-child {
	flex: 1;
}
[data-todo-item-id] .w-40 > .flex{
	align-items: flex-start;
	display: flex;
}
[data-todo-item-id] .w-40 > .flex svg{
	position: relative;
	top: 2px
}
[data-todo-item-id] .w-40 .truncate {
	white-space: pre-wrap;
		overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	white-space: pre-line;
	font-size: 0.82rem;
}


/*menu*/
[data-todo-item-id] [class*="148px"] {
	max-width: 50px !important;

}

[class*="sidebar"] + .overflow-hidden.relative.flex.size-full > div:first-child .absolute[style*="right: "] {
	margin-right: 50px;
}
@media (max-width:700px) {
	[data-todo-item-id] [class*="148px"] {
		max-width:50px;
	}
}

/*****
! TODOS
******/
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .py-2 + .overflow-y-auto.px-6{
		width: calc(var(--cardlibToolbarMaxW) - 3rem);
	max-width: calc(100% - 3rem);
	margin: 0 auto;
}
[data-todo-item-id] {
	padding-top: var(--inboxItemPadTopBtm);
	padding-bottom: var(--inboxItemPadTopBtm);
	--inboxItemPadTopBtm:5px;
	display: flex;
	align-items: center;
}

[data-todo-item-id]:before, [data-todo-item-id]:after {
	content: "";
	display: block;
	height: 1px;
	background: hsla(214, 5%, 25%, 1.0);
	right: 7px;
	left: 37px;
	position: absolute;
	z-index: 0 !important;
	top: -1px;
	transition-timing-function: cubic-bezier(.4, 0, .2, 1);
	transition-duration: .15s;
	opacity: var(--inboxItemBrdAlpha);
}
[data-todo-item-id]:first-of-type:before {
	left: 0;
	top: 0;
}



[data-todo-item-id]:first-of-type:after {
	top: unset;
	bottom: 0;
}

[data-todo-item-id] > div.flex {
	display: flex;
	justify-content: flex-start;
	min-height: 10px;
}
[data-todo-item-id] .flex.min-w-0.flex-1 {
	height: 100% !important;
	width: 60%;
	flex: 1;
}
[data-todo-item-id] .flex.shrink-0.items-center.gap-x-2{
	width: 35%;
}


[data-todo-item-id] .flex.min-w-0.flex-1 > div:first-child span {
border-color: hsla(0, 0%, 50%, .8);
	border-radius: 5px
}

/*text*/

[data-todo-item-id] [data-node-type="paragraph"]{
	white-space: normal;
	font-size: .95rem;
	line-height: 1.6;
	white-space: pre-wrap
}
[data-todo-item-id] .flex.min-w-0.flex-1 > [class*="truncatedInlinePreviewer"] {
		min-height: 100% !important;
	align-self: anchor-center;
}
[data-todo-item-id] [class*="truncatedInlinePreviewer"],
[data-todo-item-id] [class*="truncatedInlinePreviewer"] *{
	overflow: visible;
	white-space: pre-wrap;
}

/*metadata*/
[data-todo-item-id] .w-40 {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	
}
[data-todo-item-id] .w-40 > div:first-child {
	flex: 1;
}
[data-todo-item-id] .w-40 > .flex{
	align-items: flex-start;
	display: flex;
}
[data-todo-item-id] .w-40 > .flex svg{
	position: relative;
	top: 2px
}
[data-todo-item-id] .w-40 .truncate {
	white-space: pre-wrap;
		overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	white-space: pre-line;
	font-size: 0.82rem;
}


/*menu*/
[data-todo-item-id] [class*="148px"] {
	max-width: 50px !important;

}

.overflow-hidden.relative.flex.size-full > div:first-child .absolute[style*="right: "] {
	margin-right: -90px;
}
[class*="sidebar"] + .overflow-hidden.relative.flex.size-full > div:first-child .absolute[style*="right: "] {
	margin-right: 20px;
}
@media (max-width:700px) {
	[data-todo-item-id] [class*="148px"] {
		max-width:50px;
	}
}


/***********
************
************
************
************
************
! EDITOR - ROOT
************
************
************
************
************
************/
:root {
	--blockquoteBrdClr: hsla(0, 0%, 0%, .1);
	--blockquoteBrdLeftClr: hsla(0, 0%, 0%, .25);
	--blockquoteBgClr: hsla(0, 0%, 0%, .015);
	--codeblockBgClr: hsl(0, 0%, 90%);
	--codeblockBrdClr: hsl(0, 0%, 24%, 0.2);
	--inlineCodeBgClr: rgba(0, 0, 0, .085);
	--inlineCodeBrdClr: rgba(0, 0, 0, .068);
	--inlineCodeLinkOverrideBgClr: #ececec;
	--inlineCodeBoxShadClr: hsl(214, 8%, 100%, 0.0);
	--inlineCodeClr: hsla(0, 0%, 0%, .8);
	--embedHighlightBgClr: hsla(0, 0%, 0%, .024);
	/*text color - gray*/
	--text-gray-editor: hsl(51, 3%, 60%);
	--text-done-editor: hsl(51, 3%, 64%);
	--text-done-editor-line: hsl(51, 3%, 64%,.8);
}


[data-theme="dark"] {
	--blockquoteBrdClr: hsl(216, 6%, 100.5%, .1);
	--blockquoteBrdLeftClr: hsl(216, 6%, 100%, 0.45);
	--blockquoteBgClr: hsl(216, 6%, 100%, .0125);
	--codeblockBgClr: #0d0d0d;
	--codeblockBrdClr: hsl(0, 0%, 24%);
	--inlineCodeClr: red;
	--inlineCodeBgClr: rgba(255, 255, 255, .089);
	--inlineCodeBrdClr: hsl(214, 8%, 0%, 0.46);
	--inlineCodeLinkOverrideBgClr: #383a3c;
	--inlineCodeBoxShadClr: hsl(214, 8%, 100%, 0.06);
	--inlineCodeClr: inherit;
	--embedHighlightBgClr: hsla(0, 0%, 100%, .0125);
	/*text color - gray*/
	--text-gray-editor: hsla(0, 0%, 53%, 1) !important;
	--text-done-editor: hsla(0, 0%, 49%, 1);
	--text-done-editor-line: hsla(0, 0%, 49%, 0.5);


	/*
		--background-primary: hsl(0, 0%, 11%) !important;
	--background-secondary: hsl(226, 8%, 14%) !important;*/
}

[data-theme="dark"] [class*="whiteboardCanvas"] {
	--text-gray-editor: hsl(51, 3%, 60%);
}




/***********
************
BLOCKQUOTES V1

:root {
	--blockquoteBrdRad: 3px;
}
.ProseMirror blockquote {
	position: relative;
	border-left-color: transparent !important;
	outline: 1px solid var(--blockquoteBrdClr);
	outline-offset: -1px;
	border-radius: var(--blockquoteBrdRad);
	background: var(--blockquoteBgClr);
	border-top-left-radius: calc(var(--blockquoteBrdRad) * 1.75) !important;
	border-bottom-left-radius: calc(var(--blockquoteBrdRad) * 1.75)!important;
}

.ProseMirror blockquote:before {
	content: "";
	display: block;
	position: absolute;
	background: var(--blockquoteBrdLeftClr);
	left: -3px;
	top: 0;
	bottom: 0;
	width: 6px;
	border-top-left-radius: calc(var(--blockquoteBrdRad) * 1.75);
	border-bottom-left-radius: calc(var(--blockquoteBrdRad) * 1.75);
}
************
************/
/***********
************
BLOCKQUOTES V2
************
************/
:root {
	--blockquoteBrdRad: 0px;
	--blockquoteBrdW: 4px;
}
.ProseMirror blockquote {
	position: relative;
	border-left-color: transparent !important;
	outline: 0px solid var(--blockquoteBrdClr);
	outline-offset: -1px;
	border-radius: var(--blockquoteBrdRad);
	border-radius: calc(var(--blockquoteBrdRad) * 2) !important;
}
div .ProseMirror blockquote:not([class*="whiteboardCanvas"] blockquote) {
	padding-top: 4px;
	padding-bottom: 4px;
	padding-left: 1.2rem;
	margin-left: 0px !important;
	left: unset;
	background: hsla(0, 0%, 100%, .03);
	border-left-width: 0px!important;
	margin-left: var(--blockquoteBrdW) !important;
	/*width:calc(100% - var(--blockquoteBrdW));*/
}

.ProseMirror blockquote:before {
	content: "";
	display: block;
	position: absolute;
	background: var(--blockquoteBrdLeftClr);
	left: 0px;
	top: 0px;
	bottom: 0px;
	width: var(--blockquoteBrdW);
	border-top-left-radius: calc(var(--blockquoteBrdRad) * 1);
	border-bottom-left-radius: calc(var(--blockquoteBrdRad) * 1);
}


/***********
************
HORIZONTAL RUL
************
************/
.ProseMirror [data-node-type="horizontal_rule"] > div.h-px {
	height: 1.5px;
	border-radius: 1px;
	box-shadow: 0 .5px 0 0 var(--light-middle-grey);
}
/***********
************
MENTIONS 
************
************/
.ProseMirror [data-node-type="mention"] > [class*="group"] {
	align-items: flex-start;
}

.ProseMirror [data-node-type="mention"] > [class*="group"] > svg {
	margin-top: 7px;
	opacity: .7;
}
.ProseMirror [data-node-type="mention"] > [class*="group"] .truncate {
	white-space: normal;
	overflow: unset;
	height: unset;
}
.ProseMirror [data-node-type="mention"] > [class*="group"] .truncate .h-px {
	opacity: 0;
}
/***********
************
TABLES
************
************/
/*cells - normal*/
[data-node-type="table"] table td {
	transition: .1s;
}

/*cells - selecting*/
[data-node-type="table"] table td[class*="selectedCell"] {
	outline: 2px solid var(--active-item);
	outline-offset: -1px;
}
.whiteboard-canvas [data-is-editing=true] .ProseMirror [data-node-type=table] {
	overflow: unset;
}

/***********
************
TABLES - Hover thingys
************
************/
/*cells - editing*/
[data-node-type="table"] table + div > .border-2 {
	opacity: 0;
}
/*grabbers*/
[data-node-type="table"] table + div > .touch-none {
	opacity: .35 !important;
	transition: 0s;
}
/*grabbers - table hover*/
[data-node-type="table"] table + div > .touch-none:hover {
	opacity: 1 !important;
}

/*bottom row adder*/
[data-node-type="table"] table + div > div.absolute.left-0.top-0 {
	opacity: 0;
}


/***********
************
CODEBLOCK
************
************/
.ProseMirror .cm-editor {
	background: var(--codeblockBgClr);
	box-shadow: inset 0 0 0 1px var(--codeblockBrdClr);
	padding-top: 24px;
	border-radius: 10px
}
.ProseMirror .cm-editor > .cm-scroller {
	padding-bottom: 20px;
}
[data-node-type="code_block"][style*="var(--middle-transparent-blue)"] {
	--codeblockBgClr: var(--middle-transparent-blue);
}


/*code block > always wrap lines*/
.ProseMirror .cm-content:not([class*="whiteboardCanvas"] .ProseMirror .cm-content){
	white-space: pre-wrap !important
}
/*code block header*/
[data-node-type="code_block"] > [class*="group"] > div:not(.cm-editor),
[data-node-type="code_block"] > [class*="group"] > div:not(.cm-editor) > div{
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
}
[data-node-type="code_block"] > [class*="group"] > div:not(.cm-editor) > div,
[data-node-type="code_block"] > [class*="group"] > div:not(.cm-editor) > div * {
	transform: unset !important;
}

[data-chat-message-id] [data-node-type="code_block"] {
	max-width: 100% !important;
	width: 640px !important
}
/***********
************
INLINE CODE
************
************/
:root {
	--inlinecodeBrdRad: 4px;
	--inlinecodePad: 0.125em .3em 0.12em .3em;
}
.ProseMirror code {
	font-size: calc(1em - 2px);
	border-radius: var(--inlinecodeBrdRad);
	padding: var(--inlinecodePad);
	display: inline;
	background: var(--inlineCodeBgClr);
	border: 1px solid var(--inlineCodeBrdClr) !important;
	box-shadow: inset 0 0 0 .75px var(--inlineCodeBoxShadClr);
	color: var(--inlineCodeClr);
	position: relative;
	/*overflow: hidden !important;
	white-space: nowrap;*/
}
.ProseMirror [data-node-type*="paragraph"] code,
.ProseMirror [data-node-type*="list"]:not([class*="Heading"]) > [class*="nested"] code {
	line-height: 20px;
	vertical-align: text-top;
}
.ProseMirror a code {
	text-decoration: none !important;
}

a code:after {
	content: "";
	display: block;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 5px;
	background: var(--inlineCodeLinkOverrideBgClr);
	border-bottom-right-radius: calc(var(--inlinecodeBrdRad) - 1px);
	border-bottom-left-radius: calc(var(--inlinecodeBrdRad) - 1px);
}
h1 {
	--inlinecodeBrdRad: 7px;
	--inlinecodePad: 0.15em .3em 0.05em .3em !important;
}
h2 {
	--inlinecodeBrdRad: 7px;
	--inlinecodePad: 0.15em .3em 0.025em .3em !important;
}
h3,
h4 {
	--inlinecodeBrdRad: 5px;
	--inlinecodePad: .15em .3em 0.05em .3em;
}

/***********
************
BULLETS
************
************/
[class*="bulletIcon"] + [class*="_hint"] {
	opacity: .74;
}
/***********
************
HIGHLIGHTS
************
************/
[style*="var(--annotation-"] + [class*="ProseMirror"] {
	background: transparent;
}

/*embedded highlights */
[data-node-type="embed"] > [class*="group/"] > .border-solid.border-light-grey:not([class*="ProseMirror"]) {
	background: var(--embedHighlightBgClr)
}
/***********
************
IMAGES
************
************/
/*exclude embedded images and svgs*/
.ProseMirror [data-node-type="embed"][class*="self-start"],
.ProseMirror [data-node-type="embed"][class*="self-center"],
.ProseMirror [data-node-type="embed"][class*="self-end"],
.ProseMirror [data-node-type="image"] {
	background: transparent;
	box-shadow: 0 0 0 1px solid var(--blockquoteBrdClr);
	border-radius: calc(var(--blockquoteBrdRad) * 2);
	padding: 0px;
	transition: 0.15s;
	overflow: hidden;
}


/*EMBEDDED IMAGES - SELECTING*/
.ProseMirror [data-node-type="embed"][class*="self-start"][class*="selecting"],
.ProseMirror [data-node-type="embed"][class*="self-center"][class*="selecting"],
.ProseMirror [data-node-type="embed"][class*="self-end"][class*="selecting"] {
	box-shadow: 0 0 0 3px var(--active-item);
}
/*IMAGES - SELECTING*/
.ProseMirror [data-node-type="image"][class*="selecting"] {
	box-shadow: 0 0 0 3px var(--active-item);
}

[data-node-type] img[src*="svg"] {}
[data-node-type] [class*="ew-resize"] {
	opacity: 0.0 !important;
}
[data-node-type]:hover [class*="ew-resize"] {
	opacity: 0.5 !important;
}
[data-node-type] [class*="ew-resize"]:hover {
	opacity: 1.0 !important;
}
[data-node-type] [class*="ew-resize"] div {
	border-color: hsla(0, 0%, 50%, 0.85)
}
[data-node-type] [class*="ew-resize"]:hover div {
	border-color: hsla(0, 0%, 65%, 1.05)
}

/*****************
******************
******************
EMBEDDED - IMAGES - POPUP TITLE / MEDIA TOOLBAR
******************
******************
******************/
.ProseMirror [data-node-type="embed"][class*="self-"] {
	padding-top: 0px !important;
	padding-bottom: 0px !important;
}


/*MEDIA TOOLBAR - POSITION*/
.ProseMirror [data-node-type="embed"][class*="self-"] > [class*="group"] > [class*="group"] > .absolute.right-2,
[data-object-type="imageCardInstance"] > .overflow-hidden + .absolute {
	right: 10px;
	max-width: calc(100% - 20px);
}


/*MEDIA TOOLBAR - CONTAINER*/
.ProseMirror .bg-media-toolbar-bg,
[data-object-type="imageCardInstance"] > .overflow-hidden + .absolute .bg-media-toolbar-bg {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	background: hsl(0, 0%, 0%, .25);
	transition: .25s
}
.ProseMirror .bg-media-toolbar-bg:hover,
[data-object-type="imageCardInstance"] > .overflow-hidden + .absolute .bg-media-toolbar-bg:hover {
	background: hsl(0, 0%, 0%, 0.65)
}

/*MEDIA TOOLBAR - ELEMENTS - ALL*/
.ProseMirror [data-node-type][class*="self-"] .bg-media-toolbar-bg > div.border-r-media-divider,
[data-object-type="imageCardInstance"] > .overflow-hidden + .absolute .bg-media-toolbar-bg > div.border-r-media-divider {
	transition: .1s;
	border-color: hsla(0, 0%, 50%, 0.35)
}
[class*="bg-media-button-hover"] {
	background: transparent;
}

/*MEDIA TOOLBAR - ELEMENTS - TITLE*/
.ProseMirror [data-node-type="embed"][class*="self-"] .bg-media-toolbar-bg > div.border-r-media-divider:nth-of-type(1),
[data-object-type="imageCardInstance"] > .overflow-hidden + .absolute .bg-media-toolbar-bg > div.border-r-media-divider:nth-of-type(1) {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	overflow: hidden;
	max-width: 100px;
}
.ProseMirror [data-node-type="embed"][class*="self-"] .bg-media-toolbar-bg > div.border-r-media-divider:nth-of-type(1):hover,
[data-object-type="imageCardInstance"] > .overflow-hidden + .absolute .bg-media-toolbar-bg > div.border-r-media-divider:nth-of-type(1):hover {
	max-width: 740px !important;
	transition-delay: .4s !important;
}
/*MEDIA TOOLBAR - ELEMENTS - TITLE - TEXT*/
.ProseMirror [data-node-type="embed"][class*="self-"] .bg-media-toolbar-bg > div.border-r-media-divider:nth-of-type(1) .truncate,
[data-object-type="imageCardInstance"] > .overflow-hidden + .absolute .bg-media-toolbar-bg > div.border-r-media-divider:nth-of-type(1) .truncate {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow-x: scroll;
}
.ProseMirror [data-node-type="embed"][class*="self-"] .bg-media-toolbar-bg > div.border-r-media-divider:nth-of-type(1) .truncate:hover,
[data-object-type="imageCardInstance"] > .overflow-hidden + .absolute .bg-media-toolbar-bg > div.border-r-media-divider:nth-of-type(1) .truncate:hover {
	text-overflow: unset;
}
.ProseMirror [data-node-type="embed"][class*="self-"] .bg-media-toolbar-bg > div.border-r-media-divider:nth-of-type(1) .truncate::-webkit-scrollbar,
[data-object-type="imageCardInstance"] > .overflow-hidden + .absolute .bg-media-toolbar-bg > div.border-r-media-divider:nth-of-type(1) .truncate::-webkit-scrollbar {
	height: 0px;
}

/**/
[class*="content"] .ProseMirror [data-node-type] {
	word-break: break-word;
}

/**TODO*/
._checked_mglho_112>[data-node-type=paragraph]:first-child,
._checked_mglho_112>[data-node-type=paragraph]:first-child * {
	color: var(--text-done-editor) !important;;
	text-decoration-color: var(--text-done-editor-line);
}

/***********
************
************
************
************
************
EDITOR TEXT COLORS - ROOT
************
************
************
************
************
************/
:root {
	--text-color: #2e2e2e;
	--text-color-Highlight:#2e2e2e
	--headingClr: var(--bldClr);
	--bldClr: black;
	--highlightClr: hsl(0, 0%, 0%);
	--strikethrough-Clr: hsl(0, 0%, 70%);
	--strikethroughStrike-Clr: hsl(0, 0%, 70%);
	/* highlight yellow*/
	--highlightUnderlineClr-Yellow: hsl(50, 100%, 20%, 1);
	--highlightBrdClr-Yellow: hsl(50, 100%, 50%, .45);
	--highlightBgClr-Yellow: hsl(50, 100%, 50%, .2);
	/*text highlights*/
	--underlineClr: black;
	/*Internal Link*/
	--linkUnderlineClr: var(--active-item);
	--internalLinkUnderlineClr: hsl(0, 0%, 0%, .15);
}


[data-theme="dark"] {
	--text-color: hsl(0, 0%, 81%) !important;
	--text-color-Highlight:hsla(0, 0%, 88%, 1.0);
	--headingClr: hsl(0, 0%, 95%);
	--bldClr: hsl(0, 0%, 90%);
	--highlightClr: hsl(0, 0%, 97%);
	--strikethrough-Clr: hsl(0, 0%, 61%);
	--strikethroughStrike-Clr: hsl(0, 0%, 61%, 0.65);
	/*text highlights*/
	--highlightUnderlineClr-Yellow: hsl(50, 100%, 50%, .65);
	--highlightBrdClr-Yellow: var();
	--highlightBgClr-Yellow: hsl(47, 100%, 50%, 0.29);
	--highlightBgClr-Yellow: hsla(47, 100%, 47%, .325);
	
	

	/*Underline*/
	--underlineClr: hsl(0, 0%, 100%, .64);
	/*Internal Link*/
	--linkUnderlineClr: var(--active-item);
	--internalLinkUnderlineClr: hsl(200, 4%, 60%, .3);
	--internalLinkClr: hsl(200, 0%, 61%);
}

/***********
BODY COLOR
************/
[class*="text-middle-hard-grey"] .ProseMirror {
	color: var(--text-color)
}

/***********
BOLD
************/
.ProseMirror strong {
	color: var(--bldClr);
}
.ProseMirror strong a {
	color: var(--active-item);
}
/***********
HEADINGS
************/
.ProseMirror [data-node-type="heading"],
.ProseMirror [data-node-type="heading"] strong {
	color: var(--headingClr)
}

/***********
STRIKETHROUGH
************/
.ProseMirror s {
	text-decoration-thickness: 2px !important;
	text-decoration-color: var(--strikethroughStrike-Clr);
	color: var(--strikethrough-Clr) !important;
}

:root {
	--inlineMentionBrdW: 1.5px;
}
/***********
INLINE MENTION
************/
.ProseMirror .text-active .border-b {
	border-bottom-style: dashed;
	border-bottom-width: var(--underlineH);
	border-color: var(--internalLinkUnderlineClr);
}
.ProseMirror h1 [data-underline="true"],
.ProseMirror h2 [data-underline="true"],
.ProseMirror h1 a,
.ProseMirror h2 a,
.ProseMirror h1 .text-active .border-b,
.ProseMirror h2 .text-active .border-b {
	--underlineH: 2.75px;
}

.ProseMirror h3 [data-underline="true"],
.ProseMirror h3 a,
.ProseMirror h3 .text-active .border-b {
	--underlineH: 2px;
}

[data-editor-type="previewer"] > .ProseMirror [data-underline="true"],
[data-editor-type="previewer"] > .ProseMirror a,
[data-editor-type="previewer"] > .ProseMirror .text-active .border-b {
	--underlineH: 1.5px !important;
}

/***********
INLINE LINK
************/
.ProseMirror a[href*="heptabase.com"] {
	border-bottom-width: 10px !important;
}
.ProseMirror a[href*="heptabase.com"],
.ProseMirror .text-active .border-b {
	color: var(--internalLinkClr);
}
.ProseMirror a[href*="heptabase.com"],
.ProseMirror a[href*="heptabase.com"] [data-color],
.ProseMirror .text-active .border-b {
	transition: .1s;
}

.ProseMirror a[href*="heptabase.com"]:hover,
.ProseMirror a[href*="heptabase.com"]:hover span[data-color],
.ProseMirror .text-active .border-b:hover {

	color: var(--active-item) !important
}



/***********
COLORED TEXT
************/
.ProseMirror [data-underline="true"] [data-color="gray"] {
	background-image: linear-gradient(0deg,
	var(--text-gray-editor) 0%,
	var(--text-gray-editor) var(--underlineH),
	var(--text-gray-editor) var(--underlineH),
	transparent 0%) !important
}



/***********
LINKS
************/
.ProseMirror a {
	background-image: linear-gradient(0deg,
	var(--linkUnderlineClr) 0%,
	var(--linkUnderlineClr) var(--underlineH),
	var(--linkUnderlineClr) var(--underlineH),
	transparent 0%) !important;
}

.ProseMirror a[data-hepta-link] {
	--linkUnderlineClr: var(--internalLinkUnderlineClr);
}
.ProseMirror a,
.ProseMirror a *:not(a code) {
	border: unset !important
}

/*UNDERLINE IN LINK & HIGHLIGHTED LINK*/
.ProseMirror a [data-color="yellow"][data-type="background"],
.ProseMirror a [data-underline="true"] {
	background-image: linear-gradient(to top,
	var(--linkUnderlineClr) 0%,
	var(--linkUnderlineClr) var(--underlineH),
	transparent var(--underlineH),
	transparent 100%) !important;
}
.ProseMirror a code {
	color: var(--active-item) !important;
}
/***********
UNDERLINE
************/
:root {
	/*underline*/
	--underlineH: 1.5px;
}
[data-node-type="table"] {
	--underlineH: 1px;
}
[data-underline="true"] {
	background-image: linear-gradient(0deg,
		var(--underlineClr) 0%,
		var(--underlineClr) var(--underlineH),
		var(--underlineClr) var(--underlineH),
		transparent 0%) !important;
	border: unset !important;
}
[data-underline="true"],
[data-underline="true"] * {
	border: unset !important
}

/***********
************
HIGHLIGHTS
************
************/


/*HIGHIGHT - YELLOW*/
[data-color="yellow"][data-type="background"] {
	background-image: linear-gradient(to top,
		var(--highlightBrdClr-Yellow) 0%,
		var(--highlightBrdClr-Yellow) var(--underlineH),
		transparent var(--underlineH),
		transparent 100%);
	background-repeat: no-repeat !important;
	background-size: 100% 100% !important;
	background-position-x: 0px !important;
	background-position-y: 75% !important;
	/*color: var(--highlightClr) !important;*/
	/**/
	background-color: var(--highlightBgClr-Yellow) !important;
}




/*HIGHIGHT > COLOR*/
[data-color][data-type="background"]{
	--text-color: var(--text-color-Highlight);
		color: var(--text-color);
}
/*HIGHIGHT > COLOR > BOLD*/
strong [data-color][data-type="background"] {
	color: var(--bldClr);
}
/***********
************
HIGHLIGHTS > UNDERLINE IN HIGHLIGHT
************
************/

[data-underline="true"] [data-color][data-type] {
	background-image: linear-gradient( to top,
		var(--underlineClr) 0%,
		var(--underlineClr) var(--underlineH),
		transparent var(--underlineH),
		transparent 100%);
}

/*HIGHLIGHTS > UNDERLINED > UNDERLINE COLOR*/
[data-underline="true"] [data-color="gray"][data-type="background"] {
	--underlineClr:var(--text-gray-editor)
}
[data-underline="true"] [data-color="brown"][data-type="background"] {
	--underlineClr:var(--text-brown-editor)
}
[data-underline="true"] [data-color="yellow"][data-type="background"] {
	--underlineClr:var(--highlightUnderlineClr-Yellow)
}


/***********
************
TEXT COLORS > UNDERLINES
************
************/
[data-underline="true"] [data-color][data-type="text"] {
		background-image: linear-gradient(0deg,
		var(--underlineClr) 0%,
		var(--underlineClr) var(--underlineH),
		var(--underlineClr) var(--underlineH),
		transparent 0%) !important;
}


/*TEXT COLOR > UNDERLINED > UNDERLINE COLOR*/
[data-underline="true"] [data-color="gray"]{
	--underlineClr:var(--text-gray-editor);
}
[data-underline="true"] [data-color="brown"]{
	--underlineClr:var(--text-brown-editor);
}
[data-underline="true"] [data-color="orange"]{
	--underlineClr:var(--text-orange-editor);
}
[data-underline="true"] [data-color="yellow"]{
	--underlineClr:var(--text-yellow-editor);
}
[data-underline="true"] [data-color="green"]{
	--underlineClr:var(--text-green-editor);
}
[data-underline="true"] [data-color="blue"]{
	--underlineClr:var(--text-blue-editor);
}
[data-underline="true"] [data-color="purple"]{
	--underlineClr:var(--text-purple-editor);
}
[data-underline="true"] [data-color="pink"]{
	--underlineClr:var(--text-pink-editor);
}
[data-underline="true"] [data-color="red"]{
	--underlineClr:var(--text-red-editor);
}

/*root*/

:root {
	--embedTstBrdW:0px;
}

/***************
! EMBEDS
****************/
:root {
	--embedPadTopBtm:16px;
	--embedBrdRad:0px;
	--embedPadLR:10px;
	--embedPadLR-Active:10px;
	--embedTransition:.1s;
	/**/
	--embedBrdDashH:2.25px;
	--embedBrdDashOpacity:1;
	--embedDashPosTop:0;
	--embedDashPosBtm:0;
	--embedDashPosL:calc(var(--embedPadLR) * -1);
	--embedDashPosR:calc(var(--embedPadLR) * -1);
}

/*COLORS*/

:root {
	--embedBg:hsla(0, 0%, 98%, 1.0);
	--embedBg-Hover:hsla(0, 0%, 94%, 1.0);
	--embedBg-Selected:hsla(210, 55%, 89%, 1.0);
	--embedBrdClr:hsla(0, 0%, 89%, 1.0);
	--embedBrdClr-Active:hsla(210, 36%, 83%, 1.0);
}

[data-theme="dark"] {
	--embedBg:hsla(0, 0%, 100%, .02);
	--embedBgClr:hsla(0, 0%, 100%, .02);
	--embedBg:hsla(0, 0%, 0%, .052);
	/*--embedBg-Hover:linear-gradient(
			to right, 
			transparent 0%, 
			var(--embedBgClr) var(--embedPadLR-Active), 
			var(--embedBgClr) calc(100% - var(--embedPadLR-Active)), 
			transparent);*/
	--embedBg-Hover:hsla(0, 0%, 0%, .1);
	--embedBg-Selected:hsla(211, 30%, 27%, 1.0);
	--embedBrdClr:hsla(0,0%,0%,0.19);
	--embedBrdClr-Active:hsla(211, 25%, 36%, 1.0);
}

[class*="ProseMirror-hepta-style"] > .ProseMirror,
[class*="ProseMirror-hepta-style"] > .ProseMirror > *{
	box-shadow: inset  0 0 0 var(--embedTstBrdW) red;
}
[class*="ProseMirror-hepta-style"] > .ProseMirror  [data-node-type="embed"]{
	position: relative;
	
}

[class*="ProseMirror-hepta-style"] > .ProseMirror  [data-node-type="embed"] > [class*="group"] > [class*="ProseMirror-hepta-style"],
.grid.select-none .ProseMirror  [data-node-type="embed"] > [class*="group"] > [class*="ProseMirror-hepta-style"]{
	padding-top: var(--embedPadTopBtm);
	padding-bottom:  var(--embedPadTopBtm);
	padding-left:  var(--embedPadLR);
	padding-right:  var(--embedPadLR);
	background: var(--embedBg);
	border-radius: var(--embedBrdRad);
	border-color: var(--embedBrdClr);
	border-color: transparent;
	transition: var(--embedTransition);
		width: calc(100% + var(--embedPadLR) * 2);
	margin-left: calc(var(--embedPadLR) * -1);
	--embedPadLR:var(--embedPadLR-Active);
	outline: var(--embedTstBrdW) solid green;
}

/*EMBED > HOVER *NOT SELECTED*/
[class*="ProseMirror-hepta-style"] > .ProseMirror  [data-node-type="embed"]:hover > [class*="group"] > [class*="ProseMirror-hepta-style"],
.grid.select-none .ProseMirror  [data-node-type="embed"]:hover > [class*="group"] > [class*="ProseMirror-hepta-style"]{
	--embedBg:var(--embedBg-Hover);
	--embedBrdRad:3px;
	cursor: pointer;


}

/*EMBED > SELECTED*/
[class*="ProseMirror-hepta-style"] > .ProseMirror  [data-node-type="embed"][class*="selecting"] > [class*="group"] > [class*="ProseMirror-hepta-style"]{
	--embedBg:var(--embedBg-Selected);
	--embedBrdClr:var(--embedBrdClr-Active);
	--IconEmbedDashLine:var(--IconEmbedDashLineActive);
	--embedBrdRad:5px;
	--embedBrdDashOpacity:0;
	border-color: var(--embedBrdClr-Active);
	/*add faux padding*/

}
/*EMBED > AFTER THINGY*/
[class*="ProseMirror-hepta-style"] > .ProseMirror  [data-node-type="embed"]:after {
	opacity: 0 !important;
}
[class*="ProseMirror-hepta-style"] > .ProseMirror  [data-node-type="embed"][class*="selecting"]:after{
	opacity: 0;
	
}

/*BORDER DASH*/
:root {

}
/*top border dash*/
[class*="ProseMirror-hepta-style"] > .ProseMirror  [data-node-type="embed"]> [class*="group"] > [class*="ProseMirror-hepta-style"]:before,
.grid.select-none .ProseMirror  [data-node-type="embed"]> [class*="group"] > [class*="ProseMirror-hepta-style"]:before,
/*bottom border dash*/
[class*="ProseMirror-hepta-style"] > .ProseMirror  [data-node-type="embed"]> [class*="group"] > [class*="ProseMirror-hepta-style"]:after,
.grid.select-none .ProseMirror  [data-node-type="embed"]> [class*="group"] > [class*="ProseMirror-hepta-style"]:after{
	content: "";
	position: absolute;
	display: block;
	background-image: var(--IconEmbedDashLine);
	background-position: center left;
	background-repeat: repeat;
	height: var(--embedBrdDashH);
	top: var(--embedDashPosTop);
	left: var(--embedDashPosL);
	right:  var(--embedDashPosR);
	z-index: 2;
	opacity: var(--embedBrdDashOpacity);
	transition: var(--embedTransition);
}

[class*="ProseMirror-hepta-style"] > .ProseMirror  [data-node-type="embed"]> [class*="group"] > [class*="ProseMirror-hepta-style"]:after,
.grid.select-none .ProseMirror  [data-node-type="embed"]> [class*="group"] > [class*="ProseMirror-hepta-style"]:after{
	top: unset;
	bottom: var(--embedDashPosBtm);
}


/***************
! EMBEDS - HOVER MENU
****************/
:root {
	--embedHoverMenuH:20px;
	--embedMargTopBtm:.25rem;
}
[class*="ProseMirror-hepta-style"] > .ProseMirror [data-node-type="embed"] > [class*="group"] > .absolute {
	z-index: 93939393;
}



/****
MENU > NORMAL
*****/
[class*="ProseMirror-hepta-style"] > .ProseMirror [data-node-type="embed"]:not([data-node-type="embed"] [data-node-type="embed"]) > [class*="group"] > .absolute {
	position: sticky;
	height: var(--embedHoverMenuH);
	display: flex;
	flex-direction: column;
	top: 0px;
	margin-left: auto;
	width: fit-content;
	overflow: visible;
	visibility: visible !important;
	opacity: 0 !important;
	max-width: 100%;
	 max-width: calc(100% - 80px);
}
/****
MENU > HOVER
*****/
[class*="ProseMirror-hepta-style"] > .ProseMirror [data-node-type="embed"]:not([data-node-type="embed"] [data-node-type="embed"]):hover > [class*="group"] > .absolute{
	opacity: 1 !important;
}
/****
MENU > TEXT OUTER
*****/
[class*="ProseMirror-hepta-style"] > .ProseMirror [data-node-type="embed"]:not([data-node-type="embed"] [data-node-type="embed"]) > [class*="group"] > .absolute > div {
	min-height: fit-content;
	display: flex;
	justify-content: flex-end !important;
	align-items: center;
	margin-top: 0px;
	
}
[class*="ProseMirror-hepta-style"] > .ProseMirror [data-node-type="embed"]:not([data-node-type="embed"] [data-node-type="embed"]) > [class*="group"] > .absolute > div .text-label {
	min-height: 100%;
	max-width: calc(100%);
}

/****
OVERRIDES > EMBED
*****/

:root {
	--embedDashPosTop:-1px;
	--embedDashPosBtm:-1px;
	--embedDashPosL:0;
	--embedDashPosR:0;
}

[class*="ProseMirror-hepta-style"] > .ProseMirror [data-node-type="embed"]:not([data-node-type="embed"] [data-node-type="embed"]) > [class*="group"] > .absolute + div {
	position: relative;
}


[class*="ProseMirror-hepta-style"] > .ProseMirror [data-node-type="embed"]:not([data-node-type="embed"] [data-node-type="embed"]) > [class*="group"]{
	margin-top: calc(var(--embedHoverMenuH) * -1)
}

/***************
! ICONS
****************/
:root {
	/*DASHED LINE - LIGHT*/
	--IconEmbedDashLine-LIGHT: url('data:image/svg+xml;utf8,<svg viewBox="0 0 50 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="1" width="25" height="10" rx="5" fill="%23808080" fill-opacity="0.3"/></svg>');
	/*DASHED LINE - ACTIVE - LIGHT*/
	--IconEmbedDashLineActive-LIGHT: url('data:image/svg+xml;utf8,<svg viewBox="0 0 50 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="1" width="25" height="10" rx="5" fill="%23007BFF" fill-opacity="0.5"/></svg>');
	/*DASHED LINE - DARK*/
	--IconEmbedDashLine-DARK: url('data:image/svg+xml;utf8,<svg viewBox="0 0 50 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="1" width="25" height="10" rx="5" fill="%23808080" fill-opacity="0.325"/></svg>');
	/*DASHED LINE ACTIVE - DARK*/
	--IconEmbedDashLineActive-DARK: url('data:image/svg+xml;utf8,<svg viewBox="0 0 50 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="1" width="25" height="10" rx="5" fill="%234DA0FF" fill-opacity="0.45"/></svg>');
}


:root {
	--IconEmbedDashLine: var(--IconEmbedDashLine-LIGHT);
	--IconEmbedDashLineActive:var(--IconEmbedDashLineActive-LIGHT);
}
[data-theme="dark"] {
	--IconEmbedDashLine: var(--IconEmbedDashLine-DARK);
	--IconEmbedDashLineActive:var(--IconEmbedDashLineActive-DARK);
}


/***********
************
H5 HEADINGS
************
************/
.ProseMirror h5 {
		font-size: 17px;
		line-height: 1.5;
}


/***********
************
HEADINGS
************
************/ 
.ProseMirror h4{
		font-size: 1.075em;
}
[class*="group"] + div  .ProseMirror h4 {
		font-size: 1em;
}



/*****************
******************
******************
EDITOR > TABLES
******************
******************
******************/



:root {
		--tableHeaderBgClr:hsla(0, 0%, 0%, .035);
		--tabbleCellBgClr-Gray:var(--tableHeaderBgClr);

}
[data-theme="dark"] {
		--tableHeaderBgClr:hsla(0, 0%, 100%, .08);
		--tabbleCellBgClr-Gray:var(--tableHeaderBgClr);
}



[data-theme="dark"] [data-node-type="table"] [data-node-type="table_cell"] {
	--bg-blue-editor: hsla(200, 100%, 44%, 0.2);
}
/*
.ProseMirror [data-node-type=table] {
	margin-top: 1px;
	margin-bottom: 1px;
	padding-top: 3px;
	padding-bottom: 3px;
}
*/

/*bottom row adder*/
.ProseMirror [data-node-type="table"] table + div > div.absolute.left-0.top-0 {
	opacity: 0;
	visibility: hidden !important;
	display: none;
}
/*ROW/COLUMN ADDER - MAKE BIGGER*/ 
.ProseMirror [data-node-type="table"] table + div > .touch-none {
	transition: .12s !important;
	background: transparent !important;
	box-shadow: none !important;
}
.ProseMirror [data-node-type="table"] table + div > .touch-none:hover {
	background: hsla(0, 0%, 50%, 0.3) !important;
}
/*COLUMN ADDER*/
:root {
	--columnAdderWidth: 70px;
	--tableBrdRad: 3px;
}
.ProseMirror [data-node-type="table"] table + div > .touch-none.h-4 {
	width: var(--columnAdderWidth);
	margin-left: calc(var(--columnAdderWidth) * -.5)
}
.ProseMirror [data-node-type="table"] table + div > .touch-none.ease-in-out {
	background: transparent !important;
	transition: .3s !important;
	opacity: 0 !important;
	display: none;
}

/*****************
******************
******************
EDITOR > TABLES > BORDER RADIUS
******************
******************
******************/
 .ProseMirror table {
	border-radius: var(--tableBrdRad) !important;
	border-color: hsla(0, 0%, 40%, .1)!important;
	outline: 1px solid var(--light-middle-grey);
	outline-offset: -1px
}
 .ProseMirror table tbody tr > td:first-child {
	border-left-color: transparent;
}
 .ProseMirror table tbody > tr > td:last-child {
	border-right-color: transparent
}
 .ProseMirror table tbody tr:first-child > td {
	border-top-color: transparent;
}
 .ProseMirror table tbody tr:last-child > td {
	border-bottom-color: transparent
}

/*****************
******************
******************
EDITOR > TABLES > FIX WIDTH THING
******************
******************
******************/

[data-node-type="table"][style*="padding-left: 0px"],
[data-node-type="table"][style*="padding-left: 24px"]{
		min-width: 100% !important;
}

[data-node-type="table"] > [style*="0px"],
[data-node-type="table"] > [style*="21px"],
[data-node-type="table"][style*="24px"]  > div{
		width: calc(100% - 0px) !important;
}
[data-node-type="table"] > [style*="0px"] > table,
[data-node-type="table"] > [style*="21px"] > table,
[data-node-type="table"][style*="24px"]  > div > table{
}


[class*="nested"]  [data-node-type="table"] > div > table[style*="min-width"]{
		width:100% !important;
}

/*****************
******************
******************
EDITOR > TABLES > BACKGROUNDS
******************
******************
******************/

/*COLUMN AND ROW HEADERS*/
[data-node-type="table"]
._hasColumnHeader_7b1uz_13>div>table>tbody>tr>td:first-child, 
._hasColumnHeader_7b1uz_13>div>table>tbody>tr>th:first-child,
._hasRowHeader_7b1uz_8>div>table>tbody>tr:first-child>td, ._hasRowHeader_7b1uz_8>div>table>tbody>tr:first-child>th,
._hasColumnHeader_7b1uz_13>div>table>tbody>tr>td:first-child, ._hasColumnHeader_7b1uz_13>div>table>tbody>tr>th:first-child{
		background-color: var(--tableHeaderBgClr) !important;
}

/*BACKGROUND COLOR - GRAY*/
[data-node-type="table"] [data-node-type="table_cell"][data-background-color="gray"]{
		background-color: var(--tabbleCellBgClr-Gray)!important;
}




/*root*/

:root {
  --refTstBrdW:0px;
  --refTstBrdClr1:red;
  --refTstBrdClr2:yellow;
  --refTstBrdClr3:green;
}
.group\/1685197199740,
.group\/1685197199740 > *,
.group\/1685197199740 > * > * {
  box-shadow: inset 0 0 0 var(--refTstBrdW) var(--refTstBrdClr1);
}

.group\/1685197199740 > *{
  --refTstBrdClr1:var(--refTstBrdClr2)
}

.group\/1685197199740 > * > *{
  --refTstBrdClr1:var(--refTstBrdClr3)
}

.group\/1685197199740 > svg[viewBox="0 0 14 14"] + div > .truncate.text-label {
  outline: var(--refTstBrdW) solid #00adff;
  outline-offset: -1px;
}

/*****************
******************
******************
! REFERENCES - REORDER
******************
******************
******************/


/*info popup - reference container */
.hepta-pseudo-overlay > .absolute + .bg-background-secondary > div > div,
/*sidebar - reference container*/
[style*="width"]>[style*="width"] > div > .h-full.bg-background-secondary > div > div,
[class*="info"] > div:nth-child(4){
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
}


/*info popup - all divs*/
.hepta-pseudo-overlay > .absolute + .bg-background-secondary > div > div > div,
/*sidebar - all divs*/
[style*="width"]>[style*="width"] > div > .h-full.bg-background-secondary > div > div > div,
/*note - all divs*/
[class*="info"] > div:nth-child(4) > div{
    width: 100% !important;
    max-width: 100%;
    order: 2
}

/*info popup - tags and whiteboard*/
.bg-background-secondary > div > div > .flex.mt-1.flex-row.items-start,
/*sidebar - tags and whiteboard*/
[style*="width"]>[style*="width"] > div > .h-full.bg-background-secondary > div > div > div.flex.mt-1.flex-row.items-start{
    order: 0;
}


/*info - popup*/
/*sidebar - properties*/
[style*="width"]>[style*="width"] > div > .h-full.bg-background-secondary > div > div > div.my-1{
    order: 1;
    box-shadow: 0 -1px 0 0 hsla(0,0%,50%,.2);
}


/*date created*/
[class*="info"] > div:nth-child(4) > .py-1,
/*sidebar - all divs*/
[style*="width"]>[style*="width"] > div > .h-full.bg-background-secondary > div > div > div.py-1{
    order: 4;
    box-shadow: 0 -1px 0 0 hsla(0,0%,50%,.2);
}




/********
*********
*********
ATRIBUTES > CONTAINER
*********
*********
*********/

/*info > info popup */
.pr-\[calc\(20px-var\(--scrollbar-width\)\)\] > div,
/*info > bottom of note */
[class*="info"],
/*info > right sidebar */
[style*="width: "] .mt-2.w-full{
    display:flex;
    flex-direction:column;
    box-shadow: inset 0 0 0 var(--refTstBrdW) red;
    
}

/********
*********
*********
ATRIBUTES > MOVE BACKLINKS TO BOTTOM
*********
*********
*********/

/*info > info popup */
.pr-\[calc\(20px-var\(--scrollbar-width\)\)\] > div > .mt-1.flex-col,
/*info > bottom of note */
[class*="info"] > .mt-1.flex-col,
/*info > right sidebar */
[style*="width: "] .mt-2.w-full > .mt-1.flex-col{
    box-shadow:0px -1px 0 0 var(--light-middle-grey);
    order:9939;
    padding-bottom: 40px;
    padding-top: 20px;
}

/*****************
******************
******************
! REFERENCES - TAGS
******************
******************
******************/
:root {
    --refTagBgClr: hsla(214, 8%, 30%, .075);
    --refTagBrdClr: hsla(214, 8%, 20%, 0.15);
    --refTagFilter-Hover:brightness(.8)contrast(9);
}
[data-theme="dark"] {
    --refTagBgClr: hsl(214, 8%, 55%,0.15);
    --refTagBrdClr: hsl(214, 8%, 55%,0.135);
}
.w-40 + div .text-label-mini [class*="_tag"] {
    background: var(--refTagBgClr);
    border-color: var(--refTagBrdClr);
    transition: .1s;
}
.w-40 + div .text-label-mini [class*="_tag"]:hover {
    --refTagBgClr:hsla(214, 8%, 50%, 0.2);
}

/*****************
******************
******************
! REFERENCES - PROPERTIES
******************
******************
******************/
:root {
  --propLabelIcnW:.875rem;
  --propValueW:100%;
  --propValueMaxW:calc(100% - 34px);
  --propValueMargL:calc(var(--propLabelIcnW));
}
/*labels*/
/*labels*/
.text-label.text-middle-hard-grey.w-40 {
  width: 12rem
}
/**url**/
[class*="group"] > a.box-border.block.h-full {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 50px;
}

.grow.text-label.text-middle-grey {}

.relative.flex[style*="max-width: calc(0px + 50vw)"] {
  
}
/******
RIGHT SIDEBAR > WIDTH - UNDER 400px > 

PROPERTY WRAPPER > SET TO COLUMN
*******/
.relative.flex:is([style*=" width: 3"], [style*=" width: 40"], [style*=" width: 41"],[style*=" width: 42"],[style*=" width: 43"],[style*=" width: 44"], [style*=" width: 45"]) .mt-2 > .my-1[class*="gap"] > div{
  flex-direction: column;
  
}

/*PROPERTY - LABEL*/
.relative.flex:is([style*=" width: 3"], [style*=" width: 40"], [style*=" width: 41"],[style*=" width: 42"],[style*=" width: 43"],[style*=" width: 44"], [style*=" width: 45"]) .mt-2 > .my-1[class*="gap"] > div > div.w-40 {
  width: 100% !important;
  box-shadow: inset 0 0 0 var(--refTstBrdW) red;
  margin: unset;
}

/*PROPERTY - VALUE*/
.relative.flex:is([style*=" width: 3"], [style*=" width: 40"], [style*=" width: 41"],[style*=" width: 42"],[style*=" width: 43"],[style*=" width: 44"], [style*=" width: 45"]) .mt-2 > .my-1[class*="gap"] > div > div.w-40 + div{
  width: var(--propValueW) !important;
  max-width: var(--propValueMaxW) !important;
  box-shadow: inset 0 0 0 var(--refTstBrdW) red;
    margin: unset;
  margin-left: var(--propValueMargL)

}

/*****************
******************
******************
! REFERENCES - CARD TITLES
******************
******************
******************/
:root {
  --refTitlePad: .375rem;
  --refArrowIcnW: 18px;
}

/*CONTAINER*/
.group\/1685197199740 {
  display: flex;
  align-items: flex-start;
}


/*********
CONTAINER > ROWS
**********/
.group\/1685197199740 > * {
  position: relative
}


/*********
CONTAINER > ROW 1: EXPAND COLLAPSE ICON
**********/
.group\/1685197199740 > svg[viewBox="0 0 14 14"] {
  margin-bottom: unset;
  margin-top: calc(var(--refTitlePad) * .5);
}

/*********
CONTAINER > ROW 2: TEXT
**********/
/*TEXT CONTAINER*/
.group\/1685197199740 > div:nth-child(2) {
  padding-right: calc(var(--refArrowIcnW) + var(--refTitlePad));
  align-items: flex-start;
}
/*TEXT*/
.group\/1685197199740 > svg[viewBox="0 0 14 14"] + div > .truncate.text-label {

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap !important;

  /*
  max-width: calc(100% - var(--refArrowIcnW) + var(--refTitlePad)) !important;
  */
}

/*********
CONTAINER > ROW 3: HOVER ARROW
**********/
.group\/1685197199740 > div.ml-auto {
  margin-top: calc(var(--refTitlePad) * .25)
}
.group\/1685197199740 > div.ml-auto > svg {
  position: absolute;
  top: 0;
  right: 0;
  width: var(--refArrowIcnW);
  height: var(--refArrowIcnW);
}
/*********
HOVER ARROW
**********/
/*********
OLD SELECTOR: svg after a 'group'

[class*="group"] > svg[viewBox="0 0 14 14"] 

NEW SELECTOR:  (the specific group that wraps Reference Card Titles)

.group\/1685197199740

*********/


/***********
************
************
************
************
************
NOTE PADDING - POPUP AND FULLSCREEN ONLY
************
************
************
************
************
************/
:root {
    --notePadLeftRight: 1.5rem;
    --noteMaxWidth:700px;
}
[data-theme="dark"] {
  --bg-background-secondaryRsFix:hsl(216, 6%, 15%)
}
/*note content*/
[data-card-tab-id] > [class*="editor"] > .ProseMirror,
.p-12.hepta-scrim > .bg-background-secondary.max-h-220.max-w-270 ._editor_1rg43_1 .ProseMirror-hepta-style {
    width: 100% !important;
    max-width: var(--noteMaxWidth) !Important;
    margin: 0 auto;
    padding-left: var(--notePadLeftRight)!important;
    padding-right: var(--notePadLeftRight)!important;
    box-sizing: border-box;
}

/*note info*/
[class*="editor"] + [class*="info"]{
    width: 100% !important;
    max-width: var(--noteMaxWidth) !Important;
    margin: 0 auto;
    padding-left: var(--notePadLeftRight)!important;
    padding-right: var(--notePadLeftRight)!important;
    box-sizing: border-box;
}

/*SIDEBAR OPENED / CLOSED > MARGIN TOP*/
/*********
TOP PADDING - NOTE
**********/

[class*="paneGroup"] > .pane{
  margin-top: .5rem !important;
}

/*********
BACKGROUND - NOTE
**********/
div > .app-region-drag:first-child + [class*="paneGroup"]:not([class*="SidebarOpened"]){
  background: var(--bg-background-secondaryRsFix);
}

/*********
PADDING - WHITEBOARD
**********/
[class*="paneGroup"]:is([class*="paneGroupWithFullScreenWhenSinglePane"]){
  margin-top: 0px !important;
  padding-left: 0px !important;
}
[class*="paneGroup"]:is([class*="paneGroupWithFullScreenWhenSinglePane"]) > .pane{
  margin-top: 0px !important;
  margin-bottom: 0px !important;


}

/*********
BACKGROUND - WHITEBOARD
**********/
div > .app-region-drag:first-child + [class*="paneGroup"]:is([class*="paneGroupWithFullScreenWhenSinglePane"]){
  background: var(--whiteboard-background);
}

@media (max-width: 600px) {
    :root {
        --notePadLeftRight: 1.2rem;
    }
    [data-card-tab-id] .ProseMirror + [class*="dragHandle"]{
        margin-left: 7px !important;
    }
    
}


/***********
************
************
************
************
************
FIRST LINE TOGGLE 
************
************
************
************
************
************/
:root {
    --bulletwrapperW: 1.75rem;
}
[data-card-tab-id] > div > .ProseMirror > [data-node-type*="toggle"],
.p-12.hepta-scrim [class*="editor"] > .ProseMirror > [data-node-type*="toggle"],
.bg-background-primary > [style*="width: "] .app-region-drag + div [class*="group/"] .ProseMirror > [data-node-type*="toggle"],
[data-is-whiteboard-panel-container="true"] > .bg-background-secondary[style*="width"]> .bg-background-primary div > .relative.grow.flex.flex-col .mt-3 .ProseMirror > [data-node-type*="toggle"],
[data-is-whiteboard-panel-container]  .ProseMirror > [data-node-type*="toggle"],
div[style*="--annotation-"] + div .ProseMirror > [data-node-type*="toggle"]{
    position: relative;
    padding-left: var(--bulletwrapperW);
    width: calc(100% + var(--bulletwrapperW));
    margin-right: calc(var(--bulletwrapperW) * 0);
    align-self: flex-end;
}
[data-card-tab-id] > div > .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"],
.p-12.hepta-scrim [class*="editor"] > .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"],
.bg-background-primary > [style*="width: "] .app-region-drag + div [class*="group/"] .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"],
[data-is-whiteboard-panel-container="true"] > .bg-background-secondary[style*="width"]> .bg-background-primary div > .relative.grow.flex.flex-col .mt-3 .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"],
[data-is-whiteboard-panel-container]  .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"],
div[style*="--annotation-"] + div .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"]{
    position: absolute;
    left: calc(var(--bulletwrapperW) * 0.0);
    width: var(--bulletwrapperW);
    
}

[data-card-tab-id] > div > .ProseMirror > [data-node-type*="toggle"] > [class*="nestedBlocks"],
.p-12.hepta-scrim [class*="editor"] > .ProseMirror > [data-node-type*="toggle"] > [class*="nestedBlocks"],
.bg-background-primary > [style*="width: "] .app-region-drag + div [class*="group/"] .ProseMirror > [data-node-type*="toggle"] > [class*="nestedBlocks"],
[data-is-whiteboard-panel-container="true"] > .bg-background-secondary[style*="width"]> .bg-background-primary div > .relative.grow.flex.flex-col .mt-3 .ProseMirror > [data-node-type*="toggle"] > [class*="nestedBlocks"],
[data-is-whiteboard-panel-container]  .ProseMirror > [data-node-type*="toggle"] > [class*="nestedBlocks"],
div[style*="--annotation-"] + div .ProseMirror > [data-node-type*="toggle"] > [class*="nestedBlocks"]{
    width: 100%;
}
@media (max-width: 600px) {
    :root {
        --bulletwrapperW: var(--notePadLeftRight);
    }
}

/**references*/
div[style*="width:"] > div[style*="width:"] [data-editor-type="previewer"] .ProseMirror > [data-node-type*="toggle"]{
    left: calc(var(--bulletwrapperW) * .5);
  padding-left: calc(var(--bulletwrapperW) * 1) !important;
}
/*middle brder*/
[data-card-tab-id] > div > .ProseMirror > [data-node-type*="toggle"]:before,
.p-12.hepta-scrim [class*="editor"] > .ProseMirror > [data-node-type*="toggle"]:before,
.bg-background-primary > [style*="width: "] .app-region-drag + div [class*="group/"] .ProseMirror > [data-node-type*="toggle"]:before,
[data-is-whiteboard-panel-container="true"] > .bg-background-secondary[style*="width"]> .bg-background-primary div > .relative.grow.flex.flex-col .mt-3 .ProseMirror > [data-node-type*="toggle"]:before,
[data-is-whiteboard-panel-container]  .ProseMirror > [data-node-type*="toggle"]:before{
    content:"";
    display: block;
    position: absolute;
    width: 1px;
    background: hsla(0,0%,50%,1);
    top: 30px;
    bottom: 0;
    left: calc(var(--bulletwrapperW) * .5 - .5px);
    border-radius: 1px;
    transition: .1s;
  opacity: .0;
    
}

[data-card-tab-id] > div > .ProseMirror > [data-node-type*="toggle"][class*="folded"]:before,
.p-12.hepta-scrim [class*="editor"] > .ProseMirror > [data-node-type*="toggle"][class*="folded"]:before {
    bottom: 50%;
    
}

._hasNestedBlock_mglho_11>._bulletWrapper_mglho_1>div>span>div>._toggleIcon_mglho_4{
  opacity: .5
}


/***********
************
************
************
************
************
FIRST LINE TOGGLE 
************
************
************
************
************
************/
:root {
    --bulletwrapperW: 1.75rem;
}
[data-card-tab-id] > div > .ProseMirror > [data-node-type*="toggle"],
.p-12.hepta-scrim [class*="editor"] > .ProseMirror > [data-node-type*="toggle"],
.bg-background-primary > [style*="width: "] .app-region-drag + div [class*="group/"] .ProseMirror > [data-node-type*="toggle"],
[data-is-whiteboard-panel-container="true"] > .bg-background-secondary[style*="width"]> .bg-background-primary div > .relative.grow.flex.flex-col .mt-3 .ProseMirror > [data-node-type*="toggle"],
[data-is-whiteboard-panel-container]  .ProseMirror > [data-node-type*="toggle"],
div[style*="--annotation-"] + div .ProseMirror > [data-node-type*="toggle"]{
    position: relative;
    padding-left: var(--bulletwrapperW);
    width: calc(100% + var(--bulletwrapperW));
    margin-right: calc(var(--bulletwrapperW) * 0);
    align-self: flex-end;
}
[data-card-tab-id] > div > .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"],
.p-12.hepta-scrim [class*="editor"] > .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"],
.bg-background-primary > [style*="width: "] .app-region-drag + div [class*="group/"] .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"],
[data-is-whiteboard-panel-container="true"] > .bg-background-secondary[style*="width"]> .bg-background-primary div > .relative.grow.flex.flex-col .mt-3 .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"],
[data-is-whiteboard-panel-container]  .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"],
div[style*="--annotation-"] + div .ProseMirror > [data-node-type*="toggle"] > [class*="bullet"]{
    position: absolute;
    left: calc(var(--bulletwrapperW) * 0.0);
    width: var(--bulletwrapperW);
    
}

[data-card-tab-id] > div > .ProseMirror > [data-node-type*="toggle"] > [class*="nestedBlocks"],
.p-12.hepta-scrim [class*="editor"] > .ProseMirror > [data-node-type*="toggle"] > [class*="nestedBlocks"],
.bg-background-primary > [style*="width: "] .app-region-drag + div [class*="group/"] .ProseMirror > [data-node-type*="toggle"] > [class*="nestedBlocks"],
[data-is-whiteboard-panel-container="true"] > .bg-background-secondary[style*="width"]> .bg-background-primary div > .relative.grow.flex.flex-col .mt-3 .ProseMirror > [data-node-type*="toggle"] > [class*="nestedBlocks"],
[data-is-whiteboard-panel-container]  .ProseMirror > [data-node-type*="toggle"] > [class*="nestedBlocks"],
div[style*="--annotation-"] + div .ProseMirror > [data-node-type*="toggle"] > [class*="nestedBlocks"]{
    width: 100%;
}
@media (max-width: 600px) {
    :root {
        --bulletwrapperW: var(--notePadLeftRight);
    }
}

/**references*/
div[style*="width:"] > div[style*="width:"] [data-editor-type="previewer"] .ProseMirror > [data-node-type*="toggle"]{
    left: calc(var(--bulletwrapperW) * .5);
  padding-left: calc(var(--bulletwrapperW) * 1) !important;
}
/*middle brder*/
[data-card-tab-id] > div > .ProseMirror > [data-node-type*="toggle"]:before,
.p-12.hepta-scrim [class*="editor"] > .ProseMirror > [data-node-type*="toggle"]:before,
.bg-background-primary > [style*="width: "] .app-region-drag + div [class*="group/"] .ProseMirror > [data-node-type*="toggle"]:before,
[data-is-whiteboard-panel-container="true"] > .bg-background-secondary[style*="width"]> .bg-background-primary div > .relative.grow.flex.flex-col .mt-3 .ProseMirror > [data-node-type*="toggle"]:before,
[data-is-whiteboard-panel-container]  .ProseMirror > [data-node-type*="toggle"]:before{
    content:"";
    display: block;
    position: absolute;
    width: 1px;
    background: hsla(0,0%,50%,1);
    top: 30px;
    bottom: 0;
    left: calc(var(--bulletwrapperW) * .5 - .5px);
    border-radius: 1px;
    transition: .1s;
  opacity: .0;
    
}

[data-card-tab-id] > div > .ProseMirror > [data-node-type*="toggle"][class*="folded"]:before,
.p-12.hepta-scrim [class*="editor"] > .ProseMirror > [data-node-type*="toggle"][class*="folded"]:before {
    bottom: 50%;
    
}

._hasNestedBlock_mglho_11>._bulletWrapper_mglho_1>div>span>div>._toggleIcon_mglho_4{
  opacity: .5
}



/***********
************
************
************
************
************
! CONTEXT MENUS - ROOT
************
************
************
************
************
************/
:root {
    --mentionmenuBgClr: hsla(0, 0%, 97%, 1);
}

[data-theme="dark"] {
    --mentionmenuBgClr: hsl(207, 4%, 24%);
}


/*****************
******************
! CONTEXT MENUS
******************
******************/
/*****************
******************
BACKSLASH MENU
******************
******************/
.fixed.z-dropdown-menu + .max-h-\[40vh\].w-62.overflow-x-hidden.py-1.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl {}


/*****************
******************
COMMAND + BACKSLASH
******************
******************/
.fixed.z-dropdown-menu + .w-62.overflow-hidden.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl {}


/*****************
******************
MENTION / @ "AT" MENU
******************
******************/
:root {
    --mentionContextMenuItemWrapper-PadLeftRight: 10px;
    --mentionContextMenuItemWrapper-PadTopBtm: 10px;
    /**/
    --mentionContextMenuItem-PadLeft: 7px;
}
#root ~ div .fixed.left-0.top-0.z-dropdown-menu.h-screen.w-screen + .flex[class*="90vh"].max-h-80.overflow-hidden[class*="--scrollbar-width"].fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl {
    width: 600px !important;
    max-width: calc(100vw - 3vw) !important;
    border-radius: 17px !important;
    background: var(--mentionmenuBgClr);
    backdrop-filter: blur(10px);
}


/*****************
MENTION / @ "AT" MENU > LIST
******************/
#root ~ div .fixed.left-0.top-0.z-dropdown-menu.h-screen.w-screen + .flex[class*="90vh"].max-h-80.overflow-hidden[class*="--scrollbar-width"].fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > div:first-child {
    flex: 1;
    padding-left: var(--mentionContextMenuItemWrapper-PadLeftRight) !important;
    padding-right: var(--mentionContextMenuItemWrapper-PadLeftRight) !important;
    padding-top: 0pc !important;
    padding-bottom: var(--mentionContextMenuItemWrapper-PadTopBtm) !important;
}
/*****************
MENTION / @ "AT" MENU > LIST > CONTENT TYPE CONTAINTER
******************/
#root ~ div .fixed.left-0.top-0.z-dropdown-menu.h-screen.w-screen + .flex[class*="90vh"].max-h-80.overflow-hidden[class*="--scrollbar-width"].fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > div:first-child > div {}

/*****************
MENTION / @ "AT" MENU > LIST > CONTENT TYPE LABEL
******************/
#root ~ div .fixed.left-0.top-0.z-dropdown-menu.h-screen.w-screen + .flex[class*="90vh"].max-h-80.overflow-hidden[class*="--scrollbar-width"].fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > div:first-child > div > p.text-label-mini {
    color: var(--bldClr);
    font-weight: 500 !important;
    -webkit-font-smoothing: subpixel-antialiased !important;
    font-size: 0.75rem;
    letter-spacing: 0.4px;
    position: sticky;
    backdrop-filter: blur(40px) !important;
    top: 0px;
    z-index: 10 !important;
    width: calc(100% + var(--mentionContextMenuItemWrapper-PadLeftRight));
    margin-left: calc(var(--mentionContextMenuItemWrapper-PadLeftRight) * -1);
    padding-left: calc(var(--mentionContextMenuItem-PadLeft) + var(--mentionContextMenuItemWrapper-PadLeftRight));
    padding-top: calc(var(--mentionContextMenuItemWrapper-PadTopBtm) + 2px);
    padding-bottom: 8px;
    margin-bottom: 0px;
    margin-top: 0px;
}
/*****************
MENTION / @ "AT" MENU > LIST > ITEMS
******************/
#root ~ div .fixed.left-0.top-0.z-dropdown-menu.h-screen.w-screen + .flex[class*="90vh"].max-h-80.overflow-hidden[class*="--scrollbar-width"].fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > div:first-child > div > div {
    padding-left: var(--mentionContextMenuItem-PadLeft);
    word-break: break-word !important;
    padding-top: .3rem;
    padding-bottom: .3rem;
}
#root ~ div .fixed.left-0.top-0.z-dropdown-menu.h-screen.w-screen + .flex[class*="90vh"].max-h-80.overflow-hidden[class*="--scrollbar-width"].fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > div:first-child > div > div .grow {
    -webkit-font-smoothing: subpixel-antialiased !important;
}
#root ~ div .fixed.left-0.top-0.z-dropdown-menu.h-screen.w-screen + .flex[class*="90vh"].max-h-80.overflow-hidden[class*="--scrollbar-width"].fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > div:first-child > div > div svg {
    margin-top: 1px;
}
/*****************
MENTION / @ "AT" MENU > PREVIEW
******************/
#root ~ div .fixed.left-0.top-0.z-dropdown-menu.h-screen.w-screen + .flex[class*="90vh"].max-h-80.overflow-hidden[class*="--scrollbar-width"].fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > div.rounded-xl {
    width: 230px;
    margin-left: 0px !important;
    margin-right: var(--mentionContextMenuItemWrapper-PadLeftRight) !important;
    margin-top: var(--mentionContextMenuItemWrapper-PadTopBtm) !important;
    margin-bottom: var(--mentionContextMenuItemWrapper-PadTopBtm) !important;
}
@media (max-width: 600px) {
    :root {
        --mentionContextMenuItemWrapper-PadLeftRight: 6px;
        --mentionContextMenuItemWrapper-PadTopBtm: 6px;
    }
    /*preview*/
    #root ~ div .fixed.left-0.top-0.z-dropdown-menu.h-screen.w-screen + .flex[class*="90vh"].max-h-80.overflow-hidden[class*="--scrollbar-width"].fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > div.rounded-xl {
        width: 40%;
    }
}
/*****************
******************
WHITEBOARD - LINK TO WHITEBOARD
******************
******************/
.fixed.z-dropdown-menu + .w-62.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl.appear-done.enter-done {
    overflow-x: visible;
    -webkit-backdrop-filter: unset !important;
    backdrop-filter: unset !important;
    box-shadow: unset;
    background-color: unset!important;
    padding: unset;
}
.fixed.z-dropdown-menu + .w-62.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl.appear-done.enter-done > div {
    min-width: 420px !important;
    max-width: calc(100vw - 3vw) !important;
    --tw-backdrop-blur: blur(40px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    --tw-shadow: var(--shadow-main);
    --tw-shadow-colored: var(--shadow-main);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    background-color: var(--menu-texture-bg-medium);
    overflow-x: hidden;
    border-radius: .25rem;
    padding-top: .25rem;
    padding-bottom: .25rem;
}


/*****************
******************
WHITEBOARD - CONTEXT MENU - THE MAIN ONE
******************
******************/
#root ~ div .fixed.z-dropdown-menu[class*="80vh"][style*="width: 248"] {
    width: 248px !important;
    min-width: unset !important;
    background: var(--menu-texture-bg-medium)!important;
}

/*****************
******************
WHITEBOARD - CONTEXT MENU - CONNECTOR
******************
******************/
#root ~ div .fixed.z-dropdown-menu[class*="80vh"][style*="width: 248"] {
    width: 248px !important;
    min-width: unset !important;
    background: var(--menu-texture-bg-medium)!important;
}

/*****************
******************
WHITEBOARD - CONTEXT MENU - TIDY
******************
******************/
:root {
    --whiteboardTidyAdjustWidth: 100px;
}

#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div {
    position: relative;
}

#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div:after,
#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div:before {
    content: "";
    display: block;
    position: absolute;
    background: transparent;
    top: -150px;
    height: 150px;
    left: -10px;
    right: -10px;
    ;
}

#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div:after {
    top: unset;
    bottom: -150px;
}

#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div > div.box-border:after,
#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div > div.box-border:before {
    content: "";
    display: block;
    position: absolute;
    background: transparent;
  /*˜ top: -150px;*/
    bottom: -150px;
    left: -120px;
    width: 120px;
    z-index: 0;
}

#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div > div.box-border:before {
    left: unset;
    right: -120px;
}


/*****************
******************

TEXT SELECTION MENU
******************
******************/
:root {
    --txtClrMenuBtnBgClr: white;
    --txtClrMenuBtnSVGBgClr:#c1c1c1;
    --txtClrMenuBtnSVGBrdClr: black;
}
[data-theme="dark"] {
    --txtClrMenuBtnBgClr: hsla(207, 5%, 24%, 1.0);
    --txtClrMenuBtnSVGBgClr:#000;
    --txtClrMenuBtnSVGBrdClr: white;
}

/*FIRST MENU*/
[data-is-floating-menu="true"] > div > button:last-child {
    background: var(--txtClrMenuBtnBgClr);
}
[data-is-floating-menu="true"] > div > button:last-child > svg:first-child {
    background: var(--txtClrMenuBtnSVGBgClr);
    box-shadow: 0 0 0 2px var(--txtClrMenuBtnSVGBrdClr) !important;
  filter: brightness(2)
}

/*2ND MENU*/
.z-dropdown-menu[style*="width: 136"] {
  padding-left: 0px;
  padding-right: 0px;
  background: var(--txtClrMenuBtnBgClr);
}
.z-dropdown-menu[style*="width: 136"] > div{
  padding-left: .5rem;
  padding-right: .5rem;
}
/*INFO POPUP*/

.p-12.hepta-scrim > [class*="680"][class*="max-w-120"] {
  width: 700px !important;
  max-width: 100% !important;
  max-height: 100% !important;
  height: 900px;
}
/***********
************
************
************
************
************
! QUICK SWITCHER - ROOT
************
************
************
************
************
************/
:root {
	/*popup*/
	--popupBgClr: white;
	--popupBrdClr: hsl(0, 0%, 10%, 0.1);
	/*search*/
	--searchMatchBg: hsl(215, 100%, 46%, 1);
	--searchBgClr: hsl(0, 0%, 97%);
	--searchBrdClr: hsl(0, 0%, 87%);
	--searchheaderClr: black;
}

[data-theme="dark"] {
	/*popup*/
	--popupBgClr: hsl(214, 8%, 15%);
	--popupBrdClr: hsla(229, 0%, 100%, .08);
	/*search*/
	--searchMatchBg: hsl(211, 100%, 53%);
	--searchBgClr: hsla(0, 0%, 8%, 1.0);
	--searchBrdClr: hsl(218, 3%, 13%);
	--searchheaderClr: hsl(0, 0%, 88%);
}

/*****************
******************
! QUICK SWITCHER
******************
******************/
:root {
	--searchItmPadTopBtm: 5px;
	--searchItmPadLeft: 16px;
	--searchItmLabelHeight: 36px;
	--modalMaxHeight: 88vh;
	--modalWidth: 800px;
	--modalPad: 2rem;
	--searchWidth: 860px;
	--versonHistPad: 30px;
	--versionHistWidth: 1000px;
}

/*POPUP/MODAL > OUTER CONTAINER*/
.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1 {
	display: flex;
	justify-content: center !important;
	align-items: center !important;
	padding: var(--modalPad);
	flex-direction: row;
}

/*POPUP/MODAL > INNER CONTENT CONTAINER*/
body>.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1>.h-full {
	max-height: var(--modalMaxHeight);
	width: var(--modalWidth);
	max-width: 100%;
}

/*SEARCH > OUTER CONTAINER*/
.p-12.hepta-scrim>.h-full.max-h-120.w-full.max-w-170[class*="scrollbar-width"] {
	width: var(--searchWidth);
	max-width: 100%;
	max-height: calc(var(--modalMaxHeight) - 0rem);
}

/*SEARCH > INNER CONTENT CONTAINER*/
.p-12.hepta-scrim>.h-full.max-h-120.w-full.max-w-170[class*="scrollbar-width"]>.hepta-pseudo-overlay {
	background:var(--searchBgClr);
}

/*VERSION HISTORY > OUTER CONTAINER*/
body>.p-15.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1 {
	max-width: 100%;
}

/*VERSION HISTORY > INNER CONTENT CONTAINER*/
body>.p-15.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1>.flex.size-full {
	max-height: var(--modalMaxHeight);
	width: calc(var(--versionHistWidth) - 60px);
	max-width: calc(100% - var(--versonHistPad));
	padding-top: calc(var(--versonHistPad) * .5);
	padding-bottom: calc(var(--versonHistPad) * .5);
}
/*VERSION HISTORY > USERSELECT*/
.hepta-quick-look-body-wrapper .ProseMirror [data-node-type]{
		user-select: all;
		cursor: text;
}

/*VERSION HISTORY > BULLETS AND TOGGLES*/
.hepta-quick-look-body-wrapper .ProseMirror [data-node-type] > [class*="bulletWrapper"],
.hepta-quick-look-body-wrapper .ProseMirror [data-node-type] > [class*="bulletWrapper"] *{
		pointer-events: all;
}

body>.p-15.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1>.flex.size-full>.hepta-pseudo-overlay {
	display: flex;
	justify-content: center !important;
	align-items: center !important;
}


/*SEARCH > INPUT*/
body>.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1>div.h-full.max-h-120.w-full.max-w-170>.hepta-pseudo-olay>div>.flex.items-center.p-4.text-body.text-primary {
	background: var(--searchBgClr) !important;
	box-shadow: inset 0 0px 0 1px var(--searchBrdClr);
	position: relative;
	padding-left: var(--searchItmPadLeft);
}

/*SEARCH > RESULTS*/

.p-12.hepta-scrim.no-print.cursor-pointer.items-center > .h-full.w-full[class*="680"][class*="1000"] > .hepta-pseudo-overlay > .flex > [class*="546"]{
	padding-top: 0px;
	padding-right: 0px !important;
}

/*SEARCH > Preview*/
.p-12.hepta-scrim.no-print.cursor-pointer.items-center > .h-full.w-full[class*="680"][class*="1000"]  > .hepta-pseudo-overlay > .flex > [class*="546"]>div:last-child {
	width: 43%;
	max-height: calc(var(--modalMaxHeight) - 85px);
	margin-right:12px !important;
}

.p-12.hepta-scrim.no-print.cursor-pointer.items-center > .h-full.w-full[class*="680"][class*="1000"] > .hepta-pseudo-overlay > .flex > [class*="546"]>div:last-child>div>[class*="scale-70"] {
	transform: scale(.8) !important;
	width: calc(100% / 0.8);
}

@media (max-width:900px) {
	:root {
		--modalPad: 1.0rem;
		--modalMaxHeight: 95vh;
	}

	/*body > .hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1{
		padding:1.5rem;
	}*/
	body>.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1>div.h-full.max-h-120.w-full.max-w-170>.hepta-pseudo-overlay>.overflow-hidden>[class*="374"] {
		flex-direction: column;
		padding-right: 0px;
		align-items: flex-start;
		justify-content: flex-start;
		min-height: 600px;
	}

	body>.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1>div.h-full.max-h-120.w-full.max-w-170>.hepta-pseudo-overlay>.overflow-hidden>[class*="374"]>.grow {
		padding-right: 0px !important;
		width: 100%;
		overflow-y: auto;
		flex: 1;
		min-height: 300px !important;
	}

	body>.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1>div.h-full.max-h-120.w-full.max-w-170>.hepta-pseudo-overlay>.overflow-hidden>[class*="374"]>.bg-background-secondary {
		width: calc(100% - 20px);
		margin: 0 auto;
		min-height: 190px !important;
		max-height: 191px !important;
		margin-bottom: 10px !important;
	}

	body>.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1>div.h-full.max-h-120.w-full.max-w-170>.hepta-pseudo-overlay>.overflow-hidden>[class*="374"] {
		min-height: 84vh !important;
	}
}

/*SEARCH > RESULTS > ITEM TYPE > CONTAINER > LABEL*/
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label:first-of-type {
	margin-top: 1px;
}

body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label {
	display: flex;
	flex-direction: column;
	z-index: -1
}
/***
SEARCH CONTAINER
****/

.hepta-pseudo-overlay.bg-menu-texture-bg-hard-new {
	background: var(--searchBgClr)
}
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3{
	padding-top: 0px !important;
	padding-bottom: 40px !important;
}
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini {
	position: sticky;
	height:28px !important;
	top: 0;
	color: var(--searchheaderClr) !important;
	font-size: 0.925rem;
	box-shadow: 0 .5px 0 0 var(--searchBrdClr);
	background: var(--searchBgClr) !important;
	backdrop-filter: blur(40px) !important;
	opacity: 1;
	margin-bottom: var(--searchItmPadTopBtm);
	padding-top: var(--searchItmPadTopBtm);
	padding-bottom: var(--searchItmPadTopBtm);
	height: calc(var(--searchItmLabelHeight)* 1);
	display: flex;
	align-items: center;
	justify-content: flex-start;
	z-index: 10;
	padding-left: var(--searchItmPadLeft);
	margin-left: 1px;
}

/*SEARCH > RESULTS > ITEM TYPE > CONTAINER > ITEMS*/
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~div.flex,
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~div>.text-label,
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~div>.text-label~.flex {
	padding-top: var(--searchItmPadTopBtm);
	padding-bottom: var(--searchItmPadTopBtm);
}

/*PARENT FILE *****/
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~.text-label.text-middle-grey,
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~div>.text-label.text-middle-grey {
	position: sticky;
	top: var(--searchItmLabelHeight);
	box-shadow: inset 0 -1px 0 0 var(--searchBrdClr);
	background: var(--searchBgClr) !important;
	margin-right: 0px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: .775rem;
	font-weight:500;
	-webkit-font-smoothing: antialiased;
	line-height: 1.4;
	color: var(--text-color);
	margin-bottom: calc(var(--searchItmPadTopBtm) * 1);
	margin-top: calc(var(--searchItmPadTopBtm) * .5);
	padding-top: calc(var(--searchItmPadTopBtm)*0);
	padding-bottom: calc(var(--searchItmPadTopBtm)*0);
	margin-left: 0px;
	padding-left: var(--searchItmPadLeft);
	height: calc(var(--searchItmLabelHeight)* 1.25);
	color: var(--searchheaderClr) !important;
}

/*INNER TEXT - CONTAINER*/
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~.text-label.text-middle-grey>.flex {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

/*INNER TEXT - CONTAINER > TITLE*/
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~.text-label.text-middle-grey>.flex .truncate {
	flex: 1;
	overflow: hidden;
	text-overflow: ellipsis;
	color: var(--bldClr);
	opacity: 1 !important;
	max-height: calc(var(--searchItmLabelHeight)* 1);
	display: -webkit-box !important;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

/*INNER TEXT - CONTAINER > TITLE & MATCH COUNT*/
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~.text-label.text-middle-grey>.flex .truncate,
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~.text-label.text-middle-grey>.flex .ml-1 {
	display: flex;
	padding-top: 0px;
	line-height: 1.24;
}

body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~div>.text-label svg,
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~div>.text-label~.flex svg {
	opacity: 1;
	margin-right: 6px;
	width: 16px;
	height: 16px;
	padding: 0px;
	fill: var(--middle-grey);
}

/*PARENT FILE > BLOCKS INSIDE*/
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~div>.text-label>span.ml-1 {}

body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>div>.text-label {
	align-items: flex-start
}

/*PARENT FILE > CHILD BLOCKS INSIDE PARENT*/
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~.text-label.text-middle-grey~.cursor-pointer,
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~div>.text-label.text-middle-grey~.cursor-pointer {
	margin-left: calc(var(--searchItmPadLeft) * 2.4);
	padding-left: var(--searchItmPadTopBtm);
	margin-right: .5rem;
}

body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~.text-label.text-middle-grey~.cursor-pointer>svg,
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~div>.text-label.text-middle-grey~.cursor-pointer>svg {
	margin-right: 2px;
	width: 20px;
	opacity: .6;
	transform: scale(0.9);
	z-index: -1;
}

/*PARENT FILE > CHILD BLOCKS > HOVER*/
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~div>.text-label~.flex.bg-light-grey {
	border-radius: 6px !important;
	box-shadow: 0 1px 0 0 transparent;
}

body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~div>.text-label~.flex svg {
	margin-top: 3px;
}

body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~div>.text-label~.flex {
	font-size: .85rem;
	-webkit-font-smoothing: antialiased;
}

.p-12.hepta-scrim.no-print.cursor-pointer.items-center > .h-full.w-full[class*="680"][class*="1000"] [data-chat-message-id],
.p-12.hepta-scrim.no-print.cursor-pointer.items-center > .h-full.w-full[class*="680"][class*="1000"] [data-chat-message-id] > div,
.p-12.hepta-scrim.no-print.cursor-pointer.items-center > .h-full.w-full[class*="680"][class*="1000"] [data-chat-message-id] > .relative > .h-8{
	padding-left: 0px !important;
	margin-left: 0px !important;
	padding-top: 0px !important;
}

/*STICKY HEADER > CHAT ICON COLOR*/
body>.hepta-scrim.cursor-pointer.items-center .grow.overflow-y-auto.py-3>.text-label>.text-label-mini~.text-label.text-middle-grey>.flex svg path[d*="1.8183-5.0735"] {
	fill:hsl(300, 100%, 75%) !important
}

/*STICKY HEADER > IMAGE ICON COLOR*/
.hepta-pseudo-overlay .flex svg path[d*="10155.0423"]{
	fill:hsla(5, 53%, 64%, 1) !important 
}


/*STICKY HEADER > HIGHLIGHT ICON COLOR*/
.hepta-pseudo-overlay .flex svg path[d*="2.5775z"],
.hepta-pseudo-overlay .flex svg path[d*="2.5775z"] ~ path{
	fill:hsla(51, 60%, 61%, .9) !important 
}
/*STICKY HEADER > WHITEBOARD ICON COLOR*/
.hepta-pseudo-overlay .flex svg path[d*="1.33-4-1.33v"]{
	fill:hsla(174, 48%, 46%, 1.0) !important 
}

/*STICKY HEADER > WHITEBOARD >  SECTION ICON COLOR*/
.hepta-pseudo-overlay .flex svg path[d*="2.12132z"],
.hepta-pseudo-overlay .flex svg path[d*="2.12132z"] ~ path{
	fill:hsla(174, 48%, 46%, 1.0) !important 
}
/*STICKY HEADER > WHITEBOARD >  MIND MAP ICON COLOR*/
.hepta-pseudo-overlay .flex svg path[d*="M6.632"]{
	fill:hsla(174, 48%, 46%, 1.0) !important;
}


.hepta-pseudo-overlay>div>.flex.text-middle-hard-grey {
	position: sticky;
	bottom: 0;
	backdrop-filter: blur(10px);
}

.hepta-pseudo-overlay .text-label .truncate {
	overflow: normal !important;
	text-overflow: normal !important;
	white-space: normal;
}

/*POPUP NOTE*/
#root~.p-12.hepta-scrim {
	padding-top: 2rem;
	padding-bottom: 2rem;
}
#root~.p-12.hepta-scrim > [class*="max-h-220"] {
	max-height: 1000px;
}
/*IMAGE Modal / Info popup > File Name

.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1 .w-full.h-full .grow.overflow-y-auto.overflow-x-hidden .absolute.cursor-ew-resize + .w-full.h-full > img[data-hepta-media-name*=".png"],
.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1 .w-full.h-full .grow.overflow-y-auto.overflow-x-hidden .w-full.h-full > img[data-hepta-media-name*=".jpeg"],
.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1 .w-full.h-full .grow.overflow-y-auto.overflow-x-hidden .w-full.h-full > img[data-hepta-media-name*=".jpg"]{
 object-fit: unset;
	height: unset;
	width: unset;
	max-width: 100%;
	margin: 0 auto;
} */
/*****************
******************
FLOATING INFO
******************
******************/
.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1>[class*="680px"][class*="w-120"] {
	max-height: 90vh;
	width: 600px;
	max-width: 100%;
}

/*****************
FLOATING INFO > TITLE
******************/
.hepta-pseudo-overlay .absolute.top-0.text-body.text-primary.rounded-t {
	position: relative;
}

.hepta-pseudo-overlay .absolute.top-0.text-body.text-primary.rounded-t,
.hepta-pseudo-overlay .absolute.top-0.text-body.text-primary.rounded-t>div.flex,
.hepta-pseudo-overlay .absolute.top-0.text-body.text-primary.rounded-t p.truncate {
	min-width: 100% !important;
	width: 100% !important;
}
/*
#root~.p-12.hepta-scrim>.w-full>.flex.w-full>.flex,
#root~.p-12.hepta-scrim>.w-full>.flex.w-full>.flex>.flex:first-child,
#root~.p-12.hepta-scrim>.w-full>.flex.w-full>.flex>.flex>.text-label {
	width: 100% !important;
	border: 1px solid red;
}*/
#root~.p-12.hepta-scrim>.w-full>.flex.w-full>.flex>.flex>.text-label {
max-width: 80%
}

#root~.p-12.hepta-scrim>.w-full>.flex.w-full>.flex>.flex + .relative.flex{
		position: absolute;
		right: 0px !important;
		padding-right: 10px;
		background:linear-gradient(to right, transparent 0%, var(--background-secondary) 15%, var(--background-secondary) 100%);
		padding-left: 10px;
}
/*****************
FLOATING INFO > PROPERTIES
******************/
.hepta-pseudo-overlay .absolute.top-0.text-body.text-primary.rounded-t+div {
	margin-top: 0px;
}

/*PROPERTIES CONTAINER*/
.hepta-scrim>[class*="680px"]>[class*="pseudo"]>.absolute+div>div>div {}

/*PROPERTIES*/
.hepta-scrim>[class*="680px"]>[class*="pseudo"]>.absolute+div>div>div>div.my-1.flex.flex-col.gap-y-1 {
	order: 1;
}


/*****************
******************
DROPDOWN BACKSLASH
******************
******************/
#root~div>.fixed.z-dropdown-menu+[class*="40vh"] {
	display: flex;
	flex-direction: column-reverse;
}

/*****************
******************
POPUP - IMAGE
******************
******************/

/*****************
******************
POPUP - IMAGE CARD
******************
******************/

/*****************
******************
POPUP - NOTE
******************
******************/
body > .hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1 > .h-full[class*="270"] {
		width: 1000px;
}
#root ~ .p-12.hepta-scrim.cursor-pointer.items-center._scrim_1gpqn_1 > .h-full[class*="270"] > div.flex > .min-h-12{
		width: unset !important;
}


/*******
ROOT
********/
/**/
#root .grid.select-none > div,
#root .grid.select-none .ProseMirror,
#root .grid.select-none .ProseMirror > *,
#root .grid.select-none .ProseMirror > * > *,
#root .grid.select-none .ProseMirror > * > * > *,
#root .grid.select-none .ProseMirror > * > * > * > *{

  box-shadow: inset 0 0 0 var(--crdLibTstBrdW) red;
}



:root {
  --crdLibTstBrdW:0px;
}

/*****************
******************
******************
******************
******************
******************
! VIEW - CARD LIBRARY
******************
******************
******************
******************
******************
******************/
:root {
  /**/
  --cardlibtoolbarTagPad: 3px;
  --cardlibtoolbarPadLeftRight: var(--cardlibGridPadLeftRight);
  --cardlibtoolbarWidth: 1200px;
  /**/
  --cardlibGridGap: 0px;
  --cardlibGridPadLeftRight: 24px;
  /**/
  --cardlibCardWidth: 700px;
  --cardlibCardPadLeftRight: 20px;
  --cardlibCardPadTopBtm: 12px;
  /**/
  --cardlibCardBrdWidth: 0px;
  --cardlibCardBrdBottomWidth: 1px;
  --cardlibCardBrdRad: 0px;
  /**/
  --cardlibHighlightPadTopBtm: 10px;
  --cardlibHighlightTopPad: 5px;
  /**/
  --cardlibJournalGap: 8px;
  --cardTitleMargBtm: 18px;
  --cardTitlePadTopBtm: 5px;
  /*images and pdfs*/
  --cardlibImageHeight: 300px;
  --cardlibBrdClr: hsla(0, 0%, 50%, .2);
  /**/
  --cardlibContentMaxHeight: 460px;
}

/*****************
CARD LIBRARY - VARIABLES 
******************/
#root .grid.select-none,
#root ._rightSidebar_1fabk_5 .grid {

  --cardlibFontSize: 18px;
  --cardlibLineHeight: 1.45;
  --fontsmoothing: antialiased;
  --cardlibFontWeight: 400;
  --headingFontWeight: var(--bodyFontWeight);
  /*heading line heights*/
  --H1lineHeight: 1.4;
  --HeaderLineHeight: 1.4;

  /**************************/
  /**************************/
  /**CARD LIBRARY OVERRIDES**/
  /**************************/
  /**************************/
  --cardlibHeadingTextSize: calc(var(--bodyFontSize) + 0px);
  --cardlibHeadingMargTop: var(--listMargTopBtm);
  --cardlibToggleBulletMargTop: 8px;
  --cardlibHeadingToggleBulletMargTop: var(--cardlibToggleBulletMargTop);
}

[data-theme="dark"]{
  --background-primary-cardLib:hsla(0, 0%, 11%, 1.0);
}

.grid.select-none [data-node-type="numbered_list_item"],
._rightSidebar_1fabk_5 .grid [data-node-type="numbered_list_item"] {
  --listBulletMargTop: 4px;
}

#root .grid.select-none .ProseMirror {
  white-space: normal;
  max-height: var(--cardlibContentMaxHeight);
}
#root .grid.select-none .ProseMirror > *:first-child {
  margin-top: 0px !important;
}
#root .grid.select-none .ProseMirror [data-node-type="heading"],
#root .grid.select-none .ProseMirror [data-node-type]:not([data-node-type="table"], [data-node-type="table"] *) {
  font-size: var(--cardlibFontSize);
  line-height: var(--cardlibLineHeight);
  font-weight: var(--cardlibFontWeight);
}



/*headings - in highlights*/
#root .grid.select-none > div .ProseMirror [data-node-type="heading"],
#root .grid.select-none > div .ProseMirror [data-node-type="heading"] * {
  font-weight: var(--cardlibFontWeight) !important;
  --cardlibFontSize: 20px;
  --cardlibFontWeight: 600;
  -webkit-font-smoothing: subpixel-antialiased;
}
#root .grid.select-none > div .ProseMirror [data-node-type="heading"] a[href*="heptabase.com"]{
  --text-color:var(--internalLinkClr);
--underlineH:1.5px;
}
/*headings - Normal cards*/
#root .grid.select-none > div.px-5 .ProseMirror [data-node-type="heading"] {
  --cardlibFontSize: inherit;
}
#root .grid.select-none > div .ProseMirror [data-node-type="heading"] * {
  --text-color: var(--headingClr);
}


#root .grid.select-none .ProseMirror [data-node-type] em {
  font-style: normal !important;
}
/*links*/
#root .grid.select-none .ProseMirror a,
#root .grid.select-none .ProseMirror span > span.text-active {
  color: var(--text-color);
  text-decoration-color: var(--text-color) !important;
  border-bottom-color: hsla(0, 0%, 50%, .5);
  font-weight: 400!important;
  pointer-events: all !important;
  border-radius: 3px;
  transition: .1s;
}
#root .grid.select-none .ProseMirror a:hover,
#root .grid.select-none .ProseMirror span > span.text-active:hover {
  background: hsla(0, 0%, 50%, .2);
  --text-color: var(--active-item);
}
#root .grid.select-none .ProseMirror a[data-hepta-link] {}
/*link underlines*/
#root .grid.select-none .ProseMirror a,
#root .grid.select-none .ProseMirror span.rounded-sm.text-active.cursor-pointer {
  border: none !important;
  pointer-events: all !important;
  user-select: all !important;
  z-index: 94949494;
}
#root .grid.select-none .ProseMirror span > span.text-active .border-b-solid {
  pointer-events: all !important;
  user-select: all !important;
  z-index: 94949494;
}
#root .grid.select-none .ProseMirror a:not([data-hepta-link]) {
  --linkUnderlineClr: var(--text-color) !important;
}
/*
#root .grid.select-none .ProseMirror span[data-color]:not(a [data-color]){
    color: var(--text-color) !important;
}*/
#root .grid.select-none .ProseMirror [data-node-type] strong {
  color: var(--text-color) !important;
  font-weight: 400;
}
#root .grid.select-none .ProseMirror [data-node-type="heading"] strong {
  color: var(--headingClr) !important;
  font-weight: 400;
}


/*****************
CARD LIBRARY ONLY 
******************/
/*outer wrapper*/
#root > .z-10.h-screen > .relative.flex.grow.overflow-hidden {
  display: flex;
}
#root > .z-10.h-screen > .relative.flex.grow.overflow-hidden > .relative.flex.grow {
  width: 100% !important;
}


/*****************
CARD LIBRARY ONLY - GRID
******************/
#root > .z-10.h-screen > .relative.flex.grow.overflow-hidden > .relative.flex.grow.flex-col > .z-10 + .scrollbar-gutter-stable {
  width: 100% !important;
  padding: 0px !important;
  max-width: 100% !important;
}

/*****************
CARD LIBRARY - GRID WRAPPER
******************/
.grid.select-none,
._rightSidebar_1fabk_5 .grid {
  padding: 0px;
  box-sizing: border-box;
  padding: 0px;
  grid-template-rows: unset;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  margin-top: 20px;
  row-gap: var(--cardlibGridGap) !important;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
}
/*****************
CARD LIBRARY - GRID WRAPPER - IN CARD LIBRARY
******************/
.grid.select-none {
  padding: 0px;
  box-sizing: border-box;
  padding: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

/*****************
CARD LIBRARY - GRID WRAPPER - IN RIGHT SIDEBAR
******************/
._rightSidebar_1fabk_5 .grid {
  padding-left: var(--cardlibGridPadLeftRight) !important;
  padding-right: var(--cardlibGridPadLeftRight) !important;
}
/*****************
CARD LIBRARY - CARD WRAPPER
******************/
/*CARD LIBRARY - card wrapper*/
.grid.select-none > div {
  transition: .15s;
  min-height: unset !important;
  height: unset !important;
  background: var(--cardlibCardBgClr) !important;
  border: var(--cardlibCardBrdWidth) solid var(--cardlibBrdClr) !important;
  border-bottom: 0px solid var(--cardlibBrdClr) !important;
  width:100% !important;
  max-width:  var(--cardlibCardWidth) !important;
  margin: 0 auto;
  padding: 0px !important;
  border-radius: var(--cardlibCardBrdRad);
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0px !important;
  padding-right: 0px !important;
  position: relative;
  box-sizing: border-box;
  overflow: visible;
  padding-bottom: var(--cardlibCardPadTopBtm) !important;
  padding-top: var(--cardlibCardPadTopBtm) !important;
  outline: var(--crdLibTstBrdW) solid green !important;
}

#root .grid.select-none .ProseMirror{
    padding-left: var(--cardlibCardPadLeftRight) !important;
  padding-right: var(--cardlibCardPadLeftRight) !important;
}
.grid.select-none > div > div > [data-editor-type] > .ProseMirror{

  position: relative;
  overflow: hidden;
}
:root {
  --cardLibCardBrdH:2px;
}
.grid.select-none > div > div > [data-editor-type]{
  position: relative;
}

.grid.select-none > div:before{
  content: "";
  display: block;
  z-index: 9595;
  position: absolute;
  bottom: calc(var(--cardLibCardBrdH) * -1);
  left: calc(var(--cardlibCardPadLeftRight) * 0);
  right: calc(var(--cardlibCardPadLeftRight) * 0);
  height: var(--cardLibCardBrdH);
  background: var(--cardlibBrdClr);
}
.grid.select-none > div:after {
  content: "";
  display: block;
  position: absolute;
  left: calc(var(--cardlibCardPadLeftRight) * 0);
  right: calc(var(--cardlibCardPadLeftRight) * 0);
  height: calc(var(--cardlibCardPadTopBtm) * 2);
  background: var(--background-primary-cardLib);
  bottom: calc(var(--cardlibCardPadTopBtm) * -1);
  z-index: 9594;
}
.grid.select-none > div[style*="--active-item"]{
  --cardlibBrdClr:var(--active-item);
}

/*CARD LIBRARY - CARD WRAPPER > HOVER*/
.grid.select-none > div:hover,
/*RIGHT SIDEBAR - CARD WRAPPER > HOVER*/
._rightSidebar_1fabk_5 .grid > div:hover {
  background: var(--cardlibCardBgClr-Hover) !important;
}

/*CARD LIBRARY ONLY - CARD WRAPPER*/
.grid.select-none > div {
  --cardlibCardBgClr: transparent;
}
/*CARD LIBRARY ONLY - CARD WRAPPER > HOVER*/

/*****************
CARD LIBRARY - CARD
******************/
/*CARD LIBRARY > CARD WRAPPER*/
.grid.select-none > div > div,
._rightSidebar_1fabk_5 .grid > div > div {
  transform: unset !important;
  padding-top: 0px !important;
  width: 100% !important;
  max-width: 100%;
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-bottom: 0px !important;
  padding-top: 0px !important;
}
.grid.select-none > div [data-node-type*="_list_item"],
._rightSidebar_1fabk_5 .grid > div [data-node-type*="_list_item"],
#root .grid.select-none > div a,
#root ._rightSidebar_1fabk_5 .grid > div a {
  pointer-events: all !important;
  z-index: 95959595;
}

/*****************
CARD LIBRARY - CARD - WRAPPER
******************/
/*NORMAL CARD*/
.grid.select-none > div > div > [data-is-editor-container],
._rightSidebar_1fabk_5 .grid > div > div > [data-is-editor-container] {
  background: transparent !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-bottom: 0px !important;
  padding-top: 0px !important;
}

/*****************
CARD LIBRARY - CARD - WRAPPER > PROSEMIRROR
******************/
/*NORMAL CARD*/
.grid.select-none > div > div > [data-is-editor-container] > .ProseMirror,
._rightSidebar_1fabk_5 .grid > div > div > [data-is-editor-container] > .ProseMirror {
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-bottom: 0px !important;
  padding-top: 0px !important;
}

/*****************
CARD LIBRARY - CARD > FIRST BLOCK
******************/
.grid.select-none > div > div > [data-is-editor-container] > .ProseMirror > [data-node-type],
._rightSidebar_1fabk_5 .grid > div > div > [data-is-editor-container] > .ProseMirror > [data-node-type],
/*card library - journal*/
.grid.select-none > div > div.pt-3 + div > [data-is-editor-container] > .ProseMirror > [data-node-type]:first-child,
/*right sidebar - journal*/
._rightSidebar_1fabk_5 .grid > div > div.pt-3 + div > [data-is-editor-container] > .ProseMirror > [data-node-type]:first-child {
  display: none;
}
#root .grid.select-none > div > div > [data-is-editor-container] > .ProseMirror > [data-node-type]:first-child,
#root ._rightSidebar_1fabk_5 .grid > div > div > [data-is-editor-container] > .ProseMirror > [data-node-type]:first-child,
/*card library - journal*/
#root .grid.select-none > div > div.pt-3 + div > [data-is-editor-container] > .ProseMirror > [data-node-type]:first-child,
/*right sidebar - journal*/
#root ._rightSidebar_1fabk_5 .grid > div > div.pt-3 + div > [data-is-editor-container] > .ProseMirror > [data-node-type]:first-child {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  display: block !important;
}

#root .grid.select-none > div > div > [data-is-editor-container] > .ProseMirror > [data-node-type*="list_item"]:first-child,
#root ._rightSidebar_1fabk_5 .grid > div > div > [data-is-editor-container] > .ProseMirror > [data-node-type*="list_item"]:first-child,
/*card library - journal*/
#root .grid.select-none > div > div.pt-3 + div > [data-is-editor-container] > .ProseMirror > [data-node-type*="list_item"]:first-child,
/*right sidebar - journal*/
#root ._rightSidebar_1fabk_5 .grid > div > div.pt-3 + div > [data-is-editor-container] > .ProseMirror > [data-node-type*="list_item"]:first-child {
  display: flex !important;
}

/*****************
CARD LIBRARY - TODO / CHECKBOX
******************/
#root .grid.select-none > div > div > [data-is-editor-container] > .ProseMirror > [data-node-type="todo_list_item"]:first-child > [class*="_bulletWrapper"] [class*="checkboxIcon"] {
  --checkboxBoxPositionLeft: -6px;
  --checkboxBoxScale: 1.2;
}
/*CARD LIBRARY - HIDE ALL CHILDREN EXCEPT FIRST*/
#root .grid.select-none > div > div > [data-is-editor-container] > .ProseMirror > [data-node-type="todo_list_item"]:first-child > [class*="nestedBlocks"] > [data-node-type] {
  display: none;
}
#root .grid.select-none > div > div > [data-is-editor-container] > .ProseMirror > [data-node-type="todo_list_item"]:first-child > [class*="nestedBlocks"] > [data-node-type="paragraph"] {
  display: block;
}



/*****************
CARD LIBRARY - HIGHLIGHT
******************/
/*CARD LIBRARY - HIGHLIGHT - WRAPPER*/
.grid.select-none > div > div.pt-6,
._rightSidebar_1fabk_5 .grid > div > div.pt-6 {
  background: var(--hlightWrapperBgClr);
  border-radius: 5px;
  box-sizing: border-box;
  background: transparent;
  position: relative;
}
.grid.select-none > div > div.pt-6 > div > div,
._rightSidebar_1fabk_5 .grid > div > div.pt-6 > div > div {
  position: relative;
}
.grid.select-none > div [style*="--annotation"] + div,
._rightSidebar_1fabk_5 .grid [style*="--annotation"] + div {
  background: transparent;
  /*overflow-x: unset;*/
}

/*CARD LIBRARY - HIGHLIGHT > BORDER*/
#root .grid.select-none > div [style*="--annotation"],
#root ._rightSidebar_1fabk_5 .grid > div > div.pt-6 > .flex > [style*="--annotation"] {
  left: calc(var(--annotatePadLR) * 0) !important;
}
/*CARD LIBRARY - HIGHLIGHT > ACTUAL HIGHLIGHT*/
.grid.select-none > div > div.pt-6 > .flex,
._rightSidebar_1fabk_5 .grid > div > div.pt-6 > .flex {
  position: relative;
  display: flex !important;
  flex-direction: row !important;
  margin-top: var(--cardlibHighlightTopPad)
}
/*CARD LIBRARY - HIGHLIGHT > ACTUAL HIGHLIGHT > INNER*/
.grid.select-none > div > div.pt-6 > .flex > div[class*="&_.ProseMirror"],
._rightSidebar_1fabk_5 .grid > div > div.pt-6 > .flex > div[class*="&_.ProseMirror"] {
  margin: 0px;
  box-shadow: inset 0 0 0 1px var(--hlightedTxtBrdClr);
  border-radius: 6px;
  background: transparent !important;
  box-shadow: none;
}
/*CARD LIBRARY - HIGHLIGHT > ACTUAL HIGHLIGHT NOTE - Wrapper*/
.grid.select-none > div > div.pt-6 > div[class*="&_.ProseMirror"],
._rightSidebar_1fabk_5 .grid > div > div.pt-6 > div[class*="&_.ProseMirror"] {

  padding-top: 0px!important;
  padding-bottom: 0px!important;
}
/*CARD LIBRARY - HIGHLIGHT > ACTUAL HIGHLIGHT NOTE*/
.grid.select-none > div > div.pt-6 > div[class*="&_.ProseMirror"] > div > .ProseMirror,
._rightSidebar_1fabk_5 .grid > div > div.pt-6 > div[class*="&_.ProseMirror"] > div > .ProseMirror {

  padding-top: var(--cardlibHighlightPadTopBtm)!important;
  padding-bottom: var(--cardlibHighlightPadTopBtm)!important;
}

/*****************
CARD LIBRARY - JOURNAL 
******************/
.grid.select-none > div > div.pt-3,
._rightSidebar_1fabk_5 .grid > div > div.pt-3 {
  margin: 0px !important;

  margin-bottom: calc(var(--cardlibJournalGap) * 2) !important;
}
.grid.select-none > div > div.pt-3 > div,
._rightSidebar_1fabk_5 .grid > div > div.pt-3 > div {
  gap: calc(var(--cardlibJournalGap) * .5);
  display: flex;
  flex-direction: column;
}


/*JOURNAL > Day text*/
.grid.select-none > div > div.pt-3 .text-label,
._rightSidebar_1fabk_5 .grid > div > div.pt-3 .text-label {

  margin-bottom: 0px;
}
/*JOURNAL > DATE*/
.grid.select-none > div > div.pt-3 .text-primary,
._rightSidebar_1fabk_5 .grid > div > div.pt-3 > .text-primary {
  font-size: var(--bodyFontSize) !important;
}

.grid.select-none > div > div.pt-3 .text-h1 {
  font-size: var(--cardlibFontSize) !important;
  line-height: var(--cardlibLineHeight);
}


/*JOURNAL > NOTE*/
.grid.select-none > div > div.pt-3 + div,
._rightSidebar_1fabk_5 .grid > div > div.pt-3 + div {
  padding: 0px !important;
  margin: 0px !important;
}
/*****************
CARD LIBRARY - EMBEDS 
******************/
.grid.select-none > div .ProseMirror [data-node-type="embed"] {
  --headingFontWeight: 600;
}

/*****************
CARD LIBRARY - PDFS IMAGES AND VIDEO
******************/
.grid.select-none > div > img,
.grid.select-none > div img[data-hepta-media-name*=".svg"],
.grid.select-none > div img:not([class*="sep"]),
.grid.select-none > div > .pointer-events-none > video,
.grid.select-none > div > div.relative.size-full {
  max-height: var(--cardlibImageHeight);
  position: relative;
  overflow: hidden !important;
  box-shadow: 0 0 0 1px var(--cardlibBrdClr) !important;
  object-fit: cover;
  object-position: top;
  transition: .2s;
  min-height: 40px;
}
.grid.select-none > div > div.relative.size-full{
  border-radius: 4px
}

.grid.select-none > div .ProseMirror code {

  border-radius: 4px !important;
  --inlineCodeBoxShadClr: transparent !important;
}
.grid.select-none > div > [style*="aspect-ratio"] {
  aspect-ratio: unset !important;
}
.grid.select-none > div > div.relative.size-full > .absolute:first-child {
  position: relative;
  height: 200px !important;
  top: unset !important;
  left: unset !important;
}

#root .grid.select-none > div > div.relative.size-full > .absolute img {
  top: 43% !important;
  bottom: unset !important;
  margin: unset !important;
  position: relative !important;
}
.grid.select-none > div > div.relative.size-full > .absolute > .absolute {
  bottom: 0 !important;
  height: unset !important;
  
  filter: 
    var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) saturate(2)
}

/*****************
CARD LIBRARY - AUDIO IMG
******************/
#root .grid.select-none > div img.object-cover.border{
  border: 1px solid red;
  box-shadow: unset !important;
  width: 140px;
}
/*****************
CARD LIBRARY - PDFS IMG
******************/
#root .grid.select-none > div img.pointer-events-none.max-w-full.size-full.object-cover.object-top{

}


.grid.select-none > div:hover > img,
.grid.select-none > div:hover img[data-hepta-media-name*=".svg"],
.grid.select-none > div:hover img,
.grid.select-none > div:hover > .pointer-events-none > video,
.grid.select-none > div:hover > div.relative.size-full {
  --cardlibImageHeight: 900px;
  transition-delay: 1s;
}



.grid.select-none > div > img + div {
  z-index: 2
}
.grid.select-none > div > img + div:before {
  display: block;
  content: "";
  position: absolute;
  bottom: calc(var(--cardlibCardPadTopBtm) * -1);
  left: 0;
  right: 0;
  height: calc(var(--cardlibImageHeight) * 0.25);
  background: linear-gradient(to bottom, transparent 0%, var(--background-primary) 80%, var(--background-primary) 100%);
  z-index: -1
}
#root .grid.select-none > div img {}

/*****************
CARD LIBRARY - PDFS IMAGES AND VIDEO - FILE NAME
******************/
.grid.select-none > div > img + div > div,
.grid.select-none > div > .pointer-events-none + div > div {
  margin-left: calc(var(--cardlibCardPadLeftRight) + 5px) !important;
  margin-right: calc(var(--cardlibCardPadLeftRight) + 5px) !important;
  margin-bottom: 5px;
  background: hsla(0, 0%, 10%, 0.4);
  backdrop-filter: blur(10px);
}

.grid.select-none > div > div.relative.size-full > .absolute.size-full:first-child {}

/*****************
CARD LIBRARY - COUNTER 
******************/
#root > .z-10.h-screen > .relative.flex.grow.overflow-hidden > .relative.flex.grow.flex-col > .z-10 + div + div.text-label {
  display: flex;
  align-items: sp;
  justify-content: center;
  gap: 20px;
  background: transparent;
}
#root > .z-10.h-screen > .relative.flex.grow.overflow-hidden > .relative.flex.grow.flex-col > .z-10 + div + div.text-label > span {
  text-align: left;
  display: flex;
}

#root .grid.select-none > div > div > [data-is-editor-container] > .ProseMirror [class*="toggleHeading"] > [class*="bulletWrapper"] .unselectable,
#root .grid.select-none > div > div > [data-is-editor-container] > .ProseMirror [class*="list"] [class*="bulletWrapper"].unselectable {
  height: 32px !important;
}

/*
#root .grid.select-none > div > div > [data-is-editor-container] > .ProseMirror > [data-node-type]:first-child * ~ * {
  opacity: .4
}*/




/*****************
******************
******************
******************
******************
******************
******************
VISIBLE BLOCKS
******************
******************
******************
******************
******************
******************
******************/

:root {
  --cardLibToggleLeftPos:-2px;
}

#root .grid.select-none > div,
#root .grid.select-none > div > div,
#root .grid.select-none > div > div > div,
#root .grid.select-none > div > div > div > div,
#root .grid.select-none > div > div > div > div > div {
  max-height: unset !important;
}

#root .grid.select-none .ProseMirror > div {
  max-height: var(--cardlibContentMaxHeight) !important;
}
/*hide all block types - first block*/
#root .grid.select-none .ProseMirror > * {
  display: none;
}
/*show all block types - first block*/
#root .grid.select-none .ProseMirror > *:first-child,
#root .grid.select-none .ProseMirror > div[data-node-type="code_block"]:nth-child(2){
  display: block;
}
#root .grid.select-none .ProseMirror > [data-node-type*="list_item"]:first-child {
  display: flex;
  margin-bottom: 0px;
}

/**CODE BLOCKS*/
#root .grid.select-none .ProseMirror > div[data-node-type="code_block"]:first-child,
#root .grid.select-none .ProseMirror > *:first-child + div[data-node-type="code_block"]:nth-child(2),
#root .grid.select-none .ProseMirror > *:first-child + div:not([data-node-type="code_block"]) + div[data-node-type="code_block"]:nth-child(3){
  display: block !important;
  transform-origin: top center;
}
#root .grid.select-none .ProseMirror > div[data-node-type="code_block"]:first-child,
#root .grid.select-none .ProseMirror > *:first-child + div[data-node-type="code_block"]:nth-child(2),
#root .grid.select-none .ProseMirror > *:first-child + div:not([data-node-type="code_block"]) + div[data-node-type="code_block"]:nth-child(3) {

}

#root .grid.select-none .ProseMirror > div[data-node-type="code_block"] {
  max-height: calc(var(--cardlibContentMaxHeight) - 100px);
}

/*ALL FIRST ITEMS EXCEPT LIST ITEMS*/
#root .grid.select-none .ProseMirror > *:not([data-node-type*="list_item"]) {
  margin-bottom: 0px !important;
}

/*LIST ITEMS - bullet lists*/

#root .grid.select-none .ProseMirror > [data-node-type*="bullet_list_item"]:first-child + [data-node-type*="bullet_list_item"],
#root .grid.select-none .ProseMirror > [data-node-type*="bullet_list_item"]:first-child + [data-node-type*="bullet_list_item"] + [data-node-type*="bullet_list_item"],
#root .grid.select-none .ProseMirror > [data-node-type*="bullet_list_item"]:first-child + [data-node-type*="bullet_list_item"] + [data-node-type*="bullet_list_item"] + [data-node-type*="bullet_list_item"],
#root .grid.select-none .ProseMirror > [data-node-type*="bullet_list_item"]:first-child + [data-node-type*="bullet_list_item"] + [data-node-type*="bullet_list_item"] + [data-node-type*="bullet_list_item"] + [data-node-type*="bullet_list_item"],
#root .grid.select-none .ProseMirror > [data-node-type*="bullet_list_item"]:first-child + [data-node-type*="bullet_list_item"] + [data-node-type*="bullet_list_item"] + [data-node-type*="bullet_list_item"] + [data-node-type*="bullet_list_item"] + [data-node-type*="bullet_list_item"]{
  display: flex;
}
#root .grid.select-none .ProseMirror > [data-node-type*="bullet_list_item"]:first-child + [data-node-type*="bullet_list_item"]:nth-child(2){
  margin-top: 2px;
}

#root .grid.select-none .ProseMirror > [data-node-type*="bullet_list_item"]:first-child ~ [data-node-type*="bullet_list_item"]:last-child{
  margin-bottom: 0px;
}

/*LIST ITEMS - toggle bullet*/
#root .grid.select-none .ProseMirror > [data-node-type*="list_item"]:first-child > [class*="bulletWrap"] [style*="height: "] {
  height: unset !important;
  margin-top: 4px
}

/*LIST ITEMS - CHildren - Max-height*/
#root .grid.select-none .ProseMirror > [data-node-type*="list_item"] > [class*="nestedBlocks"] > [data-node-type="table"] {
  overflow-y: hidden !important;
}

/*
#root .grid.select-none .ProseMirror > [data-node-type*="list_item"] > [class*="nestedBlocks"]:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 2px;
  left: 0;
  right: 0;
  height: 10px;
  background: linear-gradient(to top, var(--background-primary), transparent);
  z-index: 10;
}*/

#root .grid.select-none > div [class*="bulletIcon"] + [class*="_hint"]{
  opacity: 0;
}
#root .grid.select-none > div .ProseMirror [data-node-type="horizontal_rule"] > div.h-px {
  opacity: .7;
  height: 2px;
  box-shadow: unset;
}

#root .grid.select-none .ProseMirror > [data-node-type*="bullet"] strong{
  font-weight: 600;
  color: var(--bldClr) !important;
}

#root .grid.select-none .ProseMirror > [data-node-type="todo_list_item"]:first-child > .relative > [class*="nested"] > p ~ * {
  display: none;
}

/***************
****************
PROSEMIRROR
****************
*****************/

/***************
****************
TOGGLE > 1st CHILD
****************
*****************/
#root .grid.select-none .ProseMirror > [data-node-type*="toggle"]:not([class*="folded"]):nth-child(1){
  display: flex !important;
}
#root .grid.select-none .ProseMirror > [data-node-type*="toggle"]:not([class*="folded"]):nth-child(1) > [class*="bulletWrapper"]{
  position: absolute;
  left: var(--cardLibToggleLeftPos);
  
}

/***************
****************
TOGGLE > 2ND CHILD
****************
*****************/
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type*="toggle"]:not([class*="folded"]):not([class*="Heading"]):nth-child(2){
  display: flex !important;
}
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type*="list_item"]:not([class*="folded"]):nth-child(2) > [class*="nested"] > [data-node-type]:first-child,
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type*="list_item"]:not([class*="folded"]):nth-child(2) > [class*="nested"] > [data-node-type]:first-child + [data-node-type*="code_block"]{
  display: block;
}

#root .grid.select-none .ProseMirror > [data-node-type*="list_item"]:not([class*="folded"]):nth-child(1) > [class*="nested"] > :is([data-node-type*="horizontal"],[data-node-type]:not(:first-child)) {
  display: none !important;
}
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type*="list_item"]:nth-child(2) > [class*="nested"] > [data-node-type]{
  display: none;
}

/*TOGGLE > 2ND CHILD > BULLET WRAPPER*/
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type*="toggle"]:nth-child(2) > [class*="bulletWrapper"]{
  position: absolute !important;
}

/*TOGGLE > 2RD CHILD > BULLET WRAPPER*/
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type*="toggle"]:nth-child(2) > [class*="bulletWrapper"]{
  position: absolute !important;
  left: var(--cardLibToggleLeftPos) !important;
}


/*folded*/
#root .grid.select-none .ProseMirror > [data-node-type]:first-child [data-node-type*="toggle"]:is([class*="folded"]):nth-child(2){
  margin: 0px !important;
}
/***************
****************
TOGGLE > 3RD CHILD
****************
*****************/
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type*="horizontal"] + [data-node-type*="toggle"]:not([class*="Heading"]):nth-child(3){
  display: flex !important;
}
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type*="horizontal"] + [data-node-type*="toggle"]:not([class*="folded"]):nth-child(3) > [class*="nested"] > [data-node-type]:first-child,
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type*="horizontal"] + [data-node-type*="toggle"]:not([class*="folded"]):nth-child(3) > [class*="nested"] > [data-node-type]:first-child + [data-node-type*="code_block"]{
  display: block !important;
}
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type*="horizontal"] + [data-node-type*="toggle"]:not([class*="Heading"]):nth-child(3) > [class*="nested"] > [data-node-type]{
  display: none;
}

/*TOGGLE > 3RD CHILD > BULLET WRAPPER*/
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type] + [data-node-type*="toggle"]:not([class*="Heading"]):nth-child(3) > [class*="bulletWrapper"]{
  position: absolute !important;
  left: -3px !important;
}

/*folded*/
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type*="horizontal"] + [data-node-type*="toggle"]:is([class*="folded"]):nth-child(3){
  margin: 0px !important;
}

/*HORIZONTAL RULE > 3RD CHILD*/
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type*="horizontal"]{
  display: none; 
}
#root .grid.select-none .ProseMirror > [data-node-type]:first-child + [data-node-type*="horizontal"] > div{
  height: 1.5px;
}

/*CODE > */
#root .grid.select-none .ProseMirror > [data-node-type] code {
  padding: 0.125em .3em 0.075em .3em !important;
  display: inline !important;;
  box-shadow: inset 0 0 0 .75px var(--inlineCodeBoxShadClr) !important;
}

/*******
! CODEBLOCKS
********/

/*CODEBLOCKS*/



#root .grid.select-none .ProseMirror  div[data-node-type="code_block"],
#root .grid.select-none .ProseMirror  div[data-node-type="code_block"] .cm-line {
    --cardlibFontSize:15.5px !important;
  line-height: 19px
}

#root .grid.select-none .ProseMirror > div[data-node-type="code_block"] .cm-editor {
  padding-top: 13px;
}
#root .grid.select-none .ProseMirror > div[data-node-type="code_block"] .cm-editor [class*="scroller"] {
  padding: 0 17px 13px
}
#root .grid.select-none .ProseMirror  div[data-node-type="code_block"]{
  position: relative !important;
}

#root .grid.select-none .ProseMirror  div[data-node-type="code_block"] {
  max-height: calc(var(--cardlibContentMaxHeight) - 100px) !important;
  overflow: hidden;
}
#root .grid.select-none .ProseMirror  div[data-node-type="code_block"]:after {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  height: calc(var(--cardlibCardPadTopBtm) * 2) !important;
  background: linear-gradient(
    to top, 
    var(--background-primary-cardLib) 0%, 
    var(--background-primary-cardLib) 10%, 
    transparent 100%);
  top: unset !important;
}

#root .grid.select-none .ProseMirror > [data-node-type="code_block"]:first-child{
  margin-top: 5px !important;
  padding-bottom: 0px !important;
}

/*******
! HIGHLIGHTS
********/

#root .grid.select-none .flex > [style*="--annotation-yellow"] + [class*="ProseMirror-"] > div > .ProseMirror [data-node-type]:not([data-node-type="table"], [data-node-type="table"] *),
#root .grid.select-none .flex  + [class*="ProseMirror-"] > div > .ProseMirror {
  --cardlibFontSize:16.5px;
  --cardlibLineHeight:1.4;
}

#root .grid.select-none .flex > [style*="--annotation-yellow"] + [class*="ProseMirror-"] > div > .ProseMirror code {
  top: 0px !important;
}
#root .grid.select-none .flex > [style*="--annotation-yellow"] + [class*="ProseMirror-"]{
  overflow: hidden !important;
}
/*DISPLAY ALL ITEMS > BLOCK ITEMS*/
#root .grid.select-none .flex > [style*="--annotation-yellow"] + [class*="ProseMirror-"] > div > .ProseMirror > [data-node-type="paragraph"],
#root .grid.select-none .flex > [style*="--annotation-yellow"] + [class*="ProseMirror-"] > div > .ProseMirror > [data-node-type="image"],
#root .grid.select-none .flex > [style*="--annotation-yellow"] + [class*="ProseMirror-"] > div > .ProseMirror > [data-node-type="embed"],
#root .grid.select-none .flex > [style*="--annotation-yellow"] + [class*="ProseMirror-"] > div > .ProseMirror > [data-node-type="heading"],
#root .grid.select-none .flex > [style*="--annotation-yellow"] + [class*="ProseMirror-"] > div > .ProseMirror > [data-node-type="quote"],
#root .grid.select-none .flex > [style*="--annotation-yellow"] + [class*="ProseMirror-"] > div > .ProseMirror > [data-node-type*="code"]{
  display: block !important
}

#root .grid.select-none .flex > [style*="--annotation-yellow"] + [class*="ProseMirror-"] > div > .ProseMirror > [data-node-type="image"]{
  min-width: 100px;
  min-height: 100px !important;
  max-height: 100% !important;
}
#root .grid.select-none .flex > [style*="--annotation-yellow"] + [class*="ProseMirror-"] > div > .ProseMirror > [data-node-type="image"] img{
  min-height: unset !important;
  display: block;
  min-width: 100% !important
}

/*DISPLAY ALL ITEMS > FLEX ITEMS*/
#root .grid.select-none .flex > [style*="--annotation-yellow"] + [class*="ProseMirror-"] > div > .ProseMirror > [data-node-type*="list_item"]{
  display: flex
}


/*******
! ROW 1 - TOOLBAR
********/

:root {
  --cardlibToolbarPadLR: 1rem;
  --cardlibToolbarMaxW: 1000px;
  
}

/*colors*/



:root {
  --cardlibToolBrdClr:hsla(0, 0%, 0%, .1);
  --cardlibToolBgClr:hsla(0, 0%, 50%, 0.1);
  --cardLibFirstTagBgClr:hsla(0, 0%, 0%, 0.04);
  --cardLibFirstTagBrdClr:hsla(0, 0%, 0%, 0.24);
}

[data-theme="dark"] {
  --cardlibToolBrdClr:hsla(0, 50%, 100%, .075) !important;
  --cardlibToolBgClr:hsla(0, 0%, 0%, 0.1);
  --cardLibFirstTagBgClr:hsla(0, 0%, 0%, 0.14);
  --cardLibFirstTagBrdClr:black
}

/*******
OVERRIDES
********/

/*remove padding-top on sidebar open**/

#root > .relative.flex.h-screen > [class*="sidebar"] ~ .relative.flex.grow.overflow-hidden{
  padding-top: 0px !important;
}
/*******
! TOP TOOLBAR > CONTAINER
********/
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag {
  box-shadow: inset 0 0 0 calc(var(--crdLibTstBrdW) * 3) green;
  max-width: var(--cardlibToolbarMaxW);
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: var(--cardlibToolbarPadLR);
  position: relative;
  background: transparent;
  justify-content: center !important;
  align-items: center !important;
  padding-left: var(--cardlibToolbarPadLR);
  padding-right: var(--cardlibToolbarPadLR);
}

/*******
! TOP TOOLBAR > CONTAINER > LEFT / RIGHT CONTAINERS
********/
#root > .relative.flex.h-screen > .relative.flex.grow.overflow-hidden > .flex.flex-col > .app-region-drag > div{
  flex: unset !important;
}

#root > .relative.flex.h-screen > .relative.flex.grow.overflow-hidden > .flex.flex-col > .app-region-drag > div:last-child{
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
}

/*******
! TOP TOOLBAR > FILTER ROW
********/


#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .py-2,
#root > .relative.flex.h-screen.isolate > .relative.flex.grow.overflow-hidden > .flex.grow.flex-col > .app-region-drag > div:last-child{
  box-shadow: inset 0 0 0 calc(var(--crdLibTstBrdW) * 2) red;
  max-width: var(--cardlibToolbarMaxW);
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  row-gap: 0.5rem;
  column-gap: 0.25rem;
  min-height: unset;
}
/*! TOOLBAR > FILTER ROW > SIDEBAR OPEN*/
#root .h-screen > [class*="sidebar"] + .relative.flex > .duration-100 > .app-region-drag + .py-2[class*="px-"] > div {
}

/*******
! TOP TOOLBAR > BORDERS
********/



/*SEARCH BORDER > ADD BACKGROUND */
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag:before {
  content: "";
  position: absolute;
  display: block;
  left: -40vw;
  right: -40vw;
  top: 0;
  bottom: 0;
  background: var(--cardlibToolBgClr) !important;
  height: unset;
  z-index: 0;
  border-bottom: 1px solid var(--cardlibToolBrdClr);
}




/*******
! TOOLBAR > CONTEXT MENU
********/


.max-h-\[min\(50vh\,400px\)\]{
  max-height: min(70vh, 100vh)
}


/*******
! ROW 2 - TAGS AREA
********/

/*******
! TAGS AREA > CONTAINERS
********/

#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4{
  padding-left: var(--cardlibToolbarPadLR);
  padding-right: var(--cardlibToolbarPadLR);
  display: flex !important;
  align-items: center !important;
  justify-content: center;
  border-bottom: 1px solid var(--cardlibToolBrdClr)

}

#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div {
    max-width: var(--cardlibToolbarMaxW);
  width: 100%;
  row-gap: 10px;
  column-gap: 5px
}
/*******
! TAGS AREA > TAG FILTERS
********/
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div{
  min-height: 17px;
    outline: var(--crdLibTstBrdW) solid red
}
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div .text-label {
    min-width: 20px;

}
/*FIRST 4 OPTIONS > GAP*/
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div:first-child,
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div:nth-of-type(2),
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div:nth-of-type(3),
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div:nth-of-type(4),
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div:nth-of-type(5){

}
/*FIRST 4 OPTIONS > COLOR*/
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div:first-child:not(:hover),
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div:nth-of-type(2):not(:hover),
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div:nth-of-type(4):not(:hover),
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div:nth-of-type(5):not(:hover){
  background: var(--cardLibFirstTagBgClr);
  border-color: var(--cardLibFirstTagBrdClr);
}


/*******
! TOOLBAR > TAG FILTERS > ACTIVE
********/

#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div[class*="active"]{
  background: rgba(35, 131, 226, .2);

}
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div[class*="active"] > .truncate{
  color: var(--active-item) !important;
}

[data-theme="dark"] #root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div[class*="active"] > .truncate{
  --active-item: hsl(200, 100%, 68%) !important;
  
}
[data-theme="dark"] #root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div[class*="active"] > .truncate + div svg {
  display: none;
}
[data-theme="dark"] #root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div[class*="active"] > .truncate + div .truncate {
  margin: 0px !important;
}


/*******
! TOOLBAR > TAG FILTERS > HIDE STUFF
********/
#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div:not(:first-child,:nth-of-type(2),:nth-of-type(3),:nth-of-type(4),:nth-of-type(5),[class*="active"],:hover){
  border-color: transparent;
}

#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div:not(:first-child,:nth-of-type(2),:nth-of-type(3),:nth-of-type(4),:nth-of-type(5),.app-region-no-drag) > svg{
  display: none;
}

#root .h-screen > .relative.flex > .duration-100 > .app-region-drag + .px-4 > div > div:not(:first-child,:nth-of-type(2),:nth-of-type(3),:nth-of-type(4),:nth-of-type(5)) > .truncate {
white-space: break-spaces;
  margin: unset;
}

/*******
TOOLBAR DROPDOWN
********/

/*****************
CARD LIBRARY TOOLBAR DROPDOWN
******************/
div > div.h-screen.w-screen + .fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label > .flex.max-h-\[min\(50vh\, 400px\)\].flex-col {
  max-height: 80vh
}




/*********
CHAT > MAIN
**********/
/*OVERRIDES*/
#dummybodyid .pt-4.pb-3 > div > .mb-4 {
  margin: 0px !important;
}
.group\/1741629705525 {
  border-bottom: .5px solid hsla(0, 0%, 50%, .35);
  padding-top: 0px !important;
  padding-bottom: 10px;
  padding-left: 0px !important;
}

div > div[style*="absolute"] *:is(.mt-4,.mb-4){
  margin: unset !important;
}
.group\/1741629705525 > div {
  padding: 0px !important;
}

/*REMOVE TOP PADDING*/
.pt-4.scrollbar-gutter-stable.overflow-x-hidden.overflow-y-auto{
  padding: 0px;
}


/*MESSAGE BODY*/










/*******
! Chat > PROSEMIRROR
********/
.group\/1741629705525 .h-8 ~ [class*="ProseMirror-hepta-style"]{
  margin-left: calc(var(--chatHeaderPadLR) + var(--chatHeaderGap) + var(--chatHeaderIcnW))
}

[data-chat-message-id] .ProseMirror {
  max-height: var(--testProseMirMaxH) !important;
  overflow: hidden;
}

/*******
! Chat > REASONING SUMMARY
********/

.group\/1741629705525 .h-8 ~ .rounded-md{
  background: var(--ultra-light-grey);
}



/*******
********
! Chat > MESSAGE > HEADER
*******
********/
:root {
  --chatHeaderH: 32px;
  --chatHeaderH-Type2: 24px;
  --chatHeader-ZIndex: 21;
  --chatHeaderIcnW: 17px;
  --chatHeaderGap: 6px;
  --chatHeaderPadTopBtm: 5px;
  --chatHeaderPadLR: 20px;
  --chatHeaderBtn-ZIndex: 22;
}

/*overrides*/
.group\/1741629705525 > .relative > .h-8 * {
  margin: unset !important;
  width: unset;
}

/******
! HEADER > ALL
*******/
.group\/1741629705525 .h-8 {
  padding-left: var(--chatHeaderPadLR) !important;
  gap: var(--chatHeaderGap);
}

/******
! HEADER > USER/ASSISTANT
*******/
.group\/1741629705525 > .relative > .h-8:not([class*="group"],[class*="max-w"]) {
  height: var(--chatHeaderH) !important;
  margin-bottom: 0px;
  margin-left: 1px !important;
  position: sticky;
  top: 0;
  display: flex !important;
  align-items: center;
  padding-top: calc(var(--chatHeaderPadTopBtm) * 1);
  padding-bottom: var(--chatHeaderPadTopBtm);
  box-shadow: inset 0 0 0 var(--testBrdChatW) red;
  z-index: var(--chatHeader-ZIndex);
  margin-left: 0px;
  margin-bottom: 10px;
  backdrop-filter: blur(40px);
  background: hsla(216, 6%, 15%, .16);
  padding-right: 0px !important;
  gap: var(--chatHeaderGap);
  box-shadow: inset 0 0 0 var(--testBrdChatW) #4dedff;
}



/******
! HEADER > USER/ASSISTANT > EXTRA TOP PADDING
*******/
.group\/1741629705525 .flex ~ .relative > .h-8 {
  height: calc(var(--chatHeaderH) + var(--chatHeaderH-Type2)) !important;
  backdrop-filter: blur(40px) !important;
  background: hsla(216, 6%, 15%, .16);
  margin-top: calc(var(--chatHeaderH-Type2) * -1) !important;
  align-items: flex-end;
}




/*******
********
! HEADER > USER/ASSISTANT > ICONS + INNER
*******
********/
/*left sidebar open*/
.group\/1741629705525 .h-8  [class*="text-label"] {
  outline: var(--testBrdChatW) solid Pink;

}
.group\/1741629705525 .h-8 [class*="text-label"].truncate:not(.text-label-mini) {
  min-width:93% !important;
}

/**HEADER > USER/ASSISTANT > INNER ICON > ASSISTANT*/
.group\/1741629705525 .h-8 svg {
  margin-right: var(--chatHeaderIcnMargR);
  outline: var(--testBrdChatW) solid pink;
}

.group\/1741629705525 .h-8 > div:first-child svg.fill-middle-hard-grey {
  fill: hsl(300, 100%, 75%) !important;
}

.group\/1741629705525 .h-8 .size-5,
.group\/1741629705525 .h-8 .size-3 {
  width: var(--chatHeaderIcnW) !important;
  height: var(--chatHeaderIcnW) !important;

}
.group\/1741629705525 .h-8 .size-3 {
  transform: scale(0.8)
}

.group\/1741629705525 .h-8 .size-5 *,
.group\/1741629705525 .h-8 .size-3 * {
  width: 100%;
  height: 100%;
}

/**HEADER > USER/ASSISTANT > INNER ICON > USER*/
.group\/1741629705525 .h-8 .rounded-circle {
  width: 100%;
  transform: scale(1.2);
  font-size: 11px;
  box-shadow: inset 0 0 0 .5px hsla(0,0%,100%,0.2);
  margin-top: -1px !important;

    
}

.group\/1741629705525 .flex.items-center.gap-x-2[class*="pl-4"] ~ .relative > .h-8  .size-5{
margin-bottom: 2px !important;
}


/*******
********
********
! Chat > MESSAGE > HEADER > ABOVE USER / ASSISTANT
*******
********
********/

/******
*******
! HEADER > ABOVE USER/ASSISTANT > REPLIES
*******
*******/

.group\/1741629705525  .flex.h-8[class*="group"],
.group\/1741629705525 > div.h-8,
.group\/1741629705525 > div.flex{
  padding-left: calc(var(--chatHeaderPadLR) + var(--chatHeaderGap) + 4px);
  width: 100% !important;
  height: var(--chatHeaderH-Type2) !important;
  overflow: visible;
  z-index: var(--chatHeader-ZIndex);
  position: relative;
  box-shadow: inset 0 0 0 calc(var(--testBrdChatW) * 2) green;
  position: sticky;
}
/******
*******
! HEADER > ABOVE USER/ASSISTANT > REPLIES > INNER
*******
*******/
.group\/1743526506295 {
  min-width: calc(100% - var(--chatHeaderPadLR) * 1.25);
}

/******
*******
! HEADER > ABOVE USER/ASSISTANT > DUPLICATED MESSAGE "REPOSTED FROM"
*******
*******/


.group\/1741629705525 > div.flex{
  position: sticky;
  top: 0;
  z-index: 22;
    box-shadow: 0 .5px 0 0 hsla(0, 0%, 50%, .125);
  outline: var(--testBrdChatW) solid Orange !important;
  outline-offset: -1px;
}
/******
! HEADER > TYPE 2 AND TYPE 1 > INBOX SIDEBAR
*******/

[data-is-inbox-app-panel] [data-chat-message-id] .flex.items-center.gap-x-2[class*="pl-4"] ~ .relative > .h-8 {
  backdrop-filter: unset !important;
  background: hsla(216, 6%, 15%,1) !important;
}

/*******
********
! Chat > MESSAGE > HEADER > HOVER MENU
*******
********/

/*******
********
HEADER > HOVER MENU
*******
********/

.group\/1741629705525 .absolute[class*="right"][class*="top"] {
  height: 0px;
  position: relative !important;
  top: unset !important;
  display: flex !important;
  align-items: center;
  justify-content: flex-end;
  opacity: 0 ;
  overflow: visible;
  transition: 190ms cubic-bezier(.7, 1.5, 0, .95);
  transform-origin: top right;
  transform: scale(.8);
  flex: 1;
  z-index: 929292929292 !important;
  margin: unset !important;

}


.group\/1741629705525:hover .absolute[class*="right"][class*="top"] {
  opacity: 1;
  transform: scale(1);
}

.group\/1741629705525 .absolute[class*="right"][class*="top"] [class*="group"] {
  display: flex !important;
  height: calc(var(--chatHeaderH) - 6px);
    box-shadow: inset 0 0 0 calc(var(--testBrdChatW) * 3) green !important;
}

.group\/1741629705525 .absolute[class*="right"][class*="top"] [class*="group"] [class*="clickable"] {
  padding-left: 7px;
  padding-right: 7px;
}

.group\/1741629705525 .absolute[class*="right"][class*="top"] [class*="group"] svg {
  width: 1rem !important;
  height: 1rem !important;
}

/*EDITING > X + CHECKMARK*/
.group\/1741629705525 > .relative > .h-8 > div:last-child,
.group\/1741629705525 .group\/1743526506295 + .ml-auto.shrink-0{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.group\/1741629705525 .group\/1743526506295 + .ml-auto.shrink-0 {
  position: absolute;
  right: 0;
}


/*******
********
! Chat > MESSAGE > HEADER > HOVER MENU > ABOVE USER / ASSISTANT
*******
********/

.group\/1741629705525 .h-8 ~ .absolute[class*="right"][class*="top"] {
  top: calc(var(--chatHeaderH-Type2) * 1) !important;
  align-items: flex-start;
  height: var(--chatHeaderH-Type2) !important;
  margin: unset;
  position: absolute !important;
  
}


/*******
! Chat > MESSAGE > BOTTOM HOVER HEADER
********/
.group\/1741629705525 .h-8 ~ [class*="ProseMirror-hepta-style"] ~ [class*="empty:hidden"] + .ml-8 {
  width: calc(100% - 2rem);
  position: sticky;
  bottom: 0px;
  backdrop-filter: blur(40px);
  background: hsl(216, 6%, 15%,0.6);
  z-index: 20;
  border-radius: 3px;
  overflow: hidden;
}
.group\/1741629705525 .h-8 ~ [class*="ProseMirror-hepta-style"] ~ [class*="gap"] > div:last-child {
  margin-left: 70px;
  user-select: none;
  align-self: center;
  transform: scale(.9);
  opacity: 0;
  transition-delay: 0s !important;
  transition: .15s;
  visibility: hidden;
}

/*make unclickable unless hover for 1 second*/
.group\/1741629705525 .h-8 ~ [class*="ProseMirror-hepta-style"] ~ [class*="gap"] {}

.group\/1741629705525 .h-8 ~ [class*="ProseMirror-hepta-style"] ~ [class*="gap"]:hover > div:last-child {
  background: hsla(0, 100%, 50%, 0);
  animation: regen-btn 2s ease-in-out;
  user-select: all;
  transform: scale(1);
  opacity: 0.7;
  visibility: visible;
  transition-delay: .5s !important;
}
.group\/1741629705525 .h-8 ~ [class*="ProseMirror-hepta-style"] ~ [class*="gap"]:hover > div:last-child svg path{
  fill: hsl(0, 100%, 50%);
  opacity: 1;
}

.group\/1741629705525 .h-8 ~ [class*="ProseMirror-hepta-style"] ~ [class*="gap"]:hover > div:last-child:hover {
background: hsla(0, 100%, 60%, .2);
  opacity: 1;
  transition-delay: 0s !important;
}

.group\/1741629705525 .h-8 ~ [class*="ProseMirror-hepta-style"] ~ [class*="gap"]:hover > div:last-child:hover svg path {
  fill: hsl(0, 100%, 60%);

}



/*******
! Chat > MESSAGE > HOVER
********/
.group\/1741629705525:after {
  opacity: 0 !important;
}

/*******
! Chat > MESSAGE > EDITING
********/
:root {
  --chatProseMirrorEditPadLR: 15px;
  --chatProseMirrorEditPadTopBtm: 5px;
}

.group\/1741629705525 [class*="ProseMirror-hepta-style"] > [data-editor-type] > .ProseMirror {
  /*/
  padding-top: var(--chatProseMirrorEditPadTopBtm);
  padding-bottom: var(--chatProseMirrorEditPadTopBtm);
  padding-left: var(--chatProseMirrorEditPadLR);
  padding-right: var(--chatProseMirrorEditPadLR);
  margin-top: calc(var(--chatProseMirrorEditPadTopBtm) * -1);
  margin-bottom: calc(var(--chatProseMirrorEditPadTopBtm) * -1);
  margin-left: calc(var(--chatProseMirrorEditPadTopBtm) * -3);
  */
  border: unset;
  padding: 0px !important;
  background: transparent;
  
}
.group\/1741629705525 [class*="ProseMirror-hepta-style"] > [data-editor-type="editor"] > .ProseMirror > * {
  z-index: 1
}

/*EDITING > FAKE BACKGROUND*/
.group\/1741629705525 [class*="ProseMirror-hepta-style"] > [data-editor-type] > .ProseMirror:before,
.group\/1741629705525 [class*="ProseMirror-hepta-style"] > [data-editor-type="previewer"] > .ProseMirror:before{
  content:"";
  position: absolute;
  display: block;
  top: calc(var(--chatProseMirrorEditPadTopBtm) * -1);
  bottom: calc(var(--chatProseMirrorEditPadTopBtm) * -1.5);
  left: calc(var(--chatProseMirrorEditPadTopBtm) * -3);
  right: calc(var(--chatProseMirrorEditPadTopBtm) * -0.5);
  box-shadow: 0 0 0 1px hsla(0, 0%, 50%, 0.3);
  z-index: -1;
  background-color: var(--ultra-light-grey);
  transition: 1s !important;
  transform: scale(.8) ease-in-out;
  opacity: 0;
  border-radius: 6px;
}
.group\/1741629705525 [class*="ProseMirror-hepta-style"] > [data-editor-type="editor"] > .ProseMirror:before {
  transform: scale(1);
  transition: 1s ease-in-out;
  opacity: 1;
  z-index: 1;
}


/********
*********
*********
! Chat > DUPLICATED MESSAGE > LINK TO ORIGINAL MESSAGE
*********
*********
*********/

/********
! DUPLICATED MESSAGE > LINK TO ORIGINAL MESSAGE
*********/
.group\/1741629705525 [class*="ProseMirror-hepta-style"] ~ .flex.h-8{
  margin-left: calc(var(--chatHeaderPadLR) + var(--chatHeaderGap) + var(--chatHeaderIcnW) + 1px) !important;
  padding-top: var(--chatHeaderPadTopBtm);
  padding-bottom: var(--chatHeaderPadTopBtm);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: unset !important;
  padding-left: calc(var(--chatHeaderPadLR) * .5) !important;
  box-shadow: 0 0 0 var(--testBrdChatW) purple;
  background: var(--ultra-light-grey) !important;
}

.group\/1741629705525 [class*="ProseMirror-hepta-style"] ~ .flex.h-8 svg {

  align-items: center;
  margin-top:1px !important;
}

.group\/1741629705525 [class*="ProseMirror-hepta-style"] ~ .flex.h-8 .truncate {
  font-size: 0.835rem;
  line-height: 1.4
}


/********
! DUPLICATED MESSAGE > LINK TO ORIGINAL MESSAGE > ABSOLUTE BORDER
*********/
.group\/1741629705525 [class*="ProseMirror-hepta-style"] ~ .absolute{
  left: calc(var(--chatHeaderPadLR) * .5 + var(--chatHeaderGap) * .5 + var(--chatHeaderIcnW) * .5 + 13px * .5);
  width: var(--chatSourceBrdW)!important;
  border-bottom-left-radius: 6px;
}

/********
*********
*********
! Chat > DUPLICATED MESSAGES > DOTTED BORDER 

END OF DUPLICATED MESSAGES
*********
*********
*********/


/********
! DUPLICATED MESSAGE > END INDICATOR > BORDER
*********/
[style*="overflow-anchor"] > div[style*="absolute"] > .h-4 {
  padding: 0px var(--chatHeaderPadLR);
  height: 24px;
  margin-top: -3px;
  backdrop-filter: blur(10px);
}
[style*="overflow-anchor"] > div[style*="absolute"] > .h-4 > div {
  border-top: 5px dotted hsla(0,0%,100%,0.3);
  background: transparent;
}

/********
*********
*********
! Chat > LEFT SIDEBAR
*********
*********
*********/
:root {
  --chatSideBarMinW:40vw;
}

@media (max-width: 1000px){
.app-region-drag + div.flex > div[style*="min-width:"]{
  min-width: var(--chatSideBarMinW) !important;
}

.app-region-drag + div.flex > div[style*="width: 536"]{
  max-width:var(--chatSideBarMinW)!important;
}
}


/*TOP HEADER*/
.app-region-drag + div.flex > div[style*="min-width:"] > div.h-12,
.app-region-drag + div.flex > div[style*="min-width:"] > div.h-12 > div{
  gap: 0px !important;
}


/*search*/
:root{
  --chatSearchIcnW:1.6rem;
  --chatSearchPadLR:5px;
  --chatSearchOutlineW:1px;
}
.app-region-drag + div.flex > div[style*="min-width:"] > div.h-12 > div.grow{
  position: relative;
  padding-left: 0px;
  padding-right: 0px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 6px;
  padding-right: 6px
}
.app-region-drag + div.flex > div[style*="min-width:"] > div.h-12 > div.grow *{
  margin: unset;
}

/*icon*/
.app-region-drag + div.flex > div[style*="min-width:"] > div.h-12 > div.grow > div:first-of-type {
  position: absolute;
  left: calc(var(--chatSearchPadLR) * .2);
  transform: scale(0.76);
  width: var(--chatSearchIcnW);
  height: var(--chatSearchIcnW);
  overflow: visible;
  pointer-events: none !important;
  user-select: none !important;
  opacity: .6
}

/*input*/
.app-region-drag + div.flex > div[style*="min-width:"] > div.h-12 > div.grow  input {
  box-shadow: inset 0 0 0 1px hsla(0,0%,50%,0.2);
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: calc(var(--chatSearchIcnW));
  padding-right: 5px;
  border-radius: 7px;
  max-width: 350px;
  transition: .1s !important;
}
.app-region-drag + div.flex > div[style*="min-width:"] > div.h-12 > div.grow  input:empty{
  background: transparent;
}
.app-region-drag + div.flex > div[style*="min-width:"] > div.h-12 > div.grow  input:not(:empty){
  background: red !important;
}
.app-region-drag + div.flex > div[style*="min-width:"] > div.h-12 > div.grow  input:focus,
.app-region-drag + div.flex > div[style*="min-width:"] > div.h-12 > div.grow  input:focus-within{
  box-shadow: inset 0 0 0 1px hsla(0,0%,50%,0.3);
  background: hsla(0,0%,0%,0.1);

}
/*cancel*/

.app-region-drag + div.flex > div[style*="min-width:"] > div.h-12 > div.grow  input + div {
  position: relative;
  margin-left: calc(var(--chatSearchPadLR) * -5);
  right: calc(var(--chatSearchPadLR) * 1);
  left: unset;
  opacity: .6;
}
.app-region-drag + div.flex > div[style*="min-width:"] > div.h-12 > div.grow  input + div:hover{
  opacity: 1;
}
.app-region-drag + div.flex > div[style*="min-width:"] > div.h-12 > div.grow  input + div svg{
  transform: scale(1.1);
}

/********
*********
*********
! Chat > LEFT SIDEBAR > TITLES
*********
*********
*********/


:root {
  --chatSideBarTitleFlexDirection:row;
  --chatSideBarTitleGap:0px;
  --chatSideBarTitleMargBtm:7px;
  --chatShareIndicator-Position:relative;
  --chatShareIndicator-PositionRight:unset;
  --chatShareIndicator-PositionTop:unset;
  --chatShareIndicator-zIndex:1;
  /***/
  --chatShareIndicator-BgClr:var(--ultra-light-grey);
}

/*CHAT TITLES*/

/*div[style*="width"].bg-background-secondary .flex.h-12 + div [class*="group"] .flex.min-w-0.grow > div:first-child,
div[style*="min-width"].bg-ultra-light-grey .flex.h-12 + div [class*="group"] .flex.min-w-0.grow > div:first-child,
div[style*="min-width"] .flex.h-12 + div [class*="group"] .flex.min-w-0.grow > div:first-child,*/
.group\/1741145808342 .flex.min-w-0.grow > div:first-child{
  height: unset !important;
  flex-direction: var(--chatSideBarTitleFlexDirection);
  gap: var(--chatSideBarTitleGap);

}


.group\/1741145808342 .flex.min-w-0.grow > div:first-child > .truncate{
  white-space: normal;
  line-height: 1.35;
  font-size: 14.75px;
  font-weight: 500;
  margin: 0px !important; 
  color: var(--bldClr);
  width: 100%;
}
@media (max-width: 900px){
  :root {
      --chatSideBarTitleFlexDirection:column;
    --chatSideBarTitleGap:5px;
    --chatSideBarTitleMargBtm:var(--chatSideBarTitleGap);
    --chatShareIndicator-Position:absolute;
    --chatShareIndicator-PositionTop:0;
    --chatShareIndicator-PositionRight:0;
    --chatShareIndicator-zIndex:10;
    /***/
    --chatShareIndicator-BgClr:hsla(0,0%,20%);
  }
}

.group\/1741145808342 .flex.min-w-0.grow > div:first-child{
  margin-bottom: var(--chatSideBarTitleMargBtm); 
  top: 1px;
  position: relative;
  align-items: flex-start;
}
/*last chat message*/

.group\/1741145808342 .flex.min-w-0.grow > div.truncate {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
}
.group\/1741145808342 .flex.min-w-0.grow > div.truncate > .text-active{
  filter: saturate(0);
  opacity: 0.6;
  
}
/*CHAT METADATA*/
.group\/1741145808342 .flex.min-w-0.grow > div:last-child{
  
}
.group\/1741145808342 .flex.min-w-0.grow > div:last-child{
  margin: 0px;
  padding: 0px;
}


/*PRIVATE / SHARED INDICATOR*/

.group\/1741145808342 .flex.min-w-0.grow > div:first-child > .ml-auto{
    z-index: 92929;
  opacity: 1;
  position: var(--chatShareIndicator-Position);
  top: var(--chatShareIndicator-PositionTop);
  right: var(--chatShareIndicator-PositionRight);
}
.group\/1741145808342 .flex.min-w-0.grow > div:first-child > .ml-auto > div{
  padding-left: 4px;
  padding-right: 4px;
  background:var(--chatShareIndicator-BgClr);

}


/********
*********
*********
! Chat > IN RIGHT SIDEBAR > FONT SIZE
*********
*********
*********/

:root {
  --sideBarChatBulletMargTop:1px;
  --sideBarChatFontSize:14.5px;
  --sideBarChatLineHeight:21px;
}

/***/



/*TEST
[style*="width:"] > [style*="width:"]  div[style*="absolute"] > div .ProseMirror * {
    outline: 0px solid red !important;
}*/
/*******
! Chat > IN RIGHT SIDEBAR > FONT-SIZE
********/

[style*="width:"] > [style*="width:"]  div[style*="absolute"] > div {
}

[style*="width:"] > [style*="width:"]  div[style*="absolute"] > div .ProseMirror {
  font-size: var(--sideBarChatFontSize);
  line-height: var(--sideBarChatLineHeight);
}


[style*="width:"] > [style*="width:"]  div[style*="absolute"] > div .ProseMirror *:is([class*="bullet_"],[class*="numberIcon"]){

  height: 100%;
  top: calc(var(--sideBarChatBulletMargTop) * 1);
  position: relative;
  line-height: var(--sideBarChatLineHeight);
}

[style*="width:"] > [style*="width:"]  div[style*="absolute"] > div .ProseMirror *:is([class*="bullet_"],[class*="numberIcon"]){
  line-height: unset;
}
[style*="width:"] > [style*="width:"]  div[style*="absolute"] > div .ProseMirror *:is([class*="bullet_"],[class*="numberIcon"]):before {
  line-height: 25px !important;
}



/********
*********
*********
! Chat > TEXT AREA
*********
*********
*********/

:root {
  --chatTextAreaPadLR:13px;
  --chatTextAreaPadTopBtm:calc(var(--chatTextAreaPadLR) * .75);
}
/********
! TEXT AREA > MAX HEIGHT
*********/
.bg-background-secondary > .app-region-drag + .flex > div.px-4  .max-h-50vh,
[class*="max-h-"] + .bg-background-secondary.max-h-50vh,
.bg-background-secondary > .app-region-drag + .hepta-pseudo-overlay > .flex + div > div.px-4 .max-h-50vh{
  max-height: unset !important;
  margin: 0px !important;
  padding-bottom: 0px;
}

/*HEIGHT*/
.bg-background-secondary[style*="width:"] > .app-region-drag + .flex > div.px-4  .max-h-50vh  [data-editor-type="editor"] > .ProseMirror,
[class*="max-h-"] + .bg-background-secondary.max-h-50vh  [data-editor-type="editor"] > .ProseMirror,
.bg-background-secondary > .app-region-drag + .hepta-pseudo-overlay > .flex + div > div.px-4 .max-h-50vh [data-editor-type="editor"] > .ProseMirror,
.bg-background-secondary > .app-region-drag + .hepta-pseudo-overlay > .flex  div.px-4 .max-h-50vh [data-editor-type="editor"] > .ProseMirror,
.bg-background-secondary > .bg-background-primary [class*="bg-"] > .app-region-drag + .flex > div.px-4  .max-h-50vh  [data-editor-type="editor"] > .ProseMirror{
  max-height: 26vh !important;
  transition: .15s;

}
.bg-background-secondary[style*="width:"] > .app-region-drag + .flex > div.px-4  .max-h-50vh  [data-editor-type="editor"] > .ProseMirror:focus-within,
[class*="max-h-"] + .bg-background-secondary.max-h-50vh  [data-editor-type="editor"] > .ProseMirror:focus-within,
.bg-background-secondary > .app-region-drag + .hepta-pseudo-overlay > .flex + div > div.px-4 .max-h-50vh [data-editor-type="editor"] > .ProseMirror:focus-within,
.bg-background-secondary > .app-region-drag + .hepta-pseudo-overlay > .flex div.px-4 .max-h-50vh [data-editor-type="editor"] > .ProseMirror:focus-within,
.bg-background-secondary > .bg-background-primary [class*="bg-"] > .app-region-drag + .flex > div.px-4  .max-h-50vh  [data-editor-type="editor"] > .ProseMirror:focus-within{
  max-height: 65vh !important;
}



/********
! TEXT AREA > PADDING
*********/
.bg-background-secondary[style*="width:"] > .app-region-drag + .flex > div.px-4  .max-h-50vh > div,
[class*="max-h-"] + .bg-background-secondary.max-h-50vh  > div,
.bg-background-secondary > .app-region-drag + .hepta-pseudo-overlay > .flex + div > div.px-4 .max-h-50vh > div{
  margin: 0px !important;
  padding-left: var(--chatTextAreaPadLR);
  padding-right: var(--chatTextAreaPadLR);
}

.bg-background-secondary[style*="width:"] > .app-region-drag + .flex > div.px-4  .max-h-50vh  [data-editor-type="editor"] > .ProseMirror,
[class*="max-h-"] + .bg-background-secondary.max-h-50vh  [data-editor-type="editor"] > .ProseMirror,
.bg-background-secondary > .app-region-drag + .hepta-pseudo-overlay > .flex + div > div.px-4 .max-h-50vh [data-editor-type="editor"] > .ProseMirror{
  padding-left: 0px !important;
  padding-top: 4px
}

/********
! BOTTOM NAV
*********/
:root {
  --chatBtmNavBtnH:30px;
}
/*overrides*/
[class*="max-h-"] + .bg-background-secondary.max-h-50vh > div[class*="gap"] > div > div,
.bg-background-secondary > .app-region-drag + .hepta-pseudo-overlay > .flex + div > div.px-4 .max-h-50vh > div[class*="gap"] > div > div {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*container*/
.bg-background-secondary > .app-region-drag + .hepta-pseudo-overlay > .flex + div > div.px-4 .max-h-50vh > div[class*="gap"],
[class*="max-h-"] + .bg-background-secondary.max-h-50vh > div[class*="gap"]{
    padding-bottom: var(--chatTextAreaPadTopBtm) !important;
  padding-top: var(--chatTextAreaPadTopBtm) !important;
  box-shadow: 0 -1px 0 0 hsla(0,0%,50%,0.2)
  
}
.bg-background-secondary > .app-region-drag + .hepta-pseudo-overlay > .flex + div > div.px-4 .max-h-50vh > div[class*="gap"] > div,
[class*="max-h-"] + .bg-background-secondary.max-h-50vh > div[class*="gap"] > div{
  height: var(--chatBtmNavBtnH) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

/********
*********
*********
! Chat > TEXT AREA > SOURCE NOTES/BLOCKS
*********
*********
*********/



/********
*********
*********
! Chat > TEXT AREA and MESSAGE > SOURCE NOTES/BLOCKS
*********
*********
*********/
:root {
  --chatSourceBrdW: 11px;
  /**/
  --sourceNoteBlockContainer-Gap: 3px;
  --sourceNoteBlockContainer-MaxH: 92px;
  --sourceNoteBlockContainer-Transition: .15s;
  --sourceNoteBlockContainer-TransitionDelay: 1.2s;
  /**/
  --sourceNoteBlock-PadLR:3px;
  --sourceNoteBlock-MaxW: 144px;
  --sourceNoteBlock-MaxW-Hover: calc(100% - 10px);
  --sourceNoteBlock-MaxH: 17px;
  --sourceNoteBlock-Transition: .2s;
  --sourceNoteBlock-TransitionDelay: 1.2s;
  /**/
  --sourceNoteBlock-LineClamp: 100;
}
/*******
! SOURCE NOTES/BLOCKS
********/
.group\/1741383217712[class*="175"] {
  background: hsla(0, 0%, 100%, .05);
}

.group\/1741383217712[class*="175"]:hover {
  background: hsla(0, 0%, 100%, .15);
}
/*overrides*/
.app-region-drag + div [class*="--light-grey"] + div > .overflow-x-hidden .gap-y-4,
[data-is-inbox-app-panel] .pt-4 .gap-y-4 {
  gap: unset !important;
}
[data-is-inbox-app-panel] .pt-4 .gap-y-4 {
  background: hsla(214, 8%, 15%, 1.0) !important;
}

.app-region-drag + div [class*="--light-grey"] + div > .overflow-x-hidden .gap-y-4 > div:last-of-type {
  border: unset !important;
}




/*******
SOURCE NOTES/BLOCKS > CONTAINER
********/
.max-h-\[159px\].min-h-\[39px\] .flex.flex-wrap {
  gap: var(--sourceNoteBlockContainer-Gap);
}
/*SOURCE NOTES CONTAINER > ABOVE NEW MESSAGE INPUT*/
.max-h-\[159px\].min-h-\[39px\] {
  transition: var(--sourceNoteBlockContainer-Transition);

  max-height: var(--sourceNoteBlockContainer-MaxH);
  padding-right: 5px;
  box-shadow: inset 0 0 0 var(--testBrdChatW) red;
  overflow-x: hidden;
  gap: var(--sourceNoteBlockContainer-Gap);

}
/*SOURCE NOTES CONTAINER > ABOVE MESSAGES IN CHAT HISTORY*/
.group\/1741629705525 > .relative > .mb-1.ml-8 {
  box-shadow: inset 0 0 0 var(--testBrdChatW) red;
  gap: var(--sourceNoteBlockContainer-Gap);
}

.max-h-\[159px\].min-h-\[39px\]:hover {
    transition-delay: var(--sourceNoteBlock-TransitionDelay);
  --sourceNoteBlock-MaxW:100%;
      --sourceNoteBlockContainer-MaxH: 200px;



}

/*******
SOURCE NOTES/BLOCKS > ADD SOURCE BUTTON
********/
.group\/1698383979300 {
  position: sticky;
  top: 0;

  

}
/*******
SOURCE NOTES/BLOCKS > LINK > CONTAINER
********/
.group\/1741383217712 {
  transition: .2s;
  transition-delay: 1s;
  align-items: flex-start;
  border-radius: 13px !important;
  transition: .1s !important;
  overflow: unset;
  max-width: 100%;
  height: unset;
  min-width: unset;
  position: relative;

}

/*******
SOURCE NOTES/BLOCKS > LINK > TEXT
********/
.group\/1741383217712 p {
  display: -webkit-box !important;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: pre-wrap !important;
  line-height: 1.4;
  padding-top: 2px;
  /**/
  /**/
  box-shadow: inset 0 0 0 var(--testBrdChatW) green;
}



/*******
SOURCE NOTES/BLOCKS > LINK > SVG
********/
.group\/1741383217712 *:is(svg) {
  margin-top: 4px;
}
.group\/1741383217712 *:is(div) {
  top: 3px!important
}


.max-h-\[159px\].min-h-\[39px\]::-webkit-scrollbar {
  width: 8px;
}


/*remove button*/
div  > [class*="remove"]:not(.pdfViewer){
transition: .1s !important;
  right: 2px !important;
  overflow: hidden;
  transform: scale(.7) !important;
  backdrop-filter: blur(4px) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  opacity: 0;
  border-radius: 20px !important;
  background: hsla(0,0%,100%,0.1) !important;
  box-shadow: inset 0 0 0 .5px hsla(0,0%,100%,0.125);
  margin: unset !important;
  width: 14px !important;
  height: 14px !important;
}
div  > [class*="remove"]:not(.pdfViewer) svg {
  background:  transparent !important;
  backdrop-filter: unset !important;
  width: calc(100% - 20%) !important;
  height: calc(100% - 30%) !important;
  transform: unset !important;
  fill: white;
  margin: unset !important;
}
/*[class*="highlightAutoFade"] + div [class*="group"][class*="175"]:hover > [class*="remove"],
.bg-ultra-light-grey [class*="group"][class*="175"]:hover > [class*="remove"],
[data-chat-message-id] .border-light-grey[class*="175px"]:hover > [class*="remove"],*/
div:hover  > [class*="remove"]:not(.pdfViewer){
  transform: scale(1.1) !important;
  opacity: 1;
  
}
div:hover  > [class*="remove"]:not(.pdfViewer):hover{
  transform: scale(1.3) !important;
  background: hsla(0,0%,100%,0.25) !important;
}
.bg-ultra-light-grey [class*="group"][class*="175"]::-webkit-scrollbar,
.bg-ultra-light-grey [class*="group"][class*="175"]::-webkit-scrollbar-thumb,
.bg-ultra-light-grey [class*="group"][class*="175"]::-webkit-scrollbar-track{
  height: 0px !important; 
  width: 0px !important;
  --scrollbar-width:0px !important;
  --scrollbar-height:0px !important;
  border: unset !important;;
}



/********
*********
*********
! Chat > WHITEBOARD
*********
*********
*********/
[class*="whiteboard"][data-object-type="chatInstance"] [class*="_scroller"] {
  padding-top: 0px !important;
}

[class*="whiteboard"][data-object-type="chatInstance"] [class*="_scroller"] .mb-4{
  margin-bottom: 0rem !important;
  padding-bottom: 1rem !important;
}

[class*="whiteboard"][data-object-type="chatInstance"] .group\/1741629705525 .h-8 ~ [class*="ProseMirror-hepta-style"] ~ [class*="gap"]{
  position: relative;
}




/*root*/
[style*="--annotation-"] + div{
  margin-left: unset;
  padding-left: .75rem;
}


/*****************
******************
******************
******************
******************
******************
! VIEW - TAGS
******************
******************
******************
******************
******************
******************/
/*TAG GROUPS - COLOR
[data-hepta-dnd-context-id="tagGroup"] > div:first-child > p:first-child{
		color:var(--tagGroupClr);
}



*/
/*REMOVE LEFT BORDER - From sticky table view header*/
.grow > .float-left > .sticky {
		border-left: none !important
}


/*REMOVE LEFT BORDER - From first cell in each row*/
[data-hepta-dnd-context-id="tableRow"] {
		border-left: none !important;
}


/*****************
******************
******************
******************
******************
VIEW - TABLE - DATABASE
******************
******************
******************
******************/
/*TABLE - Background*/
[id*="database-table-cell"],
[id*="database-table-cell"] + div {
		background: var(--background-primary);
}

[data-hepta-dnd-is-selected="true"] [id*="database-table-cell"] {
		background: hsla(210, 77%, 51%, 0.1) !important;
}


/*ROW TITLE/NAME*/
[id*="database-table-cell"] > div > div.z-30 {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start
}

.flex-col.overflow-hidden .grow.overflow-auto.px-6 {
		padding-right: 0px;
}
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .flex {
		position: relative;
}
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .flex > .relative {
		overflow: hidden;
		overflow-x: auto;
		position: absolute;
		right: 0;
		left: 0;
		bottom: 0;
		top: 0;
}
/*****************
******************
******************
******************
******************
VIEW - TABLE - KANBAN
******************
******************
******************
******************/
:root {
		--kanbanColWidth: 325px;
		--kanbanNavHeight: 90px;
		--kanbanSVGWidth: 16px;
		--kanbanHeaderBgClr: transparent;
}
/*KANBAN CONTAINER*/
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6,
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .flex {
		height: 100% !important;
		width: 100%;
}
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 {
		padding-right: 0px;
}
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .flex {
		position: relative;
}
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .flex > .relative {
		overflow: hidden;
		overflow-x: auto;
		position: absolute;
		right: 0;
		left: 0;
		bottom: 0;
		top: 0;
}
/*KANBAN - TOP ROW - CONTAINER - STICKY*/
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .sticky[class*="13px"].z-30.flex > div {
		margin-right: 0px;
		width: var(--kanbanColWidth) !important;
		min-width: var(--kanbanColWidth) !important;
		background: transparent !important;
		border-radius: 0px !important;
		border-right: 1px solid var(--popupBrdClr);
		backdrop-filter: blur(20px)
}

/*KANBAN - TOP ROW - CONTAINER - STICKY - TEXT AND STUFF*/
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .sticky[class*="13px"].z-30.flex > div > .text-label {
		background: transparent !important;
		border: unset;
}
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .sticky[class*="13px"].z-30.flex > div > span,
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .sticky[class*="13px"].z-30.flex > div > div.ml-auto.flex.items-center > svg:last-child {
		display: none;
}
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .sticky[class*="13px"].z-30.flex > div > div.ml-auto.flex.items-center {
		position: absolute;
		z-index: 9292;
		right: 5px;
}
/*KANBAN - TOP ROW - CONTAINER - STICKY - BACKGROUND COLORS*/
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .sticky[class*="13px"].z-30.flex > div:before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: var(--kanbanHeaderBgClr);
		opacity: 1;
		z-index: -1
}

.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .sticky[class*="13px"].z-30.flex > div[style*="--bg-red-wb"] {
		--kanbanHeaderBgClr: var(--bg-red-wb);
}
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .sticky[class*="13px"].z-30.flex > div[style*="--bg-orange-wb"] {
		--kanbanHeaderBgClr: var(--bg-orange-wb);
}
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .sticky[class*="13px"].z-30.flex > div[style*="--bg-yellow-wb"] {
		--kanbanHeaderBgClr: var(--bg-yellow-wb);
}
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .sticky[class*="13px"].z-30.flex > div[style*="--bg-green-wb"] {
		--kanbanHeaderBgClr: var(--bg-green-wb);
}
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .sticky[class*="13px"].z-30.flex > div[style*="--bg-blue-wb"] {
		--kanbanHeaderBgClr: var(--bg-blue-wb);
}
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .sticky[class*="13px"].z-30.flex > div[style*="--bg-purple-wb"] {
		--kanbanHeaderBgClr: var(--bg-purple-wb);
}


/*KANBAN - COLUMN CONTAINER */
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .flex.items-start.gap-3 {
		gap: 0px !important;
		height: 100% !important;
		display: flex !important;
		flex: unset;
}
/*KANBAN - COLUMN */
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .flex.items-start.gap-3 > div {
		width: var(--kanbanColWidth) !important;
		min-width: var(--kanbanColWidth) !important;
		background: transparent !important;
		border-right: 1px solid var(--popupBrdClr);
		border-radius: 0px;
		display: flex !important;
		flex-direction: column;
		overflow: hidden auto;
		height: 100% !important;
		padding-left: 10px !important;
		padding-right: 10px !important;
}
/*KANBAN CARD*/
#root [data-hepta-dnd-context-id="kanbanCard"] {
		min-height: unset !important;
		margin: 0px !important;
		transition: .1s !important;
		background: hsla(0, 0%, 100%, .05) !important;
		-webkit-font-smoothing: antialiased;
		padding-left: 7px !important;
		padding-top: 6px;
		padding-bottom: 8px;
		gap: 7px;
}
[data-hepta-dnd-context-id="kanbanCard"]:hover {
		background: transparent !important;
}
#root [data-hepta-dnd-context-id="kanbanCard"] .clickable-overlay {
		background: transparent;
		box-shadow: none;
		border-color: transparent;
		transition: .1s;
		backdrop-filter: blur(10px)
}
#root [data-hepta-dnd-context-id="kanbanCard"] .clickable-overlay:hover {
		border-color: var(--popupBrdClr)
}

#root .flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .flex.items-start.gap-3 > div > [data-hepta-dnd-context-id="kanbanCard"]:first-child {
		margin-top: 20px !important;
}

/*KANBAN CARD - LAST IN COLUMN - MARGIN BELOW*/
.flex.w-full.flex-col.overflow-hidden .grow.overflow-auto.px-6 > .items-start > .relative > .flex.items-start.gap-3 > div > .clickable-overlay.relative.flex.cursor-pointer.select-none.items-center.rounded.px-2\.5.py-1\.5 {
		margin-bottom: 150px;
}

#root [data-hepta-dnd-context-id="kanbanCard"] > svg {
		padding-top: 0px;
		margin-top: 4px;
		opacity: 0.5;
		width: var(--kanbanSVGWidth);
		height: var(--kanbanSVGWidth);
}

/*****************
******************
PROPERTIES / 100PX
******************
******************/
:root {
		--propertyCell100pxWidth: 60px;
}
[aria-describedby*="DndDescribedBy-"][style*="width: 100px"] {
		width: var(--propertyCell100pxWidth) !important;
}

/**/
.fixed.z-dropdown-menu.shadow-property-value-menu[style*="width: 101px"] {
		width: calc(var(--propertyCell100pxWidth) + 1px) !important;
		min-width: unset;
}
[id*="database-table-cell"][style*="width: 100px"] {
		width: calc(var(--propertyCell100pxWidth) + 0px) !important;
		min-width: unset;
}

/*****************
******************
******************
******************
******************
PROPERTIES > RELATIONS
******************
******************
******************
******************/
/*relation container*/
[id*="database-table-cell"] > div.overflow-hidden > .flex.items-center {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding-top: 2px;
		padding-bottom: 2px;
		gap: 5px;
}

/*relation item > WRAPPER*/
[id*="database-table-cell"] > div.overflow-hidden > .flex.items-center > .flex:hover {
		border-radius: 4px;
		background: hsla(0, 0%, 50%, 0.15);
}
/*relation item > svg*/
[id*="database-table-cell"] > div.overflow-hidden > .flex.items-center svg {
		width: 18px;
		height: 18px;
		padding: 0px;
		padding-top: 0px;
		opacity: 0.7;
		transform: scale(0.85);
}
/*relation item > text*/
[id*="database-table-cell"] > div.overflow-hidden > .flex.items-center svg + .text-label {
		line-height: 1.375;
		box-shadow: none !important;
		outline: none !important;
		border: none !important;
		text-decoration: none;
}




/*****************
******************
******************
******************
******************
PROPERTIES > RELATION > DROPDOWN MENU
******************
******************
******************
******************/
:root {
		--relationItemPadTopBtm: 2px;
}
.z-dropdown-menu[class*="436"] .hepta-menu-item {
		height: unset;
		padding-top: var(--relationItemPadTopBtm);
		padding-bottom: var(--relationItemPadTopBtm);
		display: flex;
		align-items: flex-start;
		min-height: unset;
		padding-top: 4px;
		padding-bottom: 4px;
}
.z-dropdown-menu[class*="436"] .hepta-menu-item > svg {
		margin-top: var(--relationItemPadTopBtm);
}
.z-dropdown-menu[class*="436"] .hepta-menu-item > .truncate {
		overflow: visible;
		white-space: normal;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
}


/*****************
******************
******************
******************
******************
PROPERTIES > NEW PROPERTIE DROPDOWN
******************
******************
******************
******************/
div > div.h-screen.w-screen + .fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl:not(div > div.h-screen.w-screen + .fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl.w-62, div > div.h-screen.w-screen + .fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl.max-h-70vh, div.flex.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl) {
		min-width: 440px !important;
		background: hsla(210, 5%, 15%, 0.6);
		backdrop-filter: blur(100px)brightness(.8);
	outline: .5px solid hsla(0,0%,50%,0.3);
	border-radius: 6px;
}

/*****************
******************
******************
******************
******************
PROPERTIES > MULTI SELECT - DROPDOWN
******************
******************
******************
******************/
div > div.h-screen.w-screen + .fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl.min-w-80:not(div > div.h-screen.w-screen + .fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl.w-62, div > div.h-screen.w-screen + .fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl.max-h-70vh) {
		width: 400px !important;
		min-width: 30px !important;
}



div > div.h-screen.w-screen + .fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > div {
		overflow-x: hidden;
}
.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > .max-h-50vh {
		max-height: 93vh;
}
.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > .max-h-50vh > div > .text-primary {
		padding-top: 4px;
		padding-bottom: 4px;
}
.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > .max-h-50vh > div > .text-primary.bg-light-grey {
		background: hsla(0, 0%, 50%, .1);
}
.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > .max-h-50vh > div > .text-primary > .flex:first-child {
		font-weight: 500;
		color: var(--bldClr);
}

.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > .max-h-50vh > div > .text-primary > .flex:first-child + div[class*="gap"] {
		gap: 2px;
		margin-top: 2px;
}
.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > .max-h-50vh > div > .text-primary > .flex > .relative {
		background: hsla(0, 0%, 50%, .075);
		padding-top: 0px;
		padding-bottom: 0px;
		padding-left: 3px;
		padding-right: 3px;
		line-height: 1.4;
}
.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > .max-h-50vh > div > .text-primary > .flex > .relative:hover {
		background: hsla(0, 0%, 50%, .2)
}

/*****************
******************
WHITEBOARD - CONTEXT MENU
******************
******************/
#root ~ div .fixed.z-dropdown-menu[class*="80vh"][style*="width: 248"] {
		width: 248px !important;
}

/*****************
******************
WHITEBOARD - CONTEXT MENU - TIDY
******************
******************/
:root {
		--whiteboardTidyAdjustWidth: 100px;
}
#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div {
		position: relative;
}
#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div:after,
#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div:before {
		content: "";
		display: block;
		position: absolute;
		background: transparent;
		top: -150px;
		height: 150px;
		left: -10px;
		right: -10px;
		;
}
#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div:after {
		top: unset;
		bottom: -150px;
}

#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div > div.box-border:after,
#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div > div.box-border:before {
		content: "";
		display: block;
		position: absolute;
		background: transparent;
		top: -150px;
		bottom: -150px;
		left: -120px;
		width: 120px;
		z-index: 0;
}
#root ~ .fixed.z-dropdown-menu.backdrop-blur-2xl > div > div.box-border:before {
		left: unset;
		right: -120px;
}

/*****************
******************
TAGS DROPDOWN > MULTI SELECT
******************
******************/
.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > .max-h-70vh {
		max-height: 78vh;
}
.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > .max-h-70vh > .overflow-y-auto.py-1 {}


/*option container*/
.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > .max-h-70vh > .overflow-y-auto.py-1 > div:first-child {
		width: 100%;
		display: none;
}
.fixed.z-dropdown-menu.rounded.bg-menu-texture-bg-medium.text-label.shadow-main.backdrop-blur-2xl > .max-h-70vh > .overflow-y-auto.py-1 > div.h-8 {
		padding-top: 3px;
		padding-bottom: 3px;
		height: unset;
		margin: 0px;
}


/*****************
******************
PROPERTY > TEXT EDIT POPUP
******************
******************/
/*****************
******************
TAGS > VIEW TABS
******************
******************/
/*tab group*/
[class*="window"] + .px-6 > div > div.flex.grow > div:first-child {
		flex: 1;
}
[class*="window"] + .px-6 > div > div.flex.grow > div:first-child [aria-roledescription="sortable"] > [style*="max-width"] {
		max-width: unset !important;
}
/*hide svg
[class*="window"] + .px-6 > div > div.flex.grow > div:first-child [aria-roledescription="sortable"] svg[viewBox="0 0 14 14"]{
		display: none;
}*/
/*more button*/
[class*="window"] + .px-6 > div > div.flex.grow > [aria-roledescription="sortable"] {}

/*****************
******************
SORT DROP DOWN
******************
******************/
.queryBuilder > div.flex[class*="gap"] > div:first-child {
		width: 250px;
}

/**URL FIELD**/
[id*="database"][data-property-type="url"] a {
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;

}
[id*="database"][data-property-type="url"] [class*="group"] {
	max-height: 70px;
	overflow: hidden;
}


</style>`;

	document.head.insertAdjacentHTML("beforeend", style);
})();