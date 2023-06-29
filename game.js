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

function playGame() {
    let btns = document.querySelectorAll("button");

    btns.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(getComputerChoice(), button.id)
        });
    });
};


function playRound(cpuChoice, playerChoice) {
    let roundStatus = document.querySelector("#roundStatus")
        
    if ((playerChoice === cpuChoice)) {
        roundStatus.textContent = "Tie";;
    } else if ((playerChoice === 'rock' && cpuChoice === 'scissors')
            || (playerChoice === 'scissors' && cpuChoice === 'paper')
            || (playerChoice === 'paper' && cpuChoice === 'rock')
            ) {
                let playerScore = document.querySelector("#playerScore")
                playerScore.textContent = Number(playerScore.textContent) + 1;
                roundStatus.textContent = "Round won";
                pScore++;
                resultCheck();
            } else {
                let cpuScore = document.querySelector("#cpuScore");
                cpuScore.textContent = Number(cpuScore.textContent) + 1;
                roundStatus.textContent = "Round lost";
                cScore++;
                resultCheck();
            }
        
    
};

function resultCheck() {
    if (pScore === 5) {
        console.log('Congrats! You\'ve won the game!')
        clearGameUI()
        endScreen("You win!")
    } else if (cScore === 5) {
        console.log('Game over! You lost :(')
        clearGameUI()
        endScreen("Game over!")
    }
};

function endScreen(endGameAnnouncement) {
    let body = document.querySelector("body");
    let endGame = document.createElement("div");
    endGame.textContent = (endGameAnnouncement);
    endGame.id = "endGame"
    body.appendChild(endGame);
};




function clearGameUI() {
    // Clear buttons
    let userButtons = document.querySelector("div.userButtons");
    let buttonArray = [
        document.querySelector("#rock"),
        document.querySelector("#paper"), 
        document.querySelector("#scissors")
    ];

    for (button of buttonArray) {
        userButtons.removeChild(button);
    };
    
    // Clear score and icons
    let scoreUI = document.querySelector("div.scoreUI");

    // Clear text
    let body = document.querySelector("body");

    body.removeChild(document.querySelector("#weaponText"));
    body.removeChild(document.querySelector("#roundStatus"));

};


// Full Game function
let pScore = 0;
let cScore = 0;

playGame(); 




