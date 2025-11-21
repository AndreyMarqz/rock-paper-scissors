function getComputerChoice(){
    let random = Math.random();

    if (random >= 0 && random < 0.3){
        return "Rock";
    } else if (random >= 0.3 && random < 0.6){
        return "Paper";
    } else if (random >= 0.6){
        return "Scissor";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissor?");
    return choice;
}

let humanScore = 0; 
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

    if (humanChoice == "Rock" && computerChoice == "Rock"){
        return "Draw! Rock x Rock"; // Rock x Rock
    } else if (humanChoice == "Paper" && computerChoice == "Paper"){ 
        return "Draw! Paper x Paper"; // Paper x Paper
    } else if (humanChoice == "Scissor" && computerChoice == "Scissors"){
        return "Draw! Scissor x Scissor"; // Scissor x Scissor
    } else if (humanChoice == "Paper" && computerChoice == "Rock"){
        humanScore += 1; // Paper x Rock
        return "Win! Paper beats Rock!";
    } else if (humanChoice == "Rock" && computerChoice == "Scissor"){
        humanScore += 1; // Rock x Scissor
        return "Win! Rock beats Scissor!";
    } else if (humanChoice == "Scissor" && computerChoice == "Paper"){
        humanScore += 1; // Scissor x Paper
        return "Win! Scissor beats Paper!";
    } else if (humanChoice ==  "Scissor" && computerChoice == "Rock"){
        computerScore += 1;  // Scissor x Rock
        return "Lose! Scissor doesn't beat Rock";
    } else if (humanChoice ==  "Rock" && computerChoice == "Paper"){
        computerScore += 1; // Rock x Paper
        return "Lose! Rock doesn't beat Paper";
    } else if (humanChoice ==  "Paper" && computerChoice == "Scissor"){
        computerScore += 1; // Paper x Scissor
        return "Lose! Paper doesn't beat Scissor";
    }
}

function playGame(){
    for(let i = 0; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        return "Congratulations! You Won!";
    } else {
        return "Good luck in next round! You lose!";
    }
}

console.log(playGame());