let computerChoiceDisplay = document.getElementById('computer');
let userChoiceDisplay = document.getElementById('you');
let resultDisplay = document.getElementById('result');
let choices = document.querySelectorAll('button');


let userChoice
let computerChoice
let result

choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id // ?
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1


    if (randomNumber == 1) {
        computerChoice = 'rock'
    }

    else if (randomNumber == 2) {
        computerChoice = 'paper'
    }

    else {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}



function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw'
    }

    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'computer Won!'
    }

    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'computer Won!'
    }

    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'computer Won!'
    }

    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'user Won!'
    }

    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'user Won!'
    }

    if (computerChoice === 'scissors' && userChoice === 'rock' ) {
        result = 'user Won!'
    }

    resultDisplay.innerHTML = result;
}
