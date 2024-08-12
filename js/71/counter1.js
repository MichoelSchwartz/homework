window.app = function (theModule) {
    'use strict';
    let count = 0;
    theModule.increment = () => count++;
    theModule.getCount = () => console.log(count);
    return theModule;
}(window.app || {});
window.app.increment();
window.app.getCount();
