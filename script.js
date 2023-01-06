//create function to get random computer input
  //get random number and choose rock, paper, or scissor based off of that
function getComputerChoice() {
  const num = (Math.floor(Math.random() * 3) + 1);
  switch(num) {
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
    case 3:
      return 'scissors';
      break;
    default:
      return 'Error'
  }
}
  //get user input and store it in a variable
const playerMove = prompt('What is your move?').toLowerCase();
//create function to play one round of rock paper scissors

  //compare user input agains't computer for all possibilities
  //return result.
function playRound(playerSelection, computerSelection) {
  let playerWin = false;
  if (computerSelection === 'rock' && playerSelection === 'paper') {
    playerWin = true;
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    playerWin = true;
  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    playerWin = true;
  }
  return playerWin;
}
function logWinner(playerSelection, computerSelection, winner) {
  if(winner) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  if(playerSelection === computerSelection) {
    return `It's a tie!`;
  }
  return `You lose! ${computerSelection} beats ${playerSelection}.`
}

const computerMove = getComputerChoice();

console.log(playerMove);
console.log(computerMove);
console.log(playRound(playerMove, computerMove));
console.log(logWinner(playerMove, computerMove, playRound(playerMove,computerMove)));
//create function that plays five rounds
  //loop round function five times.
  //output final result