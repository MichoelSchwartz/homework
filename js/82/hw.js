(function () {
    'use strict';
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now going at speed ${speed}`);
    };
    Vehicle.prototype.print = function () {
        console.log(`the vehicle is ${this.color} color and is going ${this.speed} mph`);
    };
    function Plane(color) {
        this.color = color;
    }
    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now flying at speed ${this.speed}`);
    };
    const ferrari = new Vehicle('red');
    const F35 = new Plane('gray');
    ferrari.go(150);
    F35.go(1000);
    ferrari.print();
    F35.print();

    class Vehicle2 {
        constructor(color) {
            this.color = color;
        }
        go(speed) {
            this.speed = speed;
            console.log(`now going at speed ${speed}`);
        }
        print() {
            console.log(`the vehicle is ${this.color} color and is going ${this.speed} mph`);
        }
    }
    const porsche = new Vehicle2('green');
    porsche.go(130);
    porsche.print();
}());