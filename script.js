document.querySelector('.rock').addEventListener("click", rockChoice);
document.querySelector('.paper').addEventListener("click", paperChoice);
document.querySelector('.scissors').addEventListener("click", scissorsChoice);

const rock = 1;
const paper = 2;
const scissors = 3;

let playerChoice = "";

let cpChoice = "";

let result = "";

function rockChoice() {
    document.querySelector('#player1').classList.remove('rock', 'scissors', 'paper');
    document.querySelector('#player2').classList.remove('rock', 'scissors', 'paper');

    playerChoice = 1;
    console.log('rock');
    let cpChoice = randomNumber();
    console.log(cpChoice);

    if (rock == cpChoice) {
        result = "draw";
      } else if (cpChoice == 2) {
        // You lose
        result = "lose"
    } else {
        // You win
        result = "win"
      } 

      showAnimation(cpChoice);      



return console.log(result);
    //call animation function
    //hide win/lose screen
    //hide buttons
    
}

function paperChoice() {
    document.querySelector('#player1').classList.remove('rock', 'scissors', 'paper');
    document.querySelector('#player2').classList.remove('rock', 'scissors', 'paper');


    playerChoice = 2;
    console.log('paper');
    let cpChoice = randomNumber();
    console.log(cpChoice);

    if (paper == cpChoice) {
        return console.log("draw");
      } else if (cpChoice == 3) {
        // You lose
        console.log("lose")

    } else {
        // You win
        console.log("win")

      } 
      showAnimation(cpChoice);      

    //hide win/lose screen
     //hide buttons

}

function scissorsChoice() {
    document.querySelector('#player1').classList.remove('rock', 'scissors', 'paper');
    document.querySelector('#player2').classList.remove('rock', 'scissors', 'paper');


    playerChoice = 3;
    console.log('scissors');
    let cpChoice = randomNumber();
    console.log(cpChoice);

    if (scissors == cpChoice) {
        return console.log("draw");
      } else if (cpChoice == 1) {
        // You lose
        console.log("lose")

    } else {
        // You win
        console.log("win")
      } 
      showAnimation(cpChoice);      

     //hide win/lose screen
    //hide buttons
}


function randomNumber() {
    let cpChoice = Math.floor(Math.random() * 3 +1);
    return cpChoice;
}

function showAnimation(cpChoice) {

    let cpResult = cpChoice;
    //show animation
    document.querySelector('#player1').classList.add('shake');
    document.querySelector('#player2').classList.add('shake');

    document.querySelector('.player').addEventListener("animationend", showResults(cpResult));


}


function showResults(cpResult) {
    console.log(cpResult)
    document.querySelector('#player1').classList.remove('shake');
    document.querySelector('#player2').classList.remove('shake');

    if (playerChoice == 1) {
        document.querySelector('#player1').classList.add('rock');

      } else if (playerChoice == 2) {
        document.querySelector('#player1').classList.add('paper');
    } else {
        document.querySelector('#player1').classList.add('scissors');
      } 

      if (cpResult == 1) {
        document.querySelector('#player2').classList.add('rock');

      } else if (cpResult == 2) {
        document.querySelector('#player2').classList.add('paper');
    } else {
        document.querySelector('#player2').classList.add('scissors');
      } 


    if (result == "draw") {
        //Draw screen
        console.log("Tie")
      } else if (result == "win") {
        // win screen
        console.log("you win")
    } else {
        // lose screen
        console.log("you lose")
      } 


     //show corresponding image for both player and cp
    //determine winner
    //If player wins
    //display win screen
    //else lose screen
    
    //show buttons
}