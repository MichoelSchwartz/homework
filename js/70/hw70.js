(function () {
    'use strict';
    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    function changeColor() {
        document.body.style.color = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`;
        document.body.style.backgroundColor = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`;
    }

    let interval;
    const theButton = document.querySelector('#theButton');
    theButton.addEventListener('click', e => {
        e.stopPropagation();
        if (!interval) {
            interval = setInterval(changeColor, 1000);
            e.target.innerText = 'Stop the color changing';
        } else {
            clearInterval(interval);
            interval = null;
            e.target.innerText = 'Start the color changing';
        }
    });
})();