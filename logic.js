function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random()*3)];
}

function getUserChoice() {
    let validChoices=["rock", "paper", "scissors"];
    let userChoice = prompt("Select either Rock, Paper or Scissors: ");
    userChoice = userChoice.toLowerCase();

    if(validChoices.indexOf(userChoice) > -1){
        return userChoice;
    } else {
        console.log("Invalid Choice")
        return 2;
    }
    
}

function runRound(computerChoice, userChoice){
    if (computerChoice === userChoice){
        console.log("This round is a tie")
        return 2
    }
    else if (computerChoice === "rock" && userChoice ==="paper"){
        return 1
    }
    else if (computerChoice === "paper" && userChoice === "scissors"){
        return 1
    }
    else if (computerChoice === "scissors" && userChoice ==="rock"){
        return 1
    }
    else {
        return 0
    }
}

function runGame(){


    let userScore =0;
    let computerScore =0;

    for (let i =0; i <5; i++){
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        if (userChoice ===2){
            break;
        }
        else{
            let outcome = runRound(computerChoice, userChoice);
            if (outcome === 2){
                
            } else if (outcome ===1){
                userScore++;
            } else {
                computerScore++;
            }
        }
        console.log(`User Score : ${userScore} || Computer Score : ${computerScore}`);
    }

    if (userScore > computerScore){
        console.log("User Wins")
    } else if(userScore<computerScore){
        console.log("Computer Wins")
    } else{
        console.log("It is a TIE!!")
    }
}

runGame();