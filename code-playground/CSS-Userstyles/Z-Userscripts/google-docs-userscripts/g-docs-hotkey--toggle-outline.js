// Best-effort: synthesize a chord: Ctrl+Meta hold, then 'a', then 'h'
(function tryDocShortcut() {
  const target = document.activeElement || document.body;

  function makeKeyEvent(type, key, {ctrl=false, meta=false, shift=false, alt=false} = {}) {
    const ev = new KeyboardEvent(type, {
      key,
      code: key.length === 1 ? 'Key' + key.toUpperCase() : key,
      keyCode: key.toUpperCase().charCodeAt(0),
      bubbles: true,
      cancelable: true,
      composed: true,
      ctrlKey: ctrl,
      metaKey: meta,
      shiftKey: shift,
      altKey: alt
    });
    // Some handlers check keyCode on the event object directly; try to set it if possible.
    try { Object.defineProperty(ev, 'keyCode', {get: () => key.toUpperCase().charCodeAt(0)}); } catch(e){/*ignore*/ }
    return ev;
  }

  // hold modifier down
  target.dispatchEvent(makeKeyEvent('keydown', 'Control', {ctrl:true, meta:true}));
  target.dispatchEvent(makeKeyEvent('keydown', 'Meta',    {ctrl:true, meta:true}));

  // press 'a' while modifiers held
  target.dispatchEvent(makeKeyEvent('keydown', 'a', {ctrl:true, meta:true}));
  target.dispatchEvent(makeKeyEvent('keypress','a', {ctrl:true, meta:true}));
  target.dispatchEvent(makeKeyEvent('keyup',   'a', {ctrl:true, meta:true}));

  // press 'h' while modifiers still held
  target.dispatchEvent(makeKeyEvent('keydown', 'h', {ctrl:true, meta:true}));
  target.dispatchEvent(makeKeyEvent('keypress','h', {ctrl:true, meta:true}));
  target.dispatchEvent(makeKeyEvent('keyup',   'h', {ctrl:true, meta:true}));

  // release modifiers
  target.dispatchEvent(makeKeyEvent('keyup','Meta', {ctrl:false, meta:false}));
  target.dispatchEvent(makeKeyEvent('keyup','Control', {ctrl:false, meta:false}));
})();