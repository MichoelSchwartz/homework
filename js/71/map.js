(function () {
    'use strict';
    function doubleIt(index) {
        return index * 2;
    }
    function myMap(ogArray, callback) {
        const newArray = [];
        ogArray.forEach(element => {
            newArray.push(callback(element));
        });
        return newArray;
    }
    const numsArray = [2, 4, 6, 8];
    console.log(numsArray, myMap(numsArray, doubleIt));
})();