const promptText = document.querySelector('#prompt-text');
const promptBtnOk = document.querySelector('#ok-btn');
const promptBtnRetry = document.querySelector('#retry-btn');
const promptBox = document.querySelector('#prompt-box');
const playerScore = document.querySelector('#player-result');
const computerScore = document.querySelector('#computer-result');

let playerChoice;

function gameRulesText (e) {
    promptText.textContent = `ROCK beats SCISSORS, SCISSORS beat PAPER, PAPER beats ROCK. PROCEED?`;

};

let playerAllCase, playerSelectionconfirm, computerChoiceConfirm, computerAidNumber, computerChooser, computerAidPrompt;

let computerChoiceAlgo = ["rock", "paper", "scissors"];

function getComputerChoice(computerChoice){
    computerAidPrompt = prompt(`ENTER A RANDOM NUMBER TO HELP THE COMPUTER MAKE A CHOICE!`, '1893');

    computerAidNumber = Number(computerAidPrompt);

    if (computerAidNumber % 2 == 0 || computerAidNumber % 7 == 0){
        computerChooser = computerChoiceAlgo[0];
    }
    else if (computerAidNumber % 3 == 0 || computerAidNumber % 5 == 0){
        computerChooser = computerChoiceAlgo[2];
    }
    else {
        computerChooser = computerChoiceAlgo[1];
    }

    if(playerChoice == computerChooser){
        promptText.textContent = `Your Choice: ${playerChoice} | ComputerChoice: ${computerChooser} | Result: Draw`;
        playerScore.textContent = `Player : Draw`;
        computerScore.textContent = `Computer: Draw`;

       } 
       
       else if(playerChoice == 'rock' && computerChooser == 'paper'){
           promptText.textContent = `Your Choice: ${playerChoice} | ComputerChoice: ${computerChooser} | Result: Lost`;
           playerScore.textContent = `Player: Lost`;
            computerScore.textContent = `Computer: Won`;
       }
   
       else if (playerChoice == 'paper' && computerChooser == 'rock'){
        promptText.textContent = `Your Choice: ${playerChoice} | ComputerChoice: ${computerChooser} | Result: Won`;
        playerScore.textContent = `Player: Won`;
        computerScore.textContent = `Computer: Lost`;
       }
   
       else if (playerChoice == 'rock' && computerChooser == 'scissors'){
        promptText.textContent = `Your Choice: ${playerChoice} | ComputerChoice: ${computerChooser} | Result: Won`;
        playerScore.textContent = `Player: Won`;
        computerScore.textContent = `Computer: Lost`;
       }
       else if (playerChoice == 'scissors' && computerChooser == 'rock'){
        promptText.textContent = `Your Choice: ${playerChoice} | ComputerChoice: ${computerChooser} | Result: Lost`;
        playerScore.textContent = `Player: Lost`;
        computerScore.textContent = `Computer: Won`;
       }
       else if (playerChoice == 'paper' && computerChooser == 'scissors'){
           promptText.textContent = `Your Choice: ${playerChoice} | ComputerChoice: ${computerChooser} | Result: Lost`;
           playerScore.textContent = `Player: Lost`;
            computerScore.textContent = `Computer: Won`;
        }
       else if (playerAllCase == 'scissors' && computerChooser == 'paper'){
        promptText.textContent = `Your Choice: ${playerChoice} | ComputerChoice: ${computerChooser} | Result: Won`;
        playerScore.textContent = `Player: Won`;
        computerScore.textContent = `Computer: Lost`;
    }
       else{
           promptText.textContent = 'PLEASE ENTER CORRECT VALUES!';
       }
};

let gameButtons, rockButton, paperButton, scissorsButton;

function getPlayerSelection (e) {

    promptText.textContent = `Choose Rock, Paper or Scissors`;

    gameButtons = document.createElement('div');
    gameButtons.setAttribute('id', 'game-buttons');

    rockButton = document.createElement('div');
    rockButton.setAttribute('id', 'rock-button');
    rockButton.textContent = 'Rock';

    paperButton = document.createElement('div');
    paperButton.setAttribute('id', 'paper-button');
    paperButton.textContent = 'Paper';

    scissorsButton = document.createElement('div');
    scissorsButton.setAttribute('id', 'scissors-button');
    scissorsButton.textContent = 'Scissors';

    playerScore.classList.add('score-styles');
    computerScore.classList.add('score-styles');


    rockButton.addEventListener('click', (e) => {
        promptText.textContent = `Your choice is Rock. Proceed to get computer choice?`;
        promptBtnOk.addEventListener('click', (e) => {
            playerChoice = 'rock';  
           
            getComputerChoice();
        }, {once: true});

    });

    paperButton.addEventListener('click', (e) => {
        promptText.textContent = `Your choice is Paper. Proceed to get computer choice?`;
        promptBtnOk.addEventListener('click', (e) => {
            playerChoice = 'paper';
           getComputerChoice();
            e.stopPropagation();
        }, {once: true});
    });

    scissorsButton.addEventListener('click', (e) => {
        promptText.textContent = `Your choice is Scissors. Proceed to get computer choice?`;
        promptBtnOk.addEventListener('click', (e) => {
            playerChoice = 'scissors';
            getComputerChoice();
        }, {once: true});
    });


    gameButtons.appendChild(rockButton);
    gameButtons.appendChild(paperButton);
    gameButtons.appendChild(scissorsButton);

    promptBox.appendChild(gameButtons);
    gameButtons.classList.add('game-buttons-style');

    
    
}

let i = 0, j = 0;
 

promptBtnRetry.addEventListener('click', (e) => {
    retryBtn = true;
});

    if(i == 0){
        promptBtnOk.classList.add('first-click');
        let firstClick = document.querySelector('.first-click');
        if(i == 0){
            firstClick.addEventListener('click', (e) => {
            gameRulesText();

            let event = new Event('playerSelectionEvent');

            promptBtnOk.addEventListener('click', (e) => {
                j++;
                promptBtnOk.addEventListener('playerSelectionEvent', (e) => {
                    getPlayerSelection();
                });

                if(j == 1){
                    promptBtnOk.dispatchEvent(event);
                }
                e.stopPropagation();
            });
            e.stopPropagation();
        });}
    };



