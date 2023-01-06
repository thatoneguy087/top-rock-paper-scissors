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
//create function to play one round of rock paper scissors

  //compare user input agains't computer for all possibilities
  //return result.
function isRockPaperScissors(playerSelection){
  if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
    return true;
  }
  return false;
}

function playRound(playerSelection, computerSelection) {
  let playerWin = false;
  if(!isRockPaperScissors(playerSelection)){
    return playerWin;
  }
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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let score = 'The final score is ';

  for (let i = 0; i<5; i++) {
    const playerMove = prompt('What is your move?').toLowerCase();
    const computerMove = getComputerChoice();

    console.log(`Player chose ${playerMove}.`);
    console.log(`Computer chose ${computerMove}.`);
    let playerWin = playRound(playerMove, computerMove);
    console.log(logWinner(playerMove, computerMove, playerWin));
    console.log('');

    if(playerMove === computerMove) {
      playerScore++;
      computerScore++;
    } else if (playerWin) {
      playerScore++;
    } else {
      computerScore++;
    }
  }
  score += playerScore + ' to ' + computerScore + '.'
  if(playerScore > computerScore) {
    score += ' You win the game!';
  } else if (computerScore > playerScore) {
    score += ' You lost the game!';
  } else {
    score += ` The game is a tie!`;
  }
  return score;
}

console.log(game());

//create function that plays five rounds
  //loop round function five times.
  //output final result