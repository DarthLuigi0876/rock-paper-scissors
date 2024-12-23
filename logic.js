function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    return choices[Math.floor(Math.random()*3)];
}

function getUserChoice() {
    let validChoices=["Rock", "Paper", "Scissors"];
    let userChoice = prompt("Select either Rock, Paper or Scissors: ");

    if(validChoices.indexOf(userChoice) > -1){
        return userChoice;
    } else {
        console.log("Invalid Choice")
    }
    
}

console.log(getComputerChoice());
console.log(getUserChoice());
