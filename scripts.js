console.log("Hello World!");
/* 
STEP ONE:    
    1. Create a function getComputerChoice WITHOUT PARAMETERS
    2. Gen a random number from 0 to 2(0,1,2)
    3. If 0 - return rock
    4. If 1 - return paper
    5. ELSE - return scissors
*/

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0){
        return "rock";
    } else if (randomNumber === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

/* 
STEP TWO:    
    1. Create a function getHumanChoice (no para)
    2. Ask the user WTF does he wants?
    3. Give it to him back(return)
*/

function getHumanChoice(){
    const userPrompt = prompt('What you choosing: rock, paper, scissors?');
    return userPrompt;
}

/*
STEP FOUR
*/

let humanScore = 0;
let computerScore = 0;

/*
STEP FIVE
*/

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);
}

/*
STEP SIX: playGame — 5 rounds
*/
function playGame() {
    // Score reset at the start
    humanScore = 0;
    computerScore = 0;

    // 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
    }

    // The winner is?
    console.log(`=== GAME OVER ===`);
    if (humanScore > computerScore) {
        console.log(`You won the game! Final score: ${humanScore} vs ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer won the game! Final score: ${computerScore} vs ${humanScore}`);
    } else {
        console.log(`The game is a tie! Final score: ${humanScore} vs ${computerScore}`);
    }
}

// Get the game rolling
playGame();
