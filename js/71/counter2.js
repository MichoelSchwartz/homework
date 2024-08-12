window.app = function (theModule) {
    'use strict';
    let countersCreated = 0;

    theModule.createCounter = function () {
        countersCreated++;
        let count = 0;
        function increment() {
            return count++;
        }
        function getCount() {
            console.log(count);
        }
        return {
            increment,
            getCount
        };
    };
    theModule.getCountersCreated = function () {
        console.log(countersCreated);
    };
    return theModule;
}(window.app || {});

const counter1 = window.app.createCounter();
const counter2 = window.app.createCounter();

counter1.increment();
counter1.increment();

counter2.increment();

counter1.getCount();
counter2.getCount();

window.app.getCountersCreated();