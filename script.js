import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");

const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerSpock = document.getElementById("playerSpock");
const playerPaper = document.getElementById("playerPaper");
const playerLizard = document.getElementById("playerLizard");
const playerScissors = document.getElementById("playerScissors");

const computerRock = document.getElementById("computerRock");
const computerSpock = document.getElementById("computerSpock");
const computerPaper = document.getElementById("computerPaper");
const computerLizard = document.getElementById("computerLizard");
const computerScissors = document.getElementById("computerScissors");

const allGameIcons = document.getElementsByClassName("far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let computeChoice = "";
let playerScore = 0;
let computerScore = 0;

function resetSelected() {
  for (let icon of allGameIcons) {
    icon.classList.remove("selected");
  }

  stopConfetti();
  removeConfetti();
}

function select(playerChoice) {
  checkResult(playerChoice);
  setSelectStyle(playerChoice, true);
}

function setSelectStyle(choice, isPlayer) {
  switch (choice) {
    case "rock":
      if (isPlayer) {
        playerRock.classList.add("selected");
        playerChoiceEl.textContent = " --- Rock";
      } else {
        computerRock.classList.add("selected");
        computerChoiceEl.textContent = " --- Rock";
      }
      break;
    case "spock":
      if (isPlayer) {
        playerSpock.classList.add("selected");
        playerChoiceEl.textContent = " --- Spock";
      } else {
        computerSpock.classList.add("selected");
        computerChoiceEl.textContent = " --- Spock";
      }
      break;
    case "paper":
      if (isPlayer) {
        playerPaper.classList.add("selected");
        playerChoiceEl.textContent = " --- Paper";
      } else {
        computerPaper.classList.add("selected");
        computerChoiceEl.textContent = " --- Paper";
      }

      break;
    case "scissors":
      if (isPlayer) {
        playerScissors.classList.add("selected");
        playerChoiceEl.textContent = " --- Scissors";
      } else {
        computerScissors.classList.add("selected");
        computerChoiceEl.textContent = " --- Scissors";
      }
      break;
    case "lizard":
      if (isPlayer) {
        playerLizard.classList.add("selected");
        playerChoiceEl.textContent = " --- Lizard";
      } else {
        computerLizard.classList.add("selected");
        computerChoiceEl.textContent = " --- Lizard";
      }
      break;
    default:
      break;
  }
}

function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  updateScore(playerChoice);
}

function computerRandomChoice() {
  const computeChoiceNumber = Math.floor(Math.random() * 5);
  switch (computeChoiceNumber) {
    case 0:
      computeChoice = "rock";
      break;
    case 1:
      computeChoice = "spock";
      break;
    case 2:
      computeChoice = "lizard";
      break;
    case 3:
      computeChoice = "scissors";
      break;
    case 4:
      computeChoice = "paper";
      break;
    default:
      computeChoice = "rock";
      break;
  }
  setSelectStyle(computeChoice, false);
}

function updateScore(playerChoice) {
  if (playerChoice === computeChoice) {
    resultText.textContent = "It is a tie.";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computeChoice) >= 0) {
      resultText.textContent = "You Win !!!.";
      playerScore++;
      playerScoreEl.textContent = playerScore;
      startConfetti();
    } else {
      resultText.textContent = "It is a lose.";
      computerScore++;
      computerScoreEl.textContent = computerScore;
    }
  }
}
function resetAll() {
  computeChoice = "";
  computerScore = 0;
  playerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
  resultText.textContent = "";
  resetSelected();
}

resetAll();

window.select = select;
window.resetAll = resetAll;
