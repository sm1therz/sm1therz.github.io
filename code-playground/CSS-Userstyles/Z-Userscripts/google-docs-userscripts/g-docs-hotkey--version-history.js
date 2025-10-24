// Simulate pressing CMD + OPTION + SHIFT + H
(function simulateCmdOptShiftH() {
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
    try { Object.defineProperty(ev, 'keyCode', {get: () => key.toUpperCase().charCodeAt(0)}); } catch(e){}
    return ev;
  }

  // Hold CMD (Meta), OPTION (Alt), and SHIFT
  target.dispatchEvent(makeKeyEvent('keydown', 'Meta', {meta:true, alt:true, shift:true}));
  target.dispatchEvent(makeKeyEvent('keydown', 'Alt',  {meta:true, alt:true, shift:true}));
  target.dispatchEvent(makeKeyEvent('keydown', 'Shift',{meta:true, alt:true, shift:true}));

  // Press H
  target.dispatchEvent(makeKeyEvent('keydown', 'h', {meta:true, alt:true, shift:true}));
  target.dispatchEvent(makeKeyEvent('keypress','h', {meta:true, alt:true, shift:true}));
  target.dispatchEvent(makeKeyEvent('keyup',   'h', {meta:true, alt:true, shift:true}));

  // Release modifiers
  target.dispatchEvent(makeKeyEvent('keyup', 'Shift', {meta:true, alt:true, shift:false}));
  target.dispatchEvent(makeKeyEvent('keyup', 'Alt',   {meta:true, alt:false, shift:false}));
  target.dispatchEvent(makeKeyEvent('keyup', 'Meta',  {meta:false, alt:false, shift:false}));
})();