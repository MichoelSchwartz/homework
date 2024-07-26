'use strict';

function CtoF(x) {
    return (x / 5) * 9 + 32;
}
function FtoC(x) {
    return ((x - 32) * 5) / 9;
}

console.log((CtoF(67)));
console.log((FtoC(67)));
console.log(CtoF(100));
console.log(FtoC(100));

let x = prompt('enter a temperature to convert from F to C');
alert(`the celcius value for that temp is ${FtoC(x)}`);

