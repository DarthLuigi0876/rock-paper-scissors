function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random()*3)];


}

let userScore =0;
let computerScore =0;


let userChoice = '';
let resultDisplay = document.querySelector(".result");
let scoreDisplay = document.querySelector('.score');
const winnerDisplay = document.querySelector('.winner');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
    userChoice = button.className;

    let computerChoice = getComputerChoice();
    let result = playRound(userChoice, computerChoice);
    resultDisplay.textContent=`${result}`;
    scoreDisplay.textContent=`Your Score: ${userScore} || Computer Score: ${computerScore}`;
    if (result =='You win this round!'){
        userScore++;
    }else if(result =='You lose this round!'){
        computerScore++;
    }
    if(userScore ==5 || computerScore==5){
        declareWinner(userScore, computerScore);
    }

    });
});

function playRound(user, computer) {
    if (user === computer) return 'Its a draw!';
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
    ) {
        return 'You win this round!';
    }
    return 'You lose this round!';
}

function declareWinner(uScore, cScore){
    if(uScore ==5){
        winnerDisplay.textContent='You won!!'
    }else if(cScore ==5){
        winnerDisplay.textContent="You lost!"
    }
}