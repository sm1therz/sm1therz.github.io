

(function() {
	let style = `<style>



/*****
! ROOT
*/
:root {
  --sectionMaxWidth: 740px;
  --sectionPadLeftRight: 20px;
  --widgetHeaderHeight: 38px;
  --notesPadTopBtm: 23px;
  /*item padding*/
  --itemMargLeftRight: 12px;
  /*notes*/
  --notePadLeft: 2px;
  --noteEditorMargLeft: calc(var(--itemMargLeftRight) - var(--notePadLeft));
  /*bookmarks*/
  --bookmarksIconsGap: 20px;
  --bookmarkLinkBrdRad: 17px;
  --bookmarkThumbnailWidth: 90px;
  --bookmarkThumbnailMargTopBtm: 4px;
  /*font-sizes*/
  --bodyFontSize: 14px;
  --bodyLineHeight: 20px;
  /*notes*/
  --noteParagraphMargTopBtm: 0.35rem;
  --noteListItemPadLeft: 21px;
  /*tasks*/
  --todoitemMinHeight: 22px;
  --todoitemMargTopBtm: 6px;
  --checkboxWidth: 13px;
  --todoitempadRight: 20px;
  /*mobile size*/
}

:root {
  --bldClr: black;
}
.widget_theme_dark {
  --bldClr: hsl(0, 0%, 97%);
  color: hsla(0, 0%, 100%, 0.90);
}

/*testing
html .page-section *{
    outline: .3px solid red;
    outline-offset: -1px;
}

.widget__container,
.widget__container * {
    outline: .1px solid hsla(0, 100%, 50%, 1);
}
span.notes-widget__result * {
    outline: .1px solid hsla(0, 100%, 50%, 1);
}
*/
.bookmark-item_mode_detail,
.bookmark-item_mode_detail * {
  outline: .1px solid hsla(0, 100%, 50%, 0);
}



/***********
************
! GOOGLE SEARCH
************
************/
.search {
  box-sizing: border-box;
  width: var(--sectionMaxWidth);
  max-width: 100%;
  padding-left: calc(var(--sectionPadLeftRight) * .5) !important;
  padding-right: calc(var(--sectionPadLeftRight) * .5) !important;
}
.widget-page__searchbar {
  padding: 0px !important;
  padding-top: 30px !important;
  margin-bottom: 30px;
}
.search__wrapper {
  background: rgba(65, 65, 65, 1) !important;
  backdrop-filter: blur(30px) brightness(0.6);
  -webkit-backdrop-filter: blur(30px) brightness(0.6);
  /* Safari */
  -moz-backdrop-filter: blur(30px) brightness(0.6);
  /* Firefox (not yet supported) */
  -ms-backdrop-filter: blur(30px) brightness(0.6);
  /* Internet Explorer (not supported) */
  -o-backdrop-filter: blur(30px) brightness(0.6);
  /* Opera (not supported) */
  border-radius: 24px;
}
.search__form {
  height: 50px !important;
}
.search-results {
  background: rgba(65, 65, 65, 1) !important;
}
.search-results li.search-results__search-result,
.search-results li.search-results__search-result *,
.search .search__wrapper .search__input {
  color: white;
  font-size: 1.1rem !important;
  line-height: 2 !important;
}
.search .search__wrapper .search__input::placeholder {
  color: white !important;
  opacity: 0.6;
}
.search__control-arrow-icon,
.search__control-icon {
  stroke: hsla(0, 0%, 100%, .6) !important;
  transition: all .02s !important;
  outline: 3px solid hsla(0, 0%, 50%, .0);
  border-radius: 2px;
}
.search__control-arrow-icon:hover,
.search__control-icon:hover {
  stroke: hsla(0, 0%, 100%, 1) !important;
  background: hsla(0, 0%, 50%, .5);
  outline: 5px solid hsla(0, 0%, 50%, .5);
  transition: .2s !important;
}
.search__dark_menu,
.search__menu {
  border: none;
  padding: 0px;
}
.search-results__results-list:before {
  display: none;
}
li.search-results__search-result {
  padding-left: 50px;
}

.search-results__search-result_selected {
  background: hsla(0, 0%, 100%, .15)
}


/***********
MOBILE
************/
@media (max-width: 700px) {
  .widget-page__searchbar,
  .search-container,
  .search-container > .search {
    left: unset !important;
    right: unset !important;
    max-width: 100% !important;
  }
}



/***********
************
! NAV
************
************/

.widget-page > header ul.pages-bar__list-container .pages-bar__item_active {
  background: hsla(0, 0%, 100%, .2);
  -webkit-text-fill-color: white !important
}
.widget-page > header[role="navigation"] {
  position: fixed !important;
  top: unset !important;
  left: unset !important;
  right: unset !important;
  bottom: unset !important;
}
.widget-page > header[role="navigation"]:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #111113;
}
.widget-page header.header {
  width: 100% !important;
  max-width: unset !important;
  min-width: unset !important;

}
/*background transparent*/
.widget-page > header[role="navigation"],
.widget-page > header[role="navigation"] > div {
  background: transparent;
}

@media (max-width: 700px) {
  .widget-page .header__right {
    padding: 0px !important;
    overflow: hidden;
    width: 40% !important;
  }
  .widget-page .header-right [data-tour-add-content] {
    display: none;
  }
  .widget-page .header-right > a {
    margin: 0px;
  }
  .widget-page .header-right a[data-tour-me-menu] {
    position: absolute;
    top: 2px;
    bottom: 2px;
    right: 8px;
    height: 28px;
    border-radius: 5px;
  }
  .widget-page .header-bookmark-search {
    margin-left: 0px !important;
  }
  .widget-page .header__left {
    max-width: 50%;
    width: unset !important;
  }
  .widget-page .header__right {}
}

/***********
************
! COLUMNS
************
************/
/***********
COLUMNS CONTAINER
************/

:root {
  --multiColContainerWidth: 1100px;
}
/***********
COLUMNS WIDTH
************/
/*SMALL*/
.widget-page [style*="--total-column-size: 1"] {
  --singlecolW: 600px;
}
/*MEDIUM*/
.widget-page [style*="--total-column-size: 2"] {
  --singlecolW: 630px;
}
/*LARGE*/
.widget-page [style*="--total-column-size: 3"] {
  --singlecolW: 900px;
}
/*XL*/
.widget-page [style*="--total-column-size: 4"] {
  --singlecolW: 1000px;
}

/***********
************
SINGLE COLUMN PAGE
************
************/
html .page-section[style*="--column-count: 1"] {
  display: flex !important;
  width: 100% !important;
  margin: 0 auto !important;
  max-width: var(--singlecolW) !important;
}
html .page-section[style*="--column-count: 1"] > section.page-section__column {
  width: 100% !important;
}
/***********
ALL PAGES
************/
html .page-section {
  min-width: unset !important;
  padding-right: 6px !important;
  padding-left: 6px !important;
  width: var(--multiColContainerWidth);
  margin: 0 auto;
  max-width: 100% !important;
}
@media (max-width: 700px) {
  .page-section[style*="--column-count: 2"],
  .page-section[style*="--column-count: 3"],
  .page-section[style*="--column-count: 4"],
  .page-section[style*="--column-count: 5"],
  .page-section[style*="--column-count: 6"] .page-section[style*="--column-count: 7"] {
    --column-gutter: unset !important;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  }
  section.page-section__column {
    width: calc(50% - 5px);

  }
}
@media (max-width: 500px) {
  .page-section[style*="--column-count: 2"],
  .page-section[style*="--column-count: 3"],
  .page-section[style*="--column-count: 4"],
  .page-section[style*="--column-count: 5"],
  .page-section[style*="--column-count: 6"],
  .page-section[style*="--column-count: 7"] {
    --column-gutter: unset !important;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  }
  section.page-section__column {
    width: calc(100%);

  }
}







/***********
************
MAIN APP
************
************/


/***********
************
OVERRIDES
************
************/
header.header,
.app__main-layout,
.app__body,
.widget-page,
.widget-page__main,
.widget-page__container {
  width: 100% !important;
  max-width: unset !important;
  min-width: unset !important;

}
.widget {
  margin: 0px !important;
}
.widget > .widget__container {
  margin-bottom: 6px;
  margin-top: 6px;
}


/***********
************
SCROLLBAR
************
************/
html.no-mobile ::-webkit-scrollbar {
  width: 0px !important;
}
/***********
************
SECTIONS
************
************/

* {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, SF Pro Display, SF Pro Icons, Noto Sans, Helvetica, Nimbus Sans L, Arial, sans-serif !important;
}



/***********
SECTION - MULTIPLE COLUMNS
************/
/**/
.notes-widget,
.bookmark-widget,
.bookmark-widget__list,
.bookmark-item__title,
.bookmark-folder__title {
  font-size: var(--bodyFontSize) !important;
  line-height: var(--bodyLineHeight) !important;
  -webkit-font-smoothing: antialiased;
}

.widget-header__title,
.bookmark-folder__title {
  font-size: calc(var(--bodyFontSize) + 1px) !important;
  line-height: calc(var(--bodyLineHeight) + 1px) !important;
  font-weight: 500;
  -webkit-font-smoothing: subpixel-antialiased !important;
  gap: 4px !important;
  color: var(--bldClr);
  margin-right: 0px !important;
}

.widget-header__title input {
  border: none !important;
}

/***********
BOOKMARK GROUPS
************/
:root {
  --groupGap: 6px;
  --groupHeaderHeight: 34px;
  --bookmarkWidgetContentMargTop: 4px;
}
.bookmark-widget__folders {
  margin: 0px !important;
}
.bookmark-widget__folders,
.bookmark-widget__folder,
.bookmark-folder,
.bookmark-folder__head,
.bookmark-folder__content {}


.bookmark-widget__folders {
  margin-top: calc(var(--bookmarkWidgetContentMargTop) * -1) !important
}
.bookmark-widget__folders,
.bookmark-folder {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1 100%;
  width: 100%;

  height: unset;
  width: 100% !important;
}
.bookmark-folder {
  row-gap: var(--groupGap) !important;
  margin-bottom: 0px;
}
.bookmark-folder {
  width: 100%;
}
.bookmark-widget__folder,
.bookmark-widget__folder_collapsed,
.bookmark-folder_collapsed {
  margin: 0px !important
}
.bookmark-folder_collapsed .bookmark-folder__content {
  height: 0px;
  display: none;
}
.bookmark-folder__head,
.bookmark-folder__content,
.bookmark-widget__folder {
  margin: 0px !important;
  width: 100% !important;
}
.bookmark-folder__head {
  border-bottom: 1px solid hsla(0, 0%, 50%, .075) !important;
  height: 26px;
}
.bookmark-widget__folders .bookmark-widget__folder:first-child {
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 50%, .00) !important;

}
.bookmark-widget__folders .bookmark-widget__folder:last-child .bookmark-folder__head {
  border-bottom-width: 1px !important;
}
.bookmark-widget .widget__container[style*=", 0)"] .bookmark-widget__folders .bookmark-widget__folder:last-child .bookmark-folder__head {
  border-bottom-width: 1px !important;
}
.bookmark-folder__title {
  display: flex !important;
  align-items: center;
  justify-content: flex-start !important;
  -webkit-font-smoothing: antialiased !important;
  font-size: calc(var(--bodyFontSize) + 0px) !important;
  line-height: calc(var(--bodyLineHeight) + 0px) !important;
  height: var(--groupHeaderHeight);

}
/*overrides*/
.bookmark-widget__tabs,
.bookmark-folder__content {
  margin: 0px !important;
  padding: 0px !important;
}
.bookmark-folder__head,
.bookmark-folder__head > div,
.bookmark-folder__head > div > div {
  height: unset !important;
}
.bookmark-folder__name {
  font-size: unset !important;
  font-weight: unset !important
}

.bookmark-folder__caret {
  top: unset;
  opacity: 1 !important;
}
/***********
HEADER - TRANSPARENT BACKGROUND 
************/

.bookmark-widget .widget__container[style*=", 0)"] .widget-header__title .widget-header__text,
.bookmark-widget .widget__container[style*=", 0)"] .bookmark-folder__name {
  opacity: 0.7;
  -webkit-font-smoothing: antialiased !important;

}
.bookmark-widget .widget__container[style*=", 0)"] .widget__description {
  opacity: 0.5 !important;
  -webkit-font-smoothing: antialiased !important;
}
#appID .bookmark-widget .widget__container[style*=", 0)"] .widget-header__title .widget-header__chevron,
#appID .bookmark-widget .widget__container[style*=", 0)"] .bookmark-folder__caret-icon {
  opacity: 0.4 !important;
}


/* BOOKMARK description*/
.bookmark-description {
  opacity: 1.75 !important
}
#appID .bookmark-widget .widget__container[style*=", 0)"] .bookmark-description {
  opacity: .65 !important
}
.bookmark-item_mode_detail .bookmark-item__description p + p {}

/*ADD WIDGET*/
.page-section__plus-container div {
  opacity: 1 !important;
  visibility: visible !important;
  display: flex;
  background: transparent;
  -webkit-text-fill-color: hsla(0, 0%, 50%, .2);
}
.page-section__plus-container,
.page-section__plus-container * {
  background: transparent !important;
}
.page-section__plus-container {}
.page-section__plus-container:hover {
  filter: brightness(2);
}

/***********
************
BOOKMARKS
************
************/
.bookmark-item__title {
  text-shadow: rgba(0, 0, 0, .3) 0 0 1px !important;
  font-weight: 500;
}


/*WIDGET - CONTAINER*/
.widget__container {
  border-radius: 8px;
  height: unset !important;
  max-height: unset !important;
  min-height: unset !important;
}
.widget.widget_state_editing .widget__container[style*=", 0)"] {
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 50%, .1);
}

/***********
WIDGET HEADER
************/

.widget__header {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  height: var(--widgetHeaderHeight) !important;
  cursor: pointer;
  padding-left: var(--itemMargLeftRight);
  padding-right: var(--itemMargLeftRight);
}
.widget-header__button,
.widget-header_hovered .widget-header__button,
html.touch .widget-header__button {
  display: none !important;
}

/*WIDGET HEADER CONTROLS*/
.widget-header__controls {}
/*WIDGET HEADER CHEVRON*/
:root {
  --headerChevronMargLeftRight: 4px;
}
.widget-header__chevron,
.bookmark-folder__caret-icon {
  display: block;
  opacity: .5 !important;
  transform: scale(1.5)rotate(-180deg);
  transition: .1s;
  margin: 0 var(--headerChevronMargLeftRight) !important;
}
.bookmark-widget .widget-header__chevron {
  opacity: . !important;
}
/*collapsed*/
.widget_collapsed .widget-header__chevron {
  transform: scale(1.5)rotate(0deg);
}
/*WIDGET HEADER CONTROLS*/
.widget-header__controls > .widget-header__control {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

.bookmark-folder--collapsed > .bookmark-folder__content {
  display: none;
}

/*WIDGET BODY*/
/*OPEN*/
html .widget__box {
  margin: 0px;
  margin-bottom: 0px !important;
  max-height: 2000px !important;
  height: unset !important;
  min-height: unset !important;
  transition: 1s !important;
  opacity: 1 !important;
}
/*COLLAPSED*/
html .widget_collapsed .widget__box {
  max-height: 0px !important;
  height: unset !important;
  min-height: unset !important;
  overflow: hidden !important;
}


.bookmark-widget .widget__body {
  margin: 6px 16px 16px !important;
  margin-top: var(--bookmarkWidgetContentMargTop) !important;
  margin-left: var(--itemMargLeftRight) !important;
  margin-right: var(--itemMargLeftRight) !important;

}
.bookmark-widget:not(.bookmark-widget_edited) .bookmark-widget__body_mode_icon ul {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  gap: var(--bookmarksIconsGap);
  margin-bottom: -10px;
}
.bookmark-widget:not(.bookmark-widget_edited) .bookmark-widget__body_mode_icon ul li {
  min-width: unset !important;
  flex: unset !important;
  width: var(--bookmarkThumbnailWidth);
  transition: .1s;
}
.bookmark-widget:not(.bookmark-widget_edited) .bookmark-widget__body_mode_icon ul li:hover {
  transform: scale(1.05);
}
.bookmark-widget:not(.bookmark-widget_edited) ul li .bookmark-item__icon-wrapper {
  border: none;
  border-radius: var(--bookmarkLinkBrdRad);
  overflow: hidden;
  background: hsla(0, 0%, 50%, .2);
  backdrop-filter: blur(20px)brightness(2);

}

/*BOOKMARK - LINK CONTAINER*/
.bookmark-widget:not(.bookmark-widget_edited) .bookmark-widget__body_mode_icon .bookmark-item__link {
  margin: 0px !important;
  padding: 0px !important;
  overflow: hidden;

}
.bookmark-widget .bookmark-item:hover {
  background: transparent !important;
}
.bookmark-widget .bookmark-item:hover a {
  background: transparent !important;
}
/*BOOKMARK - ICON/IMAGE THUMBNAIL*/
.bookmark-widget .bookmark-widget__body_mode_icon ul li .bookmark-item__icon-wrapper,
.bookmark-widget .bookmark-widget__body_mode_icon ul li .bookmark-item__icon-wrapper img {
  height: unset !important;
  width: var(--bookmarkThumbnailWidth) !important;
  max-height: var(--bookmarkThumbnailWidth) !important;
  min-width: unset !important;
  max-width: unset !important;
}
.bookmark-widget ul li .bookmark-item__icon-wrapper img {}
.bookmark-item__icon-wrapper {
  outline: 1px solid hsla(0, 0%, 70%, 0.2) !important;
  outline-offset: -1px;
}

.bookmark-widget:not(.bookmark-widget_edited) .bookmark-widget__body_mode_icon span.bookmark-item__title {
  margin-top: 2px;
  margin-bottom: 0px !important;
}



/*********
BOOKMARK SECTION TYPE - DETAILS & LIST
**********/
.bookmark-item_mode_list,
.bookmark-item_mode_detail {
  position: relative;
  cursor: pointer;
}
.bookmark-item_mode_list *,
.bookmark-item_mode_detail * {
  text-decoration: none !important;
}
.bookmark-item_mode_list:before,
.bookmark-item_mode_detail:before {
  content: "";
  display: block;
  position: absolute;
  left: -5px;
  right: -5px;
  top: 0;
  bottom: 0;
  background: hsla(0, 0%, 100%, 0.1);
  backdrop-filter: blur(40px) saturate(1.3);
  border-radius: 8px;
  transition: .12s;
  opacity: 0;
  z-index: -1;
}
.bookmark-widget .bookmark-item_mode_list:hover:before,
.bookmark-widget .bookmark-item_mode_detail:hover:before {
  opacity: 1;
}

/*********
BOOKMARK SECTION TYPE - ICONS
**********/
.bookmark-widget__body_mode_icon {
  padding-bottom: 3px !important;
}
.bookmark-item_mode_icon {
  padding: 0px !important;
  border-radius: var(--bookmarkLinkBrdRad);
}

.bookmark-item_mode_icon .bookmark-item__title {
  max-height: 2rem;
}

.bookmark-item_mode_icon .bookmark-item__icon-wrapper {
  --bookmarkLinkBrdRad: 6px;
  min-width: var(--bookmarkThumbnailWidth) !important;
  min-height: var(--bookmarkThumbnailWidth) !important;
  width: var(--bookmarkThumbnailWidth) !important;
  height: var(--bookmarkThumbnailWidth) !important;
  /**/
  margin: 0 auto !important;
  margin-bottom: var(--bookmarkThumbnailMargTopBtm) !important;
}

/*none*/
.bookmark-item_mode_icon.bookmark-item_size_none .bookmark-item__icon-wrapper {
  --bookmarkThumbnailWidth: 0px;
  --bookmarkThumbnailMargTopBtm: 27px;
  margin-right: 0px !important;
}
/*small*/
.bookmark-widget__body_mode_icon[class*="small"] ul li {
  --bodyFontSize: 12px;
  --bodyLineHeight: 15px;
}
.bookmark-item_mode_icon.bookmark-item_size_small ul {
  --bookmarksIconsGap: 5px;
}
.bookmark-item_mode_icon.bookmark-item_size_small .bookmark-item__icon-wrapper {
  --bookmarkThumbnailWidth: 40px;
  --bookmarkThumbnailMargTopBtm: 4px;
}
/*medium*/
.bookmark-widget__body_mode_icon[class*="medium"] ul li {
  --bookmarkThumbnailWidth: 70px;
  --bodyFontSize: 12px;
  --bodyLineHeight: 15px;
}
.bookmark-widget__body_mode_icon.bookmark-widget__body_size_medium ul {
  --bookmarksIconsGap: 10px;
}
.bookmark-item_mode_icon.bookmark-item_size_medium .bookmark-item__icon-wrapper {
  --bookmarkThumbnailWidth: 66px;
  --bookmarkThumbnailMargTopBtm: 4px;
  --bookmarkLinkBrdRad: 9px;

}
/*large*/
.bookmark-item_mode_icon.bookmark-item_size_large .bookmark-item__icon-wrapper {
  --bookmarkThumbnailWidth: 90px;
  --bookmarkLinkBrdRad: 17px;
  --bookmarkThumbnailMargTopBtm: 4px;
}
.bookmark-item_mode_icon .bookmark-item__icon {
  max-width: unset !important;
  max-height: unset !important;
  width: 100%
}

/*********
BOOKMARK SECTION TYPE - DETAILS
**********/
.bookmark-item_mode_detail {
  padding: 0px !important;
  border-radius: var(--bookmarkLinkBrdRad);
}
.bookmark-item_mode_detail a .bookmark-item__icon-wrapper {
  align-items: flex-start;
  height: 100%;
  align-self: flex-start
}

.bookmark-widget:not(.bookmark-widget_edited) .bookmark-widget__body_mode_detail .bookmark-widget__list > li + li {
  border-top-color: hsla(0, 0%, 50%, .1)
}
/*
.bookmark-widget li:hover + li {
    border-color: hsla(0,0%,100%,0) !important;
}*/


.bookmark-item_mode_detail .bookmark-item__icon-wrapper {
  --bookmarkLinkBrdRad: 6px;
  min-width: var(--bookmarkThumbnailWidth) !important;
  min-height: var(--bookmarkThumbnailWidth) !important;
  width: var(--bookmarkThumbnailWidth) !important;
  height: var(--bookmarkThumbnailWidth) !important;
  /**/
  margin-right: 10px !important;
  margin-top: var(--bookmarkThumbnailMargTopBtm) !important;
  margin-bottom: var(--bookmarkThumbnailMargTopBtm) !important;
}

/*none*/
.bookmark-item_mode_detail.bookmark-item_size_none .bookmark-item__icon-wrapper {
  --bookmarkThumbnailWidth: 0px;
  --bookmarkThumbnailMargTopBtm: 27px;
  margin-right: 0px !important;
}
.bookmark-item_mode_detail.bookmark-item_size_none .bookmark-item__link {
  --bookmarkThumbnailMargTopBtm: 7px;
}
/*small*/
.bookmark-item_mode_detail.bookmark-item_size_small .bookmark-item__icon-wrapper {
  --bookmarkThumbnailWidth: 32px;
  --bookmarkThumbnailMargTopBtm: 7px;
}
.bookmark-item_mode_detail.bookmark-item_size_small .bookmark-item__link {
  --bookmarkThumbnailMargTopBtm: 7px;
}
/*small title spacing*/
.bookmark-item_mode_detail.bookmark-item_size_small .bookmark-item__info,
.bookmark-item_mode_detail.bookmark-item_size_medium .bookmark-item__info {
  padding: 0px !important;
  display: flex !important;
  align-items: flex-start !important;
  justify-content: center !important;
  line-height: 10px;
  height: 100% !important;

}
.bookmark-item_mode_detail.bookmark-item_size_small .bookmark-item__info,
.bookmark-item_mode_detail.bookmark-item_size_small .bookmark-item__info *,
.bookmark-item_mode_detail.bookmark-item_size_medium .bookmark-item__info,
.bookmark-item_mode_detail.bookmark-item_size_medium .bookmark-item__info * {
  flex: unset !important;
  font-size: 14px !important;
  line-height: unset !important;
  max-height: unset !important;
  min-height: unset !important;
}
.bookmark-item_mode_detail.bookmark-item_size_small .bookmark-item__info {
  line-height: calc(var(--bodyLineHeight) - 1px) !important;
}
.bookmark-item_mode_detail.bookmark-item_size_medium .bookmark-item__info {
  line-height: calc(var(--bodyLineHeight) - 0px) !important;
}

.bookmark-item_mode_detail.bookmark-item_size_small .bookmark-item__info .bookmark-item__title-container {
  bottom: -.5px !important;
  position: relative;
}
.bookmark-item_mode_detail.bookmark-item_size_small .bookmark-item__info .bookmark-item__description {
  bottom: .5px !important;
  position: relative;
}

/*DETAIL - DESCRIPTONS - Only First Line*/
.bookmark-item_mode_detail.bookmark-item_size_small.bookmark-item_description_first .bookmark-description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

}
/*detail - descriptons - small adjust top margin*/
.bookmark-item_mode_detail.bookmark-item_size_small.bookmark-item_description_first .bookmark-item__info,
.bookmark-item_mode_detail.bookmark-item_size_small.bookmark-item_description_url .bookmark-item__info {
  margin-top: -2px;
  position: relative;
}

.bookmark-item_mode_detail .bookmark-item__info,
.bookmark-item_mode_detail .bookmark-item__info * {
  max-width: 100%;
}

/*CUSTOM CLASS - DESCRIPTION "HIDE"*/
.bookmark-item_mode_detail .bookmark-description .hide-description {
display:none;
}

/*medium*/
.bookmark-item_mode_detail.bookmark-item_size_medium .bookmark-item__icon-wrapper {
  --bookmarkThumbnailWidth: 42px;
  --bookmarkThumbnailMargTopBtm: 7px;
}
.bookmark-item_mode_detail.bookmark-item_size_medium .bookmark-item__link {
  --bookmarkThumbnailMargTopBtm: 7px;
}
/*large*/
.bookmark-item_mode_detail.bookmark-item_size_large .bookmark-item__icon-wrapper {
  --bookmarkThumbnailWidth: 50px;
  --bookmarkLinkBrdRad: 10px;
  --bookmarkThumbnailMargTopBtm: 7px;
}
.bookmark-item_mode_detail.bookmark-item_size_large .bookmark-item__link {
  --bookmarkThumbnailMargTopBtm: 10px;

}
.bookmark-item_mode_detail .bookmark-item__icon {
  max-width: unset !important;
  max-height: unset !important;
  width: 100%
}


/*BOOKMARK SECTION TYPE - DETAILS - REDO*/
#appID .bookmark-item_mode_detail .bookmark-item__icon-wrapper {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

.bookmark-item_mode_detail .bookmark-item__link {
  padding-top: var(--bookmarkThumbnailMargTopBtm);
  padding-bottom: var(--bookmarkThumbnailMargTopBtm);
}

/*********
BOOKMARK SECTION TYPE - LIST
**********/

.bookmark-item_mode_list .bookmark-item__icon-wrapper {
  --bookmarkLinkBrdRad: 5px;
  min-width: var(--bookmarkThumbnailWidth) !important;
  min-height: var(--bookmarkThumbnailWidth) !important;
  width: var(--bookmarkThumbnailWidth) !important;
  height: var(--bookmarkThumbnailWidth) !important;
  /**/
  margin-right: 10px !important;
  margin-top: var(--bookmarkThumbnailMargTopBtm) !important;
  margin-bottom: var(--bookmarkThumbnailMargTopBtm) !important;
}
/*none*/
.bookmark-item_mode_list.bookmark-item_size_none .bookmark-item__icon-wrapper {
  --bookmarkThumbnailWidth: 0px;
  --bookmarkThumbnailMargTopBtm: 19px;
  margin-right: 0px !important;
}
/*small*/
.bookmark-item_mode_list.bookmark-item_size_small .bookmark-item__icon-wrapper {
  --bookmarkThumbnailWidth: 20px;
  --bookmarkThumbnailMargTopBtm: 3px;
}
/*medium*/
.bookmark-item_mode_list.bookmark-item_size_medium .bookmark-item__icon-wrapper {
  --bookmarkThumbnailWidth: 32px;
  --bookmarkThumbnailMargTopBtm: 4px;
}
/*large*/
.bookmark-item_mode_list.bookmark-item_size_large .bookmark-item__icon-wrapper {
  --bookmarkThumbnailWidth: 50px;
  --bookmarkLinkBrdRad: 10px;
  --bookmarkThumbnailMargTopBtm: 7px;
}
.bookmark-item_mode_list .bookmark-item__icon {
  max-width: unset !important;
  max-height: unset !important;
  width: 100%
}

/*FOOTER*/

.page-footer {
  display: none !important;
}

/***********
************
! NOTES
************
************/

/*
.notes-widget {
        --bodyFontSize: 14.25px !important;
    --bodyLineHeight: 18px !important;
}*/

/*
.notes-widget-wrapper .widget__header {
    height: unset !important;
    min-height: var(--widgetHeaderHeight) !important;
    position: relative;
}
.notes-widget-wrapper .widget-header__text{
    flex: 1;
    overflow: unset;
    text-overflow: unset;
    white-space: pre-wrap;
}

.notes-widget-wrapper .widget-header__controls{
    position: absolute;
    right: 0;
}*/

/*NOTES - BOTTOM BUTTONS*/
.notes-widget__controls {
  height: unset !important;
  min-height: unset !important;
  position: absolute !important;
  bottom: 0px !important;
  width: unset;
  left: unset !important;
  right: 0 !important;
  margin-right: unset !important;
  margin-left: unset !important;
  height: var(--notesPadTopBtm) !important;
  padding: 0px !important;
  padding-left: 9px !important;
  margin: 0px;
}
.notes-widget__controls a {
  min-height: unset;
  height: 16px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: hsla(0, 0%, 50%, 0.9);
  cursor: pointer !important;
  font-size: 0.8em !important;
  text-decoration: none !important;
  padding: 3px 6px !important;
  margin: unset !important;
  min-width: unset !important;
}
.notes-widget__controls a:hover {
  background: hsla(0, 0%, 50%, .15) !important;
  color: inherit !important;
}
/*NOTES - TOP BUTTONS*/
.wysiwyg-editor__toolbar {
  position: absolute;
  bottom: calc(var(--notesPadTopBtm) * -1 + -4px);
  top: unset;
  width: 100%;
  left: 0;
  padding-left: 6px;
  right: 0 !important;
  margin-right: unset !important;
  margin-left: unset !important;
  box-shadow: 0px -1px 0 0 hsla(0, 0%, 50%, .15);
  margin: 0px !important;
  height: 20px !important;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.wysiwyg-editor__toolbar * {
  height: 20px;
}
.wysiwyg-action,
.wysiwyg-action_left,
.wysiwyg-action_middle,
.wysiwyg-action_right {
  width: 20px;
  height: unset !important;
  border: none;
  background: transparent;
  border-radius: 5px !important;
}
.wysiwyg-action-wrapper__container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wysiwyg-action-wrapper__container:hover svg {
  background: hsla(0, 0%, 50%, .24) !important;
}
.wysiwyg-editor__toolbar svg {
  height: 17px !important;
  border: none !important;
}

/*NOTES - TABS - WRAPPER*/
html .notes-widget-wrapper__tabs-list {
  column-gap: 10px;
  row-gap: 0px;
  margin-bottom: 6px !important;
}
.notes-widget-wrapper__tabs,
.widget__description {
  margin-bottom: 0px !important;
}

.notes-widget-wrapper__tabs {
  border-bottom: none !important;
  box-shadow: 0px 1px 0 0 hsla(0, 0%, 50%, .15) !important;
}
.widget__container .widget__box > .widget__description:not(.widget__description_empty) + .widget__body > .notes-widget-wrapper__tabs {
  margin-top: 2px;

}




#appID .widget__description {
  transition: opacity 1s !important;
  border: none !important;
  opacity: 0.65 !important;
  position: relative;
  top: -3px;
  margin: 0px !important;
  padding-left: 12px !important;
  padding-right: 12px !important;

}
.widget__description_empty {
  display: none !important;
  height: 0px !important;
  overflow: hidden !important;
  position: fixed !important;
  margin: 0px !important;
}

html .widget__description * {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
  margin-top: 0px !important;
  font-size: calc(var(--bodyFontSize) + .5px) !important;
  line-height: calc(var(--bodyLineHeight) - 1px) !important;
  white-space: initial !important;
  overflow-wrap: unset !important;
  word-wrap: unset !important;
  word-break: unset !important;
  text-align: left !important;
  font-family: sans-serif !important
}

#appID .widget__description h1,
#appID .widget__description h2,
#appID .widget__description h3,
#appID .widget__description h4,
#appID .widget__description h5,
#appID .widget__description h6 {
  font-weight: 500 !important;
  line-height: calc(var(--bodyLineHeight) - 1px) !important;
  -webkit-font-smoothing: subpixel-antialiased !important;
}



.widget__description textarea {
  margin-bottom: -4.5px !important;
}
.widget__description .markdown-description * {
  white-space: pre-wrap !important;
}

#appID .widget__description textarea[style*="height: 29px"] {
  height: unset !important;
  margin-bottom: -3px !important;
}
.widget__description textarea::empty {
  display: none !important;
}


/*NOTES - MARKDOWN MODE*/
/*.notes-widget,
#appID .notes-widget-wrapper,
#appID .notes-widget-wrapper .widget__body,
#appID .notes-widget-wrapper .widget__body .notes-widget-wrapper__body,*/
#appID .notes-widget-wrapper .widget__body .notes-widget-wrapper__body .notes-widget,
#appID .notes-widget-wrapper .widget__body .notes-widget-wrapper__body .notes-widget textarea.notes-widget__textarea {
  line-height: var(--bodyLineHeight) !important;
}

#appID .notes-widget-wrapper .widget__body .notes-widget-wrapper__body .notes-widget textarea.notes-widget__textarea {
  margin-top: 5px !important;
}

/*HR*/
#appID .notes-widget hr {
  height: .5px !important;
  background: hsla(0, 0%, 50%, 0.5) !important;
  border: none !important;
  margin-top: calc(var(--noteParagraphMargTopBtm) * 2) !important;
  margin-bottom: calc(var(--noteParagraphMargTopBtm) * 2) !important;
}
.notes-widget-wrapper__tab,
.notes-widget-wrapper__tabs-changer input {
  margin: 0px !important;
  padding: 0px 0px !important;
  box-shadow: 0px 0 0 0 hsla(0, 0%, 100%, 0.1);
  height: unset !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  top: unset !important;
  transition: .1s;

}
.notes-widget-wrapper__tab[class*="active"] {
  background: hsla(0, 0%, 100%, 0) !important;
}

.notes-widget-wrapper__tab[class*="active"]:before {
  content: "";
  display: block;
  height: 1px;
  background: #00b2ff;
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
}

/*NOTES - TABS - TAB TITLE*/

.custom-tab,
.folder-title-changer input,
.notes-widget-wrapper__tab-creator_small {
  line-height: 17px !important;
  font-size: 10.5px !important;
  text-transform: uppercase !important;
}
.custom-tab__name {
  padding-bottom: 0px !important;
  border: none !important;
  margin: 0px !important
}
/*EDIT TAB TITLE - CONTAINER*/
.notes-widget-wrapper__tabs-changer,
.notes-widget-wrapper__tabs-changer input {
  background: transparent !important;
  border: none !important;
}
.custom-tab .custom-tab__controls {
  display: none;
}

/*NOTES - CONTAINER*/
.notes-widget__result,
.wysiwyg-editor,
[id] .notes-widget__textarea {
  padding-bottom: 0px !important;
  padding-top: 0px !important;
  min-height: unset !important;
}
.notes-widget-wrapper__body {
  padding-bottom: var(--notesPadTopBtm);
  padding-top: 0px !important;
  position: relative;
}
.notes-widget__result,
.wysiwyg-editor {
  -webkit-font-smoothing: subpixel-antialiased !important;
  font-weight: 400;

}
#appID .notes-widget > .notes-widget__result,
#appID .notes-widget > .wysiwyg-editor,
#appID .notes-widget > textarea.notes-widget__textarea {
  padding-left: var(--notePadLeft) !important;
  margin-left: var(--noteEditorMargLeft) !important;
  min-height: unset !important;
}
.notes-widget .wysiwyg-editor__input-wrapper,
.notes-widget .wysiwyg-editor__input {
  margin: 0px !important;
  padding: 0px;
  min-height: unset !important;
}
/*EMPTY NOTE HEIGHT*/

.notes-widget-wrapper .empty-widget-body,
.notes-widget-wrapper .empty-widget-body a {
  padding: 0px;
  margin: unset
}
.notes-widget-wrapper .empty-widget-body {
  padding-top: 10px;
  padding-bottom: 10px;
}
/*******
NOTES - FORMATTING
*********/

.notes-widget__result p {
  white-space: pre-wrap;
}

/*NOTES - LISTS - OVERRIDES*/
.notes-widget .notes-widget__result ol,
.notes-widget .notes-widget__result ul {
  line-height: unset !important;
  margin: unset !important;
  padding-left: var(--noteListItemPadLeft) !important;
}
/*NOTES - PARAGRAPH MARGIN*/
.notes-widget__result p,
.wysiwyg-editor__input_editable > p,
.wysiwyg-editor__input > p,
.notes-widget__result ol li,
.wysiwyg-editor__input_editable ol li,
.notes-widget__result ul li,
.wysiwyg-editor__input_editable ul li,
.notes-widget__result blockquote,
.wysiwyg-editor__input_editable blockquote,
.notes-widget__result blockquote p,
.wysiwyg-editor__input_editable blockquote p,
.notes-widget__result pre,
.wysiwyg-editor__input_editable pre,
.wysiwyg-editor__input pre {
  margin-top: var(--noteParagraphMargTopBtm) !important;
  margin-bottom: var(--noteParagraphMargTopBtm) !important;
  line-height: var(--bodyLineHeight) !important;
}

/*NOTES - BLOCKQUOTE*/
.notes-widget__result blockquote,
.wysiwyg-editor__input_editable blockquote,
.wysiwyg-editor__input blockquote {
  padding-left: var(--noteListItemPadLeft) !important;
  box-shadow: inset 4px 0 0 0 hsla(0, 0%, 50%, 0.5);
  margin: 0px !important;
  margin-top: calc(var(--noteParagraphMargTopBtm) * 1.5) !important;
  margin-bottom: calc(var(--noteParagraphMargTopBtm) * 1.5) !important;
}
/*NOTES - CODEBLOCK*/
.notes-widget__result pre,
.wysiwyg-editor__input_editable pre,
.wysiwyg-editor__input pre {
  background: hsla(0, 0%, 50%, .15);
  border-radius: 5px;
  padding: 4px 10px;
  white-space: pre-wrap;
  display: block;
  line-height: calc(var(--bodyLineHeight) + 1px) !important;
}
/*NOTES - INLINE CODE*/
.notes-widget__result code:not(html pre code),
.bookmark-widget code:not(html pre code),
.wysiwyg-editor__input_editable code:not(html pre code),
.wysiwyg-editor__input code:not(html pre code) {
  background: hsla(0, 0%, 50%, .15);
  border-radius: 4px;
  padding: 1px 4px;
  display: inline;
  margin-left: -2px;
  margin-right: -2px;
}

.notes-widget__result code:not(pre code) {
  user-select: none !important;
  -webkit-user-select: none !important;
  pointer-events: none !important;
}
/*NOTES - CODE FONT*/

.notes-widget__result code,
.wysiwyg-editor__input_editable code,
.wysiwyg-editor__input code {
  font-family: "SF Mono", monospace !important;
  font-weight: 400;
  font-size: calc(var(--bodyFontSize) - 1px) !important;
}

/*NOTES - BOLD - TEXT COLORS*/
.notes-widget__result b,
.wysiwyg-editor b,
.notes-widget__result strong,
.wysiwyg-editor strong,
.notes-widget__result h3,
.wysiwyg-editor h3 {
  font-weight: 00 !important;
  color: var(--bldClr) !important;
  -webkit-font-smoothing: subpixel-antialiased !important;
}
/*NOTES - LINKS - TEXT COLORS*/
.notes-widget__result a,
.wysiwyg-editor a {
  color: #00b2ff !important
}
/*NOTES - EDITING - PREVENT BACKGROUND FROM DARKENING*/
.app__main-layout_shadowed {
  background: transparent;
}

/*********
**********
**********
**********
! NOTES - TABS - VERTICAL
**********
**********
**********
**********/
:root {
  --noteVertTabGap: 0px;
  --noteVertTabHeight: 25px;
  --noteVertTabBgClr-Hover: hsla(0, 0%, 50%, .085);
  --noteVertTabBgClr-Active: hsla(0, 0%, 50%, .125);
  --noteVertTabBgClr-Active-Hover: hsla(0, 0%, 50%, .25);
}
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs,
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs * {
  box-sizing: border-box !important;
}
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs {
  padding: 0px !important;
  margin-left: unset !important;
  margin-right: unset !important;
  border-bottom: unset !important;
  box-shadow: unset !important;
}
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list {
  padding: 0px !important;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100% !important;
  margin-left: unset !important;
  margin-right: unset !important;
  border: unset !important;
  row-gap: var(--noteVertTabGap) !important;
}

.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li {
  order: 1;
}
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li,
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li .custom-tab {
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: flex-start !important;
  min-height: var(--noteVertTabHeight) !important;
  flex: 1 !important;
}

.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li:first-child {
  box-shadow:
    0px 0px 0 0 hsla(0, 0%, 50%, 0.125),
    inset 0px -1px 0 0 hsla(0, 0%, 50%, 0.125) !important;
}

.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li {
  box-shadow:
    0px -1px 0 0 hsla(0, 0%, 50%, 0.125),
    inset 0px -1px 0 0 hsla(0, 0%, 50%, 0.125) !important;
  padding-left: 12px !important;
  padding-right: 12px !important;
}

.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li .custom-tab,
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li .custom-tab * {
  min-width: 100%;
}
.notes-widget-wrapper .custom-tab,
.notes-widget-wrapper .folder-title-changer input,
.notes-widget-wrapper .notes-widget-wrapper__tab-creator_small {
  font-size: unset !important;
  line-height: unset !important;
}

/*HOVER - color*/
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li .custom-tab__name,
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li:hover .custom-tab__name {
  color: inherit;
  opacity: .6
}
/*HOVER - background*/
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li:hover {
  background: var(--noteVertTabBgClr-Hover) !important;
}
/*ACTIVE*/
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li[class*="active"] {
  background: var(--noteVertTabBgClr-Active) !important;
  box-shadow:
    0px -1px 0 0 hsla(0, 0%, 50%, 0.125),
    inset 0px 0px 0 0 hsla(0, 0%, 50%, 0.125) !important;
}
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li[class*="active"] .custom-tab__name {
  opacity: 1;
  -webkit-font-smoothing: subpixel-antialiased !important;
}
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li[class*="active"]:hover {
  background: var(--noteVertTabBgClr-Active-Hover) !important;
}


/*****
OVERRIDES
******/

.notes-widget-wrapper__tab[class*="active"]:before {
  display: none !important;
}
.notes-widget-wrapper .widget__container .notes-widget-wrapper__tabs-list li.notes-widget-wrapper__tab_fixed {
  display: none !important;
}

.notes-widget-wrapper .custom-tab .custom-tab__name,
.notes-widget-wrapper .folder-title-changer input {
  font-size: calc(var(--bodyFontSize) - 2.5px) !important;
  line-height: calc(var(--bodyFontSize) - 2px) !important;
  -webkit-font-smoothing: antialiased !important;
  font-weight: 600 !important;

}

/***********
************
TODOS
************
************/

.todo-widget__list ul {}

.progress-bar__line {
  height: 2px;
  margin-top: 3px;
}

.todo-adder__input {
  background: hsla(0, 0%, 50%, 0) !important;
  border-color: hsla(0, 0%, 50%, .1) !important;
  height: 34px !important;
  border-radius: 6px !important;
  color: inherit !important
}


/*LIST CONTAINER - TOP PARENT*/
.todo-widget__list,
.todo-widget__list * {
  font-size: var(--bodyFontSize) !important;
  line-height: var(--bodyLineHeight) !important;

}
/*LIST CONTAINER - WRAPPING LIST ITEMS*/
ul.todo-widget__drag-container {
  display: block !important;
  padding: unset !important;
  margin: unset !important;
  list-style: unset !important;
  font-size: unset !important;
  /**************************/
  border: var(--testBrdWidth) solid purple;
  padding: var(--testpadLR) !important;
}
/*ITEM - OUTER WRAPPER*/
#appID .todo-item,
#appID li.todo-item,
#appID li.todo-item.todo-item_wrapped {
  display: block !important;
  align-items: unset !important;
  position: unset !important;
  text-overflow: unset !important;
  list-style: unset !important;
  text-align: left !important;
  line-height: unset !important;
  unicode-bidi: unset !important;
  margin-top: var(--todoitemMargTopBtm) !important;
  margin-bottom: var(--todoitemMargTopBtm) !important;
  /**************************/
  border: var(--testBrdWidth) solid green;
  padding: var(--testpadLR) !important;
  text-overflow: unset !important;
}
/*ITEM - FLEX WRAPPER*/
li.todo-item .todo-item__container,
li.todo-item.todo-item_wrapped .todo-item__container {
  display: flex !important;
  flex: 1 !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  width: 100% !important;
  min-height: unset !important;
  height: auto !important;
  max-height: unset !important;
  margin: unset !important;
  box-sizing: border-box !important;
  flex-wrap: unset !important;
  column-gap: 10px !important;
  /**************************/
  border: var(--testBrdWidth) solid red;
  padding: var(--testpadLR) !important;
}
/*FLEX WRAPPER > LEFT COLUMN > CHECKBOX  & CHECKMARK*/
li.todo-item .todo-item__container .todo-item__check,
li.todo-item.todo-item_wrapped .todo-item__container .todo-item__check,
li.todo-item .todo-item__container .todo-item__check svg,
li.todo-item.todo-item_wrapped .todo-item__container .todo-item__check svg {
  flex: unset !important;
  box-sizing: unset !important;
  display: block !important;
  margin: unset !important;
  line-height: unset !important;
  text-align: unset !important;
}
/*FLEX WRAPPER > LEFT COLUMN > CHECKBOX*/
li.todo-item .todo-item__container .todo-item__check,
li.todo-item.todo-item_wrapped .todo-item__container .todo-item__check {
  margin-top: 2px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: var(--checkboxWidth) !important;
  height: var(--checkboxWidth) !important;
  min-width: var(--checkboxWidth) !important;
  min-height: var(--checkboxWidth) !important;
  border-radius: 4px !important;
}
/*FLEX WRAPPER > LEFT COLUMN > CHECKMARK*/
li.todo-item .todo-item__container .todo-item__check svg,
li.todo-item.todo-item_wrapped .todo-item__container .todo-item__check svg {
  width: calc(var(--checkboxWidth) - 2px) !important;
  height: calc(var(--checkboxWidth) - 2px) !important;
}
/*FLEX WRAPPER > RIGHT COLUMN > FLEX WRAPPER> TEXT & DELETE BTN WRAPPERS*/
li.todo-item .todo-item__container .todo-item__input-wrapper,
li.todo-item.todo-item_wrapped .todo-item__container .todo-item__input-wrapper {
  display: flex !important;
  flex: unset !important;
  width: 100% !important;
  flex-wrap: unset !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  line-height: unset !important;
  position: relative !important;
  overflow: hidden !important;
  /**************************/
}
/*FLEX WRAPPER > RIGHT COLUMN > FLEX WRAPPER> TEXTAREA WRAPPER*/
li.todo-item .todo-item__container .todo-item__input-box,
li.todo-item.todo-item_wrapped .todo-item__container .todo-item__input-box {
  display: block !important;
  width: calc(100% - 0px) !important;
  position: unset !important;
  font-size: unset !important;
  font-size: unset !important;
  padding-right: var(--todoitempadRight) !important;

  /*************************
    border: var(--testBrdWidth) solid turquoise;
    padding: var(--testpadLR) !important;
    */
}

/*FLEX WRAPPER > RIGHT COLUMN > FLEX WRAPPER> TEXTAREA*/
li.todo-item .todo-item__container textarea,
li.todo-item.todo-item_wrapped .todo-item__container textarea {
  display: block !important;
  width: 100% !important;
  position: unset !important;
  margin: unset !important;
  font-size: inherit !important;
  line-height: inherit !important;
  white-space: pre-line !important;
  box-sizing: border-box !important;
  overflow-y: visible !important;
  padding: 0px !important;
  /*************************
    border: var(--testBrdWidth) solid turquoise;
    padding: var(--testpadLR) !important;
    */
}
/*FLEX WRAPPER > RIGHT COLUMN > FLEX WRAPPER> TEXTAREA - EDITING*/
li.todo-item .todo-item__container textarea.todo-item__item_editing,
li.todo-item.todo-item_wrapped .todo-item__container textarea.todo-item__item_editing {
  margin-bottom: unset !important;
}
/*FLEX WRAPPER > RIGHT COLUMN > FLEX WRAPPER> DELETE BTN WRAPPER*/
li.todo-item .todo-item__container .todo-item__delete,
li.todo-item.todo-item_wrapped .todo-item__container .todo-item__delete {
  --todoitempadRight: 15px;
  display: flex !important;
  align-items: center !important;
  justify-content: center;
  width: 12px !important;
  height: 12px !important;
  border-radius: 100px;
  position: unset !important;
  pointer-events: unset !important;
  visibility: visible !important;
  margin: 0px !important;
  position: absolute !important;
  right: -2px;
  top: 0;
  bottom: 0;
  opacity: 0 !important;
  transition: .15s !important;
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 50%, 0);

  /*************************
    border: var(--testBrdWidth) solid turquoise;
    padding: var(--testpadLR) !important;
    */
}
li.todo-item:hover .todo-item__container .todo-item__delete,
li.todo-item.todo-item_wrapped:hover .todo-item__container .todo-item__delete {
  opacity: 1 !important;
}
li.todo-item .todo-item__container .todo-item__delete svg,
li.todo-item.todo-item_wrapped .todo-item__container .todo-item__delete svg {
  opacity: .35 !important;
  transition: .05s !important;
  width: 13px !important;
  height: 13px !important;
}
li.todo-item:hover .todo-item__container .todo-item__delete svg:hover,
li.todo-item.todo-item_wrapped:hover .todo-item__container .todo-item__delete svg:hover {
  opacity: 1 !important;
}


/******
HIDDEN TODOS
********/
#appID .todo-item[style*="display: none"],
#appID li.todo-item[style*="display: none"],
#appID li.todo-item.todo-item_wrapped[style*="display: none"] {
  height: 0px !important;
  overflow: hidden !important;
  margin: 0px !important;

}


	
</style>`;

	document.head.insertAdjacentHTML("beforeend", style);
})();
