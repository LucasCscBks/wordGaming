import { firstLine1,firstLine2,firstLine3,firstLine4,firstLine5,checkFirstLine } from "./modules/line1.js";
import { checkSecondLine,secondLine1,secondLine2,secondLine3,secondLine4,secondLine5 } from "./modules/line2.js";
import { thirdLine1,thirdLine2,thirdLine3,thirdLine4,thirdLine5,checkThirdLine } from "./modules/line3.js";
import { fourLine1,fourLine2,fourLine3,fourLine4,fourLine5,checkFourLine } from "./modules/line4.js";
import { fiveLine1,fiveLine2,fiveLine3,fiveLine4,fiveLine5,checkFiveLine } from "./modules/line5.js";

export const word = 'comer'
export const check = 'abcdefghijklmnopqrstuvwxyz'
export const section = document.querySelector('#section');

// LINE 1 //
export const tryButton = document.querySelector('#try')
const a1 = document.querySelector('#a1');
const a2 = document.querySelector('#a2');
const a3 = document.querySelector('#a3');
const a4 = document.querySelector('#a4');
const a5 = document.querySelector('#a5');

// Eventos para checar a letra e passar para o proximo input //
a1.addEventListener('keyup', firstLine1)
a2.addEventListener('keyup', firstLine2) 
a3.addEventListener('keyup', firstLine3)
a4.addEventListener('keyup', firstLine4)
a5.addEventListener('keyup', firstLine5)
// Eventos para checar a letra e passar para o proximo input //
tryButton.addEventListener('click', checkFirstLine)

// LINE 1 //

// LINE 2 //
export const testButton = document.querySelector('#test')
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const b4 = document.querySelector('#b4');
const b5 = document.querySelector('#b5');

b1.addEventListener('keyup', secondLine1)
b2.addEventListener('keyup', secondLine2) 
b3.addEventListener('keyup', secondLine3)
b4.addEventListener('keyup', secondLine4)
b5.addEventListener('keyup', secondLine5)

testButton.addEventListener('click', checkSecondLine);
// LINE 2 //

// LINE 3 //
export const button3 = document.querySelector('#button3')
const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
const c3 = document.querySelector('#c3');
const c4 = document.querySelector('#c4');
const c5 = document.querySelector('#c5');

c1.addEventListener('keyup', thirdLine1)
c2.addEventListener('keyup', thirdLine2) 
c3.addEventListener('keyup', thirdLine3)
c4.addEventListener('keyup', thirdLine4)
c5.addEventListener('keyup', thirdLine5)

button3.addEventListener('click', checkThirdLine);
// LINE 3 //

// LINE 4 //
export const button4 = document.querySelector('#button4')
const d1 = document.querySelector('#d1');
const d2 = document.querySelector('#d2');
const d3 = document.querySelector('#d3');
const d4 = document.querySelector('#d4');
const d5 = document.querySelector('#d5');

d1.addEventListener('keyup', fourLine1)
d2.addEventListener('keyup', fourLine2) 
d3.addEventListener('keyup', fourLine3)
d4.addEventListener('keyup', fourLine4)
d5.addEventListener('keyup', fourLine5)

button4.addEventListener('click', checkFourLine);
// LINE 4 //

// LINE 5 //
export const button5 = document.querySelector('#button5')
const e1 = document.querySelector('#e1');
const e2 = document.querySelector('#e2');
const e3 = document.querySelector('#e3');
const e4 = document.querySelector('#e4');
const e5 = document.querySelector('#e5');

e1.addEventListener('keyup', fiveLine1)
e2.addEventListener('keyup', fiveLine2) 
e3.addEventListener('keyup', fiveLine3)
e4.addEventListener('keyup', fiveLine4)
e5.addEventListener('keyup', fiveLine5)

button5.addEventListener('click', checkFiveLine);
// LINE 5 //