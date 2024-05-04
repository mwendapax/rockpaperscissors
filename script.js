let playerAllCase, playerSelectionconfirm, computerChoiceConfirm, computerAidNumber, computerChooser;

let computerChoiceAlgo = ["rock", "paper", "scissors"];


function getPlayerSelection(playerSelection){
    let playerChoice = prompt("Choose ROCK, PAPER or SCISSORS");

     playerAllCase = playerChoice.toLowerCase();

     return " ---" + playerAllCase + " is your choice!--";

}

function getComputerChoice(computerChoice){
    computerAidPrompt = prompt(`ENTER A RANDOM NUMBER TO HELP THE COMPUTER MAKE A CHOICE!`);

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
    return `The computer has made it's choice!
    PROCEED TO GET RESULTS?`;

}



function playGame(retryGame){let gameStartAlert = confirm(`Welcome to Rock, Paper, Scissors.
START NEW GAME?`);



function gameResultAlert(gameResult){
    if(playerAllCase == computerChooser){
     return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + "---oopsie, It's a DRAW try a new game!---" );
    } 
    
    else if(playerAllCase == 'rock' && computerChooser == 'paper'){
        return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + " You LOSE: ROCK looses to PAPER ---" );
    }

    else if (playerAllCase == 'paper' && computerChooser == 'rock'){
        return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + "---You WIN: PAPER beats ROCK---" );
    }

    else if (playerAllCase == 'rock' && computerChooser == 'scissors'){
        return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + "---You WIN: ROCK beats SCISSORS---" );
    }
    else if (playerAllCase == 'scissors' && computerChooser == 'rock'){
        return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + "---You LOSE: SCISSORS loose to ROCK---" );
    }
    else if (playerAllCase == 'paper' && computerChooser == 'scissors'){
        return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + "---You LOSE: PAPER looses to SCISSORS---" );
    }
    else if (playerAllCase == 'scissors' && computerChooser == 'paper'){
        return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + "---You WIN: SCISSORS beat Rock---" );
    }
    else{
        alert('PLEASE ENTER CORRECT VALUES!');
    }
}


if (gameStartAlert){
    let gameRulesAlert = confirm(`Game rules:
    -- ROCK beats SCISSORS 
    -- SCISSORS beat PAPER 
    -- PAPER beats ROCK 

    PROCEED?
`);
 
if (gameRulesAlert){
   playerSelectionConfirm = alert(getPlayerSelection());
   playerContinueConfirm = confirm('Continue to get computer choice?')

   if (playerContinueConfirm){
    computerChoiceConfirm = confirm(getComputerChoice());
   } if (computerChoiceConfirm){
   alert(gameResultAlert());
   }
}
}

}

let gameStartAlert = confirm(`Welcome to Rock, Paper, Scissors.
START NEW GAME?`);



function gameResultAlert(gameResult){
    if(playerAllCase == computerChooser){
     return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + "---oopsie, IT'S A DRAW try a new game!---" );
    }

    else if(playerAllCase == 'rock' && computerChooser == 'paper'){
        return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + " You LOSE: ROCK looses to PAPER ---" );
    }

    else if (playerAllCase == 'paper' && computerChooser == 'rock'){
        return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + "---You WIN: PAPER beats ROCK---" );
    }

    else if (playerAllCase == 'rock' && computerChooser == 'scissors'){
        return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + "---You WIN: ROCK beats SCISSORS---" );
    }
    else if (playerAllCase == 'scissors' && computerChooser == 'rock'){
        return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + "---You LOSE: SCISSORS loose to ROCK---" );
    }
    else if (playerAllCase == 'paper' && computerChooser == 'scissors'){
        return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + "---You LOSE: PAPER looses to SCISSORS---" );
    }
    else if (playerAllCase == 'scissors' && computerChooser == 'paper'){
        return   alert(`YOUR CHOICE: ` + playerAllCase + `
        COMPUTER CHOICE: ` + computerChooser + `
        ` + " " + "---You WIN: SCISSORS beat Rock---" );
    }
    else{
        alert('PLEASE ENTER CORRECT VALUES!');
    }
}


if (gameStartAlert){
    let gameRulesAlert = confirm(`GAME RULES:

    -- ROCK beats SCISSORS 
    -- SCISSORS beats PAPER 
    -- PAPER beats ROCK 

    PROCEED?
`);
 
if (gameRulesAlert){
   playerSelectionConfirm = alert(getPlayerSelection());
   playerContinueConfirm = confirm('Continue to get computer choice?')

   if (playerContinueConfirm){
    computerChoiceConfirm = confirm(getComputerChoice());
   } if (computerChoiceConfirm){
   alert(gameResultAlert());
   playGame();
   }
}
}

let continueGame = confirm("Press ok to start new game");

if (continueGame){
    playGame();
    playGame();
    playGame();

}
else {
    alert("--  Thank you for playing --");
}
