// ==UserScript==
// @name         INJECT RAINDROP
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Injects Raindrop CSS
// @author       RSM
// @match        https://app.raindrop.io/my*
// @grant        GM_addElement
// ==/UserScript==
(function() {
  let style = `<style>
  
[data-theme="night"] {
    /*text-colors*/
    /*whites*/
    --color--wht--100-percent: hsl(0, 0%, 100%, 1);
    --color--wht--90-percent: hsl(0, 0%, 100%, .9);
    --color--wht--80-percent: hsl(0, 0%, 100%, .8);
    --color--wht--70-percent: hsl(0, 0%, 100%, .7);
    --color--wht--60-percent: hsl(0, 0%, 100%, .6);
    --color--wht--50-percent: hsl(0, 0%, 100%, .5);
    --color--wht--40-percent: hsl(0, 0%, 100%, .4);
    --color--wht--30-percent: hsl(0, 0%, 100%, .3);
    --color--wht--20-percent: hsl(0, 0%, 100%, .2);
    --color--wht--10-percent: hsl(0, 0%, 100%, .10);
    --color--wht--05-percent: hsl(0, 0%, 100%, .05);
    --color--wht--025-percent: hsl(0, 0%, 100%, .025);
    /*blacks*/
    --color--blk--100-percent: hsl(0, 0%, 0%, 1);
    --color--blk--90-percent: hsl(0, 0%, 0%, .9);
    --color--blk--80-percent: hsl(0, 0%, 0%, .8);
    --color--blk--70-percent: hsl(0, 0%, 0%, .7);
    --color--blk--60-percent: hsl(0, 0%, 0%, .6);
    --color--blk--50-percent: hsl(0, 0%, 0%, .5);
    --color--blk--40-percent: hsl(0, 130%, 0%, .4);
    --color--blk--30-percent: hsl(0, 0%, 0%, .3);
    --color--blk--20-percent: hsl(0, 0%, 0%, .2);
    --color--blk--10-percent: hsl(0, 0%, 0%, .1);
    --color--blk--05-percent: hsl(0, 0%, 0%, .05);
    --color--blk--025-percent: hsl(0, 10%, 0%, .025);
    /*GREYS*/
    --color--grey--50-percent: hsl(0, 0%, 50%, .5);
    /*COLORS*/
    --color--tag: hsl(40, 0%, 55%);
    --color--tag--hover: hsl(40, 52%, 71%);
    --color--tagBrd--hover: hsl(40, 52%, 71%,.5);
    --color--tag--hover--50: hsl(40, 0%, 61%, .25);
    /*CONTRAST*/
    --color--contrast: hsl(0, 0%, 100%);
  
  
    /*backgrounds*/
    --bg--transparent: transparent;
    --bg--active--blue: hsl(207, 80%, 49%);
    --bg--main-background: hsl(228, 3%, 10%);
    --bg--main-background-header: hsl(228, 3%, 17%, .5);
    --editBoxBG: hsl(0, 0%, 7%);
    --editBoxBgFocus: hsl(0, 0%, 10%);
      --aboutBgClr:var(--color--blk--20-percent);
  
    /*SEARCH*/
    --search--bg-clr: hsl(218, 5%, 18%);
  
    /*FOOTER*/
    --footer--bg-clr: hsl(228, 3%, 38%, .5);
    --footer--txt-clr: hsl(228, 0%, 90%);
    --footer--border-clr: hsl(228, 3%, 80%, .2);
  
    /*border-colors*/
    --border-color--75-percent: hsl(0, 0%, 75%);
    --editBoxBrdClr: hsl(0, 0%, 50%, .4);
    --editBoxBrdClrFocus: hsl(0, 0%, 50%, .4);
      /*masonry cards*/
      --gridbookmarkBgClr:hsla(228,3%,17%,1);
      --gridbookmarkBrdClr:hsl(0, 0%, 0%, 1);
      /*masonry cards - right clicked*/
      --gridbookmarkBgClr-RightClick:hsla(211, 100%, 50%, 1);
      --gridbookmarkBrdClr-RightClick:var(--gridbookmarkBgClr-Selected);
      --gridbookmarkTxtClrPrimary-RightClick:hsla(211, 0%, 100%, 1);
      --gridbookmarkTxtClrSecondary-RightClick:hsla(211, 0%, 100%, 0.8);
      /*masonry cards - SELECTION*/
      --gridbookmarkBgClr-Selected: hsla(215, 100%, 60%, 0.2);
      --gridbookmarkBrdClr-Selected:hsl(215, 100%, 67%,0.5);
    /*Action Menu Buttons*/
      --actionBtnBgClr:hsla(228,3%,29%,0.6);
      --actionBtnBgClr-Hover:hsla(228,3%,12%,0.7);
      --actionBtnBrdClr:hsla(228,3%,27%,.6);
      --actionBtnBrdClr-Hover:hsla(228,3%,37%,.6);
      --actionBtnClr:hsl(0, 0%, 95%);
      --actionBtnClr-Hover:hsl(0, 0%, 100%);
  }
  
  [data-theme="day"] {
    /*text-colors*/
    /*whites*/
    --color--wht--100-percent: hsl(0, 0%, 100%, 1);
    --color--wht--90-percent: hsl(0, 0%, 100%, .9);
    --color--wht--80-percent: hsl(0, 0%, 100%, .8);
    --color--wht--70-percent: hsl(0, 0%, 100%, .7);
    --color--wht--60-percent: hsl(0, 0%, 100%, .6);
    --color--wht--50-percent: hsl(0, 0%, 100%, .5);
    --color--wht--40-percent: hsl(0, 0%, 100%, .4);
    --color--wht--30-percent: hsl(0, 0%, 100%, .3);
    --color--wht--20-percent: hsl(0, 0%, 100%, .2);
    --color--wht--10-percent: hsl(0, 0%, 100%, .10);
    --color--wht--05-percent: hsl(0, 0%, 100%, .05);
    --color--wht--025-percent: hsl(0, 0%, 100%, .025);
    /*blacks*/
    --color--blk--100-percent: hsl(0, 0%, 0%, 1);
    --color--blk--90-percent: hsl(0, 0%, 0%, .9);
    --color--blk--80-percent: hsl(0, 0%, 0%, .8);
    --color--blk--70-percent: hsl(0, 0%, 0%, .7);
    --color--blk--60-percent: hsl(0, 0%, 0%, .6);
    --color--blk--50-percent: hsl(0, 0%, 0%, .5);
    --color--blk--40-percent: hsl(0, 0%, 0%, .4);
    --color--blk--30-percent: hsl(0, 0%, 0%, .3);
    --color--blk--20-percent: hsl(0, 0%, 0%, .2);
    --color--blk--10-percent: hsl(0, 0%, 0%, .1);
    --color--blk--05-percent: hsl(0, 0%, 0%, .05);
    --color--blk--025-percent: hsl(0, 0%, 0%, .025);
    /*GREYS*/
    --color--grey--50-percent: hsl(0, 0%, 50%, .5);
    /*COLORS*/
    --color--tag: hsl(207, 80%, 49%);
    --color--tag--hover: hsl(207, 80%, 59%);
    --color--tag--hover--50: hsl(207, 80%, 59%, .5);
    /*CONTRAST*/
    --color--contrast: hsl(0, 0%, 0%);
  
    /*backgrounds*/
    --bg--transparent: transparent;
    --bg--active--blue: hsl(207, 80%, 49%);
    --bg--main-background: white;
    --bg--main-background-header: hsl(228, 0%, 100%, .5);
    --editBoxBG: hsl(0, 0%, 94%);
  
    /*SEARCH*/
    --search--bg-clr: hsl(218, 5%, 14%);
  
    /*FOOTER*/
    --footer--bg-clr: hsl(228, 3%, 17%, .2);
    --footer--txt-clr: hsl(228, 0%, 90%);
    --footer--border-clr: hsl(228, 3%, 40%, .5);
  
    /*border-colors*/
    --border-color--75-percent: hsl(0, 0%, 75%);
    --editBoxBrdClr: hsl(0, 0%, 75%);
  }



  
  /********
  *********
  *********
  APP CONTAINER
  *********
  *********
  *********/
  
  *{
      box-sizing: border-box;
  }
  
  #react{
      overflow: hidden;
  }
  /********
  *********
  *********
  BACKGROUNDS
  *********
  *********
  *********/
  .svMain,
  .header-Tqac[data-fancy=true],
  .header-Tqac[data-solid=true],
  .footer-jiX_,
  .tabs-WJR9,
  .svReader {
    background: var(--bg--main-background);
  }
  
  
  /********
  *********
  *********
  TOP HEADER
  *********
  *********
  *********/
  /*TOP HEADER*/
  .header-Tqac.svMainHeader {
    width: 100%;
    -webkit-backdrop-filter: blur(20px);
    position: sticky;
    top: 0;
  }
  
  /*SECTION HEADERS*/
  .header-Tqac.header-BQ_V {
    width: 100%;
    -webkit-backdrop-filter: blur(20px);
  }
  
  /*MAIN AREA*/
  .bookmarks-hMDW > .item-K3tx:first-child .scroll-IT9j>.masonry-Z6Qr {
    margin-top: 60px;
  }
  
  /********
  *********
  *********
  MASONRY / WATERFALL
  *********
  *********
  *********/
  /*GRID GAPS*/
  /*Padding - Above all bookmarks*/
  .masonry-Z6Qr .item-K3tx {
    margin-top: 10px !important;
  }
  
  
  /*Border - Light Theme - Around Bookmarks*/
  .masonry-Z6Qr .element-DxJD {
    border: 1px solid var(--color--blk--20-percent);
    border-radius: 5px !important;
  }
  
  /*Border - Dark Theme - Around Bookmarks*/
  [data-theme="night"] .masonry-Z6Qr .element-DxJD {
    border: 1px solid var(--color--blk--100-percent);
    box-shadow: 0 0 0 0.5px black;
  }
  
  /*Background - Dark Theme - About Section*/
  [data-theme="night"] .masonry-Z6Qr .about-X3Q4 {
    background: var(--color--blk--10-percent);
  }
  
  .masonry-hCrE .permalink-Wc76 {
    box-shadow: none !important;
  }
  
  
  /*GRID*/
  #react .masonry-Z6Qr main{
      grid-auto-rows: unset !important;
  }
  @media (max-width:700px){
  .masonry-Z6Qr main {
      padding-left: 5px;
      padding-right:5px;
  }
      }
  
  /********
  *********
  *********
  CARDS
  *********
  *********
  *********/
  
  :root {
      --aboutPadLR:10px;
  }
  
  /*CARD > CONTAINER*/
  .masonry-Z6Qr .item-K3tx {
      position: relative !important;
      display: inline !important;
      outline-offset: 0px;
      overflow: hidden;
      margin: unset !important
  }
  
  /********
  *********
  *********
  CARD - COLORS
  *********
  *********
  *********/
  #react [class*="masonry"] [role="listitem"]{
      background: var(--gridbookmarkBgClr) ;
      border: 1px solid var(--gridbookmarkBrdClr) !important;
      box-shadow: none;
  }
  
  
  /********
  *********
  *********
  CARD - COLORS - SELECTED
  *********
  *********
  *********/
  #react [class*="masonry"] [role="listitem"].checked-JJLX{
      --gridbookmarkBgClr:var(--gridbookmarkBgClr-Selected) !important;
      --gridbookmarkBrdClr:var(--gridbookmarkBrdClr-Selected)
  }
  /********
  *********
  *********
  CARD - COLORS - RIGHT CLICKED
  *********
  *********
  *********/
  #react [class*="masonry"] [role="listitem"]:focus-within:not(.selectModeEnabled-RiCw){
      --gridbookmarkBgClr:var(--gridbookmarkBgClr-RightClick) !important;
      --gridbookmarkBrdClr:var(--gridbookmarkBrdClr-RightClick);
      --primary-text-color:var(--gridbookmarkTxtClrSecondary-RightClick);
      --secondary-text-color:var(--gridbookmarkTxtClrSecondary-RightClick);
      --color--tag:var(--gridbookmarkTxtClrSecondary-RightClick);
      --color--tag--hover--50:var(--gridbookmarkTxtClrSecondary-RightClick);
      color:var(--gridbookmarkTxtClrPrimary-RightClick)
      
  }
  
  /*CARD > CONTAINER > ELEMENT CONTAINER*/
  #react [class*="masonry"] .about-X3Q4{
      background:var(--aboutBgClr) !important;
      background:transparent !important;
      z-index: 2;
      padding:0px !important;
      row-gap: calc(var(--aboutPadLR) * 0.7) !important;
      bottom: 0;
      left: 0;
      right:0;
      padding-bottom: calc(var(--aboutPadLR) * 1) !important
  }
  
  /*CARD > ELEMENTS > PADDING*/
  
  #react [class*="masonry"] [class*="about"] > div{
      padding-left:var(--aboutPadLR) !important;
      padding-right:var(--aboutPadLR) !important;
      margin: 0px;
  }
  /*CARD > ELEMENTS*/
  #react [class*="masonry"] [class*="about"] > [class*="title"]{
      font-size: 1.1em;
      line-height: 1.2;
      margin-top:calc(var(--aboutPadLR) * .75) !important;
  }
  
  #react [class*="about"] [class*="note"] ul{
   gap:2px;   
  }
  #react [class*="about"] [class*="note"] ul li,
  #react [class*="about"] [class*="note"] ol li{
      position: relative;
      display: block;
  }
  #react [class*="about"] [class*="note"] ul li:before{
      content: "";
      position: absolute;
      display: block;
      left: calc(var(--aboutPadLR) * -1.2);
      top: 10px;
      width:7px;
      height:2px;
      background:var(--color--contrast);
      opacity: .5;
      border-radius: 10px;
      z-index: 94949;
  }
  .masonry-Z6Qr .about-X3Q4,
  .masonry-Z6Qr .about-X3Q4 .description-G1ZJ{
      row-gap:  calc(var(--aboutPadLR) * 0.7) !important;
      display: flex;
      flex-direction: column;
  }
  .masonry-Z6Qr .about-X3Q4 > div,
  .masonry-Z6Qr .about-X3Q4 .description-G1ZJ > div{
      box-shadow: inset 0 0 0 0px;
  }
  .masonry-Z6Qr .highlight-W3gu {
      margin: 0px !important; 
  }
  
  #react [class*="masonry"] [class*="about"] > div.info-drai{
      width:100%;
      align-items: center;
  
  }
  #react [class*="masonry"] [class*="about"] > div:last-of-type{
  }
  .masonry-hCrE .info-drai >section {
      font-size: 12px;
          align-items: center;
      display: flex;
  }
  
  
  /*CARD - ACTIVE*/
  .element-DxJD.active-nOan {
    background: var(--bg--active--blue) !important;
  }
  
  .element-DxJD.active-nOan .title-yyxF {
    color: var(--color--wht--100-percent) !important;
  }
  
  .element-DxJD.active-nOan .description-G1ZJ {
    color: var(--color--wht--80-percent) !important;
  }
  
  .element-DxJD.active-nOan .info-drai,
  .element-DxJD.active-nOan .info-drai * {
    color: var(--color--wht--60-percent) !important;
  }
  
  /********
  *********
  *********
  HIDE SHOW OPTIONS
  *********
  *********
  *********/
  #react [class*="masonry"].hide-tags [class*="tags"]{
      display: none;
  }
  
  
  /********
  *********
  *********
  HIGHLIGHTS
  *********
  *********
  *********/
  .masonry-Z6Qr .text-jxj0:before {
    top: 0;
    left: 0;
    bottom: 0;
    border-radius: 0px;
    border-right: 1px solid var(--color--blk--05-percent);
  }
  
  .highlights-gNLm .text-jxj0:before {
    width: 2px;
    left: -10px;
  }
  
  [data-theme="day"] .highlights-gNLm .text-jxj0:before {
    box-shadow: 0 0 0 1px var(--color--blk--20-percent);
  }
  
  [data-theme="night"] .highlights-gNLm .text-jxj0:before {
    box-shadow: 0 0 0 1px var(--color--blk--20-percent);
  }
  
  /*MARGIN BELOW HIGHLIGHTS SECTION*/
  .highlights-EOy7 {
    margin-bottom: 3px;
  }
  
  /*SHOW ALL LINES OF HIGHLIGHT*/
  .highlights-EOy7 .highlight-W3gu {
    -webkit-line-clamp: unset;
  }
  
  /*HIGHLIGHTS CONAINER*/
  .highlights-gNLm {
    box-shadow: none;
  }
  
  /*HIGHLIGHT - LIGHT-THEME*/
  .highlight-W3gu {
    background: var(--color--blk--025-percent);
    border-radius: 3px;
    padding-top: 3px;
    padding-bottom: 5px;
  
    padding-right: 4px;
    border: 1px solid var(--color--blk--05-percent);
    overflow: hidden;
  }
  
  /*HIGHLIGHT - DARK-THEME*/
  [data-theme="night"] .highlight-W3gu {
    background: var(--color--wht--025-percent);
    border-color: var(--color--wht--10-percent);
  }
  
  /*RED*/
  [data-theme="night"] .highlight-W3gu[style*="--highlight-color: red"] {
    background: hsl(0, 100%, 60%, 0.33) !important
  }
  
  /*Yello*/
  [data-theme="night"] .highlight-W3gu[style*="--highlight-color: yellow"] {
    background: hsl(57, 100%, 50%, 0.13) !important;
  }
  
  /*Blue*/
  [data-theme="night"] .highlight-W3gu[style*="--highlight-color: blue"] {
    background: hsl(222, 100%, 60%, 0.33) !important;
  }
  
  /*Green*/
  [data-theme="night"] .highlight-W3gu[style*="--highlight-color: green"] {
    background: hsl(110, 100%, 50%, 0.23) !important
  }
  
  
  /*HIGHLIGHT - ACTIVE*/
  .element-DxJD.active-nOan .highlight-W3gu {
    border-color: var(--color--wht--10-percent);
    background: var(--color--wht--10-percent);
  }
  
  /********
  *********
  *********
  HIGHLIGHT WRAPPER
  *********
  *********
  *********/
  .items-wzRe {
    padding-right: 10px !important;
    padding-left: 10px;
  }
  
  .item-Dg4A {
    position: relative;
    width: 100%;
    max-width: 100%;
    gap: 0px;
    border: 0px !important;
    box-shadow: 0px !important;
    margin-top: 10px;
    border-radius: 5px;
  }
  
  .highlights-gNLm> :not(:first-child) {
    box-shadow: none;
  }
  
  
  /*HIGHLIGHT WRAPPER*/
  [data-theme="day"] .highlights-gNLm .item-Dg4A {
    background: var(--color--wht--100-percent);
    border: 1px solid rgba(0, 0, 0, .1) !important;
  }
  
  [data-theme="night"] .highlights-gNLm .item-Dg4A {
    background: var(--color--wht--10-percent);
    border: 1px solid black !Important;
  }
  
  /********
  *********
  *********
  HIGHLIGHT
  *********
  *********
  *********/
  .highlights-gNLm .item-Dg4A>div[class*="text"] {
    padding-left: 10px;
    margin-left: 10px;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif !important;
    -webkit-font-smoothing: subpixel-antialiased !important;
    font-style: italic;
  }
  
  /********
  *********
  *********
  ANNOTATIONS
  *********
  *********
  *********/
  .highlights-gNLm .item-Dg4A>.footer-N45X {
    padding-bottom: 0px;
  }
  
  .highlights-gNLm .item-Dg4A>.footer-N45X Textarea {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid var(--color--grey--50-percent);
    margin-left: 20px;
    position: relative;
  }
  
  .highlights-gNLm .item-Dg4A>.footer-N45X Textarea:empty {
    border-top: 0px !important;
    margin-top: 5px;
    padding-top: 0px;
  }
  
  /*BUTTONS*/
  .highlights-gNLm .item-Dg4A>.footer-N45X .buttons-gRcy {
    position: absolute;
    bottom: 0.4rem;
    right: 0.4rem;
    gap: 0;
    z-index: 3;
  }
  
  .created-JMGD {
    z-index: -1;
    white-space: nowrap;
  }
  
  /*COLOR BUTTON WRAPPER*/
  /*MAKE ACTIVE COLOR VISIBLE*/
  .highlights-gNLm .item-Dg4A>.footer-N45X .buttons-gRcy .colors-K33q {
    bottom: 0;
    cursor: pointer !important;
  }
  
  .highlights-gNLm .item-Dg4A>.footer-N45X .buttons-gRcy .colors-K33q .button-dQdc[data-active="true"] {
    order: 9;
  }
  
  .highlights-gNLm .item-Dg4A>.footer-N45X .buttons-gRcy .button-dQdc {
    padding-left: 4px;
    padding-right: 4px;
  }
  
  /*DELETE BUTTON*/
  .highlights-gNLm .item-Dg4A>.footer-N45X .buttons-gRcy .colors-K33q .button-dQdc[title="Remove highlights"] {}
  
  /********
  *********
  *********
  IN PAGE HIGHLIGHTS
  *********
  *********
  *********/
  html mark[data-rdhid] {
    background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)) !important;
  }
  
  html mark[data-rdhid][style*="green"] {
    text-decoration-color: hsl(121, 100%, 25%, .3) !important;
      text-decoration: underline;
    text-decoration-color: inherit;
    text-underline-offset: 3px;
    text-decoration-thickness: 2.5px;
  }
  
  /********
  *********
  *********
  TAGS
  *********
  *********
  *********/
  :root{
      --tagBrdWidth:1px;
      --tagBrdRad:3.5px;
  }
  /*HIDE #*/
  .masonry-hCrE .tags-J0JZ>a>span[class*="icon"] {
    display: none;
  }
  
  .masonry-hCrE .tags-J0JZ {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      row-gap: 3px;
      column-gap: 3px;
  }
  
  
  .masonry-hCrE .tags-J0JZ>a {
    color: var(--color--tag);
    font-size: .3rem;
    line-height: 1 !important;
    padding: 1.5px 3px 1.5px 3px;
    border-radius:var(--tagBrdRad);
    box-shadow: none;
      border: var(--tagBrdWidth) solid var(--color--tag--hover--50);
    text-decoration: none !important;
      margin: 0px;
      transition: .05s;
  }
  [data-theme="day"] .active-nOan .tags-J0JZ>a {
    color: var(--color--wht--70-percent);
    box-shadow: inset 0 0 0 1px var(--color--wht--30-percent);
  }
  
  .masonry-hCrE .tags-J0JZ>a:hover {
      border-color: var(--color--tagBrd--hover);
    color: var(--color--tag--hover);
    background: var(--color--tag--hover--50);
      --tagBrdWidth:1.2px;
      --tagBrdRad:3px;
  }
  
  
  
  
  /*****
  *****
  ***** 
  SELECT BUTTON
  *****
  *****
  ******/
  /*NORMAL STATE*/
  .header-Tqac.header-BQ_V+.scroll-IT9j .element-DxJD .select-BIuO,
  .header-Tqac.header-BQ_V+.scroll-IT9j .element-DxJD .select-BIuO * {
    cursor: pointer !important;
  }
  
  .header-Tqac.header-BQ_V+.scroll-IT9j .element-DxJD .select-BIuO {
    opacity: .2;
    transition: .1s;
  }
  
  /*NORMAL STATE - HOVERING*/
  .header-Tqac.header-BQ_V+.scroll-IT9j .element-DxJD:hover .select-BIuO {
    opacity: .2;
  }
  
  .header-Tqac.header-BQ_V+.scroll-IT9j .element-DxJD:hover .select-BIuO:hover {
    opacity: 1;
  }
  
  /*WHEN SELECTING*/
  .header-Tqac+.scroll-IT9j .element-DxJD .select-BIuO {
    display: flex;
    opacity: 1;
    transition: .1s;
    box-shadow: inset 0 0 0 1px hsl(218, 61%, 51%);
    top: 5px;
    left: 5px;
    border-radius: 5px;
    height: 20px !important;
    width: 20px !important;
  }
  
  /*WHEN SELECTING - CHECKED/SELECTED*/
  /*NEW CHECKBOX*/
  .header-Tqac+.scroll-IT9j .element-DxJD.checked-JJLX .select-BIuO {
    background: hsl(215, 100%, 51%);
  }
  
  .header-Tqac+.scroll-IT9j .element-DxJD.checked-JJLX .select-BIuO:before {
    transform: scale(.5);
  }
  
  .select-BIuO:before {
    content: url('data:image/svg+xml;utf8,<svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.7448 7.91405C26.9424 7.11166 25.6415 7.11166 24.8391 7.91404L13.48 19.2732C13.2421 19.511 12.8566 19.511 12.6187 19.2732L7.70648 14.3609C6.90381 13.5583 5.60243 13.5583 4.79976 14.3609C3.99709 15.1636 3.99709 16.465 4.79976 17.2677L11.5942 24.0622C11.8884 24.3563 12.2495 24.5427 12.6285 24.6212C13.284 24.7576 13.9931 24.5714 14.5019 24.0627L27.7448 10.8197C28.5472 10.0174 28.5472 8.71643 27.7448 7.91405Z" fill="%23ffffff"/></svg>');
    display: block;
    width: 33px;
    height: 33px;
    position: absolute;
    z-index: 1;
    transform: scale(0);
    transition: 350ms cubic-bezier(.25, 2.9, .11, .4);
  }
  
  /*Whole bookmark */
  .header-Tqac+.scroll-IT9j .element-DxJD.checked-JJLX {
    border: none;
    box-shadow: 0 0 0 0.5px hsl(218, 61%, 51%);
  }
  
  /*overlay*/
  .element-DxJD.checked-JJLX .permalink-Wc76,
  .element-DxJD.checked-JJLX:hover .permalink-Wc76 {
    background-color: hsla(211, 100%, 50%, 0.2) !important;
  }
  
  /*SELECT BUTTON - CHECKBOX*/
  .select-BIuO input {
    opacity: 0;
  }
  
  
  /********
  *********
  *********
  ACTIONS MENU
  *********
  *********
  *********/
  
  :root{
      --actionBtnPosition:.3rem;
      --actionBtnBrdRad:5px;
  }
  #react [role="listitem"] [class*="actions"]{
      transition: 190ms cubic-bezier(.7, 1.5, 0, .95);
      display: grid;
      transform: scale(0.9);
      transform-origin: right top;
      top: var(--actionBtnPosition);
      Right: var(--actionBtnPosition);
  }
  
  #react  [role="listitem"]:hover .actions-iba3 {
      transform: scale(1);
      opacity: 1;
  
  }
  
  /********
  *********
  *********
  ACTIONS MENU - Buttons
  *********
  *********
  *********/
  
  
  #react [role="listitem"] [class*="actions"] > a,
  #react [role="listitem"] [class*="actions"] > [role="button"]{
      border-radius: var(--actionBtnBrdRad);
      transition: 140ms cubic-bezier(.7, 1.5, 0, .95);
      background: var(--actionBtnBgClr) !important;
      box-shadow: inset 0 0 0 .75px var(--actionBtnBrdClr);
      color: var(--actionBtnClr);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      opacity: 0;
      
  }
  #react  [role="listitem"]:hover .actions-iba3 > a,
  #react  [role="listitem"]:hover .actions-iba3 > [role="button"]{
      opacity: 1;
  }
  
  #react [role="listitem"] [class*="actions"] > a:hover,
  #react [role="listitem"] [class*="actions"] > [role="button"]:hover {
      background: var(--actionBtnBgClr-Hover) !important;
      --actionBgClr:red !important;
      --actionBtnBrdClr:var(--actionBtnBrdClr-Hover);
      --actionBtnClr:var(--actionBtnClr-Hover)
  }
  /********
  *********
  *********
  COLORS RIGHT CLICK
  *********
  *********
  *********/
  .element-DxJD:focus-within:not(.selectModeEnabled-RiCw){
      
  }
  
  /*POPUP MENU*/
  /*MAKE IMAGE STAND OUT*/
  article .actions-wrq5 a[data-button="current_tab"][href*="api.raindrop.io"]~a[data-button="preview"],
  article .actions-wrq5 a[data-button="current_tab"][href*="jpg"]~a[data-button="preview"],
  article .actions-wrq5 a[data-button="current_tab"][href*="jpeg"]~a[data-button="preview"],
  article .actions-wrq5 a[data-button="current_tab"][href*="png"]~a[data-button="preview"],
  article .actions-wrq5 a[data-button="current_tab"][href*="mp4"]~a[data-button="preview"],
  article .actions-wrq5 a[data-button="current_tab"][href*="gif"]~a[data-button="preview"] {
    background: var(--color--tag--hover) !important;
    box-shadow: 0 0 0 1px var(--color--tag--hover--50) !important;
    z-index: 3939393;
    cursor: pointer;
    transition: 1s;
  }
  
  
  /*HOVER BACKGROUND*/
  article:hover [class*="permalink"]{
      background: hsla(200, 0%, 65%, .075) !important;
          backdrop-filter: contrast(1)brightness(1.1);
  }
  
  /*HOVER BACKGROUND*/
  article:hover [class*="permalink"][href*="api.raindrop.io"],
  article:hover [class*="permalink"][href*="jpg"],
  article:hover [class*="permalink"][href*="jpeg"],
  article:hover [class*="permalink"][href*="png"],
  article:hover [class*="permalink"][href*="mp4"],
  article:hover [class*="permalink"][href*="gif"]{
      background: hsla(236, 100%, 66%, 0.3) !important;
      box-shadow: inset 0 0 0 .25px hsla(236, 100%, 86%, 0.4) !important;
      backdrop-filter: contrast(1.05)brightness(1.1);
  }
  
  /*ONLY CLICK PREVIEW
  article .actions-wrq5 a[data-button="current_tab"][href*="api.raindrop.io"]~a[data-button="preview"]:before,
  article .actions-wrq5 a[data-button="current_tab"][href*="jpg"]~a[data-button="preview"]:before,
  article .actions-wrq5 a[data-button="current_tab"][href*="jpeg"]~a[data-button="preview"]:before,
  article .actions-wrq5 a[data-button="current_tab"][href*="png"]~a[data-button="preview"]:before,
  article .actions-wrq5 a[data-button="current_tab"][href*="mp4"]~a[data-button="preview"]:before,
  article .actions-wrq5 a[data-button="current_tab"][href*="gif"]~a[data-button="preview"]:before {
  }*/
  
  article .actions-wrq5 a[data-button="current_tab"][href*="api.raindrop.io"]~a[data-button="preview"] svg,
  article .actions-wrq5 a[data-button="current_tab"][href*="jpg"]~a[data-button="preview"] svg,
  article .actions-wrq5 a[data-button="current_tab"][href*="jpeg"]~a[data-button="preview"] svg,
  article .actions-wrq5 a[data-button="current_tab"][href*="png"]~a[data-button="preview"],
  article .actions-wrq5 a[data-button="current_tab"][href*="mp4"]~a[data-button="preview"],
  article .actions-wrq5 a[data-button="current_tab"][href*="gif"]~a[data-button="preview"] {
    fill: var(--color--contrast) !Important
  }
  
  /*TAGS ABOVE LINK ON HOVER*/
  .item-K3tx article:hover .description-G1ZJ {
    z-index: 99999999999;
  }
  
  
  /*PERMANENT COPY - IMAGES*/
  body[style*="margin: 0px"] img {
    display: block;
    width: 100%;
    max-width: 100%;
  }
  
  body img {
    max-width: 100%;
  }
  
  
  
  /********
  *********
  *********
  TURN PREVIEW INTO Modal
  *********
  *********
  *********/
  /*TAG EDITOR*/
  /*THumbnail Container*/
  body .r-JslL .svMain {
    max-width: 100% !important;
  }
  
  /*Thumbnail Container - On Fullscreen*/
  .r-JslL.f-fEyX .svMain {
    visibility: visible !important;
  }
  
  
  /*RIGHT PREVIEW COLUMN - INTO MODAL*/
  body aside.svReader {
    position: fixed !important;
    top: 00px !important;
    bottom: 10px !important;
    left: 0 !important;
    right: 0 !important;
    z-index: 1000 !important;
    max-height: 100vh !important;
    height: 100vh !important;
    border-radius: 10px !important;
    border: 1px solid;
    margin: 0 auto !important;
    transition: .2s ease-in-out !important;
    contain: unset !important;
    overflow: unset !important;
    border: none !important;
  }
  
  
  /*READER MODAL BACKGROUND BLUR*/
  body aside.svReader:before {
    content: "";
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    position: fixed;
    background: hsl(0, 0%, 0%, .5);
      z-index: 0
  }
  
  /*
  body aside.svReader:after {
    content: "";
    display: block;
    position: absolute;
    z-index: 101010101;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border:1px solid rgba(125,125,125,.5) !Important;
    border-radius: 6px;
  }*/
  
  /*RIGHT PREVIEW COLUMN - NORMAL WIDTH*/
  body aside.svReader[data-fullscreen="false"] {
    width: 1000px !important;
    max-width: 100vw !important;
    height: calc(100vh - 20px) !important;
    max-height: 100vh !important;
  }
  
  /*RIGHT PREVIEW COLUMN - FULL WIDTH*/
  body aside.svReader[data-fullscreen="true"] {
    width: calc(100vw - 60px) !important;
    height: calc(100vh - 20px) !important;
  }
  
  /*RIGHT PREVIEW COLUMN - HEADER */
  body aside.svReader .header-Tqac.svReaderHeader {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 1px solid hsl(0,0%,19%);
    border-bottom: none !important;
      column-gap: var(--modalNavBtnMargRight);
      padding-left: 10px;
      padding-right: 10px;
  }
  
  body aside.svReader .header-Tqac,
  body aside.svReader .header-Tqac>div,
  body aside.svReader .header-Tqac>a {
    z-index: 1000 !important;
  }
  
  html[data-modal-showing="true"] .modal-st0e,
  html[data-modal-showing="true"] .modal-st0e *,
  html[data-popover-showing="true"] .tags-rX_r,
  html[data-popover-showing="true"] .tags-rX_r *,
  html[data-popover-showing="true"] listbox,
  html[data-popover-showing="true"] listbox * {
    z-index: 1001 !important;
  }
  /*******
  MODAL - NAV -  BUTTONS
  ********/
  :root{
      --modalNavBtnWidth:30px;
      --modalNavBtnHeight:30px;
      --modalNavBtnMargRight:10px;
  }
  body aside.svReader .header-Tqac.svReaderHeader > [role="button"]{
      min-width:var(--modalNavBtnWidth);
      min-height: var(--modalNavBtnHeight);
      margin-right: 0px;
      width: unset;
  }
  body aside.svReader .header-Tqac.svReaderHeader > [role="button"].show-on-small-body{
      min-width:calc(var(--modalNavBtnWidth) * 3)
  }
  
  
  
  /*RIGHT PREVIEW COLUMN - HEADER - CLOSE BUTTON*/
  body aside.svReader .header-Tqac>a[href*="my/"] {
    order: 100;
    margin-right: 0px !important;
      position: fixed;
      width: calc(100vw + 20vw) !important;
      height: 100vh;
      right: -20vw !important;
      top: 0;
      bottom: -100px !important;
      width: 100vw;
  }
  body aside.svReader .header-Tqac>a[href*="my/"]:hover{
      background: transparent;
  }
  
  /*RIGHT PREVIEW COLUMN - HEADER - MOCK CLOSE BUTTON*/
  
  body aside.svReader .header-Tqac>div[title="Fullscreen"]:after{
      content:"";
      display: block;
      min-width: var(--modalNavBtnWidth);
      height: var(--modalNavBtnHeight);
      box-shadow:;
      background: var(--bg--main-background);
      background-image:var(--iconCloseButton);
      background-size: .4rem;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 939393;
      position: absolute;
      right: 10px;
  }
  
  
  
  /*RIGHT PREVIEW COLUMN - HEADER - CLOSE BUTTOn BEFORE
  body aside.svReader .header-Tqac>a[href*="my/"]:before {
    content: "";
    position: fixed;
    display: block;
    width: 100%;
    height: 100vh;
    background: transparent;
    z-index: 999;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
  }*/
  
  body aside.svReader .header-Tqac>a[href*="https://"] {
    z-index: 1000 !Important;
  }
  
  /*RIGHT PREVIEW COLUMN - HEADER - FULLSCREEN BUTTON*/
  body aside.svReader .header-Tqac>div[title="Fullscreen"] {
    order: 99;
      margin-right:calc(var(--modalNavBtnWidth) + var(--modalNavBtnMargRight)) !important;
  }
  
  body aside.svReader .header-Tqac>div[title="Fullscreen"]>span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  body aside.svReader .header-Tqac>div[title="Fullscreen"]>span svg {
    min-width: 24px !Important;
    min-height: 24px !important;
  }
  
  
  .content-_qZD {
    background: var(--bg--main-background);
    border: 1px solid var(--color--blk--50-percent);
    border-top: none;
    border-bottom: none;
  }
  
  .wrap-pUJc,
  .footer-xf6r {
    background: var(--bg--main-background);
    border: 1px solid var(--color--blk--50-percent);
    border-top: none;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  
  /*RIGHT PREVIEW COLUMN - CONTENT SECTION */
  .content-_qZD,
  .wrap-pUJc,
  .items-wzRe,
  .items-wzRe,
  .footer-xf6r {
    z-index: 1000;
  }
  
  
  /*MOBILE IFRAME*/
  aside.svReader .content-_qZD {}
  
  aside.svReader iframe {
    margin: 0 auto;
    width: 100% !important;
  }
  
  /*IMG INSIDE IFRAME*/
  body[style*="margin: 0 auto"] img[src*="s3.eu-central-1.amazonaws.com/up.raindrop.io"] {
    width: 100%;
  }
  
  
  
  
  /************
  *************
  *************
  *************
  MODAL - PUT HIGHLIGHTS ON RIGHT SIDE
  *************
  *************
  *************
  *************/
  body aside.svReader {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap !important;
    justify-content: flex-start;
    height: 50px;
  }
  
  /*HEADER*/
  body aside.svReader .header-Tqac {
    width: 100%;
  }
  
  /*Content*/
  body aside.svReader .content-_qZD {
    max-height: 100%;
    height: calc(100% - 30px);
    width: 100%;
    flex: 1 300px;
    border-left:1px solid hsl(0,0%,19%);
    border-right:1px solid hsl(0,0%,19%);
  }
  
  
  /*Highlights*/
  body aside.svReader .wrap-pUJc {
    max-height: 100%;
    height: calc(100% - 50px);
    width: 40%;
    max-width: 400px;
  }
  
  
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap');
  
  
  
  /************
  *************
  *************
  *************
  EDIT INPUTS
  *************
  *************
  *************
  *************/
  
  :root {
    --editBoxPadLftRght: 5px;
    --editBoxPadTopBtm: 4px;
    --editBoxBrdRad: 4px;
    /*border*/
    --editBoxBrdClr: hsl(0, 0%, 17%);
    --editBoxBrdClrFocus: hsl(0, 0%, 20%);
    --editBoxBrdClrFocus2: hsl(0, 0%, 24%);
    /*bg*/
    --editBoxBG: hsl(0, 0%, 8%);
    --editBoxBgFocus: var(--editBoxBrdClrFocus);
  
  }
  
  .edit-nTT_>.form-clFe .wrap-eXUL {
    padding: 0px;
  }
  
  .edit-nTT_>.form-clFe .wrap-eXUL:focus,
  .edit-nTT_>.form-clFe .wrap-eXUL:focus-within {
    box-shadow: none !Important;
  }
  
  
  .edit-nTT_ textarea,
  .edit-nTT_ div[role="combobox"] .multi-K9Ag {
    transition: .11s !important;
    box-shadow:
      inset 0px 0px 0px 1px var(--editBoxBrdClr),
      0px 0px 0px 0px var(--editBoxBrdClr),
      0px 0px 0px 0px var(--editBoxBrdClrFocus2);
    border-radius: var(--editBoxBrdRad);
    background: var(--editBoxBG);
    padding-top: var(--editBoxPadTopBtm) !important;
    padding-bottom: var(--editBoxPadTopBtm) !important;
    padding-left: var(--editBoxPadLftRght) !important;
    padding-right: var(--editBoxPadLftRght) !important;
  }
  
  
  
  .edit-nTT_>.form-clFe textarea[name="excerpt"] {
    margin-top: 5px !Important;
      min-height:30px;
      padding-top:6px !important;
      padding-bottom:6px;
  }
  
  /*ON FOCUS*/
  
  .edit-nTT_ textarea:focus-within,
  .edit-nTT_ textarea:focus,
  .edit-nTT_ div[role="combobox"] .multi-K9Ag:focus-within,
  .edit-nTT_ div[role="combobox"] .multi-K9Ag:focus {
    --editBoxBrdClr: var(--editBoxBrdClrFocus) !important;
    --editBoxBG: var(--editBoxBgFocus)!important;
    box-shadow:
      inset 0px 0px 0px 1px var(--editBoxBrdClr),
      0px 0px 0px 2px var(--editBoxBrdClr),
      0px 0px 0px 3px var(--editBoxBrdClrFocus2) !important;
    border-radius: var(--editBoxBrdRad);
    --editBoxBrdRad: 2px !important;
  
  }
  
  
  
  /*collection button*/
  .edit-nTT_>.form-clFe [class*="label"]+div>.button-dQdc {
    box-shadow: 0 0 0 1px var(--editBoxBrdClr);
  }
  
  /*Tags area*/
  .edit-nTT_>.form-clFe div[role="combobox"] .multi-K9Ag,
  /*link area*/
  .edit-nTT_>.form-clFe .wrap-eXUL textarea[name="link"] {
    border-radius: var(--editBoxBrdRad);
  }
  
  
  /*Link area*/
  .edit-nTT_>.form-clFe .wrap-eXUL textarea[name="link"] {
    max-height: unset !Important;
    padding-bottom: 10px !Important;
    --max-rows: 10;
  }
  
  /************
  *************
  *************
  *************
  PREVIEW POPUP
  *************
  *************
  *************
  *************/
  .wrap-RPOy {
    z-index: 94949494 !Important;
  }
  
  /************
  *************
  *************
  *************
  SEARCH
  *************
  *************
  *************
  *************/
  .form-s7Xa>div>.wrap-eXUL {
    background: var(--search--bg-clr);
    border-radius: 8px;
  }
  
  /************
  *************
  *************
  *************
  FOOTER
  *************
  *************
  *************
  *************/
  .footer-jiX_ {
    position: sticky;
    bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9595959595;
    background: var(--footer--bg-clr) !important;
    color: var(--footer--txt-clr) !important;
    height: 30px !important;
    padding: 5px 20px;
    width: auto;
    max-width: 200px;
    margin: 0 auto;
    border: 1px solid var(--footer--border-clr);
    right: 0;
    left: 0;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 5px;
  }
  
  .footer-jiX_ [role="button"] {
    padding: 0px !important;
    background: transparent !important;
    color: inherit !important;
    height: auto !important;
    width: auto !important;
    box-shadow: unset !important;
    line-height: unset !important;
  }
  
  /************
  *************
  *************
  *************
  MEDIA QUERIES
  *************
  *************
  *************
  *************/
  @media (max-width: 700px) {
    aside.svReader {
      flex-direction: column !important;
    }
  
    body aside.svReader .wrap-pUJc {
      max-height: 40vh !important;
      max-width: 100% !important;
      width: 100% !Important;
      height: auto !Important;
    }
  }
  
  /*ICONS*/
  :root {
      --iconCloseButton: url('data:image/svg+xml;utf8,<svg  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 14.5859L3.27188 1.85791L1.85767 3.27212L14.5857 16.0002L1.85782 28.728L3.27203 30.1422L15.9999 17.4144L28.7277 30.1422L30.1419 28.728L17.4141 16.0002L30.1421 3.27218L28.7279 1.85797L15.9999 14.5859Z" fill="%23cacbce"/></svg>');
  }
  
</style>`;

  document.head.insertAdjacentHTML("beforeend", style);
})();