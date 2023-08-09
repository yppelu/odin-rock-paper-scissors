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
  [0, 1, -1],
  [-1, 0, 1],
  [1, -1, 0]
]

// Returns a string with a random computer choice
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return ('Rock');
    case 1:
      return ('Paper');
    case 2:
      return ('Scissors');
  }
}

/*
** Compares player's and computer's choices
** and returns a string saying who won and how
*/
function playOneRound(playerChoice, computerChoice) {
  let playerChoiceNum = choices[playerChoice];
  let computerChoiceNum = choices[computerChoice];
  switch (loserWinner[playerChoiceNum][computerChoiceNum]) {
    case 1:
      return (`You win! ${playerChoice} beats ${computerChoice}.`);
    case 0:
      return (`It is a tie! ${playerChoice} and ${computerChoice}.`);
    case -1:
      return (`You lose! ${computerChoice} beats ${playerChoice}.`);
  }
}