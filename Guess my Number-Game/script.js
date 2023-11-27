'use strict';

// document.querySelector('.message').textContent = "Correct Number!";
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value=13;

// Handling Click Event

let secretNumber = Math.trunc(Math.random() * 20 +1);
console.log(secretNumber);



// defining the score value
let score = 20;



let highscore = 0;
 

document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess').value;
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent = "Not a valid Number"
       
    } else if(guess == secretNumber){
        document.querySelector('.message').textContent = "Correct Number";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;


        if(score > highscore){
            highscore = score;
            console.log(highscore);
            document.querySelector('.highscore').textContent = highscore;
        } 
    }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "Too High"
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = "You lost the game"
            document.querySelector('.score').textContent = 0;
        }
    }else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "Too Low"
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = "You lost the game"
            document.querySelector('.score').textContent = 0;
        }
    }else{
        document.querySelector('.message').textContent = "Start guessing....."
    }
})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20 +1);
    console.log(secretNumber)
    document.querySelector('.guess').value =""
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = " ?";
    document.querySelector('.message').textContent = "Start guessing....."
    document.querySelector('.score').textContent = 20;

})