'use strict';
function onlyIf(anArray, callback, action) {
    for (let i = 0; i < anArray.length; i++) {
        if (callback(anArray[i])) {
            action(anArray[i]);
        }
    }
}
function print2(text) {
    console.log(text);
}
function isItUppercase(letter) {
    if (letter === letter.toUpperCase()) {
        return true;
    }
    return false;
}
const letters3 = ['a', 'B', 'c', 'D'];
onlyIf(letters3, isItUppercase, print2);
