'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 2, time, adress }) {
    console.log(starterIndex);

    console.log(this.categories[1]);
    console.log(`order receved ${this.mainMenu[mainIndex]}  w`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is the pasta ingrendients ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...ontherIngrendients) {
    console.log(mainIngredient, ontherIngrendients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  adress: 'Via del sole 21',
  mainIndex: 1,
  starterIndex: 2,
});

restaurant.orderDelivery({
  time: '22:30',
  adress: 'Via del sole 21',
});
console.log('---------');
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);
const newMenu = [...restaurant.mainMenu, 'Gnochi'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.mainMenu, ...newMenu];
console.log(menu);
//interable are Arrays Strings maps, sets but not objects
const str = 'Jonas';
const letters = [...str];
console.log(letters);
//const ingrendients = [
//prompt("Let's make pasta! Ingrendiets 1"),
//prompt("Let's make pasta! Ingrendiets 2"),
//prompt("Let's make pasta! Ingrendiets 2"),
//];
//console.log(ingrendients);
//restaurant.orderPasta(...ingrendients);

const newRestorant = { ...restaurant, founder: 'Giuseppe' };
console.log(newRestorant);
const restorantCopy = { ...restaurant };
restorantCopy.name = 'Ristorante Roma';
console.log(restorantCopy);

const arr2 = [1, 2, ...[3, 4, 5]];
const [a, b, ...onthers] = [1, 2, 3, 4, 5];
console.log(arr2);
console.log(a, b, onthers);

const [pizza, , risotto, ...ontherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, ontherFood);
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);
const add = function (...numbers) {
  console.log(...numbers);
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  console.log(`The sum is ${sum}`);
};

add(2, 3);
add(4, 5, 6);
const x = [23, 4, 7];
add(...x);
newRestorant.orderPizza('Tomato', 'Spinac', 'Mozarella');
restaurant.orderPizza('mushrums');
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName);
console.log(hours);
console.log(tags);
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
const {
  fri: { open: o, close: c },
} = openingHours;
//console.log(fri);
console.log(o, c);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);

const [first, , second] = restaurant.categories;
console.log(first, second);
let [main, secondary] = restaurant.categories;
[main, secondary] = [secondary, main];
console.log(secondary, main);
console.log(restaurant.order(2, 0));
const [starter, demain] = restaurant.order(2, 0);
console.log(starter, demain);
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
