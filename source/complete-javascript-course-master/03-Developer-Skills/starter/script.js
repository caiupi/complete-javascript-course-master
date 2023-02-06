// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
if (x === 0) {
  console.log('');
}
const calcAge = birthYear => 2 - 1;
console.log(x);
*/
/*
const temperatuder1 = [3, -2, -60, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatuder2 = [30, -20, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTemp = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  let max = temps[0];
  for (let index = 1; index < temps.length; index++) {
    const element = temps[index];
    if (typeof element !== 'number') continue;
    if (element > max) max = element;
  }
  console.log(max);
  let min = temps[0];
  for (let index = 1; index < temps.length; index++) {
    const element = temps[index];
    if (typeof element !== 'number') continue;
    if (element < min) min = element;
  }
  console.log(min);
  console.log('The Amplitude is: ', Math.abs(max) - Math.abs(min));
};

calcTemp(temperatuder1, temperatuder2);

const measureKelvin = function () {
  const mesurmeent = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius')),
  };
  const kelvin = mesurmeent.value + 273;
  return kelvin;
};
console.log(measureKelvin());
*/
const result = function (arr) {
  let stringTostamp = '';
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const elementToStamp = '...' + element + 'C in ' + index + ' days';
    console.log(elementToStamp);

    stringTostamp += elementToStamp;
    console.log(stringTostamp);
  }
  return stringTostamp;
};
console.log(result([1, 2]));
