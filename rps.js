function computerPlay() {
  let rand = Math.floor(Math.random() * 3) + 1;
  let choice = "";
  switch (rand) {
    case 1:
      choice = "rock";
      break;

    case 2:
      choice = "paper";
      break;

    case 3:
      choice = "scissors";
      break;

    default:
      break;
  }
  console.log(choice);
  return choice;
}

function playerChoice() {
  let choice = prompt("Rock Paper or Scissors?");
  choice = choice.toLowerCase();
  console.log(choice);
  return choice;
}

function playRound(computerSelection, playerSelection) {
  let winner = "";
  if (computerSelection === playerSelection) {
    console.log("Tie");
  } else if (computerSelection === "rock") {
    if (playerSelection === "paper") {
      console.log("You Win! Paper beats Rock");
      winner = "player";
    }
    if (playerSelection === "scissors") {
      console.log("You Lose! Rock beats Scissors");
      winner = "computer";
    }
  } else if (computerSelection === "paper") {
    if (playerSelection === "scissors") {
      console.log("You Win! Scissors beats Paper");
      winner = "player";
    }
    if (playerSelection === "rock") {
      console.log("You Lose! Paper beats Rock");
      winner = "computer";
    }
  } else if (computerSelection === "scissors") {
    if (playerSelection === "rock") {
      console.log("You Win! Rock beats Scissors");
      winner = "player";
    }
    if (playerSelection === "paper") {
      console.log("You Lose! Scissors beats Paper");
      winner = "computer";
    }
  }
  return winner;
}

function game() {
  let winner = "";
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    winner = playRound(computerPlay(), playerChoice());
    if (winner === "player") {
      playerScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
    console.log("Player's Score: " + playerScore);
    console.log("Computer's Score: " + computerScore);
  }

  if (playerScore > computerScore) {
    console.log("Player Wins!");
  } else if (computerScore > playerScore) {
    console.log("Computer Wins!");
  } else {
    console.log("It's a Tie!");
  }
}

game();
