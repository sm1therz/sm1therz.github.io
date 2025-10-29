// ==UserScript==
// @name         ChatGPT Canvas • Prev/Next (low-overhead, stable injection, coord opener)
// @namespace    robert.canvas.nav
// @version      1.1.0
// @description  Minimal CPU: inject once when Canvas appears, no constant scanning. Buttons sit left of ⋮ and use the proven coordinate-based opener to click “Previous/Next version” reliably.
// @match        https://chat.openai.com/*
// @match        https://chatgpt.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// ---------- tiny helpers ----------
	const vis = (el) => el && el instanceof Element &&
		getComputedStyle(el).display !== 'none' &&
		getComputedStyle(el).visibility !== 'hidden' &&
		el.offsetParent !== null;

	function waitFor(fn, { timeout = 3000, interval = 50 } = {}) {
		const t0 = performance.now();
		return new Promise((resolve) => {
			(function tick() {
				const v = fn();
				if (v || performance.now() - t0 >= timeout) return resolve(v || null);
				setTimeout(tick, interval);
			})();
		});
	}

	// ---------- locate Canvas kebab quickly (no heavy scans) ----------
	const REQUIRED_CLUSTER = ['flex','min-w-0','basis-auto','items-center','leading-[0]','select-none'];
	const hasAll = (node) => {
		const c = node?.className || '';
		return REQUIRED_CLUSTER.every(k => c.includes(k));
	};

	function findKebabAndCluster() {
		// 1) grab the rightmost visible aria-haspopup=menu button (fast)
		const btns = Array.from(document.querySelectorAll('button[aria-haspopup="menu"]')).filter(vis);
		if (!btns.length) return { kebab: null, cluster: null };

		btns.sort((a, b) => b.getBoundingClientRect().right - a.getBoundingClientRect().right);
		// 2) walk up from each candidate to find the toolbar cluster with required classes
		for (const kebab of btns) {
			let n = kebab;
			for (let i = 0; i < 6 && n; i++) {
				if (n.nodeType === 1 && hasAll(n)) return { kebab, cluster: n };
				n = n.parentElement;
			}
		}
		return { kebab: null, cluster: null };
	}

	// ---------- coordinate opener + item click (what worked in your probe) ----------
	function clickAt(x, y) {
		const target = document.elementFromPoint(x, y);
		if (!target) return false;
		const base = { bubbles: true, composed: true, cancelable: true, clientX: x, clientY: y, view: window };
		target.dispatchEvent(new PointerEvent('pointerover', { ...base, buttons: 0 }));
		target.dispatchEvent(new MouseEvent('mouseover', base));
		target.dispatchEvent(new PointerEvent('pointerdown', { ...base, buttons: 1, button: 0 }));
		target.dispatchEvent(new MouseEvent('mousedown', { ...base, buttons: 1, button: 0 }));
		target.dispatchEvent(new PointerEvent('pointerup', { ...base, buttons: 0, button: 0 }));
		target.dispatchEvent(new MouseEvent('mouseup', { ...base, buttons: 0, button: 0 }));
		target.dispatchEvent(new MouseEvent('click', { ...base, button: 0 }));
		return true;
	}

	function menuContainer() {
		// minimal scan: only a few likely containers
		const qs = 'div[id^="radix-_r_"], [role="menu"], [data-radix-popper-content-wrapper], [data-radix-collection-root]';
		const cs = Array.from(document.querySelectorAll(qs)).filter(vis);
		for (const c of cs) {
			const kids = Array.from(c.children).filter(vis);
			const texts = kids.map(el => (el.textContent || '').trim());
			if (texts.some(t => /previous version/i.test(t)) || texts.some(t => /next version/i.test(t))) return c;
			const deep = Array.from(c.querySelectorAll('[role="menuitem"], [data-radix-collection-item], button, div')).filter(vis);
			const t2 = deep.map(el => (el.textContent || '').trim());
			if (t2.some(t => /previous version/i.test(t)) || t2.some(t => /next version/i.test(t))) return c;
		}
		return null;
	}

	function findMenuItem(menu, which) {
		const re = which === 'prev' ? /previous version/i : /next version/i;
		let item = Array.from(menu.children).filter(vis).find(el => re.test((el.textContent || '').trim()));
		if (item) return item;
		return Array.from(menu.querySelectorAll('[role="menuitem"], [data-radix-collection-item], button, div'))
			.filter(vis)
			.find(el => re.test((el.textContent || '').trim())) || null;
	}

	let clickCooldownUntil = 0;
	async function driveVersion(which) {
		const now = performance.now();
		if (now < clickCooldownUntil) return; // cheap debounce to prevent double-fires
		clickCooldownUntil = now + 450;

		const { kebab } = findKebabAndCluster();
		if (!kebab) return;

		// Focus canvas root if present (no heavy search)
		(document.querySelector('[data-testid="canvas"], [data-canvas-id]') || document.body).focus?.();

		// If already open, reuse; else open via coordinates inside ⋮ (right interior)
		let menu = menuContainer();
		if (!menu) {
			const r = kebab.getBoundingClientRect();
			const x = Math.floor(r.left + Math.min(10, r.width - 2));
			const y = Math.floor(r.top + r.height / 2);
			clickAt(x, y);
			menu = await waitFor(() => menuContainer(), { timeout: 800, interval: 40 });
			if (!menu) return; // bail quietly if nothing opened
		}

		const item = findMenuItem(menu, which);
		if (!item) return;

		const mr = item.getBoundingClientRect();
		clickAt(Math.floor(mr.left + mr.width / 2), Math.floor(mr.top + mr.height / 2));

		// Let UI settle; close if menu lingers
		setTimeout(() => { if (vis(menu)) document.body.click(); }, 120);
	}

	// ---------- inject once (no constant flashing, no heavy observers) ----------
	const BTN_PREV_ID = 'canvas-nav-prev';
	const BTN_NEXT_ID = 'canvas-nav-next';

	function makeBtn(glyph, title) {
		const b = document.createElement('button');
		b.type = 'button';
		b.textContent = glyph;
		b.title = title;
		b.setAttribute('aria-label', title);
		b.className = 'text-token-text-primary no-draggable hover:bg-token-surface-hover keyboard-focused:bg-token-surface-hover touch:h-10 touch:w-10 flex h-9 w-9 items-center justify-center rounded-lg focus:outline-none';
		b.style.minWidth = '2.25rem';
		return b;
	}

	function injectIfCanvasPresent() {
		// If already injected and kebab is still in DOM, do nothing (keeps CPU at idle)
		const prevExisting = document.getElementById(BTN_PREV_ID);
		const nextExisting = document.getElementById(BTN_NEXT_ID);
		if (prevExisting && nextExisting) {
			// ensure their host is still attached; if detached, fall through to re-inject
			if (document.contains(prevExisting) && document.contains(nextExisting)) return true;
		}

		const { kebab, cluster } = findKebabAndCluster();
		if (!kebab || !cluster || !vis(kebab)) return false;

		const prev = makeBtn('◀', 'Previous version'); prev.id = BTN_PREV_ID;
		const next = makeBtn('▶', 'Next version');     next.id = BTN_NEXT_ID;

		// Insert immediately to the LEFT of ⋮ without reflow churn
		let parent = kebab.parentElement;
		while (parent && parent !== cluster && !Array.from(parent.children).includes(kebab)) {
			parent = parent.parentElement;
		}
		const host = (parent && Array.from(parent.children).includes(kebab)) ? parent : cluster;
		host.insertBefore(next, kebab);
		host.insertBefore(prev, next);

		prev.addEventListener('click', () => driveVersion('prev'), { passive: true });
		next.addEventListener('click', () => driveVersion('next'), { passive: true });

		return true;
	}

	function removeIfCanvasGone() {
		// If kebab vanished (Canvas closed), remove buttons once; otherwise leave them alone.
		const { kebab } = findKebabAndCluster();
		if (kebab) return; // still present
		document.getElementById(BTN_PREV_ID)?.remove();
		document.getElementById(BTN_NEXT_ID)?.remove();
	}

	// ---------- ultra-light “re-armers” (no constant subtree observers) ----------
	// Re-run injection only on navigation/route changes or tab visibility changes.
	function hookHistory() {
		const _ps = history.pushState, _rs = history.replaceState;
		const fire = () => window.dispatchEvent(new Event('userscript:locationchange'));
		history.pushState = function (...a) { const r = _ps.apply(this, a); fire(); return r; };
		history.replaceState = function (...a) { const r = _rs.apply(this, a); fire(); return r; };
		window.addEventListener('popstate', fire, { passive: true });
	}

	function tryInjectIdle() {
		// run once now, and again when browser is idle/visible
		injectIfCanvasPresent();
		if ('requestIdleCallback' in window) {
			requestIdleCallback(() => injectIfCanvasPresent(), { timeout: 1200 });
		} else {
			setTimeout(() => injectIfCanvasPresent(), 250);
		}
	}

	// On first load
	hookHistory();
	tryInjectIdle();

	// On SPA route changes, visibility toggles, or resize (Canvas header may mount after layout)
	window.addEventListener('userscript:locationchange', () => { tryInjectIdle(); removeIfCanvasGone(); }, { passive: true });
	document.addEventListener('visibilitychange', () => { if (!document.hidden) tryInjectIdle(); }, { passive: true });
	window.addEventListener('resize', () => { tryInjectIdle(); }, { passive: true });

	// OPTIONAL: a tiny, one-shot mutation arm to catch the very first Canvas mount after load,
	// then auto-disconnect (no continuous observing).
	const mo = new MutationObserver((muts) => {
		if (injectIfCanvasPresent()) { mo.disconnect(); }
	});
	mo.observe(document.body, { childList: true, subtree: true });
	// Auto-stop after a short window to avoid any overhead
	setTimeout(() => { try { mo.disconnect(); } catch {} }, 3000);
})();
