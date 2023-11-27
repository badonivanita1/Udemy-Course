'use strict';
// DEclaring variables
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");


const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

let playing, scores, currentScore, activePlayer;

const init = function () {
// STARTING CONDITIONS

playing = true;
scores = [0, 0]
currentScore = 0;
activePlayer = 0;

score0El.textContent=0;
score1El.textContent=0;
current0El.textContent = 0;
current1El.textContent = 0;
diceEl.classList.add("hidden");

player0El.classList.remove("player--winner");
player1El.classList.remove("player--winner");
player1El.classList.remove("player--active");
player0El.classList.add("player--active");
}
init();

// Switching Player Function
const switchPlayer = function () {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        console.log(player0El);
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
} 

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
    if(playing){
        // Generating random number between 1 to 6
    const dice = Math.trunc(Math.random() * 6) +1;
    //console.log(dice);

    //displaying dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`

    // checking if the dice has rolled 1
    
    
    console.log(currentScore)

    if(dice !== 1){
        // add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;//-------------- this will give us the current score of active player;
        //current0El.textContent = currentScore; ----- this will give us the current score of player 1
    } else {
        // switch to active player
        switchPlayer();
    }
    }
})

//Holding Dice Functionality
btnHold.addEventListener('click', function () {
    if (playing) {
        //Add currentScore to the score of the active player score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //Check if score is 100 
    if(scores[activePlayer] >= 100){
        //if yes then Finish the Game
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        diceEl.classList.add("hidden");
    } else{
        // If not then switch player
    switchPlayer();
    }
    }
})

// Resetting the game
btnNew.addEventListener('click', init)