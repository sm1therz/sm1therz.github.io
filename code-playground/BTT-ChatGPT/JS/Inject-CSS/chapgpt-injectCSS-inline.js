(function() {
	let style = `<style>
	
	/*****************
	! ROOT
	******************/ 
	.dark {
		/*backgrounds*/
		--bgClrMobile: hsl(0, 0%, 8%);
		--bgClr: hsl(0, 0%, 12%);
	 
		/*text*/
		--txtClrMobile: white;
		--text-primary: white;
		/*text-chatgpt*/
		--tw-prose-body: hsla(0, 0%, 90%) !important;
		/*input area*/
		--inputWrapperBrdClr: hsl(0, 0%, 50%, .4);
		/*input*/
		--inputBgClr: hsla(0, 0%, 10%);
		--inputBrdClr: hsla(0, 0%, 20%);
		--inputBrdClr-Active: hsla(0, 0%, 50%);
		/*inline-code*/
		--inlineCodeBgClr:hsla(0,0%,100%,.1);
		--inlineCodeBrdClr:hsla(0,0%,100%,.15);
		/*blockquote*/
		--blockquoteBrdClr:hsla(0, 0%, 50%, .3);
		/*blockquote button*/
		--blockquoteBtnClr-Hover:hsla(0, 0%, 50%, .6);
		--blockquoteBtnBgClr:hsla(0, 0%, 50%, .2);
	}
	
	.light {
		--inputWrapperBrdClr: hsl(0, 0%, 0%, .2);
		--txtClrMobile: black;
		--bgClrMobile: white;
		/*blockquote*/
		--blockquoteBrdClr:hsla(0, 0%, 50%, .3);
		/*blockquote button*/
		--blockquoteBtnBgClr: ;
		--blockquoteBtnBgClr-Hover: ;
	}
	
	nav {
		border-right: 1px solid hsl(0, 0%, 50%, .3);
	}
	/***********
	************
	! EDITOR
	************
	************/
		[role="presentation"],
		div[class*="bg-token-surface-primary pl-1 dark:bg-token-surface-secondary"],
		div[class*="flex w-full items-center justify-center bg-token-surface-primary py-1"],
		.bg-token-main-surface-primary{
			background: var(--bgClr) !important;
		}
	
	.dark .dark\:bg-gray-800 {
		background: var(--bgClrMobile)
	}
	
	
	/***********
	************
	! INLINE CODE
	************
	************/
	.markdown.prose ol li code,
	.markdown.prose ul li code,
	.markdown.prose p code{
	
		box-shadow: 0 0 0 1px var(--inlineCodeBgClr);
		border-radius: 2px;
	}
	/***********
	************
	! BLOCKQUOTE
	************
	************/
	.markdown.prose blockquote {
		margin-top: 15px;
		margin-bottom: 15px;
		border: 1px solid var(--blockquoteBrdClr);
		border-radius: 6px;
		border-left-width: 10px;
		position: relative;
	}
	
	
	
	/***********
	************
	BLOCKQUOTE > BUTTON (Added via userscript) > COPY CONTENT
	************
	************/
	
	.markdown.prose blockquote > button.copy-blockquote{
		opacity: .6;
		background: transparent;
		border: 1px solid transparent !important;
		transition: .1s;
		-webkit-font-smoothing:subpixel-antialiased;
		font-weight: 400;
		padding: 1px 4px 3px 4px!important;
		color: var(--blockquoteBrdClr)
	}
	.markdown.prose blockquote:hover > button.copy-blockquote{
		opacity: 1;
	}
	.markdown.prose blockquote:hover > button.copy-blockquote:hover {
		background:var(--blockquoteBtnBgClr);
		color:var(--blockquoteBtnClr-Hover)
	}
	
	
	/***********
	************
	SHARED
	************
	************/
	[data-testid*="conversation-turn"] .agent-turn .font-semibold.select-none {
		user-select: none !important;
	}
	
	[data-testid*="conversation-turn"] svg.icon-sm > text {
		display: none;
	}
	
	/***********
	************
	EDITOR > CODE BLOCKS
	************
	************/
	
	.markdown.prose .bg-black > .p-4,
	.markdown.prose code {
		overflow-x: hidden !important;
	}
	
	.markdown.prose code[class*="!whitespace-pre"] {
		white-space: pre-wrap !important;
	}
	.markdown.prose pre {
		border: 1px solid var(--blockquoteBrdClr);
	}
	
	
	/***********
	************
	! TEXT AREA > Make Taller
	************
	************/
	
	/*text area wrapper*/
	form.stretch {
		padding-top: 10px
	}
	
	
	/*add border to top of text area wrapper*/
	[role="presentation"] > div.w-full {
		border-top: 1px solid hsla(0,0%,50%,.2);
		padding-top: 10px;
	}
	/*text area overrides*/
	div > form div[class*="has(textarea:focus)]"] {
		box-shadow: none !important;
		padding: 2px;
		border: none;
		border-radius: 0px !important;
	}
	/*Text area wrapper*/
	[role="presentation"] .flex.w-full.items-center > .flex.w-full.flex-col{
		padding-top: 0px;
		padding-bottom: 0px;
	}
	/* text area*/
	#prompt-textarea {
		max-height: 70vh !important;
		padding-top: 5px;
		padding-bottom: 5px;
		min-height: 50px
		/*box-shadow: inset 0 0 0 1px var(--inputBrdClr) !important;*/
	}
	
	/*Text area BUTTOMS*/
	[role="presentation"] .flex.w-full.items-center > .flex.w-full.flex-col button {
		margin-bottom: 10px !important;
	}
	
	#prompt-textarea::-webkit-scrollbar {
		width: 0px;
	}
	#prompt-textarea::-webkit-scrollbar-thumb{
		background: hsla(0,0%,50%,.15)
	}
	#prompt-textarea{
		overflow: auto;
	}
	
	.absolute.bottom-0 form > div > div > div.flex {
		border-color: var(--inputWrapperBrdClr);
	}
	
	/*attach files button*/
	button[aria-label="Attach files"] {
		top: -2px !important;
	}
	/***********
	************
	! LEFT SIDEBAR
	************
	************/
	:root {
		--leftSideBarWidth: 320px;
		--leftSideBarLinkPad:.5rem;
	}
	#__next > div [style*="260"],
	#__next > div > [style*="260"] > .w-\[260px\] {
		width: var(--leftSideBarWidth) !important;
	}
	
	
	#__next > div [style*="260"] li a div {
		white-space: normal;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	#__next > div [style*="260"] li a + div.absolute {
		display: flex;
		align-items: flex-start;
		top: var(--leftSideBarLinkPad)
	}
	#__next > div [style*="260"] li a + div.absolute span {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	/***********
	************
	! MOBILE
	************
	************/
	:root {
		--font-size: .965rem;
		--line-height: 1.5;
	}
	
	
	
	@media (max-width: 700px) {
		/*background color*/
		[role="presentation"],
		div[class*="bg-token-surface-primary pl-1 dark:bg-token-surface-secondary"],
		div[class*="flex w-full items-center justify-center bg-token-surface-primary py-1"],
		.bg-token-main-surface-primary{
			background: var(--bgClrMobile) !important;
		}
		.prose,
		.text-base{
			font-size: var(--font-size);
			line-height: var(--line-height);
		}
		.prose pre {
			border: 1px solid red;
			font-size: calc(var(--font-size) - 2.5px);
			line-height: var(--line-height);
		}
	
		/*chat container */
		[data-testid*="conversation-turn"] > div {
			padding-left: 5px !important;
			padding-right: 5px;
		}
		.react-scroll-to-bottom--css-ranco-1n7m0yu {
			padding-right: 0px !important;
			overflow: auto;
		}
	
		/*container - gap between user thumbnail and text*/
		.group.w-full > div > div.gap-4 {
			gap: .5rem;
		}
	
		/*container - left column - flex-grow*/
		.group.w-full > div > div.gap-4 > div.gap-1 {
			flex: 1;
		}
		.text-base {
		}
	
		/*container - padding*/
		.group.w-full > div.p-4 {
			padding: .5rem
		}
		.prose :where(li):not(:where([class~=not-prose] *)),
		.prose :where(p):not(:where([class~=not-prose] *)){
			margin-bottom: .75em;
			margin-top: .75em;
		}
		.prose :where(.prose>:first-child):not(:where([class~=not-prose] *)){
			margin-top: .25rem;
		}
		
		.group.w-full > div > div > div[class*="flex-shrink-0"] > div > div {
			height: 20px !important;
			width: 20px !important;
			margin-top: 3px;
		}
	}

</style>`;

	document.head.insertAdjacentHTML("beforeend", style);
})();