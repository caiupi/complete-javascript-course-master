'use strict';
/**
let hasDriversLicense= false;
const PassTest= true;

if(PassTest){
    hasDriversLicense= true;
}
if(hasDriversLicense) console.log("I can drive");

------------------
console.log(calcAge1(123));

function calcAge1(birth){
    return  2037-birth;
}
const age1=calcAge1(1991);
const calcAge2= function (birth){
    return 2037-birth;
}
const age2= calcAge2(1992);
console.log(age1,age2);

//Arrow function
const calcAge3= birthYear => 2037 - birthYear;
const age3= calcAge3(1991);

console.log(calcAge3);
console.log(age3);

const yearsUntilRetairment=(birthYear, firstName)=>{
    const age= 2037-birthYear;
    const retairment= 65-age;
    return `${firstName} retairs in ${retairment} years` ;
}

console.log(yearsUntilRetairment(1991,'Bajron'));
console.log(yearsUntilRetairment(1998,'Bob'));

//function inside a nother function 
function cutFruitProcessor(fruit){
    return fruit*4;
}

function fruitProcessor(apples, oranges){
    const applePeaces=cutFruitProcessor(apples);
    const orangePeaces= cutFruitProcessor(oranges);
    const juis= `Juis with ${applePeaces} apples and ${orangePeaces} oranges.`;
    return juis;
}

console.log(fruitProcessor(2,3));

const yearsUntilRetairment=(birthYear, firstName)=>{
    const age= 2037-birthYear;
    const retairment= 65-age;
    return `${firstName} retairs in ${retairment} years` ;
}
console.log(yearsUntilRetairment(1234,'Bajron'));


const calcAvarege =(first, second, third )=> (first+second+third)/3;


function isDouble(first, second){
    if(first> second*2)
        return true;
    return false;
}

function calcWinner(a, b, c){
    if(isDouble(a,b)&& isDouble(a,c))
        return a;
    if(isDouble(b,c)&& isDouble(b,a))
        return b;
    if(isDouble(c,a)&& isDouble(c,b))
        return c;
}

console.log(calcAvarege(2,3,4));

//Arrays
const friend1 ='Michael';
const friend2 ='Steven';
const friend3 ='Peter';

const friends=['Michael','Steven','Peter' ]; //literal sintacs

console.log(friends); 
const years = new Array(123,124,125);
console.log(years[0], years.length, years[years.length-1]);
friends[2]='Bajron';
console.log(friends); 
const jonas=['Jonas','Smith', 123];
jonas[3]=friends;
console.log(jonas);

function calcAge1(birth){
    return  2037-birth;
}

console.log(years);

//Basic operations
const friends=['Michael','Steven','Peter' ]; 
const length=friends.push('Jain');
friends.unshift('John');
friends.pop();
for(let i =0; i<2; i++){
    friends.pop();
}
const indexSteven= friends.indexOf('Steven');
console.log(friends, friends.length, length, indexSteven);

if (! friends.includes('Steven')) {
    console.log(`Steven is non in ${friends.concat()}`);
}
*/
/*
const jonas={
    firstName: 'Jonas',
    secondName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher1',
    friends: ['Michael', 'Petter', 'Steven']
};
jonas.location='Portugal';
jonas['twiter']='@jonas';
console.log(jonas);
console.log(jonas.job);
console.log(jonas['secondName']);

let message=prompt('What do you wont to now about Jonas? Choose between firstName,'
+' secondName, age, job, friends ');
console.log(message);
console.log(jonas[message]);
if(jonas[message])
    console.log(jonas[message])
else
    console.log("Wrong reques!");

console.log(jonas)
const output= `${jonas.firstName} has ${jonas.friends.length}
 friends, and his best friend is called ${jonas.friends[0]} `;
console.log(output) ;
*/
/*
const jonas={
    firstName: 'Jonas',
    secondName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher1',
    friends: ['Michael', 'Petter', 'Steven'],
    hasDriverLicence: true,
    //calcAge: function(birthYear){
        //return 2037-birthYear;
    //}
    //calcAge: function(){
        //console.log(this);
        //return 2037 - jonas.birthYear;
    //}
   // calcAge: function(){
        //console.log(this);
     //   return 2037 - jonas.birthYear;
    //}
    calcAge: function(){
        this.age= 2037- this.birthYear;
        return this.age;
    },
    printJonasInfo: function(){
        let stringForDriver='test';
        if(this.hasDriverLicence){
            stringForDriver= 'a';
    }
            else{
            stringForDriver= 'not';
    }
        return (this.firstName+ ' is a '+this.age+'- year old '+
        this.job+', and he has '+stringForDriver+ ' driver \'s license' );
    }
};
//console.log(jonas.calcAge());
//console.log(jonas.age);
jonas.calcAge();
console.log(jonas.printJonasInfo());
*/
/*
function createPerson(FullNameData, massData, heightData){
    return {
        fullName: FullNameData,
        mass: massData,
        height: heightData,
        calcBMI(){
            this.bmi= this.mass*this.height;
            return this.mass*this.height;
        }
    }
}
const john= createPerson('John Smith', 60,180);
const mark= createPerson('Mark Miller', 70,190);
console.log(` ${john.calcBMI() > mark.calcBMI() ? john.fullName : mark.fullName} BMI is hight than 
${!(john.calcBMI() > mark.calcBMI() )? john.fullName : mark.fullName}`);
*/
/*
console.log('Lifting weight');
for (let index = 0; index < 10; index++) {
    console.log(`Lifting weight ${index+1}`);
}

const jonas=[
     'Jonas',
     'Schmedtmann',
     2037-1991,
     'teacher1',
     ['Michael', 'Petter', 'Steven']
];
for (let index = 0; index < jonas.length; index++) {
    let element= jonas[index];
    console.log(index,  typeof element[index]);
        console.log('Element length is '+element.length);
        for (let j = 0; j < element.length; j++) {
            console.log(element[j]);
            
        }
}
*/
/*const jonas=[
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher1',
    ['Michael', 'Petter', 'Steven']
];
for (let index = jonas.length-1; index >= 0; index--) {
    console.log(index, jonas[index], typeof jonas[index]);
    let element=jonas[index];
    if(typeof element === 'object'){
        console.log('ok');
        for (let j = 0; j < element.length; j++) {
            console.log('       ',element[j]);
            
        }
    }
}
*/
/*for (let index = 0; index < 10; index++) {
    console.log(index, "pLifting");
}
let i =0;
while(i<10){
    console.log(i,'While Lifting');
    i++;
}
let dice = Math.trunc( Math.random()*6)+1;
console.log(dice);
while(dice != 6){
    console.log('while',dice);
    dice = Math.trunc( Math.random()*6)+1;
}
do{
    dice = Math.trunc( Math.random()*6)+1;
    console.log('do while',dice);
    continue;
}while (dice != 1) 
*/
const bills=[123,432,235,54,456,765,4567,786,678];
const tips=[1,4,2,5,4,7,4,76,0];
let  total = new Array() ;
function calc(a,b){
    return a+b;
}
for (let index = 0; index < bills.length; index++) {
    console.log(index, bills[index]+tips[index]);
    //total.push( bills[index]-tips[index]);
    total.push( calc(bills[index], tips[index]));
}
console.log(total);