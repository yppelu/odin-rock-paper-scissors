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

/*
** Highlights the button which computer chose
** And returns a string representing computer choice
*/
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

/*
** Compares player's and computer's choices
** and assign a string saying who won and how to the round result div
*/
function playOneRound(playerChoice, computerChoice) {
  let playerChoiceNum = choices[playerChoice];
  let computerChoiceNum = choices[computerChoice];
  switch (loserWinner[playerChoiceNum][computerChoiceNum]) {
    case 1:
      roundResult.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
      playerWins++;
      break;
    case 0:
      roundResult.textContent = `It is a tie! ${playerChoice} and ${computerChoice}.`;
      playerWins++;
      computerWins++;
      break;
    case -1:
      roundResult.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
      computerWins++;
      break;
  }
  scoreBlock.textContent = `Score: ${playerWins}:${computerWins}`;
  finishGame(playerWins, computerWins);
}

/*
** Checks if player or a computer gained a score of 5
** and if it is true finished the game
*/
function finishGame(playerWins, computerWins) {
  if (playerWins === 5 || computerWins === 5) {
    gameInProgressWindow.style.display = 'none';
    gameFinishedWindow.style.display = 'block';
    if (playerWins === 5 && computerWins === 5) {
      gameResult.textContent = `It is a tie! ${playerWins}:${computerWins}! Unbelievable!`;
    } else if (playerWins === 5) {
      gameResult.textContent = `Victory! ${playerWins}:${computerWins}! Congratulations!`;
    } else if (computerWins === 5) {
      gameResult.textContent = `Defeat! ${playerWins}:${computerWins}! Such a pity!`;
    }
  }
}

let computerWins;
let playerWins;

/*
** When click startButton, wins counters and computer choices resets,
** and the main game window opens
*/
startGameButton.forEach((startButton) => startButton.addEventListener('click', () => {
  computerWins = 0;
  playerWins = 0;
  playerRockOption.classList.remove('chosen');
  playerPaperOption.classList.remove('chosen');
  playerScissorsOption.classList.remove('chosen');
  computerRockOption.classList.remove('chosen');
  computerPaperOption.classList.remove('chosen');
  computerScissorsOption.classList.remove('chosen');
  scoreBlock.textContent = 'Score: 0:0';
  roundResult.textContent = '';
  firstOpenWindow.style.display = 'none';
  gameFinishedWindow.style.display = 'none';
  gameInProgressWindow.style.display = 'block';
}));

playerRockOption.addEventListener('click', () => {
  playerPaperOption.classList.remove('chosen');
  playerScissorsOption.classList.remove('chosen');
  playerRockOption.classList.add('chosen');
  playOneRound('Rock', getComputerChoice());
  roundCount++;
});
playerPaperOption.addEventListener('click', () => {
  playerRockOption.classList.remove('chosen');
  playerScissorsOption.classList.remove('chosen');
  playerPaperOption.classList.add('chosen');
  playOneRound('Paper', getComputerChoice());
  roundCount++;
});
playerScissorsOption.addEventListener('click', () => {
  playerRockOption.classList.remove('chosen');
  playerPaperOption.classList.remove('chosen');
  playerScissorsOption.classList.add('chosen');
  playOneRound('Scissors', getComputerChoice());
  roundCount++;
});