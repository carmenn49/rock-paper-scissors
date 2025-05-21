let playerScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const result = document.createElement("div");
result.classList.add("result");

function getComputerChoice() {
  const computerSelection = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];

  return choices[computerSelection];
}

function playRound(humanChoice) {
  if (playerScore >= 5 || computerScore >= 5) return;

  const computerSelection = getComputerChoice();
  let resultMessage = document.createElement("div");
  resultMessage = `You chose ${humanChoice}. Computer chose ${computerSelection}. `;

  if (humanChoice === computerSelection) {
    result.textContent = "It's a tie!";
    document.body.appendChild(result);
  } else if (
    (computerSelection === "rock" && humanChoice === "paper") ||
    (computerSelection === "paper" && humanChoice === "scissors") ||
    (computerSelection === "scissors" && humanChoice === "rock")
  ) {
    result.textContent = "You win!";
    document.body.appendChild(result);
    playerScore++;
  } else if (
    (computerSelection === "rock" && humanChoice === "scissors") ||
    (computerSelection === "paper" && humanChoice === "rock") ||
    (computerSelection === "scissors" && humanChoice === "paper")
  ) {
    result.textContent = "You lose!";
    document.body.appendChild(result);
    computerScore++;
  } else {
    result.textContent = "Invalid Choice";
    document.body.appendChild(result);
  }

  resultMessage += `Score: You - ${playerScore}, Computer - ${computerScore}. `;

  if (playerScore === 5 || computerScore === 5) {
    const finalMessage =
      humanChoice > computerSelection
        ? "You won the game!"
        : "You lost the game.";
    resultMessage += finalMessage;
  }

  result.innerText = resultMessage;
}

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   for (let round = 1; round <= 5; round++) {
//     const user = getHumanChoice();
//     const computer = getComputerChoice();

//     console.log(`Round ${round}`);
//     console.log(`You chose: ${user}`);
//     console.log(`Computer chose: ${computer}`);

//     const result = playRound(user, computer);
//     console.log(result);

//     if (result === "You win!") {
//       humanScore++;
//     } else if (result === "You lose!") {
//       computerScore++;
//     }
//   }

//   console.log(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);

//   if (humanScore > computerScore) {
//     console.log("Congratulations! You win the game!");
//   } else if (humanScore < computerScore) {
//     console.log("Sorry! You lose the game.");
//   } else {
//     console.log("It's a tie!");
//   }
// }

// playGame();
