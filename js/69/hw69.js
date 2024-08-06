(function () {
    'use strict';

    let textNum = 1;
    let theButton = document.querySelector('#theButton');

    const createButton = function () {
        theButton.removeEventListener('click', createButton);
        const myNewButton = document.createElement('button');
        document.body.appendChild(myNewButton);
        myNewButton.innerText = ++textNum;
        myNewButton.addEventListener('click', createButton);
        theButton = myNewButton;
    };

    theButton.addEventListener('click', createButton);
}());
