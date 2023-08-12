/*
** The object contains pairs choice: number
** Numbers are required to access an array
** The array holds values indicating at winner and loser
*/
const choices = {
  'Rock': 0,
  'Paper': 1,
  'Scissors': 2
}
// 2D array with Rock-Paper-Scissors order; player in rows, computer in columns
const loserWinner = [
  [0, -1, 1],
  [1, 0, -1],
  [-1, 1, 0]
]

const firstOpenWindow = document.querySelector('.first-open');
const gameInProgressWindow = document.querySelector('.game-in-progress');
const gameFinishedWindow = document.querySelector('.game-finished');

const startGameButton = document.querySelectorAll('.btn-start-game');
const playerRockOption = document.querySelector('.player .btn-rock');
const playerPaperOption = document.querySelector('.player .btn-paper');
const playerScissorsOption = document.querySelector('.player .btn-scissors');

const computerRockOption = document.querySelector('.computer .btn-rock');
const computerPaperOption = document.querySelector('.computer .btn-paper');
const computerScissorsOption = document.querySelector('.computer .btn-scissors');

const scoreBlock = document.querySelector('.scores');
const roundResult = document.querySelector('.round-result');
const gameResult = document.querySelector('.game-result');

// Highlights the button which computer chose
// And returns a string representing computer choice
function getComputerChoice() {
  computerRockOption.classList.remove('chosen');
  computerPaperOption.classList.remove('chosen');
  computerScissorsOption.classList.remove('chosen');
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      computerRockOption.classList.add('chosen');
      return 'Rock';
    case 1:
      computerPaperOption.classList.add('chosen');
      return 'Paper';
    case 2:
      computerScissorsOption.classList.add('chosen');
      return 'Scissors';
  }
}

// Compares player's and computer's choices
// and returns a string saying who won and how
function playOneRound(playerChoice, computerChoice) {
  let playerChoiceNum = choices[playerChoice];
  let computerChoiceNum = choices[computerChoice];
  switch (loserWinner[playerChoiceNum][computerChoiceNum]) {
    case 1:
      roundResult.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
      playerWins++;
      scoreBlock.textContent = `Score: ${playerWins}:${computerWins}`;
      finishGame(playerWins, computerWins);
      break;
    case 0:
      roundResult.textContent = `It is a tie! ${playerChoice} and ${computerChoice}.`;
      playerWins++;
      computerWins++;
      scoreBlock.textContent = `Score: ${playerWins}:${computerWins}`;
      finishGame(playerWins, computerWins);
      break;
    case -1:
      roundResult.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
      computerWins++;
      scoreBlock.textContent = `Score: ${playerWins}:${computerWins}`;
      finishGame(playerWins, computerWins);
      break;
  }
}

function finishGame(playerWins, computerWins) {
  if (playerWins === 5 && computerWins === 5) {
    gameInProgressWindow.style.display = 'none';
    gameFinishedWindow.style.display = 'block';
    gameResult.textContent = `It is a tie! ${playerWins}:${computerWins}! Unbelievable!`;
  }
  if (playerWins === 5) {
    gameInProgressWindow.style.display = 'none';
    gameFinishedWindow.style.display = 'block';
    gameResult.textContent = `Victory! ${playerWins}:${computerWins}! Congratulations!`;
  }
  if (computerWins === 5) {
    gameInProgressWindow.style.display = 'none';
    gameFinishedWindow.style.display = 'block';
    gameResult.textContent = `Defeat! ${playerWins}:${computerWins}! Such a pity!`;
  }
}

let computerWins;
let playerWins;

startGameButton.forEach((startButton) => startButton.addEventListener('click', () => {
  computerWins = 0;
  playerWins = 0;
  computerRockOption.classList.remove('chosen');
  computerPaperOption.classList.remove('chosen');
  computerScissorsOption.classList.remove('chosen');
  firstOpenWindow.style.display = 'none';
  gameFinishedWindow.style.display = 'none';
  gameInProgressWindow.style.display = 'block';
}));

playerRockOption.addEventListener('click', () => {
  playOneRound('Rock', getComputerChoice());
  roundCount++;
});
playerPaperOption.addEventListener('click', () => {
  playOneRound('Paper', getComputerChoice());
  roundCount++;
});
playerScissorsOption.addEventListener('click', () => {
  playOneRound('Scissors', getComputerChoice());
  roundCount++;
});