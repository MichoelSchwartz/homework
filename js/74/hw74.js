window.pcs = function (selector) {
    'use strict';

    function setCss(element, property, value) {
        element.style[property] = value;
    }

    function getCss(element, property) {
        return getComputedStyle(element)[property];
    }

    function on(element, event, callback) {
        element.addEventListener(event, callback);
    }

    const element = document.querySelector(selector);

    return {
        css: function (property, value) {
            if (arguments.length === 2) {
                setCss(element, property, value);
                return this;
            } else {
                return getCss(element, property, value);
            }
        },
        hide: function () {
            setCss(element, 'display', 'none');
            return this;
        },
        show: function () {
            setCss(element, 'display', 'block');
            return this;
        },
        on: function (event, callback) {
            on(element, event, callback);
            return this;
        },
        click: function (callback) {
            on(element, 'click', callback);
            return this;
        },
        changeColor: function (intervalTime = 2000) {
            function colorIt() {
                setCss(element, 'color', `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`);
            }
            setInterval(colorIt, intervalTime);
        }
    };

    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }
};
window.pcs('h1').changeColor();
