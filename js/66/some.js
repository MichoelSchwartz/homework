'use strict';
function some(anArray, callback){
    for (let i = 0; i < anArray.length; i++) {
        if(callback(anArray[i])){
            return true;
        }  
        else{
            continue;
        }
    }
    return false;
}

function isItUppercase(letter) {
    if (letter === letter.toUpperCase()){
        return true;
    } 
    return false;       
}

function isItLowercase(letter) {
    if (letter !== letter.toUpperCase()){
        return true;
    } 
    return false;       
}

const letters = ['a', 'b', 'c'];
const letters2 = ['a', 'B', 'c'];
console.log(some(letters, isItUppercase));
console.log(some(letters, isItLowercase));
console.log(some(letters2, isItLowercase));