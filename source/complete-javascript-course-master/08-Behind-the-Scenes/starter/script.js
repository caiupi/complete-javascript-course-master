//'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const outpunt = `You are ${age} burn here ${birthYear}`;
    console.log(outpunt);

    if (1981 <= birthYear <= 1996) {
      var str = ` You are a milleniar ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    console.log(add(1, 2));
    console.log(str);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
console.log(calcAge(1991));
