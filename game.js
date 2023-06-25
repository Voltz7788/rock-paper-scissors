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
    playerChoice = prompt('Rock, paper or scissors?:').toLowerCase()
    if (playerChoice === 'rock' 
        || playerChoice === 'paper' 
        || playerChoice === 'scissors') {
            return playerChoice
        } else {
            console.log('Invalid choice. Please type rock, paper or scissors.')
        }
}

function playRound(cpuChoice, playerChoice) {

    // If player chooses 'rock' conditions
    if (playerChoice === 'rock') {
        if (cpuChoice === 'rock') {
            alert('It\'s a tie!')
        } else if (cpuChoice === 'scissors') {
            alert('You win!')
        } else if (cpuChoice === 'paper') {
            alert('You lose!')
        }    
    } 
    
    // If player chooses 'paper' conditions
    else if (playerChoice === 'paper') {
        if (cpuChoice === 'paper') {
            alert('It\'s a tie!')
        } else if (cpuChoice === 'rock') {
            alert('You win!')
        } else if (cpuChoice === 'scissors') {
            alert('You lose!')
        }
    } 
    
    // If player chooses 'scissors' conditions
    else if (playerChoice === 'scissors') {
        if (cpuChoice === 'scissors') {
            alert('It\'s a tie!')
        } else if (cpuChoice === 'paper') {
            alert('You win!')
        } else if (cpuChoice === 'rock') {
            alert('You lose!')
        }
    }
}
