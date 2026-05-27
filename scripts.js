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