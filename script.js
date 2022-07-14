/*
    Pseudocode
    function that randomly generates rock, paper, or scissors for the computer
    a function to play a round of rps between computer and player
    compare the computer choice to player and return who wins
    make a game function to play 5 rounds and returns total winner or loser   
*/



// This function randomly generates rock, paper, or scissors and returns the value
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock!"
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats Scissors!"
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper beats Rock!"
    }
    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Paper beats Scissors!"
    }
    if (playerSelection === 'scissors' && computerSelection ==='rock') {
        return "You Lose! Rock beats Scissors!"
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You Win! Scissors beats Paper!"
    }
}


const playerSelection = prompt("Please select rock, paper, or scissors.");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));