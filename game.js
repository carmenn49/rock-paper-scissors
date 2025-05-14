function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  switch (computerChoice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      console.log("Invalid number");
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    return "You win!";
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    return "You lose!";
  } else {
    console.log("Invalide Choice.");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const user = getHumanChoice();
    const computer = getComputerChoice();

    console.log(`Round ${round}`);
    console.log(`You chose: ${user}`);
    console.log(`Computer chose: ${computer}`);

    const result = playRound(user, computer);
    console.log(result);

    if (result === "You win!") {
      humanScore++;
    } else if (result === "You lose!") {
      computerScore++;
    }
  }

  console.log(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry! You lose the game.");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
