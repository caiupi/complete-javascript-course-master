'use strict';

/*function calcAge(birthYear) {
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


console.log(me);
//console.log(job);
//console.log(year);
console.log(add(1, 2));
//console.log(addExpression(1, 2));
//console.log(addArrow(1, 2));

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

function add(a, b) {
  return a + b;
}
const addExpression = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;
////////////
if (!numProducts) {
  deleteTheShoppingCard();
}
var numProducts = 10;
function deleteTheShoppingCard() {
  console.log('All product deleted');
}
var x = 1;
let y = 2;
const z = 3;

console.log(this);
const calcAge = function (birthYear) {
  const age = 2037 - birthYear;
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  const age = 2037 - birthYear;
  console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
  },
};
console.log(jonas);

const matila = {
  year: 2017,
};

matila.calcAge = jonas.calcAge;
matila.calcAge();
const f = jonas.calcAge;
//f.calcAge();
*/
//var firstName = 'Matila';
/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    //const self = this;
    console.log(this);
    //  const isMileniar = function () {
    //  console.log(self.year >= 1981 && self.year <= 1996);
    //};
    //const isMileniar () => {console.log(year >= 1981 && year <= 1996)};
    //isMileniar();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};
//console.log(jonas.greet());
jonas.greet();
jonas.calcAge();
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(1, 2);
addExpr(1, 2, 3, 4, 5, 6, 7);
var addArrow = (a, b) => {
  console.log(arguments);

  return a + b;
};
addArrow(1, 2);
*/
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log(me);
console.log(friend);
*/
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Daivis';
console.log(lastName);
console.log(oldLastName);
let person = {
  name: 'Roni',
  surname: 'Bidoni',
};
let person2 = {
  name: 'Roni',
  surname: 'Bidoni',
};
let ontherPerson = person;
person.name = 'Geno';
ontherPerson = person2;
console.log(person);
console.log(ontherPerson);
const personCopy = Object.assign({}, ontherPerson);
console.log(person);
console.log(ontherPerson);
console.log(personCopy);
console.log(personCopy);
