function getComputerChoice(){
    let random = Math.random();

    if (random >= 0 && random < 0.3){
        return "Rock";
    } else if (random >= 0.3 && random < 0.6){
        return "Paper";
    } else if (random >= 0.6){
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors?");
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
    } else if (humanChoice == "Scissors" && computerChoice == "Scissors"){
        return "Draw! Scissors x Scissors"; // Scissors x Scissors
    } else if (humanChoice == "Paper" && computerChoice == "Rock"){
        humanScore += 1; // Paper x Rock
        return "Win! Paper beats Rock!";
    } else if (humanChoice == "Rock" && computerChoice == "Scissors"){
        humanScore += 1; // Rock x Scissors
        return "Win! Rock beats Scissors!";
    } else if (humanChoice == "Scissors" && computerChoice == "Paper"){
        humanScore += 1; // Scissors x Paper
        return "Win! Scissors beats Paper!";
    } else if (humanChoice ==  "Scissors" && computerChoice == "Rock"){
        computerScore += 1;  // Scissors x Rock
        return "Lose! Scissors doesn't beat Rock";
    } else if (humanChoice ==  "Rock" && computerChoice == "Paper"){
        computerScore += 1; // Rock x Paper
        return "Lose! Rock doesn't beat Paper";
    } else if (humanChoice ==  "Paper" && computerChoice == "Scissors"){
        computerScore += 1; // Paper x Scissors
        return "Lose! Paper doesn't beat Scissors";
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        console.log(playRound(humanSelection, computerSelection));
    }

    if (humanScore > computerScore){
        return "Congratulations! You Won!";
    } else {
        return "Good luck in next round! You lose!";
    }
}

console.log(playGame());