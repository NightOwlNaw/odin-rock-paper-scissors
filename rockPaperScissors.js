// Create function getComputerChoice
// let computerChoice is undefined
// Obtain random number between 1 to 100: let randomNumber
// If randomNumber is between 0 and 33: computerChoice is rock
// Else if randomNumber is between 33 and 66: computerChoice is paper
// Else (randomnumber is between 66 and 100): computerChoice is scissors

function getComputerChoice() {
let computerChoice;
let randomNumber = Math.random() * 100;
    console.log(computerChoice);
    console.log(randomNumber);

if (randomNumber <= 33) {
    console.log("check 33");
    computerChoice = "Rock";
    console.log(computerChoice);
    return computerChoice;
}
else if (randomNumber > 33 && randomNumber <= 66) {
    console.log("check 66");
    computerChoice = "Paper";
    console.log(computerChoice);
    return computerChoice;
}
else {
    console.log("higher");
    computerChoice = "Scissors";
    console.log(computerChoice);
    return computerChoice;
}
}

getComputerChoice();



// Create function getHumanChoice.
// let humanChoice is undefined.
// Obtain user input via prompt.
// Return user input.

function getHumanChoice() {
let humanChoice = prompt("We're playing Rock Paper Scissors, what is you're choice?");
console.log(humanChoice)
return humanChoice;

}


getHumanChoice();

// Create variable humanScore to keep track of the player's score, set to 0.
// Create variable computerScore to keep track of the computer's score, set to 0.

let humanScore = 0;
let computerScore = 0;
