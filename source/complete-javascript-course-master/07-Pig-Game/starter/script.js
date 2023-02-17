'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
console.log(score0El.textContent);
console.log(score1El);
console.log(diceEl);
diceEl.classList.add('hidden');
