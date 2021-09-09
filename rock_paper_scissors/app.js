let PlayingOptions = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;

//this function generates the computer selection.

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    let computerPlay = PlayingOptions[random];
    return computerPlay;
}

//this function takes input choice from the user.

function userPlay() {
    let userPlay = prompt('choose rock, paper or scissors');
    return userPlay;
}

// this function plays one round of rock scissors paper.

function playRound(userPlay, computerPlay) {
    if(userPlay.toUpperCase() === 'PAPER' && computerPlay === 'ROCK' || userPlay.toUpperCase() === 'ROCK' && computerPlay === 'SCISSORS' || userPlay.toUpperCase() === 'SCISSORS' && computerPlay === 'PAPER') {
        playerScore++;
        console.log('You won! ' + userPlay.toUpperCase() + ' beats ' + computerPlay);
    }
    else if (userPlay.toUpperCase() === 'PAPER' && computerPlay === 'SCISSORS' || userPlay.toUpperCase() === 'SCISSORS' && computerPlay === 'ROCK' || userPlay.toUpperCase() === 'ROCK' && computerPlay === 'PAPER') {
        computerScore++;
        console.log('You lost! ' + computerPlay + ' beats ' + userPlay.toUpperCase());
    }
    else {
    console.log('Both of the players chose ' + computerPlay);
    }
}

//this function repeats playRound() 5 times.

function game() {
    for(let i = 0; i < 5; i++) {
        playRound(userPlay(), computerPlay());
        console.log('Your score is: ' + playerScore)
        console.log('Opponent score is: ' + computerScore);
    }
    if(playerScore > computerScore) {
        console.log('You won this match! Good job.')
    }
    else if(ComputerScore > playerScore) {
        console.log('You lost this match! Better luck next time.')
    }
    else console.log('Draw!');
}
