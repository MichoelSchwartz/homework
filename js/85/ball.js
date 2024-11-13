(function () {
    'use strict';

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');
    const theButton = document.querySelector('#theButton');
    const colorInput = document.querySelector('#colorInput');
    const radiusSize = document.querySelector('#radiusSize');
    const balls = [];

    function resizeCanvas() {
        theCanvas.width = window.innerWidth;
        theCanvas.height = window.innerHeight;
    }
    function addBall() {
        balls.push(new Ball(colorInput.value, parseInt(radiusSize.value)));
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    theButton.addEventListener('click', addBall);

    class Ball {
        constructor(color, radius) {
            this.color = color;
            this.radius = radius;
            this.x = radius;
            this.y = radius;
            this.dx = 1;
            this.dy = 2.5;
        }

        draw() {
            context.beginPath();
            context.fillStyle = this.color;
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            context.fill();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x >= theCanvas.width - this.radius || this.x <= this.radius) {
                this.dx = -this.dx;
            }

            if (this.y >= theCanvas.height - this.radius || this.y <= this.radius) {
                this.dy = -this.dy;
            }
            this.draw();
        }
    }

    setInterval(() => {
        context.clearRect(0, 0, theCanvas.width, theCanvas.height);
        balls.forEach(ball => ball.move());
    }, 9);
}());