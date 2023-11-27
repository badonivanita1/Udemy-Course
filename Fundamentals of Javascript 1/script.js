
// CHALLENGE 1 And 2
/*let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark/(heightMark ** 2);
let BMIJohn = massJohn/(heightJohn ** 2);

console.log(BMIMark);
console.log(BMIJohn);

console.log(BMIMark > BMIJohn);


if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`)
}*/

// Challenge 3
/*let scoreDolphins =  (96 + 108 + 89)/3;
console.log(scoreDolphins);

let scoreKoalas = (88 + 91 + 110)/3;
console.log(scoreKoalas);

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
}else if(scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy");
} else if(scoreDolphins == scoreKoalas){
    console,log("Both win the trophy");
}*/

// Challenge in vid 26 convert switch statement to if else statement
/*const day = prompt("Enter the day (all characters should be in small letters)");

if (day === 'monday'){
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if(day === 'tuesday'){
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day == 'thursday'){
    console.log('Write code examples');
} else if (day === 'friday'){
    console.log('Record Videos');
} else if (day ==='saturday' || day == 'sunday'){
    console.log("Enjoy the weekend")
} else{
    console.log('Not a valid day!')
}*/


// Challenge 4
const bill = 275;

let tip = (bill >= 50 && bill <= 300) ? (15/100) *bill : (20/100) *bill; 
// (bill >= 50 && bill <= 300) ? console.log(`The bill was ${bill}, the tip was ${tip = (15/100)*bill}, and the total was ${bill + tip}`) : 
//console.log(`The bill was ${bill}, the tip was ${tip = (20/100)*bill}, and the total was ${bill + tip}`);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill+tip}`);
                                    


