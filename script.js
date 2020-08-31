const choice = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choice.length);
    return (choice[randomIndex]);
}

let playerScore = 0;
let computerScore = 0;
let gameState = 'normal';

function playRound(playerSelection) {
    const computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return gameState = "It's a draw";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return [gameState = "You lose", ++computerScore];
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return [gameState = "You win", ++playerScore];
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return [gameState = "You win", ++playerScore];
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return [gameState = "You lose", ++computerScore];
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return [gameState = "You lose", ++computerScore];
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return [gameState = "You win", ++playerScore];
    }
}

const score = document.querySelector('#score');
const roundInfo = document.querySelector('#roundInfo');

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    playRound('rock');
    score.textContent = 'YOU ' + playerScore + ' VS. ' + computerScore + ' IA ';
    roundInfo.textContent = gameState;
});


const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound('paper');
    score.textContent = 'YOU ' + playerScore + ' VS. ' + computerScore + ' IA ';
    roundInfo.textContent = gameState;
});


const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound('scissors');
    score.textContent = 'YOU ' + playerScore + ' VS. ' + computerScore + ' IA ';
    roundInfo.textContent = gameState;
});
