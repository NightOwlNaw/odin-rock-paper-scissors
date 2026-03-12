// Create function getComputerChoice
// let computerChoice is undefined
// Obtain random number between 1 to 100: let randomNumber
// If randomNumber is between 0 and 33: computerChoice is rock
// Else if randomNumber is between 33 and 66: computerChoice is paper
// Else (randomnumber is between 66 and 100): computerChoice is scissors

function getComputerChoice() {
let computerChoice;
let randomNumber = Math.random() * 100;
    // console.log(computerChoice);
    // console.log(randomNumber);

if (randomNumber <= 33) {
    // console.log("check 33");
    computerChoice = "rock";
    // console.log(computerChoice);
    return computerChoice;
}
else if (randomNumber > 33 && randomNumber <= 66) {
    // console.log("check 66");
    computerChoice = "paper";
    // console.log(computerChoice);
    return computerChoice;
}
else {
    // console.log("higher");
    computerChoice = "scissors";
    // console.log(computerChoice);
    return computerChoice;
}
}

// getComputerChoice();



// Create function getHumanChoice.
// let humanChoice is undefined.
// Obtain user input via prompt.
// Return user input.

function getHumanChoice() {
let humanChoice = prompt("We're playing Rock Paper Scissors, what is you're choice?");
console.log(humanChoice)

return humanChoice;

}


// getHumanChoice();



// Create variable humanScore to keep track of the player's score, set to 0.
// Create variable computerScore to keep track of the computer's score, set to 0.

let humanScore = 0;
let computerScore = 0;



// Create function playRound
// playRound takes two arguments: humanChoice and computerChoice.
// Make function humanChoice's parameter case-insensitive.
// Announce round winner in console.log: "You [win]/[lose]! [Winner's choice]
// beats [loser's choice]." Logic:
// If humanChoice != computerChoice look at values:
//    If humanChoice == rock and computerChoice == scissor: user wins
//    display "You Win! humanChoice"
//    Else if humanChoice == paper and computerChoice == rock: user wins
//    Else if humanChoice == scissors and computerChoice == paper: user wins 
//    Else computer wins
// Else: display tie message

// rock beats scissors 
// scissors beats paper
// paper beats rock


// Increment humanScore or computerScore variable based on the round winner.

function playRound(humanChoice, computerChoice) {
let humanChoiceLowered = humanChoice.toLowerCase();
// console.log("Test: " + humanChoiceLowered);
// console.log("Test: " +computerChoice);

let messageHumanWins = "You win! " +
    humanChoiceLowered.replace(humanChoiceLowered[0], humanChoiceLowered[0].toUpperCase())
+ " beats " + computerChoice + ".";

let messageComputerWins = "You lose! " +
    computerChoice.replace(computerChoice[0], computerChoice[0].toUpperCase())
+ " beats " + humanChoiceLowered + ".";

if (humanChoiceLowered != computerChoice) {
    if (humanChoiceLowered == "rock" && computerChoice == "scissor") {
        console.log(messageHumanWins);
        humanScore++;
        console.log("You:" + humanScore + " Computer: " + computerScore);
    }
    else if (humanChoiceLowered == "paper" && computerChoice == "rock") {
        console.log(messageHumanWins);
        humanScore++;
        console.log("You:" + humanScore + " Computer: " + computerScore);
    }
    else if (humanChoiceLowered == "scissors" && computerChoice == "paper") {
        console.log(messageHumanWins);
        humanScore++;
        console.log("You:" + humanScore + " Computer: " + computerScore);
    }
    else {
        console.log(messageComputerWins);
        computerScore++;
        console.log("You:" + humanScore + " Computer: " + computerScore);
    }
} 
else {
    console.log(
    "It's tie! You both chose " + computerChoice + ". Play another round."
);
    console.log("You:" + humanScore + " Computer: " + computerScore);
}
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


