'use strict';
for (let i = 0; i < 10; i++) {
    window.app.increment();
}
const testCounter1 = window.app.createCounter();
const testCounter2 = window.app.createCounter();
for (let i = 0; i < 5; i++) {
    testCounter1.increment();
}
for (let i = 0; i < 15; i++) {
    testCounter2.increment();
}
window.app.getCount();
testCounter1.getCount();
testCounter2.getCount();

// SL - nice!
// SL - grade - 100
