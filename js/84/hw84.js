(function () {
    'use strict';
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        toString() {
            return `first: ${this.firstName} last: ${this.lastName} age: ${this.age}`;
        }
    }
    class Student extends Person {
        constructor(grade) {
            super();
            this.grade = grade;
        }
        toString() {
            return `${super.toString()} grade: ${this.grade}`;
        }
    }
    const s1 = new Student('A');
    s1.firstName = 'donald';
    s1.lastName = 'trump';
    s1.age = 78;
    console.log(s1.toString());
    //////////////////////////////////////
    const canvas = document.querySelector('#theCanvas');
    const context = canvas.getContext('2d');

    context.strokeRect(25, 25, 50, 50);

    context.fillStyle = 'red';
    context.fillRect(75, 75, 50, 50);
    context.strokeRect(74, 74, 52, 52);

    context.strokeRect(125, 125, 100, 50);

})();