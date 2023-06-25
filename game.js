function getComputerChoice() {
    cpuChoice = Math.floor(Math.random() * 3) + 1;
    if (cpuChoice === 1) {
        console.log(cpuChoice);
        return 'rock';
    } else if (cpuChoice === 2) {
        console.log(cpuChoice);
        return 'paper';
    } else {
        console.log(cpuChoice);
        return 'scissors';
    }
}


function getPlayerChoice() {
    playerChoice = prompt("Rock, paper or scissors?:").toLowerCase()
    if (playerChoice === 'rock' 
        || playerChoice === 'paper' 
        || playerChoice === 'scissors') {
            return playerChoice
        } else {
            console.log('Invalid choice. Please type rock, paper or scissors.')
        }
}

function playRound(cpuChoice, playerChoice) {
    
}
