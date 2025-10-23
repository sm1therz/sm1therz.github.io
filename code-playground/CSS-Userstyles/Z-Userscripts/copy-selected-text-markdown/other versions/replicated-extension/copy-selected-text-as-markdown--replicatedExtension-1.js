// ==UserScript==
// @name         Copy Selection as Markdown — Userscript Port
// @namespace    https://github.com/0x6b/copy-selection-as-markdown (userscript port)
// @version      0.23.0-us
// @description  Port of the Firefox extension "Copy Selection as Markdown" to a single userscript. Copies selection, page title+URL, or hovered link as Markdown, with the original conversion pipeline.
// @author       Original: 0x6b (extension). Userscript glue: ChatGPT conversion for R S.
// @match        *://*/*
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==
/*! NOTE: This userscript embeds the compiled content-script from the extension's v0.23.0 (`copy.js`),
    which includes Turndown and related plugins under their respective licenses. The userscript adds
    menu commands, hotkeys, a hovered-link helper, and a storage shim so the module runs unmodified. */

const CSAM_DEFAULTS = {
  "use-quote": true,
  "link-to-source": true,
  headingStyle: "atx",
  bulletListMarker: "-",
  codeBlockStyle: "indented",
  fence: "`",
  emDelimiter: "_",
  strongDelimiter: "**",
  linkStyle: "inlined",
  linkReferenceStyle: "full",
  debug: false,
  mathjax: false,
  gfm: false,
  linkWithoutStyling: false,
  img: false,
  // Advanced
  titleSubstitution: "",
  embedImage: false
};

