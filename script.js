function getComputerChoice() {
  let random = Math.random();

  if (random >= 0 && random < 0.33) {
    return "Rock";
  } else if (random >= 0.33 && random < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

  let result = "";

  if (humanChoice == "Rock" && computerChoice == "Rock") {
    result = "Draw! Rock vs Rock";
  } else if (humanChoice == "Paper" && computerChoice == "Paper") {
    result = "Draw! Paper vs Paper";
  } else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
    result = "Draw! Scissors vs Scissors";
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    humanScore += 1;
    result = "You Win! Paper beats Rock!";
  } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    humanScore += 1;
    result = "You Win! Rock beats Scissors!";
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    humanScore += 1;
    result = "You Win! Scissors beats Paper!";
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    computerScore += 1;
    result = "You Lose! Rock beats Scissors";
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    computerScore += 1;
    result = "You Lose! Paper beats Rock";
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    computerScore += 1;
    result = "You Lose! Scissors beats Paper";
  }

  return result;
}

function updateScore() {
  const scoreDiv = document.getElementById("score");
  scoreDiv.innerHTML = `<h2>Score: You ${humanScore} - ${computerScore} Computer</h2>`;
}

function checkWinner() {
  if (humanScore === 5) {
    document.getElementById("results").innerHTML +=
      "<h2>🎉 YOU WON THE GAME! 🎉</h2>";
    disableButtons();
  } else if (computerScore === 5) {
    document.getElementById("results").innerHTML +=
      "<h2>💔 COMPUTER WON THE GAME! 💔</h2>";
    disableButtons();
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const humanChoice = button.className;

    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<p>You chose: ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    }</p>
                                <p>Computer chose: ${computerChoice}</p>
                                <p><strong>${result}</strong></p>`;

    updateScore();

    checkWinner();
  });
});

updateScore();
