// Sub-functions
function getComputerChoice() {
    cpuChoice = Math.floor(Math.random() * 3) + 1;
    if (cpuChoice === 1) {
        return 'rock';
    } else if (cpuChoice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
};


function getPlayerChoice() {
    playerChoice = prompt('Rock, paper or scissors?:').toLowerCase();
    if (playerChoice === 'rock' 
        || playerChoice === 'paper' 
        || playerChoice === 'scissors') {
            return playerChoice;
        } else {
            console.log('Invalid choice. Please type rock, paper or scissors.');
        }
};

function playRound(cpuChoice, playerChoice) {

    if ((playerChoice === cpuChoice)) {
        console.log('It\'s a tie!')
    } else if ((playerChoice === 'rock' && cpuChoice === 'scissors')
            || (playerChoice === 'scissors' && cpuChoice === 'paper')
            || (playerChoice === 'paper' && cpuChoice === 'rock')
            ) {
                console.log('You win!')
                return('player win')
            } else {
                console.log('You lose!')
                return('cpu win')
            }
};


// Full Game function

function playGame() {
    let playerScore = 0;
    let cpuScore = 0;
    
    while (playerScore < 5 && cpuScore < 5) {

        let result = playRound(getComputerChoice(), getPlayerChoice());

        if (result === 'player win') {
            playerScore++;
        } else if (result === 'cpu win') {
            cpuScore++;
        }

        console.log(`Player Score: ${playerScore} CPU Score: ${cpuScore}`)
    }

    if (playerScore === 5) {
        console.log('Congrats! You\'ve won the game!')
    } else if (cpuScore === 5) {
        console.log('Game over! You lost :(')
    }
    

};




// DOM Manipulation

btns = document.querySelectorAll("button");

btns.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
});


