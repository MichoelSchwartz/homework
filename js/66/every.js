'use strict';
function every(anArray, callback) {
    for (let i = 0; i < anArray.length; i++) {
        if (callback(anArray[i])) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

function isItUppercase(letter) {
    if (letter === letter.toUpperCase()) {
        return true;
    }
    return false;
}

function isItLowercase(letter) {
    if (letter !== letter.toUpperCase()) {
        return true;
    }
    return false;
}

const letters = ['a', 'b', 'c'];
const letters2 = ['a', 'B', 'c'];
console.log(every(letters, isItUppercase));
console.log(every(letters, isItLowercase));
console.log(every(letters2, isItLowercase));