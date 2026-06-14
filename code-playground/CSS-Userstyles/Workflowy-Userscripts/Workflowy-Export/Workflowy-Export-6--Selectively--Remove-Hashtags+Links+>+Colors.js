// ==UserScript==
// @name         Workflowy Export 5 > Toggle Panel + Links + Hashtags + > + Colors
// @namespace    https://workflowy.com/
// @version      2.3
// @description  Persistent toggle panel (localStorage-backed) to switch selective hashtag removal on/off. Always-on: link removal, note blockquote cleaning, == removal, and list-indentation normalization to tabs. Works with current Workflowy export DOM.
// @match        https://workflowy.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // ----------------------------------------------------------------------
  // Toggle state (localStorage-backed). Add a new switch by adding one
  // entry to TOGGLE_DEFS; the panel and persistence pick it up automatically.
  // ----------------------------------------------------------------------
  const STORAGE_KEY = 'wfExportToggles';
  const TOGGLE_DEFS = [
	{ id: 'stripHashtags', label: 'Selective hashtag removal', def: true },
  ];

  function defaults() {
	const o = { _collapsed: false };
	TOGGLE_DEFS.forEach(t => { o[t.id] = t.def; });
	return o;
  }
  function loadState() {
	try { return Object.assign(defaults(), JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')); }
	catch (e) { return defaults(); }
  }
  function saveState(s) {
	try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (e) {}
  }
  let state = loadState();

  // ----------------------------------------------------------------------
  // Toggle panel UI
  // ----------------------------------------------------------------------
  function injectStyleOnce() {
	if (document.getElementById('wf-export-toggle-style')) return;
	const css = `
#wf-export-toggle-panel{position:fixed;bottom:16px;right:16px;z-index:2147483647;width:212px;background:#1e1e1e;color:#eee;font:12px/1.4 -apple-system,system-ui,Segoe UI,sans-serif;border:1px solid #3a3a3a;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.45);user-select:none}
#wf-export-toggle-panel .wf-h{display:flex;justify-content:space-between;align-items:center;padding:8px 10px;cursor:pointer;font-weight:600;border-bottom:1px solid #3a3a3a}
#wf-export-toggle-panel .wf-h .wf-caret{opacity:.7;font-size:10px}
#wf-export-toggle-panel .wf-b{padding:8px 10px;display:flex;flex-direction:column;gap:8px}
#wf-export-toggle-panel.wf-collapsed .wf-b{display:none}
#wf-export-toggle-panel.wf-collapsed .wf-h{border-bottom:none}
#wf-export-toggle-panel .wf-row{display:flex;justify-content:space-between;align-items:center;gap:10px}
#wf-export-toggle-panel .wf-switch{position:relative;width:34px;height:18px;flex:0 0 auto}
#wf-export-toggle-panel .wf-switch input{opacity:0;width:0;height:0;margin:0}
#wf-export-toggle-panel .wf-slider{position:absolute;inset:0;background:#555;border-radius:18px;transition:.15s;cursor:pointer}
#wf-export-toggle-panel .wf-slider:before{content:"";position:absolute;height:14px;width:14px;left:2px;top:2px;background:#fff;border-radius:50%;transition:.15s}
#wf-export-toggle-panel .wf-switch input:checked + .wf-slider{background:#2d8cff}
#wf-export-toggle-panel .wf-switch input:checked + .wf-slider:before{transform:translateX(16px)}`;
	const style = document.createElement('style');
	style.id = 'wf-export-toggle-style';
	style.textContent = css;
	document.head.appendChild(style);
  }

  function applyCollapsed(panel) {
	panel.classList.toggle('wf-collapsed', !!state._collapsed);
	const caret = panel.querySelector('.wf-caret');
	if (caret) caret.textContent = state._collapsed ? '\u25B2' : '\u25BC';
  }

  function ensurePanel(host) {
	if (document.getElementById('wf-export-toggle-panel')) return;
	if (!host) return;
	injectStyleOnce();

	const panel = document.createElement('div');
	panel.id = 'wf-export-toggle-panel';

	const header = document.createElement('div');
	header.className = 'wf-h';
	header.innerHTML = '<span>Export options</span><span class="wf-caret"></span>';
	header.addEventListener('click', () => {
	  state._collapsed = !state._collapsed;
	  saveState(state);
	  applyCollapsed(panel);
	});
	panel.appendChild(header);

	const body = document.createElement('div');
	body.className = 'wf-b';
	TOGGLE_DEFS.forEach(def => {
	  const row = document.createElement('label');
	  row.className = 'wf-row';

	  const text = document.createElement('span');
	  text.textContent = def.label;

	  const sw = document.createElement('span');
	  sw.className = 'wf-switch';
	  const input = document.createElement('input');
	  input.type = 'checkbox';
	  input.checked = !!state[def.id];
	  input.addEventListener('change', () => {
		state[def.id] = input.checked;
		saveState(state);
	  });
	  const slider = document.createElement('span');
	  slider.className = 'wf-slider';
	  sw.appendChild(input);
	  sw.appendChild(slider);

	  row.appendChild(text);
	  row.appendChild(sw);
	  body.appendChild(row);
	});
	panel.appendChild(body);

	host.appendChild(panel);
	applyCollapsed(panel);
  }

  function removePanel() {
	const panel = document.getElementById('wf-export-toggle-panel');
	if (panel) panel.remove();
  }

  // ----------------------------------------------------------------------
  // Rule 5 (ALWAYS ON): normalize list indentation to tabs.
  // Workflowy indents ordered items 4 spaces/level and unordered 2/level.
  // Decode each line's depth from its own marker, re-emit one tab per level.
  // ----------------------------------------------------------------------
  function normalizeListIndentation(text) {
	const lines = text.split('\n');
	const out = [];
	let lastDepth = 0;

	for (const line of lines) {
	  const m = line.match(/^( *)(\d+\.|[-*+])(\s+)(.*)$/);
	  if (m) {
		const spaces = m[1].length;
		const isOrdered = /^\d+\.$/.test(m[2]);
		const depth = isOrdered ? Math.floor(spaces / 4) : Math.floor(spaces / 2);
		const marker = isOrdered ? m[2] : '-';
		out.push('\t'.repeat(depth) + marker + ' ' + m[4]);
		lastDepth = depth;
		continue;
	  }
	  if (line.trim() === '') { out.push(line); continue; }
	  if (/^ /.test(line)) { out.push('\t'.repeat(lastDepth + 1) + line.replace(/^ +/, '')); continue; }
	  out.push(line);
	  lastDepth = 0;
	}
	return out.join('\n');
  }

  // ----------------------------------------------------------------------
  // process text: apply transformations to exported markdown
  // ----------------------------------------------------------------------
  function processText(text) {
	state = loadState(); // pick up current toggle positions at copy time
	const lines = text.split('\n');
	const result = [];

	for (let i = 0; i < lines.length; i++) {
	  let line = lines[i];
	  const prevLine = i > 0 ? lines[i - 1] : '';
	  const prevTrimmed = prevLine.trim();

	  // Rule 3.a (ALWAYS ON): Delete line if it's only '> '
	  if (/^\s*>\s*$/.test(line)) continue;

	  // Rule 3 (ALWAYS ON): Remove leading '> ' unless exception
	  const isFirstLine = i === 0;
	  const isDashBlockquote = /^\s*-\s*> /.test(line);
	  const blankAbove = prevTrimmed === '';

	  if (!isFirstLine && !blankAbove && !isDashBlockquote && /^\s*> /.test(line)) {
		const prevIndent = (prevLine.match(/^\s*/)[0] || '').length;
		let addSpaces = 3;
		if (/^\s*-\s*> /.test(prevLine)) addSpaces = 6;
		else if (/^\s*- /.test(prevLine)) addSpaces = 3;
		else if (/^\s*> /.test(prevLine)) addSpaces = 3;
		const totalIndent = ' '.repeat(prevIndent + addSpaces);
		line = line.replace(/^\s*>\s?/, totalIndent);
	  }

	  // Rule 1 (ALWAYS ON): Remove markdown links (keep visible text only)
	  while (/\[[^\]]+\]\([^\)]+\)/.test(line)) {
		line = line.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '$1');
	  }

	  // Rule 2 (TOGGLE: stripHashtags): Remove '#' unless followed by a number
	  if (state.stripHashtags) {
		line = line.replace(/#(?!\d)([A-Za-z0-9_-]+)/g, '$1');
	  }

	  // Rule 4 (ALWAYS ON): Remove all instances of '=='
	  line = line.replace(/==/g, '');

	  result.push(line);
	}

	// Rule 5 (ALWAYS ON): normalize list indentation to tabs
	return normalizeListIndentation(result.join('\n'));
  }

  // ----------------------------------------------------------------------
  // Observer: ensure the toggle panel exists, and wire the export dialog.
  // ----------------------------------------------------------------------
  const observer = new MutationObserver(() => {
	const dialog = document.querySelector('.flex.items-start.justify-center.dialog-backdrop')
	  || document.querySelector('.dialog-backdrop');

	// Show the toggle panel only while the export dialog is on screen,
	// attached to the dialog element itself so it lives and dies with it.
	if (!dialog) { removePanel(); return; }
	ensurePanel(dialog);

	if (dialog._hasCombinedCopyListener) return;

	const textarea = dialog.querySelector('textarea') || dialog.querySelector('div[contenteditable]');
	if (!textarea) return;

	dialog._hasCombinedCopyListener = true;

	dialog.addEventListener('copy', function (e) {
	  try {
		e.preventDefault();
		const raw = textarea.value ?? textarea.textContent ?? '';
		const out = processText(raw);
		if (e.clipboardData) {
		  e.clipboardData.setData('text/plain', out);
		} else if (navigator.clipboard && navigator.clipboard.writeText) {
		  navigator.clipboard.writeText(out).catch(() => {});
		}
	  } catch (err) {
		console.error('Workflowy export script error', err);
	  }
	}, true);
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();