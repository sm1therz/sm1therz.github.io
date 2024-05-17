// ==UserScript==
// @name         BTT-BetterTouchTool-KEYSTROKE MAPPING
// @namespace    http://yournamespace.com
// @version      1.0
// @description  Maps Command+Number hotkeys to Option+Shift+Number keystrokes
// @author       RSM
// @match        *
// ==/UserScript==

function simulateKeystroke(keyCode, modifiers) {
    const eventInitDict = {
        key: keyCode,
        code: keyCode,
        keyCode: keyCode.charCodeAt(0),
        which: keyCode.charCodeAt(0),
        altKey: modifiers.includes('alt'),
        shiftKey: modifiers.includes('shift'),
        metaKey: modifiers.includes('meta'),
        ctrlKey: modifiers.includes('ctrl'),
        bubbles: true,
        cancelable: true
    };
    const keydownEvent = new KeyboardEvent('keydown', eventInitDict);
    document.dispatchEvent(keydownEvent);
    const keyupEvent = new KeyboardEvent('keyup', eventInitDict);
    document.dispatchEvent(keyupEvent);
}

document.addEventListener("keydown", (e) => {
    if (e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey) {
        switch (e.key) {
            case '1':
                simulateKeystroke('1', ['alt', 'shift']);
                break;
            case '2':
                simulateKeystroke('2', ['alt', 'shift']);
                break;
            case '3':
                simulateKeystroke('3', ['alt', 'shift']);
                break;
            case '4':
                simulateKeystroke('4', ['alt', 'shift']);
                break;
            case '5':
                simulateKeystroke('6', ['alt', 'shift']);
                break;
            default:
                return;
        }
        e.preventDefault();
    }
});
