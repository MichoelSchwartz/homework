window.app = function (theModule) {
    'use strict';
    let count = 0;
    theModule.increment = () => count++;
    // SL - getter should get, let caller decide if they want to log...
    theModule.getCount = () => console.log(count);
    return theModule;
}(window.app || {});

// SL - doing this here messes with our final counts... I want to see 10, not 11...
//window.app.increment();
//window.app.getCount();

// SL - nice!
