//create function to get random computer input
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
  //get random number and choose rock, paper, or scissor based off of that
//get user input and store it in a variable
//create function to play one round of rock paper scissors
  //compare user input agains't computer for all possibilities
  //return result.
//create function that plays five rounds
  //loop round function five times.
  //output final result