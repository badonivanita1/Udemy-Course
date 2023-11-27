//  GLOBAL VARIABLE DECLARATION

let playerArea = document.getElementById("player-area");
let player = playerArea.querySelectorAll(".player");

var rolldDice= document.getElementById("image-of-dice");

var currentScore = 0;
let totalscore = 0;
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let currentPlayer =1;

// CHANGE PLAYER FUNCTION
function changePlayer(){
  currentPlayer = currentPlayer == 1 ? 2 : 1;
  player1.classList.toggle("active");
  player2.classList.toggle("active");


  // if (currentPlayer == 1){
  //   currentPlayer = 2;
  //   player1.classList.remove("active");
  //   player2.classList.add("active");
  // } else{
  //   currentPlayer = 1;
  //   player2.classList.remove("active");
  //   player1.classList.add("active");
  // }
}



// ROLL DICE BUTTON 
    function rollDiceFunction(){
      rolldDice.style.display = "block";
      var randomNumber = Math.trunc(Math.random()*6 +1);   
      // Template Literals - assigning src to .image-of-dice-div
      rolldDice.src = `./Image/dice-${randomNumber}.png`;
      //console.log(randomNumber);   
        if(randomNumber !== 1){        
            currentScore += randomNumber;
            //console.log(currentScore);
        } else{
            
            changePlayer()
            currentScore = 0;
        }    
        document.querySelector('.active .current-score').innerHTML= currentScore;
    }
    
// Hold Button Function
    function hold(){
      
      let activePlayer = `player${currentPlayer}`;
      console.log(activePlayer)
      totalscore = parseInt(document.querySelector(`.${activePlayer} .score` ).innerHTML);
      console.log(totalscore);
      totalscore += currentScore;
      currentScore = 0;
      document.querySelector('.active .score').innerHTML= totalscore;
      changePlayer();

      
    }

    

// RESET FUNCTION
    function reset(){
      document.querySelector('.current-score').innerHTML= 0;
      document.querySelector('.score').innerHTML= 0;
      document.getElementById("image-of-dice").style.display = "none";
  
    }


  