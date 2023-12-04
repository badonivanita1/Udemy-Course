"use strict";

// function calcAge (birthYear){
//     const age = 2037 - birthYear;

//     function printAge() {
//         const output = `You are ${age}, born in ${birthYear}`;
//         console.log(output); 
//     }
//     printAge()
    
//     return age;
// }


// const firstName = "Jonas";
// calcAge(1991);


// SECTION 8- 103
// Below is an array
// const restaurant ={
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     // new function
//     order: function (starterIndex, mainIndex){
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//     }
// };
// Array Destructuring is ES6 Feature
// let [main, secondary, tertiary, quaternary] = restaurant.categories
// console.log(main, secondary, tertiary, quaternary);

// One way to switch variables - with temporary variables
// const temp = main;
// main = quaternary;
// quaternary = temp;
// console.log(main, quaternary);

// Another way Switching variables - without temporary variables
// [main, secondary, tertiary, quaternary] = [quaternary, tertiary, secondary, main]
// console.log(main, secondary, tertiary, quaternary);

// Receive  two return values  from one function
// let [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);

// NESTED ARRAY Destructuing
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j)
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r)
// Section 8 - 104
const restaurant ={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // new object
    openingHours: {
        thu:{
            open: 12,
            close: 22,
        },
        fri:{
            open: 11,
            close: 23,
        },
        sat:{
            open: 0,
            close: 24,
        }

    },
    // new function
    order: function (starterIndex=2, mainIndex=2){
        console.log(this.starterMenu[starterIndex]);
        console.log(this.mainMenu[mainIndex]);
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
        
    },
    // adding another function

    orderDelivery: function(starterIndex =1, mainIndex=0, time='20:00', address= "Via del Sole, 21"){
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and
         ${this.mainMenu[mainIndex]} 
        will be delivered to ${address} at ${time}`
        );
    }
};
restaurant.order({
    starterIndex: 2,
    mainIndex: 2
});
// Calling a function and giving the options
// restaurant.orderDelivery({
//     time: "22:30",
//     address: "Via del Sole, 21",
//     mainIndex: 2,
//     starterIndex: 2
// })

restaurant.orderDelivery({
    starterIndex: 1,
    address: "Via del Sole, 21"
});



//  restaurant.orderDelivery({
//      time: '22:30',
//      address: 'Via del Sole, 21',
//      mainIndex: 2,
//      starterIndex: 2,
//  });

 const { name, openingHours, categories} = restaurant;
 console.log( name, openingHours, categories);

 const {name: restaurantName, openingHours: hours, categories: tags } = restaurant;
 console.log(restaurantName, hours, tags);

 // Setting default values
//  const {menu = [], starterMenu: starters = []} = restaurant;
//  console.log(menu, starters)

 // Mutating variables 
 let a = 111;
 let b = 999;
 const obj = {a: 23, b: 7, c: 14};
 // Destructuring Assignments
 ({a, b} = obj);
 console.log(a, b);

 //Destructuring the nested object
 const {fri: {open: o, close: c}} = openingHours;
 console.log(o, c);

//  REST PATTERN
 const m = [1, 2, ...[3, 4]]; //spread operator, left side
 const [p, q, ...others] = [1, 2, 3, 4, 5, 6];
 console.log(p, q, others);


// SPREAD OPERATOR
const arr = [7, 8, 9];
console.log(arr);
// // We want to add some more numbers into an array mentioned above
const newArr = [1, 2, ...arr];          //...arr is known as spread operator
console.log(newArr)
// //Similarly add Gnocci to the main menu in above example

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

   const mainMenuCopy = [...restaurant.mainMenu];

   const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
   console.log(menu);

// //Spread operators are applicable to all iterables. 
// //Iterables: arrays, strings, maps, sets.Not objects.
   const str = 'Jonas';
   const letters = [...str, ' ', 'S.'];
   console.log(...str);
   console.log(letters);

//Notes: Spread operator is similar to destructuring as it also helps out with getting elements out of an array.  The big
//difference is it takes all the elements from an array and it also 

