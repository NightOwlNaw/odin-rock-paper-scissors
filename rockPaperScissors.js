function playGame(){
    function getComputerChoice() {
        let computerChoice;
        let randomNumber = Math.random() * 100;

        if (randomNumber <= 33) {
            computerChoice = "rock";
            return computerChoice;
        }
        else if (randomNumber > 33 && randomNumber <= 66) {
            computerChoice = "paper";
            return computerChoice;
        }
        else {
            computerChoice = "scissors";
            return computerChoice;
        }
        }
    
    function getHumanChoice() {
        let humanChoice = prompt("We're playing Rock Paper Scissors, what is your choice?");
        console.log(humanChoice)
        return humanChoice;
        }
    

    
    let roundsPlayed = 0;
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
    roundsPlayed++;

    let humanChoiceLowered = humanChoice.toLowerCase();

    let messageHumanWins = "You win! " +
        humanChoiceLowered.replace(humanChoiceLowered[0], humanChoiceLowered[0].toUpperCase())
    + " beats " + computerChoice + ".";

    let messageComputerWins = "You lose! " +
        computerChoice.replace(computerChoice[0], computerChoice[0].toUpperCase())
    + " beats " + humanChoiceLowered + ".";

    if (humanChoiceLowered != computerChoice) {
        if (humanChoiceLowered == "rock" && computerChoice == "scissors") {
            console.log(messageHumanWins);
            humanScore++;
            console.log("Rounds played: " + roundsPlayed + " You:" + humanScore + " Computer: " + computerScore);
        }
        else if (humanChoiceLowered == "paper" && computerChoice == "rock") {
            console.log(messageHumanWins);
            humanScore++;
            console.log("Rounds played: " + roundsPlayed + " You:" + humanScore + " Computer: " + computerScore);
        }
        else if (humanChoiceLowered == "scissors" && computerChoice == "paper") {
            console.log(messageHumanWins);
            humanScore++;
            console.log("Rounds played: " + roundsPlayed + " You:" + humanScore + " Computer: " + computerScore);
        }
        else {
            console.log(messageComputerWins);
            computerScore++;
            console.log("Rounds played: " + roundsPlayed + " You:" + humanScore + " Computer: " + computerScore);
        }
    } 
    else {
        console.log(
        "It's tie! You both chose " + computerChoice + "."
    );
        console.log("Rounds played: " + roundsPlayed + " You:" + humanScore + " Computer: " + computerScore);
    }
    }

    function checkRounds() {
        if (roundsPlayed < 5) {
            let humanSelection = getHumanChoice();
            console.log("You: " + humanSelection);
            let computerSelection = getComputerChoice();
            console.log("Computer: " + computerSelection);   
            playRound(humanSelection, computerSelection);
        }
        else {
            if (humanScore < computerScore) {
                console.log("Five rounds played. Womp womp, you've lost.");
            }
            else if (humanScore > computerScore) {
                console.log("Five rounds played. Woop, woop! You've won.");
            }
            else {
                console.log("Five rounds played. Well, it looks like we have tie on our hands!")
            }
        }
    }

    checkRounds();
    checkRounds();
    checkRounds();
    checkRounds();
    checkRounds();
    checkRounds();
}


playGame();