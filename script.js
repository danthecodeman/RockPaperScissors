let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll("input");

//create array to store rock, paper, and scissors.
let rpcArray = ["rock", "paper", "scissors"];
//return rock or paper or scissors randomly
function getComputerChoice() {
  //gets a random number in the array
  let random = Math.floor(Math.random() * rpcArray.length);
  //console.log(random);
  //gets random string from array
  let randomPlay = rpcArray[random];
  //returns the random string from the array
  return randomPlay;
}
//calls the function
//console.log(getComputerChoice());

//returns string that declares winner or loser
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore += 1;
    alert("You Win! Rock beats scissors");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore += 1;
    alert("You Lose! Paper beats rock");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore += 1;
    alert("You win! Paper beats rock");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore += 1;
    alert("You Lose! Scissors beats paper");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore += 1;
    alert("You Lose! Rock beats scissors");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore += 1;
    alert("You Win! scissors beats paper");
  } else {
    alert("Tied!");
  }
}

//player input that has been converted to lowercase.
const input = prompt("Add your input below");
//takes a user input and converts it to lower case
const playerSelection = input.toLowerCase();
//computer choice
const computerSelection = getComputerChoice();
//prints results of the function: (single round) with inputs from playerSelection and computerSelection

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }
}

game();
