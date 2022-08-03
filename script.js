/*
    Pseudocode
    function that randomly generates rock, paper, or scissors for the computer
    a function to play a round of rps between computer and player
    compare the computer choice to player and return who wins
    make a game function to play 5 rounds and returns total winner or loser   
*/

let computerSelection;
let playerSelection;
let cpuScore = 0;
let playerScore = 0;

const roundResult = document.querySelector('#round-result');
const gameResult = document.querySelector('#game-result');
const buttons = document.querySelectorAll('button');

// This function randomly generates rock, paper, or scissors and returns the value
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    
    if (playerSelection == computerSelection) {
        displayResults( "Tie Game!");
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        ++playerScore;
        storePlayerScore();
        displayResults("You Win!");
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection =='rock')
    ) {
        ++cpuScore;
        storeCpuScore();
        displayResults("You Lose!");
    }
    
}
 

function game(){
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const img = button.querySelector('img');
            playerSelection = img.alt.toLowerCase();
            gameResult.textContent = '';
            playRound(playerSelection, computerSelection);
            declareWinner();
        });
    });   

}

function declareWinner(){
    if (playerScore == 5 && playerScore > cpuScore) {
      gameResult.textContent = "Player wins the game!";
      resetGame();
    } else if (cpuScore == 5 && cpuScore > playerScore) {
      gameResult.textContent = "Player loses the game!";
      resetGame();
    }
}

function displayResults(str) {
    roundResult.textContent = str;
}

function storePlayerScore(){
    let playerScoreboard = document.querySelector('#player-score');
    playerScoreboard.textContent = playerScore;
}

function storeCpuScore(){
    let cpuScoreboard = document.querySelector('#cpu-score');
    cpuScoreboard.textContent = cpuScore;
}

function resetGame(){
    playerScore = 0;
    cpuScore = 0;
    storePlayerScore();
    storeCpuScore();
}

game()