
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
    --rs-topBtnbgClr:hsla(0,0%,100%,.1);
    --rs-topBtnClr:hsla(0,0%,0%,.5);
    --rs-topBtnPad:2px 8px;
    --rs-topBtnWrapPad:2px;
    --rs-topBtnFontSize:12px;
    --rs-topBtnLineHeight:1.3;
    --rs-topBtnRightPos:0px;
    --rs-topBtnBrdClr:hsla(0,0%,50%,.1);
    --rs-topBtnHeight:20px;
    }
      html body .rs-address-container,
      html .rs-address-container,
      html > .rs-address-container,
      * .rs-address-container,
      .rs-address-container {
        position: fixed;
        top: 0px !important;
        right: var(--rs-topBtnRightPos) !important;
        display: flex;
        flex-direction: row;
        justify-content:flex-end;
        align-items: center;
        gap: 4px !important;
        padding: var(--rs-topBtnWrapPad) !important;
        border-radius: 8px !important;
        background: hsla(0,0%,50%,0) !important;
        backdrop-filter: blur(0px) !important;
        z-index: 2147483647 !important;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, sans-serif !important;
        max-width:calc(100vw - var(--rs-topBtnRightPos) - 40px) !important;
        margin:unset !important;
        width:unset !important;
        overflow:hidden !important;
        transform-origin: top right;
        transform:scale(.6);
        transition: .15s;
        transition-delay:1s;
          
      }
      .rs-address-container:hover,
      .rs-address-container:focus-within {
      background: hsla(0,0%,50%,.1) !important;
      backdrop-filter: blur(4px) !important;
      transition-delay:0s !important;
      --rs-topBtnbgClr:white;
      --rs-topBtnClr:hsla(0,0%,0%,1);
      --rs-topBtnBrdClr:hsla(0,0%,0%,.2);
      --rs-topBtnWrapPad:4px;
      transform: scale(1);
      }


      #rs-address-input:focus-within {
      width:100vw;
      max-width:100%;
      background:white;
      }
      html body #rs-address-input,
      html #rs-address-input,
      html > #rs-address-input,
      * #rs-address-input,
      #rs-address-input {
        flex:1;
        width: 100%;
        max-width: 80px;
        padding: var(--rs-topBtnPad);
        border: 1px solid var(--rs-topBtnBrdClr);
        border-radius: 6px;
        outline: none;
        background: var(--rs-topBtnbgClr) !important;
        color: var(--rs-topBtnClr) !important;
        font-size: var(--rs-topBtnFontSize) !important;
        line-height: var(--rs-topBtnLineHeight) !important;
        transition:.1s !important;
        margin:unset !important;
      }
      html body .rs-address-copy,
      html .rs-address-copy,
      html * .rs-address-copy,
      html[id*="start"] .rs-address-copy,
      html[id*="start"] * .rs-address-copy,
      html > .rs-address-copy,
      * .rs-address-copy,
      .rs-address-copy {
        padding: var(--rs-topBtnPad) !important;
        border: 1px solid var(--rs-topBtnBrdClr) !important;
        border-radius: 6px !important;
        background-color: var(--rs-topBtnbgClr) !important;
        color: var(--rs-topBtnClr) !important;
        cursor: pointer !important;
        font-size: var(--rs-topBtnFontSize) !important;
        line-height: var(--rs-topBtnLineHeight) !important;
        user-select: none !important;
        margin:unset !important;
      }
      /*************
      **************
      DIIGO
      **************
      **************/
      
/***
****/



      #diigo-popup-toggle-btn ~ .rs-address-container {
      --rs-topBtnRightPos:30px;
      }
      #diigo-popup-toggle-btn[title*="Hide Diigo"] ~ .rs-address-container{
      --rs-topBtnRightPos:40px;
      transition-delay:0s;
      }
      #diigo-popup-toggle-btn:hover ~ .rs-address-container {
      --rs-topBtnRightPos:40px;
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


