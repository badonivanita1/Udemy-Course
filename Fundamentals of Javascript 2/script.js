// strict mode is a special mode in javascript
'use strict'; // we have activated the strict mode in javascript code

// CHALLENGE !
// const calcAverage = (a, b, c) => (a + b + c)/3;
// console.log(calcAverage(3, 4, 5));

// var scoreDolphins = calcAverage(44, 23, 71);
// var scoreKoalas = calcAverage(65, 54, 49);

// const  checkWinner = (avgDolphins, avgKoalas) =>{
//     if(avgDolphins > 2 * avgKoalas){
//         console.log(`Dolphins wins the trophy (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas > 2* avgDolphins){
//         console.log(`Koalas wins the trophy (${avgDolphins} vs ${avgKoalas})`)
//     } else{
//         console.log(`No one wins..`)
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);


// CHALLENGE 2

// const calcTip = bill => (bill >= 50 && bill <= 300) ? (15/100) *bill : (20/100) *bill;
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);

// const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]
// console.log(totals);

//Challenge
//Jonas has three friends and his best friend is called Michael

// let jonas={
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037-1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"]
// };

// console.log(jonas);

// jonas.location= "Portugal";
// jonas['twitter'] = "@jonas_schmedtmann";

// console.log(jonas);

// console.log(`${jonas['firstName']} has ${jonas['friends'].length} friends, and his best friend is called ${jonas.friends[0]}`)

// CHALLENGE #3
// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
    

//     calcBMI: function(){
//         this.bmi = this.mass/(this.height * this.height)
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,

//     calcBMI: function(){
//         this.bmi = this.mass/(this.height * this.height)
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// console.log(mark.bmi);
// john.calcBMI();
// console.log(john.bmi)


// if(mark.bmi > john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// } else{
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);

// }
// DICE ROLLING LOGIC
// let dice = Math.trunc(Math.random() * 6) +1;


// while (dice !== 6) {
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) +1;
//     if(dice == 6) console.log(`rolling of dice stop`);
// }

// CHALLENGE 4

// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  /* Write your code below. Good luck! 🙂 */
  
  const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
  
  const tips =[];
  const totals =[];

  for(let i=0; i<bills.length; i++){
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip+bills[i])
  }

  console.log(tips);
  console.log(totals);



//   BONUS:

// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.



  const calcAverage = function(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum += arr[i];
        console.log(sum);

    } return sum/arr.length;
  }
  
  console.log(calcAverage(totals));