document.querySelector('.rock').addEventListener("click", rockChoice);
document.querySelector('.paper').addEventListener("click", paperChoice);
document.querySelector('.scissors').addEventListener("click", scissorsChoice);

const rock = 1;
const paper = 2;
const scissors = 3;

let playerChoice = "";

let cpChoice = ""

let result = ""

function rockChoice() {
    document.querySelector('#player1').classList.remove('rock', 'scissors', 'paper');
    document.querySelector('#player2').classList.remove('rock', 'scissors', 'paper');
    document.querySelector('#win').classList.add('hidden');
    document.querySelector('#lose').classList.add('hidden');
    document.querySelector('#draw').classList.add('hidden');

    playerChoice = 1;
    console.log('rock');
    cpChoice = Math.floor(Math.random() * 3 +1);
    console.log(cpChoice);

    if (rock == cpChoice) {
        result = "draw";
      } else if (cpChoice == 2) {
        // You lose
        result = "lose";
    } else {
        // You win
        result = "win";
      } 

      showAnimation();      



    
}

function paperChoice() {
    document.querySelector('#player1').classList.remove('rock', 'scissors', 'paper');
    document.querySelector('#player2').classList.remove('rock', 'scissors', 'paper');
    document.querySelector('#win', '#lose', '#draw').classList.add('hidden');
    document.querySelector('#win').classList.add('hidden');
    document.querySelector('#lose').classList.add('hidden');
    document.querySelector('#draw').classList.add('hidden');

    playerChoice = 2;
    console.log('paper');
    cpChoice = Math.floor(Math.random() * 3 +1);
    console.log(cpChoice);

    if (paper == cpChoice) {
        result = "draw";
      } else if (cpChoice == 3) {
        // You lose
        result = "lose";

    } else {
        // You win
        result = "win";

      } 
      showAnimation();      
}

function scissorsChoice() {
    document.querySelector('#player1').classList.remove('rock', 'scissors', 'paper');
    document.querySelector('#player2').classList.remove('rock', 'scissors', 'paper');
    document.querySelector('#win', '#lose', '#draw').classList.add('hidden');
    document.querySelector('#win').classList.add('hidden');
    document.querySelector('#lose').classList.add('hidden');
    document.querySelector('#draw').classList.add('hidden');

    playerChoice = 3;
    console.log('scissors');
    cpChoice = Math.floor(Math.random() * 3 +1);
    console.log(cpChoice);

    if (scissors == cpChoice) {
        result = "draw";
      } else if (cpChoice == 1) {
        // You lose
        result = "lose"

    } else {
        // You win
        result = "win"
      } 
      showAnimation();      
}



function showAnimation() {
    //show animation
    document.querySelector('#player1').classList.add('shake');
    document.querySelector('#player2').classList.add('shake');

    document.querySelector('.player').addEventListener("animationend", showResults);


}


function showResults() {
    document.querySelector('#player1').classList.remove('shake');
    document.querySelector('#player2').classList.remove('shake');

    if (playerChoice == 1) {
        document.querySelector('#player1').classList.add('rock');

      } else if (playerChoice == 2) {
        document.querySelector('#player1').classList.add('paper');
    } else {
        document.querySelector('#player1').classList.add('scissors');
      } 

      if (cpChoice == 1) {
        document.querySelector('#player2').classList.add('rock');

      } else if (cpChoice == 2) {
        document.querySelector('#player2').classList.add('paper');
    } else {
        document.querySelector('#player2').classList.add('scissors');
      } 


    if (result == "draw") {
        //Draw screen
        console.log("Tie")
        document.querySelector('#draw').classList.remove('hidden');
      } else if (result == "win") {
        // win screen
        document.querySelector('#win').classList.remove('hidden');
        console.log("you win")
    } else {
        // lose screen
        document.querySelector('#lose').classList.remove('hidden');
        console.log("you lose")
        
      } 


     //show corresponding image for both player and cp
    //determine winner
    //If player wins
    //display win screen
    //else lose screen
    
    //show buttons
}