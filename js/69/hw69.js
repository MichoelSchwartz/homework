(function () {
    'use strict';

    let textNum = 1;
    const theButton = document.querySelector('#theButton');

    const createButton = function () {
        const myNewButton = document.createElement('button');
        document.body.appendChild(myNewButton);
        myNewButton.innerText = ++textNum;
        myNewButton.addEventListener('click', createButton);
    };

    theButton.addEventListener('click', createButton);
}());
