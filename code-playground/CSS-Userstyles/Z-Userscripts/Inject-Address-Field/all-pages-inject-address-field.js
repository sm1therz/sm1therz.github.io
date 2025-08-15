// ==UserScript==
// @name         All Pages > Inject > Address Field
// @namespace    https://example.com/
// @version      1.0.0
// @description  Injects an address field and copy-URL button on every page.
// @match        *://*/*
// @exclude      about:*
// @exclude      chrome:*
// @exclude      edge:*
// @exclude      opera:*
// @exclude      brave:*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  // Prevent injecting into iframes. Remove this line if you want iframes too.
  if (window.top !== window.self) return;

  function init() {
    if (document.querySelector('.rs-address-container')) return;

    /* ================================
       CSS — edit everything in here
       ================================ */
    const css = `
    :root {
    --rs-addressbgClr:hsla(0,0%,100%,.1);
    --rs-addressClr:hsla(0,0%,0%,.5);
    --rs-addressPad:2px 8px;
    --rs-addressFontSize:12px;
    --rs-addressLineHeight:1.2;
    --rs-addressBrdClr:hsla(0,0%,50%,.1);
    }
      .rs-address-container {
        position: fixed;
        top: 0px !important;
        right: 0px !important;
        display: flex;
        flex-direction: row;
        justify-content:flex-end;
        align-items: center;
        gap: 4px !important;
        padding: 5px !important;
        border-radius: 8px !important;
        background: hsla(0,0%,50%,.1) !important;
        backdrop-filter: blur(4px) !important;
        z-index: 2147483647 !important;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, sans-serif !important;
        max-width:calc(100% - 30px) !important;
        overflow:hidden !important;
      }
      .rs-address-container:focus-within {
        --rs-addressbgClr:white;
        --rs-addressClr:hsla(0,0%,0%,1);
        --rs-addressBrdClr:hsla(0,0%,0%,.2);

      }
      #rs-address-input:focus-within {
      width:100vw;
      max-width:100%;
      background:white;
      }
      #rs-address-input {
        flex:1;
        width: 100%;
        max-width: 80px;
        padding: var(--rs-addressPad);
        border: 1px solid var(--rs-addressBrdClr);
        border-radius: 6px;
        outline: none;
        background: var(--rs-addressbgClr);
        color: var(--rs-addressClr) !important;
        font-size: var(--rs-addressFontSize) !important;
        line-height: var(--rs-addressLineHeight) !important;
        transition:.1s !important;
      }
      .rs-address-copy {
        padding: var(--rs-addressPad) !important;
        border: 1px solid var(--rs-addressBrdClr) !important;
        border-radius: 6px !important;
        background: var(--rs-addressbgClr) !important;
        color: var(--rs-addressClr) !important;
        cursor: pointer !important;
        font-size: var(--rs-addressFontSize) !important;
        line-height: var(--rs-addressLineHeight) !important;
        user-select: none !important;
      }

    `;
    const style = document.createElement('style');
    style.id = 'rs-address-style';
    style.textContent = css;
    document.documentElement.appendChild(style);

    // UI
    const container = document.createElement('div');
    container.className = 'rs-address-container';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'rs-address-input';
    input.spellcheck = false;
    input.autocapitalize = 'off';
    input.autocomplete = 'off';
    input.value = window.location.href;

    const copyBtn = document.createElement('button');
    copyBtn.className = 'rs-address-copy';
    copyBtn.type = 'button';
    copyBtn.title = 'Copy current URL';
    copyBtn.textContent = 'Copy';

    // Behavior: navigate on Enter
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const raw = input.value.trim();
        if (!raw) return;
        let target;
        try {
          // Resolve relative or scheme-less inputs
          target = new URL(raw, window.location.href).href;
        } catch {
          target = raw;
        }
        window.location.assign(target);
      }
    });

    // Behavior: copy current URL
    async function copyURL() {
      const url = window.location.href;
      try {
        if (navigator.clipboard && window.isSecureContext !== false) {
          await navigator.clipboard.writeText(url);
        } else {
          // Fallback for non-secure contexts
          const ta = document.createElement('textarea');
          ta.value = url;
          ta.style.position = 'fixed';
          ta.style.top = '-9999px';
          document.body.appendChild(ta);
          ta.focus();
          ta.select();
          document.execCommand('copy');
          ta.remove();
        }
        copyBtn.textContent = 'Copied';
        setTimeout(() => (copyBtn.textContent = 'Copy'), 1000);
      } catch {
        copyBtn.textContent = 'Failed';
        setTimeout(() => (copyBtn.textContent = 'Copy'), 1200);
      }
    }
    copyBtn.addEventListener('click', copyURL);

    container.appendChild(input);
    container.appendChild(copyBtn);
    document.documentElement.appendChild(container);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
