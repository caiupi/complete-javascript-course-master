'use strict';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('h1').textContent);
//console.log(document.querySelector('body').textContent);
//console.log(document.querySelector(''));

document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = '30';
document.querySelector('.score').textContent = '40';
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
