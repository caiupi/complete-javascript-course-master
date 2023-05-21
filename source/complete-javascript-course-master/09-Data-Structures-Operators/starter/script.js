'use strict';

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're 
gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
  For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array 
  ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array 
('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd 
(called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names 
(NOT an array) and prints each of them to the console, along with the number of
 goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
const players2 = game.players[1];
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
const team1 = { gk: gk, fieldPlayers: fieldPlayers };
console.log(team1);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//const [odds.team1, odds.draw, odds.team2] = game.odds;
*/

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 2, time, adress }) {
    console.log(starterIndex);

    console.log(this.categories[1]);
    console.log(`order receved ${this.mainMenu[mainIndex]}  w`);
  },
  orderPasta(ing1, ing2, ing3) {
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
console.log('--------OR');
console.log(3 || 'Jonas');
console.log(null || NaN);
console.log('------------AND');
console.log(false && 'Jonas');
restaurant.numGuest = 0;
const guestCorrect = restaurant.numbersGuest ?? 10;
console.log(guestCorrect);
console.log('------------');
const rest1 = {
  name: 'Capri',
  numGuest: 0,
};
const rest2 = {
  name: 'Capri',
  oner: 'Giovanni Rossi',
};
//rest2.numGuest = rest1.numGuest || 10;

rest1.numGuest ??= 10;
rest2.numGuest ||= 10;
console.log(rest1.numGuest);
console.log(rest2.numGuest);
console.log('+++++++');
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for (const menuItem of menu) {
  console.log(menuItem);
}
for (const [i, elem] of menu.entries()) {
  console.log(`${i}: ${elem}`);
}
if (restaurant.openingHours && restaurant.openingHours.man) {
  console.log(restaurant.openingHours);
}

console.log(restaurant?.openingHours?.mon?.open);
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  //console.log(day);
  if (restaurant.openingHours?.[day]?.open)
    console.log(
      `${day} hour ${restaurant.openingHours?.[day].open} the restorant is open`
    );
}
//Methods too optional chaining
console.log(restaurant.order?.(0, 1) ?? 'Method dosnt exist');
console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method dosnt exist');
//Arrays
const users = [
  {
    name: 'Jonas',
    email: 'jonas@yahoo.it,',
  },
];
console.log(users[0]?.name ?? 'user name empty');
const propreties = Object.keys(openingHours);
console.log(propreties);
let openStr = `we are open on ${propreties.length} days `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day} `;
}
console.log(openStr);
const values = Object.values(openingHours);
console.log(values);
const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close ${close}`);
}
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console,
 along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). HINT: Note how the odds and the game objects have the same property
 names 😉

BONUS: Create an object called 'scorers' which contains the names of the players 
who scored as properties, and the number of goals as the value. In this game, it
 will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
console.log('------Challanger');

for (const [index, player] of Object.entries(game.scored)) {
  console.log(`Goal ${index} was make from ${player}`);
}
const scores = function (data) {
  for (const [index, playerName] of Object.entries(data)) {
    console.log(index, playerName);
  }
};
console.log(scores(game.scored));
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
