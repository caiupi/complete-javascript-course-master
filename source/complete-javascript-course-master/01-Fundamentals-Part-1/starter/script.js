/*
let js = 'Amazing';
console.log(45 + 54 + 3 + 45 + 53 + -345);

console.log('jonas');
console.log("jonas");
let firstName = "Matilde";
console.log(firstName); //camel case
let person = "Roni";
let PI = 3.1415;
console.log(typeof true);
let javascript = 'FUN';
javascript = 'Yes';
console.log(typeof javascript);
javascript = true;
console.log(typeof javascript);
//Undifane
let year;
console.log(year);
console.log(typeof year);
year = 1234;
console.log(typeof year);
console.log(typeof null);
*/
/* Data type
let age = 36;
age = 41;
const birth = 1991;
var job = 'programmer';
job = "developer";
noVar = "test";
console.log(noVar);
console.log(typeof noVar);
*/
/* operators
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(ageJonas, ageSara);
const firstName = "jonas";
const secondName = "Smith"
console.log(firstName + " " + secondName);
let x = 10 + 5;
console.log(x);
console.log(ageJonas > ageSara);
const bigger = ageJonas > ageSara;
*/
/* template literal
const firstName = "Johnas";
const job = "Teacher";
const birth = 1991;
const year = "2021";
const jonas = "i'm " + firstName + ", a " + (year - birth) + ' years old ' + job + '!';
console.log(jonas);
const jonasNew = `i'm ${firstName}, a ${year - birth} year old ${job}`;
console.log(jonasNew);
console.log('String with multiple lines\n\
yeas is multiple\n\
sdasd');
console.log(`String with multipe line
s`);
*/
/*
const age = 19;
const isOldEnought = age >= 18;
if (isOldEnought)
    console.log("yes ");
else
    console.log("no");
const message = `Iam a javascript programmer, and my age is ${age}. `
console.log(message);
*//*
//Type conversion and coesion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(typeof NaN);
console.log(String(23), 23);
//type coercion
console.log("i am " + 23 + " years old");
console.log("i am " + String(23) + " years old");
console.log("i am " + 23 + " years old");
console.log('23' - '10' - 3); //minus
console.log('23' - '10' + 3); //minus
console.log('12' / '4'); */
//Truthy and falsy values
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('ASD'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(""));
const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("you should work");
}
let height;
if (height) {
    console.log("Height is define " + height);
} else {
    console.log("Height is undefine " + height);
}
if (height === undefined)
    console.log("undefined")
*/
//Logical operators
const hasDriverLicense = false
const hasGoodVisom = true
console.log(hasDriverLicense && hasGoodVisom)
console.log(hasDriverLicense && hasGoodVisom)
const shouldDrive = hasDriverLicense && hasGoodVisom
if (shouldDrive)
    console.log("Yes can drive")
else
    console.log("Can' drive")
