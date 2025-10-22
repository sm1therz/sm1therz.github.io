/* Dark Reader — console-injectable, now with engine selector + 2.5s delay
   - Paste into the browser console on any page.
   - Opens settings after 2.5s (Alt+D to reopen). Prefs persist via localStorage.
   - Engines:
       • Dynamic  → Dark Reader engine (via CDN)
       • Filter   → CSS filter invert (+ optional media re-invert)
       • Static   → Inject a saved CSS snapshot (generate from Dynamic)
*/
(() => {
  'use strict';

  if (window.__DR_INJECTOR_V2__) return;
  window.__DR_INJECTOR_V2__ = true;

  // ---------- Config / Storage ----------
  const STORE = 'dr_injected_prefs_v3';
  const defaults = {
    enabled: true,
    engine: 'dynamic',    // 'dynamic' | 'filter' | 'static'
    followSystem: false,  // Dynamic only
    mode: 1,              // Dynamic only: 1=Dark, 0=Dimmed
    brightness: 100,      // 0–200
    contrast: 100,        // 0–200
    sepia: 0,             // 0–100
    grayscale: 0,         // 0–100
    reInvertMedia: true,  // Filter engine: re-invert images/video/canvas
    autoOpenSeconds: 2.5, // ⟵ requested change
    staticCSSByHost: {}   // { [location.host]: "/* CSS */" }
  };

  const prefs = load();
  function load() {
    try {
      return Object.assign({}, defaults, JSON.parse(localStorage.getItem(STORE) || '{}'));
    } catch { return { ...defaults }; }
  }
  function save() { localStorage.setItem(STORE, JSON.stringify(prefs)); }

  // ---------- CDN loader for Dark Reader (Dynamic/Static generation) ----------
  const CDN_URLS = [
    'https://cdn.jsdelivr.net/npm/darkreader@4.9.112/darkreader.min.js',
    'https://unpkg.com/darkreader@4.9.112/darkreader.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/darkreader/4.9.112/darkreader.min.js',
    'https://unpkg.com/darkreader@latest/darkreader.min.js'
  ];
  let drFetchMethodSet = false;

  function loadScriptSequential(urls) {
    return new Promise((resolve, reject) => {
      let i = 0;
      const next = () => {
        if (i >= urls.length) return reject(new Error('Failed to load Dark Reader from all CDNs.'));
        const s = document.createElement('script');
        s.src = urls[i++];
        s.async = true;
        s.crossOrigin = 'anonymous';
        s.onload = () => resolve(true);
        s.onerror = () => { s.remove(); next(); };
        document.head.appendChild(s);
      };
      next();
    });
  }

  async function ensureDRLoaded() {
    if (window.DarkReader) return true;
    await loadScriptSequential(CDN_URLS);
    if (window.DarkReader && !drFetchMethodSet && typeof window.DarkReader.setFetchMethod === 'function') {
      try { window.DarkReader.setFetchMethod(window.fetch.bind(window)); } catch {}
      drFetchMethodSet = true;
    }
    return !!window.DarkReader;
  }

  // ---------- Helpers for styles ----------
  const IDS = {
    dialog: 'dr-injected-modal',
    css: 'dr-injected-modal-css',
    filterStyle: 'dr-filter-style',
    filterFix: 'dr-filter-fix',
    staticStyle: 'dr-static-style'
  };

  function ensureStyle(id) {
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement('style');
      el.id = id;
      document.head.appendChild(el);
    }
    return el;
  }
  function removeEl(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  // ---------- Engines ----------
  function themeFrom(p) {
    return {
      mode: Number(p.mode) || 1,
      brightness: Number(p.brightness) || 100,
      contrast: Number(p.contrast) || 100,
      sepia: Number(p.sepia) || 0,
      grayscale: Number(p.grayscale) || 0
    };
  }

  function clearAllEngines() {
    // Turn off DR
    try { window.DarkReader && window.DarkReader.disable(); } catch {}
    // Remove filter/static CSS
    removeEl(IDS.filterStyle);
    removeEl(IDS.filterFix);
    removeEl(IDS.staticStyle);
  }

  async function applyDynamic() {
    if (!prefs.enabled) { clearAllEngines(); return; }
    await ensureDRLoaded();
    clearAllEngines();
    const theme = themeFrom(prefs);
    if (prefs.followSystem) window.DarkReader.auto(theme);
    else window.DarkReader.enable(theme);
  }

  function filterCSS(p) {
    // Base invert pipeline approximating Filter/Filter+
    const parts = [
      'invert(1) hue-rotate(180deg)',
      `brightness(${p.brightness}%)`,
      `contrast(${p.contrast}%)`,
      p.sepia ? `sepia(${p.sepia}%)` : '',
      p.grayscale ? `grayscale(${p.grayscale}%)` : ''
    ].filter(Boolean).join(' ');
    return `
      html, body { background: #0e0e10 !important; }
      html { filter: ${parts} !important; }
    `;
  }
  function filterFixCSS(p) {
    if (!(p.reInvertMedia)) return '';
    return `
      img, image, video, canvas, svg image, picture, embed[type^="image/"],
      [role="img"] {
        filter: invert(1) hue-rotate(180deg) !important;
        color-scheme: light;
        isolation: isolate;
      }
    `;
  }
  function applyFilter() {
    if (!prefs.enabled) { clearAllEngines(); return; }
    // Ensure DR is fully off so engines don't conflict
    try { window.DarkReader && window.DarkReader.disable(); } catch {}
    removeEl(IDS.staticStyle);
    const s = ensureStyle(IDS.filterStyle);
    s.textContent = filterCSS(prefs);
    const f = ensureStyle(IDS.filterFix);
    f.textContent = filterFixCSS(prefs);
  }

  async function applyStatic() {
    if (!prefs.enabled) { clearAllEngines(); return; }
    // Use saved CSS first; if none, attempt to generate from Dynamic engine.
    let css = prefs.staticCSSByHost?.[location.host];
    if (!css) {
      const ok = await ensureDRLoaded();
      if (!ok) return;
      // Temporarily enable Dynamic to compute, then export and swap to static CSS.
      try {
        window.DarkReader.enable(themeFrom(prefs));
        css = await window.DarkReader.exportGeneratedCSS();
      } catch (e) {
        console.warn('Static CSS export failed; falling back to Filter engine.', e);
        return applyFilter();
      } finally {
        try { window.DarkReader.disable(); } catch {}
      }
      prefs.staticCSSByHost = Object.assign({}, prefs.staticCSSByHost, { [location.host]: css });
      save();
    }
    // Apply saved CSS
    removeEl(IDS.filterStyle);
    removeEl(IDS.filterFix);
    const st = ensureStyle(IDS.staticStyle);
    st.textContent = css;
  }

  async function applyEngine() {
    if (!prefs.enabled) { clearAllEngines(); return; }
    if (prefs.engine === 'dynamic') return applyDynamic();
    if (prefs.engine === 'filter')  return applyFilter();
    if (prefs.engine === 'static')  return applyStatic();
  }

  // ---------- Modal UI (native <dialog>) ----------
  const modalCSS = `
#${IDS.dialog}{
  padding:0;border:none;max-width:520px;width:min(92vw,520px);
  border-radius:12px;box-shadow:0 20px 50px rgba(0,0,0,.35);
  font:14px/1.4 -apple-system, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}
#${IDS.dialog} .wrap{background:#1b1b1f;color:#e6e6e9;padding:14px 16px 12px;border-radius:12px;}
#${IDS.dialog} h3{margin:0 0 8px 0;font-size:16px;}
#${IDS.dialog} label.row{display:flex;align-items:center;gap:.5rem;margin:.5rem 0;}
#${IDS.dialog} .grid{display:grid;grid-template-columns:150px 1fr 56px;gap:8px;margin-top:8px;}
#${IDS.dialog} .cols{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
#${IDS.dialog} footer{display:flex;gap:8px;justify-content:flex-end;margin-top:12px;}
#${IDS.dialog} button{border:none;padding:.5rem .75rem;border-radius:8px;cursor:pointer}
#${IDS.dialog} .btn{background:#4a74ff;color:#fff;}
#${IDS.dialog} .btn-ghost{background:#333;color:#f3f3f3;}
#${IDS.dialog} .kbd{opacity:.75;}
#${IDS.dialog} select, #${IDS.dialog} input[type="number"]{width:100%;}
#${IDS.dialog}::backdrop{background:rgba(0,0,0,.35);}
`;

  function ensureModalCSS() {
    if (document.getElementById(IDS.css)) return;
    const st = document.createElement('style');
    st.id = IDS.css;
    st.textContent = modalCSS;
    document.head.appendChild(st);
  }

  function buildDialog() {
    if (document.getElementById(IDS.dialog)) return;
    ensureModalCSS();

    const dlg = document.createElement('dialog');
    dlg.id = IDS.dialog;
    dlg.innerHTML = `
      <form method="dialog" class="wrap">
        <header style="display:flex;align-items:center;justify-content:space-between;">
          <h3>Dark Reader (injected)</h3>
          <div class="kbd">Alt+D</div>
        </header>

        <div class="cols">
          <div>
            <label class="row"><input type="checkbox" id="dr-enabled"> <span>Enable</span></label>
            <label class="row"><input type="checkbox" id="dr-follow"> <span>Follow system theme (Dynamic)</span></label>
            <label class="row" style="gap:.75rem;">
              <span style="min-width:64px;">Engine</span>
              <select id="dr-engine">
                <option value="dynamic">Dynamic (recommended)</option>
                <option value="filter">Filter</option>
                <option value="static">Static (CSS snapshot)</option>
              </select>
            </label>
            <label class="row"><span style="min-width:64px;">Mode</span>
              <select id="dr-mode">
                <option value="1">Dark</option>
                <option value="0">Dimmed</option>
              </select>
            </label>
            <label class="row"><input type="checkbox" id="dr-reinvert"> <span>Re-invert media (Filter)</span></label>
          </div>

          <div class="grid">
            <div>Brightness</div>
            <input type="range" id="dr-bright" min="0" max="200" step="1">
            <output id="dr-bright-o"></output>

            <div>Contrast</div>
            <input type="range" id="dr-contrast" min="0" max="200" step="1">
            <output id="dr-contrast-o"></output>

            <div>Sepia</div>
            <input type="range" id="dr-sepia" min="0" max="100" step="1">
            <output id="dr-sepia-o"></output>

            <div>Grayscale</div>
            <input type="range" id="dr-gray" min="0" max="100" step="1">
            <output id="dr-gray-o"></output>
          </div>
        </div>

        <details style="margin:.75rem 0 .25rem;opacity:.92;">
          <summary>Timing & Static</summary>
          <div style="display:flex;align-items:center;gap:.75rem;margin:.5rem 0;">
            <span>Auto-open delay (s)</span>
            <input type="number" id="dr-delay" min="0" max="60" step="0.1" style="width:110px;">
          </div>
          <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
            <button type="button" id="dr-static-refresh" class="btn-ghost" title="Generate Static CSS from Dynamic">Refresh Static CSS</button>
            <button type="button" id="dr-static-clear" class="btn-ghost" title="Remove saved Static CSS for this host">Clear Static CSS</button>
            <button type="button" id="dr-export" class="btn-ghost" title="Export generated CSS (Dynamic)">Export CSS</button>
          </div>
        </details>

        <footer>
          <button type="button" id="dr-reset" class="btn-ghost">Reset</button>
          <button type="submit" class="btn">Close</button>
        </footer>
      </form>
    `;
    document.documentElement.appendChild(dlg);

    // Close on outside click (backdrop)
    dlg.addEventListener('click', (e) => {
      const r = dlg.getBoundingClientRect();
      const inBox = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inBox) dlg.close();
    });

    const $ = (sel) => dlg.querySelector(sel);
    const onChange = (fn) => (e) => { fn(e); save(); applyEngine(); };

    $('#dr-enabled').checked = prefs.enabled;
    $('#dr-follow').checked = prefs.followSystem;
    $('#dr-engine').value = prefs.engine;
    $('#dr-mode').value = String(prefs.mode);
    $('#dr-reinvert').checked = prefs.reInvertMedia;

    $('#dr-bright').value = prefs.brightness; $('#dr-bright-o').value = prefs.brightness;
    $('#dr-contrast').value = prefs.contrast; $('#dr-contrast-o').value = prefs.contrast;
    $('#dr-sepia').value = prefs.sepia;       $('#dr-sepia-o').value = prefs.sepia;
    $('#dr-gray').value = prefs.grayscale;    $('#dr-gray-o').value = prefs.grayscale;
    $('#dr-delay').value = prefs.autoOpenSeconds;

    $('#dr-enabled').addEventListener('change', onChange(e => prefs.enabled = e.target.checked));
    $('#dr-follow').addEventListener('change', onChange(e => prefs.followSystem = e.target.checked));
    $('#dr-engine').addEventListener('change', onChange(e => prefs.engine = e.target.value));
    $('#dr-mode').addEventListener('change', onChange(e => prefs.mode = Number(e.target.value)));
    $('#dr-reinvert').addEventListener('change', onChange(e => prefs.reInvertMedia = e.target.checked));

    const linkRange = (id, out, key) => {
      $(id).addEventListener('input', e => {
        prefs[key] = Number(e.target.value);
        $(out).value = prefs[key];
        save(); applyEngine();
      });
    };
    linkRange('#dr-bright',   '#dr-bright-o',   'brightness');
    linkRange('#dr-contrast', '#dr-contrast-o', 'contrast');
    linkRange('#dr-sepia',    '#dr-sepia-o',    'sepia');
    linkRange('#dr-gray',     '#dr-gray-o',     'grayscale');

    $('#dr-delay').addEventListener('change', e => {
      const v = Math.max(0, Math.min(60, Number(e.target.value) || 0));
      prefs.autoOpenSeconds = v; save();
    });

    $('#dr-reset').addEventListener('click', () => {
      Object.assign(prefs, defaults);
      save();
      dlg.close(); dlg.remove();
      buildDialog(); applyEngine();
      openDialog();
    });

    $('#dr-export').addEventListener('click', async () => {
      try {
        await ensureDRLoaded();
        const css = await window.DarkReader.exportGeneratedCSS();
        const blob = new Blob([css], { type: 'text/css' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'darkreader-generated.css';
        a.click();
        setTimeout(() => URL.revokeObjectURL(a.href), 1500);
      } catch (e) {
        alert('Export failed (Dynamic engine required).');
      }
    });

    $('#dr-static-refresh').addEventListener('click', async () => {
      try {
        await ensureDRLoaded();
        window.DarkReader.enable(themeFrom(prefs));
        const css = await window.DarkReader.exportGeneratedCSS();
        window.DarkReader.disable();
        prefs.staticCSSByHost = Object.assign({}, prefs.staticCSSByHost, { [location.host]: css });
        save();
        if (prefs.engine === 'static') applyStatic();
      } catch (e) {
        alert('Could not generate Static CSS. Try Dynamic engine first on this page.');
      }
    });

    $('#dr-static-clear').addEventListener('click', () => {
      if (prefs.staticCSSByHost && prefs.staticCSSByHost[location.host]) {
        delete prefs.staticCSSByHost[location.host];
        save();
        if (prefs.engine === 'static') { removeEl(IDS.staticStyle); }
        alert('Saved Static CSS cleared for this host.');
      }
    });

    dlg.addEventListener('close', () => save());
  }

  function openDialog() {
    buildDialog();
    const dlg = document.getElementById(IDS.dialog);
    if (!dlg.open) dlg.showModal();
  }

  // ---------- Orchestration ----------
  (async () => {
    // Load DR early if engine is Dynamic or Static (for generation)
    if (prefs.engine !== 'filter') { try { await ensureDRLoaded(); } catch {} }
    const delayMs = Math.max(0, Number(prefs.autoOpenSeconds || 0) * 1000);
    setTimeout(() => { applyEngine(); openDialog(); }, delayMs);
  })();

  // Hotkey to reopen settings
  window.addEventListener('keydown', (e) => {
    if (e.altKey && !e.shiftKey && !e.ctrlKey && !e.metaKey && e.key.toLowerCase() === 'd') {
      e.preventDefault();
      openDialog();
    }
  });
})();
