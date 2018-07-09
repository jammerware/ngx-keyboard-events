import { Injectable, EventEmitter } from '@angular/core';

export enum NgxKeyCode {
    // letters and numbers
    A = 65,
    B = 66,
    C = 67,
    D = 68,
    E = 69,
    F = 70,
    G = 71,
    H = 72,
    I = 73,
    J = 74,
    K = 75,
    L = 76,
    M = 77,
    N = 78,
    O = 79,
    P = 80,
    Q = 81,
    R = 82,
    S = 83,
    T = 84,
    U = 85,
    V = 86,
    W = 87,
    X = 88,
    Y = 89,
    Z = 90,
    Digit0 = 48,
    Digit1 = 49,
    Digit2 = 50,
    Digit3 = 51,
    Digit4 = 52,
    Digit5 = 53,
    Digit6 = 54,
    Digit7 = 55,
    Digit8 = 56,
    Digit9 = 57,
    Space = 32,

    // punctuation
    Backslash = 220,
    BracketLeft = 219,
    BracketRight = 221,
    Comma = 188,
    Grave = 192,
    Period = 190,
    Quote = 222,
    Semicolon = 186,
    Slash = 191,

    // modifiers
    Ctrl = 17,
    Shift = 16,
    Alt = 18,
    MetaLeft = 91,
    WinLeft = 91,
    MetaRight = 92,
    WinRight = 92,

    // F keys
    F1 = 112,
    F2 = 113,
    F3 = 114,
    F4 = 115,
    F5 = 116,
    F6 = 117,
    F7 = 118,
    F8 = 119,
    F9 = 120,
    F10 = 121,
    F11 = 122,
    F12 = 123,

    // random commands
    Delete = 46,
    End = 35,
    Escape = 27,
    Home = 36,
    Insert = 45,
    PageUp = 33,
    PageDown = 34,
    Pause = 19,
    PrintScreen = 44,
    Return = 13,

    // arrow keys
    LeftArrow = 37,
    UpArrow = 38,
    RightArrow = 39,
    DownArrow = 40,

    // locks
    CapsLock = 9,
    NumLock = 144,
    ScrollLock = 145,

    // numpad
    NumPad0 = 96,
    NumPad1 = 97,
    NumPad2 = 98,
    NumPad3 = 99,
    NumPad4 = 100,
    NumPad5 = 101,
    NumPad6 = 102,
    NumPad7 = 103,
    NumPad8 = 104,
    NumPad9 = 105,
    NumPadAdd = 117,
    NumPadDecimal = 110,
    NumPadDivide = 111,
    NumPadEnter = 113,
    NumPadMultiply = 106,
    NumPadSubtract = 109
}

export enum NgxKeyModifier {
    Alt,
    CtrlCmd,
    Shift
}

export class NgxKeyboardEvent {
    code: NgxKeyCode;
    modifiers: NgxKeyModifier[];
    name: string;
}

@Injectable({ providedIn: 'root' })
export class NgxKeyboardEventsService {
    public onKeyPressed: EventEmitter<NgxKeyboardEvent> = new EventEmitter<NgxKeyboardEvent>();

    constructor() {
        // can't use HostListener in a service :/
        window.addEventListener('keyup', (event) => {
            this.onKeyPressed.emit(this.resolveKeyboardEvent(event));
        });
    }

    resolveKeyboardEvent(keyEvent) {
        const modifiers: NgxKeyModifier[] = [];

        if (keyEvent.altKey) { modifiers.push(NgxKeyModifier.Alt); }
        if (keyEvent.ctrlKey) { modifiers.push(NgxKeyModifier.CtrlCmd); }
        if (keyEvent.shiftKey) { modifiers.push(NgxKeyModifier.Shift); }

        return {
            code: <NgxKeyCode>keyEvent.keyCode,
            modifiers,
            name: keyEvent.code
        };
    }
}