\
(function () {
  'use strict';

  // --- Hovered <a> tracker (for "copy hovered link as Markdown") ---
  let __hoveredLink = null;
  document.addEventListener('mouseover', (e) => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (a) __hoveredLink = a;
  }, { capture: true, passive: true });

  // --- Simple storage shim to satisfy copy.js's `browser.storage.local.get()` ---
  const storageShim = {
    async get() {
      try {
        const saved = await GM_getValue('csam_options', {});
        // Merge with defaults (fence is a single char here; copy.js handles tripling internally)
        return Object.assign({}, CSAM_DEFAULTS, saved || {});
      } catch (e) {
        return Object.assign({}, CSAM_DEFAULTS);
      }
    },
    async set(obj) {
      const prev = await storageShim.get();
      await GM_setValue('csam_options', Object.assign({}, prev, obj));
    }
  };

  // Expose minimal `browser` API expected by the embedded module
  if (!window.browser) window.browser = {};
  if (!window.browser.storage) window.browser.storage = {};
  if (!window.browser.storage.local) window.browser.storage.local = {};
  window.browser.storage.local.get = storageShim.get;

  // --- Clipboard fallback: if ClipboardItem write fails, use GM_setClipboard(text/plain) ---
  (function installClipboardFallback() {
    try {
      const origWrite = navigator.clipboard && navigator.clipboard.write;
      if (!origWrite) {
        // Minimal polyfill that only handles [ClipboardItem] -> text/plain -> GM_setClipboard
        navigator.clipboard = navigator.clipboard || {};
        navigator.clipboard.write = async function (items) {
          try {
            // Try extracting text/plain from the first ClipboardItem
            const item = items && items[0];
            let txt = '';
            if (item && item.types && item.getType && item.types.includes('text/plain')) {
              const blob = await item.getType('text/plain');
              txt = await blob.text();
            }
            if (txt) GM_setClipboard(txt);
          } catch (e) {
            /* ignore */
          }
        };
        return;
      }
      navigator.clipboard.write = async function (items) {
        try {
          return await origWrite.call(navigator.clipboard, items);
        } catch (e) {
          try {
            const item = items && items[0];
            let txt = '';
            if (item && item.types && item.getType && item.types.includes('text/plain')) {
              const blob = await item.getType('text/plain');
              txt = await blob.text();
            }
            if (txt) GM_setClipboard(txt);
          } catch (_e) {
            /* ignore */
          }
        }
      };
    } catch (e) {
      /* ignore */
    }
  })();

  // --- Utility: title substitution option (matches extension behavior) ---
  function convertTitleSubstitution(titleSubstitutionOption = '') {
    const regexpRegexp = /^\/(.+)\/$/;
    const regexEscape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const convertLine = (line) => {
      if (regexpRegexp.test(line)) {
        const m = line.match(regexpRegexp);
        return m && m[1] ? m[1] : '';
      } else {
        return regexEscape(line);
      }
    };
    const parts = String(titleSubstitutionOption).split(/\n/).map(l => `(${convertLine(l)})`).join('|');
    return parts ? new RegExp(parts, 'g') : /$^/;
  }

  // --- Actions that don't rely on the embedded converter (page + link) ---
  async function copyPageTitleAndUrl() {
    const opt = await storageShim.get();
    let t = document.title || '';
    if (opt.titleSubstitution) {
      t = t.replace(convertTitleSubstitution(opt.titleSubstitution), '');
    }
    const u = location.href;
    const text = opt.linkWithoutStyling ? `${t} (${u})` : `[${t}](${u})`;
    GM_setClipboard(text);
  }

  async function copyHoveredLinkAsMarkdown() {
    const a = __hoveredLink;
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href) return;
    const title = a.getAttribute('title') || '';
    const label = (a.textContent || '').trim() || href;
    const opt = await storageShim.get();
    const text = opt.linkWithoutStyling
      ? `${label} (${href}${title ? ` "${title}"` : ''})`
      : `[${label}](${href}${title ? ` "${title}"` : ''})`;
    GM_setClipboard(text);
  }

  // --- Invoke the embedded converter (selection -> Markdown) ---
  function copySelectionAsMarkdown() {
    // The embedded IIFE reads options from browser.storage.local.get() and writes to clipboard.
    // We just re-run it on demand.
    try {
      EMBEDDED_COPY_JS();
    } catch (e) {
      console.error('[CSAM userscript] copy failed', e);
    }
  }

  // --- Hotkeys ---
  document.addEventListener('keydown', (e) => {
    const mod = navigator.platform.startsWith('Mac') ? e.metaKey : e.ctrlKey;
    // Copy selection as Markdown: Cmd/Ctrl+Shift+E (matches extension)
    if (mod && e.shiftKey && !e.altKey && !e.repeat && e.code === 'KeyE') {
      e.preventDefault();
      copySelectionAsMarkdown();
    }
    // Copy page title + URL: Cmd/Ctrl+Shift+U
    if (mod && e.shiftKey && !e.altKey && !e.repeat && e.code === 'KeyU') {
      e.preventDefault();
      copyPageTitleAndUrl();
    }
    // Copy hovered link as Markdown: Cmd/Ctrl+Shift+L
    if (mod && e.shiftKey && !e.altKey && !e.repeat && e.code === 'KeyL') {
      e.preventDefault();
      copyHoveredLinkAsMarkdown();
    }
  }, { capture: true });

  // --- Menu commands ---
  try {
    GM_registerMenuCommand('Copy Selection as Markdown (⌘/Ctrl+Shift+E)', copySelectionAsMarkdown);
    GM_registerMenuCommand('Copy Page Title + URL (⌘/Ctrl+Shift+U)', copyPageTitleAndUrl);
    GM_registerMenuCommand('Copy Hovered Link as Markdown (⌘/Ctrl+Shift+L)', copyHoveredLinkAsMarkdown);
    GM_registerMenuCommand('Open Settings Panel…', async () => {
      const opt = await storageShim.get();
      openOptionsPanel(opt);
    });
  } catch (e) { /* menu not available */ }

  // --- Lightweight options panel (subset) ---
  function openOptionsPanel(opt) {
    const existing = document.getElementById('csam-userscript-panel');
    if (existing) { existing.remove(); }
    const el = document.createElement('div');
    el.id = 'csam-userscript-panel';
    el.innerHTML = `
      <div class="csam-panel">
        <header><strong>Copy Selection as Markdown — Settings</strong></header>
        <section>
          <label><input type="checkbox" id="csam_use_quote" ${opt["use-quote"] ? 'checked' : ''}/> Use blockquote wrapper</label><br/>
          <label><input type="checkbox" id="csam_link_to_source" ${opt["link-to-source"] ? 'checked' : ''}/> Append link to source</label><br/>
          <label><input type="checkbox" id="csam_link_no_style" ${opt.linkWithoutStyling ? 'checked' : ''}/> Link without styling (Text (URL))</label><br/>
          <label><input type="checkbox" id="csam_gfm" ${opt.gfm ? 'checked' : ''}/> GitHub Flavored Markdown (tables/task lists/strikethrough)</label><br/>
          <label><input type="checkbox" id="csam_mathjax" ${opt.mathjax ? 'checked' : ''}/> Experimental MathJax support</label><br/>
          <label><input type="checkbox" id="csam_img" ${opt.img ? 'checked' : ''}/> Keep <img> tag instead of Markdown image</label><br/>
          <label><input type="checkbox" id="csam_embed" ${opt.embedImage ? 'checked' : ''}/> Embed images as data URIs (gif/jpg/png/webp)</label>
          <hr/>
          <label>Heading style: 
            <select id="csam_heading">
              <option value="atx" ${opt.headingStyle==='atx'?'selected':''}>ATX (#)</option>
              <option value="setext" ${opt.headingStyle==='setext'?'selected':''}>Setext (= -)</option>
            </select>
          </label><br/>
          <label>Bullet marker: 
            <select id="csam_bullet">
              <option value="-" ${opt.bulletListMarker==='-'?'selected':''}>- (hyphen)</option>
              <option value="+" ${opt.bulletListMarker==='+'?'selected':''}>+ (plus)</option>
              <option value="*" ${opt.bulletListMarker==='*'?'selected':''}>* (asterisk)</option>
            </select>
          </label><br/>
          <label>Code block style: 
            <select id="csam_codeblock">
              <option value="indented" ${opt.codeBlockStyle==='indented'?'selected':''}>Indented</option>
              <option value="fenced" ${opt.codeBlockStyle==='fenced'?'selected':''}>Fenced</option>
            </select>
          </label><br/>
          <label>Fence character: 
            <select id="csam_fence">
              <option value="`" ${opt.fence==='`'?'selected':''}>` (backtick)</option>
              <option value="~" ${opt.fence==='~'?'selected':''}>~ (tilde)</option>
            </select>
          </label><br/>
          <label>Em delimiter: 
            <select id="csam_em">
              <option value="_" ${opt.emDelimiter==='_'?'selected':''}>_ (underscore)</option>
              <option value="*" ${opt.emDelimiter==='*'?'selected':''}>* (asterisk)</option>
            </select>
          </label><br/>
          <label>Strong delimiter: 
            <select id="csam_strong">
              <option value="**" ${opt.strongDelimiter==='**'?'selected':''}>** (double asterisk)</option>
              <option value="__" ${opt.strongDelimiter==='__'?'selected':''}>__ (double underscore)</option>
            </select>
          </label><br/>
          <label>Link style:
            <select id="csam_linkstyle">
              <option value="inlined" ${opt.linkStyle==='inlined'?'selected':''}>Inline</option>
              <option value="referenced" ${opt.linkStyle==='referenced'?'selected':''}>Referenced</option>
            </select>
          </label><br/>
          <label>Link reference style:
            <select id="csam_linkref">
              <option value="full" ${opt.linkReferenceStyle==='full'?'selected':''}>Full</option>
              <option value="collapsed" ${opt.linkReferenceStyle==='collapsed'?'selected':''}>Collapsed</option>
              <option value="shortcut" ${opt.linkReferenceStyle==='shortcut'?'selected':''}>Shortcut</option>
            </select>
          </label><br/>
          <label>Title substitution (one per line; or /regex/):
            <br/><textarea id="csam_title" rows="5" style="width:100%"></textarea>
          </label>
        </section>
        <footer>
          <button id="csam_save">Save</button>
          <button id="csam_cancel">Cancel</button>
        </footer>
      </div>
    `;
    document.body.appendChild(el);
    document.getElementById('csam_title').value = opt.titleSubstitution || '';
    GM_addStyle(`
      #csam-userscript-panel { position: fixed; inset: 0; z-index: 2147483647; background: rgba(0,0,0,.35); display:flex; align-items:center; justify-content:center; }
      #csam-userscript-panel .csam-panel { width: min(560px, 92vw); max-height: 80vh; overflow:auto; background: #1e1e1e; color:#eee; border-radius: 12px; padding:16px; box-shadow: 0 20px 60px rgba(0,0,0,.45); font: 13px/1.4 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif; }
      #csam-userscript-panel .csam-panel header { font-size: 14px; margin-bottom: 8px; }
      #csam-userscript-panel .csam-panel section label { display:block; margin: 6px 0; }
      #csam-userscript-panel .csam-panel footer { display:flex; gap:8px; justify-content:flex-end; margin-top: 12px; }
      #csam-userscript-panel .csam-panel button { padding:6px 10px; border-radius: 8px; border:1px solid #444; background:#2a2a2a; color:#fff; cursor:pointer; }
      #csam-userscript-panel .csam-panel button:hover { background:#333; }
      @media (prefers-color-scheme: light) {
        #csam-userscript-panel .csam-panel { background:#fff; color:#111; }
        #csam-userscript-panel .csam-panel button { background:#f4f4f4; color:#111; border-color:#ccc; }
        #csam-userscript-panel .csam-panel button:hover { background:#e9e9e9; }
      }
    `);
    el.addEventListener('click', (e) => {
      if (e.target === el) el.remove();
    });
    el.querySelector('#csam_cancel').addEventListener('click', () => el.remove());
    el.querySelector('#csam_save').addEventListener('click', async () => {
      const next = {
        "use-quote": el.querySelector('#csam_use_quote').checked,
        "link-to-source": el.querySelector('#csam_link_to_source').checked,
        linkWithoutStyling: el.querySelector('#csam_link_no_style').checked,
        gfm: el.querySelector('#csam_gfm').checked,
        mathjax: el.querySelector('#csam_mathjax').checked,
        img: el.querySelector('#csam_img').checked,
        embedImage: el.querySelector('#csam_embed').checked,
        headingStyle: el.querySelector('#csam_heading').value,
        bulletListMarker: el.querySelector('#csam_bullet').value,
        codeBlockStyle: el.querySelector('#csam_codeblock').value,
        fence: el.querySelector('#csam_fence').value,
        emDelimiter: el.querySelector('#csam_em').value,
        strongDelimiter: el.querySelector('#csam_strong').value,
        linkStyle: el.querySelector('#csam_linkstyle').value,
        linkReferenceStyle: el.querySelector('#csam_linkref').value,
        titleSubstitution: el.querySelector('#csam_title').value || ''
      };
      await storageShim.set(next);
      el.remove();
    });
  }

  // --- Embed the compiled converter as a callable function ---
  function EMBEDDED_COPY_JS(){ (()=>{var pa=Object.create;var nr=Object.defineProperty;var ha=Object.getOwnPropertyDescriptor;var ya=Object.getOwnPropertyNames;var da=Object.getPrototypeOf,ma=Object.prototype.hasOwnProperty;var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var ga=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ya(e))!ma.call(t,i)&&i!==r&&nr(t,i,{get:()=>e[i],enumerable:!(n=ha(e,i))||n.enumerable});return t};var ir=(t,e,r)=>(r=t!=null?pa(da(t)):{},ga(e||!t||!t.__esModule?nr(r,"default",{value:t,enumerable:!0}):r,t));var qr=m((Se,xe)=>{(function(t){var e=typeof Se=="object"&&Se&&!Se.nodeType&&Se,r=typeof xe=="object"&&xe&&!xe.nodeType&&xe,n=typeof global=="object"&&global;(n.global===n||n.window===n||n.self===n)&&(t=n);var i,a=2147483647,o=36,l=1,u=26,f=38,c=700,d=72,s=128,g="-",b=/^xn--/,O=/[^\x20-\x7E]/,x=/[\x2E\u3002\uFF0E\uFF61]/g,k={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},y=o-l,p=Math.floor,A=String.fromCharCode,T;function E(h){throw new RangeError(k[h])}function H(h,v){for(var S=h.length,P=[];S--;)P[S]=v(h[S]);return P}function L(h,v){var S=h.split("@"),P="";S.length>1&&(P=S[0]+"@",h=S[1]),h=h.replace(x,".");var N=h.split("."),U=H(N,v).join(".");return P+U}function C(h){for(var v=[],S=0,P=h.length,N,U;S<P;)N=h.charCodeAt(S++),N>=55296&&N<=56319&&S<P?(U=h.charCodeAt(S++),(U&64512)==56320?v.push(((N&1023)<<10)+(U&1023)+65536):(v.push(N),S--)):v.push(N);return v}function $(h){return H(h,function(v){var S="";return v>65535&&(v-=65536,S+=A(v>>>10&1023|55296),v=56320|v&1023),S+=A(v),S}).join("")}function Z(h){return h-48<10?h-22:h-65<26?h-65:h-97<26?h-97:o}function Q(h,v){return h+22+75*(h<26)-((v!=0)<<5)}function I(h,v,S){var P=0;for(h=S?p(h/c):h>>1,h+=p(h/v);h>y*u>>1;P+=o)h=p(h/y);return p(P+(y+1)*h/(h+f))}function W(h){var v=[],S=h.length,P,N=0,U=s,M=d,G,X,ee,ie,B,V,Y,le,ce;for(G=h.lastIndexOf(g),G<0&&(G=0),X=0;X<G;++X)h.charCodeAt(X)>=128&&E("not-basic"),v.push(h.charCodeAt(X));for(ee=G>0?G+1:0;ee<S;){for(ie=N,B=1,V=o;ee>=S&&E("invalid-input"),Y=Z(h.charCodeAt(ee++)),(Y>=o||Y>p((a-N)/B))&&E("overflow"),N+=Y*B,le=V<=M?l:V>=M+u?u:V-M,!(Y<le);V+=o)ce=o-le,B>p(a/ce)&&E("overflow"),B*=ce;P=v.length+1,M=I(N-ie,P,ie==0),p(N/P)>a-U&&E("overflow"),U+=p(N/P),N%=P,v.splice(N++,0,U)}return $(v)}function q(h){var v,S,P,N,U,M,G,X,ee,ie,B,V=[],Y,le,ce,ot;for(h=C(h),Y=h.length,v=s,S=0,U=d,M=0;M<Y;++M)B=h[M],B<128&&V.push(A(B));for(P=N=V.length,N&&V.push(g);P<Y;){for(G=a,M=0;M<Y;++M)B=h[M],B>=v&&B<G&&(G=B);for(le=P+1,G-v>p((a-S)/le)&&E("overflow"),S+=(G-v)*le,v=G,M=0;M<Y;++M)if(B=h[M],B<v&&++S>a&&E("overflow"),B==v){for(X=S,ee=o;ie=ee<=U?l:ee>=U+u?u:ee-U,!(X<ie);ee+=o)ot=X-ie,ce=o-ie,V.push(A(Q(ie+ot%ce,0))),X=p(ot/ce);V.push(A(Q(X,0))),U=I(S,le,P==N),S=0,++P}++S,++v}return V.join("")}function j(h){return L(h,function(v){return b.test(v)?W(v.slice(4).toLowerCase()):v})}function fe(h){return L(h,function(v){return O.test(v)?"xn--"+q(v):v})}if(i={version:"1.4.1",ucs2:{decode:C,encode:$},decode:W,encode:q,toASCII:fe,toUnicode:j},typeof define=="function"&&typeof define.amd=="object"&&define.amd)define("punycode",function(){return i});else if(e&&r)if(xe.exports==e)r.exports=i;else for(T in i)i.hasOwnProperty(T)&&(e[T]=i[T]);else t.punycode=i})(Se)});var pe=m((gs,Br)=>{"use strict";Br.exports=TypeError});var _r=m(()=>{});var Me=m((ws,ln)=>{var $t=typeof Map=="function"&&Map.prototype,Et=Object.getOwnPropertyDescriptor&&$t?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Ve=$t&&Et&&typeof Et.get=="function"?Et.get:null,Wr=$t&&Map.prototype.forEach,Ft=typeof Set=="function"&&Set.prototype,Ot=Object.getOwnPropertyDescriptor&&Ft?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,ze=Ft&&Ot&&typeof Ot.get=="function"?Ot.get:null,Ur=Ft&&Set.prototype.forEach,mo=typeof WeakMap=="function"&&WeakMap.prototype,De=mo?WeakMap.prototype.has:null,go=typeof WeakSet=="function"&&WeakSet.prototype,$e=go?WeakSet.prototype.has:null,vo=typeof WeakRef=="function"&&WeakRef.prototype,Hr=vo?WeakRef.prototype.deref:null,bo=Boolean.prototype.valueOf,wo=Object.prototype.toString,So=Function.prototype.toString,xo=String.prototype.match,Mt=String.prototype.slice,ue=String.prototype.replace,Ao=String.prototype.toUpperCase,Gr=String.prototype.toLowerCase,Zr=RegExp.prototype.test,jr=Array.prototype.concat,te=Array.prototype.join,Eo=Array.prototype.slice,Vr=Math.floor,Rt=typeof BigInt=="function"?BigInt.prototype.valueOf:null,Tt=Object.getOwnPropertySymbols,Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Ae=typeof Symbol=="function"&&typeof Symbol.iterator=="object",Fe=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Ae||!0)?Symbol.toStringTag:null,en=Object.prototype.propertyIsEnumerable,zr=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function Kr(t,e){if(t===1/0||t===-1/0||t!==t||t&&t>-1e3&&t<1e3||Zr.call(/e/,e))return e;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof t=="number"){var n=t<0?-Vr(-t):Vr(t);if(n!==t){var i=String(n),a=Mt.call(e,i.length+1);return ue.call(i,r,"$&_")+"."+ue.call(ue.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return ue.call(e,r,"$&_")}var Nt=_r(),Jr=Nt.custom,Qr=nn(Jr)?Jr:null,tn={__proto__:null,double:'"',single:"'"},Oo={__proto__:null,double:/(["\\])/g,single:/(['\\])/g};ln.exports=function t(e,r,n,i){var a=r||{};if(oe(a,"quoteStyle")&&!oe(tn,a.quoteStyle))throw new TypeError('option "quoteStyle" must be "single" or "double"');if(oe(a,"maxStringLength")&&(typeof a.maxStringLength=="number"?a.maxStringLength<0&&a.maxStringLength!==1/0:a.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var o=oe(a,"customInspect")?a.customInspect:!0;if(typeof o!="boolean"&&o!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(oe(a,"indent")&&a.indent!==null&&a.indent!=="	"&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(oe(a,"numericSeparator")&&typeof a.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var l=a.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return on(e,a);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var u=String(e);return l?Kr(e,u):u}if(typeof e=="bigint"){var f=String(e)+"n";return l?Kr(e,f):f}var c=typeof a.depth>"u"?5:a.depth;if(typeof n>"u"&&(n=0),n>=c&&c>0&&typeof e=="object")return It(e)?"[Array]":"[Object]";var d=Ho(a,n);if(typeof i>"u")i=[];else if(an(i,e)>=0)return"[Circular]";function s(I,W,q){if(W&&(i=Eo.call(i),i.push(W)),q){var j={depth:a.depth};return oe(a,"quoteStyle")&&(j.quoteStyle=a.quoteStyle),t(I,j,n+1,i)}return t(I,a,n+1,i)}if(typeof e=="function"&&!Xr(e)){var g=Fo(e),b=je(e,s);return"[Function"+(g?": "+g:" (anonymous)")+"]"+(b.length>0?" { "+te.call(b,", ")+" }":"")}if(nn(e)){var O=Ae?ue.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):Ct.call(e);return typeof e=="object"&&!Ae?Ie(O):O}if(_o(e)){for(var x="<"+Gr.call(String(e.nodeName)),k=e.attributes||[],y=0;y<k.length;y++)x+=" "+k[y].name+"="+rn(To(k[y].value),"double",a);return x+=">",e.childNodes&&e.childNodes.length&&(x+="..."),x+="</"+Gr.call(String(e.nodeName))+">",x}if(It(e)){if(e.length===0)return"[]";var p=je(e,s);return d&&!Uo(p)?"["+Dt(p,d)+"]":"[ "+te.call(p,", ")+" ]"}if(Ro(e)){var A=je(e,s);return!("cause"in Error.prototype)&&"cause"in e&&!en.call(e,"cause")?"{ ["+String(e)+"] "+te.call(jr.call("[cause]: "+s(e.cause),A),", ")+" }":A.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+te.call(A,", ")+" }"}if(typeof e=="object"&&o){if(Qr&&typeof e[Qr]=="function"&&Nt)return Nt(e,{depth:c-n});if(o!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(Mo(e)){var T=[];return Wr&&Wr.call(e,function(I,W){T.push(s(W,e,!0)+" => "+s(I,e))}),Yr("Map",Ve.call(e),T,d)}if(qo(e)){var E=[];return Ur&&Ur.call(e,function(I){E.push(s(I,e))}),Yr("Set",ze.call(e),E,d)}if(ko(e))return Pt("WeakMap");if(Bo(e))return Pt("WeakSet");if(Lo(e))return Pt("WeakRef");if(No(e))return Ie(s(Number(e)));if(Do(e))return Ie(s(Rt.call(e)));if(Io(e))return Ie(bo.call(e));if(Co(e))return Ie(s(String(e)));if(typeof window<"u"&&e===window)return"{ [object Window] }";if(typeof globalThis<"u"&&e===globalThis||typeof global<"u"&&e===global)return"{ [object globalThis] }";if(!Po(e)&&!Xr(e)){var H=je(e,s),L=zr?zr(e)===Object.prototype:e instanceof Object||e.constructor===Object,C=e instanceof Object?"":"null prototype",$=!L&&Fe&&Object(e)===e&&Fe in e?Mt.call(se(e),8,-1):C?"Object":"",Z=L||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",Q=Z+($||C?"["+te.call(jr.call([],$||[],C||[]),": ")+"] ":"");return H.length===0?Q+"{}":d?Q+"{"+Dt(H,d)+"}":Q+"{ "+te.call(H,", ")+" }"}return String(e)};function rn(t,e,r){var n=r.quoteStyle||e,i=tn[n];return i+t+i}function To(t){return ue.call(String(t),/"/g,"&quot;")}function he(t){return!Fe||!(typeof t=="object"&&(Fe in t||typeof t[Fe]<"u"))}function It(t){return se(t)==="[object Array]"&&he(t)}function Po(t){return se(t)==="[object Date]"&&he(t)}function Xr(t){return se(t)==="[object RegExp]"&&he(t)}function Ro(t){return se(t)==="[object Error]"&&he(t)}function Co(t){return se(t)==="[object String]"&&he(t)}function No(t){return se(t)==="[object Number]"&&he(t)}function Io(t){return se(t)==="[object Boolean]"&&he(t)}function nn(t){if(Ae)return t&&typeof t=="object"&&t instanceof Symbol;if(typeof t=="symbol")return!0;if(!t||typeof t!="object"||!Ct)return!1;try{return Ct.call(t),!0}catch(e){}return!1}function Do(t){if(!t||typeof t!="object"||!Rt)return!1;try{return Rt.call(t),!0}catch(e){}return!1}var $o=Object.prototype.hasOwnProperty||function(t){return t in this};function oe(t,e){return $o.call(t,e)}function se(t){return wo.call(t)}function Fo(t){if(t.name)return t.name;var e=xo.call(So.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}function an(t,e){if(t.indexOf)return t.indexOf(e);for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1}function Mo(t){if(!Ve||!t||typeof t!="object")return!1;try{Ve.call(t);try{ze.call(t)}catch(e){return!0}return t instanceof Map}catch(e){}return!1}function ko(t){if(!De||!t||typeof t!="object")return!1;try{De.call(t,De);try{$e.call(t,$e)}catch(e){return!0}return t instanceof WeakMap}catch(e){}return!1}function Lo(t){if(!Hr||!t||typeof t!="object")return!1;try{return Hr.call(t),!0}catch(e){}return!1}function qo(t){if(!ze||!t||typeof t!="object")return!1;try{ze.call(t);try{Ve.call(t)}catch(e){return!0}return t instanceof Set}catch(e){}return!1}function Bo(t){if(!$e||!t||typeof t!="object")return!1;try{$e.call(t,$e);try{De.call(t,De)}catch(e){return!0}return t instanceof WeakSet}catch(e){}return!1}function _o(t){return!t||typeof t!="object"?!1:typeof HTMLElement<"u"&&t instanceof HTMLElement?!0:typeof t.nodeName=="string"&&typeof t.getAttribute=="function"}function on(t,e){if(t.length>e.maxStringLength){var r=t.length-e.maxStringLength,n="... "+r+" more character"+(r>1?"s":"");return on(Mt.call(t,0,e.maxStringLength),e)+n}var i=Oo[e.quoteStyle||"single"];i.lastIndex=0;var a=ue.call(ue.call(t,i,"\\$1"),/[\x00-\x1f]/g,Wo);return rn(a,"single",e)}function Wo(t){var e=t.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return r?"\\"+r:"\\x"+(e<16?"0":"")+Ao.call(e.toString(16))}function Ie(t){return"Object("+t+")"}function Pt(t){return t+" { ? }"}function Yr(t,e,r,n){var i=n?Dt(r,n):te.call(r,", ");return t+" ("+e+") {"+i+"}"}function Uo(t){for(var e=0;e<t.length;e++)if(an(t[e],`
`)>=0)return!1;return!0}function Ho(t,e){var r;if(t.indent==="	")r="	";else if(typeof t.indent=="number"&&t.indent>0)r=te.call(Array(t.indent+1)," ");else return null;return{base:r,prev:te.call(Array(e+1),r)}}function Dt(t,e){if(t.length===0)return"";var r=`
`+e.prev+e.base;return r+te.call(t,","+r)+`
`+e.prev}function je(t,e){var r=It(t),n=[];if(r){n.length=t.length;for(var i=0;i<t.length;i++)n[i]=oe(t,i)?e(t[i],t):""}var a=typeof Tt=="function"?Tt(t):[],o;if(Ae){o={};for(var l=0;l<a.length;l++)o["$"+a[l]]=a[l]}for(var u in t)oe(t,u)&&(r&&String(Number(u))===u&&u<t.length||Ae&&o["$"+u]instanceof Symbol||(Zr.call(/[^\w$]/,u)?n.push(e(u,t)+": "+e(t[u],t)):n.push(u+": "+e(t[u],t))));if(typeof Tt=="function")for(var f=0;f<a.length;f++)en.call(t,a[f])&&n.push("["+e(a[f])+"]: "+e(t[a[f]],t));return n}});var sn=m((Ss,un)=>{"use strict";var Go=Me(),jo=pe(),Ke=function(t,e,r){for(var n=t,i;(i=n.next)!=null;n=i)if(i.key===e)return n.next=i.next,r||(i.next=t.next,t.next=i),i},Vo=function(t,e){if(t){var r=Ke(t,e);return r&&r.value}},zo=function(t,e,r){var n=Ke(t,e);n?n.value=r:t.next={key:e,next:t.next,value:r}},Ko=function(t,e){return t?!!Ke(t,e):!1},Jo=function(t,e){if(t)return Ke(t,e,!0)};un.exports=function(){var e,r={assert:function(n){if(!r.has(n))throw new jo("Side channel does not contain "+Go(n))},delete:function(n){var i=e&&e.next,a=Jo(e,n);return a&&i&&i===a&&(e=void 0),!!a},get:function(n){return Vo(e,n)},has:function(n){return Ko(e,n)},set:function(n,i){e||(e={next:void 0}),zo(e,n,i)}};return r}});var kt=m((xs,fn)=>{"use strict";fn.exports=Object});var pn=m((As,cn)=>{"use strict";cn.exports=Error});var yn=m((Es,hn)=>{"use strict";hn.exports=EvalError});var mn=m((Os,dn)=>{"use strict";dn.exports=RangeError});var vn=m((Ts,gn)=>{"use strict";gn.exports=ReferenceError});var wn=m((Ps,bn)=>{"use strict";bn.exports=SyntaxError});var xn=m((Rs,Sn)=>{"use strict";Sn.exports=URIError});var En=m((Cs,An)=>{"use strict";An.exports=Math.abs});var Tn=m((Ns,On)=>{"use strict";On.exports=Math.floor});var Rn=m((Is,Pn)=>{"use strict";Pn.exports=Math.max});var Nn=m((Ds,Cn)=>{"use strict";Cn.exports=Math.min});var Dn=m(($s,In)=>{"use strict";In.exports=Math.pow});var Fn=m((Fs,$n)=>{"use strict";$n.exports=Math.round});var kn=m((Ms,Mn)=>{"use strict";Mn.exports=Number.isNaN||function(e){return e!==e}});var qn=m((ks,Ln)=>{"use strict";var Qo=kn();Ln.exports=function(e){return Qo(e)||e===0?e:e<0?-1:1}});var _n=m((Ls,Bn)=>{"use strict";Bn.exports=Object.getOwnPropertyDescriptor});var Lt=m((qs,Wn)=>{"use strict";var Je=_n();if(Je)try{Je([],"length")}catch(t){Je=null}Wn.exports=Je});var Hn=m((Bs,Un)=>{"use strict";var Qe=Object.defineProperty||!1;if(Qe)try{Qe({},"a",{value:1})}catch(t){Qe=!1}Un.exports=Qe});var jn=m((_s,Gn)=>{"use strict";Gn.exports=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},r=Symbol("test"),n=Object(r);if(typeof r=="string"||Object.prototype.toString.call(r)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var i=42;e[r]=i;for(var a in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var o=Object.getOwnPropertySymbols(e);if(o.length!==1||o[0]!==r||!Object.prototype.propertyIsEnumerable.call(e,r))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var l=Object.getOwnPropertyDescriptor(e,r);if(l.value!==i||l.enumerable!==!0)return!1}return!0}});var Kn=m((Ws,zn)=>{"use strict";var Vn=typeof Symbol<"u"&&Symbol,Xo=jn();zn.exports=function(){return typeof Vn!="function"||typeof Symbol!="function"||typeof Vn("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:Xo()}});var qt=m((Us,Jn)=>{"use strict";Jn.exports=typeof Reflect<"u"&&Reflect.getPrototypeOf||null});var Bt=m((Hs,Qn)=>{"use strict";var Yo=kt();Qn.exports=Yo.getPrototypeOf||null});var Zn=m((Gs,Yn)=>{"use strict";var Zo="Function.prototype.bind called on incompatible ",el=Object.prototype.toString,tl=Math.max,rl="[object Function]",Xn=function(e,r){for(var n=[],i=0;i<e.length;i+=1)n[i]=e[i];for(var a=0;a<r.length;a+=1)n[a+e.length]=r[a];return n},nl=function(e,r){for(var n=[],i=r||0,a=0;i<e.length;i+=1,a+=1)n[a]=e[i];return n},il=function(t,e){for(var r="",n=0;n<t.length;n+=1)r+=t[n],n+1<t.length&&(r+=e);return r};Yn.exports=function(e){var r=this;if(typeof r!="function"||el.apply(r)!==rl)throw new TypeError(Zo+r);for(var n=nl(arguments,1),i,a=function(){if(this instanceof i){var c=r.apply(this,Xn(n,arguments));return Object(c)===c?c:this}return r.apply(e,Xn(n,arguments))},o=tl(0,r.length-n.length),l=[],u=0;u<o;u++)l[u]="$"+u;if(i=Function("binder","return function ("+il(l,",")+"){ return binder.apply(this,arguments); }")(a),r.prototype){var f=function(){};f.prototype=r.prototype,i.prototype=new f,f.prototype=null}return i}});var ke=m((js,ei)=>{"use strict";var al=Zn();ei.exports=Function.prototype.bind||al});var Xe=m((Vs,ti)=>{"use strict";ti.exports=Function.prototype.call});var _t=m((zs,ri)=>{"use strict";ri.exports=Function.prototype.apply});var ii=m((Ks,ni)=>{"use strict";ni.exports=typeof Reflect<"u"&&Reflect&&Reflect.apply});var oi=m((Js,ai)=>{"use strict";var ol=ke(),ll=_t(),ul=Xe(),sl=ii();ai.exports=sl||ol.call(ul,ll)});var Wt=m((Qs,li)=>{"use strict";var fl=ke(),cl=pe(),pl=Xe(),hl=oi();li.exports=function(e){if(e.length<1||typeof e[0]!="function")throw new cl("a function is required");return hl(fl,pl,e)}});var hi=m((Xs,pi)=>{"use strict";var yl=Wt(),ui=Lt(),fi;try{fi=[].__proto__===Array.prototype}catch(t){if(!t||typeof t!="object"||!("code"in t)||t.code!=="ERR_PROTO_ACCESS")throw t}var Ut=!!fi&&ui&&ui(Object.prototype,"__proto__"),ci=Object,si=ci.getPrototypeOf;pi.exports=Ut&&typeof Ut.get=="function"?yl([Ut.get]):typeof si=="function"?function(e){return si(e==null?e:ci(e))}:!1});var vi=m((Ys,gi)=>{"use strict";var yi=qt(),di=Bt(),mi=hi();gi.exports=yi?function(e){return yi(e)}:di?function(e){if(!e||typeof e!="object"&&typeof e!="function")throw new TypeError("getProto: not an object");return di(e)}:mi?function(e){return mi(e)}:null});var wi=m((Zs,bi)=>{"use strict";var dl=Function.prototype.call,ml=Object.prototype.hasOwnProperty,gl=ke();bi.exports=gl.call(dl,ml)});var et=m((ef,Ti)=>{"use strict";var w,vl=kt(),bl=pn(),wl=yn(),Sl=mn(),xl=vn(),Pe=wn(),Te=pe(),Al=xn(),El=En(),Ol=Tn(),Tl=Rn(),Pl=Nn(),Rl=Dn(),Cl=Fn(),Nl=qn(),Ei=Function,Ht=function(t){try{return Ei('"use strict"; return ('+t+").constructor;")()}catch(e){}},Le=Lt(),Il=Hn(),Gt=function(){throw new Te},Dl=Le?function(){try{return arguments.callee,Gt}catch(t){try{return Le(arguments,"callee").get}catch(e){return Gt}}}():Gt,Ee=Kn()(),F=vi(),$l=Bt(),Fl=qt(),Oi=_t(),qe=Xe(),Oe={},Ml=typeof Uint8Array>"u"||!F?w:F(Uint8Array),ye={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?w:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?w:ArrayBuffer,"%ArrayIteratorPrototype%":Ee&&F?F([][Symbol.iterator]()):w,"%AsyncFromSyncIteratorPrototype%":w,"%AsyncFunction%":Oe,"%AsyncGenerator%":Oe,"%AsyncGeneratorFunction%":Oe,"%AsyncIteratorPrototype%":Oe,"%Atomics%":typeof Atomics>"u"?w:Atomics,"%BigInt%":typeof BigInt>"u"?w:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?w:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?w:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?w:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":bl,"%eval%":eval,"%EvalError%":wl,"%Float16Array%":typeof Float16Array>"u"?w:Float16Array,"%Float32Array%":typeof Float32Array>"u"?w:Float32Array,"%Float64Array%":typeof Float64Array>"u"?w:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?w:FinalizationRegistry,"%Function%":Ei,"%GeneratorFunction%":Oe,"%Int8Array%":typeof Int8Array>"u"?w:Int8Array,"%Int16Array%":typeof Int16Array>"u"?w:Int16Array,"%Int32Array%":typeof Int32Array>"u"?w:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":Ee&&F?F(F([][Symbol.iterator]())):w,"%JSON%":typeof JSON=="object"?JSON:w,"%Map%":typeof Map>"u"?w:Map,"%MapIteratorPrototype%":typeof Map>"u"||!Ee||!F?w:F(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":vl,"%Object.getOwnPropertyDescriptor%":Le,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?w:Promise,"%Proxy%":typeof Proxy>"u"?w:Proxy,"%RangeError%":Sl,"%ReferenceError%":xl,"%Reflect%":typeof Reflect>"u"?w:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?w:Set,"%SetIteratorPrototype%":typeof Set>"u"||!Ee||!F?w:F(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?w:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":Ee&&F?F(""[Symbol.iterator]()):w,"%Symbol%":Ee?Symbol:w,"%SyntaxError%":Pe,"%ThrowTypeError%":Dl,"%TypedArray%":Ml,"%TypeError%":Te,"%Uint8Array%":typeof Uint8Array>"u"?w:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?w:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?w:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?w:Uint32Array,"%URIError%":Al,"%WeakMap%":typeof WeakMap>"u"?w:WeakMap,"%WeakRef%":typeof WeakRef>"u"?w:WeakRef,"%WeakSet%":typeof WeakSet>"u"?w:WeakSet,"%Function.prototype.call%":qe,"%Function.prototype.apply%":Oi,"%Object.defineProperty%":Il,"%Object.getPrototypeOf%":$l,"%Math.abs%":El,"%Math.floor%":Ol,"%Math.max%":Tl,"%Math.min%":Pl,"%Math.pow%":Rl,"%Math.round%":Cl,"%Math.sign%":Nl,"%Reflect.getPrototypeOf%":Fl};if(F)try{null.error}catch(t){Si=F(F(t)),ye["%Error.prototype%"]=Si}var Si,kl=function t(e){var r;if(e==="%AsyncFunction%")r=Ht("async function () {}");else if(e==="%GeneratorFunction%")r=Ht("function* () {}");else if(e==="%AsyncGeneratorFunction%")r=Ht("async function* () {}");else if(e==="%AsyncGenerator%"){var n=t("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var i=t("%AsyncGenerator%");i&&F&&(r=F(i.prototype))}return ye[e]=r,r},xi={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Be=ke(),Ye=wi(),Ll=Be.call(qe,Array.prototype.concat),ql=Be.call(Oi,Array.prototype.splice),Ai=Be.call(qe,String.prototype.replace),Ze=Be.call(qe,String.prototype.slice),Bl=Be.call(qe,RegExp.prototype.exec),_l=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Wl=/\\(\\)?/g,Ul=function(e){var r=Ze(e,0,1),n=Ze(e,-1);if(r==="%"&&n!=="%")throw new Pe("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&r!=="%")throw new Pe("invalid intrinsic syntax, expected opening `%`");var i=[];return Ai(e,_l,function(a,o,l,u){i[i.length]=l?Ai(u,Wl,"$1"):o||a}),i},Hl=function(e,r){var n=e,i;if(Ye(xi,n)&&(i=xi[n],n="%"+i[0]+"%"),Ye(ye,n)){var a=ye[n];if(a===Oe&&(a=kl(n)),typeof a>"u"&&!r)throw new Te("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:i,name:n,value:a}}throw new Pe("intrinsic "+e+" does not exist!")};Ti.exports=function(e,r){if(typeof e!="string"||e.length===0)throw new Te("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof r!="boolean")throw new Te('"allowMissing" argument must be a boolean');if(Bl(/^%?[^%]*%?$/,e)===null)throw new Pe("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=Ul(e),i=n.length>0?n[0]:"",a=Hl("%"+i+"%",r),o=a.name,l=a.value,u=!1,f=a.alias;f&&(i=f[0],ql(n,Ll([0,1],f)));for(var c=1,d=!0;c<n.length;c+=1){var s=n[c],g=Ze(s,0,1),b=Ze(s,-1);if((g==='"'||g==="'"||g==="`"||b==='"'||b==="'"||b==="`")&&g!==b)throw new Pe("property names with quotes must have matching quotes");if((s==="constructor"||!d)&&(u=!0),i+="."+s,o="%"+i+"%",Ye(ye,o))l=ye[o];else if(l!=null){if(!(s in l)){if(!r)throw new Te("base intrinsic for "+e+" exists, but the property is not available.");return}if(Le&&c+1>=n.length){var O=Le(l,s);d=!!O,d&&"get"in O&&!("originalValue"in O.get)?l=O.get:l=l[s]}else d=Ye(l,s),l=l[s];d&&!u&&(ye[o]=l)}}return l}});var jt=m((tf,Ci)=>{"use strict";var Pi=et(),Ri=Wt(),Gl=Ri([Pi("%String.prototype.indexOf%")]);Ci.exports=function(e,r){var n=Pi(e,!!r);return typeof n=="function"&&Gl(e,".prototype.")>-1?Ri([n]):n}});var Vt=m((rf,Ii)=>{"use strict";var jl=et(),_e=jt(),Vl=Me(),zl=pe(),Ni=jl("%Map%",!0),Kl=_e("Map.prototype.get",!0),Jl=_e("Map.prototype.set",!0),Ql=_e("Map.prototype.has",!0),Xl=_e("Map.prototype.delete",!0),Yl=_e("Map.prototype.size",!0);Ii.exports=!!Ni&&function(){var e,r={assert:function(n){if(!r.has(n))throw new zl("Side channel does not contain "+Vl(n))},delete:function(n){if(e){var i=Xl(e,n);return Yl(e)===0&&(e=void 0),i}return!1},get:function(n){if(e)return Kl(e,n)},has:function(n){return e?Ql(e,n):!1},set:function(n,i){e||(e=new Ni),Jl(e,n,i)}};return r}});var $i=m((nf,Di)=>{"use strict";var Zl=et(),rt=jt(),eu=Me(),tt=Vt(),tu=pe(),Re=Zl("%WeakMap%",!0),ru=rt("WeakMap.prototype.get",!0),nu=rt("WeakMap.prototype.set",!0),iu=rt("WeakMap.prototype.has",!0),au=rt("WeakMap.prototype.delete",!0);Di.exports=Re?function(){var e,r,n={assert:function(i){if(!n.has(i))throw new tu("Side channel does not contain "+eu(i))},delete:function(i){if(Re&&i&&(typeof i=="object"||typeof i=="function")){if(e)return au(e,i)}else if(tt&&r)return r.delete(i);return!1},get:function(i){return Re&&i&&(typeof i=="object"||typeof i=="function")&&e?ru(e,i):r&&r.get(i)},has:function(i){return Re&&i&&(typeof i=="object"||typeof i=="function")&&e?iu(e,i):!!r&&r.has(i)},set:function(i,a){Re&&i&&(typeof i=="object"||typeof i=="function")?(e||(e=new Re),nu(e,i,a)):tt&&(r||(r=tt()),r.set(i,a))}};return n}:tt});var Mi=m((af,Fi)=>{"use strict";var ou=pe(),lu=Me(),uu=sn(),su=Vt(),fu=$i(),cu=fu||su||uu;Fi.exports=function(){var e,r={assert:function(n){if(!r.has(n))throw new ou("Side channel does not contain "+lu(n))},delete:function(n){return!!e&&e.delete(n)},get:function(n){return e&&e.get(n)},has:function(n){return!!e&&e.has(n)},set:function(n,i){e||(e=cu()),e.set(n,i)}};return r}});var nt=m((of,ki)=>{"use strict";var pu=String.prototype.replace,hu=/%20/g,zt={RFC1738:"RFC1738",RFC3986:"RFC3986"};ki.exports={default:zt.RFC3986,formatters:{RFC1738:function(t){return pu.call(t,hu,"+")},RFC3986:function(t){return String(t)}},RFC1738:zt.RFC1738,RFC3986:zt.RFC3986}});var Qt=m((lf,qi)=>{"use strict";var yu=nt(),Kt=Object.prototype.hasOwnProperty,de=Array.isArray,re=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),du=function(e){for(;e.length>1;){var r=e.pop(),n=r.obj[r.prop];if(de(n)){for(var i=[],a=0;a<n.length;++a)typeof n[a]<"u"&&i.push(n[a]);r.obj[r.prop]=i}}},Li=function(e,r){for(var n=r&&r.plainObjects?{__proto__:null}:{},i=0;i<e.length;++i)typeof e[i]<"u"&&(n[i]=e[i]);return n},mu=function t(e,r,n){if(!r)return e;if(typeof r!="object"&&typeof r!="function"){if(de(e))e.push(r);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!Kt.call(Object.prototype,r))&&(e[r]=!0);else return[e,r];return e}if(!e||typeof e!="object")return[e].concat(r);var i=e;return de(e)&&!de(r)&&(i=Li(e,n)),de(e)&&de(r)?(r.forEach(function(a,o){if(Kt.call(e,o)){var l=e[o];l&&typeof l=="object"&&a&&typeof a=="object"?e[o]=t(l,a,n):e.push(a)}else e[o]=a}),e):Object.keys(r).reduce(function(a,o){var l=r[o];return Kt.call(a,o)?a[o]=t(a[o],l,n):a[o]=l,a},i)},gu=function(e,r){return Object.keys(r).reduce(function(n,i){return n[i]=r[i],n},e)},vu=function(t,e,r){var n=t.replace(/\+/g," ");if(r==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(i){return n}},Jt=1024,bu=function(e,r,n,i,a){if(e.length===0)return e;var o=e;if(typeof e=="symbol"?o=Symbol.prototype.toString.call(e):typeof e!="string"&&(o=String(e)),n==="iso-8859-1")return escape(o).replace(/%u[0-9a-f]{4}/gi,function(g){return"%26%23"+parseInt(g.slice(2),16)+"%3B"});for(var l="",u=0;u<o.length;u+=Jt){for(var f=o.length>=Jt?o.slice(u,u+Jt):o,c=[],d=0;d<f.length;++d){var s=f.charCodeAt(d);if(s===45||s===46||s===95||s===126||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||a===yu.RFC1738&&(s===40||s===41)){c[c.length]=f.charAt(d);continue}if(s<128){c[c.length]=re[s];continue}if(s<2048){c[c.length]=re[192|s>>6]+re[128|s&63];continue}if(s<55296||s>=57344){c[c.length]=re[224|s>>12]+re[128|s>>6&63]+re[128|s&63];continue}d+=1,s=65536+((s&1023)<<10|f.charCodeAt(d)&1023),c[c.length]=re[240|s>>18]+re[128|s>>12&63]+re[128|s>>6&63]+re[128|s&63]}l+=c.join("")}return l},wu=function(e){for(var r=[{obj:{o:e},prop:"o"}],n=[],i=0;i<r.length;++i)for(var a=r[i],o=a.obj[a.prop],l=Object.keys(o),u=0;u<l.length;++u){var f=l[u],c=o[f];typeof c=="object"&&c!==null&&n.indexOf(c)===-1&&(r.push({obj:o,prop:f}),n.push(c))}return du(r),e},Su=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},xu=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},Au=function(e,r){return[].concat(e,r)},Eu=function(e,r){if(de(e)){for(var n=[],i=0;i<e.length;i+=1)n.push(r(e[i]));return n}return r(e)};qi.exports={arrayToObject:Li,assign:gu,combine:Au,compact:wu,decode:vu,encode:bu,isBuffer:xu,isRegExp:Su,maybeMap:Eu,merge:mu}});var Gi=m((uf,Hi)=>{"use strict";var _i=Mi(),it=Qt(),We=nt(),Ou=Object.prototype.hasOwnProperty,Wi={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},ne=Array.isArray,Tu=Array.prototype.push,Ui=function(t,e){Tu.apply(t,ne(e)?e:[e])},Pu=Date.prototype.toISOString,Bi=We.default,D={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,commaRoundTrip:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:it.encode,encodeValuesOnly:!1,filter:void 0,format:Bi,formatter:We.formatters[Bi],indices:!1,serializeDate:function(e){return Pu.call(e)},skipNulls:!1,strictNullHandling:!1},Ru=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Xt={},Cu=function t(e,r,n,i,a,o,l,u,f,c,d,s,g,b,O,x,k,y){for(var p=e,A=y,T=0,E=!1;(A=A.get(Xt))!==void 0&&!E;){var H=A.get(e);if(T+=1,typeof H<"u"){if(H===T)throw new RangeError("Cyclic object value");E=!0}typeof A.get(Xt)>"u"&&(T=0)}if(typeof c=="function"?p=c(r,p):p instanceof Date?p=g(p):n==="comma"&&ne(p)&&(p=it.maybeMap(p,function(S){return S instanceof Date?g(S):S})),p===null){if(o)return f&&!x?f(r,D.encoder,k,"key",b):r;p=""}if(Ru(p)||it.isBuffer(p)){if(f){var L=x?r:f(r,D.encoder,k,"key",b);return[O(L)+"="+O(f(p,D.encoder,k,"value",b))]}return[O(r)+"="+O(String(p))]}var C=[];if(typeof p>"u")return C;var $;if(n==="comma"&&ne(p))x&&f&&(p=it.maybeMap(p,f)),$=[{value:p.length>0?p.join(",")||null:void 0}];else if(ne(c))$=c;else{var Z=Object.keys(p);$=d?Z.sort(d):Z}var Q=u?String(r).replace(/\./g,"%2E"):String(r),I=i&&ne(p)&&p.length===1?Q+"[]":Q;if(a&&ne(p)&&p.length===0)return I+"[]";for(var W=0;W<$.length;++W){var q=$[W],j=typeof q=="object"&&q&&typeof q.value<"u"?q.value:p[q];if(!(l&&j===null)){var fe=s&&u?String(q).replace(/\./g,"%2E"):String(q),h=ne(p)?typeof n=="function"?n(I,fe):I:I+(s?"."+fe:"["+fe+"]");y.set(e,T);var v=_i();v.set(Xt,y),Ui(C,t(j,h,n,i,a,o,l,u,n==="comma"&&x&&ne(p)?null:f,c,d,s,g,b,O,x,k,v))}}return C},Nu=function(e){if(!e)return D;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.encodeDotInKeys<"u"&&typeof e.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var r=e.charset||D.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=We.default;if(typeof e.format<"u"){if(!Ou.call(We.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var i=We.formatters[n],a=D.filter;(typeof e.filter=="function"||ne(e.filter))&&(a=e.filter);var o;if(e.arrayFormat in Wi?o=e.arrayFormat:"indices"in e?o=e.indices?"indices":"repeat":o=D.arrayFormat,"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var l=typeof e.allowDots>"u"?e.encodeDotInKeys===!0?!0:D.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:D.addQueryPrefix,allowDots:l,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:D.allowEmptyArrays,arrayFormat:o,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:D.charsetSentinel,commaRoundTrip:!!e.commaRoundTrip,delimiter:typeof e.delimiter>"u"?D.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:D.encode,encodeDotInKeys:typeof e.encodeDotInKeys=="boolean"?e.encodeDotInKeys:D.encodeDotInKeys,encoder:typeof e.encoder=="function"?e.encoder:D.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:D.encodeValuesOnly,filter:a,format:n,formatter:i,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:D.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:D.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:D.strictNullHandling}};Hi.exports=function(t,e){var r=t,n=Nu(e),i,a;typeof n.filter=="function"?(a=n.filter,r=a("",r)):ne(n.filter)&&(a=n.filter,i=a);var o=[];if(typeof r!="object"||r===null)return"";var l=Wi[n.arrayFormat],u=l==="comma"&&n.commaRoundTrip;i||(i=Object.keys(r)),n.sort&&i.sort(n.sort);for(var f=_i(),c=0;c<i.length;++c){var d=i[c],s=r[d];n.skipNulls&&s===null||Ui(o,Cu(s,d,l,u,n.allowEmptyArrays,n.strictNullHandling,n.skipNulls,n.encodeDotInKeys,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,f))}var g=o.join(n.delimiter),b=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?b+="utf8=%26%2310003%3B&":b+="utf8=%E2%9C%93&"),g.length>0?b+g:""}});var Ki=m((sf,zi)=>{"use strict";var me=Qt(),Yt=Object.prototype.hasOwnProperty,ji=Array.isArray,R={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:me.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictNullHandling:!1,throwOnLimitExceeded:!1},Iu=function(t){return t.replace(/&#(\d+);/g,function(e,r){return String.fromCharCode(parseInt(r,10))})},Vi=function(t,e,r){if(t&&typeof t=="string"&&e.comma&&t.indexOf(",")>-1)return t.split(",");if(e.throwOnLimitExceeded&&r>=e.arrayLimit)throw new RangeError("Array limit exceeded. Only "+e.arrayLimit+" element"+(e.arrayLimit===1?"":"s")+" allowed in an array.");return t},Du="utf8=%26%2310003%3B",$u="utf8=%E2%9C%93",Fu=function(e,r){var n={__proto__:null},i=r.ignoreQueryPrefix?e.replace(/^\?/,""):e;i=i.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var a=r.parameterLimit===1/0?void 0:r.parameterLimit,o=i.split(r.delimiter,r.throwOnLimitExceeded?a+1:a);if(r.throwOnLimitExceeded&&o.length>a)throw new RangeError("Parameter limit exceeded. Only "+a+" parameter"+(a===1?"":"s")+" allowed.");var l=-1,u,f=r.charset;if(r.charsetSentinel)for(u=0;u<o.length;++u)o[u].indexOf("utf8=")===0&&(o[u]===$u?f="utf-8":o[u]===Du&&(f="iso-8859-1"),l=u,u=o.length);for(u=0;u<o.length;++u)if(u!==l){var c=o[u],d=c.indexOf("]="),s=d===-1?c.indexOf("="):d+1,g,b;s===-1?(g=r.decoder(c,R.decoder,f,"key"),b=r.strictNullHandling?null:""):(g=r.decoder(c.slice(0,s),R.decoder,f,"key"),b=me.maybeMap(Vi(c.slice(s+1),r,ji(n[g])?n[g].length:0),function(x){return r.decoder(x,R.decoder,f,"value")})),b&&r.interpretNumericEntities&&f==="iso-8859-1"&&(b=Iu(String(b))),c.indexOf("[]=")>-1&&(b=ji(b)?[b]:b);var O=Yt.call(n,g);O&&r.duplicates==="combine"?n[g]=me.combine(n[g],b):(!O||r.duplicates==="last")&&(n[g]=b)}return n},Mu=function(t,e,r,n){var i=0;if(t.length>0&&t[t.length-1]==="[]"){var a=t.slice(0,-1).join("");i=Array.isArray(e)&&e[a]?e[a].length:0}for(var o=n?e:Vi(e,r,i),l=t.length-1;l>=0;--l){var u,f=t[l];if(f==="[]"&&r.parseArrays)u=r.allowEmptyArrays&&(o===""||r.strictNullHandling&&o===null)?[]:me.combine([],o);else{u=r.plainObjects?{__proto__:null}:{};var c=f.charAt(0)==="["&&f.charAt(f.length-1)==="]"?f.slice(1,-1):f,d=r.decodeDotInKeys?c.replace(/%2E/g,"."):c,s=parseInt(d,10);!r.parseArrays&&d===""?u={0:o}:!isNaN(s)&&f!==d&&String(s)===d&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(u=[],u[s]=o):d!=="__proto__"&&(u[d]=o)}o=u}return o},ku=function(e,r,n,i){if(e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,l=/(\[[^[\]]*])/g,u=n.depth>0&&o.exec(a),f=u?a.slice(0,u.index):a,c=[];if(f){if(!n.plainObjects&&Yt.call(Object.prototype,f)&&!n.allowPrototypes)return;c.push(f)}for(var d=0;n.depth>0&&(u=l.exec(a))!==null&&d<n.depth;){if(d+=1,!n.plainObjects&&Yt.call(Object.prototype,u[1].slice(1,-1))&&!n.allowPrototypes)return;c.push(u[1])}if(u){if(n.strictDepth===!0)throw new RangeError("Input depth exceeded depth option of "+n.depth+" and strictDepth is true");c.push("["+a.slice(u.index)+"]")}return Mu(c,r,n,i)}},Lu=function(e){if(!e)return R;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.decodeDotInKeys<"u"&&typeof e.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(e.decoder!==null&&typeof e.decoder<"u"&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");if(typeof e.throwOnLimitExceeded<"u"&&typeof e.throwOnLimitExceeded!="boolean")throw new TypeError("`throwOnLimitExceeded` option must be a boolean");var r=typeof e.charset>"u"?R.charset:e.charset,n=typeof e.duplicates>"u"?R.duplicates:e.duplicates;if(n!=="combine"&&n!=="first"&&n!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var i=typeof e.allowDots>"u"?e.decodeDotInKeys===!0?!0:R.allowDots:!!e.allowDots;return{allowDots:i,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:R.allowEmptyArrays,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:R.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:R.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:R.arrayLimit,charset:r,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:R.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:R.comma,decodeDotInKeys:typeof e.decodeDotInKeys=="boolean"?e.decodeDotInKeys:R.decodeDotInKeys,decoder:typeof e.decoder=="function"?e.decoder:R.decoder,delimiter:typeof e.delimiter=="string"||me.isRegExp(e.delimiter)?e.delimiter:R.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:R.depth,duplicates:n,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:R.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:R.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:R.plainObjects,strictDepth:typeof e.strictDepth=="boolean"?!!e.strictDepth:R.strictDepth,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:R.strictNullHandling,throwOnLimitExceeded:typeof e.throwOnLimitExceeded=="boolean"?e.throwOnLimitExceeded:!1}};zi.exports=function(t,e){var r=Lu(e);if(t===""||t===null||typeof t>"u")return r.plainObjects?{__proto__:null}:{};for(var n=typeof t=="string"?Fu(t,r):t,i=r.plainObjects?{__proto__:null}:{},a=Object.keys(n),o=0;o<a.length;++o){var l=a[o],u=ku(l,n[l],r,typeof t=="string");i=me.merge(i,u,r)}return r.allowSparse===!0?i:me.compact(i)}});var Qi=m((ff,Ji)=>{"use strict";var qu=Gi(),Bu=Ki(),_u=nt();Ji.exports={formats:_u,parse:Bu,stringify:qu}});var ea=m(Ne=>{"use strict";var Wu=qr();function J(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var Uu=/^([a-z0-9.+-]+:)/i,Hu=/:[0-9]*$/,Gu=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,ju=["<",">",'"',"`"," ","\r",`
`,"	"],Vu=["{","}","|","\\","^","`"].concat(ju),Zt=["'"].concat(Vu),Xi=["%","/","?",";","#"].concat(Zt),Yi=["/","?","#"],zu=255,Zi=/^[+a-z0-9A-Z_-]{0,63}$/,Ku=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Ju={javascript:!0,"javascript:":!0},er={javascript:!0,"javascript:":!0},Ce={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},tr=Qi();function Ue(t,e,r){if(t&&typeof t=="object"&&t instanceof J)return t;var n=new J;return n.parse(t,e,r),n}J.prototype.parse=function(t,e,r){if(typeof t!="string")throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var n=t.indexOf("?"),i=n!==-1&&n<t.indexOf("#")?"?":"#",a=t.split(i),o=/\\/g;a[0]=a[0].replace(o,"/"),t=a.join(i);var l=t;if(l=l.trim(),!r&&t.split("#").length===1){var u=Gu.exec(l);if(u)return this.path=l,this.href=l,this.pathname=u[1],u[2]?(this.search=u[2],e?this.query=tr.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var f=Uu.exec(l);if(f){f=f[0];var c=f.toLowerCase();this.protocol=c,l=l.substr(f.length)}if(r||f||l.match(/^\/\/[^@/]+@[^@/]+/)){var d=l.substr(0,2)==="//";d&&!(f&&er[f])&&(l=l.substr(2),this.slashes=!0)}if(!er[f]&&(d||f&&!Ce[f])){for(var s=-1,g=0;g<Yi.length;g++){var b=l.indexOf(Yi[g]);b!==-1&&(s===-1||b<s)&&(s=b)}var O,x;s===-1?x=l.lastIndexOf("@"):x=l.lastIndexOf("@",s),x!==-1&&(O=l.slice(0,x),l=l.slice(x+1),this.auth=decodeURIComponent(O)),s=-1;for(var g=0;g<Xi.length;g++){var b=l.indexOf(Xi[g]);b!==-1&&(s===-1||b<s)&&(s=b)}s===-1&&(s=l.length),this.host=l.slice(0,s),l=l.slice(s),this.parseHost(),this.hostname=this.hostname||"";var k=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!k)for(var y=this.hostname.split(/\./),g=0,p=y.length;g<p;g++){var A=y[g];if(A&&!A.match(Zi)){for(var T="",E=0,H=A.length;E<H;E++)A.charCodeAt(E)>127?T+="x":T+=A[E];if(!T.match(Zi)){var L=y.slice(0,g),C=y.slice(g+1),$=A.match(Ku);$&&(L.push($[1]),C.unshift($[2])),C.length&&(l="/"+C.join(".")+l),this.hostname=L.join(".");break}}}this.hostname.length>zu?this.hostname="":this.hostname=this.hostname.toLowerCase(),k||(this.hostname=Wu.toASCII(this.hostname));var Z=this.port?":"+this.port:"",Q=this.hostname||"";this.host=Q+Z,this.href+=this.host,k&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),l[0]!=="/"&&(l="/"+l))}if(!Ju[c])for(var g=0,p=Zt.length;g<p;g++){var I=Zt[g];if(l.indexOf(I)!==-1){var W=encodeURIComponent(I);W===I&&(W=escape(I)),l=l.split(I).join(W)}}var q=l.indexOf("#");q!==-1&&(this.hash=l.substr(q),l=l.slice(0,q));var j=l.indexOf("?");if(j!==-1?(this.search=l.substr(j),this.query=l.substr(j+1),e&&(this.query=tr.parse(this.query)),l=l.slice(0,j)):e&&(this.search="",this.query={}),l&&(this.pathname=l),Ce[c]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var Z=this.pathname||"",fe=this.search||"";this.path=Z+fe}return this.href=this.format(),this};function Qu(t){return typeof t=="string"&&(t=Ue(t)),t instanceof J?t.format():J.prototype.format.call(t)}J.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",i=!1,a="";this.host?i=t+this.host:this.hostname&&(i=t+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&typeof this.query=="object"&&Object.keys(this.query).length&&(a=tr.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var o=this.search||a&&"?"+a||"";return e&&e.substr(-1)!==":"&&(e+=":"),this.slashes||(!e||Ce[e])&&i!==!1?(i="//"+(i||""),r&&r.charAt(0)!=="/"&&(r="/"+r)):i||(i=""),n&&n.charAt(0)!=="#"&&(n="#"+n),o&&o.charAt(0)!=="?"&&(o="?"+o),r=r.replace(/[?#]/g,function(l){return encodeURIComponent(l)}),o=o.replace("#","%23"),e+i+r+o+n};function Xu(t,e){return Ue(t,!1,!0).resolve(e)}J.prototype.resolve=function(t){return this.resolveObject(Ue(t,!1,!0)).format()};function Yu(t,e){return t?Ue(t,!1,!0).resolveObject(e):e}J.prototype.resolveObject=function(t){if(typeof t=="string"){var e=new J;e.parse(t,!1,!0),t=e}for(var r=new J,n=Object.keys(this),i=0;i<n.length;i++){var a=n[i];r[a]=this[a]}if(r.hash=t.hash,t.href==="")return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var o=Object.keys(t),l=0;l<o.length;l++){var u=o[l];u!=="protocol"&&(r[u]=t[u])}return Ce[r.protocol]&&r.hostname&&!r.pathname&&(r.pathname="/",r.path=r.pathname),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!Ce[t.protocol]){for(var f=Object.keys(t),c=0;c<f.length;c++){var d=f[c];r[d]=t[d]}return r.href=r.format(),r}if(r.protocol=t.protocol,!t.host&&!er[t.protocol]){for(var p=(t.pathname||"").split("/");p.length&&!(t.host=p.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),p[0]!==""&&p.unshift(""),p.length<2&&p.unshift(""),r.pathname=p.join("/")}else r.pathname=t.pathname;if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var s=r.pathname||"",g=r.search||"";r.path=s+g}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var b=r.pathname&&r.pathname.charAt(0)==="/",O=t.host||t.pathname&&t.pathname.charAt(0)==="/",x=O||b||r.host&&t.pathname,k=x,y=r.pathname&&r.pathname.split("/")||[],p=t.pathname&&t.pathname.split("/")||[],A=r.protocol&&!Ce[r.protocol];if(A&&(r.hostname="",r.port=null,r.host&&(y[0]===""?y[0]=r.host:y.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(p[0]===""?p[0]=t.host:p.unshift(t.host)),t.host=null),x=x&&(p[0]===""||y[0]==="")),O)r.host=t.host||t.host===""?t.host:r.host,r.hostname=t.hostname||t.hostname===""?t.hostname:r.hostname,r.search=t.search,r.query=t.query,y=p;else if(p.length)y||(y=[]),y.pop(),y=y.concat(p),r.search=t.search,r.query=t.query;else if(t.search!=null){if(A){r.host=y.shift(),r.hostname=r.host;var T=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;T&&(r.auth=T.shift(),r.hostname=T.shift(),r.host=r.hostname)}return r.search=t.search,r.query=t.query,(r.pathname!==null||r.search!==null)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!y.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var E=y.slice(-1)[0],H=(r.host||t.host||y.length>1)&&(E==="."||E==="..")||E==="",L=0,C=y.length;C>=0;C--)E=y[C],E==="."?y.splice(C,1):E===".."?(y.splice(C,1),L++):L&&(y.splice(C,1),L--);if(!x&&!k)for(;L--;L)y.unshift("..");x&&y[0]!==""&&(!y[0]||y[0].charAt(0)!=="/")&&y.unshift(""),H&&y.join("/").substr(-1)!=="/"&&y.push("");var $=y[0]===""||y[0]&&y[0].charAt(0)==="/";if(A){r.hostname=$?"":y.length?y.shift():"",r.host=r.hostname;var T=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;T&&(r.auth=T.shift(),r.hostname=T.shift(),r.host=r.hostname)}return x=x||r.host&&y.length,x&&!$&&y.unshift(""),y.length>0?r.pathname=y.join("/"):(r.pathname=null,r.path=null),(r.pathname!==null||r.search!==null)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r};J.prototype.parseHost=function(){var t=this.host,e=Hu.exec(t);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};Ne.parse=Ue;Ne.resolve=Xu;Ne.resolveObject=Yu;Ne.format=Qu;Ne.Url=J});var ua=m((Tf,la)=>{"use strict";function at(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}at.proto=function(){return RegExp.escape=at,at};la.exports=at});var ve="text/plain",va="text/html",ba=t=>{};function z(t){ba(t)}var wa=!0;function Sa(){return wa}function xa(){(console.warn||console.log).apply(console,arguments)}var is=xa.bind("[clipboard-polyfill]"),st=typeof window>"u"?void 0:window,Aa=typeof globalThis>"u"?void 0:globalThis,ar,or,lr,ur=(lr=(ar=st)==null?void 0:ar.Promise)!=null?lr:(or=Aa)==null?void 0:or.Promise;function Ea(){if(!ur)throw new Error("No `Promise` implementation available for `clipboard-polyfill`. Consider using: https://github.com/lgarron/clipboard-polyfill#flat-file-version-with-promise-included");return ur}var sr=typeof navigator>"u"?void 0:navigator,K=sr==null?void 0:sr.clipboard,fr,as=(fr=K==null?void 0:K.read)==null?void 0:fr.bind(K),cr,os=(cr=K==null?void 0:K.readText)==null?void 0:cr.bind(K),pr,hr=(pr=K==null?void 0:K.write)==null?void 0:pr.bind(K),yr,ls=(yr=K==null?void 0:K.writeText)==null?void 0:yr.bind(K),dr,ut=(dr=st)==null?void 0:dr.ClipboardItem,ae=Ea(),ge=st;function Oa(){return typeof ClipboardEvent>"u"&&typeof(ge==null?void 0:ge.clipboardData)<"u"&&typeof(ge==null?void 0:ge.clipboardData.setData)<"u"}function Ta(t){if(!ge.clipboardData)return!1;var e=ge.clipboardData.setData("Text",t);return e&&z("writeTextIE worked"),e}function Pa(t,e,r){z("listener called"),t.success=!0;for(var n in e){var i=e[n],a=r.clipboardData;a.setData(n,i),n===ve&&a.getData(n)!==i&&(z("setting text/plain failed"),t.success=!1)}r.preventDefault()}function gr(t){var e={success:!1},r=Pa.bind(this,e,t);document.addEventListener("copy",r);try{document.execCommand("copy")}finally{document.removeEventListener("copy",r)}return e.success}function vr(t,e){br(t);var r=gr(e);return wr(),r}function Ra(t){var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important"),e.textContent="temporary element",document.body.appendChild(e);var r=vr(e,t);return document.body.removeChild(e),r}function Ca(t){z("copyTextUsingDOM");var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important");var r=e;e.attachShadow&&(z("Using shadow DOM."),r=e.attachShadow({mode:"open"}));var n=document.createElement("span");n.innerText=t,r.appendChild(n),document.body.appendChild(e),br(n);var i=document.execCommand("copy");return wr(),document.body.removeChild(e),i}function br(t){var e=document.getSelection();if(e){var r=document.createRange();r.selectNodeContents(t),e.removeAllRanges(),e.addRange(r)}}function wr(){var t=document.getSelection();t&&t.removeAllRanges()}function Na(t){var e=ve in t;if(Oa()){if(!e)throw new Error("No `text/plain` value was specified.");if(Ta(t[ve]))return!0;throw new Error("Copying failed, possibly because the user rejected it.")}return gr(t)?(z("regular execCopy worked"),!0):navigator.userAgent.indexOf("Edge")>-1?(z('UA "Edge" => assuming success'),!0):vr(document.body,t)?(z("copyUsingTempSelection worked"),!0):Ra(t)?(z("copyUsingTempElem worked"),!0):Ca(t[ve])?(z("copyTextUsingDOM worked"),!0):!1}function Sr(t,e){for(var r=[],n=0;n<t.length;n++){var i=t[n];r.push(e(i))}return ae.all(r).then(a=>{for(var o={},l=0;l<t.length;l++)o[t[l]]=a[l];return o})}var Ia=ae.resolve(),Da=()=>ae.resolve(!0),mr=ae.resolve(!1);function $a(t){return new ae((e,r)=>{try{e(t())}catch(n){r(n)}})}function lt(t,e){for(var r=0;r<t.length;r++){var n=t[r];if(n.types.indexOf(e)!==-1)return!0}return!1}function Fa(t,e){var r,n=Object.keys(t),i={};for(var a in t){var o=t[a];typeof o=="string"?i[a]=Ma(a,o):i[a]=o}var l=(r=e==null?void 0:e.presentationStyle)!=null?r:"unspecified";function u(f){return ae.resolve(i[f])}return{types:n,presentationStyle:l,getType:u}}var xr=Fa;function Ma(t,e){return new Blob([e],{type:t})}function ka(t){return new ae((e,r)=>{var n=new FileReader;n.addEventListener("load",()=>{var i=n.result;typeof i=="string"?e(i):r("could not convert blob to string")}),n.readAsText(t)})}function La(t){return Sr(t.types,function(e){return t.getType(e)}).then(e=>new ae((r,n)=>{var i={};t.presentationStyle&&(i.presentationStyle=t.presentationStyle),ut?r(new ut(e,i)):n("window.ClipboardItem is not defined")}))}function qa(t,e){return t.getType(e).then(r=>ka(r))}function Ba(t){return Sr(t.types,function(e){return qa(t,e)})}function Ar(t){return $a(()=>{if(hr&&ut){var e=hr;return z("Using `navigator.clipboard.write()`."),ae.all(t.map(La)).then(r=>e(r).then(Da).catch(n=>{if(!lt(t,ve)&&!lt(t,va))throw n;return mr}))}return mr}).then(e=>{if(e)return Ia;var r=lt(t,ve);return Sa()&&!r&&z("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call suppressWarnings() to suppress this warning."),Ba(t[0]).then(n=>{if(!Na(n))throw new Error("write() failed")})})}var Er=async(t,e)=>{let r=new xr({"text/html":new Blob([e],{type:"text/html"}),"text/plain":new Blob([t],{type:"text/plain"})});await Ar([r])};function Wa(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])}return t}function ht(t,e){return Array(e+1).join(t)}function Ua(t){return t.replace(/^\n*/,"")}function Ha(t){for(var e=t.length;e>0&&t[e-1]===`
`;)e--;return t.substring(0,e)}var Ga=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function yt(t){return dt(t,Ga)}var Pr=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function Rr(t){return dt(t,Pr)}function ja(t){return Nr(t,Pr)}var Cr=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function Va(t){return dt(t,Cr)}function za(t){return Nr(t,Cr)}function dt(t,e){return e.indexOf(t.nodeName)>=0}function Nr(t,e){return t.getElementsByTagName&&e.some(function(r){return t.getElementsByTagName(r).length})}var _={};_.paragraph={filter:"p",replacement:function(t){return`

`+t+`

`}};_.lineBreak={filter:"br",replacement:function(t,e,r){return r.br+`
`}};_.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(t,e,r){var n=Number(e.nodeName.charAt(1));if(r.headingStyle==="setext"&&n<3){var i=ht(n===1?"=":"-",t.length);return`

`+t+`
`+i+`

`}else return`

`+ht("#",n)+" "+t+`

`}};_.blockquote={filter:"blockquote",replacement:function(t){return t=t.replace(/^\n+|\n+$/g,""),t=t.replace(/^/gm,"> "),`

`+t+`

`}};_.list={filter:["ul","ol"],replacement:function(t,e){var r=e.parentNode;return r.nodeName==="LI"&&r.lastElementChild===e?`
`+t:`

`+t+`

`}};_.listItem={filter:"li",replacement:function(t,e,r){t=t.replace(/^\n+/,"").replace(/\n+$/,`
`).replace(/\n/gm,`
    `);var n=r.bulletListMarker+"   ",i=e.parentNode;if(i.nodeName==="OL"){var a=i.getAttribute("start"),o=Array.prototype.indexOf.call(i.children,e);n=(a?Number(a)+o:o+1)+".  "}return n+t+(e.nextSibling&&!/\n$/.test(t)?`
`:"")}};_.indentedCodeBlock={filter:function(t,e){return e.codeBlockStyle==="indented"&&t.nodeName==="PRE"&&t.firstChild&&t.firstChild.nodeName==="CODE"},replacement:function(t,e,r){return`

    `+e.firstChild.textContent.replace(/\n/g,`
    `)+`

`}};_.fencedCodeBlock={filter:function(t,e){return e.codeBlockStyle==="fenced"&&t.nodeName==="PRE"&&t.firstChild&&t.firstChild.nodeName==="CODE"},replacement:function(t,e,r){for(var n=e.firstChild.getAttribute("class")||"",i=(n.match(/language-(\S+)/)||[null,""])[1],a=e.firstChild.textContent,o=r.fence.charAt(0),l=3,u=new RegExp("^"+o+"{3,}","gm"),f;f=u.exec(a);)f[0].length>=l&&(l=f[0].length+1);var c=ht(o,l);return`

`+c+i+`
`+a.replace(/\n$/,"")+`
`+c+`

`}};_.horizontalRule={filter:"hr",replacement:function(t,e,r){return`

`+r.hr+`

`}};_.inlineLink={filter:function(t,e){return e.linkStyle==="inlined"&&t.nodeName==="A"&&t.getAttribute("href")},replacement:function(t,e){var r=e.getAttribute("href");r&&(r=r.replace(/([()])/g,"\\$1"));var n=He(e.getAttribute("title"));return n&&(n=' "'+n.replace(/"/g,'\\"')+'"'),"["+t+"]("+r+n+")"}};_.referenceLink={filter:function(t,e){return e.linkStyle==="referenced"&&t.nodeName==="A"&&t.getAttribute("href")},replacement:function(t,e,r){var n=e.getAttribute("href"),i=He(e.getAttribute("title"));i&&(i=' "'+i+'"');var a,o;switch(r.linkReferenceStyle){case"collapsed":a="["+t+"][]",o="["+t+"]: "+n+i;break;case"shortcut":a="["+t+"]",o="["+t+"]: "+n+i;break;default:var l=this.references.length+1;a="["+t+"]["+l+"]",o="["+l+"]: "+n+i}return this.references.push(o),a},references:[],append:function(t){var e="";return this.references.length&&(e=`

`+this.references.join(`
`)+`

`,this.references=[]),e}};_.emphasis={filter:["em","i"],replacement:function(t,e,r){return t.trim()?r.emDelimiter+t+r.emDelimiter:""}};_.strong={filter:["strong","b"],replacement:function(t,e,r){return t.trim()?r.strongDelimiter+t+r.strongDelimiter:""}};_.code={filter:function(t){var e=t.previousSibling||t.nextSibling,r=t.parentNode.nodeName==="PRE"&&!e;return t.nodeName==="CODE"&&!r},replacement:function(t){if(!t)return"";t=t.replace(/\r?\n|\r/g," ");for(var e=/^`|^ .*?[^ ].* $|`$/.test(t)?" ":"",r="`",n=t.match(/`+/gm)||[];n.indexOf(r)!==-1;)r=r+"`";return r+e+t+e+r}};_.image={filter:"img",replacement:function(t,e){var r=He(e.getAttribute("alt")),n=e.getAttribute("src")||"",i=He(e.getAttribute("title")),a=i?' "'+i+'"':"";return n?"!["+r+"]("+n+a+")":""}};function He(t){return t?t.replace(/(\n+\s*)+/g,`
`):""}function Ir(t){this.options=t,this._keep=[],this._remove=[],this.blankRule={replacement:t.blankReplacement},this.keepReplacement=t.keepReplacement,this.defaultRule={replacement:t.defaultReplacement},this.array=[];for(var e in t.rules)this.array.push(t.rules[e])}Ir.prototype={add:function(t,e){this.array.unshift(e)},keep:function(t){this._keep.unshift({filter:t,replacement:this.keepReplacement})},remove:function(t){this._remove.unshift({filter:t,replacement:function(){return""}})},forNode:function(t){if(t.isBlank)return this.blankRule;var e;return(e=ft(this.array,t,this.options))||(e=ft(this._keep,t,this.options))||(e=ft(this._remove,t,this.options))?e:this.defaultRule},forEach:function(t){for(var e=0;e<this.array.length;e++)t(this.array[e],e)}};function ft(t,e,r){for(var n=0;n<t.length;n++){var i=t[n];if(Ka(i,e,r))return i}}function Ka(t,e,r){var n=t.filter;if(typeof n=="string"){if(n===e.nodeName.toLowerCase())return!0}else if(Array.isArray(n)){if(n.indexOf(e.nodeName.toLowerCase())>-1)return!0}else if(typeof n=="function"){if(n.call(t,e,r))return!0}else throw new TypeError("`filter` needs to be a string, array, or function")}function Ja(t){var e=t.element,r=t.isBlock,n=t.isVoid,i=t.isPre||function(d){return d.nodeName==="PRE"};if(!(!e.firstChild||i(e))){for(var a=null,o=!1,l=null,u=Or(l,e,i);u!==e;){if(u.nodeType===3||u.nodeType===4){var f=u.data.replace(/[ \r\n\t]+/g," ");if((!a||/ $/.test(a.data))&&!o&&f[0]===" "&&(f=f.substr(1)),!f){u=ct(u);continue}u.data=f,a=u}else if(u.nodeType===1)r(u)||u.nodeName==="BR"?(a&&(a.data=a.data.replace(/ $/,"")),a=null,o=!1):n(u)||i(u)?(a=null,o=!0):a&&(o=!1);else{u=ct(u);continue}var c=Or(l,u,i);l=u,u=c}a&&(a.data=a.data.replace(/ $/,""),a.data||ct(a))}}function ct(t){var e=t.nextSibling||t.parentNode;return t.parentNode.removeChild(t),e}function Or(t,e,r){return t&&t.parentNode===e||r(e)?e.nextSibling||e.parentNode:e.firstChild||e.nextSibling||e.parentNode}var mt=typeof window<"u"?window:{};function Qa(){var t=mt.DOMParser,e=!1;try{new t().parseFromString("","text/html")&&(e=!0)}catch(r){}return e}function Xa(){var t=function(){};return Ya()?t.prototype.parseFromString=function(e){var r=new window.ActiveXObject("htmlfile");return r.designMode="on",r.open(),r.write(e),r.close(),r}:t.prototype.parseFromString=function(e){var r=document.implementation.createHTMLDocument("");return r.open(),r.write(e),r.close(),r},t}function Ya(){var t=!1;try{document.implementation.createHTMLDocument("").open()}catch(e){mt.ActiveXObject&&(t=!0)}return t}var Za=Qa()?mt.DOMParser:Xa();function eo(t,e){var r;if(typeof t=="string"){var n=to().parseFromString('<x-turndown id="turndown-root">'+t+"</x-turndown>","text/html");r=n.getElementById("turndown-root")}else r=t.cloneNode(!0);return Ja({element:r,isBlock:yt,isVoid:Rr,isPre:e.preformattedCode?ro:null}),r}var pt;function to(){return pt=pt||new Za,pt}function ro(t){return t.nodeName==="PRE"||t.nodeName==="CODE"}function no(t,e){return t.isBlock=yt(t),t.isCode=t.nodeName==="CODE"||t.parentNode.isCode,t.isBlank=io(t),t.flankingWhitespace=ao(t,e),t}function io(t){return!Rr(t)&&!Va(t)&&/^\s*$/i.test(t.textContent)&&!ja(t)&&!za(t)}function ao(t,e){if(t.isBlock||e.preformattedCode&&t.isCode)return{leading:"",trailing:""};var r=oo(t.textContent);return r.leadingAscii&&Tr("left",t,e)&&(r.leading=r.leadingNonAscii),r.trailingAscii&&Tr("right",t,e)&&(r.trailing=r.trailingNonAscii),{leading:r.leading,trailing:r.trailing}}function oo(t){var e=t.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);return{leading:e[1],leadingAscii:e[2],leadingNonAscii:e[3],trailing:e[4],trailingNonAscii:e[5],trailingAscii:e[6]}}function Tr(t,e,r){var n,i,a;return t==="left"?(n=e.previousSibling,i=/ $/):(n=e.nextSibling,i=/^ /),n&&(n.nodeType===3?a=i.test(n.nodeValue):r.preformattedCode&&n.nodeName==="CODE"?a=!1:n.nodeType===1&&!yt(n)&&(a=i.test(n.textContent))),a}var lo=Array.prototype.reduce,uo=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function Ge(t){if(!(this instanceof Ge))return new Ge(t);var e={rules:_,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(r,n){return n.isBlock?`

`:""},keepReplacement:function(r,n){return n.isBlock?`

`+n.outerHTML+`

`:n.outerHTML},defaultReplacement:function(r,n){return n.isBlock?`

`+r+`

`:r}};this.options=Wa({},e,t),this.rules=new Ir(this.options)}Ge.prototype={turndown:function(t){if(!co(t))throw new TypeError(t+" is not a string, or an element/document/fragment node.");if(t==="")return"";var e=Dr.call(this,new eo(t,this.options));return so.call(this,e)},use:function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this.use(t[e]);else if(typeof t=="function")t(this);else throw new TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(t,e){return this.rules.add(t,e),this},keep:function(t){return this.rules.keep(t),this},remove:function(t){return this.rules.remove(t),this},escape:function(t){return uo.reduce(function(e,r){return e.replace(r[0],r[1])},t)}};function Dr(t){var e=this;return lo.call(t.childNodes,function(r,n){n=new no(n,e.options);var i="";return n.nodeType===3?i=n.isCode?n.nodeValue:e.escape(n.nodeValue):n.nodeType===1&&(i=fo.call(e,n)),$r(r,i)},"")}function so(t){var e=this;return this.rules.forEach(function(r){typeof r.append=="function"&&(t=$r(t,r.append(e.options)))}),t.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function fo(t){var e=this.rules.forNode(t),r=Dr.call(this,t),n=t.flankingWhitespace;return(n.leading||n.trailing)&&(r=r.trim()),n.leading+e.replacement(r,t,this.options)+n.trailing}function $r(t,e){var r=Ha(t),n=Ua(e),i=Math.max(t.length-r.length,e.length-n.length),a=`

`.substring(0,i);return r+a+n}function co(t){return t!=null&&(typeof t=="string"||t.nodeType&&(t.nodeType===1||t.nodeType===9||t.nodeType===11))}var Fr=Ge;var po=Array.prototype.indexOf,ho=Array.prototype.every,be={};be.tableCell={filter:["th","td"],replacement:function(t,e){return Mr(t,e)}};be.tableRow={filter:"tr",replacement:function(t,e){var r="",n={left:":--",right:"--:",center:":-:"};if(gt(e))for(var i=0;i<e.childNodes.length;i++){var a="---",o=(e.childNodes[i].getAttribute("align")||"").toLowerCase();o&&(a=n[o]||a),r+=Mr(a,e.childNodes[i])}return`
`+t+(r?`
`+r:"")}};be.table={filter:function(t){return t.nodeName==="TABLE"&&gt(t.rows[0])},replacement:function(t){return t=t.replace(`

`,`
`),`

`+t+`

`}};be.tableSection={filter:["thead","tbody","tfoot"],replacement:function(t){return t}};function gt(t){var e=t.parentNode;return e.nodeName==="THEAD"||e.firstChild===t&&(e.nodeName==="TABLE"||yo(e))&&ho.call(t.childNodes,function(r){return r.nodeName==="TH"})}function yo(t){var e=t.previousSibling;return t.nodeName==="TBODY"&&(!e||e.nodeName==="THEAD"&&/^\s*$/i.test(e.textContent))}function Mr(t,e){var r=po.call(e.parentNode.childNodes,e),n=" ";return r===0&&(n="| "),n+t+" |"}function kr(t){t.keep(function(r){return r.nodeName==="TABLE"&&!gt(r.rows[0])});for(var e in be)t.addRule(e,be[e])}function Lr(t){t.addRule("taskListItems",{filter:function(e){return e.type==="checkbox"&&e.parentNode.nodeName==="LI"},replacement:function(e,r){return(r.checked?"[x]":"[ ]")+" "}})}function vt(t){t.addRule("strikethrough",{filter:["del","s","strike"],replacement:e=>"~~"+e+"~~"})}function bt(t){t.addRule("img",{filter:["img"],references:[],replacement:function(e,r){let n=this.references.length+1,i="";return i=r.title?r.title:r.alt?r.alt:"",this.references.push("[img"+n+"]: "+r.src),"!["+i+"][img"+n+"]"},append:function(){let e="";return this.references.length&&(e=`

`+this.references.join(`
`)+`

`,this.references=[]),e}})}function wt(t){t.addRule("img",{filter:["img"],replacement:(e,r)=>{let n=r.getAttribute("src")?`src="${r.getAttribute("src")}"`:"",i=r.alt?`alt="${r.alt}"`:"",a=r.title?`title="${r.title}"`:"",o=r.getAttribute("width")?`width="${r.getAttribute("width")}"`:"",l=r.getAttribute("height")?`height="${r.getAttribute("height")}"`:"";return n?"<img "+[n,i,a,o,l].filter(u=>u!=="").join(" ")+">":""}})}function St(t){t.addRule("inlineLink",{filter:(e,r)=>r.linkStyle==="inlined"&&e.nodeName==="A"&&e.getAttribute("href"),replacement:(e,r)=>`${e} (${r.getAttribute("href")}${r.title?` "${r.title}"`:""})`})}function xt(t){t.addRule("listItem",{filter:"li",replacement:(e,r,n)=>{e=e.replace(/^\n+/,"").replace(/\n+$/,`
`).replace(/\n/gm,`
    `);let i=n.bulletListMarker+" ",a=r.parentNode;if(a.nodeName==="OL"){let o=a.getAttribute("start"),l=Array.prototype.indexOf.call(a.children,r);i=(o?Number(o)+l:l+1)+". "}return i+e+(r.nextSibling&&!/\n$/.test(e)?`
`:"")}})}var we={};we.removeDisplayFormula={filter:t=>t.nodeName==="DIV"&&t.className==="MathJax_Display",replacement:()=>""};we.removeInlineFormula={filter:t=>t.nodeName==="SPAN"&&t.className==="MathJax"&&t.style["text-align"]!=="center",replacement:()=>""};we.removeBlankListItem={filter:["li"],replacement:(t,e,r)=>{e.childNodes.forEach(a=>{a.className&&a.className.startsWith("MathJax")&&e.removeChild(a)}),t=t.replace(/^\n+/,"").replace(/\n+$/,`
`).replace(/\n/gm,`
    `);let n=r.bulletListMarker+"   ",i=e.parentNode;if(i.nodeName==="OL"){let a=i.getAttribute("start"),o=Array.prototype.indexOf.call(i.children,e);n=(a?Number(a)+o:o+1)+".  "}return t!==""?n+t+(e.nextSibling&&!/\n$/.test(t)?`
`:""):""}};we.paragraphBeforeScriptNode={filter:"p",replacement:(t,e)=>{var r=e.nextSibling;return r&&e.nextSibling.nodeName==="SCRIPT"&&e.nextSibling.type.startsWith("math/tex")?t:`

`+t+`

`}};we.extractRaw={filter:t=>t.nodeName==="SCRIPT"&&t.type.startsWith("math/tex"),replacement:(t,e)=>e.type==="math/tex; mode=display"?`

$$${e.innerText||e.textContent}$$

`:e.type==="math/tex"?`$${e.innerText||e.textContent}$`:"(ERROR while copying MathJax formula)"};function At(t){for(let[e,r]of Object.entries(we))t.addRule(e,r)}var rr=ir(ea(),1),ta=(t,e)=>{for(let r of t.getElementsByTagName("a"))r.hasAttribute("href")&&!r.getAttribute("href").startsWith("http")&&r.setAttribute("href",rr.default.resolve(e,r.getAttribute("href")));for(let r of t.getElementsByTagName("img"))r.hasAttribute("src")&&!r.getAttribute("src").startsWith("http")&&r.setAttribute("src",rr.default.resolve(e,r.getAttribute("src")))},ra=t=>new Promise(e=>{let r=new Image;r.setAttribute("crossorigin","anonymous"),r.onload=function(){let n=document.createElement("canvas");n.width=this.naturalWidth,n.height=this.naturalHeight,n.getContext("2d").drawImage(this,0,0),t.setAttribute("src",n.toDataURL("image/png")),e(t.src),n=null},r.src=t.getAttribute("src")});var Zu=()=>{let t=document.getSelection();if(t.rangeCount===0){let e=document.getElementsByTagName("iframe");if(e)for(let r=0;r<e.length;r++)e[r].contentDocument!=null&&e[r].contentWindow.document!=null&&e[r].contentWindow.document.getSelection()&&e[r].contentWindow.document.getSelection().rangeCount>0&&(t=e[r].contentWindow.document.getSelection())}return t},na=async t=>{let e=Zu(),r="";if(e.rangeCount){let n=document.createElement("div");for(let i=0;i<e.rangeCount;++i)n.appendChild(e.getRangeAt(i).cloneContents());if(ta(n,document.URL),t.embedImage)for(let i of n.getElementsByTagName("img"))i.hasAttribute("src")&&i.getAttribute("src").startsWith("http")&&(i.getAttribute("src").split("?",2)[0].endsWith("gif")||i.getAttribute("src").split("?",2)[0].endsWith("jpg")||i.getAttribute("src").split("?",2)[0].endsWith("jpeg")||i.getAttribute("src").split("?",2)[0].endsWith("png")||i.getAttribute("src").split("?",2)[0].endsWith("webp"))&&i.setAttribute("src",await ra(i));r=n.innerHTML}return r};var es=t=>{let e=Fr(t);return t.mathjax&&e.use(At),t.gfm&&(e.use(vt),e.use(kr),e.use(Lr)),t.img&&e.use(wt),t.linkWithoutStyling&&e.use(St),t.reduceListItemPadding&&e.use(xt),t.embedImage&&e.use(bt),t.replaceAngleBrackets&&(e.escape=r=>r.replace(/\\(\S)/g,"\\\\$1").replace(/^(#{1,6} )/gm,"\\$1").replace(/^([-*_] *){3,}$/gm,(n,i)=>n.split(i).join("\\"+i)).replace(/^(\W* {0,3})(\d+)\. /gm,"$1$2\\. ").replace(/^([^\\\w]*)[*+-] /gm,n=>n.replace(/([*+-])/g,"\\$1")).replace(/^(\W* {0,3})> /gm,"$1\\> ").replace(/\*+(?![*\s\W]).+?\*+/g,n=>n.replace(/\*/g,"\\*")).replace(/_+(?![_\s\W]).+?_+/g,n=>n.replace(/_/g,"\\_")).replace(/`+(?![`\s\W]).+?`+/g,n=>n.replace(/`/g,"\\`")).replace(/[\[\]]/g,"\\$&").replace(/</g,"&lt;").replace(/>/g,"&gt;")),e},ia=async t=>{let e=es(t),r=await na(t);return{html:r,output:e.turndown(r),url:document.URL}};var aa={"use-quote":!0,"link-to-source":!0,headingStyle:"atx",bulletListMarker:"-",codeBlockStyle:"indented",fence:"`",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",debug:!1,mathjax:!1,gfm:!1,linkWithoutStyling:!1,img:!1,embedImage:!1,titleSubstitution:"",reduceListItemPadding:!1,replaceAngleBrackets:!1};function ts(t,e){return typeof t[e]>"u"?aa[e]:t[e]}function oa(t){let e={};for(let r in aa)e[r]=ts(t,r);return e.fence&&typeof e.fence=="string"&&(e.fence=e.fence.repeat(3)),e}var fa=ir(ua(),1),sa=/^\/(.+)\/$/,ca=(t="")=>{let e=r=>{if(r.match(sa)){let[,n]=sa.exec(r);return n}else return(0,fa.default)(r)};return new RegExp(t.split(/\n/).map(r=>`(${e(r)})`).join("|"),"g")};async function rs(){try{let t=await browser.storage.local.get(),e=oa(t),r=document.title;if(e.titleSubstitution!==""){let o=ca(e.titleSubstitution);r=r.replace(o,"")}let n=e.linkWithoutStyling?`${r} (${document.URL})`:`[${r}](${document.URL})`,i=`<a href="${document.URL}">${r}</a>`,a=await ia(e);a.output!==""&&(e["use-quote"]&&(a.output=a.output.split(`
`).map(o=>`> ${o}`).join(`
`)),e["link-to-source"]?(n+=`

${a.output}`,i+=`<br><br><blockquote>${a.html}</blockquote>`):(n=a.output,i=a.html)),e.debug&&console.log(`
/* --- copy-selection-as-markdown debug information ------------------------------------------------------- */
### INPUT

\`\`\`html
${a.html}
\`\`\`

### OUTPUT

\`\`\`markdown
${a.output}
\`\`\`

### Source URL

${a.url}
/* --- end of copy-selection-as-markdown debug information ------------------------------------------------ */
Open new issue at https://github.com/0x6b/copy-selection-as-markdown/issues/new with information above.

`),await Er(n,i)}catch(t){console.error(t)}}rs();})();
/*! Bundled license information:

punycode/punycode.js:
  (*! https://mths.be/punycode v1.4.1 by @mathias *)
*/
 }

  // Expose a simple API if needed
  window.__CSAM_US__ = {
    copySelectionAsMarkdown,
    copyHoveredLinkAsMarkdown,
    copyPageTitleAndUrl
  };

})();