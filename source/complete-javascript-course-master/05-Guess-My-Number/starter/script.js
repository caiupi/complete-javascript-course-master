'use strict';
/*console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('h1').textContent);
//console.log(document.querySelector('body').textContent);
//console.log(document.querySelector(''));

document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = '30';
document.querySelector('.score').textCont = '40';
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/
let secretNumber = Math.trunc(Math.random() * 21);
console.log(secretNumber);

let score = 20;
let hightScore = 0;
//document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('No number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }
  } else {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('To higt')
        : displayMessage('To low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose the game');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
