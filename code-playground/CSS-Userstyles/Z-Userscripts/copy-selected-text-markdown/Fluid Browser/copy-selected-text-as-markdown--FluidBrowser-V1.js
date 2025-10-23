
(function () {
  'use strict';
  

  if (window.top !== window.self) return; // no iframes

  var POPUP_ID = 'mdCopyPopup';
  var STYLE_ID = 'mdCopyPopupStyle';
  var loadingTurndown = false;

  // Selection snapshot (captured ONLY on mouseup/keyup)
  var hasSelection = false;
  var lastHTML = '';
  var lastText = '';

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var css = ''
      + '#' + POPUP_ID + '{'
      + 'position:fixed;bottom:20px;right:20px;z-index:2147483647;'
      + 'background:#333;color:#fff;font-size:12px;padding:6px 10px;'
      + 'border-radius:4px;cursor:pointer;user-select:none;'
      + 'box-shadow:0 2px 6px rgba(0,0,0,.3);display:none;}'
      + '#' + POPUP_ID + ':hover{background:#000;}';
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = css;
    (document.documentElement || document.head || document.body).appendChild(style);
  }

  function ensurePopup() {
    var el = document.getElementById(POPUP_ID);
    if (el) return el;
    el = document.createElement('div');
    el.id = POPUP_ID;
    el.textContent = 'Copy MD';
    // prevent selection collapse on older engines
    el.addEventListener('mousedown', function (e) { e.preventDefault(); }, false);
    el.addEventListener('click', onCopyClick, false);
    (document.documentElement || document.body).appendChild(el);
    return el;
  }

  function showPopup() {
    var el = ensurePopup();
    el.style.display = 'block';
  }

  function hidePopup() {
    var el = document.getElementById(POPUP_ID);
    if (el) el.style.display = 'none';
  }

  // Toggle popup visibility ONLY (no cloning here)
  function onSelectionChangeToggle() {
    var sel = window.getSelection && window.getSelection();
    if (sel && !sel.isCollapsed) showPopup(); else hidePopup();
  }

  // Snapshot selection (HTML + text) — called only on mouseup/keyup
  function snapshotSelection() {
    var sel = window.getSelection && window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
      hasSelection = false;
      lastHTML = '';
      lastText = '';
      return;
    }
    var holder = document.createElement('div');
    for (var i = 0; i < sel.rangeCount; i++) {
      try { holder.appendChild(sel.getRangeAt(i).cloneContents()); } catch (e) {}
    }
    hasSelection = holder.textContent && holder.textContent.replace(/\s+/g, '').length > 0;
    lastHTML = holder.innerHTML || '';
    lastText = holder.textContent || '';
  }

  // Debounced scheduler (120ms)
  var snapshotPending = false;
  function scheduleSnapshot() {
    if (snapshotPending) return;
    snapshotPending = true;
    setTimeout(function () {
      snapshotPending = false;
      snapshotSelection();
    }, 120);
  }

  // -------- Turndown loader (lazy + multi-CDN fallback) --------
  function ensureTurndown(callback) {
    if (typeof window.TurndownService === 'function') { callback(null); return; }
    if (loadingTurndown) {
      var tries = 0;
      var t = setInterval(function () {
        if (typeof window.TurndownService === 'function' || tries++ > 40) {
          clearInterval(t);
          callback(typeof window.TurndownService === 'function' ? null : new Error('load-timeout'));
        }
      }, 100);
      return;
    }
    loadingTurndown = true;
    var urls = [
      'https://unpkg.com/turndown@7.1.2/dist/turndown.js',
      'https://cdn.jsdelivr.net/npm/turndown@7.1.2/dist/turndown.js',
      'https://cdnjs.cloudflare.com/ajax/libs/turndown/7.1.2/turndown.js'
    ];
    var i = 0;
    (function tryNext() {
      if (i >= urls.length) { loadingTurndown = false; callback(new Error('all-cdns-failed')); return; }
      var s = document.createElement('script');
      s.src = urls[i++];
      s.onload = function () { loadingTurndown = false; callback(null); };
      s.onerror = function () { if (s.parentNode) s.parentNode.removeChild(s); tryNext(); };
      (document.documentElement || document.head || document.body).appendChild(s);
    })();
  }

  // -------- Markdown tweaks (lists + spacing) --------
  function tidyLists(markdown) {
    var lines = markdown.split('\n');
    var out = [];
    var inList = false;

    for (var i = 0; i < lines.length; i++) {
      var l = lines[i];

      // Exactly one space after "-" and "N."
      l = l.replace(/^(\s*-\s)\s+/, '$1')
           .replace(/^(\s*\d+\.\s)\s+/, '$1');

      // Swap stray "* " → "- "
      l = l.replace(/^(\s*)\*\s/, '$1- ');

      var isListItem = /^(\s*(- |\d+\.)).+/.test(l);

      if (isListItem) {
        if (!inList && out.length && out[out.length - 1].trim() !== '') out.push('');
        inList = true;
        out.push(l);
      } else if (l.trim() === '') {
        if (inList) {
          var next = lines[i + 1];
          if (next && !/^(\s*(- |\d+\.)).+/.test(next)) {
            out.push('');
            inList = false;
          }
        } else {
          out.push('');
        }
      } else {
        inList = false;
        out.push(l);
      }
    }
    return out.join('\n');
  }

  // Remove ".sticky" inside <pre>, and convert <pre> to fenced blocks
  function normalizePreAndSticky(holder) {
    var sticky = holder.querySelectorAll('pre .sticky');
    for (var i = 0; i < sticky.length; i++) {
      var n = sticky[i];
      if (n.parentNode) n.parentNode.removeChild(n);
    }
    var pres = holder.querySelectorAll('pre');
    for (var j = 0; j < pres.length; j++) {
      var pre = pres[j];
      var codeText = pre.textContent || '';
      var fenced = '```\n' + codeText.replace(/\r\n?/g, '\n') + '\n```';
      var txt = document.createTextNode(fenced);
      pre.parentNode.insertBefore(txt, pre);
      pre.parentNode.removeChild(pre);
    }
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function' && window.isSecureContext !== false) {
      navigator.clipboard.writeText(text)["catch"](function () { fallbackCopy(text); });
    } else {
      fallbackCopy(text);
    }
  }
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', 'readonly');
    ta.style.position = 'fixed';
    ta.style.top = '-9999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* ignore */ }
    if (ta.parentNode) ta.parentNode.removeChild(ta);
  }

  function onCopyClick() {
    if (!hasSelection || (!lastHTML && !lastText)) { hidePopup(); return; }

    var holder = document.createElement('div');
    holder.innerHTML = lastHTML || '';

    normalizePreAndSticky(holder);

    ensureTurndown(function (err) {
      var md = '';
      if (!err && typeof window.TurndownService === 'function') {
        try {
          var td = new window.TurndownService({
            headingStyle: 'atx',
            codeBlockStyle: 'fenced',
            bulletListMarker: '-'
          });
          md = td.turndown(holder.innerHTML);
        } catch (e) {
          md = holder.textContent || lastText || '';
        }
      } else {
        md = holder.textContent || lastText || '';
      }

      md = tidyLists(md);
      copyToClipboard(md);
      hidePopup();
    });
  }

  function init() {
    injectStyle();
    ensurePopup();

    // Show/hide popup ONLY based on selectionchange (no cloning)
    document.addEventListener('selectionchange', onSelectionChangeToggle, false);

    // Snapshot selection ONLY on mouseup/keyup
    document.addEventListener('mouseup', scheduleSnapshot, false);
    document.addEventListener('keyup', scheduleSnapshot, false);

    // Misc controls
    document.addEventListener('keydown', function (e) { if ((e && e.key === 'Escape') || e === 27) hidePopup(); }, false);
    window.addEventListener('blur', hidePopup, false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, false);
  } else {
    init();
  }
})();
