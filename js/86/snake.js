(function () {
  'use strict';

  const SNAKE_SIZE = 64;

  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');

  function resizeCanvas() {
    theCanvas.width = window.innerWidth - (window.innerWidth % SNAKE_SIZE);
    theCanvas.height = window.innerHeight - (window.innerHeight % SNAKE_SIZE);
  }

  window.addEventListener('resize', resizeCanvas);

  resizeCanvas();

  let direction = 'ArrowRight';
  let theInterval;

  let x = -SNAKE_SIZE;
  let y = 0;
  const apples = [];
  for (let i = 0; i < 10; i++) {
    apples.push({ x: getRandomNumber(0, theCanvas.width), y: getRandomNumber(0, theCanvas.height) });
  }
  //let appleX = getRandomNumber(0, theCanvas.width);
  //let appleY = getRandomNumber(0, theCanvas.height);
  const snakeHead = document.createElement('img');
  const apple = document.createElement('img');
  snakeHead.src = 'images/snakeHead.png';
  apple.src = 'images/apple.png';
  apple.onload = () => {
    theInterval = setInterval(() => {

      console.log(direction);
      context.clearRect(0, 0, theCanvas.width, theCanvas.height);
      apples.forEach(e => {
        context.drawImage(apple, e.x, e.y);
      });

      switch (direction) {
        case 'ArrowRight':
          x += SNAKE_SIZE;
          break;
        case 'ArrowLeft':
          x -= SNAKE_SIZE;
          break;
        case 'ArrowUp':
          y -= SNAKE_SIZE;
          break;
        case 'ArrowDown':
          y += SNAKE_SIZE;
          break;
      }
      context.drawImage(snakeHead, x, y);
      checkForOutOfBounds();
    }, 500);
  };


  document.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'ArrowDown':
        direction = e.key;
    }
  });

  function checkForOutOfBounds() {
    if (x < 0 - SNAKE_SIZE || x > theCanvas.width || y < 0 || y > theCanvas.height) {
      clearInterval(theInterval);
      theInterval = null;
      context.fillText('You went out of bounds. Game Over', theCanvas.width / 2, theCanvas.height / 2);
    }
  }


  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  }

}());

