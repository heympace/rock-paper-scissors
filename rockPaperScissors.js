// validate user input
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || 
       userInput === 'paper' || 
       userInput === 'scissors' || 
       userInput === 'bulldozer') {
      return userInput
    } else {
      console.log('There is an error.')
    }
  }
  
  // generate random choice for computer
  const getComputerChoice = () => {
    let computerChoice = ''
    let randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice) {
      case 0:
        return computerChoice = 'scissors';
      case 1:
        return computerChoice = 'rock';
      case 2:
        return computerChoice = 'paper';
    }
  }
  
  // Compare choices, determine a winner
  const determineWinner = (userChoice, computerChoice) => {
       // tie game
    if(userChoice === computerChoice) {
      return 'Tie game, play again!'
    } // bulldozer always wins
    if(userChoice === 'bulldozer') {
      return 'BOOM. You win!'
    } // User selects rock
    if(userChoice === 'rock'){
      if (computerChoice === 'paper') { return 'Paper beats rock, point machine.' }
      else { return 'Rock beats scissors, you win!' }
    } // User selects paper
    if(userChoice === 'paper'){
      if(computerChoice === 'rock'){ return 'Paper beats rock, you win!' }
      else { return 'Scissors beats paper, machine wins.' }
    } // User selects scissors
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){ return 'Rock beats scissors, machine has this one.'}else{ return 'Scissors beats paper, you win!' }  
    }
  }
  
  // Game function
  const playGame = (userInput) => {
    let userChoice = getUserChoice(userInput);
      let computerChoice = getComputerChoice();
      console.log(`You chose ${userChoice}. The computer chose ${computerChoice}.`);
      console.log(determineWinner(userChoice, computerChoice));
  }
  
  // Initiate game, input user's choice
  // passing in getComputerChoice() generates random responses for both
  playGame('rock');
  