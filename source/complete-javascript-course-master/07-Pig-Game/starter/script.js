'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

score0El.textContent = 0;
score1El.textContent = 0;
console.log(score0El.textContent);
console.log(score1El);
console.log(diceEl);
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    //generate random number
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    //display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //check rolled 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      switchplayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //Add current score than change player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] > 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    switchplayer();
  }
});

const removeWinner = function () {
  for (let index = 0; index < scores.length; index++) {
    document
      .querySelector(`.player--${index}`)
      .classList.remove('player--winner');
  }
};
btnNew.addEventListener('click', function () {
  scores[0] = 0;
  scores[1] = 0;
  current0El.textContent = 0;
  current0El.textContent = 0;
  activePlayer = 0;
  removeWinner();
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  playing = true;
});

const switchplayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
