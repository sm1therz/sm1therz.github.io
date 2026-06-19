// ==UserScript==
// @name         Workflowy Export 5 > Toggle Panel + Links + Hashtags + > + Colors
// @namespace    https://workflowy.com/
// @version      2.7
// @description  Persistent toggle panel (localStorage-backed) with a collapsible Hashtags section: remove hashtags, capitalize, dashes-to-spaces, convert # to H2 (with tag list). Always-on: link removal, note blockquote cleaning, == removal, and list-indentation normalization to tabs. Works with current Workflowy export DOM.
// @match        https://workflowy.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // ----------------------------------------------------------------------
  // Toggle state (localStorage-backed). Data-driven: add a switch to a
  // section's `toggles`, or a section to SECTIONS; the panel, persistence,
  // and defaults pick it up automatically.
  //   - normal toggle: { id, label, def, sepAfter? }
  //   - h2 toggle:      { id, label, def, kind:'h2', tagsKey, expandKey }
  // ----------------------------------------------------------------------
  const STORAGE_KEY = 'wfExportToggles';
  const SECTIONS = [
	{
	  id: 'hashtags',
	  label: 'Hashtags',
	  collapsed: false,
	  toggles: [
		{ id: 'stripHashtags',      label: 'Remove Hashtags',   def: true, sepAfter: true },
		{ id: 'capitalizeHashtags', label: 'Capitalize',        def: false },
		{ id: 'dashesToSpaces',     label: 'Dashes to Spaces',  def: false },
		{ id: 'convertH2',          label: 'Convert # to H2',   def: false,
		  kind: 'h2', tagsKey: 'convertH2Tags', expandKey: '_h2_expanded' },
	  ],
	},
	{
	  id: 'cleanup',
	  label: 'Cleanup',
	  collapsed: false,
	  toggles: [
		{ id: 'removeLinks',      label: 'Remove links',           def: true },
		{ id: 'cleanNotes',       label: 'Clean note blockquotes', def: true },
		{ id: 'removeHighlights', label: 'Remove == highlights',   def: true },
	  ],
	},
  ];

  function defaults() {
	const o = { _collapsed: false };
	SECTIONS.forEach(sec => {
	  o['_sec_' + sec.id] = !!sec.collapsed;
	  sec.toggles.forEach(t => {
		o[t.id] = t.def;
		if (t.kind === 'h2') { o[t.tagsKey] = ''; o[t.expandKey] = false; }
	  });
	});
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
#wf-export-toggle-panel{position:fixed;bottom:16px;right:16px;z-index:2147483647;width:224px;background:#1e1e1e;color:#eee;font:12px/1.4 -apple-system,system-ui,Segoe UI,sans-serif;border:1px solid #3a3a3a;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.45);user-select:none}
#wf-export-toggle-panel .wf-h{display:flex;justify-content:space-between;align-items:center;padding:8px 10px;cursor:pointer;font-weight:600;border-bottom:1px solid #3a3a3a}
#wf-export-toggle-panel.wf-collapsed .wf-h{border-bottom:none}
#wf-export-toggle-panel .wf-h .wf-caret{opacity:.7;font-size:10px}
#wf-export-toggle-panel .wf-b{padding:8px 10px;display:flex;flex-direction:column;gap:10px}
/* one shared left edge (16px gutter) for section names + option labels; carets live in the gutter */
#wf-export-toggle-panel .wf-section-h{position:relative;padding-left:16px;display:flex;align-items:center;cursor:pointer;font-weight:600}
#wf-export-toggle-panel .wf-row{position:relative;padding-left:16px;display:flex;justify-content:space-between;align-items:center;gap:10px}
#wf-export-toggle-panel .wf-h2-h{position:relative;padding-left:16px;display:flex;justify-content:space-between;align-items:center;gap:10px;cursor:pointer;font-weight:400}
#wf-export-toggle-panel .wf-sec-caret,#wf-export-toggle-panel .wf-h2-caret{position:absolute;left:2px;top:50%;transform:translateY(-50%);opacity:.7;font-size:9px;width:9px;text-align:center}
#wf-export-toggle-panel .wf-section-b{display:flex;flex-direction:column;gap:8px;margin-top:8px}
#wf-export-toggle-panel .wf-sep{height:1px;background:#3a3a3a;margin:1px 0 1px 16px}
#wf-export-toggle-panel .wf-h2-b{padding-left:16px;padding-top:6px}
#wf-export-toggle-panel .wf-ta{width:100%;box-sizing:border-box;background:#111;color:#eee;border:1px solid #3a3a3a;border-radius:5px;font:11px/1.4 ui-monospace,SFMono-Regular,Menlo,monospace;padding:5px 6px;resize:vertical;min-height:46px}
#wf-export-toggle-panel .wf-switch{position:relative;width:34px;height:18px;flex:0 0 auto}
#wf-export-toggle-panel .wf-switch input{opacity:0;width:0;height:0;margin:0}
#wf-export-toggle-panel .wf-slider{position:absolute;inset:0;background:#555;border-radius:18px;transition:.15s;cursor:pointer}
#wf-export-toggle-panel .wf-slider:before{content:"";position:absolute;height:14px;width:14px;left:2px;top:2px;background:#fff;border-radius:50%;transition:.15s}
#wf-export-toggle-panel .wf-switch input:checked + .wf-slider{background:#2d8cff}
#wf-export-toggle-panel .wf-switch input:checked + .wf-slider:before{transform:translateX(16px)}
/* smooth open/close via animatable grid rows (.2s) */
#wf-export-toggle-panel .wf-collapse{display:grid;grid-template-rows:1fr;transition:grid-template-rows .2s ease}
#wf-export-toggle-panel .wf-collapse-inner{overflow:hidden;min-height:0}
#wf-export-toggle-panel.wf-collapsed .wf-body-collapse{grid-template-rows:0fr}
#wf-export-toggle-panel .wf-section.wf-sec-collapsed .wf-section-collapse{grid-template-rows:0fr}
#wf-export-toggle-panel .wf-h2.wf-h2-collapsed .wf-h2-collapse{grid-template-rows:0fr}`;
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

  function buildToggleRow(def) {
	const row = document.createElement('label');
	row.className = 'wf-row';
	const text = document.createElement('span');
	text.textContent = def.label;
	const sw = document.createElement('span');
	sw.className = 'wf-switch';
	const input = document.createElement('input');
	input.type = 'checkbox';
	input.checked = !!state[def.id];
	input.addEventListener('change', () => { state[def.id] = input.checked; saveState(state); });
	const slider = document.createElement('span');
	slider.className = 'wf-slider';
	sw.appendChild(input);
	sw.appendChild(slider);
	row.appendChild(text);
	row.appendChild(sw);
	return row;
  }

  function buildH2Row(def) {
	const wrap = document.createElement('div');
	wrap.className = 'wf-h2';

	const head = document.createElement('div');
	head.className = 'wf-h2-h';
	const caret = document.createElement('span');
	caret.className = 'wf-h2-caret';
	const label = document.createElement('span');
	label.textContent = def.label;

	const sw = document.createElement('label');
	sw.className = 'wf-switch';
	const input = document.createElement('input');
	input.type = 'checkbox';
	input.checked = !!state[def.id];
	input.addEventListener('change', () => { state[def.id] = input.checked; saveState(state); });
	const slider = document.createElement('span');
	slider.className = 'wf-slider';
	sw.appendChild(input);
	sw.appendChild(slider);
	sw.addEventListener('click', e => e.stopPropagation()); // toggling on/off must not expand

	head.appendChild(caret);
	head.appendChild(label);
	head.appendChild(sw);

	const collapse = document.createElement('div');
	collapse.className = 'wf-collapse wf-h2-collapse';
	const inner = document.createElement('div');
	inner.className = 'wf-collapse-inner';
	const body = document.createElement('div');
	body.className = 'wf-h2-b';
	const ta = document.createElement('textarea');
	ta.className = 'wf-ta';
	ta.placeholder = '#context,#task,';
	ta.value = state[def.tagsKey] || '';
	ta.addEventListener('input', () => { state[def.tagsKey] = ta.value; saveState(state); });
	ta.addEventListener('click', e => e.stopPropagation());
	body.appendChild(ta);
	inner.appendChild(body);
	collapse.appendChild(inner);

	function applyH2() {
	  const collapsed = !state[def.expandKey];
	  wrap.classList.toggle('wf-h2-collapsed', collapsed);
	  caret.textContent = collapsed ? '\u25B8' : '\u25BE';
	}
	head.addEventListener('click', () => {
	  state[def.expandKey] = !state[def.expandKey];
	  saveState(state);
	  applyH2();
	});

	wrap.appendChild(head);
	wrap.appendChild(collapse);
	applyH2();
	return wrap;
  }

  function buildSection(sec) {
	const section = document.createElement('div');
	section.className = 'wf-section';

	const head = document.createElement('div');
	head.className = 'wf-section-h';
	const caret = document.createElement('span');
	caret.className = 'wf-sec-caret';
	const label = document.createElement('span');
	label.textContent = sec.label;
	head.appendChild(caret);
	head.appendChild(label);

	const collapse = document.createElement('div');
	collapse.className = 'wf-collapse wf-section-collapse';
	const inner = document.createElement('div');
	inner.className = 'wf-collapse-inner';
	const sbody = document.createElement('div');
	sbody.className = 'wf-section-b';
	sec.toggles.forEach(def => {
	  sbody.appendChild(def.kind === 'h2' ? buildH2Row(def) : buildToggleRow(def));
	  if (def.sepAfter) {
		const sep = document.createElement('div');
		sep.className = 'wf-sep';
		sbody.appendChild(sep);
	  }
	});
	inner.appendChild(sbody);
	collapse.appendChild(inner);

	const secKey = '_sec_' + sec.id;
	function applySec() {
	  const collapsed = !!state[secKey];
	  section.classList.toggle('wf-sec-collapsed', collapsed);
	  caret.textContent = collapsed ? '\u25B8' : '\u25BE';
	}
	head.addEventListener('click', () => {
	  state[secKey] = !state[secKey];
	  saveState(state);
	  applySec();
	});

	section.appendChild(head);
	section.appendChild(collapse);
	applySec();
	return section;
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

	const collapse = document.createElement('div');
	collapse.className = 'wf-collapse wf-body-collapse';
	const inner = document.createElement('div');
	inner.className = 'wf-collapse-inner';
	const body = document.createElement('div');
	body.className = 'wf-b';
	SECTIONS.forEach(sec => body.appendChild(buildSection(sec)));
	inner.appendChild(body);
	collapse.appendChild(inner);
	panel.appendChild(collapse);

	host.appendChild(panel);
	applyCollapsed(panel);
  }

  function removePanel() {
	const panel = document.getElementById('wf-export-toggle-panel');
	if (panel) panel.remove();
  }

  // ----------------------------------------------------------------------
  // Helpers for the Hashtags rules
  // ----------------------------------------------------------------------
  function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  // Convert separators to spaces, collapse whitespace, capitalize each word.
  function toHeading(t) {
	return t
	  .replace(/[-_]+/g, ' ')
	  .replace(/\s+/g, ' ')
	  .trim()
	  .replace(/(^|\s)([a-zA-Z])/g, (m, sep, ch) => sep + ch.toUpperCase());
  }

  // ----------------------------------------------------------------------
  // Rule 5 (ALWAYS ON): normalize list indentation to tabs.
  // Workflowy indents ordered items 4 spaces/level and unordered 2/level.
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

	// Tags listed in the H2 textarea (normalized: no leading #, no blanks).
	const h2Tags = state.convertH2
	  ? (state.convertH2Tags || '').split(',').map(s => s.trim().replace(/^#/, '')).filter(Boolean)
	  : [];

	for (let i = 0; i < lines.length; i++) {
	  let line = lines[i];
	  const prevLine = i > 0 ? lines[i - 1] : '';
	  const prevTrimmed = prevLine.trim();

	  // Rule 3 + 3.a (TOGGLE: cleanNotes): note blockquote cleaning
	  if (state.cleanNotes) {
		// 3.a: Delete line if it's only '> '
		if (/^\s*>\s*$/.test(line)) continue;

		// 3: Remove leading '> ' unless exception
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
	  }

	  // Rule 1 (TOGGLE: removeLinks): Remove markdown links (keep visible text only)
	  if (state.removeLinks) {
		while (/\[[^\]]+\]\([^\)]+\)/.test(line)) {
		  line = line.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '$1');
		}
	  }

	  // ----- Hashtags section -----
	  // A "tag" = '#' + hashtag text ([A-Za-z0-9_-]+, ends at a space).
	  // Order: Convert # to H2 -> Capitalize -> Dashes to Spaces -> Remove,
	  // so listed tags become headings and the rest are processed once.

	  // Convert # to H2 (TOGGLE): listed tags -> '## Heading' (capitalized, spaces removed)
	  //   #context: -> ## Context:
	  if (h2Tags.length) {
		for (const t of h2Tags) {
		  const re = new RegExp('#' + escapeRegex(t) + '(?![A-Za-z0-9_-])', 'gi');
		  line = line.replace(re, '## ' + toHeading(t));
		}
	  }

	  // Capitalize (TOGGLE): uppercase first letter of each dash segment
	  //   #tag-number-1 -> #Tag-Number-1
	  if (state.capitalizeHashtags) {
		line = line.replace(/#([A-Za-z0-9_-]+)/g, (m, t) =>
		  '#' + t.replace(/(^|-)([a-zA-Z])/g, (mm, sep, ch) => sep + ch.toUpperCase()));
	  }

	  // Dashes to Spaces (TOGGLE): replace dashes inside the tag with spaces
	  //   #Tag-Number-1 -> #Tag Number 1
	  if (state.dashesToSpaces) {
		line = line.replace(/#([A-Za-z0-9_-]+)/g, (m, t) => '#' + t.replace(/-/g, ' '));
	  }

	  // Remove Hashtags (TOGGLE): drop '#' unless followed by a number
	  //   #tag -> tag ; #2 -> #2
	  if (state.stripHashtags) {
		line = line.replace(/#(?!\d)([A-Za-z0-9_-]+)/g, '$1');
	  }

	  // Rule 4 (TOGGLE: removeHighlights): Remove all instances of '=='
	  if (state.removeHighlights) {
		line = line.replace(/==/g, '');
	  }

	  result.push(line);
	}

	// Rule 5 (ALWAYS ON): normalize list indentation to tabs
	return normalizeListIndentation(result.join('\n'));
  }

  // ----------------------------------------------------------------------
  // Observer: show panel with the export dialog, and wire the copy handler.
  // ----------------------------------------------------------------------
  const observer = new MutationObserver(() => {
	const dialog = document.querySelector('.flex.items-start.justify-center.dialog-backdrop')
	  || document.querySelector('.dialog-backdrop');

	if (!dialog) { removePanel(); return; }
	ensurePanel(dialog);

	if (dialog._hasCombinedCopyListener) return;

	// Find the export field, skipping our own panel's inputs (the H2 tag textarea).
	let textarea = null;
	const fields = dialog.querySelectorAll('textarea, div[contenteditable]');
	for (let k = 0; k < fields.length; k++) {
	  if (fields[k].closest('#wf-export-toggle-panel')) continue;
	  textarea = fields[k];
	  break;
	}
	if (!textarea) return;

	dialog._hasCombinedCopyListener = true;

	dialog.addEventListener('copy', function (e) {
	  // Let copies that originate inside our panel (the tag textarea) behave normally.
	  if (e.target && e.target.closest && e.target.closest('#wf-export-toggle-panel')) return;
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